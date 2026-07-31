import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('verify application home page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.verifyMainHeading();
});