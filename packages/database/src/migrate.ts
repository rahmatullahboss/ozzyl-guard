import { Pool } from 'pg';
import {
  ensureMigrationHistoryTable,
  loadVerifiedMigrations,
  verifyMigrationHistory,
} from './migration-integrity.js';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL is required');

const pool = new Pool({ connectionString: databaseUrl });
const migrationLockKey = 'ozzyl_guard_migrations_v1';

try {
  await pool.query('select pg_advisory_lock(hashtext($1))', [migrationLockKey]);
  await ensureMigrationHistoryTable(pool);
  const migrations = await loadVerifiedMigrations();
  await verifyMigrationHistory(pool, migrations, { allowLegacyChecksumBackfill: true });

  const applied = new Set(
    (await pool.query<{ name: string }>('select name from ozzyl_guard_migrations')).rows.map(
      (row) => row.name,
    ),
  );

  for (const migration of migrations) {
    if (applied.has(migration.name)) continue;
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(migration.sql);
      await client.query(
        'insert into ozzyl_guard_migrations(name, checksum_sha256) values ($1, $2)',
        [migration.name, migration.checksumSha256],
      );
      await client.query('commit');
      console.info(`Applied migration ${migration.name}`);
    } catch (error) {
      await client.query('rollback');
      throw error;
    } finally {
      client.release();
    }
  }

  await verifyMigrationHistory(pool, migrations, { requireComplete: true });
  console.info(`Verified ${migrations.length} migration history checksums`);
} finally {
  try {
    await pool.query('select pg_advisory_unlock(hashtext($1))', [migrationLockKey]);
  } finally {
    await pool.end();
  }
}
