# Ozzyl Guard Pro Context

Generated: 2026-07-16T14:03:25.053Z
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
│   ├── admin/
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   └── styles.css
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── api/
│   │   ├── src/
│   │   │   ├── bootstrap.ts
│   │   │   ├── index.test.ts
│   │   │   ├── index.ts
│   │   │   ├── postgres.ts
│   │   │   └── server.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── dashboard/
│       ├── src/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── styles.css
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── codexpro/
│   ├── docs/
│   │   ├── images/
│   │   │   ├── chatgpt-plugin-details.png
│   │   │   └── chatgpt-plugins-add.png
│   │   ├── superpowers/
│   │   │   ├── plans/
│   │   │   └── specs/
│   │   ├── favicon.svg
│   │   ├── index.html
│   │   ├── og.svg
│   │   ├── script.js
│   │   ├── star.svg
│   │   ├── styles.css
│   │   └── zh.html
│   ├── scripts/
│   │   ├── analysis-cli-smoke.mjs
│   │   ├── analysis-smoke.mjs
│   │   ├── codexpro.mjs
│   │   ├── doctor-smoke.mjs
│   │   ├── execute-handoff-smoke.mjs
│   │   ├── http-smoke.mjs
│   │   ├── pro-apply.mjs
│   │   ├── pro-bundle.mjs
│   │   ├── pro-smoke.mjs
│   │   ├── release-guard-smoke.mjs
│   │   ├── release-guard.mjs
│   │   ├── release-pack.mjs
│   │   ├── release-publish.mjs
│   │   ├── settings-smoke.mjs
│   │   ├── smoke.mjs
│   │   ├── stress.mjs
│   │   └── widget-smoke.mjs
│   ├── src/
│   │   ├── analysis/
│   │   │   ├── cache.ts
│   │   │   ├── classify.ts
│   │   │   ├── extract.ts
│   │   │   ├── graph.ts
│   │   │   ├── impact.ts
│   │   │   ├── index.ts
│   │   │   ├── inventory.ts
│   │   │   ├── providers.ts
│   │   │   ├── rank.ts
│   │   │   └── types.ts
│   │   ├── bashOps.ts
│   │   ├── capabilitiesOps.ts
│   │   ├── codexSessions.ts
│   │   ├── config.ts
│   │   ├── fsOps.ts
│   │   ├── gitOps.ts
│   │   ├── guard.ts
│   │   ├── http.ts
│   │   ├── proContext.ts
│   │   ├── profileStore.ts
│   │   ├── redact.ts
│   │   ├── searchOps.ts
│   │   ├── server.ts
│   │   ├── stdio.ts
│   │   ├── toolCardWidget.ts
│   │   └── workspaceOps.ts
│   ├── AGENTS.example.md
│   ├── CHANGELOG.md
│   ├── CHATGPT_PROMPT.md
│   ├── CODEX_PROMPT.md
│   ├── config.example.env
│   ├── CONTRIBUTING.md
│   ├── design.md
│   ├── DOMAIN_SETUP.md
│   ├── FAQ_ZH.md
│   ├── FAQ.md
│   ├── LICENSE
│   ├── package-lock.json
│   ├── package.json
│   ├── PUBLIC_LAUNCH_CHECKLIST.md
│   ├── README_ZH.md
│   ├── README.md
│   ├── SECURITY.md
│   └── tsconfig.json
├── config/
│   └── environment.example
├── docs/
│   ├── adr/
│   │   ├── 0001-standalone-service.md
│   │   ├── 0002-courier-adapter-boundary.md
│   │   ├── 0003-keep-steadfast-session-scraper.md
│   │   ├── 0004-foundation-technology-direction.md
│   │   ├── README.md
│   │   └── template.md
│   ├── api/
│   │   └── api-specification.md
│   ├── architecture/
│   │   ├── copy-map-from-multi-store-saas.md
│   │   ├── project-overview.md
│   │   ├── repository-audit.md
│   │   └── system-architecture.md
│   ├── courier/
│   │   └── courier-intelligence.md
│   ├── database/
│   │   └── database-design.md
│   ├── integrations/
│   │   └── integrations.md
│   ├── operations/
│   │   ├── deployment.md
│   │   ├── development-environment.md
│   │   └── operations-observability.md
│   ├── risk-engine/
│   │   └── risk-engine.md
│   ├── roadmap/
│   │   ├── implementation-roadmap.md
│   │   ├── initial-backlog.md
│   │   └── risk-register.md
│   ├── security/
│   │   └── security-privacy.md
│   ├── testing/
│   │   └── testing-strategy.md
│   └── README.md
├── integrations/
│   ├── custom-js/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── multi-store-saas/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── shopify/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── woocommerce/
│       └── ozzyl-guard.php
├── packages/
│   ├── authentication/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── billing/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── courier-adapters/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── database/
│   │   ├── migrations/
│   │   │   ├── 0001_foundation.sql
│   │   │   ├── 0002_courier.sql
│   │   │   ├── 0003_risk.sql
│   │   │   ├── 0004_verification_events.sql
│   │   │   └── 0005_durable_operations.sql
│   │   ├── src/
│   │   │   ├── check-migrations.ts
│   │   │   ├── index.ts
│   │   │   ├── migrate.ts
│   │   │   └── schema.ts
│   │   ├── drizzle.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── risk-engine/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── sdk/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── shared-types/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── verification/
│       ├── src/
│       │   ├── index.test.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
├── scripts/
│   └── check-architecture.mjs
├── workers/
│   ├── courier-session-worker/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   ├── index.ts
│   │   │   └── runner.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── courier-sync-worker/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   ├── index.ts
│   │   │   └── runner.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── event-worker/
│   │   ├── src/
│   │   │   ├── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── verification-worker/
│       ├── src/
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
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
## main...origin/main
 M .ai-bridge/current-plan.md
 M .ai-bridge/implementation-status.md
 M .ai-bridge/pro-context.md
 M tracker.yml
