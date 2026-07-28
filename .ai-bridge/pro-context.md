# Ozzyl Guard Browser and Integration Metrics Verified Context

Generated: 2026-07-28T18:18:54.195Z
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
## docs/browser-integration-metrics-verification-evidence
 M .ai-bridge/current-plan.md
 M .ai-bridge/implementation-status.md
 M docs/README.md
 M tracker.yml
```

## Recent Commits

```text
c697935 (HEAD -> docs/browser-integration-metrics-verification-evidence, origin/main, main) feat(observability): instrument browser surfaces (#42)
a09a782 docs: record critical path metrics CI evidence (#41)
dfaf92c feat(observability): instrument critical API paths (#40)
1d31af8 docs: record distributed trace CI evidence (#39)
0b6125a feat(observability): propagate durable trace context (#38)
6425136 docs: record durable metrics CI evidence (#37)
53b8820 feat(observability): instrument durable operations (#36)
2e71b97 docs: record metrics CI evidence (#35)
```

## Git Diff

```diff
diff --git a/.ai-bridge/current-plan.md b/.ai-bridge/current-plan.md
index 7989dac..caefae3 100644
--- a/.ai-bridge/current-plan.md
+++ b/.ai-bridge/current-plan.md
@@ -154,16 +154,16 @@ Concrete provider selection and provisioning remain external production work.

 - Formatting check: passed
 - ESLint with zero warnings: passed
-- Fourteen migration files ordered/non-empty/non-destructive: passed locally; current source-branch CI is pending
-- First migration apply and immediate migration replay: previous merged baseline passed remotely; this slice has no migration change
-- Architecture import boundaries: passed locally; current source-branch CI is pending
-- Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
-- Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
-- Repository test inventory: 191 source tests; previous merged remote baseline is 186
-- Browser/integration metric coverage: 22 shared observability tests and 56 API source tests cover browser controls/dependencies, relational reauthorization, native-shadow rollout/comparison/attempt success/replay/conflict/error, identifier omission, and sink isolation
+- Fourteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
+- First migration apply and immediate migration replay: passed remotely; this slice had no migration change
+- Architecture import boundaries: passed locally and in source-branch CI
+- Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
+- Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
+- Repository tests: 191 passed in PostgreSQL-integrated source-branch CI
+- Browser/integration metric coverage: 22 shared observability tests and 56 API source tests passed for browser controls/dependencies, relational reauthorization, native-shadow rollout/comparison/attempt success/replay/conflict/error, identifier omission, and sink isolation
 - Tracing coverage: previous merged source CI passed 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests
-- Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
-- WooCommerce PHP syntax: passed locally; current source-branch CI is pending
+- Production builds: 20 of 20 workspaces passed locally and in source-branch CI
+- WooCommerce PHP syntax: passed locally and in source-branch CI
 - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
 - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
 - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
@@ -206,11 +206,13 @@ Concrete provider selection and provisioning remain external production work.
 - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
 - Critical-path domain-metrics final CI run `30348649679`, job `90240703555`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 186 tests, 20 builds, and PHP lint passed at head `4242c1244a56a1e74de721fb34ba06612bdcae64`
 - The verified critical-path domain-metrics milestone was squash-merged through PR #40 to `main` as `dfaf92c4f1f29a0068363d815b9cc3d0902be6fe`
+- Browser/integration metrics final CI run `30386368200`, job `90366572706`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 191 tests, 20 builds, and PHP lint passed at head `d29b5ef672ce31d65c6c3bfecacdc363ccf611ad`
+- The verified browser/integration metrics milestone was squash-merged through PR #42 to `main` as `c697935549c427e4a4a6c81ad642416363e89e8e`
 - Canonical documentation links: 61 reviewed locally with zero known broken internal links
 - `tracker.yml` YAML structure remains valid
 - Changed-file secret-pattern scan: passed

-The repository-local continuation exporter was refreshed after browser/integration metric documentation and tracker updates were finalized.
+The repository-local continuation exporter was refreshed after the merged browser/integration metrics verification evidence was recorded.

 ## Next production milestone

diff --git a/.ai-bridge/implementation-status.md b/.ai-bridge/implementation-status.md
index b726069..35d5b25 100644
--- a/.ai-bridge/implementation-status.md
+++ b/.ai-bridge/implementation-status.md
@@ -81,12 +81,12 @@ Applied migrations must remain immutable.

 - `npm run format:check`: passed
 - `npm run lint`: passed with zero warnings
-- `npm run db:check`: fourteen migrations and committed SHA-256 manifest validated locally; current source-branch CI is pending
-- initial migration apply/replay, history integrity, and clean restore: previous merged baseline passed remotely; this slice has no migration change
-- `npm run check:architecture`: passed locally; current source-branch CI is pending
-- `npm run typecheck`: 20/20 workspaces passed locally; current source-branch CI is pending
-- `npm run test`: 31/31 Turbo tasks passed locally; source inventory is 191 tests and previous merged remote baseline is 186
-- `npm run build`: 20/20 workspace builds passed locally; current source-branch CI is pending
+- `npm run db:check`: fourteen migrations and committed SHA-256 manifest validated locally and in source-branch CI
+- initial migration apply/replay, history integrity, and clean restore: passed remotely; this slice had no migration change
+- `npm run check:architecture`: passed locally and in source-branch CI
+- `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
+- `npm run test`: 31/31 Turbo tasks and 191 tests passed in PostgreSQL-integrated source-branch CI
+- `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
 - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 - Observability tests prove fixed log metadata/redaction, finite metric/span descriptors, strict W3C trace parsing/formatting/persistence, bounded control/dependency/risk distributions, exporter-neutral JSON points, and sink/clock/ID-generation failure isolation
 - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, bounded request/API/browser control and dependency metrics, risk/outcome distributions, replay/conflict handling, quota-limit and controlled-rejection vs dependency-error distinctions, identifier omission, safe serialization, and authenticated API/browser availability during metric sink failure
@@ -149,12 +149,14 @@ Applied migrations must remain immutable.
 - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
 - Critical-path domain-metrics final run `30348649679`, job `90240703555`: GitGuardian, fourteen migrations, 20 typechecks, 31 Turbo tasks with 186 tests, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `4242c1244a56a1e74de721fb34ba06612bdcae64`
 - The verified critical-path domain-metrics milestone was squash-merged through PR #40 to `main` as `dfaf92c4f1f29a0068363d815b9cc3d0902be6fe`
+- Browser/integration metrics final run `30386368200`, job `90366572706`: GitGuardian, fourteen migrations, 20 typechecks, 31 Turbo tasks with 191 tests, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `d29b5ef672ce31d65c6c3bfecacdc363ccf611ad`
+- The verified browser/integration metrics milestone was squash-merged through PR #42 to `main` as `c697935549c427e4a4a6c81ad642416363e89e8e`
 - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
 - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
 - Previous canonical documentation checks found zero broken internal links
 - Prohibited insecure-pattern scan: zero matches

-The repository-local exporter was refreshed after browser/integration metric documentation and tracker updates were finalized. Current source-branch remote CI is pending.
+The repository-local exporter was refreshed after the merged browser/integration metrics verification evidence was recorded.

 ## External blockers and production requirements

diff --git a/docs/README.md b/docs/README.md
index 037aa3a..e8eac44 100644
--- a/docs/README.md
+++ b/docs/README.md
@@ -4,7 +4,7 @@ This directory is the long-term product and engineering source of truth. New dev

 ## Current verified milestone

-The critical-path domain-metrics milestone remains merged on `main` as `dfaf92c4f1f29a0068363d815b9cc3d0902be6fe`; feature CI run `30348649679`, job `90240703555`, passed fourteen migrations, 20 typechecks, 31 Turbo tasks with 186 tests, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. The current browser/integration-metrics source branch adds finite session authentication, rate-limit, CSRF, relational authorization, dashboard/admin/rollout/dead-letter/audit repository metrics plus native-shadow rollout/comparison/attempt success, replay, rejection, conflict, and error outcomes without business identifiers or error detail. Local source inventory is 191 tests; remote CI evidence is pending.
+The browser/integration metrics milestone is merged on `main` as `c697935549c427e4a4a6c81ad642416363e89e8e`. Feature CI run `30386368200`, job `90366572706`, passed fourteen migrations, 20 typechecks, 31 Turbo tasks with 191 tests, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. Finite session authentication, rate-limit, CSRF, relational authorization, dashboard/admin/rollout/dead-letter/audit repository metrics plus native-shadow rollout/comparison/attempt success, replay, rejection, conflict, and error outcomes are implemented without business identifiers or error detail.

 ## Architecture

diff --git a/tracker.yml b/tracker.yml
index 31103b2..0447fec 100644
--- a/tracker.yml
+++ b/tracker.yml
@@ -206,17 +206,16 @@ implemented:
 verification:
   command: npm run verify
   last_verified: 2026-07-28
-  status: local_passed_remote_ci_pending
+  status: passed
   results:
     migrations: 14_of_14_with_sha256_manifest
-    migration_replay: previous_main_passed_no_migration_change
-    migration_history_integrity: previous_main_passed_no_migration_change
-    clean_restore_rehearsal: previous_main_passed_no_migration_change
-    architecture_boundaries: passed_locally_remote_ci_pending
-    typecheck: 20_of_20_passed_locally_remote_ci_pending
-    test_tasks: 31_of_31_passed_locally_remote_ci_pending
-    source_tests: 191_total
-    previous_main_remote_tests: 186_passed
+    migration_replay: passed
+    migration_history_integrity: passed
+    clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
+    architecture_boundaries: passed
+    typecheck: 20_of_20_passed
+    test_tasks: 31_of_31_passed
+    remote_tests: 191_passed
     migration_integrity_tests: 7_of_7_passed
     postgresql_concurrency_tests: 7_of_7_passed
     postgresql_courier_worker_lease_tests: 7_of_7_passed
@@ -234,11 +233,11 @@ verification:
     native_shadow_total_tests: 28_of_28_passed
     durable_dead_letter_postgresql_tests: 5_of_5_passed
     browser_dead_letter_api_tests: 3_of_3_passed
-    observability_tests: 22_of_22_passed_locally
-    api_source_tests: 56_of_56_passed_locally
+    observability_tests: 22_of_22_passed
+    api_source_tests: 56_of_56_passed
     critical_path_metric_integrations: 3_of_3_previous_main_passed
-    browser_metric_integrations: 2_of_2_passed_locally
-    native_shadow_metric_integrations: 2_of_2_passed_locally
+    browser_metric_integrations: 2_of_2_passed
+    native_shadow_metric_integrations: 2_of_2_passed
     worker_metric_integration_tests: 4_of_4_passed
     provider_metric_integration_tests: 4_of_4_passed
     repository_metric_helper_tests: 3_of_3_passed
@@ -250,30 +249,32 @@ verification:
     provider_abort_on_lease_loss_tests: 3_of_3_passed
     durable_retention_input_tests: 4_of_4_passed
     durable_retention_postgresql_tests: 4_of_4_passed
-    builds: 20_of_20_passed_locally_remote_ci_pending
-    php_syntax: passed_locally_remote_ci_pending
-    high_critical_dependency_check: passed_locally_remote_ci_pending
+    builds: 20_of_20_passed
+    php_syntax: passed
+    high_critical_dependency_check: passed
     moderate_dependency_findings: 5
     documentation_links: 61_reviewed_0_known_broken
   continuation_bundle:
     status: refreshed_locally
-    canonical_main_sync: verified_at_a09a7828c3bbc4b7b47ada9acff689615e01f2e5
-    local_exporter: completed_after_browser_integration_metric_docs
+    canonical_main_sync: verified_at_c697935549c427e4a4a6c81ad642416363e89e8e
+    local_exporter: completed_after_merged_browser_integration_metric_ci_evidence
   remote_ci:
     status: passed
-    run_id: 30348649679
-    job_id: 90240703555
+    run_id: 30386368200
+    job_id: 90366572706
     job: verify
-    tested_head: 4242c1244a56a1e74de721fb34ba06612bdcae64
-    merged_main_commit: dfaf92c4f1f29a0068363d815b9cc3d0902be6fe
+    tested_head: d29b5ef672ce31d65c6c3bfecacdc363ccf611ad
+    merged_main_commit: c697935549c427e4a4a6c81ad642416363e89e8e
     completed: 2026-07-28
-    steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_eighty_six_tests_twenty_builds_php_all_passed
+    steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_ninety_one_tests_twenty_builds_php_all_passed
   source_validation:
-    status: local_passed_remote_ci_pending
+    status: passed
+    run_id: 30386368200
+    job_id: 90366572706
     branch: feat/browser-integration-metrics
-    tested_head: pending_feature_commit
+    tested_head: d29b5ef672ce31d65c6c3bfecacdc363ccf611ad
     completed: 2026-07-28
-    steps: format_lint_fourteen_migration_manifest_architecture_twenty_typechecks_thirty_one_test_tasks_one_hundred_ninety_one_source_tests_twenty_builds_audit_php_yaml_links_and_secret_scan_passed_locally
+    steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_ninety_one_tests_twenty_builds_php_all_passed
     shared_observability_tests: 22_of_22_passed
     api_source_tests: 56_of_56_passed
     browser_metric_integrations: 2_of_2_passed
```

## Existing AI Bridge Context

--- .ai-bridge/current-plan.md ---
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and twenty-two production-hardening slices are complete:
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
 29 | 21. bounded critical-path API/domain metrics for authentication, authorization, rate limiting, quota, idempotency, API dependency count/duration, risk assessment quality bands, and verified outcomes, with replay de-duplication, outage-vs-limit distinction, and telemetry-failure isolation;
 30 | 22. finite authenticated browser/admin and native-shadow integration metrics for session authentication, rate limiting, CSRF, relational authorization, dashboard/admin/rollout/dead-letter/audit repositories, rollout reads, comparison/attempt persistence, replay/conflict, and controlled-rejection-vs-infrastructure-error distinction.
 31 |
 32 | Concrete provider selection and provisioning remain external production work.
 33 |
 34 | ## Completed
 35 |
 36 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 37 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 38 | - [x] Canonical shared API/error/event contracts
 39 | - [x] PostgreSQL/Drizzle schema and fourteen append-only migrations
 40 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 41 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 42 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 43 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 44 | - [x] Courier adapter contract and Steadfast normalized adapter
 45 | - [x] Playwright Steadfast session driver with structured errors
 46 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 47 | - [x] Runnable PostgreSQL courier session and observation workers
 48 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 49 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 50 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 51 | - [x] API OTP send returns queued work without provider network I/O
 52 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 53 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 54 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 55 | - [x] Explicit-role platform admin with live global operations data
 56 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 57 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 58 | - [x] Architecture dependency-boundary CI guard
 59 | - [x] Provider-neutral production deployment topology ADR
 60 | - [x] Managed PostgreSQL production baseline ADR
 61 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 62 | - [x] Managed secrets and KMS envelope-encryption ADR
 63 | - [x] Vendor-neutral OpenTelemetry observability ADR
 64 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 65 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 66 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 67 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 68 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 69 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 70 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 71 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 72 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 73 | - [x] Authentication, authorization, rate-limit, quota, and idempotency controls emit finite allowed/rejected/replay/error events
 74 | - [x] API-key resolution, rate limiting, usage reservation, feature assembly, assessment/outcome persistence, idempotency storage, durable enqueue, and OTP verification emit finite dependency count/duration metrics
 75 | - [x] New risk assessments emit only bounded decision/level/score-band/confidence-band/degraded/freshness distributions; replays do not double-count
 76 | - [x] New verified outcomes emit only bounded outcome/linkage distributions; replays do not double-count
 77 | - [x] Usage-limit rejection remains distinct from unexpected usage-ledger failure, which surfaces as an error rather than a false 429
 78 | - [x] Browser authentication, authorization, CSRF, and rate-limit controls emit finite allowed/rejected/error events
 79 | - [x] Browser auth, rate limiter, dashboard, platform-admin, rollout, dead-letter, and audit dependencies emit finite count/duration outcomes
 80 | - [x] Native-shadow rollout reads and comparison/attempt persistence emit finite API dependency success/empty/replay/rejected/error outcomes
 81 | - [x] Relational reauthorization failure is rejected, while unknown browser/native-shadow repository failure remains error
 82 | - [x] Browser and native-shadow metrics omit user/session/tenant/store/order/work/idempotency/email/error-detail values and sink failure cannot change responses
 83 | - [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
 84 | - [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
 85 | - [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
 86 | - [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
 87 | - [x] Strict W3C version-00 `traceparent` parsing rejects malformed and all-zero identifiers; bounded optional `tracestate` is propagated but not exported as a span attribute
 88 | - [x] API requests emit server spans and durable assessment/outcome/courier/OTP enqueue operations emit producer spans with finite route/operation/queue/outcome attributes
 89 | - [x] Courier, webhook, and verification rows persist nullable validated trace context outside payloads; legacy null rows remain processable and archive evidence does not copy trace context
 90 | - [x] Courier, webhook, verification, and courier-session workers emit consumer/root operation spans with provider-client child spans and no business identifiers, phone/OTP values, credentials, URLs, payloads, or arbitrary error codes
 91 | - [x] Verification failure events continue the active worker trace into the newly queued webhook delivery
 92 | - [x] Missing or invalid persisted context starts a fresh root trace, while trace validation, clock, serialization, or sink failure cannot change API or worker behavior
 93 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 94 | - [x] Concurrent usage reservations cannot exceed the plan limit
 95 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 96 | - [x] Concurrent outcome writes resolve as one insert and one replay
 97 | - [x] Operation idempotency records remain isolated by organization and store
 98 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 99 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
100 | - [x] Expired or previous courier owners cannot complete or fail jobs
101 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
102 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
103 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
104 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
105 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
106 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
107 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
108 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
109 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
110 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
111 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
112 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
113 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
114 | - [x] Verification scope mismatch fails both the job and authoritative session closed
115 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
116 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
117 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
118 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
119 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
120 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
121 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
122 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
123 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
124 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
125 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
126 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
127 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
128 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
129 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
130 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
131 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
132 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
133 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
134 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
135 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
136 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
137 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
138 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
139 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
140 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
141 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
142 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
143 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
144 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
145 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
146 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
147 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
148 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
149 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
150 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
151 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
152 |
153 | ## Verified baseline
154 |
155 | - Formatting check: passed
156 | - ESLint with zero warnings: passed
157 | - Fourteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
158 | - First migration apply and immediate migration replay: passed remotely; this slice had no migration change
159 | - Architecture import boundaries: passed locally and in source-branch CI
160 | - Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
161 | - Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
162 | - Repository tests: 191 passed in PostgreSQL-integrated source-branch CI
163 | - Browser/integration metric coverage: 22 shared observability tests and 56 API source tests passed for browser controls/dependencies, relational reauthorization, native-shadow rollout/comparison/attempt success/replay/conflict/error, identifier omission, and sink isolation
164 | - Tracing coverage: previous merged source CI passed 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests
165 | - Production builds: 20 of 20 workspaces passed locally and in source-branch CI
166 | - WooCommerce PHP syntax: passed locally and in source-branch CI
167 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
168 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
169 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
170 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
171 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
172 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
173 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
174 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
175 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
176 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
177 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
178 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
179 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
180 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
181 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
182 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
183 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
184 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
185 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
186 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
187 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
188 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
189 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
190 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
191 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
192 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
193 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
194 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
195 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
196 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
197 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
198 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
199 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
200 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
201 | - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
202 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
203 | - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
204 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
205 | - Distributed trace-context final CI run `30344660685`, job `90227950094`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 180 tests, 20 builds, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
206 | - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
207 | - Critical-path domain-metrics final CI run `30348649679`, job `90240703555`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 186 tests, 20 builds, and PHP lint passed at head `4242c1244a56a1e74de721fb34ba06612bdcae64`
208 | - The verified critical-path domain-metrics milestone was squash-merged through PR #40 to `main` as `dfaf92c4f1f29a0068363d815b9cc3d0902be6fe`
209 | - Browser/integration metrics final CI run `30386368200`, job `90366572706`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 191 tests, 20 builds, and PHP lint passed at head `d29b5ef672ce31d65c6c3bfecacdc363ccf611ad`
210 | - The verified browser/integration metrics milestone was squash-merged through PR #42 to `main` as `c697935549c427e4a4a6c81ad642416363e89e8e`
211 | - Canonical documentation links: 61 reviewed locally with zero known broken internal links
212 | - `tracker.yml` YAML structure remains valid
213 | - Changed-file secret-pattern scan: passed
214 |
215 | The repository-local continuation exporter was refreshed after the merged browser/integration metrics verification evidence was recorded.
216 |
217 | ## Next production milestone
218 |
219 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
220 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
221 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
222 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
223 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
224 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
225 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
226 |
227 | ## External blockers
228 |
229 | - Authorized Steadfast merchant/test credentials
230 | - Steadfast provider-terms and merchant-authorization review
231 | - Deployment platform, account, primary region, and budget
232 | - Managed PostgreSQL provider and service tier
233 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
234 | - Managed secret store and KMS/vault provider
235 | - OpenTelemetry exporter/collector, sampling policy, remaining external integration-adapter/client metrics, managed observability backend, dashboards, alerts, and retention policy
236 | - OTP provider account and credentials
237 | - Production account recovery/MFA or managed identity-provider decision
238 | - Repository visibility correction from currently reported public to expected private
239 | - Pilot outcome data for false-positive/false-negative calibration
240 |
241 | ## Non-negotiable continuation rules
242 |
243 | - Do not add a second risk engine.
244 | - Do not call providers from the risk engine or synchronous checkout path.
245 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
246 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
247 | - Do not use API keys as dashboard user sessions.
248 | - Require organization/store scope in all merchant repositories, events, and jobs.
249 | - Add new migrations; never edit applied migrations.
250 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
251 | - Keep Redis/cache state non-authoritative.
252 | - Keep unknown/provider failure explicit and policy-controlled.
253 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
254 |

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
 55 | 49. Authenticated browser/admin and native-shadow integration surfaces use the same finite metric boundary. Browser controls expose only authentication, authorization, CSRF, and rate-limit with allowed/rejected/error outcomes. Browser dependencies expose only auth service, rate limiter, dashboard, platform-admin, rollout, dead-letter, and audit categories with finite operations and success/empty/replay/rejected/error outcomes. Native-shadow rollout, comparison, and attempt repositories use finite API dependency categories; known validation/idempotency/scope failures are rejected and unknown persistence failures are errors. User/session/organization/store/order/work/assessment/idempotency/email/error-detail values are prohibited, relational authorization is recorded only after repository revalidation, and telemetry failure cannot change browser or API responses.
 56 |
 57 | ## Source SaaS conflict resolutions
 58 |
 59 | | Conflict                                                                 | Decision                                                                                   |
 60 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 61 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 62 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 63 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 64 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 65 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 66 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 67 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 68 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 69 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 70 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 71 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 72 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 73 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 74 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 75 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 76 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 77 |
 78 | ## Approved reuse scope
 79 |
 80 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 81 | - Bangladesh phone normalization after tests
 82 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 83 | - WooCommerce settings/order hook/admin display skeleton
 84 | - API-key hash/display-prefix and usage-event concepts
 85 |
 86 | No product source code was copied during Phase 0.
 87 |
 88 | ## Pending decisions
 89 |
 90 | These require provider selection, provisioning, or separate ADRs before production implementation:
 91 |
 92 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 93 | - Specific deployment platform, account, and primary region
 94 | - Specific managed PostgreSQL provider and service tier
 95 | - Specific managed secret store and KMS/vault provider
 96 | - Specific observability backend and retention policy
 97 | - Redis-compatible cache provider when distributed coordination is required
 98 | - Dedicated broker only if measured scale requires superseding ADR 0008
 99 | - Worker scheduler/runtime implementation on the selected deployment platform
100 | - OTP provider
101 |
102 | ## External requirements
103 |
104 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
105 |
106 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
107 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, docs/README.md, tracker.yml
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: AGENTS.md, README.md, tracker.yml, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, docs/README.md, docs/operations/operations-observability.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, docs/roadmap/risk-register.md, packages/observability/src/metrics.ts, packages/observability/src/metrics.test.ts, apps/api/src/browser.ts, apps/api/src/browser.test.ts, apps/api/src/index.ts, apps/api/src/native-shadow.test.ts
Extra globs: none
Files included below: AGENTS.md, docs/README.md, README.md, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, apps/api/src/browser.test.ts, apps/api/src/browser.ts, apps/api/src/index.ts, apps/api/src/native-shadow.test.ts, docs/operations/operations-observability.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, packages/observability/src/metrics.test.ts, packages/observability/src/metrics.ts, tracker.yml, eslint.config.js, package.json, turbo.json

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

Bytes: 3247
SHA-256: 2f161e8c4c49d667907e0b86f6386ed6c0637a631cda509fe5a5e33452d8b0a1
Lines: 1-56 of 56

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The browser/integration metrics milestone is merged on `main` as `c697935549c427e4a4a6c81ad642416363e89e8e`. Feature CI run `30386368200`, job `90366572706`, passed fourteen migrations, 20 typechecks, 31 Turbo tasks with 191 tests, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. Finite session authentication, rate-limit, CSRF, relational authorization, dashboard/admin/rollout/dead-letter/audit repository metrics plus native-shadow rollout/comparison/attempt success, replay, rejection, conflict, and error outcomes are implemented without business identifiers or error detail.
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

### README.md

Bytes: 8367
SHA-256: 07a78938c68c298ab02d1c7ae4c081151b7640d8fefd6af1d1dc6a8e5b77dc0a
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
 49 | - Vendor-neutral JSON metric points for API requests, API/browser authentication and authorization controls, critical API and browser/admin/native-shadow dependencies, bounded risk/outcome quality, private-worker operations, durable repository transitions, provider calls, queue depth/age, and claim failures, with finite categorical labels and telemetry-failure isolation
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

### .ai-bridge/current-plan.md

Bytes: 32131
SHA-256: 0e4240659d11a5df6bc598e3d411853052b8c770f3d8d7276a320ae48b6e5448
Lines: 1-254 of 254

```markdown
  1 | # Ozzyl Guard — Current Implementation Plan
  2 |
  3 | Updated: 2026-07-28
  4 |
  5 | ## Current state
  6 |
  7 | A runnable standalone MVP foundation and twenty-two production-hardening slices are complete:
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
 29 | 21. bounded critical-path API/domain metrics for authentication, authorization, rate limiting, quota, idempotency, API dependency count/duration, risk assessment quality bands, and verified outcomes, with replay de-duplication, outage-vs-limit distinction, and telemetry-failure isolation;
 30 | 22. finite authenticated browser/admin and native-shadow integration metrics for session authentication, rate limiting, CSRF, relational authorization, dashboard/admin/rollout/dead-letter/audit repositories, rollout reads, comparison/attempt persistence, replay/conflict, and controlled-rejection-vs-infrastructure-error distinction.
 31 |
 32 | Concrete provider selection and provisioning remain external production work.
 33 |
 34 | ## Completed
 35 |
 36 | - [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
 37 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
 38 | - [x] Canonical shared API/error/event contracts
 39 | - [x] PostgreSQL/Drizzle schema and fourteen append-only migrations
 40 | - [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
 41 | - [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
 42 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
 43 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
 44 | - [x] Courier adapter contract and Steadfast normalized adapter
 45 | - [x] Playwright Steadfast session driver with structured errors
 46 | - [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
 47 | - [x] Runnable PostgreSQL courier session and observation workers
 48 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
 49 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
 50 | - [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
 51 | - [x] API OTP send returns queued work without provider network I/O
 52 | - [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
 53 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
 54 | - [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
 55 | - [x] Explicit-role platform admin with live global operations data
 56 | - [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
 57 | - [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
 58 | - [x] Architecture dependency-boundary CI guard
 59 | - [x] Provider-neutral production deployment topology ADR
 60 | - [x] Managed PostgreSQL production baseline ADR
 61 | - [x] PostgreSQL-first durable work and optional cache boundary ADR
 62 | - [x] Managed secrets and KMS envelope-encryption ADR
 63 | - [x] Vendor-neutral OpenTelemetry observability ADR
 64 | - [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
 65 | - [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
 66 | - [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
 67 | - [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
 68 | - [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
 69 | - [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
 70 | - [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
 71 | - [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
 72 | - [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
 73 | - [x] Authentication, authorization, rate-limit, quota, and idempotency controls emit finite allowed/rejected/replay/error events
 74 | - [x] API-key resolution, rate limiting, usage reservation, feature assembly, assessment/outcome persistence, idempotency storage, durable enqueue, and OTP verification emit finite dependency count/duration metrics
 75 | - [x] New risk assessments emit only bounded decision/level/score-band/confidence-band/degraded/freshness distributions; replays do not double-count
 76 | - [x] New verified outcomes emit only bounded outcome/linkage distributions; replays do not double-count
 77 | - [x] Usage-limit rejection remains distinct from unexpected usage-ledger failure, which surfaces as an error rather than a false 429
 78 | - [x] Browser authentication, authorization, CSRF, and rate-limit controls emit finite allowed/rejected/error events
 79 | - [x] Browser auth, rate limiter, dashboard, platform-admin, rollout, dead-letter, and audit dependencies emit finite count/duration outcomes
 80 | - [x] Native-shadow rollout reads and comparison/attempt persistence emit finite API dependency success/empty/replay/rejected/error outcomes
 81 | - [x] Relational reauthorization failure is rejected, while unknown browser/native-shadow repository failure remains error
 82 | - [x] Browser and native-shadow metrics omit user/session/tenant/store/order/work/idempotency/email/error-detail values and sink failure cannot change responses
 83 | - [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
 84 | - [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
 85 | - [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
 86 | - [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
 87 | - [x] Strict W3C version-00 `traceparent` parsing rejects malformed and all-zero identifiers; bounded optional `tracestate` is propagated but not exported as a span attribute
 88 | - [x] API requests emit server spans and durable assessment/outcome/courier/OTP enqueue operations emit producer spans with finite route/operation/queue/outcome attributes
 89 | - [x] Courier, webhook, and verification rows persist nullable validated trace context outside payloads; legacy null rows remain processable and archive evidence does not copy trace context
 90 | - [x] Courier, webhook, verification, and courier-session workers emit consumer/root operation spans with provider-client child spans and no business identifiers, phone/OTP values, credentials, URLs, payloads, or arbitrary error codes
 91 | - [x] Verification failure events continue the active worker trace into the newly queued webhook delivery
 92 | - [x] Missing or invalid persisted context starts a fresh root trace, while trace validation, clock, serialization, or sink failure cannot change API or worker behavior
 93 | - [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
 94 | - [x] Concurrent usage reservations cannot exceed the plan limit
 95 | - [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
 96 | - [x] Concurrent outcome writes resolve as one insert and one replay
 97 | - [x] Operation idempotency records remain isolated by organization and store
 98 | - [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
 99 | - [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
100 | - [x] Expired or previous courier owners cannot complete or fail jobs
101 | - [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
102 | - [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
103 | - [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
104 | - [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
105 | - [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
106 | - [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
107 | - [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
108 | - [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
109 | - [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
110 | - [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
111 | - [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
112 | - [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
113 | - [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
114 | - [x] Verification scope mismatch fails both the job and authoritative session closed
115 | - [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
116 | - [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
117 | - [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
118 | - [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
119 | - [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
120 | - [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
121 | - [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
122 | - [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
123 | - [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
124 | - [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges
125 | - [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
126 | - [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
127 | - [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
128 | - [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
129 | - [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
130 | - [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
131 | - [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
132 | - [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
133 | - [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
134 | - [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
135 | - [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
136 | - [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
137 | - [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
138 | - [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
139 | - [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
140 | - [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
141 | - [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
142 | - [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
143 | - [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
144 | - [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
145 | - [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
146 | - [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
147 | - [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
148 | - [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
149 | - [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
150 | - [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
151 | - [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls
152 |
153 | ## Verified baseline
154 |
155 | - Formatting check: passed
156 | - ESLint with zero warnings: passed
157 | - Fourteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
158 | - First migration apply and immediate migration replay: passed remotely; this slice had no migration change
159 | - Architecture import boundaries: passed locally and in source-branch CI
160 | - Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
161 | - Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
162 | - Repository tests: 191 passed in PostgreSQL-integrated source-branch CI
163 | - Browser/integration metric coverage: 22 shared observability tests and 56 API source tests passed for browser controls/dependencies, relational reauthorization, native-shadow rollout/comparison/attempt success/replay/conflict/error, identifier omission, and sink isolation
164 | - Tracing coverage: previous merged source CI passed 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests
165 | - Production builds: 20 of 20 workspaces passed locally and in source-branch CI
166 | - WooCommerce PHP syntax: passed locally and in source-branch CI
167 | - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
168 | - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
169 | - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
170 | - Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
171 | - The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
172 | - Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
173 | - Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
174 | - The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
175 | - Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
176 | - Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
177 | - The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
178 | - Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
179 | - Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
180 | - The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
181 | - Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
182 | - Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
183 | - The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
184 | - Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
185 | - Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
186 | - The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
187 | - Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
188 | - The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
189 | - Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
190 | - The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
191 | - Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
192 | - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
193 | - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
194 | - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
195 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
196 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
197 | - Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
198 | - The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
199 | - Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
200 | - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
201 | - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
202 | - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
203 | - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
204 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
205 | - Distributed trace-context final CI run `30344660685`, job `90227950094`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 180 tests, 20 builds, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
206 | - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
207 | - Critical-path domain-metrics final CI run `30348649679`, job `90240703555`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 186 tests, 20 builds, and PHP lint passed at head `4242c1244a56a1e74de721fb34ba06612bdcae64`
208 | - The verified critical-path domain-metrics milestone was squash-merged through PR #40 to `main` as `dfaf92c4f1f29a0068363d815b9cc3d0902be6fe`
209 | - Browser/integration metrics final CI run `30386368200`, job `90366572706`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 191 tests, 20 builds, and PHP lint passed at head `d29b5ef672ce31d65c6c3bfecacdc363ccf611ad`
210 | - The verified browser/integration metrics milestone was squash-merged through PR #42 to `main` as `c697935549c427e4a4a6c81ad642416363e89e8e`
211 | - Canonical documentation links: 61 reviewed locally with zero known broken internal links
212 | - `tracker.yml` YAML structure remains valid
213 | - Changed-file secret-pattern scan: passed
214 |
215 | The repository-local continuation exporter was refreshed after the merged browser/integration metrics verification evidence was recorded.
216 |
217 | ## Next production milestone
218 |
219 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
220 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
221 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
222 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
223 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
224 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
225 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
226 |
227 | ## External blockers
228 |
229 | - Authorized Steadfast merchant/test credentials
230 | - Steadfast provider-terms and merchant-authorization review
231 | - Deployment platform, account, primary region, and budget
232 | - Managed PostgreSQL provider and service tier
233 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
234 | - Managed secret store and KMS/vault provider
235 | - OpenTelemetry exporter/collector, sampling policy, remaining external integration-adapter/client metrics, managed observability backend, dashboards, alerts, and retention policy
236 | - OTP provider account and credentials
237 | - Production account recovery/MFA or managed identity-provider decision
238 | - Repository visibility correction from currently reported public to expected private
239 | - Pilot outcome data for false-positive/false-negative calibration
240 |
241 | ## Non-negotiable continuation rules
242 |
243 | - Do not add a second risk engine.
244 | - Do not call providers from the risk engine or synchronous checkout path.
245 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
246 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
247 | - Do not use API keys as dashboard user sessions.
248 | - Require organization/store scope in all merchant repositories, events, and jobs.
249 | - Add new migrations; never edit applied migrations.
250 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
251 | - Keep Redis/cache state non-authoritative.
252 | - Keep unknown/provider failure explicit and policy-controlled.
253 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
254 |
```

### .ai-bridge/decisions.md

Bytes: 20595
SHA-256: 9d54b2dc94a7f24c1cb84b4dab6d83853c0af9d072c3b7b19dfff8c41c8f8eb3
Lines: 1-107 of 107

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
 55 | 49. Authenticated browser/admin and native-shadow integration surfaces use the same finite metric boundary. Browser controls expose only authentication, authorization, CSRF, and rate-limit with allowed/rejected/error outcomes. Browser dependencies expose only auth service, rate limiter, dashboard, platform-admin, rollout, dead-letter, and audit categories with finite operations and success/empty/replay/rejected/error outcomes. Native-shadow rollout, comparison, and attempt repositories use finite API dependency categories; known validation/idempotency/scope failures are rejected and unknown persistence failures are errors. User/session/organization/store/order/work/assessment/idempotency/email/error-detail values are prohibited, relational authorization is recorded only after repository revalidation, and telemetry failure cannot change browser or API responses.
 56 |
 57 | ## Source SaaS conflict resolutions
 58 |
 59 | | Conflict                                                                 | Decision                                                                                   |
 60 | | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
 61 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly   |
 62 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                                 |
 63 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                          |
 64 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                         |
 65 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                      |
 66 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                               |
 67 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                    |
 68 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                                 |
 69 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                        |
 70 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling            |
 71 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                         |
 72 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                     |
 73 | | Synchronous merchant webhook delivery                                    | Persist an outbox row transactionally and deliver only from the private event worker       |
 74 | | Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary                |
 75 | | Synchronous OTP provider delivery from the API                           | Persist an encrypted delivery job transactionally and deliver only from the private worker |
 76 | | Plaintext phone or OTP in durable verification jobs                      | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
 77 |
 78 | ## Approved reuse scope
 79 |
 80 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
 81 | - Bangladesh phone normalization after tests
 82 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
 83 | - WooCommerce settings/order hook/admin display skeleton
 84 | - API-key hash/display-prefix and usage-event concepts
 85 |
 86 | No product source code was copied during Phase 0.
 87 |
 88 | ## Pending decisions
 89 |
 90 | These require provider selection, provisioning, or separate ADRs before production implementation:
 91 |
 92 | - Managed identity provider or future supersession of the accepted pilot browser-session baseline
 93 | - Specific deployment platform, account, and primary region
 94 | - Specific managed PostgreSQL provider and service tier
 95 | - Specific managed secret store and KMS/vault provider
 96 | - Specific observability backend and retention policy
 97 | - Redis-compatible cache provider when distributed coordination is required
 98 | - Dedicated broker only if measured scale requires superseding ADR 0008
 99 | - Worker scheduler/runtime implementation on the selected deployment platform
100 | - OTP provider
101 |
102 | ## External requirements
103 |
104 | No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
105 |
106 | Provider-specific provisioning requires approved accounts, budgets, regions, and access policies. Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
107 |
```

### .ai-bridge/implementation-status.md

Bytes: 31527
SHA-256: 5cf12a8d20d40914a637bc3a0be66622e3820ed46b1b2d378709f300cdc9c5c9
Lines: 1-195 of 195

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
 17 | | Continuation documentation | baseline | Tracker, plan, status, decisions, and generated `pro-context.md` are being refreshed for the browser/integration-metrics source branch                |
 18 | | Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
 19 | | Monorepo/tooling           | done     | 20 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
 20 | | CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
 21 | | Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
 22 | | Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
 23 | | Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |
 24 |
 25 | ## Product implementation
 26 |
 27 | | Area                             | Status   | Notes                                                                                                                                                                                                                                                                     |
 28 | | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 29 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                                                                                                           |
 30 | | Database/migrations              | done     | Fourteen append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                                                                                                         |
 31 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                                                                                                        |
 32 | | Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                                                                                                           |
 33 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                                                                                                     |
 34 | | API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                                                                                             |
 35 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                                                                                             |
 36 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                                                                                             |
 37 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                                                                                                      |
 38 | | Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                                                                                                 |
 39 | | Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                                                                                                         |
 40 | | Durable work architecture        | done     | Claims, renewable leases, dead-letter replay, plus maintenance-only bounded terminal archival with evidence-before-delete and runtime-role denial                                                                                                                         |
 41 | | Durable work operations          | done     | Failed work supports scoped replay; old completed/failed rows support preview-first maintenance archival while immutable replay/audit evidence remains                                                                                                                    |
 42 | | Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                                                                                                    |
 43 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                                                                                                           |
 44 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                                                                                                  |
 45 | | PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                                                                                                  |
 46 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                                                                                               |
 47 | | Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                                                                                                            |
 48 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                                                                                                  |
 49 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                                                                                                      |
 50 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                                                                                                       |
 51 | | Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                                                                                             |
 52 | | OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                                                                                                           |
 53 | | Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                                                                                                            |
 54 | | Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                                                                                                 |
 55 | | Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                                                                                                |
 56 | | PostgreSQL runtime role          | done     | Explicit DML grants, no migration history/DELETE/DDL/archive access; separate retention-maintenance identity and managed provisioning remain                                                                                                                              |
 57 | | Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                                                                                                    |
 58 | | Observability                    | baseline | Redacted logs, API/domain/browser/admin/native-shadow plus worker/repository/provider metrics/gauges, and W3C durable trace propagation are implemented; exporter/collector, sampling, external adapter/client metrics, backend, dashboards, alerts, and retention remain |
 59 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                                                                                                 |
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
 84 | - `npm run db:check`: fourteen migrations and committed SHA-256 manifest validated locally and in source-branch CI
 85 | - initial migration apply/replay, history integrity, and clean restore: passed remotely; this slice had no migration change
 86 | - `npm run check:architecture`: passed locally and in source-branch CI
 87 | - `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
 88 | - `npm run test`: 31/31 Turbo tasks and 191 tests passed in PostgreSQL-integrated source-branch CI
 89 | - `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
 90 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 91 | - Observability tests prove fixed log metadata/redaction, finite metric/span descriptors, strict W3C trace parsing/formatting/persistence, bounded control/dependency/risk distributions, exporter-neutral JSON points, and sink/clock/ID-generation failure isolation
 92 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, bounded request/API/browser control and dependency metrics, risk/outcome distributions, replay/conflict handling, quota-limit and controlled-rejection vs dependency-error distinctions, identifier omission, safe serialization, and authenticated API/browser availability during metric sink failure
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
150 | - Critical-path domain-metrics final run `30348649679`, job `90240703555`: GitGuardian, fourteen migrations, 20 typechecks, 31 Turbo tasks with 186 tests, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `4242c1244a56a1e74de721fb34ba06612bdcae64`
151 | - The verified critical-path domain-metrics milestone was squash-merged through PR #40 to `main` as `dfaf92c4f1f29a0068363d815b9cc3d0902be6fe`
152 | - Browser/integration metrics final run `30386368200`, job `90366572706`: GitGuardian, fourteen migrations, 20 typechecks, 31 Turbo tasks with 191 tests, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `d29b5ef672ce31d65c6c3bfecacdc363ccf611ad`
153 | - The verified browser/integration metrics milestone was squash-merged through PR #42 to `main` as `c697935549c427e4a4a6c81ad642416363e89e8e`
154 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
155 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
156 | - Previous canonical documentation checks found zero broken internal links
157 | - Prohibited insecure-pattern scan: zero matches
158 |
159 | The repository-local exporter was refreshed after the merged browser/integration metrics verification evidence was recorded.
160 |
161 | ## External blockers and production requirements
162 |
163 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
164 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
165 | - Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
166 | - Managed secret store and KMS/vault provider
167 | - OpenTelemetry exporter/collector, sampling policy, remaining external integration-adapter/client metrics, managed observability backend, retention, dashboards, alerts, and incident channels
168 | - Optional Redis-compatible cache only when distributed coordination is required
169 | - Authorized Steadfast test/merchant account
170 | - Provider-terms and merchant-authorization review
171 | - OTP provider selection/account
172 | - Production account recovery/MFA or managed identity-provider decision
173 | - Pilot merchants and verified outcome data for calibration
174 |
175 | ## Remaining risks
176 |
177 | - Steadfast UI/internal endpoint changes can break automation.
178 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
179 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
180 | - In-process API and browser-session rate limiting is not distributed across replicas.
181 | - Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
182 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
183 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
184 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
185 | - GitHub currently reports public repository visibility although the expected policy is private.
186 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
187 | - Structured logs, API/domain/browser/admin/native-shadow plus worker/repository/provider metrics/gauges, and API-to-durable-worker/provider trace propagation are implemented, but external integration-adapter/client metrics, exporter/collector, sampling policy, dashboards, alerts, managed backend, and telemetry retention are not yet implemented.
188 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
189 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
190 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
191 |
192 | ## Next milestone
193 |
194 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
195 |
```

### apps/api/src/browser.test.ts

Bytes: 21200
SHA-256: 73db7dad698b721fedaa198ed2d1fe492719fefd33ee3cf78210abea11b1ee22
Lines: 1-652 of 652

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import { createMetricRecorder, type MetricPoint, type MetricRecorder } from '@ozzyl/observability';
  3 | import type { MerchantDashboardOverview, PlatformAdminOverview } from '@ozzyl/shared-types';
  4 | import { createBrowserApi, type BrowserAuthService, type UserSessionIdentity } from './browser.js';
  5 | import { MemoryRateLimiter } from './index.js';
  6 |
  7 | const now = new Date('2026-07-16T15:00:00.000Z');
  8 | const csrfFixture = 'x'.repeat(32);
  9 | const credentialFixture = 'fixture-value-for-browser-login';
 10 | const sessionFixture = 'fixture-value-for-browser-session';
 11 | const shadowPilot = {
 12 |   mode: 'off' as const,
 13 |   rollout_version: 'off',
 14 |   sample_rate_bps: 0,
 15 |   sampled_orders: 0,
 16 |   successful_comparisons: 0,
 17 |   assessment_failures: 0,
 18 |   persistence_failures: 0,
 19 |   decision_disagreement_rate: null,
 20 |   score_delta: {
 21 |     minimum: null,
 22 |     maximum: null,
 23 |     average: null,
 24 |     lower: 0,
 25 |     equal: 0,
 26 |     higher: 0,
 27 |   },
 28 | };
 29 |
 30 | const merchantIdentity: UserSessionIdentity = {
 31 |   sessionId: 'ses_1',
 32 |   userId: 'usr_1',
 33 |   email: 'owner@example.com',
 34 |   platformRole: 'merchant',
 35 |   expiresAt: '2026-07-23T15:00:00.000Z',
 36 |   organizations: [
 37 |     {
 38 |       id: 'org_1',
 39 |       name: 'Merchant One',
 40 |       role: 'owner',
 41 |       stores: [
 42 |         {
 43 |           id: 'store_1',
 44 |           organization_id: 'org_1',
 45 |           name: 'Primary Store',
 46 |           platform: 'woocommerce',
 47 |           status: 'active',
 48 |         },
 49 |       ],
 50 |     },
 51 |   ],
 52 | };
 53 |
 54 | const merchantOverview: MerchantDashboardOverview = {
 55 |   success: true,
 56 |   generated_at: now.toISOString(),
 57 |   scope: {
 58 |     organization_id: 'org_1',
 59 |     organization_name: 'Merchant One',
 60 |     store_id: 'store_1',
 61 |     store_name: 'Primary Store',
 62 |     platform: 'woocommerce',
 63 |     role: 'owner',
 64 |   },
 65 |   summary: {
 66 |     assessments_30d: 12,
 67 |     degraded_30d: 2,
 68 |     pending_reviews: 3,
 69 |     verified_30d: 4,
 70 |     usage_month: 12,
 71 |     usage_limit: 100,
 72 |   },
 73 |   decisions: { allow: 9, verify: 1, review: 1, hold: 1, block: 0 },
 74 |   reviews: [
 75 |     {
 76 |       assessment_id: 'ras_1',
 77 |       external_order_id: 'WC-1',
 78 |       phone_masked: '017****5678',
 79 |       risk_score: 61,
 80 |       decision: 'hold',
 81 |       confidence: 0.8,
 82 |       signals: [{ code: 'low_delivery_rate', score: 30, description: 'Low delivery rate' }],
 83 |       created_at: now.toISOString(),
 84 |     },
 85 |   ],
 86 |   couriers: [
 87 |     {
 88 |       provider: 'steadfast',
 89 |       status: 'connected',
 90 |       last_success_at: now.toISOString(),
 91 |       last_failure_at: null,
 92 |       failure_code: null,
 93 |     },
 94 |   ],
 95 |   shadow_pilot: shadowPilot,
 96 | };
 97 |
 98 | const adminOverview: PlatformAdminOverview = {
 99 |   success: true,
100 |   generated_at: now.toISOString(),
101 |   summary: {
102 |     active_organizations: 2,
103 |     active_stores: 3,
104 |     assessments_today: 20,
105 |     degraded_percentage: 5,
106 |     worker_backlog: 1,
107 |     failed_webhooks: 0,
108 |   },
109 |   incidents: [],
110 |   providers: [{ name: 'steadfast', state: 'operational', metric: '2 connected; 0 need attention' }],
111 |   automatic_blocking: {
112 |     broadly_enabled: false,
113 |     reason: 'Pilot calibration is required.',
114 |   },
115 |   shadow_pilot: { ...shadowPilot, opted_in_stores: 0 },
116 | };
117 |
118 | function createTestApp(
119 |   identity: UserSessionIdentity = merchantIdentity,
120 |   metricRecorder?: MetricRecorder,
121 | ) {
122 |   let revoked = false;
123 |   let monotonicTime = 0;
124 |   const metricPoints: MetricPoint[] = [];
125 |   const metrics =
126 |     metricRecorder ??
127 |     createMetricRecorder({
128 |       service: 'browser-test',
129 |       environment: 'test',
130 |       clock: () => now,
131 |       write: (_line, point) => metricPoints.push(point),
132 |     });
133 |   const auth: BrowserAuthService = {
134 |     async login(email, credential) {
135 |       if (email !== identity.email || credential !== credentialFixture) return null;
136 |       return { rawToken: sessionFixture, identity };
137 |     },
138 |     async resolve(rawToken) {
139 |       return rawToken === sessionFixture && !revoked ? identity : null;
140 |     },
141 |     async revoke() {
142 |       revoked = true;
143 |     },
144 |   };
145 |   const loadOverview = vi.fn(async () => merchantOverview);
146 |   const loadAdminOverview = vi.fn(async () => adminOverview);
147 |   const setForStore = vi.fn(
148 |     async (input: {
149 |       organizationId: string;
150 |       storeId: string;
151 |       mode: 'off' | 'shadow';
152 |       rolloutVersion: string;
153 |       sampleRateBps: number;
154 |     }) => ({
155 |       organizationId: input.organizationId,
156 |       storeId: input.storeId,
157 |       integration: 'multi-store-saas' as const,
158 |       mode: input.mode,
159 |       rolloutVersion: input.rolloutVersion,
160 |       sampleRateBps: input.sampleRateBps,
161 |       samplingKey: 'scoped-sampling-key',
162 |     }),
163 |   );
164 |   const listDeadLetters = vi.fn(async () => [
165 |     {
166 |       workType: 'webhook_delivery' as const,
167 |       workId: 'whd_failed_1',
168 |       organizationId: 'org_1',
169 |       storeId: 'store_1',
170 |       status: 'failed' as const,
171 |       attempts: 5,
172 |       errorCode: 'TIMEOUT',
173 |       failedAt: now.toISOString(),
174 |       replayable: true,
175 |       replayBlockedReason: null,
176 |     },
177 |   ]);
178 |   const replayDeadLetter = vi.fn(async () => ({
179 |     replayId: 'dwr_1',
180 |     organizationId: 'org_1',
181 |     storeId: 'store_1',
182 |     workType: 'webhook_delivery' as const,
183 |     workId: 'whd_failed_1',
184 |     previousStatus: 'failed',
185 |     previousErrorCode: 'TIMEOUT',
186 |     previousAttempts: 5,
187 |     replayedStatus: 'queued' as const,
188 |     replayedAt: now.toISOString(),
189 |     replay: false,
190 |   }));
191 |   const audit = vi.fn(async () => undefined);
192 |   return {
193 |     app: createBrowserApi({
194 |       auth,
195 |       dashboard: { loadOverview },
196 |       admin: { loadOverview: loadAdminOverview },
197 |       nativeShadowRollouts: { setForStore },
198 |       durableWorkOperations: { listDeadLetters, replayDeadLetter },
199 |       audit: { record: audit },
200 |       rateLimiter: new MemoryRateLimiter(),
201 |       csrfSecret: csrfFixture,
202 |       now: () => now,
203 |       monotonicNow: () => ++monotonicTime,
204 |       metrics,
205 |     }),
206 |     metricPoints,
207 |     loadOverview,
208 |     loadAdminOverview,
209 |     setForStore,
210 |     listDeadLetters,
211 |     replayDeadLetter,
212 |     audit,
213 |   };
214 | }
215 |
216 | async function login(app: ReturnType<typeof createTestApp>['app']) {
217 |   const response = await app.request('/auth/login', {
218 |     method: 'POST',
219 |     headers: { 'Content-Type': 'application/json' },
220 |     body: JSON.stringify({ email: merchantIdentity.email, password: credentialFixture }),
221 |   });
222 |   const body = (await response.json()) as { csrf_token: string };
223 |   const cookie = response.headers.get('set-cookie')?.split(';')[0];
224 |   if (!cookie) throw new Error('Session cookie was not returned');
225 |   return { response, body, cookie };
226 | }
227 |
228 | describe('browser authentication and live data API', () => {
229 |   it('creates an opaque HttpOnly session and resolves it without exposing the raw token', async () => {
230 |     const { app } = createTestApp();
231 |     const loggedIn = await login(app);
232 |     expect(loggedIn.response.status).toBe(200);
233 |     expect(loggedIn.response.headers.get('set-cookie')).toContain('HttpOnly');
234 |     expect(JSON.stringify(loggedIn.body)).not.toContain(sessionFixture);
235 |
236 |     const session = await app.request('/auth/session', {
237 |       headers: { Cookie: loggedIn.cookie },
238 |     });
239 |     expect(session.status).toBe(200);
240 |     await expect(session.json()).resolves.toMatchObject({
241 |       success: true,
242 |       user: { email: merchantIdentity.email, platform_role: 'merchant' },
243 |       organizations: [{ id: 'org_1', stores: [{ id: 'store_1' }] }],
244 |     });
245 |   });
246 |
247 |   it('requires a user session for dashboard data', async () => {
248 |     const { app } = createTestApp();
249 |     const response = await app.request(
250 |       '/dashboard/v1/overview?organization_id=org_1&store_id=store_1',
251 |     );
252 |     expect(response.status).toBe(401);
253 |   });
254 |
255 |   it('returns tenant-scoped dashboard data and hides unauthorized stores', async () => {
256 |     const { app, loadOverview } = createTestApp();
257 |     const loggedIn = await login(app);
258 |     const allowed = await app.request(
259 |       '/dashboard/v1/overview?organization_id=org_1&store_id=store_1',
260 |       { headers: { Cookie: loggedIn.cookie } },
261 |     );
262 |     expect(allowed.status).toBe(200);
263 |     await expect(allowed.json()).resolves.toMatchObject({
264 |       scope: { organization_id: 'org_1', store_id: 'store_1' },
265 |       summary: { assessments_30d: 12 },
266 |     });
267 |     expect(loadOverview).toHaveBeenCalledWith({
268 |       userId: 'usr_1',
269 |       organizationId: 'org_1',
270 |       storeId: 'store_1',
271 |       now,
272 |     });
273 |
274 |     const denied = await app.request(
275 |       '/dashboard/v1/overview?organization_id=org_2&store_id=store_2',
276 |       { headers: { Cookie: loggedIn.cookie } },
277 |     );
278 |     expect(denied.status).toBe(404);
279 |     expect(loadOverview).toHaveBeenCalledTimes(1);
280 |   });
281 |
282 |   it('requires CSRF and exact owner scope for native shadow opt-in', async () => {
283 |     const { app, setForStore, audit } = createTestApp();
284 |     const loggedIn = await login(app);
285 |     const body = JSON.stringify({
286 |       organization_id: 'org_1',
287 |       store_id: 'store_1',
288 |       mode: 'shadow',
289 |       rollout_version: 'pilot-v1',
290 |       sample_rate_bps: 1000,
291 |     });
292 |     const proofHeader = ['X', 'CSRF', 'Token'].join('-');
293 |
294 |     const missingCsrf = await app.request('/dashboard/v1/native-shadow-rollout', {
295 |       method: 'PUT',
296 |       headers: { Cookie: loggedIn.cookie, 'Content-Type': 'application/json' },
297 |       body,
298 |     });
299 |     expect(missingCsrf.status).toBe(403);
300 |     expect(setForStore).not.toHaveBeenCalled();
301 |
302 |     const allowed = await app.request('/dashboard/v1/native-shadow-rollout', {
303 |       method: 'PUT',
304 |       headers: {
305 |         Cookie: loggedIn.cookie,
306 |         'Content-Type': 'application/json',
307 |         [proofHeader]: loggedIn.body.csrf_token,
308 |       },
309 |       body,
310 |     });
311 |     expect(allowed.status).toBe(200);
312 |     await expect(allowed.json()).resolves.toMatchObject({
313 |       organization_id: 'org_1',
314 |       store_id: 'store_1',
315 |       mode: 'shadow',
316 |       rollout_version: 'pilot-v1',
317 |       sample_rate_bps: 1000,
318 |     });
319 |     expect(setForStore).toHaveBeenCalledWith({
320 |       userId: 'usr_1',
321 |       organizationId: 'org_1',
322 |       storeId: 'store_1',
323 |       mode: 'shadow',
324 |       rolloutVersion: 'pilot-v1',
325 |       sampleRateBps: 1000,
326 |     });
327 |     expect(audit).toHaveBeenCalledWith(
328 |       expect.objectContaining({
329 |         organizationId: 'org_1',
330 |         action: 'native_shadow.rollout_updated',
331 |         metadata: expect.objectContaining({ mode: 'shadow', rolloutVersion: 'pilot-v1' }),
332 |       }),
333 |     );
334 |
335 |     const wrongScope = await app.request('/dashboard/v1/native-shadow-rollout', {
336 |       method: 'PUT',
337 |       headers: {
338 |         Cookie: loggedIn.cookie,
339 |         'Content-Type': 'application/json',
340 |         [proofHeader]: loggedIn.body.csrf_token,
341 |       },
342 |       body: JSON.stringify({
343 |         organization_id: 'org_2',
344 |         store_id: 'store_2',
345 |         mode: 'shadow',
346 |         rollout_version: 'pilot-v1',
347 |         sample_rate_bps: 1000,
348 |       }),
349 |     });
350 |     expect(wrongScope.status).toBe(404);
351 |     expect(setForStore).toHaveBeenCalledTimes(1);
352 |   });
353 |
354 |   it('rejects native shadow rollout changes from a non-admin merchant member', async () => {
355 |     const memberIdentity: UserSessionIdentity = {
356 |       ...merchantIdentity,
357 |       organizations: merchantIdentity.organizations.map((organization) => ({
358 |         ...organization,
359 |         role: 'member',
360 |       })),
361 |     };
362 |     const { app, setForStore } = createTestApp(memberIdentity);
363 |     const loggedIn = await login(app);
364 |     const proofHeader = ['X', 'CSRF', 'Token'].join('-');
365 |     const response = await app.request('/dashboard/v1/native-shadow-rollout', {
366 |       method: 'PUT',
367 |       headers: {
368 |         Cookie: loggedIn.cookie,
369 |         'Content-Type': 'application/json',
370 |         [proofHeader]: loggedIn.body.csrf_token,
371 |       },
372 |       body: JSON.stringify({
373 |         organization_id: 'org_1',
374 |         store_id: 'store_1',
375 |         mode: 'shadow',
376 |         rollout_version: 'pilot-v1',
377 |         sample_rate_bps: 1000,
378 |       }),
379 |     });
380 |     expect(response.status).toBe(403);
381 |     expect(setForStore).not.toHaveBeenCalled();
382 |   });
383 |
384 |   it('lists only secret-free dead letters for an exact owner or admin store scope', async () => {
385 |     const { app, listDeadLetters, audit } = createTestApp();
386 |     const loggedIn = await login(app);
387 |     const allowed = await app.request(
388 |       '/dashboard/v1/dead-letters?organization_id=org_1&store_id=store_1&limit=20',
389 |       { headers: { Cookie: loggedIn.cookie } },
390 |     );
391 |     expect(allowed.status).toBe(200);
392 |     const body = await allowed.json();
393 |     expect(body).toMatchObject({
394 |       success: true,
395 |       organization_id: 'org_1',
396 |       store_id: 'store_1',
397 |       dead_letters: [
398 |         {
399 |           work_type: 'webhook_delivery',
400 |           work_id: 'whd_failed_1',
401 |           attempts: 5,
402 |           error_code: 'TIMEOUT',
403 |           replayable: true,
404 |         },
405 |       ],
406 |     });
407 |     expect(JSON.stringify(body)).not.toMatch(/payload|secret|phone|otp/i);
408 |     expect(listDeadLetters).toHaveBeenCalledWith({
409 |       requestedByUserId: 'usr_1',
410 |       organizationId: 'org_1',
411 |       storeId: 'store_1',
412 |       limit: 20,
413 |       at: now,
414 |     });
415 |     expect(audit).toHaveBeenCalledWith(
416 |       expect.objectContaining({
417 |         organizationId: 'org_1',
418 |         action: 'durable_work.dead_letters_viewed',
419 |         metadata: expect.objectContaining({ resultCount: 1 }),
420 |       }),
421 |     );
422 |
423 |     const wrongScope = await app.request(
424 |       '/dashboard/v1/dead-letters?organization_id=org_2&store_id=store_2',
425 |       { headers: { Cookie: loggedIn.cookie } },
426 |     );
427 |     expect(wrongScope.status).toBe(404);
428 |     expect(listDeadLetters).toHaveBeenCalledTimes(1);
429 |   });
430 |
431 |   it('requires owner or admin membership for dead-letter inspection', async () => {
432 |     const memberIdentity: UserSessionIdentity = {
433 |       ...merchantIdentity,
434 |       organizations: merchantIdentity.organizations.map((organization) => ({
435 |         ...organization,
436 |         role: 'member',
437 |       })),
438 |     };
439 |     const { app, listDeadLetters } = createTestApp(memberIdentity);
440 |     const loggedIn = await login(app);
441 |     const response = await app.request(
442 |       '/dashboard/v1/dead-letters?organization_id=org_1&store_id=store_1',
443 |       { headers: { Cookie: loggedIn.cookie } },
444 |     );
445 |     expect(response.status).toBe(403);
446 |     expect(listDeadLetters).not.toHaveBeenCalled();
447 |   });
448 |
449 |   it('requires CSRF and maps controlled replay results and failures without leaking data', async () => {
450 |     const { app, replayDeadLetter } = createTestApp();
451 |     const loggedIn = await login(app);
452 |     const requestBody = JSON.stringify({
453 |       organization_id: 'org_1',
454 |       store_id: 'store_1',
455 |       work_type: 'webhook_delivery',
456 |       work_id: 'whd_failed_1',
457 |       idempotency_key: 'dlr_stable_browser_retry_1',
458 |     });
459 |     const missingCsrf = await app.request('/dashboard/v1/dead-letter-replays', {
460 |       method: 'POST',
461 |       headers: { Cookie: loggedIn.cookie, 'Content-Type': 'application/json' },
462 |       body: requestBody,
463 |     });
464 |     expect(missingCsrf.status).toBe(403);
465 |     expect(replayDeadLetter).not.toHaveBeenCalled();
466 |
467 |     const proofHeader = ['X', 'CSRF', 'Token'].join('-');
468 |     const allowed = await app.request('/dashboard/v1/dead-letter-replays', {
469 |       method: 'POST',
470 |       headers: {
471 |         Cookie: loggedIn.cookie,
472 |         'Content-Type': 'application/json',
473 |         [proofHeader]: loggedIn.body.csrf_token,
474 |       },
475 |       body: requestBody,
476 |     });
477 |     expect(allowed.status).toBe(200);
478 |     await expect(allowed.json()).resolves.toMatchObject({
479 |       replay_id: 'dwr_1',
480 |       work_type: 'webhook_delivery',
481 |       work_id: 'whd_failed_1',
482 |       previous_status: 'failed',
483 |       replayed_status: 'queued',
484 |       replay: false,
485 |     });
486 |     expect(replayDeadLetter).toHaveBeenCalledWith({
487 |       requestedByUserId: 'usr_1',
488 |       organizationId: 'org_1',
489 |       storeId: 'store_1',
490 |       workType: 'webhook_delivery',
491 |       workId: 'whd_failed_1',
492 |       idempotencyKey: 'dlr_stable_browser_retry_1',
493 |       at: now,
494 |     });
495 |
496 |     replayDeadLetter.mockRejectedValueOnce(
497 |       Object.assign(new Error('Durable work cannot be replayed: STRUCTURAL_WEBHOOK_FAILURE'), {
498 |         code: 'DEAD_LETTER_NOT_REPLAYABLE' as const,
499 |       }),
500 |     );
501 |     const blocked = await app.request('/dashboard/v1/dead-letter-replays', {
502 |       method: 'POST',
503 |       headers: {
504 |         Cookie: loggedIn.cookie,
505 |         'Content-Type': 'application/json',
506 |         [proofHeader]: loggedIn.body.csrf_token,
507 |       },
508 |       body: requestBody,
509 |     });
510 |     expect(blocked.status).toBe(409);
511 |     await expect(blocked.json()).resolves.toMatchObject({
512 |       error: { code: 'DEAD_LETTER_NOT_REPLAYABLE' },
513 |     });
514 |   });
515 |
516 |   it('requires an explicit platform-admin role and keeps broad blocking disabled', async () => {
517 |     const merchant = createTestApp();
518 |     const merchantLogin = await login(merchant.app);
519 |     const denied = await merchant.app.request('/admin/v1/overview', {
520 |       headers: { Cookie: merchantLogin.cookie },
521 |     });
522 |     expect(denied.status).toBe(403);
523 |
524 |     const admin = createTestApp({ ...merchantIdentity, platformRole: 'platform_admin' });
525 |     const adminLogin = await login(admin.app);
526 |     const allowed = await admin.app.request('/admin/v1/overview', {
527 |       headers: { Cookie: adminLogin.cookie },
528 |     });
529 |     expect(allowed.status).toBe(200);
530 |     await expect(allowed.json()).resolves.toMatchObject({
531 |       automatic_blocking: { broadly_enabled: false },
532 |     });
533 |   });
534 |
535 |   it('emits finite browser control and dependency metrics without user, tenant, or work identifiers', async () => {
536 |     const { app, metricPoints, replayDeadLetter } = createTestApp();
537 |     const loggedIn = await login(app);
538 |
539 |     const dashboard = await app.request(
540 |       '/dashboard/v1/overview?organization_id=org_1&store_id=store_1',
541 |       { headers: { Cookie: loggedIn.cookie } },
542 |     );
543 |     expect(dashboard.status).toBe(200);
544 |
545 |     const missingCsrf = await app.request('/dashboard/v1/native-shadow-rollout', {
546 |       method: 'PUT',
547 |       headers: { Cookie: loggedIn.cookie, 'Content-Type': 'application/json' },
548 |       body: JSON.stringify({
549 |         organization_id: 'org_1',
550 |         store_id: 'store_1',
551 |         mode: 'shadow',
552 |         rollout_version: 'pilot-v1',
553 |         sample_rate_bps: 1000,
554 |       }),
555 |     });
556 |     expect(missingCsrf.status).toBe(403);
557 |
558 |     const proofHeader = ['X', 'CSRF', 'Token'].join('-');
559 |     const deadLetters = await app.request(
560 |       '/dashboard/v1/dead-letters?organization_id=org_1&store_id=store_1',
561 |       { headers: { Cookie: loggedIn.cookie } },
562 |     );
563 |     expect(deadLetters.status).toBe(200);
564 |
565 |     replayDeadLetter.mockRejectedValueOnce(
566 |       Object.assign(new Error('work whd_failed_1 cannot be replayed'), {
567 |         code: 'DEAD_LETTER_NOT_REPLAYABLE' as const,
568 |       }),
569 |     );
570 |     const replay = await app.request('/dashboard/v1/dead-letter-replays', {
571 |       method: 'POST',
572 |       headers: {
573 |         Cookie: loggedIn.cookie,
574 |         'Content-Type': 'application/json',
575 |         [proofHeader]: loggedIn.body.csrf_token,
576 |       },
577 |       body: JSON.stringify({
578 |         organization_id: 'org_1',
579 |         store_id: 'store_1',
580 |         work_type: 'webhook_delivery',
581 |         work_id: 'whd_failed_1',
582 |         idempotency_key: 'dlr_stable_browser_retry_1',
583 |       }),
584 |     });
585 |     expect(replay.status).toBe(409);
586 |
587 |     expect(metricPoints).toEqual(
588 |       expect.arrayContaining([
589 |         expect.objectContaining({
590 |           name: 'ozzyl.browser.control.events',
591 |           attributes: { control: 'authentication', outcome: 'allowed' },
592 |         }),
593 |         expect.objectContaining({
594 |           name: 'ozzyl.browser.control.events',
595 |           attributes: { control: 'csrf', outcome: 'rejected' },
596 |         }),
597 |         expect.objectContaining({
598 |           name: 'ozzyl.browser.dependency.operations',
599 |           attributes: {
600 |             dependency_type: 'dashboard_repository',
601 |             operation: 'load_overview',
602 |             outcome: 'success',
603 |           },
604 |         }),
605 |         expect.objectContaining({
606 |           name: 'ozzyl.browser.dependency.operations',
607 |           attributes: {
608 |             dependency_type: 'dead_letter_repository',
609 |             operation: 'replay',
610 |             outcome: 'rejected',
611 |           },
612 |         }),
613 |       ]),
614 |     );
615 |     const serialized = JSON.stringify(metricPoints);
616 |     expect(serialized).not.toContain('usr_1');
617 |     expect(serialized).not.toContain('org_1');
618 |     expect(serialized).not.toContain('store_1');
619 |     expect(serialized).not.toContain('ses_1');
620 |     expect(serialized).not.toContain('whd_failed_1');
621 |     expect(serialized).not.toContain('owner@example.com');
622 |   });
623 |
624 |   it('keeps browser authentication and dashboard access available when the metric sink fails', async () => {
625 |     const recorder = createMetricRecorder({
626 |       service: 'browser-test',
627 |       environment: 'test',
628 |       write: () => {
629 |         throw new Error('collector unavailable');
630 |       },
631 |     });
632 |     const { app } = createTestApp(merchantIdentity, recorder);
633 |     const loggedIn = await login(app);
634 |     expect(loggedIn.response.status).toBe(200);
635 |     const dashboard = await app.request(
636 |       '/dashboard/v1/overview?organization_id=org_1&store_id=store_1',
637 |       { headers: { Cookie: loggedIn.cookie } },
638 |     );
639 |     expect(dashboard.status).toBe(200);
640 |   });
641 |
642 |   it('rejects logout requests without CSRF proof', async () => {
643 |     const { app } = createTestApp();
644 |     const loggedIn = await login(app);
645 |     const response = await app.request('/auth/logout', {
646 |       method: 'POST',
647 |       headers: { Cookie: loggedIn.cookie },
648 |     });
649 |     expect(response.status).toBe(403);
650 |   });
651 | });
652 |
```

### apps/api/src/browser.ts

Bytes: 31447
SHA-256: dd0414901ff1b6ef83dcc48fb678732025232b8e49a2fad39f10f45c13245d83
Lines: 1-909 of 909

```typescript
  1 | import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
  2 | import { Hono, type Context } from 'hono';
  3 | import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
  4 | import { z } from 'zod';
  5 | import type {
  6 |   DurableDeadLetterRecord,
  7 |   DurableWorkOperationErrorCode,
  8 |   DurableWorkReplayResult,
  9 |   DurableWorkType,
 10 | } from '@ozzyl/database';
 11 | import {
 12 |   observeBrowserDependency,
 13 |   recordBrowserControlEvent,
 14 |   type MetricRecorder,
 15 | } from '@ozzyl/observability';
 16 | import {
 17 |   browserSessionResponseSchema,
 18 |   durableDeadLetterListResponseSchema,
 19 |   durableWorkReplayRequestSchema,
 20 |   durableWorkReplayResponseSchema,
 21 |   merchantDashboardOverviewSchema,
 22 |   nativeShadowRolloutModeSchema,
 23 |   nativeShadowRolloutResponseSchema,
 24 |   platformAdminOverviewSchema,
 25 |   type BrowserOrganization,
 26 |   type BrowserSessionResponse,
 27 |   type MerchantDashboardOverview,
 28 |   type NativeShadowRolloutMode,
 29 |   type PlatformAdminOverview,
 30 |   type PlatformRole,
 31 | } from '@ozzyl/shared-types';
 32 | import type { RateLimiter } from './index.js';
 33 |
 34 | const SESSION_COOKIE = 'ozzyl_session';
 35 | const loginSchema = z.object({
 36 |   email: z
 37 |     .string()
 38 |     .email()
 39 |     .max(320)
 40 |     .transform((value) => value.trim().toLowerCase()),
 41 |   password: z.string().min(10).max(1_000),
 42 | });
 43 | const dashboardScopeSchema = z.object({
 44 |   organization_id: z.string().min(1).max(200),
 45 |   store_id: z.string().min(1).max(200),
 46 | });
 47 | const durableWorkOperationErrorCodes = new Set<DurableWorkOperationErrorCode>([
 48 |   'STORE_ADMIN_REQUIRED',
 49 |   'DEAD_LETTER_NOT_FOUND',
 50 |   'DEAD_LETTER_NOT_REPLAYABLE',
 51 |   'DEAD_LETTER_IDEMPOTENCY_CONFLICT',
 52 |   'DEAD_LETTER_STATE_CHANGED',
 53 | ]);
 54 | const deadLetterScopeSchema = dashboardScopeSchema.extend({
 55 |   limit: z.coerce.number().int().min(1).max(100).default(50),
 56 | });
 57 | const nativeShadowRolloutUpdateSchema = dashboardScopeSchema
 58 |   .extend({
 59 |     mode: nativeShadowRolloutModeSchema,
 60 |     rollout_version: z.string().trim().min(1).max(100),
 61 |     sample_rate_bps: z.number().int().min(0).max(10000),
 62 |   })
 63 |   .refine(
 64 |     (value) =>
 65 |       (value.mode === 'off' && value.sample_rate_bps === 0) ||
 66 |       (value.mode === 'shadow' && value.sample_rate_bps > 0),
 67 |     { message: 'off requires zero sampling; shadow requires positive sampling' },
 68 |   );
 69 |
 70 | export interface UserSessionIdentity {
 71 |   sessionId: string;
 72 |   userId: string;
 73 |   email: string;
 74 |   platformRole: PlatformRole;
 75 |   expiresAt: string;
 76 |   organizations: BrowserOrganization[];
 77 | }
 78 |
 79 | export interface BrowserLoginResult {
 80 |   rawToken: string;
 81 |   identity: UserSessionIdentity;
 82 | }
 83 |
 84 | export interface BrowserAuthService {
 85 |   login(email: string, password: string): Promise<BrowserLoginResult | null>;
 86 |   resolve(rawToken: string): Promise<UserSessionIdentity | null>;
 87 |   revoke(input: { sessionId: string; userId: string }): Promise<void>;
 88 | }
 89 |
 90 | export interface MerchantDashboardRepository {
 91 |   loadOverview(input: {
 92 |     userId: string;
 93 |     organizationId: string;
 94 |     storeId: string;
 95 |     now: Date;
 96 |   }): Promise<MerchantDashboardOverview | null>;
 97 | }
 98 |
 99 | export interface PlatformAdminRepository {
100 |   loadOverview(input: { userId: string; now: Date }): Promise<PlatformAdminOverview | null>;
101 | }
102 |
103 | export interface NativeShadowRolloutAdministrationRepository {
104 |   setForStore(input: {
105 |     userId: string;
106 |     organizationId: string;
107 |     storeId: string;
108 |     mode: NativeShadowRolloutMode;
109 |     rolloutVersion: string;
110 |     sampleRateBps: number;
111 |   }): Promise<{
112 |     organizationId: string;
113 |     storeId: string;
114 |     integration: 'multi-store-saas';
115 |     mode: NativeShadowRolloutMode;
116 |     rolloutVersion: string;
117 |     sampleRateBps: number;
118 |     samplingKey: string;
119 |   } | null>;
120 | }
121 |
122 | export interface DurableWorkOperationsRepository {
123 |   listDeadLetters(input: {
124 |     requestedByUserId: string;
125 |     organizationId: string;
126 |     storeId: string;
127 |     limit?: number;
128 |     at?: Date;
129 |   }): Promise<DurableDeadLetterRecord[]>;
130 |   replayDeadLetter(input: {
131 |     requestedByUserId: string;
132 |     organizationId: string;
133 |     storeId: string;
134 |     workType: DurableWorkType;
135 |     workId: string;
136 |     idempotencyKey: string;
137 |     at?: Date;
138 |   }): Promise<DurableWorkReplayResult>;
139 | }
140 |
141 | export interface BrowserAuditRepository {
142 |   record(input: {
143 |     organizationId: string | null;
144 |     actorId: string | null;
145 |     action: string;
146 |     targetType?: string;
147 |     targetId?: string;
148 |     metadata?: Record<string, unknown>;
149 |   }): Promise<void>;
150 | }
151 |
152 | export interface BrowserApiDependencies {
153 |   auth: BrowserAuthService;
154 |   dashboard: MerchantDashboardRepository;
155 |   admin: PlatformAdminRepository;
156 |   nativeShadowRollouts?: NativeShadowRolloutAdministrationRepository;
157 |   durableWorkOperations?: DurableWorkOperationsRepository;
158 |   audit: BrowserAuditRepository;
159 |   rateLimiter: RateLimiter;
160 |   csrfSecret: string;
161 |   secureCookies?: boolean;
162 |   now?: () => Date;
163 |   monotonicNow?: () => number;
164 |   metrics?: MetricRecorder;
165 | }
166 |
167 | type BrowserEnvironment = {
168 |   Variables: {
169 |     requestId: string;
170 |   };
171 | };
172 |
173 | export function createBrowserApi(dependencies: BrowserApiDependencies): Hono<BrowserEnvironment> {
174 |   const app = new Hono<BrowserEnvironment>();
175 |   const now = dependencies.now ?? (() => new Date());
176 |   const monotonicNow = dependencies.monotonicNow ?? (() => Date.now());
177 |   const metrics = dependencies.metrics;
178 |
179 |   app.use('*', async (context, next) => {
180 |     const requestId = context.req.header('X-Request-ID')?.slice(0, 200) || randomUUID();
181 |     context.set('requestId', requestId);
182 |     await next();
183 |     context.header('X-Request-ID', requestId);
184 |     context.header('Cache-Control', 'no-store');
185 |   });
186 |
187 |   app.post('/auth/login', async (context) => {
188 |     const requestId = context.get('requestId');
189 |     const parsed = await parseJson(context.req.raw, loginSchema);
190 |     if (!parsed.success) return browserError(requestId, 400, 'INVALID_REQUEST', parsed.message);
191 |
192 |     const rateLimitKey = `browser-login:${parsed.value.email}`;
193 |     let allowed: boolean;
194 |     try {
195 |       allowed = await observeBrowserDependency(
196 |         metrics,
197 |         {
198 |           dependencyType: 'rate_limiter',
199 |           operation: 'consume',
200 |           classify: (value) => (value ? 'success' : 'rejected'),
201 |           monotonicNow,
202 |         },
203 |         () => dependencies.rateLimiter.consume(rateLimitKey, 10, 15 * 60_000),
204 |       );
205 |     } catch (error) {
206 |       recordBrowserControlEvent(metrics, 'rate_limit', 'error');
207 |       throw error;
208 |     }
209 |     if (!allowed) {
210 |       recordBrowserControlEvent(metrics, 'rate_limit', 'rejected');
211 |       return browserError(requestId, 429, 'RATE_LIMITED', 'Too many login attempts');
212 |     }
213 |     recordBrowserControlEvent(metrics, 'rate_limit', 'allowed');
214 |
215 |     let result: BrowserLoginResult | null;
216 |     try {
217 |       result = await observeBrowserDependency(
218 |         metrics,
219 |         {
220 |           dependencyType: 'auth_service',
221 |           operation: 'login',
222 |           classify: (value) => (value === null ? 'empty' : 'success'),
223 |           monotonicNow,
224 |         },
225 |         () => dependencies.auth.login(parsed.value.email, parsed.value.password),
226 |       );
227 |     } catch (error) {
228 |       recordBrowserControlEvent(metrics, 'authentication', 'error');
229 |       throw error;
230 |     }
231 |     if (!result) {
232 |       recordBrowserControlEvent(metrics, 'authentication', 'rejected');
233 |       await observeBrowserDependency(
234 |         metrics,
235 |         { dependencyType: 'audit_repository', operation: 'record', monotonicNow },
236 |         () =>
237 |           dependencies.audit.record({
238 |             organizationId: null,
239 |             actorId: null,
240 |             action: 'authentication.login_failed',
241 |             metadata: { requestId },
242 |           }),
243 |       );
244 |       return browserError(requestId, 401, 'INVALID_CREDENTIALS', 'Email or password is incorrect');
245 |     }
246 |     recordBrowserControlEvent(metrics, 'authentication', 'allowed');
247 |
248 |     setSessionCookie(
249 |       context,
250 |       result.rawToken,
251 |       result.identity.expiresAt,
252 |       dependencies.secureCookies,
253 |     );
254 |     await observeBrowserDependency(
255 |       metrics,
256 |       { dependencyType: 'audit_repository', operation: 'record', monotonicNow },
257 |       () =>
258 |         dependencies.audit.record({
259 |           organizationId: result.identity.organizations[0]?.id ?? null,
260 |           actorId: result.identity.userId,
261 |           action: 'authentication.login_succeeded',
262 |           targetType: 'user_session',
263 |           targetId: result.identity.sessionId,
264 |           metadata: { requestId },
265 |         }),
266 |     );
267 |     return context.json(
268 |       buildSessionResponse(result.identity, result.rawToken, dependencies.csrfSecret),
269 |     );
270 |   });
271 |
272 |   app.get('/auth/session', async (context) => {
273 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
274 |     if (!authenticated.success) return authenticated.response;
275 |     return context.json(
276 |       buildSessionResponse(authenticated.identity, authenticated.rawToken, dependencies.csrfSecret),
277 |     );
278 |   });
279 |
280 |   app.post('/auth/logout', async (context) => {
281 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
282 |     if (!authenticated.success) return authenticated.response;
283 |     const csrfHeader = context.req.header('X-CSRF-Token');
284 |     if (!verifyCsrfToken(authenticated.rawToken, csrfHeader, dependencies.csrfSecret)) {
285 |       recordBrowserControlEvent(metrics, 'csrf', 'rejected');
286 |       return browserError(context.get('requestId'), 403, 'CSRF_REJECTED', 'CSRF token is invalid');
287 |     }
288 |     recordBrowserControlEvent(metrics, 'csrf', 'allowed');
289 |
290 |     await observeBrowserDependency(
291 |       metrics,
292 |       { dependencyType: 'auth_service', operation: 'revoke', monotonicNow },
293 |       () =>
294 |         dependencies.auth.revoke({
295 |           sessionId: authenticated.identity.sessionId,
296 |           userId: authenticated.identity.userId,
297 |         }),
298 |     );
299 |     deleteCookie(context, SESSION_COOKIE, { path: '/' });
300 |     await observeBrowserDependency(
301 |       metrics,
302 |       { dependencyType: 'audit_repository', operation: 'record', monotonicNow },
303 |       () =>
304 |         dependencies.audit.record({
305 |           organizationId: authenticated.identity.organizations[0]?.id ?? null,
306 |           actorId: authenticated.identity.userId,
307 |           action: 'authentication.logout',
308 |           targetType: 'user_session',
309 |           targetId: authenticated.identity.sessionId,
310 |           metadata: { requestId: context.get('requestId') },
311 |         }),
312 |     );
313 |     return context.json({ success: true as const });
314 |   });
315 |
316 |   app.get('/dashboard/v1/overview', async (context) => {
317 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
318 |     if (!authenticated.success) return authenticated.response;
319 |     const parsedScope = dashboardScopeSchema.safeParse({
320 |       organization_id: context.req.query('organization_id'),
321 |       store_id: context.req.query('store_id'),
322 |     });
323 |     if (!parsedScope.success) {
324 |       return browserError(
325 |         context.get('requestId'),
326 |         400,
327 |         'INVALID_SCOPE',
328 |         'organization_id and store_id are required',
329 |       );
330 |     }
331 |     const allowedScope = findMerchantScope(
332 |       authenticated.identity,
333 |       parsedScope.data.organization_id,
334 |       parsedScope.data.store_id,
335 |     );
336 |     if (!allowedScope) {
337 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
338 |       return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
339 |     }
340 |     const overview = await observeBrowserDependency(
341 |       metrics,
342 |       {
343 |         dependencyType: 'dashboard_repository',
344 |         operation: 'load_overview',
345 |         classify: (value) => (value === null ? 'empty' : 'success'),
346 |         monotonicNow,
347 |       },
348 |       () =>
349 |         dependencies.dashboard.loadOverview({
350 |           userId: authenticated.identity.userId,
351 |           organizationId: allowedScope.organization.id,
352 |           storeId: allowedScope.store.id,
353 |           now: now(),
354 |         }),
355 |     );
356 |     if (!overview) {
357 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
358 |       return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
359 |     }
360 |     recordBrowserControlEvent(metrics, 'authorization', 'allowed');
361 |     await observeBrowserDependency(
362 |       metrics,
363 |       { dependencyType: 'audit_repository', operation: 'record', monotonicNow },
364 |       () =>
365 |         dependencies.audit.record({
366 |           organizationId: allowedScope.organization.id,
367 |           actorId: authenticated.identity.userId,
368 |           action: 'dashboard.overview_viewed',
369 |           targetType: 'store',
370 |           targetId: allowedScope.store.id,
371 |           metadata: { requestId: context.get('requestId') },
372 |         }),
373 |     );
374 |     return context.json(merchantDashboardOverviewSchema.parse(overview));
375 |   });
376 |
377 |   app.put('/dashboard/v1/native-shadow-rollout', async (context) => {
378 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
379 |     if (!authenticated.success) return authenticated.response;
380 |     const csrfHeader = context.req.header('X-CSRF-Token');
381 |     if (!verifyCsrfToken(authenticated.rawToken, csrfHeader, dependencies.csrfSecret)) {
382 |       recordBrowserControlEvent(metrics, 'csrf', 'rejected');
383 |       return browserError(context.get('requestId'), 403, 'CSRF_REJECTED', 'CSRF token is invalid');
384 |     }
385 |     recordBrowserControlEvent(metrics, 'csrf', 'allowed');
386 |     if (!dependencies.nativeShadowRollouts) {
387 |       return browserError(
388 |         context.get('requestId'),
389 |         503,
390 |         'NATIVE_SHADOW_ROLLOUT_UNAVAILABLE',
391 |         'Native shadow rollout administration is unavailable',
392 |       );
393 |     }
394 |     const parsed = await parseJson(context.req.raw, nativeShadowRolloutUpdateSchema);
395 |     if (!parsed.success) {
396 |       return browserError(context.get('requestId'), 400, 'INVALID_REQUEST', parsed.message);
397 |     }
398 |     const allowedScope = findMerchantScope(
399 |       authenticated.identity,
400 |       parsed.value.organization_id,
401 |       parsed.value.store_id,
402 |     );
403 |     if (!allowedScope) {
404 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
405 |       return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
406 |     }
407 |     if (allowedScope.organization.role !== 'owner' && allowedScope.organization.role !== 'admin') {
408 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
409 |       return browserError(
410 |         context.get('requestId'),
411 |         403,
412 |         'STORE_ADMIN_REQUIRED',
413 |         'Store owner or administrator access is required',
414 |       );
415 |     }
416 |     const rollout = await observeBrowserDependency(
417 |       metrics,
418 |       {
419 |         dependencyType: 'rollout_repository',
420 |         operation: 'set_rollout',
421 |         classify: (value) => (value === null ? 'empty' : 'success'),
422 |         monotonicNow,
423 |       },
424 |       () =>
425 |         dependencies.nativeShadowRollouts!.setForStore({
426 |           userId: authenticated.identity.userId,
427 |           organizationId: allowedScope.organization.id,
428 |           storeId: allowedScope.store.id,
429 |           mode: parsed.value.mode,
430 |           rolloutVersion: parsed.value.rollout_version,
431 |           sampleRateBps: parsed.value.sample_rate_bps,
432 |         }),
433 |     );
434 |     if (!rollout) {
435 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
436 |       return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
437 |     }
438 |     recordBrowserControlEvent(metrics, 'authorization', 'allowed');
439 |     await observeBrowserDependency(
440 |       metrics,
441 |       { dependencyType: 'audit_repository', operation: 'record', monotonicNow },
442 |       () =>
443 |         dependencies.audit.record({
444 |           organizationId: allowedScope.organization.id,
445 |           actorId: authenticated.identity.userId,
446 |           action: 'native_shadow.rollout_updated',
447 |           targetType: 'store',
448 |           targetId: allowedScope.store.id,
449 |           metadata: {
450 |             requestId: context.get('requestId'),
451 |             mode: rollout.mode,
452 |             rolloutVersion: rollout.rolloutVersion,
453 |             sampleRateBps: rollout.sampleRateBps,
454 |           },
455 |         }),
456 |     );
457 |     return context.json(
458 |       nativeShadowRolloutResponseSchema.parse({
459 |         success: true,
460 |         organization_id: rollout.organizationId,
461 |         store_id: rollout.storeId,
462 |         integration: rollout.integration,
463 |         mode: rollout.mode,
464 |         rollout_version: rollout.rolloutVersion,
465 |         sample_rate_bps: rollout.sampleRateBps,
466 |         sampling_key: rollout.samplingKey,
467 |       }),
468 |     );
469 |   });
470 |
471 |   app.get('/dashboard/v1/dead-letters', async (context) => {
472 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
473 |     if (!authenticated.success) return authenticated.response;
474 |     if (!dependencies.durableWorkOperations) {
475 |       return browserError(
476 |         context.get('requestId'),
477 |         503,
478 |         'DURABLE_WORK_OPERATIONS_UNAVAILABLE',
479 |         'Durable work operations are unavailable',
480 |       );
481 |     }
482 |     const parsedScope = deadLetterScopeSchema.safeParse({
483 |       organization_id: context.req.query('organization_id'),
484 |       store_id: context.req.query('store_id'),
485 |       limit: context.req.query('limit'),
486 |     });
487 |     if (!parsedScope.success) {
488 |       return browserError(
489 |         context.get('requestId'),
490 |         400,
491 |         'INVALID_SCOPE',
492 |         'organization_id, store_id, and an optional limit between 1 and 100 are required',
493 |       );
494 |     }
495 |     const allowedScope = findMerchantScope(
496 |       authenticated.identity,
497 |       parsedScope.data.organization_id,
498 |       parsedScope.data.store_id,
499 |     );
500 |     if (!allowedScope) {
501 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
502 |       return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
503 |     }
504 |     if (allowedScope.organization.role !== 'owner' && allowedScope.organization.role !== 'admin') {
505 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
506 |       return browserError(
507 |         context.get('requestId'),
508 |         403,
509 |         'STORE_ADMIN_REQUIRED',
510 |         'Store owner or administrator access is required',
511 |       );
512 |     }
513 |     try {
514 |       const deadLetters = await observeBrowserDependency(
515 |         metrics,
516 |         {
517 |           dependencyType: 'dead_letter_repository',
518 |           operation: 'list',
519 |           classifyError: classifyDurableWorkDependencyError,
520 |           monotonicNow,
521 |         },
522 |         () =>
523 |           dependencies.durableWorkOperations!.listDeadLetters({
524 |             requestedByUserId: authenticated.identity.userId,
525 |             organizationId: allowedScope.organization.id,
526 |             storeId: allowedScope.store.id,
527 |             limit: parsedScope.data.limit,
528 |             at: now(),
529 |           }),
530 |       );
531 |       recordBrowserControlEvent(metrics, 'authorization', 'allowed');
532 |       await observeBrowserDependency(
533 |         metrics,
534 |         { dependencyType: 'audit_repository', operation: 'record', monotonicNow },
535 |         () =>
536 |           dependencies.audit.record({
537 |             organizationId: allowedScope.organization.id,
538 |             actorId: authenticated.identity.userId,
539 |             action: 'durable_work.dead_letters_viewed',
540 |             targetType: 'store',
541 |             targetId: allowedScope.store.id,
542 |             metadata: {
543 |               requestId: context.get('requestId'),
544 |               resultCount: deadLetters.length,
545 |             },
546 |           }),
547 |       );
548 |       return context.json(
549 |         durableDeadLetterListResponseSchema.parse({
550 |           success: true,
551 |           organization_id: allowedScope.organization.id,
552 |           store_id: allowedScope.store.id,
553 |           dead_letters: deadLetters.map(serializeDeadLetter),
554 |         }),
555 |       );
556 |     } catch (error) {
557 |       if (isDurableWorkOperationError(error) && error.code === 'STORE_ADMIN_REQUIRED') {
558 |         recordBrowserControlEvent(metrics, 'authorization', 'rejected');
559 |       }
560 |       return durableWorkBrowserError(context.get('requestId'), error);
561 |     }
562 |   });
563 |
564 |   app.post('/dashboard/v1/dead-letter-replays', async (context) => {
565 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
566 |     if (!authenticated.success) return authenticated.response;
567 |     const csrfHeader = context.req.header('X-CSRF-Token');
568 |     if (!verifyCsrfToken(authenticated.rawToken, csrfHeader, dependencies.csrfSecret)) {
569 |       recordBrowserControlEvent(metrics, 'csrf', 'rejected');
570 |       return browserError(context.get('requestId'), 403, 'CSRF_REJECTED', 'CSRF token is invalid');
571 |     }
572 |     recordBrowserControlEvent(metrics, 'csrf', 'allowed');
573 |     if (!dependencies.durableWorkOperations) {
574 |       return browserError(
575 |         context.get('requestId'),
576 |         503,
577 |         'DURABLE_WORK_OPERATIONS_UNAVAILABLE',
578 |         'Durable work operations are unavailable',
579 |       );
580 |     }
581 |     const parsed = await parseJson(context.req.raw, durableWorkReplayRequestSchema);
582 |     if (!parsed.success) {
583 |       return browserError(context.get('requestId'), 400, 'INVALID_REQUEST', parsed.message);
584 |     }
585 |     const allowedScope = findMerchantScope(
586 |       authenticated.identity,
587 |       parsed.value.organization_id,
588 |       parsed.value.store_id,
589 |     );
590 |     if (!allowedScope) {
591 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
592 |       return browserError(context.get('requestId'), 404, 'STORE_NOT_FOUND', 'Store not found');
593 |     }
594 |     if (allowedScope.organization.role !== 'owner' && allowedScope.organization.role !== 'admin') {
595 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
596 |       return browserError(
597 |         context.get('requestId'),
598 |         403,
599 |         'STORE_ADMIN_REQUIRED',
600 |         'Store owner or administrator access is required',
601 |       );
602 |     }
603 |     try {
604 |       const replay = await observeBrowserDependency(
605 |         metrics,
606 |         {
607 |           dependencyType: 'dead_letter_repository',
608 |           operation: 'replay',
609 |           classify: (value) => (value.replay ? 'replay' : 'success'),
610 |           classifyError: classifyDurableWorkDependencyError,
611 |           monotonicNow,
612 |         },
613 |         () =>
614 |           dependencies.durableWorkOperations!.replayDeadLetter({
615 |             requestedByUserId: authenticated.identity.userId,
616 |             organizationId: allowedScope.organization.id,
617 |             storeId: allowedScope.store.id,
618 |             workType: parsed.value.work_type,
619 |             workId: parsed.value.work_id,
620 |             idempotencyKey: parsed.value.idempotency_key,
621 |             at: now(),
622 |           }),
623 |       );
624 |       recordBrowserControlEvent(metrics, 'authorization', 'allowed');
625 |       return context.json(durableWorkReplayResponseSchema.parse(serializeReplay(replay)));
626 |     } catch (error) {
627 |       if (isDurableWorkOperationError(error) && error.code === 'STORE_ADMIN_REQUIRED') {
628 |         recordBrowserControlEvent(metrics, 'authorization', 'rejected');
629 |       }
630 |       return durableWorkBrowserError(context.get('requestId'), error);
631 |     }
632 |   });
633 |
634 |   app.get('/admin/v1/overview', async (context) => {
635 |     const authenticated = await authenticateBrowserRequest(context, dependencies);
636 |     if (!authenticated.success) return authenticated.response;
637 |     if (authenticated.identity.platformRole !== 'platform_admin') {
638 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
639 |       return browserError(
640 |         context.get('requestId'),
641 |         403,
642 |         'PLATFORM_ADMIN_REQUIRED',
643 |         'Platform administrator access is required',
644 |       );
645 |     }
646 |     const overview = await observeBrowserDependency(
647 |       metrics,
648 |       {
649 |         dependencyType: 'admin_repository',
650 |         operation: 'load_overview',
651 |         classify: (value) => (value === null ? 'empty' : 'success'),
652 |         monotonicNow,
653 |       },
654 |       () =>
655 |         dependencies.admin.loadOverview({
656 |           userId: authenticated.identity.userId,
657 |           now: now(),
658 |         }),
659 |     );
660 |     if (!overview) {
661 |       recordBrowserControlEvent(metrics, 'authorization', 'rejected');
662 |       return browserError(
663 |         context.get('requestId'),
664 |         403,
665 |         'PLATFORM_ADMIN_REQUIRED',
666 |         'Platform administrator access is required',
667 |       );
668 |     }
669 |     recordBrowserControlEvent(metrics, 'authorization', 'allowed');
670 |     await observeBrowserDependency(
671 |       metrics,
672 |       { dependencyType: 'audit_repository', operation: 'record', monotonicNow },
673 |       () =>
674 |         dependencies.audit.record({
675 |           organizationId: null,
676 |           actorId: authenticated.identity.userId,
677 |           action: 'platform_admin.overview_viewed',
678 |           targetType: 'platform',
679 |           targetId: 'ozzyl-guard',
680 |           metadata: { requestId: context.get('requestId') },
681 |         }),
682 |     );
683 |     return context.json(platformAdminOverviewSchema.parse(overview));
684 |   });
685 |
686 |   return app;
687 | }
688 |
689 | function buildSessionResponse(
690 |   identity: UserSessionIdentity,
691 |   rawToken: string,
692 |   csrfSecret: string,
693 | ): BrowserSessionResponse {
694 |   return browserSessionResponseSchema.parse({
695 |     success: true,
696 |     user: {
697 |       id: identity.userId,
698 |       email: identity.email,
699 |       platform_role: identity.platformRole,
700 |     },
701 |     organizations: identity.organizations,
702 |     csrf_token: csrfToken(rawToken, csrfSecret),
703 |     expires_at: identity.expiresAt,
704 |   });
705 | }
706 |
707 | async function authenticateBrowserRequest(
708 |   context: Context<BrowserEnvironment>,
709 |   dependencies: BrowserApiDependencies,
710 | ): Promise<
711 |   | { success: true; identity: UserSessionIdentity; rawToken: string }
712 |   | { success: false; response: Response }
713 | > {
714 |   const requestId = context.get('requestId');
715 |   const monotonicNow = dependencies.monotonicNow ?? (() => Date.now());
716 |   const rawToken = getCookie(context, SESSION_COOKIE);
717 |   if (!rawToken) {
718 |     recordBrowserControlEvent(dependencies.metrics, 'authentication', 'rejected');
719 |     return {
720 |       success: false,
721 |       response: browserError(requestId, 401, 'USER_SESSION_REQUIRED', 'A user session is required'),
722 |     };
723 |   }
724 |   let identity: UserSessionIdentity | null;
725 |   try {
726 |     identity = await observeBrowserDependency(
727 |       dependencies.metrics,
728 |       {
729 |         dependencyType: 'auth_service',
730 |         operation: 'resolve',
731 |         classify: (value) => (value === null ? 'empty' : 'success'),
732 |         monotonicNow,
733 |       },
734 |       () => dependencies.auth.resolve(rawToken),
735 |     );
736 |   } catch (error) {
737 |     recordBrowserControlEvent(dependencies.metrics, 'authentication', 'error');
738 |     throw error;
739 |   }
740 |   if (!identity) {
741 |     recordBrowserControlEvent(dependencies.metrics, 'authentication', 'rejected');
742 |     deleteCookie(context, SESSION_COOKIE, { path: '/' });
743 |     return {
744 |       success: false,
745 |       response: browserError(
746 |         requestId,
747 |         401,
748 |         'USER_SESSION_INVALID',
749 |         'User session is invalid or expired',
750 |       ),
751 |     };
752 |   }
753 |   recordBrowserControlEvent(dependencies.metrics, 'authentication', 'allowed');
754 |   let allowed: boolean;
755 |   try {
756 |     allowed = await observeBrowserDependency(
757 |       dependencies.metrics,
758 |       {
759 |         dependencyType: 'rate_limiter',
760 |         operation: 'consume',
761 |         classify: (value) => (value ? 'success' : 'rejected'),
762 |         monotonicNow,
763 |       },
764 |       () => dependencies.rateLimiter.consume(`browser-session:${identity.sessionId}`, 300, 60_000),
765 |     );
766 |   } catch (error) {
767 |     recordBrowserControlEvent(dependencies.metrics, 'rate_limit', 'error');
768 |     throw error;
769 |   }
770 |   if (!allowed) {
771 |     recordBrowserControlEvent(dependencies.metrics, 'rate_limit', 'rejected');
772 |     return {
773 |       success: false,
774 |       response: browserError(requestId, 429, 'RATE_LIMITED', 'Too many requests'),
775 |     };
776 |   }
777 |   recordBrowserControlEvent(dependencies.metrics, 'rate_limit', 'allowed');
778 |   return { success: true, identity, rawToken };
779 | }
780 |
781 | function findMerchantScope(identity: UserSessionIdentity, organizationId: string, storeId: string) {
782 |   const organization = identity.organizations.find((item) => item.id === organizationId);
783 |   const store = organization?.stores.find((item) => item.id === storeId);
784 |   return organization && store ? { organization, store } : null;
785 | }
786 |
787 | function setSessionCookie(
788 |   context: Parameters<typeof setCookie>[0],
789 |   rawToken: string,
790 |   expiresAt: string,
791 |   secure = false,
792 | ): void {
793 |   const expires = new Date(expiresAt);
794 |   const maxAge = Math.max(0, Math.floor((expires.getTime() - Date.now()) / 1_000));
795 |   setCookie(context, SESSION_COOKIE, rawToken, {
796 |     httpOnly: true,
797 |     secure,
798 |     sameSite: 'Lax',
799 |     path: '/',
800 |     expires,
801 |     maxAge,
802 |   });
803 | }
804 |
805 | function csrfToken(rawToken: string, secret: string): string {
806 |   if (secret.length < 16) throw new Error('SESSION_CSRF_SECRET must be at least 16 characters');
807 |   return createHmac('sha256', secret).update(rawToken).digest('base64url');
808 | }
809 |
810 | function verifyCsrfToken(rawToken: string, candidate: string | undefined, secret: string): boolean {
811 |   if (!candidate) return false;
812 |   const actual = Buffer.from(csrfToken(rawToken, secret));
813 |   const provided = Buffer.from(candidate);
814 |   return actual.length === provided.length && timingSafeEqual(actual, provided);
815 | }
816 |
817 | async function parseJson<TOutput, TInput>(
818 |   request: Request,
819 |   schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
820 | ): Promise<{ success: true; value: TOutput } | { success: false; message: string }> {
821 |   try {
822 |     const raw: unknown = await request.json();
823 |     const parsed = schema.safeParse(raw);
824 |     if (!parsed.success) {
825 |       return {
826 |         success: false,
827 |         message: parsed.error.issues
828 |           .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
829 |           .join('; '),
830 |       };
831 |     }
832 |     return { success: true, value: parsed.data };
833 |   } catch {
834 |     return { success: false, message: 'Request body must be valid JSON' };
835 |   }
836 | }
837 |
838 | function serializeDeadLetter(record: DurableDeadLetterRecord) {
839 |   return {
840 |     work_type: record.workType,
841 |     work_id: record.workId,
842 |     organization_id: record.organizationId,
843 |     store_id: record.storeId,
844 |     status: record.status,
845 |     attempts: record.attempts,
846 |     error_code: record.errorCode,
847 |     failed_at: record.failedAt,
848 |     replayable: record.replayable,
849 |     replay_blocked_reason: record.replayBlockedReason,
850 |   };
851 | }
852 |
853 | function serializeReplay(result: DurableWorkReplayResult) {
854 |   return {
855 |     success: true as const,
856 |     replay_id: result.replayId,
857 |     organization_id: result.organizationId,
858 |     store_id: result.storeId,
859 |     work_type: result.workType,
860 |     work_id: result.workId,
861 |     previous_status: result.previousStatus,
862 |     previous_error_code: result.previousErrorCode,
863 |     previous_attempts: result.previousAttempts,
864 |     replayed_status: result.replayedStatus,
865 |     replayed_at: result.replayedAt,
866 |     replay: result.replay,
867 |   };
868 | }
869 |
870 | function isDurableWorkOperationError(
871 |   error: unknown,
872 | ): error is Error & { code: DurableWorkOperationErrorCode } {
873 |   return (
874 |     error instanceof Error &&
875 |     'code' in error &&
876 |     typeof error.code === 'string' &&
877 |     durableWorkOperationErrorCodes.has(error.code as DurableWorkOperationErrorCode)
878 |   );
879 | }
880 |
881 | function classifyDurableWorkDependencyError(error: unknown): 'rejected' | 'error' {
882 |   return isDurableWorkOperationError(error) ? 'rejected' : 'error';
883 | }
884 |
885 | function durableWorkBrowserError(requestId: string, error: unknown): Response {
886 |   if (!isDurableWorkOperationError(error)) {
887 |     return browserError(
888 |       requestId,
889 |       500,
890 |       'DURABLE_WORK_OPERATION_FAILED',
891 |       'Durable work operation failed',
892 |     );
893 |   }
894 |   const code = error.code;
895 |   const status =
896 |     code === 'STORE_ADMIN_REQUIRED' ? 403 : code === 'DEAD_LETTER_NOT_FOUND' ? 404 : 409;
897 |   return browserError(requestId, status, code, error.message);
898 | }
899 |
900 | function browserError(requestId: string, status: number, code: string, message: string): Response {
901 |   return new Response(
902 |     JSON.stringify({ success: false, error: { code, message }, request_id: requestId }),
903 |     {
904 |       status,
905 |       headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
906 |     },
907 |   );
908 | }
909 |
```

### apps/api/src/index.ts

Bytes: 52487
SHA-256: dd3cf9e144b1e6b8f6de6121135b20e5ca8d6c152a3c69b852c627c90162331b
Lines: 1-1594 of 1594

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
 371 |   if (dependencies.browser) {
 372 |     app.route(
 373 |       '/',
 374 |       createBrowserApi({
 375 |         ...dependencies.browser,
 376 |         metrics: dependencies.browser.metrics ?? metrics,
 377 |         monotonicNow: dependencies.browser.monotonicNow ?? monotonicNow,
 378 |       }),
 379 |     );
 380 |   }
 381 |
 382 |   app.use('/v1/*', async (context, next) => {
 383 |     const requestId = context.get('requestId');
 384 |     const authorization = context.req.header('Authorization');
 385 |     if (!authorization?.startsWith('Bearer ')) {
 386 |       recordApiControlEvent(metrics, 'authentication', 'rejected');
 387 |       return apiError(requestId, 401, 'UNAUTHORIZED', 'A Bearer API key is required');
 388 |     }
 389 |     const rawApiKey = authorization.slice('Bearer '.length).trim();
 390 |     if (!/^ozg_(test|live)_/.test(rawApiKey)) {
 391 |       recordApiControlEvent(metrics, 'authentication', 'rejected');
 392 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key format is invalid');
 393 |     }
 394 |     let identity: ApiKeyIdentity | null;
 395 |     try {
 396 |       identity = await observeApiDependency(
 397 |         metrics,
 398 |         {
 399 |           dependencyType: 'api_key',
 400 |           operation: 'resolve',
 401 |           classify: (value) => (value === null ? 'empty' : 'success'),
 402 |           monotonicNow,
 403 |         },
 404 |         () => dependencies.apiKeys.resolve(rawApiKey),
 405 |       );
 406 |     } catch (error) {
 407 |       recordApiControlEvent(metrics, 'authentication', 'error');
 408 |       throw error;
 409 |     }
 410 |     if (!identity) {
 411 |       recordApiControlEvent(metrics, 'authentication', 'rejected');
 412 |       return apiError(requestId, 401, 'INVALID_API_KEY', 'API key is invalid or revoked');
 413 |     }
 414 |     recordApiControlEvent(metrics, 'authentication', 'allowed');
 415 |     let allowed: boolean;
 416 |     try {
 417 |       allowed = await observeApiDependency(
 418 |         metrics,
 419 |         {
 420 |           dependencyType: 'rate_limiter',
 421 |           operation: 'consume',
 422 |           classify: (value) => (value ? 'success' : 'rejected'),
 423 |           monotonicNow,
 424 |         },
 425 |         () => dependencies.rateLimiter.consume(`api:${identity.apiKeyId}`, 120, 60_000),
 426 |       );
 427 |     } catch (error) {
 428 |       recordApiControlEvent(metrics, 'rate_limit', 'error');
 429 |       throw error;
 430 |     }
 431 |     if (!allowed) {
 432 |       recordApiControlEvent(metrics, 'rate_limit', 'rejected');
 433 |       return apiError(requestId, 429, 'RATE_LIMITED', 'Too many requests');
 434 |     }
 435 |     recordApiControlEvent(metrics, 'rate_limit', 'allowed');
 436 |     context.set('identity', identity);
 437 |     await next();
 438 |     context.header('X-Request-ID', requestId);
 439 |   });
 440 |
 441 |   app.post('/v1/risk-assessments', async (context) => {
 442 |     const requestId = context.get('requestId');
 443 |     const identity = context.get('identity');
 444 |     const scopeError = requireScope(identity, 'risk:write', requestId, metrics);
 445 |     if (scopeError) return scopeError;
 446 |
 447 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 448 |     if (!idempotencyKey) {
 449 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 450 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 451 |     }
 452 |
 453 |     const existing = await observeApiDependency(
 454 |       metrics,
 455 |       {
 456 |         dependencyType: 'assessment_repository',
 457 |         operation: 'find_by_idempotency',
 458 |         classify: (value) => (value === null ? 'empty' : 'replay'),
 459 |         monotonicNow,
 460 |       },
 461 |       () =>
 462 |         dependencies.assessments.findByIdempotency({
 463 |           organizationId: identity.organizationId,
 464 |           storeId: identity.storeId,
 465 |           idempotencyKey,
 466 |         }),
 467 |     );
 468 |     if (existing) {
 469 |       recordApiControlEvent(metrics, 'idempotency', 'replay');
 470 |       return context.json(existing.response, 200);
 471 |     }
 472 |     recordApiControlEvent(metrics, 'idempotency', 'allowed');
 473 |
 474 |     const parsedBody = await parseJson(context.req.raw, riskAssessmentRequestSchema);
 475 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 476 |     const request = parsedBody.value;
 477 |     const phone = normalizeBangladeshPhone(request.phone);
 478 |     if (!isValidBangladeshPhone(phone)) {
 479 |       return apiError(
 480 |         requestId,
 481 |         400,
 482 |         'INVALID_PHONE',
 483 |         'A valid Bangladesh mobile number is required',
 484 |       );
 485 |     }
 486 |
 487 |     try {
 488 |       await observeApiDependency(
 489 |         metrics,
 490 |         {
 491 |           dependencyType: 'usage_ledger',
 492 |           operation: 'reserve',
 493 |           classifyError: (error) => (error instanceof UsageLimitError ? 'rejected' : 'error'),
 494 |           monotonicNow,
 495 |         },
 496 |         () =>
 497 |           dependencies.usage.reserve({
 498 |             organizationId: identity.organizationId,
 499 |             period: billingPeriod(now()),
 500 |             requestId: idempotencyKey,
 501 |             units: 1,
 502 |             plan: identity.plan,
 503 |           }),
 504 |       );
 505 |       recordApiControlEvent(metrics, 'quota', 'allowed');
 506 |     } catch (error) {
 507 |       if (!(error instanceof UsageLimitError)) {
 508 |         recordApiControlEvent(metrics, 'quota', 'error');
 509 |         throw error;
 510 |       }
 511 |       recordApiControlEvent(metrics, 'quota', 'rejected');
 512 |       return apiError(requestId, 429, 'USAGE_LIMIT_EXCEEDED', error.message);
 513 |     }
 514 |
 515 |     const startedAt = Date.now();
 516 |     const phoneHash = dependencies.hashPhone(phone);
 517 |     const features = await observeApiDependency(
 518 |       metrics,
 519 |       {
 520 |         dependencyType: 'feature_provider',
 521 |         operation: 'load',
 522 |         monotonicNow,
 523 |       },
 524 |       () => dependencies.features.load({ identity, phone, phoneHash, request }),
 525 |     );
 526 |     const order = {
 527 |       total: request.order_total,
 528 |       paymentMethod: request.payment_method,
 529 |       ...(request.items_count === undefined ? {} : { itemsCount: request.items_count }),
 530 |     };
 531 |     const engineInput = {
 532 |       order,
 533 |       courier: features.courier,
 534 |       merchant: features.merchant,
 535 |       velocity: features.velocity,
 536 |       verification: features.verification,
 537 |       network: features.network,
 538 |       ...(features.policy === undefined ? {} : { policy: features.policy }),
 539 |     };
 540 |     const result = assessRisk(engineInput);
 541 |     const response = riskAssessmentResponseSchema.parse({
 542 |       success: true,
 543 |       assessment_id: idFactory('ras'),
 544 |       risk_score: result.score,
 545 |       risk_level: result.riskLevel,
 546 |       decision: result.decision,
 547 |       confidence: result.confidence,
 548 |       signals: result.signals,
 549 |       courier_summary: {
 550 |         freshness: features.courier.freshness,
 551 |         providers: features.courier.providerCount,
 552 |         total: features.courier.totalOrders,
 553 |         delivered: features.courier.deliveredOrders,
 554 |         returned: features.courier.returnedOrders,
 555 |         cancelled_before_shipping: features.courier.cancelledBeforeShipping,
 556 |       },
 557 |       recommended_actions: result.recommendedActions,
 558 |       meta: {
 559 |         engine_version: result.engineVersion,
 560 |         policy_version: result.policyVersion,
 561 |         degraded: result.degraded,
 562 |         response_ms: Date.now() - startedAt,
 563 |       },
 564 |     });
 565 |
 566 |     const stored = await observeDurableProducer(
 567 |       tracer,
 568 |       context.get('traceContext'),
 569 |       'assessment_event',
 570 |       'webhook_delivery',
 571 |       (traceContext) =>
 572 |         observeApiDependency(
 573 |           metrics,
 574 |           {
 575 |             dependencyType: 'assessment_repository',
 576 |             operation: 'save',
 577 |             classify: (value) =>
 578 |               value.response.assessment_id === response.assessment_id ? 'success' : 'replay',
 579 |             monotonicNow,
 580 |           },
 581 |           () =>
 582 |             dependencies.assessments.save({
 583 |               traceContext,
 584 |               identity: {
 585 |                 apiKeyId: identity.apiKeyId,
 586 |                 organizationId: identity.organizationId,
 587 |                 storeId: identity.storeId,
 588 |               },
 589 |               idempotencyKey,
 590 |               phoneHash,
 591 |               request,
 592 |               response,
 593 |             }),
 594 |         ),
 595 |     );
 596 |     const created = stored.response.assessment_id === response.assessment_id;
 597 |     if (created) {
 598 |       recordRiskAssessmentDistribution(metrics, {
 599 |         decision: stored.response.decision,
 600 |         riskLevel: stored.response.risk_level,
 601 |         score: stored.response.risk_score,
 602 |         confidence: stored.response.confidence,
 603 |         degraded: stored.response.meta?.degraded ?? true,
 604 |         freshness: features.courier.freshness,
 605 |       });
 606 |     } else {
 607 |       recordApiControlEvent(metrics, 'idempotency', 'replay');
 608 |     }
 609 |     return context.json(stored.response, created ? 201 : 200);
 610 |   });
 611 |
 612 |   app.get('/v1/risk-assessments/:assessmentId', async (context) => {
 613 |     const requestId = context.get('requestId');
 614 |     const identity = context.get('identity');
 615 |     const scopeError = requireScope(identity, 'risk:read', requestId, metrics);
 616 |     if (scopeError) return scopeError;
 617 |     const record = await observeApiDependency(
 618 |       metrics,
 619 |       {
 620 |         dependencyType: 'assessment_repository',
 621 |         operation: 'find_by_id',
 622 |         classify: (value) => (value === null ? 'empty' : 'success'),
 623 |         monotonicNow,
 624 |       },
 625 |       () =>
 626 |         dependencies.assessments.findById({
 627 |           organizationId: identity.organizationId,
 628 |           storeId: identity.storeId,
 629 |           assessmentId: context.req.param('assessmentId'),
 630 |         }),
 631 |     );
 632 |     if (!record) return apiError(requestId, 404, 'ASSESSMENT_NOT_FOUND', 'Assessment not found');
 633 |     return context.json(record.response);
 634 |   });
 635 |
 636 |   app.post('/v1/order-outcomes', async (context) => {
 637 |     const requestId = context.get('requestId');
 638 |     const identity = context.get('identity');
 639 |     const scopeError = requireScope(identity, 'outcomes:write', requestId, metrics);
 640 |     if (scopeError) return scopeError;
 641 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 642 |     if (!idempotencyKey) {
 643 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 644 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 645 |     }
 646 |     const parsedBody = await parseJson(context.req.raw, orderOutcomeSchema);
 647 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 648 |     if (parsedBody.value.assessment_id) {
 649 |       const assessment = await observeApiDependency(
 650 |         metrics,
 651 |         {
 652 |           dependencyType: 'assessment_repository',
 653 |           operation: 'find_by_id',
 654 |           classify: (value) => (value === null ? 'empty' : 'success'),
 655 |           monotonicNow,
 656 |         },
 657 |         () =>
 658 |           dependencies.assessments.findById({
 659 |             organizationId: identity.organizationId,
 660 |             storeId: identity.storeId,
 661 |             assessmentId: parsedBody.value.assessment_id!,
 662 |           }),
 663 |       );
 664 |       if (!assessment) {
 665 |         return apiError(
 666 |           requestId,
 667 |           400,
 668 |           'ASSESSMENT_NOT_FOUND',
 669 |           'Assessment not found for this store',
 670 |         );
 671 |       }
 672 |     }
 673 |     const saved = await observeDurableProducer(
 674 |       tracer,
 675 |       context.get('traceContext'),
 676 |       'outcome_event',
 677 |       'webhook_delivery',
 678 |       (traceContext) =>
 679 |         observeApiDependency(
 680 |           metrics,
 681 |           {
 682 |             dependencyType: 'outcome_repository',
 683 |             operation: 'save',
 684 |             classify: (value) => (value.replay ? 'replay' : 'success'),
 685 |             monotonicNow,
 686 |           },
 687 |           () =>
 688 |             dependencies.outcomes.save({
 689 |               organizationId: identity.organizationId,
 690 |               storeId: identity.storeId,
 691 |               idempotencyKey,
 692 |               outcome: parsedBody.value,
 693 |               traceContext,
 694 |             }),
 695 |         ),
 696 |     );
 697 |     recordApiControlEvent(metrics, 'idempotency', saved.replay ? 'replay' : 'allowed');
 698 |     if (!saved.replay) {
 699 |       recordRiskOutcomeDistribution(metrics, {
 700 |         outcome: parsedBody.value.outcome,
 701 |         linkedAssessment: parsedBody.value.assessment_id !== undefined,
 702 |       });
 703 |     }
 704 |     return context.json(
 705 |       { success: true as const, outcome_id: saved.outcomeId, replay: saved.replay },
 706 |       saved.replay ? 200 : 201,
 707 |     );
 708 |   });
 709 |
 710 |   app.get('/v1/integration-rollouts/native-shadow', async (context) => {
 711 |     const requestId = context.get('requestId');
 712 |     const identity = context.get('identity');
 713 |     const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
 714 |     if (scopeError) return scopeError;
 715 |     if (!dependencies.nativeShadowRollouts) {
 716 |       return apiError(
 717 |         requestId,
 718 |         503,
 719 |         'NATIVE_SHADOW_ROLLOUT_UNAVAILABLE',
 720 |         'Native shadow rollout configuration is not available',
 721 |       );
 722 |     }
 723 |     const rollout = await observeApiDependency(
 724 |       metrics,
 725 |       {
 726 |         dependencyType: 'native_shadow_rollout_repository',
 727 |         operation: 'load',
 728 |         classify: (value) => (value === null ? 'empty' : 'success'),
 729 |         monotonicNow,
 730 |       },
 731 |       () =>
 732 |         dependencies.nativeShadowRollouts!.load({
 733 |           organizationId: identity.organizationId,
 734 |           storeId: identity.storeId,
 735 |         }),
 736 |     );
 737 |     if (!rollout) {
 738 |       return apiError(requestId, 400, 'TENANT_SCOPE_MISMATCH', 'Store scope is not active');
 739 |     }
 740 |     return context.json(
 741 |       nativeShadowRolloutResponseSchema.parse({
 742 |         success: true,
 743 |         organization_id: rollout.organizationId,
 744 |         store_id: rollout.storeId,
 745 |         integration: rollout.integration,
 746 |         mode: rollout.mode,
 747 |         rollout_version: rollout.rolloutVersion,
 748 |         sample_rate_bps: rollout.sampleRateBps,
 749 |         sampling_key: rollout.samplingKey,
 750 |       }),
 751 |     );
 752 |   });
 753 |
 754 |   app.post('/v1/integration-comparisons/native-shadow', async (context) => {
 755 |     const requestId = context.get('requestId');
 756 |     const identity = context.get('identity');
 757 |     const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
 758 |     if (scopeError) return scopeError;
 759 |     if (!dependencies.shadowComparisons) {
 760 |       return apiError(
 761 |         requestId,
 762 |         503,
 763 |         'SHADOW_COMPARISON_UNAVAILABLE',
 764 |         'Native shadow comparison persistence is not configured',
 765 |       );
 766 |     }
 767 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 768 |     if (!idempotencyKey) {
 769 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 770 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 771 |     }
 772 |     const parsedBody = await parseJson(context.req.raw, nativeShadowComparisonInputSchema);
 773 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 774 |     const assessment = await observeApiDependency(
 775 |       metrics,
 776 |       {
 777 |         dependencyType: 'assessment_repository',
 778 |         operation: 'find_by_id',
 779 |         classify: (value) => (value === null ? 'empty' : 'success'),
 780 |         monotonicNow,
 781 |       },
 782 |       () =>
 783 |         dependencies.assessments.findById({
 784 |           organizationId: identity.organizationId,
 785 |           storeId: identity.storeId,
 786 |           assessmentId: parsedBody.value.assessment_id,
 787 |         }),
 788 |     );
 789 |     if (!assessment) {
 790 |       return apiError(
 791 |         requestId,
 792 |         400,
 793 |         'ASSESSMENT_NOT_FOUND',
 794 |         'Assessment not found for this store',
 795 |       );
 796 |     }
 797 |     if (assessment.request.external_order_id !== parsedBody.value.external_order_id) {
 798 |       return apiError(
 799 |         requestId,
 800 |         400,
 801 |         'ASSESSMENT_ORDER_MISMATCH',
 802 |         'Assessment does not belong to the supplied external order',
 803 |       );
 804 |     }
 805 |     try {
 806 |       const saved = await observeApiDependency(
 807 |         metrics,
 808 |         {
 809 |           dependencyType: 'native_shadow_comparison_repository',
 810 |           operation: 'save',
 811 |           classify: (value) => (value.replay ? 'replay' : 'success'),
 812 |           classifyError: classifyNativeShadowComparisonError,
 813 |           monotonicNow,
 814 |         },
 815 |         () =>
 816 |           dependencies.shadowComparisons!.save({
 817 |             organizationId: identity.organizationId,
 818 |             storeId: identity.storeId,
 819 |             apiKeyId: identity.apiKeyId,
 820 |             idempotencyKey,
 821 |             comparison: parsedBody.value,
 822 |             guardAssessment: assessment.response,
 823 |           }),
 824 |       );
 825 |       recordApiControlEvent(metrics, 'idempotency', saved.replay ? 'replay' : 'allowed');
 826 |       const response = nativeShadowComparisonResponseSchema.parse({
 827 |         success: true,
 828 |         comparison_id: saved.comparisonId,
 829 |         replay: saved.replay,
 830 |       });
 831 |       return context.json(response, saved.replay ? 200 : 201);
 832 |     } catch (error) {
 833 |       const code =
 834 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 835 |           ? error.code
 836 |           : 'SHADOW_COMPARISON_UNAVAILABLE';
 837 |       if (code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') {
 838 |         recordApiControlEvent(metrics, 'idempotency', 'conflict');
 839 |       }
 840 |       const status =
 841 |         code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT'
 842 |           ? 409
 843 |           : code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
 844 |               code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
 845 |               code === 'TENANT_SCOPE_MISMATCH'
 846 |             ? 400
 847 |             : 503;
 848 |       return apiError(
 849 |         requestId,
 850 |         status,
 851 |         code,
 852 |         status === 503
 853 |           ? 'Native shadow comparison could not be persisted'
 854 |           : 'Native shadow comparison was rejected',
 855 |       );
 856 |     }
 857 |   });
 858 |
 859 |   app.post('/v1/integration-attempts/native-shadow', async (context) => {
 860 |     const requestId = context.get('requestId');
 861 |     const identity = context.get('identity');
 862 |     const scopeError = requireScope(identity, 'comparisons:write', requestId, metrics);
 863 |     if (scopeError) return scopeError;
 864 |     if (!dependencies.nativeShadowAttempts) {
 865 |       return apiError(
 866 |         requestId,
 867 |         503,
 868 |         'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE',
 869 |         'Native shadow attempt persistence is not configured',
 870 |       );
 871 |     }
 872 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 873 |     if (!idempotencyKey) {
 874 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 875 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 876 |     }
 877 |     const parsedBody = await parseJson(context.req.raw, nativeShadowAttemptInputSchema);
 878 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 879 |     try {
 880 |       const saved = await observeApiDependency(
 881 |         metrics,
 882 |         {
 883 |           dependencyType: 'native_shadow_attempt_repository',
 884 |           operation: 'save',
 885 |           classify: (value) => (value.replay ? 'replay' : 'success'),
 886 |           classifyError: classifyNativeShadowAttemptError,
 887 |           monotonicNow,
 888 |         },
 889 |         () =>
 890 |           dependencies.nativeShadowAttempts!.save({
 891 |             organizationId: identity.organizationId,
 892 |             storeId: identity.storeId,
 893 |             apiKeyId: identity.apiKeyId,
 894 |             idempotencyKey,
 895 |             attempt: parsedBody.value,
 896 |           }),
 897 |       );
 898 |       recordApiControlEvent(metrics, 'idempotency', saved.replay ? 'replay' : 'allowed');
 899 |       return context.json(
 900 |         nativeShadowAttemptResponseSchema.parse({
 901 |           success: true,
 902 |           attempt_id: saved.attemptId,
 903 |           replay: saved.replay,
 904 |         }),
 905 |         saved.replay ? 200 : 201,
 906 |       );
 907 |     } catch (error) {
 908 |       const code =
 909 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 910 |           ? error.code
 911 |           : 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE';
 912 |       if (code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT') {
 913 |         recordApiControlEvent(metrics, 'idempotency', 'conflict');
 914 |       }
 915 |       const status =
 916 |         code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT'
 917 |           ? 409
 918 |           : code === 'NATIVE_SHADOW_ATTEMPT_UNAVAILABLE'
 919 |             ? 503
 920 |             : 400;
 921 |       return apiError(
 922 |         requestId,
 923 |         status,
 924 |         code,
 925 |         status === 503
 926 |           ? 'Native shadow attempt could not be persisted'
 927 |           : 'Native shadow attempt was rejected',
 928 |       );
 929 |     }
 930 |   });
 931 |
 932 |   app.post('/v1/courier-observations/refresh', async (context) => {
 933 |     const requestId = context.get('requestId');
 934 |     const identity = context.get('identity');
 935 |     const scopeError = requireScope(identity, 'courier:refresh', requestId, metrics);
 936 |     if (scopeError) return scopeError;
 937 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
 938 |     if (!idempotencyKey) {
 939 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
 940 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
 941 |     }
 942 |     const operationKey = operationIdempotencyKey(identity, 'courier-refresh', idempotencyKey);
 943 |     const existing = await observeApiDependency(
 944 |       metrics,
 945 |       {
 946 |         dependencyType: 'idempotency_store',
 947 |         operation: 'get',
 948 |         classify: (value) => (value === null ? 'empty' : 'replay'),
 949 |         monotonicNow,
 950 |       },
 951 |       () => dependencies.idempotency.get(operationKey),
 952 |     );
 953 |     if (existing) {
 954 |       recordApiControlEvent(metrics, 'idempotency', 'replay');
 955 |       return context.json(existing, 200);
 956 |     }
 957 |     recordApiControlEvent(metrics, 'idempotency', 'allowed');
 958 |     const parsedBody = await parseJson(context.req.raw, refreshSchema);
 959 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
 960 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
 961 |     if (!isValidBangladeshPhone(phone)) {
 962 |       return apiError(
 963 |         requestId,
 964 |         400,
 965 |         'INVALID_PHONE',
 966 |         'A valid Bangladesh mobile number is required',
 967 |       );
 968 |     }
 969 |     let queued: { jobId: string };
 970 |     try {
 971 |       queued = await observeDurableProducer(
 972 |         tracer,
 973 |         context.get('traceContext'),
 974 |         'courier_refresh',
 975 |         'courier_refresh',
 976 |         (traceContext) =>
 977 |           observeApiDependency(
 978 |             metrics,
 979 |             {
 980 |               dependencyType: 'courier_queue',
 981 |               operation: 'enqueue',
 982 |               monotonicNow,
 983 |             },
 984 |             () =>
 985 |               dependencies.refreshQueue.enqueue({
 986 |                 organizationId: identity.organizationId,
 987 |                 storeId: identity.storeId,
 988 |                 phone,
 989 |                 phoneHash: dependencies.hashPhone(phone),
 990 |                 providers: parsedBody.value.providers,
 991 |                 force: parsedBody.value.force,
 992 |                 traceContext,
 993 |               }),
 994 |           ),
 995 |       );
 996 |     } catch (error) {
 997 |       const code =
 998 |         error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
 999 |           ? error.code
1000 |           : 'COURIER_REFRESH_UNAVAILABLE';
1001 |       return apiError(
1002 |         requestId,
1003 |         code === 'COURIER_CONNECTION_REQUIRED' ? 409 : 503,
1004 |         code,
1005 |         error instanceof Error ? error.message : 'Courier refresh could not be queued',
1006 |       );
1007 |     }
1008 |     const response = { success: true as const, job_id: queued.jobId, status: 'queued' as const };
1009 |     await observeApiDependency(
1010 |       metrics,
1011 |       {
1012 |         dependencyType: 'idempotency_store',
1013 |         operation: 'set',
1014 |         monotonicNow,
1015 |       },
1016 |       () => dependencies.idempotency.set(operationKey, response),
1017 |     );
1018 |     return context.json(response, 202);
1019 |   });
1020 |
1021 |   app.post('/v1/verifications/otp/send', async (context) => {
1022 |     const requestId = context.get('requestId');
1023 |     const identity = context.get('identity');
1024 |     const scopeError = requireScope(identity, 'verification:write', requestId, metrics);
1025 |     if (scopeError) return scopeError;
1026 |     if (!dependencies.verificationRequests) {
1027 |       return apiError(
1028 |         requestId,
1029 |         503,
1030 |         'VERIFICATION_UNAVAILABLE',
1031 |         'OTP verification is not configured',
1032 |       );
1033 |     }
1034 |     const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
1035 |     if (!idempotencyKey) {
1036 |       recordApiControlEvent(metrics, 'idempotency', 'rejected');
1037 |       return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
1038 |     }
1039 |     const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
1040 |     const existing = await observeApiDependency(
1041 |       metrics,
1042 |       {
1043 |         dependencyType: 'idempotency_store',
1044 |         operation: 'get',
1045 |         classify: (value) => (value === null ? 'empty' : 'replay'),
1046 |         monotonicNow,
1047 |       },
1048 |       () => dependencies.idempotency.get(operationKey),
1049 |     );
1050 |     if (existing) {
1051 |       recordApiControlEvent(metrics, 'idempotency', 'replay');
1052 |       return context.json(existing, 200);
1053 |     }
1054 |     recordApiControlEvent(metrics, 'idempotency', 'allowed');
1055 |     const parsedBody = await parseJson(context.req.raw, otpSendSchema);
1056 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
1057 |     const phone = normalizeBangladeshPhone(parsedBody.value.phone);
1058 |     if (!isValidBangladeshPhone(phone)) {
1059 |       return apiError(
1060 |         requestId,
1061 |         400,
1062 |         'INVALID_PHONE',
1063 |         'A valid Bangladesh mobile number is required',
1064 |       );
1065 |     }
1066 |     try {
1067 |       const queued = await observeDurableProducer(
1068 |         tracer,
1069 |         context.get('traceContext'),
1070 |         'otp_delivery',
1071 |         'verification_delivery',
1072 |         (traceContext) =>
1073 |           observeApiDependency(
1074 |             metrics,
1075 |             {
1076 |               dependencyType: 'verification_queue',
1077 |               operation: 'enqueue',
1078 |               classify: (value) => (value.replay ? 'replay' : 'success'),
1079 |               monotonicNow,
1080 |             },
1081 |             () =>
1082 |               dependencies.verificationRequests!.enqueueSend({
1083 |                 organizationId: identity.organizationId,
1084 |                 storeId: identity.storeId,
1085 |                 ...(parsedBody.value.assessment_id === undefined
1086 |                   ? {}
1087 |                   : { assessmentId: parsedBody.value.assessment_id }),
1088 |                 phone,
1089 |                 phoneHash: dependencies.hashPhone(phone),
1090 |                 purpose: parsedBody.value.purpose,
1091 |                 idempotencyKey,
1092 |                 traceContext,
1093 |               }),
1094 |           ),
1095 |       );
1096 |       const response = {
1097 |         success: true as const,
1098 |         verification_id: queued.verificationId,
1099 |         expires_at: queued.expiresAt,
1100 |         status: 'queued' as const,
1101 |       };
1102 |       await observeApiDependency(
1103 |         metrics,
1104 |         {
1105 |           dependencyType: 'idempotency_store',
1106 |           operation: 'set',
1107 |           monotonicNow,
1108 |         },
1109 |         () => dependencies.idempotency.set(operationKey, response),
1110 |       );
1111 |       if (queued.replay) recordApiControlEvent(metrics, 'idempotency', 'replay');
1112 |       return context.json(response, queued.replay ? 200 : 202);
1113 |     } catch (error) {
1114 |       return verificationApiError(requestId, error);
1115 |     }
1116 |   });
1117 |
1118 |   app.post('/v1/verifications/otp/verify', async (context) => {
1119 |     const requestId = context.get('requestId');
1120 |     const identity = context.get('identity');
1121 |     const scopeError = requireScope(identity, 'verification:write', requestId, metrics);
1122 |     if (scopeError) return scopeError;
1123 |     if (!dependencies.otpVerifier) {
1124 |       return apiError(
1125 |         requestId,
1126 |         503,
1127 |         'VERIFICATION_UNAVAILABLE',
1128 |         'OTP verification is not configured',
1129 |       );
1130 |     }
1131 |     const parsedBody = await parseJson(context.req.raw, otpVerifySchema);
1132 |     if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
1133 |     try {
1134 |       await observeApiDependency(
1135 |         metrics,
1136 |         {
1137 |           dependencyType: 'otp_verifier',
1138 |           operation: 'verify',
1139 |           classifyError: (error) => (error instanceof VerificationError ? 'rejected' : 'error'),
1140 |           monotonicNow,
1141 |         },
1142 |         () =>
1143 |           dependencies.otpVerifier!.verify({
1144 |             organizationId: identity.organizationId,
1145 |             storeId: identity.storeId,
1146 |             verificationId: parsedBody.value.verification_id,
1147 |             otp: parsedBody.value.otp,
1148 |           }),
1149 |       );
1150 |       return context.json({ success: true as const, verified: true as const });
1151 |     } catch (error) {
1152 |       return verificationApiError(requestId, error);
1153 |     }
1154 |   });
1155 |
1156 |   app.notFound((context) => {
1157 |     const requestId = context.get('requestId') || idFactory('req');
1158 |     return apiError(requestId, 404, 'NOT_FOUND', 'Route not found');
1159 |   });
1160 |
1161 |   app.onError((error, context) => {
1162 |     const requestId = context.get('requestId') || idFactory('req');
1163 |     logger.error('api.request.unhandled_error', {
1164 |       request_id: requestId,
1165 |       method: context.req.method,
1166 |       route: telemetryRoute(context.req.path),
1167 |       code: 'UNHANDLED_ERROR',
1168 |       error,
1169 |     });
1170 |     return apiError(
1171 |       requestId,
1172 |       500,
1173 |       'INTERNAL_ERROR',
1174 |       error instanceof Error ? 'The request could not be completed' : 'Internal error',
1175 |     );
1176 |   });
1177 |
1178 |   return app;
1179 | }
1180 |
1181 | const STATIC_TELEMETRY_ROUTES = new Set([
1182 |   '/',
1183 |   '/health',
1184 |   '/auth/login',
1185 |   '/auth/session',
1186 |   '/auth/logout',
1187 |   '/dashboard/v1/overview',
1188 |   '/dashboard/v1/native-shadow-rollout',
1189 |   '/dashboard/v1/dead-letters',
1190 |   '/dashboard/v1/dead-letter-replays',
1191 |   '/admin/v1/overview',
1192 |   '/v1/risk-assessments',
1193 |   '/v1/order-outcomes',
1194 |   '/v1/integration-rollouts/native-shadow',
1195 |   '/v1/integration-comparisons/native-shadow',
1196 |   '/v1/integration-attempts/native-shadow',
1197 |   '/v1/courier-observations/refresh',
1198 |   '/v1/verifications/otp/send',
1199 |   '/v1/verifications/otp/verify',
1200 | ]);
1201 |
1202 | const API_METRIC_ROUTES = [
1203 |   ...STATIC_TELEMETRY_ROUTES,
1204 |   '/v1/risk-assessments/:assessment_id',
1205 |   'unmatched',
1206 | ];
1207 | const API_METRIC_ATTRIBUTES = {
1208 |   method: { values: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD', 'OTHER'] },
1209 |   route: { values: API_METRIC_ROUTES },
1210 |   status_class: { values: ['1xx', '2xx', '3xx', '4xx', '5xx', 'other'] },
1211 | } as const;
1212 | const API_REQUEST_SPAN = defineSpan({
1213 |   name: 'ozzyl.api.request',
1214 |   kind: 'server',
1215 |   attributes: {
1216 |     method: { ...API_METRIC_ATTRIBUTES.method, required: false },
1217 |     route: { ...API_METRIC_ATTRIBUTES.route, required: false },
1218 |     status_class: { ...API_METRIC_ATTRIBUTES.status_class, required: false },
1219 |   },
1220 | });
1221 | const API_DURABLE_PRODUCER_SPAN = defineSpan({
1222 |   name: 'ozzyl.api.durable.produce',
1223 |   kind: 'producer',
1224 |   attributes: {
1225 |     operation: {
1226 |       values: ['assessment_event', 'outcome_event', 'courier_refresh', 'otp_delivery'],
1227 |     },
1228 |     queue_type: {
1229 |       values: ['courier_refresh', 'webhook_delivery', 'verification_delivery'],
1230 |     },
1231 |     outcome: { values: ['completed', 'failed'], required: false },
1232 |   },
1233 | });
1234 | const API_REQUEST_COUNT = defineMetric({
1235 |   name: 'ozzyl.api.requests',
1236 |   kind: 'counter',
1237 |   unit: '{request}',
1238 |   attributes: API_METRIC_ATTRIBUTES,
1239 | });
1240 | const API_REQUEST_DURATION = defineMetric({
1241 |   name: 'ozzyl.api.request.duration',
1242 |   kind: 'histogram',
1243 |   unit: 'ms',
1244 |   attributes: API_METRIC_ATTRIBUTES,
1245 | });
1246 |
1247 | async function observeDurableProducer<T>(
1248 |   tracer: Tracer,
1249 |   parent: TraceContext,
1250 |   operation: 'assessment_event' | 'outcome_event' | 'courier_refresh' | 'otp_delivery',
1251 |   queueType: 'courier_refresh' | 'webhook_delivery' | 'verification_delivery',
1252 |   task: (traceContext: PersistedTraceContext) => Promise<T>,
1253 | ): Promise<T> {
1254 |   const span = tracer.startSpan(API_DURABLE_PRODUCER_SPAN, {
1255 |     parent,
1256 |     attributes: { operation, queue_type: queueType },
1257 |   });
1258 |   try {
1259 |     const result = await task(toPersistedTraceContext(span.context));
1260 |     span.end({ status: 'ok', attributes: { outcome: 'completed' } });
1261 |     return result;
1262 |   } catch (error) {
1263 |     span.end({ status: 'error', attributes: { outcome: 'failed' } });
1264 |     throw error;
1265 |   }
1266 | }
1267 |
1268 | function telemetryRoute(path: string): string {
1269 |   if (STATIC_TELEMETRY_ROUTES.has(path)) return path;
1270 |   if (/^\/v1\/risk-assessments\/[^/]+$/.test(path)) {
1271 |     return '/v1/risk-assessments/:assessment_id';
1272 |   }
1273 |   return 'unmatched';
1274 | }
1275 |
1276 | function telemetryMethod(method: string): string {
1277 |   const normalized = method.toUpperCase();
1278 |   return ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'].includes(normalized)
1279 |     ? normalized
1280 |     : 'OTHER';
1281 | }
1282 |
1283 | function telemetryStatusClass(status: number): string {
1284 |   const statusClass = Math.floor(status / 100);
1285 |   return statusClass >= 1 && statusClass <= 5 ? `${statusClass}xx` : 'other';
1286 | }
1287 |
1288 | function readRequestId(value: string | undefined): string | null {
1289 |   const requestId = value?.trim();
1290 |   if (!requestId || requestId.length > 100) return null;
1291 |   if (/^req_[A-Za-z0-9-]{1,80}$/.test(requestId)) return requestId;
1292 |   if (/^[a-f0-9]{16,32}$/i.test(requestId)) return requestId;
1293 |   if (
1294 |     /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(requestId)
1295 |   ) {
1296 |     return requestId;
1297 |   }
1298 |   return null;
1299 | }
1300 |
1301 | export class MemoryAssessmentRepository implements AssessmentRepository {
1302 |   private readonly byId = new Map<string, StoredAssessment>();
1303 |   private readonly byIdempotency = new Map<string, StoredAssessment>();
1304 |
1305 |   async findByIdempotency(input: {
1306 |     organizationId: string;
1307 |     storeId: string;
1308 |     idempotencyKey: string;
1309 |   }): Promise<StoredAssessment | null> {
1310 |     return (
1311 |       this.byIdempotency.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`) ??
1312 |       null
1313 |     );
1314 |   }
1315 |
1316 |   async findById(input: {
1317 |     organizationId: string;
1318 |     storeId: string;
1319 |     assessmentId: string;
1320 |   }): Promise<StoredAssessment | null> {
1321 |     const record = this.byId.get(input.assessmentId);
1322 |     if (
1323 |       !record ||
1324 |       record.identity.organizationId !== input.organizationId ||
1325 |       record.identity.storeId !== input.storeId
1326 |     ) {
1327 |       return null;
1328 |     }
1329 |     return record;
1330 |   }
1331 |
1332 |   async save(record: StoredAssessment): Promise<StoredAssessment> {
1333 |     const key = `${record.identity.organizationId}:${record.identity.storeId}:${record.idempotencyKey}`;
1334 |     const existing = this.byIdempotency.get(key);
1335 |     if (existing) return existing;
1336 |     this.byId.set(record.response.assessment_id, record);
1337 |     this.byIdempotency.set(key, record);
1338 |     return record;
1339 |   }
1340 | }
1341 |
1342 | export class MemoryOutcomeRepository implements OutcomeRepository {
1343 |   private readonly outcomes = new Map<string, string>();
1344 |
1345 |   async save(input: {
1346 |     organizationId: string;
1347 |     storeId: string;
1348 |     idempotencyKey: string;
1349 |     outcome: OrderOutcomeInput;
1350 |   }): Promise<{ outcomeId: string; replay: boolean }> {
1351 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
1352 |     const existing = this.outcomes.get(key);
1353 |     if (existing) return { outcomeId: existing, replay: true };
1354 |     const outcomeId = `out_${randomUUID()}`;
1355 |     this.outcomes.set(key, outcomeId);
1356 |     return { outcomeId, replay: false };
1357 |   }
1358 | }
1359 |
1360 | export class MemoryShadowComparisonRepository implements ShadowComparisonRepository {
1361 |   private readonly records = new Map<
1362 |     string,
1363 |     {
1364 |       comparisonId: string;
1365 |       comparison: NativeShadowComparisonInput;
1366 |       guardAssessment: RiskAssessmentResponse;
1367 |     }
1368 |   >();
1369 |
1370 |   async save(input: {
1371 |     organizationId: string;
1372 |     storeId: string;
1373 |     apiKeyId: string;
1374 |     idempotencyKey: string;
1375 |     comparison: NativeShadowComparisonInput;
1376 |     guardAssessment: RiskAssessmentResponse;
1377 |   }): Promise<{ comparisonId: string; replay: boolean }> {
1378 |     const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
1379 |     const existing = this.records.get(key);
1380 |     if (existing) {
1381 |       if (
1382 |         JSON.stringify(existing.comparison) !== JSON.stringify(input.comparison) ||
1383 |         existing.guardAssessment.assessment_id !== input.guardAssessment.assessment_id
1384 |       ) {
1385 |         const error = new Error('SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') as Error & {
1386 |           code: string;
1387 |         };
1388 |         error.code = 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT';
1389 |         throw error;
1390 |       }
1391 |       return { comparisonId: existing.comparisonId, replay: true };
1392 |     }
1393 |     const comparisonId = `cmp_${randomUUID()}`;
1394 |     this.records.set(key, {
1395 |       comparisonId,
1396 |       comparison: input.comparison,
1397 |       guardAssessment: input.guardAssessment,
1398 |     });
1399 |     return { comparisonId, replay: false };
1400 |   }
1401 |
1402 |   findByIdempotency(input: { organizationId: string; storeId: string; idempotencyKey: string }):
1403 |     | {
1404 |         comparisonId: string;
1405 |         comparison: NativeShadowComparisonInput;
1406 |         guardAssessment: RiskAssessmentResponse;
1407 |       }
1408 |     | undefined {
1409 |     return this.records.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`);
1410 |   }
1411 | }
1412 |
1413 | export class MemoryOperationIdempotencyStore implements OperationIdempotencyStore {
1414 |   private readonly values = new Map<string, unknown>();
1415 |   async get(key: string): Promise<unknown> {
1416 |     return this.values.get(key) ?? null;
1417 |   }
1418 |   async set(key: string, value: unknown): Promise<void> {
1419 |     this.values.set(key, value);
1420 |   }
1421 | }
1422 |
1423 | export class MemoryRateLimiter implements RateLimiter {
1424 |   private readonly windows = new Map<string, { count: number; expiresAt: number }>();
1425 |   async consume(key: string, limit: number, windowMs: number): Promise<boolean> {
1426 |     const currentTime = Date.now();
1427 |     const current = this.windows.get(key);
1428 |     if (!current || current.expiresAt <= currentTime) {
1429 |       this.windows.set(key, { count: 1, expiresAt: currentTime + windowMs });
1430 |       return true;
1431 |     }
1432 |     if (current.count >= limit) return false;
1433 |     current.count += 1;
1434 |     return true;
1435 |   }
1436 | }
1437 |
1438 | export class MemoryRefreshQueue implements CourierRefreshQueue {
1439 |   async enqueue(): Promise<{ jobId: string }> {
1440 |     return { jobId: `cjob_${randomUUID()}` };
1441 |   }
1442 | }
1443 |
1444 | export class MissingFeatureProvider implements AssessmentFeatureProvider {
1445 |   async load(): Promise<AssessmentFeatureSet> {
1446 |     return {
1447 |       courier: {
1448 |         totalOrders: 0,
1449 |         deliveredOrders: 0,
1450 |         returnedOrders: 0,
1451 |         cancelledBeforeShipping: 0,
1452 |         providerCount: 0,
1453 |         freshness: 'missing',
1454 |         sourceConfidence: 0,
1455 |       },
1456 |       merchant: {
1457 |         deliveredOrders: 0,
1458 |         returnedOrders: 0,
1459 |         recentCancelledOrders: 0,
1460 |         previousSuccessfulCustomer: false,
1461 |       },
1462 |       velocity: {
1463 |         phoneOrdersLastHour: 0,
1464 |         devicePhoneCountLastDay: 0,
1465 |         ipCustomerCountLastHour: 0,
1466 |       },
1467 |       verification: { otpVerified: false, otpFailures: 0, phoneUnreachable: false },
1468 |       network: {
1469 |         confirmedNegativeOutcomes: 0,
1470 |         independentReporters: 0,
1471 |         confirmedPositiveOutcomes: 0,
1472 |         activeDispute: false,
1473 |       },
1474 |     };
1475 |   }
1476 | }
1477 |
1478 | function structuredErrorCode(error: unknown): string | null {
1479 |   return error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
1480 |     ? error.code
1481 |     : null;
1482 | }
1483 |
1484 | function classifyNativeShadowComparisonError(error: unknown): 'rejected' | 'error' {
1485 |   const code = structuredErrorCode(error);
1486 |   return code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT' ||
1487 |     code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
1488 |     code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
1489 |     code === 'TENANT_SCOPE_MISMATCH'
1490 |     ? 'rejected'
1491 |     : 'error';
1492 | }
1493 |
1494 | function classifyNativeShadowAttemptError(error: unknown): 'rejected' | 'error' {
1495 |   const code = structuredErrorCode(error);
1496 |   return code === 'NATIVE_SHADOW_ATTEMPT_IDEMPOTENCY_CONFLICT' ||
1497 |     code === 'NATIVE_SHADOW_ATTEMPT_REFERENCE_MISMATCH'
1498 |     ? 'rejected'
1499 |     : 'error';
1500 | }
1501 |
1502 | function requireScope(
1503 |   identity: ApiKeyIdentity,
1504 |   scope: string,
1505 |   requestId: string,
1506 |   metrics?: MetricRecorder,
1507 | ): Response | null {
1508 |   if (identity.scopes.has('*') || identity.scopes.has(scope)) {
1509 |     recordApiControlEvent(metrics, 'authorization', 'allowed');
1510 |     return null;
1511 |   }
1512 |   recordApiControlEvent(metrics, 'authorization', 'rejected');
1513 |   return apiError(requestId, 403, 'INSUFFICIENT_SCOPE', `API key requires ${scope} scope`);
1514 | }
1515 |
1516 | function apiError(
1517 |   requestId: string,
1518 |   status: number,
1519 |   code: string,
1520 |   message: string,
1521 |   details?: Record<string, unknown>,
1522 | ): Response {
1523 |   return new Response(
1524 |     JSON.stringify({
1525 |       success: false,
1526 |       error: { code, message, ...(details === undefined ? {} : { details }) },
1527 |       request_id: requestId,
1528 |     }),
1529 |     {
1530 |       status,
1531 |       headers: { 'Content-Type': 'application/json', 'X-Request-ID': requestId },
1532 |     },
1533 |   );
1534 | }
1535 |
1536 | function verificationApiError(requestId: string, error: unknown): Response {
1537 |   if (error instanceof VerificationError) {
1538 |     const status =
1539 |       error.code === 'RATE_LIMITED'
1540 |         ? 429
1541 |         : error.code === 'NOT_FOUND'
1542 |           ? 404
1543 |           : error.code === 'DELIVERY_PENDING' || error.code === 'DELIVERY_FAILED'
1544 |             ? 409
1545 |             : 400;
1546 |     return apiError(requestId, status, error.code, error.message);
1547 |   }
1548 |   return apiError(
1549 |     requestId,
1550 |     503,
1551 |     'VERIFICATION_UNAVAILABLE',
1552 |     'Verification could not be completed',
1553 |   );
1554 | }
1555 |
1556 | async function parseJson<TOutput, TInput>(
1557 |   request: Request,
1558 |   schema: z.ZodType<TOutput, z.ZodTypeDef, TInput>,
1559 | ): Promise<{ success: true; value: TOutput } | { success: false; message: string }> {
1560 |   try {
1561 |     const raw: unknown = await request.json();
1562 |     const parsed = schema.safeParse(raw);
1563 |     if (!parsed.success) {
1564 |       return {
1565 |         success: false,
1566 |         message: parsed.error.issues
1567 |           .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
1568 |           .join('; '),
1569 |       };
1570 |     }
1571 |     return { success: true, value: parsed.data };
1572 |   } catch {
1573 |     return { success: false, message: 'Request body must be valid JSON' };
1574 |   }
1575 | }
1576 |
1577 | function readIdempotencyKey(value: string | undefined): string | null {
1578 |   const normalized = value?.trim();
1579 |   if (!normalized || normalized.length > 200) return null;
1580 |   return normalized;
1581 | }
1582 |
1583 | function operationIdempotencyKey(
1584 |   identity: ApiKeyIdentity,
1585 |   operation: string,
1586 |   idempotencyKey: string,
1587 | ): string {
1588 |   return `${identity.organizationId}:${identity.storeId}:${operation}:${idempotencyKey}`;
1589 | }
1590 |
1591 | function billingPeriod(date: Date): string {
1592 |   return date.toISOString().slice(0, 7);
1593 | }
1594 |
```

### apps/api/src/native-shadow.test.ts

Bytes: 14354
SHA-256: 96cf5c95d4ca25125b90fb49c1239fd6f6a854a0c9f512848be6ab5b1ce83fe9
Lines: 1-420 of 420

```typescript
  1 | import { createHmac } from 'node:crypto';
  2 | import { describe, expect, it } from 'vitest';
  3 | import { MemoryUsageLedger } from '@ozzyl/billing';
  4 | import { createMetricRecorder, type MetricPoint, type MetricRecorder } from '@ozzyl/observability';
  5 | import {
  6 |   createApiApp,
  7 |   MemoryAssessmentRepository,
  8 |   MemoryOperationIdempotencyStore,
  9 |   MemoryOutcomeRepository,
 10 |   MemoryRateLimiter,
 11 |   MemoryRefreshQueue,
 12 |   MemoryShadowComparisonRepository,
 13 |   MissingFeatureProvider,
 14 |   type ApiKeyIdentity,
 15 |   type AssessmentRepository,
 16 |   type NativeShadowAttemptRepository,
 17 |   type NativeShadowRolloutRepository,
 18 | } from './index.js';
 19 |
 20 | const keyOne = 'ozg_test_native_shadow_one';
 21 | const keyTwo = 'ozg_test_native_shadow_two';
 22 |
 23 | function createApp(input?: {
 24 |   key?: string;
 25 |   identity?: ApiKeyIdentity;
 26 |   assessments?: AssessmentRepository;
 27 |   comparisons?: MemoryShadowComparisonRepository;
 28 |   rollouts?: NativeShadowRolloutRepository;
 29 |   attempts?: NativeShadowAttemptRepository;
 30 |   metrics?: MetricRecorder;
 31 | }) {
 32 |   let counter = 0;
 33 |   let monotonicTime = 0;
 34 |   const acceptedKey = input?.key ?? keyOne;
 35 |   const identity =
 36 |     input?.identity ??
 37 |     ({
 38 |       apiKeyId: [REDACTED_SECRET],
 39 |       organizationId: 'org_native',
 40 |       storeId: 'store_native_one',
 41 |       environment: 'test',
 42 |       plan: 'free',
 43 |       scopes: new Set(['*']),
 44 |     } satisfies ApiKeyIdentity);
 45 |   return createApiApp({
 46 |     apiKeys: {
 47 |       async resolve(rawApiKey) {
 48 |         return rawApiKey === acceptedKey ? identity : null;
 49 |       },
 50 |     },
 51 |     usage: new MemoryUsageLedger(),
 52 |     features: new MissingFeatureProvider(),
 53 |     assessments: input?.assessments ?? new MemoryAssessmentRepository(),
 54 |     outcomes: new MemoryOutcomeRepository(),
 55 |     refreshQueue: new MemoryRefreshQueue(),
 56 |     shadowComparisons: input?.comparisons ?? new MemoryShadowComparisonRepository(),
 57 |     ...(input?.rollouts === undefined ? {} : { nativeShadowRollouts: input.rollouts }),
 58 |     ...(input?.attempts === undefined ? {} : { nativeShadowAttempts: input.attempts }),
 59 |     idempotency: new MemoryOperationIdempotencyStore(),
 60 |     rateLimiter: new MemoryRateLimiter(),
 61 |     hashPhone: (phone) => createHmac('sha256', 'n'.repeat(32)).update(phone).digest('hex'),
 62 |     idFactory: (prefix) => `${prefix}_${++counter}`,
 63 |     now: () => new Date('2026-07-18T08:00:00.000Z'),
 64 |     monotonicNow: () => ++monotonicTime,
 65 |     ...(input?.metrics === undefined ? {} : { metrics: input.metrics }),
 66 |   });
 67 | }
 68 |
 69 | async function createAssessment(app: ReturnType<typeof createApp>, orderId: string) {
 70 |   const response = await app.request('/v1/risk-assessments', {
 71 |     method: 'POST',
 72 |     headers: {
 73 |       Authorization: `Bearer ${keyOne}`,
 74 |       'Content-Type': 'application/json',
 75 |       'Idempotency-Key': `assessment-${orderId}`,
 76 |     },
 77 |     body: JSON.stringify({
 78 |       external_order_id: orderId,
 79 |       phone: '01712345678',
 80 |       order_total: 1200,
 81 |       payment_method: 'cod',
 82 |     }),
 83 |   });
 84 |   expect(response.status).toBe(201);
 85 |   return (await response.json()) as { assessment_id: string };
 86 | }
 87 |
 88 | describe('native shadow comparison API', () => {
 89 |   it('persists a scoped comparison idempotently without changing the legacy decision', async () => {
 90 |     const comparisons = new MemoryShadowComparisonRepository();
 91 |     const app = createApp({ comparisons });
 92 |     const assessment = await createAssessment(app, 'ORDER-100');
 93 |
 94 |     const request = {
 95 |       external_order_id: 'ORDER-100',
 96 |       assessment_id: assessment.assessment_id,
 97 |       legacy_score: 20,
 98 |       legacy_decision: 'ALLOW',
 99 |       rollout_version: 'pilot-v1',
100 |       sample_bucket: 140,
101 |       sample_rate_bps: 1000,
102 |       evaluated_at: '2026-07-18T08:00:00.000Z',
103 |     };
104 |     const headers = {
105 |       Authorization: `Bearer ${keyOne}`,
106 |       'Content-Type': 'application/json',
107 |       'Idempotency-Key': 'native-shadow-order-100',
108 |     };
109 |     const first = await app.request('/v1/integration-comparisons/native-shadow', {
110 |       method: 'POST',
111 |       headers,
112 |       body: JSON.stringify(request),
113 |     });
114 |     const second = await app.request('/v1/integration-comparisons/native-shadow', {
115 |       method: 'POST',
116 |       headers,
117 |       body: JSON.stringify(request),
118 |     });
119 |
120 |     expect(first.status).toBe(201);
121 |     expect(second.status).toBe(200);
122 |     const firstBody = (await first.json()) as { comparison_id: string };
123 |     await expect(second.json()).resolves.toMatchObject({
124 |       success: true,
125 |       comparison_id: firstBody.comparison_id,
126 |       replay: true,
127 |     });
128 |     expect(
129 |       comparisons.findByIdempotency({
130 |         organizationId: 'org_native',
131 |         storeId: 'store_native_one',
132 |         idempotencyKey: 'native-shadow-order-100',
133 |       })?.comparison.legacy_decision,
134 |     ).toBe('allow');
135 |   });
136 |
137 |   it('emits finite rollout, comparison, attempt, replay, and conflict metrics without business identifiers', async () => {
138 |     const metricPoints: MetricPoint[] = [];
139 |     const metrics = createMetricRecorder({
140 |       service: 'native-shadow-test',
141 |       environment: 'test',
142 |       clock: () => new Date('2026-07-18T08:00:00.000Z'),
143 |       write: (_line, point) => metricPoints.push(point),
144 |     });
145 |     const attempts = new Map<string, string>();
146 |     const app = createApp({
147 |       metrics,
148 |       rollouts: {
149 |         async load(input) {
150 |           return {
151 |             organizationId: input.organizationId,
152 |             storeId: input.storeId,
153 |             integration: 'multi-store-saas',
154 |             mode: 'shadow',
155 |             rolloutVersion: 'pilot-v1',
156 |             sampleRateBps: 1000,
157 |             samplingKey: 'bounded-sampling-category',
158 |           };
159 |         },
160 |       },
161 |       attempts: {
162 |         async save(input) {
163 |           const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
164 |           const existing = attempts.get(key);
165 |           if (existing) return { attemptId: existing, replay: true };
166 |           const attemptId = 'nat_metric_attempt';
167 |           attempts.set(key, attemptId);
168 |           return { attemptId, replay: false };
169 |         },
170 |       },
171 |     });
172 |
173 |     const rollout = await app.request('/v1/integration-rollouts/native-shadow', {
174 |       headers: { Authorization: `Bearer ${keyOne}` },
175 |     });
176 |     expect(rollout.status).toBe(200);
177 |
178 |     const assessment = await createAssessment(app, 'ORDER-METRIC');
179 |     const comparisonHeaders = {
180 |       Authorization: `Bearer ${keyOne}`,
181 |       'Content-Type': 'application/json',
182 |       'Idempotency-Key': 'native-shadow-metric-comparison',
183 |     };
184 |     const comparison = {
185 |       external_order_id: 'ORDER-METRIC',
186 |       assessment_id: assessment.assessment_id,
187 |       legacy_score: 20,
188 |       legacy_decision: 'allow',
189 |       rollout_version: 'pilot-v1',
190 |       sample_bucket: 140,
191 |       sample_rate_bps: 1000,
192 |       evaluated_at: '2026-07-18T08:00:00.000Z',
193 |     };
194 |     const comparisonFirst = await app.request('/v1/integration-comparisons/native-shadow', {
195 |       method: 'POST',
196 |       headers: comparisonHeaders,
197 |       body: JSON.stringify(comparison),
198 |     });
199 |     const comparisonReplay = await app.request('/v1/integration-comparisons/native-shadow', {
200 |       method: 'POST',
201 |       headers: comparisonHeaders,
202 |       body: JSON.stringify(comparison),
203 |     });
204 |     const comparisonConflict = await app.request('/v1/integration-comparisons/native-shadow', {
205 |       method: 'POST',
206 |       headers: comparisonHeaders,
207 |       body: JSON.stringify({ ...comparison, legacy_score: 21 }),
208 |     });
209 |     expect(comparisonFirst.status).toBe(201);
210 |     expect(comparisonReplay.status).toBe(200);
211 |     expect(comparisonConflict.status).toBe(409);
212 |
213 |     const attemptHeaders = {
214 |       Authorization: `Bearer ${keyOne}`,
215 |       'Content-Type': 'application/json',
216 |       'Idempotency-Key': 'native-shadow-metric-attempt',
217 |     };
218 |     const attempt = {
219 |       external_order_id: 'ORDER-METRIC',
220 |       rollout_version: 'pilot-v1',
221 |       sample_bucket: 140,
222 |       sample_rate_bps: 1000,
223 |       status: 'comparison_succeeded',
224 |       assessment_id: assessment.assessment_id,
225 |       comparison_id: 'cmp_metric',
226 |       evaluated_at: '2026-07-18T08:00:00.000Z',
227 |     };
228 |     const attemptFirst = await app.request('/v1/integration-attempts/native-shadow', {
229 |       method: 'POST',
230 |       headers: attemptHeaders,
231 |       body: JSON.stringify(attempt),
232 |     });
233 |     const attemptReplay = await app.request('/v1/integration-attempts/native-shadow', {
234 |       method: 'POST',
235 |       headers: attemptHeaders,
236 |       body: JSON.stringify(attempt),
237 |     });
238 |     expect(attemptFirst.status).toBe(201);
239 |     expect(attemptReplay.status).toBe(200);
240 |
241 |     expect(metricPoints).toEqual(
242 |       expect.arrayContaining([
243 |         expect.objectContaining({
244 |           name: 'ozzyl.api.dependency.operations',
245 |           attributes: {
246 |             dependency_type: 'native_shadow_rollout_repository',
247 |             operation: 'load',
248 |             outcome: 'success',
249 |           },
250 |         }),
251 |         expect.objectContaining({
252 |           name: 'ozzyl.api.dependency.operations',
253 |           attributes: {
254 |             dependency_type: 'native_shadow_comparison_repository',
255 |             operation: 'save',
256 |             outcome: 'success',
257 |           },
258 |         }),
259 |         expect.objectContaining({
260 |           name: 'ozzyl.api.dependency.operations',
261 |           attributes: {
262 |             dependency_type: 'native_shadow_comparison_repository',
263 |             operation: 'save',
264 |             outcome: 'replay',
265 |           },
266 |         }),
267 |         expect.objectContaining({
268 |           name: 'ozzyl.api.dependency.operations',
269 |           attributes: {
270 |             dependency_type: 'native_shadow_comparison_repository',
271 |             operation: 'save',
272 |             outcome: 'rejected',
273 |           },
274 |         }),
275 |         expect.objectContaining({
276 |           name: 'ozzyl.api.dependency.operations',
277 |           attributes: {
278 |             dependency_type: 'native_shadow_attempt_repository',
279 |             operation: 'save',
280 |             outcome: 'success',
281 |           },
282 |         }),
283 |         expect.objectContaining({
284 |           name: 'ozzyl.api.dependency.operations',
285 |           attributes: {
286 |             dependency_type: 'native_shadow_attempt_repository',
287 |             operation: 'save',
288 |             outcome: 'replay',
289 |           },
290 |         }),
291 |         expect.objectContaining({
292 |           name: 'ozzyl.api.control.events',
293 |           attributes: { control: 'idempotency', outcome: 'conflict' },
294 |         }),
295 |       ]),
296 |     );
297 |     const serialized = JSON.stringify(metricPoints);
298 |     expect(serialized).not.toContain('org_native');
299 |     expect(serialized).not.toContain('store_native_one');
300 |     expect(serialized).not.toContain('ORDER-METRIC');
301 |     expect(serialized).not.toContain(assessment.assessment_id);
302 |     expect(serialized).not.toContain('native-shadow-metric-comparison');
303 |     expect(serialized).not.toContain('native-shadow-metric-attempt');
304 |   });
305 |
306 |   it('rejects an assessment owned by another store', async () => {
307 |     const assessments = new MemoryAssessmentRepository();
308 |     const storeOne = createApp({ assessments });
309 |     const assessment = await createAssessment(storeOne, 'ORDER-OTHER');
310 |
311 |     const storeTwo = createApp({
312 |       key: keyTwo,
313 |       assessments,
314 |       identity: {
315 |         apiKeyId: [REDACTED_SECRET],
316 |         organizationId: 'org_native',
317 |         storeId: 'store_native_two',
318 |         environment: 'test',
319 |         plan: 'free',
320 |         scopes: new Set(['*']),
321 |       },
322 |     });
323 |     const response = await storeTwo.request('/v1/integration-comparisons/native-shadow', {
324 |       method: 'POST',
325 |       headers: {
326 |         Authorization: `Bearer ${keyTwo}`,
327 |         'Content-Type': 'application/json',
328 |         'Idempotency-Key': 'native-shadow-other',
329 |       },
330 |       body: JSON.stringify({
331 |         external_order_id: 'ORDER-OTHER',
332 |         assessment_id: assessment.assessment_id,
333 |         legacy_score: 10,
334 |         legacy_decision: 'allow',
335 |         rollout_version: 'pilot-v1',
336 |         sample_bucket: 10,
337 |         sample_rate_bps: 1000,
338 |         evaluated_at: '2026-07-18T08:00:00.000Z',
339 |       }),
340 |     });
341 |     expect(response.status).toBe(400);
342 |     await expect(response.json()).resolves.toMatchObject({
343 |       error: { code: 'ASSESSMENT_NOT_FOUND' },
344 |     });
345 |   });
346 |
347 |   it('classifies unknown native-shadow attempt persistence failures as errors', async () => {
348 |     const metricPoints: MetricPoint[] = [];
349 |     const app = createApp({
350 |       metrics: createMetricRecorder({
351 |         service: 'native-shadow-test',
352 |         environment: 'test',
353 |         write: (_line, point) => metricPoints.push(point),
354 |       }),
355 |       attempts: {
356 |         async save() {
357 |           throw new Error('database unavailable for sensitive order');
358 |         },
359 |       },
360 |     });
361 |
362 |     const response = await app.request('/v1/integration-attempts/native-shadow', {
363 |       method: 'POST',
364 |       headers: {
365 |         Authorization: `Bearer ${keyOne}`,
366 |         'Content-Type': 'application/json',
367 |         'Idempotency-Key': 'native-shadow-error-attempt',
368 |       },
369 |       body: JSON.stringify({
370 |         external_order_id: 'ORDER-ERROR',
371 |         rollout_version: 'pilot-v1',
372 |         sample_bucket: 1,
373 |         sample_rate_bps: 1000,
374 |         status: 'assessment_failed',
375 |         failure_code: 'GUARD_ASSESSMENT_FAILED',
376 |         evaluated_at: '2026-07-18T08:00:00.000Z',
377 |       }),
378 |     });
379 |
380 |     expect(response.status).toBe(503);
381 |     expect(metricPoints).toContainEqual(
382 |       expect.objectContaining({
383 |         name: 'ozzyl.api.dependency.operations',
384 |         attributes: {
385 |           dependency_type: 'native_shadow_attempt_repository',
386 |           operation: 'save',
387 |           outcome: 'error',
388 |         },
389 |       }),
390 |     );
391 |     const serialized = JSON.stringify(metricPoints);
392 |     expect(serialized).not.toContain('ORDER-ERROR');
393 |     expect(serialized).not.toContain('database unavailable');
394 |     expect(serialized).not.toContain('native-shadow-error-attempt');
395 |   });
396 |
397 |   it('requires the dedicated comparison write scope', async () => {
398 |     const app = createApp({
399 |       identity: {
400 |         apiKeyId: [REDACTED_SECRET],
401 |         organizationId: 'org_native',
402 |         storeId: 'store_native_one',
403 |         environment: 'test',
404 |         plan: 'free',
405 |         scopes: new Set(['risk:write']),
406 |       },
407 |     });
408 |     const response = await app.request('/v1/integration-comparisons/native-shadow', {
409 |       method: 'POST',
410 |       headers: {
411 |         Authorization: `Bearer ${keyOne}`,
412 |         'Content-Type': 'application/json',
413 |         'Idempotency-Key': 'native-shadow-scope',
414 |       },
415 |       body: JSON.stringify({}),
416 |     });
417 |     expect(response.status).toBe(403);
418 |   });
419 | });
420 |
```

### docs/operations/operations-observability.md

Bytes: 22183
SHA-256: b5004ed23f9f6ef0811f08435a36562688deb22f69a9397d3211f08c8e54efe4
Lines: 1-314 of 314

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
 20 | - `ozzyl.api.dependency.operations` and `ozzyl.api.dependency.operation.duration` — API-key resolution, rate limiting, usage reservation, feature loading, assessment/outcome persistence, idempotency storage, durable enqueue, OTP verification, and native-shadow rollout/comparison/attempt repositories by finite dependency/operation/outcome categories;
 21 | - `ozzyl.browser.control.events` — browser session authentication, relational authorization, CSRF, and rate-limit events using finite allowed/rejected/error categories;
 22 | - `ozzyl.browser.dependency.operations` and `ozzyl.browser.dependency.operation.duration` — browser auth, rate limiter, merchant dashboard, platform admin, rollout, dead-letter, and audit boundaries by finite dependency/operation/outcome categories;
 23 | - `ozzyl.risk.assessments` — one point per newly persisted assessment using bounded decision, risk level, score band, confidence band, degraded flag, and courier freshness;
 24 | - `ozzyl.risk.outcomes` — one point per newly persisted verified outcome using finite outcome and linked-assessment categories;
 25 | - `ozzyl.worker.operations` — counter by finite worker type, operation, and outcome;
 26 | - `ozzyl.worker.operation.duration` — histogram observation in milliseconds using the same worker attributes;
 27 | - `ozzyl.worker.claim.failures` — counter by finite durable-worker type only;
 28 | - `ozzyl.repository.operations` and `ozzyl.repository.operation.duration` — durable courier, webhook, and verification queue claim/start/renew/complete/retry/fail/snapshot operations by finite repository type, operation, and outcome;
 29 | - `ozzyl.provider.operations` and `ozzyl.provider.operation.duration` — courier API, courier browser-login, webhook HTTP, and verification-delivery calls by finite provider category, operation, and success/retryable/permanent outcome;
 30 | - `ozzyl.queue.depth` — gauge for queued, retry-scheduled, claimed, processing, and failed durable work by finite queue type and status;
 31 | - `ozzyl.queue.oldest_ready.age` — gauge in milliseconds for the oldest currently due courier, webhook, or verification item.
 32 |
 33 | Request IDs, user/session/organization/store/account/job/event/assessment/work identifiers, API-key or idempotency values, external order IDs, emails, phone numbers or hashes, OTP values, credentials, URLs, payloads, provider responses, vendor names, error messages, and arbitrary error codes are not metric attributes. Provider labels are broad finite categories rather than vendor/account/destination names. Browser relational authorization is allowed only after repository revalidation; known scope/validation/idempotency failures are rejected while unknown persistence failures are errors. Risk score and confidence are converted to fixed bands rather than emitted as raw values. Assessment/outcome and native-shadow persistence replays use finite replay outcomes without exporting keys or IDs. Queue snapshots contain only aggregate status counts and oldest-ready age. The default recorder writes JSON lines to the process telemetry stream; a reviewed OpenTelemetry exporter/collector adapter may replace that sink without changing call sites.
 34 |
 35 | ### API
 36 |
 37 | - Request rate
 38 | - Error rate
 39 | - p50/p95/p99 latency
 40 | - Rate-limit events
 41 | - Quota/entitlement failures
 42 | - Idempotency replays/conflicts
 43 | - Degraded assessments
 44 | - Authentication/session failures without sensitive values
 45 | - Transactional outbox rows created by event type
 46 | - Outbox enqueue failures and transaction rollbacks
 47 |
 48 | ### PostgreSQL
 49 |
 50 | - Availability and failover state
 51 | - Connection usage and pool wait
 52 | - Lock wait and deadlock rate
 53 | - Slow query rate
 54 | - Migration success/failure
 55 | - Backup and restore status, duration, age, and last successful drill
 56 | - Migration manifest/history checksum mismatch count
 57 | - Durable-job claim and lease-recovery rate
 58 | - `SKIP LOCKED` claim throughput
 59 | - Stale-lease recovery and exhausted-work terminalization
 60 |
 61 | ### Courier
 62 |
 63 | - Session refresh success rate
 64 | - Session age
 65 | - Provider response latency
 66 | - Provider error rate by structured code
 67 | - Observation freshness
 68 | - Queue lag
 69 | - Reconnect-required accounts
 70 | - Selector/login-state failures
 71 |
 72 | ### Verification
 73 |
 74 | - OTP queued/sent/delivered/failed
 75 | - Verification success rate
 76 | - Provider latency and timeout rate
 77 | - Claim throughput by verification-worker replica
 78 | - Fresh/recovered/lost lease counts
 79 | - Retry rate and attempts distribution
 80 | - Payload decryption/validation and scope-mismatch failures
 81 | - Resend rate and abuse blocks
 82 | - Queue lag, oldest due job, exhausted `LEASE_EXPIRED`, and dead-letter count
 83 |
 84 | The durable runner is implemented, but production delivery remains disabled until a reviewed provider adapter/account is selected, bundled, configured, and validated in staging.
 85 |
 86 | ### Webhooks and events
 87 |
 88 | - Outbox backlog and oldest-event age
 89 | - Due versus future retry count
 90 | - Claim throughput by event-worker replica
 91 | - Fresh, recovered, and lost lease counts
 92 | - Delivery success/failure
 93 | - Retry rate and attempts distribution
 94 | - Destination response class
 95 | - DNS resolution failure count
 96 | - Unsafe-destination rejection count
 97 | - Endpoint inactive/decryption/scope-mismatch failures
 98 | - Exhausted `LEASE_EXPIRED` count
 99 | - End-to-end duration from `occurred_at` to `completed_at`
100 | - Delivery latency by event type
101 |
102 | ### Risk quality
103 |
104 | - Decision distribution
105 | - Outcome by score band
106 | - False-positive rate
107 | - False-negative rate
108 | - Confidence distribution
109 | - Unknown/degraded distribution
110 | - Savings estimate accuracy
111 |
112 | ### Native shadow pilot
113 |
114 | - Explicitly opted-in stores
115 | - Sampled orders
116 | - Successful comparisons
117 | - Guard assessment failures and timeouts
118 | - Comparison and sampled-attempt persistence failures
119 | - Decision disagreement rate
120 | - Bounded score-delta minimum, maximum, average, and lower/equal/higher counts
121 | - Rollout reads, updates, idempotent replays, conflicts, and tenant-scope rejections
122 |
123 | Merchant views must query only the authorized organization/store and a bounded
124 | window. Platform administration may aggregate across active stores but must not
125 | expose customer identifiers, external order IDs, raw request payloads, API keys,
126 | provider credentials, cookies, OTPs, or signing secrets. Reporting failure must
127 | not affect source checkout or the effective legacy decision.
128 |
129 | ## Logging
130 |
131 | `@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The API server and the courier-session, courier-sync, event, and verification runners use it for lifecycle and error records. Every record receives a timestamp, level, service, environment, and event name before export.
132 |
133 | The helper recursively redacts sensitive field names before serialization. Passwords, secrets, tokens, API keys, cookies, OTPs, raw phone values, credentials, provider responses, DNS answers, payloads, request/response bodies, and URLs are replaced rather than emitted. `phone_hash` is permitted as a non-reversible correlation reference. Error values expose only a bounded name and structured code; messages and stacks are omitted. Circular objects, binary values, big integers, excessive depth, oversized strings, and large collections are converted to bounded safe representations.
134 |
135 | Serialization or log/metric/span-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. API request logs use only accepted/generated opaque request IDs, an allowlisted route or bounded route template, HTTP method, status/status class, and duration. API metrics use normalized request categories, finite control/dependency outcomes, and bounded risk-quality bands without request or business identifiers. Durable repository operations, provider calls, and aggregate queue depth/oldest-ready-age are instrumented with finite categories only. Traces use descriptor-owned finite attributes and carry opaque W3C context separately from logs and metrics. Raw URLs, query strings, dynamic assessment identifiers, tenant/job/account identifiers, provider/vendor names, arbitrary error codes, payloads, and contact data are not metric or span attributes. Remaining browser/admin/integration metrics, OpenTelemetry exporter/collector topology, sampling, dashboards, alerts, managed retention, and the managed backend remain production follow-up work.
136 |
137 | Use structured logs with:
138 |
139 | - request id
140 | - organization/store id or safe internal reference
141 | - assessment/job/event/delivery id
142 | - provider or destination category where safe
143 | - worker id
144 | - error code
145 | - attempt number
146 | - duration
147 | - engine/policy version when relevant
148 | - deployment environment and service name
149 |
150 | Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, webhook signing secrets, destination URL credentials, and unrestricted request/event bodies are prohibited.
151 |
152 | The API emits startup/shutdown, request-completion, and unhandled-error records, and all four private workers emit startup and structured error records through the shared redaction boundary. The API records request count/duration, control outcomes, critical dependency count/duration, bounded assessment quality, and verified outcomes; private workers record operation count/duration; durable courier/event/verification queue repositories record transition count/duration and periodic aggregate depth/oldest-ready-age; courier API/browser, webhook HTTP, and OTP delivery boundaries record provider count/duration; durable claim failures remain separately counted. API requests emit server spans, durable queue creation emits producer children, private workers continue persisted context as consumer spans, and provider calls emit client children. Production instrumentation must still add external integration-adapter/client measurements plus a reviewed exporter/collector and sampling policy without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, business identifiers, provider credentials, URLs, arbitrary error codes, or DNS answer details that disclose internal topology.
153 |
154 | Recommended event-worker error codes include:
155 |
156 | - `UNSAFE_WEBHOOK_DESTINATION`
157 | - `WEBHOOK_DNS_RESOLUTION_FAILED`
158 | - `WEBHOOK_SECRET_DECRYPTION_FAILED`
159 | - `INVALID_EVENT_PAYLOAD`
160 | - `WEBHOOK_SCOPE_MISMATCH`
161 | - `WEBHOOK_DELIVERY_LEASE_LOST`
162 | - `ENDPOINT_INACTIVE`
163 | - `TIMEOUT`
164 | - `NETWORK_ERROR`
165 | - `RATE_LIMITED`
166 | - `LEASE_EXPIRED`
167 |
168 | ## Tracing
169 |
170 | `@ozzyl/observability` implements an exporter-neutral W3C trace boundary. It accepts only version-00 `traceparent` values with non-zero trace and span identifiers. Optional `tracestate` is syntactically bounded to 512 characters and 32 unique members. Malformed caller or persisted context is ignored and the component starts a fresh root trace; trace input is never an authorization or tenant identity.
171 |
172 | Implemented topology:
173 |
174 | - every API request creates an `ozzyl.api.request` server span and returns its `traceparent`;
175 | - assessment/outcome webhook creation, courier refresh, and OTP delivery enqueue create `ozzyl.api.durable.produce` producer children;
176 | - producer context is stored only in nullable `trace_parent`/`trace_state` columns on `courier_jobs`, `webhook_deliveries`, and `verification_jobs`;
177 | - courier-sync, event, and verification workers continue valid persisted context as `ozzyl.worker.operation` consumer spans;
178 | - courier API, webhook HTTP, and OTP delivery calls create `ozzyl.provider.operation` client children;
179 | - courier-session refresh starts a root worker span with a browser-login provider child;
180 | - verification failure event creation persists the active worker context into the new webhook delivery.
181 |
182 | Span attributes are finite categories only: normalized method, canonical route/template, status class, durable operation/queue type/outcome, worker type/operation/outcome, and broad provider type/operation/outcome. Request, organization, store, account, job, event, delivery, assessment, API-key, endpoint, phone/hash, OTP, credential, URL, payload/body, provider-response, vendor-name, and arbitrary error-code attributes are prohibited. `tracestate` is propagated but not emitted inside span JSON. Trace context is not copied into archive evidence and legacy null-context work remains processable.
183 |
184 | The current tracer emits one local JSON line per completed span and performs no network I/O. ID generation, validation, clock, serialization, or sink failure is swallowed and cannot break scoring, persistence, queue transitions, provider execution, or synchronous checkout. Exporter/collector wiring, sampling policy, managed retention, dashboards, and alerts remain production work.
185 |
186 | ## Alerts
187 |
188 | - Provider session refresh failure spike
189 | - API p95 latency or error-rate breach
190 | - Assessment error/degraded spike
191 | - PostgreSQL unavailable, connection saturation, or lock-wait spike
192 | - Database migration, manifest/history integrity, backup, or restore failure
193 | - Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
194 | - Event-worker claim rate drops to zero while due backlog grows
195 | - Webhook delivery failure or retry spike
196 | - Webhook secret-decryption or scope-mismatch failure
197 | - Unsafe webhook destination spike
198 | - DNS resolution failure spike
199 | - OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
200 | - Usage counter/entitlement drift
201 | - Reconnect-required account spike
202 | - Secret scanning or redaction regression
203 | - KMS/vault access or decrypt failure spike
204 |
205 | ## Runbooks
206 |
207 | Create and exercise runbooks for:
208 |
209 | - Steadfast login/selector break
210 | - Expired, disabled, or rotated encryption key
211 | - KMS/vault outage
212 | - OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
213 | - Courier provider outage
214 | - Database logical restore, managed point-in-time restore, and failover
215 | - API key compromise
216 | - Courier credential/session compromise
217 | - Webhook signing-secret compromise and endpoint rotation
218 | - Queue/outbox backlog, lease recovery, and dead-letter replay
219 | - Webhook destination failure or repeated HTTP rejection
220 | - DNS resolution/egress-policy failure
221 | - Invalid event payload or scope mismatch
222 | - Incorrect risk policy rollback
223 | - Telemetry backend outage
224 | - Reputation dispute escalation when that subsystem exists
225 |
226 | A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.
227 |
228 | A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.
229 |
230 | ## Health model
231 |
232 | Expose separate health/readiness states for:
233 |
234 | - API process
235 | - database
236 | - durable job/outbox store
237 | - optional distributed cache
238 | - event/webhook worker process
239 | - webhook backlog and oldest-event age
240 | - event-worker signing-secret decryption capability
241 | - courier provider adapters
242 | - session workers
243 | - verification providers and future verification runner
244 | - KMS/vault access
245 | - telemetry export
246 |
247 | A webhook endpoint outage, provider outage, or telemetry outage must not necessarily take the API process out of service. Readiness and operations views must still expose degraded dependencies. Unknown or degraded dependencies must never be treated as safe approval signals.
248 |
249 | ## Event-worker operational contract
250 |
251 | - `EVENT_WORKER_ID` should be stable and unique per replica in production.
252 | - Courier, event, and verification poll, lease, lease-renewal, max-attempt, and provider-timeout values must be positive integers.
253 | - Every lease-renewal interval must be no greater than half its lease; event and verification leases must also exceed their provider timeout by more than five seconds.
254 | - Alert on heartbeat renewal failure because active provider I/O is aborted and the job remains available only through stale-lease recovery or reviewed replay.
255 | - PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
256 | - Only the current unexpired owner may complete, retry, or fail a claimed delivery.
257 | - A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
258 | - Exhausted stale work fails closed with `LEASE_EXPIRED`.
259 | - Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.
260 |
261 | ## Data operations
262 |
263 | - Automated encrypted backups
264 | - Point-in-time recovery
265 | - Restore testing on a schedule
266 | - Migration preflight and post-deploy verification
267 | - Preview-first bounded terminal durable-work archival through the maintenance-only PostgreSQL boundary
268 | - Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
269 | - Audit trail for privileged data and credential access
270 | - KMS key rotation and ciphertext re-encryption procedures
271 | - Webhook signing-secret rotation/re-encryption procedure
272 | - Telemetry retention and access review
273 | - Production-data redaction before lower-environment use
274 |
275 | ## Release operations
276 |
277 | - Feature flags for new engine/policy versions and native multi-store migration
278 | - Canary/pilot merchants before broad rollout
279 | - Compare decision distributions before policy promotion
280 | - Rollback path for API, worker, migration, and policy changes
281 | - Do not edit migration 0008 after application; use a new migration for schema changes
282 | - Keep event-worker deployment independently scalable and rollbackable from the API
283 | - Exercise outbox backlog and retry behavior before each pilot expansion
284 | - No automatic blocking policy promotion without reviewed outcome data
285 | - Validate dashboards and alerts before each pilot expansion
286 |
287 | ## Provider selection still pending
288 |
289 | An OpenTelemetry exporter/collector implementation, sampling policy, managed observability backend, telemetry retention policy, alert-delivery channel, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Remaining external integration-adapter/client metrics, dashboards, and alerts remain unimplemented. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
290 |
291 | ## Browser dead-letter operations surface
292 |
293 | The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.
294 |
295 | The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.
296 |
297 | ## Durable work retention operations
298 |
299 | Terminal courier, webhook, and verification rows may be archived only through the maintenance-only repository and CLI documented in [Durable Work Retention Runbook](durable-work-retention-runbook.md). The application runtime role cannot read or write `durable_work_archives` and cannot delete source queue rows.
300 |
301 | Every run must preview first, use a cutoff at least 24 hours old, select only `completed`/`failed`, and process no more than 500 rows. Production baseline guidance is 30 days for completed work and 180 days for failed work until support, incident, privacy, and legal owners approve another policy. Archive evidence is secret-free and does not replace backup/PITR because source payloads cannot be reconstructed after commit.
302 |
303 | Monitor and record:
304 |
305 | - candidate and archived counts by work type and terminal status;
306 | - oldest eligible terminal timestamp;
307 | - skipped locked or state-changed rows;
308 | - archive evidence conflicts and maintenance privilege failures;
309 | - duration and rows per batch;
310 | - source queue size before and after maintenance;
311 | - archive table growth and approved evidence-retention window.
312 |
313 | No unattended retention scheduler is implemented. Automatic scheduling remains blocked on approved retention windows, incident/legal holds, maintenance identity provisioning, monitoring, backup/PITR recovery, and archive-evidence retention.
314 |
```

### docs/roadmap/risk-register.md

Bytes: 10598
SHA-256: cdb83e6fa18e957a74ea5a0d432849b807a841f664cd865dd943536be2dff96e
Lines: 1-35 of 35

```markdown
 1 | # Risk Register
 2 |
 3 | Updated: 2026-07-28
 4 |
 5 | | ID    | Risk                                                                                  | Severity | Current mitigation                                                                                                                                                                                                                                           | Owner/status                     |
 6 | | ----- | ------------------------------------------------------------------------------------- | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
 7 | | R-001 | Steadfast login selectors/internal endpoint change without notice                     |     High | Adapter/session boundary, fixtures, structured errors, selector monitoring, reconnect flow, degraded cache behavior                                                                                                                                          | Phase 2 / open                   |
 8 | | R-002 | Merchant courier credentials or sessions leak through logs/storage/CI                 | Critical | Envelope encryption, separate session encryption, redaction, no shell args, least privilege, audit reads                                                                                                                                                     | Foundation + Phase 2 / open      |
 9 | | R-003 | Raw API keys stored or used as dashboard sessions                                     | Critical | One-time reveal, hash-only storage, dedicated user sessions, prohibited by AGENTS/security docs                                                                                                                                                              | Phase 1 / open                   |
10 | | R-004 | Weak password hashing copied from source SaaS                                         | Critical | Argon2id or managed auth only; source implementation prohibited                                                                                                                                                                                              | Phase 1 / open                   |
11 | | R-005 | Cross-tenant data access or cache/job leakage                                         | Critical | Mandatory scope parameters, composite constraints/indexes, isolation tests, no system store shortcut                                                                                                                                                         | Phase 1 onward / open            |
12 | | R-006 | Concurrent requests bypass quotas or create duplicate assessments                     |     High | Atomic entitlement reservation, usage events, idempotency transaction, concurrency tests                                                                                                                                                                     | Phase 1/4 / open                 |
13 | | R-007 | Unknown/provider failure interpreted as safe or fraudulent                            |     High | Explicit unknown/degraded state, separate confidence, verification recommendation, no auto-block on provider failure                                                                                                                                         | Phase 3/4 / designed             |
14 | | R-008 | Duplicate risk engines diverge between API, WooCommerce, and multi-store SaaS         |     High | One pure package, dependency rules, shared types, native service client, remove embedded engine after shadow rollout                                                                                                                                         | Phase 3/4 / open                 |
15 | | R-009 | WooCommerce contract mismatch causes incorrect order action                           |     High | Rewrite plugin for lowercase enums, `signals[].code`, explicit success/degraded handling, contract tests                                                                                                                                                     | Phase 4 / open                   |
16 | | R-010 | Unofficial third-party fraud service becomes hidden single point of truth             |     High | Optional fallback adapter only; source/freshness/confidence exposed; no engine import                                                                                                                                                                        | Phase 2/3 / designed             |
17 | | R-011 | False positives harm legitimate customers/merchants                                   | Critical | Confidence, explainability, merchant policies, OTP/review, pilot confusion matrix, no broad auto-block before calibration                                                                                                                                    | Pilot / open                     |
18 | | R-012 | Cross-merchant reputation creates privacy, abuse, or dispute harm                     | Critical | Post-MVP only, evidence lineage, independent corroboration, decay, disputes, legal/privacy review                                                                                                                                                            | Later / deferred                 |
19 | | R-013 | Deployment selected before browser-worker/database/queue requirements are known       |   Medium | Deployment ADR pending; keep components separable and infrastructure-agnostic                                                                                                                                                                                | Phase 1 / open                   |
20 | | R-014 | Migration/schema mismatch or applied migration edits                                  |     High | Canonical database package, append-only migrations, clean/upgrade verification, CI checks                                                                                                                                                                    | Phase 1 onward / open            |
21 | | R-015 | Scraper runs synchronously and delays checkout                                        |     High | Session/sync workers, cache-first assessment, bounded latency, async refresh                                                                                                                                                                                 | Phase 2/4 / designed             |
22 | | R-016 | Scheduled scraper failures silently succeed                                           |     High | Remove `continue-on-error`, structured job records, alerts, dead-letter handling, failure exit status                                                                                                                                                        | Phase 2 / open                   |
23 | | R-017 | Encryption key rotation makes credentials unavailable                                 |     High | Versioned envelope encryption, rotation/runbook, staged re-encryption, restore tests                                                                                                                                                                         | Phase 1/2 / open                 |
24 | | R-018 | Outcome feedback is omitted, preventing calibration                                   |     High | Outcome endpoint/plugin/native integration included in MVP acceptance criteria                                                                                                                                                                               | Phase 4 / open                   |
25 | | R-019 | Provider terms/authorization do not permit commercial internal-endpoint use           |     High | Merchant authorization record, terms/legal review before commercial scale, replaceable adapter boundary                                                                                                                                                      | Phase 2 / blocking for scale     |
26 | | R-020 | Empty repository causes documentation to be mistaken for implemented functionality    |   Medium | Implementation status explicitly separates planned/in-progress/implemented and must be updated each milestone                                                                                                                                                | Phase 0 / mitigated              |
27 | | R-021 | Durable payloads are retained indefinitely or archived before support/incident review |     High | Terminal-only preview, age floor, bounded archive-before-delete transaction, secret-free evidence, preserved replay/audit, no scheduler                                                                                                                      | Operations / open                |
28 | | R-022 | Retention maintenance privileges leak into API or worker runtime identities           | Critical | Archive table explicitly denied to runtime, no runtime DELETE, separate reviewed maintenance identity, privilege preflight                                                                                                                                   | Operations / blocking            |
29 | | R-023 | Telemetry labels leak identifiers/secrets or create uncontrolled cardinality/cost     |     High | Descriptor-owned finite API/browser controls and dependencies, relational reauthorization, bounded risk bands, replay/conflict categories, prohibited user/session/tenant/order/work/contact/URL/payload/error-detail keys, canonical routes, sink isolation | Operations / partially mitigated |
30 | | R-024 | Untrusted trace context is spoofed, malformed, or used to carry sensitive baggage     |     High | Strict version-00/non-zero parsing, bounded no-baggage tracestate, finite span attributes, DB checks, invalid-context root fallback                                                                                                                          | Operations / partially mitigated |
31 |
32 | ## Review cadence
33 |
34 | Review this register at every milestone completion and before production/pilot changes. Add evidence, owner, target date, and residual risk as implementation begins.
35 |
```

### docs/security/security-privacy.md

Bytes: 14447
SHA-256: 020c875513f704b7370e9b9efcdd43ee0c570aed45341c86e4391aebf24cac30
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
 51 | Metrics use a stricter boundary than structured logs. Every attribute must be declared through a finite categorical allowlist. Request, user, session, organization, store, account, worker, job, event, assessment, work-item, API-key, idempotency, external-order, email, endpoint, phone/hash, URL, payload/body, token, and secret-style attribute names are rejected. API request metrics expose only normalized method, canonical route/template, and status class. API and browser controls expose finite authentication/authorization/CSRF/rate-limit/quota/idempotency outcomes; API and browser dependencies expose only finite component, operation, and outcome. Browser authorization is recorded as allowed only after repository-level relational revalidation. Native-shadow known validation/scope/idempotency failures are rejected while unknown persistence failures are errors; neither branch exports codes or messages. Risk metrics convert score/confidence to fixed bands and record only newly persisted assessments/outcomes so replays do not inflate quality data. Worker and durable-repository metrics expose finite component, operation, and outcome categories; provider metrics use broad provider categories rather than vendor/account/destination names; queue gauges expose aggregate status counts and oldest-ready age only. Arbitrary provider/error values are not labels. Metric validation, clock, serialization, snapshot, or sink failure is isolated from API, browser, and worker execution.
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

Bytes: 19336
SHA-256: 969029731558d6e0712a6e2757a59c7198435d3a03ef5db323cd7523f2ba3b89
Lines: 1-311 of 311

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
 22 | - Metric descriptor/name/unit validation, finite categorical attribute allowlists, high-cardinality/secret-like key rejection, value/sign validation, JSON point serialization, API/browser control and dependency plus risk/outcome/worker/repository/provider/queue helper output, and metric-sink failure isolation
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
 72 | - Browser login/session, rate-limit, CSRF, relational authorization, dashboard/admin/rollout/dead-letter/audit dependency metrics omit user/session/tenant/store/work/email values and preserve responses when the metric sink fails
 73 | - Native-shadow rollout/comparison/attempt metrics cover success, replay, conflict, known rejection, and unknown persistence error without order, assessment, tenant, idempotency, or error-detail values
 74 | - API server-span continuation, response traceparent, bounded tracestate propagation, durable producer child context, and absence of tenant/phone/job values from span output
 75 | - Courier-session, courier-sync, event, and verification operation plus provider-call metrics with bounded category/operation/outcome labels and no job, account, event, endpoint, phone, OTP, credential, URL, payload, vendor, error-text, or provider-response values
 76 | - Courier-session root/provider lineage and courier, webhook, and verification producer→consumer→provider trace lineage without business identifiers or sensitive values
 77 | - Durable courier, webhook, and verification repository operation timing plus PostgreSQL aggregate queue-depth/oldest-ready-age snapshots without row or tenant identifiers
 78 | - Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting
 79 |
 80 | ### PostgreSQL concurrency and idempotency coverage
 81 |
 82 | The CI PostgreSQL service runs real-database integration tests for:
 83 |
 84 | - duplicate usage reservations serializing through the organization/period advisory lock;
 85 | - replaying one persisted usage charge for concurrent duplicate request IDs;
 86 | - concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
 87 | - concurrent assessment saves returning the single persisted scoped winner;
 88 | - preventing losing assessment IDs from writing orphan or invalid signal rows;
 89 | - concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
 90 | - operation idempotency values remaining isolated by organization and store;
 91 | - assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
 92 | - outbox rows excluding raw phone values and unrelated tenant endpoints;
 93 | - browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
 94 | - competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
 95 | - preventing another courier worker from stealing a fresh lease;
 96 | - reclaiming expired courier jobs and rejecting the previous owner;
 97 | - clearing courier ownership when retryable work is returned to the queue with backoff;
 98 | - moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
 99 | - deriving courier organization/store/provider scope from account relationships rather than payload fields;
100 | - competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
101 | - preventing another event worker from stealing a fresh webhook lease;
102 | - rejecting an expired event-worker owner before completion or failure;
103 | - reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
104 | - clearing webhook ownership when a retry is scheduled;
105 | - moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
106 | - failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
107 | - serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
108 | - verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
109 | - competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
110 | - protecting fresh verification leases and rejecting expired owners;
111 | - reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
112 | - failing both the verification job and authoritative session on persisted scope mismatch;
113 | - rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
114 | - isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
115 | - listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
116 | - listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
117 | - allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
118 | - serializing concurrent duplicate native-shadow comparison writes into one immutable row;
119 | - deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
120 | - rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
121 |
122 | ### Native shadow rollout safety coverage
123 |
124 | Default tests prove:
125 |
126 | - `off` mode performs no Guard assessment or comparison API call;
127 | - deterministic sampling keeps retries for the same store/order in the same cohort;
128 | - the legacy score and decision remain the effective result even when Guard recommends block;
129 | - Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
130 | - the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
131 | - the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
132 | - default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
133 | - CSRF-protected browser mutation permits only active owner/admin store scope;
134 | - timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
135 | - PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
136 | - merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
137 | - comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.
138 |
139 | Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.
140 |
141 | ### Webhook destination security coverage
142 |
143 | Default tests use injected DNS and fetch boundaries. They prove:
144 |
145 | - non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
146 | - a hostname resolving to any non-public address is rejected before `fetch`;
147 | - DNS resolution failure is classified as retryable without making a network request;
148 | - redirects are disabled;
149 | - successful deliveries use the expected HMAC signature and canonical payload;
150 | - envelope ciphertext cannot be decrypted under another endpoint or session context.
151 |
152 | Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.
153 |
154 | ### Verification payload security coverage
155 |
156 | Default tests prove:
157 |
158 | - job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
159 | - tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
160 | - provider rejection is terminal while structured retryable provider errors use bounded backoff;
161 | - reporter state and logs do not receive plaintext OTP values;
162 | - provider I/O is not invoked after payload, scope, expiry, or lease failure.
163 |
164 | ### Managed envelope security coverage
165 |
166 | Default tests prove:
167 |
168 | - managed v2 creates a random 32-byte data key per record and zeroes it after use;
169 | - plaintext values and plaintext data keys are not serialized into the envelope;
170 | - context mismatch is rejected before provider unwrap;
171 | - wrapped-key metadata is authenticated and tampering fails closed;
172 | - provider outage produces a structured non-secret error;
173 | - a provider cannot pass the plaintext data key through as a wrapped key;
174 | - old managed key versions remain readable during rotation and can be re-encrypted under the current version;
175 | - legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
176 | - malformed, unsupported, or unavailable-key envelopes fail closed.
177 |
178 | A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.
179 |
180 | ### Migration replay coverage
181 |
182 | CI runs the migration command twice against the same PostgreSQL service:
183 |
184 | 1. the first run applies every ordered migration;
185 | 2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.
186 |
187 | The migration history table remains the replay source of truth. Applied migration files remain immutable.
188 |
189 | ### Migration integrity and restore coverage
190 |
191 | CI additionally proves:
192 |
193 | - the ordered SQL file list exactly matches the committed SHA-256 manifest;
194 | - changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
195 | - legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
196 | - migration execution is serialized by one session-held advisory lock;
197 | - the restore target is a distinct pre-created clean database;
198 | - `pg_dump`/`pg_restore` credentials are not placed in process arguments;
199 | - restored schema, full table data hashes, sequence state, migration history, and replay match the source.
200 |
201 | Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.
202 |
203 | Current PostgreSQL coverage includes owner-checked lease renewal, durable dead-letter authorization/replay, runtime-role isolation, and maintenance-only retention archival. Future provider validation must still include selected-provider smoke tests for distinct API/worker identities, migration-owner grant execution, and the separately provisioned retention-maintenance identity.
204 |
205 | ## End-to-end tests
206 |
207 | - Merchant signup and store creation
208 | - Create a test/live API key
209 | - Connect Steadfast account
210 | - Assess WooCommerce COD order
211 | - Receive a signed `assessment.completed` webhook asynchronously
212 | - Review high-risk order
213 | - Verify OTP
214 | - Submit courier outcome
215 | - Receive a signed `order.outcome_recorded` webhook asynchronously
216 | - View usage and savings report
217 |
218 | ## Security tests
219 |
220 | - Tenant data leakage
221 | - API key replay/revocation
222 | - Raw key absence from database/metadata/logs
223 | - Brute-force OTP
224 | - CSRF
225 | - Literal-IP and DNS-result SSRF
226 | - Webhook replay and redirect handling
227 | - Webhook signing-secret decryption failure
228 | - Envelope authenticated-context mismatch
229 | - Secret redaction, including nested payload/body/URL/credential fields and error-message omission
230 | - Log, metric, and span serialization/export failure isolation from authenticated assessment, application, and worker execution
231 | - Metric attribute rejection for identifier/hash/key/URL/payload/body/token/secret-style names and values outside descriptor-owned finite sets
232 | - Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
233 | - Injection attacks
234 | - Session fixation/rotation
235 | - Credential decryption failure
236 | - Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
237 | - Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
238 | - Runtime database role privilege escape, ownership, migration-history, DELETE, DDL, and durable archive-table access attempts
239 |
240 | ## Scraper tests
241 |
242 | - Login page selector fixtures
243 | - Successful cookie extraction
244 | - Invalid credentials
245 | - CAPTCHA/2FA detection
246 | - Provider HTML changes
247 | - Browser cleanup on failure
248 | - Login-state/session validation
249 | - Redacted screenshot/trace behavior
250 | - Structured failure codes
251 |
252 | Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.
253 |
254 | ## Architecture tests
255 |
256 | - `packages/risk-engine` cannot import network/database/provider/browser packages
257 | - API routes cannot import provider session drivers directly
258 | - API persistence may enqueue durable work but cannot execute merchant/provider network delivery
259 | - All schema comes from `packages/database`
260 | - All public response and domain-event types come from `packages/shared-types`
261 | - Tenant-scoped repositories, outbox rows, and jobs require explicit scope
262 |
263 | ## Pilot evaluation
264 |
265 | Track a confusion matrix against real verified outcomes:
266 |
267 | - true positive
268 | - false positive
269 | - true negative
270 | - false negative
271 |
272 | Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.
273 |
274 | ## Required CI gates
275 |
276 | - formatting check
277 | - lint
278 | - typecheck
279 | - unit tests
280 | - contract tests
281 | - integration tests with PostgreSQL
282 | - migration manifest, verification, replay, and database-history integrity
283 | - clean PostgreSQL backup/restore rehearsal
284 | - least-privilege runtime database role grant and effective-permission verification
285 | - dependency audit
286 | - secret scanning
287 | - architecture/dependency-boundary tests
288 |
289 | ## Browser dead-letter operations coverage
290 |
291 | Browser API tests must prove session enforcement, exact-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, secret-free list serialization, replay-result serialization, and structured conflict mapping. The existing real-PostgreSQL durable-work suite remains authoritative for concurrent duplicate replay, tenant isolation, structural/expiry rejection, lease reset, immutable evidence, and audit atomicity.
292 |
293 | ## Durable work retention coverage
294 |
295 | Default unit tests prove invalid cutoffs, empty terminal-status selections, unsafe archive-run IDs, and batches above 500 fail before a database connection is opened.
296 |
297 | PostgreSQL integration tests must prove:
298 |
299 | - valid durable trace context round-trips across courier, webhook, and verification rows while nullable legacy rows remain valid;
300 | - malformed context is rejected by every durable table and all-zero trace/span IDs fail closed;
301 |
302 | - preview returns only old `completed`/`failed` rows and performs no mutation;
303 | - queued and recent rows remain in their source queues;
304 | - preview and archive responses exclude source payload and provider-reference values;
305 | - archive evidence is inserted before source deletion in one transaction;
306 | - courier, webhook, and verification source rows are deleted only after matching evidence exists;
307 | - replay ledger rows remain after source archival;
308 | - rerunning the same cutoff is idempotent when no source rows remain;
309 | - the archive schema contains no payload, raw contact, endpoint, credential, or provider-reference columns;
310 | - the normal runtime role cannot read `durable_work_archives` and has no source `DELETE` privilege.
311 |
```

### packages/observability/src/metrics.test.ts

Bytes: 17485
SHA-256: 86040e590105cae5a5fef9663940298cc38f63484f94cdd239e11e9e818eeeaf
Lines: 1-585 of 585

```typescript
  1 | import { describe, expect, it, vi } from 'vitest';
  2 | import {
  3 |   createMetricRecorder,
  4 |   defineMetric,
  5 |   observeApiDependency,
  6 |   observeBrowserDependency,
  7 |   observeRepositoryOperation,
  8 |   recordApiControlEvent,
  9 |   recordBrowserControlEvent,
 10 |   recordDurableQueueSnapshot,
 11 |   recordProviderOperation,
 12 |   recordRiskAssessmentDistribution,
 13 |   recordRiskOutcomeDistribution,
 14 |   recordWorkerClaimFailure,
 15 |   recordWorkerOperation,
 16 |   riskConfidenceBand,
 17 |   riskScoreBand,
 18 |   serializeMetricPoint,
 19 | } from './metrics.js';
 20 | function parseMetricLine(line: string): unknown {
 21 |   return JSON.parse(line) as unknown;
 22 | }
 23 |
 24 | const requestMetric = defineMetric({
 25 |   name: 'ozzyl.api.requests',
 26 |   kind: 'counter',
 27 |   unit: '{request}',
 28 |   attributes: {
 29 |     method: { values: ['GET', 'POST'] },
 30 |     route: { values: ['/health', 'unmatched'] },
 31 |     status_class: { values: ['2xx', '4xx', '5xx'] },
 32 |   },
 33 | });
 34 |
 35 | describe('vendor-neutral metrics', () => {
 36 |   it('serializes an exporter-neutral point with finite categorical attributes', () => {
 37 |     const line = serializeMetricPoint({
 38 |       descriptor: requestMetric,
 39 |       value: 1,
 40 |       attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 41 |       timestamp: new Date('2026-07-28T00:00:00.000Z'),
 42 |       service: 'ozzyl-guard-api',
 43 |       environment: 'test',
 44 |     });
 45 |
 46 |     expect(JSON.parse(line)).toEqual({
 47 |       telemetry_type: 'metric',
 48 |       timestamp: '2026-07-28T00:00:00.000Z',
 49 |       service: 'ozzyl-guard-api',
 50 |       environment: 'test',
 51 |       name: 'ozzyl.api.requests',
 52 |       kind: 'counter',
 53 |       unit: '{request}',
 54 |       value: 1,
 55 |       attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 56 |     });
 57 |   });
 58 |
 59 |   it('rejects high-cardinality identifiers and values outside finite sets', () => {
 60 |     expect(() =>
 61 |       defineMetric({
 62 |         name: 'ozzyl.worker.jobs',
 63 |         kind: 'counter',
 64 |         unit: '{job}',
 65 |         attributes: { worker_id: { values: ['worker-1'] } },
 66 |       }),
 67 |     ).toThrow(/unsafe or unbounded/);
 68 |
 69 |     expect(() =>
 70 |       serializeMetricPoint({
 71 |         descriptor: requestMetric,
 72 |         value: 1,
 73 |         attributes: { method: 'GET', route: '/private/path', status_class: '2xx' },
 74 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 75 |         service: 'ozzyl-guard-api',
 76 |         environment: 'test',
 77 |       }),
 78 |     ).toThrow(/outside its bounded set/);
 79 |   });
 80 |
 81 |   it('rejects negative counters and unknown attributes', () => {
 82 |     expect(() =>
 83 |       serializeMetricPoint({
 84 |         descriptor: requestMetric,
 85 |         value: -1,
 86 |         attributes: { method: 'GET', route: '/health', status_class: '2xx' },
 87 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
 88 |         service: 'ozzyl-guard-api',
 89 |         environment: 'test',
 90 |       }),
 91 |     ).toThrow(/must not be negative/);
 92 |
 93 |     expect(() =>
 94 |       serializeMetricPoint({
 95 |         descriptor: requestMetric,
 96 |         value: 1,
 97 |         attributes: {
 98 |           method: 'GET',
 99 |           route: '/health',
100 |           status_class: '2xx',
101 |           outcome: 'success',
102 |         },
103 |         timestamp: new Date('2026-07-28T00:00:00.000Z'),
104 |         service: 'ozzyl-guard-api',
105 |         environment: 'test',
106 |       }),
107 |     ).toThrow(/not allowed/);
108 |   });
109 |
110 |   it('records bounded worker operation and claim-failure points without identifiers', () => {
111 |     const lines: string[] = [];
112 |     const recorder = createMetricRecorder({
113 |       service: 'worker-test',
114 |       environment: 'test',
115 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
116 |       write: (line) => lines.push(line),
117 |     });
118 |
119 |     recordWorkerOperation(recorder, {
120 |       workerType: 'webhook_delivery',
121 |       operation: 'deliver',
122 |       outcome: 'retry_scheduled',
123 |       durationMs: 17,
124 |     });
125 |     recordWorkerClaimFailure(recorder, 'verification_delivery');
126 |
127 |     expect(lines.map(parseMetricLine)).toEqual([
128 |       expect.objectContaining({
129 |         name: 'ozzyl.worker.operations',
130 |         value: 1,
131 |         attributes: {
132 |           worker_type: 'webhook_delivery',
133 |           operation: 'deliver',
134 |           outcome: 'retry_scheduled',
135 |         },
136 |       }),
137 |       expect.objectContaining({
138 |         name: 'ozzyl.worker.operation.duration',
139 |         value: 17,
140 |         attributes: {
141 |           worker_type: 'webhook_delivery',
142 |           operation: 'deliver',
143 |           outcome: 'retry_scheduled',
144 |         },
145 |       }),
146 |       expect.objectContaining({
147 |         name: 'ozzyl.worker.claim.failures',
148 |         value: 1,
149 |         attributes: { worker_type: 'verification_delivery' },
150 |       }),
151 |     ]);
152 |     expect(lines.join('\n')).not.toContain('_id');
153 |     expect(lines.join('\n')).not.toContain('error_code');
154 |   });
155 |
156 |   it('observes repository success, empty, and error outcomes without changing results', async () => {
157 |     const lines: string[] = [];
158 |     const recorder = createMetricRecorder({
159 |       service: 'repository-test',
160 |       environment: 'test',
161 |       write: (line) => lines.push(line),
162 |     });
163 |     const clock = vi
164 |       .fn()
165 |       .mockReturnValueOnce(10)
166 |       .mockReturnValueOnce(18)
167 |       .mockReturnValueOnce(20)
168 |       .mockReturnValueOnce(24)
169 |       .mockReturnValueOnce(30)
170 |       .mockReturnValueOnce(37);
171 |
172 |     await expect(
173 |       observeRepositoryOperation(
174 |         recorder,
175 |         {
176 |           repositoryType: 'courier_queue',
177 |           operation: 'claim',
178 |           isEmpty: (value) => value === null,
179 |           monotonicNow: clock,
180 |         },
181 |         async () => ({ id: 'opaque-result' }),
182 |       ),
183 |     ).resolves.toEqual({ id: 'opaque-result' });
184 |     await expect(
185 |       observeRepositoryOperation(
186 |         recorder,
187 |         {
188 |           repositoryType: 'courier_queue',
189 |           operation: 'claim',
190 |           isEmpty: (value) => value === null,
191 |           monotonicNow: clock,
192 |         },
193 |         async () => null,
194 |       ),
195 |     ).resolves.toBeNull();
196 |     await expect(
197 |       observeRepositoryOperation(
198 |         recorder,
199 |         {
200 |           repositoryType: 'courier_queue',
201 |           operation: 'renew',
202 |           monotonicNow: clock,
203 |         },
204 |         async () => {
205 |           throw new Error('database unavailable');
206 |         },
207 |       ),
208 |     ).rejects.toThrow('database unavailable');
209 |
210 |     const points = lines.map(parseMetricLine);
211 |     expect(points).toEqual(
212 |       expect.arrayContaining([
213 |         expect.objectContaining({
214 |           name: 'ozzyl.repository.operations',
215 |           attributes: {
216 |             repository_type: 'courier_queue',
217 |             operation: 'claim',
218 |             outcome: 'success',
219 |           },
220 |         }),
221 |         expect.objectContaining({
222 |           name: 'ozzyl.repository.operations',
223 |           attributes: {
224 |             repository_type: 'courier_queue',
225 |             operation: 'claim',
226 |             outcome: 'empty',
227 |           },
228 |         }),
229 |         expect.objectContaining({
230 |           name: 'ozzyl.repository.operations',
231 |           attributes: {
232 |             repository_type: 'courier_queue',
233 |             operation: 'renew',
234 |             outcome: 'error',
235 |           },
236 |         }),
237 |       ]),
238 |     );
239 |     expect(lines.join('\n')).not.toContain('opaque-result');
240 |     expect(lines.join('\n')).not.toContain('database unavailable');
241 |   });
242 |
243 |   it('records provider operations and durable queue gauges with finite labels', () => {
244 |     const lines: string[] = [];
245 |     const recorder = createMetricRecorder({
246 |       service: 'worker-test',
247 |       environment: 'test',
248 |       write: (line) => lines.push(line),
249 |     });
250 |
251 |     recordProviderOperation(recorder, {
252 |       providerType: 'verification_delivery',
253 |       operation: 'send',
254 |       outcome: 'retryable_failure',
255 |       durationMs: 21,
256 |     });
257 |     recordDurableQueueSnapshot(recorder, 'verification_delivery', {
258 |       depths: { queued: 4, processing: 1, failed: 2 },
259 |       oldestReadyAgeMs: 3_000,
260 |     });
261 |
262 |     const points = lines.map(parseMetricLine);
263 |     expect(points).toContainEqual(
264 |       expect.objectContaining({
265 |         name: 'ozzyl.provider.operations',
266 |         attributes: {
267 |           provider_type: 'verification_delivery',
268 |           operation: 'send',
269 |           outcome: 'retryable_failure',
270 |         },
271 |       }),
272 |     );
273 |     expect(points).toContainEqual(
274 |       expect.objectContaining({
275 |         name: 'ozzyl.queue.depth',
276 |         value: 4,
277 |         attributes: { queue_type: 'verification_delivery', status: 'queued' },
278 |       }),
279 |     );
280 |     expect(points).toContainEqual(
281 |       expect.objectContaining({
282 |         name: 'ozzyl.queue.depth',
283 |         value: 0,
284 |         attributes: { queue_type: 'verification_delivery', status: 'retry_scheduled' },
285 |       }),
286 |     );
287 |     expect(points).toContainEqual(
288 |       expect.objectContaining({
289 |         name: 'ozzyl.queue.oldest_ready.age',
290 |         value: 3_000,
291 |         attributes: { queue_type: 'verification_delivery' },
292 |       }),
293 |     );
294 |     expect(lines.join('\n')).not.toContain('_id');
295 |     expect(lines.join('\n')).not.toContain('phone');
296 |   });
297 |
298 |   it('isolates telemetry clocks while preserving repository execution', async () => {
299 |     const recorder = createMetricRecorder({
300 |       service: 'repository-test',
301 |       environment: 'test',
302 |       write: () => {
303 |         throw new Error('metric sink unavailable');
304 |       },
305 |     });
306 |
307 |     await expect(
308 |       observeRepositoryOperation(
309 |         recorder,
310 |         {
311 |           repositoryType: 'webhook_queue',
312 |           operation: 'snapshot',
313 |           monotonicNow: () => {
314 |             throw new Error('clock unavailable');
315 |           },
316 |         },
317 |         async () => 'repository-result',
318 |       ),
319 |     ).resolves.toBe('repository-result');
320 |   });
321 |
322 |   it('records API control and dependency outcomes without dependency values', async () => {
323 |     const lines: string[] = [];
324 |     const recorder = createMetricRecorder({
325 |       service: 'api-test',
326 |       environment: 'test',
327 |       write: (line) => lines.push(line),
328 |     });
329 |     const clock = vi
330 |       .fn()
331 |       .mockReturnValueOnce(10)
332 |       .mockReturnValueOnce(15)
333 |       .mockReturnValueOnce(20)
334 |       .mockReturnValueOnce(27);
335 |
336 |     recordApiControlEvent(recorder, 'authentication', 'rejected');
337 |     recordApiControlEvent(recorder, 'idempotency', 'replay');
338 |     await expect(
339 |       observeApiDependency(
340 |         recorder,
341 |         {
342 |           dependencyType: 'assessment_repository',
343 |           operation: 'find_by_idempotency',
344 |           classify: (value) => (value === null ? 'empty' : 'replay'),
345 |           monotonicNow: clock,
346 |         },
347 |         async () => ({ assessmentId: 'ras-sensitive' }),
348 |       ),
349 |     ).resolves.toEqual({ assessmentId: 'ras-sensitive' });
350 |     await expect(
351 |       observeApiDependency(
352 |         recorder,
353 |         {
354 |           dependencyType: 'usage_ledger',
355 |           operation: 'reserve',
356 |           classifyError: () => 'rejected',
357 |           monotonicNow: clock,
358 |         },
359 |         async () => {
360 |           throw new Error('plan limit for org-sensitive');
361 |         },
362 |       ),
363 |     ).rejects.toThrow('plan limit for org-sensitive');
364 |
365 |     const points = lines.map(parseMetricLine);
366 |     expect(points).toEqual(
367 |       expect.arrayContaining([
368 |         expect.objectContaining({
369 |           name: 'ozzyl.api.control.events',
370 |           attributes: { control: 'authentication', outcome: 'rejected' },
371 |         }),
372 |         expect.objectContaining({
373 |           name: 'ozzyl.api.control.events',
374 |           attributes: { control: 'idempotency', outcome: 'replay' },
375 |         }),
376 |         expect.objectContaining({
377 |           name: 'ozzyl.api.dependency.operations',
378 |           attributes: {
379 |             dependency_type: 'assessment_repository',
380 |             operation: 'find_by_idempotency',
381 |             outcome: 'replay',
382 |           },
383 |         }),
384 |         expect.objectContaining({
385 |           name: 'ozzyl.api.dependency.operation.duration',
386 |           value: 5,
387 |           attributes: {
388 |             dependency_type: 'assessment_repository',
389 |             operation: 'find_by_idempotency',
390 |             outcome: 'replay',
391 |           },
392 |         }),
393 |         expect.objectContaining({
394 |           name: 'ozzyl.api.dependency.operations',
395 |           attributes: {
396 |             dependency_type: 'usage_ledger',
397 |             operation: 'reserve',
398 |             outcome: 'rejected',
399 |           },
400 |         }),
401 |       ]),
402 |     );
403 |     expect(lines.join('\n')).not.toContain('ras-sensitive');
404 |     expect(lines.join('\n')).not.toContain('org-sensitive');
405 |   });
406 |
407 |   it('records browser control and dependency outcomes without session or tenant values', async () => {
408 |     const lines: string[] = [];
409 |     const recorder = createMetricRecorder({
410 |       service: 'browser-test',
411 |       environment: 'test',
412 |       write: (line) => lines.push(line),
413 |     });
414 |     const clock = vi
415 |       .fn()
416 |       .mockReturnValueOnce(10)
417 |       .mockReturnValueOnce(15)
418 |       .mockReturnValueOnce(20)
419 |       .mockReturnValueOnce(29);
420 |
421 |     recordBrowserControlEvent(recorder, 'csrf', 'rejected');
422 |     await expect(
423 |       observeBrowserDependency(
424 |         recorder,
425 |         {
426 |           dependencyType: 'auth_service',
427 |           operation: 'resolve',
428 |           classify: (value) => (value === null ? 'empty' : 'success'),
429 |           monotonicNow: clock,
430 |         },
431 |         async () => ({ sessionId: 'ses-sensitive', organizationId: 'org-sensitive' }),
432 |       ),
433 |     ).resolves.toEqual({ sessionId: 'ses-sensitive', organizationId: 'org-sensitive' });
434 |     await expect(
435 |       observeBrowserDependency(
436 |         recorder,
437 |         {
438 |           dependencyType: 'dead_letter_repository',
439 |           operation: 'replay',
440 |           classifyError: () => 'rejected',
441 |           monotonicNow: clock,
442 |         },
443 |         async () => {
444 |           throw new Error('work whd-sensitive cannot be replayed');
445 |         },
446 |       ),
447 |     ).rejects.toThrow('whd-sensitive');
448 |
449 |     expect(lines.map(parseMetricLine)).toEqual(
450 |       expect.arrayContaining([
451 |         expect.objectContaining({
452 |           name: 'ozzyl.browser.control.events',
453 |           attributes: { control: 'csrf', outcome: 'rejected' },
454 |         }),
455 |         expect.objectContaining({
456 |           name: 'ozzyl.browser.dependency.operations',
457 |           attributes: {
458 |             dependency_type: 'auth_service',
459 |             operation: 'resolve',
460 |             outcome: 'success',
461 |           },
462 |         }),
463 |         expect.objectContaining({
464 |           name: 'ozzyl.browser.dependency.operation.duration',
465 |           value: 5,
466 |           attributes: {
467 |             dependency_type: 'auth_service',
468 |             operation: 'resolve',
469 |             outcome: 'success',
470 |           },
471 |         }),
472 |         expect.objectContaining({
473 |           name: 'ozzyl.browser.dependency.operations',
474 |           attributes: {
475 |             dependency_type: 'dead_letter_repository',
476 |             operation: 'replay',
477 |             outcome: 'rejected',
478 |           },
479 |         }),
480 |       ]),
481 |     );
482 |     expect(lines.join('\n')).not.toContain('ses-sensitive');
483 |     expect(lines.join('\n')).not.toContain('org-sensitive');
484 |     expect(lines.join('\n')).not.toContain('whd-sensitive');
485 |   });
486 |
487 |   it('records bounded risk assessment and verified-outcome distributions', () => {
488 |     const lines: string[] = [];
489 |     const recorder = createMetricRecorder({
490 |       service: 'api-test',
491 |       environment: 'test',
492 |       write: (line) => lines.push(line),
493 |     });
494 |
495 |     recordRiskAssessmentDistribution(recorder, {
496 |       decision: 'verify',
497 |       riskLevel: 'unknown',
498 |       score: 19,
499 |       confidence: 0.74,
500 |       degraded: true,
501 |       freshness: 'missing',
502 |     });
503 |     recordRiskOutcomeDistribution(recorder, {
504 |       outcome: 'delivered',
505 |       linkedAssessment: true,
506 |     });
507 |
508 |     expect(riskScoreBand(-1)).toBe('0_19');
509 |     expect(riskScoreBand(20)).toBe('20_39');
510 |     expect(riskScoreBand(1000)).toBe('80_100');
511 |     expect(riskConfidenceBand(Number.NaN)).toBe('0_24');
512 |     expect(riskConfidenceBand(0.5)).toBe('50_74');
513 |     expect(riskConfidenceBand(1)).toBe('75_100');
514 |     expect(lines.map(parseMetricLine)).toEqual([
515 |       expect.objectContaining({
516 |         name: 'ozzyl.risk.assessments',
517 |         attributes: {
518 |           decision: 'verify',
519 |           risk_level: 'unknown',
520 |           score_band: '0_19',
521 |           confidence_band: '50_74',
522 |           degraded: true,
523 |           freshness: 'missing',
524 |         },
525 |       }),
526 |       expect.objectContaining({
527 |         name: 'ozzyl.risk.outcomes',
528 |         attributes: { outcome: 'delivered', linked_assessment: true },
529 |       }),
530 |     ]);
531 |   });
532 |
533 |   it('keeps API dependency execution available when telemetry clocks and sinks fail', async () => {
534 |     const recorder = createMetricRecorder({
535 |       service: 'api-test',
536 |       environment: 'test',
537 |       write: () => {
538 |         throw new Error('collector unavailable');
539 |       },
540 |     });
541 |
542 |     await expect(
543 |       observeApiDependency(
544 |         recorder,
545 |         {
546 |           dependencyType: 'feature_provider',
547 |           operation: 'load',
548 |           monotonicNow: () => {
549 |             throw new Error('clock unavailable');
550 |           },
551 |         },
552 |         async () => 'domain-result',
553 |       ),
554 |     ).resolves.toBe('domain-result');
555 |   });
556 |
557 |   it('swallows descriptor, serialization, clock, and sink failures', () => {
558 |     const write = vi.fn(() => {
559 |       throw new Error('collector unavailable');
560 |     });
561 |     const recorder = createMetricRecorder({
562 |       service: 'ozzyl-guard-api',
563 |       environment: 'test',
564 |       clock: () => new Date('2026-07-28T00:00:00.000Z'),
565 |       write,
566 |     });
567 |
568 |     expect(() =>
569 |       recorder.record(requestMetric, 1, {
570 |         method: 'GET',
571 |         route: '/health',
572 |         status_class: '2xx',
573 |       }),
574 |     ).not.toThrow();
575 |     expect(() =>
576 |       recorder.record(requestMetric, 1, {
577 |         method: 'GET',
578 |         route: '/dynamic-customer-reference',
579 |         status_class: '2xx',
580 |       }),
581 |     ).not.toThrow();
582 |     expect(write).toHaveBeenCalledTimes(1);
583 |   });
584 | });
585 |
```

### packages/observability/src/metrics.ts

Bytes: 26946
SHA-256: 3cd6ce9148c9c9390a0f551971d7c7853319dcd0f2a5816d66502dc5809fc721
Lines: 1-878 of 878

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
520 | export type BrowserControlType = 'authentication' | 'authorization' | 'csrf' | 'rate_limit';
521 | export type BrowserControlOutcome = 'allowed' | 'rejected' | 'error';
522 |
523 | const BROWSER_CONTROL_EVENTS = defineMetric({
524 |   name: 'ozzyl.browser.control.events',
525 |   kind: 'counter',
526 |   unit: '{event}',
527 |   attributes: {
528 |     control: { values: ['authentication', 'authorization', 'csrf', 'rate_limit'] },
529 |     outcome: { values: ['allowed', 'rejected', 'error'] },
530 |   },
531 | });
532 |
533 | export function recordBrowserControlEvent(
534 |   recorder: MetricRecorder | undefined,
535 |   control: BrowserControlType,
536 |   outcome: BrowserControlOutcome,
537 | ): void {
538 |   recorder?.record(BROWSER_CONTROL_EVENTS, 1, { control, outcome });
539 | }
540 |
541 | export type BrowserDependencyType =
542 |   | 'auth_service'
543 |   | 'rate_limiter'
544 |   | 'dashboard_repository'
545 |   | 'admin_repository'
546 |   | 'rollout_repository'
547 |   | 'dead_letter_repository'
548 |   | 'audit_repository';
549 | export type BrowserDependencyOperation =
550 |   | 'login'
551 |   | 'resolve'
552 |   | 'revoke'
553 |   | 'consume'
554 |   | 'load_overview'
555 |   | 'set_rollout'
556 |   | 'list'
557 |   | 'replay'
558 |   | 'record';
559 | export type BrowserDependencyOutcome = 'success' | 'empty' | 'replay' | 'rejected' | 'error';
560 |
561 | const BROWSER_DEPENDENCY_ATTRIBUTES = {
562 |   dependency_type: {
563 |     values: [
564 |       'auth_service',
565 |       'rate_limiter',
566 |       'dashboard_repository',
567 |       'admin_repository',
568 |       'rollout_repository',
569 |       'dead_letter_repository',
570 |       'audit_repository',
571 |     ],
572 |   },
573 |   operation: {
574 |     values: [
575 |       'login',
576 |       'resolve',
577 |       'revoke',
578 |       'consume',
579 |       'load_overview',
580 |       'set_rollout',
581 |       'list',
582 |       'replay',
583 |       'record',
584 |     ],
585 |   },
586 |   outcome: { values: ['success', 'empty', 'replay', 'rejected', 'error'] },
587 | } as const;
588 | const BROWSER_DEPENDENCY_OPERATION_COUNT = defineMetric({
589 |   name: 'ozzyl.browser.dependency.operations',
590 |   kind: 'counter',
591 |   unit: '{operation}',
592 |   attributes: BROWSER_DEPENDENCY_ATTRIBUTES,
593 | });
594 | const BROWSER_DEPENDENCY_OPERATION_DURATION = defineMetric({
595 |   name: 'ozzyl.browser.dependency.operation.duration',
596 |   kind: 'histogram',
597 |   unit: 'ms',
598 |   attributes: BROWSER_DEPENDENCY_ATTRIBUTES,
599 | });
600 |
601 | export async function observeBrowserDependency<T>(
602 |   recorder: MetricRecorder | undefined,
603 |   input: {
604 |     dependencyType: BrowserDependencyType;
605 |     operation: BrowserDependencyOperation;
606 |     classify?: (value: T) => BrowserDependencyOutcome;
607 |     classifyError?: (error: unknown) => Extract<BrowserDependencyOutcome, 'rejected' | 'error'>;
608 |     monotonicNow?: () => number;
609 |   },
610 |   task: () => Promise<T>,
611 | ): Promise<T> {
612 |   const monotonicNow = input.monotonicNow ?? (() => Date.now());
613 |   const startedAt = safeMonotonicNow(monotonicNow);
614 |   try {
615 |     const value = await task();
616 |     recordBrowserDependencyOperation(recorder, {
617 |       dependencyType: input.dependencyType,
618 |       operation: input.operation,
619 |       outcome: input.classify?.(value) ?? 'success',
620 |       durationMs: safeDuration(monotonicNow, startedAt),
621 |     });
622 |     return value;
623 |   } catch (error) {
624 |     recordBrowserDependencyOperation(recorder, {
625 |       dependencyType: input.dependencyType,
626 |       operation: input.operation,
627 |       outcome: input.classifyError?.(error) ?? 'error',
628 |       durationMs: safeDuration(monotonicNow, startedAt),
629 |     });
630 |     throw error;
631 |   }
632 | }
633 |
634 | export function recordBrowserDependencyOperation(
635 |   recorder: MetricRecorder | undefined,
636 |   input: {
637 |     dependencyType: BrowserDependencyType;
638 |     operation: BrowserDependencyOperation;
639 |     outcome: BrowserDependencyOutcome;
640 |     durationMs: number;
641 |   },
642 | ): void {
643 |   if (!recorder) return;
644 |   const attributes = {
645 |     dependency_type: input.dependencyType,
646 |     operation: input.operation,
647 |     outcome: input.outcome,
648 |   } as const;
649 |   recorder.record(BROWSER_DEPENDENCY_OPERATION_COUNT, 1, attributes);
650 |   recorder.record(BROWSER_DEPENDENCY_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
651 | }
652 |
653 | export type ApiDependencyType =
654 |   | 'api_key'
655 |   | 'rate_limiter'
656 |   | 'usage_ledger'
657 |   | 'feature_provider'
658 |   | 'assessment_repository'
659 |   | 'outcome_repository'
660 |   | 'idempotency_store'
661 |   | 'courier_queue'
662 |   | 'verification_queue'
663 |   | 'otp_verifier'
664 |   | 'native_shadow_rollout_repository'
665 |   | 'native_shadow_comparison_repository'
666 |   | 'native_shadow_attempt_repository';
667 | export type ApiDependencyOperation =
668 |   | 'resolve'
669 |   | 'consume'
670 |   | 'reserve'
671 |   | 'load'
672 |   | 'find_by_idempotency'
673 |   | 'find_by_id'
674 |   | 'save'
675 |   | 'get'
676 |   | 'set'
677 |   | 'enqueue'
678 |   | 'verify';
679 | export type ApiDependencyOutcome = 'success' | 'empty' | 'replay' | 'rejected' | 'error';
680 |
681 | const API_DEPENDENCY_ATTRIBUTES = {
682 |   dependency_type: {
683 |     values: [
684 |       'api_key',
685 |       'rate_limiter',
686 |       'usage_ledger',
687 |       'feature_provider',
688 |       'assessment_repository',
689 |       'outcome_repository',
690 |       'idempotency_store',
691 |       'courier_queue',
692 |       'verification_queue',
693 |       'otp_verifier',
694 |       'native_shadow_rollout_repository',
695 |       'native_shadow_comparison_repository',
696 |       'native_shadow_attempt_repository',
697 |     ],
698 |   },
699 |   operation: {
700 |     values: [
701 |       'resolve',
702 |       'consume',
703 |       'reserve',
704 |       'load',
705 |       'find_by_idempotency',
706 |       'find_by_id',
707 |       'save',
708 |       'get',
709 |       'set',
710 |       'enqueue',
711 |       'verify',
712 |     ],
713 |   },
714 |   outcome: { values: ['success', 'empty', 'replay', 'rejected', 'error'] },
715 | } as const;
716 | const API_DEPENDENCY_OPERATION_COUNT = defineMetric({
717 |   name: 'ozzyl.api.dependency.operations',
718 |   kind: 'counter',
719 |   unit: '{operation}',
720 |   attributes: API_DEPENDENCY_ATTRIBUTES,
721 | });
722 | const API_DEPENDENCY_OPERATION_DURATION = defineMetric({
723 |   name: 'ozzyl.api.dependency.operation.duration',
724 |   kind: 'histogram',
725 |   unit: 'ms',
726 |   attributes: API_DEPENDENCY_ATTRIBUTES,
727 | });
728 |
729 | export async function observeApiDependency<T>(
730 |   recorder: MetricRecorder | undefined,
731 |   input: {
732 |     dependencyType: ApiDependencyType;
733 |     operation: ApiDependencyOperation;
734 |     classify?: (value: T) => ApiDependencyOutcome;
735 |     classifyError?: (error: unknown) => Extract<ApiDependencyOutcome, 'rejected' | 'error'>;
736 |     monotonicNow?: () => number;
737 |   },
738 |   task: () => Promise<T>,
739 | ): Promise<T> {
740 |   const monotonicNow = input.monotonicNow ?? (() => Date.now());
741 |   const startedAt = safeMonotonicNow(monotonicNow);
742 |   try {
743 |     const value = await task();
744 |     recordApiDependencyOperation(recorder, {
745 |       dependencyType: input.dependencyType,
746 |       operation: input.operation,
747 |       outcome: input.classify?.(value) ?? 'success',
748 |       durationMs: safeDuration(monotonicNow, startedAt),
749 |     });
750 |     return value;
751 |   } catch (error) {
752 |     recordApiDependencyOperation(recorder, {
753 |       dependencyType: input.dependencyType,
754 |       operation: input.operation,
755 |       outcome: input.classifyError?.(error) ?? 'error',
756 |       durationMs: safeDuration(monotonicNow, startedAt),
757 |     });
758 |     throw error;
759 |   }
760 | }
761 |
762 | export function recordApiDependencyOperation(
763 |   recorder: MetricRecorder | undefined,
764 |   input: {
765 |     dependencyType: ApiDependencyType;
766 |     operation: ApiDependencyOperation;
767 |     outcome: ApiDependencyOutcome;
768 |     durationMs: number;
769 |   },
770 | ): void {
771 |   if (!recorder) return;
772 |   const attributes = {
773 |     dependency_type: input.dependencyType,
774 |     operation: input.operation,
775 |     outcome: input.outcome,
776 |   } as const;
777 |   recorder.record(API_DEPENDENCY_OPERATION_COUNT, 1, attributes);
778 |   recorder.record(API_DEPENDENCY_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
779 | }
780 |
781 | export type RiskMetricDecision = 'allow' | 'verify' | 'review' | 'hold' | 'block';
782 | export type RiskMetricLevel = 'low' | 'moderate' | 'high' | 'critical' | 'unknown';
783 | export type RiskMetricFreshness = 'fresh' | 'stale' | 'missing';
784 | export type RiskScoreBand = '0_19' | '20_39' | '40_59' | '60_79' | '80_100';
785 | export type RiskConfidenceBand = '0_24' | '25_49' | '50_74' | '75_100';
786 | export type RiskOutcomeType =
787 |   'delivered' | 'returned' | 'cancelled_before_shipping' | 'customer_confirmed';
788 |
789 | const RISK_ASSESSMENTS = defineMetric({
790 |   name: 'ozzyl.risk.assessments',
791 |   kind: 'counter',
792 |   unit: '{assessment}',
793 |   attributes: {
794 |     decision: { values: ['allow', 'verify', 'review', 'hold', 'block'] },
795 |     risk_level: { values: ['low', 'moderate', 'high', 'critical', 'unknown'] },
796 |     score_band: { values: ['0_19', '20_39', '40_59', '60_79', '80_100'] },
797 |     confidence_band: { values: ['0_24', '25_49', '50_74', '75_100'] },
798 |     degraded: { values: [true, false] },
799 |     freshness: { values: ['fresh', 'stale', 'missing'] },
800 |   },
801 | });
802 | const RISK_OUTCOMES = defineMetric({
803 |   name: 'ozzyl.risk.outcomes',
804 |   kind: 'counter',
805 |   unit: '{outcome}',
806 |   attributes: {
807 |     outcome: {
808 |       values: ['delivered', 'returned', 'cancelled_before_shipping', 'customer_confirmed'],
809 |     },
810 |     linked_assessment: { values: [true, false] },
811 |   },
812 | });
813 |
814 | export function recordRiskAssessmentDistribution(
815 |   recorder: MetricRecorder | undefined,
816 |   input: {
817 |     decision: RiskMetricDecision;
818 |     riskLevel: RiskMetricLevel;
819 |     score: number;
820 |     confidence: number;
821 |     degraded: boolean;
822 |     freshness: RiskMetricFreshness;
823 |   },
824 | ): void {
825 |   recorder?.record(RISK_ASSESSMENTS, 1, {
826 |     decision: input.decision,
827 |     risk_level: input.riskLevel,
828 |     score_band: riskScoreBand(input.score),
829 |     confidence_band: riskConfidenceBand(input.confidence),
830 |     degraded: input.degraded,
831 |     freshness: input.freshness,
832 |   });
833 | }
834 |
835 | export function recordRiskOutcomeDistribution(
836 |   recorder: MetricRecorder | undefined,
837 |   input: { outcome: RiskOutcomeType; linkedAssessment: boolean },
838 | ): void {
839 |   recorder?.record(RISK_OUTCOMES, 1, {
840 |     outcome: input.outcome,
841 |     linked_assessment: input.linkedAssessment,
842 |   });
843 | }
844 |
845 | export function riskScoreBand(score: number): RiskScoreBand {
846 |   const bounded = Math.min(100, Math.max(0, Number.isFinite(score) ? score : 0));
847 |   if (bounded < 20) return '0_19';
848 |   if (bounded < 40) return '20_39';
849 |   if (bounded < 60) return '40_59';
850 |   if (bounded < 80) return '60_79';
851 |   return '80_100';
852 | }
853 |
854 | export function riskConfidenceBand(confidence: number): RiskConfidenceBand {
855 |   const bounded = Math.min(1, Math.max(0, Number.isFinite(confidence) ? confidence : 0));
856 |   if (bounded < 0.25) return '0_24';
857 |   if (bounded < 0.5) return '25_49';
858 |   if (bounded < 0.75) return '50_74';
859 |   return '75_100';
860 | }
861 |
862 | function safeMonotonicNow(monotonicNow: () => number): number {
863 |   try {
864 |     const value = monotonicNow();
865 |     return Number.isFinite(value) ? value : 0;
866 |   } catch {
867 |     return 0;
868 |   }
869 | }
870 |
871 | function safeDuration(monotonicNow: () => number, startedAt: number): number {
872 |   return Math.max(0, safeMonotonicNow(monotonicNow) - startedAt);
873 | }
874 |
875 | function defaultWrite(line: string): void {
876 |   console.info(line);
877 | }
878 |
```

### tracker.yml

Bytes: 22878
SHA-256: 0742921b662df818cd0dc128b2b03f244353b9ced54ba10d4268b1f083220c86
Lines: 1-421 of 421

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
100 |   - browser_metrics_use_only_finite_control_dependency_and_outcome_categories
101 |   - browser_authorization_is_allowed_only_after_repository_revalidation
102 |   - native_shadow_known_rejections_remain_distinct_from_unknown_persistence_errors
103 |   - trace_context_accepts_only_strict_w3c_version_zero_nonzero_identifiers
104 |   - trace_context_is_never_authorization_tenant_or_idempotency_identity
105 |   - span_attributes_are_descriptor_owned_finite_and_exclude_business_or_sensitive_values
106 |   - durable_trace_context_is_stored_outside_payloads_and_not_archived
107 |   - api_request_ids_are_server_generated_or_bounded_opaque_values
108 |   - api_logs_never_export_raw_urls_query_values_or_dynamic_route_identifiers
109 |   - durable_worker_leases_renew_only_for_the_current_owner_while_unexpired
110 |   - lease_renewal_failure_aborts_active_provider_io
111 |   - final_queue_transitions_drain_the_heartbeat_before_state_change
112 |   - durable_retention_selects_only_old_completed_or_failed_work
113 |   - archive_evidence_is_persisted_and_exactly_validated_before_source_deletion
114 |   - durable_archive_records_exclude_payloads_provider_references_and_secret_material
115 |   - application_runtime_role_cannot_access_archives_or_delete_durable_source_rows
116 |   - durable_replay_and_audit_evidence_survives_source_archival
117 |   - retention_has_no_unattended_scheduler_or_automatic_rehydration
118 |
119 | implemented:
120 |   - typescript_monorepo_and_ci
121 |   - postgresql_schema_and_fourteen_migrations
122 |   - organization_store_membership_and_plan_foundation
123 |   - usage_metering_and_audit_foundation
124 |   - opaque_browser_sessions_csrf_and_explicit_platform_admin_role
125 |   - pure_versioned_explainable_risk_engine
126 |   - canonical_v1_api_and_postgresql_repositories
127 |   - provider_neutral_shared_envelope_encryption_package
128 |   - steadfast_adapter_and_browser_session_worker
129 |   - postgresql_courier_sync_worker
130 |   - verification_and_webhook_libraries
131 |   - durable_postgresql_webhook_outbox_and_event_worker
132 |   - durable_encrypted_postgresql_verification_queue_and_worker
133 |   - tenant_scoped_postgresql_otp_verification_repository
134 |   - woocommerce_shopify_custom_and_native_adapters
135 |   - authenticated_live_merchant_dashboard
136 |   - authenticated_live_platform_admin
137 |   - postgresql_browser_session_and_tenant_isolation_integration_tests
138 |   - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
139 |   - accepted_provider_neutral_production_infrastructure_adrs
140 |   - postgresql_usage_assessment_outcome_and_operation_idempotency_race_hardening
141 |   - postgresql_courier_worker_atomic_claim_and_lease_recovery
142 |   - postgresql_webhook_worker_atomic_claim_and_lease_recovery
143 |   - postgresql_verification_worker_atomic_claim_and_lease_recovery
144 |   - verification_payload_context_phone_hash_and_otp_hash_validation
145 |   - otp_provider_delivery_removed_from_synchronous_api_requests
146 |   - migration_replay_ci_gate
147 |   - webhook_dns_destination_validation
148 |   - postgresql_migration_manifest_and_history_checksum_integrity
149 |   - clean_postgresql_backup_restore_rehearsal
150 |   - restored_schema_data_sequence_history_and_replay_comparison
151 |   - authoritative_api_key_feature_assessment_and_outcome_tenant_scope_revalidation
152 |   - secret_free_tenant_scoped_webhook_and_verification_administration_repositories
153 |   - dashboard_and_platform_admin_repository_isolation_expansion
154 |   - least_privilege_postgresql_runtime_role_policy_grant_cli_and_ci_gate
155 |   - provider_neutral_managed_envelope_v2_with_random_per_record_data_keys
156 |   - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
157 |   - native_multi_store_off_and_deterministic_shadow_rollout_controls
158 |   - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
159 |   - selected_source_post_persist_native_shadow_integration
160 |   - store_scoped_native_shadow_opt_in_and_pilot_reporting
161 |   - tenant_scoped_immutable_native_shadow_attempt_evidence
162 |   - tenant_scoped_durable_work_dead_letter_inspection
163 |   - idempotent_controlled_durable_work_replay
164 |   - immutable_secret_free_durable_work_replay_evidence
165 |   - authenticated_merchant_browser_dead_letter_operations
166 |   - csrf_protected_browser_durable_work_replay
167 |   - synchronous_per_work_item_browser_replay_key_cache
168 |   - provider_neutral_structured_logging_and_recursive_redaction
169 |   - courier_session_courier_sync_event_and_verification_worker_log_integration
170 |   - telemetry_serialization_and_sink_failure_isolation_tests
171 |   - api_request_lifecycle_and_safe_correlation_logging
172 |   - api_unhandled_error_redaction_and_sink_failure_isolation_tests
173 |   - shared_non_overlapping_lease_heartbeat_and_abort_signal
174 |   - courier_webhook_and_verification_owner_checked_lease_renewal
175 |   - provider_io_abort_on_lease_renewal_loss
176 |   - maintenance_only_durable_work_retention_preview_and_archive_cli
177 |   - secret_free_durable_work_archive_evidence
178 |   - transactional_archive_before_delete_with_skip_locked_revalidation
179 |   - runtime_role_archive_table_and_source_delete_denial
180 |   - durable_retention_unit_and_postgresql_integration_tests
181 |   - vendor_neutral_metric_descriptor_and_json_recorder
182 |   - api_request_count_and_duration_metrics
183 |   - private_worker_operation_count_duration_and_claim_failure_metrics
184 |   - finite_cardinality_metric_label_and_sink_failure_tests
185 |   - durable_repository_operation_count_and_duration_metrics
186 |   - courier_browser_webhook_and_verification_provider_call_metrics
187 |   - aggregate_durable_queue_depth_and_oldest_ready_age_gauges
188 |   - configurable_telemetry_only_queue_snapshot_cadence
189 |   - vendor_neutral_w3c_trace_context_parser_formatter_and_json_span_recorder
190 |   - api_server_and_durable_producer_spans
191 |   - courier_webhook_and_verification_durable_trace_context_persistence
192 |   - private_worker_consumer_and_provider_client_spans
193 |   - verification_failure_webhook_trace_continuation
194 |   - finite_span_attribute_and_trace_sink_failure_tests
195 |   - bounded_api_auth_authorization_rate_limit_quota_and_idempotency_metrics
196 |   - api_dependency_operation_count_and_duration_metrics
197 |   - bounded_risk_assessment_quality_distributions
198 |   - bounded_verified_outcome_distributions
199 |   - assessment_and_outcome_replay_metric_deduplication
200 |   - usage_limit_vs_dependency_failure_metric_and_http_distinction
201 |   - bounded_browser_auth_authorization_csrf_and_rate_limit_metrics
202 |   - browser_auth_dashboard_admin_rollout_dead_letter_and_audit_dependency_metrics
203 |   - native_shadow_rollout_comparison_and_attempt_repository_metrics
204 |   - browser_and_native_shadow_metric_identifier_omission_and_sink_isolation
205 |
206 | verification:
207 |   command: npm run verify
208 |   last_verified: 2026-07-28
209 |   status: passed
210 |   results:
211 |     migrations: 14_of_14_with_sha256_manifest
212 |     migration_replay: passed
213 |     migration_history_integrity: passed
214 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
215 |     architecture_boundaries: passed
216 |     typecheck: 20_of_20_passed
217 |     test_tasks: 31_of_31_passed
218 |     remote_tests: 191_passed
219 |     migration_integrity_tests: 7_of_7_passed
220 |     postgresql_concurrency_tests: 7_of_7_passed
221 |     postgresql_courier_worker_lease_tests: 7_of_7_passed
222 |     postgresql_webhook_worker_lease_tests: 7_of_7_passed
223 |     postgresql_verification_worker_lease_tests: 7_of_7_passed
224 |     verification_payload_validation_tests: 3_of_3_passed
225 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
226 |     postgresql_runtime_role_tests: 8_of_8_passed
227 |     managed_envelope_tests: 11_of_11_passed
228 |     native_shadow_adapter_tests: 10_of_10_passed
229 |     native_shadow_api_tests: 7_of_7_passed
230 |     native_shadow_postgresql_tests: 7_of_7_passed
231 |     native_shadow_browser_tests: 2_of_2_passed
232 |     native_shadow_sdk_tests: 2_of_2_passed
233 |     native_shadow_total_tests: 28_of_28_passed
234 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
235 |     browser_dead_letter_api_tests: 3_of_3_passed
236 |     observability_tests: 22_of_22_passed
237 |     api_source_tests: 56_of_56_passed
238 |     critical_path_metric_integrations: 3_of_3_previous_main_passed
239 |     browser_metric_integrations: 2_of_2_passed
240 |     native_shadow_metric_integrations: 2_of_2_passed
241 |     worker_metric_integration_tests: 4_of_4_passed
242 |     provider_metric_integration_tests: 4_of_4_passed
243 |     repository_metric_helper_tests: 3_of_3_passed
244 |     queue_snapshot_postgresql_tests: 3_of_3_passed
245 |     api_trace_lineage_tests: 1_of_1_passed
246 |     worker_trace_lineage_integrations: 4_of_4_passed
247 |     durable_trace_context_postgresql_tests: 3_of_3_passed
248 |     lease_heartbeat_unit_tests: 3_of_3_passed
249 |     provider_abort_on_lease_loss_tests: 3_of_3_passed
250 |     durable_retention_input_tests: 4_of_4_passed
251 |     durable_retention_postgresql_tests: 4_of_4_passed
252 |     builds: 20_of_20_passed
253 |     php_syntax: passed
254 |     high_critical_dependency_check: passed
255 |     moderate_dependency_findings: 5
256 |     documentation_links: 61_reviewed_0_known_broken
257 |   continuation_bundle:
258 |     status: refreshed_locally
259 |     canonical_main_sync: verified_at_c697935549c427e4a4a6c81ad642416363e89e8e
260 |     local_exporter: completed_after_merged_browser_integration_metric_ci_evidence
261 |   remote_ci:
262 |     status: passed
263 |     run_id: 30386368200
264 |     job_id: 90366572706
265 |     job: verify
266 |     tested_head: d29b5ef672ce31d65c6c3bfecacdc363ccf611ad
267 |     merged_main_commit: c697935549c427e4a4a6c81ad642416363e89e8e
268 |     completed: 2026-07-28
269 |     steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_ninety_one_tests_twenty_builds_php_all_passed
270 |   source_validation:
271 |     status: passed
272 |     run_id: 30386368200
273 |     job_id: 90366572706
274 |     branch: feat/browser-integration-metrics
275 |     tested_head: d29b5ef672ce31d65c6c3bfecacdc363ccf611ad
276 |     completed: 2026-07-28
277 |     steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_ninety_one_tests_twenty_builds_php_all_passed
278 |     shared_observability_tests: 22_of_22_passed
279 |     api_source_tests: 56_of_56_passed
280 |     browser_metric_integrations: 2_of_2_passed
281 |     native_shadow_metric_integrations: 2_of_2_passed
282 |     browser_metric_sink_failure_isolation: passed
283 |     relational_reauthorization_and_unknown_error_distinction: passed
284 |   pending_follow_up:
285 |     - provision_retention_maintenance_identity_and_approved_windows_holds_monitoring_recovery
286 |     - observability_exporter_collector_sampling_external_integration_adapter_client_metrics_and_managed_backend
287 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
288 |     - pilot_outcome_collection_and_calibration
289 |
290 | migrations:
291 |   immutable: true
292 |   manifest: packages/database/migrations/manifest.json
293 |   history_checksum_column: checksum_sha256_not_null
294 |   files:
295 |     - packages/database/migrations/0001_foundation.sql
296 |     - packages/database/migrations/0002_courier.sql
297 |     - packages/database/migrations/0003_risk.sql
298 |     - packages/database/migrations/0004_verification_events.sql
299 |     - packages/database/migrations/0005_durable_operations.sql
300 |     - packages/database/migrations/0006_browser_access.sql
301 |     - packages/database/migrations/0007_worker_leases.sql
302 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
303 |     - packages/database/migrations/0009_verification_delivery_queue.sql
304 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
305 |     - packages/database/migrations/0011_native_shadow_pilot.sql
306 |     - packages/database/migrations/0012_durable_work_replays.sql
307 |     - packages/database/migrations/0013_durable_work_archives.sql
308 |     - packages/database/migrations/0014_durable_trace_context.sql
309 |
310 | accepted_adrs:
311 |   - docs/adr/0006-production-deployment-topology.md
312 |   - docs/adr/0007-managed-postgresql-production-baseline.md
313 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
314 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
315 |   - docs/adr/0010-vendor-neutral-production-observability.md
316 |   - docs/adr/0011-selected-source-shadow-pilot.md
317 |   - docs/adr/0012-durable-work-dead-letter-operations.md
318 |
319 | external_dependencies:
320 |   - authorized_steadfast_test_account
321 |   - provider_authorization_review
322 |   - deployment_platform_account_region_and_budget
323 |   - managed_postgresql_provider_and_service_tier
324 |   - managed_secret_store_and_kms_vault_provider
325 |   - observability_backend_and_retention_policy
326 |   - otp_provider_account
327 |   - pilot_outcome_data
328 |
329 | next_milestone:
330 |   name: production-hardening-and-pilot-readiness
331 |   tasks:
332 |     - select_and_provision_accepted_infrastructure_providers
333 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
334 |     - validate_steadfast_with_an_authorized_account
335 |     - implement_the_selected_otp_provider_adapter
336 |     - add_distributed_cache_only_when_replica_coordination_requires_it
337 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
338 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
339 |     - calibrate_decisions_before_broad_automatic_blocking
340 |
341 | release_policy:
342 |   branch: main
343 |   before_push:
344 |     - npm_run_verify_passes
345 |     - documentation_and_tracker_are_current
346 |     - repository_review_is_clean
347 |   rules:
348 |     - no_force_push_to_main
349 |     - do_not_edit_applied_migrations
350 |     - use_descriptive_commits
351 |
352 | notes:
353 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
354 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
355 |   - github_connector_reports_public_visibility_while_expected_state_is_private
356 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
357 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
358 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
359 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
360 |   - webhook_event_payloads_do_not_include_raw_phone_values
361 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
362 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
363 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
364 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
365 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
366 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
367 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
368 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
369 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
370 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
371 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
372 |   - selected_otp_provider_module_and_credentials_remain_external
373 |   - migration_files_are_bound_to_a_committed_sha256_manifest
374 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
375 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
376 |   - migration_execution_uses_one_session_advisory_lock
377 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
378 |   - managed_provider_point_in_time_restore_drill_remains_external
379 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
380 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
381 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
382 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
383 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
384 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
385 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
386 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
387 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
388 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
389 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
390 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
391 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
392 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
393 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
394 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
395 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
396 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
397 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
398 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
399 |   - durable_replay_never_performs_provider_or_webhook_network_io
400 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
401 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
402 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
403 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
404 |   - structured_log_redaction_is_canonicalized_in_packages_observability
405 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
406 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
407 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
408 |   - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
409 |   - lease_renewal_interval_must_not_exceed_half_the_lease
410 |   - heartbeat_renewal_and_final_state_transitions_do_not_overlap
411 |   - durable_retention_cutoff_has_a_twenty_four_hour_minimum_safety_floor
412 |   - durable_retention_batches_are_globally_bounded_to_five_hundred
413 |   - completed_source_retention_baseline_is_thirty_days_pending_approval
414 |   - failed_source_retention_baseline_is_one_hundred_eighty_days_pending_approval
415 |   - archive_evidence_does_not_replace_backup_or_point_in_time_recovery
416 |   - vendor_neutral_metrics_use_only_finite_descriptor_owned_attributes
417 |   - api_metrics_use_method_canonical_route_and_status_class_only
418 |   - worker_metrics_use_worker_type_operation_and_outcome_only
419 |   - pro_context_was_refreshed_after_vendor_neutral_metrics_documentation
420 |   - update_this_file_after_every_material_milestone
421 |
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
