import { useMemo, useState } from 'react';

type View = 'overview' | 'reviews' | 'couriers' | 'policies' | 'usage' | 'settings';

type ReviewItem = {
  id: string;
  orderId: string;
  phone: string;
  score: number;
  decision: 'verify' | 'review' | 'hold' | 'block';
  confidence: number;
  signals: string[];
  createdAt: string;
};

const reviewItems: ReviewItem[] = [
  {
    id: 'ras_1029',
    orderId: 'WC-1092',
    phone: '017****5678',
    score: 72,
    decision: 'hold',
    confidence: 0.82,
    signals: ['Low delivery rate', 'High return rate', 'High-value COD'],
    createdAt: '12 minutes ago',
  },
  {
    id: 'ras_1028',
    orderId: 'SHOP-4871',
    phone: '018****9031',
    score: 51,
    decision: 'review',
    confidence: 0.68,
    signals: ['Rapid repeat orders', 'Stale courier observation'],
    createdAt: '26 minutes ago',
  },
  {
    id: 'ras_1024',
    orderId: 'CUSTOM-882',
    phone: '019****2210',
    score: 34,
    decision: 'verify',
    confidence: 0.41,
    signals: ['Insufficient history', 'New customer'],
    createdAt: '1 hour ago',
  },
];

const navItems: Array<{ id: View; label: string; description: string }> = [
  { id: 'overview', label: 'Overview', description: 'Risk and savings summary' },
  { id: 'reviews', label: 'Review queue', description: 'Orders requiring action' },
  { id: 'couriers', label: 'Courier accounts', description: 'Sessions and health' },
  { id: 'policies', label: 'Risk policies', description: 'Thresholds and actions' },
  { id: 'usage', label: 'API usage', description: 'Limits and integrations' },
  { id: 'settings', label: 'Settings', description: 'Stores, team and keys' },
];

