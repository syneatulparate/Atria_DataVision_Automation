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
const EntitlementPage_1 = require("../Pages/EntitlementPage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const { attach } = require("cucumber");
let entitlementPage = new EntitlementPage_1.EntitlementPage();
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
    yield entitlementPage.deleteRoleAndDismiss();
}));
Then(/^User expects that the "([^"]*)?" is deleted and "([^"]*)?" is displayed$/, (role, message) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.verifyMessage(message);
    yield entitlementPage.verifyRoleNotPresent(role);
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
    const screenShot = yield protractor_1.browser.takeScreenshot();
    this.attach(screenShot, "image/png");
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
When(/^User enters valid "([^"]*)?" and click on createRole button$/, (Rolename) => __awaiter(this, void 0, void 0, function* () {
    yield entitlementPage.enterRoleName(Rolename);
    yield entitlementPage.clickOnCreateRoleButton();
}));
