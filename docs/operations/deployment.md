# Deployment

## Accepted production baseline

The production topology is defined by:

- [ADR 0006 — Production deployment topology](../adr/0006-production-deployment-topology.md)
- [ADR 0007 — Managed PostgreSQL production baseline](../adr/0007-managed-postgresql-production-baseline.md)
- [ADR 0008 — PostgreSQL-first durable work and cache boundary](../adr/0008-postgresql-first-durable-work-and-cache.md)
- [ADR 0009 — Managed secrets and KMS envelope encryption](../adr/0009-managed-secrets-and-kms-envelope-encryption.md)
- [ADR 0010 — Vendor-neutral production observability](../adr/0010-vendor-neutral-production-observability.md)

These ADRs select the architecture and minimum operational controls without inventing a hosting, database, cache, KMS, or observability vendor.

## Implemented deployment foundation

The repository includes:

- `Dockerfile` for API, migration, and non-browser workers
- `Dockerfile.playwright` for the isolated browser/session worker
- `docker-compose.yml` for PostgreSQL, migration job, API, session worker, and courier-sync worker
- GitHub Actions CI with PostgreSQL 16
- health check for the API
- graceful API and worker shutdown
- migration execution separated from API startup

Dashboard and admin build to static assets and may be hosted separately from the API.

## Production service separation

Deploy independently:

- public API
- merchant dashboard static application
- platform admin static application
- migration job
- courier session worker with Playwright/browser dependencies
- courier sync worker
- verification runner after provider selection
- event/webhook outbox runner after durable-runner implementation
- managed PostgreSQL
- optional Redis-compatible cache when distributed coordination is required
- selected managed secret/KMS and observability services

The Playwright worker must not receive public traffic and must never run inside checkout request handling. Event, verification, courier, and webhook work remains asynchronous.

## Environment stages

- local
- CI/test
- staging
- production

Test and live API keys are logically separated. Staging must not use production courier credentials unless explicitly approved and isolated.

Staging and production require separate:

- databases and runtime identities;
- secret namespaces and KMS access;
- provider credentials;
- dashboard/admin origins and session-cookie settings;
- telemetry projects or equivalent access boundaries.

## Release sequence

1. Build immutable artifacts.
2. Run migration-file and architecture checks.
3. Apply migrations as a separate release job.
4. Verify database and service readiness.
5. Deploy API and private workers independently.
6. Deploy static dashboard/admin assets.
7. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
8. Compare decision and outcome metrics before broader rollout.
9. Roll back application artifacts without editing applied migrations when release validation fails.

## Provider-selection work still required

The architecture is accepted, but the following concrete selections and provisioning remain external production work:

- managed application/container platform and primary region;
- managed PostgreSQL provider and service tier;
- managed secret store and KMS/vault provider;
- observability backend and retention policy;
- Redis-compatible cache provider if multi-replica coordination requires it;
- OTP provider;
- DNS, TLS, email, and incident-notification services.

A dedicated external broker is not required for the selected merchant pilot. PostgreSQL remains the durable job/outbox source of truth unless a later ADR supersedes that boundary with measured scale evidence.

The Docker Compose setup is a development/self-hosted baseline, not the final production environment.

## Security requirements

- Use managed secrets and least-privilege service identities.
- Replace the local AES-GCM master-key environment variable with managed KMS/vault envelope encryption before production credential migration.
- Give API, migration, session worker, sync worker, event worker, verification worker, and database distinct permissions.
- Do not put secrets in images, CI logs, command arguments, source maps, logs, traces, or cache values.
- Restrict browser-worker ingress, egress, and filesystem access where practical.
- Encrypt database storage and backups and test restore.
- Rotate API-key pepper, phone HMAC key, webhook secrets, and encryption keys through documented procedures.
- Keep API keys separate from dashboard user sessions.
- Keep PostgreSQL authoritative for sessions, idempotency, usage, audit records, and durable work.
- Do not expose worker services or the database publicly unless no private option exists and compensating controls are documented.

## Production validation gates

Before a selected merchant pilot:

- all migrations apply to a clean managed PostgreSQL 16+ database;
- runtime and migration database roles are separated;
- point-in-time restore is demonstrated;
- API readiness, graceful shutdown, and artifact rollback are demonstrated;
- private workers have no public ingress;
- KMS decryption fails closed and key rotation is tested;
- telemetry redaction tests and core alerts pass;
- queue lag, dead-letter, provider-degraded, and database alerts are exercised;
- broad automatic blocking remains disabled.

## Current verification boundary

Package-level tests, typecheck, builds, PHP syntax, architecture checks, and migration validation pass in CI. GitHub Actions applies all six migrations against PostgreSQL 16 and runs PostgreSQL integration tests. Production provider provisioning, restore drills, KMS validation, and infrastructure smoke tests remain pending.
