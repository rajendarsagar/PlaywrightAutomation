import {test ,expect } from '@playwright/test';

test('click', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('button',{ name: 'Copy Text'}).dblclick();
    const field1value = await page.locator('#field1').innerText();
    const field2value = await page.locator('#field2').innerText();

    expect(field1value).toBe(field2value);

})