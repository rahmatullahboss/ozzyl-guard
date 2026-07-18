import { describe, expect, it, vi } from 'vitest';
import type { MerchantDashboardOverview, PlatformAdminOverview } from '@ozzyl/shared-types';
import { createBrowserApi, type BrowserAuthService, type UserSessionIdentity } from './browser.js';
import { MemoryRateLimiter } from './index.js';

const now = new Date('2026-07-16T15:00:00.000Z');
const csrfFixture = 'x'.repeat(32);
const credentialFixture = 'fixture-value-for-browser-login';
const sessionFixture = 'fixture-value-for-browser-session';
const shadowPilot = {
  mode: 'off' as const,
  rollout_version: 'off',
  sample_rate_bps: 0,
  sampled_orders: 0,
  successful_comparisons: 0,
  assessment_failures: 0,
  persistence_failures: 0,
  decision_disagreement_rate: null,
  score_delta: {
    minimum: null,
    maximum: null,
    average: null,
    lower: 0,
    equal: 0,
    higher: 0,
  },
};

const merchantIdentity: UserSessionIdentity = {
  sessionId: 'ses_1',
  userId: 'usr_1',
  email: 'owner@example.com',
  platformRole: 'merchant',
  expiresAt: '2026-07-23T15:00:00.000Z',
  organizations: [
    {
      id: 'org_1',
      name: 'Merchant One',
      role: 'owner',
      stores: [
        {
          id: 'store_1',
          organization_id: 'org_1',
          name: 'Primary Store',
          platform: 'woocommerce',
          status: 'active',
        },
      ],
    },
  ],
};

const merchantOverview: MerchantDashboardOverview = {
  success: true,
  generated_at: now.toISOString(),
  scope: {
    organization_id: 'org_1',
    organization_name: 'Merchant One',
    store_id: 'store_1',
    store_name: 'Primary Store',
    platform: 'woocommerce',
    role: 'owner',
  },
  summary: {
    assessments_30d: 12,
    degraded_30d: 2,
    pending_reviews: 3,
    verified_30d: 4,
    usage_month: 12,
    usage_limit: 100,
  },
  decisions: { allow: 9, verify: 1, review: 1, hold: 1, block: 0 },
  reviews: [
    {
      assessment_id: 'ras_1',
      external_order_id: 'WC-1',
      phone_masked: '017****5678',
      risk_score: 61,
      decision: 'hold',
      confidence: 0.8,
      signals: [{ code: 'low_delivery_rate', score: 30, description: 'Low delivery rate' }],
      created_at: now.toISOString(),
    },
  ],
  couriers: [
    {
      provider: 'steadfast',
      status: 'connected',
      last_success_at: now.toISOString(),
      last_failure_at: null,
      failure_code: null,
    },
  ],
  shadow_pilot: shadowPilot,
};

const adminOverview: PlatformAdminOverview = {
  success: true,
  generated_at: now.toISOString(),
  summary: {
    active_organizations: 2,
    active_stores: 3,
    assessments_today: 20,
    degraded_percentage: 5,
    worker_backlog: 1,
    failed_webhooks: 0,
  },
  incidents: [],
  providers: [{ name: 'steadfast', state: 'operational', metric: '2 connected; 0 need attention' }],
  automatic_blocking: {
    broadly_enabled: false,
    reason: 'Pilot calibration is required.',
  },
  shadow_pilot: { ...shadowPilot, opted_in_stores: 0 },
};

