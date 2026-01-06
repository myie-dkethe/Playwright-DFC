Feature: Messaging

Scenario: Create new message 
	Given the user is on messages screen 
	When the user creates a new message and sends 
	Then message sent successfully screen should be displayed
	When the user clicks on return to messages
	Then messages screen should be displayed 


Scenario: Create new message - validation- mandatory message 
	Given the user is on messages screen 
	When the user does not complete all of the mandatory fields for send new message
	Then mandatory fields missing error message is displayed for send new message
	


Scenario: Reply to message
	Given the user is on messages screen 
	When the user creates a new message and sends 
	Then message sent successfully screen should be displayed
	When the user clicks on return to messages
	When the user clicks on the message 
	When user clicks on reply
	When user replies to the message 
	Then messages screen should be displayed

Scenario: Cancel on all messages screen
Given the user is on messages screen 
When the user clicks on the message 
Then message details screen should be displayed 
When the user clicks on cancel on message details screen
Then messages screen should be displayed
When the user clicks on the message 
Then message details screen should be displayed 
When user clicks on reply
When the user clicks on cancel for reply message
Then messages screen should be displayed
	



