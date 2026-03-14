const {test, expect} = require('@playwright/test');

test('API Response Mocking', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByPlaceholder('email@example.com').fill('rajendarsagar2000@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Raju@123');
    await page.getByRole('button').click();
    
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/69abf372415d779f9b5f9de1', async route =>{
        //const response1 = await page.request.fetch(route.request());
        //console.log("Original Response:", response1);
        const response = await route.fetch();
        //console.log(response);
        //const josn = await response.json();
        let body = JSON.stringify({data:[], message:"No Orders"});
        console.log("Mocked Response Body:", body);
        await route.fulfill({
            response,
            body

        });

    })


    await page.getByRole('button', { name: 'ORDERS' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('You have No Orders to show at this time. Please Visit Back Us', { exact: true })).toBeVisible();

    await page.pause();
})