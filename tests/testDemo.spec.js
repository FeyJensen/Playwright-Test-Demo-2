import { test, expect } from '@playwright/test';
import { credentials } from '../config/credentials.js';
import { testData } from '../config/testData.js';
import { getColumnSelector, getTagSelector, getTaskCard } from '../utils/helpers.js';

test.beforeEach('Login and confirm login', async ({ page }) => {
  await page.goto(credentials.appUrl);
  await page.fill('#username', credentials.username);
  await page.locator('button[type="submit"]').click();
  await page.fill('#password', credentials.password);
  await page.click('button[type="submit"]');

  await page.waitForSelector('text=Main web application development');
  await expect(page.locator('text=Main web application development').nth(0)).toBeVisible();
});


testData.forEach((data) => {
  test(`${data.testId}: Verify "${data.task}" task with ${data.tags.join(' and ')} tag(s) in ${data.column}`, async ({ page }) => {
    // Navigate to projects
    await page.locator(`button:has-text("${data.project}")`).click();
    
    // Get the appropriate column
    const columnSelector = getColumnSelector(data.column); //gets the selector as a string
    await page.waitForSelector(columnSelector);
    const column = page.locator(columnSelector); //makes sure it's visible
    
    // Verify task exists in column
    const taskCard = getTaskCard(column, data.task);
    await expect(taskCard).toBeVisible();
    
    // Verify tags exist on the task
    for (const tag of data.tags) {
      const tagSelector = getTagSelector(tag);
      await expect(taskCard.locator(tagSelector)).toBeVisible();
    }
  });
});
