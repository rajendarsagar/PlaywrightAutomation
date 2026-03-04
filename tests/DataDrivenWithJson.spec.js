const {test, expect} = require ('@playwright/test');
const LoginPage = require('../PomClass/LoginPage.js');
const fs = require('fs');


//const jsonpath = require('path').join(__dirname, '../Data/Testdata.json');
const jsonpath = 'Data/Testdata.json';
const logindata = JSON.parse(fs.readFileSync(jsonpath, 'utf-8'));

test('Data Driven Test with Json-fs', async({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    for(const {userName, password, type} of logindata ){
        await loginPage.login(userName, password);
        if(type === 'Valid'){
            await expect(loginPage.successHeading).toBeVisible({timeout:5000});
        } else {
            await expect(loginPage.errorMessage).toBeVisible({timeout:5000});
        }
        await page.goto(loginPage.url);

    }

})