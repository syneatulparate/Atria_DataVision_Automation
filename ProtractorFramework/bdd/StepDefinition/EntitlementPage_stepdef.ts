import { browser, protractor, element, ExpectedConditions } from "protractor";
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue"
import { isVisible } from "../../uiActions/verifyActions/isVisible"

import { ForgotPasswordPage } from "../Pages/ForgotPasswordPage";

import { EntitlementPage } from "../Pages/EntitlementPage";
import { DashBoardPage } from "../Pages/DashBoardPage";
import { alertAccept, alertDismiss } from "../../uiActions/alertActions/alertAction";
import { LoginPage } from "../Pages/LoginPage";
import { waitForObject } from "../../uiActions/waitActions/waitActions";



const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let entitlementPage: EntitlementPage = new EntitlementPage();
let loginPage: LoginPage = new LoginPage();
let dasboardPage: DashBoardPage = new DashBoardPage();


//////////////////////////////      Hardik  /////////////////////////////////////////////
When(/^User clicks on the add user button and verifies the search textbox is displyed$/, async () => {
    await entitlementPage.clickOnAddUserButton();
    await entitlementPage.verifySearchTextBox();
});

When(/^User enters "([^"]*)?" in the search text box$/, async (userName) => {
    await entitlementPage.enterUserName(userName);
});

Then(/^User expect that names with matching text is displayed$/, async (userName) => {
    await entitlementPage.verifyUserName(userName);
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
    await entitlementPage.verifyUserName(userName);
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

Then(/^User expects that the removed user is not assigned to the role$/, function (callback) {

});

Then(/^User expects that the User details page is displayed of "([^"]*)?"$/, async (userName) => {
    await entitlementPage.verifyUserProfile(userName);
});

When(/^User clicks on view button for "([^"]*)?"$/, async (userName) => {
    await entitlementPage.verifyAndClickOnView(userName);
});

Then(/^User expects that the Classic user ownerships section is displayed$/, async () => {
    await entitlementPage.verifyClassicUserOwnerships();
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

    await entitlementPage.verifyRoleName();

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

    await entitlementPage.verifyRoleNotPresent();

});

Then(/^User expects that user role and permission column should display$/, async () => {

    await entitlementPage.verifyRoleandPermissionColumn();

});
When(/^User clicks on details of role and verify role and permission column should display$/, async () => {
    await entitlementPage.ClickOnDetails();
    await entitlementPage.verifyRoleandPermissionColumn();

});

When(/^User click on Edit button and select "([^"]*)?"$/, async (permission) => {
    //await entitlementPage.verifyPermissionSave(permission)
    await entitlementPage.clickOnEditButton();
    await entitlementPage.SelectCheckBox(permission);
});
When(/^User click on save button and Verify newly added "([^"]*)?"$/, async (permission) => {

    await entitlementPage.clickOnSaveButton();
    await entitlementPage.VerifyPermission(permission);

});
When(/^User click on Edit button$/, async () => {

    await entitlementPage.clickOnEditButton();

});

When(/^User click on save button and Verify not added "([^"]*)?"$/, async (permission) => {

    await entitlementPage.clickOnSaveButton();
    await entitlementPage.VerifyNotAddedPermission(permission);

});

When(/^User click on cancel button and Verify not added "([^"]*)?"$/, async (permission) => {

    await entitlementPage.clickOnCancelButton();
    await entitlementPage.VerifyNotAddedPermission(permission);

});
Then(/^User removes "([^"]*)?"$/, async (permission) => {

    await entitlementPage.SelectCheckBox(permission);
});


When(/^User click on edit button and Verify "([^"]*)?"$/, async (permission) => {

    await entitlementPage.clickOnEditButton();
    await entitlementPage.VerifyPermission(permission);

});
When(/^User click on save button and Verify "([^"]*)?" removed$/, async (permission) => {

    await entitlementPage.clickOnSaveButton();
    await entitlementPage.VerifyRemovePermission(permission);

});
Then(/^User expects that the Roles and Permissions section is displayed$/, async () => {
    await entitlementPage.verifyRolesAndPermissionSection();
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
    expect(await entitlementPage.verifyLink(linkName)).to
        .equal(true, linkName + 'Link is displayed');       
});

Then(/^User expects that "([^"]*)?" link is not displayed$/, async (linkName) => {
    await dasboardPage.clickOnAdminButton();
    expect(await entitlementPage.verifyLink(linkName)).to
        .equal(false, linkName + 'Link is not displayed');
});