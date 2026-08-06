import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactUsPage extends BasePage {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly fileUploadInput: Locator;
    readonly submitButton: Locator;
    readonly successAlert: Locator;

    constructor(page: Page) {
        super(page);

        this.nameInput = page.locator('input[data-qa="name"]');
        this.emailInput = page.locator('input[data-qa="email"]');
        this.subjectInput = page.locator('input[data-qa="subject"]');
        this.messageInput = page.locator('textarea[data-qa="message"]');
        this.fileUploadInput = page.locator('input[name="upload_file"]');
        this.submitButton = page.locator('input[data-qa="submit-button"]');
        this.successAlert = page.locator('.status.alert.alert-success');
    }

    async submitContactForm(name: string, email: string, subject: string, message: string, filePath: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill(subject);
        await this.messageInput.fill(message);
        await this.fileUploadInput.setInputFiles(filePath);
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await this.submitButton.click();
    }
}