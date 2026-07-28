# CodexPro Context Bundle

Generated: 2026-07-28T02:00:36.156Z
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
## feat/durable-worker-lease-heartbeats
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M README.md
 M config/environment.example
 M docker-compose.yml
 M docs/operations/deployment.md
 M docs/operations/operations-observability.md
 M docs/testing/testing-strategy.md
 M package-lock.json
 M packages/courier-adapters/src/index.test.ts
 M packages/courier-adapters/src/index.ts
 M packages/database/src/index.ts
 M tracker.yml
 M workers/courier-sync-worker/package.json
 M workers/courier-sync-worker/src/index.ts
 M workers/courier-sync-worker/src/postgres.test.ts
 M workers/courier-sync-worker/src/runner.ts
 M workers/event-worker/package.json
 M workers/event-worker/src/index.test.ts
 M workers/event-worker/src/index.ts
 M workers/event-worker/src/postgres.test.ts
 M workers/event-worker/src/postgres.ts
 M workers/event-worker/src/runner.ts
 M workers/verification-worker/package.json
 M workers/verification-worker/src/index.test.ts
 M workers/verification-worker/src/index.ts
 M workers/verification-worker/src/postgres.test.ts
 M workers/verification-worker/src/postgres.ts
 M workers/verification-worker/src/runner.ts
