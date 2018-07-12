import { browser, protractor,by, element, ExpectedConditions } from "protractor";
const { BeforeAll,Before, After, Status,defineSupportCode,setDefaultTimeout } = require("cucumber");
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue"
import { isVisible } from "../../uiActions/verifyActions/isVisible"

import { ForgotPasswordPage } from "../Pages/ForgotPasswordPage";

import { EntitlementPage } from "../Pages/EntitlementPage";
import { DashBoardPage } from "../Pages/DashBoardPage";
import { alertAccept, alertDismiss } from "../../uiActions/alertActions/alertAction";
import { LoginPage } from "../Pages/LoginPage";
import { waitForObject, staticWait } from "../../uiActions/waitActions/waitActions";
import { isElementPresent } from "../../uiActions/verifyActions/isElementPresent";
import { moveToElement } from "../../uiActions/mouseActions/moveToElement";
import { stat, statSync } from "fs";
import { error } from "util";
import { fail } from "assert";
import { Reporter } from "../../support/reporter";
import { UserSetupPage } from "../Pages/UserSetupPage";



const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let status;
let entitlementPage: EntitlementPage = new EntitlementPage();
let loginPage: LoginPage = new LoginPage();
let dasboardPage: DashBoardPage = new DashBoardPage();
let userSetuppage: UserSetupPage = new UserSetupPage();

//////////////////////////////      Hardik  /////////////////////////////////////////////
When(/^User clicks on the add user button and verifies the search textbox is displyed$/, async () => {
    await entitlementPage.clickOnAddUserButton();
    await staticWait(3000)
    expect(await entitlementPage.verifySearchTextBox())
        .to.equal(true, 'Search text box not displayed');
});

When(/^User enters "([^"]*)?" in the search text box$/, async (userName) => {
    await entitlementPage.enterUserName(userName);
    await entitlementPage.clickOnSearchButton();
    await staticWait(5000)
});

When(/^User selects "([^"]*)?" from the list$/, async (userName) => {
    await entitlementPage.selectUser(userName)
});
When(/^User clicks on Add selected user button$/, async () => {
    await entitlementPage.clickOnAddSelectedUserButton()
});

Then(/^User expects that "([^"]*)?" is added successfully$/, async (userName) => {
    expect(await entitlementPage.verifyUserAdded(userName)).to.equal(true, 'User not added to role')
})
Then(/^User expects that "([^"]*)?" is not added$/, async (userName) => {
    await staticWait(3000)

    await console.log(await entitlementPage.verifyUserAdded(userName))
    await expect(await entitlementPage.verifyUserAdded(userName)).to.equal(false, 'User added to role')
})


Then(/^User expect that names with matching text is displayed$/, async (userName) => {
   await console.log(await entitlementPage.verifyUserName(userName)+"is value in")
    expect(await entitlementPage.verifyUserName(userName)).to.equal(true,'User names did not matched');
})

When(/^User deletes role from the system permanently$/, async () => {
    await entitlementPage.deleteRoleAndAccept();
})

When(/^User Cancel the role Deletion$/, async () => {
    await entitlementPage.CancelDeleteRole();
    //await entitlementPage.deleteRoleAndDismiss();
})


Then(/^User expects that the role is deleted and "([^"]*)?" is displayed$/, async (message) => {
    await entitlementPage.verifyMessage(message);
    await entitlementPage.verifyRoleNotPresent();
})

When(/^User clicks on details of "([^"]*)?" role$/, async (role) => {
    await entitlementPage.verifyAndClickOnDetails(role);
})

Then(/^User expect that name with "([^"]*)?" is displayed$/, async (userName) => {
    await console.log(await entitlementPage.verifyUserName(userName) + "is value in")
    expect(await entitlementPage.verifyUserName(userName)).to.equal(true, 'User names did not matched');
})


Then(/^User navigates back to role details page without adding the "([^"]*)?"$/, async (userName) => {
    await entitlementPage.verifyAddUserButton();
    await entitlementPage.verifyNoUserPresent(userName);
})


When(/^User removes "([^"]*)?" from the role$/, async (userName) => {
    await entitlementPage.removeUser(userName);
})
When(/^User clicks on Cancel button$/, async () => {
    await entitlementPage.clickOnCancelButton();
})

