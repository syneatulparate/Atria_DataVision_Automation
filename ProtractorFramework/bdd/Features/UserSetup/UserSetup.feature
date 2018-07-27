Feature:User Setup Page
    Background: Roles and Permissions
        Given User is on Login page
        When  User log in with "classicdev10" and "drowssap" and navigates to Dashboard Page

    @Sprint4  @test456
    Scenario Outline: Verify user setup page

        Then User expects that "<linkName>" link is displayed under the Tools Menu
        When User clicks on User Setup
        Then User expects that "<expectedScreen>" is displayed

        Examples:
            | linkName   | expectedScreen         |
            | User Setup | User Setup/Information |