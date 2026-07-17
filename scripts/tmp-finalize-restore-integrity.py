from __future__ import annotations

import hashlib
import json
from pathlib import Path

migrations_dir = Path('packages/database/migrations')
entries = []
for migration in sorted(migrations_dir.glob('*.sql')):
    entries.append(
        {
            'name': migration.name,
            'checksum_sha256': hashlib.sha256(migration.read_bytes()).hexdigest(),
        }
    )
manifest = {
    'schemaVersion': 1,
    'algorithm': 'sha256',
    'migrations': entries,
}
(migrations_dir / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')

path = Path('packages/database/src/restore-rehearsal.ts')
text = path.read_text()
text = text.replace(
    "const sourcePool = new Pool({ connectionString: databaseUrl });\nconst restorePool = new Pool({ connectionString: restoreDatabaseUrl });",
    "const sourcePool = new Pool({ connectionString: databaseUrl });\nconst restorePool = new Pool({ connectionString: restoreDatabaseUrl });\nconst sourceToolConnection = postgresToolConnection(databaseUrl);\nconst restoreToolConnection = postgresToolConnection(restoreDatabaseUrl);",
)
text = text.replace(
    "  ], databaseUrl, 'Database backup');\n  await runPostgresTool('pg_restore', [\n    '--exit-on-error',\n    '--no-owner',\n    '--no-privileges',\n    '--dbname',\n    restoreDatabaseUrl,\n    dumpPath,\n  ], restoreDatabaseUrl, 'Database restore');",
    "  ], sourceToolConnection.environment, 'Database backup');\n  await runPostgresTool('pg_restore', [\n    '--exit-on-error',\n    '--no-owner',\n    '--no-privileges',\n    '--dbname',\n    restoreToolConnection.databaseName,\n    dumpPath,\n  ], restoreToolConnection.environment, 'Database restore');",
)
text = text.replace(
    "  connectionUrl: string,\n  label: string,\n): Promise<void> {\n  try {\n    await execFileAsync(executable, arguments_, {\n      env: { ...process.env, PGDATABASE: connectionUrl },",
    "  postgresEnvironment: NodeJS.ProcessEnv,\n  label: string,\n): Promise<void> {\n  try {\n    await execFileAsync(executable, arguments_, {\n      env: { ...process.env, ...postgresEnvironment },",
)
text += """

function postgresToolConnection(connectionUrl: string): {
  databaseName: string;
  environment: NodeJS.ProcessEnv;
} {
  const url = new URL(connectionUrl);
  if (url.protocol !== 'postgres:' && url.protocol !== 'postgresql:') {
    throw new Error('PostgreSQL connection URL is required');
  }
  const databaseName = decodeURIComponent(url.pathname.replace(/^\\//, ''));
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
"""
path.write_text(text)

integrity_path = Path('packages/database/src/migration-integrity.ts')
integrity = integrity_path.read_text().replace(
    'interface MigrationHistoryRow extends QueryResultRow {',
    'export interface MigrationHistoryRow extends QueryResultRow {',
)
integrity_path.write_text(integrity)
