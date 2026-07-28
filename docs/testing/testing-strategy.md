# Testing Strategy

## Unit tests

- Bangladesh phone normalization
- Risk signal calculation
- Confidence calculation
- Decision threshold mapping
- Provider response normalization
- Status mapping
- Envelope encryption, per-record data-key zeroization, opaque key wrapping, key-version rotation, legacy dual-read, authenticated context/metadata, and structured fail-closed provider errors
- OTP expiry and attempt limits
- API key generation/prefix/hash verification
- Policy parsing/versioning
- Webhook HMAC signing, retry classification, and DNS destination validation
- Migration manifest ordering and SHA-256 tamper detection
- Runtime-role identifier validation and explicit table-policy completeness
- Native shadow off mode, deterministic sampling, post-persist source revalidation, legacy-authoritative disagreement, timeout classification, and safe assessment/persistence failures
- Structured-log fixed metadata, recursive sensitive-field redaction, safe error-code-only serialization, circular/binary/bigint handling, bounded truncation, and telemetry-sink failure isolation
- Non-overlapping lease heartbeat scheduling, failure propagation, abort signaling, and idempotent stop behavior
- API request-ID validation, bounded route templates, status/latency lifecycle records, and safe unhandled-error serialization
- Metric descriptor/name/unit validation, finite categorical attribute allowlists, high-cardinality/secret-like key rejection, value/sign validation, JSON point serialization, API/browser control and dependency plus risk/outcome/worker/repository/provider/queue helper output, and metric-sink failure isolation
- W3C traceparent/tracestate parsing, formatting, persisted-context round-trip, malformed/all-zero rejection, finite span descriptors, one-shot completion, duration/status output, root/child lineage, and ID/clock/serialization/sink failure isolation

## Contract tests

Each courier adapter must pass a shared contract suite:

- Returns canonical observation
- Handles timeout
- Handles expired session
- Never leaks credentials
- Maps malformed responses to structured errors
- Preserves source/freshness metadata
- Separates actual return from pre-shipping cancellation

Public API contract tests cover:

- Canonical success/error response
- Lowercase enums and `signals[].code`
- Unknown/degraded behavior
- Idempotent replay
- Test/live key isolation
- Dedicated comparison scope, idempotent replay, order binding, and cross-store assessment rejection

Webhook delivery contract tests cover:

- Canonical domain-event payloads
- HMAC signature over timestamp and exact payload
- Redirect rejection
- Retryable HTTP/network/DNS failures
- Terminal unsafe-destination and inactive-endpoint failures
- No signing secret, raw phone, or unrestricted request body in logs

## Integration tests

- User/session authentication
- API key creation, one-time reveal, authentication, revocation, and rotation
- Atomic quota enforcement under concurrency
- Assessment persistence
- Transactional encrypted OTP queue creation and tenant-scoped verification
- Lease-owned OTP provider delivery and retry/failure state
- Courier session refresh
- Transactional assessment/outcome webhook outbox emission
- Lease-owned webhook delivery, renewal, abort-on-loss, and retry
- Multi-tenant isolation
- Organization/store membership authorization
- API-wide request correlation plus request count/duration metrics for public, authenticated, browser, not-found, and unhandled-error paths without raw dynamic routes, query values, request IDs, or tenant identifiers in metric attributes
- Authentication, authorization, rate-limit, quota, and idempotency control metrics plus critical API dependency count/duration without business identifiers or error detail
- Newly persisted assessment/outcome distributions use bounded bands and finite categories, while idempotent replays do not double-count quality points
- Usage-limit rejection remains a 429/rejected metric, while unexpected usage-ledger failure remains a 500/error metric
- Browser login/session, rate-limit, CSRF, relational authorization, dashboard/admin/rollout/dead-letter/audit dependency metrics omit user/session/tenant/store/work/email values and preserve responses when the metric sink fails
- Native-shadow rollout/comparison/attempt metrics cover success, replay, conflict, known rejection, and unknown persistence error without order, assessment, tenant, idempotency, or error-detail values
- API server-span continuation, response traceparent, bounded tracestate propagation, durable producer child context, and absence of tenant/phone/job values from span output
- Courier-session, courier-sync, event, and verification operation plus provider-call metrics with bounded category/operation/outcome labels and no job, account, event, endpoint, phone, OTP, credential, URL, payload, vendor, error-text, or provider-response values
- Courier-session root/provider lineage and courier, webhook, and verification producer→consumer→provider trace lineage without business identifiers or sensitive values
- Durable courier, webhook, and verification repository operation timing plus PostgreSQL aggregate queue-depth/oldest-ready-age snapshots without row or tenant identifiers
- Concurrent tenant-scoped native shadow comparison and sampled-attempt persistence, default-off rollout, owner/admin opt-in, idempotency-conflict rejection, negative tenant references, and bounded pilot reporting

