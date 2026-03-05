class LoginPage{

    selectorsList(){
        const selectors = {
            usernameInput: '[name="username"]',
            passwordInput: '[name="password"]',
            submitButton: '[data-test="signin-submit"]',
            loginFailAlert: '[data-test="signin-error"]',
            signUpButton: '[data-test="signup"]'
        }
        return selectors;
    }

    accessLoginPage(){
        cy.visit('/signin')
    }
   
    loginWithUser(username,password){
        cy.get(this.selectorsList().usernameInput).type(username)
        cy.get(this.selectorsList().passwordInput).type(password)
        cy.get(this.selectorsList().submitButton).click()
    }

    loginFailAlert(){
        cy.get(this.selectorsList().loginFailAlert)
     }

    signUp(){
        cy.get(this.selectorsList().signUpButton).click()
    }
}

export default LoginPage







