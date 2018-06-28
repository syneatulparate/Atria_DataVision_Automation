import { element, by, ElementFinder, $, browser, ExpectedConditions, ElementArrayFinder } from "protractor";
import { enterText } from "../../uiActions/keyboardActions/setInputField";
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkTitle } from "../../uiActions/verifyActions/checkTitle"
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { isVisible } from "../../uiActions/verifyActions/isVisible";

import { isElementPresent } from "../../uiActions/verifyActions/isElementPresent";
import { securityQuestions } from "../../testData/securityQuestions";
import { clearInputField } from "../../uiActions/keyboardActions/clearInputField";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue";
import { alertAccept, alertDismiss } from "../../uiActions/alertActions/alertAction";
import { async } from "q";
import { waitForObject, staticWait } from "../../uiActions/waitActions/waitActions";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
export class EntitlementPage {
    //--------------------------------------------------------Hardik-----------------------------
    public addUserButton: ElementFinder;
    public txtSearch: ElementFinder;
    public userDropDown: ElementFinder;
    public addSelectedUserButton: ElementFinder;
    public removeIcon: ElementFinder;
    public removeButton: ElementFinder;
    public cancelButton: ElementFinder;
    public deleteRoleButton: ElementFinder;
    public confirmOkButton: ElementFinder;
    public confirmCancelButton: ElementFinder;
    public searchButton: ElementFinder;
    public messageBox: ElementFinder;
    public userProfile: ElementFinder;
    public classicUserOwnerships: ElementFinder;
    public classicContact: ElementFinder;
    public randonname: any;
    public usersLink: ElementFinder;
    public brokersDealersLink: ElementFinder;
    public classicContactViewLink: ElementFinder;
    public classicUsersLink: ElementFinder;
    public cmsesLink: ElementFinder;
    public rolesAndPermissionLink: ElementFinder;
    public sendMyDocsSavesLink: ElementFinder;
    public sendMyDocsScanners: ElementFinder;
    public sendMyScansLink: ElementFinder;
    public userSessionsLink: ElementFinder;
    public manageUserLink: ElementFinder;
    public activeLockouts: ElementFinder;
    public workGroupsLink: ElementFinder;


    //-------------------------------------------------------- Prajyot -----------------------------------------------
    public NewRoleButton: ElementFinder;
    public txtRoleName: ElementFinder;
    public CreateRoleButton: ElementFinder;
    public DetailsButton: ElementFinder;
    public EditButton: ElementFinder;
    public warningMsg: ElementFinder;
    public errMsg: ElementFinder;
    public SaveButton: ElementFinder;
    public headElement: ElementFinder;
    public RolesandPermissionSection: ElementFinder;



    constructor() {
        //--------------------------------------------------------Hardik-----------------------------
        this.addUserButton = element(by.xpath("//button[contains(text(),  '+ Add Users')]"));
        this.txtSearch = element(by.css("input[placeholder ='User search']"));
        this.userDropDown = element(by.css(""));
        this.removeIcon = element(by.id(''));
        this.removeButton = element(by.id(''));
        this.cancelButton = element(by.xpath("//button[contains(text(), 'Cancel')]"));
        this.searchButton = element(by.css("td.td-align-right button.btn.btn-small"))
        this.deleteRoleButton = element(by.xpath("//a[contains(text(),'Delete Role')]"));
        this.addSelectedUserButton = element(by.linkText("Add Selected Users"));
        this.messageBox = element(by.xpath("//div[@class='toast-message']"));
        this.userProfile = element(by.xpath("//*[contains(text(),'User Profile')]"));
        this.classicUserOwnerships = element(by.xpath("//th[contains(text(),  'Classic User Ownerships')]"));
        this.classicContact = element(by.xpath("//th[contains(text(),  'Classic Contact Allow Read Scope')]"));
        this.usersLink = element(by.xpath("//a[@routerlink='users']"));
        this.brokersDealersLink = element(by.xpath("//a[@routerlink='broker-dealers']"));
        this.classicContactViewLink = element(by.xpath("//a[@routerlink='system-usage/classic-contact-views']"));
        this.classicUsersLink = element(by.xpath("a[@routerlink='classic-users']"));
        this.cmsesLink = element(by.xpath("//a[@routerlink='cmses']"));
        this.rolesAndPermissionLink = element(by.xpath("//a[@routerlink='roles']"));
        this.sendMyDocsSavesLink = element(by.xpath("//a[@routerlink='user-content/scans-saves']"));
        this.sendMyDocsScanners = element(by.xpath("//a[@routerlink='user-content/scanners']"));
        this.sendMyScansLink = element(by.xpath("//a[@routerlink='user-content/scans']"));
        this.userSessionsLink = element(by.xpath("//a[@routerlink='system-usage/user-sessions']"));
        this.manageUserLink = element(by.xpath("//a[@routerlink='mpv-administration/manage-users']"));
        this.activeLockouts = element(by.xpath("//a[@routerlink='mpv-administration/active-lockouts']"));
        this.workGroupsLink = element(by.xpath("//a[@routerlink='workgroups']"));
        //"//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']")
        //-------------------------------------------------------- Prajyot -----------------------------------------------
        //this.NewRoleButton=element(by.buttonText("New Role"));
        this.NewRoleButton = element(by.xpath("//button[contains(text(),'+ New Role')]"));
        this.txtRoleName = element(by.xpath("//input[@id='newRoleName']"));
        this.CreateRoleButton = element(by.xpath("//button[contains(text(),  'Create Role')]"));
        this.DetailsButton = element(by.xpath("//button[contains(text(),  'Details')]"));
        this.EditButton = element(by.xpath("//button[contains(text(),  'Edit')]"));
        this.warningMsg = element(by.xpath("//p[contains(text(),  'Role name is limited to 50 characters')]"));
        this.errMsg = element(by.xpath("//div[@class='toast-message']"));
        this.SaveButton = element(by.xpath("//button[contains(text(),  'Save')]"));
        this.headElement = element(by.xpath("//h1"));
        this.RolesandPermissionSection = element(by.xpath("//th[contains(text(),  'Roles & Permissions')]"));

    }

