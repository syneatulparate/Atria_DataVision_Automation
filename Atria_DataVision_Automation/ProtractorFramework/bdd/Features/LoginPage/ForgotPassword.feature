Feature: Forgot password fuctionality verification for Classic and Mordern User

    @InvalidUserid_Classic @Sprint1
    Scenario Outline: User Enter invalid username
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username | ErrorMsg        |
            | pdf      | Invalid User ID |
    @ValidUserid_Classic @Sprint1 @SmokeSuite
    Scenario Outline: User enter valid username
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that the element "txtemail" is Present
        Examples:
            | username    |
            | CLASSICDEV1 |

    @Invalidansandemail_Classic @Sprint1 @SmokeSuite
    Scenario Outline: User enters both email incorrectly and enters personal answer incorrectly .
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        #enter invalid security answer
        When  User set "<securityans>" to the inputfield "securityAnswer"
        #enter invalid email id
        When  User set "<emailid>" to the inputfield "txtemail"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username    | securityans | emailid     | ErrorMsg  |
            | CLASSICDEV1 | pfulsundar  | pss@gdg.com | Incorrect |
#Error Message The email address you entered does not match any email address on record for you.

    @InvalidemailandValidans_Classic @Sprint1
    Scenario Outline: User enters personal answer correctly and email incorrectly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        When  User enter securityAnswer to the inputfield "securityAnswer"
        When  User set "<emailid>" to the inputfield "txtemail"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username   | securityans | emailid     | ErrorMsg                                                                          |
            | pfulsundar | pfulsundar  | pss@gdg.com | The email address you entered does not match any email address on record for you. |
#Error message The email address you entered does not match any email address on record for you.

    @ValidemailandInvalidans_Classic @Sprint1
    Scenario Outline: User enters personal answer incorrect but email is correct.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        When  User set "<securityans>" to the inputfield "securityAnswer"
        When  User set "<emailid>" to the inputfield "txtemail"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username   | securityans | emailid                         | ErrorMsg                                                                          |
            | pfulsundar | pfulsundar  | prajyot.fulsundar@synechron.com | The email address you entered does not match any email address on record for you. |
#Error message There was a problem with the answer to your security question


    @ValidemailandskipAns_Classic @Sprint1
    Scenario Outline: User skips personal answer field / email field .
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        When  User set "<emailid>" to the inputfield "txtemail"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username   | emailid                         | ErrorMsg                                                      |
            | pfulsundar | prajyot.fulsundar@synechron.com | There was a problem with the answer to your security question |

    @Validemailcandans_Classic @Sprint1 @SmokeSuite
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        When  User enter securityAnswer to the inputfield "securityAnswer"
        When  User set "<emailid>" to the inputfield "txtemail"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username    | emailid                    | ErrorMsg                                                                                                                                                     |
            | CLASSICDEV1 | classic.dev1@synechron.com | Password re-set instructions have been send to your registered email .In order to continue , please check you registered email and take appropriate action . |


    @SkipUserid_Classic @Sprint1
    Scenario Outline: User skip username
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        #When  User set "" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | ErrorMsg  |
            | Incorrect |

    @NoSecQuetSetup_Classic @Sprint1
    Scenario Outline: Correct userid no security question setup.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username   | ErrorMsg                                         |
            | pfulsundar | Please contact HelpDesk for further assistance . |
    @InvalidSecQueLockClassic @Sprint1
    Scenario Outline: User enters personal answer incorrect but email is correct.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        When  User set "<securityans>" to the inputfield "securityAnswer"
        When  User set "<emailid>" to the inputfield "txtemail"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username   | securityans | emailid                         | ErrorMsg                                                                          |
            | pfulsundar | pfulsundar  | prajyot.fulsundar@synechron.com | The email address you entered does not match any email address on record for you. |
#Error message There was a problem with the answer to your security question

    @InvalidUserid_Modern @Sprint1
    Scenario Outline: User enter invalid userid
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username                   | ErrorMsg                                                                 |
            | prajyot.fulsur@synhron.com | The email address you entered does not match any email address on record |

    @ValidUserid_Modern2FAConfig @Sprint1
    Scenario Outline: User enter valid userid 2FA config
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that the element "txtforgtOTP" is Present
        Examples:
            | username                        | ErrorMsg                                                                 |
            | prajyot.fulsurdar@synechron.com | The email address you entered does not match any email address on record |

    @ValidUserid_Modern2FANotConfig @Sprint1
    Scenario Outline: User enter valid userid 2FA not config
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "test"
        Examples:
            | username                        | ErrorMsg |
            | prajyot.fulsurdar@synechron.com |          |

    @ValidOtp_Modern 
    Scenario Outline: User enters OTP correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that the element "txtforgtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtforgtOTP"
        When  User click on the element "btnLogin"
        Then  User expect that element "errMsg" contains the text "Password re-set instructions have been send to your registered email .In order to continue , please check you registered email and take appropriate action ."
        Examples:
            | username                        | OTP    | ErrorMsg                                                                                                                                                     |
            | prajyot.fulsundar@synechron.com | 123456 | Password re-set instructions have been send to your registered email .In order to continue , please check you registered email and take appropriate action . |

    @InvalidOtp_Modern @Sprint1 @SmokeSuite
    Scenario Outline: User enters OTP incorrectly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that the element "txtforgtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtforgtOTP"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username                        | OTP    | ErrorMsg                               |
            | prajyot.fulsundar@synechron.com | 123456 | Wrong or Invalid OTP. Please re-enter. |

    @SkipOtp_Modern @Sprint1
    Scenario Outline: User skip OTP.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that the element "txtforgtOTP" is Present
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username                        | OTP    | ErrorMsg                                |
            | prajyot.fulsundar@synechron.com | 123456 | Wrong or Invalid OTP . Please re-enter. |



    @InvalidOtplockvalidation_Modern @Sprint1
    Scenario Outline: User enters OTP incorrectly to verify lock .
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that the element "txtforgtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtforgtOTP"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErorMsg>"
        When  User click on the element "clserrMsg"
        When  User set "<OTP>" to the inputfield "txtforgtOTP"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErroMsg>"
        When  User click on the element "clserrMsg"
        When  User set "<OTP>" to the inputfield "txtforgtOTP"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "Please contact Service Desk to have your password reset."
        Examples:
            | username                        | OTP    | ErrorMsg                                |
            | prajyot.fulsundar@synechron.com | 123456 | Wrong or Invalid OTP . Please re-enter. |



    @SkipUserid_Modern @Sprint1
    Scenario Outline: User skip userid
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        #When  User set "" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | ErrorMsg  |
            | Incorrect |




    @NoSecQuetSetup_Modern @Sprint1
    Scenario Outline: Correct Email no security question setup.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username                        | ErrorMsg                                         |
            | prajyot.fulsundar@synechron.com | Please contact HelpDesk for further assistance . |




