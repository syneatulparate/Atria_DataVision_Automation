Feature: Home Dashboard

    Background: Roles and Permissions
        Given User is on Login page
        When User enters valid "classicdev2" and "drowssap" and click login button

    @Regression @Sprint5 @AT_312_DB_002
    Scenario Outline: Verify Home Dashboard
        When User is on Dashboard page
        Then User expects that "<linkName1>" link is displayed on Dashboard Page
        Then User expects that "<linkName2>" link is displayed on Dashboard Page
        Then User expects that "<linkName3>" link is displayed on Dashboard Page
        Then User expects that "<linkName4>" link is displayed on Dashboard Page
        Then User expects that "<linkName5>" link is displayed on Dashboard Page
        Then User expects that "<linkName6>" link is displayed on Dashboard Page
        Examples:
            | linkName1 | linkName2 | linkName3 | linkName4 | linkName5 | linkName6 |
            | Dashboard | xyz       | Contacts  | Reporting | Resources | Tools     |

    @Regression @Sprint5 @AT_312_DB_003
    Scenario Outline: Verify Resources
        When  User hovers mouse on "<panel>" icon and verify Resource panel display on screen
# Then User expects that "<linkName1>" link is displayed on Resources panel
# Then User expects that "<linkName2>" link is displayed on Resources panel
# Then User expects that "<linkName3>" link is displayed on Resources panel
# Then User expects that "<linkName4>" link is displayed on Resources panel
# Then User expects that "<linkName5>" link is displayed on Resources panel
# Then User expects that "<linkName6>" link is displayed on Resources panel
# Then User expects that "<linkName7>" link is displayed on Resources panel
# Then User expects that "<linkName8>" link is displayed on Resources panel
# Then User expects that "<linkName9>" link is displayed on Resources panel
# Then User expects that "<linkName10>" link is displayed on Resources panel
# Then User expects that "<linkName11>" link is displayed on Resources panel
# Then User expects that "<linkName12>" link is displayed on Resources panel
        # Then User expects that "<linkName13>" link is displayed on Resources panel
        Examples:
            | panel     | linkName1                    | linkName2 | linkName3  | linkName4         | linkName5         | linkName6                  | linkName7       | linkName8  | linkName9  | linkName10    | linkName11                     | linkName12 | linkName13 |
            | Resources | Department & Staff Directory | Updates   | DOL Corner | Product Marketing | Market Commentary | Product Development Center | Training Center | Compliance | Operations | Bonds & MLCDs | FINRA Registration & Licensing | Help       | Reference  |

    @Regression @Sprint5 @AT_312_DB_007
    Scenario Outline: Verify Contacts
        When  User hovers mouse on "<panel>" icon and verify Contacts panel display on screen
        Then  User logout from the account
        Examples:
            | panel    |
            | Contacts |

    @Regression @Sprint5 @AT_312_DB_008
    Scenario Outline: Verify Contacts
        When  User hovers mouse on "<panel>" icon and verify Contacts panel display on screen
# Then User expects that "<linkName1>" link is displayed on Contacts panel
# Then User expects that "<linkName2>" link is displayed on Contacts panel
# Then User expects that "<linkName3>" link is displayed on Contacts panel
# Then User expects that "<linkName4>" link is displayed on Contacts panel
# Then User expects that "<linkName5>" link is displayed on Contacts panel
# Then User expects that "<linkName6" link is displayed on Contacts panel
        # Then User expects that "<linkName7>" link is displayed on Contacts panel
        Examples:
            | panel    | linkName1 | linkName2       | linkName3    | linkName4 | linkName5       | linkName6   | linkName7            |
            | Contacts | Directory | Active Contacts | Quick Access | MY OWNED  | RECENTLY VIEWED | MOST VIEWED | Create a New Contact |

    @Regression @Sprint5 @AT_312_DB_009
    Scenario Outline: Verify Reporting
        When  User hovers mouse on "<panel>" icon and verify Reporting panel display on screen
# Then User expects that "<linkName1>" link is displayed on Reporting panel
# Then User expects that "<linkName2>" link is displayed on Reporting panel
# Then User expects that "<linkName3>" link is displayed on Reporting panel
# Then User expects that "<linkName4>" link is displayed on Reporting panel
        # Then User expects that "<linkName4>" link is displayed on Reporting panel
        Examples:
            | panel     | linkName1 | linkName2 | linkName3  | linkName4      | linkName5    |
            | Reporting | Scheduled | Directory | Repository | Active reports | Quick Access |


    @Regression @Sprint5 @AT_312_DB_011
    Scenario Outline: Verify Tools
        When  User hovers mouse on "<panel>" icon and verify Tools panel display on screen
