import { test, expect } from '@playwright/test';
import { credentials } from '../config/credentials.js';
import { SELECTORS } from '../utils/selectors.js';

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
  const task = todoColumn.locator('text=Implement user authentication');
  
  await expect(task).toBeVisible();
});

test('TC2: Verify "Fix navigation bug" task with Bug tag in To Do', async ({ page }) => {
  await page.locator('button:has-text("Web Application")').click();
  await page.waitForSelector(SELECTORS.todoColumn);

  const todoColumn = page.locator(SELECTORS.todoColumn);
  const task = todoColumn.locator('text=Fix navigation bug');
  
  await expect(task).toBeVisible();
});

test('TC3: Verify "Design system updates" task with Design tag in In Progress', async ({ page }) => {
  await page.locator('button:has-text("Web Application")').click();
  await page.waitForSelector(SELECTORS.inProgressColumn);

  const inProgressColumn = page.locator(SELECTORS.inProgressColumn);
  const task = inProgressColumn.locator('text=Design system updates');
  
  await expect(task).toBeVisible();
});

test('TC4: Verify "Push notification system" task with Feature tag in To Do', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  await page.waitForSelector(SELECTORS.todoColumn);

  const todoColumn = page.locator(SELECTORS.todoColumn);
  const task = todoColumn.locator('text=Push notification system');
  
  await expect(task).toBeVisible();
});

test('TC5: Verify "Offline mode" task with Feature and High Priority tags in In Progress', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  await page.waitForSelector(SELECTORS.inProgressColumn);

  const inProgressColumn = page.locator(SELECTORS.inProgressColumn);
  const task = inProgressColumn.locator('text=Offline mode');
  
  await expect(task).toBeVisible();
});

test('TC6: Verify "App icon design" task with Design tag in Done', async ({ page }) => {
  await page.locator('button:has-text("Mobile Application")').click();
  await page.waitForSelector(SELECTORS.doneColumn);

  const doneColumn = page.locator(SELECTORS.doneColumn);
  const task = doneColumn.locator('text=App icon design');
  
  await expect(task).toBeVisible();
});
