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
const setInputField_1 = require("../../../uiActions/keyboardActions/setInputField");
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
const checkTitle_1 = require("../../../uiActions/verifyActions/checkTitle");
const isElementPresent_1 = require("../../../uiActions/verifyActions/isElementPresent");
const securityQuestions_1 = require("../../../testData/securityQuestions");
const clearInputField_1 = require("../../../uiActions/keyboardActions/clearInputField");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const EntitlementPage_1 = require("../Roles&Permissions/EntitlementPage");
let entitlementPage = new EntitlementPage_1.EntitlementPage();
class ForgotPasswordPage {
    /**
     * Objects from forogot password page
     */
    constructor() {
        /**
         * To enter user name
         */
        this.enterUserName = (UsernameVal) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtUsername, UsernameVal);
        });
        /**
         * To click on continue button
         */
        this.clickOnContinue = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.continueButton);
        });
        /**
         * To click on forgot password link
         */
        this.clickOnForgotPassword = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.forgotPasswordLink);
        });
        /**
         * To verify page title
         */
        this.verifyLoginPageTitle = (headerMessage) => __awaiter(this, void 0, void 0, function* () {
            yield checkTitle_1.checkTitle(headerMessage);
        });
        /**
         * To verify Error message
         */
        this.verifyErrorMessage = (errorMessage) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield waitActions_1.waitForObject(this.errMsg);
            yield this.errMsg.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                if (yield text.toUpperCase().includes(errorMessage.toUpperCase())) {
                    flag = true;
                }
                else {
                    flag = false;
                }
            }));
            return flag;
        });
        /**
         * To verify Lock message
         */
        this.verifylockErrorMessage = (errorMessage) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            let elemet = protractor_1.element(protractor_1.by.css("div.alert.alert-danger.ng-star-inserted"));
            yield waitActions_1.waitForObject(elemet);
            yield elemet.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                if (yield text.toUpperCase().includes(errorMessage.toUpperCase())) {
                    flag = true;
                }
                else {
                    flag = false;
                }
            }));
            return flag;
        });
        /**
         * To verify emailid field
         */
        this.verifyEmailField = () => __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            yield waitActions_1.waitForObject(this.emailTextField);
            linkPresent = entitlementPage.verifyElement(this.emailTextField);
            return linkPresent;
        });
        /**
         * To verify OTP field
         */
        this.verifyOTPField = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.staticWait(3000);
            yield waitActions_1.waitForObject(this.txtOTP);
            yield isElementPresent_1.isElementPresent(this.txtOTP);
        });
        /**
         * To enter security answer
         */
        this.enterSecurityAnswer = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.securityQuestion);
            yield this.securityQuestion.getText().then((txtMsg) => __awaiter(this, void 0, void 0, function* () {
                if (txtMsg.startsWith("Question: How do you spell")) {
                    yield this.txtSecurityAnswer.sendKeys(securityQuestions_1.securityQuestions['How do you spell "password"?']);
                }
                else if (txtMsg.trim() === "Question: What is 2+2?") {
                    yield this.txtSecurityAnswer.sendKeys(securityQuestions_1.securityQuestions["What is 2+2?"]);
                }
                else if (txtMsg.trim() === "Question: 1+1=?") {
                    yield this.txtSecurityAnswer.sendKeys(securityQuestions_1.securityQuestions["1+1?"]);
                }
            }));
        });
        /**
         * To Enter invalid security answer
         */
        this.enterInvalidSecurityAnswer = (invalidAnswer) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtSecurityAnswer, invalidAnswer);
        });
        /**
         * To Enter invalid email id
         */
        this.enterInvalidEmail = (invalidEmail) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.emailTextField, invalidEmail);
        });
        /**
         * To Enter invalid Otp
         */
        this.enterOTP = (OTP) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtOTP, OTP);
        });
        /**
         * To click on close message button
         */
        this.clickOnMsgCloseButton = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.msgCloseButton);
            yield clickElement_1.clickElement(this.msgCloseButton);
        });
        /**
         * To verify lock senario
         */
        this.enterMultipleInvalidOTP = (OTP) => __awaiter(this, void 0, void 0, function* () {
            for (var i = 1; i <= 3; i++) {
                yield setInputField_1.enterText(this.txtOTP, OTP);
                yield this.clickOnContinue();
                yield clearInputField_1.clearInputField(this.txtOTP);
            }
        });
        this.txtUsername = protractor_1.element(protractor_1.by.id("username"));
        this.continueButton = protractor_1.element(protractor_1.by.css(".btn[type='submit']"));
        this.errMsg = protractor_1.element(protractor_1.by.xpath("//div[@class='toast-message']"));
        this.msgCloseButton = protractor_1.element(protractor_1.by.xpath("//div[@class='octicon octicon-x']"));
        this.emailTextField = protractor_1.element(protractor_1.by.css("#security-email[type='text']"));
        this.securityQuestion = protractor_1.element(protractor_1.by.css("label[for='security-answer']"));
        this.txtSecurityAnswer = protractor_1.element(protractor_1.by.css("#security-answer[type='text']"));
        this.txtOTP = protractor_1.element(protractor_1.by.id("opt-text"));
    }
}
exports.ForgotPasswordPage = ForgotPasswordPage;
