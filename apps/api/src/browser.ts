import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
import { Hono, type Context } from 'hono';
import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
import { z } from 'zod';
import type {
  DurableDeadLetterRecord,
  DurableWorkOperationErrorCode,
  DurableWorkReplayResult,
  DurableWorkType,
} from '@ozzyl/database';
import {
  browserSessionResponseSchema,
  durableDeadLetterListResponseSchema,
  durableWorkReplayRequestSchema,
  durableWorkReplayResponseSchema,
  merchantDashboardOverviewSchema,
  nativeShadowRolloutModeSchema,
  nativeShadowRolloutResponseSchema,
  platformAdminOverviewSchema,
  type BrowserOrganization,
  type BrowserSessionResponse,
  type MerchantDashboardOverview,
  type NativeShadowRolloutMode,
  type PlatformAdminOverview,
  type PlatformRole,
} from '@ozzyl/shared-types';
import type { RateLimiter } from './index.js';

const SESSION_COOKIE = 'ozzyl_session';
const loginSchema = z.object({
  email: z
    .string()
    .email()
    .max(320)
    .transform((value) => value.trim().toLowerCase()),
  password: z.string().min(10).max(1_000),
});
const dashboardScopeSchema = z.object({
  organization_id: z.string().min(1).max(200),
  store_id: z.string().min(1).max(200),
});
const durableWorkOperationErrorCodes = new Set<DurableWorkOperationErrorCode>([
  'STORE_ADMIN_REQUIRED',
  'DEAD_LETTER_NOT_FOUND',
  'DEAD_LETTER_NOT_REPLAYABLE',
  'DEAD_LETTER_IDEMPOTENCY_CONFLICT',
  'DEAD_LETTER_STATE_CHANGED',
]);
const deadLetterScopeSchema = dashboardScopeSchema.extend({
  limit: z.coerce.number().int().min(1).max(100).default(50),
});
const nativeShadowRolloutUpdateSchema = dashboardScopeSchema
  .extend({
    mode: nativeShadowRolloutModeSchema,
    rollout_version: z.string().trim().min(1).max(100),
    sample_rate_bps: z.number().int().min(0).max(10000),
  })
  .refine(
    (value) =>
      (value.mode === 'off' && value.sample_rate_bps === 0) ||
      (value.mode === 'shadow' && value.sample_rate_bps > 0),
    { message: 'off requires zero sampling; shadow requires positive sampling' },
  );

export interface UserSessionIdentity {
  sessionId: string;
  userId: string;
  email: string;
  platformRole: PlatformRole;
  expiresAt: string;
  organizations: BrowserOrganization[];
}

export interface BrowserLoginResult {
  rawToken: string;
  identity: UserSessionIdentity;
}

export interface BrowserAuthService {
  login(email: string, password: string): Promise<BrowserLoginResult | null>;
  resolve(rawToken: string): Promise<UserSessionIdentity | null>;
  revoke(input: { sessionId: string; userId: string }): Promise<void>;
}

export interface MerchantDashboardRepository {
  loadOverview(input: {
    userId: string;
    organizationId: string;
    storeId: string;
    now: Date;
  }): Promise<MerchantDashboardOverview | null>;
}

export interface PlatformAdminRepository {
  loadOverview(input: { userId: string; now: Date }): Promise<PlatformAdminOverview | null>;
}

export interface NativeShadowRolloutAdministrationRepository {
  setForStore(input: {
    userId: string;
    organizationId: string;
    storeId: string;
    mode: NativeShadowRolloutMode;
    rolloutVersion: string;
    sampleRateBps: number;
  }): Promise<{
    organizationId: string;
    storeId: string;
    integration: 'multi-store-saas';
    mode: NativeShadowRolloutMode;
    rolloutVersion: string;
    sampleRateBps: number;
    samplingKey: string;
  } | null>;
}

export interface DurableWorkOperationsRepository {
  listDeadLetters(input: {
    requestedByUserId: string;
    organizationId: string;
    storeId: string;
    limit?: number;
    at?: Date;
  }): Promise<DurableDeadLetterRecord[]>;
  replayDeadLetter(input: {
    requestedByUserId: string;
    organizationId: string;
    storeId: string;
    workType: DurableWorkType;
    workId: string;
    idempotencyKey: string;
    at?: Date;
  }): Promise<DurableWorkReplayResult>;
}

