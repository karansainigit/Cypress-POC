class NewStoryPage {

    getStoryTitle() {
        return cy.get("textarea[placeholder*='Title']")
    }

    getStoryIntroduction() {
        return cy.get("textarea[placeholder*='introduction']")
    }

    getAddImageorVideo() {
        return cy.contains('Add image or video')
    }

    getDragandDropFiles() {
        return cy.get("div[class*='upload'] span[class*='icon-cloud']")
    }

    getUploadFile() {
        return cy.get('.modal-content .placeholder-title')
    }

    getAddButton() {
        return cy.get("div[class*='action'] button:nth-child(2)")
    }

    getDeleteCoverMedia() {
        return cy.get("button[aria-label='Delete']")
    }
}

export default NewStoryPage