?? packages/database/src/lease-heartbeat.test.ts
?? packages/database/src/lease-heartbeat.ts
```

## Recent Commits

```text
3c31ae7 (HEAD -> feat/durable-worker-lease-heartbeats, origin/main, main) docs: record API observability CI evidence (#29)
00d6eec feat(api): add safe request observability (#28)
cc8d890 docs: record observability CI evidence (#27)
d8ef4ac feat(observability): add safe structured worker logging (#26)
b61af36 docs: sync browser dead-letter evidence
27cff21 feat: add browser dead-letter operations
57f7b3a docs: sync durable work dead-letter evidence
2d68620 feat: add durable work dead-letter operations
```

## Git Diff

```diff
diff --git a/.ai-bridge/current-plan.md b/.ai-bridge/current-plan.md
index a1bb962..4c79279 100644
--- a/.ai-bridge/current-plan.md
+++ b/.ai-bridge/current-plan.md
@@ -4,7 +4,7 @@ Updated: 2026-07-28

 ## Current state

-A runnable standalone MVP foundation and fifteen production-hardening slices are complete:
+A runnable standalone MVP foundation and sixteen production-hardening slices are complete:

 1. dashboard/admin browser authentication with live PostgreSQL data and tenant revalidation;
 2. accepted provider-neutral infrastructure ADRs for deployment, managed PostgreSQL, durable work/cache, KMS envelope encryption, and observability;
@@ -20,7 +20,8 @@ A runnable standalone MVP foundation and fifteen production-hardening slices are
 12. tenant-scoped durable-work dead-letter inspection and explicit idempotent replay with lease reset, structural failure guards, immutable evidence, and audit records;
 13. authenticated merchant browser dead-letter operations with exact owner/admin store scope, secret-free listing, CSRF-protected replay, and synchronous stable replay keys;
 14. a canonical vendor-neutral structured logging/redaction package integrated into all four private workers, with bounded serialization and telemetry-failure isolation;
-15. API-wide safe request correlation and structured lifecycle logging with opaque request IDs, bounded route templates, response status/latency, redacted unhandled errors, and telemetry-failure isolation.
+15. API-wide safe request correlation and structured lifecycle logging with opaque request IDs, bounded route templates, response status/latency, redacted unhandled errors, and telemetry-failure isolation;
+16. owner-checked renewable leases for courier, webhook, and verification workers, with non-overlapping heartbeats, abort-on-renewal-loss provider I/O, and heartbeat drain before final queue transitions.

 Concrete provider selection and provisioning remain external production work.

@@ -68,6 +69,9 @@ Concrete provider selection and provisioning remain external production work.
 - [x] Expired or previous courier owners cannot complete or fail jobs
 - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
+- [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
+- [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
+- [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
@@ -116,11 +120,11 @@ Concrete provider selection and provisioning remain external production work.
 - Twelve migration files ordered/non-empty/non-destructive: passed
 - First migration apply and immediate migration replay: passed
 - Architecture import boundaries: passed
-- Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
-- Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
-- Repository assertions: 136 passed in PostgreSQL-integrated source-branch CI, including four API request-correlation, bounded-route, unhandled-error redaction, and sink-failure tests
-- Production builds: 20 of 20 workspaces passed locally and in source-branch CI
-- WooCommerce PHP syntax: passed in source-branch CI
+- Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
+- Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
+- Repository assertion inventory: 145, including three heartbeat lifecycle tests, three provider-abort tests, and three PostgreSQL owner-checked renewal tests; PostgreSQL-integrated source-branch CI is pending
+- Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
+- WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
 - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
 - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
 - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
@@ -155,7 +159,7 @@ Concrete provider selection and provisioning remain external production work.
 - `tracker.yml` YAML structure remains valid
 - Prohibited source-pattern search: no matches

-The repository-local continuation exporter was refreshed after the merged API observability verification evidence was recorded.
+The repository-local continuation exporter was refreshed after the durable worker heartbeat milestone documentation was finalized, so its embedded snapshots match the current branch state.

 ## Next production milestone

diff --git a/.ai-bridge/decisions.md b/.ai-bridge/decisions.md
index 6e02b84..32c262a 100644
--- a/.ai-bridge/decisions.md
+++ b/.ai-bridge/decisions.md
@@ -46,6 +46,7 @@ Updated: 2026-07-28
 40. The merchant failed-work browser surface uses only opaque user sessions, exact session-visible organization/store scope, active owner/admin authorization, and repository-level relational reauthorization. Replay additionally requires CSRF proof and a stable per-work-item idempotency key assigned synchronously before network I/O and retained after request failure. Browser contracts are secret-free and delegate all state changes to the existing transactional PostgreSQL durable-work repository.
 41. `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. It owns recursive sensitive-field redaction, bounded safe serialization, fixed service/environment/event metadata, and telemetry-failure isolation. Private workers use this helper instead of ad hoc JSON logging; error messages, stacks, payloads, bodies, URLs, credentials, phone values, OTPs, cookies, keys, and tokens are never exported by the helper. Metrics, traces, exporters, and the managed backend remain separate follow-up work under ADR 0010.
 42. Every API request receives a server-controlled opaque request ID unless the caller supplies a bounded opaque `req_`, hexadecimal trace, or UUID value. The response echoes only that accepted/generated ID. Request lifecycle logs use an allowlisted static route or a bounded route template, never the raw URL, query string, or dynamic assessment identifier. They contain method, status/status class, and duration; unhandled errors export only safe name/code through the shared redaction boundary. Logging failure cannot change the HTTP response.
+43. Courier, webhook, and verification runners use one non-overlapping heartbeat per active claimed job. Renewal is allowed only for the current owner, an active claimed/processing state, and an unexpired lease; verification renewal additionally revalidates the queued, unexpired tenant-scoped session. The default renewal interval is one-third of the lease and must not exceed half of it. Renewal failure aborts active provider/network I/O with the original lease error, and every completion, retry, or terminal failure drains the heartbeat before changing queue state so renewal and final transitions cannot race.

 ## Source SaaS conflict resolutions

diff --git a/.ai-bridge/implementation-status.md b/.ai-bridge/implementation-status.md
index 1d12d6c..3922d71 100644
--- a/.ai-bridge/implementation-status.md
+++ b/.ai-bridge/implementation-status.md
@@ -35,9 +35,9 @@ Updated: 2026-07-28
 | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                |
 | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                |
 | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                         |
-| Courier observation worker/cache | done     | Lease-owned atomic claims, expired-owner rejection, stale recovery, retry/final failure, relational scope, observation persistence                                                           |
-| Durable webhook outbox           | done     | Assessment/outcome transaction emission, scoped event payloads, lease-owned event worker, retries, stale recovery, encrypted secret access                                                   |
-| Durable work architecture        | done     | PostgreSQL lease pattern plus owner/admin-scoped secret-free inspection, explicit idempotent replay, CLI, and merchant browser operations are implemented; future lease renewal remains      |
+| Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                    |
+| Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                            |
+| Durable work architecture        | done     | PostgreSQL claims, renewable owner-checked heartbeats, abort-on-loss provider I/O, drained final transitions, dead-letter inspection, replay, CLI, and merchant browser operations           |
 | Durable work operations          | done     | Failed courier, webhook, and verification work can be inspected and safely replayed through one transactional repository from the CLI or owner/admin browser surface with immutable evidence |
 | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                       |
 | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                              |
@@ -49,7 +49,7 @@ Updated: 2026-07-28
 | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                         |
 | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                          |
 | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                |
-| OTP verification                 | baseline | Transactional encrypted queue, tenant-scoped verifier, lease-owned private runner, retries, and failure events done; provider account remains                                                |
+| OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                              |
 | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                               |
 | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                    |
 | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                   |
@@ -85,12 +85,13 @@ Applied migrations must remain immutable.
 - `npm run db:integrity`: complete contiguous history and checksums passed
 - `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
 - `npm run check:architecture`: passed
-- `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
-- `npm run test`: 31/31 Turbo dependency tasks and 136 assertions passed in PostgreSQL-integrated source-branch CI, including four API observability tests
-- `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
+- `npm run typecheck`: 20/20 workspaces passed locally; source-branch CI is pending
+- `npm run test`: 31/31 Turbo dependency tasks passed locally; source inventory contains 145 assertions, including nine lease-heartbeat/renewal/abort tests
+- `npm run build`: 20/20 workspace builds passed locally; source-branch CI is pending
 - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 - Observability tests prove fixed metadata, nested redaction, error message/stack omission, circular/binary/bigint handling, bounded strings, reserved-field protection, and sink-failure isolation
 - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, safe unhandled-error serialization, and request availability during sink failure
+- Lease-heartbeat tests prove non-overlapping renewal, owner/expiry enforcement, abort-on-renewal-loss propagation, and heartbeat drain before final courier/webhook/verification transitions
 - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
 - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
 - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
@@ -137,7 +138,7 @@ Applied migrations must remain immutable.
 - Previous canonical documentation checks found zero broken internal links
 - Prohibited insecure-pattern scan: zero matches

-The repository-local exporter was refreshed after the merged API observability verification evidence was recorded.
+The repository-local exporter was refreshed after the durable worker heartbeat milestone documentation was finalized. Source-branch remote CI is pending.

 ## External blockers and production requirements

@@ -158,7 +159,7 @@ The repository-local exporter was refreshed after the merged API observability v
 - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
 - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
 - In-process API and browser-session rate limiting is not distributed across replicas.
-- Controlled dead-letter inspection and browser replay are implemented; future work still includes lease renewal for executions that may exceed one lease and a reviewed retention/archival policy.
+- Durable workers now renew active leases and abort provider I/O on renewal loss; a reviewed retention/archival policy remains production work.
 - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
 - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
 - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
diff --git a/README.md b/README.md
index 0c85591..aa2100a 100644
--- a/README.md
+++ b/README.md
@@ -33,7 +33,8 @@ The repository now contains a runnable MVP foundation:
 - Steadfast adapter, Playwright session driver, encrypted session storage, and runnable courier workers
 - Transactional encrypted OTP delivery queue, tenant-scoped verification, and lease-owned private verification worker
 - Provider-neutral OTP adapter boundary with hashing, expiry, attempt/rate limits, payload validation, and no synchronous provider I/O
-- Durable signed webhook outbox/worker with retries, leases, encrypted secrets, and DNS-aware SSRF protection
+- Durable signed webhook outbox/worker with retries, renewable leases, encrypted secrets, and DNS-aware SSRF protection
+- Owner-checked lease heartbeats for courier, webhook, and verification work; renewal loss aborts active provider I/O before stale final-state writes
 - Tenant-scoped, owner/admin-authorized dead-letter inspection and idempotent controlled replay for courier, webhook, and verification work, with immutable replay/audit evidence
 - Merchant dashboard and platform operations admin applications
 - WooCommerce plugin, Shopify adapter, custom JavaScript/server adapter, and native multi-store adapter
diff --git a/config/environment.example b/config/environment.example
index c101d71..50e6f88 100644
--- a/config/environment.example
+++ b/config/environment.example
@@ -50,6 +50,7 @@ COURIER_SESSION_REFRESH_HOURS=6
 COURIER_OBSERVATION_TTL_HOURS=12
 WORKER_POLL_MS=5000
 WORKER_LEASE_MS=300000
+WORKER_LEASE_RENEW_MS=100000
 # Set a stable unique identifier per replica in production. Local workers generate one when omitted.
 WORKER_ID=courier-sync-local

@@ -57,6 +58,7 @@ WORKER_ID=courier-sync-local
 EVENT_WORKER_ID=event-local
 EVENT_WORKER_POLL_MS=5000
 EVENT_WORKER_LEASE_MS=60000
+EVENT_WORKER_LEASE_RENEW_MS=20000
 EVENT_WORKER_MAX_ATTEMPTS=5
 WEBHOOK_TIMEOUT_MS=5000
 STEADFAST_LIVE_TESTS=false
@@ -70,6 +72,7 @@ CACHE_URL=[REDACTED_SECRET]
 VERIFICATION_WORKER_ID=verification-local
 VERIFICATION_WORKER_POLL_MS=5000
 VERIFICATION_WORKER_LEASE_MS=60000
+VERIFICATION_WORKER_LEASE_RENEW_MS=20000
 VERIFICATION_WORKER_MAX_ATTEMPTS=5
 OTP_PROVIDER_TIMEOUT_MS=10000
 OTP_PROVIDER_MODULE=[REDACTED_PROVIDER_MODULE]
diff --git a/docker-compose.yml b/docker-compose.yml
index e5fb2dc..88185f3 100644
--- a/docker-compose.yml
+++ b/docker-compose.yml
@@ -92,6 +92,7 @@ services:
       WORKER_ID: ${WORKER_ID:-courier-sync-local}
       WORKER_POLL_MS: ${WORKER_POLL_MS:-5000}
       WORKER_LEASE_MS: ${WORKER_LEASE_MS:-300000}
+      WORKER_LEASE_RENEW_MS: ${WORKER_LEASE_RENEW_MS:-100000}
     depends_on:
       migrate:
         condition: service_completed_successfully
@@ -117,6 +118,7 @@ services:
       VERIFICATION_WORKER_ID: ${VERIFICATION_WORKER_ID:-verification-local}
       VERIFICATION_WORKER_POLL_MS: ${VERIFICATION_WORKER_POLL_MS:-5000}
       VERIFICATION_WORKER_LEASE_MS: ${VERIFICATION_WORKER_LEASE_MS:-60000}
+      VERIFICATION_WORKER_LEASE_RENEW_MS: ${VERIFICATION_WORKER_LEASE_RENEW_MS:-20000}
       VERIFICATION_WORKER_MAX_ATTEMPTS: ${VERIFICATION_WORKER_MAX_ATTEMPTS:-5}
       OTP_PROVIDER_TIMEOUT_MS: ${OTP_PROVIDER_TIMEOUT_MS:-10000}
     depends_on:
@@ -138,6 +140,7 @@ services:
       EVENT_WORKER_ID: ${EVENT_WORKER_ID:-event-local}
       EVENT_WORKER_POLL_MS: ${EVENT_WORKER_POLL_MS:-5000}
       EVENT_WORKER_LEASE_MS: ${EVENT_WORKER_LEASE_MS:-60000}
+      EVENT_WORKER_LEASE_RENEW_MS: ${EVENT_WORKER_LEASE_RENEW_MS:-20000}
       EVENT_WORKER_MAX_ATTEMPTS: ${EVENT_WORKER_MAX_ATTEMPTS:-5}
       WEBHOOK_TIMEOUT_MS: ${WEBHOOK_TIMEOUT_MS:-5000}
     depends_on:
diff --git a/docs/operations/deployment.md b/docs/operations/deployment.md
index 38300ce..ffcc677 100644
--- a/docs/operations/deployment.md
+++ b/docs/operations/deployment.md
@@ -50,6 +50,10 @@ Deploy independently:

 The Playwright, courier-sync, event, and verification workers must not receive public traffic and must never run inside checkout request handling. Merchant webhook delivery and OTP provider delivery are asynchronous.

+## Courier-sync worker runtime
+
+The courier-sync worker uses `WORKER_LEASE_MS` with `WORKER_LEASE_RENEW_MS`, which defaults to one-third of the lease and must not exceed half of it. Each replica requires a stable unique `WORKER_ID`. Renewal loss aborts the active courier request and prevents a stale owner from completing or failing the job.
+
 ## Event-worker runtime

 The event worker requires:
@@ -60,10 +64,11 @@ The event worker requires:
 - optional `EVENT_WORKER_ID`
 - optional `EVENT_WORKER_POLL_MS`, default `5000`
 - optional `EVENT_WORKER_LEASE_MS`, default `60000`
+- optional `EVENT_WORKER_LEASE_RENEW_MS`, default one-third of the lease (`20000` for the default lease)
 - optional `EVENT_WORKER_MAX_ATTEMPTS`, default `5`
 - optional `WEBHOOK_TIMEOUT_MS`, default `5000`

-All numeric values must be positive integers. `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds so one bounded HTTP attempt can finish before lease expiry.
+All numeric values must be positive integers. `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds, and `EVENT_WORKER_LEASE_RENEW_MS` must not exceed half the lease. Renewal loss aborts the active HTTP request and prevents a stale final-state transition.

 Set a stable unique `EVENT_WORKER_ID` for each production replica. When omitted, the process generates a unique runtime ID suitable for local use.

@@ -87,9 +92,9 @@ The verification worker requires:
 - `PHONE_HMAC_KEY` and `OTP_HASH_SECRET` matching the API deployment;
 - a reviewed, bundled `OTP_PROVIDER_MODULE` exporting `createOtpDeliveryProvider()`;
 - provider-specific secrets such as sender ID/API key supplied only through the approved secret manager;
-- optional worker ID, poll, lease, max-attempt, and provider-timeout settings.
+- optional worker ID, poll, lease, lease-renewal, max-attempt, and provider-timeout settings.

-`VERIFICATION_WORKER_LEASE_MS` must exceed `OTP_PROVIDER_TIMEOUT_MS` by more than five seconds. Each replica needs a stable unique worker ID, private ingress, least-privilege database/KMS access, and only the egress required by the selected provider. The Compose service is behind the `verification` profile because no provider is selected or bundled in this milestone.
+`VERIFICATION_WORKER_LEASE_MS` must exceed `OTP_PROVIDER_TIMEOUT_MS` by more than five seconds, and `VERIFICATION_WORKER_LEASE_RENEW_MS` must not exceed half the lease. Renewal loss aborts the active OTP request and prevents stale delivery state. Each replica needs a stable unique worker ID, private ingress, least-privilege database/KMS access, and only the egress required by the selected provider. The Compose service is behind the `verification` profile because no provider is selected or bundled in this milestone.

 ## Environment stages

diff --git a/docs/operations/operations-observability.md b/docs/operations/operations-observability.md
index 091c67a..df7fc34 100644
--- a/docs/operations/operations-observability.md
+++ b/docs/operations/operations-observability.md
@@ -226,8 +226,9 @@ A webhook endpoint outage, provider outage, or telemetry outage must not necessa
 ## Event-worker operational contract

 - `EVENT_WORKER_ID` should be stable and unique per replica in production.
-- `EVENT_WORKER_POLL_MS`, `EVENT_WORKER_LEASE_MS`, `EVENT_WORKER_MAX_ATTEMPTS`, and `WEBHOOK_TIMEOUT_MS` must be positive integers.
-- `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds.
+- Courier, event, and verification poll, lease, lease-renewal, max-attempt, and provider-timeout values must be positive integers.
+- Every lease-renewal interval must be no greater than half its lease; event and verification leases must also exceed their provider timeout by more than five seconds.
+- Alert on heartbeat renewal failure because active provider I/O is aborted and the job remains available only through stale-lease recovery or reviewed replay.
 - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
 - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
 - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
diff --git a/docs/testing/testing-strategy.md b/docs/testing/testing-strategy.md
index 891f3d1..9093f1c 100644
--- a/docs/testing/testing-strategy.md
+++ b/docs/testing/testing-strategy.md
@@ -17,6 +17,7 @@
 - Runtime-role identifier validation and explicit table-policy completeness
 - Native shadow off mode, deterministic sampling, post-persist source revalidation, legacy-authoritative disagreement, timeout classification, and safe assessment/persistence failures
 - Structured-log fixed metadata, recursive sensitive-field redaction, safe error-code-only serialization, circular/binary/bigint handling, bounded truncation, and telemetry-sink failure isolation
+- Non-overlapping lease heartbeat scheduling, failure propagation, abort signaling, and idempotent stop behavior
 - API request-ID validation, bounded route templates, status/latency lifecycle records, and safe unhandled-error serialization

 ## Contract tests
@@ -59,7 +60,7 @@ Webhook delivery contract tests cover:
 - Lease-owned OTP provider delivery and retry/failure state
 - Courier session refresh
 - Transactional assessment/outcome webhook outbox emission
-- Lease-owned webhook delivery and retry
+- Lease-owned webhook delivery, renewal, abort-on-loss, and retry
 - Multi-tenant isolation
 - Organization/store membership authorization
 - API-wide request correlation for public, authenticated, browser, not-found, and unhandled-error paths without raw dynamic routes or query values
@@ -190,7 +191,7 @@ Production-managed point-in-time recovery remains a provider provisioning gate r

 Future PostgreSQL coverage must include:

-- lease renewal during future jobs whose bounded execution time can exceed the configured lease;
+- owner-checked lease renewal during courier, webhook, and verification jobs whose execution crosses the initial lease window;
 - selected-provider smoke tests for distinct API/worker runtime identities and migration-owner grant execution;
 - operational replay/dead-letter authorization and audit coverage.

@@ -224,7 +225,7 @@ Future PostgreSQL coverage must include:
 - Injection attacks
 - Session fixation/rotation
 - Credential decryption failure
-- Worker lease ownership and stale-owner rejection
+- Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
 - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
 - Runtime database role privilege escape, ownership, migration-history, DELETE, and DDL attempts

diff --git a/package-lock.json b/package-lock.json
index 705f15b..6482c14 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -7617,6 +7617,7 @@
       "dependencies": {
         "@ozzyl/courier-adapters": "*",
         "@ozzyl/courier-session-worker": "*",
+        "@ozzyl/database": "*",
         "@ozzyl/observability": "*",
         "pg": "^8.16.3"
       },
@@ -7628,6 +7629,7 @@
       "name": "@ozzyl/event-worker",
       "version": "0.1.0",
       "dependencies": {
+        "@ozzyl/database": "*",
         "@ozzyl/encryption": "*",
         "@ozzyl/observability": "*",
         "@ozzyl/shared-types": "*",
@@ -7641,6 +7643,7 @@
       "name": "@ozzyl/verification-worker",
       "version": "0.1.0",
       "dependencies": {
+        "@ozzyl/database": "*",
         "@ozzyl/encryption": "*",
         "@ozzyl/observability": "*",
         "@ozzyl/shared-types": "*",
diff --git a/packages/courier-adapters/src/index.test.ts b/packages/courier-adapters/src/index.test.ts
index 38cdd20..25270cb 100644
--- a/packages/courier-adapters/src/index.test.ts
+++ b/packages/courier-adapters/src/index.test.ts
@@ -39,4 +39,26 @@ describe('SteadfastAdapter', () => {
       adapter.fetchCustomerObservation({ accountId: 'acc_1', phone: '01712345678' }),
     ).rejects.toMatchObject({ code: 'SESSION_MISSING', retryable: false });
   });
+
+  it('aborts an active provider request when the worker lease is lost', async () => {
+    const fetcher = vi.fn<typeof fetch>().mockImplementation(
+      async (_url, init) =>
+        new Promise<Response>((_resolve, reject) => {
+          const abort = (): void => reject(new DOMException('Aborted', 'AbortError'));
+          if (init?.signal?.aborted) abort();
+          else init?.signal?.addEventListener('abort', abort, { once: true });
+        }),
+    );
+    const adapter = new SteadfastAdapter({ sessionProvider, fetcher, timeoutMs: 60_000 });
+    const controller = new AbortController();
+    const result = adapter.fetchCustomerObservation({
+      accountId: 'acc_1',
+      phone: '01712345678',
+      signal: controller.signal,
+    });
+
+    controller.abort(Object.assign(new Error('lease lost'), { code: 'COURIER_JOB_LEASE_LOST' }));
+    await expect(result).rejects.toMatchObject({ code: 'PROVIDER_UNAVAILABLE', retryable: true });
+    expect(fetcher).toHaveBeenCalledOnce();
+  });
 });
diff --git a/packages/courier-adapters/src/index.ts b/packages/courier-adapters/src/index.ts
index e65a676..2f4c1f5 100644
--- a/packages/courier-adapters/src/index.ts
+++ b/packages/courier-adapters/src/index.ts
@@ -16,6 +16,7 @@ export interface CourierSession {
 export interface CustomerLookup {
   accountId: string;
   phone: string;
+  signal?: AbortSignal;
 }

 export interface CourierObservation {
@@ -107,6 +108,9 @@ export class SteadfastAdapter implements CourierAdapter {
     }

     const controller = new AbortController();
+    const abortFromCaller = (): void => controller.abort(input.signal?.reason);
+    if (input.signal?.aborted) abortFromCaller();
+    else input.signal?.addEventListener('abort', abortFromCaller, { once: true });
     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
     try {
       const response = await this.fetcher(
@@ -173,6 +177,7 @@ export class SteadfastAdapter implements CourierAdapter {
       throw new CourierProviderError('PROVIDER_UNAVAILABLE', 'Steadfast request failed', true);
     } finally {
       clearTimeout(timeout);
+      input.signal?.removeEventListener('abort', abortFromCaller);
     }
   }
 }
diff --git a/packages/database/src/index.ts b/packages/database/src/index.ts
index 4ccaab8..f77b014 100644
--- a/packages/database/src/index.ts
+++ b/packages/database/src/index.ts
@@ -5,6 +5,7 @@ export * from './schema.js';
 export * from './durable-work-schema.js';
 export * from './runtime-role.js';
 export * from './dead-letter-operations.js';
+export * from './lease-heartbeat.js';

 export function createDatabase(databaseUrl: string) {
   const pool = new Pool({ connectionString: databaseUrl, max: 10 });
diff --git a/tracker.yml b/tracker.yml
index 936e091..31c53a6 100644
--- a/tracker.yml
+++ b/tracker.yml
@@ -92,6 +92,9 @@ invariants:
   - telemetry_failures_never_break_application_or_worker_execution
   - api_request_ids_are_server_generated_or_bounded_opaque_values
   - api_logs_never_export_raw_urls_query_values_or_dynamic_route_identifiers
+  - durable_worker_leases_renew_only_for_the_current_owner_while_unexpired
+  - lease_renewal_failure_aborts_active_provider_io
+  - final_queue_transitions_drain_the_heartbeat_before_state_change

 implemented:
   - typescript_monorepo_and_ci
@@ -147,6 +150,9 @@ implemented:
   - telemetry_serialization_and_sink_failure_isolation_tests
   - api_request_lifecycle_and_safe_correlation_logging
   - api_unhandled_error_redaction_and_sink_failure_isolation_tests
+  - shared_non_overlapping_lease_heartbeat_and_abort_signal
+  - courier_webhook_and_verification_owner_checked_lease_renewal
+  - provider_io_abort_on_lease_renewal_loss

 verification:
   command: npm run verify
@@ -160,12 +166,13 @@ verification:
     architecture_boundaries: passed
     typecheck: 20_of_20_passed
     test_tasks: 31_of_31_passed
-    remote_assertions: 136_passed
+    source_assertions: 145_total
+    previous_main_remote_assertions: 136_passed
     migration_integrity_tests: 7_of_7_passed
     postgresql_concurrency_tests: 7_of_7_passed
-    postgresql_courier_worker_lease_tests: 5_of_5_passed
-    postgresql_webhook_worker_lease_tests: 5_of_5_passed
-    postgresql_verification_worker_lease_tests: 5_of_5_passed
+    postgresql_courier_worker_lease_tests: 6_source_tests_remote_ci_pending
+    postgresql_webhook_worker_lease_tests: 6_source_tests_remote_ci_pending
+    postgresql_verification_worker_lease_tests: 6_source_tests_remote_ci_pending
     verification_payload_validation_tests: 3_of_3_passed
     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
     postgresql_runtime_role_tests: 7_of_7_passed
@@ -180,6 +187,8 @@ verification:
     browser_dead_letter_api_tests: 3_of_3_passed
     observability_tests: 3_of_3_passed
     api_observability_tests: 4_of_4_passed
+    lease_heartbeat_unit_tests: 3_of_3_passed
+    provider_abort_on_lease_loss_tests: 3_of_3_passed
     builds: 20_of_20_passed
     php_syntax: passed
     high_critical_dependency_check: passed
@@ -187,8 +196,8 @@ verification:
     documentation_links: 57_reviewed_0_known_broken
   continuation_bundle:
     status: refreshed_locally
-    canonical_main_sync: verified_at_00d6eecb69f1edd48209cb8653137c8e8a57ab7f
-    local_exporter: completed_after_merged_api_observability_ci_evidence
+    canonical_main_sync: verified_at_3c31ae76980c0fa3eef7b67aaef2627b436a616a
+    local_exporter: completed_after_durable_worker_heartbeat_docs
   remote_ci:
     status: passed
     run_id: 30318999952
@@ -208,6 +217,7 @@ verification:
     observability_tests: 3_of_3_passed
     api_observability_tests: 4_of_4_passed
   pending_follow_up:
+    - source_branch_remote_ci_validation
     - observability_metrics_traces_exporters_and_managed_backend
     - production_source_hook_deployment_and_explicit_pilot_store_selection
     - pilot_outcome_collection_and_calibration
@@ -328,5 +338,8 @@ notes:
   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
-  - pro_context_was_refreshed_after_merged_api_observability_ci_evidence
+  - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
+  - lease_renewal_interval_must_not_exceed_half_the_lease
+  - heartbeat_renewal_and_final_state_transitions_do_not_overlap
+  - pro_context_was_refreshed_after_durable_worker_heartbeat_documentation
   - update_this_file_after_every_material_milestone
diff --git a/workers/courier-sync-worker/package.json b/workers/courier-sync-worker/package.json
index d7db14f..570d426 100644
--- a/workers/courier-sync-worker/package.json
+++ b/workers/courier-sync-worker/package.json
@@ -19,6 +19,7 @@
   "dependencies": {
     "@ozzyl/courier-adapters": "*",
     "@ozzyl/courier-session-worker": "*",
+    "@ozzyl/database": "*",
     "pg": "^8.16.3",
     "@ozzyl/observability": "*"
   },
diff --git a/workers/courier-sync-worker/src/index.ts b/workers/courier-sync-worker/src/index.ts
index f1587b9..058bd4b 100644
--- a/workers/courier-sync-worker/src/index.ts
+++ b/workers/courier-sync-worker/src/index.ts
@@ -37,6 +37,7 @@ export class CourierSyncWorker {
     phone: string;
     phoneHash: string;
     force?: boolean;
+    signal?: AbortSignal;
   }): Promise<{ observation: CourierObservation; cached: boolean }> {
     await this.dependencies.health.started(input.jobId, new Date());
     try {
@@ -58,6 +59,7 @@ export class CourierSyncWorker {
       const observation = await adapter.fetchCustomerObservation({
         accountId: input.courierAccountId,
         phone: input.phone,
+        ...(input.signal === undefined ? {} : { signal: input.signal }),
       });
       await this.dependencies.observations.save({
         storeId: input.storeId,
diff --git a/workers/courier-sync-worker/src/postgres.test.ts b/workers/courier-sync-worker/src/postgres.test.ts
index 94919c2..99d6b82 100644
--- a/workers/courier-sync-worker/src/postgres.test.ts
+++ b/workers/courier-sync-worker/src/postgres.test.ts
@@ -119,6 +119,33 @@ integration('PostgreSQL courier job leases', () => {
     });
   });

+  it('renews an active processing lease and rejects another owner', async () => {
+    const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
+    const at = new Date('2026-07-17T01:30:00.000Z');
+    const worker = `renew-worker-${suffix}`;
+    const jobId = await insertJob('renew-processing', { scheduledAt: at });
+
+    await expect(queue.claim(worker, at)).resolves.toMatchObject({ id: jobId });
+    await queue.started(jobId, worker, new Date(at.getTime() + 1_000));
+    const renewedAt = new Date(at.getTime() + 30_000);
+    await queue.renew(jobId, worker, renewedAt);
+
+    await expect(
+      queue.renew(jobId, `other-worker-${suffix}`, new Date(at.getTime() + 31_000)),
+    ).rejects.toBeInstanceOf(CourierJobLeaseError);
+    await expect(
+      queue.claim(`competitor-${suffix}`, new Date(at.getTime() + 62_000)),
+    ).resolves.toBeNull();
+
+    const stored = await pool.query<{ lease_expires_at: Date }>(
+      `select lease_expires_at from courier_jobs where id = $1`,
+      [jobId],
+    );
+    expect(stored.rows[0]?.lease_expires_at.toISOString()).toBe(
+      new Date(renewedAt.getTime() + 60_000).toISOString(),
+    );
+  });
+
   it('clears lease ownership when a retryable attempt is requeued', async () => {
     const queue = new PostgresCourierJobQueue(pool, { leaseMs: 60_000 });
     const at = new Date('2026-07-17T02:00:00.000Z');
diff --git a/workers/courier-sync-worker/src/runner.ts b/workers/courier-sync-worker/src/runner.ts
index b43d9e2..94a2db8 100644
--- a/workers/courier-sync-worker/src/runner.ts
+++ b/workers/courier-sync-worker/src/runner.ts
@@ -6,6 +6,7 @@ import {
   type CourierSession,
 } from '@ozzyl/courier-adapters';
 import { AesGcmEnvelopeCipher } from '@ozzyl/courier-session-worker';
+import { LeaseHeartbeat } from '@ozzyl/database';
 import { createStructuredLogger } from '@ozzyl/observability';
 import { CourierSyncWorker } from './index.js';
 import { PostgresCourierJobQueue, type ClaimedCourierJob } from './postgres.js';
@@ -23,6 +24,12 @@ const cipher = new AesGcmEnvelopeCipher(
 );
 const pollMs = Number(process.env.WORKER_POLL_MS ?? 5_000);
 const leaseMs = Number(process.env.WORKER_LEASE_MS ?? 5 * 60_000);
+const leaseRenewMs = Number(process.env.WORKER_LEASE_RENEW_MS ?? Math.floor(leaseMs / 3));
+if (!Number.isSafeInteger(leaseRenewMs) || leaseRenewMs <= 0 || leaseRenewMs * 2 > leaseMs) {
+  throw new Error(
+    'WORKER_LEASE_RENEW_MS must be a positive integer no greater than half the lease',
+  );
+}
 const workerId = process.env.WORKER_ID ?? `courier-sync-${randomUUID()}`;
 const log = createStructuredLogger({
   service: 'courier-sync-worker',
@@ -30,6 +37,7 @@ const log = createStructuredLogger({
 });
 const jobs = new PostgresCourierJobQueue(pool, { leaseMs });
 let stopping = false;
+let activeHeartbeat: LeaseHeartbeat | null = null;

 const steadfast = new SteadfastAdapter({
   sessionProvider: {
@@ -98,9 +106,11 @@ const syncWorker = new CourierSyncWorker({
       await jobs.started(jobId, workerId, at);
     },
     async completed(jobId, at): Promise<void> {
+      await activeHeartbeat?.stop();
       await jobs.completed(jobId, workerId, at);
     },
     async failed(jobId, code, retryable, at): Promise<void> {
+      await activeHeartbeat?.stop();
       await jobs.failed(jobId, workerId, code, retryable, at);
     },
   },
@@ -115,10 +125,15 @@ async function run(): Promise<void> {
         await new Promise((resolve) => setTimeout(resolve, pollMs));
         continue;
       }
+      activeHeartbeat = new LeaseHeartbeat({
+        intervalMs: leaseRenewMs,
+        renew: (at) => jobs.renew(job.id, workerId, at),
+      }).start();
       let payload: ReturnType<typeof parsePayload>;
       try {
         payload = parsePayload(job.payload, job);
       } catch (error) {
+        await activeHeartbeat.stop();
         await jobs.failed(job.id, workerId, errorCode(error, 'INVALID_JOB_PAYLOAD'), false);
         throw error;
       }
@@ -130,8 +145,13 @@ async function run(): Promise<void> {
         phone: payload.phone,
         phoneHash: payload.phoneHash,
         force: payload.force,
+        signal: activeHeartbeat.signal,
       });
+      await activeHeartbeat.stopQuietly();
+      activeHeartbeat = null;
     } catch (error) {
+      await activeHeartbeat?.stopQuietly();
+      activeHeartbeat = null;
       log.error('courier.sync.worker.error', {
         code: errorCode(error, 'WORKER_TICK_FAILED'),
         worker_id: workerId,
diff --git a/workers/event-worker/package.json b/workers/event-worker/package.json
index 3ed3d78..28bd8c9 100644
--- a/workers/event-worker/package.json
+++ b/workers/event-worker/package.json
@@ -19,6 +19,7 @@
   "dependencies": {
     "@ozzyl/shared-types": "*",
     "@ozzyl/encryption": "*",
+    "@ozzyl/database": "*",
     "pg": "^8.16.3",
     "@ozzyl/observability": "*"
   },
diff --git a/workers/event-worker/src/index.test.ts b/workers/event-worker/src/index.test.ts
index 300d95d..c404ebc 100644
--- a/workers/event-worker/src/index.test.ts
+++ b/workers/event-worker/src/index.test.ts
@@ -127,4 +127,47 @@ describe('EventWorker', () => {
     expect(isolatedRepository.markRetry).not.toHaveBeenCalled();
     expect(isolatedRepository.markFailed).toHaveBeenCalledOnce();
   });
+
+  it('aborts an active webhook request when the worker lease is lost', async () => {
+    const isolatedRepository = {
+      markDelivered: vi.fn(async () => undefined),
+      markRetry: vi.fn(async () => undefined),
+      markFailed: vi.fn(async () => undefined),
+    };
+    const fetcher = vi.fn<typeof fetch>().mockImplementation(
+      async (_url, init) =>
+        new Promise<Response>((_resolve, reject) => {
+          const abort = (): void => reject(new DOMException('Aborted', 'AbortError'));
+          if (init?.signal?.aborted) abort();
+          else init?.signal?.addEventListener('abort', abort, { once: true });
+        }),
+    );
+    const worker = new EventWorker(isolatedRepository, {
+      fetcher,
+      resolver: publicResolver,
+      timeoutMs: 60_000,
+      now: () => new Date('2026-07-17T00:00:00.000Z'),
+    });
+    const controller = new AbortController();
+    const result = worker.deliver({
+      endpoint: {
+        id: 'we_lease',
+        url: 'https://merchant.example/hook',
+        signingSecret: 'x'.repeat(32),
+        active: true,
+      },
+      event,
+      attempt: 1,
+      signal: controller.signal,
+    });
+
+    controller.abort(
+      Object.assign(new Error('lease lost'), { code: 'WEBHOOK_DELIVERY_LEASE_LOST' }),
+    );
+    await expect(result).resolves.toMatchObject({
+      status: 'retry_scheduled',
+      errorCode: 'TIMEOUT',
+    });
+    expect(isolatedRepository.markRetry).toHaveBeenCalledOnce();
+  });
 });
diff --git a/workers/event-worker/src/index.ts b/workers/event-worker/src/index.ts
index 8d024b6..98777f1 100644
--- a/workers/event-worker/src/index.ts
+++ b/workers/event-worker/src/index.ts
@@ -130,6 +130,7 @@ export class EventWorker {
     endpoint: WebhookEndpoint;
     event: DomainEvent;
     attempt: number;
+    signal?: AbortSignal;
   }): Promise<DeliveryResult> {
     if (!input.endpoint.active) {
       await this.repository.markFailed({
@@ -160,6 +161,9 @@ export class EventWorker {
     const payload = JSON.stringify(input.event);
     const timestamp = String(Math.floor(this.now().getTime() / 1_000));
     const controller = new AbortController();
+    const abortFromCaller = (): void => controller.abort(input.signal?.reason);
+    if (input.signal?.aborted) abortFromCaller();
+    else input.signal?.addEventListener('abort', abortFromCaller, { once: true });
     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

     try {
@@ -207,6 +211,7 @@ export class EventWorker {
       });
     } finally {
       clearTimeout(timeout);
+      input.signal?.removeEventListener('abort', abortFromCaller);
     }
   }

diff --git a/workers/event-worker/src/postgres.test.ts b/workers/event-worker/src/postgres.test.ts
index c13d60e..a6c75a7 100644
--- a/workers/event-worker/src/postgres.test.ts
+++ b/workers/event-worker/src/postgres.test.ts
@@ -105,6 +105,33 @@ integration('PostgreSQL webhook delivery leases', () => {
     expect(stored.rows[0]).toEqual({ status: 'delivered', attempts: 2, claimed_by: null });
   });

+  it('renews an active processing lease and rejects another owner', async () => {
+    const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
+    const at = new Date('2026-07-17T02:30:00.000Z');
+    const worker = `renew-event-${suffix}`;
+    const deliveryId = await insertDelivery('renew-processing', { at });
+
+    await expect(queue.claim(worker, at)).resolves.toMatchObject({ id: deliveryId });
+    await queue.started(deliveryId, worker, new Date(at.getTime() + 1_000));
+    const renewedAt = new Date(at.getTime() + 30_000);
+    await queue.renew(deliveryId, worker, renewedAt);
+
+    await expect(
+      queue.renew(deliveryId, `other-event-${suffix}`, new Date(at.getTime() + 31_000)),
+    ).rejects.toBeInstanceOf(WebhookDeliveryLeaseError);
+    await expect(
+      queue.claim(`competitor-event-${suffix}`, new Date(at.getTime() + 62_000)),
+    ).resolves.toBeNull();
+
+    const stored = await pool.query<{ lease_expires_at: Date }>(
+      `select lease_expires_at from webhook_deliveries where id = $1`,
+      [deliveryId],
+    );
+    expect(stored.rows[0]?.lease_expires_at.toISOString()).toBe(
+      new Date(renewedAt.getTime() + 60_000).toISOString(),
+    );
+  });
+
   it('clears ownership when a retry is scheduled', async () => {
     const queue = new PostgresWebhookDeliveryQueue(pool, { leaseMs: 60_000 });
     const at = new Date('2026-07-17T03:00:00.000Z');
diff --git a/workers/event-worker/src/postgres.ts b/workers/event-worker/src/postgres.ts
index 08e577b..1119dc8 100644
--- a/workers/event-worker/src/postgres.ts
+++ b/workers/event-worker/src/postgres.ts
@@ -198,6 +198,21 @@ export class PostgresWebhookDeliveryQueue {
     this.assertOwned(result.rowCount);
   }

+  async renew(deliveryId: string, workerId: string, at = new Date()): Promise<void> {
+    const result = await this.pool.query(
+      `
+        update webhook_deliveries
+        set lease_expires_at = $3, updated_at = now()
+        where id = $1
+          and claimed_by = $2
+          and status in ('claimed', 'processing')
+          and lease_expires_at > $4
+      `,
+      [deliveryId, workerId, new Date(at.getTime() + this.leaseMs), at],
+    );
+    this.assertOwned(result.rowCount);
+  }
+
   async delivered(
     deliveryId: string,
     workerId: string,
@@ -290,7 +305,11 @@ export class PostgresWebhookDeliveryQueue {
     this.assertOwned(result.rowCount);
   }

-  repositoryFor(delivery: ClaimedWebhookDelivery, workerId: string): WebhookDeliveryRepository {
+  repositoryFor(
+    delivery: ClaimedWebhookDelivery,
+    workerId: string,
+    beforeTransition: () => Promise<void> = async () => undefined,
+  ): WebhookDeliveryRepository {
     const assertIdentity = (endpointId: string, eventId: string): void => {
       if (endpointId !== delivery.endpointId || eventId !== delivery.eventId) {
         throw new WebhookDeliveryLeaseError('Webhook delivery identity does not match the claim');
@@ -299,14 +318,17 @@ export class PostgresWebhookDeliveryQueue {
     return {
       markDelivered: async (input) => {
         assertIdentity(input.endpointId, input.eventId);
+        await beforeTransition();
         await this.delivered(delivery.id, workerId, input.responseStatus, input.at);
       },
       markRetry: async (input) => {
         assertIdentity(input.endpointId, input.eventId);
+        await beforeTransition();
         await this.retry(delivery.id, workerId, input);
       },
       markFailed: async (input) => {
         assertIdentity(input.endpointId, input.eventId);
+        await beforeTransition();
         await this.failed(delivery.id, workerId, input);
       },
     };
diff --git a/workers/event-worker/src/runner.ts b/workers/event-worker/src/runner.ts
index 46268d0..6c6ea94 100644
--- a/workers/event-worker/src/runner.ts
+++ b/workers/event-worker/src/runner.ts
@@ -1,5 +1,6 @@
 import { randomUUID } from 'node:crypto';
 import { Pool } from 'pg';
+import { LeaseHeartbeat } from '@ozzyl/database';
 import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
 import { createStructuredLogger } from '@ozzyl/observability';
 import type { DomainEvent } from '@ozzyl/shared-types';
@@ -31,11 +32,15 @@ const cipher = new AesGcmEnvelopeCipher(
 );
 const pollMs = positiveInteger('EVENT_WORKER_POLL_MS', 5_000);
 const leaseMs = positiveInteger('EVENT_WORKER_LEASE_MS', 60_000);
+const leaseRenewMs = positiveInteger('EVENT_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
 const timeoutMs = positiveInteger('WEBHOOK_TIMEOUT_MS', 5_000);
 const maxAttempts = positiveInteger('EVENT_WORKER_MAX_ATTEMPTS', 5);
 if (leaseMs <= timeoutMs + 5_000) {
   throw new Error('EVENT_WORKER_LEASE_MS must exceed WEBHOOK_TIMEOUT_MS by more than 5000ms');
 }
+if (leaseRenewMs * 2 > leaseMs) {
+  throw new Error('EVENT_WORKER_LEASE_RENEW_MS must not exceed half the lease');
+}
 const workerId = process.env.EVENT_WORKER_ID ?? `event-${randomUUID()}`;
 const log = createStructuredLogger({
   service: 'event-worker',
@@ -56,22 +61,32 @@ async function run(): Promise<void> {
       continue;
     }

+    let heartbeat: LeaseHeartbeat | null = null;
     try {
       const startedAt = new Date();
       await queue.started(delivery.id, workerId, startedAt);
+      heartbeat = new LeaseHeartbeat({
+        intervalMs: leaseRenewMs,
+        renew: (at) => queue.renew(delivery.id, workerId, at),
+      }).start();
       const event = parseEvent(delivery);
       if (!delivery.endpointActive) {
+        await heartbeat.stop();
         await queue.failed(delivery.id, workerId, {
           errorCode: 'ENDPOINT_INACTIVE',
           at: new Date(),
         });
+        heartbeat = null;
         continue;
       }
       const signingSecret= [REDACTED_SECRET](delivery);
-      const worker = new EventWorker(queue.repositoryFor(delivery, workerId), {
-        timeoutMs,
-        maxAttempts,
-      });
+      const worker = new EventWorker(
+        queue.repositoryFor(delivery, workerId, () => heartbeat?.stop() ?? Promise.resolve()),
+        {
+          timeoutMs,
+          maxAttempts,
+        },
+      );
       await worker.deliver({
         endpoint: {
           id: delivery.endpointId,
@@ -81,15 +96,27 @@ async function run(): Promise<void> {
         },
         event,
         attempt: delivery.attempts + 1,
+        signal: heartbeat.signal,
       });
+      await heartbeat.stopQuietly();
+      heartbeat = null;
     } catch (error) {
-      if (!(error instanceof WebhookDeliveryLeaseError)) {
-        const code = errorCode(error, 'EVENT_DELIVERY_FAILED');
+      let failure = error;
+      if (heartbeat) {
+        try {
+          await heartbeat.stop();
+        } catch (leaseError) {
+          failure = leaseError;
+        }
+        heartbeat = null;
+      }
+      if (!(failure instanceof WebhookDeliveryLeaseError)) {
+        const code = errorCode(failure, 'EVENT_DELIVERY_FAILED');
         await queue
           .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
-          .catch((failure) => logError(failure, 'EVENT_FAILURE_STATE_LOST'));
+          .catch((stateError) => logError(stateError, 'EVENT_FAILURE_STATE_LOST'));
       }
-      logError(error, 'EVENT_DELIVERY_FAILED');
+      logError(failure, 'EVENT_DELIVERY_FAILED');
     }
   }
   await pool.end();
diff --git a/workers/verification-worker/package.json b/workers/verification-worker/package.json
index 6b8ccc9..1bdd985 100644
--- a/workers/verification-worker/package.json
+++ b/workers/verification-worker/package.json
@@ -18,6 +18,7 @@
   },
   "dependencies": {
     "@ozzyl/encryption": "*",
+    "@ozzyl/database": "*",
     "@ozzyl/shared-types": "*",
     "@ozzyl/verification": "*",
     "pg": "^8.16.3",
diff --git a/workers/verification-worker/src/index.test.ts b/workers/verification-worker/src/index.test.ts
index 443b013..b75cf33 100644
--- a/workers/verification-worker/src/index.test.ts
+++ b/workers/verification-worker/src/index.test.ts
@@ -77,4 +77,35 @@ describe('VerificationWorker', () => {
     expect(state.failed).toHaveBeenCalledOnce();
     expect(state.retry).not.toHaveBeenCalled();
   });
+
+  it('aborts an active OTP request when the worker lease is lost', async () => {
+    const state = reporter();
+    const provider = {
+      send: vi.fn(
+        async ({ signal }: { signal?: AbortSignal }) =>
+          new Promise<{ providerMessageId: string; accepted: boolean }>((_resolve, reject) => {
+            signal?.addEventListener(
+              'abort',
+              () => reject(new DOMException('Aborted', 'AbortError')),
+              { once: true },
+            );
+          }),
+      ),
+    };
+    const worker = new VerificationWorker(provider, state, {
+      timeoutMs: 60_000,
+      now: () => new Date('2026-07-17T10:00:00.000Z'),
+    });
+    const controller = new AbortController();
+    const result = worker.process({ ...delivery, signal: controller.signal });
+
+    controller.abort(
+      Object.assign(new Error('lease lost'), { code: 'VERIFICATION_DELIVERY_LEASE_LOST' }),
+    );
+    await expect(result).resolves.toMatchObject({
+      status: 'retry_scheduled',
+      errorCode: 'OTP_PROVIDER_TIMEOUT',
+    });
+    expect(state.retry).toHaveBeenCalledOnce();
+  });
 });
diff --git a/workers/verification-worker/src/index.ts b/workers/verification-worker/src/index.ts
index f0c725e..7002674 100644
--- a/workers/verification-worker/src/index.ts
+++ b/workers/verification-worker/src/index.ts
@@ -10,6 +10,7 @@ export interface VerificationDelivery {
   purpose: string;
   expiresAt: Date;
   attempt: number;
+  signal?: AbortSignal;
 }

 export interface VerificationDeliveryReporter {
@@ -46,6 +47,9 @@ export class VerificationWorker {
     }

     const controller = new AbortController();
+    const abortFromCaller = (): void => controller.abort(delivery.signal?.reason);
+    if (delivery.signal?.aborted) abortFromCaller();
+    else delivery.signal?.addEventListener('abort', abortFromCaller, { once: true });
     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
     try {
       const result = await this.provider.send({
@@ -77,6 +81,7 @@ export class VerificationWorker {
       return { status: 'failed', errorCode: classified.code };
     } finally {
       clearTimeout(timeout);
+      delivery.signal?.removeEventListener('abort', abortFromCaller);
     }
   }
 }
diff --git a/workers/verification-worker/src/postgres.test.ts b/workers/verification-worker/src/postgres.test.ts
index 6c1f739..5ea5f4d 100644
--- a/workers/verification-worker/src/postgres.test.ts
+++ b/workers/verification-worker/src/postgres.test.ts
@@ -92,6 +92,36 @@ integration('PostgreSQL verification delivery leases', () => {
     expect(stored.rows[0]).toEqual({ status: 'delivered', attempts: 2, claimed_by: null });
   });

+  it('renews an active processing lease and rejects another owner', async () => {
+    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
+    const at = new Date('2026-07-17T13:30:00.000Z');
+    const worker = `renew-verification-${suffix}`;
+    const jobId = await insertJob('renew-processing', {
+      at,
+      expiresAt: new Date(at.getTime() + 600_000),
+    });
+
+    await expect(queue.claim(worker, at)).resolves.toMatchObject({ id: jobId });
+    await queue.started(jobId, worker, new Date(at.getTime() + 1_000));
+    const renewedAt = new Date(at.getTime() + 30_000);
+    await queue.renew(jobId, worker, renewedAt);
+
+    await expect(
+      queue.renew(jobId, `other-verification-${suffix}`, new Date(at.getTime() + 31_000)),
+    ).rejects.toBeInstanceOf(VerificationDeliveryLeaseError);
+    await expect(
+      queue.claim(`competitor-verification-${suffix}`, new Date(at.getTime() + 62_000)),
+    ).resolves.toBeNull();
+
+    const stored = await pool.query<{ lease_expires_at: Date }>(
+      `select lease_expires_at from verification_jobs where id = $1`,
+      [jobId],
+    );
+    expect(stored.rows[0]?.lease_expires_at.toISOString()).toBe(
+      new Date(renewedAt.getTime() + 60_000).toISOString(),
+    );
+  });
+
   it('clears ownership when retryable delivery is rescheduled', async () => {
     const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
     const at = new Date('2026-07-17T14:00:00.000Z');
diff --git a/workers/verification-worker/src/postgres.ts b/workers/verification-worker/src/postgres.ts
index 3d351f6..38f5532 100644
--- a/workers/verification-worker/src/postgres.ts
+++ b/workers/verification-worker/src/postgres.ts
@@ -181,6 +181,25 @@ export class PostgresVerificationDeliveryQueue {
     this.assertOwned(result.rowCount);
   }

+  async renew(jobId: string, workerId: string, at = new Date()): Promise<void> {
+    const result = await this.pool.query(
+      `
+        update verification_jobs vj
+        set lease_expires_at = $3, updated_at = now()
+        from verification_sessions vs
+        where vj.id = $1 and vj.claimed_by = $2
+          and vj.status in ('claimed', 'processing')
+          and vj.lease_expires_at > $4
+          and vs.id = vj.verification_session_id
+          and vs.organization_id = vj.organization_id
+          and vs.store_id = vj.store_id
+          and vs.status = 'queued' and vs.expires_at > $4
+      `,
+      [jobId, workerId, new Date(at.getTime() + this.leaseMs), at],
+    );
+    this.assertOwned(result.rowCount);
+  }
+
   async delivered(
     jobId: string,
     workerId: string,
@@ -301,18 +320,22 @@ export class PostgresVerificationDeliveryQueue {
   reporterFor(
     delivery: ClaimedVerificationDelivery,
     workerId: string,
+    beforeTransition: () => Promise<void> = async () => undefined,
   ): VerificationDeliveryReporter {
     return {
       delivered: async (jobId, providerMessageId, at) => {
         this.assertIdentity(delivery, jobId);
+        await beforeTransition();
         await this.delivered(jobId, workerId, providerMessageId, at);
       },
       retry: async (jobId, errorCode, nextAttemptAt, at) => {
         this.assertIdentity(delivery, jobId);
+        await beforeTransition();
         await this.retry(jobId, workerId, { errorCode, nextAttemptAt, at });
       },
       failed: async (jobId, errorCode, at) => {
         this.assertIdentity(delivery, jobId);
+        await beforeTransition();
         await this.failed(jobId, workerId, { errorCode, at });
       },
     };
diff --git a/workers/verification-worker/src/runner.ts b/workers/verification-worker/src/runner.ts
index cfdccae..9adf5a6 100644
--- a/workers/verification-worker/src/runner.ts
+++ b/workers/verification-worker/src/runner.ts
@@ -1,5 +1,6 @@
 import { randomUUID } from 'node:crypto';
 import { Pool } from 'pg';
+import { LeaseHeartbeat } from '@ozzyl/database';
 import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
 import { createStructuredLogger } from '@ozzyl/observability';
 import type { OtpDeliveryProvider } from '@ozzyl/verification';
@@ -29,6 +30,7 @@ const otpSecret = required('OTP_HASH_SECRET');
 const phoneHmacKey = required('PHONE_HMAC_KEY');
 const pollMs = positiveInteger('VERIFICATION_WORKER_POLL_MS', 5_000);
 const leaseMs = positiveInteger('VERIFICATION_WORKER_LEASE_MS', 60_000);
+const leaseRenewMs = positiveInteger('VERIFICATION_WORKER_LEASE_RENEW_MS', Math.floor(leaseMs / 3));
 const timeoutMs = positiveInteger('OTP_PROVIDER_TIMEOUT_MS', 10_000);
 const maxAttempts = positiveInteger('VERIFICATION_WORKER_MAX_ATTEMPTS', 5);
 if (leaseMs <= timeoutMs + 5_000) {
@@ -36,6 +38,9 @@ if (leaseMs <= timeoutMs + 5_000) {
     'VERIFICATION_WORKER_LEASE_MS must exceed OTP_PROVIDER_TIMEOUT_MS by more than 5000ms',
   );
 }
+if (leaseRenewMs * 2 > leaseMs) {
+  throw new Error('VERIFICATION_WORKER_LEASE_RENEW_MS must not exceed half the lease');
+}
 const workerId = process.env.VERIFICATION_WORKER_ID ?? `verification-${randomUUID()}`;
 const log = createStructuredLogger({
   service: 'verification-worker',
@@ -57,17 +62,26 @@ async function run(): Promise<void> {
       continue;
     }

+    let heartbeat: LeaseHeartbeat | null = null;
     try {
       await queue.started(delivery.id, workerId);
+      heartbeat = new LeaseHeartbeat({
+        intervalMs: leaseRenewMs,
+        renew: (at) => queue.renew(delivery.id, workerId, at),
+      }).start();
       const payload = decryptAndValidateVerificationPayload(delivery, {
         cipher,
         phoneHmacKey,
         otpSecret,
       });
-      const worker = new VerificationWorker(provider, queue.reporterFor(delivery, workerId), {
-        maxAttempts,
-        timeoutMs,
-      });
+      const worker = new VerificationWorker(
+        provider,
+        queue.reporterFor(delivery, workerId, () => heartbeat?.stop() ?? Promise.resolve()),
+        {
+          maxAttempts,
+          timeoutMs,
+        },
+      );
       await worker.process({
         jobId: delivery.id,
         verificationId: delivery.verificationId,
@@ -78,15 +92,27 @@ async function run(): Promise<void> {
         purpose: delivery.purpose,
         expiresAt: delivery.expiresAt,
         attempt: delivery.attempts + 1,
+        signal: heartbeat.signal,
       });
+      await heartbeat.stopQuietly();
+      heartbeat = null;
     } catch (error) {
-      if (!(error instanceof VerificationDeliveryLeaseError)) {
-        const code = errorCode(error, 'VERIFICATION_DELIVERY_FAILED');
+      let failure = error;
+      if (heartbeat) {
+        try {
+          await heartbeat.stop();
+        } catch (leaseError) {
+          failure = leaseError;
+        }
+        heartbeat = null;
+      }
+      if (!(failure instanceof VerificationDeliveryLeaseError)) {
+        const code = errorCode(failure, 'VERIFICATION_DELIVERY_FAILED');
         await queue
           .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
-          .catch((failure) => logError(failure, 'VERIFICATION_FAILURE_STATE_LOST'));
+          .catch((stateError) => logError(stateError, 'VERIFICATION_FAILURE_STATE_LOST'));
       }
-      logError(error, 'VERIFICATION_DELIVERY_FAILED');
+      logError(failure, 'VERIFICATION_DELIVERY_FAILED');
     }
   }
   await pool.end();
```

## Existing AI Bridge Context

--- .ai-bridge/current-plan.md ---
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and sixteen production-hardening slices are complete:
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
 24 | 16. owner-checked renewable leases for courier, webhook, and verification workers, with non-overlapping heartbeats, abort-on-renewal-loss provider I/O, and heartbeat drain before final queue transitions.
 25 |
 26 | Concrete provider selection and provisioning remain external production work.
 27 |
 28 | ## Completed
 29 |
 30 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 31 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 32 | - [x] Canonical shared API/error/event contracts
 33 | - [x] PostgreSQL/Drizzle schema and twelve append-only migrations
 34 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 35 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 36 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 37 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 38 | - [x] Courier adapter contract and Steadfast normalized adapter
 39 | - [x] Playwright Steadfast session driver with structured errors
 40 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 41 | - [x] Runnable PostgreSQL courier session and observation workers
 42 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 43 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 44 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 45 | - [x] API OTP send returns queued work without provider network I/O
 46 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 47 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 48 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 49 | - [x] Explicit-role platform admin with live global operations data
 50 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 51 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 52 | - [x] Architecture dependency-boundary CI guard
 53 | - [x] Provider-neutral production deployment topology ADR
 54 | - [x] Managed PostgreSQL production baseline ADR
 55 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 56 | - [x] Managed secrets and KMS envelope-encryption ADR
 57 | - [x] Vendor-neutral OpenTelemetry observability ADR
 58 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 59 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 60 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 61 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 62 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 63 | - [x] Concurrent usage reservations cannot exceed the plan limit
 64 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 65 | - [x] Concurrent outcome writes resolve as one insert and one replay
 66 | - [x] Operation idempotency records remain isolated by organization and store
 67 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 68 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 69 | - [x] Expired or previous courier owners cannot complete or fail jobs
 70 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 71 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 72 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 73 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 74 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 75 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 76 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 77 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 78 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 79 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 80 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 81 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 82 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 83 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 84 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 85 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 86 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 87 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 88 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 89 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 90 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 91 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 92 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 93 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 94 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 95 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 96 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 97 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 98 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
 99 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
100 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
101 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
102 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
103 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
104 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
105 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
106 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
107 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
108 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
109 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
110 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
111 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
112 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
113 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
114 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
115 |
116 | ## Verified baseline
117 |
118 | - Formatting check: passed
119 | - ESLint with zero warnings: passed
120 | - Twelve migration files ordered/non-empty/non-destructive: passed
121 | - First migration apply and immediate migration replay: passed
122 | - Architecture import boundaries: passed
123 | - Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
124 | - Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
125 | - Repository assertion inventory: 145, including three heartbeat lifecycle tests, three provider-abort tests, and three PostgreSQL owner-checked renewal tests; PostgreSQL-integrated source-branch CI is pending
126 | - Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
127 | - WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
128 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
129 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
130 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
131 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
132 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
133 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
134 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
135 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
136 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
137 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
138 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
139 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
140 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
141 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
142 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
143 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
144 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
145 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
146 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
147 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
148 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
149 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
150 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
151 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
152 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
153 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
154 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
155 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
156 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
157 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
158 | - Canonical documentation links before this slice: zero known broken internal links
159 | - `tracker.yml` YAML structure remains valid
160 | - Prohibited source-pattern search: no matches
161 |
162 | The repository-local continuation exporter was refreshed after the durable worker heartbeat milestone documentation was finalized, so its embedded snapshots match the current branch state.
163 |
164 | ## Next production milestone
165 |
166 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
167 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
168 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
169 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
170 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
171 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
172 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
173 |
174 | ## External blockers
175 |
176 | - Authorized Steadfast merchant/test credentials
177 | - Steadfast provider-terms and merchant-authorization review
178 | - Deployment platform, account, primary region, and budget
179 | - Managed PostgreSQL provider and service tier
180 | - Managed secret store and KMS/vault provider
181 | - Observability backend and retention policy
182 | - OTP provider account and credentials
183 | - Production account recovery/MFA or managed identity-provider decision
184 | - Repository visibility correction from currently reported public to expected private
185 | - Pilot outcome data for false-positive/false-negative calibration
186 |
187 | ## Non-negotiable continuation rules
188 |
189 | - Do not add a second risk engine.
190 | - Do not call providers from the risk engine or synchronous checkout path.
191 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
192 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
193 | - Do not use API keys as dashboard user sessions.
194 | - Require organization/store scope in all merchant repositories, events, and jobs.
195 | - Add new migrations; never edit applied migrations.
196 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
197 | - Keep Redis/cache state non-authoritative.
198 | - Keep unknown/provider failure explicit and policy-controlled.
199 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
200 |

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
 50 |
 51 | ## Source SaaS conflict resolutions
 52 |
 53 | | Conflict                                                                 | Decision                                                                                   |
 54 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 55 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 56 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 57 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 58 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 59 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 60 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 61 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 62 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 63 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 64 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 65 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 66 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 67 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 68 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 69 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 70 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 71 |
 72 | ## Approved reuse scope
 73 |
 74 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 75 | - Bangladesh phone normalization after tests
 76 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 77 | - WooCommerce settings/order hook/admin display skeleton
 78 | - API-key hash/display-prefix and usage-event concepts
 79 |
 80 | No product source code was copied during Phase 0.
 81 |
 82 | ## Pending decisions
 83 |
 84 | These require provider selection, provisioning, or separate ADRs before production implementation:
 85 |
 86 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 87 | - Specific deployment platform, account, and primary region
 88 | - Specific managed PostgreSQL provider and service tier
 89 | - Specific managed secret store and KMS/vault provider
 90 | - Specific observability backend and retention policy
 91 | - Redis-compatible cache provider when distributed coordination is required
 92 | - Dedicated broker only if measured scale requires superseding ADR 0008
 93 | - Worker scheduler/runtime implementation on the selected deployment platform
 94 | - OTP provider
 95 |
 96 | ## External requirements
 97 |
 98 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
 99 |
100 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
101 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, README.md, config/environment.example, docker-compose.yml, docs/operations/deployment.md, docs/operations/operations-observability.md, docs/testing/testing-strategy.md, package-lock.json, packages/courier-adapters/src/index.test.ts, packages/courier-adapters/src/index.ts, packages/database/src/index.ts, tracker.yml, workers/courier-sync-worker/package.json, workers/courier-sync-worker/src/index.ts, workers/courier-sync-worker/src/postgres.test.ts, workers/courier-sync-worker/src/runner.ts, workers/event-worker/package.json, workers/event-worker/src/index.test.ts, workers/event-worker/src/index.ts, workers/event-worker/src/postgres.test.ts, workers/event-worker/src/postgres.ts, workers/event-worker/src/runner.ts, workers/verification-worker/package.json, workers/verification-worker/src/index.test.ts, workers/verification-worker/src/index.ts, workers/verification-worker/src/postgres.test.ts, workers/verification-worker/src/postgres.ts, workers/verification-worker/src/runner.ts, packages/database/src/lease-heartbeat.test.ts, packages/database/src/lease-heartbeat.ts
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, eslint.config.js, package.json, README.md, turbo.json, workers/courier-sync-worker/package.json, workers/event-worker/package.json, workers/verification-worker/package.json, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, config/environment.example, docker-compose.yml, docs/operations/deployment.md, docs/operations/operations-observability.md, docs/testing/testing-strategy.md, package-lock.json, packages/courier-adapters/src/index.test.ts, packages/courier-adapters/src/index.ts, packages/database/src/index.ts, packages/database/src/lease-heartbeat.test.ts, packages/database/src/lease-heartbeat.ts, tracker.yml, workers/courier-sync-worker/src/index.ts

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

### README.md

Bytes: 7306
SHA-256: 849db2c51f1d93e6610fdadd19c4d0cb6fc9f9d5e85089b326f73efc4eb6df40
Lines: 1-148 of 148

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
 36 | - Durable signed webhook outbox/worker with retries, renewable leases, encrypted secrets, and DNS-aware SSRF protection
 37 | - Owner-checked lease heartbeats for courier, webhook, and verification work; renewal loss aborts active provider I/O before stale final-state writes
 38 | - Tenant-scoped, owner/admin-authorized dead-letter inspection and idempotent controlled replay for courier, webhook, and verification work, with immutable replay/audit evidence
 39 | - Merchant dashboard and platform operations admin applications
 40 | - WooCommerce plugin, Shopify adapter, custom JavaScript/server adapter, and native multi-store adapter
 41 | - Docker, Docker Compose, migration integrity verification, clean logical restore rehearsal, and least-privilege runtime-role verification in CI
 42 | - Authoritative organization/store revalidation across API keys, feature assembly, writes, dashboards, and secret-free webhook/verification administration
 43 | - Provider-neutral managed envelope v2 with per-record data keys, authenticated wrapped-key metadata, structured safe failures, legacy dual-read, and rotation/re-encryption primitives
 44 | - Native multi-store post-persist shadow integration with authoritative source-order revalidation, explicit store opt-in, immutable success/failure attempt evidence, tenant-scoped pilot reporting, and legacy-authoritative behavior
 45 | - Authenticated owner/admin merchant dead-letter page with secret-free inspection and CSRF-protected idempotent replay through the existing PostgreSQL operations repository
 46 | - Canonical structured logging/redaction package used by the API and all four private workers; telemetry sink failures cannot break request or worker execution
 47 | - API-wide safe request correlation with opaque request IDs, bounded route templates, status classes, latency, and redacted unhandled-error records
 48 |
 49 | The following require external accounts or production decisions before live use:
 50 |
 51 | - Authorized Steadfast merchant/test credentials and provider-terms review
 52 | - A selected KMS/vault adapter, component service identities, access auditing, runtime wiring, and an audited background rewrite before replacing local v1 encryption in production
 53 | - OTP provider selection and credentials
 54 | - Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
 55 | - Production queue/cache/observability providers
 56 | - Production source-platform hook deployment, explicit pilot-store selection, and outcome calibration before any enforcement or broad automatic blocking
 57 |
 58 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
 59 |
 60 | ## Repository structure
 61 |
 62 | ```text
 63 | apps/
 64 |   api/             Versioned API and PostgreSQL repositories
 65 |   dashboard/       Merchant operations dashboard
 66 |   admin/           Platform operations dashboard
 67 | workers/
 68 |   courier-session-worker/
 69 |   courier-sync-worker/
 70 |   verification-worker/
 71 |   event-worker/
 72 | packages/
 73 |   shared-types/
 74 |   risk-engine/
 75 |   courier-adapters/
 76 |   database/
 77 |   authentication/
 78 |   billing/
 79 |   verification/
 80 |   sdk/
 81 |   observability/
 82 | integrations/
 83 |   woocommerce/
 84 |   shopify/
 85 |   custom-js/
 86 |   multi-store-saas/
 87 | docs/
 88 | .ai-bridge/
 89 | ```
 90 |
 91 | ## Core rules
 92 |
 93 | 1. There is exactly one canonical risk engine.
 94 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
 95 | 3. Courier providers are isolated behind adapters and asynchronous workers.
 96 | 4. Merchant data is always organization/store scoped.
 97 | 5. Unknown customers are not automatically safe.
 98 | 6. Provider failure does not automatically approve or block a customer.
 99 | 7. Every assessment returns explainable signals and confidence.
100 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
101 | 9. Applied migrations are immutable; changes require a new migration.
102 | 10. Every integration consumes the same canonical API response.
103 |
104 | ## Local setup
105 |
106 | Prerequisites: Node.js 20.19+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
107 |
108 | ```bash
109 | npm install
110 | npm run db:check
111 | npm run db:migrate
112 | npm run db:integrity
113 | # After creating a separate non-owner PostgreSQL login outside the app:
114 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
115 | npm run bootstrap -w @ozzyl/api
116 | npm run dev:api
117 | ```
118 |
119 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
120 |
121 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
122 |
123 | Dead-letter operations are documented in the [durable work runbook](docs/operations/durable-work-dead-letter-runbook.md). They require a trusted environment, `DATABASE_URL`, an active owner/admin user ID, and exact organization/store scope.
124 |
125 | Merchant dashboard:
126 |
127 | ```bash
128 | npm run dev:dashboard
129 | ```
130 |
131 | Platform admin:
132 |
133 | ```bash
134 | npm run dev -w @ozzyl/admin
135 | ```
136 |
137 | Private workers:
138 |
139 | ```bash
140 | npm run start -w @ozzyl/courier-session-worker
141 | npm run start -w @ozzyl/courier-sync-worker
142 | npm run start -w @ozzyl/event-worker
143 | # Requires a reviewed provider module/account in addition to the standard secrets:
144 | npm run start -w @ozzyl/verification-worker
145 | ```
146 |
147 | ## Docker Compose
148 |
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

### workers/courier-sync-worker/package.json

Bytes: 694
SHA-256: c23ef6fddb4e78e7c6e7b822a61c25b7c0063d13fbf63b9459359db67cba7327
Lines: 1-30 of 30

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
22 |     "@ozzyl/database": "*",
23 |     "pg": "^8.16.3",
24 |     "@ozzyl/observability": "*"
25 |   },
26 |   "devDependencies": {
27 |     "@types/pg": "^8.15.5"
28 |   }
29 | }
30 |
```

### workers/event-worker/package.json

Bytes: 687
SHA-256: 6eff7d44ee568ef1ee6f423c776d51ffb640d30ecbb5aeb076c859183aaaa843
Lines: 1-30 of 30

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
22 |     "@ozzyl/database": "*",
23 |     "pg": "^8.16.3",
24 |     "@ozzyl/observability": "*"
25 |   },
26 |   "devDependencies": {
27 |     "@types/pg": "^8.15.5"
28 |   }
29 | }
30 |
```

### workers/verification-worker/package.json

Bytes: 726
SHA-256: 99cd5ee628d9f892d291ff36d61dac869130b3cc0cecca157682fe79c854eb2a
Lines: 1-31 of 31

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
21 |     "@ozzyl/database": "*",
22 |     "@ozzyl/shared-types": "*",
23 |     "@ozzyl/verification": "*",
24 |     "pg": "^8.16.3",
25 |     "@ozzyl/observability": "*"
26 |   },
27 |   "devDependencies": {
28 |     "@types/pg": "^8.15.5"
29 |   }
30 | }
31 |
```

### .ai-bridge/current-plan.md

Bytes: 21983
SHA-256: 984cdd710fe92527bfdb7c3b1f31a9d4701d2ee51fed3fc11315c574bbb1f01d
Lines: 1-200 of 200

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and sixteen production-hardening slices are complete:
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
 24 | 16. owner-checked renewable leases for courier, webhook, and verification workers, with non-overlapping heartbeats, abort-on-renewal-loss provider I/O, and heartbeat drain before final queue transitions.
 25 |
 26 | Concrete provider selection and provisioning remain external production work.
 27 |
 28 | ## Completed
 29 |
 30 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 31 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 32 | - [x] Canonical shared API/error/event contracts
 33 | - [x] PostgreSQL/Drizzle schema and twelve append-only migrations
 34 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 35 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 36 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 37 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 38 | - [x] Courier adapter contract and Steadfast normalized adapter
 39 | - [x] Playwright Steadfast session driver with structured errors
 40 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 41 | - [x] Runnable PostgreSQL courier session and observation workers
 42 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 43 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 44 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 45 | - [x] API OTP send returns queued work without provider network I/O
 46 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 47 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 48 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 49 | - [x] Explicit-role platform admin with live global operations data
 50 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 51 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 52 | - [x] Architecture dependency-boundary CI guard
 53 | - [x] Provider-neutral production deployment topology ADR
 54 | - [x] Managed PostgreSQL production baseline ADR
 55 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 56 | - [x] Managed secrets and KMS envelope-encryption ADR
 57 | - [x] Vendor-neutral OpenTelemetry observability ADR
 58 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 59 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 60 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 61 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 62 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 63 | - [x] Concurrent usage reservations cannot exceed the plan limit
 64 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 65 | - [x] Concurrent outcome writes resolve as one insert and one replay
 66 | - [x] Operation idempotency records remain isolated by organization and store
 67 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 68 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 69 | - [x] Expired or previous courier owners cannot complete or fail jobs
 70 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 71 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 72 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
 73 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
 74 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
 75 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 76 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 77 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 78 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 79 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 80 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 81 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 82 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 83 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 84 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 85 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 86 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 87 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 88 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 89 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 90 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 91 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 92 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 93 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 94 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 95 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 96 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 97 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 98 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
 99 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
100 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
101 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
102 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
103 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
104 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
105 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
106 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
107 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
108 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
109 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
110 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
111 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
112 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
113 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
114 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
115 |
116 | ## Verified baseline
117 |
118 | - Formatting check: passed
119 | - ESLint with zero warnings: passed
120 | - Twelve migration files ordered/non-empty/non-destructive: passed
121 | - First migration apply and immediate migration replay: passed
122 | - Architecture import boundaries: passed
123 | - Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
124 | - Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
125 | - Repository assertion inventory: 145, including three heartbeat lifecycle tests, three provider-abort tests, and three PostgreSQL owner-checked renewal tests; PostgreSQL-integrated source-branch CI is pending
126 | - Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
127 | - WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
128 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
129 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
130 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
131 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
132 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
133 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
134 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
135 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
136 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
137 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
138 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
139 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
140 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
141 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
142 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
143 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
144 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
145 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
146 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
147 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
148 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
149 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
150 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
151 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
152 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
153 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
154 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
155 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
156 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
157 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
158 | - Canonical documentation links before this slice: zero known broken internal links
159 | - `tracker.yml` YAML structure remains valid
160 | - Prohibited source-pattern search: no matches
161 |
162 | The repository-local continuation exporter was refreshed after the durable worker heartbeat milestone documentation was finalized, so its embedded snapshots match the current branch state.
163 |
164 | ## Next production milestone
165 |
166 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
167 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
168 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
169 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
170 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
171 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
172 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
173 |
174 | ## External blockers
175 |
176 | - Authorized Steadfast merchant/test credentials
177 | - Steadfast provider-terms and merchant-authorization review
178 | - Deployment platform, account, primary region, and budget
179 | - Managed PostgreSQL provider and service tier
180 | - Managed secret store and KMS/vault provider
181 | - Observability backend and retention policy
182 | - OTP provider account and credentials
183 | - Production account recovery/MFA or managed identity-provider decision
184 | - Repository visibility correction from currently reported public to expected private
185 | - Pilot outcome data for false-positive/false-negative calibration
186 |
187 | ## Non-negotiable continuation rules
188 |
189 | - Do not add a second risk engine.
190 | - Do not call providers from the risk engine or synchronous checkout path.
191 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
192 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
193 | - Do not use API keys as dashboard user sessions.
194 | - Require organization/store scope in all merchant repositories, events, and jobs.
195 | - Add new migrations; never edit applied migrations.
196 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
197 | - Keep Redis/cache state non-authoritative.
198 | - Keep unknown/provider failure explicit and policy-controlled.
199 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
200 |
```

### .ai-bridge/decisions.md

Bytes: 15473
SHA-256: a342846b71c5363b50e806c6c848aedc55bfb317071b48bd517f25148be3ffa5
Lines: 1-101 of 101

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
 50 |
 51 | ## Source SaaS conflict resolutions
 52 |
 53 | | Conflict                                                                 | Decision                                                                                   |
 54 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 55 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 56 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 57 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 58 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 59 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 60 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 61 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 62 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 63 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 64 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 65 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 66 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 67 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 68 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 69 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 70 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 71 |
 72 | ## Approved reuse scope
 73 |
 74 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 75 | - Bangladesh phone normalization after tests
 76 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 77 | - WooCommerce settings/order hook/admin display skeleton
 78 | - API-key hash/display-prefix and usage-event concepts
 79 |
 80 | No product source code was copied during Phase 0.
 81 |
 82 | ## Pending decisions
 83 |
 84 | These require provider selection, provisioning, or separate ADRs before production implementation:
 85 |
 86 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 87 | - Specific deployment platform, account, and primary region
 88 | - Specific managed PostgreSQL provider and service tier
 89 | - Specific managed secret store and KMS/vault provider
 90 | - Specific observability backend and retention policy
 91 | - Redis-compatible cache provider when distributed coordination is required
 92 | - Dedicated broker only if measured scale requires superseding ADR 0008
 93 | - Worker scheduler/runtime implementation on the selected deployment platform
 94 | - OTP provider
 95 |
 96 | ## External requirements
 97 |
 98 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
 99 |
100 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
101 |
```

### .ai-bridge/implementation-status.md

Bytes: 24224
SHA-256: 10c5c7ebf994e089ec461982dddd00495d4a8dae3d798363a0dd52e2fcc339a5
Lines: 1-176 of 176

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
 27 | | Area                             | Status   | Notes                                                                                                                                                                                        |
 28 | | -------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                              |
 30 | | Database/migrations              | done     | Twelve append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                              |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                           |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                              |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                        |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                         |
 38 | | Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                    |
 39 | | Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                            |
 40 | | Durable work architecture        | done     | PostgreSQL claims, renewable owner-checked heartbeats, abort-on-loss provider I/O, drained final transitions, dead-letter inspection, replay, CLI, and merchant browser operations           |
 41 | | Durable work operations          | done     | Failed courier, webhook, and verification work can be inspected and safely replayed through one transactional repository from the CLI or owner/admin browser surface with immutable evidence |
 42 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                       |
 43 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                              |
 44 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                     |
 45 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                     |
 46 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                  |
 47 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                               |
 48 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                     |
 49 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                         |
 50 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                          |
 51 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                |
 52 | | OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                              |
 53 | | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                               |
 54 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                    |
 55 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                   |
 56 | | PostgreSQL runtime role          | done     | Explicit current-table DML grants, no migration history/DELETE/DDL/ownership/elevated membership; managed-provider provisioning remains                                                      |
 57 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                       |
 58 | | Observability                    | baseline | Canonical redacted logging covers API request lifecycle plus four private workers; metrics, traces, exporters, repository/provider instrumentation, backend, dashboards, and alerts remain   |
 59 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                    |
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
 88 | - `npm run typecheck`: 20/20 workspaces passed locally; source-branch CI is pending
 89 | - `npm run test`: 31/31 Turbo dependency tasks passed locally; source inventory contains 145 assertions, including nine lease-heartbeat/renewal/abort tests
 90 | - `npm run build`: 20/20 workspace builds passed locally; source-branch CI is pending
 91 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 92 | - Observability tests prove fixed metadata, nested redaction, error message/stack omission, circular/binary/bigint handling, bounded strings, reserved-field protection, and sink-failure isolation
 93 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, safe unhandled-error serialization, and request availability during sink failure
 94 | - Lease-heartbeat tests prove non-overlapping renewal, owner/expiry enforcement, abort-on-renewal-loss propagation, and heartbeat drain before final courier/webhook/verification transitions
 95 | - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
 96 | - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
 97 | - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
 98 | - Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
 99 | - Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
100 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
101 | - Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
102 | - Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
103 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
104 | - Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
105 | - Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
106 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
107 | - Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
108 | - Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
109 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
110 | - Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
111 | - Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
112 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
113 | - Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
114 | - Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
115 | - Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
116 | - Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
117 | - Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
118 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
119 | - Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
120 | - Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
121 | - Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
122 | - Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
123 | - Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
124 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
125 | - Five real-PostgreSQL durable-work tests cover exact-store owner/admin listing, negative member authorization, concurrent duplicate replay, one immutable ledger/audit outcome, courier lease reset, scoped unexpired verification reopening, structural/expired rejection, cross-tenant isolation, and idempotency conflicts
126 | - Seven runtime-role tests now include insert-only replay-ledger privileges alongside migration-history, DELETE, DDL, ownership, and elevated-role denials
127 | - Durable-work dead-letter final run `29644234591`, job `88079650134`: twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
128 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
129 | - Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping
130 | - Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
131 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
132 | - Structured observability final run `30317190971`, job `90145176143`: twelve migrations, 20 typechecks, 31 Turbo test/build dependency tasks with 132 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
133 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
134 | - API request observability final run `30318999952`, job `90150731352`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 136 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
135 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
136 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
137 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
138 | - Previous canonical documentation checks found zero broken internal links
139 | - Prohibited insecure-pattern scan: zero matches
140 |
141 | The repository-local exporter was refreshed after the durable worker heartbeat milestone documentation was finalized. Source-branch remote CI is pending.
142 |
143 | ## External blockers and production requirements
144 |
145 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
146 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
147 | - Managed secret store and KMS/vault provider
148 | - Observability backend, retention, dashboards, alerts, and incident channels
149 | - Optional Redis-compatible cache only when distributed coordination is required
150 | - Authorized Steadfast test/merchant account
151 | - Provider-terms and merchant-authorization review
152 | - OTP provider selection/account
153 | - Production account recovery/MFA or managed identity-provider decision
154 | - Pilot merchants and verified outcome data for calibration
155 |
156 | ## Remaining risks
157 |
158 | - Steadfast UI/internal endpoint changes can break automation.
159 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
160 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
161 | - In-process API and browser-session rate limiting is not distributed across replicas.
162 | - Durable workers now renew active leases and abort provider I/O on renewal loss; a reviewed retention/archival policy remains production work.
163 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
164 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
165 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
166 | - GitHub currently reports public repository visibility although the expected policy is private.
167 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
168 | - Structured logs are implemented for API request lifecycle and private worker startup/error paths, but repository/provider metrics, traces, exporters, dashboards, alerts, and managed retention are not yet implemented.
169 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
170 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
171 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
172 |
173 | ## Next milestone
174 |
175 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
176 |
```

### config/environment.example

Bytes: 3143
SHA-256: 4e6bcd6fd5221d524696eadb559972f06aa909c7fabf9e102d629d2d1f6f91b0
Lines: 1-86 of 86

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
52 | WORKER_LEASE_MS=300000
53 | WORKER_LEASE_RENEW_MS=100000
54 | # Set a stable unique identifier per replica in production. Local workers generate one when omitted.
55 | WORKER_ID=courier-sync-local
56 |
57 | # Durable webhook event worker
58 | EVENT_WORKER_ID=event-local
59 | EVENT_WORKER_POLL_MS=5000
60 | EVENT_WORKER_LEASE_MS=60000
61 | EVENT_WORKER_LEASE_RENEW_MS=20000
62 | EVENT_WORKER_MAX_ATTEMPTS=5
63 | WEBHOOK_TIMEOUT_MS=5000
64 | STEADFAST_LIVE_TESTS=false
65 |
66 | # Queue/cache placeholders for later external infrastructure ADRs
67 | QUEUE_URL=[REDACTED_SECRET]
68 | CACHE_URL=[REDACTED_SECRET]
69 |
70 | # Durable verification worker. OTP_PROVIDER_MODULE must export createOtpDeliveryProvider().
71 | # No provider module is selected or bundled by this milestone.
72 | VERIFICATION_WORKER_ID=verification-local
73 | VERIFICATION_WORKER_POLL_MS=5000
74 | VERIFICATION_WORKER_LEASE_MS=60000
75 | VERIFICATION_WORKER_LEASE_RENEW_MS=20000
76 | VERIFICATION_WORKER_MAX_ATTEMPTS=5
77 | OTP_PROVIDER_TIMEOUT_MS=10000
78 | OTP_PROVIDER_MODULE=[REDACTED_PROVIDER_MODULE]
79 | OTP_SENDER_ID=[REDACTED_SECRET]
80 | OTP_PROVIDER_API_KEY=[REDACTED_SECRET]
81 |
82 | # Webhook signing and observability
83 | WEBHOOK_SIGNING_SECRET=[REDACTED_SECRET]
84 | ERROR_TRACKING_DSN=[REDACTED_SECRET]
85 | OTEL_EXPORTER_OTLP_ENDPOINT=[REDACTED_SECRET]
86 |
```

### docker-compose.yml

Bytes: 5757
SHA-256: 56821cc3e82d2e6b0b76460c7710b22d7e528c7696ee32d96294feeb118e6cf7
Lines: 1-153 of 153

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
 94 |       WORKER_LEASE_MS: ${WORKER_LEASE_MS:-300000}
 95 |       WORKER_LEASE_RENEW_MS: ${WORKER_LEASE_RENEW_MS:-100000}
 96 |     depends_on:
 97 |       migrate:
 98 |         condition: service_completed_successfully
 99 |     restart: unless-stopped
100 |
101 |   verification-worker:
102 |     profiles: ['verification']
103 |     build:
104 |       context: .
105 |       dockerfile: Dockerfile
106 |       target: runtime
107 |     command: ['node', 'workers/verification-worker/dist/runner.js']
108 |     environment:
109 |       NODE_ENV: production
110 |       DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
111 |       CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
112 |       CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
113 |       PHONE_HMAC_KEY: ${PHONE_HMAC_KEY:?PHONE_HMAC_KEY is required}
114 |       OTP_HASH_SECRET: ${OTP_HASH_SECRET:?OTP_HASH_SECRET is required}
115 |       OTP_PROVIDER_MODULE: ${OTP_PROVIDER_MODULE:-}
116 |       OTP_SENDER_ID: ${OTP_SENDER_ID:-}
117 |       OTP_PROVIDER_API_KEY: ${OTP_PROVIDER_API_KEY:-}
118 |       VERIFICATION_WORKER_ID: ${VERIFICATION_WORKER_ID:-verification-local}
119 |       VERIFICATION_WORKER_POLL_MS: ${VERIFICATION_WORKER_POLL_MS:-5000}
120 |       VERIFICATION_WORKER_LEASE_MS: ${VERIFICATION_WORKER_LEASE_MS:-60000}
121 |       VERIFICATION_WORKER_LEASE_RENEW_MS: ${VERIFICATION_WORKER_LEASE_RENEW_MS:-20000}
122 |       VERIFICATION_WORKER_MAX_ATTEMPTS: ${VERIFICATION_WORKER_MAX_ATTEMPTS:-5}
123 |       OTP_PROVIDER_TIMEOUT_MS: ${OTP_PROVIDER_TIMEOUT_MS:-10000}
124 |     depends_on:
125 |       migrate:
126 |         condition: service_completed_successfully
127 |     restart: unless-stopped
128 |
129 |   event-worker:
130 |     build:
131 |       context: .
132 |       dockerfile: Dockerfile
133 |       target: runtime
134 |     command: ['node', 'workers/event-worker/dist/runner.js']
135 |     environment:
136 |       NODE_ENV: production
137 |       DATABASE_URL: postgresql://ozzyl_guard:${POSTGRES_PASSWORD}@postgres:5432/ozzyl_guard
138 |       CREDENTIAL_ENCRYPTION_KEY: ${CREDENTIAL_ENCRYPTION_KEY:?CREDENTIAL_ENCRYPTION_KEY is required}
139 |       CREDENTIAL_ENCRYPTION_KEY_VERSION: ${CREDENTIAL_ENCRYPTION_KEY_VERSION:-v1}
140 |       EVENT_WORKER_ID: ${EVENT_WORKER_ID:-event-local}
141 |       EVENT_WORKER_POLL_MS: ${EVENT_WORKER_POLL_MS:-5000}
142 |       EVENT_WORKER_LEASE_MS: ${EVENT_WORKER_LEASE_MS:-60000}
143 |       EVENT_WORKER_LEASE_RENEW_MS: ${EVENT_WORKER_LEASE_RENEW_MS:-20000}
144 |       EVENT_WORKER_MAX_ATTEMPTS: ${EVENT_WORKER_MAX_ATTEMPTS:-5}
145 |       WEBHOOK_TIMEOUT_MS: ${WEBHOOK_TIMEOUT_MS:-5000}
146 |     depends_on:
147 |       migrate:
148 |         condition: service_completed_successfully
149 |     restart: unless-stopped
150 |
151 | volumes:
152 |   ozzyl_guard_postgres:
153 |
```

### docs/operations/deployment.md

Bytes: 13508
SHA-256: 3e41f79b0bcd857f1fce2b7f6468aaad4cf28e38654b6cbf9ca06502e56b65dd
Lines: 1-200 of 200

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
125 | 7. Restore a release-candidate backup into a separate clean staging/recovery database and verify schema/history/replay; use full data hashes when the dataset and maintenance window permit.
126 | 8. Verify database and service readiness using runtime credentials rather than migration-owner credentials.
127 | 9. Deploy API and private workers independently.
128 | 10. Verify event-worker database, KMS/decrypt, DNS, and controlled-egress access.
129 | 11. Deploy static dashboard/admin assets.
130 | 12. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
131 | 13. Compare decision, outcome, outbox, and delivery metrics before broader rollout.
132 | 14. Roll back application artifacts without editing applied migrations when release validation fails.
133 |
134 | Migrations 0008 and 0009 are append-only and immutable after application. Future webhook or verification-delivery schema changes require a new migration. Every new SQL migration must also add its reviewed SHA-256 entry to the manifest; regenerating the manifest to bless an unexplained edit is prohibited.
135 |
136 | ### Database integrity and restore commands
137 |
138 | `npm run db:integrity` is read-only and requires a complete contiguous history with non-null matching checksums. `npm run db:restore-rehearsal` requires a separately created empty target through `RESTORE_DATABASE_URL`; it refuses the same database and any target with existing public relations. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` enables a full table scan/hash comparison and should be scheduled only for an approved maintenance or isolated snapshot window on large datasets.
139 |
140 | ## Provider-selection work still required
141 |
142 | The architecture is accepted, but the following concrete selections and provisioning remain external production work:
143 |
144 | - managed application/container platform and primary region;
145 | - managed PostgreSQL provider and service tier;
146 | - managed secret store and KMS/vault provider;
147 | - observability backend and retention policy;
148 | - Redis-compatible cache provider if multi-replica coordination requires it;
149 | - OTP provider;
150 | - controlled DNS/egress, TLS, email, and incident-notification services.
151 |
152 | A dedicated external broker is not required for the selected merchant pilot. PostgreSQL remains the durable job/outbox source of truth unless a later ADR supersedes that boundary with measured scale evidence.
153 |
154 | The Docker Compose setup is a development/self-hosted baseline, not the final production environment. The local AES-GCM key environment variable is not an approved production KMS design.
155 |
156 | ## Security requirements
157 |
158 | - Use managed secrets and least-privilege service identities.
159 | - Select and wire a reviewed KMS/vault adapter and component service identities before switching runtime writes to managed-envelope v2; then run an audited background rewrite before retiring local v1 keys.
160 | - Give migration ownership and runtime access distinct PostgreSQL identities. The migration owner runs schema/history/grant operations; runtime services use non-owner explicit DML grants and never migration-owner credentials.
161 | - Split API, session worker, sync worker, event worker, and verification worker into narrower roles on the selected platform when supported; each must remain no more privileged than the reviewed repository runtime policy.
162 | - Do not put secrets in images, CI logs, command arguments, source maps, logs, traces, or cache values.
163 | - Restrict browser-worker ingress, egress, and filesystem access where practical.
164 | - Restrict event-worker ingress and egress; block private and metadata networks at the infrastructure layer.
165 | - Encrypt database storage and backups and test restore.
166 | - Rotate API-key pepper, phone HMAC key, webhook secrets, and encryption keys through documented procedures.
167 | - Keep API keys separate from dashboard user sessions.
168 | - Keep PostgreSQL authoritative for sessions, idempotency, usage, audit records, jobs, and webhook outbox state.
169 | - Do not expose worker services or the database publicly unless no private option exists and compensating controls are documented.
170 | - Fail closed when endpoint/job decryption, event/verification scope validation, payload assertions, or worker lease ownership fails.
171 |
172 | ## Production validation gates
173 |
174 | Before a selected merchant pilot:
175 |
176 | - all nine migrations match the committed SHA-256 manifest and apply to a clean managed PostgreSQL 16+ database;
177 | - migration replay is a clean no-op and migration-history integrity passes;
178 | - a logical restore rehearsal succeeds against a distinct clean target;
179 | - runtime and migration database roles are separated, the runtime role is externally provisioned as non-owner/non-elevated, and `db:runtime-grants` plus effective-permission checks pass after migrations;
180 | - point-in-time restore is demonstrated;
181 | - API readiness, graceful shutdown, and artifact rollback are demonstrated;
182 | - private workers have no public ingress;
183 | - event-worker egress cannot reach metadata, private, link-local, or unauthorized networks;
184 | - DNS and redirect SSRF tests pass in the selected runtime/network topology;
185 | - KMS decryption fails closed and key rotation is tested;
186 | - webhook endpoint-secret rotation and re-encryption are tested;
187 | - outbox backlog, stale lease recovery, retries, terminal failures, and delivery alerts are exercised;
188 | - telemetry redaction tests and core alerts pass;
189 | - queue lag, dead-letter, provider-degraded, and database alerts are exercised;
190 | - the encrypted verification queue exists before OTP provider delivery is enabled;
191 | - broad automatic blocking remains disabled.
192 |
193 | ## Current verification boundary
194 |
195 | Repository source-head CI run `29560049322`, job `87820368024`, verifies nine manifest-bound migrations, immediate replay, non-null history checksums, clean full-data-hash logical restore, runtime-role grants/effective permissions, architecture boundaries, 19 workspace typechecks, 28 test tasks with 87 assertions, 19 builds, dependency audit, formatting, lint, and WooCommerce PHP syntax.
196 |
197 | The verified event-worker boundary includes transactional assessment/outcome outbox rows, explicit organization/store scope, atomic claims, stale recovery, expired-owner rejection, retry/final-failure transitions, endpoint-bound secret decryption, HMAC signing, HTTPS validation, DNS-to-non-public rejection, and redirect rejection.
198 |
199 | Production provider provisioning, controlled-egress smoke tests, managed-provider PITR/retention validation, selected KMS adapter/service-identity/access-audit validation, audited ciphertext rewrite, and provider-specific OTP delivery remain pending.
200 |
```

### docs/operations/operations-observability.md

Bytes: 13946
SHA-256: ab2f1fd7115964d89732365b07fa02c4f06ba10809d6724334065d1eaeb448ce
Lines: 1-273 of 273

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
244 | - Outbox retention and terminal-delivery archival policy
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
```

### docs/testing/testing-strategy.md

Bytes: 15583
SHA-256: 064d8942e3cd1b43bad4adcb7fa803659b3970b1c2632df7754b43a3f2b90cc5
Lines: 1-284 of 284

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
192 | Future PostgreSQL coverage must include:
193 |
194 | - owner-checked lease renewal during courier, webhook, and verification jobs whose execution crosses the initial lease window;
195 | - selected-provider smoke tests for distinct API/worker runtime identities and migration-owner grant execution;
196 | - operational replay/dead-letter authorization and audit coverage.
197 |
198 | ## End-to-end tests
199 |
200 | - Merchant signup and store creation
201 | - Create a test/live API key
202 | - Connect Steadfast account
203 | - Assess WooCommerce COD order
204 | - Receive a signed `assessment.completed` webhook asynchronously
205 | - Review high-risk order
206 | - Verify OTP
207 | - Submit courier outcome
208 | - Receive a signed `order.outcome_recorded` webhook asynchronously
209 | - View usage and savings report
210 |
211 | ## Security tests
212 |
213 | - Tenant data leakage
214 | - API key replay/revocation
215 | - Raw key absence from database/metadata/logs
216 | - Brute-force OTP
217 | - CSRF
218 | - Literal-IP and DNS-result SSRF
219 | - Webhook replay and redirect handling
220 | - Webhook signing-secret decryption failure
221 | - Envelope authenticated-context mismatch
222 | - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
223 | - Telemetry serialization/export failure isolation from application and worker execution
224 | - Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
225 | - Injection attacks
226 | - Session fixation/rotation
227 | - Credential decryption failure
228 | - Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
229 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
230 | - Runtime database role privilege escape, ownership, migration-history, DELETE, and DDL attempts
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
```

### packages/courier-adapters/src/index.test.ts

Bytes: 2345
SHA-256: 8d53c5747c84be3db7896a121b95e5faceee9610d1ca6deadf797963d33a7fd4
Lines: 1-65 of 65

```typescript
 1 | import { describe, expect, it, vi } from 'vitest';
 2 | import { SteadfastAdapter } from './index.js';
 3 |
 4 | const sessionProvider = {
 5 |   async getSession() {
 6 |     return { sessionCookie: 'session-value', xsrfToken: 'xsrf-value' };
 7 |   },
 8 | };
 9 |
10 | describe('SteadfastAdapter', () => {
11 |   it('normalizes a provider response', async () => {
12 |     const fetcher = vi.fn<typeof fetch>().mockResolvedValue(
13 |       new Response(JSON.stringify({ success: 8, cancellation: 2 }), {
14 |         status: 200,
15 |         headers: { 'content-type': 'application/json' },
16 |       }),
17 |     );
18 |     const adapter = new SteadfastAdapter({ sessionProvider, fetcher });
19 |     const result = await adapter.fetchCustomerObservation({
20 |       accountId: 'acc_1',
21 |       phone: '01712345678',
22 |     });
23 |     expect(result.totalOrders).toBe(10);
24 |     expect(result.deliveredOrders).toBe(8);
25 |     expect(result.returnedOrders).toBe(2);
26 |     expect(result.successRate).toBe(0.8);
27 |   });
28 |
29 |   it('returns a structured session error', async () => {
30 |     const adapter = new SteadfastAdapter({
31 |       sessionProvider: {
32 |         async getSession() {
33 |           return null;
34 |         },
35 |       },
36 |       fetcher: vi.fn<typeof fetch>(),
37 |     });
38 |     await expect(
39 |       adapter.fetchCustomerObservation({ accountId: 'acc_1', phone: '01712345678' }),
40 |     ).rejects.toMatchObject({ code: 'SESSION_MISSING', retryable: false });
41 |   });
42 |
43 |   it('aborts an active provider request when the worker lease is lost', async () => {
44 |     const fetcher = vi.fn<typeof fetch>().mockImplementation(
45 |       async (_url, init) =>
46 |         new Promise<Response>((_resolve, reject) => {
47 |           const abort = (): void => reject(new DOMException('Aborted', 'AbortError'));
48 |           if (init?.signal?.aborted) abort();
49 |           else init?.signal?.addEventListener('abort', abort, { once: true });
50 |         }),
51 |     );
52 |     const adapter = new SteadfastAdapter({ sessionProvider, fetcher, timeoutMs: 60_000 });
53 |     const controller = new AbortController();
54 |     const result = adapter.fetchCustomerObservation({
55 |       accountId: 'acc_1',
56 |       phone: '01712345678',
57 |       signal: controller.signal,
58 |     });
59 |
60 |     controller.abort(Object.assign(new Error('lease lost'), { code: 'COURIER_JOB_LEASE_LOST' }));
61 |     await expect(result).rejects.toMatchObject({ code: 'PROVIDER_UNAVAILABLE', retryable: true });
62 |     expect(fetcher).toHaveBeenCalledOnce();
63 |   });
64 | });
65 |
```

### packages/courier-adapters/src/index.ts

Bytes: 6807
SHA-256: e6a971f5c3c2acbe94fd4b7abe39b9e3fc6dc2cba367b360d169a33bc02f4aa1
Lines: 1-204 of 204

```typescript
  1 | export type CourierProvider = 'steadfast' | 'pathao' | 'redx' | 'aggregator';
  2 |
  3 | export interface ConnectionHealth {
  4 |   healthy: boolean;
  5 |   status: 'connected' | 'expired' | 'reconnect_required' | 'unavailable';
  6 |   checkedAt: string;
  7 |   errorCode?: string;
  8 | }
  9 |
 10 | export interface CourierSession {
 11 |   sessionCookie: string;
 12 |   xsrfToken: string;
 13 |   expiresAt?: string;
 14 | }
 15 |
 16 | export interface CustomerLookup {
 17 |   accountId: string;
 18 |   phone: string;
 19 |   signal?: AbortSignal;
 20 | }
 21 |
 22 | export interface CourierObservation {
 23 |   provider: CourierProvider;
 24 |   totalOrders: number;
 25 |   deliveredOrders: number;
 26 |   returnedOrders: number;
 27 |   cancelledBeforeShipping: number;
 28 |   successRate: number | null;
 29 |   confidence: number;
 30 |   source: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
 31 |   observedAt: string;
 32 |   expiresAt: string;
 33 |   limitations?: string[];
 34 | }
 35 |
 36 | export interface CourierAdapter {
 37 |   readonly provider: CourierProvider;
 38 |   testConnection(accountId: string): Promise<ConnectionHealth>;
 39 |   fetchCustomerObservation(input: CustomerLookup): Promise<CourierObservation>;
 40 | }
 41 |
 42 | export type CourierErrorCode =
 43 |   | 'SESSION_MISSING'
 44 |   | 'SESSION_EXPIRED'
 45 |   | 'PROVIDER_UNAVAILABLE'
 46 |   | 'RATE_LIMITED'
 47 |   | 'MALFORMED_RESPONSE'
 48 |   | 'UNAUTHORIZED';
 49 |
 50 | export class CourierProviderError extends Error {
 51 |   constructor(
 52 |     readonly code: CourierErrorCode,
 53 |     message: string,
 54 |     readonly retryable: boolean,
 55 |   ) {
 56 |     super(message);
 57 |   }
 58 | }
 59 |
 60 | export interface SteadfastSessionProvider {
 61 |   getSession(accountId: string): Promise<CourierSession | null>;
 62 | }
 63 |
 64 | export interface SteadfastAdapterOptions {
 65 |   sessionProvider: SteadfastSessionProvider;
 66 |   fetcher?: typeof fetch;
 67 |   timeoutMs?: number;
 68 |   observationTtlMs?: number;
 69 | }
 70 |
 71 | export class SteadfastAdapter implements CourierAdapter {
 72 |   readonly provider = 'steadfast' as const;
 73 |   private readonly fetcher: typeof fetch;
 74 |   private readonly timeoutMs: number;
 75 |   private readonly observationTtlMs: number;
 76 |
 77 |   constructor(private readonly options: SteadfastAdapterOptions) {
 78 |     this.fetcher = options.fetcher ?? fetch;
 79 |     this.timeoutMs = options.timeoutMs ?? 5_000;
 80 |     this.observationTtlMs = options.observationTtlMs ?? 12 * 60 * 60 * 1_000;
 81 |   }
 82 |
 83 |   async testConnection(accountId: string): Promise<ConnectionHealth> {
 84 |     const session = await this.options.sessionProvider.getSession(accountId);
 85 |     if (!session) {
 86 |       return {
 87 |         healthy: false,
 88 |         status: 'reconnect_required',
 89 |         checkedAt: new Date().toISOString(),
 90 |         errorCode: 'SESSION_MISSING',
 91 |       };
 92 |     }
 93 |     if (session.expiresAt && Date.parse(session.expiresAt) <= Date.now()) {
 94 |       return {
 95 |         healthy: false,
 96 |         status: 'expired',
 97 |         checkedAt: new Date().toISOString(),
 98 |         errorCode: 'SESSION_EXPIRED',
 99 |       };
100 |     }
101 |     return { healthy: true, status: 'connected', checkedAt: new Date().toISOString() };
102 |   }
103 |
104 |   async fetchCustomerObservation(input: CustomerLookup): Promise<CourierObservation> {
105 |     const session = await this.options.sessionProvider.getSession(input.accountId);
106 |     if (!session) {
107 |       throw new CourierProviderError('SESSION_MISSING', 'Steadfast session is unavailable', false);
108 |     }
109 |
110 |     const controller = new AbortController();
111 |     const abortFromCaller = (): void => controller.abort(input.signal?.reason);
112 |     if (input.signal?.aborted) abortFromCaller();
113 |     else input.signal?.addEventListener('abort', abortFromCaller, { once: true });
114 |     const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
115 |     try {
116 |       const response = await this.fetcher(
117 |         `https://steadfast.com.bd/user/frauds/check/${encodeURIComponent(input.phone)}`,
118 |         {
119 |           method: 'GET',
120 |           signal: controller.signal,
121 |           headers: {
122 |             Accept: 'application/json',
123 |             'X-Requested-With': 'XMLHttpRequest',
124 |             'X-XSRF-TOKEN': session.xsrfToken,
125 |             Cookie: `steadfast_courier_session=${session.sessionCookie}; XSRF-TOKEN=${session.xsrfToken}`,
126 |           },
127 |         },
128 |       );
129 |
130 |       if (response.status === 401 || response.status === 419) {
131 |         throw new CourierProviderError('SESSION_EXPIRED', 'Steadfast session expired', true);
132 |       }
133 |       if (response.status === 429) {
134 |         throw new CourierProviderError('RATE_LIMITED', 'Steadfast rate limit reached', true);
135 |       }
136 |       if (!response.ok) {
137 |         throw new CourierProviderError(
138 |           'PROVIDER_UNAVAILABLE',
139 |           `Steadfast returned HTTP ${response.status}`,
140 |           response.status >= 500,
141 |         );
142 |       }
143 |
144 |       const data: unknown = await response.json();
145 |       if (!isSteadfastFraudResponse(data)) {
146 |         throw new CourierProviderError(
147 |           'MALFORMED_RESPONSE',
148 |           'Steadfast response did not match the expected schema',
149 |           false,
150 |         );
151 |       }
152 |
153 |       const deliveredOrders = toNonNegativeInteger(data.success);
154 |       const returnedOrders = toNonNegativeInteger(data.cancellation);
155 |       const totalOrders = deliveredOrders + returnedOrders;
156 |       const observedAt = new Date();
157 |       return {
158 |         provider: 'steadfast',
159 |         totalOrders,
160 |         deliveredOrders,
161 |         returnedOrders,
162 |         cancelledBeforeShipping: 0,
163 |         successRate: totalOrders > 0 ? deliveredOrders / totalOrders : null,
164 |         confidence: totalOrders >= 10 ? 0.85 : totalOrders >= 3 ? 0.7 : 0.45,
165 |         source: 'merchant_session',
166 |         observedAt: observedAt.toISOString(),
167 |         expiresAt: new Date(observedAt.getTime() + this.observationTtlMs).toISOString(),
168 |         limitations: [
169 |           'Steadfast internal response combines non-success outcomes under cancellation; pre-shipping cancellation is not separately available.',
170 |         ],
171 |       };
172 |     } catch (error) {
173 |       if (error instanceof CourierProviderError) throw error;
174 |       if (error instanceof Error && error.name === 'AbortError') {
175 |         throw new CourierProviderError('PROVIDER_UNAVAILABLE', 'Steadfast request timed out', true);
176 |       }
177 |       throw new CourierProviderError('PROVIDER_UNAVAILABLE', 'Steadfast request failed', true);
178 |     } finally {
179 |       clearTimeout(timeout);
180 |       input.signal?.removeEventListener('abort', abortFromCaller);
181 |     }
182 |   }
183 | }
184 |
185 | function isSteadfastFraudResponse(value: unknown): value is {
186 |   success: number | string;
187 |   cancellation: number | string;
188 | } {
189 |   if (!value || typeof value !== 'object') return false;
190 |   const record = value as Record<string, unknown>;
191 |   return (
192 |     ['number', 'string'].includes(typeof record.success) &&
193 |     ['number', 'string'].includes(typeof record.cancellation)
194 |   );
195 | }
196 |
197 | function toNonNegativeInteger(value: number | string): number {
198 |   const numeric = Number(value);
199 |   if (!Number.isFinite(numeric) || numeric < 0) {
200 |     throw new CourierProviderError('MALFORMED_RESPONSE', 'Invalid courier count', false);
201 |   }
202 |   return Math.floor(numeric);
203 | }
204 |
```

### packages/database/src/index.ts

Bytes: 821
SHA-256: 961c0c394a877d7156e4ff4ca45bce5ec41708a0b88a4481dcc7ff6171815da7
Lines: 1-26 of 26

```typescript
 1 | import { drizzle } from 'drizzle-orm/node-postgres';
 2 | import { Pool } from 'pg';
 3 |
 4 | export * from './schema.js';
 5 | export * from './durable-work-schema.js';
 6 | export * from './runtime-role.js';
 7 | export * from './dead-letter-operations.js';
 8 | export * from './lease-heartbeat.js';
 9 |
