import { randomUUID } from 'node:crypto';
import { Hono } from 'hono';
import { z } from 'zod';
import { UsageLimitError, type PlanCode, type UsageLedger } from '@ozzyl/billing';
import {
  createMetricRecorder,
  createStructuredLogger,
  createTracer,
  defineMetric,
  defineSpan,
  formatTraceParent,
  observeApiDependency,
  parseTraceContext,
  recordApiControlEvent,
  recordRiskAssessmentDistribution,
  recordRiskOutcomeDistribution,
  toPersistedTraceContext,
  type MetricRecorder,
  type PersistedTraceContext,
  type StructuredLogger,
  type TraceContext,
  type Tracer,
} from '@ozzyl/observability';
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
  nativeShadowAttemptInputSchema,
  nativeShadowAttemptResponseSchema,
  nativeShadowComparisonInputSchema,
  nativeShadowComparisonResponseSchema,
  nativeShadowRolloutResponseSchema,
  orderOutcomeSchema,
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type NativeShadowAttemptInput,
  type NativeShadowComparisonInput,
  type NativeShadowRolloutMode,
  type OrderOutcomeInput,
  type RiskAssessmentRequest,
  type RiskAssessmentResponse,
} from '@ozzyl/shared-types';
import { VerificationError } from '@ozzyl/verification';
import { createBrowserApi, type BrowserApiDependencies } from './browser.js';

export * from './postgres-administration.js';
export * from './postgres-native-shadow-pilot.js';
export * from './postgres-shadow-comparisons.js';

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
  traceContext?: PersistedTraceContext;
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
    traceContext?: PersistedTraceContext;
  }): Promise<{ outcomeId: string; replay: boolean }>;
}

export interface ShadowComparisonRepository {
  save(input: {
    organizationId: string;
    storeId: string;
    apiKeyId: string;
    idempotencyKey: string;
    comparison: NativeShadowComparisonInput;
    guardAssessment: RiskAssessmentResponse;
  }): Promise<{ comparisonId: string; replay: boolean }>;
}

