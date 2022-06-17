/// <reference types="cypress" />

import { BaseMethods } from "../../../helpers/base_methods"

const base = new BaseMethods()
const profile_dropdown = ".headerWeb__logged--user > button > p"
const title = ".PetHeader__welcomeTitle"

export function HomePageTextValidations(){

    base.shouldContainText(profile_dropdown, "Hi")
    // base.getTextOfElement(profile_dropdown)
    cy.get(profile_dropdown).then((theElement) => {
        // cy.log(theElement.text().replace("Hi ", ""))
        return theElement.text().replace("Hi", "").trim();
    }).as("elementText")

    cy.get("@elementText").then(text => {
        base.invokeTextToEqual(title, `Welcomes,  ${text}`)
    })


    // base.validateElementTextIntoAnotherElement(profile_dropdown, title, "Welcome, ",1)
}