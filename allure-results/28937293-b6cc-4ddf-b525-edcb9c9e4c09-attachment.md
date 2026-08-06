# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> E2E Checkout Suite >> TC08: Should complete order successfully using API setup
- Location: tests\checkout.spec.ts:9:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a[href="/payment"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
            - text: Logged in as Malachi
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - generic [ref=e54] [cursor=pointer]: Proceed To Checkout
    - table [ref=e56]:
      - rowgroup [ref=e57]:
        - row "Item Description Price Quantity Total" [ref=e58]:
          - cell "Item" [ref=e59]
          - cell "Description" [ref=e60]
          - cell "Price" [ref=e61]
          - cell "Quantity" [ref=e62]
          - cell "Total" [ref=e63]
          - cell [ref=e64]
      - rowgroup [ref=e65]:
        - row "Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 " [ref=e66]:
          - cell "Product Image" [ref=e67]:
            - link "Product Image" [ref=e68] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e69]
          - cell "Blue Top Women > Tops" [ref=e70]:
            - heading "Blue Top" [level=4] [ref=e71]:
              - link "Blue Top" [ref=e72] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=e73]: Women > Tops
          - cell "Rs. 500" [ref=e74]:
            - paragraph [ref=e75]: Rs. 500
          - cell "1" [ref=e76]:
            - button "1" [ref=e77] [cursor=pointer]
          - cell "Rs. 500" [ref=e78]:
            - paragraph [ref=e79]: Rs. 500
          - cell "" [ref=e80]:
            - generic [ref=e82] [cursor=pointer]: 
  - contentinfo [ref=e83]:
    - generic [ref=e88]:
      - heading "Subscription" [level=2] [ref=e89]
      - generic [ref=e90]:
        - textbox "Your email address" [ref=e91]
        - button "" [ref=e92] [cursor=pointer]:
          - generic [ref=e93]: 
        - paragraph [ref=e94]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e98]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e100]:
    - generic [ref=e103]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e105]: Discover more
      - link "Product listing service" [ref=e106] [cursor=pointer]:
        - generic "Product listing service" [ref=e107]
        - img [ref=e109]
      - link "Website automation tools" [ref=e111] [cursor=pointer]:
        - generic "Website automation tools" [ref=e112]
        - img [ref=e114]
      - link "Affiliate marketing products" [ref=e116] [cursor=pointer]:
        - generic "Affiliate marketing products" [ref=e117]
        - img [ref=e119]
  - generic [ref=e121]:
    - generic [ref=e122] [cursor=pointer]:
      - img [ref=e124]
      - link "Go to shopping options for API testing tools" [ref=e126]: API testing tools
    - button "Close shopping anchor" [ref=e127]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class CartPage extends BasePage {
  5  |     readonly cartItems: Locator;
  6  |     readonly proceedToCheckoutButton: Locator;
  7  |     readonly placeOrderButton: Locator;
  8  |     readonly nameOnCardInput: Locator;
  9  |     readonly cardNumberInput: Locator;
  10 |     readonly cvcInput: Locator;
  11 |     readonly expiryMonthInput: Locator;
  12 |     readonly expiryYearInput: Locator;
  13 |     readonly payAndConfirmButton: Locator;
  14 |     readonly successMessage: Locator;
  15 | 
  16 |     readonly cartQuantity: Locator;
  17 |     readonly cartTotalPrice: Locator;
  18 |     readonly deleteItemButton: Locator;
  19 |     readonly emptyCartMessage: Locator;
  20 | 
  21 |     constructor(page: Page) {
  22 |         super(page);
  23 | 
  24 |         this.cartItems = page.locator('#cart_info_table tbody tr');
  25 |         this.proceedToCheckoutButton = page.locator('.check_out');
  26 |         this.placeOrderButton = page.locator('a[href="/payment"]');
  27 | 
  28 |         this.nameOnCardInput = page.locator('input[data-qa="name-on-card"]');
  29 |         this.cardNumberInput = page.locator('input[data-qa="card-number"]');
  30 |         this.cvcInput = page.locator('input[data-qa="cvc"]');
  31 |         this.expiryMonthInput = page.locator('input[data-qa="expiry-month"]');
  32 |         this.expiryYearInput = page.locator('input[data-qa="expiry-year"]');
  33 |         this.payAndConfirmButton = page.locator('button[data-qa="pay-button"]');
  34 |         this.successMessage = page.locator('[data-qa="order-placed"]');
  35 | 
  36 |         this.cartQuantity = page.locator('.cart_quantity button');
  37 |         this.cartTotalPrice = page.locator('.cart_total_price');
  38 |         this.deleteItemButton = page.locator('.cart_quantity_delete');
  39 |         this.emptyCartMessage = page.locator('#empty_cart');
  40 |     }
  41 | 
  42 |     async proceedToCheckout() {
  43 |         await this.proceedToCheckoutButton.click();
  44 |     }
  45 | 
  46 |     async placeOrder() {
> 47 |         await this.placeOrderButton.click();
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  48 |     }
  49 | 
  50 |     async fillPaymentDetails(name: string, cardNumber: string, cvc: string, month: string, year: string) {
  51 |         await this.nameOnCardInput.waitFor({ state: 'visible' });
  52 |         await this.nameOnCardInput.fill(name);
  53 |         await this.cardNumberInput.fill(cardNumber);
  54 |         await this.cvcInput.fill(cvc);
  55 |         await this.expiryMonthInput.fill(month);
  56 |         await this.expiryYearInput.fill(year);
  57 |         await this.payAndConfirmButton.click();
  58 |     }
  59 | 
  60 |     async deleteFirstItem() {
  61 |         await this.deleteItemButton.first().click();
  62 |     }
  63 | }
```