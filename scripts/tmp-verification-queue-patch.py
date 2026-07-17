from __future__ import annotations

import json
from pathlib import Path


def write(path: str, content: str) -> None:
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content)


def replace_once(path: str, old: str, new: str) -> None:
    target = Path(path)
    text = target.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected one match in {path}, found {count}: {old[:120]!r}")
    target.write_text(text.replace(old, new))


write(
    "packages/database/migrations/0009_verification_delivery_queue.sql",
    """alter table verification_sessions
  add column idempotency_key text,
  add column max_attempts integer not null default 5;

create unique index verification_sessions_idempotency_unique
  on verification_sessions(organization_id, store_id, idempotency_key);

create table verification_jobs (
  id text primary key,
  verification_session_id text not null references verification_sessions(id) on delete cascade,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  job_type text not null default 'send_otp',
  payload_encrypted text not null,
  status text not null default 'queued',
  attempts integer not null default 0,
  next_attempt_at timestamptz,
  provider_message_id text,
  error_code text,
  claimed_by text,
  claimed_at timestamptz,
  lease_expires_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (verification_session_id, job_type)
);

create index verification_jobs_claim_idx
  on verification_jobs(status, next_attempt_at, lease_expires_at);

create index verification_jobs_scope_idx
  on verification_jobs(organization_id, store_id, created_at desc);
""",
)

replace_once(
    "packages/database/src/schema.ts",
    """    purpose: text('purpose').notNull(),
    channel: text('channel').notNull(),
    status: text('status').notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
""",
    """    purpose: text('purpose').notNull(),
    channel: text('channel').notNull(),
    status: text('status').notNull(),
    idempotencyKey: text('idempotency_key'),
    maxAttempts: integer('max_attempts').notNull().default(5),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
""",
)
replace_once(
    "packages/database/src/schema.ts",
    """  (table) => [index('verification_sessions_scope_idx').on(table.storeId, table.createdAt)],
);

export const otpAttempts = pgTable('otp_attempts', {
""",
    """  (table) => [
    index('verification_sessions_scope_idx').on(table.storeId, table.createdAt),
    uniqueIndex('verification_sessions_idempotency_unique').on(
      table.organizationId,
      table.storeId,
      table.idempotencyKey,
    ),
  ],
);

export const otpAttempts = pgTable('otp_attempts', {
""",
)
replace_once(
    "packages/database/src/schema.ts",
    """export const webhookEndpoints = pgTable(
""",
    """export const verificationJobs = pgTable(
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
""",
)

replace_once(
    "packages/verification/src/index.ts",
    """export interface OtpDeliveryProvider {
  send(input: { phone: string; message: string; idempotencyKey: string }): Promise<{
    providerMessageId: string;
    accepted: boolean;
  }>;
}
""",
    """export interface OtpDeliveryProvider {
  send(input: {
    phone: string;
    message: string;
    idempotencyKey: string;
    signal?: AbortSignal;
  }): Promise<{
    providerMessageId: string;
    accepted: boolean;
  }>;
}

export class OtpProviderError extends Error {
  constructor(
    readonly code: string,
    readonly retryable: boolean,
    message: string,
  ) {
    super(message);
    this.name = 'OtpProviderError';
  }
}
""",
)
replace_once(
    "packages/verification/src/index.ts",
    """    const delivery = await this.options.provider.send({
      phone: input.phone,
      message: `Your Ozzyl Guard verification code is ${otp}. It expires in 5 minutes.`,
      idempotencyKey: id,
    });
""",
    """    const delivery = await this.options.provider.send({
      phone: input.phone,
      message: formatOtpMessage(otp),
      idempotencyKey: id,
    });
""",
)
replace_once(
    "packages/verification/src/index.ts",
    """export function hashOtp(verificationId: string, otp: string, secret: string): string {
""",
    """export function formatOtpMessage(otp: string, expiryMinutes = 5): string {
  if (!/^\\d{6}$/.test(otp)) throw new Error('OTP must contain exactly six digits');
  return `Your Ozzyl Guard verification code is ${otp}. It expires in ${expiryMinutes} minutes.`;
}

export function hashOtp(verificationId: string, otp: string, secret: string): string {
""",
)

