# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: products.spec.ts >> Products Search and Details Suite >> TC07: Should filter products by category successfully
- Location: tests\products.spec.ts:43:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h2.title.text-center')
Expected substring: "WOMEN - DRESS PRODUCTS"
Received string:    "Women -  Dress Products"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h2.title.text-center')
    8 × locator resolved to <h2 class="title text-center">Women - Dress Products</h2>
      - unexpected value "Women - Dress Products"
    4 × locator resolved to <h2 class="title text-center">…</h2>
      - unexpected value "Women -  Dress Products"

```

```yaml
- heading "Women - Dress Products" [level=2]:
  - text: Women -
  - link "Dress":
    - /url: "#"
    - img
    - text: Dress
  - text: Products
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ProductsPage } from '../src/pages/ProductsPage';
  3  | 
  4  | test.describe('Products Search and Details Suite', () => {
  5  | 
  6  |     test('TC04: Should search for a product and verify search results', async ({ page }) => {
  7  |         const productsPage = new ProductsPage(page);
  8  | 
  9  |         await productsPage.navigateTo('/products');
  10 |         await productsPage.searchForProduct('dress');
  11 | 
  12 |         await expect(productsPage.searchedProductsHeader).toBeVisible();
  13 |         await expect(productsPage.searchedProductsHeader).toHaveText('Searched Products');
  14 | 
  15 |         const count = await productsPage.productCards.count();
  16 |         expect(count).toBeGreaterThan(0);
  17 |     });
  18 | 
  19 |     test('TC05: Should open product details and verify information visibility', async ({ page }) => {
  20 |         const productsPage = new ProductsPage(page);
  21 | 
  22 |         await productsPage.navigateTo('/products');
  23 |         await productsPage.openFirstProductDetails();
  24 | 
  25 |         await expect(productsPage.productName).toBeVisible();
  26 |         await expect(productsPage.productCategory).toBeVisible();
  27 |         await expect(productsPage.productPrice).toBeVisible();
  28 |         await expect(productsPage.productAvailability).toBeVisible();
  29 |     });
  30 | 
  31 |     test('TC06: Should display no products when searching with non-existing keyword (Negative Test)', async ({ page }) => {
  32 |         const productsPage = new ProductsPage(page);
  33 | 
  34 |         await productsPage.navigateTo('/products');
  35 |         await productsPage.searchForProduct('XyzNonExistingProduct123');
  36 | 
  37 |         await expect(productsPage.searchedProductsHeader).toBeVisible();
  38 | 
  39 |         const count = await productsPage.productCards.count();
  40 |         expect(count).toBe(0);
  41 |     });
  42 | 
  43 |     test('TC07: Should filter products by category successfully', async ({ page }) => {
  44 |         const productsPage = new ProductsPage(page);
  45 | 
  46 |         await productsPage.navigateTo('/products');
  47 |         await productsPage.filterByWomenDressCategory();
  48 | 
  49 |         await expect(productsPage.categoryTitleHeader).toBeVisible();
> 50 |         await expect(productsPage.categoryTitleHeader).toContainText('WOMEN - DRESS PRODUCTS');
     |                                                        ^ Error: expect(locator).toContainText(expected) failed
  51 |     });
  52 | 
  53 | });
```