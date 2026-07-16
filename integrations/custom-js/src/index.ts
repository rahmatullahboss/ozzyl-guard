import { OzzylGuardClient } from '@ozzyl/sdk';
import type { RiskAssessmentResponse } from '@ozzyl/shared-types';

export interface CustomOrderInput {
  orderId: string;
  phone: string;
  total: number;
  paymentMethod: 'cod' | 'prepaid';
  district?: string;
  area?: string;
  itemsCount?: number;
}

export class CustomWebsiteGuard {
  private readonly client: OzzylGuardClient;

  constructor(options: {
    apiKey: string;
    baseUrl?: string;
    fetcher?: typeof fetch;
    timeoutMs?: number;
  }) {
    if (typeof window !== 'undefined') {
      throw new Error(
        'CustomWebsiteGuard must run on the merchant server; never expose live API keys in a browser',
      );
    }
    this.client = new OzzylGuardClient(options);
  }

  async assess(order: CustomOrderInput): Promise<RiskAssessmentResponse> {
    return this.client.createRiskAssessment(
      {
        external_order_id: order.orderId,
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
        ...(order.itemsCount === undefined ? {} : { items_count: order.itemsCount }),
      },
      { idempotencyKey: `custom:${order.orderId}:risk-v1` },
    );
  }

  async outcome(input: {
    orderId: string;
    assessmentId?: string;
    outcome: 'delivered' | 'returned' | 'cancelled_before_shipping';
    reason?: string;
    occurredAt: string;
  }): Promise<void> {
    await this.client.submitOutcome(
      {
        external_order_id: input.orderId,
        ...(input.assessmentId ? { assessment_id: input.assessmentId } : {}),
        outcome: input.outcome,
        ...(input.reason ? { reason: input.reason } : {}),
        occurred_at: input.occurredAt,
      },
      { idempotencyKey: `custom:${input.orderId}:outcome:${input.outcome}:${input.occurredAt}` },
    );
  }
}

export function checkoutAction(assessment: RiskAssessmentResponse): {
  allowCheckout: boolean;
  requireOtp: boolean;
  holdOrder: boolean;
  message: string;
} {
  if (assessment.decision === 'allow') {
    return {
      allowCheckout: true,
      requireOtp: false,
      holdOrder: false,
      message: 'Order may continue',
    };
  }
  if (assessment.decision === 'verify' || assessment.risk_level === 'unknown') {
    return {
      allowCheckout: true,
      requireOtp: true,
      holdOrder: false,
      message: 'Verify the customer before fulfilment',
    };
  }
  return {
    allowCheckout: assessment.decision !== 'block',
    requireOtp: false,
    holdOrder: true,
    message: assessment.decision === 'block' ? 'Require prepayment' : 'Hold for merchant review',
  };
}
