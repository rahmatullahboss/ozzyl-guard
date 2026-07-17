import { randomUUID } from 'node:crypto';
import { Hono } from 'hono';
import { z } from 'zod';
import type { PlanCode, UsageLedger } from '@ozzyl/billing';
import {
  assessRisk,
  isValidBangladeshPhone,
  normalizeBangladeshPhone,
  type CourierFeatures,
  type MerchantFeatures,
  type NetworkFeatures,
  type RiskPolicy,
  type VelocityFeatures,
  type VerificationFeatures,
} from '@ozzyl/risk-engine';
import {
  orderOutcomeSchema,
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type OrderOutcomeInput,
  type RiskAssessmentRequest,
  type RiskAssessmentResponse,
} from '@ozzyl/shared-types';
import { VerificationError } from '@ozzyl/verification';
import { createBrowserApi, type BrowserApiDependencies } from './browser.js';

export * from './postgres-administration.js';

export interface ApiKeyIdentity {
  apiKeyId: string;
  organizationId: string;
  storeId: string;
  environment: 'test' | 'live';
  plan: PlanCode;
  scopes: ReadonlySet<string>;
}

export interface ApiKeyResolver {
  resolve(rawApiKey: string): Promise<ApiKeyIdentity | null>;
}

export interface AssessmentFeatureSet {
  courier: CourierFeatures;
  merchant: MerchantFeatures;
  velocity: VelocityFeatures;
  verification: VerificationFeatures;
  network: NetworkFeatures;
  policy?: RiskPolicy;
}

export interface AssessmentFeatureProvider {
  load(input: {
    identity: ApiKeyIdentity;
    phone: string;
    phoneHash: string;
    request: RiskAssessmentRequest;
  }): Promise<AssessmentFeatureSet>;
}

export interface StoredAssessment {
  identity: Pick<ApiKeyIdentity, 'apiKeyId' | 'organizationId' | 'storeId'>;
  idempotencyKey: string;
  phoneHash: string;
  request: RiskAssessmentRequest;
  response: RiskAssessmentResponse;
}

export interface AssessmentRepository {
  findByIdempotency(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
  }): Promise<StoredAssessment | null>;
  findById(input: {
    organizationId: string;
    storeId: string;
    assessmentId: string;
  }): Promise<StoredAssessment | null>;
  save(record: StoredAssessment): Promise<StoredAssessment>;
}

export interface OutcomeRepository {
  save(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
    outcome: OrderOutcomeInput;
  }): Promise<{ outcomeId: string; replay: boolean }>;
}

export interface CourierRefreshQueue {
  enqueue(input: {
    organizationId: string;
    storeId: string;
    phone: string;
    phoneHash: string;
    providers: string[];
    force: boolean;
  }): Promise<{ jobId: string }>;
}

