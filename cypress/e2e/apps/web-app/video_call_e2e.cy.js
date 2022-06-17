/// <reference types="cypress" />

import {BetterVetLoginProcess} from "../../../apps/web-app/login_page/login_page"
import {HomePageTextValidations} from "../../../apps/web-app/home_page/home_page"

describe("E2E Booking - Video Call Appointments", () => {

    beforeEach(() => {

        // cy.visit("https://admin:BetterVetisAwesome@app-qa.bettervet.com/login")

        // BetterVetLoginProcess("juancarlosgularte+automation3@bettervet.com","Helloworld10")
        // API LOGIN
        cy.request("POST", "https://stage-api.bettervet.com/1.0/user/login", 
            {
                email: "juancarlosgularte@bettervet.com", 
                password: "Helloworld10"
            }).its("body")
        .then(res => {
            cy.log(res.data.session.refreshToken)
            const authorization = `Bearer ${res.data.session.accessToken}`;
            const webauth = "317d1a4b-8e0c-4c3a-907f-2bdc94c6b2b6"

            cy.request({
                method: "GET",
                url:`https://stage-api.bettervet.com/1.0/zipcode/${res.data.zipCode}`,
                headers: {
                    authorization,
                  }
            }).its("body").then(res => {cy.log(res.data.clinicId)})

            // cy.request({
            //     method: "GET",
            //     url:`https://stage-api.bettervet.com/1.0/clinic/availability/web/timeslots/DayVisit?zipCode=${res.data.zipCode}&clinicId=${res.data.clinicId}`,
            //     headers: {
            //         webauth,
            //       }
            // }).its("body").then(res => {
            //     const leadProvider = Object.keys(res.data.providers)[0]
            //     const providers_json = JSON.stringify(res.data.providers)
            //     cy.log(providers_json)
            // })

            cy.request({
                method: "GET",
                url:"https://stage-api.bettervet.com/1.0/user",
                headers: {
                    authorization,
                  }
            }).its("body").then(res => {cy.log(res.data.email)})

            cy.request({
                method: "GET",
                url:"https://stage-api.bettervet.com/1.0/patient/all",
                headers: {
                    authorization,
                  }
            }).its("body").then(pet_res => {
                const patients_json = JSON.stringify(pet_res.data)
                cy.log(pet_res.data[0].firstName)
                cy.log(patients_json)

                const root_object = {
                    appointments: `{"upcoming":[]}`,
                    currentUser: `{"id":"${res.data.id}","firstName":"${res.data.firstName}","lastName":"${res.data.lastName}","email":"${res.data.email}","phone":"${res.data.phone}","phoneValidated":${res.data.phoneValidated},"emailValidated":${res.data.emailValidated},"address":{"address1":"${res.data.address1}","address2":"${res.data.address2}","city":"${res.data.city}","state":"${res.data.state}"},"settings":{},"clinicId":"${res.data.clinicId}","zipCode":"${res.data.zipCode}","awaitingEmailValidation":${res.data.email},"vetsAvailableForZipCode":${res.data.vetsAvailableForZipCode},"registrationType":"${res.data.registrationType}","loginType":"${res.data.loginType}","referralCode":"${res.data.referralCode}","role":${res.data.role},"defaultCard":"${res.data.defaultCard}"}`,
                    history: '["/login","/"]',
                    paymentMethods: '{"cards":null}',
                    petList: `${patients_json}`
                    // secure: `{"accessToken":"${res.data.session.accessToken}","refreshToken":"${res.data.session.refreshToken}"}`
                }

                cy.request({
                    method: "GET",
                    url:"https://stage-api.bettervet.com/v2/referral",
                    headers: {
                        authorization,
                      }
                }).its("body").then(referrals_res => {
                    cy.log(referrals_res.data.referralCredits)
                    // const referrals_json = JSON.stringify(referrals_res.data)
                    // cy.log(referrals_json)
                    root_object["referrals"] = `{"credits":${referrals_res.data.referralCredits}."code":"${res.data.referralCode}"}`
                
                    cy.request({
                        method: "GET",
                        url:"https://stage-api.bettervet.com/v2/reminder",
                        headers: {
                            authorization,
                          }
                    }).its("body").then(reminder_res => {
                        cy.log(reminder_res.data.email)
                        const reminder_json = JSON.stringify(reminder_res.data)
                        cy.log(reminder_json)
                        root_object["reminders"] = reminder_json
                        root_object["secure"] = `{"accessToken":"${res.data.session.accessToken}","refreshToken":"${res.data.session.refreshToken}"}`
                        root_object["_persist"] = '{"version":-1,"rehydrated":true}'
                        // cy.reload()
                        // cy.window().then((window) => {
                        //     window.localStorage.setItem("hasLoggedIn", true)
                        //     window.localStorage.setItem("root", JSON.stringify(root_object))
                        //   })
                        cy.visit("/").then((window) => {
                            window.localStorage.removeItem("root")
                            window.localStorage.setItem("hasLoggedIn", true)
                            window.localStorage.setItem("root", JSON.stringify(root_object))
                        })
                        // cy.reload()
                    })
                })
            })
        })
      })

      afterEach(()=>{

        // cy.clearLocalStorage()
      })

      it("Free Video Call", ()=> {

        // HomePageTextValidations()

      })
      
    })