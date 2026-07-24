import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartQuantity: Locator;
  readonly emptyCartMessage: Locator;
  readonly proceedToCheckoutButton: Locator;
  readonly placeOrderButton: Locator;
  readonly successMessage: Locator;
  readonly paymentNameInput: Locator;
  readonly paymentCardInput: Locator;
  readonly paymentCVCInput: Locator;
  readonly paymentExpiryMonthInput: Locator;
  readonly paymentExpiryYearInput: Locator;
  readonly payNowButton: Locator;
  readonly deleteItemButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartQuantity = page.locator('td.cart_quantity button');
    this.emptyCartMessage = page.locator('b');
    this.proceedToCheckoutButton = page.locator('a.check_out');
    this.placeOrderButton = page.locator('a[data-qa="place-order"]');
    this.successMessage = page.locator('div[id="success-message"]');
    this.paymentNameInput = page.locator('input[data-qa="name-on-card"]');
    this.paymentCardInput = page.locator('input[data-qa="card-number"]');
    this.paymentCVCInput = page.locator('input[data-qa="cvc"]');
    this.paymentExpiryMonthInput = page.locator('input[data-qa="expiry-month"]');
    this.paymentExpiryYearInput = page.locator('input[data-qa="expiry-year"]');
    this.payNowButton = page.locator('button[data-qa="pay-button"]');
    this.deleteItemButton = page.locator('a.cart_quantity_delete');
  }

  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }

  async placeOrder(): Promise<void> {
    await this.placeOrderButton.click();
  }

  async fillPaymentDetails(
    name: string,
    cardNumber: string,
    cvc: string,
    expiryMonth: string,
    expiryYear: string
  ): Promise<void> {
    await this.paymentNameInput.fill(name);
    await this.paymentCardInput.fill(cardNumber);
    await this.paymentCVCInput.fill(cvc);
    await this.paymentExpiryMonthInput.fill(expiryMonth);
    await this.paymentExpiryYearInput.fill(expiryYear);
    await this.payNowButton.click();
  }

  async deleteFirstItem(): Promise<void> {
    await this.deleteItemButton.first().click();
  }
}
