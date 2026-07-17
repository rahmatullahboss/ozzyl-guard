# Ozzyl Guard — Current Implementation Plan

Updated: 2026-07-17

## Current state

A runnable standalone MVP foundation and eight production-hardening slices are complete:

1. dashboard/admin browser authentication with live PostgreSQL data and tenant revalidation;
2. accepted provider-neutral infrastructure ADRs for deployment, managed PostgreSQL, durable work/cache, KMS envelope encryption, and observability;
3. PostgreSQL concurrency and idempotency hardening for usage reservations, assessments, outcomes, and tenant-scoped operation records;
4. lease-owned PostgreSQL courier-worker claims with stale-job recovery, authoritative account scope, and migration replay verification;
5. transactional PostgreSQL webhook outbox emission and a lease-owned event worker with encrypted signing-secret access and DNS-aware SSRF controls;
6. transactional encrypted OTP delivery queues, tenant-scoped database verification, and a lease-owned private verification worker with no provider I/O in API requests;
7. SHA-256-bound migration history integrity and a clean PostgreSQL logical backup/restore rehearsal with schema, data, sequence, history, and replay verification;
8. authoritative tenant-scope revalidation across API keys, feature assembly, assessment/outcome writes, dashboards and administration, plus an explicit least-privilege PostgreSQL runtime-role grant boundary.

Concrete provider selection and provisioning remain external production work.

## Completed

