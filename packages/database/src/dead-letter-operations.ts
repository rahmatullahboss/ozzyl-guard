import { randomUUID } from 'node:crypto';
import type { Pool, PoolClient } from 'pg';

export const durableWorkTypes = [
  'courier_job',
  'webhook_delivery',
  'verification_job',
] as const;

export type DurableWorkType = (typeof durableWorkTypes)[number];

export interface DurableDeadLetterRecord {
  workType: DurableWorkType;
  workId: string;
  organizationId: string;
  storeId: string;
  status: 'failed';
  attempts: number;
  errorCode: string | null;
  failedAt: string;
  replayable: boolean;
  replayBlockedReason: string | null;
}

export interface DurableWorkReplayResult {
  replayId: string;
  organizationId: string;
  storeId: string;
  workType: DurableWorkType;
  workId: string;
  previousStatus: string;
  previousErrorCode: string | null;
  previousAttempts: number;
  replayedStatus: 'queued';
  replayedAt: string;
  replay: boolean;
}

export type DurableWorkOperationErrorCode =
  | 'STORE_ADMIN_REQUIRED'
  | 'DEAD_LETTER_NOT_FOUND'
  | 'DEAD_LETTER_NOT_REPLAYABLE'
  | 'DEAD_LETTER_IDEMPOTENCY_CONFLICT'
  | 'DEAD_LETTER_STATE_CHANGED';

export class DurableWorkOperationError extends Error {
  constructor(
    readonly code: DurableWorkOperationErrorCode,
    message: string,
  ) {
    super(message);
    this.name = 'DurableWorkOperationError';
  }
}

interface WorkRow {
  work_type: DurableWorkType;
  work_id: string;
  organization_id: string;
  store_id: string;
  status: string;
  attempts: number;
  error_code: string | null;
  failed_at: Date | string;
  job_type: string | null;
  endpoint_status: string | null;
  session_status: string | null;
  expires_at: Date | string | null;
  has_otp_attempt: boolean;
  scope_valid: boolean;
}

interface ReplayRow {
  id: string;
  organization_id: string;
  store_id: string;
  work_type: DurableWorkType;
  work_id: string;
  previous_status: string;
  previous_error_code: string | null;
  previous_attempts: number;
  replayed_status: 'queued';
  replayed_at: Date | string;
}

const NON_REPLAYABLE_WEBHOOK_ERRORS = new Set([
  'LEGACY_EVENT_PAYLOAD_MISSING',
  'WEBHOOK_SCOPE_MISMATCH',
  'INVALID_EVENT_PAYLOAD',
]);

const NON_REPLAYABLE_VERIFICATION_ERRORS = new Set([
  'VERIFICATION_SCOPE_MISMATCH',
  'OTP_EXPIRED_BEFORE_DELIVERY',
  'VERIFICATION_PAYLOAD_DECRYPTION_FAILED',
  'INVALID_VERIFICATION_PAYLOAD',
]);

export class PostgresDurableWorkOperations {
  constructor(private readonly pool: Pool) {}