### PostgreSQL concurrency and idempotency coverage

The CI PostgreSQL service runs real-database integration tests for:

- duplicate usage reservations serializing through the organization/period advisory lock;
- replaying one persisted usage charge for concurrent duplicate request IDs;
- concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
- concurrent assessment saves returning the single persisted scoped winner;
- preventing losing assessment IDs from writing orphan or invalid signal rows;
- concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
- operation idempotency values remaining isolated by organization and store;
- assessment and outcome winners creating exactly one outbox row per matching active endpoint inside the persistence transaction;
- outbox rows excluding raw phone values and unrelated tenant endpoints;
- browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
- competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
- preventing another courier worker from stealing a fresh lease;
- reclaiming expired courier jobs and rejecting the previous owner;
- clearing courier ownership when retryable work is returned to the queue with backoff;
- moving exhausted stale courier jobs to terminal failure with `LEASE_EXPIRED`;
- deriving courier organization/store/provider scope from account relationships rather than payload fields;
- competing event workers claiming different due webhook deliveries with `FOR UPDATE SKIP LOCKED`;
- preventing another event worker from stealing a fresh webhook lease;
- rejecting an expired event-worker owner before completion or failure;
- reclaiming stale webhook deliveries and incrementing attempts only when processing starts;
- clearing webhook ownership when a retry is scheduled;
- moving exhausted stale webhook deliveries to terminal failure with `LEASE_EXPIRED`;
- failing webhook deliveries whose persisted organization/store scope does not match the endpoint relationship;
- serializing concurrent duplicate OTP send requests into one verification session, hash, and encrypted job;
- verifying OTP only within the authoritative organization/store scope and emitting one verified outbox event per endpoint;
- competing verification workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
- protecting fresh verification leases and rejecting expired owners;
- reclaiming stale verification work, clearing retry ownership, and terminalizing exhausted leases;
- failing both the verification job and authoritative session on persisted scope mismatch;
- rejecting API keys, feature assembly, assessment writes, and outcome writes when organization/store ownership does not match;
- isolating merchant dashboard aggregates and rechecking active platform-admin role on every call;
- listing and updating webhook administration only for an active owner/admin scope without exposing signing secrets;
- listing verification administration only for the authorized store without exposing OTP hashes or encrypted job payloads;
- allowing reviewed runtime DML while denying migration-history reads, DELETE, DDL, schema creation, database ownership, elevated attributes, and inherited privileges;
- serializing concurrent duplicate native-shadow comparison writes into one immutable row;
- deriving Guard comparison values from the tenant-scoped assessment rather than trusting client values;
- rejecting idempotency-key reuse with changed rollout evidence and rejecting cross-store assessment references.

### Native shadow rollout safety coverage

Default tests prove:

