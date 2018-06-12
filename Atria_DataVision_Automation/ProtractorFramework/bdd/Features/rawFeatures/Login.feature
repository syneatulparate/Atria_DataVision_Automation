Feature: Login to DV3 application

@ValidLogin_ModernUser
Scenario: Verify REP user login on DV3 application
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "atul.parate@synechron.com" to the inputfield "txtUserName"
        When  User set "drowssap" to the inputfield "txtPassword"       
        When  User click on the button "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"

@InvalidLogin_ModernUser
Scenario: Verify REP user login on DV3 application
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "atul.parate@synechron.com" to the inputfield "txtUserName"
        When  User set "drowssap123" to the inputfield "txtPassword"       
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "Bad username or password"

@ValidLogin_ClassicUser
Scenario: Verify REP user login on DV3 application
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "APARATE" to the inputfield "txtUserName"
        When  User set "drowssap" to the inputfield "txtPassword"       
        When  User click on the button "btnLogin"
        When  User enter securityAnswer to the inputfield "securityAnswer"
        When  User click on the button "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"      
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"