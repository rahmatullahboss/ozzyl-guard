# ADR 0011: Selected source-platform shadow pilot

## Status

Accepted

## Date

2026-07-18

## Context

The native multi-store adapter already supports deterministic `off` and `shadow` modes while keeping the legacy source-platform decision authoritative. A concrete source integration, store opt-in boundary, durable advisory evidence, and tenant-scoped pilot reporting are required before merchant calibration can begin.

The pilot must not introduce automatic blocking, provider calls in checkout, scoring in API handlers, or external I/O inside the canonical Risk Engine.

## Decision drivers

- Run native evaluation only after the source platform has durably persisted an order.
- Revalidate organization/store scope from authoritative relational data.
- Keep checkout behavior unchanged during Guard, timeout, or persistence failures.
- Make duplicate source retries deterministic and idempotent.
- Measure comparison quality and operational failures without storing secrets.
- Require explicit store-level opt-in with a default of `off`.

## Considered options

1. Call Guard synchronously before source order persistence.
2. Run shadow evaluation after persistence but configure rollout only in source application settings.
3. Run post-persist evaluation with Ozzyl Guard as the authoritative store-scoped rollout and evidence boundary.
4. Introduce an enforcement mode during the pilot.

## Decision

Use option 3.

The selected `multi-store-saas` source path must:

- reload the persisted order through an authoritative source-order reader;
- verify the returned organization, store, and order identifiers before any Guard call;
- fetch a tenant-scoped Ozzyl Guard rollout record;
- run only when the record is explicitly `shadow` and the deterministic sample bucket is selected;
- keep the normalized legacy decision as the effective result in every outcome;
- persist successful comparison evidence through the existing comparison contract;
- persist one immutable sampled-attempt record for success, assessment failure, timeout, or comparison persistence failure;
- isolate attempt persistence failure as advisory state;
- use stable source-derived idempotency keys for assessment, comparison, and attempt writes.

PostgreSQL is the durable source of truth for rollout and attempt evidence. Missing rollout rows behave as `off`. Cache remains non-authoritative.

Merchant rollout changes require an authenticated browser session, CSRF proof, active owner/admin membership, and exact organization/store scope. Service API keys use the separate `comparisons:write` contract and cannot act as dashboard sessions.

Pilot reporting exposes only bounded, tenant-scoped aggregates: sampled orders, successful comparisons, assessment failures, persistence failures, decision disagreement rate, and bounded score-delta summaries. Raw credentials, phone numbers, provider payloads, cookies, OTPs, and request bodies are prohibited.

No automatic blocking or enforcement mode is added.

## Consequences

### Positive

- Checkout remains independent from Guard availability.
- Explicit store opt-in and relational revalidation prevent accidental cross-tenant rollout.
- Duplicate source retries produce one immutable evidence record.
- Pilot disagreement and failure rates become reviewable without exposing secrets.
- The canonical Risk Engine stays pure and provider-neutral.

### Negative / trade-offs

- The source platform must provide a reliable persisted-order reader and invoke the hook after commit.
- Successful comparison and sampled-attempt writes are separate idempotent operations; attempt write failure can leave comparison evidence without a sampled-attempt row and is surfaced as advisory failure.
- PostgreSQL reporting queries require bounded windows and indexes as pilot volume grows.
- Automatic enforcement remains unavailable until calibration and a separate accepted decision.

## Security and privacy impact

- Rollout and attempt writes are constrained by organization/store composite references.
- Assessment and comparison references are revalidated against the same tenant and external order.
- Browser mutation is CSRF protected and owner/admin restricted.
- Service API keys require `comparisons:write`; no raw key is logged or stored by the integration.
- Dashboard and admin payloads contain aggregate counts and bounded deltas only.

## Migration / rollout

1. Apply append-only migration `0011_native_shadow_pilot.sql`.
2. Deploy the rollout and attempt repositories plus service/browser contracts.
3. Deploy the source post-persist hook with rollout default `off`.
4. Explicitly opt in selected stores with a bounded sample rate.
5. Review tenant-scoped metrics and failure isolation before expanding sampling.
6. Keep broad automatic blocking disabled until a later ADR and calibration evidence.

## Validation

- Missing rollout rows return `off` and do not call Guard.
- Source order and rollout scope mismatches stop before assessment.
- Guard failure and timeout retain the legacy result and record advisory state.
- Comparison and attempt persistence failures do not change checkout behavior.
- Concurrent duplicate attempts serialize into one immutable row.
- Cross-tenant assessment/comparison references are rejected.
- Merchant and platform reports expose only scoped aggregate metrics.
- Real PostgreSQL migration, tenant-negative, idempotency, and failure-isolation tests pass.

## Supersedes / superseded by

None.
