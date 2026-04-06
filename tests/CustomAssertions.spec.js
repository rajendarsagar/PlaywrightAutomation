const {test, expect} = require('@playwright/test');

test.describe('Custom Assertions',()=>{
    const softExpect = expect.configure({timeout:5000, soft : true});

test('Custom Assertion Test',async({page})=>{

    
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('load');

    await softExpect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    await softExpect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toHaveText('Automation Testing Practice');
    await softExpect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toHaveCount(1);


})
})

