# ADR 0007: Managed PostgreSQL production baseline

## Status

Accepted

## Date

2026-07-16

## Context

PostgreSQL is already the canonical relational store for tenant data, usage metering, idempotency, assessments, sessions, audit records, and durable worker state. Production requires a managed database baseline that preserves transaction semantics and tenant isolation without introducing a second data store as the source of truth.

No PostgreSQL hosting vendor has been selected.

## Decision drivers

- Preserve existing PostgreSQL transactions, constraints, and migrations.
- Protect merchant and operational data with encryption, backup, and restore controls.
- Support concurrency for API and worker replicas.
- Keep the pilot operationally simple.
- Avoid premature read-replica or multi-primary complexity.

## Considered options

1. Self-managed PostgreSQL on the application host.
2. Managed PostgreSQL in the same primary region as the application runtime.
3. Distributed SQL or a non-PostgreSQL database.
4. Multi-region active-active PostgreSQL from the first pilot.

## Decision

Use a managed PostgreSQL service compatible with PostgreSQL 16 or newer in the same primary region as the production application runtime.

The selected service must provide:

- encrypted storage and encrypted backups;
- TLS connections;
- automated backups and point-in-time recovery;
- high-availability or automatic failover appropriate to the selected service tier;
- private networking or an equivalent restricted-access control;
- connection limits and pooling compatible with multiple API and worker replicas;
- monitoring for availability, storage, connections, lock waits, replication/failover state, and slow queries;
- exportable backups and a documented restore path.

Application migrations remain append-only and run through the dedicated migration job. Runtime application identities must not have schema-owner privileges. The migration identity and runtime identity must be separate.

PostgreSQL remains the authoritative store for browser sessions, idempotency, usage reservations, audit data, domain records, and durable job/outbox state.

Read replicas and cross-region replicas are not required for the selected merchant pilot. They may be added later through a new ADR when measured load or recovery objectives justify them.

## Consequences

### Positive

- Preserves tested transaction and tenant-isolation behavior.
- Reduces database patching and backup operational burden.
- Supports safe scaling of API and worker replicas.
- Keeps one authoritative data model for the pilot.

### Negative / trade-offs

- Managed service cost and provider limits must be evaluated.
- Connection pooling and failover behavior require production testing.
- Single-region primary architecture has a regional recovery dependency.
- Vendor-specific backup retention and restore tooling remain to be selected.

## Security and privacy impact

- Database access must be restricted to approved service identities and administrative break-glass roles.
- Public database exposure is prohibited unless no private option exists and compensating controls are documented.
- Production data must not be copied into lower environments without approved redaction.
- Backups inherit the same sensitivity and retention controls as the primary database.
- Every merchant query must continue to enforce organization and store scope.

## Migration / rollout

1. Select a managed PostgreSQL provider and production tier.
2. Provision separate staging and production databases.
3. Configure TLS, private access, runtime and migration roles, backup retention, and alerts.
4. Apply all migrations to a clean staging database.
5. Run concurrency, idempotency, tenant-isolation, and restore tests.
6. Perform a production restore drill before the selected merchant pilot.
7. Record recovery objectives after the first pilot review.

## Validation

- All migrations apply to a clean PostgreSQL 16+ database.
- Runtime role cannot perform schema changes.
- Point-in-time restore is demonstrated.
- Connection exhaustion and failover behavior are tested.
- Quota, idempotency, and worker-claim concurrency tests pass.
- Tenant-isolation integration tests pass under production-equivalent roles.

## Supersedes / superseded by

None.
