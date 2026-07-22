# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> User Authentication Suite >> TC02: Should login successfully with registered user and verify logout
- Location: tests\auth.spec.ts:19:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('i.fa-user + b')
Expected: visible
Received: undefined

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [active] [ref=e44]: Gloria34@hotmail.com
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
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
> 32 |         await expect(loginPage.loggedInUserHeader).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
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
  45 |         await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect.');
  46 |     });
  47 | 
  48 | });
```