# Then User expects that "<linkName1>" link is displayed on Tools panel
# Then User expects that "<linkName2>" link is displayed on Tools panel
# Then User expects that "<linkName3>" link is displayed on Tools panel
# Then User expects that "<linkName4>" link is displayed on Tools panel
# Then User expects that "<linkName5>" link is displayed on Tools panel
# Then User expects that "<linkName6>" link is displayed on Tools panel
# Then User expects that "<linkName7>" link is displayed on Tools panel
# Then User expects that "<linkName8>" link is displayed on Tools panel
# Then User expects that "<linkName9>" link is displayed on Tools panel
        # Then User expects that "<linkName10>" link is displayed on Tools panel
        Examples:
            | linkName1  | linkName2     | linkName3                 | linkName4             | linkName5         | linkName6          | linkName7  | linkName8  | linkName9  | linkName10     |
            | SendMyDocs | MPV App Usage | Albridge Wealth Reporting | VA Search Engine Tool | TRADING PLATFORMS | Pershing dashboard | fundVISION | CAM Portal | MuniCenter | Administration |

    @Regression @Sprint5 @AT_312_DB_012
    Scenario Outline:  verify add new button and manage tiles page title
        When User click on Add New button and Verify Manage Your Dashboard Tiles page is present

    @Regression @Sprint5
    Scenario Outline:  verify manage tiles link and title
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present

    @Regression @Sprint5 @AT_312_DB_013
    Scenario Outline:  User adds and cancel tiles to his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        # Then Verify Add New Tiles section count
        Then User can drag and drop "<Tilename>" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count
        When User click on Cancel Button
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is not added to dashboard
        Examples:
            | Tilename |
            | CONTACTS |

    @Regression @Sprint5
    Scenario Outline:  User adds tiles and close  to his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
# Then Verify Add New Tiles section count
        # When Add New Tiles section count is greater than 1
        Then User can drag and drop "<Tilename>" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count
        When User click on Close icon
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is not added to dashboard
        Examples:
            | Tilename |
            | CONTACTS |

    @Regression @Sprint5
    Scenario Outline:  User adds and save tiles to his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        # Then Verify Add New Tiles section count
        Then User can drag and drop "<Tilename>" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count
        When User click on Save Button
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is added to dashboard
        Examples:
            | Tilename |
            | CONTACTS |


    @Regression @Sprint5
    Scenario Outline:  User adds and cancel tiles to his Dashboard
        When User click on Add New button and Verify Manage Your Dashboard Tiles page is present
# Then Verify Add New Tiles section count
        # When Add New Tiles section count is greater than 1
        Then User can drag and drop "<Tilename>" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count
        When User click on Cancel Button
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is not added to dashboard
        Examples:
            | Tilename |
            | CONTACTS |

    @Regression @Sprint5
    Scenario Outline:  User adds tiles and close  to his Dashboard
        When User click on Add New button and Verify Manage Your Dashboard Tiles page is present
        Then Verify Add New Tiles section count
        # When Add New Tiles section count is greater than 1
        Then User can drag and drop "<Tilename>" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count
        When User click on Close icon
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is not added to dashboard
        Examples:
            | Tilename |
            | CONTACTS |

    @Regression @Sprint5
    Scenario Outline:  User adds and save tiles to his Dashboard
        When User click on Add New button and Verify Manage Your Dashboard Tiles page is present
# Then Verify Add New Tiles section count
        # When Add New Tiles section count is greater than 1
        Then User can drag and drop "<Tilename>" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count
        When User click on Save Button
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is added to dashboard
        Examples:
            | Tilename |
            | CONTACTS |

# @Regression @Sprint5
# Scenario Outline:  User remove and caacel tiles to his Dashboard
#     When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
#     # Then Verify Add New Tiles section count
#     Then User can drag and drop "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
#     When User click on Cancel Button
#     Then User Naviagets to Dashboard page and Verify "<Tilename>" is not removed from dashboard
#     Examples:
#         | Tilename |
#         | CONTACTS |

# @Regression @Sprint5
# Scenario Outline:  User remove and close tiles to his Dashboard
#     When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
#     # Then Verify Add New Tiles section count
#     When User can drag and drop "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
#     When User click on Close icon
#     Then User Naviagets to Dashboard page and Verify "<Tilename>" is not removed from dashboard
#     Examples:
#         | Tilename |
#         | CONTACTS |

