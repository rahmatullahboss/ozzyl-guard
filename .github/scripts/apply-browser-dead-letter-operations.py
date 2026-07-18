from __future__ import annotations

import json
from pathlib import Path


def read(path: str) -> str:
    return Path(path).read_text()


def write(path: str, text: str) -> None:
    Path(path).write_text(text)


def replace_once(path: str, old: str, new: str) -> None:
    text = read(path)
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"expected one match in {path}, found {count}: {old[:120]!r}")
    write(path, text.replace(old, new, 1))


# Shared browser contracts.
replace_once(
    "packages/shared-types/src/index.ts",
    "export type NativeShadowPilotReport = z.infer<typeof nativeShadowPilotReportSchema>;\n\nexport const apiErrorSchema",
    """export type NativeShadowPilotReport = z.infer<typeof nativeShadowPilotReportSchema>;

export const durableWorkTypeSchema = z.enum([
  'courier_job',
  'webhook_delivery',
  'verification_job',
]);
export type DurableWorkType = z.infer<typeof durableWorkTypeSchema>;

export const durableDeadLetterSchema = z.object({
  work_type: durableWorkTypeSchema,
  work_id: z.string().min(1).max(200),
  organization_id: z.string().min(1).max(200),
  store_id: z.string().min(1).max(200),
  status: z.literal('failed'),
  attempts: z.number().int().nonnegative(),
  error_code: z.string().min(1).max(200).nullable(),
  failed_at: z.string().datetime(),
  replayable: z.boolean(),
  replay_blocked_reason: z.string().min(1).max(200).nullable(),
});
export type DurableDeadLetter = z.infer<typeof durableDeadLetterSchema>;

export const durableDeadLetterListResponseSchema = z.object({
  success: z.literal(true),
  organization_id: z.string().min(1).max(200),
  store_id: z.string().min(1).max(200),
  dead_letters: z.array(durableDeadLetterSchema).max(100),
});
export type DurableDeadLetterListResponse = z.infer<
  typeof durableDeadLetterListResponseSchema
>;

export const durableWorkReplayRequestSchema = z.object({
  organization_id: z.string().min(1).max(200),
  store_id: z.string().min(1).max(200),
  work_type: durableWorkTypeSchema,
  work_id: z.string().min(1).max(200),
  idempotency_key: z.string().trim().min(8).max(200),
});
export type DurableWorkReplayRequest = z.infer<typeof durableWorkReplayRequestSchema>;

export const durableWorkReplayResponseSchema = z.object({
  success: z.literal(true),
  replay_id: z.string().min(1).max(200),
  organization_id: z.string().min(1).max(200),
  store_id: z.string().min(1).max(200),
  work_type: durableWorkTypeSchema,
  work_id: z.string().min(1).max(200),
  previous_status: z.string().min(1).max(100),
  previous_error_code: z.string().min(1).max(200).nullable(),
  previous_attempts: z.number().int().nonnegative(),
  replayed_status: z.literal('queued'),
  replayed_at: z.string().datetime(),
  replay: z.boolean(),
});
export type DurableWorkReplayResponse = z.infer<typeof durableWorkReplayResponseSchema>;

export const apiErrorSchema""",
)

# API package consumes the reusable database operations repository.
package_path = Path("apps/api/package.json")
package = json.loads(package_path.read_text())
package["dependencies"]["@ozzyl/database"] = "*"
package_path.write_text(json.dumps(package, indent=2) + "\n")

