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

- `Dockerfile` for API, migration, courier-sync, event, and verification workers
- `Dockerfile.playwright` for the isolated browser/session worker
- `docker-compose.yml` for PostgreSQL, migration job, API, session worker, courier-sync worker, event worker, and an opt-in verification profile
- GitHub Actions CI with PostgreSQL 16
- API health check
- graceful API and worker shutdown
- migration execution separated from API startup
- migration SHA-256 manifest, apply/replay, and history-integrity verification
- clean PostgreSQL logical backup/restore rehearsal in CI
- provider-neutral managed-envelope v2 primitives with per-record data keys, legacy dual-read, rotation detection, and structured safe failures
- `db:runtime-grants` and CI effective-permission verification for an externally created non-owner runtime role
- independently runnable `workers/event-worker/dist/runner.js`
- independently runnable `workers/verification-worker/dist/runner.js` after a reviewed provider module is bundled/configured

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
- verification runner; provider adapter/account selection remains required before enabling delivery
- managed PostgreSQL
- optional Redis-compatible cache when distributed coordination is required
- selected managed secret/KMS and observability services

The Playwright, courier-sync, event, and verification workers must not receive public traffic and must never run inside checkout request handling. Merchant webhook delivery and OTP provider delivery are asynchronous.

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

## Verification-worker runtime

The verification worker requires:

- `DATABASE_URL`;
- local/self-hosted `CREDENTIAL_ENCRYPTION_KEY` and `CREDENTIAL_ENCRYPTION_KEY_VERSION` until managed KMS supersedes them;
- `PHONE_HMAC_KEY` and `OTP_HASH_SECRET` matching the API deployment;
- a reviewed, bundled `OTP_PROVIDER_MODULE` exporting `createOtpDeliveryProvider()`;
- provider-specific secrets such as sender ID/API key supplied only through the approved secret manager;
- optional worker ID, poll, lease, max-attempt, and provider-timeout settings.

`VERIFICATION_WORKER_LEASE_MS` must exceed `OTP_PROVIDER_TIMEOUT_MS` by more than five seconds. Each replica needs a stable unique worker ID, private ingress, least-privilege database/KMS access, and only the egress required by the selected provider. The Compose service is behind the `verification` profile because no provider is selected or bundled in this milestone.

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
3. Apply migrations as a separate release job while the migration identity holds the repository advisory lock.
4. Run the migration command again to verify replay/no-op behavior.
5. Run `npm run db:integrity` and fail the release on manifest, history, gap, null-checksum, or checksum mismatch.
6. As the migration owner, run `DATABASE_RUNTIME_ROLE=<external-runtime-role> npm run db:runtime-grants`; fail if the role is missing, elevated, inherited, owns database objects, the table policy is stale, or effective privileges exceed the reviewed policy.
7. Restore a release-candidate backup into a separate clean staging/recovery database and verify schema/history/replay; use full data hashes when the dataset and maintenance window permit.
8. Verify database and service readiness using runtime credentials rather than migration-owner credentials.
9. Deploy API and private workers independently.
10. Verify event-worker database, KMS/decrypt, DNS, and controlled-egress access.
11. Deploy static dashboard/admin assets.
12. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
13. Compare decision, outcome, outbox, and delivery metrics before broader rollout.
14. Roll back application artifacts without editing applied migrations when release validation fails.

Migrations 0008 and 0009 are append-only and immutable after application. Future webhook or verification-delivery schema changes require a new migration. Every new SQL migration must also add its reviewed SHA-256 entry to the manifest; regenerating the manifest to bless an unexplained edit is prohibited.

### Database integrity and restore commands

`npm run db:integrity` is read-only and requires a complete contiguous history with non-null matching checksums. `npm run db:restore-rehearsal` requires a separately created empty target through `RESTORE_DATABASE_URL`; it refuses the same database and any target with existing public relations. `RESTORE_REHEARSAL_VERIFY_DATA_HASHES=true` enables a full table scan/hash comparison and should be scheduled only for an approved maintenance or isolated snapshot window on large datasets.

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
- Select and wire a reviewed KMS/vault adapter and component service identities before switching runtime writes to managed-envelope v2; then run an audited background rewrite before retiring local v1 keys.
- Give migration ownership and runtime access distinct PostgreSQL identities. The migration owner runs schema/history/grant operations; runtime services use non-owner explicit DML grants and never migration-owner credentials.
- Split API, session worker, sync worker, event worker, and verification worker into narrower roles on the selected platform when supported; each must remain no more privileged than the reviewed repository runtime policy.
- Do not put secrets in images, CI logs, command arguments, source maps, logs, traces, or cache values.
- Restrict browser-worker ingress, egress, and filesystem access where practical.
- Restrict event-worker ingress and egress; block private and metadata networks at the infrastructure layer.
- Encrypt database storage and backups and test restore.
- Rotate API-key pepper, phone HMAC key, webhook secrets, and encryption keys through documented procedures.
- Keep API keys separate from dashboard user sessions.
- Keep PostgreSQL authoritative for sessions, idempotency, usage, audit records, jobs, and webhook outbox state.
- Do not expose worker services or the database publicly unless no private option exists and compensating controls are documented.
- Fail closed when endpoint/job decryption, event/verification scope validation, payload assertions, or worker lease ownership fails.

## Production validation gates

Before a selected merchant pilot:

- all nine migrations match the committed SHA-256 manifest and apply to a clean managed PostgreSQL 16+ database;
- migration replay is a clean no-op and migration-history integrity passes;
- a logical restore rehearsal succeeds against a distinct clean target;
- runtime and migration database roles are separated, the runtime role is externally provisioned as non-owner/non-elevated, and `db:runtime-grants` plus effective-permission checks pass after migrations;
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

Repository source-head CI run `29560049322`, job `87820368024`, verifies nine manifest-bound migrations, immediate replay, non-null history checksums, clean full-data-hash logical restore, runtime-role grants/effective permissions, architecture boundaries, 19 workspace typechecks, 28 test tasks with 87 assertions, 19 builds, dependency audit, formatting, lint, and WooCommerce PHP syntax.

The verified event-worker boundary includes transactional assessment/outcome outbox rows, explicit organization/store scope, atomic claims, stale recovery, expired-owner rejection, retry/final-failure transitions, endpoint-bound secret decryption, HMAC signing, HTTPS validation, DNS-to-non-public rejection, and redirect rejection.

Production provider provisioning, controlled-egress smoke tests, managed-provider PITR/retention validation, selected KMS adapter/service-identity/access-audit validation, audited ciphertext rewrite, and provider-specific OTP delivery remain pending.
