import {
  boolean,
  index,
  integer,
  jsonb,
  numeric,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

const timestamps = () => ({
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash'),
  managedAuthId: text('managed_auth_id').unique(),
  emailVerifiedAt: timestamp('email_verified_at', { withTimezone: true }),
  platformRole: text('platform_role').notNull().default('merchant'),
  status: text('status').notNull().default('active'),
  ...timestamps(),
});

export const userSessions = pgTable(
  'user_sessions',
  {
    id: text('id').primaryKey(),
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    tokenHash: text('token_hash').notNull().unique(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    revokedAt: timestamp('revoked_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index('user_sessions_user_idx').on(table.userId),
    index('user_sessions_expiry_idx').on(table.expiresAt),
  ],
);

export const plans = pgTable('plans', {
  id: text('id').primaryKey(),
  code: text('code').notNull().unique(),
  name: text('name').notNull(),
  entitlements: jsonb('entitlements').notNull(),
  active: boolean('active').notNull().default(true),
  ...timestamps(),
});

export const organizations = pgTable('organizations', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  planId: text('plan_id').references(() => plans.id),
  status: text('status').notNull().default('active'),
  ...timestamps(),
});

export const organizationMembers = pgTable(
  'organization_members',
  {
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    role: text('role').notNull(),
    permissions: jsonb('permissions').notNull().default({}),
    ...timestamps(),
  },
  (table) => [
    primaryKey({ columns: [table.organizationId, table.userId] }),
    index('organization_members_user_idx').on(table.userId),
  ],
);

export const stores = pgTable(
  'stores',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    name: text('name').notNull(),
    platform: text('platform').notNull(),
    externalStoreId: text('external_store_id'),
    timezone: text('timezone').notNull().default('Asia/Dhaka'),
    currency: text('currency').notNull().default('BDT'),
    status: text('status').notNull().default('active'),
    ...timestamps(),
  },
  (table) => [
    index('stores_organization_idx').on(table.organizationId),
    uniqueIndex('stores_external_unique').on(
      table.organizationId,
      table.platform,
      table.externalStoreId,
    ),
  ],
);

export const apiKeys = pgTable(
  'api_keys',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id').references(() => stores.id, { onDelete: 'cascade' }),
    environment: text('environment').notNull(),
    keyHash: text('key_hash').notNull().unique(),
    keyPrefix: text('key_prefix').notNull(),
    name: text('name').notNull(),
    scopes: jsonb('scopes').notNull().default([]),
    allowedOrigins: jsonb('allowed_origins').notNull().default([]),
    lastUsedAt: timestamp('last_used_at', { withTimezone: true }),
    expiresAt: timestamp('expires_at', { withTimezone: true }),
    revokedAt: timestamp('revoked_at', { withTimezone: true }),
    ...timestamps(),
  },
  (table) => [
    index('api_keys_scope_idx').on(table.organizationId, table.storeId),
    index('api_keys_prefix_idx').on(table.keyPrefix),
  ],
);

export const usageEvents = pgTable(
  'usage_events',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    apiKeyId: text('api_key_id').references(() => apiKeys.id, { onDelete: 'set null' }),
    eventType: text('event_type').notNull(),
    units: integer('units').notNull().default(1),
    requestId: text('request_id').notNull(),
    responseMs: integer('response_ms'),
    statusCode: integer('status_code'),
    period: text('period').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('usage_events_request_unique').on(
      table.organizationId,
      table.eventType,
      table.requestId,
    ),
    index('usage_events_period_idx').on(table.organizationId, table.period),
  ],
);

export const auditEvents = pgTable(
  'audit_events',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id').references(() => organizations.id, {
      onDelete: 'set null',
    }),
    actorType: text('actor_type').notNull(),
    actorId: text('actor_id'),
    action: text('action').notNull(),
    targetType: text('target_type'),
    targetId: text('target_id'),
    metadata: jsonb('metadata').notNull().default({}),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index('audit_events_scope_idx').on(table.organizationId, table.createdAt)],
);

