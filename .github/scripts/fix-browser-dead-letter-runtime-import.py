from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"expected one match in {path}, found {count}: {old[:120]!r}")
    file.write_text(text.replace(old, new, 1))


replace_once(
    "apps/api/src/browser.ts",
    """import {
  DurableWorkOperationError,
  type DurableDeadLetterRecord,
  type DurableWorkReplayResult,
  type DurableWorkType,
} from '@ozzyl/database';
""",
    """import type {
  DurableDeadLetterRecord,
  DurableWorkOperationErrorCode,
  DurableWorkReplayResult,
  DurableWorkType,
} from '@ozzyl/database';
""",
)

replace_once(
    "apps/api/src/browser.ts",
    """const deadLetterScopeSchema = dashboardScopeSchema.extend({
  limit: z.coerce.number().int().min(1).max(100).default(50),
});
""",
    """const durableWorkOperationErrorCodes = new Set<DurableWorkOperationErrorCode>([
  'STORE_ADMIN_REQUIRED',
  'DEAD_LETTER_NOT_FOUND',
  'DEAD_LETTER_NOT_REPLAYABLE',
  'DEAD_LETTER_IDEMPOTENCY_CONFLICT',
  'DEAD_LETTER_STATE_CHANGED',
]);
const deadLetterScopeSchema = dashboardScopeSchema.extend({
  limit: z.coerce.number().int().min(1).max(100).default(50),
});
""",
)

replace_once(
    "apps/api/src/browser.ts",
    """function durableWorkBrowserError(requestId: string, error: unknown): Response {
  if (!(error instanceof DurableWorkOperationError)) {
    return browserError(
      requestId,
      500,
      'DURABLE_WORK_OPERATION_FAILED',
      'Durable work operation failed',
    );
  }
  const status =
    error.code === 'STORE_ADMIN_REQUIRED'
      ? 403
      : error.code === 'DEAD_LETTER_NOT_FOUND'
        ? 404
        : 409;
  return browserError(requestId, status, error.code, error.message);
}
""",
    """function durableWorkBrowserError(requestId: string, error: unknown): Response {
  if (
    !(error instanceof Error) ||
    !('code' in error) ||
    typeof error.code !== 'string' ||
    !durableWorkOperationErrorCodes.has(error.code as DurableWorkOperationErrorCode)
  ) {
    return browserError(
      requestId,
      500,
      'DURABLE_WORK_OPERATION_FAILED',
      'Durable work operation failed',
    );
  }
  const code = error.code as DurableWorkOperationErrorCode;
  const status = code === 'STORE_ADMIN_REQUIRED' ? 403 : code === 'DEAD_LETTER_NOT_FOUND' ? 404 : 409;
  return browserError(requestId, status, code, error.message);
}
""",
)

replace_once(
    "apps/api/src/browser.test.ts",
    "import { DurableWorkOperationError } from '@ozzyl/database';\n",
    "",
)

replace_once(
    "apps/api/src/browser.test.ts",
    """    replayDeadLetter.mockRejectedValueOnce(
      new DurableWorkOperationError(
        'DEAD_LETTER_NOT_REPLAYABLE',
        'Durable work cannot be replayed: STRUCTURAL_WEBHOOK_FAILURE',
      ),
    );
""",
    """    replayDeadLetter.mockRejectedValueOnce(
      Object.assign(
        new Error('Durable work cannot be replayed: STRUCTURAL_WEBHOOK_FAILURE'),
        { code: 'DEAD_LETTER_NOT_REPLAYABLE' as const },
      ),
    );
""",
)

print("browser dead-letter runtime import boundary fixed")
