class TransactionPage{

    selectorsList() {
        const selectors = {
            transactionButton: '[data-test="nav-top-new-transaction"]',
            transactionUser: '[data-test="user-list-item-GjWovtg2hr"]',
            transactionUserList: '[data-test="users-list"]',
            transactionAmountInput: '[name="amount"]',
            transactionNoteInput: '[placeholder="Add a note"]',
            transactionSubmitButton: '[data-test="transaction-create-submit-payment"]',
            transactionSubmittedAlert: '[data-test="alert-bar-success"]',
            transactionMineButton: '[data-test="nav-personal-tab"]',
            validateTransactionDetails: '[data-test^="transaction-item-"]',
            nextOnboardingButton: '[data-test="user-onboarding-next"][type="button"]',
            onboardingDialogTitle: '[data-test="user-onboarding-dialog-title"]',
            createBankAccountDialog: '[role="dialog"] [data-test="user-onboarding-dialog-title"]',
            bankNameCreation: '[name="bankName"]',
            routingNumberCreation: '[name="routingNumber"]',
            accountNumberCreation: '[name="accountNumber"]',
            bankAccountSubmit: '[data-test="bankaccount-submit"]',
            userBankOnboardingFinished: '[data-test="user-onboarding-dialog-title"]',
            bankAccCreationDoneBtn: '[data-test="user-onboarding-next"][type="button"]',
            personalTransactionTab: '[data-test="nav-personal-tab"]',
            createTransactionButton: '[data-test="transaction-list-empty-create-transaction-button"]'
        }
        return selectors
    }

    transactionButtonClick(){
        cy.get(this.selectorsList().transactionButton).click()
    }

    transactionUserListClick(){
        cy.get(this.selectorsList().transactionUserList).should('be.visible')
        // Clica no primeiro item da lista que comece com "user-list-item"
        cy.get('[data-test^="user-list-item"]').first().click()
    }

    fillTransactionData(amount, note){
        cy.get(this.selectorsList().transactionAmountInput).click().type(amount)
        cy.get(this.selectorsList().transactionNoteInput).click().type(note)
    }

    submitTransaction(){
        cy.get(this.selectorsList().transactionSubmitButton).click()
    }

    transactionSubmittedAlert(){
        cy.get(this.selectorsList().transactionSubmittedAlert).should('be.visible').and('contain', 'Submitted')
    }

    viewTransactionDetails(){
        cy.get(this.selectorsList().transactionMineButton).click()
    }

    validateTransactionDetails(){
        cy.get(this.selectorsList().validateTransactionDetails).should('exist').and('be.visible')
    }

    newUserOnboardingBankCreation(bankName,routingNumber,accNumber){
        cy.get(this.selectorsList().onboardingDialogTitle).should('be.visible')
        cy.get(this.selectorsList().nextOnboardingButton).should('be.visible').click()
        cy.get(this.selectorsList().createBankAccountDialog).should('be.visible')
        cy.get(this.selectorsList().bankNameCreation).type(bankName)
        cy.get(this.selectorsList().routingNumberCreation).type(routingNumber)
        cy.get(this.selectorsList().accountNumberCreation).type(accNumber)
        cy.get(this.selectorsList().bankAccountSubmit).should('be.visible').click()
        cy.get(this.selectorsList().userBankOnboardingFinished).should('be.visible')
        cy.get(this.selectorsList().bankAccCreationDoneBtn).click()
        cy.get(this.selectorsList().personalTransactionTab).click()
        cy.get(this.selectorsList().createTransactionButton).should('be.visible')
    }
}


export default TransactionPage 