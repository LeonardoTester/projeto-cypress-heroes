class LoginPage {

    selectorsList() {
     const selectors = {
       
        EmailField: "[name='email']",
        passwordField: "[name='password']",
        ButtoLogin: ".undefined",
        SignButtom: ".text-white"
    
        }
               
            return selectors

        }

        loginWithUser(EmailField, passwordField) {

            cy.visit('http://localhost:3000/')
            cy.get(this.selectorsList().ButtoLogin).click()
            cy.get(this.selectorsList().EmailField).type(EmailField)
            cy.get(this.selectorsList().passwordField).type(passwordField)
            cy.get(this.selectorsList().SignButtom).click()

        }

    }

    export default LoginPage



    