- `off` mode performs no Guard assessment or comparison API call;
- deterministic sampling keeps retries for the same store/order in the same cohort;
- the legacy score and decision remain the effective result even when Guard recommends block;
- Guard assessment and comparison-persistence failures return safe codes without leaking provider or database details;
- the API requires `comparisons:write`, idempotency, matching order identity, and the authenticated organization/store assessment scope;
- the concrete post-persist hook reloads the authoritative source order and stops before Guard on organization/store/order mismatch;
- default-off rollout and deterministic sampling prevent unapproved stores from running shadow;
- CSRF-protected browser mutation permits only active owner/admin store scope;
- timeout, assessment failure, comparison persistence failure, and sampled-attempt persistence failure remain advisory while legacy stays effective;
- PostgreSQL stores one immutable comparison and sampled-attempt winner under concurrent duplicate writes, rejects negative tenant references, and derives Guard comparison values server-side;
- merchant and platform reports expose sampled counts, failure counts, disagreement rate, and bounded score deltas without secret-bearing fields;
- comparison, rollout, and attempt tables contain no raw phone, API key, credential, or unrestricted order snapshot.

Selected source-platform post-persist shadow invocation is covered. Enforcement remains outside this milestone and requires opt-in pilot outcomes plus explicit review.

### Webhook destination security coverage

Default tests use injected DNS and fetch boundaries. They prove:

- non-HTTPS URLs, embedded credentials, localhost names, local suffixes, and literal non-public IPv4/IPv6 addresses are rejected;
- a hostname resolving to any non-public address is rejected before `fetch`;
- DNS resolution failure is classified as retryable without making a network request;
- redirects are disabled;
- successful deliveries use the expected HMAC signature and canonical payload;
- envelope ciphertext cannot be decrypted under another endpoint or session context.

Production must add controlled egress and network policy because application-level DNS validation alone cannot eliminate DNS-rebinding or route-change risk.

### Verification payload security coverage

Default tests prove:

- job-bound encrypted payloads decrypt only under `verification-job:<job-id>` context;
- tenant, purpose, phone HMAC, and OTP hash must all match persisted assertions;
- provider rejection is terminal while structured retryable provider errors use bounded backoff;
- reporter state and logs do not receive plaintext OTP values;
- provider I/O is not invoked after payload, scope, expiry, or lease failure.

### Managed envelope security coverage

Default tests prove:

- managed v2 creates a random 32-byte data key per record and zeroes it after use;
- plaintext values and plaintext data keys are not serialized into the envelope;
- context mismatch is rejected before provider unwrap;
- wrapped-key metadata is authenticated and tampering fails closed;
- provider outage produces a structured non-secret error;
- a provider cannot pass the plaintext data key through as a wrapped key;
- old managed key versions remain readable during rotation and can be re-encrypted under the current version;
- legacy v1 ciphertext is read only through explicitly configured legacy keys and rewrites to managed v2;
- malformed, unsupported, or unavailable-key envelopes fail closed.

A real provider adapter, service-identity denial tests, access-audit verification, and PostgreSQL background rewrite integration remain production/provider validation work.

### Migration replay coverage

CI runs the migration command twice against the same PostgreSQL service:

1. the first run applies every ordered migration;
2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.

The migration history table remains the replay source of truth. Applied migration files remain immutable.

### Migration integrity and restore coverage

CI additionally proves:

- the ordered SQL file list exactly matches the committed SHA-256 manifest;
- changed migration bytes, unknown history rows, checksum mismatch, and non-contiguous history are rejected;
- legacy name-only rows can be backfilled only from committed manifest values before `checksum_sha256` becomes `NOT NULL`;
- migration execution is serialized by one session-held advisory lock;
- the restore target is a distinct pre-created clean database;
- `pg_dump`/`pg_restore` credentials are not placed in process arguments;
- restored schema, full table data hashes, sequence state, migration history, and replay match the source.

Production-managed point-in-time recovery remains a provider provisioning gate rather than a repository CI claim.

Current PostgreSQL coverage includes owner-checked lease renewal, durable dead-letter authorization/replay, runtime-role isolation, and maintenance-only retention archival. Future provider validation must still include selected-provider smoke tests for distinct API/worker identities, migration-owner grant execution, and the separately provisioned retention-maintenance identity.

