# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> User Authentication Suite >> TC02: Should login successfully with registered user
- Location: tests\auth.spec.ts:19:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[data-qa="login-email"]')

```

# Test source

```ts
  1   | import { Page, Locator } from '@playwright/test';
  2   | import { BasePage } from './BasePage';
  3   | 
  4   | export class LoginPage extends BasePage {
  5   |     readonly signupNameInput: Locator;
  6   |     readonly signupEmailInput: Locator;
  7   |     readonly signupButton: Locator;
  8   | 
  9   |     readonly titleMrRadio: Locator;
  10  |     readonly passwordInput: Locator;
  11  |     readonly daysSelect: Locator;
  12  |     readonly monthsSelect: Locator;
  13  |     readonly yearsSelect: Locator;
  14  |     readonly firstNameInput: Locator;
  15  |     readonly lastNameInput: Locator;
  16  |     readonly companyInput: Locator;
  17  |     readonly addressInput: Locator;
  18  |     readonly countrySelect: Locator;
  19  |     readonly stateInput: Locator;
  20  |     readonly cityInput: Locator;
  21  |     readonly zipcodeInput: Locator;
  22  |     readonly mobileNumberInput: Locator;
  23  |     readonly createAccountButton: Locator;
  24  |     readonly accountCreatedHeader: Locator;
  25  |     readonly continueButton: Locator;
  26  | 
  27  |     readonly loginEmailInput: Locator;
  28  |     readonly loginPasswordInput: Locator;
  29  |     readonly loginButton: Locator;
  30  |     readonly errorMessage: Locator;
  31  |     readonly loggedInUserHeader: Locator;
  32  |     readonly logoutLink: Locator;
  33  | 
  34  |     constructor(page: Page) {
  35  |         super(page);
  36  | 
  37  |         this.signupNameInput = page.locator('input[data-qa="signup-name"]');
  38  |         this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
  39  |         this.signupButton = page.locator('button[data-qa="signup-button"]');
  40  | 
  41  |         this.titleMrRadio = page.locator('#id_gender1');
  42  |         this.passwordInput = page.locator('input[data-qa="password"]');
  43  |         this.daysSelect = page.locator('select[data-qa="days"]');
  44  |         this.monthsSelect = page.locator('select[data-qa="months"]');
  45  |         this.yearsSelect = page.locator('select[data-qa="years"]');
  46  |         this.firstNameInput = page.locator('input[data-qa="first_name"]');
  47  |         this.lastNameInput = page.locator('input[data-qa="last_name"]');
  48  |         this.companyInput = page.locator('input[data-qa="company"]');
  49  |         this.addressInput = page.locator('input[data-qa="address"]');
  50  |         this.countrySelect = page.locator('select[data-qa="country"]');
  51  |         this.stateInput = page.locator('input[data-qa="state"]');
  52  |         this.cityInput = page.locator('input[data-qa="city"]');
  53  |         this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
  54  |         this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
  55  |         this.createAccountButton = page.locator('button[data-qa="create-account"]');
  56  |         this.accountCreatedHeader = page.locator('h2[data-qa="account-created"]');
  57  |         this.continueButton = page.locator('a[data-qa="continue-button"]');
  58  | 
  59  |         this.loginEmailInput = page.locator('input[data-qa="login-email"]');
  60  |         this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
  61  |         this.loginButton = page.locator('button[data-qa="login-button"]');
  62  |         this.errorMessage = page.locator('p[style="color: red;"]');
  63  |         this.loggedInUserHeader = page.locator('li:has(a:has-text("Logged in as")) b');
  64  |         this.logoutLink = page.locator('a[href="/logout"]');
  65  |     }
  66  | 
  67  |     async login(email: string, pass: string) {
> 68  |         await this.loginEmailInput.fill(email);
      |                                    ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  69  |         await this.loginPasswordInput.fill(pass);
  70  |         await this.loginButton.click();
  71  |     }
  72  | 
  73  |     async logout() {
  74  |         await this.logoutLink.click();
  75  |     }
  76  | 
  77  |     async initiateSignup(name: string, email: string) {
  78  |         await this.signupNameInput.fill(name);
  79  |         await this.signupEmailInput.fill(email);
  80  |         await this.signupButton.click();
  81  |     }
  82  | 
  83  |     async fillAccountDetails(user: any) {
  84  |         await this.titleMrRadio.check();
  85  |         await this.passwordInput.fill(user.password);
  86  |         await this.daysSelect.selectOption('10');
  87  |         await this.monthsSelect.selectOption('5');
  88  |         await this.yearsSelect.selectOption('1998');
  89  | 
  90  |         await this.firstNameInput.fill(user.firstName);
  91  |         await this.lastNameInput.fill(user.lastName);
  92  |         await this.companyInput.fill(user.company);
  93  |         await this.addressInput.fill(user.address);
  94  |         await this.countrySelect.selectOption(user.country);
  95  |         await this.stateInput.fill(user.state);
  96  |         await this.cityInput.fill(user.city);
  97  |         await this.zipcodeInput.fill(user.zipcode);
  98  |         await this.mobileNumberInput.fill(user.mobileNumber);
  99  | 
  100 |         await this.createAccountButton.click();
  101 |     }
  102 | }
```