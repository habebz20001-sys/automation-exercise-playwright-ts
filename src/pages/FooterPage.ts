import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FooterPage extends BasePage {
    readonly subscribeEmailInput: Locator;
    readonly subscribeButton: Locator;
    readonly successSubscribeAlert: Locator;

    constructor(page: Page) {
        super(page);

        this.subscribeEmailInput = page.locator('#susbscribe_email');
        this.subscribeButton = page.locator('#subscribe');
        this.successSubscribeAlert = page.locator('.alert-success');
    }

    async subscribeToNewsletter(email: string) {
        await this.subscribeEmailInput.fill(email);
        await this.subscribeButton.click();
    }
}