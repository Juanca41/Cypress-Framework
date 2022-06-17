/// <reference types="cypress" />

export class BaseMethods {

    invokeTextToEqual(locator, text){
        cy.get(locator).invoke("text").then(textValue => {expect(textValue).to.equal(text)})
    }

    shouldContainText(locator, text){
        cy.get(locator).then(textValue => {cy.wrap(textValue).should("contain.text", text)})
    }
    
    shouldHaveText(locator, text){
        cy.get(locator).then(textValue => {cy.wrap(textValue).should("have.text", text)})
    }

    getTextOfElement(locator){
        cy.get(locator).then((theElement) => {
            return theElement.text();
        }).as("elementText")
    }

    validateElementTextIntoAnotherElement(locator, locator2, message, index, message2=""){
        cy.get(locator, { timeout: 3000 }).then(text => {
            const text_splitted = text.text().split(" ");
            this.invokeTextToEqual(locator2, `${message}${text_splitted[index]}${message2}`)
        })
    }
    
    

    typeText(locator, text){
        cy.get(locator).type(text)
    }

    clickElement(locator){
        // cy.get(locator).click()
        cy.get(locator, { timeout: 1000 }).should('be.visible').then(button => {
            cy.wrap(button).click()
        })
    }
}