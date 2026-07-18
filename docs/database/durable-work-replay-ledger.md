# Durable Work Replay Ledger

This document supplements the canonical database design for migration `0012_durable_work_replays.sql` and [ADR 0012](../adr/0012-durable-work-dead-letter-operations.md).

## Purpose

`durable_work_replays` is an immutable evidence ledger for explicit operator decisions that return valid terminal work to an existing PostgreSQL queue. It is not a second queue and does not copy job payloads.

The source rows remain authoritative:

- `courier_jobs`
- `webhook_deliveries`
- `verification_jobs`

## Columns

| Column | Meaning |
| --- | --- |
| `id` | Internal replay evidence ID |
| `organization_id` | Authoritative tenant organization |
| `store_id` | Exact active store scope |
| `requested_by_user_id` | Owner/admin user who requested replay; retained as nullable if the user is later removed |
| `work_type` | `courier_job`, `webhook_delivery`, or `verification_job` |
| `work_id` | Internal source work ID; no payload is copied |
| `idempotency_key` | Operator-supplied stable replay decision key |
| `previous_status` | Source status before replay; currently `failed` |
| `previous_error_code` | Structured source failure code |
| `previous_attempts` | Attempt count before the explicit replay reset |
| `replayed_status` | Resulting queue status; constrained to `queued` |
| `replayed_at` | Transaction time of the queue reset |
| `created_at` | Ledger insertion time |

## Constraints

- `(store_id, organization_id)` references the authoritative composite store scope from migration `0011`.
- `(organization_id, store_id, idempotency_key)` is unique, so concurrent duplicates produce one durable replay decision.
- `work_type` is constrained to the three supported durable-work categories.
- `previous_attempts` cannot be negative.
- `replayed_status` is constrained to `queued`.

A polymorphic foreign key to all three source tables is intentionally not used. The replay repository locks and revalidates the exact typed source relation in the same transaction before inserting evidence. This avoids copying source payloads or introducing three nullable target references while preserving tenant and state checks.

## Transaction boundary

The first successful replay transaction performs:

1. active user/organization/store owner-or-admin authorization;
2. a transaction-scoped advisory lock for the tenant idempotency key;
3. existing replay lookup and target conflict validation;
4. typed source-row lock with exact active tenant relationship;
5. replayability validation;
6. queue reset to `queued` with cleared lease and terminal fields;
7. replay ledger insert;
8. append-only `audit_events` insert;
9. commit.

Any failure rolls back the queue reset, replay evidence, and audit event together.

## Sensitive-data boundary

The replay ledger must never contain:

- courier request/response payloads
- phone numbers or phone hashes
- OTP values or OTP hashes
- verification encrypted payloads
- webhook event payloads
- endpoint URLs or signing secrets
- provider credentials, sessions, cookies, tokens, or raw response bodies

## Runtime privileges

The least-privilege runtime role receives:

- `SELECT` for idempotent replay reads and evidence inspection
- `INSERT` for new immutable replay evidence

It does not receive `UPDATE`, `DELETE`, table ownership, DDL, or migration-history access. Runtime grants must be reapplied after migration `0012`.

## Retention

Replay evidence is operational audit material. No automatic deletion policy is implemented in this milestone. A future retention decision must account for incident review, merchant support, legal/privacy requirements, and audit retention before adding a new append-only migration or archival process.
