# Deployment

## Implemented deployment baseline

The repository includes:

- `Dockerfile` for API, migration, and non-browser workers
- `Dockerfile.playwright` for the isolated browser/session worker
- `docker-compose.yml` for PostgreSQL, migration job, API, session worker, and courier-sync worker
- GitHub Actions CI with PostgreSQL 16
- health check for the API
- graceful API and worker shutdown
- migration execution separated from API startup

Dashboard and admin build to static assets and may be hosted separately from the API.

## Service separation

Deploy independently:

- Public/internal API
- Merchant dashboard
- Platform admin
- Migration job
- Courier session worker with Playwright/browser dependencies
- Courier sync worker
- Verification runner after provider selection
- Event/webhook outbox runner after queue/outbox implementation
- PostgreSQL
- Selected queue/cache/observability services

The Playwright worker must not receive public traffic and must never run inside checkout request handling.

## Environment stages

- local
- CI/test
- staging
- production

Test and live API keys are logically separated. Staging must not use production courier credentials unless explicitly approved and isolated.

## Release sequence

1. Build immutable artifacts.
2. Run migration-file and architecture checks.
3. Apply migrations as a separate release job.
4. Verify database and service readiness.
5. Deploy API and workers.
6. Deploy static dashboard/admin assets.
7. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
8. Compare decision and outcome metrics before broader rollout.

## Production requirements not yet selected

Separate ADRs are still required for:

- API/dashboard/admin hosting platform
- managed PostgreSQL provider
- queue/broker and dead-letter implementation
- distributed cache/rate limiting
- KMS/vault and envelope-encryption implementation
- scheduler/runtime
- metrics, tracing, logs, and error tracking
- OTP provider

The Docker Compose setup is a development/self-hosted baseline, not the final production architecture.

## Security requirements

- Use managed secrets and least-privilege service identities.
- Replace the local AES-GCM master-key environment variable with KMS/vault envelope encryption.
- Give API, migration, session worker, sync worker, and database distinct permissions.
- Do not put secrets in images, CI logs, command arguments, or source maps.
- Restrict browser-worker egress and filesystem access where practical.
- Encrypt backups and test restore.
- Rotate API-key pepper, phone HMAC key, webhook secrets, and encryption keys through documented procedures.
- Keep API keys separate from dashboard user sessions.

## Current verification boundary

Package-level tests, typecheck, builds, PHP syntax, architecture checks, and migration-file validation passed locally. Docker was not installed in the audited workspace, so the Compose stack and clean PostgreSQL migration apply were not run locally. CI is configured to run the migration job against PostgreSQL 16.
