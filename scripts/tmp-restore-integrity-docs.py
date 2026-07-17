from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    target = Path(path)
    text = target.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected one match in {path}, found {count}: {old[:160]!r}")
    target.write_text(text.replace(old, new))


# tracker.yml
replace_once(
    "tracker.yml",
    """  - verification_job_plaintext_is_encrypted_and_context_bound
""",
    """  - verification_job_plaintext_is_encrypted_and_context_bound
  - migration_files_match_the_committed_sha256_manifest
  - migration_history_checksums_are_non_null_and_fail_closed
  - restore_rehearsal_requires_a_clean_distinct_target
""",
)
replace_once(
    "tracker.yml",
    """  - webhook_dns_destination_validation
""",
    """  - webhook_dns_destination_validation
  - postgresql_migration_manifest_and_history_checksum_integrity
  - clean_postgresql_backup_restore_rehearsal
  - restored_schema_data_sequence_history_and_replay_comparison
""",
)
replace_once(
    "tracker.yml",
    """  status: passed
  results:
    migrations: 9_of_9
    migration_replay: passed
""",
    """  status: passed_for_restore_integrity_source_head_pending_documentation_ci
  results:
    migrations: 9_of_9_with_sha256_manifest
    migration_replay: passed
    migration_history_integrity: passed
    clean_restore_rehearsal: passed_with_schema_data_sequence_history_and_replay
""",
)
replace_once(
    "tracker.yml",
    """    remote_assertions: 67_passed
""",
    """    remote_assertions: 74_passed
    migration_integrity_tests: 7_of_7_passed
""",
)
replace_once(
    "tracker.yml",
    """  remote_ci:
    status: passed
    run_id: 29554260434
    job_id: 87803061854
    job: verify
    tested_head: 7f24a7be544ae60d7a0a15b4a5020b4253e0d192
    merged_main_commit: 146360ab40efe45bfa7332c1a42b6cac0e88d17b
    completed: 2026-07-17
    steps: audit_format_lint_nine_migrations_migration_replay_architecture_typecheck_tests_build_php_all_passed
  targeted_validation:
    status: passed
    run_id: 29553255223
    job_id: 87800077114
    source_commit: 5fce01ac98bc8115959276b1ffc636a1702d77a0
    completed: 2026-07-17
    steps: nine_migrations_replay_verification_api_typecheck_tests_build_compose_profile_all_passed
    postgresql_verification_worker_lease_tests: 5_of_5_passed
    verification_payload_validation_tests: 3_of_3_passed
  pending_follow_up:
    - continuation_bundle_local_exporter_refresh
""",
    """  remote_ci:
    status: pending_documentation_head_ci
    previous_run_id: 29554260434
    previous_job_id: 87803061854
    previous_tested_head: 7f24a7be544ae60d7a0a15b4a5020b4253e0d192
    previous_merged_main_commit: 146360ab40efe45bfa7332c1a42b6cac0e88d17b
  source_validation:
    status: passed
    run_id: 29556041278
    job_id: 87808175661
    tested_head: 0eb8f09bc5e91c18e7ee5933cedb0e78f618a972
    completed: 2026-07-17
    steps: audit_format_lint_manifest_nine_migrations_replay_history_integrity_clean_restore_architecture_typecheck_tests_build_php_all_passed
    migration_integrity_tests: 7_of_7_passed
  pending_follow_up:
    - final_documentation_head_ci
    - continuation_bundle_local_exporter_refresh
""",
)
replace_once(
    "tracker.yml",
    """migrations:
  immutable: true
  files:
""",
    """migrations:
  immutable: true
  manifest: packages/database/migrations/manifest.json
  history_checksum_column: checksum_sha256_not_null
  files:
""",
)
replace_once(
    "tracker.yml",
    """    - add_clean_restore_rehearsal_and_migration_integrity_checks
    - expand_additional_repository_webhook_admin_and_runtime_role_isolation_tests
""",
    """    - expand_additional_repository_webhook_admin_and_runtime_role_isolation_tests
""",
)
replace_once(
    "tracker.yml",
    """  - selected_otp_provider_module_and_credentials_remain_external
""",
    """  - selected_otp_provider_module_and_credentials_remain_external
  - migration_files_are_bound_to_a_committed_sha256_manifest
  - migration_history_unknown_gap_or_checksum_mismatch_fails_closed
  - legacy_name_only_history_is_backfilled_only_from_the_committed_manifest
  - migration_execution_uses_one_session_advisory_lock
  - ci_restores_pg_dump_into_a_clean_distinct_database_and_compares_schema_data_sequences_history_and_replay
  - managed_provider_point_in_time_restore_drill_remains_external
""",
)

