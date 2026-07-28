export type MetricKind = 'counter' | 'histogram' | 'gauge';
export type MetricAttributeValue = string | number | boolean;
export type MetricAttributes = Readonly<Record<string, MetricAttributeValue>>;

export interface MetricAttributeRule {
  readonly values: readonly MetricAttributeValue[];
  readonly required?: boolean;
}

export interface MetricDescriptor {
  readonly name: string;
  readonly kind: MetricKind;
  readonly unit: string;
  readonly attributes?: Readonly<Record<string, MetricAttributeRule>>;
}

export interface MetricPoint {
  readonly telemetry_type: 'metric';
  readonly timestamp: string;
  readonly service: string;
  readonly environment: string;
  readonly name: string;
  readonly kind: MetricKind;
  readonly unit: string;
  readonly value: number;
  readonly attributes: MetricAttributes;
}

export interface MetricRecorderOptions {
  readonly service: string;
  readonly environment?: string;
  readonly clock?: () => Date;
  readonly write?: (line: string, point: MetricPoint) => void;
}

export interface MetricRecorder {
  record(descriptor: MetricDescriptor, value: number, attributes?: MetricAttributes): void;
}

const MAX_ATTRIBUTES = 12;
const MAX_ALLOWED_VALUES = 50;
const MAX_LABEL_LENGTH = 100;
const MAX_ATTRIBUTE_STRING_LENGTH = 64;
const METRIC_NAME_PATTERN = /^[a-z][a-z0-9]*(?:[._][a-z0-9]+)*$/;
const UNIT_PATTERN = /^[A-Za-z0-9{}%/_-]+$/;
const ATTRIBUTE_KEY_PATTERN = /^[a-z][a-z0-9_]*$/;
const ATTRIBUTE_STRING_PATTERN = /^[A-Za-z0-9/][A-Za-z0-9._:/-]*$/;
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

export function defineMetric(descriptor: MetricDescriptor): MetricDescriptor {
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
    unit: descriptor.unit,
    ...(attributes === undefined ? {} : { attributes }),
  });
}

export function createMetricRecorder(options: MetricRecorderOptions): MetricRecorder {
  const service = requiredLabel(options.service, 'service');
  const environment = requiredLabel(options.environment?.trim() || 'development', 'environment');
  const clock = options.clock ?? (() => new Date());
  const write = options.write ?? defaultWrite;

  return {
    record(descriptor, value, attributes = {}) {
      try {
        const point = createMetricPoint({
          descriptor,
          value,
          attributes,
          timestamp: clock(),
          service,
          environment,
        });
        write(JSON.stringify(point), point);
      } catch {
        // Metrics must never change application, API, or worker behaviour.
      }
    },
  };
}

export function serializeMetricPoint(input: {
  descriptor: MetricDescriptor;
  value: number;
  attributes?: MetricAttributes;
  timestamp: Date;
  service: string;
  environment: string;
}): string {
  return JSON.stringify(
    createMetricPoint({
      ...input,
      attributes: input.attributes ?? {},
    }),
  );
}

function createMetricPoint(input: {
  descriptor: MetricDescriptor;
  value: number;
  attributes: MetricAttributes;
  timestamp: Date;
  service: string;
  environment: string;
}): MetricPoint {
  validateDescriptor(input.descriptor);
  validateMetricValue(input.descriptor.kind, input.value);
  if (Number.isNaN(input.timestamp.getTime())) throw new Error('Metric timestamp must be valid');

  return {
    telemetry_type: 'metric',
    timestamp: input.timestamp.toISOString(),
    service: requiredLabel(input.service, 'service'),
    environment: requiredLabel(input.environment, 'environment'),
    name: input.descriptor.name,
    kind: input.descriptor.kind,
    unit: input.descriptor.unit,
    value: input.value,
    attributes: validateAttributes(input.descriptor, input.attributes),
  };
}

