import { expect, Locator, Page } from '@playwright/test';

export class InputsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly numberInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: 'Inputs',
    });
    this.numberInput = page.locator('input[type="number"]');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/inputs');
  }

  async verifyPageIsDisplayed(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async enterNumber(value: string): Promise<void> {
    await this.numberInput.fill(value);
  }

  async verifyInputValue(expectedValue: string): Promise<void> {
    await expect(this.numberInput).toHaveValue(expectedValue);
  }

  async clearInput(): Promise<void> {
    await this.numberInput.clear();
    await expect(this.numberInput).toHaveValue('');
  }
}