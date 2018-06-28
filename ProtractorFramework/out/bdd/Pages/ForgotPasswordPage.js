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
const setInputField_1 = require("../../uiActions/keyboardActions/setInputField");
const clickElement_1 = require("../../uiActions/mouseActions/clickElement");
const checkTitle_1 = require("../../uiActions/verifyActions/checkTitle");
const checkContainsText_1 = require("../../uiActions/verifyActions/checkContainsText");
const isElementPresent_1 = require("../../uiActions/verifyActions/isElementPresent");
const securityQuestions_1 = require("../../testData/securityQuestions");
const clearInputField_1 = require("../../uiActions/keyboardActions/clearInputField");
const waitActions_1 = require("../../uiActions/waitActions/waitActions");
class ForgotPasswordPage {
    constructor() {
        /**
        * Objects from forogot password page
        */
        this.enterUserName = (UsernameVal) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Inside enter username");
            yield setInputField_1.enterText(this.txtUsername, UsernameVal);
        });
        this.clickOnContinue = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Click on continue");
            yield clickElement_1.clickElement(this.continueButton);
        });
        this.clickOnForgotPassword = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Click on login");
            yield clickElement_1.clickElement(this.forgotPasswordLink);
        });
        this.verifyLoginPageTitle = (headerMessage) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("inside verify login page title " + headerMessage);
            yield checkTitle_1.checkTitle(headerMessage);
        });
        this.verifyErrorMessage = (errorMessage) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsText_1.checkContainsText(this.errMsg, errorMessage);
        });
        this.verifyEmailField = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.emailTextField);
            yield isElementPresent_1.isElementPresent(this.emailTextField);
        });
        this.verifyOTPField = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.txtOTP);
            yield isElementPresent_1.isElementPresent(this.txtOTP);
        });
        this.enterSecurityAnswer = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.securityQuestion);
            yield console.log("Inside Business Actions");
            yield this.securityQuestion.getText().then((txtMsg) => __awaiter(this, void 0, void 0, function* () {
                console.log("text message ===>" + txtMsg);
                if (txtMsg.startsWith("Question: How do you spell")) {
                    console.log("Question: Inside sercurityAns -->" + txtMsg + "element -->" + protractor_1.element);
                    yield this.txtSecurityAnswer.sendKeys(securityQuestions_1.securityQuestions["How do you spell \"password\"?"]);
                }
                else if (txtMsg.trim() === "Question: What is 2+2?") {
                    console.log("Inside sercurityAns -->" + txtMsg);
                    yield this.txtSecurityAnswer.sendKeys(securityQuestions_1.securityQuestions["What is 2+2?"]);
                }
                else if (txtMsg.trim() === "Question: 1+1=?") {
                    console.log("Inside securityans -->" + txtMsg);
                    yield this.txtSecurityAnswer.sendKeys(securityQuestions_1.securityQuestions["1+1?"]);
                }
            }));
        });
        this.enterInvalidSecurityAnswer = (invalidAnswer) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtSecurityAnswer, invalidAnswer);
        });
        this.enterInvalidEmail = (invalidEmail) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.emailTextField, invalidEmail);
        });
        this.enterOTP = (OTP) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtOTP, OTP);
        });
        this.clickOnMsgCloseButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.msgCloseButton);
            yield clickElement_1.clickElement(this.msgCloseButton);
        });
        this.enterMultipleInvalidOTP = (OTP) => __awaiter(this, void 0, void 0, function* () {
            for (var i = 1; i <= 4; i++) {
                console.log(i);
                yield setInputField_1.enterText(this.txtOTP, OTP);
                yield this.clickOnContinue();
                yield clearInputField_1.clearInputField(this.txtOTP);
                //await this.clickOnMsgCloseButton();
            }
        });
        console.log("Inside constructor");
        this.txtUsername = protractor_1.element(protractor_1.by.id('username'));
        this.continueButton = protractor_1.element(protractor_1.by.css(".btn[type='submit']"));
        this.errMsg = protractor_1.element(protractor_1.by.xpath("//div[@class='toast-message']"));
        this.msgCloseButton = protractor_1.element(protractor_1.by.xpath("//div[@class='octicon octicon-x']"));
        //div[@class='octicon octicon-x']
        this.emailTextField = protractor_1.element(protractor_1.by.css("#security-email[type='text']"));
        this.securityQuestion = protractor_1.element(protractor_1.by.css("label[for='security-answer']"));
        this.txtSecurityAnswer = protractor_1.element(protractor_1.by.css("#security-answer[type='text']"));
        this.txtOTP = protractor_1.element(protractor_1.by.id('opt-text'));
    }
}
exports.ForgotPasswordPage = ForgotPasswordPage;
