import { ElementFinder, element, by, browser } from "protractor"
import { waitForObject, staticWait } from "../../../uiActions/waitActions/waitActions"
import { clickElement } from "../../../uiActions/mouseActions/clickElement"
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement"
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent"
import { protractor } from "protractor/built/ptor"
import { promise } from "selenium-webdriver"
import { contactEmails } from "../../../testData/contactEmails";
import { contactsPhone } from "../../../testData/contactsPhone";
import { getAttribute } from "../../../uiActions/verifyActions/getAttribute";
import { contactNames } from "../../../testData/contactNames";
import { readJson } from "../../../uiActions/userDefined/readJson";


export class UpComingBirthdaysTilePage {

    public messageIcon: ElementFinder
    public messageToolTip: ElementFinder
    public phoneIcon: ElementFinder
    public commentIcon: ElementFinder
    public primaryEmail: ElementFinder
    public phoneNumber: ElementFinder
    public comments: ElementFinder
    public expandIcon: ElementFinder
    public contractIcon: ElementFinder
    public goToContactsLink: ElementFinder
    public today: ElementFinder
    public nextWeek: ElementFinder
    public nextTwoWeek: ElementFinder
    public contactName: ElementFinder
    public phoneToolTip: ElementFinder
    public dateRangeDropDown: ElementFinder
    public myOwned: ElementFinder
    public allContacts: ElementFinder
    public temp: ElementFinder
    public testDataPath: any

    constructor() {
        this.messageIcon = element(by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='tile-email-icon'][1]"))
        this.messageToolTip = element(by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='tile-email-icon'][1]//ancestor::span"))
        this.phoneIcon = element(by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='tile-phone-icon'][1]"))
        this.phoneToolTip = element(by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='tile-phone-icon'][1]//ancestor::span"))
        this.commentIcon = element(by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='comment-icon'][1]"))
        this.primaryEmail = element(by.css("a[routerlink='']"))
        this.phoneNumber = element(by.css("a[routerlink='']"))
        this.comments = element(by.css("a[routerlink='']"))
        this.expandIcon = element(by.css("dv-birthday img.expand-icon"))
        this.contractIcon = element(by.css("a[routerlink='']"))
        this.goToContactsLink = element(by.xpath("//span[text()='Go to Contact Directory']"))
        this.today = element(by.xpath("//h6[text()='Upcoming Birthday']//following::li[text()='Today']"))
        this.nextWeek = element(by.xpath("//h6[text()='Upcoming Birthday']//following::li[text()='Next Week']"))
        this.nextTwoWeek = element(by.xpath("//h6[text()='Upcoming Birthday']//following::li[text()='Next Two Week']"))
        this.contactName = element(by.xpath("//h6[text()='Upcoming Birthday']//following::div[@class='title']//h4"))
        this.temp = element(by.xpath("//h6[text()='Upcoming Birthday']//following::div[@class='text-left']//h6"))
        this.dateRangeDropDown = element(by.xpath("//h6[text()='Upcoming Birthday']//following::dv-octicon"))
        this.myOwned = element(by.xpath("//h6[text()='Upcoming Birthday']//following::button[text()='My Owned'][1]"))
        this.allContacts = element(by.xpath("//h6[text()='Upcoming Birthday']//following::button[text()='All Contacts'][1]"))
        this.testDataPath = "./userDetails.json"

    }

    /**
     * To hover mouse on message icon
     */
    moveToMessageIcon = async () => {
        await moveToElement(this.messageIcon)
    }

    /**
     * To hover mouse on phone icon
     */
    moveToPhoneIcon = async () => {
        await moveToElement(this.phoneIcon)
    }

    /**
     * To hover mouse on comment icon
     */
    moveToCommentIcon = async () => {
        await moveToElement(this.commentIcon)
    }

    /**
     * Verify Contact Name
     */
    async verifyContactName(contactName): Promise<boolean> {
        let flag: any
        flag = false
        await this.contactName.getText().then(async (contact) => {
            await console.log("contact name is :" + contact)
            if (await contact.toLowerCase().includes(contactName.toLowerCase())) {
                flag = true
            } else {
                flag = false
            }
        })
        return flag;
    }
    /**
     * Verify Primary email 
     */
    async verifyPrimaryEmail(): Promise<boolean> {
        let flag: any
        flag = false
        let email: any

        await this.messageToolTip.getAttribute("dv-tooltip").then(async (emailID) => {
            await this.contactName.getText().then(async (contact) => {
                let contactEmailDetails = "$.." + contact.replace(" ", "") + ".email"
                await readJson(this.testDataPath, contactEmailDetails).then(async (userEmail) => {
                    if (await emailID.toLowerCase().includes(userEmail)) {
                        flag = true
                    } else {
                        flag = false
                    }
                })
            })
        })
        return flag
    }

