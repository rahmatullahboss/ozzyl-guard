from pathlib import Path
import re


def replace(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'expected one match in {path}, found {count}: {old[:120]!r}')
    file.write_text(text.replace(old, new, 1))


# tracker.yml
replace(
    'tracker.yml',
    '  - durable_replay_evidence_is_secret_free_and_immutable\n',
    '  - durable_replay_evidence_is_secret_free_and_immutable\n'
    '  - browser_dead_letter_access_requires_opaque_session_exact_store_and_owner_or_admin\n'
    '  - browser_dead_letter_replay_requires_csrf_and_a_stable_idempotency_key\n'
    '  - browser_dead_letter_responses_exclude_payloads_and_secret_material\n',
)
replace(
    'tracker.yml',
    '  - immutable_secret_free_durable_work_replay_evidence\n',
    '  - immutable_secret_free_durable_work_replay_evidence\n'
    '  - authenticated_merchant_browser_dead_letter_operations\n'
    '  - csrf_protected_browser_durable_work_replay\n'
    '  - synchronous_per_work_item_browser_replay_key_cache\n',
)
replace('tracker.yml', '    remote_assertions: 126_passed\n', '    remote_assertions: 129_passed\n')
replace(
    'tracker.yml',
    '    durable_dead_letter_postgresql_tests: 5_of_5_passed\n',
    '    durable_dead_letter_postgresql_tests: 5_of_5_passed\n'
    '    browser_dead_letter_api_tests: 3_of_3_passed\n',
)
replace(
    'tracker.yml',
    '    run_id: 29644234591\n'
    '    job_id: 88079650134\n'
    '    job: verify\n'
    '    tested_head: a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12\n'
    '    merged_main_commit: 2d686206456960bf9b3e14571e3bf2c9169d94f9\n',
    '    run_id: 29645967968\n'
    '    job_id: 88084164235\n'
    '    job: verify\n'
    '    tested_head: 2129b51ca7393b3c942f2f5c074cb3990b615b89\n'
    '    merged_main_commit: 27cff21a9fd024e7b8094da3397c79387c83ea02\n',
)
replace(
    'tracker.yml',
    '    run_id: 29644234591\n'
    '    job_id: 88079650134\n'
    '    tested_head: a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12\n',
    '    run_id: 29645967968\n'
    '    job_id: 88084164235\n'
    '    tested_head: 2129b51ca7393b3c942f2f5c074cb3990b615b89\n',
)
replace(
    'tracker.yml',
    '    durable_dead_letter_postgresql_tests: 5_of_5_passed\n'
    '  pending_follow_up:\n',
    '    browser_dead_letter_api_tests: 3_of_3_passed\n'
    '  pending_follow_up:\n',
)
replace(
    'tracker.yml',
    '  - durable_replay_never_performs_provider_or_webhook_network_io\n',
    '  - durable_replay_never_performs_provider_or_webhook_network_io\n'
    '  - merchant_dead_letter_browser_routes_reauthorize_session_visible_owner_or_admin_scope\n'
    '  - merchant_dead_letter_replay_requires_csrf_and_forwards_one_stable_idempotency_key\n'
    '  - browser_replay_key_is_assigned_synchronously_before_network_io_and_retained_on_failure\n'
    '  - merchant_dead_letter_ui_hides_operations_from_non_admin_members\n',
)

