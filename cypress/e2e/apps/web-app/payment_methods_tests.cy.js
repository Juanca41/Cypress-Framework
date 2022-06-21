/// <reference types="cypress" />

describe("Payment Methods screen test cases", () => {

    beforeEach(() => {
        cy.login("juancarlosgularte@bettervet.com", "Helloworld10")
      })

    it("Intercepting the cards", () => {
        cy.get(".headerWeb__logged--user > button").click()
        cy.contains("Payment Methods").click()
        cy.intercept("GET","https://stage-api.bettervet.com/1.0/user/cards", {fixture: "cards.json"}).as("cards")
        cy.wait("@cards").its("response.body.data").should("have.length", 2)
    })
})