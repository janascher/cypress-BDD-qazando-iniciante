/// <reference types="cypress"/>

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import header from '../pages/header/header';

Given('I am on the home page', () => {
    header.accessHomepage();
});

Given('I am on the dashboard page', () => {
    header.accessDashboard();
});

When('I click on the logo', () => {
    header.clickLogo();
});

Then("I remain on the application's home page", () => {
    header.checkTargetURL();
});

Then("I am redirected to the application's home page", () => {
    header.checkTargetURL();
});
