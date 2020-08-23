class DashboardPage {

    getProfileImage() {
        return cy.get("img[alt*='profile']")
    }

    getNewStory() {
        return cy.get("div[class*='add-item'] button")
    }

    getStartFromScratch() {
        return cy.contains('Start from scratch')
    }
}

export default DashboardPage