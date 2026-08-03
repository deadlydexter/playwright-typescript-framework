import { expect, Locator, Page } from '@playwright/test';

export class DynamicLoadingPage {
  readonly page: Page;
  readonly startButton: Locator;
  readonly loadingIndicator: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startButton = page.getByRole('button', { name: 'Start' });
    this.loadingIndicator = page.locator('#loading');
    this.resultText = page.locator('#finish');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/dynamic_loading/2');
  }

  async startLoading(): Promise<void> {
    await this.startButton.click();
  }

  async verifyResult(): Promise<void> {
    await expect(this.loadingIndicator).toBeHidden({
      timeout: 10_000,
    });

    await expect(this.resultText).toBeVisible({
      timeout: 10_000,
    });

    await expect(this.resultText).toHaveText('Hello World!');
  }
}