# Browser API imports and schemas.
replace_once(
    "apps/api/src/browser.ts",
    "import { z } from 'zod';\nimport {\n",
    """import { z } from 'zod';
import {
  DurableWorkOperationError,
  type DurableDeadLetterRecord,
  type DurableWorkReplayResult,
  type DurableWorkType,
} from '@ozzyl/database';
import {
""",
)
replace_once(
    "apps/api/src/browser.ts",
    "  browserSessionResponseSchema,\n",
    """  browserSessionResponseSchema,
  durableDeadLetterListResponseSchema,
  durableWorkReplayRequestSchema,
  durableWorkReplayResponseSchema,
""",
)
replace_once(
    "apps/api/src/browser.ts",
    "const nativeShadowRolloutUpdateSchema = dashboardScopeSchema\n",
    """const deadLetterScopeSchema = dashboardScopeSchema.extend({
  limit: z.coerce.number().int().min(1).max(100).default(50),
});
const nativeShadowRolloutUpdateSchema = dashboardScopeSchema
""",
)
replace_once(
    "apps/api/src/browser.ts",
    "export interface BrowserAuditRepository {\n",
    """export interface DurableWorkOperationsRepository {
  listDeadLetters(input: {
    requestedByUserId: string;
    organizationId: string;
    storeId: string;
    limit?: number;
    at?: Date;
  }): Promise<DurableDeadLetterRecord[]>;
  replayDeadLetter(input: {
    requestedByUserId: string;
    organizationId: string;
    storeId: string;
    workType: DurableWorkType;
    workId: string;
    idempotencyKey: string;
    at?: Date;
  }): Promise<DurableWorkReplayResult>;
}

export interface BrowserAuditRepository {
""",
)
replace_once(
    "apps/api/src/browser.ts",
    "  nativeShadowRollouts?: NativeShadowRolloutAdministrationRepository;\n",
    """  nativeShadowRollouts?: NativeShadowRolloutAdministrationRepository;
  durableWorkOperations?: DurableWorkOperationsRepository;
""",
)

routes = r"""

  app.get('/dashboard/v1/dead-letters', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    if (!dependencies.durableWorkOperations) {
      return browserError(
        context.get('requestId'),
        503,
        'DURABLE_WORK_OPERATIONS_UNAVAILABLE',
        'Durable work operations are unavailable',
      );
    }
    const parsedScope = deadLetterScopeSchema.safeParse({
      organization_id: context.req.query('organization_id'),
      store_id: context.req.query('store_id'),
      limit: context.req.query('limit'),
    });
    if (!parsedScope.success) {
      return browserError(
        context.get('requestId'),
        400,
        'INVALID_SCOPE',
        'organization_id, store_id, and an optional limit between 1 and 100 are required',
      );
    }
    const allowedScope = findMerchantScope(
      authenticated.identity,
      parsedScope.data.organization_id,
      parsedScope.data.store_id,
    );
    if (!allowedScope) {
      return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
    }
    if (allowedScope.organization.role !== 'owner' && allowedScope.organization.role !== 'admin') {
      return browserError(
        context.get('requestId'),
        403,
        'STORE_ADMIN_REQUIRED',
        'Store owner or administrator access is required',
      );
    }
    try {
      const deadLetters = await dependencies.durableWorkOperations.listDeadLetters({
        requestedByUserId: authenticated.identity.userId,
        organizationId: allowedScope.organization.id,
        storeId: allowedScope.store.id,
        limit: parsedScope.data.limit,
        at: now(),
      });
      await dependencies.audit.record({
        organizationId: allowedScope.organization.id,
        actorId: authenticated.identity.userId,
        action: 'durable_work.dead_letters_viewed',
        targetType: 'store',
        targetId: allowedScope.store.id,
        metadata: {
          requestId: context.get('requestId'),
          resultCount: deadLetters.length,
        },
      });
      return context.json(
        durableDeadLetterListResponseSchema.parse({
          success: true,
          organization_id: allowedScope.organization.id,
          store_id: allowedScope.store.id,
          dead_letters: deadLetters.map(serializeDeadLetter),
        }),
      );
    } catch (error) {
      return durableWorkBrowserError(context.get('requestId'), error);
    }
  });

  app.post('/dashboard/v1/dead-letter-replays', async (context) => {
    const authenticated = await authenticateBrowserRequest(context, dependencies);
    if (!authenticated.success) return authenticated.response;
    const csrfHeader = context.req.header('X-CSRF-Token');
    if (!verifyCsrfToken(authenticated.rawToken, csrfHeader, dependencies.csrfSecret)) {
      return browserError(context.get('requestId'), 403, 'CSRF_REJECTED', 'CSRF token is invalid');
    }
    if (!dependencies.durableWorkOperations) {
      return browserError(
        context.get('requestId'),
        503,
        'DURABLE_WORK_OPERATIONS_UNAVAILABLE',
        'Durable work operations are unavailable',
      );
    }
    const parsed = await parseJson(context.req.raw, durableWorkReplayRequestSchema);
    if (!parsed.success) {
      return browserError(context.get('requestId'), 400, 'INVALID_REQUEST', parsed.message);
    }
    const allowedScope = findMerchantScope(
      authenticated.identity,
      parsed.value.organization_id,
      parsed.value.store_id,
    );
    if (!allowedScope) {
      return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
    }
    if (allowedScope.organization.role !== 'owner' && allowedScope.organization.role !== 'admin') {
      return browserError(
        context.get('requestId'),
        403,
        'STORE_ADMIN_REQUIRED',
        'Store owner or administrator access is required',
      );
    }
    try {
      const replay = await dependencies.durableWorkOperations.replayDeadLetter({
        requestedByUserId: authenticated.identity.userId,
        organizationId: allowedScope.organization.id,
        storeId: allowedScope.store.id,
        workType: parsed.value.work_type,
        workId: parsed.value.work_id,
        idempotencyKey: parsed.value.idempotency_key,
        at: now(),
      });
      return context.json(durableWorkReplayResponseSchema.parse(serializeReplay(replay)));
    } catch (error) {
      return durableWorkBrowserError(context.get('requestId'), error);
    }
  });
"""
replace_once(
    "apps/api/src/browser.ts",
    "\n  app.get('/admin/v1/overview', async (context) => {\n",
    routes + "\n  app.get('/admin/v1/overview', async (context) => {\n",
)

