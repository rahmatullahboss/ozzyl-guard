import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { hash, verify } from '@node-rs/argon2';

export type ApiKeyEnvironment = 'test' | 'live';

export interface GeneratedApiKey {
  rawKey: string;
  keyHash: string;
  displayPrefix: string;
  environment: ApiKeyEnvironment;
}

function requireSecret(value: string, name: string): string {
  if (value.length < 16) throw new Error(`${name} must be at least 16 characters`);
  return value;
}

export function hashOpaqueSecret(raw: string, pepper: string): string {
  return createHmac('sha256', requireSecret(pepper, 'pepper')).update(raw).digest('hex');
}

export function generateApiKey(environment: ApiKeyEnvironment, pepper: string): GeneratedApiKey {
  const prefix = environment === 'test' ? 'ozg_test_' : 'ozg_live_';
  const rawKey = `${prefix}${randomBytes(32).toString('base64url')}`;
  return {
    rawKey,
    keyHash: hashOpaqueSecret(rawKey, pepper),
    displayPrefix: `${rawKey.slice(0, prefix.length + 8)}…`,
    environment,
  };
}

export function inferApiKeyEnvironment(rawKey: string): ApiKeyEnvironment | null {
  if (rawKey.startsWith('ozg_test_')) return 'test';
  if (rawKey.startsWith('ozg_live_')) return 'live';
  return null;
}

export function verifyApiKey(rawKey: string, expectedHash: string, pepper: string): boolean {
  const actual = Buffer.from(hashOpaqueSecret(rawKey, pepper), 'hex');
  const expected = Buffer.from(expectedHash, 'hex');
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function hashPassword(password: string): Promise<string> {
  if (password.length < 10) throw new Error('Password must be at least 10 characters');
  return hash(password, {
    memoryCost: 19_456,
    timeCost: 3,
    parallelism: 1,
    outputLen: 32,
  });
}

export async function verifyPassword(passwordHash: string, password: string): Promise<boolean> {
  return verify(passwordHash, password);
}

export function generateSessionToken(pepper: string): { rawToken: string; tokenHash: string } {
  const rawToken = randomBytes(32).toString('base64url');
  return { rawToken, tokenHash: hashOpaqueSecret(rawToken, pepper) };
}

export function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 7) return '***';
  return `${digits.slice(0, 3)}****${digits.slice(-4)}`;
}
