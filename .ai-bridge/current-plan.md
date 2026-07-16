# Ozzyl Guard — Current Implementation Plan

Updated: 2026-07-16

## Current state

A runnable standalone MVP foundation and two production-hardening slices are complete:

1. dashboard/admin browser authentication with live PostgreSQL data and tenant revalidation;
2. accepted provider-neutral infrastructure ADRs for deployment, managed PostgreSQL, durable work/cache, KMS envelope encryption, and observability.

Concrete provider selection and provisioning remain external production work.

## Completed

- [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
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
- [x] Provider-neutral production deployment topology ADR
- [x] Managed PostgreSQL production baseline ADR
- [x] PostgreSQL-first durable work and optional cache boundary ADR
- [x] Managed secrets and KMS envelope-encryption ADR
- [x] Vendor-neutral OpenTelemetry observability ADR

## Verified baseline

- Formatting check: passed
- ESLint with zero warnings: passed
- Six migration files ordered/non-empty/non-destructive: passed
- Architecture import boundaries: passed
- Typecheck: 18 of 18 workspaces passed
- Test/build dependency tasks: 26 of 26 passed; 29 assertions passed and three PostgreSQL-only tests skipped locally
- Production builds: 18 of 18 workspaces passed
- WooCommerce PHP syntax: passed
- npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
- GitHub Actions implementation CI run `29516535736`: passed; all six migrations and all 32 assertions passed
- Infrastructure ADR pull-request CI run `29522339973`, job `87702183134`: audit, formatting, lint, six migrations, architecture, 18 typechecks, PostgreSQL tests, 18 builds, and PHP lint all passed
- Infrastructure ADRs were tested at head `9bd863285068be30c84511c026b9a2e4c808b6de` and squash-merged to `main` as `74ed1a9037c1b3491c6a988092c21dafcbc2fedd`
- Canonical documentation links before the ADR slice: 49 Markdown files checked, zero broken internal links
- Five new ADR files and repository-relative links were reviewed
- `tracker.yml` YAML structure remains valid
- Prohibited source-pattern search: no matches

The current GitHub-only connector workspace cannot run the repository-local continuation exporter, so `.ai-bridge/pro-context.md` must be regenerated from the local workspace. The canonical tracker, plan, status, decisions, ADR index, deployment guide, and observability guide are current.

## Next production milestone

1. Expand PostgreSQL integration coverage for quota concurrency, idempotency races, worker claims, migration replay, and additional repository isolation cases.
2. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010.
3. Replace local encryption-key handling with the accepted managed KMS envelope-encryption implementation.
4. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
5. Select and implement the OTP provider runner.
6. Add durable webhook outbox/event runner and verification queue runner using PostgreSQL-first durable work.
7. Add distributed rate limiting/cache only when multiple replicas require it.
8. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
9. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.

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
