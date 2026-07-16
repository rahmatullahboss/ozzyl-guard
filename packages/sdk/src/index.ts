import { createHmac, timingSafeEqual } from 'node:crypto';
import {
  orderOutcomeSchema,
  riskAssessmentRequestSchema,
  riskAssessmentResponseSchema,
  type OrderOutcomeInput,
  type RiskAssessmentRequest,
  type RiskAssessmentResponse,
} from '@ozzyl/shared-types';

export interface OzzylGuardClientOptions {
  apiKey: string;
  baseUrl?: string;
  fetcher?: typeof fetch;
  timeoutMs?: number;
}

export class OzzylGuardApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly requestId?: string,
  ) {
    super(message);
  }
}

export class OzzylGuardClient {
  private readonly baseUrl: string;
  private readonly fetcher: typeof fetch;
  private readonly timeoutMs: number;

  constructor(private readonly options: OzzylGuardClientOptions) {
    if (!/^ozg_(test|live)_/.test(options.apiKey)) {
      throw new Error('Ozzyl Guard API key must start with ozg_test_ or ozg_live_');
    }
    this.baseUrl = (options.baseUrl ?? 'https://api.ozzyl.com').replace(/\/$/, '');
    this.fetcher = options.fetcher ?? fetch;
    this.timeoutMs = options.timeoutMs ?? 5_000;
  }

  async createRiskAssessment(
    input: RiskAssessmentRequest,
    options: { idempotencyKey: string },
  ): Promise<RiskAssessmentResponse> {
    const payload = riskAssessmentRequestSchema.parse(input);
    const response = await this.request('/v1/risk-assessments', {
      method: 'POST',
      headers: { 'Idempotency-Key': options.idempotencyKey },
      body: JSON.stringify(payload),
    });
    return riskAssessmentResponseSchema.parse(response);
  }

  async submitOutcome(
    input: OrderOutcomeInput,
    options: { idempotencyKey: string },
  ): Promise<{ success: true; outcome_id: string }> {
    const payload = orderOutcomeSchema.parse(input);
    return this.request('/v1/order-outcomes', {
      method: 'POST',
      headers: { 'Idempotency-Key': options.idempotencyKey },
      body: JSON.stringify(payload),
    }) as Promise<{ success: true; outcome_id: string }>;
  }

  private async request(path: string, init: RequestInit): Promise<unknown> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const response = await this.fetcher(`${this.baseUrl}${path}`, {
        ...init,
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${this.options.apiKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...init.headers,
        },
      });
      const body: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const error = parseApiError(body);
        throw new OzzylGuardApiError(response.status, error.code, error.message, error.requestId);
      }
      return body;
    } catch (error) {
      if (error instanceof OzzylGuardApiError) throw error;
      if (error instanceof Error && error.name === 'AbortError') {
        throw new OzzylGuardApiError(408, 'REQUEST_TIMEOUT', 'Ozzyl Guard request timed out');
      }
      throw new OzzylGuardApiError(503, 'NETWORK_ERROR', 'Ozzyl Guard request failed');
    } finally {
      clearTimeout(timeout);
    }
  }
}

export function verifyWebhookSignature(input: {
  payload: string;
  timestamp: string;
  signature: string;
  secret: string;
  toleranceSeconds?: number;
  now?: number;
}): boolean {
  const timestampSeconds = Number(input.timestamp);
  if (!Number.isFinite(timestampSeconds)) return false;
  const now = input.now ?? Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestampSeconds) > (input.toleranceSeconds ?? 300)) return false;
  const expectedHex = createHmac('sha256', input.secret)
    .update(`${input.timestamp}.${input.payload}`)
    .digest('hex');
  const actual = Buffer.from(input.signature.replace(/^v1=/, ''), 'hex');
  const expected = Buffer.from(expectedHex, 'hex');
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function parseApiError(value: unknown): { code: string; message: string; requestId?: string } {
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const error = record.error;
    if (error && typeof error === 'object') {
      const errorRecord = error as Record<string, unknown>;
      return {
        code: typeof errorRecord.code === 'string' ? errorRecord.code : 'API_ERROR',
        message:
          typeof errorRecord.message === 'string' ? errorRecord.message : 'API request failed',
        ...(typeof record.request_id === 'string' ? { requestId: record.request_id } : {}),
      };
    }
  }
  return { code: 'API_ERROR', message: 'API request failed' };
}
