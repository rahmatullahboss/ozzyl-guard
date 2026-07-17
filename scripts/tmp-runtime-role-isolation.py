from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text()
    if text.count(old) != 1:
        raise SystemExit(f"Expected exactly one match in {path}: {old[:80]!r}; found {text.count(old)}")
    file.write_text(text.replace(old, new, 1))


# Harden PostgreSQL tenant relationships in existing API repositories.
replace_once(
    "apps/api/src/postgres.ts",
    "join stores s on s.id = ak.store_id and s.status = 'active'",
    "join stores s on s.id = ak.store_id\n          and s.organization_id = ak.organization_id\n          and s.status = 'active'",
)
replace_once(
    "apps/api/src/postgres.ts",
    "export class PostgresApiKeyResolver implements ApiKeyResolver {",
    "export class TenantScopeMismatchError extends Error {\n  readonly code = 'TENANT_SCOPE_MISMATCH';\n\n  constructor() {\n    super('Organization and store scope do not match an active tenant');\n  }\n}\n\nexport class PostgresApiKeyResolver implements ApiKeyResolver {",
)
replace_once(
    "apps/api/src/postgres.ts",
    "      await client.query('begin');\n      const inserted = await client.query<{ id: string }>(",
    "      await client.query('begin');\n      await assertActiveStoreScope(\n        client,\n        record.identity.organizationId,\n        record.identity.storeId,\n      );\n      const inserted = await client.query<{ id: string }>(",
)
replace_once(
    "apps/api/src/postgres.ts",
    "      await client.query('begin');\n      await client.query('select pg_advisory_xact_lock(hashtext($1))', [\n        `${input.organizationId}:${input.storeId}:outcome:${input.idempotencyKey}`,",
    "      await client.query('begin');\n      await assertActiveStoreScope(client, input.organizationId, input.storeId);\n      await client.query('select pg_advisory_xact_lock(hashtext($1))', [\n        `${input.organizationId}:${input.storeId}:outcome:${input.idempotencyKey}`,",
)
replace_once(
    "apps/api/src/postgres.ts",
    "  async load(input: Parameters<AssessmentFeatureProvider['load']>[0]) {\n    const [observationsResult, merchantResult, verificationResult, networkResult, policyResult] =",
    "  async load(input: Parameters<AssessmentFeatureProvider['load']>[0]) {\n    await assertActiveStoreScope(\n      this.pool,\n      input.identity.organizationId,\n      input.identity.storeId,\n    );\n    const [observationsResult, merchantResult, verificationResult, networkResult, policyResult] =",
)
replace_once(
    "apps/api/src/postgres.ts",
    """            select distinct on (provider)
              provider, total_orders, delivered_orders, returned_orders,
              cancelled_before_shipping, confidence, expires_at
            from courier_observations
            where store_id = $1 and phone_hash = $2
            order by provider, observed_at desc
          `,
          [input.identity.storeId, input.phoneHash],""",
    """            select distinct on (co.provider)
              co.provider, co.total_orders, co.delivered_orders, co.returned_orders,
              co.cancelled_before_shipping, co.confidence, co.expires_at
            from courier_observations co
            join stores s on s.id = co.store_id
            where co.store_id = $1 and s.organization_id = $2 and s.status = 'active'
              and co.phone_hash = $3
            order by co.provider, co.observed_at desc
          `,
          [input.identity.storeId, input.identity.organizationId, input.phoneHash],""",
)
replace_once(
    "apps/api/src/postgres.ts",
    """            from order_outcomes
            where store_id = $1 and phone_hash = $2
          `,
          [input.identity.storeId, input.phoneHash],""",
    """            from order_outcomes
            where organization_id = $1 and store_id = $2 and phone_hash = $3
          `,
          [input.identity.organizationId, input.identity.storeId, input.phoneHash],""",
)
replace_once(
    "apps/api/src/postgres.ts",
    """                select 1 from verification_sessions
                where store_id = $1 and phone_hash = $2 and status = 'verified'
                  and verified_at > now() - interval '90 days'
              ) as verified,
              coalesce(sum(oa.attempt_count), 0)::int as attempts
            from verification_sessions vs
            left join otp_attempts oa on oa.verification_session_id = vs.id
            where vs.store_id = $1 and vs.phone_hash = $2
          `,
          [input.identity.storeId, input.phoneHash],""",
    """                select 1 from verification_sessions
                where organization_id = $1 and store_id = $2 and phone_hash = $3
                  and status = 'verified'
                  and verified_at > now() - interval '90 days'
              ) as verified,
              coalesce(sum(oa.attempt_count), 0)::int as attempts
            from verification_sessions vs
            left join otp_attempts oa on oa.verification_session_id = vs.id
            where vs.organization_id = $1 and vs.store_id = $2 and vs.phone_hash = $3
          `,
          [input.identity.organizationId, input.identity.storeId, input.phoneHash],""",
)
replace_once(
    "apps/api/src/postgres.ts",
    """        this.pool.query<{ policy: unknown }>(
          `select policy from risk_policies where store_id = $1 and active = true limit 1`,
          [input.identity.storeId],
        ),""",
    """        this.pool.query<{ policy: unknown }>(
          `
            select rp.policy
            from risk_policies rp
            join stores s on s.id = rp.store_id
            where rp.store_id = $1 and s.organization_id = $2 and s.status = 'active'
              and rp.active = true
            limit 1
          `,
          [input.identity.storeId, input.identity.organizationId],
        ),""",
)
replace_once(
    "apps/api/src/postgres.ts",
    """async function currentUsage(
  client: PoolClient,""",
    """async function assertActiveStoreScope(
  database: Pool | PoolClient,
  organizationId: string,
  storeId: string,
): Promise<void> {
  const result = await database.query(
    `
      select 1
      from stores s
      join organizations o on o.id = s.organization_id
      where s.id = $1 and s.organization_id = $2
        and s.status = 'active' and o.status = 'active'
      limit 1
    `,
    [storeId, organizationId],
  );
  if (result.rowCount !== 1) throw new TenantScopeMismatchError();
}

async function currentUsage(
  client: PoolClient,""",
)

