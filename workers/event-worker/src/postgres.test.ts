import { randomUUID } from 'node:crypto';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { PostgresWebhookDeliveryQueue, WebhookDeliveryLeaseError } from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL webhook delivery leases', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 12 });
  const suffix = randomUUID();
  const organizationId = `org_event_${suffix}`;
  const storeId = `sto_event_${suffix}`;
  const otherOrganizationId = `org_event_other_${suffix}`;
  const otherStoreId = `sto_event_other_${suffix}`;
  const endpointId = `we_event_${suffix}`;

  beforeAll(async () => {
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `insert into organizations (id, name, slug) values ($1, 'Event Merchant', $2)`,
        [organizationId, `event-${suffix}`],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom')`,
        [storeId, organizationId],
      );
      await client.query(
        `insert into organizations (id, name, slug) values ($1, 'Other Event Merchant', $2)`,
        [otherOrganizationId, `event-other-${suffix}`],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Other', 'custom')`,
        [otherStoreId, otherOrganizationId],
      );
      await client.query(
        `
          insert into webhook_endpoints (
            id, organization_id, store_id, url, secret_encrypted, events, status
          ) values ($1, $2, $3, 'https://merchant.example/hook', 'encrypted', $4::jsonb, 'active')
        `,
        [endpointId, organizationId, storeId, JSON.stringify(['assessment.completed'])],
      );
      await client.query('commit');
    } catch (error) {
      await client.query('rollback');
      throw error;
    } finally {
      client.release();
    }
  });

  afterEach(async () => {
    await pool.query('delete from webhook_deliveries where endpoint_id = $1', [endpointId]);
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationId, otherOrganizationId],
    ]);
    await pool.end();
  });

  it('lets competing workers claim different due deliveries and protects fresh leases', async () => {
    const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T01:00:00.000Z');
    const firstId = await insertDelivery('compete-a', { at });
    const secondId = await insertDelivery('compete-b', { at });

    const [first, second] = await Promise.all([
      queue.claim(`event-a-${suffix}`, at),
      queue.claim(`event-b-${suffix}`, at),
    ]);
    expect(new Set([first?.id, second?.id])).toEqual(new Set([firstId, secondId]));
    await expect(queue.claim(`event-c-${suffix}`, at)).resolves.toBeNull();
  });

  it('rejects an expired owner and lets a new worker recover the delivery', async () => {
    const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T02:00:00.000Z');
    const deliveryId = await insertDelivery('expired', {
      at: new Date(at.getTime() - 180_000),
      status: 'processing',
      attempts: 1,
      claimedBy: `old-event-${suffix}`,
      claimedAt: new Date(at.getTime() - 120_000),
      leaseExpiresAt: new Date(at.getTime() - 60_000),
    });

    await expect(
      queue.delivered(deliveryId, `old-event-${suffix}`, 204, at),
    ).rejects.toBeInstanceOf(WebhookDeliveryLeaseError);
    const claimed = await queue.claim(`new-event-${suffix}`, at);
    expect(claimed?.id).toBe(deliveryId);
    await queue.started(deliveryId, `new-event-${suffix}`, new Date(at.getTime() + 1_000));
    await queue.delivered(deliveryId, `new-event-${suffix}`, 204, new Date(at.getTime() + 2_000));

    const stored = await pool.query<{
      status: string;
      attempts: number;
      claimed_by: string | null;
    }>(`select status, attempts, claimed_by from webhook_deliveries where id = $1`, [deliveryId]);
    expect(stored.rows[0]).toEqual({ status: 'delivered', attempts: 2, claimed_by: null });
  });

  it('clears ownership when a retry is scheduled', async () => {
    const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T03:00:00.000Z');
    const deliveryId = await insertDelivery('retry', { at });
    await expect(queue.claim(`retry-event-${suffix}`, at)).resolves.toMatchObject({
      id: deliveryId,
    });
    await queue.started(deliveryId, `retry-event-${suffix}`, new Date(at.getTime() + 1_000));
    const nextAttemptAt = new Date(at.getTime() + 31_000);
    await queue.retry(deliveryId, `retry-event-${suffix}`, {
      responseStatus: 503,
      errorCode: 'HTTP_503',
      nextAttemptAt,
      at: new Date(at.getTime() + 2_000),
    });

    const stored = await pool.query<{
      status: string;
      attempts: number;
      response_status: number;
      error_code: string;
      claimed_by: string | null;
      next_attempt_at: Date;
    }>(
      `select status, attempts, response_status, error_code, claimed_by, next_attempt_at from webhook_deliveries where id = $1`,
      [deliveryId],
    );
    expect(stored.rows[0]).toMatchObject({
      status: 'retry_scheduled',
      attempts: 1,
      response_status: 503,
      error_code: 'HTTP_503',
      claimed_by: null,
    });
    expect(stored.rows[0]?.next_attempt_at.toISOString()).toBe(nextAttemptAt.toISOString());
  });

  it('fails an exhausted expired delivery instead of reclaiming it', async () => {
    const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000, maxAttempts: 5 });
    const at = new Date('2026-07-17T04:00:00.000Z');
    const deliveryId = await insertDelivery('exhausted', {
      at: new Date(at.getTime() - 180_000),
      status: 'processing',
      attempts: 5,
      claimedBy: `dead-event-${suffix}`,
      claimedAt: new Date(at.getTime() - 120_000),
      leaseExpiresAt: new Date(at.getTime() - 60_000),
    });

    await expect(queue.claim(`recovery-event-${suffix}`, at)).resolves.toBeNull();
    const stored = await pool.query<{
      status: string;
      error_code: string;
      claimed_by: string | null;
    }>(`select status, error_code, claimed_by from webhook_deliveries where id = $1`, [deliveryId]);
    expect(stored.rows[0]).toEqual({
      status: 'failed',
      error_code: 'LEASE_EXPIRED',
      claimed_by: null,
    });
  });

  it('fails a delivery whose persisted scope does not match its endpoint', async () => {
    const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T05:00:00.000Z');
    const deliveryId = await insertDelivery('scope', {
      at,
      organizationId: otherOrganizationId,
      storeId: otherStoreId,
    });

    await expect(queue.claim(`scope-event-${suffix}`, at)).resolves.toBeNull();
    const stored = await pool.query<{ status: string; error_code: string }>(
      `select status, error_code from webhook_deliveries where id = $1`,
      [deliveryId],
    );
    expect(stored.rows[0]).toEqual({
      status: 'failed',
      error_code: 'WEBHOOK_SCOPE_MISMATCH',
    });
  });

  async function insertDelivery(
    label: string,
    options: {
      at: Date;
      status?: string;
      attempts?: number;
      claimedBy?: string;
      claimedAt?: Date;
      leaseExpiresAt?: Date;
      organizationId?: string;
      storeId?: string;
    },
  ): Promise<string> {
    const deliveryId = `whd_${label}_${suffix}`;
    const eventId = `evt_${label}_${suffix}`;
    const scopedOrganizationId = options.organizationId ?? organizationId;
    const scopedStoreId = options.storeId ?? storeId;
    const event = {
      id: eventId,
      type: 'assessment.completed',
      organizationId: scopedOrganizationId,
      storeId: scopedStoreId,
      occurredAt: options.at.toISOString(),
      payload: { assessmentId: `ras_${label}_${suffix}` },
    };
    await pool.query(
      `
        insert into webhook_deliveries (
          id, endpoint_id, organization_id, store_id, event_id, event_type,
          event_payload, occurred_at, status, attempts, next_attempt_at,
          claimed_by, claimed_at, lease_expires_at
        ) values ($1, $2, $3, $4, $5, 'assessment.completed', $6::jsonb, $7, $8, $9, $7, $10, $11, $12)
      `,
      [
        deliveryId,
        endpointId,
        scopedOrganizationId,
        scopedStoreId,
        eventId,
        JSON.stringify(event),
        options.at,
        options.status ?? 'queued',
        options.attempts ?? 0,
        options.claimedBy ?? null,
        options.claimedAt ?? null,
        options.leaseExpiresAt ?? null,
      ],
    );
    return deliveryId;
  }
});
