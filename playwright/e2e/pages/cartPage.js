const { 
    buttonCheckout, 
} = require('../elements/cartElements');

class CartPage {
  constructor(page) {
    this.page = page;
    this.buttonCheckout = page.locator(buttonCheckout);
  }

  async clickCheckout() {
    await this.buttonCheckout.click();
  }
} 

module.exports = { CartPage };