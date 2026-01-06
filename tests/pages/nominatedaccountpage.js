export class NominatedAccountPage {
  constructor(page) {
    this.page = page;

    // Main content
    this.mainContent = page.locator('#main-content');
    this.messagingContainer = page.locator('#messaging-twoway-container');
    this.confirmationSection = page.locator('#new-message-confirmation');

    // Confirmation details
    this.confirmationTitle = page.locator('#new-message-confirmation h1');
    this.confirmationText = page.locator('#new-message-confirmation p');
    this.relatedAccount = page.locator('#new-message-confirmation dd:has-text("Account ending")');
    this.referenceNumber = page.locator('#new-message-confirmation dd:has-text("Reference")');
    this.messageList = page.locator('#new-message-confirmation .messages-list');

    // "Return to messages" button
    this.returnToMessagesBtn = page.locator('#new-message-confirmation-back');

    // Contact us link in aside
    this.contactUsLink = page.locator('#link-contact-us');
  }
}