//Inside your HomePage.ts file. This is pageobject file.
/// <reference types="cypress" />
import { LoginElement } from '../page-objects/elements/login.element';

export class HomePage {

    loadWebURL() {
        cy.clearCookies({ domain: null } as any);
        cy.visit('https://katanamrp.com/');
        cy.get('.button--regular').should('exist', { timeout: 10000 });
    }

    userClickOnSignin() {
        cy.get('.button__text').contains('Sign in').click();
        cy.url().should('contain', 'https://katanamrp.com/login');
        cy.get('#auth0-loading-screen').should('not.exist', { timeout: 10000 });
    }

    userLogintoSystem(userName: string, passWord: string) {
        const loginElement = new LoginElement();
        loginElement.login(userName, passWord);
    }

    userLoginGetSucessful(visibleUserName: string) {
        cy.url({ timeout: 10000 }).should('contain', 'https://factory.katanamrp.com/sales');
        cy.get('.MuiTypography-body1').should('contain', visibleUserName);
    }

    userLogsOut(){
        
    }

}