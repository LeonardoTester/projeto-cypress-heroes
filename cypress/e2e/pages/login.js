class LoginPage {

    selectorsList() {
     const selectors = {
       
        EmailField: "[data-cy='email']",
        passwordField: "[data-cy='password']",
        ButtoLogin: ".undefined",
        SignButtom: ".text-white",
        AlertError: ".text-red-500"
    
        }
               
            return selectors

        }

        loginWithUser(UserEmail, password) {

            cy.visit('http://localhost:3000/')
            cy.get(this.selectorsList().ButtoLogin).click()
            cy.get(this.selectorsList().EmailField).type(UserEmail)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().SignButtom).click()

        }

        AlertFail() {

        cy.get(this.selectorsList().AlertError)


        }
     
    }

    export default LoginPage



    