# Ozzyl Guard Documentation Index

This directory is the long-term product and engineering source of truth. New developers and AI agents should start with `../tracker.yml`, `../AGENTS.md`, and the handoff files under `../.ai-bridge/`, then read the documents relevant to the change.

## Current verified milestone

The authenticated merchant browser dead-letter operations surface is merged on `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`. Final feature CI run `29645967968`, job `88084164235`, passed twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, and PHP syntax at tested head `2129b51ca7393b3c942f2f5c074cb3990b615b89`. Listing remains exact-store, owner/admin-only, and secret-free; replay remains CSRF-protected, idempotent, audited, and provider-I/O-free. The generated continuation bundle remains marked for repository-local refresh.

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
