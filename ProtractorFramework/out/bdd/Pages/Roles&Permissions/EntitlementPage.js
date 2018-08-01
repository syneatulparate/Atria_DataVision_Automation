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
const setInputField_1 = require("../../../uiActions/keyboardActions/setInputField");
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
const checkContainsText_1 = require("../../../uiActions/verifyActions/checkContainsText");
const isElementPresent_1 = require("../../../uiActions/verifyActions/isElementPresent");
const alertAction_1 = require("../../../uiActions/alertActions/alertAction");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const moveToElement_1 = require("../../../uiActions/mouseActions/moveToElement");
const checkBoxActions_1 = require("../../../uiActions/mouseActions/checkBoxActions");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class EntitlementPage {
    constructor() {
        /**
         * To click on add user button
         */
        this.clickOnAddUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.addUserButton);
            yield clickElement_1.clickElement(this.addUserButton);
        });
        /**
         * To Verify search text box
         */
        this.verifySearchTextBox = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.txtSearch).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify Global search text box
         */
        this.verifyGlobalSearchTexbox = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.searchTextGlobal)
                .then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify global search button
         */
        this.verifyGlobalSearchBtn = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.searchTextGlobal)
                .then(function (flag) {
                return flag;
            });
        });
        /**
        * To click on search button
        */
        this.clickOnSearchButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.searchButton);
            yield clickElement_1.clickElement(this.searchButton);
        });
        /**
        * To enter user name in search text
        */
        this.enterUserName = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtSearch, userName);
        });
        /**
         * To click on add selected user button
         */
        this.clickOnAddSelectedUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.addSelectedUserButton);
            yield clickElement_1.clickElement(this.addSelectedUserButton);
        });
        /**
        * To click on remove icon
        */
        this.clickOnRemoveIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.removeIcon);
        });
        /**
         * To click on remove button
         */
        this.clickOnRemoveButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.removeButton);
        });
        /**
         * To click on Cancel button
         */
        this.clickOnCancelButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.cancelButton);
            yield clickElement_1.clickElement(this.cancelButton);
        });
        /**
         * To click on delete role link and then click on OK button
         */
        this.deleteRoleAndAccept = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.deleteRoleButton);
            yield clickElement_1.clickElement(this.deleteRoleButton);
            yield waitActions_1.staticWait(3000);
            yield alertAction_1.alertAccept();
        });
        /**
         *  To click on delete role link and then click on Cancel button
         */
        this.deleteRoleAndDismiss = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.deleteRoleButton);
            yield clickElement_1.clickElement(this.deleteRoleButton);
            yield waitActions_1.staticWait(3000);
            yield alertAction_1.alertDismiss();
        });
        /**
         * To click on Ok button
         */
        this.clickOnConfirmOkButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.confirmOkButton);
        });
        /**
         * To click on Cancel button
         */
        this.clickOnConfirmCancelButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.clickOnCancelButton);
        });
        /**
         * To click on Details button with respect to expected role
         */
        this.verifyAndClickOnDetails = (role) => __awaiter(this, void 0, void 0, function* () {
            let roleDetailsButton = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                role + "']//following::button[1] | //*[contains(text(),'" +
                role + "')]//following::button[1]"));
            yield waitActions_1.waitForObject(roleDetailsButton);
            yield clickElement_1.clickElement(roleDetailsButton);
        });
        /**
         * To click on View button with respect to expected user
         */
        this.verifyAndClickOnView = (userName) => __awaiter(this, void 0, void 0, function* () {
            let viewButton = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "']//following::button[1] | //*[contains(text(),'" +
                userName + "')]//following::button[1]"));
            yield clickElement_1.clickElement(viewButton);
        });
        /**
         * To verify message
         */
        this.verifyMessage = (message) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsText_1.checkContainsText(this.messageBox, message);
        });
        /**
         * To verify no user present
         */
        this.verifyNoUserPresent = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield isElementPresent_1.isElementPresent((protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "']//following::button[1] | //*[contains(text(),'" +
                userName + "')]//following::button[1]"))));
        });
        /**
         * To verify add user button
         */
        this.verifyAddUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield this.verifyElement(this.addUserButton);
        });
        /**
         * To delete user from role
         */
        this.removeUser = (userName) => __awaiter(this, void 0, void 0, function* () {
            let minusButton = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "']//following::button[2] | //*[contains(text(),'" +
                userName + "')]//following::button[2]"));
            let removeButton = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "']//following::button[3] | //*[contains(text(),'" +
                userName + "')]//following::button[3]"));
            yield clickElement_1.clickElement(minusButton);
            yield waitActions_1.waitForObject(removeButton);
            yield clickElement_1.clickElement(removeButton);
            yield waitActions_1.staticWait(3000);
        });
        /**
         * To click on view button
         */
        this.clickOnViewButton = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "']//following::button[1] | //*[contains(text(),'" +
                userName + "')]//following::button[1]")));
        });
        /**
         * To verify user profile table
         */
        this.verifyUserProfile = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.userProfile);
            let useprofilrele = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "'] | //*[contains(text(),'" + userName + "')]"));
            yield this.verifyElement(this.userProfile);
            yield this.verifyElement(useprofilrele);
        });
        /**
         * To verify Classic Contact Read scope table
         */
        this.verifyClassicContactReadScope = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.classicContact);
            yield this.verifyElement(this.classicContact);
        });
        /**
         * To click on check box to select user
         */
        this.selectUser = (userName) => __awaiter(this, void 0, void 0, function* () {
            let checkBoxForUser = protractor_1.element(protractor_1.by.xpath("//*[(text()='" + userName + "')]//ancestor::tr//tbody//input"));
            yield waitActions_1.waitForObject(checkBoxForUser);
            yield clickElement_1.clickElement(checkBoxForUser);
        });
        /**
         * To verify that the user is added
         */
        this.verifyUserAdded = (userName) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            let userAdded = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'" + userName + "')]"));
            return yield isElementPresent_1.isElementPresent(userAdded).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify warning message while creating new role
         */
        this.verifyWarningMessage = (errorMessage) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsText_1.checkContainsText(protractor_1.element(protractor_1.by.xpath("//p[contains(text(),  'Role name is limited to 50 characters')]")), errorMessage);
        });
        /**
         * To click on new role button
         */
        this.clickOnNewRole = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.NewRoleButton);
            yield clickElement_1.clickElement(this.NewRoleButton);
        });
        /**
         * To verify role name field
         */
        this.verifyRoleNameField = () => __awaiter(this, void 0, void 0, function* () {
            yield this.verifyElement(this.txtRoleName);
        });
        /**
         * To enter role name in role name text field
         */
        this.enterRoleName = (length) => __awaiter(this, void 0, void 0, function* () {
            this.createRandomName(length);
            yield setInputField_1.enterText(this.txtRoleName, this.randonname);
            yield waitActions_1.waitForObject(this.CreateRoleButton);
        });
        /**
         * To verify duplicate role name
         */
        this.VerifyDuplicateRoleName = (Rolename) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtRoleName, Rolename);
            yield waitActions_1.waitForObject(this.CreateRoleButton);
        });
        /**
         * To enter role name in role name text field
         */
        this.EnterRoleName = (length) => __awaiter(this, void 0, void 0, function* () {
            this.createRandomName(length);
            yield setInputField_1.enterText(this.txtRoleName, this.randonname);
        });
        /**
         * To click on create role button
         */
        this.clickOnCreateRoleButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.CreateRoleButton);
        });
        /**
         * To verify role name after creating new role
         */
        this.verifyRoleName = () => __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            let elemRoleName = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]"));
            yield waitActions_1.waitForObject(elemRoleName);
            yield clickElement_1.clickElement(elemRoleName);
            linkPresent = this.verifyElement(elemRoleName);
            return linkPresent;
        });
        /**
         * To Verify role name is not added
         */
        this.verifyRoleNotPresent = () => __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            linkPresent = this.verifyElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]")));
            return linkPresent;
        });
        /**
         * To verify Role and permission table title
         */
        this.verifyRoleandPermissionColumn = () => __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            yield waitActions_1.waitForObject(this.headElement);
            linkPresent = this.verifyElement(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Users Assigned This Role')]")));
            linkPresent = this.verifyElement(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Permissions')]")));
            return linkPresent;
        });
        /**
         * To clcik on edit button
         */
        this.clickOnEditButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.EditButton);
            yield clickElement_1.clickElement(this.EditButton);
        });
        /**
         * To select permission check box from permission table
         */
        this.SelectCheckBox = (permission) => __awaiter(this, void 0, void 0, function* () {
            let checkelement = protractor_1.element(protractor_1.by.xpath("//*[text()='" + permission + "']/ancestor::tr[@class='ng-star-inserted']//input | //*[@dv-tooltip='" +
                permission + "']/ancestor::tr[@class='ng-star-inserted']//input"));
            yield waitActions_1.waitForObject(checkelement);
            yield checkBoxActions_1.selectCheckBox(checkelement);
        });
        /**
         * To deselect permission checkbox from permission table
         */
        this.deSelectCheckBox = (permission) => __awaiter(this, void 0, void 0, function* () {
            let permissionCheckbox = protractor_1.element(protractor_1.by.xpath("//*[text()='" +
                permission + "']/ancestor::tr[@class='ng-star-inserted']//input | //*[@dv-tooltip='" +
                permission + "']/ancestor::tr[@class='ng-star-inserted']//input"));
            yield waitActions_1.waitForObject(permissionCheckbox);
            yield checkBoxActions_1.deSelectCheckBox(permissionCheckbox);
        });
        /**
         *To select multiple permissions from permission table
         */
        this.SelectMultipleCheckBox = () => __awaiter(this, void 0, void 0, function* () {
            protractor_1.element.all(protractor_1.by.css("span input.checkbox")).isSelected().then(function (selected) {
                if (selected) {
                    protractor_1.element(protractor_1.by.css("span input.checkbox")).click();
                }
                else {
                    protractor_1.element(protractor_1.by.css("span input.checkbox")).click();
                }
            });
        });
        /**
         *To Click on save button after selecting the permission
         */
        this.clickOnSaveButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.SaveButton);
            yield clickElement_1.clickElement(this.SaveButton);
        });
        /**
         * To verify permission is not present after deselecting the permission
         */
        this.VerifyRemovePermission = (permission) => __awaiter(this, void 0, void 0, function* () {
            let elem1 = protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Permissions')]"));
            let elem = protractor_1.element(protractor_1.by.xpath("//*[text()='" + permission + "']"));
            yield this.verifyElement(elem1);
            yield this.verifyElement(elem);
            yield waitActions_1.waitForObject(this.EditButton);
        });
        /**
         * To create random role name
         */
        this.createRandomName = (length) => __awaiter(this, void 0, void 0, function* () {
            let i;
            this.randonname = '';
            let autoname = 'Automation_';
            let letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //Include numbers if you want
            for (i = 0; i < length; i++) {
                this.randonname += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            this.randonname = autoname + this.randonname;
            return this.randonname;
        });
        /**
         * Toverify multiple check boxes
         */
        this.verifymultiplecheckbox = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.randonname);
            yield waitActions_1.waitForObject(this.EditButton);
            yield clickElement_1.clickElement(this.EditButton);
            yield waitActions_1.staticWait(3000);
            yield this.SelectMultipleCheckBox();
            yield waitActions_1.waitForObject(this.SaveButton);
            yield clickElement_1.clickElement(this.SaveButton);
        });
        /**
         * To delete role permanently
         */
        this.DeleteRolePerm = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.NewRoleButton);
            yield clickElement_1.clickElement(this.NewRoleButton);
            yield this.createRandomName(7);
            yield setInputField_1.enterText(this.txtRoleName, this.randonname);
            yield waitActions_1.waitForObject(this.CreateRoleButton);
            yield this.clickOnCreateRoleButton();
            yield this.verifyAndClickOnDetails(this.randonname);
            yield waitActions_1.staticWait(3000);
            yield this.deleteRoleAndAccept();
        });
        /**
         * To click on cancel
         */
        this.CancelDeleteRole = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.NewRoleButton);
            yield clickElement_1.clickElement(this.NewRoleButton);
            yield this.createRandomName(7);
            yield setInputField_1.enterText(this.txtRoleName, this.randonname);
            yield waitActions_1.waitForObject(this.CreateRoleButton);
            yield this.clickOnCreateRoleButton();
            yield this.verifyAndClickOnDetails(this.randonname);
            yield waitActions_1.staticWait(3000);
            yield this.deleteRoleAndDismiss();
        });
        /**
         *
         */
        this.elemetbeforeEdit = () => __awaiter(this, void 0, void 0, function* () {
            let i;
            let elem = protractor_1.element(protractor_1.by.xpath("//div[@class='tbl']//tbody/tr/td[@colspan='2']"));
            let countele = elem.count();
            let permissionebeforeedit = [];
            for (i = 0; i < countele; i++) {
                elem[i].getText().then(function (text) {
                    permissionebeforeedit.push(text);
                });
            }
        });
        /**
         *
         */
        this.elemetAfterEdit = () => __awaiter(this, void 0, void 0, function* () {
            let i;
            let elem1 = protractor_1.element(protractor_1.by.xpath("//div[@class='tbl']//tbody/tr/td[@colspan='2']"));
            let counteleafter = elem1.count();
            let permissioneAfteredit = [];
            for (i = 0; i < counteleafter; i++) {
                elem1[i].getText().then(function (text) {
                    permissioneAfteredit.push(text);
                });
            }
        });
        /**
         * To verify permision not added after clickinng on cancel
         */
        this.verifyPermissionCancel = () => __awaiter(this, void 0, void 0, function* () {
            let i;
            let elem = protractor_1.element(protractor_1.by.css((".tbl-body.zebrastripe tr"))).count().then(function (rowCount) {
                return rowCount;
            });
            let counteleafter = elem;
            let elem1 = protractor_1.element(protractor_1.by.css((".tbl-body.zebrastripe tr"))).count().then(function (rowCount) {
                return rowCount;
            });
            let countele = elem1;
            let permissioneAfteredit = [];
            for (i = 0; i < counteleafter; i++) {
                elem[i].getText().then(function (text) {
                    permissioneAfteredit.push(text);
                });
            }
            let permissionebeforeedit = [];
            for (i = 0; i < countele; i++) {
                elem1[i].getText().then(function (text) {
                    permissionebeforeedit.push(text);
                });
            }
            if (countele === counteleafter) {
                expect(permissionebeforeedit).to.equals(permissioneAfteredit);
            }
            else {
            }
        });
        /**
         * To click on details of any role
         */
        this.ClickOnDetails = () => __awaiter(this, void 0, void 0, function* () {
            let elem1 = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + this.randonname + "']//following::button[1] | //*[contains(text(),'" + this.randonname + "')]//following::button[1]"));
            yield waitActions_1.waitForObject(elem1);
            yield clickElement_1.clickElement(elem1);
        });
        /**
         * To select multiple check boxes
         */
        this.multipleSelect = (elem) => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(elem);
            yield protractor_1.element.all(elem).count()
                .then(function (size) {
            });
        });
        /**
         * To verify brokers and dealers link
         */
        this.verifyBrokersAndDealerslink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.brokersDealersLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify users link
         */
        this.verifyUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.usersLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify CFS engineering blog
         */
        this.verifyCFSSPFEngineeringBlog = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.cfsenggbloglink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify send my docs link
         */
        this.verifySendMyDocsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.senmydoclink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify commission interpreters link
         */
        this.verifyCommissionsInterpretersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.ComisInterpreterslink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify setuo client scanner link
         */
        this.verifySetUpClientScannerlink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.setupclientscanner).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify user profile link
         */
        this.verifyUserprofilelink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.Usersettings).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify update profile button
         */
        this.verifyUpdateProfileBtn = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.UpdateProfileBtn).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify classic Contact views link
         */
        this.verifyClassicContactViewsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.classicContactViewLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify classsic users link
         */
        this.verifyClassicUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.classicUsersLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify cmses link
         */
        this.verifyCMSesLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.cmsesLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * TO verify roles and permissions link
         */
        this.verifyRolesAndPermissionsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.rolesAndPermissionLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify send my docs saves link
         */
        this.verifySendMyDocsSavesLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.sendMyDocsSavesLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify send my docs scanners link
         */
        this.verifySendMyDocsScannersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.sendMyDocsScanners).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify send my scans link
         */
        this.verifySendMyScansLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.sendMyScansLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify user sessions link
         */
        this.verifyUserSessionsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.userSessionsLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify manage user link
         */
        this.verifyManageUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.manageUserLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify active lockout link
         */
        this.verifyActiveLockoutLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.activeLockouts).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify work groups link
         */
        this.verifyWorkgroupsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.workGroupsLink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify settings link
         */
        this.verifysettingsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.settingslink).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify user setup link
         */
        this.verifyUserSetupLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.usersetuplink).then(function (flag) {
                return flag;
            });
        });
        /**
         * Mouse action to move to element and verdify link
         */
        this.mousehoverandverifylink = (element, element1) => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(element);
            yield waitActions_1.staticWait(2000);
            yield waitActions_1.waitForObject(element1);
        });
        /**
         * Mouse action to move to element and click
         */
        this.mousehoverandclicklink = (element) => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(element);
            yield waitActions_1.staticWait(3000);
            yield clickElement_1.clickElement(element);
            yield waitActions_1.staticWait(3000);
        });
        /**
         * To verify screen title
         */
        this.verifyScreenTiltle = (title) => __awaiter(this, void 0, void 0, function* () {
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'" + title + "')]")));
        });
        /**
         * To click on users link
         */
        this.clickOnUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.usersLink);
            yield clickElement_1.clickElement(this.usersLink);
        });
        /**
         * To click on classic contacts views link
         */
        this.clickOnClassicContactViewsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.classicContactViewLink);
            yield clickElement_1.clickElement(this.classicContactViewLink);
        });
        /**
         * To click on classic users link
         */
        this.clickOnClassicUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.classicUsersLink);
            yield clickElement_1.clickElement(this.classicUsersLink);
        });
        /**
         * To click on cmses link
         */
        this.clickOnCMSESLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.cmsesLink);
            yield clickElement_1.clickElement(this.cmsesLink);
        });
        /**
         * To click on roles and permissions link
         */
        this.clickOnRolesAndPermissions = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.rolesAndPermissionLink);
            yield clickElement_1.clickElement(this.rolesAndPermissionLink);
        });
        /**
         * To click on send my docs saves
         */
        this.clickOnSendMyDocSaves = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.sendMyDocsScanners);
            yield clickElement_1.clickElement(this.sendMyDocsScanners);
        });
        /**
         * To click on send my docs scanners
         */
        this.clickOnSendMyDocsScanners = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.sendMyDocsScanners);
            yield clickElement_1.clickElement(this.sendMyDocsScanners);
        });
        /**
         * To click on send my scans link
         */
        this.clickOnSendMyScans = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.sendMyScansLink);
            yield clickElement_1.clickElement(this.sendMyScansLink);
        });
        /**
         * To click on user sessions
         */
        this.clickOnUserSessions = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.userSessionsLink);
            yield clickElement_1.clickElement(this.userSessionsLink);
        });
        /**
         * To click on Manage user link
         */
        this.clickOnManageUser = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.manageUserLink);
            yield clickElement_1.clickElement(this.manageUserLink);
        });
        /**
         * To click on Active lockouts link
         */
        this.clickOnActiveLockoutsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.activeLockouts);
            yield clickElement_1.clickElement(this.EditButton);
        });
        /**
         * To click on work groups link
         */
        this.clickOnworkGroupsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.workGroupsLink);
            yield clickElement_1.clickElement(this.workGroupsLink);
        });
        /**
         * To click on link
         */
        this.clickOnLink = (element, element1) => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(element);
            yield waitActions_1.staticWait(2000);
            yield clickElement_1.clickElement(element1);
        });
        /**
         * To click on user name
         */
        this.clickOnUserName = (linkname) => __awaiter(this, void 0, void 0, function* () {
            let ele = protractor_1.element(protractor_1.by.xpath("//div[@class='tbl']//tbody/tr//a[contains(text(),'" + linkname + "')]"));
        });
        /**
         * To enter string in the text box
         */
        this.EnterString = (string, element) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(element, string);
        });
        /**
         *
         */
        this.afterEnterRole = (role) => __awaiter(this, void 0, void 0, function* () {
            this.rows1 = protractor_1.element.all(protractor_1.by.xpath("//tbody[@class='tbl-body zebrastripe ng-star-inserted']//tr//span[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') , translate('"
                + role + "', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))]"));
            this.sum1 = this.rows1.count().then(function (count) {
                var su = count;
                return su;
            });
            return yield this.sum1;
        });
        /**
         * To click on settings link
         */
        this.clickOnSettngsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.settingslink);
            yield clickElement_1.clickElement(this.settingslink);
        });
        /**
         * To click on user Setup
         */
        this.clickOnUserSetup = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.usersetuplink);
            yield clickElement_1.clickElement(this.usersetuplink);
        });
        /**
         * To verify element is present
         */
        this.verifyElement = (elem) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(elem).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify delete role button
         */
        this.verifyDeleteroleBtn = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.deleteRoleButton).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify add user button
         */
        this.verifyaddUserButton = (elem) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.addUserButton).then(function (flag) {
                return flag;
            });
        });
        /**
         * To verify edit button
         */
        this.verifyEditButton = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.EditButton).then(function (flag) {
                return flag;
            });
        });
        /**
         * To Verify Roles and Permission table header
         */
        this.verifyElementRoleAndpermision = (elem) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'Roles & Permissions')]"))).then(function (flag) {
                return flag;
            });
        });
        this.addUserButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),  '+ Add Users')]"));
        this.txtSearch = protractor_1.element(protractor_1.by.css("input[placeholder ='User search']"));
        this.cancelButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Cancel')]"));
        this.searchButton = protractor_1.element(protractor_1.by.css("td.td-align-right button.btn.btn-small"));
        this.deleteRoleButton = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Delete Role')]"));
        this.addSelectedUserButton = protractor_1.element(protractor_1.by.css("button.btn.btn-small[type='submit']"));
        this.messageBox = protractor_1.element(protractor_1.by.xpath("//div[@class='toast-message']"));
        this.userProfile = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'User Profile')]"));
        this.classicUserOwnerships = protractor_1.element(protractor_1.by.xpath("//th[contains(text(),  'Classic User Ownerships')]"));
        this.classicContact = protractor_1.element(protractor_1.by.xpath("//th[contains(text(),  'Classic Contact Allow Read Scope')]"));
        this.usersLink = protractor_1.element(protractor_1.by.xpath("//a[@routerlink='users']"));
        this.brokersDealersLink = protractor_1.element(protractor_1.by.css("a[routerlink='broker-dealers']"));
        this.classicContactViewLink = protractor_1.element(protractor_1.by.xpath("//a[@routerlink='system-usage/classic-contact-views']"));
        this.classicUsersLink = protractor_1.element(protractor_1.by.css("a[routerlink='classic-users']"));
        this.cmsesLink = protractor_1.element(protractor_1.by.css("a[routerlink='cmses']"));
        this.rolesAndPermissionLink = protractor_1.element(protractor_1.by.css("a[routerlink='roles']"));
        this.sendMyDocsSavesLink = protractor_1.element(protractor_1.by.css("a[routerlink='user-content/scans-saves']"));
        this.sendMyDocsScanners = protractor_1.element(protractor_1.by.css("a[routerlink='user-content/scanners']"));
        this.sendMyScansLink = protractor_1.element(protractor_1.by.css("a[routerlink='user-content/scans']"));
        this.userSessionsLink = protractor_1.element(protractor_1.by.css("a[routerlink='system-usage/user-sessions']"));
        this.manageUserLink = protractor_1.element(protractor_1.by.css("a[routerlink='mpv-administration/manage-users']"));
        this.activeLockouts = protractor_1.element(protractor_1.by.css("a[routerlink='mpv-administration/active-lockouts']"));
        this.workGroupsLink = protractor_1.element(protractor_1.by.css("a[routerlink='workgroups']"));
        this.adminButton = protractor_1.element(protractor_1.by.css("a[routerlink='admin']"));
        this.userList = protractor_1.element.all(protractor_1.by.xpath("//table//th[contains(text(),'Assign Users This Role')]//ancestor::table[1]//tr/td[1]/span[1]"));
        this.searchTextGlobal = protractor_1.element(protractor_1.by.css("input[placeholder ='Search dataVISION']"));
        this.searchBtnGlobal = protractor_1.element(protractor_1.by.id("searchDV"));
        this.NewRoleButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'+ New Role')]"));
        this.txtRoleName = protractor_1.element(protractor_1.by.xpath("//input[@id='newRoleName']"));
        this.CreateRoleButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),  'Create Role')]"));
        this.DetailsButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),  'Details')]"));
        this.EditButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),  'Edit')]"));
        this.warningMsg = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),  'Role name is limited to 50 characters')]"));
        this.errMsg = protractor_1.element(protractor_1.by.xpath("//div[@class='toast-message']"));
        this.SaveButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),  'Save')]"));
        this.headElement = protractor_1.element(protractor_1.by.xpath("//h1"));
        this.RolesandPermissionSection = protractor_1.element(protractor_1.by.xpath("//th[contains(text(),  'Roles & Permissions')]"));
        this.ContactHovertab = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Contacts')]"));
        this.contactDirectory = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Directory')"));
        this.searchlink = protractor_1.element(protractor_1.by.xpath("//a[@routerlink='/search']"));
        this.senmydoclink = protractor_1.element(protractor_1.by.css("a[routerlink='scans']"));
        this.comissionslink = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Commissions')]"));
        this.ToolsTab = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Tools')]"));
        this.orgchatlink = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Org Chart')]"));
        this.cfsenggbloglink = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'CFS/SPF Engineering Blog')]"));
        this.setupclientscanner = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'+ Set Up Client Scanner')]"));
        this.ComisInterpreterslink = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Commissions Interpreters')]"));
        this.ResourcesTab = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Resources')]"));
        this.UserTab = protractor_1.element(protractor_1.by.xpath("//nav[@class='masthead-nav']/div[2]/div[2]"));
        this.UpdateProfileBtn = protractor_1.element(protractor_1.by.xpath("//a/span[text()='Update Profile']"));
        this.searchtextbox = protractor_1.element(protractor_1.by.css("input[placeholder ='Search dataVISION']"));
        this.Summeryele = protractor_1.element(protractor_1.by.css("h2.hr"));
        this.Usersettings = protractor_1.element(protractor_1.by.xpath("//a[@ng-reflect-router-link='settings/user/profile']"));
        this.rolesfiltertxt = protractor_1.element(protractor_1.by.css("input[placeholder='Filter Roles']"));
        this.PermissionsFiltertxt = protractor_1.element(protractor_1.by.css("input[placeholder='Filter Permissions']"));
        this.UsersFiltertxt = protractor_1.element(protractor_1.by.css("input[placeholder='Filter Users']"));
        this.roleList = protractor_1.element.all(protractor_1.by.xpath("//table//th[contains(text(),'Role')]//ancestor::table[1]//span[1]"));
        this.permissionList = protractor_1.element.all(protractor_1.by.xpath("//table//th[contains(text(),'Permissions')]//ancestor::table[1]//tbody//tr/td[1]"));
        this.UsersList = protractor_1.element.all(protractor_1.by.xpath("//table//th[contains(text(),'Users')]//ancestor::table[1]//td[1]"));
        this.settingslink = protractor_1.element(protractor_1.by.css("a[routerlink='settings/usersettings']"));
        this.usersetuplink = protractor_1.element(protractor_1.by.css("a[routerlink='settings/usersetup']"));
    }
    /**
     * To verify user name
     */
    verifyUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield waitActions_1.waitForObject(this.userList);
            yield this.userList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                    if (yield text.toUpperCase().includes(userName.toUpperCase())) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                }));
            }));
            return flag;
        });
    }
    /**
     * To verify Classic User Ownerhips table
     */
    verifyClassicUserOwnerships() {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            let flag;
            yield waitActions_1.waitForObject(this.classicUserOwnerships);
            linkPresent = this.verifyElement(this.classicUserOwnerships);
            return linkPresent;
        });
    }
    /**
     * To verify permission after adding
     */
    VerifyPermission(permission) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            let permissionelement1 = protractor_1.element(protractor_1.by.xpath("//*[text()='" + permission + "'] | //*[@dv-tooltip='" + permission + "']"));
            linkPresent = this.verifyElement(permissionelement1);
            return yield linkPresent;
        });
    }
    /**
     * Verify roles and permissions table
     */
    verifyRolesAndPermissionSection() {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            let flag;
            yield waitActions_1.waitForObject(this.RolesandPermissionSection);
            linkPresent = this.verifyElement(this.RolesandPermissionSection);
            return linkPresent;
        });
    }
    /**
     * To verify link name
     * @param linkName
     */
    verifyLink(linkName) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case 'Users':
                    linkPresent = this.verifyUsersLink();
                    break;
                case 'Brokers and Dealers':
                    linkPresent = this.verifyBrokersAndDealerslink();
                    break;
                case 'Classic Contact Views':
                    linkPresent = this.verifyClassicContactViewsLink();
                    break;
                case 'Classic Users':
                    linkPresent = this.verifyClassicUsersLink();
                    break;
                case 'CMSES':
                    linkPresent = this.verifyCMSesLink();
                    break;
                case 'Roles and Permissions':
                    linkPresent = this.verifyRolesAndPermissionsLink();
                    break;
                case 'Send MyDocs Saves':
                    linkPresent = this.verifySendMyDocsSavesLink();
                    break;
                case 'Send My Doc Scanners':
                    linkPresent = this.verifySendMyDocsScannersLink();
                    break;
                case 'Send My Scans':
                    linkPresent = this.verifySendMyScansLink();
                    break;
                case 'User Sessions':
                    linkPresent = this.verifyUserSessionsLink();
                    break;
                case 'Manage User':
                    linkPresent = this.verifyManageUsersLink();
                    break;
                case 'Active Lockouts':
                    linkPresent = this.verifyActiveLockoutLink();
                    break;
                case 'Workgroups':
                    linkPresent = this.verifyWorkgroupsLink();
                    break;
                case 'CFS/SPF Engineering Blog':
                    linkPresent = this.verifyCFSSPFEngineeringBlog();
                    break;
                case 'SendMyDocs':
                    linkPresent = this.verifySendMyDocsLink();
                    break;
                case 'User settings':
                    linkPresent = this.verifyUserprofilelink();
                    break;
                case 'Update Profile':
                    linkPresent = this.verifyUpdateProfileBtn();
                    break;
                case 'Settings':
                    linkPresent = this.verifysettingsLink();
                    break;
                case 'User Setup':
                    linkPresent = this.verifyUserSetupLink();
                    break;
                case 'Commissions Interpreters':
                    linkPresent = this.verifyCommissionsInterpretersLink();
                    break;
                case 'Set Up Client Scanner':
                    linkPresent = this.verifySetUpClientScannerlink();
                    break;
            }
            return linkPresent;
        });
    }
    /**
     * To verify role name filter
     * @param role
     */
    verifyRoleNameFilter(role) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield waitActions_1.waitForObject(this.roleList);
            yield this.roleList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                    if (yield text.toUpperCase().includes(role.toUpperCase())) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                }));
            }));
            return flag;
        });
    }
    /**
     * To verify filter for permission
     * @param role
     */
    verifyPermissionFilter(role) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield waitActions_1.waitForObject(this.permissionList);
            yield this.permissionList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                    if (yield text.toUpperCase().includes(role.toUpperCase())) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                }));
            }));
            return yield flag;
        });
    }
    /**
     * To verify filters for user name
     * @param role
     */
    verifyUsersFilter(role) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield waitActions_1.waitForObject(this.UsersList);
            yield this.UsersList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                    if (yield text.toUpperCase().includes(role.toUpperCase())) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                }));
            }));
            return yield flag;
        });
    }
}
exports.EntitlementPage = EntitlementPage;
