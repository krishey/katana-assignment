//This is spec file, inside your google-search.spec.ts
import { HomePage } from '../../page-objects/home-page';
import { CustomerPage } from '../../page-objects/customer-page';
import { ContactPage } from '../../page-objects/contact-page';


const homePage = new HomePage();
const customerPage = new CustomerPage();
const contactPage = new ContactPage();

describe('New Customer addition Feature', () => {

    beforeEach(() => {
        homePage.loadWebURL();
        homePage.userClickOnSignin();
        homePage.userLogintoSystem(Cypress.env('username'), Cypress.env('password'));
        homePage.userLoginGetSucessful('Thilini Thillekerathne');
    });

    it('Add New customer via plus button click', function () {
        customerPage.ClickOnPlusButton();
        customerPage.selectDropdownListOption('Customer');
        customerPage.fillCustomerFormFirstName('firstName1');
        customerPage.fillCustomerFormLastName('lastName1');
        customerPage.fillCustomerFormCompany('company1');
        customerPage.applyNewCustomerDetails();
        customerPage.checkCustomerFormDisplayName('firstName1 lastName1');
        customerPage.waituntilStatusMessageDisapears('Not saved');
        customerPage.waituntilStatusMessageDisapears('Saving...');
        // Commented as flakiness : 5.	Has an issue: https://github.com/cypress-io/cypress/issues/380 At the time of following xhr response:
        customerPage.fillCustomerFormEmail('email1@example.com');
        // customerPage.fillCustomerFormPhone('+111111');
        // customerPage.fillCustomerFormComment('comment1');
        // customerPage.updateCustomerFormDisplayName('displayname1');
        customerPage.applyNewCustomerDetails();
        customerPage.waituntilStatusMessageDisapears('Not saved');
        customerPage.waituntilStatusMessageDisapears('Saving...');
        customerPage.verifyStatusMessage('All changes saved');
        contactPage.navigatesToPage('Contacts');
        contactPage.newlyAddedEntryShouldBe('firstName1 lastName1', 'email1@example.com', '', '');
    });

    it('Add New customer via COntact page "New Customer" button click', function () {
        contactPage.navigatesToPage('Contacts');
        contactPage.clickOnAddNewCustomerbutton();
        customerPage.fillCustomerFormFirstName('firstName2');
        customerPage.fillCustomerFormLastName('lastName2');
        customerPage.fillCustomerFormCompany('company2');
        customerPage.applyNewCustomerDetails();
        customerPage.checkCustomerFormDisplayName('firstName2 lastName2');
        customerPage.waituntilStatusMessageDisapears('Not saved');
        customerPage.waituntilStatusMessageDisapears('Saving...');
        // Commented as flakiness : 5.	Has an issue: https://github.com/cypress-io/cypress/issues/380 At the time of following xhr response:
        customerPage.fillCustomerFormEmail('email2@example.com');
        // customerPage.fillCustomerFormPhone('+22222');
        // customerPage.fillCustomerFormComment('comment2');
        // customerPage.updateCustomerFormDisplayName('displayname2');
        customerPage.applyNewCustomerDetails();
        customerPage.waituntilStatusMessageDisapears('Not saved');
        customerPage.waituntilStatusMessageDisapears('Saving...');
        customerPage.verifyStatusMessage('All changes saved');
        contactPage.navigatesToPage('Contacts');
        contactPage.newlyAddedEntryShouldBe('firstName2 lastName2', 'email2@example.com', '', '');
    });

    it('Add New customer without DisplayName', function () {
        customerPage.ClickOnPlusButton();
        customerPage.selectDropdownListOption('Customer');
        customerPage.fillCustomerFormFirstName('firstName3');
        customerPage.fillCustomerFormLastName('lastName3');
        customerPage.applyNewCustomerDetails();
        customerPage.fillCustomerFormCompany('company3');
        customerPage.applyNewCustomerDetails();
        customerPage.waituntilStatusMessageDisapears('Not saved');
        customerPage.waituntilStatusMessageDisapears('Saving...');
        // Commented as flakiness : 5.	Has an issue: https://github.com/cypress-io/cypress/issues/380 At the time of following xhr response:
        customerPage.fillCustomerFormEmail('email3@example.com');
        // customerPage.fillCustomerFormPhone('+33333');
        // customerPage.fillCustomerFormComment('comment3');
        customerPage.applyNewCustomerDetails();
        cy.get('[id=displayNamePicker]').clear();
        customerPage.applyNewCustomerDetails();
        customerPage.verifyStatusMessage('Not saved');
    });

    it('Add New customer without Email address', function () {
        customerPage.ClickOnPlusButton();
        customerPage.selectDropdownListOption('Customer');
        customerPage.fillCustomerFormFirstName('firstName4');
        customerPage.fillCustomerFormLastName('lastName4');
        customerPage.applyNewCustomerDetails();
        customerPage.fillCustomerFormCompany('company4');
        customerPage.checkCustomerFormDisplayName('firstName4 lastName4');
        customerPage.waituntilStatusMessageDisapears('Not saved');
        customerPage.waituntilStatusMessageDisapears('Saving...');
        // Commented as flakiness : 5.	Has an issue: https://github.com/cypress-io/cypress/issues/380 At the time of following xhr response:
        customerPage.fillCustomerFormEmail('email4@example.com');
        // customerPage.fillCustomerFormPhone('+44444');
        // customerPage.fillCustomerFormComment('comment4');
        cy.get('[data-testid=inputCustomerEmail]').clear();
        customerPage.applyNewCustomerDetails();
        customerPage.waituntilStatusMessageDisapears('Not saved');
        customerPage.waituntilStatusMessageDisapears('Saving...');
        customerPage.verifyStatusMessage('All changes saved');
        contactPage.navigatesToPage('Contacts');
        contactPage.newlyAddedEntryShouldBe('firstName4 lastName4', '', '', '');
    });

    it('Add New customer without First, Last name or Company Name', function () {
        customerPage.ClickOnPlusButton();
        customerPage.selectDropdownListOption('Customer');
        // Commented as flakiness : 5.	Has an issue: https://github.com/cypress-io/cypress/issues/380 At the time of following xhr response:
        customerPage.fillCustomerFormEmail('email5@example.com');
        customerPage.fillCustomerFormPhone('+55555');
        customerPage.fillCustomerFormComment('comment5');
        customerPage.applyNewCustomerDetails();
        customerPage.waituntilStatusMessageDisapears('Saving...');
        customerPage.verifyStatusMessage('Not saved');
    });

});
