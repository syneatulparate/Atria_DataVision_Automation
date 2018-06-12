Feature: User Validation Login for Classic and Mordern User
    @UVL<1MonthSecQueDefineClassic @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") < 1 month old, and security questions defined, logs into the system using Classic
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username    | password |
            | CLASSICDEV1 | drowssap |

    @UVL<1MonthSecQueNotDefineClassic @Sprint1
    Scenario Outline: dV user with UserValidatedLogin ("UVL") < 1 month old, and security questions defined, logs into the system using Classic
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username    | password |
            | CLASSICDEV2 | drowssap |


    @UVL>1MonthSecQueNotDefineClassic @Sprint1
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions not defined, logs into the system using Classic
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username    | password |
            | CLASSICDEV4 | drowssap |


    @UVL>1MonthSecQueDefineClassic @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the title is "Log In – dataVISION"
        When  User enter securityAnswer to the inputfield "securityAnswer"
        When  User click on the button "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username    | password |
            | CLASSICDEV3 | drowssap |


    @UVL>1MonthSecQueDefineClassicRemember @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic and Remember me option
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the title is "Log In – dataVISION"
        When  User enter securityAnswer to the inputfield "securityAnswer"
        When  User click on the button "btnLoginRem"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username    | password |
            | CLASSICDEV3 | drowssap |
    @UVL>1MonthSecQueDefineClassicRememberlogin @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic and Remember me option click then login to verify
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the title is "Log In – dataVISION"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username    | password |
            | CLASSICDEV3 | drowssap |

    @UVL<1Day2FANotConfigModern @Sprint1
    Scenario Outline: dV user with UVL < 1 day old, and 2FA not configured, logs into the system using Modern credentials
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username                   | password |
            | classic.dev2@synechron.com | drowssap |



    @UVL<1Day2FAConfigModern @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UVL < 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        # Then  User expect that the element "txtOTP" is Present
        # When  User set "<OTP>" to the inputfield "txtOTP"
        # When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username                   | password | OTP    |
            | classic.dev1@synechron.com | drowssap | 123456 |


    @UVL>1Day2FANotConfigModern @Sprint1
    Scenario Outline: dV user with UVL > 1 day old, and 2FA not configured, logs into the system using Modern credentials
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username                   | password |
            | classic.dev4@synechron.com | drowssap |



# enter correct opt
    @UVL>1Day2FAConfigModern 
    Scenario Outline: dV user with UVL > 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "txtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"

        Examples:
            | username                   | password | OTP    |
            | classic.dev3@synechron.com | drowssap | 123456 |


    @UVL>1Day2FAConfigModernRemember 
    Scenario Outline: dV user with UVL > 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "txtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLoginRem"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"

        Examples:
            | username                   | password | OTP    |
            | classic.dev3@synechron.com | drowssap | 123456 |




  #enter incorrect opt
    @UVL>1Day2FAConfigModernInvalidOTP @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UVL > 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "classic.dev3@synechron.com" to the inputfield "txtUserName"
        When  User put "drowssap" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "txtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLogin"
        Then  User expect that element "errMsg" contains the text "There was a problem with your security code"
        Examples:
            | username                   | password | OTP    |
            | classic.dev3@synechron.com | drowssap | 123456 |

