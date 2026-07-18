# Browser Dead-Letter Operations

The merchant dashboard exposes failed durable work only to an authenticated active owner or administrator of the exact active organization/store.

## Read boundary

`GET /dashboard/v1/dead-letters` returns only typed work identity, attempt count, structured error code, failure time, and replayability metadata for failed courier refresh, webhook delivery, and verification delivery records. It never returns payloads, endpoint URLs, phone or OTP material, encrypted values, credentials, cookies, tokens, provider responses, or signing secrets.

## Replay boundary

`POST /dashboard/v1/dead-letter-replays` requires the opaque browser session, exact store scope, owner/admin authorization, CSRF proof, and a stable idempotency key. The dashboard assigns the key synchronously before network I/O and retains it after a failed request, so rapid duplicate interaction or a retry cannot create two replay decisions for the same visible work item.

The API delegates to the existing transactional PostgreSQL durable-work repository. That repository revalidates active relational scope, locks the failed row, rejects structural or expired work, clears stale lease and terminal state, returns valid work to the existing private worker queue, and atomically appends immutable replay and audit evidence.

## Operational limits

The browser performs no courier, webhook destination, browser automation, or OTP-provider network call. It does not implement automatic retry. A replayable item still depends on the appropriate private worker and its configured provider boundary. Blocked records require the remediation described by their structured replay-blocked reason or a new verification request where applicable.
