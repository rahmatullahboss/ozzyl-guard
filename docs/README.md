# Ozzyl Guard Documentation Index

This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.

## Current verified milestone

The durable worker heartbeat milestone is merged on `main` as `6ab01a78713afdef47fde3a8d462f2bd6a43403a`, with verification evidence merged as `f19e9b4183b9b809f5f8cc45e301a1fa8a819a8b`. Feature CI run `30322016826`, job `90159676583`, passed the twelve-migration baseline, 20 typechecks, 31 Turbo tasks with 145 assertions, 20 builds, GitGuardian, audit, restore, runtime-role, and PHP gates. Courier, webhook, and verification workers renew owner-checked leases, abort active provider I/O on renewal loss, and drain heartbeats before final state transitions. The current retention/archive slice adds migration `0013` and remains source-branch work until its PostgreSQL-integrated CI evidence is recorded.

## Architecture

- [Project overview](architecture/project-overview.md)
- [System architecture](architecture/system-architecture.md)
- [Initial repository audit](architecture/repository-audit.md)
- [Reuse map from multi-store-saas](architecture/copy-map-from-multi-store-saas.md)

## Product contracts

- [Public API specification](api/api-specification.md)
- [Database design](database/database-design.md)
- [Durable work replay ledger](database/durable-work-replay-ledger.md)
- [Durable work retention and archive](database/durable-work-retention.md)
- [Courier intelligence](courier/courier-intelligence.md)
- [Canonical risk engine](risk-engine/risk-engine.md)
- [Integrations](integrations/integrations.md)

## Security, quality, and operations

- [Security and privacy](security/security-privacy.md)
- [Testing strategy](testing/testing-strategy.md)
- [Durable work dead-letter testing](testing/durable-work-dead-letter-testing.md)
- [Operations and observability](operations/operations-observability.md)
- [Durable work dead-letter runbook](operations/durable-work-dead-letter-runbook.md)
- [Durable work retention runbook](operations/durable-work-retention-runbook.md)
- [Browser dead-letter operations](operations/browser-dead-letter-operations.md)
- [Development environment](operations/development-environment.md)
- [Deployment](operations/deployment.md)

## Delivery and continuation

- [Implementation roadmap](roadmap/implementation-roadmap.md)
- [Initial backlog](roadmap/initial-backlog.md)
- [Risk register](roadmap/risk-register.md)
- [Architecture decision records](adr/README.md)
- [Current plan](../.ai-bridge/current-plan.md)
- [Implementation status](../.ai-bridge/implementation-status.md)
- [Decision log](../.ai-bridge/decisions.md)
- [Full continuation context](../.ai-bridge/pro-context.md)

## Documentation rules

- Change code and its contract documentation together.
- Add a new ADR when changing a system boundary, infrastructure choice, data model strategy, or security model.
- Never remove historical ADRs or edit already-applied migrations to make a new change appear older.
- Update `../tracker.yml` and `../.ai-bridge/implementation-status.md` after every material milestone.
- Keep remaining risks, external dependencies, rollback considerations, and verification evidence explicit.
