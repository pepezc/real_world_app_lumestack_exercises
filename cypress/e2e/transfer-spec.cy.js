import userData from '../fixtures/userData.json'
import transactionData from '../fixtures/transactionData.json'
import LoginPage from '../Pages/loginPage'
import ProfilePage from '../Pages/profilePage'
import TransactionPage from '../Pages/transactionPage'
import SignUpPage from '../Pages/signupPage'

const loginPage = new LoginPage()
const profilePage = new ProfilePage()
const transactionPage = new TransactionPage()
const signUpPage = new SignUpPage()



describe('Funcionalidade: Transação', () => {

    it.skip('2o Exercício - TC-001: Deve enviar dinheiro com saldo suficiente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
        profilePage.confirmProfilePage()
        transactionPage.transactionButtonClick()
        transactionPage.transactionUserListClick()
        transactionPage.fillTransactionData(transactionData.validTransfer.amount,transactionData.validTransfer.note)
        transactionPage.submitTransaction()
        transactionPage.transactionSubmittedAlert()
    })

        it.skip('2o Exercício - TC-002: Enviar dinheiro com saldo insuficiente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
        profilePage.confirmProfilePage()
        transactionPage.transactionButtonClick()
        transactionPage.transactionUserListClick()
        transactionPage.fillTransactionData(transactionData.insufficientFunds.amount,transactionData.insufficientFunds.note)
        transactionPage.submitTransaction()
    })

        it.skip('3o Exercício - TC-001: Visualizar histórico de transações com sucesso', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
        profilePage.confirmProfilePage()
        transactionPage.viewTransactionDetails()
        transactionPage.validateTransactionDetails()
    })

        it('3o Exercício - TC-002: Visualizar o histórico de transações sem transações anteriores', () => {

        const uniqueUsername = `${userData.newUser.username}_${Date.now()}` //criando um usuário novo aleatório toda vez para validar o teste, se não quebra o teste por que o usuário estático fica salvo no banco de dados após a primeira rodada do código.

        loginPage.accessLoginPage()
        loginPage.signUp()
        signUpPage.signupFillForm(userData.newUser.firstName,userData.newUser.lastName,uniqueUsername,userData.newUser.password)
        signUpPage.submitForm()
        loginPage.loginWithUser(uniqueUsername,userData.newUser.password)
        profilePage.confirmProfilePage()
        transactionPage.newUserOnboardingBankCreation(transactionData.newUserBank.bankName,transactionData.newUserBank.routingNumber,transactionData.newUserBank.accountNumber)
        transactionPage.viewTransactionDetails()
    })

})
