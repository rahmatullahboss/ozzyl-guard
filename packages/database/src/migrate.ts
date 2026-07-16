import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL is required');

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const migrationsDir = path.resolve(currentDir, '../migrations');
const pool = new Pool({ connectionString: databaseUrl });

try {
  await pool.query(`
    create table if not exists ozzyl_guard_migrations (
      name text primary key,
      applied_at timestamptz not null default now()
    )
  `);
  const applied = new Set(
    (await pool.query<{ name: string }>('select name from ozzyl_guard_migrations')).rows.map(
      (row) => row.name,
    ),
  );
  const files = (await readdir(migrationsDir)).filter((file) => file.endsWith('.sql')).sort();
  for (const file of files) {
    if (applied.has(file)) continue;
    const sql = await readFile(path.join(migrationsDir, file), 'utf8');
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(sql);
      await client.query('insert into ozzyl_guard_migrations(name) values ($1)', [file]);
      await client.query('commit');
      console.info(`Applied migration ${file}`);
    } catch (error) {
      await client.query('rollback');
      throw error;
    } finally {
      client.release();
    }
  }
} finally {
  await pool.end();
}
