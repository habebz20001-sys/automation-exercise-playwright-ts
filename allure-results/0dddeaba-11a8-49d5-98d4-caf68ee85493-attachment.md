# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: products.spec.ts >> E2E Checkout Suite >> TC08: Should complete order successfully using API setup
- Location: tests\products.spec.ts:9:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
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
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Laurel
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - generic [ref=e68]:
        - heading "Brands" [level=2] [ref=e69]
        - list [ref=e71]:
          - listitem [ref=e72]:
            - link "(6) Polo" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e74]: (6)
              - text: Polo
          - listitem [ref=e75]:
            - link "(5) H&M" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e77]: (5)
              - text: H&M
          - listitem [ref=e78]:
            - link "(5) Madame" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e80]: (5)
              - text: Madame
          - listitem [ref=e81]:
            - link "(3) Mast & Harbour" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=e84]:
            - link "(4) Babyhug" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e86]: (4)
              - text: Babyhug
          - listitem [ref=e87]:
            - link "(3) Allen Solly Junior" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e90]:
            - link "(3) Kookie Kids" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e92]: (3)
              - text: Kookie Kids
          - listitem [ref=e93]:
            - link "(5) Biba" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e95]: (5)
              - text: Biba
    - generic [ref=e96]:
      - generic [ref=e99]:
        - generic [ref=e100]:
          - generic [ref=e102]: 
          - heading "Added!" [level=4] [ref=e103]
        - generic [ref=e104]:
          - paragraph [ref=e105]: Your product has been added to cart.
          - paragraph [ref=e106]:
            - link "View Cart" [active] [ref=e107] [cursor=pointer]:
              - /url: /view_cart
        - button "Continue Shopping" [ref=e109] [cursor=pointer]
      - generic [ref=e110]:
        - img "ecommerce website products" [ref=e113]
        - generic [ref=e115]:
          - img "ecommerce website products" [ref=e116]
          - heading "Blue Top" [level=2] [ref=e117]
          - paragraph [ref=e118]: "Category: Women > Tops"
          - img "ecommerce website products" [ref=e119]
          - generic [ref=e120]:
            - generic [ref=e121]: Rs. 500
            - generic [ref=e122]: "Quantity:"
            - spinbutton [ref=e123]: "1"
            - button " Add to cart" [ref=e124] [cursor=pointer]:
              - generic [ref=e125]: 
              - text: Add to cart
          - paragraph [ref=e126]: "Availability: In Stock"
          - paragraph [ref=e127]: "Condition: New"
          - paragraph [ref=e128]:
            - text: "Brand:"
            - link "Polo" [ref=e129] [cursor=pointer]:
              - /url: "#"
              - img [ref=e130]
              - text: Polo
      - generic [ref=e132]:
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link "Write Your Review" [ref=e136]:
              - /url: "#reviews"
        - generic [ref=e138]:
          - generic [ref=e139]:
            - textbox "Your Name" [ref=e140]
            - textbox "Email Address" [ref=e141]
          - textbox "Add Review Here!" [ref=e142]
          - button "Submit" [ref=e143] [cursor=pointer]
  - generic:
    - insertion:
      - iframe [ref=e145]
  - contentinfo [ref=e146]:
    - generic [ref=e151]:
      - heading "Subscription" [level=2] [ref=e152]
      - generic [ref=e153]:
        - textbox "Your email address" [ref=e154]
        - button "" [ref=e155] [cursor=pointer]:
          - generic [ref=e156]: 
        - paragraph [ref=e157]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e161]: Copyright © 2021 All rights reserved
    - insertion [ref=e163]:
      - generic [ref=e166]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e168]: Discover more
        - link "Polo shirts" [ref=e169] [cursor=pointer]:
          - generic "Polo shirts" [ref=e170]
          - img [ref=e172]
        - link "Fashion & Style" [ref=e174] [cursor=pointer]:
          - generic "Fashion & Style" [ref=e175]
          - img [ref=e177]
        - link "Brand reviews platform" [ref=e179] [cursor=pointer]:
          - generic "Brand reviews platform" [ref=e180]
          - img [ref=e182]
  - text: 
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { CartPage } from '../src/pages/CartPage';
  3  | import { LoginPage } from '../src/pages/LoginPage';
  4  | import { DataGenerator } from '../src/utils/dataGenerator';
  5  | import { ApiHelper } from '../src/utils/apiHelper';
  6  | 
  7  | test.describe('E2E Checkout Suite', () => {
  8  | 
  9  |     test('TC08: Should complete order successfully using API setup', async ({ page, request }) => {
  10 |         const cartPage = new CartPage(page);
  11 |         const loginPage = new LoginPage(page);
  12 |         const apiHelper = new ApiHelper(request);
  13 |         const randomUser = DataGenerator.generateUser();
  14 | 
  15 |         await apiHelper.createAccountApi(randomUser);
  16 | 
  17 |         await loginPage.navigateTo('/login');
  18 |         await loginPage.login(randomUser.email, randomUser.password);
  19 | 
  20 |         await loginPage.navigateTo('/product_details/1');
  21 |         await page.locator('button:has-text("Add to cart")').click();
  22 |         await page.locator('u:has-text("View Cart")').click();
  23 | 
  24 |         await cartPage.proceedToCheckout();
> 25 |         await page.locator('textarea[name="message"]').fill('Order generated via Playwright E2E Test');
     |                                                        ^ Error: locator.fill: Target page, context or browser has been closed
  26 |         await cartPage.placeOrder();
  27 | 
  28 |         await cartPage.fillPaymentDetails(
  29 |             randomUser.name,
  30 |             '4111111111111111',
  31 |             '311',
  32 |             '12',
  33 |             '2028'
  34 |         );
  35 | 
  36 |         await expect(cartPage.successMessage).toBeVisible();
  37 |     });
  38 | 
  39 | });
```