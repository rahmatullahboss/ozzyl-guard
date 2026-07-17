import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import type { StoredAssessment } from './index.js';
import { PostgresAssessmentRepository } from './postgres.js';
import {
  PostgresShadowComparisonRepository,
  ShadowComparisonPersistenceError,
} from './postgres-shadow-comparisons.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL native shadow comparisons', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 8 });
  const suffix = randomUUID();
  const organizationId = `org_shadow_${suffix}`;
  const storeId = `sto_shadow_${suffix}`;
  const otherStoreId = `sto_shadow_other_${suffix}`;
  const apiKeyId = `key_shadow_${suffix}`;
  const assessmentId = `ras_shadow_${suffix}`;

  beforeAll(async () => {
    await pool.query(
      `insert into organizations (id, name, slug, plan_id) values ($1, 'Shadow Merchant', $2, 'plan_free')`,
      [organizationId, `shadow-${suffix}`],
    );
    await pool.query(
      `
        insert into stores (id, organization_id, name, platform)
        values ($1, $3, 'Primary', 'multi-store-saas'),
               ($2, $3, 'Other', 'multi-store-saas')
      `,
      [storeId, otherStoreId, organizationId],
    );
    await pool.query(
      `
        insert into api_keys (
          id, organization_id, store_id, environment, key_hash, key_prefix, name, scopes
        ) values ($1, $2, $3, 'test', $4, 'ozg_test_shadow', 'Shadow test', $5::jsonb)
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
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = $1', [organizationId]);
    await pool.end();
  });

  it('serializes concurrent duplicate comparison writes into one immutable row', async () => {
    const repository = new PostgresShadowComparisonRepository(pool);
    const input = comparisonInput(`shadow-idempotency-${suffix}`);
    const results = await Promise.all([
      repository.save(input),
      repository.save(input),
      repository.save(input),
    ]);

    expect(new Set(results.map((result) => result.comparisonId)).size).toBe(1);
    expect(results.filter((result) => !result.replay)).toHaveLength(1);
    expect(results.filter((result) => result.replay)).toHaveLength(2);

    const stored = await pool.query<{
      count: number;
      legacy_decision: string;
      guard_decision: string;
      guard_score: number;
      decision_changed: boolean;
      score_delta: number;
    }>(
      `
        select
          count(*)::int as count,
          min(legacy_decision) as legacy_decision,
          min(guard_decision) as guard_decision,
          min(guard_score)::int as guard_score,
          bool_or(decision_changed) as decision_changed,
          min(score_delta)::int as score_delta
        from integration_shadow_comparisons
        where organization_id = $1 and store_id = $2 and idempotency_key = $3
      `,
      [organizationId, storeId, input.idempotencyKey],
    );
    expect(stored.rows[0]).toEqual({
      count: 1,
      legacy_decision: 'allow',
      guard_decision: 'verify',
      guard_score: 55,
      decision_changed: true,
      score_delta: 35,
    });
  });

  it('rejects idempotency-key reuse with different rollout evidence', async () => {
    const repository = new PostgresShadowComparisonRepository(pool);
    const input = comparisonInput(`shadow-conflict-${suffix}`);
    await repository.save(input);
    await expect(
      repository.save({
        ...input,
        comparison: { ...input.comparison, legacy_score: 21 },
      }),
    ).rejects.toMatchObject({
      code: 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT',
    });
  });

  it('fails closed when the assessment/store relationship is wrong', async () => {
    const repository = new PostgresShadowComparisonRepository(pool);
    const input = comparisonInput(`shadow-scope-${suffix}`);
    const write = repository.save({ ...input, storeId: otherStoreId });
    await expect(write).rejects.toBeInstanceOf(ShadowComparisonPersistenceError);
    await expect(write).rejects.toMatchObject({ code: 'SHADOW_ASSESSMENT_NOT_FOUND' });
  });

  function assessmentRecord(): StoredAssessment {
    return {
      identity: { apiKeyId, organizationId, storeId },
      idempotencyKey: `assessment-shadow-${suffix}`,
      phoneHash: `phone-shadow-${suffix}`,
      request: {
        external_order_id: `ORDER-${suffix}`,
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

  function comparisonInput(idempotencyKey: string) {
    return {
      organizationId,
      storeId,
      apiKeyId,
      idempotencyKey,
      comparison: {
        external_order_id: `ORDER-${suffix}`,
        assessment_id: assessmentId,
        legacy_score: 20,
        legacy_decision: 'allow',
        rollout_version: 'pilot-v1',
        sample_bucket: 100,
        sample_rate_bps: 1000,
        evaluated_at: '2026-07-18T08:00:00.000Z',
      },
      guardAssessment: assessmentRecord().response,
    };
  }
});
