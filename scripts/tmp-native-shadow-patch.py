from __future__ import annotations

from hashlib import sha256
from pathlib import Path
import json


def replace_once(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text(encoding='utf-8')
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'Expected one match in {path}; found {count}: {old[:80]!r}')
    file.write_text(text.replace(old, new, 1), encoding='utf-8')


replace_once(
    'packages/shared-types/src/index.ts',
    'export type OrderOutcomeInput = z.infer<typeof orderOutcomeSchema>;\n\n',
    '''export type OrderOutcomeInput = z.infer<typeof orderOutcomeSchema>;

export const nativeShadowComparisonInputSchema = z.object({
  external_order_id: z.string().min(1).max(200),
  assessment_id: z.string().min(1).max(200),
  legacy_score: z.number().int().min(0).max(100),
  legacy_decision: z.string().trim().min(1).max(50).transform((value) => value.toLowerCase()),
  rollout_version: z.string().trim().min(1).max(100),
  sample_bucket: z.number().int().min(0).max(9999),
  sample_rate_bps: z.number().int().min(1).max(10000),
  evaluated_at: z.string().datetime(),
});
export type NativeShadowComparisonInput = z.infer<typeof nativeShadowComparisonInputSchema>;

export const nativeShadowComparisonResponseSchema = z.object({
  success: z.literal(true),
  comparison_id: z.string().min(1),
  replay: z.boolean(),
});
export type NativeShadowComparisonResponse = z.infer<
  typeof nativeShadowComparisonResponseSchema
>;

''',
)

replace_once(
    'packages/sdk/src/index.ts',
    '''  orderOutcomeSchema,
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type OrderOutcomeInput,
  type RiskAssessmentRequest,
  type RiskAssessmentResponse,
''',
    '''  nativeShadowComparisonInputSchema,
  nativeShadowComparisonResponseSchema,
  orderOutcomeSchema,
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type NativeShadowComparisonInput,
  type NativeShadowComparisonResponse,
  type OrderOutcomeInput,
  type RiskAssessmentRequest,
  type RiskAssessmentResponse,
''',
)
replace_once(
    'packages/sdk/src/index.ts',
    '''  async submitOutcome(
    input: OrderOutcomeInput,
''',
    '''  async reportNativeShadowComparison(
    input: NativeShadowComparisonInput,
    options: { idempotencyKey: string },
  ): Promise<NativeShadowComparisonResponse> {
    const payload = nativeShadowComparisonInputSchema.parse(input);
    const response = await this.request('/v1/integration-comparisons/native-shadow', {
      method: 'POST',
      headers: { 'Idempotency-Key': options.idempotencyKey },
      body: JSON.stringify(payload),
    });
    return nativeShadowComparisonResponseSchema.parse(response);
  }

  async submitOutcome(
    input: OrderOutcomeInput,
''',
)

replace_once(
    'apps/api/src/index.ts',
    '''  orderOutcomeSchema,
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type OrderOutcomeInput,
  type RiskAssessmentRequest,
  type RiskAssessmentResponse,
''',
    '''  nativeShadowComparisonInputSchema,
  nativeShadowComparisonResponseSchema,
  orderOutcomeSchema,
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type NativeShadowComparisonInput,
  type OrderOutcomeInput,
  type RiskAssessmentRequest,
  type RiskAssessmentResponse,
''',
)
replace_once(
    'apps/api/src/index.ts',
    "export * from './postgres-administration.js';\n",
    "export * from './postgres-administration.js';\nexport * from './postgres-shadow-comparisons.js';\n",
)
replace_once(
    'apps/api/src/index.ts',
    'export interface CourierRefreshQueue {\n',
    '''export interface ShadowComparisonRepository {
  save(input: {
    organizationId: string;
    storeId: string;
    apiKeyId: string;
    idempotencyKey: string;
    comparison: NativeShadowComparisonInput;
    guardAssessment: RiskAssessmentResponse;
  }): Promise<{ comparisonId: string; replay: boolean }>;
}

export interface CourierRefreshQueue {
''',
)
replace_once(
    'apps/api/src/index.ts',
    '''  outcomes: OutcomeRepository;
  refreshQueue: CourierRefreshQueue;
''',
    '''  outcomes: OutcomeRepository;
  shadowComparisons?: ShadowComparisonRepository;
  refreshQueue: CourierRefreshQueue;
''',
)
replace_once(
    'apps/api/src/index.ts',
    "        outcomes: 'POST /v1/order-outcomes',\n        refresh: 'POST /v1/courier-observations/refresh',\n",
    "        outcomes: 'POST /v1/order-outcomes',\n        nativeShadowComparisons: 'POST /v1/integration-comparisons/native-shadow',\n        refresh: 'POST /v1/courier-observations/refresh',\n",
)

