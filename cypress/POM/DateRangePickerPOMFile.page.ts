import { param } from "cypress/types/jquery";

const DateRangeSelect = '.DateRangeSelect';
const openStartDatePicker = `#mui-4`;
const openEndDatePicker = '#mui-5';
const getDatePicker = '//div[@class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 css-1smlk3z-MuiPaper-root"]';
const clickArrow = (Position) => `(//*[name()="svg"])[position() = "${Position}"]`;
const LocatorforSelectDate = (arialabel) => `[aria-label="${arialabel}"]`;

class DateRangePickerPage {
  
  
    getDateRangePicker() {
      return cy.get(DateRangeSelect);
    }
  
    openStartDatePicker() {
      return cy.get(openStartDatePicker);
    }

    openEndDatePicker() {
      return cy.get(openEndDatePicker);
    }
  
    getDatePicker() {
      return cy.xpath(getDatePicker);
    }
  
    clickArrow(Position) {
      return cy.xpath(clickArrow(Position));
    }
  
    SelectDate(arialabel){
      return cy.get(LocatorforSelectDate(arialabel))
    }
  
  }
  
  export default DateRangePickerPage;
  