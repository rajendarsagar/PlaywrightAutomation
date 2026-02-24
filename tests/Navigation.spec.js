import {test, expect} from '@playwright/test';

//test.use({ headless: false });
test('Navigation', async({page})=> {
    await page.goto("https://www.saucedemo.com/");
    //await page.waitForTimeout(2000);
    await page.goBack();
    //await page.waitForTimeout(2000);
    await page.goForward();
    //await page.waitForTimeout(2000);
    await page.reload();

})