export const courierAccounts = pgTable(
  'courier_accounts',
  {
    id: text('id').primaryKey(),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    provider: text('provider').notNull(),
    status: text('status').notNull().default('pending'),
    credentialVersion: integer('credential_version').notNull().default(1),
    lastConnectedAt: timestamp('last_connected_at', { withTimezone: true }),
    lastSuccessAt: timestamp('last_success_at', { withTimezone: true }),
    lastFailureAt: timestamp('last_failure_at', { withTimezone: true }),
    failureCode: text('failure_code'),
    ...timestamps(),
  },
  (table) => [
    uniqueIndex('courier_accounts_store_provider_unique').on(table.storeId, table.provider),
  ],
);

export const courierCredentials = pgTable('courier_credentials', {
  courierAccountId: text('courier_account_id')
    .primaryKey()
    .references(() => courierAccounts.id, { onDelete: 'cascade' }),
  encryptedPayload: text('encrypted_payload').notNull(),
  encryptionKeyVersion: text('encryption_key_version').notNull(),
  ...timestamps(),
});

export const courierSessions = pgTable('courier_sessions', {
  courierAccountId: text('courier_account_id')
    .primaryKey()
    .references(() => courierAccounts.id, { onDelete: 'cascade' }),
  encryptedPayload: text('encrypted_payload').notNull(),
  encryptionKeyVersion: text('encryption_key_version').notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true }),
  validatedAt: timestamp('validated_at', { withTimezone: true }),
  status: text('status').notNull(),
  ...timestamps(),
});

export const courierObservations = pgTable(
  'courier_observations',
  {
    id: text('id').primaryKey(),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    provider: text('provider').notNull(),
    phoneHash: text('phone_hash').notNull(),
    totalOrders: integer('total_orders').notNull(),
    deliveredOrders: integer('delivered_orders').notNull(),
    returnedOrders: integer('returned_orders').notNull(),
    cancelledBeforeShipping: integer('cancelled_before_shipping').notNull(),
    successRate: numeric('success_rate', { precision: 5, scale: 4 }),
    confidence: numeric('confidence', { precision: 5, scale: 4 }).notNull(),
    sourceType: text('source_type').notNull(),
    observedAt: timestamp('observed_at', { withTimezone: true }).notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    rawPayloadEncrypted: text('raw_payload_encrypted'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index('courier_observations_latest_idx').on(
      table.storeId,
      table.phoneHash,
      table.provider,
      table.observedAt,
    ),
  ],
);

export const courierJobs = pgTable(
  'courier_jobs',
  {
    id: text('id').primaryKey(),
    courierAccountId: text('courier_account_id')
      .notNull()
      .references(() => courierAccounts.id, { onDelete: 'cascade' }),
    jobType: text('job_type').notNull(),
    status: text('status').notNull(),
    attempts: integer('attempts').notNull().default(0),
    scheduledAt: timestamp('scheduled_at', { withTimezone: true }).notNull(),
    startedAt: timestamp('started_at', { withTimezone: true }),
    claimedBy: text('claimed_by'),
    claimedAt: timestamp('claimed_at', { withTimezone: true }),
    leaseExpiresAt: timestamp('lease_expires_at', { withTimezone: true }),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    errorCode: text('error_code'),
    payload: jsonb('payload').notNull().default({}),
    ...timestamps(),
  },
  (table) => [index('courier_jobs_schedule_idx').on(table.status, table.scheduledAt)],
);

export const riskPolicies = pgTable(
  'risk_policies',
  {
    id: text('id').primaryKey(),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    version: text('version').notNull(),
    policy: jsonb('policy').notNull(),
    active: boolean('active').notNull().default(false),
    ...timestamps(),
  },
  (table) => [uniqueIndex('risk_policies_store_version_unique').on(table.storeId, table.version)],
);

export const riskAssessments = pgTable(
  'risk_assessments',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    apiKeyId: text('api_key_id').references(() => apiKeys.id, { onDelete: 'set null' }),
    externalOrderId: text('external_order_id'),
    idempotencyKey: text('idempotency_key').notNull(),
    phoneHash: text('phone_hash').notNull(),
    orderSnapshot: jsonb('order_snapshot').notNull(),
    score: integer('score').notNull(),
    confidence: numeric('confidence', { precision: 5, scale: 4 }).notNull(),
    riskLevel: text('risk_level').notNull(),
    decision: text('decision').notNull(),
    engineVersion: text('engine_version').notNull(),
    policyVersion: text('policy_version').notNull(),
    degraded: boolean('degraded').notNull().default(false),
    ...timestamps(),
  },
  (table) => [
    uniqueIndex('risk_assessments_idempotency_unique').on(
      table.organizationId,
      table.storeId,
      table.idempotencyKey,
    ),
    index('risk_assessments_store_created_idx').on(table.storeId, table.createdAt),
  ],
);