    //--------------------------------------------------------Hardik-----------------------------
    clickOnAddUserButton = async () => {
        await console.log("Click Add user button");
        await waitForObject(this.addUserButton)
        await clickElement(this.addUserButton);
    }

    verifySearchTextBox = async () => {
        await console.log("Search textbox");
        await isElementPresent(this.txtSearch);
    }

    enterUserName = async (userName) => {
        await enterText(this.txtSearch, userName);
    }

    verifyUserName = async (userName) => {
        await checkContainsTextInElementValue(this.userDropDown, userName);
    }

    clickOnAddSelectedUserButton = async () => {
        await clickElement(this.addSelectedUserButton);
    }

    clickOnRemoveIcon = async () => {
        await clickElement(this.removeIcon);
    }

    clickOnRemoveButton = async () => {
        await clickElement(this.removeButton);
    }

    clickOnCancelButton = async () => {
        await clickElement(this.cancelButton);
    }

    deleteRoleAndAccept = async () => {
        await waitForObject(this.deleteRoleButton)
        await clickElement(this.deleteRoleButton);
        await staticWait(3000);
        await alertAccept();
    }

    deleteRoleAndDismiss = async () => {
        await waitForObject(this.deleteRoleButton)
        await clickElement(this.deleteRoleButton);
        await staticWait(3000);
        await alertDismiss();
    }

    clickOnConfirmOkButton = async () => {
        await clickElement(this.confirmOkButton);
    }

    clickOnConfirmCancelButton = async () => {
        await clickElement(this.clickOnCancelButton)
    }

    verifyAndClickOnDetails = async (role) => {
        await waitForObject(element(by.xpath("//*[@dv-tooltip='" + role + "']//following::button[1] | //*[contains(text(),'" + role + "')]//following::button[1]")))
        await clickElement(element(by.xpath("//*[@dv-tooltip='" + role + "']//following::button[1] | //*[contains(text(),'" + role + "')]//following::button[1]")))
    }

