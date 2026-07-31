import { test } from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

test('select and clear checkboxes', async ({ page }) => {
  const checkboxesPage = new CheckboxesPage(page);

  await checkboxesPage.navigate();
  await checkboxesPage.verifyPageIsDisplayed();
  await checkboxesPage.verifyInitialStates();
  await checkboxesPage.checkFirstCheckbox();
  await checkboxesPage.uncheckSecondCheckbox();
});