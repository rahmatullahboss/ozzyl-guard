import { createHash } from 'node:crypto';
import type {
  NativeShadowAttemptInput,
  NativeShadowAttemptResponse,
  NativeShadowComparisonInput,
  NativeShadowComparisonResponse,
  NativeShadowRolloutResponse,
  OrderOutcomeInput,
  RiskAssessmentRequest,
  RiskAssessmentResponse,
} from '@ozzyl/shared-types';

export interface MultiStoreGuardClient {
  createRiskAssessment(
    input: RiskAssessmentRequest,
    options: { idempotencyKey: string },
  ): Promise<RiskAssessmentResponse>;
  getNativeShadowRollout(): Promise<NativeShadowRolloutResponse>;
  reportNativeShadowComparison(
    input: NativeShadowComparisonInput,
    options: { idempotencyKey: string },
  ): Promise<NativeShadowComparisonResponse>;
  reportNativeShadowAttempt(
    input: NativeShadowAttemptInput,
    options: { idempotencyKey: string },
  ): Promise<NativeShadowAttemptResponse>;
  submitOutcome(
    input: OrderOutcomeInput,
    options: { idempotencyKey: string },
  ): Promise<{ success: true; outcome_id: string }>;
}

export interface CommerceOrder {
  id: string;
  phone: string;
  total: number;
  paymentMethod: 'cod' | 'prepaid';
  district?: string;
  area?: string;
  itemCount?: number;
}

export interface LegacyRiskResult {
  score: number;
  decision: string;
}

export interface ShadowComparison {
  orderId: string;
  guardAssessment: RiskAssessmentResponse;
  legacy: LegacyRiskResult;
  decisionChanged: boolean;
  scoreDelta: number;
}

export interface ShadowRolloutConfig {
  mode: 'off' | 'shadow';
  version: string;
  sampleRateBps: number;
  samplingKey: string;
}

export type ShadowFailureCode =
  'GUARD_ASSESSMENT_FAILED' | 'GUARD_TIMEOUT' | 'COMPARISON_PERSIST_FAILED';

export interface ShadowEvaluation {
  orderId: string;
  mode: 'off' | 'shadow';
  selected: boolean;
  sampleBucket: number;
  effective: LegacyRiskResult & { source: 'legacy' };
  evaluatedAt?: string;
  comparison?: ShadowComparison & {
    persisted: boolean;
    comparisonId?: string;
  };
  failure?: {
    code: ShadowFailureCode;
  };
}

export class MultiStoreGuardAdapter {
  constructor(
    private readonly client: MultiStoreGuardClient,
    private readonly now: () => Date = () => new Date(),
  ) {}

  async assess(order: CommerceOrder, legacy: LegacyRiskResult): Promise<ShadowComparison> {
    validateOrder(order);
    const normalizedLegacy = normalizeLegacy(legacy);
    const guardAssessment = await this.client.createRiskAssessment(
      {
        external_order_id: order.id,
        phone: order.phone,
        order_total: order.total,
        payment_method: order.paymentMethod,
        ...(order.district || order.area
          ? {
              shipping_address: {
                ...(order.district ? { district: order.district } : {}),
                ...(order.area ? { area: order.area } : {}),
              },
            }
          : {}),
        ...(order.itemCount === undefined ? {} : { items_count: order.itemCount }),
      },
      { idempotencyKey: stableKey('risk', order.id) },
    );
    return {
      orderId: order.id,
      guardAssessment,
      legacy: normalizedLegacy,
      decisionChanged: normalizedLegacy.decision !== guardAssessment.decision,
      scoreDelta: guardAssessment.risk_score - normalizedLegacy.score,
    };
  }

  async evaluateShadow(
    order: CommerceOrder,
    legacy: LegacyRiskResult,
    rollout: ShadowRolloutConfig,
  ): Promise<ShadowEvaluation> {
    validateOrder(order);
    const normalizedLegacy = normalizeLegacy(legacy);
    validateRollout(rollout);
    const sampleBucket = deterministicBucket(rollout.samplingKey, order.id);
    const base: ShadowEvaluation = {
      orderId: order.id,
      mode: rollout.mode,
      selected: false,
      sampleBucket,
      effective: { ...normalizedLegacy, source: 'legacy' },
    };
    if (
      rollout.mode === 'off' ||
      rollout.sampleRateBps === 0 ||
      sampleBucket >= rollout.sampleRateBps
    ) {
      return base;
    }

    const evaluatedAt = this.now().toISOString();
    let comparison: ShadowComparison;
    try {
      comparison = await this.assess(order, normalizedLegacy);
    } catch (error) {
      return {
        ...base,
        selected: true,
        evaluatedAt,
        failure: { code: isTimeoutError(error) ? 'GUARD_TIMEOUT' : 'GUARD_ASSESSMENT_FAILED' },
      };
    }

    try {
      const persisted = await this.client.reportNativeShadowComparison(
        {
          external_order_id: order.id,
          assessment_id: comparison.guardAssessment.assessment_id,
          legacy_score: normalizedLegacy.score,
          legacy_decision: normalizedLegacy.decision,
          rollout_version: rollout.version,
          sample_bucket: sampleBucket,
          sample_rate_bps: rollout.sampleRateBps,
          evaluated_at: evaluatedAt,
        },
        {
          idempotencyKey: stableKey('shadow', `${rollout.version}:${order.id}`),
        },
      );
      return {
        ...base,
        selected: true,
        evaluatedAt,
        comparison: {
          ...comparison,
          persisted: true,
          comparisonId: persisted.comparison_id,
        },
      };
    } catch {
      return {
        ...base,
        selected: true,
        evaluatedAt,
        comparison: { ...comparison, persisted: false },
        failure: { code: 'COMPARISON_PERSIST_FAILED' },
      };
    }
  }

