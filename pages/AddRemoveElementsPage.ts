import { expect, Locator, Page } from '@playwright/test';

export class AddRemoveElementsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly addElementButton: Locator;
  readonly deleteButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: 'Add/Remove Elements',
    });
    this.addElementButton = page.getByRole('button', {
      name: 'Add Element',
    });
    this.deleteButtons = page.getByRole('button', {
      name: 'Delete',
    });
  }

  async navigate(): Promise<void> {
    await this.page.goto('/add_remove_elements/');
  }

  async verifyPageIsDisplayed(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async addElement(): Promise<void> {
    await this.addElementButton.click();
  }

  async verifyDeleteButtonCount(expectedCount: number): Promise<void> {
    await expect(this.deleteButtons).toHaveCount(expectedCount);
  }

  async deleteFirstElement(): Promise<void> {
    await this.deleteButtons.first().click();
  }
}
