import { test } from '@playwright/test';
import { InputsPage } from '../pages/InputsPage';

test.describe('Input field tests', () => {
  test('enter and clear a numeric value', async ({ page }) => {
    const inputsPage = new InputsPage(page);

    await inputsPage.navigate();
    await inputsPage.verifyPageIsDisplayed();

    await inputsPage.enterNumber('25');
    await inputsPage.verifyInputValue('25');

    await inputsPage.clearInput();
  });
});