# Export repository-only administration primitives without adding HTTP routes.
replace_once(
    "apps/api/src/index.ts",
    "import { createBrowserApi, type BrowserApiDependencies } from './browser.js';",
    "import { createBrowserApi, type BrowserApiDependencies } from './browser.js';\n\nexport * from './postgres-administration.js';",
)

Path("apps/api/src/postgres-administration.ts").write_text(r'''import type { Pool, PoolClient } from 'pg';

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
          set status = $5, updated_at = now()
          where we.id = $4 and we.organization_id = $2
            and (
              we.store_id is null
              or (
                we.store_id = $3
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
        [input.userId, input.organizationId, input.storeId, input.endpointId, input.status],
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
''')

Path("apps/api/src/postgres-administration.test.ts").write_text(r'''import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import {
  PostgresVerificationAdministrationRepository,
  PostgresWebhookAdministrationRepository,
} from './postgres-administration.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL webhook and verification administration isolation', () => {
  const pool = new Pool({ connectionString: databaseUrl });
  const suffix = randomUUID();
  const ownerA = `usr_admin_a_${suffix}`;
  const ownerB = `usr_admin_b_${suffix}`;
  const organizationA = `org_admin_a_${suffix}`;
  const organizationB = `org_admin_b_${suffix}`;
  const storeA = `sto_admin_a_${suffix}`;
  const storeB = `sto_admin_b_${suffix}`;
  const endpointOrganizationA = `we_admin_org_a_${suffix}`;
  const endpointStoreA = `we_admin_store_a_${suffix}`;
  const endpointStoreB = `we_admin_store_b_${suffix}`;
  const endpointCorrupt = `we_admin_corrupt_${suffix}`;
  const verificationA = `ver_admin_a_${suffix}`;
  const verificationB = `ver_admin_b_${suffix}`;
  const verificationCorrupt = `ver_admin_corrupt_${suffix}`;

  beforeAll(async () => {
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `insert into users (id, email, status) values ($1, $2, 'active'), ($3, $4, 'active')`,
        [ownerA, `${ownerA}@example.com`, ownerB, `${ownerB}@example.com`],
      );
      await client.query(
        `
          insert into organizations (id, name, slug, plan_id)
          values ($1, 'Admin A', $2, 'plan_free'), ($3, 'Admin B', $4, 'plan_free')
        `,
        [organizationA, `admin-a-${suffix}`, organizationB, `admin-b-${suffix}`],
      );
      await client.query(
        `
          insert into organization_members (organization_id, user_id, role)
          values ($1, $2, 'owner'), ($3, $4, 'owner')
        `,
        [organizationA, ownerA, organizationB, ownerB],
      );
      await client.query(
        `
          insert into stores (id, organization_id, name, platform)
          values ($1, $2, 'Store A', 'custom'), ($3, $4, 'Store B', 'custom')
        `,
        [storeA, organizationA, storeB, organizationB],
      );
      const events = JSON.stringify(['assessment.completed', 'verification.verified']);
      await client.query(
        `
          insert into webhook_endpoints (
            id, organization_id, store_id, url, secret_encrypted, events, status
          ) values
            ($1, $5, null, 'https://organization-a.example/hook', 'secret-org-a', $9::jsonb, 'active'),
            ($2, $5, $6, 'https://store-a.example/hook', 'secret-store-a', $9::jsonb, 'active'),
            ($3, $7, $8, 'https://store-b.example/hook', 'secret-store-b', $9::jsonb, 'active'),
            ($4, $5, $8, 'https://corrupt.example/hook', 'secret-corrupt', $9::jsonb, 'active')
        `,
        [
          endpointOrganizationA,
          endpointStoreA,
          endpointStoreB,
          endpointCorrupt,
          organizationA,
          storeA,
          organizationB,
          storeB,
          events,
        ],
      );
      await client.query(
        `
          insert into verification_sessions (
            id, organization_id, store_id, phone_hash, purpose, channel, status, expires_at
          ) values
            ($1, $4, $5, 'phone-a', 'cod_order_confirmation', 'otp', 'pending', now() + interval '5 minutes'),
            ($2, $6, $7, 'phone-b', 'cod_order_confirmation', 'otp', 'pending', now() + interval '5 minutes'),
            ($3, $4, $7, 'phone-corrupt', 'cod_order_confirmation', 'otp', 'pending', now() + interval '5 minutes')
        `,
        [verificationA, verificationB, verificationCorrupt, organizationA, storeA, organizationB, storeB],
      );
      await client.query(
        `insert into otp_attempts (id, verification_session_id, otp_hash, attempt_count, expires_at)
         values ($1, $2, 'hash-only', 2, now() + interval '5 minutes')`,
        [`otpa_admin_${suffix}`, verificationA],
      );
      await client.query('commit');
    } catch (error) {
      await client.query('rollback');
      throw error;
    } finally {
      client.release();
    }
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationA, organizationB],
    ]);
    await pool.query('delete from users where id = any($1::text[])', [[ownerA, ownerB]]);
    await pool.end();
  });

  it('lists and changes only authorized relationally scoped webhook endpoints', async () => {
    const repository = new PostgresWebhookAdministrationRepository(pool);
    const records = await repository.listForStore({
      userId: ownerA,
      organizationId: organizationA,
      storeId: storeA,
    });
    expect(records?.map((record) => record.id)).toEqual([endpointOrganizationA, endpointStoreA]);
    expect(JSON.stringify(records)).not.toContain('secret-');
    await expect(
      repository.listForStore({ userId: ownerB, organizationId: organizationA, storeId: storeA }),
    ).resolves.toBeNull();

    await expect(
      repository.setStatus({
        userId: ownerA,
        organizationId: organizationA,
        storeId: storeA,
        endpointId: endpointStoreA,
        status: 'disabled',
      }),
    ).resolves.toBe(true);
    await expect(
      repository.setStatus({
        userId: ownerA,
        organizationId: organizationA,
        storeId: storeA,
        endpointId: endpointStoreB,
        status: 'disabled',
      }),
    ).resolves.toBe(false);
    await expect(
      repository.setStatus({
        userId: ownerA,
        organizationId: organizationA,
        storeId: storeA,
        endpointId: endpointCorrupt,
        status: 'disabled',
      }),
    ).resolves.toBe(false);
  });

  it('returns secret-free verification administration rows only for the authorized store', async () => {
    const repository = new PostgresVerificationAdministrationRepository(pool);
    const records = await repository.listRecent({
      userId: ownerA,
      organizationId: organizationA,
      storeId: storeA,
    });
    expect(records).toEqual([
      expect.objectContaining({ id: verificationA, status: 'pending', attemptCount: 2 }),
    ]);
    expect(JSON.stringify(records)).not.toContain('phone-a');
    expect(JSON.stringify(records)).not.toContain('hash-only');
    await expect(
      repository.listRecent({ userId: ownerB, organizationId: organizationA, storeId: storeA }),
    ).resolves.toBeNull();
    expect(records?.some((record) => record.id === verificationB)).toBe(false);
    expect(records?.some((record) => record.id === verificationCorrupt)).toBe(false);
  });
});
''')

