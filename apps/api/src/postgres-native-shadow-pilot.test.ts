import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import type { StoredAssessment } from './index.js';
import {
  PostgresNativeShadowAttemptRepository,
  PostgresNativeShadowRolloutRepository,
  loadPlatformNativeShadowPilotReport,
  loadStoreNativeShadowPilotReport,
} from './postgres-native-shadow-pilot.js';
import { PostgresAssessmentRepository } from './postgres.js';
import { PostgresShadowComparisonRepository } from './postgres-shadow-comparisons.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL native shadow pilot', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 8 });
  const suffix = randomUUID();
  const organizationId = `org_pilot_${suffix}`;
  const otherOrganizationId = `org_pilot_other_${suffix}`;
  const storeId = `sto_pilot_${suffix}`;
  const otherStoreId = `sto_pilot_other_${suffix}`;
  const apiKeyId = 'record_' + suffix;
  const userId = `usr_pilot_${suffix}`;
  const assessmentId = `ras_pilot_${suffix}`;
  const externalOrderId = `ORDER-${suffix}`;
  let comparisonId = '';

  beforeAll(async () => {
    await pool.query(
      `insert into users (id, email, managed_auth_id, status) values ($1, $2, $3, 'active')`,
      [userId, `pilot-${suffix}@example.com`, `managed-${userId}`],
    );
    await pool.query(
      `
        insert into organizations (id, name, slug, plan_id)
        values ($1, 'Pilot Merchant', $2, 'plan_free'),
               ($3, 'Other Merchant', $4, 'plan_free')
      `,
      [organizationId, `pilot-${suffix}`, otherOrganizationId, `pilot-other-${suffix}`],
    );
    await pool.query(
      `
        insert into stores (id, organization_id, name, platform)
        values ($1, $2, 'Primary', 'multi-store-saas'),
               ($3, $4, 'Other tenant', 'multi-store-saas')
      `,
      [storeId, organizationId, otherStoreId, otherOrganizationId],
    );
    await pool.query(
      `insert into organization_members (organization_id, user_id, role) values ($1, $2, 'owner')`,
      [organizationId, userId],
    );
    await pool.query(
      `
        insert into api_keys (
          id, organization_id, store_id, environment, key_hash, key_prefix, name, scopes
        ) values ($1, $2, $3, 'test', $4, 'ozg_test_pilot', 'Pilot test', $5::jsonb)
      `,
      [
        apiKeyId,
        organizationId,
        storeId,
        `hash_${suffix}`,
        JSON.stringify(['risk:write', 'comparisons:write']),
      ],
    );
    await new PostgresAssessmentRepository(pool).save(assessmentRecord());
    comparisonId = (
      await new PostgresShadowComparisonRepository(pool).save({
        organizationId,
        storeId,
        apiKeyId,
        idempotencyKey: `comparison-${suffix}`,
        comparison: {
          external_order_id: externalOrderId,
          assessment_id: assessmentId,
          legacy_score: 20,
          legacy_decision: 'allow',
          rollout_version: 'pilot-v1',
          sample_bucket: 100,
          sample_rate_bps: 1000,
          evaluated_at: '2026-07-18T08:00:00.000Z',
        },
        guardAssessment: assessmentRecord().response,
      })
    ).comparisonId;
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id in ($1, $2)', [
      organizationId,
      otherOrganizationId,
    ]);
    await pool.query('delete from users where id = $1', [userId]);
    await pool.end();
  });

  it('defaults to off and requires explicit owner/admin opt-in for the exact tenant store', async () => {
    const rollouts = new PostgresNativeShadowRolloutRepository(pool);
    await expect(rollouts.load({ organizationId, storeId })).resolves.toMatchObject({
      mode: 'off',
      rolloutVersion: 'off',
      sampleRateBps: 0,
    });

    await expect(
      rollouts.setForStore({
        userId,
        organizationId,
        storeId: otherStoreId,
        mode: 'shadow',
        rolloutVersion: 'pilot-v1',
        sampleRateBps: 1000,
      }),
    ).resolves.toBeNull();

    await expect(
      rollouts.setForStore({
        userId,
        organizationId,
        storeId,
        mode: 'shadow',
        rolloutVersion: 'pilot-v1',
        sampleRateBps: 1000,
      }),
    ).resolves.toMatchObject({
      organizationId,
      storeId,
      mode: 'shadow',
      rolloutVersion: 'pilot-v1',
      sampleRateBps: 1000,
    });
  });

  it('serializes duplicate attempts and rejects cross-tenant references', async () => {
    const attempts = new PostgresNativeShadowAttemptRepository(pool);
    const input = {
      organizationId,
      storeId,
      apiKeyId,
      idempotencyKey: `attempt-success-${suffix}`,
      attempt: {
        external_order_id: externalOrderId,
        rollout_version: 'pilot-v1',
        sample_bucket: 100,
        sample_rate_bps: 1000,
        status: 'comparison_succeeded' as const,
        assessment_id: assessmentId,
        comparison_id: comparisonId,
        evaluated_at: '2026-07-18T08:00:00.000Z',
      },
    };
    const results = await Promise.all([
      attempts.save(input),
      attempts.save(input),
      attempts.save(input),
    ]);
    expect(new Set(results.map((result) => result.attemptId)).size).toBe(1);
    expect(results.filter((result) => !result.replay)).toHaveLength(1);
    expect(results.filter((result) => result.replay)).toHaveLength(2);

    await expect(
      attempts.save({
        ...input,
        storeId: otherStoreId,
        idempotencyKey: `attempt-other-tenant-${suffix}`,
      }),
    ).rejects.toMatchObject({ code: 'TENANT_SCOPE_MISMATCH' });
  });

  it('persists assessment and comparison persistence failures as advisory metrics', async () => {
    const attempts = new PostgresNativeShadowAttemptRepository(pool);
    await attempts.save({
      organizationId,
      storeId,
      apiKeyId,
      idempotencyKey: `attempt-assessment-failure-${suffix}`,
      attempt: {
        external_order_id: `FAILED-${suffix}`,
        rollout_version: 'pilot-v1',
        sample_bucket: 101,
        sample_rate_bps: 1000,
        status: 'assessment_failed',
        failure_code: 'GUARD_TIMEOUT',
        evaluated_at: '2026-07-18T08:01:00.000Z',
      },
    });
    await attempts.save({
      organizationId,
      storeId,
      apiKeyId,
      idempotencyKey: `attempt-persistence-failure-${suffix}`,
      attempt: {
        external_order_id: externalOrderId,
        rollout_version: 'pilot-v1',
        sample_bucket: 102,
        sample_rate_bps: 1000,
        status: 'comparison_persist_failed',
        failure_code: 'COMPARISON_PERSIST_FAILED',
        assessment_id: assessmentId,
        evaluated_at: '2026-07-18T08:02:00.000Z',
      },
    });

    const report = await loadStoreNativeShadowPilotReport(pool, {
      organizationId,
      storeId,
      now: new Date('2026-07-18T09:00:00.000Z'),
    });
    expect(report).toMatchObject({
      mode: 'shadow',
      sampled_orders: 3,
      successful_comparisons: 1,
      assessment_failures: 1,
      persistence_failures: 1,
      decision_disagreement_rate: 1,
      score_delta: { minimum: 35, maximum: 35, average: 35, higher: 1 },
    });

    const platformReport = await loadPlatformNativeShadowPilotReport(pool, {
      now: new Date('2026-07-18T09:00:00.000Z'),
    });
    expect(platformReport.opted_in_stores).toBeGreaterThanOrEqual(1);
    expect(platformReport.sampled_orders).toBeGreaterThanOrEqual(3);
  });

  it('rejects new attempt persistence immediately after explicit opt-out', async () => {
    const rollouts = new PostgresNativeShadowRolloutRepository(pool);
    await rollouts.setForStore({
      userId,
      organizationId,
      storeId,
      mode: 'off',
      rolloutVersion: 'off',
      sampleRateBps: 0,
    });
    await expect(
      new PostgresNativeShadowAttemptRepository(pool).save({
        organizationId,
        storeId,
        apiKeyId,
        idempotencyKey: `attempt-after-off-${suffix}`,
        attempt: {
          external_order_id: `OFF-${suffix}`,
          rollout_version: 'pilot-v1',
          sample_bucket: 103,
          sample_rate_bps: 1000,
          status: 'assessment_failed',
          failure_code: 'GUARD_ASSESSMENT_FAILED',
          evaluated_at: '2026-07-18T08:03:00.000Z',
        },
      }),
    ).rejects.toMatchObject({ code: 'NATIVE_SHADOW_NOT_OPTED_IN' });
  });

  function assessmentRecord(): StoredAssessment {
    return {
      identity: { apiKeyId, organizationId, storeId },
      idempotencyKey: `assessment-pilot-${suffix}`,
      phoneHash: `phone-pilot-${suffix}`,
      request: {
        external_order_id: externalOrderId,
        phone: '01712345678',
        order_total: 1000,
        payment_method: 'cod',
      },
      response: {
        success: true,
        assessment_id: assessmentId,
        risk_score: 55,
        risk_level: 'unknown',
        decision: 'verify',
        confidence: 0.4,
        signals: [],
        courier_summary: {
          freshness: 'missing',
          providers: 0,
          total: 0,
          delivered: 0,
          returned: 0,
          cancelled_before_shipping: 0,
        },
        meta: {
          engine_version: 'test-engine',
          policy_version: 'test-policy',
          degraded: true,
        },
      },
    };
  }
});
