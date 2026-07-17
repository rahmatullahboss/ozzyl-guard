import { createHmac, randomInt, timingSafeEqual } from 'node:crypto';

export interface OtpDeliveryProvider {
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

export interface VerificationRecord {
  id: string;
  organizationId: string;
  storeId: string;
  phoneHash: string;
  otpHash: string;
  status: 'pending' | 'verified' | 'expired' | 'locked' | 'delivery_failed';
  attempts: number;
  maxAttempts: number;
  expiresAt: Date;
  providerMessageId?: string;
}

export interface VerificationStore {
  create(record: VerificationRecord): Promise<void>;
  find(id: string): Promise<VerificationRecord | null>;
  update(record: VerificationRecord): Promise<void>;
  countRecentForPhone(phoneHash: string, since: Date): Promise<number>;
}

export class VerificationError extends Error {
  constructor(
    readonly code:
      | 'RATE_LIMITED'
      | 'INVALID_OR_EXPIRED_OTP'
      | 'MAX_ATTEMPTS'
      | 'DELIVERY_PENDING'
      | 'DELIVERY_FAILED'
      | 'NOT_FOUND',
    message: string,
  ) {
    super(message);
  }
}

export interface OtpServiceOptions {
  secret: string;
  provider: OtpDeliveryProvider;
  store: VerificationStore;
  expiryMs?: number;
  maxAttempts?: number;
  perPhoneWindowMs?: number;
  perPhoneLimit?: number;
  now?: () => Date;
  idFactory?: () => string;
}

export class OtpService {
  private readonly expiryMs: number;
  private readonly maxAttempts: number;
  private readonly perPhoneWindowMs: number;
  private readonly perPhoneLimit: number;
  private readonly now: () => Date;
  private readonly idFactory: () => string;

  constructor(private readonly options: OtpServiceOptions) {
    if (options.secret.length < 16) throw new Error('OTP secret must be at least 16 characters');
    this.expiryMs = options.expiryMs ?? 5 * 60 * 1_000;
    this.maxAttempts = options.maxAttempts ?? 5;
    this.perPhoneWindowMs = options.perPhoneWindowMs ?? 60 * 60 * 1_000;
    this.perPhoneLimit = options.perPhoneLimit ?? 5;
    this.now = options.now ?? (() => new Date());
    this.idFactory = options.idFactory ?? (() => `ver_${crypto.randomUUID()}`);
  }

  async send(input: {
    organizationId: string;
    storeId: string;
    phone: string;
    phoneHash: string;
    purpose: string;
  }): Promise<{ verificationId: string; expiresAt: string }> {
    const now = this.now();
    const recent = await this.options.store.countRecentForPhone(
      input.phoneHash,
      new Date(now.getTime() - this.perPhoneWindowMs),
    );
    if (recent >= this.perPhoneLimit) {
      throw new VerificationError('RATE_LIMITED', 'Too many OTP requests for this phone');
    }

    const otp = String(randomInt(0, 1_000_000)).padStart(6, '0');
    const id = this.idFactory();
    const expiresAt = new Date(now.getTime() + this.expiryMs);
    const record: VerificationRecord = {
      id,
      organizationId: input.organizationId,
      storeId: input.storeId,
      phoneHash: input.phoneHash,
      otpHash: hashOtp(id, otp, this.options.secret),
      status: 'pending',
      attempts: 0,
      maxAttempts: this.maxAttempts,
      expiresAt,
    };
    await this.options.store.create(record);

    const delivery = await this.options.provider.send({
      phone: input.phone,
      message: formatOtpMessage(otp),
      idempotencyKey: id,
    });
    if (!delivery.accepted) {
      record.status = 'delivery_failed';
      await this.options.store.update(record);
      throw new VerificationError('DELIVERY_FAILED', 'OTP provider did not accept the message');
    }
    record.providerMessageId = delivery.providerMessageId;
    await this.options.store.update(record);
    return { verificationId: id, expiresAt: expiresAt.toISOString() };
  }

  async verify(input: {
    verificationId: string;
    otp: string;
    organizationId?: string;
    storeId?: string;
  }): Promise<{ verified: true }> {
    const record = await this.options.store.find(input.verificationId);
    if (
      !record ||
      (input.organizationId !== undefined && record.organizationId !== input.organizationId) ||
      (input.storeId !== undefined && record.storeId !== input.storeId)
    ) {
      throw new VerificationError('NOT_FOUND', 'Verification session was not found');
    }
    if (record.status === 'verified') return { verified: true };
    if (record.status === 'locked' || record.attempts >= record.maxAttempts) {
      throw new VerificationError('MAX_ATTEMPTS', 'Maximum OTP attempts reached');
    }
    if (record.expiresAt.getTime() <= this.now().getTime()) {
      record.status = 'expired';
      await this.options.store.update(record);
      throw new VerificationError('INVALID_OR_EXPIRED_OTP', 'OTP is invalid or expired');
    }

    record.attempts += 1;
    const valid = verifyOtp(record.id, input.otp, record.otpHash, this.options.secret);
    if (!valid) {
      if (record.attempts >= record.maxAttempts) record.status = 'locked';
      await this.options.store.update(record);
      throw new VerificationError('INVALID_OR_EXPIRED_OTP', 'OTP is invalid or expired');
    }

    record.status = 'verified';
    await this.options.store.update(record);
    return { verified: true };
  }
}

export function formatOtpMessage(otp: string, expiryMinutes = 5): string {
  if (!/^\d{6}$/.test(otp)) throw new Error('OTP must contain exactly six digits');
  return `Your Ozzyl Guard verification code is ${otp}. It expires in ${expiryMinutes} minutes.`;
}

export function hashOtp(verificationId: string, otp: string, secret: string): string {
  return createHmac('sha256', secret).update(`${verificationId}:${otp}`).digest('hex');
}

export function verifyOtp(
  verificationId: string,
  otp: string,
  expectedHash: string,
  secret: string,
): boolean {
  const actual = Buffer.from(hashOtp(verificationId, otp, secret), 'hex');
  const expected = Buffer.from(expectedHash, 'hex');
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export class MemoryVerificationStore implements VerificationStore {
  private readonly records = new Map<string, VerificationRecord>();
  private readonly created = new Map<string, Date>();

  async create(record: VerificationRecord): Promise<void> {
    this.records.set(record.id, { ...record });
    this.created.set(record.id, new Date());
  }

  async find(id: string): Promise<VerificationRecord | null> {
    const record = this.records.get(id);
    return record ? { ...record } : null;
  }

  async update(record: VerificationRecord): Promise<void> {
    this.records.set(record.id, { ...record });
  }

  async countRecentForPhone(phoneHash: string, since: Date): Promise<number> {
    let count = 0;
    for (const [id, record] of this.records.entries()) {
      const createdAt = this.created.get(id);
      if (record.phoneHash === phoneHash && createdAt && createdAt >= since) count += 1;
    }
    return count;
  }
}