write(
    "apps/api/src/postgres-verification.ts",
    """import { randomInt, randomUUID } from 'node:crypto';
import type { Pool, PoolClient } from 'pg';
import type { EnvelopeCipher } from '@ozzyl/encryption';
import type { DomainEvent } from '@ozzyl/shared-types';
import { VerificationError, hashOtp, verifyOtp } from '@ozzyl/verification';
import type { OtpVerifier, VerificationRequestQueue } from './index.js';

interface VerificationServiceOptions {
  otpSecret: string;
  cipher: EnvelopeCipher;
  expiryMs?: number;
  maxAttempts?: number;
  perPhoneWindowMs?: number;
  perPhoneLimit?: number;
  now?: () => Date;
  idFactory?: (prefix: string) => string;
}

export class PostgresVerificationService implements VerificationRequestQueue, OtpVerifier {
  private readonly expiryMs: number;
  private readonly maxAttempts: number;
  private readonly perPhoneWindowMs: number;
  private readonly perPhoneLimit: number;
  private readonly now: () => Date;
  private readonly idFactory: (prefix: string) => string;

  constructor(
    private readonly pool: Pool,
    private readonly options: VerificationServiceOptions,
  ) {
    if (options.otpSecret.length < 16) throw new Error('OTP_HASH_SECRET must be at least 16 characters');
    this.expiryMs = options.expiryMs ?? 5 * 60 * 1_000;
    this.maxAttempts = options.maxAttempts ?? 5;
    this.perPhoneWindowMs = options.perPhoneWindowMs ?? 60 * 60 * 1_000;
    this.perPhoneLimit = options.perPhoneLimit ?? 5;
    this.now = options.now ?? (() => new Date());
    this.idFactory = options.idFactory ?? ((prefix) => `${prefix}_${randomUUID()}`);
  }

  async enqueueSend(input: {
    organizationId: string;
    storeId: string;
    assessmentId?: string;
    phone: string;
    phoneHash: string;
    purpose: string;
    idempotencyKey: string;
  }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.storeId}:otp-send:${input.idempotencyKey}`,
      ]);
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.storeId}:otp-phone:${input.phoneHash}`,
      ]);

      const existing = await client.query<{ id: string; expires_at: Date }>(
        `
          select id, expires_at
          from verification_sessions
          where organization_id = $1 and store_id = $2 and idempotency_key = $3
          limit 1
        `,
        [input.organizationId, input.storeId, input.idempotencyKey],
      );
      const existingRow = existing.rows[0];
      if (existingRow) {
        await client.query('commit');
        return {
          verificationId: existingRow.id,
          expiresAt: existingRow.expires_at.toISOString(),
          replay: true,
        };
      }

      const scopedStore = await client.query(
        `
          select 1
          from stores s
          join organizations o on o.id = s.organization_id
          where s.id = $1 and s.organization_id = $2
            and s.status = 'active' and o.status = 'active'
          limit 1
        `,
        [input.storeId, input.organizationId],
      );
      if (scopedStore.rowCount !== 1) {
        throw new VerificationError('NOT_FOUND', 'Verification store scope was not found');
      }
      if (input.assessmentId) {
        const assessment = await client.query(
          `
            select 1 from risk_assessments
            where id = $1 and organization_id = $2 and store_id = $3
            limit 1
          `,
          [input.assessmentId, input.organizationId, input.storeId],
        );
        if (assessment.rowCount !== 1) {
          throw new VerificationError('NOT_FOUND', 'Assessment was not found for this store');
        }
      }

      const now = this.now();
      const recent = await client.query<{ count: number }>(
        `
          select count(*)::int as count
          from verification_sessions
          where organization_id = $1 and store_id = $2 and phone_hash = $3
            and created_at >= $4
        `,
        [
          input.organizationId,
          input.storeId,
          input.phoneHash,
          new Date(now.getTime() - this.perPhoneWindowMs),
        ],
      );
      if ((recent.rows[0]?.count ?? 0) >= this.perPhoneLimit) {
        throw new VerificationError('RATE_LIMITED', 'Too many OTP requests for this phone');
      }

      const verificationId = this.idFactory('ver');
      const attemptId = this.idFactory('otpa');
      const jobId = this.idFactory('vjob');
      const otp = String(randomInt(0, 1_000_000)).padStart(6, '0');
      const expiresAt = new Date(now.getTime() + this.expiryMs);
      const payloadEncrypted = this.options.cipher.encrypt(
        {
          verificationId,
          organizationId: input.organizationId,
          storeId: input.storeId,
          phone: input.phone,
          otp,
          purpose: input.purpose,
        },
        `verification-job:${jobId}`,
      );

      await client.query(
        `
          insert into verification_sessions (
            id, organization_id, store_id, assessment_id, phone_hash, purpose,
            channel, status, idempotency_key, max_attempts, expires_at
          ) values ($1, $2, $3, $4, $5, $6, 'otp', 'queued', $7, $8, $9)
        `,
        [
          verificationId,
          input.organizationId,
          input.storeId,
          input.assessmentId ?? null,
          input.phoneHash,
          input.purpose,
          input.idempotencyKey,
          this.maxAttempts,
          expiresAt,
        ],
      );
      await client.query(
        `
          insert into otp_attempts (
            id, verification_session_id, otp_hash, attempt_count, expires_at
          ) values ($1, $2, $3, 0, $4)
        `,
        [attemptId, verificationId, hashOtp(verificationId, otp, this.options.otpSecret), expiresAt],
      );
      await client.query(
        `
          insert into verification_jobs (
            id, verification_session_id, organization_id, store_id, job_type,
            payload_encrypted, status, next_attempt_at
          ) values ($1, $2, $3, $4, 'send_otp', $5, 'queued', $6)
        `,
        [jobId, verificationId, input.organizationId, input.storeId, payloadEncrypted, now],
      );
      await client.query('commit');
      return { verificationId, expiresAt: expiresAt.toISOString(), replay: false };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  async verify(input: {
    organizationId: string;
    storeId: string;
    verificationId: string;
    otp: string;
  }): Promise<{ verified: true }> {
    const client = await this.pool.connect();
    let committed = false;
    try {
      await client.query('begin');
      const session = await client.query<{
        id: string;
        organization_id: string;
        store_id: string;
        purpose: string;
        status: string;
        max_attempts: number;
        expires_at: Date;
      }>(
        `
          select id, organization_id, store_id, purpose, status, max_attempts, expires_at
          from verification_sessions
          where id = $1 and organization_id = $2 and store_id = $3
          for update
        `,
        [input.verificationId, input.organizationId, input.storeId],
      );
      const record = session.rows[0];
      if (!record) throw new VerificationError('NOT_FOUND', 'Verification session was not found');
      if (record.status === 'verified') {
        await client.query('commit');
        committed = true;
        return { verified: true };
      }
      if (record.status === 'queued') {
        throw new VerificationError('DELIVERY_PENDING', 'OTP delivery is still pending');
      }
      if (record.status === 'delivery_failed') {
        throw new VerificationError('DELIVERY_FAILED', 'OTP delivery failed');
      }
      if (record.status === 'locked') {
        throw new VerificationError('MAX_ATTEMPTS', 'Maximum OTP attempts reached');
      }

      const attempt = await client.query<{
        id: string;
        otp_hash: string;
        attempt_count: number;
      }>(
        `
          select id, otp_hash, attempt_count
          from otp_attempts
          where verification_session_id = $1
          order by created_at desc, id desc
          limit 1
          for update
        `,
        [record.id],
      );
      const otpAttempt = attempt.rows[0];
      if (!otpAttempt) throw new VerificationError('NOT_FOUND', 'OTP attempt was not found');
      const now = this.now();
      if (record.expires_at.getTime() <= now.getTime()) {
        await client.query(
          `update verification_sessions set status = 'expired', updated_at = now() where id = $1`,
          [record.id],
        );
        await enqueueVerificationEvent(client, {
          id: `evt_verification_failed_${record.id}`,
          type: 'verification.failed',
          organizationId: record.organization_id,
          storeId: record.store_id,
          occurredAt: now.toISOString(),
          payload: { verificationId: record.id, purpose: record.purpose, errorCode: 'EXPIRED' },
        });
        await client.query('commit');
        committed = true;
        throw new VerificationError('INVALID_OR_EXPIRED_OTP', 'OTP is invalid or expired');
      }

      const nextAttempts = otpAttempt.attempt_count + 1;
      const valid = verifyOtp(record.id, input.otp, otpAttempt.otp_hash, this.options.otpSecret);
      if (!valid) {
        const locked = nextAttempts >= record.max_attempts;
        await client.query(
          `update otp_attempts set attempt_count = $2, updated_at = now() where id = $1`,
          [otpAttempt.id, nextAttempts],
        );
        if (locked) {
          await client.query(
            `update verification_sessions set status = 'locked', updated_at = now() where id = $1`,
            [record.id],
          );
          await enqueueVerificationEvent(client, {
            id: `evt_verification_failed_${record.id}`,
            type: 'verification.failed',
            organizationId: record.organization_id,
            storeId: record.store_id,
            occurredAt: now.toISOString(),
            payload: {
              verificationId: record.id,
              purpose: record.purpose,
              errorCode: 'MAX_ATTEMPTS',
            },
          });
        }
        await client.query('commit');
        committed = true;
        throw new VerificationError('INVALID_OR_EXPIRED_OTP', 'OTP is invalid or expired');
      }

      await client.query(
        `update otp_attempts set attempt_count = $2, updated_at = now() where id = $1`,
        [otpAttempt.id, nextAttempts],
      );
      await client.query(
        `
          update verification_sessions
          set status = 'verified', verified_at = $2, updated_at = now()
          where id = $1
        `,
        [record.id, now],
      );
      await enqueueVerificationEvent(client, {
        id: `evt_verification_verified_${record.id}`,
        type: 'verification.verified',
        organizationId: record.organization_id,
        storeId: record.store_id,
        occurredAt: now.toISOString(),
        payload: { verificationId: record.id, purpose: record.purpose },
      });
      await client.query('commit');
      committed = true;
      return { verified: true };
    } catch (error) {
      if (!committed) await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

async function enqueueVerificationEvent(client: PoolClient, event: DomainEvent): Promise<void> {
  await client.query(
    `
      insert into webhook_deliveries (
        id, endpoint_id, organization_id, store_id, event_id, event_type,
        event_payload, occurred_at, status, next_attempt_at
      )
      select
        'whd_' || md5(we.id || ':' || $1),
        we.id,
        $2,
        $3,
        $1,
        $4,
        $5::jsonb,
        $6,
        'queued',
        now()
      from webhook_endpoints we
      where we.organization_id = $2
        and (we.store_id is null or we.store_id = $3)
        and we.status = 'active'
        and we.events @> jsonb_build_array($4::text)
      on conflict (endpoint_id, event_id) do nothing
    `,
    [
      event.id,
      event.organizationId,
      event.storeId ?? null,
      event.type,
      JSON.stringify(event),
      event.occurredAt,
    ],
  );
}
""",
)

