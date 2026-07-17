# ADR 0009: Managed secrets and KMS envelope encryption

## Status

Accepted

## Date

2026-07-16

## Context

The current AES-GCM environment-key implementation is suitable for local development and the self-hosted foundation, but production courier credentials, session material, webhook secrets, API-key peppers, phone HMAC keys, and provider credentials require managed key custody, rotation, and least-privilege access.

No KMS or vault provider has been selected. The repository now implements the provider-neutral managed-envelope v2 contract and migration primitives, but production runtime wiring remains intentionally disabled until provider and identity provisioning.

## Decision drivers

- Never persist or log raw credentials after use.
- Remove long-lived production master keys from plain environment configuration.
- Support key rotation without invalidating all encrypted records.
- Bind ciphertext to tenant and record context.
- Separate deployment secret injection from application data encryption.

## Considered options

1. Keep one base64 AES key in the production environment.
2. Store plaintext secrets in PostgreSQL with disk encryption only.
3. Use a managed secret store for deployment secrets and managed KMS/vault envelope encryption for persisted sensitive records.
4. Store all application records directly in a provider vault.

## Decision

Use two distinct managed controls:

1. A managed secret store injects deployment-time secrets such as database credentials, API-key pepper, phone HMAC key, webhook configuration, and KMS access configuration.
2. A managed KMS or vault provides key-encryption-key operations for envelope encryption of persisted sensitive records.

Persisted courier credentials, browser/session material, and other approved sensitive records use authenticated envelope encryption:

- generate a cryptographically random data-encryption key for each record or narrowly scoped secret set;
- encrypt the payload with AES-256-GCM or an equivalent authenticated cipher;
- bind organization, store, provider, record id, and purpose through authenticated context where applicable;
- encrypt or wrap the data-encryption key with the managed key-encryption key;
- store ciphertext, wrapped key, algorithm, key id/version, nonce, authentication tag, and schema version;
- never store the plaintext data-encryption key.

Production decryption must fail closed. There is no plaintext fallback. Access failures produce structured reconnect or configuration errors and must not cause automatic approval.

Service identities receive only the decrypt/encrypt permissions required by their component. The API must not receive courier credential decryption permission unless a documented flow requires it; session workers own provider credential/session access.

The shared implementation uses one random 32-byte data key per record, AES-256-GCM, a SHA-256 digest of the authenticated record context, authenticated wrapped-key metadata, structured non-secret error codes, in-memory key zeroization, explicit legacy-key dual-read, and managed key-version re-encryption. Provider selection, adapter implementation, service-identity policy, access auditing, runtime wiring, and the production background rewrite runner remain follow-up operational work.

## Consequences

### Positive

- Removes application-managed production master-key custody.
- Supports key rotation and auditable access.
- Limits blast radius through service identities and scoped context.
- Preserves the existing encrypted-record abstraction.

### Negative / trade-offs

- KMS calls add latency and availability dependencies.
- Envelope metadata and rotation tooling add implementation complexity.
- Local development still needs a separate, clearly non-production key path.
- Provider pricing and quotas must be evaluated.

## Security and privacy impact

- Key access must be audited and alertable.
- Plaintext secrets must exist only in process memory for the minimum necessary time.
- Logs, traces, errors, audit metadata, and support tools must never contain decrypted values.
- Backups contain ciphertext and wrapped keys, not plaintext.
- Rotation must preserve access to records encrypted under previous active key versions until re-encryption completes.

## Migration / rollout

1. Select a managed secret store and KMS/vault.
2. Add a provider-neutral envelope-encryption interface behind the existing cipher boundary. **Complete.**
3. Add a new ciphertext schema version; do not rewrite old migrations. **Complete in the shared envelope format; no numbered database migration was required.**
4. Support dual-read of approved legacy ciphertext and new envelope ciphertext during migration. **Complete as an explicit configured-key primitive.**
5. Re-encrypt existing production-sensitive records through an audited background job.
6. Remove production use of `CREDENTIAL_ENCRYPTION_KEY`.
7. Test key disable, rollback, reconnect, and rotation procedures.

## Validation

- Plaintext values never appear in database rows, logs, traces, or error reports.
- Decryption fails closed when KMS access is unavailable.
- Associated-context mismatch prevents decryption.
- Rotation and re-encryption preserve authorized access.
- Context substitution is rejected before a managed unwrap call.
- The implementation rejects a provider response that exposes the plaintext data key as the wrapped key.
- Provider exception details are replaced with structured safe error codes.
- API and unrelated workers cannot decrypt courier credentials.
- Secret-access audit events and alerts are verified.

## Supersedes / superseded by

None.
