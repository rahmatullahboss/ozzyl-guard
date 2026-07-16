# Ozzyl Guard — Production Hardening Continuation Context

Generated: 2026-07-16T16:45:17.308Z
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
│   │   │   ├── postgres-browser.test.ts
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
│   │   │   └── 0006_browser_access.sql
│   │   ├── src/
│   │   │   ├── check-migrations.ts
│   │   │   ├── index.ts
│   │   │   ├── migrate.ts
│   │   │   └── schema.ts
│   │   ├── drizzle.config.ts
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
│   │   │   └── index.ts
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
│   │   │   └── runner.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── event-worker/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── verification-worker/
│       ├── src/
│       │   └── index.ts
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
## main...origin/main
 M .ai-bridge/current-plan.md
 M .ai-bridge/implementation-status.md
 M .ai-bridge/pro-context.md
 M tracker.yml
```

## Recent Commits

```text
cdfff5a (HEAD -> main, origin/main) fix: run PostgreSQL integration tests in CI
69b1600 feat: wire authenticated live operations
fc5aa40 docs: record successful GitHub Actions run [skip ci]
acd5217 docs: record GitHub Actions billing blocker [skip ci]
24cab73 feat: establish Ozzyl Guard MVP foundation
```

## Git Diff

```diff
diff --git a/.ai-bridge/current-plan.md b/.ai-bridge/current-plan.md
index ae28629..7dd897d 100644
--- a/.ai-bridge/current-plan.md
+++ b/.ai-bridge/current-plan.md
@@ -8,7 +8,7 @@ A runnable standalone MVP foundation is implemented and the first production-har

 ## Completed

