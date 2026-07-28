# CodexPro Context Bundle

Generated: 2026-07-28T01:05:01.390Z
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
## docs/api-observability-verification-evidence
 M .ai-bridge/current-plan.md
 M .ai-bridge/implementation-status.md
 M tracker.yml
```

## Recent Commits

```text
00d6eec (HEAD -> docs/api-observability-verification-evidence, origin/main, main) feat(api): add safe request observability (#28)
cc8d890 docs: record observability CI evidence (#27)
d8ef4ac feat(observability): add safe structured worker logging (#26)
b61af36 docs: sync browser dead-letter evidence
27cff21 feat: add browser dead-letter operations
57f7b3a docs: sync durable work dead-letter evidence
2d68620 feat: add durable work dead-letter operations
a028848 docs: sync selected source shadow pilot evidence (#21)
```

## Git Diff

```diff
diff --git a/.ai-bridge/current-plan.md b/.ai-bridge/current-plan.md
index 4480c3d..a1bb962 100644
--- a/.ai-bridge/current-plan.md
+++ b/.ai-bridge/current-plan.md
@@ -116,11 +116,11 @@ Concrete provider selection and provisioning remain external production work.
 - Twelve migration files ordered/non-empty/non-destructive: passed
 - First migration apply and immediate migration replay: passed
 - Architecture import boundaries: passed
-- Typecheck: 20 of 20 workspaces passed locally; source-branch CI is pending
-- Test/build dependency tasks: 31 of 31 passed locally; source-branch CI is pending
-- Repository assertion inventory: 136, including four API request-correlation, bounded-route, unhandled-error redaction, and sink-failure tests; PostgreSQL-integrated source-branch CI is pending
-- Production builds: 20 of 20 workspaces passed locally; source-branch CI is pending
-- WooCommerce PHP syntax: unchanged; source-branch CI validation is pending
+- Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
+- Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
+- Repository assertions: 136 passed in PostgreSQL-integrated source-branch CI, including four API request-correlation, bounded-route, unhandled-error redaction, and sink-failure tests
+- Production builds: 20 of 20 workspaces passed locally and in source-branch CI
+- WooCommerce PHP syntax: passed in source-branch CI
 - npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
 - Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
 - The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
@@ -149,11 +149,13 @@ Concrete provider selection and provisioning remain external production work.
 - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
 - Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
 - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
+- API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
+- The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
 - Canonical documentation links before this slice: zero known broken internal links
 - `tracker.yml` YAML structure remains valid
 - Prohibited source-pattern search: no matches

-The repository-local continuation exporter was refreshed after the API observability milestone documentation was finalized, so its embedded snapshots match the current branch state.
+The repository-local continuation exporter was refreshed after the merged API observability verification evidence was recorded.

 ## Next production milestone

diff --git a/.ai-bridge/implementation-status.md b/.ai-bridge/implementation-status.md
index bde972b..1d12d6c 100644
--- a/.ai-bridge/implementation-status.md
+++ b/.ai-bridge/implementation-status.md
@@ -85,9 +85,9 @@ Applied migrations must remain immutable.
 - `npm run db:integrity`: complete contiguous history and checksums passed
 - `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
 - `npm run check:architecture`: passed
-- `npm run typecheck`: 20/20 workspaces passed locally; source-branch CI is pending
-- `npm run test`: 31/31 Turbo dependency tasks passed locally; source inventory contains 136 assertions, including four API observability tests
-- `npm run build`: 20/20 workspace builds passed locally; source-branch CI is pending
+- `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
+- `npm run test`: 31/31 Turbo dependency tasks and 136 assertions passed in PostgreSQL-integrated source-branch CI, including four API observability tests
+- `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
 - `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
 - Observability tests prove fixed metadata, nested redaction, error message/stack omission, circular/binary/bigint handling, bounded strings, reserved-field protection, and sink-failure isolation
 - API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, safe unhandled-error serialization, and request availability during sink failure
@@ -130,12 +130,14 @@ Applied migrations must remain immutable.
 - The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
 - Structured observability final run `30317190971`, job `90145176143`: twelve migrations, 20 typechecks, 31 Turbo test/build dependency tasks with 132 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
 - The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
+- API request observability final run `30318999952`, job `90150731352`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 136 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
+- The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
 - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
 - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
 - Previous canonical documentation checks found zero broken internal links
 - Prohibited insecure-pattern scan: zero matches

-The repository-local exporter was refreshed after this API observability milestone documentation was completed. Source-branch remote CI is pending.
+The repository-local exporter was refreshed after the merged API observability verification evidence was recorded.

 ## External blockers and production requirements

diff --git a/tracker.yml b/tracker.yml
index b5b6db3..936e091 100644
--- a/tracker.yml
+++ b/tracker.yml
@@ -160,8 +160,7 @@ verification:
     architecture_boundaries: passed
     typecheck: 20_of_20_passed
     test_tasks: 31_of_31_passed
-    source_assertions: 136_total
-    previous_main_remote_assertions: 132_passed
+    remote_assertions: 136_passed
     migration_integrity_tests: 7_of_7_passed
     postgresql_concurrency_tests: 7_of_7_passed
     postgresql_courier_worker_lease_tests: 5_of_5_passed
@@ -188,27 +187,27 @@ verification:
     documentation_links: 57_reviewed_0_known_broken
   continuation_bundle:
     status: refreshed_locally
-    canonical_main_sync: verified_at_cc8d8901808305b4c72604c654b7790ae7e3bffc
-    local_exporter: completed_after_api_observability_docs
+    canonical_main_sync: verified_at_00d6eecb69f1edd48209cb8653137c8e8a57ab7f
+    local_exporter: completed_after_merged_api_observability_ci_evidence
   remote_ci:
     status: passed
-    run_id: 30317190971
-    job_id: 90145176143
+    run_id: 30318999952
+    job_id: 90150731352
     job: verify
-    tested_head: 533979f6c5abe2cadf51de05bdd3b4844a647dd8
-    merged_main_commit: d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7
+    tested_head: c92d0a713c2257e6cd49903ca292f41150141890
+    merged_main_commit: 00d6eecb69f1edd48209cb8653137c8e8a57ab7f
     completed: 2026-07-28
-    steps: audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_two_assertions_twenty_builds_php_all_passed
+    steps: gitguardian_audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_six_assertions_twenty_builds_php_all_passed
   source_validation:
     status: passed
-    run_id: 30317190971
-    job_id: 90145176143
-    tested_head: 533979f6c5abe2cadf51de05bdd3b4844a647dd8
+    run_id: 30318999952
+    job_id: 90150731352
+    tested_head: c92d0a713c2257e6cd49903ca292f41150141890
     completed: 2026-07-28
-    steps: audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_two_assertions_twenty_builds_php_all_passed
+    steps: gitguardian_audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_six_assertions_twenty_builds_php_all_passed
     observability_tests: 3_of_3_passed
+    api_observability_tests: 4_of_4_passed
   pending_follow_up:
-    - source_branch_remote_ci_validation
     - observability_metrics_traces_exporters_and_managed_backend
     - production_source_hook_deployment_and_explicit_pilot_store_selection
     - pilot_outcome_collection_and_calibration
@@ -329,5 +328,5 @@ notes:
   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
-  - pro_context_was_refreshed_after_api_observability_documentation
+  - pro_context_was_refreshed_after_merged_api_observability_ci_evidence
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
119 | - Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
120 | - Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
121 | - Repository assertions: 136 passed in PostgreSQL-integrated source-branch CI, including four API request-correlation, bounded-route, unhandled-error redaction, and sink-failure tests
122 | - Production builds: 20 of 20 workspaces passed locally and in source-branch CI
123 | - WooCommerce PHP syntax: passed in source-branch CI
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
152 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
153 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
154 | - Canonical documentation links before this slice: zero known broken internal links
155 | - `tracker.yml` YAML structure remains valid
156 | - Prohibited source-pattern search: no matches
157 |
158 | The repository-local continuation exporter was refreshed after the merged API observability verification evidence was recorded.
159 |
160 | ## Next production milestone
161 |
162 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
163 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
164 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
165 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
166 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
167 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
168 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
169 |
170 | ## External blockers
171 |
172 | - Authorized Steadfast merchant/test credentials
173 | - Steadfast provider-terms and merchant-authorization review
174 | - Deployment platform, account, primary region, and budget
175 | - Managed PostgreSQL provider and service tier
176 | - Managed secret store and KMS/vault provider
177 | - Observability backend and retention policy
178 | - OTP provider account and credentials
179 | - Production account recovery/MFA or managed identity-provider decision
180 | - Repository visibility correction from currently reported public to expected private
181 | - Pilot outcome data for false-positive/false-negative calibration
182 |
183 | ## Non-negotiable continuation rules
184 |
185 | - Do not add a second risk engine.
186 | - Do not call providers from the risk engine or synchronous checkout path.
187 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
188 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
189 | - Do not use API keys as dashboard user sessions.
190 | - Require organization/store scope in all merchant repositories, events, and jobs.
191 | - Add new migrations; never edit applied migrations.
192 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
193 | - Keep Redis/cache state non-authoritative.
194 | - Keep unknown/provider failure explicit and policy-controlled.
195 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
196 |

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

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, tracker.yml
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: none
Extra globs: none
Files included below: AGENTS.md, eslint.config.js, package.json, README.md, turbo.json, .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, tracker.yml

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

Bytes: 21269
SHA-256: 6241c848ba1b753173e2a55c5b57495d03cdd94d49b5041b0f94bde6e5cd5ec9
Lines: 1-196 of 196

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
119 | - Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
120 | - Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
121 | - Repository assertions: 136 passed in PostgreSQL-integrated source-branch CI, including four API request-correlation, bounded-route, unhandled-error redaction, and sink-failure tests
122 | - Production builds: 20 of 20 workspaces passed locally and in source-branch CI
123 | - WooCommerce PHP syntax: passed in source-branch CI
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
152 | - API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
153 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
154 | - Canonical documentation links before this slice: zero known broken internal links
155 | - `tracker.yml` YAML structure remains valid
156 | - Prohibited source-pattern search: no matches
157 |
158 | The repository-local continuation exporter was refreshed after the merged API observability verification evidence was recorded.
159 |
160 | ## Next production milestone
161 |
162 | 1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
163 | 2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
164 | 3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
165 | 4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
166 | 5. Add distributed rate limiting/cache only when multiple replicas require it.
167 | 6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
168 | 7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
169 |
170 | ## External blockers
171 |
172 | - Authorized Steadfast merchant/test credentials
173 | - Steadfast provider-terms and merchant-authorization review
174 | - Deployment platform, account, primary region, and budget
175 | - Managed PostgreSQL provider and service tier
176 | - Managed secret store and KMS/vault provider
177 | - Observability backend and retention policy
178 | - OTP provider account and credentials
179 | - Production account recovery/MFA or managed identity-provider decision
180 | - Repository visibility correction from currently reported public to expected private
181 | - Pilot outcome data for false-positive/false-negative calibration
182 |
183 | ## Non-negotiable continuation rules
184 |
185 | - Do not add a second risk engine.
186 | - Do not call providers from the risk engine or synchronous checkout path.
187 | - Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
188 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
189 | - Do not use API keys as dashboard user sessions.
190 | - Require organization/store scope in all merchant repositories, events, and jobs.
191 | - Add new migrations; never edit applied migrations.
192 | - Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
193 | - Keep Redis/cache state non-authoritative.
194 | - Keep unknown/provider failure explicit and policy-controlled.
195 | - Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
196 |
```

### .ai-bridge/implementation-status.md

Bytes: 24036
SHA-256: 7c868b180191971c53c8563e8425ce388a4308d5398c595b826e5ed4f056452f
Lines: 1-175 of 175

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
 88 | - `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
 89 | - `npm run test`: 31/31 Turbo dependency tasks and 136 assertions passed in PostgreSQL-integrated source-branch CI, including four API observability tests
 90 | - `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
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
133 | - API request observability final run `30318999952`, job `90150731352`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 136 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
134 | - The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
135 | - Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
136 | - Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
137 | - Previous canonical documentation checks found zero broken internal links
138 | - Prohibited insecure-pattern scan: zero matches
139 |
140 | The repository-local exporter was refreshed after the merged API observability verification evidence was recorded.
141 |
142 | ## External blockers and production requirements
143 |
144 | - Concrete deployment platform, account, primary region, DNS, and TLS setup
145 | - Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
146 | - Managed secret store and KMS/vault provider
147 | - Observability backend, retention, dashboards, alerts, and incident channels
148 | - Optional Redis-compatible cache only when distributed coordination is required
149 | - Authorized Steadfast test/merchant account
150 | - Provider-terms and merchant-authorization review
151 | - OTP provider selection/account
152 | - Production account recovery/MFA or managed identity-provider decision
153 | - Pilot merchants and verified outcome data for calibration
154 |
155 | ## Remaining risks
156 |
157 | - Steadfast UI/internal endpoint changes can break automation.
158 | - The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
159 | - DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
160 | - In-process API and browser-session rate limiting is not distributed across replicas.
161 | - Controlled dead-letter inspection and browser replay are implemented; future work still includes lease renewal for executions that may exceed one lease and a reviewed retention/archival policy.
162 | - The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
163 | - The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
164 | - Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
165 | - GitHub currently reports public repository visibility although the expected policy is private.
166 | - Provider-specific infrastructure has not been provisioned or smoke-tested.
167 | - Structured logs are implemented for API request lifecycle and private worker startup/error paths, but repository/provider metrics, traces, exporters, dashboards, alerts, and managed retention are not yet implemented.
168 | - Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
169 | - Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
170 | - Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
171 |
172 | ## Next milestone
173 |
174 | Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
175 |
```

### tracker.yml

Bytes: 17246
SHA-256: 58f7025bb25eededba07858ef1472cdee7b7f27ed15db47ae331a114fea637f7
Lines: 1-333 of 333

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
163 |     remote_assertions: 136_passed
164 |     migration_integrity_tests: 7_of_7_passed
165 |     postgresql_concurrency_tests: 7_of_7_passed
166 |     postgresql_courier_worker_lease_tests: 5_of_5_passed
167 |     postgresql_webhook_worker_lease_tests: 5_of_5_passed
168 |     postgresql_verification_worker_lease_tests: 5_of_5_passed
169 |     verification_payload_validation_tests: 3_of_3_passed
170 |     postgresql_tenant_admin_isolation_tests: 7_of_7_passed
171 |     postgresql_runtime_role_tests: 7_of_7_passed
172 |     managed_envelope_tests: 11_of_11_passed
173 |     native_shadow_adapter_tests: 10_of_10_passed
174 |     native_shadow_api_tests: 7_of_7_passed
175 |     native_shadow_postgresql_tests: 7_of_7_passed
176 |     native_shadow_browser_tests: 2_of_2_passed
177 |     native_shadow_sdk_tests: 2_of_2_passed
178 |     native_shadow_total_tests: 28_of_28_passed
179 |     durable_dead_letter_postgresql_tests: 5_of_5_passed
180 |     browser_dead_letter_api_tests: 3_of_3_passed
181 |     observability_tests: 3_of_3_passed
182 |     api_observability_tests: 4_of_4_passed
183 |     builds: 20_of_20_passed
184 |     php_syntax: passed
185 |     high_critical_dependency_check: passed
186 |     moderate_dependency_findings: 5
187 |     documentation_links: 57_reviewed_0_known_broken
188 |   continuation_bundle:
189 |     status: refreshed_locally
190 |     canonical_main_sync: verified_at_00d6eecb69f1edd48209cb8653137c8e8a57ab7f
191 |     local_exporter: completed_after_merged_api_observability_ci_evidence
192 |   remote_ci:
193 |     status: passed
194 |     run_id: 30318999952
195 |     job_id: 90150731352
196 |     job: verify
197 |     tested_head: c92d0a713c2257e6cd49903ca292f41150141890
198 |     merged_main_commit: 00d6eecb69f1edd48209cb8653137c8e8a57ab7f
199 |     completed: 2026-07-28
200 |     steps: gitguardian_audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_six_assertions_twenty_builds_php_all_passed
201 |   source_validation:
202 |     status: passed
203 |     run_id: 30318999952
204 |     job_id: 90150731352
205 |     tested_head: c92d0a713c2257e6cd49903ca292f41150141890
206 |     completed: 2026-07-28
207 |     steps: gitguardian_audit_format_lint_manifest_twelve_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_twenty_typechecks_one_hundred_thirty_six_assertions_twenty_builds_php_all_passed
208 |     observability_tests: 3_of_3_passed
209 |     api_observability_tests: 4_of_4_passed
210 |   pending_follow_up:
211 |     - observability_metrics_traces_exporters_and_managed_backend
212 |     - production_source_hook_deployment_and_explicit_pilot_store_selection
213 |     - pilot_outcome_collection_and_calibration
214 |
215 | migrations:
216 |   immutable: true
217 |   manifest: packages/database/migrations/manifest.json
218 |   history_checksum_column: checksum_sha256_not_null
219 |   files:
220 |     - packages/database/migrations/0001_foundation.sql
221 |     - packages/database/migrations/0002_courier.sql
222 |     - packages/database/migrations/0003_risk.sql
223 |     - packages/database/migrations/0004_verification_events.sql
224 |     - packages/database/migrations/0005_durable_operations.sql
225 |     - packages/database/migrations/0006_browser_access.sql
226 |     - packages/database/migrations/0007_worker_leases.sql
227 |     - packages/database/migrations/0008_webhook_delivery_leases.sql
228 |     - packages/database/migrations/0009_verification_delivery_queue.sql
229 |     - packages/database/migrations/0010_native_shadow_comparisons.sql
230 |     - packages/database/migrations/0011_native_shadow_pilot.sql
231 |     - packages/database/migrations/0012_durable_work_replays.sql
232 |
233 | accepted_adrs:
234 |   - docs/adr/0006-production-deployment-topology.md
235 |   - docs/adr/0007-managed-postgresql-production-baseline.md
236 |   - docs/adr/0008-postgresql-first-durable-work-and-cache.md
237 |   - docs/adr/0009-managed-secrets-and-kms-envelope-encryption.md
238 |   - docs/adr/0010-vendor-neutral-production-observability.md
239 |   - docs/adr/0011-selected-source-shadow-pilot.md
240 |   - docs/adr/0012-durable-work-dead-letter-operations.md
241 |
242 | external_dependencies:
243 |   - authorized_steadfast_test_account
244 |   - provider_authorization_review
245 |   - deployment_platform_account_region_and_budget
246 |   - managed_postgresql_provider_and_service_tier
247 |   - managed_secret_store_and_kms_vault_provider
248 |   - observability_backend_and_retention_policy
249 |   - otp_provider_account
250 |   - pilot_outcome_data
251 |
252 | next_milestone:
253 |   name: production-hardening-and-pilot-readiness
254 |   tasks:
255 |     - select_and_provision_accepted_infrastructure_providers
256 |     - select_and_wire_a_reviewed_managed_kms_adapter_and_audited_reencryption_runner
257 |     - validate_steadfast_with_an_authorized_account
258 |     - implement_the_selected_otp_provider_adapter
259 |     - add_distributed_cache_only_when_replica_coordination_requires_it
260 |     - deploy_the_selected_source_post_persist_hook_to_explicitly_opted_in_pilot_stores
261 |     - run_a_selected_merchant_pilot_and_collect_verified_outcomes
262 |     - calibrate_decisions_before_broad_automatic_blocking
263 |
264 | release_policy:
265 |   branch: main
266 |   before_push:
267 |     - npm_run_verify_passes
268 |     - documentation_and_tracker_are_current
269 |     - repository_review_is_clean
270 |   rules:
271 |     - no_force_push_to_main
272 |     - do_not_edit_applied_migrations
273 |     - use_descriptive_commits
274 |
275 | notes:
276 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
277 |   - dashboard_and_admin_use_separate_authenticated_live_browser_sessions
278 |   - github_connector_reports_public_visibility_while_expected_state_is_private
279 |   - infrastructure_architecture_is_accepted_but_provider_selection_is_pending
280 |   - postgresql_remains_the_pilot_durable_job_and_outbox_source_of_truth
281 |   - assessment_and_outcome_idempotency_races_resolve_to_the_scoped_persisted_winner
282 |   - assessment_and_outcome_winners_enqueue_matching_webhook_rows_transactionally
283 |   - webhook_event_payloads_do_not_include_raw_phone_values
284 |   - courier_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
285 |   - webhook_deliveries_use_atomic_claims_expiring_leases_and_owner_checked_transitions
286 |   - webhook_worker_scope_is_revalidated_against_endpoint_and_store_relationships
287 |   - webhook_signing_secrets_are_decrypted_only_inside_the_event_worker
288 |   - webhook_destinations_require_https_public_dns_results_and_redirect_rejection
289 |   - production_egress_policy_is_still_required_for_dns_rebinding_defense
290 |   - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
291 |   - otp_provider_delivery_occurs_only_in_the_private_verification_worker
292 |   - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
293 |   - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
294 |   - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
295 |   - selected_otp_provider_module_and_credentials_remain_external
296 |   - migration_files_are_bound_to_a_committed_sha256_manifest
297 |   - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
298 |   - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
299 |   - migration_execution_uses_one_session_advisory_lock
300 |   - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
301 |   - managed_provider_point_in_time_restore_drill_remains_external
302 |   - api_keys_feature_assembly_assessment_and_outcome_writes_fail_closed_on_relational_tenant_mismatch
303 |   - webhook_and_verification_administration_queries_reauthorize_active_owner_or_admin_scope_and_return_no_secret_material
304 |   - platform_admin_repository_rechecks_active_explicit_role_on_every_call
305 |   - runtime_role_grants_are_explicit_current_table_only_and_exclude_migration_history_delete_and_ddl
306 |   - runtime_role_must_be_externally_created_non_owner_login_without_elevated_privileges_or_memberships
307 |   - runtime_grants_must_be_reapplied_by_the_migration_owner_after_each_migration_release
308 |   - managed_envelope_v2_uses_one_random_dek_per_record_and_authenticated_wrapped_key_metadata
309 |   - managed_envelope_context_mismatch_is_rejected_before_key_unwrap
310 |   - legacy_ciphertext_is_dual_read_only_through_explicitly_configured_legacy_keys
311 |   - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
312 |   - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
313 |   - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
314 |   - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
315 |   - native_shadow_sampled_attempts_record_success_timeout_assessment_and_persistence_states
316 |   - native_shadow_dashboard_and_admin_reporting_is_secret_free_and_tenant_scoped
317 |   - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
318 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
319 |   - durable_dead_letter_listing_is_secret_free_and_exact_store_scoped
320 |   - durable_replay_resets_only_failed_replayable_work_and_clears_old_leases
321 |   - durable_replay_ledger_is_insert_only_for_the_runtime_role
322 |   - durable_replay_never_performs_provider_or_webhook_network_io
323 |   - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope
324 |   - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key
325 |   - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure
326 |   - merchant_dead_letter_ui_hides_operations_from_non_admin_members
327 |   - structured_log_redaction_is_canonicalized_in_packages_observability
328 |   - private_worker_logging_uses_the_shared_telemetry_failure_isolation_boundary
329 |   - api_request_logs_use_opaque_ids_bounded_routes_status_and_latency_only
330 |   - api_unhandled_errors_export_safe_name_and_code_without_message_or_stack
331 |   - pro_context_was_refreshed_after_merged_api_observability_ci_evidence
332 |   - update_this_file_after_every_material_milestone
333 |
```

## Skipped Files

None.