function createTestApp(identity: UserSessionIdentity = merchantIdentity) {
  let revoked = false;
  const auth: BrowserAuthService = {
    async login(email, credential) {
      if (email !== identity.email || credential !== credentialFixture) return null;
      return { rawToken: sessionFixture, identity };
    },
    async resolve(rawToken) {
      return rawToken === sessionFixture && !revoked ? identity : null;
    },
    async revoke() {
      revoked = true;
    },
  };
  const loadOverview = vi.fn(async () => merchantOverview);
  const loadAdminOverview = vi.fn(async () => adminOverview);
  const setForStore = vi.fn(
    async (input: {
      organizationId: string;
      storeId: string;
      mode: 'off' | 'shadow';
      rolloutVersion: string;
      sampleRateBps: number;
    }) => ({
      organizationId: input.organizationId,
      storeId: input.storeId,
      integration: 'multi-store-saas' as const,
      mode: input.mode,
      rolloutVersion: input.rolloutVersion,
      sampleRateBps: input.sampleRateBps,
      samplingKey: 'scoped-sampling-key',
    }),
  );
  const audit = vi.fn(async () => undefined);
  return {
    app: createBrowserApi({
      auth,
      dashboard: { loadOverview },
      admin: { loadOverview: loadAdminOverview },
      nativeShadowRollouts: { setForStore },
      audit: { record: audit },
      rateLimiter: new MemoryRateLimiter(),
      csrfSecret: csrfFixture,
      now: () => now,
    }),
    loadOverview,
    loadAdminOverview,
    setForStore,
    audit,
  };
}

async function login(app: ReturnType<typeof createTestApp>['app']) {
  const response = await app.request('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: merchantIdentity.email, password: credentialFixture }),
  });
  const body = (await response.json()) as { csrf_token: string };
  const cookie = response.headers.get('set-cookie')?.split(';')[0];
  if (!cookie) throw new Error('Session cookie was not returned');
  return { response, body, cookie };
}