replace_once(
    "apps/api/src/index.ts",
    """import { VerificationError, type OtpService } from '@ozzyl/verification';
""",
    """import { VerificationError } from '@ozzyl/verification';
""",
)
replace_once(
    "apps/api/src/index.ts",
    """export interface OperationIdempotencyStore {
""",
    """export interface VerificationRequestQueue {
  enqueueSend(input: {
    organizationId: string;
    storeId: string;
    assessmentId?: string;
    phone: string;
    phoneHash: string;
    purpose: string;
    idempotencyKey: string;
  }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
}

export interface OtpVerifier {
  verify(input: {
    organizationId: string;
    storeId: string;
    verificationId: string;
    otp: string;
  }): Promise<{ verified: true }>;
}

export interface OperationIdempotencyStore {
""",
)
replace_once(
    "apps/api/src/index.ts",
    """  hashPhone(phone: string): string;
  otpService?: OtpService;
  browser?: BrowserApiDependencies;
""",
    """  hashPhone(phone: string): string;
  verificationRequests?: VerificationRequestQueue;
  otpVerifier?: OtpVerifier;
  browser?: BrowserApiDependencies;
""",
)
old_routes = """  app.post('/v1/verifications/otp/send', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'verification:write', requestId);
    if (scopeError) return scopeError;
    if (!dependencies.otpService) {
      return apiError(
        requestId,
        503,
        'VERIFICATION_UNAVAILABLE',
        'OTP verification is not configured',
      );
    }
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
    const existing = await dependencies.idempotency.get(operationKey);
    if (existing) return context.json(existing, 200);
    const parsedBody = await parseJson(context.req.raw, otpSendSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    const phone = normalizeBangladeshPhone(parsedBody.value.phone);
    if (!isValidBangladeshPhone(phone)) {
      return apiError(
        requestId,
        400,
        'INVALID_PHONE',
        'A valid Bangladesh mobile number is required',
      );
    }
    try {
      const sent = await dependencies.otpService.send({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        phone,
        phoneHash: dependencies.hashPhone(phone),
        purpose: parsedBody.value.purpose,
      });
      const response = {
        success: true as const,
        verification_id: sent.verificationId,
        expires_at: sent.expiresAt,
      };
      await dependencies.idempotency.set(operationKey, response);
      return context.json(response, 202);
    } catch (error) {
      return verificationApiError(requestId, error);
    }
  });

  app.post('/v1/verifications/otp/verify', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'verification:write', requestId);
    if (scopeError) return scopeError;
    if (!dependencies.otpService) {
      return apiError(
        requestId,
        503,
        'VERIFICATION_UNAVAILABLE',
        'OTP verification is not configured',
      );
    }
    const parsedBody = await parseJson(context.req.raw, otpVerifySchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    try {
      await dependencies.otpService.verify({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        verificationId: parsedBody.value.verification_id,
        otp: parsedBody.value.otp,
      });
      return context.json({ success: true as const, verified: true as const });
    } catch (error) {
      return verificationApiError(requestId, error);
    }
  });
"""
new_routes = """  app.post('/v1/verifications/otp/send', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'verification:write', requestId);
    if (scopeError) return scopeError;
    if (!dependencies.verificationRequests) {
      return apiError(
        requestId,
        503,
        'VERIFICATION_UNAVAILABLE',
        'OTP verification is not configured',
      );
    }
    const idempotencyKey = readIdempotencyKey(context.req.header('Idempotency-Key'));
    if (!idempotencyKey) {
      return apiError(requestId, 400, 'IDEMPOTENCY_KEY_REQUIRED', 'Idempotency-Key is required');
    }
    const operationKey = operationIdempotencyKey(identity, 'otp-send', idempotencyKey);
    const existing = await dependencies.idempotency.get(operationKey);
    if (existing) return context.json(existing, 200);
    const parsedBody = await parseJson(context.req.raw, otpSendSchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    const phone = normalizeBangladeshPhone(parsedBody.value.phone);
    if (!isValidBangladeshPhone(phone)) {
      return apiError(
        requestId,
        400,
        'INVALID_PHONE',
        'A valid Bangladesh mobile number is required',
      );
    }
    try {
      const queued = await dependencies.verificationRequests.enqueueSend({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        ...(parsedBody.value.assessment_id === undefined
          ? {}
          : { assessmentId: parsedBody.value.assessment_id }),
        phone,
        phoneHash: dependencies.hashPhone(phone),
        purpose: parsedBody.value.purpose,
        idempotencyKey,
      });
      const response = {
        success: true as const,
        verification_id: queued.verificationId,
        expires_at: queued.expiresAt,
        status: 'queued' as const,
      };
      await dependencies.idempotency.set(operationKey, response);
      return context.json(response, queued.replay ? 200 : 202);
    } catch (error) {
      return verificationApiError(requestId, error);
    }
  });

  app.post('/v1/verifications/otp/verify', async (context) => {
    const requestId = context.get('requestId');
    const identity = context.get('identity');
    const scopeError = requireScope(identity, 'verification:write', requestId);
    if (scopeError) return scopeError;
    if (!dependencies.otpVerifier) {
      return apiError(
        requestId,
        503,
        'VERIFICATION_UNAVAILABLE',
        'OTP verification is not configured',
      );
    }
    const parsedBody = await parseJson(context.req.raw, otpVerifySchema);
    if (!parsedBody.success) return apiError(requestId, 400, 'INVALID_REQUEST', parsedBody.message);
    try {
      await dependencies.otpVerifier.verify({
        organizationId: identity.organizationId,
        storeId: identity.storeId,
        verificationId: parsedBody.value.verification_id,
        otp: parsedBody.value.otp,
      });
      return context.json({ success: true as const, verified: true as const });
    } catch (error) {
      return verificationApiError(requestId, error);
    }
  });
"""
replace_once("apps/api/src/index.ts", old_routes, new_routes)
replace_once(
    "apps/api/src/index.ts",
    """    const status = error.code === 'RATE_LIMITED' ? 429 : error.code === 'NOT_FOUND' ? 404 : 400;
""",
    """    const status =
      error.code === 'RATE_LIMITED'
        ? 429
        : error.code === 'NOT_FOUND'
          ? 404
          : error.code === 'DELIVERY_PENDING' || error.code === 'DELIVERY_FAILED'
            ? 409
            : 400;
""",
)

api_package = json.loads(Path("apps/api/package.json").read_text())
api_package["dependencies"]["@ozzyl/encryption"] = "*"
Path("apps/api/package.json").write_text(json.dumps(api_package, indent=2) + "\n")

replace_once(
    "apps/api/src/server.ts",
    """import { verifyApiKey } from '@ozzyl/authentication';
""",
    """import { verifyApiKey } from '@ozzyl/authentication';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
""",
)
replace_once(
    "apps/api/src/server.ts",
    """} from './postgres.js';
""",
    """} from './postgres.js';
import { PostgresVerificationService } from './postgres-verification.js';
""",
)
replace_once(
    "apps/api/src/server.ts",
    """  pool = new Pool({
    connectionString: databaseUrl,
    max: Number(process.env.DATABASE_POOL_SIZE ?? 20),
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
  });
  dependencies = {
""",
    """  pool = new Pool({
    connectionString: databaseUrl,
    max: Number(process.env.DATABASE_POOL_SIZE ?? 20),
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
  });
  const verification = new PostgresVerificationService(pool, {
    otpSecret: required('OTP_HASH_SECRET'),
    cipher: new AesGcmEnvelopeCipher(
      Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
      required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
    ),
  });
  dependencies = {
""",
)
replace_once(
    "apps/api/src/server.ts",
    """    hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
    browser: {
""",
    """    hashPhone: (phone) => createHmac('sha256', phoneHmacKey).update(phone).digest('hex'),
    verificationRequests: verification,
    otpVerifier: verification,
    browser: {
""",
)

replace_once(
    "packages/verification/src/index.ts",
    """      'RATE_LIMITED' | 'INVALID_OR_EXPIRED_OTP' | 'MAX_ATTEMPTS' | 'DELIVERY_FAILED' | 'NOT_FOUND',
""",
    """      | 'RATE_LIMITED'
      | 'INVALID_OR_EXPIRED_OTP'
      | 'MAX_ATTEMPTS'
      | 'DELIVERY_PENDING'
      | 'DELIVERY_FAILED'
      | 'NOT_FOUND',
""",
)

