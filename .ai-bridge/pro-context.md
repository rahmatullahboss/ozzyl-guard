# Ozzyl Guard repository/provider/queue metrics continuation context

Generated: 2026-07-28T04:46:37.054Z
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
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── api/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── dashboard/
│       ├── src/
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── codexpro/
│   ├── docs/
│   │   ├── images/
│   │   ├── superpowers/
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
│   │   ├── 0012-durable-work-dead-letter-operations.md
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
│   │   ├── database-design.md
│   │   ├── durable-work-replay-ledger.md
│   │   └── durable-work-retention.md
│   ├── integrations/
│   │   └── integrations.md
│   ├── operations/
│   │   ├── browser-dead-letter-operations.md
│   │   ├── deployment.md
│   │   ├── development-environment.md
│   │   ├── durable-work-dead-letter-runbook.md
│   │   ├── durable-work-retention-runbook.md
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
│   │   ├── durable-work-dead-letter-testing.md
│   │   └── testing-strategy.md
│   └── README.md
├── integrations/
│   ├── custom-js/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── multi-store-saas/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── shopify/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── woocommerce/
│       └── ozzyl-guard.php
├── packages/
│   ├── authentication/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── billing/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── courier-adapters/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── database/
│   │   ├── migrations/
│   │   ├── src/
│   │   ├── drizzle.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── encryption/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── observability/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── risk-engine/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── sdk/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── shared-types/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── verification/
│       ├── src/
│       ├── package.json
│       └── tsconfig.json
├── scripts/
│   └── check-architecture.mjs
├── workers/
│   ├── courier-session-worker/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── courier-sync-worker/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── event-worker/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── verification-worker/
│       ├── src/
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
## feat/repository-provider-queue-metrics
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M .ai-bridge/pro-context.md
 M README.md
 M config/environment.example
 M docker-compose.yml
 M docs/README.md
 M docs/operations/deployment.md
 M docs/operations/operations-observability.md
 M docs/security/security-privacy.md
 M docs/testing/testing-strategy.md
 M packages/observability/src/metrics.test.ts
 M packages/observability/src/metrics.ts
 M tracker.yml
 M workers/courier-session-worker/src/index.test.ts
 M workers/courier-session-worker/src/index.ts
 M workers/courier-sync-worker/src/index.test.ts
 M workers/courier-sync-worker/src/index.ts
 M workers/courier-sync-worker/src/postgres.test.ts
 M workers/courier-sync-worker/src/postgres.ts
 M workers/courier-sync-worker/src/runner.ts
 M workers/event-worker/src/index.test.ts
 M workers/event-worker/src/index.ts
 M workers/event-worker/src/postgres.test.ts
 M workers/event-worker/src/postgres.ts
 M workers/event-worker/src/runner.ts
 M workers/verification-worker/src/index.test.ts
 M workers/verification-worker/src/index.ts
 M workers/verification-worker/src/postgres.test.ts
 M workers/verification-worker/src/postgres.ts
 M workers/verification-worker/src/runner.ts
```

## Recent Commits

```text
2e71b97 (HEAD -> feat/repository-provider-queue-metrics, origin/main, main) docs: record metrics CI evidence (#35)
02be8d2 feat(observability): add safe application metrics (#34)
0851020 docs: record retention CI evidence (#33)
8788da4 feat(database): archive terminal durable work (#32)
f19e9b4 docs: record worker heartbeat CI evidence (#31)
6ab01a7 feat(workers): renew durable job leases (#30)
3c31ae7 docs: record API observability CI evidence (#29)
00d6eec feat(api): add safe request observability (#28)
```

## Git Diff

```diff
git unavailable or failed: spawnSync git ENOBUFS
```

## Existing AI Bridge Context

--- .ai-bridge/current-plan.md ---
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and nineteen production-hardening slices are complete:
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
 19 | 11. selected-source post-persist shadow integration with authoritative source-order reload, explicit store opt-in, immutable sampled-attempt evidence, and tenant-scoped pilot reporting;
 20 | 12. tenant-scoped durable-work dead-letter inspection and explicit idempotent replay with lease reset, structural failure guards, immutable evidence, and audit records;
 21 | 13. authenticated merchant browser dead-letter operations with exact owner/admin store scope, secret-free listing, CSRF-protected replay, and synchronous stable replay keys;
 22 | 14. a canonical vendor-neutral structured logging/redaction package integrated into all four private workers, with bounded serialization and telemetry-failure isolation;
 23 | 15. API-wide safe request correlation and structured lifecycle logging with opaque request IDs, bounded route templates, response status/latency, redacted unhandled errors, and telemetry-failure isolation;
 24 | 16. owner-checked renewable leases for courier, webhook, and verification workers, with non-overlapping heartbeats, abort-on-renewal-loss provider I/O, and heartbeat drain before final queue transitions;
 25 | 17. maintenance-only preview-first retention for old terminal durable work, with secret-free archive evidence persisted before atomic source deletion, bounded batches, runtime-role denial, and preserved replay/audit evidence;
 26 | 18. vendor-neutral finite-cardinality application metrics for API requests, private-worker operations/duration, and durable claim failures, with prohibited identifier/secret/contact/URL/payload labels and sink-failure isolation;
 27 | 19. finite-cardinality durable repository and provider-call timing plus aggregate queue depth/oldest-ready-age gauges for courier, webhook, and verification workers, with configurable cadence and telemetry-only snapshot failure behavior.
 28 |
 29 | Concrete provider selection and provisioning remain external production work.
 30 |
 31 | ## Completed
 32 |
 33 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 34 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 35 | - [x] Canonical shared API/error/event contracts
 36 | - [x] PostgreSQL/Drizzle schema and thirteen append-only migrations
 37 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 38 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 39 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 40 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 41 | - [x] Courier adapter contract and Steadfast normalized adapter
 42 | - [x] Playwright Steadfast session driver with structured errors
 43 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 44 | - [x] Runnable PostgreSQL courier session and observation workers
 45 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 46 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 47 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 48 | - [x] API OTP send returns queued work without provider network I/O
 49 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 50 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 51 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 52 | - [x] Explicit-role platform admin with live global operations data
 53 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 54 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 55 | - [x] Architecture dependency-boundary CI guard
 56 | - [x] Provider-neutral production deployment topology ADR
 57 | - [x] Managed PostgreSQL production baseline ADR
 58 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 59 | - [x] Managed secrets and KMS envelope-encryption ADR
 60 | - [x] Vendor-neutral OpenTelemetry observability ADR
 61 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 62 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 63 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 64 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 65 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 66 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 67 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 68 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 69 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 70 | - [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
 71 | - [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
 72 | - [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
 73 | - [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
 74 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 75 | - [x] Concurrent usage reservations cannot exceed the plan limit
 76 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 77 | - [x] Concurrent outcome writes resolve as one insert and one replay
 78 | - [x] Operation idempotency records remain isolated by organization and store
 79 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 80 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 81 | - [x] Expired or previous courier owners cannot complete or fail jobs
 82 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 83 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 84 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 85 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 86 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 87 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 88 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 89 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 90 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 91 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 92 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 93 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 94 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 95 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 96 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 97 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 98 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 99 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
100 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
101 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
102 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
103 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
104 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
105 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
106 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
107 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
108 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
109 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
110 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
111 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
112 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
113 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
114 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
115 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
116 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
117 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
118 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
119 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
120 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
121 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
122 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
123 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
124 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
125 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
126 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
127 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
128 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
129 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
130 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
131 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
132 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
133 |
134 | ## Verified baseline
135 |
136 | - Formatting check: passed
137 | - ESLint with zero warnings: passed
138 | - Thirteen migration files ordered/non-empty/non-destructive: passed locally; previous merged baseline passed remotely; current source-branch CI is pending
139 | - First migration apply and immediate migration replay: previous merged baseline passed remotely
140 | - Architecture import boundaries: passed locally
141 | - Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
142 | - Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
143 | - Repository assertion inventory: 168 source assertions; previous merged remote baseline is 161; current PostgreSQL-integrated source-branch CI is pending
144 | - Metrics coverage: eleven shared observability assertions, API metrics, four worker/provider integrations, and three PostgreSQL aggregate queue snapshot tests are present; remote execution is pending
145 | - Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
146 | - WooCommerce PHP syntax: previous merged baseline passed remotely; current source-branch validation is pending
147 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
148 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
149 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
150 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
151 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
152 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
153 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
154 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
155 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
156 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
157 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
158 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
159 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
160 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
161 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
162 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
163 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
164 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
165 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
166 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
167 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
168 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
169 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
170 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
171 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
172 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
173 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
174 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
175 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
176 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
177 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
178 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
179 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
180 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
181 | - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
182 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
183 | - Canonical documentation links before this slice: zero known broken internal links
184 | - `tracker.yml` YAML structure remains valid
185 | - Prohibited source-pattern search: no matches
186 |
187 | The repository-local continuation exporter was refreshed after repository/provider/queue metrics documentation and tracker updates were finalized.
188 |
189 | ## Next production milestone
190 |
191 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
192 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
193 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
194 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
195 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
196 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
197 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
198 |
199 | ## External blockers
200 |
201 | - Authorized Steadfast merchant/test credentials
202 | - Steadfast provider-terms and merchant-authorization review
203 | - Deployment platform, account, primary region, and budget
204 | - Managed PostgreSQL provider and service tier
205 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
206 | - Managed secret store and KMS/vault provider
207 | - OpenTelemetry exporter/collector, distributed tracing, broader API/domain repository metrics, managed observability backend, dashboards, alerts, and retention policy
208 | - OTP provider account and credentials
209 | - Production account recovery/MFA or managed identity-provider decision
210 | - Repository visibility correction from currently reported public to expected private
211 | - Pilot outcome data for false-positive/false-negative calibration
212 |
213 | ## Non-negotiable continuation rules
214 |
215 | - Do not add a second risk engine.
216 | - Do not call providers from the risk engine or synchronous checkout path.
217 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
218 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
219 | - Do not use API keys as dashboard user sessions.
220 | - Require organization/store scope in all merchant repositories, events, and jobs.
221 | - Add new migrations; never edit applied migrations.
222 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
223 | - Keep Redis/cache state non-authoritative.
224 | - Keep unknown/provider failure explicit and policy-controlled.
225 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
226 |

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
  3 | Updated: 2026-07-28
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
 45 | 39. Terminal courier refresh, webhook delivery, and verification delivery work remains authoritative in its existing PostgreSQL row. An active owner/admin may inspect only secret-free failed work in an exact active organization/store and explicitly replay only relationally valid, non-structural, non-expired work. Replay is transactional and idempotent, clears old leases and failure state, appends immutable insert-only replay evidence plus an audit event, and performs no provider or webhook network I/O; automatic replay is not implemented.
 46 | 40. The merchant failed-work browser surface uses only opaque user sessions, exact session-visible organization/store scope, active owner/admin authorization, and repository-level relational reauthorization. Replay additionally requires CSRF proof and a stable per-work-item idempotency key assigned synchronously before network I/O and retained after request failure. Browser contracts are secret-free and delegate all state changes to the existing transactional PostgreSQL durable-work repository.
 47 | 41. `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. It owns recursive sensitive-field redaction, bounded safe serialization, fixed service/environment/event metadata, and telemetry-failure isolation. Private workers use this helper instead of ad hoc JSON logging; error messages, stacks, payloads, bodies, URLs, credentials, phone values, OTPs, cookies, keys, and tokens are never exported by the helper. Metrics, traces, exporters, and the managed backend remain separate follow-up work under ADR 0010.
 48 | 42. Every API request receives a server-controlled opaque request ID unless the caller supplies a bounded opaque `req_`, hexadecimal trace, or UUID value. The response echoes only that accepted/generated ID. Request lifecycle logs use an allowlisted static route or a bounded route template, never the raw URL, query string, or dynamic assessment identifier. They contain method, status/status class, and duration; unhandled errors export only safe name/code through the shared redaction boundary. Logging failure cannot change the HTTP response.
 49 | 43. Courier, webhook, and verification runners use one non-overlapping heartbeat per active claimed job. Renewal is allowed only for the current owner, an active claimed/processing state, and an unexpired lease; verification renewal additionally revalidates the queued, unexpired tenant-scoped session. The default renewal interval is one-third of the lease and must not exceed half of it. Renewal failure aborts active provider/network I/O with the original lease error, and every completion, retry, or terminal failure drains the heartbeat before changing queue state so renewal and final transitions cannot race.
 50 | 44. Durable retention is a maintenance-only, preview-first operation for old `completed` and `failed` courier, webhook, and verification rows. The repository enforces a cutoff at least 24 hours old and a global batch no larger than 500, re-locks rows with `FOR UPDATE SKIP LOCKED`, writes or exactly validates secret-free archive evidence before source deletion in one transaction, and never copies payloads, event bodies, encrypted verification data, provider references, contact/OTP material, endpoint material, or credentials. The application runtime role has no archive-table or source-delete access; replay and audit evidence are preserved. No unattended scheduler or archive-to-source rehydration is implemented.
 51 | 45. `@ozzyl/observability` owns the vendor-neutral metric descriptor/recorder boundary. Every metric attribute is declared through a bounded finite value set; unknown attributes plus identifier-, hash-, key-, URL-, payload-, body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style keys are rejected. API metrics use only normalized method, canonical route/template, and status class. Worker metrics use only finite worker type, operation, and outcome; claim-failure metrics use worker type only. Metric validation, serialization, clock, or sink failure cannot change request or worker behavior. The current sink emits JSON points without network I/O; OpenTelemetry exporters/collector, traces, dashboards, alerts, backend, and retention remain separate production work.
 52 | 46. Durable courier, webhook, and verification repositories are measured only through finite repository type, operation, and success/empty/error outcomes. Provider calls use broad finite categories (`courier_api`, `courier_browser`, `webhook_http`, `verification_delivery`) and success/retryable/permanent outcomes, never vendor/account/destination/error identifiers. Every durable runner periodically queries one aggregate snapshot for queued/retry-scheduled/claimed/processing/failed depth and oldest currently ready age; the cadence defaults to 30 seconds and is independently configurable. Snapshot and telemetry failures are logged but never block polling, lease ownership, provider execution, or state transitions. Broader API/domain repository metrics, traces, exporters, dashboards, alerts, backend, and retention remain production work.
 53 |
 54 | ## Source SaaS conflict resolutions
 55 |
 56 | | Conflict                                                                 | Decision                                                                                   |
 57 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 58 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 59 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 60 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 61 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 62 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 63 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 64 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 65 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 66 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 67 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 68 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 69 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 70 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 71 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 72 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 73 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 74 |
 75 | ## Approved reuse scope
 76 |
 77 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 78 | - Bangladesh phone normalization after tests
 79 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 80 | - WooCommerce settings/order hook/admin display skeleton
 81 | - API-key hash/display-prefix and usage-event concepts
 82 |
 83 | No product source code was copied during Phase 0.
 84 |
 85 | ## Pending decisions
 86 |
 87 | These require provider selection, provisioning, or separate ADRs before production implementation:
 88 |
 89 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 90 | - Specific deployment platform, account, and primary region
 91 | - Specific managed PostgreSQL provider and service tier
 92 | - Specific managed secret store and KMS/vault provider
 93 | - Specific observability backend and retention policy
 94 | - Redis-compatible cache provider when distributed coordination is required
 95 | - Dedicated broker only if measured scale requires superseding ADR 0008
 96 | - Worker scheduler/runtime implementation on the selected deployment platform
 97 | - OTP provider
 98 |
 99 | ## External requirements
100 |
101 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
102 |
103 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
104 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, .ai-bridge/pro-context.md, README.md, config/environment.example, docker-compose.yml, docs/README.md, docs/operations/deployment.md, docs/operations/operations-observability.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/observability/src/metrics.test.ts, packages/observability/src/metrics.ts, tracker.yml, workers/courier-session-worker/src/index.test.ts, workers/courier-session-worker/src/index.ts, workers/courier-sync-worker/src/index.test.ts, workers/courier-sync-worker/src/index.ts, workers/courier-sync-worker/src/postgres.test.ts, workers/courier-sync-worker/src/postgres.ts, workers/courier-sync-worker/src/runner.ts, workers/event-worker/src/index.test.ts, workers/event-worker/src/index.ts, workers/event-worker/src/postgres.test.ts, workers/event-worker/src/postgres.ts, workers/event-worker/src/runner.ts, workers/verification-worker/src/index.test.ts, workers/verification-worker/src/index.ts, workers/verification-worker/src/postgres.test.ts, workers/verification-worker/src/postgres.ts, workers/verification-worker/src/runner.ts
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, docs/README.md, eslint.config.js, package.json, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, config/environment.example, docker-compose.yml, docs/operations/deployment.md, docs/operations/operations-observability.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/observability/src/metrics.test.ts, packages/observability/src/metrics.ts, tracker.yml, workers/courier-session-worker/src/index.test.ts, workers/courier-session-worker/src/index.ts, workers/courier-sync-worker/src/index.test.ts, workers/courier-sync-worker/src/index.ts, workers/courier-sync-worker/src/postgres.test.ts, workers/courier-sync-worker/src/postgres.ts, workers/courier-sync-worker/src/runner.ts, workers/event-worker/src/index.test.ts, workers/event-worker/src/index.ts, workers/event-worker/src/postgres.test.ts, workers/event-worker/src/postgres.ts, workers/event-worker/src/runner.ts, workers/verification-worker/src/index.test.ts, workers/verification-worker/src/index.ts, workers/verification-worker/src/postgres.test.ts, workers/verification-worker/src/postgres.ts, workers/verification-worker/src/runner.ts

## File Contents

### AGENTS.md

Bytes: 4786
SHA-256: 8e8ba548ec61f8ab616df8a9cb21890a3b1ef05d4fd865213e02199cfcc8b247
Lines: 1-93 of 93

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
58 | - `packages/observability`: structured logging, safe redaction, and vendor-neutral telemetry/export boundaries.
59 | - `apps/api`: public and internal HTTP interfaces.
60 | - `apps/dashboard`: merchant UI.
61 | - `apps/admin`: internal operations UI.
62 | - `workers/*`: asynchronous jobs, provider automation, event delivery.
63 | - `integrations/*`: WooCommerce, Shopify, custom JS, and native clients.
64 |
65 | ## Migration rules
66 |
67 | - Migrations are append-only after application.
68 | - Every migration must have forward verification and rollback notes.
69 | - Runtime schema and migration schema must be reviewed together.
70 | - Tenant-scoped uniqueness must include the correct organization/store boundary.
71 | - Usage/quota changes must be atomic under concurrency.
72 |
73 | ## Security review checklist
74 |
75 | - No secret appears in logs, errors, screenshots, metadata, cookies, or analytics.
76 | - Passwords use Argon2id or an approved managed identity provider.
77 | - API keys use `ozg_test_` or `ozg_live_`, are displayed once, and stored as hashes only.
78 | - User login sessions are independent from API keys.
79 | - Courier credentials and sessions use versioned envelope encryption.
80 | - Webhooks are signed, timestamped, replay-protected, and retried.
81 | - Optional URLs are protected against SSRF.
82 | - Tenant scope cannot be omitted by callers.
83 |
84 | ## Definition of done
85 |
86 | - Acceptance criteria pass.
87 | - Tests cover important failures and isolation boundaries.
88 | - No schema, API contract, or scoring duplication was introduced.
89 | - Sensitive data is redacted.
90 | - Documentation, `tracker.yml`, and implementation status are updated.
91 | - `.ai-bridge/pro-context.md` is refreshed when the continuation context materially changes.
92 | - Migration and rollback effects are understood.
93 |
```

### docs/README.md

Bytes: 3317
SHA-256: a9772108fac89e79a1d0dd84ade247046f30aadc3f66c88ba6ca4940a0e2868a
Lines: 1-56 of 56

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The vendor-neutral application-metrics milestone is merged on `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`; its feature CI run `30327450803`, job `90175680964`, passed thirteen migrations, 20 typechecks, 31 Turbo tasks with 161 assertions, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. The current repository/provider/queue metrics source branch adds durable transition timing, broad provider-call outcomes, and aggregate queue depth/oldest-ready-age without identifiers, tenant scope, contact data, credentials, URLs, vendor names, payloads, responses, or arbitrary error labels. PostgreSQL-integrated source-branch CI evidence is pending.
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
20 | - [Durable work replay ledger](database/durable-work-replay-ledger.md)
21 | - [Durable work retention and archive](database/durable-work-retention.md)
22 | - [Courier intelligence](courier/courier-intelligence.md)
23 | - [Canonical risk engine](risk-engine/risk-engine.md)
24 | - [Integrations](integrations/integrations.md)
25 |
26 | ## Security, quality, and operations
27 |
28 | - [Security and privacy](security/security-privacy.md)
29 | - [Testing strategy](testing/testing-strategy.md)
30 | - [Durable work dead-letter testing](testing/durable-work-dead-letter-testing.md)
31 | - [Operations and observability](operations/operations-observability.md)
32 | - [Durable work dead-letter runbook](operations/durable-work-dead-letter-runbook.md)
33 | - [Durable work retention runbook](operations/durable-work-retention-runbook.md)
34 | - [Browser dead-letter operations](operations/browser-dead-letter-operations.md)
35 | - [Development environment](operations/development-environment.md)
36 | - [Deployment](operations/deployment.md)
37 |
38 | ## Delivery and continuation
39 |
40 | - [Implementation roadmap](roadmap/implementation-roadmap.md)
41 | - [Initial backlog](roadmap/initial-backlog.md)
42 | - [Risk register](roadmap/risk-register.md)
43 | - [Architecture decision records](adr/README.md)
44 | - [Current plan](../.ai-bridge/current-plan.md)
45 | - [Implementation status](../.ai-bridge/implementation-status.md)
46 | - [Decision log](../.ai-bridge/decisions.md)
47 | - [Full continuation context](../.ai-bridge/pro-context.md)
48 |
49 | ## Documentation rules
50 |
51 | - Change code and its contract documentation together.
52 | - Add a new ADR when changing a system boundary, infrastructure choice, data model strategy, or security model.
53 | - Never remove historical ADRs or edit already-applied migrations to make a new change appear older.
54 | - Update `../tracker.yml` and `../.ai-bridge/implementation-status.md` after every material milestone.
55 | - Keep remaining risks, external dependencies, rollback considerations, and verification evidence explicit.
56 |
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

Bytes: 2111
SHA-256: 89aa90374bd81ec2c01e7b8202cdfcf5fbdc84558b988c241dc3843206b2cb44
Lines: 1-56 of 56

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
14 |     "node": ">=20.19.0",
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
34 |     "db:dead-letters": "tsx packages/database/src/durable-work-operations-cli.ts list",
35 |     "db:replay-dead-letter": "tsx packages/database/src/durable-work-operations-cli.ts replay",
36 |     "db:retention-preview": "tsx packages/database/src/durable-work-retention-cli.ts preview",
37 |     "db:retention-archive": "tsx packages/database/src/durable-work-retention-cli.ts archive",
38 |     "check:architecture": "node scripts/check-architecture.mjs",
39 |     "verify": "npm run format:check && npm run lint && npm run db:check && npm run check:architecture && npm run typecheck && npm run test && npm run build"
40 |   },
41 |   "devDependencies": {
42 |     "@eslint/js": "^10.0.1",
43 |     "@types/node": "^24.0.0",
44 |     "@vitest/coverage-v8": "^4.0.18",
45 |     "drizzle-kit": "^0.31.4",
46 |     "eslint": "^10.8.0",
47 |     "prettier": "^3.6.2",
48 |     "tsup": "^8.5.0",
49 |     "tsx": "^4.20.6",
50 |     "turbo": "^2.8.13",
51 |     "typescript": "^5.8.3",
52 |     "typescript-eslint": "^8.65.0",
53 |     "vitest": "^4.0.18"
54 |   }
55 | }
56 |
```

### README.md

Bytes: 7989
SHA-256: 5bfbac4362617eea72c8d2fa67b0191153cbf8b56e9eff504f17baf656bd306e
Lines: 1-151 of 151

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
 27 | - PostgreSQL schema, thirteen append-only migrations, committed SHA-256 manifest, and non-null history checksums
 28 | - Argon2id user-password utilities and opaque user sessions
 29 | - Hash-only `ozg_test_` / `ozg_live_` API-key lifecycle utilities
 30 | - Organizations, stores, memberships, plans, usage events, audit events, and tenant scope
 31 | - Canonical `/v1/risk-assessments`, assessment read, outcome feedback, courier refresh, and OTP routes
 32 | - Deterministic explainable risk engine with explicit unknown/degraded handling
 33 | - Steadfast adapter, Playwright session driver, encrypted session storage, and runnable courier workers
 34 | - Transactional encrypted OTP delivery queue, tenant-scoped verification, and lease-owned private verification worker
 35 | - Provider-neutral OTP adapter boundary with hashing, expiry, attempt/rate limits, payload validation, and no synchronous provider I/O
 36 | - Durable signed webhook outbox/worker with retries, renewable leases, encrypted secrets, and DNS-aware SSRF protection
 37 | - Owner-checked lease heartbeats for courier, webhook, and verification work; renewal loss aborts active provider I/O before stale final-state writes
 38 | - Tenant-scoped, owner/admin-authorized dead-letter inspection and idempotent controlled replay for courier, webhook, and verification work, with immutable replay/audit evidence
 39 | - Maintenance-only preview-first archival of old terminal durable work into secret-free evidence before atomic source deletion; runtime services cannot access the archive table or delete queue rows
 40 | - Merchant dashboard and platform operations admin applications
 41 | - WooCommerce plugin, Shopify adapter, custom JavaScript/server adapter, and native multi-store adapter
 42 | - Docker, Docker Compose, migration integrity verification, clean logical restore rehearsal, and least-privilege runtime-role verification in CI
 43 | - Authoritative organization/store revalidation across API keys, feature assembly, writes, dashboards, and secret-free webhook/verification administration
 44 | - Provider-neutral managed envelope v2 with per-record data keys, authenticated wrapped-key metadata, structured safe failures, legacy dual-read, and rotation/re-encryption primitives
 45 | - Native multi-store post-persist shadow integration with authoritative source-order revalidation, explicit store opt-in, immutable success/failure attempt evidence, tenant-scoped pilot reporting, and legacy-authoritative behavior
 46 | - Authenticated owner/admin merchant dead-letter page with secret-free inspection and CSRF-protected idempotent replay through the existing PostgreSQL operations repository
 47 | - Canonical structured logging/redaction package used by the API and all four private workers; telemetry sink failures cannot break request or worker execution
 48 | - API-wide safe request correlation with opaque request IDs, bounded route templates, status classes, latency, and redacted unhandled-error records
 49 | - Vendor-neutral JSON metric points for API requests, private-worker operations, durable repository transitions, provider calls, queue depth/age, and claim failures, with finite categorical labels and telemetry-failure isolation
 50 |
 51 | The following require external accounts or production decisions before live use:
 52 |
 53 | - Authorized Steadfast merchant/test credentials and provider-terms review
 54 | - A selected KMS/vault adapter, component service identities, access auditing, runtime wiring, and an audited background rewrite before replacing local v1 encryption in production
 55 | - OTP provider selection and credentials
 56 | - Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
 57 | - Production queue/cache providers plus observability exporters/collector, traces, managed backend, dashboards, alerts, and retention
 58 | - A separately provisioned retention-maintenance database identity, approved retention windows/holds, monitoring, and backup/PITR recovery before any scheduled archival
 59 | - Production source-platform hook deployment, explicit pilot-store selection, and outcome calibration before any enforcement or broad automatic blocking
 60 |
 61 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
 62 |
 63 | ## Repository structure
 64 |
 65 | ```text
 66 | apps/
 67 |   api/             Versioned API and PostgreSQL repositories
 68 |   dashboard/       Merchant operations dashboard
 69 |   admin/           Platform operations dashboard
 70 | workers/
 71 |   courier-session-worker/
 72 |   courier-sync-worker/
 73 |   verification-worker/
 74 |   event-worker/
 75 | packages/
 76 |   shared-types/
 77 |   risk-engine/
 78 |   courier-adapters/
 79 |   database/
 80 |   authentication/
 81 |   billing/
 82 |   verification/
 83 |   sdk/
 84 |   observability/
 85 | integrations/
 86 |   woocommerce/
 87 |   shopify/
 88 |   custom-js/
 89 |   multi-store-saas/
 90 | docs/
 91 | .ai-bridge/
 92 | ```
 93 |
 94 | ## Core rules
 95 |
 96 | 1. There is exactly one canonical risk engine.
 97 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
 98 | 3. Courier providers are isolated behind adapters and asynchronous workers.
 99 | 4. Merchant data is always organization/store scoped.
100 | 5. Unknown customers are not automatically safe.
101 | 6. Provider failure does not automatically approve or block a customer.
102 | 7. Every assessment returns explainable signals and confidence.
103 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
104 | 9. Applied migrations are immutable; changes require a new migration.
105 | 10. Every integration consumes the same canonical API response.
106 |
107 | ## Local setup
108 |
109 | Prerequisites: Node.js 20.19+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
110 |
111 | ```bash
112 | npm install
113 | npm run db:check
114 | npm run db:migrate
115 | npm run db:integrity
116 | # After creating a separate non-owner PostgreSQL login outside the app:
117 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
118 | npm run bootstrap -w @ozzyl/api
119 | npm run dev:api
120 | ```
121 |
122 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
123 |
124 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
125 |
126 | Dead-letter operations are documented in the [durable work runbook](docs/operations/durable-work-dead-letter-runbook.md). They require a trusted environment, `DATABASE_URL`, an active owner/admin user ID, and exact organization/store scope.
127 |
128 | Merchant dashboard:
129 |
130 | ```bash
131 | npm run dev:dashboard
132 | ```
133 |
134 | Platform admin:
135 |
136 | ```bash
137 | npm run dev -w @ozzyl/admin
138 | ```
139 |
140 | Private workers:
141 |
142 | ```bash
143 | npm run start -w @ozzyl/courier-session-worker
144 | npm run start -w @ozzyl/courier-sync-worker
145 | npm run start -w @ozzyl/event-worker
146 | # Requires a reviewed provider module/account in addition to the standard secrets:
147 | npm run start -w @ozzyl/verification-worker
148 | ```
149 |
150 | ## Docker Compose
151 |
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

### .ai-bridge/current-plan.md

Bytes: 26754
SHA-256: 28ecd73f28fb54d203e7cdebb02cc7dd7d02cc7647e691eb1f4d37f61dedeae8
Lines: 1-226 of 226

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and nineteen production-hardening slices are complete:
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
 19 | 11. selected-source post-persist shadow integration with authoritative source-order reload, explicit store opt-in, immutable sampled-attempt evidence, and tenant-scoped pilot reporting;
 20 | 12. tenant-scoped durable-work dead-letter inspection and explicit idempotent replay with lease reset, structural failure guards, immutable evidence, and audit records;
 21 | 13. authenticated merchant browser dead-letter operations with exact owner/admin store scope, secret-free listing, CSRF-protected replay, and synchronous stable replay keys;
 22 | 14. a canonical vendor-neutral structured logging/redaction package integrated into all four private workers, with bounded serialization and telemetry-failure isolation;
 23 | 15. API-wide safe request correlation and structured lifecycle logging with opaque request IDs, bounded route templates, response status/latency, redacted unhandled errors, and telemetry-failure isolation;
 24 | 16. owner-checked renewable leases for courier, webhook, and verification workers, with non-overlapping heartbeats, abort-on-renewal-loss provider I/O, and heartbeat drain before final queue transitions;
 25 | 17. maintenance-only preview-first retention for old terminal durable work, with secret-free archive evidence persisted before atomic source deletion, bounded batches, runtime-role denial, and preserved replay/audit evidence;
 26 | 18. vendor-neutral finite-cardinality application metrics for API requests, private-worker operations/duration, and durable claim failures, with prohibited identifier/secret/contact/URL/payload labels and sink-failure isolation;
 27 | 19. finite-cardinality durable repository and provider-call timing plus aggregate queue depth/oldest-ready-age gauges for courier, webhook, and verification workers, with configurable cadence and telemetry-only snapshot failure behavior.
 28 |
 29 | Concrete provider selection and provisioning remain external production work.
 30 |
 31 | ## Completed
 32 |
 33 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 34 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 35 | - [x] Canonical shared API/error/event contracts
 36 | - [x] PostgreSQL/Drizzle schema and thirteen append-only migrations
 37 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 38 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 39 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 40 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 41 | - [x] Courier adapter contract and Steadfast normalized adapter
 42 | - [x] Playwright Steadfast session driver with structured errors
 43 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 44 | - [x] Runnable PostgreSQL courier session and observation workers
 45 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 46 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 47 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 48 | - [x] API OTP send returns queued work without provider network I/O
 49 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 50 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 51 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 52 | - [x] Explicit-role platform admin with live global operations data
 53 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 54 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 55 | - [x] Architecture dependency-boundary CI guard
 56 | - [x] Provider-neutral production deployment topology ADR
 57 | - [x] Managed PostgreSQL production baseline ADR
 58 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 59 | - [x] Managed secrets and KMS envelope-encryption ADR
 60 | - [x] Vendor-neutral OpenTelemetry observability ADR
 61 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 62 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 63 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 64 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 65 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 66 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 67 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 68 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 69 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 70 | - [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
 71 | - [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
 72 | - [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
 73 | - [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
 74 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 75 | - [x] Concurrent usage reservations cannot exceed the plan limit
 76 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 77 | - [x] Concurrent outcome writes resolve as one insert and one replay
 78 | - [x] Operation idempotency records remain isolated by organization and store
 79 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 80 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 81 | - [x] Expired or previous courier owners cannot complete or fail jobs
 82 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 83 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 84 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 85 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 86 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 87 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 88 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 89 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 90 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 91 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 92 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 93 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 94 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 95 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 96 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 97 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 98 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 99 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
100 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
101 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
102 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
103 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
104 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
105 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
106 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
107 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
108 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
109 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
110 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
111 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
112 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
113 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
114 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
115 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
116 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
117 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
118 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
119 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
120 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
121 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
122 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
123 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
124 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
125 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
126 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
127 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
128 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
129 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
130 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
131 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
132 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
133 |
134 | ## Verified baseline
135 |
136 | - Formatting check: passed
137 | - ESLint with zero warnings: passed
138 | - Thirteen migration files ordered/non-empty/non-destructive: passed locally; previous merged baseline passed remotely; current source-branch CI is pending
139 | - First migration apply and immediate migration replay: previous merged baseline passed remotely
140 | - Architecture import boundaries: passed locally
141 | - Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
142 | - Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
143 | - Repository assertion inventory: 168 source assertions; previous merged remote baseline is 161; current PostgreSQL-integrated source-branch CI is pending
144 | - Metrics coverage: eleven shared observability assertions, API metrics, four worker/provider integrations, and three PostgreSQL aggregate queue snapshot tests are present; remote execution is pending
145 | - Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
146 | - WooCommerce PHP syntax: previous merged baseline passed remotely; current source-branch validation is pending
147 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
148 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
149 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
150 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
151 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
152 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
153 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
154 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
155 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
156 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
157 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
158 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
159 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
160 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
161 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
162 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
163 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
164 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
165 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
166 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
167 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
168 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
169 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
170 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
171 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
172 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
173 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
174 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
175 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
176 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
177 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
178 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
179 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
180 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
181 | - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
182 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
183 | - Canonical documentation links before this slice: zero known broken internal links
184 | - `tracker.yml` YAML structure remains valid
185 | - Prohibited source-pattern search: no matches
186 |
187 | The repository-local continuation exporter was refreshed after repository/provider/queue metrics documentation and tracker updates were finalized.
188 |
189 | ## Next production milestone
190 |
191 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
192 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
193 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
194 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
195 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
196 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
197 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
198 |
199 | ## External blockers
200 |
201 | - Authorized Steadfast merchant/test credentials
202 | - Steadfast provider-terms and merchant-authorization review
203 | - Deployment platform, account, primary region, and budget
204 | - Managed PostgreSQL provider and service tier
205 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
206 | - Managed secret store and KMS/vault provider
207 | - OpenTelemetry exporter/collector, distributed tracing, broader API/domain repository metrics, managed observability backend, dashboards, alerts, and retention policy
208 | - OTP provider account and credentials
209 | - Production account recovery/MFA or managed identity-provider decision
210 | - Repository visibility correction from currently reported public to expected private
211 | - Pilot outcome data for false-positive/false-negative calibration
212 |
213 | ## Non-negotiable continuation rules
214 |
215 | - Do not add a second risk engine.
216 | - Do not call providers from the risk engine or synchronous checkout path.
217 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
218 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
219 | - Do not use API keys as dashboard user sessions.
220 | - Require organization/store scope in all merchant repositories, events, and jobs.
221 | - Add new migrations; never edit applied migrations.
222 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
223 | - Keep Redis/cache state non-authoritative.
224 | - Keep unknown/provider failure explicit and policy-controlled.
225 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
226 |
```

### .ai-bridge/decisions.md

Bytes: 17831
SHA-256: b6bf638033ff42aaca600750b2559a1790ef6b9dd1e41350d66b9365fb0b9683
Lines: 1-104 of 104

```markdown
  1 | # Ozzyl Guard — Active Decisions
  2 |
  3 | Updated: 2026-07-28
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
 45 | 39. Terminal courier refresh, webhook delivery, and verification delivery work remains authoritative in its existing PostgreSQL row. An active owner/admin may inspect only secret-free failed work in an exact active organization/store and explicitly replay only relationally valid, non-structural, non-expired work. Replay is transactional and idempotent, clears old leases and failure state, appends immutable insert-only replay evidence plus an audit event, and performs no provider or webhook network I/O; automatic replay is not implemented.
 46 | 40. The merchant failed-work browser surface uses only opaque user sessions, exact session-visible organization/store scope, active owner/admin authorization, and repository-level relational reauthorization. Replay additionally requires CSRF proof and a stable per-work-item idempotency key assigned synchronously before network I/O and retained after request failure. Browser contracts are secret-free and delegate all state changes to the existing transactional PostgreSQL durable-work repository.
 47 | 41. `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. It owns recursive sensitive-field redaction, bounded safe serialization, fixed service/environment/event metadata, and telemetry-failure isolation. Private workers use this helper instead of ad hoc JSON logging; error messages, stacks, payloads, bodies, URLs, credentials, phone values, OTPs, cookies, keys, and tokens are never exported by the helper. Metrics, traces, exporters, and the managed backend remain separate follow-up work under ADR 0010.
 48 | 42. Every API request receives a server-controlled opaque request ID unless the caller supplies a bounded opaque `req_`, hexadecimal trace, or UUID value. The response echoes only that accepted/generated ID. Request lifecycle logs use an allowlisted static route or a bounded route template, never the raw URL, query string, or dynamic assessment identifier. They contain method, status/status class, and duration; unhandled errors export only safe name/code through the shared redaction boundary. Logging failure cannot change the HTTP response.
 49 | 43. Courier, webhook, and verification runners use one non-overlapping heartbeat per active claimed job. Renewal is allowed only for the current owner, an active claimed/processing state, and an unexpired lease; verification renewal additionally revalidates the queued, unexpired tenant-scoped session. The default renewal interval is one-third of the lease and must not exceed half of it. Renewal failure aborts active provider/network I/O with the original lease error, and every completion, retry, or terminal failure drains the heartbeat before changing queue state so renewal and final transitions cannot race.
 50 | 44. Durable retention is a maintenance-only, preview-first operation for old `completed` and `failed` courier, webhook, and verification rows. The repository enforces a cutoff at least 24 hours old and a global batch no larger than 500, re-locks rows with `FOR UPDATE SKIP LOCKED`, writes or exactly validates secret-free archive evidence before source deletion in one transaction, and never copies payloads, event bodies, encrypted verification data, provider references, contact/OTP material, endpoint material, or credentials. The application runtime role has no archive-table or source-delete access; replay and audit evidence are preserved. No unattended scheduler or archive-to-source rehydration is implemented.
 51 | 45. `@ozzyl/observability` owns the vendor-neutral metric descriptor/recorder boundary. Every metric attribute is declared through a bounded finite value set; unknown attributes plus identifier-, hash-, key-, URL-, payload-, body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style keys are rejected. API metrics use only normalized method, canonical route/template, and status class. Worker metrics use only finite worker type, operation, and outcome; claim-failure metrics use worker type only. Metric validation, serialization, clock, or sink failure cannot change request or worker behavior. The current sink emits JSON points without network I/O; OpenTelemetry exporters/collector, traces, dashboards, alerts, backend, and retention remain separate production work.
 52 | 46. Durable courier, webhook, and verification repositories are measured only through finite repository type, operation, and success/empty/error outcomes. Provider calls use broad finite categories (`courier_api`, `courier_browser`, `webhook_http`, `verification_delivery`) and success/retryable/permanent outcomes, never vendor/account/destination/error identifiers. Every durable runner periodically queries one aggregate snapshot for queued/retry-scheduled/claimed/processing/failed depth and oldest currently ready age; the cadence defaults to 30 seconds and is independently configurable. Snapshot and telemetry failures are logged but never block polling, lease ownership, provider execution, or state transitions. Broader API/domain repository metrics, traces, exporters, dashboards, alerts, backend, and retention remain production work.
 53 |
 54 | ## Source SaaS conflict resolutions
 55 |
 56 | | Conflict                                                                 | Decision                                                                                   |
 57 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 58 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 59 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 60 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 61 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 62 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 63 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 64 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 65 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 66 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 67 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 68 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 69 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 70 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 71 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 72 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 73 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 74 |
 75 | ## Approved reuse scope
 76 |
 77 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 78 | - Bangladesh phone normalization after tests
 79 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 80 | - WooCommerce settings/order hook/admin display skeleton
 81 | - API-key hash/display-prefix and usage-event concepts
 82 |
 83 | No product source code was copied during Phase 0.
 84 |
 85 | ## Pending decisions
 86 |
 87 | These require provider selection, provisioning, or separate ADRs before production implementation:
 88 |
 89 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 90 | - Specific deployment platform, account, and primary region
 91 | - Specific managed PostgreSQL provider and service tier
 92 | - Specific managed secret store and KMS/vault provider
 93 | - Specific observability backend and retention policy
 94 | - Redis-compatible cache provider when distributed coordination is required
 95 | - Dedicated broker only if measured scale requires superseding ADR 0008
 96 | - Worker scheduler/runtime implementation on the selected deployment platform
 97 | - OTP provider
 98 |
 99 | ## External requirements
100 |
101 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
102 |
103 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
104 |
```

### .ai-bridge/implementation-status.md

Bytes: 27717
SHA-256: fa970abaff0f15cbd8a6ad85856826e555cde4af184f2b5ae8593263ad5e7f2e
Lines: 1-187 of 187

```markdown
  1 | # Ozzyl Guard — Implementation Status
  2 |
  3 | Updated: 2026-07-28
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
 16 | | Documentation and ADRs     | done     | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and twelve accepted ADRs                            |
 17 | | Continuation documentation | baseline | Tracker, plan, status, decisions, and generated `pro-context.md` are being refreshed for the vendor-neutral metrics source branch                     |
 18 | | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
 19 | | Monorepo/tooling           | done     | 20 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
 20 | | CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
 21 | | Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
 22 | | Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
 23 | | Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |
 24 |
 25 | ## Product implementation
 26 |
 27 | | Area                             | Status   | Notes                                                                                                                                                                                                             |
 28 | | -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                                                   |
 30 | | Database/migrations              | done     | Thirteen append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                                                 |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                                                |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                                                   |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                                             |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                                     |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                                     |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                                     |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                                              |
 38 | | Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                                         |
 39 | | Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                                                 |
 40 | | Durable work architecture        | done     | Claims, renewable leases, dead-letter replay, plus maintenance-only bounded terminal archival with evidence-before-delete and runtime-role denial                                                                 |
 41 | | Durable work operations          | done     | Failed work supports scoped replay; old completed/failed rows support preview-first maintenance archival while immutable replay/audit evidence remains                                                            |
 42 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                                            |
 43 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                                                   |
 44 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                                          |
 45 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                                          |
 46 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                                       |
 47 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                                                    |
 48 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                                          |
 49 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                                              |
 50 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                                               |
 51 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                                     |
 52 | | OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                                                   |
 53 | | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                                                    |
 54 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                                         |
 55 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                                        |
 56 | | PostgreSQL runtime role          | done     | Explicit DML grants, no migration history/DELETE/DDL/archive access; separate retention-maintenance identity and managed provisioning remain                                                                      |
 57 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                                            |
 58 | | Observability                    | baseline | Redacted logs plus finite API/worker/durable-repository/provider metrics and aggregate queue gauges are implemented; traces, exporters, broader domain metrics, backend, dashboards, alerts, and retention remain |
 59 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                                         |
 60 |
 61 | ## Migrations
 62 |
 63 | 1. `0001_foundation.sql`
 64 | 2. `0002_courier.sql`
 65 | 3. `0003_risk.sql`
 66 | 4. `0004_verification_events.sql`
 67 | 5. `0005_durable_operations.sql`
 68 | 6. `0006_browser_access.sql`
 69 | 7. `0007_worker_leases.sql`
 70 | 8. `0008_webhook_delivery_leases.sql`
 71 | 9. `0009_verification_delivery_queue.sql`
 72 | 10. `0010_native_shadow_comparisons.sql`
 73 | 11. `0011_native_shadow_pilot.sql`
 74 | 12. `0012_durable_work_replays.sql`
 75 | 13. `0013_durable_work_archives.sql`
 76 |
 77 | Applied migrations must remain immutable.
 78 |
 79 | ## Verification evidence
 80 |
 81 | - `npm run format:check`: passed
 82 | - `npm run lint`: passed with zero warnings
 83 | - `npm run db:check`: thirteen migrations and committed SHA-256 manifest validated locally; previous merged baseline passed remotely; current source-branch CI is pending
 84 | - initial migration apply: previous merged baseline passed with non-null history checksums
 85 | - immediate migration replay: previous merged baseline passed as a clean no-op
 86 | - `npm run db:integrity`: previous merged baseline passed complete contiguous history and checksums
 87 | - `npm run db:restore-rehearsal`: previous merged baseline passed clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay
 88 | - `npm run check:architecture`: passed locally
 89 | - `npm run typecheck`: 20/20 workspaces passed locally; current source-branch CI is pending
 90 | - `npm run test`: 31/31 Turbo tasks passed locally; source inventory is 168 assertions and previous merged remote baseline is 161
 91 | - `npm run build`: 20/20 workspace builds passed locally; current source-branch CI is pending
 92 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 93 | - Observability tests prove fixed log metadata/redaction plus metric descriptor validation, finite categorical attributes, high-cardinality and secret-like key rejection, exporter-neutral JSON points, worker helper output, and sink-failure isolation
 94 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, bounded request count/duration metrics, safe unhandled-error serialization, and request availability during log/metric sink failure
 95 | - Courier-session, courier-sync, event, and verification tests prove bounded worker/provider count/duration metrics omit account/job/event/endpoint/phone/OTP/credential/URL/vendor/error-text values; shared tests cover repository outcomes, claim failures, aggregate gauges, and telemetry isolation
 96 | - Courier, webhook, and verification PostgreSQL suites include aggregate queue-depth and oldest-ready-age snapshots without row or tenant identifiers
 97 | - Lease-heartbeat tests prove non-overlapping renewal, owner/expiry enforcement, abort-on-renewal-loss propagation, and heartbeat drain before final courier/webhook/verification transitions
 98 | - Retention tests prove cutoff/status/batch/run-ID validation, terminal-only preview, payload-free evidence, archive-before-delete atomicity, ineligible-row preservation, replay-ledger preservation, idempotent reruns, and runtime archive-access denial
 99 | - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
100 | - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
101 | - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
102 | - Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
103 | - Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
104 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
105 | - Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
106 | - Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
107 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
108 | - Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
109 | - Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
110 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
111 | - Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
112 | - Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
113 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
114 | - Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
115 | - Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
116 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
117 | - Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
118 | - Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
119 | - Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
120 | - Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
121 | - Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
122 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
123 | - Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
124 | - Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
125 | - Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
126 | - Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
127 | - Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
128 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
129 | - Five real-PostgreSQL durable-work tests cover exact-store owner/admin listing, negative member authorization, concurrent duplicate replay, one immutable ledger/audit outcome, courier lease reset, scoped unexpired verification reopening, structural/expired rejection, cross-tenant isolation, and idempotency conflicts
130 | - Seven runtime-role tests now include insert-only replay-ledger privileges alongside migration-history, DELETE, DDL, ownership, and elevated-role denials
131 | - Durable-work dead-letter final run `29644234591`, job `88079650134`: twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
132 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
133 | - Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping
134 | - Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
135 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
136 | - Structured observability final run `30317190971`, job `90145176143`: twelve migrations, 20 typechecks, 31 Turbo test/build dependency tasks with 132 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
137 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
138 | - API request observability final run `30318999952`, job `90150731352`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 136 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
139 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
140 | - Durable worker heartbeat final run `30322016826`, job `90159676583`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 145 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
141 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
142 | - Durable work retention final run `30325144458`, job `90168867190`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 154 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
143 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
144 | - Vendor-neutral metrics final run `30327450803`, job `90175680964`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 161 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
145 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
146 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
147 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
148 | - Previous canonical documentation checks found zero broken internal links
149 | - Prohibited insecure-pattern scan: zero matches
150 |
151 | The repository-local exporter was refreshed after repository/provider/queue metrics documentation and tracker updates were finalized. Current source-branch remote CI is pending.
152 |
153 | ## External blockers and production requirements
154 |
155 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
156 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
157 | - Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
158 | - Managed secret store and KMS/vault provider
159 | - OpenTelemetry exporter/collector, distributed tracing, broader API/domain repository metrics, managed observability backend, retention, dashboards, alerts, and incident channels
160 | - Optional Redis-compatible cache only when distributed coordination is required
161 | - Authorized Steadfast test/merchant account
162 | - Provider-terms and merchant-authorization review
163 | - OTP provider selection/account
164 | - Production account recovery/MFA or managed identity-provider decision
165 | - Pilot merchants and verified outcome data for calibration
166 |
167 | ## Remaining risks
168 |
169 | - Steadfast UI/internal endpoint changes can break automation.
170 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
171 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
172 | - In-process API and browser-session rate limiting is not distributed across replicas.
173 | - Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
174 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
175 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
176 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
177 | - GitHub currently reports public repository visibility although the expected policy is private.
178 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
179 | - Structured logs plus finite-cardinality API, private-worker, durable-repository, provider-call, and aggregate queue metrics are implemented, but broader API/domain repository metrics, traces, exporters/collector, dashboards, alerts, managed backend, and telemetry retention are not yet implemented.
180 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
181 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
182 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
183 |
184 | ## Next milestone
185 |
186 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
187 |
```

### config/environment.example

Bytes: 3252
SHA-256: 2d6c2675ea1dd77143340f175ccdb512287f7b9ab3fa53df7abf9837d9dbc2cb
Lines: 1-89 of 89

```text
 1 | # Ozzyl Guard local/deployment environment template
 2 | # Copy these names into an untracked local environment file. Replace every redacted value.
 3 |
 4 | NODE_ENV=development
 5 | LOG_LEVEL=debug
 6 | API_PORT=3000
 7 | DASHBOARD_PORT=5173
 8 | ADMIN_PORT=5174
 9 | API_PUBLIC_URL=http://localhost:3000
10 | DASHBOARD_PUBLIC_URL=http://localhost:5173
11 | ADMIN_PUBLIC_URL=http://localhost:5174
12 |
13 | # PostgreSQL
14 | DATABASE_URL=postgresql://ozzyl_guard:[REDACTED_SECRET]@localhost:5432/ozzyl_guard
15 | DATABASE_SSL=false
16 | DATABASE_POOL_SIZE=20
17 | # Existing non-privileged LOGIN role; create it outside the app, then run npm run db:runtime-grants after migrations.
18 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime
19 | POSTGRES_PASSWORD=[REDACTED_SECRET]
20 | # Operational restore rehearsal only. Target must be distinct, pre-created, and empty.
21 | RESTORE_DATABASE_URL=postgresql://ozzyl_guard:[REDACTED_SECRET]@localhost:5432/ozzyl_guard_restore
22 | # Full data hashing scans every public table; enable only in CI or an approved isolated window.
23 | RESTORE_REHEARSAL_VERIFY_DATA_HASHES=false
24 |
25 | # Authentication and privacy — generate long random local-only values
26 | SESSION_PEPPER=[REDACTED_SECRET]
27 | SESSION_CSRF_SECRET=[REDACTED_SECRET]
28 | API_KEY_PEPPER=[REDACTED_SECRET]
29 | PHONE_HMAC_KEY=[REDACTED_SECRET]
30 | OTP_HASH_SECRET=[REDACTED_SECRET]
31 |
32 | # Credential/session encryption
33 | # Use a Base64-encoded 32-byte key for the local AES-256-GCM implementation.
34 | CREDENTIAL_ENCRYPTION_PROVIDER=local-development
35 | CREDENTIAL_ENCRYPTION_KEY_VERSION=local-v1
36 | CREDENTIAL_ENCRYPTION_KEY=[REDACTED_SECRET]
37 |
38 | # Initial bootstrap (run once after migrations)
39 | BOOTSTRAP_EMAIL=owner@example.com
40 | BOOTSTRAP_PASSWORD=[REDACTED_SECRET]
41 | BOOTSTRAP_ORGANIZATION_NAME=Ozzyl Guard Organization
42 | BOOTSTRAP_ORGANIZATION_SLUG=ozzyl-guard-organization
43 | BOOTSTRAP_STORE_NAME=Primary Store
44 | BOOTSTRAP_STORE_PLATFORM=custom
45 | BOOTSTRAP_PLATFORM_ROLE=merchant
46 | BOOTSTRAP_KEY_ENVIRONMENT=test
47 |
48 | # Courier workers
49 | COURIER_SESSION_REFRESH_HOURS=6
50 | COURIER_OBSERVATION_TTL_HOURS=12
51 | WORKER_POLL_MS=5000
52 | WORKER_QUEUE_METRICS_MS=30000
53 | WORKER_LEASE_MS=300000
54 | WORKER_LEASE_RENEW_MS=100000
55 | # Set a stable unique identifier per replica in production. Local workers generate one when omitted.
56 | WORKER_ID=courier-sync-local
57 |
58 | # Durable webhook event worker
59 | EVENT_WORKER_ID=event-local
60 | EVENT_WORKER_POLL_MS=5000
61 | EVENT_WORKER_QUEUE_METRICS_MS=30000
62 | EVENT_WORKER_LEASE_MS=60000
63 | EVENT_WORKER_LEASE_RENEW_MS=20000
64 | EVENT_WORKER_MAX_ATTEMPTS=5
65 | WEBHOOK_TIMEOUT_MS=5000
66 | STEADFAST_LIVE_TESTS=false
67 |
68 | # Queue/cache placeholders for later external infrastructure ADRs
69 | QUEUE_URL=[REDACTED_SECRET]
70 | CACHE_URL=[REDACTED_SECRET]
71 |
72 | # Durable verification worker. OTP_PROVIDER_MODULE must export createOtpDeliveryProvider().
73 | # No provider module is selected or bundled by this milestone.
74 | VERIFICATION_WORKER_ID=verification-local
75 | VERIFICATION_WORKER_POLL_MS=5000
76 | VERIFICATION_WORKER_QUEUE_METRICS_MS=30000
77 | VERIFICATION_WORKER_LEASE_MS=60000
78 | VERIFICATION_WORKER_LEASE_RENEW_MS=20000
79 | VERIFICATION_WORKER_MAX_ATTEMPTS=5
80 | OTP_PROVIDER_TIMEOUT_MS=10000
81 | OTP_PROVIDER_MODULE=[REDACTED_PROVIDER_MODULE]
82 | OTP_SENDER_ID=[REDACTED_SECRET]
83 | OTP_PROVIDER_API_KEY=[REDACTED_SECRET]
84 |
85 | # Webhook signing and observability
86 | WEBHOOK_SIGNING_SECRET=[REDACTED_SECRET]
87 | ERROR_TRACKING_DSN=[REDACTED_SECRET]
88 | OTEL_EXPORTER_OTLP_ENDPOINT=[REDACTED_SECRET]
89 |
```

### docker-compose.yml

Bytes: 5990
SHA-256: 88189abf66407e33d5b4c3315ab11f3944e98139a8ae466d07aaa45985ef388e
Lines: 1-156 of 156

```yaml
  1 | services:
  2 |   postgres:
  3 |     image: postgres:16-alpine
  4 |     environment:
  5 |       POSTGRES_USER: ozzyl_guard
  6 |       POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:?POSTGRES_PASSWORD is required}
  7 |       POSTGRES_DB: ozzyl_guard
  8 |     ports:
  9 |       - '5432:5432'
 10 |     volumes:
 11 |       - ozzyl_guard_postgres:/var/lib/postgresql/data
 12 |     healthcheck:
 13 |       test: ['CMD-SHELL', 'pg_isready -U ozzyl_guard -d ozzyl_guard']
 14 |       interval: 5s
 15 |       timeout: 5s
 16 |       retries: 12
 17 |
 18 |   migrate:
 19 |     build:
 20 |       context: .
 21 |       dockerfile: Dockerfile
 22 |       target: runtime
 23 |     command: ['npm', 'run', 'db:migrate']
 24 |     environment:
 25 |       DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
 26 |     depends_on:
 27 |       postgres:
 28 |         condition: service_healthy
 29 |     restart: 'no'
 30 |
 31 |   api:
 32 |     build:
 33 |       context: .
 34 |       dockerfile: Dockerfile
 35 |       target: runtime
 36 |     environment:
 37 |       NODE_ENV: production
 38 |       API_PORT: 3000
 39 |       DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
 40 |       DATABASE_SSL: 'false'
 41 |       API_KEY_PEPPER: ${API_KEY_PEPPER:?API_KEY_PEPPER is required}
 42 |       SESSION_PEPPER: ${SESSION_PEPPER:?SESSION_PEPPER is required}
 43 |       SESSION_CSRF_SECRET: ${SESSION_CSRF_SECRET:?SESSION_CSRF_SECRET is required}
 44 |       PHONE_HMAC_KEY: ${PHONE_HMAC_KEY:?PHONE_HMAC_KEY is required}
 45 |       OTP_HASH_SECRET: ${OTP_HASH_SECRET:?OTP_HASH_SECRET is required}
 46 |       CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
 47 |       CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
 48 |     ports:
 49 |       - '3000:3000'
 50 |     depends_on:
 51 |       migrate:
 52 |         condition: service_completed_successfully
 53 |     healthcheck:
 54 |       test:
 55 |         [
 56 |           'CMD',
 57 |           'node',
 58 |           '-e',
 59 |           "fetch('http://127.0.0.1:3000/health').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))",
 60 |         ]
 61 |       interval: 10s
 62 |       timeout: 5s
 63 |       retries: 10
 64 |     restart: unless-stopped
 65 |
 66 |   courier-session-worker:
 67 |     build:
 68 |       context: .
 69 |       dockerfile: Dockerfile.playwright
 70 |     environment:
 71 |       NODE_ENV: production
 72 |       DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
 73 |       CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
 74 |       CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
 75 |       COURIER_SESSION_REFRESH_HOURS: ${COURIER_SESSION_REFRESH_HOURS:-6}
 76 |     depends_on:
 77 |       migrate:
 78 |         condition: service_completed_successfully
 79 |     restart: unless-stopped
 80 |
 81 |   courier-sync-worker:
 82 |     build:
 83 |       context: .
 84 |       dockerfile: Dockerfile
 85 |       target: runtime
 86 |     command: ['node', 'workers/courier-sync-worker/dist/runner.js']
 87 |     environment:
 88 |       NODE_ENV: production
 89 |       DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
 90 |       CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
 91 |       CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
 92 |       WORKER_ID: ${WORKER_ID:-courier-sync-local}
 93 |       WORKER_POLL_MS: ${WORKER_POLL_MS:-5000}
 94 |       WORKER_QUEUE_METRICS_MS: ${WORKER_QUEUE_METRICS_MS:-30000}
 95 |       WORKER_LEASE_MS: ${WORKER_LEASE_MS:-300000}
 96 |       WORKER_LEASE_RENEW_MS: ${WORKER_LEASE_RENEW_MS:-100000}
 97 |     depends_on:
 98 |       migrate:
 99 |         condition: service_completed_successfully
100 |     restart: unless-stopped
101 |
102 |   verification-worker:
103 |     profiles: ['verification']
104 |     build:
105 |       context: .
106 |       dockerfile: Dockerfile
107 |       target: runtime
108 |     command: ['node', 'workers/verification-worker/dist/runner.js']
109 |     environment:
110 |       NODE_ENV: production
111 |       DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
112 |       CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
113 |       CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
114 |       PHONE_HMAC_KEY: ${PHONE_HMAC_KEY:?PHONE_HMAC_KEY is required}
115 |       OTP_HASH_SECRET: ${OTP_HASH_SECRET:?OTP_HASH_SECRET is required}
116 |       OTP_PROVIDER_MODULE: ${OTP_PROVIDER_MODULE:-}
117 |       OTP_SENDER_ID: ${OTP_SENDER_ID:-}
118 |       OTP_PROVIDER_API_KEY: ${OTP_PROVIDER_API_KEY:-}
119 |       VERIFICATION_WORKER_ID: ${VERIFICATION_WORKER_ID:-verification-local}
120 |       VERIFICATION_WORKER_POLL_MS: ${VERIFICATION_WORKER_POLL_MS:-5000}
121 |       VERIFICATION_WORKER_QUEUE_METRICS_MS: ${VERIFICATION_WORKER_QUEUE_METRICS_MS:-30000}
122 |       VERIFICATION_WORKER_LEASE_MS: ${VERIFICATION_WORKER_LEASE_MS:-60000}
123 |       VERIFICATION_WORKER_LEASE_RENEW_MS: ${VERIFICATION_WORKER_LEASE_RENEW_MS:-20000}
124 |       VERIFICATION_WORKER_MAX_ATTEMPTS: ${VERIFICATION_WORKER_MAX_ATTEMPTS:-5}
125 |       OTP_PROVIDER_TIMEOUT_MS: ${OTP_PROVIDER_TIMEOUT_MS:-10000}
126 |     depends_on:
127 |       migrate:
128 |         condition: service_completed_successfully
129 |     restart: unless-stopped
130 |
131 |   event-worker:
132 |     build:
133 |       context: .
134 |       dockerfile: Dockerfile
135 |       target: runtime
136 |     command: ['node', 'workers/event-worker/dist/runner.js']
137 |     environment:
138 |       NODE_ENV: production
139 |       DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
140 |       CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
141 |       CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
142 |       EVENT_WORKER_ID: ${EVENT_WORKER_ID:-event-local}
143 |       EVENT_WORKER_POLL_MS: ${EVENT_WORKER_POLL_MS:-5000}
144 |       EVENT_WORKER_QUEUE_METRICS_MS: ${EVENT_WORKER_QUEUE_METRICS_MS:-30000}
145 |       EVENT_WORKER_LEASE_MS: ${EVENT_WORKER_LEASE_MS:-60000}
146 |       EVENT_WORKER_LEASE_RENEW_MS: ${EVENT_WORKER_LEASE_RENEW_MS:-20000}
147 |       EVENT_WORKER_MAX_ATTEMPTS: ${EVENT_WORKER_MAX_ATTEMPTS:-5}
148 |       WEBHOOK_TIMEOUT_MS: ${WEBHOOK_TIMEOUT_MS:-5000}
149 |     depends_on:
150 |       migrate:
151 |         condition: service_completed_successfully
152 |     restart: unless-stopped
153 |
154 | volumes:
155 |   ozzyl_guard_postgres:
156 |
```

### docs/operations/deployment.md

Bytes: 14493
SHA-256: cc786a5107e59afc200f6ec5c04bfbc02a2bb77473cd0665d8e20295ea276450
Lines: 1-203 of 203

```markdown
  1 | # Deployment
  2 |
  3 | ## Accepted production baseline
  4 |
  5 | The production topology is defined by:
  6 |
  7 | - [ADR 0006 — Production deployment topology](../adr/0006-production-deployment-topology.md)
  8 | - [ADR 0007 — Managed PostgreSQL production baseline](../adr/0007-managed-postgresql-production-baseline.md)
  9 | - [ADR 0008 — PostgreSQL-first durable work and cache boundary](../adr/0008-postgresql-first-durable-work-and-cache.md)
 10 | - [ADR 0009 — Managed secrets and KMS envelope encryption](../adr/0009-managed-secrets-and-kms-envelope-encryption.md)
 11 | - [ADR 0010 — Vendor-neutral production observability](../adr/0010-vendor-neutral-production-observability.md)
 12 |
 13 | These ADRs select the architecture and minimum operational controls without inventing a hosting, database, cache, KMS, or observability vendor.
 14 |
 15 | ## Implemented deployment foundation
 16 |
 17 | The repository includes:
 18 |
 19 | - `Dockerfile` for API, migration, courier-sync, event, and verification workers
 20 | - `Dockerfile.playwright` for the isolated browser/session worker
 21 | - `docker-compose.yml` for PostgreSQL, migration job, API, session worker, courier-sync worker, event worker, and an opt-in verification profile
 22 | - GitHub Actions CI with PostgreSQL 16
 23 | - API health check
 24 | - graceful API and worker shutdown
 25 | - migration execution separated from API startup
 26 | - migration SHA-256 manifest, apply/replay, and history-integrity verification
 27 | - clean PostgreSQL logical backup/restore rehearsal in CI
 28 | - provider-neutral managed-envelope v2 primitives with per-record data keys, legacy dual-read, rotation detection, and structured safe failures
 29 | - `db:runtime-grants` and CI effective-permission verification for an externally created non-owner runtime role
 30 | - independently runnable `workers/event-worker/dist/runner.js`
 31 | - independently runnable `workers/verification-worker/dist/runner.js` after a reviewed provider module is bundled/configured
 32 |
 33 | Dashboard and admin build to static assets and may be hosted separately from the API.
 34 |
 35 | ## Production service separation
 36 |
 37 | Deploy independently:
 38 |
 39 | - public API
 40 | - merchant dashboard static application
 41 | - platform admin static application
 42 | - migration job
 43 | - courier session worker with Playwright/browser dependencies
 44 | - courier sync worker
 45 | - event/webhook outbox worker
 46 | - verification runner; provider adapter/account selection remains required before enabling delivery
 47 | - managed PostgreSQL
 48 | - optional Redis-compatible cache when distributed coordination is required
 49 | - selected managed secret/KMS and observability services
 50 |
 51 | The Playwright, courier-sync, event, and verification workers must not receive public traffic and must never run inside checkout request handling. Merchant webhook delivery and OTP provider delivery are asynchronous.
 52 |
 53 | ## Courier-sync worker runtime
 54 |
 55 | The courier-sync worker uses `WORKER_LEASE_MS` with `WORKER_LEASE_RENEW_MS`, which defaults to one-third of the lease and must not exceed half of it. `WORKER_QUEUE_METRICS_MS` controls the positive periodic aggregate queue snapshot cadence and defaults to 30000 milliseconds. Each replica requires a stable unique `WORKER_ID`. Renewal loss aborts the active courier request and prevents a stale owner from completing or failing the job.
 56 |
 57 | ## Event-worker runtime
 58 |
 59 | The event worker requires:
 60 |
 61 | - `DATABASE_URL`
 62 | - `CREDENTIAL_ENCRYPTION_KEY` for the local/self-hosted baseline
 63 | - `CREDENTIAL_ENCRYPTION_KEY_VERSION`
 64 | - optional `EVENT_WORKER_ID`
 65 | - optional `EVENT_WORKER_POLL_MS`, default `5000`
 66 | - optional `EVENT_WORKER_LEASE_MS`, default `60000`
 67 | - optional `EVENT_WORKER_LEASE_RENEW_MS`, default one-third of the lease (`20000` for the default lease)
 68 | - optional `EVENT_WORKER_QUEUE_METRICS_MS`, default `30000`
 69 | - optional `EVENT_WORKER_MAX_ATTEMPTS`, default `5`
 70 | - optional `WEBHOOK_TIMEOUT_MS`, default `5000`
 71 |
 72 | All numeric values must be positive integers. `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds, and `EVENT_WORKER_LEASE_RENEW_MS` must not exceed half the lease. Renewal loss aborts the active HTTP request and prevents a stale final-state transition.
 73 |
 74 | Set a stable unique `EVENT_WORKER_ID` for each production replica. When omitted, the process generates a unique runtime ID suitable for local use.
 75 |
 76 | The event worker needs:
 77 |
 78 | - PostgreSQL access to claim and transition `webhook_deliveries`;
 79 | - read access to the matching `webhook_endpoints` and scoped `stores` relationship;
 80 | - decrypt permission for endpoint signing-secret envelopes;
 81 | - DNS resolution and controlled HTTPS egress;
 82 | - no public ingress;
 83 | - no access to raw API keys, OTPs, courier credentials, or unrestricted merchant records.
 84 |
 85 | Production egress policy must deny private, metadata, link-local, and unauthorized networks even though application code validates literal and resolved destination addresses. Use a controlled resolver, egress proxy, firewall policy, or equivalent infrastructure boundary to reduce DNS-rebinding and route-change risk.
 86 |
 87 | ## Verification-worker runtime
 88 |
 89 | The verification worker requires:
 90 |
 91 | - `DATABASE_URL`;
 92 | - local/self-hosted `CREDENTIAL_ENCRYPTION_KEY` and `CREDENTIAL_ENCRYPTION_KEY_VERSION` until managed KMS supersedes them;
 93 | - `PHONE_HMAC_KEY` and `OTP_HASH_SECRET` matching the API deployment;
 94 | - a reviewed, bundled `OTP_PROVIDER_MODULE` exporting `createOtpDeliveryProvider()`;
 95 | - provider-specific secrets such as sender ID/API key supplied only through the approved secret manager;
 96 | - optional worker ID, poll, lease, lease-renewal, max-attempt, and provider-timeout settings.
 97 |
 98 | `VERIFICATION_WORKER_LEASE_MS` must exceed `OTP_PROVIDER_TIMEOUT_MS` by more than five seconds, and `VERIFICATION_WORKER_LEASE_RENEW_MS` must not exceed half the lease. `VERIFICATION_WORKER_QUEUE_METRICS_MS` is a positive aggregate snapshot cadence and defaults to 30000 milliseconds. Renewal loss aborts the active OTP request and prevents stale delivery state. Each replica needs a stable unique worker ID, private ingress, least-privilege database/KMS access, and only the egress required by the selected provider. The Compose service is behind the `verification` profile because no provider is selected or bundled in this milestone.
 99 |
100 | ## Environment stages
101 |
102 | - local
103 | - CI/test
104 | - staging
105 | - production
106 |
107 | Test and live API keys are logically separated. Staging must not use production courier credentials or webhook signing secrets unless explicitly approved and isolated.
108 |
109 | Staging and production require separate:
110 |
111 | - databases and runtime identities;
112 | - secret namespaces and KMS access;
113 | - provider credentials and webhook endpoint secrets;
114 | - dashboard/admin origins and session-cookie settings;
115 | - DNS/egress policies;
116 | - telemetry projects or equivalent access boundaries.
117 |
118 | ## Release sequence
119 |
120 | 1. Build immutable artifacts.
121 | 2. Run migration-file, formatting, lint, and architecture checks.
122 | 3. Apply migrations as a separate release job while the migration identity holds the repository advisory lock.
123 | 4. Run the migration command again to verify replay/no-op behavior.
124 | 5. Run `npm run db:integrity` and fail the release on manifest, history, gap, null-checksum, or checksum mismatch.
125 | 6. As the migration owner, run `DATABASE_RUNTIME_ROLE=<external-runtime-role> npm run db:runtime-grants`; fail if the role is missing, elevated, inherited, owns database objects, the table policy is stale, or effective privileges exceed the reviewed policy.
126 | 7. Provision a separate reviewed maintenance identity for retention operations. It must not be used by API/workers and must have only archive read/insert plus durable-source delete/read privileges required by the runbook.
127 | 8. Restore a release-candidate backup into a separate clean staging/recovery database and verify schema/history/replay; use full data hashes when the dataset and maintenance window permit.
128 | 9. Verify database and service readiness using runtime credentials rather than migration-owner credentials.
129 | 10. Deploy API and private workers independently.
130 | 11. Verify event-worker database, KMS/decrypt, DNS, and controlled-egress access.
131 | 12. Deploy static dashboard/admin assets.
132 | 13. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
133 | 14. Compare decision, outcome, outbox, and delivery metrics before broader rollout.
134 | 15. Roll back application artifacts without editing applied migrations when release validation fails.
135 |
136 | All applied migrations are append-only and immutable. Future webhook, verification-delivery, replay, or retention schema changes require a new migration. Every new SQL migration must also add its reviewed SHA-256 entry to the manifest; regenerating the manifest to bless an unexplained edit is prohibited.
137 |
138 | ### Database integrity and restore commands
139 |
140 | `npm run db:integrity` is read-only and requires a complete contiguous history with non-null matching checksums. `npm run db:restore-rehearsal` requires a separately created empty target through `RESTORE_DATABASE_URL`; it refuses the same database and any target with existing public relations. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` enables a full table scan/hash comparison and should be scheduled only for an approved maintenance or isolated snapshot window on large datasets.
141 |
142 | ## Provider-selection work still required
143 |
144 | The architecture is accepted, but the following concrete selections and provisioning remain external production work:
145 |
146 | - managed application/container platform and primary region;
147 | - managed PostgreSQL provider and service tier;
148 | - managed secret store and KMS/vault provider;
149 | - observability backend and retention policy;
150 | - Redis-compatible cache provider if multi-replica coordination requires it;
151 | - OTP provider;
152 | - controlled DNS/egress, TLS, email, and incident-notification services.
153 |
154 | A dedicated external broker is not required for the selected merchant pilot. PostgreSQL remains the durable job/outbox source of truth unless a later ADR supersedes that boundary with measured scale evidence.
155 |
156 | The Docker Compose setup is a development/self-hosted baseline, not the final production environment. The local AES-GCM key environment variable is not an approved production KMS design.
157 |
158 | ## Security requirements
159 |
160 | - Use managed secrets and least-privilege service identities.
161 | - Select and wire a reviewed KMS/vault adapter and component service identities before switching runtime writes to managed-envelope v2; then run an audited background rewrite before retiring local v1 keys.
162 | - Give migration ownership, application runtime access, and retention maintenance distinct PostgreSQL identities. The migration owner runs schema/history/grant operations; runtime services use non-owner explicit DML grants; retention maintenance uses a separately reviewed identity and is never embedded in API or worker services.
163 | - Split API, session worker, sync worker, event worker, and verification worker into narrower roles on the selected platform when supported; each must remain no more privileged than the reviewed repository runtime policy.
164 | - Do not put secrets in images, CI logs, command arguments, source maps, logs, traces, or cache values.
165 | - Restrict browser-worker ingress, egress, and filesystem access where practical.
166 | - Restrict event-worker ingress and egress; block private and metadata networks at the infrastructure layer.
167 | - Encrypt database storage and backups and test restore.
168 | - Rotate API-key pepper, phone HMAC key, webhook secrets, and encryption keys through documented procedures.
169 | - Keep API keys separate from dashboard user sessions.
170 | - Keep PostgreSQL authoritative for sessions, idempotency, usage, audit records, jobs, and webhook outbox state.
171 | - Do not expose worker services or the database publicly unless no private option exists and compensating controls are documented.
172 | - Fail closed when endpoint/job decryption, event/verification scope validation, payload assertions, or worker lease ownership fails.
173 |
174 | ## Production validation gates
175 |
176 | Before a selected merchant pilot:
177 |
178 | - all thirteen migrations match the committed SHA-256 manifest and apply to a clean managed PostgreSQL 16+ database;
179 | - migration replay is a clean no-op and migration-history integrity passes;
180 | - a logical restore rehearsal succeeds against a distinct clean target;
181 | - runtime, migration, and retention-maintenance database roles are separated; the runtime role is externally provisioned as non-owner/non-elevated, and `db:runtime-grants` plus effective-permission checks pass after migrations;
182 | - the maintenance identity can run retention preview/archive while the runtime identity cannot read archive evidence or delete durable source rows;
183 | - point-in-time restore is demonstrated;
184 | - API readiness, graceful shutdown, and artifact rollback are demonstrated;
185 | - private workers have no public ingress;
186 | - event-worker egress cannot reach metadata, private, link-local, or unauthorized networks;
187 | - DNS and redirect SSRF tests pass in the selected runtime/network topology;
188 | - KMS decryption fails closed and key rotation is tested;
189 | - webhook endpoint-secret rotation and re-encryption are tested;
190 | - outbox backlog, stale lease recovery, retries, terminal failures, and delivery alerts are exercised;
191 | - telemetry redaction tests and core alerts pass;
192 | - queue lag, dead-letter, provider-degraded, and database alerts are exercised;
193 | - the encrypted verification queue exists before OTP provider delivery is enabled;
194 | - broad automatic blocking remains disabled.
195 |
196 | ## Current verification boundary
197 |
198 | The latest merged feature CI run `30322016826`, job `90159676583`, verifies the twelve-migration heartbeat baseline, immediate replay, non-null history checksums, clean full-data-hash logical restore, runtime-role grants/effective permissions, architecture boundaries, 20 workspace typechecks, 31 Turbo tasks with 145 assertions, 20 builds, dependency audit, formatting, lint, GitGuardian, and WooCommerce PHP syntax.
199 |
200 | The durable work retention feature is merged on `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`. Source CI run `30325144458`, job `90168867190`, verifies manifest-bound migration `0013`, immediate replay, history integrity, clean restore, runtime archive-table denial, all four PostgreSQL retention/archive tests, 20 workspace typechecks, 31 Turbo tasks with 154 assertions, 20 builds, audit, GitGuardian, and PHP syntax.
201 |
202 | Production provider provisioning, controlled-egress smoke tests, managed-provider PITR validation, selected KMS adapter/service-identity/access-audit validation, audited ciphertext rewrite, provider-specific OTP delivery, and retention-maintenance identity/window/hold/monitoring provisioning remain pending.
203 |
```

### docs/operations/operations-observability.md

Bytes: 18664
SHA-256: d435596c9cbf81490ca9dad6036389e25bf887414c98c68bd9bc0063b7b86b5d
Lines: 1-309 of 309

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
 11 | ### Implemented application boundary
 12 |
 13 | `@ozzyl/observability` now provides an exporter-neutral metric descriptor and recorder. It emits one JSON metric point per observation and deliberately performs no network I/O. Descriptor creation requires a finite allowlist for every attribute; unknown attributes, identifier-like keys, secret/contact/payload/URL keys, out-of-set values, invalid timestamps, and negative counter or histogram values are rejected. Validation, serialization, clock, or sink failure is swallowed so metrics cannot change API or worker behavior.
 14 |
 15 | Implemented points:
 16 |
 17 | - `ozzyl.api.requests` — counter by normalized HTTP method, canonical allowlisted route/template, and status class;
 18 | - `ozzyl.api.request.duration` — histogram observation in milliseconds using the same bounded attributes;
 19 | - `ozzyl.worker.operations` — counter by finite worker type, operation, and outcome;
 20 | - `ozzyl.worker.operation.duration` — histogram observation in milliseconds using the same worker attributes;
 21 | - `ozzyl.worker.claim.failures` — counter by finite durable-worker type only;
 22 | - `ozzyl.repository.operations` and `ozzyl.repository.operation.duration` — durable courier, webhook, and verification queue claim/start/renew/complete/retry/fail/snapshot operations by finite repository type, operation, and outcome;
 23 | - `ozzyl.provider.operations` and `ozzyl.provider.operation.duration` — courier API, courier browser-login, webhook HTTP, and verification-delivery calls by finite provider category, operation, and success/retryable/permanent outcome;
 24 | - `ozzyl.queue.depth` — gauge for queued, retry-scheduled, claimed, processing, and failed durable work by finite queue type and status;
 25 | - `ozzyl.queue.oldest_ready.age` — gauge in milliseconds for the oldest currently due courier, webhook, or verification item.
 26 |
 27 | Request IDs, organization/store/account/job/event/assessment identifiers, phone numbers or hashes, OTP values, credentials, URLs, payloads, provider responses, and arbitrary error codes are not metric attributes. Provider labels are broad finite categories rather than vendor/account/destination names. Queue snapshots contain only aggregate status counts and oldest-ready age. The default recorder writes JSON lines to the process telemetry stream; a reviewed OpenTelemetry exporter/collector adapter may replace that sink without changing call sites.
 28 |
 29 | ### API
 30 |
 31 | - Request rate
 32 | - Error rate
 33 | - p50/p95/p99 latency
 34 | - Rate-limit events
 35 | - Quota/entitlement failures
 36 | - Idempotency replays/conflicts
 37 | - Degraded assessments
 38 | - Authentication/session failures without sensitive values
 39 | - Transactional outbox rows created by event type
 40 | - Outbox enqueue failures and transaction rollbacks
 41 |
 42 | ### PostgreSQL
 43 |
 44 | - Availability and failover state
 45 | - Connection usage and pool wait
 46 | - Lock wait and deadlock rate
 47 | - Slow query rate
 48 | - Migration success/failure
 49 | - Backup and restore status, duration, age, and last successful drill
 50 | - Migration manifest/history checksum mismatch count
 51 | - Durable-job claim and lease-recovery rate
 52 | - `SKIP LOCKED` claim throughput
 53 | - Stale-lease recovery and exhausted-work terminalization
 54 |
 55 | ### Courier
 56 |
 57 | - Session refresh success rate
 58 | - Session age
 59 | - Provider response latency
 60 | - Provider error rate by structured code
 61 | - Observation freshness
 62 | - Queue lag
 63 | - Reconnect-required accounts
 64 | - Selector/login-state failures
 65 |
 66 | ### Verification
 67 |
 68 | - OTP queued/sent/delivered/failed
 69 | - Verification success rate
 70 | - Provider latency and timeout rate
 71 | - Claim throughput by verification-worker replica
 72 | - Fresh/recovered/lost lease counts
 73 | - Retry rate and attempts distribution
 74 | - Payload decryption/validation and scope-mismatch failures
 75 | - Resend rate and abuse blocks
 76 | - Queue lag, oldest due job, exhausted `LEASE_EXPIRED`, and dead-letter count
 77 |
 78 | The durable runner is implemented, but production delivery remains disabled until a reviewed provider adapter/account is selected, bundled, configured, and validated in staging.
 79 |
 80 | ### Webhooks and events
 81 |
 82 | - Outbox backlog and oldest-event age
 83 | - Due versus future retry count
 84 | - Claim throughput by event-worker replica
 85 | - Fresh, recovered, and lost lease counts
 86 | - Delivery success/failure
 87 | - Retry rate and attempts distribution
 88 | - Destination response class
 89 | - DNS resolution failure count
 90 | - Unsafe-destination rejection count
 91 | - Endpoint inactive/decryption/scope-mismatch failures
 92 | - Exhausted `LEASE_EXPIRED` count
 93 | - End-to-end duration from `occurred_at` to `completed_at`
 94 | - Delivery latency by event type
 95 |
 96 | ### Risk quality
 97 |
 98 | - Decision distribution
 99 | - Outcome by score band
100 | - False-positive rate
101 | - False-negative rate
102 | - Confidence distribution
103 | - Unknown/degraded distribution
104 | - Savings estimate accuracy
105 |
106 | ### Native shadow pilot
107 |
108 | - Explicitly opted-in stores
109 | - Sampled orders
110 | - Successful comparisons
111 | - Guard assessment failures and timeouts
112 | - Comparison and sampled-attempt persistence failures
113 | - Decision disagreement rate
114 | - Bounded score-delta minimum, maximum, average, and lower/equal/higher counts
115 | - Rollout reads, updates, idempotent replays, conflicts, and tenant-scope rejections
116 |
117 | Merchant views must query only the authorized organization/store and a bounded
118 | window. Platform administration may aggregate across active stores but must not
119 | expose customer identifiers, external order IDs, raw request payloads, API keys,
120 | provider credentials, cookies, OTPs, or signing secrets. Reporting failure must
121 | not affect source checkout or the effective legacy decision.
122 |
123 | ## Logging
124 |
125 | `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The API server and the courier-session, courier-sync, event, and verification runners use it for lifecycle and error records. Every record receives a timestamp, level, service, environment, and event name before export.
126 |
127 | The helper recursively redacts sensitive field names before serialization. Passwords, secrets, tokens, API keys, cookies, OTPs, raw phone values, credentials, provider responses, DNS answers, payloads, request/response bodies, and URLs are replaced rather than emitted. `phone_hash` is permitted as a non-reversible correlation reference. Error values expose only a bounded name and structured code; messages and stacks are omitted. Circular objects, binary values, big integers, excessive depth, oversized strings, and large collections are converted to bounded safe representations.
128 |
129 | Serialization or log/metric-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. API request logs use only accepted/generated opaque request IDs, an allowlisted route or bounded route template, HTTP method, status/status class, and duration. API metrics use normalized method, the same canonical route/template, and status class without the request ID. Durable repository operations, provider calls, and aggregate queue depth/oldest-ready-age are instrumented with finite categories only. Raw URLs, query strings, dynamic assessment identifiers, tenant/job/account identifiers, provider/vendor names, arbitrary error codes, payloads, and contact data are not metric attributes. Distributed traces, broader API/domain repository metrics, OpenTelemetry exporters/collector topology, dashboards, alerts, managed retention, and the managed backend remain production follow-up work.
130 |
131 | Use structured logs with:
132 |
133 | - request id
134 | - organization/store id or safe internal reference
135 | - assessment/job/event/delivery id
136 | - provider or destination category where safe
137 | - worker id
138 | - error code
139 | - attempt number
140 | - duration
141 | - engine/policy version when relevant
142 | - deployment environment and service name
143 |
144 | Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, webhook signing secrets, destination URL credentials, and unrestricted request/event bodies are prohibited.
145 |
146 | The API emits startup/shutdown, request-completion, and unhandled-error records, and all four private workers emit startup and structured error records through the shared redaction boundary. The API records request count/duration; private workers record operation count/duration; durable courier/event/verification queue repositories record transition count/duration and periodic aggregate depth/oldest-ready-age; courier API/browser, webhook HTTP, and OTP delivery boundaries record provider count/duration; durable claim failures remain separately counted. Production instrumentation must still add broader API/domain repository measurements and correlation spans without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, identifiers, provider credentials, URLs, arbitrary error codes, or DNS answer details that disclose internal topology.
147 |
148 | Recommended event-worker error codes include:
149 |
150 | - `UNSAFE_WEBHOOK_DESTINATION`
151 | - `WEBHOOK_DNS_RESOLUTION_FAILED`
152 | - `WEBHOOK_SECRET_DECRYPTION_FAILED`
153 | - `INVALID_EVENT_PAYLOAD`
154 | - `WEBHOOK_SCOPE_MISMATCH`
155 | - `WEBHOOK_DELIVERY_LEASE_LOST`
156 | - `ENDPOINT_INACTIVE`
157 | - `TIMEOUT`
158 | - `NETWORK_ERROR`
159 | - `RATE_LIMITED`
160 | - `LEASE_EXPIRED`
161 |
162 | ## Tracing
163 |
164 | Trace synchronous API work and asynchronous jobs using correlation IDs. Propagate assessment, job, event, delivery, and request references without propagating secret material.
165 |
166 | Recommended span boundaries:
167 |
168 | - request authentication and authorization;
169 | - usage reservation and idempotency;
170 | - feature assembly and PostgreSQL reads;
171 | - pure risk-engine invocation as an internal span only;
172 | - assessment/outcome persistence;
173 | - transactional outbox insert;
174 | - durable job/delivery claim and completion;
175 | - provider adapter call;
176 | - webhook DNS validation and HTTP attempt without sensitive attributes;
177 | - verification queue transaction, job claim, payload validation, provider attempt, and completion without phone/OTP attributes.
178 |
179 | The event ID links API persistence and asynchronous delivery. The delivery ID links claim, attempt, retry, and completion operations. Telemetry export failure must not break scoring, persistence, or synchronous checkout handling.
180 |
181 | ## Alerts
182 |
183 | - Provider session refresh failure spike
184 | - API p95 latency or error-rate breach
185 | - Assessment error/degraded spike
186 | - PostgreSQL unavailable, connection saturation, or lock-wait spike
187 | - Database migration, manifest/history integrity, backup, or restore failure
188 | - Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
189 | - Event-worker claim rate drops to zero while due backlog grows
190 | - Webhook delivery failure or retry spike
191 | - Webhook secret-decryption or scope-mismatch failure
192 | - Unsafe webhook destination spike
193 | - DNS resolution failure spike
194 | - OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
195 | - Usage counter/entitlement drift
196 | - Reconnect-required account spike
197 | - Secret scanning or redaction regression
198 | - KMS/vault access or decrypt failure spike
199 |
200 | ## Runbooks
201 |
202 | Create and exercise runbooks for:
203 |
204 | - Steadfast login/selector break
205 | - Expired, disabled, or rotated encryption key
206 | - KMS/vault outage
207 | - OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
208 | - Courier provider outage
209 | - Database logical restore, managed point-in-time restore, and failover
210 | - API key compromise
211 | - Courier credential/session compromise
212 | - Webhook signing-secret compromise and endpoint rotation
213 | - Queue/outbox backlog, lease recovery, and dead-letter replay
214 | - Webhook destination failure or repeated HTTP rejection
215 | - DNS resolution/egress-policy failure
216 | - Invalid event payload or scope mismatch
217 | - Incorrect risk policy rollback
218 | - Telemetry backend outage
219 | - Reputation dispute escalation when that subsystem exists
220 |
221 | A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.
222 |
223 | A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.
224 |
225 | ## Health model
226 |
227 | Expose separate health/readiness states for:
228 |
229 | - API process
230 | - database
231 | - durable job/outbox store
232 | - optional distributed cache
233 | - event/webhook worker process
234 | - webhook backlog and oldest-event age
235 | - event-worker signing-secret decryption capability
236 | - courier provider adapters
237 | - session workers
238 | - verification providers and future verification runner
239 | - KMS/vault access
240 | - telemetry export
241 |
242 | A webhook endpoint outage, provider outage, or telemetry outage must not necessarily take the API process out of service. Readiness and operations views must still expose degraded dependencies. Unknown or degraded dependencies must never be treated as safe approval signals.
243 |
244 | ## Event-worker operational contract
245 |
246 | - `EVENT_WORKER_ID` should be stable and unique per replica in production.
247 | - Courier, event, and verification poll, lease, lease-renewal, max-attempt, and provider-timeout values must be positive integers.
248 | - Every lease-renewal interval must be no greater than half its lease; event and verification leases must also exceed their provider timeout by more than five seconds.
249 | - Alert on heartbeat renewal failure because active provider I/O is aborted and the job remains available only through stale-lease recovery or reviewed replay.
250 | - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
251 | - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
252 | - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
253 | - Exhausted stale work fails closed with `LEASE_EXPIRED`.
254 | - Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.
255 |
256 | ## Data operations
257 |
258 | - Automated encrypted backups
259 | - Point-in-time recovery
260 | - Restore testing on a schedule
261 | - Migration preflight and post-deploy verification
262 | - Preview-first bounded terminal durable-work archival through the maintenance-only PostgreSQL boundary
263 | - Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
264 | - Audit trail for privileged data and credential access
265 | - KMS key rotation and ciphertext re-encryption procedures
266 | - Webhook signing-secret rotation/re-encryption procedure
267 | - Telemetry retention and access review
268 | - Production-data redaction before lower-environment use
269 |
270 | ## Release operations
271 |
272 | - Feature flags for new engine/policy versions and native multi-store migration
273 | - Canary/pilot merchants before broad rollout
274 | - Compare decision distributions before policy promotion
275 | - Rollback path for API, worker, migration, and policy changes
276 | - Do not edit migration 0008 after application; use a new migration for schema changes
277 | - Keep event-worker deployment independently scalable and rollbackable from the API
278 | - Exercise outbox backlog and retry behavior before each pilot expansion
279 | - No automatic blocking policy promotion without reviewed outcome data
280 | - Validate dashboards and alerts before each pilot expansion
281 |
282 | ## Provider selection still pending
283 |
284 | An OpenTelemetry exporter/collector implementation, managed observability backend, telemetry retention policy, alert-delivery channel, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Broader API/domain repository metrics, distributed traces, dashboards, and alerts remain unimplemented. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
285 |
286 | ## Browser dead-letter operations surface
287 |
288 | The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.
289 |
290 | The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.
291 |
292 | ## Durable work retention operations
293 |
294 | Terminal courier, webhook, and verification rows may be archived only through the maintenance-only repository and CLI documented in [Durable Work Retention Runbook](durable-work-retention-runbook.md). The application runtime role cannot read or write `durable_work_archives` and cannot delete source queue rows.
295 |
296 | Every run must preview first, use a cutoff at least 24 hours old, select only `completed`/`failed`, and process no more than 500 rows. Production baseline guidance is 30 days for completed work and 180 days for failed work until support, incident, privacy, and legal owners approve another policy. Archive evidence is secret-free and does not replace backup/PITR because source payloads cannot be reconstructed after commit.
297 |
298 | Monitor and record:
299 |
300 | - candidate and archived counts by work type and terminal status;
301 | - oldest eligible terminal timestamp;
302 | - skipped locked or state-changed rows;
303 | - archive evidence conflicts and maintenance privilege failures;
304 | - duration and rows per batch;
305 | - source queue size before and after maintenance;
306 | - archive table growth and approved evidence-retention window.
307 |
308 | No unattended retention scheduler is implemented. Automatic scheduling remains blocked on approved retention windows, incident/legal holds, maintenance identity provisioning, monitoring, backup/PITR recovery, and archive-evidence retention.
309 |
```

### docs/security/security-privacy.md

Bytes: 13114
SHA-256: 98d16096c697e3dc8b98ebf29b00f3f464ecc1390ef03d2ebab7f28e9e19ec48
Lines: 1-205 of 205

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
 51 | Metrics use a stricter boundary than structured logs. Every attribute must be declared through a finite categorical allowlist. Request, organization, store, account, worker, job, event, assessment, API-key, idempotency, endpoint, phone/hash, URL, payload/body, token, and secret-style attribute names are rejected. API metrics expose only normalized method, canonical route/template, and status class; worker and durable-repository metrics expose finite component, operation, and outcome categories; provider metrics use broad provider categories rather than vendor/account/destination names; queue gauges expose aggregate status counts and oldest-ready age only. Arbitrary provider/error values are not labels. Metric validation, clock, serialization, snapshot, or sink failure is isolated from request and worker execution.
 52 |
 53 | ## Durable work retention
 54 |
 55 | Old terminal courier, webhook, and verification source rows may be removed only through the maintenance-only retention boundary. The archive stores tenant scope, terminal state, attempts, bounded error code, timestamps, an opaque run ID, and the maintenance database identity; it never stores source payloads, event bodies, encrypted verification payloads, provider references, phone/OTP material, endpoints, credentials, cookies, or tokens.
 56 |
 57 | The application runtime role cannot read or write the archive table and cannot delete source queue rows. A separate reviewed maintenance identity must preview first, use approved retention windows and holds, and persist matching archive evidence before atomic deletion. Replay and audit evidence remain outside this deletion path. Because archive metadata cannot reconstruct deleted payloads, backup/PITR is the only approved post-commit recovery boundary.
 58 |
 59 | ## Phone data
 60 |
 61 | - Normalize consistently
 62 | - Use keyed hash/HMAC for cross-table matching where appropriate
 63 | - Encrypt raw phone only when operational lookup is necessary
 64 | - Separate analytics identity from operational contact data
 65 | - Document retention and deletion behavior
 66 | - Do not include raw phone values in webhook outbox events
 67 |
 68 | ## Credential and envelope storage
 69 |
 70 | - Envelope encryption
 71 | - Key version stored with ciphertext
 72 | - Master keys outside database
 73 | - Rotation procedure
 74 | - Strict service identity permissions
 75 | - Separate authenticated encryption context for credentials, sessions, webhook endpoints, and verification jobs
 76 | - Audit credential reads and decrypt operations
 77 | - Decryption failure must fail closed
 78 | - No plaintext compatibility fallback
 79 |
 80 | The local/self-hosted AES-256-GCM implementation is isolated in `@ozzyl/encryption`. The package also provides a provider-neutral managed v2 boundary with a random per-record data key, authenticated context digest and wrapped-key metadata, data-key zeroization, structured safe failures, explicit legacy dual-read, and key-version re-encryption. Production runtime call sites remain on local v1 until a selected KMS/vault adapter, component identities, access auditing, and an audited background rewrite are provisioned; there is no automatic local or plaintext fallback.
 81 |
 82 | Webhook signing secrets are stored only as encrypted endpoint material. The event worker decrypts them using the authenticated context `webhook-endpoint:<endpoint-id>` immediately before signing; the API and checkout path do not need plaintext access for delivery.
 83 |
 84 | ## Multi-tenancy
 85 |
 86 | Every merchant-owned record includes organization/store scope. Repository methods require scope parameters rather than optional filters. API-key resolution, feature assembly, assessment/outcome writes, dashboards, and tenant administration revalidate that the store is active and belongs to the active organization; matching caller-supplied identifiers alone are not authoritative.
 87 |
 88 | Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, verifications, or logs.
 89 |
 90 | Webhook delivery rows persist explicit organization/store scope and are revalidated against the endpoint and store relationships before claim. Mismatched rows fail closed instead of being sent. Webhook and verification administration require active owner/admin membership and return only operational metadata; signing-secret ciphertext, OTP hashes, encrypted job payloads, and raw phone values are excluded.
 91 |
 92 | Native shadow rollout and attempt evidence follow the same boundary:
 93 |
 94 | - source order scope is reloaded and verified before Guard evaluation;
 95 | - service API keys require `comparisons:write` and remain separate from browser sessions;
 96 | - rollout mutation requires CSRF proof plus active owner/admin membership;
 97 | - rollout, assessment, comparison, and attempt repositories revalidate exact organization/store relationships;
 98 | - merchant and platform reports contain bounded aggregates only;
 99 | - phone numbers, request snapshots, raw API keys, provider payloads, credentials, cookies, OTPs, and signing secrets are prohibited from rollout, attempt, dashboard, audit, and error payloads.
100 |
101 | ## PostgreSQL role separation
102 |
103 | - The migration owner applies schema changes, owns relations, records migration history, and runs `npm run db:runtime-grants` after migrations.
104 | - Runtime services connect with an externally provisioned non-owner `LOGIN` that has no superuser, `CREATEDB`, `CREATEROLE`, replication, `BYPASSRLS`, inherited role memberships, database ownership, schema ownership, or relation ownership.
105 | - Runtime privileges are explicit current-table `SELECT`/`INSERT`/`UPDATE` grants only where required. Migration history, `DELETE`, DDL, schema creation, and role management remain denied.
106 | - The grant command verifies the complete current table inventory and effective privileges, so a new table or an implicit/public privilege fails closed until the policy is reviewed.
107 | - Production may split this reviewed baseline into narrower API and worker roles, but no runtime identity may become the migration owner.
108 |
109 | ## Shared reputation safeguards
110 |
111 | - No single merchant report should globally block a customer.
112 | - Prefer courier-confirmed outcomes.
113 | - Require independent evidence for high-impact reputation.
114 | - Apply time decay.
115 | - Provide dispute and correction mechanisms.
116 | - Detect abusive or low-quality reporters.
117 | - Preserve evidence lineage.
118 | - Do not launch cross-merchant reputation in the foundation MVP without privacy/legal review.
119 |
120 | ## OTP security
121 |
122 | - 6-digit cryptographically random OTP
123 | - Store only hash
124 | - 5–10 minute expiry
125 | - Maximum attempts
126 | - Per-phone, per-IP, per-store, and per-organization rate limits
127 | - Bind OTP to verification session/order/purpose
128 | - Do not expose delivery success when provider actually failed
129 | - Do not log OTP values
130 | - Provider delivery runs only in the private verification worker, never synchronous API handling
131 | - Persist phone and OTP for delivery only inside an encrypted job payload; queue columns and logs remain non-sensitive
132 | - Bind ciphertext to `verification-job:<job-id>` authenticated context
133 | - Validate organization, store, purpose, phone HMAC, and OTP hash before provider I/O
134 | - Require current unexpired lease ownership for start, retry, delivery, and failure transitions
135 | - Fail both the job and authoritative session closed on relational scope mismatch
136 | - Pass a stable verification idempotency key to provider adapters to reduce duplicate sends after uncertain outcomes
137 |
138 | ## Webhook security
139 |
140 | - Emit durable outbox rows in the same transaction as the newly persisted assessment or outcome
141 | - Never perform merchant webhook network delivery from the risk engine, checkout handler, or API persistence transaction
142 | - Use stable event IDs and `(endpoint_id, event_id)` uniqueness for replay/idempotency control
143 | - Sign the exact canonical event payload with HMAC-SHA256 over `timestamp.payload`
144 | - Require HTTPS
145 | - Reject URL credentials, localhost names, `.local` names, literal non-public IPv4/IPv6 addresses, and metadata destinations
146 | - Resolve hostnames before fetch and reject the destination when any resolved address is invalid or non-public
147 | - Treat DNS resolution failure as retryable without making a request
148 | - Disable redirects to prevent redirect-based destination bypass
149 | - Apply bounded timeout, attempt limit, backoff, and terminal failure
150 | - Require the current unexpired worker lease for delivery-state transitions
151 | - Do not include raw phone, OTP, API keys, provider credentials, or signing secrets in event payloads or logs
152 |
153 | Application-level URL and DNS validation is not sufficient by itself against every DNS-rebinding, routing, proxy, or infrastructure failure. Production must also restrict event-worker egress, block metadata/private networks at the network layer, and use a controlled resolver or equivalent policy.
154 |
155 | ## Web security
156 |
157 | - CSRF protection for dashboard actions
158 | - CSP and secure headers
159 | - Input validation and output encoding
160 | - SSRF protection in webhook/custom URL features
161 | - HMAC-signed webhooks
162 | - Timestamp and replay prevention
163 | - Request size limits
164 | - Idempotency abuse protection
165 | - Safe CORS configuration by integration type
166 |
167 | ## Courier automation security
168 |
169 | - Playwright runs in isolated workers with least privilege
170 | - No browser execution in synchronous API/checkout paths
171 | - Screenshots/traces are redacted, access-controlled, and short-lived
172 | - Provider credentials are not passed through shell arguments
173 | - Session refresh failures are visible; they are never silently ignored
174 | - Provider terms and merchant authorization must be reviewed before commercial scale
175 |
176 | ## Operational security
177 |
178 | - Audit logs
179 | - Secret rotation
180 | - Dependency scanning
181 | - SAST and secret scanning
182 | - Backups and restore testing
183 | - Incident response runbook
184 | - Key compromise, webhook-secret compromise, and courier credential compromise runbooks
185 | - Queue/outbox lease recovery and dead-letter procedures
186 | - Production access review and break-glass procedure
187 | - Private worker ingress and controlled egress
188 |
189 | ## Source SaaS findings that must not be copied
190 |
191 | - Custom SHA-256 password hashing
192 | - Raw API key saved in metadata
193 | - Raw API key used as a login cookie
194 | - Full phone numbers logged by blacklist stubs
195 | - Shell commands containing session payloads
196 | - Hardcoded infrastructure identifiers
197 | - Decryption fallback to plaintext
198 | - Broad unaudited cross-store lookup
199 | - Synchronous webhook delivery in checkout handling
200 | - Plaintext webhook signing secrets in configuration or logs
201 |
202 | ## Browser durable-work administration
203 |
204 | Dead-letter listing and replay require an opaque authenticated browser session, exact session-visible organization/store scope, active owner/admin membership, repository-level relational reauthorization, and CSRF proof for replay. Service API keys are not accepted as browser sessions. The response contract excludes raw payloads, destination URLs, phone numbers or hashes, OTP values or hashes, encrypted material, credentials, cookies, tokens, provider responses, and webhook signing secrets.
205 |
```

### docs/testing/testing-strategy.md

Bytes: 17549
SHA-256: 8745aec590bcfb6b34391ee24ffb0ed658364c959a64f7add2123a3f5b2992ca
Lines: 1-300 of 300

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
 19 | - Structured-log fixed metadata, recursive sensitive-field redaction, safe error-code-only serialization, circular/binary/bigint handling, bounded truncation, and telemetry-sink failure isolation
 20 | - Non-overlapping lease heartbeat scheduling, failure propagation, abort signaling, and idempotent stop behavior
 21 | - API request-ID validation, bounded route templates, status/latency lifecycle records, and safe unhandled-error serialization
 22 | - Metric descriptor/name/unit validation, finite categorical attribute allowlists, high-cardinality/secret-like key rejection, value/sign validation, JSON point serialization, worker/repository/provider/queue helper output, and metric-sink failure isolation
 23 |
 24 | ## Contract tests
 25 |
 26 | Each courier adapter must pass a shared contract suite:
 27 |
 28 | - Returns canonical observation
 29 | - Handles timeout
 30 | - Handles expired session
 31 | - Never leaks credentials
 32 | - Maps malformed responses to structured errors
 33 | - Preserves source/freshness metadata
 34 | - Separates actual return from pre-shipping cancellation
 35 |
 36 | Public API contract tests cover:
 37 |
 38 | - Canonical success/error response
 39 | - Lowercase enums and `signals[].code`
 40 | - Unknown/degraded behavior
 41 | - Idempotent replay
 42 | - Test/live key isolation
 43 | - Dedicated comparison scope, idempotent replay, order binding, and cross-store assessment rejection
 44 |
 45 | Webhook delivery contract tests cover:
 46 |
 47 | - Canonical domain-event payloads
 48 | - HMAC signature over timestamp and exact payload
 49 | - Redirect rejection
 50 | - Retryable HTTP/network/DNS failures
 51 | - Terminal unsafe-destination and inactive-endpoint failures
 52 | - No signing secret, raw phone, or unrestricted request body in logs
 53 |
 54 | ## Integration tests
 55 |
 56 | - User/session authentication
 57 | - API key creation, one-time reveal, authentication, revocation, and rotation
 58 | - Atomic quota enforcement under concurrency
 59 | - Assessment persistence
 60 | - Transactional encrypted OTP queue creation and tenant-scoped verification
 61 | - Lease-owned OTP provider delivery and retry/failure state
 62 | - Courier session refresh
 63 | - Transactional assessment/outcome webhook outbox emission
 64 | - Lease-owned webhook delivery, renewal, abort-on-loss, and retry
 65 | - Multi-tenant isolation
 66 | - Organization/store membership authorization
 67 | - API-wide request correlation plus request count/duration metrics for public, authenticated, browser, not-found, and unhandled-error paths without raw dynamic routes, query values, request IDs, or tenant identifiers in metric attributes
 68 | - Courier-session, courier-sync, event, and verification operation plus provider-call metrics with bounded category/operation/outcome labels and no job, account, event, endpoint, phone, OTP, credential, URL, payload, vendor, error-text, or provider-response values
 69 | - Durable courier, webhook, and verification repository operation timing plus PostgreSQL aggregate queue-depth/oldest-ready-age snapshots without row or tenant identifiers
 70 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 71 |
 72 | ### PostgreSQL concurrency and idempotency coverage
 73 |
 74 | The CI PostgreSQL service runs real-database integration tests for:
 75 |
 76 | - duplicate usage reservations serializing through the organization/period advisory lock;
 77 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 78 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 79 | - concurrent assessment saves returning the single persisted scoped winner;
 80 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 81 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 82 | - operation idempotency values remaining isolated by organization and store;
 83 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 84 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 85 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 86 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 87 | - preventing another courier worker from stealing a fresh lease;
 88 | - reclaiming expired courier jobs and rejecting the previous owner;
 89 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 90 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 91 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
 92 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
 93 | - preventing another event worker from stealing a fresh webhook lease;
 94 | - rejecting an expired event-worker owner before completion or failure;
 95 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
 96 | - clearing webhook ownership when a retry is scheduled;
 97 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
 98 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
 99 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
100 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
101 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
102 | - protecting fresh verification leases and rejecting expired owners;
103 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
104 | - failing both the verification job and authoritative session on persisted scope mismatch;
105 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
106 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
107 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
108 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
109 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
110 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
111 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
112 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
113 |
114 | ### Native shadow rollout safety coverage
115 |
116 | Default tests prove:
117 |
118 | - `off` mode performs no Guard assessment or comparison API call;
119 | - deterministic sampling keeps retries for the same store/order in the same cohort;
120 | - the legacy score and decision remain the effective result even when Guard recommends block;
121 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
122 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
123 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
124 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
125 | - CSRF-protected browser mutation permits only active owner/admin store scope;
126 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
127 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
128 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
129 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
130 |
131 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
132 |
133 | ### Webhook destination security coverage
134 |
135 | Default tests use injected DNS and fetch boundaries. They prove:
136 |
137 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
138 | - a hostname resolving to any non-public address is rejected before `fetch`;
139 | - DNS resolution failure is classified as retryable without making a network request;
140 | - redirects are disabled;
141 | - successful deliveries use the expected HMAC signature and canonical payload;
142 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
143 |
144 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
145 |
146 | ### Verification payload security coverage
147 |
148 | Default tests prove:
149 |
150 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
151 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
152 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
153 | - reporter state and logs do not receive plaintext OTP values;
154 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
155 |
156 | ### Managed envelope security coverage
157 |
158 | Default tests prove:
159 |
160 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
161 | - plaintext values and plaintext data keys are not serialized into the envelope;
162 | - context mismatch is rejected before provider unwrap;
163 | - wrapped-key metadata is authenticated and tampering fails closed;
164 | - provider outage produces a structured non-secret error;
165 | - a provider cannot pass the plaintext data key through as a wrapped key;
166 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
167 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
168 | - malformed, unsupported, or unavailable-key envelopes fail closed.
169 |
170 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
171 |
172 | ### Migration replay coverage
173 |
174 | CI runs the migration command twice against the same PostgreSQL service:
175 |
176 | 1. the first run applies every ordered migration;
177 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
178 |
179 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
180 |
181 | ### Migration integrity and restore coverage
182 |
183 | CI additionally proves:
184 |
185 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
186 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
187 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
188 | - migration execution is serialized by one session-held advisory lock;
189 | - the restore target is a distinct pre-created clean database;
190 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
191 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
192 |
193 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
194 |
195 | Current PostgreSQL coverage includes owner-checked lease renewal, durable dead-letter authorization/replay, runtime-role isolation, and maintenance-only retention archival. Future provider validation must still include selected-provider smoke tests for distinct API/worker identities, migration-owner grant execution, and the separately provisioned retention-maintenance identity.
196 |
197 | ## End-to-end tests
198 |
199 | - Merchant signup and store creation
200 | - Create a test/live API key
201 | - Connect Steadfast account
202 | - Assess WooCommerce COD order
203 | - Receive a signed `assessment.completed` webhook asynchronously
204 | - Review high-risk order
205 | - Verify OTP
206 | - Submit courier outcome
207 | - Receive a signed `order.outcome_recorded` webhook asynchronously
208 | - View usage and savings report
209 |
210 | ## Security tests
211 |
212 | - Tenant data leakage
213 | - API key replay/revocation
214 | - Raw key absence from database/metadata/logs
215 | - Brute-force OTP
216 | - CSRF
217 | - Literal-IP and DNS-result SSRF
218 | - Webhook replay and redirect handling
219 | - Webhook signing-secret decryption failure
220 | - Envelope authenticated-context mismatch
221 | - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
222 | - Log and metric serialization/export failure isolation from application and worker execution
223 | - Metric attribute rejection for identifier/hash/key/URL/payload/body/token/secret-style names and values outside descriptor-owned finite sets
224 | - Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
225 | - Injection attacks
226 | - Session fixation/rotation
227 | - Credential decryption failure
228 | - Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
229 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
230 | - Runtime database role privilege escape, ownership, migration-history, DELETE, DDL, and durable archive-table access attempts
231 |
232 | ## Scraper tests
233 |
234 | - Login page selector fixtures
235 | - Successful cookie extraction
236 | - Invalid credentials
237 | - CAPTCHA/2FA detection
238 | - Provider HTML changes
239 | - Browser cleanup on failure
240 | - Login-state/session validation
241 | - Redacted screenshot/trace behavior
242 | - Structured failure codes
243 |
244 | Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.
245 |
246 | ## Architecture tests
247 |
248 | - `packages/risk-engine` cannot import network/database/provider/browser packages
249 | - API routes cannot import provider session drivers directly
250 | - API persistence may enqueue durable work but cannot execute merchant/provider network delivery
251 | - All schema comes from `packages/database`
252 | - All public response and domain-event types come from `packages/shared-types`
253 | - Tenant-scoped repositories, outbox rows, and jobs require explicit scope
254 |
255 | ## Pilot evaluation
256 |
257 | Track a confusion matrix against real verified outcomes:
258 |
259 | - true positive
260 | - false positive
261 | - true negative
262 | - false negative
263 |
264 | Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.
265 |
266 | ## Required CI gates
267 |
268 | - formatting check
269 | - lint
270 | - typecheck
271 | - unit tests
272 | - contract tests
273 | - integration tests with PostgreSQL
274 | - migration manifest, verification, replay, and database-history integrity
275 | - clean PostgreSQL backup/restore rehearsal
276 | - least-privilege runtime database role grant and effective-permission verification
277 | - dependency audit
278 | - secret scanning
279 | - architecture/dependency-boundary tests
280 |
281 | ## Browser dead-letter operations coverage
282 |
283 | Browser API tests must prove session enforcement, exact-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, secret-free list serialization, replay-result serialization, and structured conflict mapping. The existing real-PostgreSQL durable-work suite remains authoritative for concurrent duplicate replay, tenant isolation, structural/expiry rejection, lease reset, immutable evidence, and audit atomicity.
284 |
285 | ## Durable work retention coverage
286 |
287 | Default unit tests prove invalid cutoffs, empty terminal-status selections, unsafe archive-run IDs, and batches above 500 fail before a database connection is opened.
288 |
289 | PostgreSQL integration tests must prove:
290 |
291 | - preview returns only old `completed`/`failed` rows and performs no mutation;
292 | - queued and recent rows remain in their source queues;
293 | - preview and archive responses exclude source payload and provider-reference values;
294 | - archive evidence is inserted before source deletion in one transaction;
295 | - courier, webhook, and verification source rows are deleted only after matching evidence exists;
296 | - replay ledger rows remain after source archival;
297 | - rerunning the same cutoff is idempotent when no source rows remain;
298 | - the archive schema contains no payload, raw contact, endpoint, credential, or provider-reference columns;
299 | - the normal runtime role cannot read `durable_work_archives` and has no source `DELETE` privilege.
300 |
```

### packages/observability/src/metrics.test.ts

Bytes: 9933
SHA-256: 9de12bc9d90935274a42433b317a35f4754bde6d2ae0f60243ce6d7ad99183a9
Lines: 1-342 of 342

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import {
  3 |   createMetricRecorder,
  4 |   defineMetric,
  5 |   observeRepositoryOperation,
  6 |   recordDurableQueueSnapshot,
  7 |   recordProviderOperation,
  8 |   recordWorkerClaimFailure,
  9 |   recordWorkerOperation,
 10 |   serializeMetricPoint,
 11 | } from './metrics.js';
 12 | function parseMetricLine(line: string): unknown {
 13 |   return JSON.parse(line) as unknown;
 14 | }
 15 |
 16 | const requestMetric = defineMetric({
 17 |   name: 'ozzyl.api.requests',
 18 |   kind: 'counter',
 19 |   unit: '{request}',
 20 |   attributes: {
 21 |     method: { values: ['GET', 'POST'] },
 22 |     route: { values: ['/health', 'unmatched'] },
 23 |     status_class: { values: ['2xx', '4xx', '5xx'] },
 24 |   },
 25 | });
 26 |
 27 | describe('vendor-neutral metrics', () => {
 28 |   it('serializes an exporter-neutral point with finite categorical attributes', () => {
 29 |     const line = serializeMetricPoint({
 30 |       descriptor: requestMetric,
 31 |       value: 1,
 32 |       attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 33 |       timestamp: new Date('2026-07-28T00:00:00.000Z'),
 34 |       service: 'ozzyl-guard-api',
 35 |       environment: 'test',
 36 |     });
 37 |
 38 |     expect(JSON.parse(line)).toEqual({
 39 |       telemetry_type: 'metric',
 40 |       timestamp: '2026-07-28T00:00:00.000Z',
 41 |       service: 'ozzyl-guard-api',
 42 |       environment: 'test',
 43 |       name: 'ozzyl.api.requests',
 44 |       kind: 'counter',
 45 |       unit: '{request}',
 46 |       value: 1,
 47 |       attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 48 |     });
 49 |   });
 50 |
 51 |   it('rejects high-cardinality identifiers and values outside finite sets', () => {
 52 |     expect(() =>
 53 |       defineMetric({
 54 |         name: 'ozzyl.worker.jobs',
 55 |         kind: 'counter',
 56 |         unit: '{job}',
 57 |         attributes: { worker_id: { values: ['worker-1'] } },
 58 |       }),
 59 |     ).toThrow(/unsafe or unbounded/);
 60 |
 61 |     expect(() =>
 62 |       serializeMetricPoint({
 63 |         descriptor: requestMetric,
 64 |         value: 1,
 65 |         attributes: { method: 'GET', route: '/private/path', status_class: '2xx' },
 66 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 67 |         service: 'ozzyl-guard-api',
 68 |         environment: 'test',
 69 |       }),
 70 |     ).toThrow(/outside its bounded set/);
 71 |   });
 72 |
 73 |   it('rejects negative counters and unknown attributes', () => {
 74 |     expect(() =>
 75 |       serializeMetricPoint({
 76 |         descriptor: requestMetric,
 77 |         value: -1,
 78 |         attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 79 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 80 |         service: 'ozzyl-guard-api',
 81 |         environment: 'test',
 82 |       }),
 83 |     ).toThrow(/must not be negative/);
 84 |
 85 |     expect(() =>
 86 |       serializeMetricPoint({
 87 |         descriptor: requestMetric,
 88 |         value: 1,
 89 |         attributes: {
 90 |           method: 'GET',
 91 |           route: '/health',
 92 |           status_class: '2xx',
 93 |           outcome: 'success',
 94 |         },
 95 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 96 |         service: 'ozzyl-guard-api',
 97 |         environment: 'test',
 98 |       }),
 99 |     ).toThrow(/not allowed/);
100 |   });
101 |
102 |   it('records bounded worker operation and claim-failure points without identifiers', () => {
103 |     const lines: string[] = [];
104 |     const recorder = createMetricRecorder({
105 |       service: 'worker-test',
106 |       environment: 'test',
107 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
108 |       write: (line) => lines.push(line),
109 |     });
110 |
111 |     recordWorkerOperation(recorder, {
112 |       workerType: 'webhook_delivery',
113 |       operation: 'deliver',
114 |       outcome: 'retry_scheduled',
115 |       durationMs: 17,
116 |     });
117 |     recordWorkerClaimFailure(recorder, 'verification_delivery');
118 |
119 |     expect(lines.map(parseMetricLine)).toEqual([
120 |       expect.objectContaining({
121 |         name: 'ozzyl.worker.operations',
122 |         value: 1,
123 |         attributes: {
124 |           worker_type: 'webhook_delivery',
125 |           operation: 'deliver',
126 |           outcome: 'retry_scheduled',
127 |         },
128 |       }),
129 |       expect.objectContaining({
130 |         name: 'ozzyl.worker.operation.duration',
131 |         value: 17,
132 |         attributes: {
133 |           worker_type: 'webhook_delivery',
134 |           operation: 'deliver',
135 |           outcome: 'retry_scheduled',
136 |         },
137 |       }),
138 |       expect.objectContaining({
139 |         name: 'ozzyl.worker.claim.failures',
140 |         value: 1,
141 |         attributes: { worker_type: 'verification_delivery' },
142 |       }),
143 |     ]);
144 |     expect(lines.join('\n')).not.toContain('_id');
145 |     expect(lines.join('\n')).not.toContain('error_code');
146 |   });
147 |
148 |   it('observes repository success, empty, and error outcomes without changing results', async () => {
149 |     const lines: string[] = [];
150 |     const recorder = createMetricRecorder({
151 |       service: 'repository-test',
152 |       environment: 'test',
153 |       write: (line) => lines.push(line),
154 |     });
155 |     const clock = vi
156 |       .fn()
157 |       .mockReturnValueOnce(10)
158 |       .mockReturnValueOnce(18)
159 |       .mockReturnValueOnce(20)
160 |       .mockReturnValueOnce(24)
161 |       .mockReturnValueOnce(30)
162 |       .mockReturnValueOnce(37);
163 |
164 |     await expect(
165 |       observeRepositoryOperation(
166 |         recorder,
167 |         {
168 |           repositoryType: 'courier_queue',
169 |           operation: 'claim',
170 |           isEmpty: (value) => value === null,
171 |           monotonicNow: clock,
172 |         },
173 |         async () => ({ id: 'opaque-result' }),
174 |       ),
175 |     ).resolves.toEqual({ id: 'opaque-result' });
176 |     await expect(
177 |       observeRepositoryOperation(
178 |         recorder,
179 |         {
180 |           repositoryType: 'courier_queue',
181 |           operation: 'claim',
182 |           isEmpty: (value) => value === null,
183 |           monotonicNow: clock,
184 |         },
185 |         async () => null,
186 |       ),
187 |     ).resolves.toBeNull();
188 |     await expect(
189 |       observeRepositoryOperation(
190 |         recorder,
191 |         {
192 |           repositoryType: 'courier_queue',
193 |           operation: 'renew',
194 |           monotonicNow: clock,
195 |         },
196 |         async () => {
197 |           throw new Error('database unavailable');
198 |         },
199 |       ),
200 |     ).rejects.toThrow('database unavailable');
201 |
202 |     const points = lines.map(parseMetricLine);
203 |     expect(points).toEqual(
204 |       expect.arrayContaining([
205 |         expect.objectContaining({
206 |           name: 'ozzyl.repository.operations',
207 |           attributes: {
208 |             repository_type: 'courier_queue',
209 |             operation: 'claim',
210 |             outcome: 'success',
211 |           },
212 |         }),
213 |         expect.objectContaining({
214 |           name: 'ozzyl.repository.operations',
215 |           attributes: {
216 |             repository_type: 'courier_queue',
217 |             operation: 'claim',
218 |             outcome: 'empty',
219 |           },
220 |         }),
221 |         expect.objectContaining({
222 |           name: 'ozzyl.repository.operations',
223 |           attributes: {
224 |             repository_type: 'courier_queue',
225 |             operation: 'renew',
226 |             outcome: 'error',
227 |           },
228 |         }),
229 |       ]),
230 |     );
231 |     expect(lines.join('\n')).not.toContain('opaque-result');
232 |     expect(lines.join('\n')).not.toContain('database unavailable');
233 |   });
234 |
235 |   it('records provider operations and durable queue gauges with finite labels', () => {
236 |     const lines: string[] = [];
237 |     const recorder = createMetricRecorder({
238 |       service: 'worker-test',
239 |       environment: 'test',
240 |       write: (line) => lines.push(line),
241 |     });
242 |
243 |     recordProviderOperation(recorder, {
244 |       providerType: 'verification_delivery',
245 |       operation: 'send',
246 |       outcome: 'retryable_failure',
247 |       durationMs: 21,
248 |     });
249 |     recordDurableQueueSnapshot(recorder, 'verification_delivery', {
250 |       depths: { queued: 4, processing: 1, failed: 2 },
251 |       oldestReadyAgeMs: 3_000,
252 |     });
253 |
254 |     const points = lines.map(parseMetricLine);
255 |     expect(points).toContainEqual(
256 |       expect.objectContaining({
257 |         name: 'ozzyl.provider.operations',
258 |         attributes: {
259 |           provider_type: 'verification_delivery',
260 |           operation: 'send',
261 |           outcome: 'retryable_failure',
262 |         },
263 |       }),
264 |     );
265 |     expect(points).toContainEqual(
266 |       expect.objectContaining({
267 |         name: 'ozzyl.queue.depth',
268 |         value: 4,
269 |         attributes: { queue_type: 'verification_delivery', status: 'queued' },
270 |       }),
271 |     );
272 |     expect(points).toContainEqual(
273 |       expect.objectContaining({
274 |         name: 'ozzyl.queue.depth',
275 |         value: 0,
276 |         attributes: { queue_type: 'verification_delivery', status: 'retry_scheduled' },
277 |       }),
278 |     );
279 |     expect(points).toContainEqual(
280 |       expect.objectContaining({
281 |         name: 'ozzyl.queue.oldest_ready.age',
282 |         value: 3_000,
283 |         attributes: { queue_type: 'verification_delivery' },
284 |       }),
285 |     );
286 |     expect(lines.join('\n')).not.toContain('_id');
287 |     expect(lines.join('\n')).not.toContain('phone');
288 |   });
289 |
290 |   it('isolates telemetry clocks while preserving repository execution', async () => {
291 |     const recorder = createMetricRecorder({
292 |       service: 'repository-test',
293 |       environment: 'test',
294 |       write: () => {
295 |         throw new Error('metric sink unavailable');
296 |       },
297 |     });
298 |
299 |     await expect(
300 |       observeRepositoryOperation(
301 |         recorder,
302 |         {
303 |           repositoryType: 'webhook_queue',
304 |           operation: 'snapshot',
305 |           monotonicNow: () => {
306 |             throw new Error('clock unavailable');
307 |           },
308 |         },
309 |         async () => 'repository-result',
310 |       ),
311 |     ).resolves.toBe('repository-result');
312 |   });
313 |
314 |   it('swallows descriptor, serialization, clock, and sink failures', () => {
315 |     const write = vi.fn(() => {
316 |       throw new Error('collector unavailable');
317 |     });
318 |     const recorder = createMetricRecorder({
319 |       service: 'ozzyl-guard-api',
320 |       environment: 'test',
321 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
322 |       write,
323 |     });
324 |
325 |     expect(() =>
326 |       recorder.record(requestMetric, 1, {
327 |         method: 'GET',
328 |         route: '/health',
329 |         status_class: '2xx',
330 |       }),
331 |     ).not.toThrow();
332 |     expect(() =>
333 |       recorder.record(requestMetric, 1, {
334 |         method: 'GET',
335 |         route: '/dynamic-customer-reference',
336 |         status_class: '2xx',
337 |       }),
338 |     ).not.toThrow();
339 |     expect(write).toHaveBeenCalledTimes(1);
340 |   });
341 | });
342 |
```

### packages/observability/src/metrics.ts

Bytes: 16081
SHA-256: 794e0737d51944765fffe023b38ec2068a80f6b769b9d282fab4c5abef2ebdfc
Lines: 1-512 of 512

```typescript
  1 | export type MetricKind = 'counter' | 'histogram' | 'gauge';
  2 | export type MetricAttributeValue = string | number | boolean;
  3 | export type MetricAttributes = Readonly<Record<string, MetricAttributeValue>>;
  4 |
  5 | export interface MetricAttributeRule {
  6 |   readonly values: readonly MetricAttributeValue[];
  7 |   readonly required?: boolean;
  8 | }
  9 |
 10 | export interface MetricDescriptor {
 11 |   readonly name: string;
 12 |   readonly kind: MetricKind;
 13 |   readonly unit: string;
 14 |   readonly attributes?: Readonly<Record<string, MetricAttributeRule>>;
 15 | }
 16 |
 17 | export interface MetricPoint {
 18 |   readonly telemetry_type: 'metric';
 19 |   readonly timestamp: string;
 20 |   readonly service: string;
 21 |   readonly environment: string;
 22 |   readonly name: string;
 23 |   readonly kind: MetricKind;
 24 |   readonly unit: string;
 25 |   readonly value: number;
 26 |   readonly attributes: MetricAttributes;
 27 | }
 28 |
 29 | export interface MetricRecorderOptions {
 30 |   readonly service: string;
 31 |   readonly environment?: string;
 32 |   readonly clock?: () => Date;
 33 |   readonly write?: (line: string, point: MetricPoint) => void;
 34 | }
 35 |
 36 | export interface MetricRecorder {
 37 |   record(descriptor: MetricDescriptor, value: number, attributes?: MetricAttributes): void;
 38 | }
 39 |
 40 | const MAX_ATTRIBUTES = 12;
 41 | const MAX_ALLOWED_VALUES = 50;
 42 | const MAX_LABEL_LENGTH = 100;
 43 | const MAX_ATTRIBUTE_STRING_LENGTH = 64;
 44 | const METRIC_NAME_PATTERN = /^[a-z][a-z0-9]*(?:[._][a-z0-9]+)*$/;
 45 | const UNIT_PATTERN = /^[A-Za-z0-9{}%/_-]+$/;
 46 | const ATTRIBUTE_KEY_PATTERN = /^[a-z][a-z0-9_]*$/;
 47 | const ATTRIBUTE_STRING_PATTERN = /^[A-Za-z0-9/][A-Za-z0-9._:/-]*$/;
 48 | const PROHIBITED_ATTRIBUTE_KEYS = new Set([
 49 |   'authorization',
 50 |   'password',
 51 |   'secret',
 52 |   'token',
 53 |   'cookie',
 54 |   'otp',
 55 |   'phone',
 56 |   'phone_hash',
 57 |   'request_id',
 58 |   'organization_id',
 59 |   'store_id',
 60 |   'worker_id',
 61 |   'account_id',
 62 |   'job_id',
 63 |   'assessment_id',
 64 |   'api_key_id',
 65 |   'idempotency_key',
 66 |   'endpoint',
 67 |   'endpoint_url',
 68 |   'provider_response',
 69 |   'payload',
 70 |   'request_body',
 71 |   'response_body',
 72 | ]);
 73 |
 74 | export function defineMetric(descriptor: MetricDescriptor): MetricDescriptor {
 75 |   validateDescriptor(descriptor);
 76 |   const attributes = descriptor.attributes
 77 |     ? Object.freeze(
 78 |         Object.fromEntries(
 79 |           Object.entries(descriptor.attributes).map(([key, rule]) => [
 80 |             key,
 81 |             Object.freeze({ ...rule, values: Object.freeze([...rule.values]) }),
 82 |           ]),
 83 |         ),
 84 |       )
 85 |     : undefined;
 86 |   return Object.freeze({
 87 |     name: descriptor.name,
 88 |     kind: descriptor.kind,
 89 |     unit: descriptor.unit,
 90 |     ...(attributes === undefined ? {} : { attributes }),
 91 |   });
 92 | }
 93 |
 94 | export function createMetricRecorder(options: MetricRecorderOptions): MetricRecorder {
 95 |   const service = requiredLabel(options.service, 'service');
 96 |   const environment = requiredLabel(options.environment?.trim() || 'development', 'environment');
 97 |   const clock = options.clock ?? (() => new Date());
 98 |   const write = options.write ?? defaultWrite;
 99 |
100 |   return {
101 |     record(descriptor, value, attributes = {}) {
102 |       try {
103 |         const point = createMetricPoint({
104 |           descriptor,
105 |           value,
106 |           attributes,
107 |           timestamp: clock(),
108 |           service,
109 |           environment,
110 |         });
111 |         write(JSON.stringify(point), point);
112 |       } catch {
113 |         // Metrics must never change application, API, or worker behaviour.
114 |       }
115 |     },
116 |   };
117 | }
118 |
119 | export function serializeMetricPoint(input: {
120 |   descriptor: MetricDescriptor;
121 |   value: number;
122 |   attributes?: MetricAttributes;
123 |   timestamp: Date;
124 |   service: string;
125 |   environment: string;
126 | }): string {
127 |   return JSON.stringify(
128 |     createMetricPoint({
129 |       ...input,
130 |       attributes: input.attributes ?? {},
131 |     }),
132 |   );
133 | }
134 |
135 | function createMetricPoint(input: {
136 |   descriptor: MetricDescriptor;
137 |   value: number;
138 |   attributes: MetricAttributes;
139 |   timestamp: Date;
140 |   service: string;
141 |   environment: string;
142 | }): MetricPoint {
143 |   validateDescriptor(input.descriptor);
144 |   validateMetricValue(input.descriptor.kind, input.value);
145 |   if (Number.isNaN(input.timestamp.getTime())) throw new Error('Metric timestamp must be valid');
146 |
147 |   return {
148 |     telemetry_type: 'metric',
149 |     timestamp: input.timestamp.toISOString(),
150 |     service: requiredLabel(input.service, 'service'),
151 |     environment: requiredLabel(input.environment, 'environment'),
152 |     name: input.descriptor.name,
153 |     kind: input.descriptor.kind,
154 |     unit: input.descriptor.unit,
155 |     value: input.value,
156 |     attributes: validateAttributes(input.descriptor, input.attributes),
157 |   };
158 | }
159 |
160 | function validateDescriptor(descriptor: MetricDescriptor): void {
161 |   if (!METRIC_NAME_PATTERN.test(descriptor.name) || descriptor.name.length > 120) {
162 |     throw new Error('Metric name must be a bounded lowercase dotted identifier');
163 |   }
164 |   if (!UNIT_PATTERN.test(descriptor.unit) || descriptor.unit.length > 32) {
165 |     throw new Error('Metric unit must be a bounded OpenTelemetry-compatible token');
166 |   }
167 |   const rules = Object.entries(descriptor.attributes ?? {});
168 |   if (rules.length > MAX_ATTRIBUTES) throw new Error('Metric descriptor has too many attributes');
169 |   for (const [key, rule] of rules) {
170 |     validateAttributeKey(key);
171 |     if (rule.values.length === 0 || rule.values.length > MAX_ALLOWED_VALUES) {
172 |       throw new Error(`Metric attribute ${key} must define a bounded finite value set`);
173 |     }
174 |     const seen = new Set<string>();
175 |     for (const value of rule.values) {
176 |       validateAttributeValue(value);
177 |       const signature = `${typeof value}:${String(value)}`;
178 |       if (seen.has(signature)) throw new Error(`Metric attribute ${key} contains duplicate values`);
179 |       seen.add(signature);
180 |     }
181 |   }
182 | }
183 |
184 | function validateAttributes(
185 |   descriptor: MetricDescriptor,
186 |   attributes: MetricAttributes,
187 | ): MetricAttributes {
188 |   const rules = descriptor.attributes ?? {};
189 |   const entries = Object.entries(attributes);
190 |   if (entries.length > MAX_ATTRIBUTES) throw new Error('Metric point has too many attributes');
191 |
192 |   for (const [key, rule] of Object.entries(rules)) {
193 |     if (rule.required !== false && !(key in attributes)) {
194 |       throw new Error(`Metric attribute ${key} is required`);
195 |     }
196 |   }
197 |
198 |   const normalized: Record<string, MetricAttributeValue> = {};
199 |   for (const [key, value] of entries) {
200 |     validateAttributeKey(key);
201 |     validateAttributeValue(value);
202 |     const rule = rules[key];
203 |     if (!rule) throw new Error(`Metric attribute ${key} is not allowed`);
204 |     if (!rule.values.some((allowed) => Object.is(allowed, value))) {
205 |       throw new Error(`Metric attribute ${key} value is outside its bounded set`);
206 |     }
207 |     normalized[key] = value;
208 |   }
209 |   return Object.freeze(normalized);
210 | }
211 |
212 | function validateMetricValue(kind: MetricKind, value: number): void {
213 |   if (!Number.isFinite(value)) throw new Error('Metric values must be finite');
214 |   if ((kind === 'counter' || kind === 'histogram') && value < 0) {
215 |     throw new Error(`${kind} values must not be negative`);
216 |   }
217 | }
218 |
219 | function validateAttributeKey(key: string): void {
220 |   if (!ATTRIBUTE_KEY_PATTERN.test(key) || key.length > 50 || isProhibitedAttributeKey(key)) {
221 |     throw new Error(`Metric attribute ${key} is unsafe or unbounded`);
222 |   }
223 | }
224 |
225 | function validateAttributeValue(value: MetricAttributeValue): void {
226 |   if (typeof value === 'string') {
227 |     if (
228 |       value.length === 0 ||
229 |       value.length > MAX_ATTRIBUTE_STRING_LENGTH ||
230 |       !ATTRIBUTE_STRING_PATTERN.test(value)
231 |     ) {
232 |       throw new Error('Metric string attributes must be bounded categorical values');
233 |     }
234 |     return;
235 |   }
236 |   if (typeof value === 'number' && !Number.isFinite(value)) {
237 |     throw new Error('Metric numeric attributes must be finite');
238 |   }
239 | }
240 |
241 | function isProhibitedAttributeKey(key: string): boolean {
242 |   const normalized = key.toLowerCase();
243 |   return (
244 |     PROHIBITED_ATTRIBUTE_KEYS.has(normalized) ||
245 |     normalized.endsWith('_id') ||
246 |     normalized.endsWith('_key') ||
247 |     normalized.endsWith('_hash') ||
248 |     normalized.endsWith('_url') ||
249 |     normalized.endsWith('_payload') ||
250 |     normalized.endsWith('_body') ||
251 |     normalized.endsWith('_token') ||
252 |     normalized.endsWith('_secret')
253 |   );
254 | }
255 |
256 | function requiredLabel(value: string, name: string): string {
257 |   const normalized = value.trim();
258 |   if (!normalized || normalized.length > MAX_LABEL_LENGTH) {
259 |     throw new Error(`${name} must be a bounded non-empty label`);
260 |   }
261 |   return normalized;
262 | }
263 |
264 | export type WorkerMetricType =
265 |   'courier_sync' | 'webhook_delivery' | 'verification_delivery' | 'courier_session';
266 | export type WorkerMetricOperation = 'sync' | 'deliver' | 'send' | 'refresh';
267 | export type WorkerMetricOutcome = 'completed' | 'cached' | 'retry_scheduled' | 'failed';
268 |
269 | const WORKER_METRIC_ATTRIBUTES = {
270 |   worker_type: {
271 |     values: ['courier_sync', 'webhook_delivery', 'verification_delivery', 'courier_session'],
272 |   },
273 |   operation: { values: ['sync', 'deliver', 'send', 'refresh'] },
274 |   outcome: { values: ['completed', 'cached', 'retry_scheduled', 'failed'] },
275 | } as const;
276 | const WORKER_OPERATION_COUNT = defineMetric({
277 |   name: 'ozzyl.worker.operations',
278 |   kind: 'counter',
279 |   unit: '{operation}',
280 |   attributes: WORKER_METRIC_ATTRIBUTES,
281 | });
282 | const WORKER_OPERATION_DURATION = defineMetric({
283 |   name: 'ozzyl.worker.operation.duration',
284 |   kind: 'histogram',
285 |   unit: 'ms',
286 |   attributes: WORKER_METRIC_ATTRIBUTES,
287 | });
288 | const WORKER_CLAIM_FAILURES = defineMetric({
289 |   name: 'ozzyl.worker.claim.failures',
290 |   kind: 'counter',
291 |   unit: '{failure}',
292 |   attributes: {
293 |     worker_type: {
294 |       values: ['courier_sync', 'webhook_delivery', 'verification_delivery'],
295 |     },
296 |   },
297 | });
298 |
299 | export function recordWorkerOperation(
300 |   recorder: MetricRecorder | undefined,
301 |   input: {
302 |     workerType: WorkerMetricType;
303 |     operation: WorkerMetricOperation;
304 |     outcome: WorkerMetricOutcome;
305 |     durationMs: number;
306 |   },
307 | ): void {
308 |   if (!recorder) return;
309 |   const attributes = {
310 |     worker_type: input.workerType,
311 |     operation: input.operation,
312 |     outcome: input.outcome,
313 |   } as const;
314 |   recorder.record(WORKER_OPERATION_COUNT, 1, attributes);
315 |   recorder.record(WORKER_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
316 | }
317 |
318 | export function recordWorkerClaimFailure(
319 |   recorder: MetricRecorder | undefined,
320 |   workerType: Exclude<WorkerMetricType, 'courier_session'>,
321 | ): void {
322 |   recorder?.record(WORKER_CLAIM_FAILURES, 1, { worker_type: workerType });
323 | }
324 |
325 | export type RepositoryMetricType = 'courier_queue' | 'webhook_queue' | 'verification_queue';
326 | export type RepositoryMetricOperation =
327 |   'claim' | 'start' | 'renew' | 'complete' | 'retry' | 'fail' | 'snapshot';
328 | export type RepositoryMetricOutcome = 'success' | 'empty' | 'error';
329 |
330 | const REPOSITORY_METRIC_ATTRIBUTES = {
331 |   repository_type: {
332 |     values: ['courier_queue', 'webhook_queue', 'verification_queue'],
333 |   },
334 |   operation: {
335 |     values: ['claim', 'start', 'renew', 'complete', 'retry', 'fail', 'snapshot'],
336 |   },
337 |   outcome: { values: ['success', 'empty', 'error'] },
338 | } as const;
339 | const REPOSITORY_OPERATION_COUNT = defineMetric({
340 |   name: 'ozzyl.repository.operations',
341 |   kind: 'counter',
342 |   unit: '{operation}',
343 |   attributes: REPOSITORY_METRIC_ATTRIBUTES,
344 | });
345 | const REPOSITORY_OPERATION_DURATION = defineMetric({
346 |   name: 'ozzyl.repository.operation.duration',
347 |   kind: 'histogram',
348 |   unit: 'ms',
349 |   attributes: REPOSITORY_METRIC_ATTRIBUTES,
350 | });
351 |
352 | export async function observeRepositoryOperation<T>(
353 |   recorder: MetricRecorder | undefined,
354 |   input: {
355 |     repositoryType: RepositoryMetricType;
356 |     operation: RepositoryMetricOperation;
357 |     isEmpty?: (value: T) => boolean;
358 |     monotonicNow?: () => number;
359 |   },
360 |   task: () => Promise<T>,
361 | ): Promise<T> {
362 |   const monotonicNow = input.monotonicNow ?? (() => Date.now());
363 |   const startedAt = safeMonotonicNow(monotonicNow);
364 |   try {
365 |     const value = await task();
366 |     recordRepositoryOperation(recorder, {
367 |       repositoryType: input.repositoryType,
368 |       operation: input.operation,
369 |       outcome: input.isEmpty?.(value) === true ? 'empty' : 'success',
370 |       durationMs: safeDuration(monotonicNow, startedAt),
371 |     });
372 |     return value;
373 |   } catch (error) {
374 |     recordRepositoryOperation(recorder, {
375 |       repositoryType: input.repositoryType,
376 |       operation: input.operation,
377 |       outcome: 'error',
378 |       durationMs: safeDuration(monotonicNow, startedAt),
379 |     });
380 |     throw error;
381 |   }
382 | }
383 |
384 | export function recordRepositoryOperation(
385 |   recorder: MetricRecorder | undefined,
386 |   input: {
387 |     repositoryType: RepositoryMetricType;
388 |     operation: RepositoryMetricOperation;
389 |     outcome: RepositoryMetricOutcome;
390 |     durationMs: number;
391 |   },
392 | ): void {
393 |   if (!recorder) return;
394 |   const attributes = {
395 |     repository_type: input.repositoryType,
396 |     operation: input.operation,
397 |     outcome: input.outcome,
398 |   } as const;
399 |   recorder.record(REPOSITORY_OPERATION_COUNT, 1, attributes);
400 |   recorder.record(REPOSITORY_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
401 | }
402 |
403 | export type ProviderMetricType =
404 |   'courier_api' | 'courier_browser' | 'webhook_http' | 'verification_delivery';
405 | export type ProviderMetricOperation = 'lookup' | 'login' | 'deliver' | 'send';
406 | export type ProviderMetricOutcome = 'success' | 'retryable_failure' | 'permanent_failure';
407 |
408 | const PROVIDER_METRIC_ATTRIBUTES = {
409 |   provider_type: {
410 |     values: ['courier_api', 'courier_browser', 'webhook_http', 'verification_delivery'],
411 |   },
412 |   operation: { values: ['lookup', 'login', 'deliver', 'send'] },
413 |   outcome: { values: ['success', 'retryable_failure', 'permanent_failure'] },
414 | } as const;
415 | const PROVIDER_OPERATION_COUNT = defineMetric({
416 |   name: 'ozzyl.provider.operations',
417 |   kind: 'counter',
418 |   unit: '{operation}',
419 |   attributes: PROVIDER_METRIC_ATTRIBUTES,
420 | });
421 | const PROVIDER_OPERATION_DURATION = defineMetric({
422 |   name: 'ozzyl.provider.operation.duration',
423 |   kind: 'histogram',
424 |   unit: 'ms',
425 |   attributes: PROVIDER_METRIC_ATTRIBUTES,
426 | });
427 |
428 | export function recordProviderOperation(
429 |   recorder: MetricRecorder | undefined,
430 |   input: {
431 |     providerType: ProviderMetricType;
432 |     operation: ProviderMetricOperation;
433 |     outcome: ProviderMetricOutcome;
434 |     durationMs: number;
435 |   },
436 | ): void {
437 |   if (!recorder) return;
438 |   const attributes = {
439 |     provider_type: input.providerType,
440 |     operation: input.operation,
441 |     outcome: input.outcome,
442 |   } as const;
443 |   recorder.record(PROVIDER_OPERATION_COUNT, 1, attributes);
444 |   recorder.record(PROVIDER_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
445 | }
446 |
447 | export type DurableQueueType = 'courier_refresh' | 'webhook_delivery' | 'verification_delivery';
448 | export type DurableQueueStatus = 'queued' | 'retry_scheduled' | 'claimed' | 'processing' | 'failed';
449 | export interface DurableQueueSnapshot {
450 |   readonly depths: Partial<Record<DurableQueueStatus, number>>;
451 |   readonly oldestReadyAgeMs: number;
452 | }
453 |
454 | const DURABLE_QUEUE_STATUSES: readonly DurableQueueStatus[] = [
455 |   'queued',
456 |   'retry_scheduled',
457 |   'claimed',
458 |   'processing',
459 |   'failed',
460 | ];
461 | const DURABLE_QUEUE_DEPTH = defineMetric({
462 |   name: 'ozzyl.queue.depth',
463 |   kind: 'gauge',
464 |   unit: '{item}',
465 |   attributes: {
466 |     queue_type: { values: ['courier_refresh', 'webhook_delivery', 'verification_delivery'] },
467 |     status: { values: DURABLE_QUEUE_STATUSES },
468 |   },
469 | });
470 | const DURABLE_QUEUE_OLDEST_READY_AGE = defineMetric({
471 |   name: 'ozzyl.queue.oldest_ready.age',
472 |   kind: 'gauge',
473 |   unit: 'ms',
474 |   attributes: {
475 |     queue_type: { values: ['courier_refresh', 'webhook_delivery', 'verification_delivery'] },
476 |   },
477 | });
478 |
479 | export function recordDurableQueueSnapshot(
480 |   recorder: MetricRecorder | undefined,
481 |   queueType: DurableQueueType,
482 |   snapshot: DurableQueueSnapshot,
483 | ): void {
484 |   if (!recorder) return;
485 |   for (const status of DURABLE_QUEUE_STATUSES) {
486 |     recorder.record(DURABLE_QUEUE_DEPTH, Math.max(0, snapshot.depths[status] ?? 0), {
487 |       queue_type: queueType,
488 |       status,
489 |     });
490 |   }
491 |   recorder.record(DURABLE_QUEUE_OLDEST_READY_AGE, Math.max(0, snapshot.oldestReadyAgeMs), {
492 |     queue_type: queueType,
493 |   });
494 | }
495 |
496 | function safeMonotonicNow(monotonicNow: () => number): number {
497 |   try {
498 |     const value = monotonicNow();
499 |     return Number.isFinite(value) ? value : 0;
500 |   } catch {
501 |     return 0;
502 |   }
503 | }
504 |
505 | function safeDuration(monotonicNow: () => number, startedAt: number): number {
506 |   return Math.max(0, safeMonotonicNow(monotonicNow) - startedAt);
507 | }
508 |
509 | function defaultWrite(line: string): void {
510 |   console.info(line);
511 | }
512 |
```

### tracker.yml

Bytes: 20998
SHA-256: 4dd3d330716c47bd691f672d8372674c6cd12c75373eb4aad320aa6c65ca6b2e
Lines: 1-387 of 387

```yaml
  1 | schema_version: 1
  2 | project:
  3 |   name: Ozzyl Guard
  4 |   repository: rahmatullahboss/ozzyl-guard
  5 |   branch: main
  6 |   visibility: public
  7 |   expected_visibility: private
  8 |   status: production-hardening-in-progress
  9 |   last_updated: 2026-07-28
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
 44 |   durable_work_retention: docs/database/durable-work-retention.md
 45 |   durable_work_retention_runbook: docs/operations/durable-work-retention-runbook.md
 46 |   roadmap: docs/roadmap/implementation-roadmap.md
 47 |   backlog: docs/roadmap/initial-backlog.md
 48 |   risks: docs/roadmap/risk-register.md
 49 |   current_plan: .ai-bridge/current-plan.md
 50 |   implementation_status: .ai-bridge/implementation-status.md
 51 |   decisions: .ai-bridge/decisions.md
 52 |   full_context: .ai-bridge/pro-context.md
 53 |
 54 | invariants:
 55 |   - exactly_one_canonical_risk_engine
 56 |   - risk_engine_has_no_external_io
 57 |   - courier_access_only_through_adapters_and_workers
 58 |   - api_handlers_have_no_scoring_logic
 59 |   - merchant_data_requires_organization_and_store_scope
 60 |   - unknown_data_is_not_safe_by_default
 61 |   - provider_failure_is_not_an_automatic_decision
 62 |   - user_sessions_are_separate_from_service_access
 63 |   - applied_migrations_are_immutable
 64 |   - all_integrations_use_the_versioned_api_contract
 65 |   - long_running_provider_work_is_asynchronous
 66 |   - postgresql_is_authoritative_for_pilot_durable_work
 67 |   - cache_state_is_non_authoritative
 68 |   - production_decryption_fails_closed
 69 |   - durable_worker_transitions_require_current_lease_ownership
 70 |   - webhook_and_otp_network_delivery_stays_out_of_checkout_request_paths
 71 |   - durable_event_payloads_require_explicit_organization_and_store_scope
 72 |   - verification_provider_delivery_only_runs_in_private_workers
 73 |   - verification_job_plaintext_is_encrypted_and_context_bound
 74 |   - migration_files_match_the_committed_sha256_manifest
 75 |   - migration_history_checksums_are_non_null_and_fail_closed
 76 |   - restore_rehearsal_requires_a_clean_distinct_target
 77 |   - tenant_scope_is_revalidated_against_active_relational_store_ownership
 78 |   - runtime_database_role_is_non_owner_non_migration_and_explicitly_granted
 79 |   - managed_envelopes_use_random_per_record_data_keys_and_authenticated_context
 80 |   - production_kms_failures_have_no_plaintext_or_local_fallback
 81 |   - native_shadow_rollout_never_changes_the_effective_legacy_decision
 82 |   - native_shadow_runs_only_after_authoritative_source_order_reload
 83 |   - native_shadow_rollout_defaults_off_and_requires_explicit_store_opt_in
 84 |   - native_shadow_attempt_evidence_is_tenant_scoped_immutable_and_idempotent
 85 |   - shadow_comparison_guard_values_are_derived_from_the_scoped_assessment
 86 |   - durable_dead_letter_operations_require_active_owner_or_admin_scope
 87 |   - durable_work_replay_is_explicit_idempotent_and_audited
 88 |   - structural_or_expired_durable_failures_are_not_replayed
 89 |   - durable_replay_evidence_is_secret_free_and_immutable
 90 |   - browser_dead_letter_access_requires_opaque_session_exact_store_and_owner_or_admin
 91 |   - browser_dead_letter_replay_requires_csrf_and_a_stable_idempotency_key
 92 |   - browser_dead_letter_responses_exclude_payloads_and_secret_material
 93 |   - structured_logs_redact_sensitive_fields_before_export
 94 |   - telemetry_failures_never_break_application_or_worker_execution
 95 |   - metric_attributes_are_descriptor_owned_finite_and_categorical
 96 |   - metrics_never_use_identifiers_hashes_keys_urls_payloads_contact_or_secret_values
 97 |   - api_request_ids_are_server_generated_or_bounded_opaque_values
 98 |   - api_logs_never_export_raw_urls_query_values_or_dynamic_route_identifiers
 99 |   - durable_worker_leases_renew_only_for_the_current_owner_while_unexpired
100 |   - lease_renewal_failure_aborts_active_provider_io
101 |   - final_queue_transitions_drain_the_heartbeat_before_state_change
102 |   - durable_retention_selects_only_old_completed_or_failed_work
103 |   - archive_evidence_is_persisted_and_exactly_validated_before_source_deletion
104 |   - durable_archive_records_exclude_payloads_provider_references_and_secret_material
105 |   - application_runtime_role_cannot_access_archives_or_delete_durable_source_rows
106 |   - durable_replay_and_audit_evidence_survives_source_archival
107 |   - retention_has_no_unattended_scheduler_or_automatic_rehydration
108 |
109 | implemented:
110 |   - typescript_monorepo_and_ci
111 |   - postgresql_schema_and_thirteen_migrations
112 |   - organization_store_membership_and_plan_foundation
113 |   - usage_metering_and_audit_foundation
114 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
115 |   - pure_versioned_explainable_risk_engine
116 |   - canonical_v1_api_and_postgresql_repositories
117 |   - provider_neutral_shared_envelope_encryption_package
118 |   - steadfast_adapter_and_browser_session_worker
119 |   - postgresql_courier_sync_worker
120 |   - verification_and_webhook_libraries
121 |   - durable_postgresql_webhook_outbox_and_event_worker
122 |   - durable_encrypted_postgresql_verification_queue_and_worker
123 |   - tenant_scoped_postgresql_otp_verification_repository
124 |   - woocommerce_shopify_custom_and_native_adapters
125 |   - authenticated_live_merchant_dashboard
126 |   - authenticated_live_platform_admin
127 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
128 |   - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
129 |   - accepted_provider_neutral_production_infrastructure_adrs
130 |   - postgresql_usage_assessment_outcome_and_operation_idempotency_race_hardening
131 |   - postgresql_courier_worker_atomic_claim_and_lease_recovery
132 |   - postgresql_webhook_worker_atomic_claim_and_lease_recovery
133 |   - postgresql_verification_worker_atomic_claim_and_lease_recovery
134 |   - verification_payload_context_phone_hash_and_otp_hash_validation
135 |   - otp_provider_delivery_removed_from_synchronous_api_requests
136 |   - migration_replay_ci_gate
137 |   - webhook_dns_destination_validation
138 |   - postgresql_migration_manifest_and_history_checksum_integrity
139 |   - clean_postgresql_backup_restore_rehearsal
140 |   - restored_schema_data_sequence_history_and_replay_comparison
141 |   - authoritative_api_key_feature_assessment_and_outcome_tenant_scope_revalidation
142 |   - secret_free_tenant_scoped_webhook_and_verification_administration_repositories
143 |   - dashboard_and_platform_admin_repository_isolation_expansion
144 |   - least_privilege_postgresql_runtime_role_policy_grant_cli_and_ci_gate
145 |   - provider_neutral_managed_envelope_v2_with_random_per_record_data_keys
146 |   - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
147 |   - native_multi_store_off_and_deterministic_shadow_rollout_controls
148 |   - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
149 |   - selected_source_post_persist_native_shadow_integration
150 |   - store_scoped_native_shadow_opt_in_and_pilot_reporting
151 |   - tenant_scoped_immutable_native_shadow_attempt_evidence
152 |   - tenant_scoped_durable_work_dead_letter_inspection
153 |   - idempotent_controlled_durable_work_replay
154 |   - immutable_secret_free_durable_work_replay_evidence
155 |   - authenticated_merchant_browser_dead_letter_operations
156 |   - csrf_protected_browser_durable_work_replay
157 |   - synchronous_per_work_item_browser_replay_key_cache
158 |   - provider_neutral_structured_logging_and_recursive_redaction
159 |   - courier_session_courier_sync_event_and_verification_worker_log_integration
160 |   - telemetry_serialization_and_sink_failure_isolation_tests
161 |   - api_request_lifecycle_and_safe_correlation_logging
162 |   - api_unhandled_error_redaction_and_sink_failure_isolation_tests
163 |   - shared_non_overlapping_lease_heartbeat_and_abort_signal
164 |   - courier_webhook_and_verification_owner_checked_lease_renewal
165 |   - provider_io_abort_on_lease_renewal_loss
166 |   - maintenance_only_durable_work_retention_preview_and_archive_cli
167 |   - secret_free_durable_work_archive_evidence
168 |   - transactional_archive_before_delete_with_skip_locked_revalidation
169 |   - runtime_role_archive_table_and_source_delete_denial
170 |   - durable_retention_unit_and_postgresql_integration_tests
171 |   - vendor_neutral_metric_descriptor_and_json_recorder
172 |   - api_request_count_and_duration_metrics
173 |   - private_worker_operation_count_duration_and_claim_failure_metrics
174 |   - finite_cardinality_metric_label_and_sink_failure_tests
175 |   - durable_repository_operation_count_and_duration_metrics
176 |   - courier_browser_webhook_and_verification_provider_call_metrics
177 |   - aggregate_durable_queue_depth_and_oldest_ready_age_gauges
178 |   - configurable_telemetry_only_queue_snapshot_cadence
179 |
180 | verification:
181 |   command: npm run verify
182 |   last_verified: 2026-07-28
183 |   status: local_passed_remote_ci_pending
184 |   results:
185 |     migrations: 13_of_13_with_sha256_manifest
186 |     migration_replay: passed
187 |     migration_history_integrity: passed
188 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
189 |     architecture_boundaries: passed_locally_remote_ci_pending
190 |     typecheck: 20_of_20_passed_locally_remote_ci_pending
191 |     test_tasks: 31_of_31_passed_locally_remote_ci_pending
192 |     source_assertions: 168_total
193 |     previous_main_remote_assertions: 161_passed
194 |     migration_integrity_tests: 7_of_7_passed
195 |     postgresql_concurrency_tests: 7_of_7_passed
196 |     postgresql_courier_worker_lease_tests: 7_source_tests_remote_ci_pending
197 |     postgresql_webhook_worker_lease_tests: 7_source_tests_remote_ci_pending
198 |     postgresql_verification_worker_lease_tests: 7_source_tests_remote_ci_pending
199 |     verification_payload_validation_tests: 3_of_3_passed
200 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
201 |     postgresql_runtime_role_tests: 8_of_8_passed
202 |     managed_envelope_tests: 11_of_11_passed
203 |     native_shadow_adapter_tests: 10_of_10_passed
204 |     native_shadow_api_tests: 7_of_7_passed
205 |     native_shadow_postgresql_tests: 7_of_7_passed
206 |     native_shadow_browser_tests: 2_of_2_passed
207 |     native_shadow_sdk_tests: 2_of_2_passed
208 |     native_shadow_total_tests: 28_of_28_passed
209 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
210 |     browser_dead_letter_api_tests: 3_of_3_passed
211 |     observability_tests: 11_of_11_passed_locally
212 |     api_observability_tests: 4_of_4_passed
213 |     api_metric_integration_tests: 1_of_1_passed
214 |     worker_metric_integration_tests: 4_of_4_passed_locally
215 |     provider_metric_integration_tests: 4_of_4_passed_locally
216 |     repository_metric_helper_tests: 3_of_3_passed_locally
217 |     queue_snapshot_postgresql_tests: 3_source_tests_remote_ci_pending
218 |     lease_heartbeat_unit_tests: 3_of_3_passed
219 |     provider_abort_on_lease_loss_tests: 3_of_3_passed
220 |     durable_retention_input_tests: 4_of_4_passed
221 |     durable_retention_postgresql_tests: 4_of_4_passed
222 |     builds: 20_of_20_passed_locally_remote_ci_pending
223 |     php_syntax: passed_locally_remote_ci_pending
224 |     high_critical_dependency_check: passed_locally_remote_ci_pending
225 |     moderate_dependency_findings: 5
226 |     documentation_links: 61_reviewed_0_known_broken
227 |   continuation_bundle:
228 |     status: refreshed_locally
229 |     canonical_main_sync: verified_at_2e71b970e8084fa5e9baa6d3adf74f261301b177
230 |     local_exporter: completed_after_repository_provider_queue_metrics_docs
231 |   remote_ci:
232 |     status: passed
233 |     run_id: 30327450803
234 |     job_id: 90175680964
235 |     job: verify
236 |     tested_head: 2d3a0dd40f0f9be8d8749f3ef22f9f2448967206
237 |     merged_main_commit: 02be8d2aae6c65a4ddce82f1a7a260993ad1252f
238 |     completed: 2026-07-28
239 |     steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_sixty_one_assertions_twenty_builds_php_all_passed
240 |   source_validation:
241 |     status: local_passed_remote_ci_pending
242 |     branch: feat/repository-provider-queue-metrics
243 |     tested_head: pending_feature_commit
244 |     completed: 2026-07-28
245 |     steps: format_lint_thirteen_migration_manifest_architecture_twenty_typechecks_thirty_one_test_tasks_twenty_builds_audit_php_yaml_links_and_secret_scan_passed_locally
246 |     shared_observability_tests: 11_of_11_passed
247 |     provider_metric_integrations: 4_of_4_passed
248 |     repository_operation_metric_tests: passed
249 |     queue_snapshot_postgresql_tests: 3_source_tests_remote_ci_pending
250 |     metric_sink_failure_isolation: passed
251 |   pending_follow_up:
252 |     - provision_retention_maintenance_identity_and_approved_windows_holds_monitoring_recovery
253 |     - observability_traces_exporter_collector_broader_api_domain_repository_metrics_and_managed_backend
254 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
255 |     - pilot_outcome_collection_and_calibration
256 |
257 | migrations:
258 |   immutable: true
259 |   manifest: packages/database/migrations/manifest.json
260 |   history_checksum_column: checksum_sha256_not_null
261 |   files:
262 |     - packages/database/migrations/0001_foundation.sql
263 |     - packages/database/migrations/0002_courier.sql
264 |     - packages/database/migrations/0003_risk.sql
265 |     - packages/database/migrations/0004_verification_events.sql
266 |     - packages/database/migrations/0005_durable_operations.sql
267 |     - packages/database/migrations/0006_browser_access.sql
268 |     - packages/database/migrations/0007_worker_leases.sql
269 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
270 |     - packages/database/migrations/0009_verification_delivery_queue.sql
271 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
272 |     - packages/database/migrations/0011_native_shadow_pilot.sql
273 |     - packages/database/migrations/0012_durable_work_replays.sql
274 |     - packages/database/migrations/0013_durable_work_archives.sql
275 |
276 | accepted_adrs:
277 |   - docs/adr/0006-production-deployment-topology.md
278 |   - docs/adr/0007-managed-postgresql-production-baseline.md
279 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
280 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
281 |   - docs/adr/0010-vendor-neutral-production-observability.md
282 |   - docs/adr/0011-selected-source-shadow-pilot.md
283 |   - docs/adr/0012-durable-work-dead-letter-operations.md
284 |
285 | external_dependencies:
286 |   - authorized_steadfast_test_account
287 |   - provider_authorization_review
288 |   - deployment_platform_account_region_and_budget
289 |   - managed_postgresql_provider_and_service_tier
290 |   - managed_secret_store_and_kms_vault_provider
291 |   - observability_backend_and_retention_policy
292 |   - otp_provider_account
293 |   - pilot_outcome_data
294 |
295 | next_milestone:
296 |   name: production-hardening-and-pilot-readiness
297 |   tasks:
298 |     - select_and_provision_accepted_infrastructure_providers
299 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
300 |     - validate_steadfast_with_an_authorized_account
301 |     - implement_the_selected_otp_provider_adapter
302 |     - add_distributed_cache_only_when_replica_coordination_requires_it
303 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
304 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
305 |     - calibrate_decisions_before_broad_automatic_blocking
306 |
307 | release_policy:
308 |   branch: main
309 |   before_push:
310 |     - npm_run_verify_passes
311 |     - documentation_and_tracker_are_current
312 |     - repository_review_is_clean
313 |   rules:
314 |     - no_force_push_to_main
315 |     - do_not_edit_applied_migrations
316 |     - use_descriptive_commits
317 |
318 | notes:
319 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
320 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
321 |   - github_connector_reports_public_visibility_while_expected_state_is_private
322 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
323 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
324 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
325 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
326 |   - webhook_event_payloads_do_not_include_raw_phone_values
327 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
328 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
329 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
330 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
331 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
332 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
333 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
334 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
335 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
336 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
337 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
338 |   - selected_otp_provider_module_and_credentials_remain_external
339 |   - migration_files_are_bound_to_a_committed_sha256_manifest
340 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
341 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
342 |   - migration_execution_uses_one_session_advisory_lock
343 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
344 |   - managed_provider_point_in_time_restore_drill_remains_external
345 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
346 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
347 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
348 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
349 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
350 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
351 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
352 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
353 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
354 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
355 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
356 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
357 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
358 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
359 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
360 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
361 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
362 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
363 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
364 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
365 |   - durable_replay_never_performs_provider_or_webhook_network_io
366 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
367 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
368 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
369 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
370 |   - structured_log_redaction_is_canonicalized_in_packages_observability
371 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
372 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
373 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
374 |   - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
375 |   - lease_renewal_interval_must_not_exceed_half_the_lease
376 |   - heartbeat_renewal_and_final_state_transitions_do_not_overlap
377 |   - durable_retention_cutoff_has_a_twenty_four_hour_minimum_safety_floor
378 |   - durable_retention_batches_are_globally_bounded_to_five_hundred
379 |   - completed_source_retention_baseline_is_thirty_days_pending_approval
380 |   - failed_source_retention_baseline_is_one_hundred_eighty_days_pending_approval
381 |   - archive_evidence_does_not_replace_backup_or_point_in_time_recovery
382 |   - vendor_neutral_metrics_use_only_finite_descriptor_owned_attributes
383 |   - api_metrics_use_method_canonical_route_and_status_class_only
384 |   - worker_metrics_use_worker_type_operation_and_outcome_only
385 |   - pro_context_was_refreshed_after_vendor_neutral_metrics_documentation
386 |   - update_this_file_after_every_material_milestone
387 |
```

### workers/courier-session-worker/src/index.test.ts

Bytes: 3455
SHA-256: 1f842fb7e4b8dbf68b0bf75dd678d0ac960488bdbc6f72f9a85265963a6e70a6
Lines: 1-100 of 100

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import { createMetricRecorder } from '@ozzyl/observability';
  3 | import { AesGcmEnvelopeCipher, CourierSessionWorker } from './index.js';
  4 | function parseMetricLine(line: string): unknown {
  5 |   return JSON.parse(line) as unknown;
  6 | }
  7 |
  8 | describe('AesGcmEnvelopeCipher', () => {
  9 |   it('binds encrypted session data to an account context', () => {
 10 |     const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
 11 |     const sampleValue = 'x'.repeat(24);
 12 |     const encrypted = cipher.encrypt(
 13 |       { sessionCookie: sampleValue, xsrfToken: sampleValue },
 14 |       'courier-session:acc_1',
 15 |     );
 16 |     expect(encrypted).not.toContain(sampleValue);
 17 |     expect(
 18 |       cipher.decrypt<{ sessionCookie: string }>(encrypted, 'courier-session:acc_1').sessionCookie,
 19 |     ).toBe(sampleValue);
 20 |     expect(() => cipher.decrypt(encrypted, 'courier-session:acc_2')).toThrow();
 21 |   });
 22 | });
 23 |
 24 | describe('CourierSessionWorker metrics', () => {
 25 |   it('records bounded refresh completion without account or credential attributes', async () => {
 26 |     const metricLines: string[] = [];
 27 |     const ticks = [50, 55, 65, 70];
 28 |     const sampleValue = 'x'.repeat(24);
 29 |     const credentialFixture = ['fixture', 'credential'].join('-');
 30 |     const worker = new CourierSessionWorker({
 31 |       credentials: {
 32 |         load: vi.fn(async () => ({
 33 |           email: 'fixture@example.test',
 34 |           password: credentialFixture,
 35 |         })),
 36 |       },
 37 |       vault: { save: vi.fn(async () => undefined) },
 38 |       health: {
 39 |         markConnected: vi.fn(async () => undefined),
 40 |         markFailure: vi.fn(async () => undefined),
 41 |       },
 42 |       cipher: new AesGcmEnvelopeCipher(Buffer.alloc(32, 8), 'test-v1'),
 43 |       driver: {
 44 |         login: vi.fn(async () => ({
 45 |           sessionCookie: sampleValue,
 46 |           xsrfToken: sampleValue,
 47 |           validatedAt: '2026-07-28T00:00:00.000Z',
 48 |         })),
 49 |       },
 50 |       monotonicNow: () => ticks.shift() ?? 70,
 51 |       metrics: createMetricRecorder({
 52 |         service: 'courier-session-worker-test',
 53 |         environment: 'test',
 54 |         write: (line) => metricLines.push(line),
 55 |       }),
 56 |     });
 57 |
 58 |     await expect(worker.refresh('account_sensitive')).resolves.toEqual({ status: 'connected' });
 59 |     expect(metricLines.map(parseMetricLine)).toEqual([
 60 |       expect.objectContaining({
 61 |         name: 'ozzyl.provider.operations',
 62 |         attributes: {
 63 |           provider_type: 'courier_browser',
 64 |           operation: 'login',
 65 |           outcome: 'success',
 66 |         },
 67 |       }),
 68 |       expect.objectContaining({
 69 |         name: 'ozzyl.provider.operation.duration',
 70 |         value: 10,
 71 |         attributes: {
 72 |           provider_type: 'courier_browser',
 73 |           operation: 'login',
 74 |           outcome: 'success',
 75 |         },
 76 |       }),
 77 |       expect.objectContaining({
 78 |         name: 'ozzyl.worker.operations',
 79 |         attributes: {
 80 |           worker_type: 'courier_session',
 81 |           operation: 'refresh',
 82 |           outcome: 'completed',
 83 |         },
 84 |       }),
 85 |       expect.objectContaining({
 86 |         name: 'ozzyl.worker.operation.duration',
 87 |         value: 20,
 88 |         attributes: {
 89 |           worker_type: 'courier_session',
 90 |           operation: 'refresh',
 91 |           outcome: 'completed',
 92 |         },
 93 |       }),
 94 |     ]);
 95 |     expect(metricLines.join('\n')).not.toContain('account_sensitive');
 96 |     expect(metricLines.join('\n')).not.toContain(credentialFixture);
 97 |     expect(metricLines.join('\n')).not.toContain('fixture@example.test');
 98 |   });
 99 | });
100 |
```

### workers/courier-session-worker/src/index.ts

Bytes: 7588
SHA-256: 0fc37eab928fbe10474374cf44917a357b9f6139df6a2366ea24766abe5f462b
Lines: 1-228 of 228

```typescript
  1 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  2 | import { chromium } from 'playwright';
  3 | import type { CourierSession } from '@ozzyl/courier-adapters';
  4 | import {
  5 |   recordProviderOperation,
  6 |   recordWorkerOperation,
  7 |   type MetricRecorder,
  8 | } from '@ozzyl/observability';
  9 |
 10 | export type SessionFailureCode =
 11 |   | 'INVALID_CREDENTIALS'
 12 |   | 'CAPTCHA_REQUIRED'
 13 |   | 'TWO_FACTOR_REQUIRED'
 14 |   | 'SELECTOR_CHANGED'
 15 |   | 'SESSION_NOT_CREATED'
 16 |   | 'PROVIDER_UNAVAILABLE';
 17 |
 18 | export class SessionDriverError extends Error {
 19 |   constructor(
 20 |     readonly code: SessionFailureCode,
 21 |     message: string,
 22 |     readonly retryable: boolean,
 23 |   ) {
 24 |     super(message);
 25 |   }
 26 | }
 27 |
 28 | export interface SteadfastCredentials {
 29 |   email: string;
 30 |   password: string;
 31 | }
 32 |
 33 | export interface SessionDriverResult extends CourierSession {
 34 |   validatedAt: string;
 35 | }
 36 |
 37 | export interface SessionVault {
 38 |   save(accountId: string, encryptedPayload: string, keyVersion: string): Promise<void>;
 39 | }
 40 |
 41 | export interface CredentialSource {
 42 |   load(accountId: string): Promise<SteadfastCredentials | null>;
 43 | }
 44 |
 45 | export interface AccountHealthStore {
 46 |   markConnected(accountId: string, at: Date): Promise<void>;
 47 |   markFailure(accountId: string, code: SessionFailureCode, at: Date): Promise<void>;
 48 | }
 49 |
 50 | export { AesGcmEnvelopeCipher };
 51 |
 52 | export class SteadfastSessionDriver {
 53 |   async login(credentials: SteadfastCredentials): Promise<SessionDriverResult> {
 54 |     const browser = await chromium.launch({ headless: true });
 55 |     const context = await browser.newContext({
 56 |       userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131 Safari/537.36',
 57 |     });
 58 |     try {
 59 |       const page = await context.newPage();
 60 |       await page.goto('https://steadfast.com.bd/login', {
 61 |         waitUntil: 'domcontentloaded',
 62 |         timeout: 30_000,
 63 |       });
 64 |
 65 |       const captchaVisible = await page
 66 |         .locator('iframe[src*="captcha"], text=/captcha/i')
 67 |         .first()
 68 |         .isVisible()
 69 |         .catch(() => false);
 70 |       if (captchaVisible) {
 71 |         throw new SessionDriverError('CAPTCHA_REQUIRED', 'Steadfast requires CAPTCHA', false);
 72 |       }
 73 |
 74 |       const emailInput = page.locator('input[type="email"], input[name="email"]').first();
 75 |       const passwordInput = page.locator('input[type="password"]').first();
 76 |       if ((await emailInput.count()) === 0 || (await passwordInput.count()) === 0) {
 77 |         throw new SessionDriverError('SELECTOR_CHANGED', 'Steadfast login fields changed', false);
 78 |       }
 79 |
 80 |       await emailInput.fill(credentials.email);
 81 |       await passwordInput.fill(credentials.password);
 82 |       const submit = page.locator('button[type="submit"], button:has-text("Login")').first();
 83 |       if ((await submit.count()) === 0) {
 84 |         throw new SessionDriverError('SELECTOR_CHANGED', 'Steadfast login button changed', false);
 85 |       }
 86 |
 87 |       await Promise.all([
 88 |         page.waitForLoadState('domcontentloaded', { timeout: 20_000 }).catch(() => undefined),
 89 |         submit.click(),
 90 |       ]);
 91 |
 92 |       const bodyText = (
 93 |         await page
 94 |           .locator('body')
 95 |           .innerText()
 96 |           .catch(() => '')
 97 |       ).toLowerCase();
 98 |       if (bodyText.includes('invalid') && bodyText.includes('password')) {
 99 |         throw new SessionDriverError(
100 |           'INVALID_CREDENTIALS',
101 |           'Steadfast rejected credentials',
102 |           false,
103 |         );
104 |       }
105 |       if (bodyText.includes('two-factor') || bodyText.includes('verification code')) {
106 |         throw new SessionDriverError(
107 |           'TWO_FACTOR_REQUIRED',
108 |           'Steadfast requires two-factor login',
109 |           false,
110 |         );
111 |       }
112 |
113 |       const cookies = await context.cookies('https://steadfast.com.bd');
114 |       const sessionCookie = cookies.find((cookie) => cookie.name === 'steadfast_courier_session');
115 |       const xsrfToken = cookies.find((cookie) => cookie.name === 'XSRF-TOKEN');
116 |       if (!sessionCookie?.value || !xsrfToken?.value) {
117 |         throw new SessionDriverError(
118 |           'SESSION_NOT_CREATED',
119 |           'Steadfast did not create a valid session',
120 |           true,
121 |         );
122 |       }
123 |
124 |       return {
125 |         sessionCookie: sessionCookie.value,
126 |         xsrfToken: xsrfToken.value,
127 |         ...(sessionCookie.expires > 0
128 |           ? { expiresAt: new Date(sessionCookie.expires * 1_000).toISOString() }
129 |           : {}),
130 |         validatedAt: new Date().toISOString(),
131 |       };
132 |     } catch (error) {
133 |       if (error instanceof SessionDriverError) throw error;
134 |       throw new SessionDriverError(
135 |         'PROVIDER_UNAVAILABLE',
136 |         'Steadfast login automation failed',
137 |         true,
138 |       );
139 |     } finally {
140 |       await browser.close();
141 |     }
142 |   }
143 | }
144 |
145 | export class CourierSessionWorker {
146 |   constructor(
147 |     private readonly dependencies: {
148 |       credentials: CredentialSource;
149 |       vault: SessionVault;
150 |       health: AccountHealthStore;
151 |       cipher: AesGcmEnvelopeCipher;
152 |       driver: SteadfastSessionDriver;
153 |       metrics?: MetricRecorder;
154 |       monotonicNow?: () => number;
155 |     },
156 |   ) {}
157 |
158 |   async refresh(accountId: string): Promise<{ status: 'connected' }> {
159 |     const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
160 |     const startedAt = monotonicNow();
161 |     try {
162 |       const result = await this.refreshSession(accountId);
163 |       recordWorkerOperation(this.dependencies.metrics, {
164 |         workerType: 'courier_session',
165 |         operation: 'refresh',
166 |         outcome: 'completed',
167 |         durationMs: monotonicNow() - startedAt,
168 |       });
169 |       return result;
170 |     } catch (error) {
171 |       recordWorkerOperation(this.dependencies.metrics, {
172 |         workerType: 'courier_session',
173 |         operation: 'refresh',
174 |         outcome: 'failed',
175 |         durationMs: monotonicNow() - startedAt,
176 |       });
177 |       throw error;
178 |     }
179 |   }
180 |
181 |   private async refreshSession(accountId: string): Promise<{ status: 'connected' }> {
182 |     const credentials = await this.dependencies.credentials.load(accountId);
183 |     if (!credentials) {
184 |       const error = new SessionDriverError(
185 |         'INVALID_CREDENTIALS',
186 |         'Courier credentials are not configured',
187 |         false,
188 |       );
189 |       await this.dependencies.health.markFailure(accountId, error.code, new Date());
190 |       throw error;
191 |     }
192 |
193 |     try {
194 |       const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
195 |       const providerStartedAt = monotonicNow();
196 |       let session: SessionDriverResult;
197 |       try {
198 |         session = await this.dependencies.driver.login(credentials);
199 |         recordProviderOperation(this.dependencies.metrics, {
200 |           providerType: 'courier_browser',
201 |           operation: 'login',
202 |           outcome: 'success',
203 |           durationMs: monotonicNow() - providerStartedAt,
204 |         });
205 |       } catch (error) {
206 |         recordProviderOperation(this.dependencies.metrics, {
207 |           providerType: 'courier_browser',
208 |           operation: 'login',
209 |           outcome:
210 |             error instanceof SessionDriverError && !error.retryable
211 |               ? 'permanent_failure'
212 |               : 'retryable_failure',
213 |           durationMs: monotonicNow() - providerStartedAt,
214 |         });
215 |         throw error;
216 |       }
217 |       const encrypted = this.dependencies.cipher.encrypt(session, `courier-session:${accountId}`);
218 |       await this.dependencies.vault.save(accountId, encrypted, this.dependencies.cipher.keyVersion);
219 |       await this.dependencies.health.markConnected(accountId, new Date());
220 |       return { status: 'connected' };
221 |     } catch (error) {
222 |       const code = error instanceof SessionDriverError ? error.code : 'PROVIDER_UNAVAILABLE';
223 |       await this.dependencies.health.markFailure(accountId, code, new Date());
224 |       throw error;
225 |     }
226 |   }
227 | }
228 |
```

### workers/courier-sync-worker/src/index.test.ts

Bytes: 6612
SHA-256: 8191a0b4409a0d28678ffe4c1cf1aa90fe19e4b52408096d233d53bd8ccda91f
Lines: 1-207 of 207

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import { createMetricRecorder } from '@ozzyl/observability';
  3 | import { CourierSyncWorker, toRiskCourierFeatures } from './index.js';
  4 | function parseMetricLine(line: string): unknown {
  5 |   return JSON.parse(line) as unknown;
  6 | }
  7 |
  8 | describe('toRiskCourierFeatures', () => {
  9 |   it('returns explicit missing features when no observations exist', () => {
 10 |     expect(toRiskCourierFeatures([])).toMatchObject({
 11 |       providerCount: 0,
 12 |       freshness: 'missing',
 13 |       sourceConfidence: 0,
 14 |     });
 15 |   });
 16 |
 17 |   it('aggregates normalized provider observations', () => {
 18 |     const future = new Date(Date.now() + 60_000).toISOString();
 19 |     const observedAt = new Date().toISOString();
 20 |     const result = toRiskCourierFeatures([
 21 |       {
 22 |         provider: 'steadfast',
 23 |         totalOrders: 10,
 24 |         deliveredOrders: 8,
 25 |         returnedOrders: 2,
 26 |         cancelledBeforeShipping: 0,
 27 |         successRate: 0.8,
 28 |         confidence: 0.8,
 29 |         source: 'merchant_session',
 30 |         observedAt,
 31 |         expiresAt: future,
 32 |       },
 33 |       {
 34 |         provider: 'pathao',
 35 |         totalOrders: 5,
 36 |         deliveredOrders: 4,
 37 |         returnedOrders: 1,
 38 |         cancelledBeforeShipping: 0,
 39 |         successRate: 0.8,
 40 |         confidence: 0.6,
 41 |         source: 'merchant_api',
 42 |         observedAt,
 43 |         expiresAt: future,
 44 |       },
 45 |     ]);
 46 |     expect(result).toMatchObject({
 47 |       totalOrders: 15,
 48 |       deliveredOrders: 12,
 49 |       returnedOrders: 3,
 50 |       providerCount: 2,
 51 |       freshness: 'fresh',
 52 |       sourceConfidence: 0.7,
 53 |     });
 54 |   });
 55 | });
 56 |
 57 | describe('CourierSyncWorker metrics', () => {
 58 |   it('records cached completion without job, store, phone, or account identifiers', async () => {
 59 |     const metricLines: string[] = [];
 60 |     const ticks = [20, 32];
 61 |     const observation = {
 62 |       provider: 'steadfast' as const,
 63 |       totalOrders: 10,
 64 |       deliveredOrders: 8,
 65 |       returnedOrders: 2,
 66 |       cancelledBeforeShipping: 0,
 67 |       successRate: 0.8,
 68 |       confidence: 0.8,
 69 |       source: 'merchant_session' as const,
 70 |       observedAt: '2026-07-28T00:00:00.000Z',
 71 |       expiresAt: '2026-07-28T01:00:00.000Z',
 72 |     };
 73 |     const health = {
 74 |       started: vi.fn(async () => undefined),
 75 |       completed: vi.fn(async () => undefined),
 76 |       failed: vi.fn(async () => undefined),
 77 |     };
 78 |     const worker = new CourierSyncWorker({
 79 |       adapters: new Map(),
 80 |       observations: {
 81 |         findFresh: vi.fn(async () => observation),
 82 |         save: vi.fn(async () => undefined),
 83 |       },
 84 |       health,
 85 |       monotonicNow: () => ticks.shift() ?? 32,
 86 |       metrics: createMetricRecorder({
 87 |         service: 'courier-sync-worker-test',
 88 |         environment: 'test',
 89 |         write: (line) => metricLines.push(line),
 90 |       }),
 91 |     });
 92 |
 93 |     await expect(
 94 |       worker.sync({
 95 |         jobId: 'cjob_sensitive',
 96 |         storeId: 'store_sensitive',
 97 |         courierAccountId: 'account_sensitive',
 98 |         provider: 'steadfast',
 99 |         phone: '01700000000',
100 |         phoneHash: 'hash_sensitive',
101 |       }),
102 |     ).resolves.toMatchObject({ cached: true });
103 |
104 |     expect(health.completed).toHaveBeenCalledOnce();
105 |     expect(metricLines.map(parseMetricLine)).toEqual([
106 |       expect.objectContaining({
107 |         name: 'ozzyl.worker.operations',
108 |         attributes: { worker_type: 'courier_sync', operation: 'sync', outcome: 'cached' },
109 |       }),
110 |       expect.objectContaining({
111 |         name: 'ozzyl.worker.operation.duration',
112 |         value: 12,
113 |         attributes: { worker_type: 'courier_sync', operation: 'sync', outcome: 'cached' },
114 |       }),
115 |     ]);
116 |     expect(metricLines.join('\n')).not.toContain('sensitive');
117 |     expect(metricLines.join('\n')).not.toContain('01700000000');
118 |   });
119 |
120 |   it('records courier provider success and retryable failure without identifiers', async () => {
121 |     const observation = {
122 |       provider: 'steadfast' as const,
123 |       totalOrders: 1,
124 |       deliveredOrders: 1,
125 |       returnedOrders: 0,
126 |       cancelledBeforeShipping: 0,
127 |       successRate: 1,
128 |       confidence: 0.8,
129 |       source: 'merchant_session' as const,
130 |       observedAt: '2026-07-28T00:00:00.000Z',
131 |       expiresAt: '2026-07-28T01:00:00.000Z',
132 |     };
133 |     const metricLines: string[] = [];
134 |     const ticks = [10, 12, 20, 30, 40, 42, 50, 60];
135 |     const adapter = {
136 |       provider: 'steadfast' as const,
137 |       testConnection: vi.fn(async () => ({
138 |         healthy: true,
139 |         status: 'connected' as const,
140 |         checkedAt: '2026-07-28T00:00:00.000Z',
141 |       })),
142 |       fetchCustomerObservation: vi
143 |         .fn()
144 |         .mockResolvedValueOnce(observation)
145 |         .mockRejectedValueOnce(Object.assign(new Error('temporary outage'), { retryable: true })),
146 |     };
147 |     const health = {
148 |       started: vi.fn(async () => undefined),
149 |       completed: vi.fn(async () => undefined),
150 |       failed: vi.fn(async () => undefined),
151 |     };
152 |     const worker = new CourierSyncWorker({
153 |       adapters: new Map([['steadfast', adapter]]),
154 |       observations: {
155 |         findFresh: vi.fn(async () => null),
156 |         save: vi.fn(async () => undefined),
157 |       },
158 |       health,
159 |       monotonicNow: () => ticks.shift() ?? 60,
160 |       metrics: createMetricRecorder({
161 |         service: 'courier-sync-worker-test',
162 |         environment: 'test',
163 |         write: (line) => metricLines.push(line),
164 |       }),
165 |     });
166 |     const input = {
167 |       jobId: 'cjob_sensitive',
168 |       storeId: 'store_sensitive',
169 |       courierAccountId: 'account_sensitive',
170 |       provider: 'steadfast',
171 |       phone: '01700000000',
172 |       phoneHash: 'hash_sensitive',
173 |       force: true,
174 |     };
175 |
176 |     await expect(worker.sync(input)).resolves.toMatchObject({ cached: false });
177 |     await expect(worker.sync(input)).rejects.toThrow('temporary outage');
178 |
179 |     const providerPoints = metricLines
180 |       .map(parseMetricLine)
181 |       .filter(
182 |         (point): point is { name: string; attributes: Record<string, unknown> } =>
183 |           typeof point === 'object' && point !== null && 'name' in point && 'attributes' in point,
184 |       )
185 |       .filter((point) => point.name === 'ozzyl.provider.operations');
186 |     expect(providerPoints).toEqual([
187 |       expect.objectContaining({
188 |         attributes: {
189 |           provider_type: 'courier_api',
190 |           operation: 'lookup',
191 |           outcome: 'success',
192 |         },
193 |       }),
194 |       expect.objectContaining({
195 |         attributes: {
196 |           provider_type: 'courier_api',
197 |           operation: 'lookup',
198 |           outcome: 'retryable_failure',
199 |         },
200 |       }),
201 |     ]);
202 |     expect(metricLines.join('\n')).not.toContain('sensitive');
203 |     expect(metricLines.join('\n')).not.toContain('01700000000');
204 |     expect(metricLines.join('\n')).not.toContain('temporary outage');
205 |   });
206 | });
207 |
```

### workers/courier-sync-worker/src/index.ts

Bytes: 5621
SHA-256: d6c7f9657648a3374382689990c280ef9247e158c1b0e3dc0e162229d8dd5b24
Lines: 1-167 of 167

```typescript
  1 | import type { CourierAdapter, CourierObservation } from '@ozzyl/courier-adapters';
  2 | import {
  3 |   recordProviderOperation,
  4 |   recordWorkerOperation,
  5 |   type MetricRecorder,
  6 | } from '@ozzyl/observability';
  7 |
  8 | export interface ObservationRepository {
  9 |   findFresh(input: {
 10 |     storeId: string;
 11 |     provider: string;
 12 |     phoneHash: string;
 13 |     at: Date;
 14 |   }): Promise<CourierObservation | null>;
 15 |   save(input: {
 16 |     storeId: string;
 17 |     phoneHash: string;
 18 |     observation: CourierObservation;
 19 |   }): Promise<void>;
 20 | }
 21 |
 22 | export interface SyncJobHealth {
 23 |   started(jobId: string, at: Date): Promise<void>;
 24 |   completed(jobId: string, at: Date): Promise<void>;
 25 |   failed(jobId: string, code: string, retryable: boolean, at: Date): Promise<void>;
 26 | }
 27 |
 28 | export interface CourierSyncInput {
 29 |   jobId: string;
 30 |   storeId: string;
 31 |   courierAccountId: string;
 32 |   provider: string;
 33 |   phone: string;
 34 |   phoneHash: string;
 35 |   force?: boolean;
 36 |   signal?: AbortSignal;
 37 | }
 38 |
 39 | export interface CourierSyncResult {
 40 |   observation: CourierObservation;
 41 |   cached: boolean;
 42 | }
 43 |
 44 | export class CourierSyncWorker {
 45 |   constructor(
 46 |     private readonly dependencies: {
 47 |       adapters: Map<string, CourierAdapter>;
 48 |       observations: ObservationRepository;
 49 |       health: SyncJobHealth;
 50 |       metrics?: MetricRecorder;
 51 |       monotonicNow?: () => number;
 52 |     },
 53 |   ) {}
 54 |
 55 |   async sync(input: CourierSyncInput): Promise<CourierSyncResult> {
 56 |     const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
 57 |     const startedAt = monotonicNow();
 58 |     try {
 59 |       const result = await this.syncJob(input);
 60 |       recordWorkerOperation(this.dependencies.metrics, {
 61 |         workerType: 'courier_sync',
 62 |         operation: 'sync',
 63 |         outcome: result.cached ? 'cached' : 'completed',
 64 |         durationMs: monotonicNow() - startedAt,
 65 |       });
 66 |       return result;
 67 |     } catch (error) {
 68 |       recordWorkerOperation(this.dependencies.metrics, {
 69 |         workerType: 'courier_sync',
 70 |         operation: 'sync',
 71 |         outcome: 'failed',
 72 |         durationMs: monotonicNow() - startedAt,
 73 |       });
 74 |       throw error;
 75 |     }
 76 |   }
 77 |
 78 |   private async syncJob(input: CourierSyncInput): Promise<CourierSyncResult> {
 79 |     await this.dependencies.health.started(input.jobId, new Date());
 80 |     try {
 81 |       if (!input.force) {
 82 |         const cached = await this.dependencies.observations.findFresh({
 83 |           storeId: input.storeId,
 84 |           provider: input.provider,
 85 |           phoneHash: input.phoneHash,
 86 |           at: new Date(),
 87 |         });
 88 |         if (cached) {
 89 |           await this.dependencies.health.completed(input.jobId, new Date());
 90 |           return { observation: cached, cached: true };
 91 |         }
 92 |       }
 93 |
 94 |       const adapter = this.dependencies.adapters.get(input.provider);
 95 |       if (!adapter) throw new Error(`Courier adapter ${input.provider} is not registered`);
 96 |       const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
 97 |       const providerStartedAt = monotonicNow();
 98 |       let observation: CourierObservation;
 99 |       try {
100 |         observation = await adapter.fetchCustomerObservation({
101 |           accountId: input.courierAccountId,
102 |           phone: input.phone,
103 |           ...(input.signal === undefined ? {} : { signal: input.signal }),
104 |         });
105 |         recordProviderOperation(this.dependencies.metrics, {
106 |           providerType: 'courier_api',
107 |           operation: 'lookup',
108 |           outcome: 'success',
109 |           durationMs: monotonicNow() - providerStartedAt,
110 |         });
111 |       } catch (error) {
112 |         const providerError = error as { retryable?: unknown };
113 |         recordProviderOperation(this.dependencies.metrics, {
114 |           providerType: 'courier_api',
115 |           operation: 'lookup',
116 |           outcome: providerError.retryable === true ? 'retryable_failure' : 'permanent_failure',
117 |           durationMs: monotonicNow() - providerStartedAt,
118 |         });
119 |         throw error;
120 |       }
121 |       await this.dependencies.observations.save({
122 |         storeId: input.storeId,
123 |         phoneHash: input.phoneHash,
124 |         observation,
125 |       });
126 |       await this.dependencies.health.completed(input.jobId, new Date());
127 |       return { observation, cached: false };
128 |     } catch (error) {
129 |       const providerError = error as { code?: unknown; retryable?: unknown };
130 |       const code = typeof providerError.code === 'string' ? providerError.code : 'SYNC_FAILED';
131 |       const retryable = providerError.retryable === true;
132 |       await this.dependencies.health.failed(input.jobId, code, retryable, new Date());
133 |       throw error;
134 |     }
135 |   }
136 | }
137 |
138 | export function toRiskCourierFeatures(observations: CourierObservation[]) {
139 |   if (observations.length === 0) {
140 |     return {
141 |       totalOrders: 0,
142 |       deliveredOrders: 0,
143 |       returnedOrders: 0,
144 |       cancelledBeforeShipping: 0,
145 |       providerCount: 0,
146 |       freshness: 'missing' as const,
147 |       sourceConfidence: 0,
148 |     };
149 |   }
150 |
151 |   const now = Date.now();
152 |   const fresh = observations.every((observation) => Date.parse(observation.expiresAt) > now);
153 |   return {
154 |     totalOrders: observations.reduce((sum, value) => sum + value.totalOrders, 0),
155 |     deliveredOrders: observations.reduce((sum, value) => sum + value.deliveredOrders, 0),
156 |     returnedOrders: observations.reduce((sum, value) => sum + value.returnedOrders, 0),
157 |     cancelledBeforeShipping: observations.reduce(
158 |       (sum, value) => sum + value.cancelledBeforeShipping,
159 |       0,
160 |     ),
161 |     providerCount: new Set(observations.map((observation) => observation.provider)).size,
162 |     freshness: fresh ? ('fresh' as const) : ('stale' as const),
163 |     sourceConfidence:
164 |       observations.reduce((sum, value) => sum + value.confidence, 0) / observations.length,
165 |   };
166 | }
167 |
```

### workers/courier-sync-worker/src/postgres.test.ts

Bytes: 11579
SHA-256: caab53d6f124c516122f4c3c4dbf1b0ebed862ef1358264a0acc78643dce9993
Lines: 1-308 of 308

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
  3 | import { Pool } from 'pg';
  4 | import { CourierJobLeaseError, PostgresCourierJobQueue } from './postgres.js';
  5 |
  6 | const databaseUrl = process.env.DATABASE_URL;
  7 | const integration = describe.skipIf(!databaseUrl);
  8 |
  9 | integration('PostgreSQL courier job leases', () => {
 10 |   const pool = new Pool({ connectionString: databaseUrl, max: 12 });
 11 |   const suffix = randomUUID();
 12 |   const organizationId = `org_worker_${suffix}`;
 13 |   const storeId = `sto_worker_${suffix}`;
 14 |   const otherStoreId = `sto_worker_other_${suffix}`;
 15 |   const accountId = `ca_worker_${suffix}`;
 16 |
 17 |   beforeAll(async () => {
 18 |     const client = await pool.connect();
 19 |     try {
 20 |       await client.query('begin');
 21 |       await client.query(
 22 |         `insert into organizations (id, name, slug) values ($1, 'Worker Lease Merchant', $2)`,
 23 |         [organizationId, `worker-lease-${suffix}`],
 24 |       );
 25 |       await client.query(
 26 |         `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom')`,
 27 |         [storeId, organizationId],
 28 |       );
 29 |       await client.query(
 30 |         `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Other', 'custom')`,
 31 |         [otherStoreId, organizationId],
 32 |       );
 33 |       await client.query(
 34 |         `insert into courier_accounts (id, store_id, provider, status) values ($1, $2, 'steadfast', 'connected')`,
 35 |         [accountId, storeId],
 36 |       );
 37 |       await client.query('commit');
 38 |     } catch (error) {
 39 |       await client.query('rollback');
 40 |       throw error;
 41 |     } finally {
 42 |       client.release();
 43 |     }
 44 |   });
 45 |
 46 |   afterEach(async () => {
 47 |     await pool.query('delete from courier_jobs where courier_account_id = $1', [accountId]);
 48 |   });
 49 |
 50 |   afterAll(async () => {
 51 |     await pool.query('delete from organizations where id = $1', [organizationId]);
 52 |     await pool.end();
 53 |   });
 54 |
 55 |   it('lets competing workers claim different due jobs and does not steal fresh leases', async () => {
 56 |     const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
 57 |     const at = new Date('2026-07-17T00:00:00.000Z');
 58 |     const firstJobId = await insertJob('compete-a', { scheduledAt: at });
 59 |     const secondJobId = await insertJob('compete-b', { scheduledAt: at });
 60 |
 61 |     const [first, second] = await Promise.all([
 62 |       queue.claim(`worker-a-${suffix}`, at),
 63 |       queue.claim(`worker-b-${suffix}`, at),
 64 |     ]);
 65 |
 66 |     expect(first).not.toBeNull();
 67 |     expect(second).not.toBeNull();
 68 |     expect(new Set([first?.id, second?.id])).toEqual(new Set([firstJobId, secondJobId]));
 69 |     await expect(queue.claim(`worker-c-${suffix}`, at)).resolves.toBeNull();
 70 |
 71 |     const stored = await pool.query<{ status: string; claimed_by: string }>(
 72 |       `select status, claimed_by from courier_jobs where id = any($1::text[]) order by id`,
 73 |       [[firstJobId, secondJobId]],
 74 |     );
 75 |     expect(stored.rows.every((row) => row.status === 'claimed')).toBe(true);
 76 |     expect(new Set(stored.rows.map((row) => row.claimed_by))).toEqual(
 77 |       new Set([`worker-a-${suffix}`, `worker-b-${suffix}`]),
 78 |     );
 79 |   });
 80 |
 81 |   it('reclaims an expired processing lease and rejects the previous owner', async () => {
 82 |     const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
 83 |     const at = new Date('2026-07-17T01:00:00.000Z');
 84 |     const jobId = await insertJob('expired-processing', {
 85 |       status: 'processing',
 86 |       attempts: 1,
 87 |       claimedBy: `old-worker-${suffix}`,
 88 |       claimedAt: new Date(at.getTime() - 120_000),
 89 |       leaseExpiresAt: new Date(at.getTime() - 60_000),
 90 |       startedAt: new Date(at.getTime() - 120_000),
 91 |       scheduledAt: new Date(at.getTime() - 180_000),
 92 |     });
 93 |
 94 |     await expect(queue.completed(jobId, `old-worker-${suffix}`, at)).rejects.toBeInstanceOf(
 95 |       CourierJobLeaseError,
 96 |     );
 97 |
 98 |     const claimed = await queue.claim(`new-worker-${suffix}`, at);
 99 |     expect(claimed?.id).toBe(jobId);
100 |     await expect(
101 |       queue.completed(jobId, `old-worker-${suffix}`, new Date(at.getTime() + 1_000)),
102 |     ).rejects.toBeInstanceOf(CourierJobLeaseError);
103 |
104 |     await queue.started(jobId, `new-worker-${suffix}`, new Date(at.getTime() + 1_000));
105 |     await queue.completed(jobId, `new-worker-${suffix}`, new Date(at.getTime() + 2_000));
106 |     const stored = await pool.query<{
107 |       status: string;
108 |       attempts: number;
109 |       claimed_by: string | null;
110 |       lease_expires_at: Date | null;
111 |     }>(`select status, attempts, claimed_by, lease_expires_at from courier_jobs where id = $1`, [
112 |       jobId,
113 |     ]);
114 |     expect(stored.rows[0]).toMatchObject({
115 |       status: 'completed',
116 |       attempts: 2,
117 |       claimed_by: null,
118 |       lease_expires_at: null,
119 |     });
120 |   });
121 |
122 |   it('renews an active processing lease and rejects another owner', async () => {
123 |     const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
124 |     const at = new Date('2026-07-17T01:30:00.000Z');
125 |     const worker = `renew-worker-${suffix}`;
126 |     const jobId = await insertJob('renew-processing', { scheduledAt: at });
127 |
128 |     await expect(queue.claim(worker, at)).resolves.toMatchObject({ id: jobId });
129 |     await queue.started(jobId, worker, new Date(at.getTime() + 1_000));
130 |     const renewedAt = new Date(at.getTime() + 30_000);
131 |     await queue.renew(jobId, worker, renewedAt);
132 |
133 |     await expect(
134 |       queue.renew(jobId, `other-worker-${suffix}`, new Date(at.getTime() + 31_000)),
135 |     ).rejects.toBeInstanceOf(CourierJobLeaseError);
136 |     await expect(
137 |       queue.claim(`competitor-${suffix}`, new Date(at.getTime() + 62_000)),
138 |     ).resolves.toBeNull();
139 |
140 |     const stored = await pool.query<{ lease_expires_at: Date }>(
141 |       `select lease_expires_at from courier_jobs where id = $1`,
142 |       [jobId],
143 |     );
144 |     expect(stored.rows[0]?.lease_expires_at.toISOString()).toBe(
145 |       new Date(renewedAt.getTime() + 60_000).toISOString(),
146 |     );
147 |   });
148 |
149 |   it('clears lease ownership when a retryable attempt is requeued', async () => {
150 |     const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
151 |     const at = new Date('2026-07-17T02:00:00.000Z');
152 |     const jobId = await insertJob('retryable', { scheduledAt: at });
153 |     await expect(queue.claim(`retry-worker-${suffix}`, at)).resolves.toMatchObject({ id: jobId });
154 |     await queue.started(jobId, `retry-worker-${suffix}`, new Date(at.getTime() + 1_000));
155 |     await queue.failed(
156 |       jobId,
157 |       `retry-worker-${suffix}`,
158 |       'PROVIDER_TIMEOUT',
159 |       true,
160 |       new Date(at.getTime() + 2_000),
161 |     );
162 |
163 |     const stored = await pool.query<{
164 |       status: string;
165 |       attempts: number;
166 |       error_code: string;
167 |       claimed_by: string | null;
168 |       lease_expires_at: Date | null;
169 |       scheduled_at: Date;
170 |     }>(
171 |       `select status, attempts, error_code, claimed_by, lease_expires_at, scheduled_at from courier_jobs where id = $1`,
172 |       [jobId],
173 |     );
174 |     expect(stored.rows[0]).toMatchObject({
175 |       status: 'queued',
176 |       attempts: 1,
177 |       error_code: 'PROVIDER_TIMEOUT',
178 |       claimed_by: null,
179 |       lease_expires_at: null,
180 |     });
181 |     expect(stored.rows[0]?.scheduled_at.getTime()).toBeGreaterThan(at.getTime() + 2_000);
182 |   });
183 |
184 |   it('moves an exhausted expired lease to failed instead of reclaiming it', async () => {
185 |     const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000, maxAttempts: 5 });
186 |     const at = new Date('2026-07-17T03:00:00.000Z');
187 |     const jobId = await insertJob('exhausted', {
188 |       status: 'processing',
189 |       attempts: 5,
190 |       claimedBy: `dead-worker-${suffix}`,
191 |       claimedAt: new Date(at.getTime() - 120_000),
192 |       leaseExpiresAt: new Date(at.getTime() - 60_000),
193 |       startedAt: new Date(at.getTime() - 120_000),
194 |       scheduledAt: new Date(at.getTime() - 180_000),
195 |     });
196 |
197 |     await expect(queue.claim(`recovery-worker-${suffix}`, at)).resolves.toBeNull();
198 |     const stored = await pool.query<{
199 |       status: string;
200 |       error_code: string;
201 |       completed_at: Date | null;
202 |       claimed_by: string | null;
203 |     }>(`select status, error_code, completed_at, claimed_by from courier_jobs where id = $1`, [
204 |       jobId,
205 |     ]);
206 |     expect(stored.rows[0]).toMatchObject({
207 |       status: 'failed',
208 |       error_code: 'LEASE_EXPIRED',
209 |       claimed_by: null,
210 |     });
211 |     expect(stored.rows[0]?.completed_at?.toISOString()).toBe(at.toISOString());
212 |   });
213 |
214 |   it('reports bounded queue depth and oldest ready age without row identifiers', async () => {
215 |     const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
216 |     const at = new Date('2026-07-17T03:30:00.000Z');
217 |     const baseline = await queue.snapshot(at);
218 |     await insertJob('snapshot-ready', { scheduledAt: new Date(at.getTime() - 120_000) });
219 |     await insertJob('snapshot-processing', {
220 |       status: 'processing',
221 |       attempts: 1,
222 |       claimedBy: `snapshot-worker-${suffix}`,
223 |       claimedAt: new Date(at.getTime() - 30_000),
224 |       leaseExpiresAt: new Date(at.getTime() + 30_000),
225 |       startedAt: new Date(at.getTime() - 30_000),
226 |       scheduledAt: new Date(at.getTime() - 180_000),
227 |     });
228 |     await insertJob('snapshot-failed', { status: 'failed', attempts: 5, scheduledAt: at });
229 |
230 |     const snapshot = await queue.snapshot(at);
231 |     expect(snapshot.depths.queued).toBe((baseline.depths.queued ?? 0) + 1);
232 |     expect(snapshot.depths.processing).toBe((baseline.depths.processing ?? 0) + 1);
233 |     expect(snapshot.depths.failed).toBe((baseline.depths.failed ?? 0) + 1);
234 |     expect(snapshot.depths.retry_scheduled).toBe(baseline.depths.retry_scheduled ?? 0);
235 |     expect(snapshot.oldestReadyAgeMs).toBeGreaterThanOrEqual(120_000);
236 |   });
237 |
238 |   it('derives organization, store, and provider scope from the courier account', async () => {
239 |     const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
240 |     const at = new Date('2026-07-17T04:00:00.000Z');
241 |     const jobId = await insertJob('authoritative-scope', {
242 |       scheduledAt: at,
243 |       payload: {
244 |         organizationId: 'org_tampered',
245 |         storeId: otherStoreId,
246 |         provider: 'pathao',
247 |         phone: '01712345678',
248 |         phoneHash: `phone-${suffix}`,
249 |         force: false,
250 |       },
251 |     });
252 |
253 |     await expect(queue.claim(`scope-worker-${suffix}`, at)).resolves.toMatchObject({
254 |       id: jobId,
255 |       organizationId,
256 |       storeId,
257 |       provider: 'steadfast',
258 |     });
259 |   });
260 |
261 |   async function insertJob(
262 |     label: string,
263 |     options: {
264 |       status?: string;
265 |       attempts?: number;
266 |       scheduledAt?: Date;
267 |       startedAt?: Date;
268 |       claimedBy?: string;
269 |       claimedAt?: Date;
270 |       leaseExpiresAt?: Date;
271 |       payload?: unknown;
272 |     } = {},
273 |   ): Promise<string> {
274 |     const jobId = `cj_${label}_${suffix}`;
275 |     const payload =
276 |       options.payload ??
277 |       ({
278 |         organizationId,
279 |         storeId,
280 |         provider: 'steadfast',
281 |         phone: '01712345678',
282 |         phoneHash: `phone-${label}-${suffix}`,
283 |         force: false,
284 |       } satisfies Record<string, unknown>);
285 |     await pool.query(
286 |       `
287 |         insert into courier_jobs (
288 |           id, courier_account_id, job_type, status, attempts, scheduled_at,
289 |           started_at, claimed_by, claimed_at, lease_expires_at, payload
290 |         ) values ($1, $2, 'customer_observation_refresh', $3, $4, $5, $6, $7, $8, $9, $10::jsonb)
291 |       `,
292 |       [
293 |         jobId,
294 |         accountId,
295 |         options.status ?? 'queued',
296 |         options.attempts ?? 0,
297 |         options.scheduledAt ?? new Date('2026-07-17T00:00:00.000Z'),
298 |         options.startedAt ?? null,
299 |         options.claimedBy ?? null,
300 |         options.claimedAt ?? null,
301 |         options.leaseExpiresAt ?? null,
302 |         JSON.stringify(payload),
303 |       ],
304 |     );
305 |     return jobId;
306 |   }
307 | });
308 |
```

### workers/courier-sync-worker/src/postgres.ts

Bytes: 8215
SHA-256: c8cba139021575596a218e5d917bb7e456fc43fbc70bba7ddea3c19cdb7af72e
Lines: 1-265 of 265

```typescript
  1 | import type { Pool } from 'pg';
  2 | import type { DurableQueueSnapshot } from '@ozzyl/observability';
  3 |
  4 | export interface ClaimedCourierJob {
  5 |   id: string;
  6 |   courierAccountId: string;
  7 |   organizationId: string;
  8 |   storeId: string;
  9 |   provider: string;
 10 |   payload: unknown;
 11 | }
 12 |
 13 | export class CourierJobLeaseError extends Error {
 14 |   readonly code = 'COURIER_JOB_LEASE_LOST';
 15 |
 16 |   constructor(message = 'Courier job lease is no longer owned by this worker') {
 17 |     super(message);
 18 |     this.name = 'CourierJobLeaseError';
 19 |   }
 20 | }
 21 |
 22 | export class PostgresCourierJobQueue {
 23 |   private readonly leaseMs: number;
 24 |   private readonly maxAttempts: number;
 25 |
 26 |   constructor(
 27 |     private readonly pool: Pool,
 28 |     options: { leaseMs?: number; maxAttempts?: number } = {},
 29 |   ) {
 30 |     this.leaseMs = options.leaseMs ?? 5 * 60_000;
 31 |     this.maxAttempts = options.maxAttempts ?? 5;
 32 |   }
 33 |
 34 |   async claim(workerId: string, at = new Date()): Promise<ClaimedCourierJob | null> {
 35 |     const client = await this.pool.connect();
 36 |     const leaseExpiresAt = this.leaseUntil(at);
 37 |     try {
 38 |       await client.query('begin');
 39 |       await client.query(
 40 |         `
 41 |           update courier_jobs
 42 |           set status = 'failed',
 43 |             completed_at = $1,
 44 |             error_code = coalesce(error_code, 'LEASE_EXPIRED'),
 45 |             claimed_by = null,
 46 |             claimed_at = null,
 47 |             lease_expires_at = null,
 48 |             updated_at = now()
 49 |           where job_type = 'customer_observation_refresh'
 50 |             and status in ('claimed', 'processing')
 51 |             and (lease_expires_at is null or lease_expires_at <= $1)
 52 |             and attempts >= $2
 53 |         `,
 54 |         [at, this.maxAttempts],
 55 |       );
 56 |       const result = await client.query<{
 57 |         id: string;
 58 |         courier_account_id: string;
 59 |         organization_id: string;
 60 |         store_id: string;
 61 |         provider: string;
 62 |         payload: unknown;
 63 |       }>(
 64 |         `
 65 |           with candidate as (
 66 |             select cj.id
 67 |             from courier_jobs cj
 68 |             where cj.job_type = 'customer_observation_refresh'
 69 |               and cj.attempts < $4
 70 |               and (
 71 |                 (cj.status = 'queued' and cj.scheduled_at <= $2)
 72 |                 or (
 73 |                   cj.status in ('claimed', 'processing')
 74 |                   and (cj.lease_expires_at is null or cj.lease_expires_at <= $2)
 75 |                 )
 76 |               )
 77 |             order by
 78 |               case when cj.status in ('claimed', 'processing') then 0 else 1 end,
 79 |               coalesce(cj.lease_expires_at, cj.scheduled_at) asc,
 80 |               cj.scheduled_at asc,
 81 |               cj.id asc
 82 |             for update skip locked
 83 |             limit 1
 84 |           ), claimed as (
 85 |             update courier_jobs cj
 86 |             set status = 'claimed',
 87 |               claimed_by = $1,
 88 |               claimed_at = $2,
 89 |               lease_expires_at = $3,
 90 |               started_at = null,
 91 |               completed_at = null,
 92 |               updated_at = now()
 93 |             from candidate
 94 |             where cj.id = candidate.id
 95 |             returning cj.id, cj.courier_account_id, cj.payload
 96 |           )
 97 |           select
 98 |             claimed.id,
 99 |             claimed.courier_account_id,
100 |             stores.organization_id,
101 |             courier_accounts.store_id,
102 |             courier_accounts.provider,
103 |             claimed.payload
104 |           from claimed
105 |           join courier_accounts on courier_accounts.id = claimed.courier_account_id
106 |           join stores on stores.id = courier_accounts.store_id
107 |         `,
108 |         [workerId, at, leaseExpiresAt, this.maxAttempts],
109 |       );
110 |       await client.query('commit');
111 |       const row = result.rows[0];
112 |       return row
113 |         ? {
114 |             id: row.id,
115 |             courierAccountId: row.courier_account_id,
116 |             organizationId: row.organization_id,
117 |             storeId: row.store_id,
118 |             provider: row.provider,
119 |             payload: row.payload,
120 |           }
121 |         : null;
122 |     } catch (error) {
123 |       await client.query('rollback').catch(() => undefined);
124 |       throw error;
125 |     } finally {
126 |       client.release();
127 |     }
128 |   }
129 |
130 |   async started(jobId: string, workerId: string, at = new Date()): Promise<void> {
131 |     const result = await this.pool.query(
132 |       `
133 |         update courier_jobs
134 |         set status = 'processing',
135 |           started_at = $3,
136 |           attempts = attempts + 1,
137 |           lease_expires_at = $4,
138 |           updated_at = now()
139 |         where id = $1
140 |           and claimed_by = $2
141 |           and status = 'claimed'
142 |           and lease_expires_at > $3
143 |       `,
144 |       [jobId, workerId, at, this.leaseUntil(at)],
145 |     );
146 |     this.assertOwned(result.rowCount);
147 |   }
148 |
149 |   async renew(jobId: string, workerId: string, at = new Date()): Promise<void> {
150 |     const result = await this.pool.query(
151 |       `
152 |         update courier_jobs
153 |         set lease_expires_at = $3, updated_at = now()
154 |         where id = $1
155 |           and claimed_by = $2
156 |           and status in ('claimed', 'processing')
157 |           and lease_expires_at > $4
158 |       `,
159 |       [jobId, workerId, this.leaseUntil(at), at],
160 |     );
161 |     this.assertOwned(result.rowCount);
162 |   }
163 |
164 |   async completed(jobId: string, workerId: string, at = new Date()): Promise<void> {
165 |     const result = await this.pool.query(
166 |       `
167 |         update courier_jobs
168 |         set status = 'completed',
169 |           completed_at = $3,
170 |           error_code = null,
171 |           claimed_by = null,
172 |           claimed_at = null,
173 |           lease_expires_at = null,
174 |           updated_at = now()
175 |         where id = $1
176 |           and claimed_by = $2
177 |           and status = 'processing'
178 |           and lease_expires_at > $3
179 |       `,
180 |       [jobId, workerId, at],
181 |     );
182 |     this.assertOwned(result.rowCount);
183 |   }
184 |
185 |   async failed(
186 |     jobId: string,
187 |     workerId: string,
188 |     code: string,
189 |     retryable: boolean,
190 |     at = new Date(),
191 |   ): Promise<void> {
192 |     const result = await this.pool.query(
193 |       `
194 |         update courier_jobs
195 |         set status = case when $4 and attempts < $6 then 'queued' else 'failed' end,
196 |           scheduled_at = case
197 |             when $4 and attempts < $6
198 |               then $5::timestamptz + (least(3600, power(2, greatest(attempts, 1)) * 30)::text || ' seconds')::interval
199 |             else scheduled_at
200 |           end,
201 |           completed_at = case when $4 and attempts < $6 then null else $5 end,
202 |           error_code = $3,
203 |           claimed_by = null,
204 |           claimed_at = null,
205 |           lease_expires_at = null,
206 |           updated_at = now()
207 |         where id = $1
208 |           and claimed_by = $2
209 |           and status in ('claimed', 'processing')
210 |           and lease_expires_at > $5
211 |       `,
212 |       [jobId, workerId, code, retryable, at, this.maxAttempts],
213 |     );
214 |     this.assertOwned(result.rowCount);
215 |   }
216 |
217 |   async snapshot(at = new Date()): Promise<DurableQueueSnapshot> {
218 |     const result = await this.pool.query<{
219 |       queued: number;
220 |       retry_scheduled: number;
221 |       claimed: number;
222 |       processing: number;
223 |       failed: number;
224 |       oldest_ready_age_ms: number;
225 |     }>(
226 |       `
227 |         select
228 |           count(*) filter (where status = 'queued')::int as queued,
229 |           0::int as retry_scheduled,
230 |           count(*) filter (where status = 'claimed')::int as claimed,
231 |           count(*) filter (where status = 'processing')::int as processing,
232 |           count(*) filter (where status = 'failed')::int as failed,
233 |           coalesce(
234 |             extract(epoch from ($1 - min(scheduled_at) filter (
235 |               where status = 'queued' and scheduled_at <= $1
236 |             ))) * 1000,
237 |             0
238 |           )::double precision as oldest_ready_age_ms
239 |         from courier_jobs
240 |         where job_type = 'customer_observation_refresh'
241 |       `,
242 |       [at],
243 |     );
244 |     const row = result.rows[0];
245 |     return {
246 |       depths: {
247 |         queued: row?.queued ?? 0,
248 |         retry_scheduled: row?.retry_scheduled ?? 0,
249 |         claimed: row?.claimed ?? 0,
250 |         processing: row?.processing ?? 0,
251 |         failed: row?.failed ?? 0,
252 |       },
253 |       oldestReadyAgeMs: Math.max(0, Number(row?.oldest_ready_age_ms ?? 0)),
254 |     };
255 |   }
256 |
257 |   private leaseUntil(at: Date): Date {
258 |     return new Date(at.getTime() + this.leaseMs);
259 |   }
260 |
261 |   private assertOwned(rowCount: number | null): void {
262 |     if (rowCount !== 1) throw new CourierJobLeaseError();
263 |   }
264 | }
265 |
```

### workers/courier-sync-worker/src/runner.ts

Bytes: 10144
SHA-256: ea28f57a1888a68588321eabb48108f8912db1e581eefa1c6bc1b39b28108fb5
Lines: 1-288 of 288

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import {
  4 |   SteadfastAdapter,
  5 |   type CourierObservation,
  6 |   type CourierSession,
  7 | } from '@ozzyl/courier-adapters';
  8 | import { AesGcmEnvelopeCipher } from '@ozzyl/courier-session-worker';
  9 | import { LeaseHeartbeat } from '@ozzyl/database';
 10 | import {
 11 |   createMetricRecorder,
 12 |   createStructuredLogger,
 13 |   observeRepositoryOperation,
 14 |   recordDurableQueueSnapshot,
 15 |   recordWorkerClaimFailure,
 16 |   type RepositoryMetricOperation,
 17 | } from '@ozzyl/observability';
 18 | import { CourierSyncWorker } from './index.js';
 19 | import { PostgresCourierJobQueue, type ClaimedCourierJob } from './postgres.js';
 20 |
 21 | const required = (name: string): string => {
 22 |   const value = process.env[name];
 23 |   if (!value) throw new Error(`${name} is required`);
 24 |   return value;
 25 | };
 26 |
 27 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 28 | const cipher = new AesGcmEnvelopeCipher(
 29 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 30 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 31 | );
 32 | const pollMs = Number(process.env.WORKER_POLL_MS ?? 5_000);
 33 | const queueMetricsMs = Number(process.env.WORKER_QUEUE_METRICS_MS ?? 30_000);
 34 | const leaseMs = Number(process.env.WORKER_LEASE_MS ?? 5 * 60_000);
 35 | const leaseRenewMs = Number(process.env.WORKER_LEASE_RENEW_MS ?? Math.floor(leaseMs / 3));
 36 | if (!Number.isSafeInteger(queueMetricsMs) || queueMetricsMs <= 0) {
 37 |   throw new Error('WORKER_QUEUE_METRICS_MS must be a positive integer');
 38 | }
 39 | if (!Number.isSafeInteger(leaseRenewMs) || leaseRenewMs <= 0 || leaseRenewMs * 2 > leaseMs) {
 40 |   throw new Error(
 41 |     'WORKER_LEASE_RENEW_MS must be a positive integer no greater than half the lease',
 42 |   );
 43 | }
 44 | const workerId = process.env.WORKER_ID ?? `courier-sync-${randomUUID()}`;
 45 | const log = createStructuredLogger({
 46 |   service: 'courier-sync-worker',
 47 |   environment: process.env.NODE_ENV ?? 'development',
 48 | });
 49 | const metrics = createMetricRecorder({
 50 |   service: 'courier-sync-worker',
 51 |   environment: process.env.NODE_ENV ?? 'development',
 52 | });
 53 | const jobs = new PostgresCourierJobQueue(pool, { leaseMs });
 54 | let stopping = false;
 55 | let activeHeartbeat: LeaseHeartbeat | null = null;
 56 | let nextQueueMetricsAt = 0;
 57 |
 58 | const observeQueue = <T>(
 59 |   operation: RepositoryMetricOperation,
 60 |   task: () => Promise<T>,
 61 |   isEmpty?: (value: T) => boolean,
 62 | ): Promise<T> =>
 63 |   observeRepositoryOperation(
 64 |     metrics,
 65 |     {
 66 |       repositoryType: 'courier_queue',
 67 |       operation,
 68 |       ...(isEmpty === undefined ? {} : { isEmpty }),
 69 |     },
 70 |     task,
 71 |   );
 72 |
 73 | async function recordQueueMetricsIfDue(): Promise<void> {
 74 |   const now = Date.now();
 75 |   if (now < nextQueueMetricsAt) return;
 76 |   nextQueueMetricsAt = now + queueMetricsMs;
 77 |   const snapshot = await observeQueue('snapshot', () => jobs.snapshot(new Date(now)));
 78 |   recordDurableQueueSnapshot(metrics, 'courier_refresh', snapshot);
 79 | }
 80 |
 81 | const steadfast = new SteadfastAdapter({
 82 |   sessionProvider: {
 83 |     async getSession(accountId): Promise<CourierSession | null> {
 84 |       const result = await pool.query<{ encrypted_payload: string; expires_at: Date | null }>(
 85 |         `select encrypted_payload, expires_at from courier_sessions where courier_account_id = $1 and status = 'valid'`,
 86 |         [accountId],
 87 |       );
 88 |       const row = result.rows[0];
 89 |       if (!row) return null;
 90 |       const session = cipher.decrypt<CourierSession>(
 91 |         row.encrypted_payload,
 92 |         `courier-session:${accountId}`,
 93 |       );
 94 |       return { ...session, ...(row.expires_at ? { expiresAt: row.expires_at.toISOString() } : {}) };
 95 |     },
 96 |   },
 97 | });
 98 |
 99 | const syncWorker = new CourierSyncWorker({
100 |   adapters: new Map([['steadfast', steadfast]]),
101 |   observations: {
102 |     async findFresh(input): Promise<CourierObservation | null> {
103 |       const result = await pool.query<ObservationRow>(
104 |         `
105 |           select provider, total_orders, delivered_orders, returned_orders,
106 |             cancelled_before_shipping, success_rate, confidence, source_type,
107 |             observed_at, expires_at
108 |           from courier_observations
109 |           where store_id = $1 and provider = $2 and phone_hash = $3 and expires_at > $4
110 |           order by observed_at desc limit 1
111 |         `,
112 |         [input.storeId, input.provider, input.phoneHash, input.at],
113 |       );
114 |       return result.rows[0] ? observationFromRow(result.rows[0]) : null;
115 |     },
116 |     async save(input): Promise<void> {
117 |       await pool.query(
118 |         `
119 |           insert into courier_observations (
120 |             id, store_id, provider, phone_hash, total_orders, delivered_orders,
121 |             returned_orders, cancelled_before_shipping, success_rate, confidence,
122 |             source_type, observed_at, expires_at
123 |           ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
124 |         `,
125 |         [
126 |           `cob_${randomUUID()}`,
127 |           input.storeId,
128 |           input.observation.provider,
129 |           input.phoneHash,
130 |           input.observation.totalOrders,
131 |           input.observation.deliveredOrders,
132 |           input.observation.returnedOrders,
133 |           input.observation.cancelledBeforeShipping,
134 |           input.observation.successRate,
135 |           input.observation.confidence,
136 |           input.observation.source,
137 |           input.observation.observedAt,
138 |           input.observation.expiresAt,
139 |         ],
140 |       );
141 |     },
142 |   },
143 |   metrics,
144 |   health: {
145 |     async started(jobId, at): Promise<void> {
146 |       await observeQueue('start', () => jobs.started(jobId, workerId, at));
147 |     },
148 |     async completed(jobId, at): Promise<void> {
149 |       await activeHeartbeat?.stop();
150 |       await observeQueue('complete', () => jobs.completed(jobId, workerId, at));
151 |     },
152 |     async failed(jobId, code, retryable, at): Promise<void> {
153 |       await activeHeartbeat?.stop();
154 |       await observeQueue(retryable ? 'retry' : 'fail', () =>
155 |         jobs.failed(jobId, workerId, code, retryable, at),
156 |       );
157 |     },
158 |   },
159 | });
160 |
161 | async function run(): Promise<void> {
162 |   log.info('courier.sync.worker.started', { worker_id: workerId });
163 |   while (!stopping) {
164 |     try {
165 |       await recordQueueMetricsIfDue().catch((error) => {
166 |         log.error('courier.sync.queue.metrics.error', {
167 |           code: errorCode(error, 'QUEUE_METRICS_FAILED'),
168 |         });
169 |       });
170 |       const job = await observeQueue(
171 |         'claim',
172 |         () => jobs.claim(workerId),
173 |         (value) => value === null,
174 |       ).catch((error) => {
175 |         recordWorkerClaimFailure(metrics, 'courier_sync');
176 |         throw error;
177 |       });
178 |       if (!job) {
179 |         await new Promise((resolve) => setTimeout(resolve, pollMs));
180 |         continue;
181 |       }
182 |       activeHeartbeat = new LeaseHeartbeat({
183 |         intervalMs: leaseRenewMs,
184 |         renew: (at) => observeQueue('renew', () => jobs.renew(job.id, workerId, at)),
185 |       }).start();
186 |       let payload: ReturnType<typeof parsePayload>;
187 |       try {
188 |         payload = parsePayload(job.payload, job);
189 |       } catch (error) {
190 |         await activeHeartbeat.stop();
191 |         await observeQueue('fail', () =>
192 |           jobs.failed(job.id, workerId, errorCode(error, 'INVALID_JOB_PAYLOAD'), false),
193 |         );
194 |         throw error;
195 |       }
196 |       await syncWorker.sync({
197 |         jobId: job.id,
198 |         storeId: job.storeId,
199 |         courierAccountId: job.courierAccountId,
200 |         provider: job.provider,
201 |         phone: payload.phone,
202 |         phoneHash: payload.phoneHash,
203 |         force: payload.force,
204 |         signal: activeHeartbeat.signal,
205 |       });
206 |       await activeHeartbeat.stopQuietly();
207 |       activeHeartbeat = null;
208 |     } catch (error) {
209 |       await activeHeartbeat?.stopQuietly();
210 |       activeHeartbeat = null;
211 |       log.error('courier.sync.worker.error', {
212 |         code: errorCode(error, 'WORKER_TICK_FAILED'),
213 |         worker_id: workerId,
214 |       });
215 |       await new Promise((resolve) => setTimeout(resolve, Math.min(pollMs, 5_000)));
216 |     }
217 |   }
218 |   await pool.end();
219 | }
220 |
221 | interface ObservationRow {
222 |   provider: 'steadfast' | 'pathao' | 'redx' | 'aggregator';
223 |   total_orders: number;
224 |   delivered_orders: number;
225 |   returned_orders: number;
226 |   cancelled_before_shipping: number;
227 |   success_rate: string | null;
228 |   confidence: string;
229 |   source_type: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
230 |   observed_at: Date;
231 |   expires_at: Date;
232 | }
233 |
234 | function parsePayload(
235 |   value: unknown,
236 |   job: ClaimedCourierJob,
237 | ): { phone: string; phoneHash: string; force: boolean } {
238 |   if (!value || typeof value !== 'object') throw invalidPayload('Courier job payload is invalid');
239 |   const row = value as Record<string, unknown>;
240 |   if (![row.phone, row.phoneHash].every((item) => typeof item === 'string')) {
241 |     throw invalidPayload('Courier job payload is incomplete');
242 |   }
243 |   if (typeof row.organizationId === 'string' && row.organizationId !== job.organizationId) {
244 |     throw invalidPayload('Courier job organization scope does not match the account');
245 |   }
246 |   if (typeof row.storeId === 'string' && row.storeId !== job.storeId) {
247 |     throw invalidPayload('Courier job store scope does not match the account');
248 |   }
249 |   if (typeof row.provider === 'string' && row.provider !== job.provider) {
250 |     throw invalidPayload('Courier job provider does not match the account');
251 |   }
252 |   return {
253 |     phone: String(row.phone),
254 |     phoneHash: String(row.phoneHash),
255 |     force: row.force === true,
256 |   };
257 | }
258 |
259 | function invalidPayload(message: string): Error & { code: string } {
260 |   return Object.assign(new Error(message), { code: 'INVALID_JOB_PAYLOAD' });
261 | }
262 |
263 | function errorCode(error: unknown, fallback: string): string {
264 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
265 | }
266 |
267 | function observationFromRow(row: ObservationRow): CourierObservation {
268 |   return {
269 |     provider: row.provider,
270 |     totalOrders: row.total_orders,
271 |     deliveredOrders: row.delivered_orders,
272 |     returnedOrders: row.returned_orders,
273 |     cancelledBeforeShipping: row.cancelled_before_shipping,
274 |     successRate: row.success_rate === null ? null : Number(row.success_rate),
275 |     confidence: Number(row.confidence),
276 |     source: row.source_type,
277 |     observedAt: row.observed_at.toISOString(),
278 |     expiresAt: row.expires_at.toISOString(),
279 |   };
280 | }
281 |
282 | const stop = (): void => {
283 |   stopping = true;
284 | };
285 | process.once('SIGTERM', stop);
286 | process.once('SIGINT', stop);
287 | await run();
288 |
```

### workers/event-worker/src/index.test.ts

Bytes: 7657
SHA-256: c9dd8e7fa96d2bea61c2d4a0510a97b8b37be4a71ca296d14ed8a756cc278f90
Lines: 1-228 of 228

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { describe, expect, it, vi } from 'vitest';
  3 | import { createMetricRecorder } from '@ozzyl/observability';
  4 | import { EventWorker, assertSafeWebhookDestination, assertSafeWebhookUrl } from './index.js';
  5 | function parseMetricLine(line: string): unknown {
  6 |   return JSON.parse(line) as unknown;
  7 | }
  8 |
  9 | const repository = {
 10 |   markDelivered: vi.fn(async () => undefined),
 11 |   markRetry: vi.fn(async () => undefined),
 12 |   markFailed: vi.fn(async () => undefined),
 13 | };
 14 |
 15 | const event = {
 16 |   id: 'evt_1',
 17 |   type: 'assessment.completed' as const,
 18 |   organizationId: 'org_1',
 19 |   storeId: 'sto_1',
 20 |   occurredAt: '2026-07-17T00:00:00.000Z',
 21 |   payload: { assessmentId: 'ras_1' },
 22 | };
 23 |
 24 | const publicResolver = async (): Promise<readonly string[]> => ['93.184.216.34'];
 25 |
 26 | describe('webhook destination validation', () => {
 27 |   it('rejects invalid, local, and private destinations', () => {
 28 |     expect(() => assertSafeWebhookUrl('not-a-url')).toThrow();
 29 |     expect(() => assertSafeWebhookUrl('http://example.com/hook')).toThrow();
 30 |     expect(() => assertSafeWebhookUrl('https://127.0.0.1/hook')).toThrow();
 31 |     expect(() => assertSafeWebhookUrl('https://10.0.0.1/hook')).toThrow();
 32 |     expect(() => assertSafeWebhookUrl('https://[::1]/hook')).toThrow();
 33 |     expect(assertSafeWebhookUrl('https://merchant.example/hook').hostname).toBe('merchant.example');
 34 |   });
 35 |
 36 |   it('rejects a hostname that resolves to any non-public address', async () => {
 37 |     await expect(
 38 |       assertSafeWebhookDestination('https://merchant.example/hook', async () => [
 39 |         '93.184.216.34',
 40 |         '10.0.0.5',
 41 |       ]),
 42 |     ).rejects.toMatchObject({ code: 'UNSAFE_WEBHOOK_DESTINATION' });
 43 |   });
 44 |
 45 |   it('treats DNS resolution failures as retryable worker failures', async () => {
 46 |     const isolatedRepository = {
 47 |       markDelivered: vi.fn(async () => undefined),
 48 |       markRetry: vi.fn(async () => undefined),
 49 |       markFailed: vi.fn(async () => undefined),
 50 |     };
 51 |     const fetcher = vi.fn<typeof fetch>();
 52 |     const worker = new EventWorker(isolatedRepository, {
 53 |       fetcher,
 54 |       resolver: async () => {
 55 |         throw new Error('temporary DNS failure');
 56 |       },
 57 |       now: () => new Date('2026-07-17T00:00:00.000Z'),
 58 |     });
 59 |     const result = await worker.deliver({
 60 |       endpoint: {
 61 |         id: 'we_dns',
 62 |         url: 'https://merchant.example/hook',
 63 |         signingSecret: 'x'.repeat(32),
 64 |         active: true,
 65 |       },
 66 |       event,
 67 |       attempt: 1,
 68 |     });
 69 |     expect(result).toMatchObject({
 70 |       status: 'retry_scheduled',
 71 |       errorCode: 'WEBHOOK_DNS_RESOLUTION_FAILED',
 72 |     });
 73 |     expect(fetcher).not.toHaveBeenCalled();
 74 |     expect(isolatedRepository.markRetry).toHaveBeenCalledOnce();
 75 |   });
 76 | });
 77 |
 78 | describe('EventWorker', () => {
 79 |   it('signs, delivers, and records bounded operation metrics', async () => {
 80 |     const metricLines: string[] = [];
 81 |     const ticks = [100, 105, 117, 125];
 82 |     const fetcher = vi.fn<typeof fetch>().mockImplementation(async (_url, init) => {
 83 |       const headers = new Headers(init?.headers);
 84 |       const timestamp = headers.get('X-Ozzyl-Timestamp') ?? '';
 85 |       const payload = typeof init?.body === 'string' ? init.body : '';
 86 |       const expected = `v1=${createHmac('sha256', 'x'.repeat(32))
 87 |         .update(`${timestamp}.${payload}`)
 88 |         .digest('hex')}`;
 89 |       expect(headers.get('X-Ozzyl-Signature')).toBe(expected);
 90 |       return new Response(null, { status: 204 });
 91 |     });
 92 |     const worker = new EventWorker(repository, {
 93 |       fetcher,
 94 |       resolver: publicResolver,
 95 |       now: () => new Date('2026-07-17T00:00:00.000Z'),
 96 |       monotonicNow: () => ticks.shift() ?? 125,
 97 |       metrics: createMetricRecorder({
 98 |         service: 'event-worker-test',
 99 |         environment: 'test',
100 |         write: (line) => metricLines.push(line),
101 |       }),
102 |     });
103 |     const result = await worker.deliver({
104 |       endpoint: {
105 |         id: 'we_1',
106 |         url: 'https://merchant.example/hook',
107 |         signingSecret: 'x'.repeat(32),
108 |         active: true,
109 |       },
110 |       event,
111 |       attempt: 1,
112 |     });
113 |     expect(result.status).toBe('delivered');
114 |     expect(metricLines.map(parseMetricLine)).toEqual([
115 |       expect.objectContaining({
116 |         name: 'ozzyl.provider.operations',
117 |         value: 1,
118 |         attributes: {
119 |           provider_type: 'webhook_http',
120 |           operation: 'deliver',
121 |           outcome: 'success',
122 |         },
123 |       }),
124 |       expect.objectContaining({
125 |         name: 'ozzyl.provider.operation.duration',
126 |         value: 12,
127 |         unit: 'ms',
128 |         attributes: {
129 |           provider_type: 'webhook_http',
130 |           operation: 'deliver',
131 |           outcome: 'success',
132 |         },
133 |       }),
134 |       expect.objectContaining({
135 |         name: 'ozzyl.worker.operations',
136 |         value: 1,
137 |         attributes: {
138 |           worker_type: 'webhook_delivery',
139 |           operation: 'deliver',
140 |           outcome: 'completed',
141 |         },
142 |       }),
143 |       expect.objectContaining({
144 |         name: 'ozzyl.worker.operation.duration',
145 |         value: 25,
146 |         unit: 'ms',
147 |         attributes: {
148 |           worker_type: 'webhook_delivery',
149 |           operation: 'deliver',
150 |           outcome: 'completed',
151 |         },
152 |       }),
153 |     ]);
154 |     expect(metricLines.join('\n')).not.toContain('evt_1');
155 |     expect(metricLines.join('\n')).not.toContain('we_1');
156 |   });
157 |
158 |   it('fails an unsafe destination without retrying or fetching', async () => {
159 |     const isolatedRepository = {
160 |       markDelivered: vi.fn(async () => undefined),
161 |       markRetry: vi.fn(async () => undefined),
162 |       markFailed: vi.fn(async () => undefined),
163 |     };
164 |     const fetcher = vi.fn<typeof fetch>();
165 |     const worker = new EventWorker(isolatedRepository, { fetcher, resolver: publicResolver });
166 |     const result = await worker.deliver({
167 |       endpoint: {
168 |         id: 'we_unsafe',
169 |         url: 'https://127.0.0.1/hook',
170 |         signingSecret: 'x'.repeat(32),
171 |         active: true,
172 |       },
173 |       event,
174 |       attempt: 1,
175 |     });
176 |     expect(result).toEqual({
177 |       status: 'failed',
178 |       errorCode: 'UNSAFE_WEBHOOK_DESTINATION',
179 |     });
180 |     expect(fetcher).not.toHaveBeenCalled();
181 |     expect(isolatedRepository.markRetry).not.toHaveBeenCalled();
182 |     expect(isolatedRepository.markFailed).toHaveBeenCalledOnce();
183 |   });
184 |
185 |   it('aborts an active webhook request when the worker lease is lost', async () => {
186 |     const isolatedRepository = {
187 |       markDelivered: vi.fn(async () => undefined),
188 |       markRetry: vi.fn(async () => undefined),
189 |       markFailed: vi.fn(async () => undefined),
190 |     };
191 |     const fetcher = vi.fn<typeof fetch>().mockImplementation(
192 |       async (_url, init) =>
193 |         new Promise<Response>((_resolve, reject) => {
194 |           const abort = (): void => reject(new DOMException('Aborted', 'AbortError'));
195 |           if (init?.signal?.aborted) abort();
196 |           else init?.signal?.addEventListener('abort', abort, { once: true });
197 |         }),
198 |     );
199 |     const worker = new EventWorker(isolatedRepository, {
200 |       fetcher,
201 |       resolver: publicResolver,
202 |       timeoutMs: 60_000,
203 |       now: () => new Date('2026-07-17T00:00:00.000Z'),
204 |     });
205 |     const controller = new AbortController();
206 |     const result = worker.deliver({
207 |       endpoint: {
208 |         id: 'we_lease',
209 |         url: 'https://merchant.example/hook',
210 |         signingSecret: 'x'.repeat(32),
211 |         active: true,
212 |       },
213 |       event,
214 |       attempt: 1,
215 |       signal: controller.signal,
216 |     });
217 |
218 |     controller.abort(
219 |       Object.assign(new Error('lease lost'), { code: 'WEBHOOK_DELIVERY_LEASE_LOST' }),
220 |     );
221 |     await expect(result).resolves.toMatchObject({
222 |       status: 'retry_scheduled',
223 |       errorCode: 'TIMEOUT',
224 |     });
225 |     expect(isolatedRepository.markRetry).toHaveBeenCalledOnce();
226 |   });
227 | });
228 |
```

### workers/event-worker/src/index.ts

Bytes: 12174
SHA-256: 225911a9d2c87702f62030c1b2deef58fbce66f7e2f1bcf5f03abff453f4defd
Lines: 1-367 of 367

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { lookup } from 'node:dns/promises';
  3 | import { isIP } from 'node:net';
  4 | import {
  5 |   recordProviderOperation,
  6 |   recordWorkerOperation,
  7 |   type MetricRecorder,
  8 | } from '@ozzyl/observability';
  9 | import type { DomainEvent } from '@ozzyl/shared-types';
 10 |
 11 | export interface WebhookEndpoint {
 12 |   id: string;
 13 |   url: string;
 14 |   signingSecret: string;
 15 |   active: boolean;
 16 | }
 17 |
 18 | export interface WebhookDeliveryInput {
 19 |   endpoint: WebhookEndpoint;
 20 |   event: DomainEvent;
 21 |   attempt: number;
 22 |   signal?: AbortSignal;
 23 | }
 24 |
 25 | export interface DeliveryResult {
 26 |   status: 'delivered' | 'retry_scheduled' | 'failed';
 27 |   responseStatus?: number;
 28 |   nextAttemptAt?: string;
 29 |   errorCode?: string;
 30 | }
 31 |
 32 | export interface WebhookDeliveryRepository {
 33 |   markDelivered(input: {
 34 |     endpointId: string;
 35 |     eventId: string;
 36 |     responseStatus: number;
 37 |     at: Date;
 38 |   }): Promise<void>;
 39 |   markRetry(input: {
 40 |     endpointId: string;
 41 |     eventId: string;
 42 |     responseStatus?: number;
 43 |     errorCode: string;
 44 |     nextAttemptAt: Date;
 45 |     at: Date;
 46 |   }): Promise<void>;
 47 |   markFailed(input: {
 48 |     endpointId: string;
 49 |     eventId: string;
 50 |     responseStatus?: number;
 51 |     errorCode: string;
 52 |     at: Date;
 53 |   }): Promise<void>;
 54 | }
 55 |
 56 | export type WebhookDestinationResolver = (hostname: string) => Promise<readonly string[]>;
 57 |
 58 | export class WebhookDestinationError extends Error {
 59 |   readonly code = 'UNSAFE_WEBHOOK_DESTINATION';
 60 | }
 61 |
 62 | export class WebhookResolutionError extends Error {
 63 |   readonly code = 'WEBHOOK_DNS_RESOLUTION_FAILED';
 64 | }
 65 |
 66 | export function assertSafeWebhookUrl(rawUrl: string): URL {
 67 |   let url: URL;
 68 |   try {
 69 |     url = new URL(rawUrl);
 70 |   } catch {
 71 |     throw new WebhookDestinationError('Webhook endpoint URL is invalid');
 72 |   }
 73 |   if (url.protocol !== 'https:') {
 74 |     throw new WebhookDestinationError('Webhook endpoints must use HTTPS');
 75 |   }
 76 |   const hostname = normalizedHostname(url.hostname);
 77 |   if (hostname === 'localhost' || hostname.endsWith('.localhost') || hostname.endsWith('.local')) {
 78 |     throw new WebhookDestinationError('Local webhook destinations are not allowed');
 79 |   }
 80 |   if (isIP(hostname) && isNonPublicIp(hostname)) {
 81 |     throw new WebhookDestinationError('Non-public IP webhook destinations are not allowed');
 82 |   }
 83 |   if (hostname === 'metadata.google.internal') {
 84 |     throw new WebhookDestinationError('Metadata service destinations are not allowed');
 85 |   }
 86 |   if (url.username || url.password) {
 87 |     throw new WebhookDestinationError('Webhook URLs must not contain credentials');
 88 |   }
 89 |   return url;
 90 | }
 91 |
 92 | export async function assertSafeWebhookDestination(
 93 |   rawUrl: string,
 94 |   resolver: WebhookDestinationResolver = resolveHostname,
 95 | ): Promise<URL> {
 96 |   const url = assertSafeWebhookUrl(rawUrl);
 97 |   const hostname = normalizedHostname(url.hostname);
 98 |   let addresses: readonly string[];
 99 |   try {
100 |     addresses = await resolver(hostname);
101 |   } catch {
102 |     throw new WebhookResolutionError('Webhook destination DNS resolution failed');
103 |   }
104 |   if (addresses.length === 0) {
105 |     throw new WebhookResolutionError('Webhook destination did not resolve to an address');
106 |   }
107 |   if (addresses.some((address) => !isIP(address) || isNonPublicIp(address))) {
108 |     throw new WebhookDestinationError('Webhook destination resolved to a non-public address');
109 |   }
110 |   return url;
111 | }
112 |
113 | export function signWebhook(payload: string, timestamp: string, secret: string): string {
114 |   return `v1=${createHmac('sha256', secret).update(`${timestamp}.${payload}`).digest('hex')}`;
115 | }
116 |
117 | export class EventWorker {
118 |   private readonly fetcher: typeof fetch;
119 |   private readonly timeoutMs: number;
120 |   private readonly maxAttempts: number;
121 |   private readonly now: () => Date;
122 |   private readonly resolver: WebhookDestinationResolver;
123 |   private readonly metrics: MetricRecorder | undefined;
124 |   private readonly monotonicNow: () => number;
125 |
126 |   constructor(
127 |     private readonly repository: WebhookDeliveryRepository,
128 |     options?: {
129 |       fetcher?: typeof fetch;
130 |       timeoutMs?: number;
131 |       maxAttempts?: number;
132 |       now?: () => Date;
133 |       resolver?: WebhookDestinationResolver;
134 |       metrics?: MetricRecorder;
135 |       monotonicNow?: () => number;
136 |     },
137 |   ) {
138 |     this.fetcher = options?.fetcher ?? fetch;
139 |     this.timeoutMs = options?.timeoutMs ?? 5_000;
140 |     this.maxAttempts = options?.maxAttempts ?? 5;
141 |     this.now = options?.now ?? (() => new Date());
142 |     this.resolver = options?.resolver ?? resolveHostname;
143 |     this.metrics = options?.metrics;
144 |     this.monotonicNow = options?.monotonicNow ?? (() => Date.now());
145 |   }
146 |
147 |   async deliver(input: WebhookDeliveryInput): Promise<DeliveryResult> {
148 |     const startedAt = this.monotonicNow();
149 |     try {
150 |       const result = await this.deliverInternal(input);
151 |       recordWorkerOperation(this.metrics, {
152 |         workerType: 'webhook_delivery',
153 |         operation: 'deliver',
154 |         outcome:
155 |           result.status === 'delivered'
156 |             ? 'completed'
157 |             : result.status === 'retry_scheduled'
158 |               ? 'retry_scheduled'
159 |               : 'failed',
160 |         durationMs: this.monotonicNow() - startedAt,
161 |       });
162 |       return result;
163 |     } catch (error) {
164 |       recordWorkerOperation(this.metrics, {
165 |         workerType: 'webhook_delivery',
166 |         operation: 'deliver',
167 |         outcome: 'failed',
168 |         durationMs: this.monotonicNow() - startedAt,
169 |       });
170 |       throw error;
171 |     }
172 |   }
173 |
174 |   private async deliverInternal(input: WebhookDeliveryInput): Promise<DeliveryResult> {
175 |     if (!input.endpoint.active) {
176 |       await this.repository.markFailed({
177 |         endpointId: input.endpoint.id,
178 |         eventId: input.event.id,
179 |         errorCode: 'ENDPOINT_INACTIVE',
180 |         at: this.now(),
181 |       });
182 |       return { status: 'failed', errorCode: 'ENDPOINT_INACTIVE' };
183 |     }
184 |
185 |     let url: URL;
186 |     try {
187 |       url = await assertSafeWebhookDestination(input.endpoint.url, this.resolver);
188 |     } catch (error) {
189 |       return this.retryOrFail({
190 |         endpointId: input.endpoint.id,
191 |         eventId: input.event.id,
192 |         attempt: input.attempt,
193 |         errorCode:
194 |           error instanceof WebhookDestinationError || error instanceof WebhookResolutionError
195 |             ? error.code
196 |             : 'UNSAFE_WEBHOOK_DESTINATION',
197 |         retryable: error instanceof WebhookResolutionError,
198 |       });
199 |     }
200 |
201 |     const payload = JSON.stringify(input.event);
202 |     const timestamp = String(Math.floor(this.now().getTime() / 1_000));
203 |     const controller = new AbortController();
204 |     const abortFromCaller = (): void => controller.abort(input.signal?.reason);
205 |     if (input.signal?.aborted) abortFromCaller();
206 |     else input.signal?.addEventListener('abort', abortFromCaller, { once: true });
207 |     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
208 |
209 |     const providerStartedAt = this.monotonicNow();
210 |     let response: Response;
211 |     try {
212 |       response = await this.fetcher(url, {
213 |         method: 'POST',
214 |         redirect: 'error',
215 |         signal: controller.signal,
216 |         headers: {
217 |           'Content-Type': 'application/json',
218 |           'User-Agent': 'Ozzyl-Guard-Webhooks/1.0',
219 |           'X-Ozzyl-Event': input.event.type,
220 |           'X-Ozzyl-Timestamp': timestamp,
221 |           'X-Ozzyl-Signature': signWebhook(payload, timestamp, input.endpoint.signingSecret),
222 |         },
223 |         body: payload,
224 |       });
225 |       const retryable =
226 |         response.status === 408 || response.status === 429 || response.status >= 500;
227 |       recordProviderOperation(this.metrics, {
228 |         providerType: 'webhook_http',
229 |         operation: 'deliver',
230 |         outcome: response.ok ? 'success' : retryable ? 'retryable_failure' : 'permanent_failure',
231 |         durationMs: this.monotonicNow() - providerStartedAt,
232 |       });
233 |     } catch (error) {
234 |       recordProviderOperation(this.metrics, {
235 |         providerType: 'webhook_http',
236 |         operation: 'deliver',
237 |         outcome: 'retryable_failure',
238 |         durationMs: this.monotonicNow() - providerStartedAt,
239 |       });
240 |       const errorCode =
241 |         error instanceof Error && error.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK_ERROR';
242 |       return this.retryOrFail({
243 |         endpointId: input.endpoint.id,
244 |         eventId: input.event.id,
245 |         attempt: input.attempt,
246 |         errorCode,
247 |         retryable: true,
248 |       });
249 |     } finally {
250 |       clearTimeout(timeout);
251 |       input.signal?.removeEventListener('abort', abortFromCaller);
252 |     }
253 |
254 |     if (response.ok) {
255 |       await this.repository.markDelivered({
256 |         endpointId: input.endpoint.id,
257 |         eventId: input.event.id,
258 |         responseStatus: response.status,
259 |         at: this.now(),
260 |       });
261 |       return { status: 'delivered', responseStatus: response.status };
262 |     }
263 |
264 |     return this.retryOrFail({
265 |       endpointId: input.endpoint.id,
266 |       eventId: input.event.id,
267 |       attempt: input.attempt,
268 |       responseStatus: response.status,
269 |       errorCode: response.status === 429 ? 'RATE_LIMITED' : `HTTP_${response.status}`,
270 |       retryable: response.status === 408 || response.status === 429 || response.status >= 500,
271 |     });
272 |   }
273 |
274 |   private async retryOrFail(input: {
275 |     endpointId: string;
276 |     eventId: string;
277 |     attempt: number;
278 |     responseStatus?: number;
279 |     errorCode: string;
280 |     retryable: boolean;
281 |   }): Promise<DeliveryResult> {
282 |     const at = this.now();
283 |     if (input.retryable && input.attempt < this.maxAttempts) {
284 |       const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, input.attempt - 1) * 30_000);
285 |       const nextAttemptAt = new Date(at.getTime() + delayMs);
286 |       await this.repository.markRetry({
287 |         endpointId: input.endpointId,
288 |         eventId: input.eventId,
289 |         ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
290 |         errorCode: input.errorCode,
291 |         nextAttemptAt,
292 |         at,
293 |       });
294 |       return {
295 |         status: 'retry_scheduled',
296 |         ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
297 |         nextAttemptAt: nextAttemptAt.toISOString(),
298 |         errorCode: input.errorCode,
299 |       };
300 |     }
301 |
302 |     await this.repository.markFailed({
303 |       endpointId: input.endpointId,
304 |       eventId: input.eventId,
305 |       ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
306 |       errorCode: input.errorCode,
307 |       at,
308 |     });
309 |     return {
310 |       status: 'failed',
311 |       ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
312 |       errorCode: input.errorCode,
313 |     };
314 |   }
315 | }
316 |
317 | async function resolveHostname(hostname: string): Promise<readonly string[]> {
318 |   if (isIP(hostname)) return [hostname];
319 |   const records = await lookup(hostname, { all: true, verbatim: true });
320 |   return records.map((record) => record.address);
321 | }
322 |
323 | function normalizedHostname(hostname: string): string {
324 |   return hostname.toLowerCase().replace(/^\[/, '').replace(/\]$/, '');
325 | }
326 |
327 | function isNonPublicIp(address: string): boolean {
328 |   const version = isIP(address);
329 |   if (version === 4) {
330 |     const parts = address.split('.').map(Number);
331 |     const [first, second, third] = parts;
332 |     if (parts.length !== 4 || first === undefined || second === undefined || third === undefined) {
333 |       return true;
334 |     }
335 |     return (
336 |       first === 0 ||
337 |       first === 10 ||
338 |       first === 127 ||
339 |       (first === 100 && second >= 64 && second <= 127) ||
340 |       (first === 169 && second === 254) ||
341 |       (first === 172 && second >= 16 && second <= 31) ||
342 |       (first === 192 && second === 0 && third === 0) ||
343 |       (first === 192 && second === 0 && third === 2) ||
344 |       (first === 192 && second === 168) ||
345 |       (first === 198 && (second === 18 || second === 19)) ||
346 |       (first === 198 && second === 51 && third === 100) ||
347 |       (first === 203 && second === 0 && third === 113) ||
348 |       first >= 224
349 |     );
350 |   }
351 |   if (version === 6) {
352 |     const normalized = address.toLowerCase();
353 |     const mappedIpv4 = normalized.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/)?.[1];
354 |     if (mappedIpv4) return isNonPublicIp(mappedIpv4);
355 |     return (
356 |       normalized === '::' ||
357 |       normalized === '::1' ||
358 |       normalized.startsWith('fc') ||
359 |       normalized.startsWith('fd') ||
360 |       /^fe[89ab]/.test(normalized) ||
361 |       normalized.startsWith('ff') ||
362 |       normalized.startsWith('2001:db8:')
363 |     );
364 |   }
365 |   return true;
366 | }
367 |
```

### workers/event-worker/src/postgres.test.ts

Bytes: 11555
SHA-256: bae896368dc8e1cdd1b195661fe7418397dc131204692db0bdb408fbce71e4d1
Lines: 1-296 of 296

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
  3 | import { Pool } from 'pg';
  4 | import { PostgresWebhookDeliveryQueue, WebhookDeliveryLeaseError } from './postgres.js';
  5 |
  6 | const databaseUrl = process.env.DATABASE_URL;
  7 | const integration = describe.skipIf(!databaseUrl);
  8 |
  9 | integration('PostgreSQL webhook delivery leases', () => {
 10 |   const pool = new Pool({ connectionString: databaseUrl, max: 12 });
 11 |   const suffix = randomUUID();
 12 |   const organizationId = `org_event_${suffix}`;
 13 |   const storeId = `sto_event_${suffix}`;
 14 |   const otherOrganizationId = `org_event_other_${suffix}`;
 15 |   const otherStoreId = `sto_event_other_${suffix}`;
 16 |   const endpointId = `we_event_${suffix}`;
 17 |
 18 |   beforeAll(async () => {
 19 |     const client = await pool.connect();
 20 |     try {
 21 |       await client.query('begin');
 22 |       await client.query(
 23 |         `insert into organizations (id, name, slug) values ($1, 'Event Merchant', $2)`,
 24 |         [organizationId, `event-${suffix}`],
 25 |       );
 26 |       await client.query(
 27 |         `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom')`,
 28 |         [storeId, organizationId],
 29 |       );
 30 |       await client.query(
 31 |         `insert into organizations (id, name, slug) values ($1, 'Other Event Merchant', $2)`,
 32 |         [otherOrganizationId, `event-other-${suffix}`],
 33 |       );
 34 |       await client.query(
 35 |         `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Other', 'custom')`,
 36 |         [otherStoreId, otherOrganizationId],
 37 |       );
 38 |       await client.query(
 39 |         `
 40 |           insert into webhook_endpoints (
 41 |             id, organization_id, store_id, url, secret_encrypted, events, status
 42 |           ) values ($1, $2, $3, 'https://merchant.example/hook', 'encrypted', $4::jsonb, 'active')
 43 |         `,
 44 |         [endpointId, organizationId, storeId, JSON.stringify(['assessment.completed'])],
 45 |       );
 46 |       await client.query('commit');
 47 |     } catch (error) {
 48 |       await client.query('rollback');
 49 |       throw error;
 50 |     } finally {
 51 |       client.release();
 52 |     }
 53 |   });
 54 |
 55 |   afterEach(async () => {
 56 |     await pool.query('delete from webhook_deliveries where endpoint_id = $1', [endpointId]);
 57 |   });
 58 |
 59 |   afterAll(async () => {
 60 |     await pool.query('delete from organizations where id = any($1::text[])', [
 61 |       [organizationId, otherOrganizationId],
 62 |     ]);
 63 |     await pool.end();
 64 |   });
 65 |
 66 |   it('lets competing workers claim different due deliveries and protects fresh leases', async () => {
 67 |     const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
 68 |     const at = new Date('2026-07-17T01:00:00.000Z');
 69 |     const firstId = await insertDelivery('compete-a', { at });
 70 |     const secondId = await insertDelivery('compete-b', { at });
 71 |
 72 |     const [first, second] = await Promise.all([
 73 |       queue.claim(`event-a-${suffix}`, at),
 74 |       queue.claim(`event-b-${suffix}`, at),
 75 |     ]);
 76 |     expect(new Set([first?.id, second?.id])).toEqual(new Set([firstId, secondId]));
 77 |     await expect(queue.claim(`event-c-${suffix}`, at)).resolves.toBeNull();
 78 |   });
 79 |
 80 |   it('rejects an expired owner and lets a new worker recover the delivery', async () => {
 81 |     const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
 82 |     const at = new Date('2026-07-17T02:00:00.000Z');
 83 |     const deliveryId = await insertDelivery('expired', {
 84 |       at: new Date(at.getTime() - 180_000),
 85 |       status: 'processing',
 86 |       attempts: 1,
 87 |       claimedBy: `old-event-${suffix}`,
 88 |       claimedAt: new Date(at.getTime() - 120_000),
 89 |       leaseExpiresAt: new Date(at.getTime() - 60_000),
 90 |     });
 91 |
 92 |     await expect(
 93 |       queue.delivered(deliveryId, `old-event-${suffix}`, 204, at),
 94 |     ).rejects.toBeInstanceOf(WebhookDeliveryLeaseError);
 95 |     const claimed = await queue.claim(`new-event-${suffix}`, at);
 96 |     expect(claimed?.id).toBe(deliveryId);
 97 |     await queue.started(deliveryId, `new-event-${suffix}`, new Date(at.getTime() + 1_000));
 98 |     await queue.delivered(deliveryId, `new-event-${suffix}`, 204, new Date(at.getTime() + 2_000));
 99 |
100 |     const stored = await pool.query<{
101 |       status: string;
102 |       attempts: number;
103 |       claimed_by: string | null;
104 |     }>(`select status, attempts, claimed_by from webhook_deliveries where id = $1`, [deliveryId]);
105 |     expect(stored.rows[0]).toEqual({ status: 'delivered', attempts: 2, claimed_by: null });
106 |   });
107 |
108 |   it('renews an active processing lease and rejects another owner', async () => {
109 |     const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
110 |     const at = new Date('2026-07-17T02:30:00.000Z');
111 |     const worker = `renew-event-${suffix}`;
112 |     const deliveryId = await insertDelivery('renew-processing', { at });
113 |
114 |     await expect(queue.claim(worker, at)).resolves.toMatchObject({ id: deliveryId });
115 |     await queue.started(deliveryId, worker, new Date(at.getTime() + 1_000));
116 |     const renewedAt = new Date(at.getTime() + 30_000);
117 |     await queue.renew(deliveryId, worker, renewedAt);
118 |
119 |     await expect(
120 |       queue.renew(deliveryId, `other-event-${suffix}`, new Date(at.getTime() + 31_000)),
121 |     ).rejects.toBeInstanceOf(WebhookDeliveryLeaseError);
122 |     await expect(
123 |       queue.claim(`competitor-event-${suffix}`, new Date(at.getTime() + 62_000)),
124 |     ).resolves.toBeNull();
125 |
126 |     const stored = await pool.query<{ lease_expires_at: Date }>(
127 |       `select lease_expires_at from webhook_deliveries where id = $1`,
128 |       [deliveryId],
129 |     );
130 |     expect(stored.rows[0]?.lease_expires_at.toISOString()).toBe(
131 |       new Date(renewedAt.getTime() + 60_000).toISOString(),
132 |     );
133 |   });
134 |
135 |   it('clears ownership when a retry is scheduled', async () => {
136 |     const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
137 |     const at = new Date('2026-07-17T03:00:00.000Z');
138 |     const deliveryId = await insertDelivery('retry', { at });
139 |     await expect(queue.claim(`retry-event-${suffix}`, at)).resolves.toMatchObject({
140 |       id: deliveryId,
141 |     });
142 |     await queue.started(deliveryId, `retry-event-${suffix}`, new Date(at.getTime() + 1_000));
143 |     const nextAttemptAt = new Date(at.getTime() + 31_000);
144 |     await queue.retry(deliveryId, `retry-event-${suffix}`, {
145 |       responseStatus: 503,
146 |       errorCode: 'HTTP_503',
147 |       nextAttemptAt,
148 |       at: new Date(at.getTime() + 2_000),
149 |     });
150 |
151 |     const stored = await pool.query<{
152 |       status: string;
153 |       attempts: number;
154 |       response_status: number;
155 |       error_code: string;
156 |       claimed_by: string | null;
157 |       next_attempt_at: Date;
158 |     }>(
159 |       `select status, attempts, response_status, error_code, claimed_by, next_attempt_at from webhook_deliveries where id = $1`,
160 |       [deliveryId],
161 |     );
162 |     expect(stored.rows[0]).toMatchObject({
163 |       status: 'retry_scheduled',
164 |       attempts: 1,
165 |       response_status: 503,
166 |       error_code: 'HTTP_503',
167 |       claimed_by: null,
168 |     });
169 |     expect(stored.rows[0]?.next_attempt_at.toISOString()).toBe(nextAttemptAt.toISOString());
170 |   });
171 |
172 |   it('fails an exhausted expired delivery instead of reclaiming it', async () => {
173 |     const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000, maxAttempts: 5 });
174 |     const at = new Date('2026-07-17T04:00:00.000Z');
175 |     const deliveryId = await insertDelivery('exhausted', {
176 |       at: new Date(at.getTime() - 180_000),
177 |       status: 'processing',
178 |       attempts: 5,
179 |       claimedBy: `dead-event-${suffix}`,
180 |       claimedAt: new Date(at.getTime() - 120_000),
181 |       leaseExpiresAt: new Date(at.getTime() - 60_000),
182 |     });
183 |
184 |     await expect(queue.claim(`recovery-event-${suffix}`, at)).resolves.toBeNull();
185 |     const stored = await pool.query<{
186 |       status: string;
187 |       error_code: string;
188 |       claimed_by: string | null;
189 |     }>(`select status, error_code, claimed_by from webhook_deliveries where id = $1`, [deliveryId]);
190 |     expect(stored.rows[0]).toEqual({
191 |       status: 'failed',
192 |       error_code: 'LEASE_EXPIRED',
193 |       claimed_by: null,
194 |     });
195 |   });
196 |
197 |   it('reports bounded queue depth and oldest ready age without delivery identifiers', async () => {
198 |     const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
199 |     const at = new Date('2026-07-17T04:30:00.000Z');
200 |     const baseline = await queue.snapshot(at);
201 |     await insertDelivery('snapshot-ready', { at: new Date(at.getTime() - 120_000) });
202 |     await insertDelivery('snapshot-retry', {
203 |       at: new Date(at.getTime() - 60_000),
204 |       status: 'retry_scheduled',
205 |       attempts: 1,
206 |     });
207 |     await insertDelivery('snapshot-processing', {
208 |       at: new Date(at.getTime() - 180_000),
209 |       status: 'processing',
210 |       attempts: 1,
211 |       claimedBy: `snapshot-event-${suffix}`,
212 |       claimedAt: new Date(at.getTime() - 30_000),
213 |       leaseExpiresAt: new Date(at.getTime() + 30_000),
214 |     });
215 |     await insertDelivery('snapshot-failed', { at, status: 'failed', attempts: 5 });
216 |
217 |     const snapshot = await queue.snapshot(at);
218 |     expect(snapshot.depths.queued).toBe((baseline.depths.queued ?? 0) + 1);
219 |     expect(snapshot.depths.retry_scheduled).toBe((baseline.depths.retry_scheduled ?? 0) + 1);
220 |     expect(snapshot.depths.processing).toBe((baseline.depths.processing ?? 0) + 1);
221 |     expect(snapshot.depths.failed).toBe((baseline.depths.failed ?? 0) + 1);
222 |     expect(snapshot.oldestReadyAgeMs).toBeGreaterThanOrEqual(120_000);
223 |   });
224 |
225 |   it('fails a delivery whose persisted scope does not match its endpoint', async () => {
226 |     const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
227 |     const at = new Date('2026-07-17T05:00:00.000Z');
228 |     const deliveryId = await insertDelivery('scope', {
229 |       at,
230 |       organizationId: otherOrganizationId,
231 |       storeId: otherStoreId,
232 |     });
233 |
234 |     await expect(queue.claim(`scope-event-${suffix}`, at)).resolves.toBeNull();
235 |     const stored = await pool.query<{ status: string; error_code: string }>(
236 |       `select status, error_code from webhook_deliveries where id = $1`,
237 |       [deliveryId],
238 |     );
239 |     expect(stored.rows[0]).toEqual({
240 |       status: 'failed',
241 |       error_code: 'WEBHOOK_SCOPE_MISMATCH',
242 |     });
243 |   });
244 |
245 |   async function insertDelivery(
246 |     label: string,
247 |     options: {
248 |       at: Date;
249 |       status?: string;
250 |       attempts?: number;
251 |       claimedBy?: string;
252 |       claimedAt?: Date;
253 |       leaseExpiresAt?: Date;
254 |       organizationId?: string;
255 |       storeId?: string;
256 |     },
257 |   ): Promise<string> {
258 |     const deliveryId = `whd_${label}_${suffix}`;
259 |     const eventId = `evt_${label}_${suffix}`;
260 |     const scopedOrganizationId = options.organizationId ?? organizationId;
261 |     const scopedStoreId = options.storeId ?? storeId;
262 |     const event = {
263 |       id: eventId,
264 |       type: 'assessment.completed',
265 |       organizationId: scopedOrganizationId,
266 |       storeId: scopedStoreId,
267 |       occurredAt: options.at.toISOString(),
268 |       payload: { assessmentId: `ras_${label}_${suffix}` },
269 |     };
270 |     await pool.query(
271 |       `
272 |         insert into webhook_deliveries (
273 |           id, endpoint_id, organization_id, store_id, event_id, event_type,
274 |           event_payload, occurred_at, status, attempts, next_attempt_at,
275 |           claimed_by, claimed_at, lease_expires_at
276 |         ) values ($1, $2, $3, $4, $5, 'assessment.completed', $6::jsonb, $7, $8, $9, $7, $10, $11, $12)
277 |       `,
278 |       [
279 |         deliveryId,
280 |         endpointId,
281 |         scopedOrganizationId,
282 |         scopedStoreId,
283 |         eventId,
284 |         JSON.stringify(event),
285 |         options.at,
286 |         options.status ?? 'queued',
287 |         options.attempts ?? 0,
288 |         options.claimedBy ?? null,
289 |         options.claimedAt ?? null,
290 |         options.leaseExpiresAt ?? null,
291 |       ],
292 |     );
293 |     return deliveryId;
294 |   }
295 | });
296 |
```

### workers/event-worker/src/postgres.ts

Bytes: 12070
SHA-256: a2eb5dff401745ccea1bbbfecf6d59b88d11eca2d77479e15b4b662990680ef6
Lines: 1-382 of 382

```typescript
  1 | import type { Pool } from 'pg';
  2 | import type { DurableQueueSnapshot } from '@ozzyl/observability';
  3 | import type { WebhookDeliveryRepository } from './index.js';
  4 |
  5 | export interface ClaimedWebhookDelivery {
  6 |   id: string;
  7 |   organizationId: string;
  8 |   storeId: string | null;
  9 |   endpointId: string;
 10 |   endpointUrl: string;
 11 |   secretEncrypted: string;
 12 |   endpointActive: boolean;
 13 |   eventId: string;
 14 |   eventType: string;
 15 |   eventPayload: unknown;
 16 |   occurredAt: Date;
 17 |   attempts: number;
 18 | }
 19 |
 20 | export class WebhookDeliveryLeaseError extends Error {
 21 |   readonly code = 'WEBHOOK_DELIVERY_LEASE_LOST';
 22 |
 23 |   constructor(message = 'Webhook delivery lease is no longer owned by this worker') {
 24 |     super(message);
 25 |     this.name = 'WebhookDeliveryLeaseError';
 26 |   }
 27 | }
 28 |
 29 | export class PostgresWebhookDeliveryQueue {
 30 |   private readonly leaseMs: number;
 31 |   private readonly maxAttempts: number;
 32 |
 33 |   constructor(
 34 |     private readonly pool: Pool,
 35 |     options: { leaseMs?: number; maxAttempts?: number } = {},
 36 |   ) {
 37 |     this.leaseMs = options.leaseMs ?? 60_000;
 38 |     this.maxAttempts = options.maxAttempts ?? 5;
 39 |   }
 40 |
 41 |   async claim(workerId: string, at = new Date()): Promise<ClaimedWebhookDelivery | null> {
 42 |     const client = await this.pool.connect();
 43 |     try {
 44 |       await client.query('begin');
 45 |       await client.query(
 46 |         `
 47 |           update webhook_deliveries wd
 48 |           set status = 'failed',
 49 |             completed_at = $1,
 50 |             error_code = coalesce(wd.error_code, 'WEBHOOK_SCOPE_MISMATCH'),
 51 |             claimed_by = null,
 52 |             claimed_at = null,
 53 |             lease_expires_at = null,
 54 |             updated_at = now()
 55 |           where wd.status not in ('delivered', 'failed')
 56 |             and not exists (
 57 |               select 1
 58 |               from webhook_endpoints we
 59 |               left join stores s
 60 |                 on s.id = wd.store_id and s.organization_id = wd.organization_id
 61 |               where we.id = wd.endpoint_id
 62 |                 and we.organization_id = wd.organization_id
 63 |                 and (we.store_id is null or we.store_id = wd.store_id)
 64 |                 and (wd.store_id is null or s.id is not null)
 65 |             )
 66 |         `,
 67 |         [at],
 68 |       );
 69 |       await client.query(
 70 |         `
 71 |           update webhook_deliveries
 72 |           set status = 'failed',
 73 |             completed_at = $1,
 74 |             error_code = coalesce(error_code, 'LEASE_EXPIRED'),
 75 |             claimed_by = null,
 76 |             claimed_at = null,
 77 |             lease_expires_at = null,
 78 |             updated_at = now()
 79 |           where status in ('claimed', 'processing')
 80 |             and (lease_expires_at is null or lease_expires_at <= $1)
 81 |             and attempts >= $2
 82 |         `,
 83 |         [at, this.maxAttempts],
 84 |       );
 85 |       const leaseExpiresAt = new Date(at.getTime() + this.leaseMs);
 86 |       const result = await client.query<{
 87 |         id: string;
 88 |         organization_id: string;
 89 |         store_id: string | null;
 90 |         endpoint_id: string;
 91 |         url: string;
 92 |         secret_encrypted: string;
 93 |         endpoint_status: string;
 94 |         event_id: string;
 95 |         event_type: string;
 96 |         event_payload: unknown;
 97 |         occurred_at: Date;
 98 |         attempts: number;
 99 |       }>(
100 |         `
101 |           with candidate as (
102 |             select wd.id
103 |             from webhook_deliveries wd
104 |             join webhook_endpoints we
105 |               on we.id = wd.endpoint_id
106 |               and we.organization_id = wd.organization_id
107 |               and (we.store_id is null or we.store_id = wd.store_id)
108 |             left join stores s
109 |               on s.id = wd.store_id and s.organization_id = wd.organization_id
110 |             where wd.attempts < $4
111 |               and (wd.store_id is null or s.id is not null)
112 |               and (
113 |                 (
114 |                   wd.status in ('queued', 'retry_scheduled')
115 |                   and coalesce(wd.next_attempt_at, wd.created_at) <= $2
116 |                 )
117 |                 or (
118 |                   wd.status in ('claimed', 'processing')
119 |                   and (wd.lease_expires_at is null or wd.lease_expires_at <= $2)
120 |                 )
121 |               )
122 |             order by
123 |               case when wd.status in ('claimed', 'processing') then 0 else 1 end,
124 |               coalesce(wd.lease_expires_at, wd.next_attempt_at, wd.created_at) asc,
125 |               wd.id asc
126 |             for update of wd skip locked
127 |             limit 1
128 |           ), claimed as (
129 |             update webhook_deliveries wd
130 |             set status = 'claimed',
131 |               claimed_by = $1,
132 |               claimed_at = $2,
133 |               lease_expires_at = $3,
134 |               completed_at = null,
135 |               updated_at = now()
136 |             from candidate
137 |             where wd.id = candidate.id
138 |             returning wd.*
139 |           )
140 |           select
141 |             claimed.id,
142 |             claimed.organization_id,
143 |             claimed.store_id,
144 |             claimed.endpoint_id,
145 |             we.url,
146 |             we.secret_encrypted,
147 |             we.status as endpoint_status,
148 |             claimed.event_id,
149 |             claimed.event_type,
150 |             claimed.event_payload,
151 |             claimed.occurred_at,
152 |             claimed.attempts
153 |           from claimed
154 |           join webhook_endpoints we on we.id = claimed.endpoint_id
155 |         `,
156 |         [workerId, at, leaseExpiresAt, this.maxAttempts],
157 |       );
158 |       await client.query('commit');
159 |       const row = result.rows[0];
160 |       return row
161 |         ? {
162 |             id: row.id,
163 |             organizationId: row.organization_id,
164 |             storeId: row.store_id,
165 |             endpointId: row.endpoint_id,
166 |             endpointUrl: row.url,
167 |             secretEncrypted: [REDACTED_SECRET],
168 |             endpointActive: row.endpoint_status === 'active',
169 |             eventId: row.event_id,
170 |             eventType: row.event_type,
171 |             eventPayload: row.event_payload,
172 |             occurredAt: row.occurred_at,
173 |             attempts: row.attempts,
174 |           }
175 |         : null;
176 |     } catch (error) {
177 |       await client.query('rollback').catch(() => undefined);
178 |       throw error;
179 |     } finally {
180 |       client.release();
181 |     }
182 |   }
183 |
184 |   async started(deliveryId: string, workerId: string, at = new Date()): Promise<void> {
185 |     const result = await this.pool.query(
186 |       `
187 |         update webhook_deliveries
188 |         set status = 'processing',
189 |           attempts = attempts + 1,
190 |           lease_expires_at = $4,
191 |           updated_at = now()
192 |         where id = $1
193 |           and claimed_by = $2
194 |           and status = 'claimed'
195 |           and lease_expires_at > $3
196 |       `,
197 |       [deliveryId, workerId, at, new Date(at.getTime() + this.leaseMs)],
198 |     );
199 |     this.assertOwned(result.rowCount);
200 |   }
201 |
202 |   async renew(deliveryId: string, workerId: string, at = new Date()): Promise<void> {
203 |     const result = await this.pool.query(
204 |       `
205 |         update webhook_deliveries
206 |         set lease_expires_at = $3, updated_at = now()
207 |         where id = $1
208 |           and claimed_by = $2
209 |           and status in ('claimed', 'processing')
210 |           and lease_expires_at > $4
211 |       `,
212 |       [deliveryId, workerId, new Date(at.getTime() + this.leaseMs), at],
213 |     );
214 |     this.assertOwned(result.rowCount);
215 |   }
216 |
217 |   async delivered(
218 |     deliveryId: string,
219 |     workerId: string,
220 |     responseStatus: number,
221 |     at = new Date(),
222 |   ): Promise<void> {
223 |     const result = await this.pool.query(
224 |       `
225 |         update webhook_deliveries
226 |         set status = 'delivered',
227 |           response_status = $3,
228 |           error_code = null,
229 |           completed_at = $4,
230 |           claimed_by = null,
231 |           claimed_at = null,
232 |           lease_expires_at = null,
233 |           updated_at = now()
234 |         where id = $1
235 |           and claimed_by = $2
236 |           and status = 'processing'
237 |           and lease_expires_at > $4
238 |       `,
239 |       [deliveryId, workerId, responseStatus, at],
240 |     );
241 |     this.assertOwned(result.rowCount);
242 |   }
243 |
244 |   async retry(
245 |     deliveryId: string,
246 |     workerId: string,
247 |     input: {
248 |       responseStatus?: number;
249 |       errorCode: string;
250 |       nextAttemptAt: Date;
251 |       at: Date;
252 |     },
253 |   ): Promise<void> {
254 |     const result = await this.pool.query(
255 |       `
256 |         update webhook_deliveries
257 |         set status = 'retry_scheduled',
258 |           next_attempt_at = $3,
259 |           response_status = $4,
260 |           error_code = $5,
261 |           completed_at = null,
262 |           claimed_by = null,
263 |           claimed_at = null,
264 |           lease_expires_at = null,
265 |           updated_at = now()
266 |         where id = $1
267 |           and claimed_by = $2
268 |           and status = 'processing'
269 |           and lease_expires_at > $6
270 |       `,
271 |       [
272 |         deliveryId,
273 |         workerId,
274 |         input.nextAttemptAt,
275 |         input.responseStatus ?? null,
276 |         input.errorCode,
277 |         input.at,
278 |       ],
279 |     );
280 |     this.assertOwned(result.rowCount);
281 |   }
282 |
283 |   async failed(
284 |     deliveryId: string,
285 |     workerId: string,
286 |     input: { responseStatus?: number; errorCode: string; at: Date },
287 |   ): Promise<void> {
288 |     const result = await this.pool.query(
289 |       `
290 |         update webhook_deliveries
291 |         set status = 'failed',
292 |           response_status = $3,
293 |           error_code = $4,
294 |           completed_at = $5,
295 |           claimed_by = null,
296 |           claimed_at = null,
297 |           lease_expires_at = null,
298 |           updated_at = now()
299 |         where id = $1
300 |           and claimed_by = $2
301 |           and status in ('claimed', 'processing')
302 |           and lease_expires_at > $5
303 |       `,
304 |       [deliveryId, workerId, input.responseStatus ?? null, input.errorCode, input.at],
305 |     );
306 |     this.assertOwned(result.rowCount);
307 |   }
308 |
309 |   async snapshot(at = new Date()): Promise<DurableQueueSnapshot> {
310 |     const result = await this.pool.query<{
311 |       queued: number;
312 |       retry_scheduled: number;
313 |       claimed: number;
314 |       processing: number;
315 |       failed: number;
316 |       oldest_ready_age_ms: number;
317 |     }>(
318 |       `
319 |         select
320 |           count(*) filter (where status = 'queued')::int as queued,
321 |           count(*) filter (where status = 'retry_scheduled')::int as retry_scheduled,
322 |           count(*) filter (where status = 'claimed')::int as claimed,
323 |           count(*) filter (where status = 'processing')::int as processing,
324 |           count(*) filter (where status = 'failed')::int as failed,
325 |           coalesce(
326 |             extract(epoch from ($1 - min(coalesce(next_attempt_at, created_at)) filter (
327 |               where status in ('queued', 'retry_scheduled')
328 |                 and coalesce(next_attempt_at, created_at) <= $1
329 |             ))) * 1000,
330 |             0
331 |           )::double precision as oldest_ready_age_ms
332 |         from webhook_deliveries
333 |       `,
334 |       [at],
335 |     );
336 |     const row = result.rows[0];
337 |     return {
338 |       depths: {
339 |         queued: row?.queued ?? 0,
340 |         retry_scheduled: row?.retry_scheduled ?? 0,
341 |         claimed: row?.claimed ?? 0,
342 |         processing: row?.processing ?? 0,
343 |         failed: row?.failed ?? 0,
344 |       },
345 |       oldestReadyAgeMs: Math.max(0, Number(row?.oldest_ready_age_ms ?? 0)),
346 |     };
347 |   }
348 |
349 |   repositoryFor(
350 |     delivery: ClaimedWebhookDelivery,
351 |     workerId: string,
352 |     beforeTransition: () => Promise<void> = async () => undefined,
353 |   ): WebhookDeliveryRepository {
354 |     const assertIdentity = (endpointId: string, eventId: string): void => {
355 |       if (endpointId !== delivery.endpointId || eventId !== delivery.eventId) {
356 |         throw new WebhookDeliveryLeaseError('Webhook delivery identity does not match the claim');
357 |       }
358 |     };
359 |     return {
360 |       markDelivered: async (input) => {
361 |         assertIdentity(input.endpointId, input.eventId);
362 |         await beforeTransition();
363 |         await this.delivered(delivery.id, workerId, input.responseStatus, input.at);
364 |       },
365 |       markRetry: async (input) => {
366 |         assertIdentity(input.endpointId, input.eventId);
367 |         await beforeTransition();
368 |         await this.retry(delivery.id, workerId, input);
369 |       },
370 |       markFailed: async (input) => {
371 |         assertIdentity(input.endpointId, input.eventId);
372 |         await beforeTransition();
373 |         await this.failed(delivery.id, workerId, input);
374 |       },
375 |     };
376 |   }
377 |
378 |   private assertOwned(rowCount: number | null): void {
379 |     if (rowCount !== 1) throw new WebhookDeliveryLeaseError();
380 |   }
381 | }
382 |
```

### workers/event-worker/src/runner.ts

Bytes: 8363
SHA-256: 4eaf51bac0c185cffa9252573c38471dde2529c8c7f42e3500eb14488505eaab
Lines: 1-254 of 254

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import { LeaseHeartbeat } from '@ozzyl/database';
  4 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  5 | import {
  6 |   createMetricRecorder,
  7 |   createStructuredLogger,
  8 |   observeRepositoryOperation,
  9 |   recordDurableQueueSnapshot,
 10 |   recordWorkerClaimFailure,
 11 |   type RepositoryMetricOperation,
 12 | } from '@ozzyl/observability';
 13 | import type { DomainEvent } from '@ozzyl/shared-types';
 14 | import { EventWorker } from './index.js';
 15 | import {
 16 |   PostgresWebhookDeliveryQueue,
 17 |   WebhookDeliveryLeaseError,
 18 |   type ClaimedWebhookDelivery,
 19 | } from './postgres.js';
 20 |
 21 | const required = (name: string): string => {
 22 |   const value = process.env[name];
 23 |   if (!value) throw new Error(`${name} is required`);
 24 |   return value;
 25 | };
 26 |
 27 | const positiveInteger = (name: string, fallback: number): number => {
 28 |   const value = Number(process.env[name] ?? fallback);
 29 |   if (!Number.isSafeInteger(value) || value <= 0) {
 30 |     throw new Error(`${name} must be a positive integer`);
 31 |   }
 32 |   return value;
 33 | };
 34 |
 35 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 36 | const cipher = new AesGcmEnvelopeCipher(
 37 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 38 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 39 | );
 40 | const pollMs = positiveInteger('EVENT_WORKER_POLL_MS', 5_000);
 41 | const queueMetricsMs = positiveInteger('EVENT_WORKER_QUEUE_METRICS_MS', 30_000);
 42 | const leaseMs = positiveInteger('EVENT_WORKER_LEASE_MS', 60_000);
 43 | const leaseRenewMs = positiveInteger('EVENT_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
 44 | const timeoutMs = positiveInteger('WEBHOOK_TIMEOUT_MS', 5_000);
 45 | const maxAttempts = positiveInteger('EVENT_WORKER_MAX_ATTEMPTS', 5);
 46 | if (leaseMs <= timeoutMs + 5_000) {
 47 |   throw new Error('EVENT_WORKER_LEASE_MS must exceed WEBHOOK_TIMEOUT_MS by more than 5000ms');
 48 | }
 49 | if (leaseRenewMs * 2 > leaseMs) {
 50 |   throw new Error('EVENT_WORKER_LEASE_RENEW_MS must not exceed half the lease');
 51 | }
 52 | const workerId = process.env.EVENT_WORKER_ID ?? `event-${randomUUID()}`;
 53 | const log = createStructuredLogger({
 54 |   service: 'event-worker',
 55 |   environment: process.env.NODE_ENV ?? 'development',
 56 | });
 57 | const metrics = createMetricRecorder({
 58 |   service: 'event-worker',
 59 |   environment: process.env.NODE_ENV ?? 'development',
 60 | });
 61 | const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs, maxAttempts });
 62 | let stopping = false;
 63 | let nextQueueMetricsAt = 0;
 64 |
 65 | const observeQueue = <T>(
 66 |   operation: RepositoryMetricOperation,
 67 |   task: () => Promise<T>,
 68 |   isEmpty?: (value: T) => boolean,
 69 | ): Promise<T> =>
 70 |   observeRepositoryOperation(
 71 |     metrics,
 72 |     {
 73 |       repositoryType: 'webhook_queue',
 74 |       operation,
 75 |       ...(isEmpty === undefined ? {} : { isEmpty }),
 76 |     },
 77 |     task,
 78 |   );
 79 |
 80 | async function recordQueueMetricsIfDue(): Promise<void> {
 81 |   const now = Date.now();
 82 |   if (now < nextQueueMetricsAt) return;
 83 |   nextQueueMetricsAt = now + queueMetricsMs;
 84 |   const snapshot = await observeQueue('snapshot', () => queue.snapshot(new Date(now)));
 85 |   recordDurableQueueSnapshot(metrics, 'webhook_delivery', snapshot);
 86 | }
 87 |
 88 | async function run(): Promise<void> {
 89 |   log.info('event.worker.started', { worker_id: workerId });
 90 |   while (!stopping) {
 91 |     await recordQueueMetricsIfDue().catch((error) => logError(error, 'QUEUE_METRICS_FAILED'));
 92 |     const delivery = await observeQueue(
 93 |       'claim',
 94 |       () => queue.claim(workerId),
 95 |       (value) => value === null,
 96 |     ).catch((error) => {
 97 |       recordWorkerClaimFailure(metrics, 'webhook_delivery');
 98 |       logError(error, 'EVENT_CLAIM_FAILED');
 99 |       return null;
100 |     });
101 |     if (!delivery) {
102 |       await sleep(pollMs);
103 |       continue;
104 |     }
105 |
106 |     let heartbeat: LeaseHeartbeat | null = null;
107 |     try {
108 |       const startedAt = new Date();
109 |       await observeQueue('start', () => queue.started(delivery.id, workerId, startedAt));
110 |       heartbeat = new LeaseHeartbeat({
111 |         intervalMs: leaseRenewMs,
112 |         renew: (at) => observeQueue('renew', () => queue.renew(delivery.id, workerId, at)),
113 |       }).start();
114 |       const event = parseEvent(delivery);
115 |       if (!delivery.endpointActive) {
116 |         await heartbeat.stop();
117 |         await observeQueue('fail', () =>
118 |           queue.failed(delivery.id, workerId, {
119 |             errorCode: 'ENDPOINT_INACTIVE',
120 |             at: new Date(),
121 |           }),
122 |         );
123 |         heartbeat = null;
124 |         continue;
125 |       }
126 |       const signingSecret= [REDACTED_SECRET](delivery);
127 |       const repository = queue.repositoryFor(
128 |         delivery,
129 |         workerId,
130 |         () => heartbeat?.stop() ?? Promise.resolve(),
131 |       );
132 |       const worker = new EventWorker(
133 |         {
134 |           markDelivered: (input) => observeQueue('complete', () => repository.markDelivered(input)),
135 |           markRetry: (input) => observeQueue('retry', () => repository.markRetry(input)),
136 |           markFailed: (input) => observeQueue('fail', () => repository.markFailed(input)),
137 |         },
138 |         {
139 |           timeoutMs,
140 |           maxAttempts,
141 |           metrics,
142 |         },
143 |       );
144 |       await worker.deliver({
145 |         endpoint: {
146 |           id: delivery.endpointId,
147 |           url: delivery.endpointUrl,
148 |           signingSecret,
149 |           active: true,
150 |         },
151 |         event,
152 |         attempt: delivery.attempts + 1,
153 |         signal: heartbeat.signal,
154 |       });
155 |       await heartbeat.stopQuietly();
156 |       heartbeat = null;
157 |     } catch (error) {
158 |       let failure = error;
159 |       if (heartbeat) {
160 |         try {
161 |           await heartbeat.stop();
162 |         } catch (leaseError) {
163 |           failure = leaseError;
164 |         }
165 |         heartbeat = null;
166 |       }
167 |       if (!(failure instanceof WebhookDeliveryLeaseError)) {
168 |         const code = errorCode(failure, 'EVENT_DELIVERY_FAILED');
169 |         await observeQueue('fail', () =>
170 |           queue.failed(delivery.id, workerId, { errorCode: code, at: new Date() }),
171 |         ).catch((stateError) => logError(stateError, 'EVENT_FAILURE_STATE_LOST'));
172 |       }
173 |       logError(failure, 'EVENT_DELIVERY_FAILED');
174 |     }
175 |   }
176 |   await pool.end();
177 | }
178 |
179 | function parseEvent(delivery: ClaimedWebhookDelivery): DomainEvent {
180 |   const value = delivery.eventPayload;
181 |   if (!value || typeof value !== 'object') throw coded('INVALID_EVENT_PAYLOAD');
182 |   const event = value as Record<string, unknown>;
183 |   const allowedTypes = new Set([
184 |     'assessment.completed',
185 |     'verification.verified',
186 |     'verification.failed',
187 |     'courier.connection_failed',
188 |     'order.outcome_recorded',
189 |     'usage.limit_warning',
190 |   ]);
191 |   if (
192 |     event.id !== delivery.eventId ||
193 |     event.type !== delivery.eventType ||
194 |     typeof event.type !== 'string' ||
195 |     !allowedTypes.has(event.type) ||
196 |     event.organizationId !== delivery.organizationId ||
197 |     (delivery.storeId === null
198 |       ? event.storeId !== undefined
199 |       : event.storeId !== delivery.storeId) ||
200 |     typeof event.occurredAt !== 'string' ||
201 |     Number.isNaN(Date.parse(event.occurredAt)) ||
202 |     new Date(event.occurredAt).getTime() !== delivery.occurredAt.getTime() ||
203 |     !event.payload ||
204 |     typeof event.payload !== 'object'
205 |   ) {
206 |     throw coded('INVALID_EVENT_PAYLOAD');
207 |   }
208 |   return event as unknown as DomainEvent;
209 | }
210 |
211 | function decryptSigningSecret(delivery: ClaimedWebhookDelivery): string {
212 |   try {
213 |     const value = cipher.decrypt<unknown>(
214 |       delivery.secretEncrypted,
215 |       `webhook-endpoint:${delivery.endpointId}`,
216 |     );
217 |     const signingSecret =
218 |       typeof value === 'string'
219 |         ? value
220 |         : value && typeof value === 'object' && 'signingSecret' in value
221 |           ? String(value.signingSecret)
222 |           : '';
223 |     if (signingSecret.length < 16) throw new Error('Signing secret is invalid');
224 |     return signingSecret;
225 |   } catch {
226 |     throw coded('WEBHOOK_SECRET_DECRYPTION_FAILED');
227 |   }
228 | }
229 |
230 | function coded(code: string): Error & { code: string } {
231 |   return Object.assign(new Error(code), { code });
232 | }
233 |
234 | function errorCode(error: unknown, fallback: string): string {
235 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
236 | }
237 |
238 | function logError(error: unknown, fallback: string): void {
239 |   log.error('event.worker.error', {
240 |     code: errorCode(error, fallback),
241 |     worker_id: workerId,
242 |   });
243 | }
244 |
245 | const sleep = (milliseconds: number): Promise<void> =>
246 |   new Promise((resolve) => setTimeout(resolve, milliseconds));
247 |
248 | const stop = (): void => {
249 |   stopping = true;
250 | };
251 | process.once('SIGTERM', stop);
252 | process.once('SIGINT', stop);
253 | await run();
254 |
```

### workers/verification-worker/src/index.test.ts

Bytes: 5219
SHA-256: 5bf0c1cabd373ec7bb83fb9c6741b8dfb632c69ca8210f9f4123ff4c6b83f00f
Lines: 1-162 of 162

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import { createMetricRecorder } from '@ozzyl/observability';
  3 | import { OtpProviderError } from '@ozzyl/verification';
  4 | import { VerificationWorker } from './index.js';
  5 | function parseMetricLine(line: string): unknown {
  6 |   return JSON.parse(line) as unknown;
  7 | }
  8 |
  9 | const delivery = {
 10 |   jobId: 'vjob_1',
 11 |   verificationId: 'ver_1',
 12 |   organizationId: 'org_1',
 13 |   storeId: 'sto_1',
 14 |   phone: '01712345678',
 15 |   otp: '123456',
 16 |   purpose: 'cod_order_confirmation',
 17 |   expiresAt: new Date('2026-07-17T10:10:00.000Z'),
 18 |   attempt: 1,
 19 | };
 20 |
 21 | function reporter() {
 22 |   return {
 23 |     delivered: vi.fn(async () => undefined),
 24 |     retry: vi.fn(async () => undefined),
 25 |     failed: vi.fn(async () => undefined),
 26 |   };
 27 | }
 28 |
 29 | describe('VerificationWorker', () => {
 30 |   it('delivers with bounded metrics without exposing the OTP', async () => {
 31 |     const state = reporter();
 32 |     const metricLines: string[] = [];
 33 |     const ticks = [10, 12, 16, 18];
 34 |     const provider = {
 35 |       send: vi.fn(async ({ message }: { message: string }) => {
 36 |         expect(message).toContain('123456');
 37 |         return { providerMessageId: 'msg_1', accepted: true };
 38 |       }),
 39 |     };
 40 |     const worker = new VerificationWorker(provider, state, {
 41 |       now: () => new Date('2026-07-17T10:00:00.000Z'),
 42 |       monotonicNow: () => ticks.shift() ?? 18,
 43 |       metrics: createMetricRecorder({
 44 |         service: 'verification-worker-test',
 45 |         environment: 'test',
 46 |         write: (line) => metricLines.push(line),
 47 |       }),
 48 |     });
 49 |     await expect(worker.process(delivery)).resolves.toEqual({
 50 |       status: 'delivered',
 51 |       providerMessageId: 'msg_1',
 52 |     });
 53 |     expect(state.delivered).toHaveBeenCalledOnce();
 54 |     expect(JSON.stringify(state.delivered.mock.calls)).not.toContain('123456');
 55 |     expect(metricLines.map(parseMetricLine)).toEqual([
 56 |       expect.objectContaining({
 57 |         name: 'ozzyl.provider.operations',
 58 |         attributes: {
 59 |           provider_type: 'verification_delivery',
 60 |           operation: 'send',
 61 |           outcome: 'success',
 62 |         },
 63 |       }),
 64 |       expect.objectContaining({
 65 |         name: 'ozzyl.provider.operation.duration',
 66 |         value: 4,
 67 |         attributes: {
 68 |           provider_type: 'verification_delivery',
 69 |           operation: 'send',
 70 |           outcome: 'success',
 71 |         },
 72 |       }),
 73 |       expect.objectContaining({
 74 |         name: 'ozzyl.worker.operations',
 75 |         attributes: {
 76 |           worker_type: 'verification_delivery',
 77 |           operation: 'send',
 78 |           outcome: 'completed',
 79 |         },
 80 |       }),
 81 |       expect.objectContaining({
 82 |         name: 'ozzyl.worker.operation.duration',
 83 |         value: 8,
 84 |         attributes: {
 85 |           worker_type: 'verification_delivery',
 86 |           operation: 'send',
 87 |           outcome: 'completed',
 88 |         },
 89 |       }),
 90 |     ]);
 91 |     expect(metricLines.join('\n')).not.toContain('123456');
 92 |     expect(metricLines.join('\n')).not.toContain('ver_1');
 93 |   });
 94 |
 95 |   it('schedules retryable provider failures with bounded backoff', async () => {
 96 |     const state = reporter();
 97 |     const worker = new VerificationWorker(
 98 |       {
 99 |         async send() {
100 |           throw new OtpProviderError('PROVIDER_UNAVAILABLE', true, 'temporary outage');
101 |         },
102 |       },
103 |       state,
104 |       { now: () => new Date('2026-07-17T10:00:00.000Z') },
105 |     );
106 |     const result = await worker.process(delivery);
107 |     expect(result).toMatchObject({ status: 'retry_scheduled', errorCode: 'PROVIDER_UNAVAILABLE' });
108 |     expect(state.retry).toHaveBeenCalledOnce();
109 |     expect(state.failed).not.toHaveBeenCalled();
110 |   });
111 |
112 |   it('fails provider rejection without retrying', async () => {
113 |     const state = reporter();
114 |     const worker = new VerificationWorker(
115 |       {
116 |         async send() {
117 |           return { providerMessageId: 'rejected', accepted: false };
118 |         },
119 |       },
120 |       state,
121 |       { now: () => new Date('2026-07-17T10:00:00.000Z') },
122 |     );
123 |     await expect(worker.process(delivery)).resolves.toEqual({
124 |       status: 'failed',
125 |       errorCode: 'OTP_PROVIDER_REJECTED',
126 |     });
127 |     expect(state.failed).toHaveBeenCalledOnce();
128 |     expect(state.retry).not.toHaveBeenCalled();
129 |   });
130 |
131 |   it('aborts an active OTP request when the worker lease is lost', async () => {
132 |     const state = reporter();
133 |     const provider = {
134 |       send: vi.fn(
135 |         async ({ signal }: { signal?: AbortSignal }) =>
136 |           new Promise<{ providerMessageId: string; accepted: boolean }>((_resolve, reject) => {
137 |             signal?.addEventListener(
138 |               'abort',
139 |               () => reject(new DOMException('Aborted', 'AbortError')),
140 |               { once: true },
141 |             );
142 |           }),
143 |       ),
144 |     };
145 |     const worker = new VerificationWorker(provider, state, {
146 |       timeoutMs: 60_000,
147 |       now: () => new Date('2026-07-17T10:00:00.000Z'),
148 |     });
149 |     const controller = new AbortController();
150 |     const result = worker.process({ ...delivery, signal: controller.signal });
151 |
152 |     controller.abort(
153 |       Object.assign(new Error('lease lost'), { code: 'VERIFICATION_DELIVERY_LEASE_LOST' }),
154 |     );
155 |     await expect(result).resolves.toMatchObject({
156 |       status: 'retry_scheduled',
157 |       errorCode: 'OTP_PROVIDER_TIMEOUT',
158 |     });
159 |     expect(state.retry).toHaveBeenCalledOnce();
160 |   });
161 | });
162 |
```

### workers/verification-worker/src/index.ts

Bytes: 6036
SHA-256: 6f1dcf0f619cfb9b475b1f1ab98feec384a9628eef17555b7f2c74ec7af3c0a8
Lines: 1-161 of 161

```typescript
  1 | import {
  2 |   recordProviderOperation,
  3 |   recordWorkerOperation,
  4 |   type MetricRecorder,
  5 | } from '@ozzyl/observability';
  6 | import { OtpProviderError, formatOtpMessage, type OtpDeliveryProvider } from '@ozzyl/verification';
  7 |
  8 | export interface VerificationDelivery {
  9 |   jobId: string;
 10 |   verificationId: string;
 11 |   organizationId: string;
 12 |   storeId: string;
 13 |   phone: string;
 14 |   otp: string;
 15 |   purpose: string;
 16 |   expiresAt: Date;
 17 |   attempt: number;
 18 |   signal?: AbortSignal;
 19 | }
 20 |
 21 | export interface VerificationDeliveryReporter {
 22 |   delivered(jobId: string, providerMessageId: string, at: Date): Promise<void>;
 23 |   retry(jobId: string, errorCode: string, nextAttemptAt: Date, at: Date): Promise<void>;
 24 |   failed(jobId: string, errorCode: string, at: Date): Promise<void>;
 25 | }
 26 |
 27 | export type VerificationDeliveryResult =
 28 |   | { status: 'delivered'; providerMessageId: string }
 29 |   | { status: 'retry_scheduled'; errorCode: string; nextAttemptAt: string }
 30 |   | { status: 'failed'; errorCode: string };
 31 |
 32 | export class VerificationWorker {
 33 |   private readonly maxAttempts: number;
 34 |   private readonly timeoutMs: number;
 35 |   private readonly now: () => Date;
 36 |   private readonly metrics: MetricRecorder | undefined;
 37 |   private readonly monotonicNow: () => number;
 38 |
 39 |   constructor(
 40 |     private readonly provider: OtpDeliveryProvider,
 41 |     private readonly reporter: VerificationDeliveryReporter,
 42 |     options: {
 43 |       maxAttempts?: number;
 44 |       timeoutMs?: number;
 45 |       now?: () => Date;
 46 |       metrics?: MetricRecorder;
 47 |       monotonicNow?: () => number;
 48 |     } = {},
 49 |   ) {
 50 |     this.maxAttempts = options.maxAttempts ?? 5;
 51 |     this.timeoutMs = options.timeoutMs ?? 10_000;
 52 |     this.now = options.now ?? (() => new Date());
 53 |     this.metrics = options.metrics;
 54 |     this.monotonicNow = options.monotonicNow ?? (() => Date.now());
 55 |   }
 56 |
 57 |   async process(delivery: VerificationDelivery): Promise<VerificationDeliveryResult> {
 58 |     const monotonicStartedAt = this.monotonicNow();
 59 |     try {
 60 |       const result = await this.processDelivery(delivery);
 61 |       recordWorkerOperation(this.metrics, {
 62 |         workerType: 'verification_delivery',
 63 |         operation: 'send',
 64 |         outcome:
 65 |           result.status === 'delivered'
 66 |             ? 'completed'
 67 |             : result.status === 'retry_scheduled'
 68 |               ? 'retry_scheduled'
 69 |               : 'failed',
 70 |         durationMs: this.monotonicNow() - monotonicStartedAt,
 71 |       });
 72 |       return result;
 73 |     } catch (error) {
 74 |       recordWorkerOperation(this.metrics, {
 75 |         workerType: 'verification_delivery',
 76 |         operation: 'send',
 77 |         outcome: 'failed',
 78 |         durationMs: this.monotonicNow() - monotonicStartedAt,
 79 |       });
 80 |       throw error;
 81 |     }
 82 |   }
 83 |
 84 |   private async processDelivery(
 85 |     delivery: VerificationDelivery,
 86 |   ): Promise<VerificationDeliveryResult> {
 87 |     const startedAt = this.now();
 88 |     if (delivery.expiresAt.getTime() <= startedAt.getTime() + this.timeoutMs) {
 89 |       await this.reporter.failed(delivery.jobId, 'OTP_EXPIRED_BEFORE_DELIVERY', startedAt);
 90 |       return { status: 'failed', errorCode: 'OTP_EXPIRED_BEFORE_DELIVERY' };
 91 |     }
 92 |
 93 |     const controller = new AbortController();
 94 |     const abortFromCaller = (): void => controller.abort(delivery.signal?.reason);
 95 |     if (delivery.signal?.aborted) abortFromCaller();
 96 |     else delivery.signal?.addEventListener('abort', abortFromCaller, { once: true });
 97 |     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
 98 |     const providerStartedAt = this.monotonicNow();
 99 |     try {
100 |       const result = await this.provider.send({
101 |         phone: delivery.phone,
102 |         message: formatOtpMessage(delivery.otp),
103 |         idempotencyKey: delivery.verificationId,
104 |         signal: controller.signal,
105 |       });
106 |       if (!result.accepted) {
107 |         recordProviderOperation(this.metrics, {
108 |           providerType: 'verification_delivery',
109 |           operation: 'send',
110 |           outcome: 'permanent_failure',
111 |           durationMs: this.monotonicNow() - providerStartedAt,
112 |         });
113 |         await this.reporter.failed(delivery.jobId, 'OTP_PROVIDER_REJECTED', this.now());
114 |         return { status: 'failed', errorCode: 'OTP_PROVIDER_REJECTED' };
115 |       }
116 |       recordProviderOperation(this.metrics, {
117 |         providerType: 'verification_delivery',
118 |         operation: 'send',
119 |         outcome: 'success',
120 |         durationMs: this.monotonicNow() - providerStartedAt,
121 |       });
122 |       await this.reporter.delivered(delivery.jobId, result.providerMessageId, this.now());
123 |       return { status: 'delivered', providerMessageId: result.providerMessageId };
124 |     } catch (error) {
125 |       const classified = classifyProviderError(error);
126 |       recordProviderOperation(this.metrics, {
127 |         providerType: 'verification_delivery',
128 |         operation: 'send',
129 |         outcome: classified.retryable ? 'retryable_failure' : 'permanent_failure',
130 |         durationMs: this.monotonicNow() - providerStartedAt,
131 |       });
132 |       const at = this.now();
133 |       if (classified.retryable && delivery.attempt < this.maxAttempts) {
134 |         const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, delivery.attempt - 1) * 30_000);
135 |         const nextAttemptAt = new Date(at.getTime() + delayMs);
136 |         await this.reporter.retry(delivery.jobId, classified.code, nextAttemptAt, at);
137 |         return {
138 |           status: 'retry_scheduled',
139 |           errorCode: classified.code,
140 |           nextAttemptAt: nextAttemptAt.toISOString(),
141 |         };
142 |       }
143 |       await this.reporter.failed(delivery.jobId, classified.code, at);
144 |       return { status: 'failed', errorCode: classified.code };
145 |     } finally {
146 |       clearTimeout(timeout);
147 |       delivery.signal?.removeEventListener('abort', abortFromCaller);
148 |     }
149 |   }
150 | }
151 |
152 | function classifyProviderError(error: unknown): { code: string; retryable: boolean } {
153 |   if (error instanceof OtpProviderError) {
154 |     return { code: error.code, retryable: error.retryable };
155 |   }
156 |   if (error instanceof Error && error.name === 'AbortError') {
157 |     return { code: 'OTP_PROVIDER_TIMEOUT', retryable: true };
158 |   }
159 |   return { code: 'OTP_PROVIDER_ERROR', retryable: true };
160 | }
161 |
```

### workers/verification-worker/src/postgres.test.ts

Bytes: 12357
SHA-256: 621c56ad706346a336189ac3fd6f1d629d8a92a1e259b034afc258e4ea149772
Lines: 1-312 of 312

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
  3 | import { Pool } from 'pg';
  4 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  5 | import { hashOtp } from '@ozzyl/verification';
  6 | import { PostgresVerificationDeliveryQueue, VerificationDeliveryLeaseError } from './postgres.js';
  7 |
  8 | const databaseUrl = process.env.DATABASE_URL;
  9 | const integration = describe.skipIf(!databaseUrl);
 10 |
 11 | integration('PostgreSQL verification delivery leases', () => {
 12 |   const pool = new Pool({ connectionString: databaseUrl, max: 12 });
 13 |   const suffix = randomUUID();
 14 |   const organizationId = `org_verification_${suffix}`;
 15 |   const storeId = `sto_verification_${suffix}`;
 16 |   const otherOrganizationId = `org_verification_other_${suffix}`;
 17 |   const otherStoreId = `sto_verification_other_${suffix}`;
 18 |   const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 9), 'test-v1');
 19 |   const otpSecret = 'o'.repeat(32);
 20 |
 21 |   beforeAll(async () => {
 22 |     await pool.query(
 23 |       `insert into organizations (id, name, slug) values ($1, 'Verification Merchant', $2), ($3, 'Other Verification Merchant', $4)`,
 24 |       [
 25 |         organizationId,
 26 |         `verification-${suffix}`,
 27 |         otherOrganizationId,
 28 |         `verification-other-${suffix}`,
 29 |       ],
 30 |     );
 31 |     await pool.query(
 32 |       `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom'), ($3, $4, 'Other', 'custom')`,
 33 |       [storeId, organizationId, otherStoreId, otherOrganizationId],
 34 |     );
 35 |   });
 36 |
 37 |   afterEach(async () => {
 38 |     await pool.query('delete from verification_sessions where organization_id = any($1::text[])', [
 39 |       [organizationId, otherOrganizationId],
 40 |     ]);
 41 |   });
 42 |
 43 |   afterAll(async () => {
 44 |     await pool.query('delete from organizations where id = any($1::text[])', [
 45 |       [organizationId, otherOrganizationId],
 46 |     ]);
 47 |     await pool.end();
 48 |   });
 49 |
 50 |   it('lets competing workers claim different due jobs and protects fresh leases', async () => {
 51 |     const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
 52 |     const at = new Date('2026-07-17T12:00:00.000Z');
 53 |     const firstId = await insertJob('compete-a', { at });
 54 |     const secondId = await insertJob('compete-b', { at });
 55 |     const [first, second] = await Promise.all([
 56 |       queue.claim(`verification-a-${suffix}`, at),
 57 |       queue.claim(`verification-b-${suffix}`, at),
 58 |     ]);
 59 |     expect(new Set([first?.id, second?.id])).toEqual(new Set([firstId, secondId]));
 60 |     await expect(queue.claim(`verification-c-${suffix}`, at)).resolves.toBeNull();
 61 |   });
 62 |
 63 |   it('rejects an expired owner and lets a new worker recover the job', async () => {
 64 |     const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
 65 |     const at = new Date('2026-07-17T13:00:00.000Z');
 66 |     const jobId = await insertJob('expired', {
 67 |       at: new Date(at.getTime() - 180_000),
 68 |       status: 'processing',
 69 |       attempts: 1,
 70 |       claimedBy: `old-verification-${suffix}`,
 71 |       claimedAt: new Date(at.getTime() - 120_000),
 72 |       leaseExpiresAt: new Date(at.getTime() - 60_000),
 73 |       expiresAt: new Date(at.getTime() + 600_000),
 74 |     });
 75 |     await expect(
 76 |       queue.delivered(jobId, `old-verification-${suffix}`, 'msg_old', at),
 77 |     ).rejects.toBeInstanceOf(VerificationDeliveryLeaseError);
 78 |     const claimed = await queue.claim(`new-verification-${suffix}`, at);
 79 |     expect(claimed?.id).toBe(jobId);
 80 |     await queue.started(jobId, `new-verification-${suffix}`, new Date(at.getTime() + 1_000));
 81 |     await queue.delivered(
 82 |       jobId,
 83 |       `new-verification-${suffix}`,
 84 |       'msg_new',
 85 |       new Date(at.getTime() + 2_000),
 86 |     );
 87 |     const stored = await pool.query<{
 88 |       status: string;
 89 |       attempts: number;
 90 |       claimed_by: string | null;
 91 |     }>(`select status, attempts, claimed_by from verification_jobs where id = $1`, [jobId]);
 92 |     expect(stored.rows[0]).toEqual({ status: 'delivered', attempts: 2, claimed_by: null });
 93 |   });
 94 |
 95 |   it('renews an active processing lease and rejects another owner', async () => {
 96 |     const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
 97 |     const at = new Date('2026-07-17T13:30:00.000Z');
 98 |     const worker = `renew-verification-${suffix}`;
 99 |     const jobId = await insertJob('renew-processing', {
100 |       at,
101 |       expiresAt: new Date(at.getTime() + 600_000),
102 |     });
103 |
104 |     await expect(queue.claim(worker, at)).resolves.toMatchObject({ id: jobId });
105 |     await queue.started(jobId, worker, new Date(at.getTime() + 1_000));
106 |     const renewedAt = new Date(at.getTime() + 30_000);
107 |     await queue.renew(jobId, worker, renewedAt);
108 |
109 |     await expect(
110 |       queue.renew(jobId, `other-verification-${suffix}`, new Date(at.getTime() + 31_000)),
111 |     ).rejects.toBeInstanceOf(VerificationDeliveryLeaseError);
112 |     await expect(
113 |       queue.claim(`competitor-verification-${suffix}`, new Date(at.getTime() + 62_000)),
114 |     ).resolves.toBeNull();
115 |
116 |     const stored = await pool.query<{ lease_expires_at: Date }>(
117 |       `select lease_expires_at from verification_jobs where id = $1`,
118 |       [jobId],
119 |     );
120 |     expect(stored.rows[0]?.lease_expires_at.toISOString()).toBe(
121 |       new Date(renewedAt.getTime() + 60_000).toISOString(),
122 |     );
123 |   });
124 |
125 |   it('clears ownership when retryable delivery is rescheduled', async () => {
126 |     const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
127 |     const at = new Date('2026-07-17T14:00:00.000Z');
128 |     const jobId = await insertJob('retry', { at, expiresAt: new Date(at.getTime() + 600_000) });
129 |     await queue.claim(`retry-verification-${suffix}`, at);
130 |     await queue.started(jobId, `retry-verification-${suffix}`, new Date(at.getTime() + 1_000));
131 |     const nextAttemptAt = new Date(at.getTime() + 31_000);
132 |     await queue.retry(jobId, `retry-verification-${suffix}`, {
133 |       errorCode: 'PROVIDER_UNAVAILABLE',
134 |       nextAttemptAt,
135 |       at: new Date(at.getTime() + 2_000),
136 |     });
137 |     const stored = await pool.query<{
138 |       status: string;
139 |       attempts: number;
140 |       error_code: string;
141 |       claimed_by: string | null;
142 |       next_attempt_at: Date;
143 |     }>(
144 |       `select status, attempts, error_code, claimed_by, next_attempt_at from verification_jobs where id = $1`,
145 |       [jobId],
146 |     );
147 |     expect(stored.rows[0]).toMatchObject({
148 |       status: 'retry_scheduled',
149 |       attempts: 1,
150 |       error_code: 'PROVIDER_UNAVAILABLE',
151 |       claimed_by: null,
152 |     });
153 |     expect(stored.rows[0]?.next_attempt_at.toISOString()).toBe(nextAttemptAt.toISOString());
154 |   });
155 |
156 |   it('fails exhausted stale work and marks its session delivery_failed', async () => {
157 |     const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000, maxAttempts: 5 });
158 |     const at = new Date('2026-07-17T15:00:00.000Z');
159 |     const jobId = await insertJob('exhausted', {
160 |       at: new Date(at.getTime() - 180_000),
161 |       status: 'processing',
162 |       attempts: 5,
163 |       claimedBy: `dead-verification-${suffix}`,
164 |       claimedAt: new Date(at.getTime() - 120_000),
165 |       leaseExpiresAt: new Date(at.getTime() - 60_000),
166 |       expiresAt: new Date(at.getTime() + 600_000),
167 |     });
168 |     await expect(queue.claim(`recovery-verification-${suffix}`, at)).resolves.toBeNull();
169 |     const stored = await pool.query<{ status: string; error_code: string; session_status: string }>(
170 |       `
171 |         select vj.status, vj.error_code, vs.status as session_status
172 |         from verification_jobs vj join verification_sessions vs on vs.id = vj.verification_session_id
173 |         where vj.id = $1
174 |       `,
175 |       [jobId],
176 |     );
177 |     expect(stored.rows[0]).toEqual({
178 |       status: 'failed',
179 |       error_code: 'LEASE_EXPIRED',
180 |       session_status: 'delivery_failed',
181 |     });
182 |   });
183 |
184 |   it('reports bounded queue depth and oldest ready age without verification identifiers', async () => {
185 |     const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
186 |     const at = new Date('2026-07-17T15:30:00.000Z');
187 |     const baseline = await queue.snapshot(at);
188 |     await insertJob('snapshot-ready', {
189 |       at: new Date(at.getTime() - 120_000),
190 |       expiresAt: new Date(at.getTime() + 600_000),
191 |     });
192 |     await insertJob('snapshot-retry', {
193 |       at: new Date(at.getTime() - 60_000),
194 |       status: 'retry_scheduled',
195 |       attempts: 1,
196 |       expiresAt: new Date(at.getTime() + 600_000),
197 |     });
198 |     await insertJob('snapshot-processing', {
199 |       at: new Date(at.getTime() - 180_000),
200 |       status: 'processing',
201 |       attempts: 1,
202 |       claimedBy: `snapshot-verification-${suffix}`,
203 |       claimedAt: new Date(at.getTime() - 30_000),
204 |       leaseExpiresAt: new Date(at.getTime() + 30_000),
205 |       expiresAt: new Date(at.getTime() + 600_000),
206 |     });
207 |     await insertJob('snapshot-failed', {
208 |       at,
209 |       status: 'failed',
210 |       attempts: 5,
211 |       expiresAt: new Date(at.getTime() + 600_000),
212 |     });
213 |
214 |     const snapshot = await queue.snapshot(at);
215 |     expect(snapshot.depths.queued).toBe((baseline.depths.queued ?? 0) + 1);
216 |     expect(snapshot.depths.retry_scheduled).toBe((baseline.depths.retry_scheduled ?? 0) + 1);
217 |     expect(snapshot.depths.processing).toBe((baseline.depths.processing ?? 0) + 1);
218 |     expect(snapshot.depths.failed).toBe((baseline.depths.failed ?? 0) + 1);
219 |     expect(snapshot.oldestReadyAgeMs).toBeGreaterThanOrEqual(120_000);
220 |   });
221 |
222 |   it('fails a job whose persisted scope does not match its session', async () => {
223 |     const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
224 |     const at = new Date('2026-07-17T16:00:00.000Z');
225 |     const jobId = await insertJob('scope', {
226 |       at,
227 |       jobOrganizationId: otherOrganizationId,
228 |       jobStoreId: otherStoreId,
229 |       expiresAt: new Date(at.getTime() + 600_000),
230 |     });
231 |     await expect(queue.claim(`scope-verification-${suffix}`, at)).resolves.toBeNull();
232 |     const stored = await pool.query<{
233 |       status: string;
234 |       error_code: string;
235 |       session_status: string;
236 |     }>(
237 |       `
238 |         select vj.status, vj.error_code, vs.status as session_status
239 |         from verification_jobs vj
240 |         join verification_sessions vs on vs.id = vj.verification_session_id
241 |         where vj.id = $1
242 |       `,
243 |       [jobId],
244 |     );
245 |     expect(stored.rows[0]).toEqual({
246 |       status: 'failed',
247 |       error_code: 'VERIFICATION_SCOPE_MISMATCH',
248 |       session_status: 'delivery_failed',
249 |     });
250 |   });
251 |
252 |   async function insertJob(
253 |     label: string,
254 |     options: {
255 |       at: Date;
256 |       expiresAt?: Date;
257 |       status?: string;
258 |       attempts?: number;
259 |       claimedBy?: string;
260 |       claimedAt?: Date;
261 |       leaseExpiresAt?: Date;
262 |       jobOrganizationId?: string;
263 |       jobStoreId?: string;
264 |     },
265 |   ): Promise<string> {
266 |     const verificationId = `ver_${label}_${suffix}`;
267 |     const attemptId = `otpa_${label}_${suffix}`;
268 |     const jobId = `vjob_${label}_${suffix}`;
269 |     const otp = '123456';
270 |     const expiresAt = options.expiresAt ?? new Date(options.at.getTime() + 600_000);
271 |     const payload = cipher.encrypt(
272 |       { verificationId, organizationId, storeId, phone: '01712345678', otp, purpose: 'test' },
273 |       `verification-job:${jobId}`,
274 |     );
275 |     await pool.query(
276 |       `
277 |         insert into verification_sessions (
278 |           id, organization_id, store_id, phone_hash, purpose, channel, status,
279 |           idempotency_key, max_attempts, expires_at
280 |         ) values ($1, $2, $3, 'phone_hash', 'test', 'otp', 'queued', $4, 5, $5)
281 |       `,
282 |       [verificationId, organizationId, storeId, `idem-${label}-${suffix}`, expiresAt],
283 |     );
284 |     await pool.query(
285 |       `insert into otp_attempts (id, verification_session_id, otp_hash, expires_at) values ($1, $2, $3, $4)`,
286 |       [attemptId, verificationId, hashOtp(verificationId, otp, otpSecret), expiresAt],
287 |     );
288 |     await pool.query(
289 |       `
290 |         insert into verification_jobs (
291 |           id, verification_session_id, organization_id, store_id, payload_encrypted,
292 |           status, attempts, next_attempt_at, claimed_by, claimed_at, lease_expires_at
293 |         ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
294 |       `,
295 |       [
296 |         jobId,
297 |         verificationId,
298 |         options.jobOrganizationId ?? organizationId,
299 |         options.jobStoreId ?? storeId,
300 |         payload,
301 |         options.status ?? 'queued',
302 |         options.attempts ?? 0,
303 |         options.at,
304 |         options.claimedBy ?? null,
305 |         options.claimedAt ?? null,
306 |         options.leaseExpiresAt ?? null,
307 |       ],
308 |     );
309 |     return jobId;
310 |   }
311 | });
312 |
```

### workers/verification-worker/src/postgres.ts

Bytes: 17910
SHA-256: 7715cc6ef57e231b4058d13f2cfd462ad05f0e1147afba58d74eeb4da84255bd
Lines: 1-511 of 511

```typescript
  1 | import type { Pool, PoolClient } from 'pg';
  2 | import type { DurableQueueSnapshot } from '@ozzyl/observability';
  3 | import type { DomainEvent } from '@ozzyl/shared-types';
  4 | import type { VerificationDeliveryReporter } from './index.js';
  5 |
  6 | export interface ClaimedVerificationDelivery {
  7 |   id: string;
  8 |   verificationId: string;
  9 |   organizationId: string;
 10 |   storeId: string;
 11 |   purpose: string;
 12 |   phoneHash: string;
 13 |   otpHash: string;
 14 |   payloadEncrypted: string;
 15 |   expiresAt: Date;
 16 |   attempts: number;
 17 | }
 18 |
 19 | export class VerificationDeliveryLeaseError extends Error {
 20 |   readonly code = 'VERIFICATION_DELIVERY_LEASE_LOST';
 21 |
 22 |   constructor(message = 'Verification delivery lease is no longer owned by this worker') {
 23 |     super(message);
 24 |     this.name = 'VerificationDeliveryLeaseError';
 25 |   }
 26 | }
 27 |
 28 | export class PostgresVerificationDeliveryQueue {
 29 |   private readonly leaseMs: number;
 30 |   private readonly maxAttempts: number;
 31 |
 32 |   constructor(
 33 |     private readonly pool: Pool,
 34 |     options: { leaseMs?: number; maxAttempts?: number } = {},
 35 |   ) {
 36 |     this.leaseMs = options.leaseMs ?? 60_000;
 37 |     this.maxAttempts = options.maxAttempts ?? 5;
 38 |   }
 39 |
 40 |   async claim(workerId: string, at = new Date()): Promise<ClaimedVerificationDelivery | null> {
 41 |     const client = await this.pool.connect();
 42 |     try {
 43 |       await client.query('begin');
 44 |       const mismatched = await client.query<{ verification_session_id: string }>(
 45 |         `
 46 |           update verification_jobs vj
 47 |           set status = 'failed', error_code = 'VERIFICATION_SCOPE_MISMATCH',
 48 |             completed_at = $1, claimed_by = null, claimed_at = null,
 49 |             lease_expires_at = null, updated_at = now()
 50 |           where vj.status not in ('delivered', 'failed')
 51 |             and not exists (
 52 |               select 1
 53 |               from verification_sessions vs
 54 |               join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
 55 |               where vs.id = vj.verification_session_id
 56 |                 and vs.organization_id = vj.organization_id
 57 |                 and vs.store_id = vj.store_id
 58 |             )
 59 |           returning vj.verification_session_id
 60 |         `,
 61 |         [at],
 62 |       );
 63 |       for (const row of mismatched.rows) {
 64 |         await this.failSession(
 65 |           client,
 66 |           row.verification_session_id,
 67 |           'VERIFICATION_SCOPE_MISMATCH',
 68 |           at,
 69 |         );
 70 |       }
 71 |       await this.failExpired(client, at);
 72 |       await this.failExhausted(client, at);
 73 |
 74 |       const leaseExpiresAt = new Date(at.getTime() + this.leaseMs);
 75 |       const result = await client.query<{
 76 |         id: string;
 77 |         verification_session_id: string;
 78 |         organization_id: string;
 79 |         store_id: string;
 80 |         purpose: string;
 81 |         phone_hash: string;
 82 |         otp_hash: string;
 83 |         payload_encrypted: string;
 84 |         expires_at: Date;
 85 |         attempts: number;
 86 |       }>(
 87 |         `
 88 |           with candidate as (
 89 |             select vj.id
 90 |             from verification_jobs vj
 91 |             join verification_sessions vs
 92 |               on vs.id = vj.verification_session_id
 93 |               and vs.organization_id = vj.organization_id
 94 |               and vs.store_id = vj.store_id
 95 |             join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
 96 |             join lateral (
 97 |               select oa.otp_hash
 98 |               from otp_attempts oa
 99 |               where oa.verification_session_id = vs.id
100 |               order by oa.created_at desc, oa.id desc
101 |               limit 1
102 |             ) latest_attempt on true
103 |             where vj.job_type = 'send_otp'
104 |               and vj.attempts < $4
105 |               and vs.status = 'queued'
106 |               and vs.expires_at > $2
107 |               and (
108 |                 (vj.status in ('queued', 'retry_scheduled')
109 |                   and coalesce(vj.next_attempt_at, vj.created_at) <= $2)
110 |                 or (vj.status in ('claimed', 'processing')
111 |                   and (vj.lease_expires_at is null or vj.lease_expires_at <= $2))
112 |               )
113 |             order by
114 |               case when vj.status in ('claimed', 'processing') then 0 else 1 end,
115 |               coalesce(vj.lease_expires_at, vj.next_attempt_at, vj.created_at),
116 |               vj.id
117 |             for update of vj skip locked
118 |             limit 1
119 |           ), claimed as (
120 |             update verification_jobs vj
121 |             set status = 'claimed', claimed_by = $1, claimed_at = $2,
122 |               lease_expires_at = $3, completed_at = null, updated_at = now()
123 |             from candidate
124 |             where vj.id = candidate.id
125 |             returning vj.*
126 |           )
127 |           select
128 |             claimed.id, claimed.verification_session_id, claimed.organization_id,
129 |             claimed.store_id, vs.purpose, vs.phone_hash, oa.otp_hash,
130 |             claimed.payload_encrypted, vs.expires_at, claimed.attempts
131 |           from claimed
132 |           join verification_sessions vs on vs.id = claimed.verification_session_id
133 |           join lateral (
134 |             select otp_hash from otp_attempts
135 |             where verification_session_id = vs.id
136 |             order by created_at desc, id desc
137 |             limit 1
138 |           ) oa on true
139 |         `,
140 |         [workerId, at, leaseExpiresAt, this.maxAttempts],
141 |       );
142 |       await client.query('commit');
143 |       const row = result.rows[0];
144 |       return row
145 |         ? {
146 |             id: row.id,
147 |             verificationId: row.verification_session_id,
148 |             organizationId: row.organization_id,
149 |             storeId: row.store_id,
150 |             purpose: row.purpose,
151 |             phoneHash: row.phone_hash,
152 |             otpHash: row.otp_hash,
153 |             payloadEncrypted: row.payload_encrypted,
154 |             expiresAt: row.expires_at,
155 |             attempts: row.attempts,
156 |           }
157 |         : null;
158 |     } catch (error) {
159 |       await client.query('rollback').catch(() => undefined);
160 |       throw error;
161 |     } finally {
162 |       client.release();
163 |     }
164 |   }
165 |
166 |   async started(jobId: string, workerId: string, at = new Date()): Promise<void> {
167 |     const result = await this.pool.query(
168 |       `
169 |         update verification_jobs vj
170 |         set status = 'processing', attempts = attempts + 1,
171 |           lease_expires_at = $4, updated_at = now()
172 |         from verification_sessions vs
173 |         where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'claimed'
174 |           and vj.lease_expires_at > $3
175 |           and vs.id = vj.verification_session_id
176 |           and vs.organization_id = vj.organization_id
177 |           and vs.store_id = vj.store_id
178 |           and vs.status = 'queued' and vs.expires_at > $3
179 |       `,
180 |       [jobId, workerId, at, new Date(at.getTime() + this.leaseMs)],
181 |     );
182 |     this.assertOwned(result.rowCount);
183 |   }
184 |
185 |   async renew(jobId: string, workerId: string, at = new Date()): Promise<void> {
186 |     const result = await this.pool.query(
187 |       `
188 |         update verification_jobs vj
189 |         set lease_expires_at = $3, updated_at = now()
190 |         from verification_sessions vs
191 |         where vj.id = $1 and vj.claimed_by = $2
192 |           and vj.status in ('claimed', 'processing')
193 |           and vj.lease_expires_at > $4
194 |           and vs.id = vj.verification_session_id
195 |           and vs.organization_id = vj.organization_id
196 |           and vs.store_id = vj.store_id
197 |           and vs.status = 'queued' and vs.expires_at > $4
198 |       `,
199 |       [jobId, workerId, new Date(at.getTime() + this.leaseMs), at],
200 |     );
201 |     this.assertOwned(result.rowCount);
202 |   }
203 |
204 |   async delivered(
205 |     jobId: string,
206 |     workerId: string,
207 |     providerMessageId: string,
208 |     at = new Date(),
209 |   ): Promise<void> {
210 |     const client = await this.pool.connect();
211 |     try {
212 |       await client.query('begin');
213 |       const result = await client.query<{ verification_session_id: string }>(
214 |         `
215 |           update verification_jobs vj
216 |           set status = 'delivered', provider_message_id = $3, error_code = null,
217 |             completed_at = $4, claimed_by = null, claimed_at = null,
218 |             lease_expires_at = null, updated_at = now()
219 |           from verification_sessions vs
220 |           where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'processing'
221 |             and vj.lease_expires_at > $4
222 |             and vs.id = vj.verification_session_id
223 |             and vs.organization_id = vj.organization_id
224 |             and vs.store_id = vj.store_id
225 |             and vs.status = 'queued' and vs.expires_at > $4
226 |           returning vj.verification_session_id
227 |         `,
228 |         [jobId, workerId, providerMessageId, at],
229 |       );
230 |       this.assertOwned(result.rowCount);
231 |       const verificationId = result.rows[0]?.verification_session_id;
232 |       await client.query(
233 |         `update verification_sessions set status = 'pending', updated_at = now() where id = $1`,
234 |         [verificationId],
235 |       );
236 |       await client.query(
237 |         `
238 |           update otp_attempts set provider_message_id = $2, sent_at = $3,
239 |             failed_at = null, updated_at = now()
240 |           where id = (
241 |             select id from otp_attempts where verification_session_id = $1
242 |             order by created_at desc, id desc limit 1
243 |           )
244 |         `,
245 |         [verificationId, providerMessageId, at],
246 |       );
247 |       await client.query('commit');
248 |     } catch (error) {
249 |       await client.query('rollback').catch(() => undefined);
250 |       throw error;
251 |     } finally {
252 |       client.release();
253 |     }
254 |   }
255 |
256 |   async retry(
257 |     jobId: string,
258 |     workerId: string,
259 |     input: { errorCode: string; nextAttemptAt: Date; at: Date },
260 |   ): Promise<void> {
261 |     const result = await this.pool.query(
262 |       `
263 |         update verification_jobs vj
264 |         set status = 'retry_scheduled', next_attempt_at = $3, error_code = $4,
265 |           completed_at = null, claimed_by = null, claimed_at = null,
266 |           lease_expires_at = null, updated_at = now()
267 |         from verification_sessions vs
268 |         where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'processing'
269 |           and vj.lease_expires_at > $5
270 |           and vs.id = vj.verification_session_id
271 |           and vs.organization_id = vj.organization_id
272 |           and vs.store_id = vj.store_id
273 |       `,
274 |       [jobId, workerId, input.nextAttemptAt, input.errorCode, input.at],
275 |     );
276 |     this.assertOwned(result.rowCount);
277 |   }
278 |
279 |   async failed(
280 |     jobId: string,
281 |     workerId: string,
282 |     input: { errorCode: string; at: Date },
283 |   ): Promise<void> {
284 |     const client = await this.pool.connect();
285 |     try {
286 |       await client.query('begin');
287 |       const result = await client.query<{
288 |         verification_session_id: string;
289 |         organization_id: string;
290 |         store_id: string;
291 |       }>(
292 |         `
293 |           update verification_jobs vj
294 |           set status = 'failed', error_code = $3, completed_at = $4,
295 |             claimed_by = null, claimed_at = null, lease_expires_at = null,
296 |             updated_at = now()
297 |           from verification_sessions vs
298 |           where vj.id = $1 and vj.claimed_by = $2
299 |             and vj.status in ('claimed', 'processing')
300 |             and vj.lease_expires_at > $4
301 |             and vs.id = vj.verification_session_id
302 |             and vs.organization_id = vj.organization_id
303 |             and vs.store_id = vj.store_id
304 |           returning vj.verification_session_id, vj.organization_id, vj.store_id
305 |         `,
306 |         [jobId, workerId, input.errorCode, input.at],
307 |       );
308 |       this.assertOwned(result.rowCount);
309 |       const row = result.rows[0];
310 |       if (!row) throw new VerificationDeliveryLeaseError();
311 |       await this.failSession(client, row.verification_session_id, input.errorCode, input.at);
312 |       await client.query('commit');
313 |     } catch (error) {
314 |       await client.query('rollback').catch(() => undefined);
315 |       throw error;
316 |     } finally {
317 |       client.release();
318 |     }
319 |   }
320 |
321 |   async snapshot(at = new Date()): Promise<DurableQueueSnapshot> {
322 |     const result = await this.pool.query<{
323 |       queued: number;
324 |       retry_scheduled: number;
325 |       claimed: number;
326 |       processing: number;
327 |       failed: number;
328 |       oldest_ready_age_ms: number;
329 |     }>(
330 |       `
331 |         select
332 |           count(*) filter (where status = 'queued')::int as queued,
333 |           count(*) filter (where status = 'retry_scheduled')::int as retry_scheduled,
334 |           count(*) filter (where status = 'claimed')::int as claimed,
335 |           count(*) filter (where status = 'processing')::int as processing,
336 |           count(*) filter (where status = 'failed')::int as failed,
337 |           coalesce(
338 |             extract(epoch from ($1 - min(coalesce(next_attempt_at, created_at)) filter (
339 |               where status in ('queued', 'retry_scheduled')
340 |                 and coalesce(next_attempt_at, created_at) <= $1
341 |             ))) * 1000,
342 |             0
343 |           )::double precision as oldest_ready_age_ms
344 |         from verification_jobs
345 |         where job_type = 'send_otp'
346 |       `,
347 |       [at],
348 |     );
349 |     const row = result.rows[0];
350 |     return {
351 |       depths: {
352 |         queued: row?.queued ?? 0,
353 |         retry_scheduled: row?.retry_scheduled ?? 0,
354 |         claimed: row?.claimed ?? 0,
355 |         processing: row?.processing ?? 0,
356 |         failed: row?.failed ?? 0,
357 |       },
358 |       oldestReadyAgeMs: Math.max(0, Number(row?.oldest_ready_age_ms ?? 0)),
359 |     };
360 |   }
361 |
362 |   reporterFor(
363 |     delivery: ClaimedVerificationDelivery,
364 |     workerId: string,
365 |     beforeTransition: () => Promise<void> = async () => undefined,
366 |   ): VerificationDeliveryReporter {
367 |     return {
368 |       delivered: async (jobId, providerMessageId, at) => {
369 |         this.assertIdentity(delivery, jobId);
370 |         await beforeTransition();
371 |         await this.delivered(jobId, workerId, providerMessageId, at);
372 |       },
373 |       retry: async (jobId, errorCode, nextAttemptAt, at) => {
374 |         this.assertIdentity(delivery, jobId);
375 |         await beforeTransition();
376 |         await this.retry(jobId, workerId, { errorCode, nextAttemptAt, at });
377 |       },
378 |       failed: async (jobId, errorCode, at) => {
379 |         this.assertIdentity(delivery, jobId);
380 |         await beforeTransition();
381 |         await this.failed(jobId, workerId, { errorCode, at });
382 |       },
383 |     };
384 |   }
385 |
386 |   private async failExpired(client: PoolClient, at: Date): Promise<void> {
387 |     const expired = await client.query<{ verification_session_id: string }>(
388 |       `
389 |         update verification_jobs vj
390 |         set status = 'failed', error_code = 'OTP_EXPIRED_BEFORE_DELIVERY',
391 |           completed_at = $1, claimed_by = null, claimed_at = null,
392 |           lease_expires_at = null, updated_at = now()
393 |         from verification_sessions vs
394 |         where vj.verification_session_id = vs.id
395 |           and vj.organization_id = vs.organization_id and vj.store_id = vs.store_id
396 |           and vj.status not in ('delivered', 'failed') and vs.expires_at <= $1
397 |         returning vj.verification_session_id
398 |       `,
399 |       [at],
400 |     );
401 |     for (const row of expired.rows) {
402 |       await this.failSession(
403 |         client,
404 |         row.verification_session_id,
405 |         'OTP_EXPIRED_BEFORE_DELIVERY',
406 |         at,
407 |         true,
408 |       );
409 |     }
410 |   }
411 |
412 |   private async failExhausted(client: PoolClient, at: Date): Promise<void> {
413 |     const exhausted = await client.query<{ verification_session_id: string }>(
414 |       `
415 |         update verification_jobs
416 |         set status = 'failed', error_code = 'LEASE_EXPIRED', completed_at = $1,
417 |           claimed_by = null, claimed_at = null, lease_expires_at = null,
418 |           updated_at = now()
419 |         where status in ('claimed', 'processing')
420 |           and (lease_expires_at is null or lease_expires_at <= $1)
421 |           and attempts >= $2
422 |         returning verification_session_id
423 |       `,
424 |       [at, this.maxAttempts],
425 |     );
426 |     for (const row of exhausted.rows) {
427 |       await this.failSession(client, row.verification_session_id, 'LEASE_EXPIRED', at);
428 |     }
429 |   }
430 |
431 |   private async failSession(
432 |     client: PoolClient,
433 |     verificationId: string,
434 |     errorCode: string,
435 |     at: Date,
436 |     expired = false,
437 |   ): Promise<void> {
438 |     const session = await client.query<{
439 |       organization_id: string;
440 |       store_id: string;
441 |       purpose: string;
442 |     }>(
443 |       `
444 |         update verification_sessions
445 |         set status = $2, updated_at = now()
446 |         where id = $1
447 |         returning organization_id, store_id, purpose
448 |       `,
449 |       [verificationId, expired ? 'expired' : 'delivery_failed'],
450 |     );
451 |     await client.query(
452 |       `
453 |         update otp_attempts set failed_at = $2, updated_at = now()
454 |         where verification_session_id = $1
455 |       `,
456 |       [verificationId, at],
457 |     );
458 |     const row = session.rows[0];
459 |     if (row) {
460 |       await enqueueVerificationFailure(client, {
461 |         id: `evt_verification_failed_${verificationId}`,
462 |         type: 'verification.failed',
463 |         organizationId: row.organization_id,
464 |         storeId: row.store_id,
465 |         occurredAt: at.toISOString(),
466 |         payload: { verificationId, purpose: row.purpose, errorCode },
467 |       });
468 |     }
469 |   }
470 |
471 |   private assertOwned(rowCount: number | null): void {
472 |     if (rowCount !== 1) throw new VerificationDeliveryLeaseError();
473 |   }
474 |
475 |   private assertIdentity(delivery: ClaimedVerificationDelivery, jobId: string): void {
476 |     if (delivery.id !== jobId) {
477 |       throw new VerificationDeliveryLeaseError(
478 |         'Verification delivery identity does not match claim',
479 |       );
480 |     }
481 |   }
482 | }
483 |
484 | async function enqueueVerificationFailure(client: PoolClient, event: DomainEvent): Promise<void> {
485 |   await client.query(
486 |     `
487 |       insert into webhook_deliveries (
488 |         id, endpoint_id, organization_id, store_id, event_id, event_type,
489 |         event_payload, occurred_at, status, next_attempt_at
490 |       )
491 |       select
492 |         'whd_' || md5(we.id || ':' || $1), we.id, $2, $3, $1, $4,
493 |         $5::jsonb, $6, 'queued', now()
494 |       from webhook_endpoints we
495 |       where we.organization_id = $2
496 |         and (we.store_id is null or we.store_id = $3)
497 |         and we.status = 'active'
498 |         and we.events @> jsonb_build_array($4::text)
499 |       on conflict (endpoint_id, event_id) do nothing
500 |     `,
501 |     [
502 |       event.id,
503 |       event.organizationId,
504 |       event.storeId ?? null,
505 |       event.type,
506 |       JSON.stringify(event),
507 |       event.occurredAt,
508 |     ],
509 |   );
510 | }
511 |
```

### workers/verification-worker/src/runner.ts

Bytes: 7500
SHA-256: 587c0975edf2e304ddf7442a9a5c534ab21cc2ed24e377a13d78ce55f85d07c3
Lines: 1-210 of 210

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import { LeaseHeartbeat } from '@ozzyl/database';
  4 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  5 | import {
  6 |   createMetricRecorder,
  7 |   createStructuredLogger,
  8 |   observeRepositoryOperation,
  9 |   recordDurableQueueSnapshot,
 10 |   recordWorkerClaimFailure,
 11 |   type RepositoryMetricOperation,
 12 | } from '@ozzyl/observability';
 13 | import type { OtpDeliveryProvider } from '@ozzyl/verification';
 14 | import { VerificationWorker } from './index.js';
 15 | import { PostgresVerificationDeliveryQueue, VerificationDeliveryLeaseError } from './postgres.js';
 16 | import { decryptAndValidateVerificationPayload } from './payload.js';
 17 |
 18 | const required = (name: string): string => {
 19 |   const value = process.env[name];
 20 |   if (!value) throw new Error(`${name} is required`);
 21 |   return value;
 22 | };
 23 |
 24 | const positiveInteger = (name: string, fallback: number): number => {
 25 |   const value = Number(process.env[name] ?? fallback);
 26 |   if (!Number.isSafeInteger(value) || value <= 0)
 27 |     throw new Error(`${name} must be a positive integer`);
 28 |   return value;
 29 | };
 30 |
 31 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 32 | const cipher = new AesGcmEnvelopeCipher(
 33 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 34 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 35 | );
 36 | const otpSecret = required('OTP_HASH_SECRET');
 37 | const phoneHmacKey = required('PHONE_HMAC_KEY');
 38 | const pollMs = positiveInteger('VERIFICATION_WORKER_POLL_MS', 5_000);
 39 | const queueMetricsMs = positiveInteger('VERIFICATION_WORKER_QUEUE_METRICS_MS', 30_000);
 40 | const leaseMs = positiveInteger('VERIFICATION_WORKER_LEASE_MS', 60_000);
 41 | const leaseRenewMs = positiveInteger('VERIFICATION_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
 42 | const timeoutMs = positiveInteger('OTP_PROVIDER_TIMEOUT_MS', 10_000);
 43 | const maxAttempts = positiveInteger('VERIFICATION_WORKER_MAX_ATTEMPTS', 5);
 44 | if (leaseMs <= timeoutMs + 5_000) {
 45 |   throw new Error(
 46 |     'VERIFICATION_WORKER_LEASE_MS must exceed OTP_PROVIDER_TIMEOUT_MS by more than 5000ms',
 47 |   );
 48 | }
 49 | if (leaseRenewMs * 2 > leaseMs) {
 50 |   throw new Error('VERIFICATION_WORKER_LEASE_RENEW_MS must not exceed half the lease');
 51 | }
 52 | const workerId = process.env.VERIFICATION_WORKER_ID ?? `verification-${randomUUID()}`;
 53 | const log = createStructuredLogger({
 54 |   service: 'verification-worker',
 55 |   environment: process.env.NODE_ENV ?? 'development',
 56 | });
 57 | const metrics = createMetricRecorder({
 58 |   service: 'verification-worker',
 59 |   environment: process.env.NODE_ENV ?? 'development',
 60 | });
 61 | const provider = await loadProvider(required('OTP_PROVIDER_MODULE'));
 62 | const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs, maxAttempts });
 63 | let stopping = false;
 64 | let nextQueueMetricsAt = 0;
 65 |
 66 | const observeQueue = <T>(
 67 |   operation: RepositoryMetricOperation,
 68 |   task: () => Promise<T>,
 69 |   isEmpty?: (value: T) => boolean,
 70 | ): Promise<T> =>
 71 |   observeRepositoryOperation(
 72 |     metrics,
 73 |     {
 74 |       repositoryType: 'verification_queue',
 75 |       operation,
 76 |       ...(isEmpty === undefined ? {} : { isEmpty }),
 77 |     },
 78 |     task,
 79 |   );
 80 |
 81 | async function recordQueueMetricsIfDue(): Promise<void> {
 82 |   const now = Date.now();
 83 |   if (now < nextQueueMetricsAt) return;
 84 |   nextQueueMetricsAt = now + queueMetricsMs;
 85 |   const snapshot = await observeQueue('snapshot', () => queue.snapshot(new Date(now)));
 86 |   recordDurableQueueSnapshot(metrics, 'verification_delivery', snapshot);
 87 | }
 88 |
 89 | async function run(): Promise<void> {
 90 |   log.info('verification.worker.started', { worker_id: workerId });
 91 |   while (!stopping) {
 92 |     await recordQueueMetricsIfDue().catch((error) => logError(error, 'QUEUE_METRICS_FAILED'));
 93 |     const delivery = await observeQueue(
 94 |       'claim',
 95 |       () => queue.claim(workerId),
 96 |       (value) => value === null,
 97 |     ).catch((error) => {
 98 |       recordWorkerClaimFailure(metrics, 'verification_delivery');
 99 |       logError(error, 'VERIFICATION_CLAIM_FAILED');
100 |       return null;
101 |     });
102 |     if (!delivery) {
103 |       await sleep(pollMs);
104 |       continue;
105 |     }
106 |
107 |     let heartbeat: LeaseHeartbeat | null = null;
108 |     try {
109 |       await observeQueue('start', () => queue.started(delivery.id, workerId));
110 |       heartbeat = new LeaseHeartbeat({
111 |         intervalMs: leaseRenewMs,
112 |         renew: (at) => observeQueue('renew', () => queue.renew(delivery.id, workerId, at)),
113 |       }).start();
114 |       const payload = decryptAndValidateVerificationPayload(delivery, {
115 |         cipher,
116 |         phoneHmacKey,
117 |         otpSecret,
118 |       });
119 |       const reporter = queue.reporterFor(
120 |         delivery,
121 |         workerId,
122 |         () => heartbeat?.stop() ?? Promise.resolve(),
123 |       );
124 |       const worker = new VerificationWorker(
125 |         provider,
126 |         {
127 |           delivered: (jobId, providerMessageId, at) =>
128 |             observeQueue('complete', () => reporter.delivered(jobId, providerMessageId, at)),
129 |           retry: (jobId, errorCode, nextAttemptAt, at) =>
130 |             observeQueue('retry', () => reporter.retry(jobId, errorCode, nextAttemptAt, at)),
131 |           failed: (jobId, errorCode, at) =>
132 |             observeQueue('fail', () => reporter.failed(jobId, errorCode, at)),
133 |         },
134 |         {
135 |           maxAttempts,
136 |           timeoutMs,
137 |           metrics,
138 |         },
139 |       );
140 |       await worker.process({
141 |         jobId: delivery.id,
142 |         verificationId: delivery.verificationId,
143 |         organizationId: delivery.organizationId,
144 |         storeId: delivery.storeId,
145 |         phone: payload.phone,
146 |         otp: payload.otp,
147 |         purpose: delivery.purpose,
148 |         expiresAt: delivery.expiresAt,
149 |         attempt: delivery.attempts + 1,
150 |         signal: heartbeat.signal,
151 |       });
152 |       await heartbeat.stopQuietly();
153 |       heartbeat = null;
154 |     } catch (error) {
155 |       let failure = error;
156 |       if (heartbeat) {
157 |         try {
158 |           await heartbeat.stop();
159 |         } catch (leaseError) {
160 |           failure = leaseError;
161 |         }
162 |         heartbeat = null;
163 |       }
164 |       if (!(failure instanceof VerificationDeliveryLeaseError)) {
165 |         const code = errorCode(failure, 'VERIFICATION_DELIVERY_FAILED');
166 |         await observeQueue('fail', () =>
167 |           queue.failed(delivery.id, workerId, { errorCode: code, at: new Date() }),
168 |         ).catch((stateError) => logError(stateError, 'VERIFICATION_FAILURE_STATE_LOST'));
169 |       }
170 |       logError(failure, 'VERIFICATION_DELIVERY_FAILED');
171 |     }
172 |   }
173 |   await pool.end();
174 | }
175 |
176 | async function loadProvider(moduleName: string): Promise<OtpDeliveryProvider> {
177 |   const loaded = (await import(moduleName)) as {
178 |     createOtpDeliveryProvider?: () => OtpDeliveryProvider | Promise<OtpDeliveryProvider>;
179 |   };
180 |   if (typeof loaded.createOtpDeliveryProvider !== 'function') {
181 |     throw new Error('OTP provider module must export createOtpDeliveryProvider()');
182 |   }
183 |   const configured = await loaded.createOtpDeliveryProvider();
184 |   if (!configured || typeof configured.send !== 'function') {
185 |     throw new Error('OTP provider module returned an invalid provider');
186 |   }
187 |   return configured;
188 | }
189 |
190 | function errorCode(error: unknown, fallback: string): string {
191 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
192 | }
193 |
194 | function logError(error: unknown, fallback: string): void {
195 |   log.error('verification.worker.error', {
196 |     code: errorCode(error, fallback),
197 |     worker_id: workerId,
198 |   });
199 | }
200 |
201 | const sleep = (milliseconds: number): Promise<void> =>
202 |   new Promise((resolve) => setTimeout(resolve, milliseconds));
203 |
204 | const stop = (): void => {
205 |   stopping = true;
206 | };
207 | process.once('SIGTERM', stop);
208 | process.once('SIGINT', stop);
209 | await run();
210 |
```

## Skipped Files

None.
