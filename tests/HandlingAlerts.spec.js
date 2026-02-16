const { test, expect } = require('@playwright/test');

test("Handling Simple Alert", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog", async (dialog) => {
        dialog.accept();
        console.log(dialog.message());
    });
    await page.getByRole('button', { name: 'Simple Alert' }).click();


})

test("Handling Confirmation Alert", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog", async (dialog) => {
        dialog.dismiss();
        console.log(dialog.message());
    });
    await page.getByRole('button', { name: 'Confirmation Alert' }).click();

})

test("Handling Prompt Alert", async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog", async (dialog) => {
        console.log(dialog.defaultValue());
        dialog.accept('Playwright');
        //dialog.inputValue();
        console.log(dialog.type());
        console.log(dialog.message());
    });
    await page.getByRole('button', { name: 'Prompt Alert' }).click();

})