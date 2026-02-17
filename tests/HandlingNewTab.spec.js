const { test, expect } = require('@playwright/test');

test('Handling New Tab ', async ({ context }) => {
    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Approach 1

    /*
     const pagePromise = context.waitForEvent('page');
     await page.getByRole('button', { name: 'New Tab' }).click();
     const newPage = await pagePromise;
 
     const newPageTitle = await newPage.title();
     expect(newPageTitle).toBe('SDET-QA Blog');
     */

    //Approach 2 - not recommended as it is not handling the timing issue

    /*
    await page.getByRole('button', { name:'New Tab' }).click();
    context.on('page', async page => {
        await page.waitForLoadState();
        const title = await page.title();
        console.log(title);

    })
    */
   
    //Approach 3  - recommended

    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        page.getByRole('button', { name: 'New Tab' }).click()
    ])
    const title = await newPage.title();
    console.log(title);



})