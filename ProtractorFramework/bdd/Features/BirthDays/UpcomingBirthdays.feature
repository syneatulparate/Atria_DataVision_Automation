Feature: Upcoming birthdays

    Background: Roles and Permissions
        Given User is on Login page
        When User enters valid "classicdev2" and "drowssap" and click login button

    @Regression @Sprint5
    Scenario: Upcoming Birthdays -Email Icon for My Owned Contacts
        When  User selects My Owned on upcoming bithdays tile
        When  User hovers mouse on email Icon for user on upcoming bithdays tile
        Then  User expect that primary email of the user is displayed on upcoming bithdays tile
        When  User hovers mouse on phone Icon for user on upcoming bithdays tile
        Then  User expect that contact number of the user is displayed on upcoming bithdays tile

    @Regression @Sprint5
    Scenario: Upcoming Birthdays -Email icon for All Contacts
        When User selects All Contacts on upcoming bithdays tile
        When  User hovers mouse on email Icon for user on upcoming bithdays tile
        Then  User expect that primary email of the user is displayed on upcoming bithdays tile
        When  User hovers mouse on phone Icon for user on upcoming bithdays tile
        Then  User expect that contact number of the user is displayed on upcoming bithdays tile

    @Regression @Sprint5
    Scenario Outline: My Owned Contacts Birthdays tile
        When User selects My Owned on upcoming bithdays tile
        Then User expect that system displays contacts for "<viewCategory>" on upcoming birthday tile
        Examples:
            | viewCategory |
            | My Owned     |

    @Regression @Sprint5
    Scenario Outline: All Contacts Birthdays tile
        When User selects All Contacts on upcoming bithdays tile
        Then User expect that system displays contacts for "<viewCategory>" on upcoming birthday tile
        Examples:
            | viewCategory |
            | All contacts |

    @Regression @Sprint5
    Scenario Outline: View birthdays by dropdown
        When User clicks on View birthdays by dropdown
        Then User expects that Today,Next Week and Next Two Week options are displayed
        Examples:
            | userName | phoneNumber |
            |          |             |

    @Regression @Sprint5
    Scenario Outline: My Owned contacts with Birthday today
        When User selects My Owned on upcoming bithdays tile
        When User clicks on View birthdays by dropdown
        When User selects "Today" from the view by dropdown
        Then User expect that system displays contacts for "<viewCategory>" on upcoming birthday tile
        Examples:
            | viewCategory |
            | My Owned     |

    @Regression @Sprint5
    Scenario Outline: My Owned contacts with Birthday next week
        When User selects My Owned on upcoming bithdays tile
        When User clicks on View birthdays by dropdown
        When User selects "Next week" from the view by dropdown
        Then User expect that system displays contacts for "<viewCategory>" on upcoming birthday tile
        Examples:
            | viewCategory |
            | My Owned     |

    @Regression @Sprint5
    Scenario Outline: My Owned contacts with Birthday next two week
        When User selects My Owned on upcoming bithdays tile
        When User clicks on View birthdays by dropdown
        When User selects "Next week" from the view by dropdown
        Then User expect that system displays contacts for "<viewCategory>" on upcoming birthday tile
        Examples:
            | viewCategory |
            | My Owned     |

    @Regression @Sprint5
    Scenario Outline: All contacts contacts with Birthday today
        When User selects All Contacts on upcoming bithdays tile
        When User clicks on View birthdays by dropdown
        When User selects "Today" from the view by dropdown
        Then User expect that system displays contacts for "<viewCategory>" on upcoming birthday tile
        Examples:
            | viewCategory |
            | All contacts |

    @Regression @Sprint5
    Scenario Outline: My Owned contacts with Birthday next week
        When User selects All Contacts on upcoming bithdays tile
        When User clicks on View birthdays by dropdown
        When User selects "Next week" from the view by dropdown
        Then User expect that system displays contacts for "<viewCategory>" on upcoming birthday tile
        Examples:
            | viewCategory |
            | All contacts |

    @Regression @Sprint5
    Scenario Outline: My Owned contacts with Birthday next two week
        When User selects All Contacts on upcoming bithdays tile
        When User clicks on View birthdays by dropdown
        When User selects "Next week" from the view by dropdown
        Then User expect that system displays contacts for "<viewCategory>" on upcoming birthday tile
        Examples:
            | viewCategory |
            | All contacts |

    @Regression @Sprint5 @test1
    Scenario: Verify Expand Icon and contact directory link
        Then User expects that Expand icon and contact directory link are displayed

    @Regression @Sprint5
    Scenario: Verify History Events icon in Contacts to review tile
        When  User hovers mouse on history event Icon for user on upcoming birthdays tile
        Then  User expects that history notes popup box is displayed on upcoming birthdays tile

#    @Regression @Sprint5
#     Scenario Outline: Verify Expanded view
#         When User clicks on the expand icon on upcoming bithdays tile
#         Then User expect that contraction button is displayed on upcoming bithdays tile

#    @Regression @Sprint5
#     Scenario Outline: Close Expanded view - Contraction button
#         When User clicks on the expand icon on upcoming bithdays tile
#         Then User expect that contraction button is displayed on upcoming bithdays tile
#         When User clicks on contraction button on upcoming bithdays tile
#         Then User expects that tile is closed and dashboard is displayed

#    @Regression @Sprint5
#     Scenario Outline: Close Expanded view - Clicking outside
#         When User clicks on the expand icon on upcoming bithdays tile
#         Then User expect that contraction button is displayed on upcoming bithdays tile
#         When User clicks outside of tile
#         Then User expects that tile is closed and dashboard is displayed

#    @Regression @Sprint5
#     Scenario Outline: Close Expanded view - Esc Button
#         When User clicks on the expand icon on upcoming bithdays tile
#         Then User expect that contraction button is displayed on upcoming bithdays tile
#         When User taps on Esc button on keyboard
#         Then User expects that tile is closed and dashboard is displayed

#     @Regression @Sprint5
# #    Not in scope
#     Scenario Outline: Upcoming Birthdays Tile Icon - Comment
#         When  User hovers mouse on comments Icon for user on upcoming bithdays tile
#         Then  User expect that number of "<comments>" the user is displayed on upcoming bithdays tile
#         Examples:
#             | userName | numberOfComments |
#             |          |                  |




