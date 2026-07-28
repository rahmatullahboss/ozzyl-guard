import { describe, expect, it, vi } from 'vitest';
import {
  createMetricRecorder,
  defineMetric,
  observeRepositoryOperation,
  recordDurableQueueSnapshot,
  recordProviderOperation,
  recordWorkerClaimFailure,
  recordWorkerOperation,
  serializeMetricPoint,
} from './metrics.js';
function parseMetricLine(line: string): unknown {
  return JSON.parse(line) as unknown;
}

const requestMetric = defineMetric({
  name: 'ozzyl.api.requests',
  kind: 'counter',
  unit: '{request}',
  attributes: {
    method: { values: ['GET', 'POST'] },
    route: { values: ['/health', 'unmatched'] },
    status_class: { values: ['2xx', '4xx', '5xx'] },
  },
});

describe('vendor-neutral metrics', () => {
  it('serializes an exporter-neutral point with finite categorical attributes', () => {
    const line = serializeMetricPoint({
      descriptor: requestMetric,
      value: 1,
      attributes: { method: 'GET', route: '/health', status_class: '2xx' },
      timestamp: new Date('2026-07-28T00:00:00.000Z'),
      service: 'ozzyl-guard-api',
      environment: 'test',
    });

    expect(JSON.parse(line)).toEqual({
      telemetry_type: 'metric',
      timestamp: '2026-07-28T00:00:00.000Z',
      service: 'ozzyl-guard-api',
      environment: 'test',
      name: 'ozzyl.api.requests',
      kind: 'counter',
      unit: '{request}',
      value: 1,
      attributes: { method: 'GET', route: '/health', status_class: '2xx' },
    });
  });

  it('rejects high-cardinality identifiers and values outside finite sets', () => {
    expect(() =>
      defineMetric({
        name: 'ozzyl.worker.jobs',
        kind: 'counter',
        unit: '{job}',
        attributes: { worker_id: { values: ['worker-1'] } },
      }),
    ).toThrow(/unsafe or unbounded/);

    expect(() =>
      serializeMetricPoint({
        descriptor: requestMetric,
        value: 1,
        attributes: { method: 'GET', route: '/private/path', status_class: '2xx' },
        timestamp: new Date('2026-07-28T00:00:00.000Z'),
        service: 'ozzyl-guard-api',
        environment: 'test',
      }),
    ).toThrow(/outside its bounded set/);
  });

  it('rejects negative counters and unknown attributes', () => {
    expect(() =>
      serializeMetricPoint({
        descriptor: requestMetric,
        value: -1,
        attributes: { method: 'GET', route: '/health', status_class: '2xx' },
        timestamp: new Date('2026-07-28T00:00:00.000Z'),
        service: 'ozzyl-guard-api',
        environment: 'test',
      }),
    ).toThrow(/must not be negative/);

    expect(() =>
      serializeMetricPoint({
        descriptor: requestMetric,
        value: 1,
        attributes: {
          method: 'GET',
          route: '/health',
          status_class: '2xx',
          outcome: 'success',
        },
        timestamp: new Date('2026-07-28T00:00:00.000Z'),
        service: 'ozzyl-guard-api',
        environment: 'test',
      }),
    ).toThrow(/not allowed/);
  });

  it('records bounded worker operation and claim-failure points without identifiers', () => {
    const lines: string[] = [];
    const recorder = createMetricRecorder({
      service: 'worker-test',
      environment: 'test',
      clock: () => new Date('2026-07-28T00:00:00.000Z'),
      write: (line) => lines.push(line),
    });

    recordWorkerOperation(recorder, {
      workerType: 'webhook_delivery',
      operation: 'deliver',
      outcome: 'retry_scheduled',
      durationMs: 17,
    });
    recordWorkerClaimFailure(recorder, 'verification_delivery');

    expect(lines.map(parseMetricLine)).toEqual([
      expect.objectContaining({
        name: 'ozzyl.worker.operations',
        value: 1,
        attributes: {
          worker_type: 'webhook_delivery',
          operation: 'deliver',
          outcome: 'retry_scheduled',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.operation.duration',
        value: 17,
        attributes: {
          worker_type: 'webhook_delivery',
          operation: 'deliver',
          outcome: 'retry_scheduled',
        },
      }),
      expect.objectContaining({
        name: 'ozzyl.worker.claim.failures',
        value: 1,
        attributes: { worker_type: 'verification_delivery' },
      }),
    ]);
    expect(lines.join('\n')).not.toContain('_id');
    expect(lines.join('\n')).not.toContain('error_code');
  });

  it('observes repository success, empty, and error outcomes without changing results', async () => {
    const lines: string[] = [];
    const recorder = createMetricRecorder({
      service: 'repository-test',
      environment: 'test',
      write: (line) => lines.push(line),
    });
    const clock = vi
      .fn()
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(18)
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(24)
      .mockReturnValueOnce(30)
      .mockReturnValueOnce(37);

    await expect(
      observeRepositoryOperation(
        recorder,
        {
          repositoryType: 'courier_queue',
          operation: 'claim',
          isEmpty: (value) => value === null,
          monotonicNow: clock,
        },
        async () => ({ id: 'opaque-result' }),
      ),
    ).resolves.toEqual({ id: 'opaque-result' });
    await expect(
      observeRepositoryOperation(
        recorder,
        {
          repositoryType: 'courier_queue',
          operation: 'claim',
          isEmpty: (value) => value === null,
          monotonicNow: clock,
        },
        async () => null,
      ),
    ).resolves.toBeNull();
    await expect(
      observeRepositoryOperation(
        recorder,
        {
          repositoryType: 'courier_queue',
          operation: 'renew',
          monotonicNow: clock,
        },
        async () => {
          throw new Error('database unavailable');
        },
      ),
    ).rejects.toThrow('database unavailable');

    const points = lines.map(parseMetricLine);
    expect(points).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'ozzyl.repository.operations',
          attributes: {
            repository_type: 'courier_queue',
            operation: 'claim',
            outcome: 'success',
          },
        }),
        expect.objectContaining({
          name: 'ozzyl.repository.operations',
          attributes: {
            repository_type: 'courier_queue',
            operation: 'claim',
            outcome: 'empty',
          },
        }),
        expect.objectContaining({
          name: 'ozzyl.repository.operations',
          attributes: {
            repository_type: 'courier_queue',
            operation: 'renew',
            outcome: 'error',
          },
        }),
      ]),
    );
    expect(lines.join('\n')).not.toContain('opaque-result');
    expect(lines.join('\n')).not.toContain('database unavailable');
  });

  it('records provider operations and durable queue gauges with finite labels', () => {
    const lines: string[] = [];
    const recorder = createMetricRecorder({
      service: 'worker-test',
      environment: 'test',
      write: (line) => lines.push(line),
    });

    recordProviderOperation(recorder, {
      providerType: 'verification_delivery',
      operation: 'send',
      outcome: 'retryable_failure',
      durationMs: 21,
    });
    recordDurableQueueSnapshot(recorder, 'verification_delivery', {
      depths: { queued: 4, processing: 1, failed: 2 },
      oldestReadyAgeMs: 3_000,
    });

    const points = lines.map(parseMetricLine);
    expect(points).toContainEqual(
      expect.objectContaining({
        name: 'ozzyl.provider.operations',
        attributes: {
          provider_type: 'verification_delivery',
          operation: 'send',
          outcome: 'retryable_failure',
        },
      }),
    );
    expect(points).toContainEqual(
      expect.objectContaining({
        name: 'ozzyl.queue.depth',
        value: 4,
        attributes: { queue_type: 'verification_delivery', status: 'queued' },
      }),
    );
    expect(points).toContainEqual(
      expect.objectContaining({
        name: 'ozzyl.queue.depth',
        value: 0,
        attributes: { queue_type: 'verification_delivery', status: 'retry_scheduled' },
      }),
    );
    expect(points).toContainEqual(
      expect.objectContaining({
        name: 'ozzyl.queue.oldest_ready.age',
        value: 3_000,
        attributes: { queue_type: 'verification_delivery' },
      }),
    );
    expect(lines.join('\n')).not.toContain('_id');
    expect(lines.join('\n')).not.toContain('phone');
  });

  it('isolates telemetry clocks while preserving repository execution', async () => {
    const recorder = createMetricRecorder({
      service: 'repository-test',
      environment: 'test',
      write: () => {
        throw new Error('metric sink unavailable');
      },
    });

    await expect(
      observeRepositoryOperation(
        recorder,
        {
          repositoryType: 'webhook_queue',
          operation: 'snapshot',
          monotonicNow: () => {
            throw new Error('clock unavailable');
          },
        },
        async () => 'repository-result',
      ),
    ).resolves.toBe('repository-result');
  });

  it('swallows descriptor, serialization, clock, and sink failures', () => {
    const write = vi.fn(() => {
      throw new Error('collector unavailable');
    });
    const recorder = createMetricRecorder({
      service: 'ozzyl-guard-api',
      environment: 'test',
      clock: () => new Date('2026-07-28T00:00:00.000Z'),
      write,
    });

    expect(() =>
      recorder.record(requestMetric, 1, {
        method: 'GET',
        route: '/health',
        status_class: '2xx',
      }),
    ).not.toThrow();
    expect(() =>
      recorder.record(requestMetric, 1, {
        method: 'GET',
        route: '/dynamic-customer-reference',
        status_class: '2xx',
      }),
    ).not.toThrow();
    expect(write).toHaveBeenCalledTimes(1);
  });
});
