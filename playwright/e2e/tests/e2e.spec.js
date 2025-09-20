import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { ProductPage } = require('../pages/productPage');
const { HeaderPage } = require('../pages/headerPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');
const { CheckoutOverviewPage } = require('../pages/checkoutOverviewPage');
const { CheckoutCompletePage } = require('../pages/checkoutCompletePage');
const { Validator } = require('../support/validator');
const { username, password } = require('../../fixtures/login.json');
const { productName, productDescription, productPrice } = require('../../fixtures/products.json');
const { firstname, lastname, postalcode } = require('../../fixtures/checkout.json');
const { loginURL, productsURL, productURL, cartURL, checkoutURL, checkoutOverviewURL, checkoutCompleteURL } = require('../../fixtures/url.json');
const { completeHeader, completeText} = require('../../fixtures/checkoutComplete.json')

test('Finish order', async ({ page }) => {
  const validator = new Validator(page);

  await page.goto('/');

  const login = new LoginPage(page);
  await test.step('Given the user is logged in', async () => {
    await validator.urlResponse(loginURL);
    await login.login(username, password);
    await validator.urlResponse(productsURL);
  });

  const products = new ProductsPage(page);
  await test.step('When the user selects a product', async () => {
    await products.selectProductByName(productName);
    await validator.urlResponse(productURL);
  });

  const product = new ProductPage(page);
  await test.step('Then the product information should match the listing', async () => {
    await product.compareWithExpected(products.getLastAccessProduct());
  });

  await test.step('And the product is added to the cart', async () => {
    await product.addProductToCart();
  });

  const header = new HeaderPage(page);
  await test.step('And the user goes to the shopping cart', async () => {
    await header.clickShoppingCart();
    await validator.urlResponse(cartURL);
  });

  const cart = new CartPage(page);
  await test.step('Then the user proceeds to checkout', async () => {
    await cart.clickCheckout();
    await validator.urlResponse(checkoutURL);
  });

  const checkout = new CheckoutPage(page);
  await test.step('When the user fills in personal information', async () => {
    await checkout.fillYourInformation(firstname, lastname, postalcode);
    await validator.urlResponse(checkoutOverviewURL);
  });

  const checkoutOverview = new CheckoutOverviewPage(page);
  await test.step('Then the user reviews information and finishes the order', async () => {
    await checkoutOverview.clickFinish();
    await validator.urlResponse(checkoutCompleteURL);
  });

  const checkoutComplete = new CheckoutCompletePage(page);
  await test.step('And the user will see success message', async () => {
    expect(await checkoutComplete.getCompleteHeader()).toEqual(completeHeader);
    expect(await checkoutComplete.getCompleteText()).toEqual(completeText);
  })

});