from pathlib import Path

path = Path('scripts/tmp-native-shadow-patch.py')
text = path.read_text(encoding='utf-8')
old = """replace_once(
    'packages/database/src/runtime-role.ts',
    '''    'risk_assessments',
    'risk_signals',
''',
    '''    'risk_assessments',
    'integration_shadow_comparisons',
    'risk_signals',
''',
)
"""
new = """replace_once(
    'packages/database/src/runtime-role.ts',
    '''    'risk_policies',
    'risk_assessments',
    'risk_signals',
''',
    '''    'risk_policies',
    'risk_assessments',
    'integration_shadow_comparisons',
    'risk_signals',
''',
)
"""
if text.count(old) != 1:
    raise SystemExit(f'Expected one runtime-role patch marker; found {text.count(old)}')
path.write_text(text.replace(old, new, 1), encoding='utf-8')
