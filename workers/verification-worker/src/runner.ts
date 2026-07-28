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
import type { OtpDeliveryProvider } from '@ozzyl/verification';
import { VerificationWorker } from './index.js';
import { PostgresVerificationDeliveryQueue, VerificationDeliveryLeaseError } from './postgres.js';
import { decryptAndValidateVerificationPayload } from './payload.js';

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
};

const positiveInteger = (name: string, fallback: number): number => {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isSafeInteger(value) || value <= 0)
    throw new Error(`${name} must be a positive integer`);
  return value;
};

const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
const cipher = new AesGcmEnvelopeCipher(
  Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
  required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
);
const otpSecret = required('OTP_HASH_SECRET');
const phoneHmacKey = required('PHONE_HMAC_KEY');
const pollMs = positiveInteger('VERIFICATION_WORKER_POLL_MS', 5_000);
const queueMetricsMs = positiveInteger('VERIFICATION_WORKER_QUEUE_METRICS_MS', 30_000);
const leaseMs = positiveInteger('VERIFICATION_WORKER_LEASE_MS', 60_000);
const leaseRenewMs = positiveInteger('VERIFICATION_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
const timeoutMs = positiveInteger('OTP_PROVIDER_TIMEOUT_MS', 10_000);
const maxAttempts = positiveInteger('VERIFICATION_WORKER_MAX_ATTEMPTS', 5);
if (leaseMs <= timeoutMs + 5_000) {
  throw new Error(
    'VERIFICATION_WORKER_LEASE_MS must exceed OTP_PROVIDER_TIMEOUT_MS by more than 5000ms',
  );
}
if (leaseRenewMs * 2 > leaseMs) {
  throw new Error('VERIFICATION_WORKER_LEASE_RENEW_MS must not exceed half the lease');
}
const workerId = process.env.VERIFICATION_WORKER_ID ?? `verification-${randomUUID()}`;
const log = createStructuredLogger({
  service: 'verification-worker',
  environment: process.env.NODE_ENV ?? 'development',
});
const metrics = createMetricRecorder({
  service: 'verification-worker',
  environment: process.env.NODE_ENV ?? 'development',
});
const tracer = createTracer({
  service: 'verification-worker',
  environment: process.env.NODE_ENV ?? 'development',
});
const provider = await loadProvider(required('OTP_PROVIDER_MODULE'));
const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs, maxAttempts });
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
      repositoryType: 'verification_queue',
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
  recordDurableQueueSnapshot(metrics, 'verification_delivery', snapshot);
}

async function run(): Promise<void> {
  log.info('verification.worker.started', { worker_id: workerId });
  while (!stopping) {
    await recordQueueMetricsIfDue().catch((error) => logError(error, 'QUEUE_METRICS_FAILED'));
    const delivery = await observeQueue(
      'claim',
      () => queue.claim(workerId),
      (value) => value === null,
    ).catch((error) => {
      recordWorkerClaimFailure(metrics, 'verification_delivery');
      logError(error, 'VERIFICATION_CLAIM_FAILED');
      return null;
    });
    if (!delivery) {
      await sleep(pollMs);
      continue;
    }

    let heartbeat: LeaseHeartbeat | null = null;
    try {
      await observeQueue('start', () => queue.started(delivery.id, workerId));
      heartbeat = new LeaseHeartbeat({
        intervalMs: leaseRenewMs,
        renew: (at) => observeQueue('renew', () => queue.renew(delivery.id, workerId, at)),
      }).start();
      const payload = decryptAndValidateVerificationPayload(delivery, {
        cipher,
        phoneHmacKey,
        otpSecret,
      });
      const reporter = queue.reporterFor(
        delivery,
        workerId,
        () => heartbeat?.stop() ?? Promise.resolve(),
      );
      const worker = new VerificationWorker(
        provider,
        {
          delivered: (jobId, providerMessageId, at) =>
            observeQueue('complete', () => reporter.delivered(jobId, providerMessageId, at)),
          retry: (jobId, errorCode, nextAttemptAt, at) =>
            observeQueue('retry', () => reporter.retry(jobId, errorCode, nextAttemptAt, at)),
          failed: (jobId, errorCode, at) =>
            observeQueue('fail', () => reporter.failed(jobId, errorCode, at)),
        },
        {
          maxAttempts,
          timeoutMs,
          metrics,
          tracer,
        },
      );
      const traceContext = parsePersistedTraceContext(delivery.traceContext);
      await worker.process({
        jobId: delivery.id,
        verificationId: delivery.verificationId,
        organizationId: delivery.organizationId,
        storeId: delivery.storeId,
        phone: payload.phone,
        otp: payload.otp,
        purpose: delivery.purpose,
        expiresAt: delivery.expiresAt,
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
      if (!(failure instanceof VerificationDeliveryLeaseError)) {
        const code = errorCode(failure, 'VERIFICATION_DELIVERY_FAILED');
        await observeQueue('fail', () =>
          queue.failed(delivery.id, workerId, { errorCode: code, at: new Date() }),
        ).catch((stateError) => logError(stateError, 'VERIFICATION_FAILURE_STATE_LOST'));
      }
      logError(failure, 'VERIFICATION_DELIVERY_FAILED');
    }
  }
  await pool.end();
}

async function loadProvider(moduleName: string): Promise<OtpDeliveryProvider> {
  const loaded = (await import(moduleName)) as {
    createOtpDeliveryProvider?: () => OtpDeliveryProvider | Promise<OtpDeliveryProvider>;
  };
  if (typeof loaded.createOtpDeliveryProvider !== 'function') {
    throw new Error('OTP provider module must export createOtpDeliveryProvider()');
  }
  const configured = await loaded.createOtpDeliveryProvider();
  if (!configured || typeof configured.send !== 'function') {
    throw new Error('OTP provider module returned an invalid provider');
  }
  return configured;
}

function errorCode(error: unknown, fallback: string): string {
  return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
}

function logError(error: unknown, fallback: string): void {
  log.error('verification.worker.error', {
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
