import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { MemoryUsageLedger } from '@ozzyl/billing';
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

const apiKey = ['ozg', 'test', 'fixture-a'].join('_');

function createTestApp(input?: {
  identity?: ApiKeyIdentity;
  assessments?: AssessmentRepository;
  rawApiKey?: string;
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
