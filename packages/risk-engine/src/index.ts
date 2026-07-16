import type { RiskDecision, RiskLevel, RiskSignal } from '@ozzyl/shared-types';

export const ENGINE_VERSION = '1.0.0';

export interface CourierFeatures {
  totalOrders: number;
  deliveredOrders: number;
  returnedOrders: number;
  cancelledBeforeShipping: number;
  providerCount: number;
  freshness: 'fresh' | 'stale' | 'missing';
  sourceConfidence: number;
}

export interface MerchantFeatures {
  deliveredOrders: number;
  returnedOrders: number;
  recentCancelledOrders: number;
  previousSuccessfulCustomer: boolean;
}

export interface VelocityFeatures {
  phoneOrdersLastHour: number;
  devicePhoneCountLastDay: number;
  ipCustomerCountLastHour: number;
}

export interface VerificationFeatures {
  otpVerified: boolean;
  otpFailures: number;
  phoneUnreachable: boolean;
}

export interface NetworkFeatures {
  confirmedNegativeOutcomes: number;
  independentReporters: number;
  confirmedPositiveOutcomes: number;
  activeDispute: boolean;
}

export interface OrderFeatures {
  total: number;
  paymentMethod: 'cod' | 'prepaid';
  itemsCount?: number;
}

export interface RiskPolicy {
  version: string;
  thresholds: { verify: number; review: number; hold: number; block: number };
  highValueOrderAmount: number;
  unknownDecision: Extract<RiskDecision, 'verify' | 'review'>;
}

export interface RiskEngineInput {
  order: OrderFeatures;
  courier: CourierFeatures;
  merchant: MerchantFeatures;
  velocity: VelocityFeatures;
  verification: VerificationFeatures;
  network: NetworkFeatures;
  policy?: RiskPolicy;
}

export interface RiskEngineResult {
  score: number;
  confidence: number;
  riskLevel: RiskLevel;
  decision: RiskDecision;
  signals: RiskSignal[];
  recommendedActions: string[];
  engineVersion: string;
  policyVersion: string;
  degraded: boolean;
}

export const DEFAULT_POLICY: RiskPolicy = {
  version: 'default-v1',
  thresholds: { verify: 25, review: 45, hold: 65, block: 80 },
  highValueOrderAmount: 10_000,
  unknownDecision: 'verify',
};

export function normalizeBangladeshPhone(input: string): string {
  let digits = input.replace(/\D/g, '');
  if (digits.startsWith('880') && digits.length === 13) digits = `0${digits.slice(3)}`;
  if (digits.startsWith('1') && digits.length === 10) digits = `0${digits}`;
  return digits;
}

export function isValidBangladeshPhone(input: string): boolean {
  return /^01[3-9]\d{8}$/.test(normalizeBangladeshPhone(input));
}

function clamp(value: number, min = 0, max = 100): number {
  return Math.min(max, Math.max(min, value));
}

function addSignal(
  signals: RiskSignal[],
  code: string,
  category: RiskSignal['category'],
  score: number,
  description: string,
  confidence?: number,
): number {
  signals.push({
    code,
    category,
    score,
    description,
    ...(confidence === undefined ? {} : { confidence }),
  });
  return score;
}

function calculateConfidence(input: RiskEngineInput): number {
  const shipped = input.courier.deliveredOrders + input.courier.returnedOrders;
  const sample = Math.min(1, shipped / 10);
  const providers = Math.min(1, input.courier.providerCount / 2);
  const freshness =
    input.courier.freshness === 'fresh' ? 1 : input.courier.freshness === 'stale' ? 0.55 : 0;
  const source = clamp(input.courier.sourceConfidence, 0, 1);
  const merchantEvidence = Math.min(
    1,
    (input.merchant.deliveredOrders + input.merchant.returnedOrders) / 5,
  );
  const confidence =
    sample * 0.35 + providers * 0.15 + freshness * 0.2 + source * 0.2 + merchantEvidence * 0.1;
  return Math.round(clamp(confidence * 100)) / 100;
}

function decisionFor(score: number, policy: RiskPolicy): RiskDecision {
  if (score >= policy.thresholds.block) return 'block';
  if (score >= policy.thresholds.hold) return 'hold';
  if (score >= policy.thresholds.review) return 'review';
  if (score >= policy.thresholds.verify) return 'verify';
  return 'allow';
}

function levelFor(score: number): Exclude<RiskLevel, 'unknown'> {
  if (score >= 80) return 'critical';
  if (score >= 60) return 'high';
  if (score >= 30) return 'moderate';
  return 'low';
}

