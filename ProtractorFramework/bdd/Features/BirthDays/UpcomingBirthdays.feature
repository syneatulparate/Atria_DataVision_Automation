Feature: Upcoming birthdays

    Background: Roles and Permissions
        Given User is on Login page
        When User enters valid "<userName>" and "<password>" and click login button

    @Sprint5
    Scenario Outline: Upcoming Birthdays -Message
        When  User hovers mouse on message Icon for "<userName>" on upcoming bithdays tile
        Then  User expect that "<contact>" primary email of the user is displayed on upcoming bithdays tile
        Examples:
            | userName | primaryEmailId |
            |          |                |

    @Sprint5
    Scenario Outline: Upcoming Birthdays Tile Icon - Phone
        When  User hovers mouse on phone Icon for "<userName>" on upcoming bithdays tile
        Then  User expect that "<contacts>" number of the user is displayed on upcoming bithdays tile
        Examples:
            | userName | phoneNumber |
            |          |             |

    @Sprint5
    Scenario Outline: Upcoming Birthdays Tile Icon - Comment
        When  User hovers mouse on comments Icon for "<userName>" on upcoming bithdays tile
        Then  User expect that number of "<comments>" the user is displayed on upcoming bithdays tile
        Examples:
            | userName | numberOfComments |
            |          |                  |

    @Sprint5
    Scenario Outline: My Owned Contacts Birthdays tile
        When User clicks on the My Owned on upcoming bithdays tile
        Then User expect that system displays his own contacts, and contacts of people he assists on upcoming birthdays tile

    @Sprint5
    Scenario Outline: All Contacts Birthdays tile
        When User clicks on the All Contacts on upcoming bithdays tile
        Then User expect that system displays all Public, Protected and Private contacts within the user's workgroup

    @Sprint5
    Scenario Outline: View birthdays by dropdown
        When User clicks on View birthdays by dropdown
        Then User expects that Today,Next Week and Next Two Week options are displayed

    # @Sprint5
    # Scenario Outline: Go to Contact Directory - Last viewed
    #     When  User clicks on Go to Contact Directory link
    #     Then  User expect "<contactOption>" contact screen is displayed on upcoming bithdays tile
    #     Examples:
    #         | contactOption |
    #         | Last Viewed   |

    @Sprint5
    Scenario Outline: Verify Expanded view
        When User clicks on the expand icon on upcoming bithdays tile
        Then User expect that contraction button is displayed on upcoming bithdays tile

    @Sprint5
    Scenario Outline: Close Expanded view - Contraction button
        When User clicks on the expand icon on upcoming bithdays tile
        Then User expect that contraction button is displayed on upcoming bithdays tile
        When User clicks on contraction button on upcoming bithdays tile
        Then User expects that tile is closed and dashboard is displayed

    @Sprint5
    Scenario Outline: Close Expanded view - Clicking outside
        When User clicks on the expand icon on upcoming bithdays tile
        Then User expect that contraction button is displayed on upcoming bithdays tile
        When User clicks outside of tile
        Then User expects that tile is closed and dashboard is displayed

    @Sprint5
    Scenario Outline: Close Expanded view - Esc Button
        When User clicks on the expand icon on upcoming bithdays tile
        Then User expect that contraction button is displayed on upcoming bithdays tile
        When User taps on Esc button on keyboard
        Then User expects that tile is closed and dashboard is displayed 



