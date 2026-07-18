# Ozzyl Guard — Selected Source Shadow Pilot Continuation Context

> Refresh pending (2026-07-18): this GitHub-only milestone could not run the repository-local exporter. Canonical tracker, plan, status, decisions, ADR 0012, runbook, tests, and migration evidence are current through feature merge `2d686206456960bf9b3e14571e3bf2c9169d94f9`; regenerate this bundle locally before relying on embedded repository snapshots.

Generated: 2026-07-18T04:10:13.573Z
Workspace: /Users/rahmatullahzisan/Desktop/Dev/Ozzyl Guard
Workspace ID: ws_dfece19fe5040cc4a5675d02
Write mode: workspace
Bash mode: full
Tool mode: full

Purpose: paste this bundle into a high-context ChatGPT model when that model cannot call the CodexPro MCP tools directly.
Instruction for ChatGPT: use this as repository context, produce a narrow Codex execution plan, and avoid inventing files or runtime facts not shown here.

## Repository Tree

.
├── apps/
│   ├── admin/
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   └── styles.css
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── api/
│   │   ├── src/
│   │   │   ├── bootstrap.ts
│   │   │   ├── browser.test.ts
│   │   │   ├── browser.ts
│   │   │   ├── index.test.ts
│   │   │   ├── index.ts
│   │   │   ├── native-shadow.test.ts
│   │   │   ├── postgres-administration.test.ts
│   │   │   ├── postgres-administration.ts
│   │   │   ├── postgres-browser.test.ts
│   │   │   ├── postgres-concurrency.test.ts
│   │   │   ├── postgres-dashboard-isolation.test.ts
│   │   │   ├── postgres-isolation.test.ts
│   │   │   ├── postgres-native-shadow-pilot.test.ts
│   │   │   ├── postgres-native-shadow-pilot.ts
│   │   │   ├── postgres-shadow-comparisons.test.ts
│   │   │   ├── postgres-shadow-comparisons.ts
│   │   │   ├── postgres-verification.ts
│   │   │   ├── postgres.ts
│   │   │   └── server.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── dashboard/
│       ├── src/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── styles.css
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── codexpro/
│   ├── docs/
│   │   ├── images/
│   │   │   ├── chatgpt-plugin-details.png
│   │   │   └── chatgpt-plugins-add.png
│   │   ├── superpowers/
│   │   │   ├── plans/
│   │   │   └── specs/
│   │   ├── favicon.svg
│   │   ├── index.html
│   │   ├── og.svg
│   │   ├── script.js
│   │   ├── star.svg
│   │   ├── styles.css
│   │   └── zh.html
│   ├── scripts/
│   │   ├── analysis-cli-smoke.mjs
│   │   ├── analysis-smoke.mjs
│   │   ├── codexpro.mjs
│   │   ├── doctor-smoke.mjs
│   │   ├── execute-handoff-smoke.mjs
│   │   ├── http-smoke.mjs
│   │   ├── pro-apply.mjs
│   │   ├── pro-bundle.mjs
│   │   ├── pro-smoke.mjs
│   │   ├── release-guard-smoke.mjs
│   │   ├── release-guard.mjs
│   │   ├── release-pack.mjs
│   │   ├── release-publish.mjs
│   │   ├── settings-smoke.mjs
│   │   ├── smoke.mjs
│   │   ├── stress.mjs
│   │   └── widget-smoke.mjs
│   ├── src/
│   │   ├── analysis/
│   │   │   ├── cache.ts
│   │   │   ├── classify.ts
│   │   │   ├── extract.ts
│   │   │   ├── graph.ts
│   │   │   ├── impact.ts
│   │   │   ├── index.ts
│   │   │   ├── inventory.ts
│   │   │   ├── providers.ts
│   │   │   ├── rank.ts
│   │   │   └── types.ts
│   │   ├── bashOps.ts
│   │   ├── capabilitiesOps.ts
│   │   ├── codexSessions.ts
│   │   ├── config.ts
│   │   ├── fsOps.ts
│   │   ├── gitOps.ts
│   │   ├── guard.ts
│   │   ├── http.ts
│   │   ├── proContext.ts
│   │   ├── profileStore.ts
│   │   ├── redact.ts
│   │   ├── searchOps.ts
│   │   ├── server.ts
│   │   ├── stdio.ts
│   │   ├── toolCardWidget.ts
│   │   └── workspaceOps.ts
│   ├── AGENTS.example.md
│   ├── CHANGELOG.md
│   ├── CHATGPT_PROMPT.md
│   ├── CODEX_PROMPT.md
│   ├── config.example.env
│   ├── CONTRIBUTING.md
│   ├── design.md
│   ├── DOMAIN_SETUP.md
│   ├── FAQ_ZH.md
│   ├── FAQ.md
│   ├── LICENSE
│   ├── package-lock.json
│   ├── package.json
│   ├── PUBLIC_LAUNCH_CHECKLIST.md
│   ├── README_ZH.md
│   ├── README.md
│   ├── SECURITY.md
│   └── tsconfig.json
├── config/
│   └── environment.example
├── docs/
│   ├── adr/
│   │   ├── 0001-standalone-service.md
│   │   ├── 0002-courier-adapter-boundary.md
│   │   ├── 0003-keep-steadfast-session-scraper.md
│   │   ├── 0004-foundation-technology-direction.md
│   │   ├── 0005-browser-session-authentication.md
│   │   ├── 0006-production-deployment-topology.md
│   │   ├── 0007-managed-postgresql-production-baseline.md
│   │   ├── 0008-postgresql-first-durable-work-and-cache.md
│   │   ├── 0009-managed-secrets-and-kms-envelope-encryption.md
│   │   ├── 0010-vendor-neutral-production-observability.md
│   │   ├── 0011-selected-source-shadow-pilot.md
│   │   ├── README.md
│   │   └── template.md
│   ├── api/
│   │   └── api-specification.md
│   ├── architecture/
│   │   ├── copy-map-from-multi-store-saas.md
│   │   ├── project-overview.md
│   │   ├── repository-audit.md
│   │   └── system-architecture.md
│   ├── courier/
│   │   └── courier-intelligence.md
│   ├── database/
│   │   └── database-design.md
│   ├── integrations/
│   │   └── integrations.md
│   ├── operations/
│   │   ├── deployment.md
│   │   ├── development-environment.md
│   │   └── operations-observability.md
│   ├── risk-engine/
│   │   └── risk-engine.md
│   ├── roadmap/
│   │   ├── implementation-roadmap.md
│   │   ├── initial-backlog.md
│   │   └── risk-register.md
│   ├── security/
│   │   └── security-privacy.md
│   ├── testing/
│   │   └── testing-strategy.md
│   └── README.md
├── integrations/
│   ├── custom-js/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── multi-store-saas/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── shopify/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── woocommerce/
│       └── ozzyl-guard.php
├── packages/
│   ├── authentication/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── billing/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── courier-adapters/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── database/
│   │   ├── migrations/
│   │   │   ├── 0001_foundation.sql
│   │   │   ├── 0002_courier.sql
│   │   │   ├── 0003_risk.sql
│   │   │   ├── 0004_verification_events.sql
│   │   │   ├── 0005_durable_operations.sql
│   │   │   ├── 0006_browser_access.sql
│   │   │   ├── 0007_worker_leases.sql
│   │   │   ├── 0008_webhook_delivery_leases.sql
│   │   │   ├── 0009_verification_delivery_queue.sql
│   │   │   ├── 0010_native_shadow_comparisons.sql
│   │   │   ├── 0011_native_shadow_pilot.sql
│   │   │   └── manifest.json
│   │   ├── src/
│   │   │   ├── apply-runtime-grants.ts
│   │   │   ├── check-database-integrity.ts
│   │   │   ├── check-migrations.ts
│   │   │   ├── index.ts
│   │   │   ├── migrate.ts
│   │   │   ├── migration-integrity.postgres.test.ts
│   │   │   ├── migration-integrity.test.ts
│   │   │   ├── migration-integrity.ts
│   │   │   ├── restore-rehearsal.ts
│   │   │   ├── runtime-role.postgres.test.ts
│   │   │   ├── runtime-role.test.ts
│   │   │   ├── runtime-role.ts
│   │   │   └── schema.ts
│   │   ├── drizzle.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── encryption/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── risk-engine/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── sdk/
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── native-shadow.test.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── shared-types/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── verification/
│       ├── src/
│       │   ├── index.test.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
├── scripts/
│   └── check-architecture.mjs
├── workers/
│   ├── courier-session-worker/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   ├── index.ts
│   │   │   └── runner.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── courier-sync-worker/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   ├── index.ts
│   │   │   ├── postgres.test.ts
│   │   │   ├── postgres.ts
│   │   │   └── runner.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── event-worker/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   ├── index.ts
│   │   │   ├── postgres.test.ts
│   │   │   ├── postgres.ts
│   │   │   └── runner.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── verification-worker/
│       ├── src/
│       │   ├── index.test.ts
│       │   ├── index.ts
│       │   ├── payload.test.ts
│       │   ├── payload.ts
│       │   ├── postgres.test.ts
│       │   ├── postgres.ts
│       │   └── runner.ts
│       ├── package.json
│       └── tsconfig.json
├── AGENTS.md
├── docker-compose.yml
├── Dockerfile
├── Dockerfile.playwright
├── eslint.config.js
├── package-lock.json
├── package.json
├── README.md
├── tracker.yml
├── tsconfig.base.json
├── turbo.json
└── vitest.config.ts

## Git Status

```text
## docs/source-shadow-pilot-evidence
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M .ai-bridge/pro-context.md
 M README.md
 M docs/README.md
 M tracker.yml
```

## Recent Commits

```text
c478170 (HEAD -> docs/source-shadow-pilot-evidence, origin/main, main) feat: wire selected source shadow pilot (#20)
de6f1eb docs: record native shadow verification evidence
446d6eb feat: add native shadow rollout controls
e1875b9 docs: record managed envelope verification evidence
ee24aa7 feat: add provider-neutral managed envelope encryption
8f869e3 docs: record runtime role isolation verification evidence
845749c test: harden PostgreSQL runtime role and tenant isolation
e787b90 docs: record PostgreSQL restore integrity verification evidence (#12)
```

## Existing AI Bridge Context

--- .ai-bridge/current-plan.md ---
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-18
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and eleven production-hardening slices are complete:
  8 |
  9 | 1. dashboard/admin browser authentication with live PostgreSQL data and tenant revalidation;
 10 | 2. accepted provider-neutral infrastructure ADRs for deployment, managed PostgreSQL, durable work/cache, KMS envelope encryption, and observability;
 11 | 3. PostgreSQL concurrency and idempotency hardening for usage reservations, assessments, outcomes, and tenant-scoped operation records;
 12 | 4. lease-owned PostgreSQL courier-worker claims with stale-job recovery, authoritative account scope, and migration replay verification;
 13 | 5. transactional PostgreSQL webhook outbox emission and a lease-owned event worker with encrypted signing-secret access and DNS-aware SSRF controls;
 14 | 6. transactional encrypted OTP delivery queues, tenant-scoped database verification, and a lease-owned private verification worker with no provider I/O in API requests;
 15 | 7. SHA-256-bound migration history integrity and a clean PostgreSQL logical backup/restore rehearsal with schema, data, sequence, history, and replay verification;
 16 | 8. authoritative tenant-scope revalidation across API keys, feature assembly, assessment/outcome writes, dashboards and administration, plus an explicit least-privilege PostgreSQL runtime-role grant boundary;
 17 | 9. provider-neutral managed envelope v2 with random per-record data keys, authenticated wrapped-key metadata, structured fail-closed errors, explicit legacy dual-read, and key-version re-encryption primitives;
 18 | 10. native multi-store `off`/deterministic-shadow rollout controls with legacy-authoritative behavior and tenant-scoped immutable comparison evidence;
 19 | 11. selected-source post-persist shadow integration with authoritative source-order reload, explicit store opt-in, immutable sampled-attempt evidence, and tenant-scoped pilot reporting.
 20 |
 21 | Concrete provider selection and provisioning remain external production work.
 22 |
 23 | ## Completed
 24 |
 25 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 26 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 27 | - [x] Canonical shared API/error/event contracts
 28 | - [x] PostgreSQL/Drizzle schema and eleven append-only migrations
 29 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 30 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 31 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 32 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 33 | - [x] Courier adapter contract and Steadfast normalized adapter
 34 | - [x] Playwright Steadfast session driver with structured errors
 35 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 36 | - [x] Runnable PostgreSQL courier session and observation workers
 37 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 38 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 39 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 40 | - [x] API OTP send returns queued work without provider network I/O
 41 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 42 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 43 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 44 | - [x] Explicit-role platform admin with live global operations data
 45 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 46 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 47 | - [x] Architecture dependency-boundary CI guard
 48 | - [x] Provider-neutral production deployment topology ADR
 49 | - [x] Managed PostgreSQL production baseline ADR
 50 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 51 | - [x] Managed secrets and KMS envelope-encryption ADR
 52 | - [x] Vendor-neutral OpenTelemetry observability ADR
 53 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 54 | - [x] Concurrent usage reservations cannot exceed the plan limit
 55 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 56 | - [x] Concurrent outcome writes resolve as one insert and one replay
 57 | - [x] Operation idempotency records remain isolated by organization and store
 58 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 59 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 60 | - [x] Expired or previous courier owners cannot complete or fail jobs
 61 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 62 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 63 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 64 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 65 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 66 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 67 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 68 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 69 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 70 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 71 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 72 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 73 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 74 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 75 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 76 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 77 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 78 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 79 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 80 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 81 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 82 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 83 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 84 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 85 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 86 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
 87 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
 88 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
 89 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
 90 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
 91 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
 92 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
 93 |
 94 | ## Verified baseline
 95 |
 96 | - Formatting check: passed
 97 | - ESLint with zero warnings: passed
 98 | - Eleven migration files ordered/non-empty/non-destructive: passed
 99 | - First migration apply and immediate migration replay: passed
100 | - Architecture import boundaries: passed
101 | - Typecheck: 19 of 19 workspaces passed
102 | - Test/build dependency tasks: 28 of 28 passed
103 | - Repository assertions: 120 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, seven migration-integrity tests, seven tenant/admin isolation tests, six runtime-role policy/permission tests, eleven envelope-encryption tests, twenty-eight native-shadow adapter/API/SDK/browser/PostgreSQL tests, transactional queues/outbox coverage, and DNS SSRF tests
104 | - Production builds: 19 of 19 workspaces passed
105 | - WooCommerce PHP syntax: passed
106 | - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
107 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
108 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
109 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
110 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
111 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
112 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
113 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
114 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
115 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
116 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
117 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
118 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
119 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
120 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
121 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
122 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
123 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
124 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
125 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
126 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
127 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
128 | - Canonical documentation links before this slice: zero known broken internal links
129 | - `tracker.yml` YAML structure remains valid
130 | - Prohibited source-pattern search: no matches
131 |
132 | The repository-local continuation exporter was run after the feature merge from canonical `main`; `.ai-bridge/pro-context.md`, tracker, plan, status, decisions, and milestone documentation are refreshed.
133 |
134 | ## Next production milestone
135 |
136 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
137 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
138 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
139 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
140 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
141 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
142 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
143 |
144 | ## External blockers
145 |
146 | - Authorized Steadfast merchant/test credentials
147 | - Steadfast provider-terms and merchant-authorization review
148 | - Deployment platform, account, primary region, and budget
149 | - Managed PostgreSQL provider and service tier
150 | - Managed secret store and KMS/vault provider
151 | - Observability backend and retention policy
152 | - OTP provider account and credentials
153 | - Production account recovery/MFA or managed identity-provider decision
154 | - Repository visibility correction from currently reported public to expected private
155 | - Pilot outcome data for false-positive/false-negative calibration
156 |
157 | ## Non-negotiable continuation rules
158 |
159 | - Do not add a second risk engine.
160 | - Do not call providers from the risk engine or synchronous checkout path.
161 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
162 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
163 | - Do not use API keys as dashboard user sessions.
164 | - Require organization/store scope in all merchant repositories, events, and jobs.
165 | - Add new migrations; never edit applied migrations.
166 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
167 | - Keep Redis/cache state non-authoritative.
168 | - Keep unknown/provider failure explicit and policy-controlled.
169 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
170 |

--- .ai-bridge/agent-status.md ---
1 | # Agent Status
2 |
3 | No implementation agent status written yet.
4 |

--- .ai-bridge/implementation-diff.patch ---
1 |

--- .ai-bridge/codex-status.md ---
1 | # Codex Status
2 |
3 | No Codex status written yet.
4 |

--- .ai-bridge/decisions.md ---
 1 | # Ozzyl Guard — Active Decisions
 2 |
 3 | Updated: 2026-07-18
 4 |
 5 | ## Accepted decisions
 6 |
 7 | 1. Ozzyl Guard is a standalone SaaS/service. `multi-store-saas` becomes a client, not the canonical implementation host.
 8 | 2. There is one canonical, pure, versioned risk engine.
 9 | 3. The risk engine performs no network, database, queue, browser, filesystem, credential-store, or provider calls.
10 | 4. Courier access is isolated behind provider adapters and asynchronous session/sync workers.
11 | 5. The existing Steadfast Playwright session approach remains for the pilot, with security and reliability hardening.
12 | 6. Foundation stack: Node.js 20+, TypeScript, npm workspaces, Turborepo, PostgreSQL, Drizzle, Vitest, and Playwright.
13 | 7. Public API begins at `/v1`; the canonical assessment endpoint is `POST /v1/risk-assessments`.
14 | 8. API key environments use `ozg_test_` and `ozg_live_`. Raw keys are displayed once and stored only as hashes.
15 | 9. Dashboard user sessions are independent from API keys.
16 | 10. Merchant data uses strict organization/store isolation; no `storeId = 0` or optional-scope shortcut.
17 | 11. Unknown/no-data customers return explicit unknown/low-confidence state and normally recommend verification; they are not automatically safe.
18 | 12. Provider failure does not automatically allow or block. It produces explicit degraded/freshness metadata and policy-controlled behavior.
19 | 13. Outcome feedback is part of the first MVP.
20 | 14. WooCommerce, Shopify, custom, and native integrations use the same canonical request/response contract.
21 | 15. Applied migrations are immutable and changes require new migrations.
22 | 16. `fraudchecker.link` may exist only as an optional, identified fallback adapter; it is never the core source or an engine dependency.
23 | 17. Pilot browser access uses the existing Argon2id and opaque hash-only PostgreSQL session primitives, `HttpOnly` cookies, CSRF protection, repository-level tenant revalidation, and an explicit `platform_admin` role; service API keys remain separate.
24 | 18. Production uses a provider-neutral managed application/container topology with independently deployed API, static UIs, migration job, and private workers; Playwright remains isolated.
25 | 19. Production uses managed PostgreSQL 16+ in the primary application region. PostgreSQL remains authoritative for tenant data, browser sessions, idempotency, usage, audit records, and durable work.
26 | 20. PostgreSQL is the pilot durable job/outbox source of truth. A Redis-compatible service is optional for ephemeral distributed coordination and must not own durable jobs or security-critical state.
27 | 21. Production secrets use a managed secret store, and persisted sensitive records use managed KMS/vault envelope encryption with fail-closed decryption and no plaintext fallback.
28 | 22. Production observability uses structured JSON logs and OpenTelemetry-compatible metrics/traces at application and worker boundaries; telemetry does not add external I/O to the risk engine.
29 | 23. PostgreSQL worker jobs use atomic `SKIP LOCKED` claims, explicit worker ownership, expiring leases, ownership-checked state transitions, and authoritative organization/store/provider scope derived from relational account data. Exhausted stale jobs fail closed instead of remaining permanently claimed.
30 | 24. Webhook deliveries are emitted as outbox rows inside the same PostgreSQL transaction as the newly persisted assessment or outcome. API/checkout paths never perform synchronous merchant webhook network calls.
31 | 25. Webhook deliveries persist explicit organization/store scope and canonical event payloads. Endpoint signing secrets remain encrypted at rest and are decrypted only inside the event worker with endpoint-bound authenticated context.
32 | 26. Webhook workers require HTTPS destinations without embedded credentials, reject local/non-public literal addresses, validate all DNS results before fetch, reject redirects, and rely on production egress policy as an additional DNS-rebinding boundary.
33 | 27. The reusable local AES-256-GCM envelope implementation lives in `@ozzyl/encryption`; provider-specific managed KMS implementation will supersede key handling without changing caller boundaries.
34 | 28. OTP send requests create the verification session, OTP hash, and job-context-encrypted delivery payload inside one PostgreSQL transaction. The API returns queued state and performs no OTP provider network call.
35 | 29. Verification delivery jobs use atomic `SKIP LOCKED` claims, explicit owners, expiring leases, owner-checked transitions, stale recovery, bounded retry, and terminal failure. Scope mismatch fails both the job and authoritative session closed.
36 | 30. The private verification worker decrypts job material only with `verification-job:<job-id>` context and validates organization, store, purpose, phone HMAC, and OTP hash before provider I/O. The production provider adapter/account remains an explicit external selection.
37 | 31. Ordered SQL migrations are bound to `packages/database/migrations/manifest.json` with SHA-256 checksums. The migration history stores a non-null checksum, unknown/gapped/mismatched history fails closed, and legacy name-only rows may be adopted only from the committed manifest while one migration session holds an advisory lock.
38 | 32. Restore rehearsal requires an explicitly separate clean target database. It uses credential-safe `pg_dump`/`pg_restore`, compares schema, table counts or opt-in full data hashes, sequence state, migration history, and replay, and never drops or overwrites the source database. Managed-provider PITR validation remains separate production work.
39 | 33. API keys, feature assembly, assessment/outcome writes, dashboards, and tenant administration revalidate organization/store ownership through active relational records; caller-supplied matching identifiers alone are never authoritative.
40 | 34. Webhook and verification administration require an active owner/admin membership for the requested active organization/store. Administrative records are purposefully secret-free and never return encrypted signing secrets, OTP hashes, encrypted delivery payloads, or raw phone data.
41 | 35. Production migrations and runtime queries use different PostgreSQL identities. An externally created non-owner runtime `LOGIN` without elevated attributes or inherited memberships receives only an explicit reviewed current-table DML policy from the migration owner; it cannot access migration history, DELETE, DDL, database/schema/relation ownership, or role management, and grants are reapplied after each migration release.
42 | 36. Managed envelope v2 uses one random 32-byte data-encryption key per record, AES-256-GCM, a SHA-256 record-context digest, authenticated wrapped-key metadata, and a provider-neutral asynchronous wrap/unwrap contract. Plaintext data keys are zeroed after use; context mismatch, provider outage, malformed metadata, unsupported providers, and missing legacy keys fail closed with structured non-secret codes. Production writes remain on local v1 until a reviewed KMS adapter and service identities are provisioned; legacy dual-read is explicit and temporary.
43 | 37. The native `multi-store-saas` rollout begins with `off` and deterministic `shadow` modes only. The legacy result remains the effective decision even when Guard recommends block. Successful comparisons are persisted through a tenant-scoped idempotent API that derives Guard values from the referenced assessment; Guard or persistence failure returns a safe code and never changes checkout behavior. Enforcement requires a later reviewed rollout decision backed by pilot outcomes.
44 | 38. The selected source integration invokes shadow only after an authoritative persisted-order reload and exact organization/store/order revalidation. PostgreSQL rollout state defaults to `off`; only a CSRF-protected active owner/admin can opt in an exact store. Every selected success, timeout, assessment failure, or comparison persistence failure produces tenant-scoped immutable attempt evidence and bounded secret-free reporting. No enforcement mode exists, and production deployment remains limited to explicitly selected pilot stores.
45 |
46 | ## Source SaaS conflict resolutions
47 |
48 | | Conflict                                                                 | Decision                                                                                   |
49 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
50 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
51 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
52 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
53 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
54 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
55 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
56 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
57 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
58 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
59 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
60 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
61 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
62 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
63 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
64 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
65 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
66 |
67 | ## Approved reuse scope
68 |
69 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
70 | - Bangladesh phone normalization after tests
71 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
72 | - WooCommerce settings/order hook/admin display skeleton
73 | - API-key hash/display-prefix and usage-event concepts
74 |
75 | No product source code was copied during Phase 0.
76 |
77 | ## Pending decisions
78 |
79 | These require provider selection, provisioning, or separate ADRs before production implementation:
80 |
81 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
82 | - Specific deployment platform, account, and primary region
83 | - Specific managed PostgreSQL provider and service tier
84 | - Specific managed secret store and KMS/vault provider
85 | - Specific observability backend and retention policy
86 | - Redis-compatible cache provider when distributed coordination is required
87 | - Dedicated broker only if measured scale requires superseding ADR 0008
88 | - Worker scheduler/runtime implementation on the selected deployment platform
89 | - OTP provider
90 |
91 | ## External requirements
92 |
93 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
94 |
95 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
96 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, .ai-bridge/pro-context.md, README.md, docs/README.md, tracker.yml
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: tracker.yml, AGENTS.md, README.md, docs/README.md, .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, .ai-bridge/decisions.md, docs/adr/0011-selected-source-shadow-pilot.md, docs/api/api-specification.md, docs/database/database-design.md, docs/integrations/integrations.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, docs/operations/operations-observability.md, integrations/multi-store-saas/src/index.ts, apps/api/src/postgres-native-shadow-pilot.ts, packages/database/migrations/0011_native_shadow_pilot.sql, packages/shared-types/src/index.ts
Extra globs: none
Files included below: AGENTS.md, docs/README.md, README.md, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, apps/api/src/postgres-native-shadow-pilot.ts, docs/adr/0011-selected-source-shadow-pilot.md, docs/api/api-specification.md, docs/database/database-design.md, docs/integrations/integrations.md, docs/operations/operations-observability.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, integrations/multi-store-saas/src/index.ts, packages/database/migrations/0011_native_shadow_pilot.sql, packages/shared-types/src/index.ts, tracker.yml, eslint.config.js, package.json, turbo.json

## File Contents

### AGENTS.md

Bytes: 4674
SHA-256: 3aee61e09717ce9f5dba2363b9d7a00f99bbaa8cf8ca37aadc693401389e1fb2
Lines: 1-92 of 92