```

## Recent Commits

```text
acd5217 (HEAD -> main, origin/main) docs: record GitHub Actions billing blocker [skip ci]
24cab73 feat: establish Ozzyl Guard MVP foundation
```

## Git Diff

```diff
git unavailable or failed: spawnSync git ENOBUFS
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
43 | - Remote GitHub Actions CI run `29499998845`: passed, including PostgreSQL 16 migration apply, audit, format, lint, architecture checks, typecheck, tests, builds, and PHP lint
44 | - Canonical documentation links: 33 Markdown files checked, zero broken internal links
45 | - `tracker.yml` YAML parse: passed
46 | - Continuation bundle: refreshed and formatted
47 | - Prohibited source-pattern search: no matches
48 | 
49 | A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. It passed remotely in GitHub Actions against PostgreSQL 16.
50 | 
51 | ## Next production milestone
52 | 
53 | 1. Select production hosting, PostgreSQL provider, KMS/vault, queue/cache, and observability through ADRs.
54 | 2. Replace local encryption-key handling with managed KMS envelope encryption.
55 | 3. Connect dashboard/admin to authenticated backend endpoints and real data.
56 | 4. Add PostgreSQL integration tests for migrations, quota concurrency, repositories, and tenant isolation.
57 | 5. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
58 | 6. Select and implement the OTP provider runner.
59 | 7. Add durable webhook outbox/event runner and verification queue runner.
60 | 8. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
61 | 9. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
62 | 
63 | ## External blockers
64 | 
65 | - Authorized Steadfast merchant/test credentials
66 | - Steadfast provider-terms and merchant-authorization review
67 | - Production KMS/vault choice and keys
68 | - OTP provider account and credentials
69 | - Hosting/database/queue/cache/observability selections
70 | - Pilot outcome data for false-positive/false-negative calibration
71 | 
72 | ## Non-negotiable continuation rules
73 | 
74 | - Do not add a second risk engine.
75 | - Do not call providers from the risk engine or synchronous checkout path.
76 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, or provider credentials.
77 | - Do not use API keys as dashboard user sessions.
78 | - Require organization/store scope in all merchant repositories and jobs.
79 | - Add new migrations; never edit applied migrations.
80 | - Keep unknown/provider failure explicit and policy-controlled.
81 | - Update `tracker.yml`, documentation, implementation status, and the continuation bundle with every material milestone.
82 | 

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
26 | | Conflict                                                                 | Decision                                                                                 |
27 | | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
28 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly |
29 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                               |
30 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                        |
31 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                       |
32 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                    |
33 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                             |
34 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                  |
35 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                               |
36 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                      |
37 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling          |
38 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                       |
39 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                   |
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