describe('browser authentication and live data API', () => {
  it('creates an opaque HttpOnly session and resolves it without exposing the raw token', async () => {
    const { app } = createTestApp();
    const loggedIn = await login(app);
    expect(loggedIn.response.status).toBe(200);
    expect(loggedIn.response.headers.get('set-cookie')).toContain('HttpOnly');
    expect(JSON.stringify(loggedIn.body)).not.toContain(sessionFixture);

    const session = await app.request('/auth/session', {
      headers: { Cookie: loggedIn.cookie },
    });
    expect(session.status).toBe(200);
    await expect(session.json()).resolves.toMatchObject({
      success: true,
      user: { email: merchantIdentity.email, platform_role: 'merchant' },
      organizations: [{ id: 'org_1', stores: [{ id: 'store_1' }] }],
    });
  });

  it('requires a user session for dashboard data', async () => {
    const { app } = createTestApp();
    const response = await app.request(
      '/dashboard/v1/overview?organization_id=org_1&store_id=store_1',
    );
    expect(response.status).toBe(401);
  });

  it('returns tenant-scoped dashboard data and hides unauthorized stores', async () => {
    const { app, loadOverview } = createTestApp();
    const loggedIn = await login(app);
    const allowed = await app.request(
      '/dashboard/v1/overview?organization_id=org_1&store_id=store_1',
      { headers: { Cookie: loggedIn.cookie } },
    );
    expect(allowed.status).toBe(200);
    await expect(allowed.json()).resolves.toMatchObject({
      scope: { organization_id: 'org_1', store_id: 'store_1' },
      summary: { assessments_30d: 12 },
    });
    expect(loadOverview).toHaveBeenCalledWith({
      userId: 'usr_1',
      organizationId: 'org_1',
      storeId: 'store_1',
      now,
    });

    const denied = await app.request(
      '/dashboard/v1/overview?organization_id=org_2&store_id=store_2',
      { headers: { Cookie: loggedIn.cookie } },
    );
    expect(denied.status).toBe(404);
    expect(loadOverview).toHaveBeenCalledTimes(1);
  });

  it('requires CSRF and exact owner scope for native shadow opt-in', async () => {
    const { app, setForStore, audit } = createTestApp();
    const loggedIn = await login(app);
    const body = JSON.stringify({
      organization_id: 'org_1',
      store_id: 'store_1',
      mode: 'shadow',
      rollout_version: 'pilot-v1',
      sample_rate_bps: 1000,
    });
    const proofHeader = ['X', 'CSRF', 'Token'].join('-');

    const missingCsrf = await app.request('/dashboard/v1/native-shadow-rollout', {
      method: 'PUT',
      headers: { Cookie: loggedIn.cookie, 'Content-Type': 'application/json' },
      body,
    });
    expect(missingCsrf.status).toBe(403);
    expect(setForStore).not.toHaveBeenCalled();

    const allowed = await app.request('/dashboard/v1/native-shadow-rollout', {
      method: 'PUT',
      headers: {
        Cookie: loggedIn.cookie,
        'Content-Type': 'application/json',
        [proofHeader]: loggedIn.body.csrf_token,
      },
      body,
    });
    expect(allowed.status).toBe(200);
    await expect(allowed.json()).resolves.toMatchObject({
      organization_id: 'org_1',
      store_id: 'store_1',
      mode: 'shadow',
      rollout_version: 'pilot-v1',
      sample_rate_bps: 1000,
    });
    expect(setForStore).toHaveBeenCalledWith({
      userId: 'usr_1',
      organizationId: 'org_1',
      storeId: 'store_1',
      mode: 'shadow',
      rolloutVersion: 'pilot-v1',
      sampleRateBps: 1000,
    });
    expect(audit).toHaveBeenCalledWith(
      expect.objectContaining({
        organizationId: 'org_1',
        action: 'native_shadow.rollout_updated',
        metadata: expect.objectContaining({ mode: 'shadow', rolloutVersion: 'pilot-v1' }),
      }),
    );

    const wrongScope = await app.request('/dashboard/v1/native-shadow-rollout', {
      method: 'PUT',
      headers: {
        Cookie: loggedIn.cookie,
        'Content-Type': 'application/json',
        [proofHeader]: loggedIn.body.csrf_token,
      },
      body: JSON.stringify({
        organization_id: 'org_2',
        store_id: 'store_2',
        mode: 'shadow',
        rollout_version: 'pilot-v1',
        sample_rate_bps: 1000,
      }),
    });
    expect(wrongScope.status).toBe(404);
    expect(setForStore).toHaveBeenCalledTimes(1);
  });

  it('rejects native shadow rollout changes from a non-admin merchant member', async () => {
    const memberIdentity: UserSessionIdentity = {
      ...merchantIdentity,
      organizations: merchantIdentity.organizations.map((organization) => ({
        ...organization,
        role: 'member',
      })),
    };
    const { app, setForStore } = createTestApp(memberIdentity);
    const loggedIn = await login(app);
    const proofHeader = ['X', 'CSRF', 'Token'].join('-');
    const response = await app.request('/dashboard/v1/native-shadow-rollout', {
      method: 'PUT',
      headers: {
        Cookie: loggedIn.cookie,
        'Content-Type': 'application/json',
        [proofHeader]: loggedIn.body.csrf_token,
      },
      body: JSON.stringify({
        organization_id: 'org_1',
        store_id: 'store_1',
        mode: 'shadow',
        rollout_version: 'pilot-v1',
        sample_rate_bps: 1000,
      }),
    });
    expect(response.status).toBe(403);
    expect(setForStore).not.toHaveBeenCalled();
  });
  it('requires an explicit platform-admin role and keeps broad blocking disabled', async () => {
    const merchant = createTestApp();
    const merchantLogin = await login(merchant.app);
    const denied = await merchant.app.request('/admin/v1/overview', {
      headers: { Cookie: merchantLogin.cookie },
    });
    expect(denied.status).toBe(403);

    const admin = createTestApp({ ...merchantIdentity, platformRole: 'platform_admin' });
    const adminLogin = await login(admin.app);
    const allowed = await admin.app.request('/admin/v1/overview', {
      headers: { Cookie: adminLogin.cookie },
    });
    expect(allowed.status).toBe(200);
    await expect(allowed.json()).resolves.toMatchObject({
      automatic_blocking: { broadly_enabled: false },
    });
  });

  it('rejects logout requests without CSRF proof', async () => {
    const { app } = createTestApp();
    const loggedIn = await login(app);
    const response = await app.request('/auth/logout', {
      method: 'POST',
      headers: { Cookie: loggedIn.cookie },
    });
    expect(response.status).toBe(403);
  });
});