# current plan
replace(
    '.ai-bridge/current-plan.md',
    'A runnable standalone MVP foundation and twelve production-hardening slices are complete:',
    'A runnable standalone MVP foundation and thirteen production-hardening slices are complete:',
)
replace(
    '.ai-bridge/current-plan.md',
    '12. tenant-scoped durable-work dead-letter inspection and explicit idempotent replay with lease reset, structural failure guards, immutable evidence, and audit records.\n',
    '12. tenant-scoped durable-work dead-letter inspection and explicit idempotent replay with lease reset, structural failure guards, immutable evidence, and audit records;\n'
    '13. authenticated merchant browser dead-letter operations with exact owner/admin store scope, secret-free listing, CSRF-protected replay, and synchronous stable replay keys.\n',
)
replace(
    '.ai-bridge/current-plan.md',
    '- [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O\n',
    '- [x] Replay operations never expose payloads/secrets or perform courier, webhook, browser, or OTP provider network I/O\n'
    '- [x] Merchant owner/admin sessions can list exact-store failed durable work through a typed secret-free browser contract\n'
    '- [x] Merchant replay requires valid CSRF proof and delegates to the existing transactional PostgreSQL operations repository\n'
    '- [x] Non-admin members cannot see the failed-work navigation or call its browser operations successfully\n'
    '- [x] The dashboard assigns one replay key synchronously per visible work item and retains it after failed network requests\n'
    '- [x] Browser replay responses map replay, conflict, not-found, and structural-blocked states without exposing internal payloads or credentials\n',
)
replace(
    '.ai-bridge/current-plan.md',
    '- Repository assertions: 126 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, seven migration-integrity tests, seven tenant/admin isolation tests, seven runtime-role policy/permission tests, five durable-work dead-letter PostgreSQL tests, eleven envelope-encryption tests, twenty-eight native-shadow adapter/API/SDK/browser/PostgreSQL tests, transactional queues/outbox coverage, and DNS SSRF tests',
    '- Repository assertions: 129 passed, including five courier lease tests, five webhook lease tests, five verification lease tests, three verification-payload validation tests, seven migration-integrity tests, seven tenant/admin isolation tests, seven runtime-role policy/permission tests, five durable-work dead-letter PostgreSQL tests, three browser dead-letter authorization/replay tests, eleven envelope-encryption tests, twenty-eight native-shadow adapter/API/SDK/browser/PostgreSQL tests, transactional queues/outbox coverage, and DNS SSRF tests',
)
replace(
    '.ai-bridge/current-plan.md',
    '- The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`\n',
    '- The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`\n'
    '- Browser dead-letter operations final CI run `29645967968`, job `88084164235`: audit, formatting, lint, twelve migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 129 assertions, 19 builds, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`\n'
    '- The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`\n',
)

# implementation status
replace(
    '.ai-bridge/implementation-status.md',
    '| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas',
    '| Shared contracts                 | done     | Canonical request/response/error/outcome/event schemas plus typed browser dead-letter list and replay contracts',
)
replace(
    '.ai-bridge/implementation-status.md',
    '| Durable work architecture        | done     | PostgreSQL lease pattern plus owner/admin-scoped secret-free dead-letter inspection and explicit idempotent replay are implemented; future lease renewal and richer operations UI remain |',
    '| Durable work architecture        | done     | PostgreSQL lease pattern plus owner/admin-scoped secret-free inspection, explicit idempotent replay, CLI, and merchant browser operations are implemented; future lease renewal remains |',
)
replace(
    '.ai-bridge/implementation-status.md',
    '| Durable work operations          | done     | Failed courier, webhook, and verification work can be inspected and safely replayed through one transactional repository/CLI with immutable replay and audit evidence                    |',
    '| Durable work operations          | done     | Failed courier, webhook, and verification work can be inspected and safely replayed through one transactional repository from the CLI or owner/admin browser surface with immutable evidence |',
)
replace(
    '.ai-bridge/implementation-status.md',
    '| Merchant dashboard               | done     | Authenticated scoped operations plus CSRF-protected owner/admin native-shadow rollout control and secret-free pilot reporting',
    '| Merchant dashboard               | done     | Authenticated scoped operations, native-shadow rollout/reporting, and owner/admin failed-work inspection with CSRF-protected idempotent replay',
)
replace(
    '.ai-bridge/implementation-status.md',
    '- `npm run test`: 28/28 Turbo tasks passed; repository contains 126 assertions',
    '- `npm run test`: 28/28 Turbo tasks passed; repository contains 129 assertions',
)
replace(
    '.ai-bridge/implementation-status.md',
    '- The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`\n',
    '- The verified durable-work dead-letter operations milestone was squash-merged through PR #22 to `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`\n'
    '- Three browser dead-letter tests cover secret-free exact-store listing, wrong-store hiding, owner/admin authorization, member rejection, CSRF protection, stable idempotency forwarding, replay serialization, and structured conflict mapping\n'
    '- Browser dead-letter operations final run `29645967968`, job `88084164235`: twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, audit, formatting, lint, clean restore, runtime-role grants, architecture, and PHP lint passed at head `2129b51ca7393b3c942f2f5c074cb3990b615b89`\n'
    '- The verified browser dead-letter operations milestone was squash-merged through PR #24 to `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`\n',
)

