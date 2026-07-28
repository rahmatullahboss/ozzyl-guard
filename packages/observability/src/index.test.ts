import { describe, expect, it, vi } from 'vitest';
import { createStructuredLogger, serializeStructuredLog } from './index.js';

describe('structured observability', () => {
  it('emits fixed metadata and redacts nested sensitive fields', () => {
    const error = Object.assign(new Error('[REDACTED_MESSAGE]'), { code: 'PROVIDER_FAILED' });
    const line = serializeStructuredLog({
      level: 'error',
      event: 'worker.failed',
      service: 'verification-worker',
      environment: 'test',
      timestamp: new Date('2026-07-28T00:00:00.000Z'),
      attributes: {
        worker_id: 'worker-1',
        phone_hash: 'safe-hash',
        phone: '[REDACTED_PHONE]',
        apiKey: '[REDACTED_SECRET]',
        endpointUrl: '[REDACTED_URL]',
        nested: {
          signing_secret: '[REDACTED_SECRET]',
          requestBody: { otp: '[REDACTED_OTP]' },
        },
        error,
        level: 'attempted-override',
      },
    });

    expect(JSON.parse(line)).toEqual({
      worker_id: 'worker-1',
      phone_hash: 'safe-hash',
      phone: '[REDACTED]',
      apiKey: '[REDACTED]',
      endpointUrl: '[REDACTED]',
      nested: {
        signing_secret: '[REDACTED]',
        requestBody: '[REDACTED]',
      },
      error: { name: 'Error', code: 'PROVIDER_FAILED' },
      timestamp: '2026-07-28T00:00:00.000Z',
      level: 'error',
      service: 'verification-worker',
      environment: 'test',
      event: 'worker.failed',
    });
    expect(line).not.toContain('[REDACTED_PHONE]');
    expect(line).not.toContain('[REDACTED_SECRET]');
    expect(line).not.toContain('[REDACTED_MESSAGE]');
  });

  it('handles circular, binary, bigint, and oversized values without throwing', () => {
    const circular: Record<string, unknown> = { id: 'one' };
    circular.self = circular;

    const line = serializeStructuredLog({
      level: 'info',
      event: 'safe.serialization',
      service: 'api',
      environment: 'test',
      timestamp: new Date('2026-07-28T00:00:00.000Z'),
      maxStringLength: 4,
      attributes: {
        circular,
        bytes: new Uint8Array([1, 2, 3]),
        count: 12n,
        long: 'abcdefgh',
      },
    });
    const parsed = JSON.parse(line) as Record<string, unknown>;

    expect(parsed.circular).toEqual({ id: 'one', self: { circular: '[CIRCULAR]' } });
    expect(parsed.bytes).toBe('[BINARY:3]');
    expect(parsed.count).toBe('12');
    expect(parsed.long).toBe('abcd...[TRUNCATED:4]');
  });

  it('swallows serialization and sink failures', () => {
    const write = vi.fn(() => {
      throw new Error('backend unavailable');
    });
    const logger = createStructuredLogger({
      service: 'event-worker',
      environment: 'test',
      clock: () => new Date('2026-07-28T00:00:00.000Z'),
      write,
    });

    expect(() => logger.info('worker.started', { worker_id: 'worker-1' })).not.toThrow();
    expect(() => logger.error('', { code: 'FAILED' })).not.toThrow();
    expect(write).toHaveBeenCalledTimes(1);
  });
});
