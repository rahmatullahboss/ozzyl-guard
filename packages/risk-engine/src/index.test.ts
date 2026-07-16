import { describe, expect, it } from 'vitest';
import { assessRisk, isValidBangladeshPhone, normalizeBangladeshPhone } from './index.js';

const baseInput = {
  order: { total: 1500, paymentMethod: 'cod' as const },
  courier: {
    totalOrders: 0,
    deliveredOrders: 0,
    returnedOrders: 0,
    cancelledBeforeShipping: 0,
    providerCount: 0,
    freshness: 'missing' as const,
    sourceConfidence: 0,
  },
  merchant: {
    deliveredOrders: 0,
    returnedOrders: 0,
    recentCancelledOrders: 0,
    previousSuccessfulCustomer: false,
  },
  velocity: { phoneOrdersLastHour: 0, devicePhoneCountLastDay: 0, ipCustomerCountLastHour: 0 },
  verification: { otpVerified: false, otpFailures: 0, phoneUnreachable: false },
  network: {
    confirmedNegativeOutcomes: 0,
    independentReporters: 0,
    confirmedPositiveOutcomes: 0,
    activeDispute: false,
  },
};

describe('phone normalization', () => {
  it('normalizes Bangladesh country code', () => {
    expect(normalizeBangladeshPhone('+880 1712-345678')).toBe('01712345678');
    expect(isValidBangladeshPhone('01712345678')).toBe(true);
  });
});

describe('risk engine', () => {
  it('does not call an unknown customer safe', () => {
    const result = assessRisk(baseInput);
    expect(result.riskLevel).toBe('unknown');
    expect(result.decision).toBe('verify');
    expect(result.degraded).toBe(true);
  });

  it('produces explainable critical risk for repeated returns', () => {
    const result = assessRisk({
      ...baseInput,
      courier: {
        totalOrders: 12,
        deliveredOrders: 2,
        returnedOrders: 8,
        cancelledBeforeShipping: 2,
        providerCount: 1,
        freshness: 'fresh',
        sourceConfidence: 0.9,
      },
      merchant: { ...baseInput.merchant, returnedOrders: 2 },
    });
    expect(result.score).toBeGreaterThanOrEqual(80);
    expect(result.decision).toBe('block');
    expect(result.signals.map((signal) => signal.code)).toContain('high_return_rate');
  });

  it('reduces risk after verified OTP and previous delivery', () => {
    const result = assessRisk({
      ...baseInput,
      courier: {
        totalOrders: 5,
        deliveredOrders: 4,
        returnedOrders: 1,
        cancelledBeforeShipping: 0,
        providerCount: 1,
        freshness: 'fresh',
        sourceConfidence: 0.9,
      },
      merchant: { ...baseInput.merchant, deliveredOrders: 1, previousSuccessfulCustomer: true },
      verification: { otpVerified: true, otpFailures: 0, phoneUnreachable: false },
    });
    expect(result.score).toBe(0);
    expect(result.decision).toBe('allow');
  });
});
