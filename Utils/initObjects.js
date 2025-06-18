const { EnvironmentSelector } = require('../Utils/environmentSelector.js');
const { BrowserAction } = require('../Browser_Action/BrowserAction.js');

const buildTestContext = async (page) => {
    const browserActionObject = new BrowserAction(page);
    const environmentSelector = new EnvironmentSelector();
    const { loginLocators, navbarLocators } = await environmentSelector.selectLocators();

    return { browserActionObject, loginLocators, navbarLocators };
};

module.exports = { buildTestContext };
