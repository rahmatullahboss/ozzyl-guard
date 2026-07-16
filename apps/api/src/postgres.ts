import { randomUUID } from 'node:crypto';
import type { Pool, PoolClient } from 'pg';
import { hashOpaqueSecret } from '@ozzyl/authentication';
import {
  PLANS,
  UsageLimitError,
  type PlanCode,
  type UsageLedger,
  type UsageReservation,
} from '@ozzyl/billing';
import {
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type OrderOutcomeInput,
} from '@ozzyl/shared-types';
import type {
  ApiKeyIdentity,
  ApiKeyResolver,
  AssessmentFeatureProvider,
  AssessmentRepository,
  CourierRefreshQueue,
  OperationIdempotencyStore,
  OutcomeRepository,
  StoredAssessment,
} from './index.js';

export class PostgresApiKeyResolver implements ApiKeyResolver {
  constructor(
    private readonly pool: Pool,
    private readonly pepper: string,
  ) {}

  async resolve(rawApiKey: string): Promise<ApiKeyIdentity | null> {
    const keyHash = hashOpaqueSecret(rawApiKey, this.pepper);
    const result = await this.pool.query<{
      id: string;
      organization_id: string;
      store_id: string | null;
      environment: string;
      scopes: unknown;
      plan_code: string | null;
    }>(
      `
        select
          ak.id,
          ak.organization_id,
          ak.store_id,
          ak.environment,
          ak.scopes,
          p.code as plan_code
        from api_keys ak
        join organizations o on o.id = ak.organization_id and o.status = 'active'
        join stores s on s.id = ak.store_id and s.status = 'active'
        left join plans p on p.id = o.plan_id
        where ak.key_hash = $1
          and ak.revoked_at is null
          and (ak.expires_at is null or ak.expires_at > now())
        limit 1
      `,
      [keyHash],
    );
    const row = result.rows[0];
    if (!row?.store_id || (row.environment !== 'test' && row.environment !== 'live')) return null;
    const plan = isPlanCode(row.plan_code) ? row.plan_code : 'free';
    const scopes = Array.isArray(row.scopes)
      ? new Set(row.scopes.filter((scope): scope is string => typeof scope === 'string'))
      : new Set<string>();
    void this.pool
      .query('update api_keys set last_used_at = now(), updated_at = now() where id = $1', [row.id])
      .catch(() => undefined);
    return {
      apiKeyId: row.id,
      organizationId: row.organization_id,
      storeId: row.store_id,
      environment: row.environment,
      plan,
      scopes,
    };
  }
}

export class PostgresUsageLedger implements UsageLedger {
  constructor(private readonly pool: Pool) {}

