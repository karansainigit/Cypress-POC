class HomePage {

    getSignIn() {
        return cy.get("main a[href*='login']")
    }
}

export default HomePage