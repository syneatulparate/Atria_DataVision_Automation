Feature: Entitlement

    Background: Roles and Permissions
        Given User is on Login page
        When  User log in with "classicdev48" and "drowssap" and navigates to Roles and Permission Page

    @Sprint4 @1234
    Scenario Outline: Verify Admin link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that Admin link is displyed on dashboard
        Examples:
            | role             | permission      | username     | password |
            | Test Permissions | admin_dashboard | classicdev40 | drowssap |
   
    @Sprint4 @1234
    Scenario Outline: Verify Brokers Dealers link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission           | username     | password | linkName            |
            | Test Permissions | admin_broker_dealers | classicdev40 | drowssap | Brokers and Dealers |

    @Sprint4 @retest
    Scenario Outline: Verify Brokers Dealers link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission           | username     | password | linkName            |
            | Test Permissions | admin_broker_dealers | classicdev40 | drowssap | Brokers and Dealers |

# ---------------
    @Sprint4
    Scenario Outline: Verify Classic Contacts View link by assigning permision
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission                  | username     | password | linkName              |
            | Test Permissions | admin_classic_contact_views | classicdev40 | drowssap | Classic Contact Views |

    @Sprint4
    Scenario Outline: Verify Classic Contacts View link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission                  | username     | password | linkName              |
            | Test Permissions | admin_classic_contact_views | classicdev40 | drowssap | Classic Contact Views |
#---------------------
    @Sprint4
    Scenario Outline: Verify Classic Users link by assigning permision
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission          | username     | password | linkName      |
            | Test Permissions | admin_classic_users | classicdev40 | drowssap | Classic Users |

    @Sprint4
    Scenario Outline: Verify Classic Users link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission          | username     | password | linkName      |
            | Test Permissions | admin_classic_users | classicdev40 | drowssap | Classic Users |

#-------------------------
    @Sprint4
    Scenario Outline: Verify CMSES link by assigning permision
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission  | username     | password | linkName |
            | Test Permissions | admin_cmses | classicdev40 | drowssap | CMSES    |

    @Sprint4
    Scenario Outline: Verify CMSES link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission  | username     | password | linkName |
            | Test Permissions | admin_cmses | classicdev40 | drowssap | CMSES    |
#---------------




#----------
    @Sprint4
    Scenario Outline: Verify Roles and Permission by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission             | username     | password | linkName              |
            | Test Permissions | admin_role_permissions | classicdev40 | drowssap | Roles and Permissions |

    @Sprint4
    Scenario Outline: Verify Roles and Permission by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission             | username     | password | linkName              |
            | Test Permissions | admin_role_permissions | classicdev40 | drowssap | Roles and Permissions |
# ---------------
    @Sprint4
    Scenario Outline: Verify SendMyDoc Scans Saves link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission       | username     | password | linkName          |
            | Test Permissions | admin_scan_saves | classicdev40 | drowssap | Send MyDocs Saves |

    @Sprint4
    Scenario Outline: Verify SendMyDoc Scans Saves link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission       | username     | password | linkName          |
            | Test Permissions | admin_scan_saves | classicdev40 | drowssap | Send MyDocs Saves |

# ------
    @Sprint4
    Scenario Outline: Verify SendMyDoc Scanners link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission     | username     | password | linkName             |
            | Test Permissions | admin_scanners | classicdev40 | drowssap | Send My Doc Scanners |

    @Sprint4
    Scenario Outline: Verify SendMyDoc Scanners link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission     | username     | password | linkName             |
            | Test Permissions | admin_scanners | classicdev40 | drowssap | Send My Doc Scanners |

#--------------
    @Sprint4
    Scenario Outline: Verify SendMyDoc Scans link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission  | username     | password | linkName      |
            | Test Permissions | admin_scans | classicdev40 | drowssap | Send My Scans |

    @Sprint4
    Scenario Outline: Verify SendMyDoc Scans link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission  | username     | password | linkName      |
            | Test Permissions | admin_scans | classicdev40 | drowssap | Send My Scans |
# ----------------
    @Sprint4
    Scenario Outline: Verify User Sessions link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission          | username     | password | linkName      |
            | Test Permissions | admin_user_sessions | classicdev40 | drowssap | User Sessions |

    @Sprint4
    Scenario Outline: Verify User Sessions link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission          | username     | password | linkName      |
            | Test Permissions | admin_user_sessions | classicdev40 | drowssap | User Sessions |
