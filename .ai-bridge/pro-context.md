# CodexPro Context Bundle

Generated: 2026-07-28T09:51:21.718Z
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
## feat/critical-path-domain-metrics
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M README.md
 M apps/api/src/index.test.ts
 M apps/api/src/index.ts
 M docs/README.md
 M docs/operations/operations-observability.md
 M docs/roadmap/risk-register.md
 M docs/security/security-privacy.md
 M docs/testing/testing-strategy.md
 M packages/observability/src/metrics.test.ts
 M packages/observability/src/metrics.ts
 M tracker.yml
```

## Recent Commits

```text
1d31af8 (HEAD -> feat/critical-path-domain-metrics, origin/main, main) docs: record distributed trace CI evidence (#39)
0b6125a feat(observability): propagate durable trace context (#38)
6425136 docs: record durable metrics CI evidence (#37)
53b8820 feat(observability): instrument durable operations (#36)
2e71b97 docs: record metrics CI evidence (#35)
02be8d2 feat(observability): add safe application metrics (#34)
0851020 docs: record retention CI evidence (#33)
8788da4 feat(database): archive terminal durable work (#32)
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
  7 | A runnable standalone MVP foundation and twenty-one production-hardening slices are complete:
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
 27 | 19. finite-cardinality durable repository and provider-call timing plus aggregate queue depth/oldest-ready-age gauges for courier, webhook, and verification workers, with configurable cadence and telemetry-only snapshot failure behavior;
 28 | 20. vendor-neutral W3C trace-context propagation from API server and durable producer spans through courier, webhook, and verification queue rows into worker consumer and provider-client spans, with finite attributes, nullable legacy context, verification-failure webhook continuation, and telemetry-failure isolation;
 29 | 21. bounded critical-path API/domain metrics for authentication, authorization, rate limiting, quota, idempotency, API dependency count/duration, risk assessment quality bands, and verified outcomes, with replay de-duplication, outage-vs-limit distinction, and telemetry-failure isolation.
 30 |
 31 | Concrete provider selection and provisioning remain external production work.
 32 |
 33 | ## Completed
 34 |
 35 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 36 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 37 | - [x] Canonical shared API/error/event contracts
 38 | - [x] PostgreSQL/Drizzle schema and fourteen append-only migrations
 39 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 40 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 41 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 42 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 43 | - [x] Courier adapter contract and Steadfast normalized adapter
 44 | - [x] Playwright Steadfast session driver with structured errors
 45 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 46 | - [x] Runnable PostgreSQL courier session and observation workers
 47 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 48 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 49 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 50 | - [x] API OTP send returns queued work without provider network I/O
 51 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 52 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 53 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 54 | - [x] Explicit-role platform admin with live global operations data
 55 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 56 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 57 | - [x] Architecture dependency-boundary CI guard
 58 | - [x] Provider-neutral production deployment topology ADR
 59 | - [x] Managed PostgreSQL production baseline ADR
 60 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 61 | - [x] Managed secrets and KMS envelope-encryption ADR
 62 | - [x] Vendor-neutral OpenTelemetry observability ADR
 63 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 64 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 65 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 66 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 67 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 68 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 69 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 70 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 71 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 72 | - [x] Authentication, authorization, rate-limit, quota, and idempotency controls emit finite allowed/rejected/replay/error events
 73 | - [x] API-key resolution, rate limiting, usage reservation, feature assembly, assessment/outcome persistence, idempotency storage, durable enqueue, and OTP verification emit finite dependency count/duration metrics
 74 | - [x] New risk assessments emit only bounded decision/level/score-band/confidence-band/degraded/freshness distributions; replays do not double-count
 75 | - [x] New verified outcomes emit only bounded outcome/linkage distributions; replays do not double-count
 76 | - [x] Usage-limit rejection remains distinct from unexpected usage-ledger failure, which surfaces as an error rather than a false 429
 77 | - [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
 78 | - [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
 79 | - [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
 80 | - [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
 81 | - [x] Strict W3C version-00 `traceparent` parsing rejects malformed and all-zero identifiers; bounded optional `tracestate` is propagated but not exported as a span attribute
 82 | - [x] API requests emit server spans and durable assessment/outcome/courier/OTP enqueue operations emit producer spans with finite route/operation/queue/outcome attributes
 83 | - [x] Courier, webhook, and verification rows persist nullable validated trace context outside payloads; legacy null rows remain processable and archive evidence does not copy trace context
 84 | - [x] Courier, webhook, verification, and courier-session workers emit consumer/root operation spans with provider-client child spans and no business identifiers, phone/OTP values, credentials, URLs, payloads, or arbitrary error codes
 85 | - [x] Verification failure events continue the active worker trace into the newly queued webhook delivery
 86 | - [x] Missing or invalid persisted context starts a fresh root trace, while trace validation, clock, serialization, or sink failure cannot change API or worker behavior
 87 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 88 | - [x] Concurrent usage reservations cannot exceed the plan limit
 89 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 90 | - [x] Concurrent outcome writes resolve as one insert and one replay
 91 | - [x] Operation idempotency records remain isolated by organization and store
 92 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 93 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 94 | - [x] Expired or previous courier owners cannot complete or fail jobs
 95 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 96 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 97 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 98 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 99 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
100 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
101 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
102 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
103 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
104 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
105 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
106 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
107 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
108 | - [x] Verification scope mismatch fails both the job and authoritative session closed
109 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
110 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
111 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
112 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
113 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
114 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
115 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
116 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
117 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
118 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
119 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
120 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
121 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
122 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
123 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
124 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
125 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
126 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
127 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
128 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
129 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
130 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
131 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
132 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
133 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
134 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
135 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
136 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
137 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
138 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
139 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
140 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
141 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
142 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
143 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
144 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
145 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
146 |
147 | ## Verified baseline
148 |
149 | - Formatting check: passed
150 | - ESLint with zero warnings: passed
151 | - Fourteen migration files ordered/non-empty/non-destructive: passed locally; current source-branch CI is pending
152 | - First migration apply and immediate migration replay: previous merged baseline passed remotely; this slice has no migration change
153 | - Architecture import boundaries: passed locally; current source-branch CI is pending
154 | - Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
155 | - Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
156 | - Repository test inventory: 186 source tests; previous merged remote baseline is 180
157 | - Critical-path metric coverage: 21 shared observability tests and 52 API source tests cover control/dependency/risk/outcome metrics, replay de-duplication, quota rejection vs dependency failure, identifier omission, and sink isolation
158 | - Tracing coverage: previous merged source CI passed 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests
159 | - Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
160 | - WooCommerce PHP syntax: passed locally; current source-branch CI is pending
161 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
162 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
163 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
164 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
165 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
166 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
167 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
168 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
169 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
170 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
171 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
172 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
173 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
174 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
175 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
176 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
177 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
178 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
179 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
180 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
181 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
182 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
183 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
184 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
185 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
186 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
187 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
188 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
189 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
190 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
191 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
192 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
193 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
194 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
195 | - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
196 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
197 | - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
198 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
199 | - Distributed trace-context final CI run `30344660685`, job `90227950094`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 180 tests, 20 builds, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
200 | - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
201 | - Canonical documentation links: 61 reviewed locally with zero known broken internal links
202 | - `tracker.yml` YAML structure remains valid
203 | - Changed-file secret-pattern scan: passed
204 |
205 | The repository-local continuation exporter was refreshed after critical-path metric documentation and tracker updates were finalized.
206 |
207 | ## Next production milestone
208 |
209 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
210 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
211 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
212 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
213 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
214 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
215 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
216 |
217 | ## External blockers
218 |
219 | - Authorized Steadfast merchant/test credentials
220 | - Steadfast provider-terms and merchant-authorization review
221 | - Deployment platform, account, primary region, and budget
222 | - Managed PostgreSQL provider and service tier
223 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
224 | - Managed secret store and KMS/vault provider
225 | - OpenTelemetry exporter/collector, sampling policy, remaining browser/admin/integration metrics, managed observability backend, dashboards, alerts, and retention policy
226 | - OTP provider account and credentials
227 | - Production account recovery/MFA or managed identity-provider decision
228 | - Repository visibility correction from currently reported public to expected private
229 | - Pilot outcome data for false-positive/false-negative calibration
230 |
231 | ## Non-negotiable continuation rules
232 |
233 | - Do not add a second risk engine.
234 | - Do not call providers from the risk engine or synchronous checkout path.
235 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
236 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
237 | - Do not use API keys as dashboard user sessions.
238 | - Require organization/store scope in all merchant repositories, events, and jobs.
239 | - Add new migrations; never edit applied migrations.
240 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
241 | - Keep Redis/cache state non-authoritative.
242 | - Keep unknown/provider failure explicit and policy-controlled.
243 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
244 |

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
 53 | 47. `@ozzyl/observability` owns a vendor-neutral W3C trace-context boundary. Only version-00 `traceparent` with non-zero trace/span IDs and bounded optional `tracestate` is accepted; malformed input is ignored and starts a new root rather than failing work. API server spans create durable producer children whose opaque context is stored only in dedicated nullable courier/webhook/verification queue columns, never in payloads or archive evidence. Workers continue that context as consumer spans and provider calls as client children; courier-session refresh is a root operation. Verification failure webhook rows continue the active worker context. Span attributes are descriptor-owned finite categories and prohibit IDs, hashes, keys, URLs, payloads/bodies, contact/OTP values, credentials, provider responses, and arbitrary error codes. Span output is local JSON with no network I/O; exporter/collector, backend, sampling, retention, dashboards, and alerts remain external production work.
 54 | 48. Critical synchronous API controls and dependencies are measured only through descriptor-owned finite categories. Authentication, authorization, rate limiting, quota, and idempotency expose allowed/rejected/replay/error outcomes; API-key, rate-limiter, usage-ledger, feature-provider, assessment/outcome repository, idempotency-store, durable-enqueue, and OTP-verifier operations expose count/duration with success/empty/replay/rejected/error outcomes. New assessments expose only bounded decision, risk-level, score, confidence, degraded, and freshness bands; new outcomes expose only finite outcome and assessment-linkage categories. Business identifiers, keys, hashes, phone/OTP values, URLs, payloads, vendor names, and error detail are prohibited. Replays are not double-counted, usage limits remain distinct from dependency outages, and telemetry failure cannot change domain execution.
 55 |
 56 | ## Source SaaS conflict resolutions
 57 |
 58 | | Conflict                                                                 | Decision                                                                                   |
 59 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 60 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 61 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 62 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 63 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 64 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 65 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 66 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 67 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 68 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 69 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 70 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 71 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 72 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 73 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 74 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 75 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 76 |
 77 | ## Approved reuse scope
 78 |
 79 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 80 | - Bangladesh phone normalization after tests
 81 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 82 | - WooCommerce settings/order hook/admin display skeleton
 83 | - API-key hash/display-prefix and usage-event concepts
 84 |
 85 | No product source code was copied during Phase 0.
 86 |
 87 | ## Pending decisions
 88 |
 89 | These require provider selection, provisioning, or separate ADRs before production implementation:
 90 |
 91 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 92 | - Specific deployment platform, account, and primary region
 93 | - Specific managed PostgreSQL provider and service tier
 94 | - Specific managed secret store and KMS/vault provider
 95 | - Specific observability backend and retention policy
 96 | - Redis-compatible cache provider when distributed coordination is required
 97 | - Dedicated broker only if measured scale requires superseding ADR 0008
 98 | - Worker scheduler/runtime implementation on the selected deployment platform
 99 | - OTP provider
100 |
101 | ## External requirements
102 |
103 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
104 |
105 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
106 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, README.md, apps/api/src/index.test.ts, apps/api/src/index.ts, docs/README.md, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/observability/src/metrics.test.ts, packages/observability/src/metrics.ts, tracker.yml
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, docs/README.md, eslint.config.js, package.json, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, apps/api/src/index.test.ts, apps/api/src/index.ts, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/observability/src/metrics.test.ts, packages/observability/src/metrics.ts, tracker.yml

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

Bytes: 3374
SHA-256: 91cea5b5fe5da20650763c3bcea9b7f607f3e5125ab346f0d02cdb053bb0ed30
Lines: 1-56 of 56

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The distributed trace-context milestone is merged on `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`; feature CI run `30344660685`, job `90227950094`, passed fourteen migrations, 20 typechecks, 31 Turbo tasks with 180 tests, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. The current critical-path domain-metrics source branch adds finite authentication/authorization/rate-limit/quota/idempotency events, critical API dependency count/duration, bounded risk assessment and verified-outcome distributions, replay de-duplication, and explicit quota-limit versus usage-dependency failure handling without business identifiers or error detail. Source inventory is 186 tests; remote CI evidence is pending.
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

Bytes: 8313
SHA-256: bc917710fca5273da98a6fd6853a5c4c3da25fafc3ea599fecbe444ec0e45036
Lines: 1-152 of 152

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
 27 | - PostgreSQL schema, fourteen append-only migrations, committed SHA-256 manifest, and non-null history checksums
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
 49 | - Vendor-neutral JSON metric points for API requests, critical auth/quota/idempotency controls, API dependencies, bounded risk/outcome quality, private-worker operations, durable repository transitions, provider calls, queue depth/age, and claim failures, with finite categorical labels and telemetry-failure isolation
 50 | - Strict W3C trace-context propagation from API server/producer spans through durable courier, webhook, and verification work into worker consumer and provider-client spans without business identifiers or sensitive attributes
 51 |
 52 | The following require external accounts or production decisions before live use:
 53 |
 54 | - Authorized Steadfast merchant/test credentials and provider-terms review
 55 | - A selected KMS/vault adapter, component service identities, access auditing, runtime wiring, and an audited background rewrite before replacing local v1 encryption in production
 56 | - OTP provider selection and credentials
 57 | - Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
 58 | - Production queue/cache providers plus observability exporter/collector, sampling policy, managed backend, dashboards, alerts, and retention
 59 | - A separately provisioned retention-maintenance database identity, approved retention windows/holds, monitoring, and backup/PITR recovery before any scheduled archival
 60 | - Production source-platform hook deployment, explicit pilot-store selection, and outcome calibration before any enforcement or broad automatic blocking
 61 |
 62 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
 63 |
 64 | ## Repository structure
 65 |
 66 | ```text
 67 | apps/
 68 |   api/             Versioned API and PostgreSQL repositories
 69 |   dashboard/       Merchant operations dashboard
 70 |   admin/           Platform operations dashboard
 71 | workers/
 72 |   courier-session-worker/
 73 |   courier-sync-worker/
 74 |   verification-worker/
 75 |   event-worker/
 76 | packages/
 77 |   shared-types/
 78 |   risk-engine/
 79 |   courier-adapters/
 80 |   database/
 81 |   authentication/
 82 |   billing/
 83 |   verification/
 84 |   sdk/
 85 |   observability/
 86 | integrations/
 87 |   woocommerce/
 88 |   shopify/
 89 |   custom-js/
 90 |   multi-store-saas/
 91 | docs/
 92 | .ai-bridge/
 93 | ```
 94 |
 95 | ## Core rules
 96 |
 97 | 1. There is exactly one canonical risk engine.
 98 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
 99 | 3. Courier providers are isolated behind adapters and asynchronous workers.
100 | 4. Merchant data is always organization/store scoped.
101 | 5. Unknown customers are not automatically safe.
102 | 6. Provider failure does not automatically approve or block a customer.
103 | 7. Every assessment returns explainable signals and confidence.
104 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
105 | 9. Applied migrations are immutable; changes require a new migration.
106 | 10. Every integration consumes the same canonical API response.
107 |
108 | ## Local setup
109 |
110 | Prerequisites: Node.js 20.19+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
111 |
112 | ```bash
113 | npm install
114 | npm run db:check
115 | npm run db:migrate
116 | npm run db:integrity
117 | # After creating a separate non-owner PostgreSQL login outside the app:
118 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
119 | npm run bootstrap -w @ozzyl/api
120 | npm run dev:api
121 | ```
122 |
123 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
124 |
125 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
126 |
127 | Dead-letter operations are documented in the [durable work runbook](docs/operations/durable-work-dead-letter-runbook.md). They require a trusted environment, `DATABASE_URL`, an active owner/admin user ID, and exact organization/store scope.
128 |
129 | Merchant dashboard:
130 |
131 | ```bash
132 | npm run dev:dashboard
133 | ```
134 |
135 | Platform admin:
136 |
137 | ```bash
138 | npm run dev -w @ozzyl/admin
139 | ```
140 |
141 | Private workers:
142 |
143 | ```bash
144 | npm run start -w @ozzyl/courier-session-worker
145 | npm run start -w @ozzyl/courier-sync-worker
146 | npm run start -w @ozzyl/event-worker
147 | # Requires a reviewed provider module/account in addition to the standard secrets:
148 | npm run start -w @ozzyl/verification-worker
149 | ```
150 |
151 | ## Docker Compose
152 |
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

Bytes: 30248
SHA-256: 8be7b891e931121b06117fac1a73249046e2f8aaade21fb73a85e5980ad915db
Lines: 1-244 of 244

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and twenty-one production-hardening slices are complete:
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
 27 | 19. finite-cardinality durable repository and provider-call timing plus aggregate queue depth/oldest-ready-age gauges for courier, webhook, and verification workers, with configurable cadence and telemetry-only snapshot failure behavior;
 28 | 20. vendor-neutral W3C trace-context propagation from API server and durable producer spans through courier, webhook, and verification queue rows into worker consumer and provider-client spans, with finite attributes, nullable legacy context, verification-failure webhook continuation, and telemetry-failure isolation;
 29 | 21. bounded critical-path API/domain metrics for authentication, authorization, rate limiting, quota, idempotency, API dependency count/duration, risk assessment quality bands, and verified outcomes, with replay de-duplication, outage-vs-limit distinction, and telemetry-failure isolation.
 30 |
 31 | Concrete provider selection and provisioning remain external production work.
 32 |
 33 | ## Completed
 34 |
 35 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 36 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 37 | - [x] Canonical shared API/error/event contracts
 38 | - [x] PostgreSQL/Drizzle schema and fourteen append-only migrations
 39 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 40 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 41 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 42 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 43 | - [x] Courier adapter contract and Steadfast normalized adapter
 44 | - [x] Playwright Steadfast session driver with structured errors
 45 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 46 | - [x] Runnable PostgreSQL courier session and observation workers
 47 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 48 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 49 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 50 | - [x] API OTP send returns queued work without provider network I/O
 51 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 52 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 53 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 54 | - [x] Explicit-role platform admin with live global operations data
 55 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 56 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 57 | - [x] Architecture dependency-boundary CI guard
 58 | - [x] Provider-neutral production deployment topology ADR
 59 | - [x] Managed PostgreSQL production baseline ADR
 60 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 61 | - [x] Managed secrets and KMS envelope-encryption ADR
 62 | - [x] Vendor-neutral OpenTelemetry observability ADR
 63 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 64 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 65 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 66 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 67 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 68 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 69 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 70 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 71 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 72 | - [x] Authentication, authorization, rate-limit, quota, and idempotency controls emit finite allowed/rejected/replay/error events
 73 | - [x] API-key resolution, rate limiting, usage reservation, feature assembly, assessment/outcome persistence, idempotency storage, durable enqueue, and OTP verification emit finite dependency count/duration metrics
 74 | - [x] New risk assessments emit only bounded decision/level/score-band/confidence-band/degraded/freshness distributions; replays do not double-count
 75 | - [x] New verified outcomes emit only bounded outcome/linkage distributions; replays do not double-count
 76 | - [x] Usage-limit rejection remains distinct from unexpected usage-ledger failure, which surfaces as an error rather than a false 429
 77 | - [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
 78 | - [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
 79 | - [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
 80 | - [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
 81 | - [x] Strict W3C version-00 `traceparent` parsing rejects malformed and all-zero identifiers; bounded optional `tracestate` is propagated but not exported as a span attribute
 82 | - [x] API requests emit server spans and durable assessment/outcome/courier/OTP enqueue operations emit producer spans with finite route/operation/queue/outcome attributes
 83 | - [x] Courier, webhook, and verification rows persist nullable validated trace context outside payloads; legacy null rows remain processable and archive evidence does not copy trace context
 84 | - [x] Courier, webhook, verification, and courier-session workers emit consumer/root operation spans with provider-client child spans and no business identifiers, phone/OTP values, credentials, URLs, payloads, or arbitrary error codes
 85 | - [x] Verification failure events continue the active worker trace into the newly queued webhook delivery
 86 | - [x] Missing or invalid persisted context starts a fresh root trace, while trace validation, clock, serialization, or sink failure cannot change API or worker behavior
 87 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 88 | - [x] Concurrent usage reservations cannot exceed the plan limit
 89 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 90 | - [x] Concurrent outcome writes resolve as one insert and one replay
 91 | - [x] Operation idempotency records remain isolated by organization and store
 92 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 93 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 94 | - [x] Expired or previous courier owners cannot complete or fail jobs
 95 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 96 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 97 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 98 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 99 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
100 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
101 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
102 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
103 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
104 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
105 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
106 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
107 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
108 | - [x] Verification scope mismatch fails both the job and authoritative session closed
109 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
110 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
111 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
112 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
113 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
114 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
115 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
116 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
117 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
118 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
119 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
120 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
121 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
122 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
123 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
124 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
125 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
126 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
127 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
128 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
129 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
130 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
131 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
132 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
133 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
134 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
135 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
136 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
137 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
138 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
139 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
140 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
141 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
142 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
143 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
144 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
145 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
146 |
147 | ## Verified baseline
148 |
149 | - Formatting check: passed
150 | - ESLint with zero warnings: passed
151 | - Fourteen migration files ordered/non-empty/non-destructive: passed locally; current source-branch CI is pending
152 | - First migration apply and immediate migration replay: previous merged baseline passed remotely; this slice has no migration change
153 | - Architecture import boundaries: passed locally; current source-branch CI is pending
154 | - Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
155 | - Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
156 | - Repository test inventory: 186 source tests; previous merged remote baseline is 180
157 | - Critical-path metric coverage: 21 shared observability tests and 52 API source tests cover control/dependency/risk/outcome metrics, replay de-duplication, quota rejection vs dependency failure, identifier omission, and sink isolation
158 | - Tracing coverage: previous merged source CI passed 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests
159 | - Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
160 | - WooCommerce PHP syntax: passed locally; current source-branch CI is pending
161 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
162 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
163 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
164 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
165 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
166 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
167 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
168 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
169 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
170 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
171 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
172 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
173 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
174 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
175 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
176 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
177 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
178 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
179 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
180 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
181 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
182 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
183 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
184 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
185 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
186 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
187 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
188 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
189 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
190 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
191 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
192 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
193 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
194 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
195 | - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
196 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
197 | - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
198 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
199 | - Distributed trace-context final CI run `30344660685`, job `90227950094`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 180 tests, 20 builds, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
200 | - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
201 | - Canonical documentation links: 61 reviewed locally with zero known broken internal links
202 | - `tracker.yml` YAML structure remains valid
203 | - Changed-file secret-pattern scan: passed
204 |
205 | The repository-local continuation exporter was refreshed after critical-path metric documentation and tracker updates were finalized.
206 |
207 | ## Next production milestone
208 |
209 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
210 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
211 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
212 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
213 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
214 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
215 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
216 |
217 | ## External blockers
218 |
219 | - Authorized Steadfast merchant/test credentials
220 | - Steadfast provider-terms and merchant-authorization review
221 | - Deployment platform, account, primary region, and budget
222 | - Managed PostgreSQL provider and service tier
223 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
224 | - Managed secret store and KMS/vault provider
225 | - OpenTelemetry exporter/collector, sampling policy, remaining browser/admin/integration metrics, managed observability backend, dashboards, alerts, and retention policy
226 | - OTP provider account and credentials
227 | - Production account recovery/MFA or managed identity-provider decision
228 | - Repository visibility correction from currently reported public to expected private
229 | - Pilot outcome data for false-positive/false-negative calibration
230 |
231 | ## Non-negotiable continuation rules
232 |
233 | - Do not add a second risk engine.
234 | - Do not call providers from the risk engine or synchronous checkout path.
235 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
236 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
237 | - Do not use API keys as dashboard user sessions.
238 | - Require organization/store scope in all merchant repositories, events, and jobs.
239 | - Add new migrations; never edit applied migrations.
240 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
241 | - Keep Redis/cache state non-authoritative.
242 | - Keep unknown/provider failure explicit and policy-controlled.
243 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
244 |
```

### .ai-bridge/decisions.md

Bytes: 19721
SHA-256: 5607b1bcd3e578c02ff0579c99d622d8c70798c6d580a79a7bf780383cbe46e2
Lines: 1-106 of 106

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
 53 | 47. `@ozzyl/observability` owns a vendor-neutral W3C trace-context boundary. Only version-00 `traceparent` with non-zero trace/span IDs and bounded optional `tracestate` is accepted; malformed input is ignored and starts a new root rather than failing work. API server spans create durable producer children whose opaque context is stored only in dedicated nullable courier/webhook/verification queue columns, never in payloads or archive evidence. Workers continue that context as consumer spans and provider calls as client children; courier-session refresh is a root operation. Verification failure webhook rows continue the active worker context. Span attributes are descriptor-owned finite categories and prohibit IDs, hashes, keys, URLs, payloads/bodies, contact/OTP values, credentials, provider responses, and arbitrary error codes. Span output is local JSON with no network I/O; exporter/collector, backend, sampling, retention, dashboards, and alerts remain external production work.
 54 | 48. Critical synchronous API controls and dependencies are measured only through descriptor-owned finite categories. Authentication, authorization, rate limiting, quota, and idempotency expose allowed/rejected/replay/error outcomes; API-key, rate-limiter, usage-ledger, feature-provider, assessment/outcome repository, idempotency-store, durable-enqueue, and OTP-verifier operations expose count/duration with success/empty/replay/rejected/error outcomes. New assessments expose only bounded decision, risk-level, score, confidence, degraded, and freshness bands; new outcomes expose only finite outcome and assessment-linkage categories. Business identifiers, keys, hashes, phone/OTP values, URLs, payloads, vendor names, and error detail are prohibited. Replays are not double-counted, usage limits remain distinct from dependency outages, and telemetry failure cannot change domain execution.
 55 |
 56 | ## Source SaaS conflict resolutions
 57 |
 58 | | Conflict                                                                 | Decision                                                                                   |
 59 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 60 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 61 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 62 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 63 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 64 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 65 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 66 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 67 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 68 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 69 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 70 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 71 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 72 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 73 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 74 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 75 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 76 |
 77 | ## Approved reuse scope
 78 |
 79 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 80 | - Bangladesh phone normalization after tests
 81 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 82 | - WooCommerce settings/order hook/admin display skeleton
 83 | - API-key hash/display-prefix and usage-event concepts
 84 |
 85 | No product source code was copied during Phase 0.
 86 |
 87 | ## Pending decisions
 88 |
 89 | These require provider selection, provisioning, or separate ADRs before production implementation:
 90 |
 91 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 92 | - Specific deployment platform, account, and primary region
 93 | - Specific managed PostgreSQL provider and service tier
 94 | - Specific managed secret store and KMS/vault provider
 95 | - Specific observability backend and retention policy
 96 | - Redis-compatible cache provider when distributed coordination is required
 97 | - Dedicated broker only if measured scale requires superseding ADR 0008
 98 | - Worker scheduler/runtime implementation on the selected deployment platform
 99 | - OTP provider
100 |
101 | ## External requirements
102 |
103 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
104 |
105 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
106 |
```

### .ai-bridge/implementation-status.md

Bytes: 29897
SHA-256: bf76618a45d1b6b9630c5baa637969af2d4a0826d749f596b2a4a0dbd88e10f3
Lines: 1-191 of 191

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
 17 | | Continuation documentation | baseline | Tracker, plan, status, decisions, and generated `pro-context.md` are being refreshed for the critical-path domain-metrics source branch               |
 18 | | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
 19 | | Monorepo/tooling           | done     | 20 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
 20 | | CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
 21 | | Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
 22 | | Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
 23 | | Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |
 24 |
 25 | ## Product implementation
 26 |
 27 | | Area                             | Status   | Notes                                                                                                                                                                                                                                            |
 28 | | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                                                                                  |
 30 | | Database/migrations              | done     | Fourteen append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                                                                                |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                                                                               |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                                                                                  |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                                                                            |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                                                                    |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                                                                    |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                                                                    |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                                                                             |
 38 | | Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                                                                        |
 39 | | Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                                                                                |
 40 | | Durable work architecture        | done     | Claims, renewable leases, dead-letter replay, plus maintenance-only bounded terminal archival with evidence-before-delete and runtime-role denial                                                                                                |
 41 | | Durable work operations          | done     | Failed work supports scoped replay; old completed/failed rows support preview-first maintenance archival while immutable replay/audit evidence remains                                                                                           |
 42 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                                                                           |
 43 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                                                                                  |
 44 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                                                                         |
 45 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                                                                         |
 46 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                                                                      |
 47 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                                                                                   |
 48 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                                                                         |
 49 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                                                                             |
 50 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                                                                              |
 51 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                                                                    |
 52 | | OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                                                                                  |
 53 | | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                                                                                   |
 54 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                                                                        |
 55 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                                                                       |
 56 | | PostgreSQL runtime role          | done     | Explicit DML grants, no migration history/DELETE/DDL/archive access; separate retention-maintenance identity and managed provisioning remain                                                                                                     |
 57 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                                                                           |
 58 | | Observability                    | baseline | Redacted logs, critical API/domain plus worker/repository/provider metrics/gauges, and W3C durable trace propagation are implemented; exporter/collector, sampling, remaining surface metrics, backend, dashboards, alerts, and retention remain |
 59 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                                                                        |
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
 76 | 14. `0014_durable_trace_context.sql`
 77 |
 78 | Applied migrations must remain immutable.
 79 |
 80 | ## Verification evidence
 81 |
 82 | - `npm run format:check`: passed
 83 | - `npm run lint`: passed with zero warnings
 84 | - `npm run db:check`: fourteen migrations and committed SHA-256 manifest validated locally; current source-branch CI is pending
 85 | - initial migration apply/replay, history integrity, and clean restore: previous merged baseline passed remotely; this slice has no migration change
 86 | - `npm run check:architecture`: passed locally; current source-branch CI is pending
 87 | - `npm run typecheck`: 20/20 workspaces passed locally; current source-branch CI is pending
 88 | - `npm run test`: 31/31 Turbo tasks passed locally; source inventory is 186 tests and previous merged remote baseline is 180
 89 | - `npm run build`: 20/20 workspace builds passed locally; current source-branch CI is pending
 90 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 91 | - Observability tests prove fixed log metadata/redaction, finite metric/span descriptors, strict W3C trace parsing/formatting/persistence, bounded control/dependency/risk distributions, exporter-neutral JSON points, and sink/clock/ID-generation failure isolation
 92 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, bounded request/control/dependency/risk/outcome metrics, replay de-duplication, quota-limit vs dependency-error distinction, identifier omission, safe unhandled-error serialization, and authenticated domain availability during log/metric sink failure
 93 | - Courier-session, courier-sync, event, and verification tests prove bounded worker/provider count/duration metrics omit account/job/event/endpoint/phone/OTP/credential/URL/vendor/error-text values; shared tests cover repository outcomes, claim failures, aggregate gauges, and telemetry isolation
 94 | - Courier, webhook, and verification PostgreSQL suites include aggregate queue-depth and oldest-ready-age snapshots without row or tenant identifiers
 95 | - API and four worker tests prove server→producer→consumer→provider trace lineage while omitting request/tenant/job/event/account/phone/OTP/credential/URL/payload/error values
 96 | - Three PostgreSQL durable-context tests passed for valid/null round-trip, malformed context rejection across all three durable tables, and all-zero trace/span rejection
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
146 | - Repository/provider/queue metrics final run `30329769797`, job `90182279338`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
147 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
148 | - Distributed trace-context final run `30344660685`, job `90227950094`: GitGuardian, fourteen migrations, 20 typechecks, 31 Turbo tasks with 180 tests, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
149 | - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
150 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
151 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
152 | - Previous canonical documentation checks found zero broken internal links
153 | - Prohibited insecure-pattern scan: zero matches
154 |
155 | The repository-local exporter was refreshed after critical-path metric documentation and tracker updates were finalized. Current source-branch remote CI is pending.
156 |
157 | ## External blockers and production requirements
158 |
159 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
160 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
161 | - Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
162 | - Managed secret store and KMS/vault provider
163 | - OpenTelemetry exporter/collector, sampling policy, remaining browser/admin/integration metrics, managed observability backend, retention, dashboards, alerts, and incident channels
164 | - Optional Redis-compatible cache only when distributed coordination is required
165 | - Authorized Steadfast test/merchant account
166 | - Provider-terms and merchant-authorization review
167 | - OTP provider selection/account
168 | - Production account recovery/MFA or managed identity-provider decision
169 | - Pilot merchants and verified outcome data for calibration
170 |
171 | ## Remaining risks
172 |
173 | - Steadfast UI/internal endpoint changes can break automation.
174 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
175 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
176 | - In-process API and browser-session rate limiting is not distributed across replicas.
177 | - Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
178 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
179 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
180 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
181 | - GitHub currently reports public repository visibility although the expected policy is private.
182 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
183 | - Structured logs, critical API/domain plus worker/repository/provider metrics/gauges, and API-to-durable-worker/provider trace propagation are implemented, but remaining browser/admin/integration metrics, exporter/collector, sampling policy, dashboards, alerts, managed backend, and telemetry retention are not yet implemented.
184 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
185 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
186 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
187 |
188 | ## Next milestone
189 |
190 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
191 |
```

### apps/api/src/index.test.ts

Bytes: 24756
SHA-256: 222c61afc469393d1adff9b1217f2d96941c509c4e04aef717378feaacecdc02
Lines: 1-733 of 733

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { describe, expect, it } from 'vitest';
  3 | import { MemoryUsageLedger, UsageLimitError, type UsageLedger } from '@ozzyl/billing';
  4 | import {
  5 |   createMetricRecorder,
  6 |   createStructuredLogger,
  7 |   createTracer,
  8 |   type MetricRecorder,
  9 |   type PersistedTraceContext,
 10 |   type SpanPoint,
 11 |   type StructuredLogger,
 12 |   type Tracer,
 13 | } from '@ozzyl/observability';
 14 | import {
 15 |   createApiApp,
 16 |   MemoryAssessmentRepository,
 17 |   MemoryOperationIdempotencyStore,
 18 |   MemoryOutcomeRepository,
 19 |   MemoryRateLimiter,
 20 |   MemoryRefreshQueue,
 21 |   MissingFeatureProvider,
 22 |   type ApiKeyIdentity,
 23 |   type AssessmentRepository,
 24 | } from './index.js';
 25 | function parseMetricLine(line: string): unknown {
 26 |   return JSON.parse(line) as unknown;
 27 | }
 28 |
 29 | const apiKey = ['ozg', 'test', 'fixture-a'].join('_');
 30 |
 31 | function createTestApp(input?: {
 32 |   identity?: ApiKeyIdentity;
 33 |   assessments?: AssessmentRepository;
 34 |   usage?: UsageLedger;
 35 |   rawApiKey?: string;
 36 |   logger?: StructuredLogger;
 37 |   metrics?: MetricRecorder;
 38 |   tracer?: Tracer;
 39 |   monotonicNow?: () => number;
 40 |   refreshQueue?: {
 41 |     enqueue(input: {
 42 |       organizationId: string;
 43 |       storeId: string;
 44 |       phone: string;
 45 |       phoneHash: string;
 46 |       providers: string[];
 47 |       force: boolean;
 48 |       traceContext?: PersistedTraceContext;
 49 |     }): Promise<{ jobId: string }>;
 50 |   };
 51 |   verificationRequests?: {
 52 |     enqueueSend(input: {
 53 |       organizationId: string;
 54 |       storeId: string;
 55 |       assessmentId?: string;
 56 |       phone: string;
 57 |       phoneHash: string;
 58 |       purpose: string;
 59 |       idempotencyKey: string;
 60 |       traceContext?: PersistedTraceContext;
 61 |     }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
 62 |   };
 63 |   otpVerifier?: {
 64 |     verify(input: {
 65 |       organizationId: string;
 66 |       storeId: string;
 67 |       verificationId: string;
 68 |       otp: string;
 69 |     }): Promise<{ verified: true }>;
 70 |   };
 71 | }) {
 72 |   let counter = 0;
 73 |   const identity =
 74 |     input?.identity ??
 75 |     ({
 76 |       apiKeyId: 'key_1',
 77 |       organizationId: 'org_1',
 78 |       storeId: 'store_1',
 79 |       environment: 'test',
 80 |       plan: 'free',
 81 |       scopes: new Set(['*']),
 82 |     } satisfies ApiKeyIdentity);
 83 |   const acceptedKey = input?.rawApiKey ?? apiKey;
 84 |   return createApiApp({
 85 |     apiKeys: {
 86 |       async resolve(rawApiKey) {
 87 |         return rawApiKey === acceptedKey ? identity : null;
 88 |       },
 89 |     },
 90 |     usage: input?.usage ?? new MemoryUsageLedger(),
 91 |     features: new MissingFeatureProvider(),
 92 |     assessments: input?.assessments ?? new MemoryAssessmentRepository(),
 93 |     outcomes: new MemoryOutcomeRepository(),
 94 |     refreshQueue: input?.refreshQueue ?? new MemoryRefreshQueue(),
 95 |     idempotency: new MemoryOperationIdempotencyStore(),
 96 |     rateLimiter: new MemoryRateLimiter(),
 97 |     hashPhone: (phone) => createHmac('sha256', 'x'.repeat(32)).update(phone).digest('hex'),
 98 |     ...(input?.verificationRequests === undefined
 99 |       ? {}
100 |       : { verificationRequests: input.verificationRequests }),
101 |     ...(input?.otpVerifier === undefined ? {} : { otpVerifier: input.otpVerifier }),
102 |     ...(input?.logger === undefined ? {} : { logger: input.logger }),
103 |     ...(input?.metrics === undefined ? {} : { metrics: input.metrics }),
104 |     ...(input?.tracer === undefined ? {} : { tracer: input.tracer }),
105 |     ...(input?.monotonicNow === undefined ? {} : { monotonicNow: input.monotonicNow }),
106 |     idFactory: (prefix) => `${prefix}_${++counter}`,
107 |     now: () => new Date('2026-07-16T10:00:00.000Z'),
108 |   });
109 | }
110 |
111 | const assessmentRequest = {
112 |   phone: '01712345678',
113 |   order_total: 1500,
114 |   payment_method: 'cod',
115 | };
116 |
117 | const authorizedHeaders = {
118 |   Authorization: `Bearer ${apiKey}`,
119 |   'Content-Type': 'application/json',
120 |   'Idempotency-Key': 'order-1001',
121 | };
122 |
123 | describe('Ozzyl Guard API', () => {
124 |   it('records a bounded request lifecycle without logging dynamic path values', async () => {
125 |     const lines: string[] = [];
126 |     const metricLines: string[] = [];
127 |     const ticks = [100, 125];
128 |     const logger = createStructuredLogger({
129 |       service: 'api-test',
130 |       environment: 'test',
131 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
132 |       write: (line) => lines.push(line),
133 |     });
134 |     const metrics = createMetricRecorder({
135 |       service: 'api-test',
136 |       environment: 'test',
137 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
138 |       write: (line) => metricLines.push(line),
139 |     });
140 |     const response = await createTestApp({
141 |       logger,
142 |       metrics,
143 |       monotonicNow: () => ticks.shift() ?? 125,
144 |     }).request('/v1/risk-assessments/ras-sensitive-value?query=discard-me', {
145 |       headers: {
146 |         Authorization: `Bearer ${apiKey}`,
147 |         'X-Request-ID': 'req_client-123',
148 |       },
149 |     });
150 |
151 |     expect(response.status).toBe(404);
152 |     expect(response.headers.get('X-Request-ID')).toBe('req_client-123');
153 |     expect(lines).toHaveLength(1);
154 |     expect(JSON.parse(lines[0] ?? '{}')).toMatchObject({
155 |       level: 'warn',
156 |       event: 'api.request.completed',
157 |       request_id: 'req_client-123',
158 |       method: 'GET',
159 |       route: '/v1/risk-assessments/:assessment_id',
160 |       status_code: 404,
161 |       status_class: '4xx',
162 |       duration_ms: 25,
163 |     });
164 |     expect(lines.join('\n')).not.toContain('ras-sensitive-value');
165 |     expect(lines.join('\n')).not.toContain('discard-me');
166 |     expect(metricLines.map(parseMetricLine)).toEqual(
167 |       expect.arrayContaining([
168 |         expect.objectContaining({
169 |           name: 'ozzyl.api.requests',
170 |           kind: 'counter',
171 |           value: 1,
172 |           attributes: {
173 |             method: 'GET',
174 |             route: '/v1/risk-assessments/:assessment_id',
175 |             status_class: '4xx',
176 |           },
177 |         }),
178 |         expect.objectContaining({
179 |           name: 'ozzyl.api.request.duration',
180 |           kind: 'histogram',
181 |           unit: 'ms',
182 |           value: 25,
183 |           attributes: {
184 |             method: 'GET',
185 |             route: '/v1/risk-assessments/:assessment_id',
186 |             status_class: '4xx',
187 |           },
188 |         }),
189 |       ]),
190 |     );
191 |     expect(metricLines.join('\n')).not.toContain('ras-sensitive-value');
192 |     expect(metricLines.join('\n')).not.toContain('discard-me');
193 |   });
194 |
195 |   it('continues W3C trace context through an API producer into durable work', async () => {
196 |     const points: SpanPoint[] = [];
197 |     const spanIds = ['2222222222222222', '3333333333333333'];
198 |     let monotonic = 0;
199 |     const tracer = createTracer({
200 |       service: 'api-test',
201 |       environment: 'test',
202 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
203 |       monotonicNow: () => ++monotonic,
204 |       generateSpanId: () => spanIds.shift()!,
205 |       write: (_line, point) => points.push(point),
206 |     });
207 |     let queuedTrace: PersistedTraceContext | undefined;
208 |     const traceId = '11111111111111111111111111111111';
209 |     const parentSpanId = 'aaaaaaaaaaaaaaaa';
210 |     const response = await createTestApp({
211 |       tracer,
212 |       refreshQueue: {
213 |         async enqueue(input) {
214 |           queuedTrace = input.traceContext;
215 |           return { jobId: 'cjob_trace' };
216 |         },
217 |       },
218 |     }).request('/v1/courier-observations/refresh', {
219 |       method: 'POST',
220 |       headers: {
221 |         ...authorizedHeaders,
222 |         traceparent: `00-${traceId}-${parentSpanId}-01`,
223 |         tracestate: 'vendor=value',
224 |       },
225 |       body: JSON.stringify({ phone: '01712345678', providers: ['steadfast'], force: false }),
226 |     });
227 |
228 |     expect(response.status).toBe(202);
229 |     expect(response.headers.get('traceparent')).toBe(`00-${traceId}-2222222222222222-01`);
230 |     expect(response.headers.get('tracestate')).toBe('vendor=value');
231 |     expect(queuedTrace).toEqual({
232 |       traceParent: `00-${traceId}-3333333333333333-01`,
233 |       traceState: 'vendor=value',
234 |     });
235 |     expect(points).toHaveLength(2);
236 |     expect(points).toEqual(
237 |       expect.arrayContaining([
238 |         expect.objectContaining({
239 |           name: 'ozzyl.api.request',
240 |           trace_id: traceId,
241 |           span_id: '2222222222222222',
242 |           parent_span_id: parentSpanId,
243 |           attributes: {
244 |             method: 'POST',
245 |             route: '/v1/courier-observations/refresh',
246 |             status_class: '2xx',
247 |           },
248 |         }),
249 |         expect.objectContaining({
250 |           name: 'ozzyl.api.durable.produce',
251 |           trace_id: traceId,
252 |           span_id: '3333333333333333',
253 |           parent_span_id: '2222222222222222',
254 |           attributes: {
255 |             operation: 'courier_refresh',
256 |             queue_type: 'courier_refresh',
257 |             outcome: 'completed',
258 |           },
259 |         }),
260 |       ]),
261 |     );
262 |     const serialized = JSON.stringify(points);
263 |     expect(serialized).not.toContain('org_1');
264 |     expect(serialized).not.toContain('store_1');
265 |     expect(serialized).not.toContain('01712345678');
266 |     expect(serialized).not.toContain('cjob_trace');
267 |   });
268 |
269 |   it('rejects arbitrary caller request identifiers instead of reflecting them', async () => {
270 |     const lines: string[] = [];
271 |     const logger = createStructuredLogger({
272 |       service: 'api-test',
273 |       environment: 'test',
274 |       write: (line) => lines.push(line),
275 |     });
276 |     const unsafeRequestId = 'customer-reference-1001';
277 |     const response = await createTestApp({ logger }).request('/health', {
278 |       headers: { 'X-Request-ID': unsafeRequestId },
279 |     });
280 |
281 |     expect(response.status).toBe(200);
282 |     expect(response.headers.get('X-Request-ID')).toBe('req_1');
283 |     expect(lines.join('\n')).not.toContain(unsafeRequestId);
284 |   });
285 |
286 |   it('keeps authenticated domain handling available when telemetry sinks fail', async () => {
287 |     const logger = createStructuredLogger({
288 |       service: 'api-test',
289 |       environment: 'test',
290 |       write: () => {
291 |         throw new Error('sink unavailable');
292 |       },
293 |     });
294 |     const metrics = createMetricRecorder({
295 |       service: 'api-test',
296 |       environment: 'test',
297 |       write: () => {
298 |         throw new Error('metric sink unavailable');
299 |       },
300 |     });
301 |     const response = await createTestApp({ logger, metrics }).request('/v1/risk-assessments', {
302 |       method: 'POST',
303 |       headers: authorizedHeaders,
304 |       body: JSON.stringify(assessmentRequest),
305 |     });
306 |
307 |     expect(response.status).toBe(201);
308 |     await expect(response.json()).resolves.toMatchObject({ success: true, decision: 'verify' });
309 |   });
310 |
311 |   it('records unhandled errors without exporting their messages or stacks', async () => {
312 |     const lines: string[] = [];
313 |     const logger = createStructuredLogger({
314 |       service: 'api-test',
315 |       environment: 'test',
316 |       write: (line) => lines.push(line),
317 |     });
318 |     const failure = Object.assign(new Error('restricted database detail'), {
319 |       code: 'DATABASE_FAILURE',
320 |     });
321 |     const assessments: AssessmentRepository = {
322 |       async findByIdempotency() {
323 |         throw failure;
324 |       },
325 |       async findById() {
326 |         return null;
327 |       },
328 |       async save(record) {
329 |         return record;
330 |       },
331 |     };
332 |     const response = await createTestApp({ logger, assessments }).request('/v1/risk-assessments', {
333 |       method: 'POST',
334 |       headers: authorizedHeaders,
335 |       body: JSON.stringify(assessmentRequest),
336 |     });
337 |
338 |     expect(response.status).toBe(500);
339 |     await expect(response.json()).resolves.toMatchObject({
340 |       success: false,
341 |       error: { code: 'INTERNAL_ERROR' },
342 |     });
343 |     const records = lines.map((line) => JSON.parse(line) as Record<string, unknown>);
344 |     expect(records).toEqual(
345 |       expect.arrayContaining([
346 |         expect.objectContaining({
347 |           event: 'api.request.unhandled_error',
348 |           code: 'UNHANDLED_ERROR',
349 |           error: { name: 'Error', code: 'DATABASE_FAILURE' },
350 |         }),
351 |         expect.objectContaining({
352 |           event: 'api.request.completed',
353 |           status_code: 500,
354 |           status_class: '5xx',
355 |         }),
356 |       ]),
357 |     );
358 |     expect(lines.join('\n')).not.toContain('restricted database detail');
359 |     expect(lines.join('\n')).not.toContain('stack');
360 |   });
361 |
362 |   it('requires API authentication', async () => {
363 |     const response = await createTestApp().request('/v1/risk-assessments', {
364 |       method: 'POST',
365 |       headers: { 'Content-Type': 'application/json', 'Idempotency-Key': 'request-1' },
366 |       body: JSON.stringify(assessmentRequest),
367 |     });
368 |     expect(response.status).toBe(401);
369 |   });
370 |
371 |   it('returns the canonical unknown/verify assessment when history is unavailable', async () => {
372 |     const response = await createTestApp().request('/v1/risk-assessments', {
373 |       method: 'POST',
374 |       headers: authorizedHeaders,
375 |       body: JSON.stringify(assessmentRequest),
376 |     });
377 |     expect(response.status).toBe(201);
378 |     const body = (await response.json()) as Record<string, unknown>;
379 |     expect(body).toMatchObject({
380 |       success: true,
381 |       risk_level: 'unknown',
382 |       decision: 'verify',
383 |       confidence: 0,
384 |     });
385 |     expect((body.signals as Array<{ code: string }>)[0]?.code).toBe('insufficient_history');
386 |   });
387 |
388 |   it('returns the original result for an idempotent retry', async () => {
389 |     const app = createTestApp();
390 |     const first = await app.request('/v1/risk-assessments', {
391 |       method: 'POST',
392 |       headers: authorizedHeaders,
393 |       body: JSON.stringify(assessmentRequest),
394 |     });
395 |     const second = await app.request('/v1/risk-assessments', {
396 |       method: 'POST',
397 |       headers: authorizedHeaders,
398 |       body: JSON.stringify(assessmentRequest),
399 |     });
400 |     expect(first.status).toBe(201);
401 |     expect(second.status).toBe(200);
402 |     const firstBody = (await first.json()) as { assessment_id: string };
403 |     const secondBody = (await second.json()) as { assessment_id: string };
404 |     expect(secondBody.assessment_id).toBe(firstBody.assessment_id);
405 |   });
406 |
407 |   it('records bounded critical-path and risk-quality metrics without business identifiers', async () => {
408 |     const metricLines: string[] = [];
409 |     const metrics = createMetricRecorder({
410 |       service: 'api-test',
411 |       environment: 'test',
412 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
413 |       write: (line) => metricLines.push(line),
414 |     });
415 |     const app = createTestApp({ metrics });
416 |
417 |     const firstAssessment = await app.request('/v1/risk-assessments', {
418 |       method: 'POST',
419 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'sensitive-assessment-key' },
420 |       body: JSON.stringify(assessmentRequest),
421 |     });
422 |     const secondAssessment = await app.request('/v1/risk-assessments', {
423 |       method: 'POST',
424 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'sensitive-assessment-key' },
425 |       body: JSON.stringify(assessmentRequest),
426 |     });
427 |     const outcomeBody = {
428 |       external_order_id: 'WC-sensitive-order',
429 |       outcome: 'delivered',
430 |       occurred_at: '2026-07-16T10:30:00.000Z',
431 |     };
432 |     const firstOutcome = await app.request('/v1/order-outcomes', {
433 |       method: 'POST',
434 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'sensitive-outcome-key' },
435 |       body: JSON.stringify(outcomeBody),
436 |     });
437 |     const secondOutcome = await app.request('/v1/order-outcomes', {
438 |       method: 'POST',
439 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'sensitive-outcome-key' },
440 |       body: JSON.stringify(outcomeBody),
441 |     });
442 |     const unauthenticated = await app.request('/v1/risk-assessments', { method: 'POST' });
443 |
444 |     expect(firstAssessment.status).toBe(201);
445 |     expect(secondAssessment.status).toBe(200);
446 |     expect(firstOutcome.status).toBe(201);
447 |     expect(secondOutcome.status).toBe(200);
448 |     expect(unauthenticated.status).toBe(401);
449 |
450 |     const points = metricLines.map(
451 |       (line) => JSON.parse(line) as { name: string; attributes: Record<string, unknown> },
452 |     );
453 |     const assessmentPoints = points.filter((point) => point.name === 'ozzyl.risk.assessments');
454 |     const outcomePoints = points.filter((point) => point.name === 'ozzyl.risk.outcomes');
455 |     const dependencyCountPoints = points.filter(
456 |       (point) => point.name === 'ozzyl.api.dependency.operations',
457 |     );
458 |     const controlPoints = points.filter((point) => point.name === 'ozzyl.api.control.events');
459 |
460 |     expect(assessmentPoints).toEqual([
461 |       expect.objectContaining({
462 |         attributes: {
463 |           decision: 'verify',
464 |           risk_level: 'unknown',
465 |           score_band: '0_19',
466 |           confidence_band: '0_24',
467 |           degraded: true,
468 |           freshness: 'missing',
469 |         },
470 |       }),
471 |     ]);
472 |     expect(outcomePoints).toEqual([
473 |       expect.objectContaining({
474 |         attributes: { outcome: 'delivered', linked_assessment: false },
475 |       }),
476 |     ]);
477 |     expect(dependencyCountPoints).toEqual(
478 |       expect.arrayContaining([
479 |         expect.objectContaining({
480 |           attributes: {
481 |             dependency_type: 'usage_ledger',
482 |             operation: 'reserve',
483 |             outcome: 'success',
484 |           },
485 |         }),
486 |         expect.objectContaining({
487 |           attributes: {
488 |             dependency_type: 'feature_provider',
489 |             operation: 'load',
490 |             outcome: 'success',
491 |           },
492 |         }),
493 |         expect.objectContaining({
494 |           attributes: {
495 |             dependency_type: 'assessment_repository',
496 |             operation: 'find_by_idempotency',
497 |             outcome: 'replay',
498 |           },
499 |         }),
500 |         expect.objectContaining({
501 |           attributes: {
502 |             dependency_type: 'outcome_repository',
503 |             operation: 'save',
504 |             outcome: 'replay',
505 |           },
506 |         }),
507 |       ]),
508 |     );
509 |     expect(controlPoints).toEqual(
510 |       expect.arrayContaining([
511 |         expect.objectContaining({
512 |           attributes: { control: 'idempotency', outcome: 'replay' },
513 |         }),
514 |         expect.objectContaining({
515 |           attributes: { control: 'authentication', outcome: 'rejected' },
516 |         }),
517 |       ]),
518 |     );
519 |
520 |     const serialized = metricLines.join('\n');
521 |     for (const sensitive of [
522 |       'org_1',
523 |       'store_1',
524 |       'key_1',
525 |       '01712345678',
526 |       'sensitive-assessment-key',
527 |       'sensitive-outcome-key',
528 |       'WC-sensitive-order',
529 |     ]) {
530 |       expect(serialized).not.toContain(sensitive);
531 |     }
532 |   });
533 |
534 |   it('records quota rejection without exporting the tenant or failure detail', async () => {
535 |     const metricLines: string[] = [];
536 |     const metrics = createMetricRecorder({
537 |       service: 'api-test',
538 |       environment: 'test',
539 |       write: (line) => metricLines.push(line),
540 |     });
541 |     const usage: UsageLedger = {
542 |       async reserve() {
543 |         throw new UsageLimitError('private quota detail for org_1');
544 |       },
545 |     };
546 |     const response = await createTestApp({ metrics, usage }).request('/v1/risk-assessments', {
547 |       method: 'POST',
548 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'quota-sensitive-key' },
549 |       body: JSON.stringify(assessmentRequest),
550 |     });
551 |
552 |     expect(response.status).toBe(429);
553 |     const points = metricLines.map(
554 |       (line) => JSON.parse(line) as { name: string; attributes: Record<string, unknown> },
555 |     );
556 |     expect(points).toEqual(
557 |       expect.arrayContaining([
558 |         expect.objectContaining({
559 |           name: 'ozzyl.api.dependency.operations',
560 |           attributes: {
561 |             dependency_type: 'usage_ledger',
562 |             operation: 'reserve',
563 |             outcome: 'rejected',
564 |           },
565 |         }),
566 |         expect.objectContaining({
567 |           name: 'ozzyl.api.control.events',
568 |           attributes: { control: 'quota', outcome: 'rejected' },
569 |         }),
570 |       ]),
571 |     );
572 |     expect(metricLines.join('\n')).not.toContain('private quota detail');
573 |     expect(metricLines.join('\n')).not.toContain('org_1');
574 |     expect(metricLines.join('\n')).not.toContain('quota-sensitive-key');
575 |   });
576 |
577 |   it('does not hide an unexpected usage dependency failure as a quota rejection', async () => {
578 |     const metricLines: string[] = [];
579 |     const metrics = createMetricRecorder({
580 |       service: 'api-test',
581 |       environment: 'test',
582 |       write: (line) => metricLines.push(line),
583 |     });
584 |     const usage: UsageLedger = {
585 |       async reserve() {
586 |         throw new Error('private database failure for org_1');
587 |       },
588 |     };
589 |     const response = await createTestApp({ metrics, usage }).request('/v1/risk-assessments', {
590 |       method: 'POST',
591 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'database-sensitive-key' },
592 |       body: JSON.stringify(assessmentRequest),
593 |     });
594 |
595 |     expect(response.status).toBe(500);
596 |     const points = metricLines.map(
597 |       (line) => JSON.parse(line) as { name: string; attributes: Record<string, unknown> },
598 |     );
599 |     expect(points).toEqual(
600 |       expect.arrayContaining([
601 |         expect.objectContaining({
602 |           name: 'ozzyl.api.dependency.operations',
603 |           attributes: {
604 |             dependency_type: 'usage_ledger',
605 |             operation: 'reserve',
606 |             outcome: 'error',
607 |           },
608 |         }),
609 |         expect.objectContaining({
610 |           name: 'ozzyl.api.control.events',
611 |           attributes: { control: 'quota', outcome: 'error' },
612 |         }),
613 |       ]),
614 |     );
615 |     expect(metricLines.join('\n')).not.toContain('private database failure');
616 |     expect(metricLines.join('\n')).not.toContain('org_1');
617 |     expect(metricLines.join('\n')).not.toContain('database-sensitive-key');
618 |   });
619 |
620 |   it('enforces store isolation when reading an assessment', async () => {
621 |     const assessments = new MemoryAssessmentRepository();
622 |     const storeOneApp = createTestApp({ assessments });
623 |     const created = await storeOneApp.request('/v1/risk-assessments', {
624 |       method: 'POST',
625 |       headers: authorizedHeaders,
626 |       body: JSON.stringify(assessmentRequest),
627 |     });
628 |     const createdBody = (await created.json()) as { assessment_id: string };
629 |
630 |     const otherKey = ['ozg', 'test', 'fixture-b'].join('_');
631 |     const storeTwoApp = createTestApp({
632 |       assessments,
633 |       rawApiKey: otherKey,
634 |       identity: {
635 |         apiKeyId: 'key_2',
636 |         organizationId: 'org_1',
637 |         storeId: 'store_2',
638 |         environment: 'test',
639 |         plan: 'free',
640 |         scopes: new Set(['*']),
641 |       },
642 |     });
643 |     const response = await storeTwoApp.request(
644 |       `/v1/risk-assessments/${createdBody.assessment_id}`,
645 |       { headers: { Authorization: `Bearer ${otherKey}` } },
646 |     );
647 |     expect(response.status).toBe(404);
648 |   });
649 |
650 |   it('queues OTP delivery without performing provider I/O in the request', async () => {
651 |     let enqueueCalls = 0;
652 |     const app = createTestApp({
653 |       verificationRequests: {
654 |         async enqueueSend(input) {
655 |           enqueueCalls += 1;
656 |           expect(input).toMatchObject({
657 |             organizationId: 'org_1',
658 |             storeId: 'store_1',
659 |             purpose: 'cod_order_confirmation',
660 |             idempotencyKey: 'otp-1001',
661 |           });
662 |           return {
663 |             verificationId: 'ver_queued',
664 |             expiresAt: '2026-07-16T10:05:00.000Z',
665 |             replay: false,
666 |           };
667 |         },
668 |       },
669 |     });
670 |     const response = await app.request('/v1/verifications/otp/send', {
671 |       method: 'POST',
672 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'otp-1001' },
673 |       body: JSON.stringify({ phone: '01712345678' }),
674 |     });
675 |     expect(response.status).toBe(202);
676 |     await expect(response.json()).resolves.toMatchObject({
677 |       success: true,
678 |       verification_id: 'ver_queued',
679 |       status: 'queued',
680 |     });
681 |     expect(enqueueCalls).toBe(1);
682 |   });
683 |
684 |   it('verifies OTP through the database verifier dependency', async () => {
685 |     let verifyCalls = 0;
686 |     const app = createTestApp({
687 |       otpVerifier: {
688 |         async verify(input) {
689 |           verifyCalls += 1;
690 |           expect(input).toEqual({
691 |             organizationId: 'org_1',
692 |             storeId: 'store_1',
693 |             verificationId: 'ver_queued',
694 |             otp: '123456',
695 |           });
696 |           return { verified: true };
697 |         },
698 |       },
699 |     });
700 |     const response = await app.request('/v1/verifications/otp/verify', {
701 |       method: 'POST',
702 |       headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
703 |       body: JSON.stringify({ verification_id: 'ver_queued', otp: '123456' }),
704 |     });
705 |     expect(response.status).toBe(200);
706 |     expect(verifyCalls).toBe(1);
707 |   });
708 |
709 |   it('records outcomes idempotently', async () => {
710 |     const app = createTestApp();
711 |     const body = {
712 |       external_order_id: 'WC-1001',
713 |       outcome: 'delivered',
714 |       occurred_at: '2026-07-16T10:30:00.000Z',
715 |     };
716 |     const first = await app.request('/v1/order-outcomes', {
717 |       method: 'POST',
718 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
719 |       body: JSON.stringify(body),
720 |     });
721 |     const second = await app.request('/v1/order-outcomes', {
722 |       method: 'POST',
723 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
724 |       body: JSON.stringify(body),
725 |     });
726 |     expect(first.status).toBe(201);
727 |     expect(second.status).toBe(200);
728 |     const firstBody = (await first.json()) as { outcome_id: string };
729 |     const secondBody = (await second.json()) as { outcome_id: string; replay: boolean };
730 |     expect(secondBody).toMatchObject({ outcome_id: firstBody.outcome_id, replay: true });
731 |   });
732 | });
733 |
```

### apps/api/src/index.ts

Bytes: 49607
SHA-256: 7c2586c3283c6396f203faa8b1402243ac68cb4e256d24ad7999c38071fa341f
Lines: 1-1509 of 1509

```typescript
   1 | import { randomUUID } from 'node:crypto';
   2 | import { Hono } from 'hono';
   3 | import { z } from 'zod';
   4 | import { UsageLimitError, type PlanCode, type UsageLedger } from '@ozzyl/billing';
   5 | import {
   6 |   createMetricRecorder,
   7 |   createStructuredLogger,
   8 |   createTracer,
   9 |   defineMetric,
  10 |   defineSpan,
  11 |   formatTraceParent,
  12 |   observeApiDependency,
  13 |   parseTraceContext,
  14 |   recordApiControlEvent,
  15 |   recordRiskAssessmentDistribution,
  16 |   recordRiskOutcomeDistribution,
  17 |   toPersistedTraceContext,
  18 |   type MetricRecorder,
  19 |   type PersistedTraceContext,
  20 |   type StructuredLogger,
  21 |   type TraceContext,
  22 |   type Tracer,
  23 | } from '@ozzyl/observability';
  24 | import {
  25 |   assessRisk,
  26 |   isValidBangladeshPhone,
  27 |   normalizeBangladeshPhone,
  28 |   type CourierFeatures,
  29 |   type MerchantFeatures,
  30 |   type NetworkFeatures,
  31 |   type RiskPolicy,
  32 |   type VelocityFeatures,
  33 |   type VerificationFeatures,
  34 | } from '@ozzyl/risk-engine';
  35 | import {
  36 |   nativeShadowAttemptInputSchema,
  37 |   nativeShadowAttemptResponseSchema,
  38 |   nativeShadowComparisonInputSchema,
  39 |   nativeShadowComparisonResponseSchema,
  40 |   nativeShadowRolloutResponseSchema,
  41 |   orderOutcomeSchema,
  42 |   riskAssessmentRequestSchema,
  43 |   riskAssessmentResponseSchema,
  44 |   type NativeShadowAttemptInput,
  45 |   type NativeShadowComparisonInput,
  46 |   type NativeShadowRolloutMode,
  47 |   type OrderOutcomeInput,
  48 |   type RiskAssessmentRequest,
  49 |   type RiskAssessmentResponse,
  50 | } from '@ozzyl/shared-types';
  51 | import { VerificationError } from '@ozzyl/verification';
  52 | import { createBrowserApi, type BrowserApiDependencies } from './browser.js';
  53 |
  54 | export * from './postgres-administration.js';
  55 | export * from './postgres-native-shadow-pilot.js';
  56 | export * from './postgres-shadow-comparisons.js';
  57 |
  58 | export interface ApiKeyIdentity {
  59 |   apiKeyId: string;
  60 |   organizationId: string;
  61 |   storeId: string;
  62 |   environment: 'test' | 'live';
  63 |   plan: PlanCode;
  64 |   scopes: ReadonlySet<string>;
  65 | }
  66 |
  67 | export interface ApiKeyResolver {
  68 |   resolve(rawApiKey: string): Promise<ApiKeyIdentity | null>;
  69 | }
  70 |
  71 | export interface AssessmentFeatureSet {
  72 |   courier: CourierFeatures;
  73 |   merchant: MerchantFeatures;
  74 |   velocity: VelocityFeatures;
  75 |   verification: VerificationFeatures;
  76 |   network: NetworkFeatures;
  77 |   policy?: RiskPolicy;
  78 | }
  79 |
  80 | export interface AssessmentFeatureProvider {
  81 |   load(input: {
  82 |     identity: ApiKeyIdentity;
  83 |     phone: string;
  84 |     phoneHash: string;
  85 |     request: RiskAssessmentRequest;
  86 |   }): Promise<AssessmentFeatureSet>;
  87 | }
  88 |
  89 | export interface StoredAssessment {
  90 |   identity: Pick<ApiKeyIdentity, 'apiKeyId' | 'organizationId' | 'storeId'>;
  91 |   traceContext?: PersistedTraceContext;
  92 |   idempotencyKey: string;
  93 |   phoneHash: string;
  94 |   request: RiskAssessmentRequest;
  95 |   response: RiskAssessmentResponse;
  96 | }
  97 |
  98 | export interface AssessmentRepository {
  99 |   findByIdempotency(input: {
 100 |     organizationId: string;
 101 |     storeId: string;
 102 |     idempotencyKey: string;
 103 |   }): Promise<StoredAssessment | null>;
 104 |   findById(input: {
 105 |     organizationId: string;
 106 |     storeId: string;
 107 |     assessmentId: string;
 108 |   }): Promise<StoredAssessment | null>;
 109 |   save(record: StoredAssessment): Promise<StoredAssessment>;
 110 | }
 111 |
 112 | export interface OutcomeRepository {
 113 |   save(input: {
 114 |     organizationId: string;
 115 |     storeId: string;
 116 |     idempotencyKey: string;
 117 |     outcome: OrderOutcomeInput;
 118 |     traceContext?: PersistedTraceContext;
 119 |   }): Promise<{ outcomeId: string; replay: boolean }>;
 120 | }
 121 |
 122 | export interface ShadowComparisonRepository {
 123 |   save(input: {
 124 |     organizationId: string;
 125 |     storeId: string;
 126 |     apiKeyId: string;
 127 |     idempotencyKey: string;
 128 |     comparison: NativeShadowComparisonInput;
 129 |     guardAssessment: RiskAssessmentResponse;
 130 |   }): Promise<{ comparisonId: string; replay: boolean }>;
 131 | }
 132 |
 133 | export interface NativeShadowRolloutRepository {
 134 |   load(input: { organizationId: string; storeId: string }): Promise<{
 135 |     organizationId: string;
 136 |     storeId: string;
 137 |     integration: 'multi-store-saas';
 138 |     mode: NativeShadowRolloutMode;
 139 |     rolloutVersion: string;
 140 |     sampleRateBps: number;
 141 |     samplingKey: string;
 142 |   } | null>;
 143 | }
 144 |
 145 | export interface NativeShadowRolloutAdministrationRepository {
 146 |   setForStore(input: {
 147 |     userId: string;
 148 |     organizationId: string;
 149 |     storeId: string;
 150 |     mode: NativeShadowRolloutMode;
 151 |     rolloutVersion: string;
 152 |     sampleRateBps: number;
 153 |   }): Promise<{
 154 |     organizationId: string;
 155 |     storeId: string;
 156 |     integration: 'multi-store-saas';
 157 |     mode: NativeShadowRolloutMode;
 158 |     rolloutVersion: string;
 159 |     sampleRateBps: number;
 160 |     samplingKey: string;
 161 |   } | null>;
 162 | }
 163 |
 164 | export interface NativeShadowAttemptRepository {
 165 |   save(input: {
 166 |     organizationId: string;
 167 |     storeId: string;
 168 |     apiKeyId: string;
 169 |     idempotencyKey: string;
 170 |     attempt: NativeShadowAttemptInput;
 171 |   }): Promise<{ attemptId: string; replay: boolean }>;
 172 | }
 173 |
 174 | export interface CourierRefreshQueue {
 175 |   enqueue(input: {
 176 |     organizationId: string;
 177 |     storeId: string;
 178 |     phone: string;
 179 |     phoneHash: string;
 180 |     providers: string[];
 181 |     force: boolean;
 182 |     traceContext?: PersistedTraceContext;
 183 |   }): Promise<{ jobId: string }>;
 184 | }
 185 |
 186 | export interface VerificationRequestQueue {
 187 |   enqueueSend(input: {
 188 |     organizationId: string;
 189 |     storeId: string;
 190 |     assessmentId?: string;
 191 |     phone: string;
 192 |     phoneHash: string;
 193 |     purpose: string;
 194 |     idempotencyKey: string;
 195 |     traceContext?: PersistedTraceContext;
 196 |   }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
 197 | }
 198 |
 199 | export interface OtpVerifier {
 200 |   verify(input: {
 201 |     organizationId: string;
 202 |     storeId: string;
 203 |     verificationId: string;
 204 |     otp: string;
 205 |   }): Promise<{ verified: true }>;
 206 | }
 207 |
 208 | export interface OperationIdempotencyStore {
 209 |   get(key: string): Promise<unknown>;
 210 |   set(key: string, value: unknown): Promise<void>;
 211 | }
 212 |
 213 | export interface RateLimiter {
 214 |   consume(key: string, limit: number, windowMs: number): Promise<boolean>;
 215 | }
 216 |
 217 | export interface ApiDependencies {
 218 |   apiKeys: ApiKeyResolver;
 219 |   usage: UsageLedger;
 220 |   features: AssessmentFeatureProvider;
 221 |   assessments: AssessmentRepository;
 222 |   outcomes: OutcomeRepository;
 223 |   shadowComparisons?: ShadowComparisonRepository;
 224 |   nativeShadowRollouts?: NativeShadowRolloutRepository;
 225 |   nativeShadowAttempts?: NativeShadowAttemptRepository;
 226 |   refreshQueue: CourierRefreshQueue;
 227 |   idempotency: OperationIdempotencyStore;
 228 |   rateLimiter: RateLimiter;
 229 |   hashPhone(phone: string): string;
 230 |   verificationRequests?: VerificationRequestQueue;
 231 |   otpVerifier?: OtpVerifier;
 232 |   browser?: BrowserApiDependencies;
 233 |   now?: () => Date;
 234 |   monotonicNow?: () => number;
 235 |   idFactory?: (prefix: string) => string;
 236 |   logger?: StructuredLogger;
 237 |   metrics?: MetricRecorder;
 238 |   tracer?: Tracer;
 239 | }
 240 |
 241 | type AppEnvironment = {
 242 |   Variables: {
 243 |     identity: ApiKeyIdentity;
 244 |     requestId: string;
 245 |     traceContext: TraceContext;
 246 |   };
 247 | };
 248 |
 249 | const refreshSchema = z.object({
 250 |   phone: z.string().min(8).max(30),
 251 |   providers: z.array(z.string().min(1).max(50)).min(1).max(10).default(['steadfast']),
 252 |   force: z.boolean().default(false),
 253 | });
 254 |
 255 | const otpSendSchema = z.object({
 256 |   phone: z.string().min(8).max(30),
 257 |   assessment_id: z.string().max(200).optional(),
 258 |   purpose: z.string().min(1).max(100).default('cod_order_confirmation'),
 259 | });
 260 |
 261 | const otpVerifySchema = z.object({
 262 |   verification_id: z.string().min(1).max(200),
 263 |   otp: z.string().regex(/^\d{6}$/),
 264 | });
 265 |
 266 | export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment> {
 267 |   const app = new Hono<AppEnvironment>();
 268 |   const now = dependencies.now ?? (() => new Date());
 269 |   const monotonicNow = dependencies.monotonicNow ?? (() => Date.now());
 270 |   const idFactory = dependencies.idFactory ?? ((prefix: string) => `${prefix}_${randomUUID()}`);
 271 |   const logger =
 272 |     dependencies.logger ??
 273 |     createStructuredLogger({
 274 |       service: 'ozzyl-guard-api',
 275 |       environment: 'test',
 276 |       write: () => undefined,
 277 |     });
 278 |   const metrics =
 279 |     dependencies.metrics ??
 280 |     createMetricRecorder({
 281 |       service: 'ozzyl-guard-api',
 282 |       environment: 'test',
 283 |       write: () => undefined,
 284 |     });
 285 |   const tracer =
 286 |     dependencies.tracer ??
 287 |     createTracer({
 288 |       service: 'ozzyl-guard-api',
 289 |       environment: 'test',
 290 |       write: () => undefined,
 291 |     });
 292 |
 293 |   app.use('*', async (context, next) => {
 294 |     const requestId = readRequestId(context.req.header('X-Request-ID')) ?? idFactory('req');
 295 |     const startedAt = monotonicNow();
 296 |     let failed = false;
 297 |     const parentTrace = parseTraceContext(
 298 |       context.req.header('traceparent'),
 299 |       context.req.header('tracestate'),
 300 |     );
 301 |     const requestSpan = tracer.startSpan(API_REQUEST_SPAN, {
 302 |       ...(parentTrace === null ? {} : { parent: parentTrace }),
 303 |       attributes: {
 304 |         method: telemetryMethod(context.req.method),
 305 |         route: telemetryRoute(context.req.path),
 306 |       },
 307 |     });
 308 |     context.set('requestId', requestId);
 309 |     context.set('traceContext', requestSpan.context);
 310 |
 311 |     try {
 312 |       await next();
 313 |     } catch (error) {
 314 |       failed = true;
 315 |       throw error;
 316 |     } finally {
 317 |       const status = failed ? 500 : context.res.status;
 318 |       const durationMs = Math.max(0, monotonicNow() - startedAt);
 319 |       const attributes = {
 320 |         request_id: requestId,
 321 |         method: context.req.method,
 322 |         route: telemetryRoute(context.req.path),
 323 |         status_code: status,
 324 |         status_class: `${Math.floor(status / 100)}xx`,
 325 |         duration_ms: Math.round(durationMs * 1_000) / 1_000,
 326 |       };
 327 |       const metricAttributes = {
 328 |         method: telemetryMethod(context.req.method),
 329 |         route: telemetryRoute(context.req.path),
 330 |         status_class: telemetryStatusClass(status),
 331 |       };
 332 |
 333 |       context.header('X-Request-ID', requestId);
 334 |       context.header('traceparent', formatTraceParent(requestSpan.context));
 335 |       if (requestSpan.context.traceState !== undefined) {
 336 |         context.header('tracestate', requestSpan.context.traceState);
 337 |       }
 338 |       requestSpan.end({
 339 |         status: status >= 500 ? 'error' : 'ok',
 340 |         attributes: { status_class: telemetryStatusClass(status) },
 341 |       });
 342 |       metrics.record(API_REQUEST_COUNT, 1, metricAttributes);
 343 |       metrics.record(API_REQUEST_DURATION, durationMs, metricAttributes);
 344 |       if (status >= 500) logger.error('api.request.completed', attributes);
 345 |       else if (status >= 400) logger.warn('api.request.completed', attributes);
 346 |       else logger.info('api.request.completed', attributes);
 347 |     }
 348 |   });
 349 |
 350 |   app.get('/', (context) =>
 351 |     context.json({
 352 |       service: 'Ozzyl Guard',
 353 |       version: 'v1',
 354 |       endpoints: {
 355 |         assessments: 'POST /v1/risk-assessments',
 356 |         outcomes: 'POST /v1/order-outcomes',
 357 |         nativeShadowRollout: 'GET /v1/integration-rollouts/native-shadow',
 358 |         nativeShadowComparisons: 'POST /v1/integration-comparisons/native-shadow',
 359 |         nativeShadowAttempts: 'POST /v1/integration-attempts/native-shadow',
 360 |         refresh: 'POST /v1/courier-observations/refresh',
 361 |         otpSend: 'POST /v1/verifications/otp/send',
 362 |         otpVerify: 'POST /v1/verifications/otp/verify',
 363 |       },
 364 |     }),
 365 |   );
 366 |
 367 |   app.get('/health', (context) =>
 368 |     context.json({ status: 'ok', service: 'ozzyl-guard-api', timestamp: now().toISOString() }),
 369 |   );
 370 |
 371 |   if (dependencies.browser) app.route('/', createBrowserApi(dependencies.browser));
 372 |
 373 |   app.use('/v1/*', async (context, next) => {
 374 |     const requestId = context.get('requestId');
 375 |     const authorization = context.req.header('Authorization');
 376 |     if (!authorization?.startsWith('Bearer ')) {
 377 |       recordApiControlEvent(metrics, 'authentication', 'rejected');
 378 |       return apiError(requestId, 401, 'UNAUTHORIZED', 'A Bearer API key is required');
 379 |     }
 380 |     const rawApiKey = authorization.slice('Bearer '.length).trim();
 381 |     if (!/^ozg_(test|live)_/.test(rawApiKey)) {
 382 |       recordApiControlEvent(metrics, 'authentication', 'rejected');
 383 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key format is invalid');
 384 |     }
 385 |     let identity: ApiKeyIdentity | null;
 386 |     try {
 387 |       identity = await observeApiDependency(
 388 |         metrics,
 389 |         {
 390 |           dependencyType: 'api_key',
 391 |           operation: 'resolve',
 392 |           classify: (value) => (value === null ? 'empty' : 'success'),
 393 |           monotonicNow,
 394 |         },
 395 |         () => dependencies.apiKeys.resolve(rawApiKey),
 396 |       );
 397 |     } catch (error) {
 398 |       recordApiControlEvent(metrics, 'authentication', 'error');
 399 |       throw error;
 400 |     }
 401 |     if (!identity) {
 402 |       recordApiControlEvent(metrics, 'authentication', 'rejected');
 403 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key is invalid or revoked');
 404 |     }
 405 |     recordApiControlEvent(metrics, 'authentication', 'allowed');
 406 |     let allowed: boolean;
 407 |     try {
 408 |       allowed = await observeApiDependency(
 409 |         metrics,
 410 |         {
 411 |           dependencyType: 'rate_limiter',
 412 |           operation: 'consume',
 413 |           classify: (value) => (value ? 'success' : 'rejected'),
 414 |           monotonicNow,
 415 |         },
 416 |         () => dependencies.rateLimiter.consume(`api:${identity.apiKeyId}`, 120, 60_000),
 417 |       );
 418 |     } catch (error) {
 419 |       recordApiControlEvent(metrics, 'rate_limit', 'error');
 420 |       throw error;
 421 |     }
 422 |     if (!allowed) {
 423 |       recordApiControlEvent(metrics, 'rate_limit', 'rejected');
 424 |       return apiError(requestId, 429, 'RATE_LIMITED', 'Too many requests');
 425 |     }
 426 |     recordApiControlEvent(metrics, 'rate_limit', 'allowed');
 427 |     context.set('identity', identity);
 428 |     await next();
 429 |     context.header('X-Request-ID', requestId);
 430 |   });
 431 |
 432 |   app.post('/v1/risk-assessments', async (context) => {
 433 |     const requestId = context.get('requestId');
 434 |     const identity = context.get('identity');
 435 |     const scopeError = requireScope(identity, 'risk:write', requestId, metrics);
 436 |     if (scopeError) return scopeError;
 437 |
 438 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 439 |     if (!idempotencyKey) {
 440 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 441 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 442 |     }
 443 |
 444 |     const existing = await observeApiDependency(
 445 |       metrics,
 446 |       {
 447 |         dependencyType: 'assessment_repository',
 448 |         operation: 'find_by_idempotency',
 449 |         classify: (value) => (value === null ? 'empty' : 'replay'),
 450 |         monotonicNow,
 451 |       },
 452 |       () =>
 453 |         dependencies.assessments.findByIdempotency({
 454 |           organizationId: identity.organizationId,
 455 |           storeId: identity.storeId,
 456 |           idempotencyKey,
 457 |         }),
 458 |     );
 459 |     if (existing) {
 460 |       recordApiControlEvent(metrics, 'idempotency', 'replay');
 461 |       return context.json(existing.response, 200);
 462 |     }
 463 |     recordApiControlEvent(metrics, 'idempotency', 'allowed');
 464 |
 465 |     const parsedBody = await parseJson(context.req.raw, riskAssessmentRequestSchema);
 466 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 467 |     const request = parsedBody.value;
 468 |     const phone = normalizeBangladeshPhone(request.phone);
 469 |     if (!isValidBangladeshPhone(phone)) {
 470 |       return apiError(
 471 |         requestId,
 472 |         400,
 473 |         'INVALID_PHONE',
 474 |         'A valid Bangladesh mobile number is required',
 475 |       );
 476 |     }
 477 |
 478 |     try {
 479 |       await observeApiDependency(
 480 |         metrics,
 481 |         {
 482 |           dependencyType: 'usage_ledger',
 483 |           operation: 'reserve',
 484 |           classifyError: (error) => (error instanceof UsageLimitError ? 'rejected' : 'error'),
 485 |           monotonicNow,
 486 |         },
 487 |         () =>
 488 |           dependencies.usage.reserve({
 489 |             organizationId: identity.organizationId,
 490 |             period: billingPeriod(now()),
 491 |             requestId: idempotencyKey,
 492 |             units: 1,
 493 |             plan: identity.plan,
 494 |           }),
 495 |       );
 496 |       recordApiControlEvent(metrics, 'quota', 'allowed');
 497 |     } catch (error) {
 498 |       if (!(error instanceof UsageLimitError)) {
 499 |         recordApiControlEvent(metrics, 'quota', 'error');
 500 |         throw error;
 501 |       }
 502 |       recordApiControlEvent(metrics, 'quota', 'rejected');
 503 |       return apiError(requestId, 429, 'USAGE_LIMIT_EXCEEDED', error.message);
 504 |     }
 505 |
 506 |     const startedAt = Date.now();
 507 |     const phoneHash = dependencies.hashPhone(phone);
 508 |     const features = await observeApiDependency(
 509 |       metrics,
 510 |       {
 511 |         dependencyType: 'feature_provider',
 512 |         operation: 'load',
 513 |         monotonicNow,
 514 |       },
 515 |       () => dependencies.features.load({ identity, phone, phoneHash, request }),
 516 |     );
 517 |     const order = {
 518 |       total: request.order_total,
 519 |       paymentMethod: request.payment_method,
 520 |       ...(request.items_count === undefined ? {} : { itemsCount: request.items_count }),
 521 |     };
 522 |     const engineInput = {
 523 |       order,
 524 |       courier: features.courier,
 525 |       merchant: features.merchant,
 526 |       velocity: features.velocity,
 527 |       verification: features.verification,
 528 |       network: features.network,
 529 |       ...(features.policy === undefined ? {} : { policy: features.policy }),
 530 |     };
 531 |     const result = assessRisk(engineInput);
 532 |     const response = riskAssessmentResponseSchema.parse({
 533 |       success: true,
 534 |       assessment_id: idFactory('ras'),
 535 |       risk_score: result.score,
 536 |       risk_level: result.riskLevel,
 537 |       decision: result.decision,
 538 |       confidence: result.confidence,
 539 |       signals: result.signals,
 540 |       courier_summary: {
 541 |         freshness: features.courier.freshness,
 542 |         providers: features.courier.providerCount,
 543 |         total: features.courier.totalOrders,
 544 |         delivered: features.courier.deliveredOrders,
 545 |         returned: features.courier.returnedOrders,
 546 |         cancelled_before_shipping: features.courier.cancelledBeforeShipping,
 547 |       },
 548 |       recommended_actions: result.recommendedActions,
 549 |       meta: {
 550 |         engine_version: result.engineVersion,
 551 |         policy_version: result.policyVersion,
 552 |         degraded: result.degraded,
 553 |         response_ms: Date.now() - startedAt,
 554 |       },
 555 |     });
 556 |
 557 |     const stored = await observeDurableProducer(
 558 |       tracer,
 559 |       context.get('traceContext'),
 560 |       'assessment_event',
 561 |       'webhook_delivery',
 562 |       (traceContext) =>
 563 |         observeApiDependency(
 564 |           metrics,
 565 |           {
 566 |             dependencyType: 'assessment_repository',
 567 |             operation: 'save',
 568 |             classify: (value) =>
 569 |               value.response.assessment_id === response.assessment_id ? 'success' : 'replay',
 570 |             monotonicNow,
 571 |           },
 572 |           () =>
 573 |             dependencies.assessments.save({
 574 |               traceContext,
 575 |               identity: {
 576 |                 apiKeyId: identity.apiKeyId,
 577 |                 organizationId: identity.organizationId,
 578 |                 storeId: identity.storeId,
 579 |               },
 580 |               idempotencyKey,
 581 |               phoneHash,
 582 |               request,
 583 |               response,
 584 |             }),
 585 |         ),
 586 |     );
 587 |     const created = stored.response.assessment_id === response.assessment_id;
 588 |     if (created) {
 589 |       recordRiskAssessmentDistribution(metrics, {
 590 |         decision: stored.response.decision,
 591 |         riskLevel: stored.response.risk_level,
 592 |         score: stored.response.risk_score,
 593 |         confidence: stored.response.confidence,
 594 |         degraded: stored.response.meta?.degraded ?? true,
 595 |         freshness: features.courier.freshness,
 596 |       });
 597 |     } else {
 598 |       recordApiControlEvent(metrics, 'idempotency', 'replay');
 599 |     }
 600 |     return context.json(stored.response, created ? 201 : 200);
 601 |   });
 602 |
 603 |   app.get('/v1/risk-assessments/:assessmentId', async (context) => {
 604 |     const requestId = context.get('requestId');
 605 |     const identity = context.get('identity');
 606 |     const scopeError = requireScope(identity, 'risk:read', requestId, metrics);
 607 |     if (scopeError) return scopeError;
 608 |     const record = await observeApiDependency(
 609 |       metrics,
 610 |       {
 611 |         dependencyType: 'assessment_repository',
 612 |         operation: 'find_by_id',
 613 |         classify: (value) => (value === null ? 'empty' : 'success'),
 614 |         monotonicNow,
 615 |       },
 616 |       () =>
 617 |         dependencies.assessments.findById({
 618 |           organizationId: identity.organizationId,
 619 |           storeId: identity.storeId,
 620 |           assessmentId: context.req.param('assessmentId'),
 621 |         }),
 622 |     );
 623 |     if (!record) return apiError(requestId, 404, 'ASSESSMENT_NOT_FOUND', 'Assessment not found');
 624 |     return context.json(record.response);
 625 |   });
 626 |
 627 |   app.post('/v1/order-outcomes', async (context) => {
 628 |     const requestId = context.get('requestId');
 629 |     const identity = context.get('identity');
 630 |     const scopeError = requireScope(identity, 'outcomes:write', requestId, metrics);
 631 |     if (scopeError) return scopeError;
 632 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 633 |     if (!idempotencyKey) {
 634 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 635 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 636 |     }
 637 |     const parsedBody = await parseJson(context.req.raw, orderOutcomeSchema);
 638 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 639 |     if (parsedBody.value.assessment_id) {
 640 |       const assessment = await observeApiDependency(
 641 |         metrics,
 642 |         {
 643 |           dependencyType: 'assessment_repository',
 644 |           operation: 'find_by_id',
 645 |           classify: (value) => (value === null ? 'empty' : 'success'),
 646 |           monotonicNow,
 647 |         },
 648 |         () =>
 649 |           dependencies.assessments.findById({
 650 |             organizationId: identity.organizationId,
 651 |             storeId: identity.storeId,
 652 |             assessmentId: parsedBody.value.assessment_id!,
 653 |           }),
 654 |       );
 655 |       if (!assessment) {
 656 |         return apiError(
 657 |           requestId,
 658 |           400,
 659 |           'ASSESSMENT_NOT_FOUND',
 660 |           'Assessment not found for this store',
 661 |         );
 662 |       }
 663 |     }
 664 |     const saved = await observeDurableProducer(
 665 |       tracer,
 666 |       context.get('traceContext'),
 667 |       'outcome_event',
 668 |       'webhook_delivery',
 669 |       (traceContext) =>
 670 |         observeApiDependency(
 671 |           metrics,
 672 |           {
 673 |             dependencyType: 'outcome_repository',
 674 |             operation: 'save',
 675 |             classify: (value) => (value.replay ? 'replay' : 'success'),
 676 |             monotonicNow,
 677 |           },
 678 |           () =>
 679 |             dependencies.outcomes.save({
 680 |               organizationId: identity.organizationId,
 681 |               storeId: identity.storeId,
 682 |               idempotencyKey,
 683 |               outcome: parsedBody.value,
 684 |               traceContext,
 685 |             }),
 686 |         ),
 687 |     );
 688 |     recordApiControlEvent(metrics, 'idempotency', saved.replay ? 'replay' : 'allowed');
 689 |     if (!saved.replay) {
 690 |       recordRiskOutcomeDistribution(metrics, {
 691 |         outcome: parsedBody.value.outcome,
 692 |         linkedAssessment: parsedBody.value.assessment_id !== undefined,
 693 |       });
 694 |     }
 695 |     return context.json(
 696 |       { success: true as const, outcome_id: saved.outcomeId, replay: saved.replay },
 697 |       saved.replay ? 200 : 201,
 698 |     );
 699 |   });
 700 |
 701 |   app.get('/v1/integration-rollouts/native-shadow', async (context) => {
 702 |     const requestId = context.get('requestId');
 703 |     const identity = context.get('identity');
 704 |     const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
 705 |     if (scopeError) return scopeError;
 706 |     if (!dependencies.nativeShadowRollouts) {
 707 |       return apiError(
 708 |         requestId,
 709 |         503,
 710 |         'NATIVE_SHADOW_ROLLOUT_UNAVAILABLE',
 711 |         'Native shadow rollout configuration is not available',
 712 |       );
 713 |     }
 714 |     const rollout = await dependencies.nativeShadowRollouts.load({
 715 |       organizationId: identity.organizationId,
 716 |       storeId: identity.storeId,
 717 |     });
 718 |     if (!rollout) {
 719 |       return apiError(requestId, 400, 'TENANT_SCOPE_MISMATCH', 'Store scope is not active');
 720 |     }
 721 |     return context.json(
 722 |       nativeShadowRolloutResponseSchema.parse({
 723 |         success: true,
 724 |         organization_id: rollout.organizationId,
 725 |         store_id: rollout.storeId,
 726 |         integration: rollout.integration,
 727 |         mode: rollout.mode,
 728 |         rollout_version: rollout.rolloutVersion,
 729 |         sample_rate_bps: rollout.sampleRateBps,
 730 |         sampling_key: rollout.samplingKey,
 731 |       }),
 732 |     );
 733 |   });
 734 |
 735 |   app.post('/v1/integration-comparisons/native-shadow', async (context) => {
 736 |     const requestId = context.get('requestId');
 737 |     const identity = context.get('identity');
 738 |     const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
 739 |     if (scopeError) return scopeError;
 740 |     if (!dependencies.shadowComparisons) {
 741 |       return apiError(
 742 |         requestId,
 743 |         503,
 744 |         'SHADOW_COMPARISON_UNAVAILABLE',
 745 |         'Native shadow comparison persistence is not configured',
 746 |       );
 747 |     }
 748 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 749 |     if (!idempotencyKey) {
 750 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 751 |     }
 752 |     const parsedBody = await parseJson(context.req.raw, nativeShadowComparisonInputSchema);
 753 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 754 |     const assessment = await dependencies.assessments.findById({
 755 |       organizationId: identity.organizationId,
 756 |       storeId: identity.storeId,
 757 |       assessmentId: parsedBody.value.assessment_id,
 758 |     });
 759 |     if (!assessment) {
 760 |       return apiError(
 761 |         requestId,
 762 |         400,
 763 |         'ASSESSMENT_NOT_FOUND',
 764 |         'Assessment not found for this store',
 765 |       );
 766 |     }
 767 |     if (assessment.request.external_order_id !== parsedBody.value.external_order_id) {
 768 |       return apiError(
 769 |         requestId,
 770 |         400,
 771 |         'ASSESSMENT_ORDER_MISMATCH',
 772 |         'Assessment does not belong to the supplied external order',
 773 |       );
 774 |     }
 775 |     try {
 776 |       const saved = await dependencies.shadowComparisons.save({
 777 |         organizationId: identity.organizationId,
 778 |         storeId: identity.storeId,
 779 |         apiKeyId: identity.apiKeyId,
 780 |         idempotencyKey,
 781 |         comparison: parsedBody.value,
 782 |         guardAssessment: assessment.response,
 783 |       });
 784 |       const response = nativeShadowComparisonResponseSchema.parse({
 785 |         success: true,
 786 |         comparison_id: saved.comparisonId,
 787 |         replay: saved.replay,
 788 |       });
 789 |       return context.json(response, saved.replay ? 200 : 201);
 790 |     } catch (error) {
 791 |       const code =
 792 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 793 |           ? error.code
 794 |           : 'SHADOW_COMPARISON_UNAVAILABLE';
 795 |       const status =
 796 |         code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT'
 797 |           ? 409
 798 |           : code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
 799 |               code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
 800 |               code === 'TENANT_SCOPE_MISMATCH'
 801 |             ? 400
 802 |             : 503;
 803 |       return apiError(
 804 |         requestId,
 805 |         status,
 806 |         code,
 807 |         status === 503
 808 |           ? 'Native shadow comparison could not be persisted'
 809 |           : 'Native shadow comparison was rejected',
 810 |       );
 811 |     }
 812 |   });
 813 |
 814 |   app.post('/v1/integration-attempts/native-shadow', async (context) => {
 815 |     const requestId = context.get('requestId');
 816 |     const identity = context.get('identity');
 817 |     const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
 818 |     if (scopeError) return scopeError;
 819 |     if (!dependencies.nativeShadowAttempts) {
 820 |       return apiError(
 821 |         requestId,
 822 |         503,
 823 |         'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE',
 824 |         'Native shadow attempt persistence is not configured',
 825 |       );
 826 |     }
 827 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 828 |     if (!idempotencyKey) {
 829 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 830 |     }
 831 |     const parsedBody = await parseJson(context.req.raw, nativeShadowAttemptInputSchema);
 832 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 833 |     try {
 834 |       const saved = await dependencies.nativeShadowAttempts.save({
 835 |         organizationId: identity.organizationId,
 836 |         storeId: identity.storeId,
 837 |         apiKeyId: identity.apiKeyId,
 838 |         idempotencyKey,
 839 |         attempt: parsedBody.value,
 840 |       });
 841 |       return context.json(
 842 |         nativeShadowAttemptResponseSchema.parse({
 843 |           success: true,
 844 |           attempt_id: saved.attemptId,
 845 |           replay: saved.replay,
 846 |         }),
 847 |         saved.replay ? 200 : 201,
 848 |       );
 849 |     } catch (error) {
 850 |       const code =
 851 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 852 |           ? error.code
 853 |           : 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE';
 854 |       const status =
 855 |         code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT'
 856 |           ? 409
 857 |           : code === 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE'
 858 |             ? 503
 859 |             : 400;
 860 |       return apiError(
 861 |         requestId,
 862 |         status,
 863 |         code,
 864 |         status === 503
 865 |           ? 'Native shadow attempt could not be persisted'
 866 |           : 'Native shadow attempt was rejected',
 867 |       );
 868 |     }
 869 |   });
 870 |
 871 |   app.post('/v1/courier-observations/refresh', async (context) => {
 872 |     const requestId = context.get('requestId');
 873 |     const identity = context.get('identity');
 874 |     const scopeError = requireScope(identity, 'courier:refresh', requestId, metrics);
 875 |     if (scopeError) return scopeError;
 876 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 877 |     if (!idempotencyKey) {
 878 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 879 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 880 |     }
 881 |     const operationKey = operationIdempotencyKey(identity, 'courier-refresh', idempotencyKey);
 882 |     const existing = await observeApiDependency(
 883 |       metrics,
 884 |       {
 885 |         dependencyType: 'idempotency_store',
 886 |         operation: 'get',
 887 |         classify: (value) => (value === null ? 'empty' : 'replay'),
 888 |         monotonicNow,
 889 |       },
 890 |       () => dependencies.idempotency.get(operationKey),
 891 |     );
 892 |     if (existing) {
 893 |       recordApiControlEvent(metrics, 'idempotency', 'replay');
 894 |       return context.json(existing, 200);
 895 |     }
 896 |     recordApiControlEvent(metrics, 'idempotency', 'allowed');
 897 |     const parsedBody = await parseJson(context.req.raw, refreshSchema);
 898 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 899 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 900 |     if (!isValidBangladeshPhone(phone)) {
 901 |       return apiError(
 902 |         requestId,
 903 |         400,
 904 |         'INVALID_PHONE',
 905 |         'A valid Bangladesh mobile number is required',
 906 |       );
 907 |     }
 908 |     let queued: { jobId: string };
 909 |     try {
 910 |       queued = await observeDurableProducer(
 911 |         tracer,
 912 |         context.get('traceContext'),
 913 |         'courier_refresh',
 914 |         'courier_refresh',
 915 |         (traceContext) =>
 916 |           observeApiDependency(
 917 |             metrics,
 918 |             {
 919 |               dependencyType: 'courier_queue',
 920 |               operation: 'enqueue',
 921 |               monotonicNow,
 922 |             },
 923 |             () =>
 924 |               dependencies.refreshQueue.enqueue({
 925 |                 organizationId: identity.organizationId,
 926 |                 storeId: identity.storeId,
 927 |                 phone,
 928 |                 phoneHash: dependencies.hashPhone(phone),
 929 |                 providers: parsedBody.value.providers,
 930 |                 force: parsedBody.value.force,
 931 |                 traceContext,
 932 |               }),
 933 |           ),
 934 |       );
 935 |     } catch (error) {
 936 |       const code =
 937 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 938 |           ? error.code
 939 |           : 'COURIER_REFRESH_UNAVAILABLE';
 940 |       return apiError(
 941 |         requestId,
 942 |         code === 'COURIER_CONNECTION_REQUIRED' ? 409 : 503,
 943 |         code,
 944 |         error instanceof Error ? error.message : 'Courier refresh could not be queued',
 945 |       );
 946 |     }
 947 |     const response = { success: true as const, job_id: queued.jobId, status: 'queued' as const };
 948 |     await observeApiDependency(
 949 |       metrics,
 950 |       {
 951 |         dependencyType: 'idempotency_store',
 952 |         operation: 'set',
 953 |         monotonicNow,
 954 |       },
 955 |       () => dependencies.idempotency.set(operationKey, response),
 956 |     );
 957 |     return context.json(response, 202);
 958 |   });
 959 |
 960 |   app.post('/v1/verifications/otp/send', async (context) => {
 961 |     const requestId = context.get('requestId');
 962 |     const identity = context.get('identity');
 963 |     const scopeError = requireScope(identity, 'verification:write', requestId, metrics);
 964 |     if (scopeError) return scopeError;
 965 |     if (!dependencies.verificationRequests) {
 966 |       return apiError(
 967 |         requestId,
 968 |         503,
 969 |         'VERIFICATION_UNAVAILABLE',
 970 |         'OTP verification is not configured',
 971 |       );
 972 |     }
 973 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 974 |     if (!idempotencyKey) {
 975 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 976 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 977 |     }
 978 |     const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
 979 |     const existing = await observeApiDependency(
 980 |       metrics,
 981 |       {
 982 |         dependencyType: 'idempotency_store',
 983 |         operation: 'get',
 984 |         classify: (value) => (value === null ? 'empty' : 'replay'),
 985 |         monotonicNow,
 986 |       },
 987 |       () => dependencies.idempotency.get(operationKey),
 988 |     );
 989 |     if (existing) {
 990 |       recordApiControlEvent(metrics, 'idempotency', 'replay');
 991 |       return context.json(existing, 200);
 992 |     }
 993 |     recordApiControlEvent(metrics, 'idempotency', 'allowed');
 994 |     const parsedBody = await parseJson(context.req.raw, otpSendSchema);
 995 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 996 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 997 |     if (!isValidBangladeshPhone(phone)) {
 998 |       return apiError(
 999 |         requestId,
1000 |         400,
1001 |         'INVALID_PHONE',
1002 |         'A valid Bangladesh mobile number is required',
1003 |       );
1004 |     }
1005 |     try {
1006 |       const queued = await observeDurableProducer(
1007 |         tracer,
1008 |         context.get('traceContext'),
1009 |         'otp_delivery',
1010 |         'verification_delivery',
1011 |         (traceContext) =>
1012 |           observeApiDependency(
1013 |             metrics,
1014 |             {
1015 |               dependencyType: 'verification_queue',
1016 |               operation: 'enqueue',
1017 |               classify: (value) => (value.replay ? 'replay' : 'success'),
1018 |               monotonicNow,
1019 |             },
1020 |             () =>
1021 |               dependencies.verificationRequests!.enqueueSend({
1022 |                 organizationId: identity.organizationId,
1023 |                 storeId: identity.storeId,
1024 |                 ...(parsedBody.value.assessment_id === undefined
1025 |                   ? {}
1026 |                   : { assessmentId: parsedBody.value.assessment_id }),
1027 |                 phone,
1028 |                 phoneHash: dependencies.hashPhone(phone),
1029 |                 purpose: parsedBody.value.purpose,
1030 |                 idempotencyKey,
1031 |                 traceContext,
1032 |               }),
1033 |           ),
1034 |       );
1035 |       const response = {
1036 |         success: true as const,
1037 |         verification_id: queued.verificationId,
1038 |         expires_at: queued.expiresAt,
1039 |         status: 'queued' as const,
1040 |       };
1041 |       await observeApiDependency(
1042 |         metrics,
1043 |         {
1044 |           dependencyType: 'idempotency_store',
1045 |           operation: 'set',
1046 |           monotonicNow,
1047 |         },
1048 |         () => dependencies.idempotency.set(operationKey, response),
1049 |       );
1050 |       if (queued.replay) recordApiControlEvent(metrics, 'idempotency', 'replay');
1051 |       return context.json(response, queued.replay ? 200 : 202);
1052 |     } catch (error) {
1053 |       return verificationApiError(requestId, error);
1054 |     }
1055 |   });
1056 |
1057 |   app.post('/v1/verifications/otp/verify', async (context) => {
1058 |     const requestId = context.get('requestId');
1059 |     const identity = context.get('identity');
1060 |     const scopeError = requireScope(identity, 'verification:write', requestId, metrics);
1061 |     if (scopeError) return scopeError;
1062 |     if (!dependencies.otpVerifier) {
1063 |       return apiError(
1064 |         requestId,
1065 |         503,
1066 |         'VERIFICATION_UNAVAILABLE',
1067 |         'OTP verification is not configured',
1068 |       );
1069 |     }
1070 |     const parsedBody = await parseJson(context.req.raw, otpVerifySchema);
1071 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
1072 |     try {
1073 |       await observeApiDependency(
1074 |         metrics,
1075 |         {
1076 |           dependencyType: 'otp_verifier',
1077 |           operation: 'verify',
1078 |           classifyError: (error) => (error instanceof VerificationError ? 'rejected' : 'error'),
1079 |           monotonicNow,
1080 |         },
1081 |         () =>
1082 |           dependencies.otpVerifier!.verify({
1083 |             organizationId: identity.organizationId,
1084 |             storeId: identity.storeId,
1085 |             verificationId: parsedBody.value.verification_id,
1086 |             otp: parsedBody.value.otp,
1087 |           }),
1088 |       );
1089 |       return context.json({ success: true as const, verified: true as const });
1090 |     } catch (error) {
1091 |       return verificationApiError(requestId, error);
1092 |     }
1093 |   });
1094 |
1095 |   app.notFound((context) => {
1096 |     const requestId = context.get('requestId') || idFactory('req');
1097 |     return apiError(requestId, 404, 'NOT_FOUND', 'Route not found');
1098 |   });
1099 |
1100 |   app.onError((error, context) => {
1101 |     const requestId = context.get('requestId') || idFactory('req');
1102 |     logger.error('api.request.unhandled_error', {
1103 |       request_id: requestId,
1104 |       method: context.req.method,
1105 |       route: telemetryRoute(context.req.path),
1106 |       code: 'UNHANDLED_ERROR',
1107 |       error,
1108 |     });
1109 |     return apiError(
1110 |       requestId,
1111 |       500,
1112 |       'INTERNAL_ERROR',
1113 |       error instanceof Error ? 'The request could not be completed' : 'Internal error',
1114 |     );
1115 |   });
1116 |
1117 |   return app;
1118 | }
1119 |
1120 | const STATIC_TELEMETRY_ROUTES = new Set([
1121 |   '/',
1122 |   '/health',
1123 |   '/auth/login',
1124 |   '/auth/session',
1125 |   '/auth/logout',
1126 |   '/dashboard/v1/overview',
1127 |   '/dashboard/v1/native-shadow-rollout',
1128 |   '/dashboard/v1/dead-letters',
1129 |   '/dashboard/v1/dead-letter-replays',
1130 |   '/admin/v1/overview',
1131 |   '/v1/risk-assessments',
1132 |   '/v1/order-outcomes',
1133 |   '/v1/integration-rollouts/native-shadow',
1134 |   '/v1/integration-comparisons/native-shadow',
1135 |   '/v1/integration-attempts/native-shadow',
1136 |   '/v1/courier-observations/refresh',
1137 |   '/v1/verifications/otp/send',
1138 |   '/v1/verifications/otp/verify',
1139 | ]);
1140 |
1141 | const API_METRIC_ROUTES = [
1142 |   ...STATIC_TELEMETRY_ROUTES,
1143 |   '/v1/risk-assessments/:assessment_id',
1144 |   'unmatched',
1145 | ];
1146 | const API_METRIC_ATTRIBUTES = {
1147 |   method: { values: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD', 'OTHER'] },
1148 |   route: { values: API_METRIC_ROUTES },
1149 |   status_class: { values: ['1xx', '2xx', '3xx', '4xx', '5xx', 'other'] },
1150 | } as const;
1151 | const API_REQUEST_SPAN = defineSpan({
1152 |   name: 'ozzyl.api.request',
1153 |   kind: 'server',
1154 |   attributes: {
1155 |     method: { ...API_METRIC_ATTRIBUTES.method, required: false },
1156 |     route: { ...API_METRIC_ATTRIBUTES.route, required: false },
1157 |     status_class: { ...API_METRIC_ATTRIBUTES.status_class, required: false },
1158 |   },
1159 | });
1160 | const API_DURABLE_PRODUCER_SPAN = defineSpan({
1161 |   name: 'ozzyl.api.durable.produce',
1162 |   kind: 'producer',
1163 |   attributes: {
1164 |     operation: {
1165 |       values: ['assessment_event', 'outcome_event', 'courier_refresh', 'otp_delivery'],
1166 |     },
1167 |     queue_type: {
1168 |       values: ['courier_refresh', 'webhook_delivery', 'verification_delivery'],
1169 |     },
1170 |     outcome: { values: ['completed', 'failed'], required: false },
1171 |   },
1172 | });
1173 | const API_REQUEST_COUNT = defineMetric({
1174 |   name: 'ozzyl.api.requests',
1175 |   kind: 'counter',
1176 |   unit: '{request}',
1177 |   attributes: API_METRIC_ATTRIBUTES,
1178 | });
1179 | const API_REQUEST_DURATION = defineMetric({
1180 |   name: 'ozzyl.api.request.duration',
1181 |   kind: 'histogram',
1182 |   unit: 'ms',
1183 |   attributes: API_METRIC_ATTRIBUTES,
1184 | });
1185 |
1186 | async function observeDurableProducer<T>(
1187 |   tracer: Tracer,
1188 |   parent: TraceContext,
1189 |   operation: 'assessment_event' | 'outcome_event' | 'courier_refresh' | 'otp_delivery',
1190 |   queueType: 'courier_refresh' | 'webhook_delivery' | 'verification_delivery',
1191 |   task: (traceContext: PersistedTraceContext) => Promise<T>,
1192 | ): Promise<T> {
1193 |   const span = tracer.startSpan(API_DURABLE_PRODUCER_SPAN, {
1194 |     parent,
1195 |     attributes: { operation, queue_type: queueType },
1196 |   });
1197 |   try {
1198 |     const result = await task(toPersistedTraceContext(span.context));
1199 |     span.end({ status: 'ok', attributes: { outcome: 'completed' } });
1200 |     return result;
1201 |   } catch (error) {
1202 |     span.end({ status: 'error', attributes: { outcome: 'failed' } });
1203 |     throw error;
1204 |   }
1205 | }
1206 |
1207 | function telemetryRoute(path: string): string {
1208 |   if (STATIC_TELEMETRY_ROUTES.has(path)) return path;
1209 |   if (/^\/v1\/risk-assessments\/[^/]+$/.test(path)) {
1210 |     return '/v1/risk-assessments/:assessment_id';
1211 |   }
1212 |   return 'unmatched';
1213 | }
1214 |
1215 | function telemetryMethod(method: string): string {
1216 |   const normalized = method.toUpperCase();
1217 |   return ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'].includes(normalized)
1218 |     ? normalized
1219 |     : 'OTHER';
1220 | }
1221 |
1222 | function telemetryStatusClass(status: number): string {
1223 |   const statusClass = Math.floor(status / 100);
1224 |   return statusClass >= 1 && statusClass <= 5 ? `${statusClass}xx` : 'other';
1225 | }
1226 |
1227 | function readRequestId(value: string | undefined): string | null {
1228 |   const requestId = value?.trim();
1229 |   if (!requestId || requestId.length > 100) return null;
1230 |   if (/^req_[A-Za-z0-9-]{1,80}$/.test(requestId)) return requestId;
1231 |   if (/^[a-f0-9]{16,32}$/i.test(requestId)) return requestId;
1232 |   if (
1233 |     /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(requestId)
1234 |   ) {
1235 |     return requestId;
1236 |   }
1237 |   return null;
1238 | }
1239 |
1240 | export class MemoryAssessmentRepository implements AssessmentRepository {
1241 |   private readonly byId = new Map<string, StoredAssessment>();
1242 |   private readonly byIdempotency = new Map<string, StoredAssessment>();
1243 |
1244 |   async findByIdempotency(input: {
1245 |     organizationId: string;
1246 |     storeId: string;
1247 |     idempotencyKey: string;
1248 |   }): Promise<StoredAssessment | null> {
1249 |     return (
1250 |       this.byIdempotency.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`) ??
1251 |       null
1252 |     );
1253 |   }
1254 |
1255 |   async findById(input: {
1256 |     organizationId: string;
1257 |     storeId: string;
1258 |     assessmentId: string;
1259 |   }): Promise<StoredAssessment | null> {
1260 |     const record = this.byId.get(input.assessmentId);
1261 |     if (
1262 |       !record ||
1263 |       record.identity.organizationId !== input.organizationId ||
1264 |       record.identity.storeId !== input.storeId
1265 |     ) {
1266 |       return null;
1267 |     }
1268 |     return record;
1269 |   }
1270 |
1271 |   async save(record: StoredAssessment): Promise<StoredAssessment> {
1272 |     const key = `${record.identity.organizationId}:${record.identity.storeId}:${record.idempotencyKey}`;
1273 |     const existing = this.byIdempotency.get(key);
1274 |     if (existing) return existing;
1275 |     this.byId.set(record.response.assessment_id, record);
1276 |     this.byIdempotency.set(key, record);
1277 |     return record;
1278 |   }
1279 | }
1280 |
1281 | export class MemoryOutcomeRepository implements OutcomeRepository {
1282 |   private readonly outcomes = new Map<string, string>();
1283 |
1284 |   async save(input: {
1285 |     organizationId: string;
1286 |     storeId: string;
1287 |     idempotencyKey: string;
1288 |     outcome: OrderOutcomeInput;
1289 |   }): Promise<{ outcomeId: string; replay: boolean }> {
1290 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
1291 |     const existing = this.outcomes.get(key);
1292 |     if (existing) return { outcomeId: existing, replay: true };
1293 |     const outcomeId = `out_${randomUUID()}`;
1294 |     this.outcomes.set(key, outcomeId);
1295 |     return { outcomeId, replay: false };
1296 |   }
1297 | }
1298 |
1299 | export class MemoryShadowComparisonRepository implements ShadowComparisonRepository {
1300 |   private readonly records = new Map<
1301 |     string,
1302 |     {
1303 |       comparisonId: string;
1304 |       comparison: NativeShadowComparisonInput;
1305 |       guardAssessment: RiskAssessmentResponse;
1306 |     }
1307 |   >();
1308 |
1309 |   async save(input: {
1310 |     organizationId: string;
1311 |     storeId: string;
1312 |     apiKeyId: string;
1313 |     idempotencyKey: string;
1314 |     comparison: NativeShadowComparisonInput;
1315 |     guardAssessment: RiskAssessmentResponse;
1316 |   }): Promise<{ comparisonId: string; replay: boolean }> {
1317 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
1318 |     const existing = this.records.get(key);
1319 |     if (existing) {
1320 |       if (
1321 |         JSON.stringify(existing.comparison) !== JSON.stringify(input.comparison) ||
1322 |         existing.guardAssessment.assessment_id !== input.guardAssessment.assessment_id
1323 |       ) {
1324 |         const error = new Error('SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') as Error & {
1325 |           code: string;
1326 |         };
1327 |         error.code = 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT';
1328 |         throw error;
1329 |       }
1330 |       return { comparisonId: existing.comparisonId, replay: true };
1331 |     }
1332 |     const comparisonId = `cmp_${randomUUID()}`;
1333 |     this.records.set(key, {
1334 |       comparisonId,
1335 |       comparison: input.comparison,
1336 |       guardAssessment: input.guardAssessment,
1337 |     });
1338 |     return { comparisonId, replay: false };
1339 |   }
1340 |
1341 |   findByIdempotency(input: { organizationId: string; storeId: string; idempotencyKey: string }):
1342 |     | {
1343 |         comparisonId: string;
1344 |         comparison: NativeShadowComparisonInput;
1345 |         guardAssessment: RiskAssessmentResponse;
1346 |       }
1347 |     | undefined {
1348 |     return this.records.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`);
1349 |   }
1350 | }
1351 |
1352 | export class MemoryOperationIdempotencyStore implements OperationIdempotencyStore {
1353 |   private readonly values = new Map<string, unknown>();
1354 |   async get(key: string): Promise<unknown> {
1355 |     return this.values.get(key) ?? null;
1356 |   }
1357 |   async set(key: string, value: unknown): Promise<void> {
1358 |     this.values.set(key, value);
1359 |   }
1360 | }
1361 |
1362 | export class MemoryRateLimiter implements RateLimiter {
1363 |   private readonly windows = new Map<string, { count: number; expiresAt: number }>();
1364 |   async consume(key: string, limit: number, windowMs: number): Promise<boolean> {
1365 |     const currentTime = Date.now();
1366 |     const current = this.windows.get(key);
1367 |     if (!current || current.expiresAt <= currentTime) {
1368 |       this.windows.set(key, { count: 1, expiresAt: currentTime + windowMs });
1369 |       return true;
1370 |     }
1371 |     if (current.count >= limit) return false;
1372 |     current.count += 1;
1373 |     return true;
1374 |   }
1375 | }
1376 |
1377 | export class MemoryRefreshQueue implements CourierRefreshQueue {
1378 |   async enqueue(): Promise<{ jobId: string }> {
1379 |     return { jobId: `cjob_${randomUUID()}` };
1380 |   }
1381 | }
1382 |
1383 | export class MissingFeatureProvider implements AssessmentFeatureProvider {
1384 |   async load(): Promise<AssessmentFeatureSet> {
1385 |     return {
1386 |       courier: {
1387 |         totalOrders: 0,
1388 |         deliveredOrders: 0,
1389 |         returnedOrders: 0,
1390 |         cancelledBeforeShipping: 0,
1391 |         providerCount: 0,
1392 |         freshness: 'missing',
1393 |         sourceConfidence: 0,
1394 |       },
1395 |       merchant: {
1396 |         deliveredOrders: 0,
1397 |         returnedOrders: 0,
1398 |         recentCancelledOrders: 0,
1399 |         previousSuccessfulCustomer: false,
1400 |       },
1401 |       velocity: {
1402 |         phoneOrdersLastHour: 0,
1403 |         devicePhoneCountLastDay: 0,
1404 |         ipCustomerCountLastHour: 0,
1405 |       },
1406 |       verification: { otpVerified: false, otpFailures: 0, phoneUnreachable: false },
1407 |       network: {
1408 |         confirmedNegativeOutcomes: 0,
1409 |         independentReporters: 0,
1410 |         confirmedPositiveOutcomes: 0,
1411 |         activeDispute: false,
1412 |       },
1413 |     };
1414 |   }
1415 | }
1416 |
1417 | function requireScope(
1418 |   identity: ApiKeyIdentity,
1419 |   scope: string,
1420 |   requestId: string,
1421 |   metrics?: MetricRecorder,
1422 | ): Response | null {
1423 |   if (identity.scopes.has('*') || identity.scopes.has(scope)) {
1424 |     recordApiControlEvent(metrics, 'authorization', 'allowed');
1425 |     return null;
1426 |   }
1427 |   recordApiControlEvent(metrics, 'authorization', 'rejected');
1428 |   return apiError(requestId, 403, 'INSUFFICIENT_SCOPE', `API key requires ${scope} scope`);
1429 | }
1430 |
1431 | function apiError(
1432 |   requestId: string,
1433 |   status: number,
1434 |   code: string,
1435 |   message: string,
1436 |   details?: Record<string, unknown>,
1437 | ): Response {
1438 |   return new Response(
1439 |     JSON.stringify({
1440 |       success: false,
1441 |       error: { code, message, ...(details === undefined ? {} : { details }) },
1442 |       request_id: requestId,
1443 |     }),
1444 |     {
1445 |       status,
1446 |       headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
1447 |     },
1448 |   );
1449 | }
1450 |
1451 | function verificationApiError(requestId: string, error: unknown): Response {
1452 |   if (error instanceof VerificationError) {
1453 |     const status =
1454 |       error.code === 'RATE_LIMITED'
1455 |         ? 429
1456 |         : error.code === 'NOT_FOUND'
1457 |           ? 404
1458 |           : error.code === 'DELIVERY_PENDING' || error.code === 'DELIVERY_FAILED'
1459 |             ? 409
1460 |             : 400;
1461 |     return apiError(requestId, status, error.code, error.message);
1462 |   }
1463 |   return apiError(
1464 |     requestId,
1465 |     503,
1466 |     'VERIFICATION_UNAVAILABLE',
1467 |     'Verification could not be completed',
1468 |   );
1469 | }
1470 |
1471 | async function parseJson<TOutput, TInput>(
1472 |   request: Request,
1473 |   schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
1474 | ): Promise<{ success: true; value: TOutput } | { success: false; message: string }> {
1475 |   try {
1476 |     const raw: unknown = await request.json();
1477 |     const parsed = schema.safeParse(raw);
1478 |     if (!parsed.success) {
1479 |       return {
1480 |         success: false,
1481 |         message: parsed.error.issues
1482 |           .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
1483 |           .join('; '),
1484 |       };
1485 |     }
1486 |     return { success: true, value: parsed.data };
1487 |   } catch {
1488 |     return { success: false, message: 'Request body must be valid JSON' };
1489 |   }
1490 | }
1491 |
1492 | function readIdempotencyKey(value: string | undefined): string | null {
1493 |   const normalized = value?.trim();
1494 |   if (!normalized || normalized.length > 200) return null;
1495 |   return normalized;
1496 | }
1497 |
1498 | function operationIdempotencyKey(
1499 |   identity: ApiKeyIdentity,
1500 |   operation: string,
1501 |   idempotencyKey: string,
1502 | ): string {
1503 |   return `${identity.organizationId}:${identity.storeId}:${operation}:${idempotencyKey}`;
1504 | }
1505 |
1506 | function billingPeriod(date: Date): string {
1507 |   return date.toISOString().slice(0, 7);
1508 | }
1509 |
```

### docs/operations/operations-observability.md

Bytes: 21421
SHA-256: 2de3b783bdce050438db39f1bcfbf078461d5258e99d01a24d8a97ae51055c9d
Lines: 1-312 of 312

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
 19 | - `ozzyl.api.control.events` — authentication, authorization, rate-limit, quota, and idempotency control events using finite allowed/rejected/replay/error categories;
 20 | - `ozzyl.api.dependency.operations` and `ozzyl.api.dependency.operation.duration` — API-key resolution, rate limiting, usage reservation, feature loading, assessment/outcome persistence, idempotency storage, durable enqueue, and OTP verification by finite dependency/operation/outcome categories;
 21 | - `ozzyl.risk.assessments` — one point per newly persisted assessment using bounded decision, risk level, score band, confidence band, degraded flag, and courier freshness;
 22 | - `ozzyl.risk.outcomes` — one point per newly persisted verified outcome using finite outcome and linked-assessment categories;
 23 | - `ozzyl.worker.operations` — counter by finite worker type, operation, and outcome;
 24 | - `ozzyl.worker.operation.duration` — histogram observation in milliseconds using the same worker attributes;
 25 | - `ozzyl.worker.claim.failures` — counter by finite durable-worker type only;
 26 | - `ozzyl.repository.operations` and `ozzyl.repository.operation.duration` — durable courier, webhook, and verification queue claim/start/renew/complete/retry/fail/snapshot operations by finite repository type, operation, and outcome;
 27 | - `ozzyl.provider.operations` and `ozzyl.provider.operation.duration` — courier API, courier browser-login, webhook HTTP, and verification-delivery calls by finite provider category, operation, and success/retryable/permanent outcome;
 28 | - `ozzyl.queue.depth` — gauge for queued, retry-scheduled, claimed, processing, and failed durable work by finite queue type and status;
 29 | - `ozzyl.queue.oldest_ready.age` — gauge in milliseconds for the oldest currently due courier, webhook, or verification item.
 30 |
 31 | Request IDs, organization/store/account/job/event/assessment identifiers, API-key or idempotency values, external order IDs, phone numbers or hashes, OTP values, credentials, URLs, payloads, provider responses, vendor names, and arbitrary error codes are not metric attributes. Provider labels are broad finite categories rather than vendor/account/destination names. Risk score and confidence are converted to fixed bands rather than emitted as raw values. Assessment/outcome replays do not create duplicate quality points. Queue snapshots contain only aggregate status counts and oldest-ready age. The default recorder writes JSON lines to the process telemetry stream; a reviewed OpenTelemetry exporter/collector adapter may replace that sink without changing call sites.
 32 |
 33 | ### API
 34 |
 35 | - Request rate
 36 | - Error rate
 37 | - p50/p95/p99 latency
 38 | - Rate-limit events
 39 | - Quota/entitlement failures
 40 | - Idempotency replays/conflicts
 41 | - Degraded assessments
 42 | - Authentication/session failures without sensitive values
 43 | - Transactional outbox rows created by event type
 44 | - Outbox enqueue failures and transaction rollbacks
 45 |
 46 | ### PostgreSQL
 47 |
 48 | - Availability and failover state
 49 | - Connection usage and pool wait
 50 | - Lock wait and deadlock rate
 51 | - Slow query rate
 52 | - Migration success/failure
 53 | - Backup and restore status, duration, age, and last successful drill
 54 | - Migration manifest/history checksum mismatch count
 55 | - Durable-job claim and lease-recovery rate
 56 | - `SKIP LOCKED` claim throughput
 57 | - Stale-lease recovery and exhausted-work terminalization
 58 |
 59 | ### Courier
 60 |
 61 | - Session refresh success rate
 62 | - Session age
 63 | - Provider response latency
 64 | - Provider error rate by structured code
 65 | - Observation freshness
 66 | - Queue lag
 67 | - Reconnect-required accounts
 68 | - Selector/login-state failures
 69 |
 70 | ### Verification
 71 |
 72 | - OTP queued/sent/delivered/failed
 73 | - Verification success rate
 74 | - Provider latency and timeout rate
 75 | - Claim throughput by verification-worker replica
 76 | - Fresh/recovered/lost lease counts
 77 | - Retry rate and attempts distribution
 78 | - Payload decryption/validation and scope-mismatch failures
 79 | - Resend rate and abuse blocks
 80 | - Queue lag, oldest due job, exhausted `LEASE_EXPIRED`, and dead-letter count
 81 |
 82 | The durable runner is implemented, but production delivery remains disabled until a reviewed provider adapter/account is selected, bundled, configured, and validated in staging.
 83 |
 84 | ### Webhooks and events
 85 |
 86 | - Outbox backlog and oldest-event age
 87 | - Due versus future retry count
 88 | - Claim throughput by event-worker replica
 89 | - Fresh, recovered, and lost lease counts
 90 | - Delivery success/failure
 91 | - Retry rate and attempts distribution
 92 | - Destination response class
 93 | - DNS resolution failure count
 94 | - Unsafe-destination rejection count
 95 | - Endpoint inactive/decryption/scope-mismatch failures
 96 | - Exhausted `LEASE_EXPIRED` count
 97 | - End-to-end duration from `occurred_at` to `completed_at`
 98 | - Delivery latency by event type
 99 |
100 | ### Risk quality
101 |
102 | - Decision distribution
103 | - Outcome by score band
104 | - False-positive rate
105 | - False-negative rate
106 | - Confidence distribution
107 | - Unknown/degraded distribution
108 | - Savings estimate accuracy
109 |
110 | ### Native shadow pilot
111 |
112 | - Explicitly opted-in stores
113 | - Sampled orders
114 | - Successful comparisons
115 | - Guard assessment failures and timeouts
116 | - Comparison and sampled-attempt persistence failures
117 | - Decision disagreement rate
118 | - Bounded score-delta minimum, maximum, average, and lower/equal/higher counts
119 | - Rollout reads, updates, idempotent replays, conflicts, and tenant-scope rejections
120 |
121 | Merchant views must query only the authorized organization/store and a bounded
122 | window. Platform administration may aggregate across active stores but must not
123 | expose customer identifiers, external order IDs, raw request payloads, API keys,
124 | provider credentials, cookies, OTPs, or signing secrets. Reporting failure must
125 | not affect source checkout or the effective legacy decision.
126 |
127 | ## Logging
128 |
129 | `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The API server and the courier-session, courier-sync, event, and verification runners use it for lifecycle and error records. Every record receives a timestamp, level, service, environment, and event name before export.
130 |
131 | The helper recursively redacts sensitive field names before serialization. Passwords, secrets, tokens, API keys, cookies, OTPs, raw phone values, credentials, provider responses, DNS answers, payloads, request/response bodies, and URLs are replaced rather than emitted. `phone_hash` is permitted as a non-reversible correlation reference. Error values expose only a bounded name and structured code; messages and stacks are omitted. Circular objects, binary values, big integers, excessive depth, oversized strings, and large collections are converted to bounded safe representations.
132 |
133 | Serialization or log/metric/span-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. API request logs use only accepted/generated opaque request IDs, an allowlisted route or bounded route template, HTTP method, status/status class, and duration. API metrics use normalized request categories, finite control/dependency outcomes, and bounded risk-quality bands without request or business identifiers. Durable repository operations, provider calls, and aggregate queue depth/oldest-ready-age are instrumented with finite categories only. Traces use descriptor-owned finite attributes and carry opaque W3C context separately from logs and metrics. Raw URLs, query strings, dynamic assessment identifiers, tenant/job/account identifiers, provider/vendor names, arbitrary error codes, payloads, and contact data are not metric or span attributes. Remaining browser/admin/integration metrics, OpenTelemetry exporter/collector topology, sampling, dashboards, alerts, managed retention, and the managed backend remain production follow-up work.
134 |
135 | Use structured logs with:
136 |
137 | - request id
138 | - organization/store id or safe internal reference
139 | - assessment/job/event/delivery id
140 | - provider or destination category where safe
141 | - worker id
142 | - error code
143 | - attempt number
144 | - duration
145 | - engine/policy version when relevant
146 | - deployment environment and service name
147 |
148 | Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, webhook signing secrets, destination URL credentials, and unrestricted request/event bodies are prohibited.
149 |
150 | The API emits startup/shutdown, request-completion, and unhandled-error records, and all four private workers emit startup and structured error records through the shared redaction boundary. The API records request count/duration, control outcomes, critical dependency count/duration, bounded assessment quality, and verified outcomes; private workers record operation count/duration; durable courier/event/verification queue repositories record transition count/duration and periodic aggregate depth/oldest-ready-age; courier API/browser, webhook HTTP, and OTP delivery boundaries record provider count/duration; durable claim failures remain separately counted. API requests emit server spans, durable queue creation emits producer children, private workers continue persisted context as consumer spans, and provider calls emit client children. Production instrumentation must still add remaining browser/admin/integration measurements plus a reviewed exporter/collector and sampling policy without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, business identifiers, provider credentials, URLs, arbitrary error codes, or DNS answer details that disclose internal topology.
151 |
152 | Recommended event-worker error codes include:
153 |
154 | - `UNSAFE_WEBHOOK_DESTINATION`
155 | - `WEBHOOK_DNS_RESOLUTION_FAILED`
156 | - `WEBHOOK_SECRET_DECRYPTION_FAILED`
157 | - `INVALID_EVENT_PAYLOAD`
158 | - `WEBHOOK_SCOPE_MISMATCH`
159 | - `WEBHOOK_DELIVERY_LEASE_LOST`
160 | - `ENDPOINT_INACTIVE`
161 | - `TIMEOUT`
162 | - `NETWORK_ERROR`
163 | - `RATE_LIMITED`
164 | - `LEASE_EXPIRED`
165 |
166 | ## Tracing
167 |
168 | `@ozzyl/observability` implements an exporter-neutral W3C trace boundary. It accepts only version-00 `traceparent` values with non-zero trace and span identifiers. Optional `tracestate` is syntactically bounded to 512 characters and 32 unique members. Malformed caller or persisted context is ignored and the component starts a fresh root trace; trace input is never an authorization or tenant identity.
169 |
170 | Implemented topology:
171 |
172 | - every API request creates an `ozzyl.api.request` server span and returns its `traceparent`;
173 | - assessment/outcome webhook creation, courier refresh, and OTP delivery enqueue create `ozzyl.api.durable.produce` producer children;
174 | - producer context is stored only in nullable `trace_parent`/`trace_state` columns on `courier_jobs`, `webhook_deliveries`, and `verification_jobs`;
175 | - courier-sync, event, and verification workers continue valid persisted context as `ozzyl.worker.operation` consumer spans;
176 | - courier API, webhook HTTP, and OTP delivery calls create `ozzyl.provider.operation` client children;
177 | - courier-session refresh starts a root worker span with a browser-login provider child;
178 | - verification failure event creation persists the active worker context into the new webhook delivery.
179 |
180 | Span attributes are finite categories only: normalized method, canonical route/template, status class, durable operation/queue type/outcome, worker type/operation/outcome, and broad provider type/operation/outcome. Request, organization, store, account, job, event, delivery, assessment, API-key, endpoint, phone/hash, OTP, credential, URL, payload/body, provider-response, vendor-name, and arbitrary error-code attributes are prohibited. `tracestate` is propagated but not emitted inside span JSON. Trace context is not copied into archive evidence and legacy null-context work remains processable.
181 |
182 | The current tracer emits one local JSON line per completed span and performs no network I/O. ID generation, validation, clock, serialization, or sink failure is swallowed and cannot break scoring, persistence, queue transitions, provider execution, or synchronous checkout. Exporter/collector wiring, sampling policy, managed retention, dashboards, and alerts remain production work.
183 |
184 | ## Alerts
185 |
186 | - Provider session refresh failure spike
187 | - API p95 latency or error-rate breach
188 | - Assessment error/degraded spike
189 | - PostgreSQL unavailable, connection saturation, or lock-wait spike
190 | - Database migration, manifest/history integrity, backup, or restore failure
191 | - Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
192 | - Event-worker claim rate drops to zero while due backlog grows
193 | - Webhook delivery failure or retry spike
194 | - Webhook secret-decryption or scope-mismatch failure
195 | - Unsafe webhook destination spike
196 | - DNS resolution failure spike
197 | - OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
198 | - Usage counter/entitlement drift
199 | - Reconnect-required account spike
200 | - Secret scanning or redaction regression
201 | - KMS/vault access or decrypt failure spike
202 |
203 | ## Runbooks
204 |
205 | Create and exercise runbooks for:
206 |
207 | - Steadfast login/selector break
208 | - Expired, disabled, or rotated encryption key
209 | - KMS/vault outage
210 | - OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
211 | - Courier provider outage
212 | - Database logical restore, managed point-in-time restore, and failover
213 | - API key compromise
214 | - Courier credential/session compromise
215 | - Webhook signing-secret compromise and endpoint rotation
216 | - Queue/outbox backlog, lease recovery, and dead-letter replay
217 | - Webhook destination failure or repeated HTTP rejection
218 | - DNS resolution/egress-policy failure
219 | - Invalid event payload or scope mismatch
220 | - Incorrect risk policy rollback
221 | - Telemetry backend outage
222 | - Reputation dispute escalation when that subsystem exists
223 |
224 | A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.
225 |
226 | A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.
227 |
228 | ## Health model
229 |
230 | Expose separate health/readiness states for:
231 |
232 | - API process
233 | - database
234 | - durable job/outbox store
235 | - optional distributed cache
236 | - event/webhook worker process
237 | - webhook backlog and oldest-event age
238 | - event-worker signing-secret decryption capability
239 | - courier provider adapters
240 | - session workers
241 | - verification providers and future verification runner
242 | - KMS/vault access
243 | - telemetry export
244 |
245 | A webhook endpoint outage, provider outage, or telemetry outage must not necessarily take the API process out of service. Readiness and operations views must still expose degraded dependencies. Unknown or degraded dependencies must never be treated as safe approval signals.
246 |
247 | ## Event-worker operational contract
248 |
249 | - `EVENT_WORKER_ID` should be stable and unique per replica in production.
250 | - Courier, event, and verification poll, lease, lease-renewal, max-attempt, and provider-timeout values must be positive integers.
251 | - Every lease-renewal interval must be no greater than half its lease; event and verification leases must also exceed their provider timeout by more than five seconds.
252 | - Alert on heartbeat renewal failure because active provider I/O is aborted and the job remains available only through stale-lease recovery or reviewed replay.
253 | - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
254 | - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
255 | - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
256 | - Exhausted stale work fails closed with `LEASE_EXPIRED`.
257 | - Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.
258 |
259 | ## Data operations
260 |
261 | - Automated encrypted backups
262 | - Point-in-time recovery
263 | - Restore testing on a schedule
264 | - Migration preflight and post-deploy verification
265 | - Preview-first bounded terminal durable-work archival through the maintenance-only PostgreSQL boundary
266 | - Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
267 | - Audit trail for privileged data and credential access
268 | - KMS key rotation and ciphertext re-encryption procedures
269 | - Webhook signing-secret rotation/re-encryption procedure
270 | - Telemetry retention and access review
271 | - Production-data redaction before lower-environment use
272 |
273 | ## Release operations
274 |
275 | - Feature flags for new engine/policy versions and native multi-store migration
276 | - Canary/pilot merchants before broad rollout
277 | - Compare decision distributions before policy promotion
278 | - Rollback path for API, worker, migration, and policy changes
279 | - Do not edit migration 0008 after application; use a new migration for schema changes
280 | - Keep event-worker deployment independently scalable and rollbackable from the API
281 | - Exercise outbox backlog and retry behavior before each pilot expansion
282 | - No automatic blocking policy promotion without reviewed outcome data
283 | - Validate dashboards and alerts before each pilot expansion
284 |
285 | ## Provider selection still pending
286 |
287 | An OpenTelemetry exporter/collector implementation, sampling policy, managed observability backend, telemetry retention policy, alert-delivery channel, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Remaining browser/admin/integration metrics, dashboards, and alerts remain unimplemented. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
288 |
289 | ## Browser dead-letter operations surface
290 |
291 | The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.
292 |
293 | The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.
294 |
295 | ## Durable work retention operations
296 |
297 | Terminal courier, webhook, and verification rows may be archived only through the maintenance-only repository and CLI documented in [Durable Work Retention Runbook](durable-work-retention-runbook.md). The application runtime role cannot read or write `durable_work_archives` and cannot delete source queue rows.
298 |
299 | Every run must preview first, use a cutoff at least 24 hours old, select only `completed`/`failed`, and process no more than 500 rows. Production baseline guidance is 30 days for completed work and 180 days for failed work until support, incident, privacy, and legal owners approve another policy. Archive evidence is secret-free and does not replace backup/PITR because source payloads cannot be reconstructed after commit.
300 |
301 | Monitor and record:
302 |
303 | - candidate and archived counts by work type and terminal status;
304 | - oldest eligible terminal timestamp;
305 | - skipped locked or state-changed rows;
306 | - archive evidence conflicts and maintenance privilege failures;
307 | - duration and rows per batch;
308 | - source queue size before and after maintenance;
309 | - archive table growth and approved evidence-retention window.
310 |
311 | No unattended retention scheduler is implemented. Automatic scheduling remains blocked on approved retention windows, incident/legal holds, maintenance identity provisioning, monitoring, backup/PITR recovery, and archive-evidence retention.
312 |
```

### docs/roadmap/risk-register.md

Bytes: 8648
SHA-256: 576aa0ccf30eea324d3e0a64b4490af6140648c4e5948447d269b19947e59677
Lines: 1-35 of 35

```markdown
 1 | # Risk Register
 2 |
 3 | Updated: 2026-07-28
 4 |
 5 | | ID    | Risk                                                                                  | Severity | Current mitigation                                                                                                                                                                | Owner/status                     |
 6 | | ----- | ------------------------------------------------------------------------------------- | -------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
 7 | | R-001 | Steadfast login selectors/internal endpoint change without notice                     |     High | Adapter/session boundary, fixtures, structured errors, selector monitoring, reconnect flow, degraded cache behavior                                                               | Phase 2 / open                   |
 8 | | R-002 | Merchant courier credentials or sessions leak through logs/storage/CI                 | Critical | Envelope encryption, separate session encryption, redaction, no shell args, least privilege, audit reads                                                                          | Foundation + Phase 2 / open      |
 9 | | R-003 | Raw API keys stored or used as dashboard sessions                                     | Critical | One-time reveal, hash-only storage, dedicated user sessions, prohibited by AGENTS/security docs                                                                                   | Phase 1 / open                   |
10 | | R-004 | Weak password hashing copied from source SaaS                                         | Critical | Argon2id or managed auth only; source implementation prohibited                                                                                                                   | Phase 1 / open                   |
11 | | R-005 | Cross-tenant data access or cache/job leakage                                         | Critical | Mandatory scope parameters, composite constraints/indexes, isolation tests, no system store shortcut                                                                              | Phase 1 onward / open            |
12 | | R-006 | Concurrent requests bypass quotas or create duplicate assessments                     |     High | Atomic entitlement reservation, usage events, idempotency transaction, concurrency tests                                                                                          | Phase 1/4 / open                 |
13 | | R-007 | Unknown/provider failure interpreted as safe or fraudulent                            |     High | Explicit unknown/degraded state, separate confidence, verification recommendation, no auto-block on provider failure                                                              | Phase 3/4 / designed             |
14 | | R-008 | Duplicate risk engines diverge between API, WooCommerce, and multi-store SaaS         |     High | One pure package, dependency rules, shared types, native service client, remove embedded engine after shadow rollout                                                              | Phase 3/4 / open                 |
15 | | R-009 | WooCommerce contract mismatch causes incorrect order action                           |     High | Rewrite plugin for lowercase enums, `signals[].code`, explicit success/degraded handling, contract tests                                                                          | Phase 4 / open                   |
16 | | R-010 | Unofficial third-party fraud service becomes hidden single point of truth             |     High | Optional fallback adapter only; source/freshness/confidence exposed; no engine import                                                                                             | Phase 2/3 / designed             |
17 | | R-011 | False positives harm legitimate customers/merchants                                   | Critical | Confidence, explainability, merchant policies, OTP/review, pilot confusion matrix, no broad auto-block before calibration                                                         | Pilot / open                     |
18 | | R-012 | Cross-merchant reputation creates privacy, abuse, or dispute harm                     | Critical | Post-MVP only, evidence lineage, independent corroboration, decay, disputes, legal/privacy review                                                                                 | Later / deferred                 |
19 | | R-013 | Deployment selected before browser-worker/database/queue requirements are known       |   Medium | Deployment ADR pending; keep components separable and infrastructure-agnostic                                                                                                     | Phase 1 / open                   |
20 | | R-014 | Migration/schema mismatch or applied migration edits                                  |     High | Canonical database package, append-only migrations, clean/upgrade verification, CI checks                                                                                         | Phase 1 onward / open            |
21 | | R-015 | Scraper runs synchronously and delays checkout                                        |     High | Session/sync workers, cache-first assessment, bounded latency, async refresh                                                                                                      | Phase 2/4 / designed             |
22 | | R-016 | Scheduled scraper failures silently succeed                                           |     High | Remove `continue-on-error`, structured job records, alerts, dead-letter handling, failure exit status                                                                             | Phase 2 / open                   |
23 | | R-017 | Encryption key rotation makes credentials unavailable                                 |     High | Versioned envelope encryption, rotation/runbook, staged re-encryption, restore tests                                                                                              | Phase 1/2 / open                 |
24 | | R-018 | Outcome feedback is omitted, preventing calibration                                   |     High | Outcome endpoint/plugin/native integration included in MVP acceptance criteria                                                                                                    | Phase 4 / open                   |
25 | | R-019 | Provider terms/authorization do not permit commercial internal-endpoint use           |     High | Merchant authorization record, terms/legal review before commercial scale, replaceable adapter boundary                                                                           | Phase 2 / blocking for scale     |
26 | | R-020 | Empty repository causes documentation to be mistaken for implemented functionality    |   Medium | Implementation status explicitly separates planned/in-progress/implemented and must be updated each milestone                                                                     | Phase 0 / mitigated              |
27 | | R-021 | Durable payloads are retained indefinitely or archived before support/incident review |     High | Terminal-only preview, age floor, bounded archive-before-delete transaction, secret-free evidence, preserved replay/audit, no scheduler                                           | Operations / open                |
28 | | R-022 | Retention maintenance privileges leak into API or worker runtime identities           | Critical | Archive table explicitly denied to runtime, no runtime DELETE, separate reviewed maintenance identity, privilege preflight                                                        | Operations / blocking            |
29 | | R-023 | Telemetry labels leak identifiers/secrets or create uncontrolled cardinality/cost     |     High | Descriptor-owned finite controls/dependencies, bounded risk bands, replay de-duplication, prohibited identifier/secret/contact/URL/payload keys, canonical routes, sink isolation | Operations / partially mitigated |
30 | | R-024 | Untrusted trace context is spoofed, malformed, or used to carry sensitive baggage     |     High | Strict version-00/non-zero parsing, bounded no-baggage tracestate, finite span attributes, DB checks, invalid-context root fallback                                               | Operations / partially mitigated |
31 |
32 | ## Review cadence
33 |
34 | Review this register at every milestone completion and before production/pilot changes. Add evidence, owner, target date, and residual risk as implementation begins.
35 |
```

### docs/security/security-privacy.md

Bytes: 14122
SHA-256: 2e139c61e0c37e94daf33212c80dd35c90fde3dcd5a56a3e0a6a9722d4bee627
Lines: 1-207 of 207

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
 51 | Metrics use a stricter boundary than structured logs. Every attribute must be declared through a finite categorical allowlist. Request, organization, store, account, worker, job, event, assessment, API-key, idempotency, external-order, endpoint, phone/hash, URL, payload/body, token, and secret-style attribute names are rejected. API request metrics expose only normalized method, canonical route/template, and status class. Critical controls expose finite authentication/authorization/rate-limit/quota/idempotency outcomes; dependencies expose only finite component, operation, and outcome. Risk metrics convert score/confidence to fixed bands and record only newly persisted assessments/outcomes so replays do not inflate quality data. Worker and durable-repository metrics expose finite component, operation, and outcome categories; provider metrics use broad provider categories rather than vendor/account/destination names; queue gauges expose aggregate status counts and oldest-ready age only. Arbitrary provider/error values are not labels. Metric validation, clock, serialization, snapshot, or sink failure is isolated from request and worker execution.
 52 |
 53 | Tracing accepts untrusted W3C context only after strict version-00, non-zero-ID, and bounded-state validation. Malformed context starts a fresh trace and never changes authorization, tenant scope, idempotency, or business behavior. Span attributes use the same finite-category discipline and prohibit business/request identifiers, phone/hash/OTP values, credentials, URLs, payloads, provider responses, vendor names, and arbitrary error codes. Bounded `tracestate` is propagated only for context continuity and is not emitted in span JSON, logs, or metrics. Durable context is stored in dedicated nullable columns, not payloads, and is not copied into archive evidence.
 54 |
 55 | ## Durable work retention
 56 |
 57 | Old terminal courier, webhook, and verification source rows may be removed only through the maintenance-only retention boundary. The archive stores tenant scope, terminal state, attempts, bounded error code, timestamps, an opaque run ID, and the maintenance database identity; it never stores source payloads, event bodies, encrypted verification payloads, provider references, phone/OTP material, endpoints, credentials, cookies, or tokens.
 58 |
 59 | The application runtime role cannot read or write the archive table and cannot delete source queue rows. A separate reviewed maintenance identity must preview first, use approved retention windows and holds, and persist matching archive evidence before atomic deletion. Replay and audit evidence remain outside this deletion path. Because archive metadata cannot reconstruct deleted payloads, backup/PITR is the only approved post-commit recovery boundary.
 60 |
 61 | ## Phone data
 62 |
 63 | - Normalize consistently
 64 | - Use keyed hash/HMAC for cross-table matching where appropriate
 65 | - Encrypt raw phone only when operational lookup is necessary
 66 | - Separate analytics identity from operational contact data
 67 | - Document retention and deletion behavior
 68 | - Do not include raw phone values in webhook outbox events
 69 |
 70 | ## Credential and envelope storage
 71 |
 72 | - Envelope encryption
 73 | - Key version stored with ciphertext
 74 | - Master keys outside database
 75 | - Rotation procedure
 76 | - Strict service identity permissions
 77 | - Separate authenticated encryption context for credentials, sessions, webhook endpoints, and verification jobs
 78 | - Audit credential reads and decrypt operations
 79 | - Decryption failure must fail closed
 80 | - No plaintext compatibility fallback
 81 |
 82 | The local/self-hosted AES-256-GCM implementation is isolated in `@ozzyl/encryption`. The package also provides a provider-neutral managed v2 boundary with a random per-record data key, authenticated context digest and wrapped-key metadata, data-key zeroization, structured safe failures, explicit legacy dual-read, and key-version re-encryption. Production runtime call sites remain on local v1 until a selected KMS/vault adapter, component identities, access auditing, and an audited background rewrite are provisioned; there is no automatic local or plaintext fallback.
 83 |
 84 | Webhook signing secrets are stored only as encrypted endpoint material. The event worker decrypts them using the authenticated context `webhook-endpoint:<endpoint-id>` immediately before signing; the API and checkout path do not need plaintext access for delivery.
 85 |
 86 | ## Multi-tenancy
 87 |
 88 | Every merchant-owned record includes organization/store scope. Repository methods require scope parameters rather than optional filters. API-key resolution, feature assembly, assessment/outcome writes, dashboards, and tenant administration revalidate that the store is active and belongs to the active organization; matching caller-supplied identifiers alone are not authoritative.
 89 |
 90 | Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, verifications, or logs.
 91 |
 92 | Webhook delivery rows persist explicit organization/store scope and are revalidated against the endpoint and store relationships before claim. Mismatched rows fail closed instead of being sent. Webhook and verification administration require active owner/admin membership and return only operational metadata; signing-secret ciphertext, OTP hashes, encrypted job payloads, and raw phone values are excluded.
 93 |
 94 | Native shadow rollout and attempt evidence follow the same boundary:
 95 |
 96 | - source order scope is reloaded and verified before Guard evaluation;
 97 | - service API keys require `comparisons:write` and remain separate from browser sessions;
 98 | - rollout mutation requires CSRF proof plus active owner/admin membership;
 99 | - rollout, assessment, comparison, and attempt repositories revalidate exact organization/store relationships;
100 | - merchant and platform reports contain bounded aggregates only;
101 | - phone numbers, request snapshots, raw API keys, provider payloads, credentials, cookies, OTPs, and signing secrets are prohibited from rollout, attempt, dashboard, audit, and error payloads.
102 |
103 | ## PostgreSQL role separation
104 |
105 | - The migration owner applies schema changes, owns relations, records migration history, and runs `npm run db:runtime-grants` after migrations.
106 | - Runtime services connect with an externally provisioned non-owner `LOGIN` that has no superuser, `CREATEDB`, `CREATEROLE`, replication, `BYPASSRLS`, inherited role memberships, database ownership, schema ownership, or relation ownership.
107 | - Runtime privileges are explicit current-table `SELECT`/`INSERT`/`UPDATE` grants only where required. Migration history, `DELETE`, DDL, schema creation, and role management remain denied.
108 | - The grant command verifies the complete current table inventory and effective privileges, so a new table or an implicit/public privilege fails closed until the policy is reviewed.
109 | - Production may split this reviewed baseline into narrower API and worker roles, but no runtime identity may become the migration owner.
110 |
111 | ## Shared reputation safeguards
112 |
113 | - No single merchant report should globally block a customer.
114 | - Prefer courier-confirmed outcomes.
115 | - Require independent evidence for high-impact reputation.
116 | - Apply time decay.
117 | - Provide dispute and correction mechanisms.
118 | - Detect abusive or low-quality reporters.
119 | - Preserve evidence lineage.
120 | - Do not launch cross-merchant reputation in the foundation MVP without privacy/legal review.
121 |
122 | ## OTP security
123 |
124 | - 6-digit cryptographically random OTP
125 | - Store only hash
126 | - 5–10 minute expiry
127 | - Maximum attempts
128 | - Per-phone, per-IP, per-store, and per-organization rate limits
129 | - Bind OTP to verification session/order/purpose
130 | - Do not expose delivery success when provider actually failed
131 | - Do not log OTP values
132 | - Provider delivery runs only in the private verification worker, never synchronous API handling
133 | - Persist phone and OTP for delivery only inside an encrypted job payload; queue columns and logs remain non-sensitive
134 | - Bind ciphertext to `verification-job:<job-id>` authenticated context
135 | - Validate organization, store, purpose, phone HMAC, and OTP hash before provider I/O
136 | - Require current unexpired lease ownership for start, retry, delivery, and failure transitions
137 | - Fail both the job and authoritative session closed on relational scope mismatch
138 | - Pass a stable verification idempotency key to provider adapters to reduce duplicate sends after uncertain outcomes
139 |
140 | ## Webhook security
141 |
142 | - Emit durable outbox rows in the same transaction as the newly persisted assessment or outcome
143 | - Never perform merchant webhook network delivery from the risk engine, checkout handler, or API persistence transaction
144 | - Use stable event IDs and `(endpoint_id, event_id)` uniqueness for replay/idempotency control
145 | - Sign the exact canonical event payload with HMAC-SHA256 over `timestamp.payload`
146 | - Require HTTPS
147 | - Reject URL credentials, localhost names, `.local` names, literal non-public IPv4/IPv6 addresses, and metadata destinations
148 | - Resolve hostnames before fetch and reject the destination when any resolved address is invalid or non-public
149 | - Treat DNS resolution failure as retryable without making a request
150 | - Disable redirects to prevent redirect-based destination bypass
151 | - Apply bounded timeout, attempt limit, backoff, and terminal failure
152 | - Require the current unexpired worker lease for delivery-state transitions
153 | - Do not include raw phone, OTP, API keys, provider credentials, or signing secrets in event payloads or logs
154 |
155 | Application-level URL and DNS validation is not sufficient by itself against every DNS-rebinding, routing, proxy, or infrastructure failure. Production must also restrict event-worker egress, block metadata/private networks at the network layer, and use a controlled resolver or equivalent policy.
156 |
157 | ## Web security
158 |
159 | - CSRF protection for dashboard actions
160 | - CSP and secure headers
161 | - Input validation and output encoding
162 | - SSRF protection in webhook/custom URL features
163 | - HMAC-signed webhooks
164 | - Timestamp and replay prevention
165 | - Request size limits
166 | - Idempotency abuse protection
167 | - Safe CORS configuration by integration type
168 |
169 | ## Courier automation security
170 |
171 | - Playwright runs in isolated workers with least privilege
172 | - No browser execution in synchronous API/checkout paths
173 | - Screenshots/traces are redacted, access-controlled, and short-lived
174 | - Provider credentials are not passed through shell arguments
175 | - Session refresh failures are visible; they are never silently ignored
176 | - Provider terms and merchant authorization must be reviewed before commercial scale
177 |
178 | ## Operational security
179 |
180 | - Audit logs
181 | - Secret rotation
182 | - Dependency scanning
183 | - SAST and secret scanning
184 | - Backups and restore testing
185 | - Incident response runbook
186 | - Key compromise, webhook-secret compromise, and courier credential compromise runbooks
187 | - Queue/outbox lease recovery and dead-letter procedures
188 | - Production access review and break-glass procedure
189 | - Private worker ingress and controlled egress
190 |
191 | ## Source SaaS findings that must not be copied
192 |
193 | - Custom SHA-256 password hashing
194 | - Raw API key saved in metadata
195 | - Raw API key used as a login cookie
196 | - Full phone numbers logged by blacklist stubs
197 | - Shell commands containing session payloads
198 | - Hardcoded infrastructure identifiers
199 | - Decryption fallback to plaintext
200 | - Broad unaudited cross-store lookup
201 | - Synchronous webhook delivery in checkout handling
202 | - Plaintext webhook signing secrets in configuration or logs
203 |
204 | ## Browser durable-work administration
205 |
206 | Dead-letter listing and replay require an opaque authenticated browser session, exact session-visible organization/store scope, active owner/admin membership, repository-level relational reauthorization, and CSRF proof for replay. Service API keys are not accepted as browser sessions. The response contract excludes raw payloads, destination URLs, phone numbers or hashes, OTP values or hashes, encrypted material, credentials, cookies, tokens, provider responses, and webhook signing secrets.
207 |
```

### docs/testing/testing-strategy.md

Bytes: 18893
SHA-256: fbb56d905f83a3cbc99861ee9e1e6412402511d6f66e3f2f8003f11fa5110467
Lines: 1-309 of 309

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
 22 | - Metric descriptor/name/unit validation, finite categorical attribute allowlists, high-cardinality/secret-like key rejection, value/sign validation, JSON point serialization, API control/dependency/risk/outcome plus worker/repository/provider/queue helper output, and metric-sink failure isolation
 23 | - W3C traceparent/tracestate parsing, formatting, persisted-context round-trip, malformed/all-zero rejection, finite span descriptors, one-shot completion, duration/status output, root/child lineage, and ID/clock/serialization/sink failure isolation
 24 |
 25 | ## Contract tests
 26 |
 27 | Each courier adapter must pass a shared contract suite:
 28 |
 29 | - Returns canonical observation
 30 | - Handles timeout
 31 | - Handles expired session
 32 | - Never leaks credentials
 33 | - Maps malformed responses to structured errors
 34 | - Preserves source/freshness metadata
 35 | - Separates actual return from pre-shipping cancellation
 36 |
 37 | Public API contract tests cover:
 38 |
 39 | - Canonical success/error response
 40 | - Lowercase enums and `signals[].code`
 41 | - Unknown/degraded behavior
 42 | - Idempotent replay
 43 | - Test/live key isolation
 44 | - Dedicated comparison scope, idempotent replay, order binding, and cross-store assessment rejection
 45 |
 46 | Webhook delivery contract tests cover:
 47 |
 48 | - Canonical domain-event payloads
 49 | - HMAC signature over timestamp and exact payload
 50 | - Redirect rejection
 51 | - Retryable HTTP/network/DNS failures
 52 | - Terminal unsafe-destination and inactive-endpoint failures
 53 | - No signing secret, raw phone, or unrestricted request body in logs
 54 |
 55 | ## Integration tests
 56 |
 57 | - User/session authentication
 58 | - API key creation, one-time reveal, authentication, revocation, and rotation
 59 | - Atomic quota enforcement under concurrency
 60 | - Assessment persistence
 61 | - Transactional encrypted OTP queue creation and tenant-scoped verification
 62 | - Lease-owned OTP provider delivery and retry/failure state
 63 | - Courier session refresh
 64 | - Transactional assessment/outcome webhook outbox emission
 65 | - Lease-owned webhook delivery, renewal, abort-on-loss, and retry
 66 | - Multi-tenant isolation
 67 | - Organization/store membership authorization
 68 | - API-wide request correlation plus request count/duration metrics for public, authenticated, browser, not-found, and unhandled-error paths without raw dynamic routes, query values, request IDs, or tenant identifiers in metric attributes
 69 | - Authentication, authorization, rate-limit, quota, and idempotency control metrics plus critical API dependency count/duration without business identifiers or error detail
 70 | - Newly persisted assessment/outcome distributions use bounded bands and finite categories, while idempotent replays do not double-count quality points
 71 | - Usage-limit rejection remains a 429/rejected metric, while unexpected usage-ledger failure remains a 500/error metric
 72 | - API server-span continuation, response traceparent, bounded tracestate propagation, durable producer child context, and absence of tenant/phone/job values from span output
 73 | - Courier-session, courier-sync, event, and verification operation plus provider-call metrics with bounded category/operation/outcome labels and no job, account, event, endpoint, phone, OTP, credential, URL, payload, vendor, error-text, or provider-response values
 74 | - Courier-session root/provider lineage and courier, webhook, and verification producer→consumer→provider trace lineage without business identifiers or sensitive values
 75 | - Durable courier, webhook, and verification repository operation timing plus PostgreSQL aggregate queue-depth/oldest-ready-age snapshots without row or tenant identifiers
 76 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 77 |
 78 | ### PostgreSQL concurrency and idempotency coverage
 79 |
 80 | The CI PostgreSQL service runs real-database integration tests for:
 81 |
 82 | - duplicate usage reservations serializing through the organization/period advisory lock;
 83 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 84 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 85 | - concurrent assessment saves returning the single persisted scoped winner;
 86 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 87 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 88 | - operation idempotency values remaining isolated by organization and store;
 89 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 90 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 91 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 92 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 93 | - preventing another courier worker from stealing a fresh lease;
 94 | - reclaiming expired courier jobs and rejecting the previous owner;
 95 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 96 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 97 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
 98 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
 99 | - preventing another event worker from stealing a fresh webhook lease;
100 | - rejecting an expired event-worker owner before completion or failure;
101 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
102 | - clearing webhook ownership when a retry is scheduled;
103 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
104 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
105 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
106 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
107 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
108 | - protecting fresh verification leases and rejecting expired owners;
109 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
110 | - failing both the verification job and authoritative session on persisted scope mismatch;
111 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
112 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
113 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
114 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
115 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
116 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
117 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
118 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
119 |
120 | ### Native shadow rollout safety coverage
121 |
122 | Default tests prove:
123 |
124 | - `off` mode performs no Guard assessment or comparison API call;
125 | - deterministic sampling keeps retries for the same store/order in the same cohort;
126 | - the legacy score and decision remain the effective result even when Guard recommends block;
127 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
128 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
129 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
130 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
131 | - CSRF-protected browser mutation permits only active owner/admin store scope;
132 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
133 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
134 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
135 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
136 |
137 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
138 |
139 | ### Webhook destination security coverage
140 |
141 | Default tests use injected DNS and fetch boundaries. They prove:
142 |
143 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
144 | - a hostname resolving to any non-public address is rejected before `fetch`;
145 | - DNS resolution failure is classified as retryable without making a network request;
146 | - redirects are disabled;
147 | - successful deliveries use the expected HMAC signature and canonical payload;
148 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
149 |
150 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
151 |
152 | ### Verification payload security coverage
153 |
154 | Default tests prove:
155 |
156 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
157 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
158 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
159 | - reporter state and logs do not receive plaintext OTP values;
160 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
161 |
162 | ### Managed envelope security coverage
163 |
164 | Default tests prove:
165 |
166 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
167 | - plaintext values and plaintext data keys are not serialized into the envelope;
168 | - context mismatch is rejected before provider unwrap;
169 | - wrapped-key metadata is authenticated and tampering fails closed;
170 | - provider outage produces a structured non-secret error;
171 | - a provider cannot pass the plaintext data key through as a wrapped key;
172 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
173 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
174 | - malformed, unsupported, or unavailable-key envelopes fail closed.
175 |
176 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
177 |
178 | ### Migration replay coverage
179 |
180 | CI runs the migration command twice against the same PostgreSQL service:
181 |
182 | 1. the first run applies every ordered migration;
183 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
184 |
185 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
186 |
187 | ### Migration integrity and restore coverage
188 |
189 | CI additionally proves:
190 |
191 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
192 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
193 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
194 | - migration execution is serialized by one session-held advisory lock;
195 | - the restore target is a distinct pre-created clean database;
196 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
197 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
198 |
199 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
200 |
201 | Current PostgreSQL coverage includes owner-checked lease renewal, durable dead-letter authorization/replay, runtime-role isolation, and maintenance-only retention archival. Future provider validation must still include selected-provider smoke tests for distinct API/worker identities, migration-owner grant execution, and the separately provisioned retention-maintenance identity.
202 |
203 | ## End-to-end tests
204 |
205 | - Merchant signup and store creation
206 | - Create a test/live API key
207 | - Connect Steadfast account
208 | - Assess WooCommerce COD order
209 | - Receive a signed `assessment.completed` webhook asynchronously
210 | - Review high-risk order
211 | - Verify OTP
212 | - Submit courier outcome
213 | - Receive a signed `order.outcome_recorded` webhook asynchronously
214 | - View usage and savings report
215 |
216 | ## Security tests
217 |
218 | - Tenant data leakage
219 | - API key replay/revocation
220 | - Raw key absence from database/metadata/logs
221 | - Brute-force OTP
222 | - CSRF
223 | - Literal-IP and DNS-result SSRF
224 | - Webhook replay and redirect handling
225 | - Webhook signing-secret decryption failure
226 | - Envelope authenticated-context mismatch
227 | - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
228 | - Log, metric, and span serialization/export failure isolation from authenticated assessment, application, and worker execution
229 | - Metric attribute rejection for identifier/hash/key/URL/payload/body/token/secret-style names and values outside descriptor-owned finite sets
230 | - Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
231 | - Injection attacks
232 | - Session fixation/rotation
233 | - Credential decryption failure
234 | - Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
235 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
236 | - Runtime database role privilege escape, ownership, migration-history, DELETE, DDL, and durable archive-table access attempts
237 |
238 | ## Scraper tests
239 |
240 | - Login page selector fixtures
241 | - Successful cookie extraction
242 | - Invalid credentials
243 | - CAPTCHA/2FA detection
244 | - Provider HTML changes
245 | - Browser cleanup on failure
246 | - Login-state/session validation
247 | - Redacted screenshot/trace behavior
248 | - Structured failure codes
249 |
250 | Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.
251 |
252 | ## Architecture tests
253 |
254 | - `packages/risk-engine` cannot import network/database/provider/browser packages
255 | - API routes cannot import provider session drivers directly
256 | - API persistence may enqueue durable work but cannot execute merchant/provider network delivery
257 | - All schema comes from `packages/database`
258 | - All public response and domain-event types come from `packages/shared-types`
259 | - Tenant-scoped repositories, outbox rows, and jobs require explicit scope
260 |
261 | ## Pilot evaluation
262 |
263 | Track a confusion matrix against real verified outcomes:
264 |
265 | - true positive
266 | - false positive
267 | - true negative
268 | - false negative
269 |
270 | Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.
271 |
272 | ## Required CI gates
273 |
274 | - formatting check
275 | - lint
276 | - typecheck
277 | - unit tests
278 | - contract tests
279 | - integration tests with PostgreSQL
280 | - migration manifest, verification, replay, and database-history integrity
281 | - clean PostgreSQL backup/restore rehearsal
282 | - least-privilege runtime database role grant and effective-permission verification
283 | - dependency audit
284 | - secret scanning
285 | - architecture/dependency-boundary tests
286 |
287 | ## Browser dead-letter operations coverage
288 |
289 | Browser API tests must prove session enforcement, exact-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, secret-free list serialization, replay-result serialization, and structured conflict mapping. The existing real-PostgreSQL durable-work suite remains authoritative for concurrent duplicate replay, tenant isolation, structural/expiry rejection, lease reset, immutable evidence, and audit atomicity.
290 |
291 | ## Durable work retention coverage
292 |
293 | Default unit tests prove invalid cutoffs, empty terminal-status selections, unsafe archive-run IDs, and batches above 500 fail before a database connection is opened.
294 |
295 | PostgreSQL integration tests must prove:
296 |
297 | - valid durable trace context round-trips across courier, webhook, and verification rows while nullable legacy rows remain valid;
298 | - malformed context is rejected by every durable table and all-zero trace/span IDs fail closed;
299 |
300 | - preview returns only old `completed`/`failed` rows and performs no mutation;
301 | - queued and recent rows remain in their source queues;
302 | - preview and archive responses exclude source payload and provider-reference values;
303 | - archive evidence is inserted before source deletion in one transaction;
304 | - courier, webhook, and verification source rows are deleted only after matching evidence exists;
305 | - replay ledger rows remain after source archival;
306 | - rerunning the same cutoff is idempotent when no source rows remain;
307 | - the archive schema contains no payload, raw contact, endpoint, credential, or provider-reference columns;
308 | - the normal runtime role cannot read `durable_work_archives` and has no source `DELETE` privilege.
309 |
```

### packages/observability/src/metrics.test.ts

Bytes: 14846
SHA-256: 895fdfe0ab273940babeab5203030a93ce76c322137f116e32fe742b5b6d07d4
Lines: 1-503 of 503

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import {
  3 |   createMetricRecorder,
  4 |   defineMetric,
  5 |   observeApiDependency,
  6 |   observeRepositoryOperation,
  7 |   recordApiControlEvent,
  8 |   recordDurableQueueSnapshot,
  9 |   recordProviderOperation,
 10 |   recordRiskAssessmentDistribution,
 11 |   recordRiskOutcomeDistribution,
 12 |   recordWorkerClaimFailure,
 13 |   recordWorkerOperation,
 14 |   riskConfidenceBand,
 15 |   riskScoreBand,
 16 |   serializeMetricPoint,
 17 | } from './metrics.js';
 18 | function parseMetricLine(line: string): unknown {
 19 |   return JSON.parse(line) as unknown;
 20 | }
 21 |
 22 | const requestMetric = defineMetric({
 23 |   name: 'ozzyl.api.requests',
 24 |   kind: 'counter',
 25 |   unit: '{request}',
 26 |   attributes: {
 27 |     method: { values: ['GET', 'POST'] },
 28 |     route: { values: ['/health', 'unmatched'] },
 29 |     status_class: { values: ['2xx', '4xx', '5xx'] },
 30 |   },
 31 | });
 32 |
 33 | describe('vendor-neutral metrics', () => {
 34 |   it('serializes an exporter-neutral point with finite categorical attributes', () => {
 35 |     const line = serializeMetricPoint({
 36 |       descriptor: requestMetric,
 37 |       value: 1,
 38 |       attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 39 |       timestamp: new Date('2026-07-28T00:00:00.000Z'),
 40 |       service: 'ozzyl-guard-api',
 41 |       environment: 'test',
 42 |     });
 43 |
 44 |     expect(JSON.parse(line)).toEqual({
 45 |       telemetry_type: 'metric',
 46 |       timestamp: '2026-07-28T00:00:00.000Z',
 47 |       service: 'ozzyl-guard-api',
 48 |       environment: 'test',
 49 |       name: 'ozzyl.api.requests',
 50 |       kind: 'counter',
 51 |       unit: '{request}',
 52 |       value: 1,
 53 |       attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 54 |     });
 55 |   });
 56 |
 57 |   it('rejects high-cardinality identifiers and values outside finite sets', () => {
 58 |     expect(() =>
 59 |       defineMetric({
 60 |         name: 'ozzyl.worker.jobs',
 61 |         kind: 'counter',
 62 |         unit: '{job}',
 63 |         attributes: { worker_id: { values: ['worker-1'] } },
 64 |       }),
 65 |     ).toThrow(/unsafe or unbounded/);
 66 |
 67 |     expect(() =>
 68 |       serializeMetricPoint({
 69 |         descriptor: requestMetric,
 70 |         value: 1,
 71 |         attributes: { method: 'GET', route: '/private/path', status_class: '2xx' },
 72 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 73 |         service: 'ozzyl-guard-api',
 74 |         environment: 'test',
 75 |       }),
 76 |     ).toThrow(/outside its bounded set/);
 77 |   });
 78 |
 79 |   it('rejects negative counters and unknown attributes', () => {
 80 |     expect(() =>
 81 |       serializeMetricPoint({
 82 |         descriptor: requestMetric,
 83 |         value: -1,
 84 |         attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 85 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 86 |         service: 'ozzyl-guard-api',
 87 |         environment: 'test',
 88 |       }),
 89 |     ).toThrow(/must not be negative/);
 90 |
 91 |     expect(() =>
 92 |       serializeMetricPoint({
 93 |         descriptor: requestMetric,
 94 |         value: 1,
 95 |         attributes: {
 96 |           method: 'GET',
 97 |           route: '/health',
 98 |           status_class: '2xx',
 99 |           outcome: 'success',
100 |         },
101 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
102 |         service: 'ozzyl-guard-api',
103 |         environment: 'test',
104 |       }),
105 |     ).toThrow(/not allowed/);
106 |   });
107 |
108 |   it('records bounded worker operation and claim-failure points without identifiers', () => {
109 |     const lines: string[] = [];
110 |     const recorder = createMetricRecorder({
111 |       service: 'worker-test',
112 |       environment: 'test',
113 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
114 |       write: (line) => lines.push(line),
115 |     });
116 |
117 |     recordWorkerOperation(recorder, {
118 |       workerType: 'webhook_delivery',
119 |       operation: 'deliver',
120 |       outcome: 'retry_scheduled',
121 |       durationMs: 17,
122 |     });
123 |     recordWorkerClaimFailure(recorder, 'verification_delivery');
124 |
125 |     expect(lines.map(parseMetricLine)).toEqual([
126 |       expect.objectContaining({
127 |         name: 'ozzyl.worker.operations',
128 |         value: 1,
129 |         attributes: {
130 |           worker_type: 'webhook_delivery',
131 |           operation: 'deliver',
132 |           outcome: 'retry_scheduled',
133 |         },
134 |       }),
135 |       expect.objectContaining({
136 |         name: 'ozzyl.worker.operation.duration',
137 |         value: 17,
138 |         attributes: {
139 |           worker_type: 'webhook_delivery',
140 |           operation: 'deliver',
141 |           outcome: 'retry_scheduled',
142 |         },
143 |       }),
144 |       expect.objectContaining({
145 |         name: 'ozzyl.worker.claim.failures',
146 |         value: 1,
147 |         attributes: { worker_type: 'verification_delivery' },
148 |       }),
149 |     ]);
150 |     expect(lines.join('\n')).not.toContain('_id');
151 |     expect(lines.join('\n')).not.toContain('error_code');
152 |   });
153 |
154 |   it('observes repository success, empty, and error outcomes without changing results', async () => {
155 |     const lines: string[] = [];
156 |     const recorder = createMetricRecorder({
157 |       service: 'repository-test',
158 |       environment: 'test',
159 |       write: (line) => lines.push(line),
160 |     });
161 |     const clock = vi
162 |       .fn()
163 |       .mockReturnValueOnce(10)
164 |       .mockReturnValueOnce(18)
165 |       .mockReturnValueOnce(20)
166 |       .mockReturnValueOnce(24)
167 |       .mockReturnValueOnce(30)
168 |       .mockReturnValueOnce(37);
169 |
170 |     await expect(
171 |       observeRepositoryOperation(
172 |         recorder,
173 |         {
174 |           repositoryType: 'courier_queue',
175 |           operation: 'claim',
176 |           isEmpty: (value) => value === null,
177 |           monotonicNow: clock,
178 |         },
179 |         async () => ({ id: 'opaque-result' }),
180 |       ),
181 |     ).resolves.toEqual({ id: 'opaque-result' });
182 |     await expect(
183 |       observeRepositoryOperation(
184 |         recorder,
185 |         {
186 |           repositoryType: 'courier_queue',
187 |           operation: 'claim',
188 |           isEmpty: (value) => value === null,
189 |           monotonicNow: clock,
190 |         },
191 |         async () => null,
192 |       ),
193 |     ).resolves.toBeNull();
194 |     await expect(
195 |       observeRepositoryOperation(
196 |         recorder,
197 |         {
198 |           repositoryType: 'courier_queue',
199 |           operation: 'renew',
200 |           monotonicNow: clock,
201 |         },
202 |         async () => {
203 |           throw new Error('database unavailable');
204 |         },
205 |       ),
206 |     ).rejects.toThrow('database unavailable');
207 |
208 |     const points = lines.map(parseMetricLine);
209 |     expect(points).toEqual(
210 |       expect.arrayContaining([
211 |         expect.objectContaining({
212 |           name: 'ozzyl.repository.operations',
213 |           attributes: {
214 |             repository_type: 'courier_queue',
215 |             operation: 'claim',
216 |             outcome: 'success',
217 |           },
218 |         }),
219 |         expect.objectContaining({
220 |           name: 'ozzyl.repository.operations',
221 |           attributes: {
222 |             repository_type: 'courier_queue',
223 |             operation: 'claim',
224 |             outcome: 'empty',
225 |           },
226 |         }),
227 |         expect.objectContaining({
228 |           name: 'ozzyl.repository.operations',
229 |           attributes: {
230 |             repository_type: 'courier_queue',
231 |             operation: 'renew',
232 |             outcome: 'error',
233 |           },
234 |         }),
235 |       ]),
236 |     );
237 |     expect(lines.join('\n')).not.toContain('opaque-result');
238 |     expect(lines.join('\n')).not.toContain('database unavailable');
239 |   });
240 |
241 |   it('records provider operations and durable queue gauges with finite labels', () => {
242 |     const lines: string[] = [];
243 |     const recorder = createMetricRecorder({
244 |       service: 'worker-test',
245 |       environment: 'test',
246 |       write: (line) => lines.push(line),
247 |     });
248 |
249 |     recordProviderOperation(recorder, {
250 |       providerType: 'verification_delivery',
251 |       operation: 'send',
252 |       outcome: 'retryable_failure',
253 |       durationMs: 21,
254 |     });
255 |     recordDurableQueueSnapshot(recorder, 'verification_delivery', {
256 |       depths: { queued: 4, processing: 1, failed: 2 },
257 |       oldestReadyAgeMs: 3_000,
258 |     });
259 |
260 |     const points = lines.map(parseMetricLine);
261 |     expect(points).toContainEqual(
262 |       expect.objectContaining({
263 |         name: 'ozzyl.provider.operations',
264 |         attributes: {
265 |           provider_type: 'verification_delivery',
266 |           operation: 'send',
267 |           outcome: 'retryable_failure',
268 |         },
269 |       }),
270 |     );
271 |     expect(points).toContainEqual(
272 |       expect.objectContaining({
273 |         name: 'ozzyl.queue.depth',
274 |         value: 4,
275 |         attributes: { queue_type: 'verification_delivery', status: 'queued' },
276 |       }),
277 |     );
278 |     expect(points).toContainEqual(
279 |       expect.objectContaining({
280 |         name: 'ozzyl.queue.depth',
281 |         value: 0,
282 |         attributes: { queue_type: 'verification_delivery', status: 'retry_scheduled' },
283 |       }),
284 |     );
285 |     expect(points).toContainEqual(
286 |       expect.objectContaining({
287 |         name: 'ozzyl.queue.oldest_ready.age',
288 |         value: 3_000,
289 |         attributes: { queue_type: 'verification_delivery' },
290 |       }),
291 |     );
292 |     expect(lines.join('\n')).not.toContain('_id');
293 |     expect(lines.join('\n')).not.toContain('phone');
294 |   });
295 |
296 |   it('isolates telemetry clocks while preserving repository execution', async () => {
297 |     const recorder = createMetricRecorder({
298 |       service: 'repository-test',
299 |       environment: 'test',
300 |       write: () => {
301 |         throw new Error('metric sink unavailable');
302 |       },
303 |     });
304 |
305 |     await expect(
306 |       observeRepositoryOperation(
307 |         recorder,
308 |         {
309 |           repositoryType: 'webhook_queue',
310 |           operation: 'snapshot',
311 |           monotonicNow: () => {
312 |             throw new Error('clock unavailable');
313 |           },
314 |         },
315 |         async () => 'repository-result',
316 |       ),
317 |     ).resolves.toBe('repository-result');
318 |   });
319 |
320 |   it('records API control and dependency outcomes without dependency values', async () => {
321 |     const lines: string[] = [];
322 |     const recorder = createMetricRecorder({
323 |       service: 'api-test',
324 |       environment: 'test',
325 |       write: (line) => lines.push(line),
326 |     });
327 |     const clock = vi
328 |       .fn()
329 |       .mockReturnValueOnce(10)
330 |       .mockReturnValueOnce(15)
331 |       .mockReturnValueOnce(20)
332 |       .mockReturnValueOnce(27);
333 |
334 |     recordApiControlEvent(recorder, 'authentication', 'rejected');
335 |     recordApiControlEvent(recorder, 'idempotency', 'replay');
336 |     await expect(
337 |       observeApiDependency(
338 |         recorder,
339 |         {
340 |           dependencyType: 'assessment_repository',
341 |           operation: 'find_by_idempotency',
342 |           classify: (value) => (value === null ? 'empty' : 'replay'),
343 |           monotonicNow: clock,
344 |         },
345 |         async () => ({ assessmentId: 'ras-sensitive' }),
346 |       ),
347 |     ).resolves.toEqual({ assessmentId: 'ras-sensitive' });
348 |     await expect(
349 |       observeApiDependency(
350 |         recorder,
351 |         {
352 |           dependencyType: 'usage_ledger',
353 |           operation: 'reserve',
354 |           classifyError: () => 'rejected',
355 |           monotonicNow: clock,
356 |         },
357 |         async () => {
358 |           throw new Error('plan limit for org-sensitive');
359 |         },
360 |       ),
361 |     ).rejects.toThrow('plan limit for org-sensitive');
362 |
363 |     const points = lines.map(parseMetricLine);
364 |     expect(points).toEqual(
365 |       expect.arrayContaining([
366 |         expect.objectContaining({
367 |           name: 'ozzyl.api.control.events',
368 |           attributes: { control: 'authentication', outcome: 'rejected' },
369 |         }),
370 |         expect.objectContaining({
371 |           name: 'ozzyl.api.control.events',
372 |           attributes: { control: 'idempotency', outcome: 'replay' },
373 |         }),
374 |         expect.objectContaining({
375 |           name: 'ozzyl.api.dependency.operations',
376 |           attributes: {
377 |             dependency_type: 'assessment_repository',
378 |             operation: 'find_by_idempotency',
379 |             outcome: 'replay',
380 |           },
381 |         }),
382 |         expect.objectContaining({
383 |           name: 'ozzyl.api.dependency.operation.duration',
384 |           value: 5,
385 |           attributes: {
386 |             dependency_type: 'assessment_repository',
387 |             operation: 'find_by_idempotency',
388 |             outcome: 'replay',
389 |           },
390 |         }),
391 |         expect.objectContaining({
392 |           name: 'ozzyl.api.dependency.operations',
393 |           attributes: {
394 |             dependency_type: 'usage_ledger',
395 |             operation: 'reserve',
396 |             outcome: 'rejected',
397 |           },
398 |         }),
399 |       ]),
400 |     );
401 |     expect(lines.join('\n')).not.toContain('ras-sensitive');
402 |     expect(lines.join('\n')).not.toContain('org-sensitive');
403 |   });
404 |
405 |   it('records bounded risk assessment and verified-outcome distributions', () => {
406 |     const lines: string[] = [];
407 |     const recorder = createMetricRecorder({
408 |       service: 'api-test',
409 |       environment: 'test',
410 |       write: (line) => lines.push(line),
411 |     });
412 |
413 |     recordRiskAssessmentDistribution(recorder, {
414 |       decision: 'verify',
415 |       riskLevel: 'unknown',
416 |       score: 19,
417 |       confidence: 0.74,
418 |       degraded: true,
419 |       freshness: 'missing',
420 |     });
421 |     recordRiskOutcomeDistribution(recorder, {
422 |       outcome: 'delivered',
423 |       linkedAssessment: true,
424 |     });
425 |
426 |     expect(riskScoreBand(-1)).toBe('0_19');
427 |     expect(riskScoreBand(20)).toBe('20_39');
428 |     expect(riskScoreBand(1000)).toBe('80_100');
429 |     expect(riskConfidenceBand(Number.NaN)).toBe('0_24');
430 |     expect(riskConfidenceBand(0.5)).toBe('50_74');
431 |     expect(riskConfidenceBand(1)).toBe('75_100');
432 |     expect(lines.map(parseMetricLine)).toEqual([
433 |       expect.objectContaining({
434 |         name: 'ozzyl.risk.assessments',
435 |         attributes: {
436 |           decision: 'verify',
437 |           risk_level: 'unknown',
438 |           score_band: '0_19',
439 |           confidence_band: '50_74',
440 |           degraded: true,
441 |           freshness: 'missing',
442 |         },
443 |       }),
444 |       expect.objectContaining({
445 |         name: 'ozzyl.risk.outcomes',
446 |         attributes: { outcome: 'delivered', linked_assessment: true },
447 |       }),
448 |     ]);
449 |   });
450 |
451 |   it('keeps API dependency execution available when telemetry clocks and sinks fail', async () => {
452 |     const recorder = createMetricRecorder({
453 |       service: 'api-test',
454 |       environment: 'test',
455 |       write: () => {
456 |         throw new Error('collector unavailable');
457 |       },
458 |     });
459 |
460 |     await expect(
461 |       observeApiDependency(
462 |         recorder,
463 |         {
464 |           dependencyType: 'feature_provider',
465 |           operation: 'load',
466 |           monotonicNow: () => {
467 |             throw new Error('clock unavailable');
468 |           },
469 |         },
470 |         async () => 'domain-result',
471 |       ),
472 |     ).resolves.toBe('domain-result');
473 |   });
474 |
475 |   it('swallows descriptor, serialization, clock, and sink failures', () => {
476 |     const write = vi.fn(() => {
477 |       throw new Error('collector unavailable');
478 |     });
479 |     const recorder = createMetricRecorder({
480 |       service: 'ozzyl-guard-api',
481 |       environment: 'test',
482 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
483 |       write,
484 |     });
485 |
486 |     expect(() =>
487 |       recorder.record(requestMetric, 1, {
488 |         method: 'GET',
489 |         route: '/health',
490 |         status_class: '2xx',
491 |       }),
492 |     ).not.toThrow();
493 |     expect(() =>
494 |       recorder.record(requestMetric, 1, {
495 |         method: 'GET',
496 |         route: '/dynamic-customer-reference',
497 |         status_class: '2xx',
498 |       }),
499 |     ).not.toThrow();
500 |     expect(write).toHaveBeenCalledTimes(1);
501 |   });
502 | });
503 |
```

### packages/observability/src/metrics.ts

Bytes: 22853
SHA-256: b7f6412fada778b5bc8cbb78de2c31edecee54bf19f687d1fe3e6c3c71eefd7a
Lines: 1-739 of 739

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
496 | export type ApiControlType =
497 |   'authentication' | 'authorization' | 'rate_limit' | 'quota' | 'idempotency';
498 | export type ApiControlOutcome = 'allowed' | 'rejected' | 'replay' | 'conflict' | 'error';
499 |
500 | const API_CONTROL_EVENTS = defineMetric({
501 |   name: 'ozzyl.api.control.events',
502 |   kind: 'counter',
503 |   unit: '{event}',
504 |   attributes: {
505 |     control: {
506 |       values: ['authentication', 'authorization', 'rate_limit', 'quota', 'idempotency'],
507 |     },
508 |     outcome: { values: ['allowed', 'rejected', 'replay', 'conflict', 'error'] },
509 |   },
510 | });
511 |
512 | export function recordApiControlEvent(
513 |   recorder: MetricRecorder | undefined,
514 |   control: ApiControlType,
515 |   outcome: ApiControlOutcome,
516 | ): void {
517 |   recorder?.record(API_CONTROL_EVENTS, 1, { control, outcome });
518 | }
519 |
520 | export type ApiDependencyType =
521 |   | 'api_key'
522 |   | 'rate_limiter'
523 |   | 'usage_ledger'
524 |   | 'feature_provider'
525 |   | 'assessment_repository'
526 |   | 'outcome_repository'
527 |   | 'idempotency_store'
528 |   | 'courier_queue'
529 |   | 'verification_queue'
530 |   | 'otp_verifier';
531 | export type ApiDependencyOperation =
532 |   | 'resolve'
533 |   | 'consume'
534 |   | 'reserve'
535 |   | 'load'
536 |   | 'find_by_idempotency'
537 |   | 'find_by_id'
538 |   | 'save'
539 |   | 'get'
540 |   | 'set'
541 |   | 'enqueue'
542 |   | 'verify';
543 | export type ApiDependencyOutcome = 'success' | 'empty' | 'replay' | 'rejected' | 'error';
544 |
545 | const API_DEPENDENCY_ATTRIBUTES = {
546 |   dependency_type: {
547 |     values: [
548 |       'api_key',
549 |       'rate_limiter',
550 |       'usage_ledger',
551 |       'feature_provider',
552 |       'assessment_repository',
553 |       'outcome_repository',
554 |       'idempotency_store',
555 |       'courier_queue',
556 |       'verification_queue',
557 |       'otp_verifier',
558 |     ],
559 |   },
560 |   operation: {
561 |     values: [
562 |       'resolve',
563 |       'consume',
564 |       'reserve',
565 |       'load',
566 |       'find_by_idempotency',
567 |       'find_by_id',
568 |       'save',
569 |       'get',
570 |       'set',
571 |       'enqueue',
572 |       'verify',
573 |     ],
574 |   },
575 |   outcome: { values: ['success', 'empty', 'replay', 'rejected', 'error'] },
576 | } as const;
577 | const API_DEPENDENCY_OPERATION_COUNT = defineMetric({
578 |   name: 'ozzyl.api.dependency.operations',
579 |   kind: 'counter',
580 |   unit: '{operation}',
581 |   attributes: API_DEPENDENCY_ATTRIBUTES,
582 | });
583 | const API_DEPENDENCY_OPERATION_DURATION = defineMetric({
584 |   name: 'ozzyl.api.dependency.operation.duration',
585 |   kind: 'histogram',
586 |   unit: 'ms',
587 |   attributes: API_DEPENDENCY_ATTRIBUTES,
588 | });
589 |
590 | export async function observeApiDependency<T>(
591 |   recorder: MetricRecorder | undefined,
592 |   input: {
593 |     dependencyType: ApiDependencyType;
594 |     operation: ApiDependencyOperation;
595 |     classify?: (value: T) => ApiDependencyOutcome;
596 |     classifyError?: (error: unknown) => Extract<ApiDependencyOutcome, 'rejected' | 'error'>;
597 |     monotonicNow?: () => number;
598 |   },
599 |   task: () => Promise<T>,
600 | ): Promise<T> {
601 |   const monotonicNow = input.monotonicNow ?? (() => Date.now());
602 |   const startedAt = safeMonotonicNow(monotonicNow);
603 |   try {
604 |     const value = await task();
605 |     recordApiDependencyOperation(recorder, {
606 |       dependencyType: input.dependencyType,
607 |       operation: input.operation,
608 |       outcome: input.classify?.(value) ?? 'success',
609 |       durationMs: safeDuration(monotonicNow, startedAt),
610 |     });
611 |     return value;
612 |   } catch (error) {
613 |     recordApiDependencyOperation(recorder, {
614 |       dependencyType: input.dependencyType,
615 |       operation: input.operation,
616 |       outcome: input.classifyError?.(error) ?? 'error',
617 |       durationMs: safeDuration(monotonicNow, startedAt),
618 |     });
619 |     throw error;
620 |   }
621 | }
622 |
623 | export function recordApiDependencyOperation(
624 |   recorder: MetricRecorder | undefined,
625 |   input: {
626 |     dependencyType: ApiDependencyType;
627 |     operation: ApiDependencyOperation;
628 |     outcome: ApiDependencyOutcome;
629 |     durationMs: number;
630 |   },
631 | ): void {
632 |   if (!recorder) return;
633 |   const attributes = {
634 |     dependency_type: input.dependencyType,
635 |     operation: input.operation,
636 |     outcome: input.outcome,
637 |   } as const;
638 |   recorder.record(API_DEPENDENCY_OPERATION_COUNT, 1, attributes);
639 |   recorder.record(API_DEPENDENCY_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
640 | }
641 |
642 | export type RiskMetricDecision = 'allow' | 'verify' | 'review' | 'hold' | 'block';
643 | export type RiskMetricLevel = 'low' | 'moderate' | 'high' | 'critical' | 'unknown';
644 | export type RiskMetricFreshness = 'fresh' | 'stale' | 'missing';
645 | export type RiskScoreBand = '0_19' | '20_39' | '40_59' | '60_79' | '80_100';
646 | export type RiskConfidenceBand = '0_24' | '25_49' | '50_74' | '75_100';
647 | export type RiskOutcomeType =
648 |   'delivered' | 'returned' | 'cancelled_before_shipping' | 'customer_confirmed';
649 |
650 | const RISK_ASSESSMENTS = defineMetric({
651 |   name: 'ozzyl.risk.assessments',
652 |   kind: 'counter',
653 |   unit: '{assessment}',
654 |   attributes: {
655 |     decision: { values: ['allow', 'verify', 'review', 'hold', 'block'] },
656 |     risk_level: { values: ['low', 'moderate', 'high', 'critical', 'unknown'] },
657 |     score_band: { values: ['0_19', '20_39', '40_59', '60_79', '80_100'] },
658 |     confidence_band: { values: ['0_24', '25_49', '50_74', '75_100'] },
659 |     degraded: { values: [true, false] },
660 |     freshness: { values: ['fresh', 'stale', 'missing'] },
661 |   },
662 | });
663 | const RISK_OUTCOMES = defineMetric({
664 |   name: 'ozzyl.risk.outcomes',
665 |   kind: 'counter',
666 |   unit: '{outcome}',
667 |   attributes: {
668 |     outcome: {
669 |       values: ['delivered', 'returned', 'cancelled_before_shipping', 'customer_confirmed'],
670 |     },
671 |     linked_assessment: { values: [true, false] },
672 |   },
673 | });
674 |
675 | export function recordRiskAssessmentDistribution(
676 |   recorder: MetricRecorder | undefined,
677 |   input: {
678 |     decision: RiskMetricDecision;
679 |     riskLevel: RiskMetricLevel;
680 |     score: number;
681 |     confidence: number;
682 |     degraded: boolean;
683 |     freshness: RiskMetricFreshness;
684 |   },
685 | ): void {
686 |   recorder?.record(RISK_ASSESSMENTS, 1, {
687 |     decision: input.decision,
688 |     risk_level: input.riskLevel,
689 |     score_band: riskScoreBand(input.score),
690 |     confidence_band: riskConfidenceBand(input.confidence),
691 |     degraded: input.degraded,
692 |     freshness: input.freshness,
693 |   });
694 | }
695 |
696 | export function recordRiskOutcomeDistribution(
697 |   recorder: MetricRecorder | undefined,
698 |   input: { outcome: RiskOutcomeType; linkedAssessment: boolean },
699 | ): void {
700 |   recorder?.record(RISK_OUTCOMES, 1, {
701 |     outcome: input.outcome,
702 |     linked_assessment: input.linkedAssessment,
703 |   });
704 | }
705 |
706 | export function riskScoreBand(score: number): RiskScoreBand {
707 |   const bounded = Math.min(100, Math.max(0, Number.isFinite(score) ? score : 0));
708 |   if (bounded < 20) return '0_19';
709 |   if (bounded < 40) return '20_39';
710 |   if (bounded < 60) return '40_59';
711 |   if (bounded < 80) return '60_79';
712 |   return '80_100';
713 | }
714 |
715 | export function riskConfidenceBand(confidence: number): RiskConfidenceBand {
716 |   const bounded = Math.min(1, Math.max(0, Number.isFinite(confidence) ? confidence : 0));
717 |   if (bounded < 0.25) return '0_24';
718 |   if (bounded < 0.5) return '25_49';
719 |   if (bounded < 0.75) return '50_74';
720 |   return '75_100';
721 | }
722 |
723 | function safeMonotonicNow(monotonicNow: () => number): number {
724 |   try {
725 |     const value = monotonicNow();
726 |     return Number.isFinite(value) ? value : 0;
727 |   } catch {
728 |     return 0;
729 |   }
730 | }
731 |
732 | function safeDuration(monotonicNow: () => number, startedAt: number): number {
733 |   return Math.max(0, safeMonotonicNow(monotonicNow) - startedAt);
734 | }
735 |
736 | function defaultWrite(line: string): void {
737 |   console.info(line);
738 | }
739 |
```

### tracker.yml

Bytes: 22396
SHA-256: ab3ae0d12aebad4dfc775c56a9380c78c7df9e8521a02e44334e4099bc4d8aab
Lines: 1-410 of 410

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
 97 |   - critical_api_controls_and_dependencies_use_only_finite_outcomes
 98 |   - risk_quality_metrics_use_only_bounded_bands_and_never_double_count_replays
 99 |   - quota_limits_remain_distinct_from_usage_dependency_failures
100 |   - trace_context_accepts_only_strict_w3c_version_zero_nonzero_identifiers
101 |   - trace_context_is_never_authorization_tenant_or_idempotency_identity
102 |   - span_attributes_are_descriptor_owned_finite_and_exclude_business_or_sensitive_values
103 |   - durable_trace_context_is_stored_outside_payloads_and_not_archived
104 |   - api_request_ids_are_server_generated_or_bounded_opaque_values
105 |   - api_logs_never_export_raw_urls_query_values_or_dynamic_route_identifiers
106 |   - durable_worker_leases_renew_only_for_the_current_owner_while_unexpired
107 |   - lease_renewal_failure_aborts_active_provider_io
108 |   - final_queue_transitions_drain_the_heartbeat_before_state_change
109 |   - durable_retention_selects_only_old_completed_or_failed_work
110 |   - archive_evidence_is_persisted_and_exactly_validated_before_source_deletion
111 |   - durable_archive_records_exclude_payloads_provider_references_and_secret_material
112 |   - application_runtime_role_cannot_access_archives_or_delete_durable_source_rows
113 |   - durable_replay_and_audit_evidence_survives_source_archival
114 |   - retention_has_no_unattended_scheduler_or_automatic_rehydration
115 |
116 | implemented:
117 |   - typescript_monorepo_and_ci
118 |   - postgresql_schema_and_fourteen_migrations
119 |   - organization_store_membership_and_plan_foundation
120 |   - usage_metering_and_audit_foundation
121 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
122 |   - pure_versioned_explainable_risk_engine
123 |   - canonical_v1_api_and_postgresql_repositories
124 |   - provider_neutral_shared_envelope_encryption_package
125 |   - steadfast_adapter_and_browser_session_worker
126 |   - postgresql_courier_sync_worker
127 |   - verification_and_webhook_libraries
128 |   - durable_postgresql_webhook_outbox_and_event_worker
129 |   - durable_encrypted_postgresql_verification_queue_and_worker
130 |   - tenant_scoped_postgresql_otp_verification_repository
131 |   - woocommerce_shopify_custom_and_native_adapters
132 |   - authenticated_live_merchant_dashboard
133 |   - authenticated_live_platform_admin
134 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
135 |   - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
136 |   - accepted_provider_neutral_production_infrastructure_adrs
137 |   - postgresql_usage_assessment_outcome_and_operation_idempotency_race_hardening
138 |   - postgresql_courier_worker_atomic_claim_and_lease_recovery
139 |   - postgresql_webhook_worker_atomic_claim_and_lease_recovery
140 |   - postgresql_verification_worker_atomic_claim_and_lease_recovery
141 |   - verification_payload_context_phone_hash_and_otp_hash_validation
142 |   - otp_provider_delivery_removed_from_synchronous_api_requests
143 |   - migration_replay_ci_gate
144 |   - webhook_dns_destination_validation
145 |   - postgresql_migration_manifest_and_history_checksum_integrity
146 |   - clean_postgresql_backup_restore_rehearsal
147 |   - restored_schema_data_sequence_history_and_replay_comparison
148 |   - authoritative_api_key_feature_assessment_and_outcome_tenant_scope_revalidation
149 |   - secret_free_tenant_scoped_webhook_and_verification_administration_repositories
150 |   - dashboard_and_platform_admin_repository_isolation_expansion
151 |   - least_privilege_postgresql_runtime_role_policy_grant_cli_and_ci_gate
152 |   - provider_neutral_managed_envelope_v2_with_random_per_record_data_keys
153 |   - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
154 |   - native_multi_store_off_and_deterministic_shadow_rollout_controls
155 |   - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
156 |   - selected_source_post_persist_native_shadow_integration
157 |   - store_scoped_native_shadow_opt_in_and_pilot_reporting
158 |   - tenant_scoped_immutable_native_shadow_attempt_evidence
159 |   - tenant_scoped_durable_work_dead_letter_inspection
160 |   - idempotent_controlled_durable_work_replay
161 |   - immutable_secret_free_durable_work_replay_evidence
162 |   - authenticated_merchant_browser_dead_letter_operations
163 |   - csrf_protected_browser_durable_work_replay
164 |   - synchronous_per_work_item_browser_replay_key_cache
165 |   - provider_neutral_structured_logging_and_recursive_redaction
166 |   - courier_session_courier_sync_event_and_verification_worker_log_integration
167 |   - telemetry_serialization_and_sink_failure_isolation_tests
168 |   - api_request_lifecycle_and_safe_correlation_logging
169 |   - api_unhandled_error_redaction_and_sink_failure_isolation_tests
170 |   - shared_non_overlapping_lease_heartbeat_and_abort_signal
171 |   - courier_webhook_and_verification_owner_checked_lease_renewal
172 |   - provider_io_abort_on_lease_renewal_loss
173 |   - maintenance_only_durable_work_retention_preview_and_archive_cli
174 |   - secret_free_durable_work_archive_evidence
175 |   - transactional_archive_before_delete_with_skip_locked_revalidation
176 |   - runtime_role_archive_table_and_source_delete_denial
177 |   - durable_retention_unit_and_postgresql_integration_tests
178 |   - vendor_neutral_metric_descriptor_and_json_recorder
179 |   - api_request_count_and_duration_metrics
180 |   - private_worker_operation_count_duration_and_claim_failure_metrics
181 |   - finite_cardinality_metric_label_and_sink_failure_tests
182 |   - durable_repository_operation_count_and_duration_metrics
183 |   - courier_browser_webhook_and_verification_provider_call_metrics
184 |   - aggregate_durable_queue_depth_and_oldest_ready_age_gauges
185 |   - configurable_telemetry_only_queue_snapshot_cadence
186 |   - vendor_neutral_w3c_trace_context_parser_formatter_and_json_span_recorder
187 |   - api_server_and_durable_producer_spans
188 |   - courier_webhook_and_verification_durable_trace_context_persistence
189 |   - private_worker_consumer_and_provider_client_spans
190 |   - verification_failure_webhook_trace_continuation
191 |   - finite_span_attribute_and_trace_sink_failure_tests
192 |   - bounded_api_auth_authorization_rate_limit_quota_and_idempotency_metrics
193 |   - api_dependency_operation_count_and_duration_metrics
194 |   - bounded_risk_assessment_quality_distributions
195 |   - bounded_verified_outcome_distributions
196 |   - assessment_and_outcome_replay_metric_deduplication
197 |   - usage_limit_vs_dependency_failure_metric_and_http_distinction
198 |
199 | verification:
200 |   command: npm run verify
201 |   last_verified: 2026-07-28
202 |   status: local_passed_remote_ci_pending
203 |   results:
204 |     migrations: 14_of_14_with_sha256_manifest
205 |     migration_replay: previous_main_passed_no_migration_change
206 |     migration_history_integrity: previous_main_passed_no_migration_change
207 |     clean_restore_rehearsal: previous_main_passed_no_migration_change
208 |     architecture_boundaries: passed_locally_remote_ci_pending
209 |     typecheck: 20_of_20_passed_locally_remote_ci_pending
210 |     test_tasks: 31_of_31_passed_locally_remote_ci_pending
211 |     source_tests: 186_total
212 |     previous_main_remote_tests: 180_passed
213 |     migration_integrity_tests: 7_of_7_passed
214 |     postgresql_concurrency_tests: 7_of_7_passed
215 |     postgresql_courier_worker_lease_tests: 7_of_7_passed
216 |     postgresql_webhook_worker_lease_tests: 7_of_7_passed
217 |     postgresql_verification_worker_lease_tests: 7_of_7_passed
218 |     verification_payload_validation_tests: 3_of_3_passed
219 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
220 |     postgresql_runtime_role_tests: 8_of_8_passed
221 |     managed_envelope_tests: 11_of_11_passed
222 |     native_shadow_adapter_tests: 10_of_10_passed
223 |     native_shadow_api_tests: 7_of_7_passed
224 |     native_shadow_postgresql_tests: 7_of_7_passed
225 |     native_shadow_browser_tests: 2_of_2_passed
226 |     native_shadow_sdk_tests: 2_of_2_passed
227 |     native_shadow_total_tests: 28_of_28_passed
228 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
229 |     browser_dead_letter_api_tests: 3_of_3_passed
230 |     observability_tests: 21_of_21_passed_locally
231 |     api_source_tests: 52_of_52_passed_locally
232 |     critical_path_metric_integrations: 3_of_3_passed_locally
233 |     worker_metric_integration_tests: 4_of_4_passed
234 |     provider_metric_integration_tests: 4_of_4_passed
235 |     repository_metric_helper_tests: 3_of_3_passed
236 |     queue_snapshot_postgresql_tests: 3_of_3_passed
237 |     api_trace_lineage_tests: 1_of_1_passed
238 |     worker_trace_lineage_integrations: 4_of_4_passed
239 |     durable_trace_context_postgresql_tests: 3_of_3_passed
240 |     lease_heartbeat_unit_tests: 3_of_3_passed
241 |     provider_abort_on_lease_loss_tests: 3_of_3_passed
242 |     durable_retention_input_tests: 4_of_4_passed
243 |     durable_retention_postgresql_tests: 4_of_4_passed
244 |     builds: 20_of_20_passed_locally_remote_ci_pending
245 |     php_syntax: passed_locally_remote_ci_pending
246 |     high_critical_dependency_check: passed_locally_remote_ci_pending
247 |     moderate_dependency_findings: 5
248 |     documentation_links: 61_reviewed_0_known_broken
249 |   continuation_bundle:
250 |     status: refreshed_locally
251 |     canonical_main_sync: verified_at_1d31af8fe13e92431fc18a1e3d27711d314b129c
252 |     local_exporter: completed_after_critical_path_metric_docs
253 |   remote_ci:
254 |     status: passed
255 |     run_id: 30344660685
256 |     job_id: 90227950094
257 |     job: verify
258 |     tested_head: c40a2dd389d7d89619fed0141d21733f57f28d6b
259 |     merged_main_commit: 0b6125a7dfb0f4c5ba5092100de120e365e65d9b
260 |     completed: 2026-07-28
261 |     steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_eighty_tests_twenty_builds_php_all_passed
262 |   source_validation:
263 |     status: local_passed_remote_ci_pending
264 |     branch: feat/critical-path-domain-metrics
265 |     tested_head: pending_feature_commit
266 |     completed: 2026-07-28
267 |     steps: format_lint_fourteen_migration_manifest_architecture_twenty_typechecks_thirty_one_test_tasks_one_hundred_eighty_six_source_tests_twenty_builds_audit_php_yaml_links_and_secret_scan_passed_locally
268 |     shared_observability_tests: 21_of_21_passed
269 |     api_source_tests: 52_of_52_passed
270 |     critical_path_metric_integrations: 3_of_3_passed
271 |     metric_sink_failure_isolation: passed_on_authenticated_assessment
272 |     quota_limit_vs_dependency_failure: passed
273 |   pending_follow_up:
274 |     - provision_retention_maintenance_identity_and_approved_windows_holds_monitoring_recovery
275 |     - observability_exporter_collector_sampling_remaining_surface_metrics_and_managed_backend
276 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
277 |     - pilot_outcome_collection_and_calibration
278 |
279 | migrations:
280 |   immutable: true
281 |   manifest: packages/database/migrations/manifest.json
282 |   history_checksum_column: checksum_sha256_not_null
283 |   files:
284 |     - packages/database/migrations/0001_foundation.sql
285 |     - packages/database/migrations/0002_courier.sql
286 |     - packages/database/migrations/0003_risk.sql
287 |     - packages/database/migrations/0004_verification_events.sql
288 |     - packages/database/migrations/0005_durable_operations.sql
289 |     - packages/database/migrations/0006_browser_access.sql
290 |     - packages/database/migrations/0007_worker_leases.sql
291 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
292 |     - packages/database/migrations/0009_verification_delivery_queue.sql
293 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
294 |     - packages/database/migrations/0011_native_shadow_pilot.sql
295 |     - packages/database/migrations/0012_durable_work_replays.sql
296 |     - packages/database/migrations/0013_durable_work_archives.sql
297 |     - packages/database/migrations/0014_durable_trace_context.sql
298 |
299 | accepted_adrs:
300 |   - docs/adr/0006-production-deployment-topology.md
301 |   - docs/adr/0007-managed-postgresql-production-baseline.md
302 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
303 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
304 |   - docs/adr/0010-vendor-neutral-production-observability.md
305 |   - docs/adr/0011-selected-source-shadow-pilot.md
306 |   - docs/adr/0012-durable-work-dead-letter-operations.md
307 |
308 | external_dependencies:
309 |   - authorized_steadfast_test_account
310 |   - provider_authorization_review
311 |   - deployment_platform_account_region_and_budget
312 |   - managed_postgresql_provider_and_service_tier
313 |   - managed_secret_store_and_kms_vault_provider
314 |   - observability_backend_and_retention_policy
315 |   - otp_provider_account
316 |   - pilot_outcome_data
317 |
318 | next_milestone:
319 |   name: production-hardening-and-pilot-readiness
320 |   tasks:
321 |     - select_and_provision_accepted_infrastructure_providers
322 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
323 |     - validate_steadfast_with_an_authorized_account
324 |     - implement_the_selected_otp_provider_adapter
325 |     - add_distributed_cache_only_when_replica_coordination_requires_it
326 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
327 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
328 |     - calibrate_decisions_before_broad_automatic_blocking
329 |
330 | release_policy:
331 |   branch: main
332 |   before_push:
333 |     - npm_run_verify_passes
334 |     - documentation_and_tracker_are_current
335 |     - repository_review_is_clean
336 |   rules:
337 |     - no_force_push_to_main
338 |     - do_not_edit_applied_migrations
339 |     - use_descriptive_commits
340 |
341 | notes:
342 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
343 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
344 |   - github_connector_reports_public_visibility_while_expected_state_is_private
345 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
346 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
347 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
348 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
349 |   - webhook_event_payloads_do_not_include_raw_phone_values
350 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
351 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
352 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
353 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
354 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
355 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
356 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
357 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
358 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
359 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
360 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
361 |   - selected_otp_provider_module_and_credentials_remain_external
362 |   - migration_files_are_bound_to_a_committed_sha256_manifest
363 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
364 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
365 |   - migration_execution_uses_one_session_advisory_lock
366 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
367 |   - managed_provider_point_in_time_restore_drill_remains_external
368 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
369 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
370 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
371 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
372 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
373 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
374 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
375 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
376 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
377 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
378 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
379 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
380 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
381 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
382 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
383 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
384 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
385 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
386 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
387 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
388 |   - durable_replay_never_performs_provider_or_webhook_network_io
389 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
390 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
391 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
392 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
393 |   - structured_log_redaction_is_canonicalized_in_packages_observability
394 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
395 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
396 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
397 |   - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
398 |   - lease_renewal_interval_must_not_exceed_half_the_lease
399 |   - heartbeat_renewal_and_final_state_transitions_do_not_overlap
400 |   - durable_retention_cutoff_has_a_twenty_four_hour_minimum_safety_floor
401 |   - durable_retention_batches_are_globally_bounded_to_five_hundred
402 |   - completed_source_retention_baseline_is_thirty_days_pending_approval
403 |   - failed_source_retention_baseline_is_one_hundred_eighty_days_pending_approval
404 |   - archive_evidence_does_not_replace_backup_or_point_in_time_recovery
405 |   - vendor_neutral_metrics_use_only_finite_descriptor_owned_attributes
406 |   - api_metrics_use_method_canonical_route_and_status_class_only
407 |   - worker_metrics_use_worker_type_operation_and_outcome_only
408 |   - pro_context_was_refreshed_after_vendor_neutral_metrics_documentation
409 |   - update_this_file_after_every_material_milestone
410 |
```

## Skipped Files

None.
