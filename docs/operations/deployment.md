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

- `Dockerfile` for API, migration, courier-sync, and event workers
- `Dockerfile.playwright` for the isolated browser/session worker
- `docker-compose.yml` for PostgreSQL, migration job, API, session worker, courier-sync worker, and event worker
- GitHub Actions CI with PostgreSQL 16
- API health check
- graceful API and worker shutdown
- migration execution separated from API startup
- migration apply/replay verification
- independently runnable `workers/event-worker/dist/runner.js`

Dashboard and admin build to static assets and may be hosted separately from the API.

## Production service separation

Deploy independently:

- public API
- merchant dashboard static application
- platform admin static application
- migration job
- courier session worker with Playwright/browser dependencies
- courier sync worker
- event/webhook outbox worker
- verification runner after the encrypted queue implementation and provider selection
- managed PostgreSQL
- optional Redis-compatible cache when distributed coordination is required
- selected managed secret/KMS and observability services

The Playwright, courier-sync, event, and future verification workers must not receive public traffic and must never run inside checkout request handling. Merchant webhook delivery and OTP provider delivery remain asynchronous.

## Event-worker runtime

The event worker requires:

- `DATABASE_URL`
- `CREDENTIAL_ENCRYPTION_KEY` for the local/self-hosted baseline
- `CREDENTIAL_ENCRYPTION_KEY_VERSION`
- optional `EVENT_WORKER_ID`
- optional `EVENT_WORKER_POLL_MS`, default `5000`
- optional `EVENT_WORKER_LEASE_MS`, default `60000`
- optional `EVENT_WORKER_MAX_ATTEMPTS`, default `5`
- optional `WEBHOOK_TIMEOUT_MS`, default `5000`

All numeric values must be positive integers. `EVENT_WORKER_LEASE_MS` must exceed `WEBHOOK_TIMEOUT_MS` by more than five seconds so one bounded HTTP attempt can finish before lease expiry.

Set a stable unique `EVENT_WORKER_ID` for each production replica. When omitted, the process generates a unique runtime ID suitable for local use.

The event worker needs:

- PostgreSQL access to claim and transition `webhook_deliveries`;
- read access to the matching `webhook_endpoints` and scoped `stores` relationship;
- decrypt permission for endpoint signing-secret envelopes;
- DNS resolution and controlled HTTPS egress;
- no public ingress;
- no access to raw API keys, OTPs, courier credentials, or unrestricted merchant records.

Production egress policy must deny private, metadata, link-local, and unauthorized networks even though application code validates literal and resolved destination addresses. Use a controlled resolver, egress proxy, firewall policy, or equivalent infrastructure boundary to reduce DNS-rebinding and route-change risk.

## Environment stages

- local
- CI/test
- staging
- production

Test and live API keys are logically separated. Staging must not use production courier credentials or webhook signing secrets unless explicitly approved and isolated.

Staging and production require separate:

- databases and runtime identities;
- secret namespaces and KMS access;
- provider credentials and webhook endpoint secrets;
- dashboard/admin origins and session-cookie settings;
- DNS/egress policies;
- telemetry projects or equivalent access boundaries.

## Release sequence

1. Build immutable artifacts.
2. Run migration-file, formatting, lint, and architecture checks.
3. Apply migrations as a separate release job.
4. Run the migration command again to verify replay/no-op behavior.
5. Verify database and service readiness.
6. Deploy API and private workers independently.
7. Verify event-worker database, KMS/decrypt, DNS, and controlled-egress access.
8. Deploy static dashboard/admin assets.
9. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
10. Compare decision, outcome, outbox, and delivery metrics before broader rollout.
11. Roll back application artifacts without editing applied migrations when release validation fails.

Migration 0008 is append-only and immutable after application. Future webhook-delivery schema changes require a new migration.

## Provider-selection work still required

The architecture is accepted, but the following concrete selections and provisioning remain external production work:

- managed application/container platform and primary region;
- managed PostgreSQL provider and service tier;
- managed secret store and KMS/vault provider;
- observability backend and retention policy;
- Redis-compatible cache provider if multi-replica coordination requires it;
- OTP provider;
- controlled DNS/egress, TLS, email, and incident-notification services.

A dedicated external broker is not required for the selected merchant pilot. PostgreSQL remains the durable job/outbox source of truth unless a later ADR supersedes that boundary with measured scale evidence.

The Docker Compose setup is a development/self-hosted baseline, not the final production environment. The local AES-GCM key environment variable is not an approved production KMS design.

## Security requirements

- Use managed secrets and least-privilege service identities.
- Replace the local AES-GCM master-key environment variable with managed KMS/vault envelope encryption before production credential and webhook-secret migration.
- Give API, migration, session worker, sync worker, event worker, verification worker, and database distinct permissions.
- Do not put secrets in images, CI logs, command arguments, source maps, logs, traces, or cache values.
- Restrict browser-worker ingress, egress, and filesystem access where practical.
- Restrict event-worker ingress and egress; block private and metadata networks at the infrastructure layer.
- Encrypt database storage and backups and test restore.
- Rotate API-key pepper, phone HMAC key, webhook secrets, and encryption keys through documented procedures.
- Keep API keys separate from dashboard user sessions.
- Keep PostgreSQL authoritative for sessions, idempotency, usage, audit records, jobs, and webhook outbox state.
- Do not expose worker services or the database publicly unless no private option exists and compensating controls are documented.
- Fail closed when endpoint-secret decryption, event scope validation, or worker lease ownership fails.

## Production validation gates

Before a selected merchant pilot:

- all eight migrations apply to a clean managed PostgreSQL 16+ database;
- migration replay is a clean no-op;
- runtime and migration database roles are separated;
- point-in-time restore is demonstrated;
- API readiness, graceful shutdown, and artifact rollback are demonstrated;
- private workers have no public ingress;
- event-worker egress cannot reach metadata, private, link-local, or unauthorized networks;
- DNS and redirect SSRF tests pass in the selected runtime/network topology;
- KMS decryption fails closed and key rotation is tested;
- webhook endpoint-secret rotation and re-encryption are tested;
- outbox backlog, stale lease recovery, retries, terminal failures, and delivery alerts are exercised;
- telemetry redaction tests and core alerts pass;
- queue lag, dead-letter, provider-degraded, and database alerts are exercised;
- the encrypted verification queue exists before OTP provider delivery is enabled;
- broad automatic blocking remains disabled.

## Current verification boundary

Repository CI currently verifies eight ordered migrations and immediate replay against PostgreSQL 16, architecture boundaries, 19 workspace typechecks, 28 test tasks with 53 assertions, 19 builds, dependency audit, formatting, lint, and WooCommerce PHP syntax.

The verified event-worker boundary includes transactional assessment/outcome outbox rows, explicit organization/store scope, atomic claims, stale recovery, expired-owner rejection, retry/final-failure transitions, endpoint-bound secret decryption, HMAC signing, HTTPS validation, DNS-to-non-public rejection, and redirect rejection.

Production provider provisioning, controlled-egress smoke tests, restore drills, managed KMS validation, and the durable verification queue/runner remain pending.
