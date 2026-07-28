import { describe, expect, it } from 'vitest';
import type { Pool } from 'pg';
import {
  MAX_DURABLE_WORK_ARCHIVE_BATCH,
  PostgresDurableWorkRetention,
} from './durable-work-retention.js';

const unusablePool = {} as Pool;
const retention = new PostgresDurableWorkRetention(unusablePool);
const at = new Date('2026-07-28T08:00:00.000Z');

describe('durable work retention input boundary', () => {
  it('requires a cutoff at least 24 hours before the run', async () => {
    await expect(
      retention.preview({
        cutoff: new Date('2026-07-27T12:00:00.000Z'),
        statuses: ['completed'],
        at,
      }),
    ).rejects.toMatchObject({
      code: 'DURABLE_WORK_ARCHIVE_INPUT_INVALID',
    });
  });

  it('rejects empty terminal status selection', async () => {
    await expect(
      retention.preview({
        cutoff: new Date('2026-07-20T00:00:00.000Z'),
        statuses: [],
        at,
      }),
    ).rejects.toMatchObject({
      code: 'DURABLE_WORK_ARCHIVE_INPUT_INVALID',
    });
  });

  it('rejects unbounded archive batches before opening a database connection', async () => {
    await expect(
      retention.archive({
        cutoff: new Date('2026-07-20T00:00:00.000Z'),
        statuses: ['completed', 'failed'],
        limit: MAX_DURABLE_WORK_ARCHIVE_BATCH + 1,
        at,
      }),
    ).rejects.toMatchObject({
      code: 'DURABLE_WORK_ARCHIVE_INPUT_INVALID',
    });
  });

  it('rejects unsafe archive run identifiers before opening a database connection', async () => {
    await expect(
      retention.archive({
        cutoff: new Date('2026-07-20T00:00:00.000Z'),
        statuses: ['failed'],
        archiveRunId: 'unsafe-run',
        at,
      }),
    ).rejects.toMatchObject({
      code: 'DURABLE_WORK_ARCHIVE_INPUT_INVALID',
    });
  });
});
