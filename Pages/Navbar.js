class Navbar {
    constructor(browserActionObject, selectedLocators) {
        this.browserActionObject = browserActionObject;
        this.selectedLocators = selectedLocators;
        
    }
    
    // getDashboardTab(){
    //     return this.browserActionObject.performLocatorAction(this.selectedLocators.dashboardTab);
    // }

    getOrderstab(){
        return this.browserActionObject.performLocatorAction(this.selectedLocators.orderTab);
    }

    // getTaskstab(){
    //     return this.browserActionObject.performLocatorAction(this.selectedLocators.tasksTab);
    // }

    // getTodayTaskTab(){
    //     return this.browserActionObject.performLocatorAction(this.selectedLocators.todayTaskTab);
    // }

    // getCheckAvailabilityTab(){
    //     return this.browserActionObject.performLocatorAction(this.selectedLocators.checkAvailabilityTab);
    // }

    // async clickDashboardTab() {
    //     await this.browserActionObject.performClickAction(await this.getDashboardTab());
    // }

    async clickOrderstab() {
        await this.browserActionObject.performClickAction(await this.getOrderstab());
    }

}

module.exports = {Navbar};