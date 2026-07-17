import { createHmac } from 'node:crypto';
import { describe, expect, it, vi } from 'vitest';
import {
  EventWorker,
  assertSafeWebhookDestination,
  assertSafeWebhookUrl,
} from './index.js';

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
  it('signs and delivers an event', async () => {
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
});
