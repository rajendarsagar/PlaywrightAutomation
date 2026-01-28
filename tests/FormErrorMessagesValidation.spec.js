const { test, expect } = require('@playwright/test');
const { FormValidation } = require('../PomClass/FormValidation');

test.describe('Form Error Messages Validation Tests', () => {
    
    test('Validate Form Error Messages on Home Page', async ({page}) => {
        const formValidationInstance = new FormValidation(page);
        await page.goto('https://solvative.com/');
        await formValidationInstance.validateNameError();
        await page.locator('div.col-lg-7.mb-20.mr-20').scrollIntoViewIfNeeded();

        await expect(formValidationInstance.name).toHaveText('Name is required');
        await expect(formValidationInstance.email).toHaveText('Email is required');
        await expect(formValidationInstance.message).toHaveText('Message cannot be empty');
        await expect(formValidationInstance.aboutDropdown).toHaveText('Please select what this is about');
        console.log("Form Error Messages Validated Successfully on Home Page");

    }
    );
    test('Validate Form Error Messages on Contact-Us Page', async ({page}) => {
        const formValidationInstance = new FormValidation(page);
        await page.goto('https://solvative.com/contact-us/');
        await formValidationInstance.validateNameError();
        await page.locator('div.col-lg-7.mb-20.mr-20').scrollIntoViewIfNeeded();

        await expect(formValidationInstance.name).toHaveText('Name is required');
        await expect(formValidationInstance.email).toHaveText('Email is required');
        await expect(formValidationInstance.message).toHaveText('Message cannot be empty');
        await expect(formValidationInstance.aboutDropdown).toHaveText('Please select what this is about');
        console.log("Form Error Messages Validated Successfully on Contact-Us Page");

    }

    );
});