write(
    "workers/verification-worker/src/index.ts",
    """import {
  OtpProviderError,
  formatOtpMessage,
  type OtpDeliveryProvider,
} from '@ozzyl/verification';

export interface VerificationDelivery {
  jobId: string;
  verificationId: string;
  organizationId: string;
  storeId: string;
  phone: string;
  otp: string;
  purpose: string;
  expiresAt: Date;
  attempt: number;
}

export interface VerificationDeliveryReporter {
  delivered(jobId: string, providerMessageId: string, at: Date): Promise<void>;
  retry(jobId: string, errorCode: string, nextAttemptAt: Date, at: Date): Promise<void>;
  failed(jobId: string, errorCode: string, at: Date): Promise<void>;
}

export type VerificationDeliveryResult =
  | { status: 'delivered'; providerMessageId: string }
  | { status: 'retry_scheduled'; errorCode: string; nextAttemptAt: string }
  | { status: 'failed'; errorCode: string };

export class VerificationWorker {
  private readonly maxAttempts: number;
  private readonly timeoutMs: number;
  private readonly now: () => Date;

  constructor(
    private readonly provider: OtpDeliveryProvider,
    private readonly reporter: VerificationDeliveryReporter,
    options: { maxAttempts?: number; timeoutMs?: number; now?: () => Date } = {},
  ) {
    this.maxAttempts = options.maxAttempts ?? 5;
    this.timeoutMs = options.timeoutMs ?? 10_000;
    this.now = options.now ?? (() => new Date());
  }

  async process(delivery: VerificationDelivery): Promise<VerificationDeliveryResult> {
    const startedAt = this.now();
    if (delivery.expiresAt.getTime() <= startedAt.getTime() + this.timeoutMs) {
      await this.reporter.failed(delivery.jobId, 'OTP_EXPIRED_BEFORE_DELIVERY', startedAt);
      return { status: 'failed', errorCode: 'OTP_EXPIRED_BEFORE_DELIVERY' };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const result = await this.provider.send({
        phone: delivery.phone,
        message: formatOtpMessage(delivery.otp),
        idempotencyKey: delivery.verificationId,
        signal: controller.signal,
      });
      if (!result.accepted) {
        await this.reporter.failed(delivery.jobId, 'OTP_PROVIDER_REJECTED', this.now());
        return { status: 'failed', errorCode: 'OTP_PROVIDER_REJECTED' };
      }
      await this.reporter.delivered(delivery.jobId, result.providerMessageId, this.now());
      return { status: 'delivered', providerMessageId: result.providerMessageId };
    } catch (error) {
      const classified = classifyProviderError(error);
      const at = this.now();
      if (classified.retryable && delivery.attempt < this.maxAttempts) {
        const delayMs = Math.min(
          60 * 60 * 1_000,
          2 ** Math.max(0, delivery.attempt - 1) * 30_000,
        );
        const nextAttemptAt = new Date(at.getTime() + delayMs);
        await this.reporter.retry(delivery.jobId, classified.code, nextAttemptAt, at);
        return {
          status: 'retry_scheduled',
          errorCode: classified.code,
          nextAttemptAt: nextAttemptAt.toISOString(),
        };
      }
      await this.reporter.failed(delivery.jobId, classified.code, at);
      return { status: 'failed', errorCode: classified.code };
    } finally {
      clearTimeout(timeout);
    }
  }
}

function classifyProviderError(error: unknown): { code: string; retryable: boolean } {
  if (error instanceof OtpProviderError) {
    return { code: error.code, retryable: error.retryable };
  }
  if (error instanceof Error && error.name === 'AbortError') {
    return { code: 'OTP_PROVIDER_TIMEOUT', retryable: true };
  }
  return { code: 'OTP_PROVIDER_ERROR', retryable: true };
}
""",
)

