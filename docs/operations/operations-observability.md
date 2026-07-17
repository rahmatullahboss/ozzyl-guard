# Operations and Observability

## Accepted observability boundary

[ADR 0010 — Vendor-neutral production observability](../adr/0010-vendor-neutral-production-observability.md) requires structured JSON logs, OpenTelemetry-compatible traces and metrics, correlation across synchronous and asynchronous work, and a managed backend selected during infrastructure provisioning.

Instrumentation belongs at API, repository, provider-adapter, and worker boundaries. It must not introduce external I/O into the pure risk engine.

## Required metrics

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
- Backup and restore status
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
- Provider latency
- Resend rate
- Abuse blocks
- Queue lag and dead-letter count

The durable verification runner is still pending. Until it is implemented, production readiness must not claim asynchronous OTP delivery.

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

## Logging

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

The event worker currently emits startup and structured error records. Production instrumentation must add counters, histograms, and correlation spans without serializing signing secrets, canonical payload bodies, or DNS answer details that disclose internal topology.

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

Trace synchronous API work and asynchronous jobs using correlation IDs. Propagate assessment, job, event, delivery, and request references without propagating secret material.

Recommended span boundaries:

- request authentication and authorization;
- usage reservation and idempotency;
- feature assembly and PostgreSQL reads;
- pure risk-engine invocation as an internal span only;
- assessment/outcome persistence;
- transactional outbox insert;
- durable job/delivery claim and completion;
- provider adapter call;
- webhook DNS validation and HTTP attempt without sensitive attributes;
- future OTP attempt.

The event ID links API persistence and asynchronous delivery. The delivery ID links claim, attempt, retry, and completion operations. Telemetry export failure must not break scoring, persistence, or synchronous checkout handling.

## Alerts

- Provider session refresh failure spike
- API p95 latency or error-rate breach
- Assessment error/degraded spike
- PostgreSQL unavailable, connection saturation, or lock-wait spike
- Database migration or backup failure
- Queue/outbox backlog, oldest-event age, stuck lease, or dead-letter growth
- Event-worker claim rate drops to zero while due backlog grows
- Webhook delivery failure or retry spike
- Webhook secret-decryption or scope-mismatch failure
- Unsafe webhook destination spike
- DNS resolution failure spike
- OTP delivery failure spike after the verification runner exists
- Usage counter/entitlement drift
- Reconnect-required account spike
- Secret scanning or redaction regression
- KMS/vault access or decrypt failure spike

## Runbooks

Create and exercise runbooks for:

- Steadfast login/selector break
- Expired, disabled, or rotated encryption key
- KMS/vault outage
- OTP provider outage
- Courier provider outage
- Database restore and failover
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
- `EVENT_WORKER_POLL_MS`, `EVENT_WORKER_LEASE_MS`, `EVENT_WORKER_MAX_ATTEMPTS`, and `WEBHOOK_TIMEOUT_MS` must be positive integers.
- `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds.
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
- Outbox retention and terminal-delivery archival policy
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

A managed observability backend, retention policy, alert-delivery channel, optional OpenTelemetry collector topology, deployment runtime, PostgreSQL service, and managed KMS/vault remain to be selected. Those choices must satisfy ADRs 0006–0010 and must not introduce vendor-specific SDK calls into the risk engine.
