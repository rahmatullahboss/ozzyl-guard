# ADR 0002: Courier Data Must Use Provider Adapters

## Status

Accepted

## Date

2026-07-16

## Decision

All courier API access, browser automation, session handling, provider error mapping, and response normalization must live behind courier adapter/session-worker boundaries. The risk engine receives canonical normalized features only.

## Rationale

Courier interfaces can change without forcing changes to scoring, public API, plugins, or dashboard logic.

## Consequences

- Provider-specific changes are isolated.
- Shared adapter contract tests become mandatory.
- Risk engine remains deterministic and testable.
- Additional orchestration/storage layers are required.

## Enforcement

- `packages/risk-engine` cannot import provider/network/database/browser packages.
- API routes cannot import a provider session driver directly.
- Provider failures map to structured errors and explicit degraded/unknown features.
