const { test } = require('@playwright/test');
const { buildTestContext } = require('../Utils/initObjects.js');    
const { performLogin } = require('../Utils/loginHelper.js');
const { Navbar } = require('../Pages/Navbar.js');

const createOrder = async (page) => {
    const { browserActionObject, navbarLocators } = await buildTestContext(page);
    const navbarObject = new Navbar(browserActionObject, navbarLocators);
    await navbarObject.clickOrderstab();
};

test("Create Order Functionality", async ({ page }) => {
    await performLogin(page);
    await createOrder(page);
});
