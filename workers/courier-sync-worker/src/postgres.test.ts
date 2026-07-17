import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { CourierJobLeaseError, PostgresCourierJobQueue } from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL courier job leases', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 12 });
  const suffix = randomUUID();
  const organizationId = `org_worker_${suffix}`;
  const storeId = `sto_worker_${suffix}`;
  const otherStoreId = `sto_worker_other_${suffix}`;
  const accountId = `ca_worker_${suffix}`;

  beforeAll(async () => {
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `insert into organizations (id, name, slug) values ($1, 'Worker Lease Merchant', $2)`,
        [organizationId, `worker-lease-${suffix}`],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom')`,
        [storeId, organizationId],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Other', 'custom')`,
        [otherStoreId, organizationId],
      );
      await client.query(
        `insert into courier_accounts (id, store_id, provider, status) values ($1, $2, 'steadfast', 'connected')`,
        [accountId, storeId],
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
    await pool.query('delete from organizations where id = $1', [organizationId]);
    await pool.end();
  });

  it('lets competing workers claim different due jobs and does not steal fresh leases', async () => {
    const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T00:00:00.000Z');
    const firstJobId = await insertJob('compete-a', { scheduledAt: at });
    const secondJobId = await insertJob('compete-b', { scheduledAt: at });

    const [first, second] = await Promise.all([
      queue.claim(`worker-a-${suffix}`, at),
      queue.claim(`worker-b-${suffix}`, at),
    ]);

    expect(first).not.toBeNull();
    expect(second).not.toBeNull();
    expect(new Set([first?.id, second?.id])).toEqual(new Set([firstJobId, secondJobId]));
    await expect(queue.claim(`worker-c-${suffix}`, at)).resolves.toBeNull();

    const stored = await pool.query<{ status: string; claimed_by: string }>(
      `select status, claimed_by from courier_jobs where id = any($1::text[]) order by id`,
      [[firstJobId, secondJobId]],
    );
    expect(stored.rows.every((row) => row.status === 'claimed')).toBe(true);
    expect(new Set(stored.rows.map((row) => row.claimed_by))).toEqual(
      new Set([`worker-a-${suffix}`, `worker-b-${suffix}`]),
    );
  });

  it('reclaims an expired processing lease and rejects the previous owner', async () => {
    const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T01:00:00.000Z');
    const jobId = await insertJob('expired-processing', {
      status: 'processing',
      attempts: 1,
      claimedBy: `old-worker-${suffix}`,
      claimedAt: new Date(at.getTime() - 120_000),
      leaseExpiresAt: new Date(at.getTime() - 60_000),
      startedAt: new Date(at.getTime() - 120_000),
      scheduledAt: new Date(at.getTime() - 180_000),
    });

    const claimed = await queue.claim(`new-worker-${suffix}`, at);
    expect(claimed?.id).toBe(jobId);
    await expect(
      queue.completed(jobId, `old-worker-${suffix}`, new Date(at.getTime() + 1_000)),
    ).rejects.toBeInstanceOf(CourierJobLeaseError);

    await queue.started(jobId, `new-worker-${suffix}`, new Date(at.getTime() + 1_000));
    await queue.completed(jobId, `new-worker-${suffix}`, new Date(at.getTime() + 2_000));
    const stored = await pool.query<{
      status: string;
      attempts: number;
      claimed_by: string | null;
      lease_expires_at: Date | null;
    }>(`select status, attempts, claimed_by, lease_expires_at from courier_jobs where id = $1`, [
      jobId,
    ]);
    expect(stored.rows[0]).toMatchObject({
      status: 'completed',
      attempts: 2,
      claimed_by: null,
      lease_expires_at: null,
    });
  });

  it('clears lease ownership when a retryable attempt is requeued', async () => {
    const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T02:00:00.000Z');
    const jobId = await insertJob('retryable', { scheduledAt: at });
    await expect(queue.claim(`retry-worker-${suffix}`, at)).resolves.toMatchObject({ id: jobId });
    await queue.started(jobId, `retry-worker-${suffix}`, new Date(at.getTime() + 1_000));
    await queue.failed(
      jobId,
      `retry-worker-${suffix}`,
      'PROVIDER_TIMEOUT',
      true,
      new Date(at.getTime() + 2_000),
    );

    const stored = await pool.query<{
      status: string;
      attempts: number;
      error_code: string;
      claimed_by: string | null;
      lease_expires_at: Date | null;
      scheduled_at: Date;
    }>(
      `select status, attempts, error_code, claimed_by, lease_expires_at, scheduled_at from courier_jobs where id = $1`,
      [jobId],
    );
    expect(stored.rows[0]).toMatchObject({
      status: 'queued',
      attempts: 1,
      error_code: 'PROVIDER_TIMEOUT',
      claimed_by: null,
      lease_expires_at: null,
    });
    expect(stored.rows[0]?.scheduled_at.getTime()).toBeGreaterThan(at.getTime() + 2_000);
  });

  it('moves an exhausted expired lease to failed instead of reclaiming it', async () => {
    const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000, maxAttempts: 5 });
    const at = new Date('2026-07-17T03:00:00.000Z');
    const jobId = await insertJob('exhausted', {
      status: 'processing',
      attempts: 5,
      claimedBy: `dead-worker-${suffix}`,
      claimedAt: new Date(at.getTime() - 120_000),
      leaseExpiresAt: new Date(at.getTime() - 60_000),
      startedAt: new Date(at.getTime() - 120_000),
      scheduledAt: new Date(at.getTime() - 180_000),
    });

    await expect(queue.claim(`recovery-worker-${suffix}`, at)).resolves.toBeNull();
    const stored = await pool.query<{
      status: string;
      error_code: string;
      completed_at: Date | null;
      claimed_by: string | null;
    }>(`select status, error_code, completed_at, claimed_by from courier_jobs where id = $1`, [
      jobId,
    ]);
    expect(stored.rows[0]).toMatchObject({
      status: 'failed',
      error_code: 'LEASE_EXPIRED',
      claimed_by: null,
    });
    expect(stored.rows[0]?.completed_at?.toISOString()).toBe(at.toISOString());
  });

  it('derives organization, store, and provider scope from the courier account', async () => {
    const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T04:00:00.000Z');
    const jobId = await insertJob('authoritative-scope', {
      scheduledAt: at,
      payload: {
        organizationId: 'org_tampered',
        storeId: otherStoreId,
        provider: 'pathao',
        phone: '01712345678',
        phoneHash: `phone-${suffix}`,
        force: false,
      },
    });

    await expect(queue.claim(`scope-worker-${suffix}`, at)).resolves.toMatchObject({
      id: jobId,
      organizationId,
      storeId,
      provider: 'steadfast',
    });
  });

  async function insertJob(
    label: string,
    options: {
      status?: string;
      attempts?: number;
      scheduledAt?: Date;
      startedAt?: Date;
      claimedBy?: string;
      claimedAt?: Date;
      leaseExpiresAt?: Date;
      payload?: unknown;
    } = {},
  ): Promise<string> {
    const jobId = `cj_${label}_${suffix}`;
    const payload =
      options.payload ??
      ({
        organizationId,
        storeId,
        provider: 'steadfast',
        phone: '01712345678',
        phoneHash: `phone-${label}-${suffix}`,
        force: false,
      } satisfies Record<string, unknown>);
    await pool.query(
      `
        insert into courier_jobs (
          id, courier_account_id, job_type, status, attempts, scheduled_at,
          started_at, claimed_by, claimed_at, lease_expires_at, payload
        ) values ($1, $2, 'customer_observation_refresh', $3, $4, $5, $6, $7, $8, $9, $10::jsonb)
      `,
      [
        jobId,
        accountId,
        options.status ?? 'queued',
        options.attempts ?? 0,
        options.scheduledAt ?? new Date('2026-07-17T00:00:00.000Z'),
        options.startedAt ?? null,
        options.claimedBy ?? null,
        options.claimedAt ?? null,
        options.leaseExpiresAt ?? null,
        JSON.stringify(payload),
      ],
    );
    return jobId;
  }
});
