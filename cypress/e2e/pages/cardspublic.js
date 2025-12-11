class CardsPublic {

    selectorsList() {
     const selectors = {
       
        ButtonLike: "[data-cy='like']",
        ButtonMoney: "[data-cy='money']",
        Butttonconfirm: "button"
        
    
        }
               
            return selectors

        }

        FeatureLike() {
          
        cy.visit('http://localhost:3000/')    
        cy.get(this.selectorsList().ButtonLike).eq(0).click()
        cy.get('body').should('contain', 'You must log in to like.')
        cy.get(this.selectorsList().Butttonconfirm).eq(15).click()      

        }

         FeatureMoney() {
            
         cy.get(this.selectorsList().ButtonMoney).eq(0).click()
         cy.get('body').should('contain', 'You must log in to hire this hero.')
         cy.get(this.selectorsList().Butttonconfirm).eq(15).click()  
         

        }

    }

    export default CardsPublic