import { test, expect } from '@playwright/test';
import { CartPage } from '../src/pages/CartPage';
import { LoginPage } from '../src/pages/LoginPage';
import { DataGenerator } from '../src/utils/dataGenerator';
import { ApiHelper } from '../src/utils/apiHelper';

test.describe('E2E Checkout Suite', () => {

    test('TC08: Should complete order successfully using API setup', async ({ page, request }) => {
        const cartPage = new CartPage(page);
        const loginPage = new LoginPage(page);
        const apiHelper = new ApiHelper(request);
        const randomUser = DataGenerator.generateUser();

        await apiHelper.createAccountApi(randomUser);

        await loginPage.navigateTo('/login');
        await loginPage.login(randomUser.email, randomUser.password);

        await loginPage.navigateTo('/product_details/1');
        await page.locator('button:has-text("Add to cart")').click();
        await page.locator('u:has-text("View Cart")').click();

        await cartPage.proceedToCheckout();
        await page.locator('textarea[name="message"]').fill('Order generated via Playwright E2E Test');
        await cartPage.placeOrder();

        await cartPage.fillPaymentDetails(
            randomUser.name,
            '4111111111111111',
            '311',
            '12',
            '2028'
        );

        await expect(cartPage.successMessage).toBeVisible();
    });

});