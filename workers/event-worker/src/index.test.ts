import { createHmac } from 'node:crypto';
import { describe, expect, it, vi } from 'vitest';
import { EventWorker, assertSafeWebhookUrl } from './index.js';

const repository = {
  markDelivered: vi.fn(async () => undefined),
  markRetry: vi.fn(async () => undefined),
  markFailed: vi.fn(async () => undefined),
};

describe('webhook destination validation', () => {
  it('rejects local and private destinations', () => {
    expect(() => assertSafeWebhookUrl('http://example.com/hook')).toThrow();
    expect(() => assertSafeWebhookUrl('https://127.0.0.1/hook')).toThrow();
    expect(() => assertSafeWebhookUrl('https://10.0.0.1/hook')).toThrow();
    expect(assertSafeWebhookUrl('https://merchant.example/hook').hostname).toBe('merchant.example');
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
    const worker = new EventWorker(repository, { fetcher });
    const result = await worker.deliver({
      endpoint: {
        id: 'we_1',
        url: 'https://merchant.example/hook',
        signingSecret: 'x'.repeat(32),
        active: true,
      },
      event: {
        id: 'evt_1',
        type: 'assessment.completed',
        organizationId: 'org_1',
        occurredAt: new Date().toISOString(),
        payload: { assessmentId: 'ras_1' },
      },
      attempt: 1,
    });
    expect(result.status).toBe('delivered');
  });
});
