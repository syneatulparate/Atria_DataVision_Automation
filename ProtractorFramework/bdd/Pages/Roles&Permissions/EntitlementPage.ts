import { element, by, ElementFinder, $, browser, ExpectedConditions, ElementArrayFinder } from "protractor"
import { enterText } from "../../../uiActions/keyboardActions/setInputField"
import { clickElement } from "../../../uiActions/mouseActions/clickElement"
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText"
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent"
import { alertAccept, alertDismiss } from "../../../uiActions/alertActions/alertAction"
import { waitForObject, staticWait } from "../../../uiActions/waitActions/waitActions"
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement"
import { selectCheckBox, deSelectCheckBox } from "../../../uiActions/mouseActions/checkBoxActions"
import { protractor } from "protractor/built/ptor"

const chai = require("chai").use(require("chai-as-promised"))
const expect = chai.expect

export class EntitlementPage {
    public addUserButton: ElementFinder
    public txtSearch: ElementFinder
    public userDropDown: ElementFinder
    public addSelectedUserButton: ElementFinder
    public removeIcon: ElementFinder
    public removeButton: ElementFinder
    public cancelButton: ElementFinder
    public deleteRoleButton: ElementFinder
    public confirmOkButton: ElementFinder
    public confirmCancelButton: ElementFinder
    public searchButton: ElementFinder
    public messageBox: ElementFinder
    public userProfile: ElementFinder
    public classicUserOwnerships: ElementFinder
    public classicContact: ElementFinder
    public randonname: any
    public usersLink: ElementFinder
    public brokersDealersLink: ElementFinder
    public classicContactViewLink: ElementFinder
    public classicUsersLink: ElementFinder
    public cmsesLink: ElementFinder
    public rolesAndPermissionLink: ElementFinder
    public sendMyDocsSavesLink: ElementFinder
    public sendMyDocsScanners: ElementFinder
    public sendMyScansLink: ElementFinder
    public userSessionsLink: ElementFinder
    public manageUserLink: ElementFinder
    public activeLockouts: ElementFinder
    public workGroupsLink: ElementFinder
    public sum
    public sum1
    public rows
    public rows1
    public searchTextGlobal: ElementFinder
    public searchBtnGlobal: ElementFinder
    public NewRoleButton: ElementFinder
    public txtRoleName: ElementFinder
    public CreateRoleButton: ElementFinder
    public DetailsButton: ElementFinder
    public EditButton: ElementFinder
    public warningMsg: ElementFinder
    public errMsg: ElementFinder
    public SaveButton: ElementFinder
    public headElement: ElementFinder
    public RolesandPermissionSection: ElementFinder
    public ContactHovertab: ElementFinder
    public contactDirectory: ElementFinder
    public searchlink: ElementFinder
    public senmydoclink: ElementFinder
    public comissionslink: ElementFinder
    public orgchatlink: ElementFinder
    public cfsenggbloglink: ElementFinder
    public setupclientscanner: ElementFinder
    public ComisInterpreterslink: ElementFinder
    public ToolsTab: ElementFinder
    public ResourcesTab: ElementFinder
    public UserTab: ElementFinder
    public UpdateProfileBtn: ElementFinder
    public searchtextbox: ElementFinder
    public Summeryele: ElementFinder
    public Usersettings: ElementFinder
    public adminButton: ElementFinder
    public rolesfiltertxt: ElementFinder
    public PermissionsFiltertxt: ElementFinder
    public UsersFiltertxt: ElementFinder
    public userList: ElementArrayFinder
    public roleList: ElementArrayFinder
    public permissionList: ElementArrayFinder
    public UsersList: ElementArrayFinder
    public settingslink: ElementFinder
    public usersetuplink: ElementFinder

