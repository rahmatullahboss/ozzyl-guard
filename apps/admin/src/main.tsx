import { StrictMode, useEffect, useState, type FormEvent } from 'react';
import { createRoot } from 'react-dom/client';
import type { BrowserSessionResponse, PlatformAdminOverview } from '@ozzyl/shared-types';
import './styles.css';

function AdminApp() {
  const [session, setSession] = useState<BrowserSessionResponse | null>(null);
  const [overview, setOverview] = useState<PlatformAdminOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void loadSession();
  }, []);

  async function loadSession() {
    setLoading(true);
    try {
      const response = await fetch('/auth/session', { credentials: 'include' });
      if (response.status === 401) return;
      const body = await readJson<BrowserSessionResponse>(response);
      setSession(body);
      if (body.user.platform_role !== 'platform_admin') {
        setError('This account is not authorized for platform administration.');
        return;
      }
      await loadOverview();
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setLoading(false);
    }
  }

  async function loadOverview() {
    const response = await fetch('/admin/v1/overview', { credentials: 'include' });
    if (response.status === 401) {
      setSession(null);
      setOverview(null);
      return;
    }
    setOverview(await readJson<PlatformAdminOverview>(response));
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
      if (body.user.platform_role !== 'platform_admin') {
        setError('This account is not authorized for platform administration.');
        return;
      }
      await loadOverview();
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
      setError(null);
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setLoading(false);
    }
  }

  if (loading && !session) return <div className="admin-loading">Checking secure session…</div>;
  if (!session) return <AdminLogin error={error} loading={loading} onLogin={handleLogin} />;
  if (session.user.platform_role !== 'platform_admin') {
    return (
      <main className="admin-shell">
        <AccessDenied email={session.user.email} error={error} onLogout={handleLogout} />
      </main>
    );
  }
  if (!overview) return <div className="admin-loading">Loading platform operations…</div>;

  return (
    <main className="admin-shell">
      <header>
        <div>
          <p>OZZYL GUARD PLATFORM</p>
          <h1>Operations Admin</h1>
          <small>{session.user.email}</small>
        </div>
        <div className="header-actions">
          <span>Live · Asia/Dhaka</span>
          <button disabled={loading} onClick={() => void handleLogout()} type="button">
            Sign out
          </button>
        </div>
      </header>
      {error && <div className="admin-error">{error}</div>}
      <section className="stats">
        <Stat
          label="Active organizations"
          value={number(overview.summary.active_organizations)}
          detail={`${number(overview.summary.active_stores)} stores`}
        />
        <Stat
          label="Assessments today"
          value={number(overview.summary.assessments_today)}
          detail={`${overview.summary.degraded_percentage}% degraded`}
        />
        <Stat
          label="Worker backlog"
          value={number(overview.summary.worker_backlog)}
          detail="Queued or processing courier jobs"
        />
        <Stat
          label="Failed webhooks"
          value={number(overview.summary.failed_webhooks)}
          detail="Current failed delivery state"
        />
        <Stat
          label="Shadow pilot stores"
          value={number(overview.shadow_pilot.opted_in_stores)}
          detail={`${number(overview.shadow_pilot.sampled_orders)} sampled orders in 30 days`}
        />
      </section>

      <section className="grid">
        <article>
          <div className="heading">
            <h2>Operational incidents</h2>
            <span className={overview.incidents.length === 0 ? 'healthy' : 'medium'}>
              {overview.incidents.length === 0 ? 'Clear' : `${overview.incidents.length} active`}
            </span>
          </div>
          {overview.incidents.map((incident) => (
            <div className="row" key={incident.code}>
              <div>
                <strong>{incident.title}</strong>
                <small>{incident.detail}</small>
              </div>
              <span className={incident.severity}>{incident.severity}</span>
            </div>
          ))}
          {overview.incidents.length === 0 && (
            <p className="note">No live operational incident is open.</p>
          )}
        </article>
        <article>
          <div className="heading">
            <h2>Pilot safety</h2>
            <span className="healthy">Enforced</span>
          </div>
          <div className="policy">
            <strong>Broad automatic blocking</strong>
            <span>{overview.automatic_blocking.broadly_enabled ? 'Enabled' : 'Disabled'}</span>
          </div>
          <div className="bar">
            <i style={{ width: '0%' }} />
          </div>
          <p className="note">{overview.automatic_blocking.reason}</p>
          <div className="policy">
            <strong>Native shadow comparisons</strong>
            <span>{number(overview.shadow_pilot.successful_comparisons)}</span>
          </div>
          <div className="policy">
            <strong>Assessment / persistence failures</strong>
            <span>
              {number(overview.shadow_pilot.assessment_failures)} /{' '}
              {number(overview.shadow_pilot.persistence_failures)}
            </span>
          </div>
          <p className="note">
            Decision disagreement:{' '}
            {overview.shadow_pilot.decision_disagreement_rate === null
              ? 'no successful sample yet'
              : `${Math.round(overview.shadow_pilot.decision_disagreement_rate * 10000) / 100}%`}
            . Score delta average: {overview.shadow_pilot.score_delta.average ?? 'n/a'}.
          </p>
        </article>
      </section>

      <section className="grid">
        <article>
          <div className="heading">
            <h2>Provider health</h2>
          </div>
          {overview.providers.map((provider) => (
            <Provider
              key={provider.name}
              metric={provider.metric}
              name={provider.name}
              state={provider.state}
            />
          ))}
          {overview.providers.length === 0 && (
            <p className="note">No courier provider accounts exist yet.</p>
          )}
        </article>
        <article>
          <div className="heading">
            <h2>Security controls</h2>
          </div>
          <Provider
            name="Browser sessions"
            state="enforced"
            metric="Opaque HttpOnly cookie and CSRF"
          />
          <Provider
            name="Tenant isolation"
            state="enforced"
            metric="Organization and store scope required"
          />
          <Provider
            name="Service credentials"
            state="separate"
            metric="API keys are not dashboard sessions"
          />
          <Provider name="Generated at" state="live" metric={formatDate(overview.generated_at)} />
        </article>
      </section>
    </main>
  );
}

