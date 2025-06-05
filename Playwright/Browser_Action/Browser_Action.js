export class browserAction {
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
        await (await this.performLocatorAction(locator)).click();
    }
    async performFillAction(locator, data) {
        await (await this.performLocatorAction(locator)).fill(data);
    }
}   
