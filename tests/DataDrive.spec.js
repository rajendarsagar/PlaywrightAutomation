const {test, expect} = require('@playwright/test');
const LoginPage = require('../PomClass/LoginPage.js');
const testdata = require('../Data/Testdata.json');

const TEST_TYPES = {
  VALID: 'Valid',
  INVALID: 'Invalid'
};

testdata.forEach((data) => {
  test(`Login with user: ${data.userName}`, async ({page}) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login(data.userName, data.password);
    
    if (data.type === TEST_TYPES.VALID) {
      await expect(loginPage.successHeading).toBeVisible({ timeout: 5000 });
    } else {
      await expect(loginPage.errorMessage).toBeVisible({ timeout: 5000 });
    }
  });
});