write(
    "workers/verification-worker/src/postgres.ts",
    """import type { Pool, PoolClient } from 'pg';
import type { DomainEvent } from '@ozzyl/shared-types';
import type { VerificationDeliveryReporter } from './index.js';

export interface ClaimedVerificationDelivery {
  id: string;
  verificationId: string;
  organizationId: string;
  storeId: string;
  purpose: string;
  phoneHash: string;
  otpHash: string;
  payloadEncrypted: string;
  expiresAt: Date;
  attempts: number;
}

export class VerificationDeliveryLeaseError extends Error {
  readonly code = 'VERIFICATION_DELIVERY_LEASE_LOST';

  constructor(message = 'Verification delivery lease is no longer owned by this worker') {
    super(message);
    this.name = 'VerificationDeliveryLeaseError';
  }
}

export class PostgresVerificationDeliveryQueue {
  private readonly leaseMs: number;
  private readonly maxAttempts: number;

  constructor(
    private readonly pool: Pool,
    options: { leaseMs?: number; maxAttempts?: number } = {},
  ) {
    this.leaseMs = options.leaseMs ?? 60_000;
    this.maxAttempts = options.maxAttempts ?? 5;
  }

  async claim(workerId: string, at = new Date()): Promise<ClaimedVerificationDelivery | null> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query(
        `
          update verification_jobs vj
          set status = 'failed', error_code = 'VERIFICATION_SCOPE_MISMATCH',
            completed_at = $1, claimed_by = null, claimed_at = null,
            lease_expires_at = null, updated_at = now()
          where vj.status not in ('delivered', 'failed')
            and not exists (
              select 1
              from verification_sessions vs
              join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
              where vs.id = vj.verification_session_id
                and vs.organization_id = vj.organization_id
                and vs.store_id = vj.store_id
            )
        `,
        [at],
      );
      await this.failExpired(client, at);
      await this.failExhausted(client, at);

      const leaseExpiresAt = new Date(at.getTime() + this.leaseMs);
      const result = await client.query<{
        id: string;
        verification_session_id: string;
        organization_id: string;
        store_id: string;
        purpose: string;
        phone_hash: string;
        otp_hash: string;
        payload_encrypted: string;
        expires_at: Date;
        attempts: number;
      }>(
        `
          with candidate as (
            select vj.id
            from verification_jobs vj
            join verification_sessions vs
              on vs.id = vj.verification_session_id
              and vs.organization_id = vj.organization_id
              and vs.store_id = vj.store_id
            join stores s on s.id = vs.store_id and s.organization_id = vs.organization_id
            join lateral (
              select oa.otp_hash
              from otp_attempts oa
              where oa.verification_session_id = vs.id
              order by oa.created_at desc, oa.id desc
              limit 1
            ) latest_attempt on true
            where vj.job_type = 'send_otp'
              and vj.attempts < $4
              and vs.status = 'queued'
              and vs.expires_at > $2
              and (
                (vj.status in ('queued', 'retry_scheduled')
                  and coalesce(vj.next_attempt_at, vj.created_at) <= $2)
                or (vj.status in ('claimed', 'processing')
                  and (vj.lease_expires_at is null or vj.lease_expires_at <= $2))
              )
            order by
              case when vj.status in ('claimed', 'processing') then 0 else 1 end,
              coalesce(vj.lease_expires_at, vj.next_attempt_at, vj.created_at),
              vj.id
            for update of vj skip locked
            limit 1
          ), claimed as (
            update verification_jobs vj
            set status = 'claimed', claimed_by = $1, claimed_at = $2,
              lease_expires_at = $3, completed_at = null, updated_at = now()
            from candidate
            where vj.id = candidate.id
            returning vj.*
          )
          select
            claimed.id, claimed.verification_session_id, claimed.organization_id,
            claimed.store_id, vs.purpose, vs.phone_hash, oa.otp_hash,
            claimed.payload_encrypted, vs.expires_at, claimed.attempts
          from claimed
          join verification_sessions vs on vs.id = claimed.verification_session_id
          join lateral (
            select otp_hash from otp_attempts
            where verification_session_id = vs.id
            order by created_at desc, id desc
            limit 1
          ) oa on true
        `,
        [workerId, at, leaseExpiresAt, this.maxAttempts],
      );
      await client.query('commit');
      const row = result.rows[0];
      return row
        ? {
            id: row.id,
            verificationId: row.verification_session_id,
            organizationId: row.organization_id,
            storeId: row.store_id,
            purpose: row.purpose,
            phoneHash: row.phone_hash,
            otpHash: row.otp_hash,
            payloadEncrypted: row.payload_encrypted,
            expiresAt: row.expires_at,
            attempts: row.attempts,
          }
        : null;
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  async started(jobId: string, workerId: string, at = new Date()): Promise<void> {
    const result = await this.pool.query(
      `
        update verification_jobs vj
        set status = 'processing', attempts = attempts + 1,
          lease_expires_at = $4, updated_at = now()
        from verification_sessions vs
        where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'claimed'
          and vj.lease_expires_at > $3
          and vs.id = vj.verification_session_id
          and vs.status = 'queued' and vs.expires_at > $3
      `,
      [jobId, workerId, at, new Date(at.getTime() + this.leaseMs)],
    );
    this.assertOwned(result.rowCount);
  }

  async delivered(
    jobId: string,
    workerId: string,
    providerMessageId: string,
    at = new Date(),
  ): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      const result = await client.query<{ verification_session_id: string }>(
        `
          update verification_jobs vj
          set status = 'delivered', provider_message_id = $3, error_code = null,
            completed_at = $4, claimed_by = null, claimed_at = null,
            lease_expires_at = null, updated_at = now()
          from verification_sessions vs
          where vj.id = $1 and vj.claimed_by = $2 and vj.status = 'processing'
            and vj.lease_expires_at > $4
            and vs.id = vj.verification_session_id
            and vs.status = 'queued' and vs.expires_at > $4
          returning vj.verification_session_id
        `,
        [jobId, workerId, providerMessageId, at],
      );
      this.assertOwned(result.rowCount);
      const verificationId = result.rows[0]?.verification_session_id;
      await client.query(
        `update verification_sessions set status = 'pending', updated_at = now() where id = $1`,
        [verificationId],
      );
      await client.query(
        `
          update otp_attempts set provider_message_id = $2, sent_at = $3,
            failed_at = null, updated_at = now()
          where id = (
            select id from otp_attempts where verification_session_id = $1
            order by created_at desc, id desc limit 1
          )
        `,
        [verificationId, providerMessageId, at],
      );
      await client.query('commit');
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  async retry(
    jobId: string,
    workerId: string,
    input: { errorCode: string; nextAttemptAt: Date; at: Date },
  ): Promise<void> {
    const result = await this.pool.query(
      `
        update verification_jobs
        set status = 'retry_scheduled', next_attempt_at = $3, error_code = $4,
          completed_at = null, claimed_by = null, claimed_at = null,
          lease_expires_at = null, updated_at = now()
        where id = $1 and claimed_by = $2 and status = 'processing'
          and lease_expires_at > $5
      `,
      [jobId, workerId, input.nextAttemptAt, input.errorCode, input.at],
    );
    this.assertOwned(result.rowCount);
  }

  async failed(
    jobId: string,
    workerId: string,
    input: { errorCode: string; at: Date },
  ): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      const result = await client.query<{
        verification_session_id: string;
        organization_id: string;
        store_id: string;
      }>(
        `
          update verification_jobs
          set status = 'failed', error_code = $3, completed_at = $4,
            claimed_by = null, claimed_at = null, lease_expires_at = null,
            updated_at = now()
          where id = $1 and claimed_by = $2 and status in ('claimed', 'processing')
            and lease_expires_at > $4
          returning verification_session_id, organization_id, store_id
        `,
        [jobId, workerId, input.errorCode, input.at],
      );
      this.assertOwned(result.rowCount);
      const row = result.rows[0];
      if (!row) throw new VerificationDeliveryLeaseError();
      await this.failSession(client, row.verification_session_id, input.errorCode, input.at);
      await client.query('commit');
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }

  reporterFor(delivery: ClaimedVerificationDelivery, workerId: string): VerificationDeliveryReporter {
    return {
      delivered: async (jobId, providerMessageId, at) => {
        this.assertIdentity(delivery, jobId);
        await this.delivered(jobId, workerId, providerMessageId, at);
      },
      retry: async (jobId, errorCode, nextAttemptAt, at) => {
        this.assertIdentity(delivery, jobId);
        await this.retry(jobId, workerId, { errorCode, nextAttemptAt, at });
      },
      failed: async (jobId, errorCode, at) => {
        this.assertIdentity(delivery, jobId);
        await this.failed(jobId, workerId, { errorCode, at });
      },
    };
  }

  private async failExpired(client: PoolClient, at: Date): Promise<void> {
    const expired = await client.query<{ verification_session_id: string }>(
      `
        update verification_jobs vj
        set status = 'failed', error_code = 'OTP_EXPIRED_BEFORE_DELIVERY',
          completed_at = $1, claimed_by = null, claimed_at = null,
          lease_expires_at = null, updated_at = now()
        from verification_sessions vs
        where vj.verification_session_id = vs.id
          and vj.organization_id = vs.organization_id and vj.store_id = vs.store_id
          and vj.status not in ('delivered', 'failed') and vs.expires_at <= $1
        returning vj.verification_session_id
      `,
      [at],
    );
    for (const row of expired.rows) {
      await this.failSession(client, row.verification_session_id, 'OTP_EXPIRED_BEFORE_DELIVERY', at, true);
    }
  }

  private async failExhausted(client: PoolClient, at: Date): Promise<void> {
    const exhausted = await client.query<{ verification_session_id: string }>(
      `
        update verification_jobs
        set status = 'failed', error_code = 'LEASE_EXPIRED', completed_at = $1,
          claimed_by = null, claimed_at = null, lease_expires_at = null,
          updated_at = now()
        where status in ('claimed', 'processing')
          and (lease_expires_at is null or lease_expires_at <= $1)
          and attempts >= $2
        returning verification_session_id
      `,
      [at, this.maxAttempts],
    );
    for (const row of exhausted.rows) {
      await this.failSession(client, row.verification_session_id, 'LEASE_EXPIRED', at);
    }
  }

  private async failSession(
    client: PoolClient,
    verificationId: string,
    errorCode: string,
    at: Date,
    expired = false,
  ): Promise<void> {
    const session = await client.query<{
      organization_id: string;
      store_id: string;
      purpose: string;
    }>(
      `
        update verification_sessions
        set status = $2, updated_at = now()
        where id = $1
        returning organization_id, store_id, purpose
      `,
      [verificationId, expired ? 'expired' : 'delivery_failed'],
    );
    await client.query(
      `
        update otp_attempts set failed_at = $2, updated_at = now()
        where verification_session_id = $1
      `,
      [verificationId, at],
    );
    const row = session.rows[0];
    if (row) {
      await enqueueVerificationFailure(client, {
        id: `evt_verification_failed_${verificationId}`,
        type: 'verification.failed',
        organizationId: row.organization_id,
        storeId: row.store_id,
        occurredAt: at.toISOString(),
        payload: { verificationId, purpose: row.purpose, errorCode },
      });
    }
  }

  private assertOwned(rowCount: number | null): void {
    if (rowCount !== 1) throw new VerificationDeliveryLeaseError();
  }

  private assertIdentity(delivery: ClaimedVerificationDelivery, jobId: string): void {
    if (delivery.id !== jobId) {
      throw new VerificationDeliveryLeaseError('Verification delivery identity does not match claim');
    }
  }
}

async function enqueueVerificationFailure(client: PoolClient, event: DomainEvent): Promise<void> {
  await client.query(
    `
      insert into webhook_deliveries (
        id, endpoint_id, organization_id, store_id, event_id, event_type,
        event_payload, occurred_at, status, next_attempt_at
      )
      select
        'whd_' || md5(we.id || ':' || $1), we.id, $2, $3, $1, $4,
        $5::jsonb, $6, 'queued', now()
      from webhook_endpoints we
      where we.organization_id = $2
        and (we.store_id is null or we.store_id = $3)
        and we.status = 'active'
        and we.events @> jsonb_build_array($4::text)
      on conflict (endpoint_id, event_id) do nothing
    `,
    [event.id, event.organizationId, event.storeId ?? null, event.type, JSON.stringify(event), event.occurredAt],
  );
}
""",
)