  async listDeadLetters(input: {
    requestedByUserId: string;
    organizationId: string;
    storeId: string;
    limit?: number;
    at?: Date;
  }): Promise<DurableDeadLetterRecord[]> {
    if (!(await authorizeStoreAdministrator(this.pool, input))) {
      throw new DurableWorkOperationError(
        'STORE_ADMIN_REQUIRED',
        'Active store owner or administrator access is required',
      );
    }

    const limit = Math.min(100, Math.max(1, Math.trunc(input.limit ?? 50)));
    const at = input.at ?? new Date();
    const [courier, webhooks, verification] = await Promise.all([
      this.pool.query<WorkRow>(
        `
          select
            'courier_job'::text as work_type,
            cj.id as work_id,
            s.organization_id,
            s.id as store_id,
            cj.status,
            cj.attempts,
            cj.error_code,
            coalesce(cj.completed_at, cj.updated_at) as failed_at,
            cj.job_type,
            null::text as endpoint_status,
            null::text as session_status,
            null::timestamptz as expires_at,
            true as has_otp_attempt,
            true as scope_valid
          from courier_jobs cj
          join courier_accounts ca on ca.id = cj.courier_account_id
          join stores s on s.id = ca.store_id and s.status = 'active'
          join organizations o on o.id = s.organization_id and o.status = 'active'
          where s.organization_id = $1 and s.id = $2 and cj.status = 'failed'
          order by coalesce(cj.completed_at, cj.updated_at) desc, cj.id desc
          limit $3
        `,
        [input.organizationId, input.storeId, limit],
      ),
      this.pool.query<WorkRow>(
        `
          select
            'webhook_delivery'::text as work_type,
            wd.id as work_id,
            wd.organization_id,
            wd.store_id,
            wd.status,
            wd.attempts,
            wd.error_code,
            coalesce(wd.completed_at, wd.updated_at) as failed_at,
            null::text as job_type,
            we.status as endpoint_status,
            null::text as session_status,
            null::timestamptz as expires_at,
            true as has_otp_attempt,
            (
              we.id is not null
              and we.organization_id = wd.organization_id
              and (we.store_id is null or we.store_id = wd.store_id)
            ) as scope_valid
          from webhook_deliveries wd
          join stores s
            on s.id = wd.store_id
            and s.organization_id = wd.organization_id
            and s.status = 'active'
          join organizations o on o.id = wd.organization_id and o.status = 'active'
          left join webhook_endpoints we on we.id = wd.endpoint_id
          where wd.organization_id = $1 and wd.store_id = $2 and wd.status = 'failed'
          order by coalesce(wd.completed_at, wd.updated_at) desc, wd.id desc
          limit $3
        `,
        [input.organizationId, input.storeId, limit],
      ),
      this.pool.query<WorkRow>(
        `
          select
            'verification_job'::text as work_type,
            vj.id as work_id,
            vj.organization_id,
            vj.store_id,
            vj.status,
            vj.attempts,
            vj.error_code,
            coalesce(vj.completed_at, vj.updated_at) as failed_at,
            null::text as job_type,
            null::text as endpoint_status,
            vs.status as session_status,
            vs.expires_at,
            exists (
              select 1 from otp_attempts oa
              where oa.verification_session_id = vj.verification_session_id
            ) as has_otp_attempt,
            (
              vs.id is not null
              and vs.organization_id = vj.organization_id
              and vs.store_id = vj.store_id
            ) as scope_valid
          from verification_jobs vj
          join stores s
            on s.id = vj.store_id
            and s.organization_id = vj.organization_id
            and s.status = 'active'
          join organizations o on o.id = vj.organization_id and o.status = 'active'
          left join verification_sessions vs on vs.id = vj.verification_session_id
          where vj.organization_id = $1 and vj.store_id = $2 and vj.status = 'failed'
          order by coalesce(vj.completed_at, vj.updated_at) desc, vj.id desc
          limit $3
        `,
        [input.organizationId, input.storeId, limit],
      ),
    ]);

    return [...courier.rows, ...webhooks.rows, ...verification.rows]
      .map((row) => this.toDeadLetter(row, at))
      .sort((left, right) => right.failedAt.localeCompare(left.failedAt))
      .slice(0, limit);
  }

