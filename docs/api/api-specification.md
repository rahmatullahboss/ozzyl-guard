# API Specification

Base path: `/v1`

## Authentication

```http
Authorization: Bearer ozg_live_<redacted>
```

Key prefixes:

- `ozg_test_`
- `ozg_live_`

Raw keys are returned only at creation. The database stores a hash and a non-secret display prefix.

### Browser user sessions

Dashboard and platform-admin users do not authenticate with service API keys. Browser authentication uses a separate opaque `HttpOnly`, `SameSite=Lax` session cookie backed by a hash-only PostgreSQL session record.

Browser endpoints are outside the public integration `/v1` namespace:

- `POST /auth/login` — validates email/password, creates the browser session, and returns authorized organization/store scopes plus a CSRF proof.
- `GET /auth/session` — restores the current user session and authorized scopes.
- `POST /auth/logout` — requires `X-CSRF-Token` and revokes the current session.
- `GET /dashboard/v1/overview?organization_id=...&store_id=...` — returns tenant-scoped live merchant data and requires both organization and store scope.
- `GET /admin/v1/overview` — returns global operations data only for an explicit `platform_admin` user.

Browser responses use `Cache-Control: no-store`. Raw session tokens, password material, CSRF proofs, cookies, API keys, and provider credentials must not be logged.

## Common headers

- `Idempotency-Key` for create operations
- `X-Request-ID` optional client request identifier
- `Content-Type: application/json`

## Canonical success response

```json
{
  "success": true,
  "assessment_id": "ras_123",
  "risk_score": 72,
  "risk_level": "high",
  "decision": "verify",
  "confidence": 0.82,
  "signals": [
    {
      "code": "low_delivery_rate",
      "score": 30,
      "description": "Customer delivery rate is 28%"
    }
  ],
  "courier_summary": {
    "total": 12,
    "delivered": 5,
    "returned": 4,
    "cancelled_before_shipping": 3
  }
}
```

Additional non-breaking metadata may include freshness, provider count, recommended actions, engine/policy versions, degraded state, and response time.

## Create risk assessment

```http
POST /v1/risk-assessments
```

Request:

```json
{
  "external_order_id": "WC-1092",
  "phone": "01712345678",
  "order_total": 1850,
  "payment_method": "cod",
  "shipping_address": {
    "district": "Dhaka",
    "area": "Mirpur"
  },
  "items_count": 2,
  "session": {
    "ip": "203.0.113.5",
    "device_id": "dev_example",
    "user_agent": "example"
  }
}
```

Expanded response:

```json
{
  "success": true,
  "assessment_id": "ras_123",
  "risk_score": 72,
  "confidence": 0.86,
  "risk_level": "high",
  "decision": "hold",
  "signals": [
    {
      "code": "courier_low_delivery_rate",
      "category": "courier",
      "score": 30,
      "description": "Delivery success rate is 28% across 11 shipped orders"
    }
  ],
  "courier_summary": {
    "freshness": "fresh",
    "providers": 1,
    "total": 14,
    "delivered": 3,
    "returned": 8,
    "cancelled_before_shipping": 3
  },
  "recommended_actions": ["require_otp", "request_advance_payment"],
  "meta": {
    "engine_version": "1.0.0",
    "policy_version": "store_12_v3",
    "degraded": false,
    "response_ms": 184
  }
}
```

Unknown/no-data behavior must be explicit: `risk_level: "unknown"`, low confidence, `decision: "verify"`, and a degraded/freshness explanation. It must not return an implicit safe result.

## Read assessment

```http
GET /v1/risk-assessments/{assessment_id}
```

The caller must be authorized for the assessment's organization/store scope.

## Create courier refresh job

```http
POST /v1/courier-observations/refresh
```

Request:

```json
{
  "phone": "01712345678",
  "providers": ["steadfast"],
  "force": false
}
```

Return `202 Accepted` with a job id when asynchronous. Checkout integrations must not wait for Playwright/session refresh.

## Send OTP

```http
POST /v1/verifications/otp/send
```

```json
{
  "assessment_id": "ras_123",
  "phone": "01712345678",
  "purpose": "cod_order_confirmation"
}
```

`Idempotency-Key` is required. A new request returns `202 Accepted`:

```json
{
  "success": true,
  "verification_id": "ver_123",
  "expires_at": "2026-07-17T10:05:00.000Z",
  "status": "queued"
}
```

The API creates the scoped verification session, OTP hash, and encrypted provider-delivery job transactionally. It does not call the OTP provider. An idempotent replay returns the same logical response with `200 OK`.

## Verify OTP

```http
POST /v1/verifications/otp/verify
```

```json
{
  "verification_id": "ver_123",
  "otp": "123456"
}
```

Verification is tenant-scoped and database-only. While provider delivery is still queued, the API returns `409 DELIVERY_PENDING`; terminal delivery failure returns `409 DELIVERY_FAILED`; expired/invalid OTP and attempt-limit behavior remain explicit. Successful verification emits `verification.verified` through the durable webhook outbox.

## Submit outcome

```http
POST /v1/order-outcomes
```

```json
{
  "external_order_id": "WC-1092",
  "assessment_id": "ras_123",
  "outcome": "returned",
  "provider": "steadfast",
  "reason": "customer_refused",
  "occurred_at": "2026-07-16T10:30:00Z"
}
```

Outcome submissions require idempotency and evidence/source metadata. Integrations should send outcomes from the first MVP.

## Record native shadow comparison

```http
POST /v1/integration-comparisons/native-shadow
```

This endpoint requires `comparisons:write` and `Idempotency-Key`. It is only for
post-order native-client shadow evaluation; it must not determine checkout action.

```json
{
  "external_order_id": "ORDER-100",
  "assessment_id": "ras_123",
  "legacy_score": 20,
  "legacy_decision": "allow",
  "rollout_version": "pilot-v1",
  "sample_bucket": 140,
  "sample_rate_bps": 1000,
  "evaluated_at": "2026-07-18T08:00:00Z"
}
```

The API loads the assessment from the authenticated organization/store scope and
derives the Guard score, decision, confidence, delta, and decision-change flag
server-side. The durable record contains no phone, API key, provider credential,
or unrestricted order snapshot. Reusing an idempotency key with different
comparison evidence returns a conflict.

## Webhooks

Events:

- `assessment.completed`
- `verification.verified`
- `verification.failed`
- `courier.connection_failed`
- `order.outcome_recorded`
- `usage.limit_warning`

Webhook requirements:

- HMAC signature
- timestamp header
- replay protection
- retry with exponential backoff
- delivery log
- bounded payload and SSRF-safe destination validation

## Error format

```json
{
  "success": false,
  "error": {
    "code": "INVALID_PHONE",
    "message": "A valid Bangladesh mobile number is required",
    "details": {}
  },
  "request_id": "req_123"
}
```

## Contract rules

- All integrations use this same contract.
- Risk levels and decisions are lowercase canonical enums.
- Signals use `code`; adapters/plugins must not invent `name` or `type` variants.
- Provider/network failure must not appear as low risk.
- API key environment and store scope must be enforced server-side.
- Quota/entitlement enforcement must be safe under concurrency.
- Idempotent retries return the original logically equivalent result.
- Webhook and OTP provider network delivery never run in the synchronous API or checkout request path.
