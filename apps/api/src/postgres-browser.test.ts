import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { hashPassword } from '@ozzyl/authentication';
import {
  PostgresBrowserAuthService,
  PostgresMerchantDashboardRepository,
  PostgresPlatformAdminRepository,
} from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);
const credentialFixture = 'browser-integration-fixture';
const sessionPepperFixture = 'x'.repeat(32);

integration('PostgreSQL browser access', () => {
  const pool = new Pool({ connectionString: databaseUrl });
  const suffix = randomUUID();
  const userId = `usr_${suffix}`;
  const organizationId = `org_${suffix}`;
  const storeId = `sto_${suffix}`;
  const otherOrganizationId = `org_other_${suffix}`;
  const otherStoreId = `sto_other_${suffix}`;

  beforeAll(async () => {
    const passwordHash = await hashPassword(credentialFixture);
    const client = await pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `insert into users (id, email, password_hash, email_verified_at) values ($1, $2, $3, now())`,
        [userId, `${suffix}@example.com`, passwordHash],
      );
      await client.query(
        `insert into organizations (id, name, slug, plan_id) values ($1, 'Integration Merchant', $2, 'plan_free')`,
        [organizationId, `integration-${suffix}`],
      );
      await client.query(
        `insert into organization_members (organization_id, user_id, role) values ($1, $2, 'owner')`,
        [organizationId, userId],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom')`,
        [storeId, organizationId],
      );
      await client.query(
        `insert into organizations (id, name, slug, plan_id) values ($1, 'Other Merchant', $2, 'plan_free')`,
        [otherOrganizationId, `integration-other-${suffix}`],
      );
      await client.query(
        `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Other', 'custom')`,
        [otherStoreId, otherOrganizationId],
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
      [organizationId, otherOrganizationId],
    ]);
    await pool.query('delete from users where id = $1', [userId]);
    await pool.end();
  });

  it('stores only a session hash and resolves active organization/store membership', async () => {
    const auth = new PostgresBrowserAuthService(pool, sessionPepperFixture);
    const login = await auth.login(`${suffix}@example.com`, credentialFixture);
    expect(login).not.toBeNull();
    if (!login) return;

    const stored = await pool.query<{ token_hash: string }>(
      'select token_hash from user_sessions where id = $1',
      [login.identity.sessionId],
    );
    expect(stored.rows[0]?.token_hash).toBeTruthy();
    expect(stored.rows[0]?.token_hash).not.toBe(login.rawToken);

    const resolved = await auth.resolve(login.rawToken);
    expect(resolved).toMatchObject({
      userId,
      platformRole: 'merchant',
      organizations: [{ id: organizationId, stores: [{ id: storeId }] }],
    });
  });

  it('rechecks tenant membership inside the dashboard repository', async () => {
    const dashboard = new PostgresMerchantDashboardRepository(pool);
    const allowed = await dashboard.loadOverview({
      userId,
      organizationId,
      storeId,
      now: new Date('2026-07-16T15:00:00.000Z'),
    });
    expect(allowed).toMatchObject({
      scope: { organization_id: organizationId, store_id: storeId },
      summary: { assessments_30d: 0 },
    });

    const denied = await dashboard.loadOverview({
      userId,
      organizationId: otherOrganizationId,
      storeId: otherStoreId,
      now: new Date('2026-07-16T15:00:00.000Z'),
    });
    expect(denied).toBeNull();
  });

  it('requires explicit platform-admin authorization and preserves the pilot block guard', async () => {
    const admin = new PostgresPlatformAdminRepository(pool);
    await expect(admin.loadOverview({ userId, now: new Date() })).resolves.toBeNull();

    await pool.query(`update users set platform_role = 'platform_admin' where id = $1`, [userId]);
    const allowed = await admin.loadOverview({ userId, now: new Date() });
    expect(allowed).toMatchObject({ automatic_blocking: { broadly_enabled: false } });
  });
});
