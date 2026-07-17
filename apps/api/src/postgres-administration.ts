import type { Pool, PoolClient } from 'pg';

export interface WebhookEndpointAdministrationRecord {
  id: string;
  storeId: string | null;
  url: string;
  events: string[];
  status: string;
  updatedAt: string;
}

export interface VerificationAdministrationRecord {
  id: string;
  assessmentId: string | null;
  purpose: string;
  status: string;
  attemptCount: number;
  expiresAt: string;
  verifiedAt: string | null;
  createdAt: string;
}

export class PostgresWebhookAdministrationRepository {
  constructor(private readonly pool: Pool) {}

  async listForStore(input: {
    userId: string;
    organizationId: string;
    storeId: string;
  }): Promise<WebhookEndpointAdministrationRecord[] | null> {
    if (!(await authorizeStoreAdministrator(this.pool, input))) return null;
    const result = await this.pool.query<{
      id: string;
      store_id: string | null;
      url: string;
      events: unknown;
      status: string;
      updated_at: Date | string;
    }>(
      `
        select we.id, we.store_id, we.url, we.events, we.status, we.updated_at
        from webhook_endpoints we
        left join stores endpoint_store on endpoint_store.id = we.store_id
        where we.organization_id = $1
          and (
            we.store_id is null
            or (
              we.store_id = $2
              and endpoint_store.organization_id = we.organization_id
              and endpoint_store.status = 'active'
            )
          )
        order by we.store_id nulls first, we.created_at, we.id
      `,
      [input.organizationId, input.storeId],
    );
    return result.rows.map((row) => ({
      id: row.id,
      storeId: row.store_id,
      url: row.url,
      events: parseStringArray(row.events),
      status: row.status,
      updatedAt: new Date(row.updated_at).toISOString(),
    }));
  }

  async setStatus(input: {
    userId: string;
    organizationId: string;
    storeId: string;
    endpointId: string;
    status: 'active' | 'disabled';
  }): Promise<boolean> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      if (!(await authorizeStoreAdministrator(client, input))) {
        await client.query('rollback');
        return false;
      }
      const updated = await client.query<{ id: string }>(
        `
          update webhook_endpoints we
          set status = $4, updated_at = now()
          where we.id = $3 and we.organization_id = $1
            and (
              we.store_id is null
              or (
                we.store_id = $2
                and exists (
                  select 1 from stores endpoint_store
                  where endpoint_store.id = we.store_id
                    and endpoint_store.organization_id = we.organization_id
                    and endpoint_store.status = 'active'
                )
              )
            )
          returning we.id
        `,
        [input.organizationId, input.storeId, input.endpointId, input.status],
      );
      await client.query('commit');
      return updated.rowCount === 1;
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

export class PostgresVerificationAdministrationRepository {
  constructor(private readonly pool: Pool) {}

  async listRecent(input: {
    userId: string;
    organizationId: string;
    storeId: string;
    limit?: number;
  }): Promise<VerificationAdministrationRecord[] | null> {
    if (!(await authorizeStoreAdministrator(this.pool, input))) return null;
    const limit = Math.min(100, Math.max(1, Math.trunc(input.limit ?? 20)));
    const result = await this.pool.query<{
      id: string;
      assessment_id: string | null;
      purpose: string;
      status: string;
      attempt_count: number;
      expires_at: Date | string;
      verified_at: Date | string | null;
      created_at: Date | string;
    }>(
      `
        select
          vs.id,
          vs.assessment_id,
          vs.purpose,
          vs.status,
          coalesce(max(oa.attempt_count), 0)::int as attempt_count,
          vs.expires_at,
          vs.verified_at,
          vs.created_at
        from verification_sessions vs
        join stores session_store
          on session_store.id = vs.store_id
          and session_store.organization_id = vs.organization_id
          and session_store.status = 'active'
        left join otp_attempts oa on oa.verification_session_id = vs.id
        where vs.organization_id = $1 and vs.store_id = $2
        group by vs.id
        order by vs.created_at desc, vs.id desc
        limit $3
      `,
      [input.organizationId, input.storeId, limit],
    );
    return result.rows.map((row) => ({
      id: row.id,
      assessmentId: row.assessment_id,
      purpose: row.purpose,
      status: row.status,
      attemptCount: row.attempt_count,
      expiresAt: new Date(row.expires_at).toISOString(),
      verifiedAt: row.verified_at === null ? null : new Date(row.verified_at).toISOString(),
      createdAt: new Date(row.created_at).toISOString(),
    }));
  }
}

async function authorizeStoreAdministrator(
  database: Pool | PoolClient,
  input: { userId: string; organizationId: string; storeId: string },
): Promise<boolean> {
  const result = await database.query<{ role: string }>(
    `
      select om.role
      from organization_members om
      join organizations o on o.id = om.organization_id and o.status = 'active'
      join stores s on s.organization_id = o.id and s.status = 'active'
      where om.user_id = $1 and om.organization_id = $2 and s.id = $3
      limit 1
    `,
    [input.userId, input.organizationId, input.storeId],
  );
  return result.rows[0]?.role === 'owner' || result.rows[0]?.role === 'admin';
}

function parseStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string')
    : [];
}
