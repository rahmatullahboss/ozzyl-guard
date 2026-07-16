# ADR 0004: Foundation Technology Direction

## Status

Accepted for Phase 1; deployment details remain pending

## Date

2026-07-16

## Context

The Ozzyl Guard workspace began empty. The source `multi-store-saas` repository already uses npm workspaces, Turborepo, TypeScript, Drizzle, React Router, Vitest, Playwright, and Cloudflare D1/Workers. Ozzyl Guard requires a standalone API, relational tenancy/billing, queue workers, and Playwright automation.

## Decision drivers

- Reuse team conventions without inheriting insecure/domain-coupled code
- Strong relational integrity and concurrency
- Shared TypeScript contracts
- Independent API/dashboard/worker deployment
- Testable browser automation

## Decision

Use:

- Node.js 20+
- TypeScript
- npm workspaces
- Turborepo
- PostgreSQL as canonical production database
- Drizzle ORM and append-only migrations initially
- Vitest for unit/contract/integration tests
- Playwright for browser/session/E2E tests
- React Router/React for dashboard reuse where beneficial

Do not select the final deployment, queue, PostgreSQL vendor, or KMS implementation in this ADR.

## Consequences

### Positive

- Familiar monorepo/tooling conventions
- Shared types across API/workers/integrations
- PostgreSQL supports relational integrity, transactions, billing concurrency, and analytics
- Provider/browser workers remain separable

### Negative / trade-offs

- Requires migration away from D1-specific schema/code
- More infrastructure than a single Cloudflare application
- Pending operational decisions must be resolved before production

## Validation

- Clean developer setup and root commands
- PostgreSQL migration/integration tests
- Dependency-boundary tests
- Separate API and Playwright worker builds
