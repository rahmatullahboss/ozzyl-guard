import { randomUUID } from 'node:crypto';
import type { Pool } from 'pg';
import type { NativeShadowComparisonInput, RiskAssessmentResponse } from '@ozzyl/shared-types';
import type { ShadowComparisonRepository } from './index.js';

export type ShadowComparisonErrorCode =
  | 'TENANT_SCOPE_MISMATCH'
  | 'SHADOW_ASSESSMENT_NOT_FOUND'
  | 'SHADOW_ASSESSMENT_ORDER_MISMATCH'
  | 'SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT';

export class ShadowComparisonPersistenceError extends Error {
  constructor(readonly code: ShadowComparisonErrorCode) {
    super(code);
    this.name = 'ShadowComparisonPersistenceError';
  }
}

interface ExistingComparisonRow {
  id: string;
  assessment_id: string;
  external_order_id: string;
  legacy_score: number;
  legacy_decision: string;
  rollout_version: string;
  sample_bucket: number;
  sample_rate_bps: number;
  evaluated_at: Date;
}

interface AssessmentRow {
  external_order_id: string | null;
  score: number;
  decision: string;
  confidence: string;
}

export class PostgresShadowComparisonRepository implements ShadowComparisonRepository {
  constructor(private readonly pool: Pool) {}

  async save(input: {
    organizationId: string;
    storeId: string;
    apiKeyId: string;
    idempotencyKey: string;
    comparison: NativeShadowComparisonInput;
    guardAssessment: RiskAssessmentResponse;
  }): Promise<{ comparisonId: string; replay: boolean }> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.storeId}:native-shadow:${input.idempotencyKey}`,
      ]);

      const scope = await client.query(
        `
          select 1
          from organizations o
          join stores s on s.organization_id = o.id
          where o.id = $1
            and s.id = $2
            and o.status = 'active'
            and s.status = 'active'
          limit 1
        `,
        [input.organizationId, input.storeId],
      );
      if (!scope.rows[0]) {
        throw new ShadowComparisonPersistenceError('TENANT_SCOPE_MISMATCH');
      }

      const assessmentResult = await client.query<AssessmentRow>(
        `
          select ra.external_order_id, ra.score, ra.decision, ra.confidence
          from risk_assessments ra
          where ra.id = $1
            and ra.organization_id = $2
            and ra.store_id = $3
          limit 1
        `,
        [input.comparison.assessment_id, input.organizationId, input.storeId],
      );
      const assessment = assessmentResult.rows[0];
      if (!assessment) {
        throw new ShadowComparisonPersistenceError('SHADOW_ASSESSMENT_NOT_FOUND');
      }
      if (
        assessment.external_order_id !== input.comparison.external_order_id ||
        input.guardAssessment.assessment_id !== input.comparison.assessment_id
      ) {
        throw new ShadowComparisonPersistenceError('SHADOW_ASSESSMENT_ORDER_MISMATCH');
      }

      const comparisonId = `cmp_${randomUUID()}`;
      const inserted = await client.query<{ id: string }>(
        `
          insert into integration_shadow_comparisons (
            id, organization_id, store_id, api_key_id, integration,
            external_order_id, idempotency_key, assessment_id,
            legacy_score, legacy_decision, guard_score, guard_decision,
            guard_confidence, decision_changed, score_delta,
            rollout_version, sample_bucket, sample_rate_bps, evaluated_at
          ) values (
            $1, $2, $3, $4, 'multi-store-saas',
            $5, $6, $7,
            $8, $9, $10, $11,
            $12, $13, $14,
            $15, $16, $17, $18
          )
          on conflict (organization_id, store_id, integration, idempotency_key) do nothing
          returning id
        `,
        [
          comparisonId,
          input.organizationId,
          input.storeId,
          input.apiKeyId,
          input.comparison.external_order_id,
          input.idempotencyKey,
          input.comparison.assessment_id,
          input.comparison.legacy_score,
          input.comparison.legacy_decision,
          assessment.score,
          assessment.decision,
          Number(assessment.confidence),
          input.comparison.legacy_decision !== assessment.decision,
          assessment.score - input.comparison.legacy_score,
          input.comparison.rollout_version,
          input.comparison.sample_bucket,
          input.comparison.sample_rate_bps,
          input.comparison.evaluated_at,
        ],
      );

      if (inserted.rows[0]) {
        await client.query('commit');
        return { comparisonId, replay: false };
      }

      const existingResult = await client.query<ExistingComparisonRow>(
        `
          select
            id, assessment_id, external_order_id, legacy_score, legacy_decision,
            rollout_version, sample_bucket, sample_rate_bps, evaluated_at
          from integration_shadow_comparisons
          where organization_id = $1
            and store_id = $2
            and integration = 'multi-store-saas'
            and idempotency_key = $3
          limit 1
        `,
        [input.organizationId, input.storeId, input.idempotencyKey],
      );
      const existing = existingResult.rows[0];
      if (!existing || !sameRequest(existing, input.comparison)) {
        throw new ShadowComparisonPersistenceError('SHADOW_COMPARISON_IDEMPOTENCY_CONFLICT');
      }
      await client.query('commit');
      return { comparisonId: existing.id, replay: true };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

function sameRequest(
  existing: ExistingComparisonRow,
  comparison: NativeShadowComparisonInput,
): boolean {
  return (
    existing.assessment_id === comparison.assessment_id &&
    existing.external_order_id === comparison.external_order_id &&
    existing.legacy_score === comparison.legacy_score &&
    existing.legacy_decision === comparison.legacy_decision &&
    existing.rollout_version === comparison.rollout_version &&
    existing.sample_bucket === comparison.sample_bucket &&
    existing.sample_rate_bps === comparison.sample_rate_bps &&
    existing.evaluated_at.toISOString() === comparison.evaluated_at
  );
}
