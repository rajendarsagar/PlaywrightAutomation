import {test, expect} from '@playwright/test';

test('Darg And Drop', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const source = page.getByText('Drag me to my target');
    const target = page.getByText('Drop here', { exact: true });

    await source.dragTo(target);

})