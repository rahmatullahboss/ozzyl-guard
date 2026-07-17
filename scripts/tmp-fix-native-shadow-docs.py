from pathlib import Path

path = Path('scripts/tmp-native-shadow-docs.py')
text = path.read_text(encoding='utf-8')
old = """replace_once(
    'tracker.yml',
    '    managed_envelope_tests: 11_of_11_passed\\n',
    '''    managed_envelope_tests: 11_of_11_passed
    native_shadow_adapter_tests: 5_of_5_passed
    native_shadow_api_tests: 3_of_3_passed
    native_shadow_postgresql_tests: 3_of_3_passed
''',
)
"""
new = """replace_once(
    'tracker.yml',
    '''    postgresql_runtime_role_tests: 6_of_6_passed
    managed_envelope_tests: 11_of_11_passed
    builds: 19_of_19
''',
    '''    postgresql_runtime_role_tests: 6_of_6_passed
    managed_envelope_tests: 11_of_11_passed
    native_shadow_adapter_tests: 5_of_5_passed
    native_shadow_api_tests: 3_of_3_passed
    native_shadow_postgresql_tests: 3_of_3_passed
    builds: 19_of_19
''',
)
"""
if text.count(old) != 1:
    raise SystemExit(f'Expected one ambiguous tracker marker; found {text.count(old)}')
path.write_text(text.replace(old, new, 1), encoding='utf-8')
