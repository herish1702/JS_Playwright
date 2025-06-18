export class LoginPage{
    constructor(browserActionObject, selectedLocators) {
        this.browserActionObject = browserActionObject;
        this.selectedLocators = selectedLocators;
    }

    getUserNameField(){
        return this.browserActionObject.performLocatorAction(this.selectedLocators.usernameField);
    }

    getContinueCta(){
        return this.browserActionObject.performLocatorAction(this.selectedLocators.continueCta);
    }
        
    getPasswordField(){
        return this.browserActionObject.performLocatorAction(this.selectedLocators.passwordField);
    }

    getSignInCta(){
        return this.browserActionObject.performLocatorAction(this.selectedLocators.signInCta);
    }

    async performLogin(userName, password){
        await this.browserActionObject.performFillAction(await this.getUserNameField(), userName);
        await this.browserActionObject.performClickAction(await this.getContinueCta());
        await this.browserActionObject.performFillAction(await this.getPasswordField(), password);
        await this.browserActionObject.performClickAction(await this.getSignInCta());
    }
}