Then(/^User expects that the "([^"]*)?" is not assigned to the role$/, async (userName) => {
    await console.log(await entitlementPage.verifyUserAdded(userName))
    await expect(await entitlementPage.verifyUserAdded(userName)).to.equal(false, 'User added to role')
});

Then(/^User expects that the User details page is displayed of "([^"]*)?"$/, async (userName) => {
    await entitlementPage.verifyUserProfile(userName);
});

When(/^User clicks on view button for "([^"]*)?"$/, async (userName) => {
    await entitlementPage.verifyAndClickOnView(userName);
});

Then(/^User expects that the Classic user ownerships section is displayed$/, async () => {
    //await entitlementPage.verifyClassicUserOwnerships();
    await expect(await entitlementPage.verifyClassicUserOwnerships()).to.equal(true,'ClassicUserOwnerships is present');
   
});

Then(/^User expects that the Classic user read scope section is displayed$/, async () => {
    await entitlementPage.verifyClassicContactReadScope();
});

Then(/^User expects that the Role details page is displayed$/, async () => {
    await entitlementPage.verifyAddUserButton();
});

//////////////////////////////////// prajyot       /////////////////////

When(/^User click on newRole button and verifies RoleName field is present$/, async () => {

    await entitlementPage.clickOnNewRole();
    await entitlementPage.verifyRoleNameField();
});

When(/^User enters rolename of length "([^"]*)?" and click on createRole button$/, async (Rolename) => {

    await entitlementPage.enterRoleName(Rolename);
    await entitlementPage.clickOnCreateRoleButton();
});
When(/^User enters valid "([^"]*)?" and click on createRole button$/, async (Rolename) => {

    await entitlementPage.VerifyDuplicateRoleName(Rolename);
    await entitlementPage.clickOnCreateRoleButton();
});

Then(/^User expects that rolename is present$/, async () => {

    await expect(await entitlementPage.verifyRoleName()).to.equal(true,'Rolename is present');
   // await entitlementPage.verifyRoleName();

});

Then(/^User expect that "([^"]*)?" is displayed on screen$/, async (WarnMsg) => {

    await entitlementPage.verifyWarningMessage(WarnMsg);


});

When(/^User enters rolename of length "([^"]*)?"$/, async (Rolename) => {

    await entitlementPage.EnterRoleName(Rolename);


});
When(/^User enters rolename of length "([^"]*)?" and click on cancel button$/, async (Rolename) => {

    await entitlementPage.EnterRoleName(Rolename);
    await entitlementPage.clickOnCancelButton();
});
When(/^User enters rolename of length "([^"]*)?" and click on newRole button$/, async (Rolename) => {

    await entitlementPage.EnterRoleName(Rolename);
    await entitlementPage.clickOnNewRole();
});

Then(/^User expects that rolename is not present$/, async () => {
    await expect(await entitlementPage.verifyRoleName()).to.equal(false,'Rolename is present');
    //await entitlementPage.verifyRoleNotPresent();

});

Then(/^User expects that user role and permission column should display$/, async () => {
    await expect(await entitlementPage.verifyRoleandPermissionColumn()).to.equal(true,'RoleandPermissionColumn is not present');
    
   // await entitlementPage.verifyRoleandPermissionColumn();

});
When(/^User clicks on details of role and verify role and permission column should display$/, async () => {
    await entitlementPage.ClickOnDetails();
    await expect(await entitlementPage.verifyRoleandPermissionColumn()).to.equal(true,'Rolename is present');
    //await entitlementPage.verifyRoleandPermissionColumn();
    

});

When(/^User click on Edit button and select "([^"]*)?"$/, async (permission) => {
    //await entitlementPage.verifyPermissionSave(permission)
    await entitlementPage.clickOnEditButton();
    await entitlementPage.SelectCheckBox(permission);
});
When(/^User click on save button and Verify newly added "([^"]*)?"$/, async (permission) => {

    await entitlementPage.clickOnSaveButton();
    await staticWait(1000)
    await expect(await entitlementPage.VerifyPermission(permission)).to.equal(true,'Permission is added');
   //await entitlementPage.VerifyPermission(permission);

});
When(/^User click on Edit button$/, async () => {

    await entitlementPage.clickOnEditButton();

});

