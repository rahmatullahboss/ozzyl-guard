# CodexPro Context Bundle

Generated: 2026-07-28T03:06:11.851Z
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
## feat/durable-work-retention-archive
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M .ai-bridge/pro-context.md
 M README.md
 M docs/README.md
 M docs/database/database-design.md
 M docs/database/durable-work-replay-ledger.md
 M docs/operations/deployment.md
 M docs/operations/operations-observability.md
 M docs/roadmap/risk-register.md
 M docs/security/security-privacy.md
 M docs/testing/testing-strategy.md
 M package.json
 M packages/database/migrations/manifest.json
 M packages/database/package.json
 M packages/database/src/durable-work-schema.ts
 M packages/database/src/index.ts
 M packages/database/src/runtime-role.postgres.test.ts
 M packages/database/src/runtime-role.test.ts
 M packages/database/src/runtime-role.ts
 M tracker.yml
?? docs/database/durable-work-retention.md
?? docs/operations/durable-work-retention-runbook.md
?? packages/database/migrations/0013_durable_work_archives.sql
?? packages/database/src/durable-work-retention-cli.ts
?? packages/database/src/durable-work-retention.postgres.test.ts
?? packages/database/src/durable-work-retention.test.ts
?? packages/database/src/durable-work-retention.ts
```

## Recent Commits

```text
f19e9b4 (HEAD -> feat/durable-work-retention-archive, origin/main, main) docs: record worker heartbeat CI evidence (#31)
6ab01a7 feat(workers): renew durable job leases (#30)
3c31ae7 docs: record API observability CI evidence (#29)
00d6eec feat(api): add safe request observability (#28)
cc8d890 docs: record observability CI evidence (#27)
d8ef4ac feat(observability): add safe structured worker logging (#26)
b61af36 docs: sync browser dead-letter evidence
27cff21 feat: add browser dead-letter operations
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
  7 | A runnable standalone MVP foundation and seventeen production-hardening slices are complete:
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
 25 | 17. maintenance-only preview-first retention for old terminal durable work, with secret-free archive evidence persisted before atomic source deletion, bounded batches, runtime-role denial, and preserved replay/audit evidence.
 26 |
 27 | Concrete provider selection and provisioning remain external production work.
 28 |
 29 | ## Completed
 30 |
 31 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 32 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 33 | - [x] Canonical shared API/error/event contracts
 34 | - [x] PostgreSQL/Drizzle schema and thirteen append-only migrations
 35 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 36 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 37 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 38 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 39 | - [x] Courier adapter contract and Steadfast normalized adapter
 40 | - [x] Playwright Steadfast session driver with structured errors
 41 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 42 | - [x] Runnable PostgreSQL courier session and observation workers
 43 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 44 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 45 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 46 | - [x] API OTP send returns queued work without provider network I/O
 47 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 48 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 49 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 50 | - [x] Explicit-role platform admin with live global operations data
 51 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 52 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 53 | - [x] Architecture dependency-boundary CI guard
 54 | - [x] Provider-neutral production deployment topology ADR
 55 | - [x] Managed PostgreSQL production baseline ADR
 56 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 57 | - [x] Managed secrets and KMS envelope-encryption ADR
 58 | - [x] Vendor-neutral OpenTelemetry observability ADR
 59 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 60 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 61 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 62 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 63 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 64 | - [x] Concurrent usage reservations cannot exceed the plan limit
 65 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 66 | - [x] Concurrent outcome writes resolve as one insert and one replay
 67 | - [x] Operation idempotency records remain isolated by organization and store
 68 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 69 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 70 | - [x] Expired or previous courier owners cannot complete or fail jobs
 71 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 72 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 73 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 74 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 75 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 76 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 77 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 78 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 79 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 80 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 81 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 82 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 83 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 84 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 85 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 86 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 87 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 88 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 89 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 90 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 91 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 92 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 93 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 94 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 95 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 96 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 97 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 98 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 99 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
100 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
101 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
102 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
103 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
104 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
105 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
106 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
107 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
108 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
109 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
110 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
111 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
112 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
113 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
114 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
115 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
116 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
117 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
118 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
119 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
120 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
121 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
122 |
123 | ## Verified baseline
124 |
125 | - Formatting check: passed
126 | - ESLint with zero warnings: passed
127 | - Thirteen migration files ordered/non-empty/non-destructive: passed locally; source-branch CI is pending
128 | - First migration apply and immediate migration replay: passed
129 | - Architecture import boundaries: passed
130 | - Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
131 | - Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
132 | - Repository assertion inventory: 154 source assertions, including four retention input-boundary tests, four PostgreSQL retention/archive tests, and runtime archive-access denial; PostgreSQL-integrated source-branch CI is pending
133 | - Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
134 | - WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
135 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
136 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
137 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
138 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
139 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
140 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
141 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
142 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
143 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
144 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
145 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
146 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
147 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
148 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
149 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
150 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
151 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
152 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
153 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
154 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
155 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
156 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
157 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
158 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
159 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
160 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
161 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
162 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
163 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
164 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
165 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
166 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
167 | - Canonical documentation links before this slice: zero known broken internal links
168 | - `tracker.yml` YAML structure remains valid
169 | - Prohibited source-pattern search: no matches
170 |
171 | The repository-local continuation exporter was refreshed after the durable work retention milestone documentation and tracker were finalized.
172 |
173 | ## Next production milestone
174 |
175 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
176 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
177 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
178 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
179 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
180 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
181 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
182 |
183 | ## External blockers
184 |
185 | - Authorized Steadfast merchant/test credentials
186 | - Steadfast provider-terms and merchant-authorization review
187 | - Deployment platform, account, primary region, and budget
188 | - Managed PostgreSQL provider and service tier
189 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
190 | - Managed secret store and KMS/vault provider
191 | - Observability backend and retention policy
192 | - OTP provider account and credentials
193 | - Production account recovery/MFA or managed identity-provider decision
194 | - Repository visibility correction from currently reported public to expected private
195 | - Pilot outcome data for false-positive/false-negative calibration
196 |
197 | ## Non-negotiable continuation rules
198 |
199 | - Do not add a second risk engine.
200 | - Do not call providers from the risk engine or synchronous checkout path.
201 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
202 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
203 | - Do not use API keys as dashboard user sessions.
204 | - Require organization/store scope in all merchant repositories, events, and jobs.
205 | - Add new migrations; never edit applied migrations.
206 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
207 | - Keep Redis/cache state non-authoritative.
208 | - Keep unknown/provider failure explicit and policy-controlled.
209 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
210 |

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
 51 |
 52 | ## Source SaaS conflict resolutions
 53 |
 54 | | Conflict                                                                 | Decision                                                                                   |
 55 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 56 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 57 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 58 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 59 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 60 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 61 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 62 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 63 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 64 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 65 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 66 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 67 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 68 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 69 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 70 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 71 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 72 |
 73 | ## Approved reuse scope
 74 |
 75 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 76 | - Bangladesh phone normalization after tests
 77 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 78 | - WooCommerce settings/order hook/admin display skeleton
 79 | - API-key hash/display-prefix and usage-event concepts
 80 |
 81 | No product source code was copied during Phase 0.
 82 |
 83 | ## Pending decisions
 84 |
 85 | These require provider selection, provisioning, or separate ADRs before production implementation:
 86 |
 87 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 88 | - Specific deployment platform, account, and primary region
 89 | - Specific managed PostgreSQL provider and service tier
 90 | - Specific managed secret store and KMS/vault provider
 91 | - Specific observability backend and retention policy
 92 | - Redis-compatible cache provider when distributed coordination is required
 93 | - Dedicated broker only if measured scale requires superseding ADR 0008
 94 | - Worker scheduler/runtime implementation on the selected deployment platform
 95 | - OTP provider
 96 |
 97 | ## External requirements
 98 |
 99 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
100 |
101 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
102 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, .ai-bridge/pro-context.md, README.md, docs/README.md, docs/database/database-design.md, docs/database/durable-work-replay-ledger.md, docs/operations/deployment.md, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, package.json, packages/database/migrations/manifest.json, packages/database/package.json, packages/database/src/durable-work-schema.ts, packages/database/src/index.ts, packages/database/src/runtime-role.postgres.test.ts, packages/database/src/runtime-role.test.ts, packages/database/src/runtime-role.ts, tracker.yml, docs/database/durable-work-retention.md, docs/operations/durable-work-retention-runbook.md, packages/database/migrations/0013_durable_work_archives.sql, packages/database/src/durable-work-retention-cli.ts, packages/database/src/durable-work-retention.postgres.test.ts, packages/database/src/durable-work-retention.test.ts, packages/database/src/durable-work-retention.ts
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, docs/README.md, eslint.config.js, package.json, packages/database/package.json, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, docs/database/database-design.md, docs/database/durable-work-replay-ledger.md, docs/database/durable-work-retention.md, docs/operations/deployment.md, docs/operations/durable-work-retention-runbook.md, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/database/migrations/0013_durable_work_archives.sql, packages/database/migrations/manifest.json, packages/database/src/durable-work-retention-cli.ts, packages/database/src/durable-work-retention.postgres.test.ts, packages/database/src/durable-work-retention.test.ts

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

Bytes: 3346
SHA-256: bd15877af50d20afa12ab5bc8a9f866866a9f4b811e929d7e635d11d274d9edd
Lines: 1-56 of 56

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The durable worker heartbeat milestone is merged on `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`, with verification evidence merged as `f19e9b4183b9b809f5f8cc45e301a1fa8a819a8b`. Feature CI run `30322016826`, job `90159676583`, passed the twelve-migration baseline, 20 typechecks, 31 Turbo tasks with 145 assertions, 20 builds, GitGuardian, audit, restore, runtime-role, and PHP gates. Courier, webhook, and verification workers renew owner-checked leases, abort active provider I/O on renewal loss, and drain heartbeats before final state transitions. The current retention/archive slice adds migration `0013` and remains source-branch work until its PostgreSQL-integrated CI evidence is recorded.
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

### packages/database/package.json

Bytes: 734
SHA-256: 7f264a66a134708cc4f1b9c487a048b66a2ee47ce1cb5c0857866819e5d6e2c0
Lines: 1-26 of 26

```json
 1 | {
 2 |   "name": "@ozzyl/database",
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
14 |     "build": "tsup src/index.ts src/migrate.ts src/check-migrations.ts src/check-database-integrity.ts src/restore-rehearsal.ts src/apply-runtime-grants.ts src/durable-work-operations-cli.ts src/durable-work-retention-cli.ts --format esm --dts --sourcemap --clean",
15 |     "typecheck": "tsc -p tsconfig.json --noEmit",
16 |     "test": "vitest run --passWithNoTests"
17 |   },
18 |   "dependencies": {
19 |     "drizzle-orm": "0.45.2",
20 |     "pg": "^8.16.3"
21 |   },
22 |   "devDependencies": {
23 |     "@types/pg": "^8.15.5"
24 |   }
25 | }
26 |
```

### README.md

Bytes: 7675
SHA-256: 6ece04f3600ea0bcb3b608493099c729f98ecfe75604e3b2a0e1c25e689d5f7f
Lines: 1-150 of 150

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
 49 |
 50 | The following require external accounts or production decisions before live use:
 51 |
 52 | - Authorized Steadfast merchant/test credentials and provider-terms review
 53 | - A selected KMS/vault adapter, component service identities, access auditing, runtime wiring, and an audited background rewrite before replacing local v1 encryption in production
 54 | - OTP provider selection and credentials
 55 | - Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
 56 | - Production queue/cache/observability providers
 57 | - A separately provisioned retention-maintenance database identity, approved retention windows/holds, monitoring, and backup/PITR recovery before any scheduled archival
 58 | - Production source-platform hook deployment, explicit pilot-store selection, and outcome calibration before any enforcement or broad automatic blocking
 59 |
 60 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
 61 |
 62 | ## Repository structure
 63 |
 64 | ```text
 65 | apps/
 66 |   api/             Versioned API and PostgreSQL repositories
 67 |   dashboard/       Merchant operations dashboard
 68 |   admin/           Platform operations dashboard
 69 | workers/
 70 |   courier-session-worker/
 71 |   courier-sync-worker/
 72 |   verification-worker/
 73 |   event-worker/
 74 | packages/
 75 |   shared-types/
 76 |   risk-engine/
 77 |   courier-adapters/
 78 |   database/
 79 |   authentication/
 80 |   billing/
 81 |   verification/
 82 |   sdk/
 83 |   observability/
 84 | integrations/
 85 |   woocommerce/
 86 |   shopify/
 87 |   custom-js/
 88 |   multi-store-saas/
 89 | docs/
 90 | .ai-bridge/
 91 | ```
 92 |
 93 | ## Core rules
 94 |
 95 | 1. There is exactly one canonical risk engine.
 96 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
 97 | 3. Courier providers are isolated behind adapters and asynchronous workers.
 98 | 4. Merchant data is always organization/store scoped.
 99 | 5. Unknown customers are not automatically safe.
100 | 6. Provider failure does not automatically approve or block a customer.
101 | 7. Every assessment returns explainable signals and confidence.
102 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
103 | 9. Applied migrations are immutable; changes require a new migration.
104 | 10. Every integration consumes the same canonical API response.
105 |
106 | ## Local setup
107 |
108 | Prerequisites: Node.js 20.19+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
109 |
110 | ```bash
111 | npm install
112 | npm run db:check
113 | npm run db:migrate
114 | npm run db:integrity
115 | # After creating a separate non-owner PostgreSQL login outside the app:
116 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
117 | npm run bootstrap -w @ozzyl/api
118 | npm run dev:api
119 | ```
120 |
121 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
122 |
123 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
124 |
125 | Dead-letter operations are documented in the [durable work runbook](docs/operations/durable-work-dead-letter-runbook.md). They require a trusted environment, `DATABASE_URL`, an active owner/admin user ID, and exact organization/store scope.
126 |
127 | Merchant dashboard:
128 |
129 | ```bash
130 | npm run dev:dashboard
131 | ```
132 |
133 | Platform admin:
134 |
135 | ```bash
136 | npm run dev -w @ozzyl/admin
137 | ```
138 |
139 | Private workers:
140 |
141 | ```bash
142 | npm run start -w @ozzyl/courier-session-worker
143 | npm run start -w @ozzyl/courier-sync-worker
144 | npm run start -w @ozzyl/event-worker
145 | # Requires a reviewed provider module/account in addition to the standard secrets:
146 | npm run start -w @ozzyl/verification-worker
147 | ```
148 |
149 | ## Docker Compose
150 |
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

Bytes: 23751
SHA-256: 25314035f7916dcffceec7622e3b5d51d6a5adaeec1316e0e02d778c4b19b671
Lines: 1-210 of 210

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and seventeen production-hardening slices are complete:
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
 25 | 17. maintenance-only preview-first retention for old terminal durable work, with secret-free archive evidence persisted before atomic source deletion, bounded batches, runtime-role denial, and preserved replay/audit evidence.
 26 |
 27 | Concrete provider selection and provisioning remain external production work.
 28 |
 29 | ## Completed
 30 |
 31 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 32 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 33 | - [x] Canonical shared API/error/event contracts
 34 | - [x] PostgreSQL/Drizzle schema and thirteen append-only migrations
 35 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 36 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 37 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 38 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 39 | - [x] Courier adapter contract and Steadfast normalized adapter
 40 | - [x] Playwright Steadfast session driver with structured errors
 41 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 42 | - [x] Runnable PostgreSQL courier session and observation workers
 43 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 44 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 45 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 46 | - [x] API OTP send returns queued work without provider network I/O
 47 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 48 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 49 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 50 | - [x] Explicit-role platform admin with live global operations data
 51 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 52 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 53 | - [x] Architecture dependency-boundary CI guard
 54 | - [x] Provider-neutral production deployment topology ADR
 55 | - [x] Managed PostgreSQL production baseline ADR
 56 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 57 | - [x] Managed secrets and KMS envelope-encryption ADR
 58 | - [x] Vendor-neutral OpenTelemetry observability ADR
 59 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 60 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 61 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 62 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 63 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 64 | - [x] Concurrent usage reservations cannot exceed the plan limit
 65 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 66 | - [x] Concurrent outcome writes resolve as one insert and one replay
 67 | - [x] Operation idempotency records remain isolated by organization and store
 68 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 69 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 70 | - [x] Expired or previous courier owners cannot complete or fail jobs
 71 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 72 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 73 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 74 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 75 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 76 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 77 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 78 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 79 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 80 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 81 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 82 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 83 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 84 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 85 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 86 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 87 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 88 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 89 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 90 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 91 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 92 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 93 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 94 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 95 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 96 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 97 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 98 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 99 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
100 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
101 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
102 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
103 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
104 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
105 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
106 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
107 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
108 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
109 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
110 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
111 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
112 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
113 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
114 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
115 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
116 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
117 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
118 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
119 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
120 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
121 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
122 |
123 | ## Verified baseline
124 |
125 | - Formatting check: passed
126 | - ESLint with zero warnings: passed
127 | - Thirteen migration files ordered/non-empty/non-destructive: passed locally; source-branch CI is pending
128 | - First migration apply and immediate migration replay: passed
129 | - Architecture import boundaries: passed
130 | - Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
131 | - Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
132 | - Repository assertion inventory: 154 source assertions, including four retention input-boundary tests, four PostgreSQL retention/archive tests, and runtime archive-access denial; PostgreSQL-integrated source-branch CI is pending
133 | - Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
134 | - WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
135 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
136 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
137 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
138 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
139 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
140 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
141 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
142 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
143 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
144 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
145 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
146 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
147 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
148 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
149 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
150 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
151 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
152 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
153 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
154 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
155 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
156 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
157 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
158 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
159 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
160 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
161 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
162 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
163 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
164 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
165 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
166 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
167 | - Canonical documentation links before this slice: zero known broken internal links
168 | - `tracker.yml` YAML structure remains valid
169 | - Prohibited source-pattern search: no matches
170 |
171 | The repository-local continuation exporter was refreshed after the durable work retention milestone documentation and tracker were finalized.
172 |
173 | ## Next production milestone
174 |
175 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
176 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
177 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
178 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
179 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
180 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
181 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
182 |
183 | ## External blockers
184 |
185 | - Authorized Steadfast merchant/test credentials
186 | - Steadfast provider-terms and merchant-authorization review
187 | - Deployment platform, account, primary region, and budget
188 | - Managed PostgreSQL provider and service tier
189 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
190 | - Managed secret store and KMS/vault provider
191 | - Observability backend and retention policy
192 | - OTP provider account and credentials
193 | - Production account recovery/MFA or managed identity-provider decision
194 | - Repository visibility correction from currently reported public to expected private
195 | - Pilot outcome data for false-positive/false-negative calibration
196 |
197 | ## Non-negotiable continuation rules
198 |
199 | - Do not add a second risk engine.
200 | - Do not call providers from the risk engine or synchronous checkout path.
201 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
202 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
203 | - Do not use API keys as dashboard user sessions.
204 | - Require organization/store scope in all merchant repositories, events, and jobs.
205 | - Add new migrations; never edit applied migrations.
206 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
207 | - Keep Redis/cache state non-authoritative.
208 | - Keep unknown/provider failure explicit and policy-controlled.
209 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
210 |
```

### .ai-bridge/decisions.md

Bytes: 16192
SHA-256: 214df527421aac6eef1112ae146d56cf5c56faa8c8035bbd0e173fae9083552d
Lines: 1-102 of 102

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
 51 |
 52 | ## Source SaaS conflict resolutions
 53 |
 54 | | Conflict                                                                 | Decision                                                                                   |
 55 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 56 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 57 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 58 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 59 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 60 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 61 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 62 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 63 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 64 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 65 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 66 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 67 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 68 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 69 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 70 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 71 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 72 |
 73 | ## Approved reuse scope
 74 |
 75 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 76 | - Bangladesh phone normalization after tests
 77 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 78 | - WooCommerce settings/order hook/admin display skeleton
 79 | - API-key hash/display-prefix and usage-event concepts
 80 |
 81 | No product source code was copied during Phase 0.
 82 |
 83 | ## Pending decisions
 84 |
 85 | These require provider selection, provisioning, or separate ADRs before production implementation:
 86 |
 87 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 88 | - Specific deployment platform, account, and primary region
 89 | - Specific managed PostgreSQL provider and service tier
 90 | - Specific managed secret store and KMS/vault provider
 91 | - Specific observability backend and retention policy
 92 | - Redis-compatible cache provider when distributed coordination is required
 93 | - Dedicated broker only if measured scale requires superseding ADR 0008
 94 | - Worker scheduler/runtime implementation on the selected deployment platform
 95 | - OTP provider
 96 |
 97 | ## External requirements
 98 |
 99 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
100 |
101 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
102 |
```

### .ai-bridge/implementation-status.md

Bytes: 25168
SHA-256: 1e2ca5064a7f40772470db8bdbc5ca89c5741f6f5acb7dd8dc2dd231445b3e0a
Lines: 1-181 of 181

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
 17 | | Continuation documentation | done     | Tracker, plan, status, decisions, and generated `pro-context.md` are refreshed for the API observability milestone                                    |
 18 | | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
 19 | | Monorepo/tooling           | done     | 20 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
 20 | | CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
 21 | | Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
 22 | | Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
 23 | | Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |
 24 |
 25 | ## Product implementation
 26 |
 27 | | Area                             | Status   | Notes                                                                                                                                                                                      |
 28 | | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                            |
 30 | | Database/migrations              | done     | Thirteen append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                          |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                         |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                            |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                      |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                              |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                              |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                              |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                       |
 38 | | Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                  |
 39 | | Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                          |
 40 | | Durable work architecture        | done     | Claims, renewable leases, dead-letter replay, plus maintenance-only bounded terminal archival with evidence-before-delete and runtime-role denial                                          |
 41 | | Durable work operations          | done     | Failed work supports scoped replay; old completed/failed rows support preview-first maintenance archival while immutable replay/audit evidence remains                                     |
 42 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                     |
 43 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                            |
 44 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                   |
 45 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                   |
 46 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                |
 47 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                             |
 48 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                   |
 49 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                       |
 50 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                        |
 51 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting              |
 52 | | OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                            |
 53 | | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                             |
 54 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                  |
 55 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                 |
 56 | | PostgreSQL runtime role          | done     | Explicit DML grants, no migration history/DELETE/DDL/archive access; separate retention-maintenance identity and managed provisioning remain                                               |
 57 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                     |
 58 | | Observability                    | baseline | Canonical redacted logging covers API request lifecycle plus four private workers; metrics, traces, exporters, repository/provider instrumentation, backend, dashboards, and alerts remain |
 59 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                  |
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
 83 | - `npm run db:check`: thirteen migrations and committed SHA-256 manifest validated locally; source-branch CI is pending
 84 | - initial migration apply: passed with non-null history checksums
 85 | - immediate migration replay: passed as a clean no-op
 86 | - `npm run db:integrity`: complete contiguous history and checksums passed
 87 | - `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
 88 | - `npm run check:architecture`: passed
 89 | - `npm run typecheck`: 20/20 workspaces passed locally; source-branch CI is pending
 90 | - `npm run test`: 31/31 Turbo tasks passed locally; database suite passed 15 local assertions with 16 PostgreSQL assertions prepared; source inventory is 154 assertions
 91 | - `npm run build`: 20/20 workspace builds passed locally; source-branch CI is pending
 92 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 93 | - Observability tests prove fixed metadata, nested redaction, error message/stack omission, circular/binary/bigint handling, bounded strings, reserved-field protection, and sink-failure isolation
 94 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, safe unhandled-error serialization, and request availability during sink failure
 95 | - Lease-heartbeat tests prove non-overlapping renewal, owner/expiry enforcement, abort-on-renewal-loss propagation, and heartbeat drain before final courier/webhook/verification transitions
 96 | - Retention tests prove cutoff/status/batch/run-ID validation, terminal-only preview, payload-free evidence, archive-before-delete atomicity, ineligible-row preservation, replay-ledger preservation, idempotent reruns, and runtime archive-access denial
 97 | - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
 98 | - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
 99 | - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
100 | - Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
101 | - Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
102 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
103 | - Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
104 | - Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
105 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
106 | - Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
107 | - Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
108 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
109 | - Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
110 | - Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
111 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
112 | - Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
113 | - Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
114 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
115 | - Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
116 | - Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
117 | - Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
118 | - Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
119 | - Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
120 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
121 | - Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
122 | - Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
123 | - Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
124 | - Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
125 | - Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
126 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
127 | - Five real-PostgreSQL durable-work tests cover exact-store owner/admin listing, negative member authorization, concurrent duplicate replay, one immutable ledger/audit outcome, courier lease reset, scoped unexpired verification reopening, structural/expired rejection, cross-tenant isolation, and idempotency conflicts
128 | - Seven runtime-role tests now include insert-only replay-ledger privileges alongside migration-history, DELETE, DDL, ownership, and elevated-role denials
129 | - Durable-work dead-letter final run `29644234591`, job `88079650134`: twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
130 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
131 | - Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping
132 | - Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
133 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
134 | - Structured observability final run `30317190971`, job `90145176143`: twelve migrations, 20 typechecks, 31 Turbo test/build dependency tasks with 132 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
135 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
136 | - API request observability final run `30318999952`, job `90150731352`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 136 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
137 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
138 | - Durable worker heartbeat final run `30322016826`, job `90159676583`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 145 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
139 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
140 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
141 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
142 | - Previous canonical documentation checks found zero broken internal links
143 | - Prohibited insecure-pattern scan: zero matches
144 |
145 | The repository-local exporter was refreshed after the durable work retention documentation and tracker were finalized. Source-branch remote CI is pending.
146 |
147 | ## External blockers and production requirements
148 |
149 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
150 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
151 | - Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
152 | - Managed secret store and KMS/vault provider
153 | - Observability backend, retention, dashboards, alerts, and incident channels
154 | - Optional Redis-compatible cache only when distributed coordination is required
155 | - Authorized Steadfast test/merchant account
156 | - Provider-terms and merchant-authorization review
157 | - OTP provider selection/account
158 | - Production account recovery/MFA or managed identity-provider decision
159 | - Pilot merchants and verified outcome data for calibration
160 |
161 | ## Remaining risks
162 |
163 | - Steadfast UI/internal endpoint changes can break automation.
164 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
165 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
166 | - In-process API and browser-session rate limiting is not distributed across replicas.
167 | - Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
168 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
169 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
170 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
171 | - GitHub currently reports public repository visibility although the expected policy is private.
172 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
173 | - Structured logs are implemented for API request lifecycle and private worker startup/error paths, but repository/provider metrics, traces, exporters, dashboards, alerts, and managed retention are not yet implemented.
174 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
175 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
176 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
177 |
178 | ## Next milestone
179 |
180 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
181 |
```

### docs/database/database-design.md

Bytes: 17507
SHA-256: e59e214f9bcd653f117c1cd2d43b6aefd6c5cc2677208f1ab93e333fbe4dc8aa
Lines: 1-455 of 455

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
377 | ## Durable work retention subsystem
378 |
379 | ### `durable_work_archives`
380 |
381 | - composite primary key: work type and original work ID
382 | - organization and optional store scope
383 | - terminal status (`completed` or `failed`)
384 | - attempt count and bounded error code
385 | - terminal and source-created timestamps
386 | - archive timestamp, opaque archive-run ID, and maintenance database identity
387 |
388 | The archive table stores no courier payload, webhook event payload, encrypted verification payload, OTP/contact material, endpoint data, credentials, or provider message reference. A maintenance-only transaction locks old terminal source rows, writes or validates matching archive evidence, and deletes the source row only after evidence exists. The application runtime role is explicitly denied all archive-table privileges and retains no durable-source `DELETE` privilege.
389 |
390 | ## Initial migration boundaries
391 |
392 | Migration 0001 should establish only the Phase 1 foundation:
393 |
394 | - users
395 | - sessions
396 | - organizations
397 | - organization_members
398 | - stores
399 | - plans/entitlements
400 | - api_keys
401 | - usage_events
402 | - audit_events
403 |
404 | Courier, risk, verification, event, and reputation tables should be introduced in subsequent append-only migrations aligned with coherent milestones.
405 |
406 | Current ordered migrations:
407 |
408 | 1. `0001_foundation.sql` — identity, tenancy, plans, API keys, usage, and audit.
409 | 2. `0002_courier.sql` — courier accounts, encrypted credential/session records, observations, and jobs.
410 | 3. `0003_risk.sql` — risk policies, assessments, signals, and outcomes.
411 | 4. `0004_verification_events.sql` — OTP verification and webhook delivery foundation.
412 | 5. `0005_durable_operations.sql` — durable job payloads, idempotent outcomes, and idempotency records.
413 | 6. `0006_browser_access.sql` — explicit platform role plus browser dashboard/admin query indexes.
414 | 7. `0007_worker_leases.sql` — explicit courier-worker ownership, claim/lease timestamps, stale-job recovery support, and claim scheduling index.
415 | 8. `0008_webhook_delivery_leases.sql` — scoped canonical webhook event payloads, event-worker ownership/lease timestamps, completion state, and claim/scope indexes.
416 | 9. `0009_verification_delivery_queue.sql` — verification idempotency/attempt controls plus encrypted delivery jobs, owner leases, completion state, and claim/scope indexes.
417 | 10. `0010_native_shadow_comparisons.sql` — tenant-scoped native shadow comparison evidence and rollout state.
418 | 11. `0011_native_shadow_pilot.sql` — sampled attempt evidence and pilot reporting support.
419 | 12. `0012_durable_work_replays.sql` — immutable secret-free dead-letter replay evidence.
420 | 13. `0013_durable_work_archives.sql` — maintenance-only secret-free terminal work archive evidence.
421 |
422 | Migration 0006 does not store raw session material. `user_sessions.token_hash` remains the only persisted session-token representation. The merchant dashboard repository authorizes with `(user_id, organization_id, store_id)` before running any aggregate query.
423 |
424 | Migration 0007 is append-only and does not rewrite prior migration files. Courier jobs use explicit owner leases and relational account scope.
425 |
426 | Migration 0008 backfills endpoint-derived scope for prior delivery rows. Legacy rows whose canonical event payload cannot be reconstructed are terminalized with `LEGACY_EVENT_PAYLOAD_MISSING` rather than delivered with invented data.
427 |
428 | Migration 0009 leaves prior verification records valid, adds nullable idempotency keys for legacy rows, and introduces a separate encrypted delivery queue without placing plaintext phone or OTP material in existing tables.
429 |
430 | Migrations 0010–0012 add immutable shadow-pilot and replay evidence without weakening tenant scope. Migration 0013 adds the maintenance-only archive table; it does not automatically schedule deletion, grant runtime access, or modify prior queue payloads.
431 |
432 | ## Migration history integrity
433 |
434 | `packages/database/migrations/manifest.json` records the SHA-256 checksum for every ordered SQL migration. `db:check` requires the manifest and SQL file list to match exactly and rejects changed, missing, extra, empty, reordered, or prohibited destructive migration files.
435 |
436 | `ozzyl_guard_migrations` stores `name`, non-null `checksum_sha256`, and `applied_at`. The migration runner holds one PostgreSQL advisory lock on one session, rejects unknown or non-contiguous history, and compares every persisted checksum before applying new work. Existing name-only history rows may receive checksums once, transactionally, only from the committed manifest; the checksum column is then enforced `NOT NULL`.
437 |
438 | No numbered domain migration is added for this metadata hardening. The migration runner owns the internal history table, while all application tables and columns remain defined by append-only numbered migrations and the canonical schema package.
439 |
440 | ## Clean logical restore rehearsal
441 |
442 | `npm run db:restore-rehearsal` requires `DATABASE_URL` and a distinct pre-created `RESTORE_DATABASE_URL` with no public relations. It never creates, drops, cleans, or overwrites the source database. PostgreSQL credentials are supplied to client tools through `PG*` environment variables rather than command arguments.
443 |
444 | The rehearsal creates a custom-format `pg_dump`, restores it with `pg_restore`, validates complete migration history, compares a canonical public-schema fingerprint, table counts, sequence state, migration rows, and migration replay. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` additionally compares secret-safe per-table hashes of every row and is enabled in CI; large production-equivalent drills may use counts or a separately approved snapshot-integrity procedure when a full hash scan is too expensive.
445 |
446 | Repository CI applies the complete migration set twice, verifies the history table, and restores into a clean PostgreSQL 16 database. Managed-provider automated backup retention and point-in-time recovery must still be demonstrated separately before the merchant pilot.
447 |
448 | ## Runtime, migration, and maintenance database identities
449 |
450 | `packages/database/src/runtime-role.ts` defines the reviewed current-table application runtime policy. The migration owner validates the full public base-table inventory, revokes prior direct table/schema/sequence privileges, grants explicit required `SELECT`/`INSERT`/`UPDATE`, and then verifies effective privileges. `ozzyl_guard_migrations` and `durable_work_archives` remain inaccessible.
451 |
452 | The runtime role must already exist as a non-owner `LOGIN` without elevated attributes or inherited memberships. It cannot own the current database, public schema, or public relations and cannot receive `DELETE`, DDL, schema `CREATE`, migration-history access, archive-table access, or role-management privileges. Run `DATABASE_RUNTIME_ROLE=<role> npm run db:runtime-grants` after every migration release; an unreviewed new table causes the command to fail closed until the policy is updated.
453 |
454 | Retention preview/archive requires a distinct reviewed maintenance identity with archive read/insert and durable-source delete privileges. That identity must never be used by API or workers. The repository verifies required privileges before preview and archive, while production provisioning, rotation, access review, and scheduling remain external operations work.
455 |
```

### docs/database/durable-work-replay-ledger.md

Bytes: 4862
SHA-256: 613b243a9a2e52851c308ad4d2b6f7b44e5470eb60dc779efabd1532b40535eb
Lines: 1-84 of 84

```markdown
 1 | # Durable Work Replay Ledger
 2 |
 3 | This document supplements the canonical database design for migration `0012_durable_work_replays.sql` and [ADR 0012](../adr/0012-durable-work-dead-letter-operations.md).
 4 |
 5 | ## Purpose
 6 |
 7 | `durable_work_replays` is an immutable evidence ledger for explicit operator decisions that return valid terminal work to an existing PostgreSQL queue. It is not a second queue and does not copy job payloads.
 8 |
 9 | The source rows remain authoritative:
10 |
11 | - `courier_jobs`
12 | - `webhook_deliveries`
13 | - `verification_jobs`
14 |
15 | ## Columns
16 |
17 | | Column                 | Meaning                                                                                  |
18 | | ---------------------- | ---------------------------------------------------------------------------------------- |
19 | | `id`                   | Internal replay evidence ID                                                              |
20 | | `organization_id`      | Authoritative tenant organization                                                        |
21 | | `store_id`             | Exact active store scope                                                                 |
22 | | `requested_by_user_id` | Owner/admin user who requested replay; retained as nullable if the user is later removed |
23 | | `work_type`            | `courier_job`, `webhook_delivery`, or `verification_job`                                 |
24 | | `work_id`              | Internal source work ID; no payload is copied                                            |
25 | | `idempotency_key`      | Operator-supplied stable replay decision key                                             |
26 | | `previous_status`      | Source status before replay; constrained to `failed`                                     |
27 | | `previous_error_code`  | Structured source failure code                                                           |
28 | | `previous_attempts`    | Attempt count before the explicit replay reset                                           |
29 | | `replayed_status`      | Resulting queue status; constrained to `queued`                                          |
30 | | `replayed_at`          | Transaction time of the queue reset                                                      |
31 | | `created_at`           | Ledger insertion time                                                                    |
32 |
33 | ## Constraints
34 |
35 | - `(store_id, organization_id)` references the authoritative composite store scope from migration `0011`.
36 | - `(organization_id, store_id, idempotency_key)` is unique, so concurrent duplicates produce one durable replay decision.
37 | - `work_type` is constrained to the three supported durable-work categories.
38 | - `previous_status` is constrained to `failed`.
39 | - `previous_attempts` cannot be negative.
40 | - `replayed_status` is constrained to `queued`.
41 |
42 | A polymorphic foreign key to all three source tables is intentionally not used. The replay repository locks and revalidates the exact typed source relation in the same transaction before inserting evidence. This avoids copying source payloads or introducing three nullable target references while preserving tenant and state checks.
43 |
44 | ## Transaction boundary
45 |
46 | The first successful replay transaction performs:
47 |
48 | 1. active user/organization/store owner-or-admin authorization;
49 | 2. a transaction-scoped advisory lock for the tenant idempotency key;
50 | 3. existing replay lookup and target conflict validation;
51 | 4. typed source-row lock with exact active tenant relationship;
52 | 5. replayability validation;
53 | 6. queue reset to `queued` with cleared lease and terminal fields;
54 | 7. replay ledger insert;
55 | 8. append-only `audit_events` insert;
56 | 9. commit.
57 |
58 | Any failure rolls back the queue reset, replay evidence, and audit event together.
59 |
60 | ## Sensitive-data boundary
61 |
62 | The replay ledger must never contain:
63 |
64 | - courier request/response payloads
65 | - phone numbers or phone hashes
66 | - OTP values or OTP hashes
67 | - verification encrypted payloads
68 | - webhook event payloads
69 | - endpoint URLs or signing secrets
70 | - provider credentials, sessions, cookies, tokens, or raw response bodies
71 |
72 | ## Runtime privileges
73 |
74 | The least-privilege runtime role receives:
75 |
76 | - `SELECT` for idempotent replay reads and evidence inspection
77 | - `INSERT` for new immutable replay evidence
78 |
79 | It does not receive `UPDATE`, `DELETE`, table ownership, DDL, or migration-history access. Runtime grants must be reapplied after every migration. Migration `0013` additionally keeps the maintenance archive table completely outside the runtime role.
80 |
81 | ## Retention
82 |
83 | Replay evidence is operational audit material and is not deleted by durable source retention. Migration `0013` archives old terminal source rows into secret-free `durable_work_archives` metadata while preserving replay and audit evidence. Any future deletion policy for replay/archive evidence must still account for incident review, merchant support, legal/privacy requirements, and audit retention.
84 |
```

### docs/database/durable-work-retention.md

Bytes: 4181
SHA-256: f5572126a636e60f02e0fc8426346eca5f251a544bf70439f5ce57d66c1fcad8
Lines: 1-96 of 96

```markdown
 1 | # Durable Work Retention and Archive Model
 2 |
 3 | This document defines the canonical retention boundary introduced by migration `0013_durable_work_archives.sql`.
 4 |
 5 | ## Purpose
 6 |
 7 | Courier refresh jobs, webhook deliveries, and verification delivery jobs contain operational payloads that should not remain indefinitely after the work is terminal. The retention process removes old terminal source rows only after writing a bounded, secret-free archive record in the same PostgreSQL transaction.
 8 |
 9 | The archive is operational evidence, not a payload backup. It cannot reconstruct deleted courier payloads, webhook event bodies, encrypted verification payloads, or provider references.
10 |
11 | ## Eligible work
12 |
13 | Only these source states are eligible:
14 |
15 | - `completed`
16 | - `failed`
17 |
18 | The following are never eligible:
19 |
20 | - queued or scheduled work
21 | - claimed or processing work
22 | - retryable work waiting for another attempt
23 | - any row whose terminal timestamp is newer than the operator cutoff
24 |
25 | The repository enforces an absolute safety floor: the cutoff must be at least 24 hours before the maintenance run. Production policy should be more conservative.
26 |
27 | ## Recommended baseline windows
28 |
29 | Until legal, privacy, support, and incident-response owners approve different values:
30 |
31 | - keep completed durable work in the source queue for at least 30 days;
32 | - keep failed durable work in the source queue for at least 180 days so merchant support and reviewed replay remain possible;
33 | - retain `durable_work_replays`, `audit_events`, and `durable_work_archives` under a separately approved evidence-retention policy;
34 | - do not use this maintenance process to delete replay or audit evidence.
35 |
36 | These are operational baseline recommendations, not jurisdiction-specific legal advice.
37 |
38 | ## Archive record
39 |
40 | `durable_work_archives` stores only:
41 |
42 | - work type and original work ID;
43 | - organization and optional store scope;
44 | - terminal status;
45 | - attempt count;
46 | - bounded error code;
47 | - terminal timestamp;
48 | - source creation timestamp;
49 | - archive timestamp, opaque archive-run ID, and the maintenance database identity that committed the evidence.
50 |
51 | The table deliberately has no columns for:
52 |
53 | - courier payloads;
54 | - webhook event payloads or response bodies;
55 | - encrypted verification payloads;
56 | - OTP hashes or raw contact data;
57 | - provider message IDs;
58 | - endpoint URLs, signing material, credentials, cookies, or tokens.
59 |
60 | The primary key is `(work_type, work_id)`, making archive evidence idempotent for one original source row.
61 |
62 | ## Transaction and concurrency rules
63 |
64 | The archive operation:
65 |
66 | 1. validates a bounded global batch of at most 500 candidates;
67 | 2. re-locks selected source rows with `FOR UPDATE SKIP LOCKED`;
68 | 3. rechecks terminal status and cutoff after locking;
69 | 4. inserts archive evidence with `ON CONFLICT DO NOTHING`;
70 | 5. verifies any existing archive row exactly matches the locked source metadata;
71 | 6. deletes the source row only after matching archive evidence exists;
72 | 7. commits all archive and delete changes atomically.
73 |
74 | If evidence conflicts, source state changes, or any statement fails, the transaction rolls back. Locked or concurrently changed rows are skipped rather than forced.
75 |
76 | ## Access boundary
77 |
78 | The normal application runtime role is explicitly denied all privileges on `durable_work_archives` and has no `DELETE` privilege on durable source queues. Preview and archive commands require a reviewed maintenance or migration identity with:
79 |
80 | - `SELECT` and `INSERT` on `durable_work_archives`;
81 | - `DELETE` on `courier_jobs`, `webhook_deliveries`, and `verification_jobs`;
82 | - read access needed to derive tenant scope.
83 |
84 | Do not run retention commands using API or worker runtime credentials.
85 |
86 | ## Evidence preserved after source deletion
87 |
88 | The following remain authoritative after archival:
89 |
90 | - the secret-free `durable_work_archives` row;
91 | - any immutable `durable_work_replays` records;
92 | - existing `audit_events`;
93 | - parent business records such as verification sessions, subject to their own future retention policy.
94 |
95 | Because the source payload is intentionally deleted, post-commit restoration requires an approved backup or point-in-time recovery process. There is no automatic archive-to-source rehydration command.
96 |
```

### docs/operations/deployment.md

Bytes: 14084
SHA-256: dc5ca9ae34a5ab9d867932de64d728290d2c2b353dee8ca12cb33d65ba88d652
Lines: 1-202 of 202

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
 55 | The courier-sync worker uses `WORKER_LEASE_MS` with `WORKER_LEASE_RENEW_MS`, which defaults to one-third of the lease and must not exceed half of it. Each replica requires a stable unique `WORKER_ID`. Renewal loss aborts the active courier request and prevents a stale owner from completing or failing the job.
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
 68 | - optional `EVENT_WORKER_MAX_ATTEMPTS`, default `5`
 69 | - optional `WEBHOOK_TIMEOUT_MS`, default `5000`
 70 |
 71 | All numeric values must be positive integers. `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds, and `EVENT_WORKER_LEASE_RENEW_MS` must not exceed half the lease. Renewal loss aborts the active HTTP request and prevents a stale final-state transition.
 72 |
 73 | Set a stable unique `EVENT_WORKER_ID` for each production replica. When omitted, the process generates a unique runtime ID suitable for local use.
 74 |
 75 | The event worker needs:
 76 |
 77 | - PostgreSQL access to claim and transition `webhook_deliveries`;
 78 | - read access to the matching `webhook_endpoints` and scoped `stores` relationship;
 79 | - decrypt permission for endpoint signing-secret envelopes;
 80 | - DNS resolution and controlled HTTPS egress;
 81 | - no public ingress;
 82 | - no access to raw API keys, OTPs, courier credentials, or unrestricted merchant records.
 83 |
 84 | Production egress policy must deny private, metadata, link-local, and unauthorized networks even though application code validates literal and resolved destination addresses. Use a controlled resolver, egress proxy, firewall policy, or equivalent infrastructure boundary to reduce DNS-rebinding and route-change risk.
 85 |
 86 | ## Verification-worker runtime
 87 |
 88 | The verification worker requires:
 89 |
 90 | - `DATABASE_URL`;
 91 | - local/self-hosted `CREDENTIAL_ENCRYPTION_KEY` and `CREDENTIAL_ENCRYPTION_KEY_VERSION` until managed KMS supersedes them;
 92 | - `PHONE_HMAC_KEY` and `OTP_HASH_SECRET` matching the API deployment;
 93 | - a reviewed, bundled `OTP_PROVIDER_MODULE` exporting `createOtpDeliveryProvider()`;
 94 | - provider-specific secrets such as sender ID/API key supplied only through the approved secret manager;
 95 | - optional worker ID, poll, lease, lease-renewal, max-attempt, and provider-timeout settings.
 96 |
 97 | `VERIFICATION_WORKER_LEASE_MS` must exceed `OTP_PROVIDER_TIMEOUT_MS` by more than five seconds, and `VERIFICATION_WORKER_LEASE_RENEW_MS` must not exceed half the lease. Renewal loss aborts the active OTP request and prevents stale delivery state. Each replica needs a stable unique worker ID, private ingress, least-privilege database/KMS access, and only the egress required by the selected provider. The Compose service is behind the `verification` profile because no provider is selected or bundled in this milestone.
 98 |
 99 | ## Environment stages
100 |
101 | - local
102 | - CI/test
103 | - staging
104 | - production
105 |
106 | Test and live API keys are logically separated. Staging must not use production courier credentials or webhook signing secrets unless explicitly approved and isolated.
107 |
108 | Staging and production require separate:
109 |
110 | - databases and runtime identities;
111 | - secret namespaces and KMS access;
112 | - provider credentials and webhook endpoint secrets;
113 | - dashboard/admin origins and session-cookie settings;
114 | - DNS/egress policies;
115 | - telemetry projects or equivalent access boundaries.
116 |
117 | ## Release sequence
118 |
119 | 1. Build immutable artifacts.
120 | 2. Run migration-file, formatting, lint, and architecture checks.
121 | 3. Apply migrations as a separate release job while the migration identity holds the repository advisory lock.
122 | 4. Run the migration command again to verify replay/no-op behavior.
123 | 5. Run `npm run db:integrity` and fail the release on manifest, history, gap, null-checksum, or checksum mismatch.
124 | 6. As the migration owner, run `DATABASE_RUNTIME_ROLE=<external-runtime-role> npm run db:runtime-grants`; fail if the role is missing, elevated, inherited, owns database objects, the table policy is stale, or effective privileges exceed the reviewed policy.
125 | 7. Provision a separate reviewed maintenance identity for retention operations. It must not be used by API/workers and must have only archive read/insert plus durable-source delete/read privileges required by the runbook.
126 | 8. Restore a release-candidate backup into a separate clean staging/recovery database and verify schema/history/replay; use full data hashes when the dataset and maintenance window permit.
127 | 9. Verify database and service readiness using runtime credentials rather than migration-owner credentials.
128 | 10. Deploy API and private workers independently.
129 | 11. Verify event-worker database, KMS/decrypt, DNS, and controlled-egress access.
130 | 12. Deploy static dashboard/admin assets.
131 | 13. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
132 | 14. Compare decision, outcome, outbox, and delivery metrics before broader rollout.
133 | 15. Roll back application artifacts without editing applied migrations when release validation fails.
134 |
135 | All applied migrations are append-only and immutable. Future webhook, verification-delivery, replay, or retention schema changes require a new migration. Every new SQL migration must also add its reviewed SHA-256 entry to the manifest; regenerating the manifest to bless an unexplained edit is prohibited.
136 |
137 | ### Database integrity and restore commands
138 |
139 | `npm run db:integrity` is read-only and requires a complete contiguous history with non-null matching checksums. `npm run db:restore-rehearsal` requires a separately created empty target through `RESTORE_DATABASE_URL`; it refuses the same database and any target with existing public relations. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` enables a full table scan/hash comparison and should be scheduled only for an approved maintenance or isolated snapshot window on large datasets.
140 |
141 | ## Provider-selection work still required
142 |
143 | The architecture is accepted, but the following concrete selections and provisioning remain external production work:
144 |
145 | - managed application/container platform and primary region;
146 | - managed PostgreSQL provider and service tier;
147 | - managed secret store and KMS/vault provider;
148 | - observability backend and retention policy;
149 | - Redis-compatible cache provider if multi-replica coordination requires it;
150 | - OTP provider;
151 | - controlled DNS/egress, TLS, email, and incident-notification services.
152 |
153 | A dedicated external broker is not required for the selected merchant pilot. PostgreSQL remains the durable job/outbox source of truth unless a later ADR supersedes that boundary with measured scale evidence.
154 |
155 | The Docker Compose setup is a development/self-hosted baseline, not the final production environment. The local AES-GCM key environment variable is not an approved production KMS design.
156 |
157 | ## Security requirements
158 |
159 | - Use managed secrets and least-privilege service identities.
160 | - Select and wire a reviewed KMS/vault adapter and component service identities before switching runtime writes to managed-envelope v2; then run an audited background rewrite before retiring local v1 keys.
161 | - Give migration ownership, application runtime access, and retention maintenance distinct PostgreSQL identities. The migration owner runs schema/history/grant operations; runtime services use non-owner explicit DML grants; retention maintenance uses a separately reviewed identity and is never embedded in API or worker services.
162 | - Split API, session worker, sync worker, event worker, and verification worker into narrower roles on the selected platform when supported; each must remain no more privileged than the reviewed repository runtime policy.
163 | - Do not put secrets in images, CI logs, command arguments, source maps, logs, traces, or cache values.
164 | - Restrict browser-worker ingress, egress, and filesystem access where practical.
165 | - Restrict event-worker ingress and egress; block private and metadata networks at the infrastructure layer.
166 | - Encrypt database storage and backups and test restore.
167 | - Rotate API-key pepper, phone HMAC key, webhook secrets, and encryption keys through documented procedures.
168 | - Keep API keys separate from dashboard user sessions.
169 | - Keep PostgreSQL authoritative for sessions, idempotency, usage, audit records, jobs, and webhook outbox state.
170 | - Do not expose worker services or the database publicly unless no private option exists and compensating controls are documented.
171 | - Fail closed when endpoint/job decryption, event/verification scope validation, payload assertions, or worker lease ownership fails.
172 |
173 | ## Production validation gates
174 |
175 | Before a selected merchant pilot:
176 |
177 | - all thirteen migrations match the committed SHA-256 manifest and apply to a clean managed PostgreSQL 16+ database;
178 | - migration replay is a clean no-op and migration-history integrity passes;
179 | - a logical restore rehearsal succeeds against a distinct clean target;
180 | - runtime, migration, and retention-maintenance database roles are separated; the runtime role is externally provisioned as non-owner/non-elevated, and `db:runtime-grants` plus effective-permission checks pass after migrations;
181 | - the maintenance identity can run retention preview/archive while the runtime identity cannot read archive evidence or delete durable source rows;
182 | - point-in-time restore is demonstrated;
183 | - API readiness, graceful shutdown, and artifact rollback are demonstrated;
184 | - private workers have no public ingress;
185 | - event-worker egress cannot reach metadata, private, link-local, or unauthorized networks;
186 | - DNS and redirect SSRF tests pass in the selected runtime/network topology;
187 | - KMS decryption fails closed and key rotation is tested;
188 | - webhook endpoint-secret rotation and re-encryption are tested;
189 | - outbox backlog, stale lease recovery, retries, terminal failures, and delivery alerts are exercised;
190 | - telemetry redaction tests and core alerts pass;
191 | - queue lag, dead-letter, provider-degraded, and database alerts are exercised;
192 | - the encrypted verification queue exists before OTP provider delivery is enabled;
193 | - broad automatic blocking remains disabled.
194 |
195 | ## Current verification boundary
196 |
197 | The latest merged feature CI run `30322016826`, job `90159676583`, verifies the twelve-migration heartbeat baseline, immediate replay, non-null history checksums, clean full-data-hash logical restore, runtime-role grants/effective permissions, architecture boundaries, 20 workspace typechecks, 31 Turbo tasks with 145 assertions, 20 builds, dependency audit, formatting, lint, GitGuardian, and WooCommerce PHP syntax.
198 |
199 | The current retention source branch adds manifest-bound migration `0013`, a maintenance-only archive repository/CLI, runtime archive-table denial, four local input-boundary tests, and four PostgreSQL archival tests. Thirteen-migration restore/runtime-role and 154-assertion verification remain pending source-branch CI.
200 |
201 | Production provider provisioning, controlled-egress smoke tests, managed-provider PITR validation, selected KMS adapter/service-identity/access-audit validation, audited ciphertext rewrite, provider-specific OTP delivery, and retention-maintenance identity/window/hold/monitoring provisioning remain pending.
202 |
```

### docs/operations/durable-work-retention-runbook.md

Bytes: 4701
SHA-256: ff50363df226798909d0cfc399098e966e1d5085e82f3e183bac511941784591
Lines: 1-97 of 97

```markdown
 1 | # Durable Work Retention Runbook
 2 |
 3 | Use this runbook only with an approved maintenance window and a reviewed database identity. The normal API/worker runtime role is intentionally unable to run these commands.
 4 |
 5 | ## Preconditions
 6 |
 7 | 1. Migration `0013_durable_work_archives.sql` is applied and migration-history integrity passes.
 8 | 2. The maintenance identity has the exact privileges documented in [Durable Work Retention and Archive Model](../database/durable-work-retention.md).
 9 | 3. Queue backlog, active claims, replay requests, support tickets, and incident holds have been reviewed.
10 | 4. The selected cutoff follows the approved retention window. Baseline guidance is at least 30 days for completed work and 180 days for failed work.
11 | 5. A recent backup or managed point-in-time recovery point is available if the maintenance window requires recoverability.
12 | 6. The operator has recorded a change ticket, expected row range, cutoff, status selection, batch size, and rollback owner.
13 |
14 | ## Preview
15 |
16 | Preview is read-only but still requires the maintenance identity to prevent broad queue inspection through application credentials.
17 |
18 | ```bash
19 | DATABASE_URL=<maintenance-database-url> npm run db:retention-preview -- \
20 |   --cutoff 2026-06-28T00:00:00.000Z \
21 |   --status completed \
22 |   --limit 100
23 | ```
24 |
25 | Allowed status values:
26 |
27 | - `completed`
28 | - `failed`
29 | - `all`
30 |
31 | Review every returned work ID, tenant scope, terminal status, attempt count, error code, and timestamp. The response must contain no source payload, provider reference, endpoint material, OTP data, or raw contact data.
32 |
33 | Repeat preview with the exact intended archive arguments immediately before execution. Stop when:
34 |
35 | - any candidate is inside an incident or support hold;
36 | - failed work is still expected to be replayed;
37 | - the cutoff or status selection is wrong;
38 | - candidate volume is materially different from the approved change ticket;
39 | - archive or source-table privileges are broader than expected.
40 |
41 | ## Execute one bounded batch
42 |
43 | Execution requires the exact confirmation phrase. The maximum batch is 500; start with 100 or less.
44 |
45 | ```bash
46 | DATABASE_URL=<maintenance-database-url> npm run db:retention-archive -- \
47 |   --cutoff 2026-06-28T00:00:00.000Z \
48 |   --status completed \
49 |   --limit 100 \
50 |   --archive-run-id dwar_change-20260728-001 \
51 |   --confirm ARCHIVE_TERMINAL_DURABLE_WORK
52 | ```
53 |
54 | When `--archive-run-id` is omitted, the command generates an opaque `dwar_` identifier. Use a reviewed stable run ID when operational correlation is required.
55 |
56 | The command locks each selected row, writes or validates archive evidence, deletes the source row, and commits the batch atomically. Rows that changed state or are locked by another transaction are skipped.
57 |
58 | ## Post-run verification
59 |
60 | For every batch:
61 |
62 | 1. Confirm the command exit status is zero.
63 | 2. Compare archived count with the immediately preceding preview.
64 | 3. Query `durable_work_archives` using the maintenance identity and confirm the expected `archive_run_id`, `archived_by`, work types, statuses, and tenant scope.
65 | 4. Confirm the corresponding source rows no longer exist.
66 | 5. Confirm queued, claimed, processing, retryable, recent, or otherwise ineligible rows remain.
67 | 6. Confirm `durable_work_replays` and `audit_events` were not deleted.
68 | 7. Re-run preview with the same cutoff and status. Continue only with another approved bounded batch.
69 | 8. Record counts, duration, skipped rows, errors, and operator identity in the change ticket.
70 |
71 | ## Failure handling
72 |
73 | Before commit, any archive conflict, source-state mismatch, privilege failure, or SQL error rolls back the whole batch. Correct the cause and preview again; do not manually delete source rows.
74 |
75 | After commit, the archive contains metadata only and cannot reconstruct deleted payloads. Recovery requires an approved backup or point-in-time restore into a distinct database, investigation, and an explicit recovery/cutover decision. Do not insert reconstructed queue rows directly into production without a reviewed incident procedure.
76 |
77 | If a failed row was archived before support or replay review completed:
78 |
79 | - stop subsequent batches;
80 | - preserve the archive row and change-ticket evidence;
81 | - determine whether backup/PITR recovery is justified;
82 | - do not fabricate payload or replay evidence;
83 | - document the retention-policy failure and corrective control.
84 |
85 | ## Scheduling
86 |
87 | Do not schedule automatic deletion until production owners approve:
88 |
89 | - completed and failed retention windows;
90 | - incident/legal hold handling;
91 | - maintenance identity and credential rotation;
92 | - monitoring and alert thresholds;
93 | - backup/PITR recovery procedure;
94 | - archive and audit-evidence retention.
95 |
96 | The repository provides a controlled CLI, not an unattended scheduler.
97 |
```

### docs/operations/operations-observability.md

Bytes: 15387
SHA-256: eec2ad6d0a972fc05cb88d35cf35cb4a97518b9fafaa8cc10af8011814c14362
Lines: 1-291 of 291

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
107 | `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The API server and the courier-session, courier-sync, event, and verification runners use it for lifecycle and error records. Every record receives a timestamp, level, service, environment, and event name before export.
108 |
109 | The helper recursively redacts sensitive field names before serialization. Passwords, secrets, tokens, API keys, cookies, OTPs, raw phone values, credentials, provider responses, DNS answers, payloads, request/response bodies, and URLs are replaced rather than emitted. `phone_hash` is permitted as a non-reversible correlation reference. Error values expose only a bounded name and structured code; messages and stacks are omitted. Circular objects, binary values, big integers, excessive depth, oversized strings, and large collections are converted to bounded safe representations.
110 |
111 | Serialization or log-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. API request records use only accepted/generated opaque request IDs, an allowlisted route or bounded route template, HTTP method, status/status class, and duration. Raw URLs, query strings, and dynamic assessment identifiers are not exported. The current package is intentionally exporter-neutral. API/repository/provider metrics, distributed traces, OpenTelemetry exporters/collector topology, dashboards, alerts, and the managed backend remain production follow-up work.
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
128 | The API emits startup/shutdown, request-completion, and unhandled-error records, and all four private workers emit startup and structured error records through the shared redaction boundary. Production instrumentation must add counters, histograms, and correlation spans without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, provider credentials, or DNS answer details that disclose internal topology.
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
229 | - Courier, event, and verification poll, lease, lease-renewal, max-attempt, and provider-timeout values must be positive integers.
230 | - Every lease-renewal interval must be no greater than half its lease; event and verification leases must also exceed their provider timeout by more than five seconds.
231 | - Alert on heartbeat renewal failure because active provider I/O is aborted and the job remains available only through stale-lease recovery or reviewed replay.
232 | - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
233 | - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
234 | - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
235 | - Exhausted stale work fails closed with `LEASE_EXPIRED`.
236 | - Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.
237 |
238 | ## Data operations
239 |
240 | - Automated encrypted backups
241 | - Point-in-time recovery
242 | - Restore testing on a schedule
243 | - Migration preflight and post-deploy verification
244 | - Preview-first bounded terminal durable-work archival through the maintenance-only PostgreSQL boundary
245 | - Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
246 | - Audit trail for privileged data and credential access
247 | - KMS key rotation and ciphertext re-encryption procedures
248 | - Webhook signing-secret rotation/re-encryption procedure
249 | - Telemetry retention and access review
250 | - Production-data redaction before lower-environment use
251 |
252 | ## Release operations
253 |
254 | - Feature flags for new engine/policy versions and native multi-store migration
255 | - Canary/pilot merchants before broad rollout
256 | - Compare decision distributions before policy promotion
257 | - Rollback path for API, worker, migration, and policy changes
258 | - Do not edit migration 0008 after application; use a new migration for schema changes
259 | - Keep event-worker deployment independently scalable and rollbackable from the API
260 | - Exercise outbox backlog and retry behavior before each pilot expansion
261 | - No automatic blocking policy promotion without reviewed outcome data
262 | - Validate dashboards and alerts before each pilot expansion
263 |
264 | ## Provider selection still pending
265 |
266 | A managed observability backend, retention policy, alert-delivery channel, optional OpenTelemetry collector topology, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
267 |
268 | ## Browser dead-letter operations surface
269 |
270 | The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.
271 |
272 | The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.
273 |
274 | ## Durable work retention operations
275 |
276 | Terminal courier, webhook, and verification rows may be archived only through the maintenance-only repository and CLI documented in [Durable Work Retention Runbook](durable-work-retention-runbook.md). The application runtime role cannot read or write `durable_work_archives` and cannot delete source queue rows.
277 |
278 | Every run must preview first, use a cutoff at least 24 hours old, select only `completed`/`failed`, and process no more than 500 rows. Production baseline guidance is 30 days for completed work and 180 days for failed work until support, incident, privacy, and legal owners approve another policy. Archive evidence is secret-free and does not replace backup/PITR because source payloads cannot be reconstructed after commit.
279 |
280 | Monitor and record:
281 |
282 | - candidate and archived counts by work type and terminal status;
283 | - oldest eligible terminal timestamp;
284 | - skipped locked or state-changed rows;
285 | - archive evidence conflicts and maintenance privilege failures;
286 | - duration and rows per batch;
287 | - source queue size before and after maintenance;
288 | - archive table growth and approved evidence-retention window.
289 |
290 | No unattended retention scheduler is implemented. Automatic scheduling remains blocked on approved retention windows, incident/legal holds, maintenance identity provisioning, monitoring, backup/PITR recovery, and archive-evidence retention.
291 |
```

### docs/roadmap/risk-register.md

Bytes: 6896
SHA-256: a9552dea07bad6bd1aa72527ca3b127d247b7a25b4618d7374a36c1ed8b0cd28
Lines: 1-33 of 33

```markdown
 1 | # Risk Register
 2 |
 3 | Updated: 2026-07-28
 4 |
 5 | | ID    | Risk                                                                                  | Severity | Current mitigation                                                                                                                      | Owner/status                 |
 6 | | ----- | ------------------------------------------------------------------------------------- | -------: | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
 7 | | R-001 | Steadfast login selectors/internal endpoint change without notice                     |     High | Adapter/session boundary, fixtures, structured errors, selector monitoring, reconnect flow, degraded cache behavior                     | Phase 2 / open               |
 8 | | R-002 | Merchant courier credentials or sessions leak through logs/storage/CI                 | Critical | Envelope encryption, separate session encryption, redaction, no shell args, least privilege, audit reads                                | Foundation + Phase 2 / open  |
 9 | | R-003 | Raw API keys stored or used as dashboard sessions                                     | Critical | One-time reveal, hash-only storage, dedicated user sessions, prohibited by AGENTS/security docs                                         | Phase 1 / open               |
10 | | R-004 | Weak password hashing copied from source SaaS                                         | Critical | Argon2id or managed auth only; source implementation prohibited                                                                         | Phase 1 / open               |
11 | | R-005 | Cross-tenant data access or cache/job leakage                                         | Critical | Mandatory scope parameters, composite constraints/indexes, isolation tests, no system store shortcut                                    | Phase 1 onward / open        |
12 | | R-006 | Concurrent requests bypass quotas or create duplicate assessments                     |     High | Atomic entitlement reservation, usage events, idempotency transaction, concurrency tests                                                | Phase 1/4 / open             |
13 | | R-007 | Unknown/provider failure interpreted as safe or fraudulent                            |     High | Explicit unknown/degraded state, separate confidence, verification recommendation, no auto-block on provider failure                    | Phase 3/4 / designed         |
14 | | R-008 | Duplicate risk engines diverge between API, WooCommerce, and multi-store SaaS         |     High | One pure package, dependency rules, shared types, native service client, remove embedded engine after shadow rollout                    | Phase 3/4 / open             |
15 | | R-009 | WooCommerce contract mismatch causes incorrect order action                           |     High | Rewrite plugin for lowercase enums, `signals[].code`, explicit success/degraded handling, contract tests                                | Phase 4 / open               |
16 | | R-010 | Unofficial third-party fraud service becomes hidden single point of truth             |     High | Optional fallback adapter only; source/freshness/confidence exposed; no engine import                                                   | Phase 2/3 / designed         |
17 | | R-011 | False positives harm legitimate customers/merchants                                   | Critical | Confidence, explainability, merchant policies, OTP/review, pilot confusion matrix, no broad auto-block before calibration               | Pilot / open                 |
18 | | R-012 | Cross-merchant reputation creates privacy, abuse, or dispute harm                     | Critical | Post-MVP only, evidence lineage, independent corroboration, decay, disputes, legal/privacy review                                       | Later / deferred             |
19 | | R-013 | Deployment selected before browser-worker/database/queue requirements are known       |   Medium | Deployment ADR pending; keep components separable and infrastructure-agnostic                                                           | Phase 1 / open               |
20 | | R-014 | Migration/schema mismatch or applied migration edits                                  |     High | Canonical database package, append-only migrations, clean/upgrade verification, CI checks                                               | Phase 1 onward / open        |
21 | | R-015 | Scraper runs synchronously and delays checkout                                        |     High | Session/sync workers, cache-first assessment, bounded latency, async refresh                                                            | Phase 2/4 / designed         |
22 | | R-016 | Scheduled scraper failures silently succeed                                           |     High | Remove `continue-on-error`, structured job records, alerts, dead-letter handling, failure exit status                                   | Phase 2 / open               |
23 | | R-017 | Encryption key rotation makes credentials unavailable                                 |     High | Versioned envelope encryption, rotation/runbook, staged re-encryption, restore tests                                                    | Phase 1/2 / open             |
24 | | R-018 | Outcome feedback is omitted, preventing calibration                                   |     High | Outcome endpoint/plugin/native integration included in MVP acceptance criteria                                                          | Phase 4 / open               |
25 | | R-019 | Provider terms/authorization do not permit commercial internal-endpoint use           |     High | Merchant authorization record, terms/legal review before commercial scale, replaceable adapter boundary                                 | Phase 2 / blocking for scale |
26 | | R-020 | Empty repository causes documentation to be mistaken for implemented functionality    |   Medium | Implementation status explicitly separates planned/in-progress/implemented and must be updated each milestone                           | Phase 0 / mitigated          |
27 | | R-021 | Durable payloads are retained indefinitely or archived before support/incident review |     High | Terminal-only preview, age floor, bounded archive-before-delete transaction, secret-free evidence, preserved replay/audit, no scheduler | Operations / open            |
28 | | R-022 | Retention maintenance privileges leak into API or worker runtime identities           | Critical | Archive table explicitly denied to runtime, no runtime DELETE, separate reviewed maintenance identity, privilege preflight              | Operations / blocking        |
29 |
30 | ## Review cadence
31 |
32 | Review this register at every milestone completion and before production/pilot changes. Add evidence, owner, target date, and residual risk as implementation begins.
33 |
```

### docs/security/security-privacy.md

Bytes: 12287
SHA-256: a01676bad253b9a77c3ee2bdece4ce5e35dae39849f1be905a3231657e263c0d
Lines: 1-203 of 203

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
 51 | ## Durable work retention
 52 |
 53 | Old terminal courier, webhook, and verification source rows may be removed only through the maintenance-only retention boundary. The archive stores tenant scope, terminal state, attempts, bounded error code, timestamps, an opaque run ID, and the maintenance database identity; it never stores source payloads, event bodies, encrypted verification payloads, provider references, phone/OTP material, endpoints, credentials, cookies, or tokens.
 54 |
 55 | The application runtime role cannot read or write the archive table and cannot delete source queue rows. A separate reviewed maintenance identity must preview first, use approved retention windows and holds, and persist matching archive evidence before atomic deletion. Replay and audit evidence remain outside this deletion path. Because archive metadata cannot reconstruct deleted payloads, backup/PITR is the only approved post-commit recovery boundary.
 56 |
 57 | ## Phone data
 58 |
 59 | - Normalize consistently
 60 | - Use keyed hash/HMAC for cross-table matching where appropriate
 61 | - Encrypt raw phone only when operational lookup is necessary
 62 | - Separate analytics identity from operational contact data
 63 | - Document retention and deletion behavior
 64 | - Do not include raw phone values in webhook outbox events
 65 |
 66 | ## Credential and envelope storage
 67 |
 68 | - Envelope encryption
 69 | - Key version stored with ciphertext
 70 | - Master keys outside database
 71 | - Rotation procedure
 72 | - Strict service identity permissions
 73 | - Separate authenticated encryption context for credentials, sessions, webhook endpoints, and verification jobs
 74 | - Audit credential reads and decrypt operations
 75 | - Decryption failure must fail closed
 76 | - No plaintext compatibility fallback
 77 |
 78 | The local/self-hosted AES-256-GCM implementation is isolated in `@ozzyl/encryption`. The package also provides a provider-neutral managed v2 boundary with a random per-record data key, authenticated context digest and wrapped-key metadata, data-key zeroization, structured safe failures, explicit legacy dual-read, and key-version re-encryption. Production runtime call sites remain on local v1 until a selected KMS/vault adapter, component identities, access auditing, and an audited background rewrite are provisioned; there is no automatic local or plaintext fallback.
 79 |
 80 | Webhook signing secrets are stored only as encrypted endpoint material. The event worker decrypts them using the authenticated context `webhook-endpoint:<endpoint-id>` immediately before signing; the API and checkout path do not need plaintext access for delivery.
 81 |
 82 | ## Multi-tenancy
 83 |
 84 | Every merchant-owned record includes organization/store scope. Repository methods require scope parameters rather than optional filters. API-key resolution, feature assembly, assessment/outcome writes, dashboards, and tenant administration revalidate that the store is active and belongs to the active organization; matching caller-supplied identifiers alone are not authoritative.
 85 |
 86 | Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, verifications, or logs.
 87 |
 88 | Webhook delivery rows persist explicit organization/store scope and are revalidated against the endpoint and store relationships before claim. Mismatched rows fail closed instead of being sent. Webhook and verification administration require active owner/admin membership and return only operational metadata; signing-secret ciphertext, OTP hashes, encrypted job payloads, and raw phone values are excluded.
 89 |
 90 | Native shadow rollout and attempt evidence follow the same boundary:
 91 |
 92 | - source order scope is reloaded and verified before Guard evaluation;
 93 | - service API keys require `comparisons:write` and remain separate from browser sessions;
 94 | - rollout mutation requires CSRF proof plus active owner/admin membership;
 95 | - rollout, assessment, comparison, and attempt repositories revalidate exact organization/store relationships;
 96 | - merchant and platform reports contain bounded aggregates only;
 97 | - phone numbers, request snapshots, raw API keys, provider payloads, credentials, cookies, OTPs, and signing secrets are prohibited from rollout, attempt, dashboard, audit, and error payloads.
 98 |
 99 | ## PostgreSQL role separation
100 |
101 | - The migration owner applies schema changes, owns relations, records migration history, and runs `npm run db:runtime-grants` after migrations.
102 | - Runtime services connect with an externally provisioned non-owner `LOGIN` that has no superuser, `CREATEDB`, `CREATEROLE`, replication, `BYPASSRLS`, inherited role memberships, database ownership, schema ownership, or relation ownership.
103 | - Runtime privileges are explicit current-table `SELECT`/`INSERT`/`UPDATE` grants only where required. Migration history, `DELETE`, DDL, schema creation, and role management remain denied.
104 | - The grant command verifies the complete current table inventory and effective privileges, so a new table or an implicit/public privilege fails closed until the policy is reviewed.
105 | - Production may split this reviewed baseline into narrower API and worker roles, but no runtime identity may become the migration owner.
106 |
107 | ## Shared reputation safeguards
108 |
109 | - No single merchant report should globally block a customer.
110 | - Prefer courier-confirmed outcomes.
111 | - Require independent evidence for high-impact reputation.
112 | - Apply time decay.
113 | - Provide dispute and correction mechanisms.
114 | - Detect abusive or low-quality reporters.
115 | - Preserve evidence lineage.
116 | - Do not launch cross-merchant reputation in the foundation MVP without privacy/legal review.
117 |
118 | ## OTP security
119 |
120 | - 6-digit cryptographically random OTP
121 | - Store only hash
122 | - 5–10 minute expiry
123 | - Maximum attempts
124 | - Per-phone, per-IP, per-store, and per-organization rate limits
125 | - Bind OTP to verification session/order/purpose
126 | - Do not expose delivery success when provider actually failed
127 | - Do not log OTP values
128 | - Provider delivery runs only in the private verification worker, never synchronous API handling
129 | - Persist phone and OTP for delivery only inside an encrypted job payload; queue columns and logs remain non-sensitive
130 | - Bind ciphertext to `verification-job:<job-id>` authenticated context
131 | - Validate organization, store, purpose, phone HMAC, and OTP hash before provider I/O
132 | - Require current unexpired lease ownership for start, retry, delivery, and failure transitions
133 | - Fail both the job and authoritative session closed on relational scope mismatch
134 | - Pass a stable verification idempotency key to provider adapters to reduce duplicate sends after uncertain outcomes
135 |
136 | ## Webhook security
137 |
138 | - Emit durable outbox rows in the same transaction as the newly persisted assessment or outcome
139 | - Never perform merchant webhook network delivery from the risk engine, checkout handler, or API persistence transaction
140 | - Use stable event IDs and `(endpoint_id, event_id)` uniqueness for replay/idempotency control
141 | - Sign the exact canonical event payload with HMAC-SHA256 over `timestamp.payload`
142 | - Require HTTPS
143 | - Reject URL credentials, localhost names, `.local` names, literal non-public IPv4/IPv6 addresses, and metadata destinations
144 | - Resolve hostnames before fetch and reject the destination when any resolved address is invalid or non-public
145 | - Treat DNS resolution failure as retryable without making a request
146 | - Disable redirects to prevent redirect-based destination bypass
147 | - Apply bounded timeout, attempt limit, backoff, and terminal failure
148 | - Require the current unexpired worker lease for delivery-state transitions
149 | - Do not include raw phone, OTP, API keys, provider credentials, or signing secrets in event payloads or logs
150 |
151 | Application-level URL and DNS validation is not sufficient by itself against every DNS-rebinding, routing, proxy, or infrastructure failure. Production must also restrict event-worker egress, block metadata/private networks at the network layer, and use a controlled resolver or equivalent policy.
152 |
153 | ## Web security
154 |
155 | - CSRF protection for dashboard actions
156 | - CSP and secure headers
157 | - Input validation and output encoding
158 | - SSRF protection in webhook/custom URL features
159 | - HMAC-signed webhooks
160 | - Timestamp and replay prevention
161 | - Request size limits
162 | - Idempotency abuse protection
163 | - Safe CORS configuration by integration type
164 |
165 | ## Courier automation security
166 |
167 | - Playwright runs in isolated workers with least privilege
168 | - No browser execution in synchronous API/checkout paths
169 | - Screenshots/traces are redacted, access-controlled, and short-lived
170 | - Provider credentials are not passed through shell arguments
171 | - Session refresh failures are visible; they are never silently ignored
172 | - Provider terms and merchant authorization must be reviewed before commercial scale
173 |
174 | ## Operational security
175 |
176 | - Audit logs
177 | - Secret rotation
178 | - Dependency scanning
179 | - SAST and secret scanning
180 | - Backups and restore testing
181 | - Incident response runbook
182 | - Key compromise, webhook-secret compromise, and courier credential compromise runbooks
183 | - Queue/outbox lease recovery and dead-letter procedures
184 | - Production access review and break-glass procedure
185 | - Private worker ingress and controlled egress
186 |
187 | ## Source SaaS findings that must not be copied
188 |
189 | - Custom SHA-256 password hashing
190 | - Raw API key saved in metadata
191 | - Raw API key used as a login cookie
192 | - Full phone numbers logged by blacklist stubs
193 | - Shell commands containing session payloads
194 | - Hardcoded infrastructure identifiers
195 | - Decryption fallback to plaintext
196 | - Broad unaudited cross-store lookup
197 | - Synchronous webhook delivery in checkout handling
198 | - Plaintext webhook signing secrets in configuration or logs
199 |
200 | ## Browser durable-work administration
201 |
202 | Dead-letter listing and replay require an opaque authenticated browser session, exact session-visible organization/store scope, active owner/admin membership, repository-level relational reauthorization, and CSRF proof for replay. Service API keys are not accepted as browser sessions. The response contract excludes raw payloads, destination URLs, phone numbers or hashes, OTP values or hashes, encrypted material, credentials, cookies, tokens, provider responses, and webhook signing secrets.
203 |
```

### docs/testing/testing-strategy.md

Bytes: 16615
SHA-256: cc9a9d905a27a9cf6dd24a48c38ddcd0ab7615f0fe057038a6e9cfa56f1bbdbc
Lines: 1-296 of 296

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
 22 |
 23 | ## Contract tests
 24 |
 25 | Each courier adapter must pass a shared contract suite:
 26 |
 27 | - Returns canonical observation
 28 | - Handles timeout
 29 | - Handles expired session
 30 | - Never leaks credentials
 31 | - Maps malformed responses to structured errors
 32 | - Preserves source/freshness metadata
 33 | - Separates actual return from pre-shipping cancellation
 34 |
 35 | Public API contract tests cover:
 36 |
 37 | - Canonical success/error response
 38 | - Lowercase enums and `signals[].code`
 39 | - Unknown/degraded behavior
 40 | - Idempotent replay
 41 | - Test/live key isolation
 42 | - Dedicated comparison scope, idempotent replay, order binding, and cross-store assessment rejection
 43 |
 44 | Webhook delivery contract tests cover:
 45 |
 46 | - Canonical domain-event payloads
 47 | - HMAC signature over timestamp and exact payload
 48 | - Redirect rejection
 49 | - Retryable HTTP/network/DNS failures
 50 | - Terminal unsafe-destination and inactive-endpoint failures
 51 | - No signing secret, raw phone, or unrestricted request body in logs
 52 |
 53 | ## Integration tests
 54 |
 55 | - User/session authentication
 56 | - API key creation, one-time reveal, authentication, revocation, and rotation
 57 | - Atomic quota enforcement under concurrency
 58 | - Assessment persistence
 59 | - Transactional encrypted OTP queue creation and tenant-scoped verification
 60 | - Lease-owned OTP provider delivery and retry/failure state
 61 | - Courier session refresh
 62 | - Transactional assessment/outcome webhook outbox emission
 63 | - Lease-owned webhook delivery, renewal, abort-on-loss, and retry
 64 | - Multi-tenant isolation
 65 | - Organization/store membership authorization
 66 | - API-wide request correlation for public, authenticated, browser, not-found, and unhandled-error paths without raw dynamic routes or query values
 67 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 68 |
 69 | ### PostgreSQL concurrency and idempotency coverage
 70 |
 71 | The CI PostgreSQL service runs real-database integration tests for:
 72 |
 73 | - duplicate usage reservations serializing through the organization/period advisory lock;
 74 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 75 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 76 | - concurrent assessment saves returning the single persisted scoped winner;
 77 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 78 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 79 | - operation idempotency values remaining isolated by organization and store;
 80 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 81 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 82 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 83 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 84 | - preventing another courier worker from stealing a fresh lease;
 85 | - reclaiming expired courier jobs and rejecting the previous owner;
 86 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 87 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 88 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
 89 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
 90 | - preventing another event worker from stealing a fresh webhook lease;
 91 | - rejecting an expired event-worker owner before completion or failure;
 92 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
 93 | - clearing webhook ownership when a retry is scheduled;
 94 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
 95 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
 96 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
 97 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
 98 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 99 | - protecting fresh verification leases and rejecting expired owners;
100 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
101 | - failing both the verification job and authoritative session on persisted scope mismatch;
102 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
103 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
104 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
105 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
106 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
107 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
108 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
109 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
110 |
111 | ### Native shadow rollout safety coverage
112 |
113 | Default tests prove:
114 |
115 | - `off` mode performs no Guard assessment or comparison API call;
116 | - deterministic sampling keeps retries for the same store/order in the same cohort;
117 | - the legacy score and decision remain the effective result even when Guard recommends block;
118 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
119 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
120 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
121 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
122 | - CSRF-protected browser mutation permits only active owner/admin store scope;
123 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
124 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
125 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
126 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
127 |
128 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
129 |
130 | ### Webhook destination security coverage
131 |
132 | Default tests use injected DNS and fetch boundaries. They prove:
133 |
134 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
135 | - a hostname resolving to any non-public address is rejected before `fetch`;
136 | - DNS resolution failure is classified as retryable without making a network request;
137 | - redirects are disabled;
138 | - successful deliveries use the expected HMAC signature and canonical payload;
139 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
140 |
141 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
142 |
143 | ### Verification payload security coverage
144 |
145 | Default tests prove:
146 |
147 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
148 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
149 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
150 | - reporter state and logs do not receive plaintext OTP values;
151 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
152 |
153 | ### Managed envelope security coverage
154 |
155 | Default tests prove:
156 |
157 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
158 | - plaintext values and plaintext data keys are not serialized into the envelope;
159 | - context mismatch is rejected before provider unwrap;
160 | - wrapped-key metadata is authenticated and tampering fails closed;
161 | - provider outage produces a structured non-secret error;
162 | - a provider cannot pass the plaintext data key through as a wrapped key;
163 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
164 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
165 | - malformed, unsupported, or unavailable-key envelopes fail closed.
166 |
167 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
168 |
169 | ### Migration replay coverage
170 |
171 | CI runs the migration command twice against the same PostgreSQL service:
172 |
173 | 1. the first run applies every ordered migration;
174 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
175 |
176 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
177 |
178 | ### Migration integrity and restore coverage
179 |
180 | CI additionally proves:
181 |
182 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
183 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
184 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
185 | - migration execution is serialized by one session-held advisory lock;
186 | - the restore target is a distinct pre-created clean database;
187 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
188 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
189 |
190 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
191 |
192 | Current PostgreSQL coverage includes owner-checked lease renewal, durable dead-letter authorization/replay, runtime-role isolation, and maintenance-only retention archival. Future provider validation must still include selected-provider smoke tests for distinct API/worker identities, migration-owner grant execution, and the separately provisioned retention-maintenance identity.
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
218 | - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
219 | - Telemetry serialization/export failure isolation from application and worker execution
220 | - Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
221 | - Injection attacks
222 | - Session fixation/rotation
223 | - Credential decryption failure
224 | - Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
225 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
226 | - Runtime database role privilege escape, ownership, migration-history, DELETE, DDL, and durable archive-table access attempts
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
281 | ## Durable work retention coverage
282 |
283 | Default unit tests prove invalid cutoffs, empty terminal-status selections, unsafe archive-run IDs, and batches above 500 fail before a database connection is opened.
284 |
285 | PostgreSQL integration tests must prove:
286 |
287 | - preview returns only old `completed`/`failed` rows and performs no mutation;
288 | - queued and recent rows remain in their source queues;
289 | - preview and archive responses exclude source payload and provider-reference values;
290 | - archive evidence is inserted before source deletion in one transaction;
291 | - courier, webhook, and verification source rows are deleted only after matching evidence exists;
292 | - replay ledger rows remain after source archival;
293 | - rerunning the same cutoff is idempotent when no source rows remain;
294 | - the archive schema contains no payload, raw contact, endpoint, credential, or provider-reference columns;
295 | - the normal runtime role cannot read `durable_work_archives` and has no source `DELETE` privilege.
296 |
```

### packages/database/migrations/0013_durable_work_archives.sql

Bytes: 1360
SHA-256: d9366dec7301f2ff5432d6581439fff757aa67b868921262ee0553ec792ecf77
Lines: 1-34 of 34

```text
 1 | create table durable_work_archives (
 2 |   work_type text not null
 3 |     constraint durable_work_archives_work_type_check
 4 |     check (work_type in ('courier_job', 'webhook_delivery', 'verification_job')),
 5 |   work_id text not null,
 6 |   organization_id text not null references organizations(id) on delete cascade,
 7 |   store_id text references stores(id) on delete cascade,
 8 |   terminal_status text not null
 9 |     constraint durable_work_archives_terminal_status_check
10 |     check (terminal_status in ('completed', 'failed')),
11 |   attempts integer not null
12 |     constraint durable_work_archives_attempts_check
13 |     check (attempts >= 0),
14 |   error_code text,
15 |   terminal_at timestamptz not null,
16 |   source_created_at timestamptz not null,
17 |   archived_at timestamptz not null,
18 |   archive_run_id text not null
19 |     constraint durable_work_archives_run_id_check
20 |     check (archive_run_id ~ '^dwar_[A-Za-z0-9-]{8,100}$'),
21 |   archived_by text not null,
22 |   primary key (work_type, work_id),
23 |   constraint durable_work_archives_store_scope_fk
24 |     foreign key (store_id, organization_id)
25 |     references stores(id, organization_id)
26 |     on delete cascade
27 | );
28 |
29 | create index durable_work_archives_scope_archived_idx
30 |   on durable_work_archives(organization_id, store_id, archived_at desc);
31 |
32 | create index durable_work_archives_terminal_idx
33 |   on durable_work_archives(work_type, terminal_status, terminal_at);
34 |
```

### packages/database/migrations/manifest.json

Bytes: 2008
SHA-256: 84e9e916ff30898667a5f9e3179c655a24423319234c0939166d1d6bb5e8f7b4
Lines: 1-59 of 59

```json
 1 | {
 2 |   "schemaVersion": 1,
 3 |   "algorithm": "sha256",
 4 |   "migrations": [
 5 |     {
 6 |       "name": "0001_foundation.sql",
 7 |       "checksum_sha256": "c0f2060b45ff69dac94e79c60d6e9ef80063777ba2f5b752cb86a614e752a218"
 8 |     },
 9 |     {
10 |       "name": "0002_courier.sql",
11 |       "checksum_sha256": "cc052f00671d2380b0fa68fa473f8bc22d88d804d540638dc59ce849f9741133"
12 |     },
13 |     {
14 |       "name": "0003_risk.sql",
15 |       "checksum_sha256": "7ab29a70943c20a0905804336b760d8f2b6cd6f171b9dbdecff489e52d69352c"
16 |     },
17 |     {
18 |       "name": "0004_verification_events.sql",
19 |       "checksum_sha256": "bd1e45da14ce5145bee37003e0b7ed7ae46293aad64d252512979343c8baf589"
20 |     },
21 |     {
22 |       "name": "0005_durable_operations.sql",
23 |       "checksum_sha256": "d2ef2d5672cace94f896b8ab32c1fbfb9e5086ebb5a3bab134333d9de085e70a"
24 |     },
25 |     {
26 |       "name": "0006_browser_access.sql",
27 |       "checksum_sha256": "a0090ddd9c9d6312db83066ab2132d13807ddb6ce353269527ab3d0ec33f409a"
28 |     },
29 |     {
30 |       "name": "0007_worker_leases.sql",
31 |       "checksum_sha256": "ddb4b2681ade897e5750ff22d09f43198c82e74dffa407373e495635035af655"
32 |     },
33 |     {
34 |       "name": "0008_webhook_delivery_leases.sql",
35 |       "checksum_sha256": "9815df3bcc088a4c0b3e349f494c8e580e78fa60803d0358c1d762bc8ef923cb"
36 |     },
37 |     {
38 |       "name": "0009_verification_delivery_queue.sql",
39 |       "checksum_sha256": "de3520681106227c34b6ca145103a5f026a8f36cf983e8603ec484cdd99f1247"
40 |     },
41 |     {
42 |       "name": "0010_native_shadow_comparisons.sql",
43 |       "checksum_sha256": "3d88f4196b83b723a3f6f2a2fc5c85b33800c180081ab7e5b731821d823f0821"
44 |     },
45 |     {
46 |       "name": "0011_native_shadow_pilot.sql",
47 |       "checksum_sha256": "be0ec47b3ba2c95b33706aec78e570fb7399524cbddd10680aaf511549fdaca9"
48 |     },
49 |     {
50 |       "name": "0012_durable_work_replays.sql",
51 |       "checksum_sha256": "61d64b8a1c1cfd1a89ddec66778d7b704b2c63961b05982fd3163a313561534b"
52 |     },
53 |     {
54 |       "name": "0013_durable_work_archives.sql",
55 |       "checksum_sha256": "d9366dec7301f2ff5432d6581439fff757aa67b868921262ee0553ec792ecf77"
56 |     }
57 |   ]
58 | }
59 |
```

### packages/database/src/durable-work-retention-cli.ts

Bytes: 5365
SHA-256: d85f006feb2ab80f21145ca6e10044df7483cecd404610f4c27097617d3bf4de
Lines: 1-157 of 157

```typescript
  1 | import { Pool } from 'pg';
  2 | import {
  3 |   DurableWorkRetentionError,
  4 |   MAX_DURABLE_WORK_ARCHIVE_BATCH,
  5 |   PostgresDurableWorkRetention,
  6 |   durableWorkTerminalStatuses,
  7 |   type DurableWorkTerminalStatus,
  8 | } from './durable-work-retention.js';
  9 |
 10 | const ARCHIVE_CONFIRMATION = 'ARCHIVE_TERMINAL_DURABLE_WORK';
 11 |
 12 | class CliInputError extends Error {
 13 |   constructor(
 14 |     readonly code: string,
 15 |     message: string,
 16 |   ) {
 17 |     super(message);
 18 |     this.name = 'CliInputError';
 19 |   }
 20 | }
 21 |
 22 | async function run(): Promise<void> {
 23 |   let pool: Pool | undefined;
 24 |   try {
 25 |     const databaseUrl = requiredEnvironment('DATABASE_URL');
 26 |     const [command, ...rawArguments] = process.argv.slice(2);
 27 |     if (command !== 'preview' && command !== 'archive') {
 28 |       throw new CliInputError(
 29 |         'COMMAND_REQUIRED',
 30 |         'Use preview or archive through the documented npm scripts',
 31 |       );
 32 |     }
 33 |     const argumentsByName = parseArguments(rawArguments);
 34 |     assertAllowedArguments(argumentsByName, command);
 35 |     const cutoff = requiredDate(argumentsByName, 'cutoff');
 36 |     const statuses = requiredStatuses(argumentsByName);
 37 |     const limit = optionalPositiveInteger(argumentsByName, 'limit') ?? 100;
 38 |     pool = new Pool({ connectionString: databaseUrl, max: 2 });
 39 |     const retention = new PostgresDurableWorkRetention(pool);
 40 |
 41 |     if (command === 'preview') {
 42 |       const result = await retention.preview({ cutoff, statuses, limit });
 43 |       console.log(JSON.stringify(result, null, 2));
 44 |     } else if (command === 'archive') {
 45 |       if (requiredArgument(argumentsByName, 'confirm') !== ARCHIVE_CONFIRMATION) {
 46 |         throw new CliInputError(
 47 |           'ARCHIVE_CONFIRMATION_REQUIRED',
 48 |           `--confirm must equal ${ARCHIVE_CONFIRMATION}`,
 49 |         );
 50 |       }
 51 |       const archiveRunId = optionalArgument(argumentsByName, 'archive-run-id');
 52 |       const result = await retention.archive({
 53 |         cutoff,
 54 |         statuses,
 55 |         limit,
 56 |         ...(archiveRunId ? { archiveRunId } : {}),
 57 |       });
 58 |       console.log(JSON.stringify(result, null, 2));
 59 |     }
 60 |   } catch (error) {
 61 |     const code =
 62 |       error instanceof DurableWorkRetentionError || error instanceof CliInputError
 63 |         ? error.code
 64 |         : 'DURABLE_WORK_RETENTION_FAILED';
 65 |     console.error(JSON.stringify({ level: 'error', code }));
 66 |     process.exitCode = 1;
 67 |   } finally {
 68 |     await pool?.end();
 69 |   }
 70 | }
 71 |
 72 | await run();
 73 |
 74 | function requiredEnvironment(name: string): string {
 75 |   const value = process.env[name];
 76 |   if (!value) throw new CliInputError('DATABASE_URL_REQUIRED', `${name} is required`);
 77 |   return value;
 78 | }
 79 |
 80 | function parseArguments(values: string[]): Map<string, string> {
 81 |   const parsed = new Map<string, string>();
 82 |   for (let index = 0; index < values.length; index += 2) {
 83 |     const flag = values[index];
 84 |     const value = values[index + 1];
 85 |     if (!flag?.startsWith('--') || !value || value.startsWith('--')) {
 86 |       throw new CliInputError('INVALID_ARGUMENTS', 'Arguments must use --name value pairs');
 87 |     }
 88 |     const name = flag.slice(2);
 89 |     if (parsed.has(name)) {
 90 |       throw new CliInputError('DUPLICATE_ARGUMENT', `Argument --${name} was provided twice`);
 91 |     }
 92 |     parsed.set(name, value);
 93 |   }
 94 |   return parsed;
 95 | }
 96 |
 97 | function assertAllowedArguments(values: Map<string, string>, command: 'preview' | 'archive'): void {
 98 |   const allowed = new Set(['cutoff', 'status', 'limit']);
 99 |   if (command === 'archive') {
100 |     allowed.add('confirm');
101 |     allowed.add('archive-run-id');
102 |   }
103 |   for (const name of values.keys()) {
104 |     if (!allowed.has(name)) {
105 |       throw new CliInputError('UNKNOWN_ARGUMENT', `Unknown argument --${name}`);
106 |     }
107 |   }
108 | }
109 |
110 | function requiredArgument(values: Map<string, string>, name: string): string {
111 |   const value = optionalArgument(values, name);
112 |   if (!value) throw new CliInputError('INVALID_ARGUMENT', `--${name} is required`);
113 |   return value;
114 | }
115 |
116 | function optionalArgument(values: Map<string, string>, name: string): string | undefined {
117 |   const value = values.get(name)?.trim();
118 |   if (value === undefined) return undefined;
119 |   if (!value || value.length > 200) {
120 |     throw new CliInputError(
121 |       'INVALID_ARGUMENT',
122 |       `--${name} must be non-empty and at most 200 characters`,
123 |     );
124 |   }
125 |   return value;
126 | }
127 |
128 | function requiredDate(values: Map<string, string>, name: string): Date {
129 |   const value = new Date(requiredArgument(values, name));
130 |   if (Number.isNaN(value.getTime())) {
131 |     throw new CliInputError('INVALID_ARGUMENT', `--${name} must be an ISO-8601 timestamp`);
132 |   }
133 |   return value;
134 | }
135 |
136 | function requiredStatuses(values: Map<string, string>): DurableWorkTerminalStatus[] {
137 |   const value = requiredArgument(values, 'status');
138 |   if (value === 'all') return [...durableWorkTerminalStatuses];
139 |   if (durableWorkTerminalStatuses.includes(value as DurableWorkTerminalStatus)) {
140 |     return [value as DurableWorkTerminalStatus];
141 |   }
142 |   throw new CliInputError('INVALID_ARGUMENT', '--status must be completed, failed, or all');
143 | }
144 |
145 | function optionalPositiveInteger(values: Map<string, string>, name: string): number | undefined {
146 |   const raw = values.get(name);
147 |   if (raw === undefined) return undefined;
148 |   const value = Number(raw);
149 |   if (!Number.isSafeInteger(value) || value < 1 || value > MAX_DURABLE_WORK_ARCHIVE_BATCH) {
150 |     throw new CliInputError(
151 |       'INVALID_ARGUMENT',
152 |       `--${name} must be an integer between 1 and ${MAX_DURABLE_WORK_ARCHIVE_BATCH}`,
153 |     );
154 |   }
155 |   return value;
156 | }
157 |
```

### packages/database/src/durable-work-retention.postgres.test.ts

Bytes: 9857
SHA-256: 48695b8435bccb0e02319dfd39717baa204f7a90035b61f53d896f2c8aca77ba
Lines: 1-243 of 243

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { afterAll, beforeAll, describe, expect, it } from 'vitest';
  3 | import { Pool } from 'pg';
  4 | import { PostgresDurableWorkRetention } from './durable-work-retention.js';
  5 |
  6 | const databaseUrl = process.env.DATABASE_URL;
  7 | const integration = describe.skipIf(!databaseUrl);
  8 |
  9 | integration('PostgreSQL durable work retention and archival', () => {
 10 |   const pool = new Pool({ connectionString: databaseUrl, max: 4 });
 11 |   const retention = new PostgresDurableWorkRetention(pool);
 12 |   const suffix = randomUUID().replaceAll('-', '');
 13 |   const organizationId = `org_ret_${suffix}`;
 14 |   const storeId = `sto_ret_${suffix}`;
 15 |   const courierAccountId = `coa_ret_${suffix}`;
 16 |   const courierCompletedId = `coj_ret_completed_${suffix}`;
 17 |   const courierQueuedId = `coj_ret_queued_${suffix}`;
 18 |   const webhookEndpointId = `we_ret_${suffix}`;
 19 |   const webhookFailedId = `wd_ret_failed_${suffix}`;
 20 |   const webhookRecentId = `wd_ret_recent_${suffix}`;
 21 |   const verificationSessionId = `ver_ret_${suffix}`;
 22 |   const verificationCompletedId = `vj_ret_completed_${suffix}`;
 23 |   const replayId = `dwr_ret_${suffix}`;
 24 |   const oldAt = new Date('2026-05-01T00:00:00.000Z');
 25 |   const recentAt = new Date('2026-07-27T12:00:00.000Z');
 26 |   const cutoff = new Date('2026-07-01T00:00:00.000Z');
 27 |   const runAt = new Date('2026-07-28T08:00:00.000Z');
 28 |
 29 |   beforeAll(async () => {
 30 |     const client = await pool.connect();
 31 |     try {
 32 |       await client.query('begin');
 33 |       await client.query(
 34 |         `insert into organizations (id, name, slug, plan_id)
 35 |          values ($1, 'Retention Test', $2, 'plan_free')`,
 36 |         [organizationId, `retention-${suffix}`],
 37 |       );
 38 |       await client.query(
 39 |         `insert into stores (id, organization_id, name, platform, external_store_id)
 40 |          values ($1, $2, 'Retention Store', 'custom', $3)`,
 41 |         [storeId, organizationId, `retention-store-${suffix}`],
 42 |       );
 43 |       await client.query(
 44 |         `insert into courier_accounts (id, store_id, provider, status)
 45 |          values ($1, $2, 'steadfast', 'connected')`,
 46 |         [courierAccountId, storeId],
 47 |       );
 48 |       await client.query(
 49 |         `insert into courier_jobs (
 50 |            id, courier_account_id, job_type, status, attempts,
 51 |            scheduled_at, completed_at, error_code, payload, created_at, updated_at
 52 |          ) values
 53 |            ($1, $2, 'customer_observation_refresh', 'completed', 1, $3, $3, null, $4::jsonb, $3, $3),
 54 |            ($5, $2, 'customer_observation_refresh', 'queued', 0, $3, null, null, $6::jsonb, $3, $3)`,
 55 |         [
 56 |           courierCompletedId,
 57 |           courierAccountId,
 58 |           oldAt,
 59 |           JSON.stringify({ opaqueValue: 'source-only-a' }),
 60 |           courierQueuedId,
 61 |           JSON.stringify({ opaqueValue: 'source-only-b' }),
 62 |         ],
 63 |       );
 64 |       await client.query(
 65 |         `insert into webhook_endpoints (
 66 |            id, organization_id, store_id, url, secret_encrypted, events, status
 67 |          ) values ($1, $2, $3, 'https://merchant.example/webhooks', 'opaque-wrapper', '["assessment.completed"]'::jsonb, 'active')`,
 68 |         [webhookEndpointId, organizationId, storeId],
 69 |       );
 70 |       await client.query(
 71 |         `insert into webhook_deliveries (
 72 |            id, endpoint_id, organization_id, store_id, event_id, event_type,
 73 |            event_payload, occurred_at, status, attempts, error_code, completed_at, created_at, updated_at
 74 |          ) values
 75 |            ($1, $2, $3, $4, $5, 'assessment.completed', $6::jsonb, $7, 'failed', 5, 'NETWORK_ERROR', $7, $7, $7),
 76 |            ($8, $2, $3, $4, $9, 'assessment.completed', $10::jsonb, $11, 'failed', 1, 'NETWORK_ERROR', $11, $11, $11)`,
 77 |         [
 78 |           webhookFailedId,
 79 |           webhookEndpointId,
 80 |           organizationId,
 81 |           storeId,
 82 |           `evt-ret-old-${suffix}`,
 83 |           JSON.stringify({ opaqueValue: 'source-only-c' }),
 84 |           oldAt,
 85 |           webhookRecentId,
 86 |           `evt-ret-recent-${suffix}`,
 87 |           JSON.stringify({ opaqueValue: 'recent-source' }),
 88 |           recentAt,
 89 |         ],
 90 |       );
 91 |       await client.query(
 92 |         `insert into verification_sessions (
 93 |            id, organization_id, store_id, phone_hash, purpose, channel,
 94 |            status, expires_at, idempotency_key, max_attempts, created_at, updated_at
 95 |          ) values ($1, $2, $3, $4, 'confirm_order', 'sms', 'verified', $5, $6, 5, $7, $7)`,
 96 |         [
 97 |           verificationSessionId,
 98 |           organizationId,
 99 |           storeId,
100 |           'a'.repeat(64),
101 |           new Date('2026-08-01T00:00:00.000Z'),
102 |           `retention-ver-${suffix}`,
103 |           oldAt,
104 |         ],
105 |       );
106 |       await client.query(
107 |         `insert into verification_jobs (
108 |            id, verification_session_id, organization_id, store_id,
109 |            payload_encrypted, status, attempts, provider_message_id,
110 |            completed_at, created_at, updated_at
111 |          ) values ($1, $2, $3, $4, 'opaque-wrapper-value', 'completed', 1, 'opaque-provider-reference', $5, $5, $5)`,
112 |         [verificationCompletedId, verificationSessionId, organizationId, storeId, oldAt],
113 |       );
114 |       await client.query(
115 |         `insert into durable_work_replays (
116 |            id, organization_id, store_id, work_type, work_id, idempotency_key,
117 |            previous_status, previous_error_code, previous_attempts, replayed_status, replayed_at
118 |          ) values ($1, $2, $3, 'webhook_delivery', $4, $5, 'failed', 'NETWORK_ERROR', 4, 'queued', $6)`,
119 |         [replayId, organizationId, storeId, webhookFailedId, `retention-replay-${suffix}`, oldAt],
120 |       );
121 |       await client.query('commit');
122 |     } catch (error) {
123 |       await client.query('rollback').catch(() => undefined);
124 |       throw error;
125 |     } finally {
126 |       client.release();
127 |     }
128 |   });
129 |
130 |   afterAll(async () => {
131 |     await pool.query('delete from organizations where id = $1', [organizationId]);
132 |     await pool.end();
133 |   });
134 |
135 |   it('previews only old terminal work with bounded metadata and no mutation', async () => {
136 |     const preview = await retention.preview({
137 |       cutoff,
138 |       statuses: ['completed', 'failed'],
139 |       limit: 10,
140 |       at: runAt,
141 |     });
142 |
143 |     expect(preview.candidates.map((row) => row.workId).sort()).toEqual(
144 |       [courierCompletedId, webhookFailedId, verificationCompletedId].sort(),
145 |     );
146 |     expect(JSON.stringify(preview)).not.toContain('source-only');
147 |     expect(JSON.stringify(preview)).not.toContain('opaque-wrapper-value');
148 |     expect(JSON.stringify(preview)).not.toContain('opaque-provider-reference');
149 |
150 |     const sourceCounts = await pool.query<{ count: number }>(
151 |       `select (
152 |          (select count(*) from courier_jobs where id = $1) +
153 |          (select count(*) from webhook_deliveries where id = $2) +
154 |          (select count(*) from verification_jobs where id = $3)
155 |        )::int as count`,
156 |       [courierCompletedId, webhookFailedId, verificationCompletedId],
157 |     );
158 |     expect(sourceCounts.rows[0]?.count).toBe(3);
159 |   });
160 |
161 |   it('archives then deletes only locked terminal rows while preserving replay evidence', async () => {
162 |     const result = await retention.archive({
163 |       cutoff,
164 |       statuses: ['completed', 'failed'],
165 |       limit: 10,
166 |       archiveRunId: `dwar_${suffix}`,
167 |       at: runAt,
168 |     });
169 |
170 |     expect(result.archived.map((row) => row.workId).sort()).toEqual(
171 |       [courierCompletedId, webhookFailedId, verificationCompletedId].sort(),
172 |     );
173 |     expect(JSON.stringify(result)).not.toContain('source-only');
174 |     expect(JSON.stringify(result)).not.toContain('opaque-wrapper-value');
175 |
176 |     const archived = await pool.query<{
177 |       work_id: string;
178 |       archive_run_id: string;
179 |       archived_by: string;
180 |     }>(
181 |       `select work_id, archive_run_id, archived_by
182 |        from durable_work_archives
183 |        where organization_id = $1
184 |        order by work_id`,
185 |       [organizationId],
186 |     );
187 |     expect(archived.rows).toHaveLength(3);
188 |     expect(archived.rows.every((row) => row.archive_run_id === `dwar_${suffix}`)).toBe(true);
189 |     expect(archived.rows.every((row) => row.archived_by.length > 0)).toBe(true);
190 |     expect(result.archived.every((row) => row.archivedBy.length > 0)).toBe(true);
191 |
192 |     const remaining = await pool.query<{ id: string }>(
193 |       `select id from courier_jobs where id = any($1::text[])
194 |        union all
195 |        select id from webhook_deliveries where id = any($1::text[])
196 |        union all
197 |        select id from verification_jobs where id = any($1::text[])`,
198 |       [[courierCompletedId, webhookFailedId, verificationCompletedId]],
199 |     );
200 |     expect(remaining.rows).toEqual([]);
201 |     await expect(
202 |       pool.query('select 1 from courier_jobs where id = $1', [courierQueuedId]),
203 |     ).resolves.toMatchObject({ rowCount: 1 });
204 |     await expect(
205 |       pool.query('select 1 from webhook_deliveries where id = $1', [webhookRecentId]),
206 |     ).resolves.toMatchObject({ rowCount: 1 });
207 |     await expect(
208 |       pool.query('select 1 from durable_work_replays where id = $1', [replayId]),
209 |     ).resolves.toMatchObject({ rowCount: 1 });
210 |   });
211 |
212 |   it('is idempotent after source rows have already been archived', async () => {
213 |     const result = await retention.archive({
214 |       cutoff,
215 |       statuses: ['completed', 'failed'],
216 |       limit: 10,
217 |       archiveRunId: `dwar_rerun-${suffix}`,
218 |       at: runAt,
219 |     });
220 |     expect(result.archived).toEqual([]);
221 |   });
222 |
223 |   it('archive schema omits source payload and provider-reference columns', async () => {
224 |     const columns = await pool.query<{ column_name: string }>(
225 |       `select column_name
226 |        from information_schema.columns
227 |        where table_schema = 'public' and table_name = 'durable_work_archives'`,
228 |     );
229 |     const names = columns.rows.map((row) => row.column_name);
230 |     for (const prohibited of [
231 |       'payload',
232 |       'event_payload',
233 |       'payload_encrypted',
234 |       'provider_message_id',
235 |       'response_status',
236 |       'phone_hash',
237 |       'secret_encrypted',
238 |     ]) {
239 |       expect(names).not.toContain(prohibited);
240 |     }
241 |   });
242 | });
243 |
```

### packages/database/src/durable-work-retention.test.ts

Bytes: 1804
SHA-256: 066cbc98691358fd8e6128caa3c09a8b7db1be47162904fee4e011ef0cfd8c2f
Lines: 1-63 of 63

```typescript
 1 | import { describe, expect, it } from 'vitest';
 2 | import type { Pool } from 'pg';
 3 | import {
 4 |   MAX_DURABLE_WORK_ARCHIVE_BATCH,
 5 |   PostgresDurableWorkRetention,
 6 | } from './durable-work-retention.js';
 7 |
 8 | const unusablePool = {} as Pool;
 9 | const retention = new PostgresDurableWorkRetention(unusablePool);
10 | const at = new Date('2026-07-28T08:00:00.000Z');
11 |
12 | describe('durable work retention input boundary', () => {
13 |   it('requires a cutoff at least 24 hours before the run', async () => {
14 |     await expect(
15 |       retention.preview({
16 |         cutoff: new Date('2026-07-27T12:00:00.000Z'),
17 |         statuses: ['completed'],
18 |         at,
19 |       }),
20 |     ).rejects.toMatchObject({
21 |       code: 'DURABLE_WORK_ARCHIVE_INPUT_INVALID',
22 |     });
23 |   });
24 |
25 |   it('rejects empty terminal status selection', async () => {
26 |     await expect(
27 |       retention.preview({
28 |         cutoff: new Date('2026-07-20T00:00:00.000Z'),
29 |         statuses: [],
30 |         at,
31 |       }),
32 |     ).rejects.toMatchObject({
33 |       code: 'DURABLE_WORK_ARCHIVE_INPUT_INVALID',
34 |     });
35 |   });
36 |
37 |   it('rejects unbounded archive batches before opening a database connection', async () => {
38 |     await expect(
39 |       retention.archive({
40 |         cutoff: new Date('2026-07-20T00:00:00.000Z'),
41 |         statuses: ['completed', 'failed'],
42 |         limit: MAX_DURABLE_WORK_ARCHIVE_BATCH + 1,
43 |         at,
44 |       }),
45 |     ).rejects.toMatchObject({
46 |       code: 'DURABLE_WORK_ARCHIVE_INPUT_INVALID',
47 |     });
48 |   });
49 |
50 |   it('rejects unsafe archive run identifiers before opening a database connection', async () => {
51 |     await expect(
52 |       retention.archive({
53 |         cutoff: new Date('2026-07-20T00:00:00.000Z'),
54 |         statuses: ['failed'],
55 |         archiveRunId: 'unsafe-run',
56 |         at,
57 |       }),
58 |     ).rejects.toMatchObject({
59 |       code: 'DURABLE_WORK_ARCHIVE_INPUT_INVALID',
60 |     });
61 |   });
62 | });
63 |
```

## Skipped Files

None.
