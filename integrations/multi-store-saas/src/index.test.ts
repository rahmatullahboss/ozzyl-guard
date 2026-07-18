import { describe, expect, it } from 'vitest';
import type {
  NativeShadowAttemptInput,
  NativeShadowComparisonInput,
  OrderOutcomeInput,
  RiskAssessmentRequest,
} from '@ozzyl/shared-types';
import {
  MultiStoreGuardAdapter,
  MultiStorePostPersistShadowIntegration,
  deterministicBucket,
  type MultiStoreGuardClient,
  type PersistedCommerceOrderReader,
} from './index.js';

class FakeClient implements MultiStoreGuardClient {
  assessmentCalls: Array<{ input: RiskAssessmentRequest; idempotencyKey: string }> = [];
  comparisonCalls: Array<{ input: NativeShadowComparisonInput; idempotencyKey: string }> = [];
  attemptCalls: Array<{ input: NativeShadowAttemptInput; idempotencyKey: string }> = [];
  outcomeCalls: Array<{ input: OrderOutcomeInput; idempotencyKey: string }> = [];
  failAssessment = false;
  assessmentFailureCode: string | undefined;
  failComparison = false;
  failAttempt = false;
  rolloutMode: 'off' | 'shadow' = 'shadow';

  async createRiskAssessment(input: RiskAssessmentRequest, options: { idempotencyKey: string }) {
    this.assessmentCalls.push({ input, idempotencyKey: options.idempotencyKey });
    if (this.failAssessment) {
      throw Object.assign(new Error('network details must not escape'), {
        code: this.assessmentFailureCode,
      });
    }
    return {
      success: true as const,
      assessment_id: 'ras_shadow',
      risk_score: 88,
      risk_level: 'critical' as const,
      decision: 'block' as const,
      confidence: 0.9,
      signals: [],
      courier_summary: {
        freshness: 'fresh' as const,
        providers: 1,
        total: 10,
        delivered: 1,
        returned: 9,
        cancelled_before_shipping: 0,
      },
      meta: {
        engine_version: '1.0.0',
        policy_version: 'pilot',
        degraded: false,
      },
    };
  }

  async getNativeShadowRollout() {
    return {
      success: true as const,
      organization_id: 'org_one',
      store_id: 'store_one',
      integration: 'multi-store-saas' as const,
      mode: this.rolloutMode,
      rollout_version: this.rolloutMode === 'off' ? 'off' : 'pilot-v1',
      sample_rate_bps: this.rolloutMode === 'off' ? 0 : 10_000,
      sampling_key: 'store-one',
    };
  }

  async reportNativeShadowComparison(
    input: NativeShadowComparisonInput,
    options: { idempotencyKey: string },
  ) {
    this.comparisonCalls.push({ input, idempotencyKey: options.idempotencyKey });
    if (this.failComparison) throw new Error('database details must not escape');
    return { success: true as const, comparison_id: 'cmp_shadow', replay: false };
  }

  async reportNativeShadowAttempt(
    input: NativeShadowAttemptInput,
    options: { idempotencyKey: string },
  ) {
    this.attemptCalls.push({ input, idempotencyKey: options.idempotencyKey });
    if (this.failAttempt) throw new Error('attempt database details must not escape');
    return { success: true as const, attempt_id: 'nsa_shadow', replay: false };
  }

  async submitOutcome(input: OrderOutcomeInput, options: { idempotencyKey: string }) {
    this.outcomeCalls.push({ input, idempotencyKey: options.idempotencyKey });
    return { success: true as const, outcome_id: 'out_shadow' };
  }
}

const order = {
  id: 'ORDER-100',
  phone: '01712345678',
  total: 1500,
  paymentMethod: 'cod' as const,
  district: 'Dhaka',
  itemCount: 2,
};

