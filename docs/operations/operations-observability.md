# Operations and Observability

## Accepted observability boundary

[ADR 0010 — Vendor-neutral production observability](../adr/0010-vendor-neutral-production-observability.md) requires structured JSON logs, OpenTelemetry-compatible traces and metrics, correlation across synchronous and asynchronous work, and a managed backend selected during infrastructure provisioning.

Instrumentation belongs at API, repository, provider-adapter, and worker boundaries. It must not introduce external I/O into the pure risk engine.

## Required metrics

### Implemented application boundary

`@ozzyl/observability` now provides an exporter-neutral metric descriptor and recorder. It emits one JSON metric point per observation and deliberately performs no network I/O. Descriptor creation requires a finite allowlist for every attribute; unknown attributes, identifier-like keys, secret/contact/payload/URL keys, out-of-set values, invalid timestamps, and negative counter or histogram values are rejected. Validation, serialization, clock, or sink failure is swallowed so metrics cannot change API or worker behavior.

Implemented points:

- `ozzyl.api.requests` — counter by normalized HTTP method, canonical allowlisted route/template, and status class;
- `ozzyl.api.request.duration` — histogram observation in milliseconds using the same bounded attributes;
- `ozzyl.api.control.events` — authentication, authorization, rate-limit, quota, and idempotency control events using finite allowed/rejected/replay/error categories;
- `ozzyl.api.dependency.operations` and `ozzyl.api.dependency.operation.duration` — API-key resolution, rate limiting, usage reservation, feature loading, assessment/outcome persistence, idempotency storage, durable enqueue, OTP verification, and native-shadow rollout/comparison/attempt repositories by finite dependency/operation/outcome categories;
- `ozzyl.browser.control.events` — browser session authentication, relational authorization, CSRF, and rate-limit events using finite allowed/rejected/error categories;
- `ozzyl.browser.dependency.operations` and `ozzyl.browser.dependency.operation.duration` — browser auth, rate limiter, merchant dashboard, platform admin, rollout, dead-letter, and audit boundaries by finite dependency/operation/outcome categories;
- `ozzyl.risk.assessments` — one point per newly persisted assessment using bounded decision, risk level, score band, confidence band, degraded flag, and courier freshness;
- `ozzyl.risk.outcomes` — one point per newly persisted verified outcome using finite outcome and linked-assessment categories;
- `ozzyl.worker.operations` — counter by finite worker type, operation, and outcome;
- `ozzyl.worker.operation.duration` — histogram observation in milliseconds using the same worker attributes;
- `ozzyl.worker.claim.failures` — counter by finite durable-worker type only;
- `ozzyl.repository.operations` and `ozzyl.repository.operation.duration` — durable courier, webhook, and verification queue claim/start/renew/complete/retry/fail/snapshot operations by finite repository type, operation, and outcome;
- `ozzyl.provider.operations` and `ozzyl.provider.operation.duration` — courier API, courier browser-login, webhook HTTP, and verification-delivery calls by finite provider category, operation, and success/retryable/permanent outcome;
- `ozzyl.queue.depth` — gauge for queued, retry-scheduled, claimed, processing, and failed durable work by finite queue type and status;
- `ozzyl.queue.oldest_ready.age` — gauge in milliseconds for the oldest currently due courier, webhook, or verification item.

Request IDs, user/session/organization/store/account/job/event/assessment/work identifiers, API-key or idempotency values, external order IDs, emails, phone numbers or hashes, OTP values, credentials, URLs, payloads, provider responses, vendor names, error messages, and arbitrary error codes are not metric attributes. Provider labels are broad finite categories rather than vendor/account/destination names. Browser relational authorization is allowed only after repository revalidation; known scope/validation/idempotency failures are rejected while unknown persistence failures are errors. Risk score and confidence are converted to fixed bands rather than emitted as raw values. Assessment/outcome and native-shadow persistence replays use finite replay outcomes without exporting keys or IDs. Queue snapshots contain only aggregate status counts and oldest-ready age. The default recorder writes JSON lines to the process telemetry stream; a reviewed OpenTelemetry exporter/collector adapter may replace that sink without changing call sites.

### API

- Request rate
- Error rate
- p50/p95/p99 latency
- Rate-limit events
- Quota/entitlement failures
- Idempotency replays/conflicts
- Degraded assessments
- Authentication/session failures without sensitive values
- Transactional outbox rows created by event type
- Outbox enqueue failures and transaction rollbacks

### PostgreSQL

- Availability and failover state
- Connection usage and pool wait
- Lock wait and deadlock rate
- Slow query rate
- Migration success/failure
- Backup and restore status, duration, age, and last successful drill
- Migration manifest/history checksum mismatch count
- Durable-job claim and lease-recovery rate
- `SKIP LOCKED` claim throughput
- Stale-lease recovery and exhausted-work terminalization

