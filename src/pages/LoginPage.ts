import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signupLink: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly addressInput: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipCodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly accountCreatedHeader: Locator;
  readonly createAccountButton: Locator;
  readonly continueButton: Locator;
  readonly logoutButton: Locator;
  readonly loggedInUserHeader: Locator;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLink = page.locator('a[href="/login"]');
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.passwordInput = page.locator('input[data-qa="password"]');
    this.firstNameInput = page.locator('input[data-qa="first_name"]');
    this.lastNameInput = page.locator('input[data-qa="last_name"]');
    this.companyInput = page.locator('input[data-qa="company"]');
    this.addressInput = page.locator('input[data-qa="address1"]');
    this.stateInput = page.locator('input[data-qa="state"]');
    this.cityInput = page.locator('input[data-qa="city"]');
    this.zipCodeInput = page.locator('input[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
    this.accountCreatedHeader = page.locator('h2[data-qa="account-created"]');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
    this.logoutButton = page.locator('a[href="/logout"]');
    this.loggedInUserHeader = page.locator('li:has-text("Logged in as") b');
    this.loginEmailInput = page.locator('input[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.errorMessage = page.locator('div.alert-danger');
  }

  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async initiateSignup(name: string, email: string): Promise<void> {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.page.locator('button[data-qa="signup-button"]').click();
  }

  async fillAccountDetails(user: any): Promise<void> {
    await this.passwordInput.fill(user.password);
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.companyInput.fill(user.company);
    await this.addressInput.fill(user.address);
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipCodeInput.fill(user.zipCode);
    await this.mobileNumberInput.fill(user.mobileNumber);
    await this.createAccountButton.click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}