export interface VerificationRequestQueue {
  enqueueSend(input: {
    organizationId: string;
    storeId: string;
    assessmentId?: string;
    phone: string;
    phoneHash: string;
    purpose: string;
    idempotencyKey: string;
  }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
}

export interface OtpVerifier {
  verify(input: {
    organizationId: string;
    storeId: string;
    verificationId: string;
    otp: string;
  }): Promise<{ verified: true }>;
}

export interface OperationIdempotencyStore {
  get(key: string): Promise<unknown>;
  set(key: string, value: unknown): Promise<void>;
}

export interface RateLimiter {
  consume(key: string, limit: number, windowMs: number): Promise<boolean>;
}

export interface ApiDependencies {
  apiKeys: ApiKeyResolver;
  usage: UsageLedger;
  features: AssessmentFeatureProvider;
  assessments: AssessmentRepository;
  outcomes: OutcomeRepository;
  refreshQueue: CourierRefreshQueue;
  idempotency: OperationIdempotencyStore;
  rateLimiter: RateLimiter;
  hashPhone(phone: string): string;
  verificationRequests?: VerificationRequestQueue;
  otpVerifier?: OtpVerifier;
  browser?: BrowserApiDependencies;
  now?: () => Date;
  idFactory?: (prefix: string) => string;
}

type AppEnvironment = {
  Variables: {
    identity: ApiKeyIdentity;
    requestId: string;
  };
};

const refreshSchema = z.object({
  phone: z.string().min(8).max(30),
  providers: z.array(z.string().min(1).max(50)).min(1).max(10).default(['steadfast']),
  force: z.boolean().default(false),
});

const otpSendSchema = z.object({
  phone: z.string().min(8).max(30),
  assessment_id: z.string().max(200).optional(),
  purpose: z.string().min(1).max(100).default('cod_order_confirmation'),
});

const otpVerifySchema = z.object({
  verification_id: z.string().min(1).max(200),
  otp: z.string().regex(/^\d{6}$/),
});

export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment> {
  const app = new Hono<AppEnvironment>();
  const now = dependencies.now ?? (() => new Date());
  const idFactory = dependencies.idFactory ?? ((prefix: string) => `${prefix}_${randomUUID()}`);

  app.get('/', (context) =>
    context.json({
      service: 'Ozzyl Guard',
      version: 'v1',
      endpoints: {
        assessments: 'POST /v1/risk-assessments',
        outcomes: 'POST /v1/order-outcomes',
        refresh: 'POST /v1/courier-observations/refresh',
        otpSend: 'POST /v1/verifications/otp/send',
        otpVerify: 'POST /v1/verifications/otp/verify',
      },
    }),
  );

  app.get('/health', (context) =>
    context.json({ status: 'ok', service: 'ozzyl-guard-api', timestamp: now().toISOString() }),
  );

  if (dependencies.browser) app.route('/', createBrowserApi(dependencies.browser));

  app.use('/v1/*', async (context, next) => {
    const requestId = context.req.header('X-Request-ID')?.slice(0, 200) || idFactory('req');
    context.set('requestId', requestId);
    const authorization = context.req.header('Authorization');
    if (!authorization?.startsWith('Bearer ')) {
      return apiError(requestId, 401, 'UNAUTHORIZED', 'A Bearer API key is required');
    }
    const rawApiKey = authorization.slice('Bearer '.length).trim();
    if (!/^ozg_(test|live)_/.test(rawApiKey)) {
      return apiError(requestId, 401, 'INVALID_API_KEY', 'API key format is invalid');
    }
    const identity = await dependencies.apiKeys.resolve(rawApiKey);
    if (!identity) {
      return apiError(requestId, 401, 'INVALID_API_KEY', 'API key is invalid or revoked');
    }
    const allowed = await dependencies.rateLimiter.consume(`api:${identity.apiKeyId}`, 120, 60_000);
    if (!allowed) {
      return apiError(requestId, 429, 'RATE_LIMITED', 'Too many requests');
    }
    context.set('identity', identity);
    await next();
    context.header('X-Request-ID', requestId);
  });

  app.post('/v1/risk-assessments', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'risk:write', requestId);
    if (scopeError) return scopeError;

    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }

    const existing = await dependencies.assessments.findByIdempotency({
      organizationId: identity.organizationId,
      storeId: identity.storeId,
      idempotencyKey,
    });
    if (existing) return context.json(existing.response, 200);