#---------------
    @Sprint4
    Scenario Outline: Verify Users link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission  | username     | password | linkName |
            | Test Permissions | admin_users | classicdev40 | drowssap | Users    |

    @Sprint4
    Scenario Outline: Verify Users link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission  | username     | password | linkName |
            | Test Permissions | admin_users | classicdev40 | drowssap | Users    |
#----------------
    @Sprint4 
    Scenario Outline: Verify Manage User Link & Active Lockouts link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName1>" link is displayed on Admin page
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName2>" link is displayed on Admin page
        Examples:
            | role             | permission | username     | password | linkName1   | linkName2       |
            | Test Permissions | admin_mpv  | classicdev40 | drowssap | Manage User | Active Lockouts |

    @Sprint4
    Scenario Outline: Verify  Manage User Link & Active Lockouts link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName1>" link is not displayed
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName2>" link is not displayed
        Examples:
            | role             | permission | username     | password | linkName1   | linkName2       |
            | Test Permissions | admin_mpv  | classicdev40 | drowssap | Manage User | Active Lockouts |
# -----------------
    @Sprint4
    Scenario Outline: Verify Workgroups link by adding permission
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed on Admin page
        Examples:
            | role             | permission       | username     | password | linkName   |
            | Test Permissions | admin_workgroups | classicdev40 | drowssap | Workgroups |

    @Sprint4
    Scenario Outline: Verify Workgroups link by removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed
        Examples:
            | role             | permission       | username     | password | linkName   |
            | Test Permissions | admin_workgroups | classicdev40 | drowssap | Workgroups |
# --------------------
    @Sprint4
    Scenario Outline: Verify  Admin link on removing permission
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that Admin link is not displyed
        Examples:
            | role             | permission      | username     | password |
            | Test Permissions | admin_dashboard | classicdev40 | drowssap |

    @Sprint4
    Scenario Outline: Verify Commissions Interpreters link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        When User click on Commissions link
        Then User expects that "<linkName>" link is displayed on Commissions Page

        Examples:
            | role     | permission                   | username     | password | linkName                 |
            | TestUser | commission_interpreters_user | classicdev10 | drowssap | Commissions Interpreters |



    @Sprint4
    Scenario Outline: Verify Commissions Interpreters link
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        When User click on Commissions link
        Then  User expects that "<linkName>" link is not displayed on Commissions Page

        Examples:
            | role     | permission                   | username     | password | linkName                 |
            | TestUser | commission_interpreters_user | classicdev10 | drowssap | Commissions Interpreters |
    @Sprint4
    Scenario Outline: Verify CFS/SPF Engineering Blog link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed under the Resources Menu

        Examples:
            | role     | permission       | username     | password | linkName                 |
            | TestUser | engineering_blog | classicdev10 | drowssap | CFS/SPF Engineering Blog |



    @Sprint4
    Scenario Outline: Verify CFS/SPF Engineering Blog link
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed under the Resources Menu

        Examples:
            | role     | permission       | username     | password | linkName                 |
            | TestUser | engineering_blog | classicdev10 | drowssap | CFS/SPF Engineering Blog |


    @Sprint4 @t
    Scenario Outline: Verify SendMyDocs link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed under the Tools Menu
        Then  User logout from the account
        Examples:
            | role     | permission | username     | password | linkName   |
            | TestUser | scan       | classicdev10 | drowssap | SendMyDocs |

    @Sprint4  @t
    Scenario Outline: Verify Set Up Client Scanner link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed under the Tools Menu
        When User clicks on "<linkName>"
        Then User expects that Set Up Client Scanner tab is displayed on the SendMyDocs page

        Examples:
            | role     | permission        | username     | password | linkName   |
            | TestUser | setup_client_scan | classicdev10 | drowssap | SendMyDocs |



   @Sprint4  @t
    Scenario Outline: Verify Set Up Client Scanner link
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed under the Tools Menu
        When User clicks on "<linkName>"
        Then User expects that Set Up Client Scanner is not displayed on the SendMyDocs page

        Examples:
            | role     | permission        | username     | password | linkName   |
            | TestUser | setup_client_scan | classicdev10 | drowssap | SendMyDocs |



    @Sprint4 @t
    Scenario Outline: Verify SendMyDocs link
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed under the Tools Menu

        Examples:
            | role     | permission | username     | password | linkName   |
            | TestUser | scan       | classicdev10 | drowssap | SendMyDocs |



  @Sprint4 
    Scenario Outline: Verify User Settings link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is displayed under the Username Menu
        When User clicks on "<linkName>" link
        Then User expects that Update Profile is displayed on the User Settings page

        Examples:
            | role     | permission | username     | password | linkName      |
            | TestUser | settings   | classicdev10 | drowssap | User settings |



   @Sprint4 
    Scenario Outline: Verify User Settings link removed
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When User enters valid "<username>" and "<password>" and click login button
        Then User expects that "<linkName>" link is not displayed under the Username Menu

        Examples:
            | role     | permission | username     | password | linkName      |
            | TestUser | settings   | classicdev10 | drowssap | User settings |

