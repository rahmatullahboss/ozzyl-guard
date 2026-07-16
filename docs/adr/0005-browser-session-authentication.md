# ADR 0005 — Browser Session Authentication Baseline

- Status: Accepted
- Date: 2026-07-16
- Owners: Ozzyl Guard engineering

## Context

The merchant dashboard and platform administration UI previously contained representative data only. The database already had users, Argon2id password support, opaque session-token primitives, user sessions, organization memberships, stores, and audit events. Service API keys are intentionally scoped machine credentials and must not become dashboard login cookies.

A managed identity provider may still be selected later, but production hardening requires a secure pilot-ready browser authentication boundary now without creating a second authorization model or exposing service keys to browser storage.

## Decision

For the pilot baseline:

1. Authenticate browser users with the existing Argon2id password verification primitive.
2. Issue a random opaque session token in an `HttpOnly`, `SameSite=Lax` cookie. Store only the HMAC hash in PostgreSQL.
3. Derive a separate CSRF proof from the opaque token and a server-held secret; require it on state-changing browser requests.
4. Resolve active organization memberships and active stores for every session.
5. Recheck organization/store membership inside merchant PostgreSQL repositories; a session claim alone is not sufficient.
6. Keep platform administration behind an explicit `users.platform_role = 'platform_admin'` authorization check.
7. Keep dashboard sessions completely separate from service API keys.
8. Audit login, logout, merchant overview access, and platform-admin overview access without recording passwords, raw session tokens, CSRF proofs, API keys, provider credentials, or cookies.
9. Keep broad automatic blocking disabled during pilot calibration.

## Consequences

- The dashboard and admin can use authenticated live data before a managed identity provider is selected.
- PostgreSQL is currently the authoritative browser-session store; horizontal scaling therefore does not require sticky sessions.
- Session-cookie security depends on TLS in production and strong `SESSION_PEPPER` and `SESSION_CSRF_SECRET` values from an approved secret manager.
- Password reset, MFA, account invitation, recovery, and managed identity federation remain outside this baseline.
- A future managed identity provider may supersede credential verification, but tenant authorization, service-key separation, audit rules, and repository scope checks remain valid.

## Alternatives considered

### Reuse service API keys in the browser

Rejected. It would mix user and machine identities, increase exfiltration risk, and violate the established credential boundary.

### Wait for a managed identity provider

Rejected for the pilot baseline because the existing secure primitives and schema can provide a bounded implementation now. Provider selection remains a future infrastructure/security decision.

### Store raw bearer sessions or JWTs in local storage

Rejected. Raw secrets must not be persisted in application storage accessible to browser scripts, and revocation must remain server-controlled.

## Related implementation

- `packages/database/migrations/0006_browser_access.sql`
- `apps/api/src/browser.ts`
- `apps/api/src/postgres.ts`
- `apps/dashboard/src/App.tsx`
- `apps/admin/src/main.tsx`
- `docs/security/security-privacy.md`