write(
    "workers/verification-worker/src/runner.ts",
    """import { createHmac, randomUUID } from 'node:crypto';
import { Pool } from 'pg';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import { verifyOtp, type OtpDeliveryProvider } from '@ozzyl/verification';
import { VerificationWorker } from './index.js';
import {
  PostgresVerificationDeliveryQueue,
  VerificationDeliveryLeaseError,
  type ClaimedVerificationDelivery,
} from './postgres.js';

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
};

const positiveInteger = (name: string, fallback: number): number => {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isSafeInteger(value) || value <= 0) throw new Error(`${name} must be a positive integer`);
  return value;
};

const pool = new Pool({ connectionString: required('DATABASE_URL'), max: 8 });
const cipher = new AesGcmEnvelopeCipher(
  Buffer.from(required('CREDENTIAL_ENCRYPTION_KEY'), 'base64'),
  required('CREDENTIAL_ENCRYPTION_KEY_VERSION'),
);
const otpSecret = required('OTP_HASH_SECRET');
const phoneHmacKey = required('PHONE_HMAC_KEY');
const pollMs = positiveInteger('VERIFICATION_WORKER_POLL_MS', 5_000);
const leaseMs = positiveInteger('VERIFICATION_WORKER_LEASE_MS', 60_000);
const timeoutMs = positiveInteger('OTP_PROVIDER_TIMEOUT_MS', 10_000);
const maxAttempts = positiveInteger('VERIFICATION_WORKER_MAX_ATTEMPTS', 5);
if (leaseMs <= timeoutMs + 5_000) {
  throw new Error('VERIFICATION_WORKER_LEASE_MS must exceed OTP_PROVIDER_TIMEOUT_MS by more than 5000ms');
}
const workerId = process.env.VERIFICATION_WORKER_ID ?? `verification-${randomUUID()}`;
const provider = await loadProvider(required('OTP_PROVIDER_MODULE'));
const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs, maxAttempts });
let stopping = false;

async function run(): Promise<void> {
  console.info(
    JSON.stringify({ level: 'info', event: 'verification.worker.started', worker_id: workerId }),
  );
  while (!stopping) {
    const delivery = await queue.claim(workerId).catch((error) => {
      logError(error, 'VERIFICATION_CLAIM_FAILED');
      return null;
    });
    if (!delivery) {
      await sleep(pollMs);
      continue;
    }

    try {
      await queue.started(delivery.id, workerId);
      const payload = decryptAndValidate(delivery);
      const worker = new VerificationWorker(provider, queue.reporterFor(delivery, workerId), {
        maxAttempts,
        timeoutMs,
      });
      await worker.process({
        jobId: delivery.id,
        verificationId: delivery.verificationId,
        organizationId: delivery.organizationId,
        storeId: delivery.storeId,
        phone: payload.phone,
        otp: payload.otp,
        purpose: delivery.purpose,
        expiresAt: delivery.expiresAt,
        attempt: delivery.attempts + 1,
      });
    } catch (error) {
      if (!(error instanceof VerificationDeliveryLeaseError)) {
        const code = errorCode(error, 'VERIFICATION_DELIVERY_FAILED');
        await queue
          .failed(delivery.id, workerId, { errorCode: code, at: new Date() })
          .catch((failure) => logError(failure, 'VERIFICATION_FAILURE_STATE_LOST'));
      }
      logError(error, 'VERIFICATION_DELIVERY_FAILED');
    }
  }
  await pool.end();
}

function decryptAndValidate(delivery: ClaimedVerificationDelivery): { phone: string; otp: string } {
  let value: unknown;
  try {
    value = cipher.decrypt<unknown>(
      delivery.payloadEncrypted,
      `verification-job:${delivery.id}`,
    );
  } catch {
    throw coded('VERIFICATION_PAYLOAD_DECRYPTION_FAILED');
  }
  if (!value || typeof value !== 'object') throw coded('INVALID_VERIFICATION_PAYLOAD');
  const payload = value as Record<string, unknown>;
  const phone = typeof payload.phone === 'string' ? payload.phone : '';
  const otp = typeof payload.otp === 'string' ? payload.otp : '';
  const phoneHash = createHmac('sha256', phoneHmacKey).update(phone).digest('hex');
  if (
    payload.verificationId !== delivery.verificationId ||
    payload.organizationId !== delivery.organizationId ||
    payload.storeId !== delivery.storeId ||
    payload.purpose !== delivery.purpose ||
    phoneHash !== delivery.phoneHash ||
    !/^\\d{6}$/.test(otp) ||
    !verifyOtp(delivery.verificationId, otp, delivery.otpHash, otpSecret)
  ) {
    throw coded('INVALID_VERIFICATION_PAYLOAD');
  }
  return { phone, otp };
}

async function loadProvider(moduleName: string): Promise<OtpDeliveryProvider> {
  const loaded = (await import(moduleName)) as {
    createOtpDeliveryProvider?: () => OtpDeliveryProvider | Promise<OtpDeliveryProvider>;
  };
  if (typeof loaded.createOtpDeliveryProvider !== 'function') {
    throw new Error('OTP provider module must export createOtpDeliveryProvider()');
  }
  const configured = await loaded.createOtpDeliveryProvider();
  if (!configured || typeof configured.send !== 'function') {
    throw new Error('OTP provider module returned an invalid provider');
  }
  return configured;
}

function coded(code: string): Error & { code: string } {
  return Object.assign(new Error(code), { code });
}

function errorCode(error: unknown, fallback: string): string {
  return error && typeof error === 'object' && 'code' in error ? String(error.code) : fallback;
}

function logError(error: unknown, fallback: string): void {
  console.error(
    JSON.stringify({
      level: 'error',
      event: 'verification.worker.error',
      code: errorCode(error, fallback),
    }),
  );
}

const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const stop = (): void => {
  stopping = true;
};
process.once('SIGTERM', stop);
process.once('SIGINT', stop);
await run();
""",
)

write(
    "workers/verification-worker/src/index.test.ts",
    """import { describe, expect, it, vi } from 'vitest';
import { OtpProviderError } from '@ozzyl/verification';
import { VerificationWorker } from './index.js';

const delivery = {
  jobId: 'vjob_1',
  verificationId: 'ver_1',
  organizationId: 'org_1',
  storeId: 'sto_1',
  phone: '01712345678',
  otp: '123456',
  purpose: 'cod_order_confirmation',
  expiresAt: new Date('2026-07-17T10:10:00.000Z'),
  attempt: 1,
};

function reporter() {
  return {
    delivered: vi.fn(async () => undefined),
    retry: vi.fn(async () => undefined),
    failed: vi.fn(async () => undefined),
  };
}

describe('VerificationWorker', () => {
  it('delivers without exposing the OTP to reporter state', async () => {
    const state = reporter();
    const provider = {
      send: vi.fn(async ({ message }: { message: string }) => {
        expect(message).toContain('123456');
        return { providerMessageId: 'msg_1', accepted: true };
      }),
    };
    const worker = new VerificationWorker(provider, state, {
      now: () => new Date('2026-07-17T10:00:00.000Z'),
    });
    await expect(worker.process(delivery)).resolves.toEqual({
      status: 'delivered',
      providerMessageId: 'msg_1',
    });
    expect(state.delivered).toHaveBeenCalledOnce();
    expect(JSON.stringify(state.delivered.mock.calls)).not.toContain('123456');
  });

  it('schedules retryable provider failures with bounded backoff', async () => {
    const state = reporter();
    const worker = new VerificationWorker(
      {
        async send() {
          throw new OtpProviderError('PROVIDER_UNAVAILABLE', true, 'temporary outage');
        },
      },
      state,
      { now: () => new Date('2026-07-17T10:00:00.000Z') },
    );
    const result = await worker.process(delivery);
    expect(result).toMatchObject({ status: 'retry_scheduled', errorCode: 'PROVIDER_UNAVAILABLE' });
    expect(state.retry).toHaveBeenCalledOnce();
    expect(state.failed).not.toHaveBeenCalled();
  });

  it('fails provider rejection without retrying', async () => {
    const state = reporter();
    const worker = new VerificationWorker(
      { async send() { return { providerMessageId: 'rejected', accepted: false }; } },
      state,
      { now: () => new Date('2026-07-17T10:00:00.000Z') },
    );
    await expect(worker.process(delivery)).resolves.toEqual({
      status: 'failed',
      errorCode: 'OTP_PROVIDER_REJECTED',
    });
    expect(state.failed).toHaveBeenCalledOnce();
    expect(state.retry).not.toHaveBeenCalled();
  });
});
""",
)

