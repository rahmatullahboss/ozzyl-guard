# CodexPro Context Bundle

Generated: 2026-07-28T03:55:58.477Z
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
## feat/vendor-neutral-metrics
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M .ai-bridge/pro-context.md
 M README.md
 M apps/api/src/index.test.ts
 M apps/api/src/index.ts
 M apps/api/src/server.ts
 M docs/README.md
 M docs/operations/operations-observability.md
 M docs/roadmap/risk-register.md
 M docs/security/security-privacy.md
 M docs/testing/testing-strategy.md
 M packages/observability/src/index.ts
 M tracker.yml
 M workers/courier-session-worker/src/index.test.ts
 M workers/courier-session-worker/src/index.ts
 M workers/courier-session-worker/src/runner.ts
 M workers/courier-sync-worker/src/index.test.ts
 M workers/courier-sync-worker/src/index.ts
 M workers/courier-sync-worker/src/runner.ts
 M workers/event-worker/src/index.test.ts
 M workers/event-worker/src/index.ts
 M workers/event-worker/src/runner.ts
 M workers/verification-worker/src/index.test.ts
 M workers/verification-worker/src/index.ts
 M workers/verification-worker/src/runner.ts
?? packages/observability/src/metrics.test.ts
?? packages/observability/src/metrics.ts
```

## Recent Commits

```text
0851020 (HEAD -> feat/vendor-neutral-metrics, origin/main, main) docs: record retention CI evidence (#33)
8788da4 feat(database): archive terminal durable work (#32)
f19e9b4 docs: record worker heartbeat CI evidence (#31)
6ab01a7 feat(workers): renew durable job leases (#30)
3c31ae7 docs: record API observability CI evidence (#29)
00d6eec feat(api): add safe request observability (#28)
cc8d890 docs: record observability CI evidence (#27)
d8ef4ac feat(observability): add safe structured worker logging (#26)
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
  7 | A runnable standalone MVP foundation and eighteen production-hardening slices are complete:
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
 26 | 18. vendor-neutral finite-cardinality application metrics for API requests, private-worker operations/duration, and durable claim failures, with prohibited identifier/secret/contact/URL/payload labels and sink-failure isolation.
 27 |
 28 | Concrete provider selection and provisioning remain external production work.
 29 |
 30 | ## Completed
 31 |
 32 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 33 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 34 | - [x] Canonical shared API/error/event contracts
 35 | - [x] PostgreSQL/Drizzle schema and thirteen append-only migrations
 36 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 37 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 38 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 39 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 40 | - [x] Courier adapter contract and Steadfast normalized adapter
 41 | - [x] Playwright Steadfast session driver with structured errors
 42 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 43 | - [x] Runnable PostgreSQL courier session and observation workers
 44 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 45 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 46 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 47 | - [x] API OTP send returns queued work without provider network I/O
 48 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 49 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 50 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 51 | - [x] Explicit-role platform admin with live global operations data
 52 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 53 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 54 | - [x] Architecture dependency-boundary CI guard
 55 | - [x] Provider-neutral production deployment topology ADR
 56 | - [x] Managed PostgreSQL production baseline ADR
 57 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 58 | - [x] Managed secrets and KMS envelope-encryption ADR
 59 | - [x] Vendor-neutral OpenTelemetry observability ADR
 60 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 61 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 62 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 63 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 64 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 65 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 66 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 67 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 68 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 69 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 70 | - [x] Concurrent usage reservations cannot exceed the plan limit
 71 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 72 | - [x] Concurrent outcome writes resolve as one insert and one replay
 73 | - [x] Operation idempotency records remain isolated by organization and store
 74 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 75 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 76 | - [x] Expired or previous courier owners cannot complete or fail jobs
 77 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 78 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 79 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 80 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 81 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 82 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 83 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 84 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 85 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 86 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 87 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 88 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 89 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 90 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 91 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 92 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 93 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 94 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 95 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 96 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 97 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 98 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 99 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
100 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
101 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
102 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
103 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
104 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
105 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
106 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
107 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
108 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
109 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
110 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
111 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
112 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
113 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
114 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
115 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
116 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
117 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
118 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
119 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
120 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
121 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
122 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
123 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
124 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
125 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
126 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
127 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
128 |
129 | ## Verified baseline
130 |
131 | - Formatting check: passed
132 | - ESLint with zero warnings: passed
133 | - Thirteen migration files ordered/non-empty/non-destructive: passed locally; previous merged baseline passed remotely; current source-branch CI is pending
134 | - First migration apply and immediate migration replay: previous merged baseline passed remotely
135 | - Architecture import boundaries: passed locally
136 | - Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
137 | - Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
138 | - Repository assertion inventory: 161 source assertions; previous merged remote baseline is 154; current PostgreSQL-integrated source-branch CI is pending
139 | - Metrics coverage: eight shared observability assertions plus API and all four private-worker metric integrations passed locally
140 | - Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
141 | - WooCommerce PHP syntax: previous merged baseline passed remotely; current source-branch validation is pending
142 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
143 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
144 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
145 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
146 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
147 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
148 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
149 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
150 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
151 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
152 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
153 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
154 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
155 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
156 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
157 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
158 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
159 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
160 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
161 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
162 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
163 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
164 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
165 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
166 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
167 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
168 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
169 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
170 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
171 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
172 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
173 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
174 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
175 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
176 | - Canonical documentation links before this slice: zero known broken internal links
177 | - `tracker.yml` YAML structure remains valid
178 | - Prohibited source-pattern search: no matches
179 |
180 | The repository-local continuation exporter was refreshed after the vendor-neutral metrics documentation and tracker were finalized.
181 |
182 | ## Next production milestone
183 |
184 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
185 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
186 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
187 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
188 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
189 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
190 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
191 |
192 | ## External blockers
193 |
194 | - Authorized Steadfast merchant/test credentials
195 | - Steadfast provider-terms and merchant-authorization review
196 | - Deployment platform, account, primary region, and budget
197 | - Managed PostgreSQL provider and service tier
198 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
199 | - Managed secret store and KMS/vault provider
200 | - OpenTelemetry exporter/collector, tracing, managed observability backend, dashboards, alerts, and retention policy
201 | - OTP provider account and credentials
202 | - Production account recovery/MFA or managed identity-provider decision
203 | - Repository visibility correction from currently reported public to expected private
204 | - Pilot outcome data for false-positive/false-negative calibration
205 |
206 | ## Non-negotiable continuation rules
207 |
208 | - Do not add a second risk engine.
209 | - Do not call providers from the risk engine or synchronous checkout path.
210 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
211 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
212 | - Do not use API keys as dashboard user sessions.
213 | - Require organization/store scope in all merchant repositories, events, and jobs.
214 | - Add new migrations; never edit applied migrations.
215 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
216 | - Keep Redis/cache state non-authoritative.
217 | - Keep unknown/provider failure explicit and policy-controlled.
218 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
219 |

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
 51 | 45. `@ozzyl/observability` owns the vendor-neutral metric descriptor/recorder boundary. Every metric attribute is declared through a bounded finite value set; unknown attributes plus identifier-, hash-, key-, URL-, payload-, body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style keys are rejected. API metrics use only normalized method, canonical route/template, and status class. Worker metrics use only finite worker type, operation, and outcome; claim-failure metrics use worker type only. Metric validation, serialization, clock, or sink failure cannot change request or worker behavior. The current sink emits JSON points without network I/O; OpenTelemetry exporters/collector, traces, repository/provider measurements, dashboards, alerts, backend, and retention remain separate production work.
 52 |
 53 | ## Source SaaS conflict resolutions
 54 |
 55 | | Conflict                                                                 | Decision                                                                                   |
 56 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 57 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 58 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 59 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 60 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 61 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 62 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 63 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 64 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 65 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 66 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 67 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 68 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 69 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 70 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 71 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 72 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 73 |
 74 | ## Approved reuse scope
 75 |
 76 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 77 | - Bangladesh phone normalization after tests
 78 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 79 | - WooCommerce settings/order hook/admin display skeleton
 80 | - API-key hash/display-prefix and usage-event concepts
 81 |
 82 | No product source code was copied during Phase 0.
 83 |
 84 | ## Pending decisions
 85 |
 86 | These require provider selection, provisioning, or separate ADRs before production implementation:
 87 |
 88 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 89 | - Specific deployment platform, account, and primary region
 90 | - Specific managed PostgreSQL provider and service tier
 91 | - Specific managed secret store and KMS/vault provider
 92 | - Specific observability backend and retention policy
 93 | - Redis-compatible cache provider when distributed coordination is required
 94 | - Dedicated broker only if measured scale requires superseding ADR 0008
 95 | - Worker scheduler/runtime implementation on the selected deployment platform
 96 | - OTP provider
 97 |
 98 | ## External requirements
 99 |
100 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
101 |
102 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
103 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, .ai-bridge/pro-context.md, README.md, apps/api/src/index.test.ts, apps/api/src/index.ts, apps/api/src/server.ts, docs/README.md, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/observability/src/index.ts, tracker.yml, workers/courier-session-worker/src/index.test.ts, workers/courier-session-worker/src/index.ts, workers/courier-session-worker/src/runner.ts, workers/courier-sync-worker/src/index.test.ts, workers/courier-sync-worker/src/index.ts, workers/courier-sync-worker/src/runner.ts, workers/event-worker/src/index.test.ts, workers/event-worker/src/index.ts, workers/event-worker/src/runner.ts, workers/verification-worker/src/index.test.ts, workers/verification-worker/src/index.ts, workers/verification-worker/src/runner.ts, packages/observability/src/metrics.test.ts, packages/observability/src/metrics.ts
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, docs/README.md, eslint.config.js, package.json, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, apps/api/src/index.test.ts, apps/api/src/index.ts, apps/api/src/server.ts, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/observability/src/index.ts, packages/observability/src/metrics.test.ts, packages/observability/src/metrics.ts, tracker.yml, workers/courier-session-worker/src/index.test.ts, workers/courier-session-worker/src/index.ts, workers/courier-session-worker/src/runner.ts, workers/courier-sync-worker/src/index.test.ts, workers/courier-sync-worker/src/index.ts, workers/courier-sync-worker/src/runner.ts, workers/event-worker/src/index.test.ts, workers/event-worker/src/index.ts, workers/event-worker/src/runner.ts, workers/verification-worker/src/index.test.ts, workers/verification-worker/src/index.ts, workers/verification-worker/src/runner.ts

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

Bytes: 3248
SHA-256: 78508f1c92e0347d886c1e7ab6de2c18b0fe80709da857390704add850f2b73e
Lines: 1-56 of 56

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The durable work retention milestone is merged on `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`; its feature CI run `30325144458`, job `90168867190`, passed thirteen migrations, 20 typechecks, 31 Turbo tasks with 154 assertions, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. The current vendor-neutral metrics source branch adds finite-cardinality API and private-worker counters/histograms plus claim-failure points without identifiers, payloads, contact data, credentials, URLs, or arbitrary error codes. PostgreSQL-integrated source-branch CI evidence is still pending.
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

Bytes: 7960
SHA-256: c40a59b08933916268acb80c8d0b7bae1606354ccdb1fbe0d806e3d01eff0074
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
 49 | - Vendor-neutral JSON metric points for API request count/duration, private-worker operation count/duration, and durable claim failures, with finite categorical labels and telemetry-failure isolation
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

Bytes: 25328
SHA-256: 776b2d1a9956c3ab218bd4ed76dc9cb048b7c301e789a2a2638a550e48362a3a
Lines: 1-219 of 219

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and eighteen production-hardening slices are complete:
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
 26 | 18. vendor-neutral finite-cardinality application metrics for API requests, private-worker operations/duration, and durable claim failures, with prohibited identifier/secret/contact/URL/payload labels and sink-failure isolation.
 27 |
 28 | Concrete provider selection and provisioning remain external production work.
 29 |
 30 | ## Completed
 31 |
 32 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 33 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 34 | - [x] Canonical shared API/error/event contracts
 35 | - [x] PostgreSQL/Drizzle schema and thirteen append-only migrations
 36 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 37 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 38 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 39 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 40 | - [x] Courier adapter contract and Steadfast normalized adapter
 41 | - [x] Playwright Steadfast session driver with structured errors
 42 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 43 | - [x] Runnable PostgreSQL courier session and observation workers
 44 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 45 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 46 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 47 | - [x] API OTP send returns queued work without provider network I/O
 48 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 49 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 50 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 51 | - [x] Explicit-role platform admin with live global operations data
 52 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 53 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 54 | - [x] Architecture dependency-boundary CI guard
 55 | - [x] Provider-neutral production deployment topology ADR
 56 | - [x] Managed PostgreSQL production baseline ADR
 57 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 58 | - [x] Managed secrets and KMS envelope-encryption ADR
 59 | - [x] Vendor-neutral OpenTelemetry observability ADR
 60 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 61 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 62 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 63 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 64 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 65 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 66 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 67 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 68 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 69 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 70 | - [x] Concurrent usage reservations cannot exceed the plan limit
 71 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 72 | - [x] Concurrent outcome writes resolve as one insert and one replay
 73 | - [x] Operation idempotency records remain isolated by organization and store
 74 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 75 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 76 | - [x] Expired or previous courier owners cannot complete or fail jobs
 77 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 78 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 79 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 80 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 81 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 82 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 83 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 84 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 85 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 86 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 87 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 88 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 89 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 90 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 91 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 92 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 93 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 94 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 95 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 96 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 97 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 98 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 99 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
100 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
101 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
102 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
103 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
104 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
105 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
106 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
107 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
108 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
109 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
110 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
111 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
112 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
113 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
114 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
115 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
116 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
117 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
118 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
119 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
120 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
121 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
122 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
123 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
124 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
125 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
126 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
127 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
128 |
129 | ## Verified baseline
130 |
131 | - Formatting check: passed
132 | - ESLint with zero warnings: passed
133 | - Thirteen migration files ordered/non-empty/non-destructive: passed locally; previous merged baseline passed remotely; current source-branch CI is pending
134 | - First migration apply and immediate migration replay: previous merged baseline passed remotely
135 | - Architecture import boundaries: passed locally
136 | - Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
137 | - Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
138 | - Repository assertion inventory: 161 source assertions; previous merged remote baseline is 154; current PostgreSQL-integrated source-branch CI is pending
139 | - Metrics coverage: eight shared observability assertions plus API and all four private-worker metric integrations passed locally
140 | - Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
141 | - WooCommerce PHP syntax: previous merged baseline passed remotely; current source-branch validation is pending
142 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
143 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
144 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
145 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
146 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
147 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
148 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
149 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
150 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
151 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
152 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
153 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
154 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
155 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
156 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
157 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
158 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
159 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
160 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
161 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
162 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
163 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
164 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
165 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
166 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
167 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
168 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
169 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
170 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
171 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
172 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
173 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
174 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
175 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
176 | - Canonical documentation links before this slice: zero known broken internal links
177 | - `tracker.yml` YAML structure remains valid
178 | - Prohibited source-pattern search: no matches
179 |
180 | The repository-local continuation exporter was refreshed after the vendor-neutral metrics documentation and tracker were finalized.
181 |
182 | ## Next production milestone
183 |
184 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
185 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
186 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
187 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
188 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
189 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
190 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
191 |
192 | ## External blockers
193 |
194 | - Authorized Steadfast merchant/test credentials
195 | - Steadfast provider-terms and merchant-authorization review
196 | - Deployment platform, account, primary region, and budget
197 | - Managed PostgreSQL provider and service tier
198 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
199 | - Managed secret store and KMS/vault provider
200 | - OpenTelemetry exporter/collector, tracing, managed observability backend, dashboards, alerts, and retention policy
201 | - OTP provider account and credentials
202 | - Production account recovery/MFA or managed identity-provider decision
203 | - Repository visibility correction from currently reported public to expected private
204 | - Pilot outcome data for false-positive/false-negative calibration
205 |
206 | ## Non-negotiable continuation rules
207 |
208 | - Do not add a second risk engine.
209 | - Do not call providers from the risk engine or synchronous checkout path.
210 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
211 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
212 | - Do not use API keys as dashboard user sessions.
213 | - Require organization/store scope in all merchant repositories, events, and jobs.
214 | - Add new migrations; never edit applied migrations.
215 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
216 | - Keep Redis/cache state non-authoritative.
217 | - Keep unknown/provider failure explicit and policy-controlled.
218 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
219 |
```

### .ai-bridge/decisions.md

Bytes: 17019
SHA-256: e918083ac6d2f881ada9a1a5083c3987e9a5a0df64f75af9519ace059eacb538
Lines: 1-103 of 103

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
 51 | 45. `@ozzyl/observability` owns the vendor-neutral metric descriptor/recorder boundary. Every metric attribute is declared through a bounded finite value set; unknown attributes plus identifier-, hash-, key-, URL-, payload-, body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style keys are rejected. API metrics use only normalized method, canonical route/template, and status class. Worker metrics use only finite worker type, operation, and outcome; claim-failure metrics use worker type only. Metric validation, serialization, clock, or sink failure cannot change request or worker behavior. The current sink emits JSON points without network I/O; OpenTelemetry exporters/collector, traces, repository/provider measurements, dashboards, alerts, backend, and retention remain separate production work.
 52 |
 53 | ## Source SaaS conflict resolutions
 54 |
 55 | | Conflict                                                                 | Decision                                                                                   |
 56 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 57 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 58 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 59 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 60 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 61 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 62 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 63 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 64 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 65 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 66 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 67 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 68 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 69 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 70 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 71 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 72 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 73 |
 74 | ## Approved reuse scope
 75 |
 76 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 77 | - Bangladesh phone normalization after tests
 78 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 79 | - WooCommerce settings/order hook/admin display skeleton
 80 | - API-key hash/display-prefix and usage-event concepts
 81 |
 82 | No product source code was copied during Phase 0.
 83 |
 84 | ## Pending decisions
 85 |
 86 | These require provider selection, provisioning, or separate ADRs before production implementation:
 87 |
 88 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 89 | - Specific deployment platform, account, and primary region
 90 | - Specific managed PostgreSQL provider and service tier
 91 | - Specific managed secret store and KMS/vault provider
 92 | - Specific observability backend and retention policy
 93 | - Redis-compatible cache provider when distributed coordination is required
 94 | - Dedicated broker only if measured scale requires superseding ADR 0008
 95 | - Worker scheduler/runtime implementation on the selected deployment platform
 96 | - OTP provider
 97 |
 98 | ## External requirements
 99 |
100 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
101 |
102 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
103 |
```

### .ai-bridge/implementation-status.md

Bytes: 26469
SHA-256: 5c172f510d93b5daf03c7534f3f28c7c91cfa5134ea526cc8be27852954e1281
Lines: 1-184 of 184

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
 27 | | Area                             | Status   | Notes                                                                                                                                                                                               |
 28 | | -------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                                     |
 30 | | Database/migrations              | done     | Thirteen append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                                   |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                                  |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                                     |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                               |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                       |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                       |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                       |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                                |
 38 | | Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                           |
 39 | | Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                                   |
 40 | | Durable work architecture        | done     | Claims, renewable leases, dead-letter replay, plus maintenance-only bounded terminal archival with evidence-before-delete and runtime-role denial                                                   |
 41 | | Durable work operations          | done     | Failed work supports scoped replay; old completed/failed rows support preview-first maintenance archival while immutable replay/audit evidence remains                                              |
 42 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                              |
 43 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                                     |
 44 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                            |
 45 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                            |
 46 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                         |
 47 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                                      |
 48 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                            |
 49 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                                |
 50 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                                 |
 51 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                       |
 52 | | OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                                     |
 53 | | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                                      |
 54 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                           |
 55 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                          |
 56 | | PostgreSQL runtime role          | done     | Explicit DML grants, no migration history/DELETE/DDL/archive access; separate retention-maintenance identity and managed provisioning remain                                                        |
 57 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                              |
 58 | | Observability                    | baseline | Canonical redacted logs plus finite-cardinality API/worker metrics are implemented; traces, exporters, repository/provider metrics, queue gauges, backend, dashboards, alerts, and retention remain |
 59 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                           |
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
 90 | - `npm run test`: 31/31 Turbo tasks passed locally; source inventory is 161 assertions and previous merged remote baseline is 154
 91 | - `npm run build`: 20/20 workspace builds passed locally; current source-branch CI is pending
 92 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 93 | - Observability tests prove fixed log metadata/redaction plus metric descriptor validation, finite categorical attributes, high-cardinality and secret-like key rejection, exporter-neutral JSON points, worker helper output, and sink-failure isolation
 94 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, bounded request count/duration metrics, safe unhandled-error serialization, and request availability during log/metric sink failure
 95 | - Courier-session, courier-sync, event, and verification tests prove bounded operation count/duration metrics omit account/job/event/endpoint/phone/OTP/credential values; shared tests cover claim-failure metrics
 96 | - Lease-heartbeat tests prove non-overlapping renewal, owner/expiry enforcement, abort-on-renewal-loss propagation, and heartbeat drain before final courier/webhook/verification transitions
 97 | - Retention tests prove cutoff/status/batch/run-ID validation, terminal-only preview, payload-free evidence, archive-before-delete atomicity, ineligible-row preservation, replay-ledger preservation, idempotent reruns, and runtime archive-access denial
 98 | - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
 99 | - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
100 | - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
101 | - Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
102 | - Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
103 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
104 | - Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
105 | - Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
106 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
107 | - Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
108 | - Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
109 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
110 | - Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
111 | - Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
112 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
113 | - Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
114 | - Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
115 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
116 | - Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
117 | - Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
118 | - Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
119 | - Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
120 | - Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
121 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
122 | - Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
123 | - Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
124 | - Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
125 | - Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
126 | - Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
127 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
128 | - Five real-PostgreSQL durable-work tests cover exact-store owner/admin listing, negative member authorization, concurrent duplicate replay, one immutable ledger/audit outcome, courier lease reset, scoped unexpired verification reopening, structural/expired rejection, cross-tenant isolation, and idempotency conflicts
129 | - Seven runtime-role tests now include insert-only replay-ledger privileges alongside migration-history, DELETE, DDL, ownership, and elevated-role denials
130 | - Durable-work dead-letter final run `29644234591`, job `88079650134`: twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
131 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
132 | - Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping
133 | - Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
134 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
135 | - Structured observability final run `30317190971`, job `90145176143`: twelve migrations, 20 typechecks, 31 Turbo test/build dependency tasks with 132 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
136 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
137 | - API request observability final run `30318999952`, job `90150731352`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 136 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
138 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
139 | - Durable worker heartbeat final run `30322016826`, job `90159676583`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 145 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
140 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
141 | - Durable work retention final run `30325144458`, job `90168867190`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 154 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
142 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
143 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
144 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
145 | - Previous canonical documentation checks found zero broken internal links
146 | - Prohibited insecure-pattern scan: zero matches
147 |
148 | The repository-local exporter was refreshed after the vendor-neutral metrics documentation and tracker were finalized. Current source-branch remote CI is pending.
149 |
150 | ## External blockers and production requirements
151 |
152 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
153 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
154 | - Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
155 | - Managed secret store and KMS/vault provider
156 | - OpenTelemetry exporter/collector, distributed tracing, managed observability backend, retention, dashboards, alerts, and incident channels
157 | - Optional Redis-compatible cache only when distributed coordination is required
158 | - Authorized Steadfast test/merchant account
159 | - Provider-terms and merchant-authorization review
160 | - OTP provider selection/account
161 | - Production account recovery/MFA or managed identity-provider decision
162 | - Pilot merchants and verified outcome data for calibration
163 |
164 | ## Remaining risks
165 |
166 | - Steadfast UI/internal endpoint changes can break automation.
167 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
168 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
169 | - In-process API and browser-session rate limiting is not distributed across replicas.
170 | - Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
171 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
172 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
173 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
174 | - GitHub currently reports public repository visibility although the expected policy is private.
175 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
176 | - Structured logs plus finite-cardinality API and private-worker metrics are implemented, but repository/provider metrics, queue gauges, traces, exporters/collector, dashboards, alerts, managed backend, and telemetry retention are not yet implemented.
177 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
178 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
179 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
180 |
181 | ## Next milestone
182 |
183 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
184 |
```

### apps/api/src/index.test.ts

Bytes: 13925
SHA-256: dc22ebb6daafb85a055e0bdfd51b6299a82dbfd59d6b57bd041f86aa3708aa99
Lines: 1-421 of 421

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { describe, expect, it } from 'vitest';
  3 | import { MemoryUsageLedger } from '@ozzyl/billing';
  4 | import {
  5 |   createMetricRecorder,
  6 |   createStructuredLogger,
  7 |   type MetricRecorder,
  8 |   type StructuredLogger,
  9 | } from '@ozzyl/observability';
 10 | import {
 11 |   createApiApp,
 12 |   MemoryAssessmentRepository,
 13 |   MemoryOperationIdempotencyStore,
 14 |   MemoryOutcomeRepository,
 15 |   MemoryRateLimiter,
 16 |   MemoryRefreshQueue,
 17 |   MissingFeatureProvider,
 18 |   type ApiKeyIdentity,
 19 |   type AssessmentRepository,
 20 | } from './index.js';
 21 | function parseMetricLine(line: string): unknown {
 22 |   return JSON.parse(line) as unknown;
 23 | }
 24 |
 25 | const apiKey = ['ozg', 'test', 'fixture-a'].join('_');
 26 |
 27 | function createTestApp(input?: {
 28 |   identity?: ApiKeyIdentity;
 29 |   assessments?: AssessmentRepository;
 30 |   rawApiKey?: string;
 31 |   logger?: StructuredLogger;
 32 |   metrics?: MetricRecorder;
 33 |   monotonicNow?: () => number;
 34 |   verificationRequests?: {
 35 |     enqueueSend(input: {
 36 |       organizationId: string;
 37 |       storeId: string;
 38 |       assessmentId?: string;
 39 |       phone: string;
 40 |       phoneHash: string;
 41 |       purpose: string;
 42 |       idempotencyKey: string;
 43 |     }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
 44 |   };
 45 |   otpVerifier?: {
 46 |     verify(input: {
 47 |       organizationId: string;
 48 |       storeId: string;
 49 |       verificationId: string;
 50 |       otp: string;
 51 |     }): Promise<{ verified: true }>;
 52 |   };
 53 | }) {
 54 |   let counter = 0;
 55 |   const identity =
 56 |     input?.identity ??
 57 |     ({
 58 |       apiKeyId: 'key_1',
 59 |       organizationId: 'org_1',
 60 |       storeId: 'store_1',
 61 |       environment: 'test',
 62 |       plan: 'free',
 63 |       scopes: new Set(['*']),
 64 |     } satisfies ApiKeyIdentity);
 65 |   const acceptedKey = input?.rawApiKey ?? apiKey;
 66 |   return createApiApp({
 67 |     apiKeys: {
 68 |       async resolve(rawApiKey) {
 69 |         return rawApiKey === acceptedKey ? identity : null;
 70 |       },
 71 |     },
 72 |     usage: new MemoryUsageLedger(),
 73 |     features: new MissingFeatureProvider(),
 74 |     assessments: input?.assessments ?? new MemoryAssessmentRepository(),
 75 |     outcomes: new MemoryOutcomeRepository(),
 76 |     refreshQueue: new MemoryRefreshQueue(),
 77 |     idempotency: new MemoryOperationIdempotencyStore(),
 78 |     rateLimiter: new MemoryRateLimiter(),
 79 |     hashPhone: (phone) => createHmac('sha256', 'x'.repeat(32)).update(phone).digest('hex'),
 80 |     ...(input?.verificationRequests === undefined
 81 |       ? {}
 82 |       : { verificationRequests: input.verificationRequests }),
 83 |     ...(input?.otpVerifier === undefined ? {} : { otpVerifier: input.otpVerifier }),
 84 |     ...(input?.logger === undefined ? {} : { logger: input.logger }),
 85 |     ...(input?.metrics === undefined ? {} : { metrics: input.metrics }),
 86 |     ...(input?.monotonicNow === undefined ? {} : { monotonicNow: input.monotonicNow }),
 87 |     idFactory: (prefix) => `${prefix}_${++counter}`,
 88 |     now: () => new Date('2026-07-16T10:00:00.000Z'),
 89 |   });
 90 | }
 91 |
 92 | const assessmentRequest = {
 93 |   phone: '01712345678',
 94 |   order_total: 1500,
 95 |   payment_method: 'cod',
 96 | };
 97 |
 98 | const authorizedHeaders = {
 99 |   Authorization: `Bearer ${apiKey}`,
100 |   'Content-Type': 'application/json',
101 |   'Idempotency-Key': 'order-1001',
102 | };
103 |
104 | describe('Ozzyl Guard API', () => {
105 |   it('records a bounded request lifecycle without logging dynamic path values', async () => {
106 |     const lines: string[] = [];
107 |     const metricLines: string[] = [];
108 |     const ticks = [100, 125];
109 |     const logger = createStructuredLogger({
110 |       service: 'api-test',
111 |       environment: 'test',
112 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
113 |       write: (line) => lines.push(line),
114 |     });
115 |     const metrics = createMetricRecorder({
116 |       service: 'api-test',
117 |       environment: 'test',
118 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
119 |       write: (line) => metricLines.push(line),
120 |     });
121 |     const response = await createTestApp({
122 |       logger,
123 |       metrics,
124 |       monotonicNow: () => ticks.shift() ?? 125,
125 |     }).request('/v1/risk-assessments/ras-sensitive-value?query=discard-me', {
126 |       headers: {
127 |         Authorization: `Bearer ${apiKey}`,
128 |         'X-Request-ID': 'req_client-123',
129 |       },
130 |     });
131 |
132 |     expect(response.status).toBe(404);
133 |     expect(response.headers.get('X-Request-ID')).toBe('req_client-123');
134 |     expect(lines).toHaveLength(1);
135 |     expect(JSON.parse(lines[0] ?? '{}')).toMatchObject({
136 |       level: 'warn',
137 |       event: 'api.request.completed',
138 |       request_id: 'req_client-123',
139 |       method: 'GET',
140 |       route: '/v1/risk-assessments/:assessment_id',
141 |       status_code: 404,
142 |       status_class: '4xx',
143 |       duration_ms: 25,
144 |     });
145 |     expect(lines.join('\n')).not.toContain('ras-sensitive-value');
146 |     expect(lines.join('\n')).not.toContain('discard-me');
147 |     expect(metricLines.map(parseMetricLine)).toEqual([
148 |       expect.objectContaining({
149 |         name: 'ozzyl.api.requests',
150 |         kind: 'counter',
151 |         value: 1,
152 |         attributes: {
153 |           method: 'GET',
154 |           route: '/v1/risk-assessments/:assessment_id',
155 |           status_class: '4xx',
156 |         },
157 |       }),
158 |       expect.objectContaining({
159 |         name: 'ozzyl.api.request.duration',
160 |         kind: 'histogram',
161 |         unit: 'ms',
162 |         value: 25,
163 |         attributes: {
164 |           method: 'GET',
165 |           route: '/v1/risk-assessments/:assessment_id',
166 |           status_class: '4xx',
167 |         },
168 |       }),
169 |     ]);
170 |     expect(metricLines.join('\n')).not.toContain('ras-sensitive-value');
171 |     expect(metricLines.join('\n')).not.toContain('discard-me');
172 |   });
173 |
174 |   it('rejects arbitrary caller request identifiers instead of reflecting them', async () => {
175 |     const lines: string[] = [];
176 |     const logger = createStructuredLogger({
177 |       service: 'api-test',
178 |       environment: 'test',
179 |       write: (line) => lines.push(line),
180 |     });
181 |     const unsafeRequestId = 'customer-reference-1001';
182 |     const response = await createTestApp({ logger }).request('/health', {
183 |       headers: { 'X-Request-ID': unsafeRequestId },
184 |     });
185 |
186 |     expect(response.status).toBe(200);
187 |     expect(response.headers.get('X-Request-ID')).toBe('req_1');
188 |     expect(lines.join('\n')).not.toContain(unsafeRequestId);
189 |   });
190 |
191 |   it('keeps request handling available when the telemetry sink fails', async () => {
192 |     const logger = createStructuredLogger({
193 |       service: 'api-test',
194 |       environment: 'test',
195 |       write: () => {
196 |         throw new Error('sink unavailable');
197 |       },
198 |     });
199 |     const metrics = createMetricRecorder({
200 |       service: 'api-test',
201 |       environment: 'test',
202 |       write: () => {
203 |         throw new Error('metric sink unavailable');
204 |       },
205 |     });
206 |     const response = await createTestApp({ logger, metrics }).request('/health');
207 |
208 |     expect(response.status).toBe(200);
209 |     await expect(response.json()).resolves.toMatchObject({ status: 'ok' });
210 |   });
211 |
212 |   it('records unhandled errors without exporting their messages or stacks', async () => {
213 |     const lines: string[] = [];
214 |     const logger = createStructuredLogger({
215 |       service: 'api-test',
216 |       environment: 'test',
217 |       write: (line) => lines.push(line),
218 |     });
219 |     const failure = Object.assign(new Error('restricted database detail'), {
220 |       code: 'DATABASE_FAILURE',
221 |     });
222 |     const assessments: AssessmentRepository = {
223 |       async findByIdempotency() {
224 |         throw failure;
225 |       },
226 |       async findById() {
227 |         return null;
228 |       },
229 |       async save(record) {
230 |         return record;
231 |       },
232 |     };
233 |     const response = await createTestApp({ logger, assessments }).request('/v1/risk-assessments', {
234 |       method: 'POST',
235 |       headers: authorizedHeaders,
236 |       body: JSON.stringify(assessmentRequest),
237 |     });
238 |
239 |     expect(response.status).toBe(500);
240 |     await expect(response.json()).resolves.toMatchObject({
241 |       success: false,
242 |       error: { code: 'INTERNAL_ERROR' },
243 |     });
244 |     const records = lines.map((line) => JSON.parse(line) as Record<string, unknown>);
245 |     expect(records).toEqual(
246 |       expect.arrayContaining([
247 |         expect.objectContaining({
248 |           event: 'api.request.unhandled_error',
249 |           code: 'UNHANDLED_ERROR',
250 |           error: { name: 'Error', code: 'DATABASE_FAILURE' },
251 |         }),
252 |         expect.objectContaining({
253 |           event: 'api.request.completed',
254 |           status_code: 500,
255 |           status_class: '5xx',
256 |         }),
257 |       ]),
258 |     );
259 |     expect(lines.join('\n')).not.toContain('restricted database detail');
260 |     expect(lines.join('\n')).not.toContain('stack');
261 |   });
262 |
263 |   it('requires API authentication', async () => {
264 |     const response = await createTestApp().request('/v1/risk-assessments', {
265 |       method: 'POST',
266 |       headers: { 'Content-Type': 'application/json', 'Idempotency-Key': 'request-1' },
267 |       body: JSON.stringify(assessmentRequest),
268 |     });
269 |     expect(response.status).toBe(401);
270 |   });
271 |
272 |   it('returns the canonical unknown/verify assessment when history is unavailable', async () => {
273 |     const response = await createTestApp().request('/v1/risk-assessments', {
274 |       method: 'POST',
275 |       headers: authorizedHeaders,
276 |       body: JSON.stringify(assessmentRequest),
277 |     });
278 |     expect(response.status).toBe(201);
279 |     const body = (await response.json()) as Record<string, unknown>;
280 |     expect(body).toMatchObject({
281 |       success: true,
282 |       risk_level: 'unknown',
283 |       decision: 'verify',
284 |       confidence: 0,
285 |     });
286 |     expect((body.signals as Array<{ code: string }>)[0]?.code).toBe('insufficient_history');
287 |   });
288 |
289 |   it('returns the original result for an idempotent retry', async () => {
290 |     const app = createTestApp();
291 |     const first = await app.request('/v1/risk-assessments', {
292 |       method: 'POST',
293 |       headers: authorizedHeaders,
294 |       body: JSON.stringify(assessmentRequest),
295 |     });
296 |     const second = await app.request('/v1/risk-assessments', {
297 |       method: 'POST',
298 |       headers: authorizedHeaders,
299 |       body: JSON.stringify(assessmentRequest),
300 |     });
301 |     expect(first.status).toBe(201);
302 |     expect(second.status).toBe(200);
303 |     const firstBody = (await first.json()) as { assessment_id: string };
304 |     const secondBody = (await second.json()) as { assessment_id: string };
305 |     expect(secondBody.assessment_id).toBe(firstBody.assessment_id);
306 |   });
307 |
308 |   it('enforces store isolation when reading an assessment', async () => {
309 |     const assessments = new MemoryAssessmentRepository();
310 |     const storeOneApp = createTestApp({ assessments });
311 |     const created = await storeOneApp.request('/v1/risk-assessments', {
312 |       method: 'POST',
313 |       headers: authorizedHeaders,
314 |       body: JSON.stringify(assessmentRequest),
315 |     });
316 |     const createdBody = (await created.json()) as { assessment_id: string };
317 |
318 |     const otherKey = ['ozg', 'test', 'fixture-b'].join('_');
319 |     const storeTwoApp = createTestApp({
320 |       assessments,
321 |       rawApiKey: otherKey,
322 |       identity: {
323 |         apiKeyId: 'key_2',
324 |         organizationId: 'org_1',
325 |         storeId: 'store_2',
326 |         environment: 'test',
327 |         plan: 'free',
328 |         scopes: new Set(['*']),
329 |       },
330 |     });
331 |     const response = await storeTwoApp.request(
332 |       `/v1/risk-assessments/${createdBody.assessment_id}`,
333 |       { headers: { Authorization: `Bearer ${otherKey}` } },
334 |     );
335 |     expect(response.status).toBe(404);
336 |   });
337 |
338 |   it('queues OTP delivery without performing provider I/O in the request', async () => {
339 |     let enqueueCalls = 0;
340 |     const app = createTestApp({
341 |       verificationRequests: {
342 |         async enqueueSend(input) {
343 |           enqueueCalls += 1;
344 |           expect(input).toMatchObject({
345 |             organizationId: 'org_1',
346 |             storeId: 'store_1',
347 |             purpose: 'cod_order_confirmation',
348 |             idempotencyKey: 'otp-1001',
349 |           });
350 |           return {
351 |             verificationId: 'ver_queued',
352 |             expiresAt: '2026-07-16T10:05:00.000Z',
353 |             replay: false,
354 |           };
355 |         },
356 |       },
357 |     });
358 |     const response = await app.request('/v1/verifications/otp/send', {
359 |       method: 'POST',
360 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'otp-1001' },
361 |       body: JSON.stringify({ phone: '01712345678' }),
362 |     });
363 |     expect(response.status).toBe(202);
364 |     await expect(response.json()).resolves.toMatchObject({
365 |       success: true,
366 |       verification_id: 'ver_queued',
367 |       status: 'queued',
368 |     });
369 |     expect(enqueueCalls).toBe(1);
370 |   });
371 |
372 |   it('verifies OTP through the database verifier dependency', async () => {
373 |     let verifyCalls = 0;
374 |     const app = createTestApp({
375 |       otpVerifier: {
376 |         async verify(input) {
377 |           verifyCalls += 1;
378 |           expect(input).toEqual({
379 |             organizationId: 'org_1',
380 |             storeId: 'store_1',
381 |             verificationId: 'ver_queued',
382 |             otp: '123456',
383 |           });
384 |           return { verified: true };
385 |         },
386 |       },
387 |     });
388 |     const response = await app.request('/v1/verifications/otp/verify', {
389 |       method: 'POST',
390 |       headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
391 |       body: JSON.stringify({ verification_id: 'ver_queued', otp: '123456' }),
392 |     });
393 |     expect(response.status).toBe(200);
394 |     expect(verifyCalls).toBe(1);
395 |   });
396 |
397 |   it('records outcomes idempotently', async () => {
398 |     const app = createTestApp();
399 |     const body = {
400 |       external_order_id: 'WC-1001',
401 |       outcome: 'delivered',
402 |       occurred_at: '2026-07-16T10:30:00.000Z',
403 |     };
404 |     const first = await app.request('/v1/order-outcomes', {
405 |       method: 'POST',
406 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
407 |       body: JSON.stringify(body),
408 |     });
409 |     const second = await app.request('/v1/order-outcomes', {
410 |       method: 'POST',
411 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
412 |       body: JSON.stringify(body),
413 |     });
414 |     expect(first.status).toBe(201);
415 |     expect(second.status).toBe(200);
416 |     const firstBody = (await first.json()) as { outcome_id: string };
417 |     const secondBody = (await second.json()) as { outcome_id: string; replay: boolean };
418 |     expect(secondBody).toMatchObject({ outcome_id: firstBody.outcome_id, replay: true });
419 |   });
420 | });
421 |
```

### apps/api/src/index.ts

Bytes: 38874
SHA-256: 4f33fc6ee84095b77663d07aaa95340ae7c1f29b6c3b888b7e0597bc74a1d285
Lines: 1-1177 of 1177

```typescript
   1 | import { randomUUID } from 'node:crypto';
   2 | import { Hono } from 'hono';
   3 | import { z } from 'zod';
   4 | import type { PlanCode, UsageLedger } from '@ozzyl/billing';
   5 | import {
   6 |   createMetricRecorder,
   7 |   createStructuredLogger,
   8 |   defineMetric,
   9 |   type MetricRecorder,
  10 |   type StructuredLogger,
  11 | } from '@ozzyl/observability';
  12 | import {
  13 |   assessRisk,
  14 |   isValidBangladeshPhone,
  15 |   normalizeBangladeshPhone,
  16 |   type CourierFeatures,
  17 |   type MerchantFeatures,
  18 |   type NetworkFeatures,
  19 |   type RiskPolicy,
  20 |   type VelocityFeatures,
  21 |   type VerificationFeatures,
  22 | } from '@ozzyl/risk-engine';
  23 | import {
  24 |   nativeShadowAttemptInputSchema,
  25 |   nativeShadowAttemptResponseSchema,
  26 |   nativeShadowComparisonInputSchema,
  27 |   nativeShadowComparisonResponseSchema,
  28 |   nativeShadowRolloutResponseSchema,
  29 |   orderOutcomeSchema,
  30 |   riskAssessmentRequestSchema,
  31 |   riskAssessmentResponseSchema,
  32 |   type NativeShadowAttemptInput,
  33 |   type NativeShadowComparisonInput,
  34 |   type NativeShadowRolloutMode,
  35 |   type OrderOutcomeInput,
  36 |   type RiskAssessmentRequest,
  37 |   type RiskAssessmentResponse,
  38 | } from '@ozzyl/shared-types';
  39 | import { VerificationError } from '@ozzyl/verification';
  40 | import { createBrowserApi, type BrowserApiDependencies } from './browser.js';
  41 |
  42 | export * from './postgres-administration.js';
  43 | export * from './postgres-native-shadow-pilot.js';
  44 | export * from './postgres-shadow-comparisons.js';
  45 |
  46 | export interface ApiKeyIdentity {
  47 |   apiKeyId: string;
  48 |   organizationId: string;
  49 |   storeId: string;
  50 |   environment: 'test' | 'live';
  51 |   plan: PlanCode;
  52 |   scopes: ReadonlySet<string>;
  53 | }
  54 |
  55 | export interface ApiKeyResolver {
  56 |   resolve(rawApiKey: string): Promise<ApiKeyIdentity | null>;
  57 | }
  58 |
  59 | export interface AssessmentFeatureSet {
  60 |   courier: CourierFeatures;
  61 |   merchant: MerchantFeatures;
  62 |   velocity: VelocityFeatures;
  63 |   verification: VerificationFeatures;
  64 |   network: NetworkFeatures;
  65 |   policy?: RiskPolicy;
  66 | }
  67 |
  68 | export interface AssessmentFeatureProvider {
  69 |   load(input: {
  70 |     identity: ApiKeyIdentity;
  71 |     phone: string;
  72 |     phoneHash: string;
  73 |     request: RiskAssessmentRequest;
  74 |   }): Promise<AssessmentFeatureSet>;
  75 | }
  76 |
  77 | export interface StoredAssessment {
  78 |   identity: Pick<ApiKeyIdentity, 'apiKeyId' | 'organizationId' | 'storeId'>;
  79 |   idempotencyKey: string;
  80 |   phoneHash: string;
  81 |   request: RiskAssessmentRequest;
  82 |   response: RiskAssessmentResponse;
  83 | }
  84 |
  85 | export interface AssessmentRepository {
  86 |   findByIdempotency(input: {
  87 |     organizationId: string;
  88 |     storeId: string;
  89 |     idempotencyKey: string;
  90 |   }): Promise<StoredAssessment | null>;
  91 |   findById(input: {
  92 |     organizationId: string;
  93 |     storeId: string;
  94 |     assessmentId: string;
  95 |   }): Promise<StoredAssessment | null>;
  96 |   save(record: StoredAssessment): Promise<StoredAssessment>;
  97 | }
  98 |
  99 | export interface OutcomeRepository {
 100 |   save(input: {
 101 |     organizationId: string;
 102 |     storeId: string;
 103 |     idempotencyKey: string;
 104 |     outcome: OrderOutcomeInput;
 105 |   }): Promise<{ outcomeId: string; replay: boolean }>;
 106 | }
 107 |
 108 | export interface ShadowComparisonRepository {
 109 |   save(input: {
 110 |     organizationId: string;
 111 |     storeId: string;
 112 |     apiKeyId: string;
 113 |     idempotencyKey: string;
 114 |     comparison: NativeShadowComparisonInput;
 115 |     guardAssessment: RiskAssessmentResponse;
 116 |   }): Promise<{ comparisonId: string; replay: boolean }>;
 117 | }
 118 |
 119 | export interface NativeShadowRolloutRepository {
 120 |   load(input: { organizationId: string; storeId: string }): Promise<{
 121 |     organizationId: string;
 122 |     storeId: string;
 123 |     integration: 'multi-store-saas';
 124 |     mode: NativeShadowRolloutMode;
 125 |     rolloutVersion: string;
 126 |     sampleRateBps: number;
 127 |     samplingKey: string;
 128 |   } | null>;
 129 | }
 130 |
 131 | export interface NativeShadowRolloutAdministrationRepository {
 132 |   setForStore(input: {
 133 |     userId: string;
 134 |     organizationId: string;
 135 |     storeId: string;
 136 |     mode: NativeShadowRolloutMode;
 137 |     rolloutVersion: string;
 138 |     sampleRateBps: number;
 139 |   }): Promise<{
 140 |     organizationId: string;
 141 |     storeId: string;
 142 |     integration: 'multi-store-saas';
 143 |     mode: NativeShadowRolloutMode;
 144 |     rolloutVersion: string;
 145 |     sampleRateBps: number;
 146 |     samplingKey: string;
 147 |   } | null>;
 148 | }
 149 |
 150 | export interface NativeShadowAttemptRepository {
 151 |   save(input: {
 152 |     organizationId: string;
 153 |     storeId: string;
 154 |     apiKeyId: string;
 155 |     idempotencyKey: string;
 156 |     attempt: NativeShadowAttemptInput;
 157 |   }): Promise<{ attemptId: string; replay: boolean }>;
 158 | }
 159 |
 160 | export interface CourierRefreshQueue {
 161 |   enqueue(input: {
 162 |     organizationId: string;
 163 |     storeId: string;
 164 |     phone: string;
 165 |     phoneHash: string;
 166 |     providers: string[];
 167 |     force: boolean;
 168 |   }): Promise<{ jobId: string }>;
 169 | }
 170 |
 171 | export interface VerificationRequestQueue {
 172 |   enqueueSend(input: {
 173 |     organizationId: string;
 174 |     storeId: string;
 175 |     assessmentId?: string;
 176 |     phone: string;
 177 |     phoneHash: string;
 178 |     purpose: string;
 179 |     idempotencyKey: string;
 180 |   }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
 181 | }
 182 |
 183 | export interface OtpVerifier {
 184 |   verify(input: {
 185 |     organizationId: string;
 186 |     storeId: string;
 187 |     verificationId: string;
 188 |     otp: string;
 189 |   }): Promise<{ verified: true }>;
 190 | }
 191 |
 192 | export interface OperationIdempotencyStore {
 193 |   get(key: string): Promise<unknown>;
 194 |   set(key: string, value: unknown): Promise<void>;
 195 | }
 196 |
 197 | export interface RateLimiter {
 198 |   consume(key: string, limit: number, windowMs: number): Promise<boolean>;
 199 | }
 200 |
 201 | export interface ApiDependencies {
 202 |   apiKeys: ApiKeyResolver;
 203 |   usage: UsageLedger;
 204 |   features: AssessmentFeatureProvider;
 205 |   assessments: AssessmentRepository;
 206 |   outcomes: OutcomeRepository;
 207 |   shadowComparisons?: ShadowComparisonRepository;
 208 |   nativeShadowRollouts?: NativeShadowRolloutRepository;
 209 |   nativeShadowAttempts?: NativeShadowAttemptRepository;
 210 |   refreshQueue: CourierRefreshQueue;
 211 |   idempotency: OperationIdempotencyStore;
 212 |   rateLimiter: RateLimiter;
 213 |   hashPhone(phone: string): string;
 214 |   verificationRequests?: VerificationRequestQueue;
 215 |   otpVerifier?: OtpVerifier;
 216 |   browser?: BrowserApiDependencies;
 217 |   now?: () => Date;
 218 |   monotonicNow?: () => number;
 219 |   idFactory?: (prefix: string) => string;
 220 |   logger?: StructuredLogger;
 221 |   metrics?: MetricRecorder;
 222 | }
 223 |
 224 | type AppEnvironment = {
 225 |   Variables: {
 226 |     identity: ApiKeyIdentity;
 227 |     requestId: string;
 228 |   };
 229 | };
 230 |
 231 | const refreshSchema = z.object({
 232 |   phone: z.string().min(8).max(30),
 233 |   providers: z.array(z.string().min(1).max(50)).min(1).max(10).default(['steadfast']),
 234 |   force: z.boolean().default(false),
 235 | });
 236 |
 237 | const otpSendSchema = z.object({
 238 |   phone: z.string().min(8).max(30),
 239 |   assessment_id: z.string().max(200).optional(),
 240 |   purpose: z.string().min(1).max(100).default('cod_order_confirmation'),
 241 | });
 242 |
 243 | const otpVerifySchema = z.object({
 244 |   verification_id: z.string().min(1).max(200),
 245 |   otp: z.string().regex(/^\d{6}$/),
 246 | });
 247 |
 248 | export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment> {
 249 |   const app = new Hono<AppEnvironment>();
 250 |   const now = dependencies.now ?? (() => new Date());
 251 |   const monotonicNow = dependencies.monotonicNow ?? (() => Date.now());
 252 |   const idFactory = dependencies.idFactory ?? ((prefix: string) => `${prefix}_${randomUUID()}`);
 253 |   const logger =
 254 |     dependencies.logger ??
 255 |     createStructuredLogger({
 256 |       service: 'ozzyl-guard-api',
 257 |       environment: 'test',
 258 |       write: () => undefined,
 259 |     });
 260 |   const metrics =
 261 |     dependencies.metrics ??
 262 |     createMetricRecorder({
 263 |       service: 'ozzyl-guard-api',
 264 |       environment: 'test',
 265 |       write: () => undefined,
 266 |     });
 267 |
 268 |   app.use('*', async (context, next) => {
 269 |     const requestId = readRequestId(context.req.header('X-Request-ID')) ?? idFactory('req');
 270 |     const startedAt = monotonicNow();
 271 |     let failed = false;
 272 |     context.set('requestId', requestId);
 273 |
 274 |     try {
 275 |       await next();
 276 |     } catch (error) {
 277 |       failed = true;
 278 |       throw error;
 279 |     } finally {
 280 |       const status = failed ? 500 : context.res.status;
 281 |       const durationMs = Math.max(0, monotonicNow() - startedAt);
 282 |       const attributes = {
 283 |         request_id: requestId,
 284 |         method: context.req.method,
 285 |         route: telemetryRoute(context.req.path),
 286 |         status_code: status,
 287 |         status_class: `${Math.floor(status / 100)}xx`,
 288 |         duration_ms: Math.round(durationMs * 1_000) / 1_000,
 289 |       };
 290 |       const metricAttributes = {
 291 |         method: telemetryMethod(context.req.method),
 292 |         route: telemetryRoute(context.req.path),
 293 |         status_class: telemetryStatusClass(status),
 294 |       };
 295 |
 296 |       context.header('X-Request-ID', requestId);
 297 |       metrics.record(API_REQUEST_COUNT, 1, metricAttributes);
 298 |       metrics.record(API_REQUEST_DURATION, durationMs, metricAttributes);
 299 |       if (status >= 500) logger.error('api.request.completed', attributes);
 300 |       else if (status >= 400) logger.warn('api.request.completed', attributes);
 301 |       else logger.info('api.request.completed', attributes);
 302 |     }
 303 |   });
 304 |
 305 |   app.get('/', (context) =>
 306 |     context.json({
 307 |       service: 'Ozzyl Guard',
 308 |       version: 'v1',
 309 |       endpoints: {
 310 |         assessments: 'POST /v1/risk-assessments',
 311 |         outcomes: 'POST /v1/order-outcomes',
 312 |         nativeShadowRollout: 'GET /v1/integration-rollouts/native-shadow',
 313 |         nativeShadowComparisons: 'POST /v1/integration-comparisons/native-shadow',
 314 |         nativeShadowAttempts: 'POST /v1/integration-attempts/native-shadow',
 315 |         refresh: 'POST /v1/courier-observations/refresh',
 316 |         otpSend: 'POST /v1/verifications/otp/send',
 317 |         otpVerify: 'POST /v1/verifications/otp/verify',
 318 |       },
 319 |     }),
 320 |   );
 321 |
 322 |   app.get('/health', (context) =>
 323 |     context.json({ status: 'ok', service: 'ozzyl-guard-api', timestamp: now().toISOString() }),
 324 |   );
 325 |
 326 |   if (dependencies.browser) app.route('/', createBrowserApi(dependencies.browser));
 327 |
 328 |   app.use('/v1/*', async (context, next) => {
 329 |     const requestId = context.get('requestId');
 330 |     const authorization = context.req.header('Authorization');
 331 |     if (!authorization?.startsWith('Bearer ')) {
 332 |       return apiError(requestId, 401, 'UNAUTHORIZED', 'A Bearer API key is required');
 333 |     }
 334 |     const rawApiKey = authorization.slice('Bearer '.length).trim();
 335 |     if (!/^ozg_(test|live)_/.test(rawApiKey)) {
 336 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key format is invalid');
 337 |     }
 338 |     const identity = await dependencies.apiKeys.resolve(rawApiKey);
 339 |     if (!identity) {
 340 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key is invalid or revoked');
 341 |     }
 342 |     const allowed = await dependencies.rateLimiter.consume(`api:${identity.apiKeyId}`, 120, 60_000);
 343 |     if (!allowed) {
 344 |       return apiError(requestId, 429, 'RATE_LIMITED', 'Too many requests');
 345 |     }
 346 |     context.set('identity', identity);
 347 |     await next();
 348 |     context.header('X-Request-ID', requestId);
 349 |   });
 350 |
 351 |   app.post('/v1/risk-assessments', async (context) => {
 352 |     const requestId = context.get('requestId');
 353 |     const identity = context.get('identity');
 354 |     const scopeError = requireScope(identity, 'risk:write', requestId);
 355 |     if (scopeError) return scopeError;
 356 |
 357 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 358 |     if (!idempotencyKey) {
 359 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 360 |     }
 361 |
 362 |     const existing = await dependencies.assessments.findByIdempotency({
 363 |       organizationId: identity.organizationId,
 364 |       storeId: identity.storeId,
 365 |       idempotencyKey,
 366 |     });
 367 |     if (existing) return context.json(existing.response, 200);
 368 |
 369 |     const parsedBody = await parseJson(context.req.raw, riskAssessmentRequestSchema);
 370 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 371 |     const request = parsedBody.value;
 372 |     const phone = normalizeBangladeshPhone(request.phone);
 373 |     if (!isValidBangladeshPhone(phone)) {
 374 |       return apiError(
 375 |         requestId,
 376 |         400,
 377 |         'INVALID_PHONE',
 378 |         'A valid Bangladesh mobile number is required',
 379 |       );
 380 |     }
 381 |
 382 |     try {
 383 |       await dependencies.usage.reserve({
 384 |         organizationId: identity.organizationId,
 385 |         period: billingPeriod(now()),
 386 |         requestId: idempotencyKey,
 387 |         units: 1,
 388 |         plan: identity.plan,
 389 |       });
 390 |     } catch (error) {
 391 |       return apiError(
 392 |         requestId,
 393 |         429,
 394 |         'USAGE_LIMIT_EXCEEDED',
 395 |         error instanceof Error ? error.message : 'Usage limit exceeded',
 396 |       );
 397 |     }
 398 |
 399 |     const startedAt = Date.now();
 400 |     const phoneHash = dependencies.hashPhone(phone);
 401 |     const features = await dependencies.features.load({ identity, phone, phoneHash, request });
 402 |     const order = {
 403 |       total: request.order_total,
 404 |       paymentMethod: request.payment_method,
 405 |       ...(request.items_count === undefined ? {} : { itemsCount: request.items_count }),
 406 |     };
 407 |     const engineInput = {
 408 |       order,
 409 |       courier: features.courier,
 410 |       merchant: features.merchant,
 411 |       velocity: features.velocity,
 412 |       verification: features.verification,
 413 |       network: features.network,
 414 |       ...(features.policy === undefined ? {} : { policy: features.policy }),
 415 |     };
 416 |     const result = assessRisk(engineInput);
 417 |     const response = riskAssessmentResponseSchema.parse({
 418 |       success: true,
 419 |       assessment_id: idFactory('ras'),
 420 |       risk_score: result.score,
 421 |       risk_level: result.riskLevel,
 422 |       decision: result.decision,
 423 |       confidence: result.confidence,
 424 |       signals: result.signals,
 425 |       courier_summary: {
 426 |         freshness: features.courier.freshness,
 427 |         providers: features.courier.providerCount,
 428 |         total: features.courier.totalOrders,
 429 |         delivered: features.courier.deliveredOrders,
 430 |         returned: features.courier.returnedOrders,
 431 |         cancelled_before_shipping: features.courier.cancelledBeforeShipping,
 432 |       },
 433 |       recommended_actions: result.recommendedActions,
 434 |       meta: {
 435 |         engine_version: result.engineVersion,
 436 |         policy_version: result.policyVersion,
 437 |         degraded: result.degraded,
 438 |         response_ms: Date.now() - startedAt,
 439 |       },
 440 |     });
 441 |
 442 |     const stored = await dependencies.assessments.save({
 443 |       identity: {
 444 |         apiKeyId: identity.apiKeyId,
 445 |         organizationId: identity.organizationId,
 446 |         storeId: identity.storeId,
 447 |       },
 448 |       idempotencyKey,
 449 |       phoneHash,
 450 |       request,
 451 |       response,
 452 |     });
 453 |     return context.json(
 454 |       stored.response,
 455 |       stored.response.assessment_id === response.assessment_id ? 201 : 200,
 456 |     );
 457 |   });
 458 |
 459 |   app.get('/v1/risk-assessments/:assessmentId', async (context) => {
 460 |     const requestId = context.get('requestId');
 461 |     const identity = context.get('identity');
 462 |     const scopeError = requireScope(identity, 'risk:read', requestId);
 463 |     if (scopeError) return scopeError;
 464 |     const record = await dependencies.assessments.findById({
 465 |       organizationId: identity.organizationId,
 466 |       storeId: identity.storeId,
 467 |       assessmentId: context.req.param('assessmentId'),
 468 |     });
 469 |     if (!record) return apiError(requestId, 404, 'ASSESSMENT_NOT_FOUND', 'Assessment not found');
 470 |     return context.json(record.response);
 471 |   });
 472 |
 473 |   app.post('/v1/order-outcomes', async (context) => {
 474 |     const requestId = context.get('requestId');
 475 |     const identity = context.get('identity');
 476 |     const scopeError = requireScope(identity, 'outcomes:write', requestId);
 477 |     if (scopeError) return scopeError;
 478 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 479 |     if (!idempotencyKey) {
 480 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 481 |     }
 482 |     const parsedBody = await parseJson(context.req.raw, orderOutcomeSchema);
 483 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 484 |     if (parsedBody.value.assessment_id) {
 485 |       const assessment = await dependencies.assessments.findById({
 486 |         organizationId: identity.organizationId,
 487 |         storeId: identity.storeId,
 488 |         assessmentId: parsedBody.value.assessment_id,
 489 |       });
 490 |       if (!assessment) {
 491 |         return apiError(
 492 |           requestId,
 493 |           400,
 494 |           'ASSESSMENT_NOT_FOUND',
 495 |           'Assessment not found for this store',
 496 |         );
 497 |       }
 498 |     }
 499 |     const saved = await dependencies.outcomes.save({
 500 |       organizationId: identity.organizationId,
 501 |       storeId: identity.storeId,
 502 |       idempotencyKey,
 503 |       outcome: parsedBody.value,
 504 |     });
 505 |     return context.json(
 506 |       { success: true as const, outcome_id: saved.outcomeId, replay: saved.replay },
 507 |       saved.replay ? 200 : 201,
 508 |     );
 509 |   });
 510 |
 511 |   app.get('/v1/integration-rollouts/native-shadow', async (context) => {
 512 |     const requestId = context.get('requestId');
 513 |     const identity = context.get('identity');
 514 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 515 |     if (scopeError) return scopeError;
 516 |     if (!dependencies.nativeShadowRollouts) {
 517 |       return apiError(
 518 |         requestId,
 519 |         503,
 520 |         'NATIVE_SHADOW_ROLLOUT_UNAVAILABLE',
 521 |         'Native shadow rollout configuration is not available',
 522 |       );
 523 |     }
 524 |     const rollout = await dependencies.nativeShadowRollouts.load({
 525 |       organizationId: identity.organizationId,
 526 |       storeId: identity.storeId,
 527 |     });
 528 |     if (!rollout) {
 529 |       return apiError(requestId, 400, 'TENANT_SCOPE_MISMATCH', 'Store scope is not active');
 530 |     }
 531 |     return context.json(
 532 |       nativeShadowRolloutResponseSchema.parse({
 533 |         success: true,
 534 |         organization_id: rollout.organizationId,
 535 |         store_id: rollout.storeId,
 536 |         integration: rollout.integration,
 537 |         mode: rollout.mode,
 538 |         rollout_version: rollout.rolloutVersion,
 539 |         sample_rate_bps: rollout.sampleRateBps,
 540 |         sampling_key: rollout.samplingKey,
 541 |       }),
 542 |     );
 543 |   });
 544 |
 545 |   app.post('/v1/integration-comparisons/native-shadow', async (context) => {
 546 |     const requestId = context.get('requestId');
 547 |     const identity = context.get('identity');
 548 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 549 |     if (scopeError) return scopeError;
 550 |     if (!dependencies.shadowComparisons) {
 551 |       return apiError(
 552 |         requestId,
 553 |         503,
 554 |         'SHADOW_COMPARISON_UNAVAILABLE',
 555 |         'Native shadow comparison persistence is not configured',
 556 |       );
 557 |     }
 558 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 559 |     if (!idempotencyKey) {
 560 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 561 |     }
 562 |     const parsedBody = await parseJson(context.req.raw, nativeShadowComparisonInputSchema);
 563 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 564 |     const assessment = await dependencies.assessments.findById({
 565 |       organizationId: identity.organizationId,
 566 |       storeId: identity.storeId,
 567 |       assessmentId: parsedBody.value.assessment_id,
 568 |     });
 569 |     if (!assessment) {
 570 |       return apiError(
 571 |         requestId,
 572 |         400,
 573 |         'ASSESSMENT_NOT_FOUND',
 574 |         'Assessment not found for this store',
 575 |       );
 576 |     }
 577 |     if (assessment.request.external_order_id !== parsedBody.value.external_order_id) {
 578 |       return apiError(
 579 |         requestId,
 580 |         400,
 581 |         'ASSESSMENT_ORDER_MISMATCH',
 582 |         'Assessment does not belong to the supplied external order',
 583 |       );
 584 |     }
 585 |     try {
 586 |       const saved = await dependencies.shadowComparisons.save({
 587 |         organizationId: identity.organizationId,
 588 |         storeId: identity.storeId,
 589 |         apiKeyId: identity.apiKeyId,
 590 |         idempotencyKey,
 591 |         comparison: parsedBody.value,
 592 |         guardAssessment: assessment.response,
 593 |       });
 594 |       const response = nativeShadowComparisonResponseSchema.parse({
 595 |         success: true,
 596 |         comparison_id: saved.comparisonId,
 597 |         replay: saved.replay,
 598 |       });
 599 |       return context.json(response, saved.replay ? 200 : 201);
 600 |     } catch (error) {
 601 |       const code =
 602 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 603 |           ? error.code
 604 |           : 'SHADOW_COMPARISON_UNAVAILABLE';
 605 |       const status =
 606 |         code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT'
 607 |           ? 409
 608 |           : code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
 609 |               code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
 610 |               code === 'TENANT_SCOPE_MISMATCH'
 611 |             ? 400
 612 |             : 503;
 613 |       return apiError(
 614 |         requestId,
 615 |         status,
 616 |         code,
 617 |         status === 503
 618 |           ? 'Native shadow comparison could not be persisted'
 619 |           : 'Native shadow comparison was rejected',
 620 |       );
 621 |     }
 622 |   });
 623 |
 624 |   app.post('/v1/integration-attempts/native-shadow', async (context) => {
 625 |     const requestId = context.get('requestId');
 626 |     const identity = context.get('identity');
 627 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 628 |     if (scopeError) return scopeError;
 629 |     if (!dependencies.nativeShadowAttempts) {
 630 |       return apiError(
 631 |         requestId,
 632 |         503,
 633 |         'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE',
 634 |         'Native shadow attempt persistence is not configured',
 635 |       );
 636 |     }
 637 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 638 |     if (!idempotencyKey) {
 639 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 640 |     }
 641 |     const parsedBody = await parseJson(context.req.raw, nativeShadowAttemptInputSchema);
 642 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 643 |     try {
 644 |       const saved = await dependencies.nativeShadowAttempts.save({
 645 |         organizationId: identity.organizationId,
 646 |         storeId: identity.storeId,
 647 |         apiKeyId: identity.apiKeyId,
 648 |         idempotencyKey,
 649 |         attempt: parsedBody.value,
 650 |       });
 651 |       return context.json(
 652 |         nativeShadowAttemptResponseSchema.parse({
 653 |           success: true,
 654 |           attempt_id: saved.attemptId,
 655 |           replay: saved.replay,
 656 |         }),
 657 |         saved.replay ? 200 : 201,
 658 |       );
 659 |     } catch (error) {
 660 |       const code =
 661 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 662 |           ? error.code
 663 |           : 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE';
 664 |       const status =
 665 |         code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT'
 666 |           ? 409
 667 |           : code === 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE'
 668 |             ? 503
 669 |             : 400;
 670 |       return apiError(
 671 |         requestId,
 672 |         status,
 673 |         code,
 674 |         status === 503
 675 |           ? 'Native shadow attempt could not be persisted'
 676 |           : 'Native shadow attempt was rejected',
 677 |       );
 678 |     }
 679 |   });
 680 |
 681 |   app.post('/v1/courier-observations/refresh', async (context) => {
 682 |     const requestId = context.get('requestId');
 683 |     const identity = context.get('identity');
 684 |     const scopeError = requireScope(identity, 'courier:refresh', requestId);
 685 |     if (scopeError) return scopeError;
 686 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 687 |     if (!idempotencyKey) {
 688 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 689 |     }
 690 |     const operationKey = operationIdempotencyKey(identity, 'courier-refresh', idempotencyKey);
 691 |     const existing = await dependencies.idempotency.get(operationKey);
 692 |     if (existing) return context.json(existing, 200);
 693 |     const parsedBody = await parseJson(context.req.raw, refreshSchema);
 694 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 695 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 696 |     if (!isValidBangladeshPhone(phone)) {
 697 |       return apiError(
 698 |         requestId,
 699 |         400,
 700 |         'INVALID_PHONE',
 701 |         'A valid Bangladesh mobile number is required',
 702 |       );
 703 |     }
 704 |     let queued: { jobId: string };
 705 |     try {
 706 |       queued = await dependencies.refreshQueue.enqueue({
 707 |         organizationId: identity.organizationId,
 708 |         storeId: identity.storeId,
 709 |         phone,
 710 |         phoneHash: dependencies.hashPhone(phone),
 711 |         providers: parsedBody.value.providers,
 712 |         force: parsedBody.value.force,
 713 |       });
 714 |     } catch (error) {
 715 |       const code =
 716 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 717 |           ? error.code
 718 |           : 'COURIER_REFRESH_UNAVAILABLE';
 719 |       return apiError(
 720 |         requestId,
 721 |         code === 'COURIER_CONNECTION_REQUIRED' ? 409 : 503,
 722 |         code,
 723 |         error instanceof Error ? error.message : 'Courier refresh could not be queued',
 724 |       );
 725 |     }
 726 |     const response = { success: true as const, job_id: queued.jobId, status: 'queued' as const };
 727 |     await dependencies.idempotency.set(operationKey, response);
 728 |     return context.json(response, 202);
 729 |   });
 730 |
 731 |   app.post('/v1/verifications/otp/send', async (context) => {
 732 |     const requestId = context.get('requestId');
 733 |     const identity = context.get('identity');
 734 |     const scopeError = requireScope(identity, 'verification:write', requestId);
 735 |     if (scopeError) return scopeError;
 736 |     if (!dependencies.verificationRequests) {
 737 |       return apiError(
 738 |         requestId,
 739 |         503,
 740 |         'VERIFICATION_UNAVAILABLE',
 741 |         'OTP verification is not configured',
 742 |       );
 743 |     }
 744 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 745 |     if (!idempotencyKey) {
 746 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 747 |     }
 748 |     const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
 749 |     const existing = await dependencies.idempotency.get(operationKey);
 750 |     if (existing) return context.json(existing, 200);
 751 |     const parsedBody = await parseJson(context.req.raw, otpSendSchema);
 752 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 753 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 754 |     if (!isValidBangladeshPhone(phone)) {
 755 |       return apiError(
 756 |         requestId,
 757 |         400,
 758 |         'INVALID_PHONE',
 759 |         'A valid Bangladesh mobile number is required',
 760 |       );
 761 |     }
 762 |     try {
 763 |       const queued = await dependencies.verificationRequests.enqueueSend({
 764 |         organizationId: identity.organizationId,
 765 |         storeId: identity.storeId,
 766 |         ...(parsedBody.value.assessment_id === undefined
 767 |           ? {}
 768 |           : { assessmentId: parsedBody.value.assessment_id }),
 769 |         phone,
 770 |         phoneHash: dependencies.hashPhone(phone),
 771 |         purpose: parsedBody.value.purpose,
 772 |         idempotencyKey,
 773 |       });
 774 |       const response = {
 775 |         success: true as const,
 776 |         verification_id: queued.verificationId,
 777 |         expires_at: queued.expiresAt,
 778 |         status: 'queued' as const,
 779 |       };
 780 |       await dependencies.idempotency.set(operationKey, response);
 781 |       return context.json(response, queued.replay ? 200 : 202);
 782 |     } catch (error) {
 783 |       return verificationApiError(requestId, error);
 784 |     }
 785 |   });
 786 |
 787 |   app.post('/v1/verifications/otp/verify', async (context) => {
 788 |     const requestId = context.get('requestId');
 789 |     const identity = context.get('identity');
 790 |     const scopeError = requireScope(identity, 'verification:write', requestId);
 791 |     if (scopeError) return scopeError;
 792 |     if (!dependencies.otpVerifier) {
 793 |       return apiError(
 794 |         requestId,
 795 |         503,
 796 |         'VERIFICATION_UNAVAILABLE',
 797 |         'OTP verification is not configured',
 798 |       );
 799 |     }
 800 |     const parsedBody = await parseJson(context.req.raw, otpVerifySchema);
 801 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 802 |     try {
 803 |       await dependencies.otpVerifier.verify({
 804 |         organizationId: identity.organizationId,
 805 |         storeId: identity.storeId,
 806 |         verificationId: parsedBody.value.verification_id,
 807 |         otp: parsedBody.value.otp,
 808 |       });
 809 |       return context.json({ success: true as const, verified: true as const });
 810 |     } catch (error) {
 811 |       return verificationApiError(requestId, error);
 812 |     }
 813 |   });
 814 |
 815 |   app.notFound((context) => {
 816 |     const requestId = context.get('requestId') || idFactory('req');
 817 |     return apiError(requestId, 404, 'NOT_FOUND', 'Route not found');
 818 |   });
 819 |
 820 |   app.onError((error, context) => {
 821 |     const requestId = context.get('requestId') || idFactory('req');
 822 |     logger.error('api.request.unhandled_error', {
 823 |       request_id: requestId,
 824 |       method: context.req.method,
 825 |       route: telemetryRoute(context.req.path),
 826 |       code: 'UNHANDLED_ERROR',
 827 |       error,
 828 |     });
 829 |     return apiError(
 830 |       requestId,
 831 |       500,
 832 |       'INTERNAL_ERROR',
 833 |       error instanceof Error ? 'The request could not be completed' : 'Internal error',
 834 |     );
 835 |   });
 836 |
 837 |   return app;
 838 | }
 839 |
 840 | const STATIC_TELEMETRY_ROUTES = new Set([
 841 |   '/',
 842 |   '/health',
 843 |   '/auth/login',
 844 |   '/auth/session',
 845 |   '/auth/logout',
 846 |   '/dashboard/v1/overview',
 847 |   '/dashboard/v1/native-shadow-rollout',
 848 |   '/dashboard/v1/dead-letters',
 849 |   '/dashboard/v1/dead-letter-replays',
 850 |   '/admin/v1/overview',
 851 |   '/v1/risk-assessments',
 852 |   '/v1/order-outcomes',
 853 |   '/v1/integration-rollouts/native-shadow',
 854 |   '/v1/integration-comparisons/native-shadow',
 855 |   '/v1/integration-attempts/native-shadow',
 856 |   '/v1/courier-observations/refresh',
 857 |   '/v1/verifications/otp/send',
 858 |   '/v1/verifications/otp/verify',
 859 | ]);
 860 |
 861 | const API_METRIC_ROUTES = [
 862 |   ...STATIC_TELEMETRY_ROUTES,
 863 |   '/v1/risk-assessments/:assessment_id',
 864 |   'unmatched',
 865 | ];
 866 | const API_METRIC_ATTRIBUTES = {
 867 |   method: { values: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD', 'OTHER'] },
 868 |   route: { values: API_METRIC_ROUTES },
 869 |   status_class: { values: ['1xx', '2xx', '3xx', '4xx', '5xx', 'other'] },
 870 | } as const;
 871 | const API_REQUEST_COUNT = defineMetric({
 872 |   name: 'ozzyl.api.requests',
 873 |   kind: 'counter',
 874 |   unit: '{request}',
 875 |   attributes: API_METRIC_ATTRIBUTES,
 876 | });
 877 | const API_REQUEST_DURATION = defineMetric({
 878 |   name: 'ozzyl.api.request.duration',
 879 |   kind: 'histogram',
 880 |   unit: 'ms',
 881 |   attributes: API_METRIC_ATTRIBUTES,
 882 | });
 883 |
 884 | function telemetryRoute(path: string): string {
 885 |   if (STATIC_TELEMETRY_ROUTES.has(path)) return path;
 886 |   if (/^\/v1\/risk-assessments\/[^/]+$/.test(path)) {
 887 |     return '/v1/risk-assessments/:assessment_id';
 888 |   }
 889 |   return 'unmatched';
 890 | }
 891 |
 892 | function telemetryMethod(method: string): string {
 893 |   const normalized = method.toUpperCase();
 894 |   return ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'].includes(normalized)
 895 |     ? normalized
 896 |     : 'OTHER';
 897 | }
 898 |
 899 | function telemetryStatusClass(status: number): string {
 900 |   const statusClass = Math.floor(status / 100);
 901 |   return statusClass >= 1 && statusClass <= 5 ? `${statusClass}xx` : 'other';
 902 | }
 903 |
 904 | function readRequestId(value: string | undefined): string | null {
 905 |   const requestId = value?.trim();
 906 |   if (!requestId || requestId.length > 100) return null;
 907 |   if (/^req_[A-Za-z0-9-]{1,80}$/.test(requestId)) return requestId;
 908 |   if (/^[a-f0-9]{16,32}$/i.test(requestId)) return requestId;
 909 |   if (
 910 |     /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(requestId)
 911 |   ) {
 912 |     return requestId;
 913 |   }
 914 |   return null;
 915 | }
 916 |
 917 | export class MemoryAssessmentRepository implements AssessmentRepository {
 918 |   private readonly byId = new Map<string, StoredAssessment>();
 919 |   private readonly byIdempotency = new Map<string, StoredAssessment>();
 920 |
 921 |   async findByIdempotency(input: {
 922 |     organizationId: string;
 923 |     storeId: string;
 924 |     idempotencyKey: string;
 925 |   }): Promise<StoredAssessment | null> {
 926 |     return (
 927 |       this.byIdempotency.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`) ??
 928 |       null
 929 |     );
 930 |   }
 931 |
 932 |   async findById(input: {
 933 |     organizationId: string;
 934 |     storeId: string;
 935 |     assessmentId: string;
 936 |   }): Promise<StoredAssessment | null> {
 937 |     const record = this.byId.get(input.assessmentId);
 938 |     if (
 939 |       !record ||
 940 |       record.identity.organizationId !== input.organizationId ||
 941 |       record.identity.storeId !== input.storeId
 942 |     ) {
 943 |       return null;
 944 |     }
 945 |     return record;
 946 |   }
 947 |
 948 |   async save(record: StoredAssessment): Promise<StoredAssessment> {
 949 |     const key = `${record.identity.organizationId}:${record.identity.storeId}:${record.idempotencyKey}`;
 950 |     const existing = this.byIdempotency.get(key);
 951 |     if (existing) return existing;
 952 |     this.byId.set(record.response.assessment_id, record);
 953 |     this.byIdempotency.set(key, record);
 954 |     return record;
 955 |   }
 956 | }
 957 |
 958 | export class MemoryOutcomeRepository implements OutcomeRepository {
 959 |   private readonly outcomes = new Map<string, string>();
 960 |
 961 |   async save(input: {
 962 |     organizationId: string;
 963 |     storeId: string;
 964 |     idempotencyKey: string;
 965 |     outcome: OrderOutcomeInput;
 966 |   }): Promise<{ outcomeId: string; replay: boolean }> {
 967 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
 968 |     const existing = this.outcomes.get(key);
 969 |     if (existing) return { outcomeId: existing, replay: true };
 970 |     const outcomeId = `out_${randomUUID()}`;
 971 |     this.outcomes.set(key, outcomeId);
 972 |     return { outcomeId, replay: false };
 973 |   }
 974 | }
 975 |
 976 | export class MemoryShadowComparisonRepository implements ShadowComparisonRepository {
 977 |   private readonly records = new Map<
 978 |     string,
 979 |     {
 980 |       comparisonId: string;
 981 |       comparison: NativeShadowComparisonInput;
 982 |       guardAssessment: RiskAssessmentResponse;
 983 |     }
 984 |   >();
 985 |
 986 |   async save(input: {
 987 |     organizationId: string;
 988 |     storeId: string;
 989 |     apiKeyId: string;
 990 |     idempotencyKey: string;
 991 |     comparison: NativeShadowComparisonInput;
 992 |     guardAssessment: RiskAssessmentResponse;
 993 |   }): Promise<{ comparisonId: string; replay: boolean }> {
 994 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
 995 |     const existing = this.records.get(key);
 996 |     if (existing) {
 997 |       if (
 998 |         JSON.stringify(existing.comparison) !== JSON.stringify(input.comparison) ||
 999 |         existing.guardAssessment.assessment_id !== input.guardAssessment.assessment_id
1000 |       ) {
1001 |         const error = new Error('SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') as Error & {
1002 |           code: string;
1003 |         };
1004 |         error.code = 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT';
1005 |         throw error;
1006 |       }
1007 |       return { comparisonId: existing.comparisonId, replay: true };
1008 |     }
1009 |     const comparisonId = `cmp_${randomUUID()}`;
1010 |     this.records.set(key, {
1011 |       comparisonId,
1012 |       comparison: input.comparison,
1013 |       guardAssessment: input.guardAssessment,
1014 |     });
1015 |     return { comparisonId, replay: false };
1016 |   }
1017 |
1018 |   findByIdempotency(input: { organizationId: string; storeId: string; idempotencyKey: string }):
1019 |     | {
1020 |         comparisonId: string;
1021 |         comparison: NativeShadowComparisonInput;
1022 |         guardAssessment: RiskAssessmentResponse;
1023 |       }
1024 |     | undefined {
1025 |     return this.records.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`);
1026 |   }
1027 | }
1028 |
1029 | export class MemoryOperationIdempotencyStore implements OperationIdempotencyStore {
1030 |   private readonly values = new Map<string, unknown>();
1031 |   async get(key: string): Promise<unknown> {
1032 |     return this.values.get(key) ?? null;
1033 |   }
1034 |   async set(key: string, value: unknown): Promise<void> {
1035 |     this.values.set(key, value);
1036 |   }
1037 | }
1038 |
1039 | export class MemoryRateLimiter implements RateLimiter {
1040 |   private readonly windows = new Map<string, { count: number; expiresAt: number }>();
1041 |   async consume(key: string, limit: number, windowMs: number): Promise<boolean> {
1042 |     const currentTime = Date.now();
1043 |     const current = this.windows.get(key);
1044 |     if (!current || current.expiresAt <= currentTime) {
1045 |       this.windows.set(key, { count: 1, expiresAt: currentTime + windowMs });
1046 |       return true;
1047 |     }
1048 |     if (current.count >= limit) return false;
1049 |     current.count += 1;
1050 |     return true;
1051 |   }
1052 | }
1053 |
1054 | export class MemoryRefreshQueue implements CourierRefreshQueue {
1055 |   async enqueue(): Promise<{ jobId: string }> {
1056 |     return { jobId: `cjob_${randomUUID()}` };
1057 |   }
1058 | }
1059 |
1060 | export class MissingFeatureProvider implements AssessmentFeatureProvider {
1061 |   async load(): Promise<AssessmentFeatureSet> {
1062 |     return {
1063 |       courier: {
1064 |         totalOrders: 0,
1065 |         deliveredOrders: 0,
1066 |         returnedOrders: 0,
1067 |         cancelledBeforeShipping: 0,
1068 |         providerCount: 0,
1069 |         freshness: 'missing',
1070 |         sourceConfidence: 0,
1071 |       },
1072 |       merchant: {
1073 |         deliveredOrders: 0,
1074 |         returnedOrders: 0,
1075 |         recentCancelledOrders: 0,
1076 |         previousSuccessfulCustomer: false,
1077 |       },
1078 |       velocity: {
1079 |         phoneOrdersLastHour: 0,
1080 |         devicePhoneCountLastDay: 0,
1081 |         ipCustomerCountLastHour: 0,
1082 |       },
1083 |       verification: { otpVerified: false, otpFailures: 0, phoneUnreachable: false },
1084 |       network: {
1085 |         confirmedNegativeOutcomes: 0,
1086 |         independentReporters: 0,
1087 |         confirmedPositiveOutcomes: 0,
1088 |         activeDispute: false,
1089 |       },
1090 |     };
1091 |   }
1092 | }
1093 |
1094 | function requireScope(identity: ApiKeyIdentity, scope: string, requestId: string): Response | null {
1095 |   if (identity.scopes.has('*') || identity.scopes.has(scope)) return null;
1096 |   return apiError(requestId, 403, 'INSUFFICIENT_SCOPE', `API key requires ${scope} scope`);
1097 | }
1098 |
1099 | function apiError(
1100 |   requestId: string,
1101 |   status: number,
1102 |   code: string,
1103 |   message: string,
1104 |   details?: Record<string, unknown>,
1105 | ): Response {
1106 |   return new Response(
1107 |     JSON.stringify({
1108 |       success: false,
1109 |       error: { code, message, ...(details === undefined ? {} : { details }) },
1110 |       request_id: requestId,
1111 |     }),
1112 |     {
1113 |       status,
1114 |       headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
1115 |     },
1116 |   );
1117 | }
1118 |
1119 | function verificationApiError(requestId: string, error: unknown): Response {
1120 |   if (error instanceof VerificationError) {
1121 |     const status =
1122 |       error.code === 'RATE_LIMITED'
1123 |         ? 429
1124 |         : error.code === 'NOT_FOUND'
1125 |           ? 404
1126 |           : error.code === 'DELIVERY_PENDING' || error.code === 'DELIVERY_FAILED'
1127 |             ? 409
1128 |             : 400;
1129 |     return apiError(requestId, status, error.code, error.message);
1130 |   }
1131 |   return apiError(
1132 |     requestId,
1133 |     503,
1134 |     'VERIFICATION_UNAVAILABLE',
1135 |     'Verification could not be completed',
1136 |   );
1137 | }
1138 |
1139 | async function parseJson<TOutput, TInput>(
1140 |   request: Request,
1141 |   schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
1142 | ): Promise<{ success: true; value: TOutput } | { success: false; message: string }> {
1143 |   try {
1144 |     const raw: unknown = await request.json();
1145 |     const parsed = schema.safeParse(raw);
1146 |     if (!parsed.success) {
1147 |       return {
1148 |         success: false,
1149 |         message: parsed.error.issues
1150 |           .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
1151 |           .join('; '),
1152 |       };
1153 |     }
1154 |     return { success: true, value: parsed.data };
1155 |   } catch {
1156 |     return { success: false, message: 'Request body must be valid JSON' };
1157 |   }
1158 | }
1159 |
1160 | function readIdempotencyKey(value: string | undefined): string | null {
1161 |   const normalized = value?.trim();
1162 |   if (!normalized || normalized.length > 200) return null;
1163 |   return normalized;
1164 | }
1165 |
1166 | function operationIdempotencyKey(
1167 |   identity: ApiKeyIdentity,
1168 |   operation: string,
1169 |   idempotencyKey: string,
1170 | ): string {
1171 |   return `${identity.organizationId}:${identity.storeId}:${operation}:${idempotencyKey}`;
1172 | }
1173 |
1174 | function billingPeriod(date: Date): string {
1175 |   return date.toISOString().slice(0, 7);
1176 | }
1177 |
```

### apps/api/src/server.ts

Bytes: 6875
SHA-256: 83f29447652ce1b2dc880101d4bb260d4684af7ce2d1cf1c54f3aadf2fd13f4b
Lines: 1-201 of 201

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { serve } from '@hono/node-server';
  3 | import { Pool } from 'pg';
  4 | import { verifyApiKey } from '@ozzyl/authentication';
  5 | import { PostgresDurableWorkOperations } from '@ozzyl/database';
  6 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  7 | import { createMetricRecorder, createStructuredLogger } from '@ozzyl/observability';
  8 | import { MemoryUsageLedger, type PlanCode } from '@ozzyl/billing';
  9 | import {
 10 |   createApiApp,
 11 |   MemoryAssessmentRepository,
 12 |   MemoryOperationIdempotencyStore,
 13 |   MemoryOutcomeRepository,
 14 |   MemoryRateLimiter,
 15 |   MemoryShadowComparisonRepository,
 16 |   MemoryRefreshQueue,
 17 |   MissingFeatureProvider,
 18 |   type ApiDependencies,
 19 |   type ApiKeyIdentity,
 20 |   type ApiKeyResolver,
 21 | } from './index.js';
 22 | import {
 23 |   PostgresApiKeyResolver,
 24 |   PostgresAssessmentFeatureProvider,
 25 |   PostgresAssessmentRepository,
 26 |   PostgresBrowserAuditRepository,
 27 |   PostgresBrowserAuthService,
 28 |   PostgresCourierRefreshQueue,
 29 |   PostgresMerchantDashboardRepository,
 30 |   PostgresOperationIdempotencyStore,
 31 |   PostgresOutcomeRepository,
 32 |   PostgresPlatformAdminRepository,
 33 |   PostgresUsageLedger,
 34 | } from './postgres.js';
 35 | import { PostgresVerificationService } from './postgres-verification.js';
 36 | import {
 37 |   PostgresNativeShadowAttemptRepository,
 38 |   PostgresNativeShadowRolloutRepository,
 39 | } from './postgres-native-shadow-pilot.js';
 40 | import { PostgresShadowComparisonRepository } from './postgres-shadow-comparisons.js';
 41 |
 42 | const required = (name: string): string => {
 43 |   const value = process.env[name];
 44 |   if (!value) throw new Error(`${name} is required`);
 45 |   return value;
 46 | };
 47 |
 48 | class ConfiguredApiKeyResolver implements ApiKeyResolver {
 49 |   constructor(
 50 |     private readonly configuration: {
 51 |       keyHash: string;
 52 |       pepper: string;
 53 |       identity: ApiKeyIdentity;
 54 |     },
 55 |   ) {}
 56 |
 57 |   async resolve(rawApiKey: string): Promise<ApiKeyIdentity | null> {
 58 |     return verifyApiKey(rawApiKey, this.configuration.keyHash, this.configuration.pepper)
 59 |       ? this.configuration.identity
 60 |       : null;
 61 |   }
 62 | }
 63 |
 64 | function configuredPlan(): PlanCode {
 65 |   const plan = process.env.OZZYL_PLAN ?? 'free';
 66 |   if (!['free', 'starter', 'pro', 'enterprise'].includes(plan)) {
 67 |     throw new Error('OZZYL_PLAN is invalid');
 68 |   }
 69 |   return plan as PlanCode;
 70 | }
 71 |
 72 | function configuredEnvironment(): 'test' | 'live' {
 73 |   const environment = required('OZZYL_API_KEY_ENVIRONMENT');
 74 |   if (environment !== 'test' && environment !== 'live') {
 75 |     throw new Error('OZZYL_API_KEY_ENVIRONMENT must be test or live');
 76 |   }
 77 |   return environment;
 78 | }
 79 |
 80 | const phoneHmacKey = required('PHONE_HMAC_KEY');
 81 | const apiKeyPepper = required('API_KEY_PEPPER');
 82 | const databaseUrl = process.env.DATABASE_URL;
 83 | const productionMode = process.env.NODE_ENV === 'production';
 84 | const log = createStructuredLogger({
 85 |   service: 'ozzyl-guard-api',
 86 |   environment: process.env.NODE_ENV ?? 'development',
 87 | });
 88 | const metrics = createMetricRecorder({
 89 |   service: 'ozzyl-guard-api',
 90 |   environment: process.env.NODE_ENV ?? 'development',
 91 | });
 92 |
 93 | if (productionMode && !databaseUrl) {
 94 |   throw new Error('DATABASE_URL is required in production');
 95 | }
 96 |
 97 | let pool: Pool | undefined;
 98 | let dependencies: ApiDependencies;
 99 |
100 | if (databaseUrl) {
101 |   const sessionPepper = required('SESSION_PEPPER');
102 |   const sessionCsrfSecret = required('SESSION_CSRF_SECRET');
103 |   const rateLimiter = new MemoryRateLimiter();
104 |   pool = new Pool({
105 |     connectionString: databaseUrl,
106 |     max: Number(process.env.DATABASE_POOL_SIZE ?? 20),
107 |     idleTimeoutMillis: 30_000,
108 |     connectionTimeoutMillis: 5_000,
109 |     ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
110 |   });
111 |   const verification = new PostgresVerificationService(pool, {
112 |     otpSecret: required('OTP_HASH_SECRET'),
113 |     cipher: new AesGcmEnvelopeCipher(
114 |       Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
115 |       required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
116 |     ),
117 |   });
118 |   const nativeShadowRollouts = new PostgresNativeShadowRolloutRepository(pool);
119 |   const durableWorkOperations = new PostgresDurableWorkOperations(pool);
120 |   dependencies = {
121 |     apiKeys: new PostgresApiKeyResolver(pool, apiKeyPepper),
122 |     usage: new PostgresUsageLedger(pool),
123 |     features: new PostgresAssessmentFeatureProvider(pool),
124 |     assessments: new PostgresAssessmentRepository(pool),
125 |     outcomes: new PostgresOutcomeRepository(pool),
126 |     shadowComparisons: new PostgresShadowComparisonRepository(pool),
127 |     nativeShadowRollouts,
128 |     nativeShadowAttempts: new PostgresNativeShadowAttemptRepository(pool),
129 |     refreshQueue: new PostgresCourierRefreshQueue(pool),
130 |     idempotency: new PostgresOperationIdempotencyStore(pool),
131 |     rateLimiter,
132 |     hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
133 |     verificationRequests: verification,
134 |     otpVerifier: verification,
135 |     browser: {
136 |       auth: new PostgresBrowserAuthService(pool, sessionPepper),
137 |       dashboard: new PostgresMerchantDashboardRepository(pool),
138 |       admin: new PostgresPlatformAdminRepository(pool),
139 |       nativeShadowRollouts,
140 |       durableWorkOperations,
141 |       audit: new PostgresBrowserAuditRepository(pool),
142 |       rateLimiter,
143 |       csrfSecret: sessionCsrfSecret,
144 |       secureCookies: productionMode,
145 |     },
146 |     logger: log,
147 |     metrics,
148 |   };
149 | } else {
150 |   dependencies = {
151 |     apiKeys: new ConfiguredApiKeyResolver({
152 |       keyHash: required('OZZYL_API_KEY_HASH'),
153 |       pepper: apiKeyPepper,
154 |       identity: {
155 |         apiKeyId: process.env.OZZYL_API_KEY_ID ?? 'key_local',
156 |         organizationId: required('OZZYL_ORGANIZATION_ID'),
157 |         storeId: required('OZZYL_STORE_ID'),
158 |         environment: configuredEnvironment(),
159 |         plan: configuredPlan(),
160 |         scopes: new Set([
161 |           'risk:write',
162 |           'risk:read',
163 |           'outcomes:write',
164 |           'comparisons:write',
165 |           'courier:refresh',
166 |           'verification:write',
167 |         ]),
168 |       },
169 |     }),
170 |     usage: new MemoryUsageLedger(),
171 |     features: new MissingFeatureProvider(),
172 |     assessments: new MemoryAssessmentRepository(),
173 |     outcomes: new MemoryOutcomeRepository(),
174 |     shadowComparisons: new MemoryShadowComparisonRepository(),
175 |     refreshQueue: new MemoryRefreshQueue(),
176 |     idempotency: new MemoryOperationIdempotencyStore(),
177 |     rateLimiter: new MemoryRateLimiter(),
178 |     hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
179 |     logger: log,
180 |     metrics,
181 |   };
182 | }
183 |
184 | const app = createApiApp(dependencies);
185 | const port = Number(process.env.API_PORT ?? 3000);
186 | const server = serve({ fetch: app.fetch, port });
187 | log.info('api.started', {
188 |   port,
189 |   persistence: databaseUrl ? 'postgresql' : 'memory',
190 | });
191 |
192 | const shutdown = async (signal: string): Promise<void> => {
193 |   log.info('api.stopping', { signal });
194 |   server.close();
195 |   await pool?.end();
196 |   process.exit(0);
197 | };
198 |
199 | process.once('SIGTERM', () => void shutdown('SIGTERM'));
200 | process.once('SIGINT', () => void shutdown('SIGINT'));
201 |
```

### docs/operations/operations-observability.md

Bytes: 17515
SHA-256: 57aec2e131680621ca9950f642b3cb7896ce507c081d08b03398fc8e657c0fec
Lines: 1-305 of 305

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
 21 | - `ozzyl.worker.claim.failures` — counter by finite durable-worker type only.
 22 |
 23 | Request IDs, organization/store/account/job/event/assessment identifiers, phone numbers or hashes, OTP values, credentials, URLs, payloads, provider responses, and arbitrary error codes are not metric attributes. Provider names are also omitted from the current generic worker metrics. The default recorder writes JSON lines to the process telemetry stream; a reviewed OpenTelemetry exporter/collector adapter may replace that sink without changing call sites.
 24 |
 25 | ### API
 26 |
 27 | - Request rate
 28 | - Error rate
 29 | - p50/p95/p99 latency
 30 | - Rate-limit events
 31 | - Quota/entitlement failures
 32 | - Idempotency replays/conflicts
 33 | - Degraded assessments
 34 | - Authentication/session failures without sensitive values
 35 | - Transactional outbox rows created by event type
 36 | - Outbox enqueue failures and transaction rollbacks
 37 |
 38 | ### PostgreSQL
 39 |
 40 | - Availability and failover state
 41 | - Connection usage and pool wait
 42 | - Lock wait and deadlock rate
 43 | - Slow query rate
 44 | - Migration success/failure
 45 | - Backup and restore status, duration, age, and last successful drill
 46 | - Migration manifest/history checksum mismatch count
 47 | - Durable-job claim and lease-recovery rate
 48 | - `SKIP LOCKED` claim throughput
 49 | - Stale-lease recovery and exhausted-work terminalization
 50 |
 51 | ### Courier
 52 |
 53 | - Session refresh success rate
 54 | - Session age
 55 | - Provider response latency
 56 | - Provider error rate by structured code
 57 | - Observation freshness
 58 | - Queue lag
 59 | - Reconnect-required accounts
 60 | - Selector/login-state failures
 61 |
 62 | ### Verification
 63 |
 64 | - OTP queued/sent/delivered/failed
 65 | - Verification success rate
 66 | - Provider latency and timeout rate
 67 | - Claim throughput by verification-worker replica
 68 | - Fresh/recovered/lost lease counts
 69 | - Retry rate and attempts distribution
 70 | - Payload decryption/validation and scope-mismatch failures
 71 | - Resend rate and abuse blocks
 72 | - Queue lag, oldest due job, exhausted `LEASE_EXPIRED`, and dead-letter count
 73 |
 74 | The durable runner is implemented, but production delivery remains disabled until a reviewed provider adapter/account is selected, bundled, configured, and validated in staging.
 75 |
 76 | ### Webhooks and events
 77 |
 78 | - Outbox backlog and oldest-event age
 79 | - Due versus future retry count
 80 | - Claim throughput by event-worker replica
 81 | - Fresh, recovered, and lost lease counts
 82 | - Delivery success/failure
 83 | - Retry rate and attempts distribution
 84 | - Destination response class
 85 | - DNS resolution failure count
 86 | - Unsafe-destination rejection count
 87 | - Endpoint inactive/decryption/scope-mismatch failures
 88 | - Exhausted `LEASE_EXPIRED` count
 89 | - End-to-end duration from `occurred_at` to `completed_at`
 90 | - Delivery latency by event type
 91 |
 92 | ### Risk quality
 93 |
 94 | - Decision distribution
 95 | - Outcome by score band
 96 | - False-positive rate
 97 | - False-negative rate
 98 | - Confidence distribution
 99 | - Unknown/degraded distribution
100 | - Savings estimate accuracy
101 |
102 | ### Native shadow pilot
103 |
104 | - Explicitly opted-in stores
105 | - Sampled orders
106 | - Successful comparisons
107 | - Guard assessment failures and timeouts
108 | - Comparison and sampled-attempt persistence failures
109 | - Decision disagreement rate
110 | - Bounded score-delta minimum, maximum, average, and lower/equal/higher counts
111 | - Rollout reads, updates, idempotent replays, conflicts, and tenant-scope rejections
112 |
113 | Merchant views must query only the authorized organization/store and a bounded
114 | window. Platform administration may aggregate across active stores but must not
115 | expose customer identifiers, external order IDs, raw request payloads, API keys,
116 | provider credentials, cookies, OTPs, or signing secrets. Reporting failure must
117 | not affect source checkout or the effective legacy decision.
118 |
119 | ## Logging
120 |
121 | `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The API server and the courier-session, courier-sync, event, and verification runners use it for lifecycle and error records. Every record receives a timestamp, level, service, environment, and event name before export.
122 |
123 | The helper recursively redacts sensitive field names before serialization. Passwords, secrets, tokens, API keys, cookies, OTPs, raw phone values, credentials, provider responses, DNS answers, payloads, request/response bodies, and URLs are replaced rather than emitted. `phone_hash` is permitted as a non-reversible correlation reference. Error values expose only a bounded name and structured code; messages and stacks are omitted. Circular objects, binary values, big integers, excessive depth, oversized strings, and large collections are converted to bounded safe representations.
124 |
125 | Serialization or log/metric-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. API request logs use only accepted/generated opaque request IDs, an allowlisted route or bounded route template, HTTP method, status/status class, and duration. API metrics use normalized method, the same canonical route/template, and status class without the request ID. Raw URLs, query strings, dynamic assessment identifiers, tenant identifiers, and arbitrary error codes are not metric attributes. Repository/provider metrics, queue/backlog gauges, distributed traces, OpenTelemetry exporters/collector topology, dashboards, alerts, managed retention, and the managed backend remain production follow-up work.
126 |
127 | Use structured logs with:
128 |
129 | - request id
130 | - organization/store id or safe internal reference
131 | - assessment/job/event/delivery id
132 | - provider or destination category where safe
133 | - worker id
134 | - error code
135 | - attempt number
136 | - duration
137 | - engine/policy version when relevant
138 | - deployment environment and service name
139 |
140 | Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, webhook signing secrets, destination URL credentials, and unrestricted request/event bodies are prohibited.
141 |
142 | The API emits startup/shutdown, request-completion, and unhandled-error records, and all four private workers emit startup and structured error records through the shared redaction boundary. The API now records request count and duration; courier-session, courier-sync, event, and verification operations record count and duration; durable courier/event/verification claim failures record a bounded counter. Production instrumentation must still add repository/provider measurements, queue/backlog gauges, and correlation spans without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, identifiers, provider credentials, URLs, arbitrary error codes, or DNS answer details that disclose internal topology.
143 |
144 | Recommended event-worker error codes include:
145 |
146 | - `UNSAFE_WEBHOOK_DESTINATION`
147 | - `WEBHOOK_DNS_RESOLUTION_FAILED`
148 | - `WEBHOOK_SECRET_DECRYPTION_FAILED`
149 | - `INVALID_EVENT_PAYLOAD`
150 | - `WEBHOOK_SCOPE_MISMATCH`
151 | - `WEBHOOK_DELIVERY_LEASE_LOST`
152 | - `ENDPOINT_INACTIVE`
153 | - `TIMEOUT`
154 | - `NETWORK_ERROR`
155 | - `RATE_LIMITED`
156 | - `LEASE_EXPIRED`
157 |
158 | ## Tracing
159 |
160 | Trace synchronous API work and asynchronous jobs using correlation IDs. Propagate assessment, job, event, delivery, and request references without propagating secret material.
161 |
162 | Recommended span boundaries:
163 |
164 | - request authentication and authorization;
165 | - usage reservation and idempotency;
166 | - feature assembly and PostgreSQL reads;
167 | - pure risk-engine invocation as an internal span only;
168 | - assessment/outcome persistence;
169 | - transactional outbox insert;
170 | - durable job/delivery claim and completion;
171 | - provider adapter call;
172 | - webhook DNS validation and HTTP attempt without sensitive attributes;
173 | - verification queue transaction, job claim, payload validation, provider attempt, and completion without phone/OTP attributes.
174 |
175 | The event ID links API persistence and asynchronous delivery. The delivery ID links claim, attempt, retry, and completion operations. Telemetry export failure must not break scoring, persistence, or synchronous checkout handling.
176 |
177 | ## Alerts
178 |
179 | - Provider session refresh failure spike
180 | - API p95 latency or error-rate breach
181 | - Assessment error/degraded spike
182 | - PostgreSQL unavailable, connection saturation, or lock-wait spike
183 | - Database migration, manifest/history integrity, backup, or restore failure
184 | - Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
185 | - Event-worker claim rate drops to zero while due backlog grows
186 | - Webhook delivery failure or retry spike
187 | - Webhook secret-decryption or scope-mismatch failure
188 | - Unsafe webhook destination spike
189 | - DNS resolution failure spike
190 | - OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
191 | - Usage counter/entitlement drift
192 | - Reconnect-required account spike
193 | - Secret scanning or redaction regression
194 | - KMS/vault access or decrypt failure spike
195 |
196 | ## Runbooks
197 |
198 | Create and exercise runbooks for:
199 |
200 | - Steadfast login/selector break
201 | - Expired, disabled, or rotated encryption key
202 | - KMS/vault outage
203 | - OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
204 | - Courier provider outage
205 | - Database logical restore, managed point-in-time restore, and failover
206 | - API key compromise
207 | - Courier credential/session compromise
208 | - Webhook signing-secret compromise and endpoint rotation
209 | - Queue/outbox backlog, lease recovery, and dead-letter replay
210 | - Webhook destination failure or repeated HTTP rejection
211 | - DNS resolution/egress-policy failure
212 | - Invalid event payload or scope mismatch
213 | - Incorrect risk policy rollback
214 | - Telemetry backend outage
215 | - Reputation dispute escalation when that subsystem exists
216 |
217 | A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.
218 |
219 | A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.
220 |
221 | ## Health model
222 |
223 | Expose separate health/readiness states for:
224 |
225 | - API process
226 | - database
227 | - durable job/outbox store
228 | - optional distributed cache
229 | - event/webhook worker process
230 | - webhook backlog and oldest-event age
231 | - event-worker signing-secret decryption capability
232 | - courier provider adapters
233 | - session workers
234 | - verification providers and future verification runner
235 | - KMS/vault access
236 | - telemetry export
237 |
238 | A webhook endpoint outage, provider outage, or telemetry outage must not necessarily take the API process out of service. Readiness and operations views must still expose degraded dependencies. Unknown or degraded dependencies must never be treated as safe approval signals.
239 |
240 | ## Event-worker operational contract
241 |
242 | - `EVENT_WORKER_ID` should be stable and unique per replica in production.
243 | - Courier, event, and verification poll, lease, lease-renewal, max-attempt, and provider-timeout values must be positive integers.
244 | - Every lease-renewal interval must be no greater than half its lease; event and verification leases must also exceed their provider timeout by more than five seconds.
245 | - Alert on heartbeat renewal failure because active provider I/O is aborted and the job remains available only through stale-lease recovery or reviewed replay.
246 | - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
247 | - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
248 | - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
249 | - Exhausted stale work fails closed with `LEASE_EXPIRED`.
250 | - Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.
251 |
252 | ## Data operations
253 |
254 | - Automated encrypted backups
255 | - Point-in-time recovery
256 | - Restore testing on a schedule
257 | - Migration preflight and post-deploy verification
258 | - Preview-first bounded terminal durable-work archival through the maintenance-only PostgreSQL boundary
259 | - Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
260 | - Audit trail for privileged data and credential access
261 | - KMS key rotation and ciphertext re-encryption procedures
262 | - Webhook signing-secret rotation/re-encryption procedure
263 | - Telemetry retention and access review
264 | - Production-data redaction before lower-environment use
265 |
266 | ## Release operations
267 |
268 | - Feature flags for new engine/policy versions and native multi-store migration
269 | - Canary/pilot merchants before broad rollout
270 | - Compare decision distributions before policy promotion
271 | - Rollback path for API, worker, migration, and policy changes
272 | - Do not edit migration 0008 after application; use a new migration for schema changes
273 | - Keep event-worker deployment independently scalable and rollbackable from the API
274 | - Exercise outbox backlog and retry behavior before each pilot expansion
275 | - No automatic blocking policy promotion without reviewed outcome data
276 | - Validate dashboards and alerts before each pilot expansion
277 |
278 | ## Provider selection still pending
279 |
280 | An OpenTelemetry exporter/collector implementation, managed observability backend, telemetry retention policy, alert-delivery channel, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Repository/provider metrics, queue gauges, distributed traces, dashboards, and alerts remain unimplemented. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
281 |
282 | ## Browser dead-letter operations surface
283 |
284 | The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.
285 |
286 | The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.
287 |
288 | ## Durable work retention operations
289 |
290 | Terminal courier, webhook, and verification rows may be archived only through the maintenance-only repository and CLI documented in [Durable Work Retention Runbook](durable-work-retention-runbook.md). The application runtime role cannot read or write `durable_work_archives` and cannot delete source queue rows.
291 |
292 | Every run must preview first, use a cutoff at least 24 hours old, select only `completed`/`failed`, and process no more than 500 rows. Production baseline guidance is 30 days for completed work and 180 days for failed work until support, incident, privacy, and legal owners approve another policy. Archive evidence is secret-free and does not replace backup/PITR because source payloads cannot be reconstructed after commit.
293 |
294 | Monitor and record:
295 |
296 | - candidate and archived counts by work type and terminal status;
297 | - oldest eligible terminal timestamp;
298 | - skipped locked or state-changed rows;
299 | - archive evidence conflicts and maintenance privilege failures;
300 | - duration and rows per batch;
301 | - source queue size before and after maintenance;
302 | - archive table growth and approved evidence-retention window.
303 |
304 | No unattended retention scheduler is implemented. Automatic scheduling remains blocked on approved retention windows, incident/legal holds, maintenance identity provisioning, monitoring, backup/PITR recovery, and archive-evidence retention.
305 |
```

### docs/roadmap/risk-register.md

Bytes: 7274
SHA-256: 73ecf96b1cc902374b7b348888cfebaa0aca9d523fd50a7b1731bd66fbe49ce4
Lines: 1-34 of 34

```markdown
 1 | # Risk Register
 2 |
 3 | Updated: 2026-07-28
 4 |
 5 | | ID    | Risk                                                                                  | Severity | Current mitigation                                                                                                                      | Owner/status                     |
 6 | | ----- | ------------------------------------------------------------------------------------- | -------: | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
 7 | | R-001 | Steadfast login selectors/internal endpoint change without notice                     |     High | Adapter/session boundary, fixtures, structured errors, selector monitoring, reconnect flow, degraded cache behavior                     | Phase 2 / open                   |
 8 | | R-002 | Merchant courier credentials or sessions leak through logs/storage/CI                 | Critical | Envelope encryption, separate session encryption, redaction, no shell args, least privilege, audit reads                                | Foundation + Phase 2 / open      |
 9 | | R-003 | Raw API keys stored or used as dashboard sessions                                     | Critical | One-time reveal, hash-only storage, dedicated user sessions, prohibited by AGENTS/security docs                                         | Phase 1 / open                   |
10 | | R-004 | Weak password hashing copied from source SaaS                                         | Critical | Argon2id or managed auth only; source implementation prohibited                                                                         | Phase 1 / open                   |
11 | | R-005 | Cross-tenant data access or cache/job leakage                                         | Critical | Mandatory scope parameters, composite constraints/indexes, isolation tests, no system store shortcut                                    | Phase 1 onward / open            |
12 | | R-006 | Concurrent requests bypass quotas or create duplicate assessments                     |     High | Atomic entitlement reservation, usage events, idempotency transaction, concurrency tests                                                | Phase 1/4 / open                 |
13 | | R-007 | Unknown/provider failure interpreted as safe or fraudulent                            |     High | Explicit unknown/degraded state, separate confidence, verification recommendation, no auto-block on provider failure                    | Phase 3/4 / designed             |
14 | | R-008 | Duplicate risk engines diverge between API, WooCommerce, and multi-store SaaS         |     High | One pure package, dependency rules, shared types, native service client, remove embedded engine after shadow rollout                    | Phase 3/4 / open                 |
15 | | R-009 | WooCommerce contract mismatch causes incorrect order action                           |     High | Rewrite plugin for lowercase enums, `signals[].code`, explicit success/degraded handling, contract tests                                | Phase 4 / open                   |
16 | | R-010 | Unofficial third-party fraud service becomes hidden single point of truth             |     High | Optional fallback adapter only; source/freshness/confidence exposed; no engine import                                                   | Phase 2/3 / designed             |
17 | | R-011 | False positives harm legitimate customers/merchants                                   | Critical | Confidence, explainability, merchant policies, OTP/review, pilot confusion matrix, no broad auto-block before calibration               | Pilot / open                     |
18 | | R-012 | Cross-merchant reputation creates privacy, abuse, or dispute harm                     | Critical | Post-MVP only, evidence lineage, independent corroboration, decay, disputes, legal/privacy review                                       | Later / deferred                 |
19 | | R-013 | Deployment selected before browser-worker/database/queue requirements are known       |   Medium | Deployment ADR pending; keep components separable and infrastructure-agnostic                                                           | Phase 1 / open                   |
20 | | R-014 | Migration/schema mismatch or applied migration edits                                  |     High | Canonical database package, append-only migrations, clean/upgrade verification, CI checks                                               | Phase 1 onward / open            |
21 | | R-015 | Scraper runs synchronously and delays checkout                                        |     High | Session/sync workers, cache-first assessment, bounded latency, async refresh                                                            | Phase 2/4 / designed             |
22 | | R-016 | Scheduled scraper failures silently succeed                                           |     High | Remove `continue-on-error`, structured job records, alerts, dead-letter handling, failure exit status                                   | Phase 2 / open                   |
23 | | R-017 | Encryption key rotation makes credentials unavailable                                 |     High | Versioned envelope encryption, rotation/runbook, staged re-encryption, restore tests                                                    | Phase 1/2 / open                 |
24 | | R-018 | Outcome feedback is omitted, preventing calibration                                   |     High | Outcome endpoint/plugin/native integration included in MVP acceptance criteria                                                          | Phase 4 / open                   |
25 | | R-019 | Provider terms/authorization do not permit commercial internal-endpoint use           |     High | Merchant authorization record, terms/legal review before commercial scale, replaceable adapter boundary                                 | Phase 2 / blocking for scale     |
26 | | R-020 | Empty repository causes documentation to be mistaken for implemented functionality    |   Medium | Implementation status explicitly separates planned/in-progress/implemented and must be updated each milestone                           | Phase 0 / mitigated              |
27 | | R-021 | Durable payloads are retained indefinitely or archived before support/incident review |     High | Terminal-only preview, age floor, bounded archive-before-delete transaction, secret-free evidence, preserved replay/audit, no scheduler | Operations / open                |
28 | | R-022 | Retention maintenance privileges leak into API or worker runtime identities           | Critical | Archive table explicitly denied to runtime, no runtime DELETE, separate reviewed maintenance identity, privilege preflight              | Operations / blocking            |
29 | | R-023 | Telemetry labels leak identifiers/secrets or create uncontrolled cardinality/cost     |     High | Descriptor-owned finite value sets, prohibited identifier/secret/contact/URL/payload keys, canonical route templates, sink isolation    | Operations / partially mitigated |
30 |
31 | ## Review cadence
32 |
33 | Review this register at every milestone completion and before production/pilot changes. Add evidence, owner, target date, and residual risk as implementation begins.
34 |
```

### docs/security/security-privacy.md

Bytes: 12906
SHA-256: e9bec9bcaadf3fbc8417e4b4a51bd17d4df0cea75415eb4003748f277ff6881d
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
 51 | Metrics use a stricter boundary than structured logs. Every attribute must be declared through a finite categorical allowlist. Request, organization, store, account, worker, job, event, assessment, API-key, idempotency, endpoint, phone/hash, URL, payload/body, token, and secret-style attribute names are rejected. Current API metrics expose only normalized method, canonical route/template, and status class; current worker metrics expose only finite worker type, operation, and outcome. Arbitrary provider/error values are not labels. Metric validation or sink failure is isolated from request and worker execution.
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

Bytes: 17310
SHA-256: 92fe31883589d7b941ea1756506b392a4497fb2dcdc25ba9c12730079828cda7
Lines: 1-299 of 299

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
 22 | - Metric descriptor/name/unit validation, finite categorical attribute allowlists, high-cardinality/secret-like key rejection, value/sign validation, JSON point serialization, worker helper output, and metric-sink failure isolation
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
 68 | - Courier-session, courier-sync, event, and verification operation metrics with bounded worker/operation/outcome labels and no job, account, event, endpoint, phone, OTP, credential, URL, payload, or provider-response values
 69 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 70 |
 71 | ### PostgreSQL concurrency and idempotency coverage
 72 |
 73 | The CI PostgreSQL service runs real-database integration tests for:
 74 |
 75 | - duplicate usage reservations serializing through the organization/period advisory lock;
 76 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 77 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 78 | - concurrent assessment saves returning the single persisted scoped winner;
 79 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 80 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 81 | - operation idempotency values remaining isolated by organization and store;
 82 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 83 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 84 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 85 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 86 | - preventing another courier worker from stealing a fresh lease;
 87 | - reclaiming expired courier jobs and rejecting the previous owner;
 88 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 89 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 90 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
 91 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
 92 | - preventing another event worker from stealing a fresh webhook lease;
 93 | - rejecting an expired event-worker owner before completion or failure;
 94 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
 95 | - clearing webhook ownership when a retry is scheduled;
 96 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
 97 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
 98 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
 99 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
100 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
101 | - protecting fresh verification leases and rejecting expired owners;
102 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
103 | - failing both the verification job and authoritative session on persisted scope mismatch;
104 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
105 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
106 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
107 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
108 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
109 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
110 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
111 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
112 |
113 | ### Native shadow rollout safety coverage
114 |
115 | Default tests prove:
116 |
117 | - `off` mode performs no Guard assessment or comparison API call;
118 | - deterministic sampling keeps retries for the same store/order in the same cohort;
119 | - the legacy score and decision remain the effective result even when Guard recommends block;
120 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
121 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
122 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
123 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
124 | - CSRF-protected browser mutation permits only active owner/admin store scope;
125 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
126 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
127 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
128 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
129 |
130 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
131 |
132 | ### Webhook destination security coverage
133 |
134 | Default tests use injected DNS and fetch boundaries. They prove:
135 |
136 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
137 | - a hostname resolving to any non-public address is rejected before `fetch`;
138 | - DNS resolution failure is classified as retryable without making a network request;
139 | - redirects are disabled;
140 | - successful deliveries use the expected HMAC signature and canonical payload;
141 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
142 |
143 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
144 |
145 | ### Verification payload security coverage
146 |
147 | Default tests prove:
148 |
149 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
150 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
151 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
152 | - reporter state and logs do not receive plaintext OTP values;
153 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
154 |
155 | ### Managed envelope security coverage
156 |
157 | Default tests prove:
158 |
159 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
160 | - plaintext values and plaintext data keys are not serialized into the envelope;
161 | - context mismatch is rejected before provider unwrap;
162 | - wrapped-key metadata is authenticated and tampering fails closed;
163 | - provider outage produces a structured non-secret error;
164 | - a provider cannot pass the plaintext data key through as a wrapped key;
165 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
166 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
167 | - malformed, unsupported, or unavailable-key envelopes fail closed.
168 |
169 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
170 |
171 | ### Migration replay coverage
172 |
173 | CI runs the migration command twice against the same PostgreSQL service:
174 |
175 | 1. the first run applies every ordered migration;
176 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
177 |
178 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
179 |
180 | ### Migration integrity and restore coverage
181 |
182 | CI additionally proves:
183 |
184 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
185 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
186 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
187 | - migration execution is serialized by one session-held advisory lock;
188 | - the restore target is a distinct pre-created clean database;
189 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
190 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
191 |
192 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
193 |
194 | Current PostgreSQL coverage includes owner-checked lease renewal, durable dead-letter authorization/replay, runtime-role isolation, and maintenance-only retention archival. Future provider validation must still include selected-provider smoke tests for distinct API/worker identities, migration-owner grant execution, and the separately provisioned retention-maintenance identity.
195 |
196 | ## End-to-end tests
197 |
198 | - Merchant signup and store creation
199 | - Create a test/live API key
200 | - Connect Steadfast account
201 | - Assess WooCommerce COD order
202 | - Receive a signed `assessment.completed` webhook asynchronously
203 | - Review high-risk order
204 | - Verify OTP
205 | - Submit courier outcome
206 | - Receive a signed `order.outcome_recorded` webhook asynchronously
207 | - View usage and savings report
208 |
209 | ## Security tests
210 |
211 | - Tenant data leakage
212 | - API key replay/revocation
213 | - Raw key absence from database/metadata/logs
214 | - Brute-force OTP
215 | - CSRF
216 | - Literal-IP and DNS-result SSRF
217 | - Webhook replay and redirect handling
218 | - Webhook signing-secret decryption failure
219 | - Envelope authenticated-context mismatch
220 | - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
221 | - Log and metric serialization/export failure isolation from application and worker execution
222 | - Metric attribute rejection for identifier/hash/key/URL/payload/body/token/secret-style names and values outside descriptor-owned finite sets
223 | - Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
224 | - Injection attacks
225 | - Session fixation/rotation
226 | - Credential decryption failure
227 | - Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
228 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
229 | - Runtime database role privilege escape, ownership, migration-history, DELETE, DDL, and durable archive-table access attempts
230 |
231 | ## Scraper tests
232 |
233 | - Login page selector fixtures
234 | - Successful cookie extraction
235 | - Invalid credentials
236 | - CAPTCHA/2FA detection
237 | - Provider HTML changes
238 | - Browser cleanup on failure
239 | - Login-state/session validation
240 | - Redacted screenshot/trace behavior
241 | - Structured failure codes
242 |
243 | Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.
244 |
245 | ## Architecture tests
246 |
247 | - `packages/risk-engine` cannot import network/database/provider/browser packages
248 | - API routes cannot import provider session drivers directly
249 | - API persistence may enqueue durable work but cannot execute merchant/provider network delivery
250 | - All schema comes from `packages/database`
251 | - All public response and domain-event types come from `packages/shared-types`
252 | - Tenant-scoped repositories, outbox rows, and jobs require explicit scope
253 |
254 | ## Pilot evaluation
255 |
256 | Track a confusion matrix against real verified outcomes:
257 |
258 | - true positive
259 | - false positive
260 | - true negative
261 | - false negative
262 |
263 | Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.
264 |
265 | ## Required CI gates
266 |
267 | - formatting check
268 | - lint
269 | - typecheck
270 | - unit tests
271 | - contract tests
272 | - integration tests with PostgreSQL
273 | - migration manifest, verification, replay, and database-history integrity
274 | - clean PostgreSQL backup/restore rehearsal
275 | - least-privilege runtime database role grant and effective-permission verification
276 | - dependency audit
277 | - secret scanning
278 | - architecture/dependency-boundary tests
279 |
280 | ## Browser dead-letter operations coverage
281 |
282 | Browser API tests must prove session enforcement, exact-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, secret-free list serialization, replay-result serialization, and structured conflict mapping. The existing real-PostgreSQL durable-work suite remains authoritative for concurrent duplicate replay, tenant isolation, structural/expiry rejection, lease reset, immutable evidence, and audit atomicity.
283 |
284 | ## Durable work retention coverage
285 |
286 | Default unit tests prove invalid cutoffs, empty terminal-status selections, unsafe archive-run IDs, and batches above 500 fail before a database connection is opened.
287 |
288 | PostgreSQL integration tests must prove:
289 |
290 | - preview returns only old `completed`/`failed` rows and performs no mutation;
291 | - queued and recent rows remain in their source queues;
292 | - preview and archive responses exclude source payload and provider-reference values;
293 | - archive evidence is inserted before source deletion in one transaction;
294 | - courier, webhook, and verification source rows are deleted only after matching evidence exists;
295 | - replay ledger rows remain after source archival;
296 | - rerunning the same cutoff is idempotent when no source rows remain;
297 | - the archive schema contains no payload, raw contact, endpoint, credential, or provider-reference columns;
298 | - the normal runtime role cannot read `durable_work_archives` and has no source `DELETE` privilege.
299 |
```

### packages/observability/src/index.ts

Bytes: 7419
SHA-256: a9573857d7f5ddc2ba92eefaf9f67de487bb1737d0855a79c5375af5579c0f39
Lines: 1-226 of 226

```typescript
  1 | export * from './metrics.js';
  2 |
  3 | export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
  4 |
  5 | export type LogAttributes = Readonly<Record<string, unknown>>;
  6 |
  7 | export interface StructuredLoggerOptions {
  8 |   service: string;
  9 |   environment?: string;
 10 |   clock?: () => Date;
 11 |   write?: (line: string, level: LogLevel) => void;
 12 |   maxDepth?: number;
 13 |   maxStringLength?: number;
 14 | }
 15 |
 16 | export interface StructuredLogger {
 17 |   debug(event: string, attributes?: LogAttributes): void;
 18 |   info(event: string, attributes?: LogAttributes): void;
 19 |   warn(event: string, attributes?: LogAttributes): void;
 20 |   error(event: string, attributes?: LogAttributes): void;
 21 | }
 22 |
 23 | export interface StructuredLogInput {
 24 |   level: LogLevel;
 25 |   event: string;
 26 |   service: string;
 27 |   environment: string;
 28 |   attributes?: LogAttributes;
 29 |   timestamp: Date;
 30 |   maxDepth?: number;
 31 |   maxStringLength?: number;
 32 | }
 33 |
 34 | const REDACTED = '[REDACTED]';
 35 | const CIRCULAR = '[CIRCULAR]';
 36 | const MAX_COLLECTION_ITEMS = 100;
 37 | const DEFAULT_MAX_DEPTH = 6;
 38 | const DEFAULT_MAX_STRING_LENGTH = 2_048;
 39 | const RESERVED_FIELDS = new Set(['timestamp', 'level', 'service', 'environment', 'event']);
 40 | const SENSITIVE_FIELDS = new Set([
 41 |   'authorization',
 42 |   'password',
 43 |   'passphrase',
 44 |   'secret',
 45 |   'signingsecret',
 46 |   'webhooksecret',
 47 |   'token',
 48 |   'accesstoken',
 49 |   'refreshtoken',
 50 |   'apikey',
 51 |   'cookie',
 52 |   'cookies',
 53 |   'sessioncookie',
 54 |   'otp',
 55 |   'phone',
 56 |   'phonenumber',
 57 |   'rawphone',
 58 |   'credential',
 59 |   'credentials',
 60 |   'providerresponse',
 61 |   'dnsanswers',
 62 |   'requestbody',
 63 |   'responsebody',
 64 | ]);
 65 |
 66 | export function createStructuredLogger(options: StructuredLoggerOptions): StructuredLogger {
 67 |   const service = requiredLabel(options.service, 'service');
 68 |   const environment = options.environment?.trim() || 'development';
 69 |   const clock = options.clock ?? (() => new Date());
 70 |   const write = options.write ?? defaultWrite;
 71 |
 72 |   const emit = (level: LogLevel, event: string, attributes?: LogAttributes): void => {
 73 |     try {
 74 |       const line = serializeStructuredLog({
 75 |         level,
 76 |         event,
 77 |         service,
 78 |         environment,
 79 |         timestamp: clock(),
 80 |         ...(attributes === undefined ? {} : { attributes }),
 81 |         ...(options.maxDepth === undefined ? {} : { maxDepth: options.maxDepth }),
 82 |         ...(options.maxStringLength === undefined
 83 |           ? {}
 84 |           : { maxStringLength: options.maxStringLength }),
 85 |       });
 86 |       write(line, level);
 87 |     } catch {
 88 |       // Telemetry failures must never break application or worker execution.
 89 |     }
 90 |   };
 91 |
 92 |   return {
 93 |     debug: (event, attributes) => emit('debug', event, attributes),
 94 |     info: (event, attributes) => emit('info', event, attributes),
 95 |     warn: (event, attributes) => emit('warn', event, attributes),
 96 |     error: (event, attributes) => emit('error', event, attributes),
 97 |   };
 98 | }
 99 |
100 | export function serializeStructuredLog(input: StructuredLogInput): string {
101 |   const maxDepth = positiveInteger(input.maxDepth, DEFAULT_MAX_DEPTH);
102 |   const maxStringLength = positiveInteger(input.maxStringLength, DEFAULT_MAX_STRING_LENGTH);
103 |   const seen = new WeakSet<object>();
104 |   const attributes = sanitizeRecord(input.attributes ?? {}, {
105 |     depth: 0,
106 |     maxDepth,
107 |     maxStringLength,
108 |     seen,
109 |   });
110 |
111 |   return JSON.stringify({
112 |     ...attributes,
113 |     timestamp: input.timestamp.toISOString(),
114 |     level: input.level,
115 |     service: requiredLabel(input.service, 'service'),
116 |     environment: requiredLabel(input.environment, 'environment'),
117 |     event: requiredLabel(input.event, 'event'),
118 |   });
119 | }
120 |
121 | interface SanitizeContext {
122 |   depth: number;
123 |   maxDepth: number;
124 |   maxStringLength: number;
125 |   seen: WeakSet<object>;
126 | }
127 |
128 | function sanitizeRecord(
129 |   value: Readonly<Record<string, unknown>>,
130 |   context: SanitizeContext,
131 | ): Record<string, unknown> {
132 |   if (context.depth >= context.maxDepth) return { truncated: '[MAX_DEPTH]' };
133 |   if (context.seen.has(value)) return { circular: CIRCULAR };
134 |   context.seen.add(value);
135 |
136 |   const result: Record<string, unknown> = {};
137 |   const entries = Object.entries(value).slice(0, MAX_COLLECTION_ITEMS);
138 |   for (const [key, item] of entries) {
139 |     if (RESERVED_FIELDS.has(key)) continue;
140 |     result[key] = isSensitiveField(key)
141 |       ? REDACTED
142 |       : sanitizeValue(item, { ...context, depth: context.depth + 1 });
143 |   }
144 |   if (Object.keys(value).length > MAX_COLLECTION_ITEMS) result.truncated_fields = true;
145 |   return result;
146 | }
147 |
148 | function sanitizeValue(value: unknown, context: SanitizeContext): unknown {
149 |   if (value === null || typeof value === 'boolean') return value;
150 |   if (typeof value === 'string') return truncate(value, context.maxStringLength);
151 |   if (typeof value === 'number') return Number.isFinite(value) ? value : String(value);
152 |   if (typeof value === 'bigint') return value.toString();
153 |   if (typeof value === 'undefined') return '[UNDEFINED]';
154 |   if (typeof value === 'symbol')
155 |     return value.description ? `[SYMBOL:${value.description}]` : '[SYMBOL]';
156 |   if (typeof value === 'function') return '[FUNCTION]';
157 |   if (value instanceof Date)
158 |     return Number.isNaN(value.getTime()) ? '[INVALID_DATE]' : value.toISOString();
159 |   if (value instanceof Error) return sanitizeError(value, context);
160 |   if (ArrayBuffer.isView(value)) return `[BINARY:${value.byteLength}]`;
161 |   if (Array.isArray(value)) {
162 |     if (context.depth >= context.maxDepth) return '[MAX_DEPTH]';
163 |     if (context.seen.has(value)) return CIRCULAR;
164 |     context.seen.add(value);
165 |     const items = value
166 |       .slice(0, MAX_COLLECTION_ITEMS)
167 |       .map((item) => sanitizeValue(item, { ...context, depth: context.depth + 1 }));
168 |     if (value.length > MAX_COLLECTION_ITEMS) items.push('[TRUNCATED_ITEMS]');
169 |     return items;
170 |   }
171 |   if (typeof value === 'object') {
172 |     return sanitizeRecord(value as Readonly<Record<string, unknown>>, context);
173 |   }
174 |   return '[UNSUPPORTED]';
175 | }
176 |
177 | function sanitizeError(error: Error, context: SanitizeContext): Record<string, unknown> {
178 |   const code =
179 |     'code' in error
180 |       ? sanitizeValue((error as Error & { code?: unknown }).code, context)
181 |       : undefined;
182 |   return {
183 |     name: truncate(error.name || 'Error', context.maxStringLength),
184 |     ...(code === undefined ? {} : { code }),
185 |   };
186 | }
187 |
188 | function isSensitiveField(key: string): boolean {
189 |   const normalized = key.replace(/[^a-z0-9]/gi, '').toLowerCase();
190 |   if (normalized === 'phonehash') return false;
191 |   return (
192 |     SENSITIVE_FIELDS.has(normalized) ||
193 |     normalized.endsWith('password') ||
194 |     normalized.endsWith('secret') ||
195 |     normalized.endsWith('token') ||
196 |     normalized.endsWith('apikey') ||
197 |     normalized.endsWith('cookie') ||
198 |     normalized.endsWith('payload') ||
199 |     normalized.endsWith('body') ||
200 |     normalized.endsWith('credentials') ||
201 |     normalized.endsWith('url')
202 |   );
203 | }
204 |
205 | function truncate(value: string, maxLength: number): string {
206 |   if (value.length <= maxLength) return value;
207 |   return `${value.slice(0, maxLength)}...[TRUNCATED:${value.length - maxLength}]`;
208 | }
209 |
210 | function requiredLabel(value: string, name: string): string {
211 |   const normalized = value.trim();
212 |   if (!normalized) throw new Error(`${name} is required`);
213 |   return normalized;
214 | }
215 |
216 | function positiveInteger(value: number | undefined, fallback: number): number {
217 |   return Number.isSafeInteger(value) && Number(value) > 0 ? Number(value) : fallback;
218 | }
219 |
220 | function defaultWrite(line: string, level: LogLevel): void {
221 |   if (level === 'error') console.error(line);
222 |   else if (level === 'warn') console.warn(line);
223 |   else if (level === 'debug') console.debug(line);
224 |   else console.info(line);
225 | }
226 |
```

### packages/observability/src/metrics.test.ts

Bytes: 5033
SHA-256: 9273f123dea8ac7bb1a41b08ee8a140087ec5e0566233c7cc3a137283e3aadcf
Lines: 1-173 of 173

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import {
  3 |   createMetricRecorder,
  4 |   defineMetric,
  5 |   recordWorkerClaimFailure,
  6 |   recordWorkerOperation,
  7 |   serializeMetricPoint,
  8 | } from './metrics.js';
  9 | function parseMetricLine(line: string): unknown {
 10 |   return JSON.parse(line) as unknown;
 11 | }
 12 |
 13 | const requestMetric = defineMetric({
 14 |   name: 'ozzyl.api.requests',
 15 |   kind: 'counter',
 16 |   unit: '{request}',
 17 |   attributes: {
 18 |     method: { values: ['GET', 'POST'] },
 19 |     route: { values: ['/health', 'unmatched'] },
 20 |     status_class: { values: ['2xx', '4xx', '5xx'] },
 21 |   },
 22 | });
 23 |
 24 | describe('vendor-neutral metrics', () => {
 25 |   it('serializes an exporter-neutral point with finite categorical attributes', () => {
 26 |     const line = serializeMetricPoint({
 27 |       descriptor: requestMetric,
 28 |       value: 1,
 29 |       attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 30 |       timestamp: new Date('2026-07-28T00:00:00.000Z'),
 31 |       service: 'ozzyl-guard-api',
 32 |       environment: 'test',
 33 |     });
 34 |
 35 |     expect(JSON.parse(line)).toEqual({
 36 |       telemetry_type: 'metric',
 37 |       timestamp: '2026-07-28T00:00:00.000Z',
 38 |       service: 'ozzyl-guard-api',
 39 |       environment: 'test',
 40 |       name: 'ozzyl.api.requests',
 41 |       kind: 'counter',
 42 |       unit: '{request}',
 43 |       value: 1,
 44 |       attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 45 |     });
 46 |   });
 47 |
 48 |   it('rejects high-cardinality identifiers and values outside finite sets', () => {
 49 |     expect(() =>
 50 |       defineMetric({
 51 |         name: 'ozzyl.worker.jobs',
 52 |         kind: 'counter',
 53 |         unit: '{job}',
 54 |         attributes: { worker_id: { values: ['worker-1'] } },
 55 |       }),
 56 |     ).toThrow(/unsafe or unbounded/);
 57 |
 58 |     expect(() =>
 59 |       serializeMetricPoint({
 60 |         descriptor: requestMetric,
 61 |         value: 1,
 62 |         attributes: { method: 'GET', route: '/private/path', status_class: '2xx' },
 63 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 64 |         service: 'ozzyl-guard-api',
 65 |         environment: 'test',
 66 |       }),
 67 |     ).toThrow(/outside its bounded set/);
 68 |   });
 69 |
 70 |   it('rejects negative counters and unknown attributes', () => {
 71 |     expect(() =>
 72 |       serializeMetricPoint({
 73 |         descriptor: requestMetric,
 74 |         value: -1,
 75 |         attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 76 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 77 |         service: 'ozzyl-guard-api',
 78 |         environment: 'test',
 79 |       }),
 80 |     ).toThrow(/must not be negative/);
 81 |
 82 |     expect(() =>
 83 |       serializeMetricPoint({
 84 |         descriptor: requestMetric,
 85 |         value: 1,
 86 |         attributes: {
 87 |           method: 'GET',
 88 |           route: '/health',
 89 |           status_class: '2xx',
 90 |           outcome: 'success',
 91 |         },
 92 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 93 |         service: 'ozzyl-guard-api',
 94 |         environment: 'test',
 95 |       }),
 96 |     ).toThrow(/not allowed/);
 97 |   });
 98 |
 99 |   it('records bounded worker operation and claim-failure points without identifiers', () => {
100 |     const lines: string[] = [];
101 |     const recorder = createMetricRecorder({
102 |       service: 'worker-test',
103 |       environment: 'test',
104 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
105 |       write: (line) => lines.push(line),
106 |     });
107 |
108 |     recordWorkerOperation(recorder, {
109 |       workerType: 'webhook_delivery',
110 |       operation: 'deliver',
111 |       outcome: 'retry_scheduled',
112 |       durationMs: 17,
113 |     });
114 |     recordWorkerClaimFailure(recorder, 'verification_delivery');
115 |
116 |     expect(lines.map(parseMetricLine)).toEqual([
117 |       expect.objectContaining({
118 |         name: 'ozzyl.worker.operations',
119 |         value: 1,
120 |         attributes: {
121 |           worker_type: 'webhook_delivery',
122 |           operation: 'deliver',
123 |           outcome: 'retry_scheduled',
124 |         },
125 |       }),
126 |       expect.objectContaining({
127 |         name: 'ozzyl.worker.operation.duration',
128 |         value: 17,
129 |         attributes: {
130 |           worker_type: 'webhook_delivery',
131 |           operation: 'deliver',
132 |           outcome: 'retry_scheduled',
133 |         },
134 |       }),
135 |       expect.objectContaining({
136 |         name: 'ozzyl.worker.claim.failures',
137 |         value: 1,
138 |         attributes: { worker_type: 'verification_delivery' },
139 |       }),
140 |     ]);
141 |     expect(lines.join('\n')).not.toContain('_id');
142 |     expect(lines.join('\n')).not.toContain('error_code');
143 |   });
144 |
145 |   it('swallows descriptor, serialization, clock, and sink failures', () => {
146 |     const write = vi.fn(() => {
147 |       throw new Error('collector unavailable');
148 |     });
149 |     const recorder = createMetricRecorder({
150 |       service: 'ozzyl-guard-api',
151 |       environment: 'test',
152 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
153 |       write,
154 |     });
155 |
156 |     expect(() =>
157 |       recorder.record(requestMetric, 1, {
158 |         method: 'GET',
159 |         route: '/health',
160 |         status_class: '2xx',
161 |       }),
162 |     ).not.toThrow();
163 |     expect(() =>
164 |       recorder.record(requestMetric, 1, {
165 |         method: 'GET',
166 |         route: '/dynamic-customer-reference',
167 |         status_class: '2xx',
168 |       }),
169 |     ).not.toThrow();
170 |     expect(write).toHaveBeenCalledTimes(1);
171 |   });
172 | });
173 |
```

### packages/observability/src/metrics.ts

Bytes: 10232
SHA-256: 8f3d6cda4d245e730acebf1a8d4f1d681eb20274d08774671a0726c61d5f3d14
Lines: 1-328 of 328

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
325 | function defaultWrite(line: string): void {
326 |   console.info(line);
327 | }
328 |
```

### tracker.yml

Bytes: 20454
SHA-256: b4f422314be46c7ec3fe0a58cb8cc8098f4dd19e89412faa6c2f9f085e74b87b
Lines: 1-380 of 380

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
175 |
176 | verification:
177 |   command: npm run verify
178 |   last_verified: 2026-07-28
179 |   status: local_passed_remote_ci_pending
180 |   results:
181 |     migrations: 13_of_13_with_sha256_manifest
182 |     migration_replay: passed
183 |     migration_history_integrity: passed
184 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
185 |     architecture_boundaries: passed_locally_remote_ci_pending
186 |     typecheck: 20_of_20_passed_locally_remote_ci_pending
187 |     test_tasks: 31_of_31_passed_locally_remote_ci_pending
188 |     source_assertions: 161_total
189 |     previous_main_remote_assertions: 154_passed
190 |     migration_integrity_tests: 7_of_7_passed
191 |     postgresql_concurrency_tests: 7_of_7_passed
192 |     postgresql_courier_worker_lease_tests: 6_of_6_passed
193 |     postgresql_webhook_worker_lease_tests: 6_of_6_passed
194 |     postgresql_verification_worker_lease_tests: 6_of_6_passed
195 |     verification_payload_validation_tests: 3_of_3_passed
196 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
197 |     postgresql_runtime_role_tests: 8_of_8_passed
198 |     managed_envelope_tests: 11_of_11_passed
199 |     native_shadow_adapter_tests: 10_of_10_passed
200 |     native_shadow_api_tests: 7_of_7_passed
201 |     native_shadow_postgresql_tests: 7_of_7_passed
202 |     native_shadow_browser_tests: 2_of_2_passed
203 |     native_shadow_sdk_tests: 2_of_2_passed
204 |     native_shadow_total_tests: 28_of_28_passed
205 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
206 |     browser_dead_letter_api_tests: 3_of_3_passed
207 |     observability_tests: 8_of_8_passed_locally
208 |     api_observability_tests: 4_of_4_passed
209 |     api_metric_integration_tests: 1_of_1_passed_locally
210 |     worker_metric_integration_tests: 4_of_4_passed_locally
211 |     lease_heartbeat_unit_tests: 3_of_3_passed
212 |     provider_abort_on_lease_loss_tests: 3_of_3_passed
213 |     durable_retention_input_tests: 4_of_4_passed
214 |     durable_retention_postgresql_tests: 4_of_4_passed
215 |     builds: 20_of_20_passed_locally_remote_ci_pending
216 |     php_syntax: passed_locally_remote_ci_pending
217 |     high_critical_dependency_check: passed_locally_remote_ci_pending
218 |     moderate_dependency_findings: 5
219 |     documentation_links: 61_reviewed_0_known_broken
220 |   continuation_bundle:
221 |     status: refreshed_locally
222 |     canonical_main_sync: verified_at_0851020ed91027132353b4b7f80b2505438b4dab
223 |     local_exporter: completed_after_vendor_neutral_metrics_docs
224 |   remote_ci:
225 |     status: passed
226 |     run_id: 30325144458
227 |     job_id: 90168867190
228 |     job: verify
229 |     tested_head: e0f18f0e3a51e484d1995f523d0572c09a3e0bba
230 |     merged_main_commit: 8788da49db5bc0726db97ad0b021fd30b06600e5
231 |     completed: 2026-07-28
232 |     steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_fifty_four_assertions_twenty_builds_php_all_passed
233 |   source_validation:
234 |     status: local_passed_remote_ci_pending
235 |     branch: feat/vendor-neutral-metrics
236 |     tested_head: pending_feature_commit
237 |     completed: 2026-07-28
238 |     steps: format_lint_thirteen_migration_manifest_architecture_twenty_typechecks_thirty_one_test_tasks_twenty_builds_audit_php_yaml_links_and_secret_scan_passed_locally
239 |     metric_boundary_tests: 5_of_5_passed
240 |     structured_log_tests: 3_of_3_passed
241 |     api_metric_integration: passed
242 |     private_worker_metric_integrations: 4_of_4_passed
243 |     metric_sink_failure_isolation: passed
244 |   pending_follow_up:
245 |     - provision_retention_maintenance_identity_and_approved_windows_holds_monitoring_recovery
246 |     - observability_traces_exporter_collector_repository_provider_metrics_queue_gauges_and_managed_backend
247 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
248 |     - pilot_outcome_collection_and_calibration
249 |
250 | migrations:
251 |   immutable: true
252 |   manifest: packages/database/migrations/manifest.json
253 |   history_checksum_column: checksum_sha256_not_null
254 |   files:
255 |     - packages/database/migrations/0001_foundation.sql
256 |     - packages/database/migrations/0002_courier.sql
257 |     - packages/database/migrations/0003_risk.sql
258 |     - packages/database/migrations/0004_verification_events.sql
259 |     - packages/database/migrations/0005_durable_operations.sql
260 |     - packages/database/migrations/0006_browser_access.sql
261 |     - packages/database/migrations/0007_worker_leases.sql
262 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
263 |     - packages/database/migrations/0009_verification_delivery_queue.sql
264 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
265 |     - packages/database/migrations/0011_native_shadow_pilot.sql
266 |     - packages/database/migrations/0012_durable_work_replays.sql
267 |     - packages/database/migrations/0013_durable_work_archives.sql
268 |
269 | accepted_adrs:
270 |   - docs/adr/0006-production-deployment-topology.md
271 |   - docs/adr/0007-managed-postgresql-production-baseline.md
272 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
273 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
274 |   - docs/adr/0010-vendor-neutral-production-observability.md
275 |   - docs/adr/0011-selected-source-shadow-pilot.md
276 |   - docs/adr/0012-durable-work-dead-letter-operations.md
277 |
278 | external_dependencies:
279 |   - authorized_steadfast_test_account
280 |   - provider_authorization_review
281 |   - deployment_platform_account_region_and_budget
282 |   - managed_postgresql_provider_and_service_tier
283 |   - managed_secret_store_and_kms_vault_provider
284 |   - observability_backend_and_retention_policy
285 |   - otp_provider_account
286 |   - pilot_outcome_data
287 |
288 | next_milestone:
289 |   name: production-hardening-and-pilot-readiness
290 |   tasks:
291 |     - select_and_provision_accepted_infrastructure_providers
292 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
293 |     - validate_steadfast_with_an_authorized_account
294 |     - implement_the_selected_otp_provider_adapter
295 |     - add_distributed_cache_only_when_replica_coordination_requires_it
296 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
297 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
298 |     - calibrate_decisions_before_broad_automatic_blocking
299 |
300 | release_policy:
301 |   branch: main
302 |   before_push:
303 |     - npm_run_verify_passes
304 |     - documentation_and_tracker_are_current
305 |     - repository_review_is_clean
306 |   rules:
307 |     - no_force_push_to_main
308 |     - do_not_edit_applied_migrations
309 |     - use_descriptive_commits
310 |
311 | notes:
312 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
313 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
314 |   - github_connector_reports_public_visibility_while_expected_state_is_private
315 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
316 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
317 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
318 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
319 |   - webhook_event_payloads_do_not_include_raw_phone_values
320 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
321 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
322 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
323 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
324 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
325 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
326 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
327 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
328 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
329 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
330 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
331 |   - selected_otp_provider_module_and_credentials_remain_external
332 |   - migration_files_are_bound_to_a_committed_sha256_manifest
333 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
334 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
335 |   - migration_execution_uses_one_session_advisory_lock
336 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
337 |   - managed_provider_point_in_time_restore_drill_remains_external
338 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
339 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
340 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
341 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
342 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
343 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
344 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
345 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
346 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
347 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
348 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
349 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
350 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
351 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
352 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
353 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
354 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
355 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
356 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
357 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
358 |   - durable_replay_never_performs_provider_or_webhook_network_io
359 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
360 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
361 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
362 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
363 |   - structured_log_redaction_is_canonicalized_in_packages_observability
364 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
365 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
366 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
367 |   - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
368 |   - lease_renewal_interval_must_not_exceed_half_the_lease
369 |   - heartbeat_renewal_and_final_state_transitions_do_not_overlap
370 |   - durable_retention_cutoff_has_a_twenty_four_hour_minimum_safety_floor
371 |   - durable_retention_batches_are_globally_bounded_to_five_hundred
372 |   - completed_source_retention_baseline_is_thirty_days_pending_approval
373 |   - failed_source_retention_baseline_is_one_hundred_eighty_days_pending_approval
374 |   - archive_evidence_does_not_replace_backup_or_point_in_time_recovery
375 |   - vendor_neutral_metrics_use_only_finite_descriptor_owned_attributes
376 |   - api_metrics_use_method_canonical_route_and_status_class_only
377 |   - worker_metrics_use_worker_type_operation_and_outcome_only
378 |   - pro_context_was_refreshed_after_vendor_neutral_metrics_documentation
379 |   - update_this_file_after_every_material_milestone
380 |
```

### workers/courier-session-worker/src/index.test.ts

Bytes: 2976
SHA-256: 93b4186f306af31f6dba929582731397b242a3e66447a1a4d51f1bf0b02c8fd3
Lines: 1-83 of 83

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
27 |     const ticks = [50, 70];
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
61 |         name: 'ozzyl.worker.operations',
62 |         attributes: {
63 |           worker_type: 'courier_session',
64 |           operation: 'refresh',
65 |           outcome: 'completed',
66 |         },
67 |       }),
68 |       expect.objectContaining({
69 |         name: 'ozzyl.worker.operation.duration',
70 |         value: 20,
71 |         attributes: {
72 |           worker_type: 'courier_session',
73 |           operation: 'refresh',
74 |           outcome: 'completed',
75 |         },
76 |       }),
77 |     ]);
78 |     expect(metricLines.join('\n')).not.toContain('account_sensitive');
79 |     expect(metricLines.join('\n')).not.toContain(credentialFixture);
80 |     expect(metricLines.join('\n')).not.toContain('fixture@example.test');
81 |   });
82 | });
83 |
```

### workers/courier-session-worker/src/index.ts

Bytes: 6728
SHA-256: 19a29feddc35c75defb18a01fab3b36b0598c08e0f3d2a8015f3b95350bb27b6
Lines: 1-202 of 202

```typescript
  1 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  2 | import { chromium } from 'playwright';
  3 | import type { CourierSession } from '@ozzyl/courier-adapters';
  4 | import { recordWorkerOperation, type MetricRecorder } from '@ozzyl/observability';
  5 |
  6 | export type SessionFailureCode =
  7 |   | 'INVALID_CREDENTIALS'
  8 |   | 'CAPTCHA_REQUIRED'
  9 |   | 'TWO_FACTOR_REQUIRED'
 10 |   | 'SELECTOR_CHANGED'
 11 |   | 'SESSION_NOT_CREATED'
 12 |   | 'PROVIDER_UNAVAILABLE';
 13 |
 14 | export class SessionDriverError extends Error {
 15 |   constructor(
 16 |     readonly code: SessionFailureCode,
 17 |     message: string,
 18 |     readonly retryable: boolean,
 19 |   ) {
 20 |     super(message);
 21 |   }
 22 | }
 23 |
 24 | export interface SteadfastCredentials {
 25 |   email: string;
 26 |   password: string;
 27 | }
 28 |
 29 | export interface SessionDriverResult extends CourierSession {
 30 |   validatedAt: string;
 31 | }
 32 |
 33 | export interface SessionVault {
 34 |   save(accountId: string, encryptedPayload: string, keyVersion: string): Promise<void>;
 35 | }
 36 |
 37 | export interface CredentialSource {
 38 |   load(accountId: string): Promise<SteadfastCredentials | null>;
 39 | }
 40 |
 41 | export interface AccountHealthStore {
 42 |   markConnected(accountId: string, at: Date): Promise<void>;
 43 |   markFailure(accountId: string, code: SessionFailureCode, at: Date): Promise<void>;
 44 | }
 45 |
 46 | export { AesGcmEnvelopeCipher };
 47 |
 48 | export class SteadfastSessionDriver {
 49 |   async login(credentials: SteadfastCredentials): Promise<SessionDriverResult> {
 50 |     const browser = await chromium.launch({ headless: true });
 51 |     const context = await browser.newContext({
 52 |       userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131 Safari/537.36',
 53 |     });
 54 |     try {
 55 |       const page = await context.newPage();
 56 |       await page.goto('https://steadfast.com.bd/login', {
 57 |         waitUntil: 'domcontentloaded',
 58 |         timeout: 30_000,
 59 |       });
 60 |
 61 |       const captchaVisible = await page
 62 |         .locator('iframe[src*="captcha"], text=/captcha/i')
 63 |         .first()
 64 |         .isVisible()
 65 |         .catch(() => false);
 66 |       if (captchaVisible) {
 67 |         throw new SessionDriverError('CAPTCHA_REQUIRED', 'Steadfast requires CAPTCHA', false);
 68 |       }
 69 |
 70 |       const emailInput = page.locator('input[type="email"], input[name="email"]').first();
 71 |       const passwordInput = page.locator('input[type="password"]').first();
 72 |       if ((await emailInput.count()) === 0 || (await passwordInput.count()) === 0) {
 73 |         throw new SessionDriverError('SELECTOR_CHANGED', 'Steadfast login fields changed', false);
 74 |       }
 75 |
 76 |       await emailInput.fill(credentials.email);
 77 |       await passwordInput.fill(credentials.password);
 78 |       const submit = page.locator('button[type="submit"], button:has-text("Login")').first();
 79 |       if ((await submit.count()) === 0) {
 80 |         throw new SessionDriverError('SELECTOR_CHANGED', 'Steadfast login button changed', false);
 81 |       }
 82 |
 83 |       await Promise.all([
 84 |         page.waitForLoadState('domcontentloaded', { timeout: 20_000 }).catch(() => undefined),
 85 |         submit.click(),
 86 |       ]);
 87 |
 88 |       const bodyText = (
 89 |         await page
 90 |           .locator('body')
 91 |           .innerText()
 92 |           .catch(() => '')
 93 |       ).toLowerCase();
 94 |       if (bodyText.includes('invalid') && bodyText.includes('password')) {
 95 |         throw new SessionDriverError(
 96 |           'INVALID_CREDENTIALS',
 97 |           'Steadfast rejected credentials',
 98 |           false,
 99 |         );
100 |       }
101 |       if (bodyText.includes('two-factor') || bodyText.includes('verification code')) {
102 |         throw new SessionDriverError(
103 |           'TWO_FACTOR_REQUIRED',
104 |           'Steadfast requires two-factor login',
105 |           false,
106 |         );
107 |       }
108 |
109 |       const cookies = await context.cookies('https://steadfast.com.bd');
110 |       const sessionCookie = cookies.find((cookie) => cookie.name === 'steadfast_courier_session');
111 |       const xsrfToken = cookies.find((cookie) => cookie.name === 'XSRF-TOKEN');
112 |       if (!sessionCookie?.value || !xsrfToken?.value) {
113 |         throw new SessionDriverError(
114 |           'SESSION_NOT_CREATED',
115 |           'Steadfast did not create a valid session',
116 |           true,
117 |         );
118 |       }
119 |
120 |       return {
121 |         sessionCookie: sessionCookie.value,
122 |         xsrfToken: xsrfToken.value,
123 |         ...(sessionCookie.expires > 0
124 |           ? { expiresAt: new Date(sessionCookie.expires * 1_000).toISOString() }
125 |           : {}),
126 |         validatedAt: new Date().toISOString(),
127 |       };
128 |     } catch (error) {
129 |       if (error instanceof SessionDriverError) throw error;
130 |       throw new SessionDriverError(
131 |         'PROVIDER_UNAVAILABLE',
132 |         'Steadfast login automation failed',
133 |         true,
134 |       );
135 |     } finally {
136 |       await browser.close();
137 |     }
138 |   }
139 | }
140 |
141 | export class CourierSessionWorker {
142 |   constructor(
143 |     private readonly dependencies: {
144 |       credentials: CredentialSource;
145 |       vault: SessionVault;
146 |       health: AccountHealthStore;
147 |       cipher: AesGcmEnvelopeCipher;
148 |       driver: SteadfastSessionDriver;
149 |       metrics?: MetricRecorder;
150 |       monotonicNow?: () => number;
151 |     },
152 |   ) {}
153 |
154 |   async refresh(accountId: string): Promise<{ status: 'connected' }> {
155 |     const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
156 |     const startedAt = monotonicNow();
157 |     try {
158 |       const result = await this.refreshSession(accountId);
159 |       recordWorkerOperation(this.dependencies.metrics, {
160 |         workerType: 'courier_session',
161 |         operation: 'refresh',
162 |         outcome: 'completed',
163 |         durationMs: monotonicNow() - startedAt,
164 |       });
165 |       return result;
166 |     } catch (error) {
167 |       recordWorkerOperation(this.dependencies.metrics, {
168 |         workerType: 'courier_session',
169 |         operation: 'refresh',
170 |         outcome: 'failed',
171 |         durationMs: monotonicNow() - startedAt,
172 |       });
173 |       throw error;
174 |     }
175 |   }
176 |
177 |   private async refreshSession(accountId: string): Promise<{ status: 'connected' }> {
178 |     const credentials = await this.dependencies.credentials.load(accountId);
179 |     if (!credentials) {
180 |       const error = new SessionDriverError(
181 |         'INVALID_CREDENTIALS',
182 |         'Courier credentials are not configured',
183 |         false,
184 |       );
185 |       await this.dependencies.health.markFailure(accountId, error.code, new Date());
186 |       throw error;
187 |     }
188 |
189 |     try {
190 |       const session = await this.dependencies.driver.login(credentials);
191 |       const encrypted = this.dependencies.cipher.encrypt(session, `courier-session:${accountId}`);
192 |       await this.dependencies.vault.save(accountId, encrypted, this.dependencies.cipher.keyVersion);
193 |       await this.dependencies.health.markConnected(accountId, new Date());
194 |       return { status: 'connected' };
195 |     } catch (error) {
196 |       const code = error instanceof SessionDriverError ? error.code : 'PROVIDER_UNAVAILABLE';
197 |       await this.dependencies.health.markFailure(accountId, code, new Date());
198 |       throw error;
199 |     }
200 |   }
201 | }
202 |
```

### workers/courier-session-worker/src/runner.ts

Bytes: 5203
SHA-256: 7195ac7fd9d4421a0fbb0aa29e30ca59a221dd38f8f2e045fa2030be0c0a3825
Lines: 1-167 of 167

```typescript
  1 | import { Pool } from 'pg';
  2 | import { createMetricRecorder, createStructuredLogger } from '@ozzyl/observability';
  3 | import {
  4 |   AesGcmEnvelopeCipher,
  5 |   CourierSessionWorker,
  6 |   SteadfastSessionDriver,
  7 |   type SessionFailureCode,
  8 |   type SteadfastCredentials,
  9 | } from './index.js';
 10 |
 11 | const required = (name: string): string => {
 12 |   const value = process.env[name];
 13 |   if (!value) throw new Error(`${name} is required`);
 14 |   return value;
 15 | };
 16 |
 17 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 5 });
 18 | const cipher = new AesGcmEnvelopeCipher(
 19 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 20 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 21 | );
 22 | const refreshHours = Number(process.env.COURIER_SESSION_REFRESH_HOURS ?? 6);
 23 | const pollMs = Number(process.env.WORKER_POLL_MS ?? 60_000);
 24 | const log = createStructuredLogger({
 25 |   service: 'courier-session-worker',
 26 |   environment: process.env.NODE_ENV ?? 'development',
 27 | });
 28 | const metrics = createMetricRecorder({
 29 |   service: 'courier-session-worker',
 30 |   environment: process.env.NODE_ENV ?? 'development',
 31 | });
 32 | let stopping = false;
 33 |
 34 | const worker = new CourierSessionWorker({
 35 |   credentials: {
 36 |     async load(accountId): Promise<SteadfastCredentials | null> {
 37 |       const result = await pool.query<{ encrypted_payload: string }>(
 38 |         'select encrypted_payload from courier_credentials where courier_account_id = $1',
 39 |         [accountId],
 40 |       );
 41 |       const payload = result.rows[0]?.encrypted_payload;
 42 |       return payload
 43 |         ? cipher.decrypt<SteadfastCredentials>(payload, `courier-credential:${accountId}`)
 44 |         : null;
 45 |     },
 46 |   },
 47 |   vault: {
 48 |     async save(accountId, encryptedPayload, keyVersion): Promise<void> {
 49 |       await pool.query(
 50 |         `
 51 |           insert into courier_sessions (
 52 |             courier_account_id, encrypted_payload, encryption_key_version,
 53 |             validated_at, status, expires_at
 54 |           ) values ($1, $2, $3, now(), 'valid', now() + interval '6 hours')
 55 |           on conflict (courier_account_id) do update set
 56 |             encrypted_payload = excluded.encrypted_payload,
 57 |             encryption_key_version = excluded.encryption_key_version,
 58 |             validated_at = now(),
 59 |             status = 'valid',
 60 |             expires_at = excluded.expires_at,
 61 |             updated_at = now()
 62 |         `,
 63 |         [accountId, encryptedPayload, keyVersion],
 64 |       );
 65 |     },
 66 |   },
 67 |   health: {
 68 |     async markConnected(accountId, at): Promise<void> {
 69 |       await pool.query(
 70 |         `
 71 |           update courier_accounts set status = 'connected', last_connected_at = $2,
 72 |             last_success_at = $2, failure_code = null, updated_at = now()
 73 |           where id = $1
 74 |         `,
 75 |         [accountId, at],
 76 |       );
 77 |     },
 78 |     async markFailure(accountId, code: SessionFailureCode, at): Promise<void> {
 79 |       const status = [
 80 |         'INVALID_CREDENTIALS',
 81 |         'CAPTCHA_REQUIRED',
 82 |         'TWO_FACTOR_REQUIRED',
 83 |         'SELECTOR_CHANGED',
 84 |       ].includes(code)
 85 |         ? 'reconnect_required'
 86 |         : 'degraded';
 87 |       await pool.query(
 88 |         `
 89 |           update courier_accounts set status = $2, last_failure_at = $3,
 90 |             failure_code = $4, updated_at = now()
 91 |           where id = $1
 92 |         `,
 93 |         [accountId, status, at, code],
 94 |       );
 95 |     },
 96 |   },
 97 |   cipher,
 98 |   driver: new SteadfastSessionDriver(),
 99 |   metrics,
100 | });
101 |
102 | async function tick(): Promise<void> {
103 |   const accounts = await pool.query<{ id: string }>(
104 |     `
105 |       select id from courier_accounts
106 |       where provider = 'steadfast'
107 |         and status <> 'disabled'
108 |         and (
109 |           last_success_at is null
110 |           or last_success_at < now() - ($1::text || ' hours')::interval
111 |           or status in ('pending', 'expired', 'degraded')
112 |         )
113 |       order by coalesce(last_success_at, to_timestamp(0)) asc
114 |       limit 10
115 |     `,
116 |     [String(refreshHours)],
117 |   );
118 |
119 |   for (const account of accounts.rows) {
120 |     if (stopping) return;
121 |     const client = await pool.connect();
122 |     try {
123 |       const lock = await client.query<{ locked: boolean }>(
124 |         'select pg_try_advisory_lock(hashtext($1)) as locked',
125 |         [`courier-session:${account.id}`],
126 |       );
127 |       if (!lock.rows[0]?.locked) continue;
128 |       try {
129 |         await worker.refresh(account.id);
130 |         log.info('courier.session.refreshed', { account_id: account.id });
131 |       } catch (error) {
132 |         const code =
133 |           error && typeof error === 'object' && 'code' in error
134 |             ? String(error.code)
135 |             : 'SESSION_REFRESH_FAILED';
136 |         log.error('courier.session.failed', { account_id: account.id, code });
137 |       } finally {
138 |         await client.query('select pg_advisory_unlock(hashtext($1))', [
139 |           `courier-session:${account.id}`,
140 |         ]);
141 |       }
142 |     } finally {
143 |       client.release();
144 |     }
145 |   }
146 | }
147 |
148 | async function run(): Promise<void> {
149 |   log.info('courier.session.worker.started');
150 |   while (!stopping) {
151 |     try {
152 |       await tick();
153 |     } catch {
154 |       log.error('courier.session.worker.tick_failed');
155 |     }
156 |     if (!stopping) await new Promise((resolve) => setTimeout(resolve, pollMs));
157 |   }
158 |   await pool.end();
159 | }
160 |
161 | const stop = (): void => {
162 |   stopping = true;
163 | };
164 | process.once('SIGTERM', stop);
165 | process.once('SIGINT', stop);
166 | await run();
167 |
```

### workers/courier-sync-worker/src/index.test.ts

Bytes: 3672
SHA-256: 7f273a60dfc7815273ae5fa8e474a0e4a765f80a1350d746a109a625c3882511
Lines: 1-120 of 120

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
119 | });
120 |
```

### workers/courier-sync-worker/src/index.ts

Bytes: 4755
SHA-256: 87e8b9a0f9201f85df358d72a995dc388a4b7d6dba02b302fc7289fbe9e82a38
Lines: 1-143 of 143

```typescript
  1 | import type { CourierAdapter, CourierObservation } from '@ozzyl/courier-adapters';
  2 | import { recordWorkerOperation, type MetricRecorder } from '@ozzyl/observability';
  3 |
  4 | export interface ObservationRepository {
  5 |   findFresh(input: {
  6 |     storeId: string;
  7 |     provider: string;
  8 |     phoneHash: string;
  9 |     at: Date;
 10 |   }): Promise<CourierObservation | null>;
 11 |   save(input: {
 12 |     storeId: string;
 13 |     phoneHash: string;
 14 |     observation: CourierObservation;
 15 |   }): Promise<void>;
 16 | }
 17 |
 18 | export interface SyncJobHealth {
 19 |   started(jobId: string, at: Date): Promise<void>;
 20 |   completed(jobId: string, at: Date): Promise<void>;
 21 |   failed(jobId: string, code: string, retryable: boolean, at: Date): Promise<void>;
 22 | }
 23 |
 24 | export interface CourierSyncInput {
 25 |   jobId: string;
 26 |   storeId: string;
 27 |   courierAccountId: string;
 28 |   provider: string;
 29 |   phone: string;
 30 |   phoneHash: string;
 31 |   force?: boolean;
 32 |   signal?: AbortSignal;
 33 | }
 34 |
 35 | export interface CourierSyncResult {
 36 |   observation: CourierObservation;
 37 |   cached: boolean;
 38 | }
 39 |
 40 | export class CourierSyncWorker {
 41 |   constructor(
 42 |     private readonly dependencies: {
 43 |       adapters: Map<string, CourierAdapter>;
 44 |       observations: ObservationRepository;
 45 |       health: SyncJobHealth;
 46 |       metrics?: MetricRecorder;
 47 |       monotonicNow?: () => number;
 48 |     },
 49 |   ) {}
 50 |
 51 |   async sync(input: CourierSyncInput): Promise<CourierSyncResult> {
 52 |     const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
 53 |     const startedAt = monotonicNow();
 54 |     try {
 55 |       const result = await this.syncJob(input);
 56 |       recordWorkerOperation(this.dependencies.metrics, {
 57 |         workerType: 'courier_sync',
 58 |         operation: 'sync',
 59 |         outcome: result.cached ? 'cached' : 'completed',
 60 |         durationMs: monotonicNow() - startedAt,
 61 |       });
 62 |       return result;
 63 |     } catch (error) {
 64 |       recordWorkerOperation(this.dependencies.metrics, {
 65 |         workerType: 'courier_sync',
 66 |         operation: 'sync',
 67 |         outcome: 'failed',
 68 |         durationMs: monotonicNow() - startedAt,
 69 |       });
 70 |       throw error;
 71 |     }
 72 |   }
 73 |
 74 |   private async syncJob(input: CourierSyncInput): Promise<CourierSyncResult> {
 75 |     await this.dependencies.health.started(input.jobId, new Date());
 76 |     try {
 77 |       if (!input.force) {
 78 |         const cached = await this.dependencies.observations.findFresh({
 79 |           storeId: input.storeId,
 80 |           provider: input.provider,
 81 |           phoneHash: input.phoneHash,
 82 |           at: new Date(),
 83 |         });
 84 |         if (cached) {
 85 |           await this.dependencies.health.completed(input.jobId, new Date());
 86 |           return { observation: cached, cached: true };
 87 |         }
 88 |       }
 89 |
 90 |       const adapter = this.dependencies.adapters.get(input.provider);
 91 |       if (!adapter) throw new Error(`Courier adapter ${input.provider} is not registered`);
 92 |       const observation = await adapter.fetchCustomerObservation({
 93 |         accountId: input.courierAccountId,
 94 |         phone: input.phone,
 95 |         ...(input.signal === undefined ? {} : { signal: input.signal }),
 96 |       });
 97 |       await this.dependencies.observations.save({
 98 |         storeId: input.storeId,
 99 |         phoneHash: input.phoneHash,
100 |         observation,
101 |       });
102 |       await this.dependencies.health.completed(input.jobId, new Date());
103 |       return { observation, cached: false };
104 |     } catch (error) {
105 |       const providerError = error as { code?: unknown; retryable?: unknown };
106 |       const code = typeof providerError.code === 'string' ? providerError.code : 'SYNC_FAILED';
107 |       const retryable = providerError.retryable === true;
108 |       await this.dependencies.health.failed(input.jobId, code, retryable, new Date());
109 |       throw error;
110 |     }
111 |   }
112 | }
113 |
114 | export function toRiskCourierFeatures(observations: CourierObservation[]) {
115 |   if (observations.length === 0) {
116 |     return {
117 |       totalOrders: 0,
118 |       deliveredOrders: 0,
119 |       returnedOrders: 0,
120 |       cancelledBeforeShipping: 0,
121 |       providerCount: 0,
122 |       freshness: 'missing' as const,
123 |       sourceConfidence: 0,
124 |     };
125 |   }
126 |
127 |   const now = Date.now();
128 |   const fresh = observations.every((observation) => Date.parse(observation.expiresAt) > now);
129 |   return {
130 |     totalOrders: observations.reduce((sum, value) => sum + value.totalOrders, 0),
131 |     deliveredOrders: observations.reduce((sum, value) => sum + value.deliveredOrders, 0),
132 |     returnedOrders: observations.reduce((sum, value) => sum + value.returnedOrders, 0),
133 |     cancelledBeforeShipping: observations.reduce(
134 |       (sum, value) => sum + value.cancelledBeforeShipping,
135 |       0,
136 |     ),
137 |     providerCount: new Set(observations.map((observation) => observation.provider)).size,
138 |     freshness: fresh ? ('fresh' as const) : ('stale' as const),
139 |     sourceConfidence:
140 |       observations.reduce((sum, value) => sum + value.confidence, 0) / observations.length,
141 |   };
142 | }
143 |
```

### workers/courier-sync-worker/src/runner.ts

Bytes: 8663
SHA-256: b905256fab361bd6d199f2abf29794b1ba53e671cca0503491213bc5bd65a4c5
Lines: 1-244 of 244

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
 13 |   recordWorkerClaimFailure,
 14 | } from '@ozzyl/observability';
 15 | import { CourierSyncWorker } from './index.js';
 16 | import { PostgresCourierJobQueue, type ClaimedCourierJob } from './postgres.js';
 17 |
 18 | const required = (name: string): string => {
 19 |   const value = process.env[name];
 20 |   if (!value) throw new Error(`${name} is required`);
 21 |   return value;
 22 | };
 23 |
 24 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 25 | const cipher = new AesGcmEnvelopeCipher(
 26 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 27 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 28 | );
 29 | const pollMs = Number(process.env.WORKER_POLL_MS ?? 5_000);
 30 | const leaseMs = Number(process.env.WORKER_LEASE_MS ?? 5 * 60_000);
 31 | const leaseRenewMs = Number(process.env.WORKER_LEASE_RENEW_MS ?? Math.floor(leaseMs / 3));
 32 | if (!Number.isSafeInteger(leaseRenewMs) || leaseRenewMs <= 0 || leaseRenewMs * 2 > leaseMs) {
 33 |   throw new Error(
 34 |     'WORKER_LEASE_RENEW_MS must be a positive integer no greater than half the lease',
 35 |   );
 36 | }
 37 | const workerId = process.env.WORKER_ID ?? `courier-sync-${randomUUID()}`;
 38 | const log = createStructuredLogger({
 39 |   service: 'courier-sync-worker',
 40 |   environment: process.env.NODE_ENV ?? 'development',
 41 | });
 42 | const metrics = createMetricRecorder({
 43 |   service: 'courier-sync-worker',
 44 |   environment: process.env.NODE_ENV ?? 'development',
 45 | });
 46 | const jobs = new PostgresCourierJobQueue(pool, { leaseMs });
 47 | let stopping = false;
 48 | let activeHeartbeat: LeaseHeartbeat | null = null;
 49 |
 50 | const steadfast = new SteadfastAdapter({
 51 |   sessionProvider: {
 52 |     async getSession(accountId): Promise<CourierSession | null> {
 53 |       const result = await pool.query<{ encrypted_payload: string; expires_at: Date | null }>(
 54 |         `select encrypted_payload, expires_at from courier_sessions where courier_account_id = $1 and status = 'valid'`,
 55 |         [accountId],
 56 |       );
 57 |       const row = result.rows[0];
 58 |       if (!row) return null;
 59 |       const session = cipher.decrypt<CourierSession>(
 60 |         row.encrypted_payload,
 61 |         `courier-session:${accountId}`,
 62 |       );
 63 |       return { ...session, ...(row.expires_at ? { expiresAt: row.expires_at.toISOString() } : {}) };
 64 |     },
 65 |   },
 66 | });
 67 |
 68 | const syncWorker = new CourierSyncWorker({
 69 |   adapters: new Map([['steadfast', steadfast]]),
 70 |   observations: {
 71 |     async findFresh(input): Promise<CourierObservation | null> {
 72 |       const result = await pool.query<ObservationRow>(
 73 |         `
 74 |           select provider, total_orders, delivered_orders, returned_orders,
 75 |             cancelled_before_shipping, success_rate, confidence, source_type,
 76 |             observed_at, expires_at
 77 |           from courier_observations
 78 |           where store_id = $1 and provider = $2 and phone_hash = $3 and expires_at > $4
 79 |           order by observed_at desc limit 1
 80 |         `,
 81 |         [input.storeId, input.provider, input.phoneHash, input.at],
 82 |       );
 83 |       return result.rows[0] ? observationFromRow(result.rows[0]) : null;
 84 |     },
 85 |     async save(input): Promise<void> {
 86 |       await pool.query(
 87 |         `
 88 |           insert into courier_observations (
 89 |             id, store_id, provider, phone_hash, total_orders, delivered_orders,
 90 |             returned_orders, cancelled_before_shipping, success_rate, confidence,
 91 |             source_type, observed_at, expires_at
 92 |           ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
 93 |         `,
 94 |         [
 95 |           `cob_${randomUUID()}`,
 96 |           input.storeId,
 97 |           input.observation.provider,
 98 |           input.phoneHash,
 99 |           input.observation.totalOrders,
100 |           input.observation.deliveredOrders,
101 |           input.observation.returnedOrders,
102 |           input.observation.cancelledBeforeShipping,
103 |           input.observation.successRate,
104 |           input.observation.confidence,
105 |           input.observation.source,
106 |           input.observation.observedAt,
107 |           input.observation.expiresAt,
108 |         ],
109 |       );
110 |     },
111 |   },
112 |   metrics,
113 |   health: {
114 |     async started(jobId, at): Promise<void> {
115 |       await jobs.started(jobId, workerId, at);
116 |     },
117 |     async completed(jobId, at): Promise<void> {
118 |       await activeHeartbeat?.stop();
119 |       await jobs.completed(jobId, workerId, at);
120 |     },
121 |     async failed(jobId, code, retryable, at): Promise<void> {
122 |       await activeHeartbeat?.stop();
123 |       await jobs.failed(jobId, workerId, code, retryable, at);
124 |     },
125 |   },
126 | });
127 |
128 | async function run(): Promise<void> {
129 |   log.info('courier.sync.worker.started', { worker_id: workerId });
130 |   while (!stopping) {
131 |     try {
132 |       const job = await jobs.claim(workerId).catch((error) => {
133 |         recordWorkerClaimFailure(metrics, 'courier_sync');
134 |         throw error;
135 |       });
136 |       if (!job) {
137 |         await new Promise((resolve) => setTimeout(resolve, pollMs));
138 |         continue;
139 |       }
140 |       activeHeartbeat = new LeaseHeartbeat({
141 |         intervalMs: leaseRenewMs,
142 |         renew: (at) => jobs.renew(job.id, workerId, at),
143 |       }).start();
144 |       let payload: ReturnType<typeof parsePayload>;
145 |       try {
146 |         payload = parsePayload(job.payload, job);
147 |       } catch (error) {
148 |         await activeHeartbeat.stop();
149 |         await jobs.failed(job.id, workerId, errorCode(error, 'INVALID_JOB_PAYLOAD'), false);
150 |         throw error;
151 |       }
152 |       await syncWorker.sync({
153 |         jobId: job.id,
154 |         storeId: job.storeId,
155 |         courierAccountId: job.courierAccountId,
156 |         provider: job.provider,
157 |         phone: payload.phone,
158 |         phoneHash: payload.phoneHash,
159 |         force: payload.force,
160 |         signal: activeHeartbeat.signal,
161 |       });
162 |       await activeHeartbeat.stopQuietly();
163 |       activeHeartbeat = null;
164 |     } catch (error) {
165 |       await activeHeartbeat?.stopQuietly();
166 |       activeHeartbeat = null;
167 |       log.error('courier.sync.worker.error', {
168 |         code: errorCode(error, 'WORKER_TICK_FAILED'),
169 |         worker_id: workerId,
170 |       });
171 |       await new Promise((resolve) => setTimeout(resolve, Math.min(pollMs, 5_000)));
172 |     }
173 |   }
174 |   await pool.end();
175 | }
176 |
177 | interface ObservationRow {
178 |   provider: 'steadfast' | 'pathao' | 'redx' | 'aggregator';
179 |   total_orders: number;
180 |   delivered_orders: number;
181 |   returned_orders: number;
182 |   cancelled_before_shipping: number;
183 |   success_rate: string | null;
184 |   confidence: string;
185 |   source_type: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
186 |   observed_at: Date;
187 |   expires_at: Date;
188 | }
189 |
190 | function parsePayload(
191 |   value: unknown,
192 |   job: ClaimedCourierJob,
193 | ): { phone: string; phoneHash: string; force: boolean } {
194 |   if (!value || typeof value !== 'object') throw invalidPayload('Courier job payload is invalid');
195 |   const row = value as Record<string, unknown>;
196 |   if (![row.phone, row.phoneHash].every((item) => typeof item === 'string')) {
197 |     throw invalidPayload('Courier job payload is incomplete');
198 |   }
199 |   if (typeof row.organizationId === 'string' && row.organizationId !== job.organizationId) {
200 |     throw invalidPayload('Courier job organization scope does not match the account');
201 |   }
202 |   if (typeof row.storeId === 'string' && row.storeId !== job.storeId) {
203 |     throw invalidPayload('Courier job store scope does not match the account');
204 |   }
205 |   if (typeof row.provider === 'string' && row.provider !== job.provider) {
206 |     throw invalidPayload('Courier job provider does not match the account');
207 |   }
208 |   return {
209 |     phone: String(row.phone),
210 |     phoneHash: String(row.phoneHash),
211 |     force: row.force === true,
212 |   };
213 | }
214 |
215 | function invalidPayload(message: string): Error & { code: string } {
216 |   return Object.assign(new Error(message), { code: 'INVALID_JOB_PAYLOAD' });
217 | }
218 |
219 | function errorCode(error: unknown, fallback: string): string {
220 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
221 | }
222 |
223 | function observationFromRow(row: ObservationRow): CourierObservation {
224 |   return {
225 |     provider: row.provider,
226 |     totalOrders: row.total_orders,
227 |     deliveredOrders: row.delivered_orders,
228 |     returnedOrders: row.returned_orders,
229 |     cancelledBeforeShipping: row.cancelled_before_shipping,
230 |     successRate: row.success_rate === null ? null : Number(row.success_rate),
231 |     confidence: Number(row.confidence),
232 |     source: row.source_type,
233 |     observedAt: row.observed_at.toISOString(),
234 |     expiresAt: row.expires_at.toISOString(),
235 |   };
236 | }
237 |
238 | const stop = (): void => {
239 |   stopping = true;
240 | };
241 | process.once('SIGTERM', stop);
242 | process.once('SIGINT', stop);
243 | await run();
244 |
```

### workers/event-worker/src/index.test.ts

Bytes: 7140
SHA-256: 035a22507743563aa60ececedb9118eda40b6abd34e356c4cbf4e407ce0e7625
Lines: 1-209 of 209

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
 81 |     const ticks = [100, 125];
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
116 |         name: 'ozzyl.worker.operations',
117 |         value: 1,
118 |         attributes: {
119 |           worker_type: 'webhook_delivery',
120 |           operation: 'deliver',
121 |           outcome: 'completed',
122 |         },
123 |       }),
124 |       expect.objectContaining({
125 |         name: 'ozzyl.worker.operation.duration',
126 |         value: 25,
127 |         unit: 'ms',
128 |         attributes: {
129 |           worker_type: 'webhook_delivery',
130 |           operation: 'deliver',
131 |           outcome: 'completed',
132 |         },
133 |       }),
134 |     ]);
135 |     expect(metricLines.join('\n')).not.toContain('evt_1');
136 |     expect(metricLines.join('\n')).not.toContain('we_1');
137 |   });
138 |
139 |   it('fails an unsafe destination without retrying or fetching', async () => {
140 |     const isolatedRepository = {
141 |       markDelivered: vi.fn(async () => undefined),
142 |       markRetry: vi.fn(async () => undefined),
143 |       markFailed: vi.fn(async () => undefined),
144 |     };
145 |     const fetcher = vi.fn<typeof fetch>();
146 |     const worker = new EventWorker(isolatedRepository, { fetcher, resolver: publicResolver });
147 |     const result = await worker.deliver({
148 |       endpoint: {
149 |         id: 'we_unsafe',
150 |         url: 'https://127.0.0.1/hook',
151 |         signingSecret: 'x'.repeat(32),
152 |         active: true,
153 |       },
154 |       event,
155 |       attempt: 1,
156 |     });
157 |     expect(result).toEqual({
158 |       status: 'failed',
159 |       errorCode: 'UNSAFE_WEBHOOK_DESTINATION',
160 |     });
161 |     expect(fetcher).not.toHaveBeenCalled();
162 |     expect(isolatedRepository.markRetry).not.toHaveBeenCalled();
163 |     expect(isolatedRepository.markFailed).toHaveBeenCalledOnce();
164 |   });
165 |
166 |   it('aborts an active webhook request when the worker lease is lost', async () => {
167 |     const isolatedRepository = {
168 |       markDelivered: vi.fn(async () => undefined),
169 |       markRetry: vi.fn(async () => undefined),
170 |       markFailed: vi.fn(async () => undefined),
171 |     };
172 |     const fetcher = vi.fn<typeof fetch>().mockImplementation(
173 |       async (_url, init) =>
174 |         new Promise<Response>((_resolve, reject) => {
175 |           const abort = (): void => reject(new DOMException('Aborted', 'AbortError'));
176 |           if (init?.signal?.aborted) abort();
177 |           else init?.signal?.addEventListener('abort', abort, { once: true });
178 |         }),
179 |     );
180 |     const worker = new EventWorker(isolatedRepository, {
181 |       fetcher,
182 |       resolver: publicResolver,
183 |       timeoutMs: 60_000,
184 |       now: () => new Date('2026-07-17T00:00:00.000Z'),
185 |     });
186 |     const controller = new AbortController();
187 |     const result = worker.deliver({
188 |       endpoint: {
189 |         id: 'we_lease',
190 |         url: 'https://merchant.example/hook',
191 |         signingSecret: 'x'.repeat(32),
192 |         active: true,
193 |       },
194 |       event,
195 |       attempt: 1,
196 |       signal: controller.signal,
197 |     });
198 |
199 |     controller.abort(
200 |       Object.assign(new Error('lease lost'), { code: 'WEBHOOK_DELIVERY_LEASE_LOST' }),
201 |     );
202 |     await expect(result).resolves.toMatchObject({
203 |       status: 'retry_scheduled',
204 |       errorCode: 'TIMEOUT',
205 |     });
206 |     expect(isolatedRepository.markRetry).toHaveBeenCalledOnce();
207 |   });
208 | });
209 |
```

### workers/event-worker/src/index.ts

Bytes: 11487
SHA-256: 99c9b85f9d5bdcbe9aadde8328a00d3bae3e3038b053c0fe634c63333f197454
Lines: 1-347 of 347

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { lookup } from 'node:dns/promises';
  3 | import { isIP } from 'node:net';
  4 | import { recordWorkerOperation, type MetricRecorder } from '@ozzyl/observability';
  5 | import type { DomainEvent } from '@ozzyl/shared-types';
  6 |
  7 | export interface WebhookEndpoint {
  8 |   id: string;
  9 |   url: string;
 10 |   signingSecret: string;
 11 |   active: boolean;
 12 | }
 13 |
 14 | export interface WebhookDeliveryInput {
 15 |   endpoint: WebhookEndpoint;
 16 |   event: DomainEvent;
 17 |   attempt: number;
 18 |   signal?: AbortSignal;
 19 | }
 20 |
 21 | export interface DeliveryResult {
 22 |   status: 'delivered' | 'retry_scheduled' | 'failed';
 23 |   responseStatus?: number;
 24 |   nextAttemptAt?: string;
 25 |   errorCode?: string;
 26 | }
 27 |
 28 | export interface WebhookDeliveryRepository {
 29 |   markDelivered(input: {
 30 |     endpointId: string;
 31 |     eventId: string;
 32 |     responseStatus: number;
 33 |     at: Date;
 34 |   }): Promise<void>;
 35 |   markRetry(input: {
 36 |     endpointId: string;
 37 |     eventId: string;
 38 |     responseStatus?: number;
 39 |     errorCode: string;
 40 |     nextAttemptAt: Date;
 41 |     at: Date;
 42 |   }): Promise<void>;
 43 |   markFailed(input: {
 44 |     endpointId: string;
 45 |     eventId: string;
 46 |     responseStatus?: number;
 47 |     errorCode: string;
 48 |     at: Date;
 49 |   }): Promise<void>;
 50 | }
 51 |
 52 | export type WebhookDestinationResolver = (hostname: string) => Promise<readonly string[]>;
 53 |
 54 | export class WebhookDestinationError extends Error {
 55 |   readonly code = 'UNSAFE_WEBHOOK_DESTINATION';
 56 | }
 57 |
 58 | export class WebhookResolutionError extends Error {
 59 |   readonly code = 'WEBHOOK_DNS_RESOLUTION_FAILED';
 60 | }
 61 |
 62 | export function assertSafeWebhookUrl(rawUrl: string): URL {
 63 |   let url: URL;
 64 |   try {
 65 |     url = new URL(rawUrl);
 66 |   } catch {
 67 |     throw new WebhookDestinationError('Webhook endpoint URL is invalid');
 68 |   }
 69 |   if (url.protocol !== 'https:') {
 70 |     throw new WebhookDestinationError('Webhook endpoints must use HTTPS');
 71 |   }
 72 |   const hostname = normalizedHostname(url.hostname);
 73 |   if (hostname === 'localhost' || hostname.endsWith('.localhost') || hostname.endsWith('.local')) {
 74 |     throw new WebhookDestinationError('Local webhook destinations are not allowed');
 75 |   }
 76 |   if (isIP(hostname) && isNonPublicIp(hostname)) {
 77 |     throw new WebhookDestinationError('Non-public IP webhook destinations are not allowed');
 78 |   }
 79 |   if (hostname === 'metadata.google.internal') {
 80 |     throw new WebhookDestinationError('Metadata service destinations are not allowed');
 81 |   }
 82 |   if (url.username || url.password) {
 83 |     throw new WebhookDestinationError('Webhook URLs must not contain credentials');
 84 |   }
 85 |   return url;
 86 | }
 87 |
 88 | export async function assertSafeWebhookDestination(
 89 |   rawUrl: string,
 90 |   resolver: WebhookDestinationResolver = resolveHostname,
 91 | ): Promise<URL> {
 92 |   const url = assertSafeWebhookUrl(rawUrl);
 93 |   const hostname = normalizedHostname(url.hostname);
 94 |   let addresses: readonly string[];
 95 |   try {
 96 |     addresses = await resolver(hostname);
 97 |   } catch {
 98 |     throw new WebhookResolutionError('Webhook destination DNS resolution failed');
 99 |   }
100 |   if (addresses.length === 0) {
101 |     throw new WebhookResolutionError('Webhook destination did not resolve to an address');
102 |   }
103 |   if (addresses.some((address) => !isIP(address) || isNonPublicIp(address))) {
104 |     throw new WebhookDestinationError('Webhook destination resolved to a non-public address');
105 |   }
106 |   return url;
107 | }
108 |
109 | export function signWebhook(payload: string, timestamp: string, secret: string): string {
110 |   return `v1=${createHmac('sha256', secret).update(`${timestamp}.${payload}`).digest('hex')}`;
111 | }
112 |
113 | export class EventWorker {
114 |   private readonly fetcher: typeof fetch;
115 |   private readonly timeoutMs: number;
116 |   private readonly maxAttempts: number;
117 |   private readonly now: () => Date;
118 |   private readonly resolver: WebhookDestinationResolver;
119 |   private readonly metrics: MetricRecorder | undefined;
120 |   private readonly monotonicNow: () => number;
121 |
122 |   constructor(
123 |     private readonly repository: WebhookDeliveryRepository,
124 |     options?: {
125 |       fetcher?: typeof fetch;
126 |       timeoutMs?: number;
127 |       maxAttempts?: number;
128 |       now?: () => Date;
129 |       resolver?: WebhookDestinationResolver;
130 |       metrics?: MetricRecorder;
131 |       monotonicNow?: () => number;
132 |     },
133 |   ) {
134 |     this.fetcher = options?.fetcher ?? fetch;
135 |     this.timeoutMs = options?.timeoutMs ?? 5_000;
136 |     this.maxAttempts = options?.maxAttempts ?? 5;
137 |     this.now = options?.now ?? (() => new Date());
138 |     this.resolver = options?.resolver ?? resolveHostname;
139 |     this.metrics = options?.metrics;
140 |     this.monotonicNow = options?.monotonicNow ?? (() => Date.now());
141 |   }
142 |
143 |   async deliver(input: WebhookDeliveryInput): Promise<DeliveryResult> {
144 |     const startedAt = this.monotonicNow();
145 |     try {
146 |       const result = await this.deliverInternal(input);
147 |       recordWorkerOperation(this.metrics, {
148 |         workerType: 'webhook_delivery',
149 |         operation: 'deliver',
150 |         outcome:
151 |           result.status === 'delivered'
152 |             ? 'completed'
153 |             : result.status === 'retry_scheduled'
154 |               ? 'retry_scheduled'
155 |               : 'failed',
156 |         durationMs: this.monotonicNow() - startedAt,
157 |       });
158 |       return result;
159 |     } catch (error) {
160 |       recordWorkerOperation(this.metrics, {
161 |         workerType: 'webhook_delivery',
162 |         operation: 'deliver',
163 |         outcome: 'failed',
164 |         durationMs: this.monotonicNow() - startedAt,
165 |       });
166 |       throw error;
167 |     }
168 |   }
169 |
170 |   private async deliverInternal(input: WebhookDeliveryInput): Promise<DeliveryResult> {
171 |     if (!input.endpoint.active) {
172 |       await this.repository.markFailed({
173 |         endpointId: input.endpoint.id,
174 |         eventId: input.event.id,
175 |         errorCode: 'ENDPOINT_INACTIVE',
176 |         at: this.now(),
177 |       });
178 |       return { status: 'failed', errorCode: 'ENDPOINT_INACTIVE' };
179 |     }
180 |
181 |     let url: URL;
182 |     try {
183 |       url = await assertSafeWebhookDestination(input.endpoint.url, this.resolver);
184 |     } catch (error) {
185 |       return this.retryOrFail({
186 |         endpointId: input.endpoint.id,
187 |         eventId: input.event.id,
188 |         attempt: input.attempt,
189 |         errorCode:
190 |           error instanceof WebhookDestinationError || error instanceof WebhookResolutionError
191 |             ? error.code
192 |             : 'UNSAFE_WEBHOOK_DESTINATION',
193 |         retryable: error instanceof WebhookResolutionError,
194 |       });
195 |     }
196 |
197 |     const payload = JSON.stringify(input.event);
198 |     const timestamp = String(Math.floor(this.now().getTime() / 1_000));
199 |     const controller = new AbortController();
200 |     const abortFromCaller = (): void => controller.abort(input.signal?.reason);
201 |     if (input.signal?.aborted) abortFromCaller();
202 |     else input.signal?.addEventListener('abort', abortFromCaller, { once: true });
203 |     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
204 |
205 |     try {
206 |       const response = await this.fetcher(url, {
207 |         method: 'POST',
208 |         redirect: 'error',
209 |         signal: controller.signal,
210 |         headers: {
211 |           'Content-Type': 'application/json',
212 |           'User-Agent': 'Ozzyl-Guard-Webhooks/1.0',
213 |           'X-Ozzyl-Event': input.event.type,
214 |           'X-Ozzyl-Timestamp': timestamp,
215 |           'X-Ozzyl-Signature': signWebhook(payload, timestamp, input.endpoint.signingSecret),
216 |         },
217 |         body: payload,
218 |       });
219 |
220 |       if (response.ok) {
221 |         await this.repository.markDelivered({
222 |           endpointId: input.endpoint.id,
223 |           eventId: input.event.id,
224 |           responseStatus: response.status,
225 |           at: this.now(),
226 |         });
227 |         return { status: 'delivered', responseStatus: response.status };
228 |       }
229 |
230 |       return this.retryOrFail({
231 |         endpointId: input.endpoint.id,
232 |         eventId: input.event.id,
233 |         attempt: input.attempt,
234 |         responseStatus: response.status,
235 |         errorCode: response.status === 429 ? 'RATE_LIMITED' : `HTTP_${response.status}`,
236 |         retryable: response.status === 408 || response.status === 429 || response.status >= 500,
237 |       });
238 |     } catch (error) {
239 |       const errorCode =
240 |         error instanceof Error && error.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK_ERROR';
241 |       return this.retryOrFail({
242 |         endpointId: input.endpoint.id,
243 |         eventId: input.event.id,
244 |         attempt: input.attempt,
245 |         errorCode,
246 |         retryable: true,
247 |       });
248 |     } finally {
249 |       clearTimeout(timeout);
250 |       input.signal?.removeEventListener('abort', abortFromCaller);
251 |     }
252 |   }
253 |
254 |   private async retryOrFail(input: {
255 |     endpointId: string;
256 |     eventId: string;
257 |     attempt: number;
258 |     responseStatus?: number;
259 |     errorCode: string;
260 |     retryable: boolean;
261 |   }): Promise<DeliveryResult> {
262 |     const at = this.now();
263 |     if (input.retryable && input.attempt < this.maxAttempts) {
264 |       const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, input.attempt - 1) * 30_000);
265 |       const nextAttemptAt = new Date(at.getTime() + delayMs);
266 |       await this.repository.markRetry({
267 |         endpointId: input.endpointId,
268 |         eventId: input.eventId,
269 |         ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
270 |         errorCode: input.errorCode,
271 |         nextAttemptAt,
272 |         at,
273 |       });
274 |       return {
275 |         status: 'retry_scheduled',
276 |         ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
277 |         nextAttemptAt: nextAttemptAt.toISOString(),
278 |         errorCode: input.errorCode,
279 |       };
280 |     }
281 |
282 |     await this.repository.markFailed({
283 |       endpointId: input.endpointId,
284 |       eventId: input.eventId,
285 |       ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
286 |       errorCode: input.errorCode,
287 |       at,
288 |     });
289 |     return {
290 |       status: 'failed',
291 |       ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
292 |       errorCode: input.errorCode,
293 |     };
294 |   }
295 | }
296 |
297 | async function resolveHostname(hostname: string): Promise<readonly string[]> {
298 |   if (isIP(hostname)) return [hostname];
299 |   const records = await lookup(hostname, { all: true, verbatim: true });
300 |   return records.map((record) => record.address);
301 | }
302 |
303 | function normalizedHostname(hostname: string): string {
304 |   return hostname.toLowerCase().replace(/^\[/, '').replace(/\]$/, '');
305 | }
306 |
307 | function isNonPublicIp(address: string): boolean {
308 |   const version = isIP(address);
309 |   if (version === 4) {
310 |     const parts = address.split('.').map(Number);
311 |     const [first, second, third] = parts;
312 |     if (parts.length !== 4 || first === undefined || second === undefined || third === undefined) {
313 |       return true;
314 |     }
315 |     return (
316 |       first === 0 ||
317 |       first === 10 ||
318 |       first === 127 ||
319 |       (first === 100 && second >= 64 && second <= 127) ||
320 |       (first === 169 && second === 254) ||
321 |       (first === 172 && second >= 16 && second <= 31) ||
322 |       (first === 192 && second === 0 && third === 0) ||
323 |       (first === 192 && second === 0 && third === 2) ||
324 |       (first === 192 && second === 168) ||
325 |       (first === 198 && (second === 18 || second === 19)) ||
326 |       (first === 198 && second === 51 && third === 100) ||
327 |       (first === 203 && second === 0 && third === 113) ||
328 |       first >= 224
329 |     );
330 |   }
331 |   if (version === 6) {
332 |     const normalized = address.toLowerCase();
333 |     const mappedIpv4 = normalized.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/)?.[1];
334 |     if (mappedIpv4) return isNonPublicIp(mappedIpv4);
335 |     return (
336 |       normalized === '::' ||
337 |       normalized === '::1' ||
338 |       normalized.startsWith('fc') ||
339 |       normalized.startsWith('fd') ||
340 |       /^fe[89ab]/.test(normalized) ||
341 |       normalized.startsWith('ff') ||
342 |       normalized.startsWith('2001:db8:')
343 |     );
344 |   }
345 |   return true;
346 | }
347 |
```

