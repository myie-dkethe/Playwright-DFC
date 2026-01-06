import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from '../fixture/fixtures';
import { loginUser } from "./signin.steps";


const { Before, Given, When, Then, After } = createBdd(test);

Given('the user is on personal details screen',  async ({signInPage,personalDetailsPage}) => {
 const pin = process.env.PIN1;
    await loginUser(signInPage, pin);
   await personalDetailsPage.servicesMenu.click();
   await personalDetailsPage.personalDetailsLink.click();
    await expect(personalDetailsPage.personalDetailsSection).toBeVisible();
});

Then('the personal details screen elements should be displayed correctly', async ({personalDetailsPage}) => {
  await expect(personalDetailsPage.firstNameField).toContainText(process.env.FIRSTNAME1);
  await expect(personalDetailsPage.lastNameField).toContainText(process.env.LASTNAME1);
  await expect(personalDetailsPage.dobField).toContainText(process.env.DOB1);
  await expect(personalDetailsPage.email).toContainText(process.env.EMAIL1);
  await expect(personalDetailsPage.homePhone).toContainText(process.env.HOMEPHONE1);
  await expect(personalDetailsPage.mobilePhone).toContainText(process.env.MOBILEPHONE1);
  await expect(personalDetailsPage.addresssection).toBeVisible();
});

When('the user clicks on edit personal details button', async ({personalDetailsPage}) => {
 await personalDetailsPage.editPersonalDetailsBtn.click();
});

Then('the personal details edit screen should be displayed correctly', async ({personalDetailsPage}) => {
    await expect(personalDetailsPage.emailInput).toBeVisible();
});

When('the user clicks on personal details link', async ({personalDetailsPage}) => {
 await personalDetailsPage.personalDetailsLink.click();
});

When('the user clicks on send message link', async ({personalDetailsPage}) => {
  await personalDetailsPage.securemessagelink.click();
});

When('the user does not complete all of the mandatory fields for personal details and clicks on save', async ({personalDetailsPage}) => {
    await personalDetailsPage.emailInput.fill('');
  await personalDetailsPage.confirmEmailInput.fill('');
  await personalDetailsPage.homeNumberInput.fill('');
  await personalDetailsPage.mobileNumberInput.fill('');
    await personalDetailsPage.saveChangesBtn.click();
    await personalDetailsPage.searchAddressBtn.click();
    await personalDetailsPage.searchBtn.click();
    await expect(personalDetailsPage.postCodeLookUpError).toContainText('Please Enter a Postcode.');
    await personalDetailsPage.enterAddressManuallyBtn.click();
    await personalDetailsPage.flatNumberInput.fill('');
    await personalDetailsPage.houseNumberInput.fill('');
    await personalDetailsPage.houseNameInput.fill('');
    await personalDetailsPage.addressLine1Input.fill('');
    await personalDetailsPage.postTownInput.fill('');
    await personalDetailsPage.postCodeInput.fill('');
    await personalDetailsPage.saveChangesBtn.click();
});

Then('error messages should be displayed for all mandatory fields for personal details', async ({personalDetailsPage}) => {
  await expect(personalDetailsPage.emailError).toContainText('Please enter an email address.');
  await expect(personalDetailsPage.confirmEmailError).toContainText('Please confirm your email address.');
 // await expect(personalDetailsPage.homeNumberError).toContainText('Please enter your home phone number');
  await expect(personalDetailsPage.mobileNumberError).toContainText('Please enter a mobile number.');
  await expect(personalDetailsPage.flatNumberError).toContainText('Please enter either Flat number, House name and House number.');
  await expect(personalDetailsPage.houseNumberError).toContainText('Please enter either Flat number, House name and House number.');
  await expect(personalDetailsPage.houseNameError).toContainText('Please enter either Flat number, House name and House number.');
  await expect(personalDetailsPage.addressLine1Error).toContainText('Please enter address line 1.');
  await expect(personalDetailsPage.postTownError).toContainText('Please enter a town or city.');
  await expect(personalDetailsPage.postCodeError).toContainText('Please enter a postcode.');
});

When('the user clicks on back to my details button', async ({personalDetailsPage}) => {
  await personalDetailsPage.backtomydetailsBtn.click();
});


When('the user clicks on back to my services', async ({page,personalDetailsPage}) => {
  await page.waitForTimeout(1000); // Adding a short wait to ensure the button is clickable
  await personalDetailsPage.backtoservicesBtn.click();
  });

Then('my services screen should be displayed', async ({personalDetailsPage}) => {
  await expect(personalDetailsPage.personalDetailsLink).toBeVisible();
});

When('the user completes all email and phone number for personal details', async ({personalDetailsPage}) => {
    await personalDetailsPage.emailInput.fill("");
    await personalDetailsPage.confirmEmailInput.fill("");
    await personalDetailsPage.homeNumberInput.fill("");
    await personalDetailsPage.mobileNumberInput.fill("");
    await personalDetailsPage.emailInput.fill(process.env.EMAIL1);
    await personalDetailsPage.confirmEmailInput.fill(process.env.EMAIL1);
    await personalDetailsPage.homeNumberInput.fill(process.env.HOMEPHONE1);
    await personalDetailsPage.mobileNumberInput.fill(process.env.MOBILEPHONE1);
});

Then('the personal details screen should be displayed', async ({personalDetailsPage}) => {
  await expect(personalDetailsPage.personalDetailsSection).toBeVisible();
});

When('the user uses address lookup to update address', async ({personalDetailsPage}) => {
   await personalDetailsPage.searchAddressBtn.click(); 
  await personalDetailsPage.postCodeLookUp.fill(process.env.POSTCODE1);
  await personalDetailsPage.searchBtn.click();
  await personalDetailsPage.addressSelectDropdown.first().click();
});

When('the user clicks on save button', async ({personalDetailsPage}) => {
  await personalDetailsPage.saveChangesBtn.click();
});

When('the user updates contact preferences', async ({personalDetailsPage}) => {
  await personalDetailsPage.postCheckbox.check();
  await personalDetailsPage.emailCheckbox.check();
  await personalDetailsPage.phoneCheckbox.check();
});

Then('personal details updated successfully message should be displayed', async ({personalDetailsPage}) => {
 await expect(personalDetailsPage.backtomydetailsBtn).toBeVisible();
});

When('the user uses address manual entry to update address', async ({personalDetailsPage}) => {
  await personalDetailsPage.enterAddressManuallyBtn.click();
  await personalDetailsPage.flatNumberInput.fill(process.env.FLAT_NUMBER1);
  await personalDetailsPage.houseNumberInput.fill(process.env.HOUSE_NUMBER1);
  await personalDetailsPage.houseNameInput.fill(process.env.HOUSE_NAME1);
  await personalDetailsPage.addressLine1Input.fill(process.env.ADDRESS_LINE1);
  await personalDetailsPage.postTownInput.fill(process.env.POST_TOWN1);
  await personalDetailsPage.postCodeInput.fill(process.env.POSTCODE1);
  await personalDetailsPage.saveChangesBtn.click();
});

When('the user clicks on search address button', async ({personalDetailsPage}) => {
  await personalDetailsPage.enterAddressManuallyBtn.click();
    await personalDetailsPage.flatNumberInput.fill('');
    await personalDetailsPage.houseNumberInput.fill('');
    await personalDetailsPage.houseNameInput.fill('');
    await personalDetailsPage.addressLine1Input.fill('');
    await personalDetailsPage.addressLine2Input.fill('');
    await personalDetailsPage.postTownInput.fill('');
    await personalDetailsPage.countyInput.fill('');
    await personalDetailsPage.postCodeInput.fill('');
});

When('the user enters invalid values for {string} and {string} fields, error messages are displayed', async ({personalDetailsPage}, email, phoneNumber) => {
  await personalDetailsPage.emailInput.fill("");
  await personalDetailsPage.mobileNumberInput.fill("");
  await personalDetailsPage.emailInput.fill(email);
  await personalDetailsPage.mobileNumberInput.fill(phoneNumber);
  await personalDetailsPage.saveChangesBtn.click();
  await expect(personalDetailsPage.emailError).toContainText('Please enter a valid email address.');
  await expect(personalDetailsPage.mobileNumberError).toContainText('Please enter a valid mobile number.');
});

When('the user enters invalid values for flat number, house number, and house name, error messages are displayed', async ({personalDetailsPage}, dataTable) => {
  for (const { flatNumber, houseNumber, houseName } of dataTable.hashes()) {
    await personalDetailsPage.flatNumberInput.fill(flatNumber);
    await personalDetailsPage.houseNumberInput.fill(houseNumber);
    await personalDetailsPage.houseNameInput.fill(houseName);
    await personalDetailsPage.saveChangesBtn.click();
    await expect(personalDetailsPage.flatNumberError).toContainText('Please enter a valid Flat Number.');
    await expect(personalDetailsPage.houseNumberError).toContainText('Please enter a valid House Number.');
    await expect(personalDetailsPage.houseNameError).toContainText('Please enter a valid House Name.');
  }
});

When('the user enters invalid values for postcode,town,addressline1,county, error messages are displayed', async ({personalDetailsPage},dataTable) => {
    for (const { postcode,town,addressLine1,county } of dataTable.hashes()) {
      await personalDetailsPage.postCodeInput.fill(postcode);
      await personalDetailsPage.townInput.fill(town);
      await personalDetailsPage.addressLine1Input.fill(addressLine1);
      await personalDetailsPage.countyInput.fill(county);
      await personalDetailsPage.saveChangesBtn.click();
      await expect(personalDetailsPage.postCodeError).toContainText('Please enter a valid postcode.');
    await expect(personalDetailsPage.townError).toContainText('Please enter a valid town.');
    await expect(personalDetailsPage.addressLine1Error).toContainText('Please enter a valid address line 1.');
    await expect(personalDetailsPage.countyError).toContainText('Please enter a valid county.');
    }
});

