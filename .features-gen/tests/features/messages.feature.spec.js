// Generated from: tests\features\messages.feature
import { test } from "../../../tests/fixture/fixtures.js";

test.describe('Messaging', () => {

  test('Create new message', async ({ Given, When, Then, messagePage, signInPage }) => { 
    await Given('the user is on messages screen', null, { messagePage, signInPage }); 
    await When('the user creates a new message and sends', null, { messagePage }); 
    await Then('message sent successfully screen should be displayed', null, { messagePage }); 
    await When('the user clicks on return to messages', null, { messagePage }); 
    await Then('messages screen should be displayed', null, { messagePage }); 
  });

  test('Create new message - validation- mandatory message', async ({ Given, When, Then, messagePage, signInPage }) => { 
    await Given('the user is on messages screen', null, { messagePage, signInPage }); 
    await When('the user does not complete all of the mandatory fields for send new message', null, { messagePage }); 
    await Then('mandatory fields missing error message is displayed for send new message', null, { messagePage }); 
  });

  test('Reply to message', async ({ Given, When, Then, messagePage, signInPage }) => { 
    await Given('the user is on messages screen', null, { messagePage, signInPage }); 
    await When('the user creates a new message and sends', null, { messagePage }); 
    await Then('message sent successfully screen should be displayed', null, { messagePage }); 
    await When('the user clicks on return to messages', null, { messagePage }); 
    await When('the user clicks on the message', null, { messagePage }); 
    await When('user clicks on reply', null, { messagePage }); 
    await When('user replies to the message', null, { messagePage }); 
    await Then('messages screen should be displayed', null, { messagePage }); 
  });

  test('Cancel on all messages screen', async ({ Given, When, Then, messagePage, signInPage }) => { 
    await Given('the user is on messages screen', null, { messagePage, signInPage }); 
    await When('the user clicks on the message', null, { messagePage }); 
    await Then('message details screen should be displayed', null, { messagePage }); 
    await When('the user clicks on cancel on message details screen', null, { messagePage }); 
    await Then('messages screen should be displayed', null, { messagePage }); 
    await When('the user clicks on the message', null, { messagePage }); 
    await Then('message details screen should be displayed', null, { messagePage }); 
    await When('user clicks on reply', null, { messagePage }); 
    await When('the user clicks on cancel for reply message', null, { messagePage }); 
    await Then('messages screen should be displayed', null, { messagePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\messages.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on messages screen","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user creates a new message and sends","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then message sent successfully screen should be displayed","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks on return to messages","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then messages screen should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is on messages screen","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user does not complete all of the mandatory fields for send new message","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then mandatory fields missing error message is displayed for send new message","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the user is on messages screen","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user creates a new message and sends","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then message sent successfully screen should be displayed","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks on return to messages","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user clicks on the message","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When user clicks on reply","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When user replies to the message","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then messages screen should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given the user is on messages screen","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user clicks on the message","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then message details screen should be displayed","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When the user clicks on cancel on message details screen","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then messages screen should be displayed","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When the user clicks on the message","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then message details screen should be displayed","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When user clicks on reply","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When the user clicks on cancel for reply message","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then messages screen should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end