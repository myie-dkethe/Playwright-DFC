Feature: Nominated Account

Scenario: Nominated account successful selection
Given the user is on the sign-in page
When the user enters a valid username and password
And the user enters the correct PIN
And the user signs in
And the user navigates to the "Move Money" section
And the user selects "Nominated Accounts"
And the user selects a withdrawal account
And the nominated account details are displayed
When the user clicks the "Change details" button
And the user enters a message and clicks "Send message"
Then the "Return to messages" button is visible
And the user sees the confirmation text "Return to messages"
When the user clicks on "Account ending"
And the user clicks on "Thank you for your message."
Then the user is returned to the messages screen

