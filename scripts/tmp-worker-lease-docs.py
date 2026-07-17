from pathlib import Path


def replace(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected one match in {path}, found {count}")
    file.write_text(text.replace(old, new))


replace(
    "docs/database/database-design.md",
    """### `courier_sync_jobs`

- provider/account
- job type
- status
- attempts
- scheduled time
- started/completed time
- error code
""",
    """### `courier_jobs`

- `courier_account_id`
- job type and durable payload
- status and attempts
- scheduled time
- `claimed_by`
- `claimed_at`
- `lease_expires_at`
- started/completed time
- error code

Courier jobs are claimed atomically with `FOR UPDATE SKIP LOCKED`. The current worker owner must match every start, completion, retry, or terminal-failure transition. Expired `claimed` or `processing` jobs may be reclaimed while fresh leases cannot be stolen. Exhausted stale jobs fail closed with `LEASE_EXPIRED`.

Organization, store, and provider scope come from the `courier_accounts` and `stores` relationships. Payload scope fields are compatibility assertions only and must never override relational scope.
""",
)

replace(
    "docs/database/database-design.md",
    """6. `0006_browser_access.sql` — explicit platform role plus browser dashboard/admin query indexes.

Migration 0006 does not store raw session material. `user_sessions.token_hash` remains the only persisted session-token representation. The merchant dashboard repository authorizes with `(user_id, organization_id, store_id)` before running any aggregate query.
""",
    """6. `0006_browser_access.sql` — explicit platform role plus browser dashboard/admin query indexes.
7. `0007_worker_leases.sql` — explicit courier-worker ownership, claim/lease timestamps, stale-job recovery support, and claim scheduling index.

Migration 0006 does not store raw session material. `user_sessions.token_hash` remains the only persisted session-token representation. The merchant dashboard repository authorizes with `(user_id, organization_id, store_id)` before running any aggregate query.

Migration 0007 is append-only and does not rewrite prior migration files. CI applies the complete migration set twice against the same PostgreSQL service to verify replay safety.
""",
)
