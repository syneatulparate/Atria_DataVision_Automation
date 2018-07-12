Feature: Login to DV3 application

    @AT22ATH_013_001 @Sprint1
    Scenario Outline: User Enter invalid username
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg                 | password |
            | pdf      | Bad username or password | test123  |

    @AT22ATH_013_002  @Sprint1
    Scenario Outline: User Enter invalid username
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg                 | password |
            | pdf      | Bad username or password | drowssap |

    @AT22ATH_013_003  @Sprint1
    Scenario Outline: User Enter invalid username
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username    | ErrorMsg                 | password |
            | CLASSICDEV9 | Bad username or password | test123  |

    @AT22ATH_001 @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") < 1 month old, and security questions defined, logs into the system using Classic
        Given  User is on Login page
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that title  contains the text "Dashboard – dataVISION"
        Then  User expect that element contains the text "Welcome to dataVISION!"
        When  User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username    | password |
            | CLASSICDEV1 | drowssap |
    @AT22ATH_002 @Sprint1 @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") < 1 month old, and security questions not defined, logs into the system using Classic
        Given  User is on Login page
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that title  contains the text "Dashboard – dataVISION"
        Then  User expect that element contains the text "Welcome to dataVISION!"
        When  User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username     | password |
            | CLASSICDEV2 | drowssap |


    @AT22ATH_003 @Sprint1
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions not defined, logs into the system using Classic
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that element contains the text "Welcome to dataVISION!"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present
        Examples:
            | username    | password |
            | CLASSICDEV4 | drowssap |


    @AT22ATH_004 @Sprint1 @SmokeSuite 
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic and Remember me option
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        When User enter securityAnswer to the securityAnswer input field and click on Loginandrememberme button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username     | password |
            | CLASSICDEV3 | drowssap |
    @AT22ATH_004_01 @Sprint1 @SmokeSuite 
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic and Remember me option
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username     | password |
            | classicdev3 | drowssap |
    @AT22ATH_004  @SmokeSuite
    Scenario Outline: dV user with UserValidatedLogin ("UVL") > 1 month old, and security questions defined, logs into the system using Classic and Remember me option
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        When User enter securityAnswer to the securityAnswer input field and click on Loginandrememberme button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username     | password |
            | classicdev19 | drowssap |

    @AT22ATH_006 @Sprint1
    Scenario Outline: dV user with UVL < 1 day old, and 2FA not configured, logs into the system using Modern credentials
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username                  | password |
            | classicdev6@synechron.com | drowssap |


    @AT22ATH_005
    Scenario Outline: dV user with UVL < 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present
        Examples:
            | username                  | password |
            | classicdev5@synechron.com | drowssap |

    @AT22ATH_008 @Sprint1
    Scenario Outline: dV user with UVL > 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        Examples:
            | username                  | password | 
            | classicdev7@synechron.com | drowssap |


    @AT22ATH_007 @Sprint1
    Scenario Outline: dV user with UVL > 1 day old, and 2FA not configured, logs into the system using Modern credentials
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username                  | password |
            | classicdev8@synechron.com | drowssap |

    @AT30ATH_045_01 @Sprint2
    Scenario Outline: dV user with UVL > 1 day old, and 2FA configured, logs into the system using Modern credentials
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        When  User enter invalid otp "<txtOTP>" and click on Login button
        Then User expect that "<ErrorMsg>" is displayed

        Examples:
            | username                  | password | txtOTP | ErrorMsg |
            | classicdev7@synechron.com | drowssap | 123456 | Bad OTP  |

    @AT30ATH_045 @Sprint2
    Scenario Outline: User enters OTP incorrectly to verify lock .
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        When  User enters invalid Otp "<OTP>" 3 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username                        | password | OTP    | ErrorMsg                                                                |
            | prajyot.fulsundar@synechron.com | drowssap | 123456 | We're sorry but you have been locked out due to too many login failures |


    @AT30ATH_043 @Sprint2
    Scenario Outline: User enters SecQuestion incorrectly to verify lock .
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the SecAns field is displayed
        When  User enters invalid Ans "<ANS>" 3 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | password | email                      | ANS    | ErrorMsg                                                                |
            | CLASSICDEV27 | drowssap | classicdev13@synechron.com | 123456 | We're sorry but you have been locked out due to too many login failures |
    @AT30ATH_043_01 @Sprint2
    Scenario Outline: User enters SecQuestion incorrectly to verify lock .
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the SecAns field is displayed
        When  User enter invalid ans "<ANS>" and click on Login button
        Then  User expect that "<ErrorMsg>" is displayed
      
        Examples:
            | username     | password | email                      | ANS    | ErrorMsg   |
            | CLASSICDEV11 | drowssap | classicdev11@synechron.com | 123456 | Bad Answer |