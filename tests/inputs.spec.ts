import { test } from '../fixtures/testFixtures';

test.describe('Input field tests', () => {
  test('enter and clear a numeric value', async ({ inputsPage }) => {
    await inputsPage.navigate();
    await inputsPage.verifyPageIsDisplayed();

    await inputsPage.enterNumber('25');
    await inputsPage.verifyInputValue('25');

    await inputsPage.clearInput();
  });
});