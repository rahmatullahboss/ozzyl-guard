import { createHmac, timingSafeEqual } from 'node:crypto';
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
    !/^\d{6}$/.test(otp) ||
    !verifyOtp(delivery.verificationId, otp, delivery.otpHash, options.otpSecret)
  ) {
    throw new VerificationPayloadError('INVALID_VERIFICATION_PAYLOAD');
  }
  return { phone, otp };
}
