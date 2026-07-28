import { randomUUID } from 'node:crypto';
import { Pool } from 'pg';
import { LeaseHeartbeat } from '@ozzyl/database';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import {
  createMetricRecorder,
  createStructuredLogger,
  createTracer,
  observeRepositoryOperation,
  parsePersistedTraceContext,
  recordDurableQueueSnapshot,
  recordWorkerClaimFailure,
  type RepositoryMetricOperation,
} from '@ozzyl/observability';
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

const positiveInteger = (name: string, fallback: number): number => {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isSafeInteger(value) || value <= 0) {
    throw new Error(`${name} must be a positive integer`);
  }
  return value;
};

const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
const cipher = new AesGcmEnvelopeCipher(
  Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
  required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
);
const pollMs = positiveInteger('EVENT_WORKER_POLL_MS', 5_000);
const queueMetricsMs = positiveInteger('EVENT_WORKER_QUEUE_METRICS_MS', 30_000);
const leaseMs = positiveInteger('EVENT_WORKER_LEASE_MS', 60_000);
const leaseRenewMs = positiveInteger('EVENT_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
const timeoutMs = positiveInteger('WEBHOOK_TIMEOUT_MS', 5_000);
const maxAttempts = positiveInteger('EVENT_WORKER_MAX_ATTEMPTS', 5);
if (leaseMs <= timeoutMs + 5_000) {
  throw new Error('EVENT_WORKER_LEASE_MS must exceed WEBHOOK_TIMEOUT_MS by more than 5000ms');
}
if (leaseRenewMs * 2 > leaseMs) {
  throw new Error('EVENT_WORKER_LEASE_RENEW_MS must not exceed half the lease');
}
const workerId = process.env.EVENT_WORKER_ID ?? `event-${randomUUID()}`;
const log = createStructuredLogger({
  service: 'event-worker',
  environment: process.env.NODE_ENV ?? 'development',
});
const metrics = createMetricRecorder({
  service: 'event-worker',
  environment: process.env.NODE_ENV ?? 'development',
});
const tracer = createTracer({
  service: 'event-worker',
  environment: process.env.NODE_ENV ?? 'development',
});
const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs, maxAttempts });
let stopping = false;
let nextQueueMetricsAt = 0;

const observeQueue = <T>(
  operation: RepositoryMetricOperation,
  task: () => Promise<T>,
  isEmpty?: (value: T) => boolean,
): Promise<T> =>
  observeRepositoryOperation(
    metrics,
    {
      repositoryType: 'webhook_queue',
      operation,
      ...(isEmpty === undefined ? {} : { isEmpty }),
    },
    task,
  );

async function recordQueueMetricsIfDue(): Promise<void> {
  const now = Date.now();
  if (now < nextQueueMetricsAt) return;
  nextQueueMetricsAt = now + queueMetricsMs;
  const snapshot = await observeQueue('snapshot', () => queue.snapshot(new Date(now)));
  recordDurableQueueSnapshot(metrics, 'webhook_delivery', snapshot);
}

async function run(): Promise<void> {
  log.info('event.worker.started', { worker_id: workerId });
  while (!stopping) {
    await recordQueueMetricsIfDue().catch((error) => logError(error, 'QUEUE_METRICS_FAILED'));
    const delivery = await observeQueue(
      'claim',
      () => queue.claim(workerId),
      (value) => value === null,
    ).catch((error) => {
      recordWorkerClaimFailure(metrics, 'webhook_delivery');
      logError(error, 'EVENT_CLAIM_FAILED');
      return null;
    });
    if (!delivery) {
      await sleep(pollMs);
      continue;
    }

    let heartbeat: LeaseHeartbeat | null = null;
    try {
      const startedAt = new Date();
      await observeQueue('start', () => queue.started(delivery.id, workerId, startedAt));
      heartbeat = new LeaseHeartbeat({
        intervalMs: leaseRenewMs,
        renew: (at) => observeQueue('renew', () => queue.renew(delivery.id, workerId, at)),
      }).start();
      const event = parseEvent(delivery);
      if (!delivery.endpointActive) {
        await heartbeat.stop();
        await observeQueue('fail', () =>
          queue.failed(delivery.id, workerId, {
            errorCode: 'ENDPOINT_INACTIVE',
            at: new Date(),
          }),
        );
        heartbeat = null;
        continue;
      }
      const signingSecret = decryptSigningSecret(delivery);
      const repository = queue.repositoryFor(
        delivery,
        workerId,
        () => heartbeat?.stop() ?? Promise.resolve(),
      );
      const worker = new EventWorker(
        {
          markDelivered: (input) => observeQueue('complete', () => repository.markDelivered(input)),
          markRetry: (input) => observeQueue('retry', () => repository.markRetry(input)),
          markFailed: (input) => observeQueue('fail', () => repository.markFailed(input)),
        },
        {
          timeoutMs,
          maxAttempts,
          metrics,
          tracer,
        },
      );
      const traceContext = parsePersistedTraceContext(delivery.traceContext);
      await worker.deliver({
        endpoint: {
          id: delivery.endpointId,
          url: delivery.endpointUrl,
          signingSecret,
          active: true,
        },
        event,
        attempt: delivery.attempts + 1,
        signal: heartbeat.signal,
        ...(traceContext === null ? {} : { traceContext }),
      });
      await heartbeat.stopQuietly();
      heartbeat = null;
    } catch (error) {
      let failure = error;
      if (heartbeat) {
        try {
          await heartbeat.stop();
        } catch (leaseError) {
          failure = leaseError;
        }
        heartbeat = null;
      }
      if (!(failure instanceof WebhookDeliveryLeaseError)) {
        const code = errorCode(failure, 'EVENT_DELIVERY_FAILED');
        await observeQueue('fail', () =>
          queue.failed(delivery.id, workerId, { errorCode: code, at: new Date() }),
        ).catch((stateError) => logError(stateError, 'EVENT_FAILURE_STATE_LOST'));
      }
      logError(failure, 'EVENT_DELIVERY_FAILED');
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

function errorCode(error: unknown, fallback: string): string {
  return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
}

function logError(error: unknown, fallback: string): void {
  log.error('event.worker.error', {
    code: errorCode(error, fallback),
    worker_id: workerId,
  });
}

const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const stop = (): void => {
  stopping = true;
};
process.once('SIGTERM', stop);
process.once('SIGINT', stop);
await run();
