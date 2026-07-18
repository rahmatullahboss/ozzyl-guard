import { describe, expect, it, vi } from 'vitest';
import { OzzylGuardClient } from './index.js';

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('OzzylGuardClient native shadow contract', () => {
  it('reads the scoped rollout configuration', async () => {
    const fetcher = vi.fn(async () =>
      jsonResponse({
        success: true,
        organization_id: 'org_one',
        store_id: 'store_one',
        integration: 'multi-store-saas',
        mode: 'off',
        rollout_version: 'off',
        sample_rate_bps: 0,
        sampling_key: 'scoped-sampling-key',
      }),
    );
    const client = new OzzylGuardClient({
      apiKey: 'ozg_test_' + 'fixture',
      baseUrl: 'https://guard.example.test',
      fetcher,
    });

    await expect(client.getNativeShadowRollout()).resolves.toMatchObject({
      mode: 'off',
      sample_rate_bps: 0,
    });
    expect(fetcher).toHaveBeenCalledWith(
      'https://guard.example.test/v1/integration-rollouts/native-shadow',
      expect.objectContaining({ method: 'GET' }),
    );
  });

  it('reports immutable attempt evidence with an idempotency key', async () => {
    const fetcher = vi.fn(async () =>
      jsonResponse({ success: true, attempt_id: 'nsa_one', replay: false }, 201),
    );
    const client = new OzzylGuardClient({
      apiKey: 'ozg_test_' + 'fixture',
      baseUrl: 'https://guard.example.test',
      fetcher,
    });

    await expect(
      client.reportNativeShadowAttempt(
        {
          external_order_id: 'ORDER-1',
          rollout_version: 'pilot-v1',
          sample_bucket: 10,
          sample_rate_bps: 1000,
          status: 'assessment_failed',
          failure_code: 'GUARD_TIMEOUT',
          evaluated_at: '2026-07-18T08:00:00.000Z',
        },
        { idempotencyKey: 'attempt-order-1' },
      ),
    ).resolves.toEqual({ success: true, attempt_id: 'nsa_one', replay: false });

    expect(fetcher).toHaveBeenCalledWith(
      'https://guard.example.test/v1/integration-attempts/native-shadow',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({ 'Idempotency-Key': 'attempt-order-1' }),
      }),
    );
  });
});
