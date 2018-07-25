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
import { moveToElement } from "../../uiActions/mouseActions/moveToElement";
import { isSelected } from "../../uiActions/verifyActions/isSelected";
import { watch } from "fs";
import { setDefaultService } from "selenium-webdriver/opera";
import { selectCheckBox, deSelectCheckBox } from "../../uiActions/mouseActions/checkBoxActions";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class UserSettingsPage {
    public userSettingsHeading: ElementFinder;
    public radioButton1: ElementFinder;
    public radioButton2: ElementFinder;
    public radioButton3: ElementFinder;
    public applyButton: ElementFinder;
    public cancelButton: ElementFinder;

    constructor() {
        this.userSettingsHeading = element(by.xpath("//h2"));
        this.radioButton1 = element(by.xpath("//input[@value='admin']"))
        this.radioButton2 = element(by.xpath("//div[@class='form-section zebrastripe col-9']/div[3]//input[@value='self']"))
        this.radioButton3 = element(by.xpath("//div[@class='form-section zebrastripe col-9']/div[5]//input[@value='self']"))
      //  this.applyButton = element( )
      //this.cancelButton =


    }

    async verifyPageHeading(expectedPage): Promise<boolean> {
        let linkPresent: Promise<boolean>;
        staticWait(5000)
        switch (expectedPage) {
            case 'User Settings':
                console.log("User Settings");
                linkPresent = this.verifyUserSettings();
                break;
            case 'User Setup/Information':
                console.log("User Setup");
                linkPresent = this.verifyUserSetup();
                break;

        }
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;

    }

    verifyUserSettings = async () => {
        let flag: any;
        return await isElementPresent(this.userSettingsHeading)
            .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
    }
    verifyUserSetup = async () => {
        let flag: any;
        return await isElementPresent(this.userSettingsHeading)
            .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
    }
   
}