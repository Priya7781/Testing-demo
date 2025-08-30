const { test, expect } = require('@playwright/test');

test('Client App Login Test', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.google.com/');

    // // Fill in the login form
    // await page.fill('#userName', 'anshika@gmail.com');
    // await page.fill('#userPassword', 'Iamking@000');

    // // Click the login button
    // await page.click("[value='Login']");
    // await page.waitForLoadState('networkidle');
});