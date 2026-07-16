# Ozzyl Guard — Current Implementation Plan

Updated: 2026-07-16

## Current state

A runnable standalone MVP foundation is implemented and the first production-hardening slice is complete: dashboard/admin browser authentication, live PostgreSQL read models, tenant revalidation, platform-admin authorization, and PostgreSQL integration-test coverage are now present.

## Completed

- [x] Repository, private GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
- [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
- [x] Canonical shared API/error/event contracts
- [x] PostgreSQL/Drizzle schema and six append-only migrations
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

## Verified on this workspace

- Formatting check: passed
- ESLint with zero warnings: passed
- Six migration files ordered/non-empty/non-destructive: passed
- Architecture import boundaries: passed
- Typecheck: 18 of 18 workspaces passed
- Test/build dependency tasks: 26 of 26 passed; 29 assertions passed and three PostgreSQL-only tests skipped locally
- Production builds: 18 of 18 workspaces passed
- WooCommerce PHP syntax: passed
- npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
- Previous GitHub Actions CI run `29499998845`: passed; the new commit must validate migration 0006 and run the three PostgreSQL browser-access tests
- Canonical documentation links: 49 Markdown files checked, zero broken internal links
- `tracker.yml` YAML parse: passed
- Continuation bundle: refreshed and formatted
- Prohibited source-pattern search: no matches

A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. The previous five migrations passed remotely against PostgreSQL 16; migration 0006 and the new PostgreSQL browser-access tests await the next GitHub Actions run.

## Next production milestone

1. Select production hosting, PostgreSQL provider, KMS/vault, queue/cache, and observability through ADRs.
2. Expand PostgreSQL integration coverage for quota concurrency, idempotency races, migration replay, and additional repository isolation cases.
3. Replace local encryption-key handling with managed KMS envelope encryption.
4. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
5. Select and implement the OTP provider runner.
6. Add durable webhook outbox/event runner and verification queue runner.
7. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
8. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.

## External blockers

- Authorized Steadfast merchant/test credentials
- Steadfast provider-terms and merchant-authorization review
- Production KMS/vault choice and keys
- OTP provider account and credentials
- Hosting/database/queue/cache/observability selections
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
- Keep unknown/provider failure explicit and policy-controlled.
- Update `tracker.yml`, documentation, implementation status, and the continuation bundle with every material milestone.
