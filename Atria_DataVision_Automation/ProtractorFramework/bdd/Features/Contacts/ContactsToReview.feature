Feature: Contacts

    Background: Roles and Permissions
        Given User is on Login page
        When User enters valid "<userName>" and "<password>" and click login button
    
    @Sprint5
    Scenario Outline: Contacts to Review Tile Icon -Message
        When  User hovers mouse on message Icon for "userName"
        Then  User expect that "<contact>" primary email of the user is displayed
        Examples:
            | userName | primaryEmailId |
            |          |                |

    @Sprint5
    Scenario Outline: Contacts to Review Tile Icon - Phone
        When  User hovers mouse on phone Icon for "userName"
        Then  User expect that "<contact>" primary email of the user is displayed
        Examples:
            | userName | phoneNumber |
            |          |             |

    @Sprint5
    Scenario Outline: Contacts to Review Tile Icon - Comment
        When  User hovers mouse on comments Icon for "userName"
        Then  User expect that "<contacts>" number of the user is displayed
        Examples:
            | userName | numberOfComments |
            |          |                  |

    @Sprint5
    Scenario Outline: Go to Contacts link - Last viewed
        When  User clicks on Go to Contacts link
        Then  User expect "<contactOption>" contact screen is displayed
        Examples:
            | contactOption |
            | Last Viewed   |

    @Sprint5
    Scenario Outline: Verify Expanded view 
        When User clicks on the expand icon  
        Then User expect that contraction button is displayed

    @Sprint5
    Scenario Outline: Close Expanded view - Contraction button
        When User clicks on the expand icon  
        Then User expect that contraction button is displayed
        When User clicks on contraction button
        Then User expects that tile is closed and dashboard is displayed
    
    @Sprint5
    Scenario Outline: Close Expanded view - Clicking outside
        When User clicks on the expand icon  
        Then User expect that contraction button is displayed
        When User clicks outside of tile 
        Then User expects that tile is closed and dashboard is displayed

    @Sprint5
    Scenario Outline: Close Expanded view - Esc Button
        When User clicks on the expand icon  
        Then User expect that contraction button is displayed
        When User taps on Esc button on keyboard 
        Then User expects that tile is closed and dashboard is displayed

    @Sprint5
    Scenario Outline: My Owned Contacts
        # When User clicks on the My Owned 
        # Then User expect that system displays his own contacts, and contacts of people he assists

    @Sprint5
    Scenario Outline: All Contacts
        # When User clicks on the All Contacts
        # Then User expect that system displays all Public, Protected and Private contacts within the user's workgroup
       