from pathlib import Path
import re


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if text.count(old) != 1:
        raise RuntimeError(f"Expected exactly one {label} block, found {text.count(old)}")
    return text.replace(old, new)


index_path = Path('apps/api/src/index.ts')
index = index_path.read_text(encoding='utf-8')
index = replace_once(
    index,
    '  save(record: StoredAssessment): Promise<void>;',
    '  save(record: StoredAssessment): Promise<StoredAssessment>;',
    'assessment repository interface',
)
index = replace_once(
    index,
    """    await dependencies.assessments.save({
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
    return context.json(response, 201);""",
    """    const stored = await dependencies.assessments.save({
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
    );""",
    'assessment API save',
)
index = replace_once(
    index,
    """  async save(record: StoredAssessment): Promise<void> {
    this.byId.set(record.response.assessment_id, record);
    this.byIdempotency.set(
      `${record.identity.organizationId}:${record.identity.storeId}:${record.idempotencyKey}`,
      record,
    );
  }""",
    """  async save(record: StoredAssessment): Promise<StoredAssessment> {
    const key = `${record.identity.organizationId}:${record.identity.storeId}:${record.idempotencyKey}`;
    const existing = this.byIdempotency.get(key);
    if (existing) return existing;
    this.byId.set(record.response.assessment_id, record);
    this.byIdempotency.set(key, record);
    return record;
  }""",
    'memory assessment save',
)
index_path.write_text(index, encoding='utf-8')

postgres_path = Path('apps/api/src/postgres.ts')
postgres = postgres_path.read_text(encoding='utf-8')
assessment_pattern = re.compile(
    r"  async save\(record: StoredAssessment\): Promise<void> \{.*?\n  \}\n\}\n\nexport class PostgresOutcomeRepository",
    re.DOTALL,
)
assessment_replacement = """  async save(record: StoredAssessment): Promise<StoredAssessment> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      const inserted = await client.query<{ id: string }>(
        `
          insert into risk_assessments (
            id, organization_id, store_id, api_key_id, external_order_id,
            idempotency_key, phone_hash, order_snapshot, score, confidence,
            risk_level, decision, engine_version, policy_version, degraded
          ) values (
            $1, $2, $3, $4, $5,
            $6, $7, $8::jsonb, $9, $10,
            $11, $12, $13, $14, $15
          )
          on conflict (organization_id, store_id, idempotency_key) do nothing
          returning id
        `,
        [
          record.response.assessment_id,
          record.identity.organizationId,
          record.identity.storeId,
          record.identity.apiKeyId,
          record.request.external_order_id ?? null,
          record.idempotencyKey,
          record.phoneHash,
          JSON.stringify({ request: record.request, response: record.response }),
          record.response.risk_score,
          record.response.confidence,
          record.response.risk_level,
          record.response.decision,
          record.response.meta?.engine_version ?? 'unknown',
          record.response.meta?.policy_version ?? 'unknown',
          record.response.meta?.degraded ?? true,
        ],
      );
      if (!inserted.rows[0]) {
        const existing = await client.query<AssessmentRow>(
          `
            select id, organization_id, store_id, api_key_id, idempotency_key, phone_hash, order_snapshot
            from risk_assessments
            where organization_id = $1 and store_id = $2 and idempotency_key = $3
            limit 1
          `,
          [record.identity.organizationId, record.identity.storeId, record.idempotencyKey],
        );
        const row = existing.rows[0];
        if (!row) throw new Error('Assessment idempotency conflict could not be resolved');
        await client.query('commit');
        return parseAssessmentRow(row);
      }
      for (const signal of record.response.signals) {
        await client.query(
          `
            insert into risk_signals (
              id, assessment_id, code, category, score, confidence, description
            ) values ($1, $2, $3, $4, $5, $6, $7)
            on conflict do nothing
          `,
          [
            `sig_${randomUUID()}`,
            record.response.assessment_id,
            signal.code,
            signal.category,
            signal.score,
            signal.confidence ?? null,
            signal.description,
          ],
        );
      }
      await client.query('commit');
      return record;
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export class PostgresOutcomeRepository"""
postgres, assessment_count = assessment_pattern.subn(assessment_replacement, postgres)
if assessment_count != 1:
    raise RuntimeError(f'Expected one PostgreSQL assessment save block, found {assessment_count}')

