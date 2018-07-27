Feature: Entitlement

    Background: Roles and Permissions
        Given User is on Login page
        When  User log in with "classicdev48" and "drowssap" and navigates to Roles and Permission Page

    @AT216_Ent_040_01 @SmokeTest @Regression @Sprint4 
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
   
    @AT216_Ent_040_02 @SmokeTest @Regression @Sprint4
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

    @AT216_Ent_040_03 @SmokeTest @Regression @Sprint4
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

    @AT216_Ent_040_04 @Regression @Sprint4
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

    @AT216_Ent_040_05 @Regression @Sprint4
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

    @AT216_Ent_040_06 @Regression @Sprint4
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

    @AT216_Ent_040_07 @Regression @Sprint4
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

    @AT216_Ent_040_08 @Regression @Sprint4
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

    @AT216_Ent_040_09 @Regression @Sprint4
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

    @AT216_Ent_040_10 @Regression @Sprint4
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

    @AT216_Ent_040_11 @Regression @Sprint4
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

    @AT216_Ent_040_12 @Regression @Sprint4
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

    @AT216_Ent_040_13 @Regression @Sprint4
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

    @AT216_Ent_040_14 @Regression @Sprint4
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

    @AT216_Ent_040_15 @Regression @Sprint4
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

    @AT216_Ent_040_16 @Regression @Sprint4
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

    @AT216_Ent_040_17 @Regression @Sprint4
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

    @AT216_Ent_040_18 @Regression @Sprint4
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

    @AT216_Ent_040_19 @Regression @Sprint4
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

    @AT216_Ent_040_20 @Regression @Sprint4
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

    @AT216_Ent_040_21 @Regression @Sprint4
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

    @AT216_Ent_040_22 @Regression @Sprint4 
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

    @AT216_Ent_040_23 @Regression @Sprint4
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

    @AT216_Ent_040_24 @Regression @Sprint4
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

    @AT216_Ent_040_25 @Regression @Sprint4
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

    @AT216_Ent_040_26 @SmokeTest @Regression @Sprint4
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

    @AT156_Ent_028 @AT156_Ent_029 @SmaokeTest @Regression @Sprint4
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

    @AT156_Ent_030 @SmokeTest @Regression @Sprint4
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
  
    @AT157_Ent_024 @AT157_Ent_025 @Regression @Sprint4
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

    @AT157_Ent_026 @AT157_Ent_027 @Regression @Sprint4
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

    @AT158_Ent_034_01  @AT158_Ent_035_01 @SmokeTest @Regression @Sprint4
    Scenario Outline: Verify SendMyDocs link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that "<linkName>" link is displayed under the Tools Menu
        Then  User logout from the account
        Examples:
            | role     | permission | username     | password | linkName   |
            | TestUser | scan       | classicdev10 | drowssap | SendMyDocs |

    @AT162_Ent_038  @AT162_Ent_039 @Regression @Sprint4
    Scenario Outline: Verify Set Up Client Scanner link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that "<linkName>" link is displayed under the Tools Menu
        When  User clicks on "<linkName>"
        Then  User expects that Set Up Client Scanner tab is displayed on the SendMyDocs page

        Examples:
            | role     | permission        | username     | password | linkName   |
            | TestUser | setup_client_scan | classicdev10 | drowssap | SendMyDocs |

    @AT162_Ent_038  @AT162_Ent_039 @Regression @Sprint4
    Scenario Outline: Verify Set Up Client Scanner link
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that "<linkName>" link is displayed under the Tools Menu
        When  User clicks on "<linkName>"
        Then  User expects that Set Up Client Scanner is not displayed on the SendMyDocs page

        Examples:
            | role     | permission        | username     | password | linkName   |
            | TestUser | setup_client_scan | classicdev10 | drowssap | SendMyDocs |

    @AT158_Ent_034_02 @AT158_Ent_035_02 @Regression @Sprint4 
    Scenario Outline: Verify SendMyDocs link
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that "<linkName>" link is not displayed under the Tools Menu

        Examples:
            | role     | permission | username     | password | linkName   |
            | TestUser | scan       | classicdev10 | drowssap | SendMyDocs |

    @AT161_Ent_036 @AT161_Ent_037 @Regression @Sprint4 
    Scenario Outline: Verify User Settings link
        When  User clicks on details of "<role>" role
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that "<linkName>" link is displayed under the Username Menu
        When  User clicks on "<linkName>" link
        Then  User expects that Update Profile is displayed on the User Settings page

        Examples:
            | role     | permission | username     | password | linkName      |
            | TestUser | settings   | classicdev10 | drowssap | User settings |

    @AT161_Ent_036 @AT161_Ent_037 @Regression @Sprint4 
    Scenario Outline: Verify User Settings link removed
        When  User clicks on details of "<role>" role
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Then  User logout from the account
        When  User enters valid "<username>" and "<password>" and click login button
        Then  User expects that "<linkName>" link is not displayed under the Username Menu

        Examples:
            | role     | permission | username     | password | linkName      |
            | TestUser | settings   | classicdev10 | drowssap | User settings |

    @Regression @Sprint4 
    Scenario Outline: Verify Role filter
        When  Admin user enters a string on the "<Filter Roles>" section under Roles
        Then  Roles matching the entered string should be auto-filtered by "<Filter Roles>" and displayed in the Roles section
        Examples:
            | Filter Roles |
            | user         |

    @Regression @Sprint4 
    Scenario Outline: Verify Permission filter
        When  Admin user enters a string on the "<Filter Permission>" section under Permissions
        Then  Permissions matching the entered string should be auto-filtered by "<Filter Permission>" and displayed in the Roles section
        Examples:
            | Filter Permission |
            | roles             |

    @Regression @Sprint41 
    Scenario Outline: Verify Users filter on Role Details Page
        When Admin User clicks on Details button against a "<Users>"
        Then Admin User is navigated to the Role Detail Page of the corresponding "<Users>"
        When  Admin user enters a string on the "<Filter Users>" section under Users Assigned This Role
        Then  Users matching the entered string should be auto-filtered by "<Filter Users>" and displayed in the Users Assigned This Role section
        Examples:
            | Users            | Filter Users |
            | Test Permissions | Dev40           |
    
    @Regression @Sprint4
    Scenario Outline: Verify Permissions filter on Role Details Page
        When Admin User clicks on Details button against a "<role>"
        Then Admin User is navigated to the Role Detail Page of the corresponding "<role>"
        When  Admin user enters a string on the "<Filter Permissions>" section under Permissions This Role Grants section
        Then  Permissions matching the entered string should be auto-filtered by "<Filter Permissions>" and displayed in the Permissions This Role Grants section
        Examples:
            | role                  | Filter Permissions |
            | AutomationTestAdminQA | roles               |

    @Regression @Sprint4
    Scenario Outline: Verify Users filter on Permission Detail Page
        When Admin User clicks on Details button against a "<permission>"
        Then Admin User is navigated to the Permission Detail Page of the corresponding "<permission>"
        When  Admin user enters a string on the "<Filter Users>" section under Users Granted This Permission section
        Then  Users matching the entered string should be auto-filtered by "<Filter Users>" and displayed in the Users Granted This Permission section
        Examples:
            | permission  | Filter Users |
            | admin_roles | sara           |
    
    @Regression @Sprint4 
    Scenario Outline: Verify Role filter on Permission Detail Page
        When Admin User clicks on Details button against a "<permission>"
        Then Admin User is navigated to the Permission Detail Page of the corresponding "<permission>"
        When  Admin user enters a string on the "<Filter Roles>" section under Roles That Grant This Permission section
        Then  Roles matching the entered string should be auto-filtered by "<Filter Roles>" and displayed in the Users Assigned This Role section
        Examples:
            | permission  | Filter Roles |
            | admin_roles | Office       |
    
    @Regression @Sprint4 
    Scenario Outline: Verify Role filter
        When  Admin user enters a invalid string on the "<Filter Roles>" section under Roles
        Then  No Roles should be displayed by "<Filter Roles>" in the Roles section
        Examples:
            | Filter Roles |
            | abc          |

    @Regression @Sprint4 
    Scenario Outline: Verify Permission filter
        When  Admin user enters a invalid string on the "<Filter Permission>" section under Permissions
        Then  No Permissions should be displayed by "<Filter Permission>" in the Permissions section
        Examples:
            | Filter Permission |
            | abc               |

    @Regression @Sprint4 
    Scenario Outline: Verify Users filter on Role Details Page
        When Admin User clicks on Details button against a "<Users>"
        Then Admin User is navigated to the Role Detail Page of the corresponding "<Users>"
        When  Admin user enters a invalid string on the "<Filter Users>" section under Users Assigned This Role
        Then  No Users should be displayed by "<Filter Users>" in the Users Assigned This Role section
        Examples:
            | Users            | Filter Users |
            | Test Permissions | abc          |
    
    @Regression @Sprint4 
    Scenario Outline: Verify Permissions filter on Role Details Page
        When Admin User clicks on Details button against a "<role>"
        Then Admin User is navigated to the Role Detail Page of the corresponding "<role>"
        When  Admin user enters a invalid string on the "<Filter Permissions>" section under Permissions This Role Grants section
        Then  No Permissions should be displayed by "<Filter Permissions>" in the Permissions This Role Grants section
        Examples:
            | role       | Filter Permissions |
            | Super User | abc                |

    @Regression @Sprint4 
    Scenario Outline: Verify Users filter on Permission Detail Page
        When Admin User clicks on Details button against a "<permission>"
        Then Admin User is navigated to the Permission Detail Page of the corresponding "<permission>"
        When  Admin user enters a invalid string on the "<Filter Users>" section under Users Granted This Permission section
        Then  No Users should be displayed by "<Filter Users>" in the Users Granted This Permission section
        Examples:
            | permission  | Filter Users |
            | admin_roles | abc          |
    
    @Regression @Sprint4 
    Scenario Outline: Verify Role filter on Permission Detail Page
        When Admin User clicks on Details button against a "<permission>"
        Then Admin User is navigated to the Permission Detail Page of the corresponding "<permission>"
        When  Admin user enters a invalid string on the "<Filter Roles>" section under Roles That Grant This Permission section
        Then  No Roles should be displayed by "<Filter Roles>" in the Users Assigned This Role section
        Examples:
            | permission  | Filter Roles |
            | admin_roles | abc          |


#The below features will be covered as a part of different user stories

# @Regression @Sprint4
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

# @Regression @Sprint4 
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

# @Regression @Sprint4 
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

# @Regression @Sprint4 
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

# @Regression @Sprint4
# Scenario Outline: Verify write contact permisson
#     When  User clicks on details of "<role>" role
#     When  User click on Edit button and select "<permission>"
#     Then  User logout from the account
#     When User enters valid "<username>" and "<password>" and click login button
#     Then User should be able  edit Contact details
#     Examples:
#         | role     | permission     | username | password |
#         | TestUser | write_contacts |          |          |

# @Regression @Sprint4
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