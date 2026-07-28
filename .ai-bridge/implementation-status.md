# Ozzyl Guard — Implementation Status

Updated: 2026-07-28

## Status legend

- `done`: implemented and locally or remotely verified
- `baseline`: accepted and partially implemented; provider provisioning or production wiring remains
- `blocked`: requires an external account, secret, provider, or authorization
- `deferred`: intentionally outside the current MVP

## Repository and delivery

| Area                       | Status   | Notes                                                                                                                                                 |
| -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation and ADRs     | done     | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and twelve accepted ADRs                            |
| Continuation documentation | baseline | Tracker, plan, status, decisions, and generated `pro-context.md` are being refreshed for the vendor-neutral metrics source branch                     |
| Git repository             | baseline | `main` is canonical; GitHub currently reports public visibility although the expected policy is private                                               |
| Monorepo/tooling           | done     | 20 npm workspaces with Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, and tsup                                                                |
| CI                         | done     | PostgreSQL 16 manifest/apply/replay/history integrity, clean restore, runtime-role grants, audit, format, lint, architecture, tests, builds, PHP lint |
| Container foundation       | done     | Separate API, migration, PostgreSQL, Playwright session, courier-sync, event, and opt-in verification-worker services                                 |
| Production platform ADRs   | baseline | ADRs 0006–0010 accept provider-neutral topology, database, durable work/cache, KMS, and observability boundaries                                      |
| Provider provisioning      | blocked  | Concrete hosting, PostgreSQL, KMS/vault, observability, and optional cache providers/accounts are not selected                                        |

## Product implementation

| Area                             | Status   | Notes                                                                                                                                                                                                             |
| -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts                                                                                                   |
| Database/migrations              | done     | Thirteen append-only migrations bound to a committed SHA-256 manifest; history checksums are non-null and fail closed on mismatch                                                                                 |
| Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                                                                                                                |
| Shared envelope encryption       | done     | Local v1 plus provider-neutral managed v2 with per-record DEKs, authenticated wrapped-key metadata, legacy dual-read, rotation, and safe errors                                                                   |
| Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                                                                                                             |
| API keys/usage/plans             | done     | Atomic PostgreSQL quota reservation has duplicate-request and plan-limit concurrency coverage                                                                                                                     |
| Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                                                                                                     |
| Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                                                                                                     |
| Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, shared encryption boundary, health state, runnable PostgreSQL polling                                                                                              |
| Courier observation worker/cache | done     | Atomic claims, owner-checked renewable leases, abort-on-loss provider I/O, stale recovery, retry/final failure, relational scope, observation persistence                                                         |
| Durable webhook outbox           | done     | Transactional emission, scoped payloads, owner-checked renewable leases, abort-on-loss delivery, retries, stale recovery, encrypted secret access                                                                 |
| Durable work architecture        | done     | Claims, renewable leases, dead-letter replay, plus maintenance-only bounded terminal archival with evidence-before-delete and runtime-role denial                                                                 |
| Durable work operations          | done     | Failed work supports scoped replay; old completed/failed rows support preview-first maintenance archival while immutable replay/audit evidence remains                                                            |
| Backup/restore integrity         | done     | Clean logical `pg_dump`/`pg_restore` rehearsal compares schema, full table data hashes, sequences, migration history, and replay in CI                                                                            |
| Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                                                                                                   |
| Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, plus scoped native-shadow rollout, comparison, and attempt contracts                                                                          |
| PostgreSQL API repositories      | done     | API keys, feature assembly, assessment/outcome writes and replays enforce active relational organization/store ownership                                                                                          |
| Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                                                                                                       |
| Webhook delivery                 | done     | HMAC signing, timestamps, retry policy, HTTPS/credential checks, literal-IP and DNS-result SSRF validation, redirect rejection                                                                                    |
| WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes                                                                                          |
| Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented                                                                                              |
| Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                                                                                                               |
| Native multi-store integration   | done     | Concrete post-persist source reload, default-off store opt-in, stable retries, legacy-authoritative advisory failures, immutable attempt evidence, and scoped pilot reporting                                     |
| OTP verification                 | baseline | Encrypted queue, tenant-scoped verifier, renewable owner-checked runner, abort-on-loss provider I/O, retries, and failure events done; provider account remains                                                   |
| Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay                                                                    |
| Platform admin                   | done     | Explicit active `platform_admin` role is rechecked on every repository call before global operations data                                                                                                         |
| Tenant administration            | done     | Owner/admin-scoped webhook and verification repositories reauthorize active org/store scope and return secret-free records                                                                                        |
| PostgreSQL runtime role          | done     | Explicit DML grants, no migration history/DELETE/DDL/archive access; separate retention-maintenance identity and managed provisioning remain                                                                      |
| Managed encryption               | baseline | Provider-neutral v2 primitive is implemented; selected KMS adapter, service identities, audits, runtime wiring, and rewrite job remain                                                                            |
| Observability                    | baseline | Redacted logs plus finite API/worker/durable-repository/provider metrics and aggregate queue gauges are implemented; traces, exporters, broader domain metrics, backend, dashboards, alerts, and retention remain |
| Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                                                                                                         |

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
10. `0010_native_shadow_comparisons.sql`
11. `0011_native_shadow_pilot.sql`
12. `0012_durable_work_replays.sql`
13. `0013_durable_work_archives.sql`

