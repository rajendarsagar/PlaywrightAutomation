const { test, expect } = require('@playwright/test');
const path = require('path');

test('Full Page Screenshot', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page.getByLabel('Amazon.in', { exact: true })).toBeVisible();
    //await page.waitForLoadState('domcontentloaded',{timeout:5000});
    const filepath = path.join(__dirname, "../Screenshots/Fullpage.png");
    await page.screenshot({ path: filepath, timeout: 6000 });
    //await page.screenshot({ path: 'Screenshots/Fullpage.png', fullPage: true, maskColor: 'red', timeout: 5000 });
});
