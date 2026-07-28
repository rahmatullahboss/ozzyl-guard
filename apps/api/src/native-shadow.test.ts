import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { MemoryUsageLedger } from '@ozzyl/billing';
import { createMetricRecorder, type MetricPoint, type MetricRecorder } from '@ozzyl/observability';
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
  type NativeShadowAttemptRepository,
  type NativeShadowRolloutRepository,
} from './index.js';

const keyOne = 'ozg_test_native_shadow_one';
const keyTwo = 'ozg_test_native_shadow_two';

function createApp(input?: {
  key?: string;
  identity?: ApiKeyIdentity;
  assessments?: AssessmentRepository;
  comparisons?: MemoryShadowComparisonRepository;
  rollouts?: NativeShadowRolloutRepository;
  attempts?: NativeShadowAttemptRepository;
  metrics?: MetricRecorder;
}) {
  let counter = 0;
  let monotonicTime = 0;
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
    ...(input?.rollouts === undefined ? {} : { nativeShadowRollouts: input.rollouts }),
    ...(input?.attempts === undefined ? {} : { nativeShadowAttempts: input.attempts }),
    idempotency: new MemoryOperationIdempotencyStore(),
    rateLimiter: new MemoryRateLimiter(),
    hashPhone: (phone) => createHmac('sha256', 'n'.repeat(32)).update(phone).digest('hex'),
    idFactory: (prefix) => `${prefix}_${++counter}`,
    now: () => new Date('2026-07-18T08:00:00.000Z'),
    monotonicNow: () => ++monotonicTime,
    ...(input?.metrics === undefined ? {} : { metrics: input.metrics }),
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

  it('emits finite rollout, comparison, attempt, replay, and conflict metrics without business identifiers', async () => {
    const metricPoints: MetricPoint[] = [];
    const metrics = createMetricRecorder({
      service: 'native-shadow-test',
      environment: 'test',
      clock: () => new Date('2026-07-18T08:00:00.000Z'),
      write: (_line, point) => metricPoints.push(point),
    });
    const attempts = new Map<string, string>();
    const app = createApp({
      metrics,
      rollouts: {
        async load(input) {
          return {
            organizationId: input.organizationId,
            storeId: input.storeId,
            integration: 'multi-store-saas',
            mode: 'shadow',
            rolloutVersion: 'pilot-v1',
            sampleRateBps: 1000,
            samplingKey: 'bounded-sampling-category',
          };
        },
      },
      attempts: {
        async save(input) {
          const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
          const existing = attempts.get(key);
          if (existing) return { attemptId: existing, replay: true };
          const attemptId = 'nat_metric_attempt';
          attempts.set(key, attemptId);
          return { attemptId, replay: false };
        },
      },
    });

    const rollout = await app.request('/v1/integration-rollouts/native-shadow', {
      headers: { Authorization: `Bearer ${keyOne}` },
    });
    expect(rollout.status).toBe(200);

    const assessment = await createAssessment(app, 'ORDER-METRIC');
    const comparisonHeaders = {
      Authorization: `Bearer ${keyOne}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': 'native-shadow-metric-comparison',
    };
    const comparison = {
      external_order_id: 'ORDER-METRIC',
      assessment_id: assessment.assessment_id,
      legacy_score: 20,
      legacy_decision: 'allow',
      rollout_version: 'pilot-v1',
      sample_bucket: 140,
      sample_rate_bps: 1000,
      evaluated_at: '2026-07-18T08:00:00.000Z',
    };
    const comparisonFirst = await app.request('/v1/integration-comparisons/native-shadow', {
      method: 'POST',
      headers: comparisonHeaders,
      body: JSON.stringify(comparison),
    });
    const comparisonReplay = await app.request('/v1/integration-comparisons/native-shadow', {
      method: 'POST',
      headers: comparisonHeaders,
      body: JSON.stringify(comparison),
    });
    const comparisonConflict = await app.request('/v1/integration-comparisons/native-shadow', {
      method: 'POST',
      headers: comparisonHeaders,
      body: JSON.stringify({ ...comparison, legacy_score: 21 }),
    });
    expect(comparisonFirst.status).toBe(201);
    expect(comparisonReplay.status).toBe(200);
    expect(comparisonConflict.status).toBe(409);

    const attemptHeaders = {
      Authorization: `Bearer ${keyOne}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': 'native-shadow-metric-attempt',
    };
    const attempt = {
      external_order_id: 'ORDER-METRIC',
      rollout_version: 'pilot-v1',
      sample_bucket: 140,
      sample_rate_bps: 1000,
      status: 'comparison_succeeded',
      assessment_id: assessment.assessment_id,
      comparison_id: 'cmp_metric',
      evaluated_at: '2026-07-18T08:00:00.000Z',
    };
    const attemptFirst = await app.request('/v1/integration-attempts/native-shadow', {
      method: 'POST',
      headers: attemptHeaders,
      body: JSON.stringify(attempt),
    });
    const attemptReplay = await app.request('/v1/integration-attempts/native-shadow', {
      method: 'POST',
      headers: attemptHeaders,
      body: JSON.stringify(attempt),
    });
    expect(attemptFirst.status).toBe(201);
    expect(attemptReplay.status).toBe(200);

    expect(metricPoints).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'ozzyl.api.dependency.operations',
          attributes: {
            dependency_type: 'native_shadow_rollout_repository',
            operation: 'load',
            outcome: 'success',
          },
        }),
        expect.objectContaining({
          name: 'ozzyl.api.dependency.operations',
          attributes: {
            dependency_type: 'native_shadow_comparison_repository',
            operation: 'save',
            outcome: 'success',
          },
        }),
        expect.objectContaining({
          name: 'ozzyl.api.dependency.operations',
          attributes: {
            dependency_type: 'native_shadow_comparison_repository',
            operation: 'save',
            outcome: 'replay',
          },
        }),
        expect.objectContaining({
          name: 'ozzyl.api.dependency.operations',
          attributes: {
            dependency_type: 'native_shadow_comparison_repository',
            operation: 'save',
            outcome: 'rejected',
          },
        }),
        expect.objectContaining({
          name: 'ozzyl.api.dependency.operations',
          attributes: {
            dependency_type: 'native_shadow_attempt_repository',
            operation: 'save',
            outcome: 'success',
          },
        }),
        expect.objectContaining({
          name: 'ozzyl.api.dependency.operations',
          attributes: {
            dependency_type: 'native_shadow_attempt_repository',
            operation: 'save',
            outcome: 'replay',
          },
        }),
        expect.objectContaining({
          name: 'ozzyl.api.control.events',
          attributes: { control: 'idempotency', outcome: 'conflict' },
        }),
      ]),
    );
    const serialized = JSON.stringify(metricPoints);
    expect(serialized).not.toContain('org_native');
    expect(serialized).not.toContain('store_native_one');
    expect(serialized).not.toContain('ORDER-METRIC');
    expect(serialized).not.toContain(assessment.assessment_id);
    expect(serialized).not.toContain('native-shadow-metric-comparison');
    expect(serialized).not.toContain('native-shadow-metric-attempt');
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

  it('classifies unknown native-shadow attempt persistence failures as errors', async () => {
    const metricPoints: MetricPoint[] = [];
    const app = createApp({
      metrics: createMetricRecorder({
        service: 'native-shadow-test',
        environment: 'test',
        write: (_line, point) => metricPoints.push(point),
      }),
      attempts: {
        async save() {
          throw new Error('database unavailable for sensitive order');
        },
      },
    });

    const response = await app.request('/v1/integration-attempts/native-shadow', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${keyOne}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': 'native-shadow-error-attempt',
      },
      body: JSON.stringify({
        external_order_id: 'ORDER-ERROR',
        rollout_version: 'pilot-v1',
        sample_bucket: 1,
        sample_rate_bps: 1000,
        status: 'assessment_failed',
        failure_code: 'GUARD_ASSESSMENT_FAILED',
        evaluated_at: '2026-07-18T08:00:00.000Z',
      }),
    });

    expect(response.status).toBe(503);
    expect(metricPoints).toContainEqual(
      expect.objectContaining({
        name: 'ozzyl.api.dependency.operations',
        attributes: {
          dependency_type: 'native_shadow_attempt_repository',
          operation: 'save',
          outcome: 'error',
        },
      }),
    );
    const serialized = JSON.stringify(metricPoints);
    expect(serialized).not.toContain('ORDER-ERROR');
    expect(serialized).not.toContain('database unavailable');
    expect(serialized).not.toContain('native-shadow-error-attempt');
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