helpers = r"""

function serializeDeadLetter(record: DurableDeadLetterRecord) {
  return {
    work_type: record.workType,
    work_id: record.workId,
    organization_id: record.organizationId,
    store_id: record.storeId,
    status: record.status,
    attempts: record.attempts,
    error_code: record.errorCode,
    failed_at: record.failedAt,
    replayable: record.replayable,
    replay_blocked_reason: record.replayBlockedReason,
  };
}

function serializeReplay(result: DurableWorkReplayResult) {
  return {
    success: true as const,
    replay_id: result.replayId,
    organization_id: result.organizationId,
    store_id: result.storeId,
    work_type: result.workType,
    work_id: result.workId,
    previous_status: result.previousStatus,
    previous_error_code: result.previousErrorCode,
    previous_attempts: result.previousAttempts,
    replayed_status: result.replayedStatus,
    replayed_at: result.replayedAt,
    replay: result.replay,
  };
}

function durableWorkBrowserError(requestId: string, error: unknown): Response {
  if (!(error instanceof DurableWorkOperationError)) {
    return browserError(
      requestId,
      500,
      'DURABLE_WORK_OPERATION_FAILED',
      'Durable work operation failed',
    );
  }
  const status =
    error.code === 'STORE_ADMIN_REQUIRED'
      ? 403
      : error.code === 'DEAD_LETTER_NOT_FOUND'
        ? 404
        : 409;
  return browserError(requestId, status, error.code, error.message);
}
"""
replace_once(
    "apps/api/src/browser.ts",
    "\nfunction browserError(requestId: string, status: number, code: string, message: string): Response {\n",
    helpers
    + "\nfunction browserError(requestId: string, status: number, code: string, message: string): Response {\n",
)

