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
  MemoryShadowComparisonRepository,
  MissingFeatureProvider,
  type ApiKeyIdentity,
  type AssessmentRepository,
} from './index.js';

const keyOne = 'ozg_test_native_shadow_one';
const keyTwo = 'ozg_test_native_shadow_two';

function createApp(input?: {
  key?: string;
  identity?: ApiKeyIdentity;
  assessments?: AssessmentRepository;
  comparisons?: MemoryShadowComparisonRepository;
}) {
  let counter = 0;
  const acceptedKey = input?.key ?? keyOne;
  const identity =
    input?.identity ??
    ({
      apiKeyId: 'key_native_one',
      organizationId: 'org_native',
      storeId: 'store_native_one',
      environment: 'test',
      plan: 'free',
      scopes: new Set(['*']),
    } satisfies ApiKeyIdentity);
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
    shadowComparisons: input?.comparisons ?? new MemoryShadowComparisonRepository(),
    idempotency: new MemoryOperationIdempotencyStore(),
    rateLimiter: new MemoryRateLimiter(),
    hashPhone: (phone) => createHmac('sha256', 'n'.repeat(32)).update(phone).digest('hex'),
    idFactory: (prefix) => `${prefix}_${++counter}`,
    now: () => new Date('2026-07-18T08:00:00.000Z'),
  });
}

async function createAssessment(app: ReturnType<typeof createApp>, orderId: string) {
  const response = await app.request('/v1/risk-assessments', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${keyOne}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': `assessment-${orderId}`,
    },
    body: JSON.stringify({
      external_order_id: orderId,
      phone: '01712345678',
      order_total: 1200,
      payment_method: 'cod',
    }),
  });
  expect(response.status).toBe(201);
  return (await response.json()) as { assessment_id: string };
}

describe('native shadow comparison API', () => {
  it('persists a scoped comparison idempotently without changing the legacy decision', async () => {
    const comparisons = new MemoryShadowComparisonRepository();
    const app = createApp({ comparisons });
    const assessment = await createAssessment(app, 'ORDER-100');

    const request = {
      external_order_id: 'ORDER-100',
      assessment_id: assessment.assessment_id,
      legacy_score: 20,
      legacy_decision: 'ALLOW',
      rollout_version: 'pilot-v1',
      sample_bucket: 140,
      sample_rate_bps: 1000,
      evaluated_at: '2026-07-18T08:00:00.000Z',
    };
    const headers = {
      Authorization: `Bearer ${keyOne}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': 'native-shadow-order-100',
    };
    const first = await app.request('/v1/integration-comparisons/native-shadow', {
      method: 'POST',
      headers,
      body: JSON.stringify(request),
    });
    const second = await app.request('/v1/integration-comparisons/native-shadow', {
      method: 'POST',
      headers,
      body: JSON.stringify(request),
    });

    expect(first.status).toBe(201);
    expect(second.status).toBe(200);
    const firstBody = (await first.json()) as { comparison_id: string };
    await expect(second.json()).resolves.toMatchObject({
      success: true,
      comparison_id: firstBody.comparison_id,
      replay: true,
    });
    expect(
      comparisons.findByIdempotency({
        organizationId: 'org_native',
        storeId: 'store_native_one',
        idempotencyKey: 'native-shadow-order-100',
      })?.comparison.legacy_decision,
    ).toBe('allow');
  });

  it('rejects an assessment owned by another store', async () => {
    const assessments = new MemoryAssessmentRepository();
    const storeOne = createApp({ assessments });
    const assessment = await createAssessment(storeOne, 'ORDER-OTHER');

    const storeTwo = createApp({
      key: keyTwo,
      assessments,
      identity: {
        apiKeyId: 'key_native_two',
        organizationId: 'org_native',
        storeId: 'store_native_two',
        environment: 'test',
        plan: 'free',
        scopes: new Set(['*']),
      },
    });
    const response = await storeTwo.request('/v1/integration-comparisons/native-shadow', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${keyTwo}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': 'native-shadow-other',
      },
      body: JSON.stringify({
        external_order_id: 'ORDER-OTHER',
        assessment_id: assessment.assessment_id,
        legacy_score: 10,
        legacy_decision: 'allow',
        rollout_version: 'pilot-v1',
        sample_bucket: 10,
        sample_rate_bps: 1000,
        evaluated_at: '2026-07-18T08:00:00.000Z',
      }),
    });
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      error: { code: 'ASSESSMENT_NOT_FOUND' },
    });
  });

  it('requires the dedicated comparison write scope', async () => {
    const app = createApp({
      identity: {
        apiKeyId: 'key_native_limited',
        organizationId: 'org_native',
        storeId: 'store_native_one',
        environment: 'test',
        plan: 'free',
        scopes: new Set(['risk:write']),
      },
    });
    const response = await app.request('/v1/integration-comparisons/native-shadow', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${keyOne}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': 'native-shadow-scope',
      },
      body: JSON.stringify({}),
    });
    expect(response.status).toBe(403);
  });
});
