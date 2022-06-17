// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//


import { BaseMethods } from "../helpers/base_methods"

// -- This is a parent command --
Cypress.Commands.add('login', (user, password) => {
    const base = new BaseMethods()
    base.clickElement("a > span")
    base.typeText("input[placeholder='Email']", user)
    base.typeText("input[placeholder='Password']", password)
    base.clickElement(".Login__fields > button:nth-of-type(3)")
})

import 'cypress-file-upload';
import '@percy/cypress';
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
