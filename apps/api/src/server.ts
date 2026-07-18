import { createHmac } from 'node:crypto';
import { serve } from '@hono/node-server';
import { Pool } from 'pg';
import { verifyApiKey } from '@ozzyl/authentication';
import { PostgresDurableWorkOperations } from '@ozzyl/database';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import { MemoryUsageLedger, type PlanCode } from '@ozzyl/billing';
import {
  createApiApp,
  MemoryAssessmentRepository,
  MemoryOperationIdempotencyStore,
  MemoryOutcomeRepository,
  MemoryRateLimiter,
  MemoryShadowComparisonRepository,
  MemoryRefreshQueue,
  MissingFeatureProvider,
  type ApiDependencies,
  type ApiKeyIdentity,
  type ApiKeyResolver,
} from './index.js';
import {
  PostgresApiKeyResolver,
  PostgresAssessmentFeatureProvider,
  PostgresAssessmentRepository,
  PostgresBrowserAuditRepository,
  PostgresBrowserAuthService,
  PostgresCourierRefreshQueue,
  PostgresMerchantDashboardRepository,
  PostgresOperationIdempotencyStore,
  PostgresOutcomeRepository,
  PostgresPlatformAdminRepository,
  PostgresUsageLedger,
} from './postgres.js';
import { PostgresVerificationService } from './postgres-verification.js';
import {
  PostgresNativeShadowAttemptRepository,
  PostgresNativeShadowRolloutRepository,
} from './postgres-native-shadow-pilot.js';
import { PostgresShadowComparisonRepository } from './postgres-shadow-comparisons.js';

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
};

class ConfiguredApiKeyResolver implements ApiKeyResolver {
  constructor(
    private readonly configuration: {
      keyHash: string;
      pepper: string;
      identity: ApiKeyIdentity;
    },
  ) {}

  async resolve(rawApiKey: string): Promise<ApiKeyIdentity | null> {
    return verifyApiKey(rawApiKey, this.configuration.keyHash, this.configuration.pepper)
      ? this.configuration.identity
      : null;
  }
}

function configuredPlan(): PlanCode {
  const plan = process.env.OZZYL_PLAN ?? 'free';
  if (!['free', 'starter', 'pro', 'enterprise'].includes(plan)) {
    throw new Error('OZZYL_PLAN is invalid');
  }
  return plan as PlanCode;
}

function configuredEnvironment(): 'test' | 'live' {
  const environment = required('OZZYL_API_KEY_ENVIRONMENT');
  if (environment !== 'test' && environment !== 'live') {
    throw new Error('OZZYL_API_KEY_ENVIRONMENT must be test or live');
  }
  return environment;
}

const phoneHmacKey = required('PHONE_HMAC_KEY');
const apiKeyPepper = required('API_KEY_PEPPER');
const databaseUrl = process.env.DATABASE_URL;
const productionMode = process.env.NODE_ENV === 'production';

if (productionMode && !databaseUrl) {
  throw new Error('DATABASE_URL is required in production');
}

let pool: Pool | undefined;
let dependencies: ApiDependencies;

if (databaseUrl) {
  const sessionPepper = required('SESSION_PEPPER');
  const sessionCsrfSecret = required('SESSION_CSRF_SECRET');
  const rateLimiter = new MemoryRateLimiter();
  pool = new Pool({
    connectionString: databaseUrl,
    max: Number(process.env.DATABASE_POOL_SIZE ?? 20),
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
  });
  const verification = new PostgresVerificationService(pool, {
    otpSecret: required('OTP_HASH_SECRET'),
    cipher: new AesGcmEnvelopeCipher(
      Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
      required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
    ),
  });
  const nativeShadowRollouts = new PostgresNativeShadowRolloutRepository(pool);
  const durableWorkOperations = new PostgresDurableWorkOperations(pool);
  dependencies = {
    apiKeys: new PostgresApiKeyResolver(pool, apiKeyPepper),
    usage: new PostgresUsageLedger(pool),
    features: new PostgresAssessmentFeatureProvider(pool),
    assessments: new PostgresAssessmentRepository(pool),
    outcomes: new PostgresOutcomeRepository(pool),
    shadowComparisons: new PostgresShadowComparisonRepository(pool),
    nativeShadowRollouts,
    nativeShadowAttempts: new PostgresNativeShadowAttemptRepository(pool),
    refreshQueue: new PostgresCourierRefreshQueue(pool),
    idempotency: new PostgresOperationIdempotencyStore(pool),
    rateLimiter,
    hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
    verificationRequests: verification,
    otpVerifier: verification,
    browser: {
      auth: new PostgresBrowserAuthService(pool, sessionPepper),
      dashboard: new PostgresMerchantDashboardRepository(pool),
      admin: new PostgresPlatformAdminRepository(pool),
      nativeShadowRollouts,
      durableWorkOperations,
      audit: new PostgresBrowserAuditRepository(pool),
      rateLimiter,
      csrfSecret: sessionCsrfSecret,
      secureCookies: productionMode,
    },
  };
} else {
  dependencies = {
    apiKeys: new ConfiguredApiKeyResolver({
      keyHash: required('OZZYL_API_KEY_HASH'),
      pepper: apiKeyPepper,
      identity: {
        apiKeyId: process.env.OZZYL_API_KEY_ID ?? 'key_local',
        organizationId: required('OZZYL_ORGANIZATION_ID'),
        storeId: required('OZZYL_STORE_ID'),
        environment: configuredEnvironment(),
        plan: configuredPlan(),
        scopes: new Set([
          'risk:write',
          'risk:read',
          'outcomes:write',
          'comparisons:write',
          'courier:refresh',
          'verification:write',
        ]),
      },
    }),
    usage: new MemoryUsageLedger(),
    features: new MissingFeatureProvider(),
    assessments: new MemoryAssessmentRepository(),
    outcomes: new MemoryOutcomeRepository(),
    shadowComparisons: new MemoryShadowComparisonRepository(),
    refreshQueue: new MemoryRefreshQueue(),
    idempotency: new MemoryOperationIdempotencyStore(),
    rateLimiter: new MemoryRateLimiter(),
    hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
  };
}

const app = createApiApp(dependencies);
const port = Number(process.env.API_PORT ?? 3000);
const server = serve({ fetch: app.fetch, port });
console.info(
  JSON.stringify({
    level: 'info',
    event: 'api.started',
    port,
    persistence: databaseUrl ? 'postgresql' : 'memory',
  }),
);

const shutdown = async (signal: string): Promise<void> => {
  console.info(JSON.stringify({ level: 'info', event: 'api.stopping', signal }));
  server.close();
  await pool?.end();
  process.exit(0);
};

process.once('SIGTERM', () => void shutdown('SIGTERM'));
process.once('SIGINT', () => void shutdown('SIGINT'));
