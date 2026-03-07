const { test, expect, request } = require('@playwright/test');
const { ApiUtils } = require('../ApiUtilis/ApiUtils.js');

const loginPayLoad = {
            userEmail: "rajendarsagar2000@gmail.com",
            userPassword: "Raju@123"
        };

const orderPayLoad = {
            orders:
                [
                    {
                        country: "India",
                        productOrderedId: "6960eac0c941646b7a8b3e68"
                    }
                ]
        };


test.describe.configure({ mode: 'serial' });

test("verify the order id and it's details", async({page})=>{
    const apiUtils = new ApiUtils(request);
    const token = await apiUtils.getToken(loginPayLoad);
    const orderid = await apiUtils.getOrderId(orderPayLoad,loginPayLoad);
    console.log("Order ID to search:", orderid);
    await page.addInitScript(value=>{
        window.localStorage.setItem('token', value);
    }, token)
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByRole('button', { name: 'ORDERS' }).click();
    await page.waitForLoadState('networkidle');
    const totalrows = await page.locator('tbody tr');
    const rowCount = await totalrows.count();
    console.log("Total rows found:", rowCount);
    
    for (let i=0; i < rowCount; i++){
        const rowOrderIdText = await page.locator('tbody tr').nth(i).locator('th').textContent();
        console.log(`Row ${i} Order ID:`, rowOrderIdText.trim());
        
        if (rowOrderIdText.trim() === orderid){
            console.log("Match found! Clicking view button for row:", i);
            await page.locator('tbody tr').nth(i).getByRole('button', { name: 'View' }).click();
            break;
        }
    }
    await expect(page.getByText('order summary')).toBeVisible();

})