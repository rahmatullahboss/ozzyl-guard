import { describe, expect, it, vi } from 'vitest';
import { createMetricRecorder } from '@ozzyl/observability';
import { CourierSyncWorker, toRiskCourierFeatures } from './index.js';
function parseMetricLine(line: string): unknown {
  return JSON.parse(line) as unknown;
}

describe('toRiskCourierFeatures', () => {
  it('returns explicit missing features when no observations exist', () => {
    expect(toRiskCourierFeatures([])).toMatchObject({
      providerCount: 0,
      freshness: 'missing',
      sourceConfidence: 0,
    });
  });

  it('aggregates normalized provider observations', () => {
    const future = new Date(Date.now() + 60_000).toISOString();
    const observedAt = new Date().toISOString();
    const result = toRiskCourierFeatures([
      {
        provider: 'steadfast',
        totalOrders: 10,
        deliveredOrders: 8,
        returnedOrders: 2,
        cancelledBeforeShipping: 0,
        successRate: 0.8,
        confidence: 0.8,
        source: 'merchant_session',
        observedAt,
        expiresAt: future,
      },
      {
        provider: 'pathao',
        totalOrders: 5,
        deliveredOrders: 4,
        returnedOrders: 1,
        cancelledBeforeShipping: 0,
        successRate: 0.8,
        confidence: 0.6,
        source: 'merchant_api',
        observedAt,
        expiresAt: future,
      },
    ]);
    expect(result).toMatchObject({
      totalOrders: 15,
      deliveredOrders: 12,
      returnedOrders: 3,
      providerCount: 2,
      freshness: 'fresh',
      sourceConfidence: 0.7,
    });
  });
});

describe('CourierSyncWorker metrics', () => {
  it('records cached completion without job, store, phone, or account identifiers', async () => {
    const metricLines: string[] = [];
    const ticks = [20, 32];
    const observation = {
      provider: 'steadfast' as const,
      totalOrders: 10,
      deliveredOrders: 8,
      returnedOrders: 2,
      cancelledBeforeShipping: 0,
      successRate: 0.8,
      confidence: 0.8,
      source: 'merchant_session' as const,
      observedAt: '2026-07-28T00:00:00.000Z',
      expiresAt: '2026-07-28T01:00:00.000Z',
    };
    const health = {
      started: vi.fn(async () => undefined),
      completed: vi.fn(async () => undefined),
      failed: vi.fn(async () => undefined),
    };
    const worker = new CourierSyncWorker({
      adapters: new Map(),
      observations: {
        findFresh: vi.fn(async () => observation),
        save: vi.fn(async () => undefined),
      },
      health,
      monotonicNow: () => ticks.shift() ?? 32,
      metrics: createMetricRecorder({
        service: 'courier-sync-worker-test',
        environment: 'test',
        write: (line) => metricLines.push(line),
      }),
    });

    await expect(
      worker.sync({
        jobId: 'cjob_sensitive',
        storeId: 'store_sensitive',
        courierAccountId: 'account_sensitive',
        provider: 'steadfast',
        phone: '01700000000',
        phoneHash: 'hash_sensitive',
      }),
    ).resolves.toMatchObject({ cached: true });

    expect(health.completed).toHaveBeenCalledOnce();
    expect(metricLines.map(parseMetricLine)).toEqual([
      expect.objectContaining({
        name: 'ozzyl.worker.operations',
        attributes: { worker_type: 'courier_sync', operation: 'sync', outcome: 'cached' },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.operation.duration',
        value: 12,
        attributes: { worker_type: 'courier_sync', operation: 'sync', outcome: 'cached' },
      }),
    ]);
    expect(metricLines.join('\n')).not.toContain('sensitive');
    expect(metricLines.join('\n')).not.toContain('01700000000');
  });
});
