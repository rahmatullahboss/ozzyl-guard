import { randomUUID } from 'node:crypto';
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
