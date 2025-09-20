const { 
    inputFirstName, 
    inputLastName,
    inputPostalCode,
    buttonContinue
} = require('../elements/checkoutElements');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.inputFirstName = page.locator(inputFirstName);
    this.inputLastName = page.locator(inputLastName);
    this.inputPostalCode = page.locator(inputPostalCode);
    this.buttonContinue = page.locator(buttonContinue);
  }

  async fillFirstName(firstName) {
    await this.inputFirstName.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.inputLastName.fill(lastName);
  }

  async fillPostalCode(postalCode) {
    await this.inputPostalCode.fill(postalCode);
  }

  async clickContinue(){
    await this.buttonContinue.click()
  }

  async fillYourInformation(firstName, lastName, postalCode){
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillPostalCode(postalCode);
    await this.clickContinue()
  }
} 

module.exports = { CheckoutPage };