  async submitOutcome(input: {
    orderId: string;
    assessmentId: string;
    outcome: 'delivered' | 'returned' | 'cancelled_before_shipping';
    provider?: string;
    reason?: string;
    occurredAt: string;
  }): Promise<void> {
    await this.client.submitOutcome(
      {
        external_order_id: input.orderId,
        assessment_id: input.assessmentId,
        outcome: input.outcome,
        ...(input.provider ? { provider: input.provider } : {}),
        ...(input.reason ? { reason: input.reason } : {}),
        occurred_at: input.occurredAt,
      },
      {
        idempotencyKey: stableKey(
          'outcome',
          `${input.orderId}:${input.outcome}:${input.occurredAt}`,
        ),
      },
    );
  }
}

export interface PersistedCommerceOrder {
  organizationId: string;
  storeId: string;
  order: CommerceOrder;
  legacy: LegacyRiskResult;
}

export interface PersistedCommerceOrderReader {
  loadPersistedOrder(input: {
    organizationId: string;
    storeId: string;
    orderId: string;
  }): Promise<PersistedCommerceOrder | null>;
}

export type PostPersistAdvisoryCode =
  | ShadowFailureCode
  | 'SOURCE_ORDER_NOT_FOUND'
  | 'SOURCE_SCOPE_MISMATCH'
  | 'ROLLOUT_CONFIG_FAILED'
  | 'ROLLOUT_SCOPE_MISMATCH'
  | 'ATTEMPT_PERSIST_FAILED';

export interface PostPersistShadowResult {
  orderId: string;
  selected: boolean;
  attemptRecorded: boolean;
  effective?: LegacyRiskResult & { source: 'legacy' };
  evaluation?: ShadowEvaluation;
  advisory?: { code: PostPersistAdvisoryCode };
}

export class MultiStorePostPersistShadowIntegration {
  private readonly adapter: MultiStoreGuardAdapter;

  constructor(
    private readonly reader: PersistedCommerceOrderReader,
    private readonly client: MultiStoreGuardClient,
    now: () => Date = () => new Date(),
  ) {
    this.adapter = new MultiStoreGuardAdapter(client, now);
  }

  async afterOrderPersisted(input: {
    organizationId: string;
    storeId: string;
    orderId: string;
  }): Promise<PostPersistShadowResult> {
    const persisted = await this.reader.loadPersistedOrder(input);
    if (!persisted) {
      return {
        orderId: input.orderId,
        selected: false,
        attemptRecorded: false,
        advisory: { code: 'SOURCE_ORDER_NOT_FOUND' },
      };
    }
    if (
      persisted.organizationId !== input.organizationId ||
      persisted.storeId !== input.storeId ||
      persisted.order.id !== input.orderId
    ) {
      return {
        orderId: input.orderId,
        selected: false,
        attemptRecorded: false,
        advisory: { code: 'SOURCE_SCOPE_MISMATCH' },
      };
    }

    const effective = { ...normalizeLegacy(persisted.legacy), source: 'legacy' as const };
    let rolloutResponse: NativeShadowRolloutResponse;
    try {
      rolloutResponse = await this.client.getNativeShadowRollout();
    } catch {
      return {
        orderId: input.orderId,
        selected: false,
        attemptRecorded: false,
        effective,
        advisory: { code: 'ROLLOUT_CONFIG_FAILED' },
      };
    }
    if (
      rolloutResponse.organization_id !== input.organizationId ||
      rolloutResponse.store_id !== input.storeId ||
      rolloutResponse.integration !== 'multi-store-saas'
    ) {
      return {
        orderId: input.orderId,
        selected: false,
        attemptRecorded: false,
        effective,
        advisory: { code: 'ROLLOUT_SCOPE_MISMATCH' },
      };
    }

    const evaluation = await this.adapter.evaluateShadow(persisted.order, persisted.legacy, {
      mode: rolloutResponse.mode,
      version: rolloutResponse.rollout_version,
      sampleRateBps: rolloutResponse.sample_rate_bps,
      samplingKey: rolloutResponse.sampling_key,
    });
    if (!evaluation.selected) {
      return {
        orderId: input.orderId,
        selected: false,
        attemptRecorded: false,
        effective: evaluation.effective,
        evaluation,
      };
    }

    const attempt = toAttempt(evaluation, rolloutResponse);
    try {
      await this.client.reportNativeShadowAttempt(attempt, {
        idempotencyKey: stableKey(
          'attempt',
          `${rolloutResponse.rollout_version}:${persisted.order.id}`,
        ),
      });
      return {
        orderId: input.orderId,
        selected: true,
        attemptRecorded: true,
        effective: evaluation.effective,
        evaluation,
        ...(evaluation.failure ? { advisory: evaluation.failure } : {}),
      };
    } catch {
      return {
        orderId: input.orderId,
        selected: true,
        attemptRecorded: false,
        effective: evaluation.effective,
        evaluation,
        advisory: { code: 'ATTEMPT_PERSIST_FAILED' },
      };
    }
  }
}

