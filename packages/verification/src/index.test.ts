import { describe, expect, it } from 'vitest';
import { MemoryVerificationStore, OtpService, VerificationError } from './index.js';

const testSecret = 'x'.repeat(32);

describe('OtpService', () => {
  it('sends and verifies an OTP without storing plaintext', async () => {
    let capturedOtp = '';
    const store = new MemoryVerificationStore();
    const service = new OtpService({
      secret: testSecret,
      store,
      idFactory: () => 'ver_test',
      provider: {
        async send(input) {
          capturedOtp = input.message.match(/\b\d{6}\b/)?.[0] ?? '';
          return { providerMessageId: 'msg_1', accepted: true };
        },
      },
    });

    const sent = await service.send({
      organizationId: 'org_1',
      storeId: 'store_1',
      phone: '01712345678',
      phoneHash: 'phone_hash',
      purpose: 'cod_order_confirmation',
    });
    const record = await store.find(sent.verificationId);
    expect(record?.otpHash).not.toContain(capturedOtp);
    await expect(
      service.verify({ verificationId: sent.verificationId, otp: capturedOtp }),
    ).resolves.toEqual({ verified: true });
  });

  it('locks after repeated invalid attempts', async () => {
    const store = new MemoryVerificationStore();
    const service = new OtpService({
      secret: testSecret,
      store,
      maxAttempts: 2,
      idFactory: () => 'ver_lock',
      provider: {
        async send() {
          return { providerMessageId: 'msg_1', accepted: true };
        },
      },
    });
    await service.send({
      organizationId: 'org_1',
      storeId: 'store_1',
      phone: '01712345678',
      phoneHash: 'phone_hash',
      purpose: 'cod_order_confirmation',
    });
    await expect(
      service.verify({ verificationId: 'ver_lock', otp: '000000' }),
    ).rejects.toBeInstanceOf(VerificationError);
    await expect(
      service.verify({ verificationId: 'ver_lock', otp: '000000' }),
    ).rejects.toBeInstanceOf(VerificationError);
    await expect(
      service.verify({ verificationId: 'ver_lock', otp: '000000' }),
    ).rejects.toMatchObject({ code: 'MAX_ATTEMPTS' });
  });
});
