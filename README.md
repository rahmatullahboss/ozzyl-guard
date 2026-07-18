# Ozzyl Guard

Ozzyl Guard is a standalone, Bangladesh-focused COD fraud detection, courier intelligence, and order verification SaaS platform.

WooCommerce, Shopify, custom commerce applications, and Ozzyl Commerce / `multi-store-saas` use one versioned API and one canonical pure risk engine.

## Continue in a new chat or agent session

Start with [`tracker.yml`](tracker.yml). It contains the current milestone, source-of-truth document map, architecture invariants, verification evidence, remaining external dependencies, and ordered next tasks.

Then read:

1. [`AGENTS.md`](AGENTS.md)
2. [`docs/README.md`](docs/README.md)
3. [Current plan](.ai-bridge/current-plan.md)
4. [Implementation status](.ai-bridge/implementation-status.md)
5. [Decision log](.ai-bridge/decisions.md)
6. [Full continuation context](.ai-bridge/pro-context.md)

The full context bundle includes the important specifications, accepted ADRs, migration inventory, repository tree, and handoff state so a new agent does not need the previous chat history.

## Implementation status

The repository now contains a runnable MVP foundation:

- TypeScript npm/Turborepo monorepo
- PostgreSQL schema, ten append-only migrations, committed SHA-256 manifest, and non-null history checksums
- Argon2id user-password utilities and opaque user sessions
- Hash-only `ozg_test_` / `ozg_live_` API-key lifecycle utilities
- Organizations, stores, memberships, plans, usage events, audit events, and tenant scope
- Canonical `/v1/risk-assessments`, assessment read, outcome feedback, courier refresh, and OTP routes
- Deterministic explainable risk engine with explicit unknown/degraded handling
- Steadfast adapter, Playwright session driver, encrypted session storage, and runnable courier workers
- Transactional encrypted OTP delivery queue, tenant-scoped verification, and lease-owned private verification worker
- Provider-neutral OTP adapter boundary with hashing, expiry, attempt/rate limits, payload validation, and no synchronous provider I/O
- Durable signed webhook outbox/worker with retries, leases, encrypted secrets, and DNS-aware SSRF protection
- Merchant dashboard and platform operations admin applications
- WooCommerce plugin, Shopify adapter, custom JavaScript/server adapter, and native multi-store adapter
- Docker, Docker Compose, migration integrity verification, clean logical restore rehearsal, and least-privilege runtime-role verification in CI
- Authoritative organization/store revalidation across API keys, feature assembly, writes, dashboards, and secret-free webhook/verification administration
- Provider-neutral managed envelope v2 with per-record data keys, authenticated wrapped-key metadata, structured safe failures, legacy dual-read, and rotation/re-encryption primitives
- Native multi-store post-persist shadow integration with authoritative source-order revalidation, explicit store opt-in, immutable success/failure attempt evidence, tenant-scoped pilot reporting, and legacy-authoritative behavior

The following require external accounts or production decisions before live use:

- Authorized Steadfast merchant/test credentials and provider-terms review
- A selected KMS/vault adapter, component service identities, access auditing, runtime wiring, and an audited background rewrite before replacing local v1 encryption in production
- OTP provider selection and credentials
- Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
- Production queue/cache/observability providers
- Production source-platform hook deployment, explicit pilot-store selection, and outcome calibration before any enforcement or broad automatic blocking

See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).

## Repository structure

```text
apps/
  api/             Versioned API and PostgreSQL repositories
  dashboard/       Merchant operations dashboard
  admin/           Platform operations dashboard
workers/
  courier-session-worker/
  courier-sync-worker/
  verification-worker/
  event-worker/
packages/
  shared-types/
  risk-engine/
  courier-adapters/
  database/
  authentication/
  billing/
  verification/
  sdk/
integrations/
  woocommerce/
  shopify/
  custom-js/
  multi-store-saas/
docs/
.ai-bridge/
```

## Core rules

1. There is exactly one canonical risk engine.
2. The risk engine performs no network, database, scraping, queue, or provider calls.
3. Courier providers are isolated behind adapters and asynchronous workers.
4. Merchant data is always organization/store scoped.
5. Unknown customers are not automatically safe.
6. Provider failure does not automatically approve or block a customer.
7. Every assessment returns explainable signals and confidence.
8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
9. Applied migrations are immutable; changes require a new migration.
10. Every integration consumes the same canonical API response.

## Local setup

Prerequisites: Node.js 20+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.

```bash
npm install
npm run db:check
npm run db:migrate
npm run db:integrity
# After creating a separate non-owner PostgreSQL login outside the app:
DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
npm run bootstrap -w @ozzyl/api
npm run dev:api
```

Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.

The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.

Merchant dashboard:

```bash
npm run dev:dashboard
```

Platform admin:

```bash
npm run dev -w @ozzyl/admin
```

Private workers:

```bash
npm run start -w @ozzyl/courier-session-worker
npm run start -w @ozzyl/courier-sync-worker
npm run start -w @ozzyl/event-worker
# Requires a reviewed provider module/account in addition to the standard secrets:
npm run start -w @ozzyl/verification-worker
```

## Docker Compose

Provide the required variables in your shell or an ignored Compose environment file, then run:

```bash
docker compose up --build
```

The Compose topology separates PostgreSQL, migrations, API, Playwright session, courier sync, and event workers. The verification worker is opt-in with `docker compose --profile verification up --build` because a reviewed provider module/account is not bundled. Dashboard/admin static hosting is deployment-platform dependent.

## Verification commands

```bash
npm run format:check
npm run lint
npm run db:check
npm run db:integrity
# Requires migration-owner credentials and an externally created non-owner runtime role:
DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
# Requires a separately created empty target database:
RESTORE_DATABASE_URL=postgresql://... RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true npm run db:restore-rehearsal
npm run typecheck
npm run test
npm run build
npm audit --audit-level=high
php -l integrations/woocommerce/ozzyl-guard.php
```

## Canonical assessment response

```json
{
  "success": true,
  "assessment_id": "ras_123",
  "risk_score": 72,
  "risk_level": "high",
  "decision": "verify",
  "confidence": 0.82,
  "signals": [
    {
      "code": "low_delivery_rate",
      "score": 30,
      "description": "Customer delivery rate is 28%"
    }
  ],
  "courier_summary": {
    "total": 12,
    "delivered": 5,
    "returned": 4,
    "cancelled_before_shipping": 3
  }
}
```

## Documentation

- [System architecture](docs/architecture/system-architecture.md)
- [Public API specification](docs/api/api-specification.md)
- [Database design](docs/database/database-design.md)
- [Courier intelligence](docs/courier/courier-intelligence.md)
- [Risk engine](docs/risk-engine/risk-engine.md)
- [Integrations](docs/integrations/integrations.md)
- [Security and privacy](docs/security/security-privacy.md)
- [Testing strategy](docs/testing/testing-strategy.md)
- [Operations](docs/operations/operations-observability.md)
- [Roadmap](docs/roadmap/implementation-roadmap.md)
- [ADRs](docs/adr/README.md)

Before changing code, read `AGENTS.md`, the relevant domain documents, `.ai-bridge/current-plan.md`, `.ai-bridge/implementation-status.md`, and accepted ADRs.