function toAttempt(
  evaluation: ShadowEvaluation,
  rollout: NativeShadowRolloutResponse,
): NativeShadowAttemptInput {
  if (!evaluation.selected || !evaluation.evaluatedAt) {
    throw new Error('Only selected shadow evaluations can be reported');
  }
  const base = {
    external_order_id: evaluation.orderId,
    rollout_version: rollout.rollout_version,
    sample_bucket: evaluation.sampleBucket,
    sample_rate_bps: rollout.sample_rate_bps,
    evaluated_at: evaluation.evaluatedAt,
  };
  if (
    evaluation.failure?.code === 'GUARD_ASSESSMENT_FAILED' ||
    evaluation.failure?.code === 'GUARD_TIMEOUT'
  ) {
    return {
      ...base,
      status: 'assessment_failed',
      failure_code: evaluation.failure.code,
    };
  }
  if (evaluation.failure?.code === 'COMPARISON_PERSIST_FAILED' && evaluation.comparison) {
    return {
      ...base,
      status: 'comparison_persist_failed',
      failure_code: 'COMPARISON_PERSIST_FAILED',
      assessment_id: evaluation.comparison.guardAssessment.assessment_id,
    };
  }
  if (evaluation.comparison?.persisted && evaluation.comparison.comparisonId) {
    return {
      ...base,
      status: 'comparison_succeeded',
      assessment_id: evaluation.comparison.guardAssessment.assessment_id,
      comparison_id: evaluation.comparison.comparisonId,
    };
  }
  throw new Error('Selected shadow evaluation has no reportable advisory state');
}

export function deterministicBucket(samplingKey: string, orderId: string): number {
  if (samplingKey.length === 0 || samplingKey.length > 200) {
    throw new Error('Shadow sampling key must contain 1 to 200 characters');
  }
  const digest = createHash('sha256').update(`${samplingKey}:${orderId}`).digest();
  return digest.readUInt32BE(0) % 10_000;
}

function stableKey(intent: string, value: string): string {
  const digest = createHash('sha256').update(value).digest('hex').slice(0, 48);
  return `multi-store:${intent}:${digest}`;
}

function normalizeLegacy(legacy: LegacyRiskResult): LegacyRiskResult {
  if (!Number.isInteger(legacy.score) || legacy.score < 0 || legacy.score > 100) {
    throw new Error('Legacy score must be an integer from 0 to 100');
  }
  const decision = legacy.decision.trim().toLowerCase();
  if (decision.length === 0 || decision.length > 50) {
    throw new Error('Legacy decision must contain 1 to 50 characters');
  }
  return { score: legacy.score, decision };
}

function validateOrder(order: CommerceOrder): void {
  const id = order.id.trim();
  if (id.length === 0 || id.length > 200) {
    throw new Error('Order id must contain 1 to 200 characters');
  }
  if (!Number.isFinite(order.total) || order.total < 0) {
    throw new Error('Order total must be a non-negative number');
  }
  if (
    order.itemCount !== undefined &&
    (!Number.isInteger(order.itemCount) || order.itemCount <= 0 || order.itemCount > 1000)
  ) {
    throw new Error('Order item count must be an integer from 1 to 1000');
  }
}

function validateRollout(rollout: ShadowRolloutConfig): void {
  if (rollout.version.trim().length === 0 || rollout.version.length > 100) {
    throw new Error('Shadow rollout version must contain 1 to 100 characters');
  }
  if (
    !Number.isInteger(rollout.sampleRateBps) ||
    rollout.sampleRateBps < 0 ||
    rollout.sampleRateBps > 10_000
  ) {
    throw new Error('Shadow sample rate must be an integer from 0 to 10000 basis points');
  }
  if (rollout.mode === 'shadow' && rollout.sampleRateBps === 0) {
    throw new Error('Shadow mode requires a positive sample rate');
  }
}

function isTimeoutError(error: unknown): boolean {
  return Boolean(
    error &&
    typeof error === 'object' &&
    'code' in error &&
    (error as { code?: unknown }).code === 'REQUEST_TIMEOUT',
  );
}
