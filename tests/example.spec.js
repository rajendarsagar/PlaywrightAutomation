// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://solvative.com');
  await expect(page).toHaveTitle(
    'Solvative | Driving Innovation with Full-Stack Solutions'
  );
});