Changed files detected: .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, .ai-bridge/pro-context.md, tracker.yml
Auto-include important root files: yes
Auto-include changed files: yes
Explicit selected paths: tracker.yml, AGENTS.md, README.md, docs/README.md, .ai-bridge/current-plan.md, .ai-bridge/implementation-status.md, .ai-bridge/decisions.md
Extra globs: none
Files included below: AGENTS.md, docs/README.md, README.md, .ai-bridge/current-plan.md, .ai-bridge/decisions.md, .ai-bridge/implementation-status.md, tracker.yml, eslint.config.js, package.json, turbo.json

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

### README.md

Bytes: 6440
SHA-256: 19ff8ad2b7a742df44fae72abe7b1e1f5281ac98a02c287f37fb8d78e15c1057
Lines: 1-193 of 193

```markdown
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
 53 | ```text
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
 79 | ```
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
 98 | ```bash
 99 | npm install
100 | npm run db:check
101 | npm run db:migrate
102 | npm run bootstrap -w @ozzyl/api
103 | npm run dev:api
104 | ```
105 | 
106 | Use `config/environment.example` as the variable checklist. Put real values only in an ignored local environment file or secret manager.
107 | 
108 | The bootstrap command creates the first owner, organization, store, and API key. The raw key is printed once; the database receives only its hash and display prefix.
109 | 
110 | Merchant dashboard:
111 | 
112 | ```bash
113 | npm run dev:dashboard
114 | ```
115 | 
116 | Platform admin:
117 | 
118 | ```bash
119 | npm run dev -w @ozzyl/admin
120 | ```
121 | 
122 | Courier workers:
123 | 
124 | ```bash
125 | npm run start -w @ozzyl/courier-session-worker
126 | npm run start -w @ozzyl/courier-sync-worker
127 | ```
128 | 
129 | ## Docker Compose
130 | 
131 | Provide the required variables in your shell or an ignored Compose environment file, then run:
132 | 
133 | ```bash
134 | docker compose up --build
135 | ```
136 | 
137 | The Compose topology separates PostgreSQL, migrations, API, Playwright session worker, and courier sync worker. Dashboard/admin static hosting is intentionally deployment-platform dependent.
138 | 
139 | ## Verification commands
140 | 
141 | ```bash
142 | npm run format:check
143 | npm run lint
144 | npm run db:check
145 | npm run typecheck
146 | npm run test
147 | npm run build
148 | npm audit --audit-level=high
149 | php -l integrations/woocommerce/ozzyl-guard.php
150 | ```
151 | 
152 | ## Canonical assessment response
153 | 
154 | ```json
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
176 | ```
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
```

### .ai-bridge/current-plan.md