export function App() {
  const [view, setView] = useState<View>('overview');
  const [selected, setSelected] = useState<ReviewItem | null>(reviewItems[0] ?? null);
  const [policyMode, setPolicyMode] = useState<'balanced' | 'strict' | 'growth'>('balanced');
  const activeNav = useMemo(() => navItems.find((item) => item.id === view), [view]);

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
          {navItems.map((item) => (
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
            <strong>All core systems normal</strong>
            <small>Last checked just now</small>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div>
            <p className="eyebrow">Merchant workspace</p>
            <h1>{activeNav?.label}</h1>
          </div>
          <div className="topbar-actions">
            <select aria-label="Select store" defaultValue="store-1">
              <option value="store-1">Ozzyl Demo Store</option>
              <option value="store-2">Secondary Store</option>
            </select>
            <button className="secondary-button" type="button">
              Test assessment
            </button>
            <div className="avatar" aria-label="Account menu">
              RZ
            </div>
          </div>
        </header>

        {view === 'overview' && <Overview onOpenQueue={() => setView('reviews')} />}
        {view === 'reviews' && <ReviewQueue selected={selected} onSelect={setSelected} />}
        {view === 'couriers' && <CourierAccounts />}
        {view === 'policies' && <RiskPolicies mode={policyMode} onModeChange={setPolicyMode} />}
        {view === 'usage' && <Usage />}
        {view === 'settings' && <Settings />}
      </main>
    </div>
  );
}

function Overview({ onOpenQueue }: { onOpenQueue(): void }) {
  return (
    <section className="content-stack">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Last 30 days</p>
          <h2>1,284 COD orders assessed</h2>
          <p>
            Ozzyl Guard identified 147 orders needing verification or review before courier handoff.
          </p>
        </div>
        <div className="hero-score">
          <strong>৳184,600</strong>
          <span>estimated return cost avoided</span>
        </div>
      </div>

      <div className="metric-grid">
        <Metric title="Assessment success" value="99.7%" note="API and worker completion" />
        <Metric title="Orders verified" value="93" note="OTP confirmed customers" />
        <Metric title="High-risk held" value="41" note="Pending merchant decision" />
        <Metric title="Courier freshness" value="91%" note="Observations within TTL" />
      </div>

      <div className="two-column">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Risk distribution</p>
              <h3>Decision mix</h3>
            </div>
            <span className="pill neutral">Engine v1.0.0</span>
          </div>
          <div className="distribution">
            <DistributionRow label="Allow" value={78} count="1,002" />
            <DistributionRow label="Verify" value={11} count="141" />
            <DistributionRow label="Review" value={6} count="77" />
            <DistributionRow label="Hold" value={4} count="51" />
            <DistributionRow label="Block" value={1} count="13" />
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
            {reviewItems.map((item) => (
              <div className="compact-row" key={item.id}>
                <div>
                  <strong>{item.orderId}</strong>
                  <span>
                    {item.phone} · {item.createdAt}
                  </span>
                </div>
                <RiskBadge decision={item.decision} score={item.score} />
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Provider health</p>
            <h3>Courier intelligence</h3>
          </div>
          <span className="pill success">Cache-first active</span>
        </div>
        <div className="provider-grid">
          <ProviderCard name="Steadfast" status="Connected" detail="Session refreshed 48m ago" />
          <ProviderCard name="Pathao" status="Planned" detail="Adapter contract prepared" />
          <ProviderCard name="RedX" status="Planned" detail="Adapter contract prepared" />
          <ProviderCard name="Outcome feedback" status="Active" detail="842 confirmed outcomes" />
        </div>
      </article>
    </section>
  );
}

function ReviewQueue({
  selected,
  onSelect,
}: {
  selected: ReviewItem | null;
  onSelect(item: ReviewItem): void;
}) {
  return (
    <section className="review-layout">
      <article className="panel queue-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Actionable assessments</p>
            <h3>{reviewItems.length} open reviews</h3>
          </div>
          <select aria-label="Filter review queue" defaultValue="all">
            <option value="all">All decisions</option>
            <option value="verify">Verify</option>
            <option value="review">Review</option>
            <option value="hold">Hold</option>
          </select>
        </div>
        <div className="queue-list">
          {reviewItems.map((item) => (
            <button
              className={selected?.id === item.id ? 'queue-row selected' : 'queue-row'}
              key={item.id}
              onClick={() => onSelect(item)}
              type="button"
            >
              <div>
                <strong>{item.orderId}</strong>
                <span>
                  {item.phone} · {item.createdAt}
                </span>
              </div>
              <RiskBadge decision={item.decision} score={item.score} />
            </button>
          ))}
        </div>
      </article>

      <article className="panel detail-panel">
        {selected ? (
          <>
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Assessment {selected.id}</p>
                <h3>{selected.orderId}</h3>
              </div>
              <RiskBadge decision={selected.decision} score={selected.score} />
            </div>
            <div className="detail-metrics">
              <Metric
                title="Confidence"
                value={`${Math.round(selected.confidence * 100)}%`}
                note="Evidence quality"
              />
              <Metric title="Courier orders" value="12" note="5 delivered · 4 returned" />
            </div>
            <div className="signal-list">
              <h4>Explainable signals</h4>
              {selected.signals.map((signal, index) => (
                <div className="signal" key={signal}>
                  <span>+{index === 0 ? 30 : index === 1 ? 22 : 10}</span>
                  <div>
                    <strong>{signal}</strong>
                    <small>Evidence recorded with engine and policy version.</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="action-grid">
              <button className="primary-button" type="button">
                Send OTP verification
              </button>
              <button className="secondary-button" type="button">
                Request advance payment
              </button>
              <button className="secondary-button" type="button">
                Allow with note
              </button>
              <button className="danger-button" type="button">
                Block this order
              </button>
            </div>
          </>
        ) : (
          <div className="empty-state">Select an assessment to inspect its evidence.</div>
        )}
      </article>
    </section>
  );
}

function CourierAccounts() {
  return (
    <section className="content-stack">
      <div className="section-intro">
        <div>
          <p className="eyebrow">Isolated provider workers</p>
          <h2>Courier accounts and sessions</h2>
          <p>
            Credentials and sessions are encrypted separately. Browser login never runs in checkout
            requests.
          </p>
        </div>
        <button className="primary-button" type="button">
          Connect courier account
        </button>
      </div>
      <article className="panel account-card">
        <div className="provider-logo">S</div>
        <div className="account-info">
          <strong>Steadfast · Ozzyl Demo Store</strong>
          <span>Connected with merchant-authorized session</span>
          <div className="account-meta">
            <span>Last success: 48 minutes ago</span>
            <span>Next refresh: in 4 hours</span>
            <span>Observation TTL: 12 hours</span>
          </div>
        </div>
        <div className="account-actions">
          <span className="pill success">Healthy</span>
          <button className="secondary-button" type="button">
            Refresh now
          </button>
          <button className="text-button" type="button">
            Reconnect
          </button>
        </div>
      </article>
      <article className="panel notice-panel">
        <strong>Provider degradation policy</strong>
        <p>
          A courier outage never marks a customer safe or fraudulent. Ozzyl Guard uses fresh cache,
          then acceptable stale data, and finally returns an explicit unknown result with
          verification guidance.
        </p>
      </article>
    </section>
  );
}

function RiskPolicies({
  mode,
  onModeChange,
}: {
  mode: 'balanced' | 'strict' | 'growth';
  onModeChange(mode: 'balanced' | 'strict' | 'growth'): void;
}) {
  return (
    <section className="content-stack">
      <div className="section-intro">
        <div>
          <p className="eyebrow">Versioned configuration</p>
          <h2>Store risk policy</h2>
          <p>Merchant actions can change without creating another scoring engine.</p>
        </div>
        <span className="pill neutral">Policy store_1_v3</span>
      </div>
      <div className="policy-grid">
        {(['growth', 'balanced', 'strict'] as const).map((policy) => (
          <button
            className={mode === policy ? 'policy-card selected' : 'policy-card'}
            key={policy}
            onClick={() => onModeChange(policy)}
            type="button"
          >
            <strong>
              {policy[0]?.toUpperCase()}
              {policy.slice(1)}
            </strong>
            <span>
              {policy === 'growth'
                ? 'More COD orders allowed, verification for uncertain customers.'
                : policy === 'strict'
                  ? 'Earlier holds and stronger advance-payment recommendations.'
                  : 'Balanced verification and review thresholds for most stores.'}
            </span>
          </button>
        ))}
      </div>
      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Decision thresholds</p>
            <h3>{mode} policy</h3>
          </div>
          <button className="primary-button" type="button">
            Publish new version
          </button>
        </div>
        <div className="threshold-grid">
          <Threshold label="Verify" value={mode === 'strict' ? 20 : 25} />
          <Threshold label="Review" value={mode === 'growth' ? 50 : 45} />
          <Threshold label="Hold" value={mode === 'strict' ? 55 : 65} />
          <Threshold label="Block" value={mode === 'strict' ? 75 : 80} />
        </div>
        <div className="form-grid">
          <label>
            Unknown customer action
            <select defaultValue="verify">
              <option value="verify">Require verification</option>
              <option value="review">Send to manual review</option>
            </select>
          </label>
          <label>
            High-value COD threshold
            <input defaultValue="10000" inputMode="numeric" />
          </label>
          <label>
            Hold action
            <select defaultValue="advance">
              <option value="advance">Request advance payment</option>
              <option value="review">Manual review only</option>
            </select>
          </label>
        </div>
      </article>
    </section>
  );
}

function Usage() {
  return (
    <section className="content-stack">
      <div className="metric-grid">
        <Metric title="Assessments used" value="1,284" note="of 5,000 this month" />
        <Metric title="Average latency" value="184ms" note="cache-first assessment" />
        <Metric title="Outcome coverage" value="65.6%" note="842 confirmed outcomes" />
        <Metric title="Webhook success" value="99.4%" note="retry worker active" />
      </div>
      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Monthly entitlement</p>
            <h3>Starter plan usage</h3>
          </div>
          <span className="pill neutral">25.7% used</span>
        </div>
        <div className="large-progress">
          <span style={{ width: '25.7%' }} />
        </div>
        <div className="usage-breakdown">
          <span>WooCommerce · 812</span>
          <span>Native multi-store · 391</span>
          <span>Custom API · 81</span>
        </div>
      </article>
      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Integration health</p>
            <h3>API clients</h3>
          </div>
        </div>
        <div className="compact-list">
          <IntegrationRow name="WooCommerce" environment="Live" lastUsed="2 minutes ago" />
          <IntegrationRow name="Ozzyl Commerce" environment="Live" lastUsed="5 minutes ago" />
          <IntegrationRow name="Staging tester" environment="Test" lastUsed="Yesterday" />
        </div>
      </article>
    </section>
  );
}

function Settings() {
  return (
    <section className="content-stack">
      <article className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Service credentials</p>
            <h3>API keys</h3>
          </div>
          <button className="primary-button" type="button">
            Create API key
          </button>
        </div>
        <div className="compact-list">
          <IntegrationRow
            name="WooCommerce production"
            environment="ozg_live_ab12cd34…"
            lastUsed="2 minutes ago"
          />
          <IntegrationRow
            name="Staging integration"
            environment="ozg_test_7ef901ab…"
            lastUsed="Yesterday"
          />
        </div>
        <p className="muted-note">
          Raw keys are shown once. Only hashes are stored by Ozzyl Guard.
        </p>
      </article>
      <div className="two-column">
        <article className="panel">
          <p className="eyebrow">Team</p>
          <h3>Organization members</h3>
          <div className="compact-list">
            <IntegrationRow name="Rahmatullah Zisan" environment="Owner" lastUsed="Active now" />
            <IntegrationRow name="Operations staff" environment="Reviewer" lastUsed="3 hours ago" />
          </div>
        </article>
        <article className="panel">
          <p className="eyebrow">Webhook endpoint</p>
          <h3>Outcome and alert delivery</h3>
          <label>
            HTTPS endpoint
            <input defaultValue="https://store.example.com/ozzyl/webhook" />
          </label>
          <button className="secondary-button" type="button">
            Send test event
          </button>
        </article>
      </div>
    </section>
  );
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

function ProviderCard({ name, status, detail }: { name: string; status: string; detail: string }) {
  return (
    <div className="provider-card">
      <div className="provider-logo">{name[0]}</div>
      <div>
        <strong>{name}</strong>
        <span>{detail}</span>
      </div>
      <span
        className={status === 'Connected' || status === 'Active' ? 'pill success' : 'pill neutral'}
      >
        {status}
      </span>
    </div>
  );
}

function RiskBadge({ decision, score }: { decision: ReviewItem['decision']; score: number }) {
  return (
    <span className={`risk-badge ${decision}`}>
      {decision} · {score}
    </span>
  );
}

function Threshold({ label, value }: { label: string; value: number }) {
  return (
    <label className="threshold">
      <span>{label}</span>
      <input defaultValue={String(value)} inputMode="numeric" />
    </label>
  );
}

function IntegrationRow({
  name,
  environment,
  lastUsed,
}: {
  name: string;
  environment: string;
  lastUsed: string;
}) {
  return (
    <div className="compact-row">
      <div>
        <strong>{name}</strong>
        <span>{lastUsed}</span>
      </div>
      <span className="pill neutral">{environment}</span>
    </div>
  );
}
