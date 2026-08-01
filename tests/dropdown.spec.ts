import { test } from '../fixtures/testFixtures';

test.describe('Dropdown tests', () => {
  test('select dropdown options by label and value', async ({ dropdownPage }) => {
    await dropdownPage.navigate();
    await dropdownPage.verifyPageIsDisplayed();
    await dropdownPage.verifyDefaultOption();

    await dropdownPage.selectOptionByLabel('Option 1');
    await dropdownPage.verifySelectedValue('1');

    await dropdownPage.selectOptionByValue('2');
    await dropdownPage.verifySelectedValue('2');
  });
});