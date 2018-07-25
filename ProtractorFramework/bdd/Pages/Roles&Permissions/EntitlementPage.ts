import { element, by, ElementFinder, $, browser, ExpectedConditions, ElementArrayFinder } from "protractor";
import { enterText } from "../../../uiActions/keyboardActions/setInputField";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText";
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent";
import { alertAccept, alertDismiss } from "../../../uiActions/alertActions/alertAction";
import { waitForObject, staticWait } from "../../../uiActions/waitActions/waitActions";
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement";
import { selectCheckBox, deSelectCheckBox } from "../../../uiActions/mouseActions/checkBoxActions";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class EntitlementPage {
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
    public sum; public sum1;
    public rows; public rows1;
    public searchTextGlobal: ElementFinder;
    public searchBtnGlobal: ElementFinder;
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
    public ContactHovertab: ElementFinder;
    public contactDirectory: ElementFinder;
    public searchlink: ElementFinder;
    public senmydoclink: ElementFinder;
    public comissionslink: ElementFinder;
    public orgchatlink: ElementFinder;
    public cfsenggbloglink: ElementFinder;
    public setupclientscanner: ElementFinder;
    public ComisInterpreterslink: ElementFinder;
    public ToolsTab: ElementFinder;
    public ResourcesTab: ElementFinder;
    public UserTab: ElementFinder;
    public UpdateProfileBtn: ElementFinder;
    public searchtextbox: ElementFinder;
    public Summeryele: ElementFinder;
    public Usersettings: ElementFinder;
    public adminButton: ElementFinder;
    public rolesfiltertxt: ElementFinder;
    public PermissionsFiltertxt: ElementFinder;
    public UsersFiltertxt: ElementFinder;
    public userList: ElementArrayFinder;
    public roleList: ElementArrayFinder;
    public permissionList: ElementArrayFinder;
    public UsersList: ElementArrayFinder;
    public settingslink: ElementFinder;
    public usersetuplink: ElementFinder;

    constructor() {
        this.addUserButton = element(by.xpath("//button[contains(text(),  '+ Add Users')]"));
        this.txtSearch = element(by.css("input[placeholder ='User search']"));
        this.cancelButton = element(by.xpath("//button[contains(text(),'Cancel')]"));
        this.searchButton = element(by.css("td.td-align-right button.btn.btn-small"))
        this.deleteRoleButton = element(by.xpath("//a[contains(text(),'Delete Role')]"));
        this.addSelectedUserButton = element(by.css("button.btn.btn-small[type='submit']"));
        this.messageBox = element(by.xpath("//div[@class='toast-message']"));
        this.userProfile = element(by.xpath("//*[contains(text(),'User Profile')]"));
        this.classicUserOwnerships = element(by.xpath("//th[contains(text(),  'Classic User Ownerships')]"));
        this.classicContact = element(by.xpath("//th[contains(text(),  'Classic Contact Allow Read Scope')]"));
        this.usersLink = element(by.xpath("//a[@routerlink='users']"));
        this.brokersDealersLink = element(by.css("a[routerlink='broker-dealers']"));
        this.classicContactViewLink = element(by.xpath("//a[@routerlink='system-usage/classic-contact-views']"));
        this.classicUsersLink = element(by.css("a[routerlink='classic-users']"));
        this.cmsesLink = element(by.css("a[routerlink='cmses']"));
        this.rolesAndPermissionLink = element(by.css("a[routerlink='roles']"));
        this.sendMyDocsSavesLink = element(by.css("a[routerlink='user-content/scans-saves']"));
        this.sendMyDocsScanners = element(by.css("a[routerlink='user-content/scanners']"));
        this.sendMyScansLink = element(by.css("a[routerlink='user-content/scans']"));
        this.userSessionsLink = element(by.css("a[routerlink='system-usage/user-sessions']"));
        this.manageUserLink = element(by.css("a[routerlink='mpv-administration/manage-users']"));
        this.activeLockouts = element(by.css("a[routerlink='mpv-administration/active-lockouts']"));
        this.workGroupsLink = element(by.css("a[routerlink='workgroups']"));
        this.adminButton = element(by.css("a[routerlink='admin']"));
        this.userList = element.all(by.xpath("//table//th[contains(text(),'Assign Users This Role')]//ancestor::table[1]//tr/td[1]/span[1]"));
        this.searchTextGlobal = element(by.css("input[placeholder ='Search dataVISION']"));
        this.searchBtnGlobal = element(by.id("searchDV"));
        //"//dl/dt[@id='system']/ancestor::dl//a[@routerlink='users']")
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
        this.ContactHovertab = element(by.xpath("//div[contains(text(),'Contacts')]"));
        this.contactDirectory = element(by.xpath("//a[contains(text(),'Directory')"));
        //this.contactDirectory=element(by.css("//a[routerlink='contacts']"));
        this.searchlink = element(by.xpath("//a[@routerlink='/search']"));
        this.senmydoclink = element(by.css("a[routerlink='scans']"));
        this.comissionslink = element(by.xpath("//a[contains(text(),'Commissions')]"));
        this.ToolsTab = element(by.xpath("//div[contains(text(),'Tools')]"));
        this.orgchatlink = element(by.xpath("//a[contains(text(),'Org Chart')]"));
        this.cfsenggbloglink = element(by.xpath("//a[contains(text(),'CFS/SPF Engineering Blog')]"));
        this.setupclientscanner = element(by.xpath("//a[contains(text(),'+ Set Up Client Scanner')]"));
        this.ComisInterpreterslink = element(by.xpath("//a[contains(text(),'Commissions Interpreters')]"))
        this.ResourcesTab = element(by.xpath("//*[contains(text(),'Resources')]"));
        this.UserTab = element(by.xpath("//nav[@class='masthead-nav']/div[2]/div[2]"));
        this.UpdateProfileBtn = element(by.xpath("//a/span[text()='Update Profile']"));
        this.searchtextbox = element(by.css("input[placeholder ='Search dataVISION']"));
        this.Summeryele = element(by.css("h2.hr"));
        this.Usersettings = element(by.xpath("//a[@ng-reflect-router-link='settings/user/profile']"));
        this.rolesfiltertxt = element(by.css("input[placeholder='Filter Roles']"));
        this.PermissionsFiltertxt = element(by.css("input[placeholder='Filter Permissions']"));
        this.UsersFiltertxt = element(by.css("input[placeholder='Filter Users']"));
        this.roleList = element.all(by.xpath("//table//th[contains(text(),'Role')]//ancestor::table[1]//span[1]"));
        this.permissionList = element.all(by.xpath("//table//th[contains(text(),'Permissions')]//ancestor::table[1]//tbody//tr/td[1]"));
        this.UsersList = element.all(by.xpath("//table//th[contains(text(),'Users')]//ancestor::table[1]//td[1]"));
        this.settingslink = element(by.css("a[routerlink='settings/usersettings']"));
        this.usersetuplink = element(by.css("a[routerlink='settings/usersetup']"));
    }

    clickOnAddUserButton = async () => {
        await console.log("Click Add user button");
        await waitForObject(this.addUserButton)
        await clickElement(this.addUserButton);
    }

    verifySearchTextBox = async () => {
        let flag: any;
        return await isElementPresent(this.txtSearch).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifyGlobalSearchTexbox = async () => {
        let flag: any;
        return await isElementPresent(this.searchTextGlobal)
            .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
    }
    verifyGlobalSearchBtn = async () => {
        let flag: any;
        return await isElementPresent(this.searchTextGlobal)
            .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
    }

    clickOnSearchButton = async () => {
        await waitForObject(this.searchButton)
        await clickElement(this.searchButton)
    }
    enterUserName = async (userName) => {
        await enterText(this.txtSearch, userName);
    }

    async verifyUserName(userName): Promise<boolean> {
        let flag: any
        flag = false;
        // let temp:Promise<boolean>;        
        await waitForObject(this.userList);
        await this.userList.each(async (element, index) => {
            await element.getText().then(async (text) => {
                await console.log(text);
                if (await text.toUpperCase().includes(userName.toUpperCase())) {
                    flag = true;
                } else {
                    flag = false;
                }
                await console.log("value of flag 1" + flag)
            });

        })

        await console.log("value of flag 2" + flag)

        return flag;
    }

    clickOnAddSelectedUserButton = async () => {
        await waitForObject(this.addSelectedUserButton)
        await clickElement(this.addSelectedUserButton);
    }

    clickOnRemoveIcon = async () => {
        await clickElement(this.removeIcon);
    }

    clickOnRemoveButton = async () => {
        await clickElement(this.removeButton);
    }

    clickOnCancelButton = async () => {
        await waitForObject(this.cancelButton);
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
        let roleDetailsButton = element(by.xpath("//*[@dv-tooltip='" +
            role + "']//following::button[1] | //*[contains(text(),'" +
            role + "')]//following::button[1]"))
        await waitForObject(roleDetailsButton)
        await clickElement(roleDetailsButton)
    }

    verifyAndClickOnView = async (userName) => {
        let viewButton = element(by.xpath("//*[@dv-tooltip='" +
            userName + "']//following::button[1] | //*[contains(text(),'" +
            userName + "')]//following::button[1]"))
        await clickElement(viewButton)
    }

    verifyMessage = async (message) => {
        await checkContainsText(this.messageBox, message)
    }

    verifyNoUserPresent = async (userName) => {
        await isElementPresent((element(by.xpath("//*[@dv-tooltip='" +
            userName + "']//following::button[1] | //*[contains(text(),'" +
            userName + "')]//following::button[1]"))))
    }

    verifyAddUserButton = async () => {
        await this.verifyElement(this.addUserButton)
        // await isElementPresent(this.addUserButton)
    }

    removeUser = async (userName) => {
        let minusButton = element(by.xpath("//*[@dv-tooltip='" +
            userName + "']//following::button[2] | //*[contains(text(),'" +
            userName + "')]//following::button[2]"))
        let removeButton = element(by.xpath("//*[@dv-tooltip='" +
            userName + "']//following::button[3] | //*[contains(text(),'" +
            userName + "')]//following::button[3]"))

        await clickElement(minusButton)
        await waitForObject(removeButton)
        await clickElement(removeButton)
        await staticWait(3000)
    }

    clickOnViewButton = async (userName) => {
        await clickElement(element(by.xpath("//*[@dv-tooltip='" +
            userName + "']//following::button[1] | //*[contains(text(),'" +
            userName + "')]//following::button[1]")))
    }

    verifyUserProfile = async (userName) => {
        await waitForObject(this.userProfile)
        let useprofilrele = element(by.xpath("//*[@dv-tooltip='" +
            userName + "'] | //*[contains(text(),'" + userName + "')]"))
        await this.verifyElement(this.userProfile)
        // await isElementPresent(this.userProfile);
        await this.verifyElement(useprofilrele)
    }

     async verifyClassicUserOwnerships (): Promise<boolean> {
        let linkPresent: Promise<boolean>;

        await console.log("wait element")
        let flag: any;
        await waitForObject(this.classicUserOwnerships);
        linkPresent= this.verifyElement(this.classicUserOwnerships)
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;
    }

    verifyClassicContactReadScope = async () => {
        await waitForObject(this.classicContact);
        await this.verifyElement(this.classicContact);
    }

    selectUser = async (userName) => {
        let checkBoxForUser = element(by.xpath("//*[(text()='" + userName + "')]//ancestor::tr//tbody//input"))
        await waitForObject(checkBoxForUser)
        await clickElement(checkBoxForUser)
    }

    verifyUserAdded = async (userName) => {
        let flag: any;
        let userAdded = element(by.xpath("//*[contains(text(),'" + userName + "')]"));
        return await isElementPresent(userAdded).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });

    }

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
        await this.verifyElement(this.txtRoleName)
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
        let linkPresent: Promise<boolean>;
        await console.log("wait element")
        let elemRoleName = element(by.xpath("//*[@dv-tooltip='" +
            this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]"));
        console.log("element name is = " + this.randonname);
        await waitForObject(elemRoleName)
        // await checkContainsText(elemRoleName,this.randonname)
        await clickElement(elemRoleName)
          linkPresent = this.verifyElement(elemRoleName)
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;
        //await clickElement(element(by.xpath("//div[@class='tbl ng-star-inserted']//tbody//span[contains(text(),'"+role+"')]")))
    }
    verifyRoleNotPresent = async () => {
        let linkPresent: Promise<boolean>;
        linkPresent= this.verifyElement(element(by.xpath("//*[@dv-tooltip='" +
            this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]")))
            await linkPresent.then(function (text) { console.log(text) })
            return linkPresent;
    }
    verifyRoleandPermissionColumn = async () => {
        let linkPresent: Promise<boolean>;
        await waitForObject(this.headElement)
        linkPresent =  this.verifyElement(element(by.xpath("//th[contains(text(),'Users Assigned This Role')]")))
        linkPresent = this.verifyElement(element(by.xpath("//th[contains(text(),'Permissions')]")))
        
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;
    }
    clickOnEditButton = async () => {
        await console.log("edir button");
        await waitForObject(this.EditButton)
        await clickElement(this.EditButton);
       
    }
    SelectCheckBox = async (permission) => {
        await console.log("select check box");
        let checkelement = element(by.xpath("//*[text()='" + permission + "']/ancestor::tr[@class='ng-star-inserted']//input | //*[@dv-tooltip='" +
            permission + "']/ancestor::tr[@class='ng-star-inserted']//input"));
        await waitForObject(checkelement);
        await selectCheckBox(checkelement);
    }
    deSelectCheckBox = async (permission) => {
        await console.log("select check box");
        let permissionCheckbox = element(by.xpath("//*[text()='" +
            permission + "']/ancestor::tr[@class='ng-star-inserted']//input | //*[@dv-tooltip='" +
            permission + "']/ancestor::tr[@class='ng-star-inserted']//input"))
        await waitForObject(permissionCheckbox)
        await deSelectCheckBox(permissionCheckbox);
    }
    SelectMultipleCheckBox = async () => {
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
    async VerifyPermission(permission): Promise<boolean> {
        let linkPresent: Promise<boolean>;
        await console.log("wait element")
        let permissionelement1 = element(by.xpath("//*[text()='"+permission+"'] | //*[@dv-tooltip='"+permission+"']")) 
        linkPresent = this.verifyElement(permissionelement1)
        await linkPresent.then(function (text) { console.log(text) })
         return await linkPresent;
    }

    VerifyRemovePermission = async (permission) => {
        await console.log("wait element")
        let elem1 = element(by.xpath("//th[contains(text(),'Permissions')]"))
        let elem = element(by.xpath("//*[text()='" + permission + "']"))
        await this.verifyElement(elem1)
        await this.verifyElement(elem)
        // await isElementPresent(element(by.xpath("//th[contains(text(),'Permissions')]")))
        //await isElementPresent(element(by.xpath("//td[contains(text(),'" + permission + "')]")))

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
     async verifyRolesAndPermissionSection() : Promise<boolean> {
        let linkPresent: Promise<boolean>;

        await console.log("wait element")
        let flag: any;
        await waitForObject(this.RolesandPermissionSection);
        linkPresent= this.verifyElement(this.RolesandPermissionSection)
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;
        // await isElementPresent(this.RolesandPermissionSection);
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
        //await this.verifyElement(this.txtRoleName)
        // await isElementPresent(this.txtRoleName)
       await this.createRandomName(7);
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
        await this.createRandomName(7);
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

    ClickOnDetails = async () => {
        let elem1=element(by.xpath("//*[@dv-tooltip='" +this.randonname + "']//following::button[1] | //*[contains(text(),'" +this.randonname + "')]//following::button[1]"))
        await waitForObject(elem1)
        await clickElement(elem1)
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
    async verifyLink(linkName): Promise<boolean> {
        let linkPresent: Promise<boolean>;
        staticWait(5000)
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
                linkPresent = this.verifyCFSSPFEngineeringBlog()
                //linkPresent = true;
                break;
            case 'SendMyDocs':
                linkPresent = this.verifySendMyDocsLink()
                //  linkPresent = true;
                break;
            case 'User settings':
                linkPresent = this.verifyUserprofilelink()
                break;
            case 'Update Profile':
                linkPresent = this.verifyUpdateProfileBtn()
                break;
            case 'Settings':
                linkPresent = this.verifysettingsLink()
                break;
            case 'User Setup':
                linkPresent = this.verifyUserSetupLink()
                break;
            case 'Commissions Interpreters':
                linkPresent = this.verifyCommissionsInterpretersLink()
                break;
            case 'Set Up Client Scanner':
                linkPresent = this.verifySetUpClientScannerlink()
                break;
        }
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;

    }
    verifyBrokersAndDealerslink = async () => {
        let flag: any;
        return await isElementPresent(this.brokersDealersLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }
    verifyUsersLink = async () => {
        let flag: any;
        return await isElementPresent(this.usersLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyCFSSPFEngineeringBlog = async () => {
        let flag: any;
        return await isElementPresent(this.cfsenggbloglink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifySendMyDocsLink = async () => {
        let flag: any;
        return await isElementPresent(this.senmydoclink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyCommissionsInterpretersLink = async () => {
        let flag: any;
        return await isElementPresent(this.ComisInterpreterslink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifySetUpClientScannerlink = async () => {
        let flag: any;
        return await isElementPresent(this.setupclientscanner).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyUserprofilelink = async () => {
        let flag: any;
        return await isElementPresent(this.Usersettings).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyUpdateProfileBtn = async () => {
        let flag: any;
        return await isElementPresent(this.UpdateProfileBtn).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyClassicContactViewsLink = async () => {
        let flag: any;
        return await isElementPresent(this.classicContactViewLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifyClassicUsersLink = async () => {
        let flag: any;
        return await isElementPresent(this.classicUsersLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifyCMSesLink = async () => {
        let flag: any;
        return await isElementPresent(this.cmsesLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifyRolesAndPermissionsLink = async () => {
        let flag: any;
        return await isElementPresent(this.rolesAndPermissionLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifySendMyDocsSavesLink = async () => {
        let flag: any;
        return await isElementPresent(this.sendMyDocsSavesLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifySendMyDocsScannersLink = async () => {
        let flag: any;
        return await isElementPresent(this.sendMyDocsScanners).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifySendMyScansLink = async () => {
        let flag: any;
        return await isElementPresent(this.sendMyScansLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }
    verifyUserSessionsLink = async () => {
        let flag: any;
        return await isElementPresent(this.userSessionsLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifyManageUsersLink = async () => {
        let flag: any;
        return await isElementPresent(this.manageUserLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }

    verifyActiveLockoutLink = async () => {
        let flag: any;
        return await isElementPresent(this.activeLockouts).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }
    verifyWorkgroupsLink = async () => {
        let flag: any;
        return await isElementPresent(this.workGroupsLink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }
    verifysettingsLink = async () => {
        let flag: any;
        return await isElementPresent(this.settingslink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }
    verifyUserSetupLink = async () => {
        let flag: any;
        return await isElementPresent(this.usersetuplink).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;
        });
    }
    mousehoverandverifylink = async (element, element1) => {
        console.log("hover elemet")
        await moveToElement(element);
        await staticWait(2000)
        await waitForObject(element1);
    }

    mousehoverandclicklink = async (element) => {
        console.log("mouse hover on element" + element);
        await moveToElement(element);
        await staticWait(3000)
        await console.log("click on element" + element);
        await clickElement(element);
        await staticWait(3000)
    }

    verifyScreenTiltle = async (title) => {
        await isElementPresent(element(by.xpath("//h1[contains(text(),'" + title + "')]")))
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
    clickOnLink = async (element, element1) => {
        await moveToElement(element);
        await staticWait(2000)
        await clickElement(element1)

    }
    clickOnUserName = async (linkname) => {
        let ele = element(by.xpath("//div[@class='tbl']//tbody/tr//a[contains(text(),'" + linkname + "')]"))
    }


    EnterString = async (string, element) => {

        await console.log("Inside enter username");
        await enterText(element, string);


    }
    afterEnterRole = async (role) => {
        await console.log("count test");
        this.rows1 = element.all(by.xpath("//tbody[@class='tbl-body zebrastripe ng-star-inserted']//tr//span[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') , translate('"
            + role + "', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))]"));
        this.sum1 = this.rows1.count().then(function (count) {
            var su = count;
            console.log(su);
            return su;
        });

        await console.log("count before = " + this.sum1)
        return await this.sum1;
    }

    async verifyRoleNameFilter(role): Promise<boolean> {
        let flag: any
        flag = false;
        // let temp:Promise<boolean>;        
        await waitForObject(this.roleList);
        await this.roleList.each(async (element, index) => {
            await element.getText().then(async (text) => {
                await console.log(text);
                if (await text.toUpperCase().includes(role.toUpperCase())) {
                    flag = true;
                } else {
                    flag = false;
                }
                await console.log("value of flag 1" + flag)
            });

        })
        // temp=flag;
        await console.log("value of flag 2" + flag)
        // await console.log("temp"+temp)
        return flag;
    }

    async verifyPermissionFilter(role): Promise<boolean> {
        let flag: any
        flag = false;
        // let temp:Promise<boolean>;        
        await waitForObject(this.permissionList);
        await this.permissionList.each(async (element, index) => {
            await element.getText().then(async (text) => {
                await console.log(text);
                if (await text.toUpperCase().includes(role.toUpperCase())) {
                    flag = true;
                } else {
                    flag = false;
                }
                await console.log("value of flag 1" + flag)
            })

        })
        // temp=flag;
        await console.log("value of flag 2" + flag)
        // await console.log("temp"+temp)
        return await flag;

    }
    async verifyUsersFilter(role): Promise<boolean> {
        let flag: any
        flag = false;
        // let temp:Promise<boolean>;        
        await waitForObject(this.UsersList);
        await this.UsersList.each(async (element, index) => {
            await element.getText().then(async (text) => {
                await console.log(text);
                if (await text.toUpperCase().includes(role.toUpperCase())) {
                    flag = true;
                } else {
                    flag = false;
                }
                await console.log("value of flag 1" + flag)
            });

        })
        // temp=flag;
        await console.log("value of flag 2" + flag)
        // await console.log("temp"+temp)
        return await flag;
    }

    clickOnSettngsLink = async () => {
        await waitForObject(this.settingslink)
        await clickElement(this.settingslink);
    }
    clickOnUserSetup = async () => {

        await waitForObject(this.usersetuplink)
        await clickElement(this.usersetuplink);
    }

    verifyElement = async (elem) => {
        let flag: any;
        return await isElementPresent(elem).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyDeleteroleBtn = async () => {
        let flag: any;
        return await isElementPresent(this.deleteRoleButton).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyaddUserButton = async (elem) => {
        let flag: any;
        return await isElementPresent(this.addUserButton).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyEditButton = async () => {
        let flag: any;
        return await isElementPresent(this.EditButton).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    verifyElementRoleAndpermision = async (elem) => {
        let flag: any;
        return await isElementPresent(element(by.xpath("//h1[contains(text(),'Roles & Permissions')]"))).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
}
