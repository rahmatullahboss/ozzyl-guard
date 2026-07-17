from pathlib import Path


def write(path: str, content: str) -> None:
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content)


def replace_once(path: str, old: str, new: str) -> None:
    target = Path(path)
    text = target.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected one match in {path}, found {count}: {old[:160]!r}")
    target.write_text(text.replace(old, new))


replace_once(
    "workers/verification-worker/src/postgres.ts",
    """      await client.query(
        `
          update verification_jobs vj
          set status = 'failed', error_code = 'VERIFICATION_SCOPE_MISMATCH',
            completed_at = $1, claimed_by = null, claimed_at = null,
            lease_expires_at = null, updated_at = now()
          where vj.status not in ('delivered', 'failed')
            and not exists (
              select 1
              from verification_sessions vs
              join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
              where vs.id = vj.verification_session_id
                and vs.organization_id = vj.organization_id
                and vs.store_id = vj.store_id
            )
        `,
        [at],
      );
""",
    """      const mismatched = await client.query<{ verification_session_id: string }>(
        `
          update verification_jobs vj
          set status = 'failed', error_code = 'VERIFICATION_SCOPE_MISMATCH',
            completed_at = $1, claimed_by = null, claimed_at = null,
            lease_expires_at = null, updated_at = now()
          where vj.status not in ('delivered', 'failed')
            and not exists (
              select 1
              from verification_sessions vs
              join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
              where vs.id = vj.verification_session_id
                and vs.organization_id = vj.organization_id
                and vs.store_id = vj.store_id
            )
          returning vj.verification_session_id
        `,
        [at],
      );
      for (const row of mismatched.rows) {
        await this.failSession(
          client,
          row.verification_session_id,
          'VERIFICATION_SCOPE_MISMATCH',
          at,
        );
      }
""",
)

replace_once(
    "workers/verification-worker/src/postgres.ts",
    """          and vs.id = vj.verification_session_id
          and vs.status = 'queued' and vs.expires_at > $3
""",
    """          and vs.id = vj.verification_session_id
          and vs.organization_id = vj.organization_id
          and vs.store_id = vj.store_id
          and vs.status = 'queued' and vs.expires_at > $3
""",
)
replace_once(
    "workers/verification-worker/src/postgres.ts",
    """            and vs.id = vj.verification_session_id
            and vs.status = 'queued' and vs.expires_at > $4
""",
    """            and vs.id = vj.verification_session_id
            and vs.organization_id = vj.organization_id
            and vs.store_id = vj.store_id
            and vs.status = 'queued' and vs.expires_at > $4
""",
)
replace_once(
    "workers/verification-worker/src/postgres.ts",
    """        update verification_jobs
        set status = 'retry_scheduled', next_attempt_at = $3, error_code = $4,
          completed_at = null, claimed_by = null, claimed_at = null,
          lease_expires_at = null, updated_at = now()
        where id = $1 and claimed_by = $2 and status = 'processing'
          and lease_expires_at > $5
""",
    """        update verification_jobs vj
        set status = 'retry_scheduled', next_attempt_at = $3, error_code = $4,
          completed_at = null, claimed_by = null, claimed_at = null,
          lease_expires_at = null, updated_at = now()
        from verification_sessions vs
        where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'processing'
          and vj.lease_expires_at > $5
          and vs.id = vj.verification_session_id
          and vs.organization_id = vj.organization_id
          and vs.store_id = vj.store_id
""",
)
replace_once(
    "workers/verification-worker/src/postgres.ts",
    """          update verification_jobs
          set status = 'failed', error_code = $3, completed_at = $4,
            claimed_by = null, claimed_at = null, lease_expires_at = null,
            updated_at = now()
          where id = $1 and claimed_by = $2 and status in ('claimed', 'processing')
            and lease_expires_at > $4
          returning verification_session_id, organization_id, store_id
""",
    """          update verification_jobs vj
          set status = 'failed', error_code = $3, completed_at = $4,
            claimed_by = null, claimed_at = null, lease_expires_at = null,
            updated_at = now()
          from verification_sessions vs
          where vj.id = $1 and vj.claimed_by = $2
            and vj.status in ('claimed', 'processing')
            and vj.lease_expires_at > $4
            and vs.id = vj.verification_session_id
            and vs.organization_id = vj.organization_id
            and vs.store_id = vj.store_id
          returning vj.verification_session_id, vj.organization_id, vj.store_id
""",
)

