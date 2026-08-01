import { test } from '../fixtures/testFixtures';

test.describe('Button tests', () => {
  test('add and remove elements using buttons', async ({
    addRemoveElementsPage,
  }) => {
    await addRemoveElementsPage.navigate();
    await addRemoveElementsPage.verifyPageIsDisplayed();

    await addRemoveElementsPage.verifyDeleteButtonCount(0);

    await addRemoveElementsPage.addElement();
    await addRemoveElementsPage.verifyDeleteButtonCount(1);

    await addRemoveElementsPage.addElement();
    await addRemoveElementsPage.verifyDeleteButtonCount(2);

    await addRemoveElementsPage.deleteFirstElement();
    await addRemoveElementsPage.verifyDeleteButtonCount(1);
  });
});