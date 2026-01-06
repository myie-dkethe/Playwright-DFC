export class MessagePage {
  constructor(page) {
    this.page = page;
    // Navigation menu items
    this.accountsMenu = page.locator('#accounts-menu-item');
    this.servicesMenu = page.locator('#services-menu-item');
    this.messagesMenu = page.locator('#messaging-twoway-item');
    this.moveMoneyMenu = page.locator('#move-money-menu-item');
    this.helpMenu = page.locator('#help-nav-menu');

    // Messaging section
    this.sendNewMessageBtn = page.locator('#send-new-message-btn');
    this.messageThread1 = page.locator('xpath=(//*[@id="message-thread-1"])[1]');
    this.messageThread2 = page.locator('xpath=(//*[@id="message-thread-2"])[1]');
    this.messageThread4 = page.locator('xpath=(//*[@id="message-thread-4"])[1]');
    this.previousPageBtn = page.locator('#previous-page-btn');
    this.nextPageBtn = page.locator('#next-page-btn');

    // Contact/Help links
    this.linkContactUs = page.locator('#link-contact-us');
    // Form fields
    this.relatedAccount = page.locator('#related-account');
    this.subject = page.locator('#subject');
    this.message = page.locator('#message');
    // Form buttons
    this.sendMessageBtn = page.locator('#messaging-twoway-send-message');
    this.cancelBtn = page.locator('#messaging-twoway-send-cancel');
    this.replyBtn = page.locator('#confirm-submit-reply');
    this.replysubmitBtn = page.locator('#messaging-twoway-message-submit');
   
    this.returntomessagesBtn = page.locator('#new-message-confirmation-back');
    this.returntomessagesfrommessagedetailsBtn = page.locator('#back-to-messages-link-messaging');
    this.returntomessagesfromreplyBtn = page.locator('#messaging-twoway-message-back-to-link');
    this.accounterror = page.locator('#error-relatedAccount-required-0');
     this.subjecterror = page.locator('#error-subject-required-0');
      this.messageerror = page.locator('#error-message-required-0');
  }
}