export const integrationShadowComparisons = pgTable(
  'integration_shadow_comparisons',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    apiKeyId: text('api_key_id').references(() => apiKeys.id, { onDelete: 'set null' }),
    integration: text('integration').notNull(),
    externalOrderId: text('external_order_id').notNull(),
    idempotencyKey: text('idempotency_key').notNull(),
    assessmentId: text('assessment_id')
      .notNull()
      .references(() => riskAssessments.id, { onDelete: 'cascade' }),
    legacyScore: integer('legacy_score').notNull(),
    legacyDecision: text('legacy_decision').notNull(),
    guardScore: integer('guard_score').notNull(),
    guardDecision: text('guard_decision').notNull(),
    guardConfidence: numeric('guard_confidence', { precision: 5, scale: 4 }).notNull(),
    decisionChanged: boolean('decision_changed').notNull(),
    scoreDelta: integer('score_delta').notNull(),
    rolloutVersion: text('rollout_version').notNull(),
    sampleBucket: integer('sample_bucket').notNull(),
    sampleRateBps: integer('sample_rate_bps').notNull(),
    evaluatedAt: timestamp('evaluated_at', { withTimezone: true }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('integration_shadow_comparisons_scope_idempotency_unique').on(
      table.organizationId,
      table.storeId,
      table.integration,
      table.idempotencyKey,
    ),
    index('integration_shadow_comparisons_store_created_idx').on(table.storeId, table.createdAt),
    index('integration_shadow_comparisons_assessment_idx').on(table.assessmentId),
  ],
);

export const riskSignals = pgTable(
  'risk_signals',
  {
    id: text('id').primaryKey(),
    assessmentId: text('assessment_id')
      .notNull()
      .references(() => riskAssessments.id, { onDelete: 'cascade' }),
    code: text('code').notNull(),
    category: text('category').notNull(),
    score: integer('score').notNull(),
    confidence: numeric('confidence', { precision: 5, scale: 4 }),
    description: text('description').notNull(),
    evidenceReference: text('evidence_reference'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index('risk_signals_assessment_idx').on(table.assessmentId)],
);

export const orderOutcomes = pgTable(
  'order_outcomes',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    externalOrderId: text('external_order_id').notNull(),
    idempotencyKey: text('idempotency_key').notNull(),
    assessmentId: text('assessment_id').references(() => riskAssessments.id, {
      onDelete: 'set null',
    }),
    phoneHash: text('phone_hash'),
    outcome: text('outcome').notNull(),
    provider: text('provider'),
    reason: text('reason'),
    source: text('source').notNull(),
    occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('order_outcomes_idempotency_unique').on(
      table.organizationId,
      table.storeId,
      table.idempotencyKey,
    ),
    index('order_outcomes_phone_idx').on(table.storeId, table.phoneHash, table.occurredAt),
  ],
);

export const idempotencyRecords = pgTable(
  'idempotency_records',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    operation: text('operation').notNull(),
    idempotencyKey: text('idempotency_key').notNull(),
    response: jsonb('response').notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    ...timestamps(),
  },
  (table) => [
    uniqueIndex('idempotency_records_scope_unique').on(
      table.organizationId,
      table.storeId,
      table.operation,
      table.idempotencyKey,
    ),
    index('idempotency_records_expiry_idx').on(table.expiresAt),
  ],
);

