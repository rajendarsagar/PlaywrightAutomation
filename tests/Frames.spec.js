const {test, expect} = require('@playwright/test');

test('First Frame Handling', async({page})=> {
    // Frame 1
    await page.goto('https://practice.expandtesting.com/iframe');
    await page.waitForLoadState('load');
    const frame1 = page.frameLocator('#mce_0_ifr');
    const textbox = frame1.getByText('Your content goes here.', { exact : true });
    await expect(textbox).toBeVisible();
    //await page.waitForTimeout(2000);
    //await textbox.fill('Welcome to Playwright'); // restriction from website need premium account to fill the text box.



    
})
test('Second Frame Handling', async({page})=> {
    await page.goto('https://practice.expandtesting.com/iframe');
    await page.waitForLoadState('load');
    const frmapage = page.frameLocator('#email-subscribe');
    const email = frmapage.locator('#email');
    await expect(email).toBeVisible();
    await email.fill("Hello@gmail.com");
    await page.waitForTimeout(2000);
})

