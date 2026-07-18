import type { Pool, PoolClient } from 'pg';

export const MIGRATION_HISTORY_TABLE = 'ozzyl_guard_migrations';

export const runtimeRolePolicy = {
  select: [
    'users',
    'user_sessions',
    'plans',
    'organizations',
    'organization_members',
    'stores',
    'api_keys',
    'usage_events',
    'audit_events',
    'courier_accounts',
    'courier_credentials',
    'courier_sessions',
    'courier_observations',
    'courier_jobs',
    'risk_policies',
    'risk_assessments',
    'integration_shadow_comparisons',
    'integration_shadow_rollouts',
    'integration_shadow_attempts',
    'risk_signals',
    'order_outcomes',
    'idempotency_records',
    'verification_sessions',
    'otp_attempts',
    'verification_jobs',
    'webhook_endpoints',
    'webhook_deliveries',
  ],
  insert: [
    'user_sessions',
    'usage_events',
    'audit_events',
    'courier_credentials',
    'courier_sessions',
    'courier_observations',
    'courier_jobs',
    'risk_assessments',
    'integration_shadow_comparisons',
    'integration_shadow_rollouts',
    'integration_shadow_attempts',
    'risk_signals',
    'order_outcomes',
    'idempotency_records',
    'verification_sessions',
    'otp_attempts',
    'verification_jobs',
    'webhook_endpoints',
    'webhook_deliveries',
  ],
  update: [
    'user_sessions',
    'api_keys',
    'courier_accounts',
    'courier_credentials',
    'courier_sessions',
    'courier_observations',
    'courier_jobs',
    'integration_shadow_rollouts',
    'idempotency_records',
    'verification_sessions',
    'otp_attempts',
    'verification_jobs',
    'webhook_endpoints',
    'webhook_deliveries',
  ],
} as const;

export class RuntimeRoleConfigurationError extends Error {
  readonly code = 'RUNTIME_ROLE_CONFIGURATION_INVALID';
}

export function validateRuntimeRoleName(roleName: string): string {
  if (!/^[A-Za-z_][A-Za-z0-9_]{0,62}$/.test(roleName)) {
    throw new RuntimeRoleConfigurationError(
      'DATABASE_RUNTIME_ROLE must be a simple PostgreSQL identifier of at most 63 characters',
    );
  }
  return roleName;
}

export async function applyRuntimeRoleGrants(pool: Pool, inputRoleName: string): Promise<void> {
  const roleName = validateRuntimeRoleName(inputRoleName);
  const client = await pool.connect();
  try {
    await client.query('begin');
    const current = await client.query<{ current_user: string }>('select current_user');
    if (current.rows[0]?.current_user === roleName) {
      throw new RuntimeRoleConfigurationError(
        'Runtime grants must be applied by the migration owner, not by the runtime role itself',
      );
    }

    const roleResult = await client.query<{
      oid: number;
      rolcanlogin: boolean;
      rolsuper: boolean;
      rolcreatedb: boolean;
      rolcreaterole: boolean;
      rolreplication: boolean;
      rolbypassrls: boolean;
    }>(
      `
        select oid, rolcanlogin, rolsuper, rolcreatedb, rolcreaterole, rolreplication, rolbypassrls
        from pg_roles where rolname = $1
      `,
      [roleName],
    );
    const role = roleResult.rows[0];
    if (!role) throw new RuntimeRoleConfigurationError('DATABASE_RUNTIME_ROLE does not exist');
    if (
      !role.rolcanlogin ||
      role.rolsuper ||
      role.rolcreatedb ||
      role.rolcreaterole ||
      role.rolreplication ||
      role.rolbypassrls
    ) {
      throw new RuntimeRoleConfigurationError(
        'Runtime role must be LOGIN without superuser, database, role, replication, or BYPASSRLS privileges',
      );
    }

    const memberships = await client.query<{ count: number }>(
      'select count(*)::int as count from pg_auth_members where member = $1::oid',
      [role.oid],
    );
    if ((memberships.rows[0]?.count ?? 0) !== 0) {
      throw new RuntimeRoleConfigurationError(
        'Runtime role must not inherit privileges through another PostgreSQL role',
      );
    }

    const ownership = await client.query<{
      owns_database: boolean;
      owns_schema: boolean;
      owns_relation: boolean;
    }>(
      `
        select
          exists(
            select 1
            from pg_database d
            join pg_roles r on r.oid = d.datdba
            where d.datname = current_database() and r.rolname = $1
          ) as owns_database,
          exists(
            select 1 from pg_namespace n join pg_roles r on r.oid = n.nspowner
            where n.nspname = 'public' and r.rolname = $1
          ) as owns_schema,
          exists(
            select 1
            from pg_class c
            join pg_namespace n on n.oid = c.relnamespace
            join pg_roles r on r.oid = c.relowner
            where n.nspname = 'public' and r.rolname = $1
          ) as owns_relation
      `,
      [roleName],
    );
    if (
      ownership.rows[0]?.owns_database ||
      ownership.rows[0]?.owns_schema ||
      ownership.rows[0]?.owns_relation
    ) {
      throw new RuntimeRoleConfigurationError(
        'Runtime role must not own the current database, public schema, or any public relation',
      );
    }

    await verifyCurrentTablePolicy(client);
    const quotedRole = quoteIdentifier(roleName);
    await client.query(`revoke all privileges on schema public from ${quotedRole}`);
    await client.query(`revoke all privileges on all tables in schema public from ${quotedRole}`);
    await client.query(
      `revoke all privileges on all sequences in schema public from ${quotedRole}`,
    );
    await client.query(`grant usage on schema public to ${quotedRole}`);
    await grantTables(client, quotedRole, 'select', runtimeRolePolicy.select);
    await grantTables(client, quotedRole, 'insert', runtimeRolePolicy.insert);
    await grantTables(client, quotedRole, 'update', runtimeRolePolicy.update);
    await client.query(
      `grant usage, select, update on all sequences in schema public to ${quotedRole}`,
    );
    await client.query(
      `revoke all privileges on table public.${quoteIdentifier(MIGRATION_HISTORY_TABLE)} from ${quotedRole}`,
    );
    await verifyEffectiveRuntimePrivileges(client, roleName);
    await client.query('commit');
  } catch (error) {
    await client.query('rollback').catch(() => undefined);
    throw error;
  } finally {
    client.release();
  }
}

