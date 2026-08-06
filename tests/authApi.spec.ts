import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DataGenerator } from '../src/utils/dataGenerator';
import { ApiHelper } from '../src/utils/apiHelper';

test.describe('API-Accelerated Authentication Suite', () => {

    test('TC02_API: Should login instantly after creating account via API', async ({ page, request }) => {
        const loginPage = new LoginPage(page);
        const apiHelper = new ApiHelper(request);
        const randomUser = DataGenerator.generateUser();

        await apiHelper.createAccountApi(randomUser);

        await loginPage.navigateTo('/login');
        await loginPage.login(randomUser.email, randomUser.password);

        await expect(loginPage.loggedInUserHeader).toBeVisible();
        await expect(loginPage.loggedInUserHeader).toHaveText(randomUser.name);
    });

});