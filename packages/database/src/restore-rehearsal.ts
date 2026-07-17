import { execFile } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { Pool } from 'pg';
import {
  loadVerifiedMigrations,
  migrationHistorySnapshot,
  sha256Hex,
  verifyMigrationHistory,
} from './migration-integrity.js';

const execFileAsync = promisify(execFile);
const databaseUrl = process.env.DATABASE_URL;
const restoreDatabaseUrl = process.env.RESTORE_DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL is required');
if (!restoreDatabaseUrl) throw new Error('RESTORE_DATABASE_URL is required');

const sourcePool = new Pool({ connectionString: databaseUrl });
const restorePool = new Pool({ connectionString: restoreDatabaseUrl });
const sourceToolConnection = postgresToolConnection(databaseUrl);
const restoreToolConnection = postgresToolConnection(restoreDatabaseUrl);
const temporaryDirectory = await mkdtemp(path.join(tmpdir(), 'ozzyl-guard-restore-'));
const dumpPath = path.join(temporaryDirectory, 'database.dump');

try {
  const [sourceIdentity, restoreIdentity] = await Promise.all([
    databaseIdentity(sourcePool),
    databaseIdentity(restorePool),
  ]);
  if (sourceIdentity === restoreIdentity) {
    throw new Error('DATABASE_URL and RESTORE_DATABASE_URL resolve to the same database');
  }

  const targetRelations = await restorePool.query<{ relation_count: string }>(`
    select count(*)::text as relation_count
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public'
      and c.relkind in ('r', 'p', 'v', 'm', 'S', 'f')
  `);
  if (targetRelations.rows[0]?.relation_count !== '0') {
    throw new Error('Restore target must be a clean database with no public relations');
  }

  const migrations = await loadVerifiedMigrations();
  await verifyMigrationHistory(sourcePool, migrations, { requireComplete: true });
  const sourceSchemaFingerprint = await schemaFingerprint(sourcePool);
  const sourceTableCounts = await tableCounts(sourcePool);
  const sourceHistory = await migrationHistorySnapshot(sourcePool);

  await runPostgresTool(
    'pg_dump',
    ['--format=custom', '--no-owner', '--no-privileges', '--file', dumpPath],
    sourceToolConnection.environment,
    'Database backup',
  );
  await runPostgresTool(
    'pg_restore',
    [
      '--exit-on-error',
      '--no-owner',
      '--no-privileges',
      '--dbname',
      restoreToolConnection.databaseName,
      dumpPath,
    ],
    restoreToolConnection.environment,
    'Database restore',
  );

  await verifyMigrationHistory(restorePool, migrations, { requireComplete: true });
  const restoredSchemaFingerprint = await schemaFingerprint(restorePool);
  if (sourceSchemaFingerprint !== restoredSchemaFingerprint) {
    throw new Error('Restored schema fingerprint does not match the source database');
  }

  const restoredTableCounts = await tableCounts(restorePool);
  if (JSON.stringify(sourceTableCounts) !== JSON.stringify(restoredTableCounts)) {
    throw new Error('Restored table counts do not match the source database');
  }

  const restoredHistory = await migrationHistorySnapshot(restorePool);
  if (JSON.stringify(sourceHistory) !== JSON.stringify(restoredHistory)) {
    throw new Error('Restored migration history does not match the source database');
  }

  await runNpmMigrationReplay(restoreDatabaseUrl);
  await verifyMigrationHistory(restorePool, migrations, { requireComplete: true });
  const replayedSchemaFingerprint = await schemaFingerprint(restorePool);
  if (restoredSchemaFingerprint !== replayedSchemaFingerprint) {
    throw new Error('Migration replay changed the restored schema');
  }

  console.info(
    `Restore rehearsal passed for ${migrations.length} migrations and ${sourceTableCounts.length} public tables`,
  );
} finally {
  await Promise.allSettled([sourcePool.end(), restorePool.end()]);
  await rm(temporaryDirectory, { recursive: true, force: true });
}

async function databaseIdentity(pool: Pool): Promise<string> {
  const result = await pool.query<{
    database_name: string;
    server_address: string | null;
    server_port: number | null;
  }>(`
    select
      current_database() as database_name,
      inet_server_addr()::text as server_address,
      inet_server_port() as server_port
  `);
  const row = result.rows[0];
  if (!row) throw new Error('Unable to read database identity');
  return `${row.server_address ?? 'local'}:${row.server_port ?? 0}/${row.database_name}`;
}

