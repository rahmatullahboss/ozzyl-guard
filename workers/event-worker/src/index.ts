import { createHmac } from 'node:crypto';
import { isIP } from 'node:net';
import type { DomainEvent } from '@ozzyl/shared-types';

export interface WebhookEndpoint {
  id: string;
  url: string;
  signingSecret: string;
  active: boolean;
}

export interface DeliveryResult {
  status: 'delivered' | 'retry_scheduled' | 'failed';
  responseStatus?: number;
  nextAttemptAt?: string;
  errorCode?: string;
}

export interface WebhookDeliveryRepository {
  markDelivered(input: {
    endpointId: string;
    eventId: string;
    responseStatus: number;
    at: Date;
  }): Promise<void>;
  markRetry(input: {
    endpointId: string;
    eventId: string;
    responseStatus?: number;
    errorCode: string;
    nextAttemptAt: Date;
    at: Date;
  }): Promise<void>;
  markFailed(input: {
    endpointId: string;
    eventId: string;
    responseStatus?: number;
    errorCode: string;
    at: Date;
  }): Promise<void>;
}

export class WebhookDestinationError extends Error {
  readonly code = 'UNSAFE_WEBHOOK_DESTINATION';
}

export function assertSafeWebhookUrl(rawUrl: string): URL {
  const url = new URL(rawUrl);
  if (url.protocol !== 'https:') {
    throw new WebhookDestinationError('Webhook endpoints must use HTTPS');
  }
  const hostname = url.hostname.toLowerCase();
  if (hostname === 'localhost' || hostname.endsWith('.localhost') || hostname.endsWith('.local')) {
    throw new WebhookDestinationError('Local webhook destinations are not allowed');
  }
  if (isIP(hostname) && isPrivateIp(hostname)) {
    throw new WebhookDestinationError('Private IP webhook destinations are not allowed');
  }
  if (hostname === '169.254.169.254' || hostname === 'metadata.google.internal') {
    throw new WebhookDestinationError('Metadata service destinations are not allowed');
  }
  if (url.username || url.password) {
    throw new WebhookDestinationError('Webhook URLs must not contain credentials');
  }
  return url;
}

export function signWebhook(payload: string, timestamp: string, secret: string): string {
  return `v1=${createHmac('sha256', secret).update(`${timestamp}.${payload}`).digest('hex')}`;
}

export class EventWorker {
  private readonly fetcher: typeof fetch;
  private readonly timeoutMs: number;
  private readonly maxAttempts: number;

  constructor(
    private readonly repository: WebhookDeliveryRepository,
    options?: { fetcher?: typeof fetch; timeoutMs?: number; maxAttempts?: number },
  ) {
    this.fetcher = options?.fetcher ?? fetch;
    this.timeoutMs = options?.timeoutMs ?? 5_000;
    this.maxAttempts = options?.maxAttempts ?? 5;
  }

  async deliver(input: {
    endpoint: WebhookEndpoint;
    event: DomainEvent;
    attempt: number;
  }): Promise<DeliveryResult> {
    if (!input.endpoint.active) {
      await this.repository.markFailed({
        endpointId: input.endpoint.id,
        eventId: input.event.id,
        errorCode: 'ENDPOINT_INACTIVE',
        at: new Date(),
      });
      return { status: 'failed', errorCode: 'ENDPOINT_INACTIVE' };
    }

    const url = assertSafeWebhookUrl(input.endpoint.url);
    const payload = JSON.stringify(input.event);
    const timestamp = String(Math.floor(Date.now() / 1_000));
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await this.fetcher(url, {
        method: 'POST',
        redirect: 'error',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Ozzyl-Guard-Webhooks/1.0',
          'X-Ozzyl-Event': input.event.type,
          'X-Ozzyl-Timestamp': timestamp,
          'X-Ozzyl-Signature': signWebhook(payload, timestamp, input.endpoint.signingSecret),
        },
        body: payload,
      });

      if (response.ok) {
        await this.repository.markDelivered({
          endpointId: input.endpoint.id,
          eventId: input.event.id,
          responseStatus: response.status,
          at: new Date(),
        });
        return { status: 'delivered', responseStatus: response.status };
      }

      return this.retryOrFail({
        endpointId: input.endpoint.id,
        eventId: input.event.id,
        attempt: input.attempt,
        responseStatus: response.status,
        errorCode: response.status === 429 ? 'RATE_LIMITED' : `HTTP_${response.status}`,
        retryable: response.status === 408 || response.status === 429 || response.status >= 500,
      });
    } catch (error) {
      const errorCode =
        error instanceof Error && error.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK_ERROR';
      return this.retryOrFail({
        endpointId: input.endpoint.id,
        eventId: input.event.id,
        attempt: input.attempt,
        errorCode,
        retryable: true,
      });
    } finally {
      clearTimeout(timeout);
    }
  }

  private async retryOrFail(input: {
    endpointId: string;
    eventId: string;
    attempt: number;
    responseStatus?: number;
    errorCode: string;
    retryable: boolean;
  }): Promise<DeliveryResult> {
    const at = new Date();
    if (input.retryable && input.attempt < this.maxAttempts) {
      const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, input.attempt - 1) * 30_000);
      const nextAttemptAt = new Date(at.getTime() + delayMs);
      await this.repository.markRetry({
        endpointId: input.endpointId,
        eventId: input.eventId,
        ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
        errorCode: input.errorCode,
        nextAttemptAt,
        at,
      });
      return {
        status: 'retry_scheduled',
        ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
        nextAttemptAt: nextAttemptAt.toISOString(),
        errorCode: input.errorCode,
      };
    }

    await this.repository.markFailed({
      endpointId: input.endpointId,
      eventId: input.eventId,
      ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
      errorCode: input.errorCode,
      at,
    });
    return {
      status: 'failed',
      ...(input.responseStatus === undefined ? {} : { responseStatus: input.responseStatus }),
      errorCode: input.errorCode,
    };
  }
}

function isPrivateIp(hostname: string): boolean {
  if (hostname.includes(':')) {
    const normalized = hostname.toLowerCase();
    return (
      normalized === '::1' ||
      normalized.startsWith('fc') ||
      normalized.startsWith('fd') ||
      normalized.startsWith('fe80:')
    );
  }
  const parts = hostname.split('.').map(Number);
  const [first, second] = parts;
  if (parts.length !== 4 || first === undefined || second === undefined) return true;
  return (
    first === 10 ||
    first === 127 ||
    (first === 169 && second === 254) ||
    (first === 172 && second >= 16 && second <= 31) ||
    (first === 192 && second === 168) ||
    first === 0
  );
}