route = '''  app.post('/v1/integration-comparisons/native-shadow', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'comparisons:write', requestId);
    if (scopeError) return scopeError;
    if (!dependencies.shadowComparisons) {
      return apiError(
        requestId,
        503,
        'SHADOW_COMPARISON_UNAVAILABLE',
        'Native shadow comparison persistence is not configured',
      );
    }
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const parsedBody = await parseJson(context.req.raw, nativeShadowComparisonInputSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    const assessment = await dependencies.assessments.findById({
      organizationId: identity.organizationId,
      storeId: identity.storeId,
      assessmentId: parsedBody.value.assessment_id,
    });
    if (!assessment) {
      return apiError(
        requestId,
        400,
        'ASSESSMENT_NOT_FOUND',
        'Assessment not found for this store',
      );
    }
    if (assessment.request.external_order_id !== parsedBody.value.external_order_id) {
      return apiError(
        requestId,
        400,
        'ASSESSMENT_ORDER_MISMATCH',
        'Assessment does not belong to the supplied external order',
      );
    }
    try {
      const saved = await dependencies.shadowComparisons.save({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        apiKeyId: identity.apiKeyId,
        idempotencyKey,
        comparison: parsedBody.value,
        guardAssessment: assessment.response,
      });
      const response = nativeShadowComparisonResponseSchema.parse({
        success: true,
        comparison_id: saved.comparisonId,
        replay: saved.replay,
      });
      return context.json(response, saved.replay ? 200 : 201);
    } catch (error) {
      const code =
        error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
          ? error.code
          : 'SHADOW_COMPARISON_UNAVAILABLE';
      const status =
        code === 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT'
          ? 409
          : code === 'SHADOW_ASSESSMENT_NOT_FOUND' ||
              code === 'SHADOW_ASSESSMENT_ORDER_MISMATCH' ||
              code === 'TENANT_SCOPE_MISMATCH'
            ? 400
            : 503;
      return apiError(
        requestId,
        status,
        code,
        status === 503
          ? 'Native shadow comparison could not be persisted'
          : 'Native shadow comparison was rejected',
      );
    }
  });

'''
replace_once(
    'apps/api/src/index.ts',
    "  app.post('/v1/courier-observations/refresh', async (context) => {\n",
    route + "  app.post('/v1/courier-observations/refresh', async (context) => {\n",
)

memory_class = '''export class MemoryShadowComparisonRepository implements ShadowComparisonRepository {
  private readonly records = new Map<
    string,
    {
      comparisonId: string;
      comparison: NativeShadowComparisonInput;
      guardAssessment: RiskAssessmentResponse;
    }
  >();

  async save(input: {
    organizationId: string;
    storeId: string;
    apiKeyId: string;
    idempotencyKey: string;
    comparison: NativeShadowComparisonInput;
    guardAssessment: RiskAssessmentResponse;
  }): Promise<{ comparisonId: string; replay: boolean }> {
    const key = `${input.organizationId}:${input.storeId}:${input.idempotencyKey}`;
    const existing = this.records.get(key);
    if (existing) {
      if (
        JSON.stringify(existing.comparison) !== JSON.stringify(input.comparison) ||
        existing.guardAssessment.assessment_id !== input.guardAssessment.assessment_id
      ) {
        const error = new Error('SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT') as Error & {
          code: string;
        };
        error.code = 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT';
        throw error;
      }
      return { comparisonId: existing.comparisonId, replay: true };
    }
    const comparisonId = `cmp_${randomUUID()}`;
    this.records.set(key, {
      comparisonId,
      comparison: input.comparison,
      guardAssessment: input.guardAssessment,
    });
    return { comparisonId, replay: false };
  }

  findByIdempotency(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
  }):
    | {
        comparisonId: string;
        comparison: NativeShadowComparisonInput;
        guardAssessment: RiskAssessmentResponse;
      }
    | undefined {
    return this.records.get(`${input.organizationId}:${input.storeId}:${input.idempotencyKey}`);
  }
}

'''
replace_once(
    'apps/api/src/index.ts',
    'export class MemoryOperationIdempotencyStore implements OperationIdempotencyStore {\n',
    memory_class + 'export class MemoryOperationIdempotencyStore implements OperationIdempotencyStore {\n',
)

