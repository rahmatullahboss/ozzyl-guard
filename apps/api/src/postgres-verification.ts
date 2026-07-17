import { randomInt, randomUUID } from 'node:crypto';
import type { Pool, PoolClient } from 'pg';
import type { EnvelopeCipher } from '@ozzyl/encryption';
import type { DomainEvent } from '@ozzyl/shared-types';
import { VerificationError, hashOtp, verifyOtp } from '@ozzyl/verification';
import type { OtpVerifier, VerificationRequestQueue } from './index.js';

interface VerificationServiceOptions {
  otpSecret: string;
  cipher: EnvelopeCipher;
  expiryMs?: number;
  maxAttempts?: number;
  perPhoneWindowMs?: number;
  perPhoneLimit?: number;
  now?: () => Date;
  idFactory?: (prefix: string) => string;
}

export class PostgresVerificationService implements VerificationRequestQueue, OtpVerifier {
  private readonly expiryMs: number;
  private readonly maxAttempts: number;
  private readonly perPhoneWindowMs: number;
  private readonly perPhoneLimit: number;
  private readonly now: () => Date;
  private readonly idFactory: (prefix: string) => string;

  constructor(
    private readonly pool: Pool,
    private readonly options: VerificationServiceOptions,
  ) {
    if (options.otpSecret.length < 16)
      throw new Error('OTP_HASH_SECRET must be at least 16 characters');
    this.expiryMs = options.expiryMs ?? 5 * 60 * 1_000;
    this.maxAttempts = options.maxAttempts ?? 5;
    this.perPhoneWindowMs = options.perPhoneWindowMs ?? 60 * 60 * 1_000;
    this.perPhoneLimit = options.perPhoneLimit ?? 5;
    this.now = options.now ?? (() => new Date());
    this.idFactory = options.idFactory ?? ((prefix) => `${prefix}_${randomUUID()}`);
  }

