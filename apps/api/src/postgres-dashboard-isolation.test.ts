import { randomUUID } from 'node:crypto';
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
          insert into users (id, email, managed_auth_id, platform_role, status) values
            ($1, $2, $3, 'merchant', 'active'),
            ($4, $5, $6, 'merchant', 'active'),
            ($7, $8, $9, 'platform_admin', 'active')
        `,
        [
          merchantA,
          `${merchantA}@example.com`,
          `managed-${merchantA}`,
          merchantB,
          `${merchantB}@example.com`,
          `managed-${merchantB}`,
          platformAdmin,
          `${platformAdmin}@example.com`,
          `managed-${platformAdmin}`,
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
    await expect(
      repository.loadOverview({ userId: platformAdmin, now: new Date() }),
    ).resolves.not.toBeNull();
    await pool.query(`update users set status = 'disabled' where id = $1`, [platformAdmin]);
    await expect(
      repository.loadOverview({ userId: platformAdmin, now: new Date() }),
    ).resolves.toBeNull();
    await pool.query(
      `update users set status = 'active', platform_role = 'merchant' where id = $1`,
      [platformAdmin],
    );
    await expect(
      repository.loadOverview({ userId: platformAdmin, now: new Date() }),
    ).resolves.toBeNull();
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
