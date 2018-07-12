Feature: Entitlement

    Background: Roles and Permissions
        Given User is on Login page
        When  User log in with "classicdev48" and "drowssap" and navigates to Roles and Permission Page

    @SearchWithfirstName @Sprint3
    Scenario Outline: Roles & Permissions - Search the user using first name
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<firstName>" in the search text box
        Then  User expect that name with "<firstName>" is displayed
        Examples:
            | firstName | role       |
            | Kate      | Super User |

    @SearchWithLastName @Sprint3
    Scenario Outline: Roles & Permissions - Search the user using last name
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<lastName>" in the search text box
        Then  User expect that name with "<lastName>" is displayed
        Examples:
            | lastName | role       |
            | Mater    | Super User |

    @SearchWithPartialName @Sprint3
    Scenario Outline: Roles & Permissions - Search the user by entering partial username
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<partialUserName>" in the search text box
        Then  User expect that name with "<partialUserName>" is displayed
        Examples:
            | partialUserName | role       |
            | ful             | Super User |

    @AdduserWithSearch @Sprint3 @test3
    Scenario Outline: Roles & Permissions - Verify adding user to a role with search
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<searchUserName>" in the search text box
        When  User selects "<selectUserName>" from the list
        When  User clicks on Add selected user button
        Then  User expects that "<selectUserName>" is added successfully
        Examples:
            | searchUserName | role       | selectUserName                     |
            | Prajyot        | Super User | Prajyot Fulsundar PFULSUNDAR (cfs) |

    @StopAddUser @Sprint3
    Scenario Outline: Roles & Permissions - Verify adding user to a role
        When  User clicks on details of "<role>" role
        When  User clicks on the add user button and verifies the search textbox is displyed
        When  User enters "<searchUserName>" in the search text box
        When  User selects "<selectUserName>" from the list
        When  User clicks on Cancel button
        Then  User expects that "<searchUserName>" is not added
        Examples:
            | searchUserName    | role       | selectUserName          |
            | Prajyot Fulsundar | Super User | Prajyot Fulsundar (cfs) |


    @RemoveRoleFromUser @Sprint3 @test3
    Scenario Outline: Roles & Permissions - Verify removing role form the user
        When  User clicks on details of "<role>" role
        When  User removes "<roleUserName>" from the role
        Then  User expects that the "<roleUserName>" is not assigned to the role

        Examples:
            | roleUserName      | role       |
            | Prajyot Fulsundar | Super User |

    @Sprint3 @AT81Ent_018
    Scenario Outline: Roles & Permissions - Verify removing role permanently from the system
        When User delete role permanently
        Then  User expects that the role is deleted and "<message>" is displayed
        Examples:
            | message                    |
            | Role deleted successfully. |

    @Sprint3 @AT81Ent_019
    Scenario: Roles & Permissions - Cancel the role removing process
        When  User Cancel the role Deletion
        Then  User expects that the Role details page is displayed

    @Sprint3 @AT128Ent_020
    Scenario Outline: Roles & Permissions - Verifing the user details page
        When  User clicks on details of "<role>" role
        When  User clicks on view button for "<roleUserName>"
        Then  User expects that the User details page is displayed of "<roleUserName>"
        Examples:
            | roleUserName      | role               |
            | Prajyot Fulsundar | CFS/SPF Management |

    @Sprint3 @AT129Ent_021
    Scenario Outline: Roles & Permissions - Verifing Classic user ownerships section
        When  User clicks on details of "<role>" role
        When  User clicks on view button for "<roleUserName>"
        Then  User expects that the Classic user ownerships section is displayed
        Examples:
            | roleUserName      | role               |
            | Prajyot Fulsundar | CFS/SPF Management |

    @Sprint3 @AT129Ent_022
    Scenario Outline: Roles & Permissions - Verifing Classic contacts view
        When  User clicks on details of "<role>" role
        When  User clicks on view button for "<roleUserName>"
        Then  User expects that the Classic user read scope section is displayed
        Examples:
            | roleUserName      | role               |
            | Prajyot Fulsundar | CFS/SPF Management |

