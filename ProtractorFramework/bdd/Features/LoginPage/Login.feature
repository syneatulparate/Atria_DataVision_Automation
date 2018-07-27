Feature: Authentication & Authorization

    @AT22_ATH_013_01 @Regression @Sprint1
    Scenario Outline: Login with Invaild User Name and password
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg                 | password |
            | pdf      | Bad username or password | test123  |

    @AT22_ATH_013_02 @Regression @Sprint1
    Scenario Outline: Login with Invaild User Name and valid password
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg                 | password |
            | pdf      | Bad username or password | drowssap |

    @AT22_ATH_013_03  @Regression @Sprint1
    Scenario Outline: Login with valid username and valid password
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | username    | ErrorMsg                 | password |
            | CLASSICDEV9 | Bad username or password | test123  |

    @AT22_ATH_001  @SmokeSuite
    Scenario Outline: UVL < 1 month old, and security questions defined for Classic User
        Given  User is on Login page
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that title  contains the text "Dashboard – dataVISION"
        Then  User expect that element contains the text "Welcome to dataVISION!"
        When  User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username    | password |
            | CLASSICDEV1 | drowssap |

    @AT22_ATH_002 @Regression @Sprint1 @SmokeSuite
    Scenario Outline: UVL < 1 month old, and security questions not defined for Classic User
        Given  User is on Login page
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that title  contains the text "Dashboard – dataVISION"
        Then  User expect that element contains the text "Welcome to dataVISION!"
        When  User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username    | password |
            | CLASSICDEV2 | drowssap |

    @AT22_ATH_003 @Regression @Sprint1
    Scenario Outline: UVL > 1 month old, and security questions not defined for Classic User
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expect that element contains the text "Welcome to dataVISION!"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present
        Examples:
            | username    | password |
            | CLASSICDEV4 | drowssap |

    @AT22_ATH_004_01 @SmokeSuite @Regression @Sprint1 
    Scenario Outline: UVL > 1 month old,security questions defined, Login and Remember me for Classic User
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        When User enter securityAnswer to the securityAnswer input field and click on Loginandrememberme button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username    | password |
            | CLASSICDEV3 | drowssap |

    @AT22_ATH_004_02 @SmokeSuite @Regression @Sprint1 
    Scenario Outline: UVL > 1 month old, and security questions defined, Login and Remember me for Classic User
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username    | password |
            | classicdev3 | drowssap |

    @AT22_ATH_004_03  @SmokeSuite @Regression @Sprint1
    Scenario Outline: UVL > 1 month old, and security questions defined, logs into the system using Classic and Remember me option
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

    @AT22_ATH_006 @Regression @Sprint1
    Scenario Outline: UVL < 1 day old, and 2FA not configured for Modern User
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username                  | password |
            | classicdev6@synechron.com | drowssap |

    @AT22_ATH_005
    Scenario Outline: UVL < 1 day old, and 2FA configured for Modern User
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present
        Examples:
            | username                  | password |
            | classicdev5@synechron.com | drowssap |

    @AT22_ATH_008 @Regression @Sprint1
    Scenario Outline: UVL > 1 day old, and 2FA configured for Modern User
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        Examples:
            | username                  | password |
            | classicdev7@synechron.com | drowssap |

    @AT22_ATH_007 @Regression @Sprint1
    Scenario Outline: UVL > 1 day old, and 2FA not configured for Modern User
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that title  contains the text "Dashboard – dataVISION"
        When User click on the logout button and verifies the title "Log In – dataVISION" is Present

        Examples:
            | username                  | password |
            | classicdev8@synechron.com | drowssap |

    @AT30_ATH_045_01 @Regression @Sprint2
    Scenario Outline: UVL > 1 day old, and 2FA configured for Modern User
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        When  User enter invalid otp "<txtOTP>" and click on Login button
        Then User expect that "<ErrorMsg>" is displayed

        Examples:
            | username                  | password | txtOTP | ErrorMsg |
            | classicdev7@synechron.com | drowssap | 123456 | Bad OTP  |

    @AT30_ATH_045 @Regression @Sprint2
    Scenario Outline: User Locked out for 3 times invalid OTP
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the OTP field is Present
        When  User enters invalid Otp "<OTP>" 3 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username                   | password | OTP    | ErrorMsg                                                                |
            | classicdev39@synechron.com | drowssap | 123456 | We're sorry but you have been locked out due to too many login failures |

    @AT30_ATH_043 @Regression @Sprint2
    Scenario Outline: User Locked out for 3 times invalid security answer
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the SecAns field is displayed
        When  User enters invalid Ans "<ANS>" 3 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | password | email                      | ANS    | ErrorMsg                                                                |
            | CLASSICDEV27 | drowssap | classicdev13@synechron.com | 123456 | We're sorry but you have been locked out due to too many login failures |

    @AT30_ATH_043_01 @Regression @Sprint2
    Scenario Outline: Error message for Invalid Security answer
        Given User is on Login page
        When User enters valid "<username>" and "<password>" and click login button
        Then  User expect that the SecAns field is displayed
        When  User enter invalid ans "<ANS>" and click on Login button
        Then  User expect that "<ErrorMsg>" is displayed

        Examples:
            | username     | password | email                      | ANS    | ErrorMsg   |
            | CLASSICDEV11 | drowssap | classicdev11@synechron.com | 123456 | Bad answer |