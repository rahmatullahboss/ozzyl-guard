import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
  timingSafeEqual,
  type CipherGCMTypes,
} from 'node:crypto';

const AES_ALGORITHM: CipherGCMTypes = 'aes-256-gcm';
const MANAGED_ENVELOPE_VERSION = 2;
const MANAGED_SCHEMA_VERSION = 1;

export interface EnvelopeCipher {
  readonly keyVersion: string;
  encrypt(value: unknown, context: string): string;
  decrypt<T>(payload: string, context: string): T;
}

export interface ManagedKeyReference {
  provider: string;
  keyId: string;
  keyVersion: string;
  wrappingAlgorithm: string;
}

export interface WrappedDataKey extends ManagedKeyReference {
  wrappedKey: string;
}

export interface KeyEncryptionKeyProvider {
  readonly currentKey: ManagedKeyReference;
  wrapKey(dataKey: Buffer, context: string): Promise<WrappedDataKey>;
  unwrapKey(wrappedKey: WrappedDataKey, context: string): Promise<Buffer>;
}

export interface LegacyEnvelopeMetadata {
  version: 1;
  mode: 'local';
  algorithm: 'aes-256-gcm';
  keyVersion: string;
}

export interface ManagedEnvelopeMetadata {
  version: 2;
  mode: 'managed';
  schemaVersion: 1;
  algorithm: 'aes-256-gcm';
  contextDigest: string;
  key: WrappedDataKey;
}

export type EnvelopeMetadata = LegacyEnvelopeMetadata | ManagedEnvelopeMetadata;

export interface AsyncEnvelopeCipher {
  encrypt(value: unknown, context: string): Promise<string>;
  decrypt<T>(payload: string, context: string): Promise<T>;
  inspect(payload: string): EnvelopeMetadata;
  needsReencryption(payload: string): boolean;
  reencrypt(payload: string, context: string): Promise<string>;
}

export type EnvelopeEncryptionErrorCode =
  | 'INVALID_CONTEXT'
  | 'INVALID_ENVELOPE'
  | 'UNSUPPORTED_ENVELOPE_VERSION'
  | 'UNSUPPORTED_KEY_PROVIDER'
  | 'UNAVAILABLE_LEGACY_KEY'
  | 'SERIALIZATION_FAILED'
  | 'KEY_WRAP_FAILED'
  | 'KEY_UNWRAP_FAILED'
  | 'INVALID_WRAPPED_KEY'
  | 'UNSAFE_WRAPPED_KEY'
  | 'INVALID_DATA_KEY'
  | 'ENCRYPTION_FAILED'
  | 'DECRYPTION_FAILED'
  | 'CONTEXT_MISMATCH';

export class EnvelopeEncryptionError extends Error {
  constructor(
    readonly code: EnvelopeEncryptionErrorCode,
    readonly operation: 'encrypt' | 'decrypt' | 'inspect' | 'reencrypt',
  ) {
    super(code);
    this.name = 'EnvelopeEncryptionError';
  }
}

interface LegacyEnvelopePayload {
  version: 1;
  keyVersion: string;
  iv: string;
  tag: string;
  data: string;
}

interface ManagedEnvelopePayload {
  version: 2;
  schemaVersion: 1;
  algorithm: 'aes-256-gcm';
  contextDigest: string;
  key: WrappedDataKey;
  iv: string;
  tag: string;
  data: string;
}

export class AesGcmEnvelopeCipher implements EnvelopeCipher {
  private readonly algorithm: CipherGCMTypes = AES_ALGORITHM;

  constructor(
    private readonly key: Buffer,
    readonly keyVersion: string,
  ) {
    if (key.length !== 32) throw new Error('AES-256-GCM key must be exactly 32 bytes');
    assertIdentifier(keyVersion, 'keyVersion');
  }

