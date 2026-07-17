import type { Pool, PoolClient } from 'pg';
import type { DomainEvent } from '@ozzyl/shared-types';
import type { VerificationDeliveryReporter } from './index.js';

export interface ClaimedVerificationDelivery {
  id: string;
  verificationId: string;
  organizationId: string;
  storeId: string;
  purpose: string;
  phoneHash: string;
  otpHash: string;
  payloadEncrypted: string;
  expiresAt: Date;
  attempts: number;
}

export class VerificationDeliveryLeaseError extends Error {
  readonly code = 'VERIFICATION_DELIVERY_LEASE_LOST';

  constructor(message = 'Verification delivery lease is no longer owned by this worker') {
    super(message);
    this.name = 'VerificationDeliveryLeaseError';
  }
}

export class PostgresVerificationDeliveryQueue {
  private readonly leaseMs: number;
  private readonly maxAttempts: number;

  constructor(
    private readonly pool: Pool,
    options: { leaseMs?: number; maxAttempts?: number } = {},
  ) {
    this.leaseMs = options.leaseMs ?? 60_000;
    this.maxAttempts = options.maxAttempts ?? 5;
  }

  async claim(workerId: string, at = new Date()): Promise<ClaimedVerificationDelivery | null> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `
          update verification_jobs vj
          set status = 'failed', error_code = 'VERIFICATION_SCOPE_MISMATCH',
            completed_at = $1, claimed_by = null, claimed_at = null,
            lease_expires_at = null, updated_at = now()
          where vj.status not in ('delivered', 'failed')
            and not exists (
              select 1
              from verification_sessions vs
              join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
              where vs.id = vj.verification_session_id
                and vs.organization_id = vj.organization_id
                and vs.store_id = vj.store_id
            )
        `,
        [at],
      );
      await this.failExpired(client, at);
      await this.failExhausted(client, at);

      const leaseExpiresAt = new Date(at.getTime() + this.leaseMs);
      const result = await client.query<{
        id: string;
        verification_session_id: string;
        organization_id: string;
        store_id: string;
        purpose: string;
        phone_hash: string;
        otp_hash: string;
        payload_encrypted: string;
        expires_at: Date;
        attempts: number;
      }>(
        `
          with candidate as (
            select vj.id
            from verification_jobs vj
            join verification_sessions vs
              on vs.id = vj.verification_session_id
              and vs.organization_id = vj.organization_id
              and vs.store_id = vj.store_id
            join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
            join lateral (
              select oa.otp_hash
              from otp_attempts oa
              where oa.verification_session_id = vs.id
              order by oa.created_at desc, oa.id desc
              limit 1
            ) latest_attempt on true
            where vj.job_type = 'send_otp'
              and vj.attempts < $4
              and vs.status = 'queued'
              and vs.expires_at > $2
              and (
                (vj.status in ('queued', 'retry_scheduled')
                  and coalesce(vj.next_attempt_at, vj.created_at) <= $2)
                or (vj.status in ('claimed', 'processing')
                  and (vj.lease_expires_at is null or vj.lease_expires_at <= $2))
              )
            order by
              case when vj.status in ('claimed', 'processing') then 0 else 1 end,
              coalesce(vj.lease_expires_at, vj.next_attempt_at, vj.created_at),
              vj.id
            for update of vj skip locked
            limit 1
          ), claimed as (
            update verification_jobs vj
            set status = 'claimed', claimed_by = $1, claimed_at = $2,
              lease_expires_at = $3, completed_at = null, updated_at = now()
            from candidate
            where vj.id = candidate.id
            returning vj.*
          )
          select
            claimed.id, claimed.verification_session_id, claimed.organization_id,
            claimed.store_id, vs.purpose, vs.phone_hash, oa.otp_hash,
            claimed.payload_encrypted, vs.expires_at, claimed.attempts
          from claimed
          join verification_sessions vs on vs.id = claimed.verification_session_id
          join lateral (
            select otp_hash from otp_attempts
            where verification_session_id = vs.id
            order by created_at desc, id desc
            limit 1
          ) oa on true
        `,
        [workerId, at, leaseExpiresAt, this.maxAttempts],
      );
      await client.query('commit');
      const row = result.rows[0];
      return row
        ? {
            id: row.id,
            verificationId: row.verification_session_id,
            organizationId: row.organization_id,
            storeId: row.store_id,
            purpose: row.purpose,
            phoneHash: row.phone_hash,
            otpHash: row.otp_hash,
            payloadEncrypted: row.payload_encrypted,
            expiresAt: row.expires_at,
            attempts: row.attempts,
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
        update verification_jobs vj
        set status = 'processing', attempts = attempts + 1,
          lease_expires_at = $4, updated_at = now()
        from verification_sessions vs
        where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'claimed'
          and vj.lease_expires_at > $3
          and vs.id = vj.verification_session_id
          and vs.status = 'queued' and vs.expires_at > $3
      `,
      [jobId, workerId, at, new Date(at.getTime() + this.leaseMs)],
    );
    this.assertOwned(result.rowCount);
  }

  async delivered(
    jobId: string,
    workerId: string,
    providerMessageId: string,
    at = new Date(),
  ): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      const result = await client.query<{ verification_session_id: string }>(
        `
          update verification_jobs vj
          set status = 'delivered', provider_message_id = $3, error_code = null,
            completed_at = $4, claimed_by = null, claimed_at = null,
            lease_expires_at = null, updated_at = now()
          from verification_sessions vs
          where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'processing'
            and vj.lease_expires_at > $4
            and vs.id = vj.verification_session_id
            and vs.status = 'queued' and vs.expires_at > $4
          returning vj.verification_session_id
        `,
        [jobId, workerId, providerMessageId, at],
      );
      this.assertOwned(result.rowCount);
      const verificationId = result.rows[0]?.verification_session_id;
      await client.query(
        `update verification_sessions set status = 'pending', updated_at = now() where id = $1`,
        [verificationId],
      );
      await client.query(
        `
          update otp_attempts set provider_message_id = $2, sent_at = $3,
            failed_at = null, updated_at = now()
          where id = (
            select id from otp_attempts where verification_session_id = $1
            order by created_at desc, id desc limit 1
          )
        `,
        [verificationId, providerMessageId, at],
      );
      await client.query('commit');
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  async retry(
    jobId: string,
    workerId: string,
    input: { errorCode: string; nextAttemptAt: Date; at: Date },
  ): Promise<void> {
    const result = await this.pool.query(
      `
        update verification_jobs
        set status = 'retry_scheduled', next_attempt_at = $3, error_code = $4,
          completed_at = null, claimed_by = null, claimed_at = null,
          lease_expires_at = null, updated_at = now()
        where id = $1 and claimed_by = $2 and status = 'processing'
          and lease_expires_at > $5
      `,
      [jobId, workerId, input.nextAttemptAt, input.errorCode, input.at],
    );
    this.assertOwned(result.rowCount);
  }

  async failed(
    jobId: string,
    workerId: string,
    input: { errorCode: string; at: Date },
  ): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      const result = await client.query<{
        verification_session_id: string;
        organization_id: string;
        store_id: string;
      }>(
        `
          update verification_jobs
          set status = 'failed', error_code = $3, completed_at = $4,
            claimed_by = null, claimed_at = null, lease_expires_at = null,
            updated_at = now()
          where id = $1 and claimed_by = $2 and status in ('claimed', 'processing')
            and lease_expires_at > $4
          returning verification_session_id, organization_id, store_id
        `,
        [jobId, workerId, input.errorCode, input.at],
      );
      this.assertOwned(result.rowCount);
      const row = result.rows[0];
      if (!row) throw new VerificationDeliveryLeaseError();
      await this.failSession(client, row.verification_session_id, input.errorCode, input.at);
      await client.query('commit');
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  reporterFor(
    delivery: ClaimedVerificationDelivery,
    workerId: string,
  ): VerificationDeliveryReporter {
    return {
      delivered: async (jobId, providerMessageId, at) => {
        this.assertIdentity(delivery, jobId);
        await this.delivered(jobId, workerId, providerMessageId, at);
      },
      retry: async (jobId, errorCode, nextAttemptAt, at) => {
        this.assertIdentity(delivery, jobId);
        await this.retry(jobId, workerId, { errorCode, nextAttemptAt, at });
      },
      failed: async (jobId, errorCode, at) => {
        this.assertIdentity(delivery, jobId);
        await this.failed(jobId, workerId, { errorCode, at });
      },
    };
  }

  private async failExpired(client: PoolClient, at: Date): Promise<void> {
    const expired = await client.query<{ verification_session_id: string }>(
      `
        update verification_jobs vj
        set status = 'failed', error_code = 'OTP_EXPIRED_BEFORE_DELIVERY',
          completed_at = $1, claimed_by = null, claimed_at = null,
          lease_expires_at = null, updated_at = now()
        from verification_sessions vs
        where vj.verification_session_id = vs.id
          and vj.organization_id = vs.organization_id and vj.store_id = vs.store_id
          and vj.status not in ('delivered', 'failed') and vs.expires_at <= $1
        returning vj.verification_session_id
      `,
      [at],
    );
    for (const row of expired.rows) {
      await this.failSession(
        client,
        row.verification_session_id,
        'OTP_EXPIRED_BEFORE_DELIVERY',
        at,
        true,
      );
    }
  }

  private async failExhausted(client: PoolClient, at: Date): Promise<void> {
    const exhausted = await client.query<{ verification_session_id: string }>(
      `
        update verification_jobs
        set status = 'failed', error_code = 'LEASE_EXPIRED', completed_at = $1,
          claimed_by = null, claimed_at = null, lease_expires_at = null,
          updated_at = now()
        where status in ('claimed', 'processing')
          and (lease_expires_at is null or lease_expires_at <= $1)
          and attempts >= $2
        returning verification_session_id
      `,
      [at, this.maxAttempts],
    );
    for (const row of exhausted.rows) {
      await this.failSession(client, row.verification_session_id, 'LEASE_EXPIRED', at);
    }
  }

  private async failSession(
    client: PoolClient,
    verificationId: string,
    errorCode: string,
    at: Date,
    expired = false,
  ): Promise<void> {
    const session = await client.query<{
      organization_id: string;
      store_id: string;
      purpose: string;
    }>(
      `
        update verification_sessions
        set status = $2, updated_at = now()
        where id = $1
        returning organization_id, store_id, purpose
      `,
      [verificationId, expired ? 'expired' : 'delivery_failed'],
    );
    await client.query(
      `
        update otp_attempts set failed_at = $2, updated_at = now()
        where verification_session_id = $1
      `,
      [verificationId, at],
    );
    const row = session.rows[0];
    if (row) {
      await enqueueVerificationFailure(client, {
        id: `evt_verification_failed_${verificationId}`,
        type: 'verification.failed',
        organizationId: row.organization_id,
        storeId: row.store_id,
        occurredAt: at.toISOString(),
        payload: { verificationId, purpose: row.purpose, errorCode },
      });
    }
  }

  private assertOwned(rowCount: number | null): void {
    if (rowCount !== 1) throw new VerificationDeliveryLeaseError();
  }

  private assertIdentity(delivery: ClaimedVerificationDelivery, jobId: string): void {
    if (delivery.id !== jobId) {
      throw new VerificationDeliveryLeaseError(
        'Verification delivery identity does not match claim',
      );
    }
  }
}

async function enqueueVerificationFailure(client: PoolClient, event: DomainEvent): Promise<void> {
  await client.query(
    `
      insert into webhook_deliveries (
        id, endpoint_id, organization_id, store_id, event_id, event_type,
        event_payload, occurred_at, status, next_attempt_at
      )
      select
        'whd_' || md5(we.id || ':' || $1), we.id, $2, $3, $1, $4,
        $5::jsonb, $6, 'queued', now()
      from webhook_endpoints we
      where we.organization_id = $2
        and (we.store_id is null or we.store_id = $3)
        and we.status = 'active'
        and we.events @> jsonb_build_array($4::text)
      on conflict (endpoint_id, event_id) do nothing
    `,
    [
      event.id,
      event.organizationId,
      event.storeId ?? null,
      event.type,
      JSON.stringify(event),
      event.occurredAt,
    ],
  );
}
