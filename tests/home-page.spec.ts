import { test } from '../fixtures/testFixtures';

test('verify application home page', async ({ homePage }) => {
  await homePage.navigate();
  await homePage.verifyMainHeading();
});
