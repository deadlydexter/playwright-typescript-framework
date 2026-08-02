import { test } from '../fixtures/testFixtures';

test.describe('Checkbox tests', () => {
  test('select and clear checkboxes', async ({ checkboxesPage }) => {
    await checkboxesPage.navigate();
    await checkboxesPage.verifyPageIsDisplayed();
    await checkboxesPage.verifyInitialStates();
    await checkboxesPage.checkFirstCheckbox();
    await checkboxesPage.uncheckSecondCheckbox();
  });
});