When(/^User click on save button and Verify not added "([^"]*)?"$/, async (permission) => {

    await entitlementPage.clickOnSaveButton();
    await expect(await entitlementPage.VerifyPermission(permission)).to.equal(false,'Permission is not added');
   

});

When(/^User click on cancel button and Verify not added "([^"]*)?"$/, async (permission) => {

    await entitlementPage.clickOnCancelButton();
    await expect(await entitlementPage.VerifyPermission(permission)).to.equal(false,'Permission is not added');
   
    //await entitlementPage.VerifyNotAddedPermission(permission);

});
Then(/^User removes "([^"]*)?"$/, async (permission) => {

    await entitlementPage.deSelectCheckBox(permission);
});


When(/^User click on edit button and Verify "([^"]*)?"$/, async (permission) => {

    await entitlementPage.clickOnEditButton();
    await expect(await entitlementPage.VerifyPermission(permission)).to.equal(true,'Permission is added');


});
When(/^User click on save button and Verify "([^"]*)?" removed$/, async (permission) => {

    await entitlementPage.clickOnSaveButton();
    await waitForObject(element(by.xpath("//th[contains(text(),'Permissions')]")))
    await expect(await entitlementPage.VerifyPermission(permission)).to.equal(false,'Permission is added');
    //await entitlementPage.VerifyRemovePermission(permission);

});
Then(/^User expects that the Roles and Permissions section is displayed$/, async () => {
    //await entitlementPage.verifyRolesAndPermissionSection();
    await expect(await entitlementPage.verifyRolesAndPermissionSection()).to.equal(true,'RolesAndPermissionSection is displayed');
});
When(/^User clicks on details od rolename$/, async (rol) => {
    await entitlementPage.verifymultiplecheckbox();
})
When(/^User log in with "([^"]*)?" and "([^"]*)?" and navigates to Roles and Permission Page$/, async (userName, password) => {

    return await loginPage.txtUsername.isDisplayed()
        .then(
            async (isDisplayed) => {
                await loginPage.loginToApplication(userName, password)
                await waitForObject(loginPage.logoutBtn)
                await loginPage.verifyLoginPageTitle("Dashboard – dataVISION")
                await dasboardPage.VerifyRolesAndPermission();
                return true;
            },
            async (isDisplayed) => {
                await loginPage.clickOnDataVisionLogo();
                await dasboardPage.VerifyRolesAndPermission();
                return false;
            });

});

When(/^User delete role permanently$/, async () => {
    await entitlementPage.DeleteRolePerm();
})
When(/^User click on Edit button and select multiple$/, async () => {
    //await entitlementPage.verifyPermissionSave(permission)
    await entitlementPage.clickOnEditButton();
    //await entitlementPage.multipleSelect();
});

Then(/^User expects that "([^"]*)?" link is displayed on Admin page$/, async (linkName) => {
    await dasboardPage.clickOnAdminButton();
    await staticWait(3000);
    expect(await entitlementPage.verifyLink(linkName)).to.equal(true, 'Link is not displayed')
    await loginPage.clickOnLogOut();
});

Then(/^User expects that "([^"]*)?" link is not displayed$/, async (linkName) => {
    await dasboardPage.clickOnAdminButton();
    await staticWait(3000)
    expect(await entitlementPage.verifyLink(linkName)).to.equal(false, 'Link is displayed')
    await loginPage.clickOnLogOut();
});

When(/^User click on Contact link$/, async () => {
    await waitForObject(loginPage.logoutBtn);
    await staticWait(3000)
    await moveToElement(entitlementPage.ContactHovertab)
    await staticWait(2000)
    await clickElement(entitlementPage.contactDirectory)
    await staticWait(3000)
    // await isElementPresent(entitlementPage.searchlink);
}); 
Then(/^User expects that search link on the Contacts page$/, async ()=> {
    await entitlementPage.verifySearchTextBox();
});