Applied migrations must remain immutable.

## Verification evidence

- `npm run format:check`: passed
- `npm run lint`: passed with zero warnings
- `npm run db:check`: thirteen migrations and committed SHA-256 manifest validated locally and in source-branch CI
- initial migration apply: passed with non-null history checksums
- immediate migration replay: passed as a clean no-op
- `npm run db:integrity`: complete contiguous history and checksums passed
- `npm run db:restore-rehearsal`: clean logical restore, schema fingerprint, full table data hashes, sequence state, history, and replay passed
- `npm run check:architecture`: passed locally and in source-branch CI
- `npm run typecheck`: 20/20 workspaces passed locally and in source-branch CI
- `npm run test`: 31/31 Turbo tasks and 168 assertions passed in PostgreSQL-integrated source-branch CI
- `npm run build`: 20/20 workspace builds passed locally and in source-branch CI
- `npm audit --audit-level=high`: passed after updating ESLint, `@eslint/js`, and `typescript-eslint`; five moderate findings remain
- Observability tests prove fixed log metadata/redaction plus metric descriptor validation, finite categorical attributes, high-cardinality and secret-like key rejection, exporter-neutral JSON points, worker helper output, and sink-failure isolation
- API observability tests prove opaque request-ID acceptance, dynamic-route/query suppression, status/latency lifecycle records, bounded request count/duration metrics, safe unhandled-error serialization, and request availability during log/metric sink failure
- Courier-session, courier-sync, event, and verification tests prove bounded worker/provider count/duration metrics omit account/job/event/endpoint/phone/OTP/credential/URL/vendor/error-text values; shared tests cover repository outcomes, claim failures, aggregate gauges, and telemetry isolation
- Courier, webhook, and verification PostgreSQL suites include aggregate queue-depth and oldest-ready-age snapshots without row or tenant identifiers
- Lease-heartbeat tests prove non-overlapping renewal, owner/expiry enforcement, abort-on-renewal-loss propagation, and heartbeat drain before final courier/webhook/verification transitions
- Retention tests prove cutoff/status/batch/run-ID validation, terminal-only preview, payload-free evidence, archive-before-delete atomicity, ineligible-row preservation, replay-ledger preservation, idempotent reruns, and runtime archive-access denial
- Webhook outbox final run `29550097719`, job `87790624617`: all gates passed at head `fb0a68bac4628a96f82413b5d71092e4f0367536`
- Five real-PostgreSQL webhook tests cover competing claims, fresh-lease protection, expired-owner recovery, retry cleanup, exhausted stale failure, and scope mismatch rejection
- Transactional API coverage proves one delivery per matching store/organization endpoint and persisted winner, with no raw phone in event payloads
- Event-worker tests cover HMAC delivery, unsafe URL rejection, DNS-to-private rejection, retryable DNS failures, and redirect-disabled fetch behavior
- Eleven envelope tests cover local compatibility, per-record DEK zeroization, opaque wrapping, pre-unwrap context rejection, metadata tampering, KMS outage, unsafe wrappers, malformed envelopes, legacy dual-read, missing legacy keys, and key-version re-encryption
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
- Managed-envelope source run `29579223561`, job `87880659693`: all repository gates passed with 19 typechecks, 28 test tasks and 96 assertions, 19 builds, and PHP lint at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
- Managed-envelope final run `29580203487`, job `87883814149`: the complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
- The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
- Five native-adapter tests cover off mode, deterministic cohort selection, legacy-authoritative Guard disagreement, Guard failure, and comparison-persistence failure
- Three API tests cover comparison idempotency, dedicated scope enforcement, and cross-store assessment rejection
- Three PostgreSQL tests cover concurrent duplicate writes, immutable idempotency conflict rejection, and relational assessment/store isolation
- Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
- Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
- The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
- Ten native source tests cover authoritative post-persist reload, off mode, deterministic sampling, scope mismatch, timeout, legacy-authoritative disagreement, comparison failure, attempt failure, and stable evidence mapping
- Seven native-shadow API tests cover dedicated scope, rollout reads, attempt validation/idempotency, comparison persistence, and secret-free failure responses
- Seven real-PostgreSQL native-shadow tests cover concurrent comparison/attempt writes, default-off and explicit opt-in, negative tenant references, advisory failure evidence, bounded reporting, and immediate opt-out
- Two SDK tests and two browser-control tests cover rollout/attempt contracts plus CSRF, owner/admin, and exact-store authorization
- Selected-source shadow pilot final run `29629751800`, job `88040964883`: eleven migrations, 19 typechecks, 28 test tasks with 120 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
- The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
- Five real-PostgreSQL durable-work tests cover exact-store owner/admin listing, negative member authorization, concurrent duplicate replay, one immutable ledger/audit outcome, courier lease reset, scoped unexpired verification reopening, structural/expired rejection, cross-tenant isolation, and idempotency conflicts
- Seven runtime-role tests now include insert-only replay-ledger privileges alongside migration-history, DELETE, DDL, ownership, and elevated-role denials
- Durable-work dead-letter final run `29644234591`, job `88079650134`: twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
- The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
- Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping
- Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
- The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
- Structured observability final run `30317190971`, job `90145176143`: twelve migrations, 20 typechecks, 31 Turbo test/build dependency tasks with 132 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
- The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
- API request observability final run `30318999952`, job `90150731352`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 136 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
- The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
- Durable worker heartbeat final run `30322016826`, job `90159676583`: GitGuardian, twelve migrations, 20 typechecks, 31 Turbo tasks with 145 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
- The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
- Durable work retention final run `30325144458`, job `90168867190`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 154 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
- The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
- Vendor-neutral metrics final run `30327450803`, job `90175680964`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 161 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
- The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
- Repository/provider/queue metrics final run `30329769797`, job `90182279338`: GitGuardian, thirteen migrations, 20 typechecks, 31 Turbo tasks with 168 assertions, 20 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
- The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
- Seven real-PostgreSQL tests cover API-key/feature/write tenant mismatch, dashboard aggregation isolation, platform-admin reauthorization, and secret-free webhook/verification administration
- Seven database-role tests cover identifier safety, explicit policy completeness, insert-only replay evidence, real allowed DML, migration-history/DELETE/DDL denial, elevated-role rejection, and inherited-role rejection
- Previous canonical documentation checks found zero broken internal links
- Prohibited insecure-pattern scan: zero matches

