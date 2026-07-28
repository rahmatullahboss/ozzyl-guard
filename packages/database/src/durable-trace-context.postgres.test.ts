import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL durable trace context', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 4 });
  const suffix = randomUUID().replaceAll('-', '');
  const organizationId = `org_trace_${suffix}`;
  const storeId = `sto_trace_${suffix}`;
  const courierAccountId = `coa_trace_${suffix}`;
  const webhookEndpointId = `we_trace_${suffix}`;
  const verificationSessionId = `ver_trace_${suffix}`;
  const validTraceParent = '00-11111111111111111111111111111111-2222222222222222-01';
  const validTraceState = 'vendor=value';

  beforeAll(async () => {
    await pool.query(
      `insert into organizations (id, name, slug, plan_id)
       values ($1, 'Trace Context Test', $2, 'plan_free')`,
      [organizationId, `trace-${suffix}`],
    );
    await pool.query(
      `insert into stores (id, organization_id, name, platform, external_store_id)
       values ($1, $2, 'Trace Store', 'custom', $3)`,
      [storeId, organizationId, `trace-store-${suffix}`],
    );
    await pool.query(
      `insert into courier_accounts (id, store_id, provider, status)
       values ($1, $2, 'steadfast', 'connected')`,
      [courierAccountId, storeId],
    );
    await pool.query(
      `insert into webhook_endpoints (
         id, organization_id, store_id, url, secret_encrypted, events, status
       ) values ($1, $2, $3, 'https://merchant.example/trace', 'opaque-wrapper',
         '["assessment.completed"]'::jsonb, 'active')`,
      [webhookEndpointId, organizationId, storeId],
    );
    await pool.query(
      `insert into verification_sessions (
         id, organization_id, store_id, phone_hash, purpose, channel,
         status, expires_at, idempotency_key, max_attempts
       ) values ($1, $2, $3, $4, 'confirm_order', 'sms', 'queued',
         '2026-08-01T00:00:00.000Z', $5, 5)`,
      [verificationSessionId, organizationId, storeId, 'a'.repeat(64), `trace-ver-${suffix}`],
    );
  });

  afterAll(async () => {
    await pool.query('delete from verification_jobs where verification_session_id = $1', [
      verificationSessionId,
    ]);
    await pool.query('delete from verification_sessions where id = $1', [verificationSessionId]);
    await pool.query('delete from webhook_deliveries where endpoint_id = $1', [webhookEndpointId]);
    await pool.query('delete from webhook_endpoints where id = $1', [webhookEndpointId]);
    await pool.query('delete from courier_jobs where courier_account_id = $1', [courierAccountId]);
    await pool.query('delete from courier_accounts where id = $1', [courierAccountId]);
    await pool.query('delete from stores where id = $1', [storeId]);
    await pool.query('delete from organizations where id = $1', [organizationId]);
    await pool.end();
  });

  it('round-trips bounded context while preserving nullable legacy rows', async () => {
    const courierId = `coj_trace_valid_${suffix}`;
    const courierLegacyId = `coj_trace_legacy_${suffix}`;
    const webhookId = `wd_trace_valid_${suffix}`;
    const verificationId = `vj_trace_valid_${suffix}`;

    await pool.query(
      `insert into courier_jobs (
         id, courier_account_id, job_type, status, scheduled_at, payload,
         trace_parent, trace_state
       ) values
         ($1, $2, 'customer_observation_refresh', 'queued', now(), '{}'::jsonb, $3, $4),
         ($5, $2, 'customer_observation_refresh', 'queued', now(), '{}'::jsonb, null, null)`,
      [courierId, courierAccountId, validTraceParent, validTraceState, courierLegacyId],
    );
    await pool.query(
      `insert into webhook_deliveries (
         id, endpoint_id, organization_id, store_id, event_id, event_type,
         event_payload, occurred_at, status, next_attempt_at, trace_parent, trace_state
       ) values ($1, $2, $3, $4, $5, 'assessment.completed', $6::jsonb,
         now(), 'queued', now(), $7, $8)`,
      [
        webhookId,
        webhookEndpointId,
        organizationId,
        storeId,
        `evt-trace-${suffix}`,
        JSON.stringify({ opaque: true }),
        validTraceParent,
        validTraceState,
      ],
    );
    await pool.query(
      `insert into verification_jobs (
         id, verification_session_id, organization_id, store_id, job_type,
         payload_encrypted, status, next_attempt_at, trace_parent, trace_state
       ) values ($1, $2, $3, $4, 'send_otp', 'opaque-wrapper', 'queued', now(), $5, $6)`,
      [
        verificationId,
        verificationSessionId,
        organizationId,
        storeId,
        validTraceParent,
        validTraceState,
      ],
    );

    const result = await pool.query<{
      source: string;
      trace_parent: string | null;
      trace_state: string | null;
    }>(
      `select 'courier' as source, trace_parent, trace_state from courier_jobs where id = $1
       union all
       select 'courier_legacy', trace_parent, trace_state from courier_jobs where id = $2
       union all
       select 'webhook', trace_parent, trace_state from webhook_deliveries where id = $3
       union all
       select 'verification', trace_parent, trace_state from verification_jobs where id = $4
       order by source`,
      [courierId, courierLegacyId, webhookId, verificationId],
    );

    expect(result.rows).toEqual([
      { source: 'courier', trace_parent: validTraceParent, trace_state: validTraceState },
      { source: 'courier_legacy', trace_parent: null, trace_state: null },
      { source: 'verification', trace_parent: validTraceParent, trace_state: validTraceState },
      { source: 'webhook', trace_parent: validTraceParent, trace_state: validTraceState },
    ]);
  });

  it('rejects malformed context on every durable table', async () => {
    const malformed = 'not-a-trace-parent';
    await expect(
      pool.query(
        `insert into courier_jobs (
           id, courier_account_id, job_type, status, scheduled_at, payload, trace_parent
         ) values ($1, $2, 'customer_observation_refresh', 'queued', now(), '{}'::jsonb, $3)`,
        [`coj_trace_bad_${suffix}`, courierAccountId, malformed],
      ),
    ).rejects.toMatchObject({ code: '23514' });
    await expect(
      pool.query(
        `insert into webhook_deliveries (
           id, endpoint_id, organization_id, store_id, event_id, event_type,
           event_payload, occurred_at, status, next_attempt_at, trace_parent
         ) values ($1, $2, $3, $4, $5, 'assessment.completed', '{}'::jsonb,
           now(), 'queued', now(), $6)`,
        [
          `wd_trace_bad_${suffix}`,
          webhookEndpointId,
          organizationId,
          storeId,
          `evt-trace-bad-${suffix}`,
          malformed,
        ],
      ),
    ).rejects.toMatchObject({ code: '23514' });
    await expect(
      pool.query(
        `insert into verification_jobs (
           id, verification_session_id, organization_id, store_id, job_type,
           payload_encrypted, status, next_attempt_at, trace_parent
         ) values ($1, $2, $3, $4, 'send_otp', 'opaque-wrapper', 'queued', now(), $5)`,
        [`vj_trace_bad_${suffix}`, verificationSessionId, organizationId, storeId, malformed],
      ),
    ).rejects.toMatchObject({ code: '23514' });
  });

  it('rejects all-zero trace and span identifiers', async () => {
    const zeroTrace = '00-00000000000000000000000000000000-2222222222222222-01';
    const zeroSpan = '00-11111111111111111111111111111111-0000000000000000-01';
    await expect(
      pool.query(
        `insert into courier_jobs (
           id, courier_account_id, job_type, status, scheduled_at, payload, trace_parent
         ) values ($1, $2, 'customer_observation_refresh', 'queued', now(), '{}'::jsonb, $3)`,
        [`coj_trace_zero_${suffix}`, courierAccountId, zeroTrace],
      ),
    ).rejects.toMatchObject({ code: '23514' });
    await expect(
      pool.query(
        `insert into verification_jobs (
           id, verification_session_id, organization_id, store_id, job_type,
           payload_encrypted, status, next_attempt_at, trace_parent
         ) values ($1, $2, $3, $4, 'send_otp', 'opaque-wrapper', 'queued', now(), $5)`,
        [`vj_trace_zero_${suffix}`, verificationSessionId, organizationId, storeId, zeroSpan],
      ),
    ).rejects.toMatchObject({ code: '23514' });
  });
});