write(
    "workers/verification-worker/src/postgres.test.ts",
    """import { randomUUID } from 'node:crypto';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { Pool } from 'pg';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import { hashOtp } from '@ozzyl/verification';
import {
  PostgresVerificationDeliveryQueue,
  VerificationDeliveryLeaseError,
} from './postgres.js';

const databaseUrl = process.env.DATABASE_URL;
const integration = describe.skipIf(!databaseUrl);

integration('PostgreSQL verification delivery leases', () => {
  const pool = new Pool({ connectionString: databaseUrl, max: 12 });
  const suffix = randomUUID();
  const organizationId = `org_verification_${suffix}`;
  const storeId = `sto_verification_${suffix}`;
  const otherOrganizationId = `org_verification_other_${suffix}`;
  const otherStoreId = `sto_verification_other_${suffix}`;
  const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 9), 'test-v1');
  const otpSecret = 'o'.repeat(32);

  beforeAll(async () => {
    await pool.query(
      `insert into organizations (id, name, slug) values ($1, 'Verification Merchant', $2), ($3, 'Other Verification Merchant', $4)`,
      [organizationId, `verification-${suffix}`, otherOrganizationId, `verification-other-${suffix}`],
    );
    await pool.query(
      `insert into stores (id, organization_id, name, platform) values ($1, $2, 'Primary', 'custom'), ($3, $4, 'Other', 'custom')`,
      [storeId, organizationId, otherStoreId, otherOrganizationId],
    );
  });

  afterEach(async () => {
    await pool.query('delete from verification_sessions where organization_id = any($1::text[])', [
      [organizationId, otherOrganizationId],
    ]);
  });

  afterAll(async () => {
    await pool.query('delete from organizations where id = any($1::text[])', [
      [organizationId, otherOrganizationId],
    ]);
    await pool.end();
  });

  it('lets competing workers claim different due jobs and protects fresh leases', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T12:00:00.000Z');
    const firstId = await insertJob('compete-a', { at });
    const secondId = await insertJob('compete-b', { at });
    const [first, second] = await Promise.all([
      queue.claim(`verification-a-${suffix}`, at),
      queue.claim(`verification-b-${suffix}`, at),
    ]);
    expect(new Set([first?.id, second?.id])).toEqual(new Set([firstId, secondId]));
    await expect(queue.claim(`verification-c-${suffix}`, at)).resolves.toBeNull();
  });

  it('rejects an expired owner and lets a new worker recover the job', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T13:00:00.000Z');
    const jobId = await insertJob('expired', {
      at: new Date(at.getTime() - 180_000),
      status: 'processing',
      attempts: 1,
      claimedBy: `old-verification-${suffix}`,
      claimedAt: new Date(at.getTime() - 120_000),
      leaseExpiresAt: new Date(at.getTime() - 60_000),
      expiresAt: new Date(at.getTime() + 600_000),
    });
    await expect(
      queue.delivered(jobId, `old-verification-${suffix}`, 'msg_old', at),
    ).rejects.toBeInstanceOf(VerificationDeliveryLeaseError);
    const claimed = await queue.claim(`new-verification-${suffix}`, at);
    expect(claimed?.id).toBe(jobId);
    await queue.started(jobId, `new-verification-${suffix}`, new Date(at.getTime() + 1_000));
    await queue.delivered(
      jobId,
      `new-verification-${suffix}`,
      'msg_new',
      new Date(at.getTime() + 2_000),
    );
    const stored = await pool.query<{ status: string; attempts: number; claimed_by: string | null }>(
      `select status, attempts, claimed_by from verification_jobs where id = $1`,
      [jobId],
    );
    expect(stored.rows[0]).toEqual({ status: 'delivered', attempts: 2, claimed_by: null });
  });

  it('clears ownership when retryable delivery is rescheduled', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T14:00:00.000Z');
    const jobId = await insertJob('retry', { at, expiresAt: new Date(at.getTime() + 600_000) });
    await queue.claim(`retry-verification-${suffix}`, at);
    await queue.started(jobId, `retry-verification-${suffix}`, new Date(at.getTime() + 1_000));
    const nextAttemptAt = new Date(at.getTime() + 31_000);
    await queue.retry(jobId, `retry-verification-${suffix}`, {
      errorCode: 'PROVIDER_UNAVAILABLE',
      nextAttemptAt,
      at: new Date(at.getTime() + 2_000),
    });
    const stored = await pool.query<{
      status: string;
      attempts: number;
      error_code: string;
      claimed_by: string | null;
      next_attempt_at: Date;
    }>(
      `select status, attempts, error_code, claimed_by, next_attempt_at from verification_jobs where id = $1`,
      [jobId],
    );
    expect(stored.rows[0]).toMatchObject({
      status: 'retry_scheduled', attempts: 1, error_code: 'PROVIDER_UNAVAILABLE', claimed_by: null,
    });
    expect(stored.rows[0]?.next_attempt_at.toISOString()).toBe(nextAttemptAt.toISOString());
  });

  it('fails exhausted stale work and marks its session delivery_failed', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000, maxAttempts: 5 });
    const at = new Date('2026-07-17T15:00:00.000Z');
    const jobId = await insertJob('exhausted', {
      at: new Date(at.getTime() - 180_000),
      status: 'processing', attempts: 5,
      claimedBy: `dead-verification-${suffix}`,
      claimedAt: new Date(at.getTime() - 120_000),
      leaseExpiresAt: new Date(at.getTime() - 60_000),
      expiresAt: new Date(at.getTime() + 600_000),
    });
    await expect(queue.claim(`recovery-verification-${suffix}`, at)).resolves.toBeNull();
    const stored = await pool.query<{ status: string; error_code: string; session_status: string }>(
      `
        select vj.status, vj.error_code, vs.status as session_status
        from verification_jobs vj join verification_sessions vs on vs.id = vj.verification_session_id
        where vj.id = $1
      `,
      [jobId],
    );
    expect(stored.rows[0]).toEqual({
      status: 'failed', error_code: 'LEASE_EXPIRED', session_status: 'delivery_failed',
    });
  });

  it('fails a job whose persisted scope does not match its session', async () => {
    const queue = new PostgresVerificationDeliveryQueue(pool, { leaseMs: 60_000 });
    const at = new Date('2026-07-17T16:00:00.000Z');
    const jobId = await insertJob('scope', {
      at,
      jobOrganizationId: otherOrganizationId,
      jobStoreId: otherStoreId,
      expiresAt: new Date(at.getTime() + 600_000),
    });
    await expect(queue.claim(`scope-verification-${suffix}`, at)).resolves.toBeNull();
    const stored = await pool.query<{ status: string; error_code: string }>(
      `select status, error_code from verification_jobs where id = $1`,
      [jobId],
    );
    expect(stored.rows[0]).toEqual({
      status: 'failed', error_code: 'VERIFICATION_SCOPE_MISMATCH',
    });
  });

  async function insertJob(
    label: string,
    options: {
      at: Date;
      expiresAt?: Date;
      status?: string;
      attempts?: number;
      claimedBy?: string;
      claimedAt?: Date;
      leaseExpiresAt?: Date;
      jobOrganizationId?: string;
      jobStoreId?: string;
    },
  ): Promise<string> {
    const verificationId = `ver_${label}_${suffix}`;
    const attemptId = `otpa_${label}_${suffix}`;
    const jobId = `vjob_${label}_${suffix}`;
    const otp = '123456';
    const expiresAt = options.expiresAt ?? new Date(options.at.getTime() + 600_000);
    const payload = cipher.encrypt(
      { verificationId, organizationId, storeId, phone: '01712345678', otp, purpose: 'test' },
      `verification-job:${jobId}`,
    );
    await pool.query(
      `
        insert into verification_sessions (
          id, organization_id, store_id, phone_hash, purpose, channel, status,
          idempotency_key, max_attempts, expires_at
        ) values ($1, $2, $3, 'phone_hash', 'test', 'otp', 'queued', $4, 5, $5)
      `,
      [verificationId, organizationId, storeId, `idem-${label}-${suffix}`, expiresAt],
    );
    await pool.query(
      `insert into otp_attempts (id, verification_session_id, otp_hash, expires_at) values ($1, $2, $3, $4)`,
      [attemptId, verificationId, hashOtp(verificationId, otp, otpSecret), expiresAt],
    );
    await pool.query(
      `
        insert into verification_jobs (
          id, verification_session_id, organization_id, store_id, payload_encrypted,
          status, attempts, next_attempt_at, claimed_by, claimed_at, lease_expires_at
        ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      `,
      [
        jobId,
        verificationId,
        options.jobOrganizationId ?? organizationId,
        options.jobStoreId ?? storeId,
        payload,
        options.status ?? 'queued',
        options.attempts ?? 0,
        options.at,
        options.claimedBy ?? null,
        options.claimedAt ?? null,
        options.leaseExpiresAt ?? null,
      ],
    );
    return jobId;
  }
});
""",
)

worker_package = {
    "name": "@ozzyl/verification-worker",
    "version": "0.1.0",
    "private": True,
    "type": "module",
    "types": "./src/index.ts",
    "exports": {".": {"types": "./src/index.ts", "import": "./dist/index.js"}},
    "scripts": {
        "build": "tsup src/index.ts src/postgres.ts src/runner.ts --format esm --dts --sourcemap --clean",
        "typecheck": "tsc -p tsconfig.json --noEmit",
        "test": "vitest run",
        "start": "node dist/runner.js",
    },
    "dependencies": {
        "@ozzyl/encryption": "*",
        "@ozzyl/shared-types": "*",
        "@ozzyl/verification": "*",
        "pg": "^8.16.3",
    },
    "devDependencies": {"@types/pg": "^8.15.5"},
}
Path("workers/verification-worker/package.json").write_text(json.dumps(worker_package, indent=2) + "\n")