export const verificationSessions = pgTable(
  'verification_sessions',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    assessmentId: text('assessment_id').references(() => riskAssessments.id, {
      onDelete: 'set null',
    }),
    externalOrderId: text('external_order_id'),
    phoneHash: text('phone_hash').notNull(),
    purpose: text('purpose').notNull(),
    channel: text('channel').notNull(),
    status: text('status').notNull(),
    idempotencyKey: text('idempotency_key'),
    maxAttempts: integer('max_attempts').notNull().default(5),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    verifiedAt: timestamp('verified_at', { withTimezone: true }),
    ...timestamps(),
  },
  (table) => [
    index('verification_sessions_scope_idx').on(table.storeId, table.createdAt),
    uniqueIndex('verification_sessions_idempotency_unique').on(
      table.organizationId,
      table.storeId,
      table.idempotencyKey,
    ),
  ],
);

export const otpAttempts = pgTable('otp_attempts', {
  id: text('id').primaryKey(),
  verificationSessionId: text('verification_session_id')
    .notNull()
    .references(() => verificationSessions.id, { onDelete: 'cascade' }),
  otpHash: text('otp_hash').notNull(),
  attemptCount: integer('attempt_count').notNull().default(0),
  providerMessageId: text('provider_message_id'),
  sentAt: timestamp('sent_at', { withTimezone: true }),
  deliveredAt: timestamp('delivered_at', { withTimezone: true }),
  failedAt: timestamp('failed_at', { withTimezone: true }),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  ...timestamps(),
});

export const verificationJobs = pgTable(
  'verification_jobs',
  {
    id: text('id').primaryKey(),
    verificationSessionId: text('verification_session_id')
      .notNull()
      .references(() => verificationSessions.id, { onDelete: 'cascade' }),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    jobType: text('job_type').notNull().default('send_otp'),
    payloadEncrypted: text('payload_encrypted').notNull(),
    status: text('status').notNull().default('queued'),
    attempts: integer('attempts').notNull().default(0),
    nextAttemptAt: timestamp('next_attempt_at', { withTimezone: true }),
    providerMessageId: text('provider_message_id'),
    errorCode: text('error_code'),
    claimedBy: text('claimed_by'),
    claimedAt: timestamp('claimed_at', { withTimezone: true }),
    leaseExpiresAt: timestamp('lease_expires_at', { withTimezone: true }),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    ...timestamps(),
  },
  (table) => [
    uniqueIndex('verification_jobs_session_type_unique').on(
      table.verificationSessionId,
      table.jobType,
    ),
    index('verification_jobs_claim_idx').on(
      table.status,
      table.nextAttemptAt,
      table.leaseExpiresAt,
    ),
    index('verification_jobs_scope_idx').on(table.organizationId, table.storeId, table.createdAt),
  ],
);

export const webhookEndpoints = pgTable(
  'webhook_endpoints',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id').references(() => stores.id, { onDelete: 'cascade' }),
    url: text('url').notNull(),
    secretEncrypted: text('secret_encrypted').notNull(),
    events: jsonb('events').notNull(),
    status: text('status').notNull().default('active'),
    ...timestamps(),
  },
  (table) => [index('webhook_endpoints_scope_idx').on(table.organizationId, table.storeId)],
);

export const webhookDeliveries = pgTable(
  'webhook_deliveries',
  {
    id: text('id').primaryKey(),
    endpointId: text('endpoint_id')
      .notNull()
      .references(() => webhookEndpoints.id, { onDelete: 'cascade' }),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id').references(() => stores.id, { onDelete: 'cascade' }),
    eventId: text('event_id').notNull(),
    eventType: text('event_type').notNull(),
    eventPayload: jsonb('event_payload').notNull(),
    occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull(),
    status: text('status').notNull(),
    attempts: integer('attempts').notNull().default(0),
    nextAttemptAt: timestamp('next_attempt_at', { withTimezone: true }),
    responseStatus: integer('response_status'),
    errorCode: text('error_code'),
    claimedBy: text('claimed_by'),
    claimedAt: timestamp('claimed_at', { withTimezone: true }),
    leaseExpiresAt: timestamp('lease_expires_at', { withTimezone: true }),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    ...timestamps(),
  },
  (table) => [
    uniqueIndex('webhook_deliveries_event_unique').on(table.endpointId, table.eventId),
    index('webhook_deliveries_claim_idx').on(
      table.status,
      table.nextAttemptAt,
      table.leaseExpiresAt,
    ),
    index('webhook_deliveries_scope_idx').on(table.organizationId, table.storeId, table.createdAt),
  ],
);