describe('MultiStoreGuardAdapter shadow rollout', () => {
  it('does not call Guard while the feature flag is off', async () => {
    const client = new FakeClient();
    const adapter = new MultiStoreGuardAdapter(client);
    const result = await adapter.evaluateShadow(
      order,
      { score: 10, decision: 'ALLOW' },
      { mode: 'off', version: 'pilot-v1', sampleRateBps: 0, samplingKey: 'store-one' },
    );

    expect(result).toMatchObject({
      selected: false,
      effective: { source: 'legacy', score: 10, decision: 'allow' },
    });
    expect(client.assessmentCalls).toHaveLength(0);
    expect(client.comparisonCalls).toHaveLength(0);
  });

  it('uses deterministic sampling and skips orders outside the selected cohort', async () => {
    const client = new FakeClient();
    const adapter = new MultiStoreGuardAdapter(client);
    const bucket = deterministicBucket('store-one', order.id);
    const sampleRateBps = bucket === 0 ? 1 : bucket;
    const result = await adapter.evaluateShadow(
      order,
      { score: 10, decision: 'allow' },
      {
        mode: 'shadow',
        version: 'pilot-v1',
        sampleRateBps,
        samplingKey: 'store-one',
      },
    );

    expect(result.sampleBucket).toBe(bucket);
    expect(result.selected).toBe(bucket < sampleRateBps);
    if (!result.selected) expect(client.assessmentCalls).toHaveLength(0);
  });

  it('persists selected comparisons while legacy remains authoritative even when Guard blocks', async () => {
    const client = new FakeClient();
    const adapter = new MultiStoreGuardAdapter(client, () => new Date('2026-07-18T08:00:00.000Z'));
    const result = await adapter.evaluateShadow(
      order,
      { score: 10, decision: 'ALLOW' },
      {
        mode: 'shadow',
        version: 'pilot-v1',
        sampleRateBps: 10_000,
        samplingKey: 'store-one',
      },
    );

    expect(result).toMatchObject({
      selected: true,
      effective: { source: 'legacy', score: 10, decision: 'allow' },
      comparison: {
        persisted: true,
        comparisonId: 'cmp_shadow',
        decisionChanged: true,
        scoreDelta: 78,
        guardAssessment: { decision: 'block' },
      },
    });
    expect(client.comparisonCalls[0]?.input).toMatchObject({
      external_order_id: 'ORDER-100',
      assessment_id: 'ras_shadow',
      legacy_score: 10,
      legacy_decision: 'allow',
      rollout_version: 'pilot-v1',
      sample_rate_bps: 10_000,
      evaluated_at: '2026-07-18T08:00:00.000Z',
    });
  });

  it('falls back to the legacy result with a safe code when Guard assessment fails', async () => {
    const client = new FakeClient();
    client.failAssessment = true;
    const adapter = new MultiStoreGuardAdapter(client);
    const result = await adapter.evaluateShadow(
      order,
      { score: 10, decision: 'allow' },
      {
        mode: 'shadow',
        version: 'pilot-v1',
        sampleRateBps: 10_000,
        samplingKey: 'store-one',
      },
    );

    expect(result).toMatchObject({
      selected: true,
      effective: { source: 'legacy', decision: 'allow' },
      failure: { code: 'GUARD_ASSESSMENT_FAILED' },
    });
    expect(result.comparison).toBeUndefined();
    expect(client.comparisonCalls).toHaveLength(0);
  });

  it('keeps the comparison advisory and returns a safe failure when persistence fails', async () => {
    const client = new FakeClient();
    client.failComparison = true;
    const adapter = new MultiStoreGuardAdapter(client);
    const result = await adapter.evaluateShadow(
      order,
      { score: 10, decision: 'allow' },
      {
        mode: 'shadow',
        version: 'pilot-v1',
        sampleRateBps: 10_000,
        samplingKey: 'store-one',
      },
    );

    expect(result).toMatchObject({
      selected: true,
      effective: { source: 'legacy', decision: 'allow' },
      comparison: { persisted: false, guardAssessment: { decision: 'block' } },
      failure: { code: 'COMPARISON_PERSIST_FAILED' },
    });
  });
});

class FakeOrderReader implements PersistedCommerceOrderReader {
  organizationId = 'org_one';
  storeId = 'store_one';
  missing = false;

