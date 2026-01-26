// @ts-check
import { test, expect } from '@playwright/test';

test.describe('solvative homepage', () => {
  test.use({baseURL: 'https://solvative.com'});

  test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(
      'Solvative | Driving Innovation with Full-Stack Solutions'
    );
  });
});