# @Sprint4 1
# Scenario Outline: Verify view contact permisson
#     When  User clicks on details of "<role>" role
#     When  User click on Edit button and select "<permission>"
#     When  User click on save button and Verify newly added "<permission>"
#     Then  User logout from the account
#     When User enters valid "<username>" and "<password>" and click login button
#     When  User click on Contact link
#     Then User expects that "<linkName>" link is displayed on the Contact page
#     Examples:
#         | role     | permission    | username     | password | linkName    |
#         | TestUser | view_contacts | classicdev10 | drowssap | Arsud, Ajay |

# @Sprint4 
# Scenario Outline: Verify search contact permisson
#     When  User clicks on details of "<role>" role
#     When  User click on Edit button and select "<permission>"
#     When  User click on save button and Verify newly added "<permission>"
#     Then  User logout from the account
#     When User enters valid "<username>" and "<password>" and click login button
#     When User click on Contact link
#     Then User expects that "<linkName>" link is displayed on contact page
#     Examples:
#         | role     | permission | username     | password | linkName |
#         | TestUser | search     | classicdev10 | drowssap | search   |



# @Sprint4 
# Scenario Outline: Verify search contact permisson
#     When  User clicks on details of "<role>" role
#     When  User click on edit button and Verify "<permission>"
#     Then  User removes "<permission>"
#     When  User click on save button and Verify "<permission>" removed
#     Then  User logout from the account
#     When User enters valid "<username>" and "<password>" and click login button
#     Then User expects that "<linkName>" link is not displayed on contact page
#     Examples:
#         | role     | permission | username     | password | linkName |
#         | TestUser | search     | classicdev10 | drowssap | search   |



# @Sprint4 
# Scenario Outline: Verify view contact permisson
#     When  User clicks on details of "<role>" role
#     When  User click on edit button and Verify "<permission>"
#     Then  User removes "<permission>"
#     When  User click on save button and Verify "<permission>" removed
#     Then  User logout from the account
#     When User enters valid "<username>" and "<password>" and click login button
#     Then User expects that "<linkName>" link is not displayed on the dashboard page
#     Examples:
#         | role     | permission    | username     | password | linkName |
#         | TestUser | view_contacts | classicdev10 | drowssap | Contact  |

# @Sprint4
# Scenario Outline: Verify write contact permisson
#     When  User clicks on details of "<role>" role
#     When  User click on Edit button and select "<permission>"
#     Then  User logout from the account
#     When User enters valid "<username>" and "<password>" and click login button
#     Then User should be able  edit Contact details
#     Examples:
#         | role     | permission     | username | password |
#         | TestUser | write_contacts |          |          |



