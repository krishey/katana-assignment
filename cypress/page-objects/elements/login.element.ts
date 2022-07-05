export class LoginElement {

    login(userName: string, password: string): void {
        this.enterUserName(userName);
        this.enterPassword(password);
        this.submitLogin();
    }

    enterUserName(userName: string) {
        this.getUserNameField().type(userName);
    }

    enterPassword(password: string) {
        this.getPasswordField().type(password);
    }

    submitLogin() {
        this.getLoginButton().click();

    }

    userNameShouldAppearAs(userName: string) {
        cy.get('.MuiTypography-body1').should('contain', userName)
    }

    private getUserNameField() {
        return cy.get('[inputmode=email]');
    }

    private getPasswordField() {
        return cy.get('[type=password]');
    }

    private getLoginButton() {
        return cy.get('[type=submit]');
    }
}
