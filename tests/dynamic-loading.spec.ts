import { test } from '../fixtures/testFixtures';

test.describe('Dynamic loading', () => {
  test('waits for dynamically loaded content', async ({ dynamicLoadingPage }) => {
    await dynamicLoadingPage.navigate();
    await dynamicLoadingPage.startLoading();
    await dynamicLoadingPage.verifyResult();
  });
});
