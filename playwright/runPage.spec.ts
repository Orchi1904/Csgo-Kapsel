import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test('should open the homepage #1', async ({ page }) => {
  await expect(page.getByAltText('CSGO Kapsel Logo')).toBeVisible();
});

test('should open the homepage #2', async ({ page }) => {
  await expect(page.getByAltText('CSGO Kapsel Logo')).toBeVisible();
});

test('should open the homepage #3', async ({ page }) => {
  await expect(page.getByAltText('CSGO Kapsel Logo')).toBeVisible();
});

test('should open the homepage #4', async ({ page }) => {
  await expect(page.getByAltText('CSGO Kapsel Logo')).toBeVisible();
});

test('should open the homepage #5', async ({ page }) => {
  await expect(page.getByAltText('CSGO Kapsel Logo')).toBeVisible();
});

