import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import { hashOtp } from '@ozzyl/verification';
import type { ClaimedVerificationDelivery } from './postgres.js';
import { VerificationPayloadError, decryptAndValidateVerificationPayload } from './payload.js';

const phone = '01712345678';
const otp = '123456';
const phoneHmacKey = 'p'.repeat(32);
const otpSecret = 'o'.repeat(32);
const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 5), 'test-v1');

function delivery(
  overrides: Partial<ClaimedVerificationDelivery> = {},
): ClaimedVerificationDelivery {
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
