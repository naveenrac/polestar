const { test, expect } = require('@playwright/test');

 test('Url has text', async(page) => {
  const browser = await chromium.launch({ headless: false });  // Set headless to false.
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.polestar.com/global/developer/get-started/');
    await page.click('button:text("Accept all")');
    await page.pause()
  
});

// test('Menu navigation', async(page) => {
 
//   await page.click("span  svg[aria-label='menu']");
//   await page.click("//span[contains(text(),'Polestar 2')")
//   await page.click("span[text(),'Discover Polestar 2']");
//   // Expects page to have a heading with the name of Installation.
//   //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
