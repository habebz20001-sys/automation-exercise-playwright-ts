import { test, expect } from '@playwright/test';
import { CartPage } from '../src/pages/CartPage';
import { ContactUsPage } from '../src/pages/ContactUsPage';
import { FooterPage } from '../src/pages/FooterPage';
import { DataGenerator } from '../src/utils/dataGenerator';
import * as path from 'path';

test.describe('Extended E2E Functionalities Suite', () => {

    test('TC09: Should update product quantity in cart correctly', async ({ page }) => {
        const cartPage = new CartPage(page);

        await cartPage.navigateTo('/product_details/1');
        const quantityInput = page.locator('#quantity');
        await quantityInput.fill('4');
        await page.locator('button:has-text("Add to cart")').click();
        await page.locator('u:has-text("View Cart")').click();

        await expect(cartPage.cartQuantity).toHaveText('4');
    });

    test('TC10: Should remove product from cart successfully', async ({ page }) => {
        const cartPage = new CartPage(page);

        await cartPage.navigateTo('/product_details/1');
        await page.locator('button:has-text("Add to cart")').click();
        await page.locator('u:has-text("View Cart")').click();

        await cartPage.deleteFirstItem();

        await expect(cartPage.emptyCartMessage).toBeVisible();
        await expect(cartPage.emptyCartMessage).toContainText('Cart is empty!');
    });

    test('TC11: Should submit contact form with file upload and handle dialog', async ({ page }) => {
        const contactUsPage = new ContactUsPage(page);
        const randomUser = DataGenerator.generateUser();

        await contactUsPage.navigateTo('/contact_us');

        const sampleFilePath = path.join(__dirname, 'sample.txt');
        require('fs').writeFileSync(sampleFilePath, 'Sample log content for testing file upload');

        await contactUsPage.submitContactForm(
            randomUser.name,
            randomUser.email,
            'Automation Feedback',
            'This is an automated test message for contact us page.',
            sampleFilePath
        );

        await expect(contactUsPage.successAlert).toBeVisible();
        await expect(contactUsPage.successAlert).toHaveText('Success! Your details have been submitted successfully.');
    });

    test('TC12: Should subscribe to newsletter in footer', async ({ page }) => {
        const footerPage = new FooterPage(page);
        const randomUser = DataGenerator.generateUser();

        await footerPage.navigateTo('/');
        await footerPage.subscribeToNewsletter(randomUser.email);

        await expect(footerPage.successSubscribeAlert).toBeVisible();
        await expect(footerPage.successSubscribeAlert).toContainText('You have been successfully subscribed!');
    });

});