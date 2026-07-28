# Durable Work Retention and Archive Model

This document defines the canonical retention boundary introduced by migration `0013_durable_work_archives.sql`.

## Purpose

Courier refresh jobs, webhook deliveries, and verification delivery jobs contain operational payloads that should not remain indefinitely after the work is terminal. The retention process removes old terminal source rows only after writing a bounded, secret-free archive record in the same PostgreSQL transaction.

The archive is operational evidence, not a payload backup. It cannot reconstruct deleted courier payloads, webhook event bodies, encrypted verification payloads, or provider references.

## Eligible work

Only these source states are eligible:

- `completed`
- `failed`

The following are never eligible:

- queued or scheduled work
- claimed or processing work
- retryable work waiting for another attempt
- any row whose terminal timestamp is newer than the operator cutoff

The repository enforces an absolute safety floor: the cutoff must be at least 24 hours before the maintenance run. Production policy should be more conservative.

## Recommended baseline windows

Until legal, privacy, support, and incident-response owners approve different values:

- keep completed durable work in the source queue for at least 30 days;
- keep failed durable work in the source queue for at least 180 days so merchant support and reviewed replay remain possible;
- retain `durable_work_replays`, `audit_events`, and `durable_work_archives` under a separately approved evidence-retention policy;
- do not use this maintenance process to delete replay or audit evidence.

These are operational baseline recommendations, not jurisdiction-specific legal advice.

## Archive record

`durable_work_archives` stores only:

- work type and original work ID;
- organization and optional store scope;
- terminal status;
- attempt count;
- bounded error code;
- terminal timestamp;
- source creation timestamp;
- archive timestamp, opaque archive-run ID, and the maintenance database identity that committed the evidence.

The table deliberately has no columns for:

- courier payloads;
- webhook event payloads or response bodies;
- encrypted verification payloads;
- OTP hashes or raw contact data;
- provider message IDs;
- endpoint URLs, signing material, credentials, cookies, or tokens.

The primary key is `(work_type, work_id)`, making archive evidence idempotent for one original source row.

## Transaction and concurrency rules

The archive operation:

1. validates a bounded global batch of at most 500 candidates;
2. re-locks selected source rows with `FOR UPDATE SKIP LOCKED`;
3. rechecks terminal status and cutoff after locking;
4. inserts archive evidence with `ON CONFLICT DO NOTHING`;
5. verifies any existing archive row exactly matches the locked source metadata;
6. deletes the source row only after matching archive evidence exists;
7. commits all archive and delete changes atomically.

If evidence conflicts, source state changes, or any statement fails, the transaction rolls back. Locked or concurrently changed rows are skipped rather than forced.

## Access boundary

The normal application runtime role is explicitly denied all privileges on `durable_work_archives` and has no `DELETE` privilege on durable source queues. Preview and archive commands require a reviewed maintenance or migration identity with:

- `SELECT` and `INSERT` on `durable_work_archives`;
- `DELETE` on `courier_jobs`, `webhook_deliveries`, and `verification_jobs`;
- read access needed to derive tenant scope.

Do not run retention commands using API or worker runtime credentials.

## Evidence preserved after source deletion

The following remain authoritative after archival:

- the secret-free `durable_work_archives` row;
- any immutable `durable_work_replays` records;
- existing `audit_events`;
- parent business records such as verification sessions, subject to their own future retention policy.

Because the source payload is intentionally deleted, post-commit restoration requires an approved backup or point-in-time recovery process. There is no automatic archive-to-source rehydration command.