  async enqueueSend(input: {
    organizationId: string;
    storeId: string;
    assessmentId?: string;
    phone: string;
    phoneHash: string;
    purpose: string;
    idempotencyKey: string;
  }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.storeId}:otp-send:${input.idempotencyKey}`,
      ]);
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.storeId}:otp-phone:${input.phoneHash}`,
      ]);

      const existing = await client.query<{ id: string; expires_at: Date }>(
        `
          select id, expires_at
          from verification_sessions
          where organization_id = $1 and store_id = $2 and idempotency_key = $3
          limit 1
        `,
        [input.organizationId, input.storeId, input.idempotencyKey],
      );
      const existingRow = existing.rows[0];
      if (existingRow) {
        await client.query('commit');
        return {
          verificationId: existingRow.id,
          expiresAt: existingRow.expires_at.toISOString(),
          replay: true,
        };
      }

      const scopedStore = await client.query(
        `
          select 1
          from stores s
          join organizations o on o.id = s.organization_id
          where s.id = $1 and s.organization_id = $2
            and s.status = 'active' and o.status = 'active'
          limit 1
        `,
        [input.storeId, input.organizationId],
      );
      if (scopedStore.rowCount !== 1) {
        throw new VerificationError('NOT_FOUND', 'Verification store scope was not found');
      }
      if (input.assessmentId) {
        const assessment = await client.query(
          `
            select 1 from risk_assessments
            where id = $1 and organization_id = $2 and store_id = $3
            limit 1
          `,
          [input.assessmentId, input.organizationId, input.storeId],
        );
        if (assessment.rowCount !== 1) {
          throw new VerificationError('NOT_FOUND', 'Assessment was not found for this store');
        }
      }

      const now = this.now();
      const recent = await client.query<{ count: number }>(
        `
          select count(*)::int as count
          from verification_sessions
          where organization_id = $1 and store_id = $2 and phone_hash = $3
            and created_at >= $4
        `,
        [
          input.organizationId,
          input.storeId,
          input.phoneHash,
          new Date(now.getTime() - this.perPhoneWindowMs),
        ],
      );
      if ((recent.rows[0]?.count ?? 0) >= this.perPhoneLimit) {
        throw new VerificationError('RATE_LIMITED', 'Too many OTP requests for this phone');
      }

      const verificationId = this.idFactory('ver');
      const attemptId = this.idFactory('otpa');
      const jobId = this.idFactory('vjob');
      const otp = String(randomInt(0, 1_000_000)).padStart(6, '0');
      const expiresAt = new Date(now.getTime() + this.expiryMs);
      const payloadEncrypted = this.options.cipher.encrypt(
        {
          verificationId,
          organizationId: input.organizationId,
          storeId: input.storeId,
          phone: input.phone,
          otp,
          purpose: input.purpose,
        },
        `verification-job:${jobId}`,
      );

      await client.query(
        `
          insert into verification_sessions (
            id, organization_id, store_id, assessment_id, phone_hash, purpose,
            channel, status, idempotency_key, max_attempts, expires_at
          ) values ($1, $2, $3, $4, $5, $6, 'otp', 'queued', $7, $8, $9)
        `,
        [
          verificationId,
          input.organizationId,
          input.storeId,
          input.assessmentId ?? null,
          input.phoneHash,
          input.purpose,
          input.idempotencyKey,
          this.maxAttempts,
          expiresAt,
        ],
      );
      await client.query(
        `
          insert into otp_attempts (
            id, verification_session_id, otp_hash, attempt_count, expires_at
          ) values ($1, $2, $3, 0, $4)
        `,
        [
          attemptId,
          verificationId,
          hashOtp(verificationId, otp, this.options.otpSecret),
          expiresAt,
        ],
      );
      await client.query(
        `
          insert into verification_jobs (
            id, verification_session_id, organization_id, store_id, job_type,
            payload_encrypted, status, next_attempt_at
          ) values ($1, $2, $3, $4, 'send_otp', $5, 'queued', $6)
        `,
        [jobId, verificationId, input.organizationId, input.storeId, payloadEncrypted, now],
      );
      await client.query('commit');
      return { verificationId, expiresAt: expiresAt.toISOString(), replay: false };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  async verify(input: {
    organizationId: string;
    storeId: string;
    verificationId: string;
    otp: string;
  }): Promise<{ verified: true }> {
    const client = await this.pool.connect();
    let committed = false;
    try {
      await client.query('begin');
      const session = await client.query<{
        id: string;
        organization_id: string;
        store_id: string;
        purpose: string;
        status: string;
        max_attempts: number;
        expires_at: Date;
      }>(
        `
          select id, organization_id, store_id, purpose, status, max_attempts, expires_at
          from verification_sessions
          where id = $1 and organization_id = $2 and store_id = $3
          for update
        `,
        [input.verificationId, input.organizationId, input.storeId],
      );
      const record = session.rows[0];
      if (!record) throw new VerificationError('NOT_FOUND', 'Verification session was not found');
      if (record.status === 'verified') {
        await client.query('commit');
        committed = true;
        return { verified: true };
      }
      if (record.status === 'queued') {
        throw new VerificationError('DELIVERY_PENDING', 'OTP delivery is still pending');
      }
      if (record.status === 'delivery_failed') {
        throw new VerificationError('DELIVERY_FAILED', 'OTP delivery failed');
      }
      if (record.status === 'locked') {
        throw new VerificationError('MAX_ATTEMPTS', 'Maximum OTP attempts reached');
      }

      const attempt = await client.query<{
        id: string;
        otp_hash: string;
        attempt_count: number;
      }>(
        `
          select id, otp_hash, attempt_count
          from otp_attempts
          where verification_session_id = $1
          order by created_at desc, id desc
          limit 1
          for update
        `,
        [record.id],
      );
      const otpAttempt = attempt.rows[0];
      if (!otpAttempt) throw new VerificationError('NOT_FOUND', 'OTP attempt was not found');
      const now = this.now();
      if (record.expires_at.getTime() <= now.getTime()) {
        await client.query(
          `update verification_sessions set status = 'expired', updated_at = now() where id = $1`,
          [record.id],
        );
        await enqueueVerificationEvent(client, {
          id: `evt_verification_failed_${record.id}`,
          type: 'verification.failed',
          organizationId: record.organization_id,
          storeId: record.store_id,
          occurredAt: now.toISOString(),
          payload: { verificationId: record.id, purpose: record.purpose, errorCode: 'EXPIRED' },
        });
        await client.query('commit');
        committed = true;
        throw new VerificationError('INVALID_OR_EXPIRED_OTP', 'OTP is invalid or expired');
      }

      const nextAttempts = otpAttempt.attempt_count + 1;
      const valid = verifyOtp(record.id, input.otp, otpAttempt.otp_hash, this.options.otpSecret);
      if (!valid) {
        const locked = nextAttempts >= record.max_attempts;
        await client.query(
          `update otp_attempts set attempt_count = $2, updated_at = now() where id = $1`,
          [otpAttempt.id, nextAttempts],
        );
        if (locked) {
          await client.query(
            `update verification_sessions set status = 'locked', updated_at = now() where id = $1`,
            [record.id],
          );
          await enqueueVerificationEvent(client, {
            id: `evt_verification_failed_${record.id}`,
            type: 'verification.failed',
            organizationId: record.organization_id,
            storeId: record.store_id,
            occurredAt: now.toISOString(),
            payload: {
              verificationId: record.id,
              purpose: record.purpose,
              errorCode: 'MAX_ATTEMPTS',
            },
          });
        }
        await client.query('commit');
        committed = true;
        throw new VerificationError('INVALID_OR_EXPIRED_OTP', 'OTP is invalid or expired');
      }

      await client.query(
        `update otp_attempts set attempt_count = $2, updated_at = now() where id = $1`,
        [otpAttempt.id, nextAttempts],
      );
      await client.query(
        `
          update verification_sessions
          set status = 'verified', verified_at = $2, updated_at = now()
          where id = $1
        `,
        [record.id, now],
      );
      await enqueueVerificationEvent(client, {
        id: `evt_verification_verified_${record.id}`,
        type: 'verification.verified',
        organizationId: record.organization_id,
        storeId: record.store_id,
        occurredAt: now.toISOString(),
        payload: { verificationId: record.id, purpose: record.purpose },
      });
      await client.query('commit');
      committed = true;
      return { verified: true };
    } catch (error) {
      if (!committed) await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

async function enqueueVerificationEvent(client: PoolClient, event: DomainEvent): Promise<void> {
  await client.query(
    `
      insert into webhook_deliveries (
        id, endpoint_id, organization_id, store_id, event_id, event_type,
        event_payload, occurred_at, status, next_attempt_at
      )
      select
        'whd_' || md5(we.id || ':' || $1),
        we.id,
        $2,
        $3,
        $1,
        $4,
        $5::jsonb,
        $6,
        'queued',
        now()
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