    /**
     * Verify Phone number 
     */
    async  verifyPhoneNumber(): Promise<boolean> {
        let flag: any
        flag = false
        let phoneNumber: any
        await this.phoneToolTip.getAttribute("dv-tooltip").then(async (contactNumber) => {
            await this.contactName.getText().then(async (contact) => {
                let contactPhoneDetails = "$.." + contact.replace(" ", "") + ".phone_number"
                await readJson(this.testDataPath, contactPhoneDetails).then(async (userPhoneNumber) => {
                    if (await contactNumber.includes(userPhoneNumber)) {
                        flag = true
                    } else {
                        flag = false
                    }
                })
            })
        })
        return flag
    }
    /**
    * Verify Phone number 
    */
    async verifyComments(userComments): Promise<boolean> {
        let flag: any
        flag = false
        let comments: any
        await this.comments.getText().then(async (comments) => {
            await console.log(comments)
            if (await comments.toUpperCase().includes(userComments.toUpperCase())) {
                flag = true
            } else {
                flag = false
            }
        })
        return flag
    }

    /**
    * To select "Today" or "Next Week" or "Next Two Week" birthday from the view by drop down list
    */
    selectViewBirthdays = async (viewOption) => {
        await this.dateRangeDropDown.isDisplayed().then(async () => {
            if (await viewOption.toUpperCase().includes(("Today").toUpperCase())) {
                await clickElement(this.dateRangeDropDown)
                await clickElement(this.today)
            } else if (await viewOption.toUpperCase().includes(("Next Week").toUpperCase())) {
                await clickElement(this.dateRangeDropDown)
                await clickElement(this.nextWeek)
            } else {
                await clickElement(this.dateRangeDropDown)
                await clickElement(this.nextTwoWeek)
            }
        })
    }

    /**
     * To click on the expand icon for contacts tile
     */
    clickOnExpandIconContacts = async () => {
        await waitForObject(this.expandIcon)
        await clickElement(this.expandIcon)
    }

    /**
     * To click on the expand icon for contacts tile
     */
    clickOnContractIconContacts = async () => {
        await waitForObject(this.contractIcon)
        await clickElement(this.contractIcon)
    }

    /**
   * To verify contraction button
   */
    verifyContractionButton = async () => {
        let flag: any
        return await isElementPresent(this.contractIcon).then(function (flag) {
            console.log("value of the flag = " + flag)
            return flag
        })
    }

    /**
        * To tap on Esc button on keyboard
        */
    tapEscButton = async () => {
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform()
    }

    /**
     * Click on date range drop down icon
     */
    clickOnDropDownIcon = async () => {
        await waitForObject(this.dateRangeDropDown)
        await clickElement(this.dateRangeDropDown)
    }

    /**
     * Verify the dropdown menu option of date range
     */
    verifyDropDownMenu = async () => {
        let flag: any
        return await isElementPresent(this.today)
            && await isElementPresent(this.nextWeek)
            && await isElementPresent(this.nextTwoWeek)
                .then(function (flag) {
                    return flag
                })
    }

    /**
     * Verify the expand icon and contact directory link
     */
    verifyExpandIconAndContactsLink = async () => {
        let flag: any
        return await isElementPresent(this.expandIcon)
            && await isElementPresent(this.goToContactsLink)
                .then(function (flag) {
                    return flag
                })
    }
    /**
     * To click on my owned button
     */
    clickOnMyOwned = async () => {
        await waitForObject(this.myOwned)
        await clickElement(this.myOwned)
        // await getAttribute(this.myOwned, "class").then(async (value) => {
        //     if (value == "selected-button") {
        //         await console.log("All ready selected")
        //     } else {
        //         await clickElement(this.myOwned)
        //     }
        // })
    }

    /**
     * To click on all contacts button
     */
    clickOnAllContacts = async () => {
        await waitForObject(this.allContacts)
        await clickElement(this.allContacts)

        // await getAttribute(this.allContacts, "class").then(async (value) => {
        //     if (value == "selected-button") {
        //         await console.log("All ready selected")
        //     } else {
        //         await clickElement(this.allContacts)
        //     }
        // })
    }

    async verifyContactNames(viewCategory): Promise<boolean> {
        let flag: any
        let contactNameList = element.all(by.xpath("//h6[text()='Upcoming Birthday']//following::div[@class='text-left']//h6"))
        await staticWait(3000)
        await contactNameList.each(async (element, index) => {
            await element.getText().then(async (contactName) => {
                let categoryDetails="$.." + contactName.replace(" ", "") + ".user_category"
                await readJson(this.testDataPath, categoryDetails).then(async (userCategory) => {
                    if (await userCategory.includes(viewCategory)) {
                        flag = true
                    } else {
                        flag = false
                    }
                })
            })
        })
        return flag
    }
}
