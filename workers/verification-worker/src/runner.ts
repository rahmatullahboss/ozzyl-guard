import { createHmac, randomUUID } from 'node:crypto';
import { Pool } from 'pg';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import { verifyOtp, type OtpDeliveryProvider } from '@ozzyl/verification';
import { VerificationWorker } from './index.js';
import {
  PostgresVerificationDeliveryQueue,
  VerificationDeliveryLeaseError,
  type ClaimedVerificationDelivery,
} from './postgres.js';

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
const leaseMs = positiveInteger('VERIFICATION_WORKER_LEASE_MS', 60_000);
const timeoutMs = positiveInteger('OTP_PROVIDER_TIMEOUT_MS', 10_000);
const maxAttempts = positiveInteger('VERIFICATION_WORKER_MAX_ATTEMPTS', 5);
if (leaseMs <= timeoutMs + 5_000) {
  throw new Error(
    'VERIFICATION_WORKER_LEASE_MS must exceed OTP_PROVIDER_TIMEOUT_MS by more than 5000ms',
  );
}
const workerId = process.env.VERIFICATION_WORKER_ID ?? `verification-${randomUUID()}`;
const provider = await loadProvider(required('OTP_PROVIDER_MODULE'));
const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs, maxAttempts });
let stopping = false;

async function run(): Promise<void> {
  console.info(
    JSON.stringify({ level: 'info', event: 'verification.worker.started', worker_id: workerId }),
  );
  while (!stopping) {
    const delivery = await queue.claim(workerId).catch((error) => {
      logError(error, 'VERIFICATION_CLAIM_FAILED');
      return null;
    });
    if (!delivery) {
      await sleep(pollMs);
      continue;
    }

    try {
      await queue.started(delivery.id, workerId);
      const payload = decryptAndValidate(delivery);
      const worker = new VerificationWorker(provider, queue.reporterFor(delivery, workerId), {
        maxAttempts,
        timeoutMs,
      });
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
      });
    } catch (error) {
      if (!(error instanceof VerificationDeliveryLeaseError)) {
        const code = errorCode(error, 'VERIFICATION_DELIVERY_FAILED');
        await queue
          .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
          .catch((failure) => logError(failure, 'VERIFICATION_FAILURE_STATE_LOST'));
      }
      logError(error, 'VERIFICATION_DELIVERY_FAILED');
    }
  }
  await pool.end();
}

function decryptAndValidate(delivery: ClaimedVerificationDelivery): { phone: string; otp: string } {
  let value: unknown;
  try {
    value = cipher.decrypt<unknown>(delivery.payloadEncrypted, `verification-job:${delivery.id}`);
  } catch {
    throw coded('VERIFICATION_PAYLOAD_DECRYPTION_FAILED');
  }
  if (!value || typeof value !== 'object') throw coded('INVALID_VERIFICATION_PAYLOAD');
  const payload = value as Record<string, unknown>;
  const phone = typeof payload.phone === 'string' ? payload.phone : '';
  const otp = typeof payload.otp === 'string' ? payload.otp : '';
  const phoneHash = createHmac('sha256', phoneHmacKey).update(phone).digest('hex');
  if (
    payload.verificationId !== delivery.verificationId ||
    payload.organizationId !== delivery.organizationId ||
    payload.storeId !== delivery.storeId ||
    payload.purpose !== delivery.purpose ||
    phoneHash !== delivery.phoneHash ||
    !/^\d{6}$/.test(otp) ||
    !verifyOtp(delivery.verificationId, otp, delivery.otpHash, otpSecret)
  ) {
    throw coded('INVALID_VERIFICATION_PAYLOAD');
  }
  return { phone, otp };
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

function coded(code: string): Error & { code: string } {
  return Object.assign(new Error(code), { code });
}

function errorCode(error: unknown, fallback: string): string {
  return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
}

function logError(error: unknown, fallback: string): void {
  console.error(
    JSON.stringify({
      level: 'error',
      event: 'verification.worker.error',
      code: errorCode(error, fallback),
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
