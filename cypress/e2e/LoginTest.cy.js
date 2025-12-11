import LoginPage from "./pages/login"
import userData from "../fixtures/userData.json"
import ServicePage from "./pages/UserService"

const acessLogin = new LoginPage()
const featureServices = new ServicePage()

describe('Cypress Heroes', () => {

  it('Login - Success', () => {
    
   acessLogin.loginWithUser(userData.userSucess.UserEmail, userData.userSucess.password)
   featureServices.FeatureLike()
   featureServices.FeatureMoney()
    
  })

  it('Login - Fail', () => {

    
    acessLogin.loginWithUser(userData.userFail.UserEmail, userData.userFail.password)
    acessLogin.AlertFail()

    
  })
})