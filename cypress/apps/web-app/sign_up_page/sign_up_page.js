/// <reference types="cypress" />

import { BaseMethods } from "../../../helpers/base_methods"

const base = new BaseMethods()
const logo = ".header__logo"
const have_account = ".headerWeb__guest--text"
const login_button = "a > span"
const title = ".enterZip__title"
const subtitle = ".enterZip__textDescription.enterZip__text"

function SignUpPageTextValidations(){
    
    base.invokeTextToEqual(logo, "Pet Center")
    base.invokeTextToEqual(have_account, "Have an account?Log in")
    base.invokeTextToEqual(login_button, "Log in")
    base.invokeTextToEqual(title, "Experience better vet care from home")
    base.invokeTextToEqual(subtitle, "Quickly connect with your veterinarian online or schedule a home visit! \nLet’s start with some basic information about you. ")
}

export function GoToLoginPage(){
    SignUpPageTextValidations()
    base.clickElement(login_button)
}