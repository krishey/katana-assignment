export class TableElement {

    checkForLastDataLoaded(expectedData: any) {
        const actualData = this.getLastRowDataFromTable();
        
    }

    waitUntillTableLoads() {
        cy.get(".ag-cell", { timeout: 10000 }).should("be.visible");
    }

    private getLastRowDataFromTable() {
        return cy.get('.ag-center-cols-container').find('.ag-row').last();
    }



}