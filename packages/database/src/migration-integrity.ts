import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { QueryResult, QueryResultRow } from 'pg';

export interface MigrationManifestEntry {
  name: string;
  checksumSha256: string;
}

interface MigrationManifestFile {
  schemaVersion: number;
  algorithm: string;
  migrations: Array<{ name: string; checksum_sha256: string }>;
}

export interface VerifiedMigration extends MigrationManifestEntry {
  sql: string;
}

export interface SqlQueryable {
  query<Row extends QueryResultRow = QueryResultRow>(
    text: string,
    values?: unknown[],
  ): Promise<QueryResult<Row>>;
}

export interface MigrationHistoryRow extends QueryResultRow {
  name: string;
  checksum_sha256: string | null;
}

const currentDir = path.dirname(fileURLToPath(import.meta.url));
export const defaultMigrationsDir = path.resolve(currentDir, '../migrations');
export const defaultManifestPath = path.join(defaultMigrationsDir, 'manifest.json');

export function sha256Hex(value: string | Buffer): string {
  return createHash('sha256').update(value).digest('hex');
}

export async function loadVerifiedMigrations(
  options: {
    migrationsDir?: string;
    manifestPath?: string;
  } = {},
): Promise<VerifiedMigration[]> {
  const migrationsDir = options.migrationsDir ?? defaultMigrationsDir;
  const manifestPath = options.manifestPath ?? defaultManifestPath;
  const manifest = parseManifest(await readFile(manifestPath, 'utf8'));
  const files = (await readdir(migrationsDir)).filter((file) => file.endsWith('.sql')).sort();
  const manifestNames = manifest.map((entry) => entry.name);

  if (files.length === 0) throw new Error('No migrations found');
  if (
    files.length !== manifestNames.length ||
    files.some((file, index) => file !== manifestNames[index])
  ) {
    throw new Error(
      `Migration manifest does not match migration files. Files=${files.join(',')} Manifest=${manifestNames.join(',')}`,
    );
  }

  const verified: VerifiedMigration[] = [];
  for (const [index, entry] of manifest.entries()) {
    const expectedPrefix = String(index + 1).padStart(4, '0');
    if (!entry.name.startsWith(expectedPrefix)) {
      throw new Error(`Migration ${entry.name} must start with ${expectedPrefix}`);
    }
    const sql = await readFile(path.join(migrationsDir, entry.name), 'utf8');
    if (!sql.trim()) throw new Error(`Migration ${entry.name} is empty`);
    if (/\b(drop\s+database|truncate\s+table)\b/i.test(sql)) {
      throw new Error(`Migration ${entry.name} contains a prohibited destructive statement`);
    }
    const actualChecksum = sha256Hex(sql);
    if (actualChecksum !== entry.checksumSha256) {
      throw new Error(
        `Migration checksum mismatch for ${entry.name}: expected ${entry.checksumSha256}, received ${actualChecksum}`,
      );
    }
    verified.push({ ...entry, sql });
  }
  return verified;
}

export async function ensureMigrationHistoryTable(queryable: SqlQueryable): Promise<void> {
  await queryable.query(`
    create table if not exists ozzyl_guard_migrations (
      name text primary key,
      checksum_sha256 text,
      applied_at timestamptz not null default now()
    )
  `);
  await queryable.query(
    'alter table ozzyl_guard_migrations add column if not exists checksum_sha256 text',
  );
}

export async function verifyMigrationHistory(
  queryable: SqlQueryable,
  migrations: MigrationManifestEntry[],
  options: { allowLegacyChecksumBackfill?: boolean; requireComplete?: boolean } = {},
): Promise<void> {
  const history = (
    await queryable.query<MigrationHistoryRow>(
      'select name, checksum_sha256 from ozzyl_guard_migrations order by applied_at asc, name asc',
    )
  ).rows;
  const expectedByName = new Map(migrations.map((migration) => [migration.name, migration]));

  for (const row of history) {
    if (!expectedByName.has(row.name)) {
      throw new Error(`Database contains unknown migration history row ${row.name}`);
    }
  }

  const appliedNames = new Set(history.map((row) => row.name));
  let encounteredGap = false;
  for (const migration of migrations) {
    if (!appliedNames.has(migration.name)) {
      encounteredGap = true;
      continue;
    }
    if (encounteredGap) {
      throw new Error(
        `Migration history is not a contiguous prefix; found ${migration.name} after a gap`,
      );
    }
  }

  for (const row of history) {
    const expected = expectedByName.get(row.name);
    if (!expected) throw new Error(`Database contains unknown migration history row ${row.name}`);
    if (row.checksum_sha256 === null) {
      if (!options.allowLegacyChecksumBackfill) {
        throw new Error(`Migration ${row.name} has no recorded checksum`);
      }
      await queryable.query(
        'update ozzyl_guard_migrations set checksum_sha256 = $2 where name = $1 and checksum_sha256 is null',
        [row.name, expected.checksumSha256],
      );
      continue;
    }
    if (row.checksum_sha256 !== expected.checksumSha256) {
      throw new Error(
        `Database migration checksum mismatch for ${row.name}: expected ${expected.checksumSha256}, received ${row.checksum_sha256}`,
      );
    }
  }

  if (options.requireComplete && history.length !== migrations.length) {
    throw new Error(
      `Migration history is incomplete: expected ${migrations.length} rows, received ${history.length}`,
    );
  }
}

export async function migrationHistorySnapshot(
  queryable: SqlQueryable,
): Promise<MigrationHistoryRow[]> {
  return (
    await queryable.query<MigrationHistoryRow>(
      'select name, checksum_sha256 from ozzyl_guard_migrations order by name asc',
    )
  ).rows;
}

function parseManifest(content: string): MigrationManifestEntry[] {
  const parsed = JSON.parse(content) as Partial<MigrationManifestFile>;
  if (
    parsed.schemaVersion !== 1 ||
    parsed.algorithm !== 'sha256' ||
    !Array.isArray(parsed.migrations)
  ) {
    throw new Error('Invalid migration manifest metadata');
  }
  const names = new Set<string>();
  return parsed.migrations.map((entry) => {
    if (
      typeof entry?.name !== 'string' ||
      typeof entry.checksum_sha256 !== 'string' ||
      !/^[a-f0-9]{64}$/.test(entry.checksum_sha256)
    ) {
      throw new Error('Invalid migration manifest entry');
    }
    if (names.has(entry.name)) throw new Error(`Duplicate migration manifest entry ${entry.name}`);
    names.add(entry.name);
    return { name: entry.name, checksumSha256: entry.checksum_sha256 };
  });
}
