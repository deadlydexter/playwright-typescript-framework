import { expect, Locator, Page } from '@playwright/test';

export class CheckboxesPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly checkboxes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: 'Checkboxes',
    });
    this.checkboxes = page.getByRole('checkbox');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/checkboxes');
  }

  async verifyPageIsDisplayed(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async checkFirstCheckbox(): Promise<void> {
    const firstCheckbox = this.checkboxes.nth(0);

    await firstCheckbox.check();
    await expect(firstCheckbox).toBeChecked();
  }

  async uncheckSecondCheckbox(): Promise<void> {
    const secondCheckbox = this.checkboxes.nth(1);

    await secondCheckbox.uncheck();
    await expect(secondCheckbox).not.toBeChecked();
  }
  async verifyInitialStates(): Promise<void> {
    const firstCheckbox = this.checkboxes.nth(0);
    const secondCheckbox = this.checkboxes.nth(1);

    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).toBeChecked();
  }
}
