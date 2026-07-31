import { expect, Locator, Page } from '@playwright/test';

export class DropdownPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly dropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', {
            name: 'Dropdown List',
        });
        this.dropdown = page.locator('#dropdown');
    }

    async navigate(): Promise<void> {
        await this.page.goto('/dropdown');
    }

    async verifyPageIsDisplayed(): Promise<void> {
        await expect(this.heading).toBeVisible();
    }

    async verifyDefaultOption(): Promise<void> {
        await expect(this.dropdown).toHaveValue('');
    }

    async selectOptionByLabel(optionLabel: string): Promise<void> {
        await this.dropdown.selectOption({ label: optionLabel });
    }

    async selectOptionByValue(optionValue: string): Promise<void> {
        await this.dropdown.selectOption(optionValue);
    }

    async verifySelectedValue(expectedValue: string): Promise<void> {
        await expect(this.dropdown).toHaveValue(expectedValue);
    }
}