# Durable Work Dead-Letter Runbook

This runbook covers terminal courier refresh jobs, webhook deliveries, and verification delivery jobs. It implements [ADR 0012](../adr/0012-durable-work-dead-letter-operations.md).

## Preconditions

- Run from a trusted application/operations environment with `DATABASE_URL` configured through the approved secret boundary.
- Use the internal user ID of an active organization owner or administrator.
- Use the exact active organization and store IDs.
- Never paste database URLs, credentials, encrypted payloads, signing secrets, OTP values, cookies, or customer data into tickets, chat, shell history, or telemetry.
- Review the structured failure code and current provider/endpoint/session health before replay.

The CLI performs relational authorization again. Possession of database connectivity alone does not make a user/store combination authorized.

## Inspect failed work

```bash
npm run db:dead-letters -- \
  --requested-by-user-id usr_example \
  --organization-id org_example \
  --store-id sto_example \
  --limit 50
```

The response is secret-free and contains only:

- `workType`
- `workId`
- organization/store scope
- attempts
- structured error code
- failure time
- `replayable`
- `replayBlockedReason`

A record marked non-replayable must not be reset manually.

## Replay one failed item

```bash
npm run db:replay-dead-letter -- \
  --requested-by-user-id usr_example \
  --organization-id org_example \
  --store-id sto_example \
  --work-type webhook_delivery \
  --work-id wd_example \
  --idempotency-key incident-2026-07-18-wd-example
```

Supported work types:

- `courier_job`
- `webhook_delivery`
- `verification_job`

Use one stable idempotency key for the same operational decision. Repeating the exact command returns the persisted replay evidence without resetting the queue a second time. Reusing the key for another work item fails with `DEAD_LETTER_IDEMPOTENCY_CONFLICT`.

## Required review by work type

### Courier job

- Only `customer_observation_refresh` is replayable.
- Confirm the courier account/store relationship is active and provider access is expected to recover.
- Do not run Playwright or provider calls from this CLI; the existing private worker performs the next attempt.

### Webhook delivery

- Confirm the endpoint is active and the exact organization/store relationship is correct.
- Resolve DNS, endpoint, secret-rotation, or receiver availability incidents before replay.
- `INVALID_EVENT_PAYLOAD`, `LEGACY_EVENT_PAYLOAD_MISSING`, and `WEBHOOK_SCOPE_MISMATCH` are structural and cannot be replayed. Correct the source configuration/data through a reviewed change instead.
- A delivered row is never replayed or mutated by this operation.

### Verification job

- Confirm the verification session remains unexpired and is still in `delivery_failed` state.
- Confirm the production provider incident is resolved before replay.
- Expired, scope-mismatched, invalid, or undecryptable payload failures cannot be replayed. Create a new verification request so that a new OTP, hash, expiry, encrypted payload, and idempotency boundary are produced.
- Never retrieve or display the phone number, OTP, hash, or encrypted payload during this process.

## Result and audit

A successful first replay atomically:

1. locks and revalidates the failed source row;
2. clears old lease ownership and terminal failure state;
3. resets attempts to zero and queues the existing work for the current private worker;
4. inserts immutable `durable_work_replays` evidence;
5. inserts an `audit_events` record with action `durable_work.replayed`.

The runtime role can select and insert replay evidence but cannot update or delete it.

## Failure codes

- `STORE_ADMIN_REQUIRED`: user is not an active owner/admin of the exact active store.
- `DEAD_LETTER_NOT_FOUND`: the item does not exist as failed work in that tenant scope.
- `DEAD_LETTER_NOT_REPLAYABLE`: the current state is expired, structural, inactive, or otherwise unsafe.
- `DEAD_LETTER_IDEMPOTENCY_CONFLICT`: the key is already bound to another target.
- `DEAD_LETTER_STATE_CHANGED`: the work changed during the transaction; inspect again before acting.
- `DURABLE_WORK_OPERATION_FAILED`: unexpected CLI/repository failure. Inspect server/database health without exposing connection strings or payloads.

## Post-replay checks

- Verify the queue row is claimed only by the normal worker.
- Check the worker's structured error code, attempt, and completion state.
- Confirm exactly one replay ledger and audit record for the idempotency key.
- Watch queue lag and dead-letter counts for recurrence.
- Do not repeatedly issue new idempotency keys to bypass a persistent structural or provider failure.

## Rollback and containment

The operation cannot restore the previous failed state automatically after the worker has claimed the replayed item. To contain an incident, stop or scale down the relevant private worker and investigate through the approved runbook. Do not edit the replay ledger, delete audit evidence, or directly alter applied migrations.
