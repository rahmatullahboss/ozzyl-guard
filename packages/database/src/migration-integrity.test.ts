import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { loadVerifiedMigrations, sha256Hex } from './migration-integrity.js';

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

describe('migration manifest integrity', () => {
  it('loads an exact ordered migration set with matching SHA-256 checksums', async () => {
    const fixture = await createFixture([
      ['0001_foundation.sql', 'create table example (id text primary key);\n'],
      ['0002_feature.sql', 'alter table example add column enabled boolean;\n'],
    ]);

    await expect(loadVerifiedMigrations(fixture)).resolves.toEqual([
      expect.objectContaining({ name: '0001_foundation.sql' }),
      expect.objectContaining({ name: '0002_feature.sql' }),
    ]);
  });

  it('rejects a migration file changed after the manifest was recorded', async () => {
    const fixture = await createFixture([
      ['0001_foundation.sql', 'create table example (id text primary key);\n'],
    ]);
    await writeFile(
      path.join(fixture.migrationsDir, '0001_foundation.sql'),
      'create table changed (id text primary key);\n',
    );

    await expect(loadVerifiedMigrations(fixture)).rejects.toThrow('Migration checksum mismatch');
  });

  it('rejects missing, extra, or reordered migration files', async () => {
    const fixture = await createFixture([
      ['0001_foundation.sql', 'select 1;\n'],
      ['0002_feature.sql', 'select 2;\n'],
    ]);
    await writeFile(path.join(fixture.migrationsDir, '0003_untracked.sql'), 'select 3;\n');

    await expect(loadVerifiedMigrations(fixture)).rejects.toThrow(
      'Migration manifest does not match migration files',
    );
  });
});

async function createFixture(
  migrations: Array<[name: string, sql: string]>,
): Promise<{ migrationsDir: string; manifestPath: string }> {
  const root = await mkdtemp(path.join(tmpdir(), 'ozzyl-migrations-'));
  temporaryDirectories.push(root);
  const migrationsDir = path.join(root, 'migrations');
  await mkdir(migrationsDir);
  for (const [name, sql] of migrations) {
    await writeFile(path.join(migrationsDir, name), sql);
  }
  const manifestPath = path.join(migrationsDir, 'manifest.json');
  await writeFile(
    manifestPath,
    `${JSON.stringify(
      {
        schemaVersion: 1,
        algorithm: 'sha256',
        migrations: migrations.map(([name, sql]) => ({
          name,
          checksum_sha256: sha256Hex(sql),
        })),
      },
      null,
      2,
    )}\n`,
  );
  return { migrationsDir, manifestPath };
}
