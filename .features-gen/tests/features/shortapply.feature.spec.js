// Generated from: tests\features\shortapply.feature
import { test } from "../../../tests/fixture/fixtures.js";

test.describe('Short Apply', () => {

  test('Links on apply screen and Validation of mandatory tickboxes on Short apply', async ({ Given, When, Then, page, shortApplyPage, signInPage }) => { 
    await Given('the user is on short apply product details screen', null, { page, shortApplyPage, signInPage }); 
    await When('the user clicks on links relevant screens are displayed', null, { page, shortApplyPage }); 
    await When('the user does not tickboxes mandatory tick boxes and clicks on apply', null, { shortApplyPage }); 
    await Then('error messages should be displayed for all mandatory tick boxes', null, { shortApplyPage }); 
    await When('the user ticks all the mandatory tickboxes', null, { shortApplyPage }); 
    await When('the user clicks on Apply button', null, { shortApplyPage }); 
    await When('the user does not enter mandatory fields on contact details screen and clicks on continue', null, { shortApplyPage }); 
    await Then('error messages should be displayed for all mandatory fields on contact details screen', null, { shortApplyPage }); 
  });

  test('Short apply successful', async ({ Given, When, Then, page, shortApplyPage, signInPage }) => { 
    await Given('the user is on short apply product details screen', null, { page, shortApplyPage, signInPage }); 
    await When('the user ticks all the mandatory tickboxes', null, { shortApplyPage }); 
    await When('the user clicks on Apply button', null, { shortApplyPage }); 
    await When('the user click on \'Yes\' for Are the contact details correct', null, { shortApplyPage }); 
    await When('the user enters all mandatory fields on contact details screen', null, { shortApplyPage }); 
    await When('the user clicks on submit for short apply', null, { shortApplyPage }); 
    await Then('short apply successful screen should be displayed', null, { shortApplyPage }); 
    await When('the user clicks on back to accounts button', null, { shortApplyPage }); 
    await Then('accounts home screen should be displayed', null, { signInPage }); 
  });

  test('No for contact details correct', async ({ Given, When, messagePage, page, shortApplyPage, signInPage }) => { 
    await Given('the user is on short apply product details screen', null, { page, shortApplyPage, signInPage }); 
    await When('the user ticks all the mandatory tickboxes', null, { shortApplyPage }); 
    await When('the user clicks on Apply button', null, { shortApplyPage }); 
    await When('the user click on \'No\' for Are the contact details correct', null, { shortApplyPage }); 
    await When('the user clicks on secure messaging to update contact details', null, { shortApplyPage }); 
    await When('the user sends message', null, { messagePage }); 
    await When('the user clicks on return to messages', null, { messagePage }); 
  });

  test('Back button on all short apply screens', async ({ Given, When, And, page, shortApplyPage, signInPage }) => { 
    await Given('the user is on short apply product details screen', null, { page, shortApplyPage, signInPage }); 
    await When('the user clicks on other accounts', null, { shortApplyPage }); 
    await And('the system navigates back to product list page', null, { shortApplyPage }); 
    await When('the user clicks on product details', null, { shortApplyPage }); 
    await When('the user ticks all the mandatory tickboxes', null, { shortApplyPage }); 
    await When('the user clicks on Apply button', null, { shortApplyPage }); 
    await When('the user clicks on the Back button on Short apply contact details screen', null, { shortApplyPage }); 
    await And('the system navigates back to product list page', null, { shortApplyPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\shortapply.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on short apply product details screen","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user clicks on links relevant screens are displayed","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user does not tickboxes mandatory tick boxes and clicks on apply","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then error messages should be displayed for all mandatory tick boxes","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the user ticks all the mandatory tickboxes","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks on Apply button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user does not enter mandatory fields on contact details screen and clicks on continue","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then error messages should be displayed for all mandatory fields on contact details screen","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the user is on short apply product details screen","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user ticks all the mandatory tickboxes","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user clicks on Apply button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user click on 'Yes' for Are the contact details correct","stepMatchArguments":[{"group":{"start":18,"value":"'Yes'","children":[{"children":[{"children":[]}]},{"start":19,"value":"Yes","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the user enters all mandatory fields on contact details screen","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user clicks on submit for short apply","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then short apply successful screen should be displayed","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks on back to accounts button","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then accounts home screen should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given the user is on short apply product details screen","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the user ticks all the mandatory tickboxes","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When the user clicks on Apply button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user click on 'No' for Are the contact details correct","stepMatchArguments":[{"group":{"start":18,"value":"'No'","children":[{"children":[{"children":[]}]},{"start":19,"value":"No","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When the user clicks on secure messaging to update contact details","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When the user sends message","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When the user clicks on return to messages","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":40,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given the user is on short apply product details screen","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When the user clicks on other accounts","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And the system navigates back to product list page","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When the user clicks on product details","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When the user ticks all the mandatory tickboxes","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When the user clicks on Apply button","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When the user clicks on the Back button on Short apply contact details screen","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"And the system navigates back to product list page","stepMatchArguments":[]}]},
]; // bdd-data-end