import type { OzzylGuardClient } from '@ozzyl/sdk';
import type { RiskAssessmentResponse } from '@ozzyl/shared-types';

export interface CommerceOrder {
  id: string;
  phone: string;
  total: number;
  paymentMethod: 'cod' | 'prepaid';
  district?: string;
  area?: string;
  itemCount?: number;
}

export interface ShadowComparison {
  orderId: string;
  guardAssessment: RiskAssessmentResponse;
  legacy?: { score: number; decision: string };
  decisionChanged: boolean;
  scoreDelta?: number;
}

export class MultiStoreGuardAdapter {
  constructor(private readonly client: OzzylGuardClient) {}

  async assess(
    order: CommerceOrder,
    legacy?: { score: number; decision: string },
  ): Promise<ShadowComparison> {
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
      { idempotencyKey: `multi-store:${order.id}:risk-v1` },
    );
    return {
      orderId: order.id,
      guardAssessment,
      ...(legacy ? { legacy } : {}),
      decisionChanged: legacy ? legacy.decision.toLowerCase() !== guardAssessment.decision : false,
      ...(legacy ? { scoreDelta: guardAssessment.risk_score - legacy.score } : {}),
    };
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
        idempotencyKey: `multi-store:${input.orderId}:outcome:${input.outcome}:${input.occurredAt}`,
      },
    );
  }
}