Then(/^User expects that "([^"]*)?" link is displayed on Commissions Page$/, async (linkName) => {
   await waitForObject(entitlementPage.ComisInterpreterslink)
    expect(await entitlementPage.verifyLink(linkName)).to.equal(true,'Link is displayed')
   
    await clickElement(loginPage.logoutBtn)
    await waitForObject(loginPage.txtUsername)
         
});
When(/^User click on Commissions link$/, async () => {
  
    await staticWait(3000);
    await moveToElement(entitlementPage.ToolsTab)
    await clickElement(entitlementPage.ToolsTab)
    await moveToElement(entitlementPage.comissionslink)
    await clickElement(entitlementPage.comissionslink)
    await waitForObject(loginPage.logoutBtn);
    await staticWait(3000);
}); 
Then(/^User expects that "([^"]*)?" link is not displayed on Commissions Page$/, async (linkName) => {
    await staticWait(3000);
   expect(await entitlementPage.verifyLink(linkName)).to.equal(false,'Link is not displayed')
   await waitForObject(loginPage.logoutBtn);
   await clickElement(loginPage.logoutBtn)
   await waitForObject(loginPage.txtUsername)
});
Then(/^User expects that "([^"]*)?" link is displayed under the Resources Menu$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn)
    await moveToElement(entitlementPage.ResourcesTab);
    await staticWait(3000)
    await clickElement(entitlementPage.ResourcesTab);
    await expect(await entitlementPage.verifyLink(linkName)).to
        .equal(true, linkName + 'Link is displayed');
  
    await clickElement(loginPage.logoutBtn)
    await waitForObject(loginPage.txtUsername)       
});
Then(/^User expects that "([^"]*)?" link is not displayed under the Resources Menu$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await moveToElement(entitlementPage.ResourcesTab);
    await clickElement(entitlementPage.ResourcesTab);
    await staticWait(3000)
    
    // expect(isElementPresent(entitlementPage.cfsenggbloglink).equals(false, linkName + 'Link is not displayed'));
    await expect(await entitlementPage.verifyLink(linkName)).to
        .equal(false, linkName + 'Link is not displayed');
        await waitForObject(loginPage.logoutBtn);
        await clickElement(loginPage.logoutBtn)
        await staticWait(2000)
        await waitForObject(loginPage.txtUsername) 
});
Then(/^User expects that "([^"]*)?" link is displayed under the Tools Menu$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn)
    await moveToElement(entitlementPage.ToolsTab);
    await clickElement(entitlementPage.ToolsTab);
    await staticWait(3000)
    //await entitlementPage.mousehoverandverifylink(entitlementPage.ResourcesTab,entitlementPage.cfsenggbloglink)
    await expect(await entitlementPage.verifyLink(linkName)).to
        .equal(true, linkName + 'Link is displayed');
    //await waitForObject(loginPage.logoutBtn);     
  
});
Then(/^User expects that "([^"]*)?" link is not displayed under the Tools Menu$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await moveToElement(entitlementPage.ToolsTab);
    await clickElement(entitlementPage.ToolsTab);
    await staticWait(3000)
    // expect(isElementPresent(entitlementPage.cfsenggbloglink).equals(false, linkName + 'Link is not displayed'));
    await expect(await entitlementPage.verifyLink(linkName)).to
        .equal(false, linkName + 'Link is not displayed');
        await clickElement(loginPage.logoutBtn)
        await waitForObject(loginPage.txtUsername)
});

When(/^User clicks on "([^"]*)?"$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    //await moveToElement(entitlementPage.ToolsTab)
    await entitlementPage.mousehoverandclicklink(entitlementPage.senmydoclink,entitlementPage.senmydoclink);
    
});
When(/^User clicks on "([^"]*)?" link$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await moveToElement(entitlementPage.Usersettings);
    await clickElement(entitlementPage.Usersettings);
    
});

Then(/^User expects that Set Up Client Scanner tab is displayed on the SendMyDocs page$/, async () => {
   await waitForObject(entitlementPage.setupclientscanner)
   expect(await entitlementPage.verifyLink('Set Up Client Scanner')).to.equal(true,'Link is displayed')
   await clickElement(loginPage.logoutBtn)
   await waitForObject(loginPage.txtUsername)
});