Path("apps/api/src/postgres-isolation.test.ts").write_text(r'''import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { hashOpaqueSecret } from '@ozzyl/authentication';
import type { StoredAssessment } from './index.js';
import {
  PostgresApiKeyResolver,
  PostgresAssessmentFeatureProvider,
  PostgresAssessmentRepository,
  PostgresOutcomeRepository,
  TenantScopeMismatchError,
} from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL authoritative tenant scope', () => {
  const pool = new Pool({ connectionString: databaseUrl });
  const suffix = randomUUID();
  const organizationA = `org_scope_a_${suffix}`;
  const organizationB = `org_scope_b_${suffix}`;
  const storeA = `sto_scope_a_${suffix}`;
  const storeB = `sto_scope_b_${suffix}`;
  const rawKey = `ozg_test_scope_${suffix}`;
  const pepper = 'scope-pepper-fixture';

  beforeAll(async () => {
    await pool.query(
      `
        insert into organizations (id, name, slug, plan_id)
        values ($1, 'Scope A', $2, 'plan_free'), ($3, 'Scope B', $4, 'plan_free')
      `,
      [organizationA, `scope-a-${suffix}`, organizationB, `scope-b-${suffix}`],
    );
    await pool.query(
      `
        insert into stores (id, organization_id, name, platform)
        values ($1, $2, 'Scope Store A', 'custom'), ($3, $4, 'Scope Store B', 'custom')
      `,
      [storeA, organizationA, storeB, organizationB],
    );
    await pool.query(
      `
        insert into api_keys (
          id, organization_id, store_id, environment, key_hash, key_prefix, name, scopes
        ) values ($1, $2, $3, 'test', $4, 'ozg_test_scope', 'Mismatched scope', $5::jsonb)
      `,
      [
        `key_scope_${suffix}`,
        organizationA,
        storeB,
        hashOpaqueSecret(rawKey, pepper),
        JSON.stringify(['risk:read', 'risk:write']),
      ],
    );
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationA, organizationB],
    ]);
    await pool.end();
  });

  it('rejects an API key whose organization and store rows do not belong together', async () => {
    const resolver = new PostgresApiKeyResolver(pool, pepper);
    await expect(resolver.resolve(rawKey)).resolves.toBeNull();
  });

  it('fails feature assembly closed before reading another tenant store', async () => {
    const provider = new PostgresAssessmentFeatureProvider(pool);
    await expect(
      provider.load({
        identity: {
          apiKeyId: `key_scope_${suffix}`,
          organizationId: organizationA,
          storeId: storeB,
          environment: 'test',
          plan: 'free',
          scopes: new Set(['risk:write']),
        },
        phone: '+8801712345678',
        phoneHash: `phone_scope_${suffix}`,
        request: {
          phone: '01712345678',
          order_total: 1200,
          payment_method: 'cod',
        },
      }),
    ).rejects.toBeInstanceOf(TenantScopeMismatchError);
  });

  it('rejects mismatched assessment and outcome writes', async () => {
    const assessments = new PostgresAssessmentRepository(pool);
    const outcomes = new PostgresOutcomeRepository(pool);
    const assessment = assessmentRecord();
    await expect(assessments.save(assessment)).rejects.toBeInstanceOf(TenantScopeMismatchError);
    await expect(
      outcomes.save({
        organizationId: organizationA,
        storeId: storeB,
        idempotencyKey: `outcome_scope_${suffix}`,
        outcome: {
          external_order_id: `ORDER-SCOPE-${suffix}`,
          outcome: 'delivered',
          occurred_at: '2026-07-17T08:00:00.000Z',
        },
      }),
    ).rejects.toBeInstanceOf(TenantScopeMismatchError);
    const stored = await pool.query<{ count: number }>(
      `select count(*)::int as count from risk_assessments where id = $1`,
      [assessment.response.assessment_id],
    );
    expect(stored.rows[0]?.count).toBe(0);
  });

  function assessmentRecord(): StoredAssessment {
    return {
      identity: {
        apiKeyId: `key_scope_${suffix}`,
        organizationId: organizationA,
        storeId: storeB,
      },
      idempotencyKey: `assessment_scope_${suffix}`,
      phoneHash: `phone_scope_${suffix}`,
      request: {
        external_order_id: `ORDER-SCOPE-${suffix}`,
        phone: '01712345678',
        order_total: 1200,
        payment_method: 'cod',
      },
      response: {
        success: true,
        assessment_id: `ras_scope_${suffix}`,
        risk_score: 50,
        risk_level: 'moderate',
        decision: 'review',
        confidence: 0.5,
        signals: [],
        courier_summary: {
          freshness: 'missing',
          providers: 0,
          total: 0,
          delivered: 0,
          returned: 0,
          cancelled_before_shipping: 0,
        },
        recommended_actions: ['manual_review'],
        meta: {
          engine_version: 'test-engine',
          policy_version: 'test-policy',
          degraded: true,
          response_ms: 1,
        },
      },
    };
  }
});
''')

