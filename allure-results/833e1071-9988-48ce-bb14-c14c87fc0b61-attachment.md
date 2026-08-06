# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> User Authentication Suite >> TC03: Should display error message when logging in with invalid credentials
- Location: tests\auth.spec.ts:36:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('p[style="color: red;"]')
Expected: "Your email or password is incorrect."
Received: "Your email or password is incorrect!"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('p[style="color: red;"]')
    13 × locator resolved to <p>Your email or password is incorrect!</p>
       - unexpected value "Your email or password is incorrect!"

```

```yaml
- paragraph: Your email or password is incorrect!
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../src/pages/LoginPage';
  3  | import { DataGenerator } from '../src/utils/dataGenerator';
  4  | 
  5  | test.describe('User Authentication Suite', () => {
  6  | 
  7  |     test('TC01: Should register a new user successfully with dynamic data', async ({ page }) => {
  8  |         const loginPage = new LoginPage(page);
  9  |         const randomUser = DataGenerator.generateUser();
  10 | 
  11 |         await loginPage.navigateTo('/login');
  12 |         await loginPage.initiateSignup(randomUser.name, randomUser.email);
  13 |         await loginPage.fillAccountDetails(randomUser);
  14 | 
  15 |         await expect(loginPage.accountCreatedHeader).toBeVisible();
  16 |         await expect(loginPage.accountCreatedHeader).toHaveText('Account Created!');
  17 |     });
  18 | 
  19 |     test('TC02: Should login successfully with registered user and verify logout', async ({ page }) => {
  20 |         const loginPage = new LoginPage(page);
  21 |         const randomUser = DataGenerator.generateUser();
  22 | 
  23 |         await loginPage.navigateTo('/login');
  24 |         await loginPage.initiateSignup(randomUser.name, randomUser.email);
  25 |         await loginPage.fillAccountDetails(randomUser);
  26 |         await loginPage.continueButton.click();
  27 | 
  28 |         await loginPage.logoutButton.click();
  29 | 
  30 |         await loginPage.login(randomUser.email, randomUser.password);
  31 | 
  32 |         await expect(loginPage.loggedInUserHeader).toBeVisible();
  33 |         await expect(loginPage.loggedInUserHeader).toHaveText(randomUser.name);
  34 |     });
  35 | 
  36 |     test('TC03: Should display error message when logging in with invalid credentials', async ({ page }) => {
  37 |         const loginPage = new LoginPage(page);
  38 |         const randomUser = DataGenerator.generateUser();
  39 | 
  40 |         await loginPage.navigateTo('/login');
  41 | 
  42 |         await loginPage.login(randomUser.email, 'WrongPassword123!');
  43 | 
  44 |         await expect(loginPage.errorMessage).toBeVisible();
> 45 |         await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect.');
     |                                              ^ Error: expect(locator).toHaveText(expected) failed
  46 |     });
  47 | 
  48 | });
```