outcome_pattern = re.compile(
    r"export class PostgresOutcomeRepository implements OutcomeRepository \{.*?\n\}\n\nexport class PostgresOperationIdempotencyStore",
    re.DOTALL,
)
outcome_replacement = """export class PostgresOutcomeRepository implements OutcomeRepository {
  constructor(private readonly pool: Pool) {}

  async save(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
    outcome: OrderOutcomeInput;
  }): Promise<{ outcomeId: string; replay: boolean }> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      let phoneHash: string | null = null;
      if (input.outcome.assessment_id) {
        const assessment = await client.query<{ phone_hash: string }>(
          `
            select phone_hash from risk_assessments
            where id = $1 and organization_id = $2 and store_id = $3
            limit 1
          `,
          [input.outcome.assessment_id, input.organizationId, input.storeId],
        );
        phoneHash = assessment.rows[0]?.phone_hash ?? null;
      }

      const outcomeId = `out_${randomUUID()}`;
      const inserted = await client.query<{ id: string }>(
        `
          insert into order_outcomes (
            id, organization_id, store_id, external_order_id, idempotency_key,
            assessment_id, phone_hash, outcome, provider, reason, source, occurred_at
          ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'api', $11)
          on conflict (organization_id, store_id, idempotency_key) do nothing
          returning id
        `,
        [
          outcomeId,
          input.organizationId,
          input.storeId,
          input.outcome.external_order_id,
          input.idempotencyKey,
          input.outcome.assessment_id ?? null,
          phoneHash,
          input.outcome.outcome,
          input.outcome.provider ?? null,
          input.outcome.reason ?? null,
          input.outcome.occurred_at,
        ],
      );
      const insertedRow = inserted.rows[0];
      if (insertedRow) {
        await client.query('commit');
        return { outcomeId: insertedRow.id, replay: false };
      }

      const existing = await client.query<{ id: string }>(
        `
          select id from order_outcomes
          where organization_id = $1 and store_id = $2 and idempotency_key = $3
          limit 1
        `,
        [input.organizationId, input.storeId, input.idempotencyKey],
      );
      const existingRow = existing.rows[0];
      if (!existingRow) throw new Error('Outcome idempotency conflict could not be resolved');
      await client.query('commit');
      return { outcomeId: existingRow.id, replay: true };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export class PostgresOperationIdempotencyStore"""
postgres, outcome_count = outcome_pattern.subn(outcome_replacement, postgres)
if outcome_count != 1:
    raise RuntimeError(f'Expected one PostgreSQL outcome repository block, found {outcome_count}')
postgres_path.write_text(postgres, encoding='utf-8')