  async replayDeadLetter(input: {
    requestedByUserId: string;
    organizationId: string;
    storeId: string;
    workType: DurableWorkType;
    workId: string;
    idempotencyKey: string;
    at?: Date;
  }): Promise<DurableWorkReplayResult> {
    const client = await this.pool.connect();
    const at = input.at ?? new Date();
    try {
      await client.query('begin');
      if (!(await authorizeStoreAdministrator(client, input))) {
        throw new DurableWorkOperationError(
          'STORE_ADMIN_REQUIRED',
          'Active store owner or administrator access is required',
        );
      }
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.storeId}:durable-work-replay:${input.idempotencyKey}`,
      ]);

      const existing = await client.query<ReplayRow>(
        `
          select
            id, organization_id, store_id, work_type, work_id,
            previous_status, previous_error_code, previous_attempts,
            replayed_status, replayed_at
          from durable_work_replays
          where organization_id = $1 and store_id = $2 and idempotency_key = $3
          limit 1
        `,
        [input.organizationId, input.storeId, input.idempotencyKey],
      );
      const existingRow = existing.rows[0];
      if (existingRow) {
        if (existingRow.work_type !== input.workType || existingRow.work_id !== input.workId) {
          throw new DurableWorkOperationError(
            'DEAD_LETTER_IDEMPOTENCY_CONFLICT',
            'Idempotency key is already bound to another durable work replay',
          );
        }
        await client.query('commit');
        return mapReplayRow(existingRow, true);
      }

      const row = await this.lockWorkRow(client, input);
      if (!row) {
        throw new DurableWorkOperationError(
          'DEAD_LETTER_NOT_FOUND',
          'Failed durable work was not found in the authorized store',
        );
      }
      const blockedReason = replayBlockedReason(row, at);
      if (blockedReason) {
        throw new DurableWorkOperationError(
          'DEAD_LETTER_NOT_REPLAYABLE',
          `Durable work cannot be replayed: ${blockedReason}`,
        );
      }

      await this.resetWork(client, row, at);
      const replayId = `dwr_${randomUUID()}`;
      const inserted = await client.query<ReplayRow>(
        `
          insert into durable_work_replays (
            id, organization_id, store_id, requested_by_user_id,
            work_type, work_id, idempotency_key,
            previous_status, previous_error_code, previous_attempts,
            replayed_status, replayed_at
          ) values (
            $1, $2, $3, $4,
            $5, $6, $7,
            $8, $9, $10,
            'queued', $11
          )
          returning
            id, organization_id, store_id, work_type, work_id,
            previous_status, previous_error_code, previous_attempts,
            replayed_status, replayed_at
        `,
        [
          replayId,
          input.organizationId,
          input.storeId,
          input.requestedByUserId,
          input.workType,
          input.workId,
          input.idempotencyKey,
          row.status,
          row.error_code,
          row.attempts,
          at,
        ],
      );
      await client.query(
        `
          insert into audit_events (
            id, organization_id, actor_type, actor_id, action,
            target_type, target_id, metadata
          ) values (
            $1, $2, 'user', $3, 'durable_work.replayed',
            $4, $5, $6::jsonb
          )
        `,
        [
          `aud_${randomUUID()}`,
          input.organizationId,
          input.requestedByUserId,
          input.workType,
          input.workId,
          JSON.stringify({
            replayId,
            storeId: input.storeId,
            previousStatus: row.status,
            previousErrorCode: row.error_code,
            previousAttempts: row.attempts,
          }),
        ],
      );
      const replay = inserted.rows[0];
      if (!replay) {
        throw new DurableWorkOperationError(
          'DEAD_LETTER_STATE_CHANGED',
          'Durable work replay evidence was not persisted',
        );
      }
      await client.query('commit');
      return mapReplayRow(replay, false);
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  private toDeadLetter(row: WorkRow, at: Date): DurableDeadLetterRecord {
    const blockedReason = replayBlockedReason(row, at);
    return {
      workType: row.work_type,
      workId: row.work_id,
      organizationId: row.organization_id,
      storeId: row.store_id,
      status: 'failed',
      attempts: row.attempts,
      errorCode: row.error_code,
      failedAt: new Date(row.failed_at).toISOString(),
      replayable: blockedReason === null,
      replayBlockedReason: blockedReason,
    };
  }

  private async lockWorkRow(
    client: PoolClient,
    input: {
      organizationId: string;
      storeId: string;
      workType: DurableWorkType;
      workId: string;
    },
  ): Promise<WorkRow | null> {
    if (input.workType === 'courier_job') {
      const result = await client.query<WorkRow>(
        `
          select
            'courier_job'::text as work_type,
            cj.id as work_id,
            s.organization_id,
            s.id as store_id,
            cj.status,
            cj.attempts,
            cj.error_code,
            coalesce(cj.completed_at, cj.updated_at) as failed_at,
            cj.job_type,
            null::text as endpoint_status,
            null::text as session_status,
            null::timestamptz as expires_at,
            true as has_otp_attempt,
            true as scope_valid
          from courier_jobs cj
          join courier_accounts ca on ca.id = cj.courier_account_id
          join stores s on s.id = ca.store_id and s.status = 'active'
          join organizations o on o.id = s.organization_id and o.status = 'active'
          where cj.id = $3 and s.organization_id = $1 and s.id = $2 and cj.status = 'failed'
          for update of cj
        `,
        [input.organizationId, input.storeId, input.workId],
      );
      return result.rows[0] ?? null;
    }

    if (input.workType === 'webhook_delivery') {
      const result = await client.query<WorkRow>(
        `
          select
            'webhook_delivery'::text as work_type,
            wd.id as work_id,
            wd.organization_id,
            wd.store_id,
            wd.status,
            wd.attempts,
            wd.error_code,
            coalesce(wd.completed_at, wd.updated_at) as failed_at,
            null::text as job_type,
            we.status as endpoint_status,
            null::text as session_status,
            null::timestamptz as expires_at,
            true as has_otp_attempt,
            (
              we.id is not null
              and we.organization_id = wd.organization_id
              and (we.store_id is null or we.store_id = wd.store_id)
            ) as scope_valid
          from webhook_deliveries wd
          join stores s
            on s.id = wd.store_id
            and s.organization_id = wd.organization_id
            and s.status = 'active'
          join organizations o on o.id = wd.organization_id and o.status = 'active'
          left join webhook_endpoints we on we.id = wd.endpoint_id
          where wd.id = $3 and wd.organization_id = $1 and wd.store_id = $2
            and wd.status = 'failed'
          for update of wd
        `,
        [input.organizationId, input.storeId, input.workId],
      );
      return result.rows[0] ?? null;
    }

    const result = await client.query<WorkRow>(
      `
        select
          'verification_job'::text as work_type,
          vj.id as work_id,
          vj.organization_id,
          vj.store_id,
          vj.status,
          vj.attempts,
          vj.error_code,
          coalesce(vj.completed_at, vj.updated_at) as failed_at,
          null::text as job_type,
          null::text as endpoint_status,
          vs.status as session_status,
          vs.expires_at,
          exists (
            select 1 from otp_attempts oa
            where oa.verification_session_id = vj.verification_session_id
          ) as has_otp_attempt,
          (
            vs.id is not null
            and vs.organization_id = vj.organization_id
            and vs.store_id = vj.store_id
          ) as scope_valid
        from verification_jobs vj
        join stores s
          on s.id = vj.store_id
          and s.organization_id = vj.organization_id
          and s.status = 'active'
        join organizations o on o.id = vj.organization_id and o.status = 'active'
        left join verification_sessions vs on vs.id = vj.verification_session_id
        where vj.id = $3 and vj.organization_id = $1 and vj.store_id = $2
          and vj.status = 'failed'
        for update of vj
      `,
      [input.organizationId, input.storeId, input.workId],
    );
    return result.rows[0] ?? null;
  }

  private async resetWork(client: PoolClient, row: WorkRow, at: Date): Promise<void> {
    if (row.work_type === 'courier_job') {
      const result = await client.query(
        `
          update courier_jobs
          set status = 'queued', attempts = 0, scheduled_at = $2,
            started_at = null, completed_at = null, error_code = null,
            claimed_by = null, claimed_at = null, lease_expires_at = null,
            updated_at = now()
          where id = $1 and status = 'failed'
        `,
        [row.work_id, at],
      );
      assertUpdated(result.rowCount);
      return;
    }

    if (row.work_type === 'webhook_delivery') {
      const result = await client.query(
        `
          update webhook_deliveries
          set status = 'queued', attempts = 0, next_attempt_at = $2,
            response_status = null, error_code = null, completed_at = null,
            claimed_by = null, claimed_at = null, lease_expires_at = null,
            updated_at = now()
          where id = $1 and status = 'failed'
        `,
        [row.work_id, at],
      );
      assertUpdated(result.rowCount);
      return;
    }

    const job = await client.query<{ verification_session_id: string }>(
      `
        update verification_jobs
        set status = 'queued', attempts = 0, next_attempt_at = $2,
          provider_message_id = null, error_code = null, completed_at = null,
          claimed_by = null, claimed_at = null, lease_expires_at = null,
          updated_at = now()
        where id = $1 and status = 'failed'
        returning verification_session_id
      `,
      [row.work_id, at],
    );
    assertUpdated(job.rowCount);
    const verificationId = job.rows[0]?.verification_session_id;
    if (!verificationId) {
      throw new DurableWorkOperationError(
        'DEAD_LETTER_STATE_CHANGED',
        'Verification job no longer references a session',
      );
    }
    const session = await client.query(
      `
        update verification_sessions
        set status = 'queued', updated_at = now()
        where id = $1 and status = 'delivery_failed' and expires_at > $2
      `,
      [verificationId, at],
    );
    assertUpdated(session.rowCount);
    const attempt = await client.query(
      `
        update otp_attempts
        set provider_message_id = null, sent_at = null, delivered_at = null,
          failed_at = null, updated_at = now()
        where id = (
          select id from otp_attempts
          where verification_session_id = $1
          order by created_at desc, id desc
          limit 1
        )
      `,
      [verificationId],
    );
    assertUpdated(attempt.rowCount);
  }
}

async function authorizeStoreAdministrator(
  database: Pool | PoolClient,
  input: { requestedByUserId: string; organizationId: string; storeId: string },
): Promise<boolean> {
  const result = await database.query<{ role: string }>(
    `
      select om.role
      from organization_members om
      join users u on u.id = om.user_id and u.status = 'active'
      join organizations o on o.id = om.organization_id and o.status = 'active'
      join stores s on s.organization_id = o.id and s.status = 'active'
      where om.user_id = $1 and om.organization_id = $2 and s.id = $3
      limit 1
    `,
    [input.requestedByUserId, input.organizationId, input.storeId],
  );
  return result.rows[0]?.role === 'owner' || result.rows[0]?.role === 'admin';
}

function replayBlockedReason(row: WorkRow, at: Date): string | null {
  if (row.status !== 'failed') return 'WORK_NOT_FAILED';
  if (!row.scope_valid) return 'RELATIONAL_SCOPE_MISMATCH';

  if (row.work_type === 'courier_job') {
    return row.job_type === 'customer_observation_refresh' ? null : 'UNSUPPORTED_COURIER_JOB_TYPE';
  }

  if (row.work_type === 'webhook_delivery') {
    if (row.endpoint_status !== 'active') return 'WEBHOOK_ENDPOINT_INACTIVE';
    return row.error_code && NON_REPLAYABLE_WEBHOOK_ERRORS.has(row.error_code)
      ? 'STRUCTURAL_WEBHOOK_FAILURE'
      : null;
  }

  if (row.session_status !== 'delivery_failed') return 'VERIFICATION_SESSION_NOT_REPLAYABLE';
  if (!row.expires_at || new Date(row.expires_at).getTime() <= at.getTime()) {
    return 'VERIFICATION_EXPIRED';
  }
  if (!row.has_otp_attempt) return 'OTP_ATTEMPT_MISSING';
  return row.error_code && NON_REPLAYABLE_VERIFICATION_ERRORS.has(row.error_code)
    ? 'STRUCTURAL_VERIFICATION_FAILURE'
    : null;
}

function assertUpdated(rowCount: number | null): void {
  if (rowCount !== 1) {
    throw new DurableWorkOperationError(
      'DEAD_LETTER_STATE_CHANGED',
      'Durable work changed while replay was being prepared',
    );
  }
}

function mapReplayRow(row: ReplayRow, replay: boolean): DurableWorkReplayResult {
  return {
    replayId: row.id,
    organizationId: row.organization_id,
    storeId: row.store_id,
    workType: row.work_type,
    workId: row.work_id,
    previousStatus: row.previous_status,
    previousErrorCode: row.previous_error_code,
    previousAttempts: row.previous_attempts,
    replayedStatus: row.replayed_status,
    replayedAt: new Date(row.replayed_at).toISOString(),
    replay,
  };
}
