import { randomBytes } from 'node:crypto';

export type SpanKind = 'server' | 'client' | 'producer' | 'consumer' | 'internal';
export type SpanStatus = 'unset' | 'ok' | 'error';
export type TraceAttributeValue = string | number | boolean;
export type TraceAttributes = Readonly<Record<string, TraceAttributeValue>>;

export interface TraceAttributeRule {
  readonly values: readonly TraceAttributeValue[];
  readonly required?: boolean;
}

export interface SpanDescriptor {
  readonly name: string;
  readonly kind: SpanKind;
  readonly attributes?: Readonly<Record<string, TraceAttributeRule>>;
}

export interface TraceContext {
  readonly traceId: string;
  readonly spanId: string;
  readonly traceFlags: string;
  readonly traceState?: string;
}

export interface PersistedTraceContext {
  readonly traceParent: string;
  readonly traceState?: string;
}

export interface SpanPoint {
  readonly telemetry_type: 'span';
  readonly start_time: string;
  readonly end_time: string;
  readonly service: string;
  readonly environment: string;
  readonly name: string;
  readonly kind: SpanKind;
  readonly trace_id: string;
  readonly span_id: string;
  readonly parent_span_id?: string;
  readonly trace_flags: string;
  readonly status: SpanStatus;
  readonly duration_ms: number;
  readonly attributes: TraceAttributes;
}

export interface SpanEndOptions {
  readonly status?: SpanStatus;
  readonly attributes?: TraceAttributes;
}

export interface Span {
  readonly context: TraceContext;
  end(options?: SpanEndOptions): void;
}

export interface TracerOptions {
  readonly service: string;
  readonly environment?: string;
  readonly clock?: () => Date;
  readonly monotonicNow?: () => number;
  readonly generateTraceId?: () => string;
  readonly generateSpanId?: () => string;
  readonly write?: (line: string, point: SpanPoint) => void;
}

export interface StartSpanOptions {
  readonly parent?: TraceContext;
  readonly attributes?: TraceAttributes;
}

export interface Tracer {
  startSpan(descriptor: SpanDescriptor, options?: StartSpanOptions): Span;
}

const MAX_ATTRIBUTES = 12;
const MAX_ALLOWED_VALUES = 50;
const MAX_LABEL_LENGTH = 100;
const MAX_ATTRIBUTE_STRING_LENGTH = 64;
const MAX_TRACE_STATE_LENGTH = 512;
const MAX_TRACE_STATE_MEMBERS = 32;
const SPAN_NAME_PATTERN = /^[a-z][a-z0-9]*(?:[._][a-z0-9]+)*$/;
const ATTRIBUTE_KEY_PATTERN = /^[a-z][a-z0-9_]*$/;
const ATTRIBUTE_STRING_PATTERN = /^[A-Za-z0-9/][A-Za-z0-9._:/-]*$/;
const TRACE_PARENT_PATTERN = /^00-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})$/;
const TRACE_ID_PATTERN = /^[0-9a-f]{32}$/;
const SPAN_ID_PATTERN = /^[0-9a-f]{16}$/;
const TRACE_FLAGS_PATTERN = /^[0-9a-f]{2}$/;
const TRACE_STATE_KEY_PATTERN = /^[a-z0-9][a-z0-9_*/-]{0,255}(?:@[a-z0-9][a-z0-9_*/-]{0,13})?$/;
const PROHIBITED_ATTRIBUTE_KEYS = new Set([
  'authorization',
  'password',
  'secret',
  'token',
  'cookie',
  'otp',
  'phone',
  'phone_hash',
  'request_id',
  'organization_id',
  'store_id',
  'worker_id',
  'account_id',
  'job_id',
  'event_id',
  'delivery_id',
  'assessment_id',
  'api_key_id',
  'idempotency_key',
  'endpoint',
  'endpoint_url',
  'provider_response',
  'payload',
  'request_body',
  'response_body',
]);

export function defineSpan(descriptor: SpanDescriptor): SpanDescriptor {
  validateDescriptor(descriptor);
  const attributes = descriptor.attributes
    ? Object.freeze(
        Object.fromEntries(
          Object.entries(descriptor.attributes).map(([key, rule]) => [
            key,
            Object.freeze({ ...rule, values: Object.freeze([...rule.values]) }),
          ]),
        ),
      )
    : undefined;
  return Object.freeze({
    name: descriptor.name,
    kind: descriptor.kind,
    ...(attributes === undefined ? {} : { attributes }),
  });
}