async function schemaFingerprint(pool: Pool): Promise<string> {
  const [relations, columns, constraints, indexes, triggers, routines, types] = await Promise.all([
    pool.query(`
      select c.relname, c.relkind, c.relpersistence
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = 'public'
        and c.relkind in ('r', 'p', 'v', 'm', 'S', 'f')
      order by c.relname, c.relkind
    `),
    pool.query(`
      select table_name, column_name, ordinal_position, column_default, is_nullable,
             data_type, udt_name, is_identity, identity_generation, is_generated, generation_expression
      from information_schema.columns
      where table_schema = 'public'
      order by table_name, ordinal_position
    `),
    pool.query(`
      select c.conname, r.relname as relation_name, c.contype, pg_get_constraintdef(c.oid, true) as definition
      from pg_constraint c
      join pg_namespace n on n.oid = c.connamespace
      left join pg_class r on r.oid = c.conrelid
      where n.nspname = 'public'
      order by relation_name, c.conname
    `),
    pool.query(`
      select tablename, indexname, indexdef
      from pg_indexes
      where schemaname = 'public'
      order by tablename, indexname
    `),
    pool.query(`
      select c.relname as relation_name, t.tgname, pg_get_triggerdef(t.oid, true) as definition
      from pg_trigger t
      join pg_class c on c.oid = t.tgrelid
      join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = 'public' and not t.tgisinternal
      order by c.relname, t.tgname
    `),
    pool.query(`
      select p.proname, pg_get_function_identity_arguments(p.oid) as arguments,
             pg_get_functiondef(p.oid) as definition
      from pg_proc p
      join pg_namespace n on n.oid = p.pronamespace
      where n.nspname = 'public'
      order by p.proname, arguments
    `),
    pool.query(`
      select t.typname, t.typtype, e.enumsortorder, e.enumlabel
      from pg_type t
      join pg_namespace n on n.oid = t.typnamespace
      left join pg_enum e on e.enumtypid = t.oid
      where n.nspname = 'public' and t.typtype in ('e', 'd')
      order by t.typname, e.enumsortorder
    `),
  ]);
  return sha256Hex(
    JSON.stringify({
      relations: relations.rows,
      columns: columns.rows,
      constraints: constraints.rows,
      indexes: indexes.rows,
      triggers: triggers.rows,
      routines: routines.rows,
      types: types.rows,
    }),
  );
}

async function tableCounts(pool: Pool): Promise<Array<{ tableName: string; rowCount: string }>> {
  const tables = await pool.query<{ table_name: string }>(`
    select c.relname as table_name
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relkind in ('r', 'p')
    order by c.relname
  `);
  const counts: Array<{ tableName: string; rowCount: string }> = [];
  for (const { table_name: tableName } of tables.rows) {
    const result = await pool.query<{ row_count: string }>(
      `select count(*)::text as row_count from ${quoteIdentifier('public')}.${quoteIdentifier(tableName)}`,
    );
    counts.push({ tableName, rowCount: result.rows[0]?.row_count ?? '0' });
  }
  return counts;
}

function quoteIdentifier(value: string): string {
  return `"${value.replaceAll('"', '""')}"`;
}

async function runPostgresTool(
  executable: string,
  arguments_: string[],
  postgresEnvironment: NodeJS.ProcessEnv,
  label: string,
): Promise<void> {
  try {
    await execFileAsync(executable, arguments_, {
      env: { ...process.env, ...postgresEnvironment },
      maxBuffer: 10 * 1024 * 1024,
    });
  } catch {
    throw new Error(`${label} failed; verify PostgreSQL client tools and database permissions`);
  }
}

async function runNpmMigrationReplay(connectionUrl: string): Promise<void> {
  try {
    await execFileAsync('npm', ['run', 'db:migrate', '--silent'], {
      env: { ...process.env, DATABASE_URL: connectionUrl },
      maxBuffer: 10 * 1024 * 1024,
    });
  } catch {
    throw new Error('Migration replay failed on the restored database');
  }
}

function postgresToolConnection(connectionUrl: string): {
  databaseName: string;
  environment: NodeJS.ProcessEnv;
} {
  const url = new URL(connectionUrl);
  if (url.protocol !== 'postgres:' && url.protocol !== 'postgresql:') {
    throw new Error('PostgreSQL connection URL is required');
  }
  const databaseName = decodeURIComponent(url.pathname.replace(/^\//, ''));
  if (!databaseName) throw new Error('PostgreSQL connection URL must include a database name');
  const environment: NodeJS.ProcessEnv = {
    PGHOST: url.hostname,
    PGPORT: url.port || '5432',
    PGUSER: decodeURIComponent(url.username),
    PGPASSWORD: decodeURIComponent(url.password),
    PGDATABASE: databaseName,
  };
  const sslMode = url.searchParams.get('sslmode');
  if (sslMode) environment.PGSSLMODE = sslMode;
  return { databaseName, environment };
}
