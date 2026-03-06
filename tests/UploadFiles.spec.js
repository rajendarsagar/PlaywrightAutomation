const { test, expect } = require ('@playwright/test');

test('Upload Files', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const uploadfile = page.locator('#singleFileInput');
    const filepath = "E:\\PlaywrightAutomation\\Data";
    await uploadfile.setInputFiles(filepath + "\\text.txt");
    //await uploadfile.setInputFiles(path.json(__dirname, "github.txt"));
    await page.waitForTimeout(2000);
    await uploadfile.setInputFiles([]);
    await page.waitForTimeout(2000);
    await expect(uploadfile).toBeEmpty();



})

test('Multiple Files Upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const multipleFiles = page.locator('#multipleFilesInput');
    const filepath1 = "E:\\PlaywrightAutomation\\Data";
    const filepath2 = "E:\\PlaywrightAutomation\\Data";
    await multipleFiles.setInputFiles([filepath1 + "\\text.txt", filepath2 + "\\rajendar.txt"]);
    await page.waitForTimeout(2000);
    await multipleFiles.setInputFiles([]);
    await page.waitForTimeout(2000);
    await expect(multipleFiles).toBeEmpty();


})