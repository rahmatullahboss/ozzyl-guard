# Ozzyl Guard Continuation Context

Generated: 2026-07-28T00:21:05.297Z
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
│   │   └── durable-work-replay-ledger.md
│   ├── integrations/
│   │   └── integrations.md
│   ├── operations/
│   │   ├── browser-dead-letter-operations.md
│   │   ├── deployment.md
│   │   ├── development-environment.md
│   │   ├── durable-work-dead-letter-runbook.md
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
## feat/observability-structured-logging
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M .ai-bridge/pro-context.md
 M AGENTS.md
 M README.md
 M docs/operations/operations-observability.md
 M docs/testing/testing-strategy.md
 M package-lock.json
 M package.json
 M tracker.yml
 M workers/courier-session-worker/package.json
 M workers/courier-session-worker/src/runner.ts
 M workers/courier-sync-worker/package.json
 M workers/courier-sync-worker/src/runner.ts
 M workers/event-worker/package.json
 M workers/event-worker/src/runner.ts
 M workers/verification-worker/package.json
 M workers/verification-worker/src/runner.ts
?? packages/observability/
```

## Recent Commits

```text
b61af36 (HEAD -> feat/observability-structured-logging, origin/main, main) docs: sync browser dead-letter evidence
27cff21 feat: add browser dead-letter operations
57f7b3a docs: sync durable work dead-letter evidence
2d68620 feat: add durable work dead-letter operations
a028848 docs: sync selected source shadow pilot evidence (#21)
c478170 feat: wire selected source shadow pilot (#20)
de6f1eb docs: record native shadow verification evidence
446d6eb feat: add native shadow rollout controls
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
  7 | A runnable standalone MVP foundation and fourteen production-hardening slices are complete:
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
 22 | 14. a canonical vendor-neutral structured logging/redaction package integrated into all four private workers, with bounded serialization and telemetry-failure isolation.
 23 |
 24 | Concrete provider selection and provisioning remain external production work.
 25 |
 26 | ## Completed
 27 |
 28 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 29 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 30 | - [x] Canonical shared API/error/event contracts
 31 | - [x] PostgreSQL/Drizzle schema and twelve append-only migrations
 32 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 33 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 34 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 35 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 36 | - [x] Courier adapter contract and Steadfast normalized adapter
 37 | - [x] Playwright Steadfast session driver with structured errors
 38 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 39 | - [x] Runnable PostgreSQL courier session and observation workers
 40 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 41 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 42 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 43 | - [x] API OTP send returns queued work without provider network I/O
 44 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 45 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 46 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 47 | - [x] Explicit-role platform admin with live global operations data
 48 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 49 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 50 | - [x] Architecture dependency-boundary CI guard
 51 | - [x] Provider-neutral production deployment topology ADR
 52 | - [x] Managed PostgreSQL production baseline ADR
 53 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 54 | - [x] Managed secrets and KMS envelope-encryption ADR
 55 | - [x] Vendor-neutral OpenTelemetry observability ADR
 56 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 57 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 58 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 59 | - [x] Concurrent usage reservations cannot exceed the plan limit
 60 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 61 | - [x] Concurrent outcome writes resolve as one insert and one replay
 62 | - [x] Operation idempotency records remain isolated by organization and store
 63 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 64 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 65 | - [x] Expired or previous courier owners cannot complete or fail jobs
 66 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 67 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 68 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 69 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 70 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 71 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 72 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 73 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 74 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 75 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 76 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 77 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 78 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 79 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 80 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 81 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 82 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 83 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 84 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 85 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 86 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 87 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 88 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 89 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 90 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 91 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
 92 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
 93 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
 94 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
 95 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
 96 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
 97 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
 98 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
 99 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
100 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
101 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
102 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
103 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
104 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
105 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
106 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
107 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
108 |
109 | ## Verified baseline
110 |
111 | - Formatting check: passed
112 | - ESLint with zero warnings: passed
113 | - Twelve migration files ordered/non-empty/non-destructive: passed
114 | - First migration apply and immediate migration replay: passed
115 | - Architecture import boundaries: passed
116 | - Typecheck: 20 of 20 workspaces passed locally
117 | - Test/build dependency tasks: 31 of 31 passed locally
118 | - Repository assertion inventory: 132, including the previous 129 remotely verified assertions plus three structured-log redaction/serialization/failure-isolation tests; PostgreSQL-integrated source-branch CI remains pending
119 | - Production builds: 20 of 20 workspaces passed locally
120 | - WooCommerce PHP syntax: unchanged; source-branch CI validation remains pending
121 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
122 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
123 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
124 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
125 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
126 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
127 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
128 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
129 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
130 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
131 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
132 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
133 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
134 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
135 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
136 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
137 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
138 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
139 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
140 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
141 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
142 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
143 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
144 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
145 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
146 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
147 | - Canonical documentation links before this slice: zero known broken internal links
148 | - `tracker.yml` YAML structure remains valid
149 | - Prohibited source-pattern search: no matches
150 |
151 | The repository-local continuation exporter was refreshed after the observability milestone documentation was finalized, so the embedded snapshots match the current branch state.
152 |
153 | ## Next production milestone
154 |
155 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
156 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
157 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
158 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
159 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
160 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
161 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
162 |
163 | ## External blockers
164 |
165 | - Authorized Steadfast merchant/test credentials
166 | - Steadfast provider-terms and merchant-authorization review
167 | - Deployment platform, account, primary region, and budget
168 | - Managed PostgreSQL provider and service tier
169 | - Managed secret store and KMS/vault provider
170 | - Observability backend and retention policy
171 | - OTP provider account and credentials
172 | - Production account recovery/MFA or managed identity-provider decision
173 | - Repository visibility correction from currently reported public to expected private
174 | - Pilot outcome data for false-positive/false-negative calibration
175 |
176 | ## Non-negotiable continuation rules
177 |
178 | - Do not add a second risk engine.
179 | - Do not call providers from the risk engine or synchronous checkout path.
180 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
181 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
182 | - Do not use API keys as dashboard user sessions.
183 | - Require organization/store scope in all merchant repositories, events, and jobs.
184 | - Add new migrations; never edit applied migrations.
185 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
186 | - Keep Redis/cache state non-authoritative.
187 | - Keep unknown/provider failure explicit and policy-controlled.
188 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
189 |

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
48 |
49 | ## Source SaaS conflict resolutions
50 |
51 | | Conflict                                                                 | Decision                                                                                   |
52 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
53 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
54 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
55 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
56 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
57 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
58 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
59 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
60 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
61 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
62 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
63 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
64 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
65 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
66 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
67 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
68 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
69 |
70 | ## Approved reuse scope
71 |
72 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
73 | - Bangladesh phone normalization after tests
74 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
75 | - WooCommerce settings/order hook/admin display skeleton
76 | - API-key hash/display-prefix and usage-event concepts
77 |
78 | No product source code was copied during Phase 0.
79 |
80 | ## Pending decisions
81 |
82 | These require provider selection, provisioning, or separate ADRs before production implementation:
83 |
84 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
85 | - Specific deployment platform, account, and primary region
86 | - Specific managed PostgreSQL provider and service tier
87 | - Specific managed secret store and KMS/vault provider
88 | - Specific observability backend and retention policy
89 | - Redis-compatible cache provider when distributed coordination is required
90 | - Dedicated broker only if measured scale requires superseding ADR 0008
91 | - Worker scheduler/runtime implementation on the selected deployment platform
92 | - OTP provider
93 |
94 | ## External requirements
95 |
96 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
97 |
98 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
99 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, .ai-bridge/pro-context.md, AGENTS.md, README.md, docs/operations/operations-observability.md, docs/testing/testing-strategy.md, package-lock.json, package.json, tracker.yml, workers/courier-session-worker/package.json, workers/courier-session-worker/src/runner.ts, workers/courier-sync-worker/package.json, workers/courier-sync-worker/src/runner.ts, workers/event-worker/package.json, workers/event-worker/src/runner.ts, workers/verification-worker/package.json, workers/verification-worker/src/runner.ts, packages/observability/
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: tracker.yml, AGENTS.md, README.md, .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, .ai-bridge/decisions.md, docs/operations/operations-observability.md, docs/testing/testing-strategy.md, docs/roadmap/implementation-roadmap.md, docs/roadmap/initial-backlog.md, packages/observability/src/index.ts, packages/observability/src/index.test.ts
Extra globs: none
Files included below: AGENTS.md, README.md, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, docs/operations/operations-observability.md, docs/roadmap/implementation-roadmap.md, docs/roadmap/initial-backlog.md, docs/testing/testing-strategy.md, packages/observability/src/index.test.ts, packages/observability/src/index.ts, tracker.yml, eslint.config.js, package.json, turbo.json, workers/courier-session-worker/package.json, workers/courier-sync-worker/package.json, workers/event-worker/package.json, workers/verification-worker/package.json, package-lock.json, packages/observability/, workers/courier-session-worker/src/runner.ts, workers/courier-sync-worker/src/runner.ts, workers/event-worker/src/runner.ts, workers/verification-worker/src/runner.ts

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

### README.md

Bytes: 6975
SHA-256: a38e72ec81922f2cb4e59107dd9c03248336cfd80b9253f299eed284e877d7ef
Lines: 1-146 of 146

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
 27 | - PostgreSQL schema, twelve append-only migrations, committed SHA-256 manifest, and non-null history checksums
 28 | - Argon2id user-password utilities and opaque user sessions
 29 | - Hash-only `ozg_test_` / `ozg_live_` API-key lifecycle utilities
 30 | - Organizations, stores, memberships, plans, usage events, audit events, and tenant scope
 31 | - Canonical `/v1/risk-assessments`, assessment read, outcome feedback, courier refresh, and OTP routes
 32 | - Deterministic explainable risk engine with explicit unknown/degraded handling
 33 | - Steadfast adapter, Playwright session driver, encrypted session storage, and runnable courier workers
 34 | - Transactional encrypted OTP delivery queue, tenant-scoped verification, and lease-owned private verification worker
 35 | - Provider-neutral OTP adapter boundary with hashing, expiry, attempt/rate limits, payload validation, and no synchronous provider I/O
 36 | - Durable signed webhook outbox/worker with retries, leases, encrypted secrets, and DNS-aware SSRF protection
 37 | - Tenant-scoped, owner/admin-authorized dead-letter inspection and idempotent controlled replay for courier, webhook, and verification work, with immutable replay/audit evidence
 38 | - Merchant dashboard and platform operations admin applications
 39 | - WooCommerce plugin, Shopify adapter, custom JavaScript/server adapter, and native multi-store adapter
 40 | - Docker, Docker Compose, migration integrity verification, clean logical restore rehearsal, and least-privilege runtime-role verification in CI
 41 | - Authoritative organization/store revalidation across API keys, feature assembly, writes, dashboards, and secret-free webhook/verification administration
 42 | - Provider-neutral managed envelope v2 with per-record data keys, authenticated wrapped-key metadata, structured safe failures, legacy dual-read, and rotation/re-encryption primitives
 43 | - Native multi-store post-persist shadow integration with authoritative source-order revalidation, explicit store opt-in, immutable success/failure attempt evidence, tenant-scoped pilot reporting, and legacy-authoritative behavior
 44 | - Authenticated owner/admin merchant dead-letter page with secret-free inspection and CSRF-protected idempotent replay through the existing PostgreSQL operations repository
 45 | - Canonical structured logging/redaction package used by all four private workers; telemetry sink failures cannot break worker execution
 46 |
 47 | The following require external accounts or production decisions before live use:
 48 |
 49 | - Authorized Steadfast merchant/test credentials and provider-terms review
 50 | - A selected KMS/vault adapter, component service identities, access auditing, runtime wiring, and an audited background rewrite before replacing local v1 encryption in production
 51 | - OTP provider selection and credentials
 52 | - Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
 53 | - Production queue/cache/observability providers
 54 | - Production source-platform hook deployment, explicit pilot-store selection, and outcome calibration before any enforcement or broad automatic blocking
 55 |
 56 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
 57 |
 58 | ## Repository structure
 59 |
 60 | ```text
 61 | apps/
 62 |   api/             Versioned API and PostgreSQL repositories
 63 |   dashboard/       Merchant operations dashboard
 64 |   admin/           Platform operations dashboard
 65 | workers/
 66 |   courier-session-worker/
 67 |   courier-sync-worker/
 68 |   verification-worker/
 69 |   event-worker/
 70 | packages/
 71 |   shared-types/
 72 |   risk-engine/
 73 |   courier-adapters/
 74 |   database/
 75 |   authentication/
 76 |   billing/
 77 |   verification/
 78 |   sdk/
 79 |   observability/
 80 | integrations/
 81 |   woocommerce/
 82 |   shopify/
 83 |   custom-js/
 84 |   multi-store-saas/
 85 | docs/
 86 | .ai-bridge/
 87 | ```
 88 |
 89 | ## Core rules
 90 |
 91 | 1. There is exactly one canonical risk engine.
 92 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
 93 | 3. Courier providers are isolated behind adapters and asynchronous workers.
 94 | 4. Merchant data is always organization/store scoped.
 95 | 5. Unknown customers are not automatically safe.
 96 | 6. Provider failure does not automatically approve or block a customer.
 97 | 7. Every assessment returns explainable signals and confidence.
 98 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
 99 | 9. Applied migrations are immutable; changes require a new migration.
100 | 10. Every integration consumes the same canonical API response.
101 |
102 | ## Local setup
103 |
104 | Prerequisites: Node.js 20.19+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
105 |
106 | ```bash
107 | npm install
108 | npm run db:check
109 | npm run db:migrate
110 | npm run db:integrity
111 | # After creating a separate non-owner PostgreSQL login outside the app:
112 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
113 | npm run bootstrap -w @ozzyl/api
114 | npm run dev:api
115 | ```
116 |
117 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
118 |
119 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
120 |
121 | Dead-letter operations are documented in the [durable work runbook](docs/operations/durable-work-dead-letter-runbook.md). They require a trusted environment, `DATABASE_URL`, an active owner/admin user ID, and exact organization/store scope.
122 |
123 | Merchant dashboard:
124 |
125 | ```bash
126 | npm run dev:dashboard
127 | ```
128 |
129 | Platform admin:
130 |
131 | ```bash
132 | npm run dev -w @ozzyl/admin
133 | ```
134 |
135 | Private workers:
136 |
137 | ```bash
138 | npm run start -w @ozzyl/courier-session-worker
139 | npm run start -w @ozzyl/courier-sync-worker
140 | npm run start -w @ozzyl/event-worker
141 | # Requires a reviewed provider module/account in addition to the standard secrets:
142 | npm run start -w @ozzyl/verification-worker
143 | ```
144 |
145 | ## Docker Compose
146 |
```

### .ai-bridge/current-plan.md

Bytes: 19970
SHA-256: 0045cb462cb69d4be5f1075df4f00fd9c2017f717dfca99c74231847ac31c888
Lines: 1-189 of 189

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and fourteen production-hardening slices are complete:
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
 22 | 14. a canonical vendor-neutral structured logging/redaction package integrated into all four private workers, with bounded serialization and telemetry-failure isolation.
 23 |
 24 | Concrete provider selection and provisioning remain external production work.
 25 |
 26 | ## Completed
 27 |
 28 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 29 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 30 | - [x] Canonical shared API/error/event contracts
 31 | - [x] PostgreSQL/Drizzle schema and twelve append-only migrations
 32 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 33 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 34 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 35 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 36 | - [x] Courier adapter contract and Steadfast normalized adapter
 37 | - [x] Playwright Steadfast session driver with structured errors
 38 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 39 | - [x] Runnable PostgreSQL courier session and observation workers
 40 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 41 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 42 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 43 | - [x] API OTP send returns queued work without provider network I/O
 44 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 45 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 46 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 47 | - [x] Explicit-role platform admin with live global operations data
 48 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 49 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 50 | - [x] Architecture dependency-boundary CI guard
 51 | - [x] Provider-neutral production deployment topology ADR
 52 | - [x] Managed PostgreSQL production baseline ADR
 53 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 54 | - [x] Managed secrets and KMS envelope-encryption ADR
 55 | - [x] Vendor-neutral OpenTelemetry observability ADR
 56 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 57 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 58 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 59 | - [x] Concurrent usage reservations cannot exceed the plan limit
 60 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 61 | - [x] Concurrent outcome writes resolve as one insert and one replay
 62 | - [x] Operation idempotency records remain isolated by organization and store
 63 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 64 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 65 | - [x] Expired or previous courier owners cannot complete or fail jobs
 66 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 67 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 68 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 69 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 70 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 71 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 72 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 73 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 74 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 75 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 76 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 77 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 78 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 79 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 80 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 81 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 82 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 83 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 84 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 85 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 86 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 87 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 88 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 89 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 90 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 91 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
 92 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
 93 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
 94 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
 95 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
 96 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
 97 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
 98 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
 99 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
100 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
101 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
102 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
103 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
104 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
105 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
106 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
107 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
108 |
109 | ## Verified baseline
110 |
111 | - Formatting check: passed
112 | - ESLint with zero warnings: passed
113 | - Twelve migration files ordered/non-empty/non-destructive: passed
114 | - First migration apply and immediate migration replay: passed
115 | - Architecture import boundaries: passed
116 | - Typecheck: 20 of 20 workspaces passed locally
117 | - Test/build dependency tasks: 31 of 31 passed locally
118 | - Repository assertion inventory: 132, including the previous 129 remotely verified assertions plus three structured-log redaction/serialization/failure-isolation tests; PostgreSQL-integrated source-branch CI remains pending
119 | - Production builds: 20 of 20 workspaces passed locally
120 | - WooCommerce PHP syntax: unchanged; source-branch CI validation remains pending
121 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
122 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
123 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
124 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
125 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
126 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
127 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
128 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
129 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
130 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
131 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
132 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
133 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
134 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
135 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
136 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
137 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
138 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
139 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
140 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
141 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
142 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
143 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
144 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
145 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
146 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
147 | - Canonical documentation links before this slice: zero known broken internal links
148 | - `tracker.yml` YAML structure remains valid
149 | - Prohibited source-pattern search: no matches
150 |
151 | The repository-local continuation exporter was refreshed after the observability milestone documentation was finalized, so the embedded snapshots match the current branch state.
152 |
153 | ## Next production milestone
154 |
155 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
156 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
157 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
158 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
159 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
160 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
161 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
162 |
163 | ## External blockers
164 |
165 | - Authorized Steadfast merchant/test credentials
166 | - Steadfast provider-terms and merchant-authorization review
167 | - Deployment platform, account, primary region, and budget
168 | - Managed PostgreSQL provider and service tier
169 | - Managed secret store and KMS/vault provider
170 | - Observability backend and retention policy
171 | - OTP provider account and credentials
172 | - Production account recovery/MFA or managed identity-provider decision
173 | - Repository visibility correction from currently reported public to expected private
174 | - Pilot outcome data for false-positive/false-negative calibration
175 |
176 | ## Non-negotiable continuation rules
177 |
178 | - Do not add a second risk engine.
179 | - Do not call providers from the risk engine or synchronous checkout path.
180 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
181 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
182 | - Do not use API keys as dashboard user sessions.
183 | - Require organization/store scope in all merchant repositories, events, and jobs.
184 | - Add new migrations; never edit applied migrations.
185 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
186 | - Keep Redis/cache state non-authoritative.
187 | - Keep unknown/provider failure explicit and policy-controlled.
188 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
189 |
```

### .ai-bridge/decisions.md

Bytes: 14310
SHA-256: be29db2e25f8a37365cc4fae22d4ec7301056c2ad7978fb0b96564a41409ab07
Lines: 1-99 of 99

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
48 |
49 | ## Source SaaS conflict resolutions
50 |
51 | | Conflict                                                                 | Decision                                                                                   |
52 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
53 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
54 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
55 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
56 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
57 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
58 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
59 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
60 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
61 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
62 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
63 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
64 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
65 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
66 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
67 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
68 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
69 |
70 | ## Approved reuse scope
71 |
72 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
73 | - Bangladesh phone normalization after tests
74 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
75 | - WooCommerce settings/order hook/admin display skeleton
76 | - API-key hash/display-prefix and usage-event concepts
77 |
78 | No product source code was copied during Phase 0.
79 |
80 | ## Pending decisions
81 |
82 | These require provider selection, provisioning, or separate ADRs before production implementation:
83 |
84 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
85 | - Specific deployment platform, account, and primary region
86 | - Specific managed PostgreSQL provider and service tier
87 | - Specific managed secret store and KMS/vault provider
88 | - Specific observability backend and retention policy
89 | - Redis-compatible cache provider when distributed coordination is required
90 | - Dedicated broker only if measured scale requires superseding ADR 0008
91 | - Worker scheduler/runtime implementation on the selected deployment platform
92 | - OTP provider
93 |
94 | ## External requirements
95 |
96 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
97 |
98 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
99 |
```

### .ai-bridge/implementation-status.md

Bytes: 23576
SHA-256: 5e2f37cf648ad9512db67ac3ca6f88743f3dbf092888e8c19c9cf2d0efa5b932
Lines: 1-170 of 170

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
 17 | | Continuation documentation | done     | Tracker, plan, status, decisions, and generated `pro-context.md` are refreshed for the observability milestone                                        |
 18 | | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
 19 | | Monorepo/tooling           | done     | 20 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
 20 | | CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
 21 | | Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
 22 | | Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
 23 | | Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |
 24 |
 25 | ## Product implementation
 26 |
 27 | | Area                             | Status   | Notes                                                                                                                                                                                                              |
 28 | | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                                                    |
 30 | | Database/migrations              | done     | Twelve append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                                                    |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                                                 |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                                                    |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                                              |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                                      |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                                      |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                                      |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                                               |
 38 | | Courier observation worker/cache | done     | Lease-owned atomic claims, expired-owner rejection, stale recovery, retry/final failure, relational scope, observation persistence                                                                                 |
 39 | | Durable webhook outbox           | done     | Assessment/outcome transaction emission, scoped event payloads, lease-owned event worker, retries, stale recovery, encrypted secret access                                                                         |
 40 | | Durable work architecture        | done     | PostgreSQL lease pattern plus owner/admin-scoped secret-free inspection, explicit idempotent replay, CLI, and merchant browser operations are implemented; future lease renewal remains                            |
 41 | | Durable work operations          | done     | Failed courier, webhook, and verification work can be inspected and safely replayed through one transactional repository from the CLI or owner/admin browser surface with immutable evidence                       |
 42 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                                             |
 43 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                                                    |
 44 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                                           |
 45 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                                           |
 46 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                                        |
 47 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                                                     |
 48 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                                           |
 49 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                                               |
 50 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                                                |
 51 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                                      |
 52 | | OTP verification                 | baseline | Transactional encrypted queue, tenant-scoped verifier, lease-owned private runner, retries, and failure events done; provider account remains                                                                      |
 53 | | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                                                     |
 54 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                                          |
 55 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                                         |
 56 | | PostgreSQL runtime role          | done     | Explicit current-table DML grants, no migration history/DELETE/DDL/ownership/elevated membership; managed-provider provisioning remains                                                                            |
 57 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                                             |
 58 | | Observability                    | baseline | Canonical structured logging/redaction package and four private-worker integrations are implemented and tested; metrics, traces, exporters, API/repository instrumentation, backend, dashboards, and alerts remain |
 59 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                                          |
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
 75 |
 76 | Applied migrations must remain immutable.
 77 |
 78 | ## Verification evidence
 79 |
 80 | - `npm run format:check`: passed
 81 | - `npm run lint`: passed with zero warnings
 82 | - `npm run db:check`: twelve migrations and committed SHA-256 manifest validated
 83 | - initial migration apply: passed with non-null history checksums
 84 | - immediate migration replay: passed as a clean no-op
 85 | - `npm run db:integrity`: complete contiguous history and checksums passed
 86 | - `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
 87 | - `npm run check:architecture`: passed
 88 | - `npm run typecheck`: 20/20 workspaces passed locally
 89 | - `npm run test`: 31/31 Turbo dependency tasks passed locally; source inventory contains 132 assertions, including three new observability tests
 90 | - `npm run build`: 20/20 workspace builds passed locally
 91 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 92 | - Observability tests prove fixed metadata, nested redaction, error message/stack omission, circular/binary/bigint handling, bounded strings, reserved-field protection, and sink-failure isolation
 93 | - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
 94 | - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
 95 | - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
 96 | - Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
 97 | - Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
 98 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
 99 | - Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
100 | - Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
101 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
102 | - Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
103 | - Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
104 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
105 | - Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
106 | - Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
107 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
108 | - Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
109 | - Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
110 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
111 | - Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
112 | - Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
113 | - Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
114 | - Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
115 | - Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
116 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
117 | - Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
118 | - Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
119 | - Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
120 | - Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
121 | - Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
122 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
123 | - Five real-PostgreSQL durable-work tests cover exact-store owner/admin listing, negative member authorization, concurrent duplicate replay, one immutable ledger/audit outcome, courier lease reset, scoped unexpired verification reopening, structural/expired rejection, cross-tenant isolation, and idempotency conflicts
124 | - Seven runtime-role tests now include insert-only replay-ledger privileges alongside migration-history, DELETE, DDL, ownership, and elevated-role denials
125 | - Durable-work dead-letter final run `29644234591`, job `88079650134`: twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
126 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
127 | - Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping
128 | - Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
129 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
130 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
131 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
132 | - Previous canonical documentation checks found zero broken internal links
133 | - Prohibited insecure-pattern scan: zero matches
134 |
135 | The repository-local exporter was refreshed after this milestone documentation was completed. Source-branch remote CI is pending.
136 |
137 | ## External blockers and production requirements
138 |
139 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
140 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
141 | - Managed secret store and KMS/vault provider
142 | - Observability backend, retention, dashboards, alerts, and incident channels
143 | - Optional Redis-compatible cache only when distributed coordination is required
144 | - Authorized Steadfast test/merchant account
145 | - Provider-terms and merchant-authorization review
146 | - OTP provider selection/account
147 | - Production account recovery/MFA or managed identity-provider decision
148 | - Pilot merchants and verified outcome data for calibration
149 |
150 | ## Remaining risks
151 |
152 | - Steadfast UI/internal endpoint changes can break automation.
153 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
154 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
155 | - In-process API and browser-session rate limiting is not distributed across replicas.
156 | - Controlled dead-letter inspection and browser replay are implemented; future work still includes lease renewal for executions that may exceed one lease and a reviewed retention/archival policy.
157 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
158 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
159 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
160 | - GitHub currently reports public repository visibility although the expected policy is private.
161 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
162 | - Structured logs are implemented for private worker startup/error paths, but API/repository/provider metrics, traces, exporters, dashboards, alerts, and managed retention are not yet implemented.
163 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
164 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
165 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
166 |
167 | ## Next milestone
168 |
169 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
170 |
```

### docs/operations/operations-observability.md

Bytes: 13357
SHA-256: eb086835f6b25cb2408de9968289b379d094a4035052233c5672baf189ed3083
Lines: 1-272 of 272

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
107 | `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The courier-session, courier-sync, event, and verification runners use it for startup and error records. Every record receives a timestamp, level, service, environment, and event name before export.
108 |
109 | The helper recursively redacts sensitive field names before serialization. Passwords, secrets, tokens, API keys, cookies, OTPs, raw phone values, credentials, provider responses, DNS answers, payloads, request/response bodies, and URLs are replaced rather than emitted. `phone_hash` is permitted as a non-reversible correlation reference. Error values expose only a bounded name and structured code; messages and stacks are omitted. Circular objects, binary values, big integers, excessive depth, oversized strings, and large collections are converted to bounded safe representations.
110 |
111 | Serialization or log-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. The current package is intentionally exporter-neutral. API/repository/provider metrics, distributed traces, OpenTelemetry exporters/collector topology, dashboards, alerts, and the managed backend remain production follow-up work.
112 |
113 | Use structured logs with:
114 |
115 | - request id
116 | - organization/store id or safe internal reference
117 | - assessment/job/event/delivery id
118 | - provider or destination category where safe
119 | - worker id
120 | - error code
121 | - attempt number
122 | - duration
123 | - engine/policy version when relevant
124 | - deployment environment and service name
125 |
126 | Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, webhook signing secrets, destination URL credentials, and unrestricted request/event bodies are prohibited.
127 |
128 | All four private workers emit startup and structured error records through the shared redaction boundary. Production instrumentation must add counters, histograms, and correlation spans without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, provider credentials, or DNS answer details that disclose internal topology.
129 |
130 | Recommended event-worker error codes include:
131 |
132 | - `UNSAFE_WEBHOOK_DESTINATION`
133 | - `WEBHOOK_DNS_RESOLUTION_FAILED`
134 | - `WEBHOOK_SECRET_DECRYPTION_FAILED`
135 | - `INVALID_EVENT_PAYLOAD`
136 | - `WEBHOOK_SCOPE_MISMATCH`
137 | - `WEBHOOK_DELIVERY_LEASE_LOST`
138 | - `ENDPOINT_INACTIVE`
139 | - `TIMEOUT`
140 | - `NETWORK_ERROR`
141 | - `RATE_LIMITED`
142 | - `LEASE_EXPIRED`
143 |
144 | ## Tracing
145 |
146 | Trace synchronous API work and asynchronous jobs using correlation IDs. Propagate assessment, job, event, delivery, and request references without propagating secret material.
147 |
148 | Recommended span boundaries:
149 |
150 | - request authentication and authorization;
151 | - usage reservation and idempotency;
152 | - feature assembly and PostgreSQL reads;
153 | - pure risk-engine invocation as an internal span only;
154 | - assessment/outcome persistence;
155 | - transactional outbox insert;
156 | - durable job/delivery claim and completion;
157 | - provider adapter call;
158 | - webhook DNS validation and HTTP attempt without sensitive attributes;
159 | - verification queue transaction, job claim, payload validation, provider attempt, and completion without phone/OTP attributes.
160 |
161 | The event ID links API persistence and asynchronous delivery. The delivery ID links claim, attempt, retry, and completion operations. Telemetry export failure must not break scoring, persistence, or synchronous checkout handling.
162 |
163 | ## Alerts
164 |
165 | - Provider session refresh failure spike
166 | - API p95 latency or error-rate breach
167 | - Assessment error/degraded spike
168 | - PostgreSQL unavailable, connection saturation, or lock-wait spike
169 | - Database migration, manifest/history integrity, backup, or restore failure
170 | - Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
171 | - Event-worker claim rate drops to zero while due backlog grows
172 | - Webhook delivery failure or retry spike
173 | - Webhook secret-decryption or scope-mismatch failure
174 | - Unsafe webhook destination spike
175 | - DNS resolution failure spike
176 | - OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
177 | - Usage counter/entitlement drift
178 | - Reconnect-required account spike
179 | - Secret scanning or redaction regression
180 | - KMS/vault access or decrypt failure spike
181 |
182 | ## Runbooks
183 |
184 | Create and exercise runbooks for:
185 |
186 | - Steadfast login/selector break
187 | - Expired, disabled, or rotated encryption key
188 | - KMS/vault outage
189 | - OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
190 | - Courier provider outage
191 | - Database logical restore, managed point-in-time restore, and failover
192 | - API key compromise
193 | - Courier credential/session compromise
194 | - Webhook signing-secret compromise and endpoint rotation
195 | - Queue/outbox backlog, lease recovery, and dead-letter replay
196 | - Webhook destination failure or repeated HTTP rejection
197 | - DNS resolution/egress-policy failure
198 | - Invalid event payload or scope mismatch
199 | - Incorrect risk policy rollback
200 | - Telemetry backend outage
201 | - Reputation dispute escalation when that subsystem exists
202 |
203 | A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.
204 |
205 | A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.
206 |
207 | ## Health model
208 |
209 | Expose separate health/readiness states for:
210 |
211 | - API process
212 | - database
213 | - durable job/outbox store
214 | - optional distributed cache
215 | - event/webhook worker process
216 | - webhook backlog and oldest-event age
217 | - event-worker signing-secret decryption capability
218 | - courier provider adapters
219 | - session workers
220 | - verification providers and future verification runner
221 | - KMS/vault access
222 | - telemetry export
223 |
224 | A webhook endpoint outage, provider outage, or telemetry outage must not necessarily take the API process out of service. Readiness and operations views must still expose degraded dependencies. Unknown or degraded dependencies must never be treated as safe approval signals.
225 |
226 | ## Event-worker operational contract
227 |
228 | - `EVENT_WORKER_ID` should be stable and unique per replica in production.
229 | - `EVENT_WORKER_POLL_MS`, `EVENT_WORKER_LEASE_MS`, `EVENT_WORKER_MAX_ATTEMPTS`, and `WEBHOOK_TIMEOUT_MS` must be positive integers.
230 | - `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds.
231 | - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
232 | - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
233 | - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
234 | - Exhausted stale work fails closed with `LEASE_EXPIRED`.
235 | - Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.
236 |
237 | ## Data operations
238 |
239 | - Automated encrypted backups
240 | - Point-in-time recovery
241 | - Restore testing on a schedule
242 | - Migration preflight and post-deploy verification
243 | - Outbox retention and terminal-delivery archival policy
244 | - Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
245 | - Audit trail for privileged data and credential access
246 | - KMS key rotation and ciphertext re-encryption procedures
247 | - Webhook signing-secret rotation/re-encryption procedure
248 | - Telemetry retention and access review
249 | - Production-data redaction before lower-environment use
250 |
251 | ## Release operations
252 |
253 | - Feature flags for new engine/policy versions and native multi-store migration
254 | - Canary/pilot merchants before broad rollout
255 | - Compare decision distributions before policy promotion
256 | - Rollback path for API, worker, migration, and policy changes
257 | - Do not edit migration 0008 after application; use a new migration for schema changes
258 | - Keep event-worker deployment independently scalable and rollbackable from the API
259 | - Exercise outbox backlog and retry behavior before each pilot expansion
260 | - No automatic blocking policy promotion without reviewed outcome data
261 | - Validate dashboards and alerts before each pilot expansion
262 |
263 | ## Provider selection still pending
264 |
265 | A managed observability backend, retention policy, alert-delivery channel, optional OpenTelemetry collector topology, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
266 |
267 | ## Browser dead-letter operations surface
268 |
269 | The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.
270 |
271 | The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.
272 |
```

### docs/roadmap/implementation-roadmap.md

Bytes: 3022
SHA-256: b8613ab49c748f4fa39db398c5bd6114a23229a8456a1f19d0ef6ed335976150
Lines: 1-100 of 100

```markdown
  1 | # Implementation Roadmap
  2 |
  3 | Work milestone-by-milestone. Do not start a later phase by duplicating unfinished foundation logic.
  4 |
  5 | ## Phase 0 — Repository and documentation setup
  6 |
  7 | - Workspace/code/Git/environment/deployment audit
  8 | - Install and validate documentation
  9 | - Add root agent rules and ADR process
 10 | - Add implementation status, decision log, and risk register
 11 | - Validate source `multi-store-saas` reuse boundaries
 12 | - Define development commands/environment guide
 13 | - Initialize Git repository
 14 |
 15 | Exit criteria:
 16 |
 17 | - Documentation map is complete and internally consistent.
 18 | - Current repository state and conflicts are recorded.
 19 | - Security-critical source patterns are explicitly prohibited.
 20 | - First implementation milestone and files are identified.
 21 |
 22 | ## Phase 1 — Foundation
 23 |
 24 | - Monorepo/tooling/CI
 25 | - PostgreSQL and canonical database package
 26 | - Secure users/sessions
 27 | - Organizations, stores, and memberships
 28 | - API key lifecycle with `ozg_test_`/`ozg_live_`
 29 | - Plans, entitlements, atomic usage tracking
 30 | - Shared types and canonical API/error/event contracts
 31 | - Tenant-isolation and migration tests
 32 |
 33 | ## Phase 2 — Courier intelligence
 34 |
 35 | - Courier adapter interface and contract suite
 36 | - Extract/harden Steadfast Playwright session driver
 37 | - Encrypted credentials and sessions
 38 | - Session refresh/reconnect jobs
 39 | - Steadfast customer observation adapter
 40 | - Observation cache/freshness/confidence
 41 | - Health monitoring, alerting, and dead-letter behavior
 42 |
 43 | ## Phase 3 — Risk engine
 44 |
 45 | - Bangladesh phone normalization
 46 | - Canonical feature types/assemblers
 47 | - Versioned scoring policy
 48 | - Courier, merchant-history, velocity, verification, and later network signals
 49 | - Explainable decisions and confidence
 50 | - Unknown/degraded behavior
 51 | - Assessment/signal persistence
 52 | - Golden/regression tests
 53 |
 54 | ## Phase 4 — Public API and integrations
 55 |
 56 | - `POST /v1/risk-assessments`
 57 | - Assessment read endpoint
 58 | - Outcome feedback endpoint
 59 | - Webhooks and delivery worker
 60 | - WooCommerce plugin rewrite
 61 | - Native `multi-store-saas` service adapter
 62 | - Integration/contract/idempotency tests
 63 |
 64 | ## Phase 5 — Verification
 65 |
 66 | - OTP send/verify
 67 | - Provider abstraction
 68 | - Rate limiting and abuse protection
 69 | - Verification-session/order binding
 70 | - Merchant policy rules and fallback behavior
 71 |
 72 | ## Phase 6 — Dashboard
 73 |
 74 | - Onboarding and organization/store management
 75 | - API key management
 76 | - Courier account status/reconnect
 77 | - Review queue and assessment detail
 78 | - Risk policy settings
 79 | - Usage/reports/estimated saved cost
 80 | - Team/billing/admin controls
 81 |
 82 | ## Pilot and calibration
 83 |
 84 | - Onboard selected merchants
 85 | - Track verified outcomes
 86 | - Measure false positives/negatives
 87 | - Calibrate thresholds and confidence
 88 | - Compare old embedded multi-store decisions against Guard
 89 | - Do not enable broad automatic blocking until reviewed
 90 |
 91 | ## Later expansion
 92 |
 93 | - Evidence-backed shared reputation and disputes
 94 | - Pathao/RedX adapters
 95 | - Shopify app
 96 | - IVR
 97 | - Device fingerprinting with privacy safeguards
 98 | - Merchant-specific Meta audience exclusion
 99 | - ML-assisted ranking after sufficient labeled data
100 |
```

### docs/roadmap/initial-backlog.md

Bytes: 3449
SHA-256: 8c988a00b7fb560eec978f1d11bd99ba9ec3d8ceeabfc57905164383ad5eee41
Lines: 1-111 of 111

```markdown
  1 | # Initial Backlog
  2 |
  3 | ## Epic A — Repository foundation
  4 |
  5 | - A1 Initialize Git repository with `main`
  6 | - A2 Create npm/Turborepo workspace
  7 | - A3 Configure TypeScript, lint, formatting, and tests
  8 | - A4 Add CI for typecheck/lint/test/migration/security checks
  9 | - A5 Add environment validation
 10 | - A6 Add ADR template and dependency-boundary checks
 11 |
 12 | ## Epic B — Identity and API keys
 13 |
 14 | - B1 Users and secure sessions
 15 | - B2 Organizations and memberships
 16 | - B3 Store model and strict scope repositories
 17 | - B4 API-key creation and one-time reveal
 18 | - B5 Key scopes, environments, revoke/rotate/expire
 19 | - B6 Plans, entitlements, and atomic usage events
 20 | - B7 Audit events and privileged action logging
 21 |
 22 | ## Epic C — Courier sessions
 23 |
 24 | - C1 Courier account model
 25 | - C2 Encrypted credential storage
 26 | - C3 Extract/harden Steadfast Playwright driver
 27 | - C4 Session validation
 28 | - C5 Scheduled refresh
 29 | - C6 Immediate refresh on auth failure
 30 | - C7 Reconnect-required workflow
 31 | - C8 Health dashboard and alerts
 32 | - C9 Redacted failure artifacts and retention
 33 |
 34 | ## Epic D — Courier observations
 35 |
 36 | - D1 Canonical adapter interface
 37 | - D2 Shared adapter contract tests
 38 | - D3 Steadfast observation adapter
 39 | - D4 Observation cache and freshness
 40 | - D5 Normalized outcome mapping
 41 | - D6 Provider rate limiting
 42 | - D7 Retry/circuit breaker/dead-letter behavior
 43 |
 44 | ## Epic E — Risk engine
 45 |
 46 | - E1 Canonical feature types
 47 | - E2 Courier feature extractor
 48 | - E3 Merchant-history extractor
 49 | - E4 Velocity extractor
 50 | - E5 Verification feature extractor
 51 | - E6 Versioned pure rule engine
 52 | - E7 Confidence model
 53 | - E8 Merchant policy thresholds/actions
 54 | - E9 Unit, golden, property, and regression tests
 55 | - E10 Dependency rule preventing external calls
 56 |
 57 | ## Epic F — Public API
 58 |
 59 | - F1 Shared canonical response/error types
 60 | - F2 Assessment create endpoint
 61 | - F3 Assessment read endpoint
 62 | - F4 Courier refresh job endpoint
 63 | - F5 Idempotency
 64 | - F6 Rate limiting and atomic entitlement enforcement
 65 | - F7 Outcome feedback endpoint
 66 | - F8 Webhook delivery/signature/retry
 67 |
 68 | ## Epic G — WooCommerce
 69 |
 70 | - G1 Plugin settings and secure key handling
 71 | - G2 API connection test
 72 | - G3 Order-created assessment
 73 | - G4 Admin risk display
 74 | - G5 Flag/hold/verification/prepayment behavior
 75 | - G6 OTP UI and verification
 76 | - G7 Outcome sync
 77 | - G8 Retry/degraded-state handling
 78 | - G9 Manual recheck and idempotency
 79 |
 80 | ## Epic H — Native multi-store integration
 81 |
 82 | - H1 Internal Ozzyl Guard service client
 83 | - H2 Feature-flagged shadow assessments
 84 | - H3 Outcome feedback
 85 | - H4 Remove embedded provider calls from risk logic
 86 | - H5 Remove duplicate scoring after comparison period
 87 |
 88 | ## Epic I — Dashboard
 89 |
 90 | - I1 Onboarding
 91 | - I2 Organization/store/team management
 92 | - I3 API key management
 93 | - I4 Courier connection page
 94 | - I5 Review queue
 95 | - I6 Assessment detail
 96 | - I7 Policies
 97 | - I8 Usage and savings reports
 98 | - I9 Admin/operations views
 99 |
100 | ## P0 acceptance criteria
101 |
102 | - A merchant can create a secure user account, organization, and store.
103 | - A merchant can create test/live API keys and see the raw key once.
104 | - A merchant can connect Steadfast securely.
105 | - Session refresh works asynchronously outside checkout.
106 | - A COD order can be assessed through one canonical endpoint.
107 | - The response includes score, confidence, decision, signals, and freshness/degraded state.
108 | - WooCommerce can store/display the result and send outcomes.
109 | - No raw keys, passwords, cookies, tokens, raw payloads, or OTP values are logged or stored insecurely.
110 | - Tenant-isolation and concurrent quota tests pass.
111 |
```

### docs/testing/testing-strategy.md

Bytes: 14946
SHA-256: d8775ee3b23dde09cc2aa709ed2268223beb9904b405002129c818b5440fa441
Lines: 1-280 of 280

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
 20 |
 21 | ## Contract tests
 22 |
 23 | Each courier adapter must pass a shared contract suite:
 24 |
 25 | - Returns canonical observation
 26 | - Handles timeout
 27 | - Handles expired session
 28 | - Never leaks credentials
 29 | - Maps malformed responses to structured errors
 30 | - Preserves source/freshness metadata
 31 | - Separates actual return from pre-shipping cancellation
 32 |
 33 | Public API contract tests cover:
 34 |
 35 | - Canonical success/error response
 36 | - Lowercase enums and `signals[].code`
 37 | - Unknown/degraded behavior
 38 | - Idempotent replay
 39 | - Test/live key isolation
 40 | - Dedicated comparison scope, idempotent replay, order binding, and cross-store assessment rejection
 41 |
 42 | Webhook delivery contract tests cover:
 43 |
 44 | - Canonical domain-event payloads
 45 | - HMAC signature over timestamp and exact payload
 46 | - Redirect rejection
 47 | - Retryable HTTP/network/DNS failures
 48 | - Terminal unsafe-destination and inactive-endpoint failures
 49 | - No signing secret, raw phone, or unrestricted request body in logs
 50 |
 51 | ## Integration tests
 52 |
 53 | - User/session authentication
 54 | - API key creation, one-time reveal, authentication, revocation, and rotation
 55 | - Atomic quota enforcement under concurrency
 56 | - Assessment persistence
 57 | - Transactional encrypted OTP queue creation and tenant-scoped verification
 58 | - Lease-owned OTP provider delivery and retry/failure state
 59 | - Courier session refresh
 60 | - Transactional assessment/outcome webhook outbox emission
 61 | - Lease-owned webhook delivery and retry
 62 | - Multi-tenant isolation
 63 | - Organization/store membership authorization
 64 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 65 |
 66 | ### PostgreSQL concurrency and idempotency coverage
 67 |
 68 | The CI PostgreSQL service runs real-database integration tests for:
 69 |
 70 | - duplicate usage reservations serializing through the organization/period advisory lock;
 71 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 72 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 73 | - concurrent assessment saves returning the single persisted scoped winner;
 74 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 75 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 76 | - operation idempotency values remaining isolated by organization and store;
 77 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 78 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 79 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 80 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 81 | - preventing another courier worker from stealing a fresh lease;
 82 | - reclaiming expired courier jobs and rejecting the previous owner;
 83 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 84 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 85 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
 86 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
 87 | - preventing another event worker from stealing a fresh webhook lease;
 88 | - rejecting an expired event-worker owner before completion or failure;
 89 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
 90 | - clearing webhook ownership when a retry is scheduled;
 91 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
 92 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
 93 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
 94 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
 95 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 96 | - protecting fresh verification leases and rejecting expired owners;
 97 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
 98 | - failing both the verification job and authoritative session on persisted scope mismatch;
 99 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
100 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
101 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
102 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
103 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
104 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
105 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
106 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
107 |
108 | ### Native shadow rollout safety coverage
109 |
110 | Default tests prove:
111 |
112 | - `off` mode performs no Guard assessment or comparison API call;
113 | - deterministic sampling keeps retries for the same store/order in the same cohort;
114 | - the legacy score and decision remain the effective result even when Guard recommends block;
115 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
116 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
117 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
118 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
119 | - CSRF-protected browser mutation permits only active owner/admin store scope;
120 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
121 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
122 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
123 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
124 |
125 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
126 |
127 | ### Webhook destination security coverage
128 |
129 | Default tests use injected DNS and fetch boundaries. They prove:
130 |
131 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
132 | - a hostname resolving to any non-public address is rejected before `fetch`;
133 | - DNS resolution failure is classified as retryable without making a network request;
134 | - redirects are disabled;
135 | - successful deliveries use the expected HMAC signature and canonical payload;
136 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
137 |
138 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
139 |
140 | ### Verification payload security coverage
141 |
142 | Default tests prove:
143 |
144 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
145 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
146 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
147 | - reporter state and logs do not receive plaintext OTP values;
148 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
149 |
150 | ### Managed envelope security coverage
151 |
152 | Default tests prove:
153 |
154 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
155 | - plaintext values and plaintext data keys are not serialized into the envelope;
156 | - context mismatch is rejected before provider unwrap;
157 | - wrapped-key metadata is authenticated and tampering fails closed;
158 | - provider outage produces a structured non-secret error;
159 | - a provider cannot pass the plaintext data key through as a wrapped key;
160 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
161 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
162 | - malformed, unsupported, or unavailable-key envelopes fail closed.
163 |
164 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
165 |
166 | ### Migration replay coverage
167 |
168 | CI runs the migration command twice against the same PostgreSQL service:
169 |
170 | 1. the first run applies every ordered migration;
171 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
172 |
173 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
174 |
175 | ### Migration integrity and restore coverage
176 |
177 | CI additionally proves:
178 |
179 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
180 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
181 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
182 | - migration execution is serialized by one session-held advisory lock;
183 | - the restore target is a distinct pre-created clean database;
184 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
185 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
186 |
187 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
188 |
189 | Future PostgreSQL coverage must include:
190 |
191 | - lease renewal during future jobs whose bounded execution time can exceed the configured lease;
192 | - selected-provider smoke tests for distinct API/worker runtime identities and migration-owner grant execution;
193 | - operational replay/dead-letter authorization and audit coverage.
194 |
195 | ## End-to-end tests
196 |
197 | - Merchant signup and store creation
198 | - Create a test/live API key
199 | - Connect Steadfast account
200 | - Assess WooCommerce COD order
201 | - Receive a signed `assessment.completed` webhook asynchronously
202 | - Review high-risk order
203 | - Verify OTP
204 | - Submit courier outcome
205 | - Receive a signed `order.outcome_recorded` webhook asynchronously
206 | - View usage and savings report
207 |
208 | ## Security tests
209 |
210 | - Tenant data leakage
211 | - API key replay/revocation
212 | - Raw key absence from database/metadata/logs
213 | - Brute-force OTP
214 | - CSRF
215 | - Literal-IP and DNS-result SSRF
216 | - Webhook replay and redirect handling
217 | - Webhook signing-secret decryption failure
218 | - Envelope authenticated-context mismatch
219 | - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
220 | - Telemetry serialization/export failure isolation from application and worker execution
221 | - Injection attacks
222 | - Session fixation/rotation
223 | - Credential decryption failure
224 | - Worker lease ownership and stale-owner rejection
225 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
226 | - Runtime database role privilege escape, ownership, migration-history, DELETE, and DDL attempts
227 |
228 | ## Scraper tests
229 |
230 | - Login page selector fixtures
231 | - Successful cookie extraction
232 | - Invalid credentials
233 | - CAPTCHA/2FA detection
234 | - Provider HTML changes
235 | - Browser cleanup on failure
236 | - Login-state/session validation
237 | - Redacted screenshot/trace behavior
238 | - Structured failure codes
239 |
240 | Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.
241 |
242 | ## Architecture tests
243 |
244 | - `packages/risk-engine` cannot import network/database/provider/browser packages
245 | - API routes cannot import provider session drivers directly
246 | - API persistence may enqueue durable work but cannot execute merchant/provider network delivery
247 | - All schema comes from `packages/database`
248 | - All public response and domain-event types come from `packages/shared-types`
249 | - Tenant-scoped repositories, outbox rows, and jobs require explicit scope
250 |
251 | ## Pilot evaluation
252 |
253 | Track a confusion matrix against real verified outcomes:
254 |
255 | - true positive
256 | - false positive
257 | - true negative
258 | - false negative
259 |
260 | Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.
261 |
262 | ## Required CI gates
263 |
264 | - formatting check
265 | - lint
266 | - typecheck
267 | - unit tests
268 | - contract tests
269 | - integration tests with PostgreSQL
270 | - migration manifest, verification, replay, and database-history integrity
271 | - clean PostgreSQL backup/restore rehearsal
272 | - least-privilege runtime database role grant and effective-permission verification
273 | - dependency audit
274 | - secret scanning
275 | - architecture/dependency-boundary tests
276 |
277 | ## Browser dead-letter operations coverage
278 |
279 | Browser API tests must prove session enforcement, exact-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, secret-free list serialization, replay-result serialization, and structured conflict mapping. The existing real-PostgreSQL durable-work suite remains authoritative for concurrent duplicate replay, tenant isolation, structural/expiry rejection, lease reset, immutable evidence, and audit atomicity.
280 |
```

### packages/observability/src/index.test.ts

Bytes: 3008
SHA-256: a38ecb31068376cbc0bc001dfcd6c2c31b93d2506280b656569f087cb9e30399
Lines: 1-92 of 92

```typescript
 1 | import { describe, expect, it, vi } from 'vitest';
 2 | import { createStructuredLogger, serializeStructuredLog } from './index.js';
 3 |
 4 | describe('structured observability', () => {
 5 |   it('emits fixed metadata and redacts nested sensitive fields', () => {
 6 |     const error = Object.assign(new Error('[REDACTED_MESSAGE]'), { code: 'PROVIDER_FAILED' });
 7 |     const line = serializeStructuredLog({
 8 |       level: 'error',
 9 |       event: 'worker.failed',
10 |       service: 'verification-worker',
11 |       environment: 'test',
12 |       timestamp: new Date('2026-07-28T00:00:00.000Z'),
13 |       attributes: {
14 |         worker_id: 'worker-1',
15 |         phone_hash: 'safe-hash',
16 |         phone: '[REDACTED_PHONE]',
17 |         apiKey: '[REDACTED_SECRET]',
18 |         endpointUrl: '[REDACTED_URL]',
19 |         nested: {
20 |           signing_secret: '[REDACTED_SECRET]',
21 |           requestBody: { otp: '[REDACTED_OTP]' },
22 |         },
23 |         error,
24 |         level: 'attempted-override',
25 |       },
26 |     });
27 |
28 |     expect(JSON.parse(line)).toEqual({
29 |       worker_id: 'worker-1',
30 |       phone_hash: 'safe-hash',
31 |       phone: '[REDACTED]',
32 |       apiKey: '[REDACTED]',
33 |       endpointUrl: '[REDACTED]',
34 |       nested: {
35 |         signing_secret: '[REDACTED]',
36 |         requestBody: '[REDACTED]',
37 |       },
38 |       error: { name: 'Error', code: 'PROVIDER_FAILED' },
39 |       timestamp: '2026-07-28T00:00:00.000Z',
40 |       level: 'error',
41 |       service: 'verification-worker',
42 |       environment: 'test',
43 |       event: 'worker.failed',
44 |     });
45 |     expect(line).not.toContain('[REDACTED_PHONE]');
46 |     expect(line).not.toContain('[REDACTED_SECRET]');
47 |     expect(line).not.toContain('[REDACTED_MESSAGE]');
48 |   });
49 |
50 |   it('handles circular, binary, bigint, and oversized values without throwing', () => {
51 |     const circular: Record<string, unknown> = { id: 'one' };
52 |     circular.self = circular;
53 |
54 |     const line = serializeStructuredLog({
55 |       level: 'info',
56 |       event: 'safe.serialization',
57 |       service: 'api',
58 |       environment: 'test',
59 |       timestamp: new Date('2026-07-28T00:00:00.000Z'),
60 |       maxStringLength: 4,
61 |       attributes: {
62 |         circular,
63 |         bytes: new Uint8Array([1, 2, 3]),
64 |         count: 12n,
65 |         long: 'abcdefgh',
66 |       },
67 |     });
68 |     const parsed = JSON.parse(line) as Record<string, unknown>;
69 |
70 |     expect(parsed.circular).toEqual({ id: 'one', self: { circular: '[CIRCULAR]' } });
71 |     expect(parsed.bytes).toBe('[BINARY:3]');
72 |     expect(parsed.count).toBe('12');
73 |     expect(parsed.long).toBe('abcd...[TRUNCATED:4]');
74 |   });
75 |
76 |   it('swallows serialization and sink failures', () => {
77 |     const write = vi.fn(() => {
78 |       throw new Error('backend unavailable');
79 |     });
80 |     const logger = createStructuredLogger({
81 |       service: 'event-worker',
82 |       environment: 'test',
83 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
84 |       write,
85 |     });
86 |
87 |     expect(() => logger.info('worker.started', { worker_id: 'worker-1' })).not.toThrow();
88 |     expect(() => logger.error('', { code: 'FAILED' })).not.toThrow();
89 |     expect(write).toHaveBeenCalledTimes(1);
90 |   });
91 | });
92 |
```

### packages/observability/src/index.ts

Bytes: 7388
SHA-256: bf8d24544c083f087459bc8f326fbc363288737167112e0f003ae96b14a986d1
Lines: 1-224 of 224

```typescript
  1 | export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
  2 |
  3 | export type LogAttributes = Readonly<Record<string, unknown>>;
  4 |
  5 | export interface StructuredLoggerOptions {
  6 |   service: string;
  7 |   environment?: string;
  8 |   clock?: () => Date;
  9 |   write?: (line: string, level: LogLevel) => void;
 10 |   maxDepth?: number;
 11 |   maxStringLength?: number;
 12 | }
 13 |
 14 | export interface StructuredLogger {
 15 |   debug(event: string, attributes?: LogAttributes): void;
 16 |   info(event: string, attributes?: LogAttributes): void;
 17 |   warn(event: string, attributes?: LogAttributes): void;
 18 |   error(event: string, attributes?: LogAttributes): void;
 19 | }
 20 |
 21 | export interface StructuredLogInput {
 22 |   level: LogLevel;
 23 |   event: string;
 24 |   service: string;
 25 |   environment: string;
 26 |   attributes?: LogAttributes;
 27 |   timestamp: Date;
 28 |   maxDepth?: number;
 29 |   maxStringLength?: number;
 30 | }
 31 |
 32 | const REDACTED = '[REDACTED]';
 33 | const CIRCULAR = '[CIRCULAR]';
 34 | const MAX_COLLECTION_ITEMS = 100;
 35 | const DEFAULT_MAX_DEPTH = 6;
 36 | const DEFAULT_MAX_STRING_LENGTH = 2_048;
 37 | const RESERVED_FIELDS = new Set(['timestamp', 'level', 'service', 'environment', 'event']);
 38 | const SENSITIVE_FIELDS = new Set([
 39 |   'authorization',
 40 |   'password',
 41 |   'passphrase',
 42 |   'secret',
 43 |   'signingsecret',
 44 |   'webhooksecret',
 45 |   'token',
 46 |   'accesstoken',
 47 |   'refreshtoken',
 48 |   'apikey',
 49 |   'cookie',
 50 |   'cookies',
 51 |   'sessioncookie',
 52 |   'otp',
 53 |   'phone',
 54 |   'phonenumber',
 55 |   'rawphone',
 56 |   'credential',
 57 |   'credentials',
 58 |   'providerresponse',
 59 |   'dnsanswers',
 60 |   'requestbody',
 61 |   'responsebody',
 62 | ]);
 63 |
 64 | export function createStructuredLogger(options: StructuredLoggerOptions): StructuredLogger {
 65 |   const service = requiredLabel(options.service, 'service');
 66 |   const environment = options.environment?.trim() || 'development';
 67 |   const clock = options.clock ?? (() => new Date());
 68 |   const write = options.write ?? defaultWrite;
 69 |
 70 |   const emit = (level: LogLevel, event: string, attributes?: LogAttributes): void => {
 71 |     try {
 72 |       const line = serializeStructuredLog({
 73 |         level,
 74 |         event,
 75 |         service,
 76 |         environment,
 77 |         timestamp: clock(),
 78 |         ...(attributes === undefined ? {} : { attributes }),
 79 |         ...(options.maxDepth === undefined ? {} : { maxDepth: options.maxDepth }),
 80 |         ...(options.maxStringLength === undefined
 81 |           ? {}
 82 |           : { maxStringLength: options.maxStringLength }),
 83 |       });
 84 |       write(line, level);
 85 |     } catch {
 86 |       // Telemetry failures must never break application or worker execution.
 87 |     }
 88 |   };
 89 |
 90 |   return {
 91 |     debug: (event, attributes) => emit('debug', event, attributes),
 92 |     info: (event, attributes) => emit('info', event, attributes),
 93 |     warn: (event, attributes) => emit('warn', event, attributes),
 94 |     error: (event, attributes) => emit('error', event, attributes),
 95 |   };
 96 | }
 97 |
 98 | export function serializeStructuredLog(input: StructuredLogInput): string {
 99 |   const maxDepth = positiveInteger(input.maxDepth, DEFAULT_MAX_DEPTH);
100 |   const maxStringLength = positiveInteger(input.maxStringLength, DEFAULT_MAX_STRING_LENGTH);
101 |   const seen = new WeakSet<object>();
102 |   const attributes = sanitizeRecord(input.attributes ?? {}, {
103 |     depth: 0,
104 |     maxDepth,
105 |     maxStringLength,
106 |     seen,
107 |   });
108 |
109 |   return JSON.stringify({
110 |     ...attributes,
111 |     timestamp: input.timestamp.toISOString(),
112 |     level: input.level,
113 |     service: requiredLabel(input.service, 'service'),
114 |     environment: requiredLabel(input.environment, 'environment'),
115 |     event: requiredLabel(input.event, 'event'),
116 |   });
117 | }
118 |
119 | interface SanitizeContext {
120 |   depth: number;
121 |   maxDepth: number;
122 |   maxStringLength: number;
123 |   seen: WeakSet<object>;
124 | }
125 |
126 | function sanitizeRecord(
127 |   value: Readonly<Record<string, unknown>>,
128 |   context: SanitizeContext,
129 | ): Record<string, unknown> {
130 |   if (context.depth >= context.maxDepth) return { truncated: '[MAX_DEPTH]' };
131 |   if (context.seen.has(value)) return { circular: CIRCULAR };
132 |   context.seen.add(value);
133 |
134 |   const result: Record<string, unknown> = {};
135 |   const entries = Object.entries(value).slice(0, MAX_COLLECTION_ITEMS);
136 |   for (const [key, item] of entries) {
137 |     if (RESERVED_FIELDS.has(key)) continue;
138 |     result[key] = isSensitiveField(key)
139 |       ? REDACTED
140 |       : sanitizeValue(item, { ...context, depth: context.depth + 1 });
141 |   }
142 |   if (Object.keys(value).length > MAX_COLLECTION_ITEMS) result.truncated_fields = true;
143 |   return result;
144 | }
145 |
146 | function sanitizeValue(value: unknown, context: SanitizeContext): unknown {
147 |   if (value === null || typeof value === 'boolean') return value;
148 |   if (typeof value === 'string') return truncate(value, context.maxStringLength);
149 |   if (typeof value === 'number') return Number.isFinite(value) ? value : String(value);
150 |   if (typeof value === 'bigint') return value.toString();
151 |   if (typeof value === 'undefined') return '[UNDEFINED]';
152 |   if (typeof value === 'symbol')
153 |     return value.description ? `[SYMBOL:${value.description}]` : '[SYMBOL]';
154 |   if (typeof value === 'function') return '[FUNCTION]';
155 |   if (value instanceof Date)
156 |     return Number.isNaN(value.getTime()) ? '[INVALID_DATE]' : value.toISOString();
157 |   if (value instanceof Error) return sanitizeError(value, context);
158 |   if (ArrayBuffer.isView(value)) return `[BINARY:${value.byteLength}]`;
159 |   if (Array.isArray(value)) {
160 |     if (context.depth >= context.maxDepth) return '[MAX_DEPTH]';
161 |     if (context.seen.has(value)) return CIRCULAR;
162 |     context.seen.add(value);
163 |     const items = value
164 |       .slice(0, MAX_COLLECTION_ITEMS)
165 |       .map((item) => sanitizeValue(item, { ...context, depth: context.depth + 1 }));
166 |     if (value.length > MAX_COLLECTION_ITEMS) items.push('[TRUNCATED_ITEMS]');
167 |     return items;
168 |   }
169 |   if (typeof value === 'object') {
170 |     return sanitizeRecord(value as Readonly<Record<string, unknown>>, context);
171 |   }
172 |   return '[UNSUPPORTED]';
173 | }
174 |
175 | function sanitizeError(error: Error, context: SanitizeContext): Record<string, unknown> {
176 |   const code =
177 |     'code' in error
178 |       ? sanitizeValue((error as Error & { code?: unknown }).code, context)
179 |       : undefined;
180 |   return {
181 |     name: truncate(error.name || 'Error', context.maxStringLength),
182 |     ...(code === undefined ? {} : { code }),
183 |   };
184 | }
185 |
186 | function isSensitiveField(key: string): boolean {
187 |   const normalized = key.replace(/[^a-z0-9]/gi, '').toLowerCase();
188 |   if (normalized === 'phonehash') return false;
189 |   return (
190 |     SENSITIVE_FIELDS.has(normalized) ||
191 |     normalized.endsWith('password') ||
192 |     normalized.endsWith('secret') ||
193 |     normalized.endsWith('token') ||
194 |     normalized.endsWith('apikey') ||
195 |     normalized.endsWith('cookie') ||
196 |     normalized.endsWith('payload') ||
197 |     normalized.endsWith('body') ||
198 |     normalized.endsWith('credentials') ||
199 |     normalized.endsWith('url')
200 |   );
201 | }
202 |
203 | function truncate(value: string, maxLength: number): string {
204 |   if (value.length <= maxLength) return value;
205 |   return `${value.slice(0, maxLength)}...[TRUNCATED:${value.length - maxLength}]`;
206 | }
207 |
208 | function requiredLabel(value: string, name: string): string {
209 |   const normalized = value.trim();
210 |   if (!normalized) throw new Error(`${name} is required`);
211 |   return normalized;
212 | }
213 |
214 | function positiveInteger(value: number | undefined, fallback: number): number {
215 |   return Number.isSafeInteger(value) && Number(value) > 0 ? Number(value) : fallback;
216 | }
217 |
218 | function defaultWrite(line: string, level: LogLevel): void {
219 |   if (level === 'error') console.error(line);
220 |   else if (level === 'warn') console.warn(line);
221 |   else if (level === 'debug') console.debug(line);
222 |   else console.info(line);
223 | }
224 |
```

### tracker.yml

Bytes: 16720
SHA-256: 8f041d455c72f1050711d42d7a00d4b319bc8cb6284f02fc07b6af7f90a50f91
Lines: 1-327 of 327

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
 84 |   - durable_dead_letter_operations_require_active_owner_or_admin_scope
 85 |   - durable_work_replay_is_explicit_idempotent_and_audited
 86 |   - structural_or_expired_durable_failures_are_not_replayed
 87 |   - durable_replay_evidence_is_secret_free_and_immutable
 88 |   - browser_dead_letter_access_requires_opaque_session_exact_store_and_owner_or_admin
 89 |   - browser_dead_letter_replay_requires_csrf_and_a_stable_idempotency_key
 90 |   - browser_dead_letter_responses_exclude_payloads_and_secret_material
 91 |   - structured_logs_redact_sensitive_fields_before_export
 92 |   - telemetry_failures_never_break_application_or_worker_execution
 93 |
 94 | implemented:
 95 |   - typescript_monorepo_and_ci
 96 |   - postgresql_schema_and_twelve_migrations
 97 |   - organization_store_membership_and_plan_foundation
 98 |   - usage_metering_and_audit_foundation
 99 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
100 |   - pure_versioned_explainable_risk_engine
101 |   - canonical_v1_api_and_postgresql_repositories
102 |   - provider_neutral_shared_envelope_encryption_package
103 |   - steadfast_adapter_and_browser_session_worker
104 |   - postgresql_courier_sync_worker
105 |   - verification_and_webhook_libraries
106 |   - durable_postgresql_webhook_outbox_and_event_worker
107 |   - durable_encrypted_postgresql_verification_queue_and_worker
108 |   - tenant_scoped_postgresql_otp_verification_repository
109 |   - woocommerce_shopify_custom_and_native_adapters
110 |   - authenticated_live_merchant_dashboard
111 |   - authenticated_live_platform_admin
112 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
113 |   - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
114 |   - accepted_provider_neutral_production_infrastructure_adrs
115 |   - postgresql_usage_assessment_outcome_and_operation_idempotency_race_hardening
116 |   - postgresql_courier_worker_atomic_claim_and_lease_recovery
117 |   - postgresql_webhook_worker_atomic_claim_and_lease_recovery
118 |   - postgresql_verification_worker_atomic_claim_and_lease_recovery
119 |   - verification_payload_context_phone_hash_and_otp_hash_validation
120 |   - otp_provider_delivery_removed_from_synchronous_api_requests
121 |   - migration_replay_ci_gate
122 |   - webhook_dns_destination_validation
123 |   - postgresql_migration_manifest_and_history_checksum_integrity
124 |   - clean_postgresql_backup_restore_rehearsal
125 |   - restored_schema_data_sequence_history_and_replay_comparison
126 |   - authoritative_api_key_feature_assessment_and_outcome_tenant_scope_revalidation
127 |   - secret_free_tenant_scoped_webhook_and_verification_administration_repositories
128 |   - dashboard_and_platform_admin_repository_isolation_expansion
129 |   - least_privilege_postgresql_runtime_role_policy_grant_cli_and_ci_gate
130 |   - provider_neutral_managed_envelope_v2_with_random_per_record_data_keys
131 |   - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
132 |   - native_multi_store_off_and_deterministic_shadow_rollout_controls
133 |   - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
134 |   - selected_source_post_persist_native_shadow_integration
135 |   - store_scoped_native_shadow_opt_in_and_pilot_reporting
136 |   - tenant_scoped_immutable_native_shadow_attempt_evidence
137 |   - tenant_scoped_durable_work_dead_letter_inspection
138 |   - idempotent_controlled_durable_work_replay
139 |   - immutable_secret_free_durable_work_replay_evidence
140 |   - authenticated_merchant_browser_dead_letter_operations
141 |   - csrf_protected_browser_durable_work_replay
142 |   - synchronous_per_work_item_browser_replay_key_cache
143 |   - provider_neutral_structured_logging_and_recursive_redaction
144 |   - courier_session_courier_sync_event_and_verification_worker_log_integration
145 |   - telemetry_serialization_and_sink_failure_isolation_tests
146 |
147 | verification:
148 |   command: npm run verify
149 |   last_verified: 2026-07-28
150 |   status: passed
151 |   results:
152 |     migrations: 12_of_12_with_sha256_manifest
153 |     migration_replay: passed
154 |     migration_history_integrity: passed
155 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
156 |     architecture_boundaries: passed
157 |     typecheck: 20_of_20_local
158 |     test_tasks: 31_of_31_local
159 |     source_assertions: 132_total
160 |     previous_main_remote_assertions: 129_passed
161 |     migration_integrity_tests: 7_of_7_passed
162 |     postgresql_concurrency_tests: 7_of_7_passed
163 |     postgresql_courier_worker_lease_tests: 5_of_5_passed
164 |     postgresql_webhook_worker_lease_tests: 5_of_5_passed
165 |     postgresql_verification_worker_lease_tests: 5_of_5_passed
166 |     verification_payload_validation_tests: 3_of_3_passed
167 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
168 |     postgresql_runtime_role_tests: 7_of_7_passed
169 |     managed_envelope_tests: 11_of_11_passed
170 |     native_shadow_adapter_tests: 10_of_10_passed
171 |     native_shadow_api_tests: 7_of_7_passed
172 |     native_shadow_postgresql_tests: 7_of_7_passed
173 |     native_shadow_browser_tests: 2_of_2_passed
174 |     native_shadow_sdk_tests: 2_of_2_passed
175 |     native_shadow_total_tests: 28_of_28_passed
176 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
177 |     browser_dead_letter_api_tests: 3_of_3_passed
178 |     observability_tests: 3_of_3_passed
179 |     builds: 20_of_20_local
180 |     php_syntax: passed
181 |     high_critical_dependency_check: passed
182 |     moderate_dependency_findings: 5
183 |     documentation_links: 57_reviewed_0_known_broken
184 |   continuation_bundle:
185 |     status: refreshed_locally
186 |     canonical_main_sync: verified_at_b61af364a828f9742fc95a6a18314c0a82540d29
187 |     local_exporter: completed_after_observability_milestone_docs
188 |   remote_ci:
189 |     status: passed
190 |     run_id: 29645967968
191 |     job_id: 88084164235
192 |     job: verify
193 |     tested_head: 2129b51ca7393b3c942f2f5c074cb3990b615b89
194 |     merged_main_commit: 27cff21a9fd024e7b8094da3397c79387c83ea02
195 |     completed: 2026-07-18
196 |     steps: audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_typecheck_tests_build_php_all_passed
197 |   source_validation:
198 |     status: passed
199 |     run_id: 29645967968
200 |     job_id: 88084164235
201 |     tested_head: 2129b51ca7393b3c942f2f5c074cb3990b615b89
202 |     completed: 2026-07-18
203 |     steps: audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_typecheck_tests_build_php_all_passed
204 |     browser_dead_letter_api_tests: 3_of_3_passed
205 |   pending_follow_up:
206 |     - source_branch_remote_ci_validation
207 |     - observability_metrics_traces_exporters_and_managed_backend
208 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
209 |     - pilot_outcome_collection_and_calibration
210 |
211 | migrations:
212 |   immutable: true
213 |   manifest: packages/database/migrations/manifest.json
214 |   history_checksum_column: checksum_sha256_not_null
215 |   files:
216 |     - packages/database/migrations/0001_foundation.sql
217 |     - packages/database/migrations/0002_courier.sql
218 |     - packages/database/migrations/0003_risk.sql
219 |     - packages/database/migrations/0004_verification_events.sql
220 |     - packages/database/migrations/0005_durable_operations.sql
221 |     - packages/database/migrations/0006_browser_access.sql
222 |     - packages/database/migrations/0007_worker_leases.sql
223 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
224 |     - packages/database/migrations/0009_verification_delivery_queue.sql
225 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
226 |     - packages/database/migrations/0011_native_shadow_pilot.sql
227 |     - packages/database/migrations/0012_durable_work_replays.sql
228 |
229 | accepted_adrs:
230 |   - docs/adr/0006-production-deployment-topology.md
231 |   - docs/adr/0007-managed-postgresql-production-baseline.md
232 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
233 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
234 |   - docs/adr/0010-vendor-neutral-production-observability.md
235 |   - docs/adr/0011-selected-source-shadow-pilot.md
236 |   - docs/adr/0012-durable-work-dead-letter-operations.md
237 |
238 | external_dependencies:
239 |   - authorized_steadfast_test_account
240 |   - provider_authorization_review
241 |   - deployment_platform_account_region_and_budget
242 |   - managed_postgresql_provider_and_service_tier
243 |   - managed_secret_store_and_kms_vault_provider
244 |   - observability_backend_and_retention_policy
245 |   - otp_provider_account
246 |   - pilot_outcome_data
247 |
248 | next_milestone:
249 |   name: production-hardening-and-pilot-readiness
250 |   tasks:
251 |     - select_and_provision_accepted_infrastructure_providers
252 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
253 |     - validate_steadfast_with_an_authorized_account
254 |     - implement_the_selected_otp_provider_adapter
255 |     - add_distributed_cache_only_when_replica_coordination_requires_it
256 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
257 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
258 |     - calibrate_decisions_before_broad_automatic_blocking
259 |
260 | release_policy:
261 |   branch: main
262 |   before_push:
263 |     - npm_run_verify_passes
264 |     - documentation_and_tracker_are_current
265 |     - repository_review_is_clean
266 |   rules:
267 |     - no_force_push_to_main
268 |     - do_not_edit_applied_migrations
269 |     - use_descriptive_commits
270 |
271 | notes:
272 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
273 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
274 |   - github_connector_reports_public_visibility_while_expected_state_is_private
275 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
276 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
277 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
278 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
279 |   - webhook_event_payloads_do_not_include_raw_phone_values
280 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
281 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
282 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
283 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
284 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
285 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
286 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
287 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
288 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
289 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
290 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
291 |   - selected_otp_provider_module_and_credentials_remain_external
292 |   - migration_files_are_bound_to_a_committed_sha256_manifest
293 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
294 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
295 |   - migration_execution_uses_one_session_advisory_lock
296 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
297 |   - managed_provider_point_in_time_restore_drill_remains_external
298 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
299 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
300 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
301 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
302 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
303 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
304 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
305 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
306 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
307 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
308 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
309 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
310 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
311 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
312 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
313 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
314 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
315 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
316 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
317 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
318 |   - durable_replay_never_performs_provider_or_webhook_network_io
319 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
320 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
321 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
322 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
323 |   - structured_log_redaction_is_canonicalized_in_packages_observability
324 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
325 |   - pro_context_was_refreshed_after_observability_milestone_documentation
326 |   - update_this_file_after_every_material_milestone
327 |
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

Bytes: 1921
SHA-256: fccad8a363a506b2ef46485d22c95c1d99cc09a55596717ddd0eb5da9524e3c5
Lines: 1-54 of 54

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
36 |     "check:architecture": "node scripts/check-architecture.mjs",
37 |     "verify": "npm run format:check && npm run lint && npm run db:check && npm run check:architecture && npm run typecheck && npm run test && npm run build"
38 |   },
39 |   "devDependencies": {
40 |     "@eslint/js": "^10.0.1",
41 |     "@types/node": "^24.0.0",
42 |     "@vitest/coverage-v8": "^4.0.18",
43 |     "drizzle-kit": "^0.31.4",
44 |     "eslint": "^10.8.0",
45 |     "prettier": "^3.6.2",
46 |     "tsup": "^8.5.0",
47 |     "tsx": "^4.20.6",
48 |     "turbo": "^2.8.13",
49 |     "typescript": "^5.8.3",
50 |     "typescript-eslint": "^8.65.0",
51 |     "vitest": "^4.0.18"
52 |   }
53 | }
54 |
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

### workers/courier-session-worker/package.json

Bytes: 686
SHA-256: 4de4e85e345661868d851289cac3ac0478b1826f39f3a9ec591c57961f8f93ee
Lines: 1-30 of 30

```json
 1 | {
 2 |   "name": "@ozzyl/courier-session-worker",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "types": "./src/index.ts",
 7 |   "exports": {
 8 |     ".": {
 9 |       "types": "./src/index.ts",
10 |       "import": "./dist/index.js"
11 |     }
12 |   },
13 |   "scripts": {
14 |     "build": "tsup src/index.ts src/runner.ts --format esm --dts --sourcemap --clean",
15 |     "start": "node dist/runner.js",
16 |     "typecheck": "tsc -p tsconfig.json --noEmit",
17 |     "test": "vitest run"
18 |   },
19 |   "dependencies": {
20 |     "@ozzyl/courier-adapters": "*",
21 |     "pg": "^8.16.3",
22 |     "playwright": "^1.57.0",
23 |     "@ozzyl/encryption": "*",
24 |     "@ozzyl/observability": "*"
25 |   },
26 |   "devDependencies": {
27 |     "@types/pg": "^8.15.5"
28 |   }
29 | }
30 |
```

### workers/courier-sync-worker/package.json

Bytes: 666
SHA-256: 7e9eb44fa20f07c023eba1a385688d6dbd9420f828daf50f7cc5e5728e6b8c75
Lines: 1-29 of 29

```json
 1 | {
 2 |   "name": "@ozzyl/courier-sync-worker",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "types": "./src/index.ts",
 7 |   "exports": {
 8 |     ".": {
 9 |       "types": "./src/index.ts",
10 |       "import": "./dist/index.js"
11 |     }
12 |   },
13 |   "scripts": {
14 |     "build": "tsup src/index.ts src/runner.ts --format esm --dts --sourcemap --clean",
15 |     "start": "node dist/runner.js",
16 |     "typecheck": "tsc -p tsconfig.json --noEmit",
17 |     "test": "vitest run"
18 |   },
19 |   "dependencies": {
20 |     "@ozzyl/courier-adapters": "*",
21 |     "@ozzyl/courier-session-worker": "*",
22 |     "pg": "^8.16.3",
23 |     "@ozzyl/observability": "*"
24 |   },
25 |   "devDependencies": {
26 |     "@types/pg": "^8.15.5"
27 |   }
28 | }
29 |
```

### workers/event-worker/package.json

Bytes: 659
SHA-256: aabdc36b6cf50ab0349376276e0cd81a414df544d3cf46d5693fd0bbb0043f84
Lines: 1-29 of 29

```json
 1 | {
 2 |   "name": "@ozzyl/event-worker",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "types": "./src/index.ts",
 7 |   "exports": {
 8 |     ".": {
 9 |       "types": "./src/index.ts",
10 |       "import": "./dist/index.js"
11 |     }
12 |   },
13 |   "scripts": {
14 |     "build": "tsup src/index.ts src/postgres.ts src/runner.ts --format esm --dts --sourcemap --clean",
15 |     "typecheck": "tsc -p tsconfig.json --noEmit",
16 |     "test": "vitest run",
17 |     "start": "node dist/runner.js"
18 |   },
19 |   "dependencies": {
20 |     "@ozzyl/shared-types": "*",
21 |     "@ozzyl/encryption": "*",
22 |     "pg": "^8.16.3",
23 |     "@ozzyl/observability": "*"
24 |   },
25 |   "devDependencies": {
26 |     "@types/pg": "^8.15.5"
27 |   }
28 | }
29 |
```

### workers/verification-worker/package.json

Bytes: 698
SHA-256: 2f671e0dc4f07d32ddc071a1bd3e514783d75606c9cfc427e273d14b5a6bff22
Lines: 1-30 of 30

```json
 1 | {
 2 |   "name": "@ozzyl/verification-worker",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "types": "./src/index.ts",
 7 |   "exports": {
 8 |     ".": {
 9 |       "types": "./src/index.ts",
10 |       "import": "./dist/index.js"
11 |     }
12 |   },
13 |   "scripts": {
14 |     "build": "tsup src/index.ts src/postgres.ts src/runner.ts --format esm --dts --sourcemap --clean",
15 |     "typecheck": "tsc -p tsconfig.json --noEmit",
16 |     "test": "vitest run",
17 |     "start": "node dist/runner.js"
18 |   },
19 |   "dependencies": {
20 |     "@ozzyl/encryption": "*",
21 |     "@ozzyl/shared-types": "*",
22 |     "@ozzyl/verification": "*",
23 |     "pg": "^8.16.3",
24 |     "@ozzyl/observability": "*"
25 |   },
26 |   "devDependencies": {
27 |     "@types/pg": "^8.15.5"
28 |   }
29 | }
30 |
```

### workers/courier-session-worker/src/runner.ts

Bytes: 5036
SHA-256: 73a79217b57fd68dea12e991ac0cb29917e86d82f26827f4ff921f3d9a6fe33a
Lines: 1-162 of 162

```typescript
  1 | import { Pool } from 'pg';
  2 | import { createStructuredLogger } from '@ozzyl/observability';
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
 28 | let stopping = false;
 29 |
 30 | const worker = new CourierSessionWorker({
 31 |   credentials: {
 32 |     async load(accountId): Promise<SteadfastCredentials | null> {
 33 |       const result = await pool.query<{ encrypted_payload: string }>(
 34 |         'select encrypted_payload from courier_credentials where courier_account_id = $1',
 35 |         [accountId],
 36 |       );
 37 |       const payload = result.rows[0]?.encrypted_payload;
 38 |       return payload
 39 |         ? cipher.decrypt<SteadfastCredentials>(payload, `courier-credential:${accountId}`)
 40 |         : null;
 41 |     },
 42 |   },
 43 |   vault: {
 44 |     async save(accountId, encryptedPayload, keyVersion): Promise<void> {
 45 |       await pool.query(
 46 |         `
 47 |           insert into courier_sessions (
 48 |             courier_account_id, encrypted_payload, encryption_key_version,
 49 |             validated_at, status, expires_at
 50 |           ) values ($1, $2, $3, now(), 'valid', now() + interval '6 hours')
 51 |           on conflict (courier_account_id) do update set
 52 |             encrypted_payload = excluded.encrypted_payload,
 53 |             encryption_key_version = excluded.encryption_key_version,
 54 |             validated_at = now(),
 55 |             status = 'valid',
 56 |             expires_at = excluded.expires_at,
 57 |             updated_at = now()
 58 |         `,
 59 |         [accountId, encryptedPayload, keyVersion],
 60 |       );
 61 |     },
 62 |   },
 63 |   health: {
 64 |     async markConnected(accountId, at): Promise<void> {
 65 |       await pool.query(
 66 |         `
 67 |           update courier_accounts set status = 'connected', last_connected_at = $2,
 68 |             last_success_at = $2, failure_code = null, updated_at = now()
 69 |           where id = $1
 70 |         `,
 71 |         [accountId, at],
 72 |       );
 73 |     },
 74 |     async markFailure(accountId, code: SessionFailureCode, at): Promise<void> {
 75 |       const status = [
 76 |         'INVALID_CREDENTIALS',
 77 |         'CAPTCHA_REQUIRED',
 78 |         'TWO_FACTOR_REQUIRED',
 79 |         'SELECTOR_CHANGED',
 80 |       ].includes(code)
 81 |         ? 'reconnect_required'
 82 |         : 'degraded';
 83 |       await pool.query(
 84 |         `
 85 |           update courier_accounts set status = $2, last_failure_at = $3,
 86 |             failure_code = $4, updated_at = now()
 87 |           where id = $1
 88 |         `,
 89 |         [accountId, status, at, code],
 90 |       );
 91 |     },
 92 |   },
 93 |   cipher,
 94 |   driver: new SteadfastSessionDriver(),
 95 | });
 96 |
 97 | async function tick(): Promise<void> {
 98 |   const accounts = await pool.query<{ id: string }>(
 99 |     `
100 |       select id from courier_accounts
101 |       where provider = 'steadfast'
102 |         and status <> 'disabled'
103 |         and (
104 |           last_success_at is null
105 |           or last_success_at < now() - ($1::text || ' hours')::interval
106 |           or status in ('pending', 'expired', 'degraded')
107 |         )
108 |       order by coalesce(last_success_at, to_timestamp(0)) asc
109 |       limit 10
110 |     `,
111 |     [String(refreshHours)],
112 |   );
113 |
114 |   for (const account of accounts.rows) {
115 |     if (stopping) return;
116 |     const client = await pool.connect();
117 |     try {
118 |       const lock = await client.query<{ locked: boolean }>(
119 |         'select pg_try_advisory_lock(hashtext($1)) as locked',
120 |         [`courier-session:${account.id}`],
121 |       );
122 |       if (!lock.rows[0]?.locked) continue;
123 |       try {
124 |         await worker.refresh(account.id);
125 |         log.info('courier.session.refreshed', { account_id: account.id });
126 |       } catch (error) {
127 |         const code =
128 |           error && typeof error === 'object' && 'code' in error
129 |             ? String(error.code)
130 |             : 'SESSION_REFRESH_FAILED';
131 |         log.error('courier.session.failed', { account_id: account.id, code });
132 |       } finally {
133 |         await client.query('select pg_advisory_unlock(hashtext($1))', [
134 |           `courier-session:${account.id}`,
135 |         ]);
136 |       }
137 |     } finally {
138 |       client.release();
139 |     }
140 |   }
141 | }
142 |
143 | async function run(): Promise<void> {
144 |   log.info('courier.session.worker.started');
145 |   while (!stopping) {
146 |     try {
147 |       await tick();
148 |     } catch {
149 |       log.error('courier.session.worker.tick_failed');
150 |     }
151 |     if (!stopping) await new Promise((resolve) => setTimeout(resolve, pollMs));
152 |   }
153 |   await pool.end();
154 | }
155 |
156 | const stop = (): void => {
157 |   stopping = true;
158 | };
159 | process.once('SIGTERM', stop);
160 | process.once('SIGINT', stop);
161 | await run();
162 |
```

### workers/courier-sync-worker/src/runner.ts

Bytes: 7506
SHA-256: 229555ebf2dddd84539151ccf893701aae000f46ce576202886b0a92d38dd581
Lines: 1-212 of 212

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import {
  4 |   SteadfastAdapter,
  5 |   type CourierObservation,
  6 |   type CourierSession,
  7 | } from '@ozzyl/courier-adapters';
  8 | import { AesGcmEnvelopeCipher } from '@ozzyl/courier-session-worker';
  9 | import { createStructuredLogger } from '@ozzyl/observability';
 10 | import { CourierSyncWorker } from './index.js';
 11 | import { PostgresCourierJobQueue, type ClaimedCourierJob } from './postgres.js';
 12 |
 13 | const required = (name: string): string => {
 14 |   const value = process.env[name];
 15 |   if (!value) throw new Error(`${name} is required`);
 16 |   return value;
 17 | };
 18 |
 19 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 20 | const cipher = new AesGcmEnvelopeCipher(
 21 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 22 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 23 | );
 24 | const pollMs = Number(process.env.WORKER_POLL_MS ?? 5_000);
 25 | const leaseMs = Number(process.env.WORKER_LEASE_MS ?? 5 * 60_000);
 26 | const workerId = process.env.WORKER_ID ?? `courier-sync-${randomUUID()}`;
 27 | const log = createStructuredLogger({
 28 |   service: 'courier-sync-worker',
 29 |   environment: process.env.NODE_ENV ?? 'development',
 30 | });
 31 | const jobs = new PostgresCourierJobQueue(pool, { leaseMs });
 32 | let stopping = false;
 33 |
 34 | const steadfast = new SteadfastAdapter({
 35 |   sessionProvider: {
 36 |     async getSession(accountId): Promise<CourierSession | null> {
 37 |       const result = await pool.query<{ encrypted_payload: string; expires_at: Date | null }>(
 38 |         `select encrypted_payload, expires_at from courier_sessions where courier_account_id = $1 and status = 'valid'`,
 39 |         [accountId],
 40 |       );
 41 |       const row = result.rows[0];
 42 |       if (!row) return null;
 43 |       const session = cipher.decrypt<CourierSession>(
 44 |         row.encrypted_payload,
 45 |         `courier-session:${accountId}`,
 46 |       );
 47 |       return { ...session, ...(row.expires_at ? { expiresAt: row.expires_at.toISOString() } : {}) };
 48 |     },
 49 |   },
 50 | });
 51 |
 52 | const syncWorker = new CourierSyncWorker({
 53 |   adapters: new Map([['steadfast', steadfast]]),
 54 |   observations: {
 55 |     async findFresh(input): Promise<CourierObservation | null> {
 56 |       const result = await pool.query<ObservationRow>(
 57 |         `
 58 |           select provider, total_orders, delivered_orders, returned_orders,
 59 |             cancelled_before_shipping, success_rate, confidence, source_type,
 60 |             observed_at, expires_at
 61 |           from courier_observations
 62 |           where store_id = $1 and provider = $2 and phone_hash = $3 and expires_at > $4
 63 |           order by observed_at desc limit 1
 64 |         `,
 65 |         [input.storeId, input.provider, input.phoneHash, input.at],
 66 |       );
 67 |       return result.rows[0] ? observationFromRow(result.rows[0]) : null;
 68 |     },
 69 |     async save(input): Promise<void> {
 70 |       await pool.query(
 71 |         `
 72 |           insert into courier_observations (
 73 |             id, store_id, provider, phone_hash, total_orders, delivered_orders,
 74 |             returned_orders, cancelled_before_shipping, success_rate, confidence,
 75 |             source_type, observed_at, expires_at
 76 |           ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
 77 |         `,
 78 |         [
 79 |           `cob_${randomUUID()}`,
 80 |           input.storeId,
 81 |           input.observation.provider,
 82 |           input.phoneHash,
 83 |           input.observation.totalOrders,
 84 |           input.observation.deliveredOrders,
 85 |           input.observation.returnedOrders,
 86 |           input.observation.cancelledBeforeShipping,
 87 |           input.observation.successRate,
 88 |           input.observation.confidence,
 89 |           input.observation.source,
 90 |           input.observation.observedAt,
 91 |           input.observation.expiresAt,
 92 |         ],
 93 |       );
 94 |     },
 95 |   },
 96 |   health: {
 97 |     async started(jobId, at): Promise<void> {
 98 |       await jobs.started(jobId, workerId, at);
 99 |     },
100 |     async completed(jobId, at): Promise<void> {
101 |       await jobs.completed(jobId, workerId, at);
102 |     },
103 |     async failed(jobId, code, retryable, at): Promise<void> {
104 |       await jobs.failed(jobId, workerId, code, retryable, at);
105 |     },
106 |   },
107 | });
108 |
109 | async function run(): Promise<void> {
110 |   log.info('courier.sync.worker.started', { worker_id: workerId });
111 |   while (!stopping) {
112 |     try {
113 |       const job = await jobs.claim(workerId);
114 |       if (!job) {
115 |         await new Promise((resolve) => setTimeout(resolve, pollMs));
116 |         continue;
117 |       }
118 |       let payload: ReturnType<typeof parsePayload>;
119 |       try {
120 |         payload = parsePayload(job.payload, job);
121 |       } catch (error) {
122 |         await jobs.failed(job.id, workerId, errorCode(error, 'INVALID_JOB_PAYLOAD'), false);
123 |         throw error;
124 |       }
125 |       await syncWorker.sync({
126 |         jobId: job.id,
127 |         storeId: job.storeId,
128 |         courierAccountId: job.courierAccountId,
129 |         provider: job.provider,
130 |         phone: payload.phone,
131 |         phoneHash: payload.phoneHash,
132 |         force: payload.force,
133 |       });
134 |     } catch (error) {
135 |       log.error('courier.sync.worker.error', {
136 |         code: errorCode(error, 'WORKER_TICK_FAILED'),
137 |         worker_id: workerId,
138 |       });
139 |       await new Promise((resolve) => setTimeout(resolve, Math.min(pollMs, 5_000)));
140 |     }
141 |   }
142 |   await pool.end();
143 | }
144 |
145 | interface ObservationRow {
146 |   provider: 'steadfast' | 'pathao' | 'redx' | 'aggregator';
147 |   total_orders: number;
148 |   delivered_orders: number;
149 |   returned_orders: number;
150 |   cancelled_before_shipping: number;
151 |   success_rate: string | null;
152 |   confidence: string;
153 |   source_type: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
154 |   observed_at: Date;
155 |   expires_at: Date;
156 | }
157 |
158 | function parsePayload(
159 |   value: unknown,
160 |   job: ClaimedCourierJob,
161 | ): { phone: string; phoneHash: string; force: boolean } {
162 |   if (!value || typeof value !== 'object') throw invalidPayload('Courier job payload is invalid');
163 |   const row = value as Record<string, unknown>;
164 |   if (![row.phone, row.phoneHash].every((item) => typeof item === 'string')) {
165 |     throw invalidPayload('Courier job payload is incomplete');
166 |   }
167 |   if (typeof row.organizationId === 'string' && row.organizationId !== job.organizationId) {
168 |     throw invalidPayload('Courier job organization scope does not match the account');
169 |   }
170 |   if (typeof row.storeId === 'string' && row.storeId !== job.storeId) {
171 |     throw invalidPayload('Courier job store scope does not match the account');
172 |   }
173 |   if (typeof row.provider === 'string' && row.provider !== job.provider) {
174 |     throw invalidPayload('Courier job provider does not match the account');
175 |   }
176 |   return {
177 |     phone: String(row.phone),
178 |     phoneHash: String(row.phoneHash),
179 |     force: row.force === true,
180 |   };
181 | }
182 |
183 | function invalidPayload(message: string): Error & { code: string } {
184 |   return Object.assign(new Error(message), { code: 'INVALID_JOB_PAYLOAD' });
185 | }
186 |
187 | function errorCode(error: unknown, fallback: string): string {
188 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
189 | }
190 |
191 | function observationFromRow(row: ObservationRow): CourierObservation {
192 |   return {
193 |     provider: row.provider,
194 |     totalOrders: row.total_orders,
195 |     deliveredOrders: row.delivered_orders,
196 |     returnedOrders: row.returned_orders,
197 |     cancelledBeforeShipping: row.cancelled_before_shipping,
198 |     successRate: row.success_rate === null ? null : Number(row.success_rate),
199 |     confidence: Number(row.confidence),
200 |     source: row.source_type,
201 |     observedAt: row.observed_at.toISOString(),
202 |     expiresAt: row.expires_at.toISOString(),
203 |   };
204 | }
205 |
206 | const stop = (): void => {
207 |   stopping = true;
208 | };
209 | process.once('SIGTERM', stop);
210 | process.once('SIGINT', stop);
211 | await run();
212 |
```

### workers/event-worker/src/runner.ts

Bytes: 5669
SHA-256: bcced6907a3c5d69551f2341df74e1c55d401fcaad84cce6b386feb8cbc44187
Lines: 1-173 of 173

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  4 | import { createStructuredLogger } from '@ozzyl/observability';
  5 | import type { DomainEvent } from '@ozzyl/shared-types';
  6 | import { EventWorker } from './index.js';
  7 | import {
  8 |   PostgresWebhookDeliveryQueue,
  9 |   WebhookDeliveryLeaseError,
 10 |   type ClaimedWebhookDelivery,
 11 | } from './postgres.js';
 12 |
 13 | const required = (name: string): string => {
 14 |   const value = process.env[name];
 15 |   if (!value) throw new Error(`${name} is required`);
 16 |   return value;
 17 | };
 18 |
 19 | const positiveInteger = (name: string, fallback: number): number => {
 20 |   const value = Number(process.env[name] ?? fallback);
 21 |   if (!Number.isSafeInteger(value) || value <= 0) {
 22 |     throw new Error(`${name} must be a positive integer`);
 23 |   }
 24 |   return value;
 25 | };
 26 |
 27 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 28 | const cipher = new AesGcmEnvelopeCipher(
 29 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 30 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 31 | );
 32 | const pollMs = positiveInteger('EVENT_WORKER_POLL_MS', 5_000);
 33 | const leaseMs = positiveInteger('EVENT_WORKER_LEASE_MS', 60_000);
 34 | const timeoutMs = positiveInteger('WEBHOOK_TIMEOUT_MS', 5_000);
 35 | const maxAttempts = positiveInteger('EVENT_WORKER_MAX_ATTEMPTS', 5);
 36 | if (leaseMs <= timeoutMs + 5_000) {
 37 |   throw new Error('EVENT_WORKER_LEASE_MS must exceed WEBHOOK_TIMEOUT_MS by more than 5000ms');
 38 | }
 39 | const workerId = process.env.EVENT_WORKER_ID ?? `event-${randomUUID()}`;
 40 | const log = createStructuredLogger({
 41 |   service: 'event-worker',
 42 |   environment: process.env.NODE_ENV ?? 'development',
 43 | });
 44 | const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs, maxAttempts });
 45 | let stopping = false;
 46 |
 47 | async function run(): Promise<void> {
 48 |   log.info('event.worker.started', { worker_id: workerId });
 49 |   while (!stopping) {
 50 |     const delivery = await queue.claim(workerId).catch((error) => {
 51 |       logError(error, 'EVENT_CLAIM_FAILED');
 52 |       return null;
 53 |     });
 54 |     if (!delivery) {
 55 |       await sleep(pollMs);
 56 |       continue;
 57 |     }
 58 |
 59 |     try {
 60 |       const startedAt = new Date();
 61 |       await queue.started(delivery.id, workerId, startedAt);
 62 |       const event = parseEvent(delivery);
 63 |       if (!delivery.endpointActive) {
 64 |         await queue.failed(delivery.id, workerId, {
 65 |           errorCode: 'ENDPOINT_INACTIVE',
 66 |           at: new Date(),
 67 |         });
 68 |         continue;
 69 |       }
 70 |       const signingSecret= [REDACTED_SECRET](delivery);
 71 |       const worker = new EventWorker(queue.repositoryFor(delivery, workerId), {
 72 |         timeoutMs,
 73 |         maxAttempts,
 74 |       });
 75 |       await worker.deliver({
 76 |         endpoint: {
 77 |           id: delivery.endpointId,
 78 |           url: delivery.endpointUrl,
 79 |           signingSecret,
 80 |           active: true,
 81 |         },
 82 |         event,
 83 |         attempt: delivery.attempts + 1,
 84 |       });
 85 |     } catch (error) {
 86 |       if (!(error instanceof WebhookDeliveryLeaseError)) {
 87 |         const code = errorCode(error, 'EVENT_DELIVERY_FAILED');
 88 |         await queue
 89 |           .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
 90 |           .catch((failure) => logError(failure, 'EVENT_FAILURE_STATE_LOST'));
 91 |       }
 92 |       logError(error, 'EVENT_DELIVERY_FAILED');
 93 |     }
 94 |   }
 95 |   await pool.end();
 96 | }
 97 |
 98 | function parseEvent(delivery: ClaimedWebhookDelivery): DomainEvent {
 99 |   const value = delivery.eventPayload;
100 |   if (!value || typeof value !== 'object') throw coded('INVALID_EVENT_PAYLOAD');
101 |   const event = value as Record<string, unknown>;
102 |   const allowedTypes = new Set([
103 |     'assessment.completed',
104 |     'verification.verified',
105 |     'verification.failed',
106 |     'courier.connection_failed',
107 |     'order.outcome_recorded',
108 |     'usage.limit_warning',
109 |   ]);
110 |   if (
111 |     event.id !== delivery.eventId ||
112 |     event.type !== delivery.eventType ||
113 |     typeof event.type !== 'string' ||
114 |     !allowedTypes.has(event.type) ||
115 |     event.organizationId !== delivery.organizationId ||
116 |     (delivery.storeId === null
117 |       ? event.storeId !== undefined
118 |       : event.storeId !== delivery.storeId) ||
119 |     typeof event.occurredAt !== 'string' ||
120 |     Number.isNaN(Date.parse(event.occurredAt)) ||
121 |     new Date(event.occurredAt).getTime() !== delivery.occurredAt.getTime() ||
122 |     !event.payload ||
123 |     typeof event.payload !== 'object'
124 |   ) {
125 |     throw coded('INVALID_EVENT_PAYLOAD');
126 |   }
127 |   return event as unknown as DomainEvent;
128 | }
129 |
130 | function decryptSigningSecret(delivery: ClaimedWebhookDelivery): string {
131 |   try {
132 |     const value = cipher.decrypt<unknown>(
133 |       delivery.secretEncrypted,
134 |       `webhook-endpoint:${delivery.endpointId}`,
135 |     );
136 |     const signingSecret =
137 |       typeof value === 'string'
138 |         ? value
139 |         : value && typeof value === 'object' && 'signingSecret' in value
140 |           ? String(value.signingSecret)
141 |           : '';
142 |     if (signingSecret.length < 16) throw new Error('Signing secret is invalid');
143 |     return signingSecret;
144 |   } catch {
145 |     throw coded('WEBHOOK_SECRET_DECRYPTION_FAILED');
146 |   }
147 | }
148 |
149 | function coded(code: string): Error & { code: string } {
150 |   return Object.assign(new Error(code), { code });
151 | }
152 |
153 | function errorCode(error: unknown, fallback: string): string {
154 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
155 | }
156 |
157 | function logError(error: unknown, fallback: string): void {
158 |   log.error('event.worker.error', {
159 |     code: errorCode(error, fallback),
160 |     worker_id: workerId,
161 |   });
162 | }
163 |
164 | const sleep = (milliseconds: number): Promise<void> =>
165 |   new Promise((resolve) => setTimeout(resolve, milliseconds));
166 |
167 | const stop = (): void => {
168 |   stopping = true;
169 | };
170 | process.once('SIGTERM', stop);
171 | process.once('SIGINT', stop);
172 | await run();
173 |
```

### workers/verification-worker/src/runner.ts

Bytes: 4727
SHA-256: cb4690fd4ab6335cdd4c52f5dcbc9663be6aed8b78d8449e2fba7b043a02230a
Lines: 1-129 of 129

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  4 | import { createStructuredLogger } from '@ozzyl/observability';
  5 | import type { OtpDeliveryProvider } from '@ozzyl/verification';
  6 | import { VerificationWorker } from './index.js';
  7 | import { PostgresVerificationDeliveryQueue, VerificationDeliveryLeaseError } from './postgres.js';
  8 | import { decryptAndValidateVerificationPayload } from './payload.js';
  9 |
 10 | const required = (name: string): string => {
 11 |   const value = process.env[name];
 12 |   if (!value) throw new Error(`${name} is required`);
 13 |   return value;
 14 | };
 15 |
 16 | const positiveInteger = (name: string, fallback: number): number => {
 17 |   const value = Number(process.env[name] ?? fallback);
 18 |   if (!Number.isSafeInteger(value) || value <= 0)
 19 |     throw new Error(`${name} must be a positive integer`);
 20 |   return value;
 21 | };
 22 |
 23 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 24 | const cipher = new AesGcmEnvelopeCipher(
 25 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 26 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 27 | );
 28 | const otpSecret = required('OTP_HASH_SECRET');
 29 | const phoneHmacKey = required('PHONE_HMAC_KEY');
 30 | const pollMs = positiveInteger('VERIFICATION_WORKER_POLL_MS', 5_000);
 31 | const leaseMs = positiveInteger('VERIFICATION_WORKER_LEASE_MS', 60_000);
 32 | const timeoutMs = positiveInteger('OTP_PROVIDER_TIMEOUT_MS', 10_000);
 33 | const maxAttempts = positiveInteger('VERIFICATION_WORKER_MAX_ATTEMPTS', 5);
 34 | if (leaseMs <= timeoutMs + 5_000) {
 35 |   throw new Error(
 36 |     'VERIFICATION_WORKER_LEASE_MS must exceed OTP_PROVIDER_TIMEOUT_MS by more than 5000ms',
 37 |   );
 38 | }
 39 | const workerId = process.env.VERIFICATION_WORKER_ID ?? `verification-${randomUUID()}`;
 40 | const log = createStructuredLogger({
 41 |   service: 'verification-worker',
 42 |   environment: process.env.NODE_ENV ?? 'development',
 43 | });
 44 | const provider = await loadProvider(required('OTP_PROVIDER_MODULE'));
 45 | const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs, maxAttempts });
 46 | let stopping = false;
 47 |
 48 | async function run(): Promise<void> {
 49 |   log.info('verification.worker.started', { worker_id: workerId });
 50 |   while (!stopping) {
 51 |     const delivery = await queue.claim(workerId).catch((error) => {
 52 |       logError(error, 'VERIFICATION_CLAIM_FAILED');
 53 |       return null;
 54 |     });
 55 |     if (!delivery) {
 56 |       await sleep(pollMs);
 57 |       continue;
 58 |     }
 59 |
 60 |     try {
 61 |       await queue.started(delivery.id, workerId);
 62 |       const payload = decryptAndValidateVerificationPayload(delivery, {
 63 |         cipher,
 64 |         phoneHmacKey,
 65 |         otpSecret,
 66 |       });
 67 |       const worker = new VerificationWorker(provider, queue.reporterFor(delivery, workerId), {
 68 |         maxAttempts,
 69 |         timeoutMs,
 70 |       });
 71 |       await worker.process({
 72 |         jobId: delivery.id,
 73 |         verificationId: delivery.verificationId,
 74 |         organizationId: delivery.organizationId,
 75 |         storeId: delivery.storeId,
 76 |         phone: payload.phone,
 77 |         otp: payload.otp,
 78 |         purpose: delivery.purpose,
 79 |         expiresAt: delivery.expiresAt,
 80 |         attempt: delivery.attempts + 1,
 81 |       });
 82 |     } catch (error) {
 83 |       if (!(error instanceof VerificationDeliveryLeaseError)) {
 84 |         const code = errorCode(error, 'VERIFICATION_DELIVERY_FAILED');
 85 |         await queue
 86 |           .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
 87 |           .catch((failure) => logError(failure, 'VERIFICATION_FAILURE_STATE_LOST'));
 88 |       }
 89 |       logError(error, 'VERIFICATION_DELIVERY_FAILED');
 90 |     }
 91 |   }
 92 |   await pool.end();
 93 | }
 94 |
 95 | async function loadProvider(moduleName: string): Promise<OtpDeliveryProvider> {
 96 |   const loaded = (await import(moduleName)) as {
 97 |     createOtpDeliveryProvider?: () => OtpDeliveryProvider | Promise<OtpDeliveryProvider>;
 98 |   };
 99 |   if (typeof loaded.createOtpDeliveryProvider !== 'function') {
100 |     throw new Error('OTP provider module must export createOtpDeliveryProvider()');
101 |   }
102 |   const configured = await loaded.createOtpDeliveryProvider();
103 |   if (!configured || typeof configured.send !== 'function') {
104 |     throw new Error('OTP provider module returned an invalid provider');
105 |   }
106 |   return configured;
107 | }
108 |
109 | function errorCode(error: unknown, fallback: string): string {
110 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
111 | }
112 |
113 | function logError(error: unknown, fallback: string): void {
114 |   log.error('verification.worker.error', {
115 |     code: errorCode(error, fallback),
116 |     worker_id: workerId,
117 |   });
118 | }
119 |
120 | const sleep = (milliseconds: number): Promise<void> =>
121 |   new Promise((resolve) => setTimeout(resolve, milliseconds));
122 |
123 | const stop = (): void => {
124 |   stopping = true;
125 | };
126 | process.once('SIGTERM', stop);
127 | process.once('SIGINT', stop);
128 | await run();
129 |
```

## Skipped Files

- package-lock.json [File is too large (251116 bytes). Limit: 100000 bytes.]
- packages/observability/ [not a file]
