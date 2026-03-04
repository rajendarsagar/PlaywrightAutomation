const { test, expect } = require('@playwright/test');

test('Full Page Screenshot', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page.getByLabel('Amazon.in', { exact: true })).toBeVisible({ timeout: 5000 });
    //await page.waitForLoadState('domcontentloaded',{timeout:5000});
    await page.screenshot({ path: 'Screenshots/Fullpage.png', timeout: 5000 });
    //await page.screenshot({ path: 'Screenshots/Fullpage.png', fullPage: true, maskColor: 'red', timeout: 5000 });
});
