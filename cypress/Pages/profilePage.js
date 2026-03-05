class ProfilePage{

    selectorsList() {
        const selectors = {
            userProfileName: '[data-test="sidenav-user-full-name"]'
        }
        return selectors
    }

    confirmProfilePage(){
        cy.get(this.selectorsList().userProfileName).should('be.visible')
    }
}

export default ProfilePage


