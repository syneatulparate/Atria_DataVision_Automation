Feature: Forgot password fuctionality verification for Classic and Mordern User
    Background: ForgotPassword
        Given User is on Login page
        When  User click on the forgot password link and navigates to Forgot password Page


    @AT24ATH_022 @Sprint1
    Scenario Outline: User Enter invalid username
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username | ErrorMsg     |
            | pdf      | Bad username |

    @AT24ATH_021 @Sprint1 @SmokeSuite
    Scenario Outline: User enter valid username
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that email field is displayed
        Examples:
            | username     |
            | CLASSICDEV27 |

    @AT24ATH_024 @Sprint1
    Scenario Outline: User enters personal answer correctly and email incorrectly.
        When  User enters "<username>" into the Username field and click on the continue button
        When  User enters a valid securityAnswer
        When  User enters a invalid email "<emailid>" in email textfield and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | emailid     | ErrorMsg                                                                          |
            | classicdev27 | pss@gdg.com | The email address you entered does not match any email address on record for you. |

    @AT24ATH_025 @Sprint1
    Scenario Outline: User enters personal answer incorrect but email is correct.
        When  User enters "<username>" into the Username field and click on the continue button
        When  User set "<securityans>" to the answer field and "<emailid>" into email field and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | securityans | emailid                    | ErrorMsg                                                      |
            | classicdev27 | 123         | classicdev27@synechron.com | There was a problem with the answer to your security question |

    @AT24ATH_026 @Sprint1 @SmokeSuite
    Scenario Outline: User enters both email and security answer incorrectly .
        When  User enters "<username>" into the Username field and click on the continue button
        #enter invalid security answer
        When  User set "<securityans>" to the answer field and "<emailid>" into email field and clicks on continue button
        #enter invalid email id
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | securityans | emailid     | ErrorMsg                                                                          |
            | CLASSICDEV35 | 1235        | pss@gdg.com | The email address you entered does not match any email address on record for you. |


    @AT24ATH_027 @Sprint1
    Scenario Outline: Correct userid no security question setup.
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username    | ErrorMsg                                                                                                                                                                                                                                     |
            | CLASSICDEV4 | As you have not set up security questions, you cannot proceed. Please contact dataVISION Help for assistance: Phone: 858-530-4400 Ext. 4486, Hours of Operation: 6:30 AM - 4:30 PM, Pacific Time Email: dvhelp@cusonet.com Fax: 858-530-4444 |


    @AT24ATH_029 @Sprint1
    Scenario Outline: User enter invalid userid
        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username             | ErrorMsg     |
            | classicdev17@syn.com | Bad username |

    @AT24ATH_030_01 @Sprint1
    Scenario Outline: User enter valid email and 2FA is configured to account
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        Examples:
            | email                     |
            | classicdev5@synechron.com |

    @AT24ATH_032 @Sprint1
    Scenario Outline: User enter valid email and 2FA is not config
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | email                     | ErrorMsg                                                                                                                                                                                                                                            |
            | classicdev6@synechron.com | As you have not set up Two Factor Authentication, you cannot proceed. Please contact dataVISION Help for assistance: Phone: 858-530-4400 Ext. 4486, Hours of Operation: 6:30 AM - 4:30 PM, Pacific Time Email: dvhelp@cusonet.com Fax: 858-530-4444 |


    @AT30ATH_046 @Sprint1
    Scenario Outline: User enters OTP incorrectly to verify lock .
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        When  User enters invalid OTP "<OTP>" 3 times
        Then  User expect that "<ErrorMsg>" is present
        Examples:
            | email                      | OTP    | ErrorMsg                                             |
            | classicdev13@synechron.com | 123456 | Please contact the Help Desk to reset your password. |
    @AT30ATH_046_02 @Sprint1
    Scenario Outline: User enters SecQuestion incorrectly to verify lock .

        When  User enters "<username>" into the Username field and click on the continue button
        Then  User expect that the SecAns field is displayed
        When  User enters "<email>"
        When  User enters invalid Ans "<ANS>" 3 times
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | username     | password | email                      | ANS    | ErrorMsg                                             |
            | CLASSICDEV43 | drowssap | classicdev43@synechron.com | 123456 | Please contact the Help Desk to reset your password. |


    @AT30ATH_046_01 @Sprint1
    Scenario Outline: User enters OTP incorrectly.
        When  User enters "<email>" into the Username field and click on the continue button
        Then  User expect that the OTP field is displayed
        When  User enters "<OTP>" into the OTP field and clicks on continue button
        Then  User expect that "<ErrorMsg>" is displayed
        Examples:
            | email                     | OTP    | ErrorMsg                               |
            | classicdev7@synechron.com | 123456 | Wrong or Invalid OTP. Please re-enter. |