replace_once(
    "workers/verification-worker/src/postgres.test.ts",
    """    const stored = await pool.query<{ status: string; error_code: string }>(
      `select status, error_code from verification_jobs where id = $1`,
      [jobId],
    );
    expect(stored.rows[0]).toEqual({
      status: 'failed',
      error_code: 'VERIFICATION_SCOPE_MISMATCH',
    });
""",
    """    const stored = await pool.query<{
      status: string;
      error_code: string;
      session_status: string;
    }>(
      `
        select vj.status, vj.error_code, vs.status as session_status
        from verification_jobs vj
        join verification_sessions vs on vs.id = vj.verification_session_id
        where vj.id = $1
      `,
      [jobId],
    );
    expect(stored.rows[0]).toEqual({
      status: 'failed',
      error_code: 'VERIFICATION_SCOPE_MISMATCH',
      session_status: 'delivery_failed',
    });
""",
)

write(
    "workers/verification-worker/src/payload.ts",
    """import { createHmac, timingSafeEqual } from 'node:crypto';
import type { EnvelopeCipher } from '@ozzyl/encryption';
import { verifyOtp } from '@ozzyl/verification';
import type { ClaimedVerificationDelivery } from './postgres.js';

export class VerificationPayloadError extends Error {
  constructor(readonly code: string) {
    super(code);
    this.name = 'VerificationPayloadError';
  }
}

export function decryptAndValidateVerificationPayload(
  delivery: ClaimedVerificationDelivery,
  options: {
    cipher: EnvelopeCipher;
    phoneHmacKey: string;
    otpSecret: string;
  },
): { phone: string; otp: string } {
  let value: unknown;
  try {
    value = options.cipher.decrypt<unknown>(
      delivery.payloadEncrypted,
      `verification-job:${delivery.id}`,
    );
  } catch {
    throw new VerificationPayloadError('VERIFICATION_PAYLOAD_DECRYPTION_FAILED');
  }
  if (!value || typeof value !== 'object') {
    throw new VerificationPayloadError('INVALID_VERIFICATION_PAYLOAD');
  }
  const payload = value as Record<string, unknown>;
  const phone = typeof payload.phone === 'string' ? payload.phone : '';
  const otp = typeof payload.otp === 'string' ? payload.otp : '';
  const expectedPhoneHash = createHmac('sha256', options.phoneHmacKey).update(phone).digest();
  const storedPhoneHash = Buffer.from(delivery.phoneHash, 'hex');
  const phoneMatches =
    storedPhoneHash.length === expectedPhoneHash.length &&
    timingSafeEqual(storedPhoneHash, expectedPhoneHash);
  if (
    payload.verificationId !== delivery.verificationId ||
    payload.organizationId !== delivery.organizationId ||
    payload.storeId !== delivery.storeId ||
    payload.purpose !== delivery.purpose ||
    !phoneMatches ||
    !/^\\d{6}$/.test(otp) ||
    !verifyOtp(delivery.verificationId, otp, delivery.otpHash, options.otpSecret)
  ) {
    throw new VerificationPayloadError('INVALID_VERIFICATION_PAYLOAD');
  }
  return { phone, otp };
}
""",
)

write(
    "workers/verification-worker/src/payload.test.ts",
    """import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import { hashOtp } from '@ozzyl/verification';
import type { ClaimedVerificationDelivery } from './postgres.js';
import {
  VerificationPayloadError,
  decryptAndValidateVerificationPayload,
} from './payload.js';

const phone = '01712345678';
const otp = '123456';
const phoneHmacKey = 'p'.repeat(32);
const otpSecret = 'o'.repeat(32);
const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 5), 'test-v1');

function delivery(overrides: Partial<ClaimedVerificationDelivery> = {}): ClaimedVerificationDelivery {
  const base = {
    id: 'vjob_1',
    verificationId: 'ver_1',
    organizationId: 'org_1',
    storeId: 'sto_1',
    purpose: 'cod_order_confirmation',
    phoneHash: createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
    otpHash: hashOtp('ver_1', otp, otpSecret),
    expiresAt: new Date('2026-07-17T10:10:00.000Z'),
    attempts: 0,
  };
  return {
    ...base,
    payloadEncrypted: cipher.encrypt(
      {
        verificationId: base.verificationId,
        organizationId: base.organizationId,
        storeId: base.storeId,
        phone,
        otp,
        purpose: base.purpose,
      },
      `verification-job:${base.id}`,
    ),
    ...overrides,
  };
}

describe('verification payload validation', () => {
  it('decrypts context-bound payloads only when all persisted assertions match', () => {
    expect(
      decryptAndValidateVerificationPayload(delivery(), { cipher, phoneHmacKey, otpSecret }),
    ).toEqual({ phone, otp });
  });

  it('rejects wrong encryption context without exposing payload values', () => {
    const value = delivery({ id: 'vjob_other' });
    expect(() =>
      decryptAndValidateVerificationPayload(value, { cipher, phoneHmacKey, otpSecret }),
    ).toThrowError(
      expect.objectContaining<Partial<VerificationPayloadError>>({
        code: 'VERIFICATION_PAYLOAD_DECRYPTION_FAILED',
      }),
    );
  });

  it('rejects phone, OTP, purpose, or tenant assertion mismatches', () => {
    for (const value of [
      delivery({ phoneHash: '00'.repeat(32) }),
      delivery({ otpHash: hashOtp('ver_1', '654321', otpSecret) }),
      delivery({ purpose: 'account_recovery' }),
      delivery({ organizationId: 'org_other' }),
      delivery({ storeId: 'sto_other' }),
    ]) {
      expect(() =>
        decryptAndValidateVerificationPayload(value, { cipher, phoneHmacKey, otpSecret }),
      ).toThrowError(
        expect.objectContaining<Partial<VerificationPayloadError>>({
          code: 'INVALID_VERIFICATION_PAYLOAD',
        }),
      );
    }
  });
});
""",
)

