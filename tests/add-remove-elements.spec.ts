import { test } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';

test.describe('Button tests', () => {
  test('add and remove elements using buttons', async ({ page }) => {
    const addRemoveElementsPage = new AddRemoveElementsPage(page);

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