// Generated from: tests\features\nominatedaccount.feature
import { test } from "../../../tests/fixture/fixtures.js";

test.describe('Nominated Account', () => {

  test('Nominated account successful selection', async ({ Given, When, Then, And }) => { 
    await Given('the user is on the sign-in page'); 
    await When('the user enters a valid username and password'); 
    await And('the user enters the correct PIN'); 
    await And('the user signs in'); 
    await And('the user navigates to the "Move Money" section'); 
    await And('the user selects "Nominated Accounts"'); 
    await And('the user selects a withdrawal account'); 
    await And('the nominated account details are displayed'); 
    await When('the user clicks the "Change details" button'); 
    await And('the user enters a message and clicks "Send message"'); 
    await Then('the "Return to messages" button is visible'); 
    await And('the user sees the confirmation text "Return to messages"'); 
    await When('the user clicks on "Account ending"'); 
    await And('the user clicks on "Thank you for your message."'); 
    await Then('the user is returned to the messages screen'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\nominatedaccount.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the sign-in page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user enters a valid username and password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user enters the correct PIN","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And the user signs in","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user navigates to the \"Move Money\" section","stepMatchArguments":[{"group":{"start":26,"value":"\"Move Money\"","children":[{"start":27,"value":"Move Money","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And the user selects \"Nominated Accounts\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Nominated Accounts\"","children":[{"start":18,"value":"Nominated Accounts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And the user selects a withdrawal account","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the nominated account details are displayed","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks the \"Change details\" button","stepMatchArguments":[{"group":{"start":20,"value":"\"Change details\"","children":[{"start":21,"value":"Change details","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user enters a message and clicks \"Send message\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Send message\"","children":[{"start":38,"value":"Send message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the \"Return to messages\" button is visible","stepMatchArguments":[{"group":{"start":4,"value":"\"Return to messages\"","children":[{"start":5,"value":"Return to messages","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the user sees the confirmation text \"Return to messages\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Return to messages\"","children":[{"start":37,"value":"Return to messages","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user clicks on \"Account ending\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Account ending\"","children":[{"start":20,"value":"Account ending","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And the user clicks on \"Thank you for your message.\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Thank you for your message.\"","children":[{"start":20,"value":"Thank you for your message.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the user is returned to the messages screen","stepMatchArguments":[]}]},
]; // bdd-data-end