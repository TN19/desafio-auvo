const {
  itemImage,
  itemName,
  itemDescription,
  itemPrice,
  buttonAddToCart
} = require('../elements/productElements');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.itemImage = page.locator(itemImage);
    this.itemName = page.locator(itemName);
    this.itemDescription = page.locator(itemDescription);
    this.itemPrice = page.locator(itemPrice);
    this.buttonAddToCart = page.locator(buttonAddToCart);
  }

  async getProductDetails() {
    const name = await this.itemName.innerText();
    const description = await this.itemDescription.innerText();
    const price = await this.itemPrice.innerText();

    return { name, description, price };
  }

  async compareWithExpected(expected) {
    const current = await this.getProductDetails();

    if (
      current.name !== expected.name ||
      current.description !== expected.description ||
      current.price !== expected.price
    ) {
      throw new Error(
        `Produto divergente:
        Esperado => ${JSON.stringify(expected)}
        Obtido => ${JSON.stringify(current)}`
      );
    }

    return true; // passou na validação
  }

  async addProductToCart() {
    await this.buttonAddToCart.click();
  }
}

module.exports = { ProductPage };
