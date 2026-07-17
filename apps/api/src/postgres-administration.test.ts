import { randomUUID } from 'node:crypto';
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
        `insert into users (id, email, managed_auth_id, status)
         values ($1, $2, $3, 'active'), ($4, $5, $6, 'active')`,
        [
          ownerA,
          `${ownerA}@example.com`,
          `managed-${ownerA}`,
          ownerB,
          `${ownerB}@example.com`,
          `managed-${ownerB}`,
        ],
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
        [
          verificationA,
          verificationB,
          verificationCorrupt,
          organizationA,
          storeA,
          organizationB,
          storeB,
        ],
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
