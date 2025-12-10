import LoginPage from "./pages/login"

const acessLogin = new LoginPage()

describe('Cypress Hero', () => {

  it('Login', () => {
    
   acessLogin.loginWithUser('test@test.com', 'test123')
    
  })

  it.skip('and other test', () => {

    
  })
})