export interface NativeShadowRolloutRepository {
  load(input: { organizationId: string; storeId: string }): Promise<{
    organizationId: string;
    storeId: string;
    integration: 'multi-store-saas';
    mode: NativeShadowRolloutMode;
    rolloutVersion: string;
    sampleRateBps: number;
    samplingKey: string;
  } | null>;
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

export interface NativeShadowAttemptRepository {
  save(input: {
    organizationId: string;
    storeId: string;
    apiKeyId: string;
    idempotencyKey: string;
    attempt: NativeShadowAttemptInput;
  }): Promise<{ attemptId: string; replay: boolean }>;
}

export interface CourierRefreshQueue {
  enqueue(input: {
    organizationId: string;
    storeId: string;
    phone: string;
    phoneHash: string;
    providers: string[];
    force: boolean;
    traceContext?: PersistedTraceContext;
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
    traceContext?: PersistedTraceContext;
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
  shadowComparisons?: ShadowComparisonRepository;
  nativeShadowRollouts?: NativeShadowRolloutRepository;
  nativeShadowAttempts?: NativeShadowAttemptRepository;
  refreshQueue: CourierRefreshQueue;
  idempotency: OperationIdempotencyStore;
  rateLimiter: RateLimiter;
  hashPhone(phone: string): string;
  verificationRequests?: VerificationRequestQueue;
  otpVerifier?: OtpVerifier;
  browser?: BrowserApiDependencies;
  now?: () => Date;
  monotonicNow?: () => number;
  idFactory?: (prefix: string) => string;
  logger?: StructuredLogger;
  metrics?: MetricRecorder;
  tracer?: Tracer;
}

type AppEnvironment = {
  Variables: {
    identity: ApiKeyIdentity;
    requestId: string;
    traceContext: TraceContext;
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
  const monotonicNow = dependencies.monotonicNow ?? (() => Date.now());
  const idFactory = dependencies.idFactory ?? ((prefix: string) => `${prefix}_${randomUUID()}`);
  const logger =
    dependencies.logger ??
    createStructuredLogger({
      service: 'ozzyl-guard-api',
      environment: 'test',
      write: () => undefined,
    });
  const metrics =
    dependencies.metrics ??
    createMetricRecorder({
      service: 'ozzyl-guard-api',
      environment: 'test',
      write: () => undefined,
    });
  const tracer =
    dependencies.tracer ??
    createTracer({
      service: 'ozzyl-guard-api',
      environment: 'test',
      write: () => undefined,
    });

  app.use('*', async (context, next) => {
    const requestId = readRequestId(context.req.header('X-Request-ID')) ?? idFactory('req');
    const startedAt = monotonicNow();
    let failed = false;
    const parentTrace = parseTraceContext(
      context.req.header('traceparent'),
      context.req.header('tracestate'),
    );
    const requestSpan = tracer.startSpan(API_REQUEST_SPAN, {
      ...(parentTrace === null ? {} : { parent: parentTrace }),
      attributes: {
        method: telemetryMethod(context.req.method),
        route: telemetryRoute(context.req.path),
      },
    });
    context.set('requestId', requestId);
    context.set('traceContext', requestSpan.context);

    try {
      await next();
    } catch (error) {
      failed = true;
      throw error;
    } finally {
      const status = failed ? 500 : context.res.status;
      const durationMs = Math.max(0, monotonicNow() - startedAt);
      const attributes = {
        request_id: requestId,
        method: context.req.method,
        route: telemetryRoute(context.req.path),
        status_code: status,
        status_class: `${Math.floor(status / 100)}xx`,
        duration_ms: Math.round(durationMs * 1_000) / 1_000,
      };
      const metricAttributes = {
        method: telemetryMethod(context.req.method),
        route: telemetryRoute(context.req.path),
        status_class: telemetryStatusClass(status),
      };

      context.header('X-Request-ID', requestId);
      context.header('traceparent', formatTraceParent(requestSpan.context));
      if (requestSpan.context.traceState !== undefined) {
        context.header('tracestate', requestSpan.context.traceState);
      }
      requestSpan.end({
        status: status >= 500 ? 'error' : 'ok',
        attributes: { status_class: telemetryStatusClass(status) },
      });
      metrics.record(API_REQUEST_COUNT, 1, metricAttributes);
      metrics.record(API_REQUEST_DURATION, durationMs, metricAttributes);
      if (status >= 500) logger.error('api.request.completed', attributes);
      else if (status >= 400) logger.warn('api.request.completed', attributes);
      else logger.info('api.request.completed', attributes);
    }
  });

  app.get('/', (context) =>
    context.json({
      service: 'Ozzyl Guard',
      version: 'v1',
      endpoints: {
        assessments: 'POST /v1/risk-assessments',
        outcomes: 'POST /v1/order-outcomes',
        nativeShadowRollout: 'GET /v1/integration-rollouts/native-shadow',
        nativeShadowComparisons: 'POST /v1/integration-comparisons/native-shadow',
        nativeShadowAttempts: 'POST /v1/integration-attempts/native-shadow',
        refresh: 'POST /v1/courier-observations/refresh',
        otpSend: 'POST /v1/verifications/otp/send',
        otpVerify: 'POST /v1/verifications/otp/verify',
      },
    }),
  );

  app.get('/health', (context) =>
    context.json({ status: 'ok', service: 'ozzyl-guard-api', timestamp: now().toISOString() }),
  );

  if (dependencies.browser) {
    app.route(
      '/',
      createBrowserApi({
        ...dependencies.browser,
        metrics: dependencies.browser.metrics ?? metrics,
        monotonicNow: dependencies.browser.monotonicNow ?? monotonicNow,
      }),
    );
  }

  app.use('/v1/*', async (context, next) => {
    const requestId = context.get('requestId');
    const authorization = context.req.header('Authorization');
    if (!authorization?.startsWith('Bearer ')) {
      recordApiControlEvent(metrics, 'authentication', 'rejected');
      return apiError(requestId, 401, 'UNAUTHORIZED', 'A Bearer API key is required');
    }
    const rawApiKey = authorization.slice('Bearer '.length).trim();
    if (!/^ozg_(test|live)_/.test(rawApiKey)) {
      recordApiControlEvent(metrics, 'authentication', 'rejected');
      return apiError(requestId, 401, 'INVALID_API_KEY', 'API key format is invalid');
    }
    let identity: ApiKeyIdentity | null;
    try {
      identity = await observeApiDependency(
        metrics,
        {
          dependencyType: 'api_key',
          operation: 'resolve',
          classify: (value) => (value === null ? 'empty' : 'success'),
          monotonicNow,
        },
        () => dependencies.apiKeys.resolve(rawApiKey),
      );
    } catch (error) {
      recordApiControlEvent(metrics, 'authentication', 'error');
      throw error;
    }
    if (!identity) {
      recordApiControlEvent(metrics, 'authentication', 'rejected');
      return apiError(requestId, 401, 'INVALID_API_KEY', 'API key is invalid or revoked');
    }
    recordApiControlEvent(metrics, 'authentication', 'allowed');
    let allowed: boolean;
    try {
      allowed = await observeApiDependency(
        metrics,
        {
          dependencyType: 'rate_limiter',
          operation: 'consume',
          classify: (value) => (value ? 'success' : 'rejected'),
          monotonicNow,
        },
        () => dependencies.rateLimiter.consume(`api:${identity.apiKeyId}`, 120, 60_000),
      );
    } catch (error) {
      recordApiControlEvent(metrics, 'rate_limit', 'error');
      throw error;
    }
    if (!allowed) {
      recordApiControlEvent(metrics, 'rate_limit', 'rejected');
      return apiError(requestId, 429, 'RATE_LIMITED', 'Too many requests');
    }
    recordApiControlEvent(metrics, 'rate_limit', 'allowed');
    context.set('identity', identity);
    await next();
    context.header('X-Request-ID', requestId);
  });

  app.post('/v1/risk-assessments', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'risk:write', requestId, metrics);
    if (scopeError) return scopeError;

    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      recordApiControlEvent(metrics, 'idempotency', 'rejected');
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }

    const existing = await observeApiDependency(
      metrics,
      {
        dependencyType: 'assessment_repository',
        operation: 'find_by_idempotency',
        classify: (value) => (value === null ? 'empty' : 'replay'),
        monotonicNow,
      },
      () =>
        dependencies.assessments.findByIdempotency({
          organizationId: identity.organizationId,
          storeId: identity.storeId,
          idempotencyKey,
        }),
    );
    if (existing) {
      recordApiControlEvent(metrics, 'idempotency', 'replay');
      return context.json(existing.response, 200);
    }
    recordApiControlEvent(metrics, 'idempotency', 'allowed');

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
      await observeApiDependency(
        metrics,
        {
          dependencyType: 'usage_ledger',
          operation: 'reserve',
          classifyError: (error) => (error instanceof UsageLimitError ? 'rejected' : 'error'),
          monotonicNow,
        },
        () =>
          dependencies.usage.reserve({
            organizationId: identity.organizationId,
            period: billingPeriod(now()),
            requestId: idempotencyKey,
            units: 1,
            plan: identity.plan,
          }),
      );
      recordApiControlEvent(metrics, 'quota', 'allowed');
    } catch (error) {
      if (!(error instanceof UsageLimitError)) {
        recordApiControlEvent(metrics, 'quota', 'error');
        throw error;
      }
      recordApiControlEvent(metrics, 'quota', 'rejected');
      return apiError(requestId, 429, 'USAGE_LIMIT_EXCEEDED', error.message);
    }

    const startedAt = Date.now();
    const phoneHash = dependencies.hashPhone(phone);
    const features = await observeApiDependency(
      metrics,
      {
        dependencyType: 'feature_provider',
        operation: 'load',
        monotonicNow,
      },
      () => dependencies.features.load({ identity, phone, phoneHash, request }),
    );
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

    const stored = await observeDurableProducer(
      tracer,
      context.get('traceContext'),
      'assessment_event',
      'webhook_delivery',
      (traceContext) =>
        observeApiDependency(
          metrics,
          {
            dependencyType: 'assessment_repository',
            operation: 'save',
            classify: (value) =>
              value.response.assessment_id === response.assessment_id ? 'success' : 'replay',
            monotonicNow,
          },
          () =>
            dependencies.assessments.save({
              traceContext,
              identity: {
                apiKeyId: identity.apiKeyId,
                organizationId: identity.organizationId,
                storeId: identity.storeId,
              },
              idempotencyKey,
              phoneHash,
              request,
              response,
            }),
        ),
    );
    const created = stored.response.assessment_id === response.assessment_id;
    if (created) {
      recordRiskAssessmentDistribution(metrics, {
        decision: stored.response.decision,
        riskLevel: stored.response.risk_level,
        score: stored.response.risk_score,
        confidence: stored.response.confidence,
        degraded: stored.response.meta?.degraded ?? true,
        freshness: features.courier.freshness,
      });
    } else {
      recordApiControlEvent(metrics, 'idempotency', 'replay');
    }
    return context.json(stored.response, created ? 201 : 200);
  });

