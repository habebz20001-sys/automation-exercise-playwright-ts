import { Page, Locator } from '@playwright/test';

export class FooterPage {
  readonly page: Page;
  readonly newsletterInput: Locator;
  readonly subscribeButton: Locator;
  readonly successSubscribeAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newsletterInput = page.locator('input[data-qa="newsletter-email"]');
    this.subscribeButton = page.locator('button[data-qa="subscribe-button"]');
    this.successSubscribeAlert = page.locator('div.alert-success');
  }

  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async subscribeToNewsletter(email: string): Promise<void> {
    await this.newsletterInput.fill(email);
    await this.subscribeButton.click();
  }
}
