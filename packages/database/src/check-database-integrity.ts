import { Pool } from 'pg';
import { loadVerifiedMigrations, verifyMigrationHistory } from './migration-integrity.js';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL is required');

const pool = new Pool({ connectionString: databaseUrl });
try {
  const table = await pool.query<{ migration_table: string | null }>(
    "select to_regclass('public.ozzyl_guard_migrations')::text as migration_table",
  );
  if (!table.rows[0]?.migration_table) {
    throw new Error('Migration history table public.ozzyl_guard_migrations does not exist');
  }

  const checksumColumn = await pool.query<{ is_nullable: 'YES' | 'NO' }>(`
    select is_nullable
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'ozzyl_guard_migrations'
      and column_name = 'checksum_sha256'
  `);
  const checksumMetadata = checksumColumn.rows[0];
  if (!checksumMetadata) {
    throw new Error('Migration history checksum column does not exist');
  }
  if (checksumMetadata.is_nullable !== 'NO') {
    throw new Error('Migration history checksum column must be NOT NULL');
  }

  const migrations = await loadVerifiedMigrations();
  await verifyMigrationHistory(pool, migrations, { requireComplete: true });
  console.info(`Database migration history integrity passed for ${migrations.length} migrations`);
} finally {
  await pool.end();
}
