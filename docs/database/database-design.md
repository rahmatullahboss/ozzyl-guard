# Database Design

## Recommended production database

Use PostgreSQL for the standalone product. Cloudflare D1 can remain suitable for an early pilot, but shared intelligence, analytics, concurrent billing, and relational integrity will benefit from PostgreSQL.

## Identity and tenancy

### `users`

- `id`
- `email`
- `password_hash` or managed-auth identifier
- `email_verified_at`
- `platform_role`: `merchant` or explicit `platform_admin`
- `status`
- timestamps

### `organizations`

- `id`
- `name`
- `slug`
- `plan_id`
- `status`
- timestamps

### `organization_members`

- `organization_id`
- `user_id`
- `role`
- permissions
- timestamps

### `stores`

- `id`
- `organization_id`
- `name`
- `platform`
- `external_store_id`
- `timezone`
- `currency`
- `status`
- timestamps

All merchant-owned repository methods must require an explicit organization/store scope. Scope filters must not be optional.

## API and billing

### `api_keys`

- `id`
- `organization_id`
- `store_id` nullable
- `environment`: `test` or `live`
- `key_hash`
- `key_prefix`
- `name`
- `scopes`
- `allowed_origins`
- `last_used_at`
- `expires_at`
- `revoked_at`
- timestamps

Raw API keys are shown once and never stored. Key prefixes are `ozg_test_` and `ozg_live_` followed by sufficient random material.

### `usage_events`

- `id`
- `organization_id`
- `api_key_id`
- `event_type`
- `units`
- `request_id`
- `response_ms`
- `status_code`
- timestamp

Usage entitlement reservation and assessment creation must be atomic or use a design that cannot be bypassed by concurrent requests.

### `subscriptions`

- organization
- plan
- billing status
- cycle dates
- provider references

## Courier subsystem

### `courier_accounts`

- `id`
- `store_id`
- `provider`
- `status`
- `credential_version`
- `last_connected_at`
- `last_success_at`
- `last_failure_at`
- `failure_code`
- timestamps

### `courier_credentials`

- `courier_account_id`
- encrypted credential payload or vault reference
- encryption key version
- timestamps

### `courier_sessions`

- `courier_account_id`
- encrypted cookie/token payload
- `expires_at`
- `validated_at`
- `status`
- timestamps

### `courier_observations`

- `id`
- `store_id`
- `provider`
- `phone_hash`
- optionally encrypted normalized phone for operational lookup
- `total_orders`
- `delivered_orders`
- `returned_orders`
- `cancelled_before_shipping`
- `success_rate`
- `confidence`
- `source_type`
- `observed_at`
- `expires_at`
- encrypted raw payload reference

Unique/index recommendation:

- `(store_id, provider, phone_hash, observed_at)`
- latest-observation index by `(store_id, phone_hash, provider, observed_at desc)`

### `courier_jobs`

- `courier_account_id`
- job type and durable payload
- status and attempts
- scheduled time
- `claimed_by`
- `claimed_at`
- `lease_expires_at`
- started/completed time
- error code

Courier jobs are claimed atomically with `FOR UPDATE SKIP LOCKED`. The current worker owner must match every start, completion, retry, or terminal-failure transition. Expired `claimed` or `processing` jobs may be reclaimed while fresh leases cannot be stolen. Exhausted stale jobs fail closed with `LEASE_EXPIRED`.

Organization, store, and provider scope come from the `courier_accounts` and `stores` relationships. Payload scope fields are compatibility assertions only and must never override relational scope.

## Risk subsystem

### `risk_assessments`

- `id`
- `organization_id`
- `store_id`
- `external_order_id`
- `phone_hash`
- encrypted phone reference if operationally required
- order snapshot fields
- score
- confidence
- risk level
- decision
- engine version
- policy version
- degraded flags
- timestamps

### `risk_signals`

- assessment id
- signal code
- category
- score contribution
- confidence
- description
- evidence reference

### `risk_policies`

- store id
- version
- thresholds
- action configuration
- active flag
- timestamps

### `order_outcomes`

- store/order references
- outcome
- provider
- reason
- source
- confirmed at
- evidence reference

## Event and webhook subsystem

### `webhook_endpoints`

- `id`
- `organization_id`
- optional `store_id`
- HTTPS destination URL
- encrypted signing-secret envelope
- subscribed event-type array
- status
- timestamps

A store-scoped endpoint receives only events for that store. An organization-wide endpoint may receive events for any authorized store in the organization. Endpoint secrets are never stored as plaintext.

### `webhook_deliveries`

- `id`
- `endpoint_id`
- `organization_id`
- optional `store_id`
- stable `event_id`
- canonical `event_type`
- canonical `event_payload`
- `occurred_at`
- status and attempts
- `next_attempt_at`
- `response_status`
- error code
- `claimed_by`
- `claimed_at`
- `lease_expires_at`
- `completed_at`
- timestamps

Assessment and outcome repositories insert matching webhook deliveries in the same PostgreSQL transaction as the newly persisted assessment or outcome. A transaction rollback therefore cannot leave a delivery for data that was not committed, and an idempotency loser does not emit another event.

The persisted event payload contains explicit organization/store identity and the stable event ID/type. It must not include raw phone values, API keys, OTPs, provider credentials, signing secrets, or unrestricted assessment request snapshots.