  async reserve(input: {
    organizationId: string;
    period: string;
    requestId: string;
    units: number;
    plan: PlanCode;
  }): Promise<UsageReservation> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.period}`,
      ]);
      const existing = await client.query<{ units: number }>(
        `
          select units
          from usage_events
          where organization_id = $1
            and event_type = 'risk_assessment'
            and request_id = $2
          limit 1
        `,
        [input.organizationId, input.requestId],
      );
      const used = await currentUsage(client, input.organizationId, input.period);
      const limit = PLANS[input.plan].monthlyAssessments;
      if (existing.rows[0]) {
        await client.query('commit');
        return { requestId: input.requestId, used, limit, replay: true };
      }
      if (limit !== null && used + input.units > limit) {
        throw new UsageLimitError(`Monthly assessment limit of ${limit} exceeded`);
      }
      await client.query(
        `
          insert into usage_events (
            id, organization_id, event_type, units, request_id, period
          ) values ($1, $2, 'risk_assessment', $3, $4, $5)
        `,
        [`use_${randomUUID()}`, input.organizationId, input.units, input.requestId, input.period],
      );
      await client.query('commit');
      return {
        requestId: input.requestId,
        used: used + input.units,
        limit,
        replay: false,
      };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export class PostgresAssessmentRepository implements AssessmentRepository {
  constructor(private readonly pool: Pool) {}

  async findByIdempotency(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
  }): Promise<StoredAssessment | null> {
    const result = await this.pool.query<AssessmentRow>(
      `
        select id, organization_id, store_id, api_key_id, idempotency_key, phone_hash, order_snapshot
        from risk_assessments
        where organization_id = $1 and store_id = $2 and idempotency_key = $3
        limit 1
      `,
      [input.organizationId, input.storeId, input.idempotencyKey],
    );
    return result.rows[0] ? parseAssessmentRow(result.rows[0]) : null;
  }

  async findById(input: {
    organizationId: string;
    storeId: string;
    assessmentId: string;
  }): Promise<StoredAssessment | null> {
    const result = await this.pool.query<AssessmentRow>(
      `
        select id, organization_id, store_id, api_key_id, idempotency_key, phone_hash, order_snapshot
        from risk_assessments
        where organization_id = $1 and store_id = $2 and id = $3
        limit 1
      `,
      [input.organizationId, input.storeId, input.assessmentId],
    );
    return result.rows[0] ? parseAssessmentRow(result.rows[0]) : null;
  }

  async save(record: StoredAssessment): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query(
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
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export class PostgresOutcomeRepository implements OutcomeRepository {
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
      const existing = await client.query<{ id: string }>(
        `
          select id from order_outcomes
          where organization_id = $1 and store_id = $2 and idempotency_key = $3
          limit 1
        `,
        [input.organizationId, input.storeId, input.idempotencyKey],
      );
      if (existing.rows[0]) {
        await client.query('commit');
        return { outcomeId: existing.rows[0].id, replay: true };
      }

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
      await client.query(
        `
          insert into order_outcomes (
            id, organization_id, store_id, external_order_id, idempotency_key,
            assessment_id, phone_hash, outcome, provider, reason, source, occurred_at
          ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'api', $11)
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
      await client.query('commit');
      return { outcomeId, replay: false };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export class PostgresOperationIdempotencyStore implements OperationIdempotencyStore {
  constructor(
    private readonly pool: Pool,
    private readonly ttlMs = 24 * 60 * 60 * 1_000,
  ) {}

  async get(key: string): Promise<unknown> {
    const scope = parseOperationKey(key);
    const result = await this.pool.query<{ response: unknown }>(
      `
        select response from idempotency_records
        where organization_id = $1 and store_id = $2 and operation = $3
          and idempotency_key = $4 and expires_at > now()
        limit 1
      `,
      [scope.organizationId, scope.storeId, scope.operation, scope.idempotencyKey],
    );
    return result.rows[0]?.response ?? null;
  }

  async set(key: string, value: unknown): Promise<void> {
    const scope = parseOperationKey(key);
    await this.pool.query(
      `
        insert into idempotency_records (
          id, organization_id, store_id, operation, idempotency_key, response, expires_at
        ) values ($1, $2, $3, $4, $5, $6::jsonb, $7)
        on conflict (organization_id, store_id, operation, idempotency_key)
        do update set response = excluded.response, expires_at = excluded.expires_at, updated_at = now()
      `,
      [
        `idem_${randomUUID()}`,
        scope.organizationId,
        scope.storeId,
        scope.operation,
        scope.idempotencyKey,
        JSON.stringify(value),
        new Date(Date.now() + this.ttlMs),
      ],
    );
  }
}

export class CourierConnectionRequiredError extends Error {
  readonly code = 'COURIER_CONNECTION_REQUIRED';
}

export class PostgresCourierRefreshQueue implements CourierRefreshQueue {
  constructor(private readonly pool: Pool) {}

