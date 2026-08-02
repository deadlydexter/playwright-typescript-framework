import { test } from '../fixtures/testFixtures';
import { inputScenarios } from '../test-data/inputScenarios';

test.describe('Data-driven input tests', () => {
  for (const scenario of inputScenarios) {
    test(`accepts ${scenario.testName}`, async ({ inputsPage }) => {
      await test.step('Navigate to the inputs page', async () => {
        await inputsPage.navigate();
        await inputsPage.verifyPageIsDisplayed();
      });

      await test.step(`Enter value: ${scenario.value}`, async () => {
        await inputsPage.enterNumber(scenario.value);
      });

      await test.step(`Verify input contains: ${scenario.value}`, async () => {
        await inputsPage.verifyInputValue(scenario.value);
      });
    });
  }
});