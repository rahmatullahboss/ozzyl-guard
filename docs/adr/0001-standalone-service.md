# ADR 0001: Build Ozzyl Guard as a Standalone Service

## Status

Accepted

## Date

2026-07-16

## Context

Fraud detection currently exists inside a broader multi-store commerce application. WooCommerce, Shopify, custom websites, and the commerce platform itself must use the same intelligence and scoring logic.

## Decision

Create a standalone Ozzyl Guard service. The commerce platform becomes a client through a stable internal/public API.

## Consequences

### Positive

- One canonical risk engine
- Independent scaling and billing
- Platform-neutral integrations
- Clear data ownership and contracts
- Provider/session workers can scale independently

### Negative / trade-offs

- Network boundary and service operations
- Migration effort
- Need for robust authentication, idempotency, webhooks, and degraded behavior
- Additional deployment/database/queue decisions

## Migration / rollout

Implement the standalone foundation first. Integrate `multi-store-saas` behind a feature flag and shadow/compare decisions before removing embedded risk logic.
