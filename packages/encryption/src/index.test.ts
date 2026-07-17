import { createCipheriv, createDecipheriv, randomBytes, type CipherGCMTypes } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import {
  AesGcmEnvelopeCipher,
  EnvelopeEncryptionError,
  ManagedEnvelopeCipher,
  MigratingEnvelopeCipher,
  inspectEnvelope,
  type KeyEncryptionKeyProvider,
  type ManagedKeyReference,
  type WrappedDataKey,
} from './index.js';

const AES_ALGORITHM: CipherGCMTypes = 'aes-256-gcm';

class TestKeyProvider implements KeyEncryptionKeyProvider {
  private readonly keys = new Map<string, Buffer>();
  private currentVersion: string;
  unavailable = false;
  unwrapCalls = 0;
  lastDataKey: Buffer | undefined;

  constructor(version = 'key-v1', key = Buffer.alloc(32, 11)) {
    this.currentVersion = version;
    this.keys.set(version, key);
  }

  get currentKey(): ManagedKeyReference {
    return {
      provider: 'test-kms',
      keyId: 'projects/test/keys/ozzyl-guard',
      keyVersion: this.currentVersion,
      wrappingAlgorithm: 'test-aes-256-gcm',
    };
  }

  rotate(version: string, key: Buffer): void {
    this.keys.set(version, key);
    this.currentVersion = version;
  }

  async wrapKey(dataKey: Buffer, context: string): Promise<WrappedDataKey> {
    if (this.unavailable) throw new Error('provider unavailable with secret details');
    this.lastDataKey = dataKey;
    const wrappingKey = this.keys.get(this.currentVersion);
    if (!wrappingKey) throw new Error('missing wrapping key');
    const iv = randomBytes(12);
    const cipher = createCipheriv(AES_ALGORITHM, wrappingKey, iv);
    cipher.setAAD(Buffer.from(context));
    const encrypted = Buffer.concat([cipher.update(dataKey), cipher.final()]);
    const wrapped = Buffer.from(
      JSON.stringify({
        iv: iv.toString('base64'),
        tag: cipher.getAuthTag().toString('base64'),
        data: encrypted.toString('base64'),
      }),
    ).toString('base64');
    return { ...this.currentKey, wrappedKey: wrapped };
  }

  async unwrapKey(wrappedKey: WrappedDataKey, context: string): Promise<Buffer> {
    this.unwrapCalls += 1;
    if (this.unavailable) throw new Error('provider unavailable with secret details');
    if (
      wrappedKey.provider !== 'test-kms' ||
      wrappedKey.keyId !== 'projects/test/keys/ozzyl-guard' ||
      wrappedKey.wrappingAlgorithm !== 'test-aes-256-gcm'
    ) {
      throw new Error('wrong key reference');
    }
    const wrappingKey = this.keys.get(wrappedKey.keyVersion);
    if (!wrappingKey) throw new Error('retired key unavailable');
    const encoded = JSON.parse(Buffer.from(wrappedKey.wrappedKey, 'base64').toString('utf8')) as {
      iv: string;
      tag: string;
      data: string;
    };
    const decipher = createDecipheriv(
      AES_ALGORITHM,
      wrappingKey,
      Buffer.from(encoded.iv, 'base64'),
    );
    decipher.setAAD(Buffer.from(context));
    decipher.setAuthTag(Buffer.from(encoded.tag, 'base64'));
    return Buffer.concat([decipher.update(Buffer.from(encoded.data, 'base64')), decipher.final()]);
  }
}

class UnsafeKeyProvider implements KeyEncryptionKeyProvider {
  readonly currentKey: ManagedKeyReference = {
    provider: 'unsafe-test',
    keyId: 'plaintext-wrapper',
    keyVersion: 'v1',
    wrappingAlgorithm: 'none',
  };

  async wrapKey(dataKey: Buffer): Promise<WrappedDataKey> {
    return { ...this.currentKey, wrappedKey: dataKey.toString('base64') };
  }