export interface BrowserAuditRepository {
  record(input: {
    organizationId: string | null;
    actorId: string | null;
    action: string;
    targetType?: string;
    targetId?: string;
    metadata?: Record<string, unknown>;
  }): Promise<void>;
}

export interface BrowserApiDependencies {
  auth: BrowserAuthService;
  dashboard: MerchantDashboardRepository;
  admin: PlatformAdminRepository;
  nativeShadowRollouts?: NativeShadowRolloutAdministrationRepository;
  durableWorkOperations?: DurableWorkOperationsRepository;
  audit: BrowserAuditRepository;
  rateLimiter: RateLimiter;
  csrfSecret: string;
  secureCookies?: boolean;
  now?: () => Date;
}

type BrowserEnvironment = {
  Variables: {
    requestId: string;
  };
};

export function createBrowserApi(dependencies: BrowserApiDependencies): Hono<BrowserEnvironment> {
  const app = new Hono<BrowserEnvironment>();
  const now = dependencies.now ?? (() => new Date());

  app.use('*', async (context, next) => {
    const requestId = context.req.header('X-Request-ID')?.slice(0, 200) || randomUUID();
    context.set('requestId', requestId);
    await next();
    context.header('X-Request-ID', requestId);
    context.header('Cache-Control', 'no-store');
  });

  app.post('/auth/login', async (context) => {
    const requestId = context.get('requestId');
    const parsed = await parseJson(context.req.raw, loginSchema);
    if (!parsed.success) return browserError(requestId, 400, 'INVALID_REQUEST', parsed.message);

    const rateLimitKey = `browser-login:${parsed.value.email}`;
    const allowed = await dependencies.rateLimiter.consume(rateLimitKey, 10, 15 * 60_000);
    if (!allowed) return browserError(requestId, 429, 'RATE_LIMITED', 'Too many login attempts');

    const result = await dependencies.auth.login(parsed.value.email, parsed.value.password);
    if (!result) {
      await dependencies.audit.record({
        organizationId: null,
        actorId: null,
        action: 'authentication.login_failed',
        metadata: { requestId },
      });
      return browserError(requestId, 401, 'INVALID_CREDENTIALS', 'Email or password is incorrect');
    }

    setSessionCookie(
      context,
      result.rawToken,
      result.identity.expiresAt,
      dependencies.secureCookies,
    );
    await dependencies.audit.record({
      organizationId: result.identity.organizations[0]?.id ?? null,
      actorId: result.identity.userId,
      action: 'authentication.login_succeeded',
      targetType: 'user_session',
      targetId: result.identity.sessionId,
      metadata: { requestId },
    });
    return context.json(
      buildSessionResponse(result.identity, result.rawToken, dependencies.csrfSecret),
    );
  });

  app.get('/auth/session', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    return context.json(
      buildSessionResponse(authenticated.identity, authenticated.rawToken, dependencies.csrfSecret),
    );
  });

  app.post('/auth/logout', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    const csrfHeader = context.req.header('X-CSRF-Token');
    if (!verifyCsrfToken(authenticated.rawToken, csrfHeader, dependencies.csrfSecret)) {
      return browserError(context.get('requestId'), 403, 'CSRF_REJECTED', 'CSRF token is invalid');
    }

    await dependencies.auth.revoke({
      sessionId: authenticated.identity.sessionId,
      userId: authenticated.identity.userId,
    });
    deleteCookie(context, SESSION_COOKIE, { path: '/' });
    await dependencies.audit.record({
      organizationId: authenticated.identity.organizations[0]?.id ?? null,
      actorId: authenticated.identity.userId,
      action: 'authentication.logout',
      targetType: 'user_session',
      targetId: authenticated.identity.sessionId,
      metadata: { requestId: context.get('requestId') },
    });
    return context.json({ success: true as const });
  });

  app.get('/dashboard/v1/overview', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    const parsedScope = dashboardScopeSchema.safeParse({
      organization_id: context.req.query('organization_id'),
      store_id: context.req.query('store_id'),
    });
    if (!parsedScope.success) {
      return browserError(
        context.get('requestId'),
        400,
        'INVALID_SCOPE',
        'organization_id and store_id are required',
      );
    }
    const allowedScope = findMerchantScope(
      authenticated.identity,
      parsedScope.data.organization_id,
      parsedScope.data.store_id,
    );
    if (!allowedScope) {
      return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
    }

    const overview = await dependencies.dashboard.loadOverview({
      userId: authenticated.identity.userId,
      organizationId: allowedScope.organization.id,
      storeId: allowedScope.store.id,
      now: now(),
    });
    if (!overview) {
      return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
    }
    await dependencies.audit.record({
      organizationId: allowedScope.organization.id,
      actorId: authenticated.identity.userId,
      action: 'dashboard.overview_viewed',
      targetType: 'store',
      targetId: allowedScope.store.id,
      metadata: { requestId: context.get('requestId') },
    });
    return context.json(merchantDashboardOverviewSchema.parse(overview));
  });

  app.put('/dashboard/v1/native-shadow-rollout', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    const csrfHeader = context.req.header('X-CSRF-Token');
    if (!verifyCsrfToken(authenticated.rawToken, csrfHeader, dependencies.csrfSecret)) {
      return browserError(context.get('requestId'), 403, 'CSRF_REJECTED', 'CSRF token is invalid');
    }
    if (!dependencies.nativeShadowRollouts) {
      return browserError(
        context.get('requestId'),
        503,
        'NATIVE_SHADOW_ROLLOUT_UNAVAILABLE',
        'Native shadow rollout administration is unavailable',
      );
    }
    const parsed = await parseJson(context.req.raw, nativeShadowRolloutUpdateSchema);
    if (!parsed.success) {
      return browserError(context.get('requestId'), 400, 'INVALID_REQUEST', parsed.message);
    }
    const allowedScope = findMerchantScope(
      authenticated.identity,
      parsed.value.organization_id,
      parsed.value.store_id,
    );
    if (!allowedScope) {
      return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
    }
    if (allowedScope.organization.role !== 'owner' && allowedScope.organization.role !== 'admin') {
      return browserError(
        context.get('requestId'),
        403,
        'STORE_ADMIN_REQUIRED',
        'Store owner or administrator access is required',
      );
    }
    const rollout = await dependencies.nativeShadowRollouts.setForStore({
      userId: authenticated.identity.userId,
      organizationId: allowedScope.organization.id,
      storeId: allowedScope.store.id,
      mode: parsed.value.mode,
      rolloutVersion: parsed.value.rollout_version,
      sampleRateBps: parsed.value.sample_rate_bps,
    });
    if (!rollout) {
      return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
    }
    await dependencies.audit.record({
      organizationId: allowedScope.organization.id,
      actorId: authenticated.identity.userId,
      action: 'native_shadow.rollout_updated',
      targetType: 'store',
      targetId: allowedScope.store.id,
      metadata: {
        requestId: context.get('requestId'),
        mode: rollout.mode,
        rolloutVersion: rollout.rolloutVersion,
        sampleRateBps: rollout.sampleRateBps,
      },
    });
    return context.json(
      nativeShadowRolloutResponseSchema.parse({
        success: true,
        organization_id: rollout.organizationId,
        store_id: rollout.storeId,
        integration: rollout.integration,
        mode: rollout.mode,
        rollout_version: rollout.rolloutVersion,
        sample_rate_bps: rollout.sampleRateBps,
        sampling_key: rollout.samplingKey,
      }),
    );
  });

  app.get('/dashboard/v1/dead-letters', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    if (!dependencies.durableWorkOperations) {
      return browserError(
        context.get('requestId'),
        503,
        'DURABLE_WORK_OPERATIONS_UNAVAILABLE',
        'Durable work operations are unavailable',
      );
    }
    const parsedScope = deadLetterScopeSchema.safeParse({
      organization_id: context.req.query('organization_id'),
      store_id: context.req.query('store_id'),
      limit: context.req.query('limit'),
    });
    if (!parsedScope.success) {
      return browserError(
        context.get('requestId'),
        400,
        'INVALID_SCOPE',
        'organization_id, store_id, and an optional limit between 1 and 100 are required',
      );
    }
    const allowedScope = findMerchantScope(
      authenticated.identity,
      parsedScope.data.organization_id,
      parsedScope.data.store_id,
    );
    if (!allowedScope) {
      return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
    }
    if (allowedScope.organization.role !== 'owner' && allowedScope.organization.role !== 'admin') {
      return browserError(
        context.get('requestId'),
        403,
        'STORE_ADMIN_REQUIRED',
        'Store owner or administrator access is required',
      );
    }
    try {
      const deadLetters = await dependencies.durableWorkOperations.listDeadLetters({
        requestedByUserId: authenticated.identity.userId,
        organizationId: allowedScope.organization.id,
        storeId: allowedScope.store.id,
        limit: parsedScope.data.limit,
        at: now(),
      });
      await dependencies.audit.record({
        organizationId: allowedScope.organization.id,
        actorId: authenticated.identity.userId,
        action: 'durable_work.dead_letters_viewed',
        targetType: 'store',
        targetId: allowedScope.store.id,
        metadata: {
          requestId: context.get('requestId'),
          resultCount: deadLetters.length,
        },
      });
      return context.json(
        durableDeadLetterListResponseSchema.parse({
          success: true,
          organization_id: allowedScope.organization.id,
          store_id: allowedScope.store.id,
          dead_letters: deadLetters.map(serializeDeadLetter),
        }),
      );
    } catch (error) {
      return durableWorkBrowserError(context.get('requestId'), error);
    }
  });

  app.post('/dashboard/v1/dead-letter-replays', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    const csrfHeader = context.req.header('X-CSRF-Token');
    if (!verifyCsrfToken(authenticated.rawToken, csrfHeader, dependencies.csrfSecret)) {
      return browserError(context.get('requestId'), 403, 'CSRF_REJECTED', 'CSRF token is invalid');
    }
    if (!dependencies.durableWorkOperations) {
      return browserError(
        context.get('requestId'),
        503,
        'DURABLE_WORK_OPERATIONS_UNAVAILABLE',
        'Durable work operations are unavailable',
      );
    }
    const parsed = await parseJson(context.req.raw, durableWorkReplayRequestSchema);
    if (!parsed.success) {
      return browserError(context.get('requestId'), 400, 'INVALID_REQUEST', parsed.message);
    }
    const allowedScope = findMerchantScope(
      authenticated.identity,
      parsed.value.organization_id,
      parsed.value.store_id,
    );
    if (!allowedScope) {
      return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
    }
    if (allowedScope.organization.role !== 'owner' && allowedScope.organization.role !== 'admin') {
      return browserError(
        context.get('requestId'),
        403,
        'STORE_ADMIN_REQUIRED',
        'Store owner or administrator access is required',
      );
    }
    try {
      const replay = await dependencies.durableWorkOperations.replayDeadLetter({
        requestedByUserId: authenticated.identity.userId,
        organizationId: allowedScope.organization.id,
        storeId: allowedScope.store.id,
        workType: parsed.value.work_type,
        workId: parsed.value.work_id,
        idempotencyKey: parsed.value.idempotency_key,
        at: now(),
      });
      return context.json(durableWorkReplayResponseSchema.parse(serializeReplay(replay)));
    } catch (error) {
      return durableWorkBrowserError(context.get('requestId'), error);
    }
  });

  app.get('/admin/v1/overview', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    if (authenticated.identity.platformRole !== 'platform_admin') {
      return browserError(
        context.get('requestId'),
        403,
        'PLATFORM_ADMIN_REQUIRED',
        'Platform administrator access is required',
      );
    }
    const overview = await dependencies.admin.loadOverview({
      userId: authenticated.identity.userId,
      now: now(),
    });
    if (!overview) {
      return browserError(
        context.get('requestId'),
        403,
        'PLATFORM_ADMIN_REQUIRED',
        'Platform administrator access is required',
      );
    }
    await dependencies.audit.record({
      organizationId: null,
      actorId: authenticated.identity.userId,
      action: 'platform_admin.overview_viewed',
      targetType: 'platform',
      targetId: 'ozzyl-guard',
      metadata: { requestId: context.get('requestId') },
    });
    return context.json(platformAdminOverviewSchema.parse(overview));
  });

  return app;
}

