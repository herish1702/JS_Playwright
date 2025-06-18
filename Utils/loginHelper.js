const { LoginPage } = require('../Pages/LoginPage.js');
const { StaticData, LoginData } = require('../Data/Data.js');
const { buildTestContext } = require('./initObjects.js');

const performLogin = async (page) => {
    const { browserActionObject, loginLocators } = await buildTestContext(page);
    const loginPageObject = new LoginPage(browserActionObject, loginLocators);

    await browserActionObject.performGoToAction(StaticData.baseUrl);
    await loginPageObject.performLogin(LoginData.userName, LoginData.password);
};

module.exports = { performLogin };