Feature: Login 

  Scenario: User can sign in
    Given I open the homepage
    When I sign in as "User1"
    And I enter pin for "User1"
    Then accounts home screen should be displayed