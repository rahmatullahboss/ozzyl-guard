import { createHash, randomUUID } from 'node:crypto';
import type { Pool, PoolClient } from 'pg';
import type {
  NativeShadowAttemptInput,
  NativeShadowPilotReport,
  NativeShadowRolloutMode,
} from '@ozzyl/shared-types';
import type {
  NativeShadowAttemptRepository,
  NativeShadowRolloutAdministrationRepository,
  NativeShadowRolloutRepository,
} from './index.js';

export type NativeShadowPilotErrorCode =
  | 'TENANT_SCOPE_MISMATCH'
  | 'NATIVE_SHADOW_NOT_OPTED_IN'
  | 'NATIVE_SHADOW_ROLLOUT_MISMATCH'
  | 'NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH'
  | 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT';

export class NativeShadowPilotPersistenceError extends Error {
  constructor(readonly code: NativeShadowPilotErrorCode) {
    super(code);
    this.name = 'NativeShadowPilotPersistenceError';
  }
}

export interface NativeShadowRolloutRecord {
  organizationId: string;
  storeId: string;
  integration: 'multi-store-saas';
  mode: NativeShadowRolloutMode;
  rolloutVersion: string;
  sampleRateBps: number;
  samplingKey: string;
}

interface RolloutRow {
  organization_id: string;
  store_id: string;
  mode: NativeShadowRolloutMode;
  rollout_version: string;
  sample_rate_bps: number;
}

interface ExistingAttemptRow {
  id: string;
  external_order_id: string;
  rollout_version: string;
  sample_bucket: number;
  sample_rate_bps: number;
  status: NativeShadowAttemptInput['status'];
  failure_code: string | null;
  assessment_id: string | null;
  comparison_id: string | null;
  evaluated_at: Date | string;
}

