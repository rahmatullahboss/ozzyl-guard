import type { Pool } from 'pg';

export interface ClaimedCourierJob {
  id: string;
  courierAccountId: string;
  organizationId: string;
  storeId: string;
  provider: string;
  payload: unknown;
}

export class CourierJobLeaseError extends Error {
  readonly code = 'COURIER_JOB_LEASE_LOST';

  constructor(message = 'Courier job lease is no longer owned by this worker') {
    super(message);
    this.name = 'CourierJobLeaseError';
  }
}

export class PostgresCourierJobQueue {
  private readonly leaseMs: number;
  private readonly maxAttempts: number;

  constructor(
    private readonly pool: Pool,
    options: { leaseMs?: number; maxAttempts?: number } = {},
  ) {
    this.leaseMs = options.leaseMs ?? 5 * 60_000;
    this.maxAttempts = options.maxAttempts ?? 5;
  }

  async claim(workerId: string, at = new Date()): Promise<ClaimedCourierJob | null> {
    const client = await this.pool.connect();
    const leaseExpiresAt = this.leaseUntil(at);
    try {
      await client.query('begin');
      await client.query(
        `
          update courier_jobs
          set status = 'failed',
            completed_at = $1,
            error_code = coalesce(error_code, 'LEASE_EXPIRED'),
            claimed_by = null,
            claimed_at = null,
            lease_expires_at = null,
            updated_at = now()
          where job_type = 'customer_observation_refresh'
            and status in ('claimed', 'processing')
            and (lease_expires_at is null or lease_expires_at <= $1)
            and attempts >= $2
        `,
        [at, this.maxAttempts],
      );
      const result = await client.query<{
        id: string;
        courier_account_id: string;
        organization_id: string;
        store_id: string;
        provider: string;
        payload: unknown;
      }>(
        `
          with candidate as (
            select cj.id
            from courier_jobs cj
            where cj.job_type = 'customer_observation_refresh'
              and cj.attempts < $4
              and (
                (cj.status = 'queued' and cj.scheduled_at <= $2)
                or (
                  cj.status in ('claimed', 'processing')
                  and (cj.lease_expires_at is null or cj.lease_expires_at <= $2)
                )
              )
            order by
              case when cj.status in ('claimed', 'processing') then 0 else 1 end,
              coalesce(cj.lease_expires_at, cj.scheduled_at) asc,
              cj.scheduled_at asc,
              cj.id asc
            for update skip locked
            limit 1
          ), claimed as (
            update courier_jobs cj
            set status = 'claimed',
              claimed_by = $1,
              claimed_at = $2,
              lease_expires_at = $3,
              started_at = null,
              completed_at = null,
              updated_at = now()
            from candidate
            where cj.id = candidate.id
            returning cj.id, cj.courier_account_id, cj.payload
          )
          select
            claimed.id,
            claimed.courier_account_id,
            stores.organization_id,
            courier_accounts.store_id,
            courier_accounts.provider,
            claimed.payload
          from claimed
          join courier_accounts on courier_accounts.id = claimed.courier_account_id
          join stores on stores.id = courier_accounts.store_id
        `,
        [workerId, at, leaseExpiresAt, this.maxAttempts],
      );
      await client.query('commit');
      const row = result.rows[0];
      return row
        ? {
            id: row.id,
            courierAccountId: row.courier_account_id,
            organizationId: row.organization_id,
            storeId: row.store_id,
            provider: row.provider,
            payload: row.payload,
          }
        : null;
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  async started(jobId: string, workerId: string, at = new Date()): Promise<void> {
    const result = await this.pool.query(
      `
        update courier_jobs
        set status = 'processing',
          started_at = $3,
          attempts = attempts + 1,
          lease_expires_at = $4,
          updated_at = now()
        where id = $1
          and claimed_by = $2
          and status = 'claimed'
          and lease_expires_at > $3
      `,
      [jobId, workerId, at, this.leaseUntil(at)],
    );
    this.assertOwned(result.rowCount);
  }

  async renew(jobId: string, workerId: string, at = new Date()): Promise<void> {
    const result = await this.pool.query(
      `
        update courier_jobs
        set lease_expires_at = $3, updated_at = now()
        where id = $1
          and claimed_by = $2
          and status in ('claimed', 'processing')
          and lease_expires_at > $4
      `,
      [jobId, workerId, this.leaseUntil(at), at],
    );
    this.assertOwned(result.rowCount);
  }

  async completed(jobId: string, workerId: string, at = new Date()): Promise<void> {
    const result = await this.pool.query(
      `
        update courier_jobs
        set status = 'completed',
          completed_at = $3,
          error_code = null,
          claimed_by = null,
          claimed_at = null,
          lease_expires_at = null,
          updated_at = now()
        where id = $1 and claimed_by = $2 and status = 'processing'
      `,
      [jobId, workerId, at],
    );
    this.assertOwned(result.rowCount);
  }

  async failed(
    jobId: string,
    workerId: string,
    code: string,
    retryable: boolean,
    at = new Date(),
  ): Promise<void> {
    const result = await this.pool.query(
      `
        update courier_jobs
        set status = case when $4 and attempts < $6 then 'queued' else 'failed' end,
          scheduled_at = case
            when $4 and attempts < $6
              then $5::timestamptz + (least(3600, power(2, greatest(attempts, 1)) * 30)::text || ' seconds')::interval
            else scheduled_at
          end,
          completed_at = case when $4 and attempts < $6 then null else $5 end,
          error_code = $3,
          claimed_by = null,
          claimed_at = null,
          lease_expires_at = null,
          updated_at = now()
        where id = $1
          and claimed_by = $2
          and status in ('claimed', 'processing')
      `,
      [jobId, workerId, code, retryable, at, this.maxAttempts],
    );
    this.assertOwned(result.rowCount);
  }

  private leaseUntil(at: Date): Date {
    return new Date(at.getTime() + this.leaseMs);
  }

  private assertOwned(rowCount: number | null): void {
    if (rowCount !== 1) throw new CourierJobLeaseError();
  }
}
