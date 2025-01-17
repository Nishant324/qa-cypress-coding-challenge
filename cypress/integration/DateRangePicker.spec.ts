import 'cypress-xpath';
import DateRangePickerPage  from '../POM/DateRangePickerPOMFile.page';
import { formattedDate, StartdayNumber, formattedEndDate, EnddayNumber} from "../support/variables";

describe('DateRangePicker', () => {
  const dateRangePickerPage = new DateRangePickerPage();
  beforeEach(() => {
    // Visit the application screen
    cy.visit('/');
  });
  it('should render', () => {
    // Verify that the DateRangePicker component is visible
    dateRangePickerPage.getDateRangePicker().should('be.visible');
  });

  it('should verify the functionality of the date picker', () => {
    // Click on the Start date field to open the date picker
    dateRangePickerPage.openStartDatePicker().click();
    // Verify that the date picker is visible to the user
    dateRangePickerPage.getDatePicker().should('be.visible');
    // Test the functionality of the forward and backward arrow buttons
    dateRangePickerPage.clickArrow(1).should('be.visible').click();
    dateRangePickerPage.clickArrow(4).should('be.visible').click();
    // Select the start and end date ranges within the picker
    dateRangePickerPage.SelectDate(formattedDate).contains(StartdayNumber).should('be.visible').click();
    dateRangePickerPage.SelectDate(formattedEndDate).contains(EnddayNumber).should('be.visible').click();
  });

  it('should allow the user to manually enter date ranges in the start and end date fields', () => {
    cy.fixture('dataFile.json').then((data) => {
      // Access the fixture data within the test
      const ValidStartDate = data.ValidStartDate;
      const ValidEndDate = data.ValidEndDate;
    
      // Use the fixture data in your test assertions or actions
      dateRangePickerPage.openStartDatePicker().should('be.visible').clear().type(ValidStartDate);
      dateRangePickerPage.openEndDatePicker().should('be.visible').clear().type(ValidEndDate);
    });
  });

  it('should handle invalid date ranges and revert to valid dates', () => {
    cy.fixture('dataFile.json').then((data) => {
      // Access the fixture data within the test
      const InValidStartDate = data.InValidStartDate;
      const InValidEndDate = data.InValidEndDate;
    
      // Use the fixture data in your test assertions or actions
      dateRangePickerPage.openStartDatePicker().should('be.visible').clear().type(InValidStartDate);
      dateRangePickerPage.openEndDatePicker().should('be.visible').clear().type(InValidEndDate);
    });
  });
});
