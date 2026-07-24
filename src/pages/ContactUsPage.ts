import { Page, Locator } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly fileInput: Locator;
  readonly submitButton: Locator;
  readonly successAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('input[data-qa="name"]');
    this.emailInput = page.locator('input[data-qa="email"]');
    this.subjectInput = page.locator('input[data-qa="subject"]');
    this.messageInput = page.locator('textarea[data-qa="message"]');
    this.fileInput = page.locator('input[name="upload_file"]');
    this.submitButton = page.locator('input[data-qa="submit-button"]');
    this.successAlert = page.locator('div.alert-success');
  }

  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async submitContactForm(
    name: string,
    email: string,
    subject: string,
    message: string,
    filePath: string
  ): Promise<void> {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
    await this.fileInput.setInputFiles(filePath);
    await this.submitButton.click();
  }
}