  app.get('/v1/risk-assessments/:assessmentId', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'risk:read', requestId, metrics);
    if (scopeError) return scopeError;
    const record = await observeApiDependency(
      metrics,
      {
        dependencyType: 'assessment_repository',
        operation: 'find_by_id',
        classify: (value) => (value === null ? 'empty' : 'success'),
        monotonicNow,
      },
      () =>
        dependencies.assessments.findById({
          organizationId: identity.organizationId,
          storeId: identity.storeId,
          assessmentId: context.req.param('assessmentId'),
        }),
    );
    if (!record) return apiError(requestId, 404, 'ASSESSMENT_NOT_FOUND', 'Assessment not found');
    return context.json(record.response);
  });

  app.post('/v1/order-outcomes', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'outcomes:write', requestId, metrics);
    if (scopeError) return scopeError;
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      recordApiControlEvent(metrics, 'idempotency', 'rejected');
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const parsedBody = await parseJson(context.req.raw, orderOutcomeSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    if (parsedBody.value.assessment_id) {
      const assessment = await observeApiDependency(
        metrics,
        {
          dependencyType: 'assessment_repository',
          operation: 'find_by_id',
          classify: (value) => (value === null ? 'empty' : 'success'),
          monotonicNow,
        },
        () =>
          dependencies.assessments.findById({
            organizationId: identity.organizationId,
            storeId: identity.storeId,
            assessmentId: parsedBody.value.assessment_id!,
          }),
      );
      if (!assessment) {
        return apiError(
          requestId,
          400,
          'ASSESSMENT_NOT_FOUND',
          'Assessment not found for this store',
        );
      }
    }
    const saved = await observeDurableProducer(
      tracer,
      context.get('traceContext'),
      'outcome_event',
      'webhook_delivery',
      (traceContext) =>
        observeApiDependency(
          metrics,
          {
            dependencyType: 'outcome_repository',
            operation: 'save',
            classify: (value) => (value.replay ? 'replay' : 'success'),
            monotonicNow,
          },
          () =>
            dependencies.outcomes.save({
              organizationId: identity.organizationId,
              storeId: identity.storeId,
              idempotencyKey,
              outcome: parsedBody.value,
              traceContext,
            }),
        ),
    );
    recordApiControlEvent(metrics, 'idempotency', saved.replay ? 'replay' : 'allowed');
    if (!saved.replay) {
      recordRiskOutcomeDistribution(metrics, {
        outcome: parsedBody.value.outcome,
        linkedAssessment: parsedBody.value.assessment_id !== undefined,
      });
    }
    return context.json(
      { success: true as const, outcome_id: saved.outcomeId, replay: saved.replay },
      saved.replay ? 200 : 201,
    );
  });

  app.get('/v1/integration-rollouts/native-shadow', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
    if (scopeError) return scopeError;
    if (!dependencies.nativeShadowRollouts) {
      return apiError(
        requestId,
        503,
        'NATIVE_SHADOW_ROLLOUT_UNAVAILABLE',
        'Native shadow rollout configuration is not available',
      );
    }
    const rollout = await observeApiDependency(
      metrics,
      {
        dependencyType: 'native_shadow_rollout_repository',
        operation: 'load',
        classify: (value) => (value === null ? 'empty' : 'success'),
        monotonicNow,
      },
      () =>
        dependencies.nativeShadowRollouts!.load({
          organizationId: identity.organizationId,
          storeId: identity.storeId,
        }),
    );
    if (!rollout) {
      return apiError(requestId, 400, 'TENANT_SCOPE_MISMATCH', 'Store scope is not active');
    }
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

  app.post('/v1/integration-comparisons/native-shadow', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
    if (scopeError) return scopeError;
    if (!dependencies.shadowComparisons) {
      return apiError(
        requestId,
        503,
        'SHADOW_COMPARISON_UNAVAILABLE',
        'Native shadow comparison persistence is not configured',
      );
    }
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      recordApiControlEvent(metrics, 'idempotency', 'rejected');
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const parsedBody = await parseJson(context.req.raw, nativeShadowComparisonInputSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    const assessment = await observeApiDependency(
      metrics,
      {
        dependencyType: 'assessment_repository',
        operation: 'find_by_id',
        classify: (value) => (value === null ? 'empty' : 'success'),
        monotonicNow,
      },
      () =>
        dependencies.assessments.findById({
          organizationId: identity.organizationId,
          storeId: identity.storeId,
          assessmentId: parsedBody.value.assessment_id,
        }),
    );
    if (!assessment) {
      return apiError(
        requestId,
        400,
        'ASSESSMENT_NOT_FOUND',
        'Assessment not found for this store',
      );
    }
    if (assessment.request.external_order_id !== parsedBody.value.external_order_id) {
      return apiError(
        requestId,
        400,
        'ASSESSMENT_ORDER_MISMATCH',
        'Assessment does not belong to the supplied external order',
      );
    }
    try {
      const saved = await observeApiDependency(
        metrics,
        {
          dependencyType: 'native_shadow_comparison_repository',
          operation: 'save',
          classify: (value) => (value.replay ? 'replay' : 'success'),
          classifyError: classifyNativeShadowComparisonError,
          monotonicNow,
        },
        () =>
          dependencies.shadowComparisons!.save({
            organizationId: identity.organizationId,
            storeId: identity.storeId,
            apiKeyId: identity.apiKeyId,
            idempotencyKey,
            comparison: parsedBody.value,
            guardAssessment: assessment.response,
          }),
      );
      recordApiControlEvent(metrics, 'idempotency', saved.replay ? 'replay' : 'allowed');
      const response = nativeShadowComparisonResponseSchema.parse({
        success: true,
        comparison_id: saved.comparisonId,
        replay: saved.replay,
      });
      return context.json(response, saved.replay ? 200 : 201);
    } catch (error) {
      const code =
        error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
          ? error.code
          : 'SHADOW_COMPARISON_UNAVAILABLE';
      if (code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') {
        recordApiControlEvent(metrics, 'idempotency', 'conflict');
      }
      const status =
        code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT'
          ? 409
          : code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
              code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
              code === 'TENANT_SCOPE_MISMATCH'
            ? 400
            : 503;
      return apiError(
        requestId,
        status,
        code,
        status === 503
          ? 'Native shadow comparison could not be persisted'
          : 'Native shadow comparison was rejected',
      );
    }
  });

  app.post('/v1/integration-attempts/native-shadow', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
    if (scopeError) return scopeError;
    if (!dependencies.nativeShadowAttempts) {
      return apiError(
        requestId,
        503,
        'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE',
        'Native shadow attempt persistence is not configured',
      );
    }
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      recordApiControlEvent(metrics, 'idempotency', 'rejected');
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const parsedBody = await parseJson(context.req.raw, nativeShadowAttemptInputSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    try {
      const saved = await observeApiDependency(
        metrics,
        {
          dependencyType: 'native_shadow_attempt_repository',
          operation: 'save',
          classify: (value) => (value.replay ? 'replay' : 'success'),
          classifyError: classifyNativeShadowAttemptError,
          monotonicNow,
        },
        () =>
          dependencies.nativeShadowAttempts!.save({
            organizationId: identity.organizationId,
            storeId: identity.storeId,
            apiKeyId: identity.apiKeyId,
            idempotencyKey,
            attempt: parsedBody.value,
          }),
      );
      recordApiControlEvent(metrics, 'idempotency', saved.replay ? 'replay' : 'allowed');
      return context.json(
        nativeShadowAttemptResponseSchema.parse({
          success: true,
          attempt_id: saved.attemptId,
          replay: saved.replay,
        }),
        saved.replay ? 200 : 201,
      );
    } catch (error) {
      const code =
        error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
          ? error.code
          : 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE';
      if (code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT') {
        recordApiControlEvent(metrics, 'idempotency', 'conflict');
      }
      const status =
        code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT'
          ? 409
          : code === 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE'
            ? 503
            : 400;
      return apiError(
        requestId,
        status,
        code,
        status === 503
          ? 'Native shadow attempt could not be persisted'
          : 'Native shadow attempt was rejected',
      );
    }
  });

  app.post('/v1/courier-observations/refresh', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'courier:refresh', requestId, metrics);
    if (scopeError) return scopeError;
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      recordApiControlEvent(metrics, 'idempotency', 'rejected');
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const operationKey = operationIdempotencyKey(identity, 'courier-refresh', idempotencyKey);
    const existing = await observeApiDependency(
      metrics,
      {
        dependencyType: 'idempotency_store',
        operation: 'get',
        classify: (value) => (value === null ? 'empty' : 'replay'),
        monotonicNow,
      },
      () => dependencies.idempotency.get(operationKey),
    );
    if (existing) {
      recordApiControlEvent(metrics, 'idempotency', 'replay');
      return context.json(existing, 200);
    }
    recordApiControlEvent(metrics, 'idempotency', 'allowed');
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
      queued = await observeDurableProducer(
        tracer,
        context.get('traceContext'),
        'courier_refresh',
        'courier_refresh',
        (traceContext) =>
          observeApiDependency(
            metrics,
            {
              dependencyType: 'courier_queue',
              operation: 'enqueue',
              monotonicNow,
            },
            () =>
              dependencies.refreshQueue.enqueue({
                organizationId: identity.organizationId,
                storeId: identity.storeId,
                phone,
                phoneHash: dependencies.hashPhone(phone),
                providers: parsedBody.value.providers,
                force: parsedBody.value.force,
                traceContext,
              }),
          ),
      );
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
    await observeApiDependency(
      metrics,
      {
        dependencyType: 'idempotency_store',
        operation: 'set',
        monotonicNow,
      },
      () => dependencies.idempotency.set(operationKey, response),
    );
    return context.json(response, 202);
  });

  app.post('/v1/verifications/otp/send', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'verification:write', requestId, metrics);
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
      recordApiControlEvent(metrics, 'idempotency', 'rejected');
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
    const existing = await observeApiDependency(
      metrics,
      {
        dependencyType: 'idempotency_store',
        operation: 'get',
        classify: (value) => (value === null ? 'empty' : 'replay'),
        monotonicNow,
      },
      () => dependencies.idempotency.get(operationKey),
    );
    if (existing) {
      recordApiControlEvent(metrics, 'idempotency', 'replay');
      return context.json(existing, 200);
    }
    recordApiControlEvent(metrics, 'idempotency', 'allowed');
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
      const queued = await observeDurableProducer(
        tracer,
        context.get('traceContext'),
        'otp_delivery',
        'verification_delivery',
        (traceContext) =>
          observeApiDependency(
            metrics,
            {
              dependencyType: 'verification_queue',
              operation: 'enqueue',
              classify: (value) => (value.replay ? 'replay' : 'success'),
              monotonicNow,
            },
            () =>
              dependencies.verificationRequests!.enqueueSend({
                organizationId: identity.organizationId,
                storeId: identity.storeId,
                ...(parsedBody.value.assessment_id === undefined
                  ? {}
                  : { assessmentId: parsedBody.value.assessment_id }),
                phone,
                phoneHash: dependencies.hashPhone(phone),
                purpose: parsedBody.value.purpose,
                idempotencyKey,
                traceContext,
              }),
          ),
      );
      const response = {
        success: true as const,
        verification_id: queued.verificationId,
        expires_at: queued.expiresAt,
        status: 'queued' as const,
      };
      await observeApiDependency(
        metrics,
        {
          dependencyType: 'idempotency_store',
          operation: 'set',
          monotonicNow,
        },
        () => dependencies.idempotency.set(operationKey, response),
      );
      if (queued.replay) recordApiControlEvent(metrics, 'idempotency', 'replay');
      return context.json(response, queued.replay ? 200 : 202);
    } catch (error) {
      return verificationApiError(requestId, error);
    }
  });

  app.post('/v1/verifications/otp/verify', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'verification:write', requestId, metrics);
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
      await observeApiDependency(
        metrics,
        {
          dependencyType: 'otp_verifier',
          operation: 'verify',
          classifyError: (error) => (error instanceof VerificationError ? 'rejected' : 'error'),
          monotonicNow,
        },
        () =>
          dependencies.otpVerifier!.verify({
            organizationId: identity.organizationId,
            storeId: identity.storeId,
            verificationId: parsedBody.value.verification_id,
            otp: parsedBody.value.otp,
          }),
      );
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
    logger.error('api.request.unhandled_error', {
      request_id: requestId,
      method: context.req.method,
      route: telemetryRoute(context.req.path),
      code: 'UNHANDLED_ERROR',
      error,
    });
    return apiError(
      requestId,
      500,
      'INTERNAL_ERROR',
      error instanceof Error ? 'The request could not be completed' : 'Internal error',
    );
  });

  return app;
}