  async enqueue(input: {
    organizationId: string;
    storeId: string;
    phone: string;
    phoneHash: string;
    providers: string[];
    force: boolean;
  }): Promise<{ jobId: string }> {
    const accounts = await this.pool.query<{ id: string; provider: string }>(
      `
        select ca.id, ca.provider
        from courier_accounts ca
        join stores s on s.id = ca.store_id
        where ca.store_id = $1 and s.organization_id = $2
          and ca.provider = any($3::text[])
          and ca.status in ('connected', 'pending', 'expired')
      `,
      [input.storeId, input.organizationId, input.providers],
    );
    if (accounts.rows.length === 0) {
      throw new CourierConnectionRequiredError('No requested courier account is connected');
    }
    const batchId = `cjob_${randomUUID()}`;
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      for (const account of accounts.rows) {
        await client.query(
          `
            insert into courier_jobs (
              id, courier_account_id, job_type, status, scheduled_at, payload
            ) values ($1, $2, 'customer_observation_refresh', 'queued', now(), $3::jsonb)
          `,
          [
            `cj_${randomUUID()}`,
            account.id,
            JSON.stringify({
              batchId,
              organizationId: input.organizationId,
              storeId: input.storeId,
              provider: account.provider,
              phone: input.phone,
              phoneHash: input.phoneHash,
              force: input.force,
            }),
          ],
        );
      }
      await client.query('commit');
      return { jobId: batchId };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export class PostgresAssessmentFeatureProvider implements AssessmentFeatureProvider {
  constructor(private readonly pool: Pool) {}

  async load(input: Parameters<AssessmentFeatureProvider['load']>[0]) {
    const [observationsResult, merchantResult, verificationResult, networkResult, policyResult] =
      await Promise.all([
        this.pool.query<ObservationRow>(
          `
            select distinct on (provider)
              provider, total_orders, delivered_orders, returned_orders,
              cancelled_before_shipping, confidence, expires_at
            from courier_observations
            where store_id = $1 and phone_hash = $2
            order by provider, observed_at desc
          `,
          [input.identity.storeId, input.phoneHash],
        ),
        this.pool.query<{
          delivered: number;
          returned: number;
          cancelled: number;
        }>(
          `
            select
              count(*) filter (where outcome = 'delivered')::int as delivered,
              count(*) filter (where outcome = 'returned')::int as returned,
              count(*) filter (
                where outcome = 'cancelled_before_shipping'
                  and occurred_at > now() - interval '30 days'
              )::int as cancelled
            from order_outcomes
            where store_id = $1 and phone_hash = $2
          `,
          [input.identity.storeId, input.phoneHash],
        ),
        this.pool.query<{ verified: boolean; attempts: number }>(
          `
            select
              exists(
                select 1 from verification_sessions
                where store_id = $1 and phone_hash = $2 and status = 'verified'
                  and verified_at > now() - interval '90 days'
              ) as verified,
              coalesce(sum(oa.attempt_count), 0)::int as attempts
            from verification_sessions vs
            left join otp_attempts oa on oa.verification_session_id = vs.id
            where vs.store_id = $1 and vs.phone_hash = $2
          `,
          [input.identity.storeId, input.phoneHash],
        ),
        this.pool.query<{
          negative: number;
          reporters: number;
          positive: number;
        }>(
          `
            select
              count(*) filter (where oo.outcome = 'returned')::int as negative,
              count(distinct oo.store_id) filter (where oo.outcome = 'returned')::int as reporters,
              count(*) filter (where oo.outcome = 'delivered')::int as positive
            from order_outcomes oo
            join stores s on s.id = oo.store_id
            where s.organization_id = $1 and oo.phone_hash = $2
          `,
          [input.identity.organizationId, input.phoneHash],
        ),
        this.pool.query<{ policy: unknown }>(
          `select policy from risk_policies where store_id = $1 and active = true limit 1`,
          [input.identity.storeId],
        ),
      ]);

    const observations = observationsResult.rows;
    const now = Date.now();
    const merchant = merchantResult.rows[0] ?? { delivered: 0, returned: 0, cancelled: 0 };
    const verification = verificationResult.rows[0] ?? { verified: false, attempts: 0 };
    const network = networkResult.rows[0] ?? { negative: 0, reporters: 0, positive: 0 };
    return {
      courier: {
        totalOrders: observations.reduce((sum, row) => sum + row.total_orders, 0),
        deliveredOrders: observations.reduce((sum, row) => sum + row.delivered_orders, 0),
        returnedOrders: observations.reduce((sum, row) => sum + row.returned_orders, 0),
        cancelledBeforeShipping: observations.reduce(
          (sum, row) => sum + row.cancelled_before_shipping,
          0,
        ),
        providerCount: observations.length,
        freshness:
          observations.length === 0
            ? ('missing' as const)
            : observations.every((row) => new Date(row.expires_at).getTime() > now)
              ? ('fresh' as const)
              : ('stale' as const),
        sourceConfidence:
          observations.length === 0
            ? 0
            : observations.reduce((sum, row) => sum + Number(row.confidence), 0) /
              observations.length,
      },
      merchant: {
        deliveredOrders: merchant.delivered,
        returnedOrders: merchant.returned,
        recentCancelledOrders: merchant.cancelled,
        previousSuccessfulCustomer: merchant.delivered > 0,
      },
      velocity: {
        phoneOrdersLastHour: 0,
        devicePhoneCountLastDay: 0,
        ipCustomerCountLastHour: 0,
      },
      verification: {
        otpVerified: verification.verified,
        otpFailures: verification.attempts,
        phoneUnreachable: false,
      },
      network: {
        confirmedNegativeOutcomes: network.negative,
        independentReporters: network.reporters,
        confirmedPositiveOutcomes: network.positive,
        activeDispute: false,
      },
      ...(isRiskPolicy(policyResult.rows[0]?.policy)
        ? { policy: policyResult.rows[0]?.policy }
        : {}),
    };
  }
}

interface AssessmentRow {
  id: string;
  organization_id: string;
  store_id: string;
  api_key_id: string | null;
  idempotency_key: string;
  phone_hash: string;
  order_snapshot: unknown;
}

interface ObservationRow {
  provider: string;
  total_orders: number;
  delivered_orders: number;
  returned_orders: number;
  cancelled_before_shipping: number;
  confidence: string | number;
  expires_at: Date | string;
}

function parseAssessmentRow(row: AssessmentRow): StoredAssessment {
  if (!row.order_snapshot || typeof row.order_snapshot !== 'object') {
    throw new Error(`Assessment ${row.id} has an invalid order snapshot`);
  }
  const snapshot = row.order_snapshot as Record<string, unknown>;
  return {
    identity: {
      apiKeyId: row.api_key_id ?? 'key_deleted',
      organizationId: row.organization_id,
      storeId: row.store_id,
    },
    idempotencyKey: row.idempotency_key,
    phoneHash: row.phone_hash,
    request: riskAssessmentRequestSchema.parse(snapshot.request),
    response: riskAssessmentResponseSchema.parse(snapshot.response),
  };
}

async function currentUsage(
  client: PoolClient,
  organizationId: string,
  period: string,
): Promise<number> {
  const result = await client.query<{ used: number }>(
    `
      select coalesce(sum(units), 0)::int as used
      from usage_events
      where organization_id = $1 and period = $2 and event_type = 'risk_assessment'
    `,
    [organizationId, period],
  );
  return result.rows[0]?.used ?? 0;
}

function parseOperationKey(key: string): {
  organizationId: string;
  storeId: string;
  operation: string;
  idempotencyKey: string;
} {
  const [organizationId, storeId, operation, ...idempotencyParts] = key.split(':');
  const idempotencyKey = idempotencyParts.join(':');
  if (!organizationId || !storeId || !operation || !idempotencyKey) {
    throw new Error('Invalid operation idempotency key');
  }
  return { organizationId, storeId, operation, idempotencyKey };
}

function isPlanCode(value: string | null): value is PlanCode {
  return value !== null && ['free', 'starter', 'pro', 'enterprise'].includes(value);
}

function isRiskPolicy(value: unknown): value is {
  version: string;
  thresholds: { verify: number; review: number; hold: number; block: number };
  highValueOrderAmount: number;
  unknownDecision: 'verify' | 'review';
} {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  const thresholds = record.thresholds;
  if (!thresholds || typeof thresholds !== 'object') return false;
  const thresholdRecord = thresholds as Record<string, unknown>;
  return (
    typeof record.version === 'string' &&
    typeof record.highValueOrderAmount === 'number' &&
    (record.unknownDecision === 'verify' || record.unknownDecision === 'review') &&
    ['verify', 'review', 'hold', 'block'].every((key) => typeof thresholdRecord[key] === 'number')
  );
}
