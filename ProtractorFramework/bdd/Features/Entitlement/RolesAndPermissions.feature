Feature: Entitlement

    Background: Roles and Permissions
        Given User is on Login page
        When  User log in with "classicdev48" and "drowssap" and navigates to Roles and Permission Page

    @AT79_Ent_014_01 @SmokeTest @Regression @Sprint3
    Scenario Outline: Search the user using first name
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<firstName>" in the search text box
        Then  User expect that name with "<firstName>" is displayed
        Examples:
            | firstName | role       |
            | Kate      | Super User |

    @AT79_Ent_014_02 @Regression @Sprint3
    Scenario Outline: Search the user using last name
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<lastName>" in the search text box
        Then  User expect that name with "<lastName>" is displayed
        Examples:
            | lastName | role       |
            | Kapor    | Super User |

    @AT79_Ent_014_03 @Regression @Sprint3
    Scenario Outline: Search the user by entering partial username
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<partialUserName>" in the search text box
        Then  User expect that name with "<partialUserName>" is displayed
        Examples:
            | partialUserName | role       |
            | ful             | Super User |

    @AT79_Ent_015_01 @Regression @Sprint3
    Scenario Outline: Verify adding user to a role
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<searchUserName>" in the search text box
        When  User selects "<selectUserName>" from the list
        When  User clicks on Cancel button
        Then  User expects that "<searchUserName>" is not added
        Examples:
            | searchUserName    | role       | selectUserName    |
            | Prajyot Fulsundar | Super User | Prajyot Fulsundar |

    @AT79_Ent_015_02 @SmokeTest @Regression @Sprint3
    Scenario Outline: Verify adding user to a role with search
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<searchUserName>" in the search text box
        When  User selects "<selectUserName>" from the list
        When  User clicks on Add selected user button
        Then  User expects that "<selectUserName>" is added successfully
        Examples:
            | searchUserName | role       | selectUserName    |
            | Prajyot        | Super User | Prajyot Fulsundar |

    @AT80_Ent_017 @SmokeTest @Regression @Sprint3
    Scenario Outline: Verify removing role form the user
        When  User clicks on details of "<role>" role
        When  User removes "<roleUserName>" from the role
        Then  User expects that the "<roleUserName>" is not assigned to the role
        Examples:
            | roleUserName      | role       |
            | Prajyot Fulsundar | Super User |

    @AT81_Ent_018 @Regression @Sprint3 
    Scenario Outline: Verify removing role permanently from the system
        When User delete role permanently
        Then  User expects that the role is deleted and "<message>" is displayed
        Examples:
            | message                    |
            | Role deleted successfully. |

    @AT81_Ent_019 @Regression @Sprint3 
    Scenario: Cancel the role removing process
        When  User Cancel the role Deletion
        Then  User expects that the Role details page is displayed

    @AT128_Ent_020 @Regression @Sprint3 
    Scenario Outline: Verifing the user details page
        When  User clicks on details of "<role>" role
        When  User clicks on view button for "<roleUserName>"
        Then  User expects that the User details page is displayed of "<roleUserName>"
        Examples:
            | roleUserName | role       |
            | Hardik Kori  | Super User |

    @AT129_Ent_021 @Regression @Sprint3 
    Scenario Outline: Verifing Classic user ownerships section
        When  User clicks on details of "<role>" role
        When  User clicks on view button for "<roleUserName>"
        Then  User expects that the Classic user ownerships section is displayed
        Examples:
            | roleUserName | role       |
            | Hardik Kori  | Super User |

    @AT129_Ent_022 @Regression @Sprint3 
    Scenario Outline: Verifing read scope view
        When  User clicks on details of "<role>" role
        When  User clicks on view button for "<roleUserName>"
        Then  User expects that the Classic user read scope section is displayed
        Examples:
            | roleUserName | role       |
            | Hardik Kori  | Super User |

    @AT69_Ent_005_01 @SmokeTest @Regression @Sprint3 
    Scenario Outline:Creation of New Roles
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on createRole button
        Then  User expects that rolename is present
        Examples:
            | length |
            | 7      |

    @AT69_Ent_010_01 @Regression @Sprint3
    Scenario Outline: Creation of New Roles length49
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on createRole button
        Then  User expects that rolename is present
        # 38+11(Automation_)=49 length
        Examples:
            | length |
            | 38     |

    @AT69_Ent_010_02 @Regression @Sprint3 
    Scenario Outline:Creation of New Roles length50
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on createRole button
        Then  User expects that rolename is present
        # 39+11(Automation_)=50 length
        Examples:
            | length |
            | 39     |

    @AT69_Ent_010_03 @Regression @Sprint3 
    Scenario Outline: Creation of New Roles length51
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>"
        Then  User expect that "<WarnMsg>" is displayed on screen
        # 40+11(Automation_)=51 length
        Examples:
            | length | WarnMsg                               |
            | 51     | Role name is limited to 50 characters |

    @AT69_Ent_007 @Regression @Sprint3 
    Scenario Outline: Creation and cancel New Roles
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on cancel button
        Then  User expects that rolename is not present
        Examples:
            | length |
            | 12     |

    @AT69_Ent_008 @Regression @Sprint3
    Scenario Outline: Creation and cancel New Roles
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on newRole button
        Then  User expects that rolename is not present
        Examples:
            | length |
            | 12     |

    @AT69_Ent_009 @Regression @Sprint3
    Scenario Outline: verify duplicate name
        When  User click on newRole button and verifies RoleName field is present
        When  User enters valid "<Rolename>" and click on createRole button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | Rolename      | ErrorMsg                                |
            | DuplicateRole | Cannot create role, name already exists |

    @AT72_Ent_001 @Regression @Sprint3 
    Scenario Outline: verify roles and permission of admin
        #System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        Examples:
            | Rolename   |
            | Super User |

    @AT72_Ent_002 @SmokeTest @Regression @Sprint3
    Scenario Outline: Add and verify new permission
        #System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        # admin_realms permission should be not checked
        Examples:
            | Rolename   | permission   |
            | Super User | admin_realms |

    @AT72_Ent_003 @Regression @Sprint3 
    Scenario Outline: Edit and verify no new permission added
        #System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button
        When  User click on save button and Verify not added "<permission>"
        Examples:
            | Rolename   | permission       |
            | Super User | admin_user_roles |

    @AT72_Ent_004 @Regression @Sprint3 
    Scenario Outline: Edit and cancel changes verification
        #System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button and select "<permission>"
        When  User click on cancel button and Verify not added "<permission>"
        Examples:
            | Rolename   | permission       |
            | Super User | admin_user_roles |

    @AT73_Ent_012 @Regression @Sprint3 
    Scenario Outline: Verify adding permissions without selecting new permission
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button
        When  User click on save button and Verify not added "<permission>"
        Examples:
            | Rolename   | permission       |
            | Super User | admin_user_roles |

    @AT73_Ent_013 @Regression @Sprint3 
    Scenario Outline: Verify adding permissions by selecting new permission
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button and select "<permission>"
        When  User click on cancel button and Verify not added "<permission>"
        Examples:
            | Rolename   | permission       |
            | Super User | admin_user_roles |

    @AT73_Ent_011 @Regression @Sprint3 
    Scenario Outline: Delete permission
        #Roles & Permission - Deletion of a Permission from a Role
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        Examples:
            | Rolename   | permission   |
            | Super User | admin_realms |

    @AT131_Ent_022 @Regression @Sprint4 
    Scenario Outline:Roles & Permissions - Verifing Roles and Permissions section
        #Roles & Permissions - Verifing Roles and Permissions section
        When  User clicks on details of "<role>" role
        When  User clicks on view button for "<roleUserName>"
        Then  User expects that the Classic user ownerships section is displayed
        Then  User expects that the Roles and Permissions section is displayed
        Then  User logout from the account
        Examples:
            | roleUserName | role       |
            | Hardik Kori  | Super User |

    @AT73_Ent_005_01 @Regression @Sprint3 
    Scenario Outline:Creation of New Roles
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on createRole button
        Then  User expects that rolename is present
        When  User clicks on details of role and verify role and permission column should display
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        When  User clicks on details of role and verify role and permission column should display
        When  User click on edit button and Verify "<permission>"
        Then  User removes "<permission>"
        When  User click on save button and Verify "<permission>" removed
        When  User deletes role from the system permanently
        Then  User expects that the role is deleted and "<message>" is displayed
        Examples:
            | length | permission | message                    |
            | 7      | search     | Role deleted successfully. |