# Production wiring.
replace_once(
    "apps/api/src/server.ts",
    "import { verifyApiKey } from '@ozzyl/authentication';\n",
    """import { verifyApiKey } from '@ozzyl/authentication';
import { PostgresDurableWorkOperations } from '@ozzyl/database';
""",
)
replace_once(
    "apps/api/src/server.ts",
    "  const nativeShadowRollouts = new PostgresNativeShadowRolloutRepository(pool);\n",
    """  const nativeShadowRollouts = new PostgresNativeShadowRolloutRepository(pool);
  const durableWorkOperations = new PostgresDurableWorkOperations(pool);
""",
)
replace_once(
    "apps/api/src/server.ts",
    "      nativeShadowRollouts,\n      audit: new PostgresBrowserAuditRepository(pool),\n",
    """      nativeShadowRollouts,
      durableWorkOperations,
      audit: new PostgresBrowserAuditRepository(pool),
""",
)

# Browser route tests.
replace_once(
    "apps/api/src/browser.test.ts",
    "import type { MerchantDashboardOverview, PlatformAdminOverview } from '@ozzyl/shared-types';\n",
    """import { DurableWorkOperationError } from '@ozzyl/database';
import type { MerchantDashboardOverview, PlatformAdminOverview } from '@ozzyl/shared-types';
""",
)
replace_once(
    "apps/api/src/browser.test.ts",
    "  const audit = vi.fn(async () => undefined);\n",
    """  const listDeadLetters = vi.fn(async () => [
    {
      workType: 'webhook_delivery' as const,
      workId: 'whd_failed_1',
      organizationId: 'org_1',
      storeId: 'store_1',
      status: 'failed' as const,
      attempts: 5,
      errorCode: 'TIMEOUT',
      failedAt: now.toISOString(),
      replayable: true,
      replayBlockedReason: null,
    },
  ]);
  const replayDeadLetter = vi.fn(async () => ({
    replayId: 'dwr_1',
    organizationId: 'org_1',
    storeId: 'store_1',
    workType: 'webhook_delivery' as const,
    workId: 'whd_failed_1',
    previousStatus: 'failed',
    previousErrorCode: 'TIMEOUT',
    previousAttempts: 5,
    replayedStatus: 'queued' as const,
    replayedAt: now.toISOString(),
    replay: false,
  }));
  const audit = vi.fn(async () => undefined);
""",
)
replace_once(
    "apps/api/src/browser.test.ts",
    "      nativeShadowRollouts: { setForStore },\n      audit: { record: audit },\n",
    """      nativeShadowRollouts: { setForStore },
      durableWorkOperations: { listDeadLetters, replayDeadLetter },
      audit: { record: audit },
""",
)
replace_once(
    "apps/api/src/browser.test.ts",
    "    setForStore,\n    audit,\n",
    """    setForStore,
    listDeadLetters,
    replayDeadLetter,
    audit,
""",
)

