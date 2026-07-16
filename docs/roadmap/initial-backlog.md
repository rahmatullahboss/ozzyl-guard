# Initial Backlog

## Epic A — Repository foundation

- A1 Initialize Git repository with `main`
- A2 Create npm/Turborepo workspace
- A3 Configure TypeScript, lint, formatting, and tests
- A4 Add CI for typecheck/lint/test/migration/security checks
- A5 Add environment validation
- A6 Add ADR template and dependency-boundary checks

## Epic B — Identity and API keys

- B1 Users and secure sessions
- B2 Organizations and memberships
- B3 Store model and strict scope repositories
- B4 API-key creation and one-time reveal
- B5 Key scopes, environments, revoke/rotate/expire
- B6 Plans, entitlements, and atomic usage events
- B7 Audit events and privileged action logging

## Epic C — Courier sessions

- C1 Courier account model
- C2 Encrypted credential storage
- C3 Extract/harden Steadfast Playwright driver
- C4 Session validation
- C5 Scheduled refresh
- C6 Immediate refresh on auth failure
- C7 Reconnect-required workflow
- C8 Health dashboard and alerts
- C9 Redacted failure artifacts and retention

## Epic D — Courier observations

- D1 Canonical adapter interface
- D2 Shared adapter contract tests
- D3 Steadfast observation adapter
- D4 Observation cache and freshness
- D5 Normalized outcome mapping
- D6 Provider rate limiting
- D7 Retry/circuit breaker/dead-letter behavior

## Epic E — Risk engine

- E1 Canonical feature types
- E2 Courier feature extractor
- E3 Merchant-history extractor
- E4 Velocity extractor
- E5 Verification feature extractor
- E6 Versioned pure rule engine
- E7 Confidence model
- E8 Merchant policy thresholds/actions
- E9 Unit, golden, property, and regression tests
- E10 Dependency rule preventing external calls

## Epic F — Public API

- F1 Shared canonical response/error types
- F2 Assessment create endpoint
- F3 Assessment read endpoint
- F4 Courier refresh job endpoint
- F5 Idempotency
- F6 Rate limiting and atomic entitlement enforcement
- F7 Outcome feedback endpoint
- F8 Webhook delivery/signature/retry

## Epic G — WooCommerce

- G1 Plugin settings and secure key handling
- G2 API connection test
- G3 Order-created assessment
- G4 Admin risk display
- G5 Flag/hold/verification/prepayment behavior
- G6 OTP UI and verification
- G7 Outcome sync
- G8 Retry/degraded-state handling
- G9 Manual recheck and idempotency

## Epic H — Native multi-store integration

- H1 Internal Ozzyl Guard service client
- H2 Feature-flagged shadow assessments
- H3 Outcome feedback
- H4 Remove embedded provider calls from risk logic
- H5 Remove duplicate scoring after comparison period

## Epic I — Dashboard

- I1 Onboarding
- I2 Organization/store/team management
- I3 API key management
- I4 Courier connection page
- I5 Review queue
- I6 Assessment detail
- I7 Policies
- I8 Usage and savings reports
- I9 Admin/operations views

## P0 acceptance criteria

- A merchant can create a secure user account, organization, and store.
- A merchant can create test/live API keys and see the raw key once.
- A merchant can connect Steadfast securely.
- Session refresh works asynchronously outside checkout.
- A COD order can be assessed through one canonical endpoint.
- The response includes score, confidence, decision, signals, and freshness/degraded state.
- WooCommerce can store/display the result and send outcomes.
- No raw keys, passwords, cookies, tokens, raw payloads, or OTP values are logged or stored insecurely.
- Tenant-isolation and concurrent quota tests pass.
