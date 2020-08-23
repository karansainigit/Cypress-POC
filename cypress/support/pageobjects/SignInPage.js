class SignInPage {

    getUsername() {
        return cy.get("#user_username")
    }

    getPassword() {
        return cy.get('#user_password')
    }

    getSignInButton() {
        return cy.get('#signIn')
    }
}

export default SignInPage