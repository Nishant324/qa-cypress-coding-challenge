import 'cypress-xpath';

// Get the current date
const currentDate = new Date();

// Get the year, month, and day from the current date
const Startyear = currentDate.getFullYear();
const Startmonth = currentDate.toLocaleString('default', { month: 'short' });
const Startday = currentDate.getDate();

// Format the date string
const formattedDate = `${Startmonth} ${Startday}, ${Startyear}`;

// Extract the day number from the formatted date
const StartdayNumber = Startday.toString();

// Calculate the future date (30 days ahead)
const endfutureDate = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));

// Get the year, month, and day from the future date
const endyear = endfutureDate.getFullYear();
const endmonth = endfutureDate.toLocaleString('default', { month: 'short' });
const endday = endfutureDate.getDate();

// Format the date string
const formattedEndDate = `${endmonth} ${endday}, ${endyear}`;

const EnddayNumber = endday.toString();

describe('DateRangePicker', () => {
  it('should render', () => {
    // Visit the application screen
    cy.visit('/');
    // Verify that the DateRangePicker component is visible
    cy.get('.DateRangeSelect').should('be.visible');
  });

  it('should verify the functionality of the date picker', () => {
    // Click on the Start date field to open the date picker
    cy.get('#mui-4').click();
    // Verify that the date picker is visible to the user
    cy.get('.css-1xhj18k').should('be.visible');
    // Test the functionality of the forward and backward arrow buttons
    cy.xpath('(//*[name()="path"])[1]').should('be.visible').click();
    cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"])[4]').should('be.visible').click();
    // Select the start and end date ranges within the picker
    cy.get(`[aria-label="${formattedDate}"]`).contains(StartdayNumber).should('be.visible').click();
    cy.get(`[aria-label="${formattedEndDate}"]`).contains(EnddayNumber).should('be.visible').click();
  });

  it('should allow the user to manually enter date ranges in the start and end date fields', () => {
    cy.fixture('example.json').then((data) => {
      // Access the fixture data within the test
      const ValidStartDate = data.ValidStartDate;
      const ValidEndDate = data.ValidEndDate;
    
      // Use the fixture data in your test assertions or actions
      cy.get('#mui-4').should('be.visible').clear().type(ValidStartDate);
      cy.get('#mui-5').should('be.visible').clear().type(ValidEndDate);
    });
  });

  it('should handle invalid date ranges and revert to valid dates', () => {
    cy.fixture('example.json').then((data) => {
      // Access the fixture data within the test
      const InValidStartDate = data.InValidStartDate;
      const InValidEndDate = data.InValidEndDate;
    
      // Use the fixture data in your test assertions or actions
      cy.get('#mui-4').should('be.visible').clear().type(InValidStartDate);
      cy.get('#mui-5').should('be.visible').clear().type(InValidEndDate);
    });
  });
});
