Feature:User Settings
    Background: Roles and Permissions
        Given User is on Login page
        When  User log in with "classicdev48" and "drowssap" and navigates to Roles and Permission Page

    @Sprint4  @test45
    Scenario Outline: Verify user settings page
        Then User expects that "<linkName>" link is displayed under the Tools Menu
        When User clicks on Settings
        Then User expects that "<expectedScreen>" is displayed

        Examples:
            | linkName | expectedScreen |
            | Settings |  User Settings |              