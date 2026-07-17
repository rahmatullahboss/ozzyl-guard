import { loadVerifiedMigrations } from './migration-integrity.js';

const migrations = await loadVerifiedMigrations();
console.info(`Validated ${migrations.length} ordered migrations and SHA-256 checksums`);
