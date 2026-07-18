from pathlib import Path

path = Path('apps/dashboard/src/App.tsx')
text = path.read_text()
replacements = [
    (
        "import { useEffect, useMemo, useState, type FormEvent } from 'react';",
        "import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';",
    ),
    (
        "  const [operationMessage, setOperationMessage] = useState<string | null>(null);\n  const [replayKeys, setReplayKeys] = useState<Record<string, string>>({});\n",
        "  const [operationMessage, setOperationMessage] = useState<string | null>(null);\n  const replayKeys = useRef<Record<string, string>>({});\n",
    ),
    (
        "      setDeadLetters([]);\n      setOperationMessage(null);\n",
        "      setDeadLetters([]);\n      replayKeys.current = {};\n      setOperationMessage(null);\n",
    ),
    (
        "    let idempotencyKey = replayKeys[itemKey];\n    if (!idempotencyKey) {\n      idempotencyKey = `dlr_${crypto.randomUUID()}`;\n      setReplayKeys((current) => ({ ...current, [itemKey]: idempotencyKey as string }));\n    }\n",
        "    let idempotencyKey = replayKeys.current[itemKey];\n    if (!idempotencyKey) {\n      idempotencyKey = `dlr_${crypto.randomUUID()}`;\n      replayKeys.current[itemKey] = idempotencyKey;\n    }\n",
    ),
    (
        "      setReplayKeys((current) => {\n        const next = { ...current };\n        delete next[itemKey];\n        return next;\n      });\n",
        "      delete replayKeys.current[itemKey];\n",
    ),
    (
        "      setSelectedStore(null);\n      setSelectedReview(null);\n",
        "      setSelectedStore(null);\n      setSelectedReview(null);\n      replayKeys.current = {};\n",
    ),
]
for old, new in replacements:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'expected one match, found {count}: {old[:100]!r}')
    text = text.replace(old, new, 1)
path.write_text(text)
print('replay idempotency key cache hardened')
