/// <reference types="cypress"/>

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import top_header from '../pages/header/top_header';
import register_page from '../pages/register_page';

const user_valid_data = require('../../fixtures/valid_data.json');
const user_invalid_data = require('../../fixtures/invalid_data.json');

const random_name = faker.person.fullName();
const random_email = faker.internet.email();

Given('I am on register screen', () => {
    top_header.accessRegister();
});

Given('I fill name', () => {
    register_page.fillName(random_name);
});

Given('I fill e-mail invalid', () => {
    register_page.fillEmail(user_invalid_data.email);
});

Given('I fill e-mail valid', () => {
    register_page.fillEmail(random_email);
});

Given('I fill password invalid', () => {
    register_page.fillPassword(user_invalid_data.password);
});

Given('I fill my datas of register', () => {
    register_page.fillName(random_name);
    register_page.fillEmail(random_email);
    register_page.fillPassword(user_valid_data.password);
});

When('I click on Register', () => {
    register_page.saveRegister();
});

Then('I see message {string} on register', (message) => {
    register_page.checkErrorMessage(message);
});

Then('I see message sucess {string} on register', (message) => {
    register_page.checkRegisterSucess(message);
});
