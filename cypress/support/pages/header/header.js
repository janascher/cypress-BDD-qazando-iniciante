// 3- Crias as ações da page

/// <reference types="cypress"/>

import 'cypress-real-events/support';

const elements = {
    url: {
        homepage: '/',
        dashboard: '/my-account',
        about: '/about',
        contact: '/contact-two',
        faqs: '/faqs',
    },
    section: {
        header: '.header-section',
    },
    logo: {
        image: 'div.header-logo > div > a > img',
    },
    dropdown: {
        pages: ':nth-child(3) > #menuHome',
    },
    submenuPages: {
        dashboard: ':nth-child(3) > .sub-menu li a',
    },
};

export default {
    accessHomepage() {
        cy.visit(elements.url.homepage).get(elements.section.header);
        cy.get(elements.logo.image).should('exist'); // Confirma que o elemento está no DOM
    },

    accessDashboard() {
        cy.visit(elements.url.homepage);

        // Passo 1: Garante que o dropdown "Pages" existe e é visível
        cy.get(elements.dropdown.pages)
            .should('exist') // Verifica se existe no DOM
            .should('be.visible') // Verifica se está visível
            // .trigger('mouseover'); // Simula o mouseover no dropdown
            .realHover(); // Simula o evento de hover usando o plugin Cypress-real-events

        // Passo 2: Aguarda que o submenu seja exibido
        cy.get(elements.dropdown.pages)
            .parent() // Seleciona o <li> que contém o #menuHome
            .find('ul.sub-menu')
            .should('exist') // Garante que o submenu existe no DOM
            .should(($submenu) => {
                // Espera até que o submenu se torne visível
                expect($submenu).to.have.css('visibility', 'visible');
                expect($submenu).to.have.css('opacity', '1');
            })
            .should('be.visible'); // Garante que o submenu está visível

        // Passo 3: Clica no item "Customer Dashboard"
        cy.contains('Customer Dashboard')
            .should('be.visible') // Garante que o item está visível
            .click(); // Clica no item
    },

    clickLogo() {
        cy.get(elements.logo.image).click({ force: true });
    },

    checkTargetURL() {
        cy.url().should('include', elements.url.homepage);
    },
};
