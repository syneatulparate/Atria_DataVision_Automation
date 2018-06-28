Feature: Login to DV3 application

    @InvalidUseridandpassword_Classic @Sprint1
    Scenario Outline: User Enter invalid username
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg                 | password |
            | pdf      | Bad username or password | test123  |

    @InvalidUseridandValidpassword_Classic @Sprint1
    Scenario Outline: User Enter invalid username
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg                 | password |
            | pdf      | Bad username or password | drowssap |

    @ValidUseridandInvalidpassword_Classic @Sprint1
    Scenario Outline: User Enter invalid username
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username    | ErrorMsg                 | password |
            | CLASSICDEV9 | Bad username or password | test123  |

    @UVL<1MonthSecQueDefineClassicRemember @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") < 1 month old, and security questions defined, logs into the system using Classic
        Given  User go to DV3 Application
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that title  contains the text "Dashboard – dataVISION"
        Then  User expect that element contains the text "Welcome to dataVISION!"
        When  User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username    | password |
            | CLASSICDEV9 | drowssap |
    @UVL<1MonthSecQueNotDefineClassicRemember @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") < 1 month old, and security questions defined, logs into the system using Classic
        Given  User go to DV3 Application
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that title  contains the text "Dashboard – dataVISION"
        Then  User expect that element contains the text "Welcome to dataVISION!"
        When  User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username     | password |
            | CLASSICDEV10 | drowssap |


    @UVL>1MonthSecQueNotDefineClassic @Sprint1
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions not defined, logs into the system using Classic
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that element contains the text "Welcome to dataVISION!"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present
        Examples:
            | username    | password |
            | CLASSICDEV4 | drowssap |


    @UVL>1MonthSecQueDefineClassicRemember @Sprint1 @SmokeSuite @test786
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic and Remember me option
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        When User enter securityAnswer to the securityAnswer input field and click on Loginandrememberme button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username     | password |
            | CLASSICDEV19 | drowssap |
    @UVL>1MonthSecQueDefineClassicRememberLogin1 @Sprint1 @SmokeSuite @test786
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic and Remember me option
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"

        Examples:
            | username     | password |
            | classicdev19 | drowssap |
    @UVL>1MonthSecQueDefineClassicRememberLogin @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic and Remember me option
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        When User enter securityAnswer to the securityAnswer input field and click on Loginandrememberme button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"

        Examples:
            | username     | password |
            | classicdev19 | drowssap |

    @UVL<1Day2FANotConfigModern @Sprint1
    Scenario Outline: dV user with UVL < 1 day old, and 2FA not configured, logs into the system using Modern credentials
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"

        Examples:
            | username                  | password |
            | classicdev6@synechron.com | drowssap |


    @UVL<1Day2FAConfigModernRememberLogin
    Scenario Outline: dV user with UVL < 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        Examples:
            | username                  | password |
            | classicdev5@synechron.com | drowssap |

    @UVL>1Day2FAConfigModern @Sprint1
    Scenario Outline: dV user with UVL > 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        Examples:
            | username                  | password | txtOTP |
            | classicdev7@synechron.com | drowssap |        |


    @UVL>1Day2FANotConfigModern @Sprint1
    Scenario Outline: dV user with UVL > 1 day old, and 2FA not configured, logs into the system using Modern credentials
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"

        Examples:
            | username                  | password |
            | classicdev8@synechron.com | drowssap |

    @UVL>1Day2FAConfigModernInvalid
    Scenario Outline: dV user with UVL > 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        When  User enter invalid otp "<txtOTP>" and click on Login button
        Then User expect that "<ErrorMsg>" is displayed

        Examples:
            | username                  | password | txtOTP | ErrorMsg |
            | classicdev7@synechron.com | drowssap | 123456 | Bad OTP  |

    @InvalidOtplockvalidation_ModernUser @Sprint2
    Scenario Outline: User enters OTP incorrectly to verify lock .
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        When  User enters invalid Otp "<OTP>" 4 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username                        | password | OTP    | ErrorMsg                                                                |
            | prajyot.fulsundar@synechron.com | drowssap | 123456 | We're sorry but you have been locked out due to too many login failures |


    @InvalidSecQueslockvalidation_ClassicUser @Sprint2
    Scenario Outline: User enters SecQuestion incorrectly to verify lock .
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the SecAns field is displayed
        When  User enters invalid Ans "<ANS>" 4 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | password | email                      | ANS    | ErrorMsg                                                                |
            | CLASSICDEV27 | drowssap | classicdev13@synechron.com | 123456 | We're sorry but you have been locked out due to too many login failures |
    @InvalidSecQueslockvalidation_ClassicOnetime @Sprint2
    Scenario Outline: User enters SecQuestion incorrectly to verify lock .
        Given User go to DV3 Application
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the SecAns field is displayed
        When  User enter invalid ans "<ANS>" and click on Login button
        Then  User expect that "<ErrorMsg>" is displayed
      
        Examples:
            | username     | password | email                      | ANS    | ErrorMsg   |
            | CLASSICDEV11 | drowssap | classicdev13@synechron.com | 123456 | Bad Answser |
