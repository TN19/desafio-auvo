const { 
    completeHeader, 
    completeText
} = require('../elements/checkoutCompleteElements');

class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.completeHeader = page.locator(completeHeader);
    this.completeText = page.locator(completeText);
  }

  async getCompleteHeader() {
    return await this.completeHeader.innerText();
  }

  async getCompleteText(){
    return await this.completeText.innerText()
  }

} 

module.exports = { CheckoutCompletePage };