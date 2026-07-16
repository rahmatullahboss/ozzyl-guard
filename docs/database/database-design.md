# Database Design

## Recommended production database

Use PostgreSQL for the standalone product. Cloudflare D1 can remain suitable for an early pilot, but shared intelligence, analytics, concurrent billing, and relational integrity will benefit from PostgreSQL.

## Identity and tenancy

### `users`

- `id`
- `email`
- `password_hash` or managed-auth identifier
- `email_verified_at`
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

### `courier_sync_jobs`

- provider/account
- job type
- status
- attempts
- scheduled time
- started/completed time
- error code

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
- expiry
- verified at

### `otp_attempts`

- verification session
- hashed OTP
- attempts
- provider message id
- sent/delivered/failed times
- expiry

Never store OTP plaintext.

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

Courier, risk, verification, and reputation tables should be introduced in subsequent append-only migrations aligned with coherent milestones.
