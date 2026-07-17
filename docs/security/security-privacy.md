# Security and Privacy

## Authentication

- Dedicated user identity system
- Argon2id for passwords or managed authentication
- Secure HTTP-only opaque sessions
- Session rotation on login and privilege change
- CSRF protection for browser actions
- MFA for organization owners/admins later
- Role-based access control

API keys are service credentials and must never be used as dashboard login sessions.

Pilot browser-session baseline:

- Argon2id verifies local passwords; a future managed identity provider may supersede credential verification.
- A cryptographically random opaque token is sent only in an `HttpOnly`, `SameSite=Lax` cookie and only its HMAC hash is stored.
- Production cookies require TLS and the `Secure` flag.
- `SESSION_PEPPER` and `SESSION_CSRF_SECRET` are independent server-held secrets and must come from the approved secret manager.
- State-changing browser requests require a derived CSRF proof.
- Active users, unexpired/unrevoked sessions, organization membership, active organization, and active store are revalidated.
- Platform administration requires the explicit `platform_admin` role; organization membership alone is insufficient.
- Login, logout, merchant overview access, and platform-admin overview access are audited without raw credentials or cookie values.

## API keys

- Generate with cryptographically secure random bytes
- Prefix by environment: `ozg_test_` or `ozg_live_`
- Store only a strong hash
- Display raw key once
- Support rotation, revocation, expiry, scopes, last-used time, and optional origin/IP restrictions
- Never place raw keys in metadata, logs, analytics, URLs, or cookies

## Sensitive data

Never log:

- Raw passwords
- Courier cookies or tokens
- Raw API keys
- OTP plaintext
- Full phone number where masking is sufficient
- Access tokens
- Webhook signing secrets or decrypted secret envelopes
- Raw courier payloads unless explicitly encrypted, access-controlled, retained briefly, and required for evidence/debugging
- Unrestricted domain-event or request payloads

All exception/error serialization must pass through a central redaction layer. Worker logs use structured identifiers and error codes, not secret-bearing exception payloads.

## Phone data

- Normalize consistently
- Use keyed hash/HMAC for cross-table matching where appropriate
- Encrypt raw phone only when operational lookup is necessary
- Separate analytics identity from operational contact data
- Document retention and deletion behavior
- Do not include raw phone values in webhook outbox events

## Credential and envelope storage

- Envelope encryption
- Key version stored with ciphertext
- Master keys outside database
- Rotation procedure
- Strict service identity permissions
- Separate authenticated encryption context for credentials, sessions, webhook endpoints, and verification jobs
- Audit credential reads and decrypt operations
- Decryption failure must fail closed
- No plaintext compatibility fallback

The local/self-hosted AES-256-GCM implementation is isolated in `@ozzyl/encryption`. Production key generation, wrapping, access policy, rotation, and decrypt authorization must move to the accepted managed KMS/vault boundary without changing caller contracts.

Webhook signing secrets are stored only as encrypted endpoint material. The event worker decrypts them using the authenticated context `webhook-endpoint:<endpoint-id>` immediately before signing; the API and checkout path do not need plaintext access for delivery.

## Multi-tenancy

Every merchant-owned record includes organization/store scope. Repository methods require scope parameters rather than optional filters. API-key resolution, feature assembly, assessment/outcome writes, dashboards, and tenant administration revalidate that the store is active and belongs to the active organization; matching caller-supplied identifiers alone are not authoritative.

Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, verifications, or logs.

Webhook delivery rows persist explicit organization/store scope and are revalidated against the endpoint and store relationships before claim. Mismatched rows fail closed instead of being sent. Webhook and verification administration require active owner/admin membership and return only operational metadata; signing-secret ciphertext, OTP hashes, encrypted job payloads, and raw phone values are excluded.

## PostgreSQL role separation

- The migration owner applies schema changes, owns relations, records migration history, and runs `npm run db:runtime-grants` after migrations.
- Runtime services connect with an externally provisioned non-owner `LOGIN` that has no superuser, `CREATEDB`, `CREATEROLE`, replication, `BYPASSRLS`, inherited role memberships, database ownership, schema ownership, or relation ownership.
- Runtime privileges are explicit current-table `SELECT`/`INSERT`/`UPDATE` grants only where required. Migration history, `DELETE`, DDL, schema creation, and role management remain denied.
- The grant command verifies the complete current table inventory and effective privileges, so a new table or an implicit/public privilege fails closed until the policy is reviewed.
- Production may split this reviewed baseline into narrower API and worker roles, but no runtime identity may become the migration owner.

