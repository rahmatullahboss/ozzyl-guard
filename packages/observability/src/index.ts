export * from './metrics.js';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export type LogAttributes = Readonly<Record<string, unknown>>;

export interface StructuredLoggerOptions {
  service: string;
  environment?: string;
  clock?: () => Date;
  write?: (line: string, level: LogLevel) => void;
  maxDepth?: number;
  maxStringLength?: number;
}

export interface StructuredLogger {
  debug(event: string, attributes?: LogAttributes): void;
  info(event: string, attributes?: LogAttributes): void;
  warn(event: string, attributes?: LogAttributes): void;
  error(event: string, attributes?: LogAttributes): void;
}

export interface StructuredLogInput {
  level: LogLevel;
  event: string;
  service: string;
  environment: string;
  attributes?: LogAttributes;
  timestamp: Date;
  maxDepth?: number;
  maxStringLength?: number;
}

const REDACTED = '[REDACTED]';
const CIRCULAR = '[CIRCULAR]';
const MAX_COLLECTION_ITEMS = 100;
const DEFAULT_MAX_DEPTH = 6;
const DEFAULT_MAX_STRING_LENGTH = 2_048;
const RESERVED_FIELDS = new Set(['timestamp', 'level', 'service', 'environment', 'event']);
const SENSITIVE_FIELDS = new Set([
  'authorization',
  'password',
  'passphrase',
  'secret',
  'signingsecret',
  'webhooksecret',
  'token',
  'accesstoken',
  'refreshtoken',
  'apikey',
  'cookie',
  'cookies',
  'sessioncookie',
  'otp',
  'phone',
  'phonenumber',
  'rawphone',
  'credential',
  'credentials',
  'providerresponse',
  'dnsanswers',
  'requestbody',
  'responsebody',
]);

export function createStructuredLogger(options: StructuredLoggerOptions): StructuredLogger {
  const service = requiredLabel(options.service, 'service');
  const environment = options.environment?.trim() || 'development';
  const clock = options.clock ?? (() => new Date());
  const write = options.write ?? defaultWrite;

  const emit = (level: LogLevel, event: string, attributes?: LogAttributes): void => {
    try {
      const line = serializeStructuredLog({
        level,
        event,
        service,
        environment,
        timestamp: clock(),
        ...(attributes === undefined ? {} : { attributes }),
        ...(options.maxDepth === undefined ? {} : { maxDepth: options.maxDepth }),
        ...(options.maxStringLength === undefined
          ? {}
          : { maxStringLength: options.maxStringLength }),
      });
      write(line, level);
    } catch {
      // Telemetry failures must never break application or worker execution.
    }
  };

  return {
    debug: (event, attributes) => emit('debug', event, attributes),
    info: (event, attributes) => emit('info', event, attributes),
    warn: (event, attributes) => emit('warn', event, attributes),
    error: (event, attributes) => emit('error', event, attributes),
  };
}

export function serializeStructuredLog(input: StructuredLogInput): string {
  const maxDepth = positiveInteger(input.maxDepth, DEFAULT_MAX_DEPTH);
  const maxStringLength = positiveInteger(input.maxStringLength, DEFAULT_MAX_STRING_LENGTH);
  const seen = new WeakSet<object>();
  const attributes = sanitizeRecord(input.attributes ?? {}, {
    depth: 0,
    maxDepth,
    maxStringLength,
    seen,
  });

  return JSON.stringify({
    ...attributes,
    timestamp: input.timestamp.toISOString(),
    level: input.level,
    service: requiredLabel(input.service, 'service'),
    environment: requiredLabel(input.environment, 'environment'),
    event: requiredLabel(input.event, 'event'),
  });
}

interface SanitizeContext {
  depth: number;
  maxDepth: number;
  maxStringLength: number;
  seen: WeakSet<object>;
}

function sanitizeRecord(
  value: Readonly<Record<string, unknown>>,
  context: SanitizeContext,
): Record<string, unknown> {
  if (context.depth >= context.maxDepth) return { truncated: '[MAX_DEPTH]' };
  if (context.seen.has(value)) return { circular: CIRCULAR };
  context.seen.add(value);

  const result: Record<string, unknown> = {};
  const entries = Object.entries(value).slice(0, MAX_COLLECTION_ITEMS);
  for (const [key, item] of entries) {
    if (RESERVED_FIELDS.has(key)) continue;
    result[key] = isSensitiveField(key)
      ? REDACTED
      : sanitizeValue(item, { ...context, depth: context.depth + 1 });
  }
  if (Object.keys(value).length > MAX_COLLECTION_ITEMS) result.truncated_fields = true;
  return result;
}

function sanitizeValue(value: unknown, context: SanitizeContext): unknown {
  if (value === null || typeof value === 'boolean') return value;
  if (typeof value === 'string') return truncate(value, context.maxStringLength);
  if (typeof value === 'number') return Number.isFinite(value) ? value : String(value);
  if (typeof value === 'bigint') return value.toString();
  if (typeof value === 'undefined') return '[UNDEFINED]';
  if (typeof value === 'symbol')
    return value.description ? `[SYMBOL:${value.description}]` : '[SYMBOL]';
  if (typeof value === 'function') return '[FUNCTION]';
  if (value instanceof Date)
    return Number.isNaN(value.getTime()) ? '[INVALID_DATE]' : value.toISOString();
  if (value instanceof Error) return sanitizeError(value, context);
  if (ArrayBuffer.isView(value)) return `[BINARY:${value.byteLength}]`;
  if (Array.isArray(value)) {
    if (context.depth >= context.maxDepth) return '[MAX_DEPTH]';
    if (context.seen.has(value)) return CIRCULAR;
    context.seen.add(value);
    const items = value
      .slice(0, MAX_COLLECTION_ITEMS)
      .map((item) => sanitizeValue(item, { ...context, depth: context.depth + 1 }));
    if (value.length > MAX_COLLECTION_ITEMS) items.push('[TRUNCATED_ITEMS]');
    return items;
  }
  if (typeof value === 'object') {
    return sanitizeRecord(value as Readonly<Record<string, unknown>>, context);
  }
  return '[UNSUPPORTED]';
}

function sanitizeError(error: Error, context: SanitizeContext): Record<string, unknown> {
  const code =
    'code' in error
      ? sanitizeValue((error as Error & { code?: unknown }).code, context)
      : undefined;
  return {
    name: truncate(error.name || 'Error', context.maxStringLength),
    ...(code === undefined ? {} : { code }),
  };
}

function isSensitiveField(key: string): boolean {
  const normalized = key.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (normalized === 'phonehash') return false;
  return (
    SENSITIVE_FIELDS.has(normalized) ||
    normalized.endsWith('password') ||
    normalized.endsWith('secret') ||
    normalized.endsWith('token') ||
    normalized.endsWith('apikey') ||
    normalized.endsWith('cookie') ||
    normalized.endsWith('payload') ||
    normalized.endsWith('body') ||
    normalized.endsWith('credentials') ||
    normalized.endsWith('url')
  );
}

function truncate(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength)}...[TRUNCATED:${value.length - maxLength}]`;
}

function requiredLabel(value: string, name: string): string {
  const normalized = value.trim();
  if (!normalized) throw new Error(`${name} is required`);
  return normalized;
}

function positiveInteger(value: number | undefined, fallback: number): number {
  return Number.isSafeInteger(value) && Number(value) > 0 ? Number(value) : fallback;
}

function defaultWrite(line: string, level: LogLevel): void {
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else if (level === 'debug') console.debug(line);
  else console.info(line);
}