### Courier

- Session refresh success rate
- Session age
- Provider response latency
- Provider error rate by structured code
- Observation freshness
- Queue lag
- Reconnect-required accounts
- Selector/login-state failures

### Verification

- OTP queued/sent/delivered/failed
- Verification success rate
- Provider latency and timeout rate
- Claim throughput by verification-worker replica
- Fresh/recovered/lost lease counts
- Retry rate and attempts distribution
- Payload decryption/validation and scope-mismatch failures
- Resend rate and abuse blocks
- Queue lag, oldest due job, exhausted `LEASE_EXPIRED`, and dead-letter count

The durable runner is implemented, but production delivery remains disabled until a reviewed provider adapter/account is selected, bundled, configured, and validated in staging.

### Webhooks and events

- Outbox backlog and oldest-event age
- Due versus future retry count
- Claim throughput by event-worker replica
- Fresh, recovered, and lost lease counts
- Delivery success/failure
- Retry rate and attempts distribution
- Destination response class
- DNS resolution failure count
- Unsafe-destination rejection count
- Endpoint inactive/decryption/scope-mismatch failures
- Exhausted `LEASE_EXPIRED` count
- End-to-end duration from `occurred_at` to `completed_at`
- Delivery latency by event type

### Risk quality

- Decision distribution
- Outcome by score band
- False-positive rate
- False-negative rate
- Confidence distribution
- Unknown/degraded distribution
- Savings estimate accuracy

### Native shadow pilot

- Explicitly opted-in stores
- Sampled orders
- Successful comparisons
- Guard assessment failures and timeouts
- Comparison and sampled-attempt persistence failures
- Decision disagreement rate
- Bounded score-delta minimum, maximum, average, and lower/equal/higher counts
- Rollout reads, updates, idempotent replays, conflicts, and tenant-scope rejections

Merchant views must query only the authorized organization/store and a bounded
window. Platform administration may aggregate across active stores but must not
expose customer identifiers, external order IDs, raw request payloads, API keys,
provider credentials, cookies, OTPs, or signing secrets. Reporting failure must
not affect source checkout or the effective legacy decision.

## Logging

`@ozzyl/observability` is the canonical vendor-neutral structured-log boundary. The API server and the courier-session, courier-sync, event, and verification runners use it for lifecycle and error records. Every record receives a timestamp, level, service, environment, and event name before export.

The helper recursively redacts sensitive field names before serialization. Passwords, secrets, tokens, API keys, cookies, OTPs, raw phone values, credentials, provider responses, DNS answers, payloads, request/response bodies, and URLs are replaced rather than emitted. `phone_hash` is permitted as a non-reversible correlation reference. Error values expose only a bounded name and structured code; messages and stacks are omitted. Circular objects, binary values, big integers, excessive depth, oversized strings, and large collections are converted to bounded safe representations.

Serialization or log/metric/span-sink failure is swallowed at this boundary so telemetry cannot break API or worker execution. API request logs use only accepted/generated opaque request IDs, an allowlisted route or bounded route template, HTTP method, status/status class, and duration. API metrics use normalized request categories, finite control/dependency outcomes, and bounded risk-quality bands without request or business identifiers. Durable repository operations, provider calls, and aggregate queue depth/oldest-ready-age are instrumented with finite categories only. Traces use descriptor-owned finite attributes and carry opaque W3C context separately from logs and metrics. Raw URLs, query strings, dynamic assessment identifiers, tenant/job/account identifiers, provider/vendor names, arbitrary error codes, payloads, and contact data are not metric or span attributes. Remaining browser/admin/integration metrics, OpenTelemetry exporter/collector topology, sampling, dashboards, alerts, managed retention, and the managed backend remain production follow-up work.

Use structured logs with:

- request id
- organization/store id or safe internal reference
- assessment/job/event/delivery id
- provider or destination category where safe
- worker id
- error code
- attempt number
- duration
- engine/policy version when relevant
- deployment environment and service name

Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, webhook signing secrets, destination URL credentials, and unrestricted request/event bodies are prohibited.

The API emits startup/shutdown, request-completion, and unhandled-error records, and all four private workers emit startup and structured error records through the shared redaction boundary. The API records request count/duration, control outcomes, critical dependency count/duration, bounded assessment quality, and verified outcomes; private workers record operation count/duration; durable courier/event/verification queue repositories record transition count/duration and periodic aggregate depth/oldest-ready-age; courier API/browser, webhook HTTP, and OTP delivery boundaries record provider count/duration; durable claim failures remain separately counted. API requests emit server spans, durable queue creation emits producer children, private workers continue persisted context as consumer spans, and provider calls emit client children. Production instrumentation must still add external integration-adapter/client measurements plus a reviewed exporter/collector and sampling policy without serializing signing secrets, encrypted/decrypted payload bodies, phone/OTP values, business identifiers, provider credentials, URLs, arbitrary error codes, or DNS answer details that disclose internal topology.

