import { createCipheriv, createDecipheriv, randomBytes, type CipherGCMTypes } from 'node:crypto';

export interface EnvelopeCipher {
  readonly keyVersion: string;
  encrypt(value: unknown, context: string): string;
  decrypt<T>(payload: string, context: string): T;
}

export class AesGcmEnvelopeCipher implements EnvelopeCipher {
  private readonly algorithm: CipherGCMTypes = 'aes-256-gcm';

  constructor(
    private readonly key: Buffer,
    readonly keyVersion: string,
  ) {
    if (key.length !== 32) throw new Error('AES-256-GCM key must be exactly 32 bytes');
  }

  encrypt(value: unknown, context: string): string {
    const iv = randomBytes(12);
    const cipher = createCipheriv(this.algorithm, this.key, iv);
    cipher.setAAD(Buffer.from(context));
    const encrypted = Buffer.concat([cipher.update(JSON.stringify(value), 'utf8'), cipher.final()]);
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
    const parsed = JSON.parse(payload) as {
      version: number;
      keyVersion: string;
      iv: string;
      tag: string;
      data: string;
    };
    if (parsed.version !== 1 || parsed.keyVersion !== this.keyVersion) {
      throw new Error('Unsupported encrypted payload version');
    }
    const decipher = createDecipheriv(this.algorithm, this.key, Buffer.from(parsed.iv, 'base64'));
    decipher.setAAD(Buffer.from(context));
    decipher.setAuthTag(Buffer.from(parsed.tag, 'base64'));
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(parsed.data, 'base64')),
      decipher.final(),
    ]);
    return JSON.parse(decrypted.toString('utf8')) as T;
  }
}
