import { test, expect } from '@playwright/test';
import { credentials } from '../config/credentials.js';
import { SELECTORS } from '../utils/selectors.js';

const getTaskCard = (column, title) =>
  column.locator(`div.bg-white.p-4.rounded-lg.shadow-sm.border.border-gray-200:has-text("${title}")`); 

test.beforeEach('Login', async ({ page }) => {
  await page.goto(credentials.appUrl);
  await page.fill('#username', credentials.username);
  await page.fill('#password', credentials.password);
  await page.click('button[type="submit"]');

  await page.waitForSelector('text=Main web application development');
  await expect(page.locator('text=Main web application development').nth(0)).toBeVisible();
});

test('TC1: Verify "Implement user authentication" task with Feature and High Priority tags in To Do', async ({ page }) => {
  await page.locator('button:has-text("Web Application")').click();
  await page.waitForSelector(SELECTORS.todoColumn);

  const todoColumn = page.locator(SELECTORS.todoColumn);
  await expect(todoColumn.locator('text=Implement user authentication')).toBeVisible();

  const taskCard = getTaskCard(todoColumn, 'Implement user authentication');
  await expect(taskCard.locator(SELECTORS.featureTag)).toBeVisible();
  await expect(taskCard.locator(SELECTORS.highPriorityTag)).toBeVisible();

});

test('TC2: Verify "Fix navigation bug" task with Bug tag in To Do', async ({ page }) => {
  await page.locator('button:has-text("Web Application")').click();
  await page.waitForSelector(SELECTORS.todoColumn);

  const todoColumn = page.locator(SELECTORS.todoColumn);
  await expect(todoColumn.locator('text=Fix navigation bug')).toBeVisible();

  const taskCard = getTaskCard(todoColumn, 'Fix navigation bug');
  await expect(taskCard.locator(SELECTORS.bugTag)).toBeVisible();
});

test('TC3: Verify "Design system updates" task with Design tag in In Progress', async ({ page }) => {
  await page.locator('button:has-text("Web Application")').click();
  await page.waitForSelector(SELECTORS.inProgressColumn);

  const inProgressColumn = page.locator(SELECTORS.inProgressColumn);
  await expect(inProgressColumn.locator('text=Design system updates')).toBeVisible();

  const taskCard = getTaskCard(inProgressColumn, 'Design system updates');
  await expect(taskCard.locator(SELECTORS.designTag)).toBeVisible();
});

test('TC4: Verify "Push notification system" task with Feature tag in To Do', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  await page.waitForSelector(SELECTORS.todoColumn);

  const todoColumn = page.locator(SELECTORS.todoColumn);
  const taskCard = getTaskCard(todoColumn, 'Push notification system');
  
  await expect(taskCard).toBeVisible();
  await expect(taskCard.locator(SELECTORS.featureTag)).toBeVisible();
});

test('TC5: Verify "Offline mode" task with Feature and High Priority tags in In Progress', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  await page.waitForSelector(SELECTORS.inProgressColumn);

  const inProgressColumn = page.locator(SELECTORS.inProgressColumn);
  const taskCard = getTaskCard(inProgressColumn, 'Offline mode');
  
  await expect(taskCard).toBeVisible();
  await expect(taskCard.locator(SELECTORS.featureTag)).toBeVisible();
  await expect(taskCard.locator(SELECTORS.highPriorityTag)).toBeVisible();
});

test('TC6: Verify "App icon design" task with Design tag in Done', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  await page.waitForSelector(SELECTORS.doneColumn);

  const doneColumn = page.locator(SELECTORS.doneColumn);
  const taskCard = getTaskCard(doneColumn, 'App icon design');
  
  await expect(taskCard).toBeVisible();
  await expect(taskCard.locator(SELECTORS.designTag)).toBeVisible();
});