tests = r"""

  it('lists only secret-free dead letters for an exact owner or admin store scope', async () => {
    const { app, listDeadLetters, audit } = createTestApp();
    const loggedIn = await login(app);
    const allowed = await app.request(
      '/dashboard/v1/dead-letters?organization_id=org_1&store_id=store_1&limit=20',
      { headers: { Cookie: loggedIn.cookie } },
    );
    expect(allowed.status).toBe(200);
    const body = await allowed.json();
    expect(body).toMatchObject({
      success: true,
      organization_id: 'org_1',
      store_id: 'store_1',
      dead_letters: [
        {
          work_type: 'webhook_delivery',
          work_id: 'whd_failed_1',
          attempts: 5,
          error_code: 'TIMEOUT',
          replayable: true,
        },
      ],
    });
    expect(JSON.stringify(body)).not.toMatch(/payload|secret|phone|otp/i);
    expect(listDeadLetters).toHaveBeenCalledWith({
      requestedByUserId: 'usr_1',
      organizationId: 'org_1',
      storeId: 'store_1',
      limit: 20,
      at: now,
    });
    expect(audit).toHaveBeenCalledWith(
      expect.objectContaining({
        organizationId: 'org_1',
        action: 'durable_work.dead_letters_viewed',
        metadata: expect.objectContaining({ resultCount: 1 }),
      }),
    );

    const wrongScope = await app.request(
      '/dashboard/v1/dead-letters?organization_id=org_2&store_id=store_2',
      { headers: { Cookie: loggedIn.cookie } },
    );
    expect(wrongScope.status).toBe(404);
    expect(listDeadLetters).toHaveBeenCalledTimes(1);
  });

  it('requires owner or admin membership for dead-letter inspection', async () => {
    const memberIdentity: UserSessionIdentity = {
      ...merchantIdentity,
      organizations: merchantIdentity.organizations.map((organization) => ({
        ...organization,
        role: 'member',
      })),
    };
    const { app, listDeadLetters } = createTestApp(memberIdentity);
    const loggedIn = await login(app);
    const response = await app.request(
      '/dashboard/v1/dead-letters?organization_id=org_1&store_id=store_1',
      { headers: { Cookie: loggedIn.cookie } },
    );
    expect(response.status).toBe(403);
    expect(listDeadLetters).not.toHaveBeenCalled();
  });

  it('requires CSRF and maps controlled replay results and failures without leaking data', async () => {
    const { app, replayDeadLetter } = createTestApp();
    const loggedIn = await login(app);
    const requestBody = JSON.stringify({
      organization_id: 'org_1',
      store_id: 'store_1',
      work_type: 'webhook_delivery',
      work_id: 'whd_failed_1',
      idempotency_key: 'dlr_stable_browser_retry_1',
    });
    const missingCsrf = await app.request('/dashboard/v1/dead-letter-replays', {
      method: 'POST',
      headers: { Cookie: loggedIn.cookie, 'Content-Type': 'application/json' },
      body: requestBody,
    });
    expect(missingCsrf.status).toBe(403);
    expect(replayDeadLetter).not.toHaveBeenCalled();

    const proofHeader = ['X', 'CSRF', 'Token'].join('-');
    const allowed = await app.request('/dashboard/v1/dead-letter-replays', {
      method: 'POST',
      headers: {
        Cookie: loggedIn.cookie,
        'Content-Type': 'application/json',
        [proofHeader]: loggedIn.body.csrf_token,
      },
      body: requestBody,
    });
    expect(allowed.status).toBe(200);
    await expect(allowed.json()).resolves.toMatchObject({
      replay_id: 'dwr_1',
      work_type: 'webhook_delivery',
      work_id: 'whd_failed_1',
      previous_status: 'failed',
      replayed_status: 'queued',
      replay: false,
    });
    expect(replayDeadLetter).toHaveBeenCalledWith({
      requestedByUserId: 'usr_1',
      organizationId: 'org_1',
      storeId: 'store_1',
      workType: 'webhook_delivery',
      workId: 'whd_failed_1',
      idempotencyKey: 'dlr_stable_browser_retry_1',
      at: now,
    });

    replayDeadLetter.mockRejectedValueOnce(
      new DurableWorkOperationError(
        'DEAD_LETTER_NOT_REPLAYABLE',
        'Durable work cannot be replayed: STRUCTURAL_WEBHOOK_FAILURE',
      ),
    );
    const blocked = await app.request('/dashboard/v1/dead-letter-replays', {
      method: 'POST',
      headers: {
        Cookie: loggedIn.cookie,
        'Content-Type': 'application/json',
        [proofHeader]: loggedIn.body.csrf_token,
      },
      body: requestBody,
    });
    expect(blocked.status).toBe(409);
    await expect(blocked.json()).resolves.toMatchObject({
      error: { code: 'DEAD_LETTER_NOT_REPLAYABLE' },
    });
  });
"""
replace_once(
    "apps/api/src/browser.test.ts",
    "\n  it('requires an explicit platform-admin role and keeps broad blocking disabled', async () => {\n",
    tests
    + "\n  it('requires an explicit platform-admin role and keeps broad blocking disabled', async () => {\n",
)

