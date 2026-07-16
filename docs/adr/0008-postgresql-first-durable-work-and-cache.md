# ADR 0008: PostgreSQL-first durable work and cache boundary

## Status

Accepted

## Date

2026-07-16

## Context

Ozzyl Guard already persists courier jobs and delivery state in PostgreSQL and claims work transactionally with `FOR UPDATE SKIP LOCKED`. Webhook and verification runners still need durable implementations. Introducing a mandatory external broker before the pilot would duplicate job state and complicate recovery.

The system also needs distributed rate limiting and short-lived cache coordination once multiple API replicas are enabled. Those concerns have different durability requirements from domain events and jobs.

## Decision drivers

- Keep durable work recoverable from the canonical database.
- Preserve idempotency and tenant scope across retries.
- Avoid losing jobs when an ephemeral cache is unavailable.
- Support multiple workers without duplicate processing.
- Keep the synchronous checkout path independent from courier/provider latency.

## Considered options

1. Use an external broker as the only source of truth for every job.
2. Use PostgreSQL for durable jobs/outbox and no distributed cache.
3. Use PostgreSQL as the durable source of truth plus an optional Redis-compatible service for ephemeral coordination.
4. Execute provider work synchronously from API requests.

## Decision

Use PostgreSQL as the authoritative durable store for jobs, outbox events, retry state, delivery attempts, and dead-letter state through the selected merchant pilot.

Workers must claim rows transactionally with bounded leases or `FOR UPDATE SKIP LOCKED`, persist attempt state before external work, and use idempotent handlers. Durable job payloads must include organization/store scope where merchant data is involved.

A Redis-compatible managed service may be introduced for ephemeral concerns such as:

- distributed API and browser-login rate limiting;
- short-lived policy or feature caches;
- cache invalidation coordination;
- non-authoritative locks or deduplication hints.

Redis or another cache must not become the sole store for jobs, webhook delivery state, browser sessions, idempotency records, usage reservations, audit events, courier credentials, or risk decisions.

The synchronous assessment path may enqueue or persist refresh work, but it must not wait for a courier provider, OTP provider, webhook destination, or broker round trip before returning the risk result.

A dedicated broker may be adopted later through a superseding ADR when measured throughput, latency, or operational evidence shows PostgreSQL job polling is insufficient. The PostgreSQL outbox remains the source for reliable publication during such a migration.

## Consequences

### Positive

- Reuses the tested PostgreSQL transaction boundary.
- Avoids dual-write ambiguity for pilot jobs.
- Makes recovery and replay auditable.
- Keeps ephemeral cache outages from deleting durable work.
- Allows distributed rate limiting without moving authoritative state.

### Negative / trade-offs

- High job throughput can increase PostgreSQL polling and lock load.
- Polling latency must be tuned and monitored.
- Dead-letter, lease recovery, and cleanup require explicit tables and runners.
- A later broker migration may be needed at higher scale.

## Security and privacy impact

- Job and outbox queries must enforce organization/store scope where applicable.
- Sensitive payloads must be minimized and encrypted when required.
- Raw credentials, OTPs, cookies, API keys, and full provider payloads must not be placed in cache or logs.
- Cache keys must avoid directly identifying customers.
- Worker identities require only the tables and operations needed for their job type.

## Migration / rollout

1. Add append-only migrations for durable webhook and verification work.
2. Implement bounded claim, retry, lease recovery, and dead-letter behavior.
3. Add concurrency and idempotency integration tests.
4. Add queue lag, retry, and dead-letter metrics.
5. Introduce a managed Redis-compatible cache only when multiple replicas require distributed coordination.
6. Re-evaluate a dedicated broker after pilot load evidence.

## Validation

- Competing workers do not process the same claim concurrently.
- Worker crashes return leased work to a retryable state.
- Duplicate delivery attempts remain idempotent.
- Cache unavailability does not lose durable jobs or approve risky orders.
- Queue lag and dead-letter alerts are exercised.
- Provider calls remain outside synchronous checkout handling.

## Supersedes / superseded by

None.
