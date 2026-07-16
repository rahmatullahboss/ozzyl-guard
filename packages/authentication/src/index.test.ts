import { describe, expect, it } from 'vitest';
import {
  generateApiKey,
  hashPassword,
  inferApiKeyEnvironment,
  verifyApiKey,
  verifyPassword,
} from './index.js';

const pepper = 'development-pepper-at-least-16';

describe('API keys', () => {
  it('generates hash-only compatible live keys', () => {
    const generated = generateApiKey('live', pepper);
    expect(generated.rawKey.startsWith('ozg_live_')).toBe(true);
    expect(generated.keyHash).not.toContain(generated.rawKey);
    expect(verifyApiKey(generated.rawKey, generated.keyHash, pepper)).toBe(true);
    expect(inferApiKeyEnvironment(generated.rawKey)).toBe('live');
  });
});

describe('passwords', () => {
  it('uses Argon2 and verifies it', async () => {
    const passwordHash = await hashPassword('correct horse battery staple');
    expect(passwordHash).not.toContain('correct horse');
    await expect(verifyPassword(passwordHash, 'correct horse battery staple')).resolves.toBe(true);
    await expect(verifyPassword(passwordHash, 'wrong password')).resolves.toBe(false);
  });
});
