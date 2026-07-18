from pathlib import Path

path = Path('.github/scripts/sync-browser-dead-letter-evidence.py')
text = path.read_text()
old = r"""replace(
    'tracker.yml',
    '    durable_dead_letter_postgresql_tests: 5_of_5_passed\n',
    '    durable_dead_letter_postgresql_tests: 5_of_5_passed\n'
    '    browser_dead_letter_api_tests: 3_of_3_passed\n',
)
"""
new = r"""replace(
    'tracker.yml',
    '    native_shadow_total_tests: 28_of_28_passed\n'
    '    durable_dead_letter_postgresql_tests: 5_of_5_passed\n'
    '    builds: 19_of_19\n',
    '    native_shadow_total_tests: 28_of_28_passed\n'
    '    durable_dead_letter_postgresql_tests: 5_of_5_passed\n'
    '    browser_dead_letter_api_tests: 3_of_3_passed\n'
    '    builds: 19_of_19\n',
)
"""
if text.count(old) != 1:
    raise SystemExit(f'ambiguous durable dead-letter result marker: {text.count(old)}')
path.write_text(text.replace(old, new, 1))
print('browser evidence sync marker fixed')
