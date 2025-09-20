const { 
    inputUsername, 
    inputPassword, 
    buttonLogin 
} = require('../elements/loginElements');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.inputUsername = page.locator(inputUsername);
    this.inputPassword = page.locator(inputPassword);
    this.buttonLogin = page.locator(buttonLogin);
  }

  async fillUsername(username) {
    await this.inputUsername.fill(username);
  }
  async fillPassword(password) {
    await this.inputPassword.fill(password);
  }
  async clickLogin(){
    await this.buttonLogin.click();
  }
  async login(username, password){
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}

module.exports = { LoginPage };