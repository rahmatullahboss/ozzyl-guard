import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { hashOpaqueSecret } from '@ozzyl/authentication';
import type { StoredAssessment } from './index.js';
import {
  PostgresApiKeyResolver,
  PostgresAssessmentFeatureProvider,
  PostgresAssessmentRepository,
  PostgresOutcomeRepository,
  TenantScopeMismatchError,
} from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL authoritative tenant scope', () => {
  const pool = new Pool({ connectionString: databaseUrl });
  const suffix = randomUUID();
  const organizationA = `org_scope_a_${suffix}`;
  const organizationB = `org_scope_b_${suffix}`;
  const storeA = `sto_scope_a_${suffix}`;
  const storeB = `sto_scope_b_${suffix}`;
  const rawKey = `ozg_test_scope_${suffix}`;
  const pepper = 'scope-pepper-fixture';

  beforeAll(async () => {
    await pool.query(
      `
        insert into organizations (id, name, slug, plan_id)
        values ($1, 'Scope A', $2, 'plan_free'), ($3, 'Scope B', $4, 'plan_free')
      `,
      [organizationA, `scope-a-${suffix}`, organizationB, `scope-b-${suffix}`],
    );
    await pool.query(
      `
        insert into stores (id, organization_id, name, platform)
        values ($1, $2, 'Scope Store A', 'custom'), ($3, $4, 'Scope Store B', 'custom')
      `,
      [storeA, organizationA, storeB, organizationB],
    );
    await pool.query(
      `
        insert into api_keys (
          id, organization_id, store_id, environment, key_hash, key_prefix, name, scopes
        ) values ($1, $2, $3, 'test', $4, 'ozg_test_scope', 'Mismatched scope', $5::jsonb)
      `,
      [
        `key_scope_${suffix}`,
        organizationA,
        storeB,
        hashOpaqueSecret(rawKey, pepper),
        JSON.stringify(['risk:read', 'risk:write']),
      ],
    );
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationA, organizationB],
    ]);
    await pool.end();
  });

  it('rejects an API key whose organization and store rows do not belong together', async () => {
    const resolver = new PostgresApiKeyResolver(pool, pepper);
    await expect(resolver.resolve(rawKey)).resolves.toBeNull();
  });

  it('fails feature assembly closed before reading another tenant store', async () => {
    const provider = new PostgresAssessmentFeatureProvider(pool);
    await expect(
      provider.load({
        identity: {
          apiKeyId: `key_scope_${suffix}`,
          organizationId: organizationA,
          storeId: storeB,
          environment: 'test',
          plan: 'free',
          scopes: new Set(['risk:write']),
        },
        phone: '+8801712345678',
        phoneHash: `phone_scope_${suffix}`,
        request: {
          phone: '01712345678',
          order_total: 1200,
          payment_method: 'cod',
        },
      }),
    ).rejects.toBeInstanceOf(TenantScopeMismatchError);
  });

  it('rejects mismatched assessment and outcome writes', async () => {
    const assessments = new PostgresAssessmentRepository(pool);
    const outcomes = new PostgresOutcomeRepository(pool);
    const assessment = assessmentRecord();
    await expect(assessments.save(assessment)).rejects.toBeInstanceOf(TenantScopeMismatchError);
    await expect(
      outcomes.save({
        organizationId: organizationA,
        storeId: storeB,
        idempotencyKey: `outcome_scope_${suffix}`,
        outcome: {
          external_order_id: `ORDER-SCOPE-${suffix}`,
          outcome: 'delivered',
          occurred_at: '2026-07-17T08:00:00.000Z',
        },
      }),
    ).rejects.toBeInstanceOf(TenantScopeMismatchError);
    const stored = await pool.query<{ count: number }>(
      `select count(*)::int as count from risk_assessments where id = $1`,
      [assessment.response.assessment_id],
    );
    expect(stored.rows[0]?.count).toBe(0);
  });

  function assessmentRecord(): StoredAssessment {
    return {
      identity: {
        apiKeyId: `key_scope_${suffix}`,
        organizationId: organizationA,
        storeId: storeB,
      },
      idempotencyKey: `assessment_scope_${suffix}`,
      phoneHash: `phone_scope_${suffix}`,
      request: {
        external_order_id: `ORDER-SCOPE-${suffix}`,
        phone: '01712345678',
        order_total: 1200,
        payment_method: 'cod',
      },
      response: {
        success: true,
        assessment_id: `ras_scope_${suffix}`,
        risk_score: 50,
        risk_level: 'moderate',
        decision: 'review',
        confidence: 0.5,
        signals: [],
        courier_summary: {
          freshness: 'missing',
          providers: 0,
          total: 0,
          delivered: 0,
          returned: 0,
          cancelled_before_shipping: 0,
        },
        recommended_actions: ['manual_review'],
        meta: {
          engine_version: 'test-engine',
          policy_version: 'test-policy',
          degraded: true,
          response_ms: 1,
        },
      },
    };
  }
});
