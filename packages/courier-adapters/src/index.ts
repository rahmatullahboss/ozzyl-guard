export type CourierProvider = 'steadfast' | 'pathao' | 'redx' | 'aggregator';

export interface ConnectionHealth {
  healthy: boolean;
  status: 'connected' | 'expired' | 'reconnect_required' | 'unavailable';
  checkedAt: string;
  errorCode?: string;
}

export interface CourierSession {
  sessionCookie: string;
  xsrfToken: string;
  expiresAt?: string;
}

export interface CustomerLookup {
  accountId: string;
  phone: string;
}

export interface CourierObservation {
  provider: CourierProvider;
  totalOrders: number;
  deliveredOrders: number;
  returnedOrders: number;
  cancelledBeforeShipping: number;
  successRate: number | null;
  confidence: number;
  source: 'merchant_session' | 'merchant_api' | 'shared_network' | 'third_party';
  observedAt: string;
  expiresAt: string;
  limitations?: string[];
}

export interface CourierAdapter {
  readonly provider: CourierProvider;
  testConnection(accountId: string): Promise<ConnectionHealth>;
  fetchCustomerObservation(input: CustomerLookup): Promise<CourierObservation>;
}

export type CourierErrorCode =
  | 'SESSION_MISSING'
  | 'SESSION_EXPIRED'
  | 'PROVIDER_UNAVAILABLE'
  | 'RATE_LIMITED'
  | 'MALFORMED_RESPONSE'
  | 'UNAUTHORIZED';

export class CourierProviderError extends Error {
  constructor(
    readonly code: CourierErrorCode,
    message: string,
    readonly retryable: boolean,
  ) {
    super(message);
  }
}

export interface SteadfastSessionProvider {
  getSession(accountId: string): Promise<CourierSession | null>;
}

export interface SteadfastAdapterOptions {
  sessionProvider: SteadfastSessionProvider;
  fetcher?: typeof fetch;
  timeoutMs?: number;
  observationTtlMs?: number;
}

export class SteadfastAdapter implements CourierAdapter {
  readonly provider = 'steadfast' as const;
  private readonly fetcher: typeof fetch;
  private readonly timeoutMs: number;
  private readonly observationTtlMs: number;

  constructor(private readonly options: SteadfastAdapterOptions) {
    this.fetcher = options.fetcher ?? fetch;
    this.timeoutMs = options.timeoutMs ?? 5_000;
    this.observationTtlMs = options.observationTtlMs ?? 12 * 60 * 60 * 1_000;
  }

  async testConnection(accountId: string): Promise<ConnectionHealth> {
    const session = await this.options.sessionProvider.getSession(accountId);
    if (!session) {
      return {
        healthy: false,
        status: 'reconnect_required',
        checkedAt: new Date().toISOString(),
        errorCode: 'SESSION_MISSING',
      };
    }
    if (session.expiresAt && Date.parse(session.expiresAt) <= Date.now()) {
      return {
        healthy: false,
        status: 'expired',
        checkedAt: new Date().toISOString(),
        errorCode: 'SESSION_EXPIRED',
      };
    }
    return { healthy: true, status: 'connected', checkedAt: new Date().toISOString() };
  }

  async fetchCustomerObservation(input: CustomerLookup): Promise<CourierObservation> {
    const session = await this.options.sessionProvider.getSession(input.accountId);
    if (!session) {
      throw new CourierProviderError('SESSION_MISSING', 'Steadfast session is unavailable', false);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const response = await this.fetcher(
        `https://steadfast.com.bd/user/frauds/check/${encodeURIComponent(input.phone)}`,
        {
          method: 'GET',
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': session.xsrfToken,
            Cookie: `steadfast_courier_session=${session.sessionCookie}; XSRF-TOKEN=${session.xsrfToken}`,
          },
        },
      );

      if (response.status === 401 || response.status === 419) {
        throw new CourierProviderError('SESSION_EXPIRED', 'Steadfast session expired', true);
      }
      if (response.status === 429) {
        throw new CourierProviderError('RATE_LIMITED', 'Steadfast rate limit reached', true);
      }
      if (!response.ok) {
        throw new CourierProviderError(
          'PROVIDER_UNAVAILABLE',
          `Steadfast returned HTTP ${response.status}`,
          response.status >= 500,
        );
      }

      const data: unknown = await response.json();
      if (!isSteadfastFraudResponse(data)) {
        throw new CourierProviderError(
          'MALFORMED_RESPONSE',
          'Steadfast response did not match the expected schema',
          false,
        );
      }

      const deliveredOrders = toNonNegativeInteger(data.success);
      const returnedOrders = toNonNegativeInteger(data.cancellation);
      const totalOrders = deliveredOrders + returnedOrders;
      const observedAt = new Date();
      return {
        provider: 'steadfast',
        totalOrders,
        deliveredOrders,
        returnedOrders,
        cancelledBeforeShipping: 0,
        successRate: totalOrders > 0 ? deliveredOrders / totalOrders : null,
        confidence: totalOrders >= 10 ? 0.85 : totalOrders >= 3 ? 0.7 : 0.45,
        source: 'merchant_session',
        observedAt: observedAt.toISOString(),
        expiresAt: new Date(observedAt.getTime() + this.observationTtlMs).toISOString(),
        limitations: [
          'Steadfast internal response combines non-success outcomes under cancellation; pre-shipping cancellation is not separately available.',
        ],
      };
    } catch (error) {
      if (error instanceof CourierProviderError) throw error;
      if (error instanceof Error && error.name === 'AbortError') {
        throw new CourierProviderError('PROVIDER_UNAVAILABLE', 'Steadfast request timed out', true);
      }
      throw new CourierProviderError('PROVIDER_UNAVAILABLE', 'Steadfast request failed', true);
    } finally {
      clearTimeout(timeout);
    }
  }
}

function isSteadfastFraudResponse(value: unknown): value is {
  success: number | string;
  cancellation: number | string;
} {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return (
    ['number', 'string'].includes(typeof record.success) &&
    ['number', 'string'].includes(typeof record.cancellation)
  );
}

function toNonNegativeInteger(value: number | string): number {
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric < 0) {
    throw new CourierProviderError('MALFORMED_RESPONSE', 'Invalid courier count', false);
  }
  return Math.floor(numeric);
}
