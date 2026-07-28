# Ozzyl Guard — Current Implementation Plan

Updated: 2026-07-28

## Current state

A runnable standalone MVP foundation and twenty-two production-hardening slices are complete:

1. dashboard/admin browser authentication with live PostgreSQL data and tenant revalidation;
2. accepted provider-neutral infrastructure ADRs for deployment, managed PostgreSQL, durable work/cache, KMS envelope encryption, and observability;
3. PostgreSQL concurrency and idempotency hardening for usage reservations, assessments, outcomes, and tenant-scoped operation records;
4. lease-owned PostgreSQL courier-worker claims with stale-job recovery, authoritative account scope, and migration replay verification;
5. transactional PostgreSQL webhook outbox emission and a lease-owned event worker with encrypted signing-secret access and DNS-aware SSRF controls;
6. transactional encrypted OTP delivery queues, tenant-scoped database verification, and a lease-owned private verification worker with no provider I/O in API requests;
7. SHA-256-bound migration history integrity and a clean PostgreSQL logical backup/restore rehearsal with schema, data, sequence, history, and replay verification;
8. authoritative tenant-scope revalidation across API keys, feature assembly, assessment/outcome writes, dashboards and administration, plus an explicit least-privilege PostgreSQL runtime-role grant boundary;
9. provider-neutral managed envelope v2 with random per-record data keys, authenticated wrapped-key metadata, structured fail-closed errors, explicit legacy dual-read, and key-version re-encryption primitives;
10. native multi-store `off`/deterministic-shadow rollout controls with legacy-authoritative behavior and tenant-scoped immutable comparison evidence;
11. selected-source post-persist shadow integration with authoritative source-order reload, explicit store opt-in, immutable sampled-attempt evidence, and tenant-scoped pilot reporting;
12. tenant-scoped durable-work dead-letter inspection and explicit idempotent replay with lease reset, structural failure guards, immutable evidence, and audit records;
13. authenticated merchant browser dead-letter operations with exact owner/admin store scope, secret-free listing, CSRF-protected replay, and synchronous stable replay keys;
14. a canonical vendor-neutral structured logging/redaction package integrated into all four private workers, with bounded serialization and telemetry-failure isolation;
15. API-wide safe request correlation and structured lifecycle logging with opaque request IDs, bounded route templates, response status/latency, redacted unhandled errors, and telemetry-failure isolation;
16. owner-checked renewable leases for courier, webhook, and verification workers, with non-overlapping heartbeats, abort-on-renewal-loss provider I/O, and heartbeat drain before final queue transitions;
17. maintenance-only preview-first retention for old terminal durable work, with secret-free archive evidence persisted before atomic source deletion, bounded batches, runtime-role denial, and preserved replay/audit evidence;
18. vendor-neutral finite-cardinality application metrics for API requests, private-worker operations/duration, and durable claim failures, with prohibited identifier/secret/contact/URL/payload labels and sink-failure isolation;
19. finite-cardinality durable repository and provider-call timing plus aggregate queue depth/oldest-ready-age gauges for courier, webhook, and verification workers, with configurable cadence and telemetry-only snapshot failure behavior;
20. vendor-neutral W3C trace-context propagation from API server and durable producer spans through courier, webhook, and verification queue rows into worker consumer and provider-client spans, with finite attributes, nullable legacy context, verification-failure webhook continuation, and telemetry-failure isolation;
21. bounded critical-path API/domain metrics for authentication, authorization, rate limiting, quota, idempotency, API dependency count/duration, risk assessment quality bands, and verified outcomes, with replay de-duplication, outage-vs-limit distinction, and telemetry-failure isolation;
22. finite authenticated browser/admin and native-shadow integration metrics for session authentication, rate limiting, CSRF, relational authorization, dashboard/admin/rollout/dead-letter/audit repositories, rollout reads, comparison/attempt persistence, replay/conflict, and controlled-rejection-vs-infrastructure-error distinction.

Concrete provider selection and provisioning remain external production work.

## Completed