function AdminLogin({
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
    <main className="admin-auth">
      <form className="admin-auth-card" onSubmit={submit}>
        <div>
          <p>OZZYL GUARD PLATFORM</p>
          <h1>Operations Admin</h1>
          <small>Explicit platform-admin authorization is required.</small>
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
        {error && <div className="admin-error">{error}</div>}
        <button disabled={loading} type="submit">
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </main>
  );
}

function AccessDenied({
  email,
  error,
  onLogout,
}: {
  email: string;
  error: string | null;
  onLogout(): Promise<void>;
}) {
  return (
    <article className="access-denied">
      <p>ACCESS DENIED</p>
      <h1>Platform administrator role required</h1>
      <span>{email}</span>
      <small>{error ?? 'Merchant users cannot access global operational data.'}</small>
      <button onClick={() => void onLogout()} type="button">
        Sign out
      </button>
    </article>
  );
}

function Stat({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <article className="stat">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

function Provider({ name, state, metric }: { name: string; state: string; metric: string }) {
  const healthy = ['operational', 'enforced', 'separate', 'live'].includes(state);
  return (
    <div className="row">
      <div>
        <strong>{name}</strong>
        <small>{metric}</small>
      </div>
      <span className={healthy ? 'healthy' : 'medium'}>{state}</span>
    </div>
  );
}

async function readJson<T = { success: true }>(response: Response): Promise<T> {
  const body = (await response.json()) as T & { error?: { message?: string } };
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

function formatDate(value: string): string {
  return new Intl.DateTimeFormat('en-BD', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Dhaka',
  }).format(new Date(value));
}

const root = document.getElementById('root');
if (!root) throw new Error('Admin root element was not found');
createRoot(root).render(
  <StrictMode>
    <AdminApp />
  </StrictMode>,
);