  async unwrapKey(): Promise<Buffer> {
    throw new Error('not used');
  }
}

describe('AesGcmEnvelopeCipher', () => {
  it('round-trips a context-bound legacy envelope', () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const encrypted = cipher.encrypt({ secret: 'value' }, 'webhook-endpoint:we_1');
    expect(cipher.decrypt(encrypted, 'webhook-endpoint:we_1')).toEqual({ secret: 'value' });
    expect(inspectEnvelope(encrypted)).toEqual({
      version: 1,
      mode: 'local',
      algorithm: 'aes-256-gcm',
      keyVersion: 'test-v1',
    });
  });

  it('rejects a different authenticated context', () => {
    const cipher = new AesGcmEnvelopeCipher(Buffer.alloc(32, 7), 'test-v1');
    const encrypted = cipher.encrypt({ secret: 'value' }, 'webhook-endpoint:we_1');
    expect(() => cipher.decrypt(encrypted, 'webhook-endpoint:we_2')).toThrow(
      EnvelopeEncryptionError,
    );
  });
});

describe('ManagedEnvelopeCipher', () => {
  it('uses one random data key per record and never serializes plaintext or the plaintext key', async () => {
    const provider = new TestKeyProvider();
    const cipher = new ManagedEnvelopeCipher(provider);
    const encrypted = await cipher.encrypt(
      { secret: 'top-secret-value' },
      'courier-credential:org_1:store_1:account_1',
    );

    expect(encrypted).not.toContain('top-secret-value');
    expect(provider.lastDataKey).toBeDefined();
    expect(provider.lastDataKey?.every((byte) => byte === 0)).toBe(true);
    expect(encrypted).not.toContain(provider.lastDataKey?.toString('base64') ?? 'missing');
    await expect(
      cipher.decrypt(encrypted, 'courier-credential:org_1:store_1:account_1'),
    ).resolves.toEqual({ secret: 'top-secret-value' });
    expect(cipher.inspect(encrypted)).toMatchObject({
      version: 2,
      mode: 'managed',
      schemaVersion: 1,
      algorithm: 'aes-256-gcm',
      key: provider.currentKey,
    });
  });

  it('rejects context substitution before asking the key provider to unwrap', async () => {
    const provider = new TestKeyProvider();
    const cipher = new ManagedEnvelopeCipher(provider);
    const encrypted = await cipher.encrypt({ secret: 'value' }, 'webhook-endpoint:we_1');

    await expect(cipher.decrypt(encrypted, 'webhook-endpoint:we_2')).rejects.toMatchObject({
      code: 'CONTEXT_MISMATCH',
      operation: 'decrypt',
    });
    expect(provider.unwrapCalls).toBe(0);
  });

  it('authenticates wrapped-key metadata and fails closed after tampering', async () => {
    const provider = new TestKeyProvider();
    const cipher = new ManagedEnvelopeCipher(provider);
    const encrypted = await cipher.encrypt({ secret: 'value' }, 'webhook-endpoint:we_1');
    const parsed = JSON.parse(encrypted) as {
      key: WrappedDataKey;
    } & Record<string, unknown>;
    parsed.key = { ...parsed.key, keyId: 'projects/test/keys/substituted' };

    await expect(
      cipher.decrypt(JSON.stringify(parsed), 'webhook-endpoint:we_1'),
    ).rejects.toMatchObject({
      code: 'KEY_UNWRAP_FAILED',
      operation: 'decrypt',
    });
  });

  it('returns a structured safe error when the key provider is unavailable', async () => {
    const provider = new TestKeyProvider();
    const cipher = new ManagedEnvelopeCipher(provider);
    const encrypted = await cipher.encrypt({ secret: 'value' }, 'verification-job:vjob_1');
    provider.unavailable = true;

    await expect(cipher.decrypt(encrypted, 'verification-job:vjob_1')).rejects.toEqual(
      expect.objectContaining({
        name: 'EnvelopeEncryptionError',
        code: 'KEY_UNWRAP_FAILED',
        message: 'KEY_UNWRAP_FAILED',
      }),
    );
  });

  it('detects key rotation and re-encrypts under the current managed key version', async () => {
    const provider = new TestKeyProvider('key-v1', Buffer.alloc(32, 21));
    const cipher = new ManagedEnvelopeCipher(provider);
    const context = 'courier-session:account_1';
    const original = await cipher.encrypt({ cookie: 'encrypted-cookie' }, context);
    expect(cipher.needsReencryption(original)).toBe(false);

    provider.rotate('key-v2', Buffer.alloc(32, 22));
    expect(cipher.needsReencryption(original)).toBe(true);
    await expect(cipher.decrypt(original, context)).resolves.toEqual({
      cookie: 'encrypted-cookie',
    });

    const rotated = await cipher.reencrypt(original, context);
    expect(rotated).not.toBe(original);
    expect(cipher.needsReencryption(rotated)).toBe(false);
    expect(cipher.inspect(rotated).key.keyVersion).toBe('key-v2');
    await expect(cipher.decrypt(rotated, context)).resolves.toEqual({ cookie: 'encrypted-cookie' });
  });

  it('rejects a provider that returns the plaintext data key as the wrapped key', async () => {
    const cipher = new ManagedEnvelopeCipher(new UnsafeKeyProvider());
    await expect(cipher.encrypt({ secret: 'value' }, 'credential:record_1')).rejects.toMatchObject({
      code: 'UNSAFE_WRAPPED_KEY',
      operation: 'encrypt',
    });
  });

  it('rejects malformed or unsupported envelope metadata', () => {
    expect(() => inspectEnvelope('{"version":3}')).toThrowError(
      expect.objectContaining({ code: 'UNSUPPORTED_ENVELOPE_VERSION' }),
    );
    expect(() => inspectEnvelope('{"version":2,"schemaVersion":1}')).toThrowError(
      expect.objectContaining({ code: 'INVALID_ENVELOPE' }),
    );
  });
});

