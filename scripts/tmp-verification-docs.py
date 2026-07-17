from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    target = Path(path)
    text = target.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected one match in {path}, found {count}: {old[:180]!r}")
    target.write_text(text.replace(old, new))


# tracker.yml
replace_once(
    "tracker.yml",
    """  - durable_event_payloads_require_explicit_organization_and_store_scope
""",
    """  - durable_event_payloads_require_explicit_organization_and_store_scope
  - verification_provider_delivery_only_runs_in_private_workers
  - verification_job_plaintext_is_encrypted_and_context_bound
""",
)
replace_once(
    "tracker.yml",
    """  - postgresql_schema_and_eight_migrations
""",
    """  - postgresql_schema_and_nine_migrations
""",
)
replace_once(
    "tracker.yml",
    """  - durable_postgresql_webhook_outbox_and_event_worker
""",
    """  - durable_postgresql_webhook_outbox_and_event_worker
  - durable_encrypted_postgresql_verification_queue_and_worker
  - tenant_scoped_postgresql_otp_verification_repository
""",
)
replace_once(
    "tracker.yml",
    """  - docker_compose_api_courier_and_event_worker_baseline
""",
    """  - docker_compose_api_courier_event_and_opt_in_verification_worker_baseline
""",
)
replace_once(
    "tracker.yml",
    """  - postgresql_webhook_worker_atomic_claim_and_lease_recovery
""",
    """  - postgresql_webhook_worker_atomic_claim_and_lease_recovery
  - postgresql_verification_worker_atomic_claim_and_lease_recovery
  - verification_payload_context_phone_hash_and_otp_hash_validation
  - otp_provider_delivery_removed_from_synchronous_api_requests
""",
)
replace_once(
    "tracker.yml",
    """  status: passed
""",
    """  status: passed_for_targeted_verification_queue_validation_pending_full_ci
""",
)
replace_once(
    "tracker.yml",
    """    migrations: 8_of_8
""",
    """    migrations: 9_of_9
""",
)
replace_once(
    "tracker.yml",
    """    remote_assertions: 53_passed
    postgresql_concurrency_tests: 6_of_6_passed
    postgresql_courier_worker_lease_tests: 5_of_5_passed
    postgresql_webhook_worker_lease_tests: 5_of_5_passed
""",
    """    remote_assertions: 67_passed_in_targeted_and_existing_suites
    postgresql_concurrency_tests: 7_of_7_passed
    postgresql_courier_worker_lease_tests: 5_of_5_passed
    postgresql_webhook_worker_lease_tests: 5_of_5_passed
    postgresql_verification_worker_lease_tests: 5_of_5_passed
    verification_payload_validation_tests: 3_of_3_passed
""",
)
replace_once(
    "tracker.yml",
    """  remote_ci:
    status: passed
    run_id: 29550097719
    job_id: 87790624617
    job: verify
    tested_head: fb0a68bac4628a96f82413b5d71092e4f0367536
    merged_main_commit: 752d08776f35345e5ec002d9a9ca720f304df8cc
    completed: 2026-07-17
    steps: audit_format_lint_eight_migrations_migration_replay_architecture_typecheck_tests_build_php_all_passed
    postgresql_webhook_worker_lease_tests: 5_of_5_passed
  pending_follow_up:
    - continuation_bundle_local_exporter_refresh
""",
    """  remote_ci:
    status: pending_full_documentation_head_ci
    previous_run_id: 29550097719
    previous_job_id: 87790624617
    previous_tested_head: fb0a68bac4628a96f82413b5d71092e4f0367536
    previous_merged_main_commit: 752d08776f35345e5ec002d9a9ca720f304df8cc
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
    - final_documentation_head_ci
    - continuation_bundle_local_exporter_refresh
""",
)
replace_once(
    "tracker.yml",
    """    - packages/database/migrations/0008_webhook_delivery_leases.sql
""",
    """    - packages/database/migrations/0008_webhook_delivery_leases.sql
    - packages/database/migrations/0009_verification_delivery_queue.sql
""",
)
replace_once(
    "tracker.yml",
    """    - implement_encrypted_verification_queue_runner_with_worker_leases
    - move_otp_provider_delivery_out_of_synchronous_api_requests
    - add_clean_restore_rehearsal_and_migration_integrity_checks
""",
    """    - add_clean_restore_rehearsal_and_migration_integrity_checks
""",
)
replace_once(
    "tracker.yml",
    """  - production_egress_policy_is_still_required_for_dns_rebinding_defense
""",
    """  - production_egress_policy_is_still_required_for_dns_rebinding_defense
  - otp_send_requests_create_session_hash_and_encrypted_job_in_one_transaction
  - otp_provider_delivery_occurs_only_in_the_private_verification_worker
  - verification_jobs_use_atomic_claims_expiring_leases_and_owner_checked_transitions
  - verification_scope_mismatch_fails_the_job_and_authoritative_session_closed
  - verification_payloads_are_bound_to_job_context_tenant_phone_hmac_and_otp_hash
  - selected_otp_provider_module_and_credentials_remain_external
""",
)