    const parsedBody = await parseJson(context.req.raw, riskAssessmentRequestSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    const request = parsedBody.value;
    const phone = normalizeBangladeshPhone(request.phone);
    if (!isValidBangladeshPhone(phone)) {
      return apiError(
        requestId,
        400,
        'INVALID_PHONE',
        'A valid Bangladesh mobile number is required',
      );
    }

    try {
      await dependencies.usage.reserve({
        organizationId: identity.organizationId,
        period: billingPeriod(now()),
        requestId: idempotencyKey,
        units: 1,
        plan: identity.plan,
      });
    } catch (error) {
      return apiError(
        requestId,
        429,
        'USAGE_LIMIT_EXCEEDED',
        error instanceof Error ? error.message : 'Usage limit exceeded',
      );
    }

    const startedAt = Date.now();
    const phoneHash = dependencies.hashPhone(phone);
    const features = await dependencies.features.load({ identity, phone, phoneHash, request });
    const order = {
      total: request.order_total,
      paymentMethod: request.payment_method,
      ...(request.items_count === undefined ? {} : { itemsCount: request.items_count }),
    };
    const engineInput = {
      order,
      courier: features.courier,
      merchant: features.merchant,
      velocity: features.velocity,
      verification: features.verification,
      network: features.network,
      ...(features.policy === undefined ? {} : { policy: features.policy }),
    };
    const result = assessRisk(engineInput);
    const response = riskAssessmentResponseSchema.parse({
      success: true,
      assessment_id: idFactory('ras'),
      risk_score: result.score,
      risk_level: result.riskLevel,
      decision: result.decision,
      confidence: result.confidence,
      signals: result.signals,
      courier_summary: {
        freshness: features.courier.freshness,
        providers: features.courier.providerCount,
        total: features.courier.totalOrders,
        delivered: features.courier.deliveredOrders,
        returned: features.courier.returnedOrders,
        cancelled_before_shipping: features.courier.cancelledBeforeShipping,
      },
      recommended_actions: result.recommendedActions,
      meta: {
        engine_version: result.engineVersion,
        policy_version: result.policyVersion,
        degraded: result.degraded,
        response_ms: Date.now() - startedAt,
      },
    });

    const stored = await dependencies.assessments.save({
      identity: {
        apiKeyId: identity.apiKeyId,
        organizationId: identity.organizationId,
        storeId: identity.storeId,
      },
      idempotencyKey,
      phoneHash,
      request,
      response,
    });
    return context.json(
      stored.response,
      stored.response.assessment_id === response.assessment_id ? 201 : 200,
    );
  });

  app.get('/v1/risk-assessments/:assessmentId', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'risk:read', requestId);
    if (scopeError) return scopeError;
    const record = await dependencies.assessments.findById({
      organizationId: identity.organizationId,
      storeId: identity.storeId,
      assessmentId: context.req.param('assessmentId'),
    });
    if (!record) return apiError(requestId, 404, 'ASSESSMENT_NOT_FOUND', 'Assessment not found');
    return context.json(record.response);
  });

  app.post('/v1/order-outcomes', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'outcomes:write', requestId);
    if (scopeError) return scopeError;
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const parsedBody = await parseJson(context.req.raw, orderOutcomeSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    if (parsedBody.value.assessment_id) {
      const assessment = await dependencies.assessments.findById({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        assessmentId: parsedBody.value.assessment_id,
      });
      if (!assessment) {
        return apiError(
          requestId,
          400,
          'ASSESSMENT_NOT_FOUND',
          'Assessment not found for this store',
        );
      }
    }
    const saved = await dependencies.outcomes.save({
      organizationId: identity.organizationId,
      storeId: identity.storeId,
      idempotencyKey,
      outcome: parsedBody.value,
    });
    return context.json(
      { success: true as const, outcome_id: saved.outcomeId, replay: saved.replay },
      saved.replay ? 200 : 201,
    );
  });

  app.post('/v1/courier-observations/refresh', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'courier:refresh', requestId);
    if (scopeError) return scopeError;
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const operationKey = operationIdempotencyKey(identity, 'courier-refresh', idempotencyKey);
    const existing = await dependencies.idempotency.get(operationKey);
    if (existing) return context.json(existing, 200);
    const parsedBody = await parseJson(context.req.raw, refreshSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    const phone = normalizeBangladeshPhone(parsedBody.value.phone);
    if (!isValidBangladeshPhone(phone)) {
      return apiError(
        requestId,
        400,
        'INVALID_PHONE',
        'A valid Bangladesh mobile number is required',
      );
    }
    let queued: { jobId: string };
    try {
      queued = await dependencies.refreshQueue.enqueue({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        phone,
        phoneHash: dependencies.hashPhone(phone),
        providers: parsedBody.value.providers,
        force: parsedBody.value.force,
      });
    } catch (error) {
      const code =
        error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
          ? error.code
          : 'COURIER_REFRESH_UNAVAILABLE';
      return apiError(
        requestId,
        code === 'COURIER_CONNECTION_REQUIRED' ? 409 : 503,
        code,
        error instanceof Error ? error.message : 'Courier refresh could not be queued',
      );
    }
    const response = { success: true as const, job_id: queued.jobId, status: 'queued' as const };
    await dependencies.idempotency.set(operationKey, response);
    return context.json(response, 202);
  });

  app.post('/v1/verifications/otp/send', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'verification:write', requestId);
    if (scopeError) return scopeError;
    if (!dependencies.verificationRequests) {
      return apiError(
        requestId,
        503,
        'VERIFICATION_UNAVAILABLE',
        'OTP verification is not configured',
      );
    }
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
    const existing = await dependencies.idempotency.get(operationKey);
    if (existing) return context.json(existing, 200);
    const parsedBody = await parseJson(context.req.raw, otpSendSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    const phone = normalizeBangladeshPhone(parsedBody.value.phone);
    if (!isValidBangladeshPhone(phone)) {
      return apiError(
        requestId,
        400,
        'INVALID_PHONE',
        'A valid Bangladesh mobile number is required',
      );
    }
    try {
      const queued = await dependencies.verificationRequests.enqueueSend({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        ...(parsedBody.value.assessment_id === undefined
          ? {}
          : { assessmentId: parsedBody.value.assessment_id }),
        phone,
        phoneHash: dependencies.hashPhone(phone),
        purpose: parsedBody.value.purpose,
        idempotencyKey,
      });
      const response = {
        success: true as const,
        verification_id: queued.verificationId,
        expires_at: queued.expiresAt,
        status: 'queued' as const,
      };
      await dependencies.idempotency.set(operationKey, response);
      return context.json(response, queued.replay ? 200 : 202);
    } catch (error) {
      return verificationApiError(requestId, error);
    }
  });

  app.post('/v1/verifications/otp/verify', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'verification:write', requestId);
    if (scopeError) return scopeError;
    if (!dependencies.otpVerifier) {
      return apiError(
        requestId,
        503,
        'VERIFICATION_UNAVAILABLE',
        'OTP verification is not configured',
      );
    }
    const parsedBody = await parseJson(context.req.raw, otpVerifySchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    try {
      await dependencies.otpVerifier.verify({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        verificationId: parsedBody.value.verification_id,
        otp: parsedBody.value.otp,
      });
      return context.json({ success: true as const, verified: true as const });
    } catch (error) {
      return verificationApiError(requestId, error);
    }
  });

  app.notFound((context) => {
    const requestId = context.get('requestId') || idFactory('req');
    return apiError(requestId, 404, 'NOT_FOUND', 'Route not found');
  });

  app.onError((error, context) => {
    const requestId = context.get('requestId') || idFactory('req');
    console.error(JSON.stringify({ level: 'error', requestId, code: 'UNHANDLED_ERROR' }));
    return apiError(
      requestId,
      500,
      'INTERNAL_ERROR',
      error instanceof Error ? 'The request could not be completed' : 'Internal error',
    );
  });

  return app;
}

