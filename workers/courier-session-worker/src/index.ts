import { AesGcmEnvelopeCipher } from '@ozzyl/encryption';
import { chromium } from 'playwright';
import type { CourierSession } from '@ozzyl/courier-adapters';

export type SessionFailureCode =
  | 'INVALID_CREDENTIALS'
  | 'CAPTCHA_REQUIRED'
  | 'TWO_FACTOR_REQUIRED'
  | 'SELECTOR_CHANGED'
  | 'SESSION_NOT_CREATED'
  | 'PROVIDER_UNAVAILABLE';

export class SessionDriverError extends Error {
  constructor(
    readonly code: SessionFailureCode,
    message: string,
    readonly retryable: boolean,
  ) {
    super(message);
  }
}

export interface SteadfastCredentials {
  email: string;
  password: string;
}

export interface SessionDriverResult extends CourierSession {
  validatedAt: string;
}

export interface SessionVault {
  save(accountId: string, encryptedPayload: string, keyVersion: string): Promise<void>;
}

export interface CredentialSource {
  load(accountId: string): Promise<SteadfastCredentials | null>;
}

export interface AccountHealthStore {
  markConnected(accountId: string, at: Date): Promise<void>;
  markFailure(accountId: string, code: SessionFailureCode, at: Date): Promise<void>;
}

export { AesGcmEnvelopeCipher };

export class SteadfastSessionDriver {
  async login(credentials: SteadfastCredentials): Promise<SessionDriverResult> {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131 Safari/537.36',
    });
    try {
      const page = await context.newPage();
      await page.goto('https://steadfast.com.bd/login', {
        waitUntil: 'domcontentloaded',
        timeout: 30_000,
      });

      const captchaVisible = await page
        .locator('iframe[src*="captcha"], text=/captcha/i')
        .first()
        .isVisible()
        .catch(() => false);
      if (captchaVisible) {
        throw new SessionDriverError('CAPTCHA_REQUIRED', 'Steadfast requires CAPTCHA', false);
      }

      const emailInput = page.locator('input[type="email"], input[name="email"]').first();
      const passwordInput = page.locator('input[type="password"]').first();
      if ((await emailInput.count()) === 0 || (await passwordInput.count()) === 0) {
        throw new SessionDriverError('SELECTOR_CHANGED', 'Steadfast login fields changed', false);
      }

      await emailInput.fill(credentials.email);
      await passwordInput.fill(credentials.password);
      const submit = page.locator('button[type="submit"], button:has-text("Login")').first();
      if ((await submit.count()) === 0) {
        throw new SessionDriverError('SELECTOR_CHANGED', 'Steadfast login button changed', false);
      }

      await Promise.all([
        page.waitForLoadState('domcontentloaded', { timeout: 20_000 }).catch(() => undefined),
        submit.click(),
      ]);

      const bodyText = (
        await page
          .locator('body')
          .innerText()
          .catch(() => '')
      ).toLowerCase();
      if (bodyText.includes('invalid') && bodyText.includes('password')) {
        throw new SessionDriverError(
          'INVALID_CREDENTIALS',
          'Steadfast rejected credentials',
          false,
        );
      }
      if (bodyText.includes('two-factor') || bodyText.includes('verification code')) {
        throw new SessionDriverError(
          'TWO_FACTOR_REQUIRED',
          'Steadfast requires two-factor login',
          false,
        );
      }

      const cookies = await context.cookies('https://steadfast.com.bd');
      const sessionCookie = cookies.find((cookie) => cookie.name === 'steadfast_courier_session');
      const xsrfToken = cookies.find((cookie) => cookie.name === 'XSRF-TOKEN');
      if (!sessionCookie?.value || !xsrfToken?.value) {
        throw new SessionDriverError(
          'SESSION_NOT_CREATED',
          'Steadfast did not create a valid session',
          true,
        );
      }

      return {
        sessionCookie: sessionCookie.value,
        xsrfToken: xsrfToken.value,
        ...(sessionCookie.expires > 0
          ? { expiresAt: new Date(sessionCookie.expires * 1_000).toISOString() }
          : {}),
        validatedAt: new Date().toISOString(),
      };
    } catch (error) {
      if (error instanceof SessionDriverError) throw error;
      throw new SessionDriverError(
        'PROVIDER_UNAVAILABLE',
        'Steadfast login automation failed',
        true,
      );
    } finally {
      await browser.close();
    }
  }
}

export class CourierSessionWorker {
  constructor(
    private readonly dependencies: {
      credentials: CredentialSource;
      vault: SessionVault;
      health: AccountHealthStore;
      cipher: AesGcmEnvelopeCipher;
      driver: SteadfastSessionDriver;
    },
  ) {}

  async refresh(accountId: string): Promise<{ status: 'connected' }> {
    const credentials = await this.dependencies.credentials.load(accountId);
    if (!credentials) {
      const error = new SessionDriverError(
        'INVALID_CREDENTIALS',
        'Courier credentials are not configured',
        false,
      );
      await this.dependencies.health.markFailure(accountId, error.code, new Date());
      throw error;
    }

    try {
      const session = await this.dependencies.driver.login(credentials);
      const encrypted = this.dependencies.cipher.encrypt(session, `courier-session:${accountId}`);
      await this.dependencies.vault.save(accountId, encrypted, this.dependencies.cipher.keyVersion);
      await this.dependencies.health.markConnected(accountId, new Date());
      return { status: 'connected' };
    } catch (error) {
      const code = error instanceof SessionDriverError ? error.code : 'PROVIDER_UNAVAILABLE';
      await this.dependencies.health.markFailure(accountId, code, new Date());
      throw error;
    }
  }
}
