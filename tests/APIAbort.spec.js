const {test, expect} = require('@playwright/test');

test('Abort the Images and Css', async({page})=>{

    
    await page.route('**/*.{png,jpg,jpeg,css}',route=> route.abort());
    await page.goto('https://solvative.com/');

    await page.pause();
})