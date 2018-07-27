import { element, by, ElementFinder } from "protractor";
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent";
import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { EntitlementPage } from "./EntitlementPage";

const chai = require("chai").use(require("chai-as-promised"));
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
        await console.log("value of flag 2" + flag)  
        return await flag;
    }
}