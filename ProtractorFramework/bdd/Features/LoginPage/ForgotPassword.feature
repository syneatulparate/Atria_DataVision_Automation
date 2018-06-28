Feature: Forgot password fuctionality verification for Classic and Mordern User

    @InvalidUserid_Classic @Sprint1
    Scenario Outline: User Enter invalid username
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg     |
            | pdf      | Bad username |

    @ValidUserid_Classic @Sprint1 @SmokeSuite
    Scenario Outline: User enter valid username
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that email field is displayed
        Examples:
            | username     |
            | CLASSICDEV1  |

    @InvalidemailandValidans_Classic @Sprint1
    Scenario Outline: User enters personal answer correctly and email incorrectly.
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<username>" into the Username field and click on the continue button
        When  User enters a valid securityAnswer 
        When  User enters a invalid email "<emailid>" in email textfield and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username    | securityans | emailid     | ErrorMsg                                                                          |
            | classicdev3  | 123         | pss@gdg.com | The email address you entered does not match any email address on record for you. |

    @ValidemailandInvalidans_Classic @Sprint1 
    Scenario Outline: User enters personal answer incorrect but email is correct.
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<username>" into the Username field and click on the continue button
        When  User set "<securityans>" to the answer field and "<emailid>" into email field and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username    | securityans | emailid                         | ErrorMsg                                                      |
            | classicdev9 | 123         | classicdev9@synechron.com       | There was a problem with the answer to your security question |        

    @Invalidansandemail_Classic @Sprint1 @SmokeSuite
    Scenario Outline: User enters both email and security answer incorrectly .
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<username>" into the Username field and click on the continue button
        #enter invalid security answer
        When  User set "<securityans>" to the answer field and "<emailid>" into email field and clicks on continue button
        #enter invalid email id
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | securityans | emailid     | ErrorMsg                                                                          |
            | CLASSICDEV11 | 1235        | pss@gdg.com | The email address you entered does not match any email address on record for you. |


    @NoSecQuetSetup_Classic @Sprint1
    Scenario Outline: Correct userid no security question setup.
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username    | ErrorMsg                                                                                                                                                                                                                                     |
            | CLASSICDEV4 | As you have not set up security questions, you cannot proceed. Please contact dataVISION Help for assistance: Phone: 858-530-4400 Ext. 4486, Hours of Operation: 6:30 AM - 4:30 PM, Pacific Time Email: dvhelp@cusonet.com Fax: 858-530-4444 |


    @InvalidSecQueLockClassic @Sprint1
    Scenario Outline: User enters personal answer incorrect but email is correct.
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<username>" into the Username field and click on the continue button
        When  User set "<securityans>" to the answer field and "<emailid>" into email field and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | securityans | emailid                    | ErrorMsg                                                      |
            | CLASSICDEV17 | 1235        | classicdev17@synechron.com | There was a problem with the answer to your security question |

    @InvalidUserid_Modern @Sprint1
    Scenario Outline: User enter invalid userid
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username             | ErrorMsg     |
            | classicdev17@syn.com | Bad username |

    @ValidUserid_Modern2FAConfig @Sprint1
    Scenario Outline: User enter valid email and 2FA is configured to account
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        Examples:
            | email                     |
            | classicdev5@synechron.com |

    @ValidUserid_Modern2FANotConfig @Sprint1
    Scenario Outline: User enter valid email and 2FA is not config
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | email                     | ErrorMsg                                                                                                                                                                                                                                            |
            | classicdev6@synechron.com | As you have not set up Two Factor Authentication, you cannot proceed. Please contact dataVISION Help for assistance: Phone: 858-530-4400 Ext. 4486, Hours of Operation: 6:30 AM - 4:30 PM, Pacific Time Email: dvhelp@cusonet.com Fax: 858-530-4444 |


    @InvalidOtp_Modern @Sprint1 @SmokeSuite
    Scenario Outline: User enters OTP incorrectly.
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        When  User enters "<OTP>" into the OTP field and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | email                     | OTP    | ErrorMsg                               |
            | classicdev7@synechron.com | 123456 | Wrong or Invalid OTP. Please re-enter. |

    @InvalidOtplockvalidation_Modern @Sprint1
    Scenario Outline: User enters OTP incorrectly to verify lock .
        Given User go to DV3 Application
        When  User click on the forgot password link and verifies the title "Log In – dataVISION" is displayed
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        When  User enters invalid OTP "<OTP>" 4 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | email                      | OTP    | ErrorMsg                                                 |
            | classicdev13@synechron.com | 123456 | Please contact Service Desk to have your password reset. |
    
            