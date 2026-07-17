import { describe, expect, it } from 'vitest';
import { AesGcmEnvelopeCipher } from './index.js';

describe('AesGcmEnvelopeCipher', () => {
  it('round-trips a context-bound envelope', () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const encrypted = cipher.encrypt({ secret: 'value' }, 'webhook-endpoint:we_1');
    expect(cipher.decrypt(encrypted, 'webhook-endpoint:we_1')).toEqual({ secret: 'value' });
  });

  it('rejects a different authenticated context', () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const encrypted = cipher.encrypt({ secret: 'value' }, 'webhook-endpoint:we_1');
    expect(() => cipher.decrypt(encrypted, 'webhook-endpoint:we_2')).toThrow();
  });
});
