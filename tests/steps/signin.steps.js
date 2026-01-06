import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from '../fixture/fixtures';


const { Before, Given, When, Then, After } = createBdd(test);



Given('I open the homepage', async ({signInPage}) => {
  await signInPage.navigateTo(process.env.URL);
 //await page.goto(process.env.URL);

});

When("I sign in as {string}", async ({signInPage}) => {
  await signInPage.username.fill(process.env.USERNAME1);
  await signInPage.password.fill(process.env.PASSWORD1);
  await signInPage.continuebtn.click();
});

When('I enter pin for {string}', async ({ signInPage }, user) => {
  const pin = process.env.PIN1;
  await solvePinChallenge(signInPage.page, pin);
  await signInPage.signinbtn.click();
});


Then('accounts home screen should be displayed', async ({signInPage}) => {
// await expect(signInPage.activeBtn).toBeVisible();
});



Given('the user is logged in', async ({signInPage}) => {
  //await signInPage.navigateTo("https://connect.qa-dfcapital.com/sign-in/step-1");
  await signInPage.navigateTo(process.env.URL);
  await signInPage.username.fill(process.env.USERNAME1);
  await signInPage.password.fill(process.env.PASSWORD1);
  await signInPage.continuebtn.click();
  const pin = process.env.PIN1;
  await solvePinChallenge(signInPage.page, pin);
  await signInPage.signinbtn.click();
 // await expect(signInPage.activeBtn).toBeVisible();
});

export async function loginUser(signInPage, pin) {
  await signInPage.navigateTo(process.env.URL);
  await signInPage.username.fill(process.env.USERNAME1);
  await signInPage.password.fill(process.env.PASSWORD1);
  await signInPage.continuebtn.click();
  await solvePinChallenge(signInPage.page, pin);
  await signInPage.signinbtn.click();
 //await expect(signInPage.activeBtn).toBeVisible();
}


async function solvePinChallenge(page, pin) {
  // Get the pin challenge text (e.g., "Enter the 2nd, 4th, and 5th characters")
  const pinChallengeSelector = '#login-update-form > fieldset > legend';
  const pinParts = await getMemorableWordParts(page, pinChallengeSelector, pin);

  // Fill the pin inputs
  await page.getByRole('textbox', { name: 'Pin position 1 (required' }).fill(pinParts[0]);
  await page.getByRole('textbox', { name: 'Pin position 2 (required' }).fill(pinParts[1]);
  await page.getByRole('textbox', { name: 'Pin position 3 (required' }).fill(pinParts[2]);
}

async function getMemorableWordParts(page, pinChallengeSelector, fullWord) {
  // Wait for the challenge text to be visible and get its text
  await page.waitForSelector(pinChallengeSelector, { state: 'visible' });
  const pinRequest = await page.textContent(pinChallengeSelector);

  // Extract digits from the challenge text
  const pinNums = (pinRequest.match(/\d+/g) || []).map(Number);

  // Ensure the digits do not exceed the length of the pin
  const maxLength = fullWord.length;
  const adjustedPinNums = pinNums.map(n => (n > maxLength ? maxLength : n));

  // Get the corresponding characters from the pin (1-based index)
  const strReturn = [
    fullWord[adjustedPinNums[0] - 1],
    fullWord[adjustedPinNums[1] - 1],
    fullWord[adjustedPinNums[2] - 1]
  ];

  return strReturn;
}