test_path = Path('apps/api/src/postgres-concurrency.test.ts')
test_path.write_text(
    """import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { UsageLimitError } from '@ozzyl/billing';
import type { StoredAssessment } from './index.js';
import {
  PostgresAssessmentRepository,
  PostgresOperationIdempotencyStore,
  PostgresOutcomeRepository,
  PostgresUsageLedger,
} from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL concurrency and idempotency', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 12 });
  const suffix = randomUUID();
  const organizationId = `org_concurrency_${suffix}`;
  const storeId = `sto_concurrency_${suffix}`;
  const otherOrganizationId = `org_concurrency_other_${suffix}`;
  const otherStoreId = `sto_concurrency_other_${suffix}`;
  const apiKeyId = `key_concurrency_${suffix}`;

  beforeAll(async () => {
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `insert into organizations (id, name, slug, plan_id) values ($1, 'Concurrency Merchant', $2, 'plan_free')`,
        [organizationId, `concurrency-${suffix}`],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom')`,
        [storeId, organizationId],
      );
      await client.query(
        `insert into organizations (id, name, slug, plan_id) values ($1, 'Other Merchant', $2, 'plan_free')`,
        [otherOrganizationId, `concurrency-other-${suffix}`],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Other', 'custom')`,
        [otherStoreId, otherOrganizationId],
      );
      await client.query(
        `
          insert into api_keys (
            id, organization_id, store_id, environment, key_hash, key_prefix, name, scopes
          ) values ($1, $2, $3, 'test', $4, 'ozg_test_concurrency', 'Concurrency test', $5::jsonb)
        `,
        [apiKeyId, organizationId, storeId, `hash_${suffix}`, JSON.stringify(['*'])],
      );
      await client.query('commit');
    } catch (error) {
      await client.query('rollback');
      throw error;
    } finally {
      client.release();
    }
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationId, otherOrganizationId],
    ]);
    await pool.end();
  });

  it('serializes duplicate usage reservations into one charge and replay responses', async () => {
    const ledger = new PostgresUsageLedger(pool);
    const period = `duplicate-${suffix}`;
    const reservations = await Promise.all(
      Array.from({ length: 6 }, () =>
        ledger.reserve({
          organizationId,
          period,
          requestId: `usage-duplicate-${suffix}`,
          units: 1,
          plan: 'free',
        }),
      ),
    );

    expect(reservations.filter((reservation) => !reservation.replay)).toHaveLength(1);
    expect(reservations.filter((reservation) => reservation.replay)).toHaveLength(5);
    expect(reservations.every((reservation) => reservation.used === 1)).toBe(true);
    const stored = await pool.query<{ count: number; used: number }>(
      `
        select count(*)::int as count, coalesce(sum(units), 0)::int as used
        from usage_events where organization_id = $1 and period = $2
      `,
      [organizationId, period],
    );
    expect(stored.rows[0]).toEqual({ count: 1, used: 1 });
  });

  it('prevents concurrent reservations from exceeding the plan limit', async () => {
    const ledger = new PostgresUsageLedger(pool);
    const period = `limit-${suffix}`;
    await pool.query(
      `
        insert into usage_events (id, organization_id, event_type, units, request_id, period)
        values ($1, $2, 'risk_assessment', 99, $3, $4)
      `,
      [`use_seed_${suffix}`, organizationId, `usage-seed-${suffix}`, period],
    );

    const results = await Promise.allSettled([
      ledger.reserve({
        organizationId,
        period,
        requestId: `usage-limit-a-${suffix}`,
        units: 1,
        plan: 'free',
      }),
      ledger.reserve({
        organizationId,
        period,
        requestId: `usage-limit-b-${suffix}`,
        units: 1,
        plan: 'free',
      }),
    ]);
    expect(results.filter((result) => result.status === 'fulfilled')).toHaveLength(1);
    const rejected = results.find((result) => result.status === 'rejected');
    expect(rejected?.status).toBe('rejected');
    if (rejected?.status === 'rejected') expect(rejected.reason).toBeInstanceOf(UsageLimitError);

    const stored = await pool.query<{ used: number }>(
      `
        select coalesce(sum(units), 0)::int as used
        from usage_events where organization_id = $1 and period = $2
      `,
      [organizationId, period],
    );
    expect(stored.rows[0]?.used).toBe(100);
  });

  it('returns the persisted assessment for concurrent idempotent saves', async () => {
    const repository = new PostgresAssessmentRepository(pool);
    const idempotencyKey = `assessment-race-${suffix}`;
    const firstRecord = assessmentRecord(`ras_first_${suffix}`, idempotencyKey);
    const secondRecord = assessmentRecord(`ras_second_${suffix}`, idempotencyKey);
    const [first, second] = await Promise.all([
      repository.save(firstRecord),
      repository.save(secondRecord),
    ]);

    expect(first.response.assessment_id).toBe(second.response.assessment_id);
    expect([firstRecord.response.assessment_id, secondRecord.response.assessment_id]).toContain(
      first.response.assessment_id,
    );
    const stored = await pool.query<{ assessments: number; signals: number }>(
      `
        select
          count(distinct ra.id)::int as assessments,
          count(rs.id)::int as signals
        from risk_assessments ra
        left join risk_signals rs on rs.assessment_id = ra.id
        where ra.organization_id = $1 and ra.store_id = $2 and ra.idempotency_key = $3
      `,
      [organizationId, storeId, idempotencyKey],
    );
    expect(stored.rows[0]).toEqual({ assessments: 1, signals: 1 });
    await expect(
      repository.findByIdempotency({
        organizationId: otherOrganizationId,
        storeId: otherStoreId,
        idempotencyKey,
      }),
    ).resolves.toBeNull();
  });

  it('resolves concurrent outcome writes as one insert and one replay', async () => {
    const repository = new PostgresOutcomeRepository(pool);
    const input = {
      organizationId,
      storeId,
      idempotencyKey: `outcome-race-${suffix}`,
      outcome: {
        external_order_id: `ORDER-${suffix}`,
        outcome: 'delivered' as const,
        occurred_at: '2026-07-16T18:00:00.000Z',
      },
    };
    const results = await Promise.all([repository.save(input), repository.save(input)]);

    expect(results[0]?.outcomeId).toBe(results[1]?.outcomeId);
    expect(results.filter((result) => result.replay)).toHaveLength(1);
    expect(results.filter((result) => !result.replay)).toHaveLength(1);
    const stored = await pool.query<{ count: number }>(
      `
        select count(*)::int as count from order_outcomes
        where organization_id = $1 and store_id = $2 and idempotency_key = $3
      `,
      [organizationId, storeId, input.idempotencyKey],
    );
    expect(stored.rows[0]?.count).toBe(1);
  });

  it('keeps operation idempotency values isolated by organization and store', async () => {
    const repository = new PostgresOperationIdempotencyStore(pool);
    const idempotencyKey = `shared-${suffix}`;
    const primaryKey = `${organizationId}:${storeId}:otp-send:${idempotencyKey}`;
    const otherKey = `${otherOrganizationId}:${otherStoreId}:otp-send:${idempotencyKey}`;
    await Promise.all([
      repository.set(primaryKey, { tenant: 'primary' }),
      repository.set(otherKey, { tenant: 'other' }),
    ]);

    await expect(repository.get(primaryKey)).resolves.toEqual({ tenant: 'primary' });
    await expect(repository.get(otherKey)).resolves.toEqual({ tenant: 'other' });
    const stored = await pool.query<{ count: number }>(
      `select count(*)::int as count from idempotency_records where idempotency_key = $1`,
      [idempotencyKey],
    );
    expect(stored.rows[0]?.count).toBe(2);
  });

  function assessmentRecord(assessmentId: string, idempotencyKey: string): StoredAssessment {
    return {
      identity: { apiKeyId, organizationId, storeId },
      idempotencyKey,
      phoneHash: `phone_${suffix}`,
      request: {
        external_order_id: `ORDER-${suffix}`,
        phone: '01712345678',
        order_total: 1500,
        payment_method: 'cod',
      },
      response: {
        success: true,
        assessment_id: assessmentId,
        risk_score: 55,
        risk_level: 'moderate',
        decision: 'review',
        confidence: 0.5,
        signals: [
          {
            code: 'concurrency_fixture',
            category: 'order',
            score: 5,
            confidence: 0.5,
            description: 'Concurrency integration fixture',
          },
        ],
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
          degraded: false,
          response_ms: 1,
        },
      },
    };
  }
});
""",
    encoding='utf-8',
)
