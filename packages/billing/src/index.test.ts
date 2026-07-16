import { describe, expect, it } from 'vitest';
import { MemoryUsageLedger, UsageLimitError } from './index.js';

describe('usage ledger', () => {
  it('is idempotent per request id', async () => {
    const ledger = new MemoryUsageLedger();
    const first = await ledger.reserve({
      organizationId: 'org_1',
      period: '2026-07',
      requestId: 'req_1',
      units: 1,
      plan: 'free',
    });
    const replay = await ledger.reserve({
      organizationId: 'org_1',
      period: '2026-07',
      requestId: 'req_1',
      units: 1,
      plan: 'free',
    });
    expect(first.used).toBe(1);
    expect(replay.used).toBe(1);
    expect(replay.replay).toBe(true);
  });

  it('rejects usage above a plan limit', async () => {
    const ledger = new MemoryUsageLedger();
    await expect(
      ledger.reserve({
        organizationId: 'org_1',
        period: '2026-07',
        requestId: 'req_large',
        units: 101,
        plan: 'free',
      }),
    ).rejects.toBeInstanceOf(UsageLimitError);
  });
});
