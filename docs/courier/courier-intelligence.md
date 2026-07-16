# Courier Intelligence and Scraping

## Decision

Keep the existing Steadfast browser-login/session approach, but isolate it as a provider adapter and session worker.

## Existing flow to preserve

1. Playwright opens Steadfast login.
2. Merchant-authorized credentials are submitted.
3. Session and XSRF cookies are extracted.
4. Session data is encrypted and stored per merchant/store.
5. The Steadfast internal JSON endpoint is called for phone-level success/cancellation data.
6. A scheduled worker refreshes sessions periodically.

## New component boundaries

### `SteadfastSessionDriver`

- Login automation
- Selector management
- Cookie extraction
- Login-state validation
- CAPTCHA/2FA detection
- Structured failure codes
- Redacted diagnostics and bounded failure screenshots

### `SteadfastAdapter`

Implements:

```ts
interface CourierAdapter {
  provider: string;
  testConnection(accountId: string): Promise<ConnectionHealth>;
  refreshSession(accountId: string): Promise<SessionResult>;
  fetchCustomerObservation(input: CustomerLookup): Promise<CourierObservation>;
  fetchShipmentStatus(input: ShipmentLookup): Promise<ShipmentObservation>;
}
```

The session driver and adapter may share provider-specific types, but the risk engine must not import them.

### `CourierObservationService`

- Reads fresh cached observation
- Requests provider refresh
- Normalizes data
- Calculates source confidence
- Persists freshness and evidence
- Returns explicit unknown/degraded state when data is unavailable

## Canonical observation

```ts
interface CourierObservation {
  provider: 'steadfast' | 'pathao' | 'redx' | 'aggregator';
  totalOrders: number;
  deliveredOrders: number;
  returnedOrders: number;
  cancelledBeforeShipping: number;
  successRate: number | null;
  confidence: number;
  source: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
  observedAt: string;
  expiresAt: string;
}
```

## Session lifecycle

- Scheduled refresh: every 4–6 hours.
- Immediate refresh after provider 401/419.
- Validate cookies after login before saving.
- Two consecutive failures mark account `reconnect_required`.
- Merchant dashboard shows health and last successful refresh.
- A refresh job must record start, outcome, failure code, attempts, and duration.

## Security

- Credentials encrypted with envelope encryption or a secret vault.
- Sessions encrypted separately from credentials.
- No password, cookie, token, merchant email, or raw payload in logs.
- Per-store access isolation.
- Credential read audit trail.
- Rotate encryption keys with versioning.
- Never pass session JSON through shell command arguments.
- Decryption errors fail closed; never retry ciphertext as plaintext.

## Reliability

- Provider-specific concurrency limits.
- Exponential retry with jitter.
- Circuit breaker when provider is unstable.
- Dead-letter queue for repeated failures.
- Selector/version monitoring.
- Failure screenshots stored briefly and access-controlled.
- Scheduled workflow/job failure must be visible and alertable.

## Checkout behavior

Do not run Playwright during checkout.

Preferred order:

1. Fresh cache
2. Acceptably stale last-known data
3. Fast provider API/internal endpoint call when session is healthy and latency budget permits
4. Unknown-risk result plus verification recommendation

Checkout response time must be bounded. Stale refresh is queued asynchronously.

## Third-party aggregator

Third-party fraud data may be used only as a fallback adapter. It must expose source, freshness, and confidence and must never be the hidden single source of truth.

`fraudchecker.link` is optional fallback-only and must not be imported by the risk engine.

## Source extraction notes

Reusable from the SaaS source:

- Basic Playwright navigation/fill/click/cookie extraction sequence
- Cookie names and internal endpoint request headers
- Initial provider status mapping fixtures

Rewrite requirements:

- Replace fixed sleep with validated state transitions and bounded waits
- Add invalid-credential/CAPTCHA/2FA/selector-change error taxonomy
- Remove hardcoded user agent/namespace assumptions where possible
- Replace shell-based Wrangler storage with a typed encrypted storage service
- Remove silent `continue-on-error`/per-store skipping
- Do not expose provider response/error bodies without redaction
