# Ozzyl Guard — Implementation Status

Updated: 2026-07-16

## Status legend

- `done`: implemented and locally verified
- `baseline`: implemented foundation; production wiring/calibration remains
- `blocked`: requires an external account, secret, provider, or architecture decision
- `deferred`: intentionally outside the current MVP

## Repository and delivery

| Area                       | Status   | Notes                                                                                                                |
| -------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| Documentation and ADRs     | done     | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and ADRs installed |
| Continuation documentation | done     | `tracker.yml`, `docs/README.md`, and `.ai-bridge/pro-context.md` provide new-chat and new-agent handoff context      |
| Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private              |
| Monorepo/tooling           | done     | npm workspaces, Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, tsup                                          |
| CI                         | done     | PostgreSQL 16 migration apply, audit, format, lint, architecture, typecheck, tests, builds, PHP lint                 |
| Container baseline         | done     | Separate API, migration, PostgreSQL, Playwright session worker, and courier-sync services                            |
| Production platform ADRs   | blocked  | Hosting, managed PostgreSQL, KMS, queue/cache, and observability providers not selected                              |

## Product implementation

| Area                             | Status   | Notes                                                                                                                                                |
| -------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                                               |
| Database/migrations              | done     | Full schema and six append-only migrations; migration 0006 adds explicit platform role and live-read indexes; clean PostgreSQL 16 apply passed in CI |
| Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                   |
| Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                |
| API keys/usage/plans             | done     | Test/live prefixes, one-time raw reveal, hash-only persistence, scopes, revocation fields, atomic PostgreSQL usage reservation                       |
| Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                        |
| Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                        |
| Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, encryption boundary, health state, runnable PG polling                                                |
| Courier observation worker/cache | done     | Durable jobs, `SKIP LOCKED` claiming, retry scheduling, normalized observation persistence                                                           |
| Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                      |
| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits                                              |
| PostgreSQL API repositories      | done     | API keys, usage, features, assessments/signals, outcomes, idempotency, courier jobs                                                                  |
| Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                          |
| Webhook delivery                 | baseline | HMAC, timestamp, SSRF controls, retries; durable outbox runner still needed                                                                          |
| WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                             |
| Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                 |
| Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                  |
| Native multi-store adapter       | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending                                                    |
| OTP verification                 | baseline | Secure service abstraction and worker library; production provider/runner blocked                                                                    |
| Merchant dashboard               | done     | Argon2id login, opaque HttpOnly session, CSRF logout, authorized store switching, and live scoped overview/review/courier/usage data                 |
| Platform admin                   | done     | Explicit `platform_admin` role gate with authenticated live organization, assessment, backlog, webhook, incident, and provider data                  |
| Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                            |

## Migrations

1. `0001_foundation.sql`
2. `0002_courier.sql`
3. `0003_risk.sql`
4. `0004_verification_events.sql`
5. `0005_durable_operations.sql`
6. `0006_browser_access.sql`

Applied migrations must remain immutable.

## Verification evidence

- `npm run format:check`: passed
- `npm run lint`: passed with zero warnings
- `npm run db:check`: six migrations validated
- `npm run check:architecture`: passed
- `npm run typecheck`: 18/18 workspaces passed
- `npm run test`: 26/26 Turbo tasks passed; 29 assertions passed and three PostgreSQL browser-access integration tests skipped because local `DATABASE_URL` is unavailable
- `npm run build`: 18/18 workspace builds passed
- `npm audit --audit-level=high`: passed; four moderate dev-tooling findings remain
- GitHub Actions run `29516535736`: passed in 1m50s; all six migrations applied and all 32 assertions passed, including 13/13 API tests and 3/3 PostgreSQL browser-access integration tests
- WooCommerce `php -l`: passed
- Canonical documentation link check: 49 files, zero broken links
- `tracker.yml` YAML parse: passed
- Continuation context bundle: refreshed and formatted
- Prohibited insecure-pattern scan: zero matches

## External blockers and production requirements

- Authorized Steadfast test/merchant account
- Provider-terms and merchant-authorization review
- Production KMS/vault and key-rotation setup
- OTP provider selection/account
- Hosting, PostgreSQL, queue/cache, and observability ADRs
- Production account recovery/MFA or managed identity-provider decision
- Pilot merchants and verified outcome data for calibration

## Remaining risks

- Steadfast UI/internal endpoint changes can break automation.
- Local AES-GCM key configuration is not a replacement for managed KMS in production.
- In-process API and browser-session rate limiting is not distributed across replicas.
- Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
- GitHub currently reports public repository visibility although the expected policy is private.
- Webhook and OTP worker libraries need durable production runners/providers.
- PostgreSQL quota concurrency, idempotency races, and broader repository isolation still need expanded integration coverage.
- Four moderate development-tooling advisories remain; high/critical threshold is clear.
- Automatic blocking should remain merchant-controlled and disabled by default until pilot calibration.

## Next milestone

Production hardening and pilot readiness: infrastructure ADRs, managed secrets, expanded PostgreSQL concurrency/idempotency/isolation tests, authorized Steadfast validation, OTP provider, durable event/verification runners, and native multi-store shadow rollout.