-- [x] Repository, private GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
+- [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
 - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 - [x] Canonical shared API/error/event contracts
 - [x] PostgreSQL/Drizzle schema and six append-only migrations
@@ -42,13 +42,13 @@ A runnable standalone MVP foundation is implemented and the first production-har
 - Production builds: 18 of 18 workspaces passed
 - WooCommerce PHP syntax: passed
 - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
-- Previous GitHub Actions CI run `29499998845`: passed; the new commit must validate migration 0006 and run the three PostgreSQL browser-access tests
+- GitHub Actions CI run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including three PostgreSQL browser-access integration tests
 - Canonical documentation links: 49 Markdown files checked, zero broken internal links
 - `tracker.yml` YAML parse: passed
 - Continuation bundle: refreshed and formatted
 - Prohibited source-pattern search: no matches

-A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. The previous five migrations passed remotely against PostgreSQL 16; migration 0006 and the new PostgreSQL browser-access tests await the next GitHub Actions run.
+A clean PostgreSQL migration apply cannot be executed locally because Docker/PostgreSQL is unavailable in this workspace. GitHub Actions run `29516535736` applied all six migrations against PostgreSQL 16 and passed all three browser-access PostgreSQL integration tests.

 ## Next production milestone

diff --git a/.ai-bridge/implementation-status.md b/.ai-bridge/implementation-status.md
index f20d4dc..9ee0bcc 100644
--- a/.ai-bridge/implementation-status.md
+++ b/.ai-bridge/implementation-status.md
@@ -23,30 +23,30 @@ Updated: 2026-07-16

 ## Product implementation

-| Area                             | Status   | Notes                                                                                                                                                       |
-| -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
-| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                                                      |
-| Database/migrations              | baseline | Full schema and six append-only migrations; migration 0006 adds explicit platform role and live-read indexes; clean apply awaits the next PostgreSQL CI run |
-| Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                          |
-| Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                       |
-| API keys/usage/plans             | done     | Test/live prefixes, one-time raw reveal, hash-only persistence, scopes, revocation fields, atomic PostgreSQL usage reservation                              |
-| Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                               |
-| Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                               |
-| Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, encryption boundary, health state, runnable PG polling                                                       |
-| Courier observation worker/cache | done     | Durable jobs, `SKIP LOCKED` claiming, retry scheduling, normalized observation persistence                                                                  |
-| Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                             |
-| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits                                                     |
-| PostgreSQL API repositories      | done     | API keys, usage, features, assessments/signals, outcomes, idempotency, courier jobs                                                                         |
-| Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                 |
-| Webhook delivery                 | baseline | HMAC, timestamp, SSRF controls, retries; durable outbox runner still needed                                                                                 |
-| WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                    |
-| Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                        |
-| Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                         |
-| Native multi-store adapter       | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending                                                           |
-| OTP verification                 | baseline | Secure service abstraction and worker library; production provider/runner blocked                                                                           |
-| Merchant dashboard               | done     | Argon2id login, opaque HttpOnly session, CSRF logout, authorized store switching, and live scoped overview/review/courier/usage data                        |
-| Platform admin                   | done     | Explicit `platform_admin` role gate with authenticated live organization, assessment, backlog, webhook, incident, and provider data                         |
-| Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                   |
+| Area                             | Status   | Notes                                                                                                                                                |
+| -------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
+| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                                               |
+| Database/migrations              | done     | Full schema and six append-only migrations; migration 0006 adds explicit platform role and live-read indexes; clean PostgreSQL 16 apply passed in CI |
+| Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                   |
+| Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                |
+| API keys/usage/plans             | done     | Test/live prefixes, one-time raw reveal, hash-only persistence, scopes, revocation fields, atomic PostgreSQL usage reservation                       |
+| Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                        |
+| Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                        |
+| Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, encryption boundary, health state, runnable PG polling                                                |
+| Courier observation worker/cache | done     | Durable jobs, `SKIP LOCKED` claiming, retry scheduling, normalized observation persistence                                                           |
+| Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                      |
+| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits                                              |
+| PostgreSQL API repositories      | done     | API keys, usage, features, assessments/signals, outcomes, idempotency, courier jobs                                                                  |
+| Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                          |
+| Webhook delivery                 | baseline | HMAC, timestamp, SSRF controls, retries; durable outbox runner still needed                                                                          |
+| WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                             |
+| Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                 |
+| Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                  |
+| Native multi-store adapter       | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending                                                    |
+| OTP verification                 | baseline | Secure service abstraction and worker library; production provider/runner blocked                                                                    |
+| Merchant dashboard               | done     | Argon2id login, opaque HttpOnly session, CSRF logout, authorized store switching, and live scoped overview/review/courier/usage data                 |
+| Platform admin                   | done     | Explicit `platform_admin` role gate with authenticated live organization, assessment, backlog, webhook, incident, and provider data                  |
+| Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                            |

 ## Migrations

@@ -69,7 +69,7 @@ Applied migrations must remain immutable.
 - `npm run test`: 26/26 Turbo tasks passed; 29 assertions passed and three PostgreSQL browser-access integration tests skipped because local `DATABASE_URL` is unavailable
 - `npm run build`: 18/18 workspace builds passed
 - `npm audit --audit-level=high`: passed; four moderate dev-tooling findings remain
-- Previous GitHub Actions run `29499998845`: passed; the new commit must run migration 0006 and the three PostgreSQL browser-access integration tests
+- GitHub Actions run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including 13/13 API tests and 3/3 PostgreSQL browser-access integration tests
 - WooCommerce `php -l`: passed
 - Canonical documentation link check: 49 files, zero broken links
 - `tracker.yml` YAML parse: passed
diff --git a/.ai-bridge/pro-context.md b/.ai-bridge/pro-context.md
index 833f6d1..46bd9a2 100644
--- a/.ai-bridge/pro-context.md
+++ b/.ai-bridge/pro-context.md
@@ -1,6 +1,6 @@
 # Ozzyl Guard — Production Hardening Continuation Context

-Generated: 2026-07-16T16:39:40.209Z
+Generated: 2026-07-16T16:44:41.155Z
 Workspace: /Users/rahmatullahzisan/Desktop/Dev/Ozzyl Guard
 Workspace ID: ws_dfece19fe5040cc4a5675d02
 Write mode: workspace
@@ -282,13 +282,16 @@ Instruction for ChatGPT: use this as repository context, produce a narrow Codex

 ```text
 ## main...origin/main
- M turbo.json
+ M .ai-bridge/current-plan.md
+ M .ai-bridge/implementation-status.md
+ M tracker.yml
 ```

 ## Recent Commits

 ```text
-69b1600 (HEAD -> main, origin/main) feat: wire authenticated live operations
+cdfff5a (HEAD -> main, origin/main) fix: run PostgreSQL integration tests in CI
+69b1600 feat: wire authenticated live operations
 fc5aa40 docs: record successful GitHub Actions run [skip ci]
 acd5217 docs: record GitHub Actions billing blocker [skip ci]
 24cab73 feat: establish Ozzyl Guard MVP foundation
@@ -297,18 +300,91 @@ acd5217 docs: record GitHub Actions billing blocker [skip ci]
 ## Git Diff

 ```diff
-diff --git a/turbo.json b/turbo.json
-index 85ab9ec..e3c4541 100644
---- a/turbo.json
-+++ b/turbo.json
-@@ -11,6 +11,7 @@
-     },
-     "test": {
-       "dependsOn": ["^build"],
-+      "env": ["DATABASE_URL"],
-       "outputs": ["coverage/**"]
-     },
-     "dev": {
+diff --git a/.ai-bridge/current-plan.md b/.ai-bridge/current-plan.md
+index ae28629..7dd897d 100644
+--- a/.ai-bridge/current-plan.md
++++ b/.ai-bridge/current-plan.md
+@@ -8,7 +8,7 @@ A runnable standalone MVP foundation is implemented and the first production-har
+
+ ## Completed
+
+-- [x] Repository, private GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
++- [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
+ - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
+ - [x] Canonical shared API/error/event contracts
+ - [x] PostgreSQL/Drizzle schema and six append-only migrations
+@@ -42,13 +42,13 @@ A runnable standalone MVP foundation is implemented and the first production-har
+ - Production builds: 18 of 18 workspaces passed
+ - WooCommerce PHP syntax: passed
+ - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
+-- Previous GitHub Actions CI run `29499998845`: passed; the new commit must validate migration 0006 and run the three PostgreSQL browser-access tests
++- GitHub Actions CI run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including three PostgreSQL browser-access integration tests
+ - Canonical documentation links: 49 Markdown files checked, zero broken internal links
+ - `tracker.yml` YAML parse: passed
+ - Continuation bundle: refreshed and formatted
+ - Prohibited source-pattern search: no matches
+
+-A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. The previous five migrations passed remotely against PostgreSQL 16; migration 0006 and the new PostgreSQL browser-access tests await the next GitHub Actions run.
++A clean PostgreSQL migration apply cannot be executed locally because Docker/PostgreSQL is unavailable in this workspace. GitHub Actions run `29516535736` applied all six migrations against PostgreSQL 16 and passed all three browser-access PostgreSQL integration tests.
+
+ ## Next production milestone
+
+diff --git a/.ai-bridge/implementation-status.md b/.ai-bridge/implementation-status.md
+index f20d4dc..87f78d4 100644
+--- a/.ai-bridge/implementation-status.md
++++ b/.ai-bridge/implementation-status.md
+@@ -26,7 +26,7 @@ Updated: 2026-07-16
+ | Area                             | Status   | Notes                                                                                                                                                       |
+ | -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
+ | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                                                      |
+-| Database/migrations              | baseline | Full schema and six append-only migrations; migration 0006 adds explicit platform role and live-read indexes; clean apply awaits the next PostgreSQL CI run |
++| Database/migrations              | done     | Full schema and six append-only migrations; migration 0006 adds explicit platform role and live-read indexes; clean PostgreSQL 16 apply passed in CI        |
+ | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                          |
+ | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                       |
+ | API keys/usage/plans             | done     | Test/live prefixes, one-time raw reveal, hash-only persistence, scopes, revocation fields, atomic PostgreSQL usage reservation                              |
+@@ -69,7 +69,7 @@ Applied migrations must remain immutable.
+ - `npm run test`: 26/26 Turbo tasks passed; 29 assertions passed and three PostgreSQL browser-access integration tests skipped because local `DATABASE_URL` is unavailable
+ - `npm run build`: 18/18 workspace builds passed
+ - `npm audit --audit-level=high`: passed; four moderate dev-tooling findings remain
+-- Previous GitHub Actions run `29499998845`: passed; the new commit must run migration 0006 and the three PostgreSQL browser-access integration tests
++- GitHub Actions run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including 13/13 API tests and 3/3 PostgreSQL browser-access integration tests
+ - WooCommerce `php -l`: passed
+ - Canonical documentation link check: 49 files, zero broken links
+ - `tracker.yml` YAML parse: passed
+diff --git a/tracker.yml b/tracker.yml
+index 1d7498d..0b11cf4 100644
+--- a/tracker.yml
++++ b/tracker.yml
+@@ -87,7 +87,8 @@ verification:
+     architecture_boundaries: passed
+     typecheck: 18_of_18
+     test_tasks: 26_of_26
+-    assertions: 29_passed_3_postgresql_skipped
++    local_assertions: 29_passed_3_postgresql_skipped
++    remote_assertions: 32_passed
+     builds: 18_of_18
+     php_syntax: passed
+     high_critical_dependency_check: passed
+@@ -96,11 +97,14 @@ verification:
+     - docker_and_postgresql_are_not_available_in_this_workspace
+     - three_postgresql_browser_access_integration_tests_require_database_url
+   remote_ci:
+-    status: pending_new_commit
+-    previous_passing_run_id: 29499998845
+-    previous_job: verify
+-    previous_duration: 1m47s
+-    previous_completed: 2026-07-16
++    status: passed
++    run_id: 29516535736
++    job_id: 87682870530
++    job: verify
++    commit: cdfff5a504e9309bd64bae188c3dd03729f1133e
++    duration: 1m50s
++    completed: 2026-07-16
++    postgresql_tests: 3_of_3_passed
+
+ migrations:
+   immutable: true
 ```

 ## Existing AI Bridge Context
@@ -324,7 +400,7 @@ index 85ab9ec..e3c4541 100644
  8 |
  9 | ## Completed
 10 |
-11 | - [x] Repository, private GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
+11 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
 12 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 13 | - [x] Canonical shared API/error/event contracts
 14 | - [x] PostgreSQL/Drizzle schema and six append-only migrations
@@ -358,13 +434,13 @@ index 85ab9ec..e3c4541 100644
 42 | - Production builds: 18 of 18 workspaces passed
 43 | - WooCommerce PHP syntax: passed
 44 | - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
-45 | - Previous GitHub Actions CI run `29499998845`: passed; the new commit must validate migration 0006 and run the three PostgreSQL browser-access tests
+45 | - GitHub Actions CI run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including three PostgreSQL browser-access integration tests
 46 | - Canonical documentation links: 49 Markdown files checked, zero broken internal links
 47 | - `tracker.yml` YAML parse: passed
 48 | - Continuation bundle: refreshed and formatted
 49 | - Prohibited source-pattern search: no matches
 50 |
-51 | A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. The previous five migrations passed remotely against PostgreSQL 16; migration 0006 and the new PostgreSQL browser-access tests await the next GitHub Actions run.
+51 | A clean PostgreSQL migration apply cannot be executed locally because Docker/PostgreSQL is unavailable in this workspace. GitHub Actions run `29516535736` applied all six migrations against PostgreSQL 16 and passed all three browser-access PostgreSQL integration tests.
 52 |
 53 | ## Next production milestone
 54 |
@@ -496,7 +572,7 @@ index 85ab9ec..e3c4541 100644

 ## Selected Files

-Changed files detected: turbo.json
+Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, tracker.yml
 Auto-include important root files: yes
 Auto-include changed files: yes
 Explicit selected paths: tracker.yml, AGENTS.md, README.md, docs/README.md, .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, .ai-bridge/decisions.md, docs/adr/README.md, docs/adr/0005-browser-session-authentication.md, docs/api/api-specification.md, docs/database/database-design.md, docs/security/security-privacy.md, .github/workflows/ci.yml, turbo.json, apps/api/src/browser.ts, apps/api/src/postgres.ts, apps/api/src/browser.test.ts, apps/api/src/postgres-browser.test.ts, apps/dashboard/src/App.tsx, apps/admin/src/main.tsx, packages/database/migrations/0006_browser_access.sql
@@ -945,8 +1021,8 @@ Lines: 1-23 of 23

 ### .ai-bridge/current-plan.md

-Bytes: 5238
-SHA-256: 8c05a169bd9b5197ea86b948348ce267c79b769d4ed705d2587d81cdc8f295e7
+Bytes: 5246
+SHA-256: 45ffce172c807819239f5325b6c1a7b2b2708174f8fb0c7b30bd15722ddc8d3e
 Lines: 1-85 of 85

 ```markdown
@@ -960,7 +1036,7 @@ Lines: 1-85 of 85
  8 |
  9 | ## Completed
 10 |
-11 | - [x] Repository, private GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
+11 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
 12 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 13 | - [x] Canonical shared API/error/event contracts
 14 | - [x] PostgreSQL/Drizzle schema and six append-only migrations
@@ -994,13 +1070,13 @@ Lines: 1-85 of 85
 42 | - Production builds: 18 of 18 workspaces passed
 43 | - WooCommerce PHP syntax: passed
 44 | - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
-45 | - Previous GitHub Actions CI run `29499998845`: passed; the new commit must validate migration 0006 and run the three PostgreSQL browser-access tests
+45 | - GitHub Actions CI run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including three PostgreSQL browser-access integration tests
 46 | - Canonical documentation links: 49 Markdown files checked, zero broken internal links
 47 | - `tracker.yml` YAML parse: passed
 48 | - Continuation bundle: refreshed and formatted
 49 | - Prohibited source-pattern search: no matches
 50 |
-51 | A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. The previous five migrations passed remotely against PostgreSQL 16; migration 0006 and the new PostgreSQL browser-access tests await the next GitHub Actions run.
+51 | A clean PostgreSQL migration apply cannot be executed locally because Docker/PostgreSQL is unavailable in this workspace. GitHub Actions run `29516535736` applied all six migrations against PostgreSQL 16 and passed all three browser-access PostgreSQL integration tests.
 52 |
 53 | ## Next production milestone
 54 |
@@ -1118,8 +1194,8 @@ Lines: 1-70 of 70

 ### .ai-bridge/implementation-status.md

-Bytes: 9490
-SHA-256: 7f3e673bf461ebfb4058e2b0ae56e4bb7e94f484b8d6ae86e5e62fd8de605e15
+Bytes: 9528
+SHA-256: b2074a204b49425cc75008fbf95360990f0c41034f19f670ecdc1e7bfd916696
 Lines: 1-104 of 104

 ```markdown
@@ -1151,7 +1227,7 @@ Lines: 1-104 of 104
  26 | | Area                             | Status   | Notes                                                                                                                                                       |
  27 | | -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
  28 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                                                      |
- 29 | | Database/migrations              | baseline | Full schema and six append-only migrations; migration 0006 adds explicit platform role and live-read indexes; clean apply awaits the next PostgreSQL CI run |
+ 29 | | Database/migrations              | done     | Full schema and six append-only migrations; migration 0006 adds explicit platform role and live-read indexes; clean PostgreSQL 16 apply passed in CI        |
  30 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                          |
  31 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                       |
  32 | | API keys/usage/plans             | done     | Test/live prefixes, one-time raw reveal, hash-only persistence, scopes, revocation fields, atomic PostgreSQL usage reservation                              |
@@ -1194,7 +1270,7 @@ Lines: 1-104 of 104
  69 | - `npm run test`: 26/26 Turbo tasks passed; 29 assertions passed and three PostgreSQL browser-access integration tests skipped because local `DATABASE_URL` is unavailable
  70 | - `npm run build`: 18/18 workspace builds passed
  71 | - `npm audit --audit-level=high`: passed; four moderate dev-tooling findings remain
- 72 | - Previous GitHub Actions run `29499998845`: passed; the new commit must run migration 0006 and the three PostgreSQL browser-access integration tests
+ 72 | - GitHub Actions run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including 13/13 API tests and 3/3 PostgreSQL browser-access integration tests
  73 | - WooCommerce `php -l`: passed
  74 | - Canonical documentation link check: 49 files, zero broken links
  75 | - `tracker.yml` YAML parse: passed
@@ -5172,9 +5248,9 @@ Lines: 1-16 of 16

 ### tracker.yml

-Bytes: 5253
-SHA-256: cb90d77b43feb9f9f3bb2a31d157007346428dee7bd1d9a6d66bb765a3f034a6
-Lines: 1-152 of 152
+Bytes: 5349
+SHA-256: b7b96601a776ead2cbd37b5e1fd95dd6527911edd7b3849bf9d25c10c4eb1c1c
+Lines: 1-156 of 156

 ```yaml
   1 | schema_version: 1
@@ -5266,69 +5342,73 @@ Lines: 1-152 of 152
  87 |     architecture_boundaries: passed
  88 |     typecheck: 18_of_18
  89 |     test_tasks: 26_of_26
- 90 |     assertions: 29_passed_3_postgresql_skipped
- 91 |     builds: 18_of_18
- 92 |     php_syntax: passed
- 93 |     high_critical_dependency_check: passed
- 94 |     documentation_links: 49_checked_0_broken
- 95 |   local_limitations:
- 96 |     - docker_and_postgresql_are_not_available_in_this_workspace
- 97 |     - three_postgresql_browser_access_integration_tests_require_database_url
- 98 |   remote_ci:
- 99 |     status: pending_new_commit
-100 |     previous_passing_run_id: 29499998845
-101 |     previous_job: verify
-102 |     previous_duration: 1m47s
-103 |     previous_completed: 2026-07-16
-104 |
-105 | migrations:
-106 |   immutable: true
-107 |   files:
-108 |     - packages/database/migrations/0001_foundation.sql
-109 |     - packages/database/migrations/0002_courier.sql
-110 |     - packages/database/migrations/0003_risk.sql
-111 |     - packages/database/migrations/0004_verification_events.sql
-112 |     - packages/database/migrations/0005_durable_operations.sql
-113 |     - packages/database/migrations/0006_browser_access.sql
-114 |
-115 | external_dependencies:
-116 |   - authorized_steadfast_test_account
-117 |   - provider_authorization_review
-118 |   - production_managed_encryption_service
-119 |   - otp_provider_account
-120 |   - hosting_database_queue_cache_and_observability_decisions
-121 |   - pilot_outcome_data
-122 |
-123 | next_milestone:
-124 |   name: production-hardening-and-pilot-readiness
-125 |   tasks:
-126 |     - record_infrastructure_adrs
-127 |     - expand_postgresql_concurrency_idempotency_and_tenant_tests
-128 |     - validate_steadfast_with_an_authorized_account
-129 |     - implement_the_selected_otp_runner
-130 |     - add_durable_event_and_verification_runners
-131 |     - enable_native_adapter_shadow_mode
-132 |     - run_a_selected_merchant_pilot
-133 |     - calibrate_decisions_before_broad_automatic_blocking
-134 |
-135 | release_policy:
-136 |   branch: main
-137 |   before_push:
-138 |     - npm_run_verify_passes
-139 |     - documentation_and_tracker_are_current
-140 |     - repository_review_is_clean
-141 |   rules:
-142 |     - no_force_push_to_main
-143 |     - do_not_edit_applied_migrations
-144 |     - use_descriptive_commits
-145 |
-146 | notes:
-147 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
-148 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
-149 |   - github_connector_reports_public_visibility_while_expected_state_is_private
-150 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
-151 |   - update_this_file_after_every_material_milestone
-152 |
+ 90 |     local_assertions: 29_passed_3_postgresql_skipped
+ 91 |     remote_assertions: 32_passed
+ 92 |     builds: 18_of_18
+ 93 |     php_syntax: passed
+ 94 |     high_critical_dependency_check: passed
+ 95 |     documentation_links: 49_checked_0_broken
+ 96 |   local_limitations:
+ 97 |     - docker_and_postgresql_are_not_available_in_this_workspace
+ 98 |     - three_postgresql_browser_access_integration_tests_require_database_url
+ 99 |   remote_ci:
+100 |     status: passed
+101 |     run_id: 29516535736
+102 |     job_id: 87682870530
+103 |     job: verify
+104 |     commit: cdfff5a504e9309bd64bae188c3dd03729f1133e
+105 |     duration: 1m50s
+106 |     completed: 2026-07-16
+107 |     postgresql_tests: 3_of_3_passed
+108 |
+109 | migrations:
+110 |   immutable: true
+111 |   files:
+112 |     - packages/database/migrations/0001_foundation.sql
+113 |     - packages/database/migrations/0002_courier.sql
+114 |     - packages/database/migrations/0003_risk.sql
+115 |     - packages/database/migrations/0004_verification_events.sql
+116 |     - packages/database/migrations/0005_durable_operations.sql
+117 |     - packages/database/migrations/0006_browser_access.sql
+118 |
+119 | external_dependencies:
+120 |   - authorized_steadfast_test_account
+121 |   - provider_authorization_review
+122 |   - production_managed_encryption_service
+123 |   - otp_provider_account
+124 |   - hosting_database_queue_cache_and_observability_decisions
+125 |   - pilot_outcome_data
+126 |
+127 | next_milestone:
+128 |   name: production-hardening-and-pilot-readiness
+129 |   tasks:
+130 |     - record_infrastructure_adrs
+131 |     - expand_postgresql_concurrency_idempotency_and_tenant_tests
+132 |     - validate_steadfast_with_an_authorized_account
+133 |     - implement_the_selected_otp_runner
+134 |     - add_durable_event_and_verification_runners
+135 |     - enable_native_adapter_shadow_mode
+136 |     - run_a_selected_merchant_pilot
+137 |     - calibrate_decisions_before_broad_automatic_blocking
+138 |
+139 | release_policy:
+140 |   branch: main
+141 |   before_push:
+142 |     - npm_run_verify_passes
+143 |     - documentation_and_tracker_are_current
+144 |     - repository_review_is_clean
+145 |   rules:
+146 |     - no_force_push_to_main
+147 |     - do_not_edit_applied_migrations
+148 |     - use_descriptive_commits
+149 |
+150 | notes:
+151 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
+152 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
+153 |   - github_connector_reports_public_visibility_while_expected_state_is_private
+154 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
+155 |   - update_this_file_after_every_material_milestone
+156 |
 ```

 ### eslint.config.js
diff --git a/tracker.yml b/tracker.yml
index 1d7498d..0b11cf4 100644
--- a/tracker.yml
+++ b/tracker.yml
@@ -87,7 +87,8 @@ verification:
     architecture_boundaries: passed
     typecheck: 18_of_18
     test_tasks: 26_of_26
-    assertions: 29_passed_3_postgresql_skipped
+    local_assertions: 29_passed_3_postgresql_skipped
+    remote_assertions: 32_passed
     builds: 18_of_18
     php_syntax: passed
     high_critical_dependency_check: passed
@@ -96,11 +97,14 @@ verification:
     - docker_and_postgresql_are_not_available_in_this_workspace
     - three_postgresql_browser_access_integration_tests_require_database_url
   remote_ci:
-    status: pending_new_commit
-    previous_passing_run_id: 29499998845
-    previous_job: verify
-    previous_duration: 1m47s
-    previous_completed: 2026-07-16
+    status: passed
+    run_id: 29516535736
+    job_id: 87682870530
+    job: verify
+    commit: cdfff5a504e9309bd64bae188c3dd03729f1133e
+    duration: 1m50s
+    completed: 2026-07-16
+    postgresql_tests: 3_of_3_passed

 migrations:
   immutable: true
```

## Existing AI Bridge Context

--- .ai-bridge/current-plan.md ---
 1 | # Ozzyl Guard — Current Implementation Plan
 2 |
 3 | Updated: 2026-07-16
 4 |
 5 | ## Current state
 6 |
 7 | A runnable standalone MVP foundation is implemented and the first production-hardening slice is complete: dashboard/admin browser authentication, live PostgreSQL read models, tenant revalidation, platform-admin authorization, and PostgreSQL integration-test coverage are now present.
 8 |
 9 | ## Completed
10 |
11 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
12 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
13 | - [x] Canonical shared API/error/event contracts
14 | - [x] PostgreSQL/Drizzle schema and six append-only migrations
15 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
16 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
17 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
18 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
19 | - [x] Courier adapter contract and Steadfast normalized adapter
20 | - [x] Playwright Steadfast session driver with structured errors
21 | - [x] AES-GCM credential/session envelope boundary for local/self-hosted use
22 | - [x] Runnable PostgreSQL courier session and observation workers
23 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
24 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
25 | - [x] OTP hashing, expiry, rate/attempt limits, and tenant binding
26 | - [x] Signed webhook delivery library with replay timestamp and SSRF controls
27 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
28 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
29 | - [x] Explicit-role platform admin with live global operations data
30 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
31 | - [x] Docker/API/Playwright worker separation and PostgreSQL CI service
32 | - [x] Architecture dependency-boundary CI guard
33 |
34 | ## Verified on this workspace
35 |
36 | - Formatting check: passed
37 | - ESLint with zero warnings: passed
38 | - Six migration files ordered/non-empty/non-destructive: passed
39 | - Architecture import boundaries: passed
40 | - Typecheck: 18 of 18 workspaces passed
41 | - Test/build dependency tasks: 26 of 26 passed; 29 assertions passed and three PostgreSQL-only tests skipped locally
42 | - Production builds: 18 of 18 workspaces passed
43 | - WooCommerce PHP syntax: passed
44 | - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
45 | - GitHub Actions CI run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including three PostgreSQL browser-access integration tests
46 | - Canonical documentation links: 49 Markdown files checked, zero broken internal links
47 | - `tracker.yml` YAML parse: passed
48 | - Continuation bundle: refreshed and formatted
49 | - Prohibited source-pattern search: no matches
50 |
51 | A clean PostgreSQL migration apply cannot be executed locally because Docker/PostgreSQL is unavailable in this workspace. GitHub Actions run `29516535736` applied all six migrations against PostgreSQL 16 and passed all three browser-access PostgreSQL integration tests.
52 |
53 | ## Next production milestone
54 |
55 | 1. Select production hosting, PostgreSQL provider, KMS/vault, queue/cache, and observability through ADRs.
56 | 2. Expand PostgreSQL integration coverage for quota concurrency, idempotency races, migration replay, and additional repository isolation cases.
57 | 3. Replace local encryption-key handling with managed KMS envelope encryption.
58 | 4. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
59 | 5. Select and implement the OTP provider runner.
60 | 6. Add durable webhook outbox/event runner and verification queue runner.
61 | 7. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
62 | 8. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
63 |
64 | ## External blockers
65 |
66 | - Authorized Steadfast merchant/test credentials
67 | - Steadfast provider-terms and merchant-authorization review
68 | - Production KMS/vault choice and keys
69 | - OTP provider account and credentials
70 | - Hosting/database/queue/cache/observability selections
71 | - Production account recovery/MFA or managed identity-provider decision
72 | - Repository visibility correction from currently reported public to expected private
73 | - Pilot outcome data for false-positive/false-negative calibration
74 |
75 | ## Non-negotiable continuation rules
76 |
77 | - Do not add a second risk engine.
78 | - Do not call providers from the risk engine or synchronous checkout path.
79 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, or provider credentials.
80 | - Do not use API keys as dashboard user sessions.
81 | - Require organization/store scope in all merchant repositories and jobs.
82 | - Add new migrations; never edit applied migrations.
83 | - Keep unknown/provider failure explicit and policy-controlled.
84 | - Update `tracker.yml`, documentation, implementation status, and the continuation bundle with every material milestone.
85 |

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
 3 | Updated: 2026-07-16
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
24 |
25 | ## Source SaaS conflict resolutions
26 |
27 | | Conflict                                                                 | Decision                                                                                 |
28 | | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
29 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly |
30 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                               |
31 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                        |
32 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                       |
33 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                    |
34 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                             |
35 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                  |
36 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                               |
37 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                      |
38 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling          |
39 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                       |
40 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                   |
41 |
42 | ## Approved reuse scope
43 |
44 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
45 | - Bangladesh phone normalization after tests
46 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
47 | - WooCommerce settings/order hook/admin display skeleton
48 | - API-key hash/display-prefix and usage-event concepts
49 |
50 | No product source code was copied during Phase 0.
51 |
52 | ## Pending decisions
53 |
54 | These require separate ADRs before production implementation:
55 |
56 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
57 | - Queue/broker technology
58 | - API/dashboard/worker deployment platform
59 | - PostgreSQL hosting provider
60 | - KMS/vault and envelope-encryption implementation
61 | - Cache/session storage
62 | - Worker scheduler/runtime
63 | - OTP provider
64 |
65 | ## External requirements
66 |
67 | No credentials are needed for Phase 1 foundation.
68 |
69 | Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
70 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, .ai-bridge/pro-context.md, tracker.yml
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: tracker.yml, AGENTS.md, README.md, docs/README.md, .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, .ai-bridge/decisions.md, docs/adr/README.md, docs/adr/0005-browser-session-authentication.md, docs/api/api-specification.md, docs/database/database-design.md, docs/security/security-privacy.md, .github/workflows/ci.yml, turbo.json, apps/api/src/browser.ts, apps/api/src/postgres.ts, apps/api/src/browser.test.ts, apps/api/src/postgres-browser.test.ts, apps/dashboard/src/App.tsx, apps/admin/src/main.tsx, packages/database/migrations/0006_browser_access.sql
Extra globs: none
Files included below: AGENTS.md, docs/adr/README.md, docs/README.md, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, .github/workflows/ci.yml, apps/admin/src/main.tsx, apps/api/src/browser.test.ts, apps/api/src/browser.ts, apps/api/src/postgres-browser.test.ts, apps/api/src/postgres.ts, apps/dashboard/src/App.tsx, docs/adr/0005-browser-session-authentication.md, docs/api/api-specification.md, docs/database/database-design.md, docs/security/security-privacy.md, packages/database/migrations/0006_browser_access.sql, tracker.yml, eslint.config.js, package.json

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

### docs/adr/README.md

Bytes: 1214
SHA-256: bcfaaae437ba3934673ad1f210d9f91fc8b9ce57fe48a837f1d31f56fab95c5e
Lines: 1-39 of 39

```markdown
 1 | # Architecture Decision Records
 2 |
 3 | ADRs capture durable architectural decisions, alternatives, consequences, and supersession history.
 4 |
 5 | ## Status values
 6 |
 7 | - Proposed
 8 | - Accepted
 9 | - Superseded
10 | - Deprecated
11 | - Rejected
12 |
13 | ## Rules
14 |
15 | 1. Do not silently change an accepted architectural boundary.
16 | 2. Add a new ADR or explicitly supersede an existing one.
17 | 3. Link implementation and migration work to the relevant ADR.
18 | 4. Record unresolved choices as Proposed, not as implied facts.
19 | 5. Update `.ai-bridge/decisions.md` with the active summary.
20 |
21 | ## Accepted ADRs
22 |
23 | - [0001 — Standalone service](0001-standalone-service.md)
24 | - [0002 — Courier adapter boundary](0002-courier-adapter-boundary.md)
25 | - [0003 — Keep Steadfast session scraper](0003-keep-steadfast-session-scraper.md)
26 | - [0004 — Foundation technology direction](0004-foundation-technology-direction.md)
27 | - [0005 — Browser session authentication baseline](0005-browser-session-authentication.md)
28 |
29 | ## Pending ADRs
30 |
31 | - Managed identity provider or future authentication supersession
32 | - Queue/broker
33 | - Deployment platform
34 | - PostgreSQL provider
35 | - KMS/vault and envelope-encryption implementation
36 | - Cache/session storage
37 |
38 | Copy [template.md](template.md) for new decisions.
39 |
```

### docs/README.md

Bytes: 2132
SHA-256: c0f974c6ec9c76e255e0e927937a1ab79abb8b9b00d1375f280b560fe35fb298
Lines: 1-46 of 46

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Architecture
 6 |
 7 | - [Project overview](architecture/project-overview.md)
 8 | - [System architecture](architecture/system-architecture.md)
 9 | - [Initial repository audit](architecture/repository-audit.md)
10 | - [Reuse map from multi-store-saas](architecture/copy-map-from-multi-store-saas.md)
11 |
12 | ## Product contracts
13 |
14 | - [Public API specification](api/api-specification.md)
15 | - [Database design](database/database-design.md)
16 | - [Courier intelligence](courier/courier-intelligence.md)
17 | - [Canonical risk engine](risk-engine/risk-engine.md)
18 | - [Integrations](integrations/integrations.md)
19 |
20 | ## Security, quality, and operations
21 |
22 | - [Security and privacy](security/security-privacy.md)
23 | - [Testing strategy](testing/testing-strategy.md)
24 | - [Operations and observability](operations/operations-observability.md)
25 | - [Development environment](operations/development-environment.md)
26 | - [Deployment](operations/deployment.md)
27 |
28 | ## Delivery and continuation
29 |
30 | - [Implementation roadmap](roadmap/implementation-roadmap.md)
31 | - [Initial backlog](roadmap/initial-backlog.md)
32 | - [Risk register](roadmap/risk-register.md)
33 | - [Architecture decision records](adr/README.md)
34 | - [Current plan](../.ai-bridge/current-plan.md)
35 | - [Implementation status](../.ai-bridge/implementation-status.md)
36 | - [Decision log](../.ai-bridge/decisions.md)
37 | - [Full continuation context](../.ai-bridge/pro-context.md)
38 |
39 | ## Documentation rules
40 |
41 | - Change code and its contract documentation together.
42 | - Add a new ADR when changing a system boundary, infrastructure choice, data model strategy, or security model.
43 | - Never remove historical ADRs or edit already-applied migrations to make a new change appear older.
44 | - Update `../tracker.yml` and `../.ai-bridge/implementation-status.md` after every material milestone.
45 | - Keep remaining risks, external dependencies, rollback considerations, and verification evidence explicit.
46 |
```

### README.md

Bytes: 6541
SHA-256: 3c65d6d4937d28cd1fa7c5d7430ad7b92d4dada659256f6e61c073ed4943184e
Lines: 1-193 of 193

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
 27 | - PostgreSQL schema and five append-only migrations
 28 | - Argon2id user-password utilities and opaque user sessions
 29 | - Hash-only `ozg_test_` / `ozg_live_` API-key lifecycle utilities
 30 | - Organizations, stores, memberships, plans, usage events, audit events, and tenant scope
 31 | - Canonical `/v1/risk-assessments`, assessment read, outcome feedback, courier refresh, and OTP routes
 32 | - Deterministic explainable risk engine with explicit unknown/degraded handling
 33 | - Steadfast adapter, Playwright session driver, encrypted session storage, and runnable courier workers
 34 | - OTP provider abstraction with hashing, expiry, attempt limits, rate limits, and tenant binding
 35 | - Signed webhook delivery worker library with retry and SSRF protection
 36 | - Merchant dashboard and platform operations admin applications
 37 | - WooCommerce plugin, Shopify adapter, custom JavaScript/server adapter, and native multi-store adapter
 38 | - Docker, Docker Compose, and CI verification
 39 |
 40 | The following require external accounts or production decisions before live use:
 41 |
 42 | - Authorized Steadfast merchant/test credentials and provider-terms review
 43 | - Production KMS/vault instead of the local AES-GCM key implementation
 44 | - OTP provider selection and credentials
 45 | - Authenticated dashboard/admin live data wiring is complete; production hosting, distributed rate limiting, account recovery, MFA, and managed identity supersession remain
 46 | - Production queue/cache/observability providers
 47 | - Pilot outcome calibration before broad automatic blocking
 48 |
 49 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
 50 |
 51 | ## Repository structure
 52 |
 53 | ```text
 54 | apps/
 55 |   api/             Versioned API and PostgreSQL repositories
 56 |   dashboard/       Merchant operations dashboard
 57 |   admin/           Platform operations dashboard
 58 | workers/
 59 |   courier-session-worker/
 60 |   courier-sync-worker/
 61 |   verification-worker/
 62 |   event-worker/
 63 | packages/
 64 |   shared-types/
 65 |   risk-engine/
 66 |   courier-adapters/
 67 |   database/
 68 |   authentication/
 69 |   billing/
 70 |   verification/
 71 |   sdk/
 72 | integrations/
 73 |   woocommerce/
 74 |   shopify/
 75 |   custom-js/
 76 |   multi-store-saas/
 77 | docs/
 78 | .ai-bridge/
 79 | ```
 80 |
 81 | ## Core rules
 82 |
 83 | 1. There is exactly one canonical risk engine.
 84 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
 85 | 3. Courier providers are isolated behind adapters and asynchronous workers.
 86 | 4. Merchant data is always organization/store scoped.
 87 | 5. Unknown customers are not automatically safe.
 88 | 6. Provider failure does not automatically approve or block a customer.
 89 | 7. Every assessment returns explainable signals and confidence.
 90 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
 91 | 9. Applied migrations are immutable; changes require a new migration.
 92 | 10. Every integration consumes the same canonical API response.
 93 |
 94 | ## Local setup
 95 |
 96 | Prerequisites: Node.js 20+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
 97 |
 98 | ```bash
 99 | npm install
100 | npm run db:check
101 | npm run db:migrate
102 | npm run bootstrap -w @ozzyl/api
103 | npm run dev:api
104 | ```
105 |
106 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
107 |
108 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
109 |
110 | Merchant dashboard:
111 |
112 | ```bash
113 | npm run dev:dashboard
114 | ```
115 |
116 | Platform admin:
117 |
118 | ```bash
119 | npm run dev -w @ozzyl/admin
120 | ```
121 |
122 | Courier workers:
123 |
124 | ```bash
125 | npm run start -w @ozzyl/courier-session-worker
126 | npm run start -w @ozzyl/courier-sync-worker
127 | ```
128 |
129 | ## Docker Compose
130 |
131 | Provide the required variables in your shell or an ignored Compose environment file, then run:
132 |
133 | ```bash
134 | docker compose up --build
135 | ```
136 |
137 | The Compose topology separates PostgreSQL, migrations, API, Playwright session worker, and courier sync worker. Dashboard/admin static hosting is intentionally deployment-platform dependent.
138 |
139 | ## Verification commands
140 |
141 | ```bash
142 | npm run format:check
143 | npm run lint
144 | npm run db:check
145 | npm run typecheck
146 | npm run test
147 | npm run build
148 | npm audit --audit-level=high
149 | php -l integrations/woocommerce/ozzyl-guard.php
150 | ```
151 |
152 | ## Canonical assessment response
153 |
154 | ```json
155 | {
156 |   "success": true,
157 |   "assessment_id": "ras_123",
158 |   "risk_score": 72,
159 |   "risk_level": "high",
160 |   "decision": "verify",
161 |   "confidence": 0.82,
162 |   "signals": [
163 |     {
164 |       "code": "low_delivery_rate",
165 |       "score": 30,
166 |       "description": "Customer delivery rate is 28%"
167 |     }
168 |   ],
169 |   "courier_summary": {
170 |     "total": 12,
171 |     "delivered": 5,
172 |     "returned": 4,
173 |     "cancelled_before_shipping": 3
174 |   }
175 | }
176 | ```
177 |
178 | ## Documentation
179 |
180 | - [System architecture](docs/architecture/system-architecture.md)
181 | - [Public API specification](docs/api/api-specification.md)
182 | - [Database design](docs/database/database-design.md)
183 | - [Courier intelligence](docs/courier/courier-intelligence.md)
184 | - [Risk engine](docs/risk-engine/risk-engine.md)
185 | - [Integrations](docs/integrations/integrations.md)
186 | - [Security and privacy](docs/security/security-privacy.md)
187 | - [Testing strategy](docs/testing/testing-strategy.md)
188 | - [Operations](docs/operations/operations-observability.md)
189 | - [Roadmap](docs/roadmap/implementation-roadmap.md)
190 | - [ADRs](docs/adr/README.md)
191 |
192 | Before changing code, read `AGENTS.md`, the relevant domain documents, `.ai-bridge/current-plan.md`, `.ai-bridge/implementation-status.md`, and accepted ADRs.
193 |
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

Bytes: 5246
SHA-256: 45ffce172c807819239f5325b6c1a7b2b2708174f8fb0c7b30bd15722ddc8d3e
Lines: 1-85 of 85

```markdown
 1 | # Ozzyl Guard — Current Implementation Plan
 2 |
 3 | Updated: 2026-07-16
 4 |
 5 | ## Current state
 6 |
 7 | A runnable standalone MVP foundation is implemented and the first production-hardening slice is complete: dashboard/admin browser authentication, live PostgreSQL read models, tenant revalidation, platform-admin authorization, and PostgreSQL integration-test coverage are now present.
 8 |
 9 | ## Completed
10 |
11 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
12 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
13 | - [x] Canonical shared API/error/event contracts
14 | - [x] PostgreSQL/Drizzle schema and six append-only migrations
15 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
16 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
17 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
18 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
19 | - [x] Courier adapter contract and Steadfast normalized adapter
20 | - [x] Playwright Steadfast session driver with structured errors
21 | - [x] AES-GCM credential/session envelope boundary for local/self-hosted use
22 | - [x] Runnable PostgreSQL courier session and observation workers
23 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
24 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
25 | - [x] OTP hashing, expiry, rate/attempt limits, and tenant binding
26 | - [x] Signed webhook delivery library with replay timestamp and SSRF controls
27 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
28 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
29 | - [x] Explicit-role platform admin with live global operations data
30 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
31 | - [x] Docker/API/Playwright worker separation and PostgreSQL CI service
32 | - [x] Architecture dependency-boundary CI guard
33 |
34 | ## Verified on this workspace
35 |
36 | - Formatting check: passed
37 | - ESLint with zero warnings: passed
38 | - Six migration files ordered/non-empty/non-destructive: passed
39 | - Architecture import boundaries: passed
40 | - Typecheck: 18 of 18 workspaces passed
41 | - Test/build dependency tasks: 26 of 26 passed; 29 assertions passed and three PostgreSQL-only tests skipped locally
42 | - Production builds: 18 of 18 workspaces passed
43 | - WooCommerce PHP syntax: passed
44 | - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
45 | - GitHub Actions CI run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including three PostgreSQL browser-access integration tests
46 | - Canonical documentation links: 49 Markdown files checked, zero broken internal links
47 | - `tracker.yml` YAML parse: passed
48 | - Continuation bundle: refreshed and formatted
49 | - Prohibited source-pattern search: no matches
50 |
51 | A clean PostgreSQL migration apply cannot be executed locally because Docker/PostgreSQL is unavailable in this workspace. GitHub Actions run `29516535736` applied all six migrations against PostgreSQL 16 and passed all three browser-access PostgreSQL integration tests.
52 |
53 | ## Next production milestone
54 |
55 | 1. Select production hosting, PostgreSQL provider, KMS/vault, queue/cache, and observability through ADRs.
56 | 2. Expand PostgreSQL integration coverage for quota concurrency, idempotency races, migration replay, and additional repository isolation cases.
57 | 3. Replace local encryption-key handling with managed KMS envelope encryption.
58 | 4. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
59 | 5. Select and implement the OTP provider runner.
60 | 6. Add durable webhook outbox/event runner and verification queue runner.
61 | 7. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
62 | 8. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
63 |
64 | ## External blockers
65 |
66 | - Authorized Steadfast merchant/test credentials
67 | - Steadfast provider-terms and merchant-authorization review
68 | - Production KMS/vault choice and keys
69 | - OTP provider account and credentials
70 | - Hosting/database/queue/cache/observability selections
71 | - Production account recovery/MFA or managed identity-provider decision
72 | - Repository visibility correction from currently reported public to expected private
73 | - Pilot outcome data for false-positive/false-negative calibration
74 |
75 | ## Non-negotiable continuation rules
76 |
77 | - Do not add a second risk engine.
78 | - Do not call providers from the risk engine or synchronous checkout path.
79 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, or provider credentials.
80 | - Do not use API keys as dashboard user sessions.
81 | - Require organization/store scope in all merchant repositories and jobs.
82 | - Add new migrations; never edit applied migrations.
83 | - Keep unknown/provider failure explicit and policy-controlled.
84 | - Update `tracker.yml`, documentation, implementation status, and the continuation bundle with every material milestone.
85 |
```

### .ai-bridge/decisions.md

Bytes: 5417
SHA-256: a16e0be582f37e01c0ff5b8525bc6b9a87791c06a7b4d962312348e75eea7e2d
Lines: 1-70 of 70

```markdown
 1 | # Ozzyl Guard — Active Decisions
 2 |
 3 | Updated: 2026-07-16
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
24 |
25 | ## Source SaaS conflict resolutions
26 |
27 | | Conflict                                                                 | Decision                                                                                 |
28 | | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
29 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly |
30 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                               |
31 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                        |
32 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                       |
33 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                    |
34 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                             |
35 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                  |
36 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                               |
37 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                      |
38 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling          |
39 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                       |
40 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                   |
41 |
42 | ## Approved reuse scope
43 |
44 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
45 | - Bangladesh phone normalization after tests
46 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
47 | - WooCommerce settings/order hook/admin display skeleton
48 | - API-key hash/display-prefix and usage-event concepts
49 |
50 | No product source code was copied during Phase 0.
51 |
52 | ## Pending decisions
53 |
54 | These require separate ADRs before production implementation:
55 |
56 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
57 | - Queue/broker technology
58 | - API/dashboard/worker deployment platform
59 | - PostgreSQL hosting provider
60 | - KMS/vault and envelope-encryption implementation
61 | - Cache/session storage
62 | - Worker scheduler/runtime
63 | - OTP provider
64 |
65 | ## External requirements
66 |
67 | No credentials are needed for Phase 1 foundation.
68 |
69 | Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
70 |
```

### .ai-bridge/implementation-status.md

Bytes: 9360
SHA-256: 21f0ebb9ebd3f97864dc541b963a10f0c5fc70e013bf91f109549c2c8c9ca6b1
Lines: 1-104 of 104

```markdown
  1 | # Ozzyl Guard — Implementation Status
  2 |
  3 | Updated: 2026-07-16
  4 |
  5 | ## Status legend
  6 |
  7 | - `done`: implemented and locally verified
  8 | - `baseline`: implemented foundation; production wiring/calibration remains
  9 | - `blocked`: requires an external account, secret, provider, or architecture decision
 10 | - `deferred`: intentionally outside the current MVP
 11 |
 12 | ## Repository and delivery
 13 |
 14 | | Area                       | Status   | Notes                                                                                                                |
 15 | | -------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
 16 | | Documentation and ADRs     | done     | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and ADRs installed |
 17 | | Continuation documentation | done     | `tracker.yml`, `docs/README.md`, and `.ai-bridge/pro-context.md` provide new-chat and new-agent handoff context      |
 18 | | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private              |
 19 | | Monorepo/tooling           | done     | npm workspaces, Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, tsup                                          |
 20 | | CI                         | done     | PostgreSQL 16 migration apply, audit, format, lint, architecture, typecheck, tests, builds, PHP lint                 |
 21 | | Container baseline         | done     | Separate API, migration, PostgreSQL, Playwright session worker, and courier-sync services                            |
 22 | | Production platform ADRs   | blocked  | Hosting, managed PostgreSQL, KMS, queue/cache, and observability providers not selected                              |
 23 |
 24 | ## Product implementation
 25 |
 26 | | Area                             | Status   | Notes                                                                                                                                                |
 27 | | -------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
 28 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                                               |
 29 | | Database/migrations              | done     | Full schema and six append-only migrations; migration 0006 adds explicit platform role and live-read indexes; clean PostgreSQL 16 apply passed in CI |
 30 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                   |
 31 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                |
 32 | | API keys/usage/plans             | done     | Test/live prefixes, one-time raw reveal, hash-only persistence, scopes, revocation fields, atomic PostgreSQL usage reservation                       |
 33 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                        |
 34 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                        |
 35 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, encryption boundary, health state, runnable PG polling                                                |
 36 | | Courier observation worker/cache | done     | Durable jobs, `SKIP LOCKED` claiming, retry scheduling, normalized observation persistence                                                           |
 37 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                      |
 38 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits                                              |
 39 | | PostgreSQL API repositories      | done     | API keys, usage, features, assessments/signals, outcomes, idempotency, courier jobs                                                                  |
 40 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                          |
 41 | | Webhook delivery                 | baseline | HMAC, timestamp, SSRF controls, retries; durable outbox runner still needed                                                                          |
 42 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                             |
 43 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                 |
 44 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                  |
 45 | | Native multi-store adapter       | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending                                                    |
 46 | | OTP verification                 | baseline | Secure service abstraction and worker library; production provider/runner blocked                                                                    |
 47 | | Merchant dashboard               | done     | Argon2id login, opaque HttpOnly session, CSRF logout, authorized store switching, and live scoped overview/review/courier/usage data                 |
 48 | | Platform admin                   | done     | Explicit `platform_admin` role gate with authenticated live organization, assessment, backlog, webhook, incident, and provider data                  |
 49 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                            |
 50 |
 51 | ## Migrations
 52 |
 53 | 1. `0001_foundation.sql`
 54 | 2. `0002_courier.sql`
 55 | 3. `0003_risk.sql`
 56 | 4. `0004_verification_events.sql`
 57 | 5. `0005_durable_operations.sql`
 58 | 6. `0006_browser_access.sql`
 59 |
 60 | Applied migrations must remain immutable.
 61 |
 62 | ## Verification evidence
 63 |
 64 | - `npm run format:check`: passed
 65 | - `npm run lint`: passed with zero warnings
 66 | - `npm run db:check`: six migrations validated
 67 | - `npm run check:architecture`: passed
 68 | - `npm run typecheck`: 18/18 workspaces passed
 69 | - `npm run test`: 26/26 Turbo tasks passed; 29 assertions passed and three PostgreSQL browser-access integration tests skipped because local `DATABASE_URL` is unavailable
 70 | - `npm run build`: 18/18 workspace builds passed
 71 | - `npm audit --audit-level=high`: passed; four moderate dev-tooling findings remain
 72 | - GitHub Actions run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including 13/13 API tests and 3/3 PostgreSQL browser-access integration tests
 73 | - WooCommerce `php -l`: passed
 74 | - Canonical documentation link check: 49 files, zero broken links
 75 | - `tracker.yml` YAML parse: passed
 76 | - Continuation context bundle: refreshed and formatted
 77 | - Prohibited insecure-pattern scan: zero matches
 78 |
 79 | ## External blockers and production requirements
 80 |
 81 | - Authorized Steadfast test/merchant account
 82 | - Provider-terms and merchant-authorization review
 83 | - Production KMS/vault and key-rotation setup
 84 | - OTP provider selection/account
 85 | - Hosting, PostgreSQL, queue/cache, and observability ADRs
 86 | - Production account recovery/MFA or managed identity-provider decision
 87 | - Pilot merchants and verified outcome data for calibration
 88 |
 89 | ## Remaining risks
 90 |
 91 | - Steadfast UI/internal endpoint changes can break automation.
 92 | - Local AES-GCM key configuration is not a replacement for managed KMS in production.
 93 | - In-process API and browser-session rate limiting is not distributed across replicas.
 94 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
 95 | - GitHub currently reports public repository visibility although the expected policy is private.
 96 | - Webhook and OTP worker libraries need durable production runners/providers.
 97 | - PostgreSQL quota concurrency, idempotency races, and broader repository isolation still need expanded integration coverage.
 98 | - Four moderate development-tooling advisories remain; high/critical threshold is clear.
 99 | - Automatic blocking should remain merchant-controlled and disabled by default until pilot calibration.
100 |
101 | ## Next milestone
102 |
103 | Production hardening and pilot readiness: infrastructure ADRs, managed secrets, expanded PostgreSQL concurrency/idempotency/isolation tests, authorized Steadfast validation, OTP provider, durable event/verification runners, and native multi-store shadow rollout.
104 |
```

### .github/workflows/ci.yml

Bytes: 1294
SHA-256: 7ffd772358e161d4bda3213e8dde6a8c6d4ce184cba34a819e77829f3ed5a9c7
Lines: 1-52 of 52

```yaml
 1 | name: CI
 2 |
 3 | on:
 4 |   push:
 5 |     branches: [main]
 6 |   pull_request:
 7 |
 8 | permissions:
 9 |   contents: read
10 |
11 | jobs:
12 |   verify:
13 |     runs-on: ubuntu-latest
14 |     timeout-minutes: 20
15 |     services:
16 |       postgres:
17 |         image: postgres:16-alpine
18 |         env:
19 |           POSTGRES_USER: ozzyl_guard
20 |           POSTGRES_PASSWORD: ozzyl_guard
21 |           POSTGRES_DB: ozzyl_guard_test
22 |         ports:
23 |           - 5432:5432
24 |         options: >-
25 |           --health-cmd "pg_isready -U ozzyl_guard -d ozzyl_guard_test"
26 |           --health-interval 5s
27 |           --health-timeout 5s
28 |           --health-retries 10
29 |     env:
30 |       DATABASE_URL: postgresql://ozzyl_guard:ozzyl_guard@localhost:5432/ozzyl_guard_test
31 |     steps:
32 |       - uses: actions/checkout@v4
33 |       - uses: actions/setup-node@v4
34 |         with:
35 |           node-version: 20
36 |           cache: npm
37 |       - uses: shivammathur/setup-php@v2
38 |         with:
39 |           php-version: '8.2'
40 |           extensions: sodium
41 |       - run: npm ci
42 |       - run: npm audit --audit-level=high
43 |       - run: npm run format:check
44 |       - run: npm run lint
45 |       - run: npm run db:check
46 |       - run: npm run db:migrate
47 |       - run: npm run check:architecture
48 |       - run: npm run typecheck
49 |       - run: npm run test
50 |       - run: npm run build
51 |       - run: php -l integrations/woocommerce/ozzyl-guard.php
52 |
```

### apps/admin/src/main.tsx

Bytes: 10633
SHA-256: bd5b9ff782ac945d805547df0e7d333bfebadf1152265d0403d86f8304f3821c
Lines: 1-348 of 348

```typescript
  1 | import { StrictMode, useEffect, useState, type FormEvent } from 'react';
  2 | import { createRoot } from 'react-dom/client';
  3 | import type { BrowserSessionResponse, PlatformAdminOverview } from '@ozzyl/shared-types';
  4 | import './styles.css';
  5 |
  6 | function AdminApp() {
  7 |   const [session, setSession] = useState<BrowserSessionResponse | null>(null);
  8 |   const [overview, setOverview] = useState<PlatformAdminOverview | null>(null);
  9 |   const [loading, setLoading] = useState(true);
 10 |   const [error, setError] = useState<string | null>(null);
 11 |
 12 |   useEffect(() => {
 13 |     void loadSession();
 14 |   }, []);
 15 |
 16 |   async function loadSession() {
 17 |     setLoading(true);
 18 |     try {
 19 |       const response = await fetch('/auth/session', { credentials: 'include' });
 20 |       if (response.status === 401) return;
 21 |       const body = await readJson<BrowserSessionResponse>(response);
 22 |       setSession(body);
 23 |       if (body.user.platform_role !== 'platform_admin') {
 24 |         setError('This account is not authorized for platform administration.');
 25 |         return;
 26 |       }
 27 |       await loadOverview();
 28 |     } catch (caught) {
 29 |       setError(errorMessage(caught));
 30 |     } finally {
 31 |       setLoading(false);
 32 |     }
 33 |   }
 34 |
 35 |   async function loadOverview() {
 36 |     const response = await fetch('/admin/v1/overview', { credentials: 'include' });
 37 |     if (response.status === 401) {
 38 |       setSession(null);
 39 |       setOverview(null);
 40 |       return;
 41 |     }
 42 |     setOverview(await readJson<PlatformAdminOverview>(response));
 43 |   }
 44 |
 45 |   async function handleLogin(email: string, password: string) {
 46 |     setLoading(true);
 47 |     setError(null);
 48 |     try {
 49 |       const response = await fetch('/auth/login', {
 50 |         method: 'POST',
 51 |         credentials: 'include',
 52 |         headers: { 'Content-Type': 'application/json' },
 53 |         body: JSON.stringify({ email, password }),
 54 |       });
 55 |       const body = await readJson<BrowserSessionResponse>(response);
 56 |       setSession(body);
 57 |       if (body.user.platform_role !== 'platform_admin') {
 58 |         setError('This account is not authorized for platform administration.');
 59 |         return;
 60 |       }
 61 |       await loadOverview();
 62 |     } catch (caught) {
 63 |       setError(errorMessage(caught));
 64 |     } finally {
 65 |       setLoading(false);
 66 |     }
 67 |   }
 68 |
 69 |   async function handleLogout() {
 70 |     if (!session) return;
 71 |     setLoading(true);
 72 |     try {
 73 |       await readJson(
 74 |         await fetch('/auth/logout', {
 75 |           method: 'POST',
 76 |           credentials: 'include',
 77 |           headers: { 'X-CSRF-Token': session.csrf_token },
 78 |         }),
 79 |       );
 80 |       setSession(null);
 81 |       setOverview(null);
 82 |       setError(null);
 83 |     } catch (caught) {
 84 |       setError(errorMessage(caught));
 85 |     } finally {
 86 |       setLoading(false);
 87 |     }
 88 |   }
 89 |
 90 |   if (loading && !session) return <div className="admin-loading">Checking secure session…</div>;
 91 |   if (!session) return <AdminLogin error={error} loading={loading} onLogin={handleLogin} />;
 92 |   if (session.user.platform_role !== 'platform_admin') {
 93 |     return (
 94 |       <main className="admin-shell">
 95 |         <AccessDenied email={session.user.email} error={error} onLogout={handleLogout} />
 96 |       </main>
 97 |     );
 98 |   }
 99 |   if (!overview) return <div className="admin-loading">Loading platform operations…</div>;
100 |
101 |   return (
102 |     <main className="admin-shell">
103 |       <header>
104 |         <div>
105 |           <p>OZZYL GUARD PLATFORM</p>
106 |           <h1>Operations Admin</h1>
107 |           <small>{session.user.email}</small>
108 |         </div>
109 |         <div className="header-actions">
110 |           <span>Live · Asia/Dhaka</span>
111 |           <button disabled={loading} onClick={() => void handleLogout()} type="button">
112 |             Sign out
113 |           </button>
114 |         </div>
115 |       </header>
116 |       {error && <div className="admin-error">{error}</div>}
117 |       <section className="stats">
118 |         <Stat
119 |           label="Active organizations"
120 |           value={number(overview.summary.active_organizations)}
121 |           detail={`${number(overview.summary.active_stores)} stores`}
122 |         />
123 |         <Stat
124 |           label="Assessments today"
125 |           value={number(overview.summary.assessments_today)}
126 |           detail={`${overview.summary.degraded_percentage}% degraded`}
127 |         />
128 |         <Stat
129 |           label="Worker backlog"
130 |           value={number(overview.summary.worker_backlog)}
131 |           detail="Queued or processing courier jobs"
132 |         />
133 |         <Stat
134 |           label="Failed webhooks"
135 |           value={number(overview.summary.failed_webhooks)}
136 |           detail="Current failed delivery state"
137 |         />
138 |       </section>
139 |
140 |       <section className="grid">
141 |         <article>
142 |           <div className="heading">
143 |             <h2>Operational incidents</h2>
144 |             <span className={overview.incidents.length === 0 ? 'healthy' : 'medium'}>
145 |               {overview.incidents.length === 0 ? 'Clear' : `${overview.incidents.length} active`}
146 |             </span>
147 |           </div>
148 |           {overview.incidents.map((incident) => (
149 |             <div className="row" key={incident.code}>
150 |               <div>
151 |                 <strong>{incident.title}</strong>
152 |                 <small>{incident.detail}</small>
153 |               </div>
154 |               <span className={incident.severity}>{incident.severity}</span>
155 |             </div>
156 |           ))}
157 |           {overview.incidents.length === 0 && (
158 |             <p className="note">No live operational incident is open.</p>
159 |           )}
160 |         </article>
161 |         <article>
162 |           <div className="heading">
163 |             <h2>Pilot safety</h2>
164 |             <span className="healthy">Enforced</span>
165 |           </div>
166 |           <div className="policy">
167 |             <strong>Broad automatic blocking</strong>
168 |             <span>{overview.automatic_blocking.broadly_enabled ? 'Enabled' : 'Disabled'}</span>
169 |           </div>
170 |           <div className="bar">
171 |             <i style={{ width: '0%' }} />
172 |           </div>
173 |           <p className="note">{overview.automatic_blocking.reason}</p>
174 |         </article>
175 |       </section>
176 |
177 |       <section className="grid">
178 |         <article>
179 |           <div className="heading">
180 |             <h2>Provider health</h2>
181 |           </div>
182 |           {overview.providers.map((provider) => (
183 |             <Provider
184 |               key={provider.name}
185 |               metric={provider.metric}
186 |               name={provider.name}
187 |               state={provider.state}
188 |             />
189 |           ))}
190 |           {overview.providers.length === 0 && (
191 |             <p className="note">No courier provider accounts exist yet.</p>
192 |           )}
193 |         </article>
194 |         <article>
195 |           <div className="heading">
196 |             <h2>Security controls</h2>
197 |           </div>
198 |           <Provider
199 |             name="Browser sessions"
200 |             state="enforced"
201 |             metric="Opaque HttpOnly cookie and CSRF"
202 |           />
203 |           <Provider
204 |             name="Tenant isolation"
205 |             state="enforced"
206 |             metric="Organization and store scope required"
207 |           />
208 |           <Provider
209 |             name="Service credentials"
210 |             state="separate"
211 |             metric="API keys are not dashboard sessions"
212 |           />
213 |           <Provider name="Generated at" state="live" metric={formatDate(overview.generated_at)} />
214 |         </article>
215 |       </section>
216 |     </main>
217 |   );
218 | }
219 |
220 | function AdminLogin({
221 |   error,
222 |   loading,
223 |   onLogin,
224 | }: {
225 |   error: string | null;
226 |   loading: boolean;
227 |   onLogin(email: string, password: string): Promise<void>;
228 | }) {
229 |   const [email, setEmail] = useState('');
230 |   const [password, setPassword] = useState('');
231 |   function submit(event: FormEvent<HTMLFormElement>) {
232 |     event.preventDefault();
233 |     void onLogin(email, password);
234 |   }
235 |   return (
236 |     <main className="admin-auth">
237 |       <form className="admin-auth-card" onSubmit={submit}>
238 |         <div>
239 |           <p>OZZYL GUARD PLATFORM</p>
240 |           <h1>Operations Admin</h1>
241 |           <small>Explicit platform-admin authorization is required.</small>
242 |         </div>
243 |         <label>
244 |           Email
245 |           <input
246 |             autoComplete="email"
247 |             onChange={(event) => setEmail(event.target.value)}
248 |             required
249 |             type="email"
250 |             value={email}
251 |           />
252 |         </label>
253 |         <label>
254 |           Password
255 |           <input
256 |             autoComplete="current-password"
257 |             minLength={10}
258 |             onChange={(event) => setPassword(event.target.value)}
259 |             required
260 |             type="password"
261 |             value={password}
262 |           />
263 |         </label>
264 |         {error && <div className="admin-error">{error}</div>}
265 |         <button disabled={loading} type="submit">
266 |           {loading ? 'Signing in…' : 'Sign in'}
267 |         </button>
268 |       </form>
269 |     </main>
270 |   );
271 | }
272 |
273 | function AccessDenied({
274 |   email,
275 |   error,
276 |   onLogout,
277 | }: {
278 |   email: string;
279 |   error: string | null;
280 |   onLogout(): Promise<void>;
281 | }) {
282 |   return (
283 |     <article className="access-denied">
284 |       <p>ACCESS DENIED</p>
285 |       <h1>Platform administrator role required</h1>
286 |       <span>{email}</span>
287 |       <small>{error ?? 'Merchant users cannot access global operational data.'}</small>
288 |       <button onClick={() => void onLogout()} type="button">
289 |         Sign out
290 |       </button>
291 |     </article>
292 |   );
293 | }
294 |
295 | function Stat({ label, value, detail }: { label: string; value: string; detail: string }) {
296 |   return (
297 |     <article className="stat">
298 |       <span>{label}</span>
299 |       <strong>{value}</strong>
300 |       <small>{detail}</small>
301 |     </article>
302 |   );
303 | }
304 |
305 | function Provider({ name, state, metric }: { name: string; state: string; metric: string }) {
306 |   const healthy = ['operational', 'enforced', 'separate', 'live'].includes(state);
307 |   return (
308 |     <div className="row">
309 |       <div>
310 |         <strong>{name}</strong>
311 |         <small>{metric}</small>
312 |       </div>
313 |       <span className={healthy ? 'healthy' : 'medium'}>{state}</span>
314 |     </div>
315 |   );
316 | }
317 |
318 | async function readJson<T = { success: true }>(response: Response): Promise<T> {
319 |   const body = (await response.json()) as T & { error?: { message?: string } };
320 |   if (!response.ok)
321 |     throw new Error(body.error?.message ?? `Request failed with status ${response.status}`);
322 |   return body;
323 | }
324 |
325 | function errorMessage(error: unknown): string {
326 |   return error instanceof Error ? error.message : 'The request could not be completed';
327 | }
328 |
329 | function number(value: number): string {
330 |   return new Intl.NumberFormat('en-BD').format(value);
331 | }
332 |
333 | function formatDate(value: string): string {
334 |   return new Intl.DateTimeFormat('en-BD', {
335 |     dateStyle: 'medium',
336 |     timeStyle: 'short',
337 |     timeZone: 'Asia/Dhaka',
338 |   }).format(new Date(value));
339 | }
340 |
341 | const root = document.getElementById('root');
342 | if (!root) throw new Error('Admin root element was not found');
343 | createRoot(root).render(
344 |   <StrictMode>
345 |     <AdminApp />
346 |   </StrictMode>,
347 | );
348 |
```

### apps/api/src/browser.test.ts

Bytes: 7194
SHA-256: 78f85293f1a2619e4da348254213a2166ee7a1e77ddb6be03c4222fd009989b1
Lines: 1-225 of 225

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import type { MerchantDashboardOverview, PlatformAdminOverview } from '@ozzyl/shared-types';
  3 | import { createBrowserApi, type BrowserAuthService, type UserSessionIdentity } from './browser.js';
  4 | import { MemoryRateLimiter } from './index.js';
  5 |
  6 | const now = new Date('2026-07-16T15:00:00.000Z');
  7 | const csrfFixture = 'x'.repeat(32);
  8 | const credentialFixture = 'fixture-value-for-browser-login';
  9 | const sessionFixture = 'fixture-value-for-browser-session';
 10 |
 11 | const merchantIdentity: UserSessionIdentity = {
 12 |   sessionId: 'ses_1',
 13 |   userId: 'usr_1',
 14 |   email: 'owner@example.com',
 15 |   platformRole: 'merchant',
 16 |   expiresAt: '2026-07-23T15:00:00.000Z',
 17 |   organizations: [
 18 |     {
 19 |       id: 'org_1',
 20 |       name: 'Merchant One',
 21 |       role: 'owner',
 22 |       stores: [
 23 |         {
 24 |           id: 'store_1',
 25 |           organization_id: 'org_1',
 26 |           name: 'Primary Store',
 27 |           platform: 'woocommerce',
 28 |           status: 'active',
 29 |         },
 30 |       ],
 31 |     },
 32 |   ],
 33 | };
 34 |
 35 | const merchantOverview: MerchantDashboardOverview = {
 36 |   success: true,
 37 |   generated_at: now.toISOString(),
 38 |   scope: {
 39 |     organization_id: 'org_1',
 40 |     organization_name: 'Merchant One',
 41 |     store_id: 'store_1',
 42 |     store_name: 'Primary Store',
 43 |     platform: 'woocommerce',
 44 |     role: 'owner',
 45 |   },
 46 |   summary: {
 47 |     assessments_30d: 12,
 48 |     degraded_30d: 2,
 49 |     pending_reviews: 3,
 50 |     verified_30d: 4,
 51 |     usage_month: 12,
 52 |     usage_limit: 100,
 53 |   },
 54 |   decisions: { allow: 9, verify: 1, review: 1, hold: 1, block: 0 },
 55 |   reviews: [
 56 |     {
 57 |       assessment_id: 'ras_1',
 58 |       external_order_id: 'WC-1',
 59 |       phone_masked: '017****5678',
 60 |       risk_score: 61,
 61 |       decision: 'hold',
 62 |       confidence: 0.8,
 63 |       signals: [{ code: 'low_delivery_rate', score: 30, description: 'Low delivery rate' }],
 64 |       created_at: now.toISOString(),
 65 |     },
 66 |   ],
 67 |   couriers: [
 68 |     {
 69 |       provider: 'steadfast',
 70 |       status: 'connected',
 71 |       last_success_at: now.toISOString(),
 72 |       last_failure_at: null,
 73 |       failure_code: null,
 74 |     },
 75 |   ],
 76 | };
 77 |
 78 | const adminOverview: PlatformAdminOverview = {
 79 |   success: true,
 80 |   generated_at: now.toISOString(),
 81 |   summary: {
 82 |     active_organizations: 2,
 83 |     active_stores: 3,
 84 |     assessments_today: 20,
 85 |     degraded_percentage: 5,
 86 |     worker_backlog: 1,
 87 |     failed_webhooks: 0,
 88 |   },
 89 |   incidents: [],
 90 |   providers: [{ name: 'steadfast', state: 'operational', metric: '2 connected; 0 need attention' }],
 91 |   automatic_blocking: {
 92 |     broadly_enabled: false,
 93 |     reason: 'Pilot calibration is required.',
 94 |   },
 95 | };
 96 |
 97 | function createTestApp(identity: UserSessionIdentity = merchantIdentity) {
 98 |   let revoked = false;
 99 |   const auth: BrowserAuthService = {
100 |     async login(email, credential) {
101 |       if (email !== identity.email || credential !== credentialFixture) return null;
102 |       return { rawToken: sessionFixture, identity };
103 |     },
104 |     async resolve(rawToken) {
105 |       return rawToken === sessionFixture && !revoked ? identity : null;
106 |     },
107 |     async revoke() {
108 |       revoked = true;
109 |     },
110 |   };
111 |   const loadOverview = vi.fn(async () => merchantOverview);
112 |   const loadAdminOverview = vi.fn(async () => adminOverview);
113 |   const audit = vi.fn(async () => undefined);
114 |   return {
115 |     app: createBrowserApi({
116 |       auth,
117 |       dashboard: { loadOverview },
118 |       admin: { loadOverview: loadAdminOverview },
119 |       audit: { record: audit },
120 |       rateLimiter: new MemoryRateLimiter(),
121 |       csrfSecret: csrfFixture,
122 |       now: () => now,
123 |     }),
124 |     loadOverview,
125 |     loadAdminOverview,
126 |     audit,
127 |   };
128 | }
129 |
130 | async function login(app: ReturnType<typeof createTestApp>['app']) {
131 |   const response = await app.request('/auth/login', {
132 |     method: 'POST',
133 |     headers: { 'Content-Type': 'application/json' },
134 |     body: JSON.stringify({ email: merchantIdentity.email, password: credentialFixture }),
135 |   });
136 |   const body = (await response.json()) as { csrf_token: string };
137 |   const cookie = response.headers.get('set-cookie')?.split(';')[0];
138 |   if (!cookie) throw new Error('Session cookie was not returned');
139 |   return { response, body, cookie };
140 | }
141 |
142 | describe('browser authentication and live data API', () => {
143 |   it('creates an opaque HttpOnly session and resolves it without exposing the raw token', async () => {
144 |     const { app } = createTestApp();
145 |     const loggedIn = await login(app);
146 |     expect(loggedIn.response.status).toBe(200);
147 |     expect(loggedIn.response.headers.get('set-cookie')).toContain('HttpOnly');
148 |     expect(JSON.stringify(loggedIn.body)).not.toContain(sessionFixture);
149 |
150 |     const session = await app.request('/auth/session', {
151 |       headers: { Cookie: loggedIn.cookie },
152 |     });
153 |     expect(session.status).toBe(200);
154 |     await expect(session.json()).resolves.toMatchObject({
155 |       success: true,
156 |       user: { email: merchantIdentity.email, platform_role: 'merchant' },
157 |       organizations: [{ id: 'org_1', stores: [{ id: 'store_1' }] }],
158 |     });
159 |   });
160 |
161 |   it('requires a user session for dashboard data', async () => {
162 |     const { app } = createTestApp();
163 |     const response = await app.request(
164 |       '/dashboard/v1/overview?organization_id=org_1&store_id=store_1',
165 |     );
166 |     expect(response.status).toBe(401);
167 |   });
168 |
169 |   it('returns tenant-scoped dashboard data and hides unauthorized stores', async () => {
170 |     const { app, loadOverview } = createTestApp();
171 |     const loggedIn = await login(app);
172 |     const allowed = await app.request(
173 |       '/dashboard/v1/overview?organization_id=org_1&store_id=store_1',
174 |       { headers: { Cookie: loggedIn.cookie } },
175 |     );
176 |     expect(allowed.status).toBe(200);
177 |     await expect(allowed.json()).resolves.toMatchObject({
178 |       scope: { organization_id: 'org_1', store_id: 'store_1' },
179 |       summary: { assessments_30d: 12 },
180 |     });
181 |     expect(loadOverview).toHaveBeenCalledWith({
182 |       userId: 'usr_1',
183 |       organizationId: 'org_1',
184 |       storeId: 'store_1',
185 |       now,
186 |     });
187 |
188 |     const denied = await app.request(
189 |       '/dashboard/v1/overview?organization_id=org_2&store_id=store_2',
190 |       { headers: { Cookie: loggedIn.cookie } },
191 |     );
192 |     expect(denied.status).toBe(404);
193 |     expect(loadOverview).toHaveBeenCalledTimes(1);
194 |   });
195 |
196 |   it('requires an explicit platform-admin role and keeps broad blocking disabled', async () => {
197 |     const merchant = createTestApp();
198 |     const merchantLogin = await login(merchant.app);
199 |     const denied = await merchant.app.request('/admin/v1/overview', {
200 |       headers: { Cookie: merchantLogin.cookie },
201 |     });
202 |     expect(denied.status).toBe(403);
203 |
204 |     const admin = createTestApp({ ...merchantIdentity, platformRole: 'platform_admin' });
205 |     const adminLogin = await login(admin.app);
206 |     const allowed = await admin.app.request('/admin/v1/overview', {
207 |       headers: { Cookie: adminLogin.cookie },
208 |     });
209 |     expect(allowed.status).toBe(200);
210 |     await expect(allowed.json()).resolves.toMatchObject({
211 |       automatic_blocking: { broadly_enabled: false },
212 |     });
213 |   });
214 |
215 |   it('rejects logout requests without CSRF proof', async () => {
216 |     const { app } = createTestApp();
217 |     const loggedIn = await login(app);
218 |     const response = await app.request('/auth/logout', {
219 |       method: 'POST',
220 |       headers: { Cookie: loggedIn.cookie },
221 |     });
222 |     expect(response.status).toBe(403);
223 |   });
224 | });
225 |
```

### apps/api/src/browser.ts

Bytes: 12425
SHA-256: 43d33d7266c6ffb9f53cfb34534be54e18b5deb8000ce9bd3bad2a24e1c70659
Lines: 1-382 of 382

```typescript
  1 | import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
  2 | import { Hono, type Context } from 'hono';
  3 | import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
  4 | import { z } from 'zod';
  5 | import {
  6 |   browserSessionResponseSchema,
  7 |   merchantDashboardOverviewSchema,
  8 |   platformAdminOverviewSchema,
  9 |   type BrowserOrganization,
 10 |   type BrowserSessionResponse,
 11 |   type MerchantDashboardOverview,
 12 |   type PlatformAdminOverview,
 13 |   type PlatformRole,
 14 | } from '@ozzyl/shared-types';
 15 | import type { RateLimiter } from './index.js';
 16 |
 17 | const SESSION_COOKIE = 'ozzyl_session';
 18 | const loginSchema = z.object({
 19 |   email: z
 20 |     .string()
 21 |     .email()
 22 |     .max(320)
 23 |     .transform((value) => value.trim().toLowerCase()),
 24 |   password: z.string().min(10).max(1_000),
 25 | });
 26 | const dashboardScopeSchema = z.object({
 27 |   organization_id: z.string().min(1).max(200),
 28 |   store_id: z.string().min(1).max(200),
 29 | });
 30 |
 31 | export interface UserSessionIdentity {
 32 |   sessionId: string;
 33 |   userId: string;
 34 |   email: string;
 35 |   platformRole: PlatformRole;
 36 |   expiresAt: string;
 37 |   organizations: BrowserOrganization[];
 38 | }
 39 |
 40 | export interface BrowserLoginResult {
 41 |   rawToken: string;
 42 |   identity: UserSessionIdentity;
 43 | }
 44 |
 45 | export interface BrowserAuthService {
 46 |   login(email: string, password: string): Promise<BrowserLoginResult | null>;
 47 |   resolve(rawToken: string): Promise<UserSessionIdentity | null>;
 48 |   revoke(input: { sessionId: string; userId: string }): Promise<void>;
 49 | }
 50 |
 51 | export interface MerchantDashboardRepository {
 52 |   loadOverview(input: {
 53 |     userId: string;
 54 |     organizationId: string;
 55 |     storeId: string;
 56 |     now: Date;
 57 |   }): Promise<MerchantDashboardOverview | null>;
 58 | }
 59 |
 60 | export interface PlatformAdminRepository {
 61 |   loadOverview(input: { userId: string; now: Date }): Promise<PlatformAdminOverview | null>;
 62 | }
 63 |
 64 | export interface BrowserAuditRepository {
 65 |   record(input: {
 66 |     organizationId: string | null;
 67 |     actorId: string | null;
 68 |     action: string;
 69 |     targetType?: string;
 70 |     targetId?: string;
 71 |     metadata?: Record<string, unknown>;
 72 |   }): Promise<void>;
 73 | }
 74 |
 75 | export interface BrowserApiDependencies {
 76 |   auth: BrowserAuthService;
 77 |   dashboard: MerchantDashboardRepository;
 78 |   admin: PlatformAdminRepository;
 79 |   audit: BrowserAuditRepository;
 80 |   rateLimiter: RateLimiter;
 81 |   csrfSecret: string;
 82 |   secureCookies?: boolean;
 83 |   now?: () => Date;
 84 | }
 85 |
 86 | type BrowserEnvironment = {
 87 |   Variables: {
 88 |     requestId: string;
 89 |   };
 90 | };
 91 |
 92 | export function createBrowserApi(dependencies: BrowserApiDependencies): Hono<BrowserEnvironment> {
 93 |   const app = new Hono<BrowserEnvironment>();
 94 |   const now = dependencies.now ?? (() => new Date());
 95 |
 96 |   app.use('*', async (context, next) => {
 97 |     const requestId = context.req.header('X-Request-ID')?.slice(0, 200) || randomUUID();
 98 |     context.set('requestId', requestId);
 99 |     await next();
100 |     context.header('X-Request-ID', requestId);
101 |     context.header('Cache-Control', 'no-store');
102 |   });
103 |
104 |   app.post('/auth/login', async (context) => {
105 |     const requestId = context.get('requestId');
106 |     const parsed = await parseJson(context.req.raw, loginSchema);
107 |     if (!parsed.success) return browserError(requestId, 400, 'INVALID_REQUEST', parsed.message);
108 |
109 |     const rateLimitKey = `browser-login:${parsed.value.email}`;
110 |     const allowed = await dependencies.rateLimiter.consume(rateLimitKey, 10, 15 * 60_000);
111 |     if (!allowed) return browserError(requestId, 429, 'RATE_LIMITED', 'Too many login attempts');
112 |
113 |     const result = await dependencies.auth.login(parsed.value.email, parsed.value.password);
114 |     if (!result) {
115 |       await dependencies.audit.record({
116 |         organizationId: null,
117 |         actorId: null,
118 |         action: 'authentication.login_failed',
119 |         metadata: { requestId },
120 |       });
121 |       return browserError(requestId, 401, 'INVALID_CREDENTIALS', 'Email or password is incorrect');
122 |     }
123 |
124 |     setSessionCookie(
125 |       context,
126 |       result.rawToken,
127 |       result.identity.expiresAt,
128 |       dependencies.secureCookies,
129 |     );
130 |     await dependencies.audit.record({
131 |       organizationId: result.identity.organizations[0]?.id ?? null,
132 |       actorId: result.identity.userId,
133 |       action: 'authentication.login_succeeded',
134 |       targetType: 'user_session',
135 |       targetId: result.identity.sessionId,
136 |       metadata: { requestId },
137 |     });
138 |     return context.json(
139 |       buildSessionResponse(result.identity, result.rawToken, dependencies.csrfSecret),
140 |     );
141 |   });
142 |
143 |   app.get('/auth/session', async (context) => {
144 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
145 |     if (!authenticated.success) return authenticated.response;
146 |     return context.json(
147 |       buildSessionResponse(authenticated.identity, authenticated.rawToken, dependencies.csrfSecret),
148 |     );
149 |   });
150 |
151 |   app.post('/auth/logout', async (context) => {
152 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
153 |     if (!authenticated.success) return authenticated.response;
154 |     const csrfHeader = context.req.header('X-CSRF-Token');
155 |     if (!verifyCsrfToken(authenticated.rawToken, csrfHeader, dependencies.csrfSecret)) {
156 |       return browserError(context.get('requestId'), 403, 'CSRF_REJECTED', 'CSRF token is invalid');
157 |     }
158 |
159 |     await dependencies.auth.revoke({
160 |       sessionId: authenticated.identity.sessionId,
161 |       userId: authenticated.identity.userId,
162 |     });
163 |     deleteCookie(context, SESSION_COOKIE, { path: '/' });
164 |     await dependencies.audit.record({
165 |       organizationId: authenticated.identity.organizations[0]?.id ?? null,
166 |       actorId: authenticated.identity.userId,
167 |       action: 'authentication.logout',
168 |       targetType: 'user_session',
169 |       targetId: authenticated.identity.sessionId,
170 |       metadata: { requestId: context.get('requestId') },
171 |     });
172 |     return context.json({ success: true as const });
173 |   });
174 |
175 |   app.get('/dashboard/v1/overview', async (context) => {
176 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
177 |     if (!authenticated.success) return authenticated.response;
178 |     const parsedScope = dashboardScopeSchema.safeParse({
179 |       organization_id: context.req.query('organization_id'),
180 |       store_id: context.req.query('store_id'),
181 |     });
182 |     if (!parsedScope.success) {
183 |       return browserError(
184 |         context.get('requestId'),
185 |         400,
186 |         'INVALID_SCOPE',
187 |         'organization_id and store_id are required',
188 |       );
189 |     }
190 |     const allowedScope = findMerchantScope(
191 |       authenticated.identity,
192 |       parsedScope.data.organization_id,
193 |       parsedScope.data.store_id,
194 |     );
195 |     if (!allowedScope) {
196 |       return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
197 |     }
198 |
199 |     const overview = await dependencies.dashboard.loadOverview({
200 |       userId: authenticated.identity.userId,
201 |       organizationId: allowedScope.organization.id,
202 |       storeId: allowedScope.store.id,
203 |       now: now(),
204 |     });
205 |     if (!overview) {
206 |       return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
207 |     }
208 |     await dependencies.audit.record({
209 |       organizationId: allowedScope.organization.id,
210 |       actorId: authenticated.identity.userId,
211 |       action: 'dashboard.overview_viewed',
212 |       targetType: 'store',
213 |       targetId: allowedScope.store.id,
214 |       metadata: { requestId: context.get('requestId') },
215 |     });
216 |     return context.json(merchantDashboardOverviewSchema.parse(overview));
217 |   });
218 |
219 |   app.get('/admin/v1/overview', async (context) => {
220 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
221 |     if (!authenticated.success) return authenticated.response;
222 |     if (authenticated.identity.platformRole !== 'platform_admin') {
223 |       return browserError(
224 |         context.get('requestId'),
225 |         403,
226 |         'PLATFORM_ADMIN_REQUIRED',
227 |         'Platform administrator access is required',
228 |       );
229 |     }
230 |     const overview = await dependencies.admin.loadOverview({
231 |       userId: authenticated.identity.userId,
232 |       now: now(),
233 |     });
234 |     if (!overview) {
235 |       return browserError(
236 |         context.get('requestId'),
237 |         403,
238 |         'PLATFORM_ADMIN_REQUIRED',
239 |         'Platform administrator access is required',
240 |       );
241 |     }
242 |     await dependencies.audit.record({
243 |       organizationId: null,
244 |       actorId: authenticated.identity.userId,
245 |       action: 'platform_admin.overview_viewed',
246 |       targetType: 'platform',
247 |       targetId: 'ozzyl-guard',
248 |       metadata: { requestId: context.get('requestId') },
249 |     });
250 |     return context.json(platformAdminOverviewSchema.parse(overview));
251 |   });
252 |
253 |   return app;
254 | }
255 |
256 | function buildSessionResponse(
257 |   identity: UserSessionIdentity,
258 |   rawToken: string,
259 |   csrfSecret: string,
260 | ): BrowserSessionResponse {
261 |   return browserSessionResponseSchema.parse({
262 |     success: true,
263 |     user: {
264 |       id: identity.userId,
265 |       email: identity.email,
266 |       platform_role: identity.platformRole,
267 |     },
268 |     organizations: identity.organizations,
269 |     csrf_token: csrfToken(rawToken, csrfSecret),
270 |     expires_at: identity.expiresAt,
271 |   });
272 | }
273 |
274 | async function authenticateBrowserRequest(
275 |   context: Context<BrowserEnvironment>,
276 |   dependencies: BrowserApiDependencies,
277 | ): Promise<
278 |   | { success: true; identity: UserSessionIdentity; rawToken: string }
279 |   | { success: false; response: Response }
280 | > {
281 |   const requestId = context.get('requestId');
282 |   const rawToken = getCookie(context, SESSION_COOKIE);
283 |   if (!rawToken) {
284 |     return {
285 |       success: false,
286 |       response: browserError(requestId, 401, 'USER_SESSION_REQUIRED', 'A user session is required'),
287 |     };
288 |   }
289 |   const identity = await dependencies.auth.resolve(rawToken);
290 |   if (!identity) {
291 |     deleteCookie(context, SESSION_COOKIE, { path: '/' });
292 |     return {
293 |       success: false,
294 |       response: browserError(
295 |         requestId,
296 |         401,
297 |         'USER_SESSION_INVALID',
298 |         'User session is invalid or expired',
299 |       ),
300 |     };
301 |   }
302 |   const allowed = await dependencies.rateLimiter.consume(
303 |     `browser-session:${identity.sessionId}`,
304 |     300,
305 |     60_000,
306 |   );
307 |   if (!allowed) {
308 |     return {
309 |       success: false,
310 |       response: browserError(requestId, 429, 'RATE_LIMITED', 'Too many requests'),
311 |     };
312 |   }
313 |   return { success: true, identity, rawToken };
314 | }
315 |
316 | function findMerchantScope(identity: UserSessionIdentity, organizationId: string, storeId: string) {
317 |   const organization = identity.organizations.find((item) => item.id === organizationId);
318 |   const store = organization?.stores.find((item) => item.id === storeId);
319 |   return organization && store ? { organization, store } : null;
320 | }
321 |
322 | function setSessionCookie(
323 |   context: Parameters<typeof setCookie>[0],
324 |   rawToken: string,
325 |   expiresAt: string,
326 |   secure = false,
327 | ): void {
328 |   const expires = new Date(expiresAt);
329 |   const maxAge = Math.max(0, Math.floor((expires.getTime() - Date.now()) / 1_000));
330 |   setCookie(context, SESSION_COOKIE, rawToken, {
331 |     httpOnly: true,
332 |     secure,
333 |     sameSite: 'Lax',
334 |     path: '/',
335 |     expires,
336 |     maxAge,
337 |   });
338 | }
339 |
340 | function csrfToken(rawToken: string, secret: string): string {
341 |   if (secret.length < 16) throw new Error('SESSION_CSRF_SECRET must be at least 16 characters');
342 |   return createHmac('sha256', secret).update(rawToken).digest('base64url');
343 | }
344 |
345 | function verifyCsrfToken(rawToken: string, candidate: string | undefined, secret: string): boolean {
346 |   if (!candidate) return false;
347 |   const actual = Buffer.from(csrfToken(rawToken, secret));
348 |   const provided = Buffer.from(candidate);
349 |   return actual.length === provided.length && timingSafeEqual(actual, provided);
350 | }
351 |
352 | async function parseJson<TOutput, TInput>(
353 |   request: Request,
354 |   schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
355 | ): Promise<{ success: true; value: TOutput } | { success: false; message: string }> {
356 |   try {
357 |     const raw: unknown = await request.json();
358 |     const parsed = schema.safeParse(raw);
359 |     if (!parsed.success) {
360 |       return {
361 |         success: false,
362 |         message: parsed.error.issues
363 |           .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
364 |           .join('; '),
365 |       };
366 |     }
367 |     return { success: true, value: parsed.data };
368 |   } catch {
369 |     return { success: false, message: 'Request body must be valid JSON' };
370 |   }
371 | }
372 |
373 | function browserError(requestId: string, status: number, code: string, message: string): Response {
374 |   return new Response(
375 |     JSON.stringify({ success: false, error: { code, message }, request_id: requestId }),
376 |     {
377 |       status,
378 |       headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
379 |     },
380 |   );
381 | }
382 |
```

### apps/api/src/postgres-browser.test.ts

Bytes: 4652
SHA-256: c236ff93cdf34cf581a89c67ae6f98dfc58efd7bbd9d057f4b87dd3fe00f76e0
Lines: 1-123 of 123

```typescript
  1 | import { randomUUID } from 'node:crypto';
  2 | import { afterAll, beforeAll, describe, expect, it } from 'vitest';
  3 | import { Pool } from 'pg';
  4 | import { hashPassword } from '@ozzyl/authentication';
  5 | import {
  6 |   PostgresBrowserAuthService,
  7 |   PostgresMerchantDashboardRepository,
  8 |   PostgresPlatformAdminRepository,
  9 | } from './postgres.js';
 10 |
 11 | const databaseUrl = process.env.DATABASE_URL;
 12 | const integration = describe.skipIf(!databaseUrl);
 13 | const credentialFixture = 'browser-integration-fixture';
 14 | const sessionPepperFixture = 'x'.repeat(32);
 15 |
 16 | integration('PostgreSQL browser access', () => {
 17 |   const pool = new Pool({ connectionString: databaseUrl });
 18 |   const suffix = randomUUID();
 19 |   const userId = `usr_${suffix}`;
 20 |   const organizationId = `org_${suffix}`;
 21 |   const storeId = `sto_${suffix}`;
 22 |   const otherOrganizationId = `org_other_${suffix}`;
 23 |   const otherStoreId = `sto_other_${suffix}`;
 24 |
 25 |   beforeAll(async () => {
 26 |     const passwordHash = await hashPassword(credentialFixture);
 27 |     const client = await pool.connect();
 28 |     try {
 29 |       await client.query('begin');
 30 |       await client.query(
 31 |         `insert into users (id, email, password_hash, email_verified_at) values ($1, $2, $3, now())`,
 32 |         [userId, `${suffix}@example.com`, passwordHash],
 33 |       );
 34 |       await client.query(
 35 |         `insert into organizations (id, name, slug, plan_id) values ($1, 'Integration Merchant', $2, 'plan_free')`,
 36 |         [organizationId, `integration-${suffix}`],
 37 |       );
 38 |       await client.query(
 39 |         `insert into organization_members (organization_id, user_id, role) values ($1, $2, 'owner')`,
 40 |         [organizationId, userId],
 41 |       );
 42 |       await client.query(
 43 |         `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom')`,
 44 |         [storeId, organizationId],
 45 |       );
 46 |       await client.query(
 47 |         `insert into organizations (id, name, slug, plan_id) values ($1, 'Other Merchant', $2, 'plan_free')`,
 48 |         [otherOrganizationId, `integration-other-${suffix}`],
 49 |       );
 50 |       await client.query(
 51 |         `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Other', 'custom')`,
 52 |         [otherStoreId, otherOrganizationId],
 53 |       );
 54 |       await client.query('commit');
 55 |     } catch (error) {
 56 |       await client.query('rollback');
 57 |       throw error;
 58 |     } finally {
 59 |       client.release();
 60 |     }
 61 |   });
 62 |
 63 |   afterAll(async () => {
 64 |     await pool.query('delete from organizations where id = any($1::text[])', [
 65 |       [organizationId, otherOrganizationId],
 66 |     ]);
 67 |     await pool.query('delete from users where id = $1', [userId]);
 68 |     await pool.end();
 69 |   });
 70 |
 71 |   it('stores only a session hash and resolves active organization/store membership', async () => {
 72 |     const auth = new PostgresBrowserAuthService(pool, sessionPepperFixture);
 73 |     const login = await auth.login(`${suffix}@example.com`, credentialFixture);
 74 |     expect(login).not.toBeNull();
 75 |     if (!login) return;
 76 |
 77 |     const stored = await pool.query<{ token_hash: string }>(
 78 |       'select token_hash from user_sessions where id = $1',
 79 |       [login.identity.sessionId],
 80 |     );
 81 |     expect(stored.rows[0]?.token_hash).toBeTruthy();
 82 |     expect(stored.rows[0]?.token_hash).not.toBe(login.rawToken);
 83 |
 84 |     const resolved = await auth.resolve(login.rawToken);
 85 |     expect(resolved).toMatchObject({
 86 |       userId,
 87 |       platformRole: 'merchant',
 88 |       organizations: [{ id: organizationId, stores: [{ id: storeId }] }],
 89 |     });
 90 |   });
 91 |
 92 |   it('rechecks tenant membership inside the dashboard repository', async () => {
 93 |     const dashboard = new PostgresMerchantDashboardRepository(pool);
 94 |     const allowed = await dashboard.loadOverview({
 95 |       userId,
 96 |       organizationId,
 97 |       storeId,
 98 |       now: new Date('2026-07-16T15:00:00.000Z'),
 99 |     });
100 |     expect(allowed).toMatchObject({
101 |       scope: { organization_id: organizationId, store_id: storeId },
102 |       summary: { assessments_30d: 0 },
103 |     });
104 |
105 |     const denied = await dashboard.loadOverview({
106 |       userId,
107 |       organizationId: otherOrganizationId,
108 |       storeId: otherStoreId,
109 |       now: new Date('2026-07-16T15:00:00.000Z'),
110 |     });
111 |     expect(denied).toBeNull();
112 |   });
113 |
114 |   it('requires explicit platform-admin authorization and preserves the pilot block guard', async () => {
115 |     const admin = new PostgresPlatformAdminRepository(pool);
116 |     await expect(admin.loadOverview({ userId, now: new Date() })).resolves.toBeNull();
117 |
118 |     await pool.query(`update users set platform_role = 'platform_admin' where id = $1`, [userId]);
119 |     const allowed = await admin.loadOverview({ userId, now: new Date() });
120 |     expect(allowed).toMatchObject({ automatic_blocking: { broadly_enabled: false } });
121 |   });
122 | });
123 |
```

### apps/api/src/postgres.ts

Bytes: 40653
SHA-256: d44e7874fd7159c099673de2e938fc6de12cc9e1a021b1214a35f8657de2119a
Lines: 1-1214 of 1214

```typescript
   1 | import { randomUUID } from 'node:crypto';
   2 | import type { Pool, PoolClient } from 'pg';
   3 | import {
   4 |   generateSessionToken,
   5 |   hashOpaqueSecret,
   6 |   maskPhone,
   7 |   verifyPassword,
   8 | } from '@ozzyl/authentication';
   9 | import {
  10 |   PLANS,
  11 |   UsageLimitError,
  12 |   type PlanCode,
  13 |   type UsageLedger,
  14 |   type UsageReservation,
  15 | } from '@ozzyl/billing';
  16 | import {
  17 |   merchantDashboardOverviewSchema,
  18 |   platformAdminOverviewSchema,
  19 |   riskAssessmentRequestSchema,
  20 |   riskAssessmentResponseSchema,
  21 |   type BrowserOrganization,
  22 |   type MerchantDashboardOverview,
  23 |   type OrderOutcomeInput,
  24 |   type PlatformAdminOverview,
  25 |   type PlatformRole,
  26 | } from '@ozzyl/shared-types';
  27 | import type {
  28 |   ApiKeyIdentity,
  29 |   ApiKeyResolver,
  30 |   AssessmentFeatureProvider,
  31 |   AssessmentRepository,
  32 |   CourierRefreshQueue,
  33 |   OperationIdempotencyStore,
  34 |   OutcomeRepository,
  35 |   StoredAssessment,
  36 | } from './index.js';
  37 | import type {
  38 |   BrowserAuditRepository,
  39 |   BrowserAuthService,
  40 |   MerchantDashboardRepository,
  41 |   PlatformAdminRepository,
  42 |   UserSessionIdentity,
  43 | } from './browser.js';
  44 |
  45 | export class PostgresApiKeyResolver implements ApiKeyResolver {
  46 |   constructor(
  47 |     private readonly pool: Pool,
  48 |     private readonly pepper: string,
  49 |   ) {}
  50 |
  51 |   async resolve(rawApiKey: string): Promise<ApiKeyIdentity | null> {
  52 |     const keyHash = hashOpaqueSecret(rawApiKey, this.pepper);
  53 |     const result = await this.pool.query<{
  54 |       id: string;
  55 |       organization_id: string;
  56 |       store_id: string | null;
  57 |       environment: string;
  58 |       scopes: unknown;
  59 |       plan_code: string | null;
  60 |     }>(
  61 |       `
  62 |         select
  63 |           ak.id,
  64 |           ak.organization_id,
  65 |           ak.store_id,
  66 |           ak.environment,
  67 |           ak.scopes,
  68 |           p.code as plan_code
  69 |         from api_keys ak
  70 |         join organizations o on o.id = ak.organization_id and o.status = 'active'
  71 |         join stores s on s.id = ak.store_id and s.status = 'active'
  72 |         left join plans p on p.id = o.plan_id
  73 |         where ak.key_hash = $1
  74 |           and ak.revoked_at is null
  75 |           and (ak.expires_at is null or ak.expires_at > now())
  76 |         limit 1
  77 |       `,
  78 |       [keyHash],
  79 |     );
  80 |     const row = result.rows[0];
  81 |     if (!row?.store_id || (row.environment !== 'test' && row.environment !== 'live')) return null;
  82 |     const plan = isPlanCode(row.plan_code) ? row.plan_code : 'free';
  83 |     const scopes = Array.isArray(row.scopes)
  84 |       ? new Set(row.scopes.filter((scope): scope is string => typeof scope === 'string'))
  85 |       : new Set<string>();
  86 |     void this.pool
  87 |       .query('update api_keys set last_used_at = now(), updated_at = now() where id = $1', [row.id])
  88 |       .catch(() => undefined);
  89 |     return {
  90 |       apiKeyId: row.id,
  91 |       organizationId: row.organization_id,
  92 |       storeId: row.store_id,
  93 |       environment: row.environment,
  94 |       plan,
  95 |       scopes,
  96 |     };
  97 |   }
  98 | }
  99 |
 100 | export class PostgresUsageLedger implements UsageLedger {
 101 |   constructor(private readonly pool: Pool) {}
 102 |
 103 |   async reserve(input: {
 104 |     organizationId: string;
 105 |     period: string;
 106 |     requestId: string;
 107 |     units: number;
 108 |     plan: PlanCode;
 109 |   }): Promise<UsageReservation> {
 110 |     const client = await this.pool.connect();
 111 |     try {
 112 |       await client.query('begin');
 113 |       await client.query('select pg_advisory_xact_lock(hashtext($1))', [
 114 |         `${input.organizationId}:${input.period}`,
 115 |       ]);
 116 |       const existing = await client.query<{ units: number }>(
 117 |         `
 118 |           select units
 119 |           from usage_events
 120 |           where organization_id = $1
 121 |             and event_type = 'risk_assessment'
 122 |             and request_id = $2
 123 |           limit 1
 124 |         `,
 125 |         [input.organizationId, input.requestId],
 126 |       );
 127 |       const used = await currentUsage(client, input.organizationId, input.period);
 128 |       const limit = PLANS[input.plan].monthlyAssessments;
 129 |       if (existing.rows[0]) {
 130 |         await client.query('commit');
 131 |         return { requestId: input.requestId, used, limit, replay: true };
 132 |       }
 133 |       if (limit !== null && used + input.units > limit) {
 134 |         throw new UsageLimitError(`Monthly assessment limit of ${limit} exceeded`);
 135 |       }
 136 |       await client.query(
 137 |         `
 138 |           insert into usage_events (
 139 |             id, organization_id, event_type, units, request_id, period
 140 |           ) values ($1, $2, 'risk_assessment', $3, $4, $5)
 141 |         `,
 142 |         [`use_${randomUUID()}`, input.organizationId, input.units, input.requestId, input.period],
 143 |       );
 144 |       await client.query('commit');
 145 |       return {
 146 |         requestId: input.requestId,
 147 |         used: used + input.units,
 148 |         limit,
 149 |         replay: false,
 150 |       };
 151 |     } catch (error) {
 152 |       await client.query('rollback').catch(() => undefined);
 153 |       throw error;
 154 |     } finally {
 155 |       client.release();
 156 |     }
 157 |   }
 158 | }
 159 |
 160 | export class PostgresAssessmentRepository implements AssessmentRepository {
 161 |   constructor(private readonly pool: Pool) {}
 162 |
 163 |   async findByIdempotency(input: {
 164 |     organizationId: string;
 165 |     storeId: string;
 166 |     idempotencyKey: string;
 167 |   }): Promise<StoredAssessment | null> {
 168 |     const result = await this.pool.query<AssessmentRow>(
 169 |       `
 170 |         select id, organization_id, store_id, api_key_id, idempotency_key, phone_hash, order_snapshot
 171 |         from risk_assessments
 172 |         where organization_id = $1 and store_id = $2 and idempotency_key = $3
 173 |         limit 1
 174 |       `,
 175 |       [input.organizationId, input.storeId, input.idempotencyKey],
 176 |     );
 177 |     return result.rows[0] ? parseAssessmentRow(result.rows[0]) : null;
 178 |   }
 179 |
 180 |   async findById(input: {
 181 |     organizationId: string;
 182 |     storeId: string;
 183 |     assessmentId: string;
 184 |   }): Promise<StoredAssessment | null> {
 185 |     const result = await this.pool.query<AssessmentRow>(
 186 |       `
 187 |         select id, organization_id, store_id, api_key_id, idempotency_key, phone_hash, order_snapshot
 188 |         from risk_assessments
 189 |         where organization_id = $1 and store_id = $2 and id = $3
 190 |         limit 1
 191 |       `,
 192 |       [input.organizationId, input.storeId, input.assessmentId],
 193 |     );
 194 |     return result.rows[0] ? parseAssessmentRow(result.rows[0]) : null;
 195 |   }
 196 |
 197 |   async save(record: StoredAssessment): Promise<void> {
 198 |     const client = await this.pool.connect();
 199 |     try {
 200 |       await client.query('begin');
 201 |       await client.query(
 202 |         `
 203 |           insert into risk_assessments (
 204 |             id, organization_id, store_id, api_key_id, external_order_id,
 205 |             idempotency_key, phone_hash, order_snapshot, score, confidence,
 206 |             risk_level, decision, engine_version, policy_version, degraded
 207 |           ) values (
 208 |             $1, $2, $3, $4, $5,
 209 |             $6, $7, $8::jsonb, $9, $10,
 210 |             $11, $12, $13, $14, $15
 211 |           )
 212 |           on conflict (organization_id, store_id, idempotency_key) do nothing
 213 |         `,
 214 |         [
 215 |           record.response.assessment_id,
 216 |           record.identity.organizationId,
 217 |           record.identity.storeId,
 218 |           record.identity.apiKeyId,
 219 |           record.request.external_order_id ?? null,
 220 |           record.idempotencyKey,
 221 |           record.phoneHash,
 222 |           JSON.stringify({ request: record.request, response: record.response }),
 223 |           record.response.risk_score,
 224 |           record.response.confidence,
 225 |           record.response.risk_level,
 226 |           record.response.decision,
 227 |           record.response.meta?.engine_version ?? 'unknown',
 228 |           record.response.meta?.policy_version ?? 'unknown',
 229 |           record.response.meta?.degraded ?? true,
 230 |         ],
 231 |       );
 232 |       for (const signal of record.response.signals) {
 233 |         await client.query(
 234 |           `
 235 |             insert into risk_signals (
 236 |               id, assessment_id, code, category, score, confidence, description
 237 |             ) values ($1, $2, $3, $4, $5, $6, $7)
 238 |             on conflict do nothing
 239 |           `,
 240 |           [
 241 |             `sig_${randomUUID()}`,
 242 |             record.response.assessment_id,
 243 |             signal.code,
 244 |             signal.category,
 245 |             signal.score,
 246 |             signal.confidence ?? null,
 247 |             signal.description,
 248 |           ],
 249 |         );
 250 |       }
 251 |       await client.query('commit');
 252 |     } catch (error) {
 253 |       await client.query('rollback').catch(() => undefined);
 254 |       throw error;
 255 |     } finally {
 256 |       client.release();
 257 |     }
 258 |   }
 259 | }
 260 |
 261 | export class PostgresOutcomeRepository implements OutcomeRepository {
 262 |   constructor(private readonly pool: Pool) {}
 263 |
 264 |   async save(input: {
 265 |     organizationId: string;
 266 |     storeId: string;
 267 |     idempotencyKey: string;
 268 |     outcome: OrderOutcomeInput;
 269 |   }): Promise<{ outcomeId: string; replay: boolean }> {
 270 |     const client = await this.pool.connect();
 271 |     try {
 272 |       await client.query('begin');
 273 |       const existing = await client.query<{ id: string }>(
 274 |         `
 275 |           select id from order_outcomes
 276 |           where organization_id = $1 and store_id = $2 and idempotency_key = $3
 277 |           limit 1
 278 |         `,
 279 |         [input.organizationId, input.storeId, input.idempotencyKey],
 280 |       );
 281 |       if (existing.rows[0]) {
 282 |         await client.query('commit');
 283 |         return { outcomeId: existing.rows[0].id, replay: true };
 284 |       }
 285 |
 286 |       let phoneHash: string | null = null;
 287 |       if (input.outcome.assessment_id) {
 288 |         const assessment = await client.query<{ phone_hash: string }>(
 289 |           `
 290 |             select phone_hash from risk_assessments
 291 |             where id = $1 and organization_id = $2 and store_id = $3
 292 |             limit 1
 293 |           `,
 294 |           [input.outcome.assessment_id, input.organizationId, input.storeId],
 295 |         );
 296 |         phoneHash = assessment.rows[0]?.phone_hash ?? null;
 297 |       }
 298 |
 299 |       const outcomeId = `out_${randomUUID()}`;
 300 |       await client.query(
 301 |         `
 302 |           insert into order_outcomes (
 303 |             id, organization_id, store_id, external_order_id, idempotency_key,
 304 |             assessment_id, phone_hash, outcome, provider, reason, source, occurred_at
 305 |           ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'api', $11)
 306 |         `,
 307 |         [
 308 |           outcomeId,
 309 |           input.organizationId,
 310 |           input.storeId,
 311 |           input.outcome.external_order_id,
 312 |           input.idempotencyKey,
 313 |           input.outcome.assessment_id ?? null,
 314 |           phoneHash,
 315 |           input.outcome.outcome,
 316 |           input.outcome.provider ?? null,
 317 |           input.outcome.reason ?? null,
 318 |           input.outcome.occurred_at,
 319 |         ],
 320 |       );
 321 |       await client.query('commit');
 322 |       return { outcomeId, replay: false };
 323 |     } catch (error) {
 324 |       await client.query('rollback').catch(() => undefined);
 325 |       throw error;
 326 |     } finally {
 327 |       client.release();
 328 |     }
 329 |   }
 330 | }
 331 |
 332 | export class PostgresOperationIdempotencyStore implements OperationIdempotencyStore {
 333 |   constructor(
 334 |     private readonly pool: Pool,
 335 |     private readonly ttlMs = 24 * 60 * 60 * 1_000,
 336 |   ) {}
 337 |
 338 |   async get(key: string): Promise<unknown> {
 339 |     const scope = parseOperationKey(key);
 340 |     const result = await this.pool.query<{ response: unknown }>(
 341 |       `
 342 |         select response from idempotency_records
 343 |         where organization_id = $1 and store_id = $2 and operation = $3
 344 |           and idempotency_key = $4 and expires_at > now()
 345 |         limit 1
 346 |       `,
 347 |       [scope.organizationId, scope.storeId, scope.operation, scope.idempotencyKey],
 348 |     );
 349 |     return result.rows[0]?.response ?? null;
 350 |   }
 351 |
 352 |   async set(key: string, value: unknown): Promise<void> {
 353 |     const scope = parseOperationKey(key);
 354 |     await this.pool.query(
 355 |       `
 356 |         insert into idempotency_records (
 357 |           id, organization_id, store_id, operation, idempotency_key, response, expires_at
 358 |         ) values ($1, $2, $3, $4, $5, $6::jsonb, $7)
 359 |         on conflict (organization_id, store_id, operation, idempotency_key)
 360 |         do update set response = excluded.response, expires_at = excluded.expires_at, updated_at = now()
 361 |       `,
 362 |       [
 363 |         `idem_${randomUUID()}`,
 364 |         scope.organizationId,
 365 |         scope.storeId,
 366 |         scope.operation,
 367 |         scope.idempotencyKey,
 368 |         JSON.stringify(value),
 369 |         new Date(Date.now() + this.ttlMs),
 370 |       ],
 371 |     );
 372 |   }
 373 | }
 374 |
 375 | export class CourierConnectionRequiredError extends Error {
 376 |   readonly code = 'COURIER_CONNECTION_REQUIRED';
 377 | }
 378 |
 379 | export class PostgresCourierRefreshQueue implements CourierRefreshQueue {
 380 |   constructor(private readonly pool: Pool) {}
 381 |
 382 |   async enqueue(input: {
 383 |     organizationId: string;
 384 |     storeId: string;
 385 |     phone: string;
 386 |     phoneHash: string;
 387 |     providers: string[];
 388 |     force: boolean;
 389 |   }): Promise<{ jobId: string }> {
 390 |     const accounts = await this.pool.query<{ id: string; provider: string }>(
 391 |       `
 392 |         select ca.id, ca.provider
 393 |         from courier_accounts ca
 394 |         join stores s on s.id = ca.store_id
 395 |         where ca.store_id = $1 and s.organization_id = $2
 396 |           and ca.provider = any($3::text[])
 397 |           and ca.status in ('connected', 'pending', 'expired')
 398 |       `,
 399 |       [input.storeId, input.organizationId, input.providers],
 400 |     );
 401 |     if (accounts.rows.length === 0) {
 402 |       throw new CourierConnectionRequiredError('No requested courier account is connected');
 403 |     }
 404 |     const batchId = `cjob_${randomUUID()}`;
 405 |     const client = await this.pool.connect();
 406 |     try {
 407 |       await client.query('begin');
 408 |       for (const account of accounts.rows) {
 409 |         await client.query(
 410 |           `
 411 |             insert into courier_jobs (
 412 |               id, courier_account_id, job_type, status, scheduled_at, payload
 413 |             ) values ($1, $2, 'customer_observation_refresh', 'queued', now(), $3::jsonb)
 414 |           `,
 415 |           [
 416 |             `cj_${randomUUID()}`,
 417 |             account.id,
 418 |             JSON.stringify({
 419 |               batchId,
 420 |               organizationId: input.organizationId,
 421 |               storeId: input.storeId,
 422 |               provider: account.provider,
 423 |               phone: input.phone,
 424 |               phoneHash: input.phoneHash,
 425 |               force: input.force,
 426 |             }),
 427 |           ],
 428 |         );
 429 |       }
 430 |       await client.query('commit');
 431 |       return { jobId: batchId };
 432 |     } catch (error) {
 433 |       await client.query('rollback').catch(() => undefined);
 434 |       throw error;
 435 |     } finally {
 436 |       client.release();
 437 |     }
 438 |   }
 439 | }
 440 |
 441 | export class PostgresAssessmentFeatureProvider implements AssessmentFeatureProvider {
 442 |   constructor(private readonly pool: Pool) {}
 443 |
 444 |   async load(input: Parameters<AssessmentFeatureProvider['load']>[0]) {
 445 |     const [observationsResult, merchantResult, verificationResult, networkResult, policyResult] =
 446 |       await Promise.all([
 447 |         this.pool.query<ObservationRow>(
 448 |           `
 449 |             select distinct on (provider)
 450 |               provider, total_orders, delivered_orders, returned_orders,
 451 |               cancelled_before_shipping, confidence, expires_at
 452 |             from courier_observations
 453 |             where store_id = $1 and phone_hash = $2
 454 |             order by provider, observed_at desc
 455 |           `,
 456 |           [input.identity.storeId, input.phoneHash],
 457 |         ),
 458 |         this.pool.query<{
 459 |           delivered: number;
 460 |           returned: number;
 461 |           cancelled: number;
 462 |         }>(
 463 |           `
 464 |             select
 465 |               count(*) filter (where outcome = 'delivered')::int as delivered,
 466 |               count(*) filter (where outcome = 'returned')::int as returned,
 467 |               count(*) filter (
 468 |                 where outcome = 'cancelled_before_shipping'
 469 |                   and occurred_at > now() - interval '30 days'
 470 |               )::int as cancelled
 471 |             from order_outcomes
 472 |             where store_id = $1 and phone_hash = $2
 473 |           `,
 474 |           [input.identity.storeId, input.phoneHash],
 475 |         ),
 476 |         this.pool.query<{ verified: boolean; attempts: number }>(
 477 |           `
 478 |             select
 479 |               exists(
 480 |                 select 1 from verification_sessions
 481 |                 where store_id = $1 and phone_hash = $2 and status = 'verified'
 482 |                   and verified_at > now() - interval '90 days'
 483 |               ) as verified,
 484 |               coalesce(sum(oa.attempt_count), 0)::int as attempts
 485 |             from verification_sessions vs
 486 |             left join otp_attempts oa on oa.verification_session_id = vs.id
 487 |             where vs.store_id = $1 and vs.phone_hash = $2
 488 |           `,
 489 |           [input.identity.storeId, input.phoneHash],
 490 |         ),
 491 |         this.pool.query<{
 492 |           negative: number;
 493 |           reporters: number;
 494 |           positive: number;
 495 |         }>(
 496 |           `
 497 |             select
 498 |               count(*) filter (where oo.outcome = 'returned')::int as negative,
 499 |               count(distinct oo.store_id) filter (where oo.outcome = 'returned')::int as reporters,
 500 |               count(*) filter (where oo.outcome = 'delivered')::int as positive
 501 |             from order_outcomes oo
 502 |             join stores s on s.id = oo.store_id
 503 |             where s.organization_id = $1 and oo.phone_hash = $2
 504 |           `,
 505 |           [input.identity.organizationId, input.phoneHash],
 506 |         ),
 507 |         this.pool.query<{ policy: unknown }>(
 508 |           `select policy from risk_policies where store_id = $1 and active = true limit 1`,
 509 |           [input.identity.storeId],
 510 |         ),
 511 |       ]);
 512 |
 513 |     const observations = observationsResult.rows;
 514 |     const now = Date.now();
 515 |     const merchant = merchantResult.rows[0] ?? { delivered: 0, returned: 0, cancelled: 0 };
 516 |     const verification = verificationResult.rows[0] ?? { verified: false, attempts: 0 };
 517 |     const network = networkResult.rows[0] ?? { negative: 0, reporters: 0, positive: 0 };
 518 |     return {
 519 |       courier: {
 520 |         totalOrders: observations.reduce((sum, row) => sum + row.total_orders, 0),
 521 |         deliveredOrders: observations.reduce((sum, row) => sum + row.delivered_orders, 0),
 522 |         returnedOrders: observations.reduce((sum, row) => sum + row.returned_orders, 0),
 523 |         cancelledBeforeShipping: observations.reduce(
 524 |           (sum, row) => sum + row.cancelled_before_shipping,
 525 |           0,
 526 |         ),
 527 |         providerCount: observations.length,
 528 |         freshness:
 529 |           observations.length === 0
 530 |             ? ('missing' as const)
 531 |             : observations.every((row) => new Date(row.expires_at).getTime() > now)
 532 |               ? ('fresh' as const)
 533 |               : ('stale' as const),
 534 |         sourceConfidence:
 535 |           observations.length === 0
 536 |             ? 0
 537 |             : observations.reduce((sum, row) => sum + Number(row.confidence), 0) /
 538 |               observations.length,
 539 |       },
 540 |       merchant: {
 541 |         deliveredOrders: merchant.delivered,
 542 |         returnedOrders: merchant.returned,
 543 |         recentCancelledOrders: merchant.cancelled,
 544 |         previousSuccessfulCustomer: merchant.delivered > 0,
 545 |       },
 546 |       velocity: {
 547 |         phoneOrdersLastHour: 0,
 548 |         devicePhoneCountLastDay: 0,
 549 |         ipCustomerCountLastHour: 0,
 550 |       },
 551 |       verification: {
 552 |         otpVerified: verification.verified,
 553 |         otpFailures: verification.attempts,
 554 |         phoneUnreachable: false,
 555 |       },
 556 |       network: {
 557 |         confirmedNegativeOutcomes: network.negative,
 558 |         independentReporters: network.reporters,
 559 |         confirmedPositiveOutcomes: network.positive,
 560 |         activeDispute: false,
 561 |       },
 562 |       ...(isRiskPolicy(policyResult.rows[0]?.policy)
 563 |         ? { policy: policyResult.rows[0]?.policy }
 564 |         : {}),
 565 |     };
 566 |   }
 567 | }
 568 |
 569 | export class PostgresBrowserAuthService implements BrowserAuthService {
 570 |   constructor(
 571 |     private readonly pool: Pool,
 572 |     private readonly sessionPepper: string,
 573 |     private readonly sessionTtlMs = 7 * 24 * 60 * 60 * 1_000,
 574 |   ) {}
 575 |
 576 |   async login(email: string, password: string) {
 577 |     const result = await this.pool.query<{
 578 |       id: string;
 579 |       email: string;
 580 |       password_hash: string | null;
 581 |       platform_role: string;
 582 |     }>(
 583 |       `
 584 |         select id, email, password_hash, platform_role
 585 |         from users
 586 |         where lower(email) = lower($1) and status = 'active'
 587 |         limit 1
 588 |       `,
 589 |       [email],
 590 |     );
 591 |     const user = result.rows[0];
 592 |     if (!user?.password_hash || !isPlatformRole(user.platform_role)) return null;
 593 |     if (!(await verifyPassword(user.password_hash, password))) return null;
 594 |
 595 |     const generated = generateSessionToken(this.sessionPepper);
 596 |     const sessionId = `ses_${randomUUID()}`;
 597 |     const expiresAt = new Date(Date.now() + this.sessionTtlMs);
 598 |     await this.pool.query(
 599 |       `
 600 |         insert into user_sessions (id, user_id, token_hash, expires_at)
 601 |         values ($1, $2, $3, $4)
 602 |       `,
 603 |       [sessionId, user.id, generated.tokenHash, expiresAt],
 604 |     );
 605 |     const identity = await loadUserSessionIdentity(this.pool, {
 606 |       sessionId,
 607 |       userId: user.id,
 608 |       email: user.email,
 609 |       platformRole: user.platform_role,
 610 |       expiresAt,
 611 |     });
 612 |     return identity ? { rawToken: generated.rawToken, identity } : null;
 613 |   }
 614 |
 615 |   async resolve(rawToken: string): Promise<UserSessionIdentity | null> {
 616 |     const tokenHash = hashOpaqueSecret(rawToken, this.sessionPepper);
 617 |     const result = await this.pool.query<{
 618 |       session_id: string;
 619 |       user_id: string;
 620 |       email: string;
 621 |       platform_role: string;
 622 |       expires_at: Date | string;
 623 |     }>(
 624 |       `
 625 |         select
 626 |           us.id as session_id,
 627 |           u.id as user_id,
 628 |           u.email,
 629 |           u.platform_role,
 630 |           us.expires_at
 631 |         from user_sessions us
 632 |         join users u on u.id = us.user_id and u.status = 'active'
 633 |         where us.token_hash = $1
 634 |           and us.revoked_at is null
 635 |           and us.expires_at > now()
 636 |         limit 1
 637 |       `,
 638 |       [tokenHash],
 639 |     );
 640 |     const row = result.rows[0];
 641 |     if (!row || !isPlatformRole(row.platform_role)) return null;
 642 |     return loadUserSessionIdentity(this.pool, {
 643 |       sessionId: row.session_id,
 644 |       userId: row.user_id,
 645 |       email: row.email,
 646 |       platformRole: row.platform_role,
 647 |       expiresAt: row.expires_at,
 648 |     });
 649 |   }
 650 |
 651 |   async revoke(input: { sessionId: string; userId: string }): Promise<void> {
 652 |     await this.pool.query(
 653 |       `
 654 |         update user_sessions
 655 |         set revoked_at = now()
 656 |         where id = $1 and user_id = $2 and revoked_at is null
 657 |       `,
 658 |       [input.sessionId, input.userId],
 659 |     );
 660 |   }
 661 | }
 662 |
 663 | export class PostgresBrowserAuditRepository implements BrowserAuditRepository {
 664 |   constructor(private readonly pool: Pool) {}
 665 |
 666 |   async record(input: {
 667 |     organizationId: string | null;
 668 |     actorId: string | null;
 669 |     action: string;
 670 |     targetType?: string;
 671 |     targetId?: string;
 672 |     metadata?: Record<string, unknown>;
 673 |   }): Promise<void> {
 674 |     await this.pool.query(
 675 |       `
 676 |         insert into audit_events (
 677 |           id, organization_id, actor_type, actor_id, action, target_type, target_id, metadata
 678 |         ) values ($1, $2, 'user', $3, $4, $5, $6, $7::jsonb)
 679 |       `,
 680 |       [
 681 |         `aud_${randomUUID()}`,
 682 |         input.organizationId,
 683 |         input.actorId,
 684 |         input.action,
 685 |         input.targetType ?? null,
 686 |         input.targetId ?? null,
 687 |         JSON.stringify(input.metadata ?? {}),
 688 |       ],
 689 |     );
 690 |   }
 691 | }
 692 |
 693 | export class PostgresMerchantDashboardRepository implements MerchantDashboardRepository {
 694 |   constructor(private readonly pool: Pool) {}
 695 |
 696 |   async loadOverview(input: {
 697 |     userId: string;
 698 |     organizationId: string;
 699 |     storeId: string;
 700 |     now: Date;
 701 |   }): Promise<MerchantDashboardOverview | null> {
 702 |     const scopeResult = await this.pool.query<{
 703 |       organization_id: string;
 704 |       organization_name: string;
 705 |       store_id: string;
 706 |       store_name: string;
 707 |       platform: string;
 708 |       role: string;
 709 |       plan_code: string | null;
 710 |     }>(
 711 |       `
 712 |         select
 713 |           o.id as organization_id,
 714 |           o.name as organization_name,
 715 |           s.id as store_id,
 716 |           s.name as store_name,
 717 |           s.platform,
 718 |           om.role,
 719 |           p.code as plan_code
 720 |         from organization_members om
 721 |         join organizations o on o.id = om.organization_id and o.status = 'active'
 722 |         join stores s on s.organization_id = o.id and s.status = 'active'
 723 |         left join plans p on p.id = o.plan_id
 724 |         where om.user_id = $1 and o.id = $2 and s.id = $3
 725 |         limit 1
 726 |       `,
 727 |       [input.userId, input.organizationId, input.storeId],
 728 |     );
 729 |     const scope = scopeResult.rows[0];
 730 |     if (!scope) return null;
 731 |
 732 |     const month = input.now.toISOString().slice(0, 7);
 733 |     const [assessmentResult, verificationResult, usageResult, reviewResult, courierResult] =
 734 |       await Promise.all([
 735 |         this.pool.query<{
 736 |           assessments: number;
 737 |           degraded: number;
 738 |           pending: number;
 739 |           allow_count: number;
 740 |           verify_count: number;
 741 |           review_count: number;
 742 |           hold_count: number;
 743 |           block_count: number;
 744 |         }>(
 745 |           `
 746 |             select
 747 |               count(*)::int as assessments,
 748 |               count(*) filter (where degraded)::int as degraded,
 749 |               count(*) filter (where decision in ('verify', 'review', 'hold', 'block'))::int as pending,
 750 |               count(*) filter (where decision = 'allow')::int as allow_count,
 751 |               count(*) filter (where decision = 'verify')::int as verify_count,
 752 |               count(*) filter (where decision = 'review')::int as review_count,
 753 |               count(*) filter (where decision = 'hold')::int as hold_count,
 754 |               count(*) filter (where decision = 'block')::int as block_count
 755 |             from risk_assessments
 756 |             where organization_id = $1 and store_id = $2
 757 |               and created_at >= $3::timestamptz - interval '30 days'
 758 |           `,
 759 |           [input.organizationId, input.storeId, input.now],
 760 |         ),
 761 |         this.pool.query<{ verified: number }>(
 762 |           `
 763 |             select count(*)::int as verified
 764 |             from verification_sessions
 765 |             where organization_id = $1 and store_id = $2 and status = 'verified'
 766 |               and verified_at >= $3::timestamptz - interval '30 days'
 767 |           `,
 768 |           [input.organizationId, input.storeId, input.now],
 769 |         ),
 770 |         this.pool.query<{ used: number }>(
 771 |           `
 772 |             select coalesce(sum(units), 0)::int as used
 773 |             from usage_events
 774 |             where organization_id = $1 and period = $2 and event_type = 'risk_assessment'
 775 |           `,
 776 |           [input.organizationId, month],
 777 |         ),
 778 |         this.pool.query<DashboardReviewRow>(
 779 |           `
 780 |             select
 781 |               ra.id,
 782 |               ra.external_order_id,
 783 |               ra.score,
 784 |               ra.decision,
 785 |               ra.confidence,
 786 |               ra.order_snapshot,
 787 |               ra.created_at,
 788 |               coalesce(
 789 |                 jsonb_agg(
 790 |                   jsonb_build_object(
 791 |                     'code', rs.code,
 792 |                     'score', rs.score,
 793 |                     'description', rs.description
 794 |                   ) order by rs.score desc
 795 |                 ) filter (where rs.id is not null),
 796 |                 '[]'::jsonb
 797 |               ) as signals
 798 |             from risk_assessments ra
 799 |             left join risk_signals rs on rs.assessment_id = ra.id
 800 |             where ra.organization_id = $1 and ra.store_id = $2
 801 |               and ra.decision in ('verify', 'review', 'hold', 'block')
 802 |             group by ra.id
 803 |             order by ra.created_at desc
 804 |             limit 20
 805 |           `,
 806 |           [input.organizationId, input.storeId],
 807 |         ),
 808 |         this.pool.query<{
 809 |           provider: string;
 810 |           status: string;
 811 |           last_success_at: Date | string | null;
 812 |           last_failure_at: Date | string | null;
 813 |           failure_code: string | null;
 814 |         }>(
 815 |           `
 816 |             select ca.provider, ca.status, ca.last_success_at, ca.last_failure_at, ca.failure_code
 817 |             from courier_accounts ca
 818 |             join stores s on s.id = ca.store_id
 819 |             where s.organization_id = $1 and ca.store_id = $2
 820 |             order by ca.provider
 821 |           `,
 822 |           [input.organizationId, input.storeId],
 823 |         ),
 824 |       ]);
 825 |
 826 |     const assessment = assessmentResult.rows[0] ?? emptyAssessmentAggregate();
 827 |     const plan = isPlanCode(scope.plan_code) ? scope.plan_code : 'free';
 828 |     return merchantDashboardOverviewSchema.parse({
 829 |       success: true,
 830 |       generated_at: input.now.toISOString(),
 831 |       scope: {
 832 |         organization_id: scope.organization_id,
 833 |         organization_name: scope.organization_name,
 834 |         store_id: scope.store_id,
 835 |         store_name: scope.store_name,
 836 |         platform: scope.platform,
 837 |         role: scope.role,
 838 |       },
 839 |       summary: {
 840 |         assessments_30d: assessment.assessments,
 841 |         degraded_30d: assessment.degraded,
 842 |         pending_reviews: assessment.pending,
 843 |         verified_30d: verificationResult.rows[0]?.verified ?? 0,
 844 |         usage_month: usageResult.rows[0]?.used ?? 0,
 845 |         usage_limit: PLANS[plan].monthlyAssessments,
 846 |       },
 847 |       decisions: {
 848 |         allow: assessment.allow_count,
 849 |         verify: assessment.verify_count,
 850 |         review: assessment.review_count,
 851 |         hold: assessment.hold_count,
 852 |         block: assessment.block_count,
 853 |       },
 854 |       reviews: reviewResult.rows.map(parseDashboardReview),
 855 |       couriers: courierResult.rows.map((row) => ({
 856 |         provider: row.provider,
 857 |         status: row.status,
 858 |         last_success_at: nullableIso(row.last_success_at),
 859 |         last_failure_at: nullableIso(row.last_failure_at),
 860 |         failure_code: row.failure_code,
 861 |       })),
 862 |     });
 863 |   }
 864 | }
 865 |
 866 | export class PostgresPlatformAdminRepository implements PlatformAdminRepository {
 867 |   constructor(private readonly pool: Pool) {}
 868 |
 869 |   async loadOverview(input: { userId: string; now: Date }): Promise<PlatformAdminOverview | null> {
 870 |     const authorization = await this.pool.query<{ allowed: boolean }>(
 871 |       `
 872 |         select exists(
 873 |           select 1 from users
 874 |           where id = $1 and status = 'active' and platform_role = 'platform_admin'
 875 |         ) as allowed
 876 |       `,
 877 |       [input.userId],
 878 |     );
 879 |     if (!authorization.rows[0]?.allowed) return null;
 880 |
 881 |     const [summaryResult, reconnectResult, providerResult] = await Promise.all([
 882 |       this.pool.query<{
 883 |         active_organizations: number;
 884 |         active_stores: number;
 885 |         assessments_today: number;
 886 |         degraded_today: number;
 887 |         worker_backlog: number;
 888 |         failed_webhooks: number;
 889 |         oldest_scheduled_at: Date | string | null;
 890 |       }>(`
 891 |         select
 892 |           (select count(*)::int from organizations where status = 'active') as active_organizations,
 893 |           (select count(*)::int from stores where status = 'active') as active_stores,
 894 |           (select count(*)::int from risk_assessments where created_at >= date_trunc('day', now())) as assessments_today,
 895 |           (select count(*)::int from risk_assessments where degraded and created_at >= date_trunc('day', now())) as degraded_today,
 896 |           (select count(*)::int from courier_jobs where status in ('queued', 'processing')) as worker_backlog,
 897 |           (select count(*)::int from webhook_deliveries where status = 'failed') as failed_webhooks,
 898 |           (select min(scheduled_at) from courier_jobs where status in ('queued', 'processing')) as oldest_scheduled_at
 899 |       `),
 900 |       this.pool.query<{ reconnect_required: number }>(`
 901 |         select count(*)::int as reconnect_required
 902 |         from courier_accounts
 903 |         where status in ('expired', 'failed') or failure_code is not null
 904 |       `),
 905 |       this.pool.query<{
 906 |         provider: string;
 907 |         connected: number;
 908 |         attention: number;
 909 |       }>(`
 910 |         select
 911 |           provider,
 912 |           count(*) filter (where status = 'connected')::int as connected,
 913 |           count(*) filter (where status <> 'connected' or failure_code is not null)::int as attention
 914 |         from courier_accounts
 915 |         group by provider
 916 |         order by provider
 917 |       `),
 918 |     ]);
 919 |
 920 |     const summary = summaryResult.rows[0] ?? {
 921 |       active_organizations: 0,
 922 |       active_stores: 0,
 923 |       assessments_today: 0,
 924 |       degraded_today: 0,
 925 |       worker_backlog: 0,
 926 |       failed_webhooks: 0,
 927 |       oldest_scheduled_at: null,
 928 |     };
 929 |     const reconnectRequired = reconnectResult.rows[0]?.reconnect_required ?? 0;
 930 |     const degradedPercentage =
 931 |       summary.assessments_today === 0
 932 |         ? 0
 933 |         : Number(((summary.degraded_today / summary.assessments_today) * 100).toFixed(2));
 934 |     const oldestLagSeconds = summary.oldest_scheduled_at
 935 |       ? Math.max(
 936 |           0,
 937 |           Math.floor(
 938 |             (input.now.getTime() - new Date(summary.oldest_scheduled_at).getTime()) / 1_000,
 939 |           ),
 940 |         )
 941 |       : 0;
 942 |     const incidents: PlatformAdminOverview['incidents'] = [];
 943 |     if (reconnectRequired > 0) {
 944 |       incidents.push({
 945 |         code: 'courier_reconnect_required',
 946 |         title: 'Courier reconnect required',
 947 |         detail: `${reconnectRequired} account${reconnectRequired === 1 ? '' : 's'} need attention`,
 948 |         severity: 'high',
 949 |       });
 950 |     }
 951 |     if (summary.worker_backlog > 0) {
 952 |       incidents.push({
 953 |         code: 'courier_worker_backlog',
 954 |         title: 'Courier worker backlog',
 955 |         detail: `${summary.worker_backlog} jobs pending; oldest ${oldestLagSeconds}s`,
 956 |         severity: oldestLagSeconds > 300 ? 'high' : 'medium',
 957 |       });
 958 |     }
 959 |     if (summary.failed_webhooks > 0) {
 960 |       incidents.push({
 961 |         code: 'webhook_delivery_failed',
 962 |         title: 'Webhook delivery failures',
 963 |         detail: `${summary.failed_webhooks} deliveries are currently failed`,
 964 |         severity: 'medium',
 965 |       });
 966 |     }
 967 |
 968 |     return platformAdminOverviewSchema.parse({
 969 |       success: true,
 970 |       generated_at: input.now.toISOString(),
 971 |       summary: {
 972 |         active_organizations: summary.active_organizations,
 973 |         active_stores: summary.active_stores,
 974 |         assessments_today: summary.assessments_today,
 975 |         degraded_percentage: degradedPercentage,
 976 |         worker_backlog: summary.worker_backlog,
 977 |         failed_webhooks: summary.failed_webhooks,
 978 |       },
 979 |       incidents,
 980 |       providers: providerResult.rows.map((row) => ({
 981 |         name: row.provider,
 982 |         state: row.attention === 0 ? 'operational' : 'attention_required',
 983 |         metric: `${row.connected} connected; ${row.attention} need attention`,
 984 |       })),
 985 |       automatic_blocking: {
 986 |         broadly_enabled: false,
 987 |         reason:
 988 |           'Broad automatic blocking remains disabled until merchant pilot calibration is reviewed.',
 989 |       },
 990 |     });
 991 |   }
 992 | }
 993 |
 994 | interface DashboardReviewRow {
 995 |   id: string;
 996 |   external_order_id: string | null;
 997 |   score: number;
 998 |   decision: string;
 999 |   confidence: number | string;
1000 |   order_snapshot: unknown;
1001 |   created_at: Date | string;
1002 |   signals: unknown;
1003 | }
1004 |
1005 | interface AssessmentRow {
1006 |   id: string;
1007 |   organization_id: string;
1008 |   store_id: string;
1009 |   api_key_id: string | null;
1010 |   idempotency_key: string;
1011 |   phone_hash: string;
1012 |   order_snapshot: unknown;
1013 | }
1014 |
1015 | interface ObservationRow {
1016 |   provider: string;
1017 |   total_orders: number;
1018 |   delivered_orders: number;
1019 |   returned_orders: number;
1020 |   cancelled_before_shipping: number;
1021 |   confidence: string | number;
1022 |   expires_at: Date | string;
1023 | }
1024 |
1025 | function parseAssessmentRow(row: AssessmentRow): StoredAssessment {
1026 |   if (!row.order_snapshot || typeof row.order_snapshot !== 'object') {
1027 |     throw new Error(`Assessment ${row.id} has an invalid order snapshot`);
1028 |   }
1029 |   const snapshot = row.order_snapshot as Record<string, unknown>;
1030 |   return {
1031 |     identity: {
1032 |       apiKeyId: row.api_key_id ?? 'key_deleted',
1033 |       organizationId: row.organization_id,
1034 |       storeId: row.store_id,
1035 |     },
1036 |     idempotencyKey: row.idempotency_key,
1037 |     phoneHash: row.phone_hash,
1038 |     request: riskAssessmentRequestSchema.parse(snapshot.request),
1039 |     response: riskAssessmentResponseSchema.parse(snapshot.response),
1040 |   };
1041 | }
1042 |
1043 | async function loadUserSessionIdentity(
1044 |   pool: Pool,
1045 |   input: {
1046 |     sessionId: string;
1047 |     userId: string;
1048 |     email: string;
1049 |     platformRole: PlatformRole;
1050 |     expiresAt: Date | string;
1051 |   },
1052 | ): Promise<UserSessionIdentity> {
1053 |   const result = await pool.query<{
1054 |     organization_id: string;
1055 |     organization_name: string;
1056 |     role: string;
1057 |     store_id: string | null;
1058 |     store_name: string | null;
1059 |     platform: string | null;
1060 |     store_status: string | null;
1061 |   }>(
1062 |     `
1063 |       select
1064 |         o.id as organization_id,
1065 |         o.name as organization_name,
1066 |         om.role,
1067 |         s.id as store_id,
1068 |         s.name as store_name,
1069 |         s.platform,
1070 |         s.status as store_status
1071 |       from organization_members om
1072 |       join organizations o on o.id = om.organization_id and o.status = 'active'
1073 |       left join stores s on s.organization_id = o.id and s.status = 'active'
1074 |       where om.user_id = $1
1075 |       order by o.name, s.name
1076 |     `,
1077 |     [input.userId],
1078 |   );
1079 |   const organizationMap = new Map<string, BrowserOrganization>();
1080 |   for (const row of result.rows) {
1081 |     const organization = organizationMap.get(row.organization_id) ?? {
1082 |       id: row.organization_id,
1083 |       name: row.organization_name,
1084 |       role: row.role,
1085 |       stores: [],
1086 |     };
1087 |     if (row.store_id && row.store_name && row.platform && row.store_status) {
1088 |       organization.stores.push({
1089 |         id: row.store_id,
1090 |         organization_id: row.organization_id,
1091 |         name: row.store_name,
1092 |         platform: row.platform,
1093 |         status: row.store_status,
1094 |       });
1095 |     }
1096 |     organizationMap.set(row.organization_id, organization);
1097 |   }
1098 |   return {
1099 |     sessionId: input.sessionId,
1100 |     userId: input.userId,
1101 |     email: input.email,
1102 |     platformRole: input.platformRole,
1103 |     expiresAt: new Date(input.expiresAt).toISOString(),
1104 |     organizations: [...organizationMap.values()],
1105 |   };
1106 | }
1107 |
1108 | function parseDashboardReview(row: DashboardReviewRow) {
1109 |   let phoneMasked = '***';
1110 |   if (row.order_snapshot && typeof row.order_snapshot === 'object') {
1111 |     const snapshot = row.order_snapshot as Record<string, unknown>;
1112 |     const parsedRequest = riskAssessmentRequestSchema.safeParse(snapshot.request);
1113 |     if (parsedRequest.success) phoneMasked = maskPhone(parsedRequest.data.phone);
1114 |   }
1115 |   const signals = Array.isArray(row.signals)
1116 |     ? row.signals.flatMap((value) => {
1117 |         if (!value || typeof value !== 'object') return [];
1118 |         const record = value as Record<string, unknown>;
1119 |         if (
1120 |           typeof record.code !== 'string' ||
1121 |           typeof record.score !== 'number' ||
1122 |           typeof record.description !== 'string'
1123 |         ) {
1124 |           return [];
1125 |         }
1126 |         return [{ code: record.code, score: record.score, description: record.description }];
1127 |       })
1128 |     : [];
1129 |   return {
1130 |     assessment_id: row.id,
1131 |     external_order_id: row.external_order_id,
1132 |     phone_masked: phoneMasked,
1133 |     risk_score: row.score,
1134 |     decision: row.decision,
1135 |     confidence: Number(row.confidence),
1136 |     signals,
1137 |     created_at: new Date(row.created_at).toISOString(),
1138 |   };
1139 | }
1140 |
1141 | function emptyAssessmentAggregate() {
1142 |   return {
1143 |     assessments: 0,
1144 |     degraded: 0,
1145 |     pending: 0,
1146 |     allow_count: 0,
1147 |     verify_count: 0,
1148 |     review_count: 0,
1149 |     hold_count: 0,
1150 |     block_count: 0,
1151 |   };
1152 | }
1153 |
1154 | function nullableIso(value: Date | string | null): string | null {
1155 |   return value === null ? null : new Date(value).toISOString();
1156 | }
1157 |
1158 | function isPlatformRole(value: string): value is PlatformRole {
1159 |   return value === 'merchant' || value === 'platform_admin';
1160 | }
1161 |
1162 | async function currentUsage(
1163 |   client: PoolClient,
1164 |   organizationId: string,
1165 |   period: string,
1166 | ): Promise<number> {
1167 |   const result = await client.query<{ used: number }>(
1168 |     `
1169 |       select coalesce(sum(units), 0)::int as used
1170 |       from usage_events
1171 |       where organization_id = $1 and period = $2 and event_type = 'risk_assessment'
1172 |     `,
1173 |     [organizationId, period],
1174 |   );
1175 |   return result.rows[0]?.used ?? 0;
1176 | }
1177 |
1178 | function parseOperationKey(key: string): {
1179 |   organizationId: string;
1180 |   storeId: string;
1181 |   operation: string;
1182 |   idempotencyKey: string;
1183 | } {
1184 |   const [organizationId, storeId, operation, ...idempotencyParts] = key.split(':');
1185 |   const idempotencyKey = idempotencyParts.join(':');
1186 |   if (!organizationId || !storeId || !operation || !idempotencyKey) {
1187 |     throw new Error('Invalid operation idempotency key');
1188 |   }
1189 |   return { organizationId, storeId, operation, idempotencyKey };
1190 | }
1191 |
1192 | function isPlanCode(value: string | null): value is PlanCode {
1193 |   return value !== null && ['free', 'starter', 'pro', 'enterprise'].includes(value);
1194 | }
1195 |
1196 | function isRiskPolicy(value: unknown): value is {
1197 |   version: string;
1198 |   thresholds: { verify: number; review: number; hold: number; block: number };
1199 |   highValueOrderAmount: number;
1200 |   unknownDecision: 'verify' | 'review';
1201 | } {
1202 |   if (!value || typeof value !== 'object') return false;
1203 |   const record = value as Record<string, unknown>;
1204 |   const thresholds = record.thresholds;
1205 |   if (!thresholds || typeof thresholds !== 'object') return false;
1206 |   const thresholdRecord = thresholds as Record<string, unknown>;
1207 |   return (
1208 |     typeof record.version === 'string' &&
1209 |     typeof record.highValueOrderAmount === 'number' &&
1210 |     (record.unknownDecision === 'verify' || record.unknownDecision === 'review') &&
1211 |     ['verify', 'review', 'hold', 'block'].every((key) => typeof thresholdRecord[key] === 'number')
1212 |   );
1213 | }
1214 |
```

### apps/dashboard/src/App.tsx

Bytes: 24131
SHA-256: 3bf925be065b7efd2e4ca754d731245699d77d099defd0b36c5a3e63af855426
Lines: 1-746 of 746

```typescript
  1 | import { useEffect, useMemo, useState, type FormEvent } from 'react';
  2 | import type {
  3 |   BrowserSessionResponse,
  4 |   DashboardReview,
  5 |   MerchantDashboardOverview,
  6 | } from '@ozzyl/shared-types';
  7 |
  8 | type View = 'overview' | 'reviews' | 'couriers' | 'policies' | 'usage' | 'settings';
  9 |
 10 | type StoreOption = {
 11 |   organizationId: string;
 12 |   organizationName: string;
 13 |   storeId: string;
 14 |   storeName: string;
 15 |   platform: string;
 16 | };
 17 |
 18 | const navItems: Array<{ id: View; label: string; description: string }> = [
 19 |   { id: 'overview', label: 'Overview', description: 'Live risk summary' },
 20 |   { id: 'reviews', label: 'Review queue', description: 'Orders requiring action' },
 21 |   { id: 'couriers', label: 'Courier accounts', description: 'Connection health' },
 22 |   { id: 'policies', label: 'Risk policies', description: 'Pilot safety state' },
 23 |   { id: 'usage', label: 'API usage', description: 'Current entitlement' },
 24 |   { id: 'settings', label: 'Settings', description: 'Session and scope' },
 25 | ];
 26 |
 27 | export function App() {
 28 |   const [session, setSession] = useState<BrowserSessionResponse | null>(null);
 29 |   const [overview, setOverview] = useState<MerchantDashboardOverview | null>(null);
 30 |   const [selectedStore, setSelectedStore] = useState<StoreOption | null>(null);
 31 |   const [selectedReview, setSelectedReview] = useState<DashboardReview | null>(null);
 32 |   const [view, setView] = useState<View>('overview');
 33 |   const [loading, setLoading] = useState(true);
 34 |   const [error, setError] = useState<string | null>(null);
 35 |
 36 |   const stores = useMemo(() => flattenStores(session), [session]);
 37 |   const activeNav = useMemo(() => navItems.find((item) => item.id === view), [view]);
 38 |
 39 |   useEffect(() => {
 40 |     void loadSession();
 41 |   }, []);
 42 |
 43 |   useEffect(() => {
 44 |     if (!session || stores.length === 0) return;
 45 |     setSelectedStore((current) => current ?? stores[0] ?? null);
 46 |   }, [session, stores]);
 47 |
 48 |   useEffect(() => {
 49 |     if (!selectedStore) return;
 50 |     void loadOverview(selectedStore);
 51 |   }, [selectedStore]);
 52 |
 53 |   async function loadSession() {
 54 |     setLoading(true);
 55 |     try {
 56 |       const response = await fetch('/auth/session', { credentials: 'include' });
 57 |       if (response.status === 401) {
 58 |         setSession(null);
 59 |         setOverview(null);
 60 |         return;
 61 |       }
 62 |       const body = await readJson<BrowserSessionResponse>(response);
 63 |       setSession(body);
 64 |     } catch (caught) {
 65 |       setError(errorMessage(caught));
 66 |     } finally {
 67 |       setLoading(false);
 68 |     }
 69 |   }
 70 |
 71 |   async function loadOverview(store: StoreOption) {
 72 |     setLoading(true);
 73 |     setError(null);
 74 |     try {
 75 |       const params = new URLSearchParams({
 76 |         organization_id: store.organizationId,
 77 |         store_id: store.storeId,
 78 |       });
 79 |       const response = await fetch(`/dashboard/v1/overview?${params.toString()}`, {
 80 |         credentials: 'include',
 81 |       });
 82 |       if (response.status === 401) {
 83 |         setSession(null);
 84 |         setOverview(null);
 85 |         return;
 86 |       }
 87 |       const body = await readJson<MerchantDashboardOverview>(response);
 88 |       setOverview(body);
 89 |       setSelectedReview(body.reviews[0] ?? null);
 90 |     } catch (caught) {
 91 |       setError(errorMessage(caught));
 92 |     } finally {
 93 |       setLoading(false);
 94 |     }
 95 |   }
 96 |
 97 |   async function handleLogin(email: string, password: string) {
 98 |     setLoading(true);
 99 |     setError(null);
100 |     try {
101 |       const response = await fetch('/auth/login', {
102 |         method: 'POST',
103 |         credentials: 'include',
104 |         headers: { 'Content-Type': 'application/json' },
105 |         body: JSON.stringify({ email, password }),
106 |       });
107 |       const body = await readJson<BrowserSessionResponse>(response);
108 |       setSession(body);
109 |       setSelectedStore(flattenStores(body)[0] ?? null);
110 |     } catch (caught) {
111 |       setError(errorMessage(caught));
112 |     } finally {
113 |       setLoading(false);
114 |     }
115 |   }
116 |
117 |   async function handleLogout() {
118 |     if (!session) return;
119 |     setLoading(true);
120 |     try {
121 |       await readJson(
122 |         await fetch('/auth/logout', {
123 |           method: 'POST',
124 |           credentials: 'include',
125 |           headers: { 'X-CSRF-Token': session.csrf_token },
126 |         }),
127 |       );
128 |       setSession(null);
129 |       setOverview(null);
130 |       setSelectedStore(null);
131 |       setSelectedReview(null);
132 |     } catch (caught) {
133 |       setError(errorMessage(caught));
134 |     } finally {
135 |       setLoading(false);
136 |     }
137 |   }
138 |
139 |   if (loading && !session) return <LoadingState label="Checking your secure session…" />;
140 |   if (!session) return <LoginScreen error={error} loading={loading} onLogin={handleLogin} />;
141 |   if (stores.length === 0) {
142 |     return (
143 |       <LoadingState label="Your account has no active organization/store scope. Contact an administrator." />
144 |     );
145 |   }
146 |
147 |   return (
148 |     <div className="app-shell">
149 |       <aside className="sidebar">
150 |         <div className="brand">
151 |           <div className="brand-mark">OG</div>
152 |           <div>
153 |             <strong>Ozzyl Guard</strong>
154 |             <span>COD Intelligence</span>
155 |           </div>
156 |         </div>
157 |         <nav aria-label="Dashboard navigation">
158 |           {navItems.map((item) => (
159 |             <button
160 |               className={view === item.id ? 'nav-item active' : 'nav-item'}
161 |               key={item.id}
162 |               onClick={() => setView(item.id)}
163 |               type="button"
164 |             >
165 |               <span>{item.label}</span>
166 |               <small>{item.description}</small>
167 |             </button>
168 |           ))}
169 |         </nav>
170 |         <div className="sidebar-footer">
171 |           <span className="status-dot" />
172 |           <div>
173 |             <strong>Authenticated live data</strong>
174 |             <small>
175 |               {overview ? `Updated ${formatDate(overview.generated_at)}` : 'Loading scope'}
176 |             </small>
177 |           </div>
178 |         </div>
179 |       </aside>
180 |
181 |       <main className="main-area">
182 |         <header className="topbar">
183 |           <div>
184 |             <p className="eyebrow">{selectedStore?.organizationName ?? 'Merchant workspace'}</p>
185 |             <h1>{activeNav?.label}</h1>
186 |           </div>
187 |           <div className="topbar-actions">
188 |             <select
189 |               aria-label="Select store"
190 |               value={selectedStore ? storeKey(selectedStore) : ''}
191 |               onChange={(event) => {
192 |                 const next = stores.find((store) => storeKey(store) === event.target.value) ?? null;
193 |                 setSelectedStore(next);
194 |               }}
195 |             >
196 |               {stores.map((store) => (
197 |                 <option key={storeKey(store)} value={storeKey(store)}>
198 |                   {store.storeName} · {store.platform}
199 |                 </option>
200 |               ))}
201 |             </select>
202 |             <div className="topbar-user">
203 |               <strong>{session.user.email}</strong>
204 |               <small>{overview?.scope.role ?? 'member'}</small>
205 |             </div>
206 |             <button
207 |               className="secondary-button"
208 |               disabled={loading}
209 |               onClick={() => void handleLogout()}
210 |               type="button"
211 |             >
212 |               Sign out
213 |             </button>
214 |           </div>
215 |         </header>
216 |
217 |         {error && <div className="page-error">{error}</div>}
218 |         {loading && <div className="live-banner">Refreshing live data…</div>}
219 |         {!overview ? (
220 |           <LoadingState label="Loading store overview…" />
221 |         ) : (
222 |           <>
223 |             {view === 'overview' && (
224 |               <Overview overview={overview} onOpenQueue={() => setView('reviews')} />
225 |             )}
226 |             {view === 'reviews' && (
227 |               <ReviewQueue
228 |                 items={overview.reviews}
229 |                 selected={selectedReview}
230 |                 onSelect={setSelectedReview}
231 |               />
232 |             )}
233 |             {view === 'couriers' && <CourierAccounts overview={overview} />}
234 |             {view === 'policies' && <RiskPolicies />}
235 |             {view === 'usage' && <Usage overview={overview} />}
236 |             {view === 'settings' && <Settings session={session} overview={overview} />}
237 |           </>
238 |         )}
239 |       </main>
240 |     </div>
241 |   );
242 | }
243 |
244 | function LoginScreen({
245 |   error,
246 |   loading,
247 |   onLogin,
248 | }: {
249 |   error: string | null;
250 |   loading: boolean;
251 |   onLogin(email: string, password: string): Promise<void>;
252 | }) {
253 |   const [email, setEmail] = useState('');
254 |   const [password, setPassword] = useState('');
255 |   function submit(event: FormEvent<HTMLFormElement>) {
256 |     event.preventDefault();
257 |     void onLogin(email, password);
258 |   }
259 |   return (
260 |     <main className="auth-shell">
261 |       <form className="auth-card" onSubmit={submit}>
262 |         <div className="brand auth-brand">
263 |           <div className="brand-mark">OG</div>
264 |           <div>
265 |             <strong>Ozzyl Guard</strong>
266 |             <span>Merchant dashboard</span>
267 |           </div>
268 |         </div>
269 |         <div>
270 |           <p className="eyebrow">Secure browser session</p>
271 |           <h1>Sign in</h1>
272 |           <p className="auth-copy">
273 |             Dashboard users authenticate separately from service API keys.
274 |           </p>
275 |         </div>
276 |         <label>
277 |           Email
278 |           <input
279 |             autoComplete="email"
280 |             onChange={(event) => setEmail(event.target.value)}
281 |             required
282 |             type="email"
283 |             value={email}
284 |           />
285 |         </label>
286 |         <label>
287 |           Password
288 |           <input
289 |             autoComplete="current-password"
290 |             minLength={10}
291 |             onChange={(event) => setPassword(event.target.value)}
292 |             required
293 |             type="password"
294 |             value={password}
295 |           />
296 |         </label>
297 |         {error && <div className="form-error">{error}</div>}
298 |         <button className="primary-button" disabled={loading} type="submit">
299 |           {loading ? 'Signing in…' : 'Sign in'}
300 |         </button>
301 |       </form>
302 |     </main>
303 |   );
304 | }
305 |
306 | function Overview({
307 |   overview,
308 |   onOpenQueue,
309 | }: {
310 |   overview: MerchantDashboardOverview;
311 |   onOpenQueue(): void;
312 | }) {
313 |   const total = Math.max(overview.summary.assessments_30d, 1);
314 |   return (
315 |     <section className="content-stack">
316 |       <div className="hero-panel">
317 |         <div>
318 |           <p className="eyebrow">Live · last 30 days</p>
319 |           <h2>{number(overview.summary.assessments_30d)} COD orders assessed</h2>
320 |           <p>
321 |             {number(overview.summary.pending_reviews)} assessments currently require verification,
322 |             review, hold, or merchant action.
323 |           </p>
324 |         </div>
325 |         <div className="hero-score">
326 |           <strong>{number(overview.summary.degraded_30d)}</strong>
327 |           <span>degraded results kept explicit, never treated as automatically safe</span>
328 |         </div>
329 |       </div>
330 |
331 |       <div className="metric-grid">
332 |         <Metric
333 |           title="Assessments"
334 |           value={number(overview.summary.assessments_30d)}
335 |           note="Last 30 days"
336 |         />
337 |         <Metric
338 |           title="Verified"
339 |           value={number(overview.summary.verified_30d)}
340 |           note="Successful OTP sessions"
341 |         />
342 |         <Metric
343 |           title="Needs action"
344 |           value={number(overview.summary.pending_reviews)}
345 |           note="Live review queue"
346 |         />
347 |         <Metric
348 |           title="Monthly usage"
349 |           value={usageLabel(overview)}
350 |           note="Organization entitlement"
351 |         />
352 |       </div>
353 |
354 |       <div className="two-column">
355 |         <article className="panel">
356 |           <div className="panel-heading">
357 |             <div>
358 |               <p className="eyebrow">Risk distribution</p>
359 |               <h3>Decision mix</h3>
360 |             </div>
361 |             <span className="pill neutral">Canonical engine output</span>
362 |           </div>
363 |           <div className="distribution">
364 |             {Object.entries(overview.decisions).map(([decision, count]) => (
365 |               <DistributionRow
366 |                 count={number(count)}
367 |                 key={decision}
368 |                 label={capitalize(decision)}
369 |                 value={Math.round((count / total) * 100)}
370 |               />
371 |             ))}
372 |           </div>
373 |         </article>
374 |
375 |         <article className="panel">
376 |           <div className="panel-heading">
377 |             <div>
378 |               <p className="eyebrow">Needs attention</p>
379 |               <h3>Review queue</h3>
380 |             </div>
381 |             <button className="text-button" onClick={onOpenQueue} type="button">
382 |               View all
383 |             </button>
384 |           </div>
385 |           <div className="compact-list">
386 |             {overview.reviews.slice(0, 5).map((item) => (
387 |               <div className="compact-row" key={item.assessment_id}>
388 |                 <div>
389 |                   <strong>{item.external_order_id ?? item.assessment_id}</strong>
390 |                   <span>
391 |                     {item.phone_masked} · {formatDate(item.created_at)}
392 |                   </span>
393 |                 </div>
394 |                 <RiskBadge decision={item.decision} score={item.risk_score} />
395 |               </div>
396 |             ))}
397 |             {overview.reviews.length === 0 && (
398 |               <div className="empty-state compact">No open reviews.</div>
399 |             )}
400 |           </div>
401 |         </article>
402 |       </div>
403 |     </section>
404 |   );
405 | }
406 |
407 | function ReviewQueue({
408 |   items,
409 |   selected,
410 |   onSelect,
411 | }: {
412 |   items: DashboardReview[];
413 |   selected: DashboardReview | null;
414 |   onSelect(item: DashboardReview): void;
415 | }) {
416 |   return (
417 |     <section className="review-layout">
418 |       <article className="panel queue-panel">
419 |         <div className="panel-heading">
420 |           <div>
421 |             <p className="eyebrow">Actionable assessments</p>
422 |             <h3>{items.length} open reviews</h3>
423 |           </div>
424 |         </div>
425 |         <div className="queue-list">
426 |           {items.map((item) => (
427 |             <button
428 |               className={
429 |                 selected?.assessment_id === item.assessment_id ? 'queue-row selected' : 'queue-row'
430 |               }
431 |               key={item.assessment_id}
432 |               onClick={() => onSelect(item)}
433 |               type="button"
434 |             >
435 |               <div>
436 |                 <strong>{item.external_order_id ?? item.assessment_id}</strong>
437 |                 <span>
438 |                   {item.phone_masked} · {formatDate(item.created_at)}
439 |                 </span>
440 |               </div>
441 |               <RiskBadge decision={item.decision} score={item.risk_score} />
442 |             </button>
443 |           ))}
444 |           {items.length === 0 && <div className="empty-state">No assessments need action.</div>}
445 |         </div>
446 |       </article>
447 |
448 |       <article className="panel detail-panel">
449 |         {selected ? (
450 |           <>
451 |             <div className="panel-heading">
452 |               <div>
453 |                 <p className="eyebrow">Assessment {selected.assessment_id}</p>
454 |                 <h3>{selected.external_order_id ?? 'No external order id'}</h3>
455 |               </div>
456 |               <RiskBadge decision={selected.decision} score={selected.risk_score} />
457 |             </div>
458 |             <div className="detail-metrics">
459 |               <Metric
460 |                 title="Confidence"
461 |                 value={`${Math.round(selected.confidence * 100)}%`}
462 |                 note="Evidence quality"
463 |               />
464 |               <Metric
465 |                 title="Customer"
466 |                 value={selected.phone_masked}
467 |                 note="Masked operational data"
468 |               />
469 |             </div>
470 |             <div className="signal-list">
471 |               <h4>Explainable signals</h4>
472 |               {selected.signals.map((signal) => (
473 |                 <div className="signal" key={signal.code}>
474 |                   <span>
475 |                     {signal.score >= 0 ? '+' : ''}
476 |                     {signal.score}
477 |                   </span>
478 |                   <div>
479 |                     <strong>{signal.description}</strong>
480 |                     <small>{signal.code}</small>
481 |                   </div>
482 |                 </div>
483 |               ))}
484 |             </div>
485 |             <article className="notice-panel panel inline-notice">
486 |               <strong>Pilot safety</strong>
487 |               <p>
488 |                 Broad automatic blocking is disabled. Decisions remain explainable and
489 |                 merchant-reviewed until calibration is approved.
490 |               </p>
491 |             </article>
492 |           </>
493 |         ) : (
494 |           <div className="empty-state">Select an assessment to inspect its evidence.</div>
495 |         )}
496 |       </article>
497 |     </section>
498 |   );
499 | }
500 |
501 | function CourierAccounts({ overview }: { overview: MerchantDashboardOverview }) {
502 |   return (
503 |     <section className="content-stack">
504 |       <div className="section-intro">
505 |         <div>
506 |           <p className="eyebrow">Live scoped connections</p>
507 |           <h2>Courier accounts</h2>
508 |           <p>
509 |             Provider credentials and sessions remain encrypted and outside synchronous checkout.
510 |           </p>
511 |         </div>
512 |       </div>
513 |       {overview.couriers.map((account) => (
514 |         <article className="panel account-card" key={account.provider}>
515 |           <div className="provider-logo">{account.provider[0]?.toUpperCase()}</div>
516 |           <div className="account-info">
517 |             <strong>
518 |               {capitalize(account.provider)} · {overview.scope.store_name}
519 |             </strong>
520 |             <span>{account.failure_code ?? 'No active provider failure code'}</span>
521 |             <div className="account-meta">
522 |               <span>Last success: {formatNullableDate(account.last_success_at)}</span>
523 |               <span>Last failure: {formatNullableDate(account.last_failure_at)}</span>
524 |             </div>
525 |           </div>
526 |           <span className={account.status === 'connected' ? 'pill success' : 'pill neutral'}>
527 |             {account.status}
528 |           </span>
529 |         </article>
530 |       ))}
531 |       {overview.couriers.length === 0 && (
532 |         <article className="panel empty-state">
533 |           No courier account is connected to this store.
534 |         </article>
535 |       )}
536 |       <article className="panel notice-panel">
537 |         <strong>Provider degradation policy</strong>
538 |         <p>
539 |           A provider outage never marks a customer safe or fraudulent. Missing evidence remains
540 |           explicit and routes to verification or review.
541 |         </p>
542 |       </article>
543 |     </section>
544 |   );
545 | }
546 |
547 | function RiskPolicies() {
548 |   return (
549 |     <section className="content-stack">
550 |       <article className="panel notice-panel">
551 |         <p className="eyebrow">Production hardening</p>
552 |         <h2>Automatic blocking remains disabled</h2>
553 |         <p>
554 |           The existing versioned policy and single canonical Risk Engine remain unchanged. Broad
555 |           automatic blocking will not be enabled before selected-merchant pilot review and
556 |           confidence calibration.
557 |         </p>
558 |       </article>
559 |     </section>
560 |   );
561 | }
562 |
563 | function Usage({ overview }: { overview: MerchantDashboardOverview }) {
564 |   const limit = overview.summary.usage_limit;
565 |   const percentage = limit ? Math.min(100, (overview.summary.usage_month / limit) * 100) : 0;
566 |   return (
567 |     <section className="content-stack">
568 |       <div className="metric-grid">
569 |         <Metric
570 |           title="Assessments used"
571 |           value={number(overview.summary.usage_month)}
572 |           note="Current month"
573 |         />
574 |         <Metric
575 |           title="Plan limit"
576 |           value={limit === null ? 'Custom' : number(limit)}
577 |           note="Organization-wide"
578 |         />
579 |         <Metric
580 |           title="Open reviews"
581 |           value={number(overview.summary.pending_reviews)}
582 |           note="Current store"
583 |         />
584 |         <Metric
585 |           title="Degraded results"
586 |           value={number(overview.summary.degraded_30d)}
587 |           note="Last 30 days"
588 |         />
589 |       </div>
590 |       <article className="panel">
591 |         <div className="panel-heading">
592 |           <div>
593 |             <p className="eyebrow">Monthly entitlement</p>
594 |             <h3>{limit === null ? 'Custom plan usage' : `${Math.round(percentage)}% used`}</h3>
595 |           </div>
596 |         </div>
597 |         {limit !== null && (
598 |           <div className="large-progress">
599 |             <span style={{ width: `${percentage}%` }} />
600 |           </div>
601 |         )}
602 |       </article>
603 |     </section>
604 |   );
605 | }
606 |
607 | function Settings({
608 |   session,
609 |   overview,
610 | }: {
611 |   session: BrowserSessionResponse;
612 |   overview: MerchantDashboardOverview;
613 | }) {
614 |   return (
615 |     <section className="content-stack">
616 |       <div className="two-column">
617 |         <article className="panel">
618 |           <p className="eyebrow">Authenticated user</p>
619 |           <h3>{session.user.email}</h3>
620 |           <div className="compact-list">
621 |             <IntegrationRow name="Platform role" value={session.user.platform_role} />
622 |             <IntegrationRow name="Organization role" value={overview.scope.role} />
623 |             <IntegrationRow name="Session expires" value={formatDate(session.expires_at)} />
624 |           </div>
625 |         </article>
626 |         <article className="panel">
627 |           <p className="eyebrow">Active tenant scope</p>
628 |           <h3>{overview.scope.store_name}</h3>
629 |           <div className="compact-list">
630 |             <IntegrationRow name="Organization" value={overview.scope.organization_name} />
631 |             <IntegrationRow name="Platform" value={overview.scope.platform} />
632 |             <IntegrationRow name="Store id" value={overview.scope.store_id} />
633 |           </div>
634 |         </article>
635 |       </div>
636 |       <article className="panel notice-panel">
637 |         <strong>Credential separation enforced</strong>
638 |         <p>
639 |           Browser user sessions are distinct from integration API keys. Raw service keys are not
640 |           used as cookies.
641 |         </p>
642 |       </article>
643 |     </section>
644 |   );
645 | }
646 |
647 | function LoadingState({ label }: { label: string }) {
648 |   return <main className="loading-state">{label}</main>;
649 | }
650 |
651 | function Metric({ title, value, note }: { title: string; value: string; note: string }) {
652 |   return (
653 |     <article className="metric-card">
654 |       <span>{title}</span>
655 |       <strong>{value}</strong>
656 |       <small>{note}</small>
657 |     </article>
658 |   );
659 | }
660 |
661 | function DistributionRow({ label, value, count }: { label: string; value: number; count: string }) {
662 |   return (
663 |     <div className="distribution-row">
664 |       <span>{label}</span>
665 |       <div className="progress">
666 |         <i style={{ width: `${value}%` }} />
667 |       </div>
668 |       <strong>{count}</strong>
669 |     </div>
670 |   );
671 | }
672 |
673 | function RiskBadge({ decision, score }: { decision: DashboardReview['decision']; score: number }) {
674 |   return (
675 |     <span className={`risk-badge ${decision}`}>
676 |       {decision} · {score}
677 |     </span>
678 |   );
679 | }
680 |
681 | function IntegrationRow({ name, value }: { name: string; value: string }) {
682 |   return (
683 |     <div className="compact-row">
684 |       <strong>{name}</strong>
685 |       <span className="pill neutral">{value}</span>
686 |     </div>
687 |   );
688 | }
689 |
690 | function flattenStores(session: BrowserSessionResponse | null): StoreOption[] {
691 |   if (!session) return [];
692 |   return session.organizations.flatMap((organization) =>
693 |     organization.stores.map((store) => ({
694 |       organizationId: organization.id,
695 |       organizationName: organization.name,
696 |       storeId: store.id,
697 |       storeName: store.name,
698 |       platform: store.platform,
699 |     })),
700 |   );
701 | }
702 |
703 | function storeKey(store: StoreOption): string {
704 |   return `${store.organizationId}:${store.storeId}`;
705 | }
706 |
707 | async function readJson<T = { success: true }>(response: Response): Promise<T> {
708 |   const body = (await response.json()) as T & {
709 |     error?: { message?: string };
710 |   };
711 |   if (!response.ok)
712 |     throw new Error(body.error?.message ?? `Request failed with status ${response.status}`);
713 |   return body;
714 | }
715 |
716 | function errorMessage(error: unknown): string {
717 |   return error instanceof Error ? error.message : 'The request could not be completed';
718 | }
719 |
720 | function number(value: number): string {
721 |   return new Intl.NumberFormat('en-BD').format(value);
722 | }
723 |
724 | function usageLabel(overview: MerchantDashboardOverview): string {
725 |   const limit = overview.summary.usage_limit;
726 |   return limit === null
727 |     ? number(overview.summary.usage_month)
728 |     : `${number(overview.summary.usage_month)} / ${number(limit)}`;
729 | }
730 |
731 | function formatDate(value: string): string {
732 |   return new Intl.DateTimeFormat('en-BD', {
733 |     dateStyle: 'medium',
734 |     timeStyle: 'short',
735 |     timeZone: 'Asia/Dhaka',
736 |   }).format(new Date(value));
737 | }
738 |
739 | function formatNullableDate(value: string | null): string {
740 |   return value ? formatDate(value) : 'Not recorded';
741 | }
742 |
743 | function capitalize(value: string): string {
744 |   return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
745 | }
746 |
```

### docs/adr/0005-browser-session-authentication.md

Bytes: 3346
SHA-256: 5b537bc8715d8d5cf44f25edad2e6220d705bdb76898bfb960ba2a596d4679aa
Lines: 1-57 of 57

```markdown
 1 | # ADR 0005 — Browser Session Authentication Baseline
 2 |
 3 | - Status: Accepted
 4 | - Date: 2026-07-16
 5 | - Owners: Ozzyl Guard engineering
 6 |
 7 | ## Context
 8 |
 9 | The merchant dashboard and platform administration UI previously contained representative data only. The database already had users, Argon2id password support, opaque session-token primitives, user sessions, organization memberships, stores, and audit events. Service API keys are intentionally scoped machine credentials and must not become dashboard login cookies.
