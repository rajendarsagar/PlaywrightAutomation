const {test, expect} = require('@playwright/test');

test('Abort the Images and Css', async({page})=>{

    let successAPIList = [];
    let failedAPIList = [];
    let tokenFieldAPIList = [];
    
    //await page.route('**/*.{png,jpg,jpeg,css}',route=> route.abort());
    
    page.on('response', async response => {
    const contentType = response.headers()['content-type'] || '';

    if (response.status() < 400) {
        successAPIList.push(response.url());

        if (contentType.includes('application/json')) {
            try {
                const jsonResponse = await response.json();
                if (jsonResponse.token != null) {
                    tokenFieldAPIList.push(response.url());
                }
            } catch (e) {
                // not valid JSON despite content-type header
            }
        }
    } else {
        failedAPIList.push(response.url());
    }
});

    await page.goto('https://solvative.com/');
    await page.waitForLoadState('load');

    //await page.pause();
    console.log('Success API List: ', successAPIList);
    console.log('Failed API List: ', failedAPIList);
    console.log('Token Field API List: ', tokenFieldAPIList);
})