import { test as setup } from '@playwright/test';
import path from 'path';
import { environmentConfig } from '../config/environment';
import { LoginPage } from '../pages/LoginPage';

const authFile = path.resolve(
    process.cwd(),
    'playwright/.auth/user.json'
);

setup('authenticate user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        environmentConfig.authUsername,
        environmentConfig.authPassword
    );

    await loginPage.verifyLoginSucceeded();

    await page.context().storageState({
        path: authFile,
    });
});