Path("apps/api/src/postgres-dashboard-isolation.test.ts").write_text(r'''import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import {
  PostgresMerchantDashboardRepository,
  PostgresPlatformAdminRepository,
} from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL dashboard and platform administration isolation', () => {
  const pool = new Pool({ connectionString: databaseUrl });
  const suffix = randomUUID();
  const merchantA = `usr_dashboard_a_${suffix}`;
  const merchantB = `usr_dashboard_b_${suffix}`;
  const platformAdmin = `usr_platform_admin_${suffix}`;
  const organizationA = `org_dashboard_a_${suffix}`;
  const organizationB = `org_dashboard_b_${suffix}`;
  const storeA = `sto_dashboard_a_${suffix}`;
  const storeB = `sto_dashboard_b_${suffix}`;
  const assessmentA = `ras_dashboard_a_${suffix}`;
  const assessmentB = `ras_dashboard_b_${suffix}`;

  beforeAll(async () => {
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `
          insert into users (id, email, platform_role, status) values
            ($1, $2, 'merchant', 'active'),
            ($3, $4, 'merchant', 'active'),
            ($5, $6, 'platform_admin', 'active')
        `,
        [
          merchantA,
          `${merchantA}@example.com`,
          merchantB,
          `${merchantB}@example.com`,
          platformAdmin,
          `${platformAdmin}@example.com`,
        ],
      );
      await client.query(
        `
          insert into organizations (id, name, slug, plan_id)
          values ($1, 'Dashboard A', $2, 'plan_free'), ($3, 'Dashboard B', $4, 'plan_free')
        `,
        [organizationA, `dashboard-a-${suffix}`, organizationB, `dashboard-b-${suffix}`],
      );
      await client.query(
        `
          insert into organization_members (organization_id, user_id, role)
          values ($1, $2, 'owner'), ($3, $4, 'owner')
        `,
        [organizationA, merchantA, organizationB, merchantB],
      );
      await client.query(
        `
          insert into stores (id, organization_id, name, platform)
          values ($1, $2, 'Dashboard Store A', 'custom'), ($3, $4, 'Dashboard Store B', 'custom')
        `,
        [storeA, organizationA, storeB, organizationB],
      );
      const snapshotA = JSON.stringify(snapshot(`ORDER-A-${suffix}`));
      const snapshotB = JSON.stringify(snapshot(`ORDER-B-${suffix}`));
      await client.query(
        `
          insert into risk_assessments (
            id, organization_id, store_id, external_order_id, idempotency_key, phone_hash,
            order_snapshot, score, confidence, risk_level, decision, engine_version,
            policy_version, degraded, created_at
          ) values
            ($1, $3, $4, $5, $6, 'phone-a', $7::jsonb, 65, 0.7, 'high', 'review', 'test', 'test', false, $11),
            ($2, $8, $9, $10, $12, 'phone-b', $13::jsonb, 80, 0.8, 'high', 'block', 'test', 'test', true, $11)
        `,
        [
          assessmentA,
          assessmentB,
          organizationA,
          storeA,
          `ORDER-A-${suffix}`,
          `idem-a-${suffix}`,
          snapshotA,
          organizationB,
          storeB,
          `ORDER-B-${suffix}`,
          new Date('2026-07-16T12:00:00.000Z'),
          `idem-b-${suffix}`,
          snapshotB,
        ],
      );
      await client.query(
        `
          insert into verification_sessions (
            id, organization_id, store_id, phone_hash, purpose, channel, status,
            expires_at, verified_at, created_at
          ) values
            ($1, $2, $3, 'phone-a', 'cod_order_confirmation', 'otp', 'verified', $8, $7, $7),
            ($4, $5, $6, 'phone-b', 'cod_order_confirmation', 'otp', 'verified', $8, $7, $7)
        `,
        [
          `ver_dashboard_a_${suffix}`,
          organizationA,
          storeA,
          `ver_dashboard_b_${suffix}`,
          organizationB,
          storeB,
          new Date('2026-07-16T13:00:00.000Z'),
          new Date('2026-07-20T13:00:00.000Z'),
        ],
      );
      await client.query(
        `
          insert into usage_events (id, organization_id, event_type, units, request_id, period)
          values
            ($1, $2, 'risk_assessment', 3, $3, '2026-07'),
            ($4, $5, 'risk_assessment', 9, $6, '2026-07')
        `,
        [
          `use_dashboard_a_${suffix}`,
          organizationA,
          `request-a-${suffix}`,
          `use_dashboard_b_${suffix}`,
          organizationB,
          `request-b-${suffix}`,
        ],
      );
      await client.query(
        `
          insert into courier_accounts (id, store_id, provider, status)
          values ($1, $2, 'steadfast', 'connected'), ($3, $4, 'pathao', 'failed')
        `,
        [`ca_dashboard_a_${suffix}`, storeA, `ca_dashboard_b_${suffix}`, storeB],
      );
      await client.query('commit');
    } catch (error) {
      await client.query('rollback');
      throw error;
    } finally {
      client.release();
    }
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationA, organizationB],
    ]);
    await pool.query('delete from users where id = any($1::text[])', [
      [merchantA, merchantB, platformAdmin],
    ]);
    await pool.end();
  });

  it('aggregates only the authorized organization and store', async () => {
    const repository = new PostgresMerchantDashboardRepository(pool);
    const overview = await repository.loadOverview({
      userId: merchantA,
      organizationId: organizationA,
      storeId: storeA,
      now: new Date('2026-07-17T12:00:00.000Z'),
    });
    expect(overview).toMatchObject({
      scope: { organization_id: organizationA, store_id: storeA },
      summary: {
        assessments_30d: 1,
        degraded_30d: 0,
        pending_reviews: 1,
        verified_30d: 1,
        usage_month: 3,
      },
      decisions: { allow: 0, verify: 0, review: 1, hold: 0, block: 0 },
      reviews: [{ assessment_id: assessmentA, external_order_id: `ORDER-A-${suffix}` }],
      couriers: [{ provider: 'steadfast', status: 'connected' }],
    });
    expect(JSON.stringify(overview)).not.toContain(assessmentB);
    await expect(
      repository.loadOverview({
        userId: merchantA,
        organizationId: organizationA,
        storeId: storeB,
        now: new Date('2026-07-17T12:00:00.000Z'),
      }),
    ).resolves.toBeNull();
  });

  it('rechecks active platform-admin authorization on every repository call', async () => {
    const repository = new PostgresPlatformAdminRepository(pool);
    await expect(repository.loadOverview({ userId: platformAdmin, now: new Date() })).resolves.not.toBeNull();
    await pool.query(`update users set status = 'disabled' where id = $1`, [platformAdmin]);
    await expect(repository.loadOverview({ userId: platformAdmin, now: new Date() })).resolves.toBeNull();
    await pool.query(`update users set status = 'active', platform_role = 'merchant' where id = $1`, [
      platformAdmin,
    ]);
    await expect(repository.loadOverview({ userId: platformAdmin, now: new Date() })).resolves.toBeNull();
  });

  function snapshot(externalOrderId: string) {
    return {
      request: {
        external_order_id: externalOrderId,
        phone: '01712345678',
        order_total: 1500,
        payment_method: 'cod',
      },
      response: {
        success: true,
        assessment_id: externalOrderId.startsWith('ORDER-A') ? assessmentA : assessmentB,
        risk_score: 65,
        risk_level: 'high',
        decision: 'review',
        confidence: 0.7,
        signals: [],
        courier_summary: {
          freshness: 'missing',
          providers: 0,
          total: 0,
          delivered: 0,
          returned: 0,
          cancelled_before_shipping: 0,
        },
        recommended_actions: ['manual_review'],
        meta: {
          engine_version: 'test',
          policy_version: 'test',
          degraded: false,
          response_ms: 1,
        },
      },
    };
  }
});
''')