Bytes: 4663
SHA-256: b935bbf47b76328d4cf4ed984847f4e0f4eea51dd28b20dc9bb8e0d96a0c0f26
Lines: 1-82 of 82

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
43 | - Remote GitHub Actions CI run `29499998845`: passed, including PostgreSQL 16 migration apply, audit, format, lint, architecture checks, typecheck, tests, builds, and PHP lint
44 | - Canonical documentation links: 33 Markdown files checked, zero broken internal links
45 | - `tracker.yml` YAML parse: passed
46 | - Continuation bundle: refreshed and formatted
47 | - Prohibited source-pattern search: no matches
48 | 
49 | A clean PostgreSQL migration apply could not be executed locally because Docker/PostgreSQL is unavailable in this workspace. It passed remotely in GitHub Actions against PostgreSQL 16.
50 | 
51 | ## Next production milestone
52 | 
53 | 1. Select production hosting, PostgreSQL provider, KMS/vault, queue/cache, and observability through ADRs.
54 | 2. Replace local encryption-key handling with managed KMS envelope encryption.
55 | 3. Connect dashboard/admin to authenticated backend endpoints and real data.
56 | 4. Add PostgreSQL integration tests for migrations, quota concurrency, repositories, and tenant isolation.
57 | 5. Add an authorized Steadfast test account, live opt-in tests, selector monitoring, and provider-terms approval.
58 | 6. Select and implement the OTP provider runner.
59 | 7. Add durable webhook outbox/event runner and verification queue runner.
60 | 8. Integrate the native multi-store adapter behind a shadow-comparison feature flag.
61 | 9. Pilot with selected merchants, collect outcomes, calibrate confidence/thresholds, and keep broad automatic blocking disabled until reviewed.
62 | 
63 | ## External blockers
64 | 
65 | - Authorized Steadfast merchant/test credentials
66 | - Steadfast provider-terms and merchant-authorization review
67 | - Production KMS/vault choice and keys
68 | - OTP provider account and credentials
69 | - Hosting/database/queue/cache/observability selections
70 | - Pilot outcome data for false-positive/false-negative calibration
71 | 
72 | ## Non-negotiable continuation rules
73 | 
74 | - Do not add a second risk engine.
75 | - Do not call providers from the risk engine or synchronous checkout path.
76 | - Do not store/log raw API keys, passwords, OTPs, courier cookies, or provider credentials.
77 | - Do not use API keys as dashboard user sessions.
78 | - Require organization/store scope in all merchant repositories and jobs.
79 | - Add new migrations; never edit applied migrations.
80 | - Keep unknown/provider failure explicit and policy-controlled.
81 | - Update `tracker.yml`, documentation, implementation status, and the continuation bundle with every material milestone.
82 | 
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
26 | | Conflict                                                                 | Decision                                                                                 |
27 | | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
28 | | Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly |
29 | | Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                               |
30 | | Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                        |
31 | | Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                       |
32 | | Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                    |
33 | | No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                             |
34 | | Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                  |
35 | | Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                               |
36 | | Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                      |
37 | | Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling          |
38 | | WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                       |
39 | | Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                   |
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

