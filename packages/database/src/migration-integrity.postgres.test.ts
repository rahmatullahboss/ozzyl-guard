import { afterAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { loadVerifiedMigrations, verifyMigrationHistory } from './migration-integrity.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL migration history integrity', () => {
  const pool = new Pool({ connectionString: databaseUrl });

  afterAll(async () => {
    await pool.end();
  });

  it('accepts the complete committed migration history', async () => {
    const migrations = await loadVerifiedMigrations();
    await expect(
      verifyMigrationHistory(pool, migrations, { requireComplete: true }),
    ).resolves.toBeUndefined();
  });

  it('rejects a persisted checksum mismatch', async () => {
    const migrations = await loadVerifiedMigrations();
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        "update ozzyl_guard_migrations set checksum_sha256 = repeat('0', 64) where name = $1",
        [migrations[0]?.name],
      );
      await expect(verifyMigrationHistory(client, migrations)).rejects.toThrow(
        'Database migration checksum mismatch',
      );
    } finally {
      await client.query('rollback');
      client.release();
    }
  });

  it('rejects unknown rows and non-contiguous history', async () => {
    const migrations = await loadVerifiedMigrations();
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        "insert into ozzyl_guard_migrations(name, checksum_sha256) values ('9999_unknown.sql', repeat('f', 64))",
      );
      await expect(verifyMigrationHistory(client, migrations)).rejects.toThrow(
        'Database contains unknown migration history row',
      );
      await client.query("delete from ozzyl_guard_migrations where name = '9999_unknown.sql'");
      await client.query('delete from ozzyl_guard_migrations where name = $1', [
        migrations[1]?.name,
      ]);
      await expect(verifyMigrationHistory(client, migrations)).rejects.toThrow(
        'Migration history is not a contiguous prefix',
      );
    } finally {
      await client.query('rollback');
      client.release();
    }
  });

  it('backfills legacy name-only rows only from the committed manifest', async () => {
    const migrations = await loadVerifiedMigrations();
    const first = migrations[0];
    if (!first) throw new Error('Expected at least one migration');
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        'alter table ozzyl_guard_migrations alter column checksum_sha256 drop not null',
      );
      await client.query(
        'update ozzyl_guard_migrations set checksum_sha256 = null where name = $1',
        [first.name],
      );
      await expect(
        verifyMigrationHistory(client, migrations, { allowLegacyChecksumBackfill: true }),
      ).resolves.toBeUndefined();
      const result = await client.query<{ checksum_sha256: string | null }>(
        'select checksum_sha256 from ozzyl_guard_migrations where name = $1',
        [first.name],
      );
      expect(result.rows[0]?.checksum_sha256).toBe(first.checksumSha256);
    } finally {
      await client.query('rollback');
      client.release();
    }
  });
});