10 |
11 | A managed identity provider may still be selected later, but production hardening requires a secure pilot-ready browser authentication boundary now without creating a second authorization model or exposing service keys to browser storage.
12 |
13 | ## Decision
14 |
15 | For the pilot baseline:
16 |
17 | 1. Authenticate browser users with the existing Argon2id password verification primitive.
18 | 2. Issue a random opaque session token in an `HttpOnly`, `SameSite=Lax` cookie. Store only the HMAC hash in PostgreSQL.
19 | 3. Derive a separate CSRF proof from the opaque token and a server-held secret; require it on state-changing browser requests.
20 | 4. Resolve active organization memberships and active stores for every session.
21 | 5. Recheck organization/store membership inside merchant PostgreSQL repositories; a session claim alone is not sufficient.
22 | 6. Keep platform administration behind an explicit `users.platform_role = 'platform_admin'` authorization check.
23 | 7. Keep dashboard sessions completely separate from service API keys.
24 | 8. Audit login, logout, merchant overview access, and platform-admin overview access without recording passwords, raw session tokens, CSRF proofs, API keys, provider credentials, or cookies.
25 | 9. Keep broad automatic blocking disabled during pilot calibration.
26 |
27 | ## Consequences
28 |
29 | - The dashboard and admin can use authenticated live data before a managed identity provider is selected.
30 | - PostgreSQL is currently the authoritative browser-session store; horizontal scaling therefore does not require sticky sessions.
31 | - Session-cookie security depends on TLS in production and strong `SESSION_PEPPER` and `SESSION_CSRF_SECRET` values from an approved secret manager.
32 | - Password reset, MFA, account invitation, recovery, and managed identity federation remain outside this baseline.
33 | - A future managed identity provider may supersede credential verification, but tenant authorization, service-key separation, audit rules, and repository scope checks remain valid.
34 |
35 | ## Alternatives considered
36 |
37 | ### Reuse service API keys in the browser
38 |
39 | Rejected. It would mix user and machine identities, increase exfiltration risk, and violate the established credential boundary.
40 |
41 | ### Wait for a managed identity provider
42 |
43 | Rejected for the pilot baseline because the existing secure primitives and schema can provide a bounded implementation now. Provider selection remains a future infrastructure/security decision.
44 |
45 | ### Store raw bearer sessions or JWTs in local storage
46 |
47 | Rejected. Raw secrets must not be persisted in application storage accessible to browser scripts, and revocation must remain server-controlled.
48 |
49 | ## Related implementation
50 |
51 | - `packages/database/migrations/0006_browser_access.sql`
52 | - `apps/api/src/browser.ts`
53 | - `apps/api/src/postgres.ts`
54 | - `apps/dashboard/src/App.tsx`
55 | - `apps/admin/src/main.tsx`
56 | - `docs/security/security-privacy.md`
57 |
```

### docs/api/api-specification.md

Bytes: 5564
SHA-256: a7845109516dfc7204d16844dbec58065f9ba3eba589d34d249f07083668b343
Lines: 1-246 of 246

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
171 | ## Verify OTP
172 |
173 | ```http
174 | POST /v1/verifications/otp/verify
175 | ```
176 |
177 | ```json
178 | {
179 |   "verification_id": "ver_123",
180 |   "otp": "123456"
181 | }
182 | ```
183 |
184 | ## Submit outcome
185 |
186 | ```http
187 | POST /v1/order-outcomes
188 | ```
189 |
190 | ```json
191 | {
192 |   "external_order_id": "WC-1092",
193 |   "assessment_id": "ras_123",
194 |   "outcome": "returned",
195 |   "provider": "steadfast",
196 |   "reason": "customer_refused",
197 |   "occurred_at": "2026-07-16T10:30:00Z"
198 | }
199 | ```
200 |
201 | Outcome submissions require idempotency and evidence/source metadata. Integrations should send outcomes from the first MVP.
202 |
203 | ## Webhooks
204 |
205 | Events:
206 |
207 | - `assessment.completed`
208 | - `verification.verified`
209 | - `verification.failed`
210 | - `courier.connection_failed`
211 | - `order.outcome_recorded`
212 | - `usage.limit_warning`
213 |
214 | Webhook requirements:
215 |
216 | - HMAC signature
217 | - timestamp header
218 | - replay protection
219 | - retry with exponential backoff
220 | - delivery log
221 | - bounded payload and SSRF-safe destination validation
222 |
223 | ## Error format
224 |
225 | ```json
226 | {
227 |   "success": false,
228 |   "error": {
229 |     "code": "INVALID_PHONE",
230 |     "message": "A valid Bangladesh mobile number is required",
231 |     "details": {}
232 |   },
233 |   "request_id": "req_123"
234 | }
235 | ```
236 |
237 | ## Contract rules
238 |
239 | - All integrations use this same contract.
240 | - Risk levels and decisions are lowercase canonical enums.
241 | - Signals use `code`; adapters/plugins must not invent `name` or `type` variants.
242 | - Provider/network failure must not appear as low risk.
243 | - API key environment and store scope must be enforced server-side.
244 | - Quota/entitlement enforcement must be safe under concurrency.
245 | - Idempotent retries return the original logically equivalent result.
246 |
```