## Shared reputation safeguards

- No single merchant report should globally block a customer.
- Prefer courier-confirmed outcomes.
- Require independent evidence for high-impact reputation.
- Apply time decay.
- Provide dispute and correction mechanisms.
- Detect abusive or low-quality reporters.
- Preserve evidence lineage.
- Do not launch cross-merchant reputation in the foundation MVP without privacy/legal review.

## OTP security

- 6-digit cryptographically random OTP
- Store only hash
- 5–10 minute expiry
- Maximum attempts
- Per-phone, per-IP, per-store, and per-organization rate limits
- Bind OTP to verification session/order/purpose
- Do not expose delivery success when provider actually failed
- Do not log OTP values
- Provider delivery runs only in the private verification worker, never synchronous API handling
- Persist phone and OTP for delivery only inside an encrypted job payload; queue columns and logs remain non-sensitive
- Bind ciphertext to `verification-job:<job-id>` authenticated context
- Validate organization, store, purpose, phone HMAC, and OTP hash before provider I/O
- Require current unexpired lease ownership for start, retry, delivery, and failure transitions
- Fail both the job and authoritative session closed on relational scope mismatch
- Pass a stable verification idempotency key to provider adapters to reduce duplicate sends after uncertain outcomes

## Webhook security

- Emit durable outbox rows in the same transaction as the newly persisted assessment or outcome
- Never perform merchant webhook network delivery from the risk engine, checkout handler, or API persistence transaction
- Use stable event IDs and `(endpoint_id, event_id)` uniqueness for replay/idempotency control
- Sign the exact canonical event payload with HMAC-SHA256 over `timestamp.payload`
- Require HTTPS
- Reject URL credentials, localhost names, `.local` names, literal non-public IPv4/IPv6 addresses, and metadata destinations
- Resolve hostnames before fetch and reject the destination when any resolved address is invalid or non-public
- Treat DNS resolution failure as retryable without making a request
- Disable redirects to prevent redirect-based destination bypass
- Apply bounded timeout, attempt limit, backoff, and terminal failure
- Require the current unexpired worker lease for delivery-state transitions
- Do not include raw phone, OTP, API keys, provider credentials, or signing secrets in event payloads or logs

Application-level URL and DNS validation is not sufficient by itself against every DNS-rebinding, routing, proxy, or infrastructure failure. Production must also restrict event-worker egress, block metadata/private networks at the network layer, and use a controlled resolver or equivalent policy.

## Web security

- CSRF protection for dashboard actions
- CSP and secure headers
- Input validation and output encoding
- SSRF protection in webhook/custom URL features
- HMAC-signed webhooks
- Timestamp and replay prevention
- Request size limits
- Idempotency abuse protection
- Safe CORS configuration by integration type

## Courier automation security

- Playwright runs in isolated workers with least privilege
- No browser execution in synchronous API/checkout paths
- Screenshots/traces are redacted, access-controlled, and short-lived
- Provider credentials are not passed through shell arguments
- Session refresh failures are visible; they are never silently ignored
- Provider terms and merchant authorization must be reviewed before commercial scale

## Operational security

- Audit logs
- Secret rotation
- Dependency scanning
- SAST and secret scanning
- Backups and restore testing
- Incident response runbook
- Key compromise, webhook-secret compromise, and courier credential compromise runbooks
- Queue/outbox lease recovery and dead-letter procedures
- Production access review and break-glass procedure
- Private worker ingress and controlled egress

## Source SaaS findings that must not be copied

- Custom SHA-256 password hashing
- Raw API key saved in metadata
- Raw API key used as a login cookie
- Full phone numbers logged by blacklist stubs
- Shell commands containing session payloads
- Hardcoded infrastructure identifiers
- Decryption fallback to plaintext
- Broad unaudited cross-store lookup
- Synchronous webhook delivery in checkout handling
- Plaintext webhook signing secrets in configuration or logs