Recommended event-worker error codes include:

- `UNSAFE_WEBHOOK_DESTINATION`
- `WEBHOOK_DNS_RESOLUTION_FAILED`
- `WEBHOOK_SECRET_DECRYPTION_FAILED`
- `INVALID_EVENT_PAYLOAD`
- `WEBHOOK_SCOPE_MISMATCH`
- `WEBHOOK_DELIVERY_LEASE_LOST`
- `ENDPOINT_INACTIVE`
- `TIMEOUT`
- `NETWORK_ERROR`
- `RATE_LIMITED`
- `LEASE_EXPIRED`

## Tracing

`@ozzyl/observability` implements an exporter-neutral W3C trace boundary. It accepts only version-00 `traceparent` values with non-zero trace and span identifiers. Optional `tracestate` is syntactically bounded to 512 characters and 32 unique members. Malformed caller or persisted context is ignored and the component starts a fresh root trace; trace input is never an authorization or tenant identity.

Implemented topology:

- every API request creates an `ozzyl.api.request` server span and returns its `traceparent`;
- assessment/outcome webhook creation, courier refresh, and OTP delivery enqueue create `ozzyl.api.durable.produce` producer children;
- producer context is stored only in nullable `trace_parent`/`trace_state` columns on `courier_jobs`, `webhook_deliveries`, and `verification_jobs`;
- courier-sync, event, and verification workers continue valid persisted context as `ozzyl.worker.operation` consumer spans;
- courier API, webhook HTTP, and OTP delivery calls create `ozzyl.provider.operation` client children;
- courier-session refresh starts a root worker span with a browser-login provider child;
- verification failure event creation persists the active worker context into the new webhook delivery.

Span attributes are finite categories only: normalized method, canonical route/template, status class, durable operation/queue type/outcome, worker type/operation/outcome, and broad provider type/operation/outcome. Request, organization, store, account, job, event, delivery, assessment, API-key, endpoint, phone/hash, OTP, credential, URL, payload/body, provider-response, vendor-name, and arbitrary error-code attributes are prohibited. `tracestate` is propagated but not emitted inside span JSON. Trace context is not copied into archive evidence and legacy null-context work remains processable.

The current tracer emits one local JSON line per completed span and performs no network I/O. ID generation, validation, clock, serialization, or sink failure is swallowed and cannot break scoring, persistence, queue transitions, provider execution, or synchronous checkout. Exporter/collector wiring, sampling policy, managed retention, dashboards, and alerts remain production work.

## Alerts

- Provider session refresh failure spike
- API p95 latency or error-rate breach
- Assessment error/degraded spike
- PostgreSQL unavailable, connection saturation, or lock-wait spike
- Database migration, manifest/history integrity, backup, or restore failure
- Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
- Event-worker claim rate drops to zero while due backlog grows
- Webhook delivery failure or retry spike
- Webhook secret-decryption or scope-mismatch failure
- Unsafe webhook destination spike
- DNS resolution failure spike
- OTP delivery/retry, payload-validation, scope-mismatch, or lease-expiry spike
- Usage counter/entitlement drift
- Reconnect-required account spike
- Secret scanning or redaction regression
- KMS/vault access or decrypt failure spike

## Runbooks

Create and exercise runbooks for:

- Steadfast login/selector break
- Expired, disabled, or rotated encryption key
- KMS/vault outage
- OTP provider outage, credential rejection, payload validation failure, and uncertain provider acceptance
- Courier provider outage
- Database logical restore, managed point-in-time restore, and failover
- API key compromise
- Courier credential/session compromise
- Webhook signing-secret compromise and endpoint rotation
- Queue/outbox backlog, lease recovery, and dead-letter replay
- Webhook destination failure or repeated HTTP rejection
- DNS resolution/egress-policy failure
- Invalid event payload or scope mismatch
- Incorrect risk policy rollback
- Telemetry backend outage
- Reputation dispute escalation when that subsystem exists

A webhook replay runbook must verify endpoint status and scope, rotate or re-encrypt the signing secret when needed, and create a new authorized replay record rather than mutating immutable event identity or silently resetting a delivered row.

