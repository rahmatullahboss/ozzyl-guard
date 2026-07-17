from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text(encoding='utf-8')
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'Expected one match in {path}; found {count}: {old[:100]!r}')
    file.write_text(text.replace(old, new, 1), encoding='utf-8')


replace_once('tracker.yml', '  last_updated: 2026-07-17\n', '  last_updated: 2026-07-18\n')
replace_once(
    'tracker.yml',
    '  - production_kms_failures_have_no_plaintext_or_local_fallback\n',
    '''  - production_kms_failures_have_no_plaintext_or_local_fallback
  - native_shadow_rollout_never_changes_the_effective_legacy_decision
  - shadow_comparison_guard_values_are_derived_from_the_scoped_assessment
''',
)
replace_once(
    'tracker.yml',
    '  - postgresql_schema_and_nine_migrations\n',
    '  - postgresql_schema_and_ten_migrations\n',
)
replace_once(
    'tracker.yml',
    '  - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests\n',
    '''  - managed_envelope_legacy_dual_read_key_rotation_and_safe_failure_tests
  - native_multi_store_off_and_deterministic_shadow_rollout_controls
  - tenant_scoped_idempotent_native_shadow_comparison_api_and_persistence
''',
)
replace_once('tracker.yml', '  last_verified: 2026-07-17\n', '  last_verified: 2026-07-18\n')
replace_once(
    'tracker.yml',
    '    migrations: 9_of_9_with_sha256_manifest\n',
    '    migrations: 10_of_10_with_sha256_manifest\n',
)
replace_once('tracker.yml', '    remote_assertions: 96_passed\n', '    remote_assertions: 107_passed\n')
replace_once(
    'tracker.yml',
    '    managed_envelope_tests: 11_of_11_passed\n',
    '''    managed_envelope_tests: 11_of_11_passed
    native_shadow_adapter_tests: 5_of_5_passed
    native_shadow_api_tests: 3_of_3_passed
    native_shadow_postgresql_tests: 3_of_3_passed
''',
)
replace_once(
    'tracker.yml',
    '''  source_validation:
    status: passed
    run_id: 29579223561
    job_id: 87880659693
    tested_head: 9dbd61eb84fa6d42958e120d5ce9e1e402bd6688
    completed: 2026-07-17
    steps: audit_format_lint_manifest_nine_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_typecheck_tests_build_php_all_passed
    managed_envelope_tests: 11_of_11_passed
''',
    '''  source_validation:
    status: passed
    run_id: 29610050179
    job_id: 87982336996
    tested_head: 85cd9e2bafd0fc3605c97a461f01a6a87016b83b
    completed: 2026-07-18
    steps: audit_format_lint_manifest_ten_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_typecheck_tests_build_php_all_passed
    native_shadow_tests: 11_of_11_passed
''',
)
replace_once(
    'tracker.yml',
    '    - packages/database/migrations/0009_verification_delivery_queue.sql\n',
    '''    - packages/database/migrations/0009_verification_delivery_queue.sql
    - packages/database/migrations/0010_native_shadow_comparisons.sql
''',
)
replace_once(
    'tracker.yml',
    '    - enable_native_adapter_shadow_mode\n',
    '    - wire_the_selected_source_platform_to_the_verified_shadow_adapter_and_run_an_opt_in_pilot\n',
)
replace_once(
    'tracker.yml',
    '  - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned\n',
    '''  - production_runtime_stays_on_local_v1_until_a_reviewed_kms_adapter_and_identity_policy_are_provisioned
  - native_shadow_sampling_is_deterministic_by_store_key_and_order_id
  - native_shadow_guard_or_persistence_failure_keeps_the_legacy_result_authoritative
  - native_shadow_comparisons_are_immutable_tenant_scoped_and_idempotent
  - native_shadow_enforcement_is_not_implemented_and_requires_pilot_review
''',
)

replace_once('.ai-bridge/current-plan.md', 'Updated: 2026-07-17\n', 'Updated: 2026-07-18\n')
replace_once(
    '.ai-bridge/current-plan.md',
    'A runnable standalone MVP foundation and nine production-hardening slices are complete:',
    'A runnable standalone MVP foundation and ten production-hardening slices are complete:',
)
replace_once(
    '.ai-bridge/current-plan.md',
    '9. provider-neutral managed envelope v2 with random per-record data keys, authenticated wrapped-key metadata, structured fail-closed errors, explicit legacy dual-read, and key-version re-encryption primitives.\n',
    '''9. provider-neutral managed envelope v2 with random per-record data keys, authenticated wrapped-key metadata, structured fail-closed errors, explicit legacy dual-read, and key-version re-encryption primitives;
10. native multi-store `off`/deterministic-shadow rollout controls with legacy-authoritative behavior and tenant-scoped immutable comparison evidence.
''',
)
replace_once(
    '.ai-bridge/current-plan.md',
    '- [x] PostgreSQL/Drizzle schema and nine append-only migrations\n',
    '- [x] PostgreSQL/Drizzle schema and ten append-only migrations\n',
)
replace_once(
    '.ai-bridge/current-plan.md',
    '- [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback\n',
    '''- [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
- [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
- [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
- [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
''',
)
replace_once(
    '.ai-bridge/current-plan.md',
    '- Nine migration files ordered/non-empty/non-destructive: passed\n',
    '- Ten migration files ordered/non-empty/non-destructive: passed\n',
)
replace_once(
    '.ai-bridge/current-plan.md',
    '- Repository assertions: 96 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, seven migration-integrity tests, seven tenant/admin isolation tests, six runtime-role policy/permission tests, eleven envelope-encryption tests, transactional queues/outbox coverage, and DNS SSRF tests\n',
    '- Repository assertions: 107 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, seven migration-integrity tests, seven tenant/admin isolation tests, six runtime-role policy/permission tests, eleven envelope-encryption tests, eleven native-shadow adapter/API/PostgreSQL tests, transactional queues/outbox coverage, and DNS SSRF tests\n',
)
replace_once(
    '.ai-bridge/current-plan.md',
    '- The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`\n',
    '''- The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
- Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
''',
)
replace_once(
    '.ai-bridge/current-plan.md',
    '6. Integrate the native multi-store adapter behind a shadow-comparison feature flag.\n',
    '6. Wire the selected source platform to invoke the verified shadow adapter after order persistence, then run an opt-in merchant pilot; do not use Guard as the effective decision source.\n',
)

