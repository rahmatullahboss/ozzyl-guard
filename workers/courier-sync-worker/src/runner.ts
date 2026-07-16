import { randomUUID } from 'node:crypto';
import { Pool } from 'pg';
import {
  SteadfastAdapter,
  type CourierObservation,
  type CourierSession,
} from '@ozzyl/courier-adapters';
import { AesGcmEnvelopeCipher } from '@ozzyl/courier-session-worker';
import { CourierSyncWorker } from './index.js';

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
let stopping = false;

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
  health: {
    async started(jobId, at): Promise<void> {
      await pool.query(
        `update courier_jobs set status = 'processing', started_at = $2, attempts = attempts + 1, updated_at = now() where id = $1`,
        [jobId, at],
      );
    },
    async completed(jobId, at): Promise<void> {
      await pool.query(
        `update courier_jobs set status = 'completed', completed_at = $2, error_code = null, updated_at = now() where id = $1`,
        [jobId, at],
      );
    },
    async failed(jobId, code, retryable, at): Promise<void> {
      await pool.query(
        `
          update courier_jobs set status = case when $3 and attempts < 5 then 'queued' else 'failed' end,
            scheduled_at = case when $3 and attempts < 5 then $4 + (least(3600, power(2, attempts) * 30)::text || ' seconds')::interval else scheduled_at end,
            completed_at = case when $3 and attempts < 5 then null else $4 end,
            error_code = $2, updated_at = now()
          where id = $1
        `,
        [jobId, code, retryable, at],
      );
    },
  },
});

async function claimJob(): Promise<JobRow | null> {
  const client = await pool.connect();
  try {
    await client.query('begin');
    const result = await client.query<JobRow>(
      `
        select cj.id, cj.courier_account_id, cj.payload
        from courier_jobs cj
        where cj.status = 'queued' and cj.job_type = 'customer_observation_refresh'
          and cj.scheduled_at <= now()
        order by cj.scheduled_at asc
        for update skip locked
        limit 1
      `,
    );
    const row = result.rows[0];
    if (!row) {
      await client.query('commit');
      return null;
    }
    await client.query(
      `update courier_jobs set status = 'claimed', updated_at = now() where id = $1`,
      [row.id],
    );
    await client.query('commit');
    return row;
  } catch (error) {
    await client.query('rollback').catch(() => undefined);
    throw error;
  } finally {
    client.release();
  }
}

async function run(): Promise<void> {
  console.info(JSON.stringify({ level: 'info', event: 'courier.sync.worker.started' }));
  while (!stopping) {
    try {
      const job = await claimJob();
      if (!job) {
        await new Promise((resolve) => setTimeout(resolve, pollMs));
        continue;
      }
      const payload = parsePayload(job.payload);
      await syncWorker.sync({
        jobId: job.id,
        storeId: payload.storeId,
        courierAccountId: job.courier_account_id,
        provider: payload.provider,
        phone: payload.phone,
        phoneHash: payload.phoneHash,
        force: payload.force,
      });
    } catch (error) {
      const code =
        error && typeof error === 'object' && 'code' in error
          ? String(error.code)
          : 'WORKER_TICK_FAILED';
      console.error(JSON.stringify({ level: 'error', event: 'courier.sync.worker.error', code }));
      await new Promise((resolve) => setTimeout(resolve, Math.min(pollMs, 5_000)));
    }
  }
  await pool.end();
}

interface JobRow {
  id: string;
  courier_account_id: string;
  payload: unknown;
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

function parsePayload(value: unknown): {
  storeId: string;
  provider: string;
  phone: string;
  phoneHash: string;
  force: boolean;
} {
  if (!value || typeof value !== 'object') throw new Error('Courier job payload is invalid');
  const row = value as Record<string, unknown>;
  if (
    ![row.storeId, row.provider, row.phone, row.phoneHash].every((item) => typeof item === 'string')
  ) {
    throw new Error('Courier job payload is incomplete');
  }
  return {
    storeId: String(row.storeId),
    provider: String(row.provider),
    phone: String(row.phone),
    phoneHash: String(row.phoneHash),
    force: row.force === true,
  };
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
