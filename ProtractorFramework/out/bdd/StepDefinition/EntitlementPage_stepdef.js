"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntitlementPage_1 = require("../Pages/EntitlementPage");
const DashBoardPage_1 = require("../Pages/DashBoardPage");
const LoginPage_1 = require("../Pages/LoginPage");
const waitActions_1 = require("../../uiActions/waitActions/waitActions");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let entitlementPage = new EntitlementPage_1.EntitlementPage();
let loginPage = new LoginPage_1.LoginPage();
let dasboardPage = new DashBoardPage_1.DashBoardPage();
//////////////////////////////      Hardik  /////////////////////////////////////////////
When(/^User clicks on the add user button and verifies the search textbox is displyed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnAddUserButton();
    yield entitlementPage.verifySearchTextBox();
}));
When(/^User enters "([^"]*)?" in the search text box$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.enterUserName(userName);
}));
Then(/^User expect that names with matching text is displayed$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyUserName(userName);
}));
When(/^User deletes role from the system permanently$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.deleteRoleAndAccept();
}));
When(/^User Cancel the role Deletion$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.CancelDeleteRole();
    //await entitlementPage.deleteRoleAndDismiss();
}));
Then(/^User expects that the role is deleted and "([^"]*)?" is displayed$/, (message) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyMessage(message);
    yield entitlementPage.verifyRoleNotPresent();
}));
When(/^User clicks on details of "([^"]*)?" role$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyAndClickOnDetails(role);
}));
Then(/^User expect that name with "([^"]*)?" is displayed$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyUserName(userName);
}));
Then(/^User navigates back to role details page without adding the "([^"]*)?"$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyAddUserButton();
    yield entitlementPage.verifyNoUserPresent(userName);
}));
When(/^User removes "([^"]*)?" from the role$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.removeUser(userName);
}));
When(/^User clicks on Cancel button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnCancelButton();
}));
Then(/^User expects that the removed user is not assigned to the role$/, function (callback) {
});
Then(/^User expects that the User details page is displayed of "([^"]*)?"$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyUserProfile(userName);
}));
When(/^User clicks on view button for "([^"]*)?"$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyAndClickOnView(userName);
}));
Then(/^User expects that the Classic user ownerships section is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyClassicUserOwnerships();
}));
Then(/^User expects that the Classic user read scope section is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyClassicContactReadScope();
}));
Then(/^User expects that the Role details page is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyAddUserButton();
}));
//////////////////////////////////// prajyot       /////////////////////
When(/^User click on newRole button and verifies RoleName field is present$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnNewRole();
    yield entitlementPage.verifyRoleNameField();
}));
When(/^User enters rolename of length "([^"]*)?" and click on createRole button$/, (Rolename) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.enterRoleName(Rolename);
    yield entitlementPage.clickOnCreateRoleButton();
}));
When(/^User enters valid "([^"]*)?" and click on createRole button$/, (Rolename) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.VerifyDuplicateRoleName(Rolename);
    yield entitlementPage.clickOnCreateRoleButton();
}));
Then(/^User expects that rolename is present$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyRoleName();
}));
Then(/^User expect that "([^"]*)?" is displayed on screen$/, (WarnMsg) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyWarningMessage(WarnMsg);
}));
When(/^User enters rolename of length "([^"]*)?"$/, (Rolename) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.EnterRoleName(Rolename);
}));
When(/^User enters rolename of length "([^"]*)?" and click on cancel button$/, (Rolename) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.EnterRoleName(Rolename);
    yield entitlementPage.clickOnCancelButton();
}));
When(/^User enters rolename of length "([^"]*)?" and click on newRole button$/, (Rolename) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.EnterRoleName(Rolename);
    yield entitlementPage.clickOnNewRole();
}));
Then(/^User expects that rolename is not present$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyRoleNotPresent();
}));
Then(/^User expects that user role and permission column should display$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyRoleandPermissionColumn();
}));
When(/^User clicks on details of role and verify role and permission column should display$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.ClickOnDetails();
    yield entitlementPage.verifyRoleandPermissionColumn();
}));
When(/^User click on Edit button and select "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    //await entitlementPage.verifyPermissionSave(permission)
    yield entitlementPage.clickOnEditButton();
    yield entitlementPage.SelectCheckBox(permission);
}));
When(/^User click on save button and Verify newly added "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnSaveButton();
    yield entitlementPage.VerifyPermission(permission);
}));
When(/^User click on Edit button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnEditButton();
}));
When(/^User click on save button and Verify not added "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnSaveButton();
    yield entitlementPage.VerifyNotAddedPermission(permission);
}));
When(/^User click on cancel button and Verify not added "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnCancelButton();
    yield entitlementPage.VerifyNotAddedPermission(permission);
}));
Then(/^User removes "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.SelectCheckBox(permission);
}));
When(/^User click on edit button and Verify "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnEditButton();
    yield entitlementPage.VerifyPermission(permission);
}));
When(/^User click on save button and Verify "([^"]*)?" removed$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnSaveButton();
    yield entitlementPage.VerifyRemovePermission(permission);
}));
Then(/^User expects that the Roles and Permissions section is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyRolesAndPermissionSection();
}));
When(/^User clicks on details od rolename$/, (rol) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifymultiplecheckbox();
}));
When(/^User log in with "([^"]*)?" and "([^"]*)?" and navigates to Roles and Permission Page$/, (userName, password) => __awaiter(this, void 0, void 0, function* () {
    return yield loginPage.txtUsername.isDisplayed()
        .then((isDisplayed) => __awaiter(this, void 0, void 0, function* () {
        yield loginPage.loginToApplication(userName, password);
        yield waitActions_1.waitForObject(loginPage.logoutBtn);
        yield loginPage.verifyLoginPageTitle("Dashboard – dataVISION");
        yield dasboardPage.VerifyRolesAndPermission();
        return true;
    }), (isDisplayed) => __awaiter(this, void 0, void 0, function* () {
        yield loginPage.clickOnDataVisionLogo();
        yield dasboardPage.VerifyRolesAndPermission();
        return false;
    }));
}));
When(/^User delete role permanently$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.DeleteRolePerm();
}));
When(/^User click on Edit button and select multiple$/, () => __awaiter(this, void 0, void 0, function* () {
    //await entitlementPage.verifyPermissionSave(permission)
    yield entitlementPage.clickOnEditButton();
    //await entitlementPage.multipleSelect();
}));
Then(/^User expects that "([^"]*)?" link is displayed on Admin page$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    expect(yield entitlementPage.verifyLink(linkName)).to
        .equal(true, 'Link is displayed');
}));
Then(/^User expects that "([^"]*)?" link is not displayed$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    (yield entitlementPage.verifyLink(linkName)) == false;
}));
