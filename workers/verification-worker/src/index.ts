import { OtpProviderError, formatOtpMessage, type OtpDeliveryProvider } from '@ozzyl/verification';

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
        const delayMs = Math.min(60 * 60 * 1_000, 2 ** Math.max(0, delivery.attempt - 1) * 30_000);
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
