const {test, expect} = require('@playwright/test');

test('Abort the Images and Css', async({page})=>{

    
    //await page.route('**/*.{png,jpg,jpeg,css}',route=> route.abort());
    
    page.on('response', response => {
        console.log(response.url(), response.status());
    });
    await page.goto('https://solvative.com/');
    await page.waitForLoadState('networkidle');

    //await page.pause();
})