A database restore runbook must identify the approved backup or PITR timestamp, freeze or isolate writes when consistency requires it, provision a distinct clean target, verify manifest/history integrity before and after restore, compare schema and approved data/sequence checks, replay migrations as a no-op, rotate credentials if the drill crosses trust boundaries, record recovery time and recovery point, and require an explicit cutover decision. The repository rehearsal never drops the source or performs production cutover automatically.

## Health model

Expose separate health/readiness states for:

- API process
- database
- durable job/outbox store
- optional distributed cache
- event/webhook worker process
- webhook backlog and oldest-event age
- event-worker signing-secret decryption capability
- courier provider adapters
- session workers
- verification providers and future verification runner
- KMS/vault access
- telemetry export

A webhook endpoint outage, provider outage, or telemetry outage must not necessarily take the API process out of service. Readiness and operations views must still expose degraded dependencies. Unknown or degraded dependencies must never be treated as safe approval signals.

## Event-worker operational contract

- `EVENT_WORKER_ID` should be stable and unique per replica in production.
- Courier, event, and verification poll, lease, lease-renewal, max-attempt, and provider-timeout values must be positive integers.
- Every lease-renewal interval must be no greater than half its lease; event and verification leases must also exceed their provider timeout by more than five seconds.
- Alert on heartbeat renewal failure because active provider I/O is aborted and the job remains available only through stale-lease recovery or reviewed replay.
- PostgreSQL is authoritative for due time, attempts, owner, lease expiry, retry, and terminal state.
- Only the current unexpired owner may complete, retry, or fail a claimed delivery.
- A worker crash leaves recoverable state; the next worker may reclaim after lease expiry.
- Exhausted stale work fails closed with `LEASE_EXPIRED`.
- Worker replicas require private ingress, controlled egress, DNS access, database access, secret/KMS decrypt permission, and no broader merchant-data permission than necessary.

## Data operations

- Automated encrypted backups
- Point-in-time recovery
- Restore testing on a schedule
- Migration preflight and post-deploy verification
- Preview-first bounded terminal durable-work archival through the maintenance-only PostgreSQL boundary
- Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
- Audit trail for privileged data and credential access
- KMS key rotation and ciphertext re-encryption procedures
- Webhook signing-secret rotation/re-encryption procedure
- Telemetry retention and access review
- Production-data redaction before lower-environment use

## Release operations

- Feature flags for new engine/policy versions and native multi-store migration
- Canary/pilot merchants before broad rollout
- Compare decision distributions before policy promotion
- Rollback path for API, worker, migration, and policy changes
- Do not edit migration 0008 after application; use a new migration for schema changes
- Keep event-worker deployment independently scalable and rollbackable from the API
- Exercise outbox backlog and retry behavior before each pilot expansion
- No automatic blocking policy promotion without reviewed outcome data
- Validate dashboards and alerts before each pilot expansion

## Provider selection still pending

An OpenTelemetry exporter/collector implementation, sampling policy, managed observability backend, telemetry retention policy, alert-delivery channel, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Remaining external integration-adapter/client metrics, dashboards, and alerts remain unimplemented. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.

## Browser dead-letter operations surface

The merchant dashboard may list and explicitly replay failed durable work only for an exact active store where the current user is an owner or administrator. Listing is read-only and secret-free. Replay requires CSRF proof and a stable idempotency key, then delegates to the same transactional PostgreSQL repository used by the operator CLI.

The browser surface does not implement an automatic retry loop and performs no provider or destination network I/O. Structural webhook failures, expired or structurally invalid verification work, unsupported courier job types, relational scope mismatches, and changed source state remain blocked. Successful replay returns work to the existing private worker queue and preserves the immutable replay ledger plus audit evidence.

## Durable work retention operations

Terminal courier, webhook, and verification rows may be archived only through the maintenance-only repository and CLI documented in [Durable Work Retention Runbook](durable-work-retention-runbook.md). The application runtime role cannot read or write `durable_work_archives` and cannot delete source queue rows.

Every run must preview first, use a cutoff at least 24 hours old, select only `completed`/`failed`, and process no more than 500 rows. Production baseline guidance is 30 days for completed work and 180 days for failed work until support, incident, privacy, and legal owners approve another policy. Archive evidence is secret-free and does not replace backup/PITR because source payloads cannot be reconstructed after commit.

Monitor and record:

- candidate and archived counts by work type and terminal status;
- oldest eligible terminal timestamp;
- skipped locked or state-changed rows;
- archive evidence conflicts and maintenance privilege failures;
- duration and rows per batch;
- source queue size before and after maintenance;
- archive table growth and approved evidence-retention window.

No unattended retention scheduler is implemented. Automatic scheduling remains blocked on approved retention windows, incident/legal holds, maintenance identity provisioning, monitoring, backup/PITR recovery, and archive-evidence retention.