## End-to-end tests

- Merchant signup and store creation
- Create a test/live API key
- Connect Steadfast account
- Assess WooCommerce COD order
- Receive a signed `assessment.completed` webhook asynchronously
- Review high-risk order
- Verify OTP
- Submit courier outcome
- Receive a signed `order.outcome_recorded` webhook asynchronously
- View usage and savings report

## Security tests

- Tenant data leakage
- API key replay/revocation
- Raw key absence from database/metadata/logs
- Brute-force OTP
- CSRF
- Literal-IP and DNS-result SSRF
- Webhook replay and redirect handling
- Webhook signing-secret decryption failure
- Envelope authenticated-context mismatch
- Secret redaction, including nested payload/body/URL/credential fields and error-message omission
- Log, metric, and span serialization/export failure isolation from authenticated assessment, application, and worker execution
- Metric attribute rejection for identifier/hash/key/URL/payload/body/token/secret-style names and values outside descriptor-owned finite sets
- Caller request-ID rejection when the value is not an approved opaque format, plus raw path/query suppression
- Injection attacks
- Session fixation/rotation
- Credential decryption failure
- Worker lease ownership, renewal cadence, stale-owner rejection, provider abort on renewal loss, and drain-before-transition ordering
- Job payload scope, encryption-context, phone-HMAC, and OTP-hash tampering
- Runtime database role privilege escape, ownership, migration-history, DELETE, DDL, and durable archive-table access attempts

## Scraper tests

- Login page selector fixtures
- Successful cookie extraction
- Invalid credentials
- CAPTCHA/2FA detection
- Provider HTML changes
- Browser cleanup on failure
- Login-state/session validation
- Redacted screenshot/trace behavior
- Structured failure codes

Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.

## Architecture tests

- `packages/risk-engine` cannot import network/database/provider/browser packages
- API routes cannot import provider session drivers directly
- API persistence may enqueue durable work but cannot execute merchant/provider network delivery
- All schema comes from `packages/database`
- All public response and domain-event types come from `packages/shared-types`
- Tenant-scoped repositories, outbox rows, and jobs require explicit scope

## Pilot evaluation

Track a confusion matrix against real verified outcomes:

- true positive
- false positive
- true negative
- false negative

Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.

## Required CI gates

- formatting check
- lint
- typecheck
- unit tests
- contract tests
- integration tests with PostgreSQL
- migration manifest, verification, replay, and database-history integrity
- clean PostgreSQL backup/restore rehearsal
- least-privilege runtime database role grant and effective-permission verification
- dependency audit
- secret scanning
- architecture/dependency-boundary tests

## Browser dead-letter operations coverage

Browser API tests must prove session enforcement, exact-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, secret-free list serialization, replay-result serialization, and structured conflict mapping. The existing real-PostgreSQL durable-work suite remains authoritative for concurrent duplicate replay, tenant isolation, structural/expiry rejection, lease reset, immutable evidence, and audit atomicity.

## Durable work retention coverage

Default unit tests prove invalid cutoffs, empty terminal-status selections, unsafe archive-run IDs, and batches above 500 fail before a database connection is opened.

PostgreSQL integration tests must prove:

- valid durable trace context round-trips across courier, webhook, and verification rows while nullable legacy rows remain valid;
- malformed context is rejected by every durable table and all-zero trace/span IDs fail closed;

- preview returns only old `completed`/`failed` rows and performs no mutation;
- queued and recent rows remain in their source queues;
- preview and archive responses exclude source payload and provider-reference values;
- archive evidence is inserted before source deletion in one transaction;
- courier, webhook, and verification source rows are deleted only after matching evidence exists;
- replay ledger rows remain after source archival;
- rerunning the same cutoff is idempotent when no source rows remain;
- the archive schema contains no payload, raw contact, endpoint, credential, or provider-reference columns;
- the normal runtime role cannot read `durable_work_archives` and has no source `DELETE` privilege.
