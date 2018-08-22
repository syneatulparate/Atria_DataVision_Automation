Feature: Contacts to review tile

    Background: Roles and Permissions
        Given User is on Login page
        When User enters valid "classicdev2" and "drowssap" and click login button

    @Regression @Sprint5
    Scenario: Contacts to review tile -Email icon for My Owned Contacts
        When  User selects My Owned on contacts to review tile
        When  User hovers mouse on message Icon for user on contacts to review tile
        Then  User expect that primary email of the user is displayed on contacts to review tile
        When  User hovers mouse on phone Icon for user on contacts to review tile
        Then  User expect that contact number of the user is displayed on contacts to review tile

    @Regression @Sprint5
    Scenario: Contacts to review tile -Email icon for All Contacts
        When User selects All Contacts on contacts to review tile
        When  User hovers mouse on message Icon for user on contacts to review tile
        Then  User expect that primary email of the user is displayed on contacts to review tile
        When  User hovers mouse on phone Icon for user on contacts to review tile
        Then  User expect that contact number of the user is displayed on contacts to review tile

    @Regression @Sprint5
    Scenario Outline: My Owned Contacts - Contacts to review tile
        When User selects My Owned on contacts to review tile
        Then User expect that system displays contacts for "<viewCategory>" on contacts to review tile
        Examples:
            | viewCategory |
            | My Owned     |

    @Regression @Sprint5
    Scenario Outline: All Contacts - Contacts to review tile
        When User selects All Contacts on contacts to review tile
        Then User expect that system displays contacts for "<viewCategory>" on contacts to review tile
        Examples:
            | viewCategory |
            | All contacts |

    @Regression @Sprint5
    Scenario: Verify Expand Icon and contact directory link
        Then User expects that Expand icon and contact directory link are displayed on contacts to review tile

    @Regression @Sprint5
    Scenario: Verify History Events icon in Contacts to review tile
        When  User hovers mouse on history event Icon for user on contacts to review tile
        Then  User expects that history notes popup box is displayed on contacts to review tile

#    @Regression @Sprint5
#     Scenario Outline: Verify Expanded view
#         When User clicks on the expand icon on contacts to review tile
#         Then User expect that contraction button is displayed on contacts to review tile

#    @Regression @Sprint5
#     Scenario Outline: Close Expanded view - Contraction button
#         When User clicks on the expand icon on contacts to review tile
#         Then User expect that contraction button is displayed on contacts to review tile
#         When User clicks on contraction button on contacts to review tile
#         Then User expects that tile is closed and dashboard is displayed

#    @Regression @Sprint5
#     Scenario Outline: Close Expanded view - Clicking outside
#         When User clicks on the expand icon on contacts to review tile
#         Then User expect that contraction button is displayed on contacts to review tile
#         When User clicks outside of tile
#         Then User expects that tile is closed and dashboard is displayed

#    @Regression @Sprint5
#     Scenario Outline: Close Expanded view - Esc Button
#         When User clicks on the expand icon on contacts to review tile
#         Then User expect that contraction button is displayed on contacts to review tile
#         When User taps on Esc button on keyboard
#         Then User expects that tile is closed and dashboard is displayed


#     @Regression @Sprint5
# #    Not in scope
#     Scenario Outline: contacts to review tile Tile Icon - Comment
#         When  User hovers mouse on comments Icon for user on contacts to review tile
#         Then  User expect that number of "<comments>" the user is displayed on contacts to review tile
#         Examples:
#             | userName | numberOfComments |
#             |          |                  |