const STATIC_TELEMETRY_ROUTES = new Set([
  '/',
  '/health',
  '/auth/login',
  '/auth/session',
  '/auth/logout',
  '/dashboard/v1/overview',
  '/dashboard/v1/native-shadow-rollout',
  '/dashboard/v1/dead-letters',
  '/dashboard/v1/dead-letter-replays',
  '/admin/v1/overview',
  '/v1/risk-assessments',
  '/v1/order-outcomes',
  '/v1/integration-rollouts/native-shadow',
  '/v1/integration-comparisons/native-shadow',
  '/v1/integration-attempts/native-shadow',
  '/v1/courier-observations/refresh',
  '/v1/verifications/otp/send',
  '/v1/verifications/otp/verify',
]);

const API_METRIC_ROUTES = [
  ...STATIC_TELEMETRY_ROUTES,
  '/v1/risk-assessments/:assessment_id',
  'unmatched',
];
const API_METRIC_ATTRIBUTES = {
  method: { values: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD', 'OTHER'] },
  route: { values: API_METRIC_ROUTES },
  status_class: { values: ['1xx', '2xx', '3xx', '4xx', '5xx', 'other'] },
} as const;
const API_REQUEST_SPAN = defineSpan({
  name: 'ozzyl.api.request',
  kind: 'server',
  attributes: {
    method: { ...API_METRIC_ATTRIBUTES.method, required: false },
    route: { ...API_METRIC_ATTRIBUTES.route, required: false },
    status_class: { ...API_METRIC_ATTRIBUTES.status_class, required: false },
  },
});
const API_DURABLE_PRODUCER_SPAN = defineSpan({
  name: 'ozzyl.api.durable.produce',
  kind: 'producer',
  attributes: {
    operation: {
      values: ['assessment_event', 'outcome_event', 'courier_refresh', 'otp_delivery'],
    },
    queue_type: {
      values: ['courier_refresh', 'webhook_delivery', 'verification_delivery'],
    },
    outcome: { values: ['completed', 'failed'], required: false },
  },
});
const API_REQUEST_COUNT = defineMetric({
  name: 'ozzyl.api.requests',
  kind: 'counter',
  unit: '{request}',
  attributes: API_METRIC_ATTRIBUTES,
});
const API_REQUEST_DURATION = defineMetric({
  name: 'ozzyl.api.request.duration',
  kind: 'histogram',
  unit: 'ms',
  attributes: API_METRIC_ATTRIBUTES,
});

async function observeDurableProducer<T>(
  tracer: Tracer,
  parent: TraceContext,
  operation: 'assessment_event' | 'outcome_event' | 'courier_refresh' | 'otp_delivery',
  queueType: 'courier_refresh' | 'webhook_delivery' | 'verification_delivery',
  task: (traceContext: PersistedTraceContext) => Promise<T>,
): Promise<T> {
  const span = tracer.startSpan(API_DURABLE_PRODUCER_SPAN, {
    parent,
    attributes: { operation, queue_type: queueType },
  });
  try {
    const result = await task(toPersistedTraceContext(span.context));
    span.end({ status: 'ok', attributes: { outcome: 'completed' } });
    return result;
  } catch (error) {
    span.end({ status: 'error', attributes: { outcome: 'failed' } });
    throw error;
  }
}

function telemetryRoute(path: string): string {
  if (STATIC_TELEMETRY_ROUTES.has(path)) return path;
  if (/^\/v1\/risk-assessments\/[^/]+$/.test(path)) {
    return '/v1/risk-assessments/:assessment_id';
  }
  return 'unmatched';
}

function telemetryMethod(method: string): string {
  const normalized = method.toUpperCase();
  return ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'].includes(normalized)
    ? normalized
    : 'OTHER';
}

function telemetryStatusClass(status: number): string {
  const statusClass = Math.floor(status / 100);
  return statusClass >= 1 && statusClass <= 5 ? `${statusClass}xx` : 'other';
}

function readRequestId(value: string | undefined): string | null {
  const requestId = value?.trim();
  if (!requestId || requestId.length > 100) return null;
  if (/^req_[A-Za-z0-9-]{1,80}$/.test(requestId)) return requestId;
  if (/^[a-f0-9]{16,32}$/i.test(requestId)) return requestId;
  if (
    /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(requestId)
  ) {
    return requestId;
  }
  return null;
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

export class MemoryShadowComparisonRepository implements ShadowComparisonRepository {
  private readonly records = new Map<
    string,
    {
      comparisonId: string;
      comparison: NativeShadowComparisonInput;
      guardAssessment: RiskAssessmentResponse;
    }
  >();

  async save(input: {
    organizationId: string;
    storeId: string;
    apiKeyId: string;
    idempotencyKey: string;
    comparison: NativeShadowComparisonInput;
    guardAssessment: RiskAssessmentResponse;
  }): Promise<{ comparisonId: string; replay: boolean }> {
    const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
    const existing = this.records.get(key);
    if (existing) {
      if (
        JSON.stringify(existing.comparison) !== JSON.stringify(input.comparison) ||
        existing.guardAssessment.assessment_id !== input.guardAssessment.assessment_id
      ) {
        const error = new Error('SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') as Error & {
          code: string;
        };
        error.code = 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT';
        throw error;
      }
      return { comparisonId: existing.comparisonId, replay: true };
    }
    const comparisonId = `cmp_${randomUUID()}`;
    this.records.set(key, {
      comparisonId,
      comparison: input.comparison,
      guardAssessment: input.guardAssessment,
    });
    return { comparisonId, replay: false };
  }

  findByIdempotency(input: { organizationId: string; storeId: string; idempotencyKey: string }):
    | {
        comparisonId: string;
        comparison: NativeShadowComparisonInput;
        guardAssessment: RiskAssessmentResponse;
      }
    | undefined {
    return this.records.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`);
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

function structuredErrorCode(error: unknown): string | null {
  return error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
    ? error.code
    : null;
}

function classifyNativeShadowComparisonError(error: unknown): 'rejected' | 'error' {
  const code = structuredErrorCode(error);
  return code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT' ||
    code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
    code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
    code === 'TENANT_SCOPE_MISMATCH'
    ? 'rejected'
    : 'error';
}

function classifyNativeShadowAttemptError(error: unknown): 'rejected' | 'error' {
  const code = structuredErrorCode(error);
  return code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT' ||
    code === 'NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH'
    ? 'rejected'
    : 'error';
}

function requireScope(
  identity: ApiKeyIdentity,
  scope: string,
  requestId: string,
  metrics?: MetricRecorder,
): Response | null {
  if (identity.scopes.has('*') || identity.scopes.has(scope)) {
    recordApiControlEvent(metrics, 'authorization', 'allowed');
    return null;
  }
  recordApiControlEvent(metrics, 'authorization', 'rejected');
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
