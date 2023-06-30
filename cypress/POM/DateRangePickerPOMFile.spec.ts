class DateRangePickerPage {
    visit() {
      cy.visit('/');
    }
  
    getDateRangePicker() {
      return cy.get('.DateRangeSelect');
    }
  
    openStartDatePicker() {
      return cy.get('#mui-4');
    }

    openEndDatePicker() {
      return cy.get('#mui-5');
    }
  
    getDatePicker() {
      return cy.get('.css-1xhj18k');
    }
  
    clickForwardArrow() {
      return cy.xpath('(//*[name()="svg"])[1]');
    }
  
    clickBackwardArrow() {
      return cy.xpath('(//*[name()="svg"])[4]');
    }
  
  }
  
  export default DateRangePickerPage;
  