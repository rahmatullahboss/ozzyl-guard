import type { Pool } from 'pg';
import type { WebhookDeliveryRepository } from './index.js';

export interface ClaimedWebhookDelivery {
  id: string;
  organizationId: string;
  storeId: string | null;
  endpointId: string;
  endpointUrl: string;
  secretEncrypted: string;
  endpointActive: boolean;
  eventId: string;
  eventType: string;
  eventPayload: unknown;
  occurredAt: Date;
  attempts: number;
}

export class WebhookDeliveryLeaseError extends Error {
  readonly code = 'WEBHOOK_DELIVERY_LEASE_LOST';

  constructor(message = 'Webhook delivery lease is no longer owned by this worker') {
    super(message);
    this.name = 'WebhookDeliveryLeaseError';
  }
}

export class PostgresWebhookDeliveryQueue {
  private readonly leaseMs: number;
  private readonly maxAttempts: number;

  constructor(
    private readonly pool: Pool,
    options: { leaseMs?: number; maxAttempts?: number } = {},
  ) {
    this.leaseMs = options.leaseMs ?? 60_000;
    this.maxAttempts = options.maxAttempts ?? 5;
  }

  async claim(workerId: string, at = new Date()): Promise<ClaimedWebhookDelivery | null> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `
          update webhook_deliveries wd
          set status = 'failed',
            completed_at = $1,
            error_code = coalesce(wd.error_code, 'WEBHOOK_SCOPE_MISMATCH'),
            claimed_by = null,
            claimed_at = null,
            lease_expires_at = null,
            updated_at = now()
          where wd.status not in ('delivered', 'failed')
            and not exists (
              select 1
              from webhook_endpoints we
              left join stores s
                on s.id = wd.store_id and s.organization_id = wd.organization_id
              where we.id = wd.endpoint_id
                and we.organization_id = wd.organization_id
                and (we.store_id is null or we.store_id = wd.store_id)
                and (wd.store_id is null or s.id is not null)
            )
        `,
        [at],
      );
      await client.query(
        `
          update webhook_deliveries
          set status = 'failed',
            completed_at = $1,
            error_code = coalesce(error_code, 'LEASE_EXPIRED'),
            claimed_by = null,
            claimed_at = null,
            lease_expires_at = null,
            updated_at = now()
          where status in ('claimed', 'processing')
            and (lease_expires_at is null or lease_expires_at <= $1)
            and attempts >= $2
        `,
        [at, this.maxAttempts],
      );
      const leaseExpiresAt = new Date(at.getTime() + this.leaseMs);
      const result = await client.query<{
        id: string;
        organization_id: string;
        store_id: string | null;
        endpoint_id: string;
        url: string;
        secret_encrypted: string;
        endpoint_status: string;
        event_id: string;
        event_type: string;
        event_payload: unknown;
        occurred_at: Date;
        attempts: number;
      }>(
        `
          with candidate as (
            select wd.id
            from webhook_deliveries wd
            join webhook_endpoints we
              on we.id = wd.endpoint_id
              and we.organization_id = wd.organization_id
              and (we.store_id is null or we.store_id = wd.store_id)
            left join stores s
              on s.id = wd.store_id and s.organization_id = wd.organization_id
            where wd.attempts < $4
              and (wd.store_id is null or s.id is not null)
              and (
                (
                  wd.status in ('queued', 'retry_scheduled')
                  and coalesce(wd.next_attempt_at, wd.created_at) <= $2
                )
                or (
                  wd.status in ('claimed', 'processing')
                  and (wd.lease_expires_at is null or wd.lease_expires_at <= $2)
                )
              )
            order by
              case when wd.status in ('claimed', 'processing') then 0 else 1 end,
              coalesce(wd.lease_expires_at, wd.next_attempt_at, wd.created_at) asc,
              wd.id asc
            for update of wd skip locked
            limit 1
          ), claimed as (
            update webhook_deliveries wd
            set status = 'claimed',
              claimed_by = $1,
              claimed_at = $2,
              lease_expires_at = $3,
              completed_at = null,
              updated_at = now()
            from candidate
            where wd.id = candidate.id
            returning wd.*
          )
          select
            claimed.id,
            claimed.organization_id,
            claimed.store_id,
            claimed.endpoint_id,
            we.url,
            we.secret_encrypted,
            we.status as endpoint_status,
            claimed.event_id,
            claimed.event_type,
            claimed.event_payload,
            claimed.occurred_at,
            claimed.attempts
          from claimed
          join webhook_endpoints we on we.id = claimed.endpoint_id
        `,
        [workerId, at, leaseExpiresAt, this.maxAttempts],
      );
      await client.query('commit');
      const row = result.rows[0];
      return row
        ? {
            id: row.id,
            organizationId: row.organization_id,
            storeId: row.store_id,
            endpointId: row.endpoint_id,
            endpointUrl: row.url,
            secretEncrypted: row.secret_encrypted,
            endpointActive: row.endpoint_status === 'active',
            eventId: row.event_id,
            eventType: row.event_type,
            eventPayload: row.event_payload,
            occurredAt: row.occurred_at,
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

  async started(deliveryId: string, workerId: string, at = new Date()): Promise<void> {
    const result = await this.pool.query(
      `
        update webhook_deliveries
        set status = 'processing',
          attempts = attempts + 1,
          lease_expires_at = $4,
          updated_at = now()
        where id = $1
          and claimed_by = $2
          and status = 'claimed'
          and lease_expires_at > $3
      `,
      [deliveryId, workerId, at, new Date(at.getTime() + this.leaseMs)],
    );
    this.assertOwned(result.rowCount);
  }

  async delivered(
    deliveryId: string,
    workerId: string,
    responseStatus: number,
    at = new Date(),
  ): Promise<void> {
    const result = await this.pool.query(
      `
        update webhook_deliveries
        set status = 'delivered',
          response_status = $3,
          error_code = null,
          completed_at = $4,
          claimed_by = null,
          claimed_at = null,
          lease_expires_at = null,
          updated_at = now()
        where id = $1
          and claimed_by = $2
          and status = 'processing'
          and lease_expires_at > $4
      `,
      [deliveryId, workerId, responseStatus, at],
    );
    this.assertOwned(result.rowCount);
  }

  async retry(
    deliveryId: string,
    workerId: string,
    input: {
      responseStatus?: number;
      errorCode: string;
      nextAttemptAt: Date;
      at: Date;
    },
  ): Promise<void> {
    const result = await this.pool.query(
      `
        update webhook_deliveries
        set status = 'retry_scheduled',
          next_attempt_at = $3,
          response_status = $4,
          error_code = $5,
          completed_at = null,
          claimed_by = null,
          claimed_at = null,
          lease_expires_at = null,
          updated_at = now()
        where id = $1
          and claimed_by = $2
          and status = 'processing'
          and lease_expires_at > $6
      `,
      [
        deliveryId,
        workerId,
        input.nextAttemptAt,
        input.responseStatus ?? null,
        input.errorCode,
        input.at,
      ],
    );
    this.assertOwned(result.rowCount);
  }

  async failed(
    deliveryId: string,
    workerId: string,
    input: { responseStatus?: number; errorCode: string; at: Date },
  ): Promise<void> {
    const result = await this.pool.query(
      `
        update webhook_deliveries
        set status = 'failed',
          response_status = $3,
          error_code = $4,
          completed_at = $5,
          claimed_by = null,
          claimed_at = null,
          lease_expires_at = null,
          updated_at = now()
        where id = $1
          and claimed_by = $2
          and status in ('claimed', 'processing')
          and lease_expires_at > $5
      `,
      [deliveryId, workerId, input.responseStatus ?? null, input.errorCode, input.at],
    );
    this.assertOwned(result.rowCount);
  }

  repositoryFor(delivery: ClaimedWebhookDelivery, workerId: string): WebhookDeliveryRepository {
    const assertIdentity = (endpointId: string, eventId: string): void => {
      if (endpointId !== delivery.endpointId || eventId !== delivery.eventId) {
        throw new WebhookDeliveryLeaseError('Webhook delivery identity does not match the claim');
      }
    };
    return {
      markDelivered: async (input) => {
        assertIdentity(input.endpointId, input.eventId);
        await this.delivered(delivery.id, workerId, input.responseStatus, input.at);
      },
      markRetry: async (input) => {
        assertIdentity(input.endpointId, input.eventId);
        await this.retry(delivery.id, workerId, input);
      },
      markFailed: async (input) => {
        assertIdentity(input.endpointId, input.eventId);
        await this.failed(delivery.id, workerId, input);
      },
    };
  }

  private assertOwned(rowCount: number | null): void {
    if (rowCount !== 1) throw new WebhookDeliveryLeaseError();
  }
}
