# System Architecture

## Proposed monorepo

```text
ozzyl-guard/
├── apps/
│   ├── api/
│   ├── dashboard/
│   └── admin/
├── workers/
│   ├── courier-session-worker/
│   ├── courier-sync-worker/
│   ├── verification-worker/
│   └── event-worker/
├── packages/
│   ├── risk-engine/
│   ├── courier-adapters/
│   ├── database/
│   ├── authentication/
│   ├── verification/
│   ├── billing/
│   ├── shared-types/
│   └── sdk/
├── integrations/
│   ├── woocommerce/
│   ├── shopify/
│   ├── custom-js/
│   └── multi-store-saas/
├── docs/
└── .ai-bridge/
```

## Validated technology direction

- TypeScript on Node.js 20+
- npm workspaces and Turborepo, matching the existing SaaS repository where practical
- PostgreSQL for production relational data
- Drizzle ORM/migrations unless a later ADR selects another ORM
- React Router/React for dashboard reuse where beneficial
- Vitest for unit/contract tests and Playwright for browser/session/E2E tests
- Queue-backed workers; deployment provider remains an explicit pending ADR

This direction reuses team familiarity without importing Cloudflare D1-specific data design into the standalone service.

## Main components

### API application

Responsibilities:

- Validate requests
- Authenticate API keys or user/service sessions
- Authorize organization/store scopes
- Apply rate limits and atomically reserve usage
- Call application services
- Return canonical responses

It must not contain scoring formulas, provider-specific scraping logic, or direct credential access.

### Dashboard application

Responsibilities:

- Merchant onboarding
- Courier account connection/reconnect
- Policy configuration
- Review queue
- Usage and savings reports
- Team, API key, and billing management

### Courier session worker

Responsibilities:

- Login to courier portals with merchant authorization
- Refresh session cookies/tokens
- Validate login/session health
- Encrypt and store session material
- Emit structured failure and reconnect events

### Courier sync worker

Responsibilities:

- Fetch phone-level courier history
- Sync shipment outcomes
- Normalize provider responses
- Cache observations
- Apply provider rate limits, retries, and circuit breakers

### Risk engine

A deterministic, versioned, pure package that accepts normalized features and returns:

```ts
{
  score: number,
  confidence: number,
  riskLevel: 'low' | 'moderate' | 'high' | 'critical' | 'unknown',
  decision: 'allow' | 'verify' | 'review' | 'hold' | 'block',
  signals: RiskSignal[],
  engineVersion: string,
  policyVersion: string
}
```

### Verification worker

Responsibilities:

- OTP generation and delivery
- OTP verification
- IVR orchestration later
- Delivery receipt handling
- Rate limits and abuse protection

## Courier boundary

```text
Courier Session Worker
  → encrypted session store
  → Steadfast Adapter
  → Normalized Courier Observation
  → feature assembly
  → Canonical Risk Engine
```

The risk engine never imports Playwright, provider clients, fetch libraries, database clients, queues, or credential stores.

## Synchronous assessment flow

1. Receive a risk-assessment request.
2. Authenticate key and resolve organization/store scope.
3. Validate and normalize phone/order data.
4. Atomically enforce idempotency, rate limit, and entitlement.
5. Load cached courier observations and other features.
6. Call the pure risk engine.
7. Persist assessment and signals transactionally.
8. Return canonical decision and degraded/freshness metadata.
9. Queue stale courier refresh when appropriate.

## Cache strategy

- Courier phone observation: 12–24 hours depending on provider/source.
- Session health/material: provider-specific, generally refreshed every 4–6 hours.
- Merchant policy: short cache with explicit invalidation/version.
- Assessment result: tied to idempotency and order snapshot, not indefinite phone caching.

## Failure behavior

- No fresh courier data: return unknown/low confidence and recommend verification.
- Provider timeout: use last-known observation only within documented stale tolerance.
- Risk feature/service failure: return explicit degraded state, never silently safe.
- Verification provider failure: record delivery failure and queue/retry as policy allows.
- Database/entitlement uncertainty: fail the request safely rather than produce unmetered or cross-tenant results.
