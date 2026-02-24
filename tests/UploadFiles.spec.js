const{test, expect} = require('@playwright/test');

test('Upload Files', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const uploadfile = page.locator('#singleFileInput');
    const filepath = "C:\\Users\\DELL\\OneDrive\\Desktop";
   await uploadfile.setInputFiles(filepath + "\\github.txt");
   //await uploadfile.setInputFiles(path.json(__dirname, "github.txt"));
    await page.waitForTimeout(2000);
    await uploadfile.setInputFiles([]);
    await page.waitForTimeout(2000);
    await expect(uploadfile).toBeEmpty();



})

test('Multiple Files Upload', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const multipleFiles = page.locator('#multipleFilesInput');
    const filepath1 = "C:\\Users\\DELL\\OneDrive\\Desktop";
    const filepath2 = "C:\\Users\\DELL\\OneDrive\\Desktop";
   await multipleFiles.setInputFiles([filepath1 + "\\github.txt", filepath2 + "\\rajendar.txt"]);
    await page.waitForTimeout(2000);
    await multipleFiles.setInputFiles([]);
    await page.waitForTimeout(2000);
    await expect(multipleFiles).toBeEmpty();


})