- [x] Repository, canonical GitHub remote, documentation, ADR, status, risk register, tracker, and continuation setup
- [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
- [x] Canonical shared API/error/event contracts
- [x] PostgreSQL/Drizzle schema and fourteen append-only migrations
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
- [x] Canonical structured logging/redaction helper with fixed metadata, bounded serialization, and fail-open telemetry delivery
- [x] Courier-session, courier-sync, event, and verification worker startup/error logging migrated to the shared boundary
- [x] API startup/shutdown, request completion, and unhandled-error logging migrated to the shared boundary
- [x] Caller request IDs are accepted only in opaque bounded formats; raw dynamic paths and query values are never exported
- [x] Metric descriptors require bounded names/units and finite allowlisted categorical attributes
- [x] Identifier-, hash-, key-, URL-, payload/body-, token-, secret-, phone-, OTP-, credential-, and provider-response-style metric attributes are rejected
- [x] API request count/duration metrics use only normalized method, canonical route/template, and status class
- [x] Courier-session, courier-sync, event, and verification operations emit bounded count/duration metrics; durable claim failures use worker type only
- [x] Metric validation, serialization, clock, and sink failures cannot change API or worker behavior
- [x] Authentication, authorization, rate-limit, quota, and idempotency controls emit finite allowed/rejected/replay/error events
- [x] API-key resolution, rate limiting, usage reservation, feature assembly, assessment/outcome persistence, idempotency storage, durable enqueue, and OTP verification emit finite dependency count/duration metrics
- [x] New risk assessments emit only bounded decision/level/score-band/confidence-band/degraded/freshness distributions; replays do not double-count
- [x] New verified outcomes emit only bounded outcome/linkage distributions; replays do not double-count
- [x] Usage-limit rejection remains distinct from unexpected usage-ledger failure, which surfaces as an error rather than a false 429
- [x] Browser authentication, authorization, CSRF, and rate-limit controls emit finite allowed/rejected/error events
- [x] Browser auth, rate limiter, dashboard, platform-admin, rollout, dead-letter, and audit dependencies emit finite count/duration outcomes
- [x] Native-shadow rollout reads and comparison/attempt persistence emit finite API dependency success/empty/replay/rejected/error outcomes
- [x] Relational reauthorization failure is rejected, while unknown browser/native-shadow repository failure remains error
- [x] Browser and native-shadow metrics omit user/session/tenant/store/order/work/idempotency/email/error-detail values and sink failure cannot change responses
- [x] Durable courier, webhook, and verification repository claim/start/renew/complete/retry/fail/snapshot operations emit bounded count/duration metrics
- [x] Courier API/browser, webhook HTTP, and OTP provider calls emit bounded success/retryable/permanent count/duration metrics without vendor/account/destination labels
- [x] Durable queue snapshots expose only aggregate queued/retry-scheduled/claimed/processing/failed depth and oldest-ready age
- [x] Queue snapshot cadence defaults to 30000 milliseconds per durable worker and snapshot failure never stops polling or state transitions
- [x] Strict W3C version-00 `traceparent` parsing rejects malformed and all-zero identifiers; bounded optional `tracestate` is propagated but not exported as a span attribute
- [x] API requests emit server spans and durable assessment/outcome/courier/OTP enqueue operations emit producer spans with finite route/operation/queue/outcome attributes
- [x] Courier, webhook, and verification rows persist nullable validated trace context outside payloads; legacy null rows remain processable and archive evidence does not copy trace context
- [x] Courier, webhook, verification, and courier-session workers emit consumer/root operation spans with provider-client child spans and no business identifiers, phone/OTP values, credentials, URLs, payloads, or arbitrary error codes
- [x] Verification failure events continue the active worker trace into the newly queued webhook delivery
- [x] Missing or invalid persisted context starts a fresh root trace, while trace validation, clock, serialization, or sink failure cannot change API or worker behavior
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
- [x] Courier, webhook, and verification workers renew only their own active unexpired leases while work is running
- [x] Lease heartbeat failure aborts active courier/webhook/OTP provider calls and prevents stale-owner completion, retry, or failure transitions
- [x] Heartbeats are drained before every terminal or retry queue transition so renewal and final-state writes cannot race
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
- [x] Managed envelope v2 creates and zeroes a random AES-256 data key per record and wraps it only through a provider-neutral KMS/vault contract
- [x] Ciphertext authenticates the context digest and wrapped-key metadata, rejects context substitution before unwrap, and returns structured non-secret failure codes
- [x] Explicit legacy-key dual-read and managed key-version re-encryption preserve access during controlled rotation without plaintext fallback
- [x] Native multi-store rollout supports only `off` and deterministic `shadow`; the legacy result stays authoritative even when Guard recommends block
- [x] Selected shadow assessments and persistence failures return safe codes without changing checkout behavior
- [x] Tenant-scoped comparison API derives Guard values from the referenced assessment and stores immutable idempotent evidence without phone or secret material
- [x] Selected source integration reloads the durably persisted order and verifies organization/store/order scope before any Guard call
- [x] Native shadow rollout defaults to `off` and requires CSRF-protected owner/admin store opt-in
- [x] Sampled success, assessment failure, timeout, and comparison persistence failure are stored as immutable tenant-scoped attempt evidence
- [x] Merchant and platform views expose secret-free sampled-order, failure, disagreement-rate, and bounded score-delta reporting
- [x] Source retries use stable idempotency keys while the legacy decision remains effective through every failure path
- [x] Owner/admin operators can inspect secret-free failed courier, webhook, and verification work only inside an exact active organization/store
- [x] Controlled replay revalidates relational scope, locks the failed row, clears stale leases, and returns only replayable work to the existing private worker queue
- [x] Concurrent duplicate replay resolves to one queue reset, one immutable replay ledger record, and one audit event
- [x] Structural webhook failures plus expired, scope-mismatched, invalid, or undecryptable verification work remain failed and require reviewed remediation or a new verification request
- [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O
- [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract
- [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository
- [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully
- [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests
- [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials
- [x] Retention preview selects only old `completed`/`failed` courier, webhook, and verification work through a maintenance-only identity
- [x] Archive batches are globally bounded to 500, require a cutoff at least 24 hours old, and re-lock/revalidate rows with `SKIP LOCKED`
- [x] Secret-free archive evidence is inserted or exactly matched before source deletion in the same transaction
- [x] Queue payloads, webhook bodies, encrypted verification payloads, provider references, endpoint material, OTP/contact data, and credentials are never copied into archive evidence
- [x] The application runtime role cannot access `durable_work_archives` or delete durable source rows; replay and audit evidence remain untouched
- [x] No unattended scheduler or archive-to-source rehydration exists; approved windows, holds, maintenance identity, monitoring, and backup/PITR remain production controls

## Verified baseline

- Formatting check: passed
- ESLint with zero warnings: passed
- Fourteen migration files ordered/non-empty/non-destructive: passed locally and in source-branch CI
- First migration apply and immediate migration replay: passed remotely; this slice had no migration change
- Architecture import boundaries: passed locally and in source-branch CI
- Typecheck: 20 of 20 workspaces passed locally and in source-branch CI
- Test/build dependency tasks: 31 of 31 passed locally and in source-branch CI
- Repository tests: 191 passed in PostgreSQL-integrated source-branch CI
- Browser/integration metric coverage: 22 shared observability tests and 56 API source tests passed for browser controls/dependencies, relational reauthorization, native-shadow rollout/comparison/attempt success/replay/conflict/error, identifier omission, and sink isolation
- Tracing coverage: previous merged source CI passed 18 shared observability tests, one API durable-producer lineage test, four worker/provider lineage integrations, and three PostgreSQL durable-context tests
- Production builds: 20 of 20 workspaces passed locally and in source-branch CI
- WooCommerce PHP syntax: passed locally and in source-branch CI
- npm high/critical audit threshold: passed after the ESLint toolchain update; five moderate findings remain
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
- Managed-envelope source-head CI run `29579223561`, job `87880659693`: audit, formatting, lint, manifest validation, nine migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 96 assertions, 19 builds, and PHP lint passed at head `9dbd61eb84fa6d42958e120d5ce9e1e402bd6688`
- Managed-envelope final CI run `29580203487`, job `87883814149`: the same complete gate set passed at final documentation head `cae4d6ea9d101afe2e692819886fd149c5cf3b85`
- The verified provider-neutral managed-envelope boundary was squash-merged to `main` as `ee24aa7faf41e14b04769434c74bc99d7a245de4`
- Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
- Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
- The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
- Selected-source shadow pilot final CI run `29629751800`, job `88040964883`: audit, formatting, lint, eleven migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 120 assertions, 19 builds, and PHP lint passed at head `57e6b296617549e923fc80ab80b0317f109f5ee8`
- The verified selected-source shadow pilot foundation was squash-merged through PR #20 to `main` as `c478170c7dadbeafa576a62ae989df682e052d4e`
- Durable-work dead-letter final CI run `29644234591`, job `88079650134`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 126 assertions, 19 builds, and PHP lint passed at head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`
- The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`
- Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`
- The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`
- Structured observability final CI run `30317190971`, job `90145176143`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 132 assertions, 20 builds, and PHP lint passed at head `533979f6c5abe2cadf51de05bdd3b4844a647dd8`
- The verified structured observability milestone was squash-merged through PR #26 to `main` as `d8ef4acadb39ad33337f3e2c0ef0e6f1c9d4d8a7`
- API request observability final CI run `30318999952`, job `90150731352`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 136 assertions, 20 builds, and PHP lint passed at head `c92d0a713c2257e6cd49903ca292f41150141890`
- The verified API request observability milestone was squash-merged through PR #28 to `main` as `00d6eecb69f1edd48209cb8653137c8e8a57ab7f`
- Durable worker heartbeat final CI run `30322016826`, job `90159676583`: GitGuardian, audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 145 assertions, 20 builds, and PHP lint passed at head `46ed30424a191bb9baad9bbc60442ef847f3c75f`
- The verified durable worker heartbeat milestone was squash-merged through PR #30 to `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`
- Durable work retention final CI run `30325144458`, job `90168867190`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 154 assertions, 20 builds, and PHP lint passed at head `e0f18f0e3a51e484d1995f523d0572c09a3e0bba`
- The verified durable work retention milestone was squash-merged through PR #32 to `main` as `8788da49db5bc0726db97ad0b021fd30b06600e5`
- Vendor-neutral metrics final CI run `30327450803`, job `90175680964`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 161 assertions, 20 builds, and PHP lint passed at head `2d3a0dd40f0f9be8d8749f3ef22f9f2448967206`
- The verified vendor-neutral metrics milestone was squash-merged through PR #34 to `main` as `02be8d2aae6c65a4ddce82f1a7a260993ad1252f`
- Repository/provider/queue metrics final CI run `30329769797`, job `90182279338`: GitGuardian, audit, formatting, lint, thirteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 168 assertions, 20 builds, and PHP lint passed at head `027f33a8aa5f4d2676f5b07fd8991fefc1152ed4`
- The verified repository/provider/queue metrics milestone was squash-merged through PR #36 to `main` as `53b882028292a2a6c0a71da19540dba97c95ea9f`
- Distributed trace-context final CI run `30344660685`, job `90227950094`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 180 tests, 20 builds, and PHP lint passed at head `c40a2dd389d7d89619fed0141d21733f57f28d6b`
- The verified distributed trace-context milestone was squash-merged through PR #38 to `main` as `0b6125a7dfb0f4c5ba5092100de120e365e65d9b`
- Critical-path domain-metrics final CI run `30348649679`, job `90240703555`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 186 tests, 20 builds, and PHP lint passed at head `4242c1244a56a1e74de721fb34ba06612bdcae64`
- The verified critical-path domain-metrics milestone was squash-merged through PR #40 to `main` as `dfaf92c4f1f29a0068363d815b9cc3d0902be6fe`
- Browser/integration metrics final CI run `30386368200`, job `90366572706`: GitGuardian, audit, formatting, lint, fourteen migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 20 typechecks, 191 tests, 20 builds, and PHP lint passed at head `d29b5ef672ce31d65c6c3bfecacdc363ccf611ad`
- The verified browser/integration metrics milestone was squash-merged through PR #42 to `main` as `c697935549c427e4a4a6c81ad642416363e89e8e`
- Canonical documentation links: 61 reviewed locally with zero known broken internal links
- `tracker.yml` YAML structure remains valid
- Changed-file secret-pattern scan: passed

The repository-local continuation exporter was refreshed after the merged browser/integration metrics verification evidence was recorded.

## Next production milestone

1. Select and provision the managed runtime, PostgreSQL, KMS/vault, and observability providers under ADRs 0006–0010, including distinct production migration/runtime/retention-maintenance identities and a managed-provider point-in-time restore drill.
2. Select and provision a reviewed KMS/vault adapter, component service identities, access auditing, and an audited PostgreSQL background re-encryption runner before switching runtime writes from local v1 to managed v2.
3. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
4. Select, review, bundle, and configure the production OTP provider adapter/account for the existing verification runner.
5. Add distributed rate limiting/cache only when multiple replicas require it.
6. Deploy the verified post-persist source hook only to explicitly opted-in pilot stores and validate production observability without using Guard as the effective decision source.
7. Run the selected-merchant pilot, collect verified outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.

## External blockers

- Authorized Steadfast merchant/test credentials
- Steadfast provider-terms and merchant-authorization review
- Deployment platform, account, primary region, and budget
- Managed PostgreSQL provider and service tier
- Separately provisioned retention-maintenance identity, approved completed/failed windows, incident/legal holds, monitoring, and backup/PITR recovery
- Managed secret store and KMS/vault provider
- OpenTelemetry exporter/collector, sampling policy, remaining external integration-adapter/client metrics, managed observability backend, dashboards, alerts, and retention policy
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