function buildSessionResponse(
  identity: UserSessionIdentity,
  rawToken: string,
  csrfSecret: string,
): BrowserSessionResponse {
  return browserSessionResponseSchema.parse({
    success: true,
    user: {
      id: identity.userId,
      email: identity.email,
      platform_role: identity.platformRole,
    },
    organizations: identity.organizations,
    csrf_token: csrfToken(rawToken, csrfSecret),
    expires_at: identity.expiresAt,
  });
}

async function authenticateBrowserRequest(
  context: Context<BrowserEnvironment>,
  dependencies: BrowserApiDependencies,
): Promise<
  | { success: true; identity: UserSessionIdentity; rawToken: string }
  | { success: false; response: Response }
> {
  const requestId = context.get('requestId');
  const rawToken = getCookie(context, SESSION_COOKIE);
  if (!rawToken) {
    return {
      success: false,
      response: browserError(requestId, 401, 'USER_SESSION_REQUIRED', 'A user session is required'),
    };
  }
  const identity = await dependencies.auth.resolve(rawToken);
  if (!identity) {
    deleteCookie(context, SESSION_COOKIE, { path: '/' });
    return {
      success: false,
      response: browserError(
        requestId,
        401,
        'USER_SESSION_INVALID',
        'User session is invalid or expired',
      ),
    };
  }
  const allowed = await dependencies.rateLimiter.consume(
    `browser-session:${identity.sessionId}`,
    300,
    60_000,
  );
  if (!allowed) {
    return {
      success: false,
      response: browserError(requestId, 429, 'RATE_LIMITED', 'Too many requests'),
    };
  }
  return { success: true, identity, rawToken };
}

