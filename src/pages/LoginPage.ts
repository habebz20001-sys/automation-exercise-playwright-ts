import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupButton: Locator;

    readonly titleMrRadio: Locator;
    readonly passwordInput: Locator;
    readonly daysSelect: Locator;
    readonly monthsSelect: Locator;
    readonly yearsSelect: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreatedHeader: Locator;
    readonly continueButton: Locator;

    readonly loginEmailInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly loggedInUserHeader: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);

        this.signupNameInput = page.locator('input[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.locator('button[data-qa="signup-button"]');

        this.titleMrRadio = page.locator('#id_gender1');
        this.passwordInput = page.locator('input[data-qa="password"]');
        this.daysSelect = page.locator('select[data-qa="days"]');
        this.monthsSelect = page.locator('select[data-qa="months"]');
        this.yearsSelect = page.locator('select[data-qa="years"]');
        this.firstNameInput = page.locator('input[data-qa="first_name"]');
        this.lastNameInput = page.locator('input[data-qa="last_name"]');
        this.companyInput = page.locator('input[data-qa="company"]');
        this.addressInput = page.locator('input[data-qa="address"]');
        this.countrySelect = page.locator('select[data-qa="country"]');
        this.stateInput = page.locator('input[data-qa="state"]');
        this.cityInput = page.locator('input[data-qa="city"]');
        this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
        this.createAccountButton = page.locator('button[data-qa="create-account"]');
        this.accountCreatedHeader = page.locator('h2[data-qa="account-created"]');
        this.continueButton = page.locator('a[data-qa="continue-button"]');

        this.loginEmailInput = page.locator('input[data-qa="login-email"]');
        this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.errorMessage = page.locator('p[style="color: red;"]');
        this.loggedInUserHeader = page.locator('li:has(a:has-text("Logged in as")) b');
        this.logoutLink = page.locator('a[href="/logout"]');
    }

    async login(email: string, pass: string) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(pass);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async initiateSignup(name: string, email: string) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    }

    async fillAccountDetails(user: any) {
        await this.titleMrRadio.check();
        await this.passwordInput.fill(user.password);
        await this.daysSelect.selectOption('10');
        await this.monthsSelect.selectOption('5');
        await this.yearsSelect.selectOption('1998');

        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.companyInput.fill(user.company);
        await this.addressInput.fill(user.address);
        await this.countrySelect.selectOption(user.country);
        await this.stateInput.fill(user.state);
        await this.cityInput.fill(user.city);
        await this.zipcodeInput.fill(user.zipcode);
        await this.mobileNumberInput.fill(user.mobileNumber);

        await this.createAccountButton.click();
    }
}