export function createTracer(options: TracerOptions): Tracer {
  const service = requiredLabel(options.service, 'service');
  const environment = requiredLabel(options.environment?.trim() || 'development', 'environment');
  const clock = options.clock ?? (() => new Date());
  const monotonicNow = options.monotonicNow ?? (() => Date.now());
  const generateTraceId = options.generateTraceId ?? (() => randomBytes(16).toString('hex'));
  const generateSpanId = options.generateSpanId ?? (() => randomBytes(8).toString('hex'));
  const write = options.write ?? defaultWrite;

  return {
    startSpan(descriptor, startOptions = {}) {
      try {
        validateDescriptor(descriptor);
        const parent = startOptions.parent;
        if (parent) validateTraceContext(parent);
        const context: TraceContext = Object.freeze({
          traceId:
            parent?.traceId ?? validGeneratedId(generateTraceId(), TRACE_ID_PATTERN, 'trace ID'),
          spanId: validGeneratedId(generateSpanId(), SPAN_ID_PATTERN, 'span ID'),
          traceFlags: parent?.traceFlags ?? '01',
          ...(parent?.traceState === undefined ? {} : { traceState: parent.traceState }),
        });
        const initialAttributes = validateAttributes(
          descriptor,
          startOptions.attributes ?? {},
          false,
        );
        const startedAt = clock();
        const monotonicStartedAt = safeMonotonicNow(monotonicNow);
        let ended = false;

        return {
          context,
          end(endOptions = {}) {
            if (ended) return;
            ended = true;
            try {
              const endTime = clock();
              if (Number.isNaN(startedAt.getTime()) || Number.isNaN(endTime.getTime())) {
                throw new Error('Span timestamps must be valid');
              }
              const attributes = validateAttributes(
                descriptor,
                { ...initialAttributes, ...(endOptions.attributes ?? {}) },
                true,
              );
              const point: SpanPoint = Object.freeze({
                telemetry_type: 'span',
                start_time: startedAt.toISOString(),
                end_time: endTime.toISOString(),
                service,
                environment,
                name: descriptor.name,
                kind: descriptor.kind,
                trace_id: context.traceId,
                span_id: context.spanId,
                ...(parent === undefined ? {} : { parent_span_id: parent.spanId }),
                trace_flags: context.traceFlags,
                status: endOptions.status ?? 'unset',
                duration_ms: safeDuration(monotonicNow, monotonicStartedAt),
                attributes,
              });
              write(JSON.stringify(point), point);
            } catch {
              // Trace export and serialization failures must never change application behaviour.
            }
          },
        };
      } catch {
        return noOpSpan(startOptions.parent);
      }
    },
  };
}

export function parseTraceContext(
  traceParent: string | null | undefined,
  traceState?: string | null,
): TraceContext | null {
  const normalizedParent = traceParent?.trim().toLowerCase();
  if (!normalizedParent) return null;
  const match = TRACE_PARENT_PATTERN.exec(normalizedParent);
  if (!match) return null;
  const traceId = match[1];
  const spanId = match[2];
  const traceFlags = match[3];
  if (!traceId || !spanId || !traceFlags || isAllZero(traceId) || isAllZero(spanId)) return null;
  const normalizedState = normalizeTraceState(traceState);
  if (traceState != null && normalizedState === null) return null;
  return Object.freeze({
    traceId,
    spanId,
    traceFlags,
    ...(normalizedState === null || normalizedState === undefined
      ? {}
      : { traceState: normalizedState }),
  });
}

export function formatTraceParent(context: TraceContext): string {
  validateTraceContext(context);
  return `00-${context.traceId}-${context.spanId}-${context.traceFlags}`;
}

export function toPersistedTraceContext(context: TraceContext): PersistedTraceContext {
  return Object.freeze({
    traceParent: formatTraceParent(context),
    ...(context.traceState === undefined ? {} : { traceState: context.traceState }),
  });
}

export function parsePersistedTraceContext(
  input: PersistedTraceContext | null | undefined,
): TraceContext | null {
  if (!input) return null;
  return parseTraceContext(input.traceParent, input.traceState);
}

export type WorkerTraceType =
  'courier_sync' | 'webhook_delivery' | 'verification_delivery' | 'courier_session';
export type WorkerTraceOperation = 'sync' | 'deliver' | 'send' | 'refresh';
export type WorkerTraceOutcome = 'completed' | 'cached' | 'retry_scheduled' | 'failed';
export type ProviderTraceType =
  'courier_api' | 'courier_browser' | 'webhook_http' | 'verification_delivery';
