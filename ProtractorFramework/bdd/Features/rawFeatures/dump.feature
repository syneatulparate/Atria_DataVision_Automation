Feature: User Validation Login for Classic and Mordern User
    @dumpPOM
    Scenario Outline: dV user with UserValidatedLogin ("UVL") < 1 month old, and security questions defined, logs into the system using Classic
        #Given I go to DV3 url "http://172.20.235.129:3000/"
        Given I go to DV3 Application
        When  User enters valid "<username>" and "<password>" and click login button
        When  User enter securityAnswer to the securityAnswer input field
        Then  User expects that header message contains the text "Log In – dataVISION"
        When  User changes method type to "<methodType>"
        Examples:
            | username    | password | methodType |
            | CLASSICDEV3 | drowssap | Email      |
