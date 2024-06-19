import test from "@playwright/test";

test('スクリーンショット', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'screenshot.png' , fullPage: true});
})

test('スクリーンショット2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).screenshot({ path: 'screenshot-element.png' });
})