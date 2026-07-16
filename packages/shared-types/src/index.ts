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

export const platformRoleSchema = z.enum(['merchant', 'platform_admin']);
export type PlatformRole = z.infer<typeof platformRoleSchema>;

export const browserStoreSchema = z.object({
  id: z.string().min(1),
  organization_id: z.string().min(1),
  name: z.string().min(1),
  platform: z.string().min(1),
  status: z.string().min(1),
});
export type BrowserStore = z.infer<typeof browserStoreSchema>;

export const browserOrganizationSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  stores: z.array(browserStoreSchema),
});
export type BrowserOrganization = z.infer<typeof browserOrganizationSchema>;

export const browserSessionResponseSchema = z.object({
  success: z.literal(true),
  user: z.object({
    id: z.string().min(1),
    email: z.string().email(),
    platform_role: platformRoleSchema,
  }),
  organizations: z.array(browserOrganizationSchema),
  csrf_token: z.string().min(32),
  expires_at: z.string().datetime(),
});
export type BrowserSessionResponse = z.infer<typeof browserSessionResponseSchema>;

export const dashboardReviewSchema = z.object({
  assessment_id: z.string().min(1),
  external_order_id: z.string().nullable(),
  phone_masked: z.string().min(1),
  risk_score: z.number().int().min(0).max(100),
  decision: riskDecisionSchema,
  confidence: z.number().min(0).max(1),
  signals: z.array(
    z.object({
      code: z.string().min(1),
      score: z.number().int(),
      description: z.string().min(1),
    }),
  ),
  created_at: z.string().datetime(),
});
export type DashboardReview = z.infer<typeof dashboardReviewSchema>;

export const merchantDashboardOverviewSchema = z.object({
  success: z.literal(true),
  generated_at: z.string().datetime(),
  scope: z.object({
    organization_id: z.string().min(1),
    organization_name: z.string().min(1),
    store_id: z.string().min(1),
    store_name: z.string().min(1),
    platform: z.string().min(1),
    role: z.string().min(1),
  }),
  summary: z.object({
    assessments_30d: z.number().int().nonnegative(),
    degraded_30d: z.number().int().nonnegative(),
    pending_reviews: z.number().int().nonnegative(),
    verified_30d: z.number().int().nonnegative(),
    usage_month: z.number().int().nonnegative(),
    usage_limit: z.number().int().positive().nullable(),
  }),
  decisions: z.object({
    allow: z.number().int().nonnegative(),
    verify: z.number().int().nonnegative(),
    review: z.number().int().nonnegative(),
    hold: z.number().int().nonnegative(),
    block: z.number().int().nonnegative(),
  }),
  reviews: z.array(dashboardReviewSchema),
  couriers: z.array(
    z.object({
      provider: z.string().min(1),
      status: z.string().min(1),
      last_success_at: z.string().datetime().nullable(),
      last_failure_at: z.string().datetime().nullable(),
      failure_code: z.string().nullable(),
    }),
  ),
});
export type MerchantDashboardOverview = z.infer<typeof merchantDashboardOverviewSchema>;

export const platformAdminOverviewSchema = z.object({
  success: z.literal(true),
  generated_at: z.string().datetime(),
  summary: z.object({
    active_organizations: z.number().int().nonnegative(),
    active_stores: z.number().int().nonnegative(),
    assessments_today: z.number().int().nonnegative(),
    degraded_percentage: z.number().min(0).max(100),
    worker_backlog: z.number().int().nonnegative(),
    failed_webhooks: z.number().int().nonnegative(),
  }),
  incidents: z.array(
    z.object({
      code: z.string().min(1),
      title: z.string().min(1),
      detail: z.string().min(1),
      severity: z.enum(['low', 'medium', 'high']),
    }),
  ),
  providers: z.array(
    z.object({
      name: z.string().min(1),
      state: z.string().min(1),
      metric: z.string().min(1),
    }),
  ),
  automatic_blocking: z.object({
    broadly_enabled: z.literal(false),
    reason: z.string().min(1),
  }),
});
export type PlatformAdminOverview = z.infer<typeof platformAdminOverviewSchema>;

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