# Add a reviewed, explicit current-schema runtime grant policy.
replace_once(
    "packages/database/src/index.ts",
    "export * from './schema.js';",
    "export * from './schema.js';\nexport * from './runtime-role.js';",
)

Path("packages/database/src/runtime-role.ts").write_text(r'''import type { Pool, PoolClient } from 'pg';

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

    const ownership = await client.query<{ owns_schema: boolean; owns_relation: boolean }>(
      `
        select
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
    if (ownership.rows[0]?.owns_schema || ownership.rows[0]?.owns_relation) {
      throw new RuntimeRoleConfigurationError(
        'Runtime role must not own the public schema or any public relation',
      );
    }

    await verifyCurrentTablePolicy(client);
    const quotedRole = quoteIdentifier(roleName);
    await client.query(`revoke all privileges on schema public from ${quotedRole}`);
    await client.query(`revoke all privileges on all tables in schema public from ${quotedRole}`);
    await client.query(`revoke all privileges on all sequences in schema public from ${quotedRole}`);
    await client.query(`grant usage on schema public to ${quotedRole}`);
    await grantTables(client, quotedRole, 'select', runtimeRolePolicy.select);
    await grantTables(client, quotedRole, 'insert', runtimeRolePolicy.insert);
    await grantTables(client, quotedRole, 'update', runtimeRolePolicy.update);
    await client.query(`grant usage, select, update on all sequences in schema public to ${quotedRole}`);
    await client.query(
      `revoke all privileges on table public.${quoteIdentifier(MIGRATION_HISTORY_TABLE)} from ${quotedRole}`,
    );
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
''')

