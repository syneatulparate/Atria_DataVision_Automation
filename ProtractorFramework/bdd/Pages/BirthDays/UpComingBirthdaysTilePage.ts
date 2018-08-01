import { ElementFinder, element, by, browser } from "protractor"
import { waitForObject } from "../../../uiActions/waitActions/waitActions"
import { clickElement } from "../../../uiActions/mouseActions/clickElement"
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement"
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent"
import { protractor } from "protractor/built/ptor"
import { promise } from "selenium-webdriver"


export class UpComingBirthdaysTilePage {

    public messageIcon: ElementFinder
    public phoneIcon: ElementFinder
    public commentIcon: ElementFinder
    public primaryEmail: ElementFinder
    public phoneNumber: ElementFinder
    public comments: ElementFinder
    public lastViewed: ElementFinder
    public mostViewed: ElementFinder
    public byInvestment: ElementFinder
    public viewByDropDown: ElementFinder
    public recentContactScreen: ElementFinder
    public mostContactScreen: ElementFinder
    public byInvestmentScreen: ElementFinder
    public expandIcon: ElementFinder
    public contractIcon: ElementFinder
    public goToContactsLink: ElementFinder
    public today: ElementFinder
    public nextWeek: ElementFinder
    public nextTwoWeek: ElementFinder

    constructor() {
        this.messageIcon = element(by.css("a[routerlink='']"))
        this.phoneIcon = element(by.css("a[routerlink='']"))
        this.commentIcon = element(by.css("a[routerlink='']"))
        this.primaryEmail = element(by.css("a[routerlink='']"))
        this.phoneNumber = element(by.css("a[routerlink='']"))
        this.comments = element(by.css("a[routerlink='']"))
        this.lastViewed = element(by.css("a[routerlink='']"))
        this.mostViewed = element(by.css("a[routerlink='']"))
        this.byInvestment = element(by.css("a[routerlink='']"))
        this.viewByDropDown = element(by.css("a[routerlink='']"))
        this.recentContactScreen = element(by.css("a[routerlink='']"))
        this.mostContactScreen = element(by.css("a[routerlink='']"))
        this.byInvestmentScreen = element(by.css("a[routerlink='']"))
        this.expandIcon = element(by.css("a[routerlink='']"))
        this.contractIcon = element(by.css("a[routerlink='']"))
        this.goToContactsLink = element(by.css("a[routerlink='']"))
        this.today = element(by.css("a[routerlink='']"))
        this.nextWeek = element(by.css("a[routerlink='']"))
        this.nextTwoWeek = element(by.css("a[routerlink='']"))
    }

    /**
     * To hover mouse on message icon
     */
    moveToMessageIcon = async (userName) => {
        await moveToElement(this.messageIcon)
    }

    /**
     * To hover mouse on phone icon
     */
    moveToPhoneIcon = async (userName) => {
        await moveToElement(this.phoneIcon)
    }

    /**
     * To hover mouse on comment icon
     */
    moveToCommentIcon = async (userName) => {
        await moveToElement(this.commentIcon)
    }

    /**
     * Verify Primary email 
     */
    async verifyPrimaryEmail(userEmail): Promise<boolean> {
        let flag: any
        flag = false
        let email: any
        await this.primaryEmail.getText().then(async (email) => {
            await console.log(email)
            if (await email.toUpperCase().includes(userEmail.toUpperCase())) {
                flag = true
            } else {
                flag = false
            }
        })
        return flag
    }

    /**
     * Verify Phone number 
     */
    async  verifyPhoneNumber(userPhoneNumber): Promise<boolean> {
        let flag: any
        flag = false
        let phoneNumber: any
        await this.phoneNumber.getText().then(async (phoneNumber) => {
            await console.log(phoneNumber)
            if (await phoneNumber.toUpperCase().includes(userPhoneNumber.toUpperCase())) {
                flag = true
            } else {
                flag = false
            }
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

        await this.viewByDropDown.isDisplayed().then(async () => {

            if (await viewOption.toUpperCase().includes(("Today").toUpperCase())) {
                await clickElement(this.viewByDropDown)
                await clickElement(this.today)
            } else if (await viewOption.toUpperCase().includes(("Next Week").toUpperCase())) {
                await clickElement(this.viewByDropDown)
                await clickElement(this.nextWeek)
            } else {
                await clickElement(this.viewByDropDown)
                await clickElement(this.nextTwoWeek)
            }
        })
    }

    /**
    * To verify "Last View" screen after clicking on go to comtacts link
    */
    verifyLastViewedScreen = async () => {
        let flag: any
        return await isElementPresent(this.recentContactScreen).then(function (flag) {
            console.log("value of the flag = " + flag)
            return flag
        })
    }

    /**
    * To verify "Most Viewed" screen after clicking on go to comtacts link
    */
    verifyMostViewedScreen = async () => {
        let flag: any
        return await isElementPresent(this.mostContactScreen).then(function (flag) {
            console.log("value of the flag = " + flag)
            return flag
        })
    }

    /**
    * To verify "Most Viewed" screen after clicking on go to comtacts link
    */
    verifyByInvestmentScreen = async () => {
        let flag: any
        return await isElementPresent(this.byInvestmentScreen).then(function (flag) {
            console.log("value of the flag = " + flag)
            return flag
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
    * To click on the go to contact link for upcoming birthdays tile
    */
    clickOnGoToContactDirectory = async () => {

    }

    /**
    * To verify view by drop down on birthdays tile
    */
    verifyViewByOptions = async () => {

    }


}