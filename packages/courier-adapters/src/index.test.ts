import { describe, expect, it, vi } from 'vitest';
import { SteadfastAdapter } from './index.js';

const sessionProvider = {
  async getSession() {
    return { sessionCookie: 'session-value', xsrfToken: 'xsrf-value' };
  },
};

describe('SteadfastAdapter', () => {
  it('normalizes a provider response', async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify({ success: 8, cancellation: 2 }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }),
    );
    const adapter = new SteadfastAdapter({ sessionProvider, fetcher });
    const result = await adapter.fetchCustomerObservation({
      accountId: 'acc_1',
      phone: '01712345678',
    });
    expect(result.totalOrders).toBe(10);
    expect(result.deliveredOrders).toBe(8);
    expect(result.returnedOrders).toBe(2);
    expect(result.successRate).toBe(0.8);
  });

  it('returns a structured session error', async () => {
    const adapter = new SteadfastAdapter({
      sessionProvider: {
        async getSession() {
          return null;
        },
      },
      fetcher: vi.fn<typeof fetch>(),
    });
    await expect(
      adapter.fetchCustomerObservation({ accountId: 'acc_1', phone: '01712345678' }),
    ).rejects.toMatchObject({ code: 'SESSION_MISSING', retryable: false });
  });

  it('aborts an active provider request when the worker lease is lost', async () => {
    const fetcher = vi.fn<typeof fetch>().mockImplementation(
      async (_url, init) =>
        new Promise<Response>((_resolve, reject) => {
          const abort = (): void => reject(new DOMException('Aborted', 'AbortError'));
          if (init?.signal?.aborted) abort();
          else init?.signal?.addEventListener('abort', abort, { once: true });
        }),
    );
    const adapter = new SteadfastAdapter({ sessionProvider, fetcher, timeoutMs: 60_000 });
    const controller = new AbortController();
    const result = adapter.fetchCustomerObservation({
      accountId: 'acc_1',
      phone: '01712345678',
      signal: controller.signal,
    });

    controller.abort(Object.assign(new Error('lease lost'), { code: 'COURIER_JOB_LEASE_LOST' }));
    await expect(result).rejects.toMatchObject({ code: 'PROVIDER_UNAVAILABLE', retryable: true });
    expect(fetcher).toHaveBeenCalledOnce();
  });
});
