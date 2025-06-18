class BrowserAction {
    constructor(page){
        this.page = page;
    }
    async performGoToAction(url){
        await this.page.goto(url);
    }
    async performLocatorAction(locator){
        return  await this.page.locator(locator);
    }
    async performClickAction(locator){
        await locator.click();
    }
    async performFillAction(locator, data) {
        await locator.fill(data);
    }
}   

module.exports = {BrowserAction};
