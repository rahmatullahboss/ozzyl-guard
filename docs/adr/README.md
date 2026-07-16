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

## Pending ADRs

- Authentication provider/implementation
- Queue/broker
- Deployment platform
- PostgreSQL provider
- KMS/vault and envelope-encryption implementation
- Cache/session storage

Copy [template.md](template.md) for new decisions.