# @Regression @Sprint5
# Scenario Outline:  User remove and save tiles to his Dashboard
#     When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
#     # Then Verify Add New Tiles section count
#     Then User can drag and drop "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
#     When User click on Save Button
#     Then User Naviagets to Dashboard page and Verify "<Tilename>" is removed from dashboard
#     Examples:
#         | Tilename |
#         | CONTACTS |


    @Regression @Sprint5
    Scenario Outline:  User remove and cancel tiles to his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        # Then Verify Add New Tiles section count
        When User click on remove link of "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
        When User click on Cancel Button
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is not removed from dashboard
        Examples:
            | Tilename |
            | CONTACTS |

    @Regression @Sprint5
    Scenario Outline:  User remove and cancel tiles to his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        # Then Verify Add New Tiles section count
        When User click on remove link of "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
        When User click on Close icon
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is not removed from dashboard
        Examples:
            | Tilename |
            | CONTACTS |


    @Regression @Sprint5
    Scenario Outline:  User remove and save tiles to his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        # Then Verify Add New Tiles section count
        When User click on remove link of "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
        When User click on Save Button
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is removed from dashboard
        Examples:
            | Tilename |
            | CONTACTS |

    @Regression @Sprint5
    Scenario Outline:  User remove and cancel tiles to his Dashboard
        When User click on Add New button and Verify Manage Your Dashboard Tiles page is present
        Then Verify Add New Tiles section count
        When User click on remove link of "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
        When User click on Cancel Button
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is not removed from dashboard
        Examples:
            | Tilename |
            |          |

    @Regression @Sprint5
    Scenario Outline:  User remove and close tiles to his Dashboard
        When User click on Add New button and Verify Manage Your Dashboard Tiles page is present
        Then Verify Add New Tiles section count
        When User click on remove link of "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
        When User click on Close icon
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is not removed from dashboard
        Examples:
            | Tilename |
            |          |

    @Regression @Sprint5
    Scenario Outline:  User remove and save tiles to his Dashboard
        When User click on Add New button and Verify Manage Your Dashboard Tiles page is present
        # Then Verify Add New Tiles section count
        When User click on remove link of "<Tilename>" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count
        When User click on Save Button
        Then User Naviagets to Dashboard page and Verify "<Tilename>" is removed from dashboard
        Examples:
            | Tilename |
            | CONTACTS |

    @Regression @Sprint5
    Scenario Outline: User is viewing the 'information' icon on the tiles in the 'Manage Your Dashboard Tiles' page
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        Then User move to "<Tilename>" tile, hovers on information icon and verify "<information>"
        When User click on Close icon
        Then User logout from the account
        Examples:
            | linkname     | Tilename           | information        |
            | Manage Tiles | CONTACTS           | CONTACTS           |
            | Manage Tiles | CONTACTS TO REVIEW | CONTACTS TO REVIEW |
            | Manage Tiles | UPCOMING BIRTHDAYS | UPCOMING BIRTHDAYS |
# | Manage Tiles | Items to Review        |             |
# | Manage Tiles | Announcements & Events |             |
# | Manage Tiles | Updates                |             |
# | Manage Tiles | Reporting              |             |
# | Manage Tiles | Contacts by Investment |             |
# | Manage Tiles | Monthly GDC Details    |             |
# | Manage Tiles | GDC Totals             |             |

    @Regression @Sprint5
    Scenario Outline: Verify Dashboard
        When  User hovers mouse on "<panel>" icon and verify "<panel>" page display on screen
        Then User expects that Items to Review tiles is displayed on Dashboard panel
        Then User expects that Announcements & Events tiles is displayed on Dashboard panel
        Then User expects that Contacts tiles is displayed on Dashboard panel
        Examples:
            | panel     |
            | Dashboard |

    @Regression @Sprint5
    Scenario: Verify Reset all and save changes in Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        Then User click on ResetAll button and Verify change in Dashboard section on manage Tiles
        When User click on Save Button and user Naviagets to Dashboard page
