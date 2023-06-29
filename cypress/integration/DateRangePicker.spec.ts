/*  
* Scenario: Verify the functionality of the date range picker using the Cypress test.
* Given: user is on the application screen where the data range picker is available.
* When:  User clicks on the date fields.
* And: Chooses a Date range from the picker.
* Then: fields should get populated by the desired date range selected by the user.
*/

describe('DateRangePicker', () => {
  it('should render', () => {
    cy.visit('/');
    cy.get('.DateRangeSelect').should('be.visible');
  });
  //Test case for selecting the dates from the date picker
  it('verify the functionality of date picker', () => {
    //Clicks on the Start date field to open the date picker
    cy.get('#mui-4').click({force : true});
    //Assertion for verifying that the picker is visible to users
    cy.get('.css-1xhj18k').should('be.visible');
    //this is for verifying that the forward and backword arrow button are functional
    cy.get(':nth-child(1) > .css-f7iyql > .MuiIconButton-edgeEnd > [data-testid="ArrowLeftIcon"] > path').click({force : true});
    cy.get(':nth-child(2) > .css-f7iyql > .MuiIconButton-edgeStart > [data-testid="ArrowRightIcon"]').click({force : true});
    //This is for selecting the start and end date ranges within the Picker
    cy.get('[aria-label="Jun 1, 2023"]').contains('1').click({force : true});
    cy.get('[aria-label="Jul 31, 2023"]').contains('31').click({force : true});

    // Assertions
    cy.get(':nth-child(1) > .css-f7iyql > .MuiIconButton-edgeEnd > [data-testid="ArrowLeftIcon"] > path').should('be.visible');
    cy.get(':nth-child(2) > .css-f7iyql > .MuiIconButton-edgeStart > [data-testid="ArrowRightIcon"]').should('be.visible');
    cy.contains('1').should('be.visible');
    cy.contains('31').should('be.visible');
  })
    //Test case for verifying that user is allowed to enter the dates manually.
  it('Verify that user can manually add the date ranges on the start and end date fields', () => {
    //Assertion
    cy.get('#mui-4').should('be.visible')
    //For clearing and adding the date value manually.
    cy.get('#mui-4').clear().type("06012022");
    //Assertion
    cy.get('#mui-5').should('be.visible')
    //For clearing and adding the date value manually.
    cy.get('#mui-5').clear().type("31012022");
  })

});