Then(/^User expects that Set Up Client Scanner is not displayed on the SendMyDocs page$/, async () => {
    await waitForObject(loginPage.logoutBtn)
    expect(await entitlementPage.verifyLink('Set Up Client Scanner')).to.equal(false,'Link is not displayed')
    await clickElement(loginPage.logoutBtn)
    await waitForObject(loginPage.txtUsername)
 });

 Then(/^User expects that Update Profile is displayed on the User Settings page$/, async () => {
    await waitForObject(loginPage.logoutBtn)
    expect(await entitlementPage.verifyLink('Update Profile')).to.equal(true,'Link is displayed')
    await clickElement(loginPage.logoutBtn)
    await waitForObject(loginPage.txtUsername)
 });
 Then(/^User expects that "([^"]*)?" link is displayed under the Username Menu$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await moveToElement(entitlementPage.UserTab);
    await clickElement(entitlementPage.UserTab);
    
    expect(await entitlementPage.verifyLink(linkName)).to.equal(true,'Link is displayed')
});

Then(/^User expects that "([^"]*)?" link is not displayed under the Username Menu$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await moveToElement(entitlementPage.UserTab);
    await clickElement(entitlementPage.UserTab);
    expect(await entitlementPage.verifyLink(linkName)).to.equal(false,'Link is not displayed')
    await waitForObject(loginPage.logoutBtn);
    await staticWait(2000)
    await clickElement(loginPage.logoutBtn)
    await waitForObject(loginPage.txtUsername)
});

Then(/^User expects that "([^"]*)?" link is displayed on the Contact page$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await entitlementPage.clickOnUserName(linkName)
    await waitForObject(entitlementPage.Summeryele)
});
Then(/^User expects that "([^"]*)?" link is not displayed on the dashboard page$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await waitForObject(entitlementPage.ContactHovertab)
});

Then(/^User expects that "([^"]*)?" link is notdisplayed on contact page$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await expect(await entitlementPage.verifyLink(linkName)).to
    .equal(true, linkName + 'Link is not displayed'); 
});

Then(/^User expects that "([^"]*)?" link is displayed on contact page$/, async (linkName) => {
    await waitForObject(loginPage.logoutBtn);
    await expect(await entitlementPage.verifyLink(linkName)).to
    .equal(true, linkName + 'Link is displayed'); 
});
When(/^Admin user enters a string on the "([^"]*)?" section under Roles$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)
    
    await entitlementPage.EnterString(role,entitlementPage.rolesfiltertxt)
    
});

Then(/^Roles matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Roles section$/, async (role) => {
    
await console.log(await entitlementPage.verifyRoleNameFilter(role)+"is value in")
    expect(await entitlementPage.verifyRoleNameFilter(role)).to.equal(true,'Roles names matched');
});
When(/^Admin user enters a string on the "([^"]*)?" section under Permissions$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)
    
    await entitlementPage.EnterString(role,entitlementPage.PermissionsFiltertxt)
    
});

Then(/^Permissions matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Roles section$/, async (role) => {
    
await console.log(await entitlementPage.verifyPermissionFilter(role)+"is value in")
    expect(await entitlementPage.verifyPermissionFilter(role)).to.equal(true,'Roles names matched');
});
When(/^Admin User clicks on Details button against a "([^"]*)?"$/, async (role) => {
    await entitlementPage.verifyAndClickOnDetails(role);
});
Then(/^Admin User is navigated to the Role Detail Page of the corresponding "([^"]*)?"$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)
    await loginPage.verifyLoginPageTitle("Roles & Permissions – dataVISION");
});
When(/^Admin user enters a string on the "([^"]*)?" section under Users Assigned This Role$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.UsersFiltertxt) 
});

Then(/^Users matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Users Assigned This Role section$/, async (role) => {    
await console.log(await entitlementPage.verifyUsersFilter(role)+"is value in")
    expect(await entitlementPage.verifyUsersFilter(role)).to.equal(true,'Roles names matched');
});

When(/^Admin user enters a string on the "([^"]*)?" section under Permissions This Role Grants section$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.PermissionsFiltertxt) 
});

