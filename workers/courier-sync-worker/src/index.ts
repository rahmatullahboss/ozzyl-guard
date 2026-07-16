import type { CourierAdapter, CourierObservation } from '@ozzyl/courier-adapters';

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

export class CourierSyncWorker {
  constructor(
    private readonly dependencies: {
      adapters: Map<string, CourierAdapter>;
      observations: ObservationRepository;
      health: SyncJobHealth;
    },
  ) {}

  async sync(input: {
    jobId: string;
    storeId: string;
    courierAccountId: string;
    provider: string;
    phone: string;
    phoneHash: string;
    force?: boolean;
  }): Promise<{ observation: CourierObservation; cached: boolean }> {
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
      const observation = await adapter.fetchCustomerObservation({
        accountId: input.courierAccountId,
        phone: input.phone,
      });
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
