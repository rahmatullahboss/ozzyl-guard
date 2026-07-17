import { randomUUID } from 'node:crypto';
import { Pool } from 'pg';
import { generateApiKey, hashPassword } from '@ozzyl/authentication';

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
};

const databaseUrl = required('DATABASE_URL');
const email = required('BOOTSTRAP_EMAIL').trim().toLowerCase();
const password = required('BOOTSTRAP_PASSWORD');
const organizationName = process.env.BOOTSTRAP_ORGANIZATION_NAME ?? 'Ozzyl Guard Organization';
const storeName = process.env.BOOTSTRAP_STORE_NAME ?? 'Primary Store';
const storePlatform = process.env.BOOTSTRAP_STORE_PLATFORM ?? 'custom';
const environment = process.env.BOOTSTRAP_KEY_ENVIRONMENT === 'test' ? 'test' : 'live';
const platformRole = process.env.BOOTSTRAP_PLATFORM_ROLE ?? 'merchant';
if (platformRole !== 'merchant' && platformRole !== 'platform_admin') {
  throw new Error('BOOTSTRAP_PLATFORM_ROLE must be merchant or platform_admin');
}
const pepper = required('API_KEY_PEPPER');
const slug = (process.env.BOOTSTRAP_ORGANIZATION_SLUG ?? organizationName)
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const ids = {
  user: `usr_${randomUUID()}`,
  organization: `org_${randomUUID()}`,
  store: `sto_${randomUUID()}`,
  key: `key_${randomUUID()}`,
  audit: `aud_${randomUUID()}`,
};
const passwordHash = await hashPassword(password);
const generated = generateApiKey(environment, pepper);
const pool = new Pool({ connectionString: databaseUrl });
const client = await pool.connect();

try {
  await client.query('begin');
  await client.query(
    `insert into users (id, email, password_hash, email_verified_at, platform_role) values ($1, $2, $3, now(), $4)`,
    [ids.user, email, passwordHash, platformRole],
  );
  await client.query(
    `insert into organizations (id, name, slug, plan_id) values ($1, $2, $3, 'plan_free')`,
    [ids.organization, organizationName, slug],
  );
  await client.query(
    `insert into organization_members (organization_id, user_id, role, permissions) values ($1, $2, 'owner', $3::jsonb)`,
    [ids.organization, ids.user, JSON.stringify({ all: true })],
  );
  await client.query(
    `insert into stores (id, organization_id, name, platform) values ($1, $2, $3, $4)`,
    [ids.store, ids.organization, storeName, storePlatform],
  );
  await client.query(
    `
      insert into api_keys (
        id, organization_id, store_id, environment, key_hash, key_prefix, name, scopes
      ) values ($1, $2, $3, $4, $5, $6, 'Initial integration key', $7::jsonb)
    `,
    [
      ids.key,
      ids.organization,
      ids.store,
      generated.environment,
      generated.keyHash,
      generated.displayPrefix,
      JSON.stringify([
        'risk:write',
        'risk:read',
        'outcomes:write',
        'comparisons:write',
        'courier:refresh',
        'verification:write',
      ]),
    ],
  );
  await client.query(
    `insert into audit_events (id, organization_id, actor_type, actor_id, action, target_type, target_id) values ($1, $2, 'bootstrap', $3, 'organization.created', 'organization', $2)`,
    [ids.audit, ids.organization, ids.user],
  );
  await client.query('commit');
} catch (error) {
  await client.query('rollback');
  throw error;
} finally {
  client.release();
  await pool.end();
}

console.info(
  'Ozzyl Guard bootstrap completed. Store the service key now; it will not be shown again.',
);
console.info(`Organization ID: ${ids.organization}`);
console.info(`Store ID: ${ids.store}`);
console.info(`Service key: ${generated.rawKey}`);
