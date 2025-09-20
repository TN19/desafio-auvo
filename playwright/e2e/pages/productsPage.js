const {
  inventoryItem,
  itemName,
  itemDescription,
  itemPrice,
  buttonAddToCart
} = require('../elements/productsElements');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsData = []; // array para armazenar dados de múltiplos produtos
    this.lastAccessProductData = [];  // array para armazenar dados de múltiplos produtos
  }

  async selectProductByName(productName) {
    this.lastAccessProductData = [];
    const item = this.page.locator(inventoryItem, { hasText: productName });

    const name = await item.locator(itemName).innerText();
    const description = await item.locator(itemDescription).innerText();
    const price = await item.locator(itemPrice).innerText();

    // armazenar no array para validações futuras
    this.productsData.push({ name, description, price });
    this.lastAccessProductData.push({ name, description, price });
    await item.locator(itemName).click();

    return { name, description, price };
  }

  async addProductToCart(productName) {
    const item = this.page.locator(inventoryItem, { hasText: productName });
    await item.locator(buttonAddToCart).click();
  }

  getLastAccessProduct() {
    return this.lastAccessProductData.map(p => ({
      name: p.name,
      description: p.description,
      price: p.price
    }))[0]; 
  }

  getProductsData() {
    return this.productsData;
  }
}

module.exports = { ProductsPage };
