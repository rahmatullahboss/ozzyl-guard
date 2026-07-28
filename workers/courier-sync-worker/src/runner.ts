import { randomUUID } from 'node:crypto';
import { Pool } from 'pg';
import {
  SteadfastAdapter,
  type CourierObservation,
  type CourierSession,
} from '@ozzyl/courier-adapters';
import { AesGcmEnvelopeCipher } from '@ozzyl/courier-session-worker';
import { LeaseHeartbeat } from '@ozzyl/database';
import {
  createMetricRecorder,
  createStructuredLogger,
  observeRepositoryOperation,
  recordDurableQueueSnapshot,
  recordWorkerClaimFailure,
  type RepositoryMetricOperation,
} from '@ozzyl/observability';
import { CourierSyncWorker } from './index.js';
import { PostgresCourierJobQueue, type ClaimedCourierJob } from './postgres.js';

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
const pollMs = Number(process.env.WORKER_POLL_MS ?? 5_000);
const queueMetricsMs = Number(process.env.WORKER_QUEUE_METRICS_MS ?? 30_000);
const leaseMs = Number(process.env.WORKER_LEASE_MS ?? 5 * 60_000);
const leaseRenewMs = Number(process.env.WORKER_LEASE_RENEW_MS ?? Math.floor(leaseMs / 3));
if (!Number.isSafeInteger(queueMetricsMs) || queueMetricsMs <= 0) {
  throw new Error('WORKER_QUEUE_METRICS_MS must be a positive integer');
}
if (!Number.isSafeInteger(leaseRenewMs) || leaseRenewMs <= 0 || leaseRenewMs * 2 > leaseMs) {
  throw new Error(
    'WORKER_LEASE_RENEW_MS must be a positive integer no greater than half the lease',
  );
}
const workerId = process.env.WORKER_ID ?? `courier-sync-${randomUUID()}`;
const log = createStructuredLogger({
  service: 'courier-sync-worker',
  environment: process.env.NODE_ENV ?? 'development',
});
const metrics = createMetricRecorder({
  service: 'courier-sync-worker',
  environment: process.env.NODE_ENV ?? 'development',
});
const jobs = new PostgresCourierJobQueue(pool, { leaseMs });
let stopping = false;
let activeHeartbeat: LeaseHeartbeat | null = null;
let nextQueueMetricsAt = 0;

const observeQueue = <T>(
  operation: RepositoryMetricOperation,
  task: () => Promise<T>,
  isEmpty?: (value: T) => boolean,
): Promise<T> =>
  observeRepositoryOperation(
    metrics,
    {
      repositoryType: 'courier_queue',
      operation,
      ...(isEmpty === undefined ? {} : { isEmpty }),
    },
    task,
  );

async function recordQueueMetricsIfDue(): Promise<void> {
  const now = Date.now();
  if (now < nextQueueMetricsAt) return;
  nextQueueMetricsAt = now + queueMetricsMs;
  const snapshot = await observeQueue('snapshot', () => jobs.snapshot(new Date(now)));
  recordDurableQueueSnapshot(metrics, 'courier_refresh', snapshot);
}

const steadfast = new SteadfastAdapter({
  sessionProvider: {
    async getSession(accountId): Promise<CourierSession | null> {
      const result = await pool.query<{ encrypted_payload: string; expires_at: Date | null }>(
        `select encrypted_payload, expires_at from courier_sessions where courier_account_id = $1 and status = 'valid'`,
        [accountId],
      );
      const row = result.rows[0];
      if (!row) return null;
      const session = cipher.decrypt<CourierSession>(
        row.encrypted_payload,
        `courier-session:${accountId}`,
      );
      return { ...session, ...(row.expires_at ? { expiresAt: row.expires_at.toISOString() } : {}) };
    },
  },
});

const syncWorker = new CourierSyncWorker({
  adapters: new Map([['steadfast', steadfast]]),
  observations: {
    async findFresh(input): Promise<CourierObservation | null> {
      const result = await pool.query<ObservationRow>(
        `
          select provider, total_orders, delivered_orders, returned_orders,
            cancelled_before_shipping, success_rate, confidence, source_type,
            observed_at, expires_at
          from courier_observations
          where store_id = $1 and provider = $2 and phone_hash = $3 and expires_at > $4
          order by observed_at desc limit 1
        `,
        [input.storeId, input.provider, input.phoneHash, input.at],
      );
      return result.rows[0] ? observationFromRow(result.rows[0]) : null;
    },
    async save(input): Promise<void> {
      await pool.query(
        `
          insert into courier_observations (
            id, store_id, provider, phone_hash, total_orders, delivered_orders,
            returned_orders, cancelled_before_shipping, success_rate, confidence,
            source_type, observed_at, expires_at
          ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        `,
        [
          `cob_${randomUUID()}`,
          input.storeId,
          input.observation.provider,
          input.phoneHash,
          input.observation.totalOrders,
          input.observation.deliveredOrders,
          input.observation.returnedOrders,
          input.observation.cancelledBeforeShipping,
          input.observation.successRate,
          input.observation.confidence,
          input.observation.source,
          input.observation.observedAt,
          input.observation.expiresAt,
        ],
      );
    },
  },
  metrics,
  health: {
    async started(jobId, at): Promise<void> {
      await observeQueue('start', () => jobs.started(jobId, workerId, at));
    },
    async completed(jobId, at): Promise<void> {
      await activeHeartbeat?.stop();
      await observeQueue('complete', () => jobs.completed(jobId, workerId, at));
    },
    async failed(jobId, code, retryable, at): Promise<void> {
      await activeHeartbeat?.stop();
      await observeQueue(retryable ? 'retry' : 'fail', () =>
        jobs.failed(jobId, workerId, code, retryable, at),
      );
    },
  },
});

