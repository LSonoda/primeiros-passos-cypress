class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox:'.oxd-select-dropdown > :nth-child(2)',
            thirdItemCombobox: '.oxd-select-dropdown > :nth-child(3)',
            dateCloseButton: ".--close",
            submitButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button",
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicense) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear({force: true}).type('2025-07-29')
        cy.get(this.selectorsList().dateCloseButton).click({force: true})
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }

    
}

export default MyInfoPage