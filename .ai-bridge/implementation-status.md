# Ozzyl Guard — Implementation Status

Updated: 2026-07-17

## Status legend

- `done`: implemented and locally or remotely verified
- `baseline`: accepted and partially implemented; provider provisioning or production wiring remains
- `blocked`: requires an external account, secret, provider, or authorization
- `deferred`: intentionally outside the current MVP

## Repository and delivery

| Area                       | Status   | Notes                                                                                                                                                 |
| -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation and ADRs     | done     | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and ten accepted ADRs                               |
| Continuation documentation | baseline | Tracker, plan, status, and decisions updated; generated `pro-context.md` requires local exporter refresh after this milestone                         |
| Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
| Monorepo/tooling           | done     | 19 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
| CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
| Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
| Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
| Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |

## Product implementation

| Area                             | Status   | Notes                                                                                                                                         |
| -------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                                        |
| Database/migrations              | done     | Nine append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                 |
| Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                            |
| Shared envelope encryption       | done     | Provider-neutral local AES-256-GCM package with key-version and authenticated-context binding; managed KMS remains production work            |
| Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                         |
| API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                 |
| Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                 |
| Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                 |
| Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                          |
| Courier observation worker/cache | done     | Lease-owned atomic claims, expired-owner rejection, stale recovery, retry/final failure, relational scope, observation persistence            |
| Durable webhook outbox           | done     | Assessment/outcome transaction emission, scoped event payloads, lease-owned event worker, retries, stale recovery, encrypted secret access    |
| Durable work architecture        | baseline | PostgreSQL ownership/lease pattern proven for courier, webhook, and verification work; broader operational dead-letter tooling remains        |
| Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI        |
| Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                               |
| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits                                       |
| PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                      |
| Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                   |
| Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                |
| WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                      |
| Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                          |
| Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                           |
| Native multi-store adapter       | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending                                             |
| OTP verification                 | baseline | Transactional encrypted queue, tenant-scoped verifier, lease-owned private runner, retries, and failure events done; provider account remains |
| Merchant dashboard               | done     | Argon2id login, opaque HttpOnly session, CSRF logout, authorized store switching, and live scoped operations data                             |
| Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                     |
| Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                    |
| PostgreSQL runtime role          | done     | Explicit current-table DML grants, no migration history/DELETE/DDL/ownership/elevated membership; managed-provider provisioning remains       |
| Managed encryption               | baseline | KMS/vault envelope-encryption architecture accepted; provider and implementation remain                                                       |
| Observability                    | baseline | OpenTelemetry-compatible boundary accepted; shared helpers, backend, dashboards, alerts, and redaction tests remain                           |
| Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                     |

## Migrations

1. `0001_foundation.sql`
2. `0002_courier.sql`
3. `0003_risk.sql`
4. `0004_verification_events.sql`
5. `0005_durable_operations.sql`
6. `0006_browser_access.sql`
7. `0007_worker_leases.sql`
8. `0008_webhook_delivery_leases.sql`
9. `0009_verification_delivery_queue.sql`

Applied migrations must remain immutable.

## Verification evidence

- `npm run format:check`: passed
- `npm run lint`: passed with zero warnings
- `npm run db:check`: nine migrations and committed SHA-256 manifest validated
- initial migration apply: passed with non-null history checksums
- immediate migration replay: passed as a clean no-op
- `npm run db:integrity`: complete contiguous history and checksums passed
- `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
- `npm run check:architecture`: passed
- `npm run typecheck`: 19/19 workspaces passed
- `npm run test`: 28/28 Turbo tasks passed; repository contains 87 assertions
- `npm run build`: 19/19 workspace builds passed
- `npm audit --audit-level=high`: passed; four moderate development-tooling findings remain
- Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
- Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
- Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
- Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
- Envelope-cipher tests cover context-bound round trips and wrong-context rejection
- The verified webhook outbox change was squash-merged to `main` as `752d08776f35345e5ec002d9a9ca720f304df8cc`
- Verification queue targeted run `29553255223`, job `87800077114`: migration 0009/replay, verification/API typechecks, five PostgreSQL lease tests, three encrypted-payload tests, API tests/builds, and Compose profile validation passed for source commit `5fce01ac98bc8115959276b1ffc636a1702d77a0`
- Verification queue final run `29554260434`, job `87803061854`: audit, format, lint, nine migrations/replay, architecture, 19 workspace typechecks, 28 test tasks with 67 assertions, 19 builds, and PHP lint passed at head `7f24a7be544ae60d7a0a15b4a5020b4253e0d192`
- The verified verification queue change was squash-merged to `main` as `146360ab40efe45bfa7332c1a42b6cac0e88d17b`
- Restore-integrity source run `29556041278`, job `87808175661`: manifest, apply/replay, history integrity, clean full-data-hash restore, architecture, 19 typechecks, 28 test tasks with 74 assertions, 19 builds, and PHP lint passed at head `0eb8f09bc5e91c18e7ee5933cedb0e78f618a972`
- Restore-integrity final run `29556722776`, job `87810268816`: the same complete gate set passed at final documentation head `6a7bd57fa4ef0d1f917ca83729691fbd25c0738c`
- The verified restore-integrity change was squash-merged to `main` as `950d07069643f4e69d7570802091a600011f72df`
- Runtime-role/tenant-isolation source run `29560049322`, job `87820368024`: manifest/apply/replay/history, clean restore, runtime-role grants, architecture, 19 typechecks, 28 test tasks with 87 assertions, 19 builds, audit, formatting, lint, and PHP syntax passed at head `90a50b215b063d87f71725eb6a375cbb887345de`
- Runtime-role/tenant-isolation final run `29574499372`, job `87865756151`: the complete gate set passed at final documentation head `71588cb024f63c750ffae8212cd5911db08d1ced`
- The verified runtime-role and tenant-isolation change was squash-merged to `main` as `845749ce9570dc49558073808247e1dc1221669b`
- Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
- Six database-role tests cover identifier safety, explicit policy completeness, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
- Previous canonical documentation checks found zero broken internal links
- Prohibited insecure-pattern scan: zero matches

The generated `.ai-bridge/pro-context.md` still requires the repository-local exporter because the current GitHub-only connector cannot run that workspace tool.

## External blockers and production requirements

- Concrete deployment platform, account, primary region, DNS, and TLS setup
- Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
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
- DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
- In-process API and browser-session rate limiting is not distributed across replicas.
- Durable PostgreSQL work still needs broader dead-letter/replay operations and future lease renewal for work whose bounded execution may exceed one lease.
- The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
- The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
- Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
- GitHub currently reports public repository visibility although the expected policy is private.
- Provider-specific infrastructure has not been provisioned or smoke-tested.
- Four moderate development-tooling advisories remain; high/critical threshold is clear.
- Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.

## Next milestone

Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, implement managed encryption, validate Steadfast, select and bundle the OTP provider adapter for the completed runner, and begin native-adapter shadow rollout.
