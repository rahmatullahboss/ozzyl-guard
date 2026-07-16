import { describe, expect, it } from 'vitest';
import { AesGcmEnvelopeCipher } from './index.js';

describe('AesGcmEnvelopeCipher', () => {
  it('binds encrypted session data to an account context', () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const sampleValue = 'x'.repeat(24);
    const encrypted = cipher.encrypt(
      { sessionCookie: sampleValue, xsrfToken: sampleValue },
      'courier-session:acc_1',
    );
    expect(encrypted).not.toContain(sampleValue);
    expect(
      cipher.decrypt<{ sessionCookie: string }>(encrypted, 'courier-session:acc_1').sessionCookie,
    ).toBe(sampleValue);
    expect(() => cipher.decrypt(encrypted, 'courier-session:acc_2')).toThrow();
  });
});