- [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
- [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
- [x] Canonical shared API/error/event contracts
- [x] PostgreSQL/Drizzle schema and nine append-only migrations
- [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
- [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
- [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
- [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
- [x] Courier adapter contract and Steadfast normalized adapter
- [x] Playwright Steadfast session driver with structured errors
- [x] Shared AES-GCM envelope-encryption package for local/self-hosted sensitive-record boundaries
- [x] Runnable PostgreSQL courier session and observation workers
- [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
- [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
- [x] OTP hashing, expiry, rate/attempt limits, tenant binding, and transactional encrypted delivery jobs
- [x] API OTP send returns queued work without provider network I/O
- [x] Tenant-scoped PostgreSQL OTP verification with verified/failed webhook outbox events
- [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
- [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
- [x] Explicit-role platform admin with live global operations data
- [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
- [x] Docker/API/Playwright worker/courier/event/verification separation and PostgreSQL CI service
- [x] Architecture dependency-boundary CI guard
- [x] Provider-neutral production deployment topology ADR
- [x] Managed PostgreSQL production baseline ADR
- [x] PostgreSQL-first durable work and optional cache boundary ADR
- [x] Managed secrets and KMS envelope-encryption ADR
- [x] Vendor-neutral OpenTelemetry observability ADR
- [x] Concurrent duplicate usage reservations serialize into one charge and replay responses
- [x] Concurrent usage reservations cannot exceed the plan limit
- [x] Concurrent assessment saves return the single persisted assessment without orphan signal writes
- [x] Concurrent outcome writes resolve as one insert and one replay
- [x] Operation idempotency records remain isolated by organization and store
- [x] Competing courier workers atomically claim different due jobs with `SKIP LOCKED`
- [x] Fresh courier leases cannot be stolen and expired leases can be reclaimed
- [x] Expired or previous courier owners cannot complete or fail jobs
- [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
- [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
- [x] Assessments and outcomes enqueue matching webhook deliveries inside the same PostgreSQL transaction
- [x] Webhook deliveries persist explicit organization/store scope and canonical event payloads without raw phone values
- [x] Competing event workers claim distinct webhook deliveries with `SKIP LOCKED`
- [x] Webhook leases reject expired owners, recover stale work, schedule retryable failures, and fail exhausted work closed
- [x] Event delivery decrypts endpoint signing secrets only inside the worker with endpoint-bound authenticated context
- [x] Webhook destinations require HTTPS, reject credentials/local/non-public addresses, and validate DNS results before fetch
- [x] Competing verification workers atomically claim different due jobs with `SKIP LOCKED`
- [x] Verification leases reject expired owners, recover stale work, clear retry ownership, and fail exhausted work closed
- [x] Verification scope mismatch fails both the job and authoritative session closed
- [x] Job-bound encrypted payloads validate tenant, purpose, phone HMAC, and OTP hash before provider I/O
- [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op
- [x] Every migration file is bound to a committed SHA-256 manifest and a non-null database history checksum
- [x] Unknown, gapped, missing-checksum, or checksum-mismatched migration history fails closed
- [x] CI restores a real `pg_dump` into a clean distinct PostgreSQL database and compares schema, full table data hashes, sequence state, migration history, and replay
- [x] API-key resolution, feature assembly, assessment writes, and outcome writes fail closed when organization/store ownership does not match an active tenant
- [x] Merchant dashboard, platform admin, webhook administration, and verification administration repositories reauthorize relational scope and isolate tenant data
- [x] Webhook and verification administration records omit encrypted signing secrets, OTP hashes, encrypted job payloads, and raw phone material
- [x] `db:runtime-grants` applies an explicit current-table DML policy from the migration owner to an externally created non-owner runtime login
- [x] CI proves the runtime role cannot read migration history, delete rows, create/alter tables, create schema objects, own the database/schema/relations, or inherit elevated role privileges

## Verified baseline

- Formatting check: passed
- ESLint with zero warnings: passed
- Nine migration files ordered/non-empty/non-destructive: passed
- First migration apply and immediate migration replay: passed
- Architecture import boundaries: passed
- Typecheck: 19 of 19 workspaces passed
- Test/build dependency tasks: 28 of 28 passed
- Repository assertions: 87 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, seven migration-integrity tests, seven tenant/admin isolation tests, six runtime-role policy/permission tests, transactional queues/outbox coverage, DNS SSRF tests, and envelope-cipher tests
- Production builds: 19 of 19 workspaces passed
- WooCommerce PHP syntax: passed
- npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
- Worker lease final CI run `29545309665`, job `87776201468`: all gates passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
- The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
- Webhook outbox final CI run `29550097719`, job `87790624617`: audit, formatting, lint, eight migrations, migration replay, architecture, 19 typechecks, 53 assertions, 19 builds, and PHP lint passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
- The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
- Verification queue targeted run `29553255223`, job `87800077114`: nine migrations/replay, verification/API typechecks, lease/payload/API tests, builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
- Verification queue final CI run `29554260434`, job `87803061854`: audit, formatting, lint, nine migrations, migration replay, architecture, 19 typechecks, 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
- The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
- Restore-integrity source-head CI run `29556041278`, job `87808175661`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore rehearsal, architecture, 19 typechecks, 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
- Restore-integrity final CI run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
- The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
- Runtime-role/tenant-isolation source-head CI run `29560049322`, job `87820368024`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean full-data-hash restore, runtime-role grant verification, architecture, 19 typechecks, 87 assertions, 19 builds, and PHP lint passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
- Runtime-role/tenant-isolation final CI run `29574499372`, job `87865756151`: the same complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
- The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
- Canonical documentation links before this slice: zero known broken internal links
- `tracker.yml` YAML structure remains valid
- Prohibited source-pattern search: no matches

The current GitHub-only connector workspace cannot run the repository-local continuation exporter, so `.ai-bridge/pro-context.md` must be regenerated from the local workspace. The canonical tracker, plan, status, decisions, database design, security, testing, deployment, and operations documents are current.

## Next production milestone

1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime identities and a managed-provider point-in-time restore drill.
2. Replace local encryption-key handling with the accepted managed KMS envelope-encryption implementation.
3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
5. Add distributed rate limiting/cache only when multiple replicas require it.
6. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
7. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.

## External blockers

- Authorized Steadfast merchant/test credentials
- Steadfast provider-terms and merchant-authorization review
- Deployment platform, account, primary region, and budget
- Managed PostgreSQL provider and service tier
- Managed secret store and KMS/vault provider
- Observability backend and retention policy
- OTP provider account and credentials
- Production account recovery/MFA or managed identity-provider decision
- Repository visibility correction from currently reported public to expected private
- Pilot outcome data for false-positive/false-negative calibration

## Non-negotiable continuation rules

- Do not add a second risk engine.
- Do not call providers from the risk engine or synchronous checkout path.
- Do not deliver webhooks or OTP messages synchronously in checkout/API request handling.
- Do not store/log raw API keys, passwords, OTPs, courier cookies, provider credentials, or webhook signing secrets.
- Do not use API keys as dashboard user sessions.
- Require organization/store scope in all merchant repositories, events, and jobs.
- Add new migrations; never edit applied migrations.
- Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
- Keep Redis/cache state non-authoritative.
- Keep unknown/provider failure explicit and policy-controlled.
- Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