replace_once(
    "apps/api/src/index.test.ts",
    """  rawApiKey?: string;
}) {
""",
    """  rawApiKey?: string;
  verificationRequests?: {
    enqueueSend(input: {
      organizationId: string;
      storeId: string;
      assessmentId?: string;
      phone: string;
      phoneHash: string;
      purpose: string;
      idempotencyKey: string;
    }): Promise<{ verificationId: string; expiresAt: string; replay: boolean }>;
  };
  otpVerifier?: {
    verify(input: {
      organizationId: string;
      storeId: string;
      verificationId: string;
      otp: string;
    }): Promise<{ verified: true }>;
  };
}) {
""",
)
replace_once(
    "apps/api/src/index.test.ts",
    """    hashPhone: (phone) => createHmac('sha256', 'x'.repeat(32)).update(phone).digest('hex'),
    idFactory: (prefix) => `${prefix}_${++counter}`,
""",
    """    hashPhone: (phone) => createHmac('sha256', 'x'.repeat(32)).update(phone).digest('hex'),
    ...(input?.verificationRequests === undefined
      ? {}
      : { verificationRequests: input.verificationRequests }),
    ...(input?.otpVerifier === undefined ? {} : { otpVerifier: input.otpVerifier }),
    idFactory: (prefix) => `${prefix}_${++counter}`,
""",
)
replace_once(
    "apps/api/src/index.test.ts",
    """  it('records outcomes idempotently', async () => {
""",
    """  it('queues OTP delivery without performing provider I/O in the request', async () => {
    let enqueueCalls = 0;
    const app = createTestApp({
      verificationRequests: {
        async enqueueSend(input) {
          enqueueCalls += 1;
          expect(input).toMatchObject({
            organizationId: 'org_1',
            storeId: 'store_1',
            purpose: 'cod_order_confirmation',
            idempotencyKey: 'otp-1001',
          });
          return {
            verificationId: 'ver_queued',
            expiresAt: '2026-07-16T10:05:00.000Z',
            replay: false,
          };
        },
      },
    });
    const response = await app.request('/v1/verifications/otp/send', {
      method: 'POST',
      headers: { ...authorizedHeaders, 'Idempotency-Key': 'otp-1001' },
      body: JSON.stringify({ phone: '01712345678' }),
    });
    expect(response.status).toBe(202);
    await expect(response.json()).resolves.toMatchObject({
      success: true,
      verification_id: 'ver_queued',
      status: 'queued',
    });
    expect(enqueueCalls).toBe(1);
  });

  it('verifies OTP through the database verifier dependency', async () => {
    let verifyCalls = 0;
    const app = createTestApp({
      otpVerifier: {
        async verify(input) {
          verifyCalls += 1;
          expect(input).toEqual({
            organizationId: 'org_1',
            storeId: 'store_1',
            verificationId: 'ver_queued',
            otp: '123456',
          });
          return { verified: true };
        },
      },
    });
    const response = await app.request('/v1/verifications/otp/verify', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ verification_id: 'ver_queued', otp: '123456' }),
    });
    expect(response.status).toBe(200);
    expect(verifyCalls).toBe(1);
  });

  it('records outcomes idempotently', async () => {
""",
)

replace_once(
    "apps/api/src/postgres-concurrency.test.ts",
    """import { UsageLimitError } from '@ozzyl/billing';
""",
    """import { UsageLimitError } from '@ozzyl/billing';
import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
""",
)
replace_once(
    "apps/api/src/postgres-concurrency.test.ts",
    """} from './postgres.js';
""",
    """} from './postgres.js';
import { PostgresVerificationService } from './postgres-verification.js';
""",
)
replace_once(
    "apps/api/src/postgres-concurrency.test.ts",
    """      const webhookEvents = JSON.stringify(['assessment.completed', 'order.outcome_recorded']);
""",
    """      const webhookEvents = JSON.stringify([
        'assessment.completed',
        'order.outcome_recorded',
        'verification.verified',
        'verification.failed',
      ]);
""",
)
replace_once(
    "apps/api/src/postgres-concurrency.test.ts",
    """  it('keeps operation idempotency values isolated by organization and store', async () => {
""",
    """  it('creates one encrypted verification job for concurrent duplicate requests and verifies it', async () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const service = new PostgresVerificationService(pool, {
      otpSecret: 'v'.repeat(32),
      cipher,
      now: () => new Date('2026-07-17T08:00:00.000Z'),
    });
    const input = {
      organizationId,
      storeId,
      phone: '01712345678',
      phoneHash: `verification-phone-${suffix}`,
      purpose: 'cod_order_confirmation',
      idempotencyKey: `verification-race-${suffix}`,
    };
    const results = await Promise.all([
      service.enqueueSend(input),
      service.enqueueSend(input),
      service.enqueueSend(input),
    ]);
    expect(new Set(results.map((result) => result.verificationId)).size).toBe(1);
    expect(results.filter((result) => !result.replay)).toHaveLength(1);
    expect(results.filter((result) => result.replay)).toHaveLength(2);

    const verificationId = results[0]?.verificationId ?? '';
    const stored = await pool.query<{
      sessions: number;
      jobs: number;
      job_id: string;
      payload_encrypted: string;
    }>(
      `
        select count(distinct vs.id)::int as sessions,
          count(distinct vj.id)::int as jobs,
          min(vj.id) as job_id,
          min(vj.payload_encrypted) as payload_encrypted
        from verification_sessions vs
        join verification_jobs vj on vj.verification_session_id = vs.id
        where vs.organization_id = $1 and vs.store_id = $2 and vs.idempotency_key = $3
      `,
      [organizationId, storeId, input.idempotencyKey],
    );
    expect(stored.rows[0]?.sessions).toBe(1);
    expect(stored.rows[0]?.jobs).toBe(1);
    expect(stored.rows[0]?.payload_encrypted).not.toContain(input.phone);
    const decrypted = cipher.decrypt<{ otp: string }>(
      stored.rows[0]?.payload_encrypted ?? '',
      `verification-job:${stored.rows[0]?.job_id}`,
    );

    await pool.query(
      `
        update verification_sessions set status = 'pending' where id = $1;
        update verification_jobs set status = 'delivered', completed_at = now() where verification_session_id = $1;
      `,
      [verificationId],
    );
    await expect(
      service.verify({ organizationId, storeId, verificationId, otp: decrypted.otp }),
    ).resolves.toEqual({ verified: true });
    await expect(
      service.verify({
        organizationId: otherOrganizationId,
        storeId: otherStoreId,
        verificationId,
        otp: decrypted.otp,
      }),
    ).rejects.toMatchObject({ code: 'NOT_FOUND' });

    const verified = await pool.query<{ status: string; deliveries: number }>(
      `
        select vs.status,
          (select count(*)::int from webhook_deliveries wd
            where wd.event_id = 'evt_verification_verified_' || vs.id) as deliveries
        from verification_sessions vs where vs.id = $1
      `,
      [verificationId],
    );
    expect(verified.rows[0]).toEqual({ status: 'verified', deliveries: 2 });
  });

  it('keeps operation idempotency values isolated by organization and store', async () => {
""",
)

replace_once(
    "config/environment.example",
    """PHONE_HMAC_KEY=[REDACTED_SECRET]
""",
    """PHONE_HMAC_KEY=[REDACTED_SECRET]
OTP_HASH_SECRET=[REDACTED_SECRET]
""",
)
replace_once(
    "config/environment.example",
    """# Verification provider — production remains disabled until a provider ADR/account exists
OTP_PROVIDER=disabled
OTP_SENDER_ID=[REDACTED_SECRET]
OTP_PROVIDER_API_KEY=[REDACTED_SECRET]
""",
    """# Durable verification worker. OTP_PROVIDER_MODULE must export createOtpDeliveryProvider().
# No provider module is selected or bundled by this milestone.
VERIFICATION_WORKER_ID=verification-local
VERIFICATION_WORKER_POLL_MS=5000
VERIFICATION_WORKER_LEASE_MS=60000
VERIFICATION_WORKER_MAX_ATTEMPTS=5
OTP_PROVIDER_TIMEOUT_MS=10000
OTP_PROVIDER_MODULE=[REDACTED_PROVIDER_MODULE]
OTP_SENDER_ID=[REDACTED_SECRET]
OTP_PROVIDER_API_KEY=[REDACTED_SECRET]
""",
)
