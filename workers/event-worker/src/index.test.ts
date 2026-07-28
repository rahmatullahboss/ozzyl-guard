import { createHmac } from 'node:crypto';
import { describe, expect, it, vi } from 'vitest';
import { createMetricRecorder } from '@ozzyl/observability';
import { EventWorker, assertSafeWebhookDestination, assertSafeWebhookUrl } from './index.js';
function parseMetricLine(line: string): unknown {
  return JSON.parse(line) as unknown;
}

const repository = {
  markDelivered: vi.fn(async () => undefined),
  markRetry: vi.fn(async () => undefined),
  markFailed: vi.fn(async () => undefined),
};

const event = {
  id: 'evt_1',
  type: 'assessment.completed' as const,
  organizationId: 'org_1',
  storeId: 'sto_1',
  occurredAt: '2026-07-17T00:00:00.000Z',
  payload: { assessmentId: 'ras_1' },
};

const publicResolver = async (): Promise<readonly string[]> => ['93.184.216.34'];

describe('webhook destination validation', () => {
  it('rejects invalid, local, and private destinations', () => {
    expect(() => assertSafeWebhookUrl('not-a-url')).toThrow();
    expect(() => assertSafeWebhookUrl('http://example.com/hook')).toThrow();
    expect(() => assertSafeWebhookUrl('https://127.0.0.1/hook')).toThrow();
    expect(() => assertSafeWebhookUrl('https://10.0.0.1/hook')).toThrow();
    expect(() => assertSafeWebhookUrl('https://[::1]/hook')).toThrow();
    expect(assertSafeWebhookUrl('https://merchant.example/hook').hostname).toBe('merchant.example');
  });

  it('rejects a hostname that resolves to any non-public address', async () => {
    await expect(
      assertSafeWebhookDestination('https://merchant.example/hook', async () => [
        '93.184.216.34',
        '10.0.0.5',
      ]),
    ).rejects.toMatchObject({ code: 'UNSAFE_WEBHOOK_DESTINATION' });
  });

  it('treats DNS resolution failures as retryable worker failures', async () => {
    const isolatedRepository = {
      markDelivered: vi.fn(async () => undefined),
      markRetry: vi.fn(async () => undefined),
      markFailed: vi.fn(async () => undefined),
    };
    const fetcher = vi.fn<typeof fetch>();
    const worker = new EventWorker(isolatedRepository, {
      fetcher,
      resolver: async () => {
        throw new Error('temporary DNS failure');
      },
      now: () => new Date('2026-07-17T00:00:00.000Z'),
    });
    const result = await worker.deliver({
      endpoint: {
        id: 'we_dns',
        url: 'https://merchant.example/hook',
        signingSecret: 'x'.repeat(32),
        active: true,
      },
      event,
      attempt: 1,
    });
    expect(result).toMatchObject({
      status: 'retry_scheduled',
      errorCode: 'WEBHOOK_DNS_RESOLUTION_FAILED',
    });
    expect(fetcher).not.toHaveBeenCalled();
    expect(isolatedRepository.markRetry).toHaveBeenCalledOnce();
  });
});