#*
    @Sprint3 @AT69Ent_005_001
    Scenario Outline:Creation of New Roles
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on createRole button
        Then  User expects that rolename is present

        Examples:
            | length |
            | 7      |

    @Sprint3 @AT69Ent_005_002
    Scenario Outline: Creation of New Roles length49
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on createRole button
        Then  User expects that rolename is present
        # 38+11(Automation_)=49 length
        Examples:
            | length |
            | 38     |

    @Sprint3 @AT69Ent_005_003
    Scenario Outline:Creation of New Roles length50
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on createRole button
        Then  User expects that rolename is present
        # 39+11(Automation_)=50 length
        Examples:
            | length |
            | 39     |

    @Sprint3 @AT69Ent_010
    Scenario Outline: Creation of New Roles length51
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>"
        Then  User expect that "<WarnMsg>" is displayed on screen
        # 40+11(Automation_)=51 length
        Examples:
            | length | WarnMsg                               |
            | 51     | Role name is limited to 50 characters |

    @Sprint3 @AT69Ent_007
    Scenario Outline: Creation and cancel New Roles
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on cancel button
        Then  User expects that rolename is not present
        Examples:
            | length |
            | 12     |

    @AT69Ent_008
    Scenario Outline: Creation and cancel New Roles
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on newRole button
        Then  User expects that rolename is not present
        Examples:
            | length |
            | 12     |

    @Sprint3 @AT69Ent_009
    Scenario Outline: verify duplicate name
        When  User click on newRole button and verifies RoleName field is present
        When  User enters valid "<Rolename>" and click on createRole button
        Then User expect that "<ErrorMsg>" is displayed
        Examples:
            | Rolename      | ErrorMsg                                |
            | DuplicateRole | Cannot create role, name already exists |

    @Sprint3 @AT72Ent_001
    Scenario Outline: verify roles and permission of admin
        #System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        Examples:
            | Rolename   |
            | Super User |

    @Sprint3 @AT72Ent_002
    Scenario Outline: add ans verify new permission
        #System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button and select "<permission>"
        When  User click on save button and Verify newly added "<permission>"
        # admin_realms permission should be not checked
        Examples:
            | Rolename   | permission   |
            | Super User | admin_realms |

    @Sprint3 @AT72Ent_003
    Scenario Outline: Edit and verify no new permission added
        #System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button
        When  User click on save button and Verify not added "<permission>"
        Examples:
            | Rolename   | permission       |
            | Super User | admin_user_roles |

    @Sprint3 @AT72Ent_004
    Scenario Outline: edit and cancel changes verification
        #System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button and select "<permission>"
        When  User click on cancel button and Verify not added "<permission>"
        Examples:
            | Rolename   | permission       |
            | Super User | admin_user_roles |

    @Sprint3 @AT73Ent_011
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

    @Sprint4 @AT_131Ent_
    Scenario Outline:Roles & Permissions - Verifing Roles and Permissions section
        #Roles & Permissions - Verifing Roles and Permissions section
        When  User clicks on details of "<role>" role
        When  User clicks on view button for "<roleUserName>"
        Then  User expects that the Classic user ownerships section is displayed
        Then  User expects that the Roles and Permissions section is displayed
        Then  User logout from the account
        Examples:
            | roleUserName  | role       |
            | Kate Birchell | Super User |

    @Sprint3 @AT73Ent_012
    Scenario Outline: System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button
        When  User click on save button and Verify not added "<permission>"
        Examples:
            | Rolename   | permission       |
            | Super User | admin_user_roles |

    @Sprint3 @AT73Ent_013
    Scenario Outline: System displays all the users assigned to a role, and permissions a role grants, to the Admin
        When  User clicks on details of "<Rolename>" role
        Then  User expects that user role and permission column should display
        When  User click on Edit button and select "<permission>"
        When  User click on cancel button and Verify not added "<permission>"
        Examples:
            | Rolename   | permission       |
            | Super User | admin_user_roles |

    @Sprint3 @AT73_Ent_005_001
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

    @Sprint31 @AT73_Ent_005_001
    Scenario Outline:Creation of New Roles
        When  User click on newRole button and verifies RoleName field is present
        When  User enters rolename of length "<length>" and click on createRole button
        Then  User expects that rolename is present
        When  User clicks on details of role and verify role and permission column should display
        When  User click on Edit button and select multiple
# When  User click on save button and Verify newly added "<permission>"
# When  User clicks on details of role and verify role and permission column should display
# When  User click on edit button and Verify "<permission>"
# Then  User removes "<permission>"
# When  User click on save button and Verify "<permission>" removed
# When  User deletes role from the system permanently
        # Then  User expects that the role is deleted and "<message>" is displayed
        Examples:
            | length | permission | message                    |
            | 7      | search     | Role deleted successfully. |
