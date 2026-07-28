export interface LeaseHeartbeatOptions {
  intervalMs: number;
  renew(at: Date): Promise<void>;
  now?: () => Date;
}

export class LeaseHeartbeat {
  private readonly controller = new AbortController();
  private readonly now: () => Date;
  private timer: ReturnType<typeof setInterval> | undefined;
  private renewal: Promise<void> | undefined;
  private failure: Error | undefined;
  private stopped = false;

  constructor(private readonly options: LeaseHeartbeatOptions) {
    if (!Number.isSafeInteger(options.intervalMs) || options.intervalMs <= 0) {
      throw new Error('Lease heartbeat interval must be a positive integer');
    }
    this.now = options.now ?? (() => new Date());
  }

  get signal(): AbortSignal {
    return this.controller.signal;
  }

  start(): this {
    if (this.timer || this.stopped) throw new Error('Lease heartbeat cannot be started twice');
    this.timer = setInterval(() => this.requestRenewal(), this.options.intervalMs);
    return this;
  }

  async stop(): Promise<void> {
    if (!this.stopped) {
      this.stopped = true;
      if (this.timer) clearInterval(this.timer);
      this.timer = undefined;
    }
    await this.renewal;
    if (this.failure !== undefined) throw this.failure;
  }

  async stopQuietly(): Promise<void> {
    await this.stop().catch(() => undefined);
  }

  private requestRenewal(): void {
    if (this.stopped || this.failure !== undefined || this.renewal) return;
    this.renewal = this.options
      .renew(this.now())
      .catch((error: unknown) => {
        const failure =
          error instanceof Error ? error : new Error('Lease renewal failed', { cause: error });
        this.failure = failure;
        this.controller.abort(failure);
      })
      .finally(() => {
        this.renewal = undefined;
      });
  }
}
