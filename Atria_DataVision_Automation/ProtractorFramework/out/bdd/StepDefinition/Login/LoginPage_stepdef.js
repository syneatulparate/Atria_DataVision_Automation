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
const LoginPage_1 = require("../../Pages/Login/LoginPage");
const openWebsite_1 = require("../../../uiActions/BrowserActions/openWebsite");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
let loginPage = new LoginPage_1.LoginPage();
Given(/^User is on Login page$/, openWebsite_1.openWebsite);
When(/^User enters valid "([^"]*)?" and "([^"]*)?" and click login button$/, (username, password) => __awaiter(this, void 0, void 0, function* () {
    //console.log("Inside when clause --" + username + " ===" + password);
    yield loginPage.loginToApplication(username, password);
}));
//---------------------------------------------------------------Hardik
When(/^User click on the forgot password link and verifies the title "([^"]*)?" is displayed$/, (headerMessage) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield loginPage.clickOnForgotPassword();
    yield loginPage.verifyLoginPageTitle(headerMessage);
}));
Then(/^User expects that title contains the text "([^"]*)?"$/, (headerMessage) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield loginPage.verifyLoginPageTitle(headerMessage);
}));
When(/^User enter securityAnswer to the securityAnswer input field$/, () => __awaiter(this, void 0, void 0, function* () {
    console.log("inside security when method");
    yield loginPage.enterSecurityAnswer();
}));
Then(/^User logout from the account$/, () => __awaiter(this, void 0, void 0, function* () {
    // await waitForObject(loginPage.logoutBtn)
    yield loginPage.clickOnLogOut();
    yield waitActions_1.staticWait(3000);
    yield waitActions_1.waitForObject(loginPage.txtUsername);
}));
//---------------------------------------------------------------Hardik
When(/^User click on the logout button and verifies the title "([^"]*)?" is Present$/, (headerMessage) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield loginPage.clickOnLogOut();
    yield loginPage.verifyLoginPageTitle(headerMessage);
}));
Then(/^User expect that element contains the text "([^"]*)?"$/, (headerMessage) => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.verifyText(headerMessage);
}));
When(/^User enter securityAnswer to the securityAnswer input field and click on Loginandrememberme button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.enterSecurityAnswer();
    yield waitActions_1.waitForObject(loginPage.btnLoginRem);
    yield loginPage.clickOnLoginRem();
}));
Then(/^User expects that title  contains the text "([^"]*)?"$/, (headerMessage) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(loginPage.logoutBtn);
    yield loginPage.verifyPageTitle(headerMessage);
}));
When(/^User enters invalid Otp "([^"]*)?" 3 times$/, (OTP) => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.enterMultipleInvalidOTP(OTP);
}));
Then(/^User expect that the OTP field is Present$/, () => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.verifyOTPField();
}));
When(/^User enters invalid Ans "([^"]*)?" 3 times$/, (ANS) => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.enterMultipleInvalidAns(ANS);
}));
Then(/^User expect that the SecAns field is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.verifySecAnsField();
}));
When(/^User enter invalid otp "([^"]*)?" and click on Login button$/, (ANS) => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.enterInvalidOTP(ANS);
}));
When(/^User enter invalid ans "([^"]*)?" and click on Login button$/, (ANS) => __awaiter(this, void 0, void 0, function* () {
    yield loginPage.enterInvalidANS(ANS);
}));
