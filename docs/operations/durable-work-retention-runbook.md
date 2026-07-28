# Durable Work Retention Runbook

Use this runbook only with an approved maintenance window and a reviewed database identity. The normal API/worker runtime role is intentionally unable to run these commands.

## Preconditions

1. Migration `0013_durable_work_archives.sql` is applied and migration-history integrity passes.
2. The maintenance identity has the exact privileges documented in [Durable Work Retention and Archive Model](../database/durable-work-retention.md).
3. Queue backlog, active claims, replay requests, support tickets, and incident holds have been reviewed.
4. The selected cutoff follows the approved retention window. Baseline guidance is at least 30 days for completed work and 180 days for failed work.
5. A recent backup or managed point-in-time recovery point is available if the maintenance window requires recoverability.
6. The operator has recorded a change ticket, expected row range, cutoff, status selection, batch size, and rollback owner.

## Preview

Preview is read-only but still requires the maintenance identity to prevent broad queue inspection through application credentials.

```bash
DATABASE_URL=<maintenance-database-url> npm run db:retention-preview -- \
  --cutoff 2026-06-28T00:00:00.000Z \
  --status completed \
  --limit 100
```

Allowed status values:

- `completed`
- `failed`
- `all`

Review every returned work ID, tenant scope, terminal status, attempt count, error code, and timestamp. The response must contain no source payload, provider reference, endpoint material, OTP data, or raw contact data.

Repeat preview with the exact intended archive arguments immediately before execution. Stop when:

- any candidate is inside an incident or support hold;
- failed work is still expected to be replayed;
- the cutoff or status selection is wrong;
- candidate volume is materially different from the approved change ticket;
- archive or source-table privileges are broader than expected.

## Execute one bounded batch

Execution requires the exact confirmation phrase. The maximum batch is 500; start with 100 or less.

```bash
DATABASE_URL=<maintenance-database-url> npm run db:retention-archive -- \
  --cutoff 2026-06-28T00:00:00.000Z \
  --status completed \
  --limit 100 \
  --archive-run-id dwar_change-20260728-001 \
  --confirm ARCHIVE_TERMINAL_DURABLE_WORK
```

When `--archive-run-id` is omitted, the command generates an opaque `dwar_` identifier. Use a reviewed stable run ID when operational correlation is required.

The command locks each selected row, writes or validates archive evidence, deletes the source row, and commits the batch atomically. Rows that changed state or are locked by another transaction are skipped.

## Post-run verification

For every batch:

1. Confirm the command exit status is zero.
2. Compare archived count with the immediately preceding preview.
3. Query `durable_work_archives` using the maintenance identity and confirm the expected `archive_run_id`, `archived_by`, work types, statuses, and tenant scope.
4. Confirm the corresponding source rows no longer exist.
5. Confirm queued, claimed, processing, retryable, recent, or otherwise ineligible rows remain.
6. Confirm `durable_work_replays` and `audit_events` were not deleted.
7. Re-run preview with the same cutoff and status. Continue only with another approved bounded batch.
8. Record counts, duration, skipped rows, errors, and operator identity in the change ticket.

## Failure handling

Before commit, any archive conflict, source-state mismatch, privilege failure, or SQL error rolls back the whole batch. Correct the cause and preview again; do not manually delete source rows.

After commit, the archive contains metadata only and cannot reconstruct deleted payloads. Recovery requires an approved backup or point-in-time restore into a distinct database, investigation, and an explicit recovery/cutover decision. Do not insert reconstructed queue rows directly into production without a reviewed incident procedure.

If a failed row was archived before support or replay review completed:

- stop subsequent batches;
- preserve the archive row and change-ticket evidence;
- determine whether backup/PITR recovery is justified;
- do not fabricate payload or replay evidence;
- document the retention-policy failure and corrective control.

## Scheduling

Do not schedule automatic deletion until production owners approve:

- completed and failed retention windows;
- incident/legal hold handling;
- maintenance identity and credential rotation;
- monitoring and alert thresholds;
- backup/PITR recovery procedure;
- archive and audit-evidence retention.

The repository provides a controlled CLI, not an unattended scheduler.
