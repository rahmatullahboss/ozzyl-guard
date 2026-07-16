import { Pool } from 'pg';
import {
  AesGcmEnvelopeCipher,
  CourierSessionWorker,
  SteadfastSessionDriver,
  type SessionFailureCode,
  type SteadfastCredentials,
} from './index.js';

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
};

const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 5 });
const cipher = new AesGcmEnvelopeCipher(
  Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
  required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
);
const refreshHours = Number(process.env.COURIER_SESSION_REFRESH_HOURS ?? 6);
const pollMs = Number(process.env.WORKER_POLL_MS ?? 60_000);
let stopping = false;

const worker = new CourierSessionWorker({
  credentials: {
    async load(accountId): Promise<SteadfastCredentials | null> {
      const result = await pool.query<{ encrypted_payload: string }>(
        'select encrypted_payload from courier_credentials where courier_account_id = $1',
        [accountId],
      );
      const payload = result.rows[0]?.encrypted_payload;
      return payload
        ? cipher.decrypt<SteadfastCredentials>(payload, `courier-credential:${accountId}`)
        : null;
    },
  },
  vault: {
    async save(accountId, encryptedPayload, keyVersion): Promise<void> {
      await pool.query(
        `
          insert into courier_sessions (
            courier_account_id, encrypted_payload, encryption_key_version,
            validated_at, status, expires_at
          ) values ($1, $2, $3, now(), 'valid', now() + interval '6 hours')
          on conflict (courier_account_id) do update set
            encrypted_payload = excluded.encrypted_payload,
            encryption_key_version = excluded.encryption_key_version,
            validated_at = now(),
            status = 'valid',
            expires_at = excluded.expires_at,
            updated_at = now()
        `,
        [accountId, encryptedPayload, keyVersion],
      );
    },
  },
  health: {
    async markConnected(accountId, at): Promise<void> {
      await pool.query(
        `
          update courier_accounts set status = 'connected', last_connected_at = $2,
            last_success_at = $2, failure_code = null, updated_at = now()
          where id = $1
        `,
        [accountId, at],
      );
    },
    async markFailure(accountId, code: SessionFailureCode, at): Promise<void> {
      const status = [
        'INVALID_CREDENTIALS',
        'CAPTCHA_REQUIRED',
        'TWO_FACTOR_REQUIRED',
        'SELECTOR_CHANGED',
      ].includes(code)
        ? 'reconnect_required'
        : 'degraded';
      await pool.query(
        `
          update courier_accounts set status = $2, last_failure_at = $3,
            failure_code = $4, updated_at = now()
          where id = $1
        `,
        [accountId, status, at, code],
      );
    },
  },
  cipher,
  driver: new SteadfastSessionDriver(),
});

async function tick(): Promise<void> {
  const accounts = await pool.query<{ id: string }>(
    `
      select id from courier_accounts
      where provider = 'steadfast'
        and status <> 'disabled'
        and (
          last_success_at is null
          or last_success_at < now() - ($1::text || ' hours')::interval
          or status in ('pending', 'expired', 'degraded')
        )
      order by coalesce(last_success_at, to_timestamp(0)) asc
      limit 10
    `,
    [String(refreshHours)],
  );

  for (const account of accounts.rows) {
    if (stopping) return;
    const client = await pool.connect();
    try {
      const lock = await client.query<{ locked: boolean }>(
        'select pg_try_advisory_lock(hashtext($1)) as locked',
        [`courier-session:${account.id}`],
      );
      if (!lock.rows[0]?.locked) continue;
      try {
        await worker.refresh(account.id);
        console.info(
          JSON.stringify({
            level: 'info',
            event: 'courier.session.refreshed',
            accountId: account.id,
          }),
        );
      } catch (error) {
        const code =
          error && typeof error === 'object' && 'code' in error
            ? String(error.code)
            : 'SESSION_REFRESH_FAILED';
        console.error(
          JSON.stringify({
            level: 'error',
            event: 'courier.session.failed',
            accountId: account.id,
            code,
          }),
        );
      } finally {
        await client.query('select pg_advisory_unlock(hashtext($1))', [
          `courier-session:${account.id}`,
        ]);
      }
    } finally {
      client.release();
    }
  }
}

async function run(): Promise<void> {
  console.info(JSON.stringify({ level: 'info', event: 'courier.session.worker.started' }));
  while (!stopping) {
    try {
      await tick();
    } catch {
      console.error(
        JSON.stringify({ level: 'error', event: 'courier.session.worker.tick_failed' }),
      );
    }
    if (!stopping) await new Promise((resolve) => setTimeout(resolve, pollMs));
  }
  await pool.end();
}

const stop = (): void => {
  stopping = true;
};
process.once('SIGTERM', stop);
process.once('SIGINT', stop);
await run();
