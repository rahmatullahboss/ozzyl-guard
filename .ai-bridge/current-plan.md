# Ozzyl Guard — Current Implementation Plan

Updated: 2026-07-17

## Current state

A runnable standalone MVP foundation and four production-hardening slices are complete:

1. dashboard/admin browser authentication with live PostgreSQL data and tenant revalidation;
2. accepted provider-neutral infrastructure ADRs for deployment, managed PostgreSQL, durable work/cache, KMS envelope encryption, and observability;
3. PostgreSQL concurrency and idempotency hardening for usage reservations, assessments, outcomes, and tenant-scoped operation records;
4. lease-owned PostgreSQL courier-worker claims with stale-job recovery, authoritative account scope, and migration replay verification.

Concrete provider selection and provisioning remain external production work.

## Completed

- [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
- [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
- [x] Canonical shared API/error/event contracts
- [x] PostgreSQL/Drizzle schema and seven append-only migrations
- [x] Users, organizations, stores, memberships, plans, audit events, hash-only API keys, and explicit platform role
- [x] Argon2 password utilities and opaque hash-only browser sessions with CSRF protection
- [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
- [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
- [x] Courier adapter contract and Steadfast normalized adapter
- [x] Playwright Steadfast session driver with structured errors
- [x] AES-GCM credential/session envelope boundary for local/self-hosted use
- [x] Runnable PostgreSQL courier session and observation workers
- [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
- [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
- [x] OTP hashing, expiry, rate/attempt limits, and tenant binding
- [x] Signed webhook delivery library with replay timestamp and SSRF controls
- [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
- [x] Authenticated merchant dashboard with live tenant-scoped PostgreSQL data
- [x] Explicit-role platform admin with live global operations data
- [x] Browser/API security tests plus PostgreSQL session and tenant-isolation integration tests
- [x] Docker/API/Playwright worker separation and PostgreSQL CI service
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
- [x] Fresh worker leases cannot be stolen and expired leases can be reclaimed
- [x] Expired or previous worker owners cannot complete or fail jobs
- [x] State transitions require the current worker owner and exhausted stale jobs fail closed
- [x] Retryable courier failures clear ownership and return jobs to the durable queue with backoff
- [x] Courier job organization/store/provider scope is derived from account relationships, not trusted payload fields
- [x] CI applies the ordered migration set twice to prove migration replay is a clean no-op

## Verified baseline

- Formatting check: passed
- ESLint with zero warnings: passed
- Seven migration files ordered/non-empty/non-destructive: passed
- First migration apply and immediate migration replay: passed
- Architecture import boundaries: passed
- Typecheck: 18 of 18 workspaces passed
- Test/build dependency tasks: 26 of 26 passed
- PostgreSQL CI assertions: 42 passed, including five worker lease/claim/recovery tests
- Production builds: 18 of 18 workspaces passed
- WooCommerce PHP syntax: passed
- npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
- PostgreSQL hardening CI run `29524629662`, job `87709833186`: all gates passed at final head `c2330563b041b8c8d0fef2e382c0d4eb7cc7b40c`, including 37 assertions
- The verified PostgreSQL hardening change was squash-merged to `main` as `43bedadd6fdd238bbe9ecf9cae68a4c592bfd361`
- Worker lease final CI run `29545309665`, job `87776201468`: audit, formatting, lint, seven migrations, migration replay, architecture, 18 typechecks, 42 assertions, 18 builds, and PHP lint passed at head `b886fcb57c9a5c9ebae3b23334966468ae1733c3`
- The verified worker lease change was squash-merged to `main` as `d748bde10920e5a35a7e90f3a00b3b3bf02b96f3`
- Canonical documentation links before this slice: zero known broken internal links
- `tracker.yml` YAML structure remains valid
- Prohibited source-pattern search: no matches

The current GitHub-only connector workspace cannot run the repository-local continuation exporter, so `.ai-bridge/pro-context.md` must be regenerated from the local workspace. The canonical tracker, plan, status, decisions, database design, and testing strategy are current.

## Next production milestone

1. Add durable PostgreSQL webhook-outbox and verification-queue runners using the accepted ownership/lease pattern.
2. Add clean backup/restore rehearsal and migration-table integrity verification.
3. Expand PostgreSQL isolation coverage for courier queues, feature assembly, dashboards, and runtime-role versus migration-role permissions.
4. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010.
5. Replace local encryption-key handling with the accepted managed KMS envelope-encryption implementation.
6. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
7. Select and implement the OTP provider runner.
8. Add distributed rate limiting/cache only when multiple replicas require it.
9. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
10. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.

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
- Do not store/log raw API keys, passwords, OTPs, courier cookies, or provider credentials.
- Do not use API keys as dashboard user sessions.
- Require organization/store scope in all merchant repositories and jobs.
- Add new migrations; never edit applied migrations.
- Keep PostgreSQL authoritative for durable jobs/outbox through the pilot unless ADR 0008 is superseded.
- Keep Redis/cache state non-authoritative.
- Keep unknown/provider failure explicit and policy-controlled.
- Update `tracker.yml`, documentation, implementation status, decisions, and the continuation bundle with every material milestone.