### workers/event-worker/src/runner.ts

Bytes: 6839
SHA-256: 8a8df7f1f20fe9541379240049504c22cb9018d2886d1be342f1e6eab988f6c2
Lines: 1-210 of 210

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import { LeaseHeartbeat } from '@ozzyl/database';
  4 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  5 | import {
  6 |   createMetricRecorder,
  7 |   createStructuredLogger,
  8 |   recordWorkerClaimFailure,
  9 | } from '@ozzyl/observability';
 10 | import type { DomainEvent } from '@ozzyl/shared-types';
 11 | import { EventWorker } from './index.js';
 12 | import {
 13 |   PostgresWebhookDeliveryQueue,
 14 |   WebhookDeliveryLeaseError,
 15 |   type ClaimedWebhookDelivery,
 16 | } from './postgres.js';
 17 |
 18 | const required = (name: string): string => {
 19 |   const value = process.env[name];
 20 |   if (!value) throw new Error(`${name} is required`);
 21 |   return value;
 22 | };
 23 |
 24 | const positiveInteger = (name: string, fallback: number): number => {
 25 |   const value = Number(process.env[name] ?? fallback);
 26 |   if (!Number.isSafeInteger(value) || value <= 0) {
 27 |     throw new Error(`${name} must be a positive integer`);
 28 |   }
 29 |   return value;
 30 | };
 31 |
 32 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 33 | const cipher = new AesGcmEnvelopeCipher(
 34 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 35 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 36 | );
 37 | const pollMs = positiveInteger('EVENT_WORKER_POLL_MS', 5_000);
 38 | const leaseMs = positiveInteger('EVENT_WORKER_LEASE_MS', 60_000);
 39 | const leaseRenewMs = positiveInteger('EVENT_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
 40 | const timeoutMs = positiveInteger('WEBHOOK_TIMEOUT_MS', 5_000);
 41 | const maxAttempts = positiveInteger('EVENT_WORKER_MAX_ATTEMPTS', 5);
 42 | if (leaseMs <= timeoutMs + 5_000) {
 43 |   throw new Error('EVENT_WORKER_LEASE_MS must exceed WEBHOOK_TIMEOUT_MS by more than 5000ms');
 44 | }
 45 | if (leaseRenewMs * 2 > leaseMs) {
 46 |   throw new Error('EVENT_WORKER_LEASE_RENEW_MS must not exceed half the lease');
 47 | }
 48 | const workerId = process.env.EVENT_WORKER_ID ?? `event-${randomUUID()}`;
 49 | const log = createStructuredLogger({
 50 |   service: 'event-worker',
 51 |   environment: process.env.NODE_ENV ?? 'development',
 52 | });
 53 | const metrics = createMetricRecorder({
 54 |   service: 'event-worker',
 55 |   environment: process.env.NODE_ENV ?? 'development',
 56 | });
 57 | const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs, maxAttempts });
 58 | let stopping = false;
 59 |
 60 | async function run(): Promise<void> {
 61 |   log.info('event.worker.started', { worker_id: workerId });
 62 |   while (!stopping) {
 63 |     const delivery = await queue.claim(workerId).catch((error) => {
 64 |       recordWorkerClaimFailure(metrics, 'webhook_delivery');
 65 |       logError(error, 'EVENT_CLAIM_FAILED');
 66 |       return null;
 67 |     });
 68 |     if (!delivery) {
 69 |       await sleep(pollMs);
 70 |       continue;
 71 |     }
 72 |
 73 |     let heartbeat: LeaseHeartbeat | null = null;
 74 |     try {
 75 |       const startedAt = new Date();
 76 |       await queue.started(delivery.id, workerId, startedAt);
 77 |       heartbeat = new LeaseHeartbeat({
 78 |         intervalMs: leaseRenewMs,
 79 |         renew: (at) => queue.renew(delivery.id, workerId, at),
 80 |       }).start();
 81 |       const event = parseEvent(delivery);
 82 |       if (!delivery.endpointActive) {
 83 |         await heartbeat.stop();
 84 |         await queue.failed(delivery.id, workerId, {
 85 |           errorCode: 'ENDPOINT_INACTIVE',
 86 |           at: new Date(),
 87 |         });
 88 |         heartbeat = null;
 89 |         continue;
 90 |       }
 91 |       const signingSecret= [REDACTED_SECRET](delivery);
 92 |       const worker = new EventWorker(
 93 |         queue.repositoryFor(delivery, workerId, () => heartbeat?.stop() ?? Promise.resolve()),
 94 |         {
 95 |           timeoutMs,
 96 |           maxAttempts,
 97 |           metrics,
 98 |         },
 99 |       );
100 |       await worker.deliver({
101 |         endpoint: {
102 |           id: delivery.endpointId,
103 |           url: delivery.endpointUrl,
104 |           signingSecret,
105 |           active: true,
106 |         },
107 |         event,
108 |         attempt: delivery.attempts + 1,
109 |         signal: heartbeat.signal,
110 |       });
111 |       await heartbeat.stopQuietly();
112 |       heartbeat = null;
113 |     } catch (error) {
114 |       let failure = error;
115 |       if (heartbeat) {
116 |         try {
117 |           await heartbeat.stop();
118 |         } catch (leaseError) {
119 |           failure = leaseError;
120 |         }
121 |         heartbeat = null;
122 |       }
123 |       if (!(failure instanceof WebhookDeliveryLeaseError)) {
124 |         const code = errorCode(failure, 'EVENT_DELIVERY_FAILED');
125 |         await queue
126 |           .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
127 |           .catch((stateError) => logError(stateError, 'EVENT_FAILURE_STATE_LOST'));
128 |       }
129 |       logError(failure, 'EVENT_DELIVERY_FAILED');
130 |     }
131 |   }
132 |   await pool.end();
133 | }
134 |
135 | function parseEvent(delivery: ClaimedWebhookDelivery): DomainEvent {
136 |   const value = delivery.eventPayload;
137 |   if (!value || typeof value !== 'object') throw coded('INVALID_EVENT_PAYLOAD');
138 |   const event = value as Record<string, unknown>;
139 |   const allowedTypes = new Set([
140 |     'assessment.completed',
141 |     'verification.verified',
142 |     'verification.failed',
143 |     'courier.connection_failed',
144 |     'order.outcome_recorded',
145 |     'usage.limit_warning',
146 |   ]);
147 |   if (
148 |     event.id !== delivery.eventId ||
149 |     event.type !== delivery.eventType ||
150 |     typeof event.type !== 'string' ||
151 |     !allowedTypes.has(event.type) ||
152 |     event.organizationId !== delivery.organizationId ||
153 |     (delivery.storeId === null
154 |       ? event.storeId !== undefined
155 |       : event.storeId !== delivery.storeId) ||
156 |     typeof event.occurredAt !== 'string' ||
157 |     Number.isNaN(Date.parse(event.occurredAt)) ||
158 |     new Date(event.occurredAt).getTime() !== delivery.occurredAt.getTime() ||
159 |     !event.payload ||
160 |     typeof event.payload !== 'object'
161 |   ) {
162 |     throw coded('INVALID_EVENT_PAYLOAD');
163 |   }
164 |   return event as unknown as DomainEvent;
165 | }
166 |
167 | function decryptSigningSecret(delivery: ClaimedWebhookDelivery): string {
168 |   try {
169 |     const value = cipher.decrypt<unknown>(
170 |       delivery.secretEncrypted,
171 |       `webhook-endpoint:${delivery.endpointId}`,
172 |     );
173 |     const signingSecret =
174 |       typeof value === 'string'
175 |         ? value
176 |         : value && typeof value === 'object' && 'signingSecret' in value
177 |           ? String(value.signingSecret)
178 |           : '';
179 |     if (signingSecret.length < 16) throw new Error('Signing secret is invalid');
180 |     return signingSecret;
181 |   } catch {
182 |     throw coded('WEBHOOK_SECRET_DECRYPTION_FAILED');
183 |   }
184 | }
185 |
186 | function coded(code: string): Error & { code: string } {
187 |   return Object.assign(new Error(code), { code });
188 | }
189 |
190 | function errorCode(error: unknown, fallback: string): string {
191 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
192 | }
193 |
194 | function logError(error: unknown, fallback: string): void {
195 |   log.error('event.worker.error', {
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

### workers/verification-worker/src/index.test.ts

Bytes: 4731
SHA-256: ef93afaefd424ba6ba408d6f6df828140143de538f265cdc7ce09f3b0d54db10
Lines: 1-145 of 145

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
 33 |     const ticks = [10, 18];
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
 57 |         name: 'ozzyl.worker.operations',
 58 |         attributes: {
 59 |           worker_type: 'verification_delivery',
 60 |           operation: 'send',
 61 |           outcome: 'completed',
 62 |         },
 63 |       }),
 64 |       expect.objectContaining({
 65 |         name: 'ozzyl.worker.operation.duration',
 66 |         value: 8,
 67 |         attributes: {
 68 |           worker_type: 'verification_delivery',
 69 |           operation: 'send',
 70 |           outcome: 'completed',
 71 |         },
 72 |       }),
 73 |     ]);
 74 |     expect(metricLines.join('\n')).not.toContain('123456');
 75 |     expect(metricLines.join('\n')).not.toContain('ver_1');
 76 |   });
 77 |
 78 |   it('schedules retryable provider failures with bounded backoff', async () => {
 79 |     const state = reporter();
 80 |     const worker = new VerificationWorker(
 81 |       {
 82 |         async send() {
 83 |           throw new OtpProviderError('PROVIDER_UNAVAILABLE', true, 'temporary outage');
 84 |         },
 85 |       },
 86 |       state,
 87 |       { now: () => new Date('2026-07-17T10:00:00.000Z') },
 88 |     );
 89 |     const result = await worker.process(delivery);
 90 |     expect(result).toMatchObject({ status: 'retry_scheduled', errorCode: 'PROVIDER_UNAVAILABLE' });
 91 |     expect(state.retry).toHaveBeenCalledOnce();
 92 |     expect(state.failed).not.toHaveBeenCalled();
 93 |   });
 94 |
 95 |   it('fails provider rejection without retrying', async () => {
 96 |     const state = reporter();
 97 |     const worker = new VerificationWorker(
 98 |       {
 99 |         async send() {
100 |           return { providerMessageId: 'rejected', accepted: false };
101 |         },
102 |       },
103 |       state,
104 |       { now: () => new Date('2026-07-17T10:00:00.000Z') },
105 |     );
106 |     await expect(worker.process(delivery)).resolves.toEqual({
107 |       status: 'failed',
108 |       errorCode: 'OTP_PROVIDER_REJECTED',
109 |     });
110 |     expect(state.failed).toHaveBeenCalledOnce();
111 |     expect(state.retry).not.toHaveBeenCalled();
112 |   });
113 |
114 |   it('aborts an active OTP request when the worker lease is lost', async () => {
115 |     const state = reporter();
116 |     const provider = {
117 |       send: vi.fn(
118 |         async ({ signal }: { signal?: AbortSignal }) =>
119 |           new Promise<{ providerMessageId: string; accepted: boolean }>((_resolve, reject) => {
120 |             signal?.addEventListener(
121 |               'abort',
122 |               () => reject(new DOMException('Aborted', 'AbortError')),
123 |               { once: true },
124 |             );
125 |           }),
126 |       ),
127 |     };
128 |     const worker = new VerificationWorker(provider, state, {
129 |       timeoutMs: 60_000,
130 |       now: () => new Date('2026-07-17T10:00:00.000Z'),
131 |     });
132 |     const controller = new AbortController();
133 |     const result = worker.process({ ...delivery, signal: controller.signal });
134 |
135 |     controller.abort(
136 |       Object.assign(new Error('lease lost'), { code: 'VERIFICATION_DELIVERY_LEASE_LOST' }),
137 |     );
138 |     await expect(result).resolves.toMatchObject({
139 |       status: 'retry_scheduled',
140 |       errorCode: 'OTP_PROVIDER_TIMEOUT',
141 |     });
142 |     expect(state.retry).toHaveBeenCalledOnce();
143 |   });
144 | });
145 |
```

### workers/verification-worker/src/index.ts

Bytes: 5219
SHA-256: 18dedd0d5d4971a0f1b83fb7fb3f568b1a1ee7dab560cbbc93d4d55c62743685
Lines: 1-138 of 138

```typescript
  1 | import { recordWorkerOperation, type MetricRecorder } from '@ozzyl/observability';
  2 | import { OtpProviderError, formatOtpMessage, type OtpDeliveryProvider } from '@ozzyl/verification';
  3 |
  4 | export interface VerificationDelivery {
  5 |   jobId: string;
  6 |   verificationId: string;
  7 |   organizationId: string;
  8 |   storeId: string;
  9 |   phone: string;
 10 |   otp: string;
 11 |   purpose: string;
 12 |   expiresAt: Date;
 13 |   attempt: number;
 14 |   signal?: AbortSignal;
 15 | }
 16 |
 17 | export interface VerificationDeliveryReporter {
 18 |   delivered(jobId: string, providerMessageId: string, at: Date): Promise<void>;
 19 |   retry(jobId: string, errorCode: string, nextAttemptAt: Date, at: Date): Promise<void>;
 20 |   failed(jobId: string, errorCode: string, at: Date): Promise<void>;
 21 | }
 22 |
 23 | export type VerificationDeliveryResult =
 24 |   | { status: 'delivered'; providerMessageId: string }
 25 |   | { status: 'retry_scheduled'; errorCode: string; nextAttemptAt: string }
 26 |   | { status: 'failed'; errorCode: string };
 27 |
 28 | export class VerificationWorker {
 29 |   private readonly maxAttempts: number;
 30 |   private readonly timeoutMs: number;
 31 |   private readonly now: () => Date;
 32 |   private readonly metrics: MetricRecorder | undefined;
 33 |   private readonly monotonicNow: () => number;
 34 |
 35 |   constructor(
 36 |     private readonly provider: OtpDeliveryProvider,
 37 |     private readonly reporter: VerificationDeliveryReporter,
 38 |     options: {
 39 |       maxAttempts?: number;
 40 |       timeoutMs?: number;
 41 |       now?: () => Date;
 42 |       metrics?: MetricRecorder;
 43 |       monotonicNow?: () => number;
 44 |     } = {},
 45 |   ) {
 46 |     this.maxAttempts = options.maxAttempts ?? 5;
 47 |     this.timeoutMs = options.timeoutMs ?? 10_000;
 48 |     this.now = options.now ?? (() => new Date());
 49 |     this.metrics = options.metrics;
 50 |     this.monotonicNow = options.monotonicNow ?? (() => Date.now());
 51 |   }
 52 |
 53 |   async process(delivery: VerificationDelivery): Promise<VerificationDeliveryResult> {
 54 |     const monotonicStartedAt = this.monotonicNow();
 55 |     try {
 56 |       const result = await this.processDelivery(delivery);
 57 |       recordWorkerOperation(this.metrics, {
 58 |         workerType: 'verification_delivery',
 59 |         operation: 'send',
 60 |         outcome:
 61 |           result.status === 'delivered'
 62 |             ? 'completed'
 63 |             : result.status === 'retry_scheduled'
 64 |               ? 'retry_scheduled'
 65 |               : 'failed',
 66 |         durationMs: this.monotonicNow() - monotonicStartedAt,
 67 |       });
 68 |       return result;
 69 |     } catch (error) {
 70 |       recordWorkerOperation(this.metrics, {
 71 |         workerType: 'verification_delivery',
 72 |         operation: 'send',
 73 |         outcome: 'failed',
 74 |         durationMs: this.monotonicNow() - monotonicStartedAt,
 75 |       });
 76 |       throw error;
 77 |     }
 78 |   }
 79 |
 80 |   private async processDelivery(
 81 |     delivery: VerificationDelivery,
 82 |   ): Promise<VerificationDeliveryResult> {
 83 |     const startedAt = this.now();
 84 |     if (delivery.expiresAt.getTime() <= startedAt.getTime() + this.timeoutMs) {
 85 |       await this.reporter.failed(delivery.jobId, 'OTP_EXPIRED_BEFORE_DELIVERY', startedAt);
 86 |       return { status: 'failed', errorCode: 'OTP_EXPIRED_BEFORE_DELIVERY' };
 87 |     }
 88 |
 89 |     const controller = new AbortController();
 90 |     const abortFromCaller = (): void => controller.abort(delivery.signal?.reason);
 91 |     if (delivery.signal?.aborted) abortFromCaller();
 92 |     else delivery.signal?.addEventListener('abort', abortFromCaller, { once: true });
 93 |     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
 94 |     try {
 95 |       const result = await this.provider.send({
 96 |         phone: delivery.phone,
 97 |         message: formatOtpMessage(delivery.otp),
 98 |         idempotencyKey: delivery.verificationId,
 99 |         signal: controller.signal,
100 |       });
101 |       if (!result.accepted) {
102 |         await this.reporter.failed(delivery.jobId, 'OTP_PROVIDER_REJECTED', this.now());
103 |         return { status: 'failed', errorCode: 'OTP_PROVIDER_REJECTED' };
104 |       }
105 |       await this.reporter.delivered(delivery.jobId, result.providerMessageId, this.now());
106 |       return { status: 'delivered', providerMessageId: result.providerMessageId };
107 |     } catch (error) {
108 |       const classified = classifyProviderError(error);
109 |       const at = this.now();
110 |       if (classified.retryable && delivery.attempt < this.maxAttempts) {
111 |         const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, delivery.attempt - 1) * 30_000);
112 |         const nextAttemptAt = new Date(at.getTime() + delayMs);
113 |         await this.reporter.retry(delivery.jobId, classified.code, nextAttemptAt, at);
114 |         return {
115 |           status: 'retry_scheduled',
116 |           errorCode: classified.code,
117 |           nextAttemptAt: nextAttemptAt.toISOString(),
118 |         };
119 |       }
120 |       await this.reporter.failed(delivery.jobId, classified.code, at);
121 |       return { status: 'failed', errorCode: classified.code };
122 |     } finally {
123 |       clearTimeout(timeout);
124 |       delivery.signal?.removeEventListener('abort', abortFromCaller);
125 |     }
126 |   }
127 | }
128 |
129 | function classifyProviderError(error: unknown): { code: string; retryable: boolean } {
130 |   if (error instanceof OtpProviderError) {
131 |     return { code: error.code, retryable: error.retryable };
132 |   }
133 |   if (error instanceof Error && error.name === 'AbortError') {
134 |     return { code: 'OTP_PROVIDER_TIMEOUT', retryable: true };
135 |   }
136 |   return { code: 'OTP_PROVIDER_ERROR', retryable: true };
137 | }
138 |
```

### workers/verification-worker/src/runner.ts

Bytes: 5873
SHA-256: 77a64870a0882072539e838650f61210d155d822bc9a302716a2f37fdeb1d35e
Lines: 1-165 of 165

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import { LeaseHeartbeat } from '@ozzyl/database';
  4 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  5 | import {
  6 |   createMetricRecorder,
  7 |   createStructuredLogger,
  8 |   recordWorkerClaimFailure,
  9 | } from '@ozzyl/observability';
 10 | import type { OtpDeliveryProvider } from '@ozzyl/verification';
 11 | import { VerificationWorker } from './index.js';
 12 | import { PostgresVerificationDeliveryQueue, VerificationDeliveryLeaseError } from './postgres.js';
 13 | import { decryptAndValidateVerificationPayload } from './payload.js';
 14 |
 15 | const required = (name: string): string => {
 16 |   const value = process.env[name];
 17 |   if (!value) throw new Error(`${name} is required`);
 18 |   return value;
 19 | };
 20 |
 21 | const positiveInteger = (name: string, fallback: number): number => {
 22 |   const value = Number(process.env[name] ?? fallback);
 23 |   if (!Number.isSafeInteger(value) || value <= 0)
 24 |     throw new Error(`${name} must be a positive integer`);
 25 |   return value;
 26 | };
 27 |
 28 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 29 | const cipher = new AesGcmEnvelopeCipher(
 30 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 31 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 32 | );
 33 | const otpSecret = required('OTP_HASH_SECRET');
 34 | const phoneHmacKey = required('PHONE_HMAC_KEY');
 35 | const pollMs = positiveInteger('VERIFICATION_WORKER_POLL_MS', 5_000);
 36 | const leaseMs = positiveInteger('VERIFICATION_WORKER_LEASE_MS', 60_000);
 37 | const leaseRenewMs = positiveInteger('VERIFICATION_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
 38 | const timeoutMs = positiveInteger('OTP_PROVIDER_TIMEOUT_MS', 10_000);
 39 | const maxAttempts = positiveInteger('VERIFICATION_WORKER_MAX_ATTEMPTS', 5);
 40 | if (leaseMs <= timeoutMs + 5_000) {
 41 |   throw new Error(
 42 |     'VERIFICATION_WORKER_LEASE_MS must exceed OTP_PROVIDER_TIMEOUT_MS by more than 5000ms',
 43 |   );
 44 | }
 45 | if (leaseRenewMs * 2 > leaseMs) {
 46 |   throw new Error('VERIFICATION_WORKER_LEASE_RENEW_MS must not exceed half the lease');
 47 | }
 48 | const workerId = process.env.VERIFICATION_WORKER_ID ?? `verification-${randomUUID()}`;
 49 | const log = createStructuredLogger({
 50 |   service: 'verification-worker',
 51 |   environment: process.env.NODE_ENV ?? 'development',
 52 | });
 53 | const metrics = createMetricRecorder({
 54 |   service: 'verification-worker',
 55 |   environment: process.env.NODE_ENV ?? 'development',
 56 | });
 57 | const provider = await loadProvider(required('OTP_PROVIDER_MODULE'));
 58 | const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs, maxAttempts });
 59 | let stopping = false;
 60 |
 61 | async function run(): Promise<void> {
 62 |   log.info('verification.worker.started', { worker_id: workerId });
 63 |   while (!stopping) {
 64 |     const delivery = await queue.claim(workerId).catch((error) => {
 65 |       recordWorkerClaimFailure(metrics, 'verification_delivery');
 66 |       logError(error, 'VERIFICATION_CLAIM_FAILED');
 67 |       return null;
 68 |     });
 69 |     if (!delivery) {
 70 |       await sleep(pollMs);
 71 |       continue;
 72 |     }
 73 |
 74 |     let heartbeat: LeaseHeartbeat | null = null;
 75 |     try {
 76 |       await queue.started(delivery.id, workerId);
 77 |       heartbeat = new LeaseHeartbeat({
 78 |         intervalMs: leaseRenewMs,
 79 |         renew: (at) => queue.renew(delivery.id, workerId, at),
 80 |       }).start();
 81 |       const payload = decryptAndValidateVerificationPayload(delivery, {
 82 |         cipher,
 83 |         phoneHmacKey,
 84 |         otpSecret,
 85 |       });
 86 |       const worker = new VerificationWorker(
 87 |         provider,
 88 |         queue.reporterFor(delivery, workerId, () => heartbeat?.stop() ?? Promise.resolve()),
 89 |         {
 90 |           maxAttempts,
 91 |           timeoutMs,
 92 |           metrics,
 93 |         },
 94 |       );
 95 |       await worker.process({
 96 |         jobId: delivery.id,
 97 |         verificationId: delivery.verificationId,
 98 |         organizationId: delivery.organizationId,
 99 |         storeId: delivery.storeId,
100 |         phone: payload.phone,
101 |         otp: payload.otp,
102 |         purpose: delivery.purpose,
103 |         expiresAt: delivery.expiresAt,
104 |         attempt: delivery.attempts + 1,
105 |         signal: heartbeat.signal,
106 |       });
107 |       await heartbeat.stopQuietly();
108 |       heartbeat = null;
109 |     } catch (error) {
110 |       let failure = error;
111 |       if (heartbeat) {
112 |         try {
113 |           await heartbeat.stop();
114 |         } catch (leaseError) {
115 |           failure = leaseError;
116 |         }
117 |         heartbeat = null;
118 |       }
119 |       if (!(failure instanceof VerificationDeliveryLeaseError)) {
120 |         const code = errorCode(failure, 'VERIFICATION_DELIVERY_FAILED');
121 |         await queue
122 |           .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
123 |           .catch((stateError) => logError(stateError, 'VERIFICATION_FAILURE_STATE_LOST'));
124 |       }
125 |       logError(failure, 'VERIFICATION_DELIVERY_FAILED');
126 |     }
127 |   }
128 |   await pool.end();
129 | }
130 |
131 | async function loadProvider(moduleName: string): Promise<OtpDeliveryProvider> {
132 |   const loaded = (await import(moduleName)) as {
133 |     createOtpDeliveryProvider?: () => OtpDeliveryProvider | Promise<OtpDeliveryProvider>;
134 |   };
135 |   if (typeof loaded.createOtpDeliveryProvider !== 'function') {
136 |     throw new Error('OTP provider module must export createOtpDeliveryProvider()');
137 |   }
138 |   const configured = await loaded.createOtpDeliveryProvider();
139 |   if (!configured || typeof configured.send !== 'function') {
140 |     throw new Error('OTP provider module returned an invalid provider');
141 |   }
142 |   return configured;
143 | }
144 |
145 | function errorCode(error: unknown, fallback: string): string {
146 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
147 | }
148 |
149 | function logError(error: unknown, fallback: string): void {
150 |   log.error('verification.worker.error', {
151 |     code: errorCode(error, fallback),
152 |     worker_id: workerId,
153 |   });
154 | }
155 |
156 | const sleep = (milliseconds: number): Promise<void> =>
157 |   new Promise((resolve) => setTimeout(resolve, milliseconds));
158 |
159 | const stop = (): void => {
160 |   stopping = true;
161 | };
162 | process.once('SIGTERM', stop);
163 | process.once('SIGINT', stop);
164 | await run();
165 |
```

## Skipped Files

None.