10 | export function createDatabase(databaseUrl: string) {
11 |   const pool = new Pool({ connectionString: databaseUrl, max: 10 });
12 |   return { db: drizzle(pool), pool };
13 | }
14 |
15 | export interface TenantScope {
16 |   organizationId: string;
17 |   storeId: string;
18 | }
19 |
20 | export function requireTenantScope(scope: Partial<TenantScope>): TenantScope {
21 |   if (!scope.organizationId || !scope.storeId) {
22 |     throw new Error('Both organizationId and storeId are required for tenant-scoped operations');
23 |   }
24 |   return { organizationId: scope.organizationId, storeId: scope.storeId };
25 | }
26 |
```

### packages/database/src/lease-heartbeat.test.ts

Bytes: 1858
SHA-256: 91cfd1503de1011261ee49708259fc8d5c6fe8ed8fedc4d51dacb224e3eaf3a7
Lines: 1-59 of 59

```typescript
 1 | import { afterEach, describe, expect, it, vi } from 'vitest';
 2 | import { LeaseHeartbeat } from './lease-heartbeat.js';
 3 |
 4 | describe('LeaseHeartbeat', () => {
 5 |   afterEach(() => {
 6 |     vi.useRealTimers();
 7 |   });
 8 |
 9 |   it('renews serially and stops without another renewal', async () => {
10 |     vi.useFakeTimers();
11 |     const renew = vi.fn(async () => undefined);
12 |     const heartbeat = new LeaseHeartbeat({ intervalMs: 1_000, renew }).start();
13 |
14 |     await vi.advanceTimersByTimeAsync(2_100);
15 |     expect(renew).toHaveBeenCalledTimes(2);
16 |     expect(heartbeat.signal.aborted).toBe(false);
17 |
18 |     await heartbeat.stop();
19 |     await vi.advanceTimersByTimeAsync(2_000);
20 |     expect(renew).toHaveBeenCalledTimes(2);
21 |   });
22 |
23 |   it('aborts active work and surfaces the renewal failure', async () => {
24 |     vi.useFakeTimers();
25 |     const failure = Object.assign(new Error('lease lost'), { code: 'LEASE_LOST' });
26 |     const heartbeat = new LeaseHeartbeat({
27 |       intervalMs: 500,
28 |       renew: async () => Promise.reject(failure),
29 |     }).start();
30 |
31 |     await vi.advanceTimersByTimeAsync(500);
32 |     expect(heartbeat.signal.aborted).toBe(true);
33 |     expect(heartbeat.signal.reason).toBe(failure);
34 |     await expect(heartbeat.stop()).rejects.toBe(failure);
35 |   });
36 |
37 |   it('does not overlap a slow renewal', async () => {
38 |     vi.useFakeTimers();
39 |     let release: (() => void) | undefined;
40 |     const renew = vi.fn(
41 |       () =>
42 |         new Promise<void>((resolve) => {
43 |           release = resolve;
44 |         }),
45 |     );
46 |     const heartbeat = new LeaseHeartbeat({ intervalMs: 100, renew }).start();
47 |
48 |     await vi.advanceTimersByTimeAsync(500);
49 |     expect(renew).toHaveBeenCalledTimes(1);
50 |     release?.();
51 |     await Promise.resolve();
52 |     await vi.advanceTimersByTimeAsync(100);
53 |     expect(renew).toHaveBeenCalledTimes(2);
54 |     release?.();
55 |     await Promise.resolve();
56 |     await heartbeat.stopQuietly();
57 |   });
58 | });
59 |
```

### packages/database/src/lease-heartbeat.ts

Bytes: 1809
SHA-256: 269558f4811e1a8db6b115f04969ab1f916e5f4a03a594f0a3d370d32a889ff2
Lines: 1-61 of 61

```typescript
 1 | export interface LeaseHeartbeatOptions {
 2 |   intervalMs: number;
 3 |   renew(at: Date): Promise<void>;
 4 |   now?: () => Date;
 5 | }
 6 |
 7 | export class LeaseHeartbeat {
 8 |   private readonly controller = new AbortController();
 9 |   private readonly now: () => Date;
10 |   private timer: ReturnType<typeof setInterval> | undefined;
11 |   private renewal: Promise<void> | undefined;
12 |   private failure: Error | undefined;
13 |   private stopped = false;
14 |
15 |   constructor(private readonly options: LeaseHeartbeatOptions) {
16 |     if (!Number.isSafeInteger(options.intervalMs) || options.intervalMs <= 0) {
17 |       throw new Error('Lease heartbeat interval must be a positive integer');
18 |     }
19 |     this.now = options.now ?? (() => new Date());
20 |   }
21 |
22 |   get signal(): AbortSignal {
23 |     return this.controller.signal;
24 |   }
25 |
26 |   start(): this {
27 |     if (this.timer || this.stopped) throw new Error('Lease heartbeat cannot be started twice');
28 |     this.timer = setInterval(() => this.requestRenewal(), this.options.intervalMs);
29 |     return this;
30 |   }
31 |
32 |   async stop(): Promise<void> {
33 |     if (!this.stopped) {
34 |       this.stopped = true;
35 |       if (this.timer) clearInterval(this.timer);
36 |       this.timer = undefined;
37 |     }
38 |     await this.renewal;
39 |     if (this.failure !== undefined) throw this.failure;
40 |   }
41 |
42 |   async stopQuietly(): Promise<void> {
43 |     await this.stop().catch(() => undefined);
44 |   }
45 |
46 |   private requestRenewal(): void {
47 |     if (this.stopped || this.failure !== undefined || this.renewal) return;
48 |     this.renewal = this.options
49 |       .renew(this.now())
50 |       .catch((error: unknown) => {
51 |         const failure =
52 |           error instanceof Error ? error : new Error('Lease renewal failed', { cause: error });
53 |         this.failure = failure;
54 |         this.controller.abort(failure);
55 |       })
56 |       .finally(() => {
57 |         this.renewal = undefined;
58 |       });
59 |   }
60 | }
61 |
```

### tracker.yml

Bytes: 18037
SHA-256: ab1c90c4dfaeb5c015592e4bc0d34069efe2910fa0b23ad65833a84d83ce0399
Lines: 1-346 of 346

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
 93 |   - api_request_ids_are_server_generated_or_bounded_opaque_values
 94 |   - api_logs_never_export_raw_urls_query_values_or_dynamic_route_identifiers
 95 |   - durable_worker_leases_renew_only_for_the_current_owner_while_unexpired
 96 |   - lease_renewal_failure_aborts_active_provider_io
 97 |   - final_queue_transitions_drain_the_heartbeat_before_state_change
 98 |
 99 | implemented:
100 |   - typescript_monorepo_and_ci
101 |   - postgresql_schema_and_twelve_migrations
102 |   - organization_store_membership_and_plan_foundation
103 |   - usage_metering_and_audit_foundation
104 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
105 |   - pure_versioned_explainable_risk_engine
106 |   - canonical_v1_api_and_postgresql_repositories
107 |   - provider_neutral_shared_envelope_encryption_package
108 |   - steadfast_adapter_and_browser_session_worker
109 |   - postgresql_courier_sync_worker
110 |   - verification_and_webhook_libraries
111 |   - durable_postgresql_webhook_outbox_and_event_worker
112 |   - durable_encrypted_postgresql_verification_queue_and_worker
113 |   - tenant_scoped_postgresql_otp_verification_repository
114 |   - woocommerce_shopify_custom_and_native_adapters
115 |   - authenticated_live_merchant_dashboard
116 |   - authenticated_live_platform_admin
117 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
118 |   - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
119 |   - accepted_provider_neutral_production_infrastructure_adrs
120 |   - postgresql_usage_assessment_outcome_and_operation_idempotency_race_hardening
121 |   - postgresql_courier_worker_atomic_claim_and_lease_recovery
122 |   - postgresql_webhook_worker_atomic_claim_and_lease_recovery
123 |   - postgresql_verification_worker_atomic_claim_and_lease_recovery
124 |   - verification_payload_context_phone_hash_and_otp_hash_validation
125 |   - otp_provider_delivery_removed_from_synchronous_api_requests
126 |   - migration_replay_ci_gate
127 |   - webhook_dns_destination_validation
128 |   - postgresql_migration_manifest_and_history_checksum_integrity
129 |   - clean_postgresql_backup_restore_rehearsal
130 |   - restored_schema_data_sequence_history_and_replay_comparison
131 |   - authoritative_api_key_feature_assessment_and_outcome_tenant_scope_revalidation
132 |   - secret_free_tenant_scoped_webhook_and_verification_administration_repositories
133 |   - dashboard_and_platform_admin_repository_isolation_expansion
134 |   - least_privilege_postgresql_runtime_role_policy_grant_cli_and_ci_gate
135 |   - provider_neutral_managed_envelope_v2_with_random_per_record_data_keys
136 |   - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
137 |   - native_multi_store_off_and_deterministic_shadow_rollout_controls
138 |   - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
139 |   - selected_source_post_persist_native_shadow_integration
140 |   - store_scoped_native_shadow_opt_in_and_pilot_reporting
141 |   - tenant_scoped_immutable_native_shadow_attempt_evidence
142 |   - tenant_scoped_durable_work_dead_letter_inspection
143 |   - idempotent_controlled_durable_work_replay
144 |   - immutable_secret_free_durable_work_replay_evidence
145 |   - authenticated_merchant_browser_dead_letter_operations
146 |   - csrf_protected_browser_durable_work_replay
147 |   - synchronous_per_work_item_browser_replay_key_cache
148 |   - provider_neutral_structured_logging_and_recursive_redaction
149 |   - courier_session_courier_sync_event_and_verification_worker_log_integration
150 |   - telemetry_serialization_and_sink_failure_isolation_tests
151 |   - api_request_lifecycle_and_safe_correlation_logging
152 |   - api_unhandled_error_redaction_and_sink_failure_isolation_tests
153 |   - shared_non_overlapping_lease_heartbeat_and_abort_signal
154 |   - courier_webhook_and_verification_owner_checked_lease_renewal
155 |   - provider_io_abort_on_lease_renewal_loss
156 |
157 | verification:
158 |   command: npm run verify
159 |   last_verified: 2026-07-28
160 |   status: passed
161 |   results:
162 |     migrations: 12_of_12_with_sha256_manifest
163 |     migration_replay: passed
164 |     migration_history_integrity: passed
165 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
166 |     architecture_boundaries: passed
167 |     typecheck: 20_of_20_passed
168 |     test_tasks: 31_of_31_passed
169 |     source_assertions: 145_total
170 |     previous_main_remote_assertions: 136_passed
171 |     migration_integrity_tests: 7_of_7_passed
172 |     postgresql_concurrency_tests: 7_of_7_passed
173 |     postgresql_courier_worker_lease_tests: 6_source_tests_remote_ci_pending
174 |     postgresql_webhook_worker_lease_tests: 6_source_tests_remote_ci_pending
175 |     postgresql_verification_worker_lease_tests: 6_source_tests_remote_ci_pending
176 |     verification_payload_validation_tests: 3_of_3_passed
177 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
178 |     postgresql_runtime_role_tests: 7_of_7_passed
179 |     managed_envelope_tests: 11_of_11_passed
180 |     native_shadow_adapter_tests: 10_of_10_passed
181 |     native_shadow_api_tests: 7_of_7_passed
182 |     native_shadow_postgresql_tests: 7_of_7_passed
183 |     native_shadow_browser_tests: 2_of_2_passed
184 |     native_shadow_sdk_tests: 2_of_2_passed
185 |     native_shadow_total_tests: 28_of_28_passed
186 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
187 |     browser_dead_letter_api_tests: 3_of_3_passed
188 |     observability_tests: 3_of_3_passed
189 |     api_observability_tests: 4_of_4_passed
190 |     lease_heartbeat_unit_tests: 3_of_3_passed
191 |     provider_abort_on_lease_loss_tests: 3_of_3_passed
192 |     builds: 20_of_20_passed
193 |     php_syntax: passed
194 |     high_critical_dependency_check: passed
195 |     moderate_dependency_findings: 5
196 |     documentation_links: 57_reviewed_0_known_broken
197 |   continuation_bundle:
198 |     status: refreshed_locally
199 |     canonical_main_sync: verified_at_3c31ae76980c0fa3eef7b67aaef2627b436a616a
200 |     local_exporter: completed_after_durable_worker_heartbeat_docs
201 |   remote_ci:
202 |     status: passed
203 |     run_id: 30318999952
204 |     job_id: 90150731352
205 |     job: verify
206 |     tested_head: c92d0a713c2257e6cd49903ca292f41150141890
207 |     merged_main_commit: 00d6eecb69f1edd48209cb8653137c8e8a57ab7f
208 |     completed: 2026-07-28
209 |     steps: gitguardian_audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_six_assertions_twenty_builds_php_all_passed
210 |   source_validation:
211 |     status: passed
212 |     run_id: 30318999952
213 |     job_id: 90150731352
214 |     tested_head: c92d0a713c2257e6cd49903ca292f41150141890
215 |     completed: 2026-07-28
216 |     steps: gitguardian_audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_six_assertions_twenty_builds_php_all_passed
217 |     observability_tests: 3_of_3_passed
218 |     api_observability_tests: 4_of_4_passed
219 |   pending_follow_up:
220 |     - source_branch_remote_ci_validation
221 |     - observability_metrics_traces_exporters_and_managed_backend
222 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
223 |     - pilot_outcome_collection_and_calibration
224 |
225 | migrations:
226 |   immutable: true
227 |   manifest: packages/database/migrations/manifest.json
228 |   history_checksum_column: checksum_sha256_not_null
229 |   files:
230 |     - packages/database/migrations/0001_foundation.sql
231 |     - packages/database/migrations/0002_courier.sql
232 |     - packages/database/migrations/0003_risk.sql
233 |     - packages/database/migrations/0004_verification_events.sql
234 |     - packages/database/migrations/0005_durable_operations.sql
235 |     - packages/database/migrations/0006_browser_access.sql
236 |     - packages/database/migrations/0007_worker_leases.sql
237 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
238 |     - packages/database/migrations/0009_verification_delivery_queue.sql
239 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
240 |     - packages/database/migrations/0011_native_shadow_pilot.sql
241 |     - packages/database/migrations/0012_durable_work_replays.sql
242 |
243 | accepted_adrs:
244 |   - docs/adr/0006-production-deployment-topology.md
245 |   - docs/adr/0007-managed-postgresql-production-baseline.md
246 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
247 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
248 |   - docs/adr/0010-vendor-neutral-production-observability.md
249 |   - docs/adr/0011-selected-source-shadow-pilot.md
250 |   - docs/adr/0012-durable-work-dead-letter-operations.md
251 |
252 | external_dependencies:
253 |   - authorized_steadfast_test_account
254 |   - provider_authorization_review
255 |   - deployment_platform_account_region_and_budget
256 |   - managed_postgresql_provider_and_service_tier
257 |   - managed_secret_store_and_kms_vault_provider
258 |   - observability_backend_and_retention_policy
259 |   - otp_provider_account
260 |   - pilot_outcome_data
261 |
262 | next_milestone:
263 |   name: production-hardening-and-pilot-readiness
264 |   tasks:
265 |     - select_and_provision_accepted_infrastructure_providers
266 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
267 |     - validate_steadfast_with_an_authorized_account
268 |     - implement_the_selected_otp_provider_adapter
269 |     - add_distributed_cache_only_when_replica_coordination_requires_it
270 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
271 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
272 |     - calibrate_decisions_before_broad_automatic_blocking
273 |
274 | release_policy:
275 |   branch: main
276 |   before_push:
277 |     - npm_run_verify_passes
278 |     - documentation_and_tracker_are_current
279 |     - repository_review_is_clean
280 |   rules:
281 |     - no_force_push_to_main
282 |     - do_not_edit_applied_migrations
283 |     - use_descriptive_commits
284 |
285 | notes:
286 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
287 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
288 |   - github_connector_reports_public_visibility_while_expected_state_is_private
289 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
290 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
291 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
292 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
293 |   - webhook_event_payloads_do_not_include_raw_phone_values
294 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
295 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
296 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
297 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
298 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
299 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
300 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
301 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
302 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
303 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
304 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
305 |   - selected_otp_provider_module_and_credentials_remain_external
306 |   - migration_files_are_bound_to_a_committed_sha256_manifest
307 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
308 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
309 |   - migration_execution_uses_one_session_advisory_lock
310 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
311 |   - managed_provider_point_in_time_restore_drill_remains_external
312 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
313 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
314 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
315 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
316 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
317 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
318 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
319 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
320 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
321 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
322 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
323 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
324 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
325 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
326 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
327 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
328 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
329 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
330 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
331 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
332 |   - durable_replay_never_performs_provider_or_webhook_network_io
333 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
334 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
335 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
336 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
337 |   - structured_log_redaction_is_canonicalized_in_packages_observability
338 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
339 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
340 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
341 |   - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
342 |   - lease_renewal_interval_must_not_exceed_half_the_lease
343 |   - heartbeat_renewal_and_final_state_transitions_do_not_overlap
344 |   - pro_context_was_refreshed_after_durable_worker_heartbeat_documentation
345 |   - update_this_file_after_every_material_milestone
346 |
```

