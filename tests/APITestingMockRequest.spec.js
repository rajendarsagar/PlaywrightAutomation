const { test, expect } = require('@playwright/test');


test('API Request Mocking', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByPlaceholder('email@example.com').fill('rajendarsagar2000@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Raju@123');
    await page.getByRole('button').click();
    await page.getByRole('button', { name: 'ORDERS' }).click();
    await page.waitForLoadState('networkidle');
    




    const response = await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?*', async route => {
        const url = 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6960eac0c941646b7a8b3e68';
        route.continue({ url });

    });

    await page.locator('button').filter({ hasText: 'View' }).first().click();  
    await expect(page.getByText('You are not authorize to view')).toBeVisible();
    await page.pause();



})