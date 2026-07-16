# AGENTS.md — Ozzyl Guard Development Rules

## Purpose

This repository is edited by multiple developers and AI agents. Follow these rules to prevent duplicated modules, inconsistent schemas, insecure shortcuts, and conflicting business logic.

## Required reading before changes

1. `tracker.yml`
2. `README.md`
3. `docs/README.md` and the relevant domain documents under `docs/`
4. `.ai-bridge/current-plan.md`
5. `.ai-bridge/implementation-status.md`
6. `.ai-bridge/decisions.md`
7. `.ai-bridge/pro-context.md` when starting from a new chat or without prior repository context
8. Accepted ADRs under `docs/adr/`

## Non-negotiable rules

1. There must be exactly one canonical risk engine package.
2. Courier providers must be implemented behind the `CourierAdapter` boundary.
3. API handlers must not contain business scoring logic.
4. Applied migrations must never be edited. Add a new migration.
5. Every table and column must be defined in the canonical database package.
6. Search for an existing utility, type, route, table, and service before creating one.
7. Raw API keys must never be stored after creation.
8. Do not log OTPs, passwords, session cookies, access tokens, raw API keys, or raw courier payloads.
9. Every merchant-scoped repository method must require organization/store scope.
10. Unknown customer data must not be converted to a safe result.
11. Provider failure must not be converted to an automatic block.
12. Every new endpoint requires validation, authentication, authorization, rate limiting, auditability, and tests.
13. Long-running work belongs in queues/workers, not synchronous checkout requests.
14. Documentation and code must be updated together.

## Required workflow

1. Read the required context.
2. Inspect current repository state and search existing symbols/schema.
3. Compare the proposed change with accepted contracts and ADRs.
4. Create or update an ADR for architectural changes.
5. Implement the smallest coherent change.
6. Add tests for happy paths, failures, security boundaries, and tenant isolation.
7. Run typecheck, lint, unit tests, integration tests, and relevant security checks.
8. Update `tracker.yml`, `.ai-bridge/implementation-status.md`, and relevant documentation.
9. Refresh `.ai-bridge/pro-context.md` after major milestones or documentation-map changes.
10. Report changed files, migrations, tests, remaining risks, rollback, and next milestone.

## Package ownership

- `packages/risk-engine`: pure scoring, confidence, signals, and decisions only.
- `packages/courier-adapters`: provider clients, response normalization, provider error taxonomy.
- `packages/database`: schema, migrations, repositories, and transaction boundaries.
- `packages/authentication`: users, sessions, API keys, permissions, password hashing.
- `packages/verification`: OTP/IVR abstractions and verification sessions.
- `packages/billing`: plans, entitlements, metering, quotas, subscriptions.
- `packages/shared-types`: canonical request/response and event contracts.
- `packages/sdk`: supported client SDKs and webhook verification helpers.
- `apps/api`: public and internal HTTP interfaces.
- `apps/dashboard`: merchant UI.
- `apps/admin`: internal operations UI.
- `workers/*`: asynchronous jobs, provider automation, event delivery.
- `integrations/*`: WooCommerce, Shopify, custom JS, and native clients.

## Migration rules

- Migrations are append-only after application.
- Every migration must have forward verification and rollback notes.
- Runtime schema and migration schema must be reviewed together.
- Tenant-scoped uniqueness must include the correct organization/store boundary.
- Usage/quota changes must be atomic under concurrency.

## Security review checklist

- No secret appears in logs, errors, screenshots, metadata, cookies, or analytics.
- Passwords use Argon2id or an approved managed identity provider.
- API keys use `ozg_test_` or `ozg_live_`, are displayed once, and stored as hashes only.
- User login sessions are independent from API keys.
- Courier credentials and sessions use versioned envelope encryption.
- Webhooks are signed, timestamped, replay-protected, and retried.
- Optional URLs are protected against SSRF.
- Tenant scope cannot be omitted by callers.

## Definition of done

- Acceptance criteria pass.
- Tests cover important failures and isolation boundaries.
- No schema, API contract, or scoring duplication was introduced.
- Sensitive data is redacted.
- Documentation, `tracker.yml`, and implementation status are updated.
- `.ai-bridge/pro-context.md` is refreshed when the continuation context materially changes.
- Migration and rollback effects are understood.