Bytes: 8615
SHA-256: 9c8fe9b8e61f407c9afbe1f8da03fce167dd29517cd6124444a472bc6aed164c
Lines: 1-102 of 102

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
 14 | | Area                       | Status  | Notes                                                                                                                |
 15 | | -------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
 16 | | Documentation and ADRs     | done    | Architecture, API, database, courier, risk, integrations, security, testing, operations, roadmap, and ADRs installed |
 17 | | Continuation documentation | done    | `tracker.yml`, `docs/README.md`, and `.ai-bridge/pro-context.md` provide new-chat and new-agent handoff context      |
 18 | | Git repository             | done    | Private GitHub repository `rahmatullahboss/ozzyl-guard`; `main` is the canonical branch                              |
 19 | | Monorepo/tooling           | done    | npm workspaces, Turborepo, TypeScript, ESLint, Prettier, Vitest, Vite, tsup                                          |
 20 | | CI                         | done    | PostgreSQL 16 migration apply, audit, format, lint, architecture, typecheck, tests, builds, PHP lint                 |
 21 | | Container baseline         | done    | Separate API, migration, PostgreSQL, Playwright session worker, and courier-sync services                            |
 22 | | Production platform ADRs   | blocked | Hosting, managed PostgreSQL, KMS, queue/cache, and observability providers not selected                              |
 23 | 
 24 | ## Product implementation
 25 | 
 26 | | Area                             | Status   | Notes                                                                                                                           |
 27 | | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
 28 | | Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas                                                                          |
 29 | | Database/migrations              | baseline | Full schema and five append-only migrations; clean PostgreSQL 16 apply passed in remote CI; local Docker/PostgreSQL unavailable |
 30 | | Password/session primitives      | done     | Argon2id and opaque hashed session token utilities                                                                              |
 31 | | Organizations/stores/memberships | done     | Canonical relational schema and bootstrap transaction                                                                           |
 32 | | API keys/usage/plans             | done     | Test/live prefixes, one-time raw reveal, hash-only persistence, scopes, revocation fields, atomic PostgreSQL usage reservation  |
 33 | | Courier adapter interface        | done     | Typed provider contract and structured errors                                                                                   |
 34 | | Steadfast adapter                | baseline | Normalized internal endpoint adapter with bounded timeout/session errors; requires authorized live validation                   |
 35 | | Steadfast session worker         | baseline | Playwright login, selector/CAPTCHA/2FA errors, encryption boundary, health state, runnable PG polling                           |
 36 | | Courier observation worker/cache | done     | Durable jobs, `SKIP LOCKED` claiming, retry scheduling, normalized observation persistence                                      |
 37 | | Risk engine                      | done     | One pure deterministic engine, versioned policy, confidence, signals, unknown/degraded handling                                 |
 38 | | Public API                       | done     | Assessment create/read, outcomes, courier refresh, OTP send/verify, auth/scopes/idempotency/rate limits                         |
 39 | | PostgreSQL API repositories      | done     | API keys, usage, features, assessments/signals, outcomes, idempotency, courier jobs                                             |
 40 | | Outcome feedback                 | done     | API, WooCommerce, Shopify, custom, and native adapter paths                                                                     |
 41 | | Webhook delivery                 | baseline | HMAC, timestamp, SSRF controls, retries; durable outbox runner still needed                                                     |
 42 | | WooCommerce                      | baseline | Encrypted service key, async assessment, canonical parsing, safe failure behavior, admin panel, manual recheck, outcomes        |
 43 | | Shopify                          | baseline | Signed webhook helper, assessment/action mapping, outcome submission; app OAuth/webhook registration not implemented            |
 44 | | Custom server SDK                | done     | Server-only integration and checkout action mapping                                                                             |
 45 | | Native multi-store adapter       | baseline | Canonical client, shadow-comparison result, outcomes; source platform feature-flag wiring pending                               |
 46 | | OTP verification                 | baseline | Secure service abstraction and worker library; production provider/runner blocked                                               |
 47 | | Merchant dashboard               | baseline | Overview, queue, courier health, policy, usage, settings UI; auth and live API wiring pending                                   |
 48 | | Platform admin                   | baseline | Operations UI foundation; auth and live operational data wiring pending                                                         |
 49 | | Shared reputation                | deferred | Cross-merchant reputation/dispute system requires legal/privacy review and pilot evidence                                       |
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
 71 | - Remote GitHub Actions run `29499998845`: passed; PostgreSQL migration apply, audit, format, lint, architecture, typecheck, tests, builds, and PHP lint all succeeded
 72 | - WooCommerce `php -l`: passed
 73 | - Canonical documentation link check: 33 files, zero broken links
 74 | - `tracker.yml` YAML parse: passed
 75 | - Continuation context bundle: refreshed and formatted
 76 | - Prohibited insecure-pattern scan: zero matches
 77 | 
 78 | ## External blockers and production requirements
 79 | 
 80 | - Authorized Steadfast test/merchant account
 81 | - Provider-terms and merchant-authorization review
 82 | - Production KMS/vault and key-rotation setup
 83 | - OTP provider selection/account
 84 | - Hosting, PostgreSQL, queue/cache, and observability ADRs
 85 | - Dashboard/admin authentication and backend data endpoints
 86 | - Pilot merchants and verified outcome data for calibration
 87 | 
 88 | ## Remaining risks
 89 | 
 90 | - Steadfast UI/internal endpoint changes can break automation.
 91 | - Local AES-GCM key configuration is not a replacement for managed KMS in production.
 92 | - In-process API rate limiting is not distributed across replicas.
 93 | - Dashboard/admin currently display representative UI data rather than live tenant data.
 94 | - Webhook and OTP worker libraries need durable production runners/providers.
 95 | - PostgreSQL repository/concurrency behavior needs containerized integration tests beyond CI migration apply.
 96 | - Four moderate development-tooling advisories remain; high/critical threshold is clear.
 97 | - Automatic blocking should remain merchant-controlled and disabled by default until pilot calibration.
 98 | 
 99 | ## Next milestone