    constructor() {
        this.addUserButton = element(by.xpath("//button[contains(text(),  '+ Add Users')]"))
        this.txtSearch = element(by.css("input[placeholder ='User search']"))
        this.cancelButton = element(by.xpath("//button[contains(text(),'Cancel')]"))
        this.searchButton = element(by.css("td.td-align-right button.btn.btn-small"))
        this.deleteRoleButton = element(by.xpath("//a[contains(text(),'Delete Role')]"))
        this.addSelectedUserButton = element(by.css("button.btn.btn-small[type='submit']"))
        this.messageBox = element(by.xpath("//div[@class='toast-message']"))
        this.userProfile = element(by.xpath("//*[contains(text(),'User Profile')]"))
        this.classicUserOwnerships = element(by.xpath("//th[contains(text(),  'Classic User Ownerships')]"))
        this.classicContact = element(by.xpath("//th[contains(text(),  'Classic Contact Allow Read Scope')]"))
        this.usersLink = element(by.xpath("//a[@routerlink='users']"))
        this.brokersDealersLink = element(by.css("a[routerlink='broker-dealers']"))
        this.classicContactViewLink = element(by.xpath("//a[@routerlink='system-usage/classic-contact-views']"))
        this.classicUsersLink = element(by.css("a[routerlink='classic-users']"))
        this.cmsesLink = element(by.css("a[routerlink='cmses']"))
        this.rolesAndPermissionLink = element(by.css("a[routerlink='roles']"))
        this.sendMyDocsSavesLink = element(by.css("a[routerlink='user-content/scans-saves']"))
        this.sendMyDocsScanners = element(by.css("a[routerlink='user-content/scanners']"))
        this.sendMyScansLink = element(by.css("a[routerlink='user-content/scans']"))
        this.userSessionsLink = element(by.css("a[routerlink='system-usage/user-sessions']"))
        this.manageUserLink = element(by.css("a[routerlink='mpv-administration/manage-users']"))
        this.activeLockouts = element(by.css("a[routerlink='mpv-administration/active-lockouts']"))
        this.workGroupsLink = element(by.css("a[routerlink='workgroups']"))
        this.adminButton = element(by.css("a[routerlink='admin']"))
        this.userList = element.all(by.xpath("//table//th[contains(text(),'Assign Users This Role')]//ancestor::table[1]//tr/td[1]/span[1]"))
        this.searchTextGlobal = element(by.css("input[placeholder ='Search dataVISION']"))
        this.searchBtnGlobal = element(by.id("searchDV"))
        this.NewRoleButton = element(by.xpath("//button[contains(text(),'+ New Role')]"))
        this.txtRoleName = element(by.xpath("//input[@id='newRoleName']"))
        this.CreateRoleButton = element(by.xpath("//button[contains(text(),  'Create Role')]"))
        this.DetailsButton = element(by.xpath("//button[contains(text(),  'Details')]"))
        this.EditButton = element(by.xpath("//button[contains(text(),  'Edit')]"))
        this.warningMsg = element(by.xpath("//p[contains(text(),  'Role name is limited to 50 characters')]"))
        this.errMsg = element(by.xpath("//div[@class='toast-message']"))
        this.SaveButton = element(by.xpath("//button[contains(text(),  'Save')]"))
        this.headElement = element(by.xpath("//h1"))
        this.RolesandPermissionSection = element(by.xpath("//th[contains(text(),  'Roles & Permissions')]"))
        this.ContactHovertab = element(by.xpath("//div[contains(text(),'Contacts')]"))
        this.contactDirectory = element(by.xpath("//a[contains(text(),'Directory')"))
        this.searchlink = element(by.xpath("//a[@routerlink='/search']"))
        this.senmydoclink = element(by.css("a[routerlink='scans']"))
        this.comissionslink = element(by.xpath("//a[contains(text(),'Commissions')]"))
        this.ToolsTab = element(by.xpath("//div[contains(text(),'Tools')]"))
        this.orgchatlink = element(by.xpath("//a[contains(text(),'Org Chart')]"))
        this.cfsenggbloglink = element(by.xpath("//a[contains(text(),'CFS/SPF Engineering Blog')]"))
        this.setupclientscanner = element(by.xpath("//a[contains(text(),'+ Set Up Client Scanner')]"))
        this.ComisInterpreterslink = element(by.xpath("//a[contains(text(),'Commissions Interpreters')]"))
        this.ResourcesTab = element(by.xpath("//*[contains(text(),'Resources')]"))
        this.UserTab = element(by.xpath("//nav[@class='masthead-nav']/div[2]/div[2]"))
        this.UpdateProfileBtn = element(by.xpath("//a/span[text()='Update Profile']"))
        this.searchtextbox = element(by.css("input[placeholder ='Search dataVISION']"))
        this.Summeryele = element(by.css("h2.hr"))
        this.Usersettings = element(by.xpath("//a[@ng-reflect-router-link='settings/user/profile']"))
        this.rolesfiltertxt = element(by.css("input[placeholder='Filter Roles']"))
        this.PermissionsFiltertxt = element(by.css("input[placeholder='Filter Permissions']"))
        this.UsersFiltertxt = element(by.css("input[placeholder='Filter Users']"))
        this.roleList = element.all(by.xpath("//table//th[contains(text(),'Role')]//ancestor::table[1]//span[1]"))
        this.permissionList = element.all(by.xpath("//table//th[contains(text(),'Permissions')]//ancestor::table[1]//tbody//tr/td[1]"))
        this.UsersList = element.all(by.xpath("//table//th[contains(text(),'Users')]//ancestor::table[1]//td[1]"))
        this.settingslink = element(by.css("a[routerlink='settings/usersettings']"))
        this.usersetuplink = element(by.css("a[routerlink='settings/usersetup']"))
    }

