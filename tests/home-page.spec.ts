import { test, expect } from '@playwright/test';

test('verify Playwright home page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/The Internet/);

  const mainHeading = page.getByRole('heading', { level: 1 });

  await expect(mainHeading).toHaveText('Welcome to the-internet');
});