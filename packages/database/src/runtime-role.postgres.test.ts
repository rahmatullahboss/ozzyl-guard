import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { applyRuntimeRoleGrants } from './runtime-role.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL runtime role isolation', () => {
  const adminPool = new Pool({ connectionString: databaseUrl });
  let canManageRoles = false;

  beforeAll(async () => {
    const result = await adminPool.query<{ allowed: boolean }>(
      `
        select (rolsuper or rolcreaterole) as allowed
        from pg_roles where rolname = current_user
      `,
    );
    canManageRoles = result.rows[0]?.allowed ?? false;
  });

  afterAll(async () => {
    await adminPool.end();
  });

  it('allows current application DML but denies migration history, delete, and DDL', async () => {
    if (!canManageRoles || !databaseUrl) return;
    const roleName = `runtime_ci_${randomUUID().replaceAll('-', '')}`;
    const password = `pw${randomUUID().replaceAll('-', '')}`;
    const auditId = `aud_runtime_${randomUUID()}`;
    await adminPool.query(
      `create role "${roleName}" login password '${password}' nosuperuser nocreatedb nocreaterole noinherit noreplication nobypassrls`,
    );
    try {
      await applyRuntimeRoleGrants(adminPool, roleName);
      const runtimeUrl = new URL(databaseUrl);
      runtimeUrl.username = roleName;
      runtimeUrl.password = password;
      const runtimePool = new Pool({ connectionString: runtimeUrl.toString(), max: 2 });
      try {
        await expect(runtimePool.query('select count(*) from stores')).resolves.toBeDefined();
        await expect(
          runtimePool.query(
            `insert into audit_events (id, actor_type, action) values ($1, 'system', 'runtime_role_test')`,
            [auditId],
          ),
        ).resolves.toBeDefined();
        await expectPermissionDenied(runtimePool.query('select * from ozzyl_guard_migrations'));
        await expectPermissionDenied(
          runtimePool.query(`delete from audit_events where id = $1`, [auditId]),
        );
        await expectPermissionDenied(
          runtimePool.query(`insert into users (id, email) values ($1, $2)`, [
            `usr_runtime_${randomUUID()}`,
            `${randomUUID()}@example.com`,
          ]),
        );
        await expectPermissionDenied(runtimePool.query('create table runtime_escape(id text)'));
        await expectPermissionDenied(
          runtimePool.query('alter table stores add column runtime_escape text'),
        );
        const privileges = await adminPool.query<{
          webhook_update: boolean;
          audit_update: boolean;
          schema_create: boolean;
        }>(
          `
            select
              has_table_privilege($1, 'public.webhook_endpoints', 'UPDATE') as webhook_update,
              has_table_privilege($1, 'public.audit_events', 'UPDATE') as audit_update,
              has_schema_privilege($1, 'public', 'CREATE') as schema_create
          `,
          [roleName],
        );
        expect(privileges.rows[0]).toEqual({
          webhook_update: true,
          audit_update: false,
          schema_create: false,
        });
      } finally {
        await runtimePool.end();
      }
    } finally {
      await adminPool.query('delete from audit_events where id = $1', [auditId]);
      await dropRole(adminPool, roleName);
    }
  });

  it('rejects runtime roles with elevated cluster privileges', async () => {
    if (!canManageRoles) return;
    const roleName = `runtime_priv_${randomUUID().replaceAll('-', '')}`;
    await adminPool.query(
      `create role "${roleName}" login createdb nosuperuser nocreaterole noinherit noreplication nobypassrls`,
    );
    try {
      await expect(applyRuntimeRoleGrants(adminPool, roleName)).rejects.toThrow(
        'Runtime role must be LOGIN without superuser',
      );
    } finally {
      await dropRole(adminPool, roleName);
    }
  });

  it('rejects runtime roles that inherit another role membership', async () => {
    if (!canManageRoles) return;
    const parent = `runtime_parent_${randomUUID().replaceAll('-', '')}`;
    const child = `runtime_child_${randomUUID().replaceAll('-', '')}`;
    await adminPool.query(`create role "${parent}" nologin`);
    await adminPool.query(
      `create role "${child}" login nosuperuser nocreatedb nocreaterole noinherit noreplication nobypassrls`,
    );
    await adminPool.query(`grant "${parent}" to "${child}"`);
    try {
      await expect(applyRuntimeRoleGrants(adminPool, child)).rejects.toThrow(
        'must not inherit privileges',
      );
    } finally {
      await adminPool.query(`revoke "${parent}" from "${child}"`);
      await dropRole(adminPool, child);
      await dropRole(adminPool, parent);
    }
  });
});

async function expectPermissionDenied(promise: Promise<unknown>): Promise<void> {
  await expect(promise).rejects.toMatchObject({ code: '42501' });
}

async function dropRole(pool: Pool, roleName: string): Promise<void> {
  await pool.query('select pg_terminate_backend(pid) from pg_stat_activity where usename = $1', [
    roleName,
  ]);
  const exists = await pool.query<{ exists: boolean }>(
    'select exists(select 1 from pg_roles where rolname = $1) as exists',
    [roleName],
  );
  if (!exists.rows[0]?.exists) return;
  await pool.query(`drop owned by "${roleName}"`);
  await pool.query(`drop role "${roleName}"`);
}
