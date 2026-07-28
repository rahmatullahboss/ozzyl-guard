# Ozzyl Guard repository/provider/queue metrics verified continuation context

Generated: 2026-07-28T04:58:07.793Z
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
## docs/repository-provider-queue-metrics-verification-evidence
 M .ai-bridge/current-plan.md
 M .ai-bridge/implementation-status.md
 M docs/README.md
 M tracker.yml
```

## Recent Commits

```text
53b8820 (HEAD -> docs/repository-provider-queue-metrics-verification-evidence, origin/main, main) feat(observability): instrument durable operations (#36)
2e71b97 docs: record metrics CI evidence (#35)
02be8d2 feat(observability): add safe application metrics (#34)
0851020 docs: record retention CI evidence (#33)
8788da4 feat(database): archive terminal durable work (#32)
f19e9b4 docs: record worker heartbeat CI evidence (#31)
6ab01a7 feat(workers): renew durable job leases (#30)
3c31ae7 docs: record API observability CI evidence (#29)
```

## Git Diff

```diff
diff --git a/.ai-bridge/current-plan.md b/.ai-bridge/current-plan.md
index 1ca94b0..7ffc671 100644
--- a/.ai-bridge/current-plan.md
+++ b/.ai-bridge/current-plan.md
@@ -135,15 +135,15 @@ Concrete provider selection and provisioning remain external production work.

 - Formatting check: passed
 - ESLint with zero warnings: passed
-- Thirteen migration files ordered/non-empty/non-destructive: passed locally; previous merged baseline passed remotely; current source-branch CI is pending
-- First migration apply and immediate migration replay: previous merged baseline passed remotely
-- Architecture import boundaries: passed locally
-- Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
-- Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
-- Repository assertion inventory: 168 source assertions; previous merged remote baseline is 161; current PostgreSQL-integrated source-branch CI is pending
-- Metrics coverage: eleven shared observability assertions, API metrics, four worker/provider integrations, and three PostgreSQL aggregate queue snapshot tests are present; remote execution is pending
-- Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
-- WooCommerce PHP syntax: previous merged baseline passed remotely; current source-branch validation is pending
+- Thirteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
+- First migration apply and immediate migration replay: passed
+- Architecture import boundaries: passed locally and in source-branch CI
+- Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
+- Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
+- Repository assertions: 168 passed in PostgreSQL-integrated source-branch CI
+- Metrics coverage: eleven shared observability assertions, four worker/provider integrations, and three PostgreSQL aggregate queue snapshot tests passed locally and in source-branch CI
+- Production builds: 20 of 20 workspaces passed locally and in source-branch CI
+- WooCommerce PHP syntax: passed in source-branch CI
 - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
 - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
 - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
@@ -180,11 +180,13 @@ Concrete provider selection and provisioning remain external production work.
 - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
 - Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
 - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
+- Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
+- The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
 - Canonical documentation links before this slice: zero known broken internal links
 - `tracker.yml` YAML structure remains valid
 - Prohibited source-pattern search: no matches

-The repository-local continuation exporter was refreshed after repository/provider/queue metrics documentation and tracker updates were finalized.
+The repository-local continuation exporter was refreshed after the merged repository/provider/queue metrics verification evidence was recorded.

 ## Next production milestone

diff --git a/.ai-bridge/implementation-status.md b/.ai-bridge/implementation-status.md
index 3b0defd..bfd42c6 100644
--- a/.ai-bridge/implementation-status.md
+++ b/.ai-bridge/implementation-status.md
@@ -80,15 +80,15 @@ Applied migrations must remain immutable.

 - `npm run format:check`: passed
 - `npm run lint`: passed with zero warnings
-- `npm run db:check`: thirteen migrations and committed SHA-256 manifest validated locally; previous merged baseline passed remotely; current source-branch CI is pending
-- initial migration apply: previous merged baseline passed with non-null history checksums
-- immediate migration replay: previous merged baseline passed as a clean no-op
-- `npm run db:integrity`: previous merged baseline passed complete contiguous history and checksums
-- `npm run db:restore-rehearsal`: previous merged baseline passed clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay
-- `npm run check:architecture`: passed locally
-- `npm run typecheck`: 20/20 workspaces passed locally; current source-branch CI is pending
-- `npm run test`: 31/31 Turbo tasks passed locally; source inventory is 168 assertions and previous merged remote baseline is 161
-- `npm run build`: 20/20 workspace builds passed locally; current source-branch CI is pending
+- `npm run db:check`: thirteen migrations and committed SHA-256 manifest validated locally and in source-branch CI
+- initial migration apply: passed with non-null history checksums
+- immediate migration replay: passed as a clean no-op
+- `npm run db:integrity`: complete contiguous history and checksums passed
+- `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
+- `npm run check:architecture`: passed locally and in source-branch CI
+- `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
+- `npm run test`: 31/31 Turbo tasks and 168 assertions passed in PostgreSQL-integrated source-branch CI
+- `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
 - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 - Observability tests prove fixed log metadata/redaction plus metric descriptor validation, finite categorical attributes, high-cardinality and secret-like key rejection, exporter-neutral JSON points, worker helper output, and sink-failure isolation
 - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, bounded request count/duration metrics, safe unhandled-error serialization, and request availability during log/metric sink failure
@@ -143,12 +143,14 @@ Applied migrations must remain immutable.
 - The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
 - Vendor-neutral metrics final run `30327450803`, job `90175680964`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 161 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
 - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
+- Repository/provider/queue metrics final run `30329769797`, job `90182279338`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
+- The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
 - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
 - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
 - Previous canonical documentation checks found zero broken internal links
 - Prohibited insecure-pattern scan: zero matches

-The repository-local exporter was refreshed after repository/provider/queue metrics documentation and tracker updates were finalized. Current source-branch remote CI is pending.
+The repository-local exporter was refreshed after the merged repository/provider/queue metrics verification evidence was recorded.

 ## External blockers and production requirements

diff --git a/docs/README.md b/docs/README.md
index bc3f773..09a5f2e 100644
--- a/docs/README.md
+++ b/docs/README.md
@@ -4,7 +4,7 @@ This directory is the long-term product and engineering source of truth. New dev

 ## Current verified milestone

-The vendor-neutral application-metrics milestone is merged on `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`; its feature CI run `30327450803`, job `90175680964`, passed thirteen migrations, 20 typechecks, 31 Turbo tasks with 161 assertions, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. The current repository/provider/queue metrics source branch adds durable transition timing, broad provider-call outcomes, and aggregate queue depth/oldest-ready-age without identifiers, tenant scope, contact data, credentials, URLs, vendor names, payloads, responses, or arbitrary error labels. PostgreSQL-integrated source-branch CI evidence is pending.
+The repository/provider/queue metrics milestone is merged on `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`. Feature CI run `30329769797`, job `90182279338`, passed thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. Durable courier, webhook, and verification repositories now expose bounded transition timing and aggregate queue depth/oldest-ready-age; courier API/browser, webhook HTTP, and OTP delivery boundaries expose broad provider-call outcomes without identifiers, tenant scope, contact data, credentials, URLs, vendor names, payloads, responses, or arbitrary error labels.

 ## Architecture

diff --git a/tracker.yml b/tracker.yml
index 432b26a..77e9c6a 100644
--- a/tracker.yml
+++ b/tracker.yml
@@ -180,22 +180,21 @@ implemented:
 verification:
   command: npm run verify
   last_verified: 2026-07-28
-  status: local_passed_remote_ci_pending
+  status: passed
   results:
     migrations: 13_of_13_with_sha256_manifest
     migration_replay: passed
     migration_history_integrity: passed
     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
-    architecture_boundaries: passed_locally_remote_ci_pending
-    typecheck: 20_of_20_passed_locally_remote_ci_pending
-    test_tasks: 31_of_31_passed_locally_remote_ci_pending
-    source_assertions: 168_total
-    previous_main_remote_assertions: 161_passed
+    architecture_boundaries: passed
+    typecheck: 20_of_20_passed
+    test_tasks: 31_of_31_passed
+    remote_assertions: 168_passed
     migration_integrity_tests: 7_of_7_passed
     postgresql_concurrency_tests: 7_of_7_passed
-    postgresql_courier_worker_lease_tests: 7_source_tests_remote_ci_pending
-    postgresql_webhook_worker_lease_tests: 7_source_tests_remote_ci_pending
-    postgresql_verification_worker_lease_tests: 7_source_tests_remote_ci_pending
+    postgresql_courier_worker_lease_tests: 7_of_7_passed
+    postgresql_webhook_worker_lease_tests: 7_of_7_passed
+    postgresql_verification_worker_lease_tests: 7_of_7_passed
     verification_payload_validation_tests: 3_of_3_passed
     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
     postgresql_runtime_role_tests: 8_of_8_passed
@@ -208,45 +207,47 @@ verification:
     native_shadow_total_tests: 28_of_28_passed
     durable_dead_letter_postgresql_tests: 5_of_5_passed
     browser_dead_letter_api_tests: 3_of_3_passed
-    observability_tests: 11_of_11_passed_locally
+    observability_tests: 11_of_11_passed
     api_observability_tests: 4_of_4_passed
     api_metric_integration_tests: 1_of_1_passed
-    worker_metric_integration_tests: 4_of_4_passed_locally
-    provider_metric_integration_tests: 4_of_4_passed_locally
-    repository_metric_helper_tests: 3_of_3_passed_locally
-    queue_snapshot_postgresql_tests: 3_source_tests_remote_ci_pending
+    worker_metric_integration_tests: 4_of_4_passed
+    provider_metric_integration_tests: 4_of_4_passed
+    repository_metric_helper_tests: 3_of_3_passed
+    queue_snapshot_postgresql_tests: 3_of_3_passed
     lease_heartbeat_unit_tests: 3_of_3_passed
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
-    canonical_main_sync: verified_at_2e71b970e8084fa5e9baa6d3adf74f261301b177
-    local_exporter: completed_after_repository_provider_queue_metrics_docs
+    canonical_main_sync: verified_at_53b882028292a2a6c0a71da19540dba97c95ea9f
+    local_exporter: completed_after_merged_repository_provider_queue_metrics_ci_evidence
   remote_ci:
     status: passed
-    run_id: 30327450803
-    job_id: 90175680964
+    run_id: 30329769797
+    job_id: 90182279338
     job: verify
-    tested_head: 2d3a0dd40f0f9be8d8749f3ef22f9f2448967206
-    merged_main_commit: 02be8d2aae6c65a4ddce82f1a7a260993ad1252f
+    tested_head: 027f33a8aa5f4d2676f5b07fd8991fefc1152ed4
+    merged_main_commit: 53b882028292a2a6c0a71da19540dba97c95ea9f
     completed: 2026-07-28
-    steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_sixty_one_assertions_twenty_builds_php_all_passed
+    steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_sixty_eight_assertions_twenty_builds_php_all_passed
   source_validation:
-    status: local_passed_remote_ci_pending
+    status: passed
+    run_id: 30329769797
+    job_id: 90182279338
     branch: feat/repository-provider-queue-metrics
-    tested_head: pending_feature_commit
+    tested_head: 027f33a8aa5f4d2676f5b07fd8991fefc1152ed4
     completed: 2026-07-28
-    steps: format_lint_thirteen_migration_manifest_architecture_twenty_typechecks_thirty_one_test_tasks_twenty_builds_audit_php_yaml_links_and_secret_scan_passed_locally
+    steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_sixty_eight_assertions_twenty_builds_php_all_passed
     shared_observability_tests: 11_of_11_passed
     provider_metric_integrations: 4_of_4_passed
     repository_operation_metric_tests: passed
-    queue_snapshot_postgresql_tests: 3_source_tests_remote_ci_pending
+    queue_snapshot_postgresql_tests: 3_of_3_passed
     metric_sink_failure_isolation: passed
   pending_follow_up:
     - provision_retention_maintenance_identity_and_approved_windows_holds_monitoring_recovery
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
138 | - Thirteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
139 | - First migration apply and immediate migration replay: passed
140 | - Architecture import boundaries: passed locally and in source-branch CI
141 | - Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
142 | - Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
143 | - Repository assertions: 168 passed in PostgreSQL-integrated source-branch CI
144 | - Metrics coverage: eleven shared observability assertions, four worker/provider integrations, and three PostgreSQL aggregate queue snapshot tests passed locally and in source-branch CI
145 | - Production builds: 20 of 20 workspaces passed locally and in source-branch CI
146 | - WooCommerce PHP syntax: passed in source-branch CI
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
183 | - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
184 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
185 | - Canonical documentation links before this slice: zero known broken internal links
186 | - `tracker.yml` YAML structure remains valid
187 | - Prohibited source-pattern search: no matches
188 |
189 | The repository-local continuation exporter was refreshed after the merged repository/provider/queue metrics verification evidence was recorded.
190 |
191 | ## Next production milestone
192 |
193 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
194 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
195 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
196 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
197 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
198 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
199 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
200 |
201 | ## External blockers
202 |
203 | - Authorized Steadfast merchant/test credentials
204 | - Steadfast provider-terms and merchant-authorization review
205 | - Deployment platform, account, primary region, and budget
206 | - Managed PostgreSQL provider and service tier
207 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
208 | - Managed secret store and KMS/vault provider
209 | - OpenTelemetry exporter/collector, distributed tracing, broader API/domain repository metrics, managed observability backend, dashboards, alerts, and retention policy
210 | - OTP provider account and credentials
211 | - Production account recovery/MFA or managed identity-provider decision
212 | - Repository visibility correction from currently reported public to expected private
213 | - Pilot outcome data for false-positive/false-negative calibration
214 |
215 | ## Non-negotiable continuation rules
216 |
217 | - Do not add a second risk engine.
218 | - Do not call providers from the risk engine or synchronous checkout path.
219 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
220 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
221 | - Do not use API keys as dashboard user sessions.
222 | - Require organization/store scope in all merchant repositories, events, and jobs.
223 | - Add new migrations; never edit applied migrations.
224 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
225 | - Keep Redis/cache state non-authoritative.
226 | - Keep unknown/provider failure explicit and policy-controlled.
227 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
228 |

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

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, docs/README.md, tracker.yml
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, docs/README.md, eslint.config.js, package.json, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, tracker.yml

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

Bytes: 3323
SHA-256: 6747cb369b751cf3809768cba3b8645e0da6bf6afa2f7a79a4370fe6a2878278
Lines: 1-56 of 56

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The repository/provider/queue metrics milestone is merged on `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`. Feature CI run `30329769797`, job `90182279338`, passed thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. Durable courier, webhook, and verification repositories now expose bounded transition timing and aggregate queue depth/oldest-ready-age; courier API/browser, webhook HTTP, and OTP delivery boundaries expose broad provider-call outcomes without identifiers, tenant scope, contact data, credentials, URLs, vendor names, payloads, responses, or arbitrary error labels.
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

Bytes: 26976
SHA-256: e95655e2a088f817676f5b81ed02cab500c744066e8153df6edaee097d063680
Lines: 1-228 of 228

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
138 | - Thirteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
139 | - First migration apply and immediate migration replay: passed
140 | - Architecture import boundaries: passed locally and in source-branch CI
141 | - Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
142 | - Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
143 | - Repository assertions: 168 passed in PostgreSQL-integrated source-branch CI
144 | - Metrics coverage: eleven shared observability assertions, four worker/provider integrations, and three PostgreSQL aggregate queue snapshot tests passed locally and in source-branch CI
145 | - Production builds: 20 of 20 workspaces passed locally and in source-branch CI
146 | - WooCommerce PHP syntax: passed in source-branch CI
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
183 | - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
184 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
185 | - Canonical documentation links before this slice: zero known broken internal links
186 | - `tracker.yml` YAML structure remains valid
187 | - Prohibited source-pattern search: no matches
188 |
189 | The repository-local continuation exporter was refreshed after the merged repository/provider/queue metrics verification evidence was recorded.
190 |
191 | ## Next production milestone
192 |
193 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
194 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
195 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
196 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
197 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
198 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
199 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
200 |
201 | ## External blockers
202 |
203 | - Authorized Steadfast merchant/test credentials
204 | - Steadfast provider-terms and merchant-authorization review
205 | - Deployment platform, account, primary region, and budget
206 | - Managed PostgreSQL provider and service tier
207 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
208 | - Managed secret store and KMS/vault provider
209 | - OpenTelemetry exporter/collector, distributed tracing, broader API/domain repository metrics, managed observability backend, dashboards, alerts, and retention policy
210 | - OTP provider account and credentials
211 | - Production account recovery/MFA or managed identity-provider decision
212 | - Repository visibility correction from currently reported public to expected private
213 | - Pilot outcome data for false-positive/false-negative calibration
214 |
215 | ## Non-negotiable continuation rules
216 |
217 | - Do not add a second risk engine.
218 | - Do not call providers from the risk engine or synchronous checkout path.
219 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
220 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
221 | - Do not use API keys as dashboard user sessions.
222 | - Require organization/store scope in all merchant repositories, events, and jobs.
223 | - Add new migrations; never edit applied migrations.
224 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
225 | - Keep Redis/cache state non-authoritative.
226 | - Keep unknown/provider failure explicit and policy-controlled.
227 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
228 |
```

### .ai-bridge/implementation-status.md

Bytes: 27957
SHA-256: 11d36c1a28160afbee381eaf07ef3258b5fe73c8e5ed539365509ad844c343ed
Lines: 1-189 of 189

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
 83 | - `npm run db:check`: thirteen migrations and committed SHA-256 manifest validated locally and in source-branch CI
 84 | - initial migration apply: passed with non-null history checksums
 85 | - immediate migration replay: passed as a clean no-op
 86 | - `npm run db:integrity`: complete contiguous history and checksums passed
 87 | - `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
 88 | - `npm run check:architecture`: passed locally and in source-branch CI
 89 | - `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
 90 | - `npm run test`: 31/31 Turbo tasks and 168 assertions passed in PostgreSQL-integrated source-branch CI
 91 | - `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
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
146 | - Repository/provider/queue metrics final run `30329769797`, job `90182279338`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
147 | - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
148 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
149 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
150 | - Previous canonical documentation checks found zero broken internal links
151 | - Prohibited insecure-pattern scan: zero matches
152 |
153 | The repository-local exporter was refreshed after the merged repository/provider/queue metrics verification evidence was recorded.
154 |
155 | ## External blockers and production requirements
156 |
157 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
158 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
159 | - Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
160 | - Managed secret store and KMS/vault provider
161 | - OpenTelemetry exporter/collector, distributed tracing, broader API/domain repository metrics, managed observability backend, retention, dashboards, alerts, and incident channels
162 | - Optional Redis-compatible cache only when distributed coordination is required
163 | - Authorized Steadfast test/merchant account
164 | - Provider-terms and merchant-authorization review
165 | - OTP provider selection/account
166 | - Production account recovery/MFA or managed identity-provider decision
167 | - Pilot merchants and verified outcome data for calibration
168 |
169 | ## Remaining risks
170 |
171 | - Steadfast UI/internal endpoint changes can break automation.
172 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
173 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
174 | - In-process API and browser-session rate limiting is not distributed across replicas.
175 | - Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
176 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
177 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
178 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
179 | - GitHub currently reports public repository visibility although the expected policy is private.
180 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
181 | - Structured logs plus finite-cardinality API, private-worker, durable-repository, provider-call, and aggregate queue metrics are implemented, but broader API/domain repository metrics, traces, exporters/collector, dashboards, alerts, managed backend, and telemetry retention are not yet implemented.
182 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
183 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
184 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
185 |
186 | ## Next milestone
187 |
188 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
189 |
```

### tracker.yml

Bytes: 20756
SHA-256: df6806728455cafcb68e51c56f09581c599dc4da439561258c6da99440b9a0fc
Lines: 1-388 of 388

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
183 |   status: passed
184 |   results:
185 |     migrations: 13_of_13_with_sha256_manifest
186 |     migration_replay: passed
187 |     migration_history_integrity: passed
188 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
189 |     architecture_boundaries: passed
190 |     typecheck: 20_of_20_passed
191 |     test_tasks: 31_of_31_passed
192 |     remote_assertions: 168_passed
193 |     migration_integrity_tests: 7_of_7_passed
194 |     postgresql_concurrency_tests: 7_of_7_passed
195 |     postgresql_courier_worker_lease_tests: 7_of_7_passed
196 |     postgresql_webhook_worker_lease_tests: 7_of_7_passed
197 |     postgresql_verification_worker_lease_tests: 7_of_7_passed
198 |     verification_payload_validation_tests: 3_of_3_passed
199 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
200 |     postgresql_runtime_role_tests: 8_of_8_passed
201 |     managed_envelope_tests: 11_of_11_passed
202 |     native_shadow_adapter_tests: 10_of_10_passed
203 |     native_shadow_api_tests: 7_of_7_passed
204 |     native_shadow_postgresql_tests: 7_of_7_passed
205 |     native_shadow_browser_tests: 2_of_2_passed
206 |     native_shadow_sdk_tests: 2_of_2_passed
207 |     native_shadow_total_tests: 28_of_28_passed
208 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
209 |     browser_dead_letter_api_tests: 3_of_3_passed
210 |     observability_tests: 11_of_11_passed
211 |     api_observability_tests: 4_of_4_passed
212 |     api_metric_integration_tests: 1_of_1_passed
213 |     worker_metric_integration_tests: 4_of_4_passed
214 |     provider_metric_integration_tests: 4_of_4_passed
215 |     repository_metric_helper_tests: 3_of_3_passed
216 |     queue_snapshot_postgresql_tests: 3_of_3_passed
217 |     lease_heartbeat_unit_tests: 3_of_3_passed
218 |     provider_abort_on_lease_loss_tests: 3_of_3_passed
219 |     durable_retention_input_tests: 4_of_4_passed
220 |     durable_retention_postgresql_tests: 4_of_4_passed
221 |     builds: 20_of_20_passed
222 |     php_syntax: passed
223 |     high_critical_dependency_check: passed
224 |     moderate_dependency_findings: 5
225 |     documentation_links: 61_reviewed_0_known_broken
226 |   continuation_bundle:
227 |     status: refreshed_locally
228 |     canonical_main_sync: verified_at_53b882028292a2a6c0a71da19540dba97c95ea9f
229 |     local_exporter: completed_after_merged_repository_provider_queue_metrics_ci_evidence
230 |   remote_ci:
231 |     status: passed
232 |     run_id: 30329769797
233 |     job_id: 90182279338
234 |     job: verify
235 |     tested_head: 027f33a8aa5f4d2676f5b07fd8991fefc1152ed4
236 |     merged_main_commit: 53b882028292a2a6c0a71da19540dba97c95ea9f
237 |     completed: 2026-07-28
238 |     steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_sixty_eight_assertions_twenty_builds_php_all_passed
239 |   source_validation:
240 |     status: passed
241 |     run_id: 30329769797
242 |     job_id: 90182279338
243 |     branch: feat/repository-provider-queue-metrics
244 |     tested_head: 027f33a8aa5f4d2676f5b07fd8991fefc1152ed4
245 |     completed: 2026-07-28
246 |     steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_sixty_eight_assertions_twenty_builds_php_all_passed
247 |     shared_observability_tests: 11_of_11_passed
248 |     provider_metric_integrations: 4_of_4_passed
249 |     repository_operation_metric_tests: passed
250 |     queue_snapshot_postgresql_tests: 3_of_3_passed
251 |     metric_sink_failure_isolation: passed
252 |   pending_follow_up:
253 |     - provision_retention_maintenance_identity_and_approved_windows_holds_monitoring_recovery
254 |     - observability_traces_exporter_collector_broader_api_domain_repository_metrics_and_managed_backend
255 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
256 |     - pilot_outcome_collection_and_calibration
257 |
258 | migrations:
259 |   immutable: true
260 |   manifest: packages/database/migrations/manifest.json
261 |   history_checksum_column: checksum_sha256_not_null
262 |   files:
263 |     - packages/database/migrations/0001_foundation.sql
264 |     - packages/database/migrations/0002_courier.sql
265 |     - packages/database/migrations/0003_risk.sql
266 |     - packages/database/migrations/0004_verification_events.sql
267 |     - packages/database/migrations/0005_durable_operations.sql
268 |     - packages/database/migrations/0006_browser_access.sql
269 |     - packages/database/migrations/0007_worker_leases.sql
270 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
271 |     - packages/database/migrations/0009_verification_delivery_queue.sql
272 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
273 |     - packages/database/migrations/0011_native_shadow_pilot.sql
274 |     - packages/database/migrations/0012_durable_work_replays.sql
275 |     - packages/database/migrations/0013_durable_work_archives.sql
276 |
277 | accepted_adrs:
278 |   - docs/adr/0006-production-deployment-topology.md
279 |   - docs/adr/0007-managed-postgresql-production-baseline.md
280 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
281 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
282 |   - docs/adr/0010-vendor-neutral-production-observability.md
283 |   - docs/adr/0011-selected-source-shadow-pilot.md
284 |   - docs/adr/0012-durable-work-dead-letter-operations.md
285 |
286 | external_dependencies:
287 |   - authorized_steadfast_test_account
288 |   - provider_authorization_review
289 |   - deployment_platform_account_region_and_budget
290 |   - managed_postgresql_provider_and_service_tier
291 |   - managed_secret_store_and_kms_vault_provider
292 |   - observability_backend_and_retention_policy
293 |   - otp_provider_account
294 |   - pilot_outcome_data
295 |
296 | next_milestone:
297 |   name: production-hardening-and-pilot-readiness
298 |   tasks:
299 |     - select_and_provision_accepted_infrastructure_providers
300 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
301 |     - validate_steadfast_with_an_authorized_account
302 |     - implement_the_selected_otp_provider_adapter
303 |     - add_distributed_cache_only_when_replica_coordination_requires_it
304 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
305 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
306 |     - calibrate_decisions_before_broad_automatic_blocking
307 |
308 | release_policy:
309 |   branch: main
310 |   before_push:
311 |     - npm_run_verify_passes
312 |     - documentation_and_tracker_are_current
313 |     - repository_review_is_clean
314 |   rules:
315 |     - no_force_push_to_main
316 |     - do_not_edit_applied_migrations
317 |     - use_descriptive_commits
318 |
319 | notes:
320 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
321 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
322 |   - github_connector_reports_public_visibility_while_expected_state_is_private
323 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
324 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
325 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
326 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
327 |   - webhook_event_payloads_do_not_include_raw_phone_values
328 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
329 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
330 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
331 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
332 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
333 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
334 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
335 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
336 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
337 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
338 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
339 |   - selected_otp_provider_module_and_credentials_remain_external
340 |   - migration_files_are_bound_to_a_committed_sha256_manifest
341 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
342 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
343 |   - migration_execution_uses_one_session_advisory_lock
344 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
345 |   - managed_provider_point_in_time_restore_drill_remains_external
346 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
347 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
348 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
349 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
350 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
351 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
352 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
353 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
354 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
355 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
356 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
357 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
358 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
359 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
360 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
361 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
362 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
363 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
364 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
365 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
366 |   - durable_replay_never_performs_provider_or_webhook_network_io
367 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
368 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
369 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
370 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
371 |   - structured_log_redaction_is_canonicalized_in_packages_observability
372 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
373 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
374 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
375 |   - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
376 |   - lease_renewal_interval_must_not_exceed_half_the_lease
377 |   - heartbeat_renewal_and_final_state_transitions_do_not_overlap
378 |   - durable_retention_cutoff_has_a_twenty_four_hour_minimum_safety_floor
379 |   - durable_retention_batches_are_globally_bounded_to_five_hundred
380 |   - completed_source_retention_baseline_is_thirty_days_pending_approval
381 |   - failed_source_retention_baseline_is_one_hundred_eighty_days_pending_approval
382 |   - archive_evidence_does_not_replace_backup_or_point_in_time_recovery
383 |   - vendor_neutral_metrics_use_only_finite_descriptor_owned_attributes
384 |   - api_metrics_use_method_canonical_route_and_status_class_only
385 |   - worker_metrics_use_worker_type_operation_and_outcome_only
386 |   - pro_context_was_refreshed_after_vendor_neutral_metrics_documentation
387 |   - update_this_file_after_every_material_milestone
388 |
```

## Skipped Files

None.
