const { test, expect, chromium } = require('@playwright/test');

test('bootstrap Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('textbox', { name: 'Select an item' }).scrollIntoViewIfNeeded();

    await page.getByRole('textbox', { name: 'Select an item' }).click();
    //await page.getByText('Item 1', { exact: true }).click();


    await page.getByText('Item 100', { exact: true }).click();
    await page.pause();
    await expect(page.getByRole('textbox', { name: 'Select an item' })).toHaveValue('Item 100');

})

test('Select Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('combobox', { name: 'Country:' }).scrollIntoViewIfNeeded();
    //await page.getByRole('combobox', { name: 'Country:' }).selectOption('Canada');
    //await page.getByRole('combobox', { name: 'Country:' }).selectOption({label: 'Canada'});
    //await page.getByRole('combobox', { name: 'Country:' }).selectOption({value: 'canada'});
    await page.getByRole('combobox', { name: 'Country:' }).selectOption({ index: 1 });
    const selectedValue = await page.getByRole('combobox', { name: 'Country:' }).inputValue();
    expect(selectedValue).toBe('canada');

})

test('Multi select', async ({page}) => {

    await page.setViewportSize({width: 1920 , height: 1080, });
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByLabel('Colors:', { exact: true }).scrollIntoViewIfNeeded();
    await page.getByLabel('Colors:', { exact: true }).selectOption(['Red', 'Blue', 'Yellow']);
    //await page.getByLabel('Colors:', { exact: true }).selectOption([]); // clear the selected options.
    // await page.getByLabel('Colors:', { exact: true }).blur();
    await page.pause();




})