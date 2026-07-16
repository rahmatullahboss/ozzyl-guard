# ADR 0006: Production deployment topology

## Status

Accepted

## Date

2026-07-16

## Context

Ozzyl Guard already ships separate API, dashboard, admin, migration, courier-session, and courier-sync artifacts. Production hardening needs a durable deployment topology without coupling the synchronous checkout path to courier providers or placing Playwright/browser dependencies inside the public API.

A specific cloud or hosting vendor has not been selected and must not be implied by this decision.

## Decision drivers

- Preserve the existing service and worker boundaries.
- Keep provider access asynchronous and isolated.
- Support safe migrations, rollback, least privilege, and pilot observability.
- Avoid a second application architecture for production.
- Remain portable across managed container/application platforms.

## Considered options

1. One combined API and worker process on a single virtual machine.
2. Kubernetes as a mandatory first production platform.
3. Provider-neutral managed application/container runtime with independently deployed services.
4. Serverless functions for every API and worker component.

## Decision

Use a provider-neutral managed application or container runtime with one primary production region for the merchant pilot.

Deploy these units independently:

- public API;
- merchant dashboard static application;
- platform admin static application;
- one-off migration job;
- courier session worker using the Playwright image and a private worker identity;
- courier sync worker;
- event/webhook runner when implemented;
- verification runner when implemented.

The API and static applications may receive public traffic. Worker services and the migration job must not receive public ingress. The Playwright worker must use a separate image, service identity, resource limits, and restricted network policy.

Production artifacts are immutable. Database migrations run as a release job before application rollout. Application services must support graceful shutdown, readiness checks, and rollback to the previous compatible artifact.

The production target must support multiple API replicas and independent worker scaling. The selected merchant pilot may start with conservative replica counts, but the platform must not require architectural changes to add replicas.

Vendor selection, account creation, region selection, and commercial contracts remain separate operational decisions.

## Consequences

### Positive

- Preserves the existing monorepo and runtime boundaries.
- Keeps browser automation away from public request handling.
- Supports independent scaling and failure isolation.
- Avoids making Kubernetes a prerequisite for the pilot.
- Allows vendor selection without changing application architecture.

### Negative / trade-offs

- Multiple deployable units increase operational setup.
- A single primary region is simpler but does not provide active-active regional failover.
- Vendor-specific deployment manifests still need to be created after provider selection.

## Security and privacy impact

- API, migration, session worker, sync worker, event worker, and verification worker require separate least-privilege identities.
- Public ingress must terminate TLS and must not expose worker ports.
- Secrets must come from a managed secret store, not image layers or source control.
- Browser-worker egress and filesystem access must be restricted where practical.
- Production and staging credentials must remain isolated.

## Migration / rollout

1. Select a managed runtime and primary region using the requirements in this ADR.
2. Create isolated staging and production environments.
3. Provision service identities, private worker networking, and secret injection.
4. Deploy the migration job and verify rollback procedures.
5. Deploy API and workers with conservative pilot scaling.
6. Deploy dashboard/admin static assets.
7. Enable merchant traffic through a selected pilot and feature flags.

## Validation

- Migration job completes before application rollout.
- API readiness and graceful shutdown are tested.
- Worker services have no public ingress.
- Playwright worker uses its dedicated image and identity.
- Staging and production secrets are isolated.
- Rollback of API and worker artifacts is demonstrated before the pilot.

## Supersedes / superseded by

None.
