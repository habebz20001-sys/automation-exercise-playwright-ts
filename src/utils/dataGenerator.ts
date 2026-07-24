import { faker } from '@faker-js/faker';

export interface User {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
}

export class DataGenerator {
  /**
   * Generate a random user with all required details
   */
  static generateUser(): User {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      name: `${firstName} ${lastName}`,
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password({
        length: 12,
        memorable: false,
        pattern: /[A-Za-z0-9!@#$%^&*]/,
      }),
      firstName: firstName,
      lastName: lastName,
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      state: faker.location.state(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode(),
      mobileNumber: faker.phone.number('+1##########'),
    };
  }

  /**
   * Generate a random email
   */
  static generateEmail(): string {
    return faker.internet.email().toLowerCase();
  }

  /**
   * Generate a random password
   */
  static generatePassword(): string {
    return faker.internet.password({
      length: 12,
      memorable: false,
      pattern: /[A-Za-z0-9!@#$%^&*]/,
    });
  }

  /**
   * Generate random product name
   */
  static generateProductName(): string {
    return faker.commerce.productName();
  }

  /**
   * Generate random message
   */
  static generateMessage(length: number = 100): string {
    return faker.lorem.paragraph(length);
  }
}
