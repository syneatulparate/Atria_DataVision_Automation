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
const setInputField_1 = require("../../uiActions/keyboardActions/setInputField");
const clickElement_1 = require("../../uiActions/mouseActions/clickElement");
const checkContainsText_1 = require("../../uiActions/verifyActions/checkContainsText");
const isElementPresent_1 = require("../../uiActions/verifyActions/isElementPresent");
const alertAction_1 = require("../../uiActions/alertActions/alertAction");
const waitActions_1 = require("../../uiActions/waitActions/waitActions");
const moveToElement_1 = require("../../uiActions/mouseActions/moveToElement");
const checkBoxActions_1 = require("../../uiActions/mouseActions/checkBoxActions");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class EntitlementPage {
    constructor() {
        this.clickOnAddUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Click Add user button");
            yield waitActions_1.waitForObject(this.addUserButton);
            yield clickElement_1.clickElement(this.addUserButton);
        });
        this.verifySearchTextBox = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.txtSearch).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyGlobalSearchTexbox = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.searchTextGlobal)
                .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyGlobalSearchBtn = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.searchTextGlobal)
                .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.clickOnSearchButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.searchButton);
            yield clickElement_1.clickElement(this.searchButton);
        });
        this.enterUserName = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtSearch, userName);
        });
        this.clickOnAddSelectedUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.addSelectedUserButton);
            yield clickElement_1.clickElement(this.addSelectedUserButton);
        });
        this.clickOnRemoveIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.removeIcon);
        });
        this.clickOnRemoveButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.removeButton);
        });
        this.clickOnCancelButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.cancelButton);
            yield clickElement_1.clickElement(this.cancelButton);
        });
        this.deleteRoleAndAccept = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.deleteRoleButton);
            yield clickElement_1.clickElement(this.deleteRoleButton);
            yield waitActions_1.staticWait(3000);
            yield alertAction_1.alertAccept();
        });
        this.deleteRoleAndDismiss = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.deleteRoleButton);
            yield clickElement_1.clickElement(this.deleteRoleButton);
            yield waitActions_1.staticWait(3000);
            yield alertAction_1.alertDismiss();
        });
        this.clickOnConfirmOkButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.confirmOkButton);
        });
        this.clickOnConfirmCancelButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.clickOnCancelButton);
        });
        this.verifyAndClickOnDetails = (role) => __awaiter(this, void 0, void 0, function* () {
            let roleDetailsButton = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                role + "']//following::button[1] | //*[text()=' " +
                role + "']//following::button[1]"));
            yield waitActions_1.waitForObject(roleDetailsButton);
            yield clickElement_1.clickElement(roleDetailsButton);
        });
        this.verifyAndClickOnView = (userName) => __awaiter(this, void 0, void 0, function* () {
            let viewButton = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "']//following::button[1] | //*[contains(text(),'" +
                userName + "')]//following::button[1]"));
            yield clickElement_1.clickElement(viewButton);
        });
        this.verifyMessage = (message) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsText_1.checkContainsText(this.messageBox, message);
        });
        this.verifyNoUserPresent = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield isElementPresent_1.isElementPresent((protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "']//following::button[1] | //*[contains(text(),'" +
                userName + "')]//following::button[1]"))));
        });
        this.verifyAddUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield this.verifyElement(this.addUserButton);
            // await isElementPresent(this.addUserButton)
        });
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
        this.clickOnViewButton = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "']//following::button[1] | //*[contains(text(),'" +
                userName + "')]//following::button[1]")));
        });
        this.verifyUserProfile = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.userProfile);
            let useprofilrele = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                userName + "'] | //*[contains(text(),'" + userName + "')]"));
            yield this.verifyElement(this.userProfile);
            // await isElementPresent(this.userProfile);
            yield this.verifyElement(useprofilrele);
        });
        this.verifyClassicContactReadScope = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.classicContact);
            yield this.verifyElement(this.classicContact);
        });
        this.selectUser = (userName) => __awaiter(this, void 0, void 0, function* () {
            let checkBoxForUser = protractor_1.element(protractor_1.by.xpath("//*[(text()='" + userName + "')]//ancestor::tr//tbody//input"));
            yield waitActions_1.waitForObject(checkBoxForUser);
            yield clickElement_1.clickElement(checkBoxForUser);
        });
        this.verifyUserAdded = (userName) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            let userAdded = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'" + userName + "')]"));
            return yield isElementPresent_1.isElementPresent(userAdded).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyWarningMessage = (errorMessage) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsText_1.checkContainsText(protractor_1.element(protractor_1.by.xpath("//p[contains(text(),  'Role name is limited to 50 characters')]")), errorMessage);
        });
        this.clickOnNewRole = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Click Add user button");
            // await waitForObject(element(by.xpath("//button[contains(text(),  'New Role')]")))
            yield waitActions_1.waitForObject(this.NewRoleButton);
            yield clickElement_1.clickElement(this.NewRoleButton);
        });
        this.verifyRoleNameField = () => __awaiter(this, void 0, void 0, function* () {
            // await waitForObject(this.txtRoleName)
            yield this.verifyElement(this.txtRoleName);
        });
        this.enterRoleName = (length) => __awaiter(this, void 0, void 0, function* () {
            this.createRandomName(length);
            yield setInputField_1.enterText(this.txtRoleName, this.randonname);
            yield waitActions_1.waitForObject(this.CreateRoleButton);
        });
        this.VerifyDuplicateRoleName = (Rolename) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtRoleName, Rolename);
            yield waitActions_1.waitForObject(this.CreateRoleButton);
        });
        this.EnterRoleName = (length) => __awaiter(this, void 0, void 0, function* () {
            this.createRandomName(length);
            yield setInputField_1.enterText(this.txtRoleName, this.randonname);
        });
        this.clickOnCreateRoleButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.CreateRoleButton);
        });
        this.verifyRoleName = () => __awaiter(this, void 0, void 0, function* () {
            let elemRoleName = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]"));
            console.log("element name is = " + this.randonname);
            yield waitActions_1.waitForObject(elemRoleName);
            // await checkContainsText(elemRoleName,this.randonname)
            yield clickElement_1.clickElement(elemRoleName);
            yield this.verifyElement(elemRoleName);
            //await clickElement(element(by.xpath("//div[@class='tbl ng-star-inserted']//tbody//span[contains(text(),'"+role+"')]")))
        });
        this.verifyRoleNotPresent = () => __awaiter(this, void 0, void 0, function* () {
            yield this.verifyElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]")));
        });
        this.verifyRoleandPermissionColumn = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.headElement);
            yield this.verifyElement(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Users Assigned This Role')]")));
            yield this.verifyElement(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Permissions')]")));
            yield this.verifyElement(this.EditButton);
            yield this.verifyElement(this.deleteRoleButton);
            yield this.verifyElement(this.addUserButton);
            yield this.verifyElement(protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Roles & Permissions')]")));
        });
        this.clickOnEditButton = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("edir button");
            yield waitActions_1.waitForObject(this.EditButton);
            yield clickElement_1.clickElement(this.EditButton);
        });
        this.SelectCheckBox = (permission) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("select check box");
            let checkelement = protractor_1.element(protractor_1.by.xpath("//*[text()=' " +
                permission + "']/ancestor::tr[@class='ng-star-inserted']//input | //*[@dv-tooltip='" +
                permission + "']/ancestor::tr[@class='ng-star-inserted']//input"));
            yield waitActions_1.waitForObject(checkelement);
            yield checkBoxActions_1.selectCheckBox(checkelement);
        });
        this.deSelectCheckBox = (permission) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("select check box");
            let permissionCheckbox = protractor_1.element(protractor_1.by.xpath("//*[text()=' " +
                permission + "']/ancestor::tr[@class='ng-star-inserted']//input | //*[@dv-tooltip='" +
                permission + "']/ancestor::tr[@class='ng-star-inserted']//input"));
            yield waitActions_1.waitForObject(permissionCheckbox);
            yield checkBoxActions_1.deSelectCheckBox(permissionCheckbox);
        });
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
        this.clickOnSaveButton = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("save button ");
            yield waitActions_1.waitForObject(this.SaveButton);
            yield clickElement_1.clickElement(this.SaveButton);
        });
        this.VerifyRemovePermission = (permission) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("wait element");
            let elem1 = protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Permissions')]"));
            let elem = protractor_1.element(protractor_1.by.xpath("//*[text()=' " +
                permission + "']"));
            yield this.verifyElement(elem1);
            yield this.verifyElement(elem);
            // await isElementPresent(element(by.xpath("//th[contains(text(),'Permissions')]")))
            //await isElementPresent(element(by.xpath("//td[contains(text(),'" + permission + "')]")))
            yield waitActions_1.waitForObject(this.EditButton);
        });
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
        this.verifymultiplecheckbox = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.randonname);
            yield waitActions_1.waitForObject(this.EditButton);
            yield clickElement_1.clickElement(this.EditButton);
            yield waitActions_1.staticWait(3000);
            yield this.SelectMultipleCheckBox();
            yield waitActions_1.waitForObject(this.SaveButton);
            yield clickElement_1.clickElement(this.SaveButton);
        });
        this.DeleteRolePerm = () => __awaiter(this, void 0, void 0, function* () {
            console.log("create role");
            yield waitActions_1.waitForObject(this.NewRoleButton);
            yield clickElement_1.clickElement(this.NewRoleButton);
            yield this.verifyElement(this.txtRoleName);
            // await isElementPresent(this.txtRoleName)
            this.createRandomName(7);
            yield setInputField_1.enterText(this.txtRoleName, this.randonname);
            yield waitActions_1.waitForObject(this.CreateRoleButton);
            yield this.clickOnCreateRoleButton();
            yield this.verifyAndClickOnDetails(this.randonname);
            yield waitActions_1.staticWait(3000);
            yield this.deleteRoleAndAccept();
        });
        this.CancelDeleteRole = () => __awaiter(this, void 0, void 0, function* () {
            console.log("create role");
            yield waitActions_1.waitForObject(this.NewRoleButton);
            yield clickElement_1.clickElement(this.NewRoleButton);
            //await isElementPresent(this.txtRoleName)
            yield this.verifyElement(this.txtRoleName);
            this.createRandomName(7);
            yield setInputField_1.enterText(this.txtRoleName, this.randonname);
            yield waitActions_1.waitForObject(this.CreateRoleButton);
            yield this.clickOnCreateRoleButton();
            yield this.verifyAndClickOnDetails(this.randonname);
            yield waitActions_1.staticWait(3000);
            yield this.deleteRoleAndDismiss();
        });
        this.elemetbeforeEdit = () => __awaiter(this, void 0, void 0, function* () {
            console.log("before edit");
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
        this.elemetAfterEdit = () => __awaiter(this, void 0, void 0, function* () {
            console.log("before edit");
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
        this.verifyPermissionCancel = () => __awaiter(this, void 0, void 0, function* () {
            console.log("before edit");
            let i;
            let elem = protractor_1.element(protractor_1.by.css((".tbl-body.zebrastripe tr"))).count().then(function (rowCount) {
                console.log("Count:" + rowCount);
                return rowCount;
            });
            let counteleafter = elem;
            let elem1 = protractor_1.element(protractor_1.by.css((".tbl-body.zebrastripe tr"))).count().then(function (rowCount) {
                console.log("Count:" + rowCount);
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
                console.log("element are same");
            }
            else {
            }
        });
        this.ClickOnDetails = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                this.randonname + "']//following::button[1] | //*[contains(text(),'" +
                this.randonname + "')]//following::button[1]")));
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" +
                this.randonname + "']//following::button[1] | //*[contains(text(),'" +
                this.randonname + "')]//following::button[1]")));
        });
        this.multipleSelect = (elem) => __awaiter(this, void 0, void 0, function* () {
            //let elem : ElementFinder = element(by.xpath("//dv-permissions-page//table//tbody//tr"));
            yield waitActions_1.waitForObject(elem);
            yield protractor_1.element.all(elem).count()
                .then(function (size) {
                console.log("size is 1 = " + size);
                //browser.sleep(10000);
                console.log("size is = " + size);
            });
        });
        this.verifyBrokersAndDealerslink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.brokersDealersLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.usersLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyCFSSPFEngineeringBlog = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.cfsenggbloglink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifySendMyDocsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.senmydoclink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyCommissionsInterpretersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.ComisInterpreterslink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifySetUpClientScannerlink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.setupclientscanner).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyUserprofilelink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.Usersettings).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyUpdateProfileBtn = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.UpdateProfileBtn).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyClassicContactViewsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.classicContactViewLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyClassicUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.classicUsersLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyCMSesLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.cmsesLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyRolesAndPermissionsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.rolesAndPermissionLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifySendMyDocsSavesLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.sendMyDocsSavesLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifySendMyDocsScannersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.sendMyDocsScanners).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifySendMyScansLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.sendMyScansLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyUserSessionsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.userSessionsLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyManageUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.manageUserLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyActiveLockoutLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.activeLockouts).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyWorkgroupsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.workGroupsLink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifysettingsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.settingslink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyUserSetupLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.usersetuplink).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.mousehoverandverifylink = (element, element1) => __awaiter(this, void 0, void 0, function* () {
            console.log("hover elemet");
            yield moveToElement_1.moveToElement(element);
            yield waitActions_1.staticWait(2000);
            //await moveToElement(element1)
            yield waitActions_1.waitForObject(element1);
        });
        this.mousehoverandclicklink = (element, element1) => __awaiter(this, void 0, void 0, function* () {
            console.log("mouse hover on element" + element);
            yield moveToElement_1.moveToElement(element);
            yield waitActions_1.staticWait(2000);
            //await isElementPresent(element1)
            yield console.log("click on element" + element1);
            //await moveToElement(element1)
            yield clickElement_1.clickElement(element1);
            yield waitActions_1.staticWait(3000);
        });
        this.verifyScreenTiltle = (title) => __awaiter(this, void 0, void 0, function* () {
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'" + title + "')]")));
        });
        this.clickOnUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.usersLink);
            yield clickElement_1.clickElement(this.usersLink);
        });
        this.clickOnClassicContactViewsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.classicContactViewLink);
            yield clickElement_1.clickElement(this.classicContactViewLink);
        });
        this.clickOnClassicUsersLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.classicUsersLink);
            yield clickElement_1.clickElement(this.classicUsersLink);
        });
        this.clickOnCMSESLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.cmsesLink);
            yield clickElement_1.clickElement(this.cmsesLink);
        });
        this.clickOnRolesAndPermissions = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.rolesAndPermissionLink);
            yield clickElement_1.clickElement(this.rolesAndPermissionLink);
        });
        this.clickOnSendMyDocSaves = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.sendMyDocsScanners);
            yield clickElement_1.clickElement(this.sendMyDocsScanners);
        });
        this.clickOnSendMyDocsScanners = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.sendMyDocsScanners);
            yield clickElement_1.clickElement(this.sendMyDocsScanners);
        });
        this.clickOnSendMyScans = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.sendMyScansLink);
            yield clickElement_1.clickElement(this.sendMyScansLink);
        });
        this.clickOnUserSessions = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.userSessionsLink);
            yield clickElement_1.clickElement(this.userSessionsLink);
        });
        this.clickOnManageUser = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.manageUserLink);
            yield clickElement_1.clickElement(this.manageUserLink);
        });
        this.clickOnActiveLockoutsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.activeLockouts);
            yield clickElement_1.clickElement(this.EditButton);
        });
        this.clickOnworkGroupsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.workGroupsLink);
            yield clickElement_1.clickElement(this.workGroupsLink);
        });
        this.clickOnLink = (element, element1) => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(element);
            yield waitActions_1.staticWait(2000);
            yield clickElement_1.clickElement(element1);
        });
        this.clickOnUserName = (linkname) => __awaiter(this, void 0, void 0, function* () {
            let ele = protractor_1.element(protractor_1.by.xpath("//div[@class='tbl']//tbody/tr//a[contains(text(),'" + linkname + "')]"));
        });
        this.EnterString = (string, element) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Inside enter username");
            yield setInputField_1.enterText(element, string);
        });
        this.afterEnterRole = (role) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("count test");
            this.rows1 = protractor_1.element.all(protractor_1.by.xpath("//tbody[@class='tbl-body zebrastripe ng-star-inserted']//tr//span[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') , translate('"
                + role + "', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))]"));
            this.sum1 = this.rows1.count().then(function (count) {
                var su = count;
                console.log(su);
                return su;
            });
            yield console.log("count before = " + this.sum1);
            return yield this.sum1;
        });
        this.clickOnSettngsLink = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.settingslink);
            yield clickElement_1.clickElement(this.settingslink);
        });
        this.clickOnUserSetup = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.usersetuplink);
            yield clickElement_1.clickElement(this.usersetuplink);
        });
        this.verifyElement = (elem) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(elem).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.addUserButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),  '+ Add Users')]"));
        this.txtSearch = protractor_1.element(protractor_1.by.css("input[placeholder ='User search']"));
        this.cancelButton = protractor_1.element(protractor_1.by.xpath("//tfoot//button[contains(text(),'Cancel')]"));
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
        this.userList = protractor_1.element.all(protractor_1.by.xpath("//table//th[contains(text(),'Assign Users This Role')]//ancestor::table[1]//span[1]"));
        this.searchTextGlobal = protractor_1.element(protractor_1.by.css("input[placeholder ='Search dataVISION']"));
        this.searchBtnGlobal = protractor_1.element(protractor_1.by.id("searchDV"));
        //"//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']")
        //this.NewRoleButton=element(by.buttonText("New Role"));
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
        //this.contactDirectory=element(by.css("//a[routerlink='contacts']"));
        this.searchlink = protractor_1.element(protractor_1.by.xpath("//a[@routerlink='/search']"));
        this.senmydoclink = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'SendMyDocs')]"));
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
        this.permissionList = protractor_1.element.all(protractor_1.by.xpath("//table//th[contains(text(),'Permissions')]//ancestor::table[1]//td/span"));
        this.UsersList = protractor_1.element.all(protractor_1.by.xpath("//table//th[contains(text(),'Users')]//ancestor::table[1]//td[1]"));
        this.settingslink = protractor_1.element(protractor_1.by.css("a[routerlink='settings/usersettings']"));
        this.usersetuplink = protractor_1.element(protractor_1.by.css("a[routerlink='settings/usersetup']"));
    }
    verifyUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            // let temp:Promise<boolean>;        
            yield waitActions_1.waitForObject(this.userList);
            yield this.userList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                    yield console.log(text);
                    if (yield text.toUpperCase().includes(userName.toUpperCase())) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                    yield console.log("value of flag 1" + flag);
                }));
            }));
            yield console.log("value of flag 2" + flag);
            return flag;
        });
    }
    verifyClassicUserOwnerships() {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            yield console.log("wait element");
            let flag;
            yield waitActions_1.waitForObject(this.classicUserOwnerships);
            linkPresent = this.verifyElement(this.classicUserOwnerships);
            yield linkPresent.then(function (text) { console.log(text); });
            return linkPresent;
        });
    }
    VerifyPermission(permission) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            yield console.log("wait element");
            let permissionelement = protractor_1.element(protractor_1.by.xpath("//*[text()=' " +
                permission + "'] | //*[@dv-tooltip='" + permission + "']"));
            // await waitForObject(element(by.xpath("//div[@class='dib table-width']//th[contains(text(),'Permissions')]")));
            linkPresent = this.verifyElement(permissionelement);
            yield linkPresent.then(function (text) { console.log(text); });
            return linkPresent;
        });
    }
    verifyRolesAndPermissionSection() {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            yield console.log("wait element");
            let flag;
            yield waitActions_1.waitForObject(this.RolesandPermissionSection);
            linkPresent = this.verifyElement(this.RolesandPermissionSection);
            yield linkPresent.then(function (text) { console.log(text); });
            return linkPresent;
            // await isElementPresent(this.RolesandPermissionSection);
        });
    }
    verifyLink(linkName) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case 'Users':
                    console.log("Users");
                    linkPresent = this.verifyUsersLink();
                    break;
                case 'Brokers and Dealers':
                    console.log("B and D");
                    linkPresent = this.verifyBrokersAndDealerslink();
                    break;
                case 'Classic Contact Views':
                    console.log("CCV");
                    linkPresent = this.verifyClassicContactViewsLink();
                    break;
                case 'Classic Users':
                    console.log("CU");
                    linkPresent = this.verifyClassicUsersLink();
                    break;
                case 'CMSES':
                    console.log("CMSES");
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
                    //linkPresent = true;
                    break;
                case 'SendMyDocs':
                    linkPresent = this.verifySendMyDocsLink();
                    //  linkPresent = true;
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
            yield linkPresent.then(function (text) { console.log(text); });
            return linkPresent;
        });
    }
    verifyRoleNameFilter(role) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            // let temp:Promise<boolean>;        
            yield waitActions_1.waitForObject(this.roleList);
            yield this.roleList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                    yield console.log(text);
                    if (yield text.toUpperCase().includes(role.toUpperCase())) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                    yield console.log("value of flag 1" + flag);
                }));
            }));
            // temp=flag;
            yield console.log("value of flag 2" + flag);
            // await console.log("temp"+temp)
            return flag;
        });
    }
    verifyPermissionFilter(role) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            // let temp:Promise<boolean>;        
            yield waitActions_1.waitForObject(this.permissionList);
            yield this.permissionList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                    yield console.log(text);
                    if (yield text.toUpperCase().includes(role.toUpperCase())) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                    yield console.log("value of flag 1" + flag);
                }));
            }));
            // temp=flag;
            yield console.log("value of flag 2" + flag);
            // await console.log("temp"+temp)
            return yield flag;
        });
    }
    verifyUsersFilter(role) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            // let temp:Promise<boolean>;        
            yield waitActions_1.waitForObject(this.UsersList);
            yield this.UsersList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                    yield console.log(text);
                    if (yield text.toUpperCase().includes(role.toUpperCase())) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                    yield console.log("value of flag 1" + flag);
                }));
            }));
            // temp=flag;
            yield console.log("value of flag 2" + flag);
            // await console.log("temp"+temp)
            return yield flag;
        });
    }
}
exports.EntitlementPage = EntitlementPage;