Path("packages/database/src/apply-runtime-grants.ts").write_text(r'''import { Pool } from 'pg';
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
''')

Path("packages/database/src/runtime-role.test.ts").write_text(r'''import { describe, expect, it } from 'vitest';
import {
  MIGRATION_HISTORY_TABLE,
  runtimeRolePolicy,
  validateRuntimeRoleName,
} from './runtime-role.js';

describe('runtime role policy', () => {
  it('accepts only simple PostgreSQL role identifiers', () => {
    expect(validateRuntimeRoleName('ozzyl_guard_runtime')).toBe('ozzyl_guard_runtime');
    for (const invalid of ['', 'runtime-role', 'runtime role', '1runtime', 'x'.repeat(64), 'x";drop role']) {
      expect(() => validateRuntimeRoleName(invalid)).toThrow();
    }
  });

  it('keeps migration history and delete privileges outside the runtime policy', () => {
    expect(runtimeRolePolicy.select).not.toContain(MIGRATION_HISTORY_TABLE);
    expect(runtimeRolePolicy.insert).not.toContain(MIGRATION_HISTORY_TABLE);
    expect(runtimeRolePolicy.update).not.toContain(MIGRATION_HISTORY_TABLE);
    expect(runtimeRolePolicy).not.toHaveProperty('delete');
  });

  it('requires every writable table to remain explicitly readable', () => {
    const readable = new Set<string>(runtimeRolePolicy.select);
    expect(runtimeRolePolicy.insert.every((table) => readable.has(table))).toBe(true);
    expect(runtimeRolePolicy.update.every((table) => readable.has(table))).toBe(true);
  });
});
''')

