import type { CourierAdapter, CourierObservation } from '@ozzyl/courier-adapters';
import {
  endProviderOperationSpan,
  endWorkerOperationSpan,
  recordProviderOperation,
  recordWorkerOperation,
  startProviderOperationSpan,
  startWorkerOperationSpan,
  type MetricRecorder,
  type TraceContext,
  type Tracer,
} from '@ozzyl/observability';

export interface ObservationRepository {
  findFresh(input: {
    storeId: string;
    provider: string;
    phoneHash: string;
    at: Date;
  }): Promise<CourierObservation | null>;
  save(input: {
    storeId: string;
    phoneHash: string;
    observation: CourierObservation;
  }): Promise<void>;
}

export interface SyncJobHealth {
  started(jobId: string, at: Date): Promise<void>;
  completed(jobId: string, at: Date): Promise<void>;
  failed(jobId: string, code: string, retryable: boolean, at: Date): Promise<void>;
}

export interface CourierSyncInput {
  jobId: string;
  storeId: string;
  courierAccountId: string;
  provider: string;
  phone: string;
  phoneHash: string;
  force?: boolean;
  signal?: AbortSignal;
  traceContext?: TraceContext;
}

export interface CourierSyncResult {
  observation: CourierObservation;
  cached: boolean;
}

export class CourierSyncWorker {
  constructor(
    private readonly dependencies: {
      adapters: Map<string, CourierAdapter>;
      observations: ObservationRepository;
      health: SyncJobHealth;
      metrics?: MetricRecorder;
      tracer?: Tracer;
      monotonicNow?: () => number;
    },
  ) {}

  async sync(input: CourierSyncInput): Promise<CourierSyncResult> {
    const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
    const startedAt = monotonicNow();
    const span = startWorkerOperationSpan(this.dependencies.tracer, {
      workerType: 'courier_sync',
      operation: 'sync',
      ...(input.traceContext === undefined ? {} : { parent: input.traceContext }),
    });
    try {
      const result = await this.syncJob(input, span.context);
      const outcome = result.cached ? 'cached' : 'completed';
      recordWorkerOperation(this.dependencies.metrics, {
        workerType: 'courier_sync',
        operation: 'sync',
        outcome,
        durationMs: monotonicNow() - startedAt,
      });
      endWorkerOperationSpan(span, outcome);
      return result;
    } catch (error) {
      recordWorkerOperation(this.dependencies.metrics, {
        workerType: 'courier_sync',
        operation: 'sync',
        outcome: 'failed',
        durationMs: monotonicNow() - startedAt,
      });
      endWorkerOperationSpan(span, 'failed');
      throw error;
    }
  }

  private async syncJob(
    input: CourierSyncInput,
    traceContext: TraceContext,
  ): Promise<CourierSyncResult> {
    await this.dependencies.health.started(input.jobId, new Date());
    try {
      if (!input.force) {
        const cached = await this.dependencies.observations.findFresh({
          storeId: input.storeId,
          provider: input.provider,
          phoneHash: input.phoneHash,
          at: new Date(),
        });
        if (cached) {
          await this.dependencies.health.completed(input.jobId, new Date());
          return { observation: cached, cached: true };
        }
      }

      const adapter = this.dependencies.adapters.get(input.provider);
      if (!adapter) throw new Error(`Courier adapter ${input.provider} is not registered`);
      const monotonicNow = this.dependencies.monotonicNow ?? (() => Date.now());
      const providerStartedAt = monotonicNow();
      const providerSpan = startProviderOperationSpan(this.dependencies.tracer, {
        providerType: 'courier_api',
        operation: 'lookup',
        parent: traceContext,
      });
      let observation: CourierObservation;
      try {
        observation = await adapter.fetchCustomerObservation({
          accountId: input.courierAccountId,
          phone: input.phone,
          ...(input.signal === undefined ? {} : { signal: input.signal }),
        });
        recordProviderOperation(this.dependencies.metrics, {
          providerType: 'courier_api',
          operation: 'lookup',
          outcome: 'success',
          durationMs: monotonicNow() - providerStartedAt,
        });
        endProviderOperationSpan(providerSpan, 'success');
      } catch (error) {
        const providerError = error as { retryable?: unknown };
        const providerOutcome =
          providerError.retryable === true ? 'retryable_failure' : 'permanent_failure';
        recordProviderOperation(this.dependencies.metrics, {
          providerType: 'courier_api',
          operation: 'lookup',
          outcome: providerOutcome,
          durationMs: monotonicNow() - providerStartedAt,
        });
        endProviderOperationSpan(providerSpan, providerOutcome);
        throw error;
      }
      await this.dependencies.observations.save({
        storeId: input.storeId,
        phoneHash: input.phoneHash,
        observation,
      });
      await this.dependencies.health.completed(input.jobId, new Date());
      return { observation, cached: false };
    } catch (error) {
      const providerError = error as { code?: unknown; retryable?: unknown };
      const code = typeof providerError.code === 'string' ? providerError.code : 'SYNC_FAILED';
      const retryable = providerError.retryable === true;
      await this.dependencies.health.failed(input.jobId, code, retryable, new Date());
      throw error;
    }
  }
}

export function toRiskCourierFeatures(observations: CourierObservation[]) {
  if (observations.length === 0) {
    return {
      totalOrders: 0,
      deliveredOrders: 0,
      returnedOrders: 0,
      cancelledBeforeShipping: 0,
      providerCount: 0,
      freshness: 'missing' as const,
      sourceConfidence: 0,
    };
  }

  const now = Date.now();
  const fresh = observations.every((observation) => Date.parse(observation.expiresAt) > now);
  return {
    totalOrders: observations.reduce((sum, value) => sum + value.totalOrders, 0),
    deliveredOrders: observations.reduce((sum, value) => sum + value.deliveredOrders, 0),
    returnedOrders: observations.reduce((sum, value) => sum + value.returnedOrders, 0),
    cancelledBeforeShipping: observations.reduce(
      (sum, value) => sum + value.cancelledBeforeShipping,
      0,
    ),
    providerCount: new Set(observations.map((observation) => observation.provider)).size,
    freshness: fresh ? ('fresh' as const) : ('stale' as const),
    sourceConfidence:
      observations.reduce((sum, value) => sum + value.confidence, 0) / observations.length,
  };
}
