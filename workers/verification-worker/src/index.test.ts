import { describe, expect, it, vi } from 'vitest';
import { OtpProviderError } from '@ozzyl/verification';
import { VerificationWorker } from './index.js';

const delivery = {
  jobId: 'vjob_1',
  verificationId: 'ver_1',
  organizationId: 'org_1',
  storeId: 'sto_1',
  phone: '01712345678',
  otp: '123456',
  purpose: 'cod_order_confirmation',
  expiresAt: new Date('2026-07-17T10:10:00.000Z'),
  attempt: 1,
};

function reporter() {
  return {
    delivered: vi.fn(async () => undefined),
    retry: vi.fn(async () => undefined),
    failed: vi.fn(async () => undefined),
  };
}

describe('VerificationWorker', () => {
  it('delivers without exposing the OTP to reporter state', async () => {
    const state = reporter();
    const provider = {
      send: vi.fn(async ({ message }: { message: string }) => {
        expect(message).toContain('123456');
        return { providerMessageId: 'msg_1', accepted: true };
      }),
    };
    const worker = new VerificationWorker(provider, state, {
      now: () => new Date('2026-07-17T10:00:00.000Z'),
    });
    await expect(worker.process(delivery)).resolves.toEqual({
      status: 'delivered',
      providerMessageId: 'msg_1',
    });
    expect(state.delivered).toHaveBeenCalledOnce();
    expect(JSON.stringify(state.delivered.mock.calls)).not.toContain('123456');
  });

  it('schedules retryable provider failures with bounded backoff', async () => {
    const state = reporter();
    const worker = new VerificationWorker(
      {
        async send() {
          throw new OtpProviderError('PROVIDER_UNAVAILABLE', true, 'temporary outage');
        },
      },
      state,
      { now: () => new Date('2026-07-17T10:00:00.000Z') },
    );
    const result = await worker.process(delivery);
    expect(result).toMatchObject({ status: 'retry_scheduled', errorCode: 'PROVIDER_UNAVAILABLE' });
    expect(state.retry).toHaveBeenCalledOnce();
    expect(state.failed).not.toHaveBeenCalled();
  });

  it('fails provider rejection without retrying', async () => {
    const state = reporter();
    const worker = new VerificationWorker(
      {
        async send() {
          return { providerMessageId: 'rejected', accepted: false };
        },
      },
      state,
      { now: () => new Date('2026-07-17T10:00:00.000Z') },
    );
    await expect(worker.process(delivery)).resolves.toEqual({
      status: 'failed',
      errorCode: 'OTP_PROVIDER_REJECTED',
    });
    expect(state.failed).toHaveBeenCalledOnce();
    expect(state.retry).not.toHaveBeenCalled();
  });
});
