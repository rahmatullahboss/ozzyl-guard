# Risk Register

Updated: 2026-07-16

| ID    | Risk                                                                               | Severity | Current mitigation                                                                                                        | Owner/status                 |
| ----- | ---------------------------------------------------------------------------------- | -------: | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| R-001 | Steadfast login selectors/internal endpoint change without notice                  |     High | Adapter/session boundary, fixtures, structured errors, selector monitoring, reconnect flow, degraded cache behavior       | Phase 2 / open               |
| R-002 | Merchant courier credentials or sessions leak through logs/storage/CI              | Critical | Envelope encryption, separate session encryption, redaction, no shell args, least privilege, audit reads                  | Foundation + Phase 2 / open  |
| R-003 | Raw API keys stored or used as dashboard sessions                                  | Critical | One-time reveal, hash-only storage, dedicated user sessions, prohibited by AGENTS/security docs                           | Phase 1 / open               |
| R-004 | Weak password hashing copied from source SaaS                                      | Critical | Argon2id or managed auth only; source implementation prohibited                                                           | Phase 1 / open               |
| R-005 | Cross-tenant data access or cache/job leakage                                      | Critical | Mandatory scope parameters, composite constraints/indexes, isolation tests, no system store shortcut                      | Phase 1 onward / open        |
| R-006 | Concurrent requests bypass quotas or create duplicate assessments                  |     High | Atomic entitlement reservation, usage events, idempotency transaction, concurrency tests                                  | Phase 1/4 / open             |
| R-007 | Unknown/provider failure interpreted as safe or fraudulent                         |     High | Explicit unknown/degraded state, separate confidence, verification recommendation, no auto-block on provider failure      | Phase 3/4 / designed         |
| R-008 | Duplicate risk engines diverge between API, WooCommerce, and multi-store SaaS      |     High | One pure package, dependency rules, shared types, native service client, remove embedded engine after shadow rollout      | Phase 3/4 / open             |
| R-009 | WooCommerce contract mismatch causes incorrect order action                        |     High | Rewrite plugin for lowercase enums, `signals[].code`, explicit success/degraded handling, contract tests                  | Phase 4 / open               |
| R-010 | Unofficial third-party fraud service becomes hidden single point of truth          |     High | Optional fallback adapter only; source/freshness/confidence exposed; no engine import                                     | Phase 2/3 / designed         |
| R-011 | False positives harm legitimate customers/merchants                                | Critical | Confidence, explainability, merchant policies, OTP/review, pilot confusion matrix, no broad auto-block before calibration | Pilot / open                 |
| R-012 | Cross-merchant reputation creates privacy, abuse, or dispute harm                  | Critical | Post-MVP only, evidence lineage, independent corroboration, decay, disputes, legal/privacy review                         | Later / deferred             |
| R-013 | Deployment selected before browser-worker/database/queue requirements are known    |   Medium | Deployment ADR pending; keep components separable and infrastructure-agnostic                                             | Phase 1 / open               |
| R-014 | Migration/schema mismatch or applied migration edits                               |     High | Canonical database package, append-only migrations, clean/upgrade verification, CI checks                                 | Phase 1 onward / open        |
| R-015 | Scraper runs synchronously and delays checkout                                     |     High | Session/sync workers, cache-first assessment, bounded latency, async refresh                                              | Phase 2/4 / designed         |
| R-016 | Scheduled scraper failures silently succeed                                        |     High | Remove `continue-on-error`, structured job records, alerts, dead-letter handling, failure exit status                     | Phase 2 / open               |
| R-017 | Encryption key rotation makes credentials unavailable                              |     High | Versioned envelope encryption, rotation/runbook, staged re-encryption, restore tests                                      | Phase 1/2 / open             |
| R-018 | Outcome feedback is omitted, preventing calibration                                |     High | Outcome endpoint/plugin/native integration included in MVP acceptance criteria                                            | Phase 4 / open               |
| R-019 | Provider terms/authorization do not permit commercial internal-endpoint use        |     High | Merchant authorization record, terms/legal review before commercial scale, replaceable adapter boundary                   | Phase 2 / blocking for scale |
| R-020 | Empty repository causes documentation to be mistaken for implemented functionality |   Medium | Implementation status explicitly separates planned/in-progress/implemented and must be updated each milestone             | Phase 0 / mitigated          |

## Review cadence

Review this register at every milestone completion and before production/pilot changes. Add evidence, owner, target date, and residual risk as implementation begins.
