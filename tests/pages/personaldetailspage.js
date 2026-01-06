export class PersonalDetailsPage {
  constructor(page) {
    this.page = page;

    // Navigation menu
    this.accountsMenu = page.locator('#accounts-menu-item');
    this.servicesMenu = page.locator('#services-menu-item');
    this.messagesMenu = page.locator('#messaging-twoway-item');
    this.moveMoneyMenu = page.locator('#move-money-menu-item');
    this.applyMenu = page.locator('#short-apply-menu-item');
    this.helpMenu = page.locator('#help-nav-menu');

    // Service cards/links
    this.personalDetailsLink = page.locator('#personal-details-link');
    this.securityDetailsLink = page.locator('#security-details-link');

    // Other service items
    this.personalDetailsServiceItem = page.locator('#PersonalDetailsServiceItems');
    this.companyDetailsServiceItem = page.locator('#CompanyDetailsServiceItems');
    this.updateSecurityDetailsServiceItem = page.locator('#update-security-details-service-item');

    //readonly fields
    this.firstNameField = page.locator('xpath=//*[@id="personal-details"]/section/dl/dd[2]');
    this.lastNameField = page.locator('xpath=//*[@id="personal-details"]/section/dl/dd[3]');
    this.dobField = page.locator('xpath=//*[@id="personal-details"]/section/dl/dd[4]');
    this.email=page.locator('xpath=//*[@id="personal-details"]/section/dl/dd[5]');
    this.homePhone=page.locator('xpath=//*[@id="personal-details"]/section/dl/dd[6]');
    this.mobilePhone=page.locator('xpath=//*[@id="personal-details"]/section/dl/dd[7]');
    this.addresssection=page.locator('xpath=//*[@id="personal-details"]/address');

    // Contact us link in aside
    this.contactUsLink = page.locator('#link-contact-us');
    this.sendsecuremessagelink = page.locator('#link-secure-message');
    this.securemessagelink = page.locator('#send-message');
    // Main content
    this.mainContent = page.locator('#main-content');
    this.personalDetailsSection = page.locator('#personalDetails');
    this.editPersonalDetailsForm = page.locator('#edit-personal-details');

    // Email fields and labels
    this.emailLabel = page.locator('#EmailAddress-label');
    this.emailInput = page.locator('#EmailAddress');
    this.confirmEmailLabel = page.locator('#ConfirmEmailAddress-label');
    this.confirmEmailInput = page.locator('#ConfirmEmailAddress');

    // Phone fields and labels
    this.homeNumberLabel = page.locator('#HomeNumber-label');
    this.homeNumberInput = page.locator('#HomeNumber');
    this.mobileNumberLabel = page.locator('#MobileNumber-label');
    this.mobileNumberInput = page.locator('#MobileNumber');

    //error messages
    this.emailError = page.locator('#error-EmailAddress-validation');
    this.confirmEmailError = page.locator('#error-ConfirmEmailAddress-validation');
    this.homeNumberError = page.locator('#error-HomeNumber-validation');
    this.mobileNumberError = page.locator('#error-MobileNumber-validation');
    
  
     // Address fields and error messages
    this.flatNumberLabel = page.locator('#FlatNumber-label');
    this.flatNumberInput = page.locator('#FlatNumber');
    this.flatNumberError = page.locator('#error-FlatNumber-validation');

    this.houseNameLabel = page.locator('#HouseName-label');
    this.houseNameInput = page.locator('#HouseName');
    this.houseNameError = page.locator('#error-HouseName-validation');
    this.houseNumberLabel = page.locator('#HouseNumber-label');
    this.houseNumberInput = page.locator('#HouseNumber');
    this.houseNumberError = page.locator('#error-HouseNumber-validation');

    this.addressLine1Label = page.locator('#YourAddressLine1-label');
    this.addressLine1Input = page.locator('#YourAddressLine1');
    this.addressLine1Error = page.locator('#error-AddressLine1-validation');

    this.addressLine2Label = page.locator('#YourAddressLine2-label');
    this.addressLine2Input = page.locator('#YourAddressLine2');
    this.addressLine2Error = page.locator('#error-AddressLine2-required-0');
    this.countyError = page.locator('#error-County-validation');
    // No error for address line 2 (not required)

    this.postTownLabel = page.locator('#YourPostTown-label');
    this.postTownInput = page.locator('#YourPostTown');
    this.postTownError = page.locator('#error-PostTown-validation');

    this.countyLabel = page.locator('#YourCounty-label');
    this.countyInput = page.locator('#YourCounty');
    // No error for county (not required)

    this.postCodeLabel = page.locator('#YourPostCode-label');
    this.postCodeInput = page.locator('#YourPostCode');
    this.postCodeError = page.locator('#error-PostCode-validation');
    this.postCodeLookUp = page.locator('#edit-personal-details-address-lookup');
    this.postCodeLookUpError = page.locator('xpath=//*[@id="edit-personal-details"]/fieldset[2]/div/div[1]/div/div[2]');
    //this.addressSelectDropdown = page.locator('xpath=(//*[@class="btn btn-link p-3 mr-0 text-dark list-group-item"])[1]');
    this.addressSelectDropdown = page.locator('xpath=//*[@class="border address-results-list float-left w-auto list-group list-group-flush"]');

    this.countryLabel = page.locator('#YourCountry-label');
    this.countryInput = page.locator('#YourCountry');



    // Marketing preferences checkboxes and labels
    this.postCheckbox = page.locator('#post');
    this.postLabel = page.locator('#post-label');
    this.emailCheckbox = page.locator('#email');
    this.emailPrefLabel = page.locator('#email-label');
    this.phoneCheckbox = page.locator('#phone');
    this.phoneLabel = page.locator('#phone-label');

    // Buttons
    this.saveChangesBtn = page.locator('#confirm-details');
    this.backtomydetailsBtn = page.locator('#edit-details-cancel');
    this.editPersonalDetailsBtn = page.locator('#edit-details-submit');
    this.backtoservicesBtn = page.locator('xpath=//*[@href="/services"]');
    this.searchAddressBtn = page.locator('xpath=(//*[@class="mt-3 btn btn-link btn-sm"])[1]');
    this.searchBtn = page.locator('xpath=//*[@class="mb-0 w-auto mr-0 address-search-button btn btn-light"]');
    this.enterAddressManuallyBtn = page.locator('xpath=//*[contains(text(),"Enter address manually")] [@class="mt-3 btn btn-link btn-sm"]');

    // Contact us link in aside
    this.contactUsLink = page.locator('#link-contact-us');

  }
}