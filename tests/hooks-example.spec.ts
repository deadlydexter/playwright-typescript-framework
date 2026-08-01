import { test, expect } from '../fixtures/testFixtures';

test.describe('Test hooks example', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate();
    });

    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status !== testInfo.expectedStatus) {
            await page.screenshot({
                path: testInfo.outputPath('failure.png'),
                fullPage: true,
            });
        }
    });

    test('verify home page title', async ({ page }) => {
        await expect(page).toHaveTitle(/The Internet/);
    });

    test('verify home page heading', async ({ homePage }) => {
        await homePage.verifyMainHeading();
    });
});