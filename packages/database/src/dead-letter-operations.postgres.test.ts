import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { PostgresDurableWorkOperations } from './dead-letter-operations.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL durable work dead-letter operations', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 8 });
  const operations = new PostgresDurableWorkOperations(pool);
  const suffix = randomUUID().replaceAll('-', '');
  const ownerA = `usr_dead_owner_a_${suffix}`;
  const memberA = `usr_dead_member_a_${suffix}`;
  const ownerB = `usr_dead_owner_b_${suffix}`;
  const organizationA = `org_dead_a_${suffix}`;
  const organizationB = `org_dead_b_${suffix}`;
  const storeA = `sto_dead_a_${suffix}`;
  const storeB = `sto_dead_b_${suffix}`;
  const courierAccountA = `coa_dead_a_${suffix}`;
  const courierAccountB = `coa_dead_b_${suffix}`;
  const courierJobA = `coj_dead_a_${suffix}`;
  const courierJobB = `coj_dead_b_${suffix}`;
  const webhookEndpointA = `we_dead_a_${suffix}`;
  const webhookEndpointB = `we_dead_b_${suffix}`;
  const webhookDeliveryA = `wd_dead_a_${suffix}`;
  const webhookDeliveryB = `wd_dead_b_${suffix}`;
  const structuralWebhookA = `wd_dead_structural_${suffix}`;
  const verificationA = `ver_dead_a_${suffix}`;
  const verificationB = `ver_dead_b_${suffix}`;
  const verificationExpired = `ver_dead_expired_${suffix}`;
  const verificationJobA = `vj_dead_a_${suffix}`;
  const verificationJobB = `vj_dead_b_${suffix}`;
  const verificationJobExpired = `vj_dead_expired_${suffix}`;
  const at = new Date('2026-07-18T08:00:00.000Z');

  beforeAll(async () => {
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `
          insert into users (id, email, managed_auth_id, status)
          values
            ($1, $2, $3, 'active'),
            ($4, $5, $6, 'active'),
            ($7, $8, $9, 'active')
        `,
        [
          ownerA,
          `${ownerA}@example.com`,
          `managed-${ownerA}`,
          memberA,
          `${memberA}@example.com`,
          `managed-${memberA}`,
          ownerB,
          `${ownerB}@example.com`,
          `managed-${ownerB}`,
        ],
      );
      await client.query(
        `
          insert into organizations (id, name, slug, plan_id)
          values
            ($1, 'Dead Letter A', $2, 'plan_free'),
            ($3, 'Dead Letter B', $4, 'plan_free')
        `,
        [organizationA, `dead-letter-a-${suffix}`, organizationB, `dead-letter-b-${suffix}`],
      );
      await client.query(
        `
          insert into organization_members (organization_id, user_id, role)
          values
            ($1, $2, 'owner'),
            ($1, $3, 'member'),
            ($4, $5, 'owner')
        `,
        [organizationA, ownerA, memberA, organizationB, ownerB],
      );
      await client.query(
        `
          insert into stores (id, organization_id, name, platform, external_store_id)
          values
            ($1, $2, 'Dead Store A', 'custom', $3),
            ($4, $5, 'Dead Store B', 'custom', $6)
        `,
        [storeA, organizationA, `dead-a-${suffix}`, storeB, organizationB, `dead-b-${suffix}`],
      );
      await client.query(
        `
          insert into courier_accounts (id, store_id, provider, status)
          values
            ($1, $2, 'steadfast', 'connected'),
            ($3, $4, 'steadfast', 'connected')
        `,
        [courierAccountA, storeA, courierAccountB, storeB],
      );
      await client.query(
        `
          insert into courier_jobs (
            id, courier_account_id, job_type, status, attempts,
            scheduled_at, completed_at, error_code, payload
          ) values
            ($1, $2, 'customer_observation_refresh', 'failed', 5, $3, $3, 'NETWORK_ERROR', '{}'::jsonb),
            ($4, $5, 'customer_observation_refresh', 'failed', 5, $3, $3, 'NETWORK_ERROR', '{}'::jsonb)
        `,
        [courierJobA, courierAccountA, at, courierJobB, courierAccountB],
      );
      await client.query(
        `
          insert into webhook_endpoints (
            id, organization_id, store_id, url, secret_encrypted, events, status
          ) values
            ($1, $2, $3, 'https://merchant-a.example/webhooks', 'encrypted-secret-a', '["assessment.completed"]'::jsonb, 'active'),
            ($4, $5, $6, 'https://merchant-b.example/webhooks', 'encrypted-secret-b', '["assessment.completed"]'::jsonb, 'active')
        `,
        [webhookEndpointA, organizationA, storeA, webhookEndpointB, organizationB, storeB],
      );
      await client.query(
        `
          insert into webhook_deliveries (
            id, endpoint_id, organization_id, store_id, event_id, event_type,
            event_payload, occurred_at, status, attempts, error_code, completed_at
          ) values
            ($1, $2, $3, $4, $5, 'assessment.completed', '{}'::jsonb, $6, 'failed', 5, 'NETWORK_ERROR', $6),
            ($7, $8, $9, $10, $11, 'assessment.completed', '{}'::jsonb, $6, 'failed', 5, 'NETWORK_ERROR', $6),
            ($12, $2, $3, $4, $13, 'assessment.completed', '{}'::jsonb, $6, 'failed', 1, 'INVALID_EVENT_PAYLOAD', $6)
        `,
        [
          webhookDeliveryA,
          webhookEndpointA,
          organizationA,
          storeA,
          `evt-dead-a-${suffix}`,
          at,
          webhookDeliveryB,
          webhookEndpointB,
          organizationB,
          storeB,
          `evt-dead-b-${suffix}`,
          structuralWebhookA,
          `evt-dead-structural-${suffix}`,
        ],
      );
      await client.query(
        `
          insert into verification_sessions (
            id, organization_id, store_id, phone_hash, purpose, channel,
            status, expires_at, idempotency_key, max_attempts
          ) values
            ($1, $2, $3, $4, 'confirm_order', 'sms', 'delivery_failed', $5, $6, 5),
            ($7, $8, $9, $10, 'confirm_order', 'sms', 'delivery_failed', $5, $11, 5),
            ($12, $2, $3, $13, 'confirm_order', 'sms', 'delivery_failed', $14, $15, 5)
        `,
        [
          verificationA,
          organizationA,
          storeA,
          'a'.repeat(64),
          new Date(at.getTime() + 60 * 60_000),
          `dead-ver-a-${suffix}`,
          verificationB,
          organizationB,
          storeB,
          'b'.repeat(64),
          `dead-ver-b-${suffix}`,
          verificationExpired,
          'c'.repeat(64),
          new Date(at.getTime() - 60_000),
          `dead-ver-expired-${suffix}`,
        ],
      );
      await client.query(
        `
          insert into otp_attempts (
            id, verification_session_id, otp_hash, failed_at, expires_at
          ) values
            ($1, $2, 'otp-hash-a', $3, $4),
            ($5, $6, 'otp-hash-b', $3, $4),
            ($7, $8, 'otp-hash-expired', $3, $9)
        `,
        [
          `ota_dead_a_${suffix}`,
          verificationA,
          at,
          new Date(at.getTime() + 60 * 60_000),
          `ota_dead_b_${suffix}`,
          verificationB,
          `ota_dead_expired_${suffix}`,
          verificationExpired,
          new Date(at.getTime() - 60_000),
        ],
      );
      await client.query(
        `
          insert into verification_jobs (
            id, verification_session_id, organization_id, store_id,
            payload_encrypted, status, attempts, error_code, completed_at
          ) values
            ($1, $2, $3, $4, 'encrypted-payload-a', 'failed', 5, 'PROVIDER_TIMEOUT', $5),
            ($6, $7, $8, $9, 'encrypted-payload-b', 'failed', 5, 'PROVIDER_TIMEOUT', $5),
            ($10, $11, $3, $4, 'encrypted-payload-expired', 'failed', 1, 'PROVIDER_TIMEOUT', $5)
        `,
        [
          verificationJobA,
          verificationA,
          organizationA,
          storeA,
          at,
          verificationJobB,
          verificationB,
          organizationB,
          storeB,
          verificationJobExpired,
          verificationExpired,
        ],
      );
      await client.query('commit');
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  });

  afterAll(async () => {
    await pool.query('delete from audit_events where actor_id = any($1::text[])', [
      [ownerA, memberA, ownerB],
    ]);
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationA, organizationB],
    ]);
    await pool.query('delete from users where id = any($1::text[])', [[ownerA, memberA, ownerB]]);
    await pool.end();
  });

  it('lists secret-free dead letters only inside the authorized store', async () => {
    const records = await operations.listDeadLetters({
      requestedByUserId: ownerA,
      organizationId: organizationA,
      storeId: storeA,
      at,
      limit: 20,
    });

    expect(records).toHaveLength(5);
    expect(new Set(records.map((record) => record.workType))).toEqual(
      new Set(['courier_job', 'webhook_delivery', 'verification_job']),
    );
    expect(records.every((record) => record.organizationId === organizationA)).toBe(true);
    expect(records.every((record) => record.storeId === storeA)).toBe(true);
    expect(records.find((record) => record.workId === structuralWebhookA)).toMatchObject({
      replayable: false,
      replayBlockedReason: 'STRUCTURAL_WEBHOOK_FAILURE',
    });
    expect(records.find((record) => record.workId === verificationJobExpired)).toMatchObject({
      replayable: false,
      replayBlockedReason: 'VERIFICATION_EXPIRED',
    });
    expect(JSON.stringify(records)).not.toContain('encrypted-secret');
    expect(JSON.stringify(records)).not.toContain('encrypted-payload');

    await expect(
      operations.listDeadLetters({
        requestedByUserId: memberA,
        organizationId: organizationA,
        storeId: storeA,
        at,
      }),
    ).rejects.toMatchObject({ code: 'STORE_ADMIN_REQUIRED' });
  });

  it('replays a webhook exactly once under concurrent duplicate requests', async () => {
    const input = {
      requestedByUserId: ownerA,
      organizationId: organizationA,
      storeId: storeA,
      workType: 'webhook_delivery' as const,
      workId: webhookDeliveryA,
      idempotencyKey: `replay-webhook-${suffix}`,
      at: new Date(at.getTime() + 1_000),
    };
    const results = await Promise.all([
      operations.replayDeadLetter(input),
      operations.replayDeadLetter(input),
    ]);

    expect(results.map((result) => result.replay).sort()).toEqual([false, true]);
    expect(new Set(results.map((result) => result.replayId)).size).toBe(1);
    const delivery = await pool.query<{
      status: string;
      attempts: number;
      error_code: string | null;
      response_status: number | null;
      claimed_by: string | null;
    }>(
      `
        select status, attempts, error_code, response_status, claimed_by
        from webhook_deliveries where id = $1
      `,
      [webhookDeliveryA],
    );
    expect(delivery.rows[0]).toEqual({
      status: 'queued',
      attempts: 0,
      error_code: null,
      response_status: null,
      claimed_by: null,
    });
    const evidence = await pool.query<{ count: number }>(
      `select count(*)::int as count from durable_work_replays where work_id = $1`,
      [webhookDeliveryA],
    );
    expect(evidence.rows[0]?.count).toBe(1);
    const audit = await pool.query<{ count: number }>(
      `
        select count(*)::int as count from audit_events
        where organization_id = $1 and action = 'durable_work.replayed' and target_id = $2
      `,
      [organizationA, webhookDeliveryA],
    );
    expect(audit.rows[0]?.count).toBe(1);
  });

  it('replays courier work without carrying the previous lease or failure state', async () => {
    const result = await operations.replayDeadLetter({
      requestedByUserId: ownerA,
      organizationId: organizationA,
      storeId: storeA,
      workType: 'courier_job',
      workId: courierJobA,
      idempotencyKey: `replay-courier-${suffix}`,
      at: new Date(at.getTime() + 2_000),
    });

    expect(result).toMatchObject({
      workType: 'courier_job',
      workId: courierJobA,
      previousAttempts: 5,
      previousErrorCode: 'NETWORK_ERROR',
      replayedStatus: 'queued',
      replay: false,
    });
    const job = await pool.query<{
      status: string;
      attempts: number;
      error_code: string | null;
      claimed_by: string | null;
      completed_at: Date | null;
    }>(
      `
        select status, attempts, error_code, claimed_by, completed_at
        from courier_jobs where id = $1
      `,
      [courierJobA],
    );
    expect(job.rows[0]).toEqual({
      status: 'queued',
      attempts: 0,
      error_code: null,
      claimed_by: null,
      completed_at: null,
    });
  });

  it('replays an unexpired verification delivery and reopens only its scoped session', async () => {
    await operations.replayDeadLetter({
      requestedByUserId: ownerA,
      organizationId: organizationA,
      storeId: storeA,
      workType: 'verification_job',
      workId: verificationJobA,
      idempotencyKey: `replay-verification-${suffix}`,
      at: new Date(at.getTime() + 3_000),
    });

    const state = await pool.query<{
      job_status: string;
      attempts: number;
      error_code: string | null;
      session_status: string;
      failed_at: Date | null;
    }>(
      `
        select
          vj.status as job_status,
          vj.attempts,
          vj.error_code,
          vs.status as session_status,
          oa.failed_at
        from verification_jobs vj
        join verification_sessions vs on vs.id = vj.verification_session_id
        join lateral (
          select failed_at
          from otp_attempts
          where verification_session_id = vs.id
          order by created_at desc, id desc
          limit 1
        ) oa on true
        where vj.id = $1
      `,
      [verificationJobA],
    );
    expect(state.rows[0]).toEqual({
      job_status: 'queued',
      attempts: 0,
      error_code: null,
      session_status: 'queued',
      failed_at: null,
    });
    const otherTenant = await pool.query<{ status: string }>(
      `select status from verification_jobs where id = $1`,
      [verificationJobB],
    );
    expect(otherTenant.rows[0]?.status).toBe('failed');
  });

  it('rejects structural, expired, cross-tenant, and idempotency-conflicting replays', async () => {
    await expect(
      operations.replayDeadLetter({
        requestedByUserId: ownerA,
        organizationId: organizationA,
        storeId: storeA,
        workType: 'webhook_delivery',
        workId: structuralWebhookA,
        idempotencyKey: `replay-structural-${suffix}`,
        at,
      }),
    ).rejects.toMatchObject({ code: 'DEAD_LETTER_NOT_REPLAYABLE' });

    await expect(
      operations.replayDeadLetter({
        requestedByUserId: ownerA,
        organizationId: organizationA,
        storeId: storeA,
        workType: 'verification_job',
        workId: verificationJobExpired,
        idempotencyKey: `replay-expired-${suffix}`,
        at,
      }),
    ).rejects.toMatchObject({ code: 'DEAD_LETTER_NOT_REPLAYABLE' });

    await expect(
      operations.replayDeadLetter({
        requestedByUserId: ownerA,
        organizationId: organizationA,
        storeId: storeA,
        workType: 'courier_job',
        workId: courierJobB,
        idempotencyKey: `replay-cross-tenant-${suffix}`,
        at,
      }),
    ).rejects.toMatchObject({ code: 'DEAD_LETTER_NOT_FOUND' });

    await expect(
      operations.replayDeadLetter({
        requestedByUserId: ownerA,
        organizationId: organizationA,
        storeId: storeA,
        workType: 'courier_job',
        workId: courierJobA,
        idempotencyKey: `replay-webhook-${suffix}`,
        at,
      }),
    ).rejects.toMatchObject({ code: 'DEAD_LETTER_IDEMPOTENCY_CONFLICT' });
  });
});
