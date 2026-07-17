from pathlib import Path

path = Path('scripts/tmp-verification-docs.py')
text = path.read_text()
old_status = '''replace_once(
    "tracker.yml",
    """  status: passed
""",
    """  status: passed_for_targeted_verification_queue_validation_pending_full_ci
""",
)
'''
new_status = '''replace_once(
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
if text.count(old_status) != 1:
    raise SystemExit(f'Expected one tracker verification status patch, found {text.count(old_status)}')
text = text.replace(old_status, new_status)

old_testing = '''    """- Worker lease ownership and stale-owner rejection
- Job payload scope tampering
""",
'''
new_testing = '''    """- Worker lease ownership and stale-owner rejection
- Job/event payload scope tampering
""",
'''
if text.count(old_testing) != 1:
    raise SystemExit(f'Expected one testing wording patch, found {text.count(old_testing)}')
path.write_text(text.replace(old_testing, new_testing))
