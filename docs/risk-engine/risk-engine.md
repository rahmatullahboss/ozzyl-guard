# Risk Engine

## Philosophy

Start with a deterministic, explainable, versioned rule engine. Add ML only after enough verified outcomes exist.

## Hard boundary

The risk engine is a pure package. It performs no network, database, queue, filesystem, browser, credential-store, or provider calls.

External services assemble normalized features before invoking the engine.

## Input groups

### Courier features

- Shipped order count
- Delivered count
- Actual return count
- Delivery success rate
- Number of providers
- Observation freshness
- Provider/source confidence

### Merchant-history features

- Previous delivered orders at the same store
- Previous courier returns
- Repeated call cancellations
- Recent order frequency
- Order value deviation

### Velocity and identity features

- Multiple orders from same phone in a short period
- Multiple phones from same device
- Multiple customers from same IP
- Address similarity
- Session anomalies

### Verification features

- OTP verified
- OTP failures
- Phone unreachable
- IVR accepted/rejected
- Customer requested cancellation

### Network reputation

- Courier-confirmed negative outcomes
- Independent merchant count
- Positive delivered outcomes
- Evidence age and decay
- Active disputes

## Initial scoring model

Example contributions only; calibrate during pilot.

| Signal                                                | Contribution |
| ----------------------------------------------------- | -----------: |
| Delivery success below 30%, at least 5 shipped orders |          +35 |
| Return rate above 50%, at least 3 shipped orders      |          +30 |
| Two or more independent courier-confirmed returns     |          +20 |
| High-value COD order                                  |          +10 |
| Same phone creates multiple orders rapidly            |          +15 |
| Same device uses multiple phones                      |          +20 |
| OTP verified                                          |          -25 |
| Previous delivered order with same merchant           |          -20 |
| Strong multi-provider delivery history                |          -15 |

## Confidence

Risk score and confidence are separate.

Examples:

- 1 returned order out of 1: high negative rate, low confidence.
- 12 returned orders out of 20: high negative rate, high confidence.
- No data: unknown risk, low confidence.

Confidence must consider sample size, source trust, provider count, freshness, evidence age, and degraded inputs.

## Decision thresholds

|  Score | Default decision |
| -----: | ---------------- |
|   0–24 | allow            |
|  25–44 | verify           |
|  45–64 | review           |
|  65–79 | hold             |
| 80–100 | block            |

Merchant policies may override actions, but score calculation must remain versioned and auditable.

## Unknown handling

Unknown must not equal safe.

Recommended response:

- `risk_level: unknown`
- low confidence
- `decision: verify`
- explicit missing/degraded signal metadata

Provider failure must not automatically block the customer.

## Engine API

```ts
assessRisk({
  order,
  customer,
  courierFeatures,
  merchantFeatures,
  velocityFeatures,
  verificationFeatures,
  networkFeatures,
  policy,
});
```

The function returns score, confidence, risk level, decision, signals, recommended actions, and version metadata.

## Versioning

Persist:

- engine version
- feature version
- policy version
- signal contributions
- confidence inputs

This allows recalculation, audit, regression comparison, and A/B evaluation.

## Source SaaS reuse

Reusable concepts:

- Bangladesh phone normalization
- signal contribution shape
- clamping to 0–100
- decision categories and configurable thresholds
- distinction between courier returns and pre-shipping cancellations

Rewrite requirements:

- Remove all `fetch`/provider calls from scoring
- Remove database objects from engine inputs
- Remove `fraudchecker.link` dependency
- Replace `name` signal field with canonical `code`
- Do not assign 100% success or zero risk to no-history customers
- Remove duplicate COD-delivery-rate decision implementation
- Replace blacklist logging stubs with a later evidence-backed reputation service
- Centralize threshold/policy versioning

## Testing requirements

- Golden tests for every policy version
- Boundary tests for all score thresholds
- No-data/unknown tests
- Stale/degraded observation tests
- Property tests for score bounds and deterministic output
- Regression fixtures from verified pilot outcomes
- Static/dependency rule preventing network/database/provider imports
