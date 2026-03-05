import userData from '../fixtures/userData.json'
import LoginPage from '../Pages/loginPage'
import ProfilePage from '../Pages/profilePage'
import SignUpPage from '../Pages/signupPage'

const loginPage = new LoginPage()
const profilePage = new ProfilePage()
const signUpPage = new SignUpPage()

describe('Funcionalidade: Login', () => {


  it.skip('TC-001: Validar login com credenciais válidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    profilePage.confirmProfilePage()
  })


  it.skip('TC-002: Validar login com credenciais inválidas', () => { //Deve exibir uma mensagem de erro ao fazer login com credenciais 
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.loginFailAlert()
  });

  it('TC-003: Validar registro de novo usuário com informações válidas', () => { //Deve registrar um novo usuário com informações válidas
    loginPage.accessLoginPage()
    loginPage.signUp()
    signUpPage.signupFillForm(userData.newUser.firstName,userData.newUser.lastName,userData.newUser.username,userData.newUser.password)
    signUpPage.submitForm()
  });

    it.skip('TC-004: Validar registro de novo usuário com informações inválidas', () => { //Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias
    loginPage.accessLoginPage()
    loginPage.signUp()
    signUpPage.signupFillFormInvalid(userData.newUserInvalid.firstName,userData.newUserInvalid.lastName,userData.newUserInvalid.username,userData.newUserInvalid.password)
    cy.get(signUpPage.selectorsList().signupSubmit).should('be.disabled')  // Validação principal: O botão NÃO deve ser clicável
  });
  
})



