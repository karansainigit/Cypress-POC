/// <reference types = "Cypress" />
import HomePage from '../../support/pageobjects/HomePage'
import SignInPage from '../../support/pageobjects/SignInPage'
import DashboardPage from '../../support/pageobjects/DashboardPage'
import NewStoryPage from '../../support/pageobjects/NewStoryPage'

describe ('ARCGIS StoryMaps test suite', function() {
    
    beforeEach(function(){

        cy.fixture('data').then(function(data) {
            this.data = data
        })

        cy.visit(Cypress.env('url'))
    })

    it('Creating New Story', function(){

        const homePage = new HomePage()
        const signInPage = new SignInPage()
        const dashboardPage = new DashboardPage()
        const newStoryPage = new NewStoryPage()

        const filePath = 'sampleFile.jpeg'

        homePage.getSignIn().click()

        signInPage.getUsername().type(this.data.username).should('have.value',this.data.username)
        signInPage.getPassword().type(this.data.password).should('have.value',this.data.password)
        signInPage.getSignInButton().click()

        dashboardPage.getProfileImage().should('be.visible')
        dashboardPage.getNewStory().click()
        dashboardPage.getStartFromScratch().click()

        newStoryPage.getStoryTitle().type(this.data.storytitle).should('have.value',this.data.storytitle)
        newStoryPage.getStoryIntroduction().type(this.data.storyintroduction).should('have.value',this.data.storyintroduction)
        newStoryPage.getAddImageorVideo().click()
        newStoryPage.getDragandDropFiles().attachFile(filePath, {subjectType: 'drag-n-drop'})
        newStoryPage.getUploadFile().then(function (fileName) {
            const uploadFileName = fileName.text()
            expect(uploadFileName).to.equal('sampleFile.jpeg')
        })
        newStoryPage.getAddButton().click()
        newStoryPage.getDeleteCoverMedia().should('be.visible')
    })
})