    /**
     * To click on add user button
     */
    clickOnAddUserButton = async () => {
        await waitForObject(this.addUserButton)
        await clickElement(this.addUserButton)
    }

    /**
     * To Verify search text box 
     */
    verifySearchTextBox = async () => {
        let flag: any
        return await isElementPresent(this.txtSearch).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify Global search text box
     */
    verifyGlobalSearchTexbox = async () => {
        let flag: any
        return await isElementPresent(this.searchTextGlobal)
            .then(function (flag) {
                return flag
            })
    }

    /**
     * To verify global search button
     */
    verifyGlobalSearchBtn = async () => {
        let flag: any
        return await isElementPresent(this.searchTextGlobal)
            .then(function (flag) {
                return flag
            })
    }

    /**
    * To click on search button
    */
    clickOnSearchButton = async () => {
        await waitForObject(this.searchButton)
        await clickElement(this.searchButton)
    }

    /**
    * To enter user name in search text
    */
    enterUserName = async (userName) => {
        await enterText(this.txtSearch, userName)
    }

    /**
     * To verify user name
     */
    async verifyUserName(userName): Promise<boolean> {
        let flag: any
        flag = false
        await waitForObject(this.userList)
        await this.userList.each(async (element, index) => {
            await element.getText().then(async (text) => {
                if (await text.toUpperCase().includes(userName.toUpperCase())) {
                    flag = true
                } else {
                    flag = false
                }
            })
        })
        return flag
    }

    /**
     * To click on add selected user button
     */
    clickOnAddSelectedUserButton = async () => {
        await waitForObject(this.addSelectedUserButton)
        await clickElement(this.addSelectedUserButton)
    }

    /**
    * To click on remove icon    
    */
    clickOnRemoveIcon = async () => {
        await clickElement(this.removeIcon)
    }

    /**
     * To click on remove button
     */
    clickOnRemoveButton = async () => {
        await clickElement(this.removeButton)
    }

    /**
     * To click on Cancel button
     */
    clickOnCancelButton = async () => {
        await waitForObject(this.cancelButton)
        await clickElement(this.cancelButton)
    }

    /**
     * To click on delete role link and then click on OK button
     */
    deleteRoleAndAccept = async () => {
        await waitForObject(this.deleteRoleButton)
        await clickElement(this.deleteRoleButton)
        await staticWait(3000)
        await alertAccept()
    }

    /**
     *  To click on delete role link and then click on Cancel button
     */
    deleteRoleAndDismiss = async () => {
        await waitForObject(this.deleteRoleButton)
        await clickElement(this.deleteRoleButton)
        await staticWait(3000)
        await alertDismiss()
    }

    /**
     * To click on Ok button
     */
    clickOnConfirmOkButton = async () => {
        await clickElement(this.confirmOkButton)
    }

    /**
     * To click on Cancel button
     */
    clickOnConfirmCancelButton = async () => {
        await clickElement(this.clickOnCancelButton)
    }

    /**
     * To click on Details button with respect to expected role
     */
    verifyAndClickOnDetails = async (role) => {
        let roleDetailsButton = element(by.xpath("//*[@dv-tooltip='" +
            role + "']//following::button[1] | //*[contains(text(),'" +
            role + "')]//following::button[1]"))
        await waitForObject(roleDetailsButton)
        await clickElement(roleDetailsButton)
    }

    /**
     * To click on View button with respect to expected user
     */
    verifyAndClickOnView = async (userName) => {
        let viewButton = element(by.xpath("//*[@dv-tooltip='" +
            userName + "']//following::button[1] | //*[contains(text(),'" +
            userName + "')]//following::button[1]"))
        await clickElement(viewButton)
    }

    /**
     * To verify message
     */
    verifyMessage = async (message) => {
        await checkContainsText(this.messageBox, message)
    }

    /**
     * To verify no user present
     */
    verifyNoUserPresent = async (userName) => {
        await isElementPresent((element(by.xpath("//*[@dv-tooltip='" +
            userName + "']//following::button[1] | //*[contains(text(),'" +
            userName + "')]//following::button[1]"))))
    }

    /**
     * To verify add user button
     */
    verifyAddUserButton = async () => {
        await this.verifyElement(this.addUserButton)
    }

    /**
     * To delete user from role
     */
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

    /**
     * To click on view button
     */
    clickOnViewButton = async (userName) => {
        await clickElement(element(by.xpath("//*[@dv-tooltip='" +
            userName + "']//following::button[1] | //*[contains(text(),'" +
            userName + "')]//following::button[1]")))
    }

    /**
     * To verify user profile table
     */
    verifyUserProfile = async (userName) => {
        await waitForObject(this.userProfile)
        let useprofilrele = element(by.xpath("//*[@dv-tooltip='" +
            userName + "'] | //*[contains(text(),'" + userName + "')]"))
        await this.verifyElement(this.userProfile)
        await this.verifyElement(useprofilrele)
    }

    /**
     * To verify Classic User Ownerhips table
     */
    async verifyClassicUserOwnerships(): Promise<boolean> {
        let linkPresent: Promise<boolean>
        let flag: any
        await waitForObject(this.classicUserOwnerships)
        linkPresent = this.verifyElement(this.classicUserOwnerships)
        return linkPresent
    }

    /**
     * To verify Classic Contact Read scope table
     */
    verifyClassicContactReadScope = async () => {
        await waitForObject(this.classicContact)
        await this.verifyElement(this.classicContact)
    }

    /**
     * To click on check box to select user
     */
    selectUser = async (userName) => {
        let checkBoxForUser = element(by.xpath("//*[(text()='" + userName + "')]//ancestor::tr//tbody//input"))
        await waitForObject(checkBoxForUser)
        await clickElement(checkBoxForUser)
    }

    /**
     * To verify that the user is added
     */
    verifyUserAdded = async (userName) => {
        let flag: any
        let userAdded = element(by.xpath("//*[contains(text(),'" + userName + "')]"))
        return await isElementPresent(userAdded).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify warning message while creating new role
     */
    verifyWarningMessage = async (errorMessage) => {
        await checkContainsText(element(by.xpath("//p[contains(text(),  'Role name is limited to 50 characters')]")), errorMessage)
    }

    /**
     * To click on new role button
     */
    clickOnNewRole = async () => {
        await waitForObject(this.NewRoleButton)
        await clickElement(this.NewRoleButton)
    }

    /**
     * To verify role name field
     */
    verifyRoleNameField = async () => {
        await this.verifyElement(this.txtRoleName)
    }

    /**
     * To enter role name in role name text field
     */
    enterRoleName = async (length) => {
        this.createRandomName(length)
        await enterText(this.txtRoleName, this.randonname)
        await waitForObject(this.CreateRoleButton)
    }

    /**
     * To verify duplicate role name
     */
    VerifyDuplicateRoleName = async (Rolename) => {
        await enterText(this.txtRoleName, Rolename)
        await waitForObject(this.CreateRoleButton)
    }

    /**
     * To enter role name in role name text field
     */
    EnterRoleName = async (length) => {
        this.createRandomName(length)
        await enterText(this.txtRoleName, this.randonname)
    }

    /**
     * To click on create role button
     */
    clickOnCreateRoleButton = async () => {
        await clickElement(this.CreateRoleButton)
    }

    /**
     * To verify role name after creating new role
     */
    verifyRoleName = async () => {
        let linkPresent: Promise<boolean>
        let elemRoleName = element(by.xpath("//*[@dv-tooltip='" +
            this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]"))
        await waitForObject(elemRoleName)
        await clickElement(elemRoleName)
        linkPresent = this.verifyElement(elemRoleName)
        return linkPresent
    }

    /**
     * To Verify role name is not added 
     */
    verifyRoleNotPresent = async () => {
        let linkPresent: Promise<boolean>
        linkPresent = this.verifyElement(element(by.xpath("//*[@dv-tooltip='" +
            this.randonname + "'] | //*[contains(text(),'" + this.randonname + "')]")))
        return linkPresent
    }

    /**
     * To verify Role and permission table title
     */
    verifyRoleandPermissionColumn = async () => {
        let linkPresent: Promise<boolean>
        await waitForObject(this.headElement)
        linkPresent = this.verifyElement(element(by.xpath("//th[contains(text(),'Users Assigned This Role')]")))
        linkPresent = this.verifyElement(element(by.xpath("//th[contains(text(),'Permissions')]")))
        return linkPresent
    }

    /**
     * To clcik on edit button
     */
    clickOnEditButton = async () => {
        await waitForObject(this.EditButton)
        await clickElement(this.EditButton)
    }

    /**
     * To select permission check box from permission table
     */
    SelectCheckBox = async (permission) => {
        let checkelement = element(by.xpath("//*[text()='" + permission + "']/ancestor::tr[@class='ng-star-inserted']//input | //*[@dv-tooltip='" +
            permission + "']/ancestor::tr[@class='ng-star-inserted']//input"))
        await waitForObject(checkelement)
        await selectCheckBox(checkelement)
    }

    /**
     * To deselect permission checkbox from permission table
     */
    deSelectCheckBox = async (permission) => {
        let permissionCheckbox = element(by.xpath("//*[text()='" +
            permission + "']/ancestor::tr[@class='ng-star-inserted']//input | //*[@dv-tooltip='" +
            permission + "']/ancestor::tr[@class='ng-star-inserted']//input"))
        await waitForObject(permissionCheckbox)
        await deSelectCheckBox(permissionCheckbox)
    }

    /**
     *To select multiple permissions from permission table 
     */
    SelectMultipleCheckBox = async () => {
        element.all(by.css("span input.checkbox")).isSelected().then(function (selected) {
            if (selected) {
                element(by.css("span input.checkbox")).click()
            }
            else {
                element(by.css("span input.checkbox")).click()
            }
        })
    }

    /**
     *To Click on save button after selecting the permission 
     */
    clickOnSaveButton = async () => {
        await waitForObject(this.SaveButton)
        await clickElement(this.SaveButton)
    }

    /**
     * To verify permission after adding
     */
    async VerifyPermission(permission): Promise<boolean> {
        let linkPresent: Promise<boolean>
        let permissionelement1 = element(by.xpath("//*[text()='" + permission + "'] | //*[@dv-tooltip='" + permission + "']"))
        linkPresent = this.verifyElement(permissionelement1)
        return await linkPresent
    }

    /**
     * To verify permission is not present after deselecting the permission
     */
    VerifyRemovePermission = async (permission) => {
        let elem1 = element(by.xpath("//th[contains(text(),'Permissions')]"))
        let elem = element(by.xpath("//*[text()='" + permission + "']"))
        await this.verifyElement(elem1)
        await this.verifyElement(elem)
        await waitForObject(this.EditButton)
    }

    /**
     * To create random role name
     */
    createRandomName = async (length) => {
        let i
        this.randonname = ''
        let autoname = 'Automation_'
        let letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' //Include numbers if you want
        for (i = 0; i < length; i++) {
            this.randonname += letters.charAt(Math.floor(Math.random() * letters.length))
        }
        this.randonname = autoname + this.randonname
        return this.randonname
    }

    /**
     * Verify roles and permissions table
     */
    async verifyRolesAndPermissionSection(): Promise<boolean> {
        let linkPresent: Promise<boolean>
        let flag: any
        await waitForObject(this.RolesandPermissionSection)
        linkPresent = this.verifyElement(this.RolesandPermissionSection)
        return linkPresent
    }

    /**
     * Toverify multiple check boxes
     */
    verifymultiplecheckbox = async () => {
        await clickElement(this.randonname)
        await waitForObject(this.EditButton)
        await clickElement(this.EditButton)
        await staticWait(3000)
        await this.SelectMultipleCheckBox()
        await waitForObject(this.SaveButton)
        await clickElement(this.SaveButton)
    }

    /**
     * To delete role permanently
     */
    DeleteRolePerm = async () => {
        await waitForObject(this.NewRoleButton)
        await clickElement(this.NewRoleButton)
        await this.createRandomName(7)
        await enterText(this.txtRoleName, this.randonname)
        await waitForObject(this.CreateRoleButton)
        await this.clickOnCreateRoleButton()
        await this.verifyAndClickOnDetails(this.randonname)
        await staticWait(3000)
        await this.deleteRoleAndAccept()
    }

    /**
     * To click on cancel
     */
    CancelDeleteRole = async () => {
        await waitForObject(this.NewRoleButton)
        await clickElement(this.NewRoleButton)
        await this.createRandomName(7)
        await enterText(this.txtRoleName, this.randonname)
        await waitForObject(this.CreateRoleButton)
        await this.clickOnCreateRoleButton()
        await this.verifyAndClickOnDetails(this.randonname)
        await staticWait(3000)
        await this.deleteRoleAndDismiss()
    }

    /**
     * 
     */
    elemetbeforeEdit = async () => {
        let i
        let elem = element(by.xpath("//div[@class='tbl']//tbody/tr/td[@colspan='2']"))
        let countele = elem.count()
        let permissionebeforeedit = []

        for (i = 0; i < countele; i++) {
            elem[i].getText().then(function (text) {
                permissionebeforeedit.push(text)
            })
        }
    }

    /**
     * 
     */
    elemetAfterEdit = async () => {
        let i
        let elem1 = element(by.xpath("//div[@class='tbl']//tbody/tr/td[@colspan='2']"))
        let counteleafter = elem1.count()
        let permissioneAfteredit = []

        for (i = 0; i < counteleafter; i++) {
            elem1[i].getText().then(function (text) {
                permissioneAfteredit.push(text)
            })
        }
    }

    /**
     * To verify permision not added after clickinng on cancel
     */
    verifyPermissionCancel = async () => {
        let i
        let elem = element(by.css((".tbl-body.zebrastripe tr"))).count().then(function (rowCount) {
            return rowCount
        })
        let counteleafter = elem
        let elem1 = element(by.css((".tbl-body.zebrastripe tr"))).count().then(function (rowCount) {
            return rowCount
        })
        let countele = elem1
        let permissioneAfteredit = []
        for (i = 0; i < counteleafter; i++) {
            elem[i].getText().then(function (text) {
                permissioneAfteredit.push(text)
            })
        }
        let permissionebeforeedit = []
        for (i = 0; i < countele; i++) {
            elem1[i].getText().then(function (text) {
                permissionebeforeedit.push(text)
            })
        }
        if (countele === counteleafter) {
            expect(permissionebeforeedit).to.equals(permissioneAfteredit)
        } else {

        }
    }

    /**
     * To click on details of any role
     */
    ClickOnDetails = async () => {
        let elem1 = element(by.xpath("//*[@dv-tooltip='" + this.randonname + "']//following::button[1] | //*[contains(text(),'" + this.randonname + "')]//following::button[1]"))
        await waitForObject(elem1)
        await clickElement(elem1)
    }

    /**
     * To select multiple check boxes
     */
    multipleSelect = async (elem: ElementFinder) => {
        await waitForObject(elem)
        await element.all(elem).count()
            .then(function (size) {
            })
    }

    /**
     * To verify link name
     * @param linkName 
     */
    async verifyLink(linkName): Promise<boolean> {
        let linkPresent: Promise<boolean>
        staticWait(5000)
        switch (linkName) {
            case 'Users':
                linkPresent = this.verifyUsersLink()
                break
            case 'Brokers and Dealers':
                linkPresent = this.verifyBrokersAndDealerslink()
                break
            case 'Classic Contact Views':
                linkPresent = this.verifyClassicContactViewsLink()
                break
            case 'Classic Users':
                linkPresent = this.verifyClassicUsersLink()
                break
            case 'CMSES':
                linkPresent = this.verifyCMSesLink()
                break
            case 'Roles and Permissions':
                linkPresent = this.verifyRolesAndPermissionsLink()
                break
            case 'Send MyDocs Saves':
                linkPresent = this.verifySendMyDocsSavesLink()
                break
            case 'Send My Doc Scanners':
                linkPresent = this.verifySendMyDocsScannersLink()
                break
            case 'Send My Scans':
                linkPresent = this.verifySendMyScansLink()
                break
            case 'User Sessions':
                linkPresent = this.verifyUserSessionsLink()
                break
            case 'Manage User':
                linkPresent = this.verifyManageUsersLink()
                break
            case 'Active Lockouts':
                linkPresent = this.verifyActiveLockoutLink()
                break
            case 'Workgroups':
                linkPresent = this.verifyWorkgroupsLink()
                break
            case 'CFS/SPF Engineering Blog':
                linkPresent = this.verifyCFSSPFEngineeringBlog()
                break
            case 'SendMyDocs':
                linkPresent = this.verifySendMyDocsLink()
                break
            case 'User settings':
                linkPresent = this.verifyUserprofilelink()
                break
            case 'Update Profile':
                linkPresent = this.verifyUpdateProfileBtn()
                break
            case 'Settings':
                linkPresent = this.verifysettingsLink()
                break
            case 'User Setup':
                linkPresent = this.verifyUserSetupLink()
                break
            case 'Commissions Interpreters':
                linkPresent = this.verifyCommissionsInterpretersLink()
                break
            case 'Set Up Client Scanner':
                linkPresent = this.verifySetUpClientScannerlink()
                break
        }
        return linkPresent

    }

    /**
     * To verify brokers and dealers link
     */
    verifyBrokersAndDealerslink = async () => {
        let flag: any
        return await isElementPresent(this.brokersDealersLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify users link
     */
    verifyUsersLink = async () => {
        let flag: any
        return await isElementPresent(this.usersLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify CFS engineering blog 
     */
    verifyCFSSPFEngineeringBlog = async () => {
        let flag: any
        return await isElementPresent(this.cfsenggbloglink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify send my docs link
     */
    verifySendMyDocsLink = async () => {
        let flag: any
        return await isElementPresent(this.senmydoclink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify commission interpreters link
     */
    verifyCommissionsInterpretersLink = async () => {
        let flag: any
        return await isElementPresent(this.ComisInterpreterslink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify setuo client scanner link
     */
    verifySetUpClientScannerlink = async () => {
        let flag: any
        return await isElementPresent(this.setupclientscanner).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify user profile link
     */
    verifyUserprofilelink = async () => {
        let flag: any
        return await isElementPresent(this.Usersettings).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify update profile button
     */
    verifyUpdateProfileBtn = async () => {
        let flag: any
        return await isElementPresent(this.UpdateProfileBtn).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify classic Contact views link
     */
    verifyClassicContactViewsLink = async () => {
        let flag: any
        return await isElementPresent(this.classicContactViewLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify classsic users link
     */
    verifyClassicUsersLink = async () => {
        let flag: any
        return await isElementPresent(this.classicUsersLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify cmses link
     */
    verifyCMSesLink = async () => {
        let flag: any
        return await isElementPresent(this.cmsesLink).then(function (flag) {
            return flag
        })
    }

    /**
     * TO verify roles and permissions link
     */
    verifyRolesAndPermissionsLink = async () => {
        let flag: any
        return await isElementPresent(this.rolesAndPermissionLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify send my docs saves link
     */
    verifySendMyDocsSavesLink = async () => {
        let flag: any
        return await isElementPresent(this.sendMyDocsSavesLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify send my docs scanners link
     */
    verifySendMyDocsScannersLink = async () => {
        let flag: any
        return await isElementPresent(this.sendMyDocsScanners).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify send my scans link
     */
    verifySendMyScansLink = async () => {
        let flag: any
        return await isElementPresent(this.sendMyScansLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify user sessions link
     */
    verifyUserSessionsLink = async () => {
        let flag: any
        return await isElementPresent(this.userSessionsLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify manage user link
     */
    verifyManageUsersLink = async () => {
        let flag: any
        return await isElementPresent(this.manageUserLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify active lockout link
     */
    verifyActiveLockoutLink = async () => {
        let flag: any
        return await isElementPresent(this.activeLockouts).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify work groups link
     */
    verifyWorkgroupsLink = async () => {
        let flag: any
        return await isElementPresent(this.workGroupsLink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify settings link
     */
    verifysettingsLink = async () => {
        let flag: any
        return await isElementPresent(this.settingslink).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify user setup link
     */
    verifyUserSetupLink = async () => {
        let flag: any
        return await isElementPresent(this.usersetuplink).then(function (flag) {
            return flag
        })
    }

    /**
     * Mouse action to move to element and verdify link
     */
    mousehoverandverifylink = async (element, element1) => {
        await moveToElement(element)
        await staticWait(2000)
        await waitForObject(element1)
    }

    /**
     * Mouse action to move to element and click
     */
    mousehoverandclicklink = async (element) => {
        await moveToElement(element)
        await staticWait(3000)
        await clickElement(element)
        await staticWait(3000)
    }

    /**
     * To verify screen title
     */
    verifyScreenTiltle = async (title) => {
        await isElementPresent(element(by.xpath("//h1[contains(text(),'" + title + "')]")))
    }

    /**
     * To click on users link 
     */
    clickOnUsersLink = async () => {
        await waitForObject(this.usersLink)
        await clickElement(this.usersLink)
    }

    /**
     * To click on classic contacts views link
     */
    clickOnClassicContactViewsLink = async () => {
        await waitForObject(this.classicContactViewLink)
        await clickElement(this.classicContactViewLink)
    }

    /**
     * To click on classic users link
     */
    clickOnClassicUsersLink = async () => {
        await waitForObject(this.classicUsersLink)
        await clickElement(this.classicUsersLink)
    }

    /**
     * To click on cmses link
     */
    clickOnCMSESLink = async () => {
        await waitForObject(this.cmsesLink)
        await clickElement(this.cmsesLink)
    }

    /**
     * To click on roles and permissions link
     */
    clickOnRolesAndPermissions = async () => {
        await waitForObject(this.rolesAndPermissionLink)
        await clickElement(this.rolesAndPermissionLink)
    }

    /**
     * To click on send my docs saves
     */
    clickOnSendMyDocSaves = async () => {
        await waitForObject(this.sendMyDocsScanners)
        await clickElement(this.sendMyDocsScanners)
    }

    /**
     * To click on send my docs scanners
     */
    clickOnSendMyDocsScanners = async () => {
        await waitForObject(this.sendMyDocsScanners)
        await clickElement(this.sendMyDocsScanners)
    }

    /**
     * To click on send my scans link
     */
    clickOnSendMyScans = async () => {
        await waitForObject(this.sendMyScansLink)
        await clickElement(this.sendMyScansLink)
    }

    /**
     * To click on user sessions
     */
    clickOnUserSessions = async () => {
        await waitForObject(this.userSessionsLink)
        await clickElement(this.userSessionsLink)
    }

    /**
     * To click on Manage user link
     */
    clickOnManageUser = async () => {
        await waitForObject(this.manageUserLink)
        await clickElement(this.manageUserLink)
    }

    /**
     * To click on Active lockouts link
     */
    clickOnActiveLockoutsLink = async () => {
        await waitForObject(this.activeLockouts)
        await clickElement(this.EditButton)
    }

    /**
     * To click on work groups link
     */
    clickOnworkGroupsLink = async () => {
        await waitForObject(this.workGroupsLink)
        await clickElement(this.workGroupsLink)
    }

    /**
     * To click on link
     */
    clickOnLink = async (element, element1) => {
        await moveToElement(element)
        await staticWait(2000)
        await clickElement(element1)
    }

    /**
     * To click on user name
     */
    clickOnUserName = async (linkname) => {
        let ele = element(by.xpath("//div[@class='tbl']//tbody/tr//a[contains(text(),'" + linkname + "')]"))
    }

    /**
     * To enter string in the text box
     */
    EnterString = async (string, element) => {
        await enterText(element, string)
    }

    /**
     * 
     */
    afterEnterRole = async (role) => {
        this.rows1 = element.all(by.xpath("//tbody[@class='tbl-body zebrastripe ng-star-inserted']//tr//span[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') , translate('"
            + role + "', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))]"))
        this.sum1 = this.rows1.count().then(function (count) {
            var su = count
            return su
        })
        return await this.sum1
    }

    /**
     * To verify role name filter
     * @param role 
     */
    async verifyRoleNameFilter(role): Promise<boolean> {
        let flag: any
        flag = false
        await waitForObject(this.roleList)
        await this.roleList.each(async (element, index) => {
            await element.getText().then(async (text) => {
                if (await text.toUpperCase().includes(role.toUpperCase())) {
                    flag = true
                } else {
                    flag = false
                }
            })
        })
        return flag
    }

    /**
     * To verify filter for permission
     * @param role 
     */
    async verifyPermissionFilter(role): Promise<boolean> {
        let flag: any
        flag = false
        await waitForObject(this.permissionList)
        await this.permissionList.each(async (element, index) => {
            await element.getText().then(async (text) => {
                if (await text.toUpperCase().includes(role.toUpperCase())) {
                    flag = true
                } else {
                    flag = false
                }
            })
        })
        return await flag
    }

    /**
     * To verify filters for user name
     * @param role 
     */
    async verifyUsersFilter(role): Promise<boolean> {
        let flag: any
        flag = false
        await waitForObject(this.UsersList)
        await this.UsersList.each(async (element, index) => {
            await element.getText().then(async (text) => {
                if (await text.toUpperCase().includes(role.toUpperCase())) {
                    flag = true
                } else {
                    flag = false
                }
            })
        })
        return await flag
    }

    /**
     * To click on settings link
     */
    clickOnSettngsLink = async () => {
        await waitForObject(this.settingslink)
        await clickElement(this.settingslink)
    }

    /**
     * To click on user Setup
     */
    clickOnUserSetup = async () => {
        await waitForObject(this.usersetuplink)
        await clickElement(this.usersetuplink)
    }

    /**
     * To verify element is present
     */
    verifyElement = async (elem) => {
        let flag: any
        return await isElementPresent(elem).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify delete role button
     */
    verifyDeleteroleBtn = async () => {
        let flag: any
        return await isElementPresent(this.deleteRoleButton).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify add user button
     */
    verifyaddUserButton = async (elem) => {
        let flag: any
        return await isElementPresent(this.addUserButton).then(function (flag) {
            return flag
        })
    }

    /**
     * To verify edit button
     */
    verifyEditButton = async () => {
        let flag: any
        return await isElementPresent(this.EditButton).then(function (flag) {
            return flag
        })
    }

    /**
     * To Verify Roles and Permission table header
     */
    verifyElementRoleAndpermision = async (elem) => {
        let flag: any
        return await isElementPresent(element(by.xpath("//h1[contains(text(),'Roles & Permissions')]"))).then(function (flag) {
            return flag
        })
    }
}
