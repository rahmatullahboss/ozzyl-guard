export type PlanCode = 'free' | 'starter' | 'pro' | 'enterprise';

export interface PlanDefinition {
  code: PlanCode;
  monthlyAssessments: number | null;
  stores: number | null;
  teamMembers: number | null;
}

export const PLANS: Record<PlanCode, PlanDefinition> = {
  free: { code: 'free', monthlyAssessments: 100, stores: 1, teamMembers: 1 },
  starter: { code: 'starter', monthlyAssessments: 5_000, stores: 3, teamMembers: 5 },
  pro: { code: 'pro', monthlyAssessments: 50_000, stores: 20, teamMembers: 25 },
  enterprise: { code: 'enterprise', monthlyAssessments: null, stores: null, teamMembers: null },
};

export class UsageLimitError extends Error {
  readonly code = 'USAGE_LIMIT_EXCEEDED';
}

export interface UsageReservation {
  requestId: string;
  used: number;
  limit: number | null;
  replay: boolean;
}

export interface UsageLedger {
  reserve(input: {
    organizationId: string;
    period: string;
    requestId: string;
    units: number;
    plan: PlanCode;
  }): Promise<UsageReservation>;
}

export class MemoryUsageLedger implements UsageLedger {
  private readonly counters = new Map<string, number>();
  private readonly reservations = new Map<string, UsageReservation>();

  async reserve(input: {
    organizationId: string;
    period: string;
    requestId: string;
    units: number;
    plan: PlanCode;
  }): Promise<UsageReservation> {
    const reservationKey = `${input.organizationId}:${input.period}:${input.requestId}`;
    const existing = this.reservations.get(reservationKey);
    if (existing) return { ...existing, replay: true };

    const counterKey = `${input.organizationId}:${input.period}`;
    const current = this.counters.get(counterKey) ?? 0;
    const limit = PLANS[input.plan].monthlyAssessments;
    if (limit !== null && current + input.units > limit) {
      throw new UsageLimitError(`Monthly assessment limit of ${limit} exceeded`);
    }

    const used = current + input.units;
    this.counters.set(counterKey, used);
    const reservation = { requestId: input.requestId, used, limit, replay: false };
    this.reservations.set(reservationKey, reservation);
    return reservation;
  }
}
