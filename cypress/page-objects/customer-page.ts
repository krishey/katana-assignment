//Inside your CustomerPage.ts file. This is pageobject file.

export class CustomerPage {

    ClickOnPlusButton() {
        cy.get('#globalAdd').click();
    }

    selectDropdownListOption(dropDownListOption: string) {
        cy.get('#add-customer').contains(dropDownListOption).click();
        cy.get('#add-customer').should('not.exist');
        cy.get('.MuiTypography-caption').contains('Customer').should('be.visible', { timeout: 10000 });
    }

    fillCustomerForm(firstName: string, lastName: string, company: string, email: string, phone: string, comment: string) {
        cy.get('[data-testid=inputCustomerFirstName]').type(firstName);
        cy.get('[data-testid=inputCustomerLastName]').type(lastName);
        cy.get('[data-testid=inputCustomerCompany]').type(company);
        cy.get('[data-testid=inputCustomerEmail]').type(email);
        cy.get('[data-testid=inputCustomerPhone]').type(phone);
        cy.get('[data-testid=inputCustomerComment]').type(comment);
        console.log('customer added :' + firstName + ' ' + lastName);
    }

    fillCustomerFormFirstName(firstName: string) {
        cy.get('[data-testid=inputCustomerFirstName]').type(firstName, { delay: 50 });
        cy.get('[name=firstName]').invoke('attr', 'value').should('eq', firstName, { timeout: 10000 });
    }

    fillCustomerFormLastName(lastName: string) {
        cy.get('[data-testid=inputCustomerLastName]').type(lastName, { delay: 50 });
        cy.get('[name=lastName]').invoke('attr', 'value').should('eq', lastName, { timeout: 10000 });
    }

    fillCustomerFormCompany(company: string) {
        cy.get('[data-testid=inputCustomerCompany]').type(company, { delay: 50 });
        cy.get('[name=company]').invoke('attr', 'value').should('eq', company, { timeout: 10000 });
    }

    fillCustomerFormEmail(email: string) {
        cy.get('[data-testid=inputCustomerEmail]').type(email, { delay: 50 });
        cy.get('[name=email]').invoke('attr', 'value').should('eq', email, { timeout: 10000 });
    }

    fillCustomerFormPhone(phone: string) {
        cy.get('[data-testid=inputCustomerPhone]').type(phone, { delay: 50 });
        cy.get('[name=phone]').invoke('attr', 'value').should('eq', phone, { timeout: 10000 });
    }

    fillCustomerFormComment(comment: string) {
        cy.get('[name=comment]').invoke('attr', 'value').should('eq', '', { timeout: 10000 });
        cy.get('[data-testid=inputCustomerComment]').type(comment, { delay: 50 });
    }

    // clearCustomerFormFieldValue(fieldName: string) {
    //     cy.get('label').should('contain', fieldName).parent().within(() => {
    //         cy.get('.MuiInput-fullWidth').should('contain', fieldName)
    //         cy.get('input').clear();
    //     });
    // }

    checkCustomerFormDisplayName(displayname: string) {
        cy.get('[id=displayNamePicker]').invoke('attr', 'value').should('eq', displayname);
        console.log('customer added : ' + displayname);
    }

    updateCustomerFormDisplayName(displayname: string) {
        cy.get('[data-testid=inputCustomerDisplayName]').clear();
        cy.get('[data-testid=inputCustomerDisplayName]').type(displayname, { delay: 50 });
        // cy.get('input').invoke('attr', 'value').should('eq', displayname, { timeout: 10000 });
        console.log('customer added : ' + displayname);
    }

    applyNewCustomerDetails() {
        cy.get('.MuiTypography-caption').contains('Customer').click();
    }

    waituntilStatusMessageDisapears(statusMessage: string) {
        cy.get('.MuiGrid-justify-content-xs-flex-end').contains(statusMessage).should('not.exist', { timeout: 10000 });
    }

    verifyStatusMessage(statusMessage: string) {
        cy.get('.MuiGrid-justify-content-xs-flex-end').within(() => {
            cy.get('.print-hide').should('contain', statusMessage);
        });
    }





}