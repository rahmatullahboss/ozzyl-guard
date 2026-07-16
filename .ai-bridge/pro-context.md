# Ozzyl Guard Full Project Continuation Context

Generated: 2026-07-16T12:51:43.159Z
Workspace: /Users/rahmatullahzisan/Desktop/Dev/Ozzyl Guard
Workspace ID: ws_dfece19fe5040cc4a5675d02
Write mode: workspace
Bash mode: full
Tool mode: full

Purpose: paste this bundle into a high-context ChatGPT model when that model cannot call the CodexPro MCP tools directly.
Instruction for ChatGPT: use this as repository context, produce a narrow Codex execution plan, and avoid inventing files or runtime facts not shown here.

## Repository Tree

.
├── apps/
│ ├── admin/
│ │ ├── src/
│ │ │ ├── main.tsx
│ │ │ └── styles.css
│ │ ├── index.html
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ └── vite.config.ts
│ ├── api/
│ │ ├── src/
│ │ │ ├── bootstrap.ts
│ │ │ ├── index.test.ts
│ │ │ ├── index.ts
│ │ │ ├── postgres.ts
│ │ │ └── server.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ └── dashboard/
│ ├── src/
│ │ ├── App.tsx
│ │ ├── main.tsx
│ │ └── styles.css
│ ├── index.html
│ ├── package.json
│ ├── tsconfig.json
│ └── vite.config.ts
├── codexpro/
│ ├── docs/
│ │ ├── images/
│ │ │ ├── chatgpt-plugin-details.png
│ │ │ └── chatgpt-plugins-add.png
│ │ ├── superpowers/
│ │ │ ├── plans/
│ │ │ └── specs/
│ │ ├── favicon.svg
│ │ ├── index.html
│ │ ├── og.svg
│ │ ├── script.js
│ │ ├── star.svg
│ │ ├── styles.css
│ │ └── zh.html
│ ├── scripts/
│ │ ├── analysis-cli-smoke.mjs
│ │ ├── analysis-smoke.mjs
│ │ ├── codexpro.mjs
│ │ ├── doctor-smoke.mjs
│ │ ├── execute-handoff-smoke.mjs
│ │ ├── http-smoke.mjs
│ │ ├── pro-apply.mjs
│ │ ├── pro-bundle.mjs
│ │ ├── pro-smoke.mjs
│ │ ├── release-guard-smoke.mjs
│ │ ├── release-guard.mjs
│ │ ├── release-pack.mjs
│ │ ├── release-publish.mjs
│ │ ├── settings-smoke.mjs
│ │ ├── smoke.mjs
│ │ ├── stress.mjs
│ │ └── widget-smoke.mjs
│ ├── src/
│ │ ├── analysis/
│ │ │ ├── cache.ts
│ │ │ ├── classify.ts
│ │ │ ├── extract.ts
│ │ │ ├── graph.ts
│ │ │ ├── impact.ts
│ │ │ ├── index.ts
│ │ │ ├── inventory.ts
│ │ │ ├── providers.ts
│ │ │ ├── rank.ts
│ │ │ └── types.ts
│ │ ├── bashOps.ts
│ │ ├── capabilitiesOps.ts
│ │ ├── codexSessions.ts
│ │ ├── config.ts
│ │ ├── fsOps.ts
│ │ ├── gitOps.ts
│ │ ├── guard.ts
│ │ ├── http.ts
│ │ ├── proContext.ts
│ │ ├── profileStore.ts
│ │ ├── redact.ts
│ │ ├── searchOps.ts
│ │ ├── server.ts
│ │ ├── stdio.ts
│ │ ├── toolCardWidget.ts
│ │ └── workspaceOps.ts
│ ├── AGENTS.example.md
│ ├── CHANGELOG.md
│ ├── CHATGPT_PROMPT.md
│ ├── CODEX_PROMPT.md
│ ├── config.example.env
│ ├── CONTRIBUTING.md
│ ├── design.md
│ ├── DOMAIN_SETUP.md
│ ├── FAQ_ZH.md
│ ├── FAQ.md
│ ├── LICENSE
│ ├── package-lock.json
│ ├── package.json
│ ├── PUBLIC_LAUNCH_CHECKLIST.md
│ ├── README_ZH.md
│ ├── README.md
│ ├── SECURITY.md
│ └── tsconfig.json
├── config/
│ └── environment.example
├── docs/
│ ├── adr/
│ │ ├── 0001-standalone-service.md
│ │ ├── 0002-courier-adapter-boundary.md
│ │ ├── 0003-keep-steadfast-session-scraper.md
│ │ ├── 0004-foundation-technology-direction.md
│ │ ├── README.md
│ │ └── template.md
│ ├── api/
│ │ └── api-specification.md
│ ├── architecture/
│ │ ├── copy-map-from-multi-store-saas.md
│ │ ├── project-overview.md
│ │ ├── repository-audit.md
│ │ └── system-architecture.md
│ ├── courier/
│ │ └── courier-intelligence.md
│ ├── database/
│ │ └── database-design.md
│ ├── integrations/
│ │ └── integrations.md
│ ├── operations/
│ │ ├── deployment.md
│ │ ├── development-environment.md
│ │ └── operations-observability.md
│ ├── risk-engine/
│ │ └── risk-engine.md
│ ├── roadmap/
│ │ ├── implementation-roadmap.md
│ │ ├── initial-backlog.md
│ │ └── risk-register.md
│ ├── security/
│ │ └── security-privacy.md
│ ├── testing/
│ │ └── testing-strategy.md
│ └── README.md
├── integrations/
│ ├── custom-js/
│ │ ├── src/
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── multi-store-saas/
│ │ ├── src/
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── shopify/
│ │ ├── src/
│ │ │ ├── index.test.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ └── woocommerce/
│ └── ozzyl-guard.php
├── packages/
│ ├── authentication/
│ │ ├── src/
│ │ │ ├── index.test.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── billing/
│ │ ├── src/
│ │ │ ├── index.test.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── courier-adapters/
│ │ ├── src/
│ │ │ ├── index.test.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── database/
│ │ ├── migrations/
│ │ │ ├── 0001_foundation.sql
│ │ │ ├── 0002_courier.sql
│ │ │ ├── 0003_risk.sql
│ │ │ ├── 0004_verification_events.sql
│ │ │ └── 0005_durable_operations.sql
│ │ ├── src/
│ │ │ ├── check-migrations.ts
│ │ │ ├── index.ts
│ │ │ ├── migrate.ts
│ │ │ └── schema.ts
│ │ ├── drizzle.config.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── risk-engine/
│ │ ├── src/
│ │ │ ├── index.test.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── sdk/
│ │ ├── src/
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── shared-types/
│ │ ├── src/
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ └── verification/
│ ├── src/
│ │ ├── index.test.ts
│ │ └── index.ts
│ ├── package.json
│ └── tsconfig.json
├── scripts/
│ └── check-architecture.mjs
├── workers/
│ ├── courier-session-worker/
│ │ ├── src/
│ │ │ ├── index.test.ts
│ │ │ ├── index.ts
│ │ │ └── runner.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── courier-sync-worker/
│ │ ├── src/
│ │ │ ├── index.test.ts
│ │ │ ├── index.ts
│ │ │ └── runner.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ ├── event-worker/
│ │ ├── src/
│ │ │ ├── index.test.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ └── verification-worker/
│ ├── src/
│ │ └── index.ts
│ ├── package.json
│ └── tsconfig.json
├── AGENTS.md
├── docker-compose.yml
├── Dockerfile
├── Dockerfile.playwright
├── eslint.config.js
├── package-lock.json
├── package.json
├── README.md
├── tracker.yml
├── tsconfig.base.json
├── turbo.json
└── vitest.config.ts

## Git Status

```text
## No commits yet on main
?? .ai-bridge/
?? .dockerignore
?? .github/
?? .gitignore
?? .prettierignore
?? .prettierrc.json
?? AGENTS.md
?? Dockerfile
?? Dockerfile.playwright
?? README.md
?? apps/
?? config/
?? docker-compose.yml
?? docs/
?? eslint.config.js
?? integrations/
?? package-lock.json
?? package.json
?? packages/
?? scripts/
?? tracker.yml
?? tsconfig.base.json
?? turbo.json
?? vitest.config.ts
?? workers/
```

## Recent Commits

```text
fatal: your current branch 'main' does not have any commits yet
```

## Existing AI Bridge Context

--- .ai-bridge/current-plan.md ---
1 | # Ozzyl Guard — Current Implementation Plan
2 |
3 | Updated: 2026-07-16
4 |
5 | ## Current state
6 |
7 | A runnable standalone MVP foundation is implemented. Phase 0 is complete, Phases 1–4 have a coherent baseline, Phase 5 has a secure provider abstraction, and Phase 6 has merchant/admin UI foundations.
8 |
9 | ## Completed
10 |
11 | - [x] Repository, private GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
12 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
13 | - [x] Canonical shared API/error/event contracts
14 | - [x] PostgreSQL/Drizzle schema and five append-only migrations
15 | - [x] Users, organizations, stores, memberships, plans, audit events, and hash-only API keys
16 | - [x] Argon2 password utilities and opaque session-token primitives
17 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
18 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
19 | - [x] Courier adapter contract and Steadfast normalized adapter
20 | - [x] Playwright Steadfast session driver with structured errors
21 | - [x] AES-GCM credential/session envelope boundary for local/self-hosted use
22 | - [x] Runnable PostgreSQL courier session and observation workers
23 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
24 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
25 | - [x] OTP hashing, expiry, rate/attempt limits, and tenant binding
26 | - [x] Signed webhook delivery library with replay timestamp and SSRF controls
27 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
28 | - [x] Merchant dashboard and platform-admin UI foundations
29 | - [x] Docker/API/Playwright worker separation and PostgreSQL CI service
30 | - [x] Architecture dependency-boundary CI guard
31 |
32 | ## Verified on this workspace
33 |
34 | - Formatting check: passed
35 | - ESLint with zero warnings: passed
36 | - Five migration files ordered/non-empty/non-destructive: passed
37 | - Architecture import boundaries: passed
38 | - Typecheck: 18 of 18 workspaces passed
39 | - Test/build dependency tasks: 26 of 26 passed
40 | - Production builds: 18 of 18 workspaces passed
41 | - WooCommerce PHP syntax: passed
42 | - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
43 | - Canonical documentation links: 33 Markdown files checked, zero broken internal links
44 | - `tracker.yml` YAML parse: passed
45 | - Continuation bundle: refreshed and formatted
46 | - Prohibited source-pattern search: no matches
47 |
48 | A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. The CI workflow runs migrations against PostgreSQL 16.
49 |
50 | ## Next production milestone
51 |
52 | 1. Select production hosting, PostgreSQL provider, KMS/vault, queue/cache, and observability through ADRs.
53 | 2. Replace local encryption-key handling with managed KMS envelope encryption.
54 | 3. Connect dashboard/admin to authenticated backend endpoints and real data.
55 | 4. Add PostgreSQL integration tests for migrations, quota concurrency, repositories, and tenant isolation.
56 | 5. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
57 | 6. Select and implement the OTP provider runner.
58 | 7. Add durable webhook outbox/event runner and verification queue runner.
59 | 8. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
60 | 9. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
61 |
62 | ## External blockers
63 |
64 | - Authorized Steadfast merchant/test credentials
65 | - Steadfast provider-terms and merchant-authorization review
66 | - Production KMS/vault choice and keys
67 | - OTP provider account and credentials
68 | - Hosting/database/queue/cache/observability selections
69 | - Pilot outcome data for false-positive/false-negative calibration
70 |
71 | ## Non-negotiable continuation rules
72 |
73 | - Do not add a second risk engine.
74 | - Do not call providers from the risk engine or synchronous checkout path.
75 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, or provider credentials.
76 | - Do not use API keys as dashboard user sessions.
77 | - Require organization/store scope in all merchant repositories and jobs.
78 | - Add new migrations; never edit applied migrations.
79 | - Keep unknown/provider failure explicit and policy-controlled.
80 | - Update `tracker.yml`, documentation, implementation status, and the continuation bundle with every material milestone.
81 |

--- .ai-bridge/agent-status.md ---
1 | # Agent Status
2 |
3 | No implementation agent status written yet.
4 |

--- .ai-bridge/implementation-diff.patch ---
1 |

--- .ai-bridge/codex-status.md ---
1 | # Codex Status
2 |
3 | No Codex status written yet.
4 |

--- .ai-bridge/decisions.md ---
1 | # Ozzyl Guard — Active Decisions
2 |
3 | Updated: 2026-07-16
4 |
5 | ## Accepted decisions
6 |
7 | 1. Ozzyl Guard is a standalone SaaS/service. `multi-store-saas` becomes a client, not the canonical implementation host.
8 | 2. There is one canonical, pure, versioned risk engine.
9 | 3. The risk engine performs no network, database, queue, browser, filesystem, credential-store, or provider calls.
10 | 4. Courier access is isolated behind provider adapters and asynchronous session/sync workers.
11 | 5. The existing Steadfast Playwright session approach remains for the pilot, with security and reliability hardening.
12 | 6. Foundation stack: Node.js 20+, TypeScript, npm workspaces, Turborepo, PostgreSQL, Drizzle, Vitest, and Playwright.
13 | 7. Public API begins at `/v1`; the canonical assessment endpoint is `POST /v1/risk-assessments`.
14 | 8. API key environments use `ozg_test_` and `ozg_live_`. Raw keys are displayed once and stored only as hashes.
15 | 9. Dashboard user sessions are independent from API keys.
16 | 10. Merchant data uses strict organization/store isolation; no `storeId = 0` or optional-scope shortcut.
17 | 11. Unknown/no-data customers return explicit unknown/low-confidence state and normally recommend verification; they are not automatically safe.
18 | 12. Provider failure does not automatically allow or block. It produces explicit degraded/freshness metadata and policy-controlled behavior.
19 | 13. Outcome feedback is part of the first MVP.
20 | 14. WooCommerce, Shopify, custom, and native integrations use the same canonical request/response contract.
21 | 15. Applied migrations are immutable and changes require new migrations.
22 | 16. `fraudchecker.link` may exist only as an optional, identified fallback adapter; it is never the core source or an engine dependency.
23 |
24 | ## Source SaaS conflict resolutions
25 |
26 | | Conflict | Decision |
27 | | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
28 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly |
29 | | Generic `ozg_` and `og_live_` source key formats | Standardize on `ozg_test_` and `ozg_live_` |
30 | | Raw API key stored in metadata and login cookie | Prohibited; dedicated secure user sessions and hash-only API keys |
31 | | Custom SHA-256 password hashing | Prohibited; use Argon2id or managed authentication |
32 | | Risk engine performs external fetches | Prohibited; feature assembly/adapters perform I/O before pure scoring |
33 | | No history represented as 100% success/zero risk | Replace with unknown risk and low confidence |
34 | | Blacklist logging stubs | Do not copy; later evidence-backed reputation subsystem |
35 | | Hardcoded KV namespace and shell-based session writes | Replace with typed encrypted storage service/configuration |
36 | | Decryption error falls back to plaintext | Fail closed and record a structured reconnect/configuration failure |
37 | | Workflow/per-store errors silently succeed | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling |
38 | | WooCommerce uppercase levels and `signals[].type` | Use lowercase canonical enums and `signals[].code` |
39 | | Cross-store system store lookup | Replace with explicit authorized datasets and strict tenant boundaries |
40 |
41 | ## Approved reuse scope
42 |
43 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
44 | - Bangladesh phone normalization after tests
45 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
46 | - WooCommerce settings/order hook/admin display skeleton
47 | - API-key hash/display-prefix and usage-event concepts
48 |
49 | No product source code was copied during Phase 0.
50 |
51 | ## Pending decisions
52 |
53 | These require separate ADRs before production implementation:
54 |
55 | - Managed authentication versus in-house Argon2id/session implementation
56 | - Queue/broker technology
57 | - API/dashboard/worker deployment platform
58 | - PostgreSQL hosting provider
59 | - KMS/vault and envelope-encryption implementation
60 | - Cache/session storage
61 | - Worker scheduler/runtime
62 | - OTP provider
63 |
64 | ## External requirements
65 |
66 | No credentials are needed for Phase 1 foundation.
67 |
68 | Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
69 |

--- .ai-bridge/open-questions.md ---
1 | # Open Questions
2 |

--- .ai-bridge/execution-log.jsonl ---
1 |

## Selected Files

Changed files detected: .ai-bridge/, .dockerignore, .github/, .gitignore, .prettierignore, .prettierrc.json, AGENTS.md, Dockerfile, Dockerfile.playwright, README.md, apps/, config/, docker-compose.yml, docs/, eslint.config.js, integrations/, package-lock.json, package.json, packages/, scripts/, tracker.yml, tsconfig.base.json, turbo.json, vitest.config.ts, workers/
Auto-include important root files: yes
Auto-include changed files: no
Explicit selected paths: tracker.yml, README.md, AGENTS.md, docs/README.md, package.json, .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, .ai-bridge/decisions.md, docs/architecture/system-architecture.md, docs/database/database-design.md, docs/api/api-specification.md, docs/courier/courier-intelligence.md, docs/risk-engine/risk-engine.md, docs/security/security-privacy.md, docs/integrations/integrations.md, docs/testing/testing-strategy.md, docs/operations/development-environment.md, docs/operations/deployment.md, docs/roadmap/implementation-roadmap.md, docs/roadmap/initial-backlog.md, docs/roadmap/risk-register.md
Extra globs: docs/adr/_.md, packages/database/migrations/_.sql
Files included below: AGENTS.md, docs/README.md, package.json, README.md, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, docs/api/api-specification.md, docs/architecture/system-architecture.md, docs/courier/courier-intelligence.md, docs/database/database-design.md, docs/integrations/integrations.md, docs/operations/deployment.md, docs/operations/development-environment.md, docs/risk-engine/risk-engine.md, docs/roadmap/implementation-roadmap.md, docs/roadmap/initial-backlog.md, docs/roadmap/risk-register.md, docs/security/security-privacy.md, docs/testing/testing-strategy.md, tracker.yml, docs/adr/README.md, eslint.config.js, turbo.json, docs/adr/0001-standalone-service.md, docs/adr/0002-courier-adapter-boundary.md, docs/adr/0003-keep-steadfast-session-scraper.md, docs/adr/0004-foundation-technology-direction.md, docs/adr/template.md, packages/database/migrations/0001_foundation.sql, packages/database/migrations/0002_courier.sql, packages/database/migrations/0003_risk.sql, packages/database/migrations/0004_verification_events.sql, packages/database/migrations/0005_durable_operations.sql