function validateDescriptor(descriptor: MetricDescriptor): void {
  if (!METRIC_NAME_PATTERN.test(descriptor.name) || descriptor.name.length > 120) {
    throw new Error('Metric name must be a bounded lowercase dotted identifier');
  }
  if (!UNIT_PATTERN.test(descriptor.unit) || descriptor.unit.length > 32) {
    throw new Error('Metric unit must be a bounded OpenTelemetry-compatible token');
  }
  const rules = Object.entries(descriptor.attributes ?? {});
  if (rules.length > MAX_ATTRIBUTES) throw new Error('Metric descriptor has too many attributes');
  for (const [key, rule] of rules) {
    validateAttributeKey(key);
    if (rule.values.length === 0 || rule.values.length > MAX_ALLOWED_VALUES) {
      throw new Error(`Metric attribute ${key} must define a bounded finite value set`);
    }
    const seen = new Set<string>();
    for (const value of rule.values) {
      validateAttributeValue(value);
      const signature = `${typeof value}:${String(value)}`;
      if (seen.has(signature)) throw new Error(`Metric attribute ${key} contains duplicate values`);
      seen.add(signature);
    }
  }
}

function validateAttributes(
  descriptor: MetricDescriptor,
  attributes: MetricAttributes,
): MetricAttributes {
  const rules = descriptor.attributes ?? {};
  const entries = Object.entries(attributes);
  if (entries.length > MAX_ATTRIBUTES) throw new Error('Metric point has too many attributes');

  for (const [key, rule] of Object.entries(rules)) {
    if (rule.required !== false && !(key in attributes)) {
      throw new Error(`Metric attribute ${key} is required`);
    }
  }

  const normalized: Record<string, MetricAttributeValue> = {};
  for (const [key, value] of entries) {
    validateAttributeKey(key);
    validateAttributeValue(value);
    const rule = rules[key];
    if (!rule) throw new Error(`Metric attribute ${key} is not allowed`);
    if (!rule.values.some((allowed) => Object.is(allowed, value))) {
      throw new Error(`Metric attribute ${key} value is outside its bounded set`);
    }
    normalized[key] = value;
  }
  return Object.freeze(normalized);
}

function validateMetricValue(kind: MetricKind, value: number): void {
  if (!Number.isFinite(value)) throw new Error('Metric values must be finite');
  if ((kind === 'counter' || kind === 'histogram') && value < 0) {
    throw new Error(`${kind} values must not be negative`);
  }
}

function validateAttributeKey(key: string): void {
  if (!ATTRIBUTE_KEY_PATTERN.test(key) || key.length > 50 || isProhibitedAttributeKey(key)) {
    throw new Error(`Metric attribute ${key} is unsafe or unbounded`);
  }
}

