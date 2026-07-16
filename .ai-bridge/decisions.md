# Ozzyl Guard — Active Decisions

Updated: 2026-07-16

## Accepted decisions

1. Ozzyl Guard is a standalone SaaS/service. `multi-store-saas` becomes a client, not the canonical implementation host.
2. There is one canonical, pure, versioned risk engine.
3. The risk engine performs no network, database, queue, browser, filesystem, credential-store, or provider calls.
4. Courier access is isolated behind provider adapters and asynchronous session/sync workers.
5. The existing Steadfast Playwright session approach remains for the pilot, with security and reliability hardening.
6. Foundation stack: Node.js 20+, TypeScript, npm workspaces, Turborepo, PostgreSQL, Drizzle, Vitest, and Playwright.
7. Public API begins at `/v1`; the canonical assessment endpoint is `POST /v1/risk-assessments`.
8. API key environments use `ozg_test_` and `ozg_live_`. Raw keys are displayed once and stored only as hashes.
9. Dashboard user sessions are independent from API keys.
10. Merchant data uses strict organization/store isolation; no `storeId = 0` or optional-scope shortcut.
11. Unknown/no-data customers return explicit unknown/low-confidence state and normally recommend verification; they are not automatically safe.
12. Provider failure does not automatically allow or block. It produces explicit degraded/freshness metadata and policy-controlled behavior.
13. Outcome feedback is part of the first MVP.
14. WooCommerce, Shopify, custom, and native integrations use the same canonical request/response contract.
15. Applied migrations are immutable and changes require new migrations.
16. `fraudchecker.link` may exist only as an optional, identified fallback adapter; it is never the core source or an engine dependency.
17. Pilot browser access uses the existing Argon2id and opaque hash-only PostgreSQL session primitives, `HttpOnly` cookies, CSRF protection, repository-level tenant revalidation, and an explicit `platform_admin` role; service API keys remain separate.

## Source SaaS conflict resolutions

| Conflict                                                                 | Decision                                                                                 |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Cloudflare D1/SQLite source schema vs standalone relational requirements | Use PostgreSQL as the canonical production database; adapt concepts, not schema directly |
| Generic `ozg_` and `og_live_` source key formats                         | Standardize on `ozg_test_` and `ozg_live_`                                               |
| Raw API key stored in metadata and login cookie                          | Prohibited; dedicated secure user sessions and hash-only API keys                        |
| Custom SHA-256 password hashing                                          | Prohibited; use Argon2id or managed authentication                                       |
| Risk engine performs external fetches                                    | Prohibited; feature assembly/adapters perform I/O before pure scoring                    |
| No history represented as 100% success/zero risk                         | Replace with unknown risk and low confidence                                             |
| Blacklist logging stubs                                                  | Do not copy; later evidence-backed reputation subsystem                                  |
| Hardcoded KV namespace and shell-based session writes                    | Replace with typed encrypted storage service/configuration                               |
| Decryption error falls back to plaintext                                 | Fail closed and record a structured reconnect/configuration failure                      |
| Workflow/per-store errors silently succeed                               | Fail visibly, persist job health, alert, and use dead-letter/reconnect handling          |
| WooCommerce uppercase levels and `signals[].type`                        | Use lowercase canonical enums and `signals[].code`                                       |
| Cross-store system store lookup                                          | Replace with explicit authorized datasets and strict tenant boundaries                   |

## Approved reuse scope

- npm/Turborepo/TypeScript/Vitest/Playwright conventions
- Bangladesh phone normalization after tests
- Steadfast cookie names, endpoint/header shape, login sequence, and status fixtures after redaction/hardening
- WooCommerce settings/order hook/admin display skeleton
- API-key hash/display-prefix and usage-event concepts

No product source code was copied during Phase 0.

## Pending decisions

These require separate ADRs before production implementation:

- Managed identity provider or future supersession of the accepted pilot browser-session baseline
- Queue/broker technology
- API/dashboard/worker deployment platform
- PostgreSQL hosting provider
- KMS/vault and envelope-encryption implementation
- Cache/session storage
- Worker scheduler/runtime
- OTP provider

## External requirements

No credentials are needed for Phase 1 foundation.

Live Steadfast testing requires an authorized test/merchant account. Commercial scale additionally requires review of provider terms and merchant authorization evidence.