  encrypt(value: unknown, context: string): string {
    assertContext(context, 'encrypt');
    const serialized = serialize(value, 'encrypt');
    const iv = randomBytes(12);
    const cipher = createCipheriv(this.algorithm, this.key, iv);
    cipher.setAAD(Buffer.from(context));
    const encrypted = Buffer.concat([cipher.update(serialized, 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();
    return JSON.stringify({
      version: 1,
      keyVersion: this.keyVersion,
      iv: iv.toString('base64'),
      tag: tag.toString('base64'),
      data: encrypted.toString('base64'),
    });
  }

  decrypt<T>(payload: string, context: string): T {
    assertContext(context, 'decrypt');
    const parsed = parseLegacyPayload(payload, 'decrypt');
    if (parsed.keyVersion !== this.keyVersion) {
      throw new EnvelopeEncryptionError('UNAVAILABLE_LEGACY_KEY', 'decrypt');
    }
    try {
      const decipher = createDecipheriv(
        this.algorithm,
        this.key,
        decodeBase64(parsed.iv, 'iv', 12, 'decrypt'),
      );
      decipher.setAAD(Buffer.from(context));
      decipher.setAuthTag(decodeBase64(parsed.tag, 'tag', 16, 'decrypt'));
      const decrypted = Buffer.concat([
        decipher.update(decodeBase64(parsed.data, 'data', undefined, 'decrypt')),
        decipher.final(),
      ]);
      return JSON.parse(decrypted.toString('utf8')) as T;
    } catch (error) {
      if (error instanceof EnvelopeEncryptionError) throw error;
      throw new EnvelopeEncryptionError('DECRYPTION_FAILED', 'decrypt');
    }
  }
}

export class ManagedEnvelopeCipher implements AsyncEnvelopeCipher {
  constructor(private readonly keyProvider: KeyEncryptionKeyProvider) {
    validateKeyReference(keyProvider.currentKey, 'inspect');
  }

  get currentKey(): ManagedKeyReference {
    return { ...this.keyProvider.currentKey };
  }

  async encrypt(value: unknown, context: string): Promise<string> {
    assertContext(context, 'encrypt');
    const serialized = serialize(value, 'encrypt');
    const contextDigest = digestContext(context);
    const dataKey = randomBytes(32);
    try {
      let wrappedKey: WrappedDataKey;
      try {
        wrappedKey = await this.keyProvider.wrapKey(dataKey, keyWrapContext(contextDigest));
      } catch {
        throw new EnvelopeEncryptionError('KEY_WRAP_FAILED', 'encrypt');
      }
      validateWrappedDataKey(wrappedKey, dataKey, this.keyProvider.currentKey, 'encrypt');

      try {
        const iv = randomBytes(12);
        const cipher = createCipheriv(AES_ALGORITHM, dataKey, iv);
        cipher.setAAD(managedDataAad(contextDigest, wrappedKey));
        const encrypted = Buffer.concat([cipher.update(serialized, 'utf8'), cipher.final()]);
        const tag = cipher.getAuthTag();
        return JSON.stringify({
          version: MANAGED_ENVELOPE_VERSION,
          schemaVersion: MANAGED_SCHEMA_VERSION,
          algorithm: AES_ALGORITHM,
          contextDigest,
          key: wrappedKey,
          iv: iv.toString('base64'),
          tag: tag.toString('base64'),
          data: encrypted.toString('base64'),
        } satisfies ManagedEnvelopePayload);
      } catch (error) {
        if (error instanceof EnvelopeEncryptionError) throw error;
        throw new EnvelopeEncryptionError('ENCRYPTION_FAILED', 'encrypt');
      }
    } finally {
      dataKey.fill(0);
    }
  }

  async decrypt<T>(payload: string, context: string): Promise<T> {
    assertContext(context, 'decrypt');
    const parsed = parseManagedPayload(payload, 'decrypt');
    const expectedContextDigest = digestContext(context);
    if (!safeEqualText(parsed.contextDigest, expectedContextDigest)) {
      throw new EnvelopeEncryptionError('CONTEXT_MISMATCH', 'decrypt');
    }
    if (parsed.key.provider !== this.keyProvider.currentKey.provider) {
      throw new EnvelopeEncryptionError('UNSUPPORTED_KEY_PROVIDER', 'decrypt');
    }

    let dataKey: Buffer;
    try {
      dataKey = await this.keyProvider.unwrapKey(parsed.key, keyWrapContext(parsed.contextDigest));
    } catch {
      throw new EnvelopeEncryptionError('KEY_UNWRAP_FAILED', 'decrypt');
    }
    if (!Buffer.isBuffer(dataKey) || dataKey.length !== 32) {
      dataKey?.fill?.(0);
      throw new EnvelopeEncryptionError('INVALID_DATA_KEY', 'decrypt');
    }

    try {
      const decipher = createDecipheriv(
        AES_ALGORITHM,
        dataKey,
        decodeBase64(parsed.iv, 'iv', 12, 'decrypt'),
      );
      decipher.setAAD(managedDataAad(parsed.contextDigest, parsed.key));
      decipher.setAuthTag(decodeBase64(parsed.tag, 'tag', 16, 'decrypt'));
      const decrypted = Buffer.concat([
        decipher.update(decodeBase64(parsed.data, 'data', undefined, 'decrypt')),
        decipher.final(),
      ]);
      return JSON.parse(decrypted.toString('utf8')) as T;
    } catch (error) {
      if (error instanceof EnvelopeEncryptionError) throw error;
      throw new EnvelopeEncryptionError('DECRYPTION_FAILED', 'decrypt');
    } finally {
      dataKey.fill(0);
    }
  }

  inspect(payload: string): ManagedEnvelopeMetadata {
    const parsed = parseManagedPayload(payload, 'inspect');
    return {
      version: 2,
      mode: 'managed',
      schemaVersion: 1,
      algorithm: AES_ALGORITHM,
      contextDigest: parsed.contextDigest,
      key: { ...parsed.key },
    };
  }

  needsReencryption(payload: string): boolean {
    const metadata = this.inspect(payload);
    return !sameKeyReference(metadata.key, this.keyProvider.currentKey);
  }

  async reencrypt(payload: string, context: string): Promise<string> {
    assertContext(context, 'reencrypt');
    const shouldRotate = this.needsReencryption(payload);
    const value = await this.decrypt<unknown>(payload, context);
    return shouldRotate ? this.encrypt(value, context) : payload;
  }
}

export class MigratingEnvelopeCipher implements AsyncEnvelopeCipher {
  private readonly legacyCiphers: ReadonlyMap<string, EnvelopeCipher>;

  constructor(
    private readonly managedCipher: ManagedEnvelopeCipher,
    legacyCiphers: readonly EnvelopeCipher[],
  ) {
    const entries = new Map<string, EnvelopeCipher>();
    for (const cipher of legacyCiphers) {
      if (entries.has(cipher.keyVersion)) {
        throw new Error(`Duplicate legacy envelope key version: ${cipher.keyVersion}`);
      }
      entries.set(cipher.keyVersion, cipher);
    }
    this.legacyCiphers = entries;
  }

  encrypt(value: unknown, context: string): Promise<string> {
    return this.managedCipher.encrypt(value, context);
  }

  async decrypt<T>(payload: string, context: string): Promise<T> {
    const metadata = inspectEnvelope(payload);
    if (metadata.mode === 'managed') return this.managedCipher.decrypt<T>(payload, context);
    const legacy = this.legacyCiphers.get(metadata.keyVersion);
    if (!legacy) throw new EnvelopeEncryptionError('UNAVAILABLE_LEGACY_KEY', 'decrypt');
    try {
      return legacy.decrypt<T>(payload, context);
    } catch (error) {
      if (error instanceof EnvelopeEncryptionError) throw error;
      throw new EnvelopeEncryptionError('DECRYPTION_FAILED', 'decrypt');
    }
  }

  inspect(payload: string): EnvelopeMetadata {
    return inspectEnvelope(payload);
  }

  needsReencryption(payload: string): boolean {
    const metadata = inspectEnvelope(payload);
    return metadata.mode === 'local' || this.managedCipher.needsReencryption(payload);
  }

  async reencrypt(payload: string, context: string): Promise<string> {
    assertContext(context, 'reencrypt');
    const shouldRotate = this.needsReencryption(payload);
    const value = await this.decrypt<unknown>(payload, context);
    return shouldRotate ? this.managedCipher.encrypt(value, context) : payload;
  }
}

export function inspectEnvelope(payload: string): EnvelopeMetadata {
  const object = parseObject(payload, 'inspect');
  if (object.version === 1) {
    const legacy = parseLegacyObject(object, 'inspect');
    return {
      version: 1,
      mode: 'local',
      algorithm: AES_ALGORITHM,
      keyVersion: legacy.keyVersion,
    };
  }
  if (object.version === MANAGED_ENVELOPE_VERSION) {
    const managed = parseManagedObject(object, 'inspect');
    return {
      version: 2,
      mode: 'managed',
      schemaVersion: 1,
      algorithm: AES_ALGORITHM,
      contextDigest: managed.contextDigest,
      key: { ...managed.key },
    };
  }
  throw new EnvelopeEncryptionError('UNSUPPORTED_ENVELOPE_VERSION', 'inspect');
}

function parseLegacyPayload(
  payload: string,
  operation: 'decrypt' | 'inspect',
): LegacyEnvelopePayload {
  return parseLegacyObject(parseObject(payload, operation), operation);
}

function parseLegacyObject(
  object: Record<string, unknown>,
  operation: 'decrypt' | 'inspect',
): LegacyEnvelopePayload {
  if (object.version !== 1) {
    throw new EnvelopeEncryptionError('UNSUPPORTED_ENVELOPE_VERSION', operation);
  }
  const keyVersion = readString(object, 'keyVersion', operation);
  assertIdentifier(keyVersion, 'keyVersion', operation);
  const iv = readString(object, 'iv', operation);
  const tag = readString(object, 'tag', operation);
  const data = readString(object, 'data', operation);
  decodeBase64(iv, 'iv', 12, operation);
  decodeBase64(tag, 'tag', 16, operation);
  decodeBase64(data, 'data', undefined, operation);
  return { version: 1, keyVersion, iv, tag, data };
}

function parseManagedPayload(
  payload: string,
  operation: 'decrypt' | 'inspect',
): ManagedEnvelopePayload {
  return parseManagedObject(parseObject(payload, operation), operation);
}

function parseManagedObject(
  object: Record<string, unknown>,
  operation: 'decrypt' | 'inspect',
): ManagedEnvelopePayload {
  if (object.version !== MANAGED_ENVELOPE_VERSION) {
    throw new EnvelopeEncryptionError('UNSUPPORTED_ENVELOPE_VERSION', operation);
  }
  if (object.schemaVersion !== MANAGED_SCHEMA_VERSION || object.algorithm !== AES_ALGORITHM) {
    throw new EnvelopeEncryptionError('INVALID_ENVELOPE', operation);
  }
  const contextDigest = readString(object, 'contextDigest', operation);
  if (!/^[a-f0-9]{64}$/.test(contextDigest)) {
    throw new EnvelopeEncryptionError('INVALID_ENVELOPE', operation);
  }
  const keyObject = readObject(object, 'key', operation);
  const key: WrappedDataKey = {
    provider: readString(keyObject, 'provider', operation),
    keyId: readString(keyObject, 'keyId', operation),
    keyVersion: readString(keyObject, 'keyVersion', operation),
    wrappingAlgorithm: readString(keyObject, 'wrappingAlgorithm', operation),
    wrappedKey: readString(keyObject, 'wrappedKey', operation),
  };
  validateKeyReference(key, operation);
  decodeBase64(key.wrappedKey, 'wrappedKey', undefined, operation, 16);

  const iv = readString(object, 'iv', operation);
  const tag = readString(object, 'tag', operation);
  const data = readString(object, 'data', operation);
  decodeBase64(iv, 'iv', 12, operation);
  decodeBase64(tag, 'tag', 16, operation);
  decodeBase64(data, 'data', undefined, operation, 1);
  return {
    version: 2,
    schemaVersion: 1,
    algorithm: AES_ALGORITHM,
    contextDigest,
    key,
    iv,
    tag,
    data,
  };
}

function validateWrappedDataKey(
  wrapped: WrappedDataKey,
  plaintextDataKey: Buffer,
  expected: ManagedKeyReference,
  operation: 'encrypt',
): void {
  validateKeyReference(wrapped, operation);
  if (!sameKeyReference(wrapped, expected)) {
    throw new EnvelopeEncryptionError('INVALID_WRAPPED_KEY', operation);
  }
  const decoded = decodeBase64(wrapped.wrappedKey, 'wrappedKey', undefined, operation, 16);
  if (decoded.length === plaintextDataKey.length && timingSafeEqual(decoded, plaintextDataKey)) {
    throw new EnvelopeEncryptionError('UNSAFE_WRAPPED_KEY', operation);
  }
}

function validateKeyReference(
  reference: ManagedKeyReference,
  operation: 'encrypt' | 'decrypt' | 'inspect' | 'reencrypt',
): void {
  assertIdentifier(reference.provider, 'provider', operation);
  assertIdentifier(reference.keyId, 'keyId', operation);
  assertIdentifier(reference.keyVersion, 'keyVersion', operation);
  assertIdentifier(reference.wrappingAlgorithm, 'wrappingAlgorithm', operation);
}

function sameKeyReference(left: ManagedKeyReference, right: ManagedKeyReference): boolean {
  return (
    left.provider === right.provider &&
    left.keyId === right.keyId &&
    left.keyVersion === right.keyVersion &&
    left.wrappingAlgorithm === right.wrappingAlgorithm
  );
}

function managedDataAad(contextDigest: string, key: WrappedDataKey): Buffer {
  return Buffer.from(
    JSON.stringify({
      version: MANAGED_ENVELOPE_VERSION,
      schemaVersion: MANAGED_SCHEMA_VERSION,
      algorithm: AES_ALGORITHM,
      contextDigest,
      key,
    }),
  );
}

function keyWrapContext(contextDigest: string): string {
  return `ozzyl-envelope-key:v2:${contextDigest}`;
}

function digestContext(context: string): string {
  return createHash('sha256').update(context).digest('hex');
}

function serialize(value: unknown, operation: 'encrypt'): string {
  try {
    const serialized = JSON.stringify(value);
    if (serialized === undefined) throw new Error('not serializable');
    return serialized;
  } catch {
    throw new EnvelopeEncryptionError('SERIALIZATION_FAILED', operation);
  }
}

function parseObject(payload: string, operation: 'decrypt' | 'inspect'): Record<string, unknown> {
  try {
    const value = JSON.parse(payload) as unknown;
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      throw new Error('not an object');
    }
    return value as Record<string, unknown>;
  } catch {
    throw new EnvelopeEncryptionError('INVALID_ENVELOPE', operation);
  }
}

function readObject(
  object: Record<string, unknown>,
  field: string,
  operation: 'decrypt' | 'inspect',
): Record<string, unknown> {
  const value = object[field];
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new EnvelopeEncryptionError('INVALID_ENVELOPE', operation);
  }
  return value as Record<string, unknown>;
}

function readString(
  object: Record<string, unknown>,
  field: string,
  operation: 'decrypt' | 'inspect',
): string {
  const value = object[field];
  if (typeof value !== 'string') {
    throw new EnvelopeEncryptionError('INVALID_ENVELOPE', operation);
  }
  return value;
}

function decodeBase64(
  value: string,
  _field: string,
  expectedLength: number | undefined,
  operation: 'encrypt' | 'decrypt' | 'inspect',
  minimumLength = 0,
): Buffer {
  const decoded = Buffer.from(value, 'base64');
  if (
    value.length === 0 ||
    decoded.toString('base64') !== value ||
    (expectedLength !== undefined && decoded.length !== expectedLength) ||
    decoded.length < minimumLength
  ) {
    throw new EnvelopeEncryptionError('INVALID_ENVELOPE', operation);
  }
  return decoded;
}

function assertContext(context: string, operation: 'encrypt' | 'decrypt' | 'reencrypt'): void {
  if (context.length === 0 || context.length > 2048 || hasControlCharacter(context)) {
    throw new EnvelopeEncryptionError('INVALID_CONTEXT', operation);
  }
}

function assertIdentifier(
  value: string,
  _field: string,
  operation: 'encrypt' | 'decrypt' | 'inspect' | 'reencrypt' = 'inspect',
): void {
  if (
    value.length === 0 ||
    value.length > 512 ||
    value.trim() !== value ||
    hasControlCharacter(value)
  ) {
    throw new EnvelopeEncryptionError('INVALID_ENVELOPE', operation);
  }
}

function hasControlCharacter(value: string): boolean {
  return /[\u0000-\u001f\u007f]/.test(value);
}

function safeEqualText(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}