replace_once(
    "workers/verification-worker/src/runner.ts",
    """import { createHmac, randomUUID } from 'node:crypto';
""",
    """import { randomUUID } from 'node:crypto';
""",
)
replace_once(
    "workers/verification-worker/src/runner.ts",
    """import { verifyOtp, type OtpDeliveryProvider } from '@ozzyl/verification';
""",
    """import type { OtpDeliveryProvider } from '@ozzyl/verification';
""",
)
replace_once(
    "workers/verification-worker/src/runner.ts",
    """  VerificationDeliveryLeaseError,
  type ClaimedVerificationDelivery,
} from './postgres.js';
""",
    """  VerificationDeliveryLeaseError,
} from './postgres.js';
import { decryptAndValidateVerificationPayload } from './payload.js';
""",
)
replace_once(
    "workers/verification-worker/src/runner.ts",
    """      const payload = decryptAndValidate(delivery);
""",
    """      const payload = decryptAndValidateVerificationPayload(delivery, {
        cipher,
        phoneHmacKey,
        otpSecret,
      });
""",
)
start = """function decryptAndValidate(delivery: ClaimedVerificationDelivery): { phone: string; otp: string } {
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
    !/^\\d{6}$/.test(otp) ||
    !verifyOtp(delivery.verificationId, otp, delivery.otpHash, otpSecret)
  ) {
    throw coded('INVALID_VERIFICATION_PAYLOAD');
  }
  return { phone, otp };
}

"""
replace_once("workers/verification-worker/src/runner.ts", start, "")
replace_once(
    "workers/verification-worker/src/runner.ts",
    """function coded(code: string): Error & { code: string } {
  return Object.assign(new Error(code), { code });
}

""",
    "",
)

replace_once(
    "docker-compose.yml",
    """      SESSION_CSRF_SECRET: ${SESSION_CSRF_SECRET:?SESSION_CSRF_SECRET is required}
      PHONE_HMAC_KEY: ${PHONE_HMAC_KEY:?PHONE_HMAC_KEY is required}
""",
    """      SESSION_CSRF_SECRET: ${SESSION_CSRF_SECRET:?SESSION_CSRF_SECRET is required}
      PHONE_HMAC_KEY: ${PHONE_HMAC_KEY:?PHONE_HMAC_KEY is required}
      OTP_HASH_SECRET: ${OTP_HASH_SECRET:?OTP_HASH_SECRET is required}
      CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
      CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
""",
)
replace_once(
    "docker-compose.yml",
    """  event-worker:
""",
    """  verification-worker:
    profiles: ['verification']
    build:
      context: .
      dockerfile: Dockerfile
      target: runtime
    command: ['node', 'workers/verification-worker/dist/runner.js']
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
      CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
      CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
      PHONE_HMAC_KEY: ${PHONE_HMAC_KEY:?PHONE_HMAC_KEY is required}
      OTP_HASH_SECRET: ${OTP_HASH_SECRET:?OTP_HASH_SECRET is required}
      OTP_PROVIDER_MODULE: ${OTP_PROVIDER_MODULE:-}
      OTP_SENDER_ID: ${OTP_SENDER_ID:-}
      OTP_PROVIDER_API_KEY: ${OTP_PROVIDER_API_KEY:-}
      VERIFICATION_WORKER_ID: ${VERIFICATION_WORKER_ID:-verification-local}
      VERIFICATION_WORKER_POLL_MS: ${VERIFICATION_WORKER_POLL_MS:-5000}
      VERIFICATION_WORKER_LEASE_MS: ${VERIFICATION_WORKER_LEASE_MS:-60000}
      VERIFICATION_WORKER_MAX_ATTEMPTS: ${VERIFICATION_WORKER_MAX_ATTEMPTS:-5}
      OTP_PROVIDER_TIMEOUT_MS: ${OTP_PROVIDER_TIMEOUT_MS:-10000}
    depends_on:
      migrate:
        condition: service_completed_successfully
    restart: unless-stopped

  event-worker:
""",
)
