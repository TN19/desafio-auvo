const { 
    buttonFinish, 
} = require('../elements/checkoutOverviewElements');

class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.buttonFinish = page.locator(buttonFinish);
  }

  async clickFinish() {
    await this.buttonFinish.click();
  }
} 

module.exports = { CheckoutOverviewPage };