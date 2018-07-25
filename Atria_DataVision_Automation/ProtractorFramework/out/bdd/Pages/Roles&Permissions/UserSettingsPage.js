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
const isElementPresent_1 = require("../../../uiActions/verifyActions/isElementPresent");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const chai = require("chai").use(require("chai-as-promised"));
class UserSettingsPage {
    constructor() {
        this.verifyUserSettings = () => __awaiter(this, void 0, void 0, function* () {
            return yield isElementPresent_1.isElementPresent(this.userSettingsHeading)
                .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyUserSetup = () => __awaiter(this, void 0, void 0, function* () {
            return yield isElementPresent_1.isElementPresent(this.userSettingsHeading)
                .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.userSettingsHeading = protractor_1.element(protractor_1.by.xpath("//h2"));
        this.radioButton1 = protractor_1.element(protractor_1.by.xpath("//input[@value='admin']"));
        this.radioButton2 = protractor_1.element(protractor_1.by.xpath("//div[@class='form-section zebrastripe col-9']/div[3]//input[@value='self']"));
        this.radioButton3 = protractor_1.element(protractor_1.by.xpath("//div[@class='form-section zebrastripe col-9']/div[5]//input[@value='self']"));
        //  this.applyButton = element( )
        //this.cancelButton =
    }
    verifyPageHeading(expectedPage) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            waitActions_1.staticWait(5000);
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
            yield linkPresent.then(function (text) { console.log(text); });
            return linkPresent;
        });
    }
}
exports.UserSettingsPage = UserSettingsPage;
