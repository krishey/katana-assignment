//Inside your ContactPage.ts file. This is pageobject file.

export class ContactPage {

    navigatesToPage(pageName: string) {
        cy.get('[class=MuiTab-wrapper]').contains(pageName).click();
    }

    waitUntilContactTableLoad() {
        cy.get('[ref=eLoadingText]').contains('Loading').should('not.exist', { timeout: 10000 })
            .then(() => {
                cy.get('[role=row]').should('exist', { timeout: 10000 })
                cy.get('[class=cellText]').should('exist', { timeout: 10000 })
            });
    }

    newlyAddedEntryShouldBe(Name: string, Email: string, Phone: string, Comment: string) {
        this.waitUntilContactTableLoad();
        cy.get('.ag-center-cols-container').find('.ag-row').last().within(() => {
            cy.get('[col-id=name]').within(() => cy.get('a').should('contain', Name));
            cy.get('[col-id=email]').should('contain', Email);
            cy.get('[col-id=phone]').should('contain', Phone);
            cy.get('[col-id=comment]').should('contain', Comment);
        });
    }

    clickOnAddNewCustomerbutton() {
        cy.get('.MuiButton-textPrimary').within(() => cy.get('[class=MuiButton-label]').should('contain', 'New customer')).click();
        cy.get('[class=Loader__content]').should('exist', { timeout: 10000 })
    }

}
