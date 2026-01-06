Feature: Short Apply


Scenario: Links on apply screen and Validation of mandatory tickboxes on Short apply
Given the user is on short apply product details screen
When the user clicks on links relevant screens are displayed
When the user does not tickboxes mandatory tick boxes and clicks on apply 
Then error messages should be displayed for all mandatory tick boxes
When the user ticks all the mandatory tickboxes 
When the user clicks on Apply button
When the user does not enter mandatory fields on contact details screen and clicks on continue
Then error messages should be displayed for all mandatory fields on contact details screen

Scenario: Short apply successful 
Given the user is on short apply product details screen
When the user ticks all the mandatory tickboxes 
When the user clicks on Apply button
When the user click on 'Yes' for Are the contact details correct
When the user enters all mandatory fields on contact details screen
When the user clicks on submit for short apply
Then short apply successful screen should be displayed
When the user clicks on back to accounts button
Then accounts home screen should be displayed


Scenario: No for contact details correct
Given the user is on short apply product details screen
When the user ticks all the mandatory tickboxes 
When the user clicks on Apply button
When the user click on 'No' for Are the contact details correct
When the user clicks on secure messaging to update contact details
When the user sends message
When the user clicks on return to messages
#Then messages screen should be displayed

Scenario: Back button on all short apply screens
Given the user is on short apply product details screen
When the user clicks on other accounts 
And the system navigates back to product list page
When the user clicks on product details 
When the user ticks all the mandatory tickboxes 
When the user clicks on Apply button
When the user clicks on the Back button on Short apply contact details screen
And the system navigates back to product list page