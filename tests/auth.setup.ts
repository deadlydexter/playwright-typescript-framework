import { test as setup } from '@playwright/test';
import path from 'path';
import { getAuthCredentials } from '../config/environment';
import { LoginPage } from '../pages/LoginPage';

const authFile = path.resolve(process.cwd(), 'playwright/.auth/user.json');

setup('authenticate user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const credentials = getAuthCredentials();

  await loginPage.navigate();

  await loginPage.login(credentials.username, credentials.password);

  await loginPage.verifyLoginSucceeded();

  await page.context().storageState({
    path: authFile,
  });
});
