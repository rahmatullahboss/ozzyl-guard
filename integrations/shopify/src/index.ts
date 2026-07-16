import { createHmac, timingSafeEqual } from 'node:crypto';
import type { OzzylGuardClient } from '@ozzyl/sdk';
import type { RiskAssessmentResponse } from '@ozzyl/shared-types';

export interface ShopifyOrderWebhook {
  id: number | string;
  name?: string;
  total_price: string;
  financial_status?: string;
  gateway?: string;
  phone?: string;
  billing_address?: { phone?: string; province?: string; city?: string; address1?: string };
  shipping_address?: { phone?: string; province?: string; city?: string; address1?: string };
  line_items?: Array<{ quantity: number }>;
}

export interface ShopifyOrderAction {
  tags: string[];
  metafields: Array<{
    namespace: 'ozzyl_guard';
    key: string;
    value: string;
    type: 'single_line_text_field' | 'number_integer';
  }>;
  recommendation: 'none' | 'verify' | 'review' | 'hold' | 'prepayment';
}

export class ShopifyGuardIntegration {
  constructor(private readonly client: OzzylGuardClient) {}

  async assessOrder(
    order: ShopifyOrderWebhook,
  ): Promise<{ assessment: RiskAssessmentResponse; action: ShopifyOrderAction }> {
    const phone = order.phone ?? order.shipping_address?.phone ?? order.billing_address?.phone;
    if (!phone) throw new Error('Shopify order does not include a customer phone');
    const externalOrderId = String(order.name ?? order.id);
    const assessment = await this.client.createRiskAssessment(
      {
        external_order_id: externalOrderId,
        phone,
        order_total: Number(order.total_price),
        payment_method: isCashOnDelivery(order) ? 'cod' : 'prepaid',
        shipping_address: {
          district: order.shipping_address?.province ?? order.billing_address?.province,
          area: order.shipping_address?.city ?? order.billing_address?.city,
          raw: order.shipping_address?.address1 ?? order.billing_address?.address1,
        },
        items_count: order.line_items?.reduce((sum, item) => sum + item.quantity, 0),
      },
      { idempotencyKey: `shopify:${externalOrderId}:risk-v1` },
    );
    return { assessment, action: actionFor(assessment) };
  }

  async submitOutcome(input: {
    orderId: string;
    assessmentId?: string;
    outcome: 'delivered' | 'returned' | 'cancelled_before_shipping';
    occurredAt: string;
  }): Promise<void> {
    await this.client.submitOutcome(
      {
        external_order_id: input.orderId,
        ...(input.assessmentId ? { assessment_id: input.assessmentId } : {}),
        outcome: input.outcome,
        occurred_at: input.occurredAt,
      },
      { idempotencyKey: `shopify:${input.orderId}:outcome:${input.outcome}:${input.occurredAt}` },
    );
  }
}

export function verifyShopifyWebhook(
  rawBody: string,
  hmacHeader: string,
  clientSecret: string,
): boolean {
  const actual = Buffer.from(hmacHeader, 'base64');
  const expected = createHmac('sha256', clientSecret).update(rawBody).digest();
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function actionFor(assessment: RiskAssessmentResponse): ShopifyOrderAction {
  const recommendation =
    assessment.decision === 'block'
      ? 'prepayment'
      : assessment.decision === 'allow'
        ? 'none'
        : assessment.decision;
  return {
    tags: [`ozzyl:${assessment.risk_level}`, `ozzyl:${assessment.decision}`],
    metafields: [
      {
        namespace: 'ozzyl_guard',
        key: 'assessment_id',
        value: assessment.assessment_id,
        type: 'single_line_text_field',
      },
      {
        namespace: 'ozzyl_guard',
        key: 'risk_score',
        value: String(assessment.risk_score),
        type: 'number_integer',
      },
      {
        namespace: 'ozzyl_guard',
        key: 'decision',
        value: assessment.decision,
        type: 'single_line_text_field',
      },
    ],
    recommendation,
  };
}

function isCashOnDelivery(order: ShopifyOrderWebhook): boolean {
  return /cash|cod/i.test(`${order.gateway ?? ''} ${order.financial_status ?? ''}`);
}