# Current plan
replace_once(
    ".ai-bridge/current-plan.md",
    """A runnable standalone MVP foundation and five production-hardening slices are complete:
""",
    """A runnable standalone MVP foundation and six production-hardening slices are complete:
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """5. transactional PostgreSQL webhook outbox emission and a lease-owned event worker with encrypted signing-secret access and DNS-aware SSRF controls.
""",
    """5. transactional PostgreSQL webhook outbox emission and a lease-owned event worker with encrypted signing-secret access and DNS-aware SSRF controls;
6. transactional encrypted OTP delivery queues, tenant-scoped database verification, and a lease-owned private verification worker with no provider I/O in API requests.
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- [x] PostgreSQL/Drizzle schema and eight append-only migrations
""",
    """- [x] PostgreSQL/Drizzle schema and nine append-only migrations
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- [x] OTP hashing, expiry, rate/attempt limits, and tenant binding
""",
    """- [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
- [x] API OTP send returns queued work without provider network I/O
- [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- [x] Docker/API/Playwright worker/courier/event separation and PostgreSQL CI service
""",
    """- [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
- [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
""",
    """- [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
- [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
- [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
- [x] Verification scope mismatch fails both the job and authoritative session closed
- [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
- [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- Eight migration files ordered/non-empty/non-destructive: passed
""",
    """- Nine migration files ordered/non-empty/non-destructive: passed in targeted validation
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- Repository assertions: 53 passed, including five courier lease tests, five webhook lease tests, transactional outbox coverage, DNS SSRF tests, and envelope-cipher tests
""",
    """- Repository assertions: 67 covered across the existing and targeted suites, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, transactional queues/outbox coverage, DNS SSRF tests, and envelope-cipher tests
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """- The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
""",
    """- The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
- Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
- Final full documentation-head CI remains required before merge
""",
)
replace_once(
    ".ai-bridge/current-plan.md",
    """1. Implement the durable verification queue runner with encrypted phone/OTP job material and the accepted PostgreSQL ownership/lease pattern.
2. Move OTP provider delivery fully out of the synchronous API request path while preserving rate, expiry, attempt, and tenant controls.
3. Add clean backup/restore rehearsal and migration-table integrity verification.
4. Expand PostgreSQL isolation coverage for feature assembly, dashboards, webhook administration, and runtime-role versus migration-role permissions.
5. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010.
6. Replace local encryption-key handling with the accepted managed KMS envelope-encryption implementation.
7. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
8. Select the production OTP provider account and credentials for the verification runner.
9. Add distributed rate limiting/cache only when multiple replicas require it.
10. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
11. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
""",
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
)

# Implementation status
replace_once(
    ".ai-bridge/implementation-status.md",
    """| Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, and event-worker services                              |
""",
    """| Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services         |
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """| Database/migrations              | done     | Eight append-only migrations; clean PostgreSQL 16 apply and immediate replay passed in CI                                                      |
""",
    """| Database/migrations              | done     | Nine append-only migrations; clean PostgreSQL 16 apply and immediate replay passed in targeted validation                                     |
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """| Durable work architecture        | baseline | PostgreSQL ownership/lease pattern proven for courier and webhook work; verification runner and broader operational dead-letter tooling remain |
""",
    """| Durable work architecture        | baseline | PostgreSQL ownership/lease pattern proven for courier, webhook, and verification work; broader operational dead-letter tooling remains        |
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """| OTP verification                 | baseline | Secure service abstraction and worker library; durable encrypted queue/runner and production provider remain                                   |
""",
    """| OTP verification                 | baseline | Transactional encrypted queue, tenant-scoped verifier, lease-owned private runner, retries, and failure events done; provider account remains  |
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """8. `0008_webhook_delivery_leases.sql`
""",
    """8. `0008_webhook_delivery_leases.sql`
9. `0009_verification_delivery_queue.sql`
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """- `npm run db:check`: eight migrations validated
""",
    """- targeted `npm run db:check`: nine migrations validated
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """- `npm run test`: 28/28 Turbo tasks passed; repository contains 53 assertions
""",
    """- targeted and existing suites cover 67 assertions; full 28-task repository CI remains the merge gate
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """- The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
""",
    """- The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
- Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
- Final full documentation-head CI remains pending before merge
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """- Durable PostgreSQL work still needs an encrypted verification queue/runner, clean restore rehearsal, broader dead-letter operations, and runtime-role permission tests.
""",
    """- Durable PostgreSQL work still needs clean restore rehearsal, broader dead-letter/replay operations, verification administration, and runtime-role permission tests.
- The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
""",
)
replace_once(
    ".ai-bridge/implementation-status.md",
    """Implement the durable verification queue/runner with encrypted phone and OTP job material, remove OTP provider delivery from the synchronous API path, then add restore rehearsal, broader repository/role isolation, provision the accepted infrastructure baseline, implement managed encryption, validate Steadfast, select the OTP provider, and begin native-adapter shadow rollout.
""",
    """Add restore rehearsal and migration integrity, broaden repository/runtime-role isolation, provision the accepted infrastructure baseline, implement managed encryption, validate Steadfast, select and bundle the OTP provider adapter for the completed runner, and begin native-adapter shadow rollout.
""",
)

# Decisions
replace_once(
    ".ai-bridge/decisions.md",
    """27. The reusable local AES-256-GCM envelope implementation lives in `@ozzyl/encryption`; provider-specific managed KMS implementation will supersede key handling without changing caller boundaries.
""",
    """27. The reusable local AES-256-GCM envelope implementation lives in `@ozzyl/encryption`; provider-specific managed KMS implementation will supersede key handling without changing caller boundaries.
28. OTP send requests create the verification session, OTP hash, and job-context-encrypted delivery payload inside one PostgreSQL transaction. The API returns queued state and performs no OTP provider network call.
29. Verification delivery jobs use atomic `SKIP LOCKED` claims, explicit owners, expiring leases, owner-checked transitions, stale recovery, bounded retry, and terminal failure. Scope mismatch fails both the job and authoritative session closed.
30. The private verification worker decrypts job material only with `verification-job:<job-id>` context and validates organization, store, purpose, phone HMAC, and OTP hash before provider I/O. The production provider adapter/account remains an explicit external selection.
""",
)
replace_once(
    ".ai-bridge/decisions.md",
    """| Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary              |
""",
    """| Plaintext webhook signing secret in worker configuration                 | Persist encrypted endpoint material and decrypt only at the worker boundary              |
| Synchronous OTP provider delivery from the API                                | Persist an encrypted delivery job transactionally and deliver only from the private worker |
| Plaintext phone or OTP in durable verification jobs                            | Encrypt with job-bound context and validate against phone HMAC and OTP hash before use     |
""",
)
replace_once(
    ".ai-bridge/decisions.md",
    """No credentials are needed for the documented infrastructure architecture or local webhook outbox implementation.
""",
    """No credentials are needed for the documented infrastructure architecture, webhook outbox, or provider-neutral verification runner implementation.
""",
)

# README
replace_once(
    "README.md",
    """- PostgreSQL schema and five append-only migrations
""",
    """- PostgreSQL schema and nine append-only migrations
""",
)
replace_once(
    "README.md",
    """- OTP provider abstraction with hashing, expiry, attempt limits, rate limits, and tenant binding
- Signed webhook delivery worker library with retry and SSRF protection
""",
    """- Transactional encrypted OTP delivery queue, tenant-scoped verification, and lease-owned private verification worker
- Provider-neutral OTP adapter boundary with hashing, expiry, attempt/rate limits, payload validation, and no synchronous provider I/O
- Durable signed webhook outbox/worker with retries, leases, encrypted secrets, and DNS-aware SSRF protection
""",
)
replace_once(
    "README.md",
    """Courier workers:

```bash
npm run start -w @ozzyl/courier-session-worker
npm run start -w @ozzyl/courier-sync-worker
```
""",
    """Private workers:

```bash
npm run start -w @ozzyl/courier-session-worker
npm run start -w @ozzyl/courier-sync-worker
npm run start -w @ozzyl/event-worker
# Requires a reviewed provider module/account in addition to the standard secrets:
npm run start -w @ozzyl/verification-worker
```
""",
)
replace_once(
    "README.md",
    """The Compose topology separates PostgreSQL, migrations, API, Playwright session worker, and courier sync worker. Dashboard/admin static hosting is intentionally deployment-platform dependent.
""",
    """The Compose topology separates PostgreSQL, migrations, API, Playwright session, courier sync, and event workers. The verification worker is opt-in with `docker compose --profile verification up --build` because a reviewed provider module/account is not bundled. Dashboard/admin static hosting is deployment-platform dependent.
""",
)

# API specification
replace_once(
    "docs/api/api-specification.md",
    """```json
{
  "assessment_id": "ras_123",
  "phone": "01712345678",
  "purpose": "cod_order_confirmation"
}
```

## Verify OTP
""",
    """```json
{
  "assessment_id": "ras_123",
  "phone": "01712345678",
  "purpose": "cod_order_confirmation"
}
```

`Idempotency-Key` is required. A new request returns `202 Accepted`:

```json
{
  "success": true,
  "verification_id": "ver_123",
  "expires_at": "2026-07-17T10:05:00.000Z",
  "status": "queued"
}
```

The API creates the scoped verification session, OTP hash, and encrypted provider-delivery job transactionally. It does not call the OTP provider. An idempotent replay returns the same logical response with `200 OK`.

## Verify OTP
""",
)
replace_once(
    "docs/api/api-specification.md",
    """```json
{
  "verification_id": "ver_123",
  "otp": "123456"
}
```

## Submit outcome
""",
    """```json
{
  "verification_id": "ver_123",
  "otp": "123456"
}
```

Verification is tenant-scoped and database-only. While provider delivery is still queued, the API returns `409 DELIVERY_PENDING`; terminal delivery failure returns `409 DELIVERY_FAILED`; expired/invalid OTP and attempt-limit behavior remain explicit. Successful verification emits `verification.verified` through the durable webhook outbox.

## Submit outcome
""",
)
replace_once(
    "docs/api/api-specification.md",
    """- Idempotent retries return the original logically equivalent result.
""",
    """- Idempotent retries return the original logically equivalent result.
- Webhook and OTP provider network delivery never run in the synchronous API or checkout request path.
""",
)

# Database design
replace_once(
    "docs/database/database-design.md",
    """- status
- expiry
- verified at
""",
    """- status
- idempotency key
- maximum verification attempts
- expiry
- verified at
""",
)
replace_once(
    "docs/database/database-design.md",
    """Never store OTP plaintext. The next durable-work milestone must introduce encrypted provider-delivery job material rather than adding raw phone or OTP values to these records.
""",
    """Never store OTP plaintext in sessions or attempts.

### `verification_jobs`

- verification session
- explicit organization/store scope
- job type
- job-context-encrypted phone/OTP/purpose payload
- status and attempts
- next attempt time
- provider message id and structured error code
- `claimed_by`, `claimed_at`, and `lease_expires_at`
- completion and standard timestamps

OTP send creation inserts the verification session, hash-only OTP attempt, and encrypted job in one transaction. The API never delivers the provider message synchronously. Workers claim due jobs with `FOR UPDATE SKIP LOCKED`; every transition requires the current unexpired owner and revalidates the job scope against the authoritative session/store relationship. Scope mismatch, stale exhaustion, payload mismatch, or decryption failure fails closed.

The ciphertext context is `verification-job:<job-id>`. Before provider I/O, the worker validates tenant, purpose, phone HMAC, and OTP hash. Queue rows and logs never contain plaintext phone or OTP values.
""",
)
replace_once(
    "docs/database/database-design.md",
    """8. `0008_webhook_delivery_leases.sql` — scoped canonical webhook event payloads, event-worker ownership/lease timestamps, completion state, and claim/scope indexes.
""",
    """8. `0008_webhook_delivery_leases.sql` — scoped canonical webhook event payloads, event-worker ownership/lease timestamps, completion state, and claim/scope indexes.
9. `0009_verification_delivery_queue.sql` — verification idempotency/attempt controls plus encrypted delivery jobs, owner leases, completion state, and claim/scope indexes.
""",
)
replace_once(
    "docs/database/database-design.md",
    """Migration 0008 backfills endpoint-derived scope for prior delivery rows. Legacy rows whose canonical event payload cannot be reconstructed are terminalized with `LEGACY_EVENT_PAYLOAD_MISSING` rather than delivered with invented data.
""",
    """Migration 0008 backfills endpoint-derived scope for prior delivery rows. Legacy rows whose canonical event payload cannot be reconstructed are terminalized with `LEGACY_EVENT_PAYLOAD_MISSING` rather than delivered with invented data.

Migration 0009 leaves prior verification records valid, adds nullable idempotency keys for legacy rows, and introduces a separate encrypted delivery queue without placing plaintext phone or OTP material in existing tables.
""",
)

# Security
replace_once(
    "docs/security/security-privacy.md",
    """- Separate authenticated encryption context for credentials, sessions, webhook endpoints, and future verification jobs
""",
    """- Separate authenticated encryption context for credentials, sessions, webhook endpoints, and verification jobs
""",
)
replace_once(
    "docs/security/security-privacy.md",
    """- Move provider delivery out of synchronous API handling
- Encrypt any future durable job material that must contain the delivery phone or OTP
- Bind future verification-job ciphertext to the job/session scope through authenticated encryption context
""",
    """- Provider delivery runs only in the private verification worker, never synchronous API handling
- Persist phone and OTP for delivery only inside an encrypted job payload; queue columns and logs remain non-sensitive
- Bind ciphertext to `verification-job:<job-id>` authenticated context
- Validate organization, store, purpose, phone HMAC, and OTP hash before provider I/O
- Require current unexpired lease ownership for start, retry, delivery, and failure transitions
- Fail both the job and authoritative session closed on relational scope mismatch
- Pass a stable verification idempotency key to provider adapters to reduce duplicate sends after uncertain outcomes
""",
)
replace_once(
    "docs/security/security-privacy.md",
    """Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, or logs.
""",
    """Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, verifications, or logs.
""",
)

# Testing strategy
replace_once(
    "docs/testing/testing-strategy.md",
    """- OTP send/verify
""",
    """- Transactional encrypted OTP queue creation and tenant-scoped verification
- Lease-owned OTP provider delivery and retry/failure state
""",
)
replace_once(
    "docs/testing/testing-strategy.md",
    """- failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship.
""",
    """- failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
- serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
- verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
- competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
- protecting fresh verification leases and rejecting expired owners;
- reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
- failing both the verification job and authoritative session on persisted scope mismatch.
""",
)
replace_once(
    "docs/testing/testing-strategy.md",
    """### Migration replay coverage
""",
    """### Verification payload security coverage

Default tests prove:

- job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
- tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
- provider rejection is terminal while structured retryable provider errors use bounded backoff;
- reporter state and logs do not receive plaintext OTP values;
- provider I/O is not invoked after payload, scope, expiry, or lease failure.

### Migration replay coverage
""",
)
replace_once(
    "docs/testing/testing-strategy.md",
    """- encrypted verification-queue claims, leases, retries, provider delivery, and terminal-failure transitions;
""",
    "",
)
replace_once(
    "docs/testing/testing-strategy.md",
    """- Worker lease ownership and stale-owner rejection
- Job payload scope tampering
""",
    """- Worker lease ownership and stale-owner rejection
- Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
""",
)

# Deployment
replace_once(
    "docs/operations/deployment.md",
    """- `Dockerfile` for API, migration, courier-sync, and event workers
""",
    """- `Dockerfile` for API, migration, courier-sync, event, and verification workers
""",
)
replace_once(
    "docs/operations/deployment.md",
    """- `docker-compose.yml` for PostgreSQL, migration job, API, session worker, courier-sync worker, and event worker
""",
    """- `docker-compose.yml` for PostgreSQL, migration job, API, session worker, courier-sync worker, event worker, and an opt-in verification profile
""",
)
replace_once(
    "docs/operations/deployment.md",
    """- independently runnable `workers/event-worker/dist/runner.js`
""",
    """- independently runnable `workers/event-worker/dist/runner.js`
- independently runnable `workers/verification-worker/dist/runner.js` after a reviewed provider module is bundled/configured
""",
)
replace_once(
    "docs/operations/deployment.md",
    """- verification runner after the encrypted queue implementation and provider selection
""",
    """- verification runner; provider adapter/account selection remains required before enabling delivery
""",
)
replace_once(
    "docs/operations/deployment.md",
    """The Playwright, courier-sync, event, and future verification workers must not receive public traffic and must never run inside checkout request handling. Merchant webhook delivery and OTP provider delivery remain asynchronous.
""",
    """The Playwright, courier-sync, event, and verification workers must not receive public traffic and must never run inside checkout request handling. Merchant webhook delivery and OTP provider delivery are asynchronous.
""",
)
replace_once(
    "docs/operations/deployment.md",
    """## Environment stages
""",
    """## Verification-worker runtime

The verification worker requires:

- `DATABASE_URL`;
- local/self-hosted `CREDENTIAL_ENCRYPTION_KEY` and `CREDENTIAL_ENCRYPTION_KEY_VERSION` until managed KMS supersedes them;
- `PHONE_HMAC_KEY` and `OTP_HASH_SECRET` matching the API deployment;
- a reviewed, bundled `OTP_PROVIDER_MODULE` exporting `createOtpDeliveryProvider()`;
- provider-specific secrets such as sender ID/API key supplied only through the approved secret manager;
- optional worker ID, poll, lease, max-attempt, and provider-timeout settings.

`VERIFICATION_WORKER_LEASE_MS` must exceed `OTP_PROVIDER_TIMEOUT_MS` by more than five seconds. Each replica needs a stable unique worker ID, private ingress, least-privilege database/KMS access, and only the egress required by the selected provider. The Compose service is behind the `verification` profile because no provider is selected or bundled in this milestone.

## Environment stages
""",
)
replace_once(
    "docs/operations/deployment.md",
    """Migration 0008 is append-only and immutable after application. Future webhook-delivery schema changes require a new migration.
""",
    """Migrations 0008 and 0009 are append-only and immutable after application. Future webhook or verification-delivery schema changes require a new migration.
""",
)
replace_once(
    "docs/operations/deployment.md",
    """- all eight migrations apply to a clean managed PostgreSQL 16+ database;
""",
    """- all nine migrations apply to a clean managed PostgreSQL 16+ database;
""",
)
replace_once(
    "docs/operations/deployment.md",
    """- Fail closed when endpoint-secret decryption, event scope validation, or worker lease ownership fails.
""",
    """- Fail closed when endpoint/job decryption, event/verification scope validation, payload assertions, or worker lease ownership fails.
""",
)

# Operations and observability
replace_once(
    "docs/operations/operations-observability.md",
    """- OTP queued/sent/delivered/failed
- Verification success rate
- Provider latency
- Resend rate
- Abuse blocks
- Queue lag and dead-letter count

The durable verification runner is still pending. Until it is implemented, production readiness must not claim asynchronous OTP delivery.
""",
    """- OTP queued/sent/delivered/failed
- Verification success rate
- Provider latency and timeout rate
- Claim throughput by verification-worker replica
- Fresh/recovered/lost lease counts
- Retry rate and attempts distribution
- Payload decryption/validation and scope-mismatch failures
- Resend rate and abuse blocks
- Queue lag, oldest due job, exhausted `LEASE_EXPIRED`, and dead-letter count

The durable runner is implemented, but production delivery remains disabled until a reviewed provider adapter/account is selected, bundled, configured, and validated in staging.
""",
)
replace_once(
    "docs/operations/operations-observability.md",
    """- future OTP attempt.
""",
    """- verification queue transaction, job claim, payload validation, provider attempt, and completion without phone/OTP attributes.
""",
)
replace_once(
    "docs/operations/operations-observability.md",
    """- OTP delivery failure spike after the verification runner exists
""",
    """- OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
""",
)
replace_once(
    "docs/operations/operations-observability.md",
    """- OTP provider outage
""",
    """- OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
""",
)
replace_once(
    "docs/operations/operations-observability.md",
    """The event worker currently emits startup and structured error records. Production instrumentation must add counters, histograms, and correlation spans without serializing signing secrets, canonical payload bodies, or DNS answer details that disclose internal topology.
""",
    """Event and verification workers emit startup and structured error records. Production instrumentation must add counters, histograms, and correlation spans without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, provider credentials, or DNS answer details that disclose internal topology.
""",
)
