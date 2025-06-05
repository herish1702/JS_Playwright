const {test} = require('@playwright/test');
const {LoginPageLocators} = require('../Locators/LoginPageLocator.js');
const {NavbarLocators} = require('../Locators/NavbarLocator.js');
const {ClientPageLocators} = require('../Locators/ClientPageLocator.js');
const {browserAction} = require('../Browser_Action/Browser_Action.js');
const {StaticData,LoginData} = require('../Data/Data.js');


const login = async (browserActionObject)=> {
    await browserActionObject.performGoToAction(StaticData.baseUrl);
    await browserActionObject.performFillAction(LoginPageLocators.testEnvironmentLogin.usernameField,LoginData.adminLogin.userName);
    await browserActionObject.performFillAction(LoginPageLocators.testEnvironmentLogin.passwordField,LoginData.adminLogin.password);
    await browserActionObject.performClickAction(LoginPageLocators.testEnvironmentLogin.loginButton);
    await console.log("Login Successfully")
};

const add_client = async(browserActionObject) => {
    // let browserActionObject = new browserAction(page);
    await browserActionObject.performClickAction(NavbarLocators.testEnvironmentLogin.clientCta);
    await browserActionObject.performClickAction(ClientPageLocators.testEnvironmentLogin.addClientCta);
    // await page.locator("").click()
    // await page.locator("").fill("Admin Client fhg")
    // await page.locator("").click()
    // await page.locator("[type='search']").click()
    // await page.locator("[type='search']").fill("Admin Client fhg")
    // await page.locator("").click()
    // await page.locator("").click()
    // await page.locator("").click()
    // await page.locator("[type='search']").fill("Admin Client fhg")
};

const add_project = async(page) => {
    let browserActionObject = new browserAction(page);
    await page.locator("[href='/admin/clients']").click()
    await page.locator("//button[text()='Projects']").click()
    await page.locator("//button[text()=' Add Project']").click()
    await page.locator("#projectName").fill("Admin Project")
    await page.locator("//span[text()='Select Option']").click()
    await page.locator('[placeholder="Search..."]').fill("Admin Client fhg")
    await page.locator("//span[text()='Admin Client fhg']").click()
    await page.locator("#startDate").fill("2025-10-01")
    await page.locator("#endDate").fill("2025-10-31")
    await page.locator("//button[text()='Save']").click()
    await page.locator("[type='search']").click()
    await page.locator('[placeholder="Search"]').fill("Admin Project")
}

const add_user = async (page)=>{
    await page.locator("[href='/admin/clients']").click()
    await page.locator("//button[text()='Users']").click()
    await page.locator("#firstName").type("Admin")
    await page.locator("#lastName").type("User")
    await page.locator('#email').type("admin_user_123@yopmail.com")
    await page.locator()

}

test("Login Functionality ", async ({ page }) => {
    let browserActionObject = new browserAction(page);
    await login(browserActionObject);
    await add_client(browserActionObject);
});