# Then User expects that Items to Review tiles is displayed on Dashboard panel
# Then User expects that Announcements & Events tiles is displayed on Dashboard panel
# Then User expects that Contacts tiles is displayed on Dashboard panel

    @Regression @Sprint5
    Scenario: Verify resetall and cancel changes  in Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        Then User click on ResetAll button and Verify change in Dashboard section on manage Tiles
        Then User click on Cancel Button and user Naviagets to Dashboard page

    @Regression @Sprint5
    Scenario: Verify  Dashboard resetall and Close functionality
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        Then User click on ResetAll button and Verify change in Dashboard section on manage Tiles
        When User click on Close icon and user Naviagets to Dashboard page

    @Regression @Sprint5
    Scenario Outline: User can scroll through the tile options on the 'Manage Your Dashboard Tiles' page
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        # When Verify Add New Tiles section count greater than 4 tiles
        Then verify RightCarrot icon displayed on Manage Your Dashboard Tiles panel
        When User click on RightCarrot icon
        Then User should displayed new tiles and leftCarrot icon displayed on screen
        Examples:
            | linkname     | Tilename | information |
            | Manage Tiles | Contacts |             |

    @Regression @Sprint5
    Scenario Outline: User expands the view for any tile on the Homepage Dashboard
        When User click on expand icon on a "<Tilename>" tile
        Then Verify "<Tilename>" tile get expanded and contract icon is displayed on screen
        Examples:
            | Tilename |
            | Contacts |

    @Regression @Sprint5
    Scenario Outline: User expands the view for any tile on the Homepage Dashboard
        When User click on expand icon on a "<Tilename>" tile
        Then Verify "<Tilename>" tile get expanded and contract icon is displayed on screen
        When User Click on contract icon
        Then Verify "<Tilename>" tile close the expanded  view and expand icon is displayed on screen
        Examples:
            | Tilename |
            | Contacts |

    @Regression @Sprint5
    Scenario Outline: User expands the view for any tile on the Homepage Dashboard
        When User click on expand icon on a "<Tilename>" tile
        Then Verify "<Tilename>" tile get expanded and contract icon is displayed on screen
        When User enters "<KEY>" key
        Then Verify "<Tilename>" tile close the expanded  view and expand icon is displayed on screen
        Examples:
            | linkname     | Tilename | KEY    |
            | Manage Tiles | Contacts | escape |

    @Regression @Sprint6
    Scenario Outline: User changes the sizes of tiles to 1 on his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        Then User change "<Tilename>" tile width and verify width of tile size "<itemsize>" column
        # Then User logout from the account
        Examples:
            | linkname     | Tilename           | itemsize |
            | Manage Tiles | CONTACTS TO REVIEW | 1        |
# | Manage Tiles | CONTACTS               | 1        |
# | Manage Tiles | UPCOMING BIRTHDAYS     | 1        |
# | Manage Tiles | Items to Review        | 1        |
# | Manage Tiles | Announcements & Events | 1        |
# | Manage Tiles | Updates                | 1        |
# | Manage Tiles | GDC Totals             | 1        |
# | Manage Tiles | Monthly GDC Details    | 1        |
# | Manage Tiles | Reporting              | 1        |
# | Manage Tiles | Contacts by Investment | 1        |

    @Regression @Sprint6 @test786
    Scenario Outline: User changes the sizes of tiles to 2 on his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        Then User change "<Tilename>" tile width and verify width of tile size "<itemsize>" column
        # Then User logout from the account
        Examples:
            | Tilename           | itemsize |
            | CONTACTS TO REVIEW | 2        |
# | CONTACTS               | 2        |
# | UPCOMING BIRTHDAYS     | 2        |
# | Items to Review        | 2        |
# | Announcements & Events | 2        |
# | Updates                | 2        |
# | Reporting              | 2        |
# | Contacts by Investment | 2        |

    @Regression @Sprint6
    Scenario Outline: User changes the sizes of tiles to 3 on his Dashboard
        When User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present
        Then User change "<Tilename>" tile width and verify width of tile size "<itemsize>" column
        # Then User logout from the account
        Examples:
            | Tilename           | itemsize |
            | CONTACTS TO REVIEW | 3        |
# | CONTACTS               | 3        |
# | UPCOMING BIRTHDAYS     | 3        |
# | Items to Review        | 3        |
# | Announcements & Events | 3        |
# | Updates                | 3        |
# | Contacts by Investment | 3        |

    @Regression @Sprint6
    Scenario Outline: User Welcome Message for FA
        When User verify "<firstname>" , "<lastname>" and "<designation>" Dashboard page is present
        Then User verify "<welcomeMessage>"
        Examples:
            | firstname | lastname | designation       | welcomeMessage                      |
            | Classic   | Dev2     | Financial Advisor | Welcome to Your Dashboard, Classic. |

    @Regression @Sprint6
    Scenario Outline: User Welcome Message for PM
        When User verify "<firstname>" , "<lastname>" and "<designation>" Dashboard page is present
        Then User verify "<welcomeMessage>"
        Examples:
            | firstname | lastname | designation | welcomeMessage                      |
            | Classic   | Dev2     |             | Welcome to Your Dashboard, Classic. |

