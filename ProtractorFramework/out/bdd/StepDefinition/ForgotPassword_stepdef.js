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
const ForgotPasswordPage_1 = require("../Pages/ForgotPasswordPage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
let forgotPasswordPage = new ForgotPasswordPage_1.ForgotPasswordPage();
// When  User enters "<username>" into the Username field
When(/^User enters "([^"]*)?" into the Username field and click on the continue button$/, (username) => __awaiter(this, void 0, void 0, function* () {
    //console.log("Inside when clause --" + username + " ===" + password);
    yield forgotPasswordPage.enterUserName(username);
    yield forgotPasswordPage.clickOnContinue();
}));
Then(/^User expect that "([^"]*)?" is displayed$/, (ErrorMsg) => __awaiter(this, void 0, void 0, function* () {
    yield forgotPasswordPage.verifyErrorMessage(ErrorMsg);
}));
Then(/^User expect that email field is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield forgotPasswordPage.verifyEmailField();
}));
When(/^User set "([^"]*)?" to the answer field and "([^"]*)?" into email field and clicks on continue button$/, (securityAnswer, emailAddress) => __awaiter(this, void 0, void 0, function* () {
    yield forgotPasswordPage.enterInvalidSecurityAnswer(securityAnswer);
    yield forgotPasswordPage.enterInvalidEmail(emailAddress);
    yield forgotPasswordPage.clickOnContinue();
}));
Then(/^User expect that the OTP field is displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield forgotPasswordPage.verifyOTPField();
}));
When(/^User enters "([^"]*)?" into the OTP field and clicks on continue button$/, (OTP) => __awaiter(this, void 0, void 0, function* () {
    yield forgotPasswordPage.enterOTP(OTP);
    yield forgotPasswordPage.clickOnContinue();
}));
When(/^User enters invalid OTP "([^"]*)?" 4 times$/, (OTP) => __awaiter(this, void 0, void 0, function* () {
    yield forgotPasswordPage.enterMultipleInvalidOTP(OTP);
}));
When(/^User enters a valid securityAnswer$/, () => __awaiter(this, void 0, void 0, function* () {
    yield forgotPasswordPage.enterSecurityAnswer();
}));
When(/^User enters a invalid email "([^"]*)?" in email textfield and clicks on continue button$/, (email) => __awaiter(this, void 0, void 0, function* () {
    yield forgotPasswordPage.enterInvalidEmail(email);
    yield forgotPasswordPage.clickOnContinue();
}));
