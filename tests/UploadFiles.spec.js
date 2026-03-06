const { test, expect } = require ('@playwright/test');
const path = require('path');

test('Upload Files', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const uploadfile = page.locator('#singleFileInput');
    const filepath = path.join(__dirname, "../Data/text.txt");
    await uploadfile.setInputFiles(filepath);
    await page.waitForTimeout(2000);
    await uploadfile.setInputFiles([]);
    await page.waitForTimeout(2000);
    await expect(uploadfile).toBeEmpty();



})

test('Multiple Files Upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const multipleFiles = page.locator('#multipleFilesInput');
    const filepath1 = path.join(__dirname, "../Data/text.txt");
    const filepath2 = path.join(__dirname, "../Data/rajendar.txt");
    await multipleFiles.setInputFiles([filepath1, filepath2]);
    await page.waitForTimeout(2000);
    await multipleFiles.setInputFiles([]);
    await page.waitForTimeout(2000);
    await expect(multipleFiles).toBeEmpty();


})