# decisions
replace(
    '.ai-bridge/decisions.md',
    '39. Terminal courier refresh, webhook delivery, and verification delivery work remains authoritative in its existing PostgreSQL row. An active owner/admin may inspect only secret-free failed work in an exact active organization/store and explicitly replay only relationally valid, non-structural, non-expired work. Replay is transactional and idempotent, clears old leases and failure state, appends immutable insert-only replay evidence plus an audit event, and performs no provider or webhook network I/O; automatic replay is not implemented.\n',
    '39. Terminal courier refresh, webhook delivery, and verification delivery work remains authoritative in its existing PostgreSQL row. An active owner/admin may inspect only secret-free failed work in an exact active organization/store and explicitly replay only relationally valid, non-structural, non-expired work. Replay is transactional and idempotent, clears old leases and failure state, appends immutable insert-only replay evidence plus an audit event, and performs no provider or webhook network I/O; automatic replay is not implemented.\n'
    '40. The merchant failed-work browser surface uses only opaque user sessions, exact session-visible organization/store scope, active owner/admin authorization, and repository-level relational reauthorization. Replay additionally requires CSRF proof and a stable per-work-item idempotency key assigned synchronously before network I/O and retained after request failure. Browser contracts are secret-free and delegate all state changes to the existing transactional PostgreSQL durable-work repository.\n',
)

# documentation index and continuation note
replace(
    'docs/README.md',
    'The durable-work dead-letter operations foundation is merged on `main` as `2d686206456960bf9b3e14571e3bf2c9169d94f9`. Final feature CI run `29644234591`, job `88079650134`, passed twelve migrations, 19 typechecks, 28 test tasks with 126 assertions, 19 builds, and PHP syntax at tested head `a1419a2889701bcb6c05b686ac4b1eeb6e9d5d12`. Controlled replay remains explicit, tenant-authorized, audited, and provider-I/O-free; production source-pilot deployment and outcome calibration remain separate next steps. The generated continuation bundle is marked for repository-local refresh because this GitHub-only milestone could not run its exporter.',
    'The authenticated merchant browser dead-letter operations surface is merged on `main` as `27cff21a9fd024e7b8094da3397c79387c83ea02`. Final feature CI run `29645967968`, job `88084164235`, passed twelve migrations, 19 typechecks, 28 test tasks with 129 assertions, 19 builds, and PHP syntax at tested head `2129b51ca7393b3c942f2f5c074cb3990b615b89`. Listing remains exact-store, owner/admin-only, and secret-free; replay remains CSRF-protected, idempotent, audited, and provider-I/O-free. The generated continuation bundle remains marked for repository-local refresh.',
)
replace(
    'docs/README.md',
    '- [Durable work dead-letter runbook](operations/durable-work-dead-letter-runbook.md)\n',
    '- [Durable work dead-letter runbook](operations/durable-work-dead-letter-runbook.md)\n'
    '- [Browser dead-letter operations](operations/browser-dead-letter-operations.md)\n',
)
replace(
    '.ai-bridge/pro-context.md',
    '> Refresh pending (2026-07-18): this GitHub-only milestone could not run the repository-local exporter. Canonical tracker, plan, status, decisions, ADR 0012, runbook, tests, and migration evidence are current through feature merge `2d686206456960bf9b3e14571e3bf2c9169d94f9`; regenerate this bundle locally before relying on embedded repository snapshots.',
    '> Refresh pending (2026-07-18): this GitHub-only milestone could not run the repository-local exporter. Canonical tracker, plan, status, decisions, browser dead-letter contracts, tests, and operational documentation are current through feature merge `27cff21a9fd024e7b8094da3397c79387c83ea02`; regenerate this bundle locally before relying on embedded repository snapshots.',
)

# Recalculate local Markdown link evidence, excluding embedded generated snapshots.
roots = [Path('README.md'), Path('docs'), Path('.ai-bridge')]
files: list[Path] = []
for root in roots:
    if root.is_file():
        files.append(root)
    else:
        files.extend(path for path in root.rglob('*.md') if path.name != 'pro-context.md')
count = 0
broken: list[tuple[str, str]] = []
for file in files:
    text = file.read_text(errors='ignore')
    for target in re.findall(r'\[[^\]]+\]\(([^)]+)\)', text):
        target = target.strip().split('#', 1)[0]
        if not target or '://' in target or target.startswith('mailto:'):
            continue
        count += 1
        if not (file.parent / target).resolve().exists():
            broken.append((str(file), target))
if broken:
    raise SystemExit(f'broken documentation links: {broken}')
tracker = Path('tracker.yml')
tracker.write_text(
    re.sub(
        r'    documentation_links: \d+_reviewed_0_known_broken',
        f'    documentation_links: {count}_reviewed_0_known_broken',
        tracker.read_text(),
    )
)
print(f'browser dead-letter evidence synced; documentation links reviewed: {count}')
