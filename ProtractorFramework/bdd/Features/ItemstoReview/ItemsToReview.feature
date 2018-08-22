Feature: Items to Review

    Background: Items to Review
# Given User is on Login page
# When User enters valid "classicdev2" and "drowssap" and click login button

    @Regression @Sprint7
    Scenario Outline: Verify Back to Rep issue information
        When  User contact has a "<panel>" issue triggered
        Then  User verify "<Title>", "<Type>" , "<Contact>" and "<scan/UploadDate>" of triggered issue
        When  User click on plus icon of "<panel>" issue
        Then  User verify "<Comment>" comment section of "<panel>" issue
        When  User click on "<Title>" link
        Then  User navigates to DI-11 QR page
        Examples:
            | panel       | Title     | Type      | Contact    | Scan/Upload Date | Comment      |
            | Back to Rep | Scheduled | Directory | Repository | Active reports   | Quick Access |


    @Regression @Sprint7
    Scenario Outline: Verify Pending Pre-App Docs issue information
        When  User contact has a "<panel>" issue triggered
        Then  User verify "<Title>", "<Type>" , "<Contact>" and "<scan/UploadDate>" of triggered issue
        When  User click on "<Title>" link
        Then  User navigates to DI-15 QR page
        Examples:
            | panel                | Title     | Type      | Contact    | Scan/Upload Date | Comment      |
            | Pending Pre-App Docs | Scheduled | Directory | Repository | Active reports   | Quick Access |


    @Regression @Sprint7
    Scenario Outline: Verify Incomplete TCS issue information
        When  User contact has a "<panel>" issue triggered
        Then  User verify "<Title>", "<Type>" , "<Contact>" and "<scan/UploadDate>" of triggered issue
        When  User click on plus icon of "<panel>" issue
        Then  User verify "<Comment>" comment section of "<panel>" issue
        When  User click on "<Title>" link
        Then  User navigates to TC-11 QR page
        Examples:
            | panel          | Title     | Type      | Contact    | Scan/Upload Date | Comment      |
            | Incomplete TCS | Scheduled | Directory | Repository | Active reports   | Quick Access |


    @Regression @Sprint7
    Scenario Outline: Verify Incomplete Forms issue information
        When  User contact has a "<panel>" issue triggered
        Then  User verify "<Title>", "<Type>" , "<Contact>" and "<scan/UploadDate>" of triggered issue
        When  User click on plus icon of "<panel>" issue
        Then  User verify "<Comment>" comment section of "<panel>" issue
        When  User click on "<Title>" link
        Then  User navigates to TW-11 QR page
        Examples:
            | panel            | Title     | Type      | Contact    | Scan/Upload Date | Comment      |
            | Incomplete Forms | Scheduled | Directory | Repository | Active reports   | Quick Access |

    @Regression @Sprint7
    Scenario Outline: User expands the view for any tile on the Homepage Dashboard
        When User click on expand icon on a "<Tilename>" tile
        Then Verify "<Tilename>" tile get expanded and contract icon is displayed on screen
        Examples:
            | Tilename        | information |
            | Items to Review |             |

    @Regression @Sprint7
    Scenario Outline: contract button fuctionality
        When User click on expand icon on a "<Tilename>" tile
        Then Verify "<Tilename>" tile get expanded and contract icon is displayed on screen
        When User clicks on contract button on items to Review tile
        Then Expanded view of items to Review tile gets close and user navigates to dashboard page
        Examples:
            | Tilename        | information |
            | Items to Review |             |

    @Regression @Sprint7
    Scenario Outline: contract functionality by click on any where on page
        When User click on expand icon on a "<Tilename>" tile
        Then Verify "<Tilename>" tile get expanded and contract icon is displayed on screen
        When User Click on outside of expanded view of tiles
        Then Expanded view of items to Review tile gets close and user navigates to dashboard page
        Examples:
            | Tilename        | information |
            | Items to Review |             |

    @Regression @Sprint7 @test12
    Scenario Outline: contract functionality by escape key
# When User click on expand icon on a "<Tilename>" tile
        # Then Verify "<Tilename>" tile get expanded and contract icon is displayed on screen
        When User enters "<KEY>" key
        # Then Expanded view of items to Review tile gets close and user navigates to dashboard page
        Examples:
            | Tilename        | information | KEY    |
            | Items to Review |             | escape |
