import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from '../fixture/fixtures';
import { loginUser } from "./signin.steps";


const { Before, Given, When, Then, After } = createBdd(test);

Given('the user is on the sign-in page', async ({}) => {
  // Step: Given the user is on the sign-in page
  // From: tests\features\nominatedaccount.feature:4:1
});

When('the user enters a valid username and password', async ({}) => {
  // Step: When the user enters a valid username and password
  // From: tests\features\nominatedaccount.feature:5:1
});

When('the user enters the correct PIN', async ({}) => {
  // Step: And the user enters the correct PIN
  // From: tests\features\nominatedaccount.feature:6:1
});

When('the user signs in', async ({}) => {
  // Step: And the user signs in
  // From: tests\features\nominatedaccount.feature:7:1
});

When('the user navigates to the {string} section', async ({}, arg) => {
  // Step: And the user navigates to the "Move Money" section
  // From: tests\features\nominatedaccount.feature:8:1
});

When('the user selects {string}', async ({}, arg) => {
  // Step: And the user selects "Nominated Accounts"
  // From: tests\features\nominatedaccount.feature:9:1
});

When('the user selects a withdrawal account', async ({}) => {
  // Step: And the user selects a withdrawal account
  // From: tests\features\nominatedaccount.feature:10:1
});

When('the nominated account details are displayed', async ({}) => {
  // Step: And the nominated account details are displayed
  // From: tests\features\nominatedaccount.feature:11:1
});

When('the user clicks the {string} button', async ({}, arg) => {
  // Step: When the user clicks the "Change details" button
  // From: tests\features\nominatedaccount.feature:12:1
});

When('the user enters a message and clicks {string}', async ({}, arg) => {
  // Step: And the user enters a message and clicks "Send message"
  // From: tests\features\nominatedaccount.feature:13:1
});

Then('the {string} button is visible', async ({}, arg) => {
  // Step: Then the "Return to messages" button is visible
  // From: tests\features\nominatedaccount.feature:14:1
});

Then('the user sees the confirmation text {string}', async ({}, arg) => {
  // Step: And the user sees the confirmation text "Return to messages"
  // From: tests\features\nominatedaccount.feature:15:1
});

When('the user clicks on {string}', async ({}, arg) => {
  // Step: When the user clicks on "Account ending"
  // From: tests\features\nominatedaccount.feature:16:1
});

Then('the user is returned to the messages screen', async ({}) => {
  // Step: Then the user is returned to the messages screen
  // From: tests\features\nominatedaccount.feature:18:1
});
