import { randomUUID } from 'node:crypto';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import { hashOtp } from '@ozzyl/verification';
import { PostgresVerificationDeliveryQueue, VerificationDeliveryLeaseError } from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL verification delivery leases', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 12 });
  const suffix = randomUUID();
  const organizationId = `org_verification_${suffix}`;
  const storeId = `sto_verification_${suffix}`;
  const otherOrganizationId = `org_verification_other_${suffix}`;
  const otherStoreId = `sto_verification_other_${suffix}`;
  const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 9), 'test-v1');
  const otpSecret = 'o'.repeat(32);

  beforeAll(async () => {
    await pool.query(
      `insert into organizations (id, name, slug) values ($1, 'Verification Merchant', $2), ($3, 'Other Verification Merchant', $4)`,
      [
        organizationId,
        `verification-${suffix}`,
        otherOrganizationId,
        `verification-other-${suffix}`,
      ],
    );
    await pool.query(
      `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom'), ($3, $4, 'Other', 'custom')`,
      [storeId, organizationId, otherStoreId, otherOrganizationId],
    );
  });

  afterEach(async () => {
    await pool.query('delete from verification_sessions where organization_id = any($1::text[])', [
      [organizationId, otherOrganizationId],
    ]);
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationId, otherOrganizationId],
    ]);
    await pool.end();
  });

  it('lets competing workers claim different due jobs and protects fresh leases', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T12:00:00.000Z');
    const firstId = await insertJob('compete-a', { at });
    const secondId = await insertJob('compete-b', { at });
    const [first, second] = await Promise.all([
      queue.claim(`verification-a-${suffix}`, at),
      queue.claim(`verification-b-${suffix}`, at),
    ]);
    expect(new Set([first?.id, second?.id])).toEqual(new Set([firstId, secondId]));
    await expect(queue.claim(`verification-c-${suffix}`, at)).resolves.toBeNull();
  });

  it('rejects an expired owner and lets a new worker recover the job', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T13:00:00.000Z');
    const jobId = await insertJob('expired', {
      at: new Date(at.getTime() - 180_000),
      status: 'processing',
      attempts: 1,
      claimedBy: `old-verification-${suffix}`,
      claimedAt: new Date(at.getTime() - 120_000),
      leaseExpiresAt: new Date(at.getTime() - 60_000),
      expiresAt: new Date(at.getTime() + 600_000),
    });
    await expect(
      queue.delivered(jobId, `old-verification-${suffix}`, 'msg_old', at),
    ).rejects.toBeInstanceOf(VerificationDeliveryLeaseError);
    const claimed = await queue.claim(`new-verification-${suffix}`, at);
    expect(claimed?.id).toBe(jobId);
    await queue.started(jobId, `new-verification-${suffix}`, new Date(at.getTime() + 1_000));
    await queue.delivered(
      jobId,
      `new-verification-${suffix}`,
      'msg_new',
      new Date(at.getTime() + 2_000),
    );
    const stored = await pool.query<{
      status: string;
      attempts: number;
      claimed_by: string | null;
    }>(`select status, attempts, claimed_by from verification_jobs where id = $1`, [jobId]);
    expect(stored.rows[0]).toEqual({ status: 'delivered', attempts: 2, claimed_by: null });
  });

  it('clears ownership when retryable delivery is rescheduled', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T14:00:00.000Z');
    const jobId = await insertJob('retry', { at, expiresAt: new Date(at.getTime() + 600_000) });
    await queue.claim(`retry-verification-${suffix}`, at);
    await queue.started(jobId, `retry-verification-${suffix}`, new Date(at.getTime() + 1_000));
    const nextAttemptAt = new Date(at.getTime() + 31_000);
    await queue.retry(jobId, `retry-verification-${suffix}`, {
      errorCode: 'PROVIDER_UNAVAILABLE',
      nextAttemptAt,
      at: new Date(at.getTime() + 2_000),
    });
    const stored = await pool.query<{
      status: string;
      attempts: number;
      error_code: string;
      claimed_by: string | null;
      next_attempt_at: Date;
    }>(
      `select status, attempts, error_code, claimed_by, next_attempt_at from verification_jobs where id = $1`,
      [jobId],
    );
    expect(stored.rows[0]).toMatchObject({
      status: 'retry_scheduled',
      attempts: 1,
      error_code: 'PROVIDER_UNAVAILABLE',
      claimed_by: null,
    });
    expect(stored.rows[0]?.next_attempt_at.toISOString()).toBe(nextAttemptAt.toISOString());
  });

  it('fails exhausted stale work and marks its session delivery_failed', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000, maxAttempts: 5 });
    const at = new Date('2026-07-17T15:00:00.000Z');
    const jobId = await insertJob('exhausted', {
      at: new Date(at.getTime() - 180_000),
      status: 'processing',
      attempts: 5,
      claimedBy: `dead-verification-${suffix}`,
      claimedAt: new Date(at.getTime() - 120_000),
      leaseExpiresAt: new Date(at.getTime() - 60_000),
      expiresAt: new Date(at.getTime() + 600_000),
    });
    await expect(queue.claim(`recovery-verification-${suffix}`, at)).resolves.toBeNull();
    const stored = await pool.query<{ status: string; error_code: string; session_status: string }>(
      `
        select vj.status, vj.error_code, vs.status as session_status
        from verification_jobs vj join verification_sessions vs on vs.id = vj.verification_session_id
        where vj.id = $1
      `,
      [jobId],
    );
    expect(stored.rows[0]).toEqual({
      status: 'failed',
      error_code: 'LEASE_EXPIRED',
      session_status: 'delivery_failed',
    });
  });

  it('fails a job whose persisted scope does not match its session', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T16:00:00.000Z');
    const jobId = await insertJob('scope', {
      at,
      jobOrganizationId: otherOrganizationId,
      jobStoreId: otherStoreId,
      expiresAt: new Date(at.getTime() + 600_000),
    });
    await expect(queue.claim(`scope-verification-${suffix}`, at)).resolves.toBeNull();
    const stored = await pool.query<{
      status: string;
      error_code: string;
      session_status: string;
    }>(
      `
        select vj.status, vj.error_code, vs.status as session_status
        from verification_jobs vj
        join verification_sessions vs on vs.id = vj.verification_session_id
        where vj.id = $1
      `,
      [jobId],
    );
    expect(stored.rows[0]).toEqual({
      status: 'failed',
      error_code: 'VERIFICATION_SCOPE_MISMATCH',
      session_status: 'delivery_failed',
    });
  });

  async function insertJob(
    label: string,
    options: {
      at: Date;
      expiresAt?: Date;
      status?: string;
      attempts?: number;
      claimedBy?: string;
      claimedAt?: Date;
      leaseExpiresAt?: Date;
      jobOrganizationId?: string;
      jobStoreId?: string;
    },
  ): Promise<string> {
    const verificationId = `ver_${label}_${suffix}`;
    const attemptId = `otpa_${label}_${suffix}`;
    const jobId = `vjob_${label}_${suffix}`;
    const otp = '123456';
    const expiresAt = options.expiresAt ?? new Date(options.at.getTime() + 600_000);
    const payload = cipher.encrypt(
      { verificationId, organizationId, storeId, phone: '01712345678', otp, purpose: 'test' },
      `verification-job:${jobId}`,
    );
    await pool.query(
      `
        insert into verification_sessions (
          id, organization_id, store_id, phone_hash, purpose, channel, status,
          idempotency_key, max_attempts, expires_at
        ) values ($1, $2, $3, 'phone_hash', 'test', 'otp', 'queued', $4, 5, $5)
      `,
      [verificationId, organizationId, storeId, `idem-${label}-${suffix}`, expiresAt],
    );
    await pool.query(
      `insert into otp_attempts (id, verification_session_id, otp_hash, expires_at) values ($1, $2, $3, $4)`,
      [attemptId, verificationId, hashOtp(verificationId, otp, otpSecret), expiresAt],
    );
    await pool.query(
      `
        insert into verification_jobs (
          id, verification_session_id, organization_id, store_id, payload_encrypted,
          status, attempts, next_attempt_at, claimed_by, claimed_at, lease_expires_at
        ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      `,
      [
        jobId,
        verificationId,
        options.jobOrganizationId ?? organizationId,
        options.jobStoreId ?? storeId,
        payload,
        options.status ?? 'queued',
        options.attempts ?? 0,
        options.at,
        options.claimedBy ?? null,
        options.claimedAt ?? null,
        options.leaseExpiresAt ?? null,
      ],
    );
    return jobId;
  }
});
