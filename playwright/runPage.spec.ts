import { test, expect } from '@playwright/test';

test('should open the homepage', async ({ page }) => {
  await page.goto('');
  await expect(page.getByAltText('CSGO Kapsel Logo')).toBeVisible();
});

