const { test, expect } = require('@playwright/test');

test("Dynamic Web Table Validation", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const tabledata = await page.locator('#taskTable').locator('tbody');
    const rows = await tabledata.locator("tr").all();




    //page.locator('#taskTable').locator('tbody').locator('tr').first().locator('td').first()

    const chromeCpuLoad = await page.locator('.chrome-cpu').innerText();
    const fireFoxMemorySize = await page.locator('.firefox-memory').innerText();
    console.log(fireFoxMemorySize);
    const chromeSpeed = await page.locator('.chrome-network').textContent();;
    const fireFoxDiskSpace = await page.locator('.firefox-disk').textContent();

    let tableChromeCpuLoad = '';
    let tableFireFoxMemorySize = '';
    let tableChromeSpeed = '';
    let tableFireFoxDiskSpace = '';

    for (const row of rows) {
        let browserName = await row.locator("td").first().textContent();
        if (browserName === "Chrome") {
            tableChromeCpuLoad = await row.locator("td", { hasText: '%' }).textContent();
            tableChromeSpeed = await row.locator("td", { hasText: 'Mbps' }).textContent();
            continue;

        }
        else if (browserName === "Firefox") {
            //tableFireFoxMemorySize = await row.locator("td", { hasText: ' MB' }).textContent();
            let text = ' ',txt =' ';
            for (let i = 1; i < await row.locator("td").count(); i++) {
                text = await row.locator('td').nth(i).textContent();
                txt = text.split(' ')[1];
                //console.log(txt);
                if (txt ==='MB') {

                    tableFireFoxMemorySize = text;  
                    //console.log(tableFireFoxMemorySize);

                }

            }
            tableFireFoxDiskSpace = await row.locator("td", { hasText: 'MB/s' }).textContent();
            continue;

        }
    }
    expect(tableChromeCpuLoad).toBe(chromeCpuLoad);
    expect(tableFireFoxMemorySize).toBe(fireFoxMemorySize);
    expect(tableChromeSpeed).toBe(chromeSpeed);
    expect(tableFireFoxDiskSpace).toBe(fireFoxDiskSpace);

    //page.waitForTimeout(3000);








});
