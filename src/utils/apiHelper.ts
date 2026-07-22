import { APIRequestContext } from '@playwright/test';

export class ApiHelper {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createAccountApi(user: any) {
        const response = await this.request.post('https://automationexercise.com/api/createAccount', {
            form: {
                name: user.name,
                email: user.email,
                password: user.password,
                title: 'Mr',
                birth_date: '10',
                birth_month: '5',
                birth_year: '1998',
                firstname: user.firstName,
                lastname: user.lastName,
                company: user.company,
                address1: user.address,
                address2: '',
                country: user.country,
                zipcode: user.zipcode,
                state: user.state,
                city: user.city,
                mobile_number: user.mobileNumber
            }
        });
        return response;
    }
    async addToCartApi(productId: string, quantity: number = 1) {
        return await this.request.post(`https://automationexercise.com/api/addToCart/${productId}`, {
            form: {
                product_id: productId,
                quantity: quantity
            }
        });
    }
}