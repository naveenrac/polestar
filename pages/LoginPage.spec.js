exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async gotoLoginPage() {
        
        await this.page.goto('https://www.polestar.com/global/developer/get-started/');
        await this.page.click('button:text("Accept all")');
    }
    async gotoOtherPages() {
        this.gotoLoginPage();
        await this.page.getByRole('link', { name: 'Return Home' }).click();
        await this.page.getByLabel('Menu', { exact: true }).click();
        await this.page.getByRole('menuitem', { name: 'Polestar 2' }).click();
        await this.page.getByRole('menuitem', { name: 'Discover Polestar 2' }).click();
        await this.page.getByLabel('Menu', { exact: true }).click();
        await this.page.getByRole('menuitem', { name: 'Polestar 3' }).click();
        await this.page.getByRole('link', { name: 'Stay up to date' }).click();
        await this.page.getByLabel('Menu', { exact: true }).click();
        await this.page.getByRole('menuitem', { name: 'Home' }).click();
        await this.page.getByLabel('Menu', { exact: true }).click();
        await this.page.getByRole('menuitem', { name: 'About Polestar' }).click();
        await this.page.goto('https://www.polestar.com/global/about/');
        await this.page.getByLabel('menu-toggle-button').click();
        await this.page.getByRole('menuitem', { name: 'News' }).click();
        await this.page.goto('https://www.polestar.com/global/news/');
        await this.page.getByLabel('menu-toggle-button').click();
        await this.page.getByRole('menuitem', { name: 'Home' }).click();
        await this.page.getByLabel('Menu', { exact: true }).click();
        await this.page.getByRole('menuitem', { name: 'Home' }).click();
    }

}