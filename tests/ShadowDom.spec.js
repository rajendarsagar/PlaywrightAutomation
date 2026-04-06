const {test, expect} = require ('@playwright/test');

test('Shadow DOM Text Field', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('load');

    const shadowHost = page.locator('#shadow_host');
    await expect(shadowHost).toBeVisible();
    await shadowHost.scrollIntoViewIfNeeded();
    await shadowHost.locator("input[type='text']").fill('Test Automation');
    expect(await shadowHost.locator("input[type='text']").inputValue()).toBe('Test Automation');




})

test('Shadow DOM Check Box', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('load');

    const shadowHost = page.locator('#shadow_host');
    await expect(shadowHost).toBeVisible();
    await shadowHost.scrollIntoViewIfNeeded();
    await shadowHost.locator("input[type='checkbox']").check();
    expect(await shadowHost.locator("input[type='checkbox']").isChecked()).toBeTruthy();
})