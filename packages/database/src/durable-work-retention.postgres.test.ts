import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { PostgresDurableWorkRetention } from './durable-work-retention.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL durable work retention and archival', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 4 });
  const retention = new PostgresDurableWorkRetention(pool);
  const suffix = randomUUID().replaceAll('-', '');
  const organizationId = `org_ret_${suffix}`;
  const storeId = `sto_ret_${suffix}`;
  const courierAccountId = `coa_ret_${suffix}`;
  const courierCompletedId = `coj_ret_completed_${suffix}`;
  const courierQueuedId = `coj_ret_queued_${suffix}`;
  const webhookEndpointId = `we_ret_${suffix}`;
  const webhookFailedId = `wd_ret_failed_${suffix}`;
  const webhookRecentId = `wd_ret_recent_${suffix}`;
  const verificationSessionId = `ver_ret_${suffix}`;
  const verificationCompletedId = `vj_ret_completed_${suffix}`;
  const replayId = `dwr_ret_${suffix}`;
  const oldAt = new Date('2026-05-01T00:00:00.000Z');
  const recentAt = new Date('2026-07-27T12:00:00.000Z');
  const cutoff = new Date('2026-07-01T00:00:00.000Z');
  const runAt = new Date('2026-07-28T08:00:00.000Z');

  beforeAll(async () => {
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `insert into organizations (id, name, slug, plan_id)
         values ($1, 'Retention Test', $2, 'plan_free')`,
        [organizationId, `retention-${suffix}`],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform, external_store_id)
         values ($1, $2, 'Retention Store', 'custom', $3)`,
        [storeId, organizationId, `retention-store-${suffix}`],
      );
      await client.query(
        `insert into courier_accounts (id, store_id, provider, status)
         values ($1, $2, 'steadfast', 'connected')`,
        [courierAccountId, storeId],
      );
      await client.query(
        `insert into courier_jobs (
           id, courier_account_id, job_type, status, attempts,
           scheduled_at, completed_at, error_code, payload, created_at, updated_at
         ) values
           ($1, $2, 'customer_observation_refresh', 'completed', 1, $3, $3, null, $4::jsonb, $3, $3),
           ($5, $2, 'customer_observation_refresh', 'queued', 0, $3, null, null, $6::jsonb, $3, $3)`,
        [
          courierCompletedId,
          courierAccountId,
          oldAt,
          JSON.stringify({ opaqueValue: 'source-only-a' }),
          courierQueuedId,
          JSON.stringify({ opaqueValue: 'source-only-b' }),
        ],
      );
      await client.query(
        `insert into webhook_endpoints (
           id, organization_id, store_id, url, secret_encrypted, events, status
         ) values ($1, $2, $3, 'https://merchant.example/webhooks', 'opaque-wrapper', '["assessment.completed"]'::jsonb, 'active')`,
        [webhookEndpointId, organizationId, storeId],
      );
      await client.query(
        `insert into webhook_deliveries (
           id, endpoint_id, organization_id, store_id, event_id, event_type,
           event_payload, occurred_at, status, attempts, error_code, completed_at, created_at, updated_at
         ) values
           ($1, $2, $3, $4, $5, 'assessment.completed', $6::jsonb, $7, 'failed', 5, 'NETWORK_ERROR', $7, $7, $7),
           ($8, $2, $3, $4, $9, 'assessment.completed', $10::jsonb, $11, 'failed', 1, 'NETWORK_ERROR', $11, $11, $11)`,
        [
          webhookFailedId,
          webhookEndpointId,
          organizationId,
          storeId,
          `evt-ret-old-${suffix}`,
          JSON.stringify({ opaqueValue: 'source-only-c' }),
          oldAt,
          webhookRecentId,
          `evt-ret-recent-${suffix}`,
          JSON.stringify({ opaqueValue: 'recent-source' }),
          recentAt,
        ],
      );
      await client.query(
        `insert into verification_sessions (
           id, organization_id, store_id, phone_hash, purpose, channel,
           status, expires_at, idempotency_key, max_attempts, created_at, updated_at
         ) values ($1, $2, $3, $4, 'confirm_order', 'sms', 'verified', $5, $6, 5, $7, $7)`,
        [
          verificationSessionId,
          organizationId,
          storeId,
          'a'.repeat(64),
          new Date('2026-08-01T00:00:00.000Z'),
          `retention-ver-${suffix}`,
          oldAt,
        ],
      );
      await client.query(
        `insert into verification_jobs (
           id, verification_session_id, organization_id, store_id,
           payload_encrypted, status, attempts, provider_message_id,
           completed_at, created_at, updated_at
         ) values ($1, $2, $3, $4, 'opaque-wrapper-value', 'completed', 1, 'opaque-provider-reference', $5, $5, $5)`,
        [verificationCompletedId, verificationSessionId, organizationId, storeId, oldAt],
      );
      await client.query(
        `insert into durable_work_replays (
           id, organization_id, store_id, work_type, work_id, idempotency_key,
           previous_status, previous_error_code, previous_attempts, replayed_status, replayed_at
         ) values ($1, $2, $3, 'webhook_delivery', $4, $5, 'failed', 'NETWORK_ERROR', 4, 'queued', $6)`,
        [replayId, organizationId, storeId, webhookFailedId, `retention-replay-${suffix}`, oldAt],
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
    await pool.query('delete from organizations where id = $1', [organizationId]);
    await pool.end();
  });

  it('previews only old terminal work with bounded metadata and no mutation', async () => {
    const preview = await retention.preview({
      cutoff,
      statuses: ['completed', 'failed'],
      limit: 10,
      at: runAt,
    });

    expect(preview.candidates.map((row) => row.workId).sort()).toEqual(
      [courierCompletedId, webhookFailedId, verificationCompletedId].sort(),
    );
    expect(JSON.stringify(preview)).not.toContain('source-only');
    expect(JSON.stringify(preview)).not.toContain('opaque-wrapper-value');
    expect(JSON.stringify(preview)).not.toContain('opaque-provider-reference');

    const sourceCounts = await pool.query<{ count: number }>(
      `select (
         (select count(*) from courier_jobs where id = $1) +
         (select count(*) from webhook_deliveries where id = $2) +
         (select count(*) from verification_jobs where id = $3)
       )::int as count`,
      [courierCompletedId, webhookFailedId, verificationCompletedId],
    );
    expect(sourceCounts.rows[0]?.count).toBe(3);
  });

  it('archives then deletes only locked terminal rows while preserving replay evidence', async () => {
    const result = await retention.archive({
      cutoff,
      statuses: ['completed', 'failed'],
      limit: 10,
      archiveRunId: `dwar_${suffix}`,
      at: runAt,
    });

    expect(result.archived.map((row) => row.workId).sort()).toEqual(
      [courierCompletedId, webhookFailedId, verificationCompletedId].sort(),
    );
    expect(JSON.stringify(result)).not.toContain('source-only');
    expect(JSON.stringify(result)).not.toContain('opaque-wrapper-value');

    const archived = await pool.query<{
      work_id: string;
      archive_run_id: string;
      archived_by: string;
    }>(
      `select work_id, archive_run_id, archived_by
       from durable_work_archives
       where organization_id = $1
       order by work_id`,
      [organizationId],
    );
    expect(archived.rows).toHaveLength(3);
    expect(archived.rows.every((row) => row.archive_run_id === `dwar_${suffix}`)).toBe(true);
    expect(archived.rows.every((row) => row.archived_by.length > 0)).toBe(true);
    expect(result.archived.every((row) => row.archivedBy.length > 0)).toBe(true);

    const remaining = await pool.query<{ id: string }>(
      `select id from courier_jobs where id = any($1::text[])
       union all
       select id from webhook_deliveries where id = any($1::text[])
       union all
       select id from verification_jobs where id = any($1::text[])`,
      [[courierCompletedId, webhookFailedId, verificationCompletedId]],
    );
    expect(remaining.rows).toEqual([]);
    await expect(
      pool.query('select 1 from courier_jobs where id = $1', [courierQueuedId]),
    ).resolves.toMatchObject({ rowCount: 1 });
    await expect(
      pool.query('select 1 from webhook_deliveries where id = $1', [webhookRecentId]),
    ).resolves.toMatchObject({ rowCount: 1 });
    await expect(
      pool.query('select 1 from durable_work_replays where id = $1', [replayId]),
    ).resolves.toMatchObject({ rowCount: 1 });
  });

  it('is idempotent after source rows have already been archived', async () => {
    const result = await retention.archive({
      cutoff,
      statuses: ['completed', 'failed'],
      limit: 10,
      archiveRunId: `dwar_rerun-${suffix}`,
      at: runAt,
    });
    expect(result.archived).toEqual([]);
  });

  it('archive schema omits source payload and provider-reference columns', async () => {
    const columns = await pool.query<{ column_name: string }>(
      `select column_name
       from information_schema.columns
       where table_schema = 'public' and table_name = 'durable_work_archives'`,
    );
    const names = columns.rows.map((row) => row.column_name);
    for (const prohibited of [
      'payload',
      'event_payload',
      'payload_encrypted',
      'provider_message_id',
      'response_status',
      'phone_hash',
      'secret_encrypted',
    ]) {
      expect(names).not.toContain(prohibited);
    }
  });
});
