Feature: Login to DV3 application

@DV3LoginREPUser
Scenario: Verify REP user login on DV3 application
        Given I go to DV3 url "https://dv3.orcasnet.com/"
        When  I set "MOHAN" to the inputfield "txtUserName"
        When  I set "Dec!234567" to the inputfield "txtPassword"       
        When  I click on the button "btnLogin"
        Then  I expect that the title is "Log In – dataVISION"
        When  I set "SHASHI" to the inputfield "securityAnswer"

@Scenario1 @UVL<1MonthSecurityDefined
Scenario: Verify REP user login on DV3 application
        Given dV user is on the login page
        When User enters valid credentials "<user_id>" and "<password>"
        Then system validates the UVL and logs him in


  