function validateAttributeValue(value: MetricAttributeValue): void {
  if (typeof value === 'string') {
    if (
      value.length === 0 ||
      value.length > MAX_ATTRIBUTE_STRING_LENGTH ||
      !ATTRIBUTE_STRING_PATTERN.test(value)
    ) {
      throw new Error('Metric string attributes must be bounded categorical values');
    }
    return;
  }
  if (typeof value === 'number' && !Number.isFinite(value)) {
    throw new Error('Metric numeric attributes must be finite');
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

function requiredLabel(value: string, name: string): string {
  const normalized = value.trim();
  if (!normalized || normalized.length > MAX_LABEL_LENGTH) {
    throw new Error(`${name} must be a bounded non-empty label`);
  }
  return normalized;
}

export type WorkerMetricType =
  'courier_sync' | 'webhook_delivery' | 'verification_delivery' | 'courier_session';
export type WorkerMetricOperation = 'sync' | 'deliver' | 'send' | 'refresh';
export type WorkerMetricOutcome = 'completed' | 'cached' | 'retry_scheduled' | 'failed';

const WORKER_METRIC_ATTRIBUTES = {
  worker_type: {
    values: ['courier_sync', 'webhook_delivery', 'verification_delivery', 'courier_session'],
  },
  operation: { values: ['sync', 'deliver', 'send', 'refresh'] },
  outcome: { values: ['completed', 'cached', 'retry_scheduled', 'failed'] },
} as const;
const WORKER_OPERATION_COUNT = defineMetric({
  name: 'ozzyl.worker.operations',
  kind: 'counter',
  unit: '{operation}',
  attributes: WORKER_METRIC_ATTRIBUTES,
});
const WORKER_OPERATION_DURATION = defineMetric({
  name: 'ozzyl.worker.operation.duration',
  kind: 'histogram',
  unit: 'ms',
  attributes: WORKER_METRIC_ATTRIBUTES,
});
const WORKER_CLAIM_FAILURES = defineMetric({
  name: 'ozzyl.worker.claim.failures',
  kind: 'counter',
  unit: '{failure}',
  attributes: {
    worker_type: {
      values: ['courier_sync', 'webhook_delivery', 'verification_delivery'],
    },
  },
});

export function recordWorkerOperation(
  recorder: MetricRecorder | undefined,
  input: {
    workerType: WorkerMetricType;
    operation: WorkerMetricOperation;
    outcome: WorkerMetricOutcome;
    durationMs: number;
  },
): void {
  if (!recorder) return;
  const attributes = {
    worker_type: input.workerType,
    operation: input.operation,
    outcome: input.outcome,
  } as const;
  recorder.record(WORKER_OPERATION_COUNT, 1, attributes);
  recorder.record(WORKER_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
}

export function recordWorkerClaimFailure(
  recorder: MetricRecorder | undefined,
  workerType: Exclude<WorkerMetricType, 'courier_session'>,
): void {
  recorder?.record(WORKER_CLAIM_FAILURES, 1, { worker_type: workerType });
}

export type RepositoryMetricType = 'courier_queue' | 'webhook_queue' | 'verification_queue';
export type RepositoryMetricOperation =
  'claim' | 'start' | 'renew' | 'complete' | 'retry' | 'fail' | 'snapshot';
export type RepositoryMetricOutcome = 'success' | 'empty' | 'error';

const REPOSITORY_METRIC_ATTRIBUTES = {
  repository_type: {
    values: ['courier_queue', 'webhook_queue', 'verification_queue'],
  },
  operation: {
    values: ['claim', 'start', 'renew', 'complete', 'retry', 'fail', 'snapshot'],
  },
  outcome: { values: ['success', 'empty', 'error'] },
} as const;
const REPOSITORY_OPERATION_COUNT = defineMetric({
  name: 'ozzyl.repository.operations',
  kind: 'counter',
  unit: '{operation}',
  attributes: REPOSITORY_METRIC_ATTRIBUTES,
});
const REPOSITORY_OPERATION_DURATION = defineMetric({
  name: 'ozzyl.repository.operation.duration',
  kind: 'histogram',
  unit: 'ms',
  attributes: REPOSITORY_METRIC_ATTRIBUTES,
});

export async function observeRepositoryOperation<T>(
  recorder: MetricRecorder | undefined,
  input: {
    repositoryType: RepositoryMetricType;
    operation: RepositoryMetricOperation;
    isEmpty?: (value: T) => boolean;
    monotonicNow?: () => number;
  },
  task: () => Promise<T>,
): Promise<T> {
  const monotonicNow = input.monotonicNow ?? (() => Date.now());
  const startedAt = safeMonotonicNow(monotonicNow);
  try {
    const value = await task();
    recordRepositoryOperation(recorder, {
      repositoryType: input.repositoryType,
      operation: input.operation,
      outcome: input.isEmpty?.(value) === true ? 'empty' : 'success',
      durationMs: safeDuration(monotonicNow, startedAt),
    });
    return value;
  } catch (error) {
    recordRepositoryOperation(recorder, {
      repositoryType: input.repositoryType,
      operation: input.operation,
      outcome: 'error',
      durationMs: safeDuration(monotonicNow, startedAt),
    });
    throw error;
  }
}

export function recordRepositoryOperation(
  recorder: MetricRecorder | undefined,
  input: {
    repositoryType: RepositoryMetricType;
    operation: RepositoryMetricOperation;
    outcome: RepositoryMetricOutcome;
    durationMs: number;
  },
): void {
  if (!recorder) return;
  const attributes = {
    repository_type: input.repositoryType,
    operation: input.operation,
    outcome: input.outcome,
  } as const;
  recorder.record(REPOSITORY_OPERATION_COUNT, 1, attributes);
  recorder.record(REPOSITORY_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
}

export type ProviderMetricType =
  'courier_api' | 'courier_browser' | 'webhook_http' | 'verification_delivery';
export type ProviderMetricOperation = 'lookup' | 'login' | 'deliver' | 'send';
export type ProviderMetricOutcome = 'success' | 'retryable_failure' | 'permanent_failure';

const PROVIDER_METRIC_ATTRIBUTES = {
  provider_type: {
    values: ['courier_api', 'courier_browser', 'webhook_http', 'verification_delivery'],
  },
  operation: { values: ['lookup', 'login', 'deliver', 'send'] },
  outcome: { values: ['success', 'retryable_failure', 'permanent_failure'] },
} as const;
const PROVIDER_OPERATION_COUNT = defineMetric({
  name: 'ozzyl.provider.operations',
  kind: 'counter',
  unit: '{operation}',
  attributes: PROVIDER_METRIC_ATTRIBUTES,
});
const PROVIDER_OPERATION_DURATION = defineMetric({
  name: 'ozzyl.provider.operation.duration',
  kind: 'histogram',
  unit: 'ms',
  attributes: PROVIDER_METRIC_ATTRIBUTES,
});

export function recordProviderOperation(
  recorder: MetricRecorder | undefined,
  input: {
    providerType: ProviderMetricType;
    operation: ProviderMetricOperation;
    outcome: ProviderMetricOutcome;
    durationMs: number;
  },
): void {
  if (!recorder) return;
  const attributes = {
    provider_type: input.providerType,
    operation: input.operation,
    outcome: input.outcome,
  } as const;
  recorder.record(PROVIDER_OPERATION_COUNT, 1, attributes);
  recorder.record(PROVIDER_OPERATION_DURATION, Math.max(0, input.durationMs), attributes);
}

export type DurableQueueType = 'courier_refresh' | 'webhook_delivery' | 'verification_delivery';
export type DurableQueueStatus = 'queued' | 'retry_scheduled' | 'claimed' | 'processing' | 'failed';
export interface DurableQueueSnapshot {
  readonly depths: Partial<Record<DurableQueueStatus, number>>;
  readonly oldestReadyAgeMs: number;
}

const DURABLE_QUEUE_STATUSES: readonly DurableQueueStatus[] = [
  'queued',
  'retry_scheduled',
  'claimed',
  'processing',
  'failed',
];
const DURABLE_QUEUE_DEPTH = defineMetric({
  name: 'ozzyl.queue.depth',
  kind: 'gauge',
  unit: '{item}',
  attributes: {
    queue_type: { values: ['courier_refresh', 'webhook_delivery', 'verification_delivery'] },
    status: { values: DURABLE_QUEUE_STATUSES },
  },
});
const DURABLE_QUEUE_OLDEST_READY_AGE = defineMetric({
  name: 'ozzyl.queue.oldest_ready.age',
  kind: 'gauge',
  unit: 'ms',
  attributes: {
    queue_type: { values: ['courier_refresh', 'webhook_delivery', 'verification_delivery'] },
  },
});

export function recordDurableQueueSnapshot(
  recorder: MetricRecorder | undefined,
  queueType: DurableQueueType,
  snapshot: DurableQueueSnapshot,
): void {
  if (!recorder) return;
  for (const status of DURABLE_QUEUE_STATUSES) {
    recorder.record(DURABLE_QUEUE_DEPTH, Math.max(0, snapshot.depths[status] ?? 0), {
      queue_type: queueType,
      status,
    });
  }
  recorder.record(DURABLE_QUEUE_OLDEST_READY_AGE, Math.max(0, snapshot.oldestReadyAgeMs), {
    queue_type: queueType,
  });
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

function defaultWrite(line: string): void {
  console.info(line);
}
