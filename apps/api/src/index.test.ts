import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { MemoryUsageLedger } from '@ozzyl/billing';
import {
  createMetricRecorder,
  createStructuredLogger,
  type MetricRecorder,
  type StructuredLogger,
} from '@ozzyl/observability';
import {
  createApiApp,
  MemoryAssessmentRepository,
  MemoryOperationIdempotencyStore,
  MemoryOutcomeRepository,
  MemoryRateLimiter,
  MemoryRefreshQueue,
  MissingFeatureProvider,
  type ApiKeyIdentity,
  type AssessmentRepository,
} from './index.js';
function parseMetricLine(line: string): unknown {
  return JSON.parse(line) as unknown;
}

const apiKey = ['ozg', 'test', 'fixture-a'].join('_');

function createTestApp(input?: {
  identity?: ApiKeyIdentity;
  assessments?: AssessmentRepository;
  rawApiKey?: string;
  logger?: StructuredLogger;
  metrics?: MetricRecorder;
  monotonicNow?: () => number;
  verificationRequests?: {
    enqueueSend(input: {
      organizationId: string;
      storeId: string;
      assessmentId?: string;
      phone: string;
      phoneHash: string;
      purpose: string;
      idempotencyKey: string;
    }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
  };
  otpVerifier?: {
    verify(input: {
      organizationId: string;
      storeId: string;
      verificationId: string;
      otp: string;
    }): Promise<{ verified: true }>;
  };
}) {
  let counter = 0;
  const identity =
    input?.identity ??
    ({
      apiKeyId: 'key_1',
      organizationId: 'org_1',
      storeId: 'store_1',
      environment: 'test',
      plan: 'free',
      scopes: new Set(['*']),
    } satisfies ApiKeyIdentity);
  const acceptedKey = input?.rawApiKey ?? apiKey;
  return createApiApp({
    apiKeys: {
      async resolve(rawApiKey) {
        return rawApiKey === acceptedKey ? identity : null;
      },
    },
    usage: new MemoryUsageLedger(),
    features: new MissingFeatureProvider(),
    assessments: input?.assessments ?? new MemoryAssessmentRepository(),
    outcomes: new MemoryOutcomeRepository(),
    refreshQueue: new MemoryRefreshQueue(),
    idempotency: new MemoryOperationIdempotencyStore(),
    rateLimiter: new MemoryRateLimiter(),
    hashPhone: (phone) => createHmac('sha256', 'x'.repeat(32)).update(phone).digest('hex'),
    ...(input?.verificationRequests === undefined
      ? {}
      : { verificationRequests: input.verificationRequests }),
    ...(input?.otpVerifier === undefined ? {} : { otpVerifier: input.otpVerifier }),
    ...(input?.logger === undefined ? {} : { logger: input.logger }),
    ...(input?.metrics === undefined ? {} : { metrics: input.metrics }),
    ...(input?.monotonicNow === undefined ? {} : { monotonicNow: input.monotonicNow }),
    idFactory: (prefix) => `${prefix}_${++counter}`,
    now: () => new Date('2026-07-16T10:00:00.000Z'),
  });
}

const assessmentRequest = {
  phone: '01712345678',
  order_total: 1500,
  payment_method: 'cod',
};

const authorizedHeaders = {
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
  'Idempotency-Key': 'order-1001',
};

describe('Ozzyl Guard API', () => {
  it('records a bounded request lifecycle without logging dynamic path values', async () => {
    const lines: string[] = [];
    const metricLines: string[] = [];
    const ticks = [100, 125];
    const logger = createStructuredLogger({
      service: 'api-test',
      environment: 'test',
      clock: () => new Date('2026-07-28T00:00:00.000Z'),
      write: (line) => lines.push(line),
    });
    const metrics = createMetricRecorder({
      service: 'api-test',
      environment: 'test',
      clock: () => new Date('2026-07-28T00:00:00.000Z'),
      write: (line) => metricLines.push(line),
    });
    const response = await createTestApp({
      logger,
      metrics,
      monotonicNow: () => ticks.shift() ?? 125,
    }).request('/v1/risk-assessments/ras-sensitive-value?query=discard-me', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'X-Request-ID': 'req_client-123',
      },
    });

    expect(response.status).toBe(404);
    expect(response.headers.get('X-Request-ID')).toBe('req_client-123');
    expect(lines).toHaveLength(1);
    expect(JSON.parse(lines[0] ?? '{}')).toMatchObject({
      level: 'warn',
      event: 'api.request.completed',
      request_id: 'req_client-123',
      method: 'GET',
      route: '/v1/risk-assessments/:assessment_id',
      status_code: 404,
      status_class: '4xx',
      duration_ms: 25,
    });
    expect(lines.join('\n')).not.toContain('ras-sensitive-value');
    expect(lines.join('\n')).not.toContain('discard-me');
    expect(metricLines.map(parseMetricLine)).toEqual([
      expect.objectContaining({
        name: 'ozzyl.api.requests',
        kind: 'counter',
        value: 1,
        attributes: {
          method: 'GET',
          route: '/v1/risk-assessments/:assessment_id',
          status_class: '4xx',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.api.request.duration',
        kind: 'histogram',
        unit: 'ms',
        value: 25,
        attributes: {
          method: 'GET',
          route: '/v1/risk-assessments/:assessment_id',
          status_class: '4xx',
        },
      }),
    ]);
    expect(metricLines.join('\n')).not.toContain('ras-sensitive-value');
    expect(metricLines.join('\n')).not.toContain('discard-me');
  });

  it('rejects arbitrary caller request identifiers instead of reflecting them', async () => {
    const lines: string[] = [];
    const logger = createStructuredLogger({
      service: 'api-test',
      environment: 'test',
      write: (line) => lines.push(line),
    });
    const unsafeRequestId = 'customer-reference-1001';
    const response = await createTestApp({ logger }).request('/health', {
      headers: { 'X-Request-ID': unsafeRequestId },
    });

    expect(response.status).toBe(200);
    expect(response.headers.get('X-Request-ID')).toBe('req_1');
    expect(lines.join('\n')).not.toContain(unsafeRequestId);
  });

  it('keeps request handling available when the telemetry sink fails', async () => {
    const logger = createStructuredLogger({
      service: 'api-test',
      environment: 'test',
      write: () => {
        throw new Error('sink unavailable');
      },
    });
    const metrics = createMetricRecorder({
      service: 'api-test',
      environment: 'test',
      write: () => {
        throw new Error('metric sink unavailable');
      },
    });
    const response = await createTestApp({ logger, metrics }).request('/health');

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({ status: 'ok' });
  });

  it('records unhandled errors without exporting their messages or stacks', async () => {
    const lines: string[] = [];
    const logger = createStructuredLogger({
      service: 'api-test',
      environment: 'test',
      write: (line) => lines.push(line),
    });
    const failure = Object.assign(new Error('restricted database detail'), {
      code: 'DATABASE_FAILURE',
    });
    const assessments: AssessmentRepository = {
      async findByIdempotency() {
        throw failure;
      },
      async findById() {
        return null;
      },
      async save(record) {
        return record;
      },
    };
    const response = await createTestApp({ logger, assessments }).request('/v1/risk-assessments', {
      method: 'POST',
      headers: authorizedHeaders,
      body: JSON.stringify(assessmentRequest),
    });

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toMatchObject({
      success: false,
      error: { code: 'INTERNAL_ERROR' },
    });
    const records = lines.map((line) => JSON.parse(line) as Record<string, unknown>);
    expect(records).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          event: 'api.request.unhandled_error',
          code: 'UNHANDLED_ERROR',
          error: { name: 'Error', code: 'DATABASE_FAILURE' },
        }),
        expect.objectContaining({
          event: 'api.request.completed',
          status_code: 500,
          status_class: '5xx',
        }),
      ]),
    );
    expect(lines.join('\n')).not.toContain('restricted database detail');
    expect(lines.join('\n')).not.toContain('stack');
  });

  it('requires API authentication', async () => {
    const response = await createTestApp().request('/v1/risk-assessments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Idempotency-Key': 'request-1' },
      body: JSON.stringify(assessmentRequest),
    });
    expect(response.status).toBe(401);
  });

  it('returns the canonical unknown/verify assessment when history is unavailable', async () => {
    const response = await createTestApp().request('/v1/risk-assessments', {
      method: 'POST',
      headers: authorizedHeaders,
      body: JSON.stringify(assessmentRequest),
    });
    expect(response.status).toBe(201);
    const body = (await response.json()) as Record<string, unknown>;
    expect(body).toMatchObject({
      success: true,
      risk_level: 'unknown',
      decision: 'verify',
      confidence: 0,
    });
    expect((body.signals as Array<{ code: string }>)[0]?.code).toBe('insufficient_history');
  });

  it('returns the original result for an idempotent retry', async () => {
    const app = createTestApp();
    const first = await app.request('/v1/risk-assessments', {
      method: 'POST',
      headers: authorizedHeaders,
      body: JSON.stringify(assessmentRequest),
    });
    const second = await app.request('/v1/risk-assessments', {
      method: 'POST',
      headers: authorizedHeaders,
      body: JSON.stringify(assessmentRequest),
    });
    expect(first.status).toBe(201);
    expect(second.status).toBe(200);
    const firstBody = (await first.json()) as { assessment_id: string };
    const secondBody = (await second.json()) as { assessment_id: string };
    expect(secondBody.assessment_id).toBe(firstBody.assessment_id);
  });

  it('enforces store isolation when reading an assessment', async () => {
    const assessments = new MemoryAssessmentRepository();
    const storeOneApp = createTestApp({ assessments });
    const created = await storeOneApp.request('/v1/risk-assessments', {
      method: 'POST',
      headers: authorizedHeaders,
      body: JSON.stringify(assessmentRequest),
    });
    const createdBody = (await created.json()) as { assessment_id: string };

    const otherKey = ['ozg', 'test', 'fixture-b'].join('_');
    const storeTwoApp = createTestApp({
      assessments,
      rawApiKey: otherKey,
      identity: {
        apiKeyId: 'key_2',
        organizationId: 'org_1',
        storeId: 'store_2',
        environment: 'test',
        plan: 'free',
        scopes: new Set(['*']),
      },
    });
    const response = await storeTwoApp.request(
      `/v1/risk-assessments/${createdBody.assessment_id}`,
      { headers: { Authorization: `Bearer ${otherKey}` } },
    );
    expect(response.status).toBe(404);
  });

  it('queues OTP delivery without performing provider I/O in the request', async () => {
    let enqueueCalls = 0;
    const app = createTestApp({
      verificationRequests: {
        async enqueueSend(input) {
          enqueueCalls += 1;
          expect(input).toMatchObject({
            organizationId: 'org_1',
            storeId: 'store_1',
            purpose: 'cod_order_confirmation',
            idempotencyKey: 'otp-1001',
          });
          return {
            verificationId: 'ver_queued',
            expiresAt: '2026-07-16T10:05:00.000Z',
            replay: false,
          };
        },
      },
    });
    const response = await app.request('/v1/verifications/otp/send', {
      method: 'POST',
      headers: { ...authorizedHeaders, 'Idempotency-Key': 'otp-1001' },
      body: JSON.stringify({ phone: '01712345678' }),
    });
    expect(response.status).toBe(202);
    await expect(response.json()).resolves.toMatchObject({
      success: true,
      verification_id: 'ver_queued',
      status: 'queued',
    });
    expect(enqueueCalls).toBe(1);
  });

  it('verifies OTP through the database verifier dependency', async () => {
    let verifyCalls = 0;
    const app = createTestApp({
      otpVerifier: {
        async verify(input) {
          verifyCalls += 1;
          expect(input).toEqual({
            organizationId: 'org_1',
            storeId: 'store_1',
            verificationId: 'ver_queued',
            otp: '123456',
          });
          return { verified: true };
        },
      },
    });
    const response = await app.request('/v1/verifications/otp/verify', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ verification_id: 'ver_queued', otp: '123456' }),
    });
    expect(response.status).toBe(200);
    expect(verifyCalls).toBe(1);
  });

  it('records outcomes idempotently', async () => {
    const app = createTestApp();
    const body = {
      external_order_id: 'WC-1001',
      outcome: 'delivered',
      occurred_at: '2026-07-16T10:30:00.000Z',
    };
    const first = await app.request('/v1/order-outcomes', {
      method: 'POST',
      headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
      body: JSON.stringify(body),
    });
    const second = await app.request('/v1/order-outcomes', {
      method: 'POST',
      headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
      body: JSON.stringify(body),
    });
    expect(first.status).toBe(201);
    expect(second.status).toBe(200);
    const firstBody = (await first.json()) as { outcome_id: string };
    const secondBody = (await second.json()) as { outcome_id: string; replay: boolean };
    expect(secondBody).toMatchObject({ outcome_id: firstBody.outcome_id, replay: true });
  });
});