### docs/database/database-design.md

Bytes: 5464
SHA-256: 0df3fa0fb2fdbb2e487cd4fbde042fbdbe8a80d87c0454a925da184fc08c4551
Lines: 1-286 of 286

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
 48 | All merchant-owned repository methods must require an explicit organization/store scope. Scope filters must not be optional.
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
 68 | Raw API keys are shown once and never stored. Key prefixes are `ozg_test_` and `ozg_live_` followed by sufficient random material.
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
146 | ### `courier_sync_jobs`
147 |
148 | - provider/account
149 | - job type
150 | - status
151 | - attempts
152 | - scheduled time
153 | - started/completed time
154 | - error code
155 |
156 | ## Risk subsystem
157 |
158 | ### `risk_assessments`
159 |
160 | - `id`
161 | - `organization_id`
162 | - `store_id`
163 | - `external_order_id`
164 | - `phone_hash`
165 | - encrypted phone reference if operationally required
166 | - order snapshot fields
167 | - score
168 | - confidence
169 | - risk level
170 | - decision
171 | - engine version
172 | - policy version
173 | - degraded flags
174 | - timestamps
175 |
176 | ### `risk_signals`
177 |
178 | - assessment id
179 | - signal code
180 | - category
181 | - score contribution
182 | - confidence
183 | - description
184 | - evidence reference
185 |
186 | ### `risk_policies`
187 |
188 | - store id
189 | - version
190 | - thresholds
191 | - action configuration
192 | - active flag
193 | - timestamps
194 |
195 | ### `order_outcomes`
196 |
197 | - store/order references
198 | - outcome
199 | - provider
200 | - reason
201 | - source
202 | - confirmed at
203 | - evidence reference
204 |
205 | ## Reputation subsystem
206 |
207 | ### `reputation_reports`
208 |
209 | - reporter store
210 | - subject phone hash
211 | - category
212 | - evidence type
213 | - order/courier reference
214 | - status
215 | - confidence
216 | - expiry/decay data
217 |
218 | ### `network_reputation`
219 |
220 | Materialized/derived score by phone hash:
221 |
222 | - positive outcomes
223 | - negative courier-confirmed outcomes
224 | - independent reporters
225 | - confidence
226 | - last evidence time
227 | - decay-adjusted score
228 |
229 | ### `reputation_disputes`
230 |
231 | - report/subject
232 | - reason
233 | - evidence
234 | - review status
235 | - resolution
236 |
237 | ## Verification subsystem
238 |
239 | ### `verification_sessions`
240 |
241 | - assessment/order/store
242 | - phone hash
243 | - purpose
244 | - channel
245 | - status
246 | - expiry
247 | - verified at
248 |
249 | ### `otp_attempts`
250 |
251 | - verification session
252 | - hashed OTP
253 | - attempts
254 | - provider message id
255 | - sent/delivered/failed times
256 | - expiry
257 |
258 | Never store OTP plaintext.
259 |
260 | ## Initial migration boundaries
261 |
262 | Migration 0001 should establish only the Phase 1 foundation:
263 |
264 | - users
265 | - sessions
266 | - organizations
267 | - organization_members
268 | - stores
269 | - plans/entitlements
270 | - api_keys
271 | - usage_events
272 | - audit_events
273 |
274 | Courier, risk, verification, and reputation tables should be introduced in subsequent append-only migrations aligned with coherent milestones.
275 |
276 | Current ordered migrations:
277 |
278 | 1. `0001_foundation.sql` — identity, tenancy, plans, API keys, usage, and audit.
279 | 2. `0002_courier.sql` — courier accounts, encrypted credential/session records, observations, and jobs.
280 | 3. `0003_risk.sql` — risk policies, assessments, signals, and outcomes.
281 | 4. `0004_verification_events.sql` — OTP verification and webhook delivery foundation.
282 | 5. `0005_durable_operations.sql` — durable job payloads, idempotent outcomes, and idempotency records.
283 | 6. `0006_browser_access.sql` — explicit platform role plus browser dashboard/admin query indexes.
284 |
285 | Migration 0006 does not store raw session material. `user_sessions.token_hash` remains the only persisted session-token representation. The merchant dashboard repository authorizes with `(user_id, organization_id, store_id)` before running any aggregate query.
286 |
```

### docs/security/security-privacy.md

Bytes: 5086
SHA-256: 0ff5c4b5f21cc403b19990998d23eed43ab4050487a5c19423fabd2914e36e3b
Lines: 1-138 of 138

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
 45 | - Raw courier payloads unless explicitly encrypted, access-controlled, retained briefly, and required for evidence/debugging
 46 |
 47 | All exception/error serialization must pass through a central redaction layer.
 48 |
 49 | ## Phone data
 50 |
 51 | - Normalize consistently
 52 | - Use keyed hash/HMAC for cross-table matching where appropriate
 53 | - Encrypt raw phone only when operational lookup is necessary
 54 | - Separate analytics identity from operational contact data
 55 | - Document retention and deletion behavior
 56 |
 57 | ## Credential storage
 58 |
 59 | - Envelope encryption
 60 | - Key version stored with ciphertext
 61 | - Master keys outside database
 62 | - Rotation procedure
 63 | - Strict service identity permissions
 64 | - Separate encryption context/keys for credentials and sessions
 65 | - Audit credential reads and decrypt operations
 66 | - Decryption failure must fail closed
 67 |
 68 | ## Multi-tenancy
 69 |
 70 | Every merchant-owned record includes organization/store scope. Repository methods require scope parameters rather than optional filters.
 71 |
 72 | Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, or logs.
 73 |
 74 | ## Shared reputation safeguards
 75 |
 76 | - No single merchant report should globally block a customer.
 77 | - Prefer courier-confirmed outcomes.
 78 | - Require independent evidence for high-impact reputation.
 79 | - Apply time decay.
 80 | - Provide dispute and correction mechanisms.
 81 | - Detect abusive or low-quality reporters.
 82 | - Preserve evidence lineage.
 83 | - Do not launch cross-merchant reputation in the foundation MVP without privacy/legal review.
 84 |
 85 | ## OTP security
 86 |
 87 | - 6-digit cryptographically random OTP
 88 | - Store only hash
 89 | - 5–10 minute expiry
 90 | - Maximum attempts
 91 | - Per-phone, per-IP, per-store, and per-organization rate limits
 92 | - Bind OTP to verification session/order/purpose
 93 | - Do not expose delivery success when provider actually failed
 94 | - Do not log OTP values
 95 |
 96 | ## Web security
 97 |
 98 | - CSRF protection for dashboard actions
 99 | - CSP and secure headers
100 | - Input validation and output encoding
101 | - SSRF protection in webhook/custom URL features
102 | - HMAC-signed webhooks
103 | - Timestamp and replay prevention
104 | - Request size limits
105 | - Idempotency abuse protection
106 | - Safe CORS configuration by integration type
107 |
108 | ## Courier automation security
109 |
110 | - Playwright runs in isolated workers with least privilege
111 | - No browser execution in synchronous API/checkout paths
112 | - Screenshots/traces are redacted, access-controlled, and short-lived
113 | - Provider credentials are not passed through shell arguments
114 | - Session refresh failures are visible; they are never silently ignored
115 | - Provider terms and merchant authorization must be reviewed before commercial scale
116 |
117 | ## Operational security
118 |
119 | - Audit logs
120 | - Secret rotation
121 | - Dependency scanning
122 | - SAST and secret scanning
123 | - Backups and restore testing
124 | - Incident response runbook
125 | - Key compromise and courier credential compromise runbooks
126 | - Production access review and break-glass procedure
127 |
128 | ## Source SaaS findings that must not be copied
129 |
130 | - Custom SHA-256 password hashing
131 | - Raw API key saved in metadata
132 | - Raw API key used as a login cookie
133 | - Full phone numbers logged by blacklist stubs
134 | - Shell commands containing session payloads
135 | - Hardcoded infrastructure identifiers
136 | - Decryption fallback to plaintext
137 | - Broad unaudited cross-store lookup
138 |
```

