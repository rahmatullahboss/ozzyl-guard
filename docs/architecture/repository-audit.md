# Initial Repository Audit

Audit date: 2026-07-16 (Asia/Dhaka)

## 1. Current workspace state

Workspace root: `/Users/rahmatullahzisan/Desktop/Dev/Ozzyl Guard`

Initial contents:

- `.gitignore`
- `.mcp.json`
- `codexpro/`

No Ozzyl Guard application code, package manifest, database schema, migration, test suite, deployment config, CI workflow, root `AGENTS.md`, or `.ai-bridge` context existed.

`codexpro/` is a separate local MCP/workspace tooling project. It is ignored by the root `.gitignore` and is not part of Ozzyl Guard product code.

## 2. Git status

Initial audit result: the workspace was not a Git repository. Therefore no branch, remote, commit history, staged changes, or repository status existed for Ozzyl Guard.

Phase 0 action: initialize a new Git repository with `main` as the initial branch after documentation installation.

## 3. Package manager and technology stack

Initial Ozzyl Guard stack: none.

Relevant source repository (`rahmatullahboss/multi-store-saas`) uses:

- npm workspaces
- Turborepo
- Node.js 20+
- TypeScript
- React Router/React
- Drizzle ORM
- Cloudflare Workers/D1
- Vitest and Playwright

Validated adaptation:

- Reuse npm/Turborepo/TypeScript/testing conventions.
- Use PostgreSQL rather than copying D1/SQLite production schema.
- Keep deployment provider decisions separate from domain architecture.

## 4. Database and migrations

Initial workspace: none.

Documentation proposes PostgreSQL and canonical tables for identity/tenancy, API keys/usage, courier credentials/sessions/observations/jobs, assessments/signals/policies/outcomes, verification, and reputation.

Source SaaS migration `0014_fdaas_api_keys.sql` is conceptually reusable but insufficient because it is SQLite/D1, owner-email-centric, missing organizations/stores/scopes/environments/expiry, and cannot guarantee the required entitlement model by itself.

## 5. Environment configuration

Initial workspace: no `.env.example`, validation, secret inventory, or local service instructions.

Phase 0 creates an environment guide and example variables without real credentials.

## 6. Deployment configuration

Initial workspace: none.

The SaaS source has Cloudflare-specific deployment. Ozzyl Guard may use Cloudflare for selected edge/worker components, but the API/database/queue deployment must be selected by ADR after operational requirements are confirmed.

## 7. Agent instructions

Initial root: no `AGENTS.md` and no `.ai-bridge` context.

Phase 0 installs strict root instructions and planning/status/decision records.

## 8. Documentation package vs current codebase

Because product code was absent, there is no implementation conflict to overwrite. The conflict is between a mature target design and an empty repository.

Documented assumptions requiring validation before implementation:

- Deployment provider and queue technology are not selected.
- Managed authentication versus in-house Argon2id sessions is not selected.
- PostgreSQL hosting/vendor is not selected.
- Encryption/KMS provider is not selected.
- Steadfast internal endpoint stability/authorization terms require operational review.
- Cross-merchant reputation is post-MVP and requires privacy/legal safeguards.

## 9. Source repository findings

### Reusable concepts

- Playwright login/cookie extraction sequence
- Steadfast internal fraud endpoint request shape
- Provider status mappings
- Bangladesh phone normalization
- Key hash/display-prefix and usage event concepts
- WooCommerce settings/order hook/admin UI skeleton
- npm/Turborepo/TypeScript/Vitest/Playwright conventions

### Rewrite-required code

- Fraud engine and provider-fetch integration
- Guard authentication and dashboard session model
- Public fraud API contract and quota enforcement
- API key lifecycle/storage
- WooCommerce API integration and risk-level/signal parsing
- Steadfast sync storage/orchestration and workflow failure behavior
- Blacklist/reputation subsystem

## 10. Security-critical findings in source SaaS

1. Raw API key stored in metadata and used as a login cookie.
2. Password hashing uses custom salted SHA-256 instead of Argon2id/managed auth.
3. API key prefixes are inconsistent (`og_live_`, `ozg_`, target `ozg_live_`/`ozg_test_`).
4. Quota check and increment are not one atomic reservation transaction.
5. `storeId = 0` cross-store assessment path weakens tenant isolation.
6. Unknown customer history is represented as 100% success/zero risk.
7. Risk engine directly calls an unofficial third-party service.
8. Blacklist add/remove functions are logging stubs and expose full phone numbers.
9. Steadfast sync uses hardcoded KV namespace and shell commands carrying session JSON.
10. Credential decryption failure falls back to attempting plaintext.
11. Workflow and per-store failures can be silently treated as success.
12. WooCommerce contract uses uppercase levels and `signals[].type`, while the API returns lowercase levels and `signals[].name`; it can misclassify results.

## 11. Final proposed structure

```text
apps/{api,dashboard,admin}
workers/{courier-session-worker,courier-sync-worker,verification-worker,event-worker}
packages/{risk-engine,courier-adapters,database,authentication,billing,verification,shared-types,sdk}
integrations/{woocommerce,shopify,custom-js,multi-store-saas}
docs/{architecture,api,database,courier,risk-engine,integrations,security,testing,operations,roadmap,adr}
.ai-bridge/{current-plan.md,implementation-status.md,decisions.md}
```

## 12. First implementation milestone

Foundation slice 1:

- Root npm/Turborepo/TypeScript/test/lint scaffold
- Canonical shared API/error/event types
- PostgreSQL + Drizzle database package skeleton
- Organizations, stores, memberships, secure user sessions, API keys, plans/entitlements, and usage-event migration design
- Contract and tenant-isolation tests before endpoint implementation

## 13. First files to change after Phase 0

- `package.json`
- `turbo.json`
- `tsconfig.base.json`
- `.env.example`
- `packages/shared-types/package.json`
- `packages/shared-types/src/risk-assessment.ts`
- `packages/database/package.json`
- `packages/database/src/schema/*`
- `packages/database/src/migrations/*`
- `packages/authentication/*`
- `.github/workflows/ci.yml`
