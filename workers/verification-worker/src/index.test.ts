import { describe, expect, it, vi } from 'vitest';
import { createMetricRecorder } from '@ozzyl/observability';
import { OtpProviderError } from '@ozzyl/verification';
import { VerificationWorker } from './index.js';
function parseMetricLine(line: string): unknown {
  return JSON.parse(line) as unknown;
}

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
  it('delivers with bounded metrics without exposing the OTP', async () => {
    const state = reporter();
    const metricLines: string[] = [];
    const ticks = [10, 12, 16, 18];
    const provider = {
      send: vi.fn(async ({ message }: { message: string }) => {
        expect(message).toContain('123456');
        return { providerMessageId: 'msg_1', accepted: true };
      }),
    };
    const worker = new VerificationWorker(provider, state, {
      now: () => new Date('2026-07-17T10:00:00.000Z'),
      monotonicNow: () => ticks.shift() ?? 18,
      metrics: createMetricRecorder({
        service: 'verification-worker-test',
        environment: 'test',
        write: (line) => metricLines.push(line),
      }),
    });
    await expect(worker.process(delivery)).resolves.toEqual({
      status: 'delivered',
      providerMessageId: 'msg_1',
    });
    expect(state.delivered).toHaveBeenCalledOnce();
    expect(JSON.stringify(state.delivered.mock.calls)).not.toContain('123456');
    expect(metricLines.map(parseMetricLine)).toEqual([
      expect.objectContaining({
        name: 'ozzyl.provider.operations',
        attributes: {
          provider_type: 'verification_delivery',
          operation: 'send',
          outcome: 'success',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.provider.operation.duration',
        value: 4,
        attributes: {
          provider_type: 'verification_delivery',
          operation: 'send',
          outcome: 'success',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.operations',
        attributes: {
          worker_type: 'verification_delivery',
          operation: 'send',
          outcome: 'completed',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.operation.duration',
        value: 8,
        attributes: {
          worker_type: 'verification_delivery',
          operation: 'send',
          outcome: 'completed',
        },
      }),
    ]);
    expect(metricLines.join('\n')).not.toContain('123456');
    expect(metricLines.join('\n')).not.toContain('ver_1');
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

  it('aborts an active OTP request when the worker lease is lost', async () => {
    const state = reporter();
    const provider = {
      send: vi.fn(
        async ({ signal }: { signal?: AbortSignal }) =>
          new Promise<{ providerMessageId: string; accepted: boolean }>((_resolve, reject) => {
            signal?.addEventListener(
              'abort',
              () => reject(new DOMException('Aborted', 'AbortError')),
              { once: true },
            );
          }),
      ),
    };
    const worker = new VerificationWorker(provider, state, {
      timeoutMs: 60_000,
      now: () => new Date('2026-07-17T10:00:00.000Z'),
    });
    const controller = new AbortController();
    const result = worker.process({ ...delivery, signal: controller.signal });

    controller.abort(
      Object.assign(new Error('lease lost'), { code: 'VERIFICATION_DELIVERY_LEASE_LOST' }),
    );
    await expect(result).resolves.toMatchObject({
      status: 'retry_scheduled',
      errorCode: 'OTP_PROVIDER_TIMEOUT',
    });
    expect(state.retry).toHaveBeenCalledOnce();
  });
});
