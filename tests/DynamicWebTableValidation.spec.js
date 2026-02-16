const { test, expect } = require('@playwright/test');

test("Dynamic Web Table Validation", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const tabledata = await page.locator('#taskTable').locator('tbody');
    const rows = await tabledata.locator("tr").all();




    //page.locator('#taskTable').locator('tbody').locator('tr').first().locator('td').first()

    const chromeCpuLoad = await page.locator('.chrome-cpu').innerText();
    const fireFoxMemorySize = await page.locator('.firefox-memory').innerText();
    const chromeSpeed = await page.locator('.chrome-network').textContent();;
    const firFoxDiskSpace = await page.locator('.firefox-disk').textContent();

    let tableChromeCpuLoad = '';
    let tableFireFoxMemorySize = '';
    let tableChromeSpeed = '';
    let tableFirFoxDiskSpace = '';

    for (const row of rows) {
        let browserName = await row.locator("td").first().textContent();
        if (browserName === "Chrome") {
            tableChromeCpuLoad = await row.locator("td", { hasText: '%' }).textContent();
            tableChromeSpeed = await row.locator("td", { hasText: 'Mbps' }).textContent();
            continue;

        }
        else if (browserName === "Firefox") {
            tableFireFoxMemorySize = await row.locator("td", { hasText: ' MB' }).textContent();
            tableFirFoxDiskSpace = await row.locator("td", { hasText: 'MB/s' }).textContent();
            continue;

        }
    }
    expect(chromeCpuLoad).toBe(tableChromeCpuLoad);
    expect(fireFoxMemorySize).toBe(tableFireFoxMemorySize);
    expect(chromeSpeed).toBe(tableChromeSpeed);
    expect(firFoxDiskSpace).toBe(VtableFirFoxDiskSpacealue);






});
