from pathlib import Path


def replace(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected one match in {path}, found {count}")
    file.write_text(text.replace(old, new))


replace(
    "packages/database/src/schema.ts",
    """    startedAt: timestamp('started_at', { withTimezone: true }),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    errorCode: text('error_code'),
""",
    """    startedAt: timestamp('started_at', { withTimezone: true }),
    claimedBy: text('claimed_by'),
    claimedAt: timestamp('claimed_at', { withTimezone: true }),
    leaseExpiresAt: timestamp('lease_expires_at', { withTimezone: true }),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    errorCode: text('error_code'),
""",
)

replace(
    "workers/courier-sync-worker/src/postgres.test.ts",
    "import { afterAll, beforeAll, describe, expect, it } from 'vitest';",
    "import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';",
)
replace(
    "workers/courier-sync-worker/src/postgres.test.ts",
    """  afterAll(async () => {
    await pool.query('delete from organizations where id = $1', [organizationId]);
    await pool.end();
  });

""",
    """  afterEach(async () => {
    await pool.query('delete from courier_jobs where courier_account_id = $1', [accountId]);
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = $1', [organizationId]);
    await pool.end();
  });

""",
)

replace(
    ".github/workflows/ci.yml",
    """      - run: npm run db:migrate
      - run: npm run check:architecture
""",
    """      - run: npm run db:migrate
      - name: Verify migration replay
        run: npm run db:migrate
      - run: npm run check:architecture
""",
)
