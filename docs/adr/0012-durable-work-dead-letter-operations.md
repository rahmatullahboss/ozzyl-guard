# ADR 0012: Durable work dead-letter inspection and controlled replay

- Status: Accepted
- Date: 2026-07-18

## Context

Courier refresh jobs, webhook deliveries, and verification delivery jobs already use PostgreSQL-backed claims, owner-checked leases, bounded retries, stale-work recovery, and terminal `failed` states. Operators can observe aggregate failures, but the repository did not provide one authenticated, tenant-scoped way to inspect terminal work and safely return a valid item to its existing worker queue.

Direct SQL updates are unsafe because they can bypass organization/store authorization, carry stale lease ownership, reset structurally invalid work, duplicate a replay during concurrent requests, expose encrypted payloads or signing secrets, or reopen an expired verification session.

## Decision

1. PostgreSQL remains the authoritative durable-work and replay-evidence source of truth.
2. Add append-only migration `0012_durable_work_replays.sql` and an immutable `durable_work_replays` ledger.
3. The initial operator surface is a repository-backed CLI. It requires an active user who is an owner or administrator of the exact active organization/store.
4. Dead-letter listing returns only safe operational fields: work type, internal work ID, organization/store IDs, failed status, attempts, structured error code, failure time, and a replayability reason. It never returns job payloads, customer data, endpoint URLs, encrypted material, credentials, cookies, OTPs, signing secrets, or provider response bodies.
5. Replay is explicit, transactional, and idempotent by organization, store, and operator-supplied idempotency key. Concurrent duplicates resolve to one queue reset and one immutable replay record.
6. The source row must still be `failed`, unclaimed, and relationally owned by the authorized active store. Replay clears previous attempts, terminal timestamps, error state, and lease ownership before setting the existing queue status to `queued`.
7. Courier replay is limited to the implemented `customer_observation_refresh` job type.
8. Webhook replay requires an active endpoint with valid organization/store scope. Structural failures such as invalid event payload, legacy missing payload, or scope mismatch remain non-replayable.
9. Verification replay requires an unexpired `delivery_failed` session, a current OTP attempt, valid relational scope, and a non-structural failure. Expired, scope-mismatched, invalid, or undecryptable verification payloads fail closed and require a new verification request rather than replay.
10. Every successful first replay appends `durable_work_replays` evidence and an `audit_events` record. Replay evidence is readable and insertable by the runtime role but is not updateable or deletable.
11. No automatic replay loop, provider call, queue worker, or checkout/API scoring behavior is added. Existing private workers remain the only components that perform provider or webhook network I/O.

## Consequences

- Operators have one bounded and auditable recovery path instead of ad hoc SQL.
- Tenant isolation and active-store ownership are revalidated at operation time.
- Secret-bearing payloads remain inside their existing worker boundaries.
- Structural and expired failures are visibly non-replayable rather than being reset into repeated unsafe failure loops.
- Resetting attempts gives an explicitly approved replay a fresh bounded worker retry budget; prior attempts and error state remain preserved in immutable replay evidence and audit metadata.
- The initial CLI requires trusted operational access to the application runtime and database connection. A future dashboard surface may call the same repository, but must preserve the same authorization, CSRF, rate-limit, audit, and secret-free response boundaries.

## Alternatives rejected

### Automatically replay every terminal failure

Rejected because structural failures, expired OTP sessions, inactive webhook endpoints, and provider uncertainty require operator judgment or new source data.

### Update failed rows directly with SQL runbooks

Rejected because direct SQL lacks a canonical authorization, idempotency, audit, and replayability policy.

### Copy failed payloads into a separate dead-letter queue

Rejected for the current pilot because it duplicates encrypted or sensitive durable payloads and creates a second source of truth. The terminal source row remains authoritative and the replay ledger stores only safe metadata.

### Add provider calls to the CLI or API

Rejected because provider and webhook I/O belongs only in private workers and must not enter synchronous administration or checkout paths.

## Rollback

Disable the CLI and repository call sites. Existing queued work continues through the current workers, and already appended replay/audit evidence remains immutable. Do not remove or edit migration `0012`; any future schema change must use a new append-only migration.
