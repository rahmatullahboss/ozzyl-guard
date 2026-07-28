# CodexPro Context Bundle

Generated: 2026-07-28T00:57:39.594Z
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
## feat/api-request-observability
 M .ai-bridge/current-plan.md
 M .ai-bridge/decisions.md
 M .ai-bridge/implementation-status.md
 M README.md
 M apps/api/package.json
 M apps/api/src/index.test.ts
 M apps/api/src/index.ts
 M apps/api/src/server.ts
 M docs/operations/operations-observability.md
 M docs/testing/testing-strategy.md
 M package-lock.json
 M tracker.yml
```

## Recent Commits

```text
cc8d890 (HEAD -> feat/api-request-observability, origin/main, main) docs: record observability CI evidence (#27)
d8ef4ac feat(observability): add safe structured worker logging (#26)
b61af36 docs: sync browser dead-letter evidence
27cff21 feat: add browser dead-letter operations
57f7b3a docs: sync durable work dead-letter evidence
2d68620 feat: add durable work dead-letter operations
a028848 docs: sync selected source shadow pilot evidence (#21)
c478170 feat: wire selected source shadow pilot (#20)
```

## Git Diff

```diff
diff --git a/.ai-bridge/current-plan.md b/.ai-bridge/current-plan.md
index 21239cb..4480c3d 100644
--- a/.ai-bridge/current-plan.md
+++ b/.ai-bridge/current-plan.md
@@ -4,7 +4,7 @@ Updated: 2026-07-28

 ## Current state

-A runnable standalone MVP foundation and fourteen production-hardening slices are complete:
+A runnable standalone MVP foundation and fifteen production-hardening slices are complete:

 1. dashboard/admin browser authentication with live PostgreSQL data and tenant revalidation;
 2. accepted provider-neutral infrastructure ADRs for deployment, managed PostgreSQL, durable work/cache, KMS envelope encryption, and observability;
@@ -19,7 +19,8 @@ A runnable standalone MVP foundation and fourteen production-hardening slices ar
 11. selected-source post-persist shadow integration with authoritative source-order reload, explicit store opt-in, immutable sampled-attempt evidence, and tenant-scoped pilot reporting;
 12. tenant-scoped durable-work dead-letter inspection and explicit idempotent replay with lease reset, structural failure guards, immutable evidence, and audit records;
 13. authenticated merchant browser dead-letter operations with exact owner/admin store scope, secret-free listing, CSRF-protected replay, and synchronous stable replay keys;
-14. a canonical vendor-neutral structured logging/redaction package integrated into all four private workers, with bounded serialization and telemetry-failure isolation.
+14. a canonical vendor-neutral structured logging/redaction package integrated into all four private workers, with bounded serialization and telemetry-failure isolation;
+15. API-wide safe request correlation and structured lifecycle logging with opaque request IDs, bounded route templates, response status/latency, redacted unhandled errors, and telemetry-failure isolation.

 Concrete provider selection and provisioning remain external production work.

@@ -55,6 +56,8 @@ Concrete provider selection and provisioning remain external production work.
 - [x] Vendor-neutral OpenTelemetry observability ADR
 - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
+- [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
+- [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 - [x] Concurrent usage reservations cannot exceed the plan limit
 - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
@@ -113,11 +116,11 @@ Concrete provider selection and provisioning remain external production work.
 - Twelve migration files ordered/non-empty/non-destructive: passed
 - First migration apply and immediate migration replay: passed
 - Architecture import boundaries: passed
-- Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
-- Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
-- Repository assertions: 132 passed in PostgreSQL-integrated source-branch CI, including three structured-log redaction/serialization/failure-isolation tests
-- Production builds: 20 of 20 workspaces passed locally and in source-branch CI
-- WooCommerce PHP syntax: passed in source-branch CI
+- Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
+- Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
+- Repository assertion inventory: 136, including four API request-correlation, bounded-route, unhandled-error redaction, and sink-failure tests; PostgreSQL-integrated source-branch CI is pending
+- Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
+- WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
 - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
 - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
 - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
@@ -150,7 +153,7 @@ Concrete provider selection and provisioning remain external production work.
 - `tracker.yml` YAML structure remains valid
 - Prohibited source-pattern search: no matches

-The repository-local continuation exporter was refreshed after recording the merged observability verification evidence, so the embedded snapshots match the current branch state.
+The repository-local continuation exporter was refreshed after the API observability milestone documentation was finalized, so its embedded snapshots match the current branch state.

 ## Next production milestone

diff --git a/.ai-bridge/decisions.md b/.ai-bridge/decisions.md
index d00cebd..6e02b84 100644
--- a/.ai-bridge/decisions.md
+++ b/.ai-bridge/decisions.md
@@ -45,6 +45,7 @@ Updated: 2026-07-28
 39. Terminal courier refresh, webhook delivery, and verification delivery work remains authoritative in its existing PostgreSQL row. An active owner/admin may inspect only secret-free failed work in an exact active organization/store and explicitly replay only relationally valid, non-structural, non-expired work. Replay is transactional and idempotent, clears old leases and failure state, appends immutable insert-only replay evidence plus an audit event, and performs no provider or webhook network I/O; automatic replay is not implemented.
 40. The merchant failed-work browser surface uses only opaque user sessions, exact session-visible organization/store scope, active owner/admin authorization, and repository-level relational reauthorization. Replay additionally requires CSRF proof and a stable per-work-item idempotency key assigned synchronously before network I/O and retained after request failure. Browser contracts are secret-free and delegate all state changes to the existing transactional PostgreSQL durable-work repository.
 41. `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. It owns recursive sensitive-field redaction, bounded safe serialization, fixed service/environment/event metadata, and telemetry-failure isolation. Private workers use this helper instead of ad hoc JSON logging; error messages, stacks, payloads, bodies, URLs, credentials, phone values, OTPs, cookies, keys, and tokens are never exported by the helper. Metrics, traces, exporters, and the managed backend remain separate follow-up work under ADR 0010.
+42. Every API request receives a server-controlled opaque request ID unless the caller supplies a bounded opaque `req_`, hexadecimal trace, or UUID value. The response echoes only that accepted/generated ID. Request lifecycle logs use an allowlisted static route or a bounded route template, never the raw URL, query string, or dynamic assessment identifier. They contain method, status/status class, and duration; unhandled errors export only safe name/code through the shared redaction boundary. Logging failure cannot change the HTTP response.

 ## Source SaaS conflict resolutions

diff --git a/.ai-bridge/implementation-status.md b/.ai-bridge/implementation-status.md
index b70e958..bde972b 100644
--- a/.ai-bridge/implementation-status.md
+++ b/.ai-bridge/implementation-status.md
@@ -14,7 +14,7 @@ Updated: 2026-07-28
 | Area                       | Status   | Notes                                                                                                                                                 |
 | -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Documentation and ADRs     | done     | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and twelve accepted ADRs                            |
-| Continuation documentation | done     | Tracker, plan, status, decisions, and generated `pro-context.md` are refreshed for the observability milestone                                        |
+| Continuation documentation | done     | Tracker, plan, status, decisions, and generated `pro-context.md` are refreshed for the API observability milestone                                    |
 | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
 | Monorepo/tooling           | done     | 20 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
 | CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
@@ -24,39 +24,39 @@ Updated: 2026-07-28

 ## Product implementation

-| Area                             | Status   | Notes                                                                                                                                                                                                              |
-| -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
-| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                                                    |
-| Database/migrations              | done     | Twelve append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                                                    |
-| Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                                                 |
-| Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                                                    |
-| Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                                              |
-| API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                                      |
-| Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                                      |
-| Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                                      |
-| Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                                               |
-| Courier observation worker/cache | done     | Lease-owned atomic claims, expired-owner rejection, stale recovery, retry/final failure, relational scope, observation persistence                                                                                 |
-| Durable webhook outbox           | done     | Assessment/outcome transaction emission, scoped event payloads, lease-owned event worker, retries, stale recovery, encrypted secret access                                                                         |
-| Durable work architecture        | done     | PostgreSQL lease pattern plus owner/admin-scoped secret-free inspection, explicit idempotent replay, CLI, and merchant browser operations are implemented; future lease renewal remains                            |
-| Durable work operations          | done     | Failed courier, webhook, and verification work can be inspected and safely replayed through one transactional repository from the CLI or owner/admin browser surface with immutable evidence                       |
-| Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                                             |
-| Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                                                    |
-| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                                           |
-| PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                                           |
-| Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                                        |
-| Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                                                     |
-| WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                                           |
-| Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                                               |
-| Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                                                |
-| Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                                      |
-| OTP verification                 | baseline | Transactional encrypted queue, tenant-scoped verifier, lease-owned private runner, retries, and failure events done; provider account remains                                                                      |
-| Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                                                     |
-| Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                                          |
-| Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                                         |
-| PostgreSQL runtime role          | done     | Explicit current-table DML grants, no migration history/DELETE/DDL/ownership/elevated membership; managed-provider provisioning remains                                                                            |
-| Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                                             |
-| Observability                    | baseline | Canonical structured logging/redaction package and four private-worker integrations are implemented and tested; metrics, traces, exporters, API/repository instrumentation, backend, dashboards, and alerts remain |
-| Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                                          |
+| Area                             | Status   | Notes                                                                                                                                                                                        |
+| -------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
+| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                              |
+| Database/migrations              | done     | Twelve append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                              |
+| Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                           |
+| Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                              |
+| Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                        |
+| API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                |
+| Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                |
+| Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                |
+| Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                         |
+| Courier observation worker/cache | done     | Lease-owned atomic claims, expired-owner rejection, stale recovery, retry/final failure, relational scope, observation persistence                                                           |
+| Durable webhook outbox           | done     | Assessment/outcome transaction emission, scoped event payloads, lease-owned event worker, retries, stale recovery, encrypted secret access                                                   |
+| Durable work architecture        | done     | PostgreSQL lease pattern plus owner/admin-scoped secret-free inspection, explicit idempotent replay, CLI, and merchant browser operations are implemented; future lease renewal remains      |
+| Durable work operations          | done     | Failed courier, webhook, and verification work can be inspected and safely replayed through one transactional repository from the CLI or owner/admin browser surface with immutable evidence |
+| Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                       |
+| Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                              |
+| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                     |
+| PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                     |
+| Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                  |
+| Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                               |
+| WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                     |
+| Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                         |
+| Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                          |
+| Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                |
+| OTP verification                 | baseline | Transactional encrypted queue, tenant-scoped verifier, lease-owned private runner, retries, and failure events done; provider account remains                                                |
+| Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                               |
+| Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                    |
+| Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                   |
+| PostgreSQL runtime role          | done     | Explicit current-table DML grants, no migration history/DELETE/DDL/ownership/elevated membership; managed-provider provisioning remains                                                      |
+| Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                       |
+| Observability                    | baseline | Canonical redacted logging covers API request lifecycle plus four private workers; metrics, traces, exporters, repository/provider instrumentation, backend, dashboards, and alerts remain   |
+| Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                    |

 ## Migrations

@@ -85,11 +85,12 @@ Applied migrations must remain immutable.
 - `npm run db:integrity`: complete contiguous history and checksums passed
 - `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
 - `npm run check:architecture`: passed
-- `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
-- `npm run test`: 31/31 Turbo dependency tasks and 132 assertions passed in PostgreSQL-integrated source-branch CI, including three observability tests
-- `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
+- `npm run typecheck`: 20/20 workspaces passed locally; source-branch CI is pending
+- `npm run test`: 31/31 Turbo dependency tasks passed locally; source inventory contains 136 assertions, including four API observability tests
+- `npm run build`: 20/20 workspace builds passed locally; source-branch CI is pending
 - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 - Observability tests prove fixed metadata, nested redaction, error message/stack omission, circular/binary/bigint handling, bounded strings, reserved-field protection, and sink-failure isolation
+- API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, safe unhandled-error serialization, and request availability during sink failure
 - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
 - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
 - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
@@ -134,7 +135,7 @@ Applied migrations must remain immutable.
 - Previous canonical documentation checks found zero broken internal links
 - Prohibited insecure-pattern scan: zero matches

-The repository-local exporter was refreshed after the merged observability verification evidence was recorded.
+The repository-local exporter was refreshed after this API observability milestone documentation was completed. Source-branch remote CI is pending.

 ## External blockers and production requirements

@@ -161,7 +162,7 @@ The repository-local exporter was refreshed after the merged observability verif
 - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
 - GitHub currently reports public repository visibility although the expected policy is private.
 - Provider-specific infrastructure has not been provisioned or smoke-tested.
-- Structured logs are implemented for private worker startup/error paths, but API/repository/provider metrics, traces, exporters, dashboards, alerts, and managed retention are not yet implemented.
+- Structured logs are implemented for API request lifecycle and private worker startup/error paths, but repository/provider metrics, traces, exporters, dashboards, alerts, and managed retention are not yet implemented.
 - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
 - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
 - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
diff --git a/README.md b/README.md
index 1739285..0c85591 100644
--- a/README.md
+++ b/README.md
@@ -42,7 +42,8 @@ The repository now contains a runnable MVP foundation:
 - Provider-neutral managed envelope v2 with per-record data keys, authenticated wrapped-key metadata, structured safe failures, legacy dual-read, and rotation/re-encryption primitives
 - Native multi-store post-persist shadow integration with authoritative source-order revalidation, explicit store opt-in, immutable success/failure attempt evidence, tenant-scoped pilot reporting, and legacy-authoritative behavior
 - Authenticated owner/admin merchant dead-letter page with secret-free inspection and CSRF-protected idempotent replay through the existing PostgreSQL operations repository
-- Canonical structured logging/redaction package used by all four private workers; telemetry sink failures cannot break worker execution
+- Canonical structured logging/redaction package used by the API and all four private workers; telemetry sink failures cannot break request or worker execution
+- API-wide safe request correlation with opaque request IDs, bounded route templates, status classes, latency, and redacted unhandled-error records

 The following require external accounts or production decisions before live use:

diff --git a/apps/api/package.json b/apps/api/package.json
index bb4ed54..4e74d3f 100644
--- a/apps/api/package.json
+++ b/apps/api/package.json
@@ -22,7 +22,8 @@
     "pg": "^8.16.3",
     "zod": "^3.25.76",
     "@ozzyl/encryption": "*",
-    "@ozzyl/database": "*"
+    "@ozzyl/database": "*",
+    "@ozzyl/observability": "*"
   },
   "devDependencies": {
     "@types/pg": "^8.15.5"
diff --git a/apps/api/src/index.test.ts b/apps/api/src/index.test.ts
index f5cbe98..68257d5 100644
--- a/apps/api/src/index.test.ts
+++ b/apps/api/src/index.test.ts
@@ -1,6 +1,7 @@
 import { createHmac } from 'node:crypto';
 import { describe, expect, it } from 'vitest';
 import { MemoryUsageLedger } from '@ozzyl/billing';
+import { createStructuredLogger, type StructuredLogger } from '@ozzyl/observability';
 import {
   createApiApp,
   MemoryAssessmentRepository,
@@ -19,6 +20,8 @@ function createTestApp(input?: {
   identity?: ApiKeyIdentity;
   assessments?: AssessmentRepository;
   rawApiKey?: string;
+  logger?: StructuredLogger;
+  monotonicNow?: () => number;
   verificationRequests?: {
     enqueueSend(input: {
       organizationId: string;
@@ -69,6 +72,8 @@ function createTestApp(input?: {
       ? {}
       : { verificationRequests: input.verificationRequests }),
     ...(input?.otpVerifier === undefined ? {} : { otpVerifier: input.otpVerifier }),
+    ...(input?.logger === undefined ? {} : { logger: input.logger }),
+    ...(input?.monotonicNow === undefined ? {} : { monotonicNow: input.monotonicNow }),
     idFactory: (prefix) => `${prefix}_${++counter}`,
     now: () => new Date('2026-07-16T10:00:00.000Z'),
   });
@@ -87,6 +92,124 @@ const authorizedHeaders = {
 };

 describe('Ozzyl Guard API', () => {
+  it('records a bounded request lifecycle without logging dynamic path values', async () => {
+    const lines: string[] = [];
+    const ticks = [100, 125];
+    const logger = createStructuredLogger({
+      service: 'api-test',
+      environment: 'test',
+      clock: () => new Date('2026-07-28T00:00:00.000Z'),
+      write: (line) => lines.push(line),
+    });
+    const response = await createTestApp({
+      logger,
+      monotonicNow: () => ticks.shift() ?? 125,
+    }).request('/v1/risk-assessments/ras-sensitive-value?query=discard-me', {
+      headers: {
+        Authorization: `Bearer ${apiKey}`,
+        'X-Request-ID': 'req_client-123',
+      },
+    });
+
+    expect(response.status).toBe(404);
+    expect(response.headers.get('X-Request-ID')).toBe('req_client-123');
+    expect(lines).toHaveLength(1);
+    expect(JSON.parse(lines[0] ?? '{}')).toMatchObject({
+      level: 'warn',
+      event: 'api.request.completed',
+      request_id: 'req_client-123',
+      method: 'GET',
+      route: '/v1/risk-assessments/:assessment_id',
+      status_code: 404,
+      status_class: '4xx',
+      duration_ms: 25,
+    });
+    expect(lines.join('\n')).not.toContain('ras-sensitive-value');
+    expect(lines.join('\n')).not.toContain('discard-me');
+  });
+
+  it('rejects arbitrary caller request identifiers instead of reflecting them', async () => {
+    const lines: string[] = [];
+    const logger = createStructuredLogger({
+      service: 'api-test',
+      environment: 'test',
+      write: (line) => lines.push(line),
+    });
+    const unsafeRequestId = 'customer-reference-1001';
+    const response = await createTestApp({ logger }).request('/health', {
+      headers: { 'X-Request-ID': unsafeRequestId },
+    });
+
+    expect(response.status).toBe(200);
+    expect(response.headers.get('X-Request-ID')).toBe('req_1');
+    expect(lines.join('\n')).not.toContain(unsafeRequestId);
+  });
+
+  it('keeps request handling available when the telemetry sink fails', async () => {
+    const logger = createStructuredLogger({
+      service: 'api-test',
+      environment: 'test',
+      write: () => {
+        throw new Error('sink unavailable');
+      },
+    });
+    const response = await createTestApp({ logger }).request('/health');
+
+    expect(response.status).toBe(200);
+    await expect(response.json()).resolves.toMatchObject({ status: 'ok' });
+  });
+
+  it('records unhandled errors without exporting their messages or stacks', async () => {
+    const lines: string[] = [];
+    const logger = createStructuredLogger({
+      service: 'api-test',
+      environment: 'test',
+      write: (line) => lines.push(line),
+    });
+    const failure = Object.assign(new Error('restricted database detail'), {
+      code: 'DATABASE_FAILURE',
+    });
+    const assessments: AssessmentRepository = {
+      async findByIdempotency() {
+        throw failure;
+      },
+      async findById() {
+        return null;
+      },
+      async save(record) {
+        return record;
+      },
+    };
+    const response = await createTestApp({ logger, assessments }).request('/v1/risk-assessments', {
+      method: 'POST',
+      headers: authorizedHeaders,
+      body: JSON.stringify(assessmentRequest),
+    });
+
+    expect(response.status).toBe(500);
+    await expect(response.json()).resolves.toMatchObject({
+      success: false,
+      error: { code: 'INTERNAL_ERROR' },
+    });
+    const records = lines.map((line) => JSON.parse(line) as Record<string, unknown>);
+    expect(records).toEqual(
+      expect.arrayContaining([
+        expect.objectContaining({
+          event: 'api.request.unhandled_error',
+          code: 'UNHANDLED_ERROR',
+          error: { name: 'Error', code: 'DATABASE_FAILURE' },
+        }),
+        expect.objectContaining({
+          event: 'api.request.completed',
+          status_code: 500,
+          status_class: '5xx',
+        }),
+      ]),
+    );
+    expect(lines.join('\n')).not.toContain('restricted database detail');
+    expect(lines.join('\n')).not.toContain('stack');
+  });
+
   it('requires API authentication', async () => {
     const response = await createTestApp().request('/v1/risk-assessments', {
       method: 'POST',
diff --git a/apps/api/src/index.ts b/apps/api/src/index.ts
index 2911b5d..efa873f 100644
--- a/apps/api/src/index.ts
+++ b/apps/api/src/index.ts
@@ -2,6 +2,7 @@ import { randomUUID } from 'node:crypto';
 import { Hono } from 'hono';
 import { z } from 'zod';
 import type { PlanCode, UsageLedger } from '@ozzyl/billing';
+import { createStructuredLogger, type StructuredLogger } from '@ozzyl/observability';
 import {
   assessRisk,
   isValidBangladeshPhone,
@@ -208,7 +209,9 @@ export interface ApiDependencies {
   otpVerifier?: OtpVerifier;
   browser?: BrowserApiDependencies;
   now?: () => Date;
+  monotonicNow?: () => number;
   idFactory?: (prefix: string) => string;
+  logger?: StructuredLogger;
 }

 type AppEnvironment = {
@@ -238,7 +241,45 @@ const otpVerifySchema = z.object({
 export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment> {
   const app = new Hono<AppEnvironment>();
   const now = dependencies.now ?? (() => new Date());
+  const monotonicNow = dependencies.monotonicNow ?? (() => Date.now());
   const idFactory = dependencies.idFactory ?? ((prefix: string) => `${prefix}_${randomUUID()}`);
+  const logger =
+    dependencies.logger ??
+    createStructuredLogger({
+      service: 'ozzyl-guard-api',
+      environment: 'test',
+      write: () => undefined,
+    });
+
+  app.use('*', async (context, next) => {
+    const requestId = readRequestId(context.req.header('X-Request-ID')) ?? idFactory('req');
+    const startedAt = monotonicNow();
+    let failed = false;
+    context.set('requestId', requestId);
+
+    try {
+      await next();
+    } catch (error) {
+      failed = true;
+      throw error;
+    } finally {
+      const status = failed ? 500 : context.res.status;
+      const durationMs = Math.max(0, monotonicNow() - startedAt);
+      const attributes = {
+        request_id: requestId,
+        method: context.req.method,
+        route: telemetryRoute(context.req.path),
+        status_code: status,
+        status_class: `${Math.floor(status / 100)}xx`,
+        duration_ms: Math.round(durationMs * 1_000) / 1_000,
+      };
+
+      context.header('X-Request-ID', requestId);
+      if (status >= 500) logger.error('api.request.completed', attributes);
+      else if (status >= 400) logger.warn('api.request.completed', attributes);
+      else logger.info('api.request.completed', attributes);
+    }
+  });

   app.get('/', (context) =>
     context.json({
@@ -264,8 +305,7 @@ export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment
   if (dependencies.browser) app.route('/', createBrowserApi(dependencies.browser));

   app.use('/v1/*', async (context, next) => {
-    const requestId = context.req.header('X-Request-ID')?.slice(0, 200) || idFactory('req');
-    context.set('requestId', requestId);
+    const requestId = context.get('requestId');
     const authorization = context.req.header('Authorization');
     if (!authorization?.startsWith('Bearer ')) {
       return apiError(requestId, 401, 'UNAUTHORIZED', 'A Bearer API key is required');
@@ -758,7 +798,13 @@ export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment

   app.onError((error, context) => {
     const requestId = context.get('requestId') || idFactory('req');
-    console.error(JSON.stringify({ level: 'error', requestId, code: 'UNHANDLED_ERROR' }));
+    logger.error('api.request.unhandled_error', {
+      request_id: requestId,
+      method: context.req.method,
+      route: telemetryRoute(context.req.path),
+      code: 'UNHANDLED_ERROR',
+      error,
+    });
     return apiError(
       requestId,
       500,
@@ -770,6 +816,48 @@ export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment
   return app;
 }

+const STATIC_TELEMETRY_ROUTES = new Set([
+  '/',
+  '/health',
+  '/auth/login',
+  '/auth/session',
+  '/auth/logout',
+  '/dashboard/v1/overview',
+  '/dashboard/v1/native-shadow-rollout',
+  '/dashboard/v1/dead-letters',
+  '/dashboard/v1/dead-letter-replays',
+  '/admin/v1/overview',
+  '/v1/risk-assessments',
+  '/v1/order-outcomes',
+  '/v1/integration-rollouts/native-shadow',
+  '/v1/integration-comparisons/native-shadow',
+  '/v1/integration-attempts/native-shadow',
+  '/v1/courier-observations/refresh',
+  '/v1/verifications/otp/send',
+  '/v1/verifications/otp/verify',
+]);
+
+function telemetryRoute(path: string): string {
+  if (STATIC_TELEMETRY_ROUTES.has(path)) return path;
+  if (/^\/v1\/risk-assessments\/[^/]+$/.test(path)) {
+    return '/v1/risk-assessments/:assessment_id';
+  }
+  return 'unmatched';
+}
+
+function readRequestId(value: string | undefined): string | null {
+  const requestId = value?.trim();
+  if (!requestId || requestId.length > 100) return null;
+  if (/^req_[A-Za-z0-9-]{1,80}$/.test(requestId)) return requestId;
+  if (/^[a-f0-9]{16,32}$/i.test(requestId)) return requestId;
+  if (
+    /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(requestId)
+  ) {
+    return requestId;
+  }
+  return null;
+}
+
 export class MemoryAssessmentRepository implements AssessmentRepository {
   private readonly byId = new Map<string, StoredAssessment>();
   private readonly byIdempotency = new Map<string, StoredAssessment>();
diff --git a/apps/api/src/server.ts b/apps/api/src/server.ts
index ee828ae..233ac21 100644
--- a/apps/api/src/server.ts
+++ b/apps/api/src/server.ts
@@ -4,6 +4,7 @@ import { Pool } from 'pg';
 import { verifyApiKey } from '@ozzyl/authentication';
 import { PostgresDurableWorkOperations } from '@ozzyl/database';
 import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
+import { createStructuredLogger } from '@ozzyl/observability';
 import { MemoryUsageLedger, type PlanCode } from '@ozzyl/billing';
 import {
   createApiApp,
@@ -80,6 +81,10 @@ const phoneHmacKey = required('PHONE_HMAC_KEY');
 const apiKeyPepper = required('API_KEY_PEPPER');
 const databaseUrl = process.env.DATABASE_URL;
 const productionMode = process.env.NODE_ENV === 'production';
+const log = createStructuredLogger({
+  service: 'ozzyl-guard-api',
+  environment: process.env.NODE_ENV ?? 'development',
+});

 if (productionMode && !databaseUrl) {
   throw new Error('DATABASE_URL is required in production');
@@ -134,6 +139,7 @@ if (databaseUrl) {
       csrfSecret: sessionCsrfSecret,
       secureCookies: productionMode,
     },
+    logger: log,
   };
 } else {
   dependencies = {
@@ -165,23 +171,20 @@ if (databaseUrl) {
     idempotency: new MemoryOperationIdempotencyStore(),
     rateLimiter: new MemoryRateLimiter(),
     hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
+    logger: log,
   };
 }

 const app = createApiApp(dependencies);
 const port = Number(process.env.API_PORT ?? 3000);
 const server = serve({ fetch: app.fetch, port });
-console.info(
-  JSON.stringify({
-    level: 'info',
-    event: 'api.started',
-    port,
-    persistence: databaseUrl ? 'postgresql' : 'memory',
-  }),
-);
+log.info('api.started', {
+  port,
+  persistence: databaseUrl ? 'postgresql' : 'memory',
+});

 const shutdown = async (signal: string): Promise<void> => {
-  console.info(JSON.stringify({ level: 'info', event: 'api.stopping', signal }));
+  log.info('api.stopping', { signal });
   server.close();
   await pool?.end();
   process.exit(0);
diff --git a/docs/operations/operations-observability.md b/docs/operations/operations-observability.md
index 7839781..091c67a 100644
--- a/docs/operations/operations-observability.md
+++ b/docs/operations/operations-observability.md
@@ -104,11 +104,11 @@ not affect source checkout or the effective legacy decision.

 ## Logging

-`@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The courier-session, courier-sync, event, and verification runners use it for startup and error records. Every record receives a timestamp, level, service, environment, and event name before export.
+`@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The API server and the courier-session, courier-sync, event, and verification runners use it for lifecycle and error records. Every record receives a timestamp, level, service, environment, and event name before export.

 The helper recursively redacts sensitive field names before serialization. Passwords, secrets, tokens, API keys, cookies, OTPs, raw phone values, credentials, provider responses, DNS answers, payloads, request/response bodies, and URLs are replaced rather than emitted. `phone_hash` is permitted as a non-reversible correlation reference. Error values expose only a bounded name and structured code; messages and stacks are omitted. Circular objects, binary values, big integers, excessive depth, oversized strings, and large collections are converted to bounded safe representations.

-Serialization or log-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. The current package is intentionally exporter-neutral. API/repository/provider metrics, distributed traces, OpenTelemetry exporters/collector topology, dashboards, alerts, and the managed backend remain production follow-up work.
+Serialization or log-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. API request records use only accepted/generated opaque request IDs, an allowlisted route or bounded route template, HTTP method, status/status class, and duration. Raw URLs, query strings, and dynamic assessment identifiers are not exported. The current package is intentionally exporter-neutral. API/repository/provider metrics, distributed traces, OpenTelemetry exporters/collector topology, dashboards, alerts, and the managed backend remain production follow-up work.

 Use structured logs with:

@@ -125,7 +125,7 @@ Use structured logs with:

 Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, webhook signing secrets, destination URL credentials, and unrestricted request/event bodies are prohibited.

-All four private workers emit startup and structured error records through the shared redaction boundary. Production instrumentation must add counters, histograms, and correlation spans without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, provider credentials, or DNS answer details that disclose internal topology.
+The API emits startup/shutdown, request-completion, and unhandled-error records, and all four private workers emit startup and structured error records through the shared redaction boundary. Production instrumentation must add counters, histograms, and correlation spans without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, provider credentials, or DNS answer details that disclose internal topology.

 Recommended event-worker error codes include:

diff --git a/docs/testing/testing-strategy.md b/docs/testing/testing-strategy.md
index b26ed9b..891f3d1 100644
--- a/docs/testing/testing-strategy.md
+++ b/docs/testing/testing-strategy.md
@@ -17,6 +17,7 @@
 - Runtime-role identifier validation and explicit table-policy completeness
 - Native shadow off mode, deterministic sampling, post-persist source revalidation, legacy-authoritative disagreement, timeout classification, and safe assessment/persistence failures
 - Structured-log fixed metadata, recursive sensitive-field redaction, safe error-code-only serialization, circular/binary/bigint handling, bounded truncation, and telemetry-sink failure isolation
+- API request-ID validation, bounded route templates, status/latency lifecycle records, and safe unhandled-error serialization

 ## Contract tests

@@ -61,6 +62,7 @@ Webhook delivery contract tests cover:
 - Lease-owned webhook delivery and retry
 - Multi-tenant isolation
 - Organization/store membership authorization
+- API-wide request correlation for public, authenticated, browser, not-found, and unhandled-error paths without raw dynamic routes or query values
 - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting

 ### PostgreSQL concurrency and idempotency coverage
@@ -218,6 +220,7 @@ Future PostgreSQL coverage must include:
 - Envelope authenticated-context mismatch
 - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
 - Telemetry serialization/export failure isolation from application and worker execution
+- Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
 - Injection attacks
 - Session fixation/rotation
 - Credential decryption failure
diff --git a/package-lock.json b/package-lock.json
index 4d2d9ef..705f15b 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -28,7 +28,7 @@
         "vitest": "^4.0.18"
       },
       "engines": {
-        "node": ">=20.0.0",
+        "node": ">=20.19.0",
         "npm": ">=10.0.0"
       }
     },
@@ -56,6 +56,7 @@
         "@ozzyl/billing": "*",
         "@ozzyl/database": "*",
         "@ozzyl/encryption": "*",
+        "@ozzyl/observability": "*",
         "@ozzyl/risk-engine": "*",
         "@ozzyl/shared-types": "*",
         "@ozzyl/verification": "*",
diff --git a/tracker.yml b/tracker.yml
index 23b3106..b5b6db3 100644
--- a/tracker.yml
+++ b/tracker.yml
@@ -90,6 +90,8 @@ invariants:
   - browser_dead_letter_responses_exclude_payloads_and_secret_material
   - structured_logs_redact_sensitive_fields_before_export
   - telemetry_failures_never_break_application_or_worker_execution
+  - api_request_ids_are_server_generated_or_bounded_opaque_values
+  - api_logs_never_export_raw_urls_query_values_or_dynamic_route_identifiers

 implemented:
   - typescript_monorepo_and_ci
@@ -143,6 +145,8 @@ implemented:
   - provider_neutral_structured_logging_and_recursive_redaction
   - courier_session_courier_sync_event_and_verification_worker_log_integration
   - telemetry_serialization_and_sink_failure_isolation_tests
+  - api_request_lifecycle_and_safe_correlation_logging
+  - api_unhandled_error_redaction_and_sink_failure_isolation_tests

 verification:
   command: npm run verify
@@ -156,7 +160,8 @@ verification:
     architecture_boundaries: passed
     typecheck: 20_of_20_passed
     test_tasks: 31_of_31_passed
-    remote_assertions: 132_passed
+    source_assertions: 136_total
+    previous_main_remote_assertions: 132_passed
     migration_integrity_tests: 7_of_7_passed
     postgresql_concurrency_tests: 7_of_7_passed
     postgresql_courier_worker_lease_tests: 5_of_5_passed
@@ -175,6 +180,7 @@ verification:
     durable_dead_letter_postgresql_tests: 5_of_5_passed
     browser_dead_letter_api_tests: 3_of_3_passed
     observability_tests: 3_of_3_passed
+    api_observability_tests: 4_of_4_passed
     builds: 20_of_20_passed
     php_syntax: passed
     high_critical_dependency_check: passed
@@ -182,8 +188,8 @@ verification:
     documentation_links: 57_reviewed_0_known_broken
   continuation_bundle:
     status: refreshed_locally
-    canonical_main_sync: verified_at_d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7
-    local_exporter: completed_after_merged_observability_ci_evidence
+    canonical_main_sync: verified_at_cc8d8901808305b4c72604c654b7790ae7e3bffc
+    local_exporter: completed_after_api_observability_docs
   remote_ci:
     status: passed
     run_id: 30317190971
@@ -202,6 +208,7 @@ verification:
     steps: audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_two_assertions_twenty_builds_php_all_passed
     observability_tests: 3_of_3_passed
   pending_follow_up:
+    - source_branch_remote_ci_validation
     - observability_metrics_traces_exporters_and_managed_backend
     - production_source_hook_deployment_and_explicit_pilot_store_selection
     - pilot_outcome_collection_and_calibration
@@ -320,5 +327,7 @@ notes:
   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
   - structured_log_redaction_is_canonicalized_in_packages_observability
   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
-  - pro_context_was_refreshed_after_merged_observability_ci_evidence
+  - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
+  - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
+  - pro_context_was_refreshed_after_api_observability_documentation
   - update_this_file_after_every_material_milestone
```

## Existing AI Bridge Context

--- .ai-bridge/current-plan.md ---
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and fifteen production-hardening slices are complete:
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
 23 | 15. API-wide safe request correlation and structured lifecycle logging with opaque request IDs, bounded route templates, response status/latency, redacted unhandled errors, and telemetry-failure isolation.
 24 |
 25 | Concrete provider selection and provisioning remain external production work.
 26 |
 27 | ## Completed
 28 |
 29 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 30 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 31 | - [x] Canonical shared API/error/event contracts
 32 | - [x] PostgreSQL/Drizzle schema and twelve append-only migrations
 33 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 34 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 35 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 36 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 37 | - [x] Courier adapter contract and Steadfast normalized adapter
 38 | - [x] Playwright Steadfast session driver with structured errors
 39 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 40 | - [x] Runnable PostgreSQL courier session and observation workers
 41 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 42 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 43 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 44 | - [x] API OTP send returns queued work without provider network I/O
 45 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 46 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 47 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 48 | - [x] Explicit-role platform admin with live global operations data
 49 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 50 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 51 | - [x] Architecture dependency-boundary CI guard
 52 | - [x] Provider-neutral production deployment topology ADR
 53 | - [x] Managed PostgreSQL production baseline ADR
 54 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 55 | - [x] Managed secrets and KMS envelope-encryption ADR
 56 | - [x] Vendor-neutral OpenTelemetry observability ADR
 57 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 58 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 59 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 60 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 61 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 62 | - [x] Concurrent usage reservations cannot exceed the plan limit
 63 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 64 | - [x] Concurrent outcome writes resolve as one insert and one replay
 65 | - [x] Operation idempotency records remain isolated by organization and store
 66 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 67 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 68 | - [x] Expired or previous courier owners cannot complete or fail jobs
 69 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 70 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 71 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 72 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 73 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 74 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 75 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 76 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 77 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 78 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 79 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 80 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 81 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 82 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 83 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 84 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 85 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 86 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 87 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 88 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 89 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 90 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 91 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 92 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 93 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 94 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
 95 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
 96 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
 97 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
 98 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
 99 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
100 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
101 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
102 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
103 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
104 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
105 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
106 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
107 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
108 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
109 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
110 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
111 |
112 | ## Verified baseline
113 |
114 | - Formatting check: passed
115 | - ESLint with zero warnings: passed
116 | - Twelve migration files ordered/non-empty/non-destructive: passed
117 | - First migration apply and immediate migration replay: passed
118 | - Architecture import boundaries: passed
119 | - Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
120 | - Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
121 | - Repository assertion inventory: 136, including four API request-correlation, bounded-route, unhandled-error redaction, and sink-failure tests; PostgreSQL-integrated source-branch CI is pending
122 | - Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
123 | - WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
124 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
125 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
126 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
127 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
128 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
129 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
130 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
131 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
132 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
133 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
134 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
135 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
136 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
137 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
138 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
139 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
140 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
141 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
142 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
143 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
144 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
145 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
146 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
147 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
148 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
149 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
150 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
151 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
152 | - Canonical documentation links before this slice: zero known broken internal links
153 | - `tracker.yml` YAML structure remains valid
154 | - Prohibited source-pattern search: no matches
155 |
156 | The repository-local continuation exporter was refreshed after the API observability milestone documentation was finalized, so its embedded snapshots match the current branch state.
157 |
158 | ## Next production milestone
159 |
160 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
161 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
162 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
163 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
164 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
165 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
166 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
167 |
168 | ## External blockers
169 |
170 | - Authorized Steadfast merchant/test credentials
171 | - Steadfast provider-terms and merchant-authorization review
172 | - Deployment platform, account, primary region, and budget
173 | - Managed PostgreSQL provider and service tier
174 | - Managed secret store and KMS/vault provider
175 | - Observability backend and retention policy
176 | - OTP provider account and credentials
177 | - Production account recovery/MFA or managed identity-provider decision
178 | - Repository visibility correction from currently reported public to expected private
179 | - Pilot outcome data for false-positive/false-negative calibration
180 |
181 | ## Non-negotiable continuation rules
182 |
183 | - Do not add a second risk engine.
184 | - Do not call providers from the risk engine or synchronous checkout path.
185 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
186 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
187 | - Do not use API keys as dashboard user sessions.
188 | - Require organization/store scope in all merchant repositories, events, and jobs.
189 | - Add new migrations; never edit applied migrations.
190 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
191 | - Keep Redis/cache state non-authoritative.
192 | - Keep unknown/provider failure explicit and policy-controlled.
193 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
194 |

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
 49 |
 50 | ## Source SaaS conflict resolutions
 51 |
 52 | | Conflict                                                                 | Decision                                                                                   |
 53 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 54 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 55 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 56 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 57 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 58 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 59 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 60 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 61 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 62 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 63 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 64 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 65 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 66 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 67 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 68 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 69 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 70 |
 71 | ## Approved reuse scope
 72 |
 73 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 74 | - Bangladesh phone normalization after tests
 75 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 76 | - WooCommerce settings/order hook/admin display skeleton
 77 | - API-key hash/display-prefix and usage-event concepts
 78 |
 79 | No product source code was copied during Phase 0.
 80 |
 81 | ## Pending decisions
 82 |
 83 | These require provider selection, provisioning, or separate ADRs before production implementation:
 84 |
 85 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 86 | - Specific deployment platform, account, and primary region
 87 | - Specific managed PostgreSQL provider and service tier
 88 | - Specific managed secret store and KMS/vault provider
 89 | - Specific observability backend and retention policy
 90 | - Redis-compatible cache provider when distributed coordination is required
 91 | - Dedicated broker only if measured scale requires superseding ADR 0008
 92 | - Worker scheduler/runtime implementation on the selected deployment platform
 93 | - OTP provider
 94 |
 95 | ## External requirements
 96 |
 97 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
 98 |
 99 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
100 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, README.md, apps/api/package.json, apps/api/src/index.test.ts, apps/api/src/index.ts, apps/api/src/server.ts, docs/operations/operations-observability.md, docs/testing/testing-strategy.md, package-lock.json, tracker.yml
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, apps/api/package.json, eslint.config.js, package.json, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, apps/api/src/index.test.ts, apps/api/src/index.ts, apps/api/src/server.ts, docs/operations/operations-observability.md, docs/testing/testing-strategy.md, package-lock.json, tracker.yml

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

### apps/api/package.json

Bytes: 831
SHA-256: 1c6478ebfd9f72a620ba5c9341865b3b6ba568243a0a97ff8070e2edd93a43ef
Lines: 1-32 of 32

```json
 1 | {
 2 |   "name": "@ozzyl/api",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "dev": "tsx watch src/server.ts",
 8 |     "build": "tsup src/index.ts src/server.ts src/bootstrap.ts --format esm --dts --sourcemap --clean",
 9 |     "start": "node dist/server.js",
10 |     "bootstrap": "tsx src/bootstrap.ts",
11 |     "typecheck": "tsc -p tsconfig.json --noEmit",
12 |     "test": "vitest run"
13 |   },
14 |   "dependencies": {
15 |     "@hono/node-server": "^1.19.9",
16 |     "@ozzyl/authentication": "*",
17 |     "@ozzyl/billing": "*",
18 |     "@ozzyl/risk-engine": "*",
19 |     "@ozzyl/shared-types": "*",
20 |     "@ozzyl/verification": "*",
21 |     "hono": "^4.11.4",
22 |     "pg": "^8.16.3",
23 |     "zod": "^3.25.76",
24 |     "@ozzyl/encryption": "*",
25 |     "@ozzyl/database": "*",
26 |     "@ozzyl/observability": "*"
27 |   },
28 |   "devDependencies": {
29 |     "@types/pg": "^8.15.5"
30 |   }
31 | }
32 |
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

Bytes: 7146
SHA-256: 64ac2e9452bc71bb1477adfbae97b54e36e5307c63fc9c36fbc6537100041555
Lines: 1-147 of 147

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
 45 | - Canonical structured logging/redaction package used by the API and all four private workers; telemetry sink failures cannot break request or worker execution
 46 | - API-wide safe request correlation with opaque request IDs, bounded route templates, status classes, latency, and redacted unhandled-error records
 47 |
 48 | The following require external accounts or production decisions before live use:
 49 |
 50 | - Authorized Steadfast merchant/test credentials and provider-terms review
 51 | - A selected KMS/vault adapter, component service identities, access auditing, runtime wiring, and an audited background rewrite before replacing local v1 encryption in production
 52 | - OTP provider selection and credentials
 53 | - Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
 54 | - Production queue/cache/observability providers
 55 | - Production source-platform hook deployment, explicit pilot-store selection, and outcome calibration before any enforcement or broad automatic blocking
 56 |
 57 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
 58 |
 59 | ## Repository structure
 60 |
 61 | ```text
 62 | apps/
 63 |   api/             Versioned API and PostgreSQL repositories
 64 |   dashboard/       Merchant operations dashboard
 65 |   admin/           Platform operations dashboard
 66 | workers/
 67 |   courier-session-worker/
 68 |   courier-sync-worker/
 69 |   verification-worker/
 70 |   event-worker/
 71 | packages/
 72 |   shared-types/
 73 |   risk-engine/
 74 |   courier-adapters/
 75 |   database/
 76 |   authentication/
 77 |   billing/
 78 |   verification/
 79 |   sdk/
 80 |   observability/
 81 | integrations/
 82 |   woocommerce/
 83 |   shopify/
 84 |   custom-js/
 85 |   multi-store-saas/
 86 | docs/
 87 | .ai-bridge/
 88 | ```
 89 |
 90 | ## Core rules
 91 |
 92 | 1. There is exactly one canonical risk engine.
 93 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
 94 | 3. Courier providers are isolated behind adapters and asynchronous workers.
 95 | 4. Merchant data is always organization/store scoped.
 96 | 5. Unknown customers are not automatically safe.
 97 | 6. Provider failure does not automatically approve or block a customer.
 98 | 7. Every assessment returns explainable signals and confidence.
 99 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
100 | 9. Applied migrations are immutable; changes require a new migration.
101 | 10. Every integration consumes the same canonical API response.
102 |
103 | ## Local setup
104 |
105 | Prerequisites: Node.js 20.19+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
106 |
107 | ```bash
108 | npm install
109 | npm run db:check
110 | npm run db:migrate
111 | npm run db:integrity
112 | # After creating a separate non-owner PostgreSQL login outside the app:
113 | DATABASE_RUNTIME_ROLE=ozzyl_guard_runtime npm run db:runtime-grants
114 | npm run bootstrap -w @ozzyl/api
115 | npm run dev:api
116 | ```
117 |
118 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
119 |
120 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
121 |
122 | Dead-letter operations are documented in the [durable work runbook](docs/operations/durable-work-dead-letter-runbook.md). They require a trusted environment, `DATABASE_URL`, an active owner/admin user ID, and exact organization/store scope.
123 |
124 | Merchant dashboard:
125 |
126 | ```bash
127 | npm run dev:dashboard
128 | ```
129 |
130 | Platform admin:
131 |
132 | ```bash
133 | npm run dev -w @ozzyl/admin
134 | ```
135 |
136 | Private workers:
137 |
138 | ```bash
139 | npm run start -w @ozzyl/courier-session-worker
140 | npm run start -w @ozzyl/courier-sync-worker
141 | npm run start -w @ozzyl/event-worker
142 | # Requires a reviewed provider module/account in addition to the standard secrets:
143 | npm run start -w @ozzyl/verification-worker
144 | ```
145 |
146 | ## Docker Compose
147 |
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

Bytes: 20910
SHA-256: e8804c81c9f002115605c0f07bed9bb360d0f05c1ca6afee6006b7cc3e523c79
Lines: 1-194 of 194

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and fifteen production-hardening slices are complete:
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
 23 | 15. API-wide safe request correlation and structured lifecycle logging with opaque request IDs, bounded route templates, response status/latency, redacted unhandled errors, and telemetry-failure isolation.
 24 |
 25 | Concrete provider selection and provisioning remain external production work.
 26 |
 27 | ## Completed
 28 |
 29 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 30 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 31 | - [x] Canonical shared API/error/event contracts
 32 | - [x] PostgreSQL/Drizzle schema and twelve append-only migrations
 33 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 34 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 35 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 36 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 37 | - [x] Courier adapter contract and Steadfast normalized adapter
 38 | - [x] Playwright Steadfast session driver with structured errors
 39 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 40 | - [x] Runnable PostgreSQL courier session and observation workers
 41 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 42 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 43 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 44 | - [x] API OTP send returns queued work without provider network I/O
 45 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 46 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 47 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 48 | - [x] Explicit-role platform admin with live global operations data
 49 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 50 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 51 | - [x] Architecture dependency-boundary CI guard
 52 | - [x] Provider-neutral production deployment topology ADR
 53 | - [x] Managed PostgreSQL production baseline ADR
 54 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 55 | - [x] Managed secrets and KMS envelope-encryption ADR
 56 | - [x] Vendor-neutral OpenTelemetry observability ADR
 57 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 58 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 59 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 60 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 61 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 62 | - [x] Concurrent usage reservations cannot exceed the plan limit
 63 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 64 | - [x] Concurrent outcome writes resolve as one insert and one replay
 65 | - [x] Operation idempotency records remain isolated by organization and store
 66 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 67 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
 68 | - [x] Expired or previous courier owners cannot complete or fail jobs
 69 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
 70 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
 71 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
 72 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
 73 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
 74 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
 75 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
 76 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
 77 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
 78 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
 79 | - [x] Verification scope mismatch fails both the job and authoritative session closed
 80 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
 81 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
 82 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
 83 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
 84 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
 85 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
 86 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
 87 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
 88 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
 89 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
 90 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
 91 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
 92 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
 93 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
 94 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
 95 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
 96 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
 97 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
 98 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
 99 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
100 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
101 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
102 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
103 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
104 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
105 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
106 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
107 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
108 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
109 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
110 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
111 |
112 | ## Verified baseline
113 |
114 | - Formatting check: passed
115 | - ESLint with zero warnings: passed
116 | - Twelve migration files ordered/non-empty/non-destructive: passed
117 | - First migration apply and immediate migration replay: passed
118 | - Architecture import boundaries: passed
119 | - Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
120 | - Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
121 | - Repository assertion inventory: 136, including four API request-correlation, bounded-route, unhandled-error redaction, and sink-failure tests; PostgreSQL-integrated source-branch CI is pending
122 | - Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
123 | - WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
124 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
125 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
126 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
127 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
128 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
129 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
130 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
131 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
132 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
133 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
134 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
135 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
136 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
137 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
138 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
139 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
140 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
141 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
142 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
143 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
144 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
145 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
146 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
147 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
148 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
149 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
150 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
151 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
152 | - Canonical documentation links before this slice: zero known broken internal links
153 | - `tracker.yml` YAML structure remains valid
154 | - Prohibited source-pattern search: no matches
155 |
156 | The repository-local continuation exporter was refreshed after the API observability milestone documentation was finalized, so its embedded snapshots match the current branch state.
157 |
158 | ## Next production milestone
159 |
160 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
161 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
162 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
163 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
164 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
165 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
166 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
167 |
168 | ## External blockers
169 |
170 | - Authorized Steadfast merchant/test credentials
171 | - Steadfast provider-terms and merchant-authorization review
172 | - Deployment platform, account, primary region, and budget
173 | - Managed PostgreSQL provider and service tier
174 | - Managed secret store and KMS/vault provider
175 | - Observability backend and retention policy
176 | - OTP provider account and credentials
177 | - Production account recovery/MFA or managed identity-provider decision
178 | - Repository visibility correction from currently reported public to expected private
179 | - Pilot outcome data for false-positive/false-negative calibration
180 |
181 | ## Non-negotiable continuation rules
182 |
183 | - Do not add a second risk engine.
184 | - Do not call providers from the risk engine or synchronous checkout path.
185 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
186 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
187 | - Do not use API keys as dashboard user sessions.
188 | - Require organization/store scope in all merchant repositories, events, and jobs.
189 | - Add new migrations; never edit applied migrations.
190 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
191 | - Keep Redis/cache state non-authoritative.
192 | - Keep unknown/provider failure explicit and policy-controlled.
193 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
194 |
```

### .ai-bridge/decisions.md

Bytes: 14857
SHA-256: 65bb9c57b43aabc04bb4bd3939cbc48640479eeeabc1671ee1d015ac32ab70af
Lines: 1-100 of 100

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
 49 |
 50 | ## Source SaaS conflict resolutions
 51 |
 52 | | Conflict                                                                 | Decision                                                                                   |
 53 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 54 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 55 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 56 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 57 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 58 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 59 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 60 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 61 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 62 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 63 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 64 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 65 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 66 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 67 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 68 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 69 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 70 |
 71 | ## Approved reuse scope
 72 |
 73 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 74 | - Bangladesh phone normalization after tests
 75 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 76 | - WooCommerce settings/order hook/admin display skeleton
 77 | - API-key hash/display-prefix and usage-event concepts
 78 |
 79 | No product source code was copied during Phase 0.
 80 |
 81 | ## Pending decisions
 82 |
 83 | These require provider selection, provisioning, or separate ADRs before production implementation:
 84 |
 85 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 86 | - Specific deployment platform, account, and primary region
 87 | - Specific managed PostgreSQL provider and service tier
 88 | - Specific managed secret store and KMS/vault provider
 89 | - Specific observability backend and retention policy
 90 | - Redis-compatible cache provider when distributed coordination is required
 91 | - Dedicated broker only if measured scale requires superseding ADR 0008
 92 | - Worker scheduler/runtime implementation on the selected deployment platform
 93 | - OTP provider
 94 |
 95 | ## External requirements
 96 |
 97 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
 98 |
 99 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
100 |
```

### .ai-bridge/implementation-status.md

Bytes: 23616
SHA-256: 93f2bb8f5e4758658ff3e10581a2952c3d9743c2b197c197437c1c395939dc6d
Lines: 1-173 of 173

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
 38 | | Courier observation worker/cache | done     | Lease-owned atomic claims, expired-owner rejection, stale recovery, retry/final failure, relational scope, observation persistence                                                           |
 39 | | Durable webhook outbox           | done     | Assessment/outcome transaction emission, scoped event payloads, lease-owned event worker, retries, stale recovery, encrypted secret access                                                   |
 40 | | Durable work architecture        | done     | PostgreSQL lease pattern plus owner/admin-scoped secret-free inspection, explicit idempotent replay, CLI, and merchant browser operations are implemented; future lease renewal remains      |
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
 52 | | OTP verification                 | baseline | Transactional encrypted queue, tenant-scoped verifier, lease-owned private runner, retries, and failure events done; provider account remains                                                |
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
 89 | - `npm run test`: 31/31 Turbo dependency tasks passed locally; source inventory contains 136 assertions, including four API observability tests
 90 | - `npm run build`: 20/20 workspace builds passed locally; source-branch CI is pending
 91 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 92 | - Observability tests prove fixed metadata, nested redaction, error message/stack omission, circular/binary/bigint handling, bounded strings, reserved-field protection, and sink-failure isolation
 93 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, safe unhandled-error serialization, and request availability during sink failure
 94 | - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
 95 | - Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
 96 | - Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
 97 | - Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
 98 | - Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
 99 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
100 | - Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
101 | - Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
102 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
103 | - Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
104 | - Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
105 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
106 | - Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
107 | - Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
108 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
109 | - Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
110 | - Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
111 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
112 | - Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
113 | - Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
114 | - Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
115 | - Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
116 | - Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
117 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
118 | - Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
119 | - Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
120 | - Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
121 | - Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
122 | - Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
123 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
124 | - Five real-PostgreSQL durable-work tests cover exact-store owner/admin listing, negative member authorization, concurrent duplicate replay, one immutable ledger/audit outcome, courier lease reset, scoped unexpired verification reopening, structural/expired rejection, cross-tenant isolation, and idempotency conflicts
125 | - Seven runtime-role tests now include insert-only replay-ledger privileges alongside migration-history, DELETE, DDL, ownership, and elevated-role denials
126 | - Durable-work dead-letter final run `29644234591`, job `88079650134`: twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
127 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
128 | - Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping
129 | - Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
130 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
131 | - Structured observability final run `30317190971`, job `90145176143`: twelve migrations, 20 typechecks, 31 Turbo test/build dependency tasks with 132 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
132 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
133 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
134 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
135 | - Previous canonical documentation checks found zero broken internal links
136 | - Prohibited insecure-pattern scan: zero matches
137 |
138 | The repository-local exporter was refreshed after this API observability milestone documentation was completed. Source-branch remote CI is pending.
139 |
140 | ## External blockers and production requirements
141 |
142 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
143 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
144 | - Managed secret store and KMS/vault provider
145 | - Observability backend, retention, dashboards, alerts, and incident channels
146 | - Optional Redis-compatible cache only when distributed coordination is required
147 | - Authorized Steadfast test/merchant account
148 | - Provider-terms and merchant-authorization review
149 | - OTP provider selection/account
150 | - Production account recovery/MFA or managed identity-provider decision
151 | - Pilot merchants and verified outcome data for calibration
152 |
153 | ## Remaining risks
154 |
155 | - Steadfast UI/internal endpoint changes can break automation.
156 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
157 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
158 | - In-process API and browser-session rate limiting is not distributed across replicas.
159 | - Controlled dead-letter inspection and browser replay are implemented; future work still includes lease renewal for executions that may exceed one lease and a reviewed retention/archival policy.
160 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
161 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
162 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
163 | - GitHub currently reports public repository visibility although the expected policy is private.
164 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
165 | - Structured logs are implemented for API request lifecycle and private worker startup/error paths, but repository/provider metrics, traces, exporters, dashboards, alerts, and managed retention are not yet implemented.
166 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
167 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
168 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
169 |
170 | ## Next milestone
171 |
172 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
173 |
```

### apps/api/src/index.test.ts

Bytes: 12461
SHA-256: 9e800d545ab6ab5a2daa107198bb4265ec8777174a1fe246cf0c919731abe884
Lines: 1-371 of 371

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { describe, expect, it } from 'vitest';
  3 | import { MemoryUsageLedger } from '@ozzyl/billing';
  4 | import { createStructuredLogger, type StructuredLogger } from '@ozzyl/observability';
  5 | import {
  6 |   createApiApp,
  7 |   MemoryAssessmentRepository,
  8 |   MemoryOperationIdempotencyStore,
  9 |   MemoryOutcomeRepository,
 10 |   MemoryRateLimiter,
 11 |   MemoryRefreshQueue,
 12 |   MissingFeatureProvider,
 13 |   type ApiKeyIdentity,
 14 |   type AssessmentRepository,
 15 | } from './index.js';
 16 |
 17 | const apiKey = ['ozg', 'test', 'fixture-a'].join('_');
 18 |
 19 | function createTestApp(input?: {
 20 |   identity?: ApiKeyIdentity;
 21 |   assessments?: AssessmentRepository;
 22 |   rawApiKey?: string;
 23 |   logger?: StructuredLogger;
 24 |   monotonicNow?: () => number;
 25 |   verificationRequests?: {
 26 |     enqueueSend(input: {
 27 |       organizationId: string;
 28 |       storeId: string;
 29 |       assessmentId?: string;
 30 |       phone: string;
 31 |       phoneHash: string;
 32 |       purpose: string;
 33 |       idempotencyKey: string;
 34 |     }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
 35 |   };
 36 |   otpVerifier?: {
 37 |     verify(input: {
 38 |       organizationId: string;
 39 |       storeId: string;
 40 |       verificationId: string;
 41 |       otp: string;
 42 |     }): Promise<{ verified: true }>;
 43 |   };
 44 | }) {
 45 |   let counter = 0;
 46 |   const identity =
 47 |     input?.identity ??
 48 |     ({
 49 |       apiKeyId: 'key_1',
 50 |       organizationId: 'org_1',
 51 |       storeId: 'store_1',
 52 |       environment: 'test',
 53 |       plan: 'free',
 54 |       scopes: new Set(['*']),
 55 |     } satisfies ApiKeyIdentity);
 56 |   const acceptedKey = input?.rawApiKey ?? apiKey;
 57 |   return createApiApp({
 58 |     apiKeys: {
 59 |       async resolve(rawApiKey) {
 60 |         return rawApiKey === acceptedKey ? identity : null;
 61 |       },
 62 |     },
 63 |     usage: new MemoryUsageLedger(),
 64 |     features: new MissingFeatureProvider(),
 65 |     assessments: input?.assessments ?? new MemoryAssessmentRepository(),
 66 |     outcomes: new MemoryOutcomeRepository(),
 67 |     refreshQueue: new MemoryRefreshQueue(),
 68 |     idempotency: new MemoryOperationIdempotencyStore(),
 69 |     rateLimiter: new MemoryRateLimiter(),
 70 |     hashPhone: (phone) => createHmac('sha256', 'x'.repeat(32)).update(phone).digest('hex'),
 71 |     ...(input?.verificationRequests === undefined
 72 |       ? {}
 73 |       : { verificationRequests: input.verificationRequests }),
 74 |     ...(input?.otpVerifier === undefined ? {} : { otpVerifier: input.otpVerifier }),
 75 |     ...(input?.logger === undefined ? {} : { logger: input.logger }),
 76 |     ...(input?.monotonicNow === undefined ? {} : { monotonicNow: input.monotonicNow }),
 77 |     idFactory: (prefix) => `${prefix}_${++counter}`,
 78 |     now: () => new Date('2026-07-16T10:00:00.000Z'),
 79 |   });
 80 | }
 81 |
 82 | const assessmentRequest = {
 83 |   phone: '01712345678',
 84 |   order_total: 1500,
 85 |   payment_method: 'cod',
 86 | };
 87 |
 88 | const authorizedHeaders = {
 89 |   Authorization: `Bearer ${apiKey}`,
 90 |   'Content-Type': 'application/json',
 91 |   'Idempotency-Key': 'order-1001',
 92 | };
 93 |
 94 | describe('Ozzyl Guard API', () => {
 95 |   it('records a bounded request lifecycle without logging dynamic path values', async () => {
 96 |     const lines: string[] = [];
 97 |     const ticks = [100, 125];
 98 |     const logger = createStructuredLogger({
 99 |       service: 'api-test',
100 |       environment: 'test',
101 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
102 |       write: (line) => lines.push(line),
103 |     });
104 |     const response = await createTestApp({
105 |       logger,
106 |       monotonicNow: () => ticks.shift() ?? 125,
107 |     }).request('/v1/risk-assessments/ras-sensitive-value?query=discard-me', {
108 |       headers: {
109 |         Authorization: `Bearer ${apiKey}`,
110 |         'X-Request-ID': 'req_client-123',
111 |       },
112 |     });
113 |
114 |     expect(response.status).toBe(404);
115 |     expect(response.headers.get('X-Request-ID')).toBe('req_client-123');
116 |     expect(lines).toHaveLength(1);
117 |     expect(JSON.parse(lines[0] ?? '{}')).toMatchObject({
118 |       level: 'warn',
119 |       event: 'api.request.completed',
120 |       request_id: 'req_client-123',
121 |       method: 'GET',
122 |       route: '/v1/risk-assessments/:assessment_id',
123 |       status_code: 404,
124 |       status_class: '4xx',
125 |       duration_ms: 25,
126 |     });
127 |     expect(lines.join('\n')).not.toContain('ras-sensitive-value');
128 |     expect(lines.join('\n')).not.toContain('discard-me');
129 |   });
130 |
131 |   it('rejects arbitrary caller request identifiers instead of reflecting them', async () => {
132 |     const lines: string[] = [];
133 |     const logger = createStructuredLogger({
134 |       service: 'api-test',
135 |       environment: 'test',
136 |       write: (line) => lines.push(line),
137 |     });
138 |     const unsafeRequestId = 'customer-reference-1001';
139 |     const response = await createTestApp({ logger }).request('/health', {
140 |       headers: { 'X-Request-ID': unsafeRequestId },
141 |     });
142 |
143 |     expect(response.status).toBe(200);
144 |     expect(response.headers.get('X-Request-ID')).toBe('req_1');
145 |     expect(lines.join('\n')).not.toContain(unsafeRequestId);
146 |   });
147 |
148 |   it('keeps request handling available when the telemetry sink fails', async () => {
149 |     const logger = createStructuredLogger({
150 |       service: 'api-test',
151 |       environment: 'test',
152 |       write: () => {
153 |         throw new Error('sink unavailable');
154 |       },
155 |     });
156 |     const response = await createTestApp({ logger }).request('/health');
157 |
158 |     expect(response.status).toBe(200);
159 |     await expect(response.json()).resolves.toMatchObject({ status: 'ok' });
160 |   });
161 |
162 |   it('records unhandled errors without exporting their messages or stacks', async () => {
163 |     const lines: string[] = [];
164 |     const logger = createStructuredLogger({
165 |       service: 'api-test',
166 |       environment: 'test',
167 |       write: (line) => lines.push(line),
168 |     });
169 |     const failure = Object.assign(new Error('restricted database detail'), {
170 |       code: 'DATABASE_FAILURE',
171 |     });
172 |     const assessments: AssessmentRepository = {
173 |       async findByIdempotency() {
174 |         throw failure;
175 |       },
176 |       async findById() {
177 |         return null;
178 |       },
179 |       async save(record) {
180 |         return record;
181 |       },
182 |     };
183 |     const response = await createTestApp({ logger, assessments }).request('/v1/risk-assessments', {
184 |       method: 'POST',
185 |       headers: authorizedHeaders,
186 |       body: JSON.stringify(assessmentRequest),
187 |     });
188 |
189 |     expect(response.status).toBe(500);
190 |     await expect(response.json()).resolves.toMatchObject({
191 |       success: false,
192 |       error: { code: 'INTERNAL_ERROR' },
193 |     });
194 |     const records = lines.map((line) => JSON.parse(line) as Record<string, unknown>);
195 |     expect(records).toEqual(
196 |       expect.arrayContaining([
197 |         expect.objectContaining({
198 |           event: 'api.request.unhandled_error',
199 |           code: 'UNHANDLED_ERROR',
200 |           error: { name: 'Error', code: 'DATABASE_FAILURE' },
201 |         }),
202 |         expect.objectContaining({
203 |           event: 'api.request.completed',
204 |           status_code: 500,
205 |           status_class: '5xx',
206 |         }),
207 |       ]),
208 |     );
209 |     expect(lines.join('\n')).not.toContain('restricted database detail');
210 |     expect(lines.join('\n')).not.toContain('stack');
211 |   });
212 |
213 |   it('requires API authentication', async () => {
214 |     const response = await createTestApp().request('/v1/risk-assessments', {
215 |       method: 'POST',
216 |       headers: { 'Content-Type': 'application/json', 'Idempotency-Key': 'request-1' },
217 |       body: JSON.stringify(assessmentRequest),
218 |     });
219 |     expect(response.status).toBe(401);
220 |   });
221 |
222 |   it('returns the canonical unknown/verify assessment when history is unavailable', async () => {
223 |     const response = await createTestApp().request('/v1/risk-assessments', {
224 |       method: 'POST',
225 |       headers: authorizedHeaders,
226 |       body: JSON.stringify(assessmentRequest),
227 |     });
228 |     expect(response.status).toBe(201);
229 |     const body = (await response.json()) as Record<string, unknown>;
230 |     expect(body).toMatchObject({
231 |       success: true,
232 |       risk_level: 'unknown',
233 |       decision: 'verify',
234 |       confidence: 0,
235 |     });
236 |     expect((body.signals as Array<{ code: string }>)[0]?.code).toBe('insufficient_history');
237 |   });
238 |
239 |   it('returns the original result for an idempotent retry', async () => {
240 |     const app = createTestApp();
241 |     const first = await app.request('/v1/risk-assessments', {
242 |       method: 'POST',
243 |       headers: authorizedHeaders,
244 |       body: JSON.stringify(assessmentRequest),
245 |     });
246 |     const second = await app.request('/v1/risk-assessments', {
247 |       method: 'POST',
248 |       headers: authorizedHeaders,
249 |       body: JSON.stringify(assessmentRequest),
250 |     });
251 |     expect(first.status).toBe(201);
252 |     expect(second.status).toBe(200);
253 |     const firstBody = (await first.json()) as { assessment_id: string };
254 |     const secondBody = (await second.json()) as { assessment_id: string };
255 |     expect(secondBody.assessment_id).toBe(firstBody.assessment_id);
256 |   });
257 |
258 |   it('enforces store isolation when reading an assessment', async () => {
259 |     const assessments = new MemoryAssessmentRepository();
260 |     const storeOneApp = createTestApp({ assessments });
261 |     const created = await storeOneApp.request('/v1/risk-assessments', {
262 |       method: 'POST',
263 |       headers: authorizedHeaders,
264 |       body: JSON.stringify(assessmentRequest),
265 |     });
266 |     const createdBody = (await created.json()) as { assessment_id: string };
267 |
268 |     const otherKey = ['ozg', 'test', 'fixture-b'].join('_');
269 |     const storeTwoApp = createTestApp({
270 |       assessments,
271 |       rawApiKey: otherKey,
272 |       identity: {
273 |         apiKeyId: 'key_2',
274 |         organizationId: 'org_1',
275 |         storeId: 'store_2',
276 |         environment: 'test',
277 |         plan: 'free',
278 |         scopes: new Set(['*']),
279 |       },
280 |     });
281 |     const response = await storeTwoApp.request(
282 |       `/v1/risk-assessments/${createdBody.assessment_id}`,
283 |       { headers: { Authorization: `Bearer ${otherKey}` } },
284 |     );
285 |     expect(response.status).toBe(404);
286 |   });
287 |
288 |   it('queues OTP delivery without performing provider I/O in the request', async () => {
289 |     let enqueueCalls = 0;
290 |     const app = createTestApp({
291 |       verificationRequests: {
292 |         async enqueueSend(input) {
293 |           enqueueCalls += 1;
294 |           expect(input).toMatchObject({
295 |             organizationId: 'org_1',
296 |             storeId: 'store_1',
297 |             purpose: 'cod_order_confirmation',
298 |             idempotencyKey: 'otp-1001',
299 |           });
300 |           return {
301 |             verificationId: 'ver_queued',
302 |             expiresAt: '2026-07-16T10:05:00.000Z',
303 |             replay: false,
304 |           };
305 |         },
306 |       },
307 |     });
308 |     const response = await app.request('/v1/verifications/otp/send', {
309 |       method: 'POST',
310 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'otp-1001' },
311 |       body: JSON.stringify({ phone: '01712345678' }),
312 |     });
313 |     expect(response.status).toBe(202);
314 |     await expect(response.json()).resolves.toMatchObject({
315 |       success: true,
316 |       verification_id: 'ver_queued',
317 |       status: 'queued',
318 |     });
319 |     expect(enqueueCalls).toBe(1);
320 |   });
321 |
322 |   it('verifies OTP through the database verifier dependency', async () => {
323 |     let verifyCalls = 0;
324 |     const app = createTestApp({
325 |       otpVerifier: {
326 |         async verify(input) {
327 |           verifyCalls += 1;
328 |           expect(input).toEqual({
329 |             organizationId: 'org_1',
330 |             storeId: 'store_1',
331 |             verificationId: 'ver_queued',
332 |             otp: '123456',
333 |           });
334 |           return { verified: true };
335 |         },
336 |       },
337 |     });
338 |     const response = await app.request('/v1/verifications/otp/verify', {
339 |       method: 'POST',
340 |       headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
341 |       body: JSON.stringify({ verification_id: 'ver_queued', otp: '123456' }),
342 |     });
343 |     expect(response.status).toBe(200);
344 |     expect(verifyCalls).toBe(1);
345 |   });
346 |
347 |   it('records outcomes idempotently', async () => {
348 |     const app = createTestApp();
349 |     const body = {
350 |       external_order_id: 'WC-1001',
351 |       outcome: 'delivered',
352 |       occurred_at: '2026-07-16T10:30:00.000Z',
353 |     };
354 |     const first = await app.request('/v1/order-outcomes', {
355 |       method: 'POST',
356 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
357 |       body: JSON.stringify(body),
358 |     });
359 |     const second = await app.request('/v1/order-outcomes', {
360 |       method: 'POST',
361 |       headers: { ...authorizedHeaders, 'Idempotency-Key': 'outcome-1001' },
362 |       body: JSON.stringify(body),
363 |     });
364 |     expect(first.status).toBe(201);
365 |     expect(second.status).toBe(200);
366 |     const firstBody = (await first.json()) as { outcome_id: string };
367 |     const secondBody = (await second.json()) as { outcome_id: string; replay: boolean };
368 |     expect(secondBody).toMatchObject({ outcome_id: firstBody.outcome_id, replay: true });
369 |   });
370 | });
371 |
```

### apps/api/src/index.ts

Bytes: 37190
SHA-256: e3b572aed9d2aa4963abd4a538b90425b3cbcb2d846d71f09321234dd6f64c4b
Lines: 1-1121 of 1121

```typescript
   1 | import { randomUUID } from 'node:crypto';
   2 | import { Hono } from 'hono';
   3 | import { z } from 'zod';
   4 | import type { PlanCode, UsageLedger } from '@ozzyl/billing';
   5 | import { createStructuredLogger, type StructuredLogger } from '@ozzyl/observability';
   6 | import {
   7 |   assessRisk,
   8 |   isValidBangladeshPhone,
   9 |   normalizeBangladeshPhone,
  10 |   type CourierFeatures,
  11 |   type MerchantFeatures,
  12 |   type NetworkFeatures,
  13 |   type RiskPolicy,
  14 |   type VelocityFeatures,
  15 |   type VerificationFeatures,
  16 | } from '@ozzyl/risk-engine';
  17 | import {
  18 |   nativeShadowAttemptInputSchema,
  19 |   nativeShadowAttemptResponseSchema,
  20 |   nativeShadowComparisonInputSchema,
  21 |   nativeShadowComparisonResponseSchema,
  22 |   nativeShadowRolloutResponseSchema,
  23 |   orderOutcomeSchema,
  24 |   riskAssessmentRequestSchema,
  25 |   riskAssessmentResponseSchema,
  26 |   type NativeShadowAttemptInput,
  27 |   type NativeShadowComparisonInput,
  28 |   type NativeShadowRolloutMode,
  29 |   type OrderOutcomeInput,
  30 |   type RiskAssessmentRequest,
  31 |   type RiskAssessmentResponse,
  32 | } from '@ozzyl/shared-types';
  33 | import { VerificationError } from '@ozzyl/verification';
  34 | import { createBrowserApi, type BrowserApiDependencies } from './browser.js';
  35 |
  36 | export * from './postgres-administration.js';
  37 | export * from './postgres-native-shadow-pilot.js';
  38 | export * from './postgres-shadow-comparisons.js';
  39 |
  40 | export interface ApiKeyIdentity {
  41 |   apiKeyId: string;
  42 |   organizationId: string;
  43 |   storeId: string;
  44 |   environment: 'test' | 'live';
  45 |   plan: PlanCode;
  46 |   scopes: ReadonlySet<string>;
  47 | }
  48 |
  49 | export interface ApiKeyResolver {
  50 |   resolve(rawApiKey: string): Promise<ApiKeyIdentity | null>;
  51 | }
  52 |
  53 | export interface AssessmentFeatureSet {
  54 |   courier: CourierFeatures;
  55 |   merchant: MerchantFeatures;
  56 |   velocity: VelocityFeatures;
  57 |   verification: VerificationFeatures;
  58 |   network: NetworkFeatures;
  59 |   policy?: RiskPolicy;
  60 | }
  61 |
  62 | export interface AssessmentFeatureProvider {
  63 |   load(input: {
  64 |     identity: ApiKeyIdentity;
  65 |     phone: string;
  66 |     phoneHash: string;
  67 |     request: RiskAssessmentRequest;
  68 |   }): Promise<AssessmentFeatureSet>;
  69 | }
  70 |
  71 | export interface StoredAssessment {
  72 |   identity: Pick<ApiKeyIdentity, 'apiKeyId' | 'organizationId' | 'storeId'>;
  73 |   idempotencyKey: string;
  74 |   phoneHash: string;
  75 |   request: RiskAssessmentRequest;
  76 |   response: RiskAssessmentResponse;
  77 | }
  78 |
  79 | export interface AssessmentRepository {
  80 |   findByIdempotency(input: {
  81 |     organizationId: string;
  82 |     storeId: string;
  83 |     idempotencyKey: string;
  84 |   }): Promise<StoredAssessment | null>;
  85 |   findById(input: {
  86 |     organizationId: string;
  87 |     storeId: string;
  88 |     assessmentId: string;
  89 |   }): Promise<StoredAssessment | null>;
  90 |   save(record: StoredAssessment): Promise<StoredAssessment>;
  91 | }
  92 |
  93 | export interface OutcomeRepository {
  94 |   save(input: {
  95 |     organizationId: string;
  96 |     storeId: string;
  97 |     idempotencyKey: string;
  98 |     outcome: OrderOutcomeInput;
  99 |   }): Promise<{ outcomeId: string; replay: boolean }>;
 100 | }
 101 |
 102 | export interface ShadowComparisonRepository {
 103 |   save(input: {
 104 |     organizationId: string;
 105 |     storeId: string;
 106 |     apiKeyId: string;
 107 |     idempotencyKey: string;
 108 |     comparison: NativeShadowComparisonInput;
 109 |     guardAssessment: RiskAssessmentResponse;
 110 |   }): Promise<{ comparisonId: string; replay: boolean }>;
 111 | }
 112 |
 113 | export interface NativeShadowRolloutRepository {
 114 |   load(input: { organizationId: string; storeId: string }): Promise<{
 115 |     organizationId: string;
 116 |     storeId: string;
 117 |     integration: 'multi-store-saas';
 118 |     mode: NativeShadowRolloutMode;
 119 |     rolloutVersion: string;
 120 |     sampleRateBps: number;
 121 |     samplingKey: string;
 122 |   } | null>;
 123 | }
 124 |
 125 | export interface NativeShadowRolloutAdministrationRepository {
 126 |   setForStore(input: {
 127 |     userId: string;
 128 |     organizationId: string;
 129 |     storeId: string;
 130 |     mode: NativeShadowRolloutMode;
 131 |     rolloutVersion: string;
 132 |     sampleRateBps: number;
 133 |   }): Promise<{
 134 |     organizationId: string;
 135 |     storeId: string;
 136 |     integration: 'multi-store-saas';
 137 |     mode: NativeShadowRolloutMode;
 138 |     rolloutVersion: string;
 139 |     sampleRateBps: number;
 140 |     samplingKey: string;
 141 |   } | null>;
 142 | }
 143 |
 144 | export interface NativeShadowAttemptRepository {
 145 |   save(input: {
 146 |     organizationId: string;
 147 |     storeId: string;
 148 |     apiKeyId: string;
 149 |     idempotencyKey: string;
 150 |     attempt: NativeShadowAttemptInput;
 151 |   }): Promise<{ attemptId: string; replay: boolean }>;
 152 | }
 153 |
 154 | export interface CourierRefreshQueue {
 155 |   enqueue(input: {
 156 |     organizationId: string;
 157 |     storeId: string;
 158 |     phone: string;
 159 |     phoneHash: string;
 160 |     providers: string[];
 161 |     force: boolean;
 162 |   }): Promise<{ jobId: string }>;
 163 | }
 164 |
 165 | export interface VerificationRequestQueue {
 166 |   enqueueSend(input: {
 167 |     organizationId: string;
 168 |     storeId: string;
 169 |     assessmentId?: string;
 170 |     phone: string;
 171 |     phoneHash: string;
 172 |     purpose: string;
 173 |     idempotencyKey: string;
 174 |   }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
 175 | }
 176 |
 177 | export interface OtpVerifier {
 178 |   verify(input: {
 179 |     organizationId: string;
 180 |     storeId: string;
 181 |     verificationId: string;
 182 |     otp: string;
 183 |   }): Promise<{ verified: true }>;
 184 | }
 185 |
 186 | export interface OperationIdempotencyStore {
 187 |   get(key: string): Promise<unknown>;
 188 |   set(key: string, value: unknown): Promise<void>;
 189 | }
 190 |
 191 | export interface RateLimiter {
 192 |   consume(key: string, limit: number, windowMs: number): Promise<boolean>;
 193 | }
 194 |
 195 | export interface ApiDependencies {
 196 |   apiKeys: ApiKeyResolver;
 197 |   usage: UsageLedger;
 198 |   features: AssessmentFeatureProvider;
 199 |   assessments: AssessmentRepository;
 200 |   outcomes: OutcomeRepository;
 201 |   shadowComparisons?: ShadowComparisonRepository;
 202 |   nativeShadowRollouts?: NativeShadowRolloutRepository;
 203 |   nativeShadowAttempts?: NativeShadowAttemptRepository;
 204 |   refreshQueue: CourierRefreshQueue;
 205 |   idempotency: OperationIdempotencyStore;
 206 |   rateLimiter: RateLimiter;
 207 |   hashPhone(phone: string): string;
 208 |   verificationRequests?: VerificationRequestQueue;
 209 |   otpVerifier?: OtpVerifier;
 210 |   browser?: BrowserApiDependencies;
 211 |   now?: () => Date;
 212 |   monotonicNow?: () => number;
 213 |   idFactory?: (prefix: string) => string;
 214 |   logger?: StructuredLogger;
 215 | }
 216 |
 217 | type AppEnvironment = {
 218 |   Variables: {
 219 |     identity: ApiKeyIdentity;
 220 |     requestId: string;
 221 |   };
 222 | };
 223 |
 224 | const refreshSchema = z.object({
 225 |   phone: z.string().min(8).max(30),
 226 |   providers: z.array(z.string().min(1).max(50)).min(1).max(10).default(['steadfast']),
 227 |   force: z.boolean().default(false),
 228 | });
 229 |
 230 | const otpSendSchema = z.object({
 231 |   phone: z.string().min(8).max(30),
 232 |   assessment_id: z.string().max(200).optional(),
 233 |   purpose: z.string().min(1).max(100).default('cod_order_confirmation'),
 234 | });
 235 |
 236 | const otpVerifySchema = z.object({
 237 |   verification_id: z.string().min(1).max(200),
 238 |   otp: z.string().regex(/^\d{6}$/),
 239 | });
 240 |
 241 | export function createApiApp(dependencies: ApiDependencies): Hono<AppEnvironment> {
 242 |   const app = new Hono<AppEnvironment>();
 243 |   const now = dependencies.now ?? (() => new Date());
 244 |   const monotonicNow = dependencies.monotonicNow ?? (() => Date.now());
 245 |   const idFactory = dependencies.idFactory ?? ((prefix: string) => `${prefix}_${randomUUID()}`);
 246 |   const logger =
 247 |     dependencies.logger ??
 248 |     createStructuredLogger({
 249 |       service: 'ozzyl-guard-api',
 250 |       environment: 'test',
 251 |       write: () => undefined,
 252 |     });
 253 |
 254 |   app.use('*', async (context, next) => {
 255 |     const requestId = readRequestId(context.req.header('X-Request-ID')) ?? idFactory('req');
 256 |     const startedAt = monotonicNow();
 257 |     let failed = false;
 258 |     context.set('requestId', requestId);
 259 |
 260 |     try {
 261 |       await next();
 262 |     } catch (error) {
 263 |       failed = true;
 264 |       throw error;
 265 |     } finally {
 266 |       const status = failed ? 500 : context.res.status;
 267 |       const durationMs = Math.max(0, monotonicNow() - startedAt);
 268 |       const attributes = {
 269 |         request_id: requestId,
 270 |         method: context.req.method,
 271 |         route: telemetryRoute(context.req.path),
 272 |         status_code: status,
 273 |         status_class: `${Math.floor(status / 100)}xx`,
 274 |         duration_ms: Math.round(durationMs * 1_000) / 1_000,
 275 |       };
 276 |
 277 |       context.header('X-Request-ID', requestId);
 278 |       if (status >= 500) logger.error('api.request.completed', attributes);
 279 |       else if (status >= 400) logger.warn('api.request.completed', attributes);
 280 |       else logger.info('api.request.completed', attributes);
 281 |     }
 282 |   });
 283 |
 284 |   app.get('/', (context) =>
 285 |     context.json({
 286 |       service: 'Ozzyl Guard',
 287 |       version: 'v1',
 288 |       endpoints: {
 289 |         assessments: 'POST /v1/risk-assessments',
 290 |         outcomes: 'POST /v1/order-outcomes',
 291 |         nativeShadowRollout: 'GET /v1/integration-rollouts/native-shadow',
 292 |         nativeShadowComparisons: 'POST /v1/integration-comparisons/native-shadow',
 293 |         nativeShadowAttempts: 'POST /v1/integration-attempts/native-shadow',
 294 |         refresh: 'POST /v1/courier-observations/refresh',
 295 |         otpSend: 'POST /v1/verifications/otp/send',
 296 |         otpVerify: 'POST /v1/verifications/otp/verify',
 297 |       },
 298 |     }),
 299 |   );
 300 |
 301 |   app.get('/health', (context) =>
 302 |     context.json({ status: 'ok', service: 'ozzyl-guard-api', timestamp: now().toISOString() }),
 303 |   );
 304 |
 305 |   if (dependencies.browser) app.route('/', createBrowserApi(dependencies.browser));
 306 |
 307 |   app.use('/v1/*', async (context, next) => {
 308 |     const requestId = context.get('requestId');
 309 |     const authorization = context.req.header('Authorization');
 310 |     if (!authorization?.startsWith('Bearer ')) {
 311 |       return apiError(requestId, 401, 'UNAUTHORIZED', 'A Bearer API key is required');
 312 |     }
 313 |     const rawApiKey = authorization.slice('Bearer '.length).trim();
 314 |     if (!/^ozg_(test|live)_/.test(rawApiKey)) {
 315 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key format is invalid');
 316 |     }
 317 |     const identity = await dependencies.apiKeys.resolve(rawApiKey);
 318 |     if (!identity) {
 319 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key is invalid or revoked');
 320 |     }
 321 |     const allowed = await dependencies.rateLimiter.consume(`api:${identity.apiKeyId}`, 120, 60_000);
 322 |     if (!allowed) {
 323 |       return apiError(requestId, 429, 'RATE_LIMITED', 'Too many requests');
 324 |     }
 325 |     context.set('identity', identity);
 326 |     await next();
 327 |     context.header('X-Request-ID', requestId);
 328 |   });
 329 |
 330 |   app.post('/v1/risk-assessments', async (context) => {
 331 |     const requestId = context.get('requestId');
 332 |     const identity = context.get('identity');
 333 |     const scopeError = requireScope(identity, 'risk:write', requestId);
 334 |     if (scopeError) return scopeError;
 335 |
 336 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 337 |     if (!idempotencyKey) {
 338 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 339 |     }
 340 |
 341 |     const existing = await dependencies.assessments.findByIdempotency({
 342 |       organizationId: identity.organizationId,
 343 |       storeId: identity.storeId,
 344 |       idempotencyKey,
 345 |     });
 346 |     if (existing) return context.json(existing.response, 200);
 347 |
 348 |     const parsedBody = await parseJson(context.req.raw, riskAssessmentRequestSchema);
 349 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 350 |     const request = parsedBody.value;
 351 |     const phone = normalizeBangladeshPhone(request.phone);
 352 |     if (!isValidBangladeshPhone(phone)) {
 353 |       return apiError(
 354 |         requestId,
 355 |         400,
 356 |         'INVALID_PHONE',
 357 |         'A valid Bangladesh mobile number is required',
 358 |       );
 359 |     }
 360 |
 361 |     try {
 362 |       await dependencies.usage.reserve({
 363 |         organizationId: identity.organizationId,
 364 |         period: billingPeriod(now()),
 365 |         requestId: idempotencyKey,
 366 |         units: 1,
 367 |         plan: identity.plan,
 368 |       });
 369 |     } catch (error) {
 370 |       return apiError(
 371 |         requestId,
 372 |         429,
 373 |         'USAGE_LIMIT_EXCEEDED',
 374 |         error instanceof Error ? error.message : 'Usage limit exceeded',
 375 |       );
 376 |     }
 377 |
 378 |     const startedAt = Date.now();
 379 |     const phoneHash = dependencies.hashPhone(phone);
 380 |     const features = await dependencies.features.load({ identity, phone, phoneHash, request });
 381 |     const order = {
 382 |       total: request.order_total,
 383 |       paymentMethod: request.payment_method,
 384 |       ...(request.items_count === undefined ? {} : { itemsCount: request.items_count }),
 385 |     };
 386 |     const engineInput = {
 387 |       order,
 388 |       courier: features.courier,
 389 |       merchant: features.merchant,
 390 |       velocity: features.velocity,
 391 |       verification: features.verification,
 392 |       network: features.network,
 393 |       ...(features.policy === undefined ? {} : { policy: features.policy }),
 394 |     };
 395 |     const result = assessRisk(engineInput);
 396 |     const response = riskAssessmentResponseSchema.parse({
 397 |       success: true,
 398 |       assessment_id: idFactory('ras'),
 399 |       risk_score: result.score,
 400 |       risk_level: result.riskLevel,
 401 |       decision: result.decision,
 402 |       confidence: result.confidence,
 403 |       signals: result.signals,
 404 |       courier_summary: {
 405 |         freshness: features.courier.freshness,
 406 |         providers: features.courier.providerCount,
 407 |         total: features.courier.totalOrders,
 408 |         delivered: features.courier.deliveredOrders,
 409 |         returned: features.courier.returnedOrders,
 410 |         cancelled_before_shipping: features.courier.cancelledBeforeShipping,
 411 |       },
 412 |       recommended_actions: result.recommendedActions,
 413 |       meta: {
 414 |         engine_version: result.engineVersion,
 415 |         policy_version: result.policyVersion,
 416 |         degraded: result.degraded,
 417 |         response_ms: Date.now() - startedAt,
 418 |       },
 419 |     });
 420 |
 421 |     const stored = await dependencies.assessments.save({
 422 |       identity: {
 423 |         apiKeyId: identity.apiKeyId,
 424 |         organizationId: identity.organizationId,
 425 |         storeId: identity.storeId,
 426 |       },
 427 |       idempotencyKey,
 428 |       phoneHash,
 429 |       request,
 430 |       response,
 431 |     });
 432 |     return context.json(
 433 |       stored.response,
 434 |       stored.response.assessment_id === response.assessment_id ? 201 : 200,
 435 |     );
 436 |   });
 437 |
 438 |   app.get('/v1/risk-assessments/:assessmentId', async (context) => {
 439 |     const requestId = context.get('requestId');
 440 |     const identity = context.get('identity');
 441 |     const scopeError = requireScope(identity, 'risk:read', requestId);
 442 |     if (scopeError) return scopeError;
 443 |     const record = await dependencies.assessments.findById({
 444 |       organizationId: identity.organizationId,
 445 |       storeId: identity.storeId,
 446 |       assessmentId: context.req.param('assessmentId'),
 447 |     });
 448 |     if (!record) return apiError(requestId, 404, 'ASSESSMENT_NOT_FOUND', 'Assessment not found');
 449 |     return context.json(record.response);
 450 |   });
 451 |
 452 |   app.post('/v1/order-outcomes', async (context) => {
 453 |     const requestId = context.get('requestId');
 454 |     const identity = context.get('identity');
 455 |     const scopeError = requireScope(identity, 'outcomes:write', requestId);
 456 |     if (scopeError) return scopeError;
 457 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 458 |     if (!idempotencyKey) {
 459 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 460 |     }
 461 |     const parsedBody = await parseJson(context.req.raw, orderOutcomeSchema);
 462 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 463 |     if (parsedBody.value.assessment_id) {
 464 |       const assessment = await dependencies.assessments.findById({
 465 |         organizationId: identity.organizationId,
 466 |         storeId: identity.storeId,
 467 |         assessmentId: parsedBody.value.assessment_id,
 468 |       });
 469 |       if (!assessment) {
 470 |         return apiError(
 471 |           requestId,
 472 |           400,
 473 |           'ASSESSMENT_NOT_FOUND',
 474 |           'Assessment not found for this store',
 475 |         );
 476 |       }
 477 |     }
 478 |     const saved = await dependencies.outcomes.save({
 479 |       organizationId: identity.organizationId,
 480 |       storeId: identity.storeId,
 481 |       idempotencyKey,
 482 |       outcome: parsedBody.value,
 483 |     });
 484 |     return context.json(
 485 |       { success: true as const, outcome_id: saved.outcomeId, replay: saved.replay },
 486 |       saved.replay ? 200 : 201,
 487 |     );
 488 |   });
 489 |
 490 |   app.get('/v1/integration-rollouts/native-shadow', async (context) => {
 491 |     const requestId = context.get('requestId');
 492 |     const identity = context.get('identity');
 493 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 494 |     if (scopeError) return scopeError;
 495 |     if (!dependencies.nativeShadowRollouts) {
 496 |       return apiError(
 497 |         requestId,
 498 |         503,
 499 |         'NATIVE_SHADOW_ROLLOUT_UNAVAILABLE',
 500 |         'Native shadow rollout configuration is not available',
 501 |       );
 502 |     }
 503 |     const rollout = await dependencies.nativeShadowRollouts.load({
 504 |       organizationId: identity.organizationId,
 505 |       storeId: identity.storeId,
 506 |     });
 507 |     if (!rollout) {
 508 |       return apiError(requestId, 400, 'TENANT_SCOPE_MISMATCH', 'Store scope is not active');
 509 |     }
 510 |     return context.json(
 511 |       nativeShadowRolloutResponseSchema.parse({
 512 |         success: true,
 513 |         organization_id: rollout.organizationId,
 514 |         store_id: rollout.storeId,
 515 |         integration: rollout.integration,
 516 |         mode: rollout.mode,
 517 |         rollout_version: rollout.rolloutVersion,
 518 |         sample_rate_bps: rollout.sampleRateBps,
 519 |         sampling_key: rollout.samplingKey,
 520 |       }),
 521 |     );
 522 |   });
 523 |
 524 |   app.post('/v1/integration-comparisons/native-shadow', async (context) => {
 525 |     const requestId = context.get('requestId');
 526 |     const identity = context.get('identity');
 527 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 528 |     if (scopeError) return scopeError;
 529 |     if (!dependencies.shadowComparisons) {
 530 |       return apiError(
 531 |         requestId,
 532 |         503,
 533 |         'SHADOW_COMPARISON_UNAVAILABLE',
 534 |         'Native shadow comparison persistence is not configured',
 535 |       );
 536 |     }
 537 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 538 |     if (!idempotencyKey) {
 539 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 540 |     }
 541 |     const parsedBody = await parseJson(context.req.raw, nativeShadowComparisonInputSchema);
 542 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 543 |     const assessment = await dependencies.assessments.findById({
 544 |       organizationId: identity.organizationId,
 545 |       storeId: identity.storeId,
 546 |       assessmentId: parsedBody.value.assessment_id,
 547 |     });
 548 |     if (!assessment) {
 549 |       return apiError(
 550 |         requestId,
 551 |         400,
 552 |         'ASSESSMENT_NOT_FOUND',
 553 |         'Assessment not found for this store',
 554 |       );
 555 |     }
 556 |     if (assessment.request.external_order_id !== parsedBody.value.external_order_id) {
 557 |       return apiError(
 558 |         requestId,
 559 |         400,
 560 |         'ASSESSMENT_ORDER_MISMATCH',
 561 |         'Assessment does not belong to the supplied external order',
 562 |       );
 563 |     }
 564 |     try {
 565 |       const saved = await dependencies.shadowComparisons.save({
 566 |         organizationId: identity.organizationId,
 567 |         storeId: identity.storeId,
 568 |         apiKeyId: identity.apiKeyId,
 569 |         idempotencyKey,
 570 |         comparison: parsedBody.value,
 571 |         guardAssessment: assessment.response,
 572 |       });
 573 |       const response = nativeShadowComparisonResponseSchema.parse({
 574 |         success: true,
 575 |         comparison_id: saved.comparisonId,
 576 |         replay: saved.replay,
 577 |       });
 578 |       return context.json(response, saved.replay ? 200 : 201);
 579 |     } catch (error) {
 580 |       const code =
 581 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 582 |           ? error.code
 583 |           : 'SHADOW_COMPARISON_UNAVAILABLE';
 584 |       const status =
 585 |         code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT'
 586 |           ? 409
 587 |           : code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
 588 |               code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
 589 |               code === 'TENANT_SCOPE_MISMATCH'
 590 |             ? 400
 591 |             : 503;
 592 |       return apiError(
 593 |         requestId,
 594 |         status,
 595 |         code,
 596 |         status === 503
 597 |           ? 'Native shadow comparison could not be persisted'
 598 |           : 'Native shadow comparison was rejected',
 599 |       );
 600 |     }
 601 |   });
 602 |
 603 |   app.post('/v1/integration-attempts/native-shadow', async (context) => {
 604 |     const requestId = context.get('requestId');
 605 |     const identity = context.get('identity');
 606 |     const scopeError = requireScope(identity, 'comparisons:write', requestId);
 607 |     if (scopeError) return scopeError;
 608 |     if (!dependencies.nativeShadowAttempts) {
 609 |       return apiError(
 610 |         requestId,
 611 |         503,
 612 |         'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE',
 613 |         'Native shadow attempt persistence is not configured',
 614 |       );
 615 |     }
 616 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 617 |     if (!idempotencyKey) {
 618 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 619 |     }
 620 |     const parsedBody = await parseJson(context.req.raw, nativeShadowAttemptInputSchema);
 621 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 622 |     try {
 623 |       const saved = await dependencies.nativeShadowAttempts.save({
 624 |         organizationId: identity.organizationId,
 625 |         storeId: identity.storeId,
 626 |         apiKeyId: identity.apiKeyId,
 627 |         idempotencyKey,
 628 |         attempt: parsedBody.value,
 629 |       });
 630 |       return context.json(
 631 |         nativeShadowAttemptResponseSchema.parse({
 632 |           success: true,
 633 |           attempt_id: saved.attemptId,
 634 |           replay: saved.replay,
 635 |         }),
 636 |         saved.replay ? 200 : 201,
 637 |       );
 638 |     } catch (error) {
 639 |       const code =
 640 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 641 |           ? error.code
 642 |           : 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE';
 643 |       const status =
 644 |         code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT'
 645 |           ? 409
 646 |           : code === 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE'
 647 |             ? 503
 648 |             : 400;
 649 |       return apiError(
 650 |         requestId,
 651 |         status,
 652 |         code,
 653 |         status === 503
 654 |           ? 'Native shadow attempt could not be persisted'
 655 |           : 'Native shadow attempt was rejected',
 656 |       );
 657 |     }
 658 |   });
 659 |
 660 |   app.post('/v1/courier-observations/refresh', async (context) => {
 661 |     const requestId = context.get('requestId');
 662 |     const identity = context.get('identity');
 663 |     const scopeError = requireScope(identity, 'courier:refresh', requestId);
 664 |     if (scopeError) return scopeError;
 665 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 666 |     if (!idempotencyKey) {
 667 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 668 |     }
 669 |     const operationKey = operationIdempotencyKey(identity, 'courier-refresh', idempotencyKey);
 670 |     const existing = await dependencies.idempotency.get(operationKey);
 671 |     if (existing) return context.json(existing, 200);
 672 |     const parsedBody = await parseJson(context.req.raw, refreshSchema);
 673 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 674 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 675 |     if (!isValidBangladeshPhone(phone)) {
 676 |       return apiError(
 677 |         requestId,
 678 |         400,
 679 |         'INVALID_PHONE',
 680 |         'A valid Bangladesh mobile number is required',
 681 |       );
 682 |     }
 683 |     let queued: { jobId: string };
 684 |     try {
 685 |       queued = await dependencies.refreshQueue.enqueue({
 686 |         organizationId: identity.organizationId,
 687 |         storeId: identity.storeId,
 688 |         phone,
 689 |         phoneHash: dependencies.hashPhone(phone),
 690 |         providers: parsedBody.value.providers,
 691 |         force: parsedBody.value.force,
 692 |       });
 693 |     } catch (error) {
 694 |       const code =
 695 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 696 |           ? error.code
 697 |           : 'COURIER_REFRESH_UNAVAILABLE';
 698 |       return apiError(
 699 |         requestId,
 700 |         code === 'COURIER_CONNECTION_REQUIRED' ? 409 : 503,
 701 |         code,
 702 |         error instanceof Error ? error.message : 'Courier refresh could not be queued',
 703 |       );
 704 |     }
 705 |     const response = { success: true as const, job_id: queued.jobId, status: 'queued' as const };
 706 |     await dependencies.idempotency.set(operationKey, response);
 707 |     return context.json(response, 202);
 708 |   });
 709 |
 710 |   app.post('/v1/verifications/otp/send', async (context) => {
 711 |     const requestId = context.get('requestId');
 712 |     const identity = context.get('identity');
 713 |     const scopeError = requireScope(identity, 'verification:write', requestId);
 714 |     if (scopeError) return scopeError;
 715 |     if (!dependencies.verificationRequests) {
 716 |       return apiError(
 717 |         requestId,
 718 |         503,
 719 |         'VERIFICATION_UNAVAILABLE',
 720 |         'OTP verification is not configured',
 721 |       );
 722 |     }
 723 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 724 |     if (!idempotencyKey) {
 725 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 726 |     }
 727 |     const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
 728 |     const existing = await dependencies.idempotency.get(operationKey);
 729 |     if (existing) return context.json(existing, 200);
 730 |     const parsedBody = await parseJson(context.req.raw, otpSendSchema);
 731 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 732 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 733 |     if (!isValidBangladeshPhone(phone)) {
 734 |       return apiError(
 735 |         requestId,
 736 |         400,
 737 |         'INVALID_PHONE',
 738 |         'A valid Bangladesh mobile number is required',
 739 |       );
 740 |     }
 741 |     try {
 742 |       const queued = await dependencies.verificationRequests.enqueueSend({
 743 |         organizationId: identity.organizationId,
 744 |         storeId: identity.storeId,
 745 |         ...(parsedBody.value.assessment_id === undefined
 746 |           ? {}
 747 |           : { assessmentId: parsedBody.value.assessment_id }),
 748 |         phone,
 749 |         phoneHash: dependencies.hashPhone(phone),
 750 |         purpose: parsedBody.value.purpose,
 751 |         idempotencyKey,
 752 |       });
 753 |       const response = {
 754 |         success: true as const,
 755 |         verification_id: queued.verificationId,
 756 |         expires_at: queued.expiresAt,
 757 |         status: 'queued' as const,
 758 |       };
 759 |       await dependencies.idempotency.set(operationKey, response);
 760 |       return context.json(response, queued.replay ? 200 : 202);
 761 |     } catch (error) {
 762 |       return verificationApiError(requestId, error);
 763 |     }
 764 |   });
 765 |
 766 |   app.post('/v1/verifications/otp/verify', async (context) => {
 767 |     const requestId = context.get('requestId');
 768 |     const identity = context.get('identity');
 769 |     const scopeError = requireScope(identity, 'verification:write', requestId);
 770 |     if (scopeError) return scopeError;
 771 |     if (!dependencies.otpVerifier) {
 772 |       return apiError(
 773 |         requestId,
 774 |         503,
 775 |         'VERIFICATION_UNAVAILABLE',
 776 |         'OTP verification is not configured',
 777 |       );
 778 |     }
 779 |     const parsedBody = await parseJson(context.req.raw, otpVerifySchema);
 780 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 781 |     try {
 782 |       await dependencies.otpVerifier.verify({
 783 |         organizationId: identity.organizationId,
 784 |         storeId: identity.storeId,
 785 |         verificationId: parsedBody.value.verification_id,
 786 |         otp: parsedBody.value.otp,
 787 |       });
 788 |       return context.json({ success: true as const, verified: true as const });
 789 |     } catch (error) {
 790 |       return verificationApiError(requestId, error);
 791 |     }
 792 |   });
 793 |
 794 |   app.notFound((context) => {
 795 |     const requestId = context.get('requestId') || idFactory('req');
 796 |     return apiError(requestId, 404, 'NOT_FOUND', 'Route not found');
 797 |   });
 798 |
 799 |   app.onError((error, context) => {
 800 |     const requestId = context.get('requestId') || idFactory('req');
 801 |     logger.error('api.request.unhandled_error', {
 802 |       request_id: requestId,
 803 |       method: context.req.method,
 804 |       route: telemetryRoute(context.req.path),
 805 |       code: 'UNHANDLED_ERROR',
 806 |       error,
 807 |     });
 808 |     return apiError(
 809 |       requestId,
 810 |       500,
 811 |       'INTERNAL_ERROR',
 812 |       error instanceof Error ? 'The request could not be completed' : 'Internal error',
 813 |     );
 814 |   });
 815 |
 816 |   return app;
 817 | }
 818 |
 819 | const STATIC_TELEMETRY_ROUTES = new Set([
 820 |   '/',
 821 |   '/health',
 822 |   '/auth/login',
 823 |   '/auth/session',
 824 |   '/auth/logout',
 825 |   '/dashboard/v1/overview',
 826 |   '/dashboard/v1/native-shadow-rollout',
 827 |   '/dashboard/v1/dead-letters',
 828 |   '/dashboard/v1/dead-letter-replays',
 829 |   '/admin/v1/overview',
 830 |   '/v1/risk-assessments',
 831 |   '/v1/order-outcomes',
 832 |   '/v1/integration-rollouts/native-shadow',
 833 |   '/v1/integration-comparisons/native-shadow',
 834 |   '/v1/integration-attempts/native-shadow',
 835 |   '/v1/courier-observations/refresh',
 836 |   '/v1/verifications/otp/send',
 837 |   '/v1/verifications/otp/verify',
 838 | ]);
 839 |
 840 | function telemetryRoute(path: string): string {
 841 |   if (STATIC_TELEMETRY_ROUTES.has(path)) return path;
 842 |   if (/^\/v1\/risk-assessments\/[^/]+$/.test(path)) {
 843 |     return '/v1/risk-assessments/:assessment_id';
 844 |   }
 845 |   return 'unmatched';
 846 | }
 847 |
 848 | function readRequestId(value: string | undefined): string | null {
 849 |   const requestId = value?.trim();
 850 |   if (!requestId || requestId.length > 100) return null;
 851 |   if (/^req_[A-Za-z0-9-]{1,80}$/.test(requestId)) return requestId;
 852 |   if (/^[a-f0-9]{16,32}$/i.test(requestId)) return requestId;
 853 |   if (
 854 |     /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(requestId)
 855 |   ) {
 856 |     return requestId;
 857 |   }
 858 |   return null;
 859 | }
 860 |
 861 | export class MemoryAssessmentRepository implements AssessmentRepository {
 862 |   private readonly byId = new Map<string, StoredAssessment>();
 863 |   private readonly byIdempotency = new Map<string, StoredAssessment>();
 864 |
 865 |   async findByIdempotency(input: {
 866 |     organizationId: string;
 867 |     storeId: string;
 868 |     idempotencyKey: string;
 869 |   }): Promise<StoredAssessment | null> {
 870 |     return (
 871 |       this.byIdempotency.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`) ??
 872 |       null
 873 |     );
 874 |   }
 875 |
 876 |   async findById(input: {
 877 |     organizationId: string;
 878 |     storeId: string;
 879 |     assessmentId: string;
 880 |   }): Promise<StoredAssessment | null> {
 881 |     const record = this.byId.get(input.assessmentId);
 882 |     if (
 883 |       !record ||
 884 |       record.identity.organizationId !== input.organizationId ||
 885 |       record.identity.storeId !== input.storeId
 886 |     ) {
 887 |       return null;
 888 |     }
 889 |     return record;
 890 |   }
 891 |
 892 |   async save(record: StoredAssessment): Promise<StoredAssessment> {
 893 |     const key = `${record.identity.organizationId}:${record.identity.storeId}:${record.idempotencyKey}`;
 894 |     const existing = this.byIdempotency.get(key);
 895 |     if (existing) return existing;
 896 |     this.byId.set(record.response.assessment_id, record);
 897 |     this.byIdempotency.set(key, record);
 898 |     return record;
 899 |   }
 900 | }
 901 |
 902 | export class MemoryOutcomeRepository implements OutcomeRepository {
 903 |   private readonly outcomes = new Map<string, string>();
 904 |
 905 |   async save(input: {
 906 |     organizationId: string;
 907 |     storeId: string;
 908 |     idempotencyKey: string;
 909 |     outcome: OrderOutcomeInput;
 910 |   }): Promise<{ outcomeId: string; replay: boolean }> {
 911 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
 912 |     const existing = this.outcomes.get(key);
 913 |     if (existing) return { outcomeId: existing, replay: true };
 914 |     const outcomeId = `out_${randomUUID()}`;
 915 |     this.outcomes.set(key, outcomeId);
 916 |     return { outcomeId, replay: false };
 917 |   }
 918 | }
 919 |
 920 | export class MemoryShadowComparisonRepository implements ShadowComparisonRepository {
 921 |   private readonly records = new Map<
 922 |     string,
 923 |     {
 924 |       comparisonId: string;
 925 |       comparison: NativeShadowComparisonInput;
 926 |       guardAssessment: RiskAssessmentResponse;
 927 |     }
 928 |   >();
 929 |
 930 |   async save(input: {
 931 |     organizationId: string;
 932 |     storeId: string;
 933 |     apiKeyId: string;
 934 |     idempotencyKey: string;
 935 |     comparison: NativeShadowComparisonInput;
 936 |     guardAssessment: RiskAssessmentResponse;
 937 |   }): Promise<{ comparisonId: string; replay: boolean }> {
 938 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
 939 |     const existing = this.records.get(key);
 940 |     if (existing) {
 941 |       if (
 942 |         JSON.stringify(existing.comparison) !== JSON.stringify(input.comparison) ||
 943 |         existing.guardAssessment.assessment_id !== input.guardAssessment.assessment_id
 944 |       ) {
 945 |         const error = new Error('SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') as Error & {
 946 |           code: string;
 947 |         };
 948 |         error.code = 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT';
 949 |         throw error;
 950 |       }
 951 |       return { comparisonId: existing.comparisonId, replay: true };
 952 |     }
 953 |     const comparisonId = `cmp_${randomUUID()}`;
 954 |     this.records.set(key, {
 955 |       comparisonId,
 956 |       comparison: input.comparison,
 957 |       guardAssessment: input.guardAssessment,
 958 |     });
 959 |     return { comparisonId, replay: false };
 960 |   }
 961 |
 962 |   findByIdempotency(input: { organizationId: string; storeId: string; idempotencyKey: string }):
 963 |     | {
 964 |         comparisonId: string;
 965 |         comparison: NativeShadowComparisonInput;
 966 |         guardAssessment: RiskAssessmentResponse;
 967 |       }
 968 |     | undefined {
 969 |     return this.records.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`);
 970 |   }
 971 | }
 972 |
 973 | export class MemoryOperationIdempotencyStore implements OperationIdempotencyStore {
 974 |   private readonly values = new Map<string, unknown>();
 975 |   async get(key: string): Promise<unknown> {
 976 |     return this.values.get(key) ?? null;
 977 |   }
 978 |   async set(key: string, value: unknown): Promise<void> {
 979 |     this.values.set(key, value);
 980 |   }
 981 | }
 982 |
 983 | export class MemoryRateLimiter implements RateLimiter {
 984 |   private readonly windows = new Map<string, { count: number; expiresAt: number }>();
 985 |   async consume(key: string, limit: number, windowMs: number): Promise<boolean> {
 986 |     const currentTime = Date.now();
 987 |     const current = this.windows.get(key);
 988 |     if (!current || current.expiresAt <= currentTime) {
 989 |       this.windows.set(key, { count: 1, expiresAt: currentTime + windowMs });
 990 |       return true;
 991 |     }
 992 |     if (current.count >= limit) return false;
 993 |     current.count += 1;
 994 |     return true;
 995 |   }
 996 | }
 997 |
 998 | export class MemoryRefreshQueue implements CourierRefreshQueue {
 999 |   async enqueue(): Promise<{ jobId: string }> {
1000 |     return { jobId: `cjob_${randomUUID()}` };
1001 |   }
1002 | }
1003 |
1004 | export class MissingFeatureProvider implements AssessmentFeatureProvider {
1005 |   async load(): Promise<AssessmentFeatureSet> {
1006 |     return {
1007 |       courier: {
1008 |         totalOrders: 0,
1009 |         deliveredOrders: 0,
1010 |         returnedOrders: 0,
1011 |         cancelledBeforeShipping: 0,
1012 |         providerCount: 0,
1013 |         freshness: 'missing',
1014 |         sourceConfidence: 0,
1015 |       },
1016 |       merchant: {
1017 |         deliveredOrders: 0,
1018 |         returnedOrders: 0,
1019 |         recentCancelledOrders: 0,
1020 |         previousSuccessfulCustomer: false,
1021 |       },
1022 |       velocity: {
1023 |         phoneOrdersLastHour: 0,
1024 |         devicePhoneCountLastDay: 0,
1025 |         ipCustomerCountLastHour: 0,
1026 |       },
1027 |       verification: { otpVerified: false, otpFailures: 0, phoneUnreachable: false },
1028 |       network: {
1029 |         confirmedNegativeOutcomes: 0,
1030 |         independentReporters: 0,
1031 |         confirmedPositiveOutcomes: 0,
1032 |         activeDispute: false,
1033 |       },
1034 |     };
1035 |   }
1036 | }
1037 |
1038 | function requireScope(identity: ApiKeyIdentity, scope: string, requestId: string): Response | null {
1039 |   if (identity.scopes.has('*') || identity.scopes.has(scope)) return null;
1040 |   return apiError(requestId, 403, 'INSUFFICIENT_SCOPE', `API key requires ${scope} scope`);
1041 | }
1042 |
1043 | function apiError(
1044 |   requestId: string,
1045 |   status: number,
1046 |   code: string,
1047 |   message: string,
1048 |   details?: Record<string, unknown>,
1049 | ): Response {
1050 |   return new Response(
1051 |     JSON.stringify({
1052 |       success: false,
1053 |       error: { code, message, ...(details === undefined ? {} : { details }) },
1054 |       request_id: requestId,
1055 |     }),
1056 |     {
1057 |       status,
1058 |       headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
1059 |     },
1060 |   );
1061 | }
1062 |
1063 | function verificationApiError(requestId: string, error: unknown): Response {
1064 |   if (error instanceof VerificationError) {
1065 |     const status =
1066 |       error.code === 'RATE_LIMITED'
1067 |         ? 429
1068 |         : error.code === 'NOT_FOUND'
1069 |           ? 404
1070 |           : error.code === 'DELIVERY_PENDING' || error.code === 'DELIVERY_FAILED'
1071 |             ? 409
1072 |             : 400;
1073 |     return apiError(requestId, status, error.code, error.message);
1074 |   }
1075 |   return apiError(
1076 |     requestId,
1077 |     503,
1078 |     'VERIFICATION_UNAVAILABLE',
1079 |     'Verification could not be completed',
1080 |   );
1081 | }
1082 |
1083 | async function parseJson<TOutput, TInput>(
1084 |   request: Request,
1085 |   schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
1086 | ): Promise<{ success: true; value: TOutput } | { success: false; message: string }> {
1087 |   try {
1088 |     const raw: unknown = await request.json();
1089 |     const parsed = schema.safeParse(raw);
1090 |     if (!parsed.success) {
1091 |       return {
1092 |         success: false,
1093 |         message: parsed.error.issues
1094 |           .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
1095 |           .join('; '),
1096 |       };
1097 |     }
1098 |     return { success: true, value: parsed.data };
1099 |   } catch {
1100 |     return { success: false, message: 'Request body must be valid JSON' };
1101 |   }
1102 | }
1103 |
1104 | function readIdempotencyKey(value: string | undefined): string | null {
1105 |   const normalized = value?.trim();
1106 |   if (!normalized || normalized.length > 200) return null;
1107 |   return normalized;
1108 | }
1109 |
1110 | function operationIdempotencyKey(
1111 |   identity: ApiKeyIdentity,
1112 |   operation: string,
1113 |   idempotencyKey: string,
1114 | ): string {
1115 |   return `${identity.organizationId}:${identity.storeId}:${operation}:${idempotencyKey}`;
1116 | }
1117 |
1118 | function billingPeriod(date: Date): string {
1119 |   return date.toISOString().slice(0, 7);
1120 | }
1121 |
```

### apps/api/src/server.ts

Bytes: 6700
SHA-256: e692247cb17f8c11d06764a14be3929edf193f2c3164b14fd0e0ca1ce346986c
Lines: 1-195 of 195

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { serve } from '@hono/node-server';
  3 | import { Pool } from 'pg';
  4 | import { verifyApiKey } from '@ozzyl/authentication';
  5 | import { PostgresDurableWorkOperations } from '@ozzyl/database';
  6 | import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
  7 | import { createStructuredLogger } from '@ozzyl/observability';
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
 88 |
 89 | if (productionMode && !databaseUrl) {
 90 |   throw new Error('DATABASE_URL is required in production');
 91 | }
 92 |
 93 | let pool: Pool | undefined;
 94 | let dependencies: ApiDependencies;
 95 |
 96 | if (databaseUrl) {
 97 |   const sessionPepper = required('SESSION_PEPPER');
 98 |   const sessionCsrfSecret = required('SESSION_CSRF_SECRET');
 99 |   const rateLimiter = new MemoryRateLimiter();
100 |   pool = new Pool({
101 |     connectionString: databaseUrl,
102 |     max: Number(process.env.DATABASE_POOL_SIZE ?? 20),
103 |     idleTimeoutMillis: 30_000,
104 |     connectionTimeoutMillis: 5_000,
105 |     ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
106 |   });
107 |   const verification = new PostgresVerificationService(pool, {
108 |     otpSecret: required('OTP_HASH_SECRET'),
109 |     cipher: new AesGcmEnvelopeCipher(
110 |       Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
111 |       required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
112 |     ),
113 |   });
114 |   const nativeShadowRollouts = new PostgresNativeShadowRolloutRepository(pool);
115 |   const durableWorkOperations = new PostgresDurableWorkOperations(pool);
116 |   dependencies = {
117 |     apiKeys: new PostgresApiKeyResolver(pool, apiKeyPepper),
118 |     usage: new PostgresUsageLedger(pool),
119 |     features: new PostgresAssessmentFeatureProvider(pool),
120 |     assessments: new PostgresAssessmentRepository(pool),
121 |     outcomes: new PostgresOutcomeRepository(pool),
122 |     shadowComparisons: new PostgresShadowComparisonRepository(pool),
123 |     nativeShadowRollouts,
124 |     nativeShadowAttempts: new PostgresNativeShadowAttemptRepository(pool),
125 |     refreshQueue: new PostgresCourierRefreshQueue(pool),
126 |     idempotency: new PostgresOperationIdempotencyStore(pool),
127 |     rateLimiter,
128 |     hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
129 |     verificationRequests: verification,
130 |     otpVerifier: verification,
131 |     browser: {
132 |       auth: new PostgresBrowserAuthService(pool, sessionPepper),
133 |       dashboard: new PostgresMerchantDashboardRepository(pool),
134 |       admin: new PostgresPlatformAdminRepository(pool),
135 |       nativeShadowRollouts,
136 |       durableWorkOperations,
137 |       audit: new PostgresBrowserAuditRepository(pool),
138 |       rateLimiter,
139 |       csrfSecret: sessionCsrfSecret,
140 |       secureCookies: productionMode,
141 |     },
142 |     logger: log,
143 |   };
144 | } else {
145 |   dependencies = {
146 |     apiKeys: new ConfiguredApiKeyResolver({
147 |       keyHash: required('OZZYL_API_KEY_HASH'),
148 |       pepper: apiKeyPepper,
149 |       identity: {
150 |         apiKeyId: process.env.OZZYL_API_KEY_ID ?? 'key_local',
151 |         organizationId: required('OZZYL_ORGANIZATION_ID'),
152 |         storeId: required('OZZYL_STORE_ID'),
153 |         environment: configuredEnvironment(),
154 |         plan: configuredPlan(),
155 |         scopes: new Set([
156 |           'risk:write',
157 |           'risk:read',
158 |           'outcomes:write',
159 |           'comparisons:write',
160 |           'courier:refresh',
161 |           'verification:write',
162 |         ]),
163 |       },
164 |     }),
165 |     usage: new MemoryUsageLedger(),
166 |     features: new MissingFeatureProvider(),
167 |     assessments: new MemoryAssessmentRepository(),
168 |     outcomes: new MemoryOutcomeRepository(),
169 |     shadowComparisons: new MemoryShadowComparisonRepository(),
170 |     refreshQueue: new MemoryRefreshQueue(),
171 |     idempotency: new MemoryOperationIdempotencyStore(),
172 |     rateLimiter: new MemoryRateLimiter(),
173 |     hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
174 |     logger: log,
175 |   };
176 | }
177 |
178 | const app = createApiApp(dependencies);
179 | const port = Number(process.env.API_PORT ?? 3000);
180 | const server = serve({ fetch: app.fetch, port });
181 | log.info('api.started', {
182 |   port,
183 |   persistence: databaseUrl ? 'postgresql' : 'memory',
184 | });
185 |
186 | const shutdown = async (signal: string): Promise<void> => {
187 |   log.info('api.stopping', { signal });
188 |   server.close();
189 |   await pool?.end();
190 |   process.exit(0);
191 | };
192 |
193 | process.once('SIGTERM', () => void shutdown('SIGTERM'));
194 | process.once('SIGINT', () => void shutdown('SIGINT'));
195 |
```

### docs/operations/operations-observability.md

Bytes: 13705
SHA-256: 67c31ffddae121b2369453ad17112d0102694ca9036be751e26085606d693940
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

### docs/testing/testing-strategy.md

Bytes: 15331
SHA-256: 54e099085189d3b47b46149c0552651c40848c19cc973adc12f3b3f7d58089d0
Lines: 1-283 of 283

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
 20 | - API request-ID validation, bounded route templates, status/latency lifecycle records, and safe unhandled-error serialization
 21 |
 22 | ## Contract tests
 23 |
 24 | Each courier adapter must pass a shared contract suite:
 25 |
 26 | - Returns canonical observation
 27 | - Handles timeout
 28 | - Handles expired session
 29 | - Never leaks credentials
 30 | - Maps malformed responses to structured errors
 31 | - Preserves source/freshness metadata
 32 | - Separates actual return from pre-shipping cancellation
 33 |
 34 | Public API contract tests cover:
 35 |
 36 | - Canonical success/error response
 37 | - Lowercase enums and `signals[].code`
 38 | - Unknown/degraded behavior
 39 | - Idempotent replay
 40 | - Test/live key isolation
 41 | - Dedicated comparison scope, idempotent replay, order binding, and cross-store assessment rejection
 42 |
 43 | Webhook delivery contract tests cover:
 44 |
 45 | - Canonical domain-event payloads
 46 | - HMAC signature over timestamp and exact payload
 47 | - Redirect rejection
 48 | - Retryable HTTP/network/DNS failures
 49 | - Terminal unsafe-destination and inactive-endpoint failures
 50 | - No signing secret, raw phone, or unrestricted request body in logs
 51 |
 52 | ## Integration tests
 53 |
 54 | - User/session authentication
 55 | - API key creation, one-time reveal, authentication, revocation, and rotation
 56 | - Atomic quota enforcement under concurrency
 57 | - Assessment persistence
 58 | - Transactional encrypted OTP queue creation and tenant-scoped verification
 59 | - Lease-owned OTP provider delivery and retry/failure state
 60 | - Courier session refresh
 61 | - Transactional assessment/outcome webhook outbox emission
 62 | - Lease-owned webhook delivery and retry
 63 | - Multi-tenant isolation
 64 | - Organization/store membership authorization
 65 | - API-wide request correlation for public, authenticated, browser, not-found, and unhandled-error paths without raw dynamic routes or query values
 66 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 67 |
 68 | ### PostgreSQL concurrency and idempotency coverage
 69 |
 70 | The CI PostgreSQL service runs real-database integration tests for:
 71 |
 72 | - duplicate usage reservations serializing through the organization/period advisory lock;
 73 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 74 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 75 | - concurrent assessment saves returning the single persisted scoped winner;
 76 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 77 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 78 | - operation idempotency values remaining isolated by organization and store;
 79 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 80 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 81 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 82 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 83 | - preventing another courier worker from stealing a fresh lease;
 84 | - reclaiming expired courier jobs and rejecting the previous owner;
 85 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 86 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 87 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
 88 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
 89 | - preventing another event worker from stealing a fresh webhook lease;
 90 | - rejecting an expired event-worker owner before completion or failure;
 91 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
 92 | - clearing webhook ownership when a retry is scheduled;
 93 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
 94 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
 95 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
 96 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
 97 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 98 | - protecting fresh verification leases and rejecting expired owners;
 99 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
100 | - failing both the verification job and authoritative session on persisted scope mismatch;
101 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
102 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
103 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
104 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
105 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
106 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
107 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
108 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
109 |
110 | ### Native shadow rollout safety coverage
111 |
112 | Default tests prove:
113 |
114 | - `off` mode performs no Guard assessment or comparison API call;
115 | - deterministic sampling keeps retries for the same store/order in the same cohort;
116 | - the legacy score and decision remain the effective result even when Guard recommends block;
117 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
118 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
119 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
120 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
121 | - CSRF-protected browser mutation permits only active owner/admin store scope;
122 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
123 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
124 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
125 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
126 |
127 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
128 |
129 | ### Webhook destination security coverage
130 |
131 | Default tests use injected DNS and fetch boundaries. They prove:
132 |
133 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
134 | - a hostname resolving to any non-public address is rejected before `fetch`;
135 | - DNS resolution failure is classified as retryable without making a network request;
136 | - redirects are disabled;
137 | - successful deliveries use the expected HMAC signature and canonical payload;
138 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
139 |
140 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
141 |
142 | ### Verification payload security coverage
143 |
144 | Default tests prove:
145 |
146 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
147 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
148 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
149 | - reporter state and logs do not receive plaintext OTP values;
150 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
151 |
152 | ### Managed envelope security coverage
153 |
154 | Default tests prove:
155 |
156 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
157 | - plaintext values and plaintext data keys are not serialized into the envelope;
158 | - context mismatch is rejected before provider unwrap;
159 | - wrapped-key metadata is authenticated and tampering fails closed;
160 | - provider outage produces a structured non-secret error;
161 | - a provider cannot pass the plaintext data key through as a wrapped key;
162 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
163 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
164 | - malformed, unsupported, or unavailable-key envelopes fail closed.
165 |
166 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
167 |
168 | ### Migration replay coverage
169 |
170 | CI runs the migration command twice against the same PostgreSQL service:
171 |
172 | 1. the first run applies every ordered migration;
173 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
174 |
175 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
176 |
177 | ### Migration integrity and restore coverage
178 |
179 | CI additionally proves:
180 |
181 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
182 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
183 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
184 | - migration execution is serialized by one session-held advisory lock;
185 | - the restore target is a distinct pre-created clean database;
186 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
187 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
188 |
189 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
190 |
191 | Future PostgreSQL coverage must include:
192 |
193 | - lease renewal during future jobs whose bounded execution time can exceed the configured lease;
194 | - selected-provider smoke tests for distinct API/worker runtime identities and migration-owner grant execution;
195 | - operational replay/dead-letter authorization and audit coverage.
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
222 | - Telemetry serialization/export failure isolation from application and worker execution
223 | - Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
224 | - Injection attacks
225 | - Session fixation/rotation
226 | - Credential decryption failure
227 | - Worker lease ownership and stale-owner rejection
228 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
229 | - Runtime database role privilege escape, ownership, migration-history, DELETE, and DDL attempts
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
```

### tracker.yml

Bytes: 17248
SHA-256: 3bad22579a2d4ee01b3ce9e9caba7f64119ac6e9102c93f43e12d84f9056809c
Lines: 1-334 of 334

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
 95 |
 96 | implemented:
 97 |   - typescript_monorepo_and_ci
 98 |   - postgresql_schema_and_twelve_migrations
 99 |   - organization_store_membership_and_plan_foundation
100 |   - usage_metering_and_audit_foundation
101 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
102 |   - pure_versioned_explainable_risk_engine
103 |   - canonical_v1_api_and_postgresql_repositories
104 |   - provider_neutral_shared_envelope_encryption_package
105 |   - steadfast_adapter_and_browser_session_worker
106 |   - postgresql_courier_sync_worker
107 |   - verification_and_webhook_libraries
108 |   - durable_postgresql_webhook_outbox_and_event_worker
109 |   - durable_encrypted_postgresql_verification_queue_and_worker
110 |   - tenant_scoped_postgresql_otp_verification_repository
111 |   - woocommerce_shopify_custom_and_native_adapters
112 |   - authenticated_live_merchant_dashboard
113 |   - authenticated_live_platform_admin
114 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
115 |   - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
116 |   - accepted_provider_neutral_production_infrastructure_adrs
117 |   - postgresql_usage_assessment_outcome_and_operation_idempotency_race_hardening
118 |   - postgresql_courier_worker_atomic_claim_and_lease_recovery
119 |   - postgresql_webhook_worker_atomic_claim_and_lease_recovery
120 |   - postgresql_verification_worker_atomic_claim_and_lease_recovery
121 |   - verification_payload_context_phone_hash_and_otp_hash_validation
122 |   - otp_provider_delivery_removed_from_synchronous_api_requests
123 |   - migration_replay_ci_gate
124 |   - webhook_dns_destination_validation
125 |   - postgresql_migration_manifest_and_history_checksum_integrity
126 |   - clean_postgresql_backup_restore_rehearsal
127 |   - restored_schema_data_sequence_history_and_replay_comparison
128 |   - authoritative_api_key_feature_assessment_and_outcome_tenant_scope_revalidation
129 |   - secret_free_tenant_scoped_webhook_and_verification_administration_repositories
130 |   - dashboard_and_platform_admin_repository_isolation_expansion
131 |   - least_privilege_postgresql_runtime_role_policy_grant_cli_and_ci_gate
132 |   - provider_neutral_managed_envelope_v2_with_random_per_record_data_keys
133 |   - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
134 |   - native_multi_store_off_and_deterministic_shadow_rollout_controls
135 |   - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
136 |   - selected_source_post_persist_native_shadow_integration
137 |   - store_scoped_native_shadow_opt_in_and_pilot_reporting
138 |   - tenant_scoped_immutable_native_shadow_attempt_evidence
139 |   - tenant_scoped_durable_work_dead_letter_inspection
140 |   - idempotent_controlled_durable_work_replay
141 |   - immutable_secret_free_durable_work_replay_evidence
142 |   - authenticated_merchant_browser_dead_letter_operations
143 |   - csrf_protected_browser_durable_work_replay
144 |   - synchronous_per_work_item_browser_replay_key_cache
145 |   - provider_neutral_structured_logging_and_recursive_redaction
146 |   - courier_session_courier_sync_event_and_verification_worker_log_integration
147 |   - telemetry_serialization_and_sink_failure_isolation_tests
148 |   - api_request_lifecycle_and_safe_correlation_logging
149 |   - api_unhandled_error_redaction_and_sink_failure_isolation_tests
150 |
151 | verification:
152 |   command: npm run verify
153 |   last_verified: 2026-07-28
154 |   status: passed
155 |   results:
156 |     migrations: 12_of_12_with_sha256_manifest
157 |     migration_replay: passed
158 |     migration_history_integrity: passed
159 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
160 |     architecture_boundaries: passed
161 |     typecheck: 20_of_20_passed
162 |     test_tasks: 31_of_31_passed
163 |     source_assertions: 136_total
164 |     previous_main_remote_assertions: 132_passed
165 |     migration_integrity_tests: 7_of_7_passed
166 |     postgresql_concurrency_tests: 7_of_7_passed
167 |     postgresql_courier_worker_lease_tests: 5_of_5_passed
168 |     postgresql_webhook_worker_lease_tests: 5_of_5_passed
169 |     postgresql_verification_worker_lease_tests: 5_of_5_passed
170 |     verification_payload_validation_tests: 3_of_3_passed
171 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
172 |     postgresql_runtime_role_tests: 7_of_7_passed
173 |     managed_envelope_tests: 11_of_11_passed
174 |     native_shadow_adapter_tests: 10_of_10_passed
175 |     native_shadow_api_tests: 7_of_7_passed
176 |     native_shadow_postgresql_tests: 7_of_7_passed
177 |     native_shadow_browser_tests: 2_of_2_passed
178 |     native_shadow_sdk_tests: 2_of_2_passed
179 |     native_shadow_total_tests: 28_of_28_passed
180 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
181 |     browser_dead_letter_api_tests: 3_of_3_passed
182 |     observability_tests: 3_of_3_passed
183 |     api_observability_tests: 4_of_4_passed
184 |     builds: 20_of_20_passed
185 |     php_syntax: passed
186 |     high_critical_dependency_check: passed
187 |     moderate_dependency_findings: 5
188 |     documentation_links: 57_reviewed_0_known_broken
189 |   continuation_bundle:
190 |     status: refreshed_locally
191 |     canonical_main_sync: verified_at_cc8d8901808305b4c72604c654b7790ae7e3bffc
192 |     local_exporter: completed_after_api_observability_docs
193 |   remote_ci:
194 |     status: passed
195 |     run_id: 30317190971
196 |     job_id: 90145176143
197 |     job: verify
198 |     tested_head: 533979f6c5abe2cadf51de05bdd3b4844a647dd8
199 |     merged_main_commit: d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7
200 |     completed: 2026-07-28
201 |     steps: audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_two_assertions_twenty_builds_php_all_passed
202 |   source_validation:
203 |     status: passed
204 |     run_id: 30317190971
205 |     job_id: 90145176143
206 |     tested_head: 533979f6c5abe2cadf51de05bdd3b4844a647dd8
207 |     completed: 2026-07-28
208 |     steps: audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_two_assertions_twenty_builds_php_all_passed
209 |     observability_tests: 3_of_3_passed
210 |   pending_follow_up:
211 |     - source_branch_remote_ci_validation
212 |     - observability_metrics_traces_exporters_and_managed_backend
213 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
214 |     - pilot_outcome_collection_and_calibration
215 |
216 | migrations:
217 |   immutable: true
218 |   manifest: packages/database/migrations/manifest.json
219 |   history_checksum_column: checksum_sha256_not_null
220 |   files:
221 |     - packages/database/migrations/0001_foundation.sql
222 |     - packages/database/migrations/0002_courier.sql
223 |     - packages/database/migrations/0003_risk.sql
224 |     - packages/database/migrations/0004_verification_events.sql
225 |     - packages/database/migrations/0005_durable_operations.sql
226 |     - packages/database/migrations/0006_browser_access.sql
227 |     - packages/database/migrations/0007_worker_leases.sql
228 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
229 |     - packages/database/migrations/0009_verification_delivery_queue.sql
230 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
231 |     - packages/database/migrations/0011_native_shadow_pilot.sql
232 |     - packages/database/migrations/0012_durable_work_replays.sql
233 |
234 | accepted_adrs:
235 |   - docs/adr/0006-production-deployment-topology.md
236 |   - docs/adr/0007-managed-postgresql-production-baseline.md
237 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
238 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
239 |   - docs/adr/0010-vendor-neutral-production-observability.md
240 |   - docs/adr/0011-selected-source-shadow-pilot.md
241 |   - docs/adr/0012-durable-work-dead-letter-operations.md
242 |
243 | external_dependencies:
244 |   - authorized_steadfast_test_account
245 |   - provider_authorization_review
246 |   - deployment_platform_account_region_and_budget
247 |   - managed_postgresql_provider_and_service_tier
248 |   - managed_secret_store_and_kms_vault_provider
249 |   - observability_backend_and_retention_policy
250 |   - otp_provider_account
251 |   - pilot_outcome_data
252 |
253 | next_milestone:
254 |   name: production-hardening-and-pilot-readiness
255 |   tasks:
256 |     - select_and_provision_accepted_infrastructure_providers
257 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
258 |     - validate_steadfast_with_an_authorized_account
259 |     - implement_the_selected_otp_provider_adapter
260 |     - add_distributed_cache_only_when_replica_coordination_requires_it
261 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
262 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
263 |     - calibrate_decisions_before_broad_automatic_blocking
264 |
265 | release_policy:
266 |   branch: main
267 |   before_push:
268 |     - npm_run_verify_passes
269 |     - documentation_and_tracker_are_current
270 |     - repository_review_is_clean
271 |   rules:
272 |     - no_force_push_to_main
273 |     - do_not_edit_applied_migrations
274 |     - use_descriptive_commits
275 |
276 | notes:
277 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
278 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
279 |   - github_connector_reports_public_visibility_while_expected_state_is_private
280 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
281 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
282 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
283 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
284 |   - webhook_event_payloads_do_not_include_raw_phone_values
285 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
286 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
287 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
288 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
289 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
290 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
291 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
292 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
293 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
294 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
295 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
296 |   - selected_otp_provider_module_and_credentials_remain_external
297 |   - migration_files_are_bound_to_a_committed_sha256_manifest
298 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
299 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
300 |   - migration_execution_uses_one_session_advisory_lock
301 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
302 |   - managed_provider_point_in_time_restore_drill_remains_external
303 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
304 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
305 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
306 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
307 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
308 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
309 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
310 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
311 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
312 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
313 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
314 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
315 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
316 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
317 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
318 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
319 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
320 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
321 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
322 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
323 |   - durable_replay_never_performs_provider_or_webhook_network_io
324 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
325 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
326 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
327 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
328 |   - structured_log_redaction_is_canonicalized_in_packages_observability
329 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
330 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
331 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
332 |   - pro_context_was_refreshed_after_api_observability_documentation
333 |   - update_this_file_after_every_material_milestone
334 |
```

## Skipped Files

- package-lock.json [File is too large (251154 bytes). Limit: 60000 bytes.]