# Current plan
replace_once(
    ".ai-bridge/current-plan.md",
    "A runnable standalone MVP foundation and six production-hardening slices are complete:",
    "A runnable standalone MVP foundation and seven production-hardening slices are complete:",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """6. transactional encrypted OTP delivery queues, tenant-scoped database verification, and a lease-owned private verification worker with no provider I/O in API requests.
""",
    """6. transactional encrypted OTP delivery queues, tenant-scoped database verification, and a lease-owned private verification worker with no provider I/O in API requests;
7. SHA-256-bound migration history integrity and a clean PostgreSQL logical backup/restore rehearsal with schema, data, sequence, history, and replay verification.
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
""",
    """- [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
- [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
- [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
- [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- Repository assertions: 67 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, transactional queues/outbox coverage, DNS SSRF tests, and envelope-cipher tests
""",
    """- Repository assertions: 74 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, seven migration-integrity tests, transactional queues/outbox coverage, DNS SSRF tests, and envelope-cipher tests
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
""",
    """- The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
- Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
- Final documentation-head CI remains required before merge
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """1. Add clean backup/restore rehearsal and migration-table integrity verification.
2. Expand PostgreSQL isolation coverage for feature assembly, dashboards, webhook administration, verification administration, and runtime-role versus migration-role permissions.
3. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010.
4. Replace local encryption-key handling with the accepted managed KMS envelope-encryption implementation.
5. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
6. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
7. Add distributed rate limiting/cache only when multiple replicas require it.
8. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
9. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
""",
    """1. Expand PostgreSQL isolation coverage for feature assembly, dashboards, webhook administration, verification administration, and runtime-role versus migration-role permissions.
2. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010.
3. Replace local encryption-key handling with the accepted managed KMS envelope-encryption implementation.
4. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
5. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
6. Add distributed rate limiting/cache only when multiple replicas require it.
7. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
8. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
""",
)

# Implementation status
replace_once(
    ".ai-bridge/implementation-status.md",
    "| CI                         | done     | PostgreSQL 16 apply/replay, audit, format, lint, architecture, typecheck, tests, builds, PHP lint                             |",
    "| CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean logical restore rehearsal, audit, format, lint, architecture, typecheck, tests, builds, PHP lint |",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    "| Database/migrations              | done     | Nine append-only migrations; clean PostgreSQL 16 apply and immediate replay passed in full CI                                                 |",
    "| Database/migrations              | done     | Nine append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                  |",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    "| Durable work architecture        | baseline | PostgreSQL ownership/lease pattern proven for courier, webhook, and verification work; broader operational dead-letter tooling remains        |",
    "| Durable work architecture        | baseline | PostgreSQL ownership/lease pattern proven for courier, webhook, and verification work; broader operational dead-letter tooling remains        |\n| Backup/restore integrity            | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI          |",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """- `npm run db:check`: nine migrations validated
- initial migration apply: passed
- immediate migration replay: passed as a clean no-op
""",
    """- `npm run db:check`: nine migrations and committed SHA-256 manifest validated
- initial migration apply: passed with non-null history checksums
- immediate migration replay: passed as a clean no-op
- `npm run db:integrity`: complete contiguous history and checksums passed
- `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    "`npm run test`: 28/28 Turbo tasks passed; repository contains 67 assertions",
    "`npm run test`: 28/28 Turbo tasks passed; repository contains 74 assertions",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """- The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
""",
    """- The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
- Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
- Final documentation-head CI remains pending before merge
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    "- Managed PostgreSQL provider/service tier and restore drill",
    "- Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    "- Durable PostgreSQL work still needs clean restore rehearsal, broader dead-letter/replay operations, verification administration, and runtime-role permission tests.",
    "- Durable PostgreSQL work still needs broader dead-letter/replay operations, verification administration, and runtime-role permission tests.",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    "Add restore rehearsal and migration integrity, broaden repository/runtime-role isolation, provision the accepted infrastructure baseline, implement managed encryption, validate Steadfast, select and bundle the OTP provider adapter for the completed runner, and begin native-adapter shadow rollout.",
    "Broaden repository/runtime-role isolation, provision the accepted infrastructure baseline and production point-in-time restore drill, implement managed encryption, validate Steadfast, select and bundle the OTP provider adapter for the completed runner, and begin native-adapter shadow rollout.",
)

# Decisions
replace_once(
    ".ai-bridge/decisions.md",
    """30. The private verification worker decrypts job material only with `verification-job:<job-id>` context and validates organization, store, purpose, phone HMAC, and OTP hash before provider I/O. The production provider adapter/account remains an explicit external selection.
""",
    """30. The private verification worker decrypts job material only with `verification-job:<job-id>` context and validates organization, store, purpose, phone HMAC, and OTP hash before provider I/O. The production provider adapter/account remains an explicit external selection.
31. Ordered SQL migrations are bound to `packages/database/migrations/manifest.json` with SHA-256 checksums. The migration history stores a non-null checksum, unknown/gapped/mismatched history fails closed, and legacy name-only rows may be adopted only from the committed manifest while one migration session holds an advisory lock.
32. Restore rehearsal requires an explicitly separate clean target database. It uses credential-safe `pg_dump`/`pg_restore`, compares schema, table counts or opt-in full data hashes, sequence state, migration history, and replay, and never drops or overwrites the source database. Managed-provider PITR validation remains separate production work.
""",
)

# Database design
replace_once(
    "docs/database/database-design.md",
    """Migration 0009 leaves prior verification records valid, adds nullable idempotency keys for legacy rows, and introduces a separate encrypted delivery queue without placing plaintext phone or OTP material in existing tables.

CI applies the complete migration set twice against the same PostgreSQL service to verify replay safety. Applied migration files remain immutable.
""",
    """Migration 0009 leaves prior verification records valid, adds nullable idempotency keys for legacy rows, and introduces a separate encrypted delivery queue without placing plaintext phone or OTP material in existing tables.

## Migration history integrity

`packages/database/migrations/manifest.json` records the SHA-256 checksum for every ordered SQL migration. `db:check` requires the manifest and SQL file list to match exactly and rejects changed, missing, extra, empty, reordered, or prohibited destructive migration files.

`ozzyl_guard_migrations` stores `name`, non-null `checksum_sha256`, and `applied_at`. The migration runner holds one PostgreSQL advisory lock on one session, rejects unknown or non-contiguous history, and compares every persisted checksum before applying new work. Existing name-only history rows may receive checksums once, transactionally, only from the committed manifest; the checksum column is then enforced `NOT NULL`.

No numbered domain migration is added for this metadata hardening. The migration runner owns the internal history table, while all application tables and columns remain defined by append-only numbered migrations and the canonical schema package.

## Clean logical restore rehearsal

`npm run db:restore-rehearsal` requires `DATABASE_URL` and a distinct pre-created `RESTORE_DATABASE_URL` with no public relations. It never creates, drops, cleans, or overwrites the source database. PostgreSQL credentials are supplied to client tools through `PG*` environment variables rather than command arguments.

The rehearsal creates a custom-format `pg_dump`, restores it with `pg_restore`, validates complete migration history, compares a canonical public-schema fingerprint, table counts, sequence state, migration rows, and migration replay. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` additionally compares secret-safe per-table hashes of every row and is enabled in CI; large production-equivalent drills may use counts or a separately approved snapshot-integrity procedure when a full hash scan is too expensive.

Repository CI applies the complete migration set twice, verifies the history table, and restores into a clean PostgreSQL 16 database. Managed-provider automated backup retention and point-in-time recovery must still be demonstrated separately before the merchant pilot.
""",
)

# Testing strategy
replace_once(
    "docs/testing/testing-strategy.md",
    "- Webhook HMAC signing, retry classification, and DNS destination validation",
    "- Webhook HMAC signing, retry classification, and DNS destination validation\n- Migration manifest ordering and SHA-256 tamper detection",
)
replace_once(
    "docs/testing/testing-strategy.md",
    """The migration history table remains the replay source of truth. Applied migration files remain immutable.

Future PostgreSQL coverage must include:

- clean backup/restore rehearsal and migration-table integrity checks;
""",
    """The migration history table remains the replay source of truth. Applied migration files remain immutable.

### Migration integrity and restore coverage

CI additionally proves:

- the ordered SQL file list exactly matches the committed SHA-256 manifest;
- changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
- legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
- migration execution is serialized by one session-held advisory lock;
- the restore target is a distinct pre-created clean database;
- `pg_dump`/`pg_restore` credentials are not placed in process arguments;
- restored schema, full table data hashes, sequence state, migration history, and replay match the source.

Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.

Future PostgreSQL coverage must include:

""",
)
replace_once(
    "docs/testing/testing-strategy.md",
    "- migration verification and replay",
    "- migration manifest, verification, replay, and database-history integrity\n- clean PostgreSQL backup/restore rehearsal",
)

# Deployment
replace_once(
    "docs/operations/deployment.md",
    "- migration apply/replay verification",
    "- migration SHA-256 manifest, apply/replay, and history-integrity verification\n- clean PostgreSQL logical backup/restore rehearsal in CI",
)
replace_once(
    "docs/operations/deployment.md",
    """3. Apply migrations as a separate release job.
4. Run the migration command again to verify replay/no-op behavior.
5. Verify database and service readiness.
6. Deploy API and private workers independently.
7. Verify event-worker database, KMS/decrypt, DNS, and controlled-egress access.
8. Deploy static dashboard/admin assets.
9. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
10. Compare decision, outcome, outbox, and delivery metrics before broader rollout.
11. Roll back application artifacts without editing applied migrations when release validation fails.
""",
    """3. Apply migrations as a separate release job while the migration identity holds the repository advisory lock.
4. Run the migration command again to verify replay/no-op behavior.
5. Run `npm run db:integrity` and fail the release on manifest, history, gap, null-checksum, or checksum mismatch.
6. Restore a release-candidate backup into a separate clean staging/recovery database and verify schema/history/replay; use full data hashes when the dataset and maintenance window permit.
7. Verify database and service readiness.
8. Deploy API and private workers independently.
9. Verify event-worker database, KMS/decrypt, DNS, and controlled-egress access.
10. Deploy static dashboard/admin assets.
11. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
12. Compare decision, outcome, outbox, and delivery metrics before broader rollout.
13. Roll back application artifacts without editing applied migrations when release validation fails.
""",
)
replace_once(
    "docs/operations/deployment.md",
    """Migrations 0008 and 0009 are append-only and immutable after application. Future webhook or verification-delivery schema changes require a new migration.
""",
    """Migrations 0008 and 0009 are append-only and immutable after application. Future webhook or verification-delivery schema changes require a new migration. Every new SQL migration must also add its reviewed SHA-256 entry to the manifest; regenerating the manifest to bless an unexplained edit is prohibited.

### Database integrity and restore commands

`npm run db:integrity` is read-only and requires a complete contiguous history with non-null matching checksums. `npm run db:restore-rehearsal` requires a separately created empty target through `RESTORE_DATABASE_URL`; it refuses the same database and any target with existing public relations. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` enables a full table scan/hash comparison and should be scheduled only for an approved maintenance or isolated snapshot window on large datasets.
""",
)
replace_once(
    "docs/operations/deployment.md",
    """- all nine migrations apply to a clean managed PostgreSQL 16+ database;
- migration replay is a clean no-op;
""",
    """- all nine migrations match the committed SHA-256 manifest and apply to a clean managed PostgreSQL 16+ database;
- migration replay is a clean no-op and migration-history integrity passes;
- a logical restore rehearsal succeeds against a distinct clean target;
""",
)
replace_once(
    "docs/operations/deployment.md",
    """Repository CI currently verifies eight ordered migrations and immediate replay against PostgreSQL 16, architecture boundaries, 19 workspace typechecks, 28 test tasks with 53 assertions, 19 builds, dependency audit, formatting, lint, and WooCommerce PHP syntax.
""",
    """Repository source-head CI run `29556041278`, job `87808175661`, verifies nine manifest-bound migrations, immediate replay, non-null history checksums, clean full-data-hash logical restore, architecture boundaries, 19 workspace typechecks, 28 test tasks with 74 assertions, 19 builds, dependency audit, formatting, lint, and WooCommerce PHP syntax.
""",
)
replace_once(
    "docs/operations/deployment.md",
    "Production provider provisioning, controlled-egress smoke tests, restore drills, managed KMS validation, and the durable verification queue/runner remain pending.",
    "Production provider provisioning, controlled-egress smoke tests, managed-provider PITR/retention validation, managed KMS validation, and provider-specific OTP delivery remain pending.",
)

# Operations
replace_once(
    "docs/operations/operations-observability.md",
    "- Backup and restore status",
    "- Backup and restore status, duration, age, and last successful drill\n- Migration manifest/history checksum mismatch count",
)
replace_once(
    "docs/operations/operations-observability.md",
    "- Database migration or backup failure",
    "- Database migration, manifest/history integrity, backup, or restore failure",
)
replace_once(
    "docs/operations/operations-observability.md",
    "- Database restore and failover",
    "- Database logical restore, managed point-in-time restore, and failover",
)
replace_once(
    "docs/operations/operations-observability.md",
    """A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.
""",
    """A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.

A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.
""",
)

# README
replace_once(
    "README.md",
    "- PostgreSQL schema and nine append-only migrations",
    "- PostgreSQL schema, nine append-only migrations, committed SHA-256 manifest, and non-null history checksums",
)
replace_once(
    "README.md",
    "- Docker, Docker Compose, and CI verification",
    "- Docker, Docker Compose, migration integrity verification, and clean logical restore rehearsal in CI",
)
replace_once(
    "README.md",
    """npm run db:check
npm run db:migrate
""",
    """npm run db:check
npm run db:migrate
npm run db:integrity
""",
)
replace_once(
    "README.md",
    """npm run db:check
npm run typecheck
""",
    """npm run db:check
npm run db:integrity
# Requires a separately created empty target database:
RESTORE_DATABASE_URL=postgresql://... RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true npm run db:restore-rehearsal
npm run typecheck
""",
)

# Environment example
replace_once(
    "config/environment.example",
    """DATABASE_POOL_SIZE=20
POSTGRES_PASSWORD=[REDACTED_SECRET]
""",
    """DATABASE_POOL_SIZE=20
POSTGRES_PASSWORD=[REDACTED_SECRET]
# Operational restore rehearsal only. Target must be distinct, pre-created, and empty.
RESTORE_DATABASE_URL=postgresql://ozzyl_guard:[REDACTED_SECRET]@localhost:5432/ozzyl_guard_restore
# Full data hashing scans every public table; enable only in CI or an approved isolated window.
RESTORE_REHEARSAL_VERIFY_DATA_HASHES=false
""",
)
