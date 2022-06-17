/// <reference types="cypress" />

import { BaseMethods } from "../../../helpers/base_methods"

const base = new BaseMethods()
const logo = ".header__logo"
const dont_have_account = ".headerWeb__guest--text"
const start_process = "a > span"
const title = ".Login__title"
const subtitle = "[class='Login__text']"
const continue_google = ".googleButtonStyles"
const continue_google_to_click = ".googleButtonStyles > img"
const continue_apple = ".appleButtonStyles"
const sign_in_button = ".Login__fields > button:nth-of-type(3)"
const forgot_password = "[class='Login__forgotPasswordButton Login__accentColoredText']"

const email_field = "input[placeholder='Email']"
const password_field = "input[placeholder='Password']"
const error_message = "div[class='inputErrorText']"

const google_email = "#identifierId"
const google_pwd = "//input[@type='password']"
const google_next_button = ".qhFLie div div button"

function LoginPageTextValidations(){

    base.invokeTextToEqual(logo, "Pet Center")
    base.invokeTextToEqual(dont_have_account, "Don't have an account?Start the Process")
    base.invokeTextToEqual(start_process, "Start the Process")
    base.invokeTextToEqual(title, "Sign in with Your Existing Account")
    base.invokeTextToEqual(subtitle, "Sign in and get the care your pet needs from the safety and comfort of your home.")
    base.invokeTextToEqual(continue_google, "Continue with Google")
    base.invokeTextToEqual(continue_apple, "Continue with Apple")
    base.invokeTextToEqual(sign_in_button, "Sign In")
    base.invokeTextToEqual(forgot_password, "Forgot your password?")
}

export function BetterVetLoginProcess(user="juancarlosgularte@bettervet.com", password="Helloworld10"){
    LoginPageTextValidations()
    base.typeText(email_field, user)
    base.typeText(password_field, password)
    base.clickElement(sign_in_button)
}

export function NegativeBetterVetLoginProcess(user, password, error){
    BetterVetLoginProcess(user, password)
    base.invokeTextToEqual(error_message, error)
}

// function GoogleAppleLoginProcess(continue_with, user, pwd){
    
//     base.clickElement(continue_with)
//     base.clickElement(continue_with)
//     base.clickElement(continue_with)
//     cy.window().then((win) => {
//         cy.stub(win, 'open').as("secondWindow")
//       })
    
//     cy.get('@secondWindow', { timeout: 6000 }).then(()=>{
//         base.typeText(google_email, "juancarlosgularte@bettervet.com")
//     })
// }
// export function GoogleSignIn(){
//     // GoogleAppleLoginProcess(continue_apple)
//     GoogleAppleLoginProcess(continue_google)
// }