replace_once('.ai-bridge/implementation-status.md', 'Updated: 2026-07-17\n', 'Updated: 2026-07-18\n')
replace_once(
    '.ai-bridge/implementation-status.md',
    'Nine append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch',
    'Ten append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    '| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits                                         |',
    '| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, and tenant-scoped native-shadow comparison reporting                       |',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    '| Native multi-store adapter       | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending                                               |',
    '| Native multi-store adapter       | baseline | Deterministic off/shadow controls, legacy-authoritative failures and durable comparison reporting done; selected source-platform pilot pending |',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    '9. `0009_verification_delivery_queue.sql`\n',
    '9. `0009_verification_delivery_queue.sql`\n10. `0010_native_shadow_comparisons.sql`\n',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    '- `npm run db:check`: nine migrations and committed SHA-256 manifest validated\n',
    '- `npm run db:check`: ten migrations and committed SHA-256 manifest validated\n',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    '- `npm run test`: 28/28 Turbo tasks passed; repository contains 96 assertions\n',
    '- `npm run test`: 28/28 Turbo tasks passed; repository contains 107 assertions\n',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    '- The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`\n',
    '''- The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
- Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
- Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
- Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
- Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
''',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    '- Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.\n',
    '''- Native shadow mode is advisory only; a selected source platform still must invoke it after order persistence and pilot outcomes must be reviewed before any enforcement design.
- Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.
''',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    'Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, and begin native-adapter shadow rollout.',
    'Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, and run an opt-in source-platform shadow pilot.',
)

replace_once(
    'README.md',
    '- PostgreSQL schema, nine append-only migrations, committed SHA-256 manifest, and non-null history checksums\n',
    '- PostgreSQL schema, ten append-only migrations, committed SHA-256 manifest, and non-null history checksums\n',
)
replace_once(
    'README.md',
    '- Provider-neutral managed envelope v2 with per-record data keys, authenticated wrapped-key metadata, structured safe failures, legacy dual-read, and rotation/re-encryption primitives\n',
    '''- Provider-neutral managed envelope v2 with per-record data keys, authenticated wrapped-key metadata, structured safe failures, legacy dual-read, and rotation/re-encryption primitives
- Native multi-store off/deterministic-shadow rollout with legacy-authoritative behavior and tenant-scoped immutable comparison evidence
''',
)
replace_once(
    'README.md',
    '- Pilot outcome calibration before broad automatic blocking\n',
    '- Selected source-platform shadow invocation and pilot outcome calibration before any enforcement or broad automatic blocking\n',
)

replace_once(
    'docs/testing/testing-strategy.md',
    '- Runtime-role identifier validation and explicit table-policy completeness\n',
    '''- Runtime-role identifier validation and explicit table-policy completeness
- Native shadow off mode, deterministic sampling, legacy-authoritative disagreement, and safe assessment/persistence failures
''',
)
replace_once(
    'docs/testing/testing-strategy.md',
    '- Test/live key isolation\n',
    '''- Test/live key isolation
- Dedicated comparison scope, idempotent replay, order binding, and cross-store assessment rejection
''',
)
replace_once(
    'docs/testing/testing-strategy.md',
    '- Organization/store membership authorization\n',
    '''- Organization/store membership authorization
- Concurrent tenant-scoped native shadow comparison persistence and idempotency-conflict rejection
''',
)
replace_once(
    'docs/testing/testing-strategy.md',
    '- allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges.\n',
    '''- allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
- serializing concurrent duplicate native-shadow comparison writes into one immutable row;
- deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
- rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.
''',
)
replace_once(
    'docs/testing/testing-strategy.md',
    '### Webhook destination security coverage\n',
    '''### Native shadow rollout safety coverage

Default tests prove:

- `off` mode performs no Guard assessment or comparison API call;
- deterministic sampling keeps retries for the same store/order in the same cohort;
- the legacy score and decision remain the effective result even when Guard recommends block;
- Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
- the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
- PostgreSQL stores one immutable comparison winner under concurrent duplicate writes and derives Guard score, decision, and confidence server-side;
- the comparison table contains no raw phone, API key, credential, or unrestricted order snapshot.

Live source-platform invocation and enforcement remain outside this milestone. Any enforcement design requires opt-in pilot outcomes and explicit review.

### Webhook destination security coverage
''',
)

print('native shadow milestone documentation synchronized')
