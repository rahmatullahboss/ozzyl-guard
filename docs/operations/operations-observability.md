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

### PostgreSQL

- Availability and failover state
- Connection usage and pool wait
- Lock wait and deadlock rate
- Slow query rate
- Migration success/failure
- Backup and restore status
- Durable-job claim and lease-recovery rate

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

- OTP sent/delivered/failed
- Verification success rate
- Provider latency
- Resend rate
- Abuse blocks
- Queue lag and dead-letter count

### Webhooks and events

- Outbox backlog and oldest-event age
- Delivery success/failure
- Retry rate
- Destination response class
- Dead-letter count
- End-to-end delivery latency

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
- assessment/job/event id
- provider
- error code
- duration
- engine/policy version when relevant
- deployment environment and service name

Redact all secrets and sensitive values before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, and unrestricted request bodies are prohibited.

## Tracing

Trace synchronous API work and asynchronous jobs using correlation IDs. Propagate assessment, job, event, and request references without propagating secret material.

Recommended span boundaries:

- request authentication and authorization;
- usage reservation and idempotency;
- feature assembly and PostgreSQL reads;
- pure risk-engine invocation as an internal span only;
- assessment persistence;
- durable job claim and completion;
- provider adapter call;
- webhook or OTP attempt.

Telemetry export failure must not break scoring or synchronous checkout handling.

## Alerts

- Provider session refresh failure spike
- API p95 latency or error-rate breach
- Assessment error/degraded spike
- PostgreSQL unavailable, connection saturation, or lock-wait spike
- Database migration or backup failure
- Queue backlog, stuck lease, or dead-letter growth
- OTP delivery failure spike
- Webhook delivery failure spike
- Usage counter/entitlement drift
- Reconnect-required account spike
- Secret scanning or redaction regression
- KMS/vault access or decrypt failure spike

## Runbooks

Create runbooks for:

- Steadfast login/selector break
- Expired, disabled, or rotated encryption key
- KMS/vault outage
- OTP provider outage
- Courier provider outage
- Database restore and failover
- API key compromise
- Courier credential/session compromise
- Queue backlog, lease recovery, and dead-letter replay
- Webhook destination failure
- Incorrect risk policy rollback
- Telemetry backend outage
- Reputation dispute escalation when that subsystem exists

## Health model

Expose separate health/readiness states for:

- API process
- database
- durable job/outbox store
- optional distributed cache
- event/webhook delivery
- courier provider adapters
- session workers
- verification providers
- KMS/vault access
- telemetry export

A provider or telemetry outage must not mark the whole API healthy without degraded dependency information, and must not necessarily take the API process out of service. Unknown or degraded dependencies must never be treated as safe approval signals.

## Data operations

- Automated encrypted backups
- Point-in-time recovery
- Restore testing on a schedule
- Migration preflight and post-deploy verification
- Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
- Audit trail for privileged data and credential access
- KMS key rotation and ciphertext re-encryption procedures
- Telemetry retention and access review
- Production-data redaction before lower-environment use

## Release operations

- Feature flags for new engine/policy versions and native multi-store migration
- Canary/pilot merchants before broad rollout
- Compare decision distributions before policy promotion
- Rollback path for API, worker, migration, and policy changes
- No automatic blocking policy promotion without reviewed outcome data
- Validate dashboards and alerts before each pilot expansion

## Provider selection still pending

A managed observability backend, retention policy, alert-delivery channel, and optional OpenTelemetry collector topology still require concrete selection. Those choices must satisfy ADR 0010 and must not introduce vendor-specific SDK calls into the risk engine.