  async loadPersistedOrder() {
    if (this.missing) return null;
    return {
      organizationId: this.organizationId,
      storeId: this.storeId,
      order,
      legacy: { score: 10, decision: 'allow' },
    };
  }
}

describe('MultiStorePostPersistShadowIntegration', () => {
  it('runs after authoritative persisted-order reload and records a successful attempt', async () => {
    const client = new FakeClient();
    const integration = new MultiStorePostPersistShadowIntegration(
      new FakeOrderReader(),
      client,
      () => new Date('2026-07-18T08:00:00.000Z'),
    );

    const result = await integration.afterOrderPersisted({
      organizationId: 'org_one',
      storeId: 'store_one',
      orderId: order.id,
    });

    expect(result).toMatchObject({
      selected: true,
      attemptRecorded: true,
      effective: { source: 'legacy', score: 10, decision: 'allow' },
      evaluation: { comparison: { comparisonId: 'cmp_shadow', persisted: true } },
    });
    expect(client.attemptCalls[0]?.input).toMatchObject({
      external_order_id: order.id,
      status: 'comparison_succeeded',
      assessment_id: 'ras_shadow',
      comparison_id: 'cmp_shadow',
      rollout_version: 'pilot-v1',
    });
  });

  it('keeps default off stores out of Guard and attempt persistence', async () => {
    const client = new FakeClient();
    client.rolloutMode = 'off';
    const integration = new MultiStorePostPersistShadowIntegration(new FakeOrderReader(), client);

    const result = await integration.afterOrderPersisted({
      organizationId: 'org_one',
      storeId: 'store_one',
      orderId: order.id,
    });

    expect(result).toMatchObject({ selected: false, attemptRecorded: false });
    expect(client.assessmentCalls).toHaveLength(0);
    expect(client.comparisonCalls).toHaveLength(0);
    expect(client.attemptCalls).toHaveLength(0);
  });

  it('rejects source relational scope mismatch before any Guard call', async () => {
    const client = new FakeClient();
    const reader = new FakeOrderReader();
    reader.storeId = 'store_other';
    const integration = new MultiStorePostPersistShadowIntegration(reader, client);

    const result = await integration.afterOrderPersisted({
      organizationId: 'org_one',
      storeId: 'store_one',
      orderId: order.id,
    });

    expect(result.advisory).toEqual({ code: 'SOURCE_SCOPE_MISMATCH' });
    expect(client.assessmentCalls).toHaveLength(0);
    expect(client.attemptCalls).toHaveLength(0);
  });

  it('records a timeout as advisory attempt state without changing the legacy decision', async () => {
    const client = new FakeClient();
    client.failAssessment = true;
    client.assessmentFailureCode = 'REQUEST_TIMEOUT';
    const integration = new MultiStorePostPersistShadowIntegration(
      new FakeOrderReader(),
      client,
      () => new Date('2026-07-18T08:00:00.000Z'),
    );

    const result = await integration.afterOrderPersisted({
      organizationId: 'org_one',
      storeId: 'store_one',
      orderId: order.id,
    });

    expect(result).toMatchObject({
      selected: true,
      attemptRecorded: true,
      effective: { source: 'legacy', decision: 'allow' },
      advisory: { code: 'GUARD_TIMEOUT' },
    });
    expect(client.attemptCalls[0]?.input).toMatchObject({
      status: 'assessment_failed',
      failure_code: 'GUARD_TIMEOUT',
    });
  });

  it('isolates attempt persistence failure from the authoritative legacy decision', async () => {
    const client = new FakeClient();
    client.failAttempt = true;
    const integration = new MultiStorePostPersistShadowIntegration(new FakeOrderReader(), client);

    const result = await integration.afterOrderPersisted({
      organizationId: 'org_one',
      storeId: 'store_one',
      orderId: order.id,
    });

    expect(result).toMatchObject({
      selected: true,
      attemptRecorded: false,
      effective: { source: 'legacy', decision: 'allow' },
      advisory: { code: 'ATTEMPT_PERSIST_FAILED' },
    });
  });
});
