Feature: Login to DV3 application

@DV3LoginREPUser
Scenario: Verify REP user login on DV3 application
        Given User go to DV3 url "https://dv3.orcasnet.com/"
        When  User set "MOHAN" to the inputfield "txtUserName"
        When  User set "Dec!234567" to the inputfield "txtPassword"       
        When  User click on the button "btnLogin"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "SHASHI" to the inputfield "securityAnswer"

@DV3LoginREPUser1
Scenario: Verify REP user login on DV3 application
        Given User go to DV3 url "https://dv3.orcasnet.com/"
        When  User set "MOHAN" to the inputfield "txtUserName"
        When  User set "Dec!234567" to the inputfield "txtPassword"       
        When  User click on the button "btnLogin"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "SHASHI" to the inputfield "securityAnswer"

@TestRecords
Scenario Outline: Verify REP user login on DV3 application
        Given User go to DV3 url "https://dv3.orcasnet.com/"
        When  User set "<Username>" to the inputfield "txtUserName"
        When  User set "<Password>" to the inputfield "txtPassword"       
        When  User click on the button "btnLogin"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "SHASHI" to the inputfield "securityAnswer"
 Examples: 
 |  Username  | Password|
 |  MOHAN     | Dec!234567|
 |  Atul      | Testing|

 @InvalidLogin
 Scenario: Login to DV3 with invalid credentials
        Given User go to DV3 url "https://dv3.orcasnet.com/"
        When  User set "Test" to the inputfield "txtUserName"
        When  User set "Dec!234567" to the inputfield "txtPassword"       
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "Bad username or password"
  
