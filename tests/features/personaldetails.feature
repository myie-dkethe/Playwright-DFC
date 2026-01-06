Feature: Personal Details



Scenario: Personal details - validation and back button 
Given the user is on personal details screen
Then the personal details screen elements should be displayed correctly 
When the user clicks on edit personal details button
Then the personal details edit screen should be displayed correctly
When the user does not complete all of the mandatory fields for personal details and clicks on save
Then error messages should be displayed for all mandatory fields for personal details 
When the user clicks on back to my details button
Then the personal details screen should be displayed
When the user clicks on back to my services 
Then my services screen should be displayed 
When the user clicks on personal details link
Then the personal details screen should be displayed
When the user clicks on send message link
When the user sends secure message
When the user clicks on return to messages
#Then messages screen should be displayed



Scenario: Personal Details Update Successful-address lookup
Given the user is on personal details screen
Then the personal details screen should be displayed 
When the user clicks on edit personal details button
Then the personal details edit screen should be displayed correctly
When the user completes all email and phone number for personal details 
When the user uses address lookup to update address 
When the user updates contact preferences
When the user clicks on save button
Then personal details updated successfully message should be displayed

Scenario: Personal Details Update Successful-address manual entry
Given the user is on personal details screen
Then the personal details screen should be displayed 
When the user clicks on edit personal details button
Then the personal details edit screen should be displayed correctly
When the user uses address manual entry to update address 
When the user clicks on save button
Then personal details updated successfully message should be displayed


Scenario: Personal details - invalid values for mandatory fields
Given the user is on personal details screen
Then the personal details screen elements should be displayed correctly 
When the user clicks on edit personal details button
Then the personal details edit screen should be displayed correctly
#When the user enters invalid values for "<email>" and "<phone number>" fields, error messages are displayed
# Examples: email and phone number
#  | email |phone number |
#  | test     | test   |
#  | @test.com | 123abc |
#  | test@.com | !@#$% |
#  | test@com | 12345 |
#  | test.com | 12345678901234567890 |
When the user clicks on search address button
When the user enters invalid values for flat number, house number, and house name, error messages are displayed
  | flatNumber | houseNumber | houseName |
  | !@#$%      | !@#$%       | !@#$%     |
When the user enters invalid values for postcode,town,addressline1,county, error messages are displayed
| postcode |town |address line 1 |county |
        | !@#$% |  !@#$% |!@#$% | !@#$% |
        | 123abc |!@#$% |!@#$% |!@#$% |
        | abcd12 |!@#$% |!@#$% |!@#$% |
        | ab!@# |!@#$% |!@#$% |!@#$% |
        | 1234 |!@#$% |!@#$% |!@#$% |
        