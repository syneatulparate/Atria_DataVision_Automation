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
const openWebsite_1 = require("../../../uiActions/BrowserActions/openWebsite");
const businessActions_1 = require("../../../uiActions/userDefined/businessActions");
const LoginPage_1 = require("../../Pages/LoginPage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
let loginPage = new LoginPage_1.LoginPage();
Given(/^I go to DV3 (url|site) "([^"]*)?"$/, openWebsite_1.openWebsite);
// When('User enters valid {string} and {string}', async (username,password) => {
//     // Write code here that turns the phrase above into concrete actions
//     await loginPage.loginToApplication(username,password);
//   });
When(/^User enters valid "([^"]*)?" and "([^"]*)?" and click login button$/, (username, password) => __awaiter(this, void 0, void 0, function* () {
    //console.log("Inside when clause --" + username + " ===" + password);
    yield loginPage.loginToApplication(username, password);
}));
Then(/^User expects that header message contains the text "([^"]*)?"$/, (headerMessage) => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.verifyLoginPageTitle(headerMessage);
}));
When(/^User enter securityAnswer to the securityAnswer input field$/, () => __awaiter(this, void 0, void 0, function* () {
    yield businessActions_1.enterSecurityAnswer;
}));
