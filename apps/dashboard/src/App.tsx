import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import type {
  BrowserSessionResponse,
  DashboardReview,
  DurableDeadLetter,
  DurableDeadLetterListResponse,
  DurableWorkReplayResponse,
  MerchantDashboardOverview,
} from '@ozzyl/shared-types';

type View = 'overview' | 'reviews' | 'couriers' | 'operations' | 'policies' | 'usage' | 'settings';

type StoreOption = {
  organizationId: string;
  organizationName: string;
  storeId: string;
  storeName: string;
  platform: string;
  role: string;
};

const navItems: Array<{ id: View; label: string; description: string }> = [
  { id: 'overview', label: 'Overview', description: 'Live risk summary' },
  { id: 'reviews', label: 'Review queue', description: 'Orders requiring action' },
  { id: 'couriers', label: 'Courier accounts', description: 'Connection health' },
  { id: 'operations', label: 'Failed work', description: 'Inspect and replay' },
  { id: 'policies', label: 'Risk policies', description: 'Pilot safety state' },
  { id: 'usage', label: 'API usage', description: 'Current entitlement' },
  { id: 'settings', label: 'Settings', description: 'Session and scope' },
];

export function App() {
  const [session, setSession] = useState<BrowserSessionResponse | null>(null);
  const [overview, setOverview] = useState<MerchantDashboardOverview | null>(null);
  const [selectedStore, setSelectedStore] = useState<StoreOption | null>(null);
  const [selectedReview, setSelectedReview] = useState<DashboardReview | null>(null);
  const [view, setView] = useState<View>('overview');
  const [deadLetters, setDeadLetters] = useState<DurableDeadLetter[]>([]);
  const [operationsLoading, setOperationsLoading] = useState(false);
  const [replayingWork, setReplayingWork] = useState<string | null>(null);
  const [operationMessage, setOperationMessage] = useState<string | null>(null);
  const replayKeys = useRef<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const stores = useMemo(() => flattenStores(session), [session]);
  const visibleNavItems = useMemo(
    () =>
      navItems.filter(
        (item) => item.id !== 'operations' || isStoreAdministrator(selectedStore?.role),
      ),
    [selectedStore],
  );
  const activeNav = useMemo(() => navItems.find((item) => item.id === view), [view]);

  useEffect(() => {
    void loadSession();
  }, []);

  useEffect(() => {
    if (!session || stores.length === 0) return;
    setSelectedStore((current) => current ?? stores[0] ?? null);
  }, [session, stores]);

  useEffect(() => {
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

  async function loadSession() {
    setLoading(true);
    try {
      const response = await fetch('/auth/session', { credentials: 'include' });
      if (response.status === 401) {
        setSession(null);
        setOverview(null);
        return;
      }
      const body = await readJson<BrowserSessionResponse>(response);
      setSession(body);
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setLoading(false);
    }
  }

  async function loadOverview(store: StoreOption) {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        organization_id: store.organizationId,
        store_id: store.storeId,
      });
      const response = await fetch(`/dashboard/v1/overview?${params.toString()}`, {
        credentials: 'include',
      });
      if (response.status === 401) {
        setSession(null);
        setOverview(null);
        return;
      }
      const body = await readJson<MerchantDashboardOverview>(response);
      setOverview(body);
      setSelectedReview(body.reviews[0] ?? null);
      setDeadLetters([]);
      replayKeys.current = {};
      setOperationMessage(null);
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setLoading(false);
    }
  }

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
    let idempotencyKey = replayKeys.current[itemKey];
    if (!idempotencyKey) {
      idempotencyKey = `dlr_${crypto.randomUUID()}`;
      replayKeys.current[itemKey] = idempotencyKey;
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
      setDeadLetters((current) =>
        current.filter((candidate) => durableWorkKey(candidate) !== itemKey),
      );
      delete replayKeys.current[itemKey];
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

  async function handleLogin(email: string, password: string) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const body = await readJson<BrowserSessionResponse>(response);
      setSession(body);
      setSelectedStore(flattenStores(body)[0] ?? null);
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    if (!session) return;
    setLoading(true);
    try {
      await readJson(
        await fetch('/auth/logout', {
          method: 'POST',
          credentials: 'include',
          headers: { 'X-CSRF-Token': session.csrf_token },
        }),
      );
      setSession(null);
      setOverview(null);
      setSelectedStore(null);
      setSelectedReview(null);
      replayKeys.current = {};
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setLoading(false);
    }
  }

  if (loading && !session) return <LoadingState label="Checking your secure session…" />;
  if (!session) return <LoginScreen error={error} loading={loading} onLogin={handleLogin} />;
  if (stores.length === 0) {
    return (
      <LoadingState label="Your account has no active organization/store scope. Contact an administrator." />
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">OG</div>
          <div>
            <strong>Ozzyl Guard</strong>
            <span>COD Intelligence</span>
          </div>
        </div>
        <nav aria-label="Dashboard navigation">
          {visibleNavItems.map((item) => (
            <button
              className={view === item.id ? 'nav-item active' : 'nav-item'}
              key={item.id}
              onClick={() => setView(item.id)}
              type="button"
            >
              <span>{item.label}</span>
              <small>{item.description}</small>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className="status-dot" />
          <div>
            <strong>Authenticated live data</strong>
            <small>
              {overview ? `Updated ${formatDate(overview.generated_at)}` : 'Loading scope'}
            </small>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div>
            <p className="eyebrow">{selectedStore?.organizationName ?? 'Merchant workspace'}</p>
            <h1>{activeNav?.label}</h1>
          </div>
          <div className="topbar-actions">
            <select
              aria-label="Select store"
              value={selectedStore ? storeKey(selectedStore) : ''}
              onChange={(event) => {
                const next = stores.find((store) => storeKey(store) === event.target.value) ?? null;
                setSelectedStore(next);
              }}
            >
              {stores.map((store) => (
                <option key={storeKey(store)} value={storeKey(store)}>
                  {store.storeName} · {store.platform}
                </option>
              ))}
            </select>
            <div className="topbar-user">
              <strong>{session.user.email}</strong>
              <small>{overview?.scope.role ?? 'member'}</small>
            </div>
            <button
              className="secondary-button"
              disabled={loading}
              onClick={() => void handleLogout()}
              type="button"
            >
              Sign out
            </button>
          </div>
        </header>

        {error && <div className="page-error">{error}</div>}
        {loading && <div className="live-banner">Refreshing live data…</div>}
        {!overview ? (
          <LoadingState label="Loading store overview…" />
        ) : (
          <>
            {view === 'overview' && (
              <Overview overview={overview} onOpenQueue={() => setView('reviews')} />
            )}
            {view === 'reviews' && (
              <ReviewQueue
                items={overview.reviews}
                selected={selectedReview}
                onSelect={setSelectedReview}
              />
            )}
            {view === 'couriers' && <CourierAccounts overview={overview} />}
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
            {view === 'policies' && <RiskPolicies overview={overview} />}
            {view === 'usage' && <Usage overview={overview} />}
            {view === 'settings' && <Settings session={session} overview={overview} />}
          </>
        )}
      </main>
    </div>
  );
}

function LoginScreen({
  error,
  loading,
  onLogin,
}: {
  error: string | null;
  loading: boolean;
  onLogin(email: string, password: string): Promise<void>;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void onLogin(email, password);
  }
  return (
    <main className="auth-shell">
      <form className="auth-card" onSubmit={submit}>
        <div className="brand auth-brand">
          <div className="brand-mark">OG</div>
          <div>
            <strong>Ozzyl Guard</strong>
            <span>Merchant dashboard</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">Secure browser session</p>
          <h1>Sign in</h1>
          <p className="auth-copy">
            Dashboard users authenticate separately from service API keys.
          </p>
        </div>
        <label>
          Email
          <input
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            value={email}
          />
        </label>
        <label>
          Password
          <input
            autoComplete="current-password"
            minLength={10}
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
        </label>
        {error && <div className="form-error">{error}</div>}
        <button className="primary-button" disabled={loading} type="submit">
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </main>
  );
}

function Overview({
  overview,
  onOpenQueue,
}: {
  overview: MerchantDashboardOverview;
  onOpenQueue(): void;
}) {
  const total = Math.max(overview.summary.assessments_30d, 1);
  return (
    <section className="content-stack">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Live · last 30 days</p>
          <h2>{number(overview.summary.assessments_30d)} COD orders assessed</h2>
          <p>
            {number(overview.summary.pending_reviews)} assessments currently require verification,
            review, hold, or merchant action.
          </p>
        </div>
        <div className="hero-score">
          <strong>{number(overview.summary.degraded_30d)}</strong>
          <span>degraded results kept explicit, never treated as automatically safe</span>
        </div>
      </div>

      <div className="metric-grid">
        <Metric
          title="Assessments"
          value={number(overview.summary.assessments_30d)}
          note="Last 30 days"
        />
        <Metric
          title="Verified"
          value={number(overview.summary.verified_30d)}
          note="Successful OTP sessions"
        />
        <Metric
          title="Needs action"
          value={number(overview.summary.pending_reviews)}
          note="Live review queue"
        />
        <Metric
          title="Monthly usage"
          value={usageLabel(overview)}
          note="Organization entitlement"
        />
      </div>

      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Native source shadow · last 30 days</p>
            <h3>Post-persist pilot comparison</h3>
          </div>
          <span
            className={overview.shadow_pilot.mode === 'shadow' ? 'pill success' : 'pill neutral'}
          >
            {overview.shadow_pilot.mode}
          </span>
        </div>
        <div className="metric-grid">
          <Metric
            title="Sampled orders"
            value={number(overview.shadow_pilot.sampled_orders)}
            note={`${overview.shadow_pilot.sample_rate_bps / 100}% configured sample`}
          />
          <Metric
            title="Comparisons"
            value={number(overview.shadow_pilot.successful_comparisons)}
            note="Successfully persisted"
          />
          <Metric
            title="Advisory failures"
            value={number(
              overview.shadow_pilot.assessment_failures +
                overview.shadow_pilot.persistence_failures,
            )}
            note="Checkout remained legacy-authoritative"
          />
          <Metric
            title="Decision disagreement"
            value={
              overview.shadow_pilot.decision_disagreement_rate === null
                ? 'No data'
                : `${Math.round(overview.shadow_pilot.decision_disagreement_rate * 10000) / 100}%`
            }
            note={`Score delta avg ${overview.shadow_pilot.score_delta.average ?? 'n/a'}`}
          />
        </div>
      </article>

      <div className="two-column">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Risk distribution</p>
              <h3>Decision mix</h3>
            </div>
            <span className="pill neutral">Canonical engine output</span>
          </div>
          <div className="distribution">
            {Object.entries(overview.decisions).map(([decision, count]) => (
              <DistributionRow
                count={number(count)}
                key={decision}
                label={capitalize(decision)}
                value={Math.round((count / total) * 100)}
              />
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Needs attention</p>
              <h3>Review queue</h3>
            </div>
            <button className="text-button" onClick={onOpenQueue} type="button">
              View all
            </button>
          </div>
          <div className="compact-list">
            {overview.reviews.slice(0, 5).map((item) => (
              <div className="compact-row" key={item.assessment_id}>
                <div>
                  <strong>{item.external_order_id ?? item.assessment_id}</strong>
                  <span>
                    {item.phone_masked} · {formatDate(item.created_at)}
                  </span>
                </div>
                <RiskBadge decision={item.decision} score={item.risk_score} />
              </div>
            ))}
            {overview.reviews.length === 0 && (
              <div className="empty-state compact">No open reviews.</div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

function ReviewQueue({
  items,
  selected,
  onSelect,
}: {
  items: DashboardReview[];
  selected: DashboardReview | null;
  onSelect(item: DashboardReview): void;
}) {
  return (
    <section className="review-layout">
      <article className="panel queue-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Actionable assessments</p>
            <h3>{items.length} open reviews</h3>
          </div>
        </div>
        <div className="queue-list">
          {items.map((item) => (
            <button
              className={
                selected?.assessment_id === item.assessment_id ? 'queue-row selected' : 'queue-row'
              }
              key={item.assessment_id}
              onClick={() => onSelect(item)}
              type="button"
            >
              <div>
                <strong>{item.external_order_id ?? item.assessment_id}</strong>
                <span>
                  {item.phone_masked} · {formatDate(item.created_at)}
                </span>
              </div>
              <RiskBadge decision={item.decision} score={item.risk_score} />
            </button>
          ))}
          {items.length === 0 && <div className="empty-state">No assessments need action.</div>}
        </div>
      </article>

      <article className="panel detail-panel">
        {selected ? (
          <>
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Assessment {selected.assessment_id}</p>
                <h3>{selected.external_order_id ?? 'No external order id'}</h3>
              </div>
              <RiskBadge decision={selected.decision} score={selected.risk_score} />
            </div>
            <div className="detail-metrics">
              <Metric
                title="Confidence"
                value={`${Math.round(selected.confidence * 100)}%`}
                note="Evidence quality"
              />
              <Metric
                title="Customer"
                value={selected.phone_masked}
                note="Masked operational data"
              />
            </div>
            <div className="signal-list">
              <h4>Explainable signals</h4>
              {selected.signals.map((signal) => (
                <div className="signal" key={signal.code}>
                  <span>
                    {signal.score >= 0 ? '+' : ''}
                    {signal.score}
                  </span>
                  <div>
                    <strong>{signal.description}</strong>
                    <small>{signal.code}</small>
                  </div>
                </div>
              ))}
            </div>
            <article className="notice-panel panel inline-notice">
              <strong>Pilot safety</strong>
              <p>
                Broad automatic blocking is disabled. Decisions remain explainable and
                merchant-reviewed until calibration is approved.
              </p>
            </article>
          </>
        ) : (
          <div className="empty-state">Select an assessment to inspect its evidence.</div>
        )}
      </article>
    </section>
  );
}

function CourierAccounts({ overview }: { overview: MerchantDashboardOverview }) {
  return (
    <section className="content-stack">
      <div className="section-intro">
        <div>
          <p className="eyebrow">Live scoped connections</p>
          <h2>Courier accounts</h2>
          <p>
            Provider credentials and sessions remain encrypted and outside synchronous checkout.
          </p>
        </div>
      </div>
      {overview.couriers.map((account) => (
        <article className="panel account-card" key={account.provider}>
          <div className="provider-logo">{account.provider[0]?.toUpperCase()}</div>
          <div className="account-info">
            <strong>
              {capitalize(account.provider)} · {overview.scope.store_name}
            </strong>
            <span>{account.failure_code ?? 'No active provider failure code'}</span>
            <div className="account-meta">
              <span>Last success: {formatNullableDate(account.last_success_at)}</span>
              <span>Last failure: {formatNullableDate(account.last_failure_at)}</span>
            </div>
          </div>
          <span className={account.status === 'connected' ? 'pill success' : 'pill neutral'}>
            {account.status}
          </span>
        </article>
      ))}
      {overview.couriers.length === 0 && (
        <article className="panel empty-state">
          No courier account is connected to this store.
        </article>
      )}
      <article className="panel notice-panel">
        <strong>Provider degradation policy</strong>
        <p>
          A provider outage never marks a customer safe or fraudulent. Missing evidence remains
          explicit and routes to verification or review.
        </p>
      </article>
    </section>
  );
}

function RiskPolicies({ overview }: { overview: MerchantDashboardOverview }) {
  const pilot = overview.shadow_pilot;
  return (
    <section className="content-stack">
      <article className="panel notice-panel">
        <p className="eyebrow">Production hardening</p>
        <h2>Automatic blocking remains disabled</h2>
        <p>
          The existing versioned policy and single canonical Risk Engine remain unchanged. Broad
          automatic blocking will not be enabled before selected-merchant pilot review and
          confidence calibration.
        </p>
      </article>
      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Store-scoped rollout</p>
            <h3>Native shadow is {pilot.mode}</h3>
          </div>
          <span className={pilot.mode === 'shadow' ? 'pill success' : 'pill neutral'}>
            {pilot.rollout_version}
          </span>
        </div>
        <div className="detail-metrics">
          <Metric
            title="Sample rate"
            value={`${pilot.sample_rate_bps / 100}%`}
            note="Explicit opt-in only"
          />
          <Metric
            title="Score delta range"
            value={
              pilot.score_delta.minimum === null
                ? 'No data'
                : `${pilot.score_delta.minimum} to ${pilot.score_delta.maximum}`
            }
            note={`${pilot.score_delta.lower} lower · ${pilot.score_delta.equal} equal · ${pilot.score_delta.higher} higher`}
          />
        </div>
        <p className="note">
          Rollout changes require an authenticated owner/admin browser session and CSRF-protected
          store scope. Service API keys cannot act as dashboard sessions.
        </p>
      </article>
    </section>
  );
}

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
                      : (item.replay_blocked_reason ?? 'Manual remediation required')}
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

function Usage({ overview }: { overview: MerchantDashboardOverview }) {
  const limit = overview.summary.usage_limit;
  const percentage = limit ? Math.min(100, (overview.summary.usage_month / limit) * 100) : 0;
  return (
    <section className="content-stack">
      <div className="metric-grid">
        <Metric
          title="Assessments used"
          value={number(overview.summary.usage_month)}
          note="Current month"
        />
        <Metric
          title="Plan limit"
          value={limit === null ? 'Custom' : number(limit)}
          note="Organization-wide"
        />
        <Metric
          title="Open reviews"
          value={number(overview.summary.pending_reviews)}
          note="Current store"
        />
        <Metric
          title="Degraded results"
          value={number(overview.summary.degraded_30d)}
          note="Last 30 days"
        />
      </div>
      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Monthly entitlement</p>
            <h3>{limit === null ? 'Custom plan usage' : `${Math.round(percentage)}% used`}</h3>
          </div>
        </div>
        {limit !== null && (
          <div className="large-progress">
            <span style={{ width: `${percentage}%` }} />
          </div>
        )}
      </article>
    </section>
  );
}

function Settings({
  session,
  overview,
}: {
  session: BrowserSessionResponse;
  overview: MerchantDashboardOverview;
}) {
  return (
    <section className="content-stack">
      <div className="two-column">
        <article className="panel">
          <p className="eyebrow">Authenticated user</p>
          <h3>{session.user.email}</h3>
          <div className="compact-list">
            <IntegrationRow name="Platform role" value={session.user.platform_role} />
            <IntegrationRow name="Organization role" value={overview.scope.role} />
            <IntegrationRow name="Session expires" value={formatDate(session.expires_at)} />
          </div>
        </article>
        <article className="panel">
          <p className="eyebrow">Active tenant scope</p>
          <h3>{overview.scope.store_name}</h3>
          <div className="compact-list">
            <IntegrationRow name="Organization" value={overview.scope.organization_name} />
            <IntegrationRow name="Platform" value={overview.scope.platform} />
            <IntegrationRow name="Store id" value={overview.scope.store_id} />
          </div>
        </article>
      </div>
      <article className="panel notice-panel">
        <strong>Credential separation enforced</strong>
        <p>
          Browser user sessions are distinct from integration API keys. Raw service keys are not
          used as cookies.
        </p>
      </article>
    </section>
  );
}

function LoadingState({ label }: { label: string }) {
  return <main className="loading-state">{label}</main>;
}

function Metric({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <article className="metric-card">
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function DistributionRow({ label, value, count }: { label: string; value: number; count: string }) {
  return (
    <div className="distribution-row">
      <span>{label}</span>
      <div className="progress">
        <i style={{ width: `${value}%` }} />
      </div>
      <strong>{count}</strong>
    </div>
  );
}

function RiskBadge({ decision, score }: { decision: DashboardReview['decision']; score: number }) {
  return (
    <span className={`risk-badge ${decision}`}>
      {decision} · {score}
    </span>
  );
}

function IntegrationRow({ name, value }: { name: string; value: string }) {
  return (
    <div className="compact-row">
      <strong>{name}</strong>
      <span className="pill neutral">{value}</span>
    </div>
  );
}

function flattenStores(session: BrowserSessionResponse | null): StoreOption[] {
  if (!session) return [];
  return session.organizations.flatMap((organization) =>
    organization.stores.map((store) => ({
      organizationId: organization.id,
      organizationName: organization.name,
      storeId: store.id,
      storeName: store.name,
      platform: store.platform,
      role: organization.role,
    })),
  );
}

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

function storeKey(store: StoreOption): string {
  return `${store.organizationId}:${store.storeId}`;
}

async function readJson<T = { success: true }>(response: Response): Promise<T> {
  const body = (await response.json()) as T & {
    error?: { message?: string };
  };
  if (!response.ok)
    throw new Error(body.error?.message ?? `Request failed with status ${response.status}`);
  return body;
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'The request could not be completed';
}

function number(value: number): string {
  return new Intl.NumberFormat('en-BD').format(value);
}

function usageLabel(overview: MerchantDashboardOverview): string {
  const limit = overview.summary.usage_limit;
  return limit === null
    ? number(overview.summary.usage_month)
    : `${number(overview.summary.usage_month)} / ${number(limit)}`;
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat('en-BD', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Dhaka',
  }).format(new Date(value));
}

function formatNullableDate(value: string | null): string {
  return value ? formatDate(value) : 'Not recorded';
}

function capitalize(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
