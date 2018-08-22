Feature: Resources

    Background: Resources
        Given User is on Login page
        When  User enters valid "classicdev48" and "drowssap" and click login button
        Then  User hovers mouse on Resource icon and verify Resource panel display on screen


    @Regression @Sprint7
    Scenario Outline: Verify Resource Centre Options
        Then User expects that "<linkName1>" link is displayed on Resources panel
        Then User expects that "<linkName2>" link is displayed on Resources panel
        Then User expects that "<linkName3>" link is displayed on Resources panel
        Then User expects that "<linkName4>" link is displayed on Resources panel
        Then User expects that "<linkName5>" link is displayed on Resources panel
        Then User expects that "<linkName6>" link is displayed on Resources panel
        Then User expects that "<linkName7>" link is displayed on Resources panel
        Then User expects that "<linkName8>" link is displayed on Resources panel
        Then User expects that "<linkName9>" link is displayed on Resources panel
        Then User expects that "<linkName10>" link is displayed on Resources panel
        Then User expects that "<linkName11>" link is displayed on Resources panel
        Then User expects that "<linkName12>" link is displayed on Resources panel
        Then User expects that "<linkName13>" link is displayed on Resources panel
        Examples:
            | linkName1                    | linkName2 | linkName3  | linkName4         | linkName5         | linkName6                  | linkName7       | linkName8  | linkName9  | linkName10    | linkName11                     | linkName12 | linkName13 |
            | Department & Staff Directory | Updates   | DOL Corner | Product Marketing | Market Commentary | Product Development Center | Training Center | Compliance | Operations | Bonds & MLCDs | FINRA Registration & Licensing | Help       | Reference  |

    @Regression @Sprint7
    Scenario Outline: Verify Department & Staff Directory
        When User click on "<linkName>" link
        Then User navigates to Department & Staff Directory page
        Examples:
            | linkName                     |
            | Department & Staff Directory |

    @Regression @Sprint7
    Scenario Outline: Verify Updates
        When User click on "<linkName>" link
        Then User navigates to Updates page
        Examples:
            | linkName |
            | Updates  |

    @Regression @Sprint7
    Scenario Outline: Verify DOL Corner
        When User click on "<linkName>" link
        Then User navigates to DOL Corner page
        Examples:
            | linkName   |
            | DOL Corner |

    @Regression @Sprint7
    Scenario Outline: Verify Product Marketing
        When User click on "<linkName>" link
        Then User navigates to Product Marketing page
        Examples:
            | linkName          |
            | Product Marketing |

    @Regression @Sprint7
    Scenario Outline: Verify Program Development Center
        When User click on "<linkName>" link
        Then User navigates to Program Development Center page
        Examples:
            | linkName                   |
            | Program Development Center |

    @Regression @Sprint7
    Scenario Outline: Verify Market Commentary
        When User click on "<linkName>" link
        Then User navigates to Market Commentary page
        Examples:
            | linkName          |
            | Market Commentary |

    @Regression @Sprint7
    Scenario Outline: Verify Training Center
        When User click on "<linkName>" link
        Then User navigates to Training Center page
        Examples:
            | linkName        |
            | Training Center |

    @Regression @Sprint7
    Scenario Outline: Verify Compliance
        When User click on "<linkName>" link
        Then User navigates to Compliance page
        Examples:
            | linkName   |
            | Compliance |

    @Regression @Sprint7
    Scenario Outline: Verify Operations
        When User click on "<linkName>" link
        Then User navigates to Operations page
        Examples:
            | linkName   |
            | Operations |

    @Regression @Sprint7
    Scenario Outline: Verify Bonds
        When User click on "<linkName>" link
        Then User navigates to Bonds page
        Examples:
            | linkName |
            | Bonds    |

    @Regression @Sprint7
    Scenario Outline: Verify FINRA Registration & Licensing
        When User click on "<linkName>" link
        Then User navigates to FINRA Registration & Licensing page
        Examples:
            | linkName                       |
            | FINRA Registration & Licensing |

    @Regression @Sprint7
    Scenario Outline: Verify Reference
        When User click on "<linkName>" link
        Then User navigates to Reference page
        Examples:
            | linkName  |
            | Reference |