describe('EventWorker', () => {
  it('signs, delivers, and records bounded operation metrics', async () => {
    const metricLines: string[] = [];
    const ticks = [100, 105, 117, 125];
    const fetcher = vi.fn<typeof fetch>().mockImplementation(async (_url, init) => {
      const headers = new Headers(init?.headers);
      const timestamp = headers.get('X-Ozzyl-Timestamp') ?? '';
      const payload = typeof init?.body === 'string' ? init.body : '';
      const expected = `v1=${createHmac('sha256', 'x'.repeat(32))
        .update(`${timestamp}.${payload}`)
        .digest('hex')}`;
      expect(headers.get('X-Ozzyl-Signature')).toBe(expected);
      return new Response(null, { status: 204 });
    });
    const worker = new EventWorker(repository, {
      fetcher,
      resolver: publicResolver,
      now: () => new Date('2026-07-17T00:00:00.000Z'),
      monotonicNow: () => ticks.shift() ?? 125,
      metrics: createMetricRecorder({
        service: 'event-worker-test',
        environment: 'test',
        write: (line) => metricLines.push(line),
      }),
    });
    const result = await worker.deliver({
      endpoint: {
        id: 'we_1',
        url: 'https://merchant.example/hook',
        signingSecret: 'x'.repeat(32),
        active: true,
      },
      event,
      attempt: 1,
    });
    expect(result.status).toBe('delivered');
    expect(metricLines.map(parseMetricLine)).toEqual([
      expect.objectContaining({
        name: 'ozzyl.provider.operations',
        value: 1,
        attributes: {
          provider_type: 'webhook_http',
          operation: 'deliver',
          outcome: 'success',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.provider.operation.duration',
        value: 12,
        unit: 'ms',
        attributes: {
          provider_type: 'webhook_http',
          operation: 'deliver',
          outcome: 'success',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.operations',
        value: 1,
        attributes: {
          worker_type: 'webhook_delivery',
          operation: 'deliver',
          outcome: 'completed',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.operation.duration',
        value: 25,
        unit: 'ms',
        attributes: {
          worker_type: 'webhook_delivery',
          operation: 'deliver',
          outcome: 'completed',
        },
      }),
    ]);
    expect(metricLines.join('\n')).not.toContain('evt_1');
    expect(metricLines.join('\n')).not.toContain('we_1');
  });

  it('fails an unsafe destination without retrying or fetching', async () => {
    const isolatedRepository = {
      markDelivered: vi.fn(async () => undefined),
      markRetry: vi.fn(async () => undefined),
      markFailed: vi.fn(async () => undefined),
    };
    const fetcher = vi.fn<typeof fetch>();
    const worker = new EventWorker(isolatedRepository, { fetcher, resolver: publicResolver });
    const result = await worker.deliver({
      endpoint: {
        id: 'we_unsafe',
        url: 'https://127.0.0.1/hook',
        signingSecret: 'x'.repeat(32),
        active: true,
      },
      event,
      attempt: 1,
    });
    expect(result).toEqual({
      status: 'failed',
      errorCode: 'UNSAFE_WEBHOOK_DESTINATION',
    });
    expect(fetcher).not.toHaveBeenCalled();
    expect(isolatedRepository.markRetry).not.toHaveBeenCalled();
    expect(isolatedRepository.markFailed).toHaveBeenCalledOnce();
  });

  it('aborts an active webhook request when the worker lease is lost', async () => {
    const isolatedRepository = {
      markDelivered: vi.fn(async () => undefined),
      markRetry: vi.fn(async () => undefined),
      markFailed: vi.fn(async () => undefined),
    };
    const fetcher = vi.fn<typeof fetch>().mockImplementation(
      async (_url, init) =>
        new Promise<Response>((_resolve, reject) => {
          const abort = (): void => reject(new DOMException('Aborted', 'AbortError'));
          if (init?.signal?.aborted) abort();
          else init?.signal?.addEventListener('abort', abort, { once: true });
        }),
    );
    const worker = new EventWorker(isolatedRepository, {
      fetcher,
      resolver: publicResolver,
      timeoutMs: 60_000,
      now: () => new Date('2026-07-17T00:00:00.000Z'),
    });
    const controller = new AbortController();
    const result = worker.deliver({
      endpoint: {
        id: 'we_lease',
        url: 'https://merchant.example/hook',
        signingSecret: 'x'.repeat(32),
        active: true,
      },
      event,
      attempt: 1,
      signal: controller.signal,
    });

    controller.abort(
      Object.assign(new Error('lease lost'), { code: 'WEBHOOK_DELIVERY_LEASE_LOST' }),
    );
    await expect(result).resolves.toMatchObject({
      status: 'retry_scheduled',
      errorCode: 'TIMEOUT',
    });
    expect(isolatedRepository.markRetry).toHaveBeenCalledOnce();
  });
});
