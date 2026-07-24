import { APIRequestContext } from '@playwright/test';
import { User } from './dataGenerator';

export class ApiHelper {
  readonly request: APIRequestContext;
  readonly baseURL: string = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createAccountApi(user: User): Promise<any> {
    const response = await this.request.post(`${this.baseURL}/createAccount`, {
      form: {
        name: user.name,
        email: user.email,
        password: user.password,
        title: 'Mr',
        birth_date: '01',
        birth_month: '01',
        birth_year: '1990',
        firstname: user.firstName,
        lastname: user.lastName,
        company: user.company,
        address1: user.address,
        address2: '',
        country: 'United States',
        state: user.state,
        city: user.city,
        zipcode: user.zipCode,
        mobile_number: user.mobileNumber,
      },
    });

    const data = await response.json();
    return data;
  }

  async getAllProducts(): Promise<any> {
    const response = await this.request.get(`${this.baseURL}/productList`);
    const data = await response.json();
    return data;
  }

  async getProductDetails(productId: number): Promise<any> {
    const response = await this.request.get(
      `${this.baseURL}/product?id=${productId}`
    );
    const data = await response.json();
    return data;
  }

  async verifyAccount(email: string, password: string): Promise<any> {
    const response = await this.request.post(
      `${this.baseURL}/verifyAccount`,
      {
        form: {
          email: email,
          password: password,
        },
      }
    );
    const data = await response.json();
    return data;
  }
}
