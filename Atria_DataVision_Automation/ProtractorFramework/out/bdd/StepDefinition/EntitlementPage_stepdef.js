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
const protractor_1 = require("protractor");
const { BeforeAll, Before, After, Status, defineSupportCode, setDefaultTimeout } = require("cucumber");
const clickElement_1 = require("../../uiActions/mouseActions/clickElement");
const EntitlementPage_1 = require("../Pages/EntitlementPage");
const DashBoardPage_1 = require("../Pages/DashBoardPage");
const LoginPage_1 = require("../Pages/LoginPage");
const waitActions_1 = require("../../uiActions/waitActions/waitActions");
const moveToElement_1 = require("../../uiActions/mouseActions/moveToElement");
const UserSetupPage_1 = require("../Pages/UserSetupPage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let status;
let entitlementPage = new EntitlementPage_1.EntitlementPage();
let loginPage = new LoginPage_1.LoginPage();
let dasboardPage = new DashBoardPage_1.DashBoardPage();
let userSetuppage = new UserSetupPage_1.UserSetupPage();
//////////////////////////////      Hardik  /////////////////////////////////////////////
When(/^User clicks on the add user button and verifies the search textbox is displyed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnAddUserButton();
    yield waitActions_1.staticWait(3000);
    expect(yield entitlementPage.verifySearchTextBox())
        .to.equal(true, 'Search text box not displayed');
}));
When(/^User enters "([^"]*)?" in the search text box$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.enterUserName(userName);
    yield entitlementPage.clickOnSearchButton();
    yield waitActions_1.staticWait(5000);
}));
When(/^User selects "([^"]*)?" from the list$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.selectUser(userName);
}));
When(/^User clicks on Add selected user button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnAddSelectedUserButton();
}));
Then(/^User expects that "([^"]*)?" is added successfully$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    expect(yield entitlementPage.verifyUserAdded(userName)).to.equal(true, 'User not added to role');
}));
Then(/^User expects that "([^"]*)?" is not added$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield console.log(yield entitlementPage.verifyUserAdded(userName));
    yield expect(yield entitlementPage.verifyUserAdded(userName)).to.equal(false, 'User added to role');
}));
Then(/^User expect that names with matching text is displayed$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyUserName(userName)) + "is value in");
    expect(yield entitlementPage.verifyUserName(userName)).to.equal(true, 'User names did not matched');
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
    yield console.log((yield entitlementPage.verifyUserName(userName)) + "is value in");
    expect(yield entitlementPage.verifyUserName(userName)).to.equal(true, 'User names did not matched');
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
Then(/^User expects that the "([^"]*)?" is not assigned to the role$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield console.log(yield entitlementPage.verifyUserAdded(userName));
    yield expect(yield entitlementPage.verifyUserAdded(userName)).to.equal(false, 'User added to role');
}));
Then(/^User expects that the User details page is displayed of "([^"]*)?"$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyUserProfile(userName);
}));
When(/^User clicks on view button for "([^"]*)?"$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyAndClickOnView(userName);
}));
Then(/^User expects that the Classic user ownerships section is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    //await entitlementPage.verifyClassicUserOwnerships();
    yield expect(yield entitlementPage.verifyClassicUserOwnerships()).to.equal(true, 'ClassicUserOwnerships is present');
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
    yield expect(yield entitlementPage.verifyRoleName()).to.equal(true, 'Rolename is present');
    // await entitlementPage.verifyRoleName();
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
    yield expect(yield entitlementPage.verifyRoleName()).to.equal(false, 'Rolename is present');
    //await entitlementPage.verifyRoleNotPresent();
}));
Then(/^User expects that user role and permission column should display$/, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(yield entitlementPage.verifyRoleandPermissionColumn()).to.equal(true, 'RoleandPermissionColumn is not present');
    // await entitlementPage.verifyRoleandPermissionColumn();
}));
When(/^User clicks on details of role and verify role and permission column should display$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.ClickOnDetails();
    yield expect(yield entitlementPage.verifyRoleandPermissionColumn()).to.equal(true, 'Rolename is present');
    //await entitlementPage.verifyRoleandPermissionColumn();
}));
When(/^User click on Edit button and select "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    //await entitlementPage.verifyPermissionSave(permission)
    yield entitlementPage.clickOnEditButton();
    yield entitlementPage.SelectCheckBox(permission);
}));
When(/^User click on save button and Verify newly added "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnSaveButton();
    yield waitActions_1.staticWait(1000);
    yield expect(yield entitlementPage.VerifyPermission(permission)).to.equal(true, 'Permission is added');
    //await entitlementPage.VerifyPermission(permission);
}));
When(/^User click on Edit button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnEditButton();
}));
When(/^User click on save button and Verify not added "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnSaveButton();
    yield expect(yield entitlementPage.VerifyPermission(permission)).to.equal(false, 'Permission is not added');
}));
When(/^User click on cancel button and Verify not added "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnCancelButton();
    yield expect(yield entitlementPage.VerifyPermission(permission)).to.equal(false, 'Permission is not added');
    //await entitlementPage.VerifyNotAddedPermission(permission);
}));
Then(/^User removes "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.deSelectCheckBox(permission);
}));
When(/^User click on edit button and Verify "([^"]*)?"$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnEditButton();
    yield expect(yield entitlementPage.VerifyPermission(permission)).to.equal(true, 'Permission is added');
}));
When(/^User click on save button and Verify "([^"]*)?" removed$/, (permission) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnSaveButton();
    yield waitActions_1.waitForObject(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Permissions')]")));
    yield expect(yield entitlementPage.VerifyPermission(permission)).to.equal(false, 'Permission is added');
    //await entitlementPage.VerifyRemovePermission(permission);
}));
Then(/^User expects that the Roles and Permissions section is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    //await entitlementPage.verifyRolesAndPermissionSection();
    yield expect(yield entitlementPage.verifyRolesAndPermissionSection()).to.equal(true, 'RolesAndPermissionSection is displayed');
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
    yield dasboardPage.clickOnAdminButton();
    yield waitActions_1.staticWait(3000);
    expect(yield entitlementPage.verifyLink(linkName)).to.equal(true, 'Link is not displayed');
    yield loginPage.clickOnLogOut();
}));
Then(/^User expects that "([^"]*)?" link is not displayed$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield dasboardPage.clickOnAdminButton();
    yield waitActions_1.staticWait(3000);
    expect(yield entitlementPage.verifyLink(linkName)).to.equal(false, 'Link is displayed');
    yield loginPage.clickOnLogOut();
}));
When(/^User click on Contact link$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield waitActions_1.staticWait(3000);
    yield moveToElement_1.moveToElement(entitlementPage.ContactHovertab);
    yield waitActions_1.staticWait(2000);
    yield clickElement_1.clickElement(entitlementPage.contactDirectory);
    yield waitActions_1.staticWait(3000);
    // await isElementPresent(entitlementPage.searchlink);
}));
Then(/^User expects that search link on the Contacts page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifySearchTextBox();
}));
Then(/^User expects that "([^"]*)?" link is displayed on Commissions Page$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(entitlementPage.ComisInterpreterslink);
    expect(yield entitlementPage.verifyLink(linkName)).to.equal(true, 'Link is displayed');
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
When(/^User click on Commissions link$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield moveToElement_1.moveToElement(entitlementPage.ToolsTab);
    yield clickElement_1.clickElement(entitlementPage.ToolsTab);
    yield moveToElement_1.moveToElement(entitlementPage.comissionslink);
    yield clickElement_1.clickElement(entitlementPage.comissionslink);
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield waitActions_1.staticWait(3000);
}));
Then(/^User expects that "([^"]*)?" link is not displayed on Commissions Page$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield entitlementPage.verifyLink(linkName)).to.equal(false, 'Link is not displayed');
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
Then(/^User expects that "([^"]*)?" link is displayed under the Resources Menu$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield moveToElement_1.moveToElement(entitlementPage.ResourcesTab);
    yield waitActions_1.staticWait(3000);
    yield clickElement_1.clickElement(entitlementPage.ResourcesTab);
    yield expect(yield entitlementPage.verifyLink(linkName)).to
        .equal(true, linkName + 'Link is displayed');
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
Then(/^User expects that "([^"]*)?" link is not displayed under the Resources Menu$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield moveToElement_1.moveToElement(entitlementPage.ResourcesTab);
    yield clickElement_1.clickElement(entitlementPage.ResourcesTab);
    yield waitActions_1.staticWait(3000);
    // expect(isElementPresent(entitlementPage.cfsenggbloglink).equals(false, linkName + 'Link is not displayed'));
    yield expect(yield entitlementPage.verifyLink(linkName)).to
        .equal(false, linkName + 'Link is not displayed');
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.staticWait(2000);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
Then(/^User expects that "([^"]*)?" link is displayed under the Tools Menu$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield moveToElement_1.moveToElement(entitlementPage.ToolsTab);
    yield clickElement_1.clickElement(entitlementPage.ToolsTab);
    yield waitActions_1.staticWait(3000);
    //await entitlementPage.mousehoverandverifylink(entitlementPage.ResourcesTab,entitlementPage.cfsenggbloglink)
    yield expect(yield entitlementPage.verifyLink(linkName)).to
        .equal(true, linkName + 'Link is displayed');
    //await waitForObject(loginPage.logoutBtn);     
}));
Then(/^User expects that "([^"]*)?" link is not displayed under the Tools Menu$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield moveToElement_1.moveToElement(entitlementPage.ToolsTab);
    yield clickElement_1.clickElement(entitlementPage.ToolsTab);
    yield waitActions_1.staticWait(3000);
    // expect(isElementPresent(entitlementPage.cfsenggbloglink).equals(false, linkName + 'Link is not displayed'));
    yield expect(yield entitlementPage.verifyLink(linkName)).to
        .equal(false, linkName + 'Link is not displayed');
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
When(/^User clicks on "([^"]*)?"$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    //await moveToElement(entitlementPage.ToolsTab)
    yield entitlementPage.mousehoverandclicklink(entitlementPage.senmydoclink, entitlementPage.senmydoclink);
}));
When(/^User clicks on "([^"]*)?" link$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield moveToElement_1.moveToElement(entitlementPage.Usersettings);
    yield clickElement_1.clickElement(entitlementPage.Usersettings);
}));
Then(/^User expects that Set Up Client Scanner tab is displayed on the SendMyDocs page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(entitlementPage.setupclientscanner);
    expect(yield entitlementPage.verifyLink('Set Up Client Scanner')).to.equal(true, 'Link is displayed');
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
Then(/^User expects that Set Up Client Scanner is not displayed on the SendMyDocs page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    expect(yield entitlementPage.verifyLink('Set Up Client Scanner')).to.equal(false, 'Link is not displayed');
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
Then(/^User expects that Update Profile is displayed on the User Settings page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    expect(yield entitlementPage.verifyLink('Update Profile')).to.equal(true, 'Link is displayed');
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
Then(/^User expects that "([^"]*)?" link is displayed under the Username Menu$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield moveToElement_1.moveToElement(entitlementPage.UserTab);
    yield clickElement_1.clickElement(entitlementPage.UserTab);
    expect(yield entitlementPage.verifyLink(linkName)).to.equal(true, 'Link is displayed');
}));
Then(/^User expects that "([^"]*)?" link is not displayed under the Username Menu$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield moveToElement_1.moveToElement(entitlementPage.UserTab);
    yield clickElement_1.clickElement(entitlementPage.UserTab);
    expect(yield entitlementPage.verifyLink(linkName)).to.equal(false, 'Link is not displayed');
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield waitActions_1.staticWait(2000);
    yield clickElement_1.clickElement(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
Then(/^User expects that "([^"]*)?" link is displayed on the Contact page$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.clickOnUserName(linkName);
    yield waitActions_1.waitForObject(entitlementPage.Summeryele);
}));
Then(/^User expects that "([^"]*)?" link is not displayed on the dashboard page$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield waitActions_1.waitForObject(entitlementPage.ContactHovertab);
}));
Then(/^User expects that "([^"]*)?" link is notdisplayed on contact page$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield expect(yield entitlementPage.verifyLink(linkName)).to
        .equal(true, linkName + 'Link is not displayed');
}));
Then(/^User expects that "([^"]*)?" link is displayed on contact page$/, (linkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield expect(yield entitlementPage.verifyLink(linkName)).to
        .equal(true, linkName + 'Link is displayed');
}));
When(/^Admin user enters a string on the "([^"]*)?" section under Roles$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.rolesfiltertxt);
}));
Then(/^Roles matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Roles section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyRoleNameFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyRoleNameFilter(role)).to.equal(true, 'Roles names matched');
}));
When(/^Admin user enters a string on the "([^"]*)?" section under Permissions$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.PermissionsFiltertxt);
}));
Then(/^Permissions matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Roles section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyPermissionFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyPermissionFilter(role)).to.equal(true, 'Roles names matched');
}));
When(/^Admin User clicks on Details button against a "([^"]*)?"$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyAndClickOnDetails(role);
}));
Then(/^Admin User is navigated to the Role Detail Page of the corresponding "([^"]*)?"$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield loginPage.verifyLoginPageTitle("Roles & Permissions – dataVISION");
}));
When(/^Admin user enters a string on the "([^"]*)?" section under Users Assigned This Role$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.UsersFiltertxt);
}));
Then(/^Users matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Users Assigned This Role section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyUsersFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyUsersFilter(role)).to.equal(true, 'Roles names matched');
}));
When(/^Admin user enters a string on the "([^"]*)?" section under Permissions This Role Grants section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.PermissionsFiltertxt);
}));
Then(/^Permissions matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Permissions This Role Grants section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield expect(yield entitlementPage.verifyPermissionFilter(role)).to.equal(true, 'Roles names matched');
    yield waitActions_1.staticWait(2000);
}));
Then(/^Admin User is navigated to the Permission Detail Page of the corresponding "([^"]*)?"$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield loginPage.verifyLoginPageTitle("Roles & Permissions – dataVISION");
}));
When(/^Admin user enters a string on the "([^"]*)?" section under Users Granted This Permission section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.UsersFiltertxt);
}));
Then(/^Users matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Users Granted This Permission section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyUsersFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyUsersFilter(role)).to.equal(true, 'Roles names matched');
}));
When(/^Admin user enters a string on the "([^"]*)?" section under Roles That Grant This Permission section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.rolesfiltertxt);
}));
Then(/^Roles matching the entered string should be auto-filtered by "([^"]*)?" and displayed in the Users Assigned This Role section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyRoleNameFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyRoleNameFilter(role)).to.equal(true, 'Roles names matched');
}));
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Roles$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.rolesfiltertxt);
}));
Then(/^No Roles should be displayed by "([^"]*)?" in the Roles section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyRoleNameFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyRoleNameFilter(role)).to.equal(false, 'Roles names matched');
}));
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Permissions$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.PermissionsFiltertxt);
}));
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Users Assigned This Role$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.UsersFiltertxt);
}));
Then(/^No Users should be displayed by "([^"]*)?" in the Users Assigned This Role section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyUsersFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyUsersFilter(role)).to.equal(false, 'Roles names matched');
}));
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Permissions This Role Grants section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.PermissionsFiltertxt);
}));
Then(/^No Permissions should be displayed by "([^"]*)?" in the Permissions This Role Grants section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield expect(yield entitlementPage.verifyPermissionFilter(role)).to.equal(false, 'Roles names matched');
    yield waitActions_1.staticWait(2000);
}));
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Users Granted This Permission section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.UsersFiltertxt);
}));
Then(/^No Users should be displayed by "([^"]*)?" in the Users Granted This Permission section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyUsersFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyUsersFilter(role)).to.equal(false, 'Roles names matched');
}));
When(/^Admin user enters a invalid string on the "([^"]*)?" section under Roles That Grant This Permission section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield entitlementPage.EnterString(role, entitlementPage.rolesfiltertxt);
}));
Then(/^No Roles should be displayed by "([^"]*)?" in the Users Assigned This Role section$/, (role) => __awaiter(this, void 0, void 0, function* () {
    yield console.log((yield entitlementPage.verifyRoleNameFilter(role)) + "is value in");
    expect(yield entitlementPage.verifyRoleNameFilter(role)).to.equal(false, 'Roles names matched');
}));
Then(/^User expects that search textbox on the dashboard$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield entitlementPage.verifyGlobalSearchTexbox()).
        to.equal(true, 'Search textbox is not displayed');
    expect(yield entitlementPage.verifyGlobalSearchBtn()).
        to.equal(true, 'Search button is not displayed');
}));
Then(/^User expects that search textbox is not displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield entitlementPage.verifySearchTextBox()).
        to.equal(false, 'Search textbox is displayed');
    expect(yield entitlementPage.verifyGlobalSearchBtn()).
        to.equal(false, 'Search button is displayed');
}));
When(/^User clicks on Settings$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnSettngsLink();
    yield moveToElement_1.moveToElement(loginPage.logoutBtn);
}));
When(/^User clicks on User Setup$/, () => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.clickOnUserSetup();
}));
