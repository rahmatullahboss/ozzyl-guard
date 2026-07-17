# Testing Strategy

## Unit tests

- Bangladesh phone normalization
- Risk signal calculation
- Confidence calculation
- Decision threshold mapping
- Provider response normalization
- Status mapping
- Encryption helpers
- OTP expiry and attempt limits
- API key generation/prefix/hash verification
- Policy parsing/versioning

## Contract tests

Each courier adapter must pass a shared contract suite:

- Returns canonical observation
- Handles timeout
- Handles expired session
- Never leaks credentials
- Maps malformed responses to structured errors
- Preserves source/freshness metadata
- Separates actual return from pre-shipping cancellation

Public API contract tests cover:

- Canonical success/error response
- Lowercase enums and `signals[].code`
- Unknown/degraded behavior
- Idempotent replay
- Test/live key isolation

## Integration tests

- User/session authentication
- API key creation, one-time reveal, authentication, revocation, and rotation
- Atomic quota enforcement under concurrency
- Assessment persistence
- OTP send/verify
- Courier session refresh
- Webhook signing and retry
- Multi-tenant isolation
- Organization/store membership authorization

### PostgreSQL concurrency and idempotency coverage

The CI PostgreSQL service runs real-database integration tests for:

- duplicate usage reservations serializing through the organization/period advisory lock;
- replaying one persisted usage charge for concurrent duplicate request IDs;
- concurrent distinct reservations at the plan boundary allowing only the remaining capacity;
- concurrent assessment saves returning the single persisted scoped winner;
- preventing losing assessment IDs from writing orphan or invalid signal rows;
- concurrent outcome writes resolving as one insert and one replay rather than a unique-constraint error;
- operation idempotency values remaining isolated by organization and store;
- browser-session hashing, active membership resolution, merchant tenant revalidation, and explicit platform-admin authorization;
- competing courier workers claiming different due jobs with `FOR UPDATE SKIP LOCKED`;
- preventing another worker from stealing a fresh lease;
- reclaiming expired `claimed` or `processing` jobs and rejecting the previous owner;
- clearing lease ownership when retryable work is returned to the queue with backoff;
- moving exhausted stale jobs to terminal failure with `LEASE_EXPIRED`;
- deriving courier organization/store/provider scope from account relationships rather than payload fields.

### Migration replay coverage

CI runs the migration command twice against the same PostgreSQL service:

1. the first run applies every ordered migration;
2. the second run verifies that already-recorded migrations are skipped without schema errors or duplicate side effects.

The migration history table remains the replay source of truth. Applied migration files remain immutable.

Future PostgreSQL coverage must include:

- clean backup/restore rehearsal and migration-table integrity checks;
- durable webhook-outbox and verification-queue worker claims, leases, retries, and dead-letter transitions;
- lease renewal during future jobs whose bounded execution time can exceed the configured lease;
- additional courier queue, assessment, outcome, feature, and dashboard repository isolation cases;
- runtime-role versus migration-role permission enforcement.

## End-to-end tests

- Merchant signup and store creation
- Create a test/live API key
- Connect Steadfast account
- Assess WooCommerce COD order
- Review high-risk order
- Verify OTP
- Submit courier outcome
- View usage and savings report

## Security tests

- Tenant data leakage
- API key replay/revocation
- Raw key absence from database/metadata/logs
- Brute-force OTP
- CSRF
- SSRF
- Webhook replay
- Secret redaction
- Injection attacks
- Session fixation/rotation
- Credential decryption failure
- Worker lease ownership and stale-owner rejection
- Job payload scope tampering

## Scraper tests

- Login page selector fixtures
- Successful cookie extraction
- Invalid credentials
- CAPTCHA/2FA detection
- Provider HTML changes
- Browser cleanup on failure
- Login-state/session validation
- Redacted screenshot/trace behavior
- Structured failure codes

Live provider tests must be opt-in and use dedicated authorized test accounts. Default CI uses fixtures/mocks.

## Architecture tests

- `packages/risk-engine` cannot import network/database/provider/browser packages
- API routes cannot import provider session drivers directly
- All schema comes from `packages/database`
- All public response types come from `packages/shared-types`
- Tenant-scoped repositories require a scope argument

## Pilot evaluation

Track a confusion matrix against real verified outcomes:

- true positive
- false positive
- true negative
- false negative

Do not promote automatic blocking until false-positive behavior is understood and merchant policy controls are proven.

## Required CI gates

- formatting check
- lint
- typecheck
- unit tests
- contract tests
- integration tests with PostgreSQL
- migration verification and replay
- dependency audit
- secret scanning
- architecture/dependency-boundary tests