export type ProviderTraceOperation = 'lookup' | 'login' | 'deliver' | 'send';
export type ProviderTraceOutcome = 'success' | 'retryable_failure' | 'permanent_failure';

const WORKER_OPERATION_SPAN = defineSpan({
  name: 'ozzyl.worker.operation',
  kind: 'consumer',
  attributes: {
    worker_type: {
      values: ['courier_sync', 'webhook_delivery', 'verification_delivery', 'courier_session'],
    },
    operation: { values: ['sync', 'deliver', 'send', 'refresh'] },
    outcome: {
      values: ['completed', 'cached', 'retry_scheduled', 'failed'],
      required: false,
    },
  },
});

const PROVIDER_OPERATION_SPAN = defineSpan({
  name: 'ozzyl.provider.operation',
  kind: 'client',
  attributes: {
    provider_type: {
      values: ['courier_api', 'courier_browser', 'webhook_http', 'verification_delivery'],
    },
    operation: { values: ['lookup', 'login', 'deliver', 'send'] },
    outcome: {
      values: ['success', 'retryable_failure', 'permanent_failure'],
      required: false,
    },
  },
});

export function startWorkerOperationSpan(
  tracer: Tracer | undefined,
  input: {
    workerType: WorkerTraceType;
    operation: WorkerTraceOperation;
    parent?: TraceContext;
  },
): Span {
  if (!tracer) return noOpSpan(input.parent);
  return tracer.startSpan(WORKER_OPERATION_SPAN, {
    ...(input.parent === undefined ? {} : { parent: input.parent }),
    attributes: { worker_type: input.workerType, operation: input.operation },
  });
}

export function endWorkerOperationSpan(span: Span, outcome: WorkerTraceOutcome): void {
  span.end({
    status: outcome === 'failed' ? 'error' : 'ok',
    attributes: { outcome },
  });
}

export function startProviderOperationSpan(
  tracer: Tracer | undefined,
  input: {
    providerType: ProviderTraceType;
    operation: ProviderTraceOperation;
    parent?: TraceContext;
  },
): Span {
  if (!tracer) return noOpSpan(input.parent);
  return tracer.startSpan(PROVIDER_OPERATION_SPAN, {
    ...(input.parent === undefined ? {} : { parent: input.parent }),
    attributes: { provider_type: input.providerType, operation: input.operation },
  });
}

export function endProviderOperationSpan(span: Span, outcome: ProviderTraceOutcome): void {
  span.end({
    status: outcome === 'success' ? 'ok' : 'error',
    attributes: { outcome },
  });
}

function validateDescriptor(descriptor: SpanDescriptor): void {
  if (!SPAN_NAME_PATTERN.test(descriptor.name) || descriptor.name.length > 120) {
    throw new Error('Span name must be a bounded lowercase dotted identifier');
  }
  const rules = Object.entries(descriptor.attributes ?? {});
  if (rules.length > MAX_ATTRIBUTES) throw new Error('Span descriptor has too many attributes');
  for (const [key, rule] of rules) {
    validateAttributeKey(key);
    if (rule.values.length === 0 || rule.values.length > MAX_ALLOWED_VALUES) {
      throw new Error(`Span attribute ${key} must define a bounded finite value set`);
    }
    const seen = new Set<string>();
    for (const value of rule.values) {
      validateAttributeValue(value);
      const signature = `${typeof value}:${String(value)}`;
      if (seen.has(signature)) throw new Error(`Span attribute ${key} contains duplicate values`);
      seen.add(signature);
    }
  }
}

function validateAttributes(
  descriptor: SpanDescriptor,
  attributes: TraceAttributes,
  enforceRequired: boolean,
): TraceAttributes {
  const rules = descriptor.attributes ?? {};
  const entries = Object.entries(attributes);
  if (entries.length > MAX_ATTRIBUTES) throw new Error('Span has too many attributes');
  if (enforceRequired) {
    for (const [key, rule] of Object.entries(rules)) {
      if (rule.required !== false && !(key in attributes)) {
        throw new Error(`Span attribute ${key} is required`);
      }
    }
  }

  const normalized: Record<string, TraceAttributeValue> = {};
  for (const [key, value] of entries) {
    validateAttributeKey(key);
    validateAttributeValue(value);
    const rule = rules[key];
    if (!rule) throw new Error(`Span attribute ${key} is not allowed`);
    if (!rule.values.some((allowed) => Object.is(allowed, value))) {
      throw new Error(`Span attribute ${key} value is outside its bounded set`);
    }
    normalized[key] = value;
  }
  return Object.freeze(normalized);
}

