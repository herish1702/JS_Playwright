require('dotenv').config();
const LoginLocators = require('../Locators/LoginLocator.json');
const NavbarLocators = require('../Locators/NavbarLocator.json');

class EnvironmentSelector {

    selectEnvironment = async() => {
        const environment = process.env.ENV;
        return environment
    }
    selectLocators = async() => {
        const environment = await this.selectEnvironment();
        const loginLocators = LoginLocators[environment];
        const navbarLocators = NavbarLocators[environment];
        return { loginLocators, navbarLocators };
    }
}
module.exports = {EnvironmentSelector};