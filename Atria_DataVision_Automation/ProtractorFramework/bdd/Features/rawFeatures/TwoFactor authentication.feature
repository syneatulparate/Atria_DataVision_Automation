Feature: Twofactor authentiction  fuctionality verification for Mordern User

    @TwofactorAuthenticateModernEmail @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "changemethod" is Present
        When  User click on the button "changemethod"
        When  User select "<Dropdown>" from the dropdown "lstDropdown"
        When  User click on the button "btnselect"
        When  User put "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username                        | password | OTP    | Dropdown |
            | prajyot.fulsundar@synechron.com | drowssap | 123456 | Email    |

    @TwofactorAuthenticateModernEmailRemember @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "changemethod" is Present
        When  User click on the button "changemethod"
        When  User select "<Dropdown>" from the dropdown "lstDropdown"
        When  User click on the button "btnselect"
        When  User put "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLoginRem"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username                        | password | OTP    | Dropdown |
            | prajyot.fulsundar@synechron.com | drowssap | 123456 | Email    |


    @TwofactorAuthenticateModernApp @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "changemethod" is Present
        When  User click on the button "changemethod"
        When  User select "<Dropdown>" from the dropdown "lstDropdown"
        When  User click on the button "btnselect"
        When  User put "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username                        | password | OTP    | Dropdown |
            | prajyot.fulsundar@synechron.com | drowssap | 123456 | App      |


    @TwofactorAuthenticateModernAppRemb @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "changemethod" is Present
        When  User click on the button "changemethod"
        When  User select "<Dropdown>" from the dropdown "lstDropdown"
        When  User click on the button "btnselect"
        When  User put "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLoginRem"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username                        | password | OTP    | Dropdown |
            | prajyot.fulsundar@synechron.com | drowssap | 123456 | App      |

    @VerifyTwofactorAuthenticateModernEmail @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "changemethod" is Present
        When  User put "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username   | password | OTP    |
            | pfulsundar | drowssap | 123456 |

    @VerifyTwofactorAuthenticateModernEmailRemember @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "changemethod" is Present
        When  User put "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLoginRem"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username   | password | OTP    |
            | pfulsundar | drowssap | 123456 |


    @VerifyTwofactorAuthenticateModernApp @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "changemethod" is Present
        When  User put "<OTP>" to the inputfield "txtOTP"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username   | password | OTP    |
            | pfulsundar | drowssap | 123456 |


    @VerifyTwofactorAuthenticateModernAppRemb @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that the element "changemethod" is Present
        When  User put "<OPT>" to the inputfield "txtOTP"
        When  User click on the element "btnLoginRem"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username   | password | OTP    |
            | pfulsundar | drowssap | 123456 |

    @VerifyTwofactorAuthenticateModernEmailsetup @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        Then  User expect that the element "You have not set up Two Factor Authentication for your dataVISION account. Two Factor Authentication helps protect your account against fraudulent usage, and helps you gain access to your account if you ever forget your password. We strongly encourage you to set up two factor authentication now" is Present
        When  User click on the button "btnSetupTwoFactorAuthentication"
        When  User click on the element "btnchgemail"
        Then  User expect that the element "txtemail" is Present
        When  User click on the element "btnsendcode"
        Then  User expect that the element "txtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtOTP"
        When  user click on the button "btnVerifycode"
        Then  User expect that element "errMsg" contains the text "<SuccessMsg>"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username   | password | OTP    | SuccessMsg                            |
            | pfulsundar | drowssap | 123456 | Email 2FA method successfully set up! |


    @VerifyTwofactorAuthenticateModernAppsetup @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        Then  User expect that the element "You have not set up Two Factor Authentication for your dataVISION account. Two Factor Authentication helps protect your account against fraudulent usage, and helps you gain access to your account if you ever forget your password. We strongly encourage you to set up two factor authentication now" is Present
        When  User click on the button "btnSetupTwoFactorAuthentication"
        When  User click on the element "btnSetup"
        Then  User expect that the element "eleBarcode" is Present
        Then  User expect that the element "txtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtOTP"
        When  user click on the button "btnVerifycode"
        Then  User expect that element "errMsg" contains the text "<SuccessMsg>"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username   | password | OTP    | SuccessMsg                                        |
            | pfulsundar | drowssap | 123456 | Authenticator App 2FA method successfully set up! |

    @VerifyTwofactorAuthenticateModernSMSetup @Sprint1
    Scenario Outline: User enters both personal answer and email correctly.
        Given User go to DV3 url "http://172.20.235.129:3000/"
        When  User set "<username>" to the inputfield "txtUserName"
        When  User put "<password>" to the inputfield "txtPassword"
        When  User click on the element "btnLogin"
        Then  User expect that element "headerMsg" contains the text "Welcome to dataVISION!"
        Then  User expect that the title is "Dashboard – dataVISION"
        Then  User expect that the element "You have not set up Two Factor Authentication for your dataVISION account. Two Factor Authentication helps protect your account against fraudulent usage, and helps you gain access to your account if you ever forget your password. We strongly encourage you to set up two factor authentication now" is Present
        When  User click on the button "btnSetupTwoFactorAuthentication"
        When  User click on the element "btnSetup"
        Then  User expect that the element "txtPhoneNumber" is Present
        When  User set "<PhoneNumber>" to the inputfield "txtPhoneNumber"
        When  User click on the element "btnsendcode"
        Then  User expect that the element "txtOTP" is Present
        When  User set "<OTP>" to the inputfield "txtOTP"
        When  user click on the button "btnVerifycode"
        Then  User expect that element "errMsg" contains the text "<SuccessMsg>"
        When  User click on the button "btnLogout"
        Then  User expect that the title is "Log In – dataVISION"
        Examples:
            | username   | password | OTP    | SuccessMsg                                        | PhoneNumber |
            | pfulsundar | drowssap | 123456 | Authenticator App 2FA method successfully set up! | 1234567890  |