import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DataGenerator } from '../src/utils/dataGenerator';

test.describe('User Authentication Suite', () => {

    test('TC01: Should register a new user successfully with dynamic data', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const randomUser = DataGenerator.generateUser();

        await loginPage.navigateTo('/login');
        await loginPage.initiateSignup(randomUser.name, randomUser.email);
        await loginPage.fillAccountDetails(randomUser);

        await expect(loginPage.accountCreatedHeader).toBeVisible();
        await expect(loginPage.accountCreatedHeader).toHaveText('Account Created!');
    });

    test('TC02: Should login successfully with registered user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const randomUser = DataGenerator.generateUser();

        await loginPage.navigateTo('/login');
        await loginPage.initiateSignup(randomUser.name, randomUser.email);
        await loginPage.fillAccountDetails(randomUser);

        await loginPage.continueButton.click();
        await loginPage.logout();

        await loginPage.login(randomUser.email, randomUser.password);

        await expect(loginPage.loggedInUserHeader).toBeVisible();
        await expect(loginPage.loggedInUserHeader).toHaveText(randomUser.name);
    });

    test('TC03: Should display error message when logging in with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const randomUser = DataGenerator.generateUser();

        await loginPage.navigateTo('/login');

        await loginPage.login(randomUser.email, 'WrongPassword123!');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');
    });

});
