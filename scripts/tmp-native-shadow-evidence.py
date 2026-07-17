from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text(encoding='utf-8')
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'Expected one match in {path}; found {count}: {old[:100]!r}')
    file.write_text(text.replace(old, new, 1), encoding='utf-8')


replace_once(
    'tracker.yml',
    '''  remote_ci:
    status: passed
    run_id: 29580203487
    job_id: 87883814149
    job: verify
    tested_head: cae4d6ea9d101afe2e692819886fd149c5cf3b85
    merged_main_commit: ee24aa7faf41e14b04769434c74bc99d7a245de4
    completed: 2026-07-17
    steps: audit_format_lint_manifest_nine_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_typecheck_tests_build_php_all_passed
''',
    '''  remote_ci:
    status: passed
    run_id: 29610847711
    job_id: 87984896681
    job: verify
    tested_head: dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb
    merged_main_commit: 446d6eb47d042fe4f2834ba31bb3596e57c7ad54
    completed: 2026-07-18
    steps: audit_format_lint_manifest_ten_migrations_replay_history_integrity_clean_restore_runtime_role_grants_architecture_typecheck_tests_build_php_all_passed
''',
)
replace_once(
    '.ai-bridge/current-plan.md',
    '- Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`\n',
    '''- Native-shadow source CI run `29610050179`, job `87982336996`: audit, formatting, lint, ten migrations, replay, history integrity, clean restore, runtime-role grants, architecture, 19 typechecks, 107 assertions, 19 builds, and PHP lint passed at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
- Native-shadow final CI run `29610847711`, job `87984896681`: the same complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
- The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
''',
)
replace_once(
    '.ai-bridge/implementation-status.md',
    '- Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`\n',
    '''- Native-shadow source run `29610050179`, job `87982336996`: all repository gates passed with ten migrations, 19 typechecks, 28 test tasks and 107 assertions, 19 builds, and PHP lint at head `85cd9e2bafd0fc3605c97a461f01a6a87016b83b`
- Native-shadow final run `29610847711`, job `87984896681`: the complete gate set passed at final documentation head `dc44c8b7df2bfa84cd8f372f9df0831d3c35beeb`
- The verified native shadow rollout milestone was squash-merged to `main` as `446d6eb47d042fe4f2834ba31bb3596e57c7ad54`
''',
)

print('native shadow merge evidence synchronized')
