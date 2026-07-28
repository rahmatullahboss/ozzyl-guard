# Ozzyl Guard Distributed Trace Context Continuation

Generated: 2026-07-28T08:52:43.576Z
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
## feat/distributed-trace-context
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M README.md
 M apps/api/src/index.test.ts
 M apps/api/src/index.ts
 M apps/api/src/postgres-verification.ts
 M apps/api/src/postgres.ts
 M apps/api/src/server.ts
 M docs/README.md
 M docs/database/database-design.md
 M docs/operations/operations-observability.md
 M docs/roadmap/risk-register.md
 M docs/security/security-privacy.md
 M docs/testing/testing-strategy.md
 M packages/database/migrations/manifest.json
 M packages/database/src/schema.ts
 M packages/observability/src/index.ts
 M tracker.yml
 M workers/courier-session-worker/src/index.test.ts
 M workers/courier-session-worker/src/index.ts
 M workers/courier-session-worker/src/runner.ts
 M workers/courier-sync-worker/src/index.test.ts
 M workers/courier-sync-worker/src/index.ts
 M workers/courier-sync-worker/src/postgres.ts
 M workers/courier-sync-worker/src/runner.ts
 M workers/event-worker/src/index.test.ts
 M workers/event-worker/src/index.ts
 M workers/event-worker/src/postgres.ts
 M workers/event-worker/src/runner.ts
 M workers/verification-worker/src/index.test.ts
 M workers/verification-worker/src/index.ts
 M workers/verification-worker/src/postgres.ts
 M workers/verification-worker/src/runner.ts
?? packages/database/migrations/0014_durable_trace_context.sql
?? packages/database/src/durable-trace-context.postgres.test.ts
?? packages/observability/src/tracing.test.ts
?? packages/observability/src/tracing.ts
```

## Recent Commits

```text
6425136 (HEAD -> feat/distributed-trace-context, origin/main, main) docs: record durable metrics CI evidence (#37)
53b8820 feat(observability): instrument durable operations (#36)
2e71b97 docs: record metrics CI evidence (#35)
02be8d2 feat(observability): add safe application metrics (#34)
0851020 docs: record retention CI evidence (#33)
8788da4 feat(database): archive terminal durable work (#32)
f19e9b4 docs: record worker heartbeat CI evidence (#31)
6ab01a7 feat(workers): renew durable job leases (#30)
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
  7 | A runnable standalone MVP foundation and twenty production-hardening slices are complete:
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
 28 | 20. vendor-neutral W3C trace-context propagation from API server and durable producer spans through courier, webhook, and verification queue rows into worker consumer and provider-client spans, with finite attributes, nullable legacy context, verification-failure webhook continuation, and telemetry-failure isolation.
 29 |
 30 | Concrete provider selection and provisioning remain external production work.
 31 |
 32 | ## Completed
 33 |
 34 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 35 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 36 | - [x] Canonical shared API/error/event contracts
 37 | - [x] PostgreSQL/Drizzle schema and fourteen append-only migrations
 38 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 39 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 40 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 41 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 42 | - [x] Courier adapter contract and Steadfast normalized adapter
 43 | - [x] Playwright Steadfast session driver with structured errors
 44 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 45 | - [x] Runnable PostgreSQL courier session and observation workers
 46 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 47 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 48 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 49 | - [x] API OTP send returns queued work without provider network I/O
 50 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 51 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 52 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 53 | - [x] Explicit-role platform admin with live global operations data
 54 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 55 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 56 | - [x] Architecture dependency-boundary CI guard
 57 | - [x] Provider-neutral production deployment topology ADR
 58 | - [x] Managed PostgreSQL production baseline ADR
 59 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 60 | - [x] Managed secrets and KMS envelope-encryption ADR
 61 | - [x] Vendor-neutral OpenTelemetry observability ADR
 62 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 63 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 64 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 65 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 66 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 67 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 68 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 69 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 70 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 71 | - [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
 72 | - [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
 73 | - [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
 74 | - [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
 75 | - [x] Strict W3C version-00 `traceparent` parsing rejects malformed and all-zero identifiers; bounded optional `tracestate` is propagated but not exported as a span attribute
 76 | - [x] API requests emit server spans and durable assessment/outcome/courier/OTP enqueue operations emit producer spans with finite route/operation/queue/outcome attributes
 77 | - [x] Courier, webhook, and verification rows persist nullable validated trace context outside payloads; legacy null rows remain processable and archive evidence does not copy trace context
 78 | - [x] Courier, webhook, verification, and courier-session workers emit consumer/root operation spans with provider-client child spans and no business identifiers, phone/OTP values, credentials, URLs, payloads, or arbitrary error codes
 79 | - [x] Verification failure events continue the active worker trace into the newly queued webhook delivery
 80 | - [x] Missing or invalid persisted context starts a fresh root trace, while trace validation, clock, serialization, or sink failure cannot change API or worker behavior
 81 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 82 | - [x] Concurrent usage reservations cannot exceed the plan limit
 83 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 84 | - [x] Concurrent outcome writes resolve as one insert and one replay
 85 | - [x] Operation idempotency records remain isolated by organization and store
 86 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 87 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 88 | - [x] Expired or previous courier owners cannot complete or fail jobs
 89 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 90 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 91 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 92 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 93 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 94 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 95 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 96 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 97 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 98 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 99 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
100 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
101 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
102 | - [x] Verification scope mismatch fails both the job and authoritative session closed
103 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
104 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
105 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
106 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
107 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
108 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
109 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
110 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
111 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
112 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
113 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
114 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
115 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
116 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
117 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
118 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
119 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
120 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
121 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
122 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
123 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
124 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
125 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
126 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
127 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
128 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
129 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
130 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
131 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
132 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
133 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
134 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
135 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
136 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
137 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
138 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
139 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
140 |
141 | ## Verified baseline
142 |
143 | - Formatting check: passed
144 | - ESLint with zero warnings: passed
145 | - Fourteen migration files ordered/non-empty/non-destructive: passed locally; current source-branch CI is pending
146 | - First migration apply and immediate migration replay: previous merged baseline passed remotely; migration 0014 source-branch CI is pending
147 | - Architecture import boundaries: passed locally; current source-branch CI is pending
148 | - Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
149 | - Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
150 | - Repository assertion inventory: 180 source tests; previous merged remote baseline is 168; current PostgreSQL-integrated source-branch CI is pending
151 | - Tracing coverage: 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests are present; real PostgreSQL execution is pending CI
152 | - Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
153 | - WooCommerce PHP syntax: passed locally; current source-branch CI is pending
154 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
155 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
156 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
157 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
158 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
159 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
160 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
161 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
162 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
163 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
164 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
165 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
166 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
167 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
168 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
169 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
170 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
171 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
172 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
173 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
174 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
175 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
176 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
177 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
178 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
179 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
180 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
181 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
182 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
183 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
184 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
185 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
186 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
187 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
188 | - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
189 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
190 | - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
191 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
192 | - Canonical documentation links before this slice: zero known broken internal links
193 | - `tracker.yml` YAML structure remains valid
194 | - Prohibited source-pattern search: no matches
195 |
196 | The repository-local continuation exporter was refreshed after distributed trace-context documentation and tracker updates were finalized.
197 |
198 | ## Next production milestone
199 |
200 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
201 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
202 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
203 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
204 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
205 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
206 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
207 |
208 | ## External blockers
209 |
210 | - Authorized Steadfast merchant/test credentials
211 | - Steadfast provider-terms and merchant-authorization review
212 | - Deployment platform, account, primary region, and budget
213 | - Managed PostgreSQL provider and service tier
214 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
215 | - Managed secret store and KMS/vault provider
216 | - OpenTelemetry exporter/collector, sampling policy, broader API/domain repository metrics, managed observability backend, dashboards, alerts, and retention policy
217 | - OTP provider account and credentials
218 | - Production account recovery/MFA or managed identity-provider decision
219 | - Repository visibility correction from currently reported public to expected private
220 | - Pilot outcome data for false-positive/false-negative calibration
221 |
222 | ## Non-negotiable continuation rules
223 |
224 | - Do not add a second risk engine.
225 | - Do not call providers from the risk engine or synchronous checkout path.
226 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
227 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
228 | - Do not use API keys as dashboard user sessions.
229 | - Require organization/store scope in all merchant repositories, events, and jobs.
230 | - Add new migrations; never edit applied migrations.
231 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
232 | - Keep Redis/cache state non-authoritative.
233 | - Keep unknown/provider failure explicit and policy-controlled.
234 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
235 |

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
 54 |
 55 | ## Source SaaS conflict resolutions
 56 |
 57 | | Conflict                                                                 | Decision                                                                                   |
 58 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 59 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 60 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 61 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 62 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 63 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 64 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 65 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 66 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 67 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 68 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 69 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 70 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 71 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 72 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 73 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 74 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 75 |
 76 | ## Approved reuse scope
 77 |
 78 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 79 | - Bangladesh phone normalization after tests
 80 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 81 | - WooCommerce settings/order hook/admin display skeleton
 82 | - API-key hash/display-prefix and usage-event concepts
 83 |
 84 | No product source code was copied during Phase 0.
 85 |
 86 | ## Pending decisions
 87 |
 88 | These require provider selection, provisioning, or separate ADRs before production implementation:
 89 |
 90 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 91 | - Specific deployment platform, account, and primary region
 92 | - Specific managed PostgreSQL provider and service tier
 93 | - Specific managed secret store and KMS/vault provider
 94 | - Specific observability backend and retention policy
 95 | - Redis-compatible cache provider when distributed coordination is required
 96 | - Dedicated broker only if measured scale requires superseding ADR 0008
 97 | - Worker scheduler/runtime implementation on the selected deployment platform
 98 | - OTP provider
 99 |
100 | ## External requirements
101 |
102 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
103 |
104 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
105 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, README.md, apps/api/src/index.test.ts, apps/api/src/index.ts, apps/api/src/postgres-verification.ts, apps/api/src/postgres.ts, apps/api/src/server.ts, docs/README.md, docs/database/database-design.md, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/database/migrations/manifest.json, packages/database/src/schema.ts, packages/observability/src/index.ts, tracker.yml, workers/courier-session-worker/src/index.test.ts, workers/courier-session-worker/src/index.ts, workers/courier-session-worker/src/runner.ts, workers/courier-sync-worker/src/index.test.ts, workers/courier-sync-worker/src/index.ts, workers/courier-sync-worker/src/postgres.ts, workers/courier-sync-worker/src/runner.ts, workers/event-worker/src/index.test.ts, workers/event-worker/src/index.ts, workers/event-worker/src/postgres.ts, workers/event-worker/src/runner.ts, workers/verification-worker/src/index.test.ts, workers/verification-worker/src/index.ts, workers/verification-worker/src/postgres.ts, workers/verification-worker/src/runner.ts, packages/database/migrations/0014_durable_trace_context.sql, packages/database/src/durable-trace-context.postgres.test.ts, packages/observability/src/tracing.test.ts, packages/observability/src/tracing.ts
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, docs/README.md, eslint.config.js, package.json, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, apps/api/src/index.test.ts, apps/api/src/index.ts, apps/api/src/postgres-verification.ts, apps/api/src/postgres.ts, apps/api/src/server.ts, docs/database/database-design.md, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/database/migrations/0014_durable_trace_context.sql, packages/database/migrations/manifest.json, packages/database/src/durable-trace-context.postgres.test.ts, packages/database/src/schema.ts, packages/observability/src/index.ts, packages/observability/src/tracing.test.ts, packages/observability/src/tracing.ts, tracker.yml, workers/courier-session-worker/src/index.test.ts, workers/courier-session-worker/src/index.ts, workers/courier-session-worker/src/runner.ts, workers/courier-sync-worker/src/index.test.ts, workers/courier-sync-worker/src/index.ts, workers/courier-sync-worker/src/postgres.ts, workers/courier-sync-worker/src/runner.ts, workers/event-worker/src/index.test.ts, workers/event-worker/src/index.ts, workers/event-worker/src/postgres.ts, workers/event-worker/src/runner.ts, workers/verification-worker/src/index.test.ts, workers/verification-worker/src/index.ts, workers/verification-worker/src/postgres.ts, workers/verification-worker/src/runner.ts

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

Bytes: 3384
SHA-256: cc1bd7e6234fe476f0b047d3b3c0dd5b1d56412b1e4b7c5404dcbb527b0b1780
Lines: 1-56 of 56

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The repository/provider/queue metrics milestone is merged on `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`; feature CI run `30329769797`, job `90182279338`, passed thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. The current distributed trace-context source branch adds strict W3C API server/producer spans, durable courier/webhook/verification context columns, worker consumer/provider child spans, and verification-failure webhook continuation without business identifiers, contact data, credentials, URLs, payloads, responses, or arbitrary error attributes. Fourteen-migration PostgreSQL-integrated source-branch CI evidence is pending.
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

Bytes: 8223
SHA-256: ff22e5497031f67a5fdc8ed6f4218cffb79746e3a37fb1d7f5f8e1d3782fc6ca
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
 49 | - Vendor-neutral JSON metric points for API requests, private-worker operations, durable repository transitions, provider calls, queue depth/age, and claim failures, with finite categorical labels and telemetry-failure isolation
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

Bytes: 28614
SHA-256: f44f59a317730f71334f7e6c33f5340674bb3d3486259d52d407cf91e47d517c
Lines: 1-235 of 235

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and twenty production-hardening slices are complete:
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
 28 | 20. vendor-neutral W3C trace-context propagation from API server and durable producer spans through courier, webhook, and verification queue rows into worker consumer and provider-client spans, with finite attributes, nullable legacy context, verification-failure webhook continuation, and telemetry-failure isolation.
 29 |
 30 | Concrete provider selection and provisioning remain external production work.
 31 |
 32 | ## Completed
 33 |
 34 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 35 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 36 | - [x] Canonical shared API/error/event contracts
 37 | - [x] PostgreSQL/Drizzle schema and fourteen append-only migrations
 38 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 39 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 40 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 41 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 42 | - [x] Courier adapter contract and Steadfast normalized adapter
 43 | - [x] Playwright Steadfast session driver with structured errors
 44 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 45 | - [x] Runnable PostgreSQL courier session and observation workers
 46 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 47 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 48 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 49 | - [x] API OTP send returns queued work without provider network I/O
 50 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 51 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 52 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 53 | - [x] Explicit-role platform admin with live global operations data
 54 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 55 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 56 | - [x] Architecture dependency-boundary CI guard
 57 | - [x] Provider-neutral production deployment topology ADR
 58 | - [x] Managed PostgreSQL production baseline ADR
 59 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 60 | - [x] Managed secrets and KMS envelope-encryption ADR
 61 | - [x] Vendor-neutral OpenTelemetry observability ADR
 62 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 63 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 64 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 65 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 66 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 67 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 68 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 69 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 70 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 71 | - [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
 72 | - [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
 73 | - [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
 74 | - [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
 75 | - [x] Strict W3C version-00 `traceparent` parsing rejects malformed and all-zero identifiers; bounded optional `tracestate` is propagated but not exported as a span attribute
 76 | - [x] API requests emit server spans and durable assessment/outcome/courier/OTP enqueue operations emit producer spans with finite route/operation/queue/outcome attributes
 77 | - [x] Courier, webhook, and verification rows persist nullable validated trace context outside payloads; legacy null rows remain processable and archive evidence does not copy trace context
 78 | - [x] Courier, webhook, verification, and courier-session workers emit consumer/root operation spans with provider-client child spans and no business identifiers, phone/OTP values, credentials, URLs, payloads, or arbitrary error codes
 79 | - [x] Verification failure events continue the active worker trace into the newly queued webhook delivery
 80 | - [x] Missing or invalid persisted context starts a fresh root trace, while trace validation, clock, serialization, or sink failure cannot change API or worker behavior
 81 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 82 | - [x] Concurrent usage reservations cannot exceed the plan limit
 83 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 84 | - [x] Concurrent outcome writes resolve as one insert and one replay
 85 | - [x] Operation idempotency records remain isolated by organization and store
 86 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 87 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 88 | - [x] Expired or previous courier owners cannot complete or fail jobs
 89 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 90 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 91 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 92 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 93 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 94 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 95 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 96 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 97 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 98 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 99 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
100 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
101 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
102 | - [x] Verification scope mismatch fails both the job and authoritative session closed
103 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
104 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
105 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
106 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
107 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
108 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
109 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
110 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
111 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
112 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
113 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
114 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
115 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
116 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
117 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
118 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
119 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
120 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
121 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
122 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
123 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
124 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
125 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
126 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
127 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
128 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
129 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
130 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
131 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
132 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
133 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
134 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
135 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
136 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
137 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
138 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
139 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
140 |
141 | ## Verified baseline
142 |
143 | - Formatting check: passed
144 | - ESLint with zero warnings: passed
145 | - Fourteen migration files ordered/non-empty/non-destructive: passed locally; current source-branch CI is pending
146 | - First migration apply and immediate migration replay: previous merged baseline passed remotely; migration 0014 source-branch CI is pending
147 | - Architecture import boundaries: passed locally; current source-branch CI is pending
148 | - Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
149 | - Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
150 | - Repository assertion inventory: 180 source tests; previous merged remote baseline is 168; current PostgreSQL-integrated source-branch CI is pending
151 | - Tracing coverage: 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests are present; real PostgreSQL execution is pending CI
152 | - Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
153 | - WooCommerce PHP syntax: passed locally; current source-branch CI is pending
154 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
155 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
156 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
157 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
158 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
159 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
160 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
161 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
162 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
163 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
164 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
165 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
166 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
167 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
168 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
169 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
170 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
171 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
172 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
173 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
174 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
175 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
176 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
177 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
178 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
179 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
180 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
181 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
182 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
183 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
184 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
185 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
186 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
187 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
188 | - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
189 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
190 | - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
191 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
192 | - Canonical documentation links before this slice: zero known broken internal links
193 | - `tracker.yml` YAML structure remains valid
194 | - Prohibited source-pattern search: no matches
195 |
196 | The repository-local continuation exporter was refreshed after distributed trace-context documentation and tracker updates were finalized.
197 |
198 | ## Next production milestone
199 |
200 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
201 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
202 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
203 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
204 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
205 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
206 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
207 |
208 | ## External blockers
209 |
210 | - Authorized Steadfast merchant/test credentials
211 | - Steadfast provider-terms and merchant-authorization review
212 | - Deployment platform, account, primary region, and budget
213 | - Managed PostgreSQL provider and service tier
214 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
215 | - Managed secret store and KMS/vault provider
216 | - OpenTelemetry exporter/collector, sampling policy, broader API/domain repository metrics, managed observability backend, dashboards, alerts, and retention policy
217 | - OTP provider account and credentials
218 | - Production account recovery/MFA or managed identity-provider decision
219 | - Repository visibility correction from currently reported public to expected private
220 | - Pilot outcome data for false-positive/false-negative calibration
221 |
222 | ## Non-negotiable continuation rules
223 |
224 | - Do not add a second risk engine.
225 | - Do not call providers from the risk engine or synchronous checkout path.
226 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
227 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
228 | - Do not use API keys as dashboard user sessions.
229 | - Require organization/store scope in all merchant repositories, events, and jobs.
230 | - Add new migrations; never edit applied migrations.
231 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
232 | - Keep Redis/cache state non-authoritative.
233 | - Keep unknown/provider failure explicit and policy-controlled.
234 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
235 |
```

### .ai-bridge/decisions.md

Bytes: 18825
SHA-256: 1d6cfee8e35177943ae6b6d03943fb334f71d12e3eb4270d5bbe5e8abe961bf1
Lines: 1-105 of 105

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
 54 |
 55 | ## Source SaaS conflict resolutions
 56 |
 57 | | Conflict                                                                 | Decision                                                                                   |
 58 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 59 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 60 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 61 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 62 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 63 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 64 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 65 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 66 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 67 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 68 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 69 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 70 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 71 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 72 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 73 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 74 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 75 |
 76 | ## Approved reuse scope
 77 |
 78 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 79 | - Bangladesh phone normalization after tests
 80 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 81 | - WooCommerce settings/order hook/admin display skeleton
 82 | - API-key hash/display-prefix and usage-event concepts
 83 |
 84 | No product source code was copied during Phase 0.
 85 |
 86 | ## Pending decisions
 87 |
 88 | These require provider selection, provisioning, or separate ADRs before production implementation:
 89 |
 90 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 91 | - Specific deployment platform, account, and primary region
 92 | - Specific managed PostgreSQL provider and service tier
 93 | - Specific managed secret store and KMS/vault provider
 94 | - Specific observability backend and retention policy
 95 | - Redis-compatible cache provider when distributed coordination is required
 96 | - Dedicated broker only if measured scale requires superseding ADR 0008
 97 | - Worker scheduler/runtime implementation on the selected deployment platform
 98 | - OTP provider
 99 |
100 | ## External requirements
101 |
102 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
103 |
104 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
105 |
```

### .ai-bridge/implementation-status.md

Bytes: 28656
SHA-256: cccf1a96ee0bda3b55f1eee4d35522629227b7a6ab950a9ee1f15d0ccfd63b73
Lines: 1-192 of 192

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
 17 | | Continuation documentation | baseline | Tracker, plan, status, decisions, and generated `pro-context.md` are being refreshed for the distributed trace-context source branch                  |
 18 | | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
 19 | | Monorepo/tooling           | done     | 20 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
 20 | | CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
 21 | | Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
 22 | | Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
 23 | | Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |
 24 |
 25 | ## Product implementation
 26 |
 27 | | Area                             | Status   | Notes                                                                                                                                                                                                            |
 28 | | -------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                                                  |
 30 | | Database/migrations              | done     | Fourteen append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                                                |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                                               |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                                                  |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                                            |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                                    |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                                    |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                                    |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                                             |
 38 | | Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                                        |
 39 | | Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                                                |
 40 | | Durable work architecture        | done     | Claims, renewable leases, dead-letter replay, plus maintenance-only bounded terminal archival with evidence-before-delete and runtime-role denial                                                                |
 41 | | Durable work operations          | done     | Failed work supports scoped replay; old completed/failed rows support preview-first maintenance archival while immutable replay/audit evidence remains                                                           |
 42 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                                           |
 43 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                                                  |
 44 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                                         |
 45 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                                         |
 46 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                                      |
 47 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                                                   |
 48 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                                         |
 49 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                                             |
 50 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                                              |
 51 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                                    |
 52 | | OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                                                  |
 53 | | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                                                   |
 54 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                                        |
 55 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                                       |
 56 | | PostgreSQL runtime role          | done     | Explicit DML grants, no migration history/DELETE/DDL/archive access; separate retention-maintenance identity and managed provisioning remain                                                                     |
 57 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                                           |
 58 | | Observability                    | baseline | Redacted logs, finite metrics/gauges, and W3C API-to-durable-worker/provider trace propagation are implemented; exporter/collector, sampling, broader metrics, backend, dashboards, alerts, and retention remain |
 59 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                                        |
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
 85 | - initial migration apply: previous merged baseline passed with non-null history checksums; migration 0014 apply is pending source-branch CI
 86 | - immediate migration replay: previous merged baseline passed as a clean no-op; migration 0014 replay is pending source-branch CI
 87 | - `npm run db:integrity`: previous merged baseline passed complete contiguous history and checksums
 88 | - `npm run db:restore-rehearsal`: previous merged baseline passed clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay
 89 | - `npm run check:architecture`: passed locally; current source-branch CI is pending
 90 | - `npm run typecheck`: 20/20 workspaces passed locally; current source-branch CI is pending
 91 | - `npm run test`: 31/31 Turbo tasks passed locally; source inventory is 180 tests and previous merged remote baseline is 168
 92 | - `npm run build`: 20/20 workspace builds passed locally; current source-branch CI is pending
 93 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 94 | - Observability tests prove fixed log metadata/redaction, finite metric descriptors, strict W3C trace parsing/formatting/persistence, finite span attributes, one-shot completion, exporter-neutral JSON points, and sink/clock/ID-generation failure isolation
 95 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, bounded request count/duration metrics, safe unhandled-error serialization, and request availability during log/metric sink failure
 96 | - Courier-session, courier-sync, event, and verification tests prove bounded worker/provider count/duration metrics omit account/job/event/endpoint/phone/OTP/credential/URL/vendor/error-text values; shared tests cover repository outcomes, claim failures, aggregate gauges, and telemetry isolation
 97 | - Courier, webhook, and verification PostgreSQL suites include aggregate queue-depth and oldest-ready-age snapshots without row or tenant identifiers
 98 | - API and four worker tests prove server→producer→consumer→provider trace lineage while omitting request/tenant/job/event/account/phone/OTP/credential/URL/payload/error values
 99 | - Three PostgreSQL durable-context tests cover valid/null round-trip, malformed context rejection across all three durable tables, and all-zero trace/span rejection; real execution is pending source-branch CI
100 | - Lease-heartbeat tests prove non-overlapping renewal, owner/expiry enforcement, abort-on-renewal-loss propagation, and heartbeat drain before final courier/webhook/verification transitions
101 | - Retention tests prove cutoff/status/batch/run-ID validation, terminal-only preview, payload-free evidence, archive-before-delete atomicity, ineligible-row preservation, replay-ledger preservation, idempotent reruns, and runtime archive-access denial
102 | - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
103 | - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
104 | - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
105 | - Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
106 | - Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
107 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
108 | - Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
109 | - Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
110 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
111 | - Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
112 | - Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
113 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
114 | - Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
115 | - Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
116 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
117 | - Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
118 | - Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
119 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
120 | - Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
121 | - Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
122 | - Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
123 | - Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
124 | - Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
125 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
126 | - Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
127 | - Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
128 | - Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
129 | - Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
130 | - Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
131 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
132 | - Five real-PostgreSQL durable-work tests cover exact-store owner/admin listing, negative member authorization, concurrent duplicate replay, one immutable ledger/audit outcome, courier lease reset, scoped unexpired verification reopening, structural/expired rejection, cross-tenant isolation, and idempotency conflicts
133 | - Seven runtime-role tests now include insert-only replay-ledger privileges alongside migration-history, DELETE, DDL, ownership, and elevated-role denials
134 | - Durable-work dead-letter final run `29644234591`, job `88079650134`: twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
135 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
136 | - Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping
137 | - Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
138 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
139 | - Structured observability final run `30317190971`, job `90145176143`: twelve migrations, 20 typechecks, 31 Turbo test/build dependency tasks with 132 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
140 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
141 | - API request observability final run `30318999952`, job `90150731352`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 136 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
142 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
143 | - Durable worker heartbeat final run `30322016826`, job `90159676583`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 145 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
144 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
145 | - Durable work retention final run `30325144458`, job `90168867190`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 154 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
146 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
147 | - Vendor-neutral metrics final run `30327450803`, job `90175680964`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 161 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
148 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
149 | - Repository/provider/queue metrics final run `30329769797`, job `90182279338`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
150 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
151 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
152 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
153 | - Previous canonical documentation checks found zero broken internal links
154 | - Prohibited insecure-pattern scan: zero matches
155 |
156 | The repository-local exporter was refreshed after distributed trace-context documentation and tracker updates were finalized. Current source-branch remote CI is pending.
157 |
158 | ## External blockers and production requirements
159 |
160 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
161 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
162 | - Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
163 | - Managed secret store and KMS/vault provider
164 | - OpenTelemetry exporter/collector, sampling policy, broader API/domain repository metrics, managed observability backend, retention, dashboards, alerts, and incident channels
165 | - Optional Redis-compatible cache only when distributed coordination is required
166 | - Authorized Steadfast test/merchant account
167 | - Provider-terms and merchant-authorization review
168 | - OTP provider selection/account
169 | - Production account recovery/MFA or managed identity-provider decision
170 | - Pilot merchants and verified outcome data for calibration
171 |
172 | ## Remaining risks
173 |
174 | - Steadfast UI/internal endpoint changes can break automation.
175 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
176 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
177 | - In-process API and browser-session rate limiting is not distributed across replicas.
178 | - Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
179 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
180 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
181 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
182 | - GitHub currently reports public repository visibility although the expected policy is private.
183 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
184 | - Structured logs, finite-cardinality metrics/gauges, and API-to-durable-worker/provider trace propagation are implemented, but broader API/domain repository metrics, exporter/collector, sampling policy, dashboards, alerts, managed backend, and telemetry retention are not yet implemented.
185 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
186 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
187 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
188 |
189 | ## Next milestone
190 |
191 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
192 |
```

### apps/api/src/index.test.ts

Bytes: 17038
SHA-256: bb13e7870ba414db7bd12eccbc6ee7e8fad632877f4c3a9e20730c68f965e5e5
Lines: 1-513 of 513

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { describe, expect, it } from 'vitest';
  3 | import { MemoryUsageLedger } from '@ozzyl/billing';
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
 34 |   rawApiKey?: string;
 35 |   logger?: StructuredLogger;
 36 |   metrics?: MetricRecorder;
 37 |   tracer?: Tracer;
 38 |   monotonicNow?: () => number;
 39 |   refreshQueue?: {
 40 |     enqueue(input: {
 41 |       organizationId: string;
 42 |       storeId: string;
 43 |       phone: string;
 44 |       phoneHash: string;
 45 |       providers: string[];
 46 |       force: boolean;
 47 |       traceContext?: PersistedTraceContext;
 48 |     }): Promise<{ jobId: string }>;
 49 |   };
 50 |   verificationRequests?: {
 51 |     enqueueSend(input: {
 52 |       organizationId: string;
 53 |       storeId: string;
 54 |       assessmentId?: string;
 55 |       phone: string;
 56 |       phoneHash: string;
 57 |       purpose: string;
 58 |       idempotencyKey: string;
 59 |       traceContext?: PersistedTraceContext;
 60 |     }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
 61 |   };
 62 |   otpVerifier?: {
 63 |     verify(input: {
 64 |       organizationId: string;
 65 |       storeId: string;
 66 |       verificationId: string;
 67 |       otp: string;
 68 |     }): Promise<{ verified: true }>;
 69 |   };
 70 | }) {
 71 |   let counter = 0;
 72 |   const identity =
 73 |     input?.identity ??
 74 |     ({
 75 |       apiKeyId: 'key_1',
 76 |       organizationId: 'org_1',
 77 |       storeId: 'store_1',
 78 |       environment: 'test',
 79 |       plan: 'free',
 80 |       scopes: new Set(['*']),
 81 |     } satisfies ApiKeyIdentity);
 82 |   const acceptedKey = input?.rawApiKey ?? apiKey;
 83 |   return createApiApp({
 84 |     apiKeys: {
 85 |       async resolve(rawApiKey) {
 86 |         return rawApiKey === acceptedKey ? identity : null;
 87 |       },
 88 |     },
 89 |     usage: new MemoryUsageLedger(),
 90 |     features: new MissingFeatureProvider(),
 91 |     assessments: input?.assessments ?? new MemoryAssessmentRepository(),
 92 |     outcomes: new MemoryOutcomeRepository(),
 93 |     refreshQueue: input?.refreshQueue ?? new MemoryRefreshQueue(),
 94 |     idempotency: new MemoryOperationIdempotencyStore(),
 95 |     rateLimiter: new MemoryRateLimiter(),
 96 |     hashPhone: (phone) => createHmac('sha256', 'x'.repeat(32)).update(phone).digest('hex'),
 97 |     ...(input?.verificationRequests === undefined
 98 |       ? {}
 99 |       : { verificationRequests: input.verificationRequests }),
100 |     ...(input?.otpVerifier === undefined ? {} : { otpVerifier: input.otpVerifier }),
101 |     ...(input?.logger === undefined ? {} : { logger: input.logger }),
102 |     ...(input?.metrics === undefined ? {} : { metrics: input.metrics }),
103 |     ...(input?.tracer === undefined ? {} : { tracer: input.tracer }),
104 |     ...(input?.monotonicNow === undefined ? {} : { monotonicNow: input.monotonicNow }),
105 |     idFactory: (prefix) => `${prefix}_${++counter}`,
106 |     now: () => new Date('2026-07-16T10:00:00.000Z'),
107 |   });
108 | }
109 |
110 | const assessmentRequest = {
111 |   phone: '01712345678',
112 |   order_total: 1500,
113 |   payment_method: 'cod',
114 | };
115 |
116 | const authorizedHeaders = {
117 |   Authorization: `Bearer ${apiKey}`,
118 |   'Content-Type': 'application/json',
119 |   'Idempotency-Key': 'order-1001',
120 | };
121 |
122 | describe('Ozzyl Guard API', () => {
123 |   it('records a bounded request lifecycle without logging dynamic path values', async () => {
124 |     const lines: string[] = [];
125 |     const metricLines: string[] = [];
126 |     const ticks = [100, 125];
127 |     const logger = createStructuredLogger({
128 |       service: 'api-test',
129 |       environment: 'test',
130 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
131 |       write: (line) => lines.push(line),
132 |     });
133 |     const metrics = createMetricRecorder({
134 |       service: 'api-test',
135 |       environment: 'test',
136 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
137 |       write: (line) => metricLines.push(line),
138 |     });
139 |     const response = await createTestApp({
140 |       logger,
141 |       metrics,
142 |       monotonicNow: () => ticks.shift() ?? 125,
143 |     }).request('/v1/risk-assessments/ras-sensitive-value?query=discard-me', {
144 |       headers: {
145 |         Authorization: `Bearer ${apiKey}`,
146 |         'X-Request-ID': 'req_client-123',
147 |       },
148 |     });
149 |
150 |     expect(response.status).toBe(404);
151 |     expect(response.headers.get('X-Request-ID')).toBe('req_client-123');
152 |     expect(lines).toHaveLength(1);
153 |     expect(JSON.parse(lines[0] ?? '{}')).toMatchObject({
154 |       level: 'warn',
155 |       event: 'api.request.completed',
156 |       request_id: 'req_client-123',
157 |       method: 'GET',
158 |       route: '/v1/risk-assessments/:assessment_id',
159 |       status_code: 404,
160 |       status_class: '4xx',
161 |       duration_ms: 25,
162 |     });
163 |     expect(lines.join('\n')).not.toContain('ras-sensitive-value');
164 |     expect(lines.join('\n')).not.toContain('discard-me');
165 |     expect(metricLines.map(parseMetricLine)).toEqual([
166 |       expect.objectContaining({
167 |         name: 'ozzyl.api.requests',
168 |         kind: 'counter',
169 |         value: 1,
170 |         attributes: {
171 |           method: 'GET',
172 |           route: '/v1/risk-assessments/:assessment_id',
173 |           status_class: '4xx',
174 |         },
175 |       }),
176 |       expect.objectContaining({
177 |         name: 'ozzyl.api.request.duration',
178 |         kind: 'histogram',
179 |         unit: 'ms',
180 |         value: 25,
181 |         attributes: {
182 |           method: 'GET',
183 |           route: '/v1/risk-assessments/:assessment_id',
184 |           status_class: '4xx',
185 |         },
186 |       }),
187 |     ]);
188 |     expect(metricLines.join('\n')).not.toContain('ras-sensitive-value');
189 |     expect(metricLines.join('\n')).not.toContain('discard-me');
190 |   });
191 |
192 |   it('continues W3C trace context through an API producer into durable work', async () => {
193 |     const points: SpanPoint[] = [];
194 |     const spanIds = ['2222222222222222', '3333333333333333'];
195 |     let monotonic = 0;
196 |     const tracer = createTracer({
197 |       service: 'api-test',
198 |       environment: 'test',
199 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
200 |       monotonicNow: () => ++monotonic,
201 |       generateSpanId: () => spanIds.shift()!,
202 |       write: (_line, point) => points.push(point),
203 |     });
204 |     let queuedTrace: PersistedTraceContext | undefined;
205 |     const traceId = '11111111111111111111111111111111';
206 |     const parentSpanId = 'aaaaaaaaaaaaaaaa';
207 |     const response = await createTestApp({
208 |       tracer,
209 |       refreshQueue: {
210 |         async enqueue(input) {
211 |           queuedTrace = input.traceContext;
212 |           return { jobId: 'cjob_trace' };
213 |         },
214 |       },
215 |     }).request('/v1/courier-observations/refresh', {
216 |       method: 'POST',
217 |       headers: {
218 |         ...authorizedHeaders,
219 |         traceparent: `00-${traceId}-${parentSpanId}-01`,
220 |         tracestate: 'vendor=value',
221 |       },
222 |       body: JSON.stringify({ phone: '01712345678', providers: ['steadfast'], force: false }),
223 |     });
224 |
225 |     expect(response.status).toBe(202);
226 |     expect(response.headers.get('traceparent')).toBe(`00-${traceId}-2222222222222222-01`);
227 |     expect(response.headers.get('tracestate')).toBe('vendor=value');
228 |     expect(queuedTrace).toEqual({
229 |       traceParent: `00-${traceId}-3333333333333333-01`,
230 |       traceState: 'vendor=value',
231 |     });
232 |     expect(points).toHaveLength(2);
233 |     expect(points).toEqual(
234 |       expect.arrayContaining([
235 |         expect.objectContaining({
236 |           name: 'ozzyl.api.request',
237 |           trace_id: traceId,
238 |           span_id: '2222222222222222',
239 |           parent_span_id: parentSpanId,
240 |           attributes: {
241 |             method: 'POST',
242 |             route: '/v1/courier-observations/refresh',
243 |             status_class: '2xx',
244 |           },
245 |         }),
246 |         expect.objectContaining({
247 |           name: 'ozzyl.api.durable.produce',
248 |           trace_id: traceId,
249 |           span_id: '3333333333333333',
250 |           parent_span_id: '2222222222222222',
251 |           attributes: {
252 |             operation: 'courier_refresh',
253 |             queue_type: 'courier_refresh',
254 |             outcome: 'completed',
255 |           },
256 |         }),
257 |       ]),
258 |     );
259 |     const serialized = JSON.stringify(points);
260 |     expect(serialized).not.toContain('org_1');
261 |     expect(serialized).not.toContain('store_1');
262 |     expect(serialized).not.toContain('01712345678');
263 |     expect(serialized).not.toContain('cjob_trace');
264 |   });
265 |
266 |   it('rejects arbitrary caller request identifiers instead of reflecting them', async () => {
267 |     const lines: string[] = [];
268 |     const logger = createStructuredLogger({
269 |       service: 'api-test',
270 |       environment: 'test',
271 |       write: (line) => lines.push(line),
272 |     });
273 |     const unsafeRequestId = 'customer-reference-1001';
274 |     const response = await createTestApp({ logger }).request('/health', {
275 |       headers: { 'X-Request-ID': unsafeRequestId },
276 |     });
277 |
278 |     expect(response.status).toBe(200);
279 |     expect(response.headers.get('X-Request-ID')).toBe('req_1');
280 |     expect(lines.join('\n')).not.toContain(unsafeRequestId);
281 |   });
282 |
283 |   it('keeps request handling available when the telemetry sink fails', async () => {
284 |     const logger = createStructuredLogger({
285 |       service: 'api-test',
286 |       environment: 'test',
287 |       write: () => {
288 |         throw new Error('sink unavailable');
289 |       },
290 |     });
291 |     const metrics = createMetricRecorder({
292 |       service: 'api-test',
293 |       environment: 'test',
294 |       write: () => {
295 |         throw new Error('metric sink unavailable');
296 |       },
297 |     });
298 |     const response = await createTestApp({ logger, metrics }).request('/health');
299 |
300 |     expect(response.status).toBe(200);
301 |     await expect(response.json()).resolves.toMatchObject({ status: 'ok' });
302 |   });
303 |
304 |   it('records unhandled errors without exporting their messages or stacks', async () => {
305 |     const lines: string[] = [];
306 |     const logger = createStructuredLogger({
307 |       service: 'api-test',
308 |       environment: 'test',
309 |       write: (line) => lines.push(line),
310 |     });
311 |     const failure = Object.assign(new Error('restricted database detail'), {
312 |       code: 'DATABASE_FAILURE',
313 |     });
314 |     const assessments: AssessmentRepository = {
315 |       async findByIdempotency() {
316 |         throw failure;
317 |       },
318 |       async findById() {
319 |         return null;
320 |       },
321 |       async save(record) {
322 |         return record;
323 |       },
324 |     };
325 |     const response = await createTestApp({ logger, assessments }).request('/v1/risk-assessments', {
326 |       method: 'POST',
327 |       headers: authorizedHeaders,
328 |       body: JSON.stringify(assessmentRequest),
329 |     });
330 |
331 |     expect(response.status).toBe(500);
332 |     await expect(response.json()).resolves.toMatchObject({
333 |       success: false,
334 |       error: { code: 'INTERNAL_ERROR' },
335 |     });
336 |     const records = lines.map((line) => JSON.parse(line) as Record<string, unknown>);
337 |     expect(records).toEqual(
338 |       expect.arrayContaining([
339 |         expect.objectContaining({
340 |           event: 'api.request.unhandled_error',
341 |           code: 'UNHANDLED_ERROR',
342 |           error: { name: 'Error', code: 'DATABASE_FAILURE' },
343 |         }),
344 |         expect.objectContaining({
345 |           event: 'api.request.completed',
346 |           status_code: 500,
347 |           status_class: '5xx',
348 |         }),
349 |       ]),
350 |     );
351 |     expect(lines.join('\n')).not.toContain('restricted database detail');
352 |     expect(lines.join('\n')).not.toContain('stack');
353 |   });
354 |
355 |   it('requires API authentication', async () => {
356 |     const response = await createTestApp().request('/v1/risk-assessments', {
357 |       method: 'POST',
358 |       headers: { 'Content-Type': 'application/json', 'Idempotency-Key': 'request-1' },
359 |       body: JSON.stringify(assessmentRequest),
360 |     });
361 |     expect(response.status).toBe(401);
362 |   });
363 |
364 |   it('returns the canonical unknown/verify assessment when history is unavailable', async () => {
365 |     const response = await createTestApp().request('/v1/risk-assessments', {
366 |       method: 'POST',
367 |       headers: authorizedHeaders,
368 |       body: JSON.stringify(assessmentRequest),
369 |     });
370 |     expect(response.status).toBe(201);
371 |     const body = (await response.json()) as Record<string, unknown>;
372 |     expect(body).toMatchObject({
373 |       success: true,
374 |       risk_level: 'unknown',
375 |       decision: 'verify',
376 |       confidence: 0,
377 |     });
378 |     expect((body.signals as Array<{ code: string }>)[0]?.code).toBe('insufficient_history');
379 |   });
380 |
381 |   it('returns the original result for an idempotent retry', async () => {
382 |     const app = createTestApp();
383 |     const first = await app.request('/v1/risk-assessments', {
384 |       method: 'POST',
385 |       headers: authorizedHeaders,
386 |       body: JSON.stringify(assessmentRequest),
387 |     });
388 |     const second = await app.request('/v1/risk-assessments', {
389 |       method: 'POST',
390 |       headers: authorizedHeaders,
391 |       body: JSON.stringify(assessmentRequest),
392 |     });
393 |     expect(first.status).toBe(201);
394 |     expect(second.status).toBe(200);
395 |     const firstBody = (await first.json()) as { assessment_id: string };
396 |     const secondBody = (await second.json()) as { assessment_id: string };
397 |     expect(secondBody.assessment_id).toBe(firstBody.assessment_id);
398 |   });
399 |
400 |   it('enforces store isolation when reading an assessment', async () => {
401 |     const assessments = new MemoryAssessmentRepository();
402 |     const storeOneApp = createTestApp({ assessments });
403 |     const created = await storeOneApp.request('/v1/risk-assessments', {
404 |       method: 'POST',
405 |       headers: authorizedHeaders,
406 |       body: JSON.stringify(assessmentRequest),
407 |     });
408 |     const createdBody = (await created.json()) as { assessment_id: string };
409 |
410 |     const otherKey = ['ozg', 'test', 'fixture-b'].join('_');
411 |     const storeTwoApp = createTestApp({
412 |       assessments,
413 |       rawApiKey: otherKey,
414 |       identity: {
415 |         apiKeyId: 'key_2',
416 |         organizationId: 'org_1',
417 |         storeId: 'store_2',
418 |         environment: 'test',
419 |         plan: 'free',
420 |         scopes: new Set(['*']),
421 |       },
422 |     });
423 |     const response = await storeTwoApp.request(
424 |       `/v1/risk-assessments/${createdBody.assessment_id}`,
425 |       { headers: { Authorization: `Bearer ${otherKey}` } },
426 |     );
427 |     expect(response.status).toBe(404);
428 |   });
429 |
430 |   it('queues OTP delivery without performing provider I/O in the request', async () => {
431 |     let enqueueCalls = 0;
432 |     const app = createTestApp({
433 |       verificationRequests: {
434 |         async enqueueSend(input) {
435 |           enqueueCalls += 1;
436 |           expect(input).toMatchObject({
437 |             organizationId: 'org_1',
438 |             storeId: 'store_1',
439 |             purpose: 'cod_order_confirmation',
440 |             idempotencyKey: 'otp-1001',
441 |           });
442 |           return {
443 |             verificationId: 'ver_queued',
444 |             expiresAt: '2026-07-16T10:05:00.000Z',
445 |             replay: false,
446 |           };
447 |         },
448 |       },
449 |     });
450 |     const response = await app.request('/v1/verifications/otp/send', {
451 |       method: 'POST',
452 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'otp-1001' },
453 |       body: JSON.stringify({ phone: '01712345678' }),
454 |     });
455 |     expect(response.status).toBe(202);
456 |     await expect(response.json()).resolves.toMatchObject({
457 |       success: true,
458 |       verification_id: 'ver_queued',
459 |       status: 'queued',
460 |     });
461 |     expect(enqueueCalls).toBe(1);
462 |   });
463 |
464 |   it('verifies OTP through the database verifier dependency', async () => {
465 |     let verifyCalls = 0;
466 |     const app = createTestApp({
467 |       otpVerifier: {
468 |         async verify(input) {
469 |           verifyCalls += 1;
470 |           expect(input).toEqual({
471 |             organizationId: 'org_1',
472 |             storeId: 'store_1',
473 |             verificationId: 'ver_queued',
474 |             otp: '123456',
475 |           });
476 |           return { verified: true };
477 |         },
478 |       },
479 |     });
480 |     const response = await app.request('/v1/verifications/otp/verify', {
481 |       method: 'POST',
482 |       headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
483 |       body: JSON.stringify({ verification_id: 'ver_queued', otp: '123456' }),
484 |     });
485 |     expect(response.status).toBe(200);
486 |     expect(verifyCalls).toBe(1);
487 |   });
488 |
489 |   it('records outcomes idempotently', async () => {
490 |     const app = createTestApp();
491 |     const body = {
492 |       external_order_id: 'WC-1001',
493 |       outcome: 'delivered',
494 |       occurred_at: '2026-07-16T10:30:00.000Z',
495 |     };
496 |     const first = await app.request('/v1/order-outcomes', {
497 |       method: 'POST',
498 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
499 |       body: JSON.stringify(body),
500 |     });
501 |     const second = await app.request('/v1/order-outcomes', {
502 |       method: 'POST',
503 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
504 |       body: JSON.stringify(body),
505 |     });
506 |     expect(first.status).toBe(201);
507 |     expect(second.status).toBe(200);
508 |     const firstBody = (await first.json()) as { outcome_id: string };
509 |     const secondBody = (await second.json()) as { outcome_id: string; replay: boolean };
510 |     expect(secondBody).toMatchObject({ outcome_id: firstBody.outcome_id, replay: true });
511 |   });
512 | });
513 |
```

### apps/api/src/index.ts

Bytes: 42612
SHA-256: 5e0829d5a49d02f9dc0d36d12166c3ca08a0ceb352b4cdf6c8d3ed89a8e1fcd0
Lines: 1-1293 of 1293

```typescript
   1 | import { randomUUID } from 'node:crypto';
   2 | import { Hono } from 'hono';
   3 | import { z } from 'zod';
   4 | import type { PlanCode, UsageLedger } from '@ozzyl/billing';
   5 | import {
   6 |   createMetricRecorder,
   7 |   createStructuredLogger,
   8 |   createTracer,
   9 |   defineMetric,
  10 |   defineSpan,
  11 |   formatTraceParent,
  12 |   parseTraceContext,
  13 |   toPersistedTraceContext,
  14 |   type MetricRecorder,
  15 |   type PersistedTraceContext,
  16 |   type StructuredLogger,
  17 |   type TraceContext,
  18 |   type Tracer,
  19 | } from '@ozzyl/observability';
  20 | import {
  21 |   assessRisk,
  22 |   isValidBangladeshPhone,
  23 |   normalizeBangladeshPhone,
  24 |   type CourierFeatures,
  25 |   type MerchantFeatures,
  26 |   type NetworkFeatures,
  27 |   type RiskPolicy,
  28 |   type VelocityFeatures,
  29 |   type VerificationFeatures,
  30 | } from '@ozzyl/risk-engine';
  31 | import {
  32 |   nativeShadowAttemptInputSchema,
  33 |   nativeShadowAttemptResponseSchema,
  34 |   nativeShadowComparisonInputSchema,
  35 |   nativeShadowComparisonResponseSchema,
  36 |   nativeShadowRolloutResponseSchema,
  37 |   orderOutcomeSchema,
  38 |   riskAssessmentRequestSchema,
  39 |   riskAssessmentResponseSchema,
  40 |   type NativeShadowAttemptInput,
  41 |   type NativeShadowComparisonInput,
  42 |   type NativeShadowRolloutMode,
  43 |   type OrderOutcomeInput,
  44 |   type RiskAssessmentRequest,
  45 |   type RiskAssessmentResponse,
  46 | } from '@ozzyl/shared-types';
  47 | import { VerificationError } from '@ozzyl/verification';
  48 | import { createBrowserApi, type BrowserApiDependencies } from './browser.js';
  49 |
  50 | export * from './postgres-administration.js';
  51 | export * from './postgres-native-shadow-pilot.js';
  52 | export * from './postgres-shadow-comparisons.js';
  53 |
  54 | export interface ApiKeyIdentity {
  55 |   apiKeyId: string;
  56 |   organizationId: string;
  57 |   storeId: string;
  58 |   environment: 'test' | 'live';
  59 |   plan: PlanCode;
  60 |   scopes: ReadonlySet<string>;
  61 | }
  62 |
  63 | export interface ApiKeyResolver {
  64 |   resolve(rawApiKey: string): Promise<ApiKeyIdentity | null>;
  65 | }
  66 |
  67 | export interface AssessmentFeatureSet {
  68 |   courier: CourierFeatures;
  69 |   merchant: MerchantFeatures;
  70 |   velocity: VelocityFeatures;
  71 |   verification: VerificationFeatures;
  72 |   network: NetworkFeatures;
  73 |   policy?: RiskPolicy;
  74 | }
  75 |
  76 | export interface AssessmentFeatureProvider {
  77 |   load(input: {
  78 |     identity: ApiKeyIdentity;
  79 |     phone: string;
  80 |     phoneHash: string;
  81 |     request: RiskAssessmentRequest;
  82 |   }): Promise<AssessmentFeatureSet>;
  83 | }
  84 |
  85 | export interface StoredAssessment {
  86 |   identity: Pick<ApiKeyIdentity, 'apiKeyId' | 'organizationId' | 'storeId'>;
  87 |   traceContext?: PersistedTraceContext;
  88 |   idempotencyKey: string;
  89 |   phoneHash: string;
  90 |   request: RiskAssessmentRequest;
  91 |   response: RiskAssessmentResponse;
  92 | }
  93 |
  94 | export interface AssessmentRepository {
  95 |   findByIdempotency(input: {
  96 |     organizationId: string;
  97 |     storeId: string;
  98 |     idempotencyKey: string;
  99 |   }): Promise<StoredAssessment | null>;
 100 |   findById(input: {
 101 |     organizationId: string;
 102 |     storeId: string;
 103 |     assessmentId: string;
 104 |   }): Promise<StoredAssessment | null>;
 105 |   save(record: StoredAssessment): Promise<StoredAssessment>;
 106 | }
 107 |
 108 | export interface OutcomeRepository {
 109 |   save(input: {
 110 |     organizationId: string;
 111 |     storeId: string;
 112 |     idempotencyKey: string;
 113 |     outcome: OrderOutcomeInput;
 114 |     traceContext?: PersistedTraceContext;
 115 |   }): Promise<{ outcomeId: string; replay: boolean }>;
 116 | }
 117 |
 118 | export interface ShadowComparisonRepository {
 119 |   save(input: {
 120 |     organizationId: string;
 121 |     storeId: string;
 122 |     apiKeyId: string;
 123 |     idempotencyKey: string;
 124 |     comparison: NativeShadowComparisonInput;
 125 |     guardAssessment: RiskAssessmentResponse;
 126 |   }): Promise<{ comparisonId: string; replay: boolean }>;
 127 | }
 128 |
 129 | export interface NativeShadowRolloutRepository {
 130 |   load(input: { organizationId: string; storeId: string }): Promise<{
 131 |     organizationId: string;
 132 |     storeId: string;
 133 |     integration: 'multi-store-saas';
 134 |     mode: NativeShadowRolloutMode;
 135 |     rolloutVersion: string;
 136 |     sampleRateBps: number;
 137 |     samplingKey: string;
 138 |   } | null>;
 139 | }
 140 |
 141 | export interface NativeShadowRolloutAdministrationRepository {
 142 |   setForStore(input: {
 143 |     userId: string;
 144 |     organizationId: string;
 145 |     storeId: string;
 146 |     mode: NativeShadowRolloutMode;
 147 |     rolloutVersion: string;
 148 |     sampleRateBps: number;
 149 |   }): Promise<{
 150 |     organizationId: string;
 151 |     storeId: string;
 152 |     integration: 'multi-store-saas';
 153 |     mode: NativeShadowRolloutMode;
 154 |     rolloutVersion: string;
 155 |     sampleRateBps: number;
 156 |     samplingKey: string;
 157 |   } | null>;
 158 | }
 159 |
 160 | export interface NativeShadowAttemptRepository {
 161 |   save(input: {
 162 |     organizationId: string;
 163 |     storeId: string;
 164 |     apiKeyId: string;
 165 |     idempotencyKey: string;
 166 |     attempt: NativeShadowAttemptInput;
 167 |   }): Promise<{ attemptId: string; replay: boolean }>;
 168 | }
 169 |
 170 | export interface CourierRefreshQueue {
 171 |   enqueue(input: {
 172 |     organizationId: string;
 173 |     storeId: string;
 174 |     phone: string;
 175 |     phoneHash: string;
 176 |     providers: string[];
 177 |     force: boolean;
 178 |     traceContext?: PersistedTraceContext;
 179 |   }): Promise<{ jobId: string }>;
 180 | }
 181 |
 182 | export interface VerificationRequestQueue {
 183 |   enqueueSend(input: {
 184 |     organizationId: string;
 185 |     storeId: string;
 186 |     assessmentId?: string;
 187 |     phone: string;
 188 |     phoneHash: string;
 189 |     purpose: string;
 190 |     idempotencyKey: string;
 191 |     traceContext?: PersistedTraceContext;
 192 |   }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
 193 | }
 194 |
 195 | export interface OtpVerifier {
 196 |   verify(input: {
 197 |     organizationId: string;
 198 |     storeId: string;
 199 |     verificationId: string;
 200 |     otp: string;
 201 |   }): Promise<{ verified: true }>;
 202 | }
 203 |
 204 | export interface OperationIdempotencyStore {
 205 |   get(key: string): Promise<unknown>;
 206 |   set(key: string, value: unknown): Promise<void>;
 207 | }
 208 |
 209 | export interface RateLimiter {
 210 |   consume(key: string, limit: number, windowMs: number): Promise<boolean>;
 211 | }
 212 |
 213 | export interface ApiDependencies {
 214 |   apiKeys: ApiKeyResolver;
 215 |   usage: UsageLedger;
 216 |   features: AssessmentFeatureProvider;
 217 |   assessments: AssessmentRepository;
 218 |   outcomes: OutcomeRepository;
 219 |   shadowComparisons?: ShadowComparisonRepository;
 220 |   nativeShadowRollouts?: NativeShadowRolloutRepository;
 221 |   nativeShadowAttempts?: NativeShadowAttemptRepository;
 222 |   refreshQueue: CourierRefreshQueue;
 223 |   idempotency: OperationIdempotencyStore;
 224 |   rateLimiter: RateLimiter;
 225 |   hashPhone(phone: string): string;
 226 |   verificationRequests?: VerificationRequestQueue;
 227 |   otpVerifier?: OtpVerifier;
 228 |   browser?: BrowserApiDependencies;
 229 |   now?: () => Date;
 230 |   monotonicNow?: () => number;
 231 |   idFactory?: (prefix: string) => string;
 232 |   logger?: StructuredLogger;
 233 |   metrics?: MetricRecorder;
 234 |   tracer?: Tracer;
 235 | }
 236 |
 237 | type AppEnvironment = {
 238 |   Variables: {
 239 |     identity: ApiKeyIdentity;
 240 |     requestId: string;
 241 |     traceContext: TraceContext;
 242 |   };
 243 | };
 244 |
 245 | const refreshSchema = z.object({
 246 |   phone: z.string().min(8).max(30),
 247 |   providers: z.array(z.string().min(1).max(50)).min(1).max(10).default(['steadfast']),
 248 |   force: z.boolean().default(false),
 249 | });
 250 |
 251 | const otpSendSchema = z.object({
 252 |   phone: z.string().min(8).max(30),
 253 |   assessment_id: z.string().max(200).optional(),
 254 |   purpose: z.string().min(1).max(100).default('cod_order_confirmation'),
 255 | });
 256 |
 257 | const otpVerifySchema = z.object({
 258 |   verification_id: z.string().min(1).max(200),
 259 |   otp: z.string().regex(/^\d{6}$/),
 260 | });
 261 |
 262 | export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment> {
 263 |   const app = new Hono<AppEnvironment>();
 264 |   const now = dependencies.now ?? (() => new Date());
 265 |   const monotonicNow = dependencies.monotonicNow ?? (() => Date.now());
 266 |   const idFactory = dependencies.idFactory ?? ((prefix: string) => `${prefix}_${randomUUID()}`);
 267 |   const logger =
 268 |     dependencies.logger ??
 269 |     createStructuredLogger({
 270 |       service: 'ozzyl-guard-api',
 271 |       environment: 'test',
 272 |       write: () => undefined,
 273 |     });
 274 |   const metrics =
 275 |     dependencies.metrics ??
 276 |     createMetricRecorder({
 277 |       service: 'ozzyl-guard-api',
 278 |       environment: 'test',
 279 |       write: () => undefined,
 280 |     });
 281 |   const tracer =
 282 |     dependencies.tracer ??
 283 |     createTracer({
 284 |       service: 'ozzyl-guard-api',
 285 |       environment: 'test',
 286 |       write: () => undefined,
 287 |     });
 288 |
 289 |   app.use('*', async (context, next) => {
 290 |     const requestId = readRequestId(context.req.header('X-Request-ID')) ?? idFactory('req');
 291 |     const startedAt = monotonicNow();
 292 |     let failed = false;
 293 |     const parentTrace = parseTraceContext(
 294 |       context.req.header('traceparent'),
 295 |       context.req.header('tracestate'),
 296 |     );
 297 |     const requestSpan = tracer.startSpan(API_REQUEST_SPAN, {
 298 |       ...(parentTrace === null ? {} : { parent: parentTrace }),
 299 |       attributes: {
 300 |         method: telemetryMethod(context.req.method),
 301 |         route: telemetryRoute(context.req.path),
 302 |       },
 303 |     });
 304 |     context.set('requestId', requestId);
 305 |     context.set('traceContext', requestSpan.context);
 306 |
 307 |     try {
 308 |       await next();
 309 |     } catch (error) {
 310 |       failed = true;
 311 |       throw error;
 312 |     } finally {
 313 |       const status = failed ? 500 : context.res.status;
 314 |       const durationMs = Math.max(0, monotonicNow() - startedAt);
 315 |       const attributes = {
 316 |         request_id: requestId,
 317 |         method: context.req.method,
 318 |         route: telemetryRoute(context.req.path),
 319 |         status_code: status,
 320 |         status_class: `${Math.floor(status / 100)}xx`,
 321 |         duration_ms: Math.round(durationMs * 1_000) / 1_000,
 322 |       };
 323 |       const metricAttributes = {
 324 |         method: telemetryMethod(context.req.method),
 325 |         route: telemetryRoute(context.req.path),
 326 |         status_class: telemetryStatusClass(status),
 327 |       };
 328 |
 329 |       context.header('X-Request-ID', requestId);
 330 |       context.header('traceparent', formatTraceParent(requestSpan.context));
 331 |       if (requestSpan.context.traceState !== undefined) {
 332 |         context.header('tracestate', requestSpan.context.traceState);
 333 |       }
 334 |       requestSpan.end({
 335 |         status: status >= 500 ? 'error' : 'ok',
 336 |         attributes: { status_class: telemetryStatusClass(status) },
 337 |       });
 338 |       metrics.record(API_REQUEST_COUNT, 1, metricAttributes);
 339 |       metrics.record(API_REQUEST_DURATION, durationMs, metricAttributes);
 340 |       if (status >= 500) logger.error('api.request.completed', attributes);
 341 |       else if (status >= 400) logger.warn('api.request.completed', attributes);
 342 |       else logger.info('api.request.completed', attributes);
 343 |     }
 344 |   });
 345 |
 346 |   app.get('/', (context) =>
 347 |     context.json({
 348 |       service: 'Ozzyl Guard',
 349 |       version: 'v1',
 350 |       endpoints: {
 351 |         assessments: 'POST /v1/risk-assessments',
 352 |         outcomes: 'POST /v1/order-outcomes',
 353 |         nativeShadowRollout: 'GET /v1/integration-rollouts/native-shadow',
 354 |         nativeShadowComparisons: 'POST /v1/integration-comparisons/native-shadow',
 355 |         nativeShadowAttempts: 'POST /v1/integration-attempts/native-shadow',
 356 |         refresh: 'POST /v1/courier-observations/refresh',
 357 |         otpSend: 'POST /v1/verifications/otp/send',
 358 |         otpVerify: 'POST /v1/verifications/otp/verify',
 359 |       },
 360 |     }),
 361 |   );
 362 |
 363 |   app.get('/health', (context) =>
 364 |     context.json({ status: 'ok', service: 'ozzyl-guard-api', timestamp: now().toISOString() }),
 365 |   );
 366 |
 367 |   if (dependencies.browser) app.route('/', createBrowserApi(dependencies.browser));
 368 |
 369 |   app.use('/v1/*', async (context, next) => {
 370 |     const requestId = context.get('requestId');
 371 |     const authorization = context.req.header('Authorization');
 372 |     if (!authorization?.startsWith('Bearer ')) {
 373 |       return apiError(requestId, 401, 'UNAUTHORIZED', 'A Bearer API key is required');
 374 |     }
 375 |     const rawApiKey = authorization.slice('Bearer '.length).trim();
 376 |     if (!/^ozg_(test|live)_/.test(rawApiKey)) {
 377 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key format is invalid');
 378 |     }
 379 |     const identity = await dependencies.apiKeys.resolve(rawApiKey);
 380 |     if (!identity) {
 381 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key is invalid or revoked');
 382 |     }
 383 |     const allowed = await dependencies.rateLimiter.consume(`api:${identity.apiKeyId}`, 120, 60_000);
 384 |     if (!allowed) {
 385 |       return apiError(requestId, 429, 'RATE_LIMITED', 'Too many requests');
 386 |     }
 387 |     context.set('identity', identity);
 388 |     await next();
 389 |     context.header('X-Request-ID', requestId);
 390 |   });
 391 |
 392 |   app.post('/v1/risk-assessments', async (context) => {
 393 |     const requestId = context.get('requestId');
 394 |     const identity = context.get('identity');
 395 |     const scopeError = requireScope(identity, 'risk:write', requestId);
 396 |     if (scopeError) return scopeError;
 397 |
 398 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 399 |     if (!idempotencyKey) {
 400 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 401 |     }
 402 |
 403 |     const existing = await dependencies.assessments.findByIdempotency({
 404 |       organizationId: identity.organizationId,
 405 |       storeId: identity.storeId,
 406 |       idempotencyKey,
 407 |     });
 408 |     if (existing) return context.json(existing.response, 200);
 409 |
 410 |     const parsedBody = await parseJson(context.req.raw, riskAssessmentRequestSchema);
 411 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 412 |     const request = parsedBody.value;
 413 |     const phone = normalizeBangladeshPhone(request.phone);
 414 |     if (!isValidBangladeshPhone(phone)) {
 415 |       return apiError(
 416 |         requestId,
 417 |         400,
 418 |         'INVALID_PHONE',
 419 |         'A valid Bangladesh mobile number is required',
 420 |       );
 421 |     }
 422 |
 423 |     try {
 424 |       await dependencies.usage.reserve({
 425 |         organizationId: identity.organizationId,
 426 |         period: billingPeriod(now()),
 427 |         requestId: idempotencyKey,
 428 |         units: 1,
 429 |         plan: identity.plan,
 430 |       });
 431 |     } catch (error) {
 432 |       return apiError(
 433 |         requestId,
 434 |         429,
 435 |         'USAGE_LIMIT_EXCEEDED',
 436 |         error instanceof Error ? error.message : 'Usage limit exceeded',
 437 |       );
 438 |     }
 439 |
 440 |     const startedAt = Date.now();
 441 |     const phoneHash = dependencies.hashPhone(phone);
 442 |     const features = await dependencies.features.load({ identity, phone, phoneHash, request });
 443 |     const order = {
 444 |       total: request.order_total,
 445 |       paymentMethod: request.payment_method,
 446 |       ...(request.items_count === undefined ? {} : { itemsCount: request.items_count }),
 447 |     };
 448 |     const engineInput = {
 449 |       order,
 450 |       courier: features.courier,
 451 |       merchant: features.merchant,
 452 |       velocity: features.velocity,
 453 |       verification: features.verification,
 454 |       network: features.network,
 455 |       ...(features.policy === undefined ? {} : { policy: features.policy }),
 456 |     };
 457 |     const result = assessRisk(engineInput);
 458 |     const response = riskAssessmentResponseSchema.parse({
 459 |       success: true,
 460 |       assessment_id: idFactory('ras'),
 461 |       risk_score: result.score,
 462 |       risk_level: result.riskLevel,
 463 |       decision: result.decision,
 464 |       confidence: result.confidence,
 465 |       signals: result.signals,
 466 |       courier_summary: {
 467 |         freshness: features.courier.freshness,
 468 |         providers: features.courier.providerCount,
 469 |         total: features.courier.totalOrders,
 470 |         delivered: features.courier.deliveredOrders,
 471 |         returned: features.courier.returnedOrders,
 472 |         cancelled_before_shipping: features.courier.cancelledBeforeShipping,
 473 |       },
 474 |       recommended_actions: result.recommendedActions,
 475 |       meta: {
 476 |         engine_version: result.engineVersion,
 477 |         policy_version: result.policyVersion,
 478 |         degraded: result.degraded,
 479 |         response_ms: Date.now() - startedAt,
 480 |       },
 481 |     });
 482 |
 483 |     const stored = await observeDurableProducer(
 484 |       tracer,
 485 |       context.get('traceContext'),
 486 |       'assessment_event',
 487 |       'webhook_delivery',
 488 |       (traceContext) =>
 489 |         dependencies.assessments.save({
 490 |           traceContext,
 491 |           identity: {
 492 |             apiKeyId: identity.apiKeyId,
 493 |             organizationId: identity.organizationId,
 494 |             storeId: identity.storeId,
 495 |           },
 496 |           idempotencyKey,
 497 |           phoneHash,
 498 |           request,
 499 |           response,
 500 |         }),
 501 |     );
 502 |     return context.json(
 503 |       stored.response,
 504 |       stored.response.assessment_id === response.assessment_id ? 201 : 200,
 505 |     );
 506 |   });
 507 |
 508 |   app.get('/v1/risk-assessments/:assessmentId', async (context) => {
 509 |     const requestId = context.get('requestId');
 510 |     const identity = context.get('identity');
 511 |     const scopeError = requireScope(identity, 'risk:read', requestId);
 512 |     if (scopeError) return scopeError;
 513 |     const record = await dependencies.assessments.findById({
 514 |       organizationId: identity.organizationId,
 515 |       storeId: identity.storeId,
 516 |       assessmentId: context.req.param('assessmentId'),
 517 |     });
 518 |     if (!record) return apiError(requestId, 404, 'ASSESSMENT_NOT_FOUND', 'Assessment not found');
 519 |     return context.json(record.response);
 520 |   });
 521 |
 522 |   app.post('/v1/order-outcomes', async (context) => {
 523 |     const requestId = context.get('requestId');
 524 |     const identity = context.get('identity');
 525 |     const scopeError = requireScope(identity, 'outcomes:write', requestId);
 526 |     if (scopeError) return scopeError;
 527 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 528 |     if (!idempotencyKey) {
 529 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 530 |     }
 531 |     const parsedBody = await parseJson(context.req.raw, orderOutcomeSchema);
 532 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 533 |     if (parsedBody.value.assessment_id) {
 534 |       const assessment = await dependencies.assessments.findById({
 535 |         organizationId: identity.organizationId,
 536 |         storeId: identity.storeId,
 537 |         assessmentId: parsedBody.value.assessment_id,
 538 |       });
 539 |       if (!assessment) {
 540 |         return apiError(
 541 |           requestId,
 542 |           400,
 543 |           'ASSESSMENT_NOT_FOUND',
 544 |           'Assessment not found for this store',
 545 |         );
 546 |       }
 547 |     }
 548 |     const saved = await observeDurableProducer(
 549 |       tracer,
 550 |       context.get('traceContext'),
 551 |       'outcome_event',
 552 |       'webhook_delivery',
 553 |       (traceContext) =>
 554 |         dependencies.outcomes.save({
 555 |           organizationId: identity.organizationId,
 556 |           storeId: identity.storeId,
 557 |           idempotencyKey,
 558 |           outcome: parsedBody.value,
 559 |           traceContext,
 560 |         }),
 561 |     );
 562 |     return context.json(
 563 |       { success: true as const, outcome_id: saved.outcomeId, replay: saved.replay },
 564 |       saved.replay ? 200 : 201,
 565 |     );
 566 |   });
 567 |
 568 |   app.get('/v1/integration-rollouts/native-shadow', async (context) => {
 569 |     const requestId = context.get('requestId');
 570 |     const identity = context.get('identity');
 571 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 572 |     if (scopeError) return scopeError;
 573 |     if (!dependencies.nativeShadowRollouts) {
 574 |       return apiError(
 575 |         requestId,
 576 |         503,
 577 |         'NATIVE_SHADOW_ROLLOUT_UNAVAILABLE',
 578 |         'Native shadow rollout configuration is not available',
 579 |       );
 580 |     }
 581 |     const rollout = await dependencies.nativeShadowRollouts.load({
 582 |       organizationId: identity.organizationId,
 583 |       storeId: identity.storeId,
 584 |     });
 585 |     if (!rollout) {
 586 |       return apiError(requestId, 400, 'TENANT_SCOPE_MISMATCH', 'Store scope is not active');
 587 |     }
 588 |     return context.json(
 589 |       nativeShadowRolloutResponseSchema.parse({
 590 |         success: true,
 591 |         organization_id: rollout.organizationId,
 592 |         store_id: rollout.storeId,
 593 |         integration: rollout.integration,
 594 |         mode: rollout.mode,
 595 |         rollout_version: rollout.rolloutVersion,
 596 |         sample_rate_bps: rollout.sampleRateBps,
 597 |         sampling_key: rollout.samplingKey,
 598 |       }),
 599 |     );
 600 |   });
 601 |
 602 |   app.post('/v1/integration-comparisons/native-shadow', async (context) => {
 603 |     const requestId = context.get('requestId');
 604 |     const identity = context.get('identity');
 605 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 606 |     if (scopeError) return scopeError;
 607 |     if (!dependencies.shadowComparisons) {
 608 |       return apiError(
 609 |         requestId,
 610 |         503,
 611 |         'SHADOW_COMPARISON_UNAVAILABLE',
 612 |         'Native shadow comparison persistence is not configured',
 613 |       );
 614 |     }
 615 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 616 |     if (!idempotencyKey) {
 617 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 618 |     }
 619 |     const parsedBody = await parseJson(context.req.raw, nativeShadowComparisonInputSchema);
 620 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 621 |     const assessment = await dependencies.assessments.findById({
 622 |       organizationId: identity.organizationId,
 623 |       storeId: identity.storeId,
 624 |       assessmentId: parsedBody.value.assessment_id,
 625 |     });
 626 |     if (!assessment) {
 627 |       return apiError(
 628 |         requestId,
 629 |         400,
 630 |         'ASSESSMENT_NOT_FOUND',
 631 |         'Assessment not found for this store',
 632 |       );
 633 |     }
 634 |     if (assessment.request.external_order_id !== parsedBody.value.external_order_id) {
 635 |       return apiError(
 636 |         requestId,
 637 |         400,
 638 |         'ASSESSMENT_ORDER_MISMATCH',
 639 |         'Assessment does not belong to the supplied external order',
 640 |       );
 641 |     }
 642 |     try {
 643 |       const saved = await dependencies.shadowComparisons.save({
 644 |         organizationId: identity.organizationId,
 645 |         storeId: identity.storeId,
 646 |         apiKeyId: identity.apiKeyId,
 647 |         idempotencyKey,
 648 |         comparison: parsedBody.value,
 649 |         guardAssessment: assessment.response,
 650 |       });
 651 |       const response = nativeShadowComparisonResponseSchema.parse({
 652 |         success: true,
 653 |         comparison_id: saved.comparisonId,
 654 |         replay: saved.replay,
 655 |       });
 656 |       return context.json(response, saved.replay ? 200 : 201);
 657 |     } catch (error) {
 658 |       const code =
 659 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 660 |           ? error.code
 661 |           : 'SHADOW_COMPARISON_UNAVAILABLE';
 662 |       const status =
 663 |         code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT'
 664 |           ? 409
 665 |           : code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
 666 |               code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
 667 |               code === 'TENANT_SCOPE_MISMATCH'
 668 |             ? 400
 669 |             : 503;
 670 |       return apiError(
 671 |         requestId,
 672 |         status,
 673 |         code,
 674 |         status === 503
 675 |           ? 'Native shadow comparison could not be persisted'
 676 |           : 'Native shadow comparison was rejected',
 677 |       );
 678 |     }
 679 |   });
 680 |
 681 |   app.post('/v1/integration-attempts/native-shadow', async (context) => {
 682 |     const requestId = context.get('requestId');
 683 |     const identity = context.get('identity');
 684 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 685 |     if (scopeError) return scopeError;
 686 |     if (!dependencies.nativeShadowAttempts) {
 687 |       return apiError(
 688 |         requestId,
 689 |         503,
 690 |         'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE',
 691 |         'Native shadow attempt persistence is not configured',
 692 |       );
 693 |     }
 694 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 695 |     if (!idempotencyKey) {
 696 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 697 |     }
 698 |     const parsedBody = await parseJson(context.req.raw, nativeShadowAttemptInputSchema);
 699 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 700 |     try {
 701 |       const saved = await dependencies.nativeShadowAttempts.save({
 702 |         organizationId: identity.organizationId,
 703 |         storeId: identity.storeId,
 704 |         apiKeyId: identity.apiKeyId,
 705 |         idempotencyKey,
 706 |         attempt: parsedBody.value,
 707 |       });
 708 |       return context.json(
 709 |         nativeShadowAttemptResponseSchema.parse({
 710 |           success: true,
 711 |           attempt_id: saved.attemptId,
 712 |           replay: saved.replay,
 713 |         }),
 714 |         saved.replay ? 200 : 201,
 715 |       );
 716 |     } catch (error) {
 717 |       const code =
 718 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 719 |           ? error.code
 720 |           : 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE';
 721 |       const status =
 722 |         code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT'
 723 |           ? 409
 724 |           : code === 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE'
 725 |             ? 503
 726 |             : 400;
 727 |       return apiError(
 728 |         requestId,
 729 |         status,
 730 |         code,
 731 |         status === 503
 732 |           ? 'Native shadow attempt could not be persisted'
 733 |           : 'Native shadow attempt was rejected',
 734 |       );
 735 |     }
 736 |   });
 737 |
 738 |   app.post('/v1/courier-observations/refresh', async (context) => {
 739 |     const requestId = context.get('requestId');
 740 |     const identity = context.get('identity');
 741 |     const scopeError = requireScope(identity, 'courier:refresh', requestId);
 742 |     if (scopeError) return scopeError;
 743 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 744 |     if (!idempotencyKey) {
 745 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 746 |     }
 747 |     const operationKey = operationIdempotencyKey(identity, 'courier-refresh', idempotencyKey);
 748 |     const existing = await dependencies.idempotency.get(operationKey);
 749 |     if (existing) return context.json(existing, 200);
 750 |     const parsedBody = await parseJson(context.req.raw, refreshSchema);
 751 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 752 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 753 |     if (!isValidBangladeshPhone(phone)) {
 754 |       return apiError(
 755 |         requestId,
 756 |         400,
 757 |         'INVALID_PHONE',
 758 |         'A valid Bangladesh mobile number is required',
 759 |       );
 760 |     }
 761 |     let queued: { jobId: string };
 762 |     try {
 763 |       queued = await observeDurableProducer(
 764 |         tracer,
 765 |         context.get('traceContext'),
 766 |         'courier_refresh',
 767 |         'courier_refresh',
 768 |         (traceContext) =>
 769 |           dependencies.refreshQueue.enqueue({
 770 |             organizationId: identity.organizationId,
 771 |             storeId: identity.storeId,
 772 |             phone,
 773 |             phoneHash: dependencies.hashPhone(phone),
 774 |             providers: parsedBody.value.providers,
 775 |             force: parsedBody.value.force,
 776 |             traceContext,
 777 |           }),
 778 |       );
 779 |     } catch (error) {
 780 |       const code =
 781 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 782 |           ? error.code
 783 |           : 'COURIER_REFRESH_UNAVAILABLE';
 784 |       return apiError(
 785 |         requestId,
 786 |         code === 'COURIER_CONNECTION_REQUIRED' ? 409 : 503,
 787 |         code,
 788 |         error instanceof Error ? error.message : 'Courier refresh could not be queued',
 789 |       );
 790 |     }
 791 |     const response = { success: true as const, job_id: queued.jobId, status: 'queued' as const };
 792 |     await dependencies.idempotency.set(operationKey, response);
 793 |     return context.json(response, 202);
 794 |   });
 795 |
 796 |   app.post('/v1/verifications/otp/send', async (context) => {
 797 |     const requestId = context.get('requestId');
 798 |     const identity = context.get('identity');
 799 |     const scopeError = requireScope(identity, 'verification:write', requestId);
 800 |     if (scopeError) return scopeError;
 801 |     if (!dependencies.verificationRequests) {
 802 |       return apiError(
 803 |         requestId,
 804 |         503,
 805 |         'VERIFICATION_UNAVAILABLE',
 806 |         'OTP verification is not configured',
 807 |       );
 808 |     }
 809 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 810 |     if (!idempotencyKey) {
 811 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 812 |     }
 813 |     const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
 814 |     const existing = await dependencies.idempotency.get(operationKey);
 815 |     if (existing) return context.json(existing, 200);
 816 |     const parsedBody = await parseJson(context.req.raw, otpSendSchema);
 817 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 818 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 819 |     if (!isValidBangladeshPhone(phone)) {
 820 |       return apiError(
 821 |         requestId,
 822 |         400,
 823 |         'INVALID_PHONE',
 824 |         'A valid Bangladesh mobile number is required',
 825 |       );
 826 |     }
 827 |     try {
 828 |       const queued = await observeDurableProducer(
 829 |         tracer,
 830 |         context.get('traceContext'),
 831 |         'otp_delivery',
 832 |         'verification_delivery',
 833 |         (traceContext) =>
 834 |           dependencies.verificationRequests!.enqueueSend({
 835 |             organizationId: identity.organizationId,
 836 |             storeId: identity.storeId,
 837 |             ...(parsedBody.value.assessment_id === undefined
 838 |               ? {}
 839 |               : { assessmentId: parsedBody.value.assessment_id }),
 840 |             phone,
 841 |             phoneHash: dependencies.hashPhone(phone),
 842 |             purpose: parsedBody.value.purpose,
 843 |             idempotencyKey,
 844 |             traceContext,
 845 |           }),
 846 |       );
 847 |       const response = {
 848 |         success: true as const,
 849 |         verification_id: queued.verificationId,
 850 |         expires_at: queued.expiresAt,
 851 |         status: 'queued' as const,
 852 |       };
 853 |       await dependencies.idempotency.set(operationKey, response);
 854 |       return context.json(response, queued.replay ? 200 : 202);
 855 |     } catch (error) {
 856 |       return verificationApiError(requestId, error);
 857 |     }
 858 |   });
 859 |
 860 |   app.post('/v1/verifications/otp/verify', async (context) => {
 861 |     const requestId = context.get('requestId');
 862 |     const identity = context.get('identity');
 863 |     const scopeError = requireScope(identity, 'verification:write', requestId);
 864 |     if (scopeError) return scopeError;
 865 |     if (!dependencies.otpVerifier) {
 866 |       return apiError(
 867 |         requestId,
 868 |         503,
 869 |         'VERIFICATION_UNAVAILABLE',
 870 |         'OTP verification is not configured',
 871 |       );
 872 |     }
 873 |     const parsedBody = await parseJson(context.req.raw, otpVerifySchema);
 874 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 875 |     try {
 876 |       await dependencies.otpVerifier.verify({
 877 |         organizationId: identity.organizationId,
 878 |         storeId: identity.storeId,
 879 |         verificationId: parsedBody.value.verification_id,
 880 |         otp: parsedBody.value.otp,
 881 |       });
 882 |       return context.json({ success: true as const, verified: true as const });
 883 |     } catch (error) {
 884 |       return verificationApiError(requestId, error);
 885 |     }
 886 |   });
 887 |
 888 |   app.notFound((context) => {
 889 |     const requestId = context.get('requestId') || idFactory('req');
 890 |     return apiError(requestId, 404, 'NOT_FOUND', 'Route not found');
 891 |   });
 892 |
 893 |   app.onError((error, context) => {
 894 |     const requestId = context.get('requestId') || idFactory('req');
 895 |     logger.error('api.request.unhandled_error', {
 896 |       request_id: requestId,
 897 |       method: context.req.method,
 898 |       route: telemetryRoute(context.req.path),
 899 |       code: 'UNHANDLED_ERROR',
 900 |       error,
 901 |     });
 902 |     return apiError(
 903 |       requestId,
 904 |       500,
 905 |       'INTERNAL_ERROR',
 906 |       error instanceof Error ? 'The request could not be completed' : 'Internal error',
 907 |     );
 908 |   });
 909 |
 910 |   return app;
 911 | }
 912 |
 913 | const STATIC_TELEMETRY_ROUTES = new Set([
 914 |   '/',
 915 |   '/health',
 916 |   '/auth/login',
 917 |   '/auth/session',
 918 |   '/auth/logout',
 919 |   '/dashboard/v1/overview',
 920 |   '/dashboard/v1/native-shadow-rollout',
 921 |   '/dashboard/v1/dead-letters',
 922 |   '/dashboard/v1/dead-letter-replays',
 923 |   '/admin/v1/overview',
 924 |   '/v1/risk-assessments',
 925 |   '/v1/order-outcomes',
 926 |   '/v1/integration-rollouts/native-shadow',
 927 |   '/v1/integration-comparisons/native-shadow',
 928 |   '/v1/integration-attempts/native-shadow',
 929 |   '/v1/courier-observations/refresh',
 930 |   '/v1/verifications/otp/send',
 931 |   '/v1/verifications/otp/verify',
 932 | ]);
 933 |
 934 | const API_METRIC_ROUTES = [
 935 |   ...STATIC_TELEMETRY_ROUTES,
 936 |   '/v1/risk-assessments/:assessment_id',
 937 |   'unmatched',
 938 | ];
 939 | const API_METRIC_ATTRIBUTES = {
 940 |   method: { values: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD', 'OTHER'] },
 941 |   route: { values: API_METRIC_ROUTES },
 942 |   status_class: { values: ['1xx', '2xx', '3xx', '4xx', '5xx', 'other'] },
 943 | } as const;
 944 | const API_REQUEST_SPAN = defineSpan({
 945 |   name: 'ozzyl.api.request',
 946 |   kind: 'server',
 947 |   attributes: {
 948 |     method: { ...API_METRIC_ATTRIBUTES.method, required: false },
 949 |     route: { ...API_METRIC_ATTRIBUTES.route, required: false },
 950 |     status_class: { ...API_METRIC_ATTRIBUTES.status_class, required: false },
 951 |   },
 952 | });
 953 | const API_DURABLE_PRODUCER_SPAN = defineSpan({
 954 |   name: 'ozzyl.api.durable.produce',
 955 |   kind: 'producer',
 956 |   attributes: {
 957 |     operation: {
 958 |       values: ['assessment_event', 'outcome_event', 'courier_refresh', 'otp_delivery'],
 959 |     },
 960 |     queue_type: {
 961 |       values: ['courier_refresh', 'webhook_delivery', 'verification_delivery'],
 962 |     },
 963 |     outcome: { values: ['completed', 'failed'], required: false },
 964 |   },
 965 | });
 966 | const API_REQUEST_COUNT = defineMetric({
 967 |   name: 'ozzyl.api.requests',
 968 |   kind: 'counter',
 969 |   unit: '{request}',
 970 |   attributes: API_METRIC_ATTRIBUTES,
 971 | });
 972 | const API_REQUEST_DURATION = defineMetric({
 973 |   name: 'ozzyl.api.request.duration',
 974 |   kind: 'histogram',
 975 |   unit: 'ms',
 976 |   attributes: API_METRIC_ATTRIBUTES,
 977 | });
 978 |
 979 | async function observeDurableProducer<T>(
 980 |   tracer: Tracer,
 981 |   parent: TraceContext,
 982 |   operation: 'assessment_event' | 'outcome_event' | 'courier_refresh' | 'otp_delivery',
 983 |   queueType: 'courier_refresh' | 'webhook_delivery' | 'verification_delivery',
 984 |   task: (traceContext: PersistedTraceContext) => Promise<T>,
 985 | ): Promise<T> {
 986 |   const span = tracer.startSpan(API_DURABLE_PRODUCER_SPAN, {
 987 |     parent,
 988 |     attributes: { operation, queue_type: queueType },
 989 |   });
 990 |   try {
 991 |     const result = await task(toPersistedTraceContext(span.context));
 992 |     span.end({ status: 'ok', attributes: { outcome: 'completed' } });
 993 |     return result;
 994 |   } catch (error) {
 995 |     span.end({ status: 'error', attributes: { outcome: 'failed' } });
 996 |     throw error;
 997 |   }
 998 | }
 999 |
1000 | function telemetryRoute(path: string): string {
1001 |   if (STATIC_TELEMETRY_ROUTES.has(path)) return path;
1002 |   if (/^\/v1\/risk-assessments\/[^/]+$/.test(path)) {
1003 |     return '/v1/risk-assessments/:assessment_id';
1004 |   }
1005 |   return 'unmatched';
1006 | }
1007 |
1008 | function telemetryMethod(method: string): string {
1009 |   const normalized = method.toUpperCase();
1010 |   return ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'].includes(normalized)
1011 |     ? normalized
1012 |     : 'OTHER';
1013 | }
1014 |
1015 | function telemetryStatusClass(status: number): string {
1016 |   const statusClass = Math.floor(status / 100);
1017 |   return statusClass >= 1 && statusClass <= 5 ? `${statusClass}xx` : 'other';
1018 | }
1019 |
1020 | function readRequestId(value: string | undefined): string | null {
1021 |   const requestId = value?.trim();
1022 |   if (!requestId || requestId.length > 100) return null;
1023 |   if (/^req_[A-Za-z0-9-]{1,80}$/.test(requestId)) return requestId;
1024 |   if (/^[a-f0-9]{16,32}$/i.test(requestId)) return requestId;
1025 |   if (
1026 |     /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(requestId)
1027 |   ) {
1028 |     return requestId;
1029 |   }
1030 |   return null;
1031 | }
1032 |
1033 | export class MemoryAssessmentRepository implements AssessmentRepository {
1034 |   private readonly byId = new Map<string, StoredAssessment>();
1035 |   private readonly byIdempotency = new Map<string, StoredAssessment>();
1036 |
1037 |   async findByIdempotency(input: {
1038 |     organizationId: string;
1039 |     storeId: string;
1040 |     idempotencyKey: string;
1041 |   }): Promise<StoredAssessment | null> {
1042 |     return (
1043 |       this.byIdempotency.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`) ??
1044 |       null
1045 |     );
1046 |   }
1047 |
1048 |   async findById(input: {
1049 |     organizationId: string;
1050 |     storeId: string;
1051 |     assessmentId: string;
1052 |   }): Promise<StoredAssessment | null> {
1053 |     const record = this.byId.get(input.assessmentId);
1054 |     if (
1055 |       !record ||
1056 |       record.identity.organizationId !== input.organizationId ||
1057 |       record.identity.storeId !== input.storeId
1058 |     ) {
1059 |       return null;
1060 |     }
1061 |     return record;
1062 |   }
1063 |
1064 |   async save(record: StoredAssessment): Promise<StoredAssessment> {
1065 |     const key = `${record.identity.organizationId}:${record.identity.storeId}:${record.idempotencyKey}`;
1066 |     const existing = this.byIdempotency.get(key);
1067 |     if (existing) return existing;
1068 |     this.byId.set(record.response.assessment_id, record);
1069 |     this.byIdempotency.set(key, record);
1070 |     return record;
1071 |   }
1072 | }
1073 |
1074 | export class MemoryOutcomeRepository implements OutcomeRepository {
1075 |   private readonly outcomes = new Map<string, string>();
1076 |
1077 |   async save(input: {
1078 |     organizationId: string;
1079 |     storeId: string;
1080 |     idempotencyKey: string;
1081 |     outcome: OrderOutcomeInput;
1082 |   }): Promise<{ outcomeId: string; replay: boolean }> {
1083 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
1084 |     const existing = this.outcomes.get(key);
1085 |     if (existing) return { outcomeId: existing, replay: true };
1086 |     const outcomeId = `out_${randomUUID()}`;
1087 |     this.outcomes.set(key, outcomeId);
1088 |     return { outcomeId, replay: false };
1089 |   }
1090 | }
1091 |
1092 | export class MemoryShadowComparisonRepository implements ShadowComparisonRepository {
1093 |   private readonly records = new Map<
1094 |     string,
1095 |     {
1096 |       comparisonId: string;
1097 |       comparison: NativeShadowComparisonInput;
1098 |       guardAssessment: RiskAssessmentResponse;
1099 |     }
1100 |   >();
1101 |
1102 |   async save(input: {
1103 |     organizationId: string;
1104 |     storeId: string;
1105 |     apiKeyId: string;
1106 |     idempotencyKey: string;
1107 |     comparison: NativeShadowComparisonInput;
1108 |     guardAssessment: RiskAssessmentResponse;
1109 |   }): Promise<{ comparisonId: string; replay: boolean }> {
1110 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
1111 |     const existing = this.records.get(key);
1112 |     if (existing) {
1113 |       if (
1114 |         JSON.stringify(existing.comparison) !== JSON.stringify(input.comparison) ||
1115 |         existing.guardAssessment.assessment_id !== input.guardAssessment.assessment_id
1116 |       ) {
1117 |         const error = new Error('SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') as Error & {
1118 |           code: string;
1119 |         };
1120 |         error.code = 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT';
1121 |         throw error;
1122 |       }
1123 |       return { comparisonId: existing.comparisonId, replay: true };
1124 |     }
1125 |     const comparisonId = `cmp_${randomUUID()}`;
1126 |     this.records.set(key, {
1127 |       comparisonId,
1128 |       comparison: input.comparison,
1129 |       guardAssessment: input.guardAssessment,
1130 |     });
1131 |     return { comparisonId, replay: false };
1132 |   }
1133 |
1134 |   findByIdempotency(input: { organizationId: string; storeId: string; idempotencyKey: string }):
1135 |     | {
1136 |         comparisonId: string;
1137 |         comparison: NativeShadowComparisonInput;
1138 |         guardAssessment: RiskAssessmentResponse;
1139 |       }
1140 |     | undefined {
1141 |     return this.records.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`);
1142 |   }
1143 | }
1144 |
1145 | export class MemoryOperationIdempotencyStore implements OperationIdempotencyStore {
1146 |   private readonly values = new Map<string, unknown>();
1147 |   async get(key: string): Promise<unknown> {
1148 |     return this.values.get(key) ?? null;
1149 |   }
1150 |   async set(key: string, value: unknown): Promise<void> {
1151 |     this.values.set(key, value);
1152 |   }
1153 | }
1154 |
1155 | export class MemoryRateLimiter implements RateLimiter {
1156 |   private readonly windows = new Map<string, { count: number; expiresAt: number }>();
1157 |   async consume(key: string, limit: number, windowMs: number): Promise<boolean> {
1158 |     const currentTime = Date.now();
1159 |     const current = this.windows.get(key);
1160 |     if (!current || current.expiresAt <= currentTime) {
1161 |       this.windows.set(key, { count: 1, expiresAt: currentTime + windowMs });
1162 |       return true;
1163 |     }
1164 |     if (current.count >= limit) return false;
1165 |     current.count += 1;
1166 |     return true;
1167 |   }
1168 | }
1169 |
1170 | export class MemoryRefreshQueue implements CourierRefreshQueue {
1171 |   async enqueue(): Promise<{ jobId: string }> {
1172 |     return { jobId: `cjob_${randomUUID()}` };
1173 |   }
1174 | }
1175 |
1176 | export class MissingFeatureProvider implements AssessmentFeatureProvider {
1177 |   async load(): Promise<AssessmentFeatureSet> {
1178 |     return {
1179 |       courier: {
1180 |         totalOrders: 0,
1181 |         deliveredOrders: 0,
1182 |         returnedOrders: 0,
1183 |         cancelledBeforeShipping: 0,
1184 |         providerCount: 0,
1185 |         freshness: 'missing',
1186 |         sourceConfidence: 0,
1187 |       },
1188 |       merchant: {
1189 |         deliveredOrders: 0,
1190 |         returnedOrders: 0,
1191 |         recentCancelledOrders: 0,
1192 |         previousSuccessfulCustomer: false,
1193 |       },
1194 |       velocity: {
1195 |         phoneOrdersLastHour: 0,
1196 |         devicePhoneCountLastDay: 0,
1197 |         ipCustomerCountLastHour: 0,
1198 |       },
1199 |       verification: { otpVerified: false, otpFailures: 0, phoneUnreachable: false },
1200 |       network: {
1201 |         confirmedNegativeOutcomes: 0,
1202 |         independentReporters: 0,
1203 |         confirmedPositiveOutcomes: 0,
1204 |         activeDispute: false,
1205 |       },
1206 |     };
1207 |   }
1208 | }
1209 |
1210 | function requireScope(identity: ApiKeyIdentity, scope: string, requestId: string): Response | null {
1211 |   if (identity.scopes.has('*') || identity.scopes.has(scope)) return null;
1212 |   return apiError(requestId, 403, 'INSUFFICIENT_SCOPE', `API key requires ${scope} scope`);
1213 | }
1214 |
1215 | function apiError(
1216 |   requestId: string,
1217 |   status: number,
1218 |   code: string,
1219 |   message: string,
1220 |   details?: Record<string, unknown>,
1221 | ): Response {
1222 |   return new Response(
1223 |     JSON.stringify({
1224 |       success: false,
1225 |       error: { code, message, ...(details === undefined ? {} : { details }) },
1226 |       request_id: requestId,
1227 |     }),
1228 |     {
1229 |       status,
1230 |       headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
1231 |     },
1232 |   );
1233 | }
1234 |
1235 | function verificationApiError(requestId: string, error: unknown): Response {
1236 |   if (error instanceof VerificationError) {
1237 |     const status =
1238 |       error.code === 'RATE_LIMITED'
1239 |         ? 429
1240 |         : error.code === 'NOT_FOUND'
1241 |           ? 404
1242 |           : error.code === 'DELIVERY_PENDING' || error.code === 'DELIVERY_FAILED'
1243 |             ? 409
1244 |             : 400;
1245 |     return apiError(requestId, status, error.code, error.message);
1246 |   }
1247 |   return apiError(
1248 |     requestId,
1249 |     503,
1250 |     'VERIFICATION_UNAVAILABLE',
1251 |     'Verification could not be completed',
1252 |   );
1253 | }
1254 |
1255 | async function parseJson<TOutput, TInput>(
1256 |   request: Request,
1257 |   schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
1258 | ): Promise<{ success: true; value: TOutput } | { success: false; message: string }> {
1259 |   try {
1260 |     const raw: unknown = await request.json();
1261 |     const parsed = schema.safeParse(raw);
1262 |     if (!parsed.success) {
1263 |       return {
1264 |         success: false,
1265 |         message: parsed.error.issues
1266 |           .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
1267 |           .join('; '),
1268 |       };
1269 |     }
1270 |     return { success: true, value: parsed.data };
1271 |   } catch {
1272 |     return { success: false, message: 'Request body must be valid JSON' };
1273 |   }
1274 | }
1275 |
1276 | function readIdempotencyKey(value: string | undefined): string | null {
1277 |   const normalized = value?.trim();
1278 |   if (!normalized || normalized.length > 200) return null;
1279 |   return normalized;
1280 | }
1281 |
1282 | function operationIdempotencyKey(
1283 |   identity: ApiKeyIdentity,
1284 |   operation: string,
1285 |   idempotencyKey: string,
1286 | ): string {
1287 |   return `${identity.organizationId}:${identity.storeId}:${operation}:${idempotencyKey}`;
1288 | }
1289 |
1290 | function billingPeriod(date: Date): string {
1291 |   return date.toISOString().slice(0, 7);
1292 | }
1293 |
```

### apps/api/src/postgres-verification.ts

Bytes: 12963
SHA-256: b567a8dc87b88465d69651c93e3b0fe110e97b1791612921aa1fd22431394c9c
Lines: 1-383 of 383

```typescript
  1 | import { randomInt, randomUUID } from 'node:crypto';
  2 | import type { Pool, PoolClient } from 'pg';
  3 | import type { EnvelopeCipher } from '@ozzyl/encryption';
  4 | import type { PersistedTraceContext } from '@ozzyl/observability';
  5 | import type { DomainEvent } from '@ozzyl/shared-types';
  6 | import { VerificationError, hashOtp, verifyOtp } from '@ozzyl/verification';
  7 | import type { OtpVerifier, VerificationRequestQueue } from './index.js';
  8 |
  9 | interface VerificationServiceOptions {
 10 |   otpSecret: string;
 11 |   cipher: EnvelopeCipher;
 12 |   expiryMs?: number;
 13 |   maxAttempts?: number;
 14 |   perPhoneWindowMs?: number;
 15 |   perPhoneLimit?: number;
 16 |   now?: () => Date;
 17 |   idFactory?: (prefix: string) => string;
 18 | }
 19 |
 20 | export class PostgresVerificationService implements VerificationRequestQueue, OtpVerifier {
 21 |   private readonly expiryMs: number;
 22 |   private readonly maxAttempts: number;
 23 |   private readonly perPhoneWindowMs: number;
 24 |   private readonly perPhoneLimit: number;
 25 |   private readonly now: () => Date;
 26 |   private readonly idFactory: (prefix: string) => string;
 27 |
 28 |   constructor(
 29 |     private readonly pool: Pool,
 30 |     private readonly options: VerificationServiceOptions,
 31 |   ) {
 32 |     if (options.otpSecret.length < 16)
 33 |       throw new Error('OTP_HASH_SECRET must be at least 16 characters');
 34 |     this.expiryMs = options.expiryMs ?? 5 * 60 * 1_000;
 35 |     this.maxAttempts = options.maxAttempts ?? 5;
 36 |     this.perPhoneWindowMs = options.perPhoneWindowMs ?? 60 * 60 * 1_000;
 37 |     this.perPhoneLimit = options.perPhoneLimit ?? 5;
 38 |     this.now = options.now ?? (() => new Date());
 39 |     this.idFactory = options.idFactory ?? ((prefix) => `${prefix}_${randomUUID()}`);
 40 |   }
 41 |
 42 |   async enqueueSend(input: {
 43 |     organizationId: string;
 44 |     storeId: string;
 45 |     assessmentId?: string;
 46 |     phone: string;
 47 |     phoneHash: string;
 48 |     purpose: string;
 49 |     idempotencyKey: string;
 50 |     traceContext?: PersistedTraceContext;
 51 |   }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }> {
 52 |     const client = await this.pool.connect();
 53 |     try {
 54 |       await client.query('begin');
 55 |       await client.query('select pg_advisory_xact_lock(hashtext($1))', [
 56 |         `${input.organizationId}:${input.storeId}:otp-send:${input.idempotencyKey}`,
 57 |       ]);
 58 |       await client.query('select pg_advisory_xact_lock(hashtext($1))', [
 59 |         `${input.organizationId}:${input.storeId}:otp-phone:${input.phoneHash}`,
 60 |       ]);
 61 |
 62 |       const existing = await client.query<{ id: string; expires_at: Date }>(
 63 |         `
 64 |           select id, expires_at
 65 |           from verification_sessions
 66 |           where organization_id = $1 and store_id = $2 and idempotency_key = $3
 67 |           limit 1
 68 |         `,
 69 |         [input.organizationId, input.storeId, input.idempotencyKey],
 70 |       );
 71 |       const existingRow = existing.rows[0];
 72 |       if (existingRow) {
 73 |         await client.query('commit');
 74 |         return {
 75 |           verificationId: existingRow.id,
 76 |           expiresAt: existingRow.expires_at.toISOString(),
 77 |           replay: true,
 78 |         };
 79 |       }
 80 |
 81 |       const scopedStore = await client.query(
 82 |         `
 83 |           select 1
 84 |           from stores s
 85 |           join organizations o on o.id = s.organization_id
 86 |           where s.id = $1 and s.organization_id = $2
 87 |             and s.status = 'active' and o.status = 'active'
 88 |           limit 1
 89 |         `,
 90 |         [input.storeId, input.organizationId],
 91 |       );
 92 |       if (scopedStore.rowCount !== 1) {
 93 |         throw new VerificationError('NOT_FOUND', 'Verification store scope was not found');
 94 |       }
 95 |       if (input.assessmentId) {
 96 |         const assessment = await client.query(
 97 |           `
 98 |             select 1 from risk_assessments
 99 |             where id = $1 and organization_id = $2 and store_id = $3
100 |             limit 1
101 |           `,
102 |           [input.assessmentId, input.organizationId, input.storeId],
103 |         );
104 |         if (assessment.rowCount !== 1) {
105 |           throw new VerificationError('NOT_FOUND', 'Assessment was not found for this store');
106 |         }
107 |       }
108 |
109 |       const now = this.now();
110 |       const recent = await client.query<{ count: number }>(
111 |         `
112 |           select count(*)::int as count
113 |           from verification_sessions
114 |           where organization_id = $1 and store_id = $2 and phone_hash = $3
115 |             and created_at >= $4
116 |         `,
117 |         [
118 |           input.organizationId,
119 |           input.storeId,
120 |           input.phoneHash,
121 |           new Date(now.getTime() - this.perPhoneWindowMs),
122 |         ],
123 |       );
124 |       if ((recent.rows[0]?.count ?? 0) >= this.perPhoneLimit) {
125 |         throw new VerificationError('RATE_LIMITED', 'Too many OTP requests for this phone');
126 |       }
127 |
128 |       const verificationId = this.idFactory('ver');
129 |       const attemptId = this.idFactory('otpa');
130 |       const jobId = this.idFactory('vjob');
131 |       const otp = String(randomInt(0, 1_000_000)).padStart(6, '0');
132 |       const expiresAt = new Date(now.getTime() + this.expiryMs);
133 |       const payloadEncrypted = this.options.cipher.encrypt(
134 |         {
135 |           verificationId,
136 |           organizationId: input.organizationId,
137 |           storeId: input.storeId,
138 |           phone: input.phone,
139 |           otp,
140 |           purpose: input.purpose,
141 |         },
142 |         `verification-job:${jobId}`,
143 |       );
144 |
145 |       await client.query(
146 |         `
147 |           insert into verification_sessions (
148 |             id, organization_id, store_id, assessment_id, phone_hash, purpose,
149 |             channel, status, idempotency_key, max_attempts, expires_at
150 |           ) values ($1, $2, $3, $4, $5, $6, 'otp', 'queued', $7, $8, $9)
151 |         `,
152 |         [
153 |           verificationId,
154 |           input.organizationId,
155 |           input.storeId,
156 |           input.assessmentId ?? null,
157 |           input.phoneHash,
158 |           input.purpose,
159 |           input.idempotencyKey,
160 |           this.maxAttempts,
161 |           expiresAt,
162 |         ],
163 |       );
164 |       await client.query(
165 |         `
166 |           insert into otp_attempts (
167 |             id, verification_session_id, otp_hash, attempt_count, expires_at
168 |           ) values ($1, $2, $3, 0, $4)
169 |         `,
170 |         [
171 |           attemptId,
172 |           verificationId,
173 |           hashOtp(verificationId, otp, this.options.otpSecret),
174 |           expiresAt,
175 |         ],
176 |       );
177 |       await client.query(
178 |         `
179 |           insert into verification_jobs (
180 |             id, verification_session_id, organization_id, store_id, job_type,
181 |             payload_encrypted, status, next_attempt_at, trace_parent, trace_state
182 |           ) values ($1, $2, $3, $4, 'send_otp', $5, 'queued', $6, $7, $8)
183 |         `,
184 |         [
185 |           jobId,
186 |           verificationId,
187 |           input.organizationId,
188 |           input.storeId,
189 |           payloadEncrypted,
190 |           now,
191 |           input.traceContext?.traceParent ?? null,
192 |           input.traceContext?.traceState ?? null,
193 |         ],
194 |       );
195 |       await client.query('commit');
196 |       return { verificationId, expiresAt: expiresAt.toISOString(), replay: false };
197 |     } catch (error) {
198 |       await client.query('rollback').catch(() => undefined);
199 |       throw error;
200 |     } finally {
201 |       client.release();
202 |     }
203 |   }
204 |
205 |   async verify(input: {
206 |     organizationId: string;
207 |     storeId: string;
208 |     verificationId: string;
209 |     otp: string;
210 |   }): Promise<{ verified: true }> {
211 |     const client = await this.pool.connect();
212 |     let committed = false;
213 |     try {
214 |       await client.query('begin');
215 |       const session = await client.query<{
216 |         id: string;
217 |         organization_id: string;
218 |         store_id: string;
219 |         purpose: string;
220 |         status: string;
221 |         max_attempts: number;
222 |         expires_at: Date;
223 |       }>(
224 |         `
225 |           select id, organization_id, store_id, purpose, status, max_attempts, expires_at
226 |           from verification_sessions
227 |           where id = $1 and organization_id = $2 and store_id = $3
228 |           for update
229 |         `,
230 |         [input.verificationId, input.organizationId, input.storeId],
231 |       );
232 |       const record = session.rows[0];
233 |       if (!record) throw new VerificationError('NOT_FOUND', 'Verification session was not found');
234 |       if (record.status === 'verified') {
235 |         await client.query('commit');
236 |         committed = true;
237 |         return { verified: true };
238 |       }
239 |       if (record.status === 'queued') {
240 |         throw new VerificationError('DELIVERY_PENDING', 'OTP delivery is still pending');
241 |       }
242 |       if (record.status === 'delivery_failed') {
243 |         throw new VerificationError('DELIVERY_FAILED', 'OTP delivery failed');
244 |       }
245 |       if (record.status === 'locked') {
246 |         throw new VerificationError('MAX_ATTEMPTS', 'Maximum OTP attempts reached');
247 |       }
248 |
249 |       const attempt = await client.query<{
250 |         id: string;
251 |         otp_hash: string;
252 |         attempt_count: number;
253 |       }>(
254 |         `
255 |           select id, otp_hash, attempt_count
256 |           from otp_attempts
257 |           where verification_session_id = $1
258 |           order by created_at desc, id desc
259 |           limit 1
260 |           for update
261 |         `,
262 |         [record.id],
263 |       );
264 |       const otpAttempt = attempt.rows[0];
265 |       if (!otpAttempt) throw new VerificationError('NOT_FOUND', 'OTP attempt was not found');
266 |       const now = this.now();
267 |       if (record.expires_at.getTime() <= now.getTime()) {
268 |         await client.query(
269 |           `update verification_sessions set status = 'expired', updated_at = now() where id = $1`,
270 |           [record.id],
271 |         );
272 |         await enqueueVerificationEvent(client, {
273 |           id: `evt_verification_failed_${record.id}`,
274 |           type: 'verification.failed',
275 |           organizationId: record.organization_id,
276 |           storeId: record.store_id,
277 |           occurredAt: now.toISOString(),
278 |           payload: { verificationId: record.id, purpose: record.purpose, errorCode: 'EXPIRED' },
279 |         });
280 |         await client.query('commit');
281 |         committed = true;
282 |         throw new VerificationError('INVALID_OR_EXPIRED_OTP', 'OTP is invalid or expired');
283 |       }
284 |
285 |       const nextAttempts = otpAttempt.attempt_count + 1;
286 |       const valid = verifyOtp(record.id, input.otp, otpAttempt.otp_hash, this.options.otpSecret);
287 |       if (!valid) {
288 |         const locked = nextAttempts >= record.max_attempts;
289 |         await client.query(
290 |           `update otp_attempts set attempt_count = $2, updated_at = now() where id = $1`,
291 |           [otpAttempt.id, nextAttempts],
292 |         );
293 |         if (locked) {
294 |           await client.query(
295 |             `update verification_sessions set status = 'locked', updated_at = now() where id = $1`,
296 |             [record.id],
297 |           );
298 |           await enqueueVerificationEvent(client, {
299 |             id: `evt_verification_failed_${record.id}`,
300 |             type: 'verification.failed',
301 |             organizationId: record.organization_id,
302 |             storeId: record.store_id,
303 |             occurredAt: now.toISOString(),
304 |             payload: {
305 |               verificationId: record.id,
306 |               purpose: record.purpose,
307 |               errorCode: 'MAX_ATTEMPTS',
308 |             },
309 |           });
310 |         }
311 |         await client.query('commit');
312 |         committed = true;
313 |         throw new VerificationError('INVALID_OR_EXPIRED_OTP', 'OTP is invalid or expired');
314 |       }
315 |
316 |       await client.query(
317 |         `update otp_attempts set attempt_count = $2, updated_at = now() where id = $1`,
318 |         [otpAttempt.id, nextAttempts],
319 |       );
320 |       await client.query(
321 |         `
322 |           update verification_sessions
323 |           set status = 'verified', verified_at = $2, updated_at = now()
324 |           where id = $1
325 |         `,
326 |         [record.id, now],
327 |       );
328 |       await enqueueVerificationEvent(client, {
329 |         id: `evt_verification_verified_${record.id}`,
330 |         type: 'verification.verified',
331 |         organizationId: record.organization_id,
332 |         storeId: record.store_id,
333 |         occurredAt: now.toISOString(),
334 |         payload: { verificationId: record.id, purpose: record.purpose },
335 |       });
336 |       await client.query('commit');
337 |       committed = true;
338 |       return { verified: true };
339 |     } catch (error) {
340 |       if (!committed) await client.query('rollback').catch(() => undefined);
341 |       throw error;
342 |     } finally {
343 |       client.release();
344 |     }
345 |   }
346 | }
347 |
348 | async function enqueueVerificationEvent(client: PoolClient, event: DomainEvent): Promise<void> {
349 |   await client.query(
350 |     `
351 |       insert into webhook_deliveries (
352 |         id, endpoint_id, organization_id, store_id, event_id, event_type,
353 |         event_payload, occurred_at, status, next_attempt_at
354 |       )
355 |       select
356 |         'whd_' || md5(we.id || ':' || $1),
357 |         we.id,
358 |         $2,
359 |         $3,
360 |         $1,
361 |         $4,
362 |         $5::jsonb,
363 |         $6,
364 |         'queued',
365 |         now()
366 |       from webhook_endpoints we
367 |       where we.organization_id = $2
368 |         and (we.store_id is null or we.store_id = $3)
369 |         and we.status = 'active'
370 |         and we.events @> jsonb_build_array($4::text)
371 |       on conflict (endpoint_id, event_id) do nothing
372 |     `,
373 |     [
374 |       event.id,
375 |       event.organizationId,
376 |       event.storeId ?? null,
377 |       event.type,
378 |       JSON.stringify(event),
379 |       event.occurredAt,
380 |     ],
381 |   );
382 | }
383 |
```

### apps/api/src/postgres.ts

Bytes: 46863
SHA-256: 9d1d3bc6cdaa895dd68f1a4a5ae67f90d02351a87b705eb9170e8d878a6489d2
Lines: 1-1382 of 1382

```typescript
   1 | import { randomUUID } from 'node:crypto';
   2 | import type { Pool, PoolClient } from 'pg';
   3 | import type { PersistedTraceContext } from '@ozzyl/observability';
   4 | import {
   5 |   generateSessionToken,
   6 |   hashOpaqueSecret,
   7 |   maskPhone,
   8 |   verifyPassword,
   9 | } from '@ozzyl/authentication';
  10 | import {
  11 |   PLANS,
  12 |   UsageLimitError,
  13 |   type PlanCode,
  14 |   type UsageLedger,
  15 |   type UsageReservation,
  16 | } from '@ozzyl/billing';
  17 | import {
  18 |   merchantDashboardOverviewSchema,
  19 |   platformAdminOverviewSchema,
  20 |   riskAssessmentRequestSchema,
  21 |   riskAssessmentResponseSchema,
  22 |   type BrowserOrganization,
  23 |   type MerchantDashboardOverview,
  24 |   type DomainEvent,
  25 |   type OrderOutcomeInput,
  26 |   type PlatformAdminOverview,
  27 |   type PlatformRole,
  28 | } from '@ozzyl/shared-types';
  29 | import type {
  30 |   ApiKeyIdentity,
  31 |   ApiKeyResolver,
  32 |   AssessmentFeatureProvider,
  33 |   AssessmentRepository,
  34 |   CourierRefreshQueue,
  35 |   OperationIdempotencyStore,
  36 |   OutcomeRepository,
  37 |   StoredAssessment,
  38 | } from './index.js';
  39 | import type {
  40 |   BrowserAuditRepository,
  41 |   BrowserAuthService,
  42 |   MerchantDashboardRepository,
  43 |   PlatformAdminRepository,
  44 |   UserSessionIdentity,
  45 | } from './browser.js';
  46 | import {
  47 |   loadPlatformNativeShadowPilotReport,
  48 |   loadStoreNativeShadowPilotReport,
  49 | } from './postgres-native-shadow-pilot.js';
  50 |
  51 | export class TenantScopeMismatchError extends Error {
  52 |   readonly code = 'TENANT_SCOPE_MISMATCH';
  53 |
  54 |   constructor() {
  55 |     super('Organization and store scope do not match an active tenant');
  56 |   }
  57 | }
  58 |
  59 | export class PostgresApiKeyResolver implements ApiKeyResolver {
  60 |   constructor(
  61 |     private readonly pool: Pool,
  62 |     private readonly pepper: string,
  63 |   ) {}
  64 |
  65 |   async resolve(rawApiKey: string): Promise<ApiKeyIdentity | null> {
  66 |     const keyHash = hashOpaqueSecret(rawApiKey, this.pepper);
  67 |     const result = await this.pool.query<{
  68 |       id: string;
  69 |       organization_id: string;
  70 |       store_id: string | null;
  71 |       environment: string;
  72 |       scopes: unknown;
  73 |       plan_code: string | null;
  74 |     }>(
  75 |       `
  76 |         select
  77 |           ak.id,
  78 |           ak.organization_id,
  79 |           ak.store_id,
  80 |           ak.environment,
  81 |           ak.scopes,
  82 |           p.code as plan_code
  83 |         from api_keys ak
  84 |         join organizations o on o.id = ak.organization_id and o.status = 'active'
  85 |         join stores s on s.id = ak.store_id
  86 |           and s.organization_id = ak.organization_id
  87 |           and s.status = 'active'
  88 |         left join plans p on p.id = o.plan_id
  89 |         where ak.key_hash = $1
  90 |           and ak.revoked_at is null
  91 |           and (ak.expires_at is null or ak.expires_at > now())
  92 |         limit 1
  93 |       `,
  94 |       [keyHash],
  95 |     );
  96 |     const row = result.rows[0];
  97 |     if (!row?.store_id || (row.environment !== 'test' && row.environment !== 'live')) return null;
  98 |     const plan = isPlanCode(row.plan_code) ? row.plan_code : 'free';
  99 |     const scopes = Array.isArray(row.scopes)
 100 |       ? new Set(row.scopes.filter((scope): scope is string => typeof scope === 'string'))
 101 |       : new Set<string>();
 102 |     void this.pool
 103 |       .query('update api_keys set last_used_at = now(), updated_at = now() where id = $1', [row.id])
 104 |       .catch(() => undefined);
 105 |     return {
 106 |       apiKeyId: row.id,
 107 |       organizationId: row.organization_id,
 108 |       storeId: row.store_id,
 109 |       environment: row.environment,
 110 |       plan,
 111 |       scopes,
 112 |     };
 113 |   }
 114 | }
 115 |
 116 | export class PostgresUsageLedger implements UsageLedger {
 117 |   constructor(private readonly pool: Pool) {}
 118 |
 119 |   async reserve(input: {
 120 |     organizationId: string;
 121 |     period: string;
 122 |     requestId: string;
 123 |     units: number;
 124 |     plan: PlanCode;
 125 |   }): Promise<UsageReservation> {
 126 |     const client = await this.pool.connect();
 127 |     try {
 128 |       await client.query('begin');
 129 |       await client.query('select pg_advisory_xact_lock(hashtext($1))', [
 130 |         `${input.organizationId}:${input.period}`,
 131 |       ]);
 132 |       const existing = await client.query<{ units: number }>(
 133 |         `
 134 |           select units
 135 |           from usage_events
 136 |           where organization_id = $1
 137 |             and event_type = 'risk_assessment'
 138 |             and request_id = $2
 139 |           limit 1
 140 |         `,
 141 |         [input.organizationId, input.requestId],
 142 |       );
 143 |       const used = await currentUsage(client, input.organizationId, input.period);
 144 |       const limit = PLANS[input.plan].monthlyAssessments;
 145 |       if (existing.rows[0]) {
 146 |         await client.query('commit');
 147 |         return { requestId: input.requestId, used, limit, replay: true };
 148 |       }
 149 |       if (limit !== null && used + input.units > limit) {
 150 |         throw new UsageLimitError(`Monthly assessment limit of ${limit} exceeded`);
 151 |       }
 152 |       await client.query(
 153 |         `
 154 |           insert into usage_events (
 155 |             id, organization_id, event_type, units, request_id, period
 156 |           ) values ($1, $2, 'risk_assessment', $3, $4, $5)
 157 |         `,
 158 |         [`use_${randomUUID()}`, input.organizationId, input.units, input.requestId, input.period],
 159 |       );
 160 |       await client.query('commit');
 161 |       return {
 162 |         requestId: input.requestId,
 163 |         used: used + input.units,
 164 |         limit,
 165 |         replay: false,
 166 |       };
 167 |     } catch (error) {
 168 |       await client.query('rollback').catch(() => undefined);
 169 |       throw error;
 170 |     } finally {
 171 |       client.release();
 172 |     }
 173 |   }
 174 | }
 175 |
 176 | export class PostgresAssessmentRepository implements AssessmentRepository {
 177 |   constructor(private readonly pool: Pool) {}
 178 |
 179 |   async findByIdempotency(input: {
 180 |     organizationId: string;
 181 |     storeId: string;
 182 |     idempotencyKey: string;
 183 |   }): Promise<StoredAssessment | null> {
 184 |     const result = await this.pool.query<AssessmentRow>(
 185 |       `
 186 |         select id, organization_id, store_id, api_key_id, idempotency_key, phone_hash, order_snapshot
 187 |         from risk_assessments
 188 |         where organization_id = $1 and store_id = $2 and idempotency_key = $3
 189 |         limit 1
 190 |       `,
 191 |       [input.organizationId, input.storeId, input.idempotencyKey],
 192 |     );
 193 |     return result.rows[0] ? parseAssessmentRow(result.rows[0]) : null;
 194 |   }
 195 |
 196 |   async findById(input: {
 197 |     organizationId: string;
 198 |     storeId: string;
 199 |     assessmentId: string;
 200 |   }): Promise<StoredAssessment | null> {
 201 |     const result = await this.pool.query<AssessmentRow>(
 202 |       `
 203 |         select id, organization_id, store_id, api_key_id, idempotency_key, phone_hash, order_snapshot
 204 |         from risk_assessments
 205 |         where organization_id = $1 and store_id = $2 and id = $3
 206 |         limit 1
 207 |       `,
 208 |       [input.organizationId, input.storeId, input.assessmentId],
 209 |     );
 210 |     return result.rows[0] ? parseAssessmentRow(result.rows[0]) : null;
 211 |   }
 212 |
 213 |   async save(record: StoredAssessment): Promise<StoredAssessment> {
 214 |     const client = await this.pool.connect();
 215 |     try {
 216 |       await client.query('begin');
 217 |       await assertActiveStoreScope(client, record.identity.organizationId, record.identity.storeId);
 218 |       const inserted = await client.query<{ id: string }>(
 219 |         `
 220 |           insert into risk_assessments (
 221 |             id, organization_id, store_id, api_key_id, external_order_id,
 222 |             idempotency_key, phone_hash, order_snapshot, score, confidence,
 223 |             risk_level, decision, engine_version, policy_version, degraded
 224 |           ) values (
 225 |             $1, $2, $3, $4, $5,
 226 |             $6, $7, $8::jsonb, $9, $10,
 227 |             $11, $12, $13, $14, $15
 228 |           )
 229 |           on conflict (organization_id, store_id, idempotency_key) do nothing
 230 |           returning id
 231 |         `,
 232 |         [
 233 |           record.response.assessment_id,
 234 |           record.identity.organizationId,
 235 |           record.identity.storeId,
 236 |           record.identity.apiKeyId,
 237 |           record.request.external_order_id ?? null,
 238 |           record.idempotencyKey,
 239 |           record.phoneHash,
 240 |           JSON.stringify({ request: record.request, response: record.response }),
 241 |           record.response.risk_score,
 242 |           record.response.confidence,
 243 |           record.response.risk_level,
 244 |           record.response.decision,
 245 |           record.response.meta?.engine_version ?? 'unknown',
 246 |           record.response.meta?.policy_version ?? 'unknown',
 247 |           record.response.meta?.degraded ?? true,
 248 |         ],
 249 |       );
 250 |       if (!inserted.rows[0]) {
 251 |         const existing = await client.query<AssessmentRow>(
 252 |           `
 253 |             select id, organization_id, store_id, api_key_id, idempotency_key, phone_hash, order_snapshot
 254 |             from risk_assessments
 255 |             where organization_id = $1 and store_id = $2 and idempotency_key = $3
 256 |             limit 1
 257 |           `,
 258 |           [record.identity.organizationId, record.identity.storeId, record.idempotencyKey],
 259 |         );
 260 |         const row = existing.rows[0];
 261 |         if (!row) throw new Error('Assessment idempotency conflict could not be resolved');
 262 |         await client.query('commit');
 263 |         return parseAssessmentRow(row);
 264 |       }
 265 |       for (const signal of record.response.signals) {
 266 |         await client.query(
 267 |           `
 268 |             insert into risk_signals (
 269 |               id, assessment_id, code, category, score, confidence, description
 270 |             ) values ($1, $2, $3, $4, $5, $6, $7)
 271 |             on conflict do nothing
 272 |           `,
 273 |           [
 274 |             `sig_${randomUUID()}`,
 275 |             record.response.assessment_id,
 276 |             signal.code,
 277 |             signal.category,
 278 |             signal.score,
 279 |             signal.confidence ?? null,
 280 |             signal.description,
 281 |           ],
 282 |         );
 283 |       }
 284 |       await enqueueWebhookDeliveries(
 285 |         client,
 286 |         {
 287 |           id: `evt_assessment_${record.response.assessment_id}`,
 288 |           type: 'assessment.completed',
 289 |           organizationId: record.identity.organizationId,
 290 |           storeId: record.identity.storeId,
 291 |           occurredAt: new Date().toISOString(),
 292 |           payload: {
 293 |             assessmentId: record.response.assessment_id,
 294 |             externalOrderId: record.request.external_order_id ?? null,
 295 |             riskScore: record.response.risk_score,
 296 |             riskLevel: record.response.risk_level,
 297 |             decision: record.response.decision,
 298 |             confidence: record.response.confidence,
 299 |             degraded: record.response.meta?.degraded ?? true,
 300 |           },
 301 |         },
 302 |         record.traceContext,
 303 |       );
 304 |       await client.query('commit');
 305 |       return record;
 306 |     } catch (error) {
 307 |       await client.query('rollback').catch(() => undefined);
 308 |       throw error;
 309 |     } finally {
 310 |       client.release();
 311 |     }
 312 |   }
 313 | }
 314 |
 315 | export class PostgresOutcomeRepository implements OutcomeRepository {
 316 |   constructor(private readonly pool: Pool) {}
 317 |
 318 |   async save(input: {
 319 |     organizationId: string;
 320 |     storeId: string;
 321 |     idempotencyKey: string;
 322 |     outcome: OrderOutcomeInput;
 323 |     traceContext?: PersistedTraceContext;
 324 |   }): Promise<{ outcomeId: string; replay: boolean }> {
 325 |     const client = await this.pool.connect();
 326 |     try {
 327 |       await client.query('begin');
 328 |       await assertActiveStoreScope(client, input.organizationId, input.storeId);
 329 |       await client.query('select pg_advisory_xact_lock(hashtext($1))', [
 330 |         `${input.organizationId}:${input.storeId}:outcome:${input.idempotencyKey}`,
 331 |       ]);
 332 |       let phoneHash: string | null = null;
 333 |       if (input.outcome.assessment_id) {
 334 |         const assessment = await client.query<{ phone_hash: string }>(
 335 |           `
 336 |             select phone_hash from risk_assessments
 337 |             where id = $1 and organization_id = $2 and store_id = $3
 338 |             limit 1
 339 |           `,
 340 |           [input.outcome.assessment_id, input.organizationId, input.storeId],
 341 |         );
 342 |         phoneHash = assessment.rows[0]?.phone_hash ?? null;
 343 |       }
 344 |
 345 |       const outcomeId = `out_${randomUUID()}`;
 346 |       const inserted = await client.query<{ id: string }>(
 347 |         `
 348 |           insert into order_outcomes (
 349 |             id, organization_id, store_id, external_order_id, idempotency_key,
 350 |             assessment_id, phone_hash, outcome, provider, reason, source, occurred_at
 351 |           ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'api', $11)
 352 |           on conflict (organization_id, store_id, idempotency_key) do nothing
 353 |           returning id
 354 |         `,
 355 |         [
 356 |           outcomeId,
 357 |           input.organizationId,
 358 |           input.storeId,
 359 |           input.outcome.external_order_id,
 360 |           input.idempotencyKey,
 361 |           input.outcome.assessment_id ?? null,
 362 |           phoneHash,
 363 |           input.outcome.outcome,
 364 |           input.outcome.provider ?? null,
 365 |           input.outcome.reason ?? null,
 366 |           input.outcome.occurred_at,
 367 |         ],
 368 |       );
 369 |       const insertedRow = inserted.rows[0];
 370 |       if (insertedRow) {
 371 |         await enqueueWebhookDeliveries(
 372 |           client,
 373 |           {
 374 |             id: `evt_outcome_${insertedRow.id}`,
 375 |             type: 'order.outcome_recorded',
 376 |             organizationId: input.organizationId,
 377 |             storeId: input.storeId,
 378 |             occurredAt: input.outcome.occurred_at,
 379 |             payload: {
 380 |               outcomeId: insertedRow.id,
 381 |               assessmentId: input.outcome.assessment_id ?? null,
 382 |               externalOrderId: input.outcome.external_order_id,
 383 |               outcome: input.outcome.outcome,
 384 |               provider: input.outcome.provider ?? null,
 385 |             },
 386 |           },
 387 |           input.traceContext,
 388 |         );
 389 |         await client.query('commit');
 390 |         return { outcomeId: insertedRow.id, replay: false };
 391 |       }
 392 |
 393 |       const existing = await client.query<{ id: string }>(
 394 |         `
 395 |           select id from order_outcomes
 396 |           where organization_id = $1 and store_id = $2 and idempotency_key = $3
 397 |           limit 1
 398 |         `,
 399 |         [input.organizationId, input.storeId, input.idempotencyKey],
 400 |       );
 401 |       const existingRow = existing.rows[0];
 402 |       if (!existingRow) throw new Error('Outcome idempotency conflict could not be resolved');
 403 |       await client.query('commit');
 404 |       return { outcomeId: existingRow.id, replay: true };
 405 |     } catch (error) {
 406 |       await client.query('rollback').catch(() => undefined);
 407 |       throw error;
 408 |     } finally {
 409 |       client.release();
 410 |     }
 411 |   }
 412 | }
 413 |
 414 | export class PostgresOperationIdempotencyStore implements OperationIdempotencyStore {
 415 |   constructor(
 416 |     private readonly pool: Pool,
 417 |     private readonly ttlMs = 24 * 60 * 60 * 1_000,
 418 |   ) {}
 419 |
 420 |   async get(key: string): Promise<unknown> {
 421 |     const scope = parseOperationKey(key);
 422 |     const result = await this.pool.query<{ response: unknown }>(
 423 |       `
 424 |         select response from idempotency_records
 425 |         where organization_id = $1 and store_id = $2 and operation = $3
 426 |           and idempotency_key = $4 and expires_at > now()
 427 |         limit 1
 428 |       `,
 429 |       [scope.organizationId, scope.storeId, scope.operation, scope.idempotencyKey],
 430 |     );
 431 |     return result.rows[0]?.response ?? null;
 432 |   }
 433 |
 434 |   async set(key: string, value: unknown): Promise<void> {
 435 |     const scope = parseOperationKey(key);
 436 |     await this.pool.query(
 437 |       `
 438 |         insert into idempotency_records (
 439 |           id, organization_id, store_id, operation, idempotency_key, response, expires_at
 440 |         ) values ($1, $2, $3, $4, $5, $6::jsonb, $7)
 441 |         on conflict (organization_id, store_id, operation, idempotency_key)
 442 |         do update set response = excluded.response, expires_at = excluded.expires_at, updated_at = now()
 443 |       `,
 444 |       [
 445 |         `idem_${randomUUID()}`,
 446 |         scope.organizationId,
 447 |         scope.storeId,
 448 |         scope.operation,
 449 |         scope.idempotencyKey,
 450 |         JSON.stringify(value),
 451 |         new Date(Date.now() + this.ttlMs),
 452 |       ],
 453 |     );
 454 |   }
 455 | }
 456 |
 457 | export class CourierConnectionRequiredError extends Error {
 458 |   readonly code = 'COURIER_CONNECTION_REQUIRED';
 459 | }
 460 |
 461 | export class PostgresCourierRefreshQueue implements CourierRefreshQueue {
 462 |   constructor(private readonly pool: Pool) {}
 463 |
 464 |   async enqueue(input: {
 465 |     organizationId: string;
 466 |     storeId: string;
 467 |     phone: string;
 468 |     phoneHash: string;
 469 |     providers: string[];
 470 |     force: boolean;
 471 |     traceContext?: PersistedTraceContext;
 472 |   }): Promise<{ jobId: string }> {
 473 |     const accounts = await this.pool.query<{ id: string; provider: string }>(
 474 |       `
 475 |         select ca.id, ca.provider
 476 |         from courier_accounts ca
 477 |         join stores s on s.id = ca.store_id
 478 |         where ca.store_id = $1 and s.organization_id = $2
 479 |           and ca.provider = any($3::text[])
 480 |           and ca.status in ('connected', 'pending', 'expired')
 481 |       `,
 482 |       [input.storeId, input.organizationId, input.providers],
 483 |     );
 484 |     if (accounts.rows.length === 0) {
 485 |       throw new CourierConnectionRequiredError('No requested courier account is connected');
 486 |     }
 487 |     const batchId = `cjob_${randomUUID()}`;
 488 |     const client = await this.pool.connect();
 489 |     try {
 490 |       await client.query('begin');
 491 |       for (const account of accounts.rows) {
 492 |         await client.query(
 493 |           `
 494 |             insert into courier_jobs (
 495 |               id, courier_account_id, job_type, status, scheduled_at, payload,
 496 |               trace_parent, trace_state
 497 |             ) values ($1, $2, 'customer_observation_refresh', 'queued', now(), $3::jsonb, $4, $5)
 498 |           `,
 499 |           [
 500 |             `cj_${randomUUID()}`,
 501 |             account.id,
 502 |             JSON.stringify({
 503 |               batchId,
 504 |               organizationId: input.organizationId,
 505 |               storeId: input.storeId,
 506 |               provider: account.provider,
 507 |               phone: input.phone,
 508 |               phoneHash: input.phoneHash,
 509 |               force: input.force,
 510 |             }),
 511 |             input.traceContext?.traceParent ?? null,
 512 |             input.traceContext?.traceState ?? null,
 513 |           ],
 514 |         );
 515 |       }
 516 |       await client.query('commit');
 517 |       return { jobId: batchId };
 518 |     } catch (error) {
 519 |       await client.query('rollback').catch(() => undefined);
 520 |       throw error;
 521 |     } finally {
 522 |       client.release();
 523 |     }
 524 |   }
 525 | }
 526 |
 527 | export class PostgresAssessmentFeatureProvider implements AssessmentFeatureProvider {
 528 |   constructor(private readonly pool: Pool) {}
 529 |
 530 |   async load(input: Parameters<AssessmentFeatureProvider['load']>[0]) {
 531 |     await assertActiveStoreScope(this.pool, input.identity.organizationId, input.identity.storeId);
 532 |     const [observationsResult, merchantResult, verificationResult, networkResult, policyResult] =
 533 |       await Promise.all([
 534 |         this.pool.query<ObservationRow>(
 535 |           `
 536 |             select distinct on (co.provider)
 537 |               co.provider, co.total_orders, co.delivered_orders, co.returned_orders,
 538 |               co.cancelled_before_shipping, co.confidence, co.expires_at
 539 |             from courier_observations co
 540 |             join stores s on s.id = co.store_id
 541 |             where co.store_id = $1 and s.organization_id = $2 and s.status = 'active'
 542 |               and co.phone_hash = $3
 543 |             order by co.provider, co.observed_at desc
 544 |           `,
 545 |           [input.identity.storeId, input.identity.organizationId, input.phoneHash],
 546 |         ),
 547 |         this.pool.query<{
 548 |           delivered: number;
 549 |           returned: number;
 550 |           cancelled: number;
 551 |         }>(
 552 |           `
 553 |             select
 554 |               count(*) filter (where outcome = 'delivered')::int as delivered,
 555 |               count(*) filter (where outcome = 'returned')::int as returned,
 556 |               count(*) filter (
 557 |                 where outcome = 'cancelled_before_shipping'
 558 |                   and occurred_at > now() - interval '30 days'
 559 |               )::int as cancelled
 560 |             from order_outcomes
 561 |             where organization_id = $1 and store_id = $2 and phone_hash = $3
 562 |           `,
 563 |           [input.identity.organizationId, input.identity.storeId, input.phoneHash],
 564 |         ),
 565 |         this.pool.query<{ verified: boolean; attempts: number }>(
 566 |           `
 567 |             select
 568 |               exists(
 569 |                 select 1 from verification_sessions
 570 |                 where organization_id = $1 and store_id = $2 and phone_hash = $3
 571 |                   and status = 'verified'
 572 |                   and verified_at > now() - interval '90 days'
 573 |               ) as verified,
 574 |               coalesce(sum(oa.attempt_count), 0)::int as attempts
 575 |             from verification_sessions vs
 576 |             left join otp_attempts oa on oa.verification_session_id = vs.id
 577 |             where vs.organization_id = $1 and vs.store_id = $2 and vs.phone_hash = $3
 578 |           `,
 579 |           [input.identity.organizationId, input.identity.storeId, input.phoneHash],
 580 |         ),
 581 |         this.pool.query<{
 582 |           negative: number;
 583 |           reporters: number;
 584 |           positive: number;
 585 |         }>(
 586 |           `
 587 |             select
 588 |               count(*) filter (where oo.outcome = 'returned')::int as negative,
 589 |               count(distinct oo.store_id) filter (where oo.outcome = 'returned')::int as reporters,
 590 |               count(*) filter (where oo.outcome = 'delivered')::int as positive
 591 |             from order_outcomes oo
 592 |             join stores s on s.id = oo.store_id
 593 |             where s.organization_id = $1 and oo.phone_hash = $2
 594 |           `,
 595 |           [input.identity.organizationId, input.phoneHash],
 596 |         ),
 597 |         this.pool.query<{ policy: unknown }>(
 598 |           `
 599 |             select rp.policy
 600 |             from risk_policies rp
 601 |             join stores s on s.id = rp.store_id
 602 |             where rp.store_id = $1 and s.organization_id = $2 and s.status = 'active'
 603 |               and rp.active = true
 604 |             limit 1
 605 |           `,
 606 |           [input.identity.storeId, input.identity.organizationId],
 607 |         ),
 608 |       ]);
 609 |
 610 |     const observations = observationsResult.rows;
 611 |     const now = Date.now();
 612 |     const merchant = merchantResult.rows[0] ?? { delivered: 0, returned: 0, cancelled: 0 };
 613 |     const verification = verificationResult.rows[0] ?? { verified: false, attempts: 0 };
 614 |     const network = networkResult.rows[0] ?? { negative: 0, reporters: 0, positive: 0 };
 615 |     return {
 616 |       courier: {
 617 |         totalOrders: observations.reduce((sum, row) => sum + row.total_orders, 0),
 618 |         deliveredOrders: observations.reduce((sum, row) => sum + row.delivered_orders, 0),
 619 |         returnedOrders: observations.reduce((sum, row) => sum + row.returned_orders, 0),
 620 |         cancelledBeforeShipping: observations.reduce(
 621 |           (sum, row) => sum + row.cancelled_before_shipping,
 622 |           0,
 623 |         ),
 624 |         providerCount: observations.length,
 625 |         freshness:
 626 |           observations.length === 0
 627 |             ? ('missing' as const)
 628 |             : observations.every((row) => new Date(row.expires_at).getTime() > now)
 629 |               ? ('fresh' as const)
 630 |               : ('stale' as const),
 631 |         sourceConfidence:
 632 |           observations.length === 0
 633 |             ? 0
 634 |             : observations.reduce((sum, row) => sum + Number(row.confidence), 0) /
 635 |               observations.length,
 636 |       },
 637 |       merchant: {
 638 |         deliveredOrders: merchant.delivered,
 639 |         returnedOrders: merchant.returned,
 640 |         recentCancelledOrders: merchant.cancelled,
 641 |         previousSuccessfulCustomer: merchant.delivered > 0,
 642 |       },
 643 |       velocity: {
 644 |         phoneOrdersLastHour: 0,
 645 |         devicePhoneCountLastDay: 0,
 646 |         ipCustomerCountLastHour: 0,
 647 |       },
 648 |       verification: {
 649 |         otpVerified: verification.verified,
 650 |         otpFailures: verification.attempts,
 651 |         phoneUnreachable: false,
 652 |       },
 653 |       network: {
 654 |         confirmedNegativeOutcomes: network.negative,
 655 |         independentReporters: network.reporters,
 656 |         confirmedPositiveOutcomes: network.positive,
 657 |         activeDispute: false,
 658 |       },
 659 |       ...(isRiskPolicy(policyResult.rows[0]?.policy)
 660 |         ? { policy: policyResult.rows[0]?.policy }
 661 |         : {}),
 662 |     };
 663 |   }
 664 | }
 665 |
 666 | export class PostgresBrowserAuthService implements BrowserAuthService {
 667 |   constructor(
 668 |     private readonly pool: Pool,
 669 |     private readonly sessionPepper: string,
 670 |     private readonly sessionTtlMs = 7 * 24 * 60 * 60 * 1_000,
 671 |   ) {}
 672 |
 673 |   async login(email: string, password: string) {
 674 |     const result = await this.pool.query<{
 675 |       id: string;
 676 |       email: string;
 677 |       password_hash: string | null;
 678 |       platform_role: string;
 679 |     }>(
 680 |       `
 681 |         select id, email, password_hash, platform_role
 682 |         from users
 683 |         where lower(email) = lower($1) and status = 'active'
 684 |         limit 1
 685 |       `,
 686 |       [email],
 687 |     );
 688 |     const user = result.rows[0];
 689 |     if (!user?.password_hash || !isPlatformRole(user.platform_role)) return null;
 690 |     if (!(await verifyPassword(user.password_hash, password))) return null;
 691 |
 692 |     const generated = generateSessionToken(this.sessionPepper);
 693 |     const sessionId = `ses_${randomUUID()}`;
 694 |     const expiresAt = new Date(Date.now() + this.sessionTtlMs);
 695 |     await this.pool.query(
 696 |       `
 697 |         insert into user_sessions (id, user_id, token_hash, expires_at)
 698 |         values ($1, $2, $3, $4)
 699 |       `,
 700 |       [sessionId, user.id, generated.tokenHash, expiresAt],
 701 |     );
 702 |     const identity = await loadUserSessionIdentity(this.pool, {
 703 |       sessionId,
 704 |       userId: user.id,
 705 |       email: user.email,
 706 |       platformRole: user.platform_role,
 707 |       expiresAt,
 708 |     });
 709 |     return identity ? { rawToken: generated.rawToken, identity } : null;
 710 |   }
 711 |
 712 |   async resolve(rawToken: string): Promise<UserSessionIdentity | null> {
 713 |     const tokenHash = hashOpaqueSecret(rawToken, this.sessionPepper);
 714 |     const result = await this.pool.query<{
 715 |       session_id: string;
 716 |       user_id: string;
 717 |       email: string;
 718 |       platform_role: string;
 719 |       expires_at: Date | string;
 720 |     }>(
 721 |       `
 722 |         select
 723 |           us.id as session_id,
 724 |           u.id as user_id,
 725 |           u.email,
 726 |           u.platform_role,
 727 |           us.expires_at
 728 |         from user_sessions us
 729 |         join users u on u.id = us.user_id and u.status = 'active'
 730 |         where us.token_hash = $1
 731 |           and us.revoked_at is null
 732 |           and us.expires_at > now()
 733 |         limit 1
 734 |       `,
 735 |       [tokenHash],
 736 |     );
 737 |     const row = result.rows[0];
 738 |     if (!row || !isPlatformRole(row.platform_role)) return null;
 739 |     return loadUserSessionIdentity(this.pool, {
 740 |       sessionId: row.session_id,
 741 |       userId: row.user_id,
 742 |       email: row.email,
 743 |       platformRole: row.platform_role,
 744 |       expiresAt: row.expires_at,
 745 |     });
 746 |   }
 747 |
 748 |   async revoke(input: { sessionId: string; userId: string }): Promise<void> {
 749 |     await this.pool.query(
 750 |       `
 751 |         update user_sessions
 752 |         set revoked_at = now()
 753 |         where id = $1 and user_id = $2 and revoked_at is null
 754 |       `,
 755 |       [input.sessionId, input.userId],
 756 |     );
 757 |   }
 758 | }
 759 |
 760 | export class PostgresBrowserAuditRepository implements BrowserAuditRepository {
 761 |   constructor(private readonly pool: Pool) {}
 762 |
 763 |   async record(input: {
 764 |     organizationId: string | null;
 765 |     actorId: string | null;
 766 |     action: string;
 767 |     targetType?: string;
 768 |     targetId?: string;
 769 |     metadata?: Record<string, unknown>;
 770 |   }): Promise<void> {
 771 |     await this.pool.query(
 772 |       `
 773 |         insert into audit_events (
 774 |           id, organization_id, actor_type, actor_id, action, target_type, target_id, metadata
 775 |         ) values ($1, $2, 'user', $3, $4, $5, $6, $7::jsonb)
 776 |       `,
 777 |       [
 778 |         `aud_${randomUUID()}`,
 779 |         input.organizationId,
 780 |         input.actorId,
 781 |         input.action,
 782 |         input.targetType ?? null,
 783 |         input.targetId ?? null,
 784 |         JSON.stringify(input.metadata ?? {}),
 785 |       ],
 786 |     );
 787 |   }
 788 | }
 789 |
 790 | export class PostgresMerchantDashboardRepository implements MerchantDashboardRepository {
 791 |   constructor(private readonly pool: Pool) {}
 792 |
 793 |   async loadOverview(input: {
 794 |     userId: string;
 795 |     organizationId: string;
 796 |     storeId: string;
 797 |     now: Date;
 798 |   }): Promise<MerchantDashboardOverview | null> {
 799 |     const scopeResult = await this.pool.query<{
 800 |       organization_id: string;
 801 |       organization_name: string;
 802 |       store_id: string;
 803 |       store_name: string;
 804 |       platform: string;
 805 |       role: string;
 806 |       plan_code: string | null;
 807 |     }>(
 808 |       `
 809 |         select
 810 |           o.id as organization_id,
 811 |           o.name as organization_name,
 812 |           s.id as store_id,
 813 |           s.name as store_name,
 814 |           s.platform,
 815 |           om.role,
 816 |           p.code as plan_code
 817 |         from organization_members om
 818 |         join organizations o on o.id = om.organization_id and o.status = 'active'
 819 |         join stores s on s.organization_id = o.id and s.status = 'active'
 820 |         left join plans p on p.id = o.plan_id
 821 |         where om.user_id = $1 and o.id = $2 and s.id = $3
 822 |         limit 1
 823 |       `,
 824 |       [input.userId, input.organizationId, input.storeId],
 825 |     );
 826 |     const scope = scopeResult.rows[0];
 827 |     if (!scope) return null;
 828 |
 829 |     const month = input.now.toISOString().slice(0, 7);
 830 |     const [assessmentResult, verificationResult, usageResult, reviewResult, courierResult] =
 831 |       await Promise.all([
 832 |         this.pool.query<{
 833 |           assessments: number;
 834 |           degraded: number;
 835 |           pending: number;
 836 |           allow_count: number;
 837 |           verify_count: number;
 838 |           review_count: number;
 839 |           hold_count: number;
 840 |           block_count: number;
 841 |         }>(
 842 |           `
 843 |             select
 844 |               count(*)::int as assessments,
 845 |               count(*) filter (where degraded)::int as degraded,
 846 |               count(*) filter (where decision in ('verify', 'review', 'hold', 'block'))::int as pending,
 847 |               count(*) filter (where decision = 'allow')::int as allow_count,
 848 |               count(*) filter (where decision = 'verify')::int as verify_count,
 849 |               count(*) filter (where decision = 'review')::int as review_count,
 850 |               count(*) filter (where decision = 'hold')::int as hold_count,
 851 |               count(*) filter (where decision = 'block')::int as block_count
 852 |             from risk_assessments
 853 |             where organization_id = $1 and store_id = $2
 854 |               and created_at >= $3::timestamptz - interval '30 days'
 855 |           `,
 856 |           [input.organizationId, input.storeId, input.now],
 857 |         ),
 858 |         this.pool.query<{ verified: number }>(
 859 |           `
 860 |             select count(*)::int as verified
 861 |             from verification_sessions
 862 |             where organization_id = $1 and store_id = $2 and status = 'verified'
 863 |               and verified_at >= $3::timestamptz - interval '30 days'
 864 |           `,
 865 |           [input.organizationId, input.storeId, input.now],
 866 |         ),
 867 |         this.pool.query<{ used: number }>(
 868 |           `
 869 |             select coalesce(sum(units), 0)::int as used
 870 |             from usage_events
 871 |             where organization_id = $1 and period = $2 and event_type = 'risk_assessment'
 872 |           `,
 873 |           [input.organizationId, month],
 874 |         ),
 875 |         this.pool.query<DashboardReviewRow>(
 876 |           `
 877 |             select
 878 |               ra.id,
 879 |               ra.external_order_id,
 880 |               ra.score,
 881 |               ra.decision,
 882 |               ra.confidence,
 883 |               ra.order_snapshot,
 884 |               ra.created_at,
 885 |               coalesce(
 886 |                 jsonb_agg(
 887 |                   jsonb_build_object(
 888 |                     'code', rs.code,
 889 |                     'score', rs.score,
 890 |                     'description', rs.description
 891 |                   ) order by rs.score desc
 892 |                 ) filter (where rs.id is not null),
 893 |                 '[]'::jsonb
 894 |               ) as signals
 895 |             from risk_assessments ra
 896 |             left join risk_signals rs on rs.assessment_id = ra.id
 897 |             where ra.organization_id = $1 and ra.store_id = $2
 898 |               and ra.decision in ('verify', 'review', 'hold', 'block')
 899 |             group by ra.id
 900 |             order by ra.created_at desc
 901 |             limit 20
 902 |           `,
 903 |           [input.organizationId, input.storeId],
 904 |         ),
 905 |         this.pool.query<{
 906 |           provider: string;
 907 |           status: string;
 908 |           last_success_at: Date | string | null;
 909 |           last_failure_at: Date | string | null;
 910 |           failure_code: string | null;
 911 |         }>(
 912 |           `
 913 |             select ca.provider, ca.status, ca.last_success_at, ca.last_failure_at, ca.failure_code
 914 |             from courier_accounts ca
 915 |             join stores s on s.id = ca.store_id
 916 |             where s.organization_id = $1 and ca.store_id = $2
 917 |             order by ca.provider
 918 |           `,
 919 |           [input.organizationId, input.storeId],
 920 |         ),
 921 |       ]);
 922 |     const shadowPilot = await loadStoreNativeShadowPilotReport(this.pool, {
 923 |       organizationId: input.organizationId,
 924 |       storeId: input.storeId,
 925 |       now: input.now,
 926 |     });
 927 |
 928 |     const assessment = assessmentResult.rows[0] ?? emptyAssessmentAggregate();
 929 |     const plan = isPlanCode(scope.plan_code) ? scope.plan_code : 'free';
 930 |     return merchantDashboardOverviewSchema.parse({
 931 |       success: true,
 932 |       generated_at: input.now.toISOString(),
 933 |       scope: {
 934 |         organization_id: scope.organization_id,
 935 |         organization_name: scope.organization_name,
 936 |         store_id: scope.store_id,
 937 |         store_name: scope.store_name,
 938 |         platform: scope.platform,
 939 |         role: scope.role,
 940 |       },
 941 |       summary: {
 942 |         assessments_30d: assessment.assessments,
 943 |         degraded_30d: assessment.degraded,
 944 |         pending_reviews: assessment.pending,
 945 |         verified_30d: verificationResult.rows[0]?.verified ?? 0,
 946 |         usage_month: usageResult.rows[0]?.used ?? 0,
 947 |         usage_limit: PLANS[plan].monthlyAssessments,
 948 |       },
 949 |       decisions: {
 950 |         allow: assessment.allow_count,
 951 |         verify: assessment.verify_count,
 952 |         review: assessment.review_count,
 953 |         hold: assessment.hold_count,
 954 |         block: assessment.block_count,
 955 |       },
 956 |       reviews: reviewResult.rows.map(parseDashboardReview),
 957 |       couriers: courierResult.rows.map((row) => ({
 958 |         provider: row.provider,
 959 |         status: row.status,
 960 |         last_success_at: nullableIso(row.last_success_at),
 961 |         last_failure_at: nullableIso(row.last_failure_at),
 962 |         failure_code: row.failure_code,
 963 |       })),
 964 |       shadow_pilot: shadowPilot,
 965 |     });
 966 |   }
 967 | }
 968 |
 969 | export class PostgresPlatformAdminRepository implements PlatformAdminRepository {
 970 |   constructor(private readonly pool: Pool) {}
 971 |
 972 |   async loadOverview(input: { userId: string; now: Date }): Promise<PlatformAdminOverview | null> {
 973 |     const authorization = await this.pool.query<{ allowed: boolean }>(
 974 |       `
 975 |         select exists(
 976 |           select 1 from users
 977 |           where id = $1 and status = 'active' and platform_role = 'platform_admin'
 978 |         ) as allowed
 979 |       `,
 980 |       [input.userId],
 981 |     );
 982 |     if (!authorization.rows[0]?.allowed) return null;
 983 |
 984 |     const [summaryResult, reconnectResult, providerResult] = await Promise.all([
 985 |       this.pool.query<{
 986 |         active_organizations: number;
 987 |         active_stores: number;
 988 |         assessments_today: number;
 989 |         degraded_today: number;
 990 |         worker_backlog: number;
 991 |         failed_webhooks: number;
 992 |         oldest_scheduled_at: Date | string | null;
 993 |       }>(`
 994 |         select
 995 |           (select count(*)::int from organizations where status = 'active') as active_organizations,
 996 |           (select count(*)::int from stores where status = 'active') as active_stores,
 997 |           (select count(*)::int from risk_assessments where created_at >= date_trunc('day', now())) as assessments_today,
 998 |           (select count(*)::int from risk_assessments where degraded and created_at >= date_trunc('day', now())) as degraded_today,
 999 |           (select count(*)::int from courier_jobs where status in ('queued', 'processing')) as worker_backlog,
1000 |           (select count(*)::int from webhook_deliveries where status = 'failed') as failed_webhooks,
1001 |           (select min(scheduled_at) from courier_jobs where status in ('queued', 'processing')) as oldest_scheduled_at
1002 |       `),
1003 |       this.pool.query<{ reconnect_required: number }>(`
1004 |         select count(*)::int as reconnect_required
1005 |         from courier_accounts
1006 |         where status in ('expired', 'failed') or failure_code is not null
1007 |       `),
1008 |       this.pool.query<{
1009 |         provider: string;
1010 |         connected: number;
1011 |         attention: number;
1012 |       }>(`
1013 |         select
1014 |           provider,
1015 |           count(*) filter (where status = 'connected')::int as connected,
1016 |           count(*) filter (where status <> 'connected' or failure_code is not null)::int as attention
1017 |         from courier_accounts
1018 |         group by provider
1019 |         order by provider
1020 |       `),
1021 |     ]);
1022 |     const shadowPilot = await loadPlatformNativeShadowPilotReport(this.pool, { now: input.now });
1023 |
1024 |     const summary = summaryResult.rows[0] ?? {
1025 |       active_organizations: 0,
1026 |       active_stores: 0,
1027 |       assessments_today: 0,
1028 |       degraded_today: 0,
1029 |       worker_backlog: 0,
1030 |       failed_webhooks: 0,
1031 |       oldest_scheduled_at: null,
1032 |     };
1033 |     const reconnectRequired = reconnectResult.rows[0]?.reconnect_required ?? 0;
1034 |     const degradedPercentage =
1035 |       summary.assessments_today === 0
1036 |         ? 0
1037 |         : Number(((summary.degraded_today / summary.assessments_today) * 100).toFixed(2));
1038 |     const oldestLagSeconds = summary.oldest_scheduled_at
1039 |       ? Math.max(
1040 |           0,
1041 |           Math.floor(
1042 |             (input.now.getTime() - new Date(summary.oldest_scheduled_at).getTime()) / 1_000,
1043 |           ),
1044 |         )
1045 |       : 0;
1046 |     const incidents: PlatformAdminOverview['incidents'] = [];
1047 |     if (reconnectRequired > 0) {
1048 |       incidents.push({
1049 |         code: 'courier_reconnect_required',
1050 |         title: 'Courier reconnect required',
1051 |         detail: `${reconnectRequired} account${reconnectRequired === 1 ? '' : 's'} need attention`,
1052 |         severity: 'high',
1053 |       });
1054 |     }
1055 |     if (summary.worker_backlog > 0) {
1056 |       incidents.push({
1057 |         code: 'courier_worker_backlog',
1058 |         title: 'Courier worker backlog',
1059 |         detail: `${summary.worker_backlog} jobs pending; oldest ${oldestLagSeconds}s`,
1060 |         severity: oldestLagSeconds > 300 ? 'high' : 'medium',
1061 |       });
1062 |     }
1063 |     if (summary.failed_webhooks > 0) {
1064 |       incidents.push({
1065 |         code: 'webhook_delivery_failed',
1066 |         title: 'Webhook delivery failures',
1067 |         detail: `${summary.failed_webhooks} deliveries are currently failed`,
1068 |         severity: 'medium',
1069 |       });
1070 |     }
1071 |
1072 |     return platformAdminOverviewSchema.parse({
1073 |       success: true,
1074 |       generated_at: input.now.toISOString(),
1075 |       summary: {
1076 |         active_organizations: summary.active_organizations,
1077 |         active_stores: summary.active_stores,
1078 |         assessments_today: summary.assessments_today,
1079 |         degraded_percentage: degradedPercentage,
1080 |         worker_backlog: summary.worker_backlog,
1081 |         failed_webhooks: summary.failed_webhooks,
1082 |       },
1083 |       incidents,
1084 |       providers: providerResult.rows.map((row) => ({
1085 |         name: row.provider,
1086 |         state: row.attention === 0 ? 'operational' : 'attention_required',
1087 |         metric: `${row.connected} connected; ${row.attention} need attention`,
1088 |       })),
1089 |       automatic_blocking: {
1090 |         broadly_enabled: false,
1091 |         reason:
1092 |           'Broad automatic blocking remains disabled until merchant pilot calibration is reviewed.',
1093 |       },
1094 |       shadow_pilot: shadowPilot,
1095 |     });
1096 |   }
1097 | }
1098 |
1099 | interface DashboardReviewRow {
1100 |   id: string;
1101 |   external_order_id: string | null;
1102 |   score: number;
1103 |   decision: string;
1104 |   confidence: number | string;
1105 |   order_snapshot: unknown;
1106 |   created_at: Date | string;
1107 |   signals: unknown;
1108 | }
1109 |
1110 | interface AssessmentRow {
1111 |   id: string;
1112 |   organization_id: string;
1113 |   store_id: string;
1114 |   api_key_id: string | null;
1115 |   idempotency_key: string;
1116 |   phone_hash: string;
1117 |   order_snapshot: unknown;
1118 | }
1119 |
1120 | interface ObservationRow {
1121 |   provider: string;
1122 |   total_orders: number;
1123 |   delivered_orders: number;
1124 |   returned_orders: number;
1125 |   cancelled_before_shipping: number;
1126 |   confidence: string | number;
1127 |   expires_at: Date | string;
1128 | }
1129 |
1130 | function parseAssessmentRow(row: AssessmentRow): StoredAssessment {
1131 |   if (!row.order_snapshot || typeof row.order_snapshot !== 'object') {
1132 |     throw new Error(`Assessment ${row.id} has an invalid order snapshot`);
1133 |   }
1134 |   const snapshot = row.order_snapshot as Record<string, unknown>;
1135 |   return {
1136 |     identity: {
1137 |       apiKeyId: row.api_key_id ?? 'key_deleted',
1138 |       organizationId: row.organization_id,
1139 |       storeId: row.store_id,
1140 |     },
1141 |     idempotencyKey: row.idempotency_key,
1142 |     phoneHash: row.phone_hash,
1143 |     request: riskAssessmentRequestSchema.parse(snapshot.request),
1144 |     response: riskAssessmentResponseSchema.parse(snapshot.response),
1145 |   };
1146 | }
1147 |
1148 | async function loadUserSessionIdentity(
1149 |   pool: Pool,
1150 |   input: {
1151 |     sessionId: string;
1152 |     userId: string;
1153 |     email: string;
1154 |     platformRole: PlatformRole;
1155 |     expiresAt: Date | string;
1156 |   },
1157 | ): Promise<UserSessionIdentity> {
1158 |   const result = await pool.query<{
1159 |     organization_id: string;
1160 |     organization_name: string;
1161 |     role: string;
1162 |     store_id: string | null;
1163 |     store_name: string | null;
1164 |     platform: string | null;
1165 |     store_status: string | null;
1166 |   }>(
1167 |     `
1168 |       select
1169 |         o.id as organization_id,
1170 |         o.name as organization_name,
1171 |         om.role,
1172 |         s.id as store_id,
1173 |         s.name as store_name,
1174 |         s.platform,
1175 |         s.status as store_status
1176 |       from organization_members om
1177 |       join organizations o on o.id = om.organization_id and o.status = 'active'
1178 |       left join stores s on s.organization_id = o.id and s.status = 'active'
1179 |       where om.user_id = $1
1180 |       order by o.name, s.name
1181 |     `,
1182 |     [input.userId],
1183 |   );
1184 |   const organizationMap = new Map<string, BrowserOrganization>();
1185 |   for (const row of result.rows) {
1186 |     const organization = organizationMap.get(row.organization_id) ?? {
1187 |       id: row.organization_id,
1188 |       name: row.organization_name,
1189 |       role: row.role,
1190 |       stores: [],
1191 |     };
1192 |     if (row.store_id && row.store_name && row.platform && row.store_status) {
1193 |       organization.stores.push({
1194 |         id: row.store_id,
1195 |         organization_id: row.organization_id,
1196 |         name: row.store_name,
1197 |         platform: row.platform,
1198 |         status: row.store_status,
1199 |       });
1200 |     }
1201 |     organizationMap.set(row.organization_id, organization);
1202 |   }
1203 |   return {
1204 |     sessionId: input.sessionId,
1205 |     userId: input.userId,
1206 |     email: input.email,
1207 |     platformRole: input.platformRole,
1208 |     expiresAt: new Date(input.expiresAt).toISOString(),
1209 |     organizations: [...organizationMap.values()],
1210 |   };
1211 | }
1212 |
1213 | function parseDashboardReview(row: DashboardReviewRow) {
1214 |   let phoneMasked = '***';
1215 |   if (row.order_snapshot && typeof row.order_snapshot === 'object') {
1216 |     const snapshot = row.order_snapshot as Record<string, unknown>;
1217 |     const parsedRequest = riskAssessmentRequestSchema.safeParse(snapshot.request);
1218 |     if (parsedRequest.success) phoneMasked = maskPhone(parsedRequest.data.phone);
1219 |   }
1220 |   const signals = Array.isArray(row.signals)
1221 |     ? row.signals.flatMap((value) => {
1222 |         if (!value || typeof value !== 'object') return [];
1223 |         const record = value as Record<string, unknown>;
1224 |         if (
1225 |           typeof record.code !== 'string' ||
1226 |           typeof record.score !== 'number' ||
1227 |           typeof record.description !== 'string'
1228 |         ) {
1229 |           return [];
1230 |         }
1231 |         return [{ code: record.code, score: record.score, description: record.description }];
1232 |       })
1233 |     : [];
1234 |   return {
1235 |     assessment_id: row.id,
1236 |     external_order_id: row.external_order_id,
1237 |     phone_masked: phoneMasked,
1238 |     risk_score: row.score,
1239 |     decision: row.decision,
1240 |     confidence: Number(row.confidence),
1241 |     signals,
1242 |     created_at: new Date(row.created_at).toISOString(),
1243 |   };
1244 | }
1245 |
1246 | function emptyAssessmentAggregate() {
1247 |   return {
1248 |     assessments: 0,
1249 |     degraded: 0,
1250 |     pending: 0,
1251 |     allow_count: 0,
1252 |     verify_count: 0,
1253 |     review_count: 0,
1254 |     hold_count: 0,
1255 |     block_count: 0,
1256 |   };
1257 | }
1258 |
1259 | function nullableIso(value: Date | string | null): string | null {
1260 |   return value === null ? null : new Date(value).toISOString();
1261 | }
1262 |
1263 | function isPlatformRole(value: string): value is PlatformRole {
1264 |   return value === 'merchant' || value === 'platform_admin';
1265 | }
1266 |
1267 | async function assertActiveStoreScope(
1268 |   database: Pool | PoolClient,
1269 |   organizationId: string,
1270 |   storeId: string,
1271 | ): Promise<void> {
1272 |   const result = await database.query(
1273 |     `
1274 |       select 1
1275 |       from stores s
1276 |       join organizations o on o.id = s.organization_id
1277 |       where s.id = $1 and s.organization_id = $2
1278 |         and s.status = 'active' and o.status = 'active'
1279 |       limit 1
1280 |     `,
1281 |     [storeId, organizationId],
1282 |   );
1283 |   if (result.rowCount !== 1) throw new TenantScopeMismatchError();
1284 | }
1285 |
1286 | async function currentUsage(
1287 |   client: PoolClient,
1288 |   organizationId: string,
1289 |   period: string,
1290 | ): Promise<number> {
1291 |   const result = await client.query<{ used: number }>(
1292 |     `
1293 |       select coalesce(sum(units), 0)::int as used
1294 |       from usage_events
1295 |       where organization_id = $1 and period = $2 and event_type = 'risk_assessment'
1296 |     `,
1297 |     [organizationId, period],
1298 |   );
1299 |   return result.rows[0]?.used ?? 0;
1300 | }
1301 |
1302 | function parseOperationKey(key: string): {
1303 |   organizationId: string;
1304 |   storeId: string;
1305 |   operation: string;
1306 |   idempotencyKey: string;
1307 | } {
1308 |   const [organizationId, storeId, operation, ...idempotencyParts] = key.split(':');
1309 |   const idempotencyKey = idempotencyParts.join(':');
1310 |   if (!organizationId || !storeId || !operation || !idempotencyKey) {
1311 |     throw new Error('Invalid operation idempotency key');
1312 |   }
1313 |   return { organizationId, storeId, operation, idempotencyKey };
1314 | }
1315 |
1316 | function isPlanCode(value: string | null): value is PlanCode {
1317 |   return value !== null && ['free', 'starter', 'pro', 'enterprise'].includes(value);
1318 | }
1319 |
1320 | function isRiskPolicy(value: unknown): value is {
1321 |   version: string;
1322 |   thresholds: { verify: number; review: number; hold: number; block: number };
1323 |   highValueOrderAmount: number;
1324 |   unknownDecision: 'verify' | 'review';
1325 | } {
1326 |   if (!value || typeof value !== 'object') return false;
1327 |   const record = value as Record<string, unknown>;
1328 |   const thresholds = record.thresholds;
1329 |   if (!thresholds || typeof thresholds !== 'object') return false;
1330 |   const thresholdRecord = thresholds as Record<string, unknown>;
1331 |   return (
1332 |     typeof record.version === 'string' &&
1333 |     typeof record.highValueOrderAmount === 'number' &&
1334 |     (record.unknownDecision === 'verify' || record.unknownDecision === 'review') &&
1335 |     ['verify', 'review', 'hold', 'block'].every((key) => typeof thresholdRecord[key] === 'number')
1336 |   );
1337 | }
1338 |
1339 | async function enqueueWebhookDeliveries(
1340 |   client: PoolClient,
1341 |   event: DomainEvent,
1342 |   traceContext?: PersistedTraceContext,
1343 | ): Promise<void> {
1344 |   await client.query(
1345 |     `
1346 |       insert into webhook_deliveries (
1347 |         id, endpoint_id, organization_id, store_id, event_id, event_type,
1348 |         event_payload, occurred_at, status, next_attempt_at, trace_parent, trace_state
1349 |       )
1350 |       select
1351 |         'whd_' || md5(we.id || ':' || $1),
1352 |         we.id,
1353 |         $2,
1354 |         $3,
1355 |         $1,
1356 |         $4,
1357 |         $5::jsonb,
1358 |         $6,
1359 |         'queued',
1360 |         now(),
1361 |         $7,
1362 |         $8
1363 |       from webhook_endpoints we
1364 |       where we.organization_id = $2
1365 |         and (we.store_id is null or we.store_id = $3)
1366 |         and we.status = 'active'
1367 |         and we.events @> jsonb_build_array($4::text)
1368 |       on conflict (endpoint_id, event_id) do nothing
1369 |     `,
1370 |     [
1371 |       event.id,
1372 |       event.organizationId,
1373 |       event.storeId ?? null,
1374 |       event.type,
1375 |       JSON.stringify(event),
1376 |       event.occurredAt,
1377 |       traceContext?.traceParent ?? null,
1378 |       traceContext?.traceState ?? null,
1379 |     ],
1380 |   );
1381 | }
1382 |
```

### apps/api/src/server.ts

Bytes: 7031
SHA-256: 71e10608c2b0c2ff6e004a68d404c6020d0866bd11de816715b1ce277191d38e
Lines: 1-207 of 207

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { serve } from '@hono/node-server';
  3 | import { Pool } from 'pg';
  4 | import { verifyApiKey } from '@ozzyl/authentication';
  5 | import { PostgresDurableWorkOperations } from '@ozzyl/database';
  6 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  7 | import { createMetricRecorder, createStructuredLogger, createTracer } from '@ozzyl/observability';
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
 92 | const tracer = createTracer({
 93 |   service: 'ozzyl-guard-api',
 94 |   environment: process.env.NODE_ENV ?? 'development',
 95 | });
 96 |
 97 | if (productionMode && !databaseUrl) {
 98 |   throw new Error('DATABASE_URL is required in production');
 99 | }
100 |
101 | let pool: Pool | undefined;
102 | let dependencies: ApiDependencies;
103 |
104 | if (databaseUrl) {
105 |   const sessionPepper = required('SESSION_PEPPER');
106 |   const sessionCsrfSecret = required('SESSION_CSRF_SECRET');
107 |   const rateLimiter = new MemoryRateLimiter();
108 |   pool = new Pool({
109 |     connectionString: databaseUrl,
110 |     max: Number(process.env.DATABASE_POOL_SIZE ?? 20),
111 |     idleTimeoutMillis: 30_000,
112 |     connectionTimeoutMillis: 5_000,
113 |     ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
114 |   });
115 |   const verification = new PostgresVerificationService(pool, {
116 |     otpSecret: required('OTP_HASH_SECRET'),
117 |     cipher: new AesGcmEnvelopeCipher(
118 |       Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
119 |       required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
120 |     ),
121 |   });
122 |   const nativeShadowRollouts = new PostgresNativeShadowRolloutRepository(pool);
123 |   const durableWorkOperations = new PostgresDurableWorkOperations(pool);
124 |   dependencies = {
125 |     apiKeys: new PostgresApiKeyResolver(pool, apiKeyPepper),
126 |     usage: new PostgresUsageLedger(pool),
127 |     features: new PostgresAssessmentFeatureProvider(pool),
128 |     assessments: new PostgresAssessmentRepository(pool),
129 |     outcomes: new PostgresOutcomeRepository(pool),
130 |     shadowComparisons: new PostgresShadowComparisonRepository(pool),
131 |     nativeShadowRollouts,
132 |     nativeShadowAttempts: new PostgresNativeShadowAttemptRepository(pool),
133 |     refreshQueue: new PostgresCourierRefreshQueue(pool),
134 |     idempotency: new PostgresOperationIdempotencyStore(pool),
135 |     rateLimiter,
136 |     hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
137 |     verificationRequests: verification,
138 |     otpVerifier: verification,
139 |     browser: {
140 |       auth: new PostgresBrowserAuthService(pool, sessionPepper),
141 |       dashboard: new PostgresMerchantDashboardRepository(pool),
142 |       admin: new PostgresPlatformAdminRepository(pool),
143 |       nativeShadowRollouts,
144 |       durableWorkOperations,
145 |       audit: new PostgresBrowserAuditRepository(pool),
146 |       rateLimiter,
147 |       csrfSecret: sessionCsrfSecret,
148 |       secureCookies: productionMode,
149 |     },
150 |     logger: log,
151 |     metrics,
152 |     tracer,
153 |   };
154 | } else {
155 |   dependencies = {
156 |     apiKeys: new ConfiguredApiKeyResolver({
157 |       keyHash: required('OZZYL_API_KEY_HASH'),
158 |       pepper: apiKeyPepper,
159 |       identity: {
160 |         apiKeyId: process.env.OZZYL_API_KEY_ID ?? 'key_local',
161 |         organizationId: required('OZZYL_ORGANIZATION_ID'),
162 |         storeId: required('OZZYL_STORE_ID'),
163 |         environment: configuredEnvironment(),
164 |         plan: configuredPlan(),
165 |         scopes: new Set([
166 |           'risk:write',
167 |           'risk:read',
168 |           'outcomes:write',
169 |           'comparisons:write',
170 |           'courier:refresh',
171 |           'verification:write',
172 |         ]),
173 |       },
174 |     }),
175 |     usage: new MemoryUsageLedger(),
176 |     features: new MissingFeatureProvider(),
177 |     assessments: new MemoryAssessmentRepository(),
178 |     outcomes: new MemoryOutcomeRepository(),
179 |     shadowComparisons: new MemoryShadowComparisonRepository(),
180 |     refreshQueue: new MemoryRefreshQueue(),
181 |     idempotency: new MemoryOperationIdempotencyStore(),
182 |     rateLimiter: new MemoryRateLimiter(),
183 |     hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
184 |     logger: log,
185 |     metrics,
186 |     tracer,
187 |   };
188 | }
189 |
190 | const app = createApiApp(dependencies);
191 | const port = Number(process.env.API_PORT ?? 3000);
192 | const server = serve({ fetch: app.fetch, port });
193 | log.info('api.started', {
194 |   port,
195 |   persistence: databaseUrl ? 'postgresql' : 'memory',
196 | });
197 |
198 | const shutdown = async (signal: string): Promise<void> => {
199 |   log.info('api.stopping', { signal });
200 |   server.close();
201 |   await pool?.end();
202 |   process.exit(0);
203 | };
204 |
205 | process.once('SIGTERM', () => void shutdown('SIGTERM'));
206 | process.once('SIGINT', () => void shutdown('SIGINT'));
207 |
```

### docs/database/database-design.md

Bytes: 18323
SHA-256: 62ab4a6f343c0ce65b6b08f16b67bbe5a6082e5328bbbe77c58befeab63e8ade
Lines: 1-460 of 460

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
388 | The archive table stores no courier payload, webhook event payload, encrypted verification payload, OTP/contact material, endpoint data, credentials, provider message reference, or trace context. A maintenance-only transaction locks old terminal source rows, writes or validates matching archive evidence, and deletes the source row only after evidence exists. The application runtime role is explicitly denied all archive-table privileges and retains no durable-source `DELETE` privilege.
389 |
390 | ### Durable trace context
391 |
392 | `courier_jobs`, `webhook_deliveries`, and `verification_jobs` have nullable `trace_parent` and `trace_state` columns. `trace_parent` is constrained to lowercase W3C version 00 with non-zero trace and span IDs. `trace_state` is optional, bounded to 512 printable characters, and cannot exist without `trace_parent`; the application parser applies stricter member syntax before writes. Existing rows remain valid with both columns null. Context is stored outside queue/event/encrypted payloads, is not a tenant or authorization key, requires no query index, and is deleted with the source row rather than copied into `durable_work_archives`.
393 |
394 | ## Initial migration boundaries
395 |
396 | Migration 0001 should establish only the Phase 1 foundation:
397 |
398 | - users
399 | - sessions
400 | - organizations
401 | - organization_members
402 | - stores
403 | - plans/entitlements
404 | - api_keys
405 | - usage_events
406 | - audit_events
407 |
408 | Courier, risk, verification, event, and reputation tables should be introduced in subsequent append-only migrations aligned with coherent milestones.
409 |
410 | Current ordered migrations:
411 |
412 | 1. `0001_foundation.sql` — identity, tenancy, plans, API keys, usage, and audit.
413 | 2. `0002_courier.sql` — courier accounts, encrypted credential/session records, observations, and jobs.
414 | 3. `0003_risk.sql` — risk policies, assessments, signals, and outcomes.
415 | 4. `0004_verification_events.sql` — OTP verification and webhook delivery foundation.
416 | 5. `0005_durable_operations.sql` — durable job payloads, idempotent outcomes, and idempotency records.
417 | 6. `0006_browser_access.sql` — explicit platform role plus browser dashboard/admin query indexes.
418 | 7. `0007_worker_leases.sql` — explicit courier-worker ownership, claim/lease timestamps, stale-job recovery support, and claim scheduling index.
419 | 8. `0008_webhook_delivery_leases.sql` — scoped canonical webhook event payloads, event-worker ownership/lease timestamps, completion state, and claim/scope indexes.
420 | 9. `0009_verification_delivery_queue.sql` — verification idempotency/attempt controls plus encrypted delivery jobs, owner leases, completion state, and claim/scope indexes.
421 | 10. `0010_native_shadow_comparisons.sql` — tenant-scoped native shadow comparison evidence and rollout state.
422 | 11. `0011_native_shadow_pilot.sql` — sampled attempt evidence and pilot reporting support.
423 | 12. `0012_durable_work_replays.sql` — immutable secret-free dead-letter replay evidence.
424 | 13. `0013_durable_work_archives.sql` — maintenance-only secret-free terminal work archive evidence.
425 | 14. `0014_durable_trace_context.sql` — nullable validated W3C context columns for courier, webhook, and verification durable work.
426 |
427 | Migration 0006 does not store raw session material. `user_sessions.token_hash` remains the only persisted session-token representation. The merchant dashboard repository authorizes with `(user_id, organization_id, store_id)` before running any aggregate query.
428 |
429 | Migration 0007 is append-only and does not rewrite prior migration files. Courier jobs use explicit owner leases and relational account scope.
430 |
431 | Migration 0008 backfills endpoint-derived scope for prior delivery rows. Legacy rows whose canonical event payload cannot be reconstructed are terminalized with `LEGACY_EVENT_PAYLOAD_MISSING` rather than delivered with invented data.
432 |
433 | Migration 0009 leaves prior verification records valid, adds nullable idempotency keys for legacy rows, and introduces a separate encrypted delivery queue without placing plaintext phone or OTP material in existing tables.
434 |
435 | Migrations 0010–0012 add immutable shadow-pilot and replay evidence without weakening tenant scope. Migration 0013 adds the maintenance-only archive table; it does not automatically schedule deletion, grant runtime access, or modify prior queue payloads.
436 |
437 | ## Migration history integrity
438 |
439 | `packages/database/migrations/manifest.json` records the SHA-256 checksum for every ordered SQL migration. `db:check` requires the manifest and SQL file list to match exactly and rejects changed, missing, extra, empty, reordered, or prohibited destructive migration files.
440 |
441 | `ozzyl_guard_migrations` stores `name`, non-null `checksum_sha256`, and `applied_at`. The migration runner holds one PostgreSQL advisory lock on one session, rejects unknown or non-contiguous history, and compares every persisted checksum before applying new work. Existing name-only history rows may receive checksums once, transactionally, only from the committed manifest; the checksum column is then enforced `NOT NULL`.
442 |
443 | No numbered domain migration is added for this metadata hardening. The migration runner owns the internal history table, while all application tables and columns remain defined by append-only numbered migrations and the canonical schema package.
444 |
445 | ## Clean logical restore rehearsal
446 |
447 | `npm run db:restore-rehearsal` requires `DATABASE_URL` and a distinct pre-created `RESTORE_DATABASE_URL` with no public relations. It never creates, drops, cleans, or overwrites the source database. PostgreSQL credentials are supplied to client tools through `PG*` environment variables rather than command arguments.
448 |
449 | The rehearsal creates a custom-format `pg_dump`, restores it with `pg_restore`, validates complete migration history, compares a canonical public-schema fingerprint, table counts, sequence state, migration rows, and migration replay. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` additionally compares secret-safe per-table hashes of every row and is enabled in CI; large production-equivalent drills may use counts or a separately approved snapshot-integrity procedure when a full hash scan is too expensive.
450 |
451 | Repository CI applies the complete migration set twice, verifies the history table, and restores into a clean PostgreSQL 16 database. Managed-provider automated backup retention and point-in-time recovery must still be demonstrated separately before the merchant pilot.
452 |
453 | ## Runtime, migration, and maintenance database identities
454 |
455 | `packages/database/src/runtime-role.ts` defines the reviewed current-table application runtime policy. The migration owner validates the full public base-table inventory, revokes prior direct table/schema/sequence privileges, grants explicit required `SELECT`/`INSERT`/`UPDATE`, and then verifies effective privileges. `ozzyl_guard_migrations` and `durable_work_archives` remain inaccessible.
456 |
457 | The runtime role must already exist as a non-owner `LOGIN` without elevated attributes or inherited memberships. It cannot own the current database, public schema, or public relations and cannot receive `DELETE`, DDL, schema `CREATE`, migration-history access, archive-table access, or role-management privileges. Run `DATABASE_RUNTIME_ROLE=<role> npm run db:runtime-grants` after every migration release; an unreviewed new table causes the command to fail closed until the policy is updated.
458 |
459 | Retention preview/archive requires a distinct reviewed maintenance identity with archive read/insert and durable-source delete privileges. That identity must never be used by API or workers. The repository verifies required privileges before preview and archive, while production provisioning, rotation, access review, and scheduling remain external operations work.
460 |
```

### docs/operations/operations-observability.md

Bytes: 20263
SHA-256: 163b12e7a97f977aac0b2171faecbfed1ee239262833e08ddbac2c7da2cbf781
Lines: 1-308 of 308

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
129 | Serialization or log/metric/span-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. API request logs use only accepted/generated opaque request IDs, an allowlisted route or bounded route template, HTTP method, status/status class, and duration. API metrics use normalized method, the same canonical route/template, and status class without the request ID. Durable repository operations, provider calls, and aggregate queue depth/oldest-ready-age are instrumented with finite categories only. Traces use descriptor-owned finite attributes and carry opaque W3C context separately from logs and metrics. Raw URLs, query strings, dynamic assessment identifiers, tenant/job/account identifiers, provider/vendor names, arbitrary error codes, payloads, and contact data are not metric or span attributes. Broader API/domain repository metrics, OpenTelemetry exporter/collector topology, sampling, dashboards, alerts, managed retention, and the managed backend remain production follow-up work.
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
146 | The API emits startup/shutdown, request-completion, and unhandled-error records, and all four private workers emit startup and structured error records through the shared redaction boundary. The API records request count/duration; private workers record operation count/duration; durable courier/event/verification queue repositories record transition count/duration and periodic aggregate depth/oldest-ready-age; courier API/browser, webhook HTTP, and OTP delivery boundaries record provider count/duration; durable claim failures remain separately counted. API requests now emit server spans, durable queue creation emits producer children, private workers continue persisted context as consumer spans, and provider calls emit client children. Production instrumentation must still add broader API/domain repository measurements plus a reviewed exporter/collector and sampling policy without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, business identifiers, provider credentials, URLs, arbitrary error codes, or DNS answer details that disclose internal topology.
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
164 | `@ozzyl/observability` implements an exporter-neutral W3C trace boundary. It accepts only version-00 `traceparent` values with non-zero trace and span identifiers. Optional `tracestate` is syntactically bounded to 512 characters and 32 unique members. Malformed caller or persisted context is ignored and the component starts a fresh root trace; trace input is never an authorization or tenant identity.
165 |
166 | Implemented topology:
167 |
168 | - every API request creates an `ozzyl.api.request` server span and returns its `traceparent`;
169 | - assessment/outcome webhook creation, courier refresh, and OTP delivery enqueue create `ozzyl.api.durable.produce` producer children;
170 | - producer context is stored only in nullable `trace_parent`/`trace_state` columns on `courier_jobs`, `webhook_deliveries`, and `verification_jobs`;
171 | - courier-sync, event, and verification workers continue valid persisted context as `ozzyl.worker.operation` consumer spans;
172 | - courier API, webhook HTTP, and OTP delivery calls create `ozzyl.provider.operation` client children;
173 | - courier-session refresh starts a root worker span with a browser-login provider child;
174 | - verification failure event creation persists the active worker context into the new webhook delivery.
175 |
176 | Span attributes are finite categories only: normalized method, canonical route/template, status class, durable operation/queue type/outcome, worker type/operation/outcome, and broad provider type/operation/outcome. Request, organization, store, account, job, event, delivery, assessment, API-key, endpoint, phone/hash, OTP, credential, URL, payload/body, provider-response, vendor-name, and arbitrary error-code attributes are prohibited. `tracestate` is propagated but not emitted inside span JSON. Trace context is not copied into archive evidence and legacy null-context work remains processable.
177 |
178 | The current tracer emits one local JSON line per completed span and performs no network I/O. ID generation, validation, clock, serialization, or sink failure is swallowed and cannot break scoring, persistence, queue transitions, provider execution, or synchronous checkout. Exporter/collector wiring, sampling policy, managed retention, dashboards, and alerts remain production work.
179 |
180 | ## Alerts
181 |
182 | - Provider session refresh failure spike
183 | - API p95 latency or error-rate breach
184 | - Assessment error/degraded spike
185 | - PostgreSQL unavailable, connection saturation, or lock-wait spike
186 | - Database migration, manifest/history integrity, backup, or restore failure
187 | - Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
188 | - Event-worker claim rate drops to zero while due backlog grows
189 | - Webhook delivery failure or retry spike
190 | - Webhook secret-decryption or scope-mismatch failure
191 | - Unsafe webhook destination spike
192 | - DNS resolution failure spike
193 | - OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
194 | - Usage counter/entitlement drift
195 | - Reconnect-required account spike
196 | - Secret scanning or redaction regression
197 | - KMS/vault access or decrypt failure spike
198 |
199 | ## Runbooks
200 |
201 | Create and exercise runbooks for:
202 |
203 | - Steadfast login/selector break
204 | - Expired, disabled, or rotated encryption key
205 | - KMS/vault outage
206 | - OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
207 | - Courier provider outage
208 | - Database logical restore, managed point-in-time restore, and failover
209 | - API key compromise
210 | - Courier credential/session compromise
211 | - Webhook signing-secret compromise and endpoint rotation
212 | - Queue/outbox backlog, lease recovery, and dead-letter replay
213 | - Webhook destination failure or repeated HTTP rejection
214 | - DNS resolution/egress-policy failure
215 | - Invalid event payload or scope mismatch
216 | - Incorrect risk policy rollback
217 | - Telemetry backend outage
218 | - Reputation dispute escalation when that subsystem exists
219 |
220 | A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.
221 |
222 | A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.
223 |
224 | ## Health model
225 |
226 | Expose separate health/readiness states for:
227 |
228 | - API process
229 | - database
230 | - durable job/outbox store
231 | - optional distributed cache
232 | - event/webhook worker process
233 | - webhook backlog and oldest-event age
234 | - event-worker signing-secret decryption capability
235 | - courier provider adapters
236 | - session workers
237 | - verification providers and future verification runner
238 | - KMS/vault access
239 | - telemetry export
240 |
241 | A webhook endpoint outage, provider outage, or telemetry outage must not necessarily take the API process out of service. Readiness and operations views must still expose degraded dependencies. Unknown or degraded dependencies must never be treated as safe approval signals.
242 |
243 | ## Event-worker operational contract
244 |
245 | - `EVENT_WORKER_ID` should be stable and unique per replica in production.
246 | - Courier, event, and verification poll, lease, lease-renewal, max-attempt, and provider-timeout values must be positive integers.
247 | - Every lease-renewal interval must be no greater than half its lease; event and verification leases must also exceed their provider timeout by more than five seconds.
248 | - Alert on heartbeat renewal failure because active provider I/O is aborted and the job remains available only through stale-lease recovery or reviewed replay.
249 | - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
250 | - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
251 | - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
252 | - Exhausted stale work fails closed with `LEASE_EXPIRED`.
253 | - Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.
254 |
255 | ## Data operations
256 |
257 | - Automated encrypted backups
258 | - Point-in-time recovery
259 | - Restore testing on a schedule
260 | - Migration preflight and post-deploy verification
261 | - Preview-first bounded terminal durable-work archival through the maintenance-only PostgreSQL boundary
262 | - Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
263 | - Audit trail for privileged data and credential access
264 | - KMS key rotation and ciphertext re-encryption procedures
265 | - Webhook signing-secret rotation/re-encryption procedure
266 | - Telemetry retention and access review
267 | - Production-data redaction before lower-environment use
268 |
269 | ## Release operations
270 |
271 | - Feature flags for new engine/policy versions and native multi-store migration
272 | - Canary/pilot merchants before broad rollout
273 | - Compare decision distributions before policy promotion
274 | - Rollback path for API, worker, migration, and policy changes
275 | - Do not edit migration 0008 after application; use a new migration for schema changes
276 | - Keep event-worker deployment independently scalable and rollbackable from the API
277 | - Exercise outbox backlog and retry behavior before each pilot expansion
278 | - No automatic blocking policy promotion without reviewed outcome data
279 | - Validate dashboards and alerts before each pilot expansion
280 |
281 | ## Provider selection still pending
282 |
283 | An OpenTelemetry exporter/collector implementation, sampling policy, managed observability backend, telemetry retention policy, alert-delivery channel, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Broader API/domain repository metrics, dashboards, and alerts remain unimplemented. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
284 |
285 | ## Browser dead-letter operations surface
286 |
287 | The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.
288 |
289 | The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.
290 |
291 | ## Durable work retention operations
292 |
293 | Terminal courier, webhook, and verification rows may be archived only through the maintenance-only repository and CLI documented in [Durable Work Retention Runbook](durable-work-retention-runbook.md). The application runtime role cannot read or write `durable_work_archives` and cannot delete source queue rows.
294 |
295 | Every run must preview first, use a cutoff at least 24 hours old, select only `completed`/`failed`, and process no more than 500 rows. Production baseline guidance is 30 days for completed work and 180 days for failed work until support, incident, privacy, and legal owners approve another policy. Archive evidence is secret-free and does not replace backup/PITR because source payloads cannot be reconstructed after commit.
296 |
297 | Monitor and record:
298 |
299 | - candidate and archived counts by work type and terminal status;
300 | - oldest eligible terminal timestamp;
301 | - skipped locked or state-changed rows;
302 | - archive evidence conflicts and maintenance privilege failures;
303 | - duration and rows per batch;
304 | - source queue size before and after maintenance;
305 | - archive table growth and approved evidence-retention window.
306 |
307 | No unattended retention scheduler is implemented. Automatic scheduling remains blocked on approved retention windows, incident/legal holds, maintenance identity provisioning, monitoring, backup/PITR recovery, and archive-evidence retention.
308 |
```

### docs/roadmap/risk-register.md

Bytes: 7556
SHA-256: 8f586d87b1b7459e2dc91d95f9056c7a1ae256f627a7507bd398e87d1dbdb732
Lines: 1-35 of 35

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
30 | | R-024 | Untrusted trace context is spoofed, malformed, or used to carry sensitive baggage     |     High | Strict version-00/non-zero parsing, bounded no-baggage tracestate, finite span attributes, DB checks, invalid-context root fallback     | Operations / partially mitigated |
31 |
32 | ## Review cadence
33 |
34 | Review this register at every milestone completion and before production/pilot changes. Add evidence, owner, target date, and residual risk as implementation begins.
35 |
```

### docs/security/security-privacy.md

Bytes: 13785
SHA-256: 98e0a9de447095baa96698ebab0d7bf5afd443db2be2b01e9af0fa31f9c011c3
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
 51 | Metrics use a stricter boundary than structured logs. Every attribute must be declared through a finite categorical allowlist. Request, organization, store, account, worker, job, event, assessment, API-key, idempotency, endpoint, phone/hash, URL, payload/body, token, and secret-style attribute names are rejected. API metrics expose only normalized method, canonical route/template, and status class; worker and durable-repository metrics expose finite component, operation, and outcome categories; provider metrics use broad provider categories rather than vendor/account/destination names; queue gauges expose aggregate status counts and oldest-ready age only. Arbitrary provider/error values are not labels. Metric validation, clock, serialization, snapshot, or sink failure is isolated from request and worker execution.
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

Bytes: 18380
SHA-256: 2162394de0ce746bf1b29e4d5db3bdf7ec313da43d974bc1072b7d9566d999c2
Lines: 1-306 of 306

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
 69 | - API server-span continuation, response traceparent, bounded tracestate propagation, durable producer child context, and absence of tenant/phone/job values from span output
 70 | - Courier-session, courier-sync, event, and verification operation plus provider-call metrics with bounded category/operation/outcome labels and no job, account, event, endpoint, phone, OTP, credential, URL, payload, vendor, error-text, or provider-response values
 71 | - Courier-session root/provider lineage and courier, webhook, and verification producer→consumer→provider trace lineage without business identifiers or sensitive values
 72 | - Durable courier, webhook, and verification repository operation timing plus PostgreSQL aggregate queue-depth/oldest-ready-age snapshots without row or tenant identifiers
 73 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 74 |
 75 | ### PostgreSQL concurrency and idempotency coverage
 76 |
 77 | The CI PostgreSQL service runs real-database integration tests for:
 78 |
 79 | - duplicate usage reservations serializing through the organization/period advisory lock;
 80 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 81 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 82 | - concurrent assessment saves returning the single persisted scoped winner;
 83 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 84 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 85 | - operation idempotency values remaining isolated by organization and store;
 86 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 87 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 88 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 89 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 90 | - preventing another courier worker from stealing a fresh lease;
 91 | - reclaiming expired courier jobs and rejecting the previous owner;
 92 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 93 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 94 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
 95 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
 96 | - preventing another event worker from stealing a fresh webhook lease;
 97 | - rejecting an expired event-worker owner before completion or failure;
 98 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
 99 | - clearing webhook ownership when a retry is scheduled;
100 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
101 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
102 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
103 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
104 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
105 | - protecting fresh verification leases and rejecting expired owners;
106 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
107 | - failing both the verification job and authoritative session on persisted scope mismatch;
108 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
109 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
110 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
111 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
112 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
113 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
114 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
115 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
116 |
117 | ### Native shadow rollout safety coverage
118 |
119 | Default tests prove:
120 |
121 | - `off` mode performs no Guard assessment or comparison API call;
122 | - deterministic sampling keeps retries for the same store/order in the same cohort;
123 | - the legacy score and decision remain the effective result even when Guard recommends block;
124 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
125 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
126 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
127 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
128 | - CSRF-protected browser mutation permits only active owner/admin store scope;
129 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
130 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
131 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
132 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
133 |
134 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
135 |
136 | ### Webhook destination security coverage
137 |
138 | Default tests use injected DNS and fetch boundaries. They prove:
139 |
140 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
141 | - a hostname resolving to any non-public address is rejected before `fetch`;
142 | - DNS resolution failure is classified as retryable without making a network request;
143 | - redirects are disabled;
144 | - successful deliveries use the expected HMAC signature and canonical payload;
145 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
146 |
147 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
148 |
149 | ### Verification payload security coverage
150 |
151 | Default tests prove:
152 |
153 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
154 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
155 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
156 | - reporter state and logs do not receive plaintext OTP values;
157 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
158 |
159 | ### Managed envelope security coverage
160 |
161 | Default tests prove:
162 |
163 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
164 | - plaintext values and plaintext data keys are not serialized into the envelope;
165 | - context mismatch is rejected before provider unwrap;
166 | - wrapped-key metadata is authenticated and tampering fails closed;
167 | - provider outage produces a structured non-secret error;
168 | - a provider cannot pass the plaintext data key through as a wrapped key;
169 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
170 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
171 | - malformed, unsupported, or unavailable-key envelopes fail closed.
172 |
173 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
174 |
175 | ### Migration replay coverage
176 |
177 | CI runs the migration command twice against the same PostgreSQL service:
178 |
179 | 1. the first run applies every ordered migration;
180 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
181 |
182 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
183 |
184 | ### Migration integrity and restore coverage
185 |
186 | CI additionally proves:
187 |
188 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
189 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
190 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
191 | - migration execution is serialized by one session-held advisory lock;
192 | - the restore target is a distinct pre-created clean database;
193 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
194 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
195 |
196 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
197 |
198 | Current PostgreSQL coverage includes owner-checked lease renewal, durable dead-letter authorization/replay, runtime-role isolation, and maintenance-only retention archival. Future provider validation must still include selected-provider smoke tests for distinct API/worker identities, migration-owner grant execution, and the separately provisioned retention-maintenance identity.
199 |
200 | ## End-to-end tests
201 |
202 | - Merchant signup and store creation
203 | - Create a test/live API key
204 | - Connect Steadfast account
205 | - Assess WooCommerce COD order
206 | - Receive a signed `assessment.completed` webhook asynchronously
207 | - Review high-risk order
208 | - Verify OTP
209 | - Submit courier outcome
210 | - Receive a signed `order.outcome_recorded` webhook asynchronously
211 | - View usage and savings report
212 |
213 | ## Security tests
214 |
215 | - Tenant data leakage
216 | - API key replay/revocation
217 | - Raw key absence from database/metadata/logs
218 | - Brute-force OTP
219 | - CSRF
220 | - Literal-IP and DNS-result SSRF
221 | - Webhook replay and redirect handling
222 | - Webhook signing-secret decryption failure
223 | - Envelope authenticated-context mismatch
224 | - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
225 | - Log, metric, and span serialization/export failure isolation from application and worker execution
226 | - Metric attribute rejection for identifier/hash/key/URL/payload/body/token/secret-style names and values outside descriptor-owned finite sets
227 | - Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
228 | - Injection attacks
229 | - Session fixation/rotation
230 | - Credential decryption failure
231 | - Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
232 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
233 | - Runtime database role privilege escape, ownership, migration-history, DELETE, DDL, and durable archive-table access attempts
234 |
235 | ## Scraper tests
236 |
237 | - Login page selector fixtures
238 | - Successful cookie extraction
239 | - Invalid credentials
240 | - CAPTCHA/2FA detection
241 | - Provider HTML changes
242 | - Browser cleanup on failure
243 | - Login-state/session validation
244 | - Redacted screenshot/trace behavior
245 | - Structured failure codes
246 |
247 | Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.
248 |
249 | ## Architecture tests
250 |
251 | - `packages/risk-engine` cannot import network/database/provider/browser packages
252 | - API routes cannot import provider session drivers directly
253 | - API persistence may enqueue durable work but cannot execute merchant/provider network delivery
254 | - All schema comes from `packages/database`
255 | - All public response and domain-event types come from `packages/shared-types`
256 | - Tenant-scoped repositories, outbox rows, and jobs require explicit scope
257 |
258 | ## Pilot evaluation
259 |
260 | Track a confusion matrix against real verified outcomes:
261 |
262 | - true positive
263 | - false positive
264 | - true negative
265 | - false negative
266 |
267 | Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.
268 |
269 | ## Required CI gates
270 |
271 | - formatting check
272 | - lint
273 | - typecheck
274 | - unit tests
275 | - contract tests
276 | - integration tests with PostgreSQL
277 | - migration manifest, verification, replay, and database-history integrity
278 | - clean PostgreSQL backup/restore rehearsal
279 | - least-privilege runtime database role grant and effective-permission verification
280 | - dependency audit
281 | - secret scanning
282 | - architecture/dependency-boundary tests
283 |
284 | ## Browser dead-letter operations coverage
285 |
286 | Browser API tests must prove session enforcement, exact-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, secret-free list serialization, replay-result serialization, and structured conflict mapping. The existing real-PostgreSQL durable-work suite remains authoritative for concurrent duplicate replay, tenant isolation, structural/expiry rejection, lease reset, immutable evidence, and audit atomicity.
287 |
288 | ## Durable work retention coverage
289 |
290 | Default unit tests prove invalid cutoffs, empty terminal-status selections, unsafe archive-run IDs, and batches above 500 fail before a database connection is opened.
291 |
292 | PostgreSQL integration tests must prove:
293 |
294 | - valid durable trace context round-trips across courier, webhook, and verification rows while nullable legacy rows remain valid;
295 | - malformed context is rejected by every durable table and all-zero trace/span IDs fail closed;
296 |
297 | - preview returns only old `completed`/`failed` rows and performs no mutation;
298 | - queued and recent rows remain in their source queues;
299 | - preview and archive responses exclude source payload and provider-reference values;
300 | - archive evidence is inserted before source deletion in one transaction;
301 | - courier, webhook, and verification source rows are deleted only after matching evidence exists;
302 | - replay ledger rows remain after source archival;
303 | - rerunning the same cutoff is idempotent when no source rows remain;
304 | - the archive schema contains no payload, raw contact, endpoint, credential, or provider-reference columns;
305 | - the normal runtime role cannot read `durable_work_archives` and has no source `DELETE` privilege.
306 |
```

### packages/database/migrations/0014_durable_trace_context.sql

Bytes: 1942
SHA-256: 9581bda9815e14078cfa15f66d8958e0dfc03e9ba5b5c06ef525955867001e66
Lines: 1-60 of 60

```text
 1 | alter table courier_jobs
 2 |   add column trace_parent text,
 3 |   add column trace_state text;
 4 |
 5 | alter table webhook_deliveries
 6 |   add column trace_parent text,
 7 |   add column trace_state text;
 8 |
 9 | alter table verification_jobs
10 |   add column trace_parent text,
11 |   add column trace_state text;
12 |
13 | alter table courier_jobs
14 |   add constraint courier_jobs_trace_parent_valid check (
15 |     trace_parent is null or (
16 |       trace_parent ~ '^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$'
17 |       and substring(trace_parent from 4 for 32) <> repeat('0', 32)
18 |       and substring(trace_parent from 37 for 16) <> repeat('0', 16)
19 |     )
20 |   ),
21 |   add constraint courier_jobs_trace_state_valid check (
22 |     trace_state is null or (
23 |       trace_parent is not null
24 |       and char_length(trace_state) between 1 and 512
25 |       and trace_state !~ '[[:cntrl:]]'
26 |     )
27 |   );
28 |
29 | alter table webhook_deliveries
30 |   add constraint webhook_deliveries_trace_parent_valid check (
31 |     trace_parent is null or (
32 |       trace_parent ~ '^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$'
33 |       and substring(trace_parent from 4 for 32) <> repeat('0', 32)
34 |       and substring(trace_parent from 37 for 16) <> repeat('0', 16)
35 |     )
36 |   ),
37 |   add constraint webhook_deliveries_trace_state_valid check (
38 |     trace_state is null or (
39 |       trace_parent is not null
40 |       and char_length(trace_state) between 1 and 512
41 |       and trace_state !~ '[[:cntrl:]]'
42 |     )
43 |   );
44 |
45 | alter table verification_jobs
46 |   add constraint verification_jobs_trace_parent_valid check (
47 |     trace_parent is null or (
48 |       trace_parent ~ '^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$'
49 |       and substring(trace_parent from 4 for 32) <> repeat('0', 32)
50 |       and substring(trace_parent from 37 for 16) <> repeat('0', 16)
51 |     )
52 |   ),
53 |   add constraint verification_jobs_trace_state_valid check (
54 |     trace_state is null or (
55 |       trace_parent is not null
56 |       and char_length(trace_state) between 1 and 512
57 |       and trace_state !~ '[[:cntrl:]]'
58 |     )
59 |   );
60 |
```

### packages/database/migrations/manifest.json

Bytes: 2161
SHA-256: 970a4df8736ee9adb95c5f81d9e0c14f69ab3fa4ec69a9250e9e691e2f28dcde
Lines: 1-63 of 63

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
56 |     },
57 |     {
58 |       "name": "0014_durable_trace_context.sql",
59 |       "checksum_sha256": "9581bda9815e14078cfa15f66d8958e0dfc03e9ba5b5c06ef525955867001e66"
60 |     }
61 |   ]
62 | }
63 |
```

### packages/database/src/durable-trace-context.postgres.test.ts

Bytes: 8473
SHA-256: 8c36a42619360647467c096b95499a95f2bc1e7ee1eb3c1b93debd85a06e6958
Lines: 1-197 of 197

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { afterAll, beforeAll, describe, expect, it } from 'vitest';
  3 | import { Pool } from 'pg';
  4 |
  5 | const databaseUrl = process.env.DATABASE_URL;
  6 | const integration = describe.skipIf(!databaseUrl);
  7 |
  8 | integration('PostgreSQL durable trace context', () => {
  9 |   const pool = new Pool({ connectionString: databaseUrl, max: 4 });
 10 |   const suffix = randomUUID().replaceAll('-', '');
 11 |   const organizationId = `org_trace_${suffix}`;
 12 |   const storeId = `sto_trace_${suffix}`;
 13 |   const courierAccountId = `coa_trace_${suffix}`;
 14 |   const webhookEndpointId = `we_trace_${suffix}`;
 15 |   const verificationSessionId = `ver_trace_${suffix}`;
 16 |   const validTraceParent = '00-11111111111111111111111111111111-2222222222222222-01';
 17 |   const validTraceState = 'vendor=value';
 18 |
 19 |   beforeAll(async () => {
 20 |     await pool.query(
 21 |       `insert into organizations (id, name, slug, plan_id)
 22 |        values ($1, 'Trace Context Test', $2, 'plan_free')`,
 23 |       [organizationId, `trace-${suffix}`],
 24 |     );
 25 |     await pool.query(
 26 |       `insert into stores (id, organization_id, name, platform, external_store_id)
 27 |        values ($1, $2, 'Trace Store', 'custom', $3)`,
 28 |       [storeId, organizationId, `trace-store-${suffix}`],
 29 |     );
 30 |     await pool.query(
 31 |       `insert into courier_accounts (id, store_id, provider, status)
 32 |        values ($1, $2, 'steadfast', 'connected')`,
 33 |       [courierAccountId, storeId],
 34 |     );
 35 |     await pool.query(
 36 |       `insert into webhook_endpoints (
 37 |          id, organization_id, store_id, url, secret_encrypted, events, status
 38 |        ) values ($1, $2, $3, 'https://merchant.example/trace', 'opaque-wrapper',
 39 |          '["assessment.completed"]'::jsonb, 'active')`,
 40 |       [webhookEndpointId, organizationId, storeId],
 41 |     );
 42 |     await pool.query(
 43 |       `insert into verification_sessions (
 44 |          id, organization_id, store_id, phone_hash, purpose, channel,
 45 |          status, expires_at, idempotency_key, max_attempts
 46 |        ) values ($1, $2, $3, $4, 'confirm_order', 'sms', 'queued',
 47 |          '2026-08-01T00:00:00.000Z', $5, 5)`,
 48 |       [verificationSessionId, organizationId, storeId, 'a'.repeat(64), `trace-ver-${suffix}`],
 49 |     );
 50 |   });
 51 |
 52 |   afterAll(async () => {
 53 |     await pool.query('delete from verification_jobs where verification_session_id = $1', [
 54 |       verificationSessionId,
 55 |     ]);
 56 |     await pool.query('delete from verification_sessions where id = $1', [verificationSessionId]);
 57 |     await pool.query('delete from webhook_deliveries where endpoint_id = $1', [webhookEndpointId]);
 58 |     await pool.query('delete from webhook_endpoints where id = $1', [webhookEndpointId]);
 59 |     await pool.query('delete from courier_jobs where courier_account_id = $1', [courierAccountId]);
 60 |     await pool.query('delete from courier_accounts where id = $1', [courierAccountId]);
 61 |     await pool.query('delete from stores where id = $1', [storeId]);
 62 |     await pool.query('delete from organizations where id = $1', [organizationId]);
 63 |     await pool.end();
 64 |   });
 65 |
 66 |   it('round-trips bounded context while preserving nullable legacy rows', async () => {
 67 |     const courierId = `coj_trace_valid_${suffix}`;
 68 |     const courierLegacyId = `coj_trace_legacy_${suffix}`;
 69 |     const webhookId = `wd_trace_valid_${suffix}`;
 70 |     const verificationId = `vj_trace_valid_${suffix}`;
 71 |
 72 |     await pool.query(
 73 |       `insert into courier_jobs (
 74 |          id, courier_account_id, job_type, status, scheduled_at, payload,
 75 |          trace_parent, trace_state
 76 |        ) values
 77 |          ($1, $2, 'customer_observation_refresh', 'queued', now(), '{}'::jsonb, $3, $4),
 78 |          ($5, $2, 'customer_observation_refresh', 'queued', now(), '{}'::jsonb, null, null)`,
 79 |       [courierId, courierAccountId, validTraceParent, validTraceState, courierLegacyId],
 80 |     );
 81 |     await pool.query(
 82 |       `insert into webhook_deliveries (
 83 |          id, endpoint_id, organization_id, store_id, event_id, event_type,
 84 |          event_payload, occurred_at, status, next_attempt_at, trace_parent, trace_state
 85 |        ) values ($1, $2, $3, $4, $5, 'assessment.completed', $6::jsonb,
 86 |          now(), 'queued', now(), $7, $8)`,
 87 |       [
 88 |         webhookId,
 89 |         webhookEndpointId,
 90 |         organizationId,
 91 |         storeId,
 92 |         `evt-trace-${suffix}`,
 93 |         JSON.stringify({ opaque: true }),
 94 |         validTraceParent,
 95 |         validTraceState,
 96 |       ],
 97 |     );
 98 |     await pool.query(
 99 |       `insert into verification_jobs (
100 |          id, verification_session_id, organization_id, store_id, job_type,
101 |          payload_encrypted, status, next_attempt_at, trace_parent, trace_state
102 |        ) values ($1, $2, $3, $4, 'send_otp', 'opaque-wrapper', 'queued', now(), $5, $6)`,
103 |       [
104 |         verificationId,
105 |         verificationSessionId,
106 |         organizationId,
107 |         storeId,
108 |         validTraceParent,
109 |         validTraceState,
110 |       ],
111 |     );
112 |
113 |     const result = await pool.query<{
114 |       source: string;
115 |       trace_parent: string | null;
116 |       trace_state: string | null;
117 |     }>(
118 |       `select 'courier' as source, trace_parent, trace_state from courier_jobs where id = $1
119 |        union all
120 |        select 'courier_legacy', trace_parent, trace_state from courier_jobs where id = $2
121 |        union all
122 |        select 'webhook', trace_parent, trace_state from webhook_deliveries where id = $3
123 |        union all
124 |        select 'verification', trace_parent, trace_state from verification_jobs where id = $4
125 |        order by source`,
126 |       [courierId, courierLegacyId, webhookId, verificationId],
127 |     );
128 |
129 |     expect(result.rows).toEqual([
130 |       { source: 'courier', trace_parent: validTraceParent, trace_state: validTraceState },
131 |       { source: 'courier_legacy', trace_parent: null, trace_state: null },
132 |       { source: 'verification', trace_parent: validTraceParent, trace_state: validTraceState },
133 |       { source: 'webhook', trace_parent: validTraceParent, trace_state: validTraceState },
134 |     ]);
135 |   });
136 |
137 |   it('rejects malformed context on every durable table', async () => {
138 |     const malformed = 'not-a-trace-parent';
139 |     await expect(
140 |       pool.query(
141 |         `insert into courier_jobs (
142 |            id, courier_account_id, job_type, status, scheduled_at, payload, trace_parent
143 |          ) values ($1, $2, 'customer_observation_refresh', 'queued', now(), '{}'::jsonb, $3)`,
144 |         [`coj_trace_bad_${suffix}`, courierAccountId, malformed],
145 |       ),
146 |     ).rejects.toMatchObject({ code: '23514' });
147 |     await expect(
148 |       pool.query(
149 |         `insert into webhook_deliveries (
150 |            id, endpoint_id, organization_id, store_id, event_id, event_type,
151 |            event_payload, occurred_at, status, next_attempt_at, trace_parent
152 |          ) values ($1, $2, $3, $4, $5, 'assessment.completed', '{}'::jsonb,
153 |            now(), 'queued', now(), $6)`,
154 |         [
155 |           `wd_trace_bad_${suffix}`,
156 |           webhookEndpointId,
157 |           organizationId,
158 |           storeId,
159 |           `evt-trace-bad-${suffix}`,
160 |           malformed,
161 |         ],
162 |       ),
163 |     ).rejects.toMatchObject({ code: '23514' });
164 |     await expect(
165 |       pool.query(
166 |         `insert into verification_jobs (
167 |            id, verification_session_id, organization_id, store_id, job_type,
168 |            payload_encrypted, status, next_attempt_at, trace_parent
169 |          ) values ($1, $2, $3, $4, 'send_otp', 'opaque-wrapper', 'queued', now(), $5)`,
170 |         [`vj_trace_bad_${suffix}`, verificationSessionId, organizationId, storeId, malformed],
171 |       ),
172 |     ).rejects.toMatchObject({ code: '23514' });
173 |   });
174 |
175 |   it('rejects all-zero trace and span identifiers', async () => {
176 |     const zeroTrace = '00-00000000000000000000000000000000-2222222222222222-01';
177 |     const zeroSpan = '00-11111111111111111111111111111111-0000000000000000-01';
178 |     await expect(
179 |       pool.query(
180 |         `insert into courier_jobs (
181 |            id, courier_account_id, job_type, status, scheduled_at, payload, trace_parent
182 |          ) values ($1, $2, 'customer_observation_refresh', 'queued', now(), '{}'::jsonb, $3)`,
183 |         [`coj_trace_zero_${suffix}`, courierAccountId, zeroTrace],
184 |       ),
185 |     ).rejects.toMatchObject({ code: '23514' });
186 |     await expect(
187 |       pool.query(
188 |         `insert into verification_jobs (
189 |            id, verification_session_id, organization_id, store_id, job_type,
190 |            payload_encrypted, status, next_attempt_at, trace_parent
191 |          ) values ($1, $2, $3, $4, 'send_otp', 'opaque-wrapper', 'queued', now(), $5)`,
192 |         [`vj_trace_zero_${suffix}`, verificationSessionId, organizationId, storeId, zeroSpan],
193 |       ),
194 |     ).rejects.toMatchObject({ code: '23514' });
195 |   });
196 | });
197 |
```

### packages/database/src/schema.ts

Bytes: 24207
SHA-256: 5924ab91b81cd8684380659e2a45b4fec3243f59378b31a2148f491d29e5a95f
Lines: 1-664 of 664

```typescript
  1 | import {
  2 |   boolean,
  3 |   index,
  4 |   integer,
  5 |   jsonb,
  6 |   numeric,
  7 |   pgTable,
  8 |   primaryKey,
  9 |   text,
 10 |   timestamp,
 11 |   uniqueIndex,
 12 | } from 'drizzle-orm/pg-core';
 13 |
 14 | const timestamps = () => ({
 15 |   createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
 16 |   updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
 17 | });
 18 |
 19 | export const users = pgTable('users', {
 20 |   id: text('id').primaryKey(),
 21 |   email: text('email').notNull().unique(),
 22 |   passwordHash: text('password_hash'),
 23 |   managedAuthId: text('managed_auth_id').unique(),
 24 |   emailVerifiedAt: timestamp('email_verified_at', { withTimezone: true }),
 25 |   platformRole: text('platform_role').notNull().default('merchant'),
 26 |   status: text('status').notNull().default('active'),
 27 |   ...timestamps(),
 28 | });
 29 |
 30 | export const userSessions = pgTable(
 31 |   'user_sessions',
 32 |   {
 33 |     id: text('id').primaryKey(),
 34 |     userId: text('user_id')
 35 |       .notNull()
 36 |       .references(() => users.id, { onDelete: 'cascade' }),
 37 |     tokenHash: text('token_hash').notNull().unique(),
 38 |     expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
 39 |     revokedAt: timestamp('revoked_at', { withTimezone: true }),
 40 |     createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
 41 |   },
 42 |   (table) => [
 43 |     index('user_sessions_user_idx').on(table.userId),
 44 |     index('user_sessions_expiry_idx').on(table.expiresAt),
 45 |   ],
 46 | );
 47 |
 48 | export const plans = pgTable('plans', {
 49 |   id: text('id').primaryKey(),
 50 |   code: text('code').notNull().unique(),
 51 |   name: text('name').notNull(),
 52 |   entitlements: jsonb('entitlements').notNull(),
 53 |   active: boolean('active').notNull().default(true),
 54 |   ...timestamps(),
 55 | });
 56 |
 57 | export const organizations = pgTable('organizations', {
 58 |   id: text('id').primaryKey(),
 59 |   name: text('name').notNull(),
 60 |   slug: text('slug').notNull().unique(),
 61 |   planId: text('plan_id').references(() => plans.id),
 62 |   status: text('status').notNull().default('active'),
 63 |   ...timestamps(),
 64 | });
 65 |
 66 | export const organizationMembers = pgTable(
 67 |   'organization_members',
 68 |   {
 69 |     organizationId: text('organization_id')
 70 |       .notNull()
 71 |       .references(() => organizations.id, { onDelete: 'cascade' }),
 72 |     userId: text('user_id')
 73 |       .notNull()
 74 |       .references(() => users.id, { onDelete: 'cascade' }),
 75 |     role: text('role').notNull(),
 76 |     permissions: jsonb('permissions').notNull().default({}),
 77 |     ...timestamps(),
 78 |   },
 79 |   (table) => [
 80 |     primaryKey({ columns: [table.organizationId, table.userId] }),
 81 |     index('organization_members_user_idx').on(table.userId),
 82 |   ],
 83 | );
 84 |
 85 | export const stores = pgTable(
 86 |   'stores',
 87 |   {
 88 |     id: text('id').primaryKey(),
 89 |     organizationId: text('organization_id')
 90 |       .notNull()
 91 |       .references(() => organizations.id, { onDelete: 'cascade' }),
 92 |     name: text('name').notNull(),
 93 |     platform: text('platform').notNull(),
 94 |     externalStoreId: text('external_store_id'),
 95 |     timezone: text('timezone').notNull().default('Asia/Dhaka'),
 96 |     currency: text('currency').notNull().default('BDT'),
 97 |     status: text('status').notNull().default('active'),
 98 |     ...timestamps(),
 99 |   },
100 |   (table) => [
101 |     index('stores_organization_idx').on(table.organizationId),
102 |     uniqueIndex('stores_external_unique').on(
103 |       table.organizationId,
104 |       table.platform,
105 |       table.externalStoreId,
106 |     ),
107 |   ],
108 | );
109 |
110 | export const apiKeys = pgTable(
111 |   'api_keys',
112 |   {
113 |     id: text('id').primaryKey(),
114 |     organizationId: text('organization_id')
115 |       .notNull()
116 |       .references(() => organizations.id, { onDelete: 'cascade' }),
117 |     storeId: text('store_id').references(() => stores.id, { onDelete: 'cascade' }),
118 |     environment: text('environment').notNull(),
119 |     keyHash: text('key_hash').notNull().unique(),
120 |     keyPrefix: text('key_prefix').notNull(),
121 |     name: text('name').notNull(),
122 |     scopes: jsonb('scopes').notNull().default([]),
123 |     allowedOrigins: jsonb('allowed_origins').notNull().default([]),
124 |     lastUsedAt: timestamp('last_used_at', { withTimezone: true }),
125 |     expiresAt: timestamp('expires_at', { withTimezone: true }),
126 |     revokedAt: timestamp('revoked_at', { withTimezone: true }),
127 |     ...timestamps(),
128 |   },
129 |   (table) => [
130 |     index('api_keys_scope_idx').on(table.organizationId, table.storeId),
131 |     index('api_keys_prefix_idx').on(table.keyPrefix),
132 |   ],
133 | );
134 |
135 | export const usageEvents = pgTable(
136 |   'usage_events',
137 |   {
138 |     id: text('id').primaryKey(),
139 |     organizationId: text('organization_id')
140 |       .notNull()
141 |       .references(() => organizations.id, { onDelete: 'cascade' }),
142 |     apiKeyId: text('api_key_id').references(() => apiKeys.id, { onDelete: 'set null' }),
143 |     eventType: text('event_type').notNull(),
144 |     units: integer('units').notNull().default(1),
145 |     requestId: text('request_id').notNull(),
146 |     responseMs: integer('response_ms'),
147 |     statusCode: integer('status_code'),
148 |     period: text('period').notNull(),
149 |     createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
150 |   },
151 |   (table) => [
152 |     uniqueIndex('usage_events_request_unique').on(
153 |       table.organizationId,
154 |       table.eventType,
155 |       table.requestId,
156 |     ),
157 |     index('usage_events_period_idx').on(table.organizationId, table.period),
158 |   ],
159 | );
160 |
161 | export const auditEvents = pgTable(
162 |   'audit_events',
163 |   {
164 |     id: text('id').primaryKey(),
165 |     organizationId: text('organization_id').references(() => organizations.id, {
166 |       onDelete: 'set null',
167 |     }),
168 |     actorType: text('actor_type').notNull(),
169 |     actorId: text('actor_id'),
170 |     action: text('action').notNull(),
171 |     targetType: text('target_type'),
172 |     targetId: text('target_id'),
173 |     metadata: jsonb('metadata').notNull().default({}),
174 |     createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
175 |   },
176 |   (table) => [index('audit_events_scope_idx').on(table.organizationId, table.createdAt)],
177 | );
178 |
179 | export const courierAccounts = pgTable(
180 |   'courier_accounts',
181 |   {
182 |     id: text('id').primaryKey(),
183 |     storeId: text('store_id')
184 |       .notNull()
185 |       .references(() => stores.id, { onDelete: 'cascade' }),
186 |     provider: text('provider').notNull(),
187 |     status: text('status').notNull().default('pending'),
188 |     credentialVersion: integer('credential_version').notNull().default(1),
189 |     lastConnectedAt: timestamp('last_connected_at', { withTimezone: true }),
190 |     lastSuccessAt: timestamp('last_success_at', { withTimezone: true }),
191 |     lastFailureAt: timestamp('last_failure_at', { withTimezone: true }),
192 |     failureCode: text('failure_code'),
193 |     ...timestamps(),
194 |   },
195 |   (table) => [
196 |     uniqueIndex('courier_accounts_store_provider_unique').on(table.storeId, table.provider),
197 |   ],
198 | );
199 |
200 | export const courierCredentials = pgTable('courier_credentials', {
201 |   courierAccountId: text('courier_account_id')
202 |     .primaryKey()
203 |     .references(() => courierAccounts.id, { onDelete: 'cascade' }),
204 |   encryptedPayload: text('encrypted_payload').notNull(),
205 |   encryptionKeyVersion: text('encryption_key_version').notNull(),
206 |   ...timestamps(),
207 | });
208 |
209 | export const courierSessions = pgTable('courier_sessions', {
210 |   courierAccountId: text('courier_account_id')
211 |     .primaryKey()
212 |     .references(() => courierAccounts.id, { onDelete: 'cascade' }),
213 |   encryptedPayload: text('encrypted_payload').notNull(),
214 |   encryptionKeyVersion: text('encryption_key_version').notNull(),
215 |   expiresAt: timestamp('expires_at', { withTimezone: true }),
216 |   validatedAt: timestamp('validated_at', { withTimezone: true }),
217 |   status: text('status').notNull(),
218 |   ...timestamps(),
219 | });
220 |
221 | export const courierObservations = pgTable(
222 |   'courier_observations',
223 |   {
224 |     id: text('id').primaryKey(),
225 |     storeId: text('store_id')
226 |       .notNull()
227 |       .references(() => stores.id, { onDelete: 'cascade' }),
228 |     provider: text('provider').notNull(),
229 |     phoneHash: text('phone_hash').notNull(),
230 |     totalOrders: integer('total_orders').notNull(),
231 |     deliveredOrders: integer('delivered_orders').notNull(),
232 |     returnedOrders: integer('returned_orders').notNull(),
233 |     cancelledBeforeShipping: integer('cancelled_before_shipping').notNull(),
234 |     successRate: numeric('success_rate', { precision: 5, scale: 4 }),
235 |     confidence: numeric('confidence', { precision: 5, scale: 4 }).notNull(),
236 |     sourceType: text('source_type').notNull(),
237 |     observedAt: timestamp('observed_at', { withTimezone: true }).notNull(),
238 |     expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
239 |     rawPayloadEncrypted: text('raw_payload_encrypted'),
240 |     createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
241 |   },
242 |   (table) => [
243 |     index('courier_observations_latest_idx').on(
244 |       table.storeId,
245 |       table.phoneHash,
246 |       table.provider,
247 |       table.observedAt,
248 |     ),
249 |   ],
250 | );
251 |
252 | export const courierJobs = pgTable(
253 |   'courier_jobs',
254 |   {
255 |     id: text('id').primaryKey(),
256 |     courierAccountId: text('courier_account_id')
257 |       .notNull()
258 |       .references(() => courierAccounts.id, { onDelete: 'cascade' }),
259 |     jobType: text('job_type').notNull(),
260 |     status: text('status').notNull(),
261 |     attempts: integer('attempts').notNull().default(0),
262 |     scheduledAt: timestamp('scheduled_at', { withTimezone: true }).notNull(),
263 |     startedAt: timestamp('started_at', { withTimezone: true }),
264 |     claimedBy: text('claimed_by'),
265 |     claimedAt: timestamp('claimed_at', { withTimezone: true }),
266 |     leaseExpiresAt: timestamp('lease_expires_at', { withTimezone: true }),
267 |     completedAt: timestamp('completed_at', { withTimezone: true }),
268 |     errorCode: text('error_code'),
269 |     payload: jsonb('payload').notNull().default({}),
270 |     traceParent: text('trace_parent'),
271 |     traceState: text('trace_state'),
272 |     ...timestamps(),
273 |   },
274 |   (table) => [index('courier_jobs_schedule_idx').on(table.status, table.scheduledAt)],
275 | );
276 |
277 | export const riskPolicies = pgTable(
278 |   'risk_policies',
279 |   {
280 |     id: text('id').primaryKey(),
281 |     storeId: text('store_id')
282 |       .notNull()
283 |       .references(() => stores.id, { onDelete: 'cascade' }),
284 |     version: text('version').notNull(),
285 |     policy: jsonb('policy').notNull(),
286 |     active: boolean('active').notNull().default(false),
287 |     ...timestamps(),
288 |   },
289 |   (table) => [uniqueIndex('risk_policies_store_version_unique').on(table.storeId, table.version)],
290 | );
291 |
292 | export const riskAssessments = pgTable(
293 |   'risk_assessments',
294 |   {
295 |     id: text('id').primaryKey(),
296 |     organizationId: text('organization_id')
297 |       .notNull()
298 |       .references(() => organizations.id, { onDelete: 'cascade' }),
299 |     storeId: text('store_id')
300 |       .notNull()
301 |       .references(() => stores.id, { onDelete: 'cascade' }),
302 |     apiKeyId: text('api_key_id').references(() => apiKeys.id, { onDelete: 'set null' }),
303 |     externalOrderId: text('external_order_id'),
304 |     idempotencyKey: text('idempotency_key').notNull(),
305 |     phoneHash: text('phone_hash').notNull(),
306 |     orderSnapshot: jsonb('order_snapshot').notNull(),
307 |     score: integer('score').notNull(),
308 |     confidence: numeric('confidence', { precision: 5, scale: 4 }).notNull(),
309 |     riskLevel: text('risk_level').notNull(),
310 |     decision: text('decision').notNull(),
311 |     engineVersion: text('engine_version').notNull(),
312 |     policyVersion: text('policy_version').notNull(),
313 |     degraded: boolean('degraded').notNull().default(false),
314 |     ...timestamps(),
315 |   },
316 |   (table) => [
317 |     uniqueIndex('risk_assessments_idempotency_unique').on(
318 |       table.organizationId,
319 |       table.storeId,
320 |       table.idempotencyKey,
321 |     ),
322 |     index('risk_assessments_store_created_idx').on(table.storeId, table.createdAt),
323 |   ],
324 | );
325 |
326 | export const integrationShadowComparisons = pgTable(
327 |   'integration_shadow_comparisons',
328 |   {
329 |     id: text('id').primaryKey(),
330 |     organizationId: text('organization_id')
331 |       .notNull()
332 |       .references(() => organizations.id, { onDelete: 'cascade' }),
333 |     storeId: text('store_id')
334 |       .notNull()
335 |       .references(() => stores.id, { onDelete: 'cascade' }),
336 |     apiKeyId: text('api_key_id').references(() => apiKeys.id, { onDelete: 'set null' }),
337 |     integration: text('integration').notNull(),
338 |     externalOrderId: text('external_order_id').notNull(),
339 |     idempotencyKey: text('idempotency_key').notNull(),
340 |     assessmentId: text('assessment_id')
341 |       .notNull()
342 |       .references(() => riskAssessments.id, { onDelete: 'cascade' }),
343 |     legacyScore: integer('legacy_score').notNull(),
344 |     legacyDecision: text('legacy_decision').notNull(),
345 |     guardScore: integer('guard_score').notNull(),
346 |     guardDecision: text('guard_decision').notNull(),
347 |     guardConfidence: numeric('guard_confidence', { precision: 5, scale: 4 }).notNull(),
348 |     decisionChanged: boolean('decision_changed').notNull(),
349 |     scoreDelta: integer('score_delta').notNull(),
350 |     rolloutVersion: text('rollout_version').notNull(),
351 |     sampleBucket: integer('sample_bucket').notNull(),
352 |     sampleRateBps: integer('sample_rate_bps').notNull(),
353 |     evaluatedAt: timestamp('evaluated_at', { withTimezone: true }).notNull(),
354 |     createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
355 |   },
356 |   (table) => [
357 |     uniqueIndex('integration_shadow_comparisons_scope_idempotency_unique').on(
358 |       table.organizationId,
359 |       table.storeId,
360 |       table.integration,
361 |       table.idempotencyKey,
362 |     ),
363 |     index('integration_shadow_comparisons_store_created_idx').on(table.storeId, table.createdAt),
364 |     index('integration_shadow_comparisons_assessment_idx').on(table.assessmentId),
365 |   ],
366 | );
367 |
368 | export const integrationShadowRollouts = pgTable(
369 |   'integration_shadow_rollouts',
370 |   {
371 |     organizationId: text('organization_id')
372 |       .notNull()
373 |       .references(() => organizations.id, { onDelete: 'cascade' }),
374 |     storeId: text('store_id')
375 |       .notNull()
376 |       .references(() => stores.id, { onDelete: 'cascade' }),
377 |     integration: text('integration').notNull(),
378 |     mode: text('mode').notNull(),
379 |     rolloutVersion: text('rollout_version').notNull(),
380 |     sampleRateBps: integer('sample_rate_bps').notNull(),
381 |     updatedByUserId: text('updated_by_user_id').references(() => users.id, {
382 |       onDelete: 'set null',
383 |     }),
384 |     ...timestamps(),
385 |   },
386 |   (table) => [
387 |     primaryKey({ columns: [table.organizationId, table.storeId, table.integration] }),
388 |     index('integration_shadow_rollouts_mode_idx').on(
389 |       table.integration,
390 |       table.mode,
391 |       table.updatedAt,
392 |     ),
393 |   ],
394 | );
395 |
396 | export const integrationShadowAttempts = pgTable(
397 |   'integration_shadow_attempts',
398 |   {
399 |     id: text('id').primaryKey(),
400 |     organizationId: text('organization_id')
401 |       .notNull()
402 |       .references(() => organizations.id, { onDelete: 'cascade' }),
403 |     storeId: text('store_id')
404 |       .notNull()
405 |       .references(() => stores.id, { onDelete: 'cascade' }),
406 |     apiKeyId: text('api_key_id').references(() => apiKeys.id, { onDelete: 'set null' }),
407 |     integration: text('integration').notNull(),
408 |     externalOrderId: text('external_order_id').notNull(),
409 |     idempotencyKey: text('idempotency_key').notNull(),
410 |     rolloutVersion: text('rollout_version').notNull(),
411 |     sampleBucket: integer('sample_bucket').notNull(),
412 |     sampleRateBps: integer('sample_rate_bps').notNull(),
413 |     status: text('status').notNull(),
414 |     failureCode: text('failure_code'),
415 |     assessmentId: text('assessment_id').references(() => riskAssessments.id, {
416 |       onDelete: 'cascade',
417 |     }),
418 |     comparisonId: text('comparison_id').references(() => integrationShadowComparisons.id, {
419 |       onDelete: 'cascade',
420 |     }),
421 |     evaluatedAt: timestamp('evaluated_at', { withTimezone: true }).notNull(),
422 |     createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
423 |   },
424 |   (table) => [
425 |     uniqueIndex('integration_shadow_attempts_scope_idempotency_unique').on(
426 |       table.organizationId,
427 |       table.storeId,
428 |       table.integration,
429 |       table.idempotencyKey,
430 |     ),
431 |     index('integration_shadow_attempts_store_created_idx').on(table.storeId, table.createdAt),
432 |     index('integration_shadow_attempts_status_created_idx').on(
433 |       table.integration,
434 |       table.status,
435 |       table.createdAt,
436 |     ),
437 |   ],
438 | );
439 |
440 | export const riskSignals = pgTable(
441 |   'risk_signals',
442 |   {
443 |     id: text('id').primaryKey(),
444 |     assessmentId: text('assessment_id')
445 |       .notNull()
446 |       .references(() => riskAssessments.id, { onDelete: 'cascade' }),
447 |     code: text('code').notNull(),
448 |     category: text('category').notNull(),
449 |     score: integer('score').notNull(),
450 |     confidence: numeric('confidence', { precision: 5, scale: 4 }),
451 |     description: text('description').notNull(),
452 |     evidenceReference: text('evidence_reference'),
453 |     createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
454 |   },
455 |   (table) => [index('risk_signals_assessment_idx').on(table.assessmentId)],
456 | );
457 |
458 | export const orderOutcomes = pgTable(
459 |   'order_outcomes',
460 |   {
461 |     id: text('id').primaryKey(),
462 |     organizationId: text('organization_id')
463 |       .notNull()
464 |       .references(() => organizations.id, { onDelete: 'cascade' }),
465 |     storeId: text('store_id')
466 |       .notNull()
467 |       .references(() => stores.id, { onDelete: 'cascade' }),
468 |     externalOrderId: text('external_order_id').notNull(),
469 |     idempotencyKey: text('idempotency_key').notNull(),
470 |     assessmentId: text('assessment_id').references(() => riskAssessments.id, {
471 |       onDelete: 'set null',
472 |     }),
473 |     phoneHash: text('phone_hash'),
474 |     outcome: text('outcome').notNull(),
475 |     provider: text('provider'),
476 |     reason: text('reason'),
477 |     source: text('source').notNull(),
478 |     occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull(),
479 |     createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
480 |   },
481 |   (table) => [
482 |     uniqueIndex('order_outcomes_idempotency_unique').on(
483 |       table.organizationId,
484 |       table.storeId,
485 |       table.idempotencyKey,
486 |     ),
487 |     index('order_outcomes_phone_idx').on(table.storeId, table.phoneHash, table.occurredAt),
488 |   ],
489 | );
490 |
491 | export const idempotencyRecords = pgTable(
492 |   'idempotency_records',
493 |   {
494 |     id: text('id').primaryKey(),
495 |     organizationId: text('organization_id')
496 |       .notNull()
497 |       .references(() => organizations.id, { onDelete: 'cascade' }),
498 |     storeId: text('store_id')
499 |       .notNull()
500 |       .references(() => stores.id, { onDelete: 'cascade' }),
501 |     operation: text('operation').notNull(),
502 |     idempotencyKey: text('idempotency_key').notNull(),
503 |     response: jsonb('response').notNull(),
504 |     expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
505 |     ...timestamps(),
506 |   },
507 |   (table) => [
508 |     uniqueIndex('idempotency_records_scope_unique').on(
509 |       table.organizationId,
510 |       table.storeId,
511 |       table.operation,
512 |       table.idempotencyKey,
513 |     ),
514 |     index('idempotency_records_expiry_idx').on(table.expiresAt),
515 |   ],
516 | );
517 |
518 | export const verificationSessions = pgTable(
519 |   'verification_sessions',
520 |   {
521 |     id: text('id').primaryKey(),
522 |     organizationId: text('organization_id')
523 |       .notNull()
524 |       .references(() => organizations.id, { onDelete: 'cascade' }),
525 |     storeId: text('store_id')
526 |       .notNull()
527 |       .references(() => stores.id, { onDelete: 'cascade' }),
528 |     assessmentId: text('assessment_id').references(() => riskAssessments.id, {
529 |       onDelete: 'set null',
530 |     }),
531 |     externalOrderId: text('external_order_id'),
532 |     phoneHash: text('phone_hash').notNull(),
533 |     purpose: text('purpose').notNull(),
534 |     channel: text('channel').notNull(),
535 |     status: text('status').notNull(),
536 |     idempotencyKey: text('idempotency_key'),
537 |     maxAttempts: integer('max_attempts').notNull().default(5),
538 |     expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
539 |     verifiedAt: timestamp('verified_at', { withTimezone: true }),
540 |     ...timestamps(),
541 |   },
542 |   (table) => [
543 |     index('verification_sessions_scope_idx').on(table.storeId, table.createdAt),
544 |     uniqueIndex('verification_sessions_idempotency_unique').on(
545 |       table.organizationId,
546 |       table.storeId,
547 |       table.idempotencyKey,
548 |     ),
549 |   ],
550 | );
551 |
552 | export const otpAttempts = pgTable('otp_attempts', {
553 |   id: text('id').primaryKey(),
554 |   verificationSessionId: text('verification_session_id')
555 |     .notNull()
556 |     .references(() => verificationSessions.id, { onDelete: 'cascade' }),
557 |   otpHash: text('otp_hash').notNull(),
558 |   attemptCount: integer('attempt_count').notNull().default(0),
559 |   providerMessageId: text('provider_message_id'),
560 |   sentAt: timestamp('sent_at', { withTimezone: true }),
561 |   deliveredAt: timestamp('delivered_at', { withTimezone: true }),
562 |   failedAt: timestamp('failed_at', { withTimezone: true }),
563 |   expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
564 |   ...timestamps(),
565 | });
566 |
567 | export const verificationJobs = pgTable(
568 |   'verification_jobs',
569 |   {
570 |     id: text('id').primaryKey(),
571 |     verificationSessionId: text('verification_session_id')
572 |       .notNull()
573 |       .references(() => verificationSessions.id, { onDelete: 'cascade' }),
574 |     organizationId: text('organization_id')
575 |       .notNull()
576 |       .references(() => organizations.id, { onDelete: 'cascade' }),
577 |     storeId: text('store_id')
578 |       .notNull()
579 |       .references(() => stores.id, { onDelete: 'cascade' }),
580 |     jobType: text('job_type').notNull().default('send_otp'),
581 |     payloadEncrypted: text('payload_encrypted').notNull(),
582 |     status: text('status').notNull().default('queued'),
583 |     attempts: integer('attempts').notNull().default(0),
584 |     nextAttemptAt: timestamp('next_attempt_at', { withTimezone: true }),
585 |     providerMessageId: text('provider_message_id'),
586 |     errorCode: text('error_code'),
587 |     claimedBy: text('claimed_by'),
588 |     claimedAt: timestamp('claimed_at', { withTimezone: true }),
589 |     leaseExpiresAt: timestamp('lease_expires_at', { withTimezone: true }),
590 |     completedAt: timestamp('completed_at', { withTimezone: true }),
591 |     traceParent: text('trace_parent'),
592 |     traceState: text('trace_state'),
593 |     ...timestamps(),
594 |   },
595 |   (table) => [
596 |     uniqueIndex('verification_jobs_session_type_unique').on(
597 |       table.verificationSessionId,
598 |       table.jobType,
599 |     ),
600 |     index('verification_jobs_claim_idx').on(
601 |       table.status,
602 |       table.nextAttemptAt,
603 |       table.leaseExpiresAt,
604 |     ),
605 |     index('verification_jobs_scope_idx').on(table.organizationId, table.storeId, table.createdAt),
606 |   ],
607 | );
608 |
609 | export const webhookEndpoints = pgTable(
610 |   'webhook_endpoints',
611 |   {
612 |     id: text('id').primaryKey(),
613 |     organizationId: text('organization_id')
614 |       .notNull()
615 |       .references(() => organizations.id, { onDelete: 'cascade' }),
616 |     storeId: text('store_id').references(() => stores.id, { onDelete: 'cascade' }),
617 |     url: text('url').notNull(),
618 |     secretEncrypted: text('secret_encrypted').notNull(),
619 |     events: jsonb('events').notNull(),
620 |     status: text('status').notNull().default('active'),
621 |     ...timestamps(),
622 |   },
623 |   (table) => [index('webhook_endpoints_scope_idx').on(table.organizationId, table.storeId)],
624 | );
625 |
626 | export const webhookDeliveries = pgTable(
627 |   'webhook_deliveries',
628 |   {
629 |     id: text('id').primaryKey(),
630 |     endpointId: text('endpoint_id')
631 |       .notNull()
632 |       .references(() => webhookEndpoints.id, { onDelete: 'cascade' }),
633 |     organizationId: text('organization_id')
634 |       .notNull()
635 |       .references(() => organizations.id, { onDelete: 'cascade' }),
636 |     storeId: text('store_id').references(() => stores.id, { onDelete: 'cascade' }),
637 |     eventId: text('event_id').notNull(),
638 |     eventType: text('event_type').notNull(),
639 |     eventPayload: jsonb('event_payload').notNull(),
640 |     occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull(),
641 |     status: text('status').notNull(),
642 |     attempts: integer('attempts').notNull().default(0),
643 |     nextAttemptAt: timestamp('next_attempt_at', { withTimezone: true }),
644 |     responseStatus: integer('response_status'),
645 |     errorCode: text('error_code'),
646 |     claimedBy: text('claimed_by'),
647 |     claimedAt: timestamp('claimed_at', { withTimezone: true }),
648 |     leaseExpiresAt: timestamp('lease_expires_at', { withTimezone: true }),
649 |     completedAt: timestamp('completed_at', { withTimezone: true }),
650 |     traceParent: text('trace_parent'),
651 |     traceState: text('trace_state'),
652 |     ...timestamps(),
653 |   },
654 |   (table) => [
655 |     uniqueIndex('webhook_deliveries_event_unique').on(table.endpointId, table.eventId),
656 |     index('webhook_deliveries_claim_idx').on(
657 |       table.status,
658 |       table.nextAttemptAt,
659 |       table.leaseExpiresAt,
660 |     ),
661 |     index('webhook_deliveries_scope_idx').on(table.organizationId, table.storeId, table.createdAt),
662 |   ],
663 | );
664 |
```

### packages/observability/src/index.ts

Bytes: 7449
SHA-256: b635b27cb2b3b5aba0fcc2bcbc1ae616dfd91ed8b85ff889ce395a62cd143a27
Lines: 1-227 of 227

```typescript
  1 | export * from './metrics.js';
  2 | export * from './tracing.js';
  3 |
  4 | export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
  5 |
  6 | export type LogAttributes = Readonly<Record<string, unknown>>;
  7 |
  8 | export interface StructuredLoggerOptions {
  9 |   service: string;
 10 |   environment?: string;
 11 |   clock?: () => Date;
 12 |   write?: (line: string, level: LogLevel) => void;
 13 |   maxDepth?: number;
 14 |   maxStringLength?: number;
 15 | }
 16 |
 17 | export interface StructuredLogger {
 18 |   debug(event: string, attributes?: LogAttributes): void;
 19 |   info(event: string, attributes?: LogAttributes): void;
 20 |   warn(event: string, attributes?: LogAttributes): void;
 21 |   error(event: string, attributes?: LogAttributes): void;
 22 | }
 23 |
 24 | export interface StructuredLogInput {
 25 |   level: LogLevel;
 26 |   event: string;
 27 |   service: string;
 28 |   environment: string;
 29 |   attributes?: LogAttributes;
 30 |   timestamp: Date;
 31 |   maxDepth?: number;
 32 |   maxStringLength?: number;
 33 | }
 34 |
 35 | const REDACTED = '[REDACTED]';
 36 | const CIRCULAR = '[CIRCULAR]';
 37 | const MAX_COLLECTION_ITEMS = 100;
 38 | const DEFAULT_MAX_DEPTH = 6;
 39 | const DEFAULT_MAX_STRING_LENGTH = 2_048;
 40 | const RESERVED_FIELDS = new Set(['timestamp', 'level', 'service', 'environment', 'event']);
 41 | const SENSITIVE_FIELDS = new Set([
 42 |   'authorization',
 43 |   'password',
 44 |   'passphrase',
 45 |   'secret',
 46 |   'signingsecret',
 47 |   'webhooksecret',
 48 |   'token',
 49 |   'accesstoken',
 50 |   'refreshtoken',
 51 |   'apikey',
 52 |   'cookie',
 53 |   'cookies',
 54 |   'sessioncookie',
 55 |   'otp',
 56 |   'phone',
 57 |   'phonenumber',
 58 |   'rawphone',
 59 |   'credential',
 60 |   'credentials',
 61 |   'providerresponse',
 62 |   'dnsanswers',
 63 |   'requestbody',
 64 |   'responsebody',
 65 | ]);
 66 |
 67 | export function createStructuredLogger(options: StructuredLoggerOptions): StructuredLogger {
 68 |   const service = requiredLabel(options.service, 'service');
 69 |   const environment = options.environment?.trim() || 'development';
 70 |   const clock = options.clock ?? (() => new Date());
 71 |   const write = options.write ?? defaultWrite;
 72 |
 73 |   const emit = (level: LogLevel, event: string, attributes?: LogAttributes): void => {
 74 |     try {
 75 |       const line = serializeStructuredLog({
 76 |         level,
 77 |         event,
 78 |         service,
 79 |         environment,
 80 |         timestamp: clock(),
 81 |         ...(attributes === undefined ? {} : { attributes }),
 82 |         ...(options.maxDepth === undefined ? {} : { maxDepth: options.maxDepth }),
 83 |         ...(options.maxStringLength === undefined
 84 |           ? {}
 85 |           : { maxStringLength: options.maxStringLength }),
 86 |       });
 87 |       write(line, level);
 88 |     } catch {
 89 |       // Telemetry failures must never break application or worker execution.
 90 |     }
 91 |   };
 92 |
 93 |   return {
 94 |     debug: (event, attributes) => emit('debug', event, attributes),
 95 |     info: (event, attributes) => emit('info', event, attributes),
 96 |     warn: (event, attributes) => emit('warn', event, attributes),
 97 |     error: (event, attributes) => emit('error', event, attributes),
 98 |   };
 99 | }
100 |
101 | export function serializeStructuredLog(input: StructuredLogInput): string {
102 |   const maxDepth = positiveInteger(input.maxDepth, DEFAULT_MAX_DEPTH);
103 |   const maxStringLength = positiveInteger(input.maxStringLength, DEFAULT_MAX_STRING_LENGTH);
104 |   const seen = new WeakSet<object>();
105 |   const attributes = sanitizeRecord(input.attributes ?? {}, {
106 |     depth: 0,
107 |     maxDepth,
108 |     maxStringLength,
109 |     seen,
110 |   });
111 |
112 |   return JSON.stringify({
113 |     ...attributes,
114 |     timestamp: input.timestamp.toISOString(),
115 |     level: input.level,
116 |     service: requiredLabel(input.service, 'service'),
117 |     environment: requiredLabel(input.environment, 'environment'),
118 |     event: requiredLabel(input.event, 'event'),
119 |   });
120 | }
121 |
122 | interface SanitizeContext {
123 |   depth: number;
124 |   maxDepth: number;
125 |   maxStringLength: number;
126 |   seen: WeakSet<object>;
127 | }
128 |
129 | function sanitizeRecord(
130 |   value: Readonly<Record<string, unknown>>,
131 |   context: SanitizeContext,
132 | ): Record<string, unknown> {
133 |   if (context.depth >= context.maxDepth) return { truncated: '[MAX_DEPTH]' };
134 |   if (context.seen.has(value)) return { circular: CIRCULAR };
135 |   context.seen.add(value);
136 |
137 |   const result: Record<string, unknown> = {};
138 |   const entries = Object.entries(value).slice(0, MAX_COLLECTION_ITEMS);
139 |   for (const [key, item] of entries) {
140 |     if (RESERVED_FIELDS.has(key)) continue;
141 |     result[key] = isSensitiveField(key)
142 |       ? REDACTED
143 |       : sanitizeValue(item, { ...context, depth: context.depth + 1 });
144 |   }
145 |   if (Object.keys(value).length > MAX_COLLECTION_ITEMS) result.truncated_fields = true;
146 |   return result;
147 | }
148 |
149 | function sanitizeValue(value: unknown, context: SanitizeContext): unknown {
150 |   if (value === null || typeof value === 'boolean') return value;
151 |   if (typeof value === 'string') return truncate(value, context.maxStringLength);
152 |   if (typeof value === 'number') return Number.isFinite(value) ? value : String(value);
153 |   if (typeof value === 'bigint') return value.toString();
154 |   if (typeof value === 'undefined') return '[UNDEFINED]';
155 |   if (typeof value === 'symbol')
156 |     return value.description ? `[SYMBOL:${value.description}]` : '[SYMBOL]';
157 |   if (typeof value === 'function') return '[FUNCTION]';
158 |   if (value instanceof Date)
159 |     return Number.isNaN(value.getTime()) ? '[INVALID_DATE]' : value.toISOString();
160 |   if (value instanceof Error) return sanitizeError(value, context);
161 |   if (ArrayBuffer.isView(value)) return `[BINARY:${value.byteLength}]`;
162 |   if (Array.isArray(value)) {
163 |     if (context.depth >= context.maxDepth) return '[MAX_DEPTH]';
164 |     if (context.seen.has(value)) return CIRCULAR;
165 |     context.seen.add(value);
166 |     const items = value
167 |       .slice(0, MAX_COLLECTION_ITEMS)
168 |       .map((item) => sanitizeValue(item, { ...context, depth: context.depth + 1 }));
169 |     if (value.length > MAX_COLLECTION_ITEMS) items.push('[TRUNCATED_ITEMS]');
170 |     return items;
171 |   }
172 |   if (typeof value === 'object') {
173 |     return sanitizeRecord(value as Readonly<Record<string, unknown>>, context);
174 |   }
175 |   return '[UNSUPPORTED]';
176 | }
177 |
178 | function sanitizeError(error: Error, context: SanitizeContext): Record<string, unknown> {
179 |   const code =
180 |     'code' in error
181 |       ? sanitizeValue((error as Error & { code?: unknown }).code, context)
182 |       : undefined;
183 |   return {
184 |     name: truncate(error.name || 'Error', context.maxStringLength),
185 |     ...(code === undefined ? {} : { code }),
186 |   };
187 | }
188 |
189 | function isSensitiveField(key: string): boolean {
190 |   const normalized = key.replace(/[^a-z0-9]/gi, '').toLowerCase();
191 |   if (normalized === 'phonehash') return false;
192 |   return (
193 |     SENSITIVE_FIELDS.has(normalized) ||
194 |     normalized.endsWith('password') ||
195 |     normalized.endsWith('secret') ||
196 |     normalized.endsWith('token') ||
197 |     normalized.endsWith('apikey') ||
198 |     normalized.endsWith('cookie') ||
199 |     normalized.endsWith('payload') ||
200 |     normalized.endsWith('body') ||
201 |     normalized.endsWith('credentials') ||
202 |     normalized.endsWith('url')
203 |   );
204 | }
205 |
206 | function truncate(value: string, maxLength: number): string {
207 |   if (value.length <= maxLength) return value;
208 |   return `${value.slice(0, maxLength)}...[TRUNCATED:${value.length - maxLength}]`;
209 | }
210 |
211 | function requiredLabel(value: string, name: string): string {
212 |   const normalized = value.trim();
213 |   if (!normalized) throw new Error(`${name} is required`);
214 |   return normalized;
215 | }
216 |
217 | function positiveInteger(value: number | undefined, fallback: number): number {
218 |   return Number.isSafeInteger(value) && Number(value) > 0 ? Number(value) : fallback;
219 | }
220 |
221 | function defaultWrite(line: string, level: LogLevel): void {
222 |   if (level === 'error') console.error(line);
223 |   else if (level === 'warn') console.warn(line);
224 |   else if (level === 'debug') console.debug(line);
225 |   else console.info(line);
226 | }
227 |
```

### packages/observability/src/tracing.test.ts

Bytes: 5840
SHA-256: 74552e5d6df68a3aa418a9df374bd88c82387655ef4121aff3773a12465b85e7
Lines: 1-178 of 178

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import {
  3 |   createTracer,
  4 |   defineSpan,
  5 |   formatTraceParent,
  6 |   parsePersistedTraceContext,
  7 |   parseTraceContext,
  8 |   toPersistedTraceContext,
  9 |   type SpanPoint,
 10 | } from './tracing.js';
 11 |
 12 | const TRACE_ID = '11111111111111111111111111111111';
 13 | const PARENT_SPAN_ID = '2222222222222222';
 14 | const CHILD_SPAN_ID = '3333333333333333';
 15 |
 16 | const REQUEST_SPAN = defineSpan({
 17 |   name: 'ozzyl.api.request',
 18 |   kind: 'server',
 19 |   attributes: {
 20 |     method: { values: ['GET', 'POST'] },
 21 |     route: { values: ['/health', '/v1/risk-assessments'] },
 22 |     status_class: { values: ['2xx', '5xx'] },
 23 |   },
 24 | });
 25 |
 26 | describe('trace context', () => {
 27 |   it('parses, normalizes, formats, and persists W3C context', () => {
 28 |     const context = parseTraceContext(
 29 |       `00-${TRACE_ID}-${PARENT_SPAN_ID}-01`,
 30 |       'vendor=value, second=other',
 31 |     );
 32 |
 33 |     expect(context).toEqual({
 34 |       traceId: TRACE_ID,
 35 |       spanId: PARENT_SPAN_ID,
 36 |       traceFlags: '01',
 37 |       traceState: 'vendor=value,second=other',
 38 |     });
 39 |     expect(formatTraceParent(context!)).toBe(`00-${TRACE_ID}-${PARENT_SPAN_ID}-01`);
 40 |     expect(parsePersistedTraceContext(toPersistedTraceContext(context!))).toEqual(context);
 41 |   });
 42 |
 43 |   it('rejects malformed, all-zero, unsupported-version, and unsafe tracestate values', () => {
 44 |     expect(parseTraceContext('00-00000000000000000000000000000000-2222222222222222-01')).toBeNull();
 45 |     expect(parseTraceContext(`00-${TRACE_ID}-0000000000000000-01`)).toBeNull();
 46 |     expect(parseTraceContext(`01-${TRACE_ID}-${PARENT_SPAN_ID}-01`)).toBeNull();
 47 |     expect(
 48 |       parseTraceContext(`00-${TRACE_ID}-${PARENT_SPAN_ID}-01`, 'duplicate=a,duplicate=b'),
 49 |     ).toBeNull();
 50 |     expect(
 51 |       parseTraceContext(`00-${TRACE_ID}-${PARENT_SPAN_ID}-01`, 'vendor=unsafe=value'),
 52 |     ).toBeNull();
 53 |   });
 54 | });
 55 |
 56 | describe('span descriptors and recorder', () => {
 57 |   it('rejects identifier and secret-like attributes before instrumentation', () => {
 58 |     expect(() =>
 59 |       defineSpan({
 60 |         name: 'ozzyl.bad.span',
 61 |         kind: 'internal',
 62 |         attributes: { job_id: { values: ['job-1'] } },
 63 |       }),
 64 |     ).toThrow(/unsafe or unbounded/);
 65 |     expect(() =>
 66 |       defineSpan({
 67 |         name: 'ozzyl.bad.secret',
 68 |         kind: 'internal',
 69 |         attributes: { access_token: { values: ['category'] } },
 70 |       }),
 71 |     ).toThrow(/unsafe or unbounded/);
 72 |   });
 73 |
 74 |   it('emits one child span with bounded attributes, status, and duration', () => {
 75 |     const points: SpanPoint[] = [];
 76 |     const clockValues = [
 77 |       new Date('2026-07-28T00:00:00.000Z'),
 78 |       new Date('2026-07-28T00:00:00.025Z'),
 79 |     ];
 80 |     const monotonicValues = [100, 125];
 81 |     const tracer = createTracer({
 82 |       service: 'api',
 83 |       environment: 'test',
 84 |       clock: () => clockValues.shift()!,
 85 |       monotonicNow: () => monotonicValues.shift()!,
 86 |       generateSpanId: () => CHILD_SPAN_ID,
 87 |       write: (_line, point) => points.push(point),
 88 |     });
 89 |     const parent = parseTraceContext(`00-${TRACE_ID}-${PARENT_SPAN_ID}-01`)!;
 90 |
 91 |     const span = tracer.startSpan(REQUEST_SPAN, {
 92 |       parent,
 93 |       attributes: { method: 'POST', route: '/v1/risk-assessments' },
 94 |     });
 95 |     span.end({ status: 'ok', attributes: { status_class: '2xx' } });
 96 |     span.end({ status: 'error', attributes: { status_class: '5xx' } });
 97 |
 98 |     expect(points).toEqual([
 99 |       {
100 |         telemetry_type: 'span',
101 |         start_time: '2026-07-28T00:00:00.000Z',
102 |         end_time: '2026-07-28T00:00:00.025Z',
103 |         service: 'api',
104 |         environment: 'test',
105 |         name: 'ozzyl.api.request',
106 |         kind: 'server',
107 |         trace_id: TRACE_ID,
108 |         span_id: CHILD_SPAN_ID,
109 |         parent_span_id: PARENT_SPAN_ID,
110 |         trace_flags: '01',
111 |         status: 'ok',
112 |         duration_ms: 25,
113 |         attributes: {
114 |           method: 'POST',
115 |           route: '/v1/risk-assessments',
116 |           status_class: '2xx',
117 |         },
118 |       },
119 |     ]);
120 |   });
121 |
122 |   it('creates a fresh root trace when no valid parent exists', () => {
123 |     const points: SpanPoint[] = [];
124 |     const tracer = createTracer({
125 |       service: 'worker',
126 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
127 |       monotonicNow: () => 1,
128 |       generateTraceId: () => TRACE_ID,
129 |       generateSpanId: () => CHILD_SPAN_ID,
130 |       write: (_line, point) => points.push(point),
131 |     });
132 |
133 |     const span = tracer.startSpan(defineSpan({ name: 'ozzyl.worker.operation', kind: 'consumer' }));
134 |     span.end({ status: 'ok' });
135 |
136 |     expect(span.context).toEqual({ traceId: TRACE_ID, spanId: CHILD_SPAN_ID, traceFlags: '01' });
137 |     expect(points[0]).not.toHaveProperty('parent_span_id');
138 |   });
139 |
140 |   it('drops invalid attribute values without changing application flow', () => {
141 |     const write = vi.fn();
142 |     const tracer = createTracer({
143 |       service: 'api',
144 |       generateTraceId: () => TRACE_ID,
145 |       generateSpanId: () => CHILD_SPAN_ID,
146 |       write,
147 |     });
148 |
149 |     const span = tracer.startSpan(REQUEST_SPAN, {
150 |       attributes: { method: 'DELETE', route: '/health' },
151 |     });
152 |     expect(() => span.end({ status: 'ok', attributes: { status_class: '2xx' } })).not.toThrow();
153 |     expect(write).not.toHaveBeenCalled();
154 |   });
155 |
156 |   it('isolates ID generation, clock, serialization, and sink failures', () => {
157 |     const badIdTracer = createTracer({
158 |       service: 'api',
159 |       generateTraceId: () => 'invalid',
160 |       write: () => {
161 |         throw new Error('sink unavailable');
162 |       },
163 |     });
164 |     expect(() => badIdTracer.startSpan(REQUEST_SPAN).end({ status: 'error' })).not.toThrow();
165 |
166 |     const badClockTracer = createTracer({
167 |       service: 'api',
168 |       clock: () => new Date('invalid'),
169 |       generateTraceId: () => TRACE_ID,
170 |       generateSpanId: () => CHILD_SPAN_ID,
171 |       write: () => {
172 |         throw new Error('must be swallowed');
173 |       },
174 |     });
175 |     expect(() => badClockTracer.startSpan(REQUEST_SPAN).end({ status: 'error' })).not.toThrow();
176 |   });
177 | });
178 |
```

### packages/observability/src/tracing.ts

Bytes: 16992
SHA-256: 69f799f92d819267ff81d25e431c3b16cdca8e0c4f17ef6d2c56edcbc60a536f
Lines: 1-509 of 509

```typescript
  1 | import { randomBytes } from 'node:crypto';
  2 |
  3 | export type SpanKind = 'server' | 'client' | 'producer' | 'consumer' | 'internal';
  4 | export type SpanStatus = 'unset' | 'ok' | 'error';
  5 | export type TraceAttributeValue = string | number | boolean;
  6 | export type TraceAttributes = Readonly<Record<string, TraceAttributeValue>>;
  7 |
  8 | export interface TraceAttributeRule {
  9 |   readonly values: readonly TraceAttributeValue[];
 10 |   readonly required?: boolean;
 11 | }
 12 |
 13 | export interface SpanDescriptor {
 14 |   readonly name: string;
 15 |   readonly kind: SpanKind;
 16 |   readonly attributes?: Readonly<Record<string, TraceAttributeRule>>;
 17 | }
 18 |
 19 | export interface TraceContext {
 20 |   readonly traceId: string;
 21 |   readonly spanId: string;
 22 |   readonly traceFlags: string;
 23 |   readonly traceState?: string;
 24 | }
 25 |
 26 | export interface PersistedTraceContext {
 27 |   readonly traceParent: string;
 28 |   readonly traceState?: string;
 29 | }
 30 |
 31 | export interface SpanPoint {
 32 |   readonly telemetry_type: 'span';
 33 |   readonly start_time: string;
 34 |   readonly end_time: string;
 35 |   readonly service: string;
 36 |   readonly environment: string;
 37 |   readonly name: string;
 38 |   readonly kind: SpanKind;
 39 |   readonly trace_id: string;
 40 |   readonly span_id: string;
 41 |   readonly parent_span_id?: string;
 42 |   readonly trace_flags: string;
 43 |   readonly status: SpanStatus;
 44 |   readonly duration_ms: number;
 45 |   readonly attributes: TraceAttributes;
 46 | }
 47 |
 48 | export interface SpanEndOptions {
 49 |   readonly status?: SpanStatus;
 50 |   readonly attributes?: TraceAttributes;
 51 | }
 52 |
 53 | export interface Span {
 54 |   readonly context: TraceContext;
 55 |   end(options?: SpanEndOptions): void;
 56 | }
 57 |
 58 | export interface TracerOptions {
 59 |   readonly service: string;
 60 |   readonly environment?: string;
 61 |   readonly clock?: () => Date;
 62 |   readonly monotonicNow?: () => number;
 63 |   readonly generateTraceId?: () => string;
 64 |   readonly generateSpanId?: () => string;
 65 |   readonly write?: (line: string, point: SpanPoint) => void;
 66 | }
 67 |
 68 | export interface StartSpanOptions {
 69 |   readonly parent?: TraceContext;
 70 |   readonly attributes?: TraceAttributes;
 71 | }
 72 |
 73 | export interface Tracer {
 74 |   startSpan(descriptor: SpanDescriptor, options?: StartSpanOptions): Span;
 75 | }
 76 |
 77 | const MAX_ATTRIBUTES = 12;
 78 | const MAX_ALLOWED_VALUES = 50;
 79 | const MAX_LABEL_LENGTH = 100;
 80 | const MAX_ATTRIBUTE_STRING_LENGTH = 64;
 81 | const MAX_TRACE_STATE_LENGTH = 512;
 82 | const MAX_TRACE_STATE_MEMBERS = 32;
 83 | const SPAN_NAME_PATTERN = /^[a-z][a-z0-9]*(?:[._][a-z0-9]+)*$/;
 84 | const ATTRIBUTE_KEY_PATTERN = /^[a-z][a-z0-9_]*$/;
 85 | const ATTRIBUTE_STRING_PATTERN = /^[A-Za-z0-9/][A-Za-z0-9._:/-]*$/;
 86 | const TRACE_PARENT_PATTERN = /^00-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})$/;
 87 | const TRACE_ID_PATTERN = /^[0-9a-f]{32}$/;
 88 | const SPAN_ID_PATTERN = /^[0-9a-f]{16}$/;
 89 | const TRACE_FLAGS_PATTERN = /^[0-9a-f]{2}$/;
 90 | const TRACE_STATE_KEY_PATTERN = /^[a-z0-9][a-z0-9_*/-]{0,255}(?:@[a-z0-9][a-z0-9_*/-]{0,13})?$/;
 91 | const PROHIBITED_ATTRIBUTE_KEYS = new Set([
 92 |   'authorization',
 93 |   'password',
 94 |   'secret',
 95 |   'token',
 96 |   'cookie',
 97 |   'otp',
 98 |   'phone',
 99 |   'phone_hash',
100 |   'request_id',
101 |   'organization_id',
102 |   'store_id',
103 |   'worker_id',
104 |   'account_id',
105 |   'job_id',
106 |   'event_id',
107 |   'delivery_id',
108 |   'assessment_id',
109 |   'api_key_id',
110 |   'idempotency_key',
111 |   'endpoint',
112 |   'endpoint_url',
113 |   'provider_response',
114 |   'payload',
115 |   'request_body',
116 |   'response_body',
117 | ]);
118 |
119 | export function defineSpan(descriptor: SpanDescriptor): SpanDescriptor {
120 |   validateDescriptor(descriptor);
121 |   const attributes = descriptor.attributes
122 |     ? Object.freeze(
123 |         Object.fromEntries(
124 |           Object.entries(descriptor.attributes).map(([key, rule]) => [
125 |             key,
126 |             Object.freeze({ ...rule, values: Object.freeze([...rule.values]) }),
127 |           ]),
128 |         ),
129 |       )
130 |     : undefined;
131 |   return Object.freeze({
132 |     name: descriptor.name,
133 |     kind: descriptor.kind,
134 |     ...(attributes === undefined ? {} : { attributes }),
135 |   });
136 | }
137 |
138 | export function createTracer(options: TracerOptions): Tracer {
139 |   const service = requiredLabel(options.service, 'service');
140 |   const environment = requiredLabel(options.environment?.trim() || 'development', 'environment');
141 |   const clock = options.clock ?? (() => new Date());
142 |   const monotonicNow = options.monotonicNow ?? (() => Date.now());
143 |   const generateTraceId = options.generateTraceId ?? (() => randomBytes(16).toString('hex'));
144 |   const generateSpanId = options.generateSpanId ?? (() => randomBytes(8).toString('hex'));
145 |   const write = options.write ?? defaultWrite;
146 |
147 |   return {
148 |     startSpan(descriptor, startOptions = {}) {
149 |       try {
150 |         validateDescriptor(descriptor);
151 |         const parent = startOptions.parent;
152 |         if (parent) validateTraceContext(parent);
153 |         const context: TraceContext = Object.freeze({
154 |           traceId:
155 |             parent?.traceId ?? validGeneratedId(generateTraceId(), TRACE_ID_PATTERN, 'trace ID'),
156 |           spanId: validGeneratedId(generateSpanId(), SPAN_ID_PATTERN, 'span ID'),
157 |           traceFlags: parent?.traceFlags ?? '01',
158 |           ...(parent?.traceState === undefined ? {} : { traceState: parent.traceState }),
159 |         });
160 |         const initialAttributes = validateAttributes(
161 |           descriptor,
162 |           startOptions.attributes ?? {},
163 |           false,
164 |         );
165 |         const startedAt = clock();
166 |         const monotonicStartedAt = safeMonotonicNow(monotonicNow);
167 |         let ended = false;
168 |
169 |         return {
170 |           context,
171 |           end(endOptions = {}) {
172 |             if (ended) return;
173 |             ended = true;
174 |             try {
175 |               const endTime = clock();
176 |               if (Number.isNaN(startedAt.getTime()) || Number.isNaN(endTime.getTime())) {
177 |                 throw new Error('Span timestamps must be valid');
178 |               }
179 |               const attributes = validateAttributes(
180 |                 descriptor,
181 |                 { ...initialAttributes, ...(endOptions.attributes ?? {}) },
182 |                 true,
183 |               );
184 |               const point: SpanPoint = Object.freeze({
185 |                 telemetry_type: 'span',
186 |                 start_time: startedAt.toISOString(),
187 |                 end_time: endTime.toISOString(),
188 |                 service,
189 |                 environment,
190 |                 name: descriptor.name,
191 |                 kind: descriptor.kind,
192 |                 trace_id: context.traceId,
193 |                 span_id: context.spanId,
194 |                 ...(parent === undefined ? {} : { parent_span_id: parent.spanId }),
195 |                 trace_flags: context.traceFlags,
196 |                 status: endOptions.status ?? 'unset',
197 |                 duration_ms: safeDuration(monotonicNow, monotonicStartedAt),
198 |                 attributes,
199 |               });
200 |               write(JSON.stringify(point), point);
201 |             } catch {
202 |               // Trace export and serialization failures must never change application behaviour.
203 |             }
204 |           },
205 |         };
206 |       } catch {
207 |         return noOpSpan(startOptions.parent);
208 |       }
209 |     },
210 |   };
211 | }
212 |
213 | export function parseTraceContext(
214 |   traceParent: string | null | undefined,
215 |   traceState?: string | null,
216 | ): TraceContext | null {
217 |   const normalizedParent = traceParent?.trim().toLowerCase();
218 |   if (!normalizedParent) return null;
219 |   const match = TRACE_PARENT_PATTERN.exec(normalizedParent);
220 |   if (!match) return null;
221 |   const traceId = match[1];
222 |   const spanId = match[2];
223 |   const traceFlags = match[3];
224 |   if (!traceId || !spanId || !traceFlags || isAllZero(traceId) || isAllZero(spanId)) return null;
225 |   const normalizedState = normalizeTraceState(traceState);
226 |   if (traceState != null && normalizedState === null) return null;
227 |   return Object.freeze({
228 |     traceId,
229 |     spanId,
230 |     traceFlags,
231 |     ...(normalizedState === null || normalizedState === undefined
232 |       ? {}
233 |       : { traceState: normalizedState }),
234 |   });
235 | }
236 |
237 | export function formatTraceParent(context: TraceContext): string {
238 |   validateTraceContext(context);
239 |   return `00-${context.traceId}-${context.spanId}-${context.traceFlags}`;
240 | }
241 |
242 | export function toPersistedTraceContext(context: TraceContext): PersistedTraceContext {
243 |   return Object.freeze({
244 |     traceParent: formatTraceParent(context),
245 |     ...(context.traceState === undefined ? {} : { traceState: context.traceState }),
246 |   });
247 | }
248 |
249 | export function parsePersistedTraceContext(
250 |   input: PersistedTraceContext | null | undefined,
251 | ): TraceContext | null {
252 |   if (!input) return null;
253 |   return parseTraceContext(input.traceParent, input.traceState);
254 | }
255 |
256 | export type WorkerTraceType =
257 |   'courier_sync' | 'webhook_delivery' | 'verification_delivery' | 'courier_session';
258 | export type WorkerTraceOperation = 'sync' | 'deliver' | 'send' | 'refresh';
259 | export type WorkerTraceOutcome = 'completed' | 'cached' | 'retry_scheduled' | 'failed';
260 | export type ProviderTraceType =
261 |   'courier_api' | 'courier_browser' | 'webhook_http' | 'verification_delivery';
262 | export type ProviderTraceOperation = 'lookup' | 'login' | 'deliver' | 'send';
263 | export type ProviderTraceOutcome = 'success' | 'retryable_failure' | 'permanent_failure';
264 |
265 | const WORKER_OPERATION_SPAN = defineSpan({
266 |   name: 'ozzyl.worker.operation',
267 |   kind: 'consumer',
268 |   attributes: {
269 |     worker_type: {
270 |       values: ['courier_sync', 'webhook_delivery', 'verification_delivery', 'courier_session'],
271 |     },
272 |     operation: { values: ['sync', 'deliver', 'send', 'refresh'] },
273 |     outcome: {
274 |       values: ['completed', 'cached', 'retry_scheduled', 'failed'],
275 |       required: false,
276 |     },
277 |   },
278 | });
279 |
280 | const PROVIDER_OPERATION_SPAN = defineSpan({
281 |   name: 'ozzyl.provider.operation',
282 |   kind: 'client',
283 |   attributes: {
284 |     provider_type: {
285 |       values: ['courier_api', 'courier_browser', 'webhook_http', 'verification_delivery'],
286 |     },
287 |     operation: { values: ['lookup', 'login', 'deliver', 'send'] },
288 |     outcome: {
289 |       values: ['success', 'retryable_failure', 'permanent_failure'],
290 |       required: false,
291 |     },
292 |   },
293 | });
294 |
295 | export function startWorkerOperationSpan(
296 |   tracer: Tracer | undefined,
297 |   input: {
298 |     workerType: WorkerTraceType;
299 |     operation: WorkerTraceOperation;
300 |     parent?: TraceContext;
301 |   },
302 | ): Span {
303 |   if (!tracer) return noOpSpan(input.parent);
304 |   return tracer.startSpan(WORKER_OPERATION_SPAN, {
305 |     ...(input.parent === undefined ? {} : { parent: input.parent }),
306 |     attributes: { worker_type: input.workerType, operation: input.operation },
307 |   });
308 | }
309 |
310 | export function endWorkerOperationSpan(span: Span, outcome: WorkerTraceOutcome): void {
311 |   span.end({
312 |     status: outcome === 'failed' ? 'error' : 'ok',
313 |     attributes: { outcome },
314 |   });
315 | }
316 |
317 | export function startProviderOperationSpan(
318 |   tracer: Tracer | undefined,
319 |   input: {
320 |     providerType: ProviderTraceType;
321 |     operation: ProviderTraceOperation;
322 |     parent?: TraceContext;
323 |   },
324 | ): Span {
325 |   if (!tracer) return noOpSpan(input.parent);
326 |   return tracer.startSpan(PROVIDER_OPERATION_SPAN, {
327 |     ...(input.parent === undefined ? {} : { parent: input.parent }),
328 |     attributes: { provider_type: input.providerType, operation: input.operation },
329 |   });
330 | }
331 |
332 | export function endProviderOperationSpan(span: Span, outcome: ProviderTraceOutcome): void {
333 |   span.end({
334 |     status: outcome === 'success' ? 'ok' : 'error',
335 |     attributes: { outcome },
336 |   });
337 | }
338 |
339 | function validateDescriptor(descriptor: SpanDescriptor): void {
340 |   if (!SPAN_NAME_PATTERN.test(descriptor.name) || descriptor.name.length > 120) {
341 |     throw new Error('Span name must be a bounded lowercase dotted identifier');
342 |   }
343 |   const rules = Object.entries(descriptor.attributes ?? {});
344 |   if (rules.length > MAX_ATTRIBUTES) throw new Error('Span descriptor has too many attributes');
345 |   for (const [key, rule] of rules) {
346 |     validateAttributeKey(key);
347 |     if (rule.values.length === 0 || rule.values.length > MAX_ALLOWED_VALUES) {
348 |       throw new Error(`Span attribute ${key} must define a bounded finite value set`);
349 |     }
350 |     const seen = new Set<string>();
351 |     for (const value of rule.values) {
352 |       validateAttributeValue(value);
353 |       const signature = `${typeof value}:${String(value)}`;
354 |       if (seen.has(signature)) throw new Error(`Span attribute ${key} contains duplicate values`);
355 |       seen.add(signature);
356 |     }
357 |   }
358 | }
359 |
360 | function validateAttributes(
361 |   descriptor: SpanDescriptor,
362 |   attributes: TraceAttributes,
363 |   enforceRequired: boolean,
364 | ): TraceAttributes {
365 |   const rules = descriptor.attributes ?? {};
366 |   const entries = Object.entries(attributes);
367 |   if (entries.length > MAX_ATTRIBUTES) throw new Error('Span has too many attributes');
368 |   if (enforceRequired) {
369 |     for (const [key, rule] of Object.entries(rules)) {
370 |       if (rule.required !== false && !(key in attributes)) {
371 |         throw new Error(`Span attribute ${key} is required`);
372 |       }
373 |     }
374 |   }
375 |
376 |   const normalized: Record<string, TraceAttributeValue> = {};
377 |   for (const [key, value] of entries) {
378 |     validateAttributeKey(key);
379 |     validateAttributeValue(value);
380 |     const rule = rules[key];
381 |     if (!rule) throw new Error(`Span attribute ${key} is not allowed`);
382 |     if (!rule.values.some((allowed) => Object.is(allowed, value))) {
383 |       throw new Error(`Span attribute ${key} value is outside its bounded set`);
384 |     }
385 |     normalized[key] = value;
386 |   }
387 |   return Object.freeze(normalized);
388 | }
389 |
390 | function validateTraceContext(context: TraceContext): void {
391 |   if (!TRACE_ID_PATTERN.test(context.traceId) || isAllZero(context.traceId)) {
392 |     throw new Error('Trace ID is invalid');
393 |   }
394 |   if (!SPAN_ID_PATTERN.test(context.spanId) || isAllZero(context.spanId)) {
395 |     throw new Error('Span ID is invalid');
396 |   }
397 |   if (!TRACE_FLAGS_PATTERN.test(context.traceFlags)) throw new Error('Trace flags are invalid');
398 |   if (context.traceState !== undefined && normalizeTraceState(context.traceState) === null) {
399 |     throw new Error('Trace state is invalid');
400 |   }
401 | }
402 |
403 | function normalizeTraceState(value: string | null | undefined): string | null | undefined {
404 |   if (value == null) return undefined;
405 |   const trimmed = value.trim();
406 |   if (!trimmed || trimmed.length > MAX_TRACE_STATE_LENGTH) return null;
407 |   const members = trimmed.split(',').map((member) => member.trim());
408 |   if (members.length === 0 || members.length > MAX_TRACE_STATE_MEMBERS) return null;
409 |   const keys = new Set<string>();
410 |   for (const member of members) {
411 |     const separator = member.indexOf('=');
412 |     if (separator <= 0 || separator === member.length - 1) return null;
413 |     const key = member.slice(0, separator);
414 |     const memberValue = member.slice(separator + 1);
415 |     if (!TRACE_STATE_KEY_PATTERN.test(key) || keys.has(key)) return null;
416 |     if (memberValue.length > 256 || memberValue.endsWith(' ')) return null;
417 |     for (const character of memberValue) {
418 |       const code = character.charCodeAt(0);
419 |       if (code < 0x20 || code > 0x7e || character === ',' || character === '=') return null;
420 |     }
421 |     keys.add(key);
422 |   }
423 |   return members.join(',');
424 | }
425 |
426 | function validateAttributeKey(key: string): void {
427 |   if (!ATTRIBUTE_KEY_PATTERN.test(key) || key.length > 50 || isProhibitedAttributeKey(key)) {
428 |     throw new Error(`Span attribute ${key} is unsafe or unbounded`);
429 |   }
430 | }
431 |
432 | function validateAttributeValue(value: TraceAttributeValue): void {
433 |   if (typeof value === 'string') {
434 |     if (
435 |       value.length === 0 ||
436 |       value.length > MAX_ATTRIBUTE_STRING_LENGTH ||
437 |       !ATTRIBUTE_STRING_PATTERN.test(value)
438 |     ) {
439 |       throw new Error('Span string attributes must be bounded categorical values');
440 |     }
441 |     return;
442 |   }
443 |   if (typeof value === 'number' && !Number.isFinite(value)) {
444 |     throw new Error('Span numeric attributes must be finite');
445 |   }
446 | }
447 |
448 | function isProhibitedAttributeKey(key: string): boolean {
449 |   const normalized = key.toLowerCase();
450 |   return (
451 |     PROHIBITED_ATTRIBUTE_KEYS.has(normalized) ||
452 |     normalized.endsWith('_id') ||
453 |     normalized.endsWith('_key') ||
454 |     normalized.endsWith('_hash') ||
455 |     normalized.endsWith('_url') ||
456 |     normalized.endsWith('_payload') ||
457 |     normalized.endsWith('_body') ||
458 |     normalized.endsWith('_token') ||
459 |     normalized.endsWith('_secret')
460 |   );
461 | }
462 |
463 | function validGeneratedId(value: string, pattern: RegExp, name: string): string {
464 |   const normalized = value.toLowerCase();
465 |   if (!pattern.test(normalized) || isAllZero(normalized))
466 |     throw new Error(`Generated ${name} is invalid`);
467 |   return normalized;
468 | }
469 |
470 | function requiredLabel(value: string, name: string): string {
471 |   const normalized = value.trim();
472 |   if (!normalized || normalized.length > MAX_LABEL_LENGTH) {
473 |     throw new Error(`${name} must be a bounded non-empty label`);
474 |   }
475 |   return normalized;
476 | }
477 |
478 | function isAllZero(value: string): boolean {
479 |   return /^0+$/.test(value);
480 | }
481 |
482 | function safeMonotonicNow(monotonicNow: () => number): number {
483 |   try {
484 |     const value = monotonicNow();
485 |     return Number.isFinite(value) ? value : 0;
486 |   } catch {
487 |     return 0;
488 |   }
489 | }
490 |
491 | function safeDuration(monotonicNow: () => number, startedAt: number): number {
492 |   return Math.max(0, safeMonotonicNow(monotonicNow) - startedAt);
493 | }
494 |
495 | function noOpSpan(parent?: TraceContext): Span {
496 |   const fallback: TraceContext = Object.freeze(
497 |     parent ?? {
498 |       traceId: '00000000000000000000000000000001',
499 |       spanId: '0000000000000001',
500 |       traceFlags: '00',
501 |     },
502 |   );
503 |   return { context: fallback, end: () => undefined };
504 | }
505 |
506 | function defaultWrite(line: string): void {
507 |   console.info(line);
508 | }
509 |
```

### tracker.yml

Bytes: 21860
SHA-256: baa276c61af2436574c73e8b7faae6f5196ee529fdaf94afe943656ddc2220be
Lines: 1-401 of 401

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
 97 |   - trace_context_accepts_only_strict_w3c_version_zero_nonzero_identifiers
 98 |   - trace_context_is_never_authorization_tenant_or_idempotency_identity
 99 |   - span_attributes_are_descriptor_owned_finite_and_exclude_business_or_sensitive_values
100 |   - durable_trace_context_is_stored_outside_payloads_and_not_archived
101 |   - api_request_ids_are_server_generated_or_bounded_opaque_values
102 |   - api_logs_never_export_raw_urls_query_values_or_dynamic_route_identifiers
103 |   - durable_worker_leases_renew_only_for_the_current_owner_while_unexpired
104 |   - lease_renewal_failure_aborts_active_provider_io
105 |   - final_queue_transitions_drain_the_heartbeat_before_state_change
106 |   - durable_retention_selects_only_old_completed_or_failed_work
107 |   - archive_evidence_is_persisted_and_exactly_validated_before_source_deletion
108 |   - durable_archive_records_exclude_payloads_provider_references_and_secret_material
109 |   - application_runtime_role_cannot_access_archives_or_delete_durable_source_rows
110 |   - durable_replay_and_audit_evidence_survives_source_archival
111 |   - retention_has_no_unattended_scheduler_or_automatic_rehydration
112 |
113 | implemented:
114 |   - typescript_monorepo_and_ci
115 |   - postgresql_schema_and_fourteen_migrations
116 |   - organization_store_membership_and_plan_foundation
117 |   - usage_metering_and_audit_foundation
118 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
119 |   - pure_versioned_explainable_risk_engine
120 |   - canonical_v1_api_and_postgresql_repositories
121 |   - provider_neutral_shared_envelope_encryption_package
122 |   - steadfast_adapter_and_browser_session_worker
123 |   - postgresql_courier_sync_worker
124 |   - verification_and_webhook_libraries
125 |   - durable_postgresql_webhook_outbox_and_event_worker
126 |   - durable_encrypted_postgresql_verification_queue_and_worker
127 |   - tenant_scoped_postgresql_otp_verification_repository
128 |   - woocommerce_shopify_custom_and_native_adapters
129 |   - authenticated_live_merchant_dashboard
130 |   - authenticated_live_platform_admin
131 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
132 |   - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
133 |   - accepted_provider_neutral_production_infrastructure_adrs
134 |   - postgresql_usage_assessment_outcome_and_operation_idempotency_race_hardening
135 |   - postgresql_courier_worker_atomic_claim_and_lease_recovery
136 |   - postgresql_webhook_worker_atomic_claim_and_lease_recovery
137 |   - postgresql_verification_worker_atomic_claim_and_lease_recovery
138 |   - verification_payload_context_phone_hash_and_otp_hash_validation
139 |   - otp_provider_delivery_removed_from_synchronous_api_requests
140 |   - migration_replay_ci_gate
141 |   - webhook_dns_destination_validation
142 |   - postgresql_migration_manifest_and_history_checksum_integrity
143 |   - clean_postgresql_backup_restore_rehearsal
144 |   - restored_schema_data_sequence_history_and_replay_comparison
145 |   - authoritative_api_key_feature_assessment_and_outcome_tenant_scope_revalidation
146 |   - secret_free_tenant_scoped_webhook_and_verification_administration_repositories
147 |   - dashboard_and_platform_admin_repository_isolation_expansion
148 |   - least_privilege_postgresql_runtime_role_policy_grant_cli_and_ci_gate
149 |   - provider_neutral_managed_envelope_v2_with_random_per_record_data_keys
150 |   - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
151 |   - native_multi_store_off_and_deterministic_shadow_rollout_controls
152 |   - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
153 |   - selected_source_post_persist_native_shadow_integration
154 |   - store_scoped_native_shadow_opt_in_and_pilot_reporting
155 |   - tenant_scoped_immutable_native_shadow_attempt_evidence
156 |   - tenant_scoped_durable_work_dead_letter_inspection
157 |   - idempotent_controlled_durable_work_replay
158 |   - immutable_secret_free_durable_work_replay_evidence
159 |   - authenticated_merchant_browser_dead_letter_operations
160 |   - csrf_protected_browser_durable_work_replay
161 |   - synchronous_per_work_item_browser_replay_key_cache
162 |   - provider_neutral_structured_logging_and_recursive_redaction
163 |   - courier_session_courier_sync_event_and_verification_worker_log_integration
164 |   - telemetry_serialization_and_sink_failure_isolation_tests
165 |   - api_request_lifecycle_and_safe_correlation_logging
166 |   - api_unhandled_error_redaction_and_sink_failure_isolation_tests
167 |   - shared_non_overlapping_lease_heartbeat_and_abort_signal
168 |   - courier_webhook_and_verification_owner_checked_lease_renewal
169 |   - provider_io_abort_on_lease_renewal_loss
170 |   - maintenance_only_durable_work_retention_preview_and_archive_cli
171 |   - secret_free_durable_work_archive_evidence
172 |   - transactional_archive_before_delete_with_skip_locked_revalidation
173 |   - runtime_role_archive_table_and_source_delete_denial
174 |   - durable_retention_unit_and_postgresql_integration_tests
175 |   - vendor_neutral_metric_descriptor_and_json_recorder
176 |   - api_request_count_and_duration_metrics
177 |   - private_worker_operation_count_duration_and_claim_failure_metrics
178 |   - finite_cardinality_metric_label_and_sink_failure_tests
179 |   - durable_repository_operation_count_and_duration_metrics
180 |   - courier_browser_webhook_and_verification_provider_call_metrics
181 |   - aggregate_durable_queue_depth_and_oldest_ready_age_gauges
182 |   - configurable_telemetry_only_queue_snapshot_cadence
183 |   - vendor_neutral_w3c_trace_context_parser_formatter_and_json_span_recorder
184 |   - api_server_and_durable_producer_spans
185 |   - courier_webhook_and_verification_durable_trace_context_persistence
186 |   - private_worker_consumer_and_provider_client_spans
187 |   - verification_failure_webhook_trace_continuation
188 |   - finite_span_attribute_and_trace_sink_failure_tests
189 |
190 | verification:
191 |   command: npm run verify
192 |   last_verified: 2026-07-28
193 |   status: local_passed_remote_ci_pending
194 |   results:
195 |     migrations: 14_of_14_with_sha256_manifest
196 |     migration_replay: previous_main_passed_source_ci_pending
197 |     migration_history_integrity: previous_main_passed_source_ci_pending
198 |     clean_restore_rehearsal: previous_main_passed_source_ci_pending
199 |     architecture_boundaries: passed_locally_remote_ci_pending
200 |     typecheck: 20_of_20_passed_locally_remote_ci_pending
201 |     test_tasks: 31_of_31_passed_locally_remote_ci_pending
202 |     source_tests: 180_total
203 |     previous_main_remote_tests: 168_passed
204 |     migration_integrity_tests: 7_of_7_passed
205 |     postgresql_concurrency_tests: 7_of_7_passed
206 |     postgresql_courier_worker_lease_tests: 7_of_7_passed
207 |     postgresql_webhook_worker_lease_tests: 7_of_7_passed
208 |     postgresql_verification_worker_lease_tests: 7_of_7_passed
209 |     verification_payload_validation_tests: 3_of_3_passed
210 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
211 |     postgresql_runtime_role_tests: 8_of_8_passed
212 |     managed_envelope_tests: 11_of_11_passed
213 |     native_shadow_adapter_tests: 10_of_10_passed
214 |     native_shadow_api_tests: 7_of_7_passed
215 |     native_shadow_postgresql_tests: 7_of_7_passed
216 |     native_shadow_browser_tests: 2_of_2_passed
217 |     native_shadow_sdk_tests: 2_of_2_passed
218 |     native_shadow_total_tests: 28_of_28_passed
219 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
220 |     browser_dead_letter_api_tests: 3_of_3_passed
221 |     observability_tests: 18_of_18_passed_locally
222 |     api_observability_tests: 4_of_4_passed
223 |     api_metric_integration_tests: 1_of_1_passed
224 |     worker_metric_integration_tests: 4_of_4_passed
225 |     provider_metric_integration_tests: 4_of_4_passed
226 |     repository_metric_helper_tests: 3_of_3_passed
227 |     queue_snapshot_postgresql_tests: 3_of_3_passed
228 |     api_trace_lineage_tests: 1_of_1_passed_locally
229 |     worker_trace_lineage_integrations: 4_of_4_passed_locally
230 |     durable_trace_context_postgresql_tests: 3_source_tests_ci_pending
231 |     lease_heartbeat_unit_tests: 3_of_3_passed
232 |     provider_abort_on_lease_loss_tests: 3_of_3_passed
233 |     durable_retention_input_tests: 4_of_4_passed
234 |     durable_retention_postgresql_tests: 4_of_4_passed
235 |     builds: 20_of_20_passed_locally_remote_ci_pending
236 |     php_syntax: passed_locally_remote_ci_pending
237 |     high_critical_dependency_check: passed_locally_remote_ci_pending
238 |     moderate_dependency_findings: 5
239 |     documentation_links: 61_reviewed_0_known_broken
240 |   continuation_bundle:
241 |     status: refreshed_locally
242 |     canonical_main_sync: verified_at_642513612e37f11f739d1bc3962c196e05483b09
243 |     local_exporter: completed_after_distributed_trace_context_docs
244 |   remote_ci:
245 |     status: passed
246 |     run_id: 30329769797
247 |     job_id: 90182279338
248 |     job: verify
249 |     tested_head: 027f33a8aa5f4d2676f5b07fd8991fefc1152ed4
250 |     merged_main_commit: 53b882028292a2a6c0a71da19540dba97c95ea9f
251 |     completed: 2026-07-28
252 |     steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_sixty_eight_assertions_twenty_builds_php_all_passed
253 |   source_validation:
254 |     status: local_passed_remote_ci_pending
255 |     branch: feat/distributed-trace-context
256 |     tested_head: pending_feature_commit
257 |     completed: 2026-07-28
258 |     steps: format_lint_fourteen_migration_manifest_architecture_twenty_typechecks_thirty_one_test_tasks_one_hundred_eighty_source_tests_twenty_builds_audit_php_yaml_links_and_secret_scan_passed_locally
259 |     shared_observability_tests: 18_of_18_passed
260 |     api_trace_lineage: passed
261 |     private_worker_trace_lineage_integrations: 4_of_4_passed
262 |     durable_trace_context_postgresql_tests: 3_source_tests_ci_pending
263 |     trace_sink_failure_isolation: passed
264 |   pending_follow_up:
265 |     - provision_retention_maintenance_identity_and_approved_windows_holds_monitoring_recovery
266 |     - observability_exporter_collector_sampling_broader_api_domain_repository_metrics_and_managed_backend
267 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
268 |     - pilot_outcome_collection_and_calibration
269 |
270 | migrations:
271 |   immutable: true
272 |   manifest: packages/database/migrations/manifest.json
273 |   history_checksum_column: checksum_sha256_not_null
274 |   files:
275 |     - packages/database/migrations/0001_foundation.sql
276 |     - packages/database/migrations/0002_courier.sql
277 |     - packages/database/migrations/0003_risk.sql
278 |     - packages/database/migrations/0004_verification_events.sql
279 |     - packages/database/migrations/0005_durable_operations.sql
280 |     - packages/database/migrations/0006_browser_access.sql
281 |     - packages/database/migrations/0007_worker_leases.sql
282 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
283 |     - packages/database/migrations/0009_verification_delivery_queue.sql
284 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
285 |     - packages/database/migrations/0011_native_shadow_pilot.sql
286 |     - packages/database/migrations/0012_durable_work_replays.sql
287 |     - packages/database/migrations/0013_durable_work_archives.sql
288 |     - packages/database/migrations/0014_durable_trace_context.sql
289 |
290 | accepted_adrs:
291 |   - docs/adr/0006-production-deployment-topology.md
292 |   - docs/adr/0007-managed-postgresql-production-baseline.md
293 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
294 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
295 |   - docs/adr/0010-vendor-neutral-production-observability.md
296 |   - docs/adr/0011-selected-source-shadow-pilot.md
297 |   - docs/adr/0012-durable-work-dead-letter-operations.md
298 |
299 | external_dependencies:
300 |   - authorized_steadfast_test_account
301 |   - provider_authorization_review
302 |   - deployment_platform_account_region_and_budget
303 |   - managed_postgresql_provider_and_service_tier
304 |   - managed_secret_store_and_kms_vault_provider
305 |   - observability_backend_and_retention_policy
306 |   - otp_provider_account
307 |   - pilot_outcome_data
308 |
309 | next_milestone:
310 |   name: production-hardening-and-pilot-readiness
311 |   tasks:
312 |     - select_and_provision_accepted_infrastructure_providers
313 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
314 |     - validate_steadfast_with_an_authorized_account
315 |     - implement_the_selected_otp_provider_adapter
316 |     - add_distributed_cache_only_when_replica_coordination_requires_it
317 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
318 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
319 |     - calibrate_decisions_before_broad_automatic_blocking
320 |
321 | release_policy:
322 |   branch: main
323 |   before_push:
324 |     - npm_run_verify_passes
325 |     - documentation_and_tracker_are_current
326 |     - repository_review_is_clean
327 |   rules:
328 |     - no_force_push_to_main
329 |     - do_not_edit_applied_migrations
330 |     - use_descriptive_commits
331 |
332 | notes:
333 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
334 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
335 |   - github_connector_reports_public_visibility_while_expected_state_is_private
336 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
337 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
338 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
339 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
340 |   - webhook_event_payloads_do_not_include_raw_phone_values
341 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
342 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
343 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
344 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
345 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
346 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
347 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
348 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
349 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
350 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
351 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
352 |   - selected_otp_provider_module_and_credentials_remain_external
353 |   - migration_files_are_bound_to_a_committed_sha256_manifest
354 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
355 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
356 |   - migration_execution_uses_one_session_advisory_lock
357 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
358 |   - managed_provider_point_in_time_restore_drill_remains_external
359 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
360 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
361 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
362 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
363 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
364 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
365 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
366 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
367 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
368 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
369 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
370 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
371 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
372 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
373 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
374 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
375 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
376 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
377 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
378 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
379 |   - durable_replay_never_performs_provider_or_webhook_network_io
380 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
381 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
382 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
383 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
384 |   - structured_log_redaction_is_canonicalized_in_packages_observability
385 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
386 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
387 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
388 |   - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
389 |   - lease_renewal_interval_must_not_exceed_half_the_lease
390 |   - heartbeat_renewal_and_final_state_transitions_do_not_overlap
391 |   - durable_retention_cutoff_has_a_twenty_four_hour_minimum_safety_floor
392 |   - durable_retention_batches_are_globally_bounded_to_five_hundred
393 |   - completed_source_retention_baseline_is_thirty_days_pending_approval
394 |   - failed_source_retention_baseline_is_one_hundred_eighty_days_pending_approval
395 |   - archive_evidence_does_not_replace_backup_or_point_in_time_recovery
396 |   - vendor_neutral_metrics_use_only_finite_descriptor_owned_attributes
397 |   - api_metrics_use_method_canonical_route_and_status_class_only
398 |   - worker_metrics_use_worker_type_operation_and_outcome_only
399 |   - pro_context_was_refreshed_after_vendor_neutral_metrics_documentation
400 |   - update_this_file_after_every_material_milestone
401 |
```

### workers/courier-session-worker/src/index.test.ts

Bytes: 4870
SHA-256: a46a6c03cc04be29498bbf99ad3bb8408efa4d39260917a2a372e61d2ce43a84
Lines: 1-138 of 138

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import { createMetricRecorder, createTracer, type SpanPoint } from '@ozzyl/observability';
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
 27 |     const tracePoints: SpanPoint[] = [];
 28 |     const spanIds = ['bbbbbbbbbbbbbbbb', 'cccccccccccccccc'];
 29 |     const ticks = [50, 55, 65, 70];
 30 |     const sampleValue = 'x'.repeat(24);
 31 |     const credentialFixture = ['fixture', 'credential'].join('-');
 32 |     const worker = new CourierSessionWorker({
 33 |       credentials: {
 34 |         load: vi.fn(async () => ({
 35 |           email: 'fixture@example.test',
 36 |           password: credentialFixture,
 37 |         })),
 38 |       },
 39 |       vault: { save: vi.fn(async () => undefined) },
 40 |       health: {
 41 |         markConnected: vi.fn(async () => undefined),
 42 |         markFailure: vi.fn(async () => undefined),
 43 |       },
 44 |       cipher: new AesGcmEnvelopeCipher(Buffer.alloc(32, 8), 'test-v1'),
 45 |       driver: {
 46 |         login: vi.fn(async () => ({
 47 |           sessionCookie: sampleValue,
 48 |           xsrfToken: sampleValue,
 49 |           validatedAt: '2026-07-28T00:00:00.000Z',
 50 |         })),
 51 |       },
 52 |       monotonicNow: () => ticks.shift() ?? 70,
 53 |       metrics: createMetricRecorder({
 54 |         service: 'courier-session-worker-test',
 55 |         environment: 'test',
 56 |         write: (line) => metricLines.push(line),
 57 |       }),
 58 |       tracer: createTracer({
 59 |         service: 'courier-session-worker-test',
 60 |         environment: 'test',
 61 |         clock: () => new Date('2026-07-28T00:00:00.000Z'),
 62 |         monotonicNow: () => 1,
 63 |         generateTraceId: () => '11111111111111111111111111111111',
 64 |         generateSpanId: () => spanIds.shift()!,
 65 |         write: (_line, point) => tracePoints.push(point),
 66 |       }),
 67 |     });
 68 |
 69 |     await expect(worker.refresh('account_sensitive')).resolves.toEqual({ status: 'connected' });
 70 |     expect(metricLines.map(parseMetricLine)).toEqual([
 71 |       expect.objectContaining({
 72 |         name: 'ozzyl.provider.operations',
 73 |         attributes: {
 74 |           provider_type: 'courier_browser',
 75 |           operation: 'login',
 76 |           outcome: 'success',
 77 |         },
 78 |       }),
 79 |       expect.objectContaining({
 80 |         name: 'ozzyl.provider.operation.duration',
 81 |         value: 10,
 82 |         attributes: {
 83 |           provider_type: 'courier_browser',
 84 |           operation: 'login',
 85 |           outcome: 'success',
 86 |         },
 87 |       }),
 88 |       expect.objectContaining({
 89 |         name: 'ozzyl.worker.operations',
 90 |         attributes: {
 91 |           worker_type: 'courier_session',
 92 |           operation: 'refresh',
 93 |           outcome: 'completed',
 94 |         },
 95 |       }),
 96 |       expect.objectContaining({
 97 |         name: 'ozzyl.worker.operation.duration',
 98 |         value: 20,
 99 |         attributes: {
100 |           worker_type: 'courier_session',
101 |           operation: 'refresh',
102 |           outcome: 'completed',
103 |         },
104 |       }),
105 |     ]);
106 |     expect(metricLines.join('\n')).not.toContain('account_sensitive');
107 |     expect(metricLines.join('\n')).not.toContain(credentialFixture);
108 |     expect(metricLines.join('\n')).not.toContain('fixture@example.test');
109 |     expect(tracePoints).toEqual([
110 |       expect.objectContaining({
111 |         name: 'ozzyl.provider.operation',
112 |         trace_id: '11111111111111111111111111111111',
113 |         span_id: 'cccccccccccccccc',
114 |         parent_span_id: 'bbbbbbbbbbbbbbbb',
115 |         attributes: {
116 |           provider_type: 'courier_browser',
117 |           operation: 'login',
118 |           outcome: 'success',
119 |         },
120 |       }),
121 |       expect.objectContaining({
122 |         name: 'ozzyl.worker.operation',
123 |         trace_id: '11111111111111111111111111111111',
124 |         span_id: 'bbbbbbbbbbbbbbbb',
125 |         attributes: {
126 |           worker_type: 'courier_session',
127 |           operation: 'refresh',
128 |           outcome: 'completed',
129 |         },
130 |       }),
131 |     ]);
132 |     expect(tracePoints[1]).not.toHaveProperty('parent_span_id');
133 |     expect(JSON.stringify(tracePoints)).not.toMatch(
134 |       /account_sensitive|fixture@example\.test|fixture-credential/,
135 |     );
136 |   });
137 | });
138 |
```

### workers/courier-session-worker/src/index.ts

Bytes: 8410
SHA-256: e7c29a49ad77b1c1d3f3c2f22db3739fcba81656aaa7a6ae3d16130c6f9b9b12
Lines: 1-252 of 252

```typescript
  1 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  2 | import { chromium } from 'playwright';
  3 | import type { CourierSession } from '@ozzyl/courier-adapters';
  4 | import {
  5 |   endProviderOperationSpan,
  6 |   endWorkerOperationSpan,
  7 |   recordProviderOperation,
  8 |   recordWorkerOperation,
  9 |   startProviderOperationSpan,
 10 |   startWorkerOperationSpan,
 11 |   type MetricRecorder,
 12 |   type TraceContext,
 13 |   type Tracer,
 14 | } from '@ozzyl/observability';
 15 |
 16 | export type SessionFailureCode =
 17 |   | 'INVALID_CREDENTIALS'
 18 |   | 'CAPTCHA_REQUIRED'
 19 |   | 'TWO_FACTOR_REQUIRED'
 20 |   | 'SELECTOR_CHANGED'
 21 |   | 'SESSION_NOT_CREATED'
 22 |   | 'PROVIDER_UNAVAILABLE';
 23 |
 24 | export class SessionDriverError extends Error {
 25 |   constructor(
 26 |     readonly code: SessionFailureCode,
 27 |     message: string,
 28 |     readonly retryable: boolean,
 29 |   ) {
 30 |     super(message);
 31 |   }
 32 | }
 33 |
 34 | export interface SteadfastCredentials {
 35 |   email: string;
 36 |   password: string;
 37 | }
 38 |
 39 | export interface SessionDriverResult extends CourierSession {
 40 |   validatedAt: string;
 41 | }
 42 |
 43 | export interface SessionVault {
 44 |   save(accountId: string, encryptedPayload: string, keyVersion: string): Promise<void>;
 45 | }
 46 |
 47 | export interface CredentialSource {
 48 |   load(accountId: string): Promise<SteadfastCredentials | null>;
 49 | }
 50 |
 51 | export interface AccountHealthStore {
 52 |   markConnected(accountId: string, at: Date): Promise<void>;
 53 |   markFailure(accountId: string, code: SessionFailureCode, at: Date): Promise<void>;
 54 | }
 55 |
 56 | export { AesGcmEnvelopeCipher };
 57 |
 58 | export class SteadfastSessionDriver {
 59 |   async login(credentials: SteadfastCredentials): Promise<SessionDriverResult> {
 60 |     const browser = await chromium.launch({ headless: true });
 61 |     const context = await browser.newContext({
 62 |       userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131 Safari/537.36',
 63 |     });
 64 |     try {
 65 |       const page = await context.newPage();
 66 |       await page.goto('https://steadfast.com.bd/login', {
 67 |         waitUntil: 'domcontentloaded',
 68 |         timeout: 30_000,
 69 |       });
 70 |
 71 |       const captchaVisible = await page
 72 |         .locator('iframe[src*="captcha"], text=/captcha/i')
 73 |         .first()
 74 |         .isVisible()
 75 |         .catch(() => false);
 76 |       if (captchaVisible) {
 77 |         throw new SessionDriverError('CAPTCHA_REQUIRED', 'Steadfast requires CAPTCHA', false);
 78 |       }
 79 |
 80 |       const emailInput = page.locator('input[type="email"], input[name="email"]').first();
 81 |       const passwordInput = page.locator('input[type="password"]').first();
 82 |       if ((await emailInput.count()) === 0 || (await passwordInput.count()) === 0) {
 83 |         throw new SessionDriverError('SELECTOR_CHANGED', 'Steadfast login fields changed', false);
 84 |       }
 85 |
 86 |       await emailInput.fill(credentials.email);
 87 |       await passwordInput.fill(credentials.password);
 88 |       const submit = page.locator('button[type="submit"], button:has-text("Login")').first();
 89 |       if ((await submit.count()) === 0) {
 90 |         throw new SessionDriverError('SELECTOR_CHANGED', 'Steadfast login button changed', false);
 91 |       }
 92 |
 93 |       await Promise.all([
 94 |         page.waitForLoadState('domcontentloaded', { timeout: 20_000 }).catch(() => undefined),
 95 |         submit.click(),
 96 |       ]);
 97 |
 98 |       const bodyText = (
 99 |         await page
100 |           .locator('body')
101 |           .innerText()
102 |           .catch(() => '')
103 |       ).toLowerCase();
104 |       if (bodyText.includes('invalid') && bodyText.includes('password')) {
105 |         throw new SessionDriverError(
106 |           'INVALID_CREDENTIALS',
107 |           'Steadfast rejected credentials',
108 |           false,
109 |         );
110 |       }
111 |       if (bodyText.includes('two-factor') || bodyText.includes('verification code')) {
112 |         throw new SessionDriverError(
113 |           'TWO_FACTOR_REQUIRED',
114 |           'Steadfast requires two-factor login',
115 |           false,
116 |         );
117 |       }
118 |
119 |       const cookies = await context.cookies('https://steadfast.com.bd');
120 |       const sessionCookie = cookies.find((cookie) => cookie.name === 'steadfast_courier_session');
121 |       const xsrfToken = cookies.find((cookie) => cookie.name === 'XSRF-TOKEN');
122 |       if (!sessionCookie?.value || !xsrfToken?.value) {
123 |         throw new SessionDriverError(
124 |           'SESSION_NOT_CREATED',
125 |           'Steadfast did not create a valid session',
126 |           true,
127 |         );
128 |       }
129 |
130 |       return {
131 |         sessionCookie: sessionCookie.value,
132 |         xsrfToken: xsrfToken.value,
133 |         ...(sessionCookie.expires > 0
134 |           ? { expiresAt: new Date(sessionCookie.expires * 1_000).toISOString() }
135 |           : {}),
136 |         validatedAt: new Date().toISOString(),
137 |       };
138 |     } catch (error) {
139 |       if (error instanceof SessionDriverError) throw error;
140 |       throw new SessionDriverError(
141 |         'PROVIDER_UNAVAILABLE',
142 |         'Steadfast login automation failed',
143 |         true,
144 |       );
145 |     } finally {
146 |       await browser.close();
147 |     }
148 |   }
149 | }
150 |
151 | export class CourierSessionWorker {
152 |   constructor(
153 |     private readonly dependencies: {
154 |       credentials: CredentialSource;
155 |       vault: SessionVault;
156 |       health: AccountHealthStore;
157 |       cipher: AesGcmEnvelopeCipher;
158 |       driver: SteadfastSessionDriver;
159 |       metrics?: MetricRecorder;
160 |       tracer?: Tracer;
161 |       monotonicNow?: () => number;
162 |     },
163 |   ) {}
164 |
165 |   async refresh(accountId: string): Promise<{ status: 'connected' }> {
166 |     const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
167 |     const startedAt = monotonicNow();
168 |     const span = startWorkerOperationSpan(this.dependencies.tracer, {
169 |       workerType: 'courier_session',
170 |       operation: 'refresh',
171 |     });
172 |     try {
173 |       const result = await this.refreshSession(accountId, span.context);
174 |       recordWorkerOperation(this.dependencies.metrics, {
175 |         workerType: 'courier_session',
176 |         operation: 'refresh',
177 |         outcome: 'completed',
178 |         durationMs: monotonicNow() - startedAt,
179 |       });
180 |       endWorkerOperationSpan(span, 'completed');
181 |       return result;
182 |     } catch (error) {
183 |       recordWorkerOperation(this.dependencies.metrics, {
184 |         workerType: 'courier_session',
185 |         operation: 'refresh',
186 |         outcome: 'failed',
187 |         durationMs: monotonicNow() - startedAt,
188 |       });
189 |       endWorkerOperationSpan(span, 'failed');
190 |       throw error;
191 |     }
192 |   }
193 |
194 |   private async refreshSession(
195 |     accountId: string,
196 |     traceContext: TraceContext,
197 |   ): Promise<{ status: 'connected' }> {
198 |     const credentials = await this.dependencies.credentials.load(accountId);
199 |     if (!credentials) {
200 |       const error = new SessionDriverError(
201 |         'INVALID_CREDENTIALS',
202 |         'Courier credentials are not configured',
203 |         false,
204 |       );
205 |       await this.dependencies.health.markFailure(accountId, error.code, new Date());
206 |       throw error;
207 |     }
208 |
209 |     try {
210 |       const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
211 |       const providerStartedAt = monotonicNow();
212 |       const providerSpan = startProviderOperationSpan(this.dependencies.tracer, {
213 |         providerType: 'courier_browser',
214 |         operation: 'login',
215 |         parent: traceContext,
216 |       });
217 |       let session: SessionDriverResult;
218 |       try {
219 |         session = await this.dependencies.driver.login(credentials);
220 |         recordProviderOperation(this.dependencies.metrics, {
221 |           providerType: 'courier_browser',
222 |           operation: 'login',
223 |           outcome: 'success',
224 |           durationMs: monotonicNow() - providerStartedAt,
225 |         });
226 |         endProviderOperationSpan(providerSpan, 'success');
227 |       } catch (error) {
228 |         const providerOutcome =
229 |           error instanceof SessionDriverError && !error.retryable
230 |             ? 'permanent_failure'
231 |             : 'retryable_failure';
232 |         recordProviderOperation(this.dependencies.metrics, {
233 |           providerType: 'courier_browser',
234 |           operation: 'login',
235 |           outcome: providerOutcome,
236 |           durationMs: monotonicNow() - providerStartedAt,
237 |         });
238 |         endProviderOperationSpan(providerSpan, providerOutcome);
239 |         throw error;
240 |       }
241 |       const encrypted = this.dependencies.cipher.encrypt(session, `courier-session:${accountId}`);
242 |       await this.dependencies.vault.save(accountId, encrypted, this.dependencies.cipher.keyVersion);
243 |       await this.dependencies.health.markConnected(accountId, new Date());
244 |       return { status: 'connected' };
245 |     } catch (error) {
246 |       const code = error instanceof SessionDriverError ? error.code : 'PROVIDER_UNAVAILABLE';
247 |       await this.dependencies.health.markFailure(accountId, code, new Date());
248 |       throw error;
249 |     }
250 |   }
251 | }
252 |
```

### workers/courier-session-worker/src/runner.ts

Bytes: 5352
SHA-256: d09af4da90f52b6111ab8a40899e3fcf1ba92b9cfccea8bbd5ed7c74b046bf9f
Lines: 1-172 of 172

```typescript
  1 | import { Pool } from 'pg';
  2 | import { createMetricRecorder, createStructuredLogger, createTracer } from '@ozzyl/observability';
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
 32 | const tracer = createTracer({
 33 |   service: 'courier-session-worker',
 34 |   environment: process.env.NODE_ENV ?? 'development',
 35 | });
 36 | let stopping = false;
 37 |
 38 | const worker = new CourierSessionWorker({
 39 |   credentials: {
 40 |     async load(accountId): Promise<SteadfastCredentials | null> {
 41 |       const result = await pool.query<{ encrypted_payload: string }>(
 42 |         'select encrypted_payload from courier_credentials where courier_account_id = $1',
 43 |         [accountId],
 44 |       );
 45 |       const payload = result.rows[0]?.encrypted_payload;
 46 |       return payload
 47 |         ? cipher.decrypt<SteadfastCredentials>(payload, `courier-credential:${accountId}`)
 48 |         : null;
 49 |     },
 50 |   },
 51 |   vault: {
 52 |     async save(accountId, encryptedPayload, keyVersion): Promise<void> {
 53 |       await pool.query(
 54 |         `
 55 |           insert into courier_sessions (
 56 |             courier_account_id, encrypted_payload, encryption_key_version,
 57 |             validated_at, status, expires_at
 58 |           ) values ($1, $2, $3, now(), 'valid', now() + interval '6 hours')
 59 |           on conflict (courier_account_id) do update set
 60 |             encrypted_payload = excluded.encrypted_payload,
 61 |             encryption_key_version = excluded.encryption_key_version,
 62 |             validated_at = now(),
 63 |             status = 'valid',
 64 |             expires_at = excluded.expires_at,
 65 |             updated_at = now()
 66 |         `,
 67 |         [accountId, encryptedPayload, keyVersion],
 68 |       );
 69 |     },
 70 |   },
 71 |   health: {
 72 |     async markConnected(accountId, at): Promise<void> {
 73 |       await pool.query(
 74 |         `
 75 |           update courier_accounts set status = 'connected', last_connected_at = $2,
 76 |             last_success_at = $2, failure_code = null, updated_at = now()
 77 |           where id = $1
 78 |         `,
 79 |         [accountId, at],
 80 |       );
 81 |     },
 82 |     async markFailure(accountId, code: SessionFailureCode, at): Promise<void> {
 83 |       const status = [
 84 |         'INVALID_CREDENTIALS',
 85 |         'CAPTCHA_REQUIRED',
 86 |         'TWO_FACTOR_REQUIRED',
 87 |         'SELECTOR_CHANGED',
 88 |       ].includes(code)
 89 |         ? 'reconnect_required'
 90 |         : 'degraded';
 91 |       await pool.query(
 92 |         `
 93 |           update courier_accounts set status = $2, last_failure_at = $3,
 94 |             failure_code = $4, updated_at = now()
 95 |           where id = $1
 96 |         `,
 97 |         [accountId, status, at, code],
 98 |       );
 99 |     },
100 |   },
101 |   cipher,
102 |   driver: new SteadfastSessionDriver(),
103 |   metrics,
104 |   tracer,
105 | });
106 |
107 | async function tick(): Promise<void> {
108 |   const accounts = await pool.query<{ id: string }>(
109 |     `
110 |       select id from courier_accounts
111 |       where provider = 'steadfast'
112 |         and status <> 'disabled'
113 |         and (
114 |           last_success_at is null
115 |           or last_success_at < now() - ($1::text || ' hours')::interval
116 |           or status in ('pending', 'expired', 'degraded')
117 |         )
118 |       order by coalesce(last_success_at, to_timestamp(0)) asc
119 |       limit 10
120 |     `,
121 |     [String(refreshHours)],
122 |   );
123 |
124 |   for (const account of accounts.rows) {
125 |     if (stopping) return;
126 |     const client = await pool.connect();
127 |     try {
128 |       const lock = await client.query<{ locked: boolean }>(
129 |         'select pg_try_advisory_lock(hashtext($1)) as locked',
130 |         [`courier-session:${account.id}`],
131 |       );
132 |       if (!lock.rows[0]?.locked) continue;
133 |       try {
134 |         await worker.refresh(account.id);
135 |         log.info('courier.session.refreshed', { account_id: account.id });
136 |       } catch (error) {
137 |         const code =
138 |           error && typeof error === 'object' && 'code' in error
139 |             ? String(error.code)
140 |             : 'SESSION_REFRESH_FAILED';
141 |         log.error('courier.session.failed', { account_id: account.id, code });
142 |       } finally {
143 |         await client.query('select pg_advisory_unlock(hashtext($1))', [
144 |           `courier-session:${account.id}`,
145 |         ]);
146 |       }
147 |     } finally {
148 |       client.release();
149 |     }
150 |   }
151 | }
152 |
153 | async function run(): Promise<void> {
154 |   log.info('courier.session.worker.started');
155 |   while (!stopping) {
156 |     try {
157 |       await tick();
158 |     } catch {
159 |       log.error('courier.session.worker.tick_failed');
160 |     }
161 |     if (!stopping) await new Promise((resolve) => setTimeout(resolve, pollMs));
162 |   }
163 |   await pool.end();
164 | }
165 |
166 | const stop = (): void => {
167 |   stopping = true;
168 | };
169 | process.once('SIGTERM', stop);
170 | process.once('SIGINT', stop);
171 | await run();
172 |
```

### workers/courier-sync-worker/src/index.test.ts

Bytes: 9434
SHA-256: 4dcc467bdacbd46a24d783d31f702797e967e41279f5ea48211bc6a3d71c4acd
Lines: 1-300 of 300

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import { createMetricRecorder, createTracer, type SpanPoint } from '@ozzyl/observability';
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
120 |   it('continues a durable trace through the worker and courier provider span', async () => {
121 |     const points: SpanPoint[] = [];
122 |     const spanIds = ['bbbbbbbbbbbbbbbb', 'cccccccccccccccc'];
123 |     const tracer = createTracer({
124 |       service: 'courier-sync-worker-test',
125 |       environment: 'test',
126 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
127 |       monotonicNow: () => 1,
128 |       generateSpanId: () => spanIds.shift()!,
129 |       write: (_line, point) => points.push(point),
130 |     });
131 |     const observation = {
132 |       provider: 'steadfast' as const,
133 |       totalOrders: 1,
134 |       deliveredOrders: 1,
135 |       returnedOrders: 0,
136 |       cancelledBeforeShipping: 0,
137 |       successRate: 1,
138 |       confidence: 0.8,
139 |       source: 'merchant_session' as const,
140 |       observedAt: '2026-07-28T00:00:00.000Z',
141 |       expiresAt: '2026-07-28T01:00:00.000Z',
142 |     };
143 |     const worker = new CourierSyncWorker({
144 |       adapters: new Map([
145 |         [
146 |           'steadfast',
147 |           {
148 |             provider: 'steadfast' as const,
149 |             testConnection: vi.fn(async () => ({
150 |               healthy: true,
151 |               status: 'connected' as const,
152 |               checkedAt: '2026-07-28T00:00:00.000Z',
153 |             })),
154 |             fetchCustomerObservation: vi.fn(async () => observation),
155 |           },
156 |         ],
157 |       ]),
158 |       observations: {
159 |         findFresh: vi.fn(async () => null),
160 |         save: vi.fn(async () => undefined),
161 |       },
162 |       health: {
163 |         started: vi.fn(async () => undefined),
164 |         completed: vi.fn(async () => undefined),
165 |         failed: vi.fn(async () => undefined),
166 |       },
167 |       tracer,
168 |     });
169 |     const traceId = '11111111111111111111111111111111';
170 |
171 |     await worker.sync({
172 |       jobId: 'cjob_sensitive',
173 |       storeId: 'store_sensitive',
174 |       courierAccountId: 'account_sensitive',
175 |       provider: 'steadfast',
176 |       phone: '01700000000',
177 |       phoneHash: 'hash_sensitive',
178 |       force: true,
179 |       traceContext: {
180 |         traceId,
181 |         spanId: 'aaaaaaaaaaaaaaaa',
182 |         traceFlags: '01',
183 |       },
184 |     });
185 |
186 |     expect(points).toEqual([
187 |       expect.objectContaining({
188 |         name: 'ozzyl.provider.operation',
189 |         trace_id: traceId,
190 |         span_id: 'cccccccccccccccc',
191 |         parent_span_id: 'bbbbbbbbbbbbbbbb',
192 |         attributes: {
193 |           provider_type: 'courier_api',
194 |           operation: 'lookup',
195 |           outcome: 'success',
196 |         },
197 |       }),
198 |       expect.objectContaining({
199 |         name: 'ozzyl.worker.operation',
200 |         trace_id: traceId,
201 |         span_id: 'bbbbbbbbbbbbbbbb',
202 |         parent_span_id: 'aaaaaaaaaaaaaaaa',
203 |         attributes: {
204 |           worker_type: 'courier_sync',
205 |           operation: 'sync',
206 |           outcome: 'completed',
207 |         },
208 |       }),
209 |     ]);
210 |     expect(JSON.stringify(points)).not.toMatch(/sensitive|01700000000/);
211 |   });
212 |
213 |   it('records courier provider success and retryable failure without identifiers', async () => {
214 |     const observation = {
215 |       provider: 'steadfast' as const,
216 |       totalOrders: 1,
217 |       deliveredOrders: 1,
218 |       returnedOrders: 0,
219 |       cancelledBeforeShipping: 0,
220 |       successRate: 1,
221 |       confidence: 0.8,
222 |       source: 'merchant_session' as const,
223 |       observedAt: '2026-07-28T00:00:00.000Z',
224 |       expiresAt: '2026-07-28T01:00:00.000Z',
225 |     };
226 |     const metricLines: string[] = [];
227 |     const ticks = [10, 12, 20, 30, 40, 42, 50, 60];
228 |     const adapter = {
229 |       provider: 'steadfast' as const,
230 |       testConnection: vi.fn(async () => ({
231 |         healthy: true,
232 |         status: 'connected' as const,
233 |         checkedAt: '2026-07-28T00:00:00.000Z',
234 |       })),
235 |       fetchCustomerObservation: vi
236 |         .fn()
237 |         .mockResolvedValueOnce(observation)
238 |         .mockRejectedValueOnce(Object.assign(new Error('temporary outage'), { retryable: true })),
239 |     };
240 |     const health = {
241 |       started: vi.fn(async () => undefined),
242 |       completed: vi.fn(async () => undefined),
243 |       failed: vi.fn(async () => undefined),
244 |     };
245 |     const worker = new CourierSyncWorker({
246 |       adapters: new Map([['steadfast', adapter]]),
247 |       observations: {
248 |         findFresh: vi.fn(async () => null),
249 |         save: vi.fn(async () => undefined),
250 |       },
251 |       health,
252 |       monotonicNow: () => ticks.shift() ?? 60,
253 |       metrics: createMetricRecorder({
254 |         service: 'courier-sync-worker-test',
255 |         environment: 'test',
256 |         write: (line) => metricLines.push(line),
257 |       }),
258 |     });
259 |     const input = {
260 |       jobId: 'cjob_sensitive',
261 |       storeId: 'store_sensitive',
262 |       courierAccountId: 'account_sensitive',
263 |       provider: 'steadfast',
264 |       phone: '01700000000',
265 |       phoneHash: 'hash_sensitive',
266 |       force: true,
267 |     };
268 |
269 |     await expect(worker.sync(input)).resolves.toMatchObject({ cached: false });
270 |     await expect(worker.sync(input)).rejects.toThrow('temporary outage');
271 |
272 |     const providerPoints = metricLines
273 |       .map(parseMetricLine)
274 |       .filter(
275 |         (point): point is { name: string; attributes: Record<string, unknown> } =>
276 |           typeof point === 'object' && point !== null && 'name' in point && 'attributes' in point,
277 |       )
278 |       .filter((point) => point.name === 'ozzyl.provider.operations');
279 |     expect(providerPoints).toEqual([
280 |       expect.objectContaining({
281 |         attributes: {
282 |           provider_type: 'courier_api',
283 |           operation: 'lookup',
284 |           outcome: 'success',
285 |         },
286 |       }),
287 |       expect.objectContaining({
288 |         attributes: {
289 |           provider_type: 'courier_api',
290 |           operation: 'lookup',
291 |           outcome: 'retryable_failure',
292 |         },
293 |       }),
294 |     ]);
295 |     expect(metricLines.join('\n')).not.toContain('sensitive');
296 |     expect(metricLines.join('\n')).not.toContain('01700000000');
297 |     expect(metricLines.join('\n')).not.toContain('temporary outage');
298 |   });
299 | });
300 |
```

### workers/courier-sync-worker/src/index.ts

Bytes: 6582
SHA-256: 038265520ca5b1ca1593b52b56f9b75a32005b2d3c8d354fd57a60a1f871c6a1
Lines: 1-195 of 195

```typescript
  1 | import type { CourierAdapter, CourierObservation } from '@ozzyl/courier-adapters';
  2 | import {
  3 |   endProviderOperationSpan,
  4 |   endWorkerOperationSpan,
  5 |   recordProviderOperation,
  6 |   recordWorkerOperation,
  7 |   startProviderOperationSpan,
  8 |   startWorkerOperationSpan,
  9 |   type MetricRecorder,
 10 |   type TraceContext,
 11 |   type Tracer,
 12 | } from '@ozzyl/observability';
 13 |
 14 | export interface ObservationRepository {
 15 |   findFresh(input: {
 16 |     storeId: string;
 17 |     provider: string;
 18 |     phoneHash: string;
 19 |     at: Date;
 20 |   }): Promise<CourierObservation | null>;
 21 |   save(input: {
 22 |     storeId: string;
 23 |     phoneHash: string;
 24 |     observation: CourierObservation;
 25 |   }): Promise<void>;
 26 | }
 27 |
 28 | export interface SyncJobHealth {
 29 |   started(jobId: string, at: Date): Promise<void>;
 30 |   completed(jobId: string, at: Date): Promise<void>;
 31 |   failed(jobId: string, code: string, retryable: boolean, at: Date): Promise<void>;
 32 | }
 33 |
 34 | export interface CourierSyncInput {
 35 |   jobId: string;
 36 |   storeId: string;
 37 |   courierAccountId: string;
 38 |   provider: string;
 39 |   phone: string;
 40 |   phoneHash: string;
 41 |   force?: boolean;
 42 |   signal?: AbortSignal;
 43 |   traceContext?: TraceContext;
 44 | }
 45 |
 46 | export interface CourierSyncResult {
 47 |   observation: CourierObservation;
 48 |   cached: boolean;
 49 | }
 50 |
 51 | export class CourierSyncWorker {
 52 |   constructor(
 53 |     private readonly dependencies: {
 54 |       adapters: Map<string, CourierAdapter>;
 55 |       observations: ObservationRepository;
 56 |       health: SyncJobHealth;
 57 |       metrics?: MetricRecorder;
 58 |       tracer?: Tracer;
 59 |       monotonicNow?: () => number;
 60 |     },
 61 |   ) {}
 62 |
 63 |   async sync(input: CourierSyncInput): Promise<CourierSyncResult> {
 64 |     const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
 65 |     const startedAt = monotonicNow();
 66 |     const span = startWorkerOperationSpan(this.dependencies.tracer, {
 67 |       workerType: 'courier_sync',
 68 |       operation: 'sync',
 69 |       ...(input.traceContext === undefined ? {} : { parent: input.traceContext }),
 70 |     });
 71 |     try {
 72 |       const result = await this.syncJob(input, span.context);
 73 |       const outcome = result.cached ? 'cached' : 'completed';
 74 |       recordWorkerOperation(this.dependencies.metrics, {
 75 |         workerType: 'courier_sync',
 76 |         operation: 'sync',
 77 |         outcome,
 78 |         durationMs: monotonicNow() - startedAt,
 79 |       });
 80 |       endWorkerOperationSpan(span, outcome);
 81 |       return result;
 82 |     } catch (error) {
 83 |       recordWorkerOperation(this.dependencies.metrics, {
 84 |         workerType: 'courier_sync',
 85 |         operation: 'sync',
 86 |         outcome: 'failed',
 87 |         durationMs: monotonicNow() - startedAt,
 88 |       });
 89 |       endWorkerOperationSpan(span, 'failed');
 90 |       throw error;
 91 |     }
 92 |   }
 93 |
 94 |   private async syncJob(
 95 |     input: CourierSyncInput,
 96 |     traceContext: TraceContext,
 97 |   ): Promise<CourierSyncResult> {
 98 |     await this.dependencies.health.started(input.jobId, new Date());
 99 |     try {
100 |       if (!input.force) {
101 |         const cached = await this.dependencies.observations.findFresh({
102 |           storeId: input.storeId,
103 |           provider: input.provider,
104 |           phoneHash: input.phoneHash,
105 |           at: new Date(),
106 |         });
107 |         if (cached) {
108 |           await this.dependencies.health.completed(input.jobId, new Date());
109 |           return { observation: cached, cached: true };
110 |         }
111 |       }
112 |
113 |       const adapter = this.dependencies.adapters.get(input.provider);
114 |       if (!adapter) throw new Error(`Courier adapter ${input.provider} is not registered`);
115 |       const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
116 |       const providerStartedAt = monotonicNow();
117 |       const providerSpan = startProviderOperationSpan(this.dependencies.tracer, {
118 |         providerType: 'courier_api',
119 |         operation: 'lookup',
120 |         parent: traceContext,
121 |       });
122 |       let observation: CourierObservation;
123 |       try {
124 |         observation = await adapter.fetchCustomerObservation({
125 |           accountId: input.courierAccountId,
126 |           phone: input.phone,
127 |           ...(input.signal === undefined ? {} : { signal: input.signal }),
128 |         });
129 |         recordProviderOperation(this.dependencies.metrics, {
130 |           providerType: 'courier_api',
131 |           operation: 'lookup',
132 |           outcome: 'success',
133 |           durationMs: monotonicNow() - providerStartedAt,
134 |         });
135 |         endProviderOperationSpan(providerSpan, 'success');
136 |       } catch (error) {
137 |         const providerError = error as { retryable?: unknown };
138 |         const providerOutcome =
139 |           providerError.retryable === true ? 'retryable_failure' : 'permanent_failure';
140 |         recordProviderOperation(this.dependencies.metrics, {
141 |           providerType: 'courier_api',
142 |           operation: 'lookup',
143 |           outcome: providerOutcome,
144 |           durationMs: monotonicNow() - providerStartedAt,
145 |         });
146 |         endProviderOperationSpan(providerSpan, providerOutcome);
147 |         throw error;
148 |       }
149 |       await this.dependencies.observations.save({
150 |         storeId: input.storeId,
151 |         phoneHash: input.phoneHash,
152 |         observation,
153 |       });
154 |       await this.dependencies.health.completed(input.jobId, new Date());
155 |       return { observation, cached: false };
156 |     } catch (error) {
157 |       const providerError = error as { code?: unknown; retryable?: unknown };
158 |       const code = typeof providerError.code === 'string' ? providerError.code : 'SYNC_FAILED';
159 |       const retryable = providerError.retryable === true;
160 |       await this.dependencies.health.failed(input.jobId, code, retryable, new Date());
161 |       throw error;
162 |     }
163 |   }
164 | }
165 |
166 | export function toRiskCourierFeatures(observations: CourierObservation[]) {
167 |   if (observations.length === 0) {
168 |     return {
169 |       totalOrders: 0,
170 |       deliveredOrders: 0,
171 |       returnedOrders: 0,
172 |       cancelledBeforeShipping: 0,
173 |       providerCount: 0,
174 |       freshness: 'missing' as const,
175 |       sourceConfidence: 0,
176 |     };
177 |   }
178 |
179 |   const now = Date.now();
180 |   const fresh = observations.every((observation) => Date.parse(observation.expiresAt) > now);
181 |   return {
182 |     totalOrders: observations.reduce((sum, value) => sum + value.totalOrders, 0),
183 |     deliveredOrders: observations.reduce((sum, value) => sum + value.deliveredOrders, 0),
184 |     returnedOrders: observations.reduce((sum, value) => sum + value.returnedOrders, 0),
185 |     cancelledBeforeShipping: observations.reduce(
186 |       (sum, value) => sum + value.cancelledBeforeShipping,
187 |       0,
188 |     ),
189 |     providerCount: new Set(observations.map((observation) => observation.provider)).size,
190 |     freshness: fresh ? ('fresh' as const) : ('stale' as const),
191 |     sourceConfidence:
192 |       observations.reduce((sum, value) => sum + value.confidence, 0) / observations.length,
193 |   };
194 | }
195 |
```

### workers/courier-sync-worker/src/postgres.ts

Bytes: 8746
SHA-256: 7c023a873b826add71e887672f4eec67a44b9029964ca55e7901ebd95eda9f47
Lines: 1-278 of 278

```typescript
  1 | import type { Pool } from 'pg';
  2 | import type { DurableQueueSnapshot, PersistedTraceContext } from '@ozzyl/observability';
  3 |
  4 | export interface ClaimedCourierJob {
  5 |   id: string;
  6 |   courierAccountId: string;
  7 |   organizationId: string;
  8 |   storeId: string;
  9 |   provider: string;
 10 |   payload: unknown;
 11 |   traceContext?: PersistedTraceContext;
 12 | }
 13 |
 14 | export class CourierJobLeaseError extends Error {
 15 |   readonly code = 'COURIER_JOB_LEASE_LOST';
 16 |
 17 |   constructor(message = 'Courier job lease is no longer owned by this worker') {
 18 |     super(message);
 19 |     this.name = 'CourierJobLeaseError';
 20 |   }
 21 | }
 22 |
 23 | export class PostgresCourierJobQueue {
 24 |   private readonly leaseMs: number;
 25 |   private readonly maxAttempts: number;
 26 |
 27 |   constructor(
 28 |     private readonly pool: Pool,
 29 |     options: { leaseMs?: number; maxAttempts?: number } = {},
 30 |   ) {
 31 |     this.leaseMs = options.leaseMs ?? 5 * 60_000;
 32 |     this.maxAttempts = options.maxAttempts ?? 5;
 33 |   }
 34 |
 35 |   async claim(workerId: string, at = new Date()): Promise<ClaimedCourierJob | null> {
 36 |     const client = await this.pool.connect();
 37 |     const leaseExpiresAt = this.leaseUntil(at);
 38 |     try {
 39 |       await client.query('begin');
 40 |       await client.query(
 41 |         `
 42 |           update courier_jobs
 43 |           set status = 'failed',
 44 |             completed_at = $1,
 45 |             error_code = coalesce(error_code, 'LEASE_EXPIRED'),
 46 |             claimed_by = null,
 47 |             claimed_at = null,
 48 |             lease_expires_at = null,
 49 |             updated_at = now()
 50 |           where job_type = 'customer_observation_refresh'
 51 |             and status in ('claimed', 'processing')
 52 |             and (lease_expires_at is null or lease_expires_at <= $1)
 53 |             and attempts >= $2
 54 |         `,
 55 |         [at, this.maxAttempts],
 56 |       );
 57 |       const result = await client.query<{
 58 |         id: string;
 59 |         courier_account_id: string;
 60 |         organization_id: string;
 61 |         store_id: string;
 62 |         provider: string;
 63 |         payload: unknown;
 64 |         trace_parent: string | null;
 65 |         trace_state: string | null;
 66 |       }>(
 67 |         `
 68 |           with candidate as (
 69 |             select cj.id
 70 |             from courier_jobs cj
 71 |             where cj.job_type = 'customer_observation_refresh'
 72 |               and cj.attempts < $4
 73 |               and (
 74 |                 (cj.status = 'queued' and cj.scheduled_at <= $2)
 75 |                 or (
 76 |                   cj.status in ('claimed', 'processing')
 77 |                   and (cj.lease_expires_at is null or cj.lease_expires_at <= $2)
 78 |                 )
 79 |               )
 80 |             order by
 81 |               case when cj.status in ('claimed', 'processing') then 0 else 1 end,
 82 |               coalesce(cj.lease_expires_at, cj.scheduled_at) asc,
 83 |               cj.scheduled_at asc,
 84 |               cj.id asc
 85 |             for update skip locked
 86 |             limit 1
 87 |           ), claimed as (
 88 |             update courier_jobs cj
 89 |             set status = 'claimed',
 90 |               claimed_by = $1,
 91 |               claimed_at = $2,
 92 |               lease_expires_at = $3,
 93 |               started_at = null,
 94 |               completed_at = null,
 95 |               updated_at = now()
 96 |             from candidate
 97 |             where cj.id = candidate.id
 98 |             returning cj.id, cj.courier_account_id, cj.payload, cj.trace_parent, cj.trace_state
 99 |           )
100 |           select
101 |             claimed.id,
102 |             claimed.courier_account_id,
103 |             stores.organization_id,
104 |             courier_accounts.store_id,
105 |             courier_accounts.provider,
106 |             claimed.payload,
107 |             claimed.trace_parent,
108 |             claimed.trace_state
109 |           from claimed
110 |           join courier_accounts on courier_accounts.id = claimed.courier_account_id
111 |           join stores on stores.id = courier_accounts.store_id
112 |         `,
113 |         [workerId, at, leaseExpiresAt, this.maxAttempts],
114 |       );
115 |       await client.query('commit');
116 |       const row = result.rows[0];
117 |       return row
118 |         ? {
119 |             id: row.id,
120 |             courierAccountId: row.courier_account_id,
121 |             organizationId: row.organization_id,
122 |             storeId: row.store_id,
123 |             provider: row.provider,
124 |             payload: row.payload,
125 |             ...(row.trace_parent === null
126 |               ? {}
127 |               : {
128 |                   traceContext: {
129 |                     traceParent: row.trace_parent,
130 |                     ...(row.trace_state === null ? {} : { traceState: row.trace_state }),
131 |                   },
132 |                 }),
133 |           }
134 |         : null;
135 |     } catch (error) {
136 |       await client.query('rollback').catch(() => undefined);
137 |       throw error;
138 |     } finally {
139 |       client.release();
140 |     }
141 |   }
142 |
143 |   async started(jobId: string, workerId: string, at = new Date()): Promise<void> {
144 |     const result = await this.pool.query(
145 |       `
146 |         update courier_jobs
147 |         set status = 'processing',
148 |           started_at = $3,
149 |           attempts = attempts + 1,
150 |           lease_expires_at = $4,
151 |           updated_at = now()
152 |         where id = $1
153 |           and claimed_by = $2
154 |           and status = 'claimed'
155 |           and lease_expires_at > $3
156 |       `,
157 |       [jobId, workerId, at, this.leaseUntil(at)],
158 |     );
159 |     this.assertOwned(result.rowCount);
160 |   }
161 |
162 |   async renew(jobId: string, workerId: string, at = new Date()): Promise<void> {
163 |     const result = await this.pool.query(
164 |       `
165 |         update courier_jobs
166 |         set lease_expires_at = $3, updated_at = now()
167 |         where id = $1
168 |           and claimed_by = $2
169 |           and status in ('claimed', 'processing')
170 |           and lease_expires_at > $4
171 |       `,
172 |       [jobId, workerId, this.leaseUntil(at), at],
173 |     );
174 |     this.assertOwned(result.rowCount);
175 |   }
176 |
177 |   async completed(jobId: string, workerId: string, at = new Date()): Promise<void> {
178 |     const result = await this.pool.query(
179 |       `
180 |         update courier_jobs
181 |         set status = 'completed',
182 |           completed_at = $3,
183 |           error_code = null,
184 |           claimed_by = null,
185 |           claimed_at = null,
186 |           lease_expires_at = null,
187 |           updated_at = now()
188 |         where id = $1
189 |           and claimed_by = $2
190 |           and status = 'processing'
191 |           and lease_expires_at > $3
192 |       `,
193 |       [jobId, workerId, at],
194 |     );
195 |     this.assertOwned(result.rowCount);
196 |   }
197 |
198 |   async failed(
199 |     jobId: string,
200 |     workerId: string,
201 |     code: string,
202 |     retryable: boolean,
203 |     at = new Date(),
204 |   ): Promise<void> {
205 |     const result = await this.pool.query(
206 |       `
207 |         update courier_jobs
208 |         set status = case when $4 and attempts < $6 then 'queued' else 'failed' end,
209 |           scheduled_at = case
210 |             when $4 and attempts < $6
211 |               then $5::timestamptz + (least(3600, power(2, greatest(attempts, 1)) * 30)::text || ' seconds')::interval
212 |             else scheduled_at
213 |           end,
214 |           completed_at = case when $4 and attempts < $6 then null else $5 end,
215 |           error_code = $3,
216 |           claimed_by = null,
217 |           claimed_at = null,
218 |           lease_expires_at = null,
219 |           updated_at = now()
220 |         where id = $1
221 |           and claimed_by = $2
222 |           and status in ('claimed', 'processing')
223 |           and lease_expires_at > $5
224 |       `,
225 |       [jobId, workerId, code, retryable, at, this.maxAttempts],
226 |     );
227 |     this.assertOwned(result.rowCount);
228 |   }
229 |
230 |   async snapshot(at = new Date()): Promise<DurableQueueSnapshot> {
231 |     const result = await this.pool.query<{
232 |       queued: number;
233 |       retry_scheduled: number;
234 |       claimed: number;
235 |       processing: number;
236 |       failed: number;
237 |       oldest_ready_age_ms: number;
238 |     }>(
239 |       `
240 |         select
241 |           count(*) filter (where status = 'queued')::int as queued,
242 |           0::int as retry_scheduled,
243 |           count(*) filter (where status = 'claimed')::int as claimed,
244 |           count(*) filter (where status = 'processing')::int as processing,
245 |           count(*) filter (where status = 'failed')::int as failed,
246 |           coalesce(
247 |             extract(epoch from ($1 - min(scheduled_at) filter (
248 |               where status = 'queued' and scheduled_at <= $1
249 |             ))) * 1000,
250 |             0
251 |           )::double precision as oldest_ready_age_ms
252 |         from courier_jobs
253 |         where job_type = 'customer_observation_refresh'
254 |       `,
255 |       [at],
256 |     );
257 |     const row = result.rows[0];
258 |     return {
259 |       depths: {
260 |         queued: row?.queued ?? 0,
261 |         retry_scheduled: row?.retry_scheduled ?? 0,
262 |         claimed: row?.claimed ?? 0,
263 |         processing: row?.processing ?? 0,
264 |         failed: row?.failed ?? 0,
265 |       },
266 |       oldestReadyAgeMs: Math.max(0, Number(row?.oldest_ready_age_ms ?? 0)),
267 |     };
268 |   }
269 |
270 |   private leaseUntil(at: Date): Date {
271 |     return new Date(at.getTime() + this.leaseMs);
272 |   }
273 |
274 |   private assertOwned(rowCount: number | null): void {
275 |     if (rowCount !== 1) throw new CourierJobLeaseError();
276 |   }
277 | }
278 |
```

### workers/courier-sync-worker/src/runner.ts

Bytes: 10455
SHA-256: 0a01a7a79cad7fedab86c277de1a080499cebd8b22abd2f97531a4e93576001b
Lines: 1-297 of 297

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
 13 |   createTracer,
 14 |   observeRepositoryOperation,
 15 |   parsePersistedTraceContext,
 16 |   recordDurableQueueSnapshot,
 17 |   recordWorkerClaimFailure,
 18 |   type RepositoryMetricOperation,
 19 | } from '@ozzyl/observability';
 20 | import { CourierSyncWorker } from './index.js';
 21 | import { PostgresCourierJobQueue, type ClaimedCourierJob } from './postgres.js';
 22 |
 23 | const required = (name: string): string => {
 24 |   const value = process.env[name];
 25 |   if (!value) throw new Error(`${name} is required`);
 26 |   return value;
 27 | };
 28 |
 29 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 30 | const cipher = new AesGcmEnvelopeCipher(
 31 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 32 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 33 | );
 34 | const pollMs = Number(process.env.WORKER_POLL_MS ?? 5_000);
 35 | const queueMetricsMs = Number(process.env.WORKER_QUEUE_METRICS_MS ?? 30_000);
 36 | const leaseMs = Number(process.env.WORKER_LEASE_MS ?? 5 * 60_000);
 37 | const leaseRenewMs = Number(process.env.WORKER_LEASE_RENEW_MS ?? Math.floor(leaseMs / 3));
 38 | if (!Number.isSafeInteger(queueMetricsMs) || queueMetricsMs <= 0) {
 39 |   throw new Error('WORKER_QUEUE_METRICS_MS must be a positive integer');
 40 | }
 41 | if (!Number.isSafeInteger(leaseRenewMs) || leaseRenewMs <= 0 || leaseRenewMs * 2 > leaseMs) {
 42 |   throw new Error(
 43 |     'WORKER_LEASE_RENEW_MS must be a positive integer no greater than half the lease',
 44 |   );
 45 | }
 46 | const workerId = process.env.WORKER_ID ?? `courier-sync-${randomUUID()}`;
 47 | const log = createStructuredLogger({
 48 |   service: 'courier-sync-worker',
 49 |   environment: process.env.NODE_ENV ?? 'development',
 50 | });
 51 | const metrics = createMetricRecorder({
 52 |   service: 'courier-sync-worker',
 53 |   environment: process.env.NODE_ENV ?? 'development',
 54 | });
 55 | const tracer = createTracer({
 56 |   service: 'courier-sync-worker',
 57 |   environment: process.env.NODE_ENV ?? 'development',
 58 | });
 59 | const jobs = new PostgresCourierJobQueue(pool, { leaseMs });
 60 | let stopping = false;
 61 | let activeHeartbeat: LeaseHeartbeat | null = null;
 62 | let nextQueueMetricsAt = 0;
 63 |
 64 | const observeQueue = <T>(
 65 |   operation: RepositoryMetricOperation,
 66 |   task: () => Promise<T>,
 67 |   isEmpty?: (value: T) => boolean,
 68 | ): Promise<T> =>
 69 |   observeRepositoryOperation(
 70 |     metrics,
 71 |     {
 72 |       repositoryType: 'courier_queue',
 73 |       operation,
 74 |       ...(isEmpty === undefined ? {} : { isEmpty }),
 75 |     },
 76 |     task,
 77 |   );
 78 |
 79 | async function recordQueueMetricsIfDue(): Promise<void> {
 80 |   const now = Date.now();
 81 |   if (now < nextQueueMetricsAt) return;
 82 |   nextQueueMetricsAt = now + queueMetricsMs;
 83 |   const snapshot = await observeQueue('snapshot', () => jobs.snapshot(new Date(now)));
 84 |   recordDurableQueueSnapshot(metrics, 'courier_refresh', snapshot);
 85 | }
 86 |
 87 | const steadfast = new SteadfastAdapter({
 88 |   sessionProvider: {
 89 |     async getSession(accountId): Promise<CourierSession | null> {
 90 |       const result = await pool.query<{ encrypted_payload: string; expires_at: Date | null }>(
 91 |         `select encrypted_payload, expires_at from courier_sessions where courier_account_id = $1 and status = 'valid'`,
 92 |         [accountId],
 93 |       );
 94 |       const row = result.rows[0];
 95 |       if (!row) return null;
 96 |       const session = cipher.decrypt<CourierSession>(
 97 |         row.encrypted_payload,
 98 |         `courier-session:${accountId}`,
 99 |       );
100 |       return { ...session, ...(row.expires_at ? { expiresAt: row.expires_at.toISOString() } : {}) };
101 |     },
102 |   },
103 | });
104 |
105 | const syncWorker = new CourierSyncWorker({
106 |   adapters: new Map([['steadfast', steadfast]]),
107 |   observations: {
108 |     async findFresh(input): Promise<CourierObservation | null> {
109 |       const result = await pool.query<ObservationRow>(
110 |         `
111 |           select provider, total_orders, delivered_orders, returned_orders,
112 |             cancelled_before_shipping, success_rate, confidence, source_type,
113 |             observed_at, expires_at
114 |           from courier_observations
115 |           where store_id = $1 and provider = $2 and phone_hash = $3 and expires_at > $4
116 |           order by observed_at desc limit 1
117 |         `,
118 |         [input.storeId, input.provider, input.phoneHash, input.at],
119 |       );
120 |       return result.rows[0] ? observationFromRow(result.rows[0]) : null;
121 |     },
122 |     async save(input): Promise<void> {
123 |       await pool.query(
124 |         `
125 |           insert into courier_observations (
126 |             id, store_id, provider, phone_hash, total_orders, delivered_orders,
127 |             returned_orders, cancelled_before_shipping, success_rate, confidence,
128 |             source_type, observed_at, expires_at
129 |           ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
130 |         `,
131 |         [
132 |           `cob_${randomUUID()}`,
133 |           input.storeId,
134 |           input.observation.provider,
135 |           input.phoneHash,
136 |           input.observation.totalOrders,
137 |           input.observation.deliveredOrders,
138 |           input.observation.returnedOrders,
139 |           input.observation.cancelledBeforeShipping,
140 |           input.observation.successRate,
141 |           input.observation.confidence,
142 |           input.observation.source,
143 |           input.observation.observedAt,
144 |           input.observation.expiresAt,
145 |         ],
146 |       );
147 |     },
148 |   },
149 |   metrics,
150 |   tracer,
151 |   health: {
152 |     async started(jobId, at): Promise<void> {
153 |       await observeQueue('start', () => jobs.started(jobId, workerId, at));
154 |     },
155 |     async completed(jobId, at): Promise<void> {
156 |       await activeHeartbeat?.stop();
157 |       await observeQueue('complete', () => jobs.completed(jobId, workerId, at));
158 |     },
159 |     async failed(jobId, code, retryable, at): Promise<void> {
160 |       await activeHeartbeat?.stop();
161 |       await observeQueue(retryable ? 'retry' : 'fail', () =>
162 |         jobs.failed(jobId, workerId, code, retryable, at),
163 |       );
164 |     },
165 |   },
166 | });
167 |
168 | async function run(): Promise<void> {
169 |   log.info('courier.sync.worker.started', { worker_id: workerId });
170 |   while (!stopping) {
171 |     try {
172 |       await recordQueueMetricsIfDue().catch((error) => {
173 |         log.error('courier.sync.queue.metrics.error', {
174 |           code: errorCode(error, 'QUEUE_METRICS_FAILED'),
175 |         });
176 |       });
177 |       const job = await observeQueue(
178 |         'claim',
179 |         () => jobs.claim(workerId),
180 |         (value) => value === null,
181 |       ).catch((error) => {
182 |         recordWorkerClaimFailure(metrics, 'courier_sync');
183 |         throw error;
184 |       });
185 |       if (!job) {
186 |         await new Promise((resolve) => setTimeout(resolve, pollMs));
187 |         continue;
188 |       }
189 |       activeHeartbeat = new LeaseHeartbeat({
190 |         intervalMs: leaseRenewMs,
191 |         renew: (at) => observeQueue('renew', () => jobs.renew(job.id, workerId, at)),
192 |       }).start();
193 |       let payload: ReturnType<typeof parsePayload>;
194 |       try {
195 |         payload = parsePayload(job.payload, job);
196 |       } catch (error) {
197 |         await activeHeartbeat.stop();
198 |         await observeQueue('fail', () =>
199 |           jobs.failed(job.id, workerId, errorCode(error, 'INVALID_JOB_PAYLOAD'), false),
200 |         );
201 |         throw error;
202 |       }
203 |       const traceContext = parsePersistedTraceContext(job.traceContext);
204 |       await syncWorker.sync({
205 |         jobId: job.id,
206 |         storeId: job.storeId,
207 |         courierAccountId: job.courierAccountId,
208 |         provider: job.provider,
209 |         phone: payload.phone,
210 |         phoneHash: payload.phoneHash,
211 |         force: payload.force,
212 |         signal: activeHeartbeat.signal,
213 |         ...(traceContext === null ? {} : { traceContext }),
214 |       });
215 |       await activeHeartbeat.stopQuietly();
216 |       activeHeartbeat = null;
217 |     } catch (error) {
218 |       await activeHeartbeat?.stopQuietly();
219 |       activeHeartbeat = null;
220 |       log.error('courier.sync.worker.error', {
221 |         code: errorCode(error, 'WORKER_TICK_FAILED'),
222 |         worker_id: workerId,
223 |       });
224 |       await new Promise((resolve) => setTimeout(resolve, Math.min(pollMs, 5_000)));
225 |     }
226 |   }
227 |   await pool.end();
228 | }
229 |
230 | interface ObservationRow {
231 |   provider: 'steadfast' | 'pathao' | 'redx' | 'aggregator';
232 |   total_orders: number;
233 |   delivered_orders: number;
234 |   returned_orders: number;
235 |   cancelled_before_shipping: number;
236 |   success_rate: string | null;
237 |   confidence: string;
238 |   source_type: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
239 |   observed_at: Date;
240 |   expires_at: Date;
241 | }
242 |
243 | function parsePayload(
244 |   value: unknown,
245 |   job: ClaimedCourierJob,
246 | ): { phone: string; phoneHash: string; force: boolean } {
247 |   if (!value || typeof value !== 'object') throw invalidPayload('Courier job payload is invalid');
248 |   const row = value as Record<string, unknown>;
249 |   if (![row.phone, row.phoneHash].every((item) => typeof item === 'string')) {
250 |     throw invalidPayload('Courier job payload is incomplete');
251 |   }
252 |   if (typeof row.organizationId === 'string' && row.organizationId !== job.organizationId) {
253 |     throw invalidPayload('Courier job organization scope does not match the account');
254 |   }
255 |   if (typeof row.storeId === 'string' && row.storeId !== job.storeId) {
256 |     throw invalidPayload('Courier job store scope does not match the account');
257 |   }
258 |   if (typeof row.provider === 'string' && row.provider !== job.provider) {
259 |     throw invalidPayload('Courier job provider does not match the account');
260 |   }
261 |   return {
262 |     phone: String(row.phone),
263 |     phoneHash: String(row.phoneHash),
264 |     force: row.force === true,
265 |   };
266 | }
267 |
268 | function invalidPayload(message: string): Error & { code: string } {
269 |   return Object.assign(new Error(message), { code: 'INVALID_JOB_PAYLOAD' });
270 | }
271 |
272 | function errorCode(error: unknown, fallback: string): string {
273 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
274 | }
275 |
276 | function observationFromRow(row: ObservationRow): CourierObservation {
277 |   return {
278 |     provider: row.provider,
279 |     totalOrders: row.total_orders,
280 |     deliveredOrders: row.delivered_orders,
281 |     returnedOrders: row.returned_orders,
282 |     cancelledBeforeShipping: row.cancelled_before_shipping,
283 |     successRate: row.success_rate === null ? null : Number(row.success_rate),
284 |     confidence: Number(row.confidence),
285 |     source: row.source_type,
286 |     observedAt: row.observed_at.toISOString(),
287 |     expiresAt: row.expires_at.toISOString(),
288 |   };
289 | }
290 |
291 | const stop = (): void => {
292 |   stopping = true;
293 | };
294 | process.once('SIGTERM', stop);
295 | process.once('SIGINT', stop);
296 | await run();
297 |
```

### workers/event-worker/src/index.test.ts

Bytes: 9089
SHA-256: 44d9edea3e9dfdb5faf10befc561f658aa8c9354d2b4539ccc2242811d3b4615
Lines: 1-268 of 268

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { describe, expect, it, vi } from 'vitest';
  3 | import { createMetricRecorder, createTracer, type SpanPoint } from '@ozzyl/observability';
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
 81 |     const tracePoints: SpanPoint[] = [];
 82 |     const spanIds = ['bbbbbbbbbbbbbbbb', 'cccccccccccccccc'];
 83 |     const ticks = [100, 105, 117, 125];
 84 |     const fetcher = vi.fn<typeof fetch>().mockImplementation(async (_url, init) => {
 85 |       const headers = new Headers(init?.headers);
 86 |       const timestamp = headers.get('X-Ozzyl-Timestamp') ?? '';
 87 |       const payload = typeof init?.body === 'string' ? init.body : '';
 88 |       const expected = `v1=${createHmac('sha256', 'x'.repeat(32))
 89 |         .update(`${timestamp}.${payload}`)
 90 |         .digest('hex')}`;
 91 |       expect(headers.get('X-Ozzyl-Signature')).toBe(expected);
 92 |       return new Response(null, { status: 204 });
 93 |     });
 94 |     const worker = new EventWorker(repository, {
 95 |       fetcher,
 96 |       resolver: publicResolver,
 97 |       now: () => new Date('2026-07-17T00:00:00.000Z'),
 98 |       monotonicNow: () => ticks.shift() ?? 125,
 99 |       metrics: createMetricRecorder({
100 |         service: 'event-worker-test',
101 |         environment: 'test',
102 |         write: (line) => metricLines.push(line),
103 |       }),
104 |       tracer: createTracer({
105 |         service: 'event-worker-test',
106 |         environment: 'test',
107 |         clock: () => new Date('2026-07-28T00:00:00.000Z'),
108 |         monotonicNow: () => 1,
109 |         generateSpanId: () => spanIds.shift()!,
110 |         write: (_line, point) => tracePoints.push(point),
111 |       }),
112 |     });
113 |     const result = await worker.deliver({
114 |       endpoint: {
115 |         id: 'we_1',
116 |         url: 'https://merchant.example/hook',
117 |         signingSecret: 'x'.repeat(32),
118 |         active: true,
119 |       },
120 |       event,
121 |       attempt: 1,
122 |       traceContext: {
123 |         traceId: '11111111111111111111111111111111',
124 |         spanId: 'aaaaaaaaaaaaaaaa',
125 |         traceFlags: '01',
126 |       },
127 |     });
128 |     expect(result.status).toBe('delivered');
129 |     expect(metricLines.map(parseMetricLine)).toEqual([
130 |       expect.objectContaining({
131 |         name: 'ozzyl.provider.operations',
132 |         value: 1,
133 |         attributes: {
134 |           provider_type: 'webhook_http',
135 |           operation: 'deliver',
136 |           outcome: 'success',
137 |         },
138 |       }),
139 |       expect.objectContaining({
140 |         name: 'ozzyl.provider.operation.duration',
141 |         value: 12,
142 |         unit: 'ms',
143 |         attributes: {
144 |           provider_type: 'webhook_http',
145 |           operation: 'deliver',
146 |           outcome: 'success',
147 |         },
148 |       }),
149 |       expect.objectContaining({
150 |         name: 'ozzyl.worker.operations',
151 |         value: 1,
152 |         attributes: {
153 |           worker_type: 'webhook_delivery',
154 |           operation: 'deliver',
155 |           outcome: 'completed',
156 |         },
157 |       }),
158 |       expect.objectContaining({
159 |         name: 'ozzyl.worker.operation.duration',
160 |         value: 25,
161 |         unit: 'ms',
162 |         attributes: {
163 |           worker_type: 'webhook_delivery',
164 |           operation: 'deliver',
165 |           outcome: 'completed',
166 |         },
167 |       }),
168 |     ]);
169 |     expect(metricLines.join('\n')).not.toContain('evt_1');
170 |     expect(metricLines.join('\n')).not.toContain('we_1');
171 |     expect(tracePoints).toEqual([
172 |       expect.objectContaining({
173 |         name: 'ozzyl.provider.operation',
174 |         trace_id: '11111111111111111111111111111111',
175 |         span_id: 'cccccccccccccccc',
176 |         parent_span_id: 'bbbbbbbbbbbbbbbb',
177 |         attributes: {
178 |           provider_type: 'webhook_http',
179 |           operation: 'deliver',
180 |           outcome: 'success',
181 |         },
182 |       }),
183 |       expect.objectContaining({
184 |         name: 'ozzyl.worker.operation',
185 |         trace_id: '11111111111111111111111111111111',
186 |         span_id: 'bbbbbbbbbbbbbbbb',
187 |         parent_span_id: 'aaaaaaaaaaaaaaaa',
188 |         attributes: {
189 |           worker_type: 'webhook_delivery',
190 |           operation: 'deliver',
191 |           outcome: 'completed',
192 |         },
193 |       }),
194 |     ]);
195 |     expect(JSON.stringify(tracePoints)).not.toMatch(/evt_1|we_1|org_1|sto_1|merchant\.example/);
196 |   });
197 |
198 |   it('fails an unsafe destination without retrying or fetching', async () => {
199 |     const isolatedRepository = {
200 |       markDelivered: vi.fn(async () => undefined),
201 |       markRetry: vi.fn(async () => undefined),
202 |       markFailed: vi.fn(async () => undefined),
203 |     };
204 |     const fetcher = vi.fn<typeof fetch>();
205 |     const worker = new EventWorker(isolatedRepository, { fetcher, resolver: publicResolver });
206 |     const result = await worker.deliver({
207 |       endpoint: {
208 |         id: 'we_unsafe',
209 |         url: 'https://127.0.0.1/hook',
210 |         signingSecret: 'x'.repeat(32),
211 |         active: true,
212 |       },
213 |       event,
214 |       attempt: 1,
215 |     });
216 |     expect(result).toEqual({
217 |       status: 'failed',
218 |       errorCode: 'UNSAFE_WEBHOOK_DESTINATION',
219 |     });
220 |     expect(fetcher).not.toHaveBeenCalled();
221 |     expect(isolatedRepository.markRetry).not.toHaveBeenCalled();
222 |     expect(isolatedRepository.markFailed).toHaveBeenCalledOnce();
223 |   });
224 |
225 |   it('aborts an active webhook request when the worker lease is lost', async () => {
226 |     const isolatedRepository = {
227 |       markDelivered: vi.fn(async () => undefined),
228 |       markRetry: vi.fn(async () => undefined),
229 |       markFailed: vi.fn(async () => undefined),
230 |     };
231 |     const fetcher = vi.fn<typeof fetch>().mockImplementation(
232 |       async (_url, init) =>
233 |         new Promise<Response>((_resolve, reject) => {
234 |           const abort = (): void => reject(new DOMException('Aborted', 'AbortError'));
235 |           if (init?.signal?.aborted) abort();
236 |           else init?.signal?.addEventListener('abort', abort, { once: true });
237 |         }),
238 |     );
239 |     const worker = new EventWorker(isolatedRepository, {
240 |       fetcher,
241 |       resolver: publicResolver,
242 |       timeoutMs: 60_000,
243 |       now: () => new Date('2026-07-17T00:00:00.000Z'),
244 |     });
245 |     const controller = new AbortController();
246 |     const result = worker.deliver({
247 |       endpoint: {
248 |         id: 'we_lease',
249 |         url: 'https://merchant.example/hook',
250 |         signingSecret: 'x'.repeat(32),
251 |         active: true,
252 |       },
253 |       event,
254 |       attempt: 1,
255 |       signal: controller.signal,
256 |     });
257 |
258 |     controller.abort(
259 |       Object.assign(new Error('lease lost'), { code: 'WEBHOOK_DELIVERY_LEASE_LOST' }),
260 |     );
261 |     await expect(result).resolves.toMatchObject({
262 |       status: 'retry_scheduled',
263 |       errorCode: 'TIMEOUT',
264 |     });
265 |     expect(isolatedRepository.markRetry).toHaveBeenCalledOnce();
266 |   });
267 | });
268 |
```

### workers/event-worker/src/index.ts

Bytes: 13210
SHA-256: a8a4b74ea414d3d5aa954c9de3de21280551ae4e944e958c7a5eff9940d17c12
Lines: 1-400 of 400

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { lookup } from 'node:dns/promises';
  3 | import { isIP } from 'node:net';
  4 | import {
  5 |   endProviderOperationSpan,
  6 |   endWorkerOperationSpan,
  7 |   recordProviderOperation,
  8 |   recordWorkerOperation,
  9 |   startProviderOperationSpan,
 10 |   startWorkerOperationSpan,
 11 |   type MetricRecorder,
 12 |   type TraceContext,
 13 |   type Tracer,
 14 | } from '@ozzyl/observability';
 15 | import type { DomainEvent } from '@ozzyl/shared-types';
 16 |
 17 | export interface WebhookEndpoint {
 18 |   id: string;
 19 |   url: string;
 20 |   signingSecret: string;
 21 |   active: boolean;
 22 | }
 23 |
 24 | export interface WebhookDeliveryInput {
 25 |   endpoint: WebhookEndpoint;
 26 |   event: DomainEvent;
 27 |   attempt: number;
 28 |   signal?: AbortSignal;
 29 |   traceContext?: TraceContext;
 30 | }
 31 |
 32 | export interface DeliveryResult {
 33 |   status: 'delivered' | 'retry_scheduled' | 'failed';
 34 |   responseStatus?: number;
 35 |   nextAttemptAt?: string;
 36 |   errorCode?: string;
 37 | }
 38 |
 39 | export interface WebhookDeliveryRepository {
 40 |   markDelivered(input: {
 41 |     endpointId: string;
 42 |     eventId: string;
 43 |     responseStatus: number;
 44 |     at: Date;
 45 |   }): Promise<void>;
 46 |   markRetry(input: {
 47 |     endpointId: string;
 48 |     eventId: string;
 49 |     responseStatus?: number;
 50 |     errorCode: string;
 51 |     nextAttemptAt: Date;
 52 |     at: Date;
 53 |   }): Promise<void>;
 54 |   markFailed(input: {
 55 |     endpointId: string;
 56 |     eventId: string;
 57 |     responseStatus?: number;
 58 |     errorCode: string;
 59 |     at: Date;
 60 |   }): Promise<void>;
 61 | }
 62 |
 63 | export type WebhookDestinationResolver = (hostname: string) => Promise<readonly string[]>;
 64 |
 65 | export class WebhookDestinationError extends Error {
 66 |   readonly code = 'UNSAFE_WEBHOOK_DESTINATION';
 67 | }
 68 |
 69 | export class WebhookResolutionError extends Error {
 70 |   readonly code = 'WEBHOOK_DNS_RESOLUTION_FAILED';
 71 | }
 72 |
 73 | export function assertSafeWebhookUrl(rawUrl: string): URL {
 74 |   let url: URL;
 75 |   try {
 76 |     url = new URL(rawUrl);
 77 |   } catch {
 78 |     throw new WebhookDestinationError('Webhook endpoint URL is invalid');
 79 |   }
 80 |   if (url.protocol !== 'https:') {
 81 |     throw new WebhookDestinationError('Webhook endpoints must use HTTPS');
 82 |   }
 83 |   const hostname = normalizedHostname(url.hostname);
 84 |   if (hostname === 'localhost' || hostname.endsWith('.localhost') || hostname.endsWith('.local')) {
 85 |     throw new WebhookDestinationError('Local webhook destinations are not allowed');
 86 |   }
 87 |   if (isIP(hostname) && isNonPublicIp(hostname)) {
 88 |     throw new WebhookDestinationError('Non-public IP webhook destinations are not allowed');
 89 |   }
 90 |   if (hostname === 'metadata.google.internal') {
 91 |     throw new WebhookDestinationError('Metadata service destinations are not allowed');
 92 |   }
 93 |   if (url.username || url.password) {
 94 |     throw new WebhookDestinationError('Webhook URLs must not contain credentials');
 95 |   }
 96 |   return url;
 97 | }
 98 |
 99 | export async function assertSafeWebhookDestination(
100 |   rawUrl: string,
101 |   resolver: WebhookDestinationResolver = resolveHostname,
102 | ): Promise<URL> {
103 |   const url = assertSafeWebhookUrl(rawUrl);
104 |   const hostname = normalizedHostname(url.hostname);
105 |   let addresses: readonly string[];
106 |   try {
107 |     addresses = await resolver(hostname);
108 |   } catch {
109 |     throw new WebhookResolutionError('Webhook destination DNS resolution failed');
110 |   }
111 |   if (addresses.length === 0) {
112 |     throw new WebhookResolutionError('Webhook destination did not resolve to an address');
113 |   }
114 |   if (addresses.some((address) => !isIP(address) || isNonPublicIp(address))) {
115 |     throw new WebhookDestinationError('Webhook destination resolved to a non-public address');
116 |   }
117 |   return url;
118 | }
119 |
120 | export function signWebhook(payload: string, timestamp: string, secret: string): string {
121 |   return `v1=${createHmac('sha256', secret).update(`${timestamp}.${payload}`).digest('hex')}`;
122 | }
123 |
124 | export class EventWorker {
125 |   private readonly fetcher: typeof fetch;
126 |   private readonly timeoutMs: number;
127 |   private readonly maxAttempts: number;
128 |   private readonly now: () => Date;
129 |   private readonly resolver: WebhookDestinationResolver;
130 |   private readonly metrics: MetricRecorder | undefined;
131 |   private readonly tracer: Tracer | undefined;
132 |   private readonly monotonicNow: () => number;
133 |
134 |   constructor(
135 |     private readonly repository: WebhookDeliveryRepository,
136 |     options?: {
137 |       fetcher?: typeof fetch;
138 |       timeoutMs?: number;
139 |       maxAttempts?: number;
140 |       now?: () => Date;
141 |       resolver?: WebhookDestinationResolver;
142 |       metrics?: MetricRecorder;
143 |       tracer?: Tracer;
144 |       monotonicNow?: () => number;
145 |     },
146 |   ) {
147 |     this.fetcher = options?.fetcher ?? fetch;
148 |     this.timeoutMs = options?.timeoutMs ?? 5_000;
149 |     this.maxAttempts = options?.maxAttempts ?? 5;
150 |     this.now = options?.now ?? (() => new Date());
151 |     this.resolver = options?.resolver ?? resolveHostname;
152 |     this.metrics = options?.metrics;
153 |     this.tracer = options?.tracer;
154 |     this.monotonicNow = options?.monotonicNow ?? (() => Date.now());
155 |   }
156 |
157 |   async deliver(input: WebhookDeliveryInput): Promise<DeliveryResult> {
158 |     const startedAt = this.monotonicNow();
159 |     const span = startWorkerOperationSpan(this.tracer, {
160 |       workerType: 'webhook_delivery',
161 |       operation: 'deliver',
162 |       ...(input.traceContext === undefined ? {} : { parent: input.traceContext }),
163 |     });
164 |     try {
165 |       const result = await this.deliverInternal(input, span.context);
166 |       const outcome =
167 |         result.status === 'delivered'
168 |           ? 'completed'
169 |           : result.status === 'retry_scheduled'
170 |             ? 'retry_scheduled'
171 |             : 'failed';
172 |       recordWorkerOperation(this.metrics, {
173 |         workerType: 'webhook_delivery',
174 |         operation: 'deliver',
175 |         outcome,
176 |         durationMs: this.monotonicNow() - startedAt,
177 |       });
178 |       endWorkerOperationSpan(span, outcome);
179 |       return result;
180 |     } catch (error) {
181 |       recordWorkerOperation(this.metrics, {
182 |         workerType: 'webhook_delivery',
183 |         operation: 'deliver',
184 |         outcome: 'failed',
185 |         durationMs: this.monotonicNow() - startedAt,
186 |       });
187 |       endWorkerOperationSpan(span, 'failed');
188 |       throw error;
189 |     }
190 |   }
191 |
192 |   private async deliverInternal(
193 |     input: WebhookDeliveryInput,
194 |     traceContext: TraceContext,
195 |   ): Promise<DeliveryResult> {
196 |     if (!input.endpoint.active) {
197 |       await this.repository.markFailed({
198 |         endpointId: input.endpoint.id,
199 |         eventId: input.event.id,
200 |         errorCode: 'ENDPOINT_INACTIVE',
201 |         at: this.now(),
202 |       });
203 |       return { status: 'failed', errorCode: 'ENDPOINT_INACTIVE' };
204 |     }
205 |
206 |     let url: URL;
207 |     try {
208 |       url = await assertSafeWebhookDestination(input.endpoint.url, this.resolver);
209 |     } catch (error) {
210 |       return this.retryOrFail({
211 |         endpointId: input.endpoint.id,
212 |         eventId: input.event.id,
213 |         attempt: input.attempt,
214 |         errorCode:
215 |           error instanceof WebhookDestinationError || error instanceof WebhookResolutionError
216 |             ? error.code
217 |             : 'UNSAFE_WEBHOOK_DESTINATION',
218 |         retryable: error instanceof WebhookResolutionError,
219 |       });
220 |     }
221 |
222 |     const payload = JSON.stringify(input.event);
223 |     const timestamp = String(Math.floor(this.now().getTime() / 1_000));
224 |     const controller = new AbortController();
225 |     const abortFromCaller = (): void => controller.abort(input.signal?.reason);
226 |     if (input.signal?.aborted) abortFromCaller();
227 |     else input.signal?.addEventListener('abort', abortFromCaller, { once: true });
228 |     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
229 |
230 |     const providerStartedAt = this.monotonicNow();
231 |     const providerSpan = startProviderOperationSpan(this.tracer, {
232 |       providerType: 'webhook_http',
233 |       operation: 'deliver',
234 |       parent: traceContext,
235 |     });
236 |     let response: Response;
237 |     try {
238 |       response = await this.fetcher(url, {
239 |         method: 'POST',
240 |         redirect: 'error',
241 |         signal: controller.signal,
242 |         headers: {
243 |           'Content-Type': 'application/json',
244 |           'User-Agent': 'Ozzyl-Guard-Webhooks/1.0',
245 |           'X-Ozzyl-Event': input.event.type,
246 |           'X-Ozzyl-Timestamp': timestamp,
247 |           'X-Ozzyl-Signature': signWebhook(payload, timestamp, input.endpoint.signingSecret),
248 |         },
249 |         body: payload,
250 |       });
251 |       const retryable =
252 |         response.status === 408 || response.status === 429 || response.status >= 500;
253 |       const providerOutcome = response.ok
254 |         ? 'success'
255 |         : retryable
256 |           ? 'retryable_failure'
257 |           : 'permanent_failure';
258 |       recordProviderOperation(this.metrics, {
259 |         providerType: 'webhook_http',
260 |         operation: 'deliver',
261 |         outcome: providerOutcome,
262 |         durationMs: this.monotonicNow() - providerStartedAt,
263 |       });
264 |       endProviderOperationSpan(providerSpan, providerOutcome);
265 |     } catch (error) {
266 |       recordProviderOperation(this.metrics, {
267 |         providerType: 'webhook_http',
268 |         operation: 'deliver',
269 |         outcome: 'retryable_failure',
270 |         durationMs: this.monotonicNow() - providerStartedAt,
271 |       });
272 |       endProviderOperationSpan(providerSpan, 'retryable_failure');
273 |       const errorCode =
274 |         error instanceof Error && error.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK_ERROR';
275 |       return this.retryOrFail({
276 |         endpointId: input.endpoint.id,
277 |         eventId: input.event.id,
278 |         attempt: input.attempt,
279 |         errorCode,
280 |         retryable: true,
281 |       });
282 |     } finally {
283 |       clearTimeout(timeout);
284 |       input.signal?.removeEventListener('abort', abortFromCaller);
285 |     }
286 |
287 |     if (response.ok) {
288 |       await this.repository.markDelivered({
289 |         endpointId: input.endpoint.id,
290 |         eventId: input.event.id,
291 |         responseStatus: response.status,
292 |         at: this.now(),
293 |       });
294 |       return { status: 'delivered', responseStatus: response.status };
295 |     }
296 |
297 |     return this.retryOrFail({
298 |       endpointId: input.endpoint.id,
299 |       eventId: input.event.id,
300 |       attempt: input.attempt,
301 |       responseStatus: response.status,
302 |       errorCode: response.status === 429 ? 'RATE_LIMITED' : `HTTP_${response.status}`,
303 |       retryable: response.status === 408 || response.status === 429 || response.status >= 500,
304 |     });
305 |   }
306 |
307 |   private async retryOrFail(input: {
308 |     endpointId: string;
309 |     eventId: string;
310 |     attempt: number;
311 |     responseStatus?: number;
312 |     errorCode: string;
313 |     retryable: boolean;
314 |   }): Promise<DeliveryResult> {
315 |     const at = this.now();
316 |     if (input.retryable && input.attempt < this.maxAttempts) {
317 |       const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, input.attempt - 1) * 30_000);
318 |       const nextAttemptAt = new Date(at.getTime() + delayMs);
319 |       await this.repository.markRetry({
320 |         endpointId: input.endpointId,
321 |         eventId: input.eventId,
322 |         ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
323 |         errorCode: input.errorCode,
324 |         nextAttemptAt,
325 |         at,
326 |       });
327 |       return {
328 |         status: 'retry_scheduled',
329 |         ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
330 |         nextAttemptAt: nextAttemptAt.toISOString(),
331 |         errorCode: input.errorCode,
332 |       };
333 |     }
334 |
335 |     await this.repository.markFailed({
336 |       endpointId: input.endpointId,
337 |       eventId: input.eventId,
338 |       ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
339 |       errorCode: input.errorCode,
340 |       at,
341 |     });
342 |     return {
343 |       status: 'failed',
344 |       ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
345 |       errorCode: input.errorCode,
346 |     };
347 |   }
348 | }
349 |
350 | async function resolveHostname(hostname: string): Promise<readonly string[]> {
351 |   if (isIP(hostname)) return [hostname];
352 |   const records = await lookup(hostname, { all: true, verbatim: true });
353 |   return records.map((record) => record.address);
354 | }
355 |
356 | function normalizedHostname(hostname: string): string {
357 |   return hostname.toLowerCase().replace(/^\[/, '').replace(/\]$/, '');
358 | }
359 |
360 | function isNonPublicIp(address: string): boolean {
361 |   const version = isIP(address);
362 |   if (version === 4) {
363 |     const parts = address.split('.').map(Number);
364 |     const [first, second, third] = parts;
365 |     if (parts.length !== 4 || first === undefined || second === undefined || third === undefined) {
366 |       return true;
367 |     }
368 |     return (
369 |       first === 0 ||
370 |       first === 10 ||
371 |       first === 127 ||
372 |       (first === 100 && second >= 64 && second <= 127) ||
373 |       (first === 169 && second === 254) ||
374 |       (first === 172 && second >= 16 && second <= 31) ||
375 |       (first === 192 && second === 0 && third === 0) ||
376 |       (first === 192 && second === 0 && third === 2) ||
377 |       (first === 192 && second === 168) ||
378 |       (first === 198 && (second === 18 || second === 19)) ||
379 |       (first === 198 && second === 51 && third === 100) ||
380 |       (first === 203 && second === 0 && third === 113) ||
381 |       first >= 224
382 |     );
383 |   }
384 |   if (version === 6) {
385 |     const normalized = address.toLowerCase();
386 |     const mappedIpv4 = normalized.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/)?.[1];
387 |     if (mappedIpv4) return isNonPublicIp(mappedIpv4);
388 |     return (
389 |       normalized === '::' ||
390 |       normalized === '::1' ||
391 |       normalized.startsWith('fc') ||
392 |       normalized.startsWith('fd') ||
393 |       /^fe[89ab]/.test(normalized) ||
394 |       normalized.startsWith('ff') ||
395 |       normalized.startsWith('2001:db8:')
396 |     );
397 |   }
398 |   return true;
399 | }
400 |
```

### workers/event-worker/src/postgres.ts

Bytes: 12568
SHA-256: 015aad50d31f0dbb03691ae47000cbcdf96d651a55b4f8d48b32db5b22dedcf6
Lines: 1-395 of 395

```typescript
  1 | import type { Pool } from 'pg';
  2 | import type { DurableQueueSnapshot, PersistedTraceContext } from '@ozzyl/observability';
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
 18 |   traceContext?: PersistedTraceContext;
 19 | }
 20 |
 21 | export class WebhookDeliveryLeaseError extends Error {
 22 |   readonly code = 'WEBHOOK_DELIVERY_LEASE_LOST';
 23 |
 24 |   constructor(message = 'Webhook delivery lease is no longer owned by this worker') {
 25 |     super(message);
 26 |     this.name = 'WebhookDeliveryLeaseError';
 27 |   }
 28 | }
 29 |
 30 | export class PostgresWebhookDeliveryQueue {
 31 |   private readonly leaseMs: number;
 32 |   private readonly maxAttempts: number;
 33 |
 34 |   constructor(
 35 |     private readonly pool: Pool,
 36 |     options: { leaseMs?: number; maxAttempts?: number } = {},
 37 |   ) {
 38 |     this.leaseMs = options.leaseMs ?? 60_000;
 39 |     this.maxAttempts = options.maxAttempts ?? 5;
 40 |   }
 41 |
 42 |   async claim(workerId: string, at = new Date()): Promise<ClaimedWebhookDelivery | null> {
 43 |     const client = await this.pool.connect();
 44 |     try {
 45 |       await client.query('begin');
 46 |       await client.query(
 47 |         `
 48 |           update webhook_deliveries wd
 49 |           set status = 'failed',
 50 |             completed_at = $1,
 51 |             error_code = coalesce(wd.error_code, 'WEBHOOK_SCOPE_MISMATCH'),
 52 |             claimed_by = null,
 53 |             claimed_at = null,
 54 |             lease_expires_at = null,
 55 |             updated_at = now()
 56 |           where wd.status not in ('delivered', 'failed')
 57 |             and not exists (
 58 |               select 1
 59 |               from webhook_endpoints we
 60 |               left join stores s
 61 |                 on s.id = wd.store_id and s.organization_id = wd.organization_id
 62 |               where we.id = wd.endpoint_id
 63 |                 and we.organization_id = wd.organization_id
 64 |                 and (we.store_id is null or we.store_id = wd.store_id)
 65 |                 and (wd.store_id is null or s.id is not null)
 66 |             )
 67 |         `,
 68 |         [at],
 69 |       );
 70 |       await client.query(
 71 |         `
 72 |           update webhook_deliveries
 73 |           set status = 'failed',
 74 |             completed_at = $1,
 75 |             error_code = coalesce(error_code, 'LEASE_EXPIRED'),
 76 |             claimed_by = null,
 77 |             claimed_at = null,
 78 |             lease_expires_at = null,
 79 |             updated_at = now()
 80 |           where status in ('claimed', 'processing')
 81 |             and (lease_expires_at is null or lease_expires_at <= $1)
 82 |             and attempts >= $2
 83 |         `,
 84 |         [at, this.maxAttempts],
 85 |       );
 86 |       const leaseExpiresAt = new Date(at.getTime() + this.leaseMs);
 87 |       const result = await client.query<{
 88 |         id: string;
 89 |         organization_id: string;
 90 |         store_id: string | null;
 91 |         endpoint_id: string;
 92 |         url: string;
 93 |         secret_encrypted: string;
 94 |         endpoint_status: string;
 95 |         event_id: string;
 96 |         event_type: string;
 97 |         event_payload: unknown;
 98 |         occurred_at: Date;
 99 |         attempts: number;
100 |         trace_parent: string | null;
101 |         trace_state: string | null;
102 |       }>(
103 |         `
104 |           with candidate as (
105 |             select wd.id
106 |             from webhook_deliveries wd
107 |             join webhook_endpoints we
108 |               on we.id = wd.endpoint_id
109 |               and we.organization_id = wd.organization_id
110 |               and (we.store_id is null or we.store_id = wd.store_id)
111 |             left join stores s
112 |               on s.id = wd.store_id and s.organization_id = wd.organization_id
113 |             where wd.attempts < $4
114 |               and (wd.store_id is null or s.id is not null)
115 |               and (
116 |                 (
117 |                   wd.status in ('queued', 'retry_scheduled')
118 |                   and coalesce(wd.next_attempt_at, wd.created_at) <= $2
119 |                 )
120 |                 or (
121 |                   wd.status in ('claimed', 'processing')
122 |                   and (wd.lease_expires_at is null or wd.lease_expires_at <= $2)
123 |                 )
124 |               )
125 |             order by
126 |               case when wd.status in ('claimed', 'processing') then 0 else 1 end,
127 |               coalesce(wd.lease_expires_at, wd.next_attempt_at, wd.created_at) asc,
128 |               wd.id asc
129 |             for update of wd skip locked
130 |             limit 1
131 |           ), claimed as (
132 |             update webhook_deliveries wd
133 |             set status = 'claimed',
134 |               claimed_by = $1,
135 |               claimed_at = $2,
136 |               lease_expires_at = $3,
137 |               completed_at = null,
138 |               updated_at = now()
139 |             from candidate
140 |             where wd.id = candidate.id
141 |             returning wd.*
142 |           )
143 |           select
144 |             claimed.id,
145 |             claimed.organization_id,
146 |             claimed.store_id,
147 |             claimed.endpoint_id,
148 |             we.url,
149 |             we.secret_encrypted,
150 |             we.status as endpoint_status,
151 |             claimed.event_id,
152 |             claimed.event_type,
153 |             claimed.event_payload,
154 |             claimed.occurred_at,
155 |             claimed.attempts,
156 |             claimed.trace_parent,
157 |             claimed.trace_state
158 |           from claimed
159 |           join webhook_endpoints we on we.id = claimed.endpoint_id
160 |         `,
161 |         [workerId, at, leaseExpiresAt, this.maxAttempts],
162 |       );
163 |       await client.query('commit');
164 |       const row = result.rows[0];
165 |       return row
166 |         ? {
167 |             id: row.id,
168 |             organizationId: row.organization_id,
169 |             storeId: row.store_id,
170 |             endpointId: row.endpoint_id,
171 |             endpointUrl: row.url,
172 |             secretEncrypted: [REDACTED_SECRET],
173 |             endpointActive: row.endpoint_status === 'active',
174 |             eventId: row.event_id,
175 |             eventType: row.event_type,
176 |             eventPayload: row.event_payload,
177 |             occurredAt: row.occurred_at,
178 |             attempts: row.attempts,
179 |             ...(row.trace_parent === null
180 |               ? {}
181 |               : {
182 |                   traceContext: {
183 |                     traceParent: row.trace_parent,
184 |                     ...(row.trace_state === null ? {} : { traceState: row.trace_state }),
185 |                   },
186 |                 }),
187 |           }
188 |         : null;
189 |     } catch (error) {
190 |       await client.query('rollback').catch(() => undefined);
191 |       throw error;
192 |     } finally {
193 |       client.release();
194 |     }
195 |   }
196 |
197 |   async started(deliveryId: string, workerId: string, at = new Date()): Promise<void> {
198 |     const result = await this.pool.query(
199 |       `
200 |         update webhook_deliveries
201 |         set status = 'processing',
202 |           attempts = attempts + 1,
203 |           lease_expires_at = $4,
204 |           updated_at = now()
205 |         where id = $1
206 |           and claimed_by = $2
207 |           and status = 'claimed'
208 |           and lease_expires_at > $3
209 |       `,
210 |       [deliveryId, workerId, at, new Date(at.getTime() + this.leaseMs)],
211 |     );
212 |     this.assertOwned(result.rowCount);
213 |   }
214 |
215 |   async renew(deliveryId: string, workerId: string, at = new Date()): Promise<void> {
216 |     const result = await this.pool.query(
217 |       `
218 |         update webhook_deliveries
219 |         set lease_expires_at = $3, updated_at = now()
220 |         where id = $1
221 |           and claimed_by = $2
222 |           and status in ('claimed', 'processing')
223 |           and lease_expires_at > $4
224 |       `,
225 |       [deliveryId, workerId, new Date(at.getTime() + this.leaseMs), at],
226 |     );
227 |     this.assertOwned(result.rowCount);
228 |   }
229 |
230 |   async delivered(
231 |     deliveryId: string,
232 |     workerId: string,
233 |     responseStatus: number,
234 |     at = new Date(),
235 |   ): Promise<void> {
236 |     const result = await this.pool.query(
237 |       `
238 |         update webhook_deliveries
239 |         set status = 'delivered',
240 |           response_status = $3,
241 |           error_code = null,
242 |           completed_at = $4,
243 |           claimed_by = null,
244 |           claimed_at = null,
245 |           lease_expires_at = null,
246 |           updated_at = now()
247 |         where id = $1
248 |           and claimed_by = $2
249 |           and status = 'processing'
250 |           and lease_expires_at > $4
251 |       `,
252 |       [deliveryId, workerId, responseStatus, at],
253 |     );
254 |     this.assertOwned(result.rowCount);
255 |   }
256 |
257 |   async retry(
258 |     deliveryId: string,
259 |     workerId: string,
260 |     input: {
261 |       responseStatus?: number;
262 |       errorCode: string;
263 |       nextAttemptAt: Date;
264 |       at: Date;
265 |     },
266 |   ): Promise<void> {
267 |     const result = await this.pool.query(
268 |       `
269 |         update webhook_deliveries
270 |         set status = 'retry_scheduled',
271 |           next_attempt_at = $3,
272 |           response_status = $4,
273 |           error_code = $5,
274 |           completed_at = null,
275 |           claimed_by = null,
276 |           claimed_at = null,
277 |           lease_expires_at = null,
278 |           updated_at = now()
279 |         where id = $1
280 |           and claimed_by = $2
281 |           and status = 'processing'
282 |           and lease_expires_at > $6
283 |       `,
284 |       [
285 |         deliveryId,
286 |         workerId,
287 |         input.nextAttemptAt,
288 |         input.responseStatus ?? null,
289 |         input.errorCode,
290 |         input.at,
291 |       ],
292 |     );
293 |     this.assertOwned(result.rowCount);
294 |   }
295 |
296 |   async failed(
297 |     deliveryId: string,
298 |     workerId: string,
299 |     input: { responseStatus?: number; errorCode: string; at: Date },
300 |   ): Promise<void> {
301 |     const result = await this.pool.query(
302 |       `
303 |         update webhook_deliveries
304 |         set status = 'failed',
305 |           response_status = $3,
306 |           error_code = $4,
307 |           completed_at = $5,
308 |           claimed_by = null,
309 |           claimed_at = null,
310 |           lease_expires_at = null,
311 |           updated_at = now()
312 |         where id = $1
313 |           and claimed_by = $2
314 |           and status in ('claimed', 'processing')
315 |           and lease_expires_at > $5
316 |       `,
317 |       [deliveryId, workerId, input.responseStatus ?? null, input.errorCode, input.at],
318 |     );
319 |     this.assertOwned(result.rowCount);
320 |   }
321 |
322 |   async snapshot(at = new Date()): Promise<DurableQueueSnapshot> {
323 |     const result = await this.pool.query<{
324 |       queued: number;
325 |       retry_scheduled: number;
326 |       claimed: number;
327 |       processing: number;
328 |       failed: number;
329 |       oldest_ready_age_ms: number;
330 |     }>(
331 |       `
332 |         select
333 |           count(*) filter (where status = 'queued')::int as queued,
334 |           count(*) filter (where status = 'retry_scheduled')::int as retry_scheduled,
335 |           count(*) filter (where status = 'claimed')::int as claimed,
336 |           count(*) filter (where status = 'processing')::int as processing,
337 |           count(*) filter (where status = 'failed')::int as failed,
338 |           coalesce(
339 |             extract(epoch from ($1 - min(coalesce(next_attempt_at, created_at)) filter (
340 |               where status in ('queued', 'retry_scheduled')
341 |                 and coalesce(next_attempt_at, created_at) <= $1
342 |             ))) * 1000,
343 |             0
344 |           )::double precision as oldest_ready_age_ms
345 |         from webhook_deliveries
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
362 |   repositoryFor(
363 |     delivery: ClaimedWebhookDelivery,
364 |     workerId: string,
365 |     beforeTransition: () => Promise<void> = async () => undefined,
366 |   ): WebhookDeliveryRepository {
367 |     const assertIdentity = (endpointId: string, eventId: string): void => {
368 |       if (endpointId !== delivery.endpointId || eventId !== delivery.eventId) {
369 |         throw new WebhookDeliveryLeaseError('Webhook delivery identity does not match the claim');
370 |       }
371 |     };
372 |     return {
373 |       markDelivered: async (input) => {
374 |         assertIdentity(input.endpointId, input.eventId);
375 |         await beforeTransition();
376 |         await this.delivered(delivery.id, workerId, input.responseStatus, input.at);
377 |       },
378 |       markRetry: async (input) => {
379 |         assertIdentity(input.endpointId, input.eventId);
380 |         await beforeTransition();
381 |         await this.retry(delivery.id, workerId, input);
382 |       },
383 |       markFailed: async (input) => {
384 |         assertIdentity(input.endpointId, input.eventId);
385 |         await beforeTransition();
386 |         await this.failed(delivery.id, workerId, input);
387 |       },
388 |     };
389 |   }
390 |
391 |   private assertOwned(rowCount: number | null): void {
392 |     if (rowCount !== 1) throw new WebhookDeliveryLeaseError();
393 |   }
394 | }
395 |
```

### workers/event-worker/src/runner.ts

Bytes: 8680
SHA-256: 1db100d81d60aa7927247ffb7a0ece0618f2ada04ae748c04508b6e4f48ab6fe
Lines: 1-263 of 263

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import { LeaseHeartbeat } from '@ozzyl/database';
  4 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  5 | import {
  6 |   createMetricRecorder,
  7 |   createStructuredLogger,
  8 |   createTracer,
  9 |   observeRepositoryOperation,
 10 |   parsePersistedTraceContext,
 11 |   recordDurableQueueSnapshot,
 12 |   recordWorkerClaimFailure,
 13 |   type RepositoryMetricOperation,
 14 | } from '@ozzyl/observability';
 15 | import type { DomainEvent } from '@ozzyl/shared-types';
 16 | import { EventWorker } from './index.js';
 17 | import {
 18 |   PostgresWebhookDeliveryQueue,
 19 |   WebhookDeliveryLeaseError,
 20 |   type ClaimedWebhookDelivery,
 21 | } from './postgres.js';
 22 |
 23 | const required = (name: string): string => {
 24 |   const value = process.env[name];
 25 |   if (!value) throw new Error(`${name} is required`);
 26 |   return value;
 27 | };
 28 |
 29 | const positiveInteger = (name: string, fallback: number): number => {
 30 |   const value = Number(process.env[name] ?? fallback);
 31 |   if (!Number.isSafeInteger(value) || value <= 0) {
 32 |     throw new Error(`${name} must be a positive integer`);
 33 |   }
 34 |   return value;
 35 | };
 36 |
 37 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 38 | const cipher = new AesGcmEnvelopeCipher(
 39 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 40 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 41 | );
 42 | const pollMs = positiveInteger('EVENT_WORKER_POLL_MS', 5_000);
 43 | const queueMetricsMs = positiveInteger('EVENT_WORKER_QUEUE_METRICS_MS', 30_000);
 44 | const leaseMs = positiveInteger('EVENT_WORKER_LEASE_MS', 60_000);
 45 | const leaseRenewMs = positiveInteger('EVENT_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
 46 | const timeoutMs = positiveInteger('WEBHOOK_TIMEOUT_MS', 5_000);
 47 | const maxAttempts = positiveInteger('EVENT_WORKER_MAX_ATTEMPTS', 5);
 48 | if (leaseMs <= timeoutMs + 5_000) {
 49 |   throw new Error('EVENT_WORKER_LEASE_MS must exceed WEBHOOK_TIMEOUT_MS by more than 5000ms');
 50 | }
 51 | if (leaseRenewMs * 2 > leaseMs) {
 52 |   throw new Error('EVENT_WORKER_LEASE_RENEW_MS must not exceed half the lease');
 53 | }
 54 | const workerId = process.env.EVENT_WORKER_ID ?? `event-${randomUUID()}`;
 55 | const log = createStructuredLogger({
 56 |   service: 'event-worker',
 57 |   environment: process.env.NODE_ENV ?? 'development',
 58 | });
 59 | const metrics = createMetricRecorder({
 60 |   service: 'event-worker',
 61 |   environment: process.env.NODE_ENV ?? 'development',
 62 | });
 63 | const tracer = createTracer({
 64 |   service: 'event-worker',
 65 |   environment: process.env.NODE_ENV ?? 'development',
 66 | });
 67 | const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs, maxAttempts });
 68 | let stopping = false;
 69 | let nextQueueMetricsAt = 0;
 70 |
 71 | const observeQueue = <T>(
 72 |   operation: RepositoryMetricOperation,
 73 |   task: () => Promise<T>,
 74 |   isEmpty?: (value: T) => boolean,
 75 | ): Promise<T> =>
 76 |   observeRepositoryOperation(
 77 |     metrics,
 78 |     {
 79 |       repositoryType: 'webhook_queue',
 80 |       operation,
 81 |       ...(isEmpty === undefined ? {} : { isEmpty }),
 82 |     },
 83 |     task,
 84 |   );
 85 |
 86 | async function recordQueueMetricsIfDue(): Promise<void> {
 87 |   const now = Date.now();
 88 |   if (now < nextQueueMetricsAt) return;
 89 |   nextQueueMetricsAt = now + queueMetricsMs;
 90 |   const snapshot = await observeQueue('snapshot', () => queue.snapshot(new Date(now)));
 91 |   recordDurableQueueSnapshot(metrics, 'webhook_delivery', snapshot);
 92 | }
 93 |
 94 | async function run(): Promise<void> {
 95 |   log.info('event.worker.started', { worker_id: workerId });
 96 |   while (!stopping) {
 97 |     await recordQueueMetricsIfDue().catch((error) => logError(error, 'QUEUE_METRICS_FAILED'));
 98 |     const delivery = await observeQueue(
 99 |       'claim',
100 |       () => queue.claim(workerId),
101 |       (value) => value === null,
102 |     ).catch((error) => {
103 |       recordWorkerClaimFailure(metrics, 'webhook_delivery');
104 |       logError(error, 'EVENT_CLAIM_FAILED');
105 |       return null;
106 |     });
107 |     if (!delivery) {
108 |       await sleep(pollMs);
109 |       continue;
110 |     }
111 |
112 |     let heartbeat: LeaseHeartbeat | null = null;
113 |     try {
114 |       const startedAt = new Date();
115 |       await observeQueue('start', () => queue.started(delivery.id, workerId, startedAt));
116 |       heartbeat = new LeaseHeartbeat({
117 |         intervalMs: leaseRenewMs,
118 |         renew: (at) => observeQueue('renew', () => queue.renew(delivery.id, workerId, at)),
119 |       }).start();
120 |       const event = parseEvent(delivery);
121 |       if (!delivery.endpointActive) {
122 |         await heartbeat.stop();
123 |         await observeQueue('fail', () =>
124 |           queue.failed(delivery.id, workerId, {
125 |             errorCode: 'ENDPOINT_INACTIVE',
126 |             at: new Date(),
127 |           }),
128 |         );
129 |         heartbeat = null;
130 |         continue;
131 |       }
132 |       const signingSecret= [REDACTED_SECRET](delivery);
133 |       const repository = queue.repositoryFor(
134 |         delivery,
135 |         workerId,
136 |         () => heartbeat?.stop() ?? Promise.resolve(),
137 |       );
138 |       const worker = new EventWorker(
139 |         {
140 |           markDelivered: (input) => observeQueue('complete', () => repository.markDelivered(input)),
141 |           markRetry: (input) => observeQueue('retry', () => repository.markRetry(input)),
142 |           markFailed: (input) => observeQueue('fail', () => repository.markFailed(input)),
143 |         },
144 |         {
145 |           timeoutMs,
146 |           maxAttempts,
147 |           metrics,
148 |           tracer,
149 |         },
150 |       );
151 |       const traceContext = parsePersistedTraceContext(delivery.traceContext);
152 |       await worker.deliver({
153 |         endpoint: {
154 |           id: delivery.endpointId,
155 |           url: delivery.endpointUrl,
156 |           signingSecret,
157 |           active: true,
158 |         },
159 |         event,
160 |         attempt: delivery.attempts + 1,
161 |         signal: heartbeat.signal,
162 |         ...(traceContext === null ? {} : { traceContext }),
163 |       });
164 |       await heartbeat.stopQuietly();
165 |       heartbeat = null;
166 |     } catch (error) {
167 |       let failure = error;
168 |       if (heartbeat) {
169 |         try {
170 |           await heartbeat.stop();
171 |         } catch (leaseError) {
172 |           failure = leaseError;
173 |         }
174 |         heartbeat = null;
175 |       }
176 |       if (!(failure instanceof WebhookDeliveryLeaseError)) {
177 |         const code = errorCode(failure, 'EVENT_DELIVERY_FAILED');
178 |         await observeQueue('fail', () =>
179 |           queue.failed(delivery.id, workerId, { errorCode: code, at: new Date() }),
180 |         ).catch((stateError) => logError(stateError, 'EVENT_FAILURE_STATE_LOST'));
181 |       }
182 |       logError(failure, 'EVENT_DELIVERY_FAILED');
183 |     }
184 |   }
185 |   await pool.end();
186 | }
187 |
188 | function parseEvent(delivery: ClaimedWebhookDelivery): DomainEvent {
189 |   const value = delivery.eventPayload;
190 |   if (!value || typeof value !== 'object') throw coded('INVALID_EVENT_PAYLOAD');
191 |   const event = value as Record<string, unknown>;
192 |   const allowedTypes = new Set([
193 |     'assessment.completed',
194 |     'verification.verified',
195 |     'verification.failed',
196 |     'courier.connection_failed',
197 |     'order.outcome_recorded',
198 |     'usage.limit_warning',
199 |   ]);
200 |   if (
201 |     event.id !== delivery.eventId ||
202 |     event.type !== delivery.eventType ||
203 |     typeof event.type !== 'string' ||
204 |     !allowedTypes.has(event.type) ||
205 |     event.organizationId !== delivery.organizationId ||
206 |     (delivery.storeId === null
207 |       ? event.storeId !== undefined
208 |       : event.storeId !== delivery.storeId) ||
209 |     typeof event.occurredAt !== 'string' ||
210 |     Number.isNaN(Date.parse(event.occurredAt)) ||
211 |     new Date(event.occurredAt).getTime() !== delivery.occurredAt.getTime() ||
212 |     !event.payload ||
213 |     typeof event.payload !== 'object'
214 |   ) {
215 |     throw coded('INVALID_EVENT_PAYLOAD');
216 |   }
217 |   return event as unknown as DomainEvent;
218 | }
219 |
220 | function decryptSigningSecret(delivery: ClaimedWebhookDelivery): string {
221 |   try {
222 |     const value = cipher.decrypt<unknown>(
223 |       delivery.secretEncrypted,
224 |       `webhook-endpoint:${delivery.endpointId}`,
225 |     );
226 |     const signingSecret =
227 |       typeof value === 'string'
228 |         ? value
229 |         : value && typeof value === 'object' && 'signingSecret' in value
230 |           ? String(value.signingSecret)
231 |           : '';
232 |     if (signingSecret.length < 16) throw new Error('Signing secret is invalid');
233 |     return signingSecret;
234 |   } catch {
235 |     throw coded('WEBHOOK_SECRET_DECRYPTION_FAILED');
236 |   }
237 | }
238 |
239 | function coded(code: string): Error & { code: string } {
240 |   return Object.assign(new Error(code), { code });
241 | }
242 |
243 | function errorCode(error: unknown, fallback: string): string {
244 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
245 | }
246 |
247 | function logError(error: unknown, fallback: string): void {
248 |   log.error('event.worker.error', {
249 |     code: errorCode(error, fallback),
250 |     worker_id: workerId,
251 |   });
252 | }
253 |
254 | const sleep = (milliseconds: number): Promise<void> =>
255 |   new Promise((resolve) => setTimeout(resolve, milliseconds));
256 |
257 | const stop = (): void => {
258 |   stopping = true;
259 | };
260 | process.once('SIGTERM', stop);
261 | process.once('SIGINT', stop);
262 | await run();
263 |
```

### workers/verification-worker/src/index.test.ts

Bytes: 6888
SHA-256: 943b16d22f55e973ade04d0efbe4e68b6394e293763b66a943fcb665c899e117
Lines: 1-209 of 209

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import { createMetricRecorder, createTracer, type SpanPoint } from '@ozzyl/observability';
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
 33 |     const tracePoints: SpanPoint[] = [];
 34 |     const spanIds = ['bbbbbbbbbbbbbbbb', 'cccccccccccccccc'];
 35 |     const ticks = [10, 12, 16, 18];
 36 |     const provider = {
 37 |       send: vi.fn(async ({ message }: { message: string }) => {
 38 |         expect(message).toContain('123456');
 39 |         return { providerMessageId: 'msg_1', accepted: true };
 40 |       }),
 41 |     };
 42 |     const worker = new VerificationWorker(provider, state, {
 43 |       now: () => new Date('2026-07-17T10:00:00.000Z'),
 44 |       monotonicNow: () => ticks.shift() ?? 18,
 45 |       metrics: createMetricRecorder({
 46 |         service: 'verification-worker-test',
 47 |         environment: 'test',
 48 |         write: (line) => metricLines.push(line),
 49 |       }),
 50 |       tracer: createTracer({
 51 |         service: 'verification-worker-test',
 52 |         environment: 'test',
 53 |         clock: () => new Date('2026-07-28T00:00:00.000Z'),
 54 |         monotonicNow: () => 1,
 55 |         generateSpanId: () => spanIds.shift()!,
 56 |         write: (_line, point) => tracePoints.push(point),
 57 |       }),
 58 |     });
 59 |     await expect(
 60 |       worker.process({
 61 |         ...delivery,
 62 |         traceContext: {
 63 |           traceId: '11111111111111111111111111111111',
 64 |           spanId: 'aaaaaaaaaaaaaaaa',
 65 |           traceFlags: '01',
 66 |         },
 67 |       }),
 68 |     ).resolves.toEqual({
 69 |       status: 'delivered',
 70 |       providerMessageId: 'msg_1',
 71 |     });
 72 |     expect(state.delivered).toHaveBeenCalledOnce();
 73 |     expect(JSON.stringify(state.delivered.mock.calls)).not.toContain('123456');
 74 |     expect(metricLines.map(parseMetricLine)).toEqual([
 75 |       expect.objectContaining({
 76 |         name: 'ozzyl.provider.operations',
 77 |         attributes: {
 78 |           provider_type: 'verification_delivery',
 79 |           operation: 'send',
 80 |           outcome: 'success',
 81 |         },
 82 |       }),
 83 |       expect.objectContaining({
 84 |         name: 'ozzyl.provider.operation.duration',
 85 |         value: 4,
 86 |         attributes: {
 87 |           provider_type: 'verification_delivery',
 88 |           operation: 'send',
 89 |           outcome: 'success',
 90 |         },
 91 |       }),
 92 |       expect.objectContaining({
 93 |         name: 'ozzyl.worker.operations',
 94 |         attributes: {
 95 |           worker_type: 'verification_delivery',
 96 |           operation: 'send',
 97 |           outcome: 'completed',
 98 |         },
 99 |       }),
100 |       expect.objectContaining({
101 |         name: 'ozzyl.worker.operation.duration',
102 |         value: 8,
103 |         attributes: {
104 |           worker_type: 'verification_delivery',
105 |           operation: 'send',
106 |           outcome: 'completed',
107 |         },
108 |       }),
109 |     ]);
110 |     expect(metricLines.join('\n')).not.toContain('123456');
111 |     expect(metricLines.join('\n')).not.toContain('ver_1');
112 |     expect(state.delivered).toHaveBeenCalledWith('vjob_1', 'msg_1', expect.any(Date), {
113 |       traceParent: '00-11111111111111111111111111111111-bbbbbbbbbbbbbbbb-01',
114 |     });
115 |     expect(tracePoints).toEqual([
116 |       expect.objectContaining({
117 |         name: 'ozzyl.provider.operation',
118 |         trace_id: '11111111111111111111111111111111',
119 |         span_id: 'cccccccccccccccc',
120 |         parent_span_id: 'bbbbbbbbbbbbbbbb',
121 |         attributes: {
122 |           provider_type: 'verification_delivery',
123 |           operation: 'send',
124 |           outcome: 'success',
125 |         },
126 |       }),
127 |       expect.objectContaining({
128 |         name: 'ozzyl.worker.operation',
129 |         trace_id: '11111111111111111111111111111111',
130 |         span_id: 'bbbbbbbbbbbbbbbb',
131 |         parent_span_id: 'aaaaaaaaaaaaaaaa',
132 |         attributes: {
133 |           worker_type: 'verification_delivery',
134 |           operation: 'send',
135 |           outcome: 'completed',
136 |         },
137 |       }),
138 |     ]);
139 |     expect(JSON.stringify(tracePoints)).not.toMatch(/123456|01712345678|ver_1|vjob_1|org_1|sto_1/);
140 |   });
141 |
142 |   it('schedules retryable provider failures with bounded backoff', async () => {
143 |     const state = reporter();
144 |     const worker = new VerificationWorker(
145 |       {
146 |         async send() {
147 |           throw new OtpProviderError('PROVIDER_UNAVAILABLE', true, 'temporary outage');
148 |         },
149 |       },
150 |       state,
151 |       { now: () => new Date('2026-07-17T10:00:00.000Z') },
152 |     );
153 |     const result = await worker.process(delivery);
154 |     expect(result).toMatchObject({ status: 'retry_scheduled', errorCode: 'PROVIDER_UNAVAILABLE' });
155 |     expect(state.retry).toHaveBeenCalledOnce();
156 |     expect(state.failed).not.toHaveBeenCalled();
157 |   });
158 |
159 |   it('fails provider rejection without retrying', async () => {
160 |     const state = reporter();
161 |     const worker = new VerificationWorker(
162 |       {
163 |         async send() {
164 |           return { providerMessageId: 'rejected', accepted: false };
165 |         },
166 |       },
167 |       state,
168 |       { now: () => new Date('2026-07-17T10:00:00.000Z') },
169 |     );
170 |     await expect(worker.process(delivery)).resolves.toEqual({
171 |       status: 'failed',
172 |       errorCode: 'OTP_PROVIDER_REJECTED',
173 |     });
174 |     expect(state.failed).toHaveBeenCalledOnce();
175 |     expect(state.retry).not.toHaveBeenCalled();
176 |   });
177 |
178 |   it('aborts an active OTP request when the worker lease is lost', async () => {
179 |     const state = reporter();
180 |     const provider = {
181 |       send: vi.fn(
182 |         async ({ signal }: { signal?: AbortSignal }) =>
183 |           new Promise<{ providerMessageId: string; accepted: boolean }>((_resolve, reject) => {
184 |             signal?.addEventListener(
185 |               'abort',
186 |               () => reject(new DOMException('Aborted', 'AbortError')),
187 |               { once: true },
188 |             );
189 |           }),
190 |       ),
191 |     };
192 |     const worker = new VerificationWorker(provider, state, {
193 |       timeoutMs: 60_000,
194 |       now: () => new Date('2026-07-17T10:00:00.000Z'),
195 |     });
196 |     const controller = new AbortController();
197 |     const result = worker.process({ ...delivery, signal: controller.signal });
198 |
199 |     controller.abort(
200 |       Object.assign(new Error('lease lost'), { code: 'VERIFICATION_DELIVERY_LEASE_LOST' }),
201 |     );
202 |     await expect(result).resolves.toMatchObject({
203 |       status: 'retry_scheduled',
204 |       errorCode: 'OTP_PROVIDER_TIMEOUT',
205 |     });
206 |     expect(state.retry).toHaveBeenCalledOnce();
207 |   });
208 | });
209 |
```

### workers/verification-worker/src/index.ts

Bytes: 7767
SHA-256: ac53487c3e41cddcd91a78ca1337b214bddd75454a2f2fc53ea74afaf9feadb9
Lines: 1-233 of 233

```typescript
  1 | import {
  2 |   endProviderOperationSpan,
  3 |   endWorkerOperationSpan,
  4 |   recordProviderOperation,
  5 |   recordWorkerOperation,
  6 |   startProviderOperationSpan,
  7 |   startWorkerOperationSpan,
  8 |   toPersistedTraceContext,
  9 |   type MetricRecorder,
 10 |   type PersistedTraceContext,
 11 |   type TraceContext,
 12 |   type Tracer,
 13 | } from '@ozzyl/observability';
 14 | import { OtpProviderError, formatOtpMessage, type OtpDeliveryProvider } from '@ozzyl/verification';
 15 |
 16 | export interface VerificationDelivery {
 17 |   jobId: string;
 18 |   verificationId: string;
 19 |   organizationId: string;
 20 |   storeId: string;
 21 |   phone: string;
 22 |   otp: string;
 23 |   purpose: string;
 24 |   expiresAt: Date;
 25 |   attempt: number;
 26 |   signal?: AbortSignal;
 27 |   traceContext?: TraceContext;
 28 | }
 29 |
 30 | export interface VerificationDeliveryReporter {
 31 |   delivered(
 32 |     jobId: string,
 33 |     providerMessageId: string,
 34 |     at: Date,
 35 |     traceContext?: PersistedTraceContext,
 36 |   ): Promise<void>;
 37 |   retry(
 38 |     jobId: string,
 39 |     errorCode: string,
 40 |     nextAttemptAt: Date,
 41 |     at: Date,
 42 |     traceContext?: PersistedTraceContext,
 43 |   ): Promise<void>;
 44 |   failed(
 45 |     jobId: string,
 46 |     errorCode: string,
 47 |     at: Date,
 48 |     traceContext?: PersistedTraceContext,
 49 |   ): Promise<void>;
 50 | }
 51 |
 52 | export type VerificationDeliveryResult =
 53 |   | { status: 'delivered'; providerMessageId: string }
 54 |   | { status: 'retry_scheduled'; errorCode: string; nextAttemptAt: string }
 55 |   | { status: 'failed'; errorCode: string };
 56 |
 57 | export class VerificationWorker {
 58 |   private readonly maxAttempts: number;
 59 |   private readonly timeoutMs: number;
 60 |   private readonly now: () => Date;
 61 |   private readonly metrics: MetricRecorder | undefined;
 62 |   private readonly tracer: Tracer | undefined;
 63 |   private readonly monotonicNow: () => number;
 64 |
 65 |   constructor(
 66 |     private readonly provider: OtpDeliveryProvider,
 67 |     private readonly reporter: VerificationDeliveryReporter,
 68 |     options: {
 69 |       maxAttempts?: number;
 70 |       timeoutMs?: number;
 71 |       now?: () => Date;
 72 |       metrics?: MetricRecorder;
 73 |       tracer?: Tracer;
 74 |       monotonicNow?: () => number;
 75 |     } = {},
 76 |   ) {
 77 |     this.maxAttempts = options.maxAttempts ?? 5;
 78 |     this.timeoutMs = options.timeoutMs ?? 10_000;
 79 |     this.now = options.now ?? (() => new Date());
 80 |     this.metrics = options.metrics;
 81 |     this.tracer = options.tracer;
 82 |     this.monotonicNow = options.monotonicNow ?? (() => Date.now());
 83 |   }
 84 |
 85 |   async process(delivery: VerificationDelivery): Promise<VerificationDeliveryResult> {
 86 |     const monotonicStartedAt = this.monotonicNow();
 87 |     const span = startWorkerOperationSpan(this.tracer, {
 88 |       workerType: 'verification_delivery',
 89 |       operation: 'send',
 90 |       ...(delivery.traceContext === undefined ? {} : { parent: delivery.traceContext }),
 91 |     });
 92 |     try {
 93 |       const result = await this.processDelivery(delivery, span.context);
 94 |       const outcome =
 95 |         result.status === 'delivered'
 96 |           ? 'completed'
 97 |           : result.status === 'retry_scheduled'
 98 |             ? 'retry_scheduled'
 99 |             : 'failed';
100 |       recordWorkerOperation(this.metrics, {
101 |         workerType: 'verification_delivery',
102 |         operation: 'send',
103 |         outcome,
104 |         durationMs: this.monotonicNow() - monotonicStartedAt,
105 |       });
106 |       endWorkerOperationSpan(span, outcome);
107 |       return result;
108 |     } catch (error) {
109 |       recordWorkerOperation(this.metrics, {
110 |         workerType: 'verification_delivery',
111 |         operation: 'send',
112 |         outcome: 'failed',
113 |         durationMs: this.monotonicNow() - monotonicStartedAt,
114 |       });
115 |       endWorkerOperationSpan(span, 'failed');
116 |       throw error;
117 |     }
118 |   }
119 |
120 |   private async processDelivery(
121 |     delivery: VerificationDelivery,
122 |     traceContext: TraceContext,
123 |   ): Promise<VerificationDeliveryResult> {
124 |     const startedAt = this.now();
125 |     if (delivery.expiresAt.getTime() <= startedAt.getTime() + this.timeoutMs) {
126 |       await this.reporter.failed(
127 |         delivery.jobId,
128 |         'OTP_EXPIRED_BEFORE_DELIVERY',
129 |         startedAt,
130 |         toPersistedTraceContext(traceContext),
131 |       );
132 |       return { status: 'failed', errorCode: 'OTP_EXPIRED_BEFORE_DELIVERY' };
133 |     }
134 |
135 |     const controller = new AbortController();
136 |     const abortFromCaller = (): void => controller.abort(delivery.signal?.reason);
137 |     if (delivery.signal?.aborted) abortFromCaller();
138 |     else delivery.signal?.addEventListener('abort', abortFromCaller, { once: true });
139 |     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
140 |     const providerStartedAt = this.monotonicNow();
141 |     const providerSpan = startProviderOperationSpan(this.tracer, {
142 |       providerType: 'verification_delivery',
143 |       operation: 'send',
144 |       parent: traceContext,
145 |     });
146 |     try {
147 |       const result = await this.provider.send({
148 |         phone: delivery.phone,
149 |         message: formatOtpMessage(delivery.otp),
150 |         idempotencyKey: delivery.verificationId,
151 |         signal: controller.signal,
152 |       });
153 |       if (!result.accepted) {
154 |         recordProviderOperation(this.metrics, {
155 |           providerType: 'verification_delivery',
156 |           operation: 'send',
157 |           outcome: 'permanent_failure',
158 |           durationMs: this.monotonicNow() - providerStartedAt,
159 |         });
160 |         endProviderOperationSpan(providerSpan, 'permanent_failure');
161 |         await this.reporter.failed(
162 |           delivery.jobId,
163 |           'OTP_PROVIDER_REJECTED',
164 |           this.now(),
165 |           toPersistedTraceContext(traceContext),
166 |         );
167 |         return { status: 'failed', errorCode: 'OTP_PROVIDER_REJECTED' };
168 |       }
169 |       recordProviderOperation(this.metrics, {
170 |         providerType: 'verification_delivery',
171 |         operation: 'send',
172 |         outcome: 'success',
173 |         durationMs: this.monotonicNow() - providerStartedAt,
174 |       });
175 |       endProviderOperationSpan(providerSpan, 'success');
176 |       await this.reporter.delivered(
177 |         delivery.jobId,
178 |         result.providerMessageId,
179 |         this.now(),
180 |         toPersistedTraceContext(traceContext),
181 |       );
182 |       return { status: 'delivered', providerMessageId: result.providerMessageId };
183 |     } catch (error) {
184 |       const classified = classifyProviderError(error);
185 |       const providerOutcome = classified.retryable ? 'retryable_failure' : 'permanent_failure';
186 |       recordProviderOperation(this.metrics, {
187 |         providerType: 'verification_delivery',
188 |         operation: 'send',
189 |         outcome: providerOutcome,
190 |         durationMs: this.monotonicNow() - providerStartedAt,
191 |       });
192 |       endProviderOperationSpan(providerSpan, providerOutcome);
193 |       const at = this.now();
194 |       if (classified.retryable && delivery.attempt < this.maxAttempts) {
195 |         const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, delivery.attempt - 1) * 30_000);
196 |         const nextAttemptAt = new Date(at.getTime() + delayMs);
197 |         await this.reporter.retry(
198 |           delivery.jobId,
199 |           classified.code,
200 |           nextAttemptAt,
201 |           at,
202 |           toPersistedTraceContext(traceContext),
203 |         );
204 |         return {
205 |           status: 'retry_scheduled',
206 |           errorCode: classified.code,
207 |           nextAttemptAt: nextAttemptAt.toISOString(),
208 |         };
209 |       }
210 |       await this.reporter.failed(
211 |         delivery.jobId,
212 |         classified.code,
213 |         at,
214 |         toPersistedTraceContext(traceContext),
215 |       );
216 |       return { status: 'failed', errorCode: classified.code };
217 |     } finally {
218 |       clearTimeout(timeout);
219 |       delivery.signal?.removeEventListener('abort', abortFromCaller);
220 |     }
221 |   }
222 | }
223 |
224 | function classifyProviderError(error: unknown): { code: string; retryable: boolean } {
225 |   if (error instanceof OtpProviderError) {
226 |     return { code: error.code, retryable: error.retryable };
227 |   }
228 |   if (error instanceof Error && error.name === 'AbortError') {
229 |     return { code: 'OTP_PROVIDER_TIMEOUT', retryable: true };
230 |   }
231 |   return { code: 'OTP_PROVIDER_ERROR', retryable: true };
232 | }
233 |
```

### workers/verification-worker/src/postgres.ts

Bytes: 18894
SHA-256: 1b8cecbe55ba16798b3282bbbe5838d84a054937f28dbfa32b5cabb74a718ac1
Lines: 1-545 of 545

```typescript
  1 | import type { Pool, PoolClient } from 'pg';
  2 | import type { DurableQueueSnapshot, PersistedTraceContext } from '@ozzyl/observability';
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
 17 |   traceContext?: PersistedTraceContext;
 18 | }
 19 |
 20 | export class VerificationDeliveryLeaseError extends Error {
 21 |   readonly code = 'VERIFICATION_DELIVERY_LEASE_LOST';
 22 |
 23 |   constructor(message = 'Verification delivery lease is no longer owned by this worker') {
 24 |     super(message);
 25 |     this.name = 'VerificationDeliveryLeaseError';
 26 |   }
 27 | }
 28 |
 29 | export class PostgresVerificationDeliveryQueue {
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
 41 |   async claim(workerId: string, at = new Date()): Promise<ClaimedVerificationDelivery | null> {
 42 |     const client = await this.pool.connect();
 43 |     try {
 44 |       await client.query('begin');
 45 |       const mismatched = await client.query<{ verification_session_id: string }>(
 46 |         `
 47 |           update verification_jobs vj
 48 |           set status = 'failed', error_code = 'VERIFICATION_SCOPE_MISMATCH',
 49 |             completed_at = $1, claimed_by = null, claimed_at = null,
 50 |             lease_expires_at = null, updated_at = now()
 51 |           where vj.status not in ('delivered', 'failed')
 52 |             and not exists (
 53 |               select 1
 54 |               from verification_sessions vs
 55 |               join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
 56 |               where vs.id = vj.verification_session_id
 57 |                 and vs.organization_id = vj.organization_id
 58 |                 and vs.store_id = vj.store_id
 59 |             )
 60 |           returning vj.verification_session_id
 61 |         `,
 62 |         [at],
 63 |       );
 64 |       for (const row of mismatched.rows) {
 65 |         await this.failSession(
 66 |           client,
 67 |           row.verification_session_id,
 68 |           'VERIFICATION_SCOPE_MISMATCH',
 69 |           at,
 70 |         );
 71 |       }
 72 |       await this.failExpired(client, at);
 73 |       await this.failExhausted(client, at);
 74 |
 75 |       const leaseExpiresAt = new Date(at.getTime() + this.leaseMs);
 76 |       const result = await client.query<{
 77 |         id: string;
 78 |         verification_session_id: string;
 79 |         organization_id: string;
 80 |         store_id: string;
 81 |         purpose: string;
 82 |         phone_hash: string;
 83 |         otp_hash: string;
 84 |         payload_encrypted: string;
 85 |         expires_at: Date;
 86 |         attempts: number;
 87 |         trace_parent: string | null;
 88 |         trace_state: string | null;
 89 |       }>(
 90 |         `
 91 |           with candidate as (
 92 |             select vj.id
 93 |             from verification_jobs vj
 94 |             join verification_sessions vs
 95 |               on vs.id = vj.verification_session_id
 96 |               and vs.organization_id = vj.organization_id
 97 |               and vs.store_id = vj.store_id
 98 |             join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
 99 |             join lateral (
100 |               select oa.otp_hash
101 |               from otp_attempts oa
102 |               where oa.verification_session_id = vs.id
103 |               order by oa.created_at desc, oa.id desc
104 |               limit 1
105 |             ) latest_attempt on true
106 |             where vj.job_type = 'send_otp'
107 |               and vj.attempts < $4
108 |               and vs.status = 'queued'
109 |               and vs.expires_at > $2
110 |               and (
111 |                 (vj.status in ('queued', 'retry_scheduled')
112 |                   and coalesce(vj.next_attempt_at, vj.created_at) <= $2)
113 |                 or (vj.status in ('claimed', 'processing')
114 |                   and (vj.lease_expires_at is null or vj.lease_expires_at <= $2))
115 |               )
116 |             order by
117 |               case when vj.status in ('claimed', 'processing') then 0 else 1 end,
118 |               coalesce(vj.lease_expires_at, vj.next_attempt_at, vj.created_at),
119 |               vj.id
120 |             for update of vj skip locked
121 |             limit 1
122 |           ), claimed as (
123 |             update verification_jobs vj
124 |             set status = 'claimed', claimed_by = $1, claimed_at = $2,
125 |               lease_expires_at = $3, completed_at = null, updated_at = now()
126 |             from candidate
127 |             where vj.id = candidate.id
128 |             returning vj.*
129 |           )
130 |           select
131 |             claimed.id, claimed.verification_session_id, claimed.organization_id,
132 |             claimed.store_id, vs.purpose, vs.phone_hash, oa.otp_hash,
133 |             claimed.payload_encrypted, vs.expires_at, claimed.attempts,
134 |             claimed.trace_parent, claimed.trace_state
135 |           from claimed
136 |           join verification_sessions vs on vs.id = claimed.verification_session_id
137 |           join lateral (
138 |             select otp_hash from otp_attempts
139 |             where verification_session_id = vs.id
140 |             order by created_at desc, id desc
141 |             limit 1
142 |           ) oa on true
143 |         `,
144 |         [workerId, at, leaseExpiresAt, this.maxAttempts],
145 |       );
146 |       await client.query('commit');
147 |       const row = result.rows[0];
148 |       return row
149 |         ? {
150 |             id: row.id,
151 |             verificationId: row.verification_session_id,
152 |             organizationId: row.organization_id,
153 |             storeId: row.store_id,
154 |             purpose: row.purpose,
155 |             phoneHash: row.phone_hash,
156 |             otpHash: row.otp_hash,
157 |             payloadEncrypted: row.payload_encrypted,
158 |             expiresAt: row.expires_at,
159 |             attempts: row.attempts,
160 |             ...(row.trace_parent === null
161 |               ? {}
162 |               : {
163 |                   traceContext: {
164 |                     traceParent: row.trace_parent,
165 |                     ...(row.trace_state === null ? {} : { traceState: row.trace_state }),
166 |                   },
167 |                 }),
168 |           }
169 |         : null;
170 |     } catch (error) {
171 |       await client.query('rollback').catch(() => undefined);
172 |       throw error;
173 |     } finally {
174 |       client.release();
175 |     }
176 |   }
177 |
178 |   async started(jobId: string, workerId: string, at = new Date()): Promise<void> {
179 |     const result = await this.pool.query(
180 |       `
181 |         update verification_jobs vj
182 |         set status = 'processing', attempts = attempts + 1,
183 |           lease_expires_at = $4, updated_at = now()
184 |         from verification_sessions vs
185 |         where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'claimed'
186 |           and vj.lease_expires_at > $3
187 |           and vs.id = vj.verification_session_id
188 |           and vs.organization_id = vj.organization_id
189 |           and vs.store_id = vj.store_id
190 |           and vs.status = 'queued' and vs.expires_at > $3
191 |       `,
192 |       [jobId, workerId, at, new Date(at.getTime() + this.leaseMs)],
193 |     );
194 |     this.assertOwned(result.rowCount);
195 |   }
196 |
197 |   async renew(jobId: string, workerId: string, at = new Date()): Promise<void> {
198 |     const result = await this.pool.query(
199 |       `
200 |         update verification_jobs vj
201 |         set lease_expires_at = $3, updated_at = now()
202 |         from verification_sessions vs
203 |         where vj.id = $1 and vj.claimed_by = $2
204 |           and vj.status in ('claimed', 'processing')
205 |           and vj.lease_expires_at > $4
206 |           and vs.id = vj.verification_session_id
207 |           and vs.organization_id = vj.organization_id
208 |           and vs.store_id = vj.store_id
209 |           and vs.status = 'queued' and vs.expires_at > $4
210 |       `,
211 |       [jobId, workerId, new Date(at.getTime() + this.leaseMs), at],
212 |     );
213 |     this.assertOwned(result.rowCount);
214 |   }
215 |
216 |   async delivered(
217 |     jobId: string,
218 |     workerId: string,
219 |     providerMessageId: string,
220 |     at = new Date(),
221 |   ): Promise<void> {
222 |     const client = await this.pool.connect();
223 |     try {
224 |       await client.query('begin');
225 |       const result = await client.query<{ verification_session_id: string }>(
226 |         `
227 |           update verification_jobs vj
228 |           set status = 'delivered', provider_message_id = $3, error_code = null,
229 |             completed_at = $4, claimed_by = null, claimed_at = null,
230 |             lease_expires_at = null, updated_at = now()
231 |           from verification_sessions vs
232 |           where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'processing'
233 |             and vj.lease_expires_at > $4
234 |             and vs.id = vj.verification_session_id
235 |             and vs.organization_id = vj.organization_id
236 |             and vs.store_id = vj.store_id
237 |             and vs.status = 'queued' and vs.expires_at > $4
238 |           returning vj.verification_session_id
239 |         `,
240 |         [jobId, workerId, providerMessageId, at],
241 |       );
242 |       this.assertOwned(result.rowCount);
243 |       const verificationId = result.rows[0]?.verification_session_id;
244 |       await client.query(
245 |         `update verification_sessions set status = 'pending', updated_at = now() where id = $1`,
246 |         [verificationId],
247 |       );
248 |       await client.query(
249 |         `
250 |           update otp_attempts set provider_message_id = $2, sent_at = $3,
251 |             failed_at = null, updated_at = now()
252 |           where id = (
253 |             select id from otp_attempts where verification_session_id = $1
254 |             order by created_at desc, id desc limit 1
255 |           )
256 |         `,
257 |         [verificationId, providerMessageId, at],
258 |       );
259 |       await client.query('commit');
260 |     } catch (error) {
261 |       await client.query('rollback').catch(() => undefined);
262 |       throw error;
263 |     } finally {
264 |       client.release();
265 |     }
266 |   }
267 |
268 |   async retry(
269 |     jobId: string,
270 |     workerId: string,
271 |     input: { errorCode: string; nextAttemptAt: Date; at: Date },
272 |   ): Promise<void> {
273 |     const result = await this.pool.query(
274 |       `
275 |         update verification_jobs vj
276 |         set status = 'retry_scheduled', next_attempt_at = $3, error_code = $4,
277 |           completed_at = null, claimed_by = null, claimed_at = null,
278 |           lease_expires_at = null, updated_at = now()
279 |         from verification_sessions vs
280 |         where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'processing'
281 |           and vj.lease_expires_at > $5
282 |           and vs.id = vj.verification_session_id
283 |           and vs.organization_id = vj.organization_id
284 |           and vs.store_id = vj.store_id
285 |       `,
286 |       [jobId, workerId, input.nextAttemptAt, input.errorCode, input.at],
287 |     );
288 |     this.assertOwned(result.rowCount);
289 |   }
290 |
291 |   async failed(
292 |     jobId: string,
293 |     workerId: string,
294 |     input: { errorCode: string; at: Date; traceContext?: PersistedTraceContext },
295 |   ): Promise<void> {
296 |     const client = await this.pool.connect();
297 |     try {
298 |       await client.query('begin');
299 |       const result = await client.query<{
300 |         verification_session_id: string;
301 |         organization_id: string;
302 |         store_id: string;
303 |       }>(
304 |         `
305 |           update verification_jobs vj
306 |           set status = 'failed', error_code = $3, completed_at = $4,
307 |             claimed_by = null, claimed_at = null, lease_expires_at = null,
308 |             updated_at = now()
309 |           from verification_sessions vs
310 |           where vj.id = $1 and vj.claimed_by = $2
311 |             and vj.status in ('claimed', 'processing')
312 |             and vj.lease_expires_at > $4
313 |             and vs.id = vj.verification_session_id
314 |             and vs.organization_id = vj.organization_id
315 |             and vs.store_id = vj.store_id
316 |           returning vj.verification_session_id, vj.organization_id, vj.store_id
317 |         `,
318 |         [jobId, workerId, input.errorCode, input.at],
319 |       );
320 |       this.assertOwned(result.rowCount);
321 |       const row = result.rows[0];
322 |       if (!row) throw new VerificationDeliveryLeaseError();
323 |       await this.failSession(
324 |         client,
325 |         row.verification_session_id,
326 |         input.errorCode,
327 |         input.at,
328 |         false,
329 |         input.traceContext,
330 |       );
331 |       await client.query('commit');
332 |     } catch (error) {
333 |       await client.query('rollback').catch(() => undefined);
334 |       throw error;
335 |     } finally {
336 |       client.release();
337 |     }
338 |   }
339 |
340 |   async snapshot(at = new Date()): Promise<DurableQueueSnapshot> {
341 |     const result = await this.pool.query<{
342 |       queued: number;
343 |       retry_scheduled: number;
344 |       claimed: number;
345 |       processing: number;
346 |       failed: number;
347 |       oldest_ready_age_ms: number;
348 |     }>(
349 |       `
350 |         select
351 |           count(*) filter (where status = 'queued')::int as queued,
352 |           count(*) filter (where status = 'retry_scheduled')::int as retry_scheduled,
353 |           count(*) filter (where status = 'claimed')::int as claimed,
354 |           count(*) filter (where status = 'processing')::int as processing,
355 |           count(*) filter (where status = 'failed')::int as failed,
356 |           coalesce(
357 |             extract(epoch from ($1 - min(coalesce(next_attempt_at, created_at)) filter (
358 |               where status in ('queued', 'retry_scheduled')
359 |                 and coalesce(next_attempt_at, created_at) <= $1
360 |             ))) * 1000,
361 |             0
362 |           )::double precision as oldest_ready_age_ms
363 |         from verification_jobs
364 |         where job_type = 'send_otp'
365 |       `,
366 |       [at],
367 |     );
368 |     const row = result.rows[0];
369 |     return {
370 |       depths: {
371 |         queued: row?.queued ?? 0,
372 |         retry_scheduled: row?.retry_scheduled ?? 0,
373 |         claimed: row?.claimed ?? 0,
374 |         processing: row?.processing ?? 0,
375 |         failed: row?.failed ?? 0,
376 |       },
377 |       oldestReadyAgeMs: Math.max(0, Number(row?.oldest_ready_age_ms ?? 0)),
378 |     };
379 |   }
380 |
381 |   reporterFor(
382 |     delivery: ClaimedVerificationDelivery,
383 |     workerId: string,
384 |     beforeTransition: () => Promise<void> = async () => undefined,
385 |   ): VerificationDeliveryReporter {
386 |     return {
387 |       delivered: async (jobId, providerMessageId, at) => {
388 |         this.assertIdentity(delivery, jobId);
389 |         await beforeTransition();
390 |         await this.delivered(jobId, workerId, providerMessageId, at);
391 |       },
392 |       retry: async (jobId, errorCode, nextAttemptAt, at) => {
393 |         this.assertIdentity(delivery, jobId);
394 |         await beforeTransition();
395 |         await this.retry(jobId, workerId, { errorCode, nextAttemptAt, at });
396 |       },
397 |       failed: async (jobId, errorCode, at, traceContext) => {
398 |         this.assertIdentity(delivery, jobId);
399 |         await beforeTransition();
400 |         await this.failed(jobId, workerId, {
401 |           errorCode,
402 |           at,
403 |           ...(traceContext === undefined ? {} : { traceContext }),
404 |         });
405 |       },
406 |     };
407 |   }
408 |
409 |   private async failExpired(client: PoolClient, at: Date): Promise<void> {
410 |     const expired = await client.query<{ verification_session_id: string }>(
411 |       `
412 |         update verification_jobs vj
413 |         set status = 'failed', error_code = 'OTP_EXPIRED_BEFORE_DELIVERY',
414 |           completed_at = $1, claimed_by = null, claimed_at = null,
415 |           lease_expires_at = null, updated_at = now()
416 |         from verification_sessions vs
417 |         where vj.verification_session_id = vs.id
418 |           and vj.organization_id = vs.organization_id and vj.store_id = vs.store_id
419 |           and vj.status not in ('delivered', 'failed') and vs.expires_at <= $1
420 |         returning vj.verification_session_id
421 |       `,
422 |       [at],
423 |     );
424 |     for (const row of expired.rows) {
425 |       await this.failSession(
426 |         client,
427 |         row.verification_session_id,
428 |         'OTP_EXPIRED_BEFORE_DELIVERY',
429 |         at,
430 |         true,
431 |       );
432 |     }
433 |   }
434 |
435 |   private async failExhausted(client: PoolClient, at: Date): Promise<void> {
436 |     const exhausted = await client.query<{ verification_session_id: string }>(
437 |       `
438 |         update verification_jobs
439 |         set status = 'failed', error_code = 'LEASE_EXPIRED', completed_at = $1,
440 |           claimed_by = null, claimed_at = null, lease_expires_at = null,
441 |           updated_at = now()
442 |         where status in ('claimed', 'processing')
443 |           and (lease_expires_at is null or lease_expires_at <= $1)
444 |           and attempts >= $2
445 |         returning verification_session_id
446 |       `,
447 |       [at, this.maxAttempts],
448 |     );
449 |     for (const row of exhausted.rows) {
450 |       await this.failSession(client, row.verification_session_id, 'LEASE_EXPIRED', at);
451 |     }
452 |   }
453 |
454 |   private async failSession(
455 |     client: PoolClient,
456 |     verificationId: string,
457 |     errorCode: string,
458 |     at: Date,
459 |     expired = false,
460 |     traceContext?: PersistedTraceContext,
461 |   ): Promise<void> {
462 |     const session = await client.query<{
463 |       organization_id: string;
464 |       store_id: string;
465 |       purpose: string;
466 |     }>(
467 |       `
468 |         update verification_sessions
469 |         set status = $2, updated_at = now()
470 |         where id = $1
471 |         returning organization_id, store_id, purpose
472 |       `,
473 |       [verificationId, expired ? 'expired' : 'delivery_failed'],
474 |     );
475 |     await client.query(
476 |       `
477 |         update otp_attempts set failed_at = $2, updated_at = now()
478 |         where verification_session_id = $1
479 |       `,
480 |       [verificationId, at],
481 |     );
482 |     const row = session.rows[0];
483 |     if (row) {
484 |       await enqueueVerificationFailure(
485 |         client,
486 |         {
487 |           id: `evt_verification_failed_${verificationId}`,
488 |           type: 'verification.failed',
489 |           organizationId: row.organization_id,
490 |           storeId: row.store_id,
491 |           occurredAt: at.toISOString(),
492 |           payload: { verificationId, purpose: row.purpose, errorCode },
493 |         },
494 |         traceContext,
495 |       );
496 |     }
497 |   }
498 |
499 |   private assertOwned(rowCount: number | null): void {
500 |     if (rowCount !== 1) throw new VerificationDeliveryLeaseError();
501 |   }
502 |
503 |   private assertIdentity(delivery: ClaimedVerificationDelivery, jobId: string): void {
504 |     if (delivery.id !== jobId) {
505 |       throw new VerificationDeliveryLeaseError(
506 |         'Verification delivery identity does not match claim',
507 |       );
508 |     }
509 |   }
510 | }
511 |
512 | async function enqueueVerificationFailure(
513 |   client: PoolClient,
514 |   event: DomainEvent,
515 |   traceContext?: PersistedTraceContext,
516 | ): Promise<void> {
517 |   await client.query(
518 |     `
519 |       insert into webhook_deliveries (
520 |         id, endpoint_id, organization_id, store_id, event_id, event_type,
521 |         event_payload, occurred_at, status, next_attempt_at, trace_parent, trace_state
522 |       )
523 |       select
524 |         'whd_' || md5(we.id || ':' || $1), we.id, $2, $3, $1, $4,
525 |         $5::jsonb, $6, 'queued', now(), $7, $8
526 |       from webhook_endpoints we
527 |       where we.organization_id = $2
528 |         and (we.store_id is null or we.store_id = $3)
529 |         and we.status = 'active'
530 |         and we.events @> jsonb_build_array($4::text)
531 |       on conflict (endpoint_id, event_id) do nothing
532 |     `,
533 |     [
534 |       event.id,
535 |       event.organizationId,
536 |       event.storeId ?? null,
537 |       event.type,
538 |       JSON.stringify(event),
539 |       event.occurredAt,
540 |       traceContext?.traceParent ?? null,
541 |       traceContext?.traceState ?? null,
542 |     ],
543 |   );
544 | }
545 |
```

### workers/verification-worker/src/runner.ts

Bytes: 7824
SHA-256: 7c70233ba64b6f8808f620dbd4fc761baa02b0846033c757dcbe22a91d8a406d
Lines: 1-219 of 219

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { Pool } from 'pg';
  3 | import { LeaseHeartbeat } from '@ozzyl/database';
  4 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  5 | import {
  6 |   createMetricRecorder,
  7 |   createStructuredLogger,
  8 |   createTracer,
  9 |   observeRepositoryOperation,
 10 |   parsePersistedTraceContext,
 11 |   recordDurableQueueSnapshot,
 12 |   recordWorkerClaimFailure,
 13 |   type RepositoryMetricOperation,
 14 | } from '@ozzyl/observability';
 15 | import type { OtpDeliveryProvider } from '@ozzyl/verification';
 16 | import { VerificationWorker } from './index.js';
 17 | import { PostgresVerificationDeliveryQueue, VerificationDeliveryLeaseError } from './postgres.js';
 18 | import { decryptAndValidateVerificationPayload } from './payload.js';
 19 |
 20 | const required = (name: string): string => {
 21 |   const value = process.env[name];
 22 |   if (!value) throw new Error(`${name} is required`);
 23 |   return value;
 24 | };
 25 |
 26 | const positiveInteger = (name: string, fallback: number): number => {
 27 |   const value = Number(process.env[name] ?? fallback);
 28 |   if (!Number.isSafeInteger(value) || value <= 0)
 29 |     throw new Error(`${name} must be a positive integer`);
 30 |   return value;
 31 | };
 32 |
 33 | const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
 34 | const cipher = new AesGcmEnvelopeCipher(
 35 |   Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
 36 |   required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
 37 | );
 38 | const otpSecret = required('OTP_HASH_SECRET');
 39 | const phoneHmacKey = required('PHONE_HMAC_KEY');
 40 | const pollMs = positiveInteger('VERIFICATION_WORKER_POLL_MS', 5_000);
 41 | const queueMetricsMs = positiveInteger('VERIFICATION_WORKER_QUEUE_METRICS_MS', 30_000);
 42 | const leaseMs = positiveInteger('VERIFICATION_WORKER_LEASE_MS', 60_000);
 43 | const leaseRenewMs = positiveInteger('VERIFICATION_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
 44 | const timeoutMs = positiveInteger('OTP_PROVIDER_TIMEOUT_MS', 10_000);
 45 | const maxAttempts = positiveInteger('VERIFICATION_WORKER_MAX_ATTEMPTS', 5);
 46 | if (leaseMs <= timeoutMs + 5_000) {
 47 |   throw new Error(
 48 |     'VERIFICATION_WORKER_LEASE_MS must exceed OTP_PROVIDER_TIMEOUT_MS by more than 5000ms',
 49 |   );
 50 | }
 51 | if (leaseRenewMs * 2 > leaseMs) {
 52 |   throw new Error('VERIFICATION_WORKER_LEASE_RENEW_MS must not exceed half the lease');
 53 | }
 54 | const workerId = process.env.VERIFICATION_WORKER_ID ?? `verification-${randomUUID()}`;
 55 | const log = createStructuredLogger({
 56 |   service: 'verification-worker',
 57 |   environment: process.env.NODE_ENV ?? 'development',
 58 | });
 59 | const metrics = createMetricRecorder({
 60 |   service: 'verification-worker',
 61 |   environment: process.env.NODE_ENV ?? 'development',
 62 | });
 63 | const tracer = createTracer({
 64 |   service: 'verification-worker',
 65 |   environment: process.env.NODE_ENV ?? 'development',
 66 | });
 67 | const provider = await loadProvider(required('OTP_PROVIDER_MODULE'));
 68 | const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs, maxAttempts });
 69 | let stopping = false;
 70 | let nextQueueMetricsAt = 0;
 71 |
 72 | const observeQueue = <T>(
 73 |   operation: RepositoryMetricOperation,
 74 |   task: () => Promise<T>,
 75 |   isEmpty?: (value: T) => boolean,
 76 | ): Promise<T> =>
 77 |   observeRepositoryOperation(
 78 |     metrics,
 79 |     {
 80 |       repositoryType: 'verification_queue',
 81 |       operation,
 82 |       ...(isEmpty === undefined ? {} : { isEmpty }),
 83 |     },
 84 |     task,
 85 |   );
 86 |
 87 | async function recordQueueMetricsIfDue(): Promise<void> {
 88 |   const now = Date.now();
 89 |   if (now < nextQueueMetricsAt) return;
 90 |   nextQueueMetricsAt = now + queueMetricsMs;
 91 |   const snapshot = await observeQueue('snapshot', () => queue.snapshot(new Date(now)));
 92 |   recordDurableQueueSnapshot(metrics, 'verification_delivery', snapshot);
 93 | }
 94 |
 95 | async function run(): Promise<void> {
 96 |   log.info('verification.worker.started', { worker_id: workerId });
 97 |   while (!stopping) {
 98 |     await recordQueueMetricsIfDue().catch((error) => logError(error, 'QUEUE_METRICS_FAILED'));
 99 |     const delivery = await observeQueue(
100 |       'claim',
101 |       () => queue.claim(workerId),
102 |       (value) => value === null,
103 |     ).catch((error) => {
104 |       recordWorkerClaimFailure(metrics, 'verification_delivery');
105 |       logError(error, 'VERIFICATION_CLAIM_FAILED');
106 |       return null;
107 |     });
108 |     if (!delivery) {
109 |       await sleep(pollMs);
110 |       continue;
111 |     }
112 |
113 |     let heartbeat: LeaseHeartbeat | null = null;
114 |     try {
115 |       await observeQueue('start', () => queue.started(delivery.id, workerId));
116 |       heartbeat = new LeaseHeartbeat({
117 |         intervalMs: leaseRenewMs,
118 |         renew: (at) => observeQueue('renew', () => queue.renew(delivery.id, workerId, at)),
119 |       }).start();
120 |       const payload = decryptAndValidateVerificationPayload(delivery, {
121 |         cipher,
122 |         phoneHmacKey,
123 |         otpSecret,
124 |       });
125 |       const reporter = queue.reporterFor(
126 |         delivery,
127 |         workerId,
128 |         () => heartbeat?.stop() ?? Promise.resolve(),
129 |       );
130 |       const worker = new VerificationWorker(
131 |         provider,
132 |         {
133 |           delivered: (jobId, providerMessageId, at) =>
134 |             observeQueue('complete', () => reporter.delivered(jobId, providerMessageId, at)),
135 |           retry: (jobId, errorCode, nextAttemptAt, at) =>
136 |             observeQueue('retry', () => reporter.retry(jobId, errorCode, nextAttemptAt, at)),
137 |           failed: (jobId, errorCode, at) =>
138 |             observeQueue('fail', () => reporter.failed(jobId, errorCode, at)),
139 |         },
140 |         {
141 |           maxAttempts,
142 |           timeoutMs,
143 |           metrics,
144 |           tracer,
145 |         },
146 |       );
147 |       const traceContext = parsePersistedTraceContext(delivery.traceContext);
148 |       await worker.process({
149 |         jobId: delivery.id,
150 |         verificationId: delivery.verificationId,
151 |         organizationId: delivery.organizationId,
152 |         storeId: delivery.storeId,
153 |         phone: payload.phone,
154 |         otp: payload.otp,
155 |         purpose: delivery.purpose,
156 |         expiresAt: delivery.expiresAt,
157 |         attempt: delivery.attempts + 1,
158 |         signal: heartbeat.signal,
159 |         ...(traceContext === null ? {} : { traceContext }),
160 |       });
161 |       await heartbeat.stopQuietly();
162 |       heartbeat = null;
163 |     } catch (error) {
164 |       let failure = error;
165 |       if (heartbeat) {
166 |         try {
167 |           await heartbeat.stop();
168 |         } catch (leaseError) {
169 |           failure = leaseError;
170 |         }
171 |         heartbeat = null;
172 |       }
173 |       if (!(failure instanceof VerificationDeliveryLeaseError)) {
174 |         const code = errorCode(failure, 'VERIFICATION_DELIVERY_FAILED');
175 |         await observeQueue('fail', () =>
176 |           queue.failed(delivery.id, workerId, { errorCode: code, at: new Date() }),
177 |         ).catch((stateError) => logError(stateError, 'VERIFICATION_FAILURE_STATE_LOST'));
178 |       }
179 |       logError(failure, 'VERIFICATION_DELIVERY_FAILED');
180 |     }
181 |   }
182 |   await pool.end();
183 | }
184 |
185 | async function loadProvider(moduleName: string): Promise<OtpDeliveryProvider> {
186 |   const loaded = (await import(moduleName)) as {
187 |     createOtpDeliveryProvider?: () => OtpDeliveryProvider | Promise<OtpDeliveryProvider>;
188 |   };
189 |   if (typeof loaded.createOtpDeliveryProvider !== 'function') {
190 |     throw new Error('OTP provider module must export createOtpDeliveryProvider()');
191 |   }
192 |   const configured = await loaded.createOtpDeliveryProvider();
193 |   if (!configured || typeof configured.send !== 'function') {
194 |     throw new Error('OTP provider module returned an invalid provider');
195 |   }
196 |   return configured;
197 | }
198 |
199 | function errorCode(error: unknown, fallback: string): string {
200 |   return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
201 | }
202 |
203 | function logError(error: unknown, fallback: string): void {
204 |   log.error('verification.worker.error', {
205 |     code: errorCode(error, fallback),
206 |     worker_id: workerId,
207 |   });
208 | }
209 |
210 | const sleep = (milliseconds: number): Promise<void> =>
211 |   new Promise((resolve) => setTimeout(resolve, milliseconds));
212 |
213 | const stop = (): void => {
214 |   stopping = true;
215 | };
216 | process.once('SIGTERM', stop);
217 | process.once('SIGINT', stop);
218 | await run();
219 |
```

## Skipped Files

None.
