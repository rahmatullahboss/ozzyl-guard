# Ozzyl Guard Documentation Index

This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.

## Current verified milestone

The durable-work dead-letter operations foundation is merged on `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`. Final feature CI run `29644234591`, job `88079650134`, passed twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, and PHP syntax at tested head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`. Controlled replay remains explicit, tenant-authorized, audited, and provider-I/O-free; production source-pilot deployment and outcome calibration remain separate next steps.

## Architecture

- [Project overview](architecture/project-overview.md)
- [System architecture](architecture/system-architecture.md)
- [Initial repository audit](architecture/repository-audit.md)
- [Reuse map from multi-store-saas](architecture/copy-map-from-multi-store-saas.md)

## Product contracts

- [Public API specification](api/api-specification.md)
- [Database design](database/database-design.md)
- [Durable work replay ledger](database/durable-work-replay-ledger.md)
- [Courier intelligence](courier/courier-intelligence.md)
- [Canonical risk engine](risk-engine/risk-engine.md)
- [Integrations](integrations/integrations.md)

## Security, quality, and operations

- [Security and privacy](security/security-privacy.md)
- [Testing strategy](testing/testing-strategy.md)
- [Durable work dead-letter testing](testing/durable-work-dead-letter-testing.md)
- [Operations and observability](operations/operations-observability.md)
- [Durable work dead-letter runbook](operations/durable-work-dead-letter-runbook.md)
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
