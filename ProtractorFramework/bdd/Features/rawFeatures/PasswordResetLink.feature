Feature: Password Reset fuctionality verification for Classic and Mordern User

    @PasswordReset_Classic @Sprint1
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
            | username   | emailid                         | ErrorMsg                                                                                                                                                     |
            | pfulsundar | prajyot.fulsundar@synechron.com | Password re-set instructions have been send to your registered email .In order to continue , please check you registered email and take appropriate action . |


    @PasswordReset_Modern @Sprint1
    Scenario Outline: User enters OTP correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User click on the link "lnkforgotpass"
        Then  User expect that the title is "Log In – dataVISION"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User click on the button "btnLogin"
        Then  User expect that the element "txtforgtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtforgtOTP"
        When  User click on the element "btnLogin"
        Then  User expect that element "errMsg" contains the text "<ErrorMsg>"
        Examples:
            | username                        | OTP    | ErrorMsg                                                                                                                                                     |
            | prajyot.fulsundar@synechron.com | 123456 | Password re-set instructions have been send to your registered email .In order to continue , please check you registered email and take appropriate action . |