Path("packages/database/src/runtime-role.postgres.test.ts").write_text(r'''import { randomUUID } from 'node:crypto';
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
          runtimePool.query(
            `insert into users (id, email) values ($1, $2)`,
            [`usr_runtime_${randomUUID()}`, `${randomUUID()}@example.com`],
          ),
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
''')

# Wire the runtime-grant command into package builds, root scripts, environment guidance, and CI.
replace_once(
    "packages/database/package.json",
    '"build": "tsup src/index.ts src/migrate.ts src/check-migrations.ts src/check-database-integrity.ts src/restore-rehearsal.ts --format esm --dts --sourcemap --clean",',
    '"build": "tsup src/index.ts src/migrate.ts src/check-migrations.ts src/check-database-integrity.ts src/restore-rehearsal.ts src/apply-runtime-grants.ts --format esm --dts --sourcemap --clean",',
)
replace_once(
    "package.json",
    '"db:restore-rehearsal": "tsx packages/database/src/restore-rehearsal.ts",',
    '"db:restore-rehearsal": "tsx packages/database/src/restore-rehearsal.ts",\n    "db:runtime-grants": "tsx packages/database/src/apply-runtime-grants.ts",',
)
replace_once(
    "config/environment.example",
    "DATABASE_POOL_SIZE=20",
    "DATABASE_POOL_SIZE=20\n# Existing non-privileged LOGIN role; create it outside the app, then run npm run db:runtime-grants after migrations.\nDATABASE_RUNTIME_ROLE=ozzyl_guard_runtime",
)
replace_once(
    ".github/workflows/ci.yml",
    """      - name: Rehearse clean backup and restore
        run: npm run db:restore-rehearsal
      - run: npm run check:architecture""",
    """      - name: Rehearse clean backup and restore
        run: npm run db:restore-rehearsal
      - name: Verify runtime database role grants
        env:
          PGHOST: localhost
          PGPORT: '5432'
          PGUSER: ozzyl_guard
          PGPASSWORD: ozzyl_guard
          PGDATABASE: ozzyl_guard_test
          DATABASE_RUNTIME_ROLE: ozzyl_guard_runtime_ci
        run: |
          cleanup() {
            psql --set ON_ERROR_STOP=1 --command 'drop owned by ozzyl_guard_runtime_ci' >/dev/null 2>&1 || true
            psql --set ON_ERROR_STOP=1 --command 'drop role if exists ozzyl_guard_runtime_ci' >/dev/null 2>&1 || true
          }
          trap cleanup EXIT
          psql --set ON_ERROR_STOP=1 --command 'create role ozzyl_guard_runtime_ci login nosuperuser nocreatedb nocreaterole noinherit noreplication nobypassrls'
          npm run db:runtime-grants
      - run: npm run check:architecture""",
)

print("runtime role isolation implementation staged")