Then(/^Permissions matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Permissions This Role Grants section$/, async (role) => {    

   await expect(await entitlementPage.verifyPermissionFilter(role)).to.equal(true,'Roles names matched');
   await staticWait(2000)
});
Then(/^Admin User is navigated to the Permission Detail Page of the corresponding "([^"]*)?"$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)
    await loginPage.verifyLoginPageTitle("Roles & Permissions – dataVISION");
});
When(/^Admin user enters a string on the "([^"]*)?" section under Users Granted This Permission section$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.UsersFiltertxt) 
});

Then(/^Users matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Users Granted This Permission section$/, async (role) => {    
await console.log(await entitlementPage.verifyUsersFilter(role)+"is value in")
    expect(await entitlementPage.verifyUsersFilter(role)).to.equal(true,'Roles names matched');
});
When(/^Admin user enters a string on the "([^"]*)?" section under Roles That Grant This Permission section$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.rolesfiltertxt) 
});

Then(/^Roles matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Users Assigned This Role section$/, async (role) => {    
await console.log(await entitlementPage.verifyRoleNameFilter(role)+"is value in")
    expect(await entitlementPage.verifyRoleNameFilter(role)).to.equal(true,'Roles names matched');
});
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Roles$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)
    
    await entitlementPage.EnterString(role,entitlementPage.rolesfiltertxt)
    
});

Then(/^No Roles should be displayed by "([^"]*)?" in the Roles section$/, async (role) => {
    
await console.log(await entitlementPage.verifyRoleNameFilter(role)+"is value in")
    expect(await entitlementPage.verifyRoleNameFilter(role)).to.equal(false,'Roles names matched');
});
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Permissions$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.PermissionsFiltertxt)   
});
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Users Assigned This Role$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.UsersFiltertxt) 
});

Then(/^No Users should be displayed by "([^"]*)?" in the Users Assigned This Role section$/, async (role) => {    
await console.log(await entitlementPage.verifyUsersFilter(role)+"is value in")
    expect(await entitlementPage.verifyUsersFilter(role)).to.equal(false,'Roles names matched');
});
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Permissions This Role Grants section$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.PermissionsFiltertxt) 
});

Then(/^No Permissions should be displayed by "([^"]*)?" in the Permissions This Role Grants section$/, async (role) => {    

   await expect(await entitlementPage.verifyPermissionFilter(role)).to.equal(false,'Roles names matched');
   await staticWait(2000)
});
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Users Granted This Permission section$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.UsersFiltertxt) 
});

Then(/^No Users should be displayed by "([^"]*)?" in the Users Granted This Permission section$/, async (role) => {    
await console.log(await entitlementPage.verifyUsersFilter(role)+"is value in")
    expect(await entitlementPage.verifyUsersFilter(role)).to.equal(false,'Roles names matched');
});
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Roles That Grant This Permission section$/, async (role) => {
    await waitForObject(loginPage.logoutBtn)  
    await entitlementPage.EnterString(role,entitlementPage.rolesfiltertxt) 
});

Then(/^No Roles should be displayed by "([^"]*)?" in the Users Assigned This Role section$/, async (role) => {    
await console.log(await entitlementPage.verifyRoleNameFilter(role)+"is value in")
    expect(await entitlementPage.verifyRoleNameFilter(role)).to.equal(false,'Roles names matched');
})
Then(/^User expects that search textbox on the dashboard$/, async () => {
    await staticWait(3000)
    expect(await entitlementPage.verifyGlobalSearchTexbox()).
        to.equal(true, 'Search textbox is not displayed')
    expect(await entitlementPage.verifyGlobalSearchBtn()).
        to.equal(true, 'Search button is not displayed')
});

Then(/^User expects that search textbox is not displayed$/, async () => {
    await staticWait(3000)
    expect(await entitlementPage.verifySearchTextBox()).
        to.equal(false, 'Search textbox is displayed')
    expect(await entitlementPage.verifyGlobalSearchBtn()).
        to.equal(false, 'Search button is displayed')
});
When(/^User clicks on Settings$/, async () => {
    await  entitlementPage.clickOnSettngsLink();
    await moveToElement(loginPage.logoutBtn);
});
When(/^User clicks on User Setup$/, async () => {
  
    await entitlementPage.clickOnUserSetup();
  
});