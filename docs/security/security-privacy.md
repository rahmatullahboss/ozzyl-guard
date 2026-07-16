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
- Raw courier payloads unless explicitly encrypted, access-controlled, retained briefly, and required for evidence/debugging

All exception/error serialization must pass through a central redaction layer.

## Phone data

- Normalize consistently
- Use keyed hash/HMAC for cross-table matching where appropriate
- Encrypt raw phone only when operational lookup is necessary
- Separate analytics identity from operational contact data
- Document retention and deletion behavior

## Credential storage

- Envelope encryption
- Key version stored with ciphertext
- Master keys outside database
- Rotation procedure
- Strict service identity permissions
- Separate encryption context/keys for credentials and sessions
- Audit credential reads and decrypt operations
- Decryption failure must fail closed

## Multi-tenancy

Every merchant-owned record includes organization/store scope. Repository methods require scope parameters rather than optional filters.

Tests must prove that one organization/store cannot read, mutate, infer, or enumerate another tenant's data through IDs, external references, caches, jobs, webhooks, or logs.

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
- Key compromise and courier credential compromise runbooks
- Production access review and break-glass procedure

## Source SaaS findings that must not be copied

- Custom SHA-256 password hashing
- Raw API key saved in metadata
- Raw API key used as a login cookie
- Full phone numbers logged by blacklist stubs
- Shell commands containing session payloads
- Hardcoded infrastructure identifiers
- Decryption fallback to plaintext
- Broad unaudited cross-store lookup
