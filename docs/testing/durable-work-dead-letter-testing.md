# Durable Work Dead-Letter Testing

The durable-work replay slice uses real PostgreSQL because its safety depends on row locks, advisory locks, relational authorization, transaction rollback, unique idempotency, runtime grants, and queue-state updates.

## Required integration coverage

`packages/database/src/dead-letter-operations.postgres.test.ts` verifies:

1. secret-free listing is limited to one active organization/store and requires owner/admin membership;
2. concurrent duplicate webhook replay creates one queue reset, one replay ledger row, and one audit record;
3. courier replay clears prior attempts, terminal state, and lease ownership;
4. verification replay atomically reopens only an unexpired scoped `delivery_failed` session, its job, and its latest OTP attempt;
5. structural webhook failures, expired verification sessions, cross-tenant work IDs, and idempotency-key conflicts fail closed.

The suite must run after all migrations are applied. Without `DATABASE_URL`, the real-PostgreSQL tests are intentionally skipped locally; CI provides PostgreSQL 16 and is the authoritative integration gate.

## Migration and privilege gates

CI must also prove:

- migration `0012` matches its committed SHA-256 manifest entry;
- initial apply and immediate replay succeed;
- migration-history integrity remains contiguous and checksum-bound;
- clean backup/restore rehearsal includes the replay ledger and data hashes;
- the runtime-role table policy is current;
- the runtime role can select and insert replay evidence but cannot update/delete it or access migration history/DDL.

## Security assertions

Tests and reviews must confirm that listing, replay results, replay evidence, audit metadata, logs, and errors omit:

- encrypted courier/session/verification payloads
- webhook payloads and endpoint signing secrets
- raw phone values, phone hashes, OTP values, and OTP hashes
- credentials, cookies, access tokens, raw API keys, and database connection strings

## Failure-isolation assertions

- A failed listing or replay does not trigger any provider, webhook, browser, or OTP network call.
- A replay transaction failure leaves the source item failed and writes no evidence or audit row.
- A structurally invalid or expired item remains failed.
- Other organizations and stores remain unchanged.
- Reusing a stable idempotency key for the same item is a read-only replay response; using it for another item is a conflict.

## Future extensions

A future dashboard/API surface must reuse the repository and add browser-session authorization, exact store scope, CSRF protection for replay, rate limiting, audit correlation, and UI tests. It must not weaken the CLI/repository replayability rules.
