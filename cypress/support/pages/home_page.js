// 3- Crias as ações da page

/// <reference types="cypress"/>

const elements = {
    url: {
        visit: '/',
    },
    section: {
        header: '#top_header',
    },
    links: {
        login: '.fa-user',
        register: '.fa-lock',
    },
    fields: {
        email: '#user',
        register_email: '#email'
    },
};

export default {
    accessLogin() {
        cy.visit(elements.url.visit).get(elements.section.header);
        cy.get(elements.links.login).should('be.visible').click();
        cy.get(elements.fields.email).should('be.visible');
    },

    accessRegister() {
        cy.visit(elements.url.visit).get(elements.section.header);
        cy.get(elements.links.register).should('be.visible').click();
        cy.get(elements.fields.register_email).should('be.visible');
    },
};
