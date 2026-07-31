import { test, expect } from '@playwright/test';

test('verify Playwright home page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  const mainHeading = page.getByRole('heading', { level: 1 });

  await expect(mainHeading).toHaveText(
    'Playwright enables reliable web automation for testing, scripting, and AI agents.'
  );
});