# @Sprint4
# Scenario Outline: Verify write contact permisson
#     When  User clicks on details of "<role>" role
#     When  User click on edit button and Verify "<permission>"
#     Then  User removes "<permission>"
#     When  User click on save button and Verify "<permission>" removed
#     Then  User logout from the account
#     When User enters valid "<username>" and "<password>" and click login button
#     Then User should not be edit Contact details
#     Examples:
#         | role     | permission     | username | password |
#         | TestUser | write_contacts |          |          |

  @Sprint4 
    Scenario Outline: Verify Role filter
        When  Admin user enters a string on the "<Filter Roles>" section under Roles
        Then  Roles matching the entered string should be auto-filtered by "<Filter Roles>" and displayed in the Roles section
        Examples:
            | Filter Roles |
            | user         |

  @Sprint4 
    Scenario Outline: Verify Permission filter
        When  Admin user enters a string on the "<Filter Permission>" section under Permissions
        Then  Permissions matching the entered string should be auto-filtered by "<Filter Permission>" and displayed in the Roles section
        Examples:
            | Filter Permission |
            | roles             |

  @Sprint41 
    Scenario Outline: Verify Users filter on Role Details Page
        When Admin User clicks on Details button against a "<Users>"
        Then Admin User is navigated to the Role Detail Page of the corresponding "<Users>"
        When  Admin user enters a string on the "<Filter Users>" section under Users Assigned This Role
        Then  Users matching the entered string should be auto-filtered by "<Filter Users>" and displayed in the Users Assigned This Role section
        Examples:
            | Users            | Filter Users |
            | Test Permissions | Dev40           |
  @Sprint41
    Scenario Outline: Verify Permissions filter on Role Details Page
        When Admin User clicks on Details button against a "<role>"
        Then Admin User is navigated to the Role Detail Page of the corresponding "<role>"
        When  Admin user enters a string on the "<Filter Permissions>" section under Permissions This Role Grants section
        Then  Permissions matching the entered string should be auto-filtered by "<Filter Permissions>" and displayed in the Permissions This Role Grants section
        Examples:
            | role                  | Filter Permissions |
            | AutomationTestAdminQA | roles               |

  @Sprint41
    Scenario Outline: Verify Users filter on Permission Detail Page
        When Admin User clicks on Details button against a "<permission>"
        Then Admin User is navigated to the Permission Detail Page of the corresponding "<permission>"
        When  Admin user enters a string on the "<Filter Users>" section under Users Granted This Permission section
        Then  Users matching the entered string should be auto-filtered by "<Filter Users>" and displayed in the Users Granted This Permission section
        Examples:
            | permission  | Filter Users |
            | admin_roles | sara           |
    @Sprint4 
    Scenario Outline: Verify Role filter on Permission Detail Page
        When Admin User clicks on Details button against a "<permission>"
        Then Admin User is navigated to the Permission Detail Page of the corresponding "<permission>"
        When  Admin user enters a string on the "<Filter Roles>" section under Roles That Grant This Permission section
        Then  Roles matching the entered string should be auto-filtered by "<Filter Roles>" and displayed in the Users Assigned This Role section
        Examples:
            | permission  | Filter Roles |
            | admin_roles | Office       |
     @Sprint4 
    Scenario Outline: Verify Role filter
        When  Admin user enters a invalid string on the "<Filter Roles>" section under Roles
        Then  No Roles should be displayed by "<Filter Roles>" in the Roles section
        Examples:
            | Filter Roles |
            | abc          |

  @Sprint4 
    Scenario Outline: Verify Permission filter
        When  Admin user enters a invalid string on the "<Filter Permission>" section under Permissions
        Then  No Permissions should be displayed by "<Filter Permission>" in the Permissions section
        Examples:
            | Filter Permission |
            | abc               |

  @Sprint4 
    Scenario Outline: Verify Users filter on Role Details Page
        When Admin User clicks on Details button against a "<Users>"
        Then Admin User is navigated to the Role Detail Page of the corresponding "<Users>"
        When  Admin user enters a invalid string on the "<Filter Users>" section under Users Assigned This Role
        Then  No Users should be displayed by "<Filter Users>" in the Users Assigned This Role section
        Examples:
            | Users            | Filter Users |
            | Test Permissions | abc          |
    @Sprint4 
    Scenario Outline: Verify Permissions filter on Role Details Page
        When Admin User clicks on Details button against a "<role>"
        Then Admin User is navigated to the Role Detail Page of the corresponding "<role>"
        When  Admin user enters a invalid string on the "<Filter Permissions>" section under Permissions This Role Grants section
        Then  No Permissions should be displayed by "<Filter Permissions>" in the Permissions This Role Grants section
        Examples:
            | role       | Filter Permissions |
            | Super User | abc                |
  @Sprint4 
    Scenario Outline: Verify Users filter on Permission Detail Page
        When Admin User clicks on Details button against a "<permission>"
        Then Admin User is navigated to the Permission Detail Page of the corresponding "<permission>"
        When  Admin user enters a invalid string on the "<Filter Users>" section under Users Granted This Permission section
        Then  No Users should be displayed by "<Filter Users>" in the Users Granted This Permission section
        Examples:
            | permission  | Filter Users |
            | admin_roles | abc          |
  @Sprint4 
    Scenario Outline: Verify Role filter on Permission Detail Page
        When Admin User clicks on Details button against a "<permission>"
        Then Admin User is navigated to the Permission Detail Page of the corresponding "<permission>"
        When  Admin user enters a invalid string on the "<Filter Roles>" section under Roles That Grant This Permission section
        Then  No Roles should be displayed by "<Filter Roles>" in the Users Assigned This Role section
        Examples:
            | permission  | Filter Roles |
            | admin_roles | abc          |