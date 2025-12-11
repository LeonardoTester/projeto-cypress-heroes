class ServicePage {

    selectorsList() {
     const selectors = {
       
        ButtonLike: "[data-cy='like']",
        ButtonMoney: "[data-cy='money']",
        confirmYes: ".text-white"
        
    
        }
               
            return selectors

        }

        FeatureLike() {
            
        cy.get(this.selectorsList().ButtonLike).eq(0).click()
         
            

        }

         FeatureMoney() {
            
         cy.get(this.selectorsList().ButtonMoney).eq(0).click()
         cy.get(this.selectorsList().confirmYes).click()

        }

    }

    export default ServicePage