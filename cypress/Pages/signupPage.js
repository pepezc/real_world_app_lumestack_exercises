class SignUpPage {
        selectorsList(){
            const selectors = {
                firstName: '[name="firstName"]',
                lastName: '[name="lastName"]',
                userName: '[name="username"]',
                password: '[name="password"]',
                confirmPassword: '[name="confirmPassword"]',
                signupSubmit: '[data-test="signup-submit"]'
            }
        return selectors;
    }

    signupFillForm(fname,lname,username,password){
        cy.get(this.selectorsList().firstName).type(fname)
        cy.get(this.selectorsList().lastName).type(lname)
        cy.get(this.selectorsList().userName).type(username)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().confirmPassword).type(password)
    }

        signupFillFormInvalid(fname,lname,username,password){
        cy.get(this.selectorsList().firstName).type(fname)
        cy.get(this.selectorsList().lastName).type(lname)
        cy.get(this.selectorsList().userName).clear()
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().confirmPassword).type(password)
    }

    submitForm(){
        cy.get(this.selectorsList().signupSubmit).click()
    }
}

export default SignUpPage