    verifyAndClickOnView = async (userName) => {
        await clickElement(element(by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[1] | //*[contains(text(),'" + userName + "')]//following::button[1]")))
    }

    verifyMessage = async (message) => {
        await checkContainsText(this.messageBox, message)
    }

    verifyNoUserPresent = async (userName) => {
        await isElementPresent((element(by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[1] | //*[contains(text(),'" + userName + "')]//following::button[1]"))))
    }

    verifyAddUserButton = async () => {
        await isElementPresent(this.addUserButton)
    }

    removeUser = async (userName) => {
        await clickElement(element(by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[2] | //*[contains(text(),'" + userName + "')]//following::button[2]")))
        await waitForObject(element(by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[3] | //*[contains(text(),'" + userName + "')]//following::button[3]")))
        await clickElement(element(by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[3] | //*[contains(text(),'" + userName + "')]//following::button[3]")))
    }

    clickOnViewButton = async (userName) => {
        await clickElement(element(by.xpath("//*[@dv-tooltip='" + userName + "']//following::button[1] | //*[contains(text(),'" + userName + "')]//following::button[1]")))
    }

    verifyUserProfile = async (userName) => {
        await waitForObject(this.userProfile)
        await isElementPresent(this.userProfile);
        await isElementPresent((element(by.xpath("//*[@dv-tooltip='" + userName + "'] | //*[contains(text(),'" + userName + "')]"))))
    }

    verifyClassicUserOwnerships = async () => {
        await waitForObject(this.classicUserOwnerships);
        await isElementPresent(this.classicUserOwnerships);
    }

    verifyClassicContactReadScope = async () => {
        await waitForObject(this.classicContact);
        await isElementPresent(this.classicContact);
    }


    //-------------------------------------------------------- Prajyot -----------------------------------------------

    verifyWarningMessage = async (errorMessage) => {
        await checkContainsText(element(by.xpath("//p[contains(text(),  'Role name is limited to 50 characters')]")), errorMessage)
    }

    clickOnNewRole = async () => {
        await console.log("Click Add user button");
        // await waitForObject(element(by.xpath("//button[contains(text(),  'New Role')]")))
        await waitForObject(this.NewRoleButton)
        await clickElement(this.NewRoleButton);
    }
    verifyRoleNameField = async () => {
        // await waitForObject(this.txtRoleName)
        await isElementPresent(this.txtRoleName)
    }
    enterRoleName = async (length) => {
        this.createRandomName(length);
        await enterText(this.txtRoleName, this.randonname)
        await waitForObject(this.CreateRoleButton)
    }
    VerifyDuplicateRoleName = async (Rolename) => {

        await enterText(this.txtRoleName, Rolename)
        await waitForObject(this.CreateRoleButton)
    }
    EnterRoleName = async (length) => {
        this.createRandomName(length);
        await enterText(this.txtRoleName, this.randonname)
    }
    clickOnCreateRoleButton = async () => {
        await clickElement(this.CreateRoleButton)
    }
    verifyRoleName = async () => {
        await waitForObject(element(by.xpath("//*[@dv-tooltip='" + this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]")))
        let elemRoleName = element(by.xpath("//*[@dv-tooltip='" + this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]"));
        console.log("element name is = " + this.randonname);
        // await checkContainsText(elemRoleName,this.randonname)
        await clickElement(elemRoleName)
        //await clickElement(element(by.xpath("//div[@class='tbl ng-star-inserted']//tbody//span[contains(text(),'"+role+"')]")))
    }
    verifyRoleNotPresent = async () => {
        await isElementPresent(element(by.xpath("//*[@dv-tooltip='" + this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]")))
    }
    verifyRoleandPermissionColumn = async () => {
        await waitForObject(this.headElement)
        await isElementPresent(element(by.xpath("//th[contains(text(),'Users Assigned This Role')]")))
        await isElementPresent(element(by.xpath("//th[contains(text(),'Permissions')]")))
        await isElementPresent(this.EditButton)
        await isElementPresent(this.deleteRoleButton)
        await isElementPresent(this.addUserButton)
        await isElementPresent(element(by.xpath("//*[contains(text(),'Roles & Permissions')]")))

    }
    clickOnEditButton = async () => {
        await console.log("edir button");
        await waitForObject(this.EditButton)
        await clickElement(this.EditButton);
    }
    SelectCheckBox = async (permission) => {
        await console.log("select check box");
        let elementcheckbox = element(by.xpath("//td[contains(text(),'" + permission + "')]/ancestor::tr[@class='ng-star-inserted']/div//input"));
        if (elementcheckbox.isSelected()) {
            await waitForObject(elementcheckbox)
            await clickElement(elementcheckbox)
        } else {
            await waitForObject(elementcheckbox)
            await clickElement(elementcheckbox)
            await isElementPresent(element(by.xpath("//th[contains(text(),'Permissions')]")))
            await clickElement(elementcheckbox)
        }
    }
    SelectMultipleCheckBox = async () => {
        // await console.log("select check box");
        // let elementcheckbox = element(by.css("span input.checkbox"));

        //     await waitForObject(elementcheckbox)
        //     await clickElement(elementcheckbox)

        element.all(by.css("span input.checkbox")).isSelected().then(function (selected) {
            if (selected) {
                element(by.css("span input.checkbox")).click();
            }
            else {
                element(by.css("span input.checkbox")).click();
            }
        });

    }
    clickOnSaveButton = async () => {
        await console.log("save button ");
        await waitForObject(this.SaveButton)
        await clickElement(this.SaveButton)
    }
    VerifyPermission = async (permission) => {
        await console.log("wait element")
        await waitForObject(element(by.xpath("//td[contains(text(),'" + permission + "')]")))
        await isElementPresent(element(by.xpath("//td[contains(text(),'" + permission + "')]")))
        // await isVisible(element(by.xpath("//td[contains(text(),'" + permission + "')]")), true)

    }
    VerifyNotAddedPermission = async (permission) => {
        await console.log("wait element")
        await isElementPresent(element(by.xpath("//div[@class='dib table-width']//th[contains(text(),'Permissions')]")))
        await isElementPresent(element(by.xpath("//td[contains(text(),'" + permission + "')]")))

        await waitForObject(this.EditButton)
    }
    VerifyRemovePermission = async (permission) => {
        await console.log("wait element")
        await isElementPresent(element(by.xpath("//th[contains(text(),'Permissions')]")))
        await isElementPresent(element(by.xpath("//td[contains(text(),'" + permission + "')]")))

        await waitForObject(this.EditButton)
    }

    createRandomName = async (length) => {
        let i;
        this.randonname = '';
        let autoname = 'Automation_';
        let letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' //Include numbers if you want
        for (i = 0; i < length; i++) {

            this.randonname += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        this.randonname = autoname + this.randonname;
        return this.randonname;
    }
    verifyRolesAndPermissionSection = async () => {
        await waitForObject(this.RolesandPermissionSection);
        await isElementPresent(this.RolesandPermissionSection);
    }


    verifymultiplecheckbox = async () => {
        await clickElement(this.randonname)
        await waitForObject(this.EditButton)
        await clickElement(this.EditButton)
        await staticWait(3000)
        await this.SelectMultipleCheckBox()
        await waitForObject(this.SaveButton)
        await clickElement(this.SaveButton)

    }

    DeleteRolePerm = async () => {
        console.log("create role")
        await waitForObject(this.NewRoleButton)
        await clickElement(this.NewRoleButton);
        await isElementPresent(this.txtRoleName)
        this.createRandomName(7);
        await enterText(this.txtRoleName, this.randonname)
        await waitForObject(this.CreateRoleButton)
        await this.clickOnCreateRoleButton();
        await this.verifyAndClickOnDetails(this.randonname)
        await staticWait(3000)
        await this.deleteRoleAndAccept();

    }
    CancelDeleteRole = async () => {
        console.log("create role")
        await waitForObject(this.NewRoleButton)
        await clickElement(this.NewRoleButton);
        await isElementPresent(this.txtRoleName)
        this.createRandomName(7);
        await enterText(this.txtRoleName, this.randonname)
        await waitForObject(this.CreateRoleButton)
        await this.clickOnCreateRoleButton();
        await this.verifyAndClickOnDetails(this.randonname)
        await staticWait(3000)
        await this.deleteRoleAndDismiss();

    }
    elemetbeforeEdit = async () => {
        console.log("before edit");
        let i;
        let elem = element(by.xpath("//div[@class='tbl']//tbody/tr/td[@colspan='2']"));
        let countele = elem.count();
        let permissionebeforeedit = [];

        for (i = 0; i < countele; i++) {
            elem[i].getText().then(function (text) {
                permissionebeforeedit.push(text);
            });

        }

    }
    elemetAfterEdit = async () => {
        console.log("before edit");
        let i;
        let elem1 = element(by.xpath("//div[@class='tbl']//tbody/tr/td[@colspan='2']"));
        let counteleafter = elem1.count();
        let permissioneAfteredit = [];

        for (i = 0; i < counteleafter; i++) {
            elem1[i].getText().then(function (text) {
                permissioneAfteredit.push(text);
            });

        }

    }
    verifyPermissionCancel = async () => {
        console.log("before edit");
        let i;


        let elem = element(by.css((".tbl-body.zebrastripe tr"))).count().then(function (rowCount) {
            console.log("Count:" + rowCount)
            return rowCount;
        });
        let counteleafter = elem;
        let elem1 = element(by.css((".tbl-body.zebrastripe tr"))).count().then(function (rowCount) {
            console.log("Count:" + rowCount)
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
            console.log("element are same")
        } else {

        }

    }
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

    ClickOnDetails = async () => {
        await waitForObject(element(by.xpath("//*[@dv-tooltip='" + this.randonname + "']//following::button[1] | //*[contains(text(),'" + this.randonname + "')]//following::button[1]")))
        await clickElement(element(by.xpath("//*[@dv-tooltip='" + this.randonname + "']//following::button[1] | //*[contains(text(),'" + this.randonname + "')]//following::button[1]")))
    }



    multipleSelect = async (elem: ElementFinder) => {


        //let elem : ElementFinder = element(by.xpath("//dv-permissions-page//table//tbody//tr"));
        await waitForObject(elem);
        await element.all(elem).count()
            .then(function (size) {
                console.log("size is 1 = " + size);
                //browser.sleep(10000);
                console.log("size is = " + size);
            });

    }
    verifyLink = async (linkName) => {
        let linkPresent = false;
        switch (linkName) {
            case 'Users':
                console.log("Users");
                await isElementPresent(this.usersLink)
                linkPresent = true;
                break;
            case 'Brokers and Dealers':
                console.log("B and D");
                await isElementPresent(this.brokersDealersLink)
                linkPresent = true;
                break;
            case 'Classic Contact Views':
                console.log("CCV");
                await isElementPresent(this.classicContactViewLink)
                linkPresent = true;
                break;
            case 'Classic Users':
                console.log("CU");
                await isElementPresent(this.classicUsersLink)
                linkPresent = true;
                break;
            case 'CMSES':
                console.log("CMSES");
                await isElementPresent(this.cmsesLink)
                linkPresent = true;
                break;
            case 'Roles and Permissions':
                await isElementPresent(this.rolesAndPermissionLink)
                linkPresent = true;
                break;
            case 'Send MyDocs Saves':
                await isElementPresent(this.sendMyDocsSavesLink)
                linkPresent = true;
                break;
            case 'Send My Doc Scanners':
                await isElementPresent(this.sendMyDocsScanners)
                linkPresent = true;
                break;
            case 'Send My Scans':
                await isElementPresent(this.sendMyScansLink)
                linkPresent = true;
                break;
            case 'User Sessions':
                await isElementPresent(this.userSessionsLink)
                linkPresent = true;
                break;
            case 'Manage User':
                await isElementPresent(this.manageUserLink)
                linkPresent = true;
                break;
            case 'Active Lockouts':
                await isElementPresent(this.activeLockouts)
                linkPresent = true;
                break;
            case 'Workgroups':
                await isElementPresent(this.workGroupsLink)
                linkPresent = true;
                break;
        }
        console.log("value of return is " + linkPresent)
        return linkPresent;
    }

    clickOnUsersLink = async () => {
        await waitForObject(this.usersLink)
        await clickElement(this.usersLink);
    }

    clickOnClassicContactViewsLink = async () => {
        await waitForObject(this.classicContactViewLink)
        await clickElement(this.classicContactViewLink);
    }

    clickOnClassicUsersLink = async () => {
        await waitForObject(this.classicUsersLink)
        await clickElement(this.classicUsersLink);
    }
    clickOnCMSESLink = async () => {
        await waitForObject(this.cmsesLink)
        await clickElement(this.cmsesLink);
    }

    clickOnRolesAndPermissions = async () => {
        await waitForObject(this.rolesAndPermissionLink)
        await clickElement(this.rolesAndPermissionLink);
    }
    clickOnSendMyDocSaves = async () => {
        await waitForObject(this.sendMyDocsScanners)
        await clickElement(this.sendMyDocsScanners);
    }

    clickOnSendMyDocsScanners = async () => {
        await waitForObject(this.sendMyDocsScanners)
        await clickElement(this.sendMyDocsScanners);
    }

    clickOnSendMyScans = async () => {
        await waitForObject(this.sendMyScansLink)
        await clickElement(this.sendMyScansLink);
    }

    clickOnUserSessions = async () => {
        await waitForObject(this.userSessionsLink)
        await clickElement(this.userSessionsLink);
    }

    clickOnManageUser = async () => {
        await waitForObject(this.manageUserLink)
        await clickElement(this.manageUserLink);
    }

    clickOnActiveLockoutsLink = async () => {
        await waitForObject(this.activeLockouts)
        await clickElement(this.EditButton);
    }
    clickOnworkGroupsLink = async () => {
        await waitForObject(this.workGroupsLink)
        await clickElement(this.workGroupsLink);
    }

    verifyScreenTiltle =async (title)=>{
        await isElementPresent(element(by.xpath("//h1[contains(text(),'"+title+"')]")))
    }
}