# Merchant dashboard UI.
replace_once(
    "apps/dashboard/src/App.tsx",
    "  BrowserSessionResponse,\n  DashboardReview,\n  MerchantDashboardOverview,\n",
    """  BrowserSessionResponse,
  DashboardReview,
  DurableDeadLetter,
  DurableDeadLetterListResponse,
  DurableWorkReplayResponse,
  MerchantDashboardOverview,
""",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "type View = 'overview' | 'reviews' | 'couriers' | 'policies' | 'usage' | 'settings';\n",
    """type View =
  | 'overview'
  | 'reviews'
  | 'couriers'
  | 'operations'
  | 'policies'
  | 'usage'
  | 'settings';
""",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "  platform: string;\n};\n",
    """  platform: string;
  role: string;
};
""",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "  { id: 'couriers', label: 'Courier accounts', description: 'Connection health' },\n",
    """  { id: 'couriers', label: 'Courier accounts', description: 'Connection health' },
  { id: 'operations', label: 'Failed work', description: 'Inspect and replay' },
""",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "  const [view, setView] = useState<View>('overview');\n  const [loading, setLoading] = useState(true);\n",
    """  const [view, setView] = useState<View>('overview');
  const [deadLetters, setDeadLetters] = useState<DurableDeadLetter[]>([]);
  const [operationsLoading, setOperationsLoading] = useState(false);
  const [replayingWork, setReplayingWork] = useState<string | null>(null);
  const [operationMessage, setOperationMessage] = useState<string | null>(null);
  const [replayKeys, setReplayKeys] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
""",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "  const activeNav = useMemo(() => navItems.find((item) => item.id === view), [view]);\n",
    """  const visibleNavItems = useMemo(
    () =>
      navItems.filter(
        (item) => item.id !== 'operations' || isStoreAdministrator(selectedStore?.role),
      ),
    [selectedStore],
  );
  const activeNav = useMemo(() => navItems.find((item) => item.id === view), [view]);
""",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "  useEffect(() => {\n    if (!selectedStore) return;\n    void loadOverview(selectedStore);\n  }, [selectedStore]);\n",
    """  useEffect(() => {
    if (!selectedStore) return;
    void loadOverview(selectedStore);
  }, [selectedStore]);

  useEffect(() => {
    if (view !== 'operations' || !selectedStore) return;
    if (!isStoreAdministrator(selectedStore.role)) {
      setView('overview');
      return;
    }
    void loadDeadLetters(selectedStore);
  }, [view, selectedStore]);
""",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "      setOverview(body);\n      setSelectedReview(body.reviews[0] ?? null);\n",
    """      setOverview(body);
      setSelectedReview(body.reviews[0] ?? null);
      setDeadLetters([]);
      setOperationMessage(null);
""",
)

operations_functions = r"""

  async function loadDeadLetters(store: StoreOption) {
    setOperationsLoading(true);
    setOperationMessage(null);
    setError(null);
    try {
      const params = new URLSearchParams({
        organization_id: store.organizationId,
        store_id: store.storeId,
        limit: '100',
      });
      const response = await fetch(`/dashboard/v1/dead-letters?${params.toString()}`, {
        credentials: 'include',
      });
      if (response.status === 401) {
        setSession(null);
        setOverview(null);
        return;
      }
      const body = await readJson<DurableDeadLetterListResponse>(response);
      setDeadLetters(body.dead_letters);
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setOperationsLoading(false);
    }
  }

  async function handleReplay(item: DurableDeadLetter) {
    if (!session || !selectedStore || !item.replayable) return;
    const itemKey = durableWorkKey(item);
    let idempotencyKey = replayKeys[itemKey];
    if (!idempotencyKey) {
      idempotencyKey = `dlr_${crypto.randomUUID()}`;
      setReplayKeys((current) => ({ ...current, [itemKey]: idempotencyKey as string }));
    }
    setReplayingWork(itemKey);
    setOperationMessage(null);
    setError(null);
    try {
      const response = await fetch('/dashboard/v1/dead-letter-replays', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': session.csrf_token,
        },
        body: JSON.stringify({
          organization_id: selectedStore.organizationId,
          store_id: selectedStore.storeId,
          work_type: item.work_type,
          work_id: item.work_id,
          idempotency_key: idempotencyKey,
        }),
      });
      if (response.status === 401) {
        setSession(null);
        setOverview(null);
        return;
      }
      const replay = await readJson<DurableWorkReplayResponse>(response);
      setDeadLetters((current) => current.filter((candidate) => durableWorkKey(candidate) !== itemKey));
      setReplayKeys((current) => {
        const next = { ...current };
        delete next[itemKey];
        return next;
      });
      setOperationMessage(
        replay.replay
          ? `${workTypeLabel(item.work_type)} replay was already accepted.`
          : `${workTypeLabel(item.work_type)} returned to the private worker queue.`,
      );
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setReplayingWork(null);
    }
  }
"""
replace_once(
    "apps/dashboard/src/App.tsx",
    "\n  async function handleLogin(email: string, password: string) {\n",
    operations_functions + "\n  async function handleLogin(email: string, password: string) {\n",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "          {navItems.map((item) => (\n",
    "          {visibleNavItems.map((item) => (\n",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "            {view === 'couriers' && <CourierAccounts overview={overview} />}\n",
    """            {view === 'couriers' && <CourierAccounts overview={overview} />}
            {view === 'operations' && (
              <DurableOperations
                items={deadLetters}
                loading={operationsLoading}
                message={operationMessage}
                replayingWork={replayingWork}
                onRefresh={() => selectedStore && void loadDeadLetters(selectedStore)}
                onReplay={(item) => void handleReplay(item)}
              />
            )}
""",
)

operations_component = r"""

function DurableOperations({
  items,
  loading,
  message,
  replayingWork,
  onRefresh,
  onReplay,
}: {
  items: DurableDeadLetter[];
  loading: boolean;
  message: string | null;
  replayingWork: string | null;
  onRefresh(): void;
  onReplay(item: DurableDeadLetter): void;
}) {
  return (
    <section className="content-stack">
      <article className="panel notice-panel">
        <p className="eyebrow">Controlled PostgreSQL operations</p>
        <h2>Failed durable work</h2>
        <p>
          Only failed courier refresh, webhook delivery, and verification delivery records are
          listed. Payloads, destination URLs, phone data, OTP material, credentials, and signing
          secrets are never returned to this page.
        </p>
      </article>
      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Exact active store scope</p>
            <h3>{items.length} dead-letter records</h3>
          </div>
          <button className="secondary-button" disabled={loading} onClick={onRefresh} type="button">
            {loading ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>
        {message && <div className="live-banner">{message}</div>}
        <div className="compact-list">
          {items.map((item) => {
            const itemKey = durableWorkKey(item);
            const replaying = replayingWork === itemKey;
            return (
              <div className="compact-row" key={itemKey}>
                <div>
                  <strong>{workTypeLabel(item.work_type)}</strong>
                  <span>
                    {item.error_code ?? 'No structured error code'} · {item.attempts} attempts ·{' '}
                    {formatDate(item.failed_at)}
                  </span>
                  <small>{item.work_id}</small>
                </div>
                <div>
                  <span className={item.replayable ? 'pill success' : 'pill neutral'}>
                    {item.replayable
                      ? 'Replayable'
                      : item.replay_blocked_reason ?? 'Manual remediation required'}
                  </span>
                  <button
                    className="secondary-button"
                    disabled={!item.replayable || replaying}
                    onClick={() => onReplay(item)}
                    type="button"
                  >
                    {replaying ? 'Replaying…' : 'Replay safely'}
                  </button>
                </div>
              </div>
            );
          })}
          {!loading && items.length === 0 && (
            <div className="empty-state">No failed durable work is visible for this store.</div>
          )}
        </div>
      </article>
      <article className="panel notice-panel">
        <strong>Replay safety</strong>
        <p>
          Replay is explicit, idempotent, and audited. Structural failures and expired verification
          work remain blocked. The browser never calls a courier, webhook destination, or OTP
          provider directly.
        </p>
      </article>
    </section>
  );
}
"""
replace_once(
    "apps/dashboard/src/App.tsx",
    "\nfunction Usage({ overview }: { overview: MerchantDashboardOverview }) {\n",
    operations_component + "\nfunction Usage({ overview }: { overview: MerchantDashboardOverview }) {\n",
)
replace_once(
    "apps/dashboard/src/App.tsx",
    "      platform: store.platform,\n",
    """      platform: store.platform,
      role: organization.role,
""",
)

ui_helpers = r"""

function isStoreAdministrator(role: string | undefined): boolean {
  return role === 'owner' || role === 'admin';
}

function durableWorkKey(item: DurableDeadLetter): string {
  return `${item.work_type}:${item.work_id}`;
}

function workTypeLabel(workType: DurableDeadLetter['work_type']): string {
  if (workType === 'courier_job') return 'Courier refresh';
  if (workType === 'webhook_delivery') return 'Webhook delivery';
  return 'Verification delivery';
}
"""
replace_once(
    "apps/dashboard/src/App.tsx",
    "\nfunction storeKey(store: StoreOption): string {\n",
    ui_helpers + "\nfunction storeKey(store: StoreOption): string {\n",
)

# Documentation updates.
api_doc = Path("docs/api/api-specification.md")
api_doc.write_text(
    api_doc.read_text()
    + """

## Merchant browser durable-work operations

Authenticated browser sessions expose two exact-store owner/admin operations:

- `GET /dashboard/v1/dead-letters?organization_id=<id>&store_id=<id>&limit=<1-100>` returns at most 100 failed courier refresh, webhook delivery, and verification delivery records. The response contains only typed work identity, attempt/error state, failure time, and replayability metadata.
- `POST /dashboard/v1/dead-letter-replays` requires `X-CSRF-Token` and accepts `organization_id`, `store_id`, `work_type`, `work_id`, and a stable `idempotency_key`.

Both routes recheck the opaque browser session, session-visible scope, active owner/admin role, and the repository's authoritative relational organization/store scope. Replay responses report the immutable replay evidence identifier and whether the idempotency key returned an existing replay. Payloads, URLs, phone/OTP material, encrypted values, credentials, cookies, tokens, and signing secrets are outside these contracts.
"""
)
ops_doc = Path("docs/operations/operations-observability.md")
ops_doc.write_text(
    ops_doc.read_text()
    + """

## Browser dead-letter operations surface

The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.

The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.
"""
)
security_doc = Path("docs/security/security-privacy.md")
security_doc.write_text(
    security_doc.read_text()
    + """

## Browser durable-work administration

Dead-letter listing and replay require an opaque authenticated browser session, exact session-visible organization/store scope, active owner/admin membership, repository-level relational reauthorization, and CSRF proof for replay. Service API keys are not accepted as browser sessions. The response contract excludes raw payloads, destination URLs, phone numbers or hashes, OTP values or hashes, encrypted material, credentials, cookies, tokens, provider responses, and webhook signing secrets.
"""
)
testing_doc = Path("docs/testing/testing-strategy.md")
testing_doc.write_text(
    testing_doc.read_text()
    + """

## Browser dead-letter operations coverage

Browser API tests must prove session enforcement, exact-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, secret-free list serialization, replay-result serialization, and structured conflict mapping. The existing real-PostgreSQL durable-work suite remains authoritative for concurrent duplicate replay, tenant isolation, structural/expiry rejection, lease reset, immutable evidence, and audit atomicity.
"""
)

replace_once(
    "README.md",
    "- Native multi-store post-persist shadow integration with authoritative source-order revalidation, explicit store opt-in, immutable success/failure attempt evidence, tenant-scoped pilot reporting, and legacy-authoritative behavior\n",
    """- Native multi-store post-persist shadow integration with authoritative source-order revalidation, explicit store opt-in, immutable success/failure attempt evidence, tenant-scoped pilot reporting, and legacy-authoritative behavior
- Authenticated owner/admin merchant dead-letter page with secret-free inspection and CSRF-protected idempotent replay through the existing PostgreSQL operations repository
""",
)

print("browser dead-letter operations patch applied")