async function run(): Promise<void> {
  log.info('courier.sync.worker.started', { worker_id: workerId });
  while (!stopping) {
    try {
      await recordQueueMetricsIfDue().catch((error) => {
        log.error('courier.sync.queue.metrics.error', {
          code: errorCode(error, 'QUEUE_METRICS_FAILED'),
        });
      });
      const job = await observeQueue(
        'claim',
        () => jobs.claim(workerId),
        (value) => value === null,
      ).catch((error) => {
        recordWorkerClaimFailure(metrics, 'courier_sync');
        throw error;
      });
      if (!job) {
        await new Promise((resolve) => setTimeout(resolve, pollMs));
        continue;
      }
      activeHeartbeat = new LeaseHeartbeat({
        intervalMs: leaseRenewMs,
        renew: (at) => observeQueue('renew', () => jobs.renew(job.id, workerId, at)),
      }).start();
      let payload: ReturnType<typeof parsePayload>;
      try {
        payload = parsePayload(job.payload, job);
      } catch (error) {
        await activeHeartbeat.stop();
        await observeQueue('fail', () =>
          jobs.failed(job.id, workerId, errorCode(error, 'INVALID_JOB_PAYLOAD'), false),
        );
        throw error;
      }
      await syncWorker.sync({
        jobId: job.id,
        storeId: job.storeId,
        courierAccountId: job.courierAccountId,
        provider: job.provider,
        phone: payload.phone,
        phoneHash: payload.phoneHash,
        force: payload.force,
        signal: activeHeartbeat.signal,
      });
      await activeHeartbeat.stopQuietly();
      activeHeartbeat = null;
    } catch (error) {
      await activeHeartbeat?.stopQuietly();
      activeHeartbeat = null;
      log.error('courier.sync.worker.error', {
        code: errorCode(error, 'WORKER_TICK_FAILED'),
        worker_id: workerId,
      });
      await new Promise((resolve) => setTimeout(resolve, Math.min(pollMs, 5_000)));
    }
  }
  await pool.end();
}

interface ObservationRow {
  provider: 'steadfast' | 'pathao' | 'redx' | 'aggregator';
  total_orders: number;
  delivered_orders: number;
  returned_orders: number;
  cancelled_before_shipping: number;
  success_rate: string | null;
  confidence: string;
  source_type: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
  observed_at: Date;
  expires_at: Date;
}

function parsePayload(
  value: unknown,
  job: ClaimedCourierJob,
): { phone: string; phoneHash: string; force: boolean } {
  if (!value || typeof value !== 'object') throw invalidPayload('Courier job payload is invalid');
  const row = value as Record<string, unknown>;
  if (![row.phone, row.phoneHash].every((item) => typeof item === 'string')) {
    throw invalidPayload('Courier job payload is incomplete');
  }
  if (typeof row.organizationId === 'string' && row.organizationId !== job.organizationId) {
    throw invalidPayload('Courier job organization scope does not match the account');
  }
  if (typeof row.storeId === 'string' && row.storeId !== job.storeId) {
    throw invalidPayload('Courier job store scope does not match the account');
  }
  if (typeof row.provider === 'string' && row.provider !== job.provider) {
    throw invalidPayload('Courier job provider does not match the account');
  }
  return {
    phone: String(row.phone),
    phoneHash: String(row.phoneHash),
    force: row.force === true,
  };
}

function invalidPayload(message: string): Error & { code: string } {
  return Object.assign(new Error(message), { code: 'INVALID_JOB_PAYLOAD' });
}

function errorCode(error: unknown, fallback: string): string {
  return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
}

function observationFromRow(row: ObservationRow): CourierObservation {
  return {
    provider: row.provider,
    totalOrders: row.total_orders,
    deliveredOrders: row.delivered_orders,
    returnedOrders: row.returned_orders,
    cancelledBeforeShipping: row.cancelled_before_shipping,
    successRate: row.success_rate === null ? null : Number(row.success_rate),
    confidence: Number(row.confidence),
    source: row.source_type,
    observedAt: row.observed_at.toISOString(),
    expiresAt: row.expires_at.toISOString(),
  };
}

const stop = (): void => {
  stopping = true;
};
process.once('SIGTERM', stop);
process.once('SIGINT', stop);
await run();
