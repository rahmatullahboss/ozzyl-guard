import { afterEach, describe, expect, it, vi } from 'vitest';
import { LeaseHeartbeat } from './lease-heartbeat.js';

describe('LeaseHeartbeat', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renews serially and stops without another renewal', async () => {
    vi.useFakeTimers();
    const renew = vi.fn(async () => undefined);
    const heartbeat = new LeaseHeartbeat({ intervalMs: 1_000, renew }).start();

    await vi.advanceTimersByTimeAsync(2_100);
    expect(renew).toHaveBeenCalledTimes(2);
    expect(heartbeat.signal.aborted).toBe(false);

    await heartbeat.stop();
    await vi.advanceTimersByTimeAsync(2_000);
    expect(renew).toHaveBeenCalledTimes(2);
  });

  it('aborts active work and surfaces the renewal failure', async () => {
    vi.useFakeTimers();
    const failure = Object.assign(new Error('lease lost'), { code: 'LEASE_LOST' });
    const heartbeat = new LeaseHeartbeat({
      intervalMs: 500,
      renew: async () => Promise.reject(failure),
    }).start();

    await vi.advanceTimersByTimeAsync(500);
    expect(heartbeat.signal.aborted).toBe(true);
    expect(heartbeat.signal.reason).toBe(failure);
    await expect(heartbeat.stop()).rejects.toBe(failure);
  });

  it('does not overlap a slow renewal', async () => {
    vi.useFakeTimers();
    let release: (() => void) | undefined;
    const renew = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          release = resolve;
        }),
    );
    const heartbeat = new LeaseHeartbeat({ intervalMs: 100, renew }).start();

    await vi.advanceTimersByTimeAsync(500);
    expect(renew).toHaveBeenCalledTimes(1);
    release?.();
    await Promise.resolve();
    await vi.advanceTimersByTimeAsync(100);
    expect(renew).toHaveBeenCalledTimes(2);
    release?.();
    await Promise.resolve();
    await heartbeat.stopQuietly();
  });
});
