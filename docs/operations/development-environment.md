# Development Environment

## Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL 16+
- Git
- PHP 8.0+ with sodium for WooCommerce lint/runtime
- Playwright browser dependencies when running the Steadfast session worker
- Docker/Compose recommended, but not required for package-level development

## Setup

Use `config/environment.example` as a checklist. Copy variables into an ignored local environment file or secret manager and replace every redacted value.

```bash
npm install
npm run db:check
npm run db:migrate
npm run bootstrap -w @ozzyl/api
```

The bootstrap transaction creates the first owner, organization, store, membership, audit event, and service API key. The raw API key is printed once; only its HMAC hash and display prefix are persisted.

## Applications

```bash
npm run dev:api
npm run dev:dashboard
npm run dev -w @ozzyl/admin
```

Default ports:

- API: 3000
- Merchant dashboard: 5173
- Platform admin: 5174

Dashboard and admin are UI foundations. Their authenticated live-data endpoints remain part of production hardening.

## Workers

```bash
npm run start -w @ozzyl/courier-session-worker
npm run start -w @ozzyl/courier-sync-worker
```

The session worker requires an AES-256-GCM key encoded as 32 bytes in Base64 for local/self-hosted development. Production must use managed KMS/vault envelope encryption.

The verification and event packages currently provide secure worker/service libraries; production durable runners depend on the OTP provider and queue/outbox decisions.

## Root verification

```bash
npm run format:check
npm run lint
npm run db:check
npm run check:architecture
npm run typecheck
npm run test
npm run build
npm audit --audit-level=high
php -l integrations/woocommerce/ozzyl-guard.php
```

`npm run verify` combines formatting, lint, migration-file checks, architecture checks, typecheck, tests, and builds.

## Database workflow

1. Change the canonical Drizzle schema in `packages/database/src/schema.ts`.
2. Add a new ordered migration under `packages/database/migrations/`.
3. Review SQL constraints, indexes, tenancy, and compatibility.
4. Run `npm run db:check`.
5. Apply to a clean PostgreSQL database and a database at the previous migration level.
6. Run repository/concurrency/tenant-isolation integration tests.
7. Never edit an applied migration.

The local workspace used for the current milestone did not have Docker/PostgreSQL available, so clean migration apply is delegated to CI's PostgreSQL 16 service.

## Live Steadfast tests

Live browser/provider tests are opt-in and require:

- an authorized dedicated merchant/test account
- provider-terms and authorization review
- `STEADFAST_LIVE_TESTS=true`
- credentials stored through the encrypted credential boundary

Never put credentials in committed environment files, tests, documentation, command arguments, screenshots, or logs.
