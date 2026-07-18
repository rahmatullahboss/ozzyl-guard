# Architecture Decision Records

ADRs capture durable architectural decisions, alternatives, consequences, and supersession history.

## Status values

- Proposed
- Accepted
- Superseded
- Deprecated
- Rejected

## Rules

1. Do not silently change an accepted architectural boundary.
2. Add a new ADR or explicitly supersede an existing one.
3. Link implementation and migration work to the relevant ADR.
4. Record unresolved choices as Proposed, not as implied facts.
5. Update `.ai-bridge/decisions.md` with the active summary.

## Accepted ADRs

- [0001 — Standalone service](0001-standalone-service.md)
- [0002 — Courier adapter boundary](0002-courier-adapter-boundary.md)
- [0003 — Keep Steadfast session scraper](0003-keep-steadfast-session-scraper.md)
- [0004 — Foundation technology direction](0004-foundation-technology-direction.md)
- [0005 — Browser session authentication baseline](0005-browser-session-authentication.md)
- [0006 — Production deployment topology](0006-production-deployment-topology.md)
- [0007 — Managed PostgreSQL production baseline](0007-managed-postgresql-production-baseline.md)
- [0008 — PostgreSQL-first durable work and cache boundary](0008-postgresql-first-durable-work-and-cache.md)
- [0009 — Managed secrets and KMS envelope encryption](0009-managed-secrets-and-kms-envelope-encryption.md)
- [0010 — Vendor-neutral production observability](0010-vendor-neutral-production-observability.md)
- [0011 — Selected source-platform shadow pilot](0011-selected-source-shadow-pilot.md)

## Pending ADRs

- Managed identity provider or future authentication supersession
- Specific deployment platform, account, and primary region
- Specific managed PostgreSQL provider and service tier
- Specific managed secret store and KMS/vault provider
- Specific observability backend and retention policy
- Redis-compatible cache provider when distributed coordination is required
- Dedicated broker only if pilot evidence exceeds the PostgreSQL-first durable-work boundary
- OTP provider

Copy [template.md](template.md) for new decisions.