### workers/courier-sync-worker/src/index.ts

Bytes: 3745
SHA-256: 9c5d2fc0c7f4816eaa83f599969980766a2b273102605b63b06c7c46b08fd256
Lines: 1-110 of 110

```typescript
  1 | import type { CourierAdapter, CourierObservation } from '@ozzyl/courier-adapters';
  2 |
  3 | export interface ObservationRepository {
  4 |   findFresh(input: {
  5 |     storeId: string;
  6 |     provider: string;
  7 |     phoneHash: string;
  8 |     at: Date;
  9 |   }): Promise<CourierObservation | null>;
 10 |   save(input: {
 11 |     storeId: string;
 12 |     phoneHash: string;
 13 |     observation: CourierObservation;
 14 |   }): Promise<void>;
 15 | }
 16 |
 17 | export interface SyncJobHealth {
 18 |   started(jobId: string, at: Date): Promise<void>;
 19 |   completed(jobId: string, at: Date): Promise<void>;
 20 |   failed(jobId: string, code: string, retryable: boolean, at: Date): Promise<void>;
 21 | }
 22 |
 23 | export class CourierSyncWorker {
 24 |   constructor(
 25 |     private readonly dependencies: {
 26 |       adapters: Map<string, CourierAdapter>;
 27 |       observations: ObservationRepository;
 28 |       health: SyncJobHealth;
 29 |     },
 30 |   ) {}
 31 |
 32 |   async sync(input: {
 33 |     jobId: string;
 34 |     storeId: string;
 35 |     courierAccountId: string;
 36 |     provider: string;
 37 |     phone: string;
 38 |     phoneHash: string;
 39 |     force?: boolean;
 40 |     signal?: AbortSignal;
 41 |   }): Promise<{ observation: CourierObservation; cached: boolean }> {
 42 |     await this.dependencies.health.started(input.jobId, new Date());
 43 |     try {
 44 |       if (!input.force) {
 45 |         const cached = await this.dependencies.observations.findFresh({
 46 |           storeId: input.storeId,
 47 |           provider: input.provider,
 48 |           phoneHash: input.phoneHash,
 49 |           at: new Date(),
 50 |         });
 51 |         if (cached) {
 52 |           await this.dependencies.health.completed(input.jobId, new Date());
 53 |           return { observation: cached, cached: true };
 54 |         }
 55 |       }
 56 |
 57 |       const adapter = this.dependencies.adapters.get(input.provider);
 58 |       if (!adapter) throw new Error(`Courier adapter ${input.provider} is not registered`);
 59 |       const observation = await adapter.fetchCustomerObservation({
 60 |         accountId: input.courierAccountId,
 61 |         phone: input.phone,
 62 |         ...(input.signal === undefined ? {} : { signal: input.signal }),
 63 |       });
 64 |       await this.dependencies.observations.save({
 65 |         storeId: input.storeId,
 66 |         phoneHash: input.phoneHash,
 67 |         observation,
 68 |       });
 69 |       await this.dependencies.health.completed(input.jobId, new Date());
 70 |       return { observation, cached: false };
 71 |     } catch (error) {
 72 |       const providerError = error as { code?: unknown; retryable?: unknown };
 73 |       const code = typeof providerError.code === 'string' ? providerError.code : 'SYNC_FAILED';
 74 |       const retryable = providerError.retryable === true;
 75 |       await this.dependencies.health.failed(input.jobId, code, retryable, new Date());
 76 |       throw error;
 77 |     }
 78 |   }
 79 | }
 80 |
 81 | export function toRiskCourierFeatures(observations: CourierObservation[]) {
 82 |   if (observations.length === 0) {
 83 |     return {
 84 |       totalOrders: 0,
 85 |       deliveredOrders: 0,
 86 |       returnedOrders: 0,
 87 |       cancelledBeforeShipping: 0,
 88 |       providerCount: 0,
 89 |       freshness: 'missing' as const,
 90 |       sourceConfidence: 0,
 91 |     };
 92 |   }
 93 |
 94 |   const now = Date.now();
 95 |   const fresh = observations.every((observation) => Date.parse(observation.expiresAt) > now);
 96 |   return {
 97 |     totalOrders: observations.reduce((sum, value) => sum + value.totalOrders, 0),
 98 |     deliveredOrders: observations.reduce((sum, value) => sum + value.deliveredOrders, 0),
 99 |     returnedOrders: observations.reduce((sum, value) => sum + value.returnedOrders, 0),
100 |     cancelledBeforeShipping: observations.reduce(
101 |       (sum, value) => sum + value.cancelledBeforeShipping,
102 |       0,
103 |     ),
104 |     providerCount: new Set(observations.map((observation) => observation.provider)).size,
105 |     freshness: fresh ? ('fresh' as const) : ('stale' as const),
106 |     sourceConfidence:
107 |       observations.reduce((sum, value) => sum + value.confidence, 0) / observations.length,
108 |   };
109 | }
110 |
```

## Skipped Files

- package-lock.json [File is too large (251250 bytes). Limit: 60000 bytes.]
