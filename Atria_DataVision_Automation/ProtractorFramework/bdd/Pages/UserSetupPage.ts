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
import { EntitlementPage } from "./EntitlementPage";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let entitlementPage: EntitlementPage = new EntitlementPage();
export class UserSetupPage {
    public userSetupHeading: ElementFinder;

    
    constructor() {
        this.userSetupHeading = element(by.xpath("//h2"));
      
        
    }

    async verifyPageElement(expectedPage): Promise<boolean> {
        let linkPresent: Promise<boolean>;
        staticWait(5000)
        switch (expectedPage) {
            case 'User Name':
                console.log("User Name");
                linkPresent = this.verifyUserSettings();
                break;
            case 'Email Address':
                console.log("User Name");
                linkPresent = this.verifyUserSettings();
                break;
            case 'Workgroup':
                console.log("User Name");
                linkPresent = this.verifyUserSettings();
                break;
            case 'Module':
                console.log("User Name");
                linkPresent = this.verifyUserSettings();
                
                break;


        }
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;

    }

    verifyUserSettings = async () => {
        let flag: any;
        return await isElementPresent(this.userSetupHeading)
            .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
    }
    
    async verifyHeaderElement(role): Promise<boolean> {
        let flag:any
        flag=false;
           await  this.userSetupHeading.getText().then(async (text) => {
                await console.log(text);
                if (await text.toUpperCase().includes(role.toUpperCase())) {
                    flag = true;
                } else {
                    flag = false;
                }
                await console.log("value of flag 1" + flag)
            });
       // temp=flag;
        await console.log("value of flag 2" + flag)  
       // await console.log("temp"+temp)
        return await flag;
    }
}