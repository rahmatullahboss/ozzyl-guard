# Operations and Observability

## Required metrics

### API

- Request rate
- Error rate
- p50/p95/p99 latency
- Rate-limit events
- Quota/entitlement failures
- Idempotency replays/conflicts
- Degraded assessments

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
- assessment/job id
- provider
- error code
- duration
- engine/policy version when relevant

Redact all secrets and sensitive values. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, and raw API keys are prohibited.

## Tracing

Trace synchronous API work and asynchronous jobs using correlation IDs. Propagate assessment/job/request references without propagating secret material.

## Alerts

- Provider session refresh failure spike
- API p95 latency breach
- Assessment error/degraded spike
- Queue backlog
- OTP delivery failure spike
- Database migration failure
- Usage counter/entitlement drift
- Reconnect-required account spike
- Secret scanning or redaction regression

## Runbooks

Create runbooks for:

- Steadfast login/selector break
- Expired/rotated encryption key
- OTP provider outage
- Courier provider outage
- Database restore
- API key compromise
- Courier credential/session compromise
- Reputation dispute escalation
- Queue backlog/dead-letter recovery
- Incorrect risk policy rollback

## Health model

Expose separate health/readiness states for:

- API process
- database
- queue
- event/webhook delivery
- courier provider adapters
- session workers
- verification providers

A provider outage must not mark the whole API healthy without degraded dependency information, and must not necessarily take the API process out of service.

## Data operations

- Automated backups
- Restore testing on a schedule
- Migration preflight and post-deploy verification
- Retention/deletion jobs for sessions, traces, screenshots, raw evidence, and logs
- Audit trail for privileged data/credential access

## Release operations

- Feature flags for new engine/policy versions and native multi-store migration
- Canary/pilot merchants before broad rollout
- Compare decision distributions before policy promotion
- Rollback path for API, worker, migration, and policy changes
- No automatic blocking policy promotion without reviewed outcome data
