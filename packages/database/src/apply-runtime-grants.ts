import { Pool } from 'pg';
import { applyRuntimeRoleGrants } from './runtime-role.js';

const databaseUrl = process.env.DATABASE_URL;
const runtimeRole = process.env.DATABASE_RUNTIME_ROLE;
if (!databaseUrl) throw new Error('DATABASE_URL is required');
if (!runtimeRole) throw new Error('DATABASE_RUNTIME_ROLE is required');

const pool = new Pool({ connectionString: databaseUrl, max: 1 });
try {
  await applyRuntimeRoleGrants(pool, runtimeRole);
  console.log(JSON.stringify({ event: 'database.runtime_role_grants_applied', runtimeRole }));
} finally {
  await pool.end();
}