100 | 
101 | Production hardening and pilot readiness: infrastructure ADRs, managed secrets, live dashboard data/auth, database integration tests, authorized Steadfast validation, OTP provider, durable event/verification runners, and native multi-store shadow rollout.
102 | 
```

### tracker.yml

Bytes: 4870
SHA-256: 5385fa8f7f9ddb38fb2e821797e4c1779b01bd7deb1beeefcee1e9e77c0a3c44
Lines: 1-148 of 148

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
 94 |     - clean_database_apply_was_verified_in_remote_ci_with_postgresql_16
 95 |   remote_ci:
 96 |     status: passed
 97 |     run_id: 29499998845
 98 |     job: verify
 99 |     duration: 1m47s
100 |     completed: 2026-07-16
101 | 
102 | migrations:
103 |   immutable: true
104 |   files:
105 |     - packages/database/migrations/0001_foundation.sql
106 |     - packages/database/migrations/0002_courier.sql
107 |     - packages/database/migrations/0003_risk.sql
108 |     - packages/database/migrations/0004_verification_events.sql
109 |     - packages/database/migrations/0005_durable_operations.sql
110 | 
111 | external_dependencies:
112 |   - authorized_steadfast_test_account
113 |   - provider_authorization_review
114 |   - production_managed_encryption_service
115 |   - otp_provider_account
116 |   - hosting_database_queue_cache_and_observability_decisions
117 |   - pilot_outcome_data
118 | 
119 | next_milestone:
120 |   name: production-hardening-and-pilot-readiness
121 |   tasks:
122 |     - record_infrastructure_adrs
123 |     - connect_dashboard_and_admin_to_authenticated_live_data
124 |     - add_postgresql_repository_concurrency_and_tenant_tests
125 |     - validate_steadfast_with_an_authorized_account
126 |     - implement_the_selected_otp_runner
127 |     - add_durable_event_and_verification_runners
128 |     - enable_native_adapter_shadow_mode
129 |     - run_a_selected_merchant_pilot
130 |     - calibrate_decisions_before_broad_automatic_blocking
131 | 
132 | release_policy:
133 |   branch: main
134 |   before_push:
135 |     - npm_run_verify_passes
136 |     - documentation_and_tracker_are_current
137 |     - repository_review_is_clean
138 |   rules:
139 |     - no_force_push_to_main
140 |     - do_not_edit_applied_migrations
141 |     - use_descriptive_commits
142 | 
143 | notes:
144 |   - codexpro_and_local_mcp_files_are_workspace_tooling_and_ignored
145 |   - dashboard_and_admin_are_ui_foundations_pending_live_data
146 |   - broad_automatic_blocking_remains_disabled_until_pilot_calibration
147 |   - update_this_file_after_every_material_milestone
148 | 
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

## Skipped Files

None.
