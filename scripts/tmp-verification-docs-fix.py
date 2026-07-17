from pathlib import Path

path = Path('scripts/tmp-verification-docs.py')
text = path.read_text()
old = '''replace_once(
    "tracker.yml",
    """  status: passed
""",
    """  status: passed_for_targeted_verification_queue_validation_pending_full_ci
""",
)
'''
new = '''replace_once(
    "tracker.yml",
    """verification:
  command: npm run verify
  last_verified: 2026-07-17
  status: passed
""",
    """verification:
  command: npm run verify
  last_verified: 2026-07-17
  status: passed_for_targeted_verification_queue_validation_pending_full_ci
""",
)
'''
if text.count(old) != 1:
    raise SystemExit(f'Expected one tracker verification status patch, found {text.count(old)}')
path.write_text(text.replace(old, new))
