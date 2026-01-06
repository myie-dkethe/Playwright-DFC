// Generated from: tests\features\signin.feature
import { test } from "../../../tests/fixture/fixtures.js";

test.describe('Login', () => {

  test('User can sign in', async ({ Given, When, Then, And, signInPage }) => { 
    await Given('I open the homepage', null, { signInPage }); 
    await When('I sign in as "User1"', null, { signInPage }); 
    await And('I enter pin for "User1"', null, { signInPage }); 
    await Then('accounts home screen should be displayed', null, { signInPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\signin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I sign in as \"User1\"","stepMatchArguments":[{"group":{"start":13,"value":"\"User1\"","children":[{"start":14,"value":"User1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I enter pin for \"User1\"","stepMatchArguments":[{"group":{"start":16,"value":"\"User1\"","children":[{"start":17,"value":"User1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then accounts home screen should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end