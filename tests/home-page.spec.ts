import { test } from '../fixtures/testFixtures';

test(
  'verify application home page',
  {
    tag: ['@smoke', '@regression'],
  },
  async ({ homePage }) => {
    await homePage.navigate();
    await homePage.verifyMainHeading();
  }
);
