# ADR 0003: Keep the Steadfast Session Scraper

## Status

Accepted for pilot, with hardening

## Date

2026-07-16

## Decision

Retain the Playwright login/session extraction approach for Steadfast because it already obtains merchant-authorized session data and permits efficient JSON calls after login.

## Conditions

- Run asynchronously outside checkout.
- Encrypt credentials and sessions separately.
- Add login validation, selector monitoring, CAPTCHA/2FA detection, and reconnect handling.
- Treat provider internal endpoints as unstable.
- Maintain fallback/degraded behavior.
- Do not pass credentials/session payloads through shell command arguments.
- Decryption failures fail closed.
- Scheduled/per-account failures are visible and alertable.
- Review provider terms and merchant authorization requirements before commercial scale.

## Consequences

- Faster pilot using an already proven flow.
- Ongoing maintenance risk from provider UI/internal endpoint changes.
- Browser workers require isolated runtime and stronger operational monitoring.
- Adapter boundary permits replacement without changing the risk engine/API contract.