## File Contents

### AGENTS.md

Bytes: 4674
SHA-256: 3aee61e09717ce9f5dba2363b9d7a00f99bbaa8cf8ca37aadc693401389e1fb2
Lines: 1-92 of 92

```markdown
1 | # AGENTS.md — Ozzyl Guard Development Rules
2 |
3 | ## Purpose
4 |
5 | This repository is edited by multiple developers and AI agents. Follow these rules to prevent duplicated modules, inconsistent schemas, insecure shortcuts, and conflicting business logic.
6 |
7 | ## Required reading before changes
8 |
9 | 1. `tracker.yml`
10 | 2. `README.md`
11 | 3. `docs/README.md` and the relevant domain documents under `docs/`
12 | 4. `.ai-bridge/current-plan.md`
13 | 5. `.ai-bridge/implementation-status.md`
14 | 6. `.ai-bridge/decisions.md`
15 | 7. `.ai-bridge/pro-context.md` when starting from a new chat or without prior repository context
16 | 8. Accepted ADRs under `docs/adr/`
17 |
18 | ## Non-negotiable rules
19 |
20 | 1. There must be exactly one canonical risk engine package.
21 | 2. Courier providers must be implemented behind the `CourierAdapter` boundary.
22 | 3. API handlers must not contain business scoring logic.
23 | 4. Applied migrations must never be edited. Add a new migration.
24 | 5. Every table and column must be defined in the canonical database package.
25 | 6. Search for an existing utility, type, route, table, and service before creating one.
26 | 7. Raw API keys must never be stored after creation.
27 | 8. Do not log OTPs, passwords, session cookies, access tokens, raw API keys, or raw courier payloads.
28 | 9. Every merchant-scoped repository method must require organization/store scope.
29 | 10. Unknown customer data must not be converted to a safe result.
30 | 11. Provider failure must not be converted to an automatic block.
31 | 12. Every new endpoint requires validation, authentication, authorization, rate limiting, auditability, and tests.
32 | 13. Long-running work belongs in queues/workers, not synchronous checkout requests.
33 | 14. Documentation and code must be updated together.
34 |
35 | ## Required workflow
36 |
37 | 1. Read the required context.
38 | 2. Inspect current repository state and search existing symbols/schema.
39 | 3. Compare the proposed change with accepted contracts and ADRs.
40 | 4. Create or update an ADR for architectural changes.
41 | 5. Implement the smallest coherent change.
42 | 6. Add tests for happy paths, failures, security boundaries, and tenant isolation.
43 | 7. Run typecheck, lint, unit tests, integration tests, and relevant security checks.
44 | 8. Update `tracker.yml`, `.ai-bridge/implementation-status.md`, and relevant documentation.
45 | 9. Refresh `.ai-bridge/pro-context.md` after major milestones or documentation-map changes.
46 | 10. Report changed files, migrations, tests, remaining risks, rollback, and next milestone.
47 |
48 | ## Package ownership
49 |
50 | - `packages/risk-engine`: pure scoring, confidence, signals, and decisions only.
51 | - `packages/courier-adapters`: provider clients, response normalization, provider error taxonomy.
52 | - `packages/database`: schema, migrations, repositories, and transaction boundaries.
53 | - `packages/authentication`: users, sessions, API keys, permissions, password hashing.
54 | - `packages/verification`: OTP/IVR abstractions and verification sessions.
55 | - `packages/billing`: plans, entitlements, metering, quotas, subscriptions.
56 | - `packages/shared-types`: canonical request/response and event contracts.
57 | - `packages/sdk`: supported client SDKs and webhook verification helpers.
58 | - `apps/api`: public and internal HTTP interfaces.
59 | - `apps/dashboard`: merchant UI.
60 | - `apps/admin`: internal operations UI.
61 | - `workers/*`: asynchronous jobs, provider automation, event delivery.
62 | - `integrations/*`: WooCommerce, Shopify, custom JS, and native clients.
63 |
64 | ## Migration rules
65 |
66 | - Migrations are append-only after application.
67 | - Every migration must have forward verification and rollback notes.
68 | - Runtime schema and migration schema must be reviewed together.
69 | - Tenant-scoped uniqueness must include the correct organization/store boundary.
70 | - Usage/quota changes must be atomic under concurrency.
71 |
72 | ## Security review checklist
73 |
74 | - No secret appears in logs, errors, screenshots, metadata, cookies, or analytics.
75 | - Passwords use Argon2id or an approved managed identity provider.
76 | - API keys use `ozg_test_` or `ozg_live_`, are displayed once, and stored as hashes only.
77 | - User login sessions are independent from API keys.
78 | - Courier credentials and sessions use versioned envelope encryption.
79 | - Webhooks are signed, timestamped, replay-protected, and retried.
80 | - Optional URLs are protected against SSRF.
81 | - Tenant scope cannot be omitted by callers.
82 |
83 | ## Definition of done
84 |
85 | - Acceptance criteria pass.
86 | - Tests cover important failures and isolation boundaries.
87 | - No schema, API contract, or scoring duplication was introduced.
88 | - Sensitive data is redacted.
89 | - Documentation, `tracker.yml`, and implementation status are updated.
90 | - `.ai-bridge/pro-context.md` is refreshed when the continuation context materially changes.
91 | - Migration and rollback effects are understood.
92 |
```

### docs/README.md

Bytes: 2132
SHA-256: c0f974c6ec9c76e255e0e927937a1ab79abb8b9b00d1375f280b560fe35fb298
Lines: 1-46 of 46

```markdown
1 | # Ozzyl Guard Documentation Index
2 |
3 | This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.
4 |
5 | ## Architecture
6 |
7 | - [Project overview](architecture/project-overview.md)
8 | - [System architecture](architecture/system-architecture.md)
9 | - [Initial repository audit](architecture/repository-audit.md)
10 | - [Reuse map from multi-store-saas](architecture/copy-map-from-multi-store-saas.md)
11 |
12 | ## Product contracts
13 |
14 | - [Public API specification](api/api-specification.md)
15 | - [Database design](database/database-design.md)
16 | - [Courier intelligence](courier/courier-intelligence.md)
17 | - [Canonical risk engine](risk-engine/risk-engine.md)
18 | - [Integrations](integrations/integrations.md)
19 |
20 | ## Security, quality, and operations
21 |
22 | - [Security and privacy](security/security-privacy.md)
23 | - [Testing strategy](testing/testing-strategy.md)
24 | - [Operations and observability](operations/operations-observability.md)
25 | - [Development environment](operations/development-environment.md)
26 | - [Deployment](operations/deployment.md)
27 |
28 | ## Delivery and continuation
29 |
30 | - [Implementation roadmap](roadmap/implementation-roadmap.md)
31 | - [Initial backlog](roadmap/initial-backlog.md)
32 | - [Risk register](roadmap/risk-register.md)
33 | - [Architecture decision records](adr/README.md)
34 | - [Current plan](../.ai-bridge/current-plan.md)
35 | - [Implementation status](../.ai-bridge/implementation-status.md)
36 | - [Decision log](../.ai-bridge/decisions.md)
37 | - [Full continuation context](../.ai-bridge/pro-context.md)
38 |
39 | ## Documentation rules
40 |
41 | - Change code and its contract documentation together.
42 | - Add a new ADR when changing a system boundary, infrastructure choice, data model strategy, or security model.
43 | - Never remove historical ADRs or edit already-applied migrations to make a new change appear older.
44 | - Update `../tracker.yml` and `../.ai-bridge/implementation-status.md` after every material milestone.
45 | - Keep remaining risks, external dependencies, rollback considerations, and verification evidence explicit.
46 |
```

### package.json

Bytes: 1503
SHA-256: 38cd7b0e952289548c41ec4a32ef9689aa015c66507bacb38c1ee403639f2276
Lines: 1-49 of 49

```json
 1 | {
 2 |   "name": "ozzyl-guard",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "packageManager": "npm@10.9.7",
 7 |   "workspaces": [
 8 |     "apps/*",
 9 |     "packages/*",
10 |     "workers/*",
11 |     "integrations/*"
12 |   ],
13 |   "engines": {
14 |     "node": ">=20.0.0",
15 |     "npm": ">=10.0.0"
16 |   },
17 |   "scripts": {
18 |     "dev": "turbo run dev --parallel",
19 |     "dev:api": "npm run dev -w @ozzyl/api",
20 |     "dev:dashboard": "npm run dev -w @ozzyl/dashboard",
21 |     "build": "turbo run build",
22 |     "typecheck": "turbo run typecheck",
23 |     "lint": "eslint . --max-warnings=0",
24 |     "format": "prettier --write .",
25 |     "format:check": "prettier --check .",
26 |     "test": "turbo run test",
27 |     "test:coverage": "vitest run --coverage",
28 |     "db:generate": "drizzle-kit generate --config packages/database/drizzle.config.ts",
29 |     "db:migrate": "tsx packages/database/src/migrate.ts",
30 |     "db:check": "tsx packages/database/src/check-migrations.ts",
31 |     "check:architecture": "node scripts/check-architecture.mjs",
32 |     "verify": "npm run format:check && npm run lint && npm run db:check && npm run check:architecture && npm run typecheck && npm run test && npm run build"
33 |   },
34 |   "devDependencies": {
35 |     "@eslint/js": "^9.39.2",
36 |     "@types/node": "^24.0.0",
37 |     "@vitest/coverage-v8": "^4.0.18",
38 |     "drizzle-kit": "^0.31.4",
39 |     "eslint": "^9.39.2",
40 |     "prettier": "^3.6.2",
41 |     "tsup": "^8.5.0",
42 |     "tsx": "^4.20.6",
43 |     "turbo": "^2.8.13",
44 |     "typescript": "^5.8.3",
45 |     "typescript-eslint": "^8.53.0",
46 |     "vitest": "^4.0.18"
47 |   }
48 | }
49 |
```

### README.md

Bytes: 6440
SHA-256: 19ff8ad2b7a742df44fae72abe7b1e1f5281ac98a02c287f37fb8d78e15c1057
Lines: 1-193 of 193

````markdown
1 | # Ozzyl Guard
2 |
3 | Ozzyl Guard is a standalone, Bangladesh-focused COD fraud detection, courier intelligence, and order verification SaaS platform.
4 |
5 | WooCommerce, Shopify, custom commerce applications, and Ozzyl Commerce / `multi-store-saas` use one versioned API and one canonical pure risk engine.
6 |
7 | ## Continue in a new chat or agent session
8 |
9 | Start with [`tracker.yml`](tracker.yml). It contains the current milestone, source-of-truth document map, architecture invariants, verification evidence, remaining external dependencies, and ordered next tasks.
10 |
11 | Then read:
12 |
13 | 1. [`AGENTS.md`](AGENTS.md)
14 | 2. [`docs/README.md`](docs/README.md)
15 | 3. [Current plan](.ai-bridge/current-plan.md)
16 | 4. [Implementation status](.ai-bridge/implementation-status.md)
17 | 5. [Decision log](.ai-bridge/decisions.md)
18 | 6. [Full continuation context](.ai-bridge/pro-context.md)
19 |
20 | The full context bundle includes the important specifications, accepted ADRs, migration inventory, repository tree, and handoff state so a new agent does not need the previous chat history.
21 |
22 | ## Implementation status
23 |
24 | The repository now contains a runnable MVP foundation:
25 |
26 | - TypeScript npm/Turborepo monorepo
27 | - PostgreSQL schema and five append-only migrations
28 | - Argon2id user-password utilities and opaque user sessions
29 | - Hash-only `ozg_test_` / `ozg_live_` API-key lifecycle utilities
30 | - Organizations, stores, memberships, plans, usage events, audit events, and tenant scope
31 | - Canonical `/v1/risk-assessments`, assessment read, outcome feedback, courier refresh, and OTP routes
32 | - Deterministic explainable risk engine with explicit unknown/degraded handling
33 | - Steadfast adapter, Playwright session driver, encrypted session storage, and runnable courier workers
34 | - OTP provider abstraction with hashing, expiry, attempt limits, rate limits, and tenant binding
35 | - Signed webhook delivery worker library with retry and SSRF protection
36 | - Merchant dashboard and platform operations admin applications
37 | - WooCommerce plugin, Shopify adapter, custom JavaScript/server adapter, and native multi-store adapter
38 | - Docker, Docker Compose, and CI verification
39 |
40 | The following require external accounts or production decisions before live use:
41 |
42 | - Authorized Steadfast merchant/test credentials and provider-terms review
43 | - Production KMS/vault instead of the local AES-GCM key implementation
44 | - OTP provider selection and credentials
45 | - Final dashboard authentication/backend endpoints and live data wiring
46 | - Production queue/cache/observability providers
47 | - Pilot outcome calibration before broad automatic blocking
48 |
49 | See [implementation status](.ai-bridge/implementation-status.md) and [risk register](docs/roadmap/risk-register.md).
50 |
51 | ## Repository structure
52 |
53 | `text
 54 | apps/
 55 |   api/             Versioned API and PostgreSQL repositories
 56 |   dashboard/       Merchant operations dashboard
 57 |   admin/           Platform operations dashboard
 58 | workers/
 59 |   courier-session-worker/
 60 |   courier-sync-worker/
 61 |   verification-worker/
 62 |   event-worker/
 63 | packages/
 64 |   shared-types/
 65 |   risk-engine/
 66 |   courier-adapters/
 67 |   database/
 68 |   authentication/
 69 |   billing/
 70 |   verification/
 71 |   sdk/
 72 | integrations/
 73 |   woocommerce/
 74 |   shopify/
 75 |   custom-js/
 76 |   multi-store-saas/
 77 | docs/
 78 | .ai-bridge/
 79 | `
80 |
81 | ## Core rules
82 |
83 | 1. There is exactly one canonical risk engine.
84 | 2. The risk engine performs no network, database, scraping, queue, or provider calls.
85 | 3. Courier providers are isolated behind adapters and asynchronous workers.
86 | 4. Merchant data is always organization/store scoped.
87 | 5. Unknown customers are not automatically safe.
88 | 6. Provider failure does not automatically approve or block a customer.
89 | 7. Every assessment returns explainable signals and confidence.
90 | 8. Raw passwords, courier credentials, cookies, OTPs, sessions, and API keys are never logged.
91 | 9. Applied migrations are immutable; changes require a new migration.
92 | 10. Every integration consumes the same canonical API response.
93 |
94 | ## Local setup
95 |
96 | Prerequisites: Node.js 20+, npm 10+, PostgreSQL 16+, and Playwright browser dependencies when running the session worker.
97 |
98 | `bash
 99 | npm install
100 | npm run db:check
101 | npm run db:migrate
102 | npm run bootstrap -w @ozzyl/api
103 | npm run dev:api
104 | `
105 |
106 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
107 |
108 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
109 |
110 | Merchant dashboard:
111 |
112 | `bash
113 | npm run dev:dashboard
114 | `
115 |
116 | Platform admin:
117 |
118 | `bash
119 | npm run dev -w @ozzyl/admin
120 | `
121 |
122 | Courier workers:
123 |
124 | `bash
125 | npm run start -w @ozzyl/courier-session-worker
126 | npm run start -w @ozzyl/courier-sync-worker
127 | `
128 |
129 | ## Docker Compose
130 |
131 | Provide the required variables in your shell or an ignored Compose environment file, then run:
132 |
133 | `bash
134 | docker compose up --build
135 | `
136 |
137 | The Compose topology separates PostgreSQL, migrations, API, Playwright session worker, and courier sync worker. Dashboard/admin static hosting is intentionally deployment-platform dependent.
138 |
139 | ## Verification commands
140 |
141 | `bash
142 | npm run format:check
143 | npm run lint
144 | npm run db:check
145 | npm run typecheck
146 | npm run test
147 | npm run build
148 | npm audit --audit-level=high
149 | php -l integrations/woocommerce/ozzyl-guard.php
150 | `
151 |
152 | ## Canonical assessment response
153 |
154 | `json
155 | {
156 |   "success": true,
157 |   "assessment_id": "ras_123",
158 |   "risk_score": 72,
159 |   "risk_level": "high",
160 |   "decision": "verify",
161 |   "confidence": 0.82,
162 |   "signals": [
163 |     {
164 |       "code": "low_delivery_rate",
165 |       "score": 30,
166 |       "description": "Customer delivery rate is 28%"
167 |     }
168 |   ],
169 |   "courier_summary": {
170 |     "total": 12,
171 |     "delivered": 5,
172 |     "returned": 4,
173 |     "cancelled_before_shipping": 3
174 |   }
175 | }
176 | `
177 |
178 | ## Documentation
179 |
180 | - [System architecture](docs/architecture/system-architecture.md)
181 | - [Public API specification](docs/api/api-specification.md)
182 | - [Database design](docs/database/database-design.md)
183 | - [Courier intelligence](docs/courier/courier-intelligence.md)
184 | - [Risk engine](docs/risk-engine/risk-engine.md)
185 | - [Integrations](docs/integrations/integrations.md)
186 | - [Security and privacy](docs/security/security-privacy.md)
187 | - [Testing strategy](docs/testing/testing-strategy.md)
188 | - [Operations](docs/operations/operations-observability.md)
189 | - [Roadmap](docs/roadmap/implementation-roadmap.md)
190 | - [ADRs](docs/adr/README.md)
191 |
192 | Before changing code, read `AGENTS.md`, the relevant domain documents, `.ai-bridge/current-plan.md`, `.ai-bridge/implementation-status.md`, and accepted ADRs.
193 |
````

### .ai-bridge/current-plan.md

Bytes: 4482
SHA-256: f7ba2bcf033d63a2ffdcdfd485f3025b09a5275b67a91d47bf2955f3e9a6d562
Lines: 1-81 of 81

```markdown
1 | # Ozzyl Guard — Current Implementation Plan
2 |
3 | Updated: 2026-07-16
4 |
5 | ## Current state
6 |
7 | A runnable standalone MVP foundation is implemented. Phase 0 is complete, Phases 1–4 have a coherent baseline, Phase 5 has a secure provider abstraction, and Phase 6 has merchant/admin UI foundations.
8 |
9 | ## Completed
10 |
11 | - [x] Repository, private GitHub remote, documentation, ADR, status, risk register, tracker, and continuation bundle setup
12 | - [x] npm workspaces, Turborepo, TypeScript, formatting, linting, tests, and CI
13 | - [x] Canonical shared API/error/event contracts
14 | - [x] PostgreSQL/Drizzle schema and five append-only migrations
15 | - [x] Users, organizations, stores, memberships, plans, audit events, and hash-only API keys
16 | - [x] Argon2 password utilities and opaque session-token primitives
17 | - [x] Transaction-safe PostgreSQL usage reservation and durable idempotency
18 | - [x] Pure versioned risk engine with confidence, explainable signals, and unknown/degraded behavior
19 | - [x] Courier adapter contract and Steadfast normalized adapter
20 | - [x] Playwright Steadfast session driver with structured errors
21 | - [x] AES-GCM credential/session envelope boundary for local/self-hosted use
22 | - [x] Runnable PostgreSQL courier session and observation workers
23 | - [x] Versioned risk assessment, assessment-read, outcome, courier-refresh, and OTP routes
24 | - [x] PostgreSQL assessment/signal/outcome persistence and tenant-scoped reads
25 | - [x] OTP hashing, expiry, rate/attempt limits, and tenant binding
26 | - [x] Signed webhook delivery library with replay timestamp and SSRF controls
27 | - [x] WooCommerce, Shopify, custom-server, and multi-store adapters using one API contract
28 | - [x] Merchant dashboard and platform-admin UI foundations
29 | - [x] Docker/API/Playwright worker separation and PostgreSQL CI service
30 | - [x] Architecture dependency-boundary CI guard
31 |
32 | ## Verified on this workspace
33 |
34 | - Formatting check: passed
35 | - ESLint with zero warnings: passed
36 | - Five migration files ordered/non-empty/non-destructive: passed
37 | - Architecture import boundaries: passed
38 | - Typecheck: 18 of 18 workspaces passed
39 | - Test/build dependency tasks: 26 of 26 passed
40 | - Production builds: 18 of 18 workspaces passed
41 | - WooCommerce PHP syntax: passed
42 | - npm high/critical audit threshold: passed; four moderate development-tooling advisories remain
43 | - Canonical documentation links: 33 Markdown files checked, zero broken internal links
44 | - `tracker.yml` YAML parse: passed
45 | - Continuation bundle: refreshed and formatted
46 | - Prohibited source-pattern search: no matches
47 |
48 | A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. The CI workflow runs migrations against PostgreSQL 16.
49 |
50 | ## Next production milestone
51 |
52 | 1. Select production hosting, PostgreSQL provider, KMS/vault, queue/cache, and observability through ADRs.
53 | 2. Replace local encryption-key handling with managed KMS envelope encryption.
54 | 3. Connect dashboard/admin to authenticated backend endpoints and real data.
55 | 4. Add PostgreSQL integration tests for migrations, quota concurrency, repositories, and tenant isolation.
56 | 5. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
57 | 6. Select and implement the OTP provider runner.
58 | 7. Add durable webhook outbox/event runner and verification queue runner.
59 | 8. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
60 | 9. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
61 |
62 | ## External blockers
63 |
64 | - Authorized Steadfast merchant/test credentials
65 | - Steadfast provider-terms and merchant-authorization review
66 | - Production KMS/vault choice and keys
67 | - OTP provider account and credentials
68 | - Hosting/database/queue/cache/observability selections
69 | - Pilot outcome data for false-positive/false-negative calibration
70 |
71 | ## Non-negotiable continuation rules
72 |
73 | - Do not add a second risk engine.
74 | - Do not call providers from the risk engine or synchronous checkout path.
75 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, or provider credentials.
76 | - Do not use API keys as dashboard user sessions.
77 | - Require organization/store scope in all merchant repositories and jobs.
78 | - Add new migrations; never edit applied migrations.
79 | - Keep unknown/provider failure explicit and policy-controlled.
80 | - Update `tracker.yml`, documentation, implementation status, and the continuation bundle with every material milestone.
81 |
```

### .ai-bridge/decisions.md

Bytes: 5140
SHA-256: e4af0d8ee225fc6bd87331dcbf2c47d45ddc3818780f6894fdccd4b4b992d478
Lines: 1-69 of 69

```markdown
1 | # Ozzyl Guard — Active Decisions
2 |
3 | Updated: 2026-07-16
4 |
5 | ## Accepted decisions
6 |
7 | 1. Ozzyl Guard is a standalone SaaS/service. `multi-store-saas` becomes a client, not the canonical implementation host.
8 | 2. There is one canonical, pure, versioned risk engine.
9 | 3. The risk engine performs no network, database, queue, browser, filesystem, credential-store, or provider calls.
10 | 4. Courier access is isolated behind provider adapters and asynchronous session/sync workers.
11 | 5. The existing Steadfast Playwright session approach remains for the pilot, with security and reliability hardening.
12 | 6. Foundation stack: Node.js 20+, TypeScript, npm workspaces, Turborepo, PostgreSQL, Drizzle, Vitest, and Playwright.
13 | 7. Public API begins at `/v1`; the canonical assessment endpoint is `POST /v1/risk-assessments`.
14 | 8. API key environments use `ozg_test_` and `ozg_live_`. Raw keys are displayed once and stored only as hashes.
15 | 9. Dashboard user sessions are independent from API keys.
16 | 10. Merchant data uses strict organization/store isolation; no `storeId = 0` or optional-scope shortcut.
17 | 11. Unknown/no-data customers return explicit unknown/low-confidence state and normally recommend verification; they are not automatically safe.
18 | 12. Provider failure does not automatically allow or block. It produces explicit degraded/freshness metadata and policy-controlled behavior.
19 | 13. Outcome feedback is part of the first MVP.
20 | 14. WooCommerce, Shopify, custom, and native integrations use the same canonical request/response contract.
21 | 15. Applied migrations are immutable and changes require new migrations.
22 | 16. `fraudchecker.link` may exist only as an optional, identified fallback adapter; it is never the core source or an engine dependency.
23 |
24 | ## Source SaaS conflict resolutions
25 |
26 | | Conflict | Decision |
27 | | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
28 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly |
29 | | Generic `ozg_` and `og_live_` source key formats | Standardize on `ozg_test_` and `ozg_live_` |
30 | | Raw API key stored in metadata and login cookie | Prohibited; dedicated secure user sessions and hash-only API keys |
31 | | Custom SHA-256 password hashing | Prohibited; use Argon2id or managed authentication |
32 | | Risk engine performs external fetches | Prohibited; feature assembly/adapters perform I/O before pure scoring |
33 | | No history represented as 100% success/zero risk | Replace with unknown risk and low confidence |
34 | | Blacklist logging stubs | Do not copy; later evidence-backed reputation subsystem |
35 | | Hardcoded KV namespace and shell-based session writes | Replace with typed encrypted storage service/configuration |
36 | | Decryption error falls back to plaintext | Fail closed and record a structured reconnect/configuration failure |
37 | | Workflow/per-store errors silently succeed | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling |
38 | | WooCommerce uppercase levels and `signals[].type` | Use lowercase canonical enums and `signals[].code` |
39 | | Cross-store system store lookup | Replace with explicit authorized datasets and strict tenant boundaries |
40 |
41 | ## Approved reuse scope
42 |
43 | - npm/Turborepo/TypeScript/Vitest/Playwright conventions
44 | - Bangladesh phone normalization after tests
45 | - Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
46 | - WooCommerce settings/order hook/admin display skeleton
47 | - API-key hash/display-prefix and usage-event concepts
48 |
49 | No product source code was copied during Phase 0.
50 |
51 | ## Pending decisions
52 |
53 | These require separate ADRs before production implementation:
54 |
55 | - Managed authentication versus in-house Argon2id/session implementation
56 | - Queue/broker technology
57 | - API/dashboard/worker deployment platform
58 | - PostgreSQL hosting provider
59 | - KMS/vault and envelope-encryption implementation
60 | - Cache/session storage
61 | - Worker scheduler/runtime
62 | - OTP provider
63 |
64 | ## External requirements
65 |
66 | No credentials are needed for Phase 1 foundation.
67 |
68 | Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
69 |
```

### .ai-bridge/implementation-status.md

Bytes: 8413
SHA-256: 4aded96be38befe2a2684dd54d8a8977a008b14ad022b7a445e79402c6b58858
Lines: 1-101 of 101

```markdown
1 | # Ozzyl Guard — Implementation Status
2 |
3 | Updated: 2026-07-16
4 |
5 | ## Status legend
6 |
7 | - `done`: implemented and locally verified
8 | - `baseline`: implemented foundation; production wiring/calibration remains
9 | - `blocked`: requires an external account, secret, provider, or architecture decision
10 | - `deferred`: intentionally outside the current MVP
11 |
12 | ## Repository and delivery
13 |
14 | | Area | Status | Notes |
15 | | -------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
16 | | Documentation and ADRs | done | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and ADRs installed |
17 | | Continuation documentation | done | `tracker.yml`, `docs/README.md`, and `.ai-bridge/pro-context.md` provide new-chat and new-agent handoff context |
18 | | Git repository | done | Private GitHub repository `rahmatullahboss/ozzyl-guard`; `main` is the canonical branch |
19 | | Monorepo/tooling | done | npm workspaces, Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, tsup |
20 | | CI | done | PostgreSQL 16 migration apply, audit, format, lint, architecture, typecheck, tests, builds, PHP lint |
21 | | Container baseline | done | Separate API, migration, PostgreSQL, Playwright session worker, and courier-sync services |
22 | | Production platform ADRs | blocked | Hosting, managed PostgreSQL, KMS, queue/cache, and observability providers not selected |
23 |
24 | ## Product implementation
25 |
26 | | Area | Status | Notes |
27 | | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
28 | | Shared contracts | done | Canonical request/response/error/outcome/event schemas |
29 | | Database/migrations | baseline | Full schema and five append-only migrations; clean apply runs in CI, not locally verified due unavailable Docker/PostgreSQL |
30 | | Password/session primitives | done | Argon2id and opaque hashed session token utilities |
31 | | Organizations/stores/memberships | done | Canonical relational schema and bootstrap transaction |
32 | | API keys/usage/plans | done | Test/live prefixes, one-time raw reveal, hash-only persistence, scopes, revocation fields, atomic PostgreSQL usage reservation |
33 | | Courier adapter interface | done | Typed provider contract and structured errors |
34 | | Steadfast adapter | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation |
35 | | Steadfast session worker | baseline | Playwright login, selector/CAPTCHA/2FA errors, encryption boundary, health state, runnable PG polling |
36 | | Courier observation worker/cache | done | Durable jobs, `SKIP LOCKED` claiming, retry scheduling, normalized observation persistence |
37 | | Risk engine | done | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling |
38 | | Public API | done | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits |
39 | | PostgreSQL API repositories | done | API keys, usage, features, assessments/signals, outcomes, idempotency, courier jobs |
40 | | Outcome feedback | done | API, WooCommerce, Shopify, custom, and native adapter paths |
41 | | Webhook delivery | baseline | HMAC, timestamp, SSRF controls, retries; durable outbox runner still needed |
42 | | WooCommerce | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes |
43 | | Shopify | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented |
44 | | Custom server SDK | done | Server-only integration and checkout action mapping |
45 | | Native multi-store adapter | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending |
46 | | OTP verification | baseline | Secure service abstraction and worker library; production provider/runner blocked |
47 | | Merchant dashboard | baseline | Overview, queue, courier health, policy, usage, settings UI; auth and live API wiring pending |
48 | | Platform admin | baseline | Operations UI foundation; auth and live operational data wiring pending |
49 | | Shared reputation | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence |
50 |
51 | ## Migrations
52 |
53 | 1. `0001_foundation.sql`
54 | 2. `0002_courier.sql`
55 | 3. `0003_risk.sql`
56 | 4. `0004_verification_events.sql`
57 | 5. `0005_durable_operations.sql`
58 |
59 | Applied migrations must remain immutable.
60 |
61 | ## Verification evidence
62 |
63 | - `npm run format:check`: passed
64 | - `npm run lint`: passed with zero warnings
65 | - `npm run db:check`: five migrations validated
66 | - `npm run check:architecture`: passed
67 | - `npm run typecheck`: 18/18 workspaces passed
68 | - `npm run test`: 26/26 Turbo tasks passed; 24 substantive unit/API/integration-adapter assertions passed, no-test packages exited explicitly with success
69 | - `npm run build`: 18/18 workspace builds passed
70 | - `npm audit --audit-level=high`: passed; four moderate dev-tooling findings remain
71 | - WooCommerce `php -l`: passed
72 | - Canonical documentation link check: 33 files, zero broken links
73 | - `tracker.yml` YAML parse: passed
74 | - Continuation context bundle: refreshed and formatted
75 | - Prohibited insecure-pattern scan: zero matches
76 |
77 | ## External blockers and production requirements
78 |
79 | - Authorized Steadfast test/merchant account
80 | - Provider-terms and merchant-authorization review
81 | - Production KMS/vault and key-rotation setup
82 | - OTP provider selection/account
83 | - Hosting, PostgreSQL, queue/cache, and observability ADRs
84 | - Dashboard/admin authentication and backend data endpoints
85 | - Pilot merchants and verified outcome data for calibration
86 |
87 | ## Remaining risks
88 |
89 | - Steadfast UI/internal endpoint changes can break automation.
90 | - Local AES-GCM key configuration is not a replacement for managed KMS in production.
91 | - In-process API rate limiting is not distributed across replicas.
92 | - Dashboard/admin currently display representative UI data rather than live tenant data.
93 | - Webhook and OTP worker libraries need durable production runners/providers.
94 | - PostgreSQL repository/concurrency behavior needs containerized integration tests beyond CI migration apply.
95 | - Four moderate development-tooling advisories remain; high/critical threshold is clear.
96 | - Automatic blocking should remain merchant-controlled and disabled by default until pilot calibration.
97 |
98 | ## Next milestone
99 |
100 | Production hardening and pilot readiness: infrastructure ADRs, managed secrets, live dashboard data/auth, database integration tests, authorized Steadfast validation, OTP provider, durable event/verification runners, and native multi-store shadow rollout.
101 |
```

### docs/api/api-specification.md

Bytes: 4506
SHA-256: 986fb27bd269d26ba606547eced05a4c2741c7407c4fb0c30a23aab768dd0ea7
Lines: 1-232 of 232

````markdown
1 | # API Specification
2 |
3 | Base path: `/v1`
4 |
5 | ## Authentication
6 |
7 | `http
  8 | Authorization: Bearer ozg_live_<redacted>
  9 | `
10 |
11 | Key prefixes:
12 |
13 | - `ozg_test_`
14 | - `ozg_live_`
15 |
16 | Raw keys are returned only at creation. The database stores a hash and a non-secret display prefix.
17 |
18 | ## Common headers
19 |
20 | - `Idempotency-Key` for create operations
21 | - `X-Request-ID` optional client request identifier
22 | - `Content-Type: application/json`
23 |
24 | ## Canonical success response
25 |
26 | `json
 27 | {
 28 |   "success": true,
 29 |   "assessment_id": "ras_123",
 30 |   "risk_score": 72,
 31 |   "risk_level": "high",
 32 |   "decision": "verify",
 33 |   "confidence": 0.82,
 34 |   "signals": [
 35 |     {
 36 |       "code": "low_delivery_rate",
 37 |       "score": 30,
 38 |       "description": "Customer delivery rate is 28%"
 39 |     }
 40 |   ],
 41 |   "courier_summary": {
 42 |     "total": 12,
 43 |     "delivered": 5,
 44 |     "returned": 4,
 45 |     "cancelled_before_shipping": 3
 46 |   }
 47 | }
 48 | `
49 |
50 | Additional non-breaking metadata may include freshness, provider count, recommended actions, engine/policy versions, degraded state, and response time.
51 |
52 | ## Create risk assessment
53 |
54 | `http
 55 | POST /v1/risk-assessments
 56 | `
57 |
58 | Request:
59 |
60 | `json
 61 | {
 62 |   "external_order_id": "WC-1092",
 63 |   "phone": "01712345678",
 64 |   "order_total": 1850,
 65 |   "payment_method": "cod",
 66 |   "shipping_address": {
 67 |     "district": "Dhaka",
 68 |     "area": "Mirpur"
 69 |   },
 70 |   "items_count": 2,
 71 |   "session": {
 72 |     "ip": "203.0.113.5",
 73 |     "device_id": "dev_example",
 74 |     "user_agent": "example"
 75 |   }
 76 | }
 77 | `
78 |
79 | Expanded response:
80 |
81 | `json
 82 | {
 83 |   "success": true,
 84 |   "assessment_id": "ras_123",
 85 |   "risk_score": 72,
 86 |   "confidence": 0.86,
 87 |   "risk_level": "high",
 88 |   "decision": "hold",
 89 |   "signals": [
 90 |     {
 91 |       "code": "courier_low_delivery_rate",
 92 |       "category": "courier",
 93 |       "score": 30,
 94 |       "description": "Delivery success rate is 28% across 11 shipped orders"
 95 |     }
 96 |   ],
 97 |   "courier_summary": {
 98 |     "freshness": "fresh",
 99 |     "providers": 1,
100 |     "total": 14,
101 |     "delivered": 3,
102 |     "returned": 8,
103 |     "cancelled_before_shipping": 3
104 |   },
105 |   "recommended_actions": ["require_otp", "request_advance_payment"],
106 |   "meta": {
107 |     "engine_version": "1.0.0",
108 |     "policy_version": "store_12_v3",
109 |     "degraded": false,
110 |     "response_ms": 184
111 |   }
112 | }
113 | `
114 |
115 | Unknown/no-data behavior must be explicit: `risk_level: "unknown"`, low confidence, `decision: "verify"`, and a degraded/freshness explanation. It must not return an implicit safe result.
116 |
117 | ## Read assessment
118 |
119 | `http
120 | GET /v1/risk-assessments/{assessment_id}
121 | `
122 |
123 | The caller must be authorized for the assessment's organization/store scope.
124 |
125 | ## Create courier refresh job
126 |
127 | `http
128 | POST /v1/courier-observations/refresh
129 | `
130 |
131 | Request:
132 |
133 | `json
134 | {
135 |   "phone": "01712345678",
136 |   "providers": ["steadfast"],
137 |   "force": false
138 | }
139 | `
140 |
141 | Return `202 Accepted` with a job id when asynchronous. Checkout integrations must not wait for Playwright/session refresh.
142 |
143 | ## Send OTP
144 |
145 | `http
146 | POST /v1/verifications/otp/send
147 | `
148 |
149 | `json
150 | {
151 |   "assessment_id": "ras_123",
152 |   "phone": "01712345678",
153 |   "purpose": "cod_order_confirmation"
154 | }
155 | `
156 |
157 | ## Verify OTP
158 |
159 | `http
160 | POST /v1/verifications/otp/verify
161 | `
162 |
163 | `json
164 | {
165 |   "verification_id": "ver_123",
166 |   "otp": "123456"
167 | }
168 | `
169 |
170 | ## Submit outcome
171 |
172 | `http
173 | POST /v1/order-outcomes
174 | `
175 |
176 | `json
177 | {
178 |   "external_order_id": "WC-1092",
179 |   "assessment_id": "ras_123",
180 |   "outcome": "returned",
181 |   "provider": "steadfast",
182 |   "reason": "customer_refused",
183 |   "occurred_at": "2026-07-16T10:30:00Z"
184 | }
185 | `
186 |
187 | Outcome submissions require idempotency and evidence/source metadata. Integrations should send outcomes from the first MVP.
188 |
189 | ## Webhooks
190 |
191 | Events:
192 |
193 | - `assessment.completed`
194 | - `verification.verified`
195 | - `verification.failed`
196 | - `courier.connection_failed`
197 | - `order.outcome_recorded`
198 | - `usage.limit_warning`
199 |
200 | Webhook requirements:
201 |
202 | - HMAC signature
203 | - timestamp header
204 | - replay protection
205 | - retry with exponential backoff
206 | - delivery log
207 | - bounded payload and SSRF-safe destination validation
208 |
209 | ## Error format
210 |
211 | `json
212 | {
213 |   "success": false,
214 |   "error": {
215 |     "code": "INVALID_PHONE",
216 |     "message": "A valid Bangladesh mobile number is required",
217 |     "details": {}
218 |   },
219 |   "request_id": "req_123"
220 | }
221 | `
222 |
223 | ## Contract rules
224 |
225 | - All integrations use this same contract.
226 | - Risk levels and decisions are lowercase canonical enums.
227 | - Signals use `code`; adapters/plugins must not invent `name` or `type` variants.
228 | - Provider/network failure must not appear as low risk.
229 | - API key environment and store scope must be enforced server-side.
230 | - Quota/entitlement enforcement must be safe under concurrency.
231 | - Idempotent retries return the original logically equivalent result.
232 |
````

### docs/architecture/system-architecture.md

Bytes: 4570
SHA-256: e6605a68521ba6f3c4732940c6e1364858a18a3a9b1e9068508b0713437fb338
Lines: 1-157 of 157

````markdown
1 | # System Architecture
2 |
3 | ## Proposed monorepo
4 |
5 | `text
  6 | ozzyl-guard/
  7 | ├── apps/
  8 | │   ├── api/
  9 | │   ├── dashboard/
 10 | │   └── admin/
 11 | ├── workers/
 12 | │   ├── courier-session-worker/
 13 | │   ├── courier-sync-worker/
 14 | │   ├── verification-worker/
 15 | │   └── event-worker/
 16 | ├── packages/
 17 | │   ├── risk-engine/
 18 | │   ├── courier-adapters/
 19 | │   ├── database/
 20 | │   ├── authentication/
 21 | │   ├── verification/
 22 | │   ├── billing/
 23 | │   ├── shared-types/
 24 | │   └── sdk/
 25 | ├── integrations/
 26 | │   ├── woocommerce/
 27 | │   ├── shopify/
 28 | │   ├── custom-js/
 29 | │   └── multi-store-saas/
 30 | ├── docs/
 31 | └── .ai-bridge/
 32 | `
33 |
34 | ## Validated technology direction
35 |
36 | - TypeScript on Node.js 20+
37 | - npm workspaces and Turborepo, matching the existing SaaS repository where practical
38 | - PostgreSQL for production relational data
39 | - Drizzle ORM/migrations unless a later ADR selects another ORM
40 | - React Router/React for dashboard reuse where beneficial
41 | - Vitest for unit/contract tests and Playwright for browser/session/E2E tests
42 | - Queue-backed workers; deployment provider remains an explicit pending ADR
43 |
44 | This direction reuses team familiarity without importing Cloudflare D1-specific data design into the standalone service.
45 |
46 | ## Main components
47 |
48 | ### API application
49 |
50 | Responsibilities:
51 |
52 | - Validate requests
53 | - Authenticate API keys or user/service sessions
54 | - Authorize organization/store scopes
55 | - Apply rate limits and atomically reserve usage
56 | - Call application services
57 | - Return canonical responses
58 |
59 | It must not contain scoring formulas, provider-specific scraping logic, or direct credential access.
60 |
61 | ### Dashboard application
62 |
63 | Responsibilities:
64 |
65 | - Merchant onboarding
66 | - Courier account connection/reconnect
67 | - Policy configuration
68 | - Review queue
69 | - Usage and savings reports
70 | - Team, API key, and billing management
71 |
72 | ### Courier session worker
73 |
74 | Responsibilities:
75 |
76 | - Login to courier portals with merchant authorization
77 | - Refresh session cookies/tokens
78 | - Validate login/session health
79 | - Encrypt and store session material
80 | - Emit structured failure and reconnect events
81 |
82 | ### Courier sync worker
83 |
84 | Responsibilities:
85 |
86 | - Fetch phone-level courier history
87 | - Sync shipment outcomes
88 | - Normalize provider responses
89 | - Cache observations
90 | - Apply provider rate limits, retries, and circuit breakers
91 |
92 | ### Risk engine
93 |
94 | A deterministic, versioned, pure package that accepts normalized features and returns:
95 |
96 | `ts
 97 | {
 98 |   score: number,
 99 |   confidence: number,
100 |   riskLevel: 'low' | 'moderate' | 'high' | 'critical' | 'unknown',
101 |   decision: 'allow' | 'verify' | 'review' | 'hold' | 'block',
102 |   signals: RiskSignal[],
103 |   engineVersion: string,
104 |   policyVersion: string
105 | }
106 | `
107 |
108 | ### Verification worker
109 |
110 | Responsibilities:
111 |
112 | - OTP generation and delivery
113 | - OTP verification
114 | - IVR orchestration later
115 | - Delivery receipt handling
116 | - Rate limits and abuse protection
117 |
118 | ## Courier boundary
119 |
120 | `text
121 | Courier Session Worker
122 |   → encrypted session store
123 |   → Steadfast Adapter
124 |   → Normalized Courier Observation
125 |   → feature assembly
126 |   → Canonical Risk Engine
127 | `
128 |
129 | The risk engine never imports Playwright, provider clients, fetch libraries, database clients, queues, or credential stores.
130 |
131 | ## Synchronous assessment flow
132 |
133 | 1. Receive a risk-assessment request.
134 | 2. Authenticate key and resolve organization/store scope.
135 | 3. Validate and normalize phone/order data.
136 | 4. Atomically enforce idempotency, rate limit, and entitlement.
137 | 5. Load cached courier observations and other features.
138 | 6. Call the pure risk engine.
139 | 7. Persist assessment and signals transactionally.
140 | 8. Return canonical decision and degraded/freshness metadata.
141 | 9. Queue stale courier refresh when appropriate.
142 |
143 | ## Cache strategy
144 |
145 | - Courier phone observation: 12–24 hours depending on provider/source.
146 | - Session health/material: provider-specific, generally refreshed every 4–6 hours.
147 | - Merchant policy: short cache with explicit invalidation/version.
148 | - Assessment result: tied to idempotency and order snapshot, not indefinite phone caching.
149 |
150 | ## Failure behavior
151 |
152 | - No fresh courier data: return unknown/low confidence and recommend verification.
153 | - Provider timeout: use last-known observation only within documented stale tolerance.
154 | - Risk feature/service failure: return explicit degraded state, never silently safe.
155 | - Verification provider failure: record delivery failure and queue/retry as policy allows.
156 | - Database/entitlement uncertainty: fail the request safely rather than produce unmetered or cross-tenant results.
157 |
````

### docs/courier/courier-intelligence.md

Bytes: 4369
SHA-256: 0a11b0bddfcdf44e77f7b4099ecd5c232117a7055e25763f406887d430a5f670
Lines: 1-135 of 135

````markdown
1 | # Courier Intelligence and Scraping
2 |
3 | ## Decision
4 |
5 | Keep the existing Steadfast browser-login/session approach, but isolate it as a provider adapter and session worker.
6 |
7 | ## Existing flow to preserve
8 |
9 | 1. Playwright opens Steadfast login.
10 | 2. Merchant-authorized credentials are submitted.
11 | 3. Session and XSRF cookies are extracted.
12 | 4. Session data is encrypted and stored per merchant/store.
13 | 5. The Steadfast internal JSON endpoint is called for phone-level success/cancellation data.
14 | 6. A scheduled worker refreshes sessions periodically.
15 |
16 | ## New component boundaries
17 |
18 | ### `SteadfastSessionDriver`
19 |
20 | - Login automation
21 | - Selector management
22 | - Cookie extraction
23 | - Login-state validation
24 | - CAPTCHA/2FA detection
25 | - Structured failure codes
26 | - Redacted diagnostics and bounded failure screenshots
27 |
28 | ### `SteadfastAdapter`
29 |
30 | Implements:
31 |
32 | `ts
 33 | interface CourierAdapter {
 34 |   provider: string;
 35 |   testConnection(accountId: string): Promise<ConnectionHealth>;
 36 |   refreshSession(accountId: string): Promise<SessionResult>;
 37 |   fetchCustomerObservation(input: CustomerLookup): Promise<CourierObservation>;
 38 |   fetchShipmentStatus(input: ShipmentLookup): Promise<ShipmentObservation>;
 39 | }
 40 | `
41 |
42 | The session driver and adapter may share provider-specific types, but the risk engine must not import them.
43 |
44 | ### `CourierObservationService`
45 |
46 | - Reads fresh cached observation
47 | - Requests provider refresh
48 | - Normalizes data
49 | - Calculates source confidence
50 | - Persists freshness and evidence
51 | - Returns explicit unknown/degraded state when data is unavailable
52 |
53 | ## Canonical observation
54 |
55 | `ts
 56 | interface CourierObservation {
 57 |   provider: 'steadfast' | 'pathao' | 'redx' | 'aggregator';
 58 |   totalOrders: number;
 59 |   deliveredOrders: number;
 60 |   returnedOrders: number;
 61 |   cancelledBeforeShipping: number;
 62 |   successRate: number | null;
 63 |   confidence: number;
 64 |   source: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
 65 |   observedAt: string;
 66 |   expiresAt: string;
 67 | }
 68 | `
69 |
70 | ## Session lifecycle
71 |
72 | - Scheduled refresh: every 4–6 hours.
73 | - Immediate refresh after provider 401/419.
74 | - Validate cookies after login before saving.
75 | - Two consecutive failures mark account `reconnect_required`.
76 | - Merchant dashboard shows health and last successful refresh.
77 | - A refresh job must record start, outcome, failure code, attempts, and duration.
78 |
79 | ## Security
80 |
81 | - Credentials encrypted with envelope encryption or a secret vault.
82 | - Sessions encrypted separately from credentials.
83 | - No password, cookie, token, merchant email, or raw payload in logs.
84 | - Per-store access isolation.
85 | - Credential read audit trail.
86 | - Rotate encryption keys with versioning.
87 | - Never pass session JSON through shell command arguments.
88 | - Decryption errors fail closed; never retry ciphertext as plaintext.
89 |
90 | ## Reliability
91 |
92 | - Provider-specific concurrency limits.
93 | - Exponential retry with jitter.
94 | - Circuit breaker when provider is unstable.
95 | - Dead-letter queue for repeated failures.
96 | - Selector/version monitoring.
97 | - Failure screenshots stored briefly and access-controlled.
98 | - Scheduled workflow/job failure must be visible and alertable.
99 |
100 | ## Checkout behavior
101 |
102 | Do not run Playwright during checkout.
103 |
104 | Preferred order:
105 |
106 | 1. Fresh cache
107 | 2. Acceptably stale last-known data
108 | 3. Fast provider API/internal endpoint call when session is healthy and latency budget permits
109 | 4. Unknown-risk result plus verification recommendation
110 |
111 | Checkout response time must be bounded. Stale refresh is queued asynchronously.
112 |
113 | ## Third-party aggregator
114 |
115 | Third-party fraud data may be used only as a fallback adapter. It must expose source, freshness, and confidence and must never be the hidden single source of truth.
116 |
117 | `fraudchecker.link` is optional fallback-only and must not be imported by the risk engine.
118 |
119 | ## Source extraction notes
120 |
121 | Reusable from the SaaS source:
122 |
123 | - Basic Playwright navigation/fill/click/cookie extraction sequence
124 | - Cookie names and internal endpoint request headers
125 | - Initial provider status mapping fixtures
126 |
127 | Rewrite requirements:
128 |
129 | - Replace fixed sleep with validated state transitions and bounded waits
130 | - Add invalid-credential/CAPTCHA/2FA/selector-change error taxonomy
131 | - Remove hardcoded user agent/namespace assumptions where possible
132 | - Replace shell-based Wrangler storage with a typed encrypted storage service
133 | - Remove silent `continue-on-error`/per-store skipping
134 | - Do not expose provider response/error bodies without redaction
135 |
````

### docs/database/database-design.md

Bytes: 4557
SHA-256: 4c3c30cd4944a023954189defdbc6ba8f54ef9d683f7d0031d12cc034ed73320
Lines: 1-274 of 274

```markdown
1 | # Database Design
2 |
3 | ## Recommended production database
4 |
5 | Use PostgreSQL for the standalone product. Cloudflare D1 can remain suitable for an early pilot, but shared intelligence, analytics, concurrent billing, and relational integrity will benefit from PostgreSQL.
6 |
7 | ## Identity and tenancy
8 |
9 | ### `users`
10 |
11 | - `id`
12 | - `email`
13 | - `password_hash` or managed-auth identifier
14 | - `email_verified_at`
15 | - `status`
16 | - timestamps
17 |
18 | ### `organizations`
19 |
20 | - `id`
21 | - `name`
22 | - `slug`
23 | - `plan_id`
24 | - `status`
25 | - timestamps
26 |
27 | ### `organization_members`
28 |
29 | - `organization_id`
30 | - `user_id`
31 | - `role`
32 | - permissions
33 | - timestamps
34 |
35 | ### `stores`
36 |
37 | - `id`
38 | - `organization_id`
39 | - `name`
40 | - `platform`
41 | - `external_store_id`
42 | - `timezone`
43 | - `currency`
44 | - `status`
45 | - timestamps
46 |
47 | All merchant-owned repository methods must require an explicit organization/store scope. Scope filters must not be optional.
48 |
49 | ## API and billing
50 |
51 | ### `api_keys`
52 |
53 | - `id`
54 | - `organization_id`
55 | - `store_id` nullable
56 | - `environment`: `test` or `live`
57 | - `key_hash`
58 | - `key_prefix`
59 | - `name`
60 | - `scopes`
61 | - `allowed_origins`
62 | - `last_used_at`
63 | - `expires_at`
64 | - `revoked_at`
65 | - timestamps
66 |
67 | Raw API keys are shown once and never stored. Key prefixes are `ozg_test_` and `ozg_live_` followed by sufficient random material.
68 |
69 | ### `usage_events`
70 |
71 | - `id`
72 | - `organization_id`
73 | - `api_key_id`
74 | - `event_type`
75 | - `units`
76 | - `request_id`
77 | - `response_ms`
78 | - `status_code`
79 | - timestamp
80 |
81 | Usage entitlement reservation and assessment creation must be atomic or use a design that cannot be bypassed by concurrent requests.
82 |
83 | ### `subscriptions`
84 |
85 | - organization
86 | - plan
87 | - billing status
88 | - cycle dates
89 | - provider references
90 |
91 | ## Courier subsystem
92 |
93 | ### `courier_accounts`
94 |
95 | - `id`
96 | - `store_id`
97 | - `provider`
98 | - `status`
99 | - `credential_version`
100 | - `last_connected_at`
101 | - `last_success_at`
102 | - `last_failure_at`
103 | - `failure_code`
104 | - timestamps
105 |
106 | ### `courier_credentials`
107 |
108 | - `courier_account_id`
109 | - encrypted credential payload or vault reference
110 | - encryption key version
111 | - timestamps
112 |
113 | ### `courier_sessions`
114 |
115 | - `courier_account_id`
116 | - encrypted cookie/token payload
117 | - `expires_at`
118 | - `validated_at`
119 | - `status`
120 | - timestamps
121 |
122 | ### `courier_observations`
123 |
124 | - `id`
125 | - `store_id`
126 | - `provider`
127 | - `phone_hash`
128 | - optionally encrypted normalized phone for operational lookup
129 | - `total_orders`
130 | - `delivered_orders`
131 | - `returned_orders`
132 | - `cancelled_before_shipping`
133 | - `success_rate`
134 | - `confidence`
135 | - `source_type`
136 | - `observed_at`
137 | - `expires_at`
138 | - encrypted raw payload reference
139 |
140 | Unique/index recommendation:
141 |
142 | - `(store_id, provider, phone_hash, observed_at)`
143 | - latest-observation index by `(store_id, phone_hash, provider, observed_at desc)`
144 |
145 | ### `courier_sync_jobs`
146 |
147 | - provider/account
148 | - job type
149 | - status
150 | - attempts
151 | - scheduled time
152 | - started/completed time
153 | - error code
154 |
155 | ## Risk subsystem
156 |
157 | ### `risk_assessments`
158 |
159 | - `id`
160 | - `organization_id`
161 | - `store_id`
162 | - `external_order_id`
163 | - `phone_hash`
164 | - encrypted phone reference if operationally required
165 | - order snapshot fields
166 | - score
167 | - confidence
168 | - risk level
169 | - decision
170 | - engine version
171 | - policy version
172 | - degraded flags
173 | - timestamps
174 |
175 | ### `risk_signals`
176 |
177 | - assessment id
178 | - signal code
179 | - category
180 | - score contribution
181 | - confidence
182 | - description
183 | - evidence reference
184 |
185 | ### `risk_policies`
186 |
187 | - store id
188 | - version
189 | - thresholds
190 | - action configuration
191 | - active flag
192 | - timestamps
193 |
194 | ### `order_outcomes`
195 |
196 | - store/order references
197 | - outcome
198 | - provider
199 | - reason
200 | - source
201 | - confirmed at
202 | - evidence reference
203 |
204 | ## Reputation subsystem
205 |
206 | ### `reputation_reports`
207 |
208 | - reporter store
209 | - subject phone hash
210 | - category
211 | - evidence type
212 | - order/courier reference
213 | - status
214 | - confidence
215 | - expiry/decay data
216 |
217 | ### `network_reputation`
218 |
219 | Materialized/derived score by phone hash:
220 |
221 | - positive outcomes
222 | - negative courier-confirmed outcomes
223 | - independent reporters
224 | - confidence
225 | - last evidence time
226 | - decay-adjusted score
227 |
228 | ### `reputation_disputes`
229 |
230 | - report/subject
231 | - reason
232 | - evidence
233 | - review status
234 | - resolution
235 |
236 | ## Verification subsystem
237 |
238 | ### `verification_sessions`
239 |
240 | - assessment/order/store
241 | - phone hash
242 | - purpose
243 | - channel
244 | - status
245 | - expiry
246 | - verified at
247 |
248 | ### `otp_attempts`
249 |
250 | - verification session
251 | - hashed OTP
252 | - attempts
253 | - provider message id
254 | - sent/delivered/failed times
255 | - expiry
256 |
257 | Never store OTP plaintext.
258 |
259 | ## Initial migration boundaries
260 |
261 | Migration 0001 should establish only the Phase 1 foundation:
262 |
263 | - users
264 | - sessions
265 | - organizations
266 | - organization_members
267 | - stores
268 | - plans/entitlements
269 | - api_keys
270 | - usage_events
271 | - audit_events
272 |
273 | Courier, risk, verification, and reputation tables should be introduced in subsequent append-only migrations aligned with coherent milestones.
274 |
```

### docs/integrations/integrations.md

Bytes: 3046
SHA-256: 4436268826a81bb257245786cd68d22bc7716b69961022ef97dd9b072a2a1267
Lines: 1-97 of 97

```markdown
1 | # Integrations
2 |
3 | All integrations use the canonical `/v1` API contract and outcome feedback model. Integration-specific code must not contain a second scoring engine.
4 |
5 | ## WooCommerce
6 |
7 | ### Required features
8 |
9 | - API key and store connection settings
10 | - Test/live mode
11 | - COD-only assessment option
12 | - Threshold/action settings
13 | - Order metadata and admin badge
14 | - Hold/flag/require-prepayment actions
15 | - OTP workflow
16 | - Outcome webhook when order status changes
17 | - Manual recheck
18 | - Retry and explicit degraded-state visibility
19 |
20 | ### Contract rules
21 |
22 | - Use canonical lowercase risk levels.
23 | - Use `signals[].code`, not conflicting `name/type` fields.
24 | - API success must be explicit.
25 | - Network failure must not be interpreted as low risk.
26 | - Checkout timeout must stay bounded.
27 | - Use `Idempotency-Key` derived from store/order/assessment intent.
28 | - Store the assessment ID and engine/policy metadata with the order.
29 | - Never automatically cancel solely because a provider call failed.
30 |
31 | ### Source plugin reuse
32 |
33 | Reusable:
34 |
35 | - WordPress settings registration/page skeleton
36 | - WooCommerce order-created hook concept
37 | - Order metadata/admin display concept
38 | - Bounded HTTP timeout concept
39 |
40 | Rewrite:
41 |
42 | - Endpoint path and request/response contract
43 | - API key prefix placeholder
44 | - Uppercase `LOW/MEDIUM/HIGH/CRITICAL` mapping
45 | - `signals[].type` access
46 | - Missing explicit success handling mismatch
47 | - Immediate cancel behavior and low-risk approval wording
48 | - Outcome feedback, retries, idempotency, manual recheck, OTP, and degraded state
49 | - Secret storage guidance and connection test behavior
50 |
51 | ## Shopify
52 |
53 | Initial approach:
54 |
55 | - App installation and OAuth
56 | - Order-created webhook
57 | - Risk assessment
58 | - Add order tags/metafields
59 | - Merchant dashboard action recommendations
60 | - Outcome sync from fulfilment/order updates
61 | - Signed webhook verification and replay protection
62 |
63 | ## Custom websites
64 |
65 | Provide:
66 |
67 | - REST API
68 | - TypeScript SDK
69 | - PHP SDK
70 | - Server-side examples
71 | - Webhook verification helper
72 | - Clear timeout/retry/idempotency guidance
73 |
74 | Browser-only integrations must not expose live API keys. Custom JS should use a merchant server or narrowly scoped short-lived token design selected by ADR.
75 |
76 | ## Ozzyl Commerce / `multi-store-saas`
77 |
78 | Treat the existing platform as the first native client.
79 |
80 | - Remove embedded duplicate risk logic.
81 | - Call Ozzyl Guard through an internal service client.
82 | - Reuse store/order IDs as external references.
83 | - Send order outcomes back to Guard.
84 | - Keep courier booking in the commerce platform, but risk assessment in Guard.
85 | - Roll out behind a feature flag and compare old/new decisions before removing old code.
86 |
87 | ## Meta audience exclusion — later phase
88 |
89 | Workflow:
90 |
91 | 1. Merchant authorizes Meta assets.
92 | 2. Eligible high-confidence identities are normalized and hashed.
93 | 3. Ozzyl Guard updates a merchant-owned customer-list custom audience.
94 | 4. Merchant excludes that audience from selected ad sets.
95 |
96 | This is merchant-specific audience management, not a global Facebook user block. It requires separate privacy/legal review and is not part of the first MVP.
97 |
```

### docs/operations/deployment.md

Bytes: 3079
SHA-256: 515f84e2503936fd3cd1462ddac9633feedb30071708e5a907a3b698c1259be5
Lines: 1-83 of 83

```markdown
1 | # Deployment
2 |
3 | ## Implemented deployment baseline
4 |
5 | The repository includes:
6 |
7 | - `Dockerfile` for API, migration, and non-browser workers
8 | - `Dockerfile.playwright` for the isolated browser/session worker
9 | - `docker-compose.yml` for PostgreSQL, migration job, API, session worker, and courier-sync worker
10 | - GitHub Actions CI with PostgreSQL 16
11 | - health check for the API
12 | - graceful API and worker shutdown
13 | - migration execution separated from API startup
14 |
15 | Dashboard and admin build to static assets and may be hosted separately from the API.
16 |
17 | ## Service separation
18 |
19 | Deploy independently:
20 |
21 | - Public/internal API
22 | - Merchant dashboard
23 | - Platform admin
24 | - Migration job
25 | - Courier session worker with Playwright/browser dependencies
26 | - Courier sync worker
27 | - Verification runner after provider selection
28 | - Event/webhook outbox runner after queue/outbox implementation
29 | - PostgreSQL
30 | - Selected queue/cache/observability services
31 |
32 | The Playwright worker must not receive public traffic and must never run inside checkout request handling.
33 |
34 | ## Environment stages
35 |
36 | - local
37 | - CI/test
38 | - staging
39 | - production
40 |
41 | Test and live API keys are logically separated. Staging must not use production courier credentials unless explicitly approved and isolated.
42 |
43 | ## Release sequence
44 |
45 | 1. Build immutable artifacts.
46 | 2. Run migration-file and architecture checks.
47 | 3. Apply migrations as a separate release job.
48 | 4. Verify database and service readiness.
49 | 5. Deploy API and workers.
50 | 6. Deploy static dashboard/admin assets.
51 | 7. Enable new engine/policy/integration behavior through a feature flag or merchant pilot.
52 | 8. Compare decision and outcome metrics before broader rollout.
53 |
54 | ## Production requirements not yet selected
55 |
56 | Separate ADRs are still required for:
57 |
58 | - API/dashboard/admin hosting platform
59 | - managed PostgreSQL provider
60 | - queue/broker and dead-letter implementation
61 | - distributed cache/rate limiting
62 | - KMS/vault and envelope-encryption implementation
63 | - scheduler/runtime
64 | - metrics, tracing, logs, and error tracking
65 | - OTP provider
66 |
67 | The Docker Compose setup is a development/self-hosted baseline, not the final production architecture.
68 |
69 | ## Security requirements
70 |
71 | - Use managed secrets and least-privilege service identities.
72 | - Replace the local AES-GCM master-key environment variable with KMS/vault envelope encryption.
73 | - Give API, migration, session worker, sync worker, and database distinct permissions.
74 | - Do not put secrets in images, CI logs, command arguments, or source maps.
75 | - Restrict browser-worker egress and filesystem access where practical.
76 | - Encrypt backups and test restore.
77 | - Rotate API-key pepper, phone HMAC key, webhook secrets, and encryption keys through documented procedures.
78 | - Keep API keys separate from dashboard user sessions.
79 |
80 | ## Current verification boundary
81 |
82 | Package-level tests, typecheck, builds, PHP syntax, architecture checks, and migration-file validation passed locally. Docker was not installed in the audited workspace, so the Compose stack and clean PostgreSQL migration apply were not run locally. CI is configured to run the migration job against PostgreSQL 16.
83 |
```

### docs/operations/development-environment.md

Bytes: 2860
SHA-256: 49cfae3d2dc47600d66fd9aaa9da9102f78d647bf2082a847491580b0143c964
Lines: 1-91 of 91

````markdown
1 | # Development Environment
2 |
3 | ## Prerequisites
4 |
5 | - Node.js 20+
6 | - npm 10+
7 | - PostgreSQL 16+
8 | - Git
9 | - PHP 8.0+ with sodium for WooCommerce lint/runtime
10 | - Playwright browser dependencies when running the Steadfast session worker
11 | - Docker/Compose recommended, but not required for package-level development
12 |
13 | ## Setup
14 |
15 | Use `config/environment.example` as a checklist. Copy variables into an ignored local environment file or secret manager and replace every redacted value.
16 |
17 | `bash
18 | npm install
19 | npm run db:check
20 | npm run db:migrate
21 | npm run bootstrap -w @ozzyl/api
22 | `
23 |
24 | The bootstrap transaction creates the first owner, organization, store, membership, audit event, and service API key. The raw API key is printed once; only its HMAC hash and display prefix are persisted.
25 |
26 | ## Applications
27 |
28 | `bash
29 | npm run dev:api
30 | npm run dev:dashboard
31 | npm run dev -w @ozzyl/admin
32 | `
33 |
34 | Default ports:
35 |
36 | - API: 3000
37 | - Merchant dashboard: 5173
38 | - Platform admin: 5174
39 |
40 | Dashboard and admin are UI foundations. Their authenticated live-data endpoints remain part of production hardening.
41 |
42 | ## Workers
43 |
44 | `bash
45 | npm run start -w @ozzyl/courier-session-worker
46 | npm run start -w @ozzyl/courier-sync-worker
47 | `
48 |
49 | The session worker requires an AES-256-GCM key encoded as 32 bytes in Base64 for local/self-hosted development. Production must use managed KMS/vault envelope encryption.
50 |
51 | The verification and event packages currently provide secure worker/service libraries; production durable runners depend on the OTP provider and queue/outbox decisions.
52 |
53 | ## Root verification
54 |
55 | `bash
56 | npm run format:check
57 | npm run lint
58 | npm run db:check
59 | npm run check:architecture
60 | npm run typecheck
61 | npm run test
62 | npm run build
63 | npm audit --audit-level=high
64 | php -l integrations/woocommerce/ozzyl-guard.php
65 | `
66 |
67 | `npm run verify` combines formatting, lint, migration-file checks, architecture checks, typecheck, tests, and builds.
68 |
69 | ## Database workflow
70 |
71 | 1. Change the canonical Drizzle schema in `packages/database/src/schema.ts`.
72 | 2. Add a new ordered migration under `packages/database/migrations/`.
73 | 3. Review SQL constraints, indexes, tenancy, and compatibility.
74 | 4. Run `npm run db:check`.
75 | 5. Apply to a clean PostgreSQL database and a database at the previous migration level.
76 | 6. Run repository/concurrency/tenant-isolation integration tests.
77 | 7. Never edit an applied migration.
78 |
79 | The local workspace used for the current milestone did not have Docker/PostgreSQL available, so clean migration apply is delegated to CI's PostgreSQL 16 service.
80 |
81 | ## Live Steadfast tests
82 |
83 | Live browser/provider tests are opt-in and require:
84 |
85 | - an authorized dedicated merchant/test account
86 | - provider-terms and authorization review
87 | - `STEADFAST_LIVE_TESTS=true`
88 | - credentials stored through the encrypted credential boundary
89 |
90 | Never put credentials in committed environment files, tests, documentation, command arguments, screenshots, or logs.
91 |
````

### docs/risk-engine/risk-engine.md

Bytes: 4628
SHA-256: 9f303509147fb0508c3c2f9c30f524058d8cddaa5beefb8266dceeb0048ab7bb
Lines: 1-169 of 169

````markdown
1 | # Risk Engine
2 |
3 | ## Philosophy
4 |
5 | Start with a deterministic, explainable, versioned rule engine. Add ML only after enough verified outcomes exist.
6 |
7 | ## Hard boundary
8 |
9 | The risk engine is a pure package. It performs no network, database, queue, filesystem, browser, credential-store, or provider calls.
10 |
11 | External services assemble normalized features before invoking the engine.
12 |
13 | ## Input groups
14 |
15 | ### Courier features
16 |
17 | - Shipped order count
18 | - Delivered count
19 | - Actual return count
20 | - Delivery success rate
21 | - Number of providers
22 | - Observation freshness
23 | - Provider/source confidence
24 |
25 | ### Merchant-history features
26 |
27 | - Previous delivered orders at the same store
28 | - Previous courier returns
29 | - Repeated call cancellations
30 | - Recent order frequency
31 | - Order value deviation
32 |
33 | ### Velocity and identity features
34 |
35 | - Multiple orders from same phone in a short period
36 | - Multiple phones from same device
37 | - Multiple customers from same IP
38 | - Address similarity
39 | - Session anomalies
40 |
41 | ### Verification features
42 |
43 | - OTP verified
44 | - OTP failures
45 | - Phone unreachable
46 | - IVR accepted/rejected
47 | - Customer requested cancellation
48 |
49 | ### Network reputation
50 |
51 | - Courier-confirmed negative outcomes
52 | - Independent merchant count
53 | - Positive delivered outcomes
54 | - Evidence age and decay
55 | - Active disputes
56 |
57 | ## Initial scoring model
58 |
59 | Example contributions only; calibrate during pilot.
60 |
61 | | Signal | Contribution |
62 | | ----------------------------------------------------- | -----------: |
63 | | Delivery success below 30%, at least 5 shipped orders | +35 |
64 | | Return rate above 50%, at least 3 shipped orders | +30 |
65 | | Two or more independent courier-confirmed returns | +20 |
66 | | High-value COD order | +10 |
67 | | Same phone creates multiple orders rapidly | +15 |
68 | | Same device uses multiple phones | +20 |
69 | | OTP verified | -25 |
70 | | Previous delivered order with same merchant | -20 |
71 | | Strong multi-provider delivery history | -15 |
72 |
73 | ## Confidence
74 |
75 | Risk score and confidence are separate.
76 |
77 | Examples:
78 |
79 | - 1 returned order out of 1: high negative rate, low confidence.
80 | - 12 returned orders out of 20: high negative rate, high confidence.
81 | - No data: unknown risk, low confidence.
82 |
83 | Confidence must consider sample size, source trust, provider count, freshness, evidence age, and degraded inputs.
84 |
85 | ## Decision thresholds
86 |
87 | | Score | Default decision |
88 | | -----: | ---------------- |
89 | | 0–24 | allow |
90 | | 25–44 | verify |
91 | | 45–64 | review |
92 | | 65–79 | hold |
93 | | 80–100 | block |
94 |
95 | Merchant policies may override actions, but score calculation must remain versioned and auditable.
96 |
97 | ## Unknown handling
98 |
99 | Unknown must not equal safe.
100 |
101 | Recommended response:
102 |
103 | - `risk_level: unknown`
104 | - low confidence
105 | - `decision: verify`
106 | - explicit missing/degraded signal metadata
107 |
108 | Provider failure must not automatically block the customer.
109 |
110 | ## Engine API
111 |
112 | `ts
113 | assessRisk({
114 |   order,
115 |   customer,
116 |   courierFeatures,
117 |   merchantFeatures,
118 |   velocityFeatures,
119 |   verificationFeatures,
120 |   networkFeatures,
121 |   policy,
122 | });
123 | `
124 |
125 | The function returns score, confidence, risk level, decision, signals, recommended actions, and version metadata.
126 |
127 | ## Versioning
128 |
129 | Persist:
130 |
131 | - engine version
132 | - feature version
133 | - policy version
134 | - signal contributions
135 | - confidence inputs
136 |
137 | This allows recalculation, audit, regression comparison, and A/B evaluation.
138 |
139 | ## Source SaaS reuse
140 |
141 | Reusable concepts:
142 |
143 | - Bangladesh phone normalization
144 | - signal contribution shape
145 | - clamping to 0–100
146 | - decision categories and configurable thresholds
147 | - distinction between courier returns and pre-shipping cancellations
148 |
149 | Rewrite requirements:
150 |
151 | - Remove all `fetch`/provider calls from scoring
152 | - Remove database objects from engine inputs
153 | - Remove `fraudchecker.link` dependency
154 | - Replace `name` signal field with canonical `code`
155 | - Do not assign 100% success or zero risk to no-history customers
156 | - Remove duplicate COD-delivery-rate decision implementation
157 | - Replace blacklist logging stubs with a later evidence-backed reputation service
158 | - Centralize threshold/policy versioning
159 |
160 | ## Testing requirements
161 |
162 | - Golden tests for every policy version
163 | - Boundary tests for all score thresholds
164 | - No-data/unknown tests
165 | - Stale/degraded observation tests
166 | - Property tests for score bounds and deterministic output
167 | - Regression fixtures from verified pilot outcomes
168 | - Static/dependency rule preventing network/database/provider imports
169 |
````

### docs/roadmap/implementation-roadmap.md

Bytes: 3022
SHA-256: b8613ab49c748f4fa39db398c5bd6114a23229a8456a1f19d0ef6ed335976150
Lines: 1-100 of 100

```markdown
1 | # Implementation Roadmap
2 |
3 | Work milestone-by-milestone. Do not start a later phase by duplicating unfinished foundation logic.
4 |
5 | ## Phase 0 — Repository and documentation setup
6 |
7 | - Workspace/code/Git/environment/deployment audit
8 | - Install and validate documentation
9 | - Add root agent rules and ADR process
10 | - Add implementation status, decision log, and risk register
11 | - Validate source `multi-store-saas` reuse boundaries
12 | - Define development commands/environment guide
13 | - Initialize Git repository
14 |
15 | Exit criteria:
16 |
17 | - Documentation map is complete and internally consistent.
18 | - Current repository state and conflicts are recorded.
19 | - Security-critical source patterns are explicitly prohibited.
20 | - First implementation milestone and files are identified.
21 |
22 | ## Phase 1 — Foundation
23 |
24 | - Monorepo/tooling/CI
25 | - PostgreSQL and canonical database package
26 | - Secure users/sessions
27 | - Organizations, stores, and memberships
28 | - API key lifecycle with `ozg_test_`/`ozg_live_`
29 | - Plans, entitlements, atomic usage tracking
30 | - Shared types and canonical API/error/event contracts
31 | - Tenant-isolation and migration tests
32 |
33 | ## Phase 2 — Courier intelligence
34 |
35 | - Courier adapter interface and contract suite
36 | - Extract/harden Steadfast Playwright session driver
37 | - Encrypted credentials and sessions
38 | - Session refresh/reconnect jobs
39 | - Steadfast customer observation adapter
40 | - Observation cache/freshness/confidence
41 | - Health monitoring, alerting, and dead-letter behavior
42 |
43 | ## Phase 3 — Risk engine
44 |
45 | - Bangladesh phone normalization
46 | - Canonical feature types/assemblers
47 | - Versioned scoring policy
48 | - Courier, merchant-history, velocity, verification, and later network signals
49 | - Explainable decisions and confidence
50 | - Unknown/degraded behavior
51 | - Assessment/signal persistence
52 | - Golden/regression tests
53 |
54 | ## Phase 4 — Public API and integrations
55 |
56 | - `POST /v1/risk-assessments`
57 | - Assessment read endpoint
58 | - Outcome feedback endpoint
59 | - Webhooks and delivery worker
60 | - WooCommerce plugin rewrite
61 | - Native `multi-store-saas` service adapter
62 | - Integration/contract/idempotency tests
63 |
64 | ## Phase 5 — Verification
65 |
66 | - OTP send/verify
67 | - Provider abstraction
68 | - Rate limiting and abuse protection
69 | - Verification-session/order binding
70 | - Merchant policy rules and fallback behavior
71 |
72 | ## Phase 6 — Dashboard
73 |
74 | - Onboarding and organization/store management
75 | - API key management
76 | - Courier account status/reconnect
77 | - Review queue and assessment detail
78 | - Risk policy settings
79 | - Usage/reports/estimated saved cost
80 | - Team/billing/admin controls
81 |
82 | ## Pilot and calibration
83 |
84 | - Onboard selected merchants
85 | - Track verified outcomes
86 | - Measure false positives/negatives
87 | - Calibrate thresholds and confidence
88 | - Compare old embedded multi-store decisions against Guard
89 | - Do not enable broad automatic blocking until reviewed
90 |
91 | ## Later expansion
92 |
93 | - Evidence-backed shared reputation and disputes
94 | - Pathao/RedX adapters
95 | - Shopify app
96 | - IVR
97 | - Device fingerprinting with privacy safeguards
98 | - Merchant-specific Meta audience exclusion
99 | - ML-assisted ranking after sufficient labeled data
100 |
```

### docs/roadmap/initial-backlog.md

Bytes: 3449
SHA-256: 8c988a00b7fb560eec978f1d11bd99ba9ec3d8ceeabfc57905164383ad5eee41
Lines: 1-111 of 111

```markdown
1 | # Initial Backlog
2 |
3 | ## Epic A — Repository foundation
4 |
5 | - A1 Initialize Git repository with `main`
6 | - A2 Create npm/Turborepo workspace
7 | - A3 Configure TypeScript, lint, formatting, and tests
8 | - A4 Add CI for typecheck/lint/test/migration/security checks
9 | - A5 Add environment validation
10 | - A6 Add ADR template and dependency-boundary checks
11 |
12 | ## Epic B — Identity and API keys
13 |
14 | - B1 Users and secure sessions
15 | - B2 Organizations and memberships
16 | - B3 Store model and strict scope repositories
17 | - B4 API-key creation and one-time reveal
18 | - B5 Key scopes, environments, revoke/rotate/expire
19 | - B6 Plans, entitlements, and atomic usage events
20 | - B7 Audit events and privileged action logging
21 |
22 | ## Epic C — Courier sessions
23 |
24 | - C1 Courier account model
25 | - C2 Encrypted credential storage
26 | - C3 Extract/harden Steadfast Playwright driver
27 | - C4 Session validation
28 | - C5 Scheduled refresh
29 | - C6 Immediate refresh on auth failure
30 | - C7 Reconnect-required workflow
31 | - C8 Health dashboard and alerts
32 | - C9 Redacted failure artifacts and retention
33 |
34 | ## Epic D — Courier observations
35 |
36 | - D1 Canonical adapter interface
37 | - D2 Shared adapter contract tests
38 | - D3 Steadfast observation adapter
39 | - D4 Observation cache and freshness
40 | - D5 Normalized outcome mapping
41 | - D6 Provider rate limiting
42 | - D7 Retry/circuit breaker/dead-letter behavior
43 |
44 | ## Epic E — Risk engine
45 |
46 | - E1 Canonical feature types
47 | - E2 Courier feature extractor
48 | - E3 Merchant-history extractor
49 | - E4 Velocity extractor
50 | - E5 Verification feature extractor
51 | - E6 Versioned pure rule engine
52 | - E7 Confidence model
53 | - E8 Merchant policy thresholds/actions
54 | - E9 Unit, golden, property, and regression tests
55 | - E10 Dependency rule preventing external calls
56 |
57 | ## Epic F — Public API
58 |
59 | - F1 Shared canonical response/error types
60 | - F2 Assessment create endpoint
61 | - F3 Assessment read endpoint
62 | - F4 Courier refresh job endpoint
63 | - F5 Idempotency
64 | - F6 Rate limiting and atomic entitlement enforcement
65 | - F7 Outcome feedback endpoint
66 | - F8 Webhook delivery/signature/retry
67 |
68 | ## Epic G — WooCommerce
69 |
70 | - G1 Plugin settings and secure key handling
71 | - G2 API connection test
72 | - G3 Order-created assessment
73 | - G4 Admin risk display
74 | - G5 Flag/hold/verification/prepayment behavior
75 | - G6 OTP UI and verification
76 | - G7 Outcome sync
77 | - G8 Retry/degraded-state handling
78 | - G9 Manual recheck and idempotency
79 |
80 | ## Epic H — Native multi-store integration
81 |
82 | - H1 Internal Ozzyl Guard service client
83 | - H2 Feature-flagged shadow assessments
84 | - H3 Outcome feedback
85 | - H4 Remove embedded provider calls from risk logic
86 | - H5 Remove duplicate scoring after comparison period
87 |
88 | ## Epic I — Dashboard
89 |
90 | - I1 Onboarding
91 | - I2 Organization/store/team management
92 | - I3 API key management
93 | - I4 Courier connection page
94 | - I5 Review queue
95 | - I6 Assessment detail
96 | - I7 Policies
97 | - I8 Usage and savings reports
98 | - I9 Admin/operations views
99 |
100 | ## P0 acceptance criteria
101 |
102 | - A merchant can create a secure user account, organization, and store.
103 | - A merchant can create test/live API keys and see the raw key once.
104 | - A merchant can connect Steadfast securely.
105 | - Session refresh works asynchronously outside checkout.
106 | - A COD order can be assessed through one canonical endpoint.
107 | - The response includes score, confidence, decision, signals, and freshness/degraded state.
108 | - WooCommerce can store/display the result and send outcomes.
109 | - No raw keys, passwords, cookies, tokens, raw payloads, or OTP values are logged or stored insecurely.
110 | - Tenant-isolation and concurrent quota tests pass.
111 |
```

### docs/roadmap/risk-register.md

Bytes: 5966
SHA-256: 645a147261f5c350d0b2fd6a0dace5d0a87bb860131b333a5cd28e04d1a1788e
Lines: 1-31 of 31

```markdown
1 | # Risk Register
2 |
3 | Updated: 2026-07-16
4 |
5 | | ID | Risk | Severity | Current mitigation | Owner/status |
6 | | ----- | ---------------------------------------------------------------------------------- | -------: | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
7 | | R-001 | Steadfast login selectors/internal endpoint change without notice | High | Adapter/session boundary, fixtures, structured errors, selector monitoring, reconnect flow, degraded cache behavior | Phase 2 / open |
8 | | R-002 | Merchant courier credentials or sessions leak through logs/storage/CI | Critical | Envelope encryption, separate session encryption, redaction, no shell args, least privilege, audit reads | Foundation + Phase 2 / open |
9 | | R-003 | Raw API keys stored or used as dashboard sessions | Critical | One-time reveal, hash-only storage, dedicated user sessions, prohibited by AGENTS/security docs | Phase 1 / open |
10 | | R-004 | Weak password hashing copied from source SaaS | Critical | Argon2id or managed auth only; source implementation prohibited | Phase 1 / open |
11 | | R-005 | Cross-tenant data access or cache/job leakage | Critical | Mandatory scope parameters, composite constraints/indexes, isolation tests, no system store shortcut | Phase 1 onward / open |
12 | | R-006 | Concurrent requests bypass quotas or create duplicate assessments | High | Atomic entitlement reservation, usage events, idempotency transaction, concurrency tests | Phase 1/4 / open |
13 | | R-007 | Unknown/provider failure interpreted as safe or fraudulent | High | Explicit unknown/degraded state, separate confidence, verification recommendation, no auto-block on provider failure | Phase 3/4 / designed |
14 | | R-008 | Duplicate risk engines diverge between API, WooCommerce, and multi-store SaaS | High | One pure package, dependency rules, shared types, native service client, remove embedded engine after shadow rollout | Phase 3/4 / open |
15 | | R-009 | WooCommerce contract mismatch causes incorrect order action | High | Rewrite plugin for lowercase enums, `signals[].code`, explicit success/degraded handling, contract tests | Phase 4 / open |
16 | | R-010 | Unofficial third-party fraud service becomes hidden single point of truth | High | Optional fallback adapter only; source/freshness/confidence exposed; no engine import | Phase 2/3 / designed |
17 | | R-011 | False positives harm legitimate customers/merchants | Critical | Confidence, explainability, merchant policies, OTP/review, pilot confusion matrix, no broad auto-block before calibration | Pilot / open |
18 | | R-012 | Cross-merchant reputation creates privacy, abuse, or dispute harm | Critical | Post-MVP only, evidence lineage, independent corroboration, decay, disputes, legal/privacy review | Later / deferred |
19 | | R-013 | Deployment selected before browser-worker/database/queue requirements are known | Medium | Deployment ADR pending; keep components separable and infrastructure-agnostic | Phase 1 / open |
20 | | R-014 | Migration/schema mismatch or applied migration edits | High | Canonical database package, append-only migrations, clean/upgrade verification, CI checks | Phase 1 onward / open |
21 | | R-015 | Scraper runs synchronously and delays checkout | High | Session/sync workers, cache-first assessment, bounded latency, async refresh | Phase 2/4 / designed |
22 | | R-016 | Scheduled scraper failures silently succeed | High | Remove `continue-on-error`, structured job records, alerts, dead-letter handling, failure exit status | Phase 2 / open |
23 | | R-017 | Encryption key rotation makes credentials unavailable | High | Versioned envelope encryption, rotation/runbook, staged re-encryption, restore tests | Phase 1/2 / open |
24 | | R-018 | Outcome feedback is omitted, preventing calibration | High | Outcome endpoint/plugin/native integration included in MVP acceptance criteria | Phase 4 / open |
25 | | R-019 | Provider terms/authorization do not permit commercial internal-endpoint use | High | Merchant authorization record, terms/legal review before commercial scale, replaceable adapter boundary | Phase 2 / blocking for scale |
26 | | R-020 | Empty repository causes documentation to be mistaken for implemented functionality | Medium | Implementation status explicitly separates planned/in-progress/implemented and must be updated each milestone | Phase 0 / mitigated |
27 |
28 | ## Review cadence
29 |
30 | Review this register at every milestone completion and before production/pilot changes. Add evidence, owner, target date, and residual risk as implementation begins.
31 |
```

### docs/security/security-privacy.md

Bytes: 4187
SHA-256: 63a1fecd9acf9244cc417144f35de75bb051e1543fac05752ce553dfd3e91777
Lines: 1-127 of 127

```markdown
1 | # Security and Privacy
2 |
3 | ## Authentication
4 |
5 | - Dedicated user identity system
6 | - Argon2id for passwords or managed authentication
7 | - Secure HTTP-only opaque sessions
8 | - Session rotation on login and privilege change
9 | - CSRF protection for browser actions
10 | - MFA for organization owners/admins later
11 | - Role-based access control
12 |
13 | API keys are service credentials and must never be used as dashboard login sessions.
14 |
15 | ## API keys
16 |
17 | - Generate with cryptographically secure random bytes
18 | - Prefix by environment: `ozg_test_` or `ozg_live_`
19 | - Store only a strong hash
20 | - Display raw key once
21 | - Support rotation, revocation, expiry, scopes, last-used time, and optional origin/IP restrictions
22 | - Never place raw keys in metadata, logs, analytics, URLs, or cookies
23 |
24 | ## Sensitive data
25 |
26 | Never log:
27 |
28 | - Raw passwords
29 | - Courier cookies or tokens
30 | - Raw API keys
31 | - OTP plaintext
32 | - Full phone number where masking is sufficient
33 | - Access tokens
34 | - Raw courier payloads unless explicitly encrypted, access-controlled, retained briefly, and required for evidence/debugging
35 |
36 | All exception/error serialization must pass through a central redaction layer.
37 |
38 | ## Phone data
39 |
40 | - Normalize consistently
41 | - Use keyed hash/HMAC for cross-table matching where appropriate
42 | - Encrypt raw phone only when operational lookup is necessary
43 | - Separate analytics identity from operational contact data
44 | - Document retention and deletion behavior
45 |
46 | ## Credential storage
47 |
48 | - Envelope encryption
49 | - Key version stored with ciphertext
50 | - Master keys outside database
51 | - Rotation procedure
52 | - Strict service identity permissions
53 | - Separate encryption context/keys for credentials and sessions
54 | - Audit credential reads and decrypt operations
55 | - Decryption failure must fail closed
56 |
57 | ## Multi-tenancy
58 |
59 | Every merchant-owned record includes organization/store scope. Repository methods require scope parameters rather than optional filters.
60 |
61 | Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, or logs.
62 |
63 | ## Shared reputation safeguards
64 |
65 | - No single merchant report should globally block a customer.
66 | - Prefer courier-confirmed outcomes.
67 | - Require independent evidence for high-impact reputation.
68 | - Apply time decay.
69 | - Provide dispute and correction mechanisms.
70 | - Detect abusive or low-quality reporters.
71 | - Preserve evidence lineage.
72 | - Do not launch cross-merchant reputation in the foundation MVP without privacy/legal review.
73 |
74 | ## OTP security
75 |
76 | - 6-digit cryptographically random OTP
77 | - Store only hash
78 | - 5–10 minute expiry
79 | - Maximum attempts
80 | - Per-phone, per-IP, per-store, and per-organization rate limits
81 | - Bind OTP to verification session/order/purpose
82 | - Do not expose delivery success when provider actually failed
83 | - Do not log OTP values
84 |
85 | ## Web security
86 |
87 | - CSRF protection for dashboard actions
88 | - CSP and secure headers
89 | - Input validation and output encoding
90 | - SSRF protection in webhook/custom URL features
91 | - HMAC-signed webhooks
92 | - Timestamp and replay prevention
93 | - Request size limits
94 | - Idempotency abuse protection
95 | - Safe CORS configuration by integration type
96 |
97 | ## Courier automation security
98 |
99 | - Playwright runs in isolated workers with least privilege
100 | - No browser execution in synchronous API/checkout paths
101 | - Screenshots/traces are redacted, access-controlled, and short-lived
102 | - Provider credentials are not passed through shell arguments
103 | - Session refresh failures are visible; they are never silently ignored
104 | - Provider terms and merchant authorization must be reviewed before commercial scale
105 |
106 | ## Operational security
107 |
108 | - Audit logs
109 | - Secret rotation
110 | - Dependency scanning
111 | - SAST and secret scanning
112 | - Backups and restore testing
113 | - Incident response runbook
114 | - Key compromise and courier credential compromise runbooks
115 | - Production access review and break-glass procedure
116 |
117 | ## Source SaaS findings that must not be copied
118 |
119 | - Custom SHA-256 password hashing
120 | - Raw API key saved in metadata
121 | - Raw API key used as a login cookie
122 | - Full phone numbers logged by blacklist stubs
123 | - Shell commands containing session payloads
124 | - Hardcoded infrastructure identifiers
125 | - Decryption fallback to plaintext
126 | - Broad unaudited cross-store lookup
127 |
```

### docs/testing/testing-strategy.md

Bytes: 2893
SHA-256: 619de7bcb984783efc2156322a07c380b14f08569bfefec8c06a89eaa0534383
Lines: 1-118 of 118

```markdown
1 | # Testing Strategy
2 |
3 | ## Unit tests
4 |
5 | - Bangladesh phone normalization
6 | - Risk signal calculation
7 | - Confidence calculation
8 | - Decision threshold mapping
9 | - Provider response normalization
10 | - Status mapping
11 | - Encryption helpers
12 | - OTP expiry and attempt limits
13 | - API key generation/prefix/hash verification
14 | - Policy parsing/versioning
15 |
16 | ## Contract tests
17 |
18 | Each courier adapter must pass a shared contract suite:
19 |
20 | - Returns canonical observation
21 | - Handles timeout
22 | - Handles expired session
23 | - Never leaks credentials
24 | - Maps malformed responses to structured errors
25 | - Preserves source/freshness metadata
26 | - Separates actual return from pre-shipping cancellation
27 |
28 | Public API contract tests cover:
29 |
30 | - Canonical success/error response
31 | - Lowercase enums and `signals[].code`
32 | - Unknown/degraded behavior
33 | - Idempotent replay
34 | - Test/live key isolation
35 |
36 | ## Integration tests
37 |
38 | - User/session authentication
39 | - API key creation, one-time reveal, authentication, revocation, and rotation
40 | - Atomic quota enforcement under concurrency
41 | - Assessment persistence
42 | - OTP send/verify
43 | - Courier session refresh
44 | - Webhook signing and retry
45 | - Multi-tenant isolation
46 | - Organization/store membership authorization
47 |
48 | ## End-to-end tests
49 |
50 | - Merchant signup and store creation
51 | - Create a test/live API key
52 | - Connect Steadfast account
53 | - Assess WooCommerce COD order
54 | - Review high-risk order
55 | - Verify OTP
56 | - Submit courier outcome
57 | - View usage and savings report
58 |
59 | ## Security tests
60 |
61 | - Tenant data leakage
62 | - API key replay/revocation
63 | - Raw key absence from database/metadata/logs
64 | - Brute-force OTP
65 | - CSRF
66 | - SSRF
67 | - Webhook replay
68 | - Secret redaction
69 | - Injection attacks
70 | - Session fixation/rotation
71 | - Credential decryption failure
72 |
73 | ## Scraper tests
74 |
75 | - Login page selector fixtures
76 | - Successful cookie extraction
77 | - Invalid credentials
78 | - CAPTCHA/2FA detection
79 | - Provider HTML changes
80 | - Browser cleanup on failure
81 | - Login-state/session validation
82 | - Redacted screenshot/trace behavior
83 | - Structured failure codes
84 |
85 | Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.
86 |
87 | ## Architecture tests
88 |
89 | - `packages/risk-engine` cannot import network/database/provider/browser packages
90 | - API routes cannot import provider session drivers directly
91 | - All schema comes from `packages/database`
92 | - All public response types come from `packages/shared-types`
93 | - Tenant-scoped repositories require a scope argument
94 |
95 | ## Pilot evaluation
96 |
97 | Track a confusion matrix against real verified outcomes:
98 |
99 | - true positive
100 | - false positive
101 | - true negative
102 | - false negative
103 |
104 | Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.
105 |
106 | ## Required CI gates
107 |
108 | - formatting check
109 | - lint
110 | - typecheck
111 | - unit tests
112 | - contract tests
113 | - integration tests with PostgreSQL
114 | - migration verification
115 | - dependency audit
116 | - secret scanning
117 | - architecture/dependency-boundary tests
118 |
```

### tracker.yml

Bytes: 4737
SHA-256: 4ed9b674cf97d5c331941bfe4f47c6e24b37a1faf9cc264ccb933e33152419fe
Lines: 1-142 of 142

```yaml
  1 | schema_version: 1
  2 | project:
  3 |   name: Ozzyl Guard
  4 |   repository: rahmatullahboss/ozzyl-guard
  5 |   branch: main
  6 |   visibility: private
  7 |   status: mvp-foundation-complete
  8 |   last_updated: 2026-07-16
  9 |
 10 | agent_entrypoint:
 11 |   purpose: Continuation tracker for developers and AI agents.
 12 |   read_first:
 13 |     - tracker.yml
 14 |     - AGENTS.md
 15 |     - README.md
 16 |     - .ai-bridge/current-plan.md
 17 |     - .ai-bridge/implementation-status.md
 18 |     - .ai-bridge/decisions.md
 19 |     - .ai-bridge/pro-context.md
 20 |     - docs/README.md
 21 |     - docs/adr/README.md
 22 |   workflow:
 23 |     - inspect_current_repository_state
 24 |     - search_existing_code_schema_routes_and_docs
 25 |     - read_relevant_specs_and_adrs
 26 |     - implement_the_smallest_coherent_change
 27 |     - add_failure_and_tenant_isolation_tests
 28 |     - run_npm_verify
 29 |     - update_docs_status_and_tracker
 30 |     - commit_and_push_after_green_verification
 31 |
 32 | source_of_truth:
 33 |   architecture: docs/architecture/system-architecture.md
 34 |   api: docs/api/api-specification.md
 35 |   database: docs/database/database-design.md
 36 |   courier: docs/courier/courier-intelligence.md
 37 |   risk_engine: docs/risk-engine/risk-engine.md
 38 |   integrations: docs/integrations/integrations.md
 39 |   security: docs/security/security-privacy.md
 40 |   testing: docs/testing/testing-strategy.md
 41 |   operations: docs/operations/operations-observability.md
 42 |   roadmap: docs/roadmap/implementation-roadmap.md
 43 |   backlog: docs/roadmap/initial-backlog.md
 44 |   risks: docs/roadmap/risk-register.md
 45 |   current_plan: .ai-bridge/current-plan.md
 46 |   implementation_status: .ai-bridge/implementation-status.md
 47 |   decisions: .ai-bridge/decisions.md
 48 |   full_context: .ai-bridge/pro-context.md
 49 |
 50 | invariants:
 51 |   - exactly_one_canonical_risk_engine
 52 |   - risk_engine_has_no_external_io
 53 |   - courier_access_only_through_adapters_and_workers
 54 |   - api_handlers_have_no_scoring_logic
 55 |   - merchant_data_requires_organization_and_store_scope
 56 |   - unknown_data_is_not_safe_by_default
 57 |   - provider_failure_is_not_an_automatic_decision
 58 |   - user_sessions_are_separate_from_service_access
 59 |   - applied_migrations_are_immutable
 60 |   - all_integrations_use_the_versioned_api_contract
 61 |   - long_running_provider_work_is_asynchronous
 62 |
 63 | implemented:
 64 |   - typescript_monorepo_and_ci
 65 |   - postgresql_schema_and_five_migrations
 66 |   - organization_store_membership_and_plan_foundation
 67 |   - usage_metering_and_audit_foundation
 68 |   - pure_versioned_explainable_risk_engine
 69 |   - canonical_v1_api_and_postgresql_repositories
 70 |   - steadfast_adapter_and_browser_session_worker
 71 |   - postgresql_courier_sync_worker
 72 |   - verification_and_webhook_libraries
 73 |   - woocommerce_shopify_custom_and_native_adapters
 74 |   - merchant_dashboard_foundation
 75 |   - platform_admin_foundation
 76 |   - docker_compose_baseline
 77 |
 78 | verification:
 79 |   command: npm run verify
 80 |   last_verified: 2026-07-16
 81 |   status: passed
 82 |   results:
 83 |     migrations: 5_of_5
 84 |     architecture_boundaries: passed
 85 |     typecheck: 18_of_18
 86 |     test_tasks: 26_of_26
 87 |     assertions: 24
 88 |     builds: 18_of_18
 89 |     php_syntax: passed
 90 |     high_critical_dependency_check: passed
 91 |     documentation_links: 0_broken
 92 |   local_limitations:
 93 |     - docker_and_postgresql_are_not_available_in_this_workspace
 94 |     - clean_database_apply_runs_in_ci_with_postgresql_16
 95 |
 96 | migrations:
 97 |   immutable: true
 98 |   files:
 99 |     - packages/database/migrations/0001_foundation.sql
100 |     - packages/database/migrations/0002_courier.sql
101 |     - packages/database/migrations/0003_risk.sql
102 |     - packages/database/migrations/0004_verification_events.sql
103 |     - packages/database/migrations/0005_durable_operations.sql
104 |
105 | external_dependencies:
106 |   - authorized_steadfast_test_account
107 |   - provider_authorization_review
108 |   - production_managed_encryption_service
109 |   - otp_provider_account
110 |   - hosting_database_queue_cache_and_observability_decisions
111 |   - pilot_outcome_data
112 |
113 | next_milestone:
114 |   name: production-hardening-and-pilot-readiness
115 |   tasks:
116 |     - record_infrastructure_adrs
117 |     - connect_dashboard_and_admin_to_authenticated_live_data
118 |     - add_postgresql_repository_concurrency_and_tenant_tests
119 |     - validate_steadfast_with_an_authorized_account
120 |     - implement_the_selected_otp_runner
121 |     - add_durable_event_and_verification_runners
122 |     - enable_native_adapter_shadow_mode
123 |     - run_a_selected_merchant_pilot
124 |     - calibrate_decisions_before_broad_automatic_blocking
125 |
126 | release_policy:
127 |   branch: main
128 |   before_push:
129 |     - npm_run_verify_passes
130 |     - documentation_and_tracker_are_current
131 |     - repository_review_is_clean
132 |   rules:
133 |     - no_force_push_to_main
134 |     - do_not_edit_applied_migrations
135 |     - use_descriptive_commits
136 |
137 | notes:
138 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
139 |   - dashboard_and_admin_are_ui_foundations_pending_live_data
140 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
141 |   - update_this_file_after_every_material_milestone
142 |
```

### docs/adr/README.md

Bytes: 1096
SHA-256: 2e7f421fc7fa889c8be5990b675531fcbc06bf12485def16c72e9ad532480662
Lines: 1-38 of 38

```markdown
1 | # Architecture Decision Records
2 |
3 | ADRs capture durable architectural decisions, alternatives, consequences, and supersession history.
4 |
5 | ## Status values
6 |
7 | - Proposed
8 | - Accepted
9 | - Superseded
10 | - Deprecated
11 | - Rejected
12 |
13 | ## Rules
14 |
15 | 1. Do not silently change an accepted architectural boundary.
16 | 2. Add a new ADR or explicitly supersede an existing one.
17 | 3. Link implementation and migration work to the relevant ADR.
18 | 4. Record unresolved choices as Proposed, not as implied facts.
19 | 5. Update `.ai-bridge/decisions.md` with the active summary.
20 |
21 | ## Accepted ADRs
22 |
23 | - [0001 — Standalone service](0001-standalone-service.md)
24 | - [0002 — Courier adapter boundary](0002-courier-adapter-boundary.md)
25 | - [0003 — Keep Steadfast session scraper](0003-keep-steadfast-session-scraper.md)
26 | - [0004 — Foundation technology direction](0004-foundation-technology-direction.md)
27 |
28 | ## Pending ADRs
29 |
30 | - Authentication provider/implementation
31 | - Queue/broker
32 | - Deployment platform
33 | - PostgreSQL provider
34 | - KMS/vault and envelope-encryption implementation
35 | - Cache/session storage
36 |
37 | Copy [template.md](template.md) for new decisions.
38 |
```

### eslint.config.js

Bytes: 1119
SHA-256: f15cbeb1b1ffccf47d9ffccee3a0273a6027aa002050633beb7d17e20bac0e1e
Lines: 1-44 of 44

```javascript
 1 | import js from '@eslint/js';
 2 | import tseslint from 'typescript-eslint';
 3 |
 4 | export default tseslint.config(
 5 |   {
 6 |     ignores: [
 7 |       '**/dist/**',
 8 |       '**/node_modules/**',
 9 |       'codexpro/**',
10 |       'coverage/**',
11 |       'playwright-report/**',
12 |       'test-results/**',
13 |       'eslint.config.js',
14 |       'vitest.config.ts',
15 |       'scripts/**/*.mjs',
16 |     ],
17 |   },
18 |   js.configs.recommended,
19 |   ...tseslint.configs.recommendedTypeChecked,
20 |   {
21 |     languageOptions: {
22 |       parserOptions: {
23 |         projectService: true,
24 |         tsconfigRootDir: import.meta.dirname,
25 |       },
26 |     },
27 |     rules: {
28 |       '@typescript-eslint/consistent-type-imports': 'error',
29 |       '@typescript-eslint/no-floating-promises': 'error',
30 |       '@typescript-eslint/no-misused-promises': 'error',
31 |       '@typescript-eslint/no-explicit-any': 'error',
32 |       '@typescript-eslint/require-await': 'off',
33 |       '@typescript-eslint/unbound-method': 'off',
34 |     },
35 |   },
36 |   {
37 |     files: ['**/*.test.ts', '**/*.config.ts'],
38 |     rules: {
39 |       '@typescript-eslint/no-unsafe-assignment': 'off',
40 |       '@typescript-eslint/no-unsafe-member-access': 'off',
41 |     },
42 |   },
43 | );
44 |
```

### turbo.json

Bytes: 383
SHA-256: 3b94415e491dd23e9f93d07750b7bec0491bcc33cdb1b9deffb1177220cb8949
Lines: 1-22 of 22

```json
 1 | {
 2 |   "$schema": "https://turbo.build/schema.json",
 3 |   "tasks": {
 4 |     "build": {
 5 |       "dependsOn": ["^build"],
 6 |       "outputs": ["dist/**"]
 7 |     },
 8 |     "typecheck": {
 9 |       "dependsOn": ["^typecheck"],
10 |       "outputs": []
11 |     },
12 |     "test": {
13 |       "dependsOn": ["^build"],
14 |       "outputs": ["coverage/**"]
15 |     },
16 |     "dev": {
17 |       "cache": false,
18 |       "persistent": true
19 |     }
20 |   }
21 | }
22 |
```

### docs/adr/0001-standalone-service.md

Bytes: 1063
SHA-256: 86584a6e6ca3c7d92229cfdb96b688dd132640ae00c97258c562ef79c8f12e0b
Lines: 1-39 of 39

```markdown
1 | # ADR 0001: Build Ozzyl Guard as a Standalone Service
2 |
3 | ## Status
4 |
5 | Accepted
6 |
7 | ## Date
8 |
9 | 2026-07-16
10 |
11 | ## Context
12 |
13 | Fraud detection currently exists inside a broader multi-store commerce application. WooCommerce, Shopify, custom websites, and the commerce platform itself must use the same intelligence and scoring logic.
14 |
15 | ## Decision
16 |
17 | Create a standalone Ozzyl Guard service. The commerce platform becomes a client through a stable internal/public API.
18 |
19 | ## Consequences
20 |
21 | ### Positive
22 |
23 | - One canonical risk engine
24 | - Independent scaling and billing
25 | - Platform-neutral integrations
26 | - Clear data ownership and contracts
27 | - Provider/session workers can scale independently
28 |
29 | ### Negative / trade-offs
30 |
31 | - Network boundary and service operations
32 | - Migration effort
33 | - Need for robust authentication, idempotency, webhooks, and degraded behavior
34 | - Additional deployment/database/queue decisions
35 |
36 | ## Migration / rollout
37 |
38 | Implement the standalone foundation first. Integrate `multi-store-saas` behind a feature flag and shadow/compare decisions before removing embedded risk logic.
39 |
```

### docs/adr/0002-courier-adapter-boundary.md

Bytes: 928
SHA-256: ddcab506af43ca8686147f774165e2e80cb6d3a2c1c865b150b4ff22fa7ad8fc
Lines: 1-31 of 31

```markdown
1 | # ADR 0002: Courier Data Must Use Provider Adapters
2 |
3 | ## Status
4 |
5 | Accepted
6 |
7 | ## Date
8 |
9 | 2026-07-16
10 |
11 | ## Decision
12 |
13 | All courier API access, browser automation, session handling, provider error mapping, and response normalization must live behind courier adapter/session-worker boundaries. The risk engine receives canonical normalized features only.
14 |
15 | ## Rationale
16 |
17 | Courier interfaces can change without forcing changes to scoring, public API, plugins, or dashboard logic.
18 |
19 | ## Consequences
20 |
21 | - Provider-specific changes are isolated.
22 | - Shared adapter contract tests become mandatory.
23 | - Risk engine remains deterministic and testable.
24 | - Additional orchestration/storage layers are required.
25 |
26 | ## Enforcement
27 |
28 | - `packages/risk-engine` cannot import provider/network/database/browser packages.
29 | - API routes cannot import a provider session driver directly.
30 | - Provider failures map to structured errors and explicit degraded/unknown features.
31 |
```

### docs/adr/0003-keep-steadfast-session-scraper.md

Bytes: 1147
SHA-256: c38d984eb20082a12e859bf38bfd829e124a4ce6334fbe3b5fcbf50392b88ca8
Lines: 1-33 of 33

```markdown
1 | # ADR 0003: Keep the Steadfast Session Scraper
2 |
3 | ## Status
4 |
5 | Accepted for pilot, with hardening
6 |
7 | ## Date
8 |
9 | 2026-07-16
10 |
11 | ## Decision
12 |
13 | Retain the Playwright login/session extraction approach for Steadfast because it already obtains merchant-authorized session data and permits efficient JSON calls after login.
14 |
15 | ## Conditions
16 |
17 | - Run asynchronously outside checkout.
18 | - Encrypt credentials and sessions separately.
19 | - Add login validation, selector monitoring, CAPTCHA/2FA detection, and reconnect handling.
20 | - Treat provider internal endpoints as unstable.
21 | - Maintain fallback/degraded behavior.
22 | - Do not pass credentials/session payloads through shell command arguments.
23 | - Decryption failures fail closed.
24 | - Scheduled/per-account failures are visible and alertable.
25 | - Review provider terms and merchant authorization requirements before commercial scale.
26 |
27 | ## Consequences
28 |
29 | - Faster pilot using an already proven flow.
30 | - Ongoing maintenance risk from provider UI/internal endpoint changes.
31 | - Browser workers require isolated runtime and stronger operational monitoring.
32 | - Adapter boundary permits replacement without changing the risk engine/API contract.
33 |
```

### docs/adr/0004-foundation-technology-direction.md

Bytes: 1757
SHA-256: d30e8f39b08125e7fdde49eb5a4fdecfe7e36c8f00cfe10033c1a68e1027cc81
Lines: 1-60 of 60

```markdown
1 | # ADR 0004: Foundation Technology Direction
2 |
3 | ## Status
4 |
5 | Accepted for Phase 1; deployment details remain pending
6 |
7 | ## Date
8 |
9 | 2026-07-16
10 |
11 | ## Context
12 |
13 | The Ozzyl Guard workspace began empty. The source `multi-store-saas` repository already uses npm workspaces, Turborepo, TypeScript, Drizzle, React Router, Vitest, Playwright, and Cloudflare D1/Workers. Ozzyl Guard requires a standalone API, relational tenancy/billing, queue workers, and Playwright automation.
14 |
15 | ## Decision drivers
16 |
17 | - Reuse team conventions without inheriting insecure/domain-coupled code
18 | - Strong relational integrity and concurrency
19 | - Shared TypeScript contracts
20 | - Independent API/dashboard/worker deployment
21 | - Testable browser automation
22 |
23 | ## Decision
24 |
25 | Use:
26 |
27 | - Node.js 20+
28 | - TypeScript
29 | - npm workspaces
30 | - Turborepo
31 | - PostgreSQL as canonical production database
32 | - Drizzle ORM and append-only migrations initially
33 | - Vitest for unit/contract/integration tests
34 | - Playwright for browser/session/E2E tests
35 | - React Router/React for dashboard reuse where beneficial
36 |
37 | Do not select the final deployment, queue, PostgreSQL vendor, or KMS implementation in this ADR.
38 |
39 | ## Consequences
40 |
41 | ### Positive
42 |
43 | - Familiar monorepo/tooling conventions
44 | - Shared types across API/workers/integrations
45 | - PostgreSQL supports relational integrity, transactions, billing concurrency, and analytics
46 | - Provider/browser workers remain separable
47 |
48 | ### Negative / trade-offs
49 |
50 | - Requires migration away from D1-specific schema/code
51 | - More infrastructure than a single Cloudflare application
52 | - Pending operational decisions must be resolved before production
53 |
54 | ## Validation
55 |
56 | - Clean developer setup and root commands
57 | - PostgreSQL migration/integration tests
58 | - Dependency-boundary tests
59 | - Separate API and Playwright worker builds
60 |
```

### docs/adr/template.md

Bytes: 706
SHA-256: ad860447c89eaa7968288f596eef7aca535b8df389a8439b10f74881fa3c349c
Lines: 1-53 of 53

```markdown
1 | # ADR NNNN: Title
2 |
3 | ## Status
4 |
5 | Proposed
6 |
7 | ## Date
8 |
9 | YYYY-MM-DD
10 |
11 | ## Context
12 |
13 | Describe the problem, constraints, current state, and why a decision is required.
14 |
15 | ## Decision drivers
16 |
17 | - Driver
18 |
19 | ## Considered options
20 |
21 | 1. Option A
22 | 2. Option B
23 |
24 | ## Decision
25 |
26 | State the selected option precisely.
27 |
28 | ## Consequences
29 |
30 | ### Positive
31 |
32 | - Consequence
33 |
34 | ### Negative / trade-offs
35 |
36 | - Consequence
37 |
38 | ## Security and privacy impact
39 |
40 | Describe secret, identity, tenancy, personal-data, and abuse implications.
41 |
42 | ## Migration / rollout
43 |
44 | Describe implementation order, compatibility, feature flags, data migration, and rollback.
45 |
46 | ## Validation
47 |
48 | List tests, metrics, or operational evidence required.
49 |
50 | ## Supersedes / superseded by
51 |
52 | None.
53 |
```

### packages/database/migrations/0001_foundation.sql

Bytes: 4569
SHA-256: c0f2060b45ff69dac94e79c60d6e9ef80063777ba2f5b752cb86a614e752a218
Lines: 1-123 of 123

```text
  1 | create table plans (
  2 |   id text primary key,
  3 |   code text not null unique,
  4 |   name text not null,
  5 |   entitlements jsonb not null,
  6 |   active boolean not null default true,
  7 |   created_at timestamptz not null default now(),
  8 |   updated_at timestamptz not null default now()
  9 | );
 10 |
 11 | create table users (
 12 |   id text primary key,
 13 |   email text not null unique,
 14 |   password_hash text,
 15 |   managed_auth_id text unique,
 16 |   email_verified_at timestamptz,
 17 |   status text not null default 'active',
 18 |   created_at timestamptz not null default now(),
 19 |   updated_at timestamptz not null default now(),
 20 |   constraint users_auth_method_check check (password_hash is not null or managed_auth_id is not null)
 21 | );
 22 |
 23 | create table user_sessions (
 24 |   id text primary key,
 25 |   user_id text not null references users(id) on delete cascade,
 26 |   token_hash text not null unique,
 27 |   expires_at timestamptz not null,
 28 |   revoked_at timestamptz,
 29 |   created_at timestamptz not null default now()
 30 | );
 31 | create index user_sessions_user_idx on user_sessions(user_id);
 32 | create index user_sessions_expiry_idx on user_sessions(expires_at);
 33 |
 34 | create table organizations (
 35 |   id text primary key,
 36 |   name text not null,
 37 |   slug text not null unique,
 38 |   plan_id text references plans(id),
 39 |   status text not null default 'active',
 40 |   created_at timestamptz not null default now(),
 41 |   updated_at timestamptz not null default now()
 42 | );
 43 |
 44 | create table organization_members (
 45 |   organization_id text not null references organizations(id) on delete cascade,
 46 |   user_id text not null references users(id) on delete cascade,
 47 |   role text not null,
 48 |   permissions jsonb not null default '{}'::jsonb,
 49 |   created_at timestamptz not null default now(),
 50 |   updated_at timestamptz not null default now(),
 51 |   primary key (organization_id, user_id)
 52 | );
 53 | create index organization_members_user_idx on organization_members(user_id);
 54 |
 55 | create table stores (
 56 |   id text primary key,
 57 |   organization_id text not null references organizations(id) on delete cascade,
 58 |   name text not null,
 59 |   platform text not null,
 60 |   external_store_id text,
 61 |   timezone text not null default 'Asia/Dhaka',
 62 |   currency text not null default 'BDT',
 63 |   status text not null default 'active',
 64 |   created_at timestamptz not null default now(),
 65 |   updated_at timestamptz not null default now(),
 66 |   unique (organization_id, platform, external_store_id)
 67 | );
 68 | create index stores_organization_idx on stores(organization_id);
 69 |
 70 | create table api_keys (
 71 |   id text primary key,
 72 |   organization_id text not null references organizations(id) on delete cascade,
 73 |   store_id text references stores(id) on delete cascade,
 74 |   environment text not null check (environment in ('test', 'live')),
 75 |   key_hash text not null unique,
 76 |   key_prefix text not null,
 77 |   name text not null,
 78 |   scopes jsonb not null default '[]'::jsonb,
 79 |   allowed_origins jsonb not null default '[]'::jsonb,
 80 |   last_used_at timestamptz,
 81 |   expires_at timestamptz,
 82 |   revoked_at timestamptz,
 83 |   created_at timestamptz not null default now(),
 84 |   updated_at timestamptz not null default now()
 85 | );
 86 | create index api_keys_scope_idx on api_keys(organization_id, store_id);
 87 | create index api_keys_prefix_idx on api_keys(key_prefix);
 88 |
 89 | create table usage_events (
 90 |   id text primary key,
 91 |   organization_id text not null references organizations(id) on delete cascade,
 92 |   api_key_id text references api_keys(id) on delete set null,
 93 |   event_type text not null,
 94 |   units integer not null default 1 check (units > 0),
 95 |   request_id text not null,
 96 |   response_ms integer,
 97 |   status_code integer,
 98 |   period text not null,
 99 |   created_at timestamptz not null default now(),
100 |   unique (organization_id, event_type, request_id)
101 | );
102 | create index usage_events_period_idx on usage_events(organization_id, period);
103 |
104 | create table audit_events (
105 |   id text primary key,
106 |   organization_id text references organizations(id) on delete set null,
107 |   actor_type text not null,
108 |   actor_id text,
109 |   action text not null,
110 |   target_type text,
111 |   target_id text,
112 |   metadata jsonb not null default '{}'::jsonb,
113 |   created_at timestamptz not null default now()
114 | );
115 | create index audit_events_scope_idx on audit_events(organization_id, created_at desc);
116 |
117 | insert into plans (id, code, name, entitlements) values
118 |   ('plan_free', 'free', 'Free', '{"monthlyAssessments":100,"stores":1,"teamMembers":1}'),
119 |   ('plan_starter', 'starter', 'Starter', '{"monthlyAssessments":5000,"stores":3,"teamMembers":5}'),
120 |   ('plan_pro', 'pro', 'Pro', '{"monthlyAssessments":50000,"stores":20,"teamMembers":25}'),
121 |   ('plan_enterprise', 'enterprise', 'Enterprise', '{"monthlyAssessments":null,"stores":null,"teamMembers":null}')
122 | on conflict (id) do nothing;
123 |
```

### packages/database/migrations/0002_courier.sql

Bytes: 2534
SHA-256: cc052f00671d2380b0fa68fa473f8bc22d88d804d540638dc59ce849f9741133
Lines: 1-69 of 69

```text
 1 | create table courier_accounts (
 2 |   id text primary key,
 3 |   store_id text not null references stores(id) on delete cascade,
 4 |   provider text not null,
 5 |   status text not null default 'pending',
 6 |   credential_version integer not null default 1,
 7 |   last_connected_at timestamptz,
 8 |   last_success_at timestamptz,
 9 |   last_failure_at timestamptz,
10 |   failure_code text,
11 |   created_at timestamptz not null default now(),
12 |   updated_at timestamptz not null default now(),
13 |   unique (store_id, provider)
14 | );
15 |
16 | create table courier_credentials (
17 |   courier_account_id text primary key references courier_accounts(id) on delete cascade,
18 |   encrypted_payload text not null,
19 |   encryption_key_version text not null,
20 |   created_at timestamptz not null default now(),
21 |   updated_at timestamptz not null default now()
22 | );
23 |
24 | create table courier_sessions (
25 |   courier_account_id text primary key references courier_accounts(id) on delete cascade,
26 |   encrypted_payload text not null,
27 |   encryption_key_version text not null,
28 |   expires_at timestamptz,
29 |   validated_at timestamptz,
30 |   status text not null,
31 |   created_at timestamptz not null default now(),
32 |   updated_at timestamptz not null default now()
33 | );
34 |
35 | create table courier_observations (
36 |   id text primary key,
37 |   store_id text not null references stores(id) on delete cascade,
38 |   provider text not null,
39 |   phone_hash text not null,
40 |   total_orders integer not null check (total_orders >= 0),
41 |   delivered_orders integer not null check (delivered_orders >= 0),
42 |   returned_orders integer not null check (returned_orders >= 0),
43 |   cancelled_before_shipping integer not null check (cancelled_before_shipping >= 0),
44 |   success_rate numeric(5,4),
45 |   confidence numeric(5,4) not null check (confidence between 0 and 1),
46 |   source_type text not null,
47 |   observed_at timestamptz not null,
48 |   expires_at timestamptz not null,
49 |   raw_payload_encrypted text,
50 |   created_at timestamptz not null default now()
51 | );
52 | create index courier_observations_latest_idx
53 |   on courier_observations(store_id, phone_hash, provider, observed_at desc);
54 |
55 | create table courier_jobs (
56 |   id text primary key,
57 |   courier_account_id text not null references courier_accounts(id) on delete cascade,
58 |   job_type text not null,
59 |   status text not null,
60 |   attempts integer not null default 0,
61 |   scheduled_at timestamptz not null,
62 |   started_at timestamptz,
63 |   completed_at timestamptz,
64 |   error_code text,
65 |   created_at timestamptz not null default now(),
66 |   updated_at timestamptz not null default now()
67 | );
68 | create index courier_jobs_schedule_idx on courier_jobs(status, scheduled_at);
69 |
```

### packages/database/migrations/0003_risk.sql

Bytes: 2313
SHA-256: 7ab29a70943c20a0905804336b760d8f2b6cd6f171b9dbdecff489e52d69352c
Lines: 1-62 of 62

```text
 1 | create table risk_policies (
 2 |   id text primary key,
 3 |   store_id text not null references stores(id) on delete cascade,
 4 |   version text not null,
 5 |   policy jsonb not null,
 6 |   active boolean not null default false,
 7 |   created_at timestamptz not null default now(),
 8 |   updated_at timestamptz not null default now(),
 9 |   unique (store_id, version)
10 | );
11 | create unique index risk_policies_one_active_idx on risk_policies(store_id) where active = true;
12 |
13 | create table risk_assessments (
14 |   id text primary key,
15 |   organization_id text not null references organizations(id) on delete cascade,
16 |   store_id text not null references stores(id) on delete cascade,
17 |   api_key_id text references api_keys(id) on delete set null,
18 |   external_order_id text,
19 |   idempotency_key text not null,
20 |   phone_hash text not null,
21 |   order_snapshot jsonb not null,
22 |   score integer not null check (score between 0 and 100),
23 |   confidence numeric(5,4) not null check (confidence between 0 and 1),
24 |   risk_level text not null,
25 |   decision text not null,
26 |   engine_version text not null,
27 |   policy_version text not null,
28 |   degraded boolean not null default false,
29 |   created_at timestamptz not null default now(),
30 |   updated_at timestamptz not null default now(),
31 |   unique (organization_id, store_id, idempotency_key)
32 | );
33 | create index risk_assessments_store_created_idx on risk_assessments(store_id, created_at desc);
34 |
35 | create table risk_signals (
36 |   id text primary key,
37 |   assessment_id text not null references risk_assessments(id) on delete cascade,
38 |   code text not null,
39 |   category text not null,
40 |   score integer not null,
41 |   confidence numeric(5,4),
42 |   description text not null,
43 |   evidence_reference text,
44 |   created_at timestamptz not null default now()
45 | );
46 | create index risk_signals_assessment_idx on risk_signals(assessment_id);
47 |
48 | create table order_outcomes (
49 |   id text primary key,
50 |   organization_id text not null references organizations(id) on delete cascade,
51 |   store_id text not null references stores(id) on delete cascade,
52 |   external_order_id text not null,
53 |   assessment_id text references risk_assessments(id) on delete set null,
54 |   outcome text not null,
55 |   provider text,
56 |   reason text,
57 |   source text not null,
58 |   occurred_at timestamptz not null,
59 |   created_at timestamptz not null default now(),
60 |   unique (store_id, external_order_id, outcome, occurred_at)
61 | );
62 |
```

### packages/database/migrations/0004_verification_events.sql

Bytes: 2067
SHA-256: bd1e45da14ce5145bee37003e0b7ed7ae46293aad64d252512979343c8baf589
Lines: 1-58 of 58

```text
 1 | create table verification_sessions (
 2 |   id text primary key,
 3 |   organization_id text not null references organizations(id) on delete cascade,
 4 |   store_id text not null references stores(id) on delete cascade,
 5 |   assessment_id text references risk_assessments(id) on delete set null,
 6 |   external_order_id text,
 7 |   phone_hash text not null,
 8 |   purpose text not null,
 9 |   channel text not null,
10 |   status text not null,
11 |   expires_at timestamptz not null,
12 |   verified_at timestamptz,
13 |   created_at timestamptz not null default now(),
14 |   updated_at timestamptz not null default now()
15 | );
16 | create index verification_sessions_scope_idx on verification_sessions(store_id, created_at desc);
17 |
18 | create table otp_attempts (
19 |   id text primary key,
20 |   verification_session_id text not null references verification_sessions(id) on delete cascade,
21 |   otp_hash text not null,
22 |   attempt_count integer not null default 0,
23 |   provider_message_id text,
24 |   sent_at timestamptz,
25 |   delivered_at timestamptz,
26 |   failed_at timestamptz,
27 |   expires_at timestamptz not null,
28 |   created_at timestamptz not null default now(),
29 |   updated_at timestamptz not null default now()
30 | );
31 |
32 | create table webhook_endpoints (
33 |   id text primary key,
34 |   organization_id text not null references organizations(id) on delete cascade,
35 |   store_id text references stores(id) on delete cascade,
36 |   url text not null,
37 |   secret_encrypted text not null,
38 |   events jsonb not null,
39 |   status text not null default 'active',
40 |   created_at timestamptz not null default now(),
41 |   updated_at timestamptz not null default now()
42 | );
43 | create index webhook_endpoints_scope_idx on webhook_endpoints(organization_id, store_id);
44 |
45 | create table webhook_deliveries (
46 |   id text primary key,
47 |   endpoint_id text not null references webhook_endpoints(id) on delete cascade,
48 |   event_id text not null,
49 |   status text not null,
50 |   attempts integer not null default 0,
51 |   next_attempt_at timestamptz,
52 |   response_status integer,
53 |   error_code text,
54 |   created_at timestamptz not null default now(),
55 |   updated_at timestamptz not null default now(),
56 |   unique (endpoint_id, event_id)
57 | );
58 |
```

### packages/database/migrations/0005_durable_operations.sql

Bytes: 1166
SHA-256: d2ef2d5672cace94f896b8ab32c1fbfb9e5086ebb5a3bab134333d9de085e70a
Lines: 1-37 of 37

```text
 1 | alter table courier_jobs
 2 |   add column payload jsonb not null default '{}'::jsonb;
 3 |
 4 | alter table order_outcomes
 5 |   add column idempotency_key text,
 6 |   add column phone_hash text;
 7 |
 8 | update order_outcomes
 9 | set idempotency_key = id
10 | where idempotency_key is null;
11 |
12 | alter table order_outcomes
13 |   alter column idempotency_key set not null;
14 |
15 | drop index if exists order_outcomes_unique;
16 |
17 | create unique index order_outcomes_idempotency_unique
18 |   on order_outcomes(organization_id, store_id, idempotency_key);
19 |
20 | create index order_outcomes_phone_idx
21 |   on order_outcomes(store_id, phone_hash, occurred_at desc);
22 |
23 | create table idempotency_records (
24 |   id text primary key,
25 |   organization_id text not null references organizations(id) on delete cascade,
26 |   store_id text not null references stores(id) on delete cascade,
27 |   operation text not null,
28 |   idempotency_key text not null,
29 |   response jsonb not null,
30 |   expires_at timestamptz not null,
31 |   created_at timestamptz not null default now(),
32 |   updated_at timestamptz not null default now(),
33 |   unique (organization_id, store_id, operation, idempotency_key)
34 | );
35 |
36 | create index idempotency_records_expiry_idx on idempotency_records(expires_at);
37 |
```

## Skipped Files

None.
