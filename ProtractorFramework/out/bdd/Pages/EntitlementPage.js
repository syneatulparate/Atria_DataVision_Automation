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
const checkContainsTextInElementValue_1 = require("../../uiActions/verifyActions/checkContainsTextInElementValue");
const alertAction_1 = require("../../uiActions/alertActions/alertAction");
const waitActions_1 = require("../../uiActions/waitActions/waitActions");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class EntitlementPage {
    constructor() {
        //--------------------------------------------------------Hardik-----------------------------
        this.clickOnAddUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Click Add user button");
            yield waitActions_1.waitForObject(this.addUserButton);
            yield clickElement_1.clickElement(this.addUserButton);
        });
        this.verifySearchTextBox = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Search textbox");
            yield isElementPresent_1.isElementPresent(this.txtSearch);
        });
        this.enterUserName = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtSearch, userName);
        });
        this.verifyUserName = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsTextInElementValue_1.checkContainsTextInElementValue(this.userDropDown, userName);
        });
        this.clickOnAddSelectedUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.addSelectedUserButton);
        });
        this.clickOnRemoveIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.removeIcon);
        });
        this.clickOnRemoveButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.removeButton);
        });
        this.clickOnCancelButton = () => __awaiter(this, void 0, void 0, function* () {
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
            yield waitActions_1.waitForObject(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + role + "']//following::button[1] | //*[contains(text(),'" + role + "')]//following::button[1]")));
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + role + "']//following::button[1] | //*[contains(text(),'" + role + "')]//following::button[1]")));
        });
        this.verifyAndClickOnView = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[1] | //*[contains(text(),'" + userName + "')]//following::button[1]")));
        });
        this.verifyMessage = (message) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsText_1.checkContainsText(this.messageBox, message);
        });
        this.verifyNoUserPresent = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield isElementPresent_1.isElementPresent((protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[1] | //*[contains(text(),'" + userName + "')]//following::button[1]"))));
        });
        this.verifyAddUserButton = () => __awaiter(this, void 0, void 0, function* () {
            yield isElementPresent_1.isElementPresent(this.addUserButton);
        });
        this.removeUser = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[2] | //*[contains(text(),'" + userName + "')]//following::button[2]")));
            yield waitActions_1.waitForObject(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[3] | //*[contains(text(),'" + userName + "')]//following::button[3]")));
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[3] | //*[contains(text(),'" + userName + "')]//following::button[3]")));
        });
        this.clickOnViewButton = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[1] | //*[contains(text(),'" + userName + "')]//following::button[1]")));
        });
        this.verifyUserProfile = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.userProfile);
            yield isElementPresent_1.isElementPresent(this.userProfile);
            yield isElementPresent_1.isElementPresent((protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + userName + "'] | //*[contains(text(),'" + userName + "')]"))));
        });
        this.verifyClassicUserOwnerships = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.classicUserOwnerships);
            yield isElementPresent_1.isElementPresent(this.classicUserOwnerships);
        });
        this.verifyClassicContactReadScope = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.classicContact);
            yield isElementPresent_1.isElementPresent(this.classicContact);
        });
        //-------------------------------------------------------- Prajyot -----------------------------------------------
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
            yield isElementPresent_1.isElementPresent(this.txtRoleName);
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
            yield waitActions_1.waitForObject(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]")));
            let elemRoleName = protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]"));
            console.log("element name is = " + this.randonname);
            // await checkContainsText(elemRoleName,this.randonname)
            yield clickElement_1.clickElement(elemRoleName);
            //await clickElement(element(by.xpath("//div[@class='tbl ng-star-inserted']//tbody//span[contains(text(),'"+role+"')]")))
        });
        this.verifyRoleNotPresent = () => __awaiter(this, void 0, void 0, function* () {
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]")));
        });
        this.verifyRoleandPermissionColumn = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.headElement);
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Users Assigned This Role')]")));
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Permissions')]")));
            yield isElementPresent_1.isElementPresent(this.EditButton);
            yield isElementPresent_1.isElementPresent(this.deleteRoleButton);
            yield isElementPresent_1.isElementPresent(this.addUserButton);
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Roles & Permissions')]")));
        });
        this.clickOnEditButton = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("edir button");
            yield waitActions_1.waitForObject(this.EditButton);
            yield clickElement_1.clickElement(this.EditButton);
        });
        this.SelectCheckBox = (permission) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("select check box");
            let elementcheckbox = protractor_1.element(protractor_1.by.xpath("//td[contains(text(),'" + permission + "')]/ancestor::tr[@class='ng-star-inserted']/div//input"));
            if (elementcheckbox.isSelected()) {
                yield waitActions_1.waitForObject(elementcheckbox);
                yield clickElement_1.clickElement(elementcheckbox);
            }
            else {
                yield waitActions_1.waitForObject(elementcheckbox);
                yield clickElement_1.clickElement(elementcheckbox);
                yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Permissions')]")));
                yield clickElement_1.clickElement(elementcheckbox);
            }
        });
        this.SelectMultipleCheckBox = () => __awaiter(this, void 0, void 0, function* () {
            // await console.log("select check box");
            // let elementcheckbox = element(by.css("span input.checkbox"));
            //     await waitForObject(elementcheckbox)
            //     await clickElement(elementcheckbox)
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
        this.VerifyPermission = (permission) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("wait element");
            yield waitActions_1.waitForObject(protractor_1.element(protractor_1.by.xpath("//td[contains(text(),'" + permission + "')]")));
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//td[contains(text(),'" + permission + "')]")));
            // await isVisible(element(by.xpath("//td[contains(text(),'" + permission + "')]")), true)
        });
        this.VerifyNotAddedPermission = (permission) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("wait element");
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//div[@class='dib table-width']//th[contains(text(),'Permissions')]")));
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//td[contains(text(),'" + permission + "')]")));
            yield waitActions_1.waitForObject(this.EditButton);
        });
        this.VerifyRemovePermission = (permission) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("wait element");
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//th[contains(text(),'Permissions')]")));
            yield isElementPresent_1.isElementPresent(protractor_1.element(protractor_1.by.xpath("//td[contains(text(),'" + permission + "')]")));
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
        this.verifyRolesAndPermissionSection = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.RolesandPermissionSection);
            yield isElementPresent_1.isElementPresent(this.RolesandPermissionSection);
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
            yield isElementPresent_1.isElementPresent(this.txtRoleName);
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
            yield isElementPresent_1.isElementPresent(this.txtRoleName);
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
        // verifyPermissionSave=async(permission)=>{
        //     console.log("before edit");
        //     let i;
        //     let elem1=element.all(by.xpath("//div[@class='tbl']//tbody/tr/td[@colspan='2']"));
        //     elem1.getSize().then(async =>{
        //     })
        //     console.log("size is = "+countele);
        //     let permissionebeforeedit=[];
        //     for(i=0;i<countele;i++){
        //         // elem1.get(i).getText().then(async(text)=> {
        //         //    await permissionebeforeedit.push(text);
        //         //   });
        //    var text1 =  elem1.get(i).getText();
        //    console.log(text1);
        //     }
        //     await this.clickOnEditButton();
        //     await this.SelectCheckBox(permission)
        //     await this.clickOnSaveButton();
        //     await staticWait(3000);
        //     let elem=element.all(by.xpath("//div[@class='tbl']//tbody/tr/td[@colspan='2']"));
        //     let counteleafter=elem.getSize();
        //     console.log("size is = "+counteleafter);
        //     let permissioneAfteredit=[];
        //     for(i=0;i<counteleafter;i++){
        //         // elem.get(i).getText().then(async(text)=> {
        //         //    await permissioneAfteredit.push(text);
        //         //   });
        //         var text2 =  elem.get(i).getText();
        //     }
        //     if (countele!=counteleafter){
        //         if(countele<counteleafter){
        //             await isElementPresent(element(by.xpath("//td[contains(text(),'"+permission+"')]")))
        //         }
        //     }
        // }
        this.ClickOnDetails = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + this.randonname + "']//following::button[1] | //*[contains(text(),'" + this.randonname + "')]//following::button[1]")));
            yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("//*[@dv-tooltip='" + this.randonname + "']//following::button[1] | //*[contains(text(),'" + this.randonname + "')]//following::button[1]")));
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
        this.verifyLink = (linkName) => __awaiter(this, void 0, void 0, function* () {
            let linkPresent = false;
            switch (linkName) {
                case 'Users':
                    console.log("Users");
                    yield isElementPresent_1.isElementPresent(this.usersLink);
                    linkPresent = true;
                    break;
                case 'Brokers and Dealers':
                    console.log("B and D");
                    // await isElementPresent(this.brokersDealersLink)
                    // linkPresent = true;
                    break;
                case 'Classic Contact Views':
                    console.log("CCV");
                    // await isElementPresent(this.classicContactViewLink)
                    // linkPresent = true;
                    break;
                case 'Classic Users':
                    console.log("CU");
                    // await isElementPresent(this.classicUsersLink)
                    // linkPresent = true;
                    break;
                case 'CMSES Link':
                    console.log("CMSES");
                    yield isElementPresent_1.isElementPresent(this.cmsesLink);
                    linkPresent = true;
                    break;
                case 'Roles and Permissions Link':
                    // await isElementPresent(this.rolesAndPermissionLink)
                    // linkPresent = true;
                    break;
                case 'Send MyDocs Saves Link':
                    // await isElementPresent(this.sendMyDocsSavesLink)
                    // linkPresent = true;
                    break;
                case 'Send My Doc Scanners Link':
                    // await isElementPresent(this.sendMyDocsScanners)
                    // linkPresent = true;
                    break;
                case 'Send My Scans Link':
                    // await isElementPresent(this.sendMyScansLink)
                    // linkPresent = true;
                    break;
                case 'User Sessions':
                    // await isElementPresent(this.userSessionsLink)
                    // linkPresent = true;
                    break;
                case 'Manage User Link':
                    // await isElementPresent(this.manageUserLink)
                    // linkPresent = true;
                    break;
                case 'Active Lockouts Link':
                    // await isElementPresent(this.activeLockouts)
                    // linkPresent = true;
                    break;
                case 'Workgroups Link':
                    // await isElementPresent(this.workGroupsLink)
                    // linkPresent = true;
                    break;
            }
            console.log("value of return is " + linkPresent);
            return linkPresent;
        });
        //--------------------------------------------------------Hardik-----------------------------
        this.addUserButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),  '+ Add Users')]"));
        this.txtSearch = protractor_1.element(protractor_1.by.css("input[placeholder ='User search']"));
        this.userDropDown = protractor_1.element(protractor_1.by.css(""));
        this.removeIcon = protractor_1.element(protractor_1.by.id(''));
        this.removeButton = protractor_1.element(protractor_1.by.id(''));
        this.cancelButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(), 'Cancel')]"));
        this.searchButton = protractor_1.element(protractor_1.by.css("td.td-align-right button.btn.btn-small"));
        this.deleteRoleButton = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Delete Role')]"));
        this.addSelectedUserButton = protractor_1.element(protractor_1.by.linkText("Add Selected Users"));
        this.messageBox = protractor_1.element(protractor_1.by.xpath("//div[@class='toast-message']"));
        this.userProfile = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'User Profile')]"));
        this.classicUserOwnerships = protractor_1.element(protractor_1.by.xpath("//th[contains(text(),  'Classic User Ownerships')]"));
        this.classicContact = protractor_1.element(protractor_1.by.xpath("//th[contains(text(),  'Classic Contact Allow Read Scope')]"));
        this.usersLink = protractor_1.element(protractor_1.by.xpath("//a[@routerlink='users']"));
        this.brokersDealersLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.classicContactViewLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.classicUsersLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.cmsesLink = protractor_1.element(protractor_1.by.xpath("//a[@routerlink='cmses']"));
        this.rolesAndPermissionLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.sendMyDocsSavesLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.sendMyDocsScanners = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.sendMyScansLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.userSessionsLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.manageUserLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.activeLockouts = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        this.workGroupsLink = protractor_1.element(protractor_1.by.xpath("//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']"));
        //-------------------------------------------------------- Prajyot -----------------------------------------------
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
    }
}
exports.EntitlementPage = EntitlementPage;