```markdown
 1 | # AGENTS.md — Ozzyl Guard Development Rules
 2 |
 3 | ## Purpose
 4 |
 5 | This repository is edited by multiple developers and AI agents. Follow these rules to prevent duplicated modules, inconsistent schemas, insecure shortcuts, and conflicting business logic.
 6 |
 7 | ## Required reading before changes
 8 |
 9 | 1. `tracker.yml`
10 | 2. `README.md`
11 | 3. `docs/README.md` and the relevant domain documents under `docs/`
12 | 4. `.ai-bridge/current-plan.md`
13 | 5. `.ai-bridge/implementation-status.md`
14 | 6. `.ai-bridge/decisions.md`
15 | 7. `.ai-bridge/pro-context.md` when starting from a new chat or without prior repository context
16 | 8. Accepted ADRs under `docs/adr/`
17 |
18 | ## Non-negotiable rules
19 |
20 | 1. There must be exactly one canonical risk engine package.
21 | 2. Courier providers must be implemented behind the `CourierAdapter` boundary.
22 | 3. API handlers must not contain business scoring logic.
23 | 4. Applied migrations must never be edited. Add a new migration.
24 | 5. Every table and column must be defined in the canonical database package.
25 | 6. Search for an existing utility, type, route, table, and service before creating one.
26 | 7. Raw API keys must never be stored after creation.
27 | 8. Do not log OTPs, passwords, session cookies, access tokens, raw API keys, or raw courier payloads.
28 | 9. Every merchant-scoped repository method must require organization/store scope.
29 | 10. Unknown customer data must not be converted to a safe result.
30 | 11. Provider failure must not be converted to an automatic block.
31 | 12. Every new endpoint requires validation, authentication, authorization, rate limiting, auditability, and tests.
32 | 13. Long-running work belongs in queues/workers, not synchronous checkout requests.
33 | 14. Documentation and code must be updated together.
34 |
35 | ## Required workflow
36 |
37 | 1. Read the required context.
38 | 2. Inspect current repository state and search existing symbols/schema.
39 | 3. Compare the proposed change with accepted contracts and ADRs.
40 | 4. Create or update an ADR for architectural changes.
41 | 5. Implement the smallest coherent change.
42 | 6. Add tests for happy paths, failures, security boundaries, and tenant isolation.
43 | 7. Run typecheck, lint, unit tests, integration tests, and relevant security checks.
44 | 8. Update `tracker.yml`, `.ai-bridge/implementation-status.md`, and relevant documentation.
45 | 9. Refresh `.ai-bridge/pro-context.md` after major milestones or documentation-map changes.
46 | 10. Report changed files, migrations, tests, remaining risks, rollback, and next milestone.
47 |
48 | ## Package ownership
49 |
50 | - `packages/risk-engine`: pure scoring, confidence, signals, and decisions only.
51 | - `packages/courier-adapters`: provider clients, response normalization, provider error taxonomy.
52 | - `packages/database`: schema, migrations, repositories, and transaction boundaries.
53 | - `packages/authentication`: users, sessions, API keys, permissions, password hashing.
54 | - `packages/verification`: OTP/IVR abstractions and verification sessions.
55 | - `packages/billing`: plans, entitlements, metering, quotas, subscriptions.
56 | - `packages/shared-types`: canonical request/response and event contracts.
57 | - `packages/sdk`: supported client SDKs and webhook verification helpers.
58 | - `apps/api`: public and internal HTTP interfaces.
59 | - `apps/dashboard`: merchant UI.
60 | - `apps/admin`: internal operations UI.
61 | - `workers/*`: asynchronous jobs, provider automation, event delivery.
62 | - `integrations/*`: WooCommerce, Shopify, custom JS, and native clients.
63 |
64 | ## Migration rules
65 |
66 | - Migrations are append-only after application.
67 | - Every migration must have forward verification and rollback notes.
68 | - Runtime schema and migration schema must be reviewed together.
69 | - Tenant-scoped uniqueness must include the correct organization/store boundary.
70 | - Usage/quota changes must be atomic under concurrency.
71 |
72 | ## Security review checklist
73 |
74 | - No secret appears in logs, errors, screenshots, metadata, cookies, or analytics.
75 | - Passwords use Argon2id or an approved managed identity provider.
76 | - API keys use `ozg_test_` or `ozg_live_`, are displayed once, and stored as hashes only.
77 | - User login sessions are independent from API keys.
78 | - Courier credentials and sessions use versioned envelope encryption.
79 | - Webhooks are signed, timestamped, replay-protected, and retried.
80 | - Optional URLs are protected against SSRF.
81 | - Tenant scope cannot be omitted by callers.
82 |
83 | ## Definition of done
84 |
85 | - Acceptance criteria pass.
86 | - Tests cover important failures and isolation boundaries.
87 | - No schema, API contract, or scoring duplication was introduced.
88 | - Sensitive data is redacted.
89 | - Documentation, `tracker.yml`, and implementation status are updated.
90 | - `.ai-bridge/pro-context.md` is refreshed when the continuation context materially changes.
91 | - Migration and rollback effects are understood.
92 |
```

### docs/README.md

Bytes: 2656
SHA-256: ecf8e474158c2bdaea5d2bda3cb384ddb369acf8813d817eaf0c5b765cc54142
Lines: 1-50 of 50

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The selected-source post-persist native shadow pilot foundation is merged on `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`. Final feature CI run `29629751800`, job `88040964883`, passed eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, and PHP syntax at tested head `57e6b296617549e923fc80ab80b0317f109f5ee8`. Production rollout remains default `off`; the next operational step is explicit pilot-store deployment and outcome calibration, not enforcement.
 8 |
 9 | ## Architecture
10 |
11 | - [Project overview](architecture/project-overview.md)
12 | - [System architecture](architecture/system-architecture.md)
13 | - [Initial repository audit](architecture/repository-audit.md)
14 | - [Reuse map from multi-store-saas](architecture/copy-map-from-multi-store-saas.md)
15 |
16 | ## Product contracts
17 |
18 | - [Public API specification](api/api-specification.md)
19 | - [Database design](database/database-design.md)
20 | - [Courier intelligence](courier/courier-intelligence.md)
21 | - [Canonical risk engine](risk-engine/risk-engine.md)
22 | - [Integrations](integrations/integrations.md)
23 |
24 | ## Security, quality, and operations
25 |
26 | - [Security and privacy](security/security-privacy.md)
27 | - [Testing strategy](testing/testing-strategy.md)
28 | - [Operations and observability](operations/operations-observability.md)
29 | - [Development environment](operations/development-environment.md)
30 | - [Deployment](operations/deployment.md)
31 |
32 | ## Delivery and continuation
33 |
34 | - [Implementation roadmap](roadmap/implementation-roadmap.md)
35 | - [Initial backlog](roadmap/initial-backlog.md)
36 | - [Risk register](roadmap/risk-register.md)
37 | - [Architecture decision records](adr/README.md)
38 | - [Current plan](../.ai-bridge/current-plan.md)
39 | - [Implementation status](../.ai-bridge/implementation-status.md)
40 | - [Decision log](../.ai-bridge/decisions.md)
41 | - [Full continuation context](../.ai-bridge/pro-context.md)
42 |
43 | ## Documentation rules
44 |
45 | - Change code and its contract documentation together.
46 | - Add a new ADR when changing a system boundary, infrastructure choice, data model strategy, or security model.
47 | - Never remove historical ADRs or edit already-applied migrations to make a new change appear older.
48 | - Update `../tracker.yml` and `../.ai-bridge/implementation-status.md` after every material milestone.
49 | - Keep remaining risks, external dependencies, rollback considerations, and verification evidence explicit.
50 |
```

### README.md

Bytes: 8468
SHA-256: a3b0faab32c2de3f1b5bc5972f1ae89381df1790cd40d9fe4261df8b294b513f
Lines: 1-208 of 208

```markdown
  1 | # Ozzyl Guard
  2 |
  3 | Ozzyl Guard is a standalone, Bangladesh-focused COD fraud detection, courier intelligence, and order verification SaaS platform.
  4 |
  5 | WooCommerce, Shopify, custom commerce applications, and Ozzyl Commerce / `multi-store-saas` use one versioned API and one canonical pure risk engine.
  6 |
  7 | ## Continue in a new chat or agent session
  8 |
  9 | Start with [`tracker.yml`](tracker.yml). It contains the current milestone, source-of-truth document map, architecture invariants, verification evidence, remaining external dependencies, and ordered next tasks.
 10 |
 11 | Then read:
 12 |
 13 | 1. [`AGENTS.md`](AGENTS.md)
 14 | 2. [`docs/README.md`](docs/README.md)
 15 | 3. [Current plan](.ai-bridge/current-plan.md)
 16 | 4. [Implementation status](.ai-bridge/implementation-status.md)
 17 | 5. [Decision log](.ai-bridge/decisions.md)
 18 | 6. [Full continuation context](.ai-bridge/pro-context.md)
 19 |
 20 | The full context bundle includes the important specifications, accepted ADRs, migration inventory, repository tree, and handoff state so a new agent does not need the previous chat history.
 21 |
 22 | ## Implementation status
 23 |
 24 | The repository now contains a runnable MVP foundation:
 25 |
 26 | - TypeScript npm/Turborepo monorepo
 27 | - PostgreSQL schema, eleven append-only migrations, committed SHA-256 manifest, and non-null history checksums
 28 | - Argon2id user-password utilities and opaque user sessions
 29 | - Hash-only `ozg_test_` / `ozg_live_` API-key lifecycle utilities
 30 | - Organizations, stores, memberships, plans, usage events, audit events, and tenant scope
 31 | - Canonical `/v1/risk-assessments`, assessment read, outcome feedback, courier refresh, and OTP routes
 32 | - Deterministic explainable risk engine with explicit unknown/degraded handling
 33 | - Steadfast adapter, Playwright session driver, encrypted session storage, and runnable courier workers
 34 | - Transactional encrypted OTP delivery queue, tenant-scoped verification, and lease-owned private verification worker
 35 | - Provider-neutral OTP adapter boundary with hashing, expiry, attempt/rate limits, payload validation, and no synchronous provider I/O
 36 | - Durable signed webhook outbox/worker with retries, leases, encrypted secrets, and DNS-aware SSRF protection
 37 | - Merchant dashboard and platform operations admin applications
 38 | - WooCommerce plugin, Shopify adapter, custom JavaScript/server adapter, and native multi-store adapter
 39 | - Docker, Docker Compose, migration integrity verification, clean logical restore rehearsal, and least-privilege runtime-role verification in CI
 40 | - Authoritative organization/store revalidation across API keys, feature assembly, writes, dashboards, and secret-free webhook/verification administration
 41 | - Provider-neutral managed envelope v2 with per-record data keys, authenticated wrapped-key metadata, structured safe failures, legacy dual-read, and rotation/re-encryption primitives
 42 | - Native multi-store post-persist shadow integration with authoritative source-order revalidation, explicit store opt-in, immutable success/failure attempt evidence, tenant-scoped pilot reporting, and legacy-authoritative behavior
 43 |
 44 | The following require external accounts or production decisions before live use:
 45 |
 46 | - Authorized Steadfast merchant/test credentials and provider-terms review
 47 | - A selected KMS/vault adapter, component service identities, access auditing, runtime wiring, and an audited background rewrite before replacing local v1 encryption in production
 48 | - OTP provider selection and credentials
 49 | - Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
 50 | - Production queue/cache/observability providers
 51 | - Production source-platform hook deployment, explicit pilot-store selection, and outcome calibration before any enforcement or broad automatic blocking
 52 |
 53 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
 54 |
 55 | ## Repository structure
 56 |
 57 | ```text
 58 | apps/
 59 |   api/             Versioned API and PostgreSQL repositories
 60 |   dashboard/       Merchant operations dashboard
 61 |   admin/           Platform operations dashboard
 62 | workers/
 63 |   courier-session-worker/
 64 |   courier-sync-worker/
 65 |   verification-worker/
 66 |   event-worker/
 67 | packages/
 68 |   shared-types/
 69 |   risk-engine/
 70 |   courier-adapters/
 71 |   database/
 72 |   authentication/
 73 |   billing/
 74 |   verification/
 75 |   sdk/
 76 | integrations/
 77 |   woocommerce/
 78 |   shopify/
 79 |   custom-js/
 80 |   multi-store-saas/
 81 | docs/
 82 | .ai-bridge/
 83 | ```
 84 |
 85 | ## Core rules
 86 |
 87 | 1. There is exactly one canonical risk engine.
 88 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
 89 | 3. Courier providers are isolated behind adapters and asynchronous workers.
 90 | 4. Merchant data is always organization/store scoped.
 91 | 5. Unknown customers are not automatically safe.
 92 | 6. Provider failure does not automatically approve or block a customer.
 93 | 7. Every assessment returns explainable signals and confidence.
 94 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
 95 | 9. Applied migrations are immutable; changes require a new migration.
 96 | 10. Every integration consumes the same canonical API response.
 97 |
 98 | ## Local setup
 99 |
100 | Prerequisites: Node.js 20+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
101 |
102 | ```bash
103 | npm install
104 | npm run db:check
105 | npm run db:migrate
106 | npm run db:integrity
107 | # After creating a separate non-owner PostgreSQL login outside the app:
108 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
109 | npm run bootstrap -w @ozzyl/api
110 | npm run dev:api
111 | ```
112 |
113 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
114 |
115 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
116 |
117 | Merchant dashboard:
118 |
119 | ```bash
120 | npm run dev:dashboard
121 | ```
122 |
123 | Platform admin:
124 |
125 | ```bash
126 | npm run dev -w @ozzyl/admin
127 | ```
128 |
129 | Private workers:
130 |
131 | ```bash
132 | npm run start -w @ozzyl/courier-session-worker
133 | npm run start -w @ozzyl/courier-sync-worker
134 | npm run start -w @ozzyl/event-worker
135 | # Requires a reviewed provider module/account in addition to the standard secrets:
136 | npm run start -w @ozzyl/verification-worker
137 | ```
138 |
139 | ## Docker Compose
140 |
141 | Provide the required variables in your shell or an ignored Compose environment file, then run:
142 |
143 | ```bash
144 | docker compose up --build
145 | ```
146 |
147 | The Compose topology separates PostgreSQL, migrations, API, Playwright session, courier sync, and event workers. The verification worker is opt-in with `docker compose --profile verification up --build` because a reviewed provider module/account is not bundled. Dashboard/admin static hosting is deployment-platform dependent.
148 |
149 | ## Verification commands
150 |
151 | ```bash
152 | npm run format:check
153 | npm run lint
154 | npm run db:check
155 | npm run db:integrity
156 | # Requires migration-owner credentials and an externally created non-owner runtime role:
157 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
158 | # Requires a separately created empty target database:
159 | RESTORE_DATABASE_URL=postgresql://... RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true npm run db:restore-rehearsal
160 | npm run typecheck
161 | npm run test
162 | npm run build
163 | npm audit --audit-level=high
164 | php -l integrations/woocommerce/ozzyl-guard.php
165 | ```
166 |
167 | ## Canonical assessment response
168 |
169 | ```json
170 | {
171 |   "success": true,
172 |   "assessment_id": "ras_123",
173 |   "risk_score": 72,
174 |   "risk_level": "high",
175 |   "decision": "verify",
176 |   "confidence": 0.82,
177 |   "signals": [
178 |     {
179 |       "code": "low_delivery_rate",
180 |       "score": 30,
181 |       "description": "Customer delivery rate is 28%"
182 |     }
183 |   ],
184 |   "courier_summary": {
185 |     "total": 12,
186 |     "delivered": 5,
187 |     "returned": 4,
188 |     "cancelled_before_shipping": 3
189 |   }
190 | }
191 | ```
192 |
193 | ## Documentation
194 |
195 | - [System architecture](docs/architecture/system-architecture.md)
196 | - [Public API specification](docs/api/api-specification.md)
197 | - [Database design](docs/database/database-design.md)
198 | - [Courier intelligence](docs/courier/courier-intelligence.md)
199 | - [Risk engine](docs/risk-engine/risk-engine.md)
200 | - [Integrations](docs/integrations/integrations.md)
201 | - [Security and privacy](docs/security/security-privacy.md)
202 | - [Testing strategy](docs/testing/testing-strategy.md)
203 | - [Operations](docs/operations/operations-observability.md)
204 | - [Roadmap](docs/roadmap/implementation-roadmap.md)
205 | - [ADRs](docs/adr/README.md)
206 |
207 | Before changing code, read `AGENTS.md`, the relevant domain documents, `.ai-bridge/current-plan.md`, `.ai-bridge/implementation-status.md`, and accepted ADRs.
208 |
```

### .ai-bridge/current-plan.md

Bytes: 17090
SHA-256: b367c83a81cc23786b9aeee13ab210b854b4abdfd756ebdad2d7dc534c41ff0f
Lines: 1-170 of 170

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-18
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and eleven production-hardening slices are complete:
  8 |
  9 | 1. dashboard/admin browser authentication with live PostgreSQL data and tenant revalidation;
 10 | 2. accepted provider-neutral infrastructure ADRs for deployment, managed PostgreSQL, durable work/cache, KMS envelope encryption, and observability;
 11 | 3. PostgreSQL concurrency and idempotency hardening for usage reservations, assessments, outcomes, and tenant-scoped operation records;
 12 | 4. lease-owned PostgreSQL courier-worker claims with stale-job recovery, authoritative account scope, and migration replay verification;
 13 | 5. transactional PostgreSQL webhook outbox emission and a lease-owned event worker with encrypted signing-secret access and DNS-aware SSRF controls;
 14 | 6. transactional encrypted OTP delivery queues, tenant-scoped database verification, and a lease-owned private verification worker with no provider I/O in API requests;
 15 | 7. SHA-256-bound migration history integrity and a clean PostgreSQL logical backup/restore rehearsal with schema, data, sequence, history, and replay verification;
 16 | 8. authoritative tenant-scope revalidation across API keys, feature assembly, assessment/outcome writes, dashboards and administration, plus an explicit least-privilege PostgreSQL runtime-role grant boundary;
 17 | 9. provider-neutral managed envelope v2 with random per-record data keys, authenticated wrapped-key metadata, structured fail-closed errors, explicit legacy dual-read, and key-version re-encryption primitives;
 18 | 10. native multi-store `off`/deterministic-shadow rollout controls with legacy-authoritative behavior and tenant-scoped immutable comparison evidence;
 19 | 11. selected-source post-persist shadow integration with authoritative source-order reload, explicit store opt-in, immutable sampled-attempt evidence, and tenant-scoped pilot reporting.
 20 |
 21 | Concrete provider selection and provisioning remain external production work.
 22 |
 23 | ## Completed
 24 |
 25 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 26 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 27 | - [x] Canonical shared API/error/event contracts
 28 | - [x] PostgreSQL/Drizzle schema and eleven append-only migrations
 29 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 30 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 31 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 32 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 33 | - [x] Courier adapter contract and Steadfast normalized adapter
 34 | - [x] Playwright Steadfast session driver with structured errors
 35 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 36 | - [x] Runnable PostgreSQL courier session and observation workers
 37 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 38 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 39 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 40 | - [x] API OTP send returns queued work without provider network I/O
 41 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 42 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 43 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 44 | - [x] Explicit-role platform admin with live global operations data
 45 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 46 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 47 | - [x] Architecture dependency-boundary CI guard
 48 | - [x] Provider-neutral production deployment topology ADR
 49 | - [x] Managed PostgreSQL production baseline ADR
 50 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 51 | - [x] Managed secrets and KMS envelope-encryption ADR
 52 | - [x] Vendor-neutral OpenTelemetry observability ADR
 53 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 54 | - [x] Concurrent usage reservations cannot exceed the plan limit
 55 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 56 | - [x] Concurrent outcome writes resolve as one insert and one replay
 57 | - [x] Operation idempotency records remain isolated by organization and store
 58 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 59 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 60 | - [x] Expired or previous courier owners cannot complete or fail jobs
 61 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 62 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 63 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 64 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 65 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 66 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 67 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 68 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 69 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 70 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 71 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 72 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 73 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 74 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 75 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 76 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 77 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 78 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 79 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 80 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 81 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 82 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 83 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 84 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 85 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 86 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
 87 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
 88 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
 89 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
 90 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
 91 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
 92 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
 93 |
 94 | ## Verified baseline
 95 |
 96 | - Formatting check: passed
 97 | - ESLint with zero warnings: passed
 98 | - Eleven migration files ordered/non-empty/non-destructive: passed
 99 | - First migration apply and immediate migration replay: passed
100 | - Architecture import boundaries: passed
101 | - Typecheck: 19 of 19 workspaces passed
102 | - Test/build dependency tasks: 28 of 28 passed
103 | - Repository assertions: 120 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, seven migration-integrity tests, seven tenant/admin isolation tests, six runtime-role policy/permission tests, eleven envelope-encryption tests, twenty-eight native-shadow adapter/API/SDK/browser/PostgreSQL tests, transactional queues/outbox coverage, and DNS SSRF tests
104 | - Production builds: 19 of 19 workspaces passed
105 | - WooCommerce PHP syntax: passed
106 | - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
107 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
108 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
109 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
110 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
111 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
112 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
113 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
114 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
115 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
116 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
117 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
118 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
119 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
120 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
121 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
122 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
123 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
124 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
125 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
126 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
127 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
128 | - Canonical documentation links before this slice: zero known broken internal links
129 | - `tracker.yml` YAML structure remains valid
130 | - Prohibited source-pattern search: no matches
131 |
132 | The repository-local continuation exporter was run after the feature merge from canonical `main`; `.ai-bridge/pro-context.md`, tracker, plan, status, decisions, and milestone documentation are refreshed.
133 |
134 | ## Next production milestone
135 |
136 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
137 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
138 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
139 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
140 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
141 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
142 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
143 |
144 | ## External blockers
145 |
146 | - Authorized Steadfast merchant/test credentials
147 | - Steadfast provider-terms and merchant-authorization review
148 | - Deployment platform, account, primary region, and budget
149 | - Managed PostgreSQL provider and service tier
150 | - Managed secret store and KMS/vault provider
151 | - Observability backend and retention policy
152 | - OTP provider account and credentials
153 | - Production account recovery/MFA or managed identity-provider decision
154 | - Repository visibility correction from currently reported public to expected private
155 | - Pilot outcome data for false-positive/false-negative calibration
156 |
157 | ## Non-negotiable continuation rules
158 |
159 | - Do not add a second risk engine.
160 | - Do not call providers from the risk engine or synchronous checkout path.
161 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
162 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
163 | - Do not use API keys as dashboard user sessions.
164 | - Require organization/store scope in all merchant repositories, events, and jobs.
165 | - Add new migrations; never edit applied migrations.
166 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
167 | - Keep Redis/cache state non-authoritative.
168 | - Keep unknown/provider failure explicit and policy-controlled.
169 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
170 |
```

### .ai-bridge/decisions.md

Bytes: 12729
SHA-256: 0789bd989aa50318e084ef34b71055604522a881251999997f111cae2cbcf3fc
Lines: 1-96 of 96

```markdown
 1 | # Ozzyl Guard — Active Decisions
 2 |
 3 | Updated: 2026-07-18
 4 |
 5 | ## Accepted decisions
 6 |
 7 | 1. Ozzyl Guard is a standalone SaaS/service. `multi-store-saas` becomes a client, not the canonical implementation host.
 8 | 2. There is one canonical, pure, versioned risk engine.
 9 | 3. The risk engine performs no network, database, queue, browser, filesystem, credential-store, or provider calls.
10 | 4. Courier access is isolated behind provider adapters and asynchronous session/sync workers.
11 | 5. The existing Steadfast Playwright session approach remains for the pilot, with security and reliability hardening.
12 | 6. Foundation stack: Node.js 20+, TypeScript, npm workspaces, Turborepo, PostgreSQL, Drizzle, Vitest, and Playwright.
13 | 7. Public API begins at `/v1`; the canonical assessment endpoint is `POST /v1/risk-assessments`.
14 | 8. API key environments use `ozg_test_` and `ozg_live_`. Raw keys are displayed once and stored only as hashes.
15 | 9. Dashboard user sessions are independent from API keys.
16 | 10. Merchant data uses strict organization/store isolation; no `storeId = 0` or optional-scope shortcut.
17 | 11. Unknown/no-data customers return explicit unknown/low-confidence state and normally recommend verification; they are not automatically safe.
18 | 12. Provider failure does not automatically allow or block. It produces explicit degraded/freshness metadata and policy-controlled behavior.
19 | 13. Outcome feedback is part of the first MVP.
20 | 14. WooCommerce, Shopify, custom, and native integrations use the same canonical request/response contract.
21 | 15. Applied migrations are immutable and changes require new migrations.
22 | 16. `fraudchecker.link` may exist only as an optional, identified fallback adapter; it is never the core source or an engine dependency.
23 | 17. Pilot browser access uses the existing Argon2id and opaque hash-only PostgreSQL session primitives, `HttpOnly` cookies, CSRF protection, repository-level tenant revalidation, and an explicit `platform_admin` role; service API keys remain separate.
24 | 18. Production uses a provider-neutral managed application/container topology with independently deployed API, static UIs, migration job, and private workers; Playwright remains isolated.
25 | 19. Production uses managed PostgreSQL 16+ in the primary application region. PostgreSQL remains authoritative for tenant data, browser sessions, idempotency, usage, audit records, and durable work.
26 | 20. PostgreSQL is the pilot durable job/outbox source of truth. A Redis-compatible service is optional for ephemeral distributed coordination and must not own durable jobs or security-critical state.
27 | 21. Production secrets use a managed secret store, and persisted sensitive records use managed KMS/vault envelope encryption with fail-closed decryption and no plaintext fallback.
28 | 22. Production observability uses structured JSON logs and OpenTelemetry-compatible metrics/traces at application and worker boundaries; telemetry does not add external I/O to the risk engine.
29 | 23. PostgreSQL worker jobs use atomic `SKIP LOCKED` claims, explicit worker ownership, expiring leases, ownership-checked state transitions, and authoritative organization/store/provider scope derived from relational account data. Exhausted stale jobs fail closed instead of remaining permanently claimed.
30 | 24. Webhook deliveries are emitted as outbox rows inside the same PostgreSQL transaction as the newly persisted assessment or outcome. API/checkout paths never perform synchronous merchant webhook network calls.
31 | 25. Webhook deliveries persist explicit organization/store scope and canonical event payloads. Endpoint signing secrets remain encrypted at rest and are decrypted only inside the event worker with endpoint-bound authenticated context.
32 | 26. Webhook workers require HTTPS destinations without embedded credentials, reject local/non-public literal addresses, validate all DNS results before fetch, reject redirects, and rely on production egress policy as an additional DNS-rebinding boundary.
33 | 27. The reusable local AES-256-GCM envelope implementation lives in `@ozzyl/encryption`; provider-specific managed KMS implementation will supersede key handling without changing caller boundaries.
34 | 28. OTP send requests create the verification session, OTP hash, and job-context-encrypted delivery payload inside one PostgreSQL transaction. The API returns queued state and performs no OTP provider network call.
35 | 29. Verification delivery jobs use atomic `SKIP LOCKED` claims, explicit owners, expiring leases, owner-checked transitions, stale recovery, bounded retry, and terminal failure. Scope mismatch fails both the job and authoritative session closed.
36 | 30. The private verification worker decrypts job material only with `verification-job:<job-id>` context and validates organization, store, purpose, phone HMAC, and OTP hash before provider I/O. The production provider adapter/account remains an explicit external selection.
37 | 31. Ordered SQL migrations are bound to `packages/database/migrations/manifest.json` with SHA-256 checksums. The migration history stores a non-null checksum, unknown/gapped/mismatched history fails closed, and legacy name-only rows may be adopted only from the committed manifest while one migration session holds an advisory lock.
38 | 32. Restore rehearsal requires an explicitly separate clean target database. It uses credential-safe `pg_dump`/`pg_restore`, compares schema, table counts or opt-in full data hashes, sequence state, migration history, and replay, and never drops or overwrites the source database. Managed-provider PITR validation remains separate production work.
39 | 33. API keys, feature assembly, assessment/outcome writes, dashboards, and tenant administration revalidate organization/store ownership through active relational records; caller-supplied matching identifiers alone are never authoritative.
40 | 34. Webhook and verification administration require an active owner/admin membership for the requested active organization/store. Administrative records are purposefully secret-free and never return encrypted signing secrets, OTP hashes, encrypted delivery payloads, or raw phone data.
41 | 35. Production migrations and runtime queries use different PostgreSQL identities. An externally created non-owner runtime `LOGIN` without elevated attributes or inherited memberships receives only an explicit reviewed current-table DML policy from the migration owner; it cannot access migration history, DELETE, DDL, database/schema/relation ownership, or role management, and grants are reapplied after each migration release.
42 | 36. Managed envelope v2 uses one random 32-byte data-encryption key per record, AES-256-GCM, a SHA-256 record-context digest, authenticated wrapped-key metadata, and a provider-neutral asynchronous wrap/unwrap contract. Plaintext data keys are zeroed after use; context mismatch, provider outage, malformed metadata, unsupported providers, and missing legacy keys fail closed with structured non-secret codes. Production writes remain on local v1 until a reviewed KMS adapter and service identities are provisioned; legacy dual-read is explicit and temporary.
43 | 37. The native `multi-store-saas` rollout begins with `off` and deterministic `shadow` modes only. The legacy result remains the effective decision even when Guard recommends block. Successful comparisons are persisted through a tenant-scoped idempotent API that derives Guard values from the referenced assessment; Guard or persistence failure returns a safe code and never changes checkout behavior. Enforcement requires a later reviewed rollout decision backed by pilot outcomes.
44 | 38. The selected source integration invokes shadow only after an authoritative persisted-order reload and exact organization/store/order revalidation. PostgreSQL rollout state defaults to `off`; only a CSRF-protected active owner/admin can opt in an exact store. Every selected success, timeout, assessment failure, or comparison persistence failure produces tenant-scoped immutable attempt evidence and bounded secret-free reporting. No enforcement mode exists, and production deployment remains limited to explicitly selected pilot stores.
45 |
46 | ## Source SaaS conflict resolutions
47 |
48 | | Conflict                                                                 | Decision                                                                                   |
49 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
50 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
51 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
52 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
53 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
54 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
55 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
56 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
57 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
58 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
59 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
60 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
61 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
62 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
63 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
64 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
65 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
66 |
67 | ## Approved reuse scope
68 |
69 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
70 | - Bangladesh phone normalization after tests
71 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
72 | - WooCommerce settings/order hook/admin display skeleton
73 | - API-key hash/display-prefix and usage-event concepts
74 |
75 | No product source code was copied during Phase 0.
76 |
77 | ## Pending decisions
78 |
79 | These require provider selection, provisioning, or separate ADRs before production implementation:
80 |
81 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
82 | - Specific deployment platform, account, and primary region
83 | - Specific managed PostgreSQL provider and service tier
84 | - Specific managed secret store and KMS/vault provider
85 | - Specific observability backend and retention policy
86 | - Redis-compatible cache provider when distributed coordination is required
87 | - Dedicated broker only if measured scale requires superseding ADR 0008
88 | - Worker scheduler/runtime implementation on the selected deployment platform
89 | - OTP provider
90 |
91 | ## External requirements
92 |
93 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
94 |
95 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
96 |
```

### .ai-bridge/implementation-status.md

Bytes: 19747
SHA-256: 2f218e44f4a610fe2e7b5b74da410dfdd947854125301075e89d8a219dae57ee
Lines: 1-159 of 159

```markdown
  1 | # Ozzyl Guard — Implementation Status
  2 |
  3 | Updated: 2026-07-18
  4 |
  5 | ## Status legend
  6 |
  7 | - `done`: implemented and locally or remotely verified
  8 | - `baseline`: accepted and partially implemented; provider provisioning or production wiring remains
  9 | - `blocked`: requires an external account, secret, provider, or authorization
 10 | - `deferred`: intentionally outside the current MVP
 11 |
 12 | ## Repository and delivery
 13 |
 14 | | Area                       | Status   | Notes                                                                                                                                                 |
 15 | | -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
 16 | | Documentation and ADRs     | done     | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and eleven accepted ADRs                            |
 17 | | Continuation documentation | done     | Tracker, plan, status, decisions, and repository-local generated `pro-context.md` refreshed after the feature merge                                   |
 18 | | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
 19 | | Monorepo/tooling           | done     | 19 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
 20 | | CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
 21 | | Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
 22 | | Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
 23 | | Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |
 24 |
 25 | ## Product implementation
 26 |
 27 | | Area                             | Status   | Notes                                                                                                                                                                         |
 28 | | -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                                                                        |
 30 | | Database/migrations              | done     | Eleven append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                               |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                            |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                               |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                         |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                 |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                 |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                 |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                          |
 38 | | Courier observation worker/cache | done     | Lease-owned atomic claims, expired-owner rejection, stale recovery, retry/final failure, relational scope, observation persistence                                            |
 39 | | Durable webhook outbox           | done     | Assessment/outcome transaction emission, scoped event payloads, lease-owned event worker, retries, stale recovery, encrypted secret access                                    |
 40 | | Durable work architecture        | baseline | PostgreSQL ownership/lease pattern proven for courier, webhook, and verification work; broader operational dead-letter tooling remains                                        |
 41 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                        |
 42 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                               |
 43 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                      |
 44 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                      |
 45 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                   |
 46 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                |
 47 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                      |
 48 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                          |
 49 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                           |
 50 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting |
 51 | | OTP verification                 | baseline | Transactional encrypted queue, tenant-scoped verifier, lease-owned private runner, retries, and failure events done; provider account remains                                 |
 52 | | Merchant dashboard               | done     | Authenticated scoped operations plus CSRF-protected owner/admin native-shadow rollout control and secret-free pilot reporting                                                 |
 53 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                     |
 54 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                    |
 55 | | PostgreSQL runtime role          | done     | Explicit current-table DML grants, no migration history/DELETE/DDL/ownership/elevated membership; managed-provider provisioning remains                                       |
 56 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                        |
 57 | | Observability                    | baseline | OpenTelemetry-compatible boundary accepted; shared helpers, backend, dashboards, alerts, and redaction tests remain                                                           |
 58 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                     |
 59 |
 60 | ## Migrations
 61 |
 62 | 1. `0001_foundation.sql`
 63 | 2. `0002_courier.sql`
 64 | 3. `0003_risk.sql`
 65 | 4. `0004_verification_events.sql`
 66 | 5. `0005_durable_operations.sql`
 67 | 6. `0006_browser_access.sql`
 68 | 7. `0007_worker_leases.sql`
 69 | 8. `0008_webhook_delivery_leases.sql`
 70 | 9. `0009_verification_delivery_queue.sql`
 71 | 10. `0010_native_shadow_comparisons.sql`
 72 | 11. `0011_native_shadow_pilot.sql`
 73 |
 74 | Applied migrations must remain immutable.
 75 |
 76 | ## Verification evidence
 77 |
 78 | - `npm run format:check`: passed
 79 | - `npm run lint`: passed with zero warnings
 80 | - `npm run db:check`: eleven migrations and committed SHA-256 manifest validated
 81 | - initial migration apply: passed with non-null history checksums
 82 | - immediate migration replay: passed as a clean no-op
 83 | - `npm run db:integrity`: complete contiguous history and checksums passed
 84 | - `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
 85 | - `npm run check:architecture`: passed
 86 | - `npm run typecheck`: 19/19 workspaces passed
 87 | - `npm run test`: 28/28 Turbo tasks passed; repository contains 120 assertions
 88 | - `npm run build`: 19/19 workspace builds passed
 89 | - `npm audit --audit-level=high`: passed; four moderate development-tooling findings remain
 90 | - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
 91 | - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
 92 | - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
 93 | - Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
 94 | - Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
 95 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
 96 | - Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
 97 | - Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
 98 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
 99 | - Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
100 | - Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
101 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
102 | - Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
103 | - Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
104 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
105 | - Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
106 | - Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
107 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
108 | - Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
109 | - Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
110 | - Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
111 | - Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
112 | - Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
113 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
114 | - Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
115 | - Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
116 | - Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
117 | - Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
118 | - Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
119 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
120 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
121 | - Six database-role tests cover identifier safety, explicit policy completeness, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
122 | - Previous canonical documentation checks found zero broken internal links
123 | - Prohibited insecure-pattern scan: zero matches
124 |
125 | The repository-local exporter refreshed `.ai-bridge/pro-context.md` after canonical `main` advanced to the selected-source shadow pilot merge.
126 |
127 | ## External blockers and production requirements
128 |
129 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
130 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
131 | - Managed secret store and KMS/vault provider
132 | - Observability backend, retention, dashboards, alerts, and incident channels
133 | - Optional Redis-compatible cache only when distributed coordination is required
134 | - Authorized Steadfast test/merchant account
135 | - Provider-terms and merchant-authorization review
136 | - OTP provider selection/account
137 | - Production account recovery/MFA or managed identity-provider decision
138 | - Pilot merchants and verified outcome data for calibration
139 |
140 | ## Remaining risks
141 |
142 | - Steadfast UI/internal endpoint changes can break automation.
143 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
144 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
145 | - In-process API and browser-session rate limiting is not distributed across replicas.
146 | - Durable PostgreSQL work still needs broader dead-letter/replay operations and future lease renewal for work whose bounded execution may exceed one lease.
147 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
148 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
149 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
150 | - GitHub currently reports public repository visibility although the expected policy is private.
151 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
152 | - Four moderate development-tooling advisories remain; high/critical threshold is clear.
153 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
154 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
155 |
156 | ## Next milestone
157 |
158 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
159 |
```

### apps/api/src/postgres-native-shadow-pilot.ts

Bytes: 16454
SHA-256: 8352293d43ed80924b6637f14cb636aac9b502e5a98e8dfd53b6d6ee8a1eeb2f
Lines: 1-470 of 470

```typescript
  1 | import { createHash, randomUUID } from 'node:crypto';
  2 | import type { Pool, PoolClient } from 'pg';
  3 | import type {
  4 |   NativeShadowAttemptInput,
  5 |   NativeShadowPilotReport,
  6 |   NativeShadowRolloutMode,
  7 | } from '@ozzyl/shared-types';
  8 | import type {
  9 |   NativeShadowAttemptRepository,
 10 |   NativeShadowRolloutAdministrationRepository,
 11 |   NativeShadowRolloutRepository,
 12 | } from './index.js';
 13 |
 14 | export type NativeShadowPilotErrorCode =
 15 |   | 'TENANT_SCOPE_MISMATCH'
 16 |   | 'NATIVE_SHADOW_NOT_OPTED_IN'
 17 |   | 'NATIVE_SHADOW_ROLLOUT_MISMATCH'
 18 |   | 'NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH'
 19 |   | 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT';
 20 |
 21 | export class NativeShadowPilotPersistenceError extends Error {
 22 |   constructor(readonly code: NativeShadowPilotErrorCode) {
 23 |     super(code);
 24 |     this.name = 'NativeShadowPilotPersistenceError';
 25 |   }
 26 | }
 27 |
 28 | export interface NativeShadowRolloutRecord {
 29 |   organizationId: string;
 30 |   storeId: string;
 31 |   integration: 'multi-store-saas';
 32 |   mode: NativeShadowRolloutMode;
 33 |   rolloutVersion: string;
 34 |   sampleRateBps: number;
 35 |   samplingKey: string;
 36 | }
 37 |
 38 | interface RolloutRow {
 39 |   organization_id: string;
 40 |   store_id: string;
 41 |   mode: NativeShadowRolloutMode;
 42 |   rollout_version: string;
 43 |   sample_rate_bps: number;
 44 | }
 45 |
 46 | interface ExistingAttemptRow {
 47 |   id: string;
 48 |   external_order_id: string;
 49 |   rollout_version: string;
 50 |   sample_bucket: number;
 51 |   sample_rate_bps: number;
 52 |   status: NativeShadowAttemptInput['status'];
 53 |   failure_code: string | null;
 54 |   assessment_id: string | null;
 55 |   comparison_id: string | null;
 56 |   evaluated_at: Date | string;
 57 | }
 58 |
 59 | export class PostgresNativeShadowRolloutRepository
 60 |   implements NativeShadowRolloutRepository, NativeShadowRolloutAdministrationRepository
 61 | {
 62 |   constructor(private readonly pool: Pool) {}
 63 |
 64 |   async load(input: {
 65 |     organizationId: string;
 66 |     storeId: string;
 67 |   }): Promise<NativeShadowRolloutRecord | null> {
 68 |     return loadRollout(this.pool, input);
 69 |   }
 70 |
 71 |   async setForStore(input: {
 72 |     userId: string;
 73 |     organizationId: string;
 74 |     storeId: string;
 75 |     mode: NativeShadowRolloutMode;
 76 |     rolloutVersion: string;
 77 |     sampleRateBps: number;
 78 |   }): Promise<NativeShadowRolloutRecord | null> {
 79 |     const client = await this.pool.connect();
 80 |     try {
 81 |       await client.query('begin');
 82 |       const authorized = await client.query<{ role: string }>(
 83 |         `
 84 |           select om.role
 85 |           from organization_members om
 86 |           join organizations o on o.id = om.organization_id and o.status = 'active'
 87 |           join stores s on s.organization_id = o.id and s.status = 'active'
 88 |           where om.user_id = $1 and om.organization_id = $2 and s.id = $3
 89 |           limit 1
 90 |         `,
 91 |         [input.userId, input.organizationId, input.storeId],
 92 |       );
 93 |       const role = authorized.rows[0]?.role;
 94 |       if (role !== 'owner' && role !== 'admin') {
 95 |         await client.query('rollback');
 96 |         return null;
 97 |       }
 98 |       await client.query(
 99 |         `
100 |           insert into integration_shadow_rollouts (
101 |             organization_id, store_id, integration, mode, rollout_version,
102 |             sample_rate_bps, updated_by_user_id
103 |           ) values ($1, $2, 'multi-store-saas', $3, $4, $5, $6)
104 |           on conflict (organization_id, store_id, integration) do update
105 |           set mode = excluded.mode,
106 |               rollout_version = excluded.rollout_version,
107 |               sample_rate_bps = excluded.sample_rate_bps,
108 |               updated_by_user_id = excluded.updated_by_user_id,
109 |               updated_at = now()
110 |         `,
111 |         [
112 |           input.organizationId,
113 |           input.storeId,
114 |           input.mode,
115 |           input.rolloutVersion,
116 |           input.sampleRateBps,
117 |           input.userId,
118 |         ],
119 |       );
120 |       const rollout = await loadRollout(client, input);
121 |       await client.query('commit');
122 |       return rollout;
123 |     } catch (error) {
124 |       await client.query('rollback').catch(() => undefined);
125 |       throw error;
126 |     } finally {
127 |       client.release();
128 |     }
129 |   }
130 | }
131 |
132 | export class PostgresNativeShadowAttemptRepository implements NativeShadowAttemptRepository {
133 |   constructor(private readonly pool: Pool) {}
134 |
135 |   async save(input: {
136 |     organizationId: string;
137 |     storeId: string;
138 |     apiKeyId: string;
139 |     idempotencyKey: string;
140 |     attempt: NativeShadowAttemptInput;
141 |   }): Promise<{ attemptId: string; replay: boolean }> {
142 |     validateAttemptShape(input.attempt);
143 |     const client = await this.pool.connect();
144 |     try {
145 |       await client.query('begin');
146 |       await client.query('select pg_advisory_xact_lock(hashtext($1))', [
147 |         `${input.organizationId}:${input.storeId}:native-shadow-attempt:${input.idempotencyKey}`,
148 |       ]);
149 |       const rollout = await loadRollout(client, input);
150 |       if (!rollout) throw new NativeShadowPilotPersistenceError('TENANT_SCOPE_MISMATCH');
151 |       if (rollout.mode !== 'shadow') {
152 |         throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_NOT_OPTED_IN');
153 |       }
154 |       if (
155 |         rollout.rolloutVersion !== input.attempt.rollout_version ||
156 |         rollout.sampleRateBps !== input.attempt.sample_rate_bps
157 |       ) {
158 |         throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ROLLOUT_MISMATCH');
159 |       }
160 |       await validateAttemptReferences(client, input);
161 |
162 |       const attemptId = `nsa_${randomUUID()}`;
163 |       const inserted = await client.query<{ id: string }>(
164 |         `
165 |           insert into integration_shadow_attempts (
166 |             id, organization_id, store_id, api_key_id, integration,
167 |             external_order_id, idempotency_key, rollout_version,
168 |             sample_bucket, sample_rate_bps, status, failure_code,
169 |             assessment_id, comparison_id, evaluated_at
170 |           ) values (
171 |             $1, $2, $3, $4, 'multi-store-saas',
172 |             $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
173 |           )
174 |           on conflict (organization_id, store_id, integration, idempotency_key) do nothing
175 |           returning id
176 |         `,
177 |         [
178 |           attemptId,
179 |           input.organizationId,
180 |           input.storeId,
181 |           input.apiKeyId,
182 |           input.attempt.external_order_id,
183 |           input.idempotencyKey,
184 |           input.attempt.rollout_version,
185 |           input.attempt.sample_bucket,
186 |           input.attempt.sample_rate_bps,
187 |           input.attempt.status,
188 |           input.attempt.failure_code ?? null,
189 |           input.attempt.assessment_id ?? null,
190 |           input.attempt.comparison_id ?? null,
191 |           input.attempt.evaluated_at,
192 |         ],
193 |       );
194 |       if (inserted.rows[0]) {
195 |         await client.query('commit');
196 |         return { attemptId, replay: false };
197 |       }
198 |
199 |       const existingResult = await client.query<ExistingAttemptRow>(
200 |         `
201 |           select id, external_order_id, rollout_version, sample_bucket, sample_rate_bps,
202 |                  status, failure_code, assessment_id, comparison_id, evaluated_at
203 |           from integration_shadow_attempts
204 |           where organization_id = $1 and store_id = $2
205 |             and integration = 'multi-store-saas' and idempotency_key = $3
206 |           limit 1
207 |         `,
208 |         [input.organizationId, input.storeId, input.idempotencyKey],
209 |       );
210 |       const existing = existingResult.rows[0];
211 |       if (!existing || !sameAttempt(existing, input.attempt)) {
212 |         throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT');
213 |       }
214 |       await client.query('commit');
215 |       return { attemptId: existing.id, replay: true };
216 |     } catch (error) {
217 |       await client.query('rollback').catch(() => undefined);
218 |       throw error;
219 |     } finally {
220 |       client.release();
221 |     }
222 |   }
223 | }
224 |
225 | export async function loadStoreNativeShadowPilotReport(
226 |   pool: Pool,
227 |   input: { organizationId: string; storeId: string; now: Date },
228 | ): Promise<NativeShadowPilotReport> {
229 |   const rollout = await loadRollout(pool, input);
230 |   if (!rollout) throw new NativeShadowPilotPersistenceError('TENANT_SCOPE_MISMATCH');
231 |   const aggregate = await loadAggregate(pool, {
232 |     where: 'a.organization_id = $1 and a.store_id = $2',
233 |     values: [input.organizationId, input.storeId, input.now],
234 |   });
235 |   return buildReport(rollout, aggregate);
236 | }
237 |
238 | export async function loadPlatformNativeShadowPilotReport(
239 |   pool: Pool,
240 |   input: { now: Date },
241 | ): Promise<NativeShadowPilotReport & { opted_in_stores: number }> {
242 |   const [aggregate, optedIn] = await Promise.all([
243 |     loadAggregate(pool, { where: 'true', values: [input.now] }),
244 |     pool.query<{ count: number }>(`
245 |       select count(*)::int as count
246 |       from integration_shadow_rollouts r
247 |       join organizations o on o.id = r.organization_id and o.status = 'active'
248 |       join stores s on s.id = r.store_id and s.organization_id = r.organization_id
249 |         and s.status = 'active'
250 |       where r.integration = 'multi-store-saas' and r.mode = 'shadow'
251 |     `),
252 |   ]);
253 |   const optedInStores = optedIn.rows[0]?.count ?? 0;
254 |   return {
255 |     ...buildReport(
256 |       {
257 |         organizationId: 'platform',
258 |         storeId: 'platform',
259 |         integration: 'multi-store-saas',
260 |         mode: optedInStores > 0 ? 'shadow' : 'off',
261 |         rolloutVersion: optedInStores > 0 ? 'mixed' : 'off',
262 |         sampleRateBps: 0,
263 |         samplingKey: 'platform',
264 |       },
265 |       aggregate,
266 |     ),
267 |     opted_in_stores: optedInStores,
268 |   };
269 | }
270 |
271 | async function loadRollout(
272 |   database: Pool | PoolClient,
273 |   input: { organizationId: string; storeId: string },
274 | ): Promise<NativeShadowRolloutRecord | null> {
275 |   const result = await database.query<RolloutRow>(
276 |     `
277 |       select o.id as organization_id, s.id as store_id,
278 |              coalesce(r.mode, 'off') as mode,
279 |              coalesce(r.rollout_version, 'off') as rollout_version,
280 |              coalesce(r.sample_rate_bps, 0)::int as sample_rate_bps
281 |       from organizations o
282 |       join stores s on s.organization_id = o.id
283 |       left join integration_shadow_rollouts r
284 |         on r.organization_id = o.id and r.store_id = s.id
285 |         and r.integration = 'multi-store-saas'
286 |       where o.id = $1 and s.id = $2 and o.status = 'active' and s.status = 'active'
287 |       limit 1
288 |     `,
289 |     [input.organizationId, input.storeId],
290 |   );
291 |   const row = result.rows[0];
292 |   if (!row) return null;
293 |   return {
294 |     organizationId: row.organization_id,
295 |     storeId: row.store_id,
296 |     integration: 'multi-store-saas',
297 |     mode: row.mode,
298 |     rolloutVersion: row.rollout_version,
299 |     sampleRateBps: row.sample_rate_bps,
300 |     samplingKey: createHash('sha256')
301 |       .update(`multi-store-saas:${row.organization_id}:${row.store_id}`)
302 |       .digest('hex')
303 |       .slice(0, 48),
304 |   };
305 | }
306 |
307 | async function validateAttemptReferences(
308 |   client: PoolClient,
309 |   input: {
310 |     organizationId: string;
311 |     storeId: string;
312 |     attempt: NativeShadowAttemptInput;
313 |   },
314 | ): Promise<void> {
315 |   if (input.attempt.status === 'assessment_failed') return;
316 |   const assessment = await client.query<{ external_order_id: string | null }>(
317 |     `
318 |       select external_order_id from risk_assessments
319 |       where id = $1 and organization_id = $2 and store_id = $3
320 |       limit 1
321 |     `,
322 |     [input.attempt.assessment_id, input.organizationId, input.storeId],
323 |   );
324 |   if (assessment.rows[0]?.external_order_id !== input.attempt.external_order_id) {
325 |     throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH');
326 |   }
327 |   if (input.attempt.status === 'comparison_succeeded') {
328 |     const comparison = await client.query<{ external_order_id: string; assessment_id: string }>(
329 |       `
330 |         select external_order_id, assessment_id from integration_shadow_comparisons
331 |         where id = $1 and organization_id = $2 and store_id = $3
332 |           and integration = 'multi-store-saas'
333 |         limit 1
334 |       `,
335 |       [input.attempt.comparison_id, input.organizationId, input.storeId],
336 |     );
337 |     const row = comparison.rows[0];
338 |     if (
339 |       row?.external_order_id !== input.attempt.external_order_id ||
340 |       row.assessment_id !== input.attempt.assessment_id
341 |     ) {
342 |       throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH');
343 |     }
344 |   }
345 | }
346 |
347 | function validateAttemptShape(attempt: NativeShadowAttemptInput): void {
348 |   const valid =
349 |     (attempt.status === 'comparison_succeeded' &&
350 |       !attempt.failure_code &&
351 |       Boolean(attempt.assessment_id) &&
352 |       Boolean(attempt.comparison_id)) ||
353 |     (attempt.status === 'assessment_failed' &&
354 |       (attempt.failure_code === 'GUARD_ASSESSMENT_FAILED' ||
355 |         attempt.failure_code === 'GUARD_TIMEOUT') &&
356 |       !attempt.assessment_id &&
357 |       !attempt.comparison_id) ||
358 |     (attempt.status === 'comparison_persist_failed' &&
359 |       attempt.failure_code === 'COMPARISON_PERSIST_FAILED' &&
360 |       Boolean(attempt.assessment_id) &&
361 |       !attempt.comparison_id);
362 |   if (!valid) {
363 |     throw new NativeShadowPilotPersistenceError('NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH');
364 |   }
365 | }
366 |
367 | function sameAttempt(existing: ExistingAttemptRow, attempt: NativeShadowAttemptInput): boolean {
368 |   return (
369 |     existing.external_order_id === attempt.external_order_id &&
370 |     existing.rollout_version === attempt.rollout_version &&
371 |     existing.sample_bucket === attempt.sample_bucket &&
372 |     existing.sample_rate_bps === attempt.sample_rate_bps &&
373 |     existing.status === attempt.status &&
374 |     existing.failure_code === (attempt.failure_code ?? null) &&
375 |     existing.assessment_id === (attempt.assessment_id ?? null) &&
376 |     existing.comparison_id === (attempt.comparison_id ?? null) &&
377 |     new Date(existing.evaluated_at).toISOString() === attempt.evaluated_at
378 |   );
379 | }
380 |
381 | interface AggregateRow {
382 |   sampled_orders: number;
383 |   successful_comparisons: number;
384 |   assessment_failures: number;
385 |   persistence_failures: number;
386 |   disagreements: number;
387 |   minimum_delta: number | null;
388 |   maximum_delta: number | null;
389 |   average_delta: number | string | null;
390 |   lower_count: number;
391 |   equal_count: number;
392 |   higher_count: number;
393 | }
394 |
395 | async function loadAggregate(
396 |   pool: Pool,
397 |   input: { where: string; values: unknown[] },
398 | ): Promise<AggregateRow> {
399 |   const nowIndex = input.values.length;
400 |   const result = await pool.query<AggregateRow>(
401 |     `
402 |       select
403 |         count(*)::int as sampled_orders,
404 |         count(*) filter (where a.status = 'comparison_succeeded')::int as successful_comparisons,
405 |         count(*) filter (where a.status = 'assessment_failed')::int as assessment_failures,
406 |         count(*) filter (where a.status = 'comparison_persist_failed')::int as persistence_failures,
407 |         count(*) filter (
408 |           where a.status = 'comparison_succeeded' and c.decision_changed
409 |         )::int as disagreements,
410 |         min(c.score_delta)::int as minimum_delta,
411 |         max(c.score_delta)::int as maximum_delta,
412 |         round(avg(c.score_delta)::numeric, 2) as average_delta,
413 |         count(*) filter (where c.score_delta < 0)::int as lower_count,
414 |         count(*) filter (where c.score_delta = 0)::int as equal_count,
415 |         count(*) filter (where c.score_delta > 0)::int as higher_count
416 |       from integration_shadow_attempts a
417 |       left join integration_shadow_comparisons c
418 |         on c.id = a.comparison_id
419 |         and c.organization_id = a.organization_id
420 |         and c.store_id = a.store_id
421 |       where ${input.where}
422 |         and a.integration = 'multi-store-saas'
423 |         and a.created_at >= $${nowIndex}::timestamptz - interval '30 days'
424 |     `,
425 |     input.values,
426 |   );
427 |   return (
428 |     result.rows[0] ?? {
429 |       sampled_orders: 0,
430 |       successful_comparisons: 0,
431 |       assessment_failures: 0,
432 |       persistence_failures: 0,
433 |       disagreements: 0,
434 |       minimum_delta: null,
435 |       maximum_delta: null,
436 |       average_delta: null,
437 |       lower_count: 0,
438 |       equal_count: 0,
439 |       higher_count: 0,
440 |     }
441 |   );
442 | }
443 |
444 | function buildReport(
445 |   rollout: NativeShadowRolloutRecord,
446 |   aggregate: AggregateRow,
447 | ): NativeShadowPilotReport {
448 |   return {
449 |     mode: rollout.mode,
450 |     rollout_version: rollout.rolloutVersion,
451 |     sample_rate_bps: rollout.sampleRateBps,
452 |     sampled_orders: aggregate.sampled_orders,
453 |     successful_comparisons: aggregate.successful_comparisons,
454 |     assessment_failures: aggregate.assessment_failures,
455 |     persistence_failures: aggregate.persistence_failures,
456 |     decision_disagreement_rate:
457 |       aggregate.successful_comparisons === 0
458 |         ? null
459 |         : Number((aggregate.disagreements / aggregate.successful_comparisons).toFixed(4)),
460 |     score_delta: {
461 |       minimum: aggregate.minimum_delta,
462 |       maximum: aggregate.maximum_delta,
463 |       average: aggregate.average_delta === null ? null : Number(aggregate.average_delta),
464 |       lower: aggregate.lower_count,
465 |       equal: aggregate.equal_count,
466 |       higher: aggregate.higher_count,
467 |     },
468 |   };
469 | }
470 |
```

### docs/adr/0011-selected-source-shadow-pilot.md

Bytes: 5467
SHA-256: 7c64f558d829128efe933b99a44dbb3c03e374fc2605a6d9355ce61462607ad8
Lines: 1-105 of 105

```markdown
  1 | # ADR 0011: Selected source-platform shadow pilot
  2 |
  3 | ## Status
  4 |
  5 | Accepted
  6 |
  7 | ## Date
  8 |
  9 | 2026-07-18
 10 |
 11 | ## Context
 12 |
 13 | The native multi-store adapter already supports deterministic `off` and `shadow` modes while keeping the legacy source-platform decision authoritative. A concrete source integration, store opt-in boundary, durable advisory evidence, and tenant-scoped pilot reporting are required before merchant calibration can begin.
 14 |
 15 | The pilot must not introduce automatic blocking, provider calls in checkout, scoring in API handlers, or external I/O inside the canonical Risk Engine.
 16 |
 17 | ## Decision drivers
 18 |
 19 | - Run native evaluation only after the source platform has durably persisted an order.
 20 | - Revalidate organization/store scope from authoritative relational data.
 21 | - Keep checkout behavior unchanged during Guard, timeout, or persistence failures.
 22 | - Make duplicate source retries deterministic and idempotent.
 23 | - Measure comparison quality and operational failures without storing secrets.
 24 | - Require explicit store-level opt-in with a default of `off`.
 25 |
 26 | ## Considered options
 27 |
 28 | 1. Call Guard synchronously before source order persistence.
 29 | 2. Run shadow evaluation after persistence but configure rollout only in source application settings.
 30 | 3. Run post-persist evaluation with Ozzyl Guard as the authoritative store-scoped rollout and evidence boundary.
 31 | 4. Introduce an enforcement mode during the pilot.
 32 |
 33 | ## Decision
 34 |
 35 | Use option 3.
 36 |
 37 | The selected `multi-store-saas` source path must:
 38 |
 39 | - reload the persisted order through an authoritative source-order reader;
 40 | - verify the returned organization, store, and order identifiers before any Guard call;
 41 | - fetch a tenant-scoped Ozzyl Guard rollout record;
 42 | - run only when the record is explicitly `shadow` and the deterministic sample bucket is selected;
 43 | - keep the normalized legacy decision as the effective result in every outcome;
 44 | - persist successful comparison evidence through the existing comparison contract;
 45 | - persist one immutable sampled-attempt record for success, assessment failure, timeout, or comparison persistence failure;
 46 | - isolate attempt persistence failure as advisory state;
 47 | - use stable source-derived idempotency keys for assessment, comparison, and attempt writes.
 48 |
 49 | PostgreSQL is the durable source of truth for rollout and attempt evidence. Missing rollout rows behave as `off`. Cache remains non-authoritative.
 50 |
 51 | Merchant rollout changes require an authenticated browser session, CSRF proof, active owner/admin membership, and exact organization/store scope. Service API keys use the separate `comparisons:write` contract and cannot act as dashboard sessions.
 52 |
 53 | Pilot reporting exposes only bounded, tenant-scoped aggregates: sampled orders, successful comparisons, assessment failures, persistence failures, decision disagreement rate, and bounded score-delta summaries. Raw credentials, phone numbers, provider payloads, cookies, OTPs, and request bodies are prohibited.
 54 |
 55 | No automatic blocking or enforcement mode is added.
 56 |
 57 | ## Consequences
 58 |
 59 | ### Positive
 60 |
 61 | - Checkout remains independent from Guard availability.
 62 | - Explicit store opt-in and relational revalidation prevent accidental cross-tenant rollout.
 63 | - Duplicate source retries produce one immutable evidence record.
 64 | - Pilot disagreement and failure rates become reviewable without exposing secrets.
 65 | - The canonical Risk Engine stays pure and provider-neutral.
 66 |
 67 | ### Negative / trade-offs
 68 |
 69 | - The source platform must provide a reliable persisted-order reader and invoke the hook after commit.
 70 | - Successful comparison and sampled-attempt writes are separate idempotent operations; attempt write failure can leave comparison evidence without a sampled-attempt row and is surfaced as advisory failure.
 71 | - PostgreSQL reporting queries require bounded windows and indexes as pilot volume grows.
 72 | - Automatic enforcement remains unavailable until calibration and a separate accepted decision.
 73 |
 74 | ## Security and privacy impact
 75 |
 76 | - Rollout and attempt writes are constrained by organization/store composite references.
 77 | - Assessment and comparison references are revalidated against the same tenant and external order.
 78 | - Browser mutation is CSRF protected and owner/admin restricted.
 79 | - Service API keys require `comparisons:write`; no raw key is logged or stored by the integration.
 80 | - Dashboard and admin payloads contain aggregate counts and bounded deltas only.
 81 |
 82 | ## Migration / rollout
 83 |
 84 | 1. Apply append-only migration `0011_native_shadow_pilot.sql`.
 85 | 2. Deploy the rollout and attempt repositories plus service/browser contracts.
 86 | 3. Deploy the source post-persist hook with rollout default `off`.
 87 | 4. Explicitly opt in selected stores with a bounded sample rate.
 88 | 5. Review tenant-scoped metrics and failure isolation before expanding sampling.
 89 | 6. Keep broad automatic blocking disabled until a later ADR and calibration evidence.
 90 |
 91 | ## Validation
 92 |
 93 | - Missing rollout rows return `off` and do not call Guard.
 94 | - Source order and rollout scope mismatches stop before assessment.
 95 | - Guard failure and timeout retain the legacy result and record advisory state.
 96 | - Comparison and attempt persistence failures do not change checkout behavior.
 97 | - Concurrent duplicate attempts serialize into one immutable row.
 98 | - Cross-tenant assessment/comparison references are rejected.
 99 | - Merchant and platform reports expose only scoped aggregate metrics.
100 | - Real PostgreSQL migration, tenant-negative, idempotency, and failure-isolation tests pass.
101 |
102 | ## Supersedes / superseded by
103 |
104 | None.
105 |
```

### docs/api/api-specification.md

Bytes: 9477
SHA-256: 4bb607a81f0d80675152eb1d04d56e741bcae8c81a4fe3a717399b43c040ad18
Lines: 1-359 of 359

```markdown
  1 | # API Specification
  2 |
  3 | Base path: `/v1`
  4 |
  5 | ## Authentication
  6 |
  7 | ```http
  8 | Authorization: Bearer ozg_live_<redacted>
  9 | ```
 10 |
 11 | Key prefixes:
 12 |
 13 | - `ozg_test_`
 14 | - `ozg_live_`
 15 |
 16 | Raw keys are returned only at creation. The database stores a hash and a non-secret display prefix.
 17 |
 18 | ### Browser user sessions
 19 |
 20 | Dashboard and platform-admin users do not authenticate with service API keys. Browser authentication uses a separate opaque `HttpOnly`, `SameSite=Lax` session cookie backed by a hash-only PostgreSQL session record.
 21 |
 22 | Browser endpoints are outside the public integration `/v1` namespace:
 23 |
 24 | - `POST /auth/login` — validates email/password, creates the browser session, and returns authorized organization/store scopes plus a CSRF proof.
 25 | - `GET /auth/session` — restores the current user session and authorized scopes.
 26 | - `POST /auth/logout` — requires `X-CSRF-Token` and revokes the current session.
 27 | - `GET /dashboard/v1/overview?organization_id=...&store_id=...` — returns tenant-scoped live merchant data and requires both organization and store scope.
 28 | - `GET /admin/v1/overview` — returns global operations data only for an explicit `platform_admin` user.
 29 |
 30 | Browser responses use `Cache-Control: no-store`. Raw session tokens, password material, CSRF proofs, cookies, API keys, and provider credentials must not be logged.
 31 |
 32 | ## Common headers
 33 |
 34 | - `Idempotency-Key` for create operations
 35 | - `X-Request-ID` optional client request identifier
 36 | - `Content-Type: application/json`
 37 |
 38 | ## Canonical success response
 39 |
 40 | ```json
 41 | {
 42 |   "success": true,
 43 |   "assessment_id": "ras_123",
 44 |   "risk_score": 72,
 45 |   "risk_level": "high",
 46 |   "decision": "verify",
 47 |   "confidence": 0.82,
 48 |   "signals": [
 49 |     {
 50 |       "code": "low_delivery_rate",
 51 |       "score": 30,
 52 |       "description": "Customer delivery rate is 28%"
 53 |     }
 54 |   ],
 55 |   "courier_summary": {
 56 |     "total": 12,
 57 |     "delivered": 5,
 58 |     "returned": 4,
 59 |     "cancelled_before_shipping": 3
 60 |   }
 61 | }
 62 | ```
 63 |
 64 | Additional non-breaking metadata may include freshness, provider count, recommended actions, engine/policy versions, degraded state, and response time.
 65 |
 66 | ## Create risk assessment
 67 |
 68 | ```http
 69 | POST /v1/risk-assessments
 70 | ```
 71 |
 72 | Request:
 73 |
 74 | ```json
 75 | {
 76 |   "external_order_id": "WC-1092",
 77 |   "phone": "01712345678",
 78 |   "order_total": 1850,
 79 |   "payment_method": "cod",
 80 |   "shipping_address": {
 81 |     "district": "Dhaka",
 82 |     "area": "Mirpur"
 83 |   },
 84 |   "items_count": 2,
 85 |   "session": {
 86 |     "ip": "203.0.113.5",
 87 |     "device_id": "dev_example",
 88 |     "user_agent": "example"
 89 |   }
 90 | }
 91 | ```
 92 |
 93 | Expanded response:
 94 |
 95 | ```json
 96 | {
 97 |   "success": true,
 98 |   "assessment_id": "ras_123",
 99 |   "risk_score": 72,
100 |   "confidence": 0.86,
101 |   "risk_level": "high",
102 |   "decision": "hold",
103 |   "signals": [
104 |     {
105 |       "code": "courier_low_delivery_rate",
106 |       "category": "courier",
107 |       "score": 30,
108 |       "description": "Delivery success rate is 28% across 11 shipped orders"
109 |     }
110 |   ],
111 |   "courier_summary": {
112 |     "freshness": "fresh",
113 |     "providers": 1,
114 |     "total": 14,
115 |     "delivered": 3,
116 |     "returned": 8,
117 |     "cancelled_before_shipping": 3
118 |   },
119 |   "recommended_actions": ["require_otp", "request_advance_payment"],
120 |   "meta": {
121 |     "engine_version": "1.0.0",
122 |     "policy_version": "store_12_v3",
123 |     "degraded": false,
124 |     "response_ms": 184
125 |   }
126 | }
127 | ```
128 |
129 | Unknown/no-data behavior must be explicit: `risk_level: "unknown"`, low confidence, `decision: "verify"`, and a degraded/freshness explanation. It must not return an implicit safe result.
130 |
131 | ## Read assessment
132 |
133 | ```http
134 | GET /v1/risk-assessments/{assessment_id}
135 | ```
136 |
137 | The caller must be authorized for the assessment's organization/store scope.
138 |
139 | ## Create courier refresh job
140 |
141 | ```http
142 | POST /v1/courier-observations/refresh
143 | ```
144 |
145 | Request:
146 |
147 | ```json
148 | {
149 |   "phone": "01712345678",
150 |   "providers": ["steadfast"],
151 |   "force": false
152 | }
153 | ```
154 |
155 | Return `202 Accepted` with a job id when asynchronous. Checkout integrations must not wait for Playwright/session refresh.
156 |
157 | ## Send OTP
158 |
159 | ```http
160 | POST /v1/verifications/otp/send
161 | ```
162 |
163 | ```json
164 | {
165 |   "assessment_id": "ras_123",
166 |   "phone": "01712345678",
167 |   "purpose": "cod_order_confirmation"
168 | }
169 | ```
170 |
171 | `Idempotency-Key` is required. A new request returns `202 Accepted`:
172 |
173 | ```json
174 | {
175 |   "success": true,
176 |   "verification_id": "ver_123",
177 |   "expires_at": "2026-07-17T10:05:00.000Z",
178 |   "status": "queued"
179 | }
180 | ```
181 |
182 | The API creates the scoped verification session, OTP hash, and encrypted provider-delivery job transactionally. It does not call the OTP provider. An idempotent replay returns the same logical response with `200 OK`.
183 |
184 | ## Verify OTP
185 |
186 | ```http
187 | POST /v1/verifications/otp/verify
188 | ```
189 |
190 | ```json
191 | {
192 |   "verification_id": "ver_123",
193 |   "otp": "123456"
194 | }
195 | ```
196 |
197 | Verification is tenant-scoped and database-only. While provider delivery is still queued, the API returns `409 DELIVERY_PENDING`; terminal delivery failure returns `409 DELIVERY_FAILED`; expired/invalid OTP and attempt-limit behavior remain explicit. Successful verification emits `verification.verified` through the durable webhook outbox.
198 |
199 | ## Submit outcome
200 |
201 | ```http
202 | POST /v1/order-outcomes
203 | ```
204 |
205 | ```json
206 | {
207 |   "external_order_id": "WC-1092",
208 |   "assessment_id": "ras_123",
209 |   "outcome": "returned",
210 |   "provider": "steadfast",
211 |   "reason": "customer_refused",
212 |   "occurred_at": "2026-07-16T10:30:00Z"
213 | }
214 | ```
215 |
216 | Outcome submissions require idempotency and evidence/source metadata. Integrations should send outcomes from the first MVP.
217 |
218 | ## Record native shadow comparison
219 |
220 | ```http
221 | POST /v1/integration-comparisons/native-shadow
222 | ```
223 |
224 | This endpoint requires `comparisons:write` and `Idempotency-Key`. It is only for
225 | post-order native-client shadow evaluation; it must not determine checkout action.
226 |
227 | ```json
228 | {
229 |   "external_order_id": "ORDER-100",
230 |   "assessment_id": "ras_123",
231 |   "legacy_score": 20,
232 |   "legacy_decision": "allow",
233 |   "rollout_version": "pilot-v1",
234 |   "sample_bucket": 140,
235 |   "sample_rate_bps": 1000,
236 |   "evaluated_at": "2026-07-18T08:00:00Z"
237 | }
238 | ```
239 |
240 | The API loads the assessment from the authenticated organization/store scope and
241 | derives the Guard score, decision, confidence, delta, and decision-change flag
242 | server-side. The durable record contains no phone, API key, provider credential,
243 | or unrestricted order snapshot. Reusing an idempotency key with different
244 | comparison evidence returns a conflict.
245 |
246 | ## Read native shadow rollout
247 |
248 | ```http
249 | GET /v1/integration-rollouts/native-shadow
250 | ```
251 |
252 | This service endpoint requires `comparisons:write`. It returns only the active
253 | organization/store rollout for the authenticated service API key. A missing
254 | rollout row is represented as `mode: "off"`, `rollout_version: "off"`, and
255 | `sample_rate_bps: 0`. The returned sampling key is a deterministic scoped
256 | identifier, not a credential.
257 |
258 | ```json
259 | {
260 |   "success": true,
261 |   "organization_id": "org_123",
262 |   "store_id": "store_123",
263 |   "integration": "multi-store-saas",
264 |   "mode": "shadow",
265 |   "rollout_version": "pilot-v1",
266 |   "sample_rate_bps": 1000,
267 |   "sampling_key": "scoped-deterministic-key"
268 | }
269 | ```
270 |
271 | ## Record native shadow attempt
272 |
273 | ```http
274 | POST /v1/integration-attempts/native-shadow
275 | ```
276 |
277 | This endpoint requires `comparisons:write` and `Idempotency-Key`. It records one
278 | immutable sampled-order state after the source order has been persisted.
279 | Allowed states are:
280 |
281 | - `comparison_succeeded`, with matching scoped assessment and comparison IDs;
282 | - `assessment_failed`, with `GUARD_ASSESSMENT_FAILED` or `GUARD_TIMEOUT`;
283 | - `comparison_persist_failed`, with the scoped assessment ID and
284 |   `COMPARISON_PERSIST_FAILED`.
285 |
286 | ```json
287 | {
288 |   "external_order_id": "ORDER-100",
289 |   "rollout_version": "pilot-v1",
290 |   "sample_bucket": 140,
291 |   "sample_rate_bps": 1000,
292 |   "status": "assessment_failed",
293 |   "failure_code": "GUARD_TIMEOUT",
294 |   "evaluated_at": "2026-07-18T08:00:00Z"
295 | }
296 | ```
297 |
298 | The repository revalidates the active store rollout plus every assessment and
299 | comparison reference. Duplicate retries return the same attempt ID; conflicting
300 | reuse of the idempotency key is rejected. Database errors return a structured,
301 | secret-free advisory error and must not alter source checkout behavior.
302 |
303 | ## Administer store rollout
304 |
305 | ```http
306 | PUT /dashboard/v1/native-shadow-rollout
307 | ```
308 |
309 | This browser endpoint is separate from service API-key authentication. It
310 | requires an authenticated dashboard session, CSRF proof, an active owner/admin
311 | membership, and exact organization/store scope. Valid configurations are only
312 | `off` with zero sampling or `shadow` with a positive bounded sample rate. No
313 | enforcement mode is accepted.
314 |
315 | ## Webhooks
316 |
317 | Events:
318 |
319 | - `assessment.completed`
320 | - `verification.verified`
321 | - `verification.failed`
322 | - `courier.connection_failed`
323 | - `order.outcome_recorded`
324 | - `usage.limit_warning`
325 |
326 | Webhook requirements:
327 |
328 | - HMAC signature
329 | - timestamp header
330 | - replay protection
331 | - retry with exponential backoff
332 | - delivery log
333 | - bounded payload and SSRF-safe destination validation
334 |
335 | ## Error format
336 |
337 | ```json
338 | {
339 |   "success": false,
340 |   "error": {
341 |     "code": "INVALID_PHONE",
342 |     "message": "A valid Bangladesh mobile number is required",
343 |     "details": {}
344 |   },
345 |   "request_id": "req_123"
346 | }
347 | ```
348 |
349 | ## Contract rules
350 |
351 | - All integrations use this same contract.
352 | - Risk levels and decisions are lowercase canonical enums.
353 | - Signals use `code`; adapters/plugins must not invent `name` or `type` variants.
354 | - Provider/network failure must not appear as low risk.
355 | - API key environment and store scope must be enforced server-side.
356 | - Quota/entitlement enforcement must be safe under concurrency.
357 | - Idempotent retries return the original logically equivalent result.
358 | - Webhook and OTP provider network delivery never run in the synchronous API or checkout request path.
359 |
```

### docs/database/database-design.md

Bytes: 15567
SHA-256: a13641dea2a3ecdc5352b9531878bbb7f2306b520f10ff190697a22ad8324be5
Lines: 1-434 of 434

```markdown
  1 | # Database Design
  2 |
  3 | ## Recommended production database
  4 |
  5 | Use PostgreSQL for the standalone product. Cloudflare D1 can remain suitable for an early pilot, but shared intelligence, analytics, concurrent billing, and relational integrity will benefit from PostgreSQL.
  6 |
  7 | ## Identity and tenancy
  8 |
  9 | ### `users`
 10 |
 11 | - `id`
 12 | - `email`
 13 | - `password_hash` or managed-auth identifier
 14 | - `email_verified_at`
 15 | - `platform_role`: `merchant` or explicit `platform_admin`
 16 | - `status`
 17 | - timestamps
 18 |
 19 | ### `organizations`
 20 |
 21 | - `id`
 22 | - `name`
 23 | - `slug`
 24 | - `plan_id`
 25 | - `status`
 26 | - timestamps
 27 |
 28 | ### `organization_members`
 29 |
 30 | - `organization_id`
 31 | - `user_id`
 32 | - `role`
 33 | - permissions
 34 | - timestamps
 35 |
 36 | ### `stores`
 37 |
 38 | - `id`
 39 | - `organization_id`
 40 | - `name`
 41 | - `platform`
 42 | - `external_store_id`
 43 | - `timezone`
 44 | - `currency`
 45 | - `status`
 46 | - timestamps
 47 |
 48 | All merchant-owned repository methods must require an explicit organization/store scope. Scope filters must not be optional. API keys, feature assembly, writes, dashboards, and administrative repositories must join back to active `organizations` and `stores` so a syntactically matching but relationally mismatched scope fails closed.
 49 |
 50 | ## API and billing
 51 |
 52 | ### `api_keys`
 53 |
 54 | - `id`
 55 | - `organization_id`
 56 | - `store_id` nullable
 57 | - `environment`: `test` or `live`
 58 | - `key_hash`
 59 | - `key_prefix`
 60 | - `name`
 61 | - `scopes`
 62 | - `allowed_origins`
 63 | - `last_used_at`
 64 | - `expires_at`
 65 | - `revoked_at`
 66 | - timestamps
 67 |
 68 | Raw API keys are shown once and never stored. Key prefixes are `ozg_test_` and `ozg_live_` followed by sufficient random material. Resolution accepts a key only when its active store belongs to its active organization.
 69 |
 70 | ### `usage_events`
 71 |
 72 | - `id`
 73 | - `organization_id`
 74 | - `api_key_id`
 75 | - `event_type`
 76 | - `units`
 77 | - `request_id`
 78 | - `response_ms`
 79 | - `status_code`
 80 | - timestamp
 81 |
 82 | Usage entitlement reservation and assessment creation must be atomic or use a design that cannot be bypassed by concurrent requests.
 83 |
 84 | ### `subscriptions`
 85 |
 86 | - organization
 87 | - plan
 88 | - billing status
 89 | - cycle dates
 90 | - provider references
 91 |
 92 | ## Courier subsystem
 93 |
 94 | ### `courier_accounts`
 95 |
 96 | - `id`
 97 | - `store_id`
 98 | - `provider`
 99 | - `status`
100 | - `credential_version`
101 | - `last_connected_at`
102 | - `last_success_at`
103 | - `last_failure_at`
104 | - `failure_code`
105 | - timestamps
106 |
107 | ### `courier_credentials`
108 |
109 | - `courier_account_id`
110 | - encrypted credential payload or vault reference
111 | - encryption key version
112 | - timestamps
113 |
114 | ### `courier_sessions`
115 |
116 | - `courier_account_id`
117 | - encrypted cookie/token payload
118 | - `expires_at`
119 | - `validated_at`
120 | - `status`
121 | - timestamps
122 |
123 | ### `courier_observations`
124 |
125 | - `id`
126 | - `store_id`
127 | - `provider`
128 | - `phone_hash`
129 | - optionally encrypted normalized phone for operational lookup
130 | - `total_orders`
131 | - `delivered_orders`
132 | - `returned_orders`
133 | - `cancelled_before_shipping`
134 | - `success_rate`
135 | - `confidence`
136 | - `source_type`
137 | - `observed_at`
138 | - `expires_at`
139 | - encrypted raw payload reference
140 |
141 | Unique/index recommendation:
142 |
143 | - `(store_id, provider, phone_hash, observed_at)`
144 | - latest-observation index by `(store_id, phone_hash, provider, observed_at desc)`
145 |
146 | ### `courier_jobs`
147 |
148 | - `courier_account_id`
149 | - job type and durable payload
150 | - status and attempts
151 | - scheduled time
152 | - `claimed_by`
153 | - `claimed_at`
154 | - `lease_expires_at`
155 | - started/completed time
156 | - error code
157 |
158 | Courier jobs are claimed atomically with `FOR UPDATE SKIP LOCKED`. The current worker owner must match every start, completion, retry, or terminal-failure transition. Expired `claimed` or `processing` jobs may be reclaimed while fresh leases cannot be stolen. Exhausted stale jobs fail closed with `LEASE_EXPIRED`.
159 |
160 | Organization, store, and provider scope come from the `courier_accounts` and `stores` relationships. Payload scope fields are compatibility assertions only and must never override relational scope.
161 |
162 | ## Risk subsystem
163 |
164 | ### `risk_assessments`
165 |
166 | - `id`
167 | - `organization_id`
168 | - `store_id`
169 | - `external_order_id`
170 | - `phone_hash`
171 | - encrypted phone reference if operationally required
172 | - order snapshot fields
173 | - score
174 | - confidence
175 | - risk level
176 | - decision
177 | - engine version
178 | - policy version
179 | - degraded flags
180 | - timestamps
181 |
182 | ### `integration_shadow_comparisons`
183 |
184 | - immutable organization/store-scoped native-client comparison evidence
185 | - source API key and integration name
186 | - external order and scoped assessment references
187 | - legacy score/decision
188 | - server-derived Guard score/decision/confidence
189 | - decision-change flag and score delta
190 | - rollout version, deterministic sample bucket, and sample rate
191 | - evaluation and creation timestamps
192 |
193 | The assessment foreign key includes organization and store scope. No raw phone,
194 | API key, provider credential, or unrestricted order snapshot is stored.
195 | Idempotency is unique by organization, store, integration, and key; conflicting
196 | reuse fails closed.
197 |
198 | ### `integration_shadow_rollouts`
199 |
200 | - one authoritative row per organization, store, and integration
201 | - `off` or `shadow` mode only
202 | - rollout version and bounded basis-point sample rate
203 | - optional owner/admin user reference for the last update
204 | - composite store/organization foreign key
205 | - timestamps for audit and rollout review
206 |
207 | No row is equivalent to `off`. Database constraints require zero sampling for
208 | `off` and positive sampling for `shadow`. This table contains no provider or
209 | service credential.
210 |
211 | ### `integration_shadow_attempts`
212 |
213 | - immutable organization/store/integration sampled-order evidence
214 | - source API-key record reference, never the raw key
215 | - external order ID and stable idempotency key
216 | - rollout version, deterministic bucket, and sample rate
217 | - status: successful comparison, assessment failure, or comparison persistence
218 |   failure
219 | - bounded failure code plus scoped assessment/comparison references when required
220 | - evaluation and creation timestamps
221 |
222 | Composite foreign keys ensure referenced assessments and comparisons belong to
223 | the same organization/store. Check constraints enforce valid status/reference
224 | combinations. Concurrent retries serialize through the repository and the
225 | unique organization/store/integration/idempotency boundary.
226 |
227 | ### `risk_signals`
228 |
229 | - assessment id
230 | - signal code
231 | - category
232 | - score contribution
233 | - confidence
234 | - description
235 | - evidence reference
236 |
237 | ### `risk_policies`
238 |
239 | - store id
240 | - version
241 | - thresholds
242 | - action configuration
243 | - active flag
244 | - timestamps
245 |
246 | ### `order_outcomes`
247 |
248 | - store/order references
249 | - outcome
250 | - provider
251 | - reason
252 | - source
253 | - confirmed at
254 | - evidence reference
255 |
256 | ## Event and webhook subsystem
257 |
258 | ### `webhook_endpoints`
259 |
260 | - `id`
261 | - `organization_id`
262 | - optional `store_id`
263 | - HTTPS destination URL
264 | - encrypted signing-secret envelope
265 | - subscribed event-type array
266 | - status
267 | - timestamps
268 |
269 | A store-scoped endpoint receives only events for that store. An organization-wide endpoint may receive events for any authorized store in the organization. Endpoint secrets are never stored as plaintext. Administration lists operational endpoint metadata only after active owner/admin reauthorization and never returns `secret_encrypted`.
270 |
271 | ### `webhook_deliveries`
272 |
273 | - `id`
274 | - `endpoint_id`
275 | - `organization_id`
276 | - optional `store_id`
277 | - stable `event_id`
278 | - canonical `event_type`
279 | - canonical `event_payload`
280 | - `occurred_at`
281 | - status and attempts
282 | - `next_attempt_at`
283 | - `response_status`
284 | - error code
285 | - `claimed_by`
286 | - `claimed_at`
287 | - `lease_expires_at`
288 | - `completed_at`
289 | - timestamps
290 |
291 | Assessment and outcome repositories insert matching webhook deliveries in the same PostgreSQL transaction as the newly persisted assessment or outcome. A transaction rollback therefore cannot leave a delivery for data that was not committed, and an idempotency loser does not emit another event.
292 |
293 | The persisted event payload contains explicit organization/store identity and the stable event ID/type. It must not include raw phone values, API keys, OTPs, provider credentials, signing secrets, or unrestricted assessment request snapshots.
294 |
295 | The unique `(endpoint_id, event_id)` constraint prevents duplicate delivery rows. Event workers claim due rows with `FOR UPDATE SKIP LOCKED`, attach an expiring owner lease, and require the current unexpired owner for delivery, retry, or terminal-failure transitions. Stale work can be reclaimed; exhausted stale work fails with `LEASE_EXPIRED`.
296 |
297 | Before a delivery is claimed, its organization/store scope is revalidated against `webhook_endpoints` and `stores`. Mismatched rows fail closed with `WEBHOOK_SCOPE_MISMATCH`.
298 |
299 | Recommended operational indexes:
300 |
301 | - `(status, next_attempt_at, lease_expires_at)` for claim/recovery scans
302 | - `(organization_id, store_id, created_at desc)` for scoped operations views
303 |
304 | ## Reputation subsystem
305 |
306 | ### `reputation_reports`
307 |
308 | - reporter store
309 | - subject phone hash
310 | - category
311 | - evidence type
312 | - order/courier reference
313 | - status
314 | - confidence
315 | - expiry/decay data
316 |
317 | ### `network_reputation`
318 |
319 | Materialized/derived score by phone hash:
320 |
321 | - positive outcomes
322 | - negative courier-confirmed outcomes
323 | - independent reporters
324 | - confidence
325 | - last evidence time
326 | - decay-adjusted score
327 |
328 | ### `reputation_disputes`
329 |
330 | - report/subject
331 | - reason
332 | - evidence
333 | - review status
334 | - resolution
335 |
336 | ## Verification subsystem
337 |
338 | ### `verification_sessions`
339 |
340 | - assessment/order/store
341 | - phone hash
342 | - purpose
343 | - channel
344 | - status
345 | - idempotency key
346 | - maximum verification attempts
347 | - expiry
348 | - verified at
349 |
350 | ### `otp_attempts`
351 |
352 | - verification session
353 | - hashed OTP
354 | - attempts
355 | - provider message id
356 | - sent/delivered/failed times
357 | - expiry
358 |
359 | Never store OTP plaintext in sessions or attempts.
360 |
361 | ### `verification_jobs`
362 |
363 | - verification session
364 | - explicit organization/store scope
365 | - job type
366 | - job-context-encrypted phone/OTP/purpose payload
367 | - status and attempts
368 | - next attempt time
369 | - provider message id and structured error code
370 | - `claimed_by`, `claimed_at`, and `lease_expires_at`
371 | - completion and standard timestamps
372 |
373 | OTP send creation inserts the verification session, hash-only OTP attempt, and encrypted job in one transaction. The API never delivers the provider message synchronously. Workers claim due jobs with `FOR UPDATE SKIP LOCKED`; every transition requires the current unexpired owner and revalidates the job scope against the authoritative session/store relationship. Scope mismatch, stale exhaustion, payload mismatch, or decryption failure fails closed.
374 |
375 | The ciphertext context is `verification-job:<job-id>`. Before provider I/O, the worker validates tenant, purpose, phone HMAC, and OTP hash. Queue rows and logs never contain plaintext phone or OTP values.
376 |
377 | ## Initial migration boundaries
378 |
379 | Migration 0001 should establish only the Phase 1 foundation:
380 |
381 | - users
382 | - sessions
383 | - organizations
384 | - organization_members
385 | - stores
386 | - plans/entitlements
387 | - api_keys
388 | - usage_events
389 | - audit_events
390 |
391 | Courier, risk, verification, event, and reputation tables should be introduced in subsequent append-only migrations aligned with coherent milestones.
392 |
393 | Current ordered migrations:
394 |
395 | 1. `0001_foundation.sql` — identity, tenancy, plans, API keys, usage, and audit.
396 | 2. `0002_courier.sql` — courier accounts, encrypted credential/session records, observations, and jobs.
397 | 3. `0003_risk.sql` — risk policies, assessments, signals, and outcomes.
398 | 4. `0004_verification_events.sql` — OTP verification and webhook delivery foundation.
399 | 5. `0005_durable_operations.sql` — durable job payloads, idempotent outcomes, and idempotency records.
400 | 6. `0006_browser_access.sql` — explicit platform role plus browser dashboard/admin query indexes.
401 | 7. `0007_worker_leases.sql` — explicit courier-worker ownership, claim/lease timestamps, stale-job recovery support, and claim scheduling index.
402 | 8. `0008_webhook_delivery_leases.sql` — scoped canonical webhook event payloads, event-worker ownership/lease timestamps, completion state, and claim/scope indexes.
403 | 9. `0009_verification_delivery_queue.sql` — verification idempotency/attempt controls plus encrypted delivery jobs, owner leases, completion state, and claim/scope indexes.
404 |
405 | Migration 0006 does not store raw session material. `user_sessions.token_hash` remains the only persisted session-token representation. The merchant dashboard repository authorizes with `(user_id, organization_id, store_id)` before running any aggregate query.
406 |
407 | Migration 0007 is append-only and does not rewrite prior migration files. Courier jobs use explicit owner leases and relational account scope.
408 |
409 | Migration 0008 backfills endpoint-derived scope for prior delivery rows. Legacy rows whose canonical event payload cannot be reconstructed are terminalized with `LEGACY_EVENT_PAYLOAD_MISSING` rather than delivered with invented data.
410 |
411 | Migration 0009 leaves prior verification records valid, adds nullable idempotency keys for legacy rows, and introduces a separate encrypted delivery queue without placing plaintext phone or OTP material in existing tables.
412 |
413 | ## Migration history integrity
414 |
415 | `packages/database/migrations/manifest.json` records the SHA-256 checksum for every ordered SQL migration. `db:check` requires the manifest and SQL file list to match exactly and rejects changed, missing, extra, empty, reordered, or prohibited destructive migration files.
416 |
417 | `ozzyl_guard_migrations` stores `name`, non-null `checksum_sha256`, and `applied_at`. The migration runner holds one PostgreSQL advisory lock on one session, rejects unknown or non-contiguous history, and compares every persisted checksum before applying new work. Existing name-only history rows may receive checksums once, transactionally, only from the committed manifest; the checksum column is then enforced `NOT NULL`.
418 |
419 | No numbered domain migration is added for this metadata hardening. The migration runner owns the internal history table, while all application tables and columns remain defined by append-only numbered migrations and the canonical schema package.
420 |
421 | ## Clean logical restore rehearsal
422 |
423 | `npm run db:restore-rehearsal` requires `DATABASE_URL` and a distinct pre-created `RESTORE_DATABASE_URL` with no public relations. It never creates, drops, cleans, or overwrites the source database. PostgreSQL credentials are supplied to client tools through `PG*` environment variables rather than command arguments.
424 |
425 | The rehearsal creates a custom-format `pg_dump`, restores it with `pg_restore`, validates complete migration history, compares a canonical public-schema fingerprint, table counts, sequence state, migration rows, and migration replay. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` additionally compares secret-safe per-table hashes of every row and is enabled in CI; large production-equivalent drills may use counts or a separately approved snapshot-integrity procedure when a full hash scan is too expensive.
426 |
427 | Repository CI applies the complete migration set twice, verifies the history table, and restores into a clean PostgreSQL 16 database. Managed-provider automated backup retention and point-in-time recovery must still be demonstrated separately before the merchant pilot.
428 |
429 | ## Runtime and migration database identities
430 |
431 | `packages/database/src/runtime-role.ts` defines the reviewed current-table runtime policy. The migration owner validates the full public base-table inventory, revokes prior direct table/schema/sequence privileges, grants explicit required `SELECT`/`INSERT`/`UPDATE`, and then verifies effective privileges. `ozzyl_guard_migrations` remains inaccessible.
432 |
433 | The runtime role must already exist as a non-owner `LOGIN` without elevated attributes or inherited memberships. It cannot own the current database, public schema, or public relations and cannot receive `DELETE`, DDL, schema `CREATE`, migration-history access, or role-management privileges. Run `DATABASE_RUNTIME_ROLE=<role> npm run db:runtime-grants` after every migration release; an unreviewed new table causes the command to fail closed until the policy is updated.
434 |
```

### docs/integrations/integrations.md

Bytes: 4579
SHA-256: 887c1d7df2094a6576d29187d651c4d290bd1acb0ba4c14a9ba19be51e2bb4cf
Lines: 1-120 of 120

```markdown
  1 | # Integrations
  2 |
  3 | All integrations use the canonical `/v1` API contract and outcome feedback model. Integration-specific code must not contain a second scoring engine.
  4 |
  5 | ## WooCommerce
  6 |
  7 | ### Required features
  8 |
  9 | - API key and store connection settings
 10 | - Test/live mode
 11 | - COD-only assessment option
 12 | - Threshold/action settings
 13 | - Order metadata and admin badge
 14 | - Hold/flag/require-prepayment actions
 15 | - OTP workflow
 16 | - Outcome webhook when order status changes
 17 | - Manual recheck
 18 | - Retry and explicit degraded-state visibility
 19 |
 20 | ### Contract rules
 21 |
 22 | - Use canonical lowercase risk levels.
 23 | - Use `signals[].code`, not conflicting `name/type` fields.
 24 | - API success must be explicit.
 25 | - Network failure must not be interpreted as low risk.
 26 | - Checkout timeout must stay bounded.
 27 | - Use `Idempotency-Key` derived from store/order/assessment intent.
 28 | - Store the assessment ID and engine/policy metadata with the order.
 29 | - Never automatically cancel solely because a provider call failed.
 30 |
 31 | ### Source plugin reuse
 32 |
 33 | Reusable:
 34 |
 35 | - WordPress settings registration/page skeleton
 36 | - WooCommerce order-created hook concept
 37 | - Order metadata/admin display concept
 38 | - Bounded HTTP timeout concept
 39 |
 40 | Rewrite:
 41 |
 42 | - Endpoint path and request/response contract
 43 | - API key prefix placeholder
 44 | - Uppercase `LOW/MEDIUM/HIGH/CRITICAL` mapping
 45 | - `signals[].type` access
 46 | - Missing explicit success handling mismatch
 47 | - Immediate cancel behavior and low-risk approval wording
 48 | - Outcome feedback, retries, idempotency, manual recheck, OTP, and degraded state
 49 | - Secret storage guidance and connection test behavior
 50 |
 51 | ## Shopify
 52 |
 53 | Initial approach:
 54 |
 55 | - App installation and OAuth
 56 | - Order-created webhook
 57 | - Risk assessment
 58 | - Add order tags/metafields
 59 | - Merchant dashboard action recommendations
 60 | - Outcome sync from fulfilment/order updates
 61 | - Signed webhook verification and replay protection
 62 |
 63 | ## Custom websites
 64 |
 65 | Provide:
 66 |
 67 | - REST API
 68 | - TypeScript SDK
 69 | - PHP SDK
 70 | - Server-side examples
 71 | - Webhook verification helper
 72 | - Clear timeout/retry/idempotency guidance
 73 |
 74 | Browser-only integrations must not expose live API keys. Custom JS should use a merchant server or narrowly scoped short-lived token design selected by ADR.
 75 |
 76 | ## Ozzyl Commerce / `multi-store-saas`
 77 |
 78 | Treat the existing platform as the first native client.
 79 |
 80 | - Remove embedded duplicate risk logic.
 81 | - Call Ozzyl Guard through an internal service client.
 82 | - Reuse store/order IDs as external references.
 83 | - Send order outcomes back to Guard.
 84 | - Keep courier booking in the commerce platform, but risk assessment in Guard.
 85 | - Roll out behind a feature flag and compare old/new decisions before removing old code.
 86 | - The first rollout mode is `off` or `shadow` only; Guard never becomes the
 87 |   effective decision source in this milestone.
 88 | - Select the shadow cohort deterministically from a stable store-specific
 89 |   sampling key and order ID so retries stay in the same cohort.
 90 | - Run shadow evaluation after order persistence, not as a checkout-blocking
 91 |   control. A Guard or comparison-persistence failure returns a safe code while
 92 |   the legacy result remains authoritative.
 93 | - Persist successful comparisons through
 94 |   `POST /v1/integration-comparisons/native-shadow`; the API derives Guard values
 95 |   from the scoped assessment and rejects cross-store or mismatched-order data.
 96 | - The concrete post-persist hook must reload the durable source order through
 97 |   `PersistedCommerceOrderReader` and verify organization, store, and order IDs
 98 |   before fetching rollout configuration or calling Guard.
 99 | - Fetch authoritative rollout state from
100 |   `GET /v1/integration-rollouts/native-shadow`. Missing configuration behaves as
101 |   `off`; a store runs shadow only after an explicit owner/admin opt-in.
102 | - Record every sampled success, assessment failure, timeout, or comparison
103 |   persistence failure through `POST /v1/integration-attempts/native-shadow`.
104 |   Source retries reuse stable idempotency keys.
105 | - Failure to read rollout state or write attempt evidence is advisory only. The
106 |   normalized legacy result remains the effective decision.
107 | - Do not enable enforcement or broad automatic blocking until pilot outcomes
108 |   have been reviewed and thresholds calibrated.
109 |
110 | ## Meta audience exclusion — later phase
111 |
112 | Workflow:
113 |
114 | 1. Merchant authorizes Meta assets.
115 | 2. Eligible high-confidence identities are normalized and hashed.
116 | 3. Ozzyl Guard updates a merchant-owned customer-list custom audience.
117 | 4. Merchant excludes that audience from selected ad sets.
118 |
119 | This is merchant-specific audience management, not a global Facebook user block. It requires separate privacy/legal review and is not part of the first MVP.
120 |
```

### docs/operations/operations-observability.md

Bytes: 11298
SHA-256: 98a477a9461c07abf0022c9d78ddd6d131f3cec4aa4d279e132d541954b05273
Lines: 1-260 of 260

```markdown
  1 | # Operations and Observability
  2 |
  3 | ## Accepted observability boundary
  4 |
  5 | [ADR 0010 — Vendor-neutral production observability](../adr/0010-vendor-neutral-production-observability.md) requires structured JSON logs, OpenTelemetry-compatible traces and metrics, correlation across synchronous and asynchronous work, and a managed backend selected during infrastructure provisioning.
  6 |
  7 | Instrumentation belongs at API, repository, provider-adapter, and worker boundaries. It must not introduce external I/O into the pure risk engine.
  8 |
  9 | ## Required metrics
 10 |
 11 | ### API
 12 |
 13 | - Request rate
 14 | - Error rate
 15 | - p50/p95/p99 latency
 16 | - Rate-limit events
 17 | - Quota/entitlement failures
 18 | - Idempotency replays/conflicts
 19 | - Degraded assessments
 20 | - Authentication/session failures without sensitive values
 21 | - Transactional outbox rows created by event type
 22 | - Outbox enqueue failures and transaction rollbacks
 23 |
 24 | ### PostgreSQL
 25 |
 26 | - Availability and failover state
 27 | - Connection usage and pool wait
 28 | - Lock wait and deadlock rate
 29 | - Slow query rate
 30 | - Migration success/failure
 31 | - Backup and restore status, duration, age, and last successful drill
 32 | - Migration manifest/history checksum mismatch count
 33 | - Durable-job claim and lease-recovery rate
 34 | - `SKIP LOCKED` claim throughput
 35 | - Stale-lease recovery and exhausted-work terminalization
 36 |
 37 | ### Courier
 38 |
 39 | - Session refresh success rate
 40 | - Session age
 41 | - Provider response latency
 42 | - Provider error rate by structured code
 43 | - Observation freshness
 44 | - Queue lag
 45 | - Reconnect-required accounts
 46 | - Selector/login-state failures
 47 |
 48 | ### Verification
 49 |
 50 | - OTP queued/sent/delivered/failed
 51 | - Verification success rate
 52 | - Provider latency and timeout rate
 53 | - Claim throughput by verification-worker replica
 54 | - Fresh/recovered/lost lease counts
 55 | - Retry rate and attempts distribution
 56 | - Payload decryption/validation and scope-mismatch failures
 57 | - Resend rate and abuse blocks
 58 | - Queue lag, oldest due job, exhausted `LEASE_EXPIRED`, and dead-letter count
 59 |
 60 | The durable runner is implemented, but production delivery remains disabled until a reviewed provider adapter/account is selected, bundled, configured, and validated in staging.
 61 |
 62 | ### Webhooks and events
 63 |
 64 | - Outbox backlog and oldest-event age
 65 | - Due versus future retry count
 66 | - Claim throughput by event-worker replica
 67 | - Fresh, recovered, and lost lease counts
 68 | - Delivery success/failure
 69 | - Retry rate and attempts distribution
 70 | - Destination response class
 71 | - DNS resolution failure count
 72 | - Unsafe-destination rejection count
 73 | - Endpoint inactive/decryption/scope-mismatch failures
 74 | - Exhausted `LEASE_EXPIRED` count
 75 | - End-to-end duration from `occurred_at` to `completed_at`
 76 | - Delivery latency by event type
 77 |
 78 | ### Risk quality
 79 |
 80 | - Decision distribution
 81 | - Outcome by score band
 82 | - False-positive rate
 83 | - False-negative rate
 84 | - Confidence distribution
 85 | - Unknown/degraded distribution
 86 | - Savings estimate accuracy
 87 |
 88 | ### Native shadow pilot
 89 |
 90 | - Explicitly opted-in stores
 91 | - Sampled orders
 92 | - Successful comparisons
 93 | - Guard assessment failures and timeouts
 94 | - Comparison and sampled-attempt persistence failures
 95 | - Decision disagreement rate
 96 | - Bounded score-delta minimum, maximum, average, and lower/equal/higher counts
 97 | - Rollout reads, updates, idempotent replays, conflicts, and tenant-scope rejections
 98 |
 99 | Merchant views must query only the authorized organization/store and a bounded
100 | window. Platform administration may aggregate across active stores but must not
101 | expose customer identifiers, external order IDs, raw request payloads, API keys,
102 | provider credentials, cookies, OTPs, or signing secrets. Reporting failure must
103 | not affect source checkout or the effective legacy decision.
104 |
105 | ## Logging
106 |
107 | Use structured logs with:
108 |
109 | - request id
110 | - organization/store id or safe internal reference
111 | - assessment/job/event/delivery id
112 | - provider or destination category where safe
113 | - worker id
114 | - error code
115 | - attempt number
116 | - duration
117 | - engine/policy version when relevant
118 | - deployment environment and service name
119 |
120 | Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, webhook signing secrets, destination URL credentials, and unrestricted request/event bodies are prohibited.
121 |
122 | Event and verification workers emit startup and structured error records. Production instrumentation must add counters, histograms, and correlation spans without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, provider credentials, or DNS answer details that disclose internal topology.
123 |
124 | Recommended event-worker error codes include:
125 |
126 | - `UNSAFE_WEBHOOK_DESTINATION`
127 | - `WEBHOOK_DNS_RESOLUTION_FAILED`
128 | - `WEBHOOK_SECRET_DECRYPTION_FAILED`
129 | - `INVALID_EVENT_PAYLOAD`
130 | - `WEBHOOK_SCOPE_MISMATCH`
131 | - `WEBHOOK_DELIVERY_LEASE_LOST`
132 | - `ENDPOINT_INACTIVE`
133 | - `TIMEOUT`
134 | - `NETWORK_ERROR`
135 | - `RATE_LIMITED`
136 | - `LEASE_EXPIRED`
137 |
138 | ## Tracing
139 |
140 | Trace synchronous API work and asynchronous jobs using correlation IDs. Propagate assessment, job, event, delivery, and request references without propagating secret material.
141 |
142 | Recommended span boundaries:
143 |
144 | - request authentication and authorization;
145 | - usage reservation and idempotency;
146 | - feature assembly and PostgreSQL reads;
147 | - pure risk-engine invocation as an internal span only;
148 | - assessment/outcome persistence;
149 | - transactional outbox insert;
150 | - durable job/delivery claim and completion;
151 | - provider adapter call;
152 | - webhook DNS validation and HTTP attempt without sensitive attributes;
153 | - verification queue transaction, job claim, payload validation, provider attempt, and completion without phone/OTP attributes.
154 |
155 | The event ID links API persistence and asynchronous delivery. The delivery ID links claim, attempt, retry, and completion operations. Telemetry export failure must not break scoring, persistence, or synchronous checkout handling.
156 |
157 | ## Alerts
158 |
159 | - Provider session refresh failure spike
160 | - API p95 latency or error-rate breach
161 | - Assessment error/degraded spike
162 | - PostgreSQL unavailable, connection saturation, or lock-wait spike
163 | - Database migration, manifest/history integrity, backup, or restore failure
164 | - Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
165 | - Event-worker claim rate drops to zero while due backlog grows
166 | - Webhook delivery failure or retry spike
167 | - Webhook secret-decryption or scope-mismatch failure
168 | - Unsafe webhook destination spike
169 | - DNS resolution failure spike
170 | - OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
171 | - Usage counter/entitlement drift
172 | - Reconnect-required account spike
173 | - Secret scanning or redaction regression
174 | - KMS/vault access or decrypt failure spike
175 |
176 | ## Runbooks
177 |
178 | Create and exercise runbooks for:
179 |
180 | - Steadfast login/selector break
181 | - Expired, disabled, or rotated encryption key
182 | - KMS/vault outage
183 | - OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
184 | - Courier provider outage
185 | - Database logical restore, managed point-in-time restore, and failover
186 | - API key compromise
187 | - Courier credential/session compromise
188 | - Webhook signing-secret compromise and endpoint rotation
189 | - Queue/outbox backlog, lease recovery, and dead-letter replay
190 | - Webhook destination failure or repeated HTTP rejection
191 | - DNS resolution/egress-policy failure
192 | - Invalid event payload or scope mismatch
193 | - Incorrect risk policy rollback
194 | - Telemetry backend outage
195 | - Reputation dispute escalation when that subsystem exists
196 |
197 | A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.
198 |
199 | A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.
200 |
201 | ## Health model
202 |
203 | Expose separate health/readiness states for:
204 |
205 | - API process
206 | - database
207 | - durable job/outbox store
208 | - optional distributed cache
209 | - event/webhook worker process
210 | - webhook backlog and oldest-event age
211 | - event-worker signing-secret decryption capability
212 | - courier provider adapters
213 | - session workers
214 | - verification providers and future verification runner
215 | - KMS/vault access
216 | - telemetry export
217 |
218 | A webhook endpoint outage, provider outage, or telemetry outage must not necessarily take the API process out of service. Readiness and operations views must still expose degraded dependencies. Unknown or degraded dependencies must never be treated as safe approval signals.
219 |
220 | ## Event-worker operational contract
221 |
222 | - `EVENT_WORKER_ID` should be stable and unique per replica in production.
223 | - `EVENT_WORKER_POLL_MS`, `EVENT_WORKER_LEASE_MS`, `EVENT_WORKER_MAX_ATTEMPTS`, and `WEBHOOK_TIMEOUT_MS` must be positive integers.
224 | - `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds.
225 | - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
226 | - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
227 | - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
228 | - Exhausted stale work fails closed with `LEASE_EXPIRED`.
229 | - Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.
230 |
231 | ## Data operations
232 |
233 | - Automated encrypted backups
234 | - Point-in-time recovery
235 | - Restore testing on a schedule
236 | - Migration preflight and post-deploy verification
237 | - Outbox retention and terminal-delivery archival policy
238 | - Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
239 | - Audit trail for privileged data and credential access
240 | - KMS key rotation and ciphertext re-encryption procedures
241 | - Webhook signing-secret rotation/re-encryption procedure
242 | - Telemetry retention and access review
243 | - Production-data redaction before lower-environment use
244 |
245 | ## Release operations
246 |
247 | - Feature flags for new engine/policy versions and native multi-store migration
248 | - Canary/pilot merchants before broad rollout
249 | - Compare decision distributions before policy promotion
250 | - Rollback path for API, worker, migration, and policy changes
251 | - Do not edit migration 0008 after application; use a new migration for schema changes
252 | - Keep event-worker deployment independently scalable and rollbackable from the API
253 | - Exercise outbox backlog and retry behavior before each pilot expansion
254 | - No automatic blocking policy promotion without reviewed outcome data
255 | - Validate dashboards and alerts before each pilot expansion
256 |
257 | ## Provider selection still pending
258 |
259 | A managed observability backend, retention policy, alert-delivery channel, optional OpenTelemetry collector topology, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
260 |
```

### docs/security/security-privacy.md

Bytes: 10823
SHA-256: c9967f1cbdc66ce50f50718d1fa49f770e67fd6e71a0f78c8fa09228005d2f29
Lines: 1-193 of 193

```markdown
  1 | # Security and Privacy
  2 |
  3 | ## Authentication
  4 |
  5 | - Dedicated user identity system
  6 | - Argon2id for passwords or managed authentication
  7 | - Secure HTTP-only opaque sessions
  8 | - Session rotation on login and privilege change
  9 | - CSRF protection for browser actions
 10 | - MFA for organization owners/admins later
 11 | - Role-based access control
 12 |
 13 | API keys are service credentials and must never be used as dashboard login sessions.
 14 |
 15 | Pilot browser-session baseline:
 16 |
 17 | - Argon2id verifies local passwords; a future managed identity provider may supersede credential verification.
 18 | - A cryptographically random opaque token is sent only in an `HttpOnly`, `SameSite=Lax` cookie and only its HMAC hash is stored.
 19 | - Production cookies require TLS and the `Secure` flag.
 20 | - `SESSION_PEPPER` and `SESSION_CSRF_SECRET` are independent server-held secrets and must come from the approved secret manager.
 21 | - State-changing browser requests require a derived CSRF proof.
 22 | - Active users, unexpired/unrevoked sessions, organization membership, active organization, and active store are revalidated.
 23 | - Platform administration requires the explicit `platform_admin` role; organization membership alone is insufficient.
 24 | - Login, logout, merchant overview access, and platform-admin overview access are audited without raw credentials or cookie values.
 25 |
 26 | ## API keys
 27 |
 28 | - Generate with cryptographically secure random bytes
 29 | - Prefix by environment: `ozg_test_` or `ozg_live_`
 30 | - Store only a strong hash
 31 | - Display raw key once
 32 | - Support rotation, revocation, expiry, scopes, last-used time, and optional origin/IP restrictions
 33 | - Never place raw keys in metadata, logs, analytics, URLs, or cookies
 34 |
 35 | ## Sensitive data
 36 |
 37 | Never log:
 38 |
 39 | - Raw passwords
 40 | - Courier cookies or tokens
 41 | - Raw API keys
 42 | - OTP plaintext
 43 | - Full phone number where masking is sufficient
 44 | - Access tokens
 45 | - Webhook signing secrets or decrypted secret envelopes
 46 | - Raw courier payloads unless explicitly encrypted, access-controlled, retained briefly, and required for evidence/debugging
 47 | - Unrestricted domain-event or request payloads
 48 |
 49 | All exception/error serialization must pass through a central redaction layer. Worker logs use structured identifiers and error codes, not secret-bearing exception payloads.
 50 |
 51 | ## Phone data
 52 |
 53 | - Normalize consistently
 54 | - Use keyed hash/HMAC for cross-table matching where appropriate
 55 | - Encrypt raw phone only when operational lookup is necessary
 56 | - Separate analytics identity from operational contact data
 57 | - Document retention and deletion behavior
 58 | - Do not include raw phone values in webhook outbox events
 59 |
 60 | ## Credential and envelope storage
 61 |
 62 | - Envelope encryption
 63 | - Key version stored with ciphertext
 64 | - Master keys outside database
 65 | - Rotation procedure
 66 | - Strict service identity permissions
 67 | - Separate authenticated encryption context for credentials, sessions, webhook endpoints, and verification jobs
 68 | - Audit credential reads and decrypt operations
 69 | - Decryption failure must fail closed
 70 | - No plaintext compatibility fallback
 71 |
 72 | The local/self-hosted AES-256-GCM implementation is isolated in `@ozzyl/encryption`. The package also provides a provider-neutral managed v2 boundary with a random per-record data key, authenticated context digest and wrapped-key metadata, data-key zeroization, structured safe failures, explicit legacy dual-read, and key-version re-encryption. Production runtime call sites remain on local v1 until a selected KMS/vault adapter, component identities, access auditing, and an audited background rewrite are provisioned; there is no automatic local or plaintext fallback.
 73 |
 74 | Webhook signing secrets are stored only as encrypted endpoint material. The event worker decrypts them using the authenticated context `webhook-endpoint:<endpoint-id>` immediately before signing; the API and checkout path do not need plaintext access for delivery.
 75 |
 76 | ## Multi-tenancy
 77 |
 78 | Every merchant-owned record includes organization/store scope. Repository methods require scope parameters rather than optional filters. API-key resolution, feature assembly, assessment/outcome writes, dashboards, and tenant administration revalidate that the store is active and belongs to the active organization; matching caller-supplied identifiers alone are not authoritative.
 79 |
 80 | Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, verifications, or logs.
 81 |
 82 | Webhook delivery rows persist explicit organization/store scope and are revalidated against the endpoint and store relationships before claim. Mismatched rows fail closed instead of being sent. Webhook and verification administration require active owner/admin membership and return only operational metadata; signing-secret ciphertext, OTP hashes, encrypted job payloads, and raw phone values are excluded.
 83 |
 84 | Native shadow rollout and attempt evidence follow the same boundary:
 85 |
 86 | - source order scope is reloaded and verified before Guard evaluation;
 87 | - service API keys require `comparisons:write` and remain separate from browser sessions;
 88 | - rollout mutation requires CSRF proof plus active owner/admin membership;
 89 | - rollout, assessment, comparison, and attempt repositories revalidate exact organization/store relationships;
 90 | - merchant and platform reports contain bounded aggregates only;
 91 | - phone numbers, request snapshots, raw API keys, provider payloads, credentials, cookies, OTPs, and signing secrets are prohibited from rollout, attempt, dashboard, audit, and error payloads.
 92 |
 93 | ## PostgreSQL role separation
 94 |
 95 | - The migration owner applies schema changes, owns relations, records migration history, and runs `npm run db:runtime-grants` after migrations.
 96 | - Runtime services connect with an externally provisioned non-owner `LOGIN` that has no superuser, `CREATEDB`, `CREATEROLE`, replication, `BYPASSRLS`, inherited role memberships, database ownership, schema ownership, or relation ownership.
 97 | - Runtime privileges are explicit current-table `SELECT`/`INSERT`/`UPDATE` grants only where required. Migration history, `DELETE`, DDL, schema creation, and role management remain denied.
 98 | - The grant command verifies the complete current table inventory and effective privileges, so a new table or an implicit/public privilege fails closed until the policy is reviewed.
 99 | - Production may split this reviewed baseline into narrower API and worker roles, but no runtime identity may become the migration owner.
100 |
101 | ## Shared reputation safeguards
102 |
103 | - No single merchant report should globally block a customer.
104 | - Prefer courier-confirmed outcomes.
105 | - Require independent evidence for high-impact reputation.
106 | - Apply time decay.
107 | - Provide dispute and correction mechanisms.
108 | - Detect abusive or low-quality reporters.
109 | - Preserve evidence lineage.
110 | - Do not launch cross-merchant reputation in the foundation MVP without privacy/legal review.
111 |
112 | ## OTP security
113 |
114 | - 6-digit cryptographically random OTP
115 | - Store only hash
116 | - 5–10 minute expiry
117 | - Maximum attempts
118 | - Per-phone, per-IP, per-store, and per-organization rate limits
119 | - Bind OTP to verification session/order/purpose
120 | - Do not expose delivery success when provider actually failed
121 | - Do not log OTP values
122 | - Provider delivery runs only in the private verification worker, never synchronous API handling
123 | - Persist phone and OTP for delivery only inside an encrypted job payload; queue columns and logs remain non-sensitive
124 | - Bind ciphertext to `verification-job:<job-id>` authenticated context
125 | - Validate organization, store, purpose, phone HMAC, and OTP hash before provider I/O
126 | - Require current unexpired lease ownership for start, retry, delivery, and failure transitions
127 | - Fail both the job and authoritative session closed on relational scope mismatch
128 | - Pass a stable verification idempotency key to provider adapters to reduce duplicate sends after uncertain outcomes
129 |
130 | ## Webhook security
131 |
132 | - Emit durable outbox rows in the same transaction as the newly persisted assessment or outcome
133 | - Never perform merchant webhook network delivery from the risk engine, checkout handler, or API persistence transaction
134 | - Use stable event IDs and `(endpoint_id, event_id)` uniqueness for replay/idempotency control
135 | - Sign the exact canonical event payload with HMAC-SHA256 over `timestamp.payload`
136 | - Require HTTPS
137 | - Reject URL credentials, localhost names, `.local` names, literal non-public IPv4/IPv6 addresses, and metadata destinations
138 | - Resolve hostnames before fetch and reject the destination when any resolved address is invalid or non-public
139 | - Treat DNS resolution failure as retryable without making a request
140 | - Disable redirects to prevent redirect-based destination bypass
141 | - Apply bounded timeout, attempt limit, backoff, and terminal failure
142 | - Require the current unexpired worker lease for delivery-state transitions
143 | - Do not include raw phone, OTP, API keys, provider credentials, or signing secrets in event payloads or logs
144 |
145 | Application-level URL and DNS validation is not sufficient by itself against every DNS-rebinding, routing, proxy, or infrastructure failure. Production must also restrict event-worker egress, block metadata/private networks at the network layer, and use a controlled resolver or equivalent policy.
146 |
147 | ## Web security
148 |
149 | - CSRF protection for dashboard actions
150 | - CSP and secure headers
151 | - Input validation and output encoding
152 | - SSRF protection in webhook/custom URL features
153 | - HMAC-signed webhooks
154 | - Timestamp and replay prevention
155 | - Request size limits
156 | - Idempotency abuse protection
157 | - Safe CORS configuration by integration type
158 |
159 | ## Courier automation security
160 |
161 | - Playwright runs in isolated workers with least privilege
162 | - No browser execution in synchronous API/checkout paths
163 | - Screenshots/traces are redacted, access-controlled, and short-lived
164 | - Provider credentials are not passed through shell arguments
165 | - Session refresh failures are visible; they are never silently ignored
166 | - Provider terms and merchant authorization must be reviewed before commercial scale
167 |
168 | ## Operational security
169 |
170 | - Audit logs
171 | - Secret rotation
172 | - Dependency scanning
173 | - SAST and secret scanning
174 | - Backups and restore testing
175 | - Incident response runbook
176 | - Key compromise, webhook-secret compromise, and courier credential compromise runbooks
177 | - Queue/outbox lease recovery and dead-letter procedures
178 | - Production access review and break-glass procedure
179 | - Private worker ingress and controlled egress
180 |
181 | ## Source SaaS findings that must not be copied
182 |
183 | - Custom SHA-256 password hashing
184 | - Raw API key saved in metadata
185 | - Raw API key used as a login cookie
186 | - Full phone numbers logged by blacklist stubs
187 | - Shell commands containing session payloads
188 | - Hardcoded infrastructure identifiers
189 | - Decryption fallback to plaintext
190 | - Broad unaudited cross-store lookup
191 | - Synchronous webhook delivery in checkout handling
192 | - Plaintext webhook signing secrets in configuration or logs
193 |
```

### docs/testing/testing-strategy.md

Bytes: 14075
SHA-256: fd665ae60664d53213eeef7b5044e2fb9ca9f63b1ca1e093593ed6da727f479d
Lines: 1-274 of 274

```markdown
  1 | # Testing Strategy
  2 |
  3 | ## Unit tests
  4 |
  5 | - Bangladesh phone normalization
  6 | - Risk signal calculation
  7 | - Confidence calculation
  8 | - Decision threshold mapping
  9 | - Provider response normalization
 10 | - Status mapping
 11 | - Envelope encryption, per-record data-key zeroization, opaque key wrapping, key-version rotation, legacy dual-read, authenticated context/metadata, and structured fail-closed provider errors
 12 | - OTP expiry and attempt limits
 13 | - API key generation/prefix/hash verification
 14 | - Policy parsing/versioning
 15 | - Webhook HMAC signing, retry classification, and DNS destination validation
 16 | - Migration manifest ordering and SHA-256 tamper detection
 17 | - Runtime-role identifier validation and explicit table-policy completeness
 18 | - Native shadow off mode, deterministic sampling, post-persist source revalidation, legacy-authoritative disagreement, timeout classification, and safe assessment/persistence failures
 19 |
 20 | ## Contract tests
 21 |
 22 | Each courier adapter must pass a shared contract suite:
 23 |
 24 | - Returns canonical observation
 25 | - Handles timeout
 26 | - Handles expired session
 27 | - Never leaks credentials
 28 | - Maps malformed responses to structured errors
 29 | - Preserves source/freshness metadata
 30 | - Separates actual return from pre-shipping cancellation
 31 |
 32 | Public API contract tests cover:
 33 |
 34 | - Canonical success/error response
 35 | - Lowercase enums and `signals[].code`
 36 | - Unknown/degraded behavior
 37 | - Idempotent replay
 38 | - Test/live key isolation
 39 | - Dedicated comparison scope, idempotent replay, order binding, and cross-store assessment rejection
 40 |
 41 | Webhook delivery contract tests cover:
 42 |
 43 | - Canonical domain-event payloads
 44 | - HMAC signature over timestamp and exact payload
 45 | - Redirect rejection
 46 | - Retryable HTTP/network/DNS failures
 47 | - Terminal unsafe-destination and inactive-endpoint failures
 48 | - No signing secret, raw phone, or unrestricted request body in logs
 49 |
 50 | ## Integration tests
 51 |
 52 | - User/session authentication
 53 | - API key creation, one-time reveal, authentication, revocation, and rotation
 54 | - Atomic quota enforcement under concurrency
 55 | - Assessment persistence
 56 | - Transactional encrypted OTP queue creation and tenant-scoped verification
 57 | - Lease-owned OTP provider delivery and retry/failure state
 58 | - Courier session refresh
 59 | - Transactional assessment/outcome webhook outbox emission
 60 | - Lease-owned webhook delivery and retry
 61 | - Multi-tenant isolation
 62 | - Organization/store membership authorization
 63 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 64 |
 65 | ### PostgreSQL concurrency and idempotency coverage
 66 |
 67 | The CI PostgreSQL service runs real-database integration tests for:
 68 |
 69 | - duplicate usage reservations serializing through the organization/period advisory lock;
 70 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 71 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 72 | - concurrent assessment saves returning the single persisted scoped winner;
 73 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 74 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 75 | - operation idempotency values remaining isolated by organization and store;
 76 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 77 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 78 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 79 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 80 | - preventing another courier worker from stealing a fresh lease;
 81 | - reclaiming expired courier jobs and rejecting the previous owner;
 82 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 83 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 84 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
 85 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
 86 | - preventing another event worker from stealing a fresh webhook lease;
 87 | - rejecting an expired event-worker owner before completion or failure;
 88 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
 89 | - clearing webhook ownership when a retry is scheduled;
 90 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
 91 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
 92 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
 93 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
 94 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 95 | - protecting fresh verification leases and rejecting expired owners;
 96 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
 97 | - failing both the verification job and authoritative session on persisted scope mismatch;
 98 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
 99 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
100 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
101 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
102 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
103 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
104 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
105 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
106 |
107 | ### Native shadow rollout safety coverage
108 |
109 | Default tests prove:
110 |
111 | - `off` mode performs no Guard assessment or comparison API call;
112 | - deterministic sampling keeps retries for the same store/order in the same cohort;
113 | - the legacy score and decision remain the effective result even when Guard recommends block;
114 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
115 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
116 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
117 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
118 | - CSRF-protected browser mutation permits only active owner/admin store scope;
119 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
120 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
121 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
122 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
123 |
124 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
125 |
126 | ### Webhook destination security coverage
127 |
128 | Default tests use injected DNS and fetch boundaries. They prove:
129 |
130 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
131 | - a hostname resolving to any non-public address is rejected before `fetch`;
132 | - DNS resolution failure is classified as retryable without making a network request;
133 | - redirects are disabled;
134 | - successful deliveries use the expected HMAC signature and canonical payload;
135 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
136 |
137 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
138 |
139 | ### Verification payload security coverage
140 |
141 | Default tests prove:
142 |
143 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
144 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
145 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
146 | - reporter state and logs do not receive plaintext OTP values;
147 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
148 |
149 | ### Managed envelope security coverage
150 |
151 | Default tests prove:
152 |
153 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
154 | - plaintext values and plaintext data keys are not serialized into the envelope;
155 | - context mismatch is rejected before provider unwrap;
156 | - wrapped-key metadata is authenticated and tampering fails closed;
157 | - provider outage produces a structured non-secret error;
158 | - a provider cannot pass the plaintext data key through as a wrapped key;
159 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
160 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
161 | - malformed, unsupported, or unavailable-key envelopes fail closed.
162 |
163 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
164 |
165 | ### Migration replay coverage
166 |
167 | CI runs the migration command twice against the same PostgreSQL service:
168 |
169 | 1. the first run applies every ordered migration;
170 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
171 |
172 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
173 |
174 | ### Migration integrity and restore coverage
175 |
176 | CI additionally proves:
177 |
178 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
179 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
180 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
181 | - migration execution is serialized by one session-held advisory lock;
182 | - the restore target is a distinct pre-created clean database;
183 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
184 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
185 |
186 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
187 |
188 | Future PostgreSQL coverage must include:
189 |
190 | - lease renewal during future jobs whose bounded execution time can exceed the configured lease;
191 | - selected-provider smoke tests for distinct API/worker runtime identities and migration-owner grant execution;
192 | - operational replay/dead-letter authorization and audit coverage.
193 |
194 | ## End-to-end tests
195 |
196 | - Merchant signup and store creation
197 | - Create a test/live API key
198 | - Connect Steadfast account
199 | - Assess WooCommerce COD order
200 | - Receive a signed `assessment.completed` webhook asynchronously
201 | - Review high-risk order
202 | - Verify OTP
203 | - Submit courier outcome
204 | - Receive a signed `order.outcome_recorded` webhook asynchronously
205 | - View usage and savings report
206 |
207 | ## Security tests
208 |
209 | - Tenant data leakage
210 | - API key replay/revocation
211 | - Raw key absence from database/metadata/logs
212 | - Brute-force OTP
213 | - CSRF
214 | - Literal-IP and DNS-result SSRF
215 | - Webhook replay and redirect handling
216 | - Webhook signing-secret decryption failure
217 | - Envelope authenticated-context mismatch
218 | - Secret redaction
219 | - Injection attacks
220 | - Session fixation/rotation
221 | - Credential decryption failure
222 | - Worker lease ownership and stale-owner rejection
223 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
224 | - Runtime database role privilege escape, ownership, migration-history, DELETE, and DDL attempts
225 |
226 | ## Scraper tests
227 |
228 | - Login page selector fixtures
229 | - Successful cookie extraction
230 | - Invalid credentials
231 | - CAPTCHA/2FA detection
232 | - Provider HTML changes
233 | - Browser cleanup on failure
234 | - Login-state/session validation
235 | - Redacted screenshot/trace behavior
236 | - Structured failure codes
237 |
238 | Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.
239 |
240 | ## Architecture tests
241 |
242 | - `packages/risk-engine` cannot import network/database/provider/browser packages
243 | - API routes cannot import provider session drivers directly
244 | - API persistence may enqueue durable work but cannot execute merchant/provider network delivery
245 | - All schema comes from `packages/database`
246 | - All public response and domain-event types come from `packages/shared-types`
247 | - Tenant-scoped repositories, outbox rows, and jobs require explicit scope
248 |
249 | ## Pilot evaluation
250 |
251 | Track a confusion matrix against real verified outcomes:
252 |
253 | - true positive
254 | - false positive
255 | - true negative
256 | - false negative
257 |
258 | Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.
259 |
260 | ## Required CI gates
261 |
262 | - formatting check
263 | - lint
264 | - typecheck
265 | - unit tests
266 | - contract tests
267 | - integration tests with PostgreSQL
268 | - migration manifest, verification, replay, and database-history integrity
269 | - clean PostgreSQL backup/restore rehearsal
270 | - least-privilege runtime database role grant and effective-permission verification
271 | - dependency audit
272 | - secret scanning
273 | - architecture/dependency-boundary tests
274 |
```

### integrations/multi-store-saas/src/index.ts

Bytes: 13849
SHA-256: 42c5dd315d5ba2f0a8aadd9c065349f1d1e11be2d1a50ea7fb82ddf87c1aa3ac
Lines: 1-468 of 468

```typescript
  1 | import { createHash } from 'node:crypto';
  2 | import type {
  3 |   NativeShadowAttemptInput,
  4 |   NativeShadowAttemptResponse,
  5 |   NativeShadowComparisonInput,
  6 |   NativeShadowComparisonResponse,
  7 |   NativeShadowRolloutResponse,
  8 |   OrderOutcomeInput,
  9 |   RiskAssessmentRequest,
 10 |   RiskAssessmentResponse,
 11 | } from '@ozzyl/shared-types';
 12 |
 13 | export interface MultiStoreGuardClient {
 14 |   createRiskAssessment(
 15 |     input: RiskAssessmentRequest,
 16 |     options: { idempotencyKey: string },
 17 |   ): Promise<RiskAssessmentResponse>;
 18 |   getNativeShadowRollout(): Promise<NativeShadowRolloutResponse>;
 19 |   reportNativeShadowComparison(
 20 |     input: NativeShadowComparisonInput,
 21 |     options: { idempotencyKey: string },
 22 |   ): Promise<NativeShadowComparisonResponse>;
 23 |   reportNativeShadowAttempt(
 24 |     input: NativeShadowAttemptInput,
 25 |     options: { idempotencyKey: string },
 26 |   ): Promise<NativeShadowAttemptResponse>;
 27 |   submitOutcome(
 28 |     input: OrderOutcomeInput,
 29 |     options: { idempotencyKey: string },
 30 |   ): Promise<{ success: true; outcome_id: string }>;
 31 | }
 32 |
 33 | export interface CommerceOrder {
 34 |   id: string;
 35 |   phone: string;
 36 |   total: number;
 37 |   paymentMethod: 'cod' | 'prepaid';
 38 |   district?: string;
 39 |   area?: string;
 40 |   itemCount?: number;
 41 | }
 42 |
 43 | export interface LegacyRiskResult {
 44 |   score: number;
 45 |   decision: string;
 46 | }
 47 |
 48 | export interface ShadowComparison {
 49 |   orderId: string;
 50 |   guardAssessment: RiskAssessmentResponse;
 51 |   legacy: LegacyRiskResult;
 52 |   decisionChanged: boolean;
 53 |   scoreDelta: number;
 54 | }
 55 |
 56 | export interface ShadowRolloutConfig {
 57 |   mode: 'off' | 'shadow';
 58 |   version: string;
 59 |   sampleRateBps: number;
 60 |   samplingKey: string;
 61 | }
 62 |
 63 | export type ShadowFailureCode =
 64 |   'GUARD_ASSESSMENT_FAILED' | 'GUARD_TIMEOUT' | 'COMPARISON_PERSIST_FAILED';
 65 |
 66 | export interface ShadowEvaluation {
 67 |   orderId: string;
 68 |   mode: 'off' | 'shadow';
 69 |   selected: boolean;
 70 |   sampleBucket: number;
 71 |   effective: LegacyRiskResult & { source: 'legacy' };
 72 |   evaluatedAt?: string;
 73 |   comparison?: ShadowComparison & {
 74 |     persisted: boolean;
 75 |     comparisonId?: string;
 76 |   };
 77 |   failure?: {
 78 |     code: ShadowFailureCode;
 79 |   };
 80 | }
 81 |
 82 | export class MultiStoreGuardAdapter {
 83 |   constructor(
 84 |     private readonly client: MultiStoreGuardClient,
 85 |     private readonly now: () => Date = () => new Date(),
 86 |   ) {}
 87 |
 88 |   async assess(order: CommerceOrder, legacy: LegacyRiskResult): Promise<ShadowComparison> {
 89 |     validateOrder(order);
 90 |     const normalizedLegacy = normalizeLegacy(legacy);
 91 |     const guardAssessment = await this.client.createRiskAssessment(
 92 |       {
 93 |         external_order_id: order.id,
 94 |         phone: order.phone,
 95 |         order_total: order.total,
 96 |         payment_method: order.paymentMethod,
 97 |         ...(order.district || order.area
 98 |           ? {
 99 |               shipping_address: {
100 |                 ...(order.district ? { district: order.district } : {}),
101 |                 ...(order.area ? { area: order.area } : {}),
102 |               },
103 |             }
104 |           : {}),
105 |         ...(order.itemCount === undefined ? {} : { items_count: order.itemCount }),
106 |       },
107 |       { idempotencyKey: stableKey('risk', order.id) },
108 |     );
109 |     return {
110 |       orderId: order.id,
111 |       guardAssessment,
112 |       legacy: normalizedLegacy,
113 |       decisionChanged: normalizedLegacy.decision !== guardAssessment.decision,
114 |       scoreDelta: guardAssessment.risk_score - normalizedLegacy.score,
115 |     };
116 |   }
117 |
118 |   async evaluateShadow(
119 |     order: CommerceOrder,
120 |     legacy: LegacyRiskResult,
121 |     rollout: ShadowRolloutConfig,
122 |   ): Promise<ShadowEvaluation> {
123 |     validateOrder(order);
124 |     const normalizedLegacy = normalizeLegacy(legacy);
125 |     validateRollout(rollout);
126 |     const sampleBucket = deterministicBucket(rollout.samplingKey, order.id);
127 |     const base: ShadowEvaluation = {
128 |       orderId: order.id,
129 |       mode: rollout.mode,
130 |       selected: false,
131 |       sampleBucket,
132 |       effective: { ...normalizedLegacy, source: 'legacy' },
133 |     };
134 |     if (
135 |       rollout.mode === 'off' ||
136 |       rollout.sampleRateBps === 0 ||
137 |       sampleBucket >= rollout.sampleRateBps
138 |     ) {
139 |       return base;
140 |     }
141 |
142 |     const evaluatedAt = this.now().toISOString();
143 |     let comparison: ShadowComparison;
144 |     try {
145 |       comparison = await this.assess(order, normalizedLegacy);
146 |     } catch (error) {
147 |       return {
148 |         ...base,
149 |         selected: true,
150 |         evaluatedAt,
151 |         failure: { code: isTimeoutError(error) ? 'GUARD_TIMEOUT' : 'GUARD_ASSESSMENT_FAILED' },
152 |       };
153 |     }
154 |
155 |     try {
156 |       const persisted = await this.client.reportNativeShadowComparison(
157 |         {
158 |           external_order_id: order.id,
159 |           assessment_id: comparison.guardAssessment.assessment_id,
160 |           legacy_score: normalizedLegacy.score,
161 |           legacy_decision: normalizedLegacy.decision,
162 |           rollout_version: rollout.version,
163 |           sample_bucket: sampleBucket,
164 |           sample_rate_bps: rollout.sampleRateBps,
165 |           evaluated_at: evaluatedAt,
166 |         },
167 |         {
168 |           idempotencyKey: stableKey('shadow', `${rollout.version}:${order.id}`),
169 |         },
170 |       );
171 |       return {
172 |         ...base,
173 |         selected: true,
174 |         evaluatedAt,
175 |         comparison: {
176 |           ...comparison,
177 |           persisted: true,
178 |           comparisonId: persisted.comparison_id,
179 |         },
180 |       };
181 |     } catch {
182 |       return {
183 |         ...base,
184 |         selected: true,
185 |         evaluatedAt,
186 |         comparison: { ...comparison, persisted: false },
187 |         failure: { code: 'COMPARISON_PERSIST_FAILED' },
188 |       };
189 |     }
190 |   }
191 |
192 |   async submitOutcome(input: {
193 |     orderId: string;
194 |     assessmentId: string;
195 |     outcome: 'delivered' | 'returned' | 'cancelled_before_shipping';
196 |     provider?: string;
197 |     reason?: string;
198 |     occurredAt: string;
199 |   }): Promise<void> {
200 |     await this.client.submitOutcome(
201 |       {
202 |         external_order_id: input.orderId,
203 |         assessment_id: input.assessmentId,
204 |         outcome: input.outcome,
205 |         ...(input.provider ? { provider: input.provider } : {}),
206 |         ...(input.reason ? { reason: input.reason } : {}),
207 |         occurred_at: input.occurredAt,
208 |       },
209 |       {
210 |         idempotencyKey: stableKey(
211 |           'outcome',
212 |           `${input.orderId}:${input.outcome}:${input.occurredAt}`,
213 |         ),
214 |       },
215 |     );
216 |   }
217 | }
218 |
219 | export interface PersistedCommerceOrder {
220 |   organizationId: string;
221 |   storeId: string;
222 |   order: CommerceOrder;
223 |   legacy: LegacyRiskResult;
224 | }
225 |
226 | export interface PersistedCommerceOrderReader {
227 |   loadPersistedOrder(input: {
228 |     organizationId: string;
229 |     storeId: string;
230 |     orderId: string;
231 |   }): Promise<PersistedCommerceOrder | null>;
232 | }
233 |
234 | export type PostPersistAdvisoryCode =
235 |   | ShadowFailureCode
236 |   | 'SOURCE_ORDER_NOT_FOUND'
237 |   | 'SOURCE_SCOPE_MISMATCH'
238 |   | 'ROLLOUT_CONFIG_FAILED'
239 |   | 'ROLLOUT_SCOPE_MISMATCH'
240 |   | 'ATTEMPT_PERSIST_FAILED';
241 |
242 | export interface PostPersistShadowResult {
243 |   orderId: string;
244 |   selected: boolean;
245 |   attemptRecorded: boolean;
246 |   effective?: LegacyRiskResult & { source: 'legacy' };
247 |   evaluation?: ShadowEvaluation;
248 |   advisory?: { code: PostPersistAdvisoryCode };
249 | }
250 |
251 | export class MultiStorePostPersistShadowIntegration {
252 |   private readonly adapter: MultiStoreGuardAdapter;
253 |
254 |   constructor(
255 |     private readonly reader: PersistedCommerceOrderReader,
256 |     private readonly client: MultiStoreGuardClient,
257 |     now: () => Date = () => new Date(),
258 |   ) {
259 |     this.adapter = new MultiStoreGuardAdapter(client, now);
260 |   }
261 |
262 |   async afterOrderPersisted(input: {
263 |     organizationId: string;
264 |     storeId: string;
265 |     orderId: string;
266 |   }): Promise<PostPersistShadowResult> {
267 |     const persisted = await this.reader.loadPersistedOrder(input);
268 |     if (!persisted) {
269 |       return {
270 |         orderId: input.orderId,
271 |         selected: false,
272 |         attemptRecorded: false,
273 |         advisory: { code: 'SOURCE_ORDER_NOT_FOUND' },
274 |       };
275 |     }
276 |     if (
277 |       persisted.organizationId !== input.organizationId ||
278 |       persisted.storeId !== input.storeId ||
279 |       persisted.order.id !== input.orderId
280 |     ) {
281 |       return {
282 |         orderId: input.orderId,
283 |         selected: false,
284 |         attemptRecorded: false,
285 |         advisory: { code: 'SOURCE_SCOPE_MISMATCH' },
286 |       };
287 |     }
288 |
289 |     const effective = { ...normalizeLegacy(persisted.legacy), source: 'legacy' as const };
290 |     let rolloutResponse: NativeShadowRolloutResponse;
291 |     try {
292 |       rolloutResponse = await this.client.getNativeShadowRollout();
293 |     } catch {
294 |       return {
295 |         orderId: input.orderId,
296 |         selected: false,
297 |         attemptRecorded: false,
298 |         effective,
299 |         advisory: { code: 'ROLLOUT_CONFIG_FAILED' },
300 |       };
301 |     }
302 |     if (
303 |       rolloutResponse.organization_id !== input.organizationId ||
304 |       rolloutResponse.store_id !== input.storeId ||
305 |       rolloutResponse.integration !== 'multi-store-saas'
306 |     ) {
307 |       return {
308 |         orderId: input.orderId,
309 |         selected: false,
310 |         attemptRecorded: false,
311 |         effective,
312 |         advisory: { code: 'ROLLOUT_SCOPE_MISMATCH' },
313 |       };
314 |     }
315 |
316 |     const evaluation = await this.adapter.evaluateShadow(persisted.order, persisted.legacy, {
317 |       mode: rolloutResponse.mode,
318 |       version: rolloutResponse.rollout_version,
319 |       sampleRateBps: rolloutResponse.sample_rate_bps,
320 |       samplingKey: rolloutResponse.sampling_key,
321 |     });
322 |     if (!evaluation.selected) {
323 |       return {
324 |         orderId: input.orderId,
325 |         selected: false,
326 |         attemptRecorded: false,
327 |         effective: evaluation.effective,
328 |         evaluation,
329 |       };
330 |     }
331 |
332 |     const attempt = toAttempt(evaluation, rolloutResponse);
333 |     try {
334 |       await this.client.reportNativeShadowAttempt(attempt, {
335 |         idempotencyKey: stableKey(
336 |           'attempt',
337 |           `${rolloutResponse.rollout_version}:${persisted.order.id}`,
338 |         ),
339 |       });
340 |       return {
341 |         orderId: input.orderId,
342 |         selected: true,
343 |         attemptRecorded: true,
344 |         effective: evaluation.effective,
345 |         evaluation,
346 |         ...(evaluation.failure ? { advisory: evaluation.failure } : {}),
347 |       };
348 |     } catch {
349 |       return {
350 |         orderId: input.orderId,
351 |         selected: true,
352 |         attemptRecorded: false,
353 |         effective: evaluation.effective,
354 |         evaluation,
355 |         advisory: { code: 'ATTEMPT_PERSIST_FAILED' },
356 |       };
357 |     }
358 |   }
359 | }
360 |
361 | function toAttempt(
362 |   evaluation: ShadowEvaluation,
363 |   rollout: NativeShadowRolloutResponse,
364 | ): NativeShadowAttemptInput {
365 |   if (!evaluation.selected || !evaluation.evaluatedAt) {
366 |     throw new Error('Only selected shadow evaluations can be reported');
367 |   }
368 |   const base = {
369 |     external_order_id: evaluation.orderId,
370 |     rollout_version: rollout.rollout_version,
371 |     sample_bucket: evaluation.sampleBucket,
372 |     sample_rate_bps: rollout.sample_rate_bps,
373 |     evaluated_at: evaluation.evaluatedAt,
374 |   };
375 |   if (
376 |     evaluation.failure?.code === 'GUARD_ASSESSMENT_FAILED' ||
377 |     evaluation.failure?.code === 'GUARD_TIMEOUT'
378 |   ) {
379 |     return {
380 |       ...base,
381 |       status: 'assessment_failed',
382 |       failure_code: evaluation.failure.code,
383 |     };
384 |   }
385 |   if (evaluation.failure?.code === 'COMPARISON_PERSIST_FAILED' && evaluation.comparison) {
386 |     return {
387 |       ...base,
388 |       status: 'comparison_persist_failed',
389 |       failure_code: 'COMPARISON_PERSIST_FAILED',
390 |       assessment_id: evaluation.comparison.guardAssessment.assessment_id,
391 |     };
392 |   }
393 |   if (evaluation.comparison?.persisted && evaluation.comparison.comparisonId) {
394 |     return {
395 |       ...base,
396 |       status: 'comparison_succeeded',
397 |       assessment_id: evaluation.comparison.guardAssessment.assessment_id,
398 |       comparison_id: evaluation.comparison.comparisonId,
399 |     };
400 |   }
401 |   throw new Error('Selected shadow evaluation has no reportable advisory state');
402 | }
403 |
404 | export function deterministicBucket(samplingKey: string, orderId: string): number {
405 |   if (samplingKey.length === 0 || samplingKey.length > 200) {
406 |     throw new Error('Shadow sampling key must contain 1 to 200 characters');
407 |   }
408 |   const digest = createHash('sha256').update(`${samplingKey}:${orderId}`).digest();
409 |   return digest.readUInt32BE(0) % 10_000;
410 | }
411 |
412 | function stableKey(intent: string, value: string): string {
413 |   const digest = createHash('sha256').update(value).digest('hex').slice(0, 48);
414 |   return `multi-store:${intent}:${digest}`;
415 | }
416 |
417 | function normalizeLegacy(legacy: LegacyRiskResult): LegacyRiskResult {
418 |   if (!Number.isInteger(legacy.score) || legacy.score < 0 || legacy.score > 100) {
419 |     throw new Error('Legacy score must be an integer from 0 to 100');
420 |   }
421 |   const decision = legacy.decision.trim().toLowerCase();
422 |   if (decision.length === 0 || decision.length > 50) {
423 |     throw new Error('Legacy decision must contain 1 to 50 characters');
424 |   }
425 |   return { score: legacy.score, decision };
426 | }
427 |
428 | function validateOrder(order: CommerceOrder): void {
429 |   const id = order.id.trim();
430 |   if (id.length === 0 || id.length > 200) {
431 |     throw new Error('Order id must contain 1 to 200 characters');
432 |   }
433 |   if (!Number.isFinite(order.total) || order.total < 0) {
434 |     throw new Error('Order total must be a non-negative number');
435 |   }
436 |   if (
437 |     order.itemCount !== undefined &&
438 |     (!Number.isInteger(order.itemCount) || order.itemCount <= 0 || order.itemCount > 1000)
439 |   ) {
440 |     throw new Error('Order item count must be an integer from 1 to 1000');
441 |   }
442 | }
443 |
444 | function validateRollout(rollout: ShadowRolloutConfig): void {
445 |   if (rollout.version.trim().length === 0 || rollout.version.length > 100) {
446 |     throw new Error('Shadow rollout version must contain 1 to 100 characters');
447 |   }
448 |   if (
449 |     !Number.isInteger(rollout.sampleRateBps) ||
450 |     rollout.sampleRateBps < 0 ||
451 |     rollout.sampleRateBps > 10_000
452 |   ) {
453 |     throw new Error('Shadow sample rate must be an integer from 0 to 10000 basis points');
454 |   }
455 |   if (rollout.mode === 'shadow' && rollout.sampleRateBps === 0) {
456 |     throw new Error('Shadow mode requires a positive sample rate');
457 |   }
458 | }
459 |
460 | function isTimeoutError(error: unknown): boolean {
461 |   return Boolean(
462 |     error &&
463 |     typeof error === 'object' &&
464 |     'code' in error &&
465 |     (error as { code?: unknown }).code === 'REQUEST_TIMEOUT',
466 |   );
467 | }
468 |
```

### packages/database/migrations/0011_native_shadow_pilot.sql

Bytes: 3254
SHA-256: be0ec47b3ba2c95b33706aec78e570fb7399524cbddd10680aaf511549fdaca9
Lines: 1-80 of 80

```text
 1 | create unique index stores_scope_reference_unique
 2 |   on stores(id, organization_id);
 3 |
 4 | create unique index integration_shadow_comparisons_scope_reference_unique
 5 |   on integration_shadow_comparisons(id, organization_id, store_id);
 6 |
 7 | create table integration_shadow_rollouts (
 8 |   organization_id text not null references organizations(id) on delete cascade,
 9 |   store_id text not null references stores(id) on delete cascade,
10 |   integration text not null,
11 |   mode text not null check (mode in ('off', 'shadow')),
12 |   rollout_version text not null,
13 |   sample_rate_bps integer not null check (sample_rate_bps between 0 and 10000),
14 |   updated_by_user_id text references users(id) on delete set null,
15 |   created_at timestamptz not null default now(),
16 |   updated_at timestamptz not null default now(),
17 |   primary key (organization_id, store_id, integration),
18 |   foreign key (store_id, organization_id)
19 |     references stores(id, organization_id)
20 |     on delete cascade,
21 |   check (
22 |     (mode = 'off' and sample_rate_bps = 0)
23 |     or (mode = 'shadow' and sample_rate_bps between 1 and 10000)
24 |   )
25 | );
26 |
27 | create index integration_shadow_rollouts_mode_idx
28 |   on integration_shadow_rollouts(integration, mode, updated_at desc);
29 |
30 | create table integration_shadow_attempts (
31 |   id text primary key,
32 |   organization_id text not null references organizations(id) on delete cascade,
33 |   store_id text not null references stores(id) on delete cascade,
34 |   api_key_id text references api_keys(id) on delete set null,
35 |   integration text not null,
36 |   external_order_id text not null,
37 |   idempotency_key text not null,
38 |   rollout_version text not null,
39 |   sample_bucket integer not null check (sample_bucket between 0 and 9999),
40 |   sample_rate_bps integer not null check (sample_rate_bps between 1 and 10000),
41 |   status text not null check (
42 |     status in ('comparison_succeeded', 'assessment_failed', 'comparison_persist_failed')
43 |   ),
44 |   failure_code text,
45 |   assessment_id text,
46 |   comparison_id text,
47 |   evaluated_at timestamptz not null,
48 |   created_at timestamptz not null default now(),
49 |   foreign key (store_id, organization_id)
50 |     references stores(id, organization_id)
51 |     on delete cascade,
52 |   foreign key (assessment_id, organization_id, store_id)
53 |     references risk_assessments(id, organization_id, store_id)
54 |     on delete cascade,
55 |   foreign key (comparison_id, organization_id, store_id)
56 |     references integration_shadow_comparisons(id, organization_id, store_id)
57 |     on delete cascade,
58 |   unique (organization_id, store_id, integration, idempotency_key),
59 |   check (
60 |     (status = 'comparison_succeeded'
61 |       and failure_code is null
62 |       and assessment_id is not null
63 |       and comparison_id is not null)
64 |     or (status = 'assessment_failed'
65 |       and failure_code in ('GUARD_ASSESSMENT_FAILED', 'GUARD_TIMEOUT')
66 |       and assessment_id is null
67 |       and comparison_id is null)
68 |     or (status = 'comparison_persist_failed'
69 |       and failure_code = 'COMPARISON_PERSIST_FAILED'
70 |       and assessment_id is not null
71 |       and comparison_id is null)
72 |   )
73 | );
74 |
75 | create index integration_shadow_attempts_store_created_idx
76 |   on integration_shadow_attempts(store_id, created_at desc);
77 |
78 | create index integration_shadow_attempts_status_created_idx
79 |   on integration_shadow_attempts(integration, status, created_at desc);
80 |
```

### packages/shared-types/src/index.ts

Bytes: 11565
SHA-256: afe2cce6e107db0818b417733adc0573f7a496b33c5477a634de7645ad0758a5
Lines: 1-329 of 329

```typescript
  1 | import { z } from 'zod';
  2 |
  3 | export const riskLevelSchema = z.enum(['low', 'moderate', 'high', 'critical', 'unknown']);
  4 | export type RiskLevel = z.infer<typeof riskLevelSchema>;
  5 |
  6 | export const riskDecisionSchema = z.enum(['allow', 'verify', 'review', 'hold', 'block']);
  7 | export type RiskDecision = z.infer<typeof riskDecisionSchema>;
  8 |
  9 | export const riskSignalSchema = z.object({
 10 |   code: z.string().min(1).max(100),
 11 |   category: z.enum(['courier', 'merchant', 'velocity', 'verification', 'network', 'order']),
 12 |   score: z.number().int().min(-100).max(100),
 13 |   confidence: z.number().min(0).max(1).optional(),
 14 |   description: z.string().min(1).max(500),
 15 | });
 16 | export type RiskSignal = z.infer<typeof riskSignalSchema>;
 17 |
 18 | export const courierSummarySchema = z.object({
 19 |   freshness: z.enum(['fresh', 'stale', 'missing']).optional(),
 20 |   providers: z.number().int().nonnegative().optional(),
 21 |   total: z.number().int().nonnegative(),
 22 |   delivered: z.number().int().nonnegative(),
 23 |   returned: z.number().int().nonnegative(),
 24 |   cancelled_before_shipping: z.number().int().nonnegative(),
 25 | });
 26 | export type CourierSummary = z.infer<typeof courierSummarySchema>;
 27 |
 28 | export const riskAssessmentRequestSchema = z.object({
 29 |   external_order_id: z.string().min(1).max(200).optional(),
 30 |   phone: z.string().min(8).max(30),
 31 |   order_total: z.number().nonnegative().default(0),
 32 |   payment_method: z.enum(['cod', 'prepaid']).default('cod'),
 33 |   shipping_address: z
 34 |     .object({
 35 |       district: z.string().max(120).optional(),
 36 |       area: z.string().max(200).optional(),
 37 |       raw: z.string().max(1000).optional(),
 38 |     })
 39 |     .optional(),
 40 |   items_count: z.number().int().positive().max(1000).optional(),
 41 |   session: z
 42 |     .object({
 43 |       ip: z.string().max(64).optional(),
 44 |       device_id: z.string().max(200).optional(),
 45 |       user_agent: z.string().max(1000).optional(),
 46 |     })
 47 |     .optional(),
 48 | });
 49 | export type RiskAssessmentRequest = z.infer<typeof riskAssessmentRequestSchema>;
 50 |
 51 | export const riskAssessmentResponseSchema = z.object({
 52 |   success: z.literal(true),
 53 |   assessment_id: z.string().min(1),
 54 |   risk_score: z.number().int().min(0).max(100),
 55 |   risk_level: riskLevelSchema,
 56 |   decision: riskDecisionSchema,
 57 |   confidence: z.number().min(0).max(1),
 58 |   signals: z.array(riskSignalSchema),
 59 |   courier_summary: courierSummarySchema,
 60 |   recommended_actions: z.array(z.string()).optional(),
 61 |   meta: z
 62 |     .object({
 63 |       engine_version: z.string(),
 64 |       policy_version: z.string(),
 65 |       degraded: z.boolean(),
 66 |       response_ms: z.number().int().nonnegative().optional(),
 67 |     })
 68 |     .optional(),
 69 | });
 70 | export type RiskAssessmentResponse = z.infer<typeof riskAssessmentResponseSchema>;
 71 |
 72 | export const orderOutcomeSchema = z.object({
 73 |   external_order_id: z.string().min(1).max(200),
 74 |   assessment_id: z.string().min(1).optional(),
 75 |   outcome: z.enum(['delivered', 'returned', 'cancelled_before_shipping', 'customer_confirmed']),
 76 |   provider: z.string().min(1).max(50).optional(),
 77 |   reason: z.string().max(500).optional(),
 78 |   occurred_at: z.string().datetime(),
 79 | });
 80 | export type OrderOutcomeInput = z.infer<typeof orderOutcomeSchema>;
 81 |
 82 | export const nativeShadowComparisonInputSchema = z.object({
 83 |   external_order_id: z.string().min(1).max(200),
 84 |   assessment_id: z.string().min(1).max(200),
 85 |   legacy_score: z.number().int().min(0).max(100),
 86 |   legacy_decision: z
 87 |     .string()
 88 |     .trim()
 89 |     .min(1)
 90 |     .max(50)
 91 |     .transform((value) => value.toLowerCase()),
 92 |   rollout_version: z.string().trim().min(1).max(100),
 93 |   sample_bucket: z.number().int().min(0).max(9999),
 94 |   sample_rate_bps: z.number().int().min(1).max(10000),
 95 |   evaluated_at: z.string().datetime(),
 96 | });
 97 | export type NativeShadowComparisonInput = z.infer<typeof nativeShadowComparisonInputSchema>;
 98 |
 99 | export const nativeShadowComparisonResponseSchema = z.object({
100 |   success: z.literal(true),
101 |   comparison_id: z.string().min(1),
102 |   replay: z.boolean(),
103 | });
104 | export type NativeShadowComparisonResponse = z.infer<typeof nativeShadowComparisonResponseSchema>;
105 |
106 | export const nativeShadowRolloutModeSchema = z.enum(['off', 'shadow']);
107 | export type NativeShadowRolloutMode = z.infer<typeof nativeShadowRolloutModeSchema>;
108 |
109 | export const nativeShadowRolloutResponseSchema = z.object({
110 |   success: z.literal(true),
111 |   organization_id: z.string().min(1),
112 |   store_id: z.string().min(1),
113 |   integration: z.literal('multi-store-saas'),
114 |   mode: nativeShadowRolloutModeSchema,
115 |   rollout_version: z.string().min(1).max(100),
116 |   sample_rate_bps: z.number().int().min(0).max(10000),
117 |   sampling_key: z.string().min(1).max(200),
118 | });
119 | export type NativeShadowRolloutResponse = z.infer<typeof nativeShadowRolloutResponseSchema>;
120 |
121 | export const nativeShadowAttemptStatusSchema = z.enum([
122 |   'comparison_succeeded',
123 |   'assessment_failed',
124 |   'comparison_persist_failed',
125 | ]);
126 | export type NativeShadowAttemptStatus = z.infer<typeof nativeShadowAttemptStatusSchema>;
127 |
128 | export const nativeShadowAttemptInputSchema = z.object({
129 |   external_order_id: z.string().min(1).max(200),
130 |   rollout_version: z.string().trim().min(1).max(100),
131 |   sample_bucket: z.number().int().min(0).max(9999),
132 |   sample_rate_bps: z.number().int().min(1).max(10000),
133 |   status: nativeShadowAttemptStatusSchema,
134 |   failure_code: z
135 |     .enum(['GUARD_ASSESSMENT_FAILED', 'GUARD_TIMEOUT', 'COMPARISON_PERSIST_FAILED'])
136 |     .optional(),
137 |   assessment_id: z.string().min(1).max(200).optional(),
138 |   comparison_id: z.string().min(1).max(200).optional(),
139 |   evaluated_at: z.string().datetime(),
140 | });
141 | export type NativeShadowAttemptInput = z.infer<typeof nativeShadowAttemptInputSchema>;
142 |
143 | export const nativeShadowAttemptResponseSchema = z.object({
144 |   success: z.literal(true),
145 |   attempt_id: z.string().min(1),
146 |   replay: z.boolean(),
147 | });
148 | export type NativeShadowAttemptResponse = z.infer<typeof nativeShadowAttemptResponseSchema>;
149 |
150 | export const nativeShadowPilotReportSchema = z.object({
151 |   mode: nativeShadowRolloutModeSchema,
152 |   rollout_version: z.string().min(1).max(100),
153 |   sample_rate_bps: z.number().int().min(0).max(10000),
154 |   sampled_orders: z.number().int().nonnegative(),
155 |   successful_comparisons: z.number().int().nonnegative(),
156 |   assessment_failures: z.number().int().nonnegative(),
157 |   persistence_failures: z.number().int().nonnegative(),
158 |   decision_disagreement_rate: z.number().min(0).max(1).nullable(),
159 |   score_delta: z.object({
160 |     minimum: z.number().int().min(-100).max(100).nullable(),
161 |     maximum: z.number().int().min(-100).max(100).nullable(),
162 |     average: z.number().min(-100).max(100).nullable(),
163 |     lower: z.number().int().nonnegative(),
164 |     equal: z.number().int().nonnegative(),
165 |     higher: z.number().int().nonnegative(),
166 |   }),
167 | });
168 | export type NativeShadowPilotReport = z.infer<typeof nativeShadowPilotReportSchema>;
169 |
170 | export const apiErrorSchema = z.object({
171 |   success: z.literal(false),
172 |   error: z.object({
173 |     code: z.string(),
174 |     message: z.string(),
175 |     details: z.record(z.unknown()).optional(),
176 |   }),
177 |   request_id: z.string(),
178 | });
179 | export type ApiError = z.infer<typeof apiErrorSchema>;
180 |
181 | export const platformRoleSchema = z.enum(['merchant', 'platform_admin']);
182 | export type PlatformRole = z.infer<typeof platformRoleSchema>;
183 |
184 | export const browserStoreSchema = z.object({
185 |   id: z.string().min(1),
186 |   organization_id: z.string().min(1),
187 |   name: z.string().min(1),
188 |   platform: z.string().min(1),
189 |   status: z.string().min(1),
190 | });
191 | export type BrowserStore = z.infer<typeof browserStoreSchema>;
192 |
193 | export const browserOrganizationSchema = z.object({
194 |   id: z.string().min(1),
195 |   name: z.string().min(1),
196 |   role: z.string().min(1),
197 |   stores: z.array(browserStoreSchema),
198 | });
199 | export type BrowserOrganization = z.infer<typeof browserOrganizationSchema>;
200 |
201 | export const browserSessionResponseSchema = z.object({
202 |   success: z.literal(true),
203 |   user: z.object({
204 |     id: z.string().min(1),
205 |     email: z.string().email(),
206 |     platform_role: platformRoleSchema,
207 |   }),
208 |   organizations: z.array(browserOrganizationSchema),
209 |   csrf_token: z.string().min(32),
210 |   expires_at: z.string().datetime(),
211 | });
212 | export type BrowserSessionResponse = z.infer<typeof browserSessionResponseSchema>;
213 |
214 | export const dashboardReviewSchema = z.object({
215 |   assessment_id: z.string().min(1),
216 |   external_order_id: z.string().nullable(),
217 |   phone_masked: z.string().min(1),
218 |   risk_score: z.number().int().min(0).max(100),
219 |   decision: riskDecisionSchema,
220 |   confidence: z.number().min(0).max(1),
221 |   signals: z.array(
222 |     z.object({
223 |       code: z.string().min(1),
224 |       score: z.number().int(),
225 |       description: z.string().min(1),
226 |     }),
227 |   ),
228 |   created_at: z.string().datetime(),
229 | });
230 | export type DashboardReview = z.infer<typeof dashboardReviewSchema>;
231 |
232 | export const merchantDashboardOverviewSchema = z.object({
233 |   success: z.literal(true),
234 |   generated_at: z.string().datetime(),
235 |   scope: z.object({
236 |     organization_id: z.string().min(1),
237 |     organization_name: z.string().min(1),
238 |     store_id: z.string().min(1),
239 |     store_name: z.string().min(1),
240 |     platform: z.string().min(1),
241 |     role: z.string().min(1),
242 |   }),
243 |   summary: z.object({
244 |     assessments_30d: z.number().int().nonnegative(),
245 |     degraded_30d: z.number().int().nonnegative(),
246 |     pending_reviews: z.number().int().nonnegative(),
247 |     verified_30d: z.number().int().nonnegative(),
248 |     usage_month: z.number().int().nonnegative(),
249 |     usage_limit: z.number().int().positive().nullable(),
250 |   }),
251 |   decisions: z.object({
252 |     allow: z.number().int().nonnegative(),
253 |     verify: z.number().int().nonnegative(),
254 |     review: z.number().int().nonnegative(),
255 |     hold: z.number().int().nonnegative(),
256 |     block: z.number().int().nonnegative(),
257 |   }),
258 |   reviews: z.array(dashboardReviewSchema),
259 |   couriers: z.array(
260 |     z.object({
261 |       provider: z.string().min(1),
262 |       status: z.string().min(1),
263 |       last_success_at: z.string().datetime().nullable(),
264 |       last_failure_at: z.string().datetime().nullable(),
265 |       failure_code: z.string().nullable(),
266 |     }),
267 |   ),
268 |   shadow_pilot: nativeShadowPilotReportSchema,
269 | });
270 | export type MerchantDashboardOverview = z.infer<typeof merchantDashboardOverviewSchema>;
271 |
272 | export const platformAdminOverviewSchema = z.object({
273 |   success: z.literal(true),
274 |   generated_at: z.string().datetime(),
275 |   summary: z.object({
276 |     active_organizations: z.number().int().nonnegative(),
277 |     active_stores: z.number().int().nonnegative(),
278 |     assessments_today: z.number().int().nonnegative(),
279 |     degraded_percentage: z.number().min(0).max(100),
280 |     worker_backlog: z.number().int().nonnegative(),
281 |     failed_webhooks: z.number().int().nonnegative(),
282 |   }),
283 |   incidents: z.array(
284 |     z.object({
285 |       code: z.string().min(1),
286 |       title: z.string().min(1),
287 |       detail: z.string().min(1),
288 |       severity: z.enum(['low', 'medium', 'high']),
289 |     }),
290 |   ),
291 |   providers: z.array(
292 |     z.object({
293 |       name: z.string().min(1),
294 |       state: z.string().min(1),
295 |       metric: z.string().min(1),
296 |     }),
297 |   ),
298 |   automatic_blocking: z.object({
299 |     broadly_enabled: z.literal(false),
300 |     reason: z.string().min(1),
301 |   }),
302 |   shadow_pilot: nativeShadowPilotReportSchema.extend({
303 |     opted_in_stores: z.number().int().nonnegative(),
304 |   }),
305 | });
306 | export type PlatformAdminOverview = z.infer<typeof platformAdminOverviewSchema>;
307 |
308 | export interface RequestScope {
309 |   organizationId: string;
310 |   storeId: string;
311 |   apiKeyId?: string;
312 |   environment: 'test' | 'live';
313 | }
314 |
315 | export interface DomainEvent<TPayload = Record<string, unknown>> {
316 |   id: string;
317 |   type:
318 |     | 'assessment.completed'
319 |     | 'verification.verified'
320 |     | 'verification.failed'
321 |     | 'courier.connection_failed'
322 |     | 'order.outcome_recorded'
323 |     | 'usage.limit_warning';
324 |   organizationId: string;
325 |   storeId?: string;
326 |   occurredAt: string;
327 |   payload: TPayload;
328 | }
329 |
```

### tracker.yml

Bytes: 14260
SHA-256: 9456965f221158c58fed696cf05d1ca1526ef6c59aed3b25cc40a764f7f08663
Lines: 1-289 of 289

```yaml
  1 | schema_version: 1
  2 | project:
  3 |   name: Ozzyl Guard
  4 |   repository: rahmatullahboss/ozzyl-guard
  5 |   branch: main
  6 |   visibility: public
  7 |   expected_visibility: private
  8 |   status: production-hardening-in-progress
  9 |   last_updated: 2026-07-18
 10 |
 11 | agent_entrypoint:
 12 |   purpose: Continuation tracker for developers and AI agents.
 13 |   read_first:
 14 |     - tracker.yml
 15 |     - AGENTS.md
 16 |     - README.md
 17 |     - .ai-bridge/current-plan.md
 18 |     - .ai-bridge/implementation-status.md
 19 |     - .ai-bridge/decisions.md
 20 |     - .ai-bridge/pro-context.md
 21 |     - docs/README.md
 22 |     - docs/adr/README.md
 23 |   workflow:
 24 |     - inspect_current_repository_state
 25 |     - search_existing_code_schema_routes_and_docs
 26 |     - read_relevant_specs_and_adrs
 27 |     - implement_the_smallest_coherent_change
 28 |     - add_failure_and_tenant_isolation_tests
 29 |     - run_npm_verify
 30 |     - update_docs_status_and_tracker
 31 |     - commit_and_push_after_green_verification
 32 |
 33 | source_of_truth:
 34 |   architecture: docs/architecture/system-architecture.md
 35 |   api: docs/api/api-specification.md
 36 |   database: docs/database/database-design.md
 37 |   courier: docs/courier/courier-intelligence.md
 38 |   risk_engine: docs/risk-engine/risk-engine.md
 39 |   integrations: docs/integrations/integrations.md
 40 |   security: docs/security/security-privacy.md
 41 |   testing: docs/testing/testing-strategy.md
 42 |   operations: docs/operations/operations-observability.md
 43 |   deployment: docs/operations/deployment.md
 44 |   roadmap: docs/roadmap/implementation-roadmap.md
 45 |   backlog: docs/roadmap/initial-backlog.md
 46 |   risks: docs/roadmap/risk-register.md
 47 |   current_plan: .ai-bridge/current-plan.md
 48 |   implementation_status: .ai-bridge/implementation-status.md
 49 |   decisions: .ai-bridge/decisions.md
 50 |   full_context: .ai-bridge/pro-context.md
 51 |
 52 | invariants:
 53 |   - exactly_one_canonical_risk_engine
 54 |   - risk_engine_has_no_external_io
 55 |   - courier_access_only_through_adapters_and_workers
 56 |   - api_handlers_have_no_scoring_logic
 57 |   - merchant_data_requires_organization_and_store_scope
 58 |   - unknown_data_is_not_safe_by_default
 59 |   - provider_failure_is_not_an_automatic_decision
 60 |   - user_sessions_are_separate_from_service_access
 61 |   - applied_migrations_are_immutable
 62 |   - all_integrations_use_the_versioned_api_contract
 63 |   - long_running_provider_work_is_asynchronous
 64 |   - postgresql_is_authoritative_for_pilot_durable_work
 65 |   - cache_state_is_non_authoritative
 66 |   - production_decryption_fails_closed
 67 |   - durable_worker_transitions_require_current_lease_ownership
 68 |   - webhook_and_otp_network_delivery_stays_out_of_checkout_request_paths
 69 |   - durable_event_payloads_require_explicit_organization_and_store_scope
 70 |   - verification_provider_delivery_only_runs_in_private_workers
 71 |   - verification_job_plaintext_is_encrypted_and_context_bound
 72 |   - migration_files_match_the_committed_sha256_manifest
 73 |   - migration_history_checksums_are_non_null_and_fail_closed
 74 |   - restore_rehearsal_requires_a_clean_distinct_target
 75 |   - tenant_scope_is_revalidated_against_active_relational_store_ownership
 76 |   - runtime_database_role_is_non_owner_non_migration_and_explicitly_granted
 77 |   - managed_envelopes_use_random_per_record_data_keys_and_authenticated_context
 78 |   - production_kms_failures_have_no_plaintext_or_local_fallback
 79 |   - native_shadow_rollout_never_changes_the_effective_legacy_decision
 80 |   - native_shadow_runs_only_after_authoritative_source_order_reload
 81 |   - native_shadow_rollout_defaults_off_and_requires_explicit_store_opt_in
 82 |   - native_shadow_attempt_evidence_is_tenant_scoped_immutable_and_idempotent
 83 |   - shadow_comparison_guard_values_are_derived_from_the_scoped_assessment
 84 |
 85 | implemented:
 86 |   - typescript_monorepo_and_ci
 87 |   - postgresql_schema_and_eleven_migrations
 88 |   - organization_store_membership_and_plan_foundation
 89 |   - usage_metering_and_audit_foundation
 90 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
 91 |   - pure_versioned_explainable_risk_engine
 92 |   - canonical_v1_api_and_postgresql_repositories
 93 |   - provider_neutral_shared_envelope_encryption_package
 94 |   - steadfast_adapter_and_browser_session_worker
 95 |   - postgresql_courier_sync_worker
 96 |   - verification_and_webhook_libraries
 97 |   - durable_postgresql_webhook_outbox_and_event_worker
 98 |   - durable_encrypted_postgresql_verification_queue_and_worker
 99 |   - tenant_scoped_postgresql_otp_verification_repository
100 |   - woocommerce_shopify_custom_and_native_adapters
101 |   - authenticated_live_merchant_dashboard
102 |   - authenticated_live_platform_admin
103 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
104 |   - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
105 |   - accepted_provider_neutral_production_infrastructure_adrs
106 |   - postgresql_usage_assessment_outcome_and_operation_idempotency_race_hardening
107 |   - postgresql_courier_worker_atomic_claim_and_lease_recovery
108 |   - postgresql_webhook_worker_atomic_claim_and_lease_recovery
109 |   - postgresql_verification_worker_atomic_claim_and_lease_recovery
110 |   - verification_payload_context_phone_hash_and_otp_hash_validation
111 |   - otp_provider_delivery_removed_from_synchronous_api_requests
112 |   - migration_replay_ci_gate
113 |   - webhook_dns_destination_validation
114 |   - postgresql_migration_manifest_and_history_checksum_integrity
115 |   - clean_postgresql_backup_restore_rehearsal
116 |   - restored_schema_data_sequence_history_and_replay_comparison
117 |   - authoritative_api_key_feature_assessment_and_outcome_tenant_scope_revalidation
118 |   - secret_free_tenant_scoped_webhook_and_verification_administration_repositories
119 |   - dashboard_and_platform_admin_repository_isolation_expansion
120 |   - least_privilege_postgresql_runtime_role_policy_grant_cli_and_ci_gate
121 |   - provider_neutral_managed_envelope_v2_with_random_per_record_data_keys
122 |   - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
123 |   - native_multi_store_off_and_deterministic_shadow_rollout_controls
124 |   - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
125 |   - selected_source_post_persist_native_shadow_integration
126 |   - store_scoped_native_shadow_opt_in_and_pilot_reporting
127 |   - tenant_scoped_immutable_native_shadow_attempt_evidence
128 |
129 | verification:
130 |   command: npm run verify
131 |   last_verified: 2026-07-18
132 |   status: passed
133 |   results:
134 |     migrations: 11_of_11_with_sha256_manifest
135 |     migration_replay: passed
136 |     migration_history_integrity: passed
137 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
138 |     architecture_boundaries: passed
139 |     typecheck: 19_of_19
140 |     test_tasks: 28_of_28
141 |     remote_assertions: 120_passed
142 |     migration_integrity_tests: 7_of_7_passed
143 |     postgresql_concurrency_tests: 7_of_7_passed
144 |     postgresql_courier_worker_lease_tests: 5_of_5_passed
145 |     postgresql_webhook_worker_lease_tests: 5_of_5_passed
146 |     postgresql_verification_worker_lease_tests: 5_of_5_passed
147 |     verification_payload_validation_tests: 3_of_3_passed
148 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
149 |     postgresql_runtime_role_tests: 6_of_6_passed
150 |     managed_envelope_tests: 11_of_11_passed
151 |     native_shadow_adapter_tests: 10_of_10_passed
152 |     native_shadow_api_tests: 7_of_7_passed
153 |     native_shadow_postgresql_tests: 7_of_7_passed
154 |     native_shadow_browser_tests: 2_of_2_passed
155 |     native_shadow_sdk_tests: 2_of_2_passed
156 |     native_shadow_total_tests: 28_of_28_passed
157 |     builds: 19_of_19
158 |     php_syntax: passed
159 |     high_critical_dependency_check: passed
160 |     documentation_links: 60_reviewed_0_known_broken
161 |   continuation_bundle:
162 |     status: refreshed_locally
163 |     canonical_main_sync: verified
164 |   remote_ci:
165 |     status: passed
166 |     run_id: 29629751800
167 |     job_id: 88040964883
168 |     job: verify
169 |     tested_head: 57e6b296617549e923fc80ab80b0317f109f5ee8
170 |     merged_main_commit: c478170c7dadbeafa576a62ae989df682e052d4e
171 |     completed: 2026-07-18
172 |     steps: audit_format_lint_manifest_eleven_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_typecheck_tests_build_php_all_passed
173 |   source_validation:
174 |     status: passed
175 |     run_id: 29629751800
176 |     job_id: 88040964883
177 |     tested_head: 57e6b296617549e923fc80ab80b0317f109f5ee8
178 |     completed: 2026-07-18
179 |     steps: audit_format_lint_manifest_eleven_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_typecheck_tests_build_php_all_passed
180 |     native_shadow_tests: 28_of_28_passed
181 |   pending_follow_up:
182 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
183 |     - pilot_outcome_collection_and_calibration
184 |
185 | migrations:
186 |   immutable: true
187 |   manifest: packages/database/migrations/manifest.json
188 |   history_checksum_column: checksum_sha256_not_null
189 |   files:
190 |     - packages/database/migrations/0001_foundation.sql
191 |     - packages/database/migrations/0002_courier.sql
192 |     - packages/database/migrations/0003_risk.sql
193 |     - packages/database/migrations/0004_verification_events.sql
194 |     - packages/database/migrations/0005_durable_operations.sql
195 |     - packages/database/migrations/0006_browser_access.sql
196 |     - packages/database/migrations/0007_worker_leases.sql
197 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
198 |     - packages/database/migrations/0009_verification_delivery_queue.sql
199 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
200 |     - packages/database/migrations/0011_native_shadow_pilot.sql
201 |
202 | accepted_adrs:
203 |   - docs/adr/0006-production-deployment-topology.md
204 |   - docs/adr/0007-managed-postgresql-production-baseline.md
205 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
206 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
207 |   - docs/adr/0010-vendor-neutral-production-observability.md
208 |   - docs/adr/0011-selected-source-shadow-pilot.md
209 |
210 | external_dependencies:
211 |   - authorized_steadfast_test_account
212 |   - provider_authorization_review
213 |   - deployment_platform_account_region_and_budget
214 |   - managed_postgresql_provider_and_service_tier
215 |   - managed_secret_store_and_kms_vault_provider
216 |   - observability_backend_and_retention_policy
217 |   - otp_provider_account
218 |   - pilot_outcome_data
219 |
220 | next_milestone:
221 |   name: production-hardening-and-pilot-readiness
222 |   tasks:
223 |     - select_and_provision_accepted_infrastructure_providers
224 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
225 |     - validate_steadfast_with_an_authorized_account
226 |     - implement_the_selected_otp_provider_adapter
227 |     - add_distributed_cache_only_when_replica_coordination_requires_it
228 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
229 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
230 |     - calibrate_decisions_before_broad_automatic_blocking
231 |
232 | release_policy:
233 |   branch: main
234 |   before_push:
235 |     - npm_run_verify_passes
236 |     - documentation_and_tracker_are_current
237 |     - repository_review_is_clean
238 |   rules:
239 |     - no_force_push_to_main
240 |     - do_not_edit_applied_migrations
241 |     - use_descriptive_commits
242 |
243 | notes:
244 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
245 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
246 |   - github_connector_reports_public_visibility_while_expected_state_is_private
247 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
248 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
249 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
250 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
251 |   - webhook_event_payloads_do_not_include_raw_phone_values
252 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
253 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
254 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
255 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
256 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
257 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
258 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
259 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
260 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
261 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
262 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
263 |   - selected_otp_provider_module_and_credentials_remain_external
264 |   - migration_files_are_bound_to_a_committed_sha256_manifest
265 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
266 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
267 |   - migration_execution_uses_one_session_advisory_lock
268 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
269 |   - managed_provider_point_in_time_restore_drill_remains_external
270 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
271 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
272 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
273 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
274 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
275 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
276 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
277 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
278 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
279 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
280 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
281 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
282 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
283 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
284 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
285 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
286 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
287 |   - pro_context_was_refreshed_with_the_repository_local_exporter_after_feature_merge
288 |   - update_this_file_after_every_material_milestone
289 |
```

### eslint.config.js

Bytes: 1119
SHA-256: f15cbeb1b1ffccf47d9ffccee3a0273a6027aa002050633beb7d17e20bac0e1e
Lines: 1-44 of 44

```javascript
 1 | import js from '@eslint/js';
 2 | import tseslint from 'typescript-eslint';
 3 |
 4 | export default tseslint.config(
 5 |   {
 6 |     ignores: [
 7 |       '**/dist/**',
 8 |       '**/node_modules/**',
 9 |       'codexpro/**',
10 |       'coverage/**',
11 |       'playwright-report/**',
12 |       'test-results/**',
13 |       'eslint.config.js',
14 |       'vitest.config.ts',
15 |       'scripts/**/*.mjs',
16 |     ],
17 |   },
18 |   js.configs.recommended,
19 |   ...tseslint.configs.recommendedTypeChecked,
20 |   {
21 |     languageOptions: {
22 |       parserOptions: {
23 |         projectService: true,
24 |         tsconfigRootDir: import.meta.dirname,
25 |       },
26 |     },
27 |     rules: {
28 |       '@typescript-eslint/consistent-type-imports': 'error',
29 |       '@typescript-eslint/no-floating-promises': 'error',
30 |       '@typescript-eslint/no-misused-promises': 'error',
31 |       '@typescript-eslint/no-explicit-any': 'error',
32 |       '@typescript-eslint/require-await': 'off',
33 |       '@typescript-eslint/unbound-method': 'off',
34 |     },
35 |   },
36 |   {
37 |     files: ['**/*.test.ts', '**/*.config.ts'],
38 |     rules: {
39 |       '@typescript-eslint/no-unsafe-assignment': 'off',
40 |       '@typescript-eslint/no-unsafe-member-access': 'off',
41 |     },
42 |   },
43 | );
44 |
```

### package.json

Bytes: 1736
SHA-256: 811c6942b74c115bbd1eccce6ec923ad6b0d67494628f982890212afbd58eefa
Lines: 1-52 of 52

```json
 1 | {
 2 |   "name": "ozzyl-guard",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "packageManager": "npm@10.9.7",
 7 |   "workspaces": [
 8 |     "apps/*",
 9 |     "packages/*",
10 |     "workers/*",
11 |     "integrations/*"
12 |   ],
13 |   "engines": {
14 |     "node": ">=20.0.0",
15 |     "npm": ">=10.0.0"
16 |   },
17 |   "scripts": {
18 |     "dev": "turbo run dev --parallel",
19 |     "dev:api": "npm run dev -w @ozzyl/api",
20 |     "dev:dashboard": "npm run dev -w @ozzyl/dashboard",
21 |     "build": "turbo run build",
22 |     "typecheck": "turbo run typecheck",
23 |     "lint": "eslint . --max-warnings=0",
24 |     "format": "prettier --write .",
25 |     "format:check": "prettier --check .",
26 |     "test": "turbo run test",
27 |     "test:coverage": "vitest run --coverage",
28 |     "db:generate": "drizzle-kit generate --config packages/database/drizzle.config.ts",
29 |     "db:migrate": "tsx packages/database/src/migrate.ts",
30 |     "db:check": "tsx packages/database/src/check-migrations.ts",
31 |     "db:integrity": "tsx packages/database/src/check-database-integrity.ts",
32 |     "db:restore-rehearsal": "tsx packages/database/src/restore-rehearsal.ts",
33 |     "db:runtime-grants": "tsx packages/database/src/apply-runtime-grants.ts",
34 |     "check:architecture": "node scripts/check-architecture.mjs",
35 |     "verify": "npm run format:check && npm run lint && npm run db:check && npm run check:architecture && npm run typecheck && npm run test && npm run build"
36 |   },
37 |   "devDependencies": {
38 |     "@eslint/js": "^9.39.2",
39 |     "@types/node": "^24.0.0",
40 |     "@vitest/coverage-v8": "^4.0.18",
41 |     "drizzle-kit": "^0.31.4",
42 |     "eslint": "^9.39.2",
43 |     "prettier": "^3.6.2",
44 |     "tsup": "^8.5.0",
45 |     "tsx": "^4.20.6",
46 |     "turbo": "^2.8.13",
47 |     "typescript": "^5.8.3",
48 |     "typescript-eslint": "^8.53.0",
49 |     "vitest": "^4.0.18"
50 |   }
51 | }
52 |
```

### turbo.json

Bytes: 414
SHA-256: d9001808bb775f2486d7692ca17f826dfaefb8c1466552bfeb47cc45e55f390f
Lines: 1-23 of 23

```json
 1 | {
 2 |   "$schema": "https://turbo.build/schema.json",
 3 |   "tasks": {
 4 |     "build": {
 5 |       "dependsOn": ["^build"],
 6 |       "outputs": ["dist/**"]
 7 |     },
 8 |     "typecheck": {
 9 |       "dependsOn": ["^typecheck"],
10 |       "outputs": []
11 |     },
12 |     "test": {
13 |       "dependsOn": ["^build"],
14 |       "env": ["DATABASE_URL"],
15 |       "outputs": ["coverage/**"]
16 |     },
17 |     "dev": {
18 |       "cache": false,
19 |       "persistent": true
20 |     }
21 |   }
22 | }
23 |
```

## Skipped Files

None.