function findMerchantScope(identity: UserSessionIdentity, organizationId: string, storeId: string) {
  const organization = identity.organizations.find((item) => item.id === organizationId);
  const store = organization?.stores.find((item) => item.id === storeId);
  return organization && store ? { organization, store } : null;
}

function setSessionCookie(
  context: Parameters<typeof setCookie>[0],
  rawToken: string,
  expiresAt: string,
  secure = false,
): void {
  const expires = new Date(expiresAt);
  const maxAge = Math.max(0, Math.floor((expires.getTime() - Date.now()) / 1_000));
  setCookie(context, SESSION_COOKIE, rawToken, {
    httpOnly: true,
    secure,
    sameSite: 'Lax',
    path: '/',
    expires,
    maxAge,
  });
}

function csrfToken(rawToken: string, secret: string): string {
  if (secret.length < 16) throw new Error('SESSION_CSRF_SECRET must be at least 16 characters');
  return createHmac('sha256', secret).update(rawToken).digest('base64url');
}

function verifyCsrfToken(rawToken: string, candidate: string | undefined, secret: string): boolean {
  if (!candidate) return false;
  const actual = Buffer.from(csrfToken(rawToken, secret));
  const provided = Buffer.from(candidate);
  return actual.length === provided.length && timingSafeEqual(actual, provided);
}

