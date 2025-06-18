const { test, expect } = require('@playwright/test');
const { performLogin } = require('../Utils/loginHelper.js');

test("Login Functionality ", async ({ page }) => {
    await performLogin(page);
    await expect(page).toHaveURL('https://www.fabriplay.com/dashboard');
    console.log("Login Successful");
});