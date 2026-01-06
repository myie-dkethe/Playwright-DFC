import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from '../fixture/fixtures';
import { loginUser } from "./signin.steps";


const { Before, Given, When, Then, After } = createBdd(test);


Given('the user is on short apply product details screen',  async ({signInPage,page,shortApplyPage}) => {
 const pin = process.env.PIN1;
  await loginUser(signInPage, pin);
  //await page.waitForTimeout(1000);
 // await expect(shortApplyPage.applyMenu).toBeVisible();
 await shortApplyPage.applyMenu.click();
 //await page.waitForTimeout(1000);
 //await expect(shortApplyPage.moredetailsBtn).toBeVisible();
 await shortApplyPage.moredetailsBtn.click();
});


When('the user does not tickboxes mandatory tick boxes and clicks on apply', async ({shortApplyPage}) => {
   //await expect(shortApplyPage.applyNowBtn).waitFor({ state: 'visible' });
    await shortApplyPage.applyNowBtn.click();
});

Then('error messages should be displayed for all mandatory tick boxes', async ({shortApplyPage}) => {
    await expect(shortApplyPage.agreeUkTaxerror).toContainText('Please confirm all applicants are residents in the UK');
    await expect(shortApplyPage.agreeToTheConditionserror).toContainText('Please agree to the Terms and Conditions and the Product Summary Box');
    await expect(shortApplyPage.agreeToTheFeatureserror).toContainText('Please read the requirements');
    await expect(shortApplyPage.agreePrivacyPolicyerror).toContainText('Please read the Privacy Notice');
    await expect(shortApplyPage.fscsConfirmerror).toContainText('Please read the FSCS information sheet');
});

When('the user clicks on links relevant screens are displayed', async ({page, shortApplyPage}) => {
  const [newPage] = await Promise.all([
  page.waitForEvent('popup'),
  shortApplyPage.terms.click() 
]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://dfcapital.bank/savingstermsandconditions.pdf')
  await newPage.close();
  await page.bringToFront();
//await shortApplyPage.keyFeatures.click();
 // const downloadPromise = page.waitForEvent('download');
   //const download = await downloadPromise;
    //const path = await download.path('Downloads/');
    //expect(path).not.toBeNull();
   await shortApplyPage.whatYouNeed.click();
   await expect(shortApplyPage.whatYouNeed).toMatchAriaSnapshot(`- heading "What you'll need" [level=2]`);
  await shortApplyPage.toApplyYouMust.click();
  await expect(page.locator('#accounts')).toMatchAriaSnapshot(`
    - heading "What you'll need" [level=2]
    - list "What you'll need":
      - listitem: Your address details for the last 5 years.
      - listitem: You will need the account number and sort code of a UK current account on which you are named as an account holder. This "nominated account" must be used as the source of any money deposited with us and will also be used as the destination account of any funds withdrawn.
    - heading "To apply you must" [level=2]
    - list "To apply you must":
      - listitem: /Be \\d+ and over/
      - listitem: Be resident in the UK and liable to pay tax only in the UK.
    `);
    const page2Promise = page.waitForEvent('popup');
  await shortApplyPage.fscs.click();
  const page2 = await page2Promise;
  await page2.waitForLoadState();
  await expect(page2).toHaveURL('https://journey-dfc-dev-public.distributionfc.com/document/DF_Capital_FSCS_Information_Sheet.pdf')
  await page2.close();
  await page.bringToFront();
  const page3Promise = page.waitForEvent('popup');
  await shortApplyPage.privacynotice1.click();
  const page3 = await page3Promise;
  await page3.waitForLoadState();
  await expect(page3).toHaveURL('https://www.dfcapital.bank/privacy-policy/')
  await page3.close();
  await page.bringToFront();
  const page4Promise = page.waitForEvent('popup');
  await shortApplyPage.privacynotice2.click();
  const page4 = await page4Promise;
  await page4.waitForLoadState();
  await expect(page4).toHaveURL('https://www.dfcapital.bank/privacy-policy/')
  await page4.close();
  await page.bringToFront();
  //await shortApplyPage.productsummary.click();
});

When('the user ticks all the mandatory tickboxes', async ({shortApplyPage}) => {
  await shortApplyPage.agreeUkTax.click();
    await shortApplyPage.agreeToTheConditions.click();
    await shortApplyPage.agreeToTheFeatures.click();
    await shortApplyPage.agreePrivacyPolicy.click();
    await shortApplyPage.fscsConfirm.click();
});

When('the user clicks on Apply button', async ({shortApplyPage}) => {
  await shortApplyPage.applyNowBtn.click();
});

When('the user click on {string} for Are the contact details correct', async ({shortApplyPage}, arg) => {
    if (arg === 'Yes') {
    await shortApplyPage.detailsCorrectYes.click();
  }
    else if (arg === 'No') {
      await shortApplyPage.detailsCorrectNo.click();
  }
});

When('the user does not enter mandatory fields on contact details screen and clicks on continue', async ({shortApplyPage}) => {
  await shortApplyPage.submitBtn.click();
});

Then('error messages should be displayed for all mandatory fields on contact details screen', async ({shortApplyPage}) => {
  await expect(shortApplyPage.amountRequiredError).toContainText('Please enter an amount');
  await expect(shortApplyPage.detailsCorrectError).toContainText('Please confirm if the details are correct.');
  await expect(shortApplyPage.nominatedAccountRequiredError).toContainText('Please confirm you are the account holder.');
  await expect(shortApplyPage.correctDetailsRequiredError).toContainText('Please confirm the information provided is correct and provide consent to use and store your personal details.');
});

When('the user enters all mandatory fields on contact details screen', async ({shortApplyPage}) => {
  await shortApplyPage.amount.fill('1000');
  await shortApplyPage.postCheckbox.check();
  await shortApplyPage.phoneCheckbox.check();
  await shortApplyPage.emailCheckbox.check();
  await shortApplyPage.nominatedAccountCheckbox.check();
  await shortApplyPage.correctDetailsCheckbox.check();
});

When('the user clicks on submit for short apply', async ({shortApplyPage}) => {
  await shortApplyPage.submitBtn.click();
});

When('the user clicks on secure messaging to update contact details', async ({shortApplyPage}) => {
  await shortApplyPage.securemessagelink.click();
});

When('the user clicks on the Back button on Short apply contact details screen', async ({shortApplyPage}) => {
  await shortApplyPage.backBtn.click();
});


When('the system navigates back to product list page', async ({shortApplyPage}) => {
 await expect(shortApplyPage.moredetailsBtn).toBeVisible();
});

Then('short apply successful screen should be displayed', async ({shortApplyPage}) => {
 await expect(shortApplyPage.successLabel).toContainText('Thank you for applying for a DF Capital savings account');
    await expect(shortApplyPage.backtoaccountsBtn).toBeVisible();
});

When('the user clicks on back to accounts button', async ({shortApplyPage}) => {
 await shortApplyPage.backtoaccountsBtn.click();
});
When('the user clicks on other accounts', async ({shortApplyPage}) => {
  await shortApplyPage.otheraccountsBtn.click();
});

When('the user clicks on product details', async ({shortApplyPage}) => {
  await shortApplyPage.moredetailsBtn.click();
});