replace_once(
    'apps/api/src/server.ts',
    'import { PostgresVerificationService } from \'./postgres-verification.js\';\n',
    "import { PostgresVerificationService } from './postgres-verification.js';\nimport { PostgresShadowComparisonRepository } from './postgres-shadow-comparisons.js';\n",
)
replace_once(
    'apps/api/src/server.ts',
    '''  MemoryOutcomeRepository,
  MemoryRateLimiter,
''',
    '''  MemoryOutcomeRepository,
  MemoryRateLimiter,
  MemoryShadowComparisonRepository,
''',
)
replace_once(
    'apps/api/src/server.ts',
    '''    outcomes: new PostgresOutcomeRepository(pool),
    refreshQueue: new PostgresCourierRefreshQueue(pool),
''',
    '''    outcomes: new PostgresOutcomeRepository(pool),
    shadowComparisons: new PostgresShadowComparisonRepository(pool),
    refreshQueue: new PostgresCourierRefreshQueue(pool),
''',
)
replace_once(
    'apps/api/src/server.ts',
    '''          'outcomes:write',
          'courier:refresh',
''',
    '''          'outcomes:write',
          'comparisons:write',
          'courier:refresh',
''',
)
replace_once(
    'apps/api/src/server.ts',
    '''    outcomes: new MemoryOutcomeRepository(),
    refreshQueue: new MemoryRefreshQueue(),
''',
    '''    outcomes: new MemoryOutcomeRepository(),
    shadowComparisons: new MemoryShadowComparisonRepository(),
    refreshQueue: new MemoryRefreshQueue(),
''',
)

replace_once(
    'apps/api/src/bootstrap.ts',
    '''        'outcomes:write',
        'courier:refresh',
''',
    '''        'outcomes:write',
        'comparisons:write',
        'courier:refresh',
''',
)

schema_block = '''export const integrationShadowComparisons = pgTable(
  'integration_shadow_comparisons',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    apiKeyId: text('api_key_id').references(() => apiKeys.id, { onDelete: 'set null' }),
    integration: text('integration').notNull(),
    externalOrderId: text('external_order_id').notNull(),
    idempotencyKey: text('idempotency_key').notNull(),
    assessmentId: text('assessment_id')
      .notNull()
      .references(() => riskAssessments.id, { onDelete: 'cascade' }),
    legacyScore: integer('legacy_score').notNull(),
    legacyDecision: text('legacy_decision').notNull(),
    guardScore: integer('guard_score').notNull(),
    guardDecision: text('guard_decision').notNull(),
    guardConfidence: numeric('guard_confidence', { precision: 5, scale: 4 }).notNull(),
    decisionChanged: boolean('decision_changed').notNull(),
    scoreDelta: integer('score_delta').notNull(),
    rolloutVersion: text('rollout_version').notNull(),
    sampleBucket: integer('sample_bucket').notNull(),
    sampleRateBps: integer('sample_rate_bps').notNull(),
    evaluatedAt: timestamp('evaluated_at', { withTimezone: true }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('integration_shadow_comparisons_scope_idempotency_unique').on(
      table.organizationId,
      table.storeId,
      table.integration,
      table.idempotencyKey,
    ),
    index('integration_shadow_comparisons_store_created_idx').on(
      table.storeId,
      table.createdAt,
    ),
    index('integration_shadow_comparisons_assessment_idx').on(table.assessmentId),
  ],
);

'''
replace_once(
    'packages/database/src/schema.ts',
    'export const riskSignals = pgTable(\n',
    schema_block + 'export const riskSignals = pgTable(\n',
)

replace_once(
    'packages/database/src/runtime-role.ts',
    '''    'risk_assessments',
    'risk_signals',
''',
    '''    'risk_assessments',
    'integration_shadow_comparisons',
    'risk_signals',
''',
)
replace_once(
    'packages/database/src/runtime-role.ts',
    '''    'risk_assessments',
    'risk_signals',
    'order_outcomes',
''',
    '''    'risk_assessments',
    'integration_shadow_comparisons',
    'risk_signals',
    'order_outcomes',
''',
)

