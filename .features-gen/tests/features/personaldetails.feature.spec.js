// Generated from: tests\features\personaldetails.feature
import { test } from "../../../tests/fixture/fixtures.js";

test.describe('Personal Details', () => {

  test('Personal details - validation and back button', async ({ Given, When, Then, messagePage, page, personalDetailsPage, signInPage }) => { 
    await Given('the user is on personal details screen', null, { personalDetailsPage, signInPage }); 
    await Then('the personal details screen elements should be displayed correctly', null, { personalDetailsPage }); 
    await When('the user clicks on edit personal details button', null, { personalDetailsPage }); 
    await Then('the personal details edit screen should be displayed correctly', null, { personalDetailsPage }); 
    await When('the user does not complete all of the mandatory fields for personal details and clicks on save', null, { personalDetailsPage }); 
    await Then('error messages should be displayed for all mandatory fields for personal details', null, { personalDetailsPage }); 
    await When('the user clicks on back to my details button', null, { personalDetailsPage }); 
    await Then('the personal details screen should be displayed', null, { personalDetailsPage }); 
    await When('the user clicks on back to my services', null, { page, personalDetailsPage }); 
    await Then('my services screen should be displayed', null, { personalDetailsPage }); 
    await When('the user clicks on personal details link', null, { personalDetailsPage }); 
    await Then('the personal details screen should be displayed', null, { personalDetailsPage }); 
    await When('the user clicks on send message link', null, { personalDetailsPage }); 
    await When('the user sends secure message', null, { messagePage }); 
    await When('the user clicks on return to messages', null, { messagePage }); 
  });

  test('Personal Details Update Successful-address lookup', async ({ Given, When, Then, personalDetailsPage, signInPage }) => { 
    await Given('the user is on personal details screen', null, { personalDetailsPage, signInPage }); 
    await Then('the personal details screen should be displayed', null, { personalDetailsPage }); 
    await When('the user clicks on edit personal details button', null, { personalDetailsPage }); 
    await Then('the personal details edit screen should be displayed correctly', null, { personalDetailsPage }); 
    await When('the user completes all email and phone number for personal details', null, { personalDetailsPage }); 
    await When('the user uses address lookup to update address', null, { personalDetailsPage }); 
    await When('the user updates contact preferences', null, { personalDetailsPage }); 
    await When('the user clicks on save button', null, { personalDetailsPage }); 
    await Then('personal details updated successfully message should be displayed', null, { personalDetailsPage }); 
  });

  test('Personal Details Update Successful-address manual entry', async ({ Given, When, Then, personalDetailsPage, signInPage }) => { 
    await Given('the user is on personal details screen', null, { personalDetailsPage, signInPage }); 
    await Then('the personal details screen should be displayed', null, { personalDetailsPage }); 
    await When('the user clicks on edit personal details button', null, { personalDetailsPage }); 
    await Then('the personal details edit screen should be displayed correctly', null, { personalDetailsPage }); 
    await When('the user uses address manual entry to update address', null, { personalDetailsPage }); 
    await When('the user clicks on save button', null, { personalDetailsPage }); 
    await Then('personal details updated successfully message should be displayed', null, { personalDetailsPage }); 
  });

  test('Personal details - invalid values for mandatory fields', async ({ Given, When, Then, personalDetailsPage, signInPage }) => { 
    await Given('the user is on personal details screen', null, { personalDetailsPage, signInPage }); 
    await Then('the personal details screen elements should be displayed correctly', null, { personalDetailsPage }); 
    await When('the user clicks on edit personal details button', null, { personalDetailsPage }); 
    await Then('the personal details edit screen should be displayed correctly', null, { personalDetailsPage }); 
    await When('the user clicks on search address button', null, { personalDetailsPage }); 
    await When('the user enters invalid values for flat number, house number, and house name, error messages are displayed', {"dataTable":{"rows":[{"cells":[{"value":"flatNumber"},{"value":"houseNumber"},{"value":"houseName"}]},{"cells":[{"value":"!@#$%"},{"value":"!@#$%"},{"value":"!@#$%"}]}]}}, { personalDetailsPage }); 
    await When('the user enters invalid values for postcode,town,addressline1,county, error messages are displayed', {"dataTable":{"rows":[{"cells":[{"value":"postcode"},{"value":"town"},{"value":"address line 1"},{"value":"county"}]},{"cells":[{"value":"!@#$%"},{"value":"!@#$%"},{"value":"!@#$%"},{"value":"!@#$%"}]},{"cells":[{"value":"123abc"},{"value":"!@#$%"},{"value":"!@#$%"},{"value":"!@#$%"}]},{"cells":[{"value":"abcd12"},{"value":"!@#$%"},{"value":"!@#$%"},{"value":"!@#$%"}]},{"cells":[{"value":"ab!@#"},{"value":"!@#$%"},{"value":"!@#$%"},{"value":"!@#$%"}]},{"cells":[{"value":"1234"},{"value":"!@#$%"},{"value":"!@#$%"},{"value":"!@#$%"}]}]}}, { personalDetailsPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\personaldetails.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is on personal details screen","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the personal details screen elements should be displayed correctly","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user clicks on edit personal details button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the personal details edit screen should be displayed correctly","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user does not complete all of the mandatory fields for personal details and clicks on save","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then error messages should be displayed for all mandatory fields for personal details","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks on back to my details button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the personal details screen should be displayed","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When the user clicks on back to my services","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then my services screen should be displayed","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user clicks on personal details link","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the personal details screen should be displayed","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user clicks on send message link","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the user sends secure message","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user clicks on return to messages","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given the user is on personal details screen","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the personal details screen should be displayed","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the user clicks on edit personal details button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the personal details edit screen should be displayed correctly","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user completes all email and phone number for personal details","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When the user uses address lookup to update address","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When the user updates contact preferences","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When the user clicks on save button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then personal details updated successfully message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given the user is on personal details screen","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the personal details screen should be displayed","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When the user clicks on edit personal details button","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then the personal details edit screen should be displayed correctly","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When the user uses address manual entry to update address","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When the user clicks on save button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then personal details updated successfully message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given the user is on personal details screen","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then the personal details screen elements should be displayed correctly","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When the user clicks on edit personal details button","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then the personal details edit screen should be displayed correctly","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When the user clicks on search address button","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When the user enters invalid values for flat number, house number, and house name, error messages are displayed","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When the user enters invalid values for postcode,town,addressline1,county, error messages are displayed","stepMatchArguments":[]}]},
]; // bdd-data-end