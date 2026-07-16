# Implementation Roadmap

Work milestone-by-milestone. Do not start a later phase by duplicating unfinished foundation logic.

## Phase 0 — Repository and documentation setup

- Workspace/code/Git/environment/deployment audit
- Install and validate documentation
- Add root agent rules and ADR process
- Add implementation status, decision log, and risk register
- Validate source `multi-store-saas` reuse boundaries
- Define development commands/environment guide
- Initialize Git repository

Exit criteria:

- Documentation map is complete and internally consistent.
- Current repository state and conflicts are recorded.
- Security-critical source patterns are explicitly prohibited.
- First implementation milestone and files are identified.

## Phase 1 — Foundation

- Monorepo/tooling/CI
- PostgreSQL and canonical database package
- Secure users/sessions
- Organizations, stores, and memberships
- API key lifecycle with `ozg_test_`/`ozg_live_`
- Plans, entitlements, atomic usage tracking
- Shared types and canonical API/error/event contracts
- Tenant-isolation and migration tests

## Phase 2 — Courier intelligence

- Courier adapter interface and contract suite
- Extract/harden Steadfast Playwright session driver
- Encrypted credentials and sessions
- Session refresh/reconnect jobs
- Steadfast customer observation adapter
- Observation cache/freshness/confidence
- Health monitoring, alerting, and dead-letter behavior

## Phase 3 — Risk engine

- Bangladesh phone normalization
- Canonical feature types/assemblers
- Versioned scoring policy
- Courier, merchant-history, velocity, verification, and later network signals
- Explainable decisions and confidence
- Unknown/degraded behavior
- Assessment/signal persistence
- Golden/regression tests

## Phase 4 — Public API and integrations

- `POST /v1/risk-assessments`
- Assessment read endpoint
- Outcome feedback endpoint
- Webhooks and delivery worker
- WooCommerce plugin rewrite
- Native `multi-store-saas` service adapter
- Integration/contract/idempotency tests

## Phase 5 — Verification

- OTP send/verify
- Provider abstraction
- Rate limiting and abuse protection
- Verification-session/order binding
- Merchant policy rules and fallback behavior

## Phase 6 — Dashboard

- Onboarding and organization/store management
- API key management
- Courier account status/reconnect
- Review queue and assessment detail
- Risk policy settings
- Usage/reports/estimated saved cost
- Team/billing/admin controls

## Pilot and calibration

- Onboard selected merchants
- Track verified outcomes
- Measure false positives/negatives
- Calibrate thresholds and confidence
- Compare old embedded multi-store decisions against Guard
- Do not enable broad automatic blocking until reviewed

## Later expansion

- Evidence-backed shared reputation and disputes
- Pathao/RedX adapters
- Shopify app
- IVR
- Device fingerprinting with privacy safeguards
- Merchant-specific Meta audience exclusion
- ML-assisted ranking after sufficient labeled data
