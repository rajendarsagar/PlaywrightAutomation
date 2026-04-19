const {test} = require('@playwright/test');

test('HTML Elements', async({page}) => {

   await page.goto('https://testautomationpractice.blogspot.com/');
    const htmlContent = await page.content();
    console.log(htmlContent);
    

    //console.log (await page.opener());




})