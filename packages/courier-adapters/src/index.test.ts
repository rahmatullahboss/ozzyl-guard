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
});