export function assessRisk(input: RiskEngineInput): RiskEngineResult {
  const policy = input.policy ?? DEFAULT_POLICY;
  const signals: RiskSignal[] = [];
  let score = 0;
  const shipped = input.courier.deliveredOrders + input.courier.returnedOrders;
  const deliveryRate = shipped > 0 ? input.courier.deliveredOrders / shipped : null;
  const returnRate = shipped > 0 ? input.courier.returnedOrders / shipped : null;

  if (input.order.paymentMethod === 'cod' && input.order.total >= policy.highValueOrderAmount) {
    score += addSignal(
      signals,
      'high_value_cod',
      'order',
      10,
      `COD order value is at least ${policy.highValueOrderAmount}`,
    );
  }

  if (deliveryRate !== null && shipped >= 5 && deliveryRate < 0.3) {
    score += addSignal(
      signals,
      'low_delivery_rate',
      'courier',
      35,
      `Customer delivery rate is ${Math.round(deliveryRate * 100)}% across ${shipped} shipped orders`,
      input.courier.sourceConfidence,
    );
  }

  if (returnRate !== null && shipped >= 3 && returnRate > 0.5) {
    score += addSignal(
      signals,
      'high_return_rate',
      'courier',
      30,
      `Customer return rate is ${Math.round(returnRate * 100)}% across ${shipped} shipped orders`,
      input.courier.sourceConfidence,
    );
  }

  if (input.velocity.phoneOrdersLastHour >= 3) {
    score += addSignal(
      signals,
      'phone_order_velocity',
      'velocity',
      15,
      `${input.velocity.phoneOrdersLastHour} orders were created for the phone in one hour`,
    );
  }

  if (input.velocity.devicePhoneCountLastDay >= 3) {
    score += addSignal(
      signals,
      'device_multiple_phones',
      'velocity',
      20,
      'The same device used multiple phone numbers recently',
    );
  }

  if (input.velocity.ipCustomerCountLastHour >= 5) {
    score += addSignal(
      signals,
      'ip_customer_velocity',
      'velocity',
      10,
      'The request IP was associated with many customers recently',
    );
  }

  if (input.merchant.returnedOrders >= 2) {
    score += addSignal(
      signals,
      'merchant_repeat_returns',
      'merchant',
      20,
      'This merchant has multiple confirmed returns for the customer',
    );
  }

  if (input.merchant.previousSuccessfulCustomer) {
    score += addSignal(
      signals,
      'merchant_previous_delivery',
      'merchant',
      -20,
      'Customer has a previous delivered order with this merchant',
    );
  }

  if (input.verification.otpVerified) {
    score += addSignal(
      signals,
      'otp_verified',
      'verification',
      -25,
      'Customer successfully verified the order by OTP',
    );
  } else if (input.verification.otpFailures >= 3) {
    score += addSignal(
      signals,
      'otp_repeated_failure',
      'verification',
      15,
      'Customer failed OTP verification repeatedly',
    );
  }

  if (input.verification.phoneUnreachable) {
    score += addSignal(
      signals,
      'phone_unreachable',
      'verification',
      20,
      'Customer phone was unreachable during verification',
    );
  }

  if (
    input.network.confirmedNegativeOutcomes >= 2 &&
    input.network.independentReporters >= 2 &&
    !input.network.activeDispute
  ) {
    score += addSignal(
      signals,
      'network_confirmed_negative',
      'network',
      20,
      'Independent evidence includes multiple confirmed negative outcomes',
    );
  }

  if (input.network.confirmedPositiveOutcomes >= 5) {
    score += addSignal(
      signals,
      'network_positive_history',
      'network',
      -10,
      'Network evidence includes several confirmed deliveries',
    );
  }

  const confidence = calculateConfidence(input);
  const degraded = input.courier.freshness !== 'fresh';
  const hasMeaningfulHistory =
    shipped > 0 || input.merchant.deliveredOrders + input.merchant.returnedOrders > 0;
  const finalScore = Math.round(clamp(score));

  if (!hasMeaningfulHistory && confidence < 0.25) {
    signals.push({
      code: 'insufficient_history',
      category: 'courier',
      score: 0,
      confidence,
      description: 'No reliable courier or merchant history is currently available',
    });
    return {
      score: finalScore,
      confidence,
      riskLevel: 'unknown',
      decision: policy.unknownDecision,
      signals,
      recommendedActions: ['require_otp'],
      engineVersion: ENGINE_VERSION,
      policyVersion: policy.version,
      degraded: true,
    };
  }

  const decision = decisionFor(finalScore, policy);
  const actions = new Set<string>();
  if (decision === 'verify' || decision === 'review') actions.add('require_otp');
  if (decision === 'hold') {
    actions.add('manual_review');
    actions.add('request_advance_payment');
  }
  if (decision === 'block') actions.add('require_prepayment');

  return {
    score: finalScore,
    confidence,
    riskLevel: levelFor(finalScore),
    decision,
    signals,
    recommendedActions: [...actions],
    engineVersion: ENGINE_VERSION,
    policyVersion: policy.version,
    degraded,
  };
}