export class PostgresNativeShadowRolloutRepository
  implements NativeShadowRolloutRepository, NativeShadowRolloutAdministrationRepository
{
  constructor(private readonly pool: Pool) {}

  async load(input: {
    organizationId: string;
    storeId: string;
  }): Promise<NativeShadowRolloutRecord | null> {
    return loadRollout(this.pool, input);
  }

  async setForStore(input: {
    userId: string;
    organizationId: string;
    storeId: string;
    mode: NativeShadowRolloutMode;
    rolloutVersion: string;
    sampleRateBps: number;
  }): Promise<NativeShadowRolloutRecord | null> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      const authorized = await client.query<{ role: string }>(
        `
          select om.role
          from organization_members om
          join organizations o on o.id = om.organization_id and o.status = 'active'
          join stores s on s.organization_id = o.id and s.status = 'active'
          where om.user_id = $1 and om.organization_id = $2 and s.id = $3
          limit 1
        `,
        [input.userId, input.organizationId, input.storeId],
      );
      const role = authorized.rows[0]?.role;
      if (role !== 'owner' && role !== 'admin') {
        await client.query('rollback');
        return null;
      }
      await client.query(
        `
          insert into integration_shadow_rollouts (
            organization_id, store_id, integration, mode, rollout_version,
            sample_rate_bps, updated_by_user_id
          ) values ($1, $2, 'multi-store-saas', $3, $4, $5, $6)
          on conflict (organization_id, store_id, integration) do update
          set mode = excluded.mode,
              rollout_version = excluded.rollout_version,
              sample_rate_bps = excluded.sample_rate_bps,
              updated_by_user_id = excluded.updated_by_user_id,
              updated_at = now()
        `,
        [
          input.organizationId,
          input.storeId,
          input.mode,
          input.rolloutVersion,
          input.sampleRateBps,
          input.userId,
        ],
      );
      const rollout = await loadRollout(client, input);
      await client.query('commit');
      return rollout;
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export class PostgresNativeShadowAttemptRepository implements NativeShadowAttemptRepository {
  constructor(private readonly pool: Pool) {}

  async save(input: {
    organizationId: string;
    storeId: string;
    apiKeyId: string;
    idempotencyKey: string;
    attempt: NativeShadowAttemptInput;
  }): Promise<{ attemptId: string; replay: boolean }> {
    validateAttemptShape(input.attempt);
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.storeId}:native-shadow-attempt:${input.idempotencyKey}`,
      ]);
      const rollout = await loadRollout(client, input);
      if (!rollout) throw new NativeShadowPilotPersistenceError('TENANT_SCOPE_MISMATCH');
      if (rollout.mode !== 'shadow') {
        throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_NOT_OPTED_IN');
      }
      if (
        rollout.rolloutVersion !== input.attempt.rollout_version ||
        rollout.sampleRateBps !== input.attempt.sample_rate_bps
      ) {
        throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ROLLOUT_MISMATCH');
      }
      await validateAttemptReferences(client, input);

      const attemptId = `nsa_${randomUUID()}`;
      const inserted = await client.query<{ id: string }>(
        `
          insert into integration_shadow_attempts (
            id, organization_id, store_id, api_key_id, integration,
            external_order_id, idempotency_key, rollout_version,
            sample_bucket, sample_rate_bps, status, failure_code,
            assessment_id, comparison_id, evaluated_at
          ) values (
            $1, $2, $3, $4, 'multi-store-saas',
            $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
          )
          on conflict (organization_id, store_id, integration, idempotency_key) do nothing
          returning id
        `,
        [
          attemptId,
          input.organizationId,
          input.storeId,
          input.apiKeyId,
          input.attempt.external_order_id,
          input.idempotencyKey,
          input.attempt.rollout_version,
          input.attempt.sample_bucket,
          input.attempt.sample_rate_bps,
          input.attempt.status,
          input.attempt.failure_code ?? null,
          input.attempt.assessment_id ?? null,
          input.attempt.comparison_id ?? null,
          input.attempt.evaluated_at,
        ],
      );
      if (inserted.rows[0]) {
        await client.query('commit');
        return { attemptId, replay: false };
      }

      const existingResult = await client.query<ExistingAttemptRow>(
        `
          select id, external_order_id, rollout_version, sample_bucket, sample_rate_bps,
                 status, failure_code, assessment_id, comparison_id, evaluated_at
          from integration_shadow_attempts
          where organization_id = $1 and store_id = $2
            and integration = 'multi-store-saas' and idempotency_key = $3
          limit 1
        `,
        [input.organizationId, input.storeId, input.idempotencyKey],
      );
      const existing = existingResult.rows[0];
      if (!existing || !sameAttempt(existing, input.attempt)) {
        throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT');
      }
      await client.query('commit');
      return { attemptId: existing.id, replay: true };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export async function loadStoreNativeShadowPilotReport(
  pool: Pool,
  input: { organizationId: string; storeId: string; now: Date },
): Promise<NativeShadowPilotReport> {
  const rollout = await loadRollout(pool, input);
  if (!rollout) throw new NativeShadowPilotPersistenceError('TENANT_SCOPE_MISMATCH');
  const aggregate = await loadAggregate(pool, {
    where: 'a.organization_id = $1 and a.store_id = $2',
    values: [input.organizationId, input.storeId, input.now],
  });
  return buildReport(rollout, aggregate);
}

export async function loadPlatformNativeShadowPilotReport(
  pool: Pool,
  input: { now: Date },
): Promise<NativeShadowPilotReport & { opted_in_stores: number }> {
  const [aggregate, optedIn] = await Promise.all([
    loadAggregate(pool, { where: 'true', values: [input.now] }),
    pool.query<{ count: number }>(`
      select count(*)::int as count
      from integration_shadow_rollouts r
      join organizations o on o.id = r.organization_id and o.status = 'active'
      join stores s on s.id = r.store_id and s.organization_id = r.organization_id
        and s.status = 'active'
      where r.integration = 'multi-store-saas' and r.mode = 'shadow'
    `),
  ]);
  const optedInStores = optedIn.rows[0]?.count ?? 0;
  return {
    ...buildReport(
      {
        organizationId: 'platform',
        storeId: 'platform',
        integration: 'multi-store-saas',
        mode: optedInStores > 0 ? 'shadow' : 'off',
        rolloutVersion: optedInStores > 0 ? 'mixed' : 'off',
        sampleRateBps: 0,
        samplingKey: 'platform',
      },
      aggregate,
    ),
    opted_in_stores: optedInStores,
  };
}

async function loadRollout(
  database: Pool | PoolClient,
  input: { organizationId: string; storeId: string },
): Promise<NativeShadowRolloutRecord | null> {
  const result = await database.query<RolloutRow>(
    `
      select o.id as organization_id, s.id as store_id,
             coalesce(r.mode, 'off') as mode,
             coalesce(r.rollout_version, 'off') as rollout_version,
             coalesce(r.sample_rate_bps, 0)::int as sample_rate_bps
      from organizations o
      join stores s on s.organization_id = o.id
      left join integration_shadow_rollouts r
        on r.organization_id = o.id and r.store_id = s.id
        and r.integration = 'multi-store-saas'
      where o.id = $1 and s.id = $2 and o.status = 'active' and s.status = 'active'
      limit 1
    `,
    [input.organizationId, input.storeId],
  );
  const row = result.rows[0];
  if (!row) return null;
  return {
    organizationId: row.organization_id,
    storeId: row.store_id,
    integration: 'multi-store-saas',
    mode: row.mode,
    rolloutVersion: row.rollout_version,
    sampleRateBps: row.sample_rate_bps,
    samplingKey: createHash('sha256')
      .update(`multi-store-saas:${row.organization_id}:${row.store_id}`)
      .digest('hex')
      .slice(0, 48),
  };
}

async function validateAttemptReferences(
  client: PoolClient,
  input: {
    organizationId: string;
    storeId: string;
    attempt: NativeShadowAttemptInput;
  },
): Promise<void> {
  if (input.attempt.status === 'assessment_failed') return;
  const assessment = await client.query<{ external_order_id: string | null }>(
    `
      select external_order_id from risk_assessments
      where id = $1 and organization_id = $2 and store_id = $3
      limit 1
    `,
    [input.attempt.assessment_id, input.organizationId, input.storeId],
  );
  if (assessment.rows[0]?.external_order_id !== input.attempt.external_order_id) {
    throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH');
  }
  if (input.attempt.status === 'comparison_succeeded') {
    const comparison = await client.query<{ external_order_id: string; assessment_id: string }>(
      `
        select external_order_id, assessment_id from integration_shadow_comparisons
        where id = $1 and organization_id = $2 and store_id = $3
          and integration = 'multi-store-saas'
        limit 1
      `,
      [input.attempt.comparison_id, input.organizationId, input.storeId],
    );
    const row = comparison.rows[0];
    if (
      row?.external_order_id !== input.attempt.external_order_id ||
      row.assessment_id !== input.attempt.assessment_id
    ) {
      throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH');
    }
  }
}

function validateAttemptShape(attempt: NativeShadowAttemptInput): void {
  const valid =
    (attempt.status === 'comparison_succeeded' &&
      !attempt.failure_code &&
      Boolean(attempt.assessment_id) &&
      Boolean(attempt.comparison_id)) ||
    (attempt.status === 'assessment_failed' &&
      (attempt.failure_code === 'GUARD_ASSESSMENT_FAILED' ||
        attempt.failure_code === 'GUARD_TIMEOUT') &&
      !attempt.assessment_id &&
      !attempt.comparison_id) ||
    (attempt.status === 'comparison_persist_failed' &&
      attempt.failure_code === 'COMPARISON_PERSIST_FAILED' &&
      Boolean(attempt.assessment_id) &&
      !attempt.comparison_id);
  if (!valid) {
    throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH');
  }
}

function sameAttempt(existing: ExistingAttemptRow, attempt: NativeShadowAttemptInput): boolean {
  return (
    existing.external_order_id === attempt.external_order_id &&
    existing.rollout_version === attempt.rollout_version &&
    existing.sample_bucket === attempt.sample_bucket &&
    existing.sample_rate_bps === attempt.sample_rate_bps &&
    existing.status === attempt.status &&
    existing.failure_code === (attempt.failure_code ?? null) &&
    existing.assessment_id === (attempt.assessment_id ?? null) &&
    existing.comparison_id === (attempt.comparison_id ?? null) &&
    new Date(existing.evaluated_at).toISOString() === attempt.evaluated_at
  );
}

interface AggregateRow {
  sampled_orders: number;
  successful_comparisons: number;
  assessment_failures: number;
  persistence_failures: number;
  disagreements: number;
  minimum_delta: number | null;
  maximum_delta: number | null;
  average_delta: number | string | null;
  lower_count: number;
  equal_count: number;
  higher_count: number;
}

async function loadAggregate(
  pool: Pool,
  input: { where: string; values: unknown[] },
): Promise<AggregateRow> {
  const nowIndex = input.values.length;
  const result = await pool.query<AggregateRow>(
    `
      select
        count(*)::int as sampled_orders,
        count(*) filter (where a.status = 'comparison_succeeded')::int as successful_comparisons,
        count(*) filter (where a.status = 'assessment_failed')::int as assessment_failures,
        count(*) filter (where a.status = 'comparison_persist_failed')::int as persistence_failures,
        count(*) filter (
          where a.status = 'comparison_succeeded' and c.decision_changed
        )::int as disagreements,
        min(c.score_delta)::int as minimum_delta,
        max(c.score_delta)::int as maximum_delta,
        round(avg(c.score_delta)::numeric, 2) as average_delta,
        count(*) filter (where c.score_delta < 0)::int as lower_count,
        count(*) filter (where c.score_delta = 0)::int as equal_count,
        count(*) filter (where c.score_delta > 0)::int as higher_count
      from integration_shadow_attempts a
      left join integration_shadow_comparisons c
        on c.id = a.comparison_id
        and c.organization_id = a.organization_id
        and c.store_id = a.store_id
      where ${input.where}
        and a.integration = 'multi-store-saas'
        and a.created_at >= $${nowIndex}::timestamptz - interval '30 days'
    `,
    input.values,
  );
  return (
    result.rows[0] ?? {
      sampled_orders: 0,
      successful_comparisons: 0,
      assessment_failures: 0,
      persistence_failures: 0,
      disagreements: 0,
      minimum_delta: null,
      maximum_delta: null,
      average_delta: null,
      lower_count: 0,
      equal_count: 0,
      higher_count: 0,
    }
  );
}

function buildReport(
  rollout: NativeShadowRolloutRecord,
  aggregate: AggregateRow,
): NativeShadowPilotReport {
  return {
    mode: rollout.mode,
    rollout_version: rollout.rolloutVersion,
    sample_rate_bps: rollout.sampleRateBps,
    sampled_orders: aggregate.sampled_orders,
    successful_comparisons: aggregate.successful_comparisons,
    assessment_failures: aggregate.assessment_failures,
    persistence_failures: aggregate.persistence_failures,
    decision_disagreement_rate:
      aggregate.successful_comparisons === 0
        ? null
        : Number((aggregate.disagreements / aggregate.successful_comparisons).toFixed(4)),
    score_delta: {
      minimum: aggregate.minimum_delta,
      maximum: aggregate.maximum_delta,
      average: aggregate.average_delta === null ? null : Number(aggregate.average_delta),
      lower: aggregate.lower_count,
      equal: aggregate.equal_count,
      higher: aggregate.higher_count,
    },
  };
}
