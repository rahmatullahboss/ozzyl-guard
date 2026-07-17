# Ozzyl Guard — Implementation Status

Updated: 2026-07-17

## Status legend

- `done`: implemented and locally or remotely verified
- `baseline`: accepted and partially implemented; provider provisioning or production wiring remains
- `blocked`: requires an external account, secret, provider, or authorization
- `deferred`: intentionally outside the current MVP

## Repository and delivery

| Area                       | Status   | Notes                                                                                                                         |
| -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Documentation and ADRs     | done     | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and ten accepted ADRs       |
| Continuation documentation | baseline | Tracker, plan, status, and decisions updated; generated `pro-context.md` requires local exporter refresh after this milestone |
| Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                       |
| Monorepo/tooling           | done     | npm workspaces, Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, tsup                                                   |
| CI                         | done     | PostgreSQL 16 apply/replay, audit, format, lint, architecture, typecheck, tests, builds, PHP lint                             |
| Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session worker, and courier-sync services                                     |
| Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries              |
| Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                |

## Product implementation

| Area                             | Status   | Notes                                                                                                                                |
| -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                               |
| Database/migrations              | done     | Seven append-only migrations; clean PostgreSQL 16 apply and immediate replay passed in CI                                            |
| Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                   |
| Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                |
| API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                        |
| Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                        |
| Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                        |
| Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, encryption boundary, health state, runnable PostgreSQL polling                        |
| Courier observation worker/cache | done     | Lease-owned atomic claims, stale recovery, retry/final failure transitions, relational scope, normalized observation persistence     |
| Durable work architecture        | baseline | PostgreSQL ownership/lease pattern proven for courier jobs; webhook and verification runners plus broader dead-letter handling remain |
| Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                      |
| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits                              |
| PostgreSQL API repositories      | done     | Assessment and outcome race losers resolve to the scoped persisted winner; operation idempotency isolation is covered                |
| Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                          |
| Webhook delivery                 | baseline | HMAC, timestamp, SSRF controls, retries; durable PostgreSQL outbox runner still needed                                               |
| WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes             |
| Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                 |
| Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                  |
| Native multi-store adapter       | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending                                    |
| OTP verification                 | baseline | Secure service abstraction and worker library; production provider/runner blocked                                                    |
| Merchant dashboard               | done     | Argon2id login, opaque HttpOnly session, CSRF logout, authorized store switching, and live scoped operations data                    |
| Platform admin                   | done     | Explicit `platform_admin` role gate with authenticated live global operations data                                                   |
| Managed encryption               | baseline | KMS/vault envelope-encryption architecture accepted; provider and implementation remain                                              |
| Observability                    | baseline | OpenTelemetry-compatible boundary accepted; shared helpers, backend, dashboards, alerts, and redaction tests remain                  |
| Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                            |

## Migrations

1. `0001_foundation.sql`
2. `0002_courier.sql`
3. `0003_risk.sql`
4. `0004_verification_events.sql`
5. `0005_durable_operations.sql`
6. `0006_browser_access.sql`
7. `0007_worker_leases.sql`

Applied migrations must remain immutable.

## Verification evidence

- `npm run format:check`: passed
- `npm run lint`: passed with zero warnings
- `npm run db:check`: seven migrations validated
- initial migration apply: passed
- immediate migration replay: passed as a clean no-op
- `npm run check:architecture`: passed
- `npm run typecheck`: 18/18 workspaces passed
- `npm run test`: 26/26 Turbo tasks passed; PostgreSQL CI contains 42 assertions
- `npm run build`: 18/18 workspace builds passed
- `npm audit --audit-level=high`: passed; four moderate development-tooling findings remain
- Worker lease code run `29544434788`, job `87773443770`: all gates passed at head `e0c9f06bc90c6ab69d99225e545b9b4dde74a25c`
- Five new real-PostgreSQL assertions cover competing `SKIP LOCKED` claims, fresh-lease protection, stale processing recovery with old-owner rejection, retry ownership cleanup, exhausted stale-job failure, and relational account scope
- Previous canonical documentation checks found zero broken internal links
- Prohibited insecure-pattern scan: zero matches

The generated `.ai-bridge/pro-context.md` still requires the repository-local exporter because the current GitHub-only connector cannot run that workspace tool.

## External blockers and production requirements

- Concrete deployment platform, account, primary region, DNS, and TLS setup
- Managed PostgreSQL provider/service tier and restore drill
- Managed secret store and KMS/vault provider
- Observability backend, retention, dashboards, alerts, and incident channels
- Optional Redis-compatible cache only when distributed coordination is required
- Authorized Steadfast test/merchant account
- Provider-terms and merchant-authorization review
- OTP provider selection/account
- Production account recovery/MFA or managed identity-provider decision
- Pilot merchants and verified outcome data for calibration

## Remaining risks

- Steadfast UI/internal endpoint changes can break automation.
- Local AES-GCM key configuration is not a replacement for managed KMS in production.
- In-process API and browser-session rate limiting is not distributed across replicas.
- Durable PostgreSQL work still needs webhook/verification runners, clean restore rehearsal, broader dead-letter operations, and runtime-role permission tests.
- Long-running future worker tasks must renew leases or use a lease duration proven to exceed their bounded execution time.
- Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
- GitHub currently reports public repository visibility although the expected policy is private.
- Provider-specific infrastructure has not been provisioned or smoke-tested.
- Four moderate development-tooling advisories remain; high/critical threshold is clear.
- Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.

## Next milestone

Implement durable webhook-outbox and verification-queue runners with the proven PostgreSQL lease pattern, then add restore rehearsal, broader repository/role isolation, provision the accepted infrastructure baseline, implement managed encryption, validate Steadfast, select OTP, and begin native-adapter shadow rollout.
