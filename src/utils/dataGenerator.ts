import { faker } from '@faker-js/faker';

export class DataGenerator {
    static generateUser() {
        return {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password({ length: 10 }),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address: faker.location.streetAddress(),
            country: 'United States',
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobileNumber: faker.phone.number(),
        };
    }
}