import { element, by, ElementFinder } from "protractor"
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent"
import { staticWait } from "../../../uiActions/waitActions/waitActions"

const chai = require("chai").use(require("chai-as-promised"))

export class UserSettingsPage {
    public userSettingsHeading: ElementFinder
    public radioButton1: ElementFinder
    public radioButton2: ElementFinder
    public radioButton3: ElementFinder
    public applyButton: ElementFinder
    public cancelButton: ElementFinder

    constructor() {
        this.userSettingsHeading = element(by.xpath("//h2"))
        this.radioButton1 = element(by.xpath("//input[@value='admin']"))
        this.radioButton2 = element(by.xpath("//div[@class='form-section zebrastripe col-9']/div[3]//input[@value='self']"))
        this.radioButton3 = element(by.xpath("//div[@class='form-section zebrastripe col-9']/div[5]//input[@value='self']"))
        //this.applyButton = element( )
        //this.cancelButton =


    }

    /**
     * To Verify Page Heading
     */
    async verifyPageHeading(expectedPage): Promise<boolean> {
        let linkPresent: Promise<boolean>
        staticWait(5000)
        switch (expectedPage) {
            case 'User Settings':
                console.log("User Settings")
                linkPresent = this.verifyUserSettings()
                break
            case 'User Setup/Information':
                console.log("User Setup")
                linkPresent = this.verifyUserSetup()
                break
        }
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent
    }

    /**
     * To Verify User settings
     */
    verifyUserSettings = async () => {
        return await isElementPresent(this.userSettingsHeading)
            .then(function (flag) {
                return flag
            })
    }

    /**
     * To verify User setup
     */
    verifyUserSetup = async () => {
        return await isElementPresent(this.userSettingsHeading)
            .then(function (flag) {
                return flag
            })
    }

}