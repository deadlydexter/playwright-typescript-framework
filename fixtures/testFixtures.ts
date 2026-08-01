import { test as base, expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';
import { CheckboxesPage } from '../pages/CheckboxesPage';
import { DropdownPage } from '../pages/DropdownPage';
import { HomePage } from '../pages/HomePage';
import { InputsPage } from '../pages/InputsPage';

type PageFixtures = {
    homePage: HomePage;
    checkboxesPage: CheckboxesPage;
    dropdownPage: DropdownPage;
    inputsPage: InputsPage;
    addRemoveElementsPage: AddRemoveElementsPage;
};

export const test = base.extend<PageFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    checkboxesPage: async ({ page }, use) => {
        await use(new CheckboxesPage(page));
    },

    dropdownPage: async ({ page }, use) => {
        await use(new DropdownPage(page));
    },

    inputsPage: async ({ page }, use) => {
        await use(new InputsPage(page));
    },

    addRemoveElementsPage: async ({ page }, use) => {
        await use(new AddRemoveElementsPage(page));
    },
});

export { expect };