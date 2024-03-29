class DatePicker{
    fillDatePicker(ariaDescribedBy, Year, Month, Day){

        const targetDate = Month + " " + Day + ", " + Year
        cy.get('span[class=input-date]').find('input[aria-describedby='+ariaDescribedBy+']').click()
        cy.get('.flatpickr-calendar.animate.osui-datepicker-calendar.inside-popup.arrowBottom.arrowLeft.open').find('.flatpickr-months > .flatpickr-month > .flatpickr-current-month > select.flatpickr-monthDropdown-months').select(Month)
        cy.get('.flatpickr-calendar.animate.osui-datepicker-calendar.inside-popup.arrowBottom.arrowLeft.open').find('.flatpickr-months > .flatpickr-month > .flatpickr-current-month > .numInputWrapper > .numInput.cur-year').type(Year)
        cy.get('.flatpickr-calendar.animate.osui-datepicker-calendar.inside-popup.arrowBottom.arrowLeft.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer').find('span[aria-label="'+targetDate+'"]').click()

    }
    fillDatePickerPika(Year, Month, Day){
        cy.get('select.pika-select.pika-select-month').select(Month)
        cy.get('select.pika-select.pika-select-year').select(Year)
        cy.get('#b8-Calendar > .pika-single > .pika-lendar > .pika-table > tbody > tr > td').find('button[data-pika-day='+Day+']').click()
    }
}
export default new DatePicker();