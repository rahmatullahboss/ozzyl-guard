import { describe, expect, it } from 'vitest';
import { toRiskCourierFeatures } from './index.js';

describe('toRiskCourierFeatures', () => {
  it('returns explicit missing features when no observations exist', () => {
    expect(toRiskCourierFeatures([])).toMatchObject({
      providerCount: 0,
      freshness: 'missing',
      sourceConfidence: 0,
    });
  });

  it('aggregates normalized provider observations', () => {
    const future = new Date(Date.now() + 60_000).toISOString();
    const observedAt = new Date().toISOString();
    const result = toRiskCourierFeatures([
      {
        provider: 'steadfast',
        totalOrders: 10,
        deliveredOrders: 8,
        returnedOrders: 2,
        cancelledBeforeShipping: 0,
        successRate: 0.8,
        confidence: 0.8,
        source: 'merchant_session',
        observedAt,
        expiresAt: future,
      },
      {
        provider: 'pathao',
        totalOrders: 5,
        deliveredOrders: 4,
        returnedOrders: 1,
        cancelledBeforeShipping: 0,
        successRate: 0.8,
        confidence: 0.6,
        source: 'merchant_api',
        observedAt,
        expiresAt: future,
      },
    ]);
    expect(result).toMatchObject({
      totalOrders: 15,
      deliveredOrders: 12,
      returnedOrders: 3,
      providerCount: 2,
      freshness: 'fresh',
      sourceConfidence: 0.7,
    });
  });
});
