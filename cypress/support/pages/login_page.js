/// <reference types="cypress"/>

const elements = {
    buttons: {
        login: '#btnLogin',
        confirmLogin: '.swal2-confirm.swal2-styled',
    },
    messages: {
        error: '.invalid_input',
        sucessLogin: '#swal2-title',
        helloLogin: '#swal2-html-container',
    },
    fields: {
        email: '#user',
        password: '#password',
    },
    links: {
        createAccount: '#createAccount',
    },
};

export default {
    btnLogin() {
        cy.get(elements.buttons.login).click();
    },

    checkErrorMessage(message) {
        cy.get(elements.messages.error).should('be.visible').should('contain', message);
    },

    fillEmail(email) {
        cy.get(elements.fields.email).should('be.visible').type(email);
    },

    fillPassword(password) {
        cy.get(elements.fields.password).should('be.visible').type(password);
    },

    checkLoginSucess(message, email) {
        cy.get(elements.messages.sucessLogin).should('be.visible').should('contain', message);
        cy.get(elements.messages.helloLogin)
            .should('be.visible')
            .should('contain', `Olá, ${email}`);
    },
};