The repository-local exporter was refreshed after the merged repository/provider/queue metrics verification evidence was recorded.

## External blockers and production requirements

- Concrete deployment platform, account, primary region, DNS, and TLS setup
- Managed PostgreSQL provider/service tier, automated backup retention, and production-equivalent point-in-time restore drill
- Separately provisioned retention-maintenance identity, approved completed/failed retention windows, incident/legal holds, monitoring, and recovery procedure
- Managed secret store and KMS/vault provider
- OpenTelemetry exporter/collector, distributed tracing, broader API/domain repository metrics, managed observability backend, retention, dashboards, alerts, and incident channels
- Optional Redis-compatible cache only when distributed coordination is required
- Authorized Steadfast test/merchant account
- Provider-terms and merchant-authorization review
- OTP provider selection/account
- Production account recovery/MFA or managed identity-provider decision
- Pilot merchants and verified outcome data for calibration

## Remaining risks

- Steadfast UI/internal endpoint changes can break automation.
- The managed v2 boundary is implemented, but runtime call sites remain on local v1 until a reviewed provider adapter, service identities, access audits, and background rewrite procedure are provisioned.
- DNS validation reduces hostname-based SSRF risk, but production still requires controlled egress and network policy against DNS rebinding/route changes.
- In-process API and browser-session rate limiting is not distributed across replicas.
- Retention/archive code and baseline guidance are implemented, but production windows, incident/legal holds, maintenance identity, monitoring, scheduling, and backup/PITR recovery remain unprovisioned.
- The repository runtime-role policy is verified, but the selected managed PostgreSQL provider must still provision distinct credentials, run the grant command after migrations, and pass a production smoke test.
- The verification runner has no bundled production provider adapter; provider selection, account credentials, terms, delivery callbacks, and staging validation remain external.
- Browser login has no account recovery, invitation, MFA, or managed identity-provider integration yet.
- GitHub currently reports public repository visibility although the expected policy is private.
- Provider-specific infrastructure has not been provisioned or smoke-tested.
- Structured logs plus finite-cardinality API, private-worker, durable-repository, provider-call, and aggregate queue metrics are implemented, but broader API/domain repository metrics, traces, exporters/collector, dashboards, alerts, managed backend, and telemetry retention are not yet implemented.
- Five moderate dependency advisories remain; the high/critical audit threshold is clear. One affects the Hono Node adapter on Windows static serving, while the remaining findings are development/build tooling; production upgrade review remains pending.
- Native shadow mode is advisory only; the verified post-persist hook still requires production deployment to explicitly selected stores, and pilot outcomes must be reviewed before any enforcement design.
- Automatic blocking remains merchant-controlled and disabled by default until pilot calibration.

## Next milestone

Provision the accepted infrastructure baseline with distinct database identities and a production point-in-time restore drill, select and wire the managed KMS adapter plus audited re-encryption runner, validate Steadfast, select and bundle the OTP provider adapter, deploy the verified source hook to explicit pilot stores, and collect outcomes for calibration.