### packages/database/migrations/0006_browser_access.sql

Bytes: 619
SHA-256: a0090ddd9c9d6312db83066ab2132d13807ddb6ce353269527ab3d0ec33f409a
Lines: 1-16 of 16

```text
 1 | alter table users
 2 |   add column platform_role text not null default 'merchant'
 3 |   check (platform_role in ('merchant', 'platform_admin'));
 4 |
 5 | create index users_platform_role_idx on users(platform_role) where status = 'active';
 6 |
 7 | create index risk_assessments_dashboard_scope_idx
 8 |   on risk_assessments(organization_id, store_id, created_at desc);
 9 |
10 | create index courier_jobs_operations_status_idx
11 |   on courier_jobs(status, scheduled_at, created_at);
12 |
13 | -- Rollback notes:
14 | -- Drop the three indexes, then drop users.platform_role only after all platform-admin
15 | -- accounts have been converted to another authorization mechanism.
16 |
```

### tracker.yml

Bytes: 5349
SHA-256: b7b96601a776ead2cbd37b5e1fd95dd6527911edd7b3849bf9d25c10c4eb1c1c
Lines: 1-156 of 156

```yaml
  1 | schema_version: 1
  2 | project:
  3 |   name: Ozzyl Guard
  4 |   repository: rahmatullahboss/ozzyl-guard
  5 |   branch: main
  6 |   visibility: public
  7 |   expected_visibility: private
  8 |   status: production-hardening-in-progress
  9 |   last_updated: 2026-07-16
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
 43 |   roadmap: docs/roadmap/implementation-roadmap.md
 44 |   backlog: docs/roadmap/initial-backlog.md
 45 |   risks: docs/roadmap/risk-register.md
 46 |   current_plan: .ai-bridge/current-plan.md
 47 |   implementation_status: .ai-bridge/implementation-status.md
 48 |   decisions: .ai-bridge/decisions.md
 49 |   full_context: .ai-bridge/pro-context.md
 50 |
 51 | invariants:
 52 |   - exactly_one_canonical_risk_engine
 53 |   - risk_engine_has_no_external_io
 54 |   - courier_access_only_through_adapters_and_workers
 55 |   - api_handlers_have_no_scoring_logic
 56 |   - merchant_data_requires_organization_and_store_scope
 57 |   - unknown_data_is_not_safe_by_default
 58 |   - provider_failure_is_not_an_automatic_decision
 59 |   - user_sessions_are_separate_from_service_access
 60 |   - applied_migrations_are_immutable
 61 |   - all_integrations_use_the_versioned_api_contract
 62 |   - long_running_provider_work_is_asynchronous
 63 |
 64 | implemented:
 65 |   - typescript_monorepo_and_ci
 66 |   - postgresql_schema_and_six_migrations
 67 |   - organization_store_membership_and_plan_foundation
 68 |   - usage_metering_and_audit_foundation
 69 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
 70 |   - pure_versioned_explainable_risk_engine
 71 |   - canonical_v1_api_and_postgresql_repositories
 72 |   - steadfast_adapter_and_browser_session_worker
 73 |   - postgresql_courier_sync_worker
 74 |   - verification_and_webhook_libraries
 75 |   - woocommerce_shopify_custom_and_native_adapters
 76 |   - authenticated_live_merchant_dashboard
 77 |   - authenticated_live_platform_admin
 78 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
 79 |   - docker_compose_baseline
 80 |
 81 | verification:
 82 |   command: npm run verify
 83 |   last_verified: 2026-07-16
 84 |   status: passed
 85 |   results:
 86 |     migrations: 6_of_6
 87 |     architecture_boundaries: passed
 88 |     typecheck: 18_of_18
 89 |     test_tasks: 26_of_26
 90 |     local_assertions: 29_passed_3_postgresql_skipped
 91 |     remote_assertions: 32_passed
 92 |     builds: 18_of_18
 93 |     php_syntax: passed
 94 |     high_critical_dependency_check: passed
 95 |     documentation_links: 49_checked_0_broken
 96 |   local_limitations:
 97 |     - docker_and_postgresql_are_not_available_in_this_workspace
 98 |     - three_postgresql_browser_access_integration_tests_require_database_url
 99 |   remote_ci:
100 |     status: passed
101 |     run_id: 29516535736
102 |     job_id: 87682870530
103 |     job: verify
104 |     commit: cdfff5a504e9309bd64bae188c3dd03729f1133e
105 |     duration: 1m50s
106 |     completed: 2026-07-16
107 |     postgresql_tests: 3_of_3_passed
108 |
109 | migrations:
110 |   immutable: true
111 |   files:
112 |     - packages/database/migrations/0001_foundation.sql
113 |     - packages/database/migrations/0002_courier.sql
114 |     - packages/database/migrations/0003_risk.sql
115 |     - packages/database/migrations/0004_verification_events.sql
116 |     - packages/database/migrations/0005_durable_operations.sql
117 |     - packages/database/migrations/0006_browser_access.sql
118 |
119 | external_dependencies:
120 |   - authorized_steadfast_test_account
121 |   - provider_authorization_review
122 |   - production_managed_encryption_service
123 |   - otp_provider_account
124 |   - hosting_database_queue_cache_and_observability_decisions
125 |   - pilot_outcome_data
126 |
127 | next_milestone:
128 |   name: production-hardening-and-pilot-readiness
129 |   tasks:
130 |     - record_infrastructure_adrs
131 |     - expand_postgresql_concurrency_idempotency_and_tenant_tests
132 |     - validate_steadfast_with_an_authorized_account
133 |     - implement_the_selected_otp_runner
134 |     - add_durable_event_and_verification_runners
135 |     - enable_native_adapter_shadow_mode
136 |     - run_a_selected_merchant_pilot
137 |     - calibrate_decisions_before_broad_automatic_blocking
138 |
139 | release_policy:
140 |   branch: main
141 |   before_push:
142 |     - npm_run_verify_passes
143 |     - documentation_and_tracker_are_current
144 |     - repository_review_is_clean
145 |   rules:
146 |     - no_force_push_to_main
147 |     - do_not_edit_applied_migrations
148 |     - use_descriptive_commits
149 |
150 | notes:
151 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
152 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
153 |   - github_connector_reports_public_visibility_while_expected_state_is_private
154 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
155 |   - update_this_file_after_every_material_milestone
156 |
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

Bytes: 1503
SHA-256: 38cd7b0e952289548c41ec4a32ef9689aa015c66507bacb38c1ee403639f2276
Lines: 1-49 of 49

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
31 |     "check:architecture": "node scripts/check-architecture.mjs",
32 |     "verify": "npm run format:check && npm run lint && npm run db:check && npm run check:architecture && npm run typecheck && npm run test && npm run build"
33 |   },
34 |   "devDependencies": {
35 |     "@eslint/js": "^9.39.2",
36 |     "@types/node": "^24.0.0",
37 |     "@vitest/coverage-v8": "^4.0.18",
38 |     "drizzle-kit": "^0.31.4",
39 |     "eslint": "^9.39.2",
40 |     "prettier": "^3.6.2",
41 |     "tsup": "^8.5.0",
42 |     "tsx": "^4.20.6",
43 |     "turbo": "^2.8.13",
44 |     "typescript": "^5.8.3",
45 |     "typescript-eslint": "^8.53.0",
46 |     "vitest": "^4.0.18"
47 |   }
48 | }
49 |
```

## Skipped Files

None.
