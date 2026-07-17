from pathlib import Path

path = Path("workers/courier-session-worker/src/index.ts")
text = path.read_text()
old = "export { AesGcmEnvelopeCipher } from '@ozzyl/encryption';"
new = "export { AesGcmEnvelopeCipher };"
if text.count(old) != 1:
    raise SystemExit(f"Expected one shared cipher re-export, found {text.count(old)}")
path.write_text(text.replace(old, new))