async function verifyCurrentTablePolicy(client: PoolClient): Promise<void> {
  const result = await client.query<{ table_name: string }>(
    `
      select table_name
      from information_schema.tables
      where table_schema = 'public' and table_type = 'BASE TABLE'
      order by table_name
    `,
  );
  const actual = new Set(result.rows.map((row) => row.table_name));
  const expected = new Set([...runtimeRolePolicy.select, MIGRATION_HISTORY_TABLE]);
  const missing = [...expected].filter((table) => !actual.has(table)).sort();
  const unexpected = [...actual].filter((table) => !expected.has(table)).sort();
  if (missing.length > 0 || unexpected.length > 0) {
    throw new RuntimeRoleConfigurationError(
      `Runtime role table policy is stale; missing=${missing.join(',') || 'none'}; unexpected=${unexpected.join(',') || 'none'}`,
    );
  }
}

async function verifyEffectiveRuntimePrivileges(
  client: PoolClient,
  roleName: string,
): Promise<void> {
  const result = await client.query<{
    schema_usage: boolean;
    schema_create: boolean;
    database_create: boolean;
    migration_history_access: boolean;
    delete_access: boolean;
  }>(
    `
      select
        has_schema_privilege($1, 'public', 'USAGE') as schema_usage,
        has_schema_privilege($1, 'public', 'CREATE') as schema_create,
        has_database_privilege($1, current_database(), 'CREATE') as database_create,
        has_table_privilege(
          $1,
          'public.${MIGRATION_HISTORY_TABLE}',
          'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
        ) as migration_history_access,
        exists(
          select 1
          from unnest($2::text[]) as scoped_table(table_name)
          where has_table_privilege(
            $1,
            format('public.%I', scoped_table.table_name),
            'DELETE'
          )
        ) as delete_access
    `,
    [roleName, [...runtimeRolePolicy.select]],
  );
  const effective = result.rows[0];
  if (
    !effective?.schema_usage ||
    effective.schema_create ||
    effective.database_create ||
    effective.migration_history_access ||
    effective.delete_access
  ) {
    throw new RuntimeRoleConfigurationError(
      'Runtime role effective privileges violate the least-privilege policy',
    );
  }
}

async function grantTables(
  client: PoolClient,
  quotedRole: string,
  privilege: 'select' | 'insert' | 'update',
  tables: readonly string[],
): Promise<void> {
  const qualified = tables.map((table) => `public.${quoteIdentifier(table)}`).join(', ');
  await client.query(`grant ${privilege} on table ${qualified} to ${quotedRole}`);
}

function quoteIdentifier(value: string): string {
  return `"${value.replaceAll('"', '""')}"`;
}
