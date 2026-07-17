from __future__ import annotations

import json
from pathlib import Path


def write(path: str, content: str) -> None:
    file = Path(path)
    file.parent.mkdir(parents=True, exist_ok=True)
    file.write_text(content)


def replace(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected one match in {path}, found {count}")
    file.write_text(text.replace(old, new))


def update_json(path: str, mutate) -> None:
    file = Path(path)
    value = json.loads(file.read_text())
    mutate(value)
    file.write_text(json.dumps(value, indent=2) + "\n")


write(
    "packages/encryption/package.json",
    '''{
  "name": "@ozzyl/encryption",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "import": "./dist/index.js"
    }
  },
  "scripts": {
    "build": "tsup src/index.ts --format esm --dts --sourcemap --clean",
    "typecheck": "tsc -p tsconfig.json --noEmit",
    "test": "vitest run"
  }
}
''',
)
write(
    "packages/encryption/tsconfig.json",
    '''{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src/**/*.ts"]
}
''',
)
write(
    "packages/encryption/src/index.ts",
    '''import { createCipheriv, createDecipheriv, randomBytes, type CipherGCMTypes } from 'node:crypto';

export interface EnvelopeCipher {
  readonly keyVersion: string;
  encrypt(value: unknown, context: string): string;
  decrypt<T>(payload: string, context: string): T;
}

export class AesGcmEnvelopeCipher implements EnvelopeCipher {
  private readonly algorithm: CipherGCMTypes = 'aes-256-gcm';

  constructor(
    private readonly key: Buffer,
    readonly keyVersion: string,
  ) {
    if (key.length !== 32) throw new Error('AES-256-GCM key must be exactly 32 bytes');
  }

  encrypt(value: unknown, context: string): string {
    const iv = randomBytes(12);
    const cipher = createCipheriv(this.algorithm, this.key, iv);
    cipher.setAAD(Buffer.from(context));
    const encrypted = Buffer.concat([cipher.update(JSON.stringify(value), 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();
    return JSON.stringify({
      version: 1,
      keyVersion: this.keyVersion,
      iv: iv.toString('base64'),
      tag: tag.toString('base64'),
      data: encrypted.toString('base64'),
    });
  }

  decrypt<T>(payload: string, context: string): T {
    const parsed = JSON.parse(payload) as {
      version: number;
      keyVersion: string;
      iv: string;
      tag: string;
      data: string;
    };
    if (parsed.version !== 1 || parsed.keyVersion !== this.keyVersion) {
      throw new Error('Unsupported encrypted payload version');
    }
    const decipher = createDecipheriv(this.algorithm, this.key, Buffer.from(parsed.iv, 'base64'));
    decipher.setAAD(Buffer.from(context));
    decipher.setAuthTag(Buffer.from(parsed.tag, 'base64'));
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(parsed.data, 'base64')),
      decipher.final(),
    ]);
    return JSON.parse(decrypted.toString('utf8')) as T;
  }
}
''',
)
write(
    "packages/encryption/src/index.test.ts",
    '''import { describe, expect, it } from 'vitest';
import { AesGcmEnvelopeCipher } from './index.js';

describe('AesGcmEnvelopeCipher', () => {
  it('round-trips a context-bound envelope', () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const encrypted = cipher.encrypt({ secret: 'value' }, 'webhook-endpoint:we_1');
    expect(cipher.decrypt(encrypted, 'webhook-endpoint:we_1')).toEqual({ secret: 'value' });
  });

  it('rejects a different authenticated context', () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const encrypted = cipher.encrypt({ secret: 'value' }, 'webhook-endpoint:we_1');
    expect(() => cipher.decrypt(encrypted, 'webhook-endpoint:we_2')).toThrow();
  });
});
''',
)

write(
    "packages/database/migrations/0008_webhook_delivery_leases.sql",
    '''alter table webhook_deliveries
  add column organization_id text references organizations(id) on delete cascade,
  add column store_id text references stores(id) on delete cascade,
  add column event_type text not null default 'legacy.unknown',
  add column event_payload jsonb not null default '{}'::jsonb,
  add column occurred_at timestamptz not null default now(),
  add column claimed_by text,
  add column claimed_at timestamptz,
  add column lease_expires_at timestamptz,
  add column completed_at timestamptz;

update webhook_deliveries wd
set organization_id = we.organization_id,
    store_id = we.store_id,
    status = case
      when wd.event_type = 'legacy.unknown' and wd.status not in ('delivered', 'failed') then 'failed'
      else wd.status
    end,
    error_code = case
      when wd.event_type = 'legacy.unknown' and wd.status not in ('delivered', 'failed')
        then coalesce(wd.error_code, 'LEGACY_EVENT_PAYLOAD_MISSING')
      else wd.error_code
    end,
    completed_at = case
      when wd.event_type = 'legacy.unknown' and wd.status not in ('delivered', 'failed') then now()
      else wd.completed_at
    end
from webhook_endpoints we
where we.id = wd.endpoint_id;

alter table webhook_deliveries
  alter column organization_id set not null,
  alter column event_type drop default,
  alter column event_payload drop default,
  alter column occurred_at drop default;

create index webhook_deliveries_claim_idx
  on webhook_deliveries(status, next_attempt_at, lease_expires_at);

create index webhook_deliveries_scope_idx
  on webhook_deliveries(organization_id, store_id, created_at desc);
''',
)

write(
    "workers/event-worker/src/index.ts",
    '''import { createHmac } from 'node:crypto';
import { isIP } from 'node:net';
import type { DomainEvent } from '@ozzyl/shared-types';

export interface WebhookEndpoint {
  id: string;
  url: string;
  signingSecret: string;
  active: boolean;
}

export interface DeliveryResult {
  status: 'delivered' | 'retry_scheduled' | 'failed';
  responseStatus?: number;
  nextAttemptAt?: string;
  errorCode?: string;
}

export interface WebhookDeliveryRepository {
  markDelivered(input: {
    endpointId: string;
    eventId: string;
    responseStatus: number;
    at: Date;
  }): Promise<void>;
  markRetry(input: {
    endpointId: string;
    eventId: string;
    responseStatus?: number;
    errorCode: string;
    nextAttemptAt: Date;
    at: Date;
  }): Promise<void>;
  markFailed(input: {
    endpointId: string;
    eventId: string;
    responseStatus?: number;
    errorCode: string;
    at: Date;
  }): Promise<void>;
}

export class WebhookDestinationError extends Error {
  readonly code = 'UNSAFE_WEBHOOK_DESTINATION';
}

export function assertSafeWebhookUrl(rawUrl: string): URL {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new WebhookDestinationError('Webhook endpoint URL is invalid');
  }
  if (url.protocol !== 'https:') {
    throw new WebhookDestinationError('Webhook endpoints must use HTTPS');
  }
  const hostname = url.hostname.toLowerCase();
  if (hostname === 'localhost' || hostname.endsWith('.localhost') || hostname.endsWith('.local')) {
    throw new WebhookDestinationError('Local webhook destinations are not allowed');
  }
  if (isIP(hostname) && isPrivateIp(hostname)) {
    throw new WebhookDestinationError('Private IP webhook destinations are not allowed');
  }
  if (hostname === '169.254.169.254' || hostname === 'metadata.google.internal') {
    throw new WebhookDestinationError('Metadata service destinations are not allowed');
  }
  if (url.username || url.password) {
    throw new WebhookDestinationError('Webhook URLs must not contain credentials');
  }
  return url;
}

export function signWebhook(payload: string, timestamp: string, secret: string): string {
  return `v1=${createHmac('sha256', secret).update(`${timestamp}.${payload}`).digest('hex')}`;
}

export class EventWorker {
  private readonly fetcher: typeof fetch;
  private readonly timeoutMs: number;
  private readonly maxAttempts: number;
  private readonly now: () => Date;

  constructor(
    private readonly repository: WebhookDeliveryRepository,
    options?: {
      fetcher?: typeof fetch;
      timeoutMs?: number;
      maxAttempts?: number;
      now?: () => Date;
    },
  ) {
    this.fetcher = options?.fetcher ?? fetch;
    this.timeoutMs = options?.timeoutMs ?? 5_000;
    this.maxAttempts = options?.maxAttempts ?? 5;
    this.now = options?.now ?? (() => new Date());
  }

  async deliver(input: {
    endpoint: WebhookEndpoint;
    event: DomainEvent;
    attempt: number;
  }): Promise<DeliveryResult> {
    if (!input.endpoint.active) {
      await this.repository.markFailed({
        endpointId: input.endpoint.id,
        eventId: input.event.id,
        errorCode: 'ENDPOINT_INACTIVE',
        at: this.now(),
      });
      return { status: 'failed', errorCode: 'ENDPOINT_INACTIVE' };
    }

    let url: URL;
    try {
      url = assertSafeWebhookUrl(input.endpoint.url);
    } catch (error) {
      return this.retryOrFail({
        endpointId: input.endpoint.id,
        eventId: input.event.id,
        attempt: input.attempt,
        errorCode:
          error instanceof WebhookDestinationError
            ? error.code
            : 'UNSAFE_WEBHOOK_DESTINATION',
        retryable: false,
      });
    }

    const payload = JSON.stringify(input.event);
    const timestamp = String(Math.floor(this.now().getTime() / 1_000));
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await this.fetcher(url, {
        method: 'POST',
        redirect: 'error',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Ozzyl-Guard-Webhooks/1.0',
          'X-Ozzyl-Event': input.event.type,
          'X-Ozzyl-Timestamp': timestamp,
          'X-Ozzyl-Signature': signWebhook(payload, timestamp, input.endpoint.signingSecret),
        },
        body: payload,
      });

      if (response.ok) {
        await this.repository.markDelivered({
          endpointId: input.endpoint.id,
          eventId: input.event.id,
          responseStatus: response.status,
          at: this.now(),
        });
        return { status: 'delivered', responseStatus: response.status };
      }

      return this.retryOrFail({
        endpointId: input.endpoint.id,
        eventId: input.event.id,
        attempt: input.attempt,
        responseStatus: response.status,
        errorCode: response.status === 429 ? 'RATE_LIMITED' : `HTTP_${response.status}`,
        retryable: response.status === 408 || response.status === 429 || response.status >= 500,
      });
    } catch (error) {
      const errorCode =
        error instanceof Error && error.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK_ERROR';
      return this.retryOrFail({
        endpointId: input.endpoint.id,
        eventId: input.event.id,
        attempt: input.attempt,
        errorCode,
        retryable: true,
      });
    } finally {
      clearTimeout(timeout);
    }
  }

  private async retryOrFail(input: {
    endpointId: string;
    eventId: string;
    attempt: number;
    responseStatus?: number;
    errorCode: string;
    retryable: boolean;
  }): Promise<DeliveryResult> {
    const at = this.now();
    if (input.retryable && input.attempt < this.maxAttempts) {
      const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, input.attempt - 1) * 30_000);
      const nextAttemptAt = new Date(at.getTime() + delayMs);
      await this.repository.markRetry({
        endpointId: input.endpointId,
        eventId: input.eventId,
        ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
        errorCode: input.errorCode,
        nextAttemptAt,
        at,
      });
      return {
        status: 'retry_scheduled',
        ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
        nextAttemptAt: nextAttemptAt.toISOString(),
        errorCode: input.errorCode,
      };
    }

    await this.repository.markFailed({
      endpointId: input.endpointId,
      eventId: input.eventId,
      ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
      errorCode: input.errorCode,
      at,
    });
    return {
      status: 'failed',
      ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
      errorCode: input.errorCode,
    };
  }
}

function isPrivateIp(hostname: string): boolean {
  if (hostname.includes(':')) {
    const normalized = hostname.toLowerCase();
    return (
      normalized === '::1' ||
      normalized.startsWith('fc') ||
      normalized.startsWith('fd') ||
      normalized.startsWith('fe80:')
    );
  }
  const parts = hostname.split('.').map(Number);
  const [first, second] = parts;
  if (parts.length !== 4 || first === undefined || second === undefined) return true;
  return (
    first === 10 ||
    first === 127 ||
    (first === 169 && second === 254) ||
    (first === 172 && second >= 16 && second <= 31) ||
    (first === 192 && second === 168) ||
    first === 0
  );
}
''',
)

write(
    "workers/event-worker/src/index.test.ts",
    '''import { createHmac } from 'node:crypto';
import { describe, expect, it, vi } from 'vitest';
import { EventWorker, assertSafeWebhookUrl } from './index.js';

const repository = {
  markDelivered: vi.fn(async () => undefined),
  markRetry: vi.fn(async () => undefined),
  markFailed: vi.fn(async () => undefined),
};

const event = {
  id: 'evt_1',
  type: 'assessment.completed' as const,
  organizationId: 'org_1',
  storeId: 'sto_1',
  occurredAt: '2026-07-17T00:00:00.000Z',
  payload: { assessmentId: 'ras_1' },
};

describe('webhook destination validation', () => {
  it('rejects invalid, local, and private destinations', () => {
    expect(() => assertSafeWebhookUrl('not-a-url')).toThrow();
    expect(() => assertSafeWebhookUrl('http://example.com/hook')).toThrow();
    expect(() => assertSafeWebhookUrl('https://127.0.0.1/hook')).toThrow();
    expect(() => assertSafeWebhookUrl('https://10.0.0.1/hook')).toThrow();
    expect(assertSafeWebhookUrl('https://merchant.example/hook').hostname).toBe('merchant.example');
  });
});

describe('EventWorker', () => {
  it('signs and delivers an event', async () => {
    const fetcher = vi.fn<typeof fetch>().mockImplementation(async (_url, init) => {
      const headers = new Headers(init?.headers);
      const timestamp = headers.get('X-Ozzyl-Timestamp') ?? '';
      const payload = typeof init?.body === 'string' ? init.body : '';
      const expected = `v1=${createHmac('sha256', 'x'.repeat(32))
        .update(`${timestamp}.${payload}`)
        .digest('hex')}`;
      expect(headers.get('X-Ozzyl-Signature')).toBe(expected);
      return new Response(null, { status: 204 });
    });
    const worker = new EventWorker(repository, {
      fetcher,
      now: () => new Date('2026-07-17T00:00:00.000Z'),
    });
    const result = await worker.deliver({
      endpoint: {
        id: 'we_1',
        url: 'https://merchant.example/hook',
        signingSecret: 'x'.repeat(32),
        active: true,
      },
      event,
      attempt: 1,
    });
    expect(result.status).toBe('delivered');
  });

  it('fails an unsafe destination without retrying or fetching', async () => {
    const isolatedRepository = {
      markDelivered: vi.fn(async () => undefined),
      markRetry: vi.fn(async () => undefined),
      markFailed: vi.fn(async () => undefined),
    };
    const fetcher = vi.fn<typeof fetch>();
    const worker = new EventWorker(isolatedRepository, { fetcher });
    const result = await worker.deliver({
      endpoint: {
        id: 'we_unsafe',
        url: 'https://127.0.0.1/hook',
        signingSecret: 'x'.repeat(32),
        active: true,
      },
      event,
      attempt: 1,
    });
    expect(result).toEqual({
      status: 'failed',
      errorCode: 'UNSAFE_WEBHOOK_DESTINATION',
    });
    expect(fetcher).not.toHaveBeenCalled();
    expect(isolatedRepository.markRetry).not.toHaveBeenCalled();
    expect(isolatedRepository.markFailed).toHaveBeenCalledOnce();
  });
});
''',
)

write(
    "workers/event-worker/src/postgres.ts",
    '''import type { Pool } from 'pg';
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

  repositoryFor(
    delivery: ClaimedWebhookDelivery,
    workerId: string,
  ): WebhookDeliveryRepository {
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
''',
)

write(
    "workers/event-worker/src/runner.ts",
    '''import { randomUUID } from 'node:crypto';
import { Pool } from 'pg';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import type { DomainEvent } from '@ozzyl/shared-types';
import { EventWorker } from './index.js';
import {
  PostgresWebhookDeliveryQueue,
  WebhookDeliveryLeaseError,
  type ClaimedWebhookDelivery,
} from './postgres.js';

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
};

const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
const cipher = new AesGcmEnvelopeCipher(
  Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
  required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
);
const pollMs = Number(process.env.EVENT_WORKER_POLL_MS ?? 5_000);
const leaseMs = Number(process.env.EVENT_WORKER_LEASE_MS ?? 60_000);
const timeoutMs = Number(process.env.WEBHOOK_TIMEOUT_MS ?? 5_000);
const maxAttempts = Number(process.env.EVENT_WORKER_MAX_ATTEMPTS ?? 5);
const workerId = process.env.EVENT_WORKER_ID ?? `event-${randomUUID()}`;
const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs, maxAttempts });
let stopping = false;

async function run(): Promise<void> {
  console.info(
    JSON.stringify({ level: 'info', event: 'event.worker.started', worker_id: workerId }),
  );
  while (!stopping) {
    const delivery = await queue.claim(workerId).catch((error) => {
      logError(error, 'EVENT_CLAIM_FAILED');
      return null;
    });
    if (!delivery) {
      await sleep(pollMs);
      continue;
    }

    try {
      const startedAt = new Date();
      await queue.started(delivery.id, workerId, startedAt);
      const event = parseEvent(delivery);
      const signingSecret = decryptSigningSecret(delivery);
      const worker = new EventWorker(queue.repositoryFor(delivery, workerId), {
        timeoutMs,
        maxAttempts,
      });
      await worker.deliver({
        endpoint: {
          id: delivery.endpointId,
          url: delivery.endpointUrl,
          signingSecret,
          active: delivery.endpointActive,
        },
        event,
        attempt: delivery.attempts + 1,
      });
    } catch (error) {
      if (!(error instanceof WebhookDeliveryLeaseError)) {
        const code = errorCode(error);
        await queue
          .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
          .catch((failure) => logError(failure, 'EVENT_FAILURE_STATE_LOST'));
      }
      logError(error, 'EVENT_DELIVERY_FAILED');
    }
  }
  await pool.end();
}

function parseEvent(delivery: ClaimedWebhookDelivery): DomainEvent {
  const value = delivery.eventPayload;
  if (!value || typeof value !== 'object') throw coded('INVALID_EVENT_PAYLOAD');
  const event = value as Record<string, unknown>;
  const allowedTypes = new Set([
    'assessment.completed',
    'verification.verified',
    'verification.failed',
    'courier.connection_failed',
    'order.outcome_recorded',
    'usage.limit_warning',
  ]);
  if (
    event.id !== delivery.eventId ||
    event.type !== delivery.eventType ||
    typeof event.type !== 'string' ||
    !allowedTypes.has(event.type) ||
    event.organizationId !== delivery.organizationId ||
    (delivery.storeId === null
      ? event.storeId !== undefined
      : event.storeId !== delivery.storeId) ||
    typeof event.occurredAt !== 'string' ||
    Number.isNaN(Date.parse(event.occurredAt)) ||
    new Date(event.occurredAt).getTime() !== delivery.occurredAt.getTime() ||
    !event.payload ||
    typeof event.payload !== 'object'
  ) {
    throw coded('INVALID_EVENT_PAYLOAD');
  }
  return event as unknown as DomainEvent;
}

function decryptSigningSecret(delivery: ClaimedWebhookDelivery): string {
  try {
    const value = cipher.decrypt<unknown>(
      delivery.secretEncrypted,
      `webhook-endpoint:${delivery.endpointId}`,
    );
    const signingSecret =
      typeof value === 'string'
        ? value
        : value && typeof value === 'object' && 'signingSecret' in value
          ? String(value.signingSecret)
          : '';
    if (signingSecret.length < 16) throw new Error('Signing secret is invalid');
    return signingSecret;
  } catch {
    throw coded('WEBHOOK_SECRET_DECRYPTION_FAILED');
  }
}

function coded(code: string): Error & { code: string } {
  return Object.assign(new Error(code), { code });
}

function errorCode(error: unknown): string {
  return error && typeof error === 'object' && 'code' in error
    ? String(error.code)
    : 'EVENT_DELIVERY_FAILED';
}

function logError(error: unknown, fallback: string): void {
  console.error(
    JSON.stringify({
      level: 'error',
      event: 'event.worker.error',
      code: errorCode(error) || fallback,
    }),
  );
}

const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const stop = (): void => {
  stopping = true;
};
process.once('SIGTERM', stop);
process.once('SIGINT', stop);
await run();
''',
)

write(
    "workers/event-worker/src/postgres.test.ts",
    '''import { randomUUID } from 'node:crypto';
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

    const stored = await pool.query<{ status: string; attempts: number; claimed_by: string | null }>(
      `select status, attempts, claimed_by from webhook_deliveries where id = $1`,
      [deliveryId],
    );
    expect(stored.rows[0]).toEqual({ status: 'delivered', attempts: 2, claimed_by: null });
  });

  it('clears ownership when a retry is scheduled', async () => {
    const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T03:00:00.000Z');
    const deliveryId = await insertDelivery('retry', { at });
    await expect(queue.claim(`retry-event-${suffix}`, at)).resolves.toMatchObject({ id: deliveryId });
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
    const stored = await pool.query<{ status: string; error_code: string; claimed_by: string | null }>(
      `select status, error_code, claimed_by from webhook_deliveries where id = $1`,
      [deliveryId],
    );
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
''',
)

# Move the reusable envelope cipher into a provider-neutral package while retaining the old export.
index_path = Path("workers/courier-session-worker/src/index.ts")
index_text = index_path.read_text()
index_text = index_text.replace(
    "import { createCipheriv, createDecipheriv, randomBytes, type CipherGCMTypes } from 'node:crypto';\n",
    "import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';\n",
)
start = index_text.index("export class AesGcmEnvelopeCipher")
end = index_text.index("export class SteadfastSessionDriver")
index_text = index_text[:start] + "export { AesGcmEnvelopeCipher } from '@ozzyl/encryption';\n\n" + index_text[end:]
index_path.write_text(index_text)

update_json(
    "workers/courier-session-worker/package.json",
    lambda value: (
        value["scripts"].__setitem__(
            "build", "tsup src/index.ts src/runner.ts --format esm --dts --sourcemap --clean"
        ),
        value["dependencies"].__setitem__("@ozzyl/encryption", "*"),
    ),
)

update_json(
    "workers/event-worker/package.json",
    lambda value: (
        value["scripts"].__setitem__(
            "build", "tsup src/index.ts src/postgres.ts src/runner.ts --format esm --dts --sourcemap --clean"
        ),
        value["scripts"].__setitem__("start", "node dist/runner.js"),
        value["dependencies"].__setitem__("@ozzyl/encryption", "*"),
        value["dependencies"].__setitem__("pg", "^8.16.3"),
        value.__setitem__("devDependencies", {"@types/pg": "^8.15.5"}),
    ),
)

replace(
    "packages/database/src/schema.ts",
    '''export const webhookDeliveries = pgTable(
  'webhook_deliveries',
  {
    id: text('id').primaryKey(),
    endpointId: text('endpoint_id')
      .notNull()
      .references(() => webhookEndpoints.id, { onDelete: 'cascade' }),
    eventId: text('event_id').notNull(),
    status: text('status').notNull(),
    attempts: integer('attempts').notNull().default(0),
    nextAttemptAt: timestamp('next_attempt_at', { withTimezone: true }),
    responseStatus: integer('response_status'),
    errorCode: text('error_code'),
    ...timestamps(),
  },
  (table) => [uniqueIndex('webhook_deliveries_event_unique').on(table.endpointId, table.eventId)],
);
''',
    '''export const webhookDeliveries = pgTable(
  'webhook_deliveries',
  {
    id: text('id').primaryKey(),
    endpointId: text('endpoint_id')
      .notNull()
      .references(() => webhookEndpoints.id, { onDelete: 'cascade' }),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id').references(() => stores.id, { onDelete: 'cascade' }),
    eventId: text('event_id').notNull(),
    eventType: text('event_type').notNull(),
    eventPayload: jsonb('event_payload').notNull(),
    occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull(),
    status: text('status').notNull(),
    attempts: integer('attempts').notNull().default(0),
    nextAttemptAt: timestamp('next_attempt_at', { withTimezone: true }),
    responseStatus: integer('response_status'),
    errorCode: text('error_code'),
    claimedBy: text('claimed_by'),
    claimedAt: timestamp('claimed_at', { withTimezone: true }),
    leaseExpiresAt: timestamp('lease_expires_at', { withTimezone: true }),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    ...timestamps(),
  },
  (table) => [
    uniqueIndex('webhook_deliveries_event_unique').on(table.endpointId, table.eventId),
    index('webhook_deliveries_claim_idx').on(
      table.status,
      table.nextAttemptAt,
      table.leaseExpiresAt,
    ),
    index('webhook_deliveries_scope_idx').on(
      table.organizationId,
      table.storeId,
      table.createdAt,
    ),
  ],
);
''',
)

replace(
    "apps/api/src/postgres.ts",
    """  type OrderOutcomeInput,
  type PlatformAdminOverview,
""",
    """  type DomainEvent,
  type OrderOutcomeInput,
  type PlatformAdminOverview,
""",
)
replace(
    "apps/api/src/postgres.ts",
    """      for (const signal of record.response.signals) {
        await client.query(
          `
            insert into risk_signals (
              id, assessment_id, code, category, score, confidence, description
            ) values ($1, $2, $3, $4, $5, $6, $7)
            on conflict do nothing
          `,
          [
            `sig_${randomUUID()}`,
            record.response.assessment_id,
            signal.code,
            signal.category,
            signal.score,
            signal.confidence ?? null,
            signal.description,
          ],
        );
      }
      await client.query('commit');
""",
    """      for (const signal of record.response.signals) {
        await client.query(
          `
            insert into risk_signals (
              id, assessment_id, code, category, score, confidence, description
            ) values ($1, $2, $3, $4, $5, $6, $7)
            on conflict do nothing
          `,
          [
            `sig_${randomUUID()}`,
            record.response.assessment_id,
            signal.code,
            signal.category,
            signal.score,
            signal.confidence ?? null,
            signal.description,
          ],
        );
      }
      await enqueueWebhookDeliveries(client, {
        id: `evt_assessment_${record.response.assessment_id}`,
        type: 'assessment.completed',
        organizationId: record.identity.organizationId,
        storeId: record.identity.storeId,
        occurredAt: new Date().toISOString(),
        payload: {
          assessmentId: record.response.assessment_id,
          externalOrderId: record.request.external_order_id ?? null,
          riskScore: record.response.risk_score,
          riskLevel: record.response.risk_level,
          decision: record.response.decision,
          confidence: record.response.confidence,
          degraded: record.response.meta?.degraded ?? true,
        },
      });
      await client.query('commit');
""",
)
replace(
    "apps/api/src/postgres.ts",
    """      if (insertedRow) {
        await client.query('commit');
        return { outcomeId: insertedRow.id, replay: false };
      }
""",
    """      if (insertedRow) {
        await enqueueWebhookDeliveries(client, {
          id: `evt_outcome_${insertedRow.id}`,
          type: 'order.outcome_recorded',
          organizationId: input.organizationId,
          storeId: input.storeId,
          occurredAt: input.outcome.occurred_at,
          payload: {
            outcomeId: insertedRow.id,
            assessmentId: input.outcome.assessment_id ?? null,
            externalOrderId: input.outcome.external_order_id,
            outcome: input.outcome.outcome,
            provider: input.outcome.provider ?? null,
          },
        });
        await client.query('commit');
        return { outcomeId: insertedRow.id, replay: false };
      }
""",
)
with Path("apps/api/src/postgres.ts").open("a") as file:
    file.write(
        '''

async function enqueueWebhookDeliveries(
  client: PoolClient,
  event: DomainEvent,
): Promise<void> {
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
'''
    )

# Add scoped webhook fixtures and an outbox assertion to the existing PostgreSQL suite.
replace(
    "apps/api/src/postgres-concurrency.test.ts",
    """  const apiKeyId = `key_concurrency_${suffix}`;
""",
    """  const apiKeyId = `key_concurrency_${suffix}`;
  const storeWebhookId = `we_concurrency_store_${suffix}`;
  const organizationWebhookId = `we_concurrency_org_${suffix}`;
  const otherWebhookId = `we_concurrency_other_${suffix}`;
""",
)
replace(
    "apps/api/src/postgres-concurrency.test.ts",
    """      await client.query(
        `
          insert into api_keys (
            id, organization_id, store_id, environment, key_hash, key_prefix, name, scopes
          ) values ($1, $2, $3, 'test', $4, 'ozg_test_concurrency', 'Concurrency test', $5::jsonb)
        `,
        [apiKeyId, organizationId, storeId, `hash_${suffix}`, JSON.stringify(['*'])],
      );
      await client.query('commit');
""",
    """      await client.query(
        `
          insert into api_keys (
            id, organization_id, store_id, environment, key_hash, key_prefix, name, scopes
          ) values ($1, $2, $3, 'test', $4, 'ozg_test_concurrency', 'Concurrency test', $5::jsonb)
        `,
        [apiKeyId, organizationId, storeId, `hash_${suffix}`, JSON.stringify(['*'])],
      );
      const webhookEvents = JSON.stringify(['assessment.completed', 'order.outcome_recorded']);
      await client.query(
        `
          insert into webhook_endpoints (
            id, organization_id, store_id, url, secret_encrypted, events, status
          ) values
            ($1, $2, $3, 'https://store.example/hook', 'encrypted-store', $7::jsonb, 'active'),
            ($4, $2, null, 'https://organization.example/hook', 'encrypted-org', $7::jsonb, 'active'),
            ($5, $6, null, 'https://other.example/hook', 'encrypted-other', $7::jsonb, 'active')
        `,
        [
          storeWebhookId,
          organizationId,
          storeId,
          organizationWebhookId,
          otherWebhookId,
          otherOrganizationId,
          webhookEvents,
        ],
      );
      await client.query('commit');
""",
)
replace(
    "apps/api/src/postgres-concurrency.test.ts",
    """  it('keeps operation idempotency values isolated by organization and store', async () => {
""",
    """  it('enqueues one scoped webhook delivery per matching endpoint and persisted winner', async () => {
    const assessments = new PostgresAssessmentRepository(pool);
    const outcomes = new PostgresOutcomeRepository(pool);
    const assessment = await assessments.save(
      assessmentRecord(`ras_outbox_${suffix}`, `assessment-outbox-${suffix}`),
    );
    const outcome = await outcomes.save({
      organizationId,
      storeId,
      idempotencyKey: `outcome-outbox-${suffix}`,
      outcome: {
        external_order_id: `ORDER-OUTBOX-${suffix}`,
        assessment_id: assessment.response.assessment_id,
        outcome: 'delivered',
        provider: 'steadfast',
        occurred_at: '2026-07-17T06:00:00.000Z',
      },
    });

    const eventIds = [
      `evt_assessment_${assessment.response.assessment_id}`,
      `evt_outcome_${outcome.outcomeId}`,
    ];
    const stored = await pool.query<{
      endpoint_id: string;
      organization_id: string;
      store_id: string | null;
      event_id: string;
      event_type: string;
      event_payload: unknown;
    }>(
      `
        select endpoint_id, organization_id, store_id, event_id, event_type, event_payload
        from webhook_deliveries
        where event_id = any($1::text[])
        order by event_id, endpoint_id
      `,
      [eventIds],
    );
    expect(stored.rows).toHaveLength(4);
    expect(new Set(stored.rows.map((row) => row.endpoint_id))).toEqual(
      new Set([storeWebhookId, organizationWebhookId]),
    );
    expect(stored.rows.every((row) => row.organization_id === organizationId)).toBe(true);
    expect(stored.rows.every((row) => row.store_id === storeId)).toBe(true);
    expect(stored.rows.some((row) => row.event_type === 'assessment.completed')).toBe(true);
    expect(stored.rows.some((row) => row.event_type === 'order.outcome_recorded')).toBe(true);
    expect(JSON.stringify(stored.rows.map((row) => row.event_payload))).not.toContain('01712345678');
  });

  it('keeps operation idempotency values isolated by organization and store', async () => {
""",
)

replace(
    "config/environment.example",
    """WORKER_ID=courier-sync-local
STEADFAST_LIVE_TESTS=false
""",
    """WORKER_ID=courier-sync-local

# Durable webhook event worker
EVENT_WORKER_ID=event-local
EVENT_WORKER_POLL_MS=5000
EVENT_WORKER_LEASE_MS=60000
EVENT_WORKER_MAX_ATTEMPTS=5
WEBHOOK_TIMEOUT_MS=5000
STEADFAST_LIVE_TESTS=false
""",
)
replace(
    "docker-compose.yml",
    """
volumes:
  ozzyl_guard_postgres:
""",
    """
  event-worker:
    build:
      context: .
      dockerfile: Dockerfile
      target: runtime
    command: ['node', 'workers/event-worker/dist/runner.js']
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
      CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
      CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
      EVENT_WORKER_ID: ${EVENT_WORKER_ID:-event-local}
      EVENT_WORKER_POLL_MS: ${EVENT_WORKER_POLL_MS:-5000}
      EVENT_WORKER_LEASE_MS: ${EVENT_WORKER_LEASE_MS:-60000}
      EVENT_WORKER_MAX_ATTEMPTS: ${EVENT_WORKER_MAX_ATTEMPTS:-5}
      WEBHOOK_TIMEOUT_MS: ${WEBHOOK_TIMEOUT_MS:-5000}
    depends_on:
      migrate:
        condition: service_completed_successfully
    restart: unless-stopped

volumes:
  ozzyl_guard_postgres:
""",
)