describe('MigratingEnvelopeCipher', () => {
  it('dual-reads approved legacy ciphertext and rewrites new ciphertext as managed v2', async () => {
    const legacy = new AesGcmEnvelopeCipher(Buffer.alloc(32, 31), 'legacy-v1');
    const managed = new ManagedEnvelopeCipher(new TestKeyProvider());
    const migrating = new MigratingEnvelopeCipher(managed, [legacy]);
    const context = 'webhook-endpoint:we_legacy';
    const oldPayload = legacy.encrypt({ signingSecret: 'legacy-secret-value' }, context);

    expect(migrating.needsReencryption(oldPayload)).toBe(true);
    await expect(migrating.decrypt(oldPayload, context)).resolves.toEqual({
      signingSecret: 'legacy-secret-value',
    });

    const upgraded = await migrating.reencrypt(oldPayload, context);
    expect(inspectEnvelope(upgraded).mode).toBe('managed');
    expect(upgraded).not.toContain('legacy-secret-value');
    await expect(migrating.decrypt(upgraded, context)).resolves.toEqual({
      signingSecret: 'legacy-secret-value',
    });
  });

  it('fails closed when a legacy key version is not explicitly configured', async () => {
    const legacy = new AesGcmEnvelopeCipher(Buffer.alloc(32, 41), 'legacy-missing');
    const migrating = new MigratingEnvelopeCipher(
      new ManagedEnvelopeCipher(new TestKeyProvider()),
      [],
    );
    const payload = legacy.encrypt({ secret: 'value' }, 'record:1');

    await expect(migrating.decrypt(payload, 'record:1')).rejects.toMatchObject({
      code: 'UNAVAILABLE_LEGACY_KEY',
      operation: 'decrypt',
    });
  });
});
