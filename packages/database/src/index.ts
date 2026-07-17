import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export * from './schema.js';
export * from './runtime-role.js';

export function createDatabase(databaseUrl: string) {
  const pool = new Pool({ connectionString: databaseUrl, max: 10 });
  return { db: drizzle(pool), pool };
}

export interface TenantScope {
  organizationId: string;
  storeId: string;
}

export function requireTenantScope(scope: Partial<TenantScope>): TenantScope {
  if (!scope.organizationId || !scope.storeId) {
    throw new Error('Both organizationId and storeId are required for tenant-scoped operations');
  }
  return { organizationId: scope.organizationId, storeId: scope.storeId };
}