function validateTraceContext(context: TraceContext): void {
  if (!TRACE_ID_PATTERN.test(context.traceId) || isAllZero(context.traceId)) {
    throw new Error('Trace ID is invalid');
  }
  if (!SPAN_ID_PATTERN.test(context.spanId) || isAllZero(context.spanId)) {
    throw new Error('Span ID is invalid');
  }
  if (!TRACE_FLAGS_PATTERN.test(context.traceFlags)) throw new Error('Trace flags are invalid');
  if (context.traceState !== undefined && normalizeTraceState(context.traceState) === null) {
    throw new Error('Trace state is invalid');
  }
}

function normalizeTraceState(value: string | null | undefined): string | null | undefined {
  if (value == null) return undefined;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > MAX_TRACE_STATE_LENGTH) return null;
  const members = trimmed.split(',').map((member) => member.trim());
  if (members.length === 0 || members.length > MAX_TRACE_STATE_MEMBERS) return null;
  const keys = new Set<string>();
  for (const member of members) {
    const separator = member.indexOf('=');
    if (separator <= 0 || separator === member.length - 1) return null;
    const key = member.slice(0, separator);
    const memberValue = member.slice(separator + 1);
    if (!TRACE_STATE_KEY_PATTERN.test(key) || keys.has(key)) return null;
    if (memberValue.length > 256 || memberValue.endsWith(' ')) return null;
    for (const character of memberValue) {
      const code = character.charCodeAt(0);
      if (code < 0x20 || code > 0x7e || character === ',' || character === '=') return null;
    }
    keys.add(key);
  }
  return members.join(',');
}

function validateAttributeKey(key: string): void {
  if (!ATTRIBUTE_KEY_PATTERN.test(key) || key.length > 50 || isProhibitedAttributeKey(key)) {
    throw new Error(`Span attribute ${key} is unsafe or unbounded`);
  }
}

function validateAttributeValue(value: TraceAttributeValue): void {
  if (typeof value === 'string') {
    if (
      value.length === 0 ||
      value.length > MAX_ATTRIBUTE_STRING_LENGTH ||
      !ATTRIBUTE_STRING_PATTERN.test(value)
    ) {
      throw new Error('Span string attributes must be bounded categorical values');
    }
    return;
  }
  if (typeof value === 'number' && !Number.isFinite(value)) {
    throw new Error('Span numeric attributes must be finite');
  }
}

function isProhibitedAttributeKey(key: string): boolean {
  const normalized = key.toLowerCase();
  return (
    PROHIBITED_ATTRIBUTE_KEYS.has(normalized) ||
    normalized.endsWith('_id') ||
    normalized.endsWith('_key') ||
    normalized.endsWith('_hash') ||
    normalized.endsWith('_url') ||
    normalized.endsWith('_payload') ||
    normalized.endsWith('_body') ||
    normalized.endsWith('_token') ||
    normalized.endsWith('_secret')
  );
}

function validGeneratedId(value: string, pattern: RegExp, name: string): string {
  const normalized = value.toLowerCase();
  if (!pattern.test(normalized) || isAllZero(normalized))
    throw new Error(`Generated ${name} is invalid`);
  return normalized;
}

function requiredLabel(value: string, name: string): string {
  const normalized = value.trim();
  if (!normalized || normalized.length > MAX_LABEL_LENGTH) {
    throw new Error(`${name} must be a bounded non-empty label`);
  }
  return normalized;
}

function isAllZero(value: string): boolean {
  return /^0+$/.test(value);
}

function safeMonotonicNow(monotonicNow: () => number): number {
  try {
    const value = monotonicNow();
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
}

function safeDuration(monotonicNow: () => number, startedAt: number): number {
  return Math.max(0, safeMonotonicNow(monotonicNow) - startedAt);
}

function noOpSpan(parent?: TraceContext): Span {
  const fallback: TraceContext = Object.freeze(
    parent ?? {
      traceId: '00000000000000000000000000000001',
      spanId: '0000000000000001',
      traceFlags: '00',
    },
  );
  return { context: fallback, end: () => undefined };
}

function defaultWrite(line: string): void {
  console.info(line);
}
