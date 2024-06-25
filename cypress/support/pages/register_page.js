/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        register: '#btnRegister',
        confirmRegister: 'button.swal2-confirm.swal2-styled',
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password',
    },
    messages: {
        error: '#errorMessageFirstName',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container',
    },
};

// Ações/métodos/funções
export default {
    saveRegister() {
        cy.get(elements.buttons.register).click();
    },

    fillEmail(email) {
        cy.get(elements.fields.email).should('be.visible').type(email);
    },

    fillName(name) {
        cy.get(elements.fields.name).type(name);
    },

    fillPassword(password) {
        cy.get(elements.fields.password).should('be.visible').type(password);
    },

    checkErrorMessage(message) {
        cy.get(elements.messages.error).should('be.visible').should('contain', message);
    },

    checkRegisterSucess(message) {
        cy.get(elements.messages.successTitle).should('be.visible').should('contain', message);
    },
};