async function parseJson<TOutput, TInput>(
  request: Request,
  schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
): Promise<{ success: true; value: TOutput } | { success: false; message: string }> {
  try {
    const raw: unknown = await request.json();
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      return {
        success: false,
        message: parsed.error.issues
          .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
          .join('; '),
      };
    }
    return { success: true, value: parsed.data };
  } catch {
    return { success: false, message: 'Request body must be valid JSON' };
  }
}

function serializeDeadLetter(record: DurableDeadLetterRecord) {
  return {
    work_type: record.workType,
    work_id: record.workId,
    organization_id: record.organizationId,
    store_id: record.storeId,
    status: record.status,
    attempts: record.attempts,
    error_code: record.errorCode,
    failed_at: record.failedAt,
    replayable: record.replayable,
    replay_blocked_reason: record.replayBlockedReason,
  };
}

function serializeReplay(result: DurableWorkReplayResult) {
  return {
    success: true as const,
    replay_id: result.replayId,
    organization_id: result.organizationId,
    store_id: result.storeId,
    work_type: result.workType,
    work_id: result.workId,
    previous_status: result.previousStatus,
    previous_error_code: result.previousErrorCode,
    previous_attempts: result.previousAttempts,
    replayed_status: result.replayedStatus,
    replayed_at: result.replayedAt,
    replay: result.replay,
  };
}

function durableWorkBrowserError(requestId: string, error: unknown): Response {
  if (
    !(error instanceof Error) ||
    !('code' in error) ||
    typeof error.code !== 'string' ||
    !durableWorkOperationErrorCodes.has(error.code as DurableWorkOperationErrorCode)
  ) {
    return browserError(
      requestId,
      500,
      'DURABLE_WORK_OPERATION_FAILED',
      'Durable work operation failed',
    );
  }
  const code = error.code as DurableWorkOperationErrorCode;
  const status =
    code === 'STORE_ADMIN_REQUIRED' ? 403 : code === 'DEAD_LETTER_NOT_FOUND' ? 404 : 409;
  return browserError(requestId, status, code, error.message);
}

function browserError(requestId: string, status: number, code: string, message: string): Response {
  return new Response(
    JSON.stringify({ success: false, error: { code, message }, request_id: requestId }),
    {
      status,
      headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
    },
  );
}
