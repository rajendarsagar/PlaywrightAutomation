import {test, expect} from '@playwright/test';

test.only('Darg And Drop', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const source = page.getByText('Drag me to my target');
    const target = page.getByText('Drop here', { exact: true });

    //Approach 1
    //await source.dragTo(target);

    //Approach 2
    await source.hover();
    await page.mouse.down();
    await target.hover();
    await page.mouse.up();




})