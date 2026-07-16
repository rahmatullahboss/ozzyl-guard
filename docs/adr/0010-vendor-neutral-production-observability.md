# ADR 0010: Vendor-neutral production observability

## Status

Accepted

## Date

2026-07-16

## Context

The repository defines required metrics, structured logging fields, alerts, and runbooks, but a production collection and export boundary has not been formalized. Observability must span synchronous API requests and asynchronous workers without leaking merchant or provider secrets.

No observability backend has been selected.

## Decision drivers

- Correlate API requests, assessments, jobs, and provider work.
- Detect degraded dependencies without marking unknown data safe.
- Keep telemetry portable across hosting vendors.
- Enforce sensitive-data redaction before export.
- Support pilot review of risk quality and operational health.

## Considered options

1. Rely only on platform-native logs.
2. Integrate directly with one vendor-specific SDK throughout the codebase.
3. Use OpenTelemetry-compatible instrumentation with structured logs and a managed backend selected later.
4. Store operational telemetry only in PostgreSQL.

## Decision

Adopt a vendor-neutral observability boundary based on:

- structured JSON application logs;
- OpenTelemetry-compatible traces and metrics;
- correlation identifiers propagated across API requests, assessments, durable jobs, webhook deliveries, and verification attempts;
- a managed log, metric, trace, and error backend selected during infrastructure provisioning.

Instrumentation must occur at application and worker boundaries, not inside the pure risk engine. The engine and policy version may be recorded as attributes on assessment spans and metrics after scoring.

Telemetry must cover:

- API request rate, errors, latency, quota failures, rate limits, idempotency conflicts, and degraded assessments;
- PostgreSQL connection, lock, migration, and slow-query health;
- worker queue lag, lease/claim failures, retries, dead letters, and completion latency;
- courier session age, refresh errors, provider latency, observation freshness, and reconnect state;
- webhook and OTP delivery outcomes;
- risk decision, confidence, unknown/degraded, score-band, and verified-outcome distributions.

Logs and telemetry must be redacted before export. Full phone numbers, raw provider responses, credentials, cookies, OTPs, access tokens, raw API keys, decrypted payloads, and unrestricted request bodies are prohibited.

Health and readiness must distinguish process health from dependency degradation. Provider outages should surface degraded dependency state without silently approving orders or necessarily removing the API process from service.

## Consequences

### Positive

- Keeps instrumentation portable across providers.
- Supports end-to-end correlation across asynchronous work.
- Makes pilot risk calibration and operational review measurable.
- Centralizes redaction and telemetry conventions.

### Negative / trade-offs

- OpenTelemetry collection and sampling require operational tuning.
- A managed backend and retention policy still need selection.
- High-cardinality attributes must be controlled.
- Telemetry cost grows with traffic and retention.

## Security and privacy impact

- Organization/store identifiers must use safe internal references and controlled cardinality.
- Customer phone numbers and raw order payloads are prohibited telemetry attributes.
- Access to logs, traces, dashboards, and error reports requires least privilege and auditability.
- Retention and deletion rules must cover logs, traces, screenshots, and captured evidence.
- Secret-scanning and redaction-regression alerts are required.

## Migration / rollout

1. Define shared telemetry helpers and redaction tests.
2. Instrument API, PostgreSQL access, and worker boundaries.
3. Deploy an OpenTelemetry-compatible collector or direct exporter supported by the selected platform.
4. Select the managed backend and retention policy.
5. Create pilot dashboards, alerts, and runbooks.
6. Validate sampling, cardinality, and cost before broader rollout.

## Validation

- Request-to-job correlation is visible across API and worker telemetry.
- Redaction tests reject prohibited fields.
- Provider outage and stale observation alerts are exercised.
- Queue lag, dead-letter, database, and migration alerts are exercised.
- Pilot dashboards show decision, confidence, degraded, and outcome distributions.
- Telemetry backend failure does not break scoring or synchronous checkout handling.

## Supersedes / superseded by

None.