export class MemoryAssessmentRepository implements AssessmentRepository {
  private readonly byId = new Map<string, StoredAssessment>();
  private readonly byIdempotency = new Map<string, StoredAssessment>();

  async findByIdempotency(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
  }): Promise<StoredAssessment | null> {
    return (
      this.byIdempotency.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`) ??
      null
    );
  }

  async findById(input: {
    organizationId: string;
    storeId: string;
    assessmentId: string;
  }): Promise<StoredAssessment | null> {
    const record = this.byId.get(input.assessmentId);
    if (
      !record ||
      record.identity.organizationId !== input.organizationId ||
      record.identity.storeId !== input.storeId
    ) {
      return null;
    }
    return record;
  }

  async save(record: StoredAssessment): Promise<StoredAssessment> {
    const key = `${record.identity.organizationId}:${record.identity.storeId}:${record.idempotencyKey}`;
    const existing = this.byIdempotency.get(key);
    if (existing) return existing;
    this.byId.set(record.response.assessment_id, record);
    this.byIdempotency.set(key, record);
    return record;
  }
}

export class MemoryOutcomeRepository implements OutcomeRepository {
  private readonly outcomes = new Map<string, string>();

  async save(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
    outcome: OrderOutcomeInput;
  }): Promise<{ outcomeId: string; replay: boolean }> {
    const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
    const existing = this.outcomes.get(key);
    if (existing) return { outcomeId: existing, replay: true };
    const outcomeId = `out_${randomUUID()}`;
    this.outcomes.set(key, outcomeId);
    return { outcomeId, replay: false };
  }
}

export class MemoryOperationIdempotencyStore implements OperationIdempotencyStore {
  private readonly values = new Map<string, unknown>();
  async get(key: string): Promise<unknown> {
    return this.values.get(key) ?? null;
  }
  async set(key: string, value: unknown): Promise<void> {
    this.values.set(key, value);
  }
}

export class MemoryRateLimiter implements RateLimiter {
  private readonly windows = new Map<string, { count: number; expiresAt: number }>();
  async consume(key: string, limit: number, windowMs: number): Promise<boolean> {
    const currentTime = Date.now();
    const current = this.windows.get(key);
    if (!current || current.expiresAt <= currentTime) {
      this.windows.set(key, { count: 1, expiresAt: currentTime + windowMs });
      return true;
    }
    if (current.count >= limit) return false;
    current.count += 1;
    return true;
  }
}

export class MemoryRefreshQueue implements CourierRefreshQueue {
  async enqueue(): Promise<{ jobId: string }> {
    return { jobId: `cjob_${randomUUID()}` };
  }
}

export class MissingFeatureProvider implements AssessmentFeatureProvider {
  async load(): Promise<AssessmentFeatureSet> {
    return {
      courier: {
        totalOrders: 0,
        deliveredOrders: 0,
        returnedOrders: 0,
        cancelledBeforeShipping: 0,
        providerCount: 0,
        freshness: 'missing',
        sourceConfidence: 0,
      },
      merchant: {
        deliveredOrders: 0,
        returnedOrders: 0,
        recentCancelledOrders: 0,
        previousSuccessfulCustomer: false,
      },
      velocity: {
        phoneOrdersLastHour: 0,
        devicePhoneCountLastDay: 0,
        ipCustomerCountLastHour: 0,
      },
      verification: { otpVerified: false, otpFailures: 0, phoneUnreachable: false },
      network: {
        confirmedNegativeOutcomes: 0,
        independentReporters: 0,
        confirmedPositiveOutcomes: 0,
        activeDispute: false,
      },
    };
  }
}

function requireScope(identity: ApiKeyIdentity, scope: string, requestId: string): Response | null {
  if (identity.scopes.has('*') || identity.scopes.has(scope)) return null;
  return apiError(requestId, 403, 'INSUFFICIENT_SCOPE', `API key requires ${scope} scope`);
}

function apiError(
  requestId: string,
  status: number,
  code: string,
  message: string,
  details?: Record<string, unknown>,
): Response {
  return new Response(
    JSON.stringify({
      success: false,
      error: { code, message, ...(details === undefined ? {} : { details }) },
      request_id: requestId,
    }),
    {
      status,
      headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
    },
  );
}

function verificationApiError(requestId: string, error: unknown): Response {
  if (error instanceof VerificationError) {
    const status =
      error.code === 'RATE_LIMITED'
        ? 429
        : error.code === 'NOT_FOUND'
          ? 404
          : error.code === 'DELIVERY_PENDING' || error.code === 'DELIVERY_FAILED'
            ? 409
            : 400;
    return apiError(requestId, status, error.code, error.message);
  }
  return apiError(
    requestId,
    503,
    'VERIFICATION_UNAVAILABLE',
    'Verification could not be completed',
  );
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

function readIdempotencyKey(value: string | undefined): string | null {
  const normalized = value?.trim();
  if (!normalized || normalized.length > 200) return null;
  return normalized;
}

function operationIdempotencyKey(
  identity: ApiKeyIdentity,
  operation: string,
  idempotencyKey: string,
): string {
  return `${identity.organizationId}:${identity.storeId}:${operation}:${idempotencyKey}`;
}

function billingPeriod(date: Date): string {
  return date.toISOString().slice(0, 7);
}
