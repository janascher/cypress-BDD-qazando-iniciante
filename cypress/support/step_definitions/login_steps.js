// 2- Transformar o Gherkin em ação/método

/// <reference types="cypress"/>

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import home_page from '../pages/home_page';
import login_page from '../pages/login_page';

Given('I am on login screen', () => {
    home_page.accessLogin();
});

When('I click on Login', () => {
    login_page.btnLogin();
});

Then('I see the message {string}', (message) => {
    login_page.checkMessage(message);
});
