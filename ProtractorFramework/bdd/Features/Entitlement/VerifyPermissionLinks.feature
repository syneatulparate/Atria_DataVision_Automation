Feature: Entitlement

    Background: Roles and Permissions
        Given User is on Login page
        When  User log in with "classicdev49" and "drowssap" and navigates to Roles and Permission Page

    @Sprint4
    Scenario Outline: Verify Brokers Dealers link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission           | userID | password | linkName            |
            | CFS Engineering | admin_broker_dealers |        |          | Brokers and Dealers |

    @Sprint4
    Scenario Outline: Verify Brokers Dealers link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission           | userID | password | linkName            |
            | CFS Engineering | admin_broker_dealers |        |          | Brokers and Dealers |

# ---------------
    @Sprint4
    Scenario Outline: Verify Classic Contacts View link by assigning permision
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission                  | userID | password | linkName              |
            | CFS Engineering | admin_classic_contact_views |        |          | Classic Contact Views |

    @Sprint4
    Scenario Outline: Verify Classic Contacts View link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission                  | userID | password | linkName              |
            | CFS Engineering | admin_classic_contact_views |        |          | Classic Contact Views |
#---------------------
    @Sprint4
    Scenario Outline: Verify Classic Users link by assigning permision
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission          | userID | password | linkName      |
            | CFS Engineering | admin_classic_users |        |          | Classic Users |

    @Sprint4
    Scenario Outline: Verify Classic Users link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission          | userID | password | linkName      |
            | CFS Engineering | admin_classic_users |        |          | Classic Users |

#-------------------------
    @Sprint4
    Scenario Outline: Verify CMSES link by assigning permision
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission  | userID | password | linkName |
            | CFS Engineering | admin_cmses |        |          | CMSES    |

    @Sprint4
    Scenario Outline: Verify CMSES link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission  | userID | password | linkName |
            | CFS Engineering | admin_cmses |        |          | CMSES    |
#---------------
    @Sprint4
    Scenario Outline: Verify Admin link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then  User expects that Admin link is displyed on dashboard
        Examples:
            | role            | permission      | userID | password |
            | CFS Engineering | admin_dashboard |        |          |

    @Sprint4
    Scenario Outline: Verify  Admin link on removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then  User expects that Admin link is not displyed
        Examples:
            | role            | permission      | userID | password |
            | CFS Engineering | admin_dashboard |        |          |

#----------
    @Sprint4
    Scenario Outline: Verify Roles and Permission by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission             | userID | password | linkName              |
            | CFS Engineering | admin_role_permissions |        |          | Roles and Permissions |

    @Sprint4
    Scenario Outline: Verify Roles and Permission by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission             | userID | password | linkName              |
            | CFS Engineering | admin_role_permissions |        |          | Roles and Permissions |
# ---------------
    @Sprint4
    Scenario Outline: Verify SendMyDoc Scans Saves link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission       | userID | password | linkName          |
            | CFS Engineering | admin_scan_saves |        |          | Send MyDocs Saves |

    @Sprint4
    Scenario Outline: Verify SendMyDoc Scans Saves link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission       | userID | password | linkName          |
            | CFS Engineering | admin_scan_saves |        |          | Send MyDocs Saves |

# ------
    @Sprint4
    Scenario Outline: Verify SendMyDoc Scanners link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission     | userID | password | linkName             |
            | CFS Engineering | admin_scanners |        |          | Send My Doc Scanners |

    @Sprint4
    Scenario Outline: Verify SendMyDoc Scanners link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission     | userID | password | linkName             |
            | CFS Engineering | admin_scanners |        |          | Send My Doc Scanners |

    #--------------
    Scenario Outline: Verify SendMyDoc Scans link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission  | userID | password | linkName      |
            | CFS Engineering | admin_scans |        |          | Send My Scans |

    @Sprint4
    Scenario Outline: Verify SendMyDoc Scans link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission  | userID | password | linkName      |
            | CFS Engineering | admin_scans |        |          | Send My Scans |
    # ----------------
    Scenario Outline: Verify User Sessions link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission          | userID | password | linkName      |
            | CFS Engineering | admin_user_sessions |        |          | User Sessions |

    @Sprint4
    Scenario Outline: Verify User Sessions link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission          | userID | password | linkName      |
            | CFS Engineering | admin_user_sessions |        |          | User Sessions |
    #---------------
    Scenario Outline: Verify Users link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission  | userID | password | linkName |
            | CFS Engineering | admin_users |        |          | Users    |

    @Sprint4
    Scenario Outline: Verify Users link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission  | userID | password | linkName |
            | CFS Engineering | admin_users |        |          | Users    |
    #----------------
    Scenario Outline: Verify Manage User Link & Active Lockouts link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName1>" link is displayed on Admin page
        Then User expects that "<linkName2>" link is displayed on Admin page
        Examples:
            | role            | permission | userID | password | linkName1   | linkName2       |
            | CFS Engineering | admin_mpv  |        |          | Manage User | Active Lockouts |

    @Sprint4
    Scenario Outline: Verify  Manage User Link & Active Lockouts link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName1>" link is not displayed
        Then User expects that "<linkName2>" link is not displayed
        Examples:
            | role            | permission | userID | password | linkName1   | linkName2       |
            | CFS Engineering | admin_mpv  |        |          | Manage User | Active Lockouts |
    # -----------------
    Scenario Outline: Verify Workgroups link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role            | permission       | userID | password | linkName   |
            | CFS Engineering | admin_workgroups |        |          | Workgroups |

    @Sprint4
    Scenario Outline: Verify Workgroups link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<userID>" and "<password>" and click in login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission       | userID | password | linkName   |
            | CFS Engineering | admin_workgroups |        |          | Workgroups |
# --------------------
    @Sprint41
    Scenario Outline: Verify Workgroups link by removing permission
        # When  User clicks on details of "<role>" role
        Then User expects that "<linkName>" link is displayed on Admin page
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role            | permission       | userID | password | linkName |
            | CFS Engineering | admin_workgroups |        |          | CMSES    |