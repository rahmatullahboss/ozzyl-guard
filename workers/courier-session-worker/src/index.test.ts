import { describe, expect, it, vi } from 'vitest';
import { createMetricRecorder } from '@ozzyl/observability';
import { AesGcmEnvelopeCipher, CourierSessionWorker } from './index.js';
function parseMetricLine(line: string): unknown {
  return JSON.parse(line) as unknown;
}

describe('AesGcmEnvelopeCipher', () => {
  it('binds encrypted session data to an account context', () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const sampleValue = 'x'.repeat(24);
    const encrypted = cipher.encrypt(
      { sessionCookie: sampleValue, xsrfToken: sampleValue },
      'courier-session:acc_1',
    );
    expect(encrypted).not.toContain(sampleValue);
    expect(
      cipher.decrypt<{ sessionCookie: string }>(encrypted, 'courier-session:acc_1').sessionCookie,
    ).toBe(sampleValue);
    expect(() => cipher.decrypt(encrypted, 'courier-session:acc_2')).toThrow();
  });
});

describe('CourierSessionWorker metrics', () => {
  it('records bounded refresh completion without account or credential attributes', async () => {
    const metricLines: string[] = [];
    const ticks = [50, 55, 65, 70];
    const sampleValue = 'x'.repeat(24);
    const credentialFixture = ['fixture', 'credential'].join('-');
    const worker = new CourierSessionWorker({
      credentials: {
        load: vi.fn(async () => ({
          email: 'fixture@example.test',
          password: credentialFixture,
        })),
      },
      vault: { save: vi.fn(async () => undefined) },
      health: {
        markConnected: vi.fn(async () => undefined),
        markFailure: vi.fn(async () => undefined),
      },
      cipher: new AesGcmEnvelopeCipher(Buffer.alloc(32, 8), 'test-v1'),
      driver: {
        login: vi.fn(async () => ({
          sessionCookie: sampleValue,
          xsrfToken: sampleValue,
          validatedAt: '2026-07-28T00:00:00.000Z',
        })),
      },
      monotonicNow: () => ticks.shift() ?? 70,
      metrics: createMetricRecorder({
        service: 'courier-session-worker-test',
        environment: 'test',
        write: (line) => metricLines.push(line),
      }),
    });

    await expect(worker.refresh('account_sensitive')).resolves.toEqual({ status: 'connected' });
    expect(metricLines.map(parseMetricLine)).toEqual([
      expect.objectContaining({
        name: 'ozzyl.provider.operations',
        attributes: {
          provider_type: 'courier_browser',
          operation: 'login',
          outcome: 'success',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.provider.operation.duration',
        value: 10,
        attributes: {
          provider_type: 'courier_browser',
          operation: 'login',
          outcome: 'success',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.operations',
        attributes: {
          worker_type: 'courier_session',
          operation: 'refresh',
          outcome: 'completed',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.operation.duration',
        value: 20,
        attributes: {
          worker_type: 'courier_session',
          operation: 'refresh',
          outcome: 'completed',
        },
      }),
    ]);
    expect(metricLines.join('\n')).not.toContain('account_sensitive');
    expect(metricLines.join('\n')).not.toContain(credentialFixture);
    expect(metricLines.join('\n')).not.toContain('fixture@example.test');
  });
});
