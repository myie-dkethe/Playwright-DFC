export class ShortApplyPage {
  constructor(page) {
    this.page = page;
    // Navigation menu
    this.accountsMenu = page.locator('#accounts-menu-item');
    this.servicesMenu = page.locator('#services-menu-item');
    this.messagesMenu = page.locator('#messaging-twoway-item');
    this.moveMoneyMenu = page.locator('#move-money-menu-item');
    this.applyMenu = page.locator('#short-apply-menu-item');
    this.helpMenu = page.locator('#help-nav-menu');

    // Key features and info
    this.terms = page.locator('xpath=//*[@id="agree-to-the-conditions-label"]/span/span/a[1]');
    this.keyFeatures = page.locator('xpath=//*[@id="downloadPDF"]');
    this.whatYouNeed = page.locator('#what-youll-need-link');
    this.toApplyYouMust = page.locator('#to-apply-you-must-link');
    this.fscs = page.locator('xpath=//*[@href="https://journey-dfc-dev-public.distributionfc.com/document/DF_Capital_FSCS_Information_Sheet.pdf"]');
    this.privacynotice1 = page.locator('xpath=(//*[@href="https://www.dfcapital.co.uk/privacy-policy/"])[1]');
    this.privacynotice2 = page.locator('xpath=(//*[@href="https://www.dfcapital.co.uk/privacy-policy/"])[2]');
    this.productsummary = page.locator('#downloadPDF');

    // Checkboxes for confirmations
    this.agreeUkTax = page.locator('#agree-uk-tax-label');
    this.agreeUkTaxerror = page.locator('#error-residentsConfirm-required-0');
    this.agreeToTheConditions = page.locator('#agree-to-the-conditions-label');
    this.agreeToTheConditionserror = page.locator('#error-conritmSummary-required-0');
    this.agreeToTheFeatures = page.locator('#agree-to-the-features-label');
    this.agreeToTheFeatureserror = page.locator('#error-confirmRead-required-0');
    this.agreePrivacyPolicy = page.locator('#agree-privacy-policy-label');
    this.agreePrivacyPolicyerror = page.locator('#error-privacyPolicyConfirm-required-0');
    this.fscsConfirm = page.getByText('I confirm that I have read and agree to the Financial Services Compensation');
    this.fscsConfirmerror = page.locator('#error-fscsConfirm-required-0');

    // Buttons
    this.moredetailsBtn = page.locator('#more-details-button-0');
    this.applyNowBtn = page.locator('#more-details-submit-button');
    this.otheraccountsBtn = page.locator('xpath=//*[@id="accounts"]/div[3]/button[2]');
    // Amount input and error
    this.amount = page.locator('#amount');
    this.amountLabel = page.locator('#amount-label');
    this.amountDesc = page.locator('#amount-desc');
    this.amountError = page.locator('#error-amount-validation');
    this.amountRequiredError = page.locator('#error-amount-required-0');

    // Contact preferences checkboxes
    this.postCheckbox = page.locator('#post');
    this.postLabel = page.locator('#post-label');
    this.phoneCheckbox = page.locator('#phone');
    this.phoneLabel = page.locator('#phone-label');
    this.emailCheckbox = page.locator('#email');
    this.emailLabel = page.locator('#email-label');

    // Are these details correct radio buttons and error
    this.detailsCorrectYes = page.locator('xpath=//*[@id="details-correct-yes}-label"]');
    this.detailsCorrectYesLabel = page.locator('#details-correct-yes\\}-label');
    this.detailsCorrectNo = page.locator('xpath=//*[@id="details-correct-no}-label"]');
this.securemessagelink = page.locator('#maturity-success-new-message');

    this.detailsCorrectNoLabel = page.locator('#details-correct-no\\}-label');
    this.detailsCorrectError = page.locator('#are-these-details-correct .invalid-feedback p');

    // Confirm details checkboxes and errors
    this.nominatedAccountCheckbox = page.locator('xpath=//*[@id="nominated-account}-label"]');
    this.nominatedAccountLabel = page.locator('#nominated-account\\}-label');
    this.nominatedAccountError = page.locator('#error-confirm2-validation');
    this.nominatedAccountRequiredError = page.locator('#error-confirm2-required-0');

    this.correctDetailsCheckbox = page.locator('xpath=//*[@id="correct-details}-label"]');
    this.correctDetailsLabel = page.locator('#correct-details\\}-label');
    this.correctDetailsError = page.locator('#error-confirm3-validation');
    this.correctDetailsRequiredError = page.locator('#error-confirm3-required-0');
this.successLabel=page.locator('xpath=//*[@id="accounts"]/h1/span');

    // Buttons
    this.submitBtn = page.locator('#create-new-notice');
    this.backBtn = page.locator('#more-details-button');
this.backtoaccountsBtn = page.locator('#back-to-accounts');

  }
}