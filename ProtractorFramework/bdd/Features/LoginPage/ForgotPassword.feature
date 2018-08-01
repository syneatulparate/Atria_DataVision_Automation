Feature: Authentication & Authorization
    Background: ForgotPassword
        Given User is on Login page
        When  User click on the forgot password link and navigates to Forgot password Page

    @AT24_ATH_022 @Regression @Sprint1
    Scenario Outline: Error message for invalid username
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg     |
            | pdf      | Bad username |

    @AT24_ATH_021  @SmokeSuite @Regression @Sprint1
    Scenario Outline: User enters valid username
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that email field is displayed
        Examples:
            | username     |
            | CLASSICDEV27 |

    @AT24_ATH_024 @Regression @Sprint1
    Scenario Outline: Error message for incorrect email id.
        When  User enters "<username>" into the Username field and click on the continue button
        When  User enters a valid securityAnswer
        When  User enters a invalid email "<emailid>" in email textfield and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | emailid     | ErrorMsg                                                                          |
            | classicdev27 | pss@gdg.com | The email address you entered does not match any email address on record for you. |

    @AT24_ATH_025 @Regression @Sprint1
    Scenario Outline: Error message for incorrect personal answer.
        When  User enters "<username>" into the Username field and click on the continue button
        When  User set "<securityans>" to the answer field and "<emailid>" into email field and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | securityans | emailid                    | ErrorMsg                                    |
            | classicdev27 | 123         | classicdev27@synechron.com | Incorrect answer to your security question. |

    @AT24_ATH_026 @SmokeSuite @Regression @Sprint1
    Scenario Outline: Error message for both email id and security answer incorrect.
        When  User enters "<username>" into the Username field and click on the continue button
        When  User set "<securityans>" to the answer field and "<emailid>" into email field and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | securityans | emailid     | ErrorMsg                                                                          |
            | CLASSICDEV35 | 1235        | pss@gdg.com | The email address you entered does not match any email address on record for you. |

    @AT24_ATH_027 @Regression @Sprint1
    Scenario Outline: Error message for no security question setup.
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username    | ErrorMsg                                                                                                                                                                                                                                       |
            | CLASSICDEV4 | As you have not set up security questions, you cannot proceed. Please contact dataVISION Help for assistance: Phone: 858-530-4400 Ext. 4486, Hours of Operation: 6:30 AM - 4:30 PM, Pacific Time, Email: dvhelp@cusonet.com, Fax: 858-530-4444 |

    @AT24_ATH_029 @Regression @Sprint1
    Scenario Outline: Error message for invalid userid
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username             | ErrorMsg     |
            | classicdev17@syn.com | Bad username |

    @AT24_ATH_030_01 @Regression @Sprint1
    Scenario Outline: Verify email id field for 2FA configured user
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        Examples:
            | email                     |
            | classicdev5@synechron.com |

    @AT24_ATH_032 @Regression @Sprint1
    Scenario Outline: Error message for 2FA is not config
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | email                     | ErrorMsg                                                                                                                                                                                                                                              |
            | classicdev6@synechron.com | As you have not set up two-factor authentication, you cannot proceed. Please contact dataVISION Help for assistance: Phone: 858-530-4400 Ext. 4486, Hours of Operation: 6:30 AM - 4:30 PM, Pacific Time, Email: dvhelp@cusonet.com, Fax: 858-530-4444 |

    @AT30_ATH_046 @Regression @Sprint1
    Scenario Outline: Error message for incorrect OTP lock.
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        When  User enters invalid OTP "<OTP>" 3 times
        Then  User expect that "<ErrorMsg>" is present
        Examples:
            | email                      | OTP    | ErrorMsg                                             |
            | classicdev13@synechron.com | 123456 | Please contact the Help Desk to reset your password. |

    @AT30_ATH_046_02 @Regression @Sprint1
    Scenario Outline: Error message for incorrect SecQuestion lock.
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that the SecurityAnswer field is displayed
        When  User enters "<email>"
        When  User enters invalid SecurityAnswer "<SecurityAnswer>" 3 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | email                      | SecurityAnswer    | ErrorMsg                                             |
            | CLASSICDEV43 | classicdev43@synechron.com | 123456 | Please contact the Help Desk to reset your password. |

    @AT30_ATH_046_01 @Regression @Sprint1
    Scenario Outline: Error message for incorrect OTP.
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        When  User enters "<OTP>" into the OTP field and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | email                     | OTP    | ErrorMsg                               |
            | classicdev7@synechron.com | 123456 | Wrong or invalid OTP. Please re-enter. |