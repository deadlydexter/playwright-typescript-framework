import { test } from '../fixtures/testFixtures';
import { inputTestData } from '../test-data/inputData';

test.describe('Input field tests', () => {
  test('enter, replace, and clear a numeric value', async ({ inputsPage }) => {
    await inputsPage.navigate();
    await inputsPage.verifyPageIsDisplayed();

    await inputsPage.enterNumber(inputTestData.validNumber);
    await inputsPage.verifyInputValue(inputTestData.validNumber);

    await inputsPage.enterNumber(inputTestData.replacementNumber);
    await inputsPage.verifyInputValue(inputTestData.replacementNumber);

    await inputsPage.clearInput();
    await inputsPage.verifyInputValue(inputTestData.emptyValue);
  });
});