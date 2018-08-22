Feature: Contacts

    Background: Roles and Permissions
        Given User is on Login page
        When User enters valid "<userName>" and "<password>" and click login button

    @Regression @Sprint5
    Scenario Outline: Contacts Tile Icon -Message
        When  User hovers mouse on message Icon for "userName" on Contacts tile
        Then  User expect that "<contact>" primary email of the user is displayed on Contacts tile
        Examples:
            | userName | primaryEmailId |
            |          |                |

    @Regression @Sprint5
    Scenario Outline: Contacts Tile Icon - Phone
        When  User hovers mouse on phone Icon for "<userName>" on Contacts tile
        Then  User expect that "<contacts>" number of the user is displayed on Contacts tile
        Examples:
            | userName | phoneNumber |
            |          |             |

    @Regression @Sprint5
    Scenario Outline: Contacts Tile Icon - Comment
        When  User hovers mouse on comments Icon for "<userName>" on Contacts tile
        Then  User expect that number of "<comments>" the user is displayed on Contacts tile
        Examples:
            | userName | comments |
            |          |          |

    @Regression @Sprint5
    Scenario Outline: Go to Contacts link - Last viewed
        When  User selects "<contactOption>" from the dropdown on Contacts tile
        When  User clicks on Go to Contacts link
        Then  User expect "<contactOption>" contact screen is displayed on Contacts tile
        Examples:
            | contactOption |
            | Last Viewed   |

    @Regression @Sprint5
    Scenario Outline: Go to Contacts link -Most viewed
        When  User selects "<contactOption>" from the dropdown
        When  User clicks on Go to Contacts link
        Then  User expect "<contactOption>" contact screen is displayed on Contacts tile
        Examples:
            | contactOption |
            | Most Viewed   |

    @Regression @Sprint5
    Scenario Outline: Go to Contacts link - bY investment
        When  User selects "<contactOption>" from the dropdown
        When  User clicks on Go to Contacts link
        Then  User expect "<contactOption>" contact screen is displayed on Contacts tile
        Examples:
            | contactOption |
            | By Investment |

    @Regression @Sprint5
    Scenario Outline: Verify Expanded view
        When User clicks on the expand icon on Contacts tile
        Then User expect that contraction button is displayed on Contacts tile

    @Regression @Sprint5
    Scenario Outline: Close Expanded view - Contraction button
        When User clicks on the expand icon on Contacts tile
        Then User expect that contraction button is displayed on Contacts tile
        When User clicks on contraction button on Contacts tile
        Then User expects that tile is closed and dashboard is displayed

    @Regression @Sprint5
    Scenario Outline: Close Expanded view - Clicking outside
        When User clicks on the expand icon on Contacts tile
        Then User expect that contraction button is displayed on Contacts tile
        When User clicks outside of tile
        Then User expects that tile is closed and dashboard is displayed

    @Regression @Sprint5
    Scenario Outline: Close Expanded view - Esc Button
        When User clicks on the expand icon on Contacts tile
        Then User expect that contraction button is displayed on Contacts tile
        When User taps on Esc button on keyboard
        Then User expects that tile is closed and dashboard is displayed











