import type { OtpService } from '@ozzyl/verification';

export type VerificationJob =
  | {
      type: 'send';
      organizationId: string;
      storeId: string;
      phone: string;
      phoneHash: string;
      purpose: string;
    }
  | {
      type: 'verify';
      organizationId: string;
      storeId: string;
      verificationId: string;
      otp: string;
    };

export interface VerificationJobReporter {
  completed(jobId: string, result: unknown): Promise<void>;
  failed(jobId: string, code: string): Promise<void>;
}

export class VerificationWorker {
  constructor(
    private readonly service: OtpService,
    private readonly reporter: VerificationJobReporter,
  ) {}

  async process(jobId: string, job: VerificationJob): Promise<void> {
    try {
      const result =
        job.type === 'send'
          ? await this.service.send({
              organizationId: job.organizationId,
              storeId: job.storeId,
              phone: job.phone,
              phoneHash: job.phoneHash,
              purpose: job.purpose,
            })
          : await this.service.verify({
              organizationId: job.organizationId,
              storeId: job.storeId,
              verificationId: job.verificationId,
              otp: job.otp,
            });
      await this.reporter.completed(jobId, result);
    } catch (error) {
      const code =
        error && typeof error === 'object' && 'code' in error && typeof error.code === 'string'
          ? error.code
          : 'VERIFICATION_FAILED';
      await this.reporter.failed(jobId, code);
      throw error;
    }
  }
}
