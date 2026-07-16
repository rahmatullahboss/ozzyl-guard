import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const incidents = [
  ['Steadfast reconnect required', '3 merchant accounts', 'High'],
  ['Courier queue delay', 'p95 queue lag 48 seconds', 'Medium'],
  ['Outcome feedback coverage', '7 stores below 40%', 'Medium'],
] as const;

function AdminApp() {
  return (
    <main className="admin-shell">
      <header>
        <div>
          <p>OZZYL GUARD PLATFORM</p>
          <h1>Operations Admin</h1>
        </div>
        <span>Production · Asia/Dhaka</span>
      </header>
      <section className="stats">
        <Stat label="Active organizations" value="148" detail="312 stores" />
        <Stat label="Assessments today" value="24,681" detail="99.72% successful" />
        <Stat label="Degraded results" value="2.8%" detail="mostly stale courier data" />
        <Stat label="Worker backlog" value="38" detail="oldest job 48s" />
      </section>
      <section className="grid">
        <article>
          <div className="heading">
            <h2>Operational incidents</h2>
            <button type="button">Open runbooks</button>
          </div>
          {incidents.map(([title, detail, severity]) => (
            <div className="row" key={title}>
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
              <span className={severity.toLowerCase()}>{severity}</span>
            </div>
          ))}
        </article>
        <article>
          <div className="heading">
            <h2>Risk policy rollout</h2>
            <span className="healthy">Healthy</span>
          </div>
          <div className="policy">
            <strong>Engine 1.0.0</strong>
            <span>100% of assessments</span>
          </div>
          <div className="bar">
            <i style={{ width: '100%' }} />
          </div>
          <div className="policy">
            <strong>Default policy v1</strong>
            <span>132 stores</span>
          </div>
          <div className="bar">
            <i style={{ width: '89%' }} />
          </div>
          <p className="note">Automatic blocking remains disabled for uncalibrated merchants.</p>
        </article>
      </section>
      <section className="grid">
        <article>
          <div className="heading">
            <h2>Provider health</h2>
          </div>
          <Provider
            name="Steadfast session login"
            state="Operational"
            metric="97.8% refresh success"
          />
          <Provider name="Steadfast observations" state="Operational" metric="184ms p95" />
          <Provider name="OTP provider" state="Not configured" metric="Provider ADR pending" />
        </article>
        <article>
          <div className="heading">
            <h2>Security controls</h2>
          </div>
          <Provider name="Secret redaction" state="Passing" metric="No raw secret findings" />
          <Provider name="Tenant isolation" state="Passing" metric="API contract tests" />
          <Provider name="Migration integrity" state="Passing" metric="5 ordered migrations" />
        </article>
      </section>
    </main>
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
  return (
    <div className="row">
      <div>
        <strong>{name}</strong>
        <small>{metric}</small>
      </div>
      <span className="healthy">{state}</span>
    </div>
  );
}

const root = document.getElementById('root');
if (!root) throw new Error('Admin root element was not found');
createRoot(root).render(
  <StrictMode>
    <AdminApp />
  </StrictMode>,
);
