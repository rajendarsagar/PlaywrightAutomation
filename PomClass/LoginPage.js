class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://practicetestautomation.com/practice-test-login/';
    this.usernameField = page.getByRole('textbox', { name: 'Username' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successHeading = page.getByRole('heading', { name: 'Logged In Successfully' });
    this.errorMessage = page.getByText('Your username is invalid!').first();
  }

  async navigate() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }
}

module.exports = LoginPage;