migration_path = Path('packages/database/migrations/0010_native_shadow_comparisons.sql')
manifest_path = Path('packages/database/migrations/manifest.json')
manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
checksum = sha256(migration_path.read_bytes()).hexdigest()
if any(item['name'] == migration_path.name for item in manifest['migrations']):
    raise SystemExit('Migration 0010 already exists in manifest')
manifest['migrations'].append({'name': migration_path.name, 'checksum_sha256': checksum})
manifest_path.write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')

replace_once(
    'docs/api/api-specification.md',
    '## Webhooks\n',
    '''## Record native shadow comparison

```http
POST /v1/integration-comparisons/native-shadow
```

This endpoint requires `comparisons:write` and `Idempotency-Key`. It is only for
post-order native-client shadow evaluation; it must not determine checkout action.

```json
{
  "external_order_id": "ORDER-100",
  "assessment_id": "ras_123",
  "legacy_score": 20,
  "legacy_decision": "allow",
  "rollout_version": "pilot-v1",
  "sample_bucket": 140,
  "sample_rate_bps": 1000,
  "evaluated_at": "2026-07-18T08:00:00Z"
}
```

The API loads the assessment from the authenticated organization/store scope and
derives the Guard score, decision, confidence, delta, and decision-change flag
server-side. The durable record contains no phone, API key, provider credential,
or unrestricted order snapshot. Reusing an idempotency key with different
comparison evidence returns a conflict.

## Webhooks
''',
)
replace_once(
    'docs/integrations/integrations.md',
    '- Roll out behind a feature flag and compare old/new decisions before removing old code.\n',
    '''- Roll out behind a feature flag and compare old/new decisions before removing old code.
- The first rollout mode is `off` or `shadow` only; Guard never becomes the
  effective decision source in this milestone.
- Select the shadow cohort deterministically from a stable store-specific
  sampling key and order ID so retries stay in the same cohort.
- Run shadow evaluation after order persistence, not as a checkout-blocking
  control. A Guard or comparison-persistence failure returns a safe code while
  the legacy result remains authoritative.
- Persist successful comparisons through
  `POST /v1/integration-comparisons/native-shadow`; the API derives Guard values
  from the scoped assessment and rejects cross-store or mismatched-order data.
- Do not enable enforcement or broad automatic blocking until pilot outcomes
  have been reviewed and thresholds calibrated.
''',
)
replace_once(
    'docs/database/database-design.md',
    '### `risk_signals`\n',
    '''### `integration_shadow_comparisons`

- immutable organization/store-scoped native-client comparison evidence
- source API key and integration name
- external order and scoped assessment references
- legacy score/decision
- server-derived Guard score/decision/confidence
- decision-change flag and score delta
- rollout version, deterministic sample bucket, and sample rate
- evaluation and creation timestamps

The assessment foreign key includes organization and store scope. No raw phone,
API key, provider credential, or unrestricted order snapshot is stored.
Idempotency is unique by organization, store, integration, and key; conflicting
reuse fails closed.

### `risk_signals`
''',
)
replace_once(
    '.ai-bridge/decisions.md',
    '''36. Managed envelope v2 uses one random 32-byte data-encryption key per record, AES-256-GCM, a SHA-256 record-context digest, authenticated wrapped-key metadata, and a provider-neutral asynchronous wrap/unwrap contract. Plaintext data keys are zeroed after use; context mismatch, provider outage, malformed metadata, unsupported providers, and missing legacy keys fail closed with structured non-secret codes. Production writes remain on local v1 until a reviewed KMS adapter and service identities are provisioned; legacy dual-read is explicit and temporary.
''',
    '''36. Managed envelope v2 uses one random 32-byte data-encryption key per record, AES-256-GCM, a SHA-256 record-context digest, authenticated wrapped-key metadata, and a provider-neutral asynchronous wrap/unwrap contract. Plaintext data keys are zeroed after use; context mismatch, provider outage, malformed metadata, unsupported providers, and missing legacy keys fail closed with structured non-secret codes. Production writes remain on local v1 until a reviewed KMS adapter and service identities are provisioned; legacy dual-read is explicit and temporary.
37. The native `multi-store-saas` rollout begins with `off` and deterministic `shadow` modes only. The legacy result remains the effective decision even when Guard recommends block. Successful comparisons are persisted through a tenant-scoped idempotent API that derives Guard values from the referenced assessment; Guard or persistence failure returns a safe code and never changes checkout behavior. Enforcement requires a later reviewed rollout decision backed by pilot outcomes.
''',
)

print(json.dumps({'migration_checksum': checksum}))
