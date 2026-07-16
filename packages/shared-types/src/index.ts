import { z } from 'zod';

export const riskLevelSchema = z.enum(['low', 'moderate', 'high', 'critical', 'unknown']);
export type RiskLevel = z.infer<typeof riskLevelSchema>;

export const riskDecisionSchema = z.enum(['allow', 'verify', 'review', 'hold', 'block']);
export type RiskDecision = z.infer<typeof riskDecisionSchema>;

export const riskSignalSchema = z.object({
  code: z.string().min(1).max(100),
  category: z.enum(['courier', 'merchant', 'velocity', 'verification', 'network', 'order']),
  score: z.number().int().min(-100).max(100),
  confidence: z.number().min(0).max(1).optional(),
  description: z.string().min(1).max(500),
});
export type RiskSignal = z.infer<typeof riskSignalSchema>;

export const courierSummarySchema = z.object({
  freshness: z.enum(['fresh', 'stale', 'missing']).optional(),
  providers: z.number().int().nonnegative().optional(),
  total: z.number().int().nonnegative(),
  delivered: z.number().int().nonnegative(),
  returned: z.number().int().nonnegative(),
  cancelled_before_shipping: z.number().int().nonnegative(),
});
export type CourierSummary = z.infer<typeof courierSummarySchema>;

export const riskAssessmentRequestSchema = z.object({
  external_order_id: z.string().min(1).max(200).optional(),
  phone: z.string().min(8).max(30),
  order_total: z.number().nonnegative().default(0),
  payment_method: z.enum(['cod', 'prepaid']).default('cod'),
  shipping_address: z
    .object({
      district: z.string().max(120).optional(),
      area: z.string().max(200).optional(),
      raw: z.string().max(1000).optional(),
    })
    .optional(),
  items_count: z.number().int().positive().max(1000).optional(),
  session: z
    .object({
      ip: z.string().max(64).optional(),
      device_id: z.string().max(200).optional(),
      user_agent: z.string().max(1000).optional(),
    })
    .optional(),
});
export type RiskAssessmentRequest = z.infer<typeof riskAssessmentRequestSchema>;

export const riskAssessmentResponseSchema = z.object({
  success: z.literal(true),
  assessment_id: z.string().min(1),
  risk_score: z.number().int().min(0).max(100),
  risk_level: riskLevelSchema,
  decision: riskDecisionSchema,
  confidence: z.number().min(0).max(1),
  signals: z.array(riskSignalSchema),
  courier_summary: courierSummarySchema,
  recommended_actions: z.array(z.string()).optional(),
  meta: z
    .object({
      engine_version: z.string(),
      policy_version: z.string(),
      degraded: z.boolean(),
      response_ms: z.number().int().nonnegative().optional(),
    })
    .optional(),
});
export type RiskAssessmentResponse = z.infer<typeof riskAssessmentResponseSchema>;

export const orderOutcomeSchema = z.object({
  external_order_id: z.string().min(1).max(200),
  assessment_id: z.string().min(1).optional(),
  outcome: z.enum(['delivered', 'returned', 'cancelled_before_shipping', 'customer_confirmed']),
  provider: z.string().min(1).max(50).optional(),
  reason: z.string().max(500).optional(),
  occurred_at: z.string().datetime(),
});
export type OrderOutcomeInput = z.infer<typeof orderOutcomeSchema>;

export const apiErrorSchema = z.object({
  success: z.literal(false),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.record(z.unknown()).optional(),
  }),
  request_id: z.string(),
});
export type ApiError = z.infer<typeof apiErrorSchema>;

export interface RequestScope {
  organizationId: string;
  storeId: string;
  apiKeyId?: string;
  environment: 'test' | 'live';
}

export interface DomainEvent<TPayload = Record<string, unknown>> {
  id: string;
  type:
    | 'assessment.completed'
    | 'verification.verified'
    | 'verification.failed'
    | 'courier.connection_failed'
    | 'order.outcome_recorded'
    | 'usage.limit_warning';
  organizationId: string;
  storeId?: string;
  occurredAt: string;
  payload: TPayload;
}
