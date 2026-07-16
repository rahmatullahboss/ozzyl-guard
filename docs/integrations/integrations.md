# Integrations

All integrations use the canonical `/v1` API contract and outcome feedback model. Integration-specific code must not contain a second scoring engine.

## WooCommerce

### Required features

- API key and store connection settings
- Test/live mode
- COD-only assessment option
- Threshold/action settings
- Order metadata and admin badge
- Hold/flag/require-prepayment actions
- OTP workflow
- Outcome webhook when order status changes
- Manual recheck
- Retry and explicit degraded-state visibility

### Contract rules

- Use canonical lowercase risk levels.
- Use `signals[].code`, not conflicting `name/type` fields.
- API success must be explicit.
- Network failure must not be interpreted as low risk.
- Checkout timeout must stay bounded.
- Use `Idempotency-Key` derived from store/order/assessment intent.
- Store the assessment ID and engine/policy metadata with the order.
- Never automatically cancel solely because a provider call failed.

### Source plugin reuse

Reusable:

- WordPress settings registration/page skeleton
- WooCommerce order-created hook concept
- Order metadata/admin display concept
- Bounded HTTP timeout concept

Rewrite:

- Endpoint path and request/response contract
- API key prefix placeholder
- Uppercase `LOW/MEDIUM/HIGH/CRITICAL` mapping
- `signals[].type` access
- Missing explicit success handling mismatch
- Immediate cancel behavior and low-risk approval wording
- Outcome feedback, retries, idempotency, manual recheck, OTP, and degraded state
- Secret storage guidance and connection test behavior

## Shopify

Initial approach:

- App installation and OAuth
- Order-created webhook
- Risk assessment
- Add order tags/metafields
- Merchant dashboard action recommendations
- Outcome sync from fulfilment/order updates
- Signed webhook verification and replay protection

## Custom websites

Provide:

- REST API
- TypeScript SDK
- PHP SDK
- Server-side examples
- Webhook verification helper
- Clear timeout/retry/idempotency guidance

Browser-only integrations must not expose live API keys. Custom JS should use a merchant server or narrowly scoped short-lived token design selected by ADR.

## Ozzyl Commerce / `multi-store-saas`

Treat the existing platform as the first native client.

- Remove embedded duplicate risk logic.
- Call Ozzyl Guard through an internal service client.
- Reuse store/order IDs as external references.
- Send order outcomes back to Guard.
- Keep courier booking in the commerce platform, but risk assessment in Guard.
- Roll out behind a feature flag and compare old/new decisions before removing old code.

## Meta audience exclusion — later phase

Workflow:

1. Merchant authorizes Meta assets.
2. Eligible high-confidence identities are normalized and hashed.
3. Ozzyl Guard updates a merchant-owned customer-list custom audience.
4. Merchant excludes that audience from selected ad sets.

This is merchant-specific audience management, not a global Facebook user block. It requires separate privacy/legal review and is not part of the first MVP.