The unique `(endpoint_id, event_id)` constraint prevents duplicate delivery rows. Event workers claim due rows with `FOR UPDATE SKIP LOCKED`, attach an expiring owner lease, and require the current unexpired owner for delivery, retry, or terminal-failure transitions. Stale work can be reclaimed; exhausted stale work fails with `LEASE_EXPIRED`.

Before a delivery is claimed, its organization/store scope is revalidated against `webhook_endpoints` and `stores`. Mismatched rows fail closed with `WEBHOOK_SCOPE_MISMATCH`.

Recommended operational indexes:

- `(status, next_attempt_at, lease_expires_at)` for claim/recovery scans
- `(organization_id, store_id, created_at desc)` for scoped operations views

## Reputation subsystem

### `reputation_reports`

- reporter store
- subject phone hash
- category
- evidence type
- order/courier reference
- status
- confidence
- expiry/decay data

### `network_reputation`

Materialized/derived score by phone hash:

- positive outcomes
- negative courier-confirmed outcomes
- independent reporters
- confidence
- last evidence time
- decay-adjusted score

### `reputation_disputes`

- report/subject
- reason
- evidence
- review status
- resolution

## Verification subsystem

### `verification_sessions`

- assessment/order/store
- phone hash
- purpose
- channel
- status
- idempotency key
- maximum verification attempts
- expiry
- verified at

### `otp_attempts`

- verification session
- hashed OTP
- attempts
- provider message id
- sent/delivered/failed times
- expiry

Never store OTP plaintext in sessions or attempts.

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

## Initial migration boundaries

Migration 0001 should establish only the Phase 1 foundation:

- users
- sessions
- organizations
- organization_members
- stores
- plans/entitlements
- api_keys
- usage_events
- audit_events

Courier, risk, verification, event, and reputation tables should be introduced in subsequent append-only migrations aligned with coherent milestones.

Current ordered migrations:

1. `0001_foundation.sql` — identity, tenancy, plans, API keys, usage, and audit.
2. `0002_courier.sql` — courier accounts, encrypted credential/session records, observations, and jobs.
3. `0003_risk.sql` — risk policies, assessments, signals, and outcomes.
4. `0004_verification_events.sql` — OTP verification and webhook delivery foundation.
5. `0005_durable_operations.sql` — durable job payloads, idempotent outcomes, and idempotency records.
6. `0006_browser_access.sql` — explicit platform role plus browser dashboard/admin query indexes.
7. `0007_worker_leases.sql` — explicit courier-worker ownership, claim/lease timestamps, stale-job recovery support, and claim scheduling index.
8. `0008_webhook_delivery_leases.sql` — scoped canonical webhook event payloads, event-worker ownership/lease timestamps, completion state, and claim/scope indexes.
9. `0009_verification_delivery_queue.sql` — verification idempotency/attempt controls plus encrypted delivery jobs, owner leases, completion state, and claim/scope indexes.

Migration 0006 does not store raw session material. `user_sessions.token_hash` remains the only persisted session-token representation. The merchant dashboard repository authorizes with `(user_id, organization_id, store_id)` before running any aggregate query.

Migration 0007 is append-only and does not rewrite prior migration files. Courier jobs use explicit owner leases and relational account scope.

Migration 0008 backfills endpoint-derived scope for prior delivery rows. Legacy rows whose canonical event payload cannot be reconstructed are terminalized with `LEGACY_EVENT_PAYLOAD_MISSING` rather than delivered with invented data.

Migration 0009 leaves prior verification records valid, adds nullable idempotency keys for legacy rows, and introduces a separate encrypted delivery queue without placing plaintext phone or OTP material in existing tables.

## Migration history integrity

`packages/database/migrations/manifest.json` records the SHA-256 checksum for every ordered SQL migration. `db:check` requires the manifest and SQL file list to match exactly and rejects changed, missing, extra, empty, reordered, or prohibited destructive migration files.

`ozzyl_guard_migrations` stores `name`, non-null `checksum_sha256`, and `applied_at`. The migration runner holds one PostgreSQL advisory lock on one session, rejects unknown or non-contiguous history, and compares every persisted checksum before applying new work. Existing name-only history rows may receive checksums once, transactionally, only from the committed manifest; the checksum column is then enforced `NOT NULL`.

No numbered domain migration is added for this metadata hardening. The migration runner owns the internal history table, while all application tables and columns remain defined by append-only numbered migrations and the canonical schema package.

## Clean logical restore rehearsal

`npm run db:restore-rehearsal` requires `DATABASE_URL` and a distinct pre-created `RESTORE_DATABASE_URL` with no public relations. It never creates, drops, cleans, or overwrites the source database. PostgreSQL credentials are supplied to client tools through `PG*` environment variables rather than command arguments.

The rehearsal creates a custom-format `pg_dump`, restores it with `pg_restore`, validates complete migration history, compares a canonical public-schema fingerprint, table counts, sequence state, migration rows, and migration replay. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` additionally compares secret-safe per-table hashes of every row and is enabled in CI; large production-equivalent drills may use counts or a separately approved snapshot-integrity procedure when a full hash scan is too expensive.

Repository CI applies the complete migration set twice, verifies the history table, and restores into a clean PostgreSQL 16 database. Managed-provider automated backup retention and point-in-time recovery must still be demonstrated separately before the merchant pilot.
