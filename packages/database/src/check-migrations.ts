import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const migrationsDir = path.resolve(currentDir, '../migrations');
const files = (await readdir(migrationsDir)).filter((file) => file.endsWith('.sql')).sort();

if (files.length === 0) throw new Error('No migrations found');
for (const [index, file] of files.entries()) {
  const expectedPrefix = String(index + 1).padStart(4, '0');
  if (!file.startsWith(expectedPrefix)) {
    throw new Error(`Migration ${file} must start with ${expectedPrefix}`);
  }
  const sql = await readFile(path.join(migrationsDir, file), 'utf8');
  if (!sql.trim()) throw new Error(`Migration ${file} is empty`);
  if (/\b(drop\s+database|truncate\s+table)\b/i.test(sql)) {
    throw new Error(`Migration ${file} contains a prohibited destructive statement`);
  }
}

console.info(`Validated ${files.length} ordered migrations`);
