// 2- Transformar o Gherkin em ação/método

/// <reference types="cypress"/>

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import home_page from '../pages/home_page';
import login_page from '../pages/login_page';

const user_valid_data = require('../../fixtures/valid_data.json')

const random_email = faker.internet.email();

Given('I am on login screen', () => {
    home_page.accessLogin();
});

Given('I fill e-mail', () => {
    login_page.fillEmail(random_email);
});

Given('I fill credentials', () => {
    login_page.fillEmail(random_email);
    login_page.fillPassword(user_valid_data.password);
});

When('I click on Login', () => {
    login_page.btnLogin();
});

Then('I see the message {string}', (message) => {
    login_page.checkErrorMessage(message);
});


Then('I see sucess message {string}', (message) => {
    login_page.checkLoginSucess(message, random_email);
});