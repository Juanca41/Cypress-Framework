/// <reference types="cypress" />

import {GoToLoginPage} from "../../../apps/web-app/sign_up_page/sign_up_page"
import {BetterVetLoginProcess, NegativeBetterVetLoginProcess, GoogleSignIn} from "../../../apps/web-app/login_page/login_page"
import {HomePageTextValidations} from "../../../apps/web-app/home_page/home_page"

describe("Login Page test cases", () => {

    beforeEach(() => {
        cy.visit('https://admin:BetterVetisAwesome@app-qa.bettervet.com')
      })

    afterEach(()=>{

        cy.clearLocalStorage()
    })

    const user_pwd_error = [
        {
            user: 'juancarlosgularte@bettervet.com',
            password: 'Helloworld100',
            expectedError: 'User or password invalid.'
        },
        {
            user: 'juancarlosgularte',
            password: 'Helloworld10',
            expectedError: 'Please enter a valid email address'
        },
        {
            user: 'juancarlosgularte@bettervet.com',
            password: '123',
            expectedError: 'Your password must contain at least one number, a capital letter and a minimum of 6 characters'
        }
    ];
    
    user_pwd_error.forEach((data) => {
        it("BetterVet login - Negative", ()=>{

            cy.log("SIGN UP PAGE")
            GoToLoginPage()

            cy.log("LOGIN PAGE")
            NegativeBetterVetLoginProcess(data.user, data.password, data.expectedError)
        })
    })

    it("BetterVet login - Positive", ()=>{
        
        cy.log("SIGN UP PAGE")
        GoToLoginPage()

        cy.log("LOGIN PAGE")
        BetterVetLoginProcess()

        cy.log("HOME PAGE")
        HomePageTextValidations()
    })

    // it("Command login", ()=>{
        
    //     cy.login("juancarlosgularte@bettervet.com","Helloworld10")
    // })

    // it.skip("Google login - Positive", ()=>{
    //     cy.log("SIGN UP PAGE")
    //     GoToLoginPage()

    //     cy.log("LOGIN PAGE")
    //     GoogleSignIn()

    // })
})