# Ozzyl Guard Distributed Trace Context Verification Evidence

Generated: 2026-07-28T09:08:40.865Z
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
## docs/distributed-trace-context-verification-evidence
 M .ai-bridge/current-plan.md
 M .ai-bridge/implementation-status.md
 M docs/README.md
 M tracker.yml
```

## Recent Commits

```text
0b6125a (HEAD -> docs/distributed-trace-context-verification-evidence, origin/main, main) feat(observability): propagate durable trace context (#38)
6425136 docs: record durable metrics CI evidence (#37)
53b8820 feat(observability): instrument durable operations (#36)
2e71b97 docs: record metrics CI evidence (#35)
02be8d2 feat(observability): add safe application metrics (#34)
0851020 docs: record retention CI evidence (#33)
8788da4 feat(database): archive terminal durable work (#32)
f19e9b4 docs: record worker heartbeat CI evidence (#31)
```

## Git Diff

```diff
diff --git a/.ai-bridge/current-plan.md b/.ai-bridge/current-plan.md
index 39ae3b0..5013aa4 100644
--- a/.ai-bridge/current-plan.md
+++ b/.ai-bridge/current-plan.md
@@ -142,15 +142,15 @@ Concrete provider selection and provisioning remain external production work.

 - Formatting check: passed
 - ESLint with zero warnings: passed
-- Fourteen migration files ordered/non-empty/non-destructive: passed locally; current source-branch CI is pending
-- First migration apply and immediate migration replay: previous merged baseline passed remotely; migration 0014 source-branch CI is pending
-- Architecture import boundaries: passed locally; current source-branch CI is pending
-- Typecheck: 20 of 20 workspaces passed locally; current source-branch CI is pending
-- Test/build dependency tasks: 31 of 31 passed locally; current source-branch CI is pending
-- Repository assertion inventory: 180 source tests; previous merged remote baseline is 168; current PostgreSQL-integrated source-branch CI is pending
-- Tracing coverage: 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests are present; real PostgreSQL execution is pending CI
-- Production builds: 20 of 20 workspaces passed locally; current source-branch CI is pending
-- WooCommerce PHP syntax: passed locally; current source-branch CI is pending
+- Fourteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
+- First migration apply and immediate migration replay: passed with migration 0014 and non-null history checksums
+- Architecture import boundaries: passed locally and in source-branch CI
+- Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
+- Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
+- Repository tests: 180 passed in PostgreSQL-integrated source-branch CI
+- Tracing coverage: 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests passed
+- Production builds: 20 of 20 workspaces passed locally and in source-branch CI
+- WooCommerce PHP syntax: passed locally and in source-branch CI
 - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
 - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
 - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
@@ -189,11 +189,13 @@ Concrete provider selection and provisioning remain external production work.
 - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
 - Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
 - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
+- Distributed trace-context final CI run `30344660685`, job `90227950094`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 180 tests, 20 builds, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
+- The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
 - Canonical documentation links before this slice: zero known broken internal links
 - `tracker.yml` YAML structure remains valid
 - Prohibited source-pattern search: no matches

-The repository-local continuation exporter was refreshed after distributed trace-context documentation and tracker updates were finalized.
+The repository-local continuation exporter was refreshed after the merged distributed trace-context verification evidence was recorded.

 ## Next production milestone

diff --git a/.ai-bridge/implementation-status.md b/.ai-bridge/implementation-status.md
index a57ea50..b6c9899 100644
--- a/.ai-bridge/implementation-status.md
+++ b/.ai-bridge/implementation-status.md
@@ -81,22 +81,22 @@ Applied migrations must remain immutable.

 - `npm run format:check`: passed
 - `npm run lint`: passed with zero warnings
-- `npm run db:check`: fourteen migrations and committed SHA-256 manifest validated locally; current source-branch CI is pending
-- initial migration apply: previous merged baseline passed with non-null history checksums; migration 0014 apply is pending source-branch CI
-- immediate migration replay: previous merged baseline passed as a clean no-op; migration 0014 replay is pending source-branch CI
-- `npm run db:integrity`: previous merged baseline passed complete contiguous history and checksums
-- `npm run db:restore-rehearsal`: previous merged baseline passed clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay
-- `npm run check:architecture`: passed locally; current source-branch CI is pending
-- `npm run typecheck`: 20/20 workspaces passed locally; current source-branch CI is pending
-- `npm run test`: 31/31 Turbo tasks passed locally; source inventory is 180 tests and previous merged remote baseline is 168
-- `npm run build`: 20/20 workspace builds passed locally; current source-branch CI is pending
+- `npm run db:check`: fourteen migrations and committed SHA-256 manifest validated locally and in source-branch CI
+- initial migration apply: passed with migration 0014 and non-null history checksums
+- immediate migration replay: passed as a clean no-op
+- `npm run db:integrity`: complete contiguous history and checksums passed
+- `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
+- `npm run check:architecture`: passed locally and in source-branch CI
+- `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
+- `npm run test`: 31/31 Turbo tasks and 180 tests passed in PostgreSQL-integrated source-branch CI
+- `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
 - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 - Observability tests prove fixed log metadata/redaction, finite metric descriptors, strict W3C trace parsing/formatting/persistence, finite span attributes, one-shot completion, exporter-neutral JSON points, and sink/clock/ID-generation failure isolation
 - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, bounded request count/duration metrics, safe unhandled-error serialization, and request availability during log/metric sink failure
 - Courier-session, courier-sync, event, and verification tests prove bounded worker/provider count/duration metrics omit account/job/event/endpoint/phone/OTP/credential/URL/vendor/error-text values; shared tests cover repository outcomes, claim failures, aggregate gauges, and telemetry isolation
 - Courier, webhook, and verification PostgreSQL suites include aggregate queue-depth and oldest-ready-age snapshots without row or tenant identifiers
 - API and four worker tests prove server→producer→consumer→provider trace lineage while omitting request/tenant/job/event/account/phone/OTP/credential/URL/payload/error values
-- Three PostgreSQL durable-context tests cover valid/null round-trip, malformed context rejection across all three durable tables, and all-zero trace/span rejection; real execution is pending source-branch CI
+- Three PostgreSQL durable-context tests passed for valid/null round-trip, malformed context rejection across all three durable tables, and all-zero trace/span rejection
 - Lease-heartbeat tests prove non-overlapping renewal, owner/expiry enforcement, abort-on-renewal-loss propagation, and heartbeat drain before final courier/webhook/verification transitions
 - Retention tests prove cutoff/status/batch/run-ID validation, terminal-only preview, payload-free evidence, archive-before-delete atomicity, ineligible-row preservation, replay-ledger preservation, idempotent reruns, and runtime archive-access denial
 - Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
@@ -148,12 +148,14 @@ Applied migrations must remain immutable.
 - The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
 - Repository/provider/queue metrics final run `30329769797`, job `90182279338`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
 - The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
+- Distributed trace-context final run `30344660685`, job `90227950094`: GitGuardian, fourteen migrations, 20 typechecks, 31 Turbo tasks with 180 tests, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
+- The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
 - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
 - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
 - Previous canonical documentation checks found zero broken internal links
 - Prohibited insecure-pattern scan: zero matches

-The repository-local exporter was refreshed after distributed trace-context documentation and tracker updates were finalized. Current source-branch remote CI is pending.
+The repository-local exporter was refreshed after the merged distributed trace-context verification evidence was recorded.

 ## External blockers and production requirements

diff --git a/docs/README.md b/docs/README.md
index 5e90b26..cc08b04 100644
--- a/docs/README.md
+++ b/docs/README.md
@@ -4,7 +4,7 @@ This directory is the long-term product and engineering source of truth. New dev

 ## Current verified milestone

-The repository/provider/queue metrics milestone is merged on `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`; feature CI run `30329769797`, job `90182279338`, passed thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. The current distributed trace-context source branch adds strict W3C API server/producer spans, durable courier/webhook/verification context columns, worker consumer/provider child spans, and verification-failure webhook continuation without business identifiers, contact data, credentials, URLs, payloads, responses, or arbitrary error attributes. Fourteen-migration PostgreSQL-integrated source-branch CI evidence is pending.
+The distributed trace-context milestone is merged on `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`. Feature CI run `30344660685`, job `90227950094`, passed fourteen migrations, 20 typechecks, 31 Turbo tasks with 180 tests, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. Strict W3C API server/producer spans now continue through validated nullable courier, webhook, and verification durable context into worker consumer/provider child spans; verification-failure webhook creation preserves the active trace without business identifiers, contact data, credentials, URLs, payloads, responses, vendor names, or arbitrary error attributes.

 ## Architecture

diff --git a/tracker.yml b/tracker.yml
index 9252e70..36929c2 100644
--- a/tracker.yml
+++ b/tracker.yml
@@ -190,17 +190,16 @@ implemented:
 verification:
   command: npm run verify
   last_verified: 2026-07-28
-  status: local_passed_remote_ci_pending
+  status: passed
   results:
     migrations: 14_of_14_with_sha256_manifest
-    migration_replay: previous_main_passed_source_ci_pending
-    migration_history_integrity: previous_main_passed_source_ci_pending
-    clean_restore_rehearsal: previous_main_passed_source_ci_pending
-    architecture_boundaries: passed_locally_remote_ci_pending
-    typecheck: 20_of_20_passed_locally_remote_ci_pending
-    test_tasks: 31_of_31_passed_locally_remote_ci_pending
-    source_tests: 180_total
-    previous_main_remote_tests: 168_passed
+    migration_replay: passed
+    migration_history_integrity: passed
+    clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
+    architecture_boundaries: passed
+    typecheck: 20_of_20_passed
+    test_tasks: 31_of_31_passed
+    remote_tests: 180_passed
     migration_integrity_tests: 7_of_7_passed
     postgresql_concurrency_tests: 7_of_7_passed
     postgresql_courier_worker_lease_tests: 7_of_7_passed
@@ -218,48 +217,50 @@ verification:
     native_shadow_total_tests: 28_of_28_passed
     durable_dead_letter_postgresql_tests: 5_of_5_passed
     browser_dead_letter_api_tests: 3_of_3_passed
-    observability_tests: 18_of_18_passed_locally
+    observability_tests: 18_of_18_passed
     api_observability_tests: 4_of_4_passed
     api_metric_integration_tests: 1_of_1_passed
     worker_metric_integration_tests: 4_of_4_passed
     provider_metric_integration_tests: 4_of_4_passed
     repository_metric_helper_tests: 3_of_3_passed
     queue_snapshot_postgresql_tests: 3_of_3_passed
-    api_trace_lineage_tests: 1_of_1_passed_locally
-    worker_trace_lineage_integrations: 4_of_4_passed_locally
-    durable_trace_context_postgresql_tests: 3_source_tests_ci_pending
+    api_trace_lineage_tests: 1_of_1_passed
+    worker_trace_lineage_integrations: 4_of_4_passed
+    durable_trace_context_postgresql_tests: 3_of_3_passed
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
-    canonical_main_sync: verified_at_642513612e37f11f739d1bc3962c196e05483b09
-    local_exporter: completed_after_distributed_trace_context_docs
+    canonical_main_sync: verified_at_0b6125a7dfb0f4c5ba5092100de120e365e65d9b
+    local_exporter: completed_after_merged_distributed_trace_ci_evidence
   remote_ci:
     status: passed
-    run_id: 30329769797
-    job_id: 90182279338
+    run_id: 30344660685
+    job_id: 90227950094
     job: verify
-    tested_head: 027f33a8aa5f4d2676f5b07fd8991fefc1152ed4
-    merged_main_commit: 53b882028292a2a6c0a71da19540dba97c95ea9f
+    tested_head: c40a2dd389d7d89619fed0141d21733f57f28d6b
+    merged_main_commit: 0b6125a7dfb0f4c5ba5092100de120e365e65d9b
     completed: 2026-07-28
-    steps: gitguardian_audit_format_lint_manifest_thirteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_sixty_eight_assertions_twenty_builds_php_all_passed
+    steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_eighty_tests_twenty_builds_php_all_passed
   source_validation:
-    status: local_passed_remote_ci_pending
+    status: passed
+    run_id: 30344660685
+    job_id: 90227950094
     branch: feat/distributed-trace-context
-    tested_head: pending_feature_commit
+    tested_head: c40a2dd389d7d89619fed0141d21733f57f28d6b
     completed: 2026-07-28
-    steps: format_lint_fourteen_migration_manifest_architecture_twenty_typechecks_thirty_one_test_tasks_one_hundred_eighty_source_tests_twenty_builds_audit_php_yaml_links_and_secret_scan_passed_locally
+    steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_eighty_tests_twenty_builds_php_all_passed
     shared_observability_tests: 18_of_18_passed
     api_trace_lineage: passed
     private_worker_trace_lineage_integrations: 4_of_4_passed
-    durable_trace_context_postgresql_tests: 3_source_tests_ci_pending
+    durable_trace_context_postgresql_tests: 3_of_3_passed
     trace_sink_failure_isolation: passed
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
145 | - Fourteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
146 | - First migration apply and immediate migration replay: passed with migration 0014 and non-null history checksums
147 | - Architecture import boundaries: passed locally and in source-branch CI
148 | - Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
149 | - Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
150 | - Repository tests: 180 passed in PostgreSQL-integrated source-branch CI
151 | - Tracing coverage: 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests passed
152 | - Production builds: 20 of 20 workspaces passed locally and in source-branch CI
153 | - WooCommerce PHP syntax: passed locally and in source-branch CI
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
192 | - Distributed trace-context final CI run `30344660685`, job `90227950094`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 180 tests, 20 builds, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
193 | - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
194 | - Canonical documentation links before this slice: zero known broken internal links
195 | - `tracker.yml` YAML structure remains valid
196 | - Prohibited source-pattern search: no matches
197 |
198 | The repository-local continuation exporter was refreshed after the merged distributed trace-context verification evidence was recorded.
199 |
200 | ## Next production milestone
201 |
202 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
203 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
204 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
205 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
206 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
207 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
208 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
209 |
210 | ## External blockers
211 |
212 | - Authorized Steadfast merchant/test credentials
213 | - Steadfast provider-terms and merchant-authorization review
214 | - Deployment platform, account, primary region, and budget
215 | - Managed PostgreSQL provider and service tier
216 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
217 | - Managed secret store and KMS/vault provider
218 | - OpenTelemetry exporter/collector, sampling policy, broader API/domain repository metrics, managed observability backend, dashboards, alerts, and retention policy
219 | - OTP provider account and credentials
220 | - Production account recovery/MFA or managed identity-provider decision
221 | - Repository visibility correction from currently reported public to expected private
222 | - Pilot outcome data for false-positive/false-negative calibration
223 |
224 | ## Non-negotiable continuation rules
225 |
226 | - Do not add a second risk engine.
227 | - Do not call providers from the risk engine or synchronous checkout path.
228 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
229 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
230 | - Do not use API keys as dashboard user sessions.
231 | - Require organization/store scope in all merchant repositories, events, and jobs.
232 | - Add new migrations; never edit applied migrations.
233 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
234 | - Keep Redis/cache state non-authoritative.
235 | - Keep unknown/provider failure explicit and policy-controlled.
236 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
237 |

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

Bytes: 3309
SHA-256: c0b0a53098d64f9da31867aa78a31caeb71bda7d2e0af25f6935b31d2184ba0d
Lines: 1-56 of 56

```markdown
 1 | # Ozzyl Guard Documentation Index
 2 |
 3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
 4 |
 5 | ## Current verified milestone
 6 |
 7 | The distributed trace-context milestone is merged on `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`. Feature CI run `30344660685`, job `90227950094`, passed fourteen migrations, 20 typechecks, 31 Turbo tasks with 180 tests, 20 builds, GitGuardian, audit, clean restore, runtime-role, and PHP gates. Strict W3C API server/producer spans now continue through validated nullable courier, webhook, and verification durable context into worker consumer/provider child spans; verification-failure webhook creation preserves the active trace without business identifiers, contact data, credentials, URLs, payloads, responses, vendor names, or arbitrary error attributes.
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

Bytes: 28842
SHA-256: b71400a7d952abce1e57766615c1773d2525264ad7d8cd6a2d520c7237c4b9ab
Lines: 1-237 of 237

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
145 | - Fourteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
146 | - First migration apply and immediate migration replay: passed with migration 0014 and non-null history checksums
147 | - Architecture import boundaries: passed locally and in source-branch CI
148 | - Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
149 | - Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
150 | - Repository tests: 180 passed in PostgreSQL-integrated source-branch CI
151 | - Tracing coverage: 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests passed
152 | - Production builds: 20 of 20 workspaces passed locally and in source-branch CI
153 | - WooCommerce PHP syntax: passed locally and in source-branch CI
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
192 | - Distributed trace-context final CI run `30344660685`, job `90227950094`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 180 tests, 20 builds, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
193 | - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
194 | - Canonical documentation links before this slice: zero known broken internal links
195 | - `tracker.yml` YAML structure remains valid
196 | - Prohibited source-pattern search: no matches
197 |
198 | The repository-local continuation exporter was refreshed after the merged distributed trace-context verification evidence was recorded.
199 |
200 | ## Next production milestone
201 |
202 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
203 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
204 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
205 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
206 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
207 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
208 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
209 |
210 | ## External blockers
211 |
212 | - Authorized Steadfast merchant/test credentials
213 | - Steadfast provider-terms and merchant-authorization review
214 | - Deployment platform, account, primary region, and budget
215 | - Managed PostgreSQL provider and service tier
216 | - Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
217 | - Managed secret store and KMS/vault provider
218 | - OpenTelemetry exporter/collector, sampling policy, broader API/domain repository metrics, managed observability backend, dashboards, alerts, and retention policy
219 | - OTP provider account and credentials
220 | - Production account recovery/MFA or managed identity-provider decision
221 | - Repository visibility correction from currently reported public to expected private
222 | - Pilot outcome data for false-positive/false-negative calibration
223 |
224 | ## Non-negotiable continuation rules
225 |
226 | - Do not add a second risk engine.
227 | - Do not call providers from the risk engine or synchronous checkout path.
228 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
229 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
230 | - Do not use API keys as dashboard user sessions.
231 | - Require organization/store scope in all merchant repositories, events, and jobs.
232 | - Add new migrations; never edit applied migrations.
233 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
234 | - Keep Redis/cache state non-authoritative.
235 | - Keep unknown/provider failure explicit and policy-controlled.
236 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
237 |
```

### .ai-bridge/implementation-status.md

Bytes: 28759
SHA-256: 342e9e4ed73e0c25761beecedf92cb393f1866f6e6684d8e98dd964b0d57ea40
Lines: 1-194 of 194

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
 84 | - `npm run db:check`: fourteen migrations and committed SHA-256 manifest validated locally and in source-branch CI
 85 | - initial migration apply: passed with migration 0014 and non-null history checksums
 86 | - immediate migration replay: passed as a clean no-op
 87 | - `npm run db:integrity`: complete contiguous history and checksums passed
 88 | - `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
 89 | - `npm run check:architecture`: passed locally and in source-branch CI
 90 | - `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
 91 | - `npm run test`: 31/31 Turbo tasks and 180 tests passed in PostgreSQL-integrated source-branch CI
 92 | - `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
 93 | - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 94 | - Observability tests prove fixed log metadata/redaction, finite metric descriptors, strict W3C trace parsing/formatting/persistence, finite span attributes, one-shot completion, exporter-neutral JSON points, and sink/clock/ID-generation failure isolation
 95 | - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, bounded request count/duration metrics, safe unhandled-error serialization, and request availability during log/metric sink failure
 96 | - Courier-session, courier-sync, event, and verification tests prove bounded worker/provider count/duration metrics omit account/job/event/endpoint/phone/OTP/credential/URL/vendor/error-text values; shared tests cover repository outcomes, claim failures, aggregate gauges, and telemetry isolation
 97 | - Courier, webhook, and verification PostgreSQL suites include aggregate queue-depth and oldest-ready-age snapshots without row or tenant identifiers
 98 | - API and four worker tests prove server→producer→consumer→provider trace lineage while omitting request/tenant/job/event/account/phone/OTP/credential/URL/payload/error values
 99 | - Three PostgreSQL durable-context tests passed for valid/null round-trip, malformed context rejection across all three durable tables, and all-zero trace/span rejection
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
151 | - Distributed trace-context final run `30344660685`, job `90227950094`: GitGuardian, fourteen migrations, 20 typechecks, 31 Turbo tasks with 180 tests, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
152 | - The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
153 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
154 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
155 | - Previous canonical documentation checks found zero broken internal links
156 | - Prohibited insecure-pattern scan: zero matches
157 |
158 | The repository-local exporter was refreshed after the merged distributed trace-context verification evidence was recorded.
159 |
160 | ## External blockers and production requirements
161 |
162 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
163 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
164 | - Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
165 | - Managed secret store and KMS/vault provider
166 | - OpenTelemetry exporter/collector, sampling policy, broader API/domain repository metrics, managed observability backend, retention, dashboards, alerts, and incident channels
167 | - Optional Redis-compatible cache only when distributed coordination is required
168 | - Authorized Steadfast test/merchant account
169 | - Provider-terms and merchant-authorization review
170 | - OTP provider selection/account
171 | - Production account recovery/MFA or managed identity-provider decision
172 | - Pilot merchants and verified outcome data for calibration
173 |
174 | ## Remaining risks
175 |
176 | - Steadfast UI/internal endpoint changes can break automation.
177 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
178 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
179 | - In-process API and browser-session rate limiting is not distributed across replicas.
180 | - Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
181 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
182 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
183 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
184 | - GitHub currently reports public repository visibility although the expected policy is private.
185 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
186 | - Structured logs, finite-cardinality metrics/gauges, and API-to-durable-worker/provider trace propagation are implemented, but broader API/domain repository metrics, exporter/collector, sampling policy, dashboards, alerts, managed backend, and telemetry retention are not yet implemented.
187 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
188 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
189 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
190 |
191 | ## Next milestone
192 |
193 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
194 |
```

### tracker.yml

Bytes: 21589
SHA-256: 541f4666c1e89f49e911091097edf0106702e118efb7ac0accef0e331da59e51
Lines: 1-402 of 402

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
193 |   status: passed
194 |   results:
195 |     migrations: 14_of_14_with_sha256_manifest
196 |     migration_replay: passed
197 |     migration_history_integrity: passed
198 |     clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
199 |     architecture_boundaries: passed
200 |     typecheck: 20_of_20_passed
201 |     test_tasks: 31_of_31_passed
202 |     remote_tests: 180_passed
203 |     migration_integrity_tests: 7_of_7_passed
204 |     postgresql_concurrency_tests: 7_of_7_passed
205 |     postgresql_courier_worker_lease_tests: 7_of_7_passed
206 |     postgresql_webhook_worker_lease_tests: 7_of_7_passed
207 |     postgresql_verification_worker_lease_tests: 7_of_7_passed
208 |     verification_payload_validation_tests: 3_of_3_passed
209 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
210 |     postgresql_runtime_role_tests: 8_of_8_passed
211 |     managed_envelope_tests: 11_of_11_passed
212 |     native_shadow_adapter_tests: 10_of_10_passed
213 |     native_shadow_api_tests: 7_of_7_passed
214 |     native_shadow_postgresql_tests: 7_of_7_passed
215 |     native_shadow_browser_tests: 2_of_2_passed
216 |     native_shadow_sdk_tests: 2_of_2_passed
217 |     native_shadow_total_tests: 28_of_28_passed
218 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
219 |     browser_dead_letter_api_tests: 3_of_3_passed
220 |     observability_tests: 18_of_18_passed
221 |     api_observability_tests: 4_of_4_passed
222 |     api_metric_integration_tests: 1_of_1_passed
223 |     worker_metric_integration_tests: 4_of_4_passed
224 |     provider_metric_integration_tests: 4_of_4_passed
225 |     repository_metric_helper_tests: 3_of_3_passed
226 |     queue_snapshot_postgresql_tests: 3_of_3_passed
227 |     api_trace_lineage_tests: 1_of_1_passed
228 |     worker_trace_lineage_integrations: 4_of_4_passed
229 |     durable_trace_context_postgresql_tests: 3_of_3_passed
230 |     lease_heartbeat_unit_tests: 3_of_3_passed
231 |     provider_abort_on_lease_loss_tests: 3_of_3_passed
232 |     durable_retention_input_tests: 4_of_4_passed
233 |     durable_retention_postgresql_tests: 4_of_4_passed
234 |     builds: 20_of_20_passed
235 |     php_syntax: passed
236 |     high_critical_dependency_check: passed
237 |     moderate_dependency_findings: 5
238 |     documentation_links: 61_reviewed_0_known_broken
239 |   continuation_bundle:
240 |     status: refreshed_locally
241 |     canonical_main_sync: verified_at_0b6125a7dfb0f4c5ba5092100de120e365e65d9b
242 |     local_exporter: completed_after_merged_distributed_trace_ci_evidence
243 |   remote_ci:
244 |     status: passed
245 |     run_id: 30344660685
246 |     job_id: 90227950094
247 |     job: verify
248 |     tested_head: c40a2dd389d7d89619fed0141d21733f57f28d6b
249 |     merged_main_commit: 0b6125a7dfb0f4c5ba5092100de120e365e65d9b
250 |     completed: 2026-07-28
251 |     steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_eighty_tests_twenty_builds_php_all_passed
252 |   source_validation:
253 |     status: passed
254 |     run_id: 30344660685
255 |     job_id: 90227950094
256 |     branch: feat/distributed-trace-context
257 |     tested_head: c40a2dd389d7d89619fed0141d21733f57f28d6b
258 |     completed: 2026-07-28
259 |     steps: gitguardian_audit_format_lint_manifest_fourteen_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_eighty_tests_twenty_builds_php_all_passed
260 |     shared_observability_tests: 18_of_18_passed
261 |     api_trace_lineage: passed
262 |     private_worker_trace_lineage_integrations: 4_of_4_passed
263 |     durable_trace_context_postgresql_tests: 3_of_3_passed
264 |     trace_sink_failure_isolation: passed
265 |   pending_follow_up:
266 |     - provision_retention_maintenance_identity_and_approved_windows_holds_monitoring_recovery
267 |     - observability_exporter_collector_sampling_broader_api_domain_repository_metrics_and_managed_backend
268 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
269 |     - pilot_outcome_collection_and_calibration
270 |
271 | migrations:
272 |   immutable: true
273 |   manifest: packages/database/migrations/manifest.json
274 |   history_checksum_column: checksum_sha256_not_null
275 |   files:
276 |     - packages/database/migrations/0001_foundation.sql
277 |     - packages/database/migrations/0002_courier.sql
278 |     - packages/database/migrations/0003_risk.sql
279 |     - packages/database/migrations/0004_verification_events.sql
280 |     - packages/database/migrations/0005_durable_operations.sql
281 |     - packages/database/migrations/0006_browser_access.sql
282 |     - packages/database/migrations/0007_worker_leases.sql
283 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
284 |     - packages/database/migrations/0009_verification_delivery_queue.sql
285 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
286 |     - packages/database/migrations/0011_native_shadow_pilot.sql
287 |     - packages/database/migrations/0012_durable_work_replays.sql
288 |     - packages/database/migrations/0013_durable_work_archives.sql
289 |     - packages/database/migrations/0014_durable_trace_context.sql
290 |
291 | accepted_adrs:
292 |   - docs/adr/0006-production-deployment-topology.md
293 |   - docs/adr/0007-managed-postgresql-production-baseline.md
294 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
295 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
296 |   - docs/adr/0010-vendor-neutral-production-observability.md
297 |   - docs/adr/0011-selected-source-shadow-pilot.md
298 |   - docs/adr/0012-durable-work-dead-letter-operations.md
299 |
300 | external_dependencies:
301 |   - authorized_steadfast_test_account
302 |   - provider_authorization_review
303 |   - deployment_platform_account_region_and_budget
304 |   - managed_postgresql_provider_and_service_tier
305 |   - managed_secret_store_and_kms_vault_provider
306 |   - observability_backend_and_retention_policy
307 |   - otp_provider_account
308 |   - pilot_outcome_data
309 |
310 | next_milestone:
311 |   name: production-hardening-and-pilot-readiness
312 |   tasks:
313 |     - select_and_provision_accepted_infrastructure_providers
314 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
315 |     - validate_steadfast_with_an_authorized_account
316 |     - implement_the_selected_otp_provider_adapter
317 |     - add_distributed_cache_only_when_replica_coordination_requires_it
318 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
319 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
320 |     - calibrate_decisions_before_broad_automatic_blocking
321 |
322 | release_policy:
323 |   branch: main
324 |   before_push:
325 |     - npm_run_verify_passes
326 |     - documentation_and_tracker_are_current
327 |     - repository_review_is_clean
328 |   rules:
329 |     - no_force_push_to_main
330 |     - do_not_edit_applied_migrations
331 |     - use_descriptive_commits
332 |
333 | notes:
334 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
335 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
336 |   - github_connector_reports_public_visibility_while_expected_state_is_private
337 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
338 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
339 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
340 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
341 |   - webhook_event_payloads_do_not_include_raw_phone_values
342 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
343 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
344 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
345 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
346 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
347 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
348 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
349 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
350 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
351 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
352 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
353 |   - selected_otp_provider_module_and_credentials_remain_external
354 |   - migration_files_are_bound_to_a_committed_sha256_manifest
355 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
356 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
357 |   - migration_execution_uses_one_session_advisory_lock
358 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
359 |   - managed_provider_point_in_time_restore_drill_remains_external
360 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
361 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
362 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
363 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
364 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
365 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
366 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
367 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
368 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
369 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
370 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
371 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
372 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
373 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
374 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
375 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
376 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
377 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
378 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
379 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
380 |   - durable_replay_never_performs_provider_or_webhook_network_io
381 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
382 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
383 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
384 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
385 |   - structured_log_redaction_is_canonicalized_in_packages_observability
386 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
387 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
388 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
389 |   - durable_worker_heartbeat_defaults_to_one_third_of_the_lease
390 |   - lease_renewal_interval_must_not_exceed_half_the_lease
391 |   - heartbeat_renewal_and_final_state_transitions_do_not_overlap
392 |   - durable_retention_cutoff_has_a_twenty_four_hour_minimum_safety_floor
393 |   - durable_retention_batches_are_globally_bounded_to_five_hundred
394 |   - completed_source_retention_baseline_is_thirty_days_pending_approval
395 |   - failed_source_retention_baseline_is_one_hundred_eighty_days_pending_approval
396 |   - archive_evidence_does_not_replace_backup_or_point_in_time_recovery
397 |   - vendor_neutral_metrics_use_only_finite_descriptor_owned_attributes
398 |   - api_metrics_use_method_canonical_route_and_status_class_only
399 |   - worker_metrics_use_worker_type_operation_and_outcome_only
400 |   - pro_context_was_refreshed_after_vendor_neutral_metrics_documentation
401 |   - update_this_file_after_every_material_milestone
402 |
```

## Skipped Files

None.
