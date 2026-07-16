import { randomUUID } from 'node:crypto';
import type { Pool, PoolClient } from 'pg';
import {
  generateSessionToken,
  hashOpaqueSecret,
  maskPhone,
  verifyPassword,
} from '@ozzyl/authentication';
import {
  PLANS,
  UsageLimitError,
  type PlanCode,
  type UsageLedger,
  type UsageReservation,
} from '@ozzyl/billing';
import {
  merchantDashboardOverviewSchema,
  platformAdminOverviewSchema,
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type BrowserOrganization,
  type MerchantDashboardOverview,
  type OrderOutcomeInput,
  type PlatformAdminOverview,
  type PlatformRole,
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
import type {
  BrowserAuditRepository,
  BrowserAuthService,
  MerchantDashboardRepository,
  PlatformAdminRepository,
  UserSessionIdentity,
} from './browser.js';

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

export class PostgresBrowserAuthService implements BrowserAuthService {
  constructor(
    private readonly pool: Pool,
    private readonly sessionPepper: string,
    private readonly sessionTtlMs = 7 * 24 * 60 * 60 * 1_000,
  ) {}

  async login(email: string, password: string) {
    const result = await this.pool.query<{
      id: string;
      email: string;
      password_hash: string | null;
      platform_role: string;
    }>(
      `
        select id, email, password_hash, platform_role
        from users
        where lower(email) = lower($1) and status = 'active'
        limit 1
      `,
      [email],
    );
    const user = result.rows[0];
    if (!user?.password_hash || !isPlatformRole(user.platform_role)) return null;
    if (!(await verifyPassword(user.password_hash, password))) return null;

    const generated = generateSessionToken(this.sessionPepper);
    const sessionId = `ses_${randomUUID()}`;
    const expiresAt = new Date(Date.now() + this.sessionTtlMs);
    await this.pool.query(
      `
        insert into user_sessions (id, user_id, token_hash, expires_at)
        values ($1, $2, $3, $4)
      `,
      [sessionId, user.id, generated.tokenHash, expiresAt],
    );
    const identity = await loadUserSessionIdentity(this.pool, {
      sessionId,
      userId: user.id,
      email: user.email,
      platformRole: user.platform_role,
      expiresAt,
    });
    return identity ? { rawToken: generated.rawToken, identity } : null;
  }

  async resolve(rawToken: string): Promise<UserSessionIdentity | null> {
    const tokenHash = hashOpaqueSecret(rawToken, this.sessionPepper);
    const result = await this.pool.query<{
      session_id: string;
      user_id: string;
      email: string;
      platform_role: string;
      expires_at: Date | string;
    }>(
      `
        select
          us.id as session_id,
          u.id as user_id,
          u.email,
          u.platform_role,
          us.expires_at
        from user_sessions us
        join users u on u.id = us.user_id and u.status = 'active'
        where us.token_hash = $1
          and us.revoked_at is null
          and us.expires_at > now()
        limit 1
      `,
      [tokenHash],
    );
    const row = result.rows[0];
    if (!row || !isPlatformRole(row.platform_role)) return null;
    return loadUserSessionIdentity(this.pool, {
      sessionId: row.session_id,
      userId: row.user_id,
      email: row.email,
      platformRole: row.platform_role,
      expiresAt: row.expires_at,
    });
  }

  async revoke(input: { sessionId: string; userId: string }): Promise<void> {
    await this.pool.query(
      `
        update user_sessions
        set revoked_at = now()
        where id = $1 and user_id = $2 and revoked_at is null
      `,
      [input.sessionId, input.userId],
    );
  }
}

export class PostgresBrowserAuditRepository implements BrowserAuditRepository {
  constructor(private readonly pool: Pool) {}

  async record(input: {
    organizationId: string | null;
    actorId: string | null;
    action: string;
    targetType?: string;
    targetId?: string;
    metadata?: Record<string, unknown>;
  }): Promise<void> {
    await this.pool.query(
      `
        insert into audit_events (
          id, organization_id, actor_type, actor_id, action, target_type, target_id, metadata
        ) values ($1, $2, 'user', $3, $4, $5, $6, $7::jsonb)
      `,
      [
        `aud_${randomUUID()}`,
        input.organizationId,
        input.actorId,
        input.action,
        input.targetType ?? null,
        input.targetId ?? null,
        JSON.stringify(input.metadata ?? {}),
      ],
    );
  }
}

export class PostgresMerchantDashboardRepository implements MerchantDashboardRepository {
  constructor(private readonly pool: Pool) {}

  async loadOverview(input: {
    userId: string;
    organizationId: string;
    storeId: string;
    now: Date;
  }): Promise<MerchantDashboardOverview | null> {
    const scopeResult = await this.pool.query<{
      organization_id: string;
      organization_name: string;
      store_id: string;
      store_name: string;
      platform: string;
      role: string;
      plan_code: string | null;
    }>(
      `
        select
          o.id as organization_id,
          o.name as organization_name,
          s.id as store_id,
          s.name as store_name,
          s.platform,
          om.role,
          p.code as plan_code
        from organization_members om
        join organizations o on o.id = om.organization_id and o.status = 'active'
        join stores s on s.organization_id = o.id and s.status = 'active'
        left join plans p on p.id = o.plan_id
        where om.user_id = $1 and o.id = $2 and s.id = $3
        limit 1
      `,
      [input.userId, input.organizationId, input.storeId],
    );
    const scope = scopeResult.rows[0];
    if (!scope) return null;

    const month = input.now.toISOString().slice(0, 7);
    const [assessmentResult, verificationResult, usageResult, reviewResult, courierResult] =
      await Promise.all([
        this.pool.query<{
          assessments: number;
          degraded: number;
          pending: number;
          allow_count: number;
          verify_count: number;
          review_count: number;
          hold_count: number;
          block_count: number;
        }>(
          `
            select
              count(*)::int as assessments,
              count(*) filter (where degraded)::int as degraded,
              count(*) filter (where decision in ('verify', 'review', 'hold', 'block'))::int as pending,
              count(*) filter (where decision = 'allow')::int as allow_count,
              count(*) filter (where decision = 'verify')::int as verify_count,
              count(*) filter (where decision = 'review')::int as review_count,
              count(*) filter (where decision = 'hold')::int as hold_count,
              count(*) filter (where decision = 'block')::int as block_count
            from risk_assessments
            where organization_id = $1 and store_id = $2
              and created_at >= $3::timestamptz - interval '30 days'
          `,
          [input.organizationId, input.storeId, input.now],
        ),
        this.pool.query<{ verified: number }>(
          `
            select count(*)::int as verified
            from verification_sessions
            where organization_id = $1 and store_id = $2 and status = 'verified'
              and verified_at >= $3::timestamptz - interval '30 days'
          `,
          [input.organizationId, input.storeId, input.now],
        ),
        this.pool.query<{ used: number }>(
          `
            select coalesce(sum(units), 0)::int as used
            from usage_events
            where organization_id = $1 and period = $2 and event_type = 'risk_assessment'
          `,
          [input.organizationId, month],
        ),
        this.pool.query<DashboardReviewRow>(
          `
            select
              ra.id,
              ra.external_order_id,
              ra.score,
              ra.decision,
              ra.confidence,
              ra.order_snapshot,
              ra.created_at,
              coalesce(
                jsonb_agg(
                  jsonb_build_object(
                    'code', rs.code,
                    'score', rs.score,
                    'description', rs.description
                  ) order by rs.score desc
                ) filter (where rs.id is not null),
                '[]'::jsonb
              ) as signals
            from risk_assessments ra
            left join risk_signals rs on rs.assessment_id = ra.id
            where ra.organization_id = $1 and ra.store_id = $2
              and ra.decision in ('verify', 'review', 'hold', 'block')
            group by ra.id
            order by ra.created_at desc
            limit 20
          `,
          [input.organizationId, input.storeId],
        ),
        this.pool.query<{
          provider: string;
          status: string;
          last_success_at: Date | string | null;
          last_failure_at: Date | string | null;
          failure_code: string | null;
        }>(
          `
            select ca.provider, ca.status, ca.last_success_at, ca.last_failure_at, ca.failure_code
            from courier_accounts ca
            join stores s on s.id = ca.store_id
            where s.organization_id = $1 and ca.store_id = $2
            order by ca.provider
          `,
          [input.organizationId, input.storeId],
        ),
      ]);

    const assessment = assessmentResult.rows[0] ?? emptyAssessmentAggregate();
    const plan = isPlanCode(scope.plan_code) ? scope.plan_code : 'free';
    return merchantDashboardOverviewSchema.parse({
      success: true,
      generated_at: input.now.toISOString(),
      scope: {
        organization_id: scope.organization_id,
        organization_name: scope.organization_name,
        store_id: scope.store_id,
        store_name: scope.store_name,
        platform: scope.platform,
        role: scope.role,
      },
      summary: {
        assessments_30d: assessment.assessments,
        degraded_30d: assessment.degraded,
        pending_reviews: assessment.pending,
        verified_30d: verificationResult.rows[0]?.verified ?? 0,
        usage_month: usageResult.rows[0]?.used ?? 0,
        usage_limit: PLANS[plan].monthlyAssessments,
      },
      decisions: {
        allow: assessment.allow_count,
        verify: assessment.verify_count,
        review: assessment.review_count,
        hold: assessment.hold_count,
        block: assessment.block_count,
      },
      reviews: reviewResult.rows.map(parseDashboardReview),
      couriers: courierResult.rows.map((row) => ({
        provider: row.provider,
        status: row.status,
        last_success_at: nullableIso(row.last_success_at),
        last_failure_at: nullableIso(row.last_failure_at),
        failure_code: row.failure_code,
      })),
    });
  }
}

export class PostgresPlatformAdminRepository implements PlatformAdminRepository {
  constructor(private readonly pool: Pool) {}

  async loadOverview(input: { userId: string; now: Date }): Promise<PlatformAdminOverview | null> {
    const authorization = await this.pool.query<{ allowed: boolean }>(
      `
        select exists(
          select 1 from users
          where id = $1 and status = 'active' and platform_role = 'platform_admin'
        ) as allowed
      `,
      [input.userId],
    );
    if (!authorization.rows[0]?.allowed) return null;

    const [summaryResult, reconnectResult, providerResult] = await Promise.all([
      this.pool.query<{
        active_organizations: number;
        active_stores: number;
        assessments_today: number;
        degraded_today: number;
        worker_backlog: number;
        failed_webhooks: number;
        oldest_scheduled_at: Date | string | null;
      }>(`
        select
          (select count(*)::int from organizations where status = 'active') as active_organizations,
          (select count(*)::int from stores where status = 'active') as active_stores,
          (select count(*)::int from risk_assessments where created_at >= date_trunc('day', now())) as assessments_today,
          (select count(*)::int from risk_assessments where degraded and created_at >= date_trunc('day', now())) as degraded_today,
          (select count(*)::int from courier_jobs where status in ('queued', 'processing')) as worker_backlog,
          (select count(*)::int from webhook_deliveries where status = 'failed') as failed_webhooks,
          (select min(scheduled_at) from courier_jobs where status in ('queued', 'processing')) as oldest_scheduled_at
      `),
      this.pool.query<{ reconnect_required: number }>(`
        select count(*)::int as reconnect_required
        from courier_accounts
        where status in ('expired', 'failed') or failure_code is not null
      `),
      this.pool.query<{
        provider: string;
        connected: number;
        attention: number;
      }>(`
        select
          provider,
          count(*) filter (where status = 'connected')::int as connected,
          count(*) filter (where status <> 'connected' or failure_code is not null)::int as attention
        from courier_accounts
        group by provider
        order by provider
      `),
    ]);

    const summary = summaryResult.rows[0] ?? {
      active_organizations: 0,
      active_stores: 0,
      assessments_today: 0,
      degraded_today: 0,
      worker_backlog: 0,
      failed_webhooks: 0,
      oldest_scheduled_at: null,
    };
    const reconnectRequired = reconnectResult.rows[0]?.reconnect_required ?? 0;
    const degradedPercentage =
      summary.assessments_today === 0
        ? 0
        : Number(((summary.degraded_today / summary.assessments_today) * 100).toFixed(2));
    const oldestLagSeconds = summary.oldest_scheduled_at
      ? Math.max(
          0,
          Math.floor(
            (input.now.getTime() - new Date(summary.oldest_scheduled_at).getTime()) / 1_000,
          ),
        )
      : 0;
    const incidents: PlatformAdminOverview['incidents'] = [];
    if (reconnectRequired > 0) {
      incidents.push({
        code: 'courier_reconnect_required',
        title: 'Courier reconnect required',
        detail: `${reconnectRequired} account${reconnectRequired === 1 ? '' : 's'} need attention`,
        severity: 'high',
      });
    }
    if (summary.worker_backlog > 0) {
      incidents.push({
        code: 'courier_worker_backlog',
        title: 'Courier worker backlog',
        detail: `${summary.worker_backlog} jobs pending; oldest ${oldestLagSeconds}s`,
        severity: oldestLagSeconds > 300 ? 'high' : 'medium',
      });
    }
    if (summary.failed_webhooks > 0) {
      incidents.push({
        code: 'webhook_delivery_failed',
        title: 'Webhook delivery failures',
        detail: `${summary.failed_webhooks} deliveries are currently failed`,
        severity: 'medium',
      });
    }

    return platformAdminOverviewSchema.parse({
      success: true,
      generated_at: input.now.toISOString(),
      summary: {
        active_organizations: summary.active_organizations,
        active_stores: summary.active_stores,
        assessments_today: summary.assessments_today,
        degraded_percentage: degradedPercentage,
        worker_backlog: summary.worker_backlog,
        failed_webhooks: summary.failed_webhooks,
      },
      incidents,
      providers: providerResult.rows.map((row) => ({
        name: row.provider,
        state: row.attention === 0 ? 'operational' : 'attention_required',
        metric: `${row.connected} connected; ${row.attention} need attention`,
      })),
      automatic_blocking: {
        broadly_enabled: false,
        reason:
          'Broad automatic blocking remains disabled until merchant pilot calibration is reviewed.',
      },
    });
  }
}

interface DashboardReviewRow {
  id: string;
  external_order_id: string | null;
  score: number;
  decision: string;
  confidence: number | string;
  order_snapshot: unknown;
  created_at: Date | string;
  signals: unknown;
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

async function loadUserSessionIdentity(
  pool: Pool,
  input: {
    sessionId: string;
    userId: string;
    email: string;
    platformRole: PlatformRole;
    expiresAt: Date | string;
  },
): Promise<UserSessionIdentity> {
  const result = await pool.query<{
    organization_id: string;
    organization_name: string;
    role: string;
    store_id: string | null;
    store_name: string | null;
    platform: string | null;
    store_status: string | null;
  }>(
    `
      select
        o.id as organization_id,
        o.name as organization_name,
        om.role,
        s.id as store_id,
        s.name as store_name,
        s.platform,
        s.status as store_status
      from organization_members om
      join organizations o on o.id = om.organization_id and o.status = 'active'
      left join stores s on s.organization_id = o.id and s.status = 'active'
      where om.user_id = $1
      order by o.name, s.name
    `,
    [input.userId],
  );
  const organizationMap = new Map<string, BrowserOrganization>();
  for (const row of result.rows) {
    const organization = organizationMap.get(row.organization_id) ?? {
      id: row.organization_id,
      name: row.organization_name,
      role: row.role,
      stores: [],
    };
    if (row.store_id && row.store_name && row.platform && row.store_status) {
      organization.stores.push({
        id: row.store_id,
        organization_id: row.organization_id,
        name: row.store_name,
        platform: row.platform,
        status: row.store_status,
      });
    }
    organizationMap.set(row.organization_id, organization);
  }
  return {
    sessionId: input.sessionId,
    userId: input.userId,
    email: input.email,
    platformRole: input.platformRole,
    expiresAt: new Date(input.expiresAt).toISOString(),
    organizations: [...organizationMap.values()],
  };
}

function parseDashboardReview(row: DashboardReviewRow) {
  let phoneMasked = '***';
  if (row.order_snapshot && typeof row.order_snapshot === 'object') {
    const snapshot = row.order_snapshot as Record<string, unknown>;
    const parsedRequest = riskAssessmentRequestSchema.safeParse(snapshot.request);
    if (parsedRequest.success) phoneMasked = maskPhone(parsedRequest.data.phone);
  }
  const signals = Array.isArray(row.signals)
    ? row.signals.flatMap((value) => {
        if (!value || typeof value !== 'object') return [];
        const record = value as Record<string, unknown>;
        if (
          typeof record.code !== 'string' ||
          typeof record.score !== 'number' ||
          typeof record.description !== 'string'
        ) {
          return [];
        }
        return [{ code: record.code, score: record.score, description: record.description }];
      })
    : [];
  return {
    assessment_id: row.id,
    external_order_id: row.external_order_id,
    phone_masked: phoneMasked,
    risk_score: row.score,
    decision: row.decision,
    confidence: Number(row.confidence),
    signals,
    created_at: new Date(row.created_at).toISOString(),
  };
}

function emptyAssessmentAggregate() {
  return {
    assessments: 0,
    degraded: 0,
    pending: 0,
    allow_count: 0,
    verify_count: 0,
    review_count: 0,
    hold_count: 0,
    block_count: 0,
  };
}

function nullableIso(value: Date | string | null): string | null {
  return value === null ? null : new Date(value).toISOString();
}

function isPlatformRole(value: string): value is PlatformRole {
  return value === 'merchant' || value === 'platform_admin';
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
