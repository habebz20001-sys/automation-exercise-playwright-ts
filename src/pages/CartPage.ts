import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    readonly cartItems: Locator;
    readonly proceedToCheckoutButton: Locator;
    readonly placeOrderButton: Locator;
    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator;
    readonly cvcInput: Locator;
    readonly expiryMonthInput: Locator;
    readonly expiryYearInput: Locator;
    readonly payAndConfirmButton: Locator;
    readonly successMessage: Locator;

    readonly cartQuantity: Locator;
    readonly cartTotalPrice: Locator;
    readonly deleteItemButton: Locator;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.cartItems = page.locator('#cart_info_table tbody tr');
        this.proceedToCheckoutButton = page.locator('.check_out');
        this.placeOrderButton = page.locator('a[href="/payment"]');

        this.nameOnCardInput = page.locator('input[data-qa="name-on-card"]');
        this.cardNumberInput = page.locator('input[data-qa="card-number"]');
        this.cvcInput = page.locator('input[data-qa="cvc"]');
        this.expiryMonthInput = page.locator('input[data-qa="expiry-month"]');
        this.expiryYearInput = page.locator('input[data-qa="expiry-year"]');
        this.payAndConfirmButton = page.locator('button[data-qa="pay-button"]');
        this.successMessage = page.locator('[data-qa="order-placed"]');

        this.cartQuantity = page.locator('.cart_quantity button');
        this.cartTotalPrice = page.locator('.cart_total_price');
        this.deleteItemButton = page.locator('.cart_quantity_delete');
        this.emptyCartMessage = page.locator('#empty_cart');
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }

    async fillPaymentDetails(name: string, cardNumber: string, cvc: string, month: string, year: string) {
        await this.nameOnCardInput.waitFor({ state: 'visible' });
        await this.nameOnCardInput.fill(name);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expiryMonthInput.fill(month);
        await this.expiryYearInput.fill(year);
        await this.payAndConfirmButton.click();
    }

    async deleteFirstItem() {
        await this.deleteItemButton.first().click();
    }
}