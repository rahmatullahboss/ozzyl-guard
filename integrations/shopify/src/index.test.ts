import { describe, expect, it } from 'vitest';
import { actionFor, verifyShopifyWebhook } from './index.js';
import { createHmac } from 'node:crypto';

describe('Shopify integration', () => {
  it('maps canonical decisions without a second risk engine', () => {
    const action = actionFor({
      success: true,
      assessment_id: 'ras_1',
      risk_score: 72,
      risk_level: 'high',
      decision: 'hold',
      confidence: 0.8,
      signals: [],
      courier_summary: { total: 10, delivered: 3, returned: 7, cancelled_before_shipping: 0 },
    });
    expect(action.recommendation).toBe('hold');
    expect(action.tags).toContain('ozzyl:high');
  });

  it('validates Shopify HMAC', () => {
    const body = '{"id":1}';
    const secret = 'x'.repeat(32);
    const hmac = createHmac('sha256', secret).update(body).digest('base64');
    expect(verifyShopifyWebhook(body, hmac, secret)).toBe(true);
  });
});
