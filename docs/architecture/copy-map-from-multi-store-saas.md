# Copy Map from `multi-store-saas`

Source repository: `rahmatullahboss/multi-store-saas` (`master`).

## Directly reusable with adaptation

| Source                                                          | Reuse                                                                          | Required change                                                                                                                                                          |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `scripts/steadfast-cookie-sync/steadfast-scraper.server.ts`     | Playwright login and cookie extraction flow                                    | Add resilient selectors, login validation, CAPTCHA/2FA detection, timeouts, structured errors, and redacted diagnostics                                                  |
| `scripts/steadfast-cookie-sync/sync.ts`                         | Multi-store refresh orchestration concept                                      | Remove shell/CLI secret transport, hardcoded KV namespace, plaintext fallback, merchant-email logging, and silent per-store skips                                        |
| `.github/workflows/steadfast-cookie-sync.yml`                   | Pilot schedule concept                                                         | Pin/install dependencies normally, remove `continue-on-error`, fail on missing secrets, emit health/alerts                                                               |
| `apps/web/app/services/steadfast.server.ts`                     | Provider API client concepts, status mappings, internal endpoint request shape | Split shipment API from fraud observation adapter; normalize responses; add typed errors, rate limits, jitter, circuit breaker, and session health handling              |
| `apps/web/migrations/0014_fdaas_api_keys.sql`                   | Hash-only key, display prefix, usage event concepts                            | Redesign for organizations, stores, scopes, test/live environments, expiry/revocation, atomic entitlements, and PostgreSQL                                               |
| `apps/web/app/routes/guard._index.tsx`                          | Landing/pricing visual concepts only                                           | Replace raw-key login cookie, raw-key metadata, custom SHA-256 password hashing, and hardcoded marketing claims                                                          |
| `apps/web/app/routes/guard.dashboard.tsx`                       | Usage/API-key dashboard information architecture                               | Never recover or display stored raw keys; use dedicated user sessions and key rotation                                                                                   |
| `apps/web/public/integrations/ozzyl-guard-wordpress-plugin.php` | Settings page, order hook, metadata/admin display skeleton                     | Use canonical API, lowercase levels, `signals[].code`, bounded async/deferred behavior, retries, outcome feedback, secure secret handling, and degraded-state visibility |
| Steadfast status mappings                                       | Provider-to-canonical outcome mapping                                          | Move into adapter package and add exhaustive fixtures/tests                                                                                                              |
| Return-rate concepts                                            | Separate actual courier return from pre-shipping cancellation                  | Move into feature extraction and include confidence/freshness                                                                                                            |

## Reuse concepts only; rewrite implementation

### Fraud engine

Reuse:

- Bangladesh phone normalization rules
- Explainable signal model concept
- Score clamping concept
- Decision categories
- Merchant-configurable policy concept

Rewrite because the current implementation mixes provider calls, scoring, persistence/cache orchestration, fallback logic, and route behavior. It also treats no-history customers as 100% successful/zero-risk and contains blacklist stubs.

### Public fraud API

Reuse:

- Bearer-key authentication concept
- Usage/quota concept
- Privacy-aware phone hash concept

Rewrite:

- Canonical `/v1/risk-assessments` request/response
- `ozg_test_` and `ozg_live_` key standards
- Atomic entitlement reservation and usage recording
- Per-key scopes and environment isolation
- Idempotency and request replay behavior
- Rate limits and structured errors
- Strict organization/store isolation

### Guard authentication

Do not copy the raw API-key cookie, raw key in metadata, or custom SHA-256 password pattern. Use dedicated users, Argon2id/managed auth, and opaque server-side sessions.

## Do not copy

- Hardcoded `fraudchecker.link` dependency as the primary source
- Duplicate scoring logic across routes/services
- Raw API key storage in metadata
- API key used as a dashboard login session
- Simple custom password hashing
- OTP logging or swallowed delivery failures
- Database tables whose runtime queries do not match migrations
- Fail-open behavior without an explicit degraded/unknown state
- Shell commands containing credentials, cookies, or JSON session payloads
- Hardcoded Cloudflare namespace/account identifiers

## Extraction sequence

1. Define canonical interfaces and security boundaries.
2. Copy tests/fixtures and small pure utilities, not entire modules.
3. Port the Steadfast Playwright flow into `workers/courier-session-worker`.
4. Port internal endpoint access into `packages/courier-adapters`.
5. Persist normalized observations through the database package.
6. Implement a new pure risk engine against canonical features.
7. Rebuild API and plugins against one contract.
8. Replace embedded multi-store logic with an Ozzyl Guard service client.

## Audit status

- Source repository access: available through GitHub.
- Direct code copied in Phase 0: none.
- First approved extraction target: Steadfast selector/session fixtures and provider response/status fixtures after tests and redaction are defined.
