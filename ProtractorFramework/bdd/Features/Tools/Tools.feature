Feature: Tools

    Background: Tools
        Given User is on Login page
        When  User enters valid "classicdev2" and "drowssap" and click login button
        Then  User hovers mouse on Tools icon and verify Tools panel display on screen

    @Regression @Sprint7
    Scenario Outline: Verify Tools Options
        Then User expects that "<linkName1>" link is displayed on Tools panel
        Then User expects that "<linkName2>" link is displayed on Tools panel
        Then User expects that "<linkName3>" link is displayed on Tools panel
        Then User expects that "<linkName4>" link is displayed on Tools panel
        Then User expects that "<linkName5>" link is displayed on Tools panel
        Then User expects that "<linkName6>" link is displayed on Tools panel
        Then User expects that "<linkName7>" link is displayed on Tools panel
        Then User expects that "<linkName8>" link is displayed on Tools panel
        Then User expects that "<linkName9>" link is displayed on Tools panel
        Examples:
            | linkName1  | linkName2     | linkName3                 | linkName4             | linkName5          | linkName6  | linkName7  | linkName8  | linkName9      |
            | SendMyDocs | MPV App Usage | Albridge Wealth Reporting | VA Search Engine Tool | Pershing dashboard | fundVISION | CAM Portal | MuniCenter | Administration |

    @Regression @Sprint7
    Scenario Outline: Verify SendMyDocs
        When User click on "<linkName>" link
        Then User navigates to SendMyDocs page
        Examples:
            | linkName   |
            | SendMyDocs |

    @Regression @Sprint7
    Scenario Outline: Verify MPV App Usage
        When User click on "<linkName>" link
        Then User navigates to MPV App Usage page
        Examples:
            | linkName      |
            | MPV App Usage |

    @Regression @Sprint7
    Scenario Outline: Verify Albridge Wealth Reporting
        When User click on "<linkName>" link
        Then User navigates to Albridge Wealth Reporting page
        Examples:
            | linkName                  |
            | Albridge Wealth Reporting |


    @Regression @Sprint7
    Scenario Outline: Verify VA Search Engine Tool
        When User click on "<linkName>" link
        Then User navigates to VA Search Engine Tool page
        Examples:
            | linkName              |
            | VA Search Engine Tool |

    @Regression @Sprint7
    Scenario Outline: Verify Pershing Dashboard
        When User click on "<linkName>" link
        Then User navigates to Pershing Dashboard page
        Examples:
            | linkName           |
            | Pershing Dashboard |

    @Regression @Sprint7
    Scenario Outline: Verify fundVISION
        When User click on "<linkName>" link
        Then User navigates to fundVISION page
        Examples:
            | linkName   |
            | fundVISION |

    @Regression @Sprint7
    Scenario Outline: Verify MuniCenter
        When User click on "<linkName>" link
        Then User navigates to MuniCenter page
        Examples:
            | linkName   |
            | MuniCenter |

    @Regression @Sprint7
    Scenario Outline: Verify Cam Portal
        When User click on "<linkName>" link
        Then User navigates to Cam Portal page
        Examples:
            | linkName   |
            | Cam Portal |

    @Regression @Sprint7
    Scenario Outline: Verify Administration
        When User click on "<linkName>" link
        Then User navigates to Administration page
        Examples:
            | linkName       |
            | Administration |

    @Regression @Sprint7
    Scenario Outline: Verify BuildMyProfile
        When User click on "<linkName>" link
        Then User navigates to Active BuildMyProfile™ Forms page
        Examples:
            | linkName       |
            | BuildMyProfile |

    @Regression @Sprint7
    Scenario Outline: Verify Blotter
        When User click on "<linkName>" link
        Then User navigates to Blotter page
        Examples:
            | linkName |
            | Blotter  |
