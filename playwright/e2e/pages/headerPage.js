const { 
    iconShoppingCart, 
} = require('../elements/headerElements');

class HeaderPage {
  constructor(page) {
    this.page = page;
    this.iconShoppingCart = page.locator(iconShoppingCart);
  }

  async clickShoppingCart() {
    await this.iconShoppingCart.click();
  }
}

module.exports = { HeaderPage };