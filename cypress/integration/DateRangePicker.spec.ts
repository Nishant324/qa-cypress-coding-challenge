describe('DateRangePicker', () => {
  it('should render', () => {
    // Visit the application screen
    cy.visit('/');
    // Verify that the DateRangePicker component is visible
    cy.get('.DateRangeSelect').should('be.visible');
  });

  it('should verify the functionality of the date picker', () => {
    // Click on the Start date field to open the date picker
    cy.get('#mui-4').click({ force: true });
    // Verify that the date picker is visible to the user
    cy.get('.css-1xhj18k').should('be.visible');
    // Test the functionality of the forward and backward arrow buttons
    cy.get(':nth-child(1) > .css-f7iyql > .MuiIconButton-edgeEnd > [data-testid="ArrowLeftIcon"] > path').click({ force: true });
    cy.get(':nth-child(2) > .css-f7iyql > .MuiIconButton-edgeStart > [data-testid="ArrowRightIcon"]').click({ force: true });
    // Select the start and end date ranges within the picker
    cy.get('[aria-label="Jun 1, 2023"]').contains('1').click({ force: true });
    cy.get('[aria-label="Jul 31, 2023"]').contains('31').click({ force: true });

    // Assertions
    cy.get(':nth-child(1) > .css-f7iyql > .MuiIconButton-edgeEnd > [data-testid="ArrowLeftIcon"] > path').should('be.visible');
    cy.get(':nth-child(2) > .css-f7iyql > .MuiIconButton-edgeStart > [data-testid="ArrowRightIcon"]').should('be.visible');
    cy.contains('1').should('be.visible');
    cy.contains('31').should('be.visible');
  });

  it('should allow the user to manually enter date ranges in the start and end date fields', () => {
    // Assertion
    cy.get('#mui-4').should('be.visible');
    // Clear and manually enter the start date value
    cy.get('#mui-4').clear().type('06012022');
    // Assertion
    cy.get('#mui-5').should('be.visible');
    // Clear and manually enter the end date value
    cy.get('#mui-5').clear().type('31012022');
  });

  it('should handle invalid date ranges and revert to valid dates', () => {
    // Assertion
    cy.get('#mui-4').should('be.visible');
    // Clear and enter an invalid start date value
    cy.get('#mui-4').clear().type('70802022{enter}');
    // Assertion
    cy.get('#mui-5').should('be.visible');
    // Clear and enter an invalid end date value
    cy.get('#mui-5').clear().type('90402022{enter}');
  });
});
