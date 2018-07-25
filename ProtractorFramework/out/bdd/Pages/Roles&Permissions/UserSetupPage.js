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
class UserSetupPage {
    constructor() {
        this.verifyUserSettings = () => __awaiter(this, void 0, void 0, function* () {
            return yield isElementPresent_1.isElementPresent(this.userSetupHeading)
                .then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.userSetupHeading = protractor_1.element(protractor_1.by.xpath("//h2"));
    }
    verifyPageElement(expectedPage) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            waitActions_1.staticWait(5000);
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
            yield linkPresent.then(function (text) { console.log(text); });
            return linkPresent;
        });
    }
    verifyHeaderElement(role) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield this.userSetupHeading.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                yield console.log(text);
                if (yield text.toUpperCase().includes(role.toUpperCase())) {
                    flag = true;
                }
                else {
                    flag = false;
                }
                yield console.log("value of flag 1" + flag);
            }));
            // temp=flag;
            yield console.log("value of flag 2" + flag);
            // await console.log("temp"+temp)
            return yield flag;
        });
    }
}
exports.UserSetupPage = UserSetupPage;
