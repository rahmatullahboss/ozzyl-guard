import { Pool } from 'pg';
import {
  ensureMigrationHistoryTable,
  loadVerifiedMigrations,
  verifyMigrationHistory,
} from './migration-integrity.js';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL is required');

const pool = new Pool({ connectionString: databaseUrl });
const client = await pool.connect();
const migrationLockKey = 'ozzyl_guard_migrations_v1';

try {
  await client.query('select pg_advisory_lock(hashtext($1))', [migrationLockKey]);
  await ensureMigrationHistoryTable(client);
  const migrations = await loadVerifiedMigrations();

  try {
    await client.query('begin');
    await verifyMigrationHistory(client, migrations, { allowLegacyChecksumBackfill: true });
    await client.query(
      'alter table ozzyl_guard_migrations alter column checksum_sha256 set not null',
    );
    await client.query('commit');
  } catch (error) {
    await client.query('rollback');
    throw error;
  }

  const applied = new Set(
    (await client.query<{ name: string }>('select name from ozzyl_guard_migrations')).rows.map(
      (row) => row.name,
    ),
  );

  for (const migration of migrations) {
    if (applied.has(migration.name)) continue;
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
    }
  }

  await verifyMigrationHistory(client, migrations, { requireComplete: true });
  console.info(`Verified ${migrations.length} migration history checksums`);
} finally {
  try {
    await client.query('select pg_advisory_unlock(hashtext($1))', [migrationLockKey]);
  } finally {
    client.release();
    await pool.end();
  }
}
