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
const securityQuestions_1 = require("../../../testData/securityQuestions");
const clearInputField_1 = require("../../../uiActions/keyboardActions/clearInputField");
const checkContainsText_1 = require("../../../uiActions/verifyActions/checkContainsText");
const checkTitleContains_1 = require("../../../uiActions/verifyActions/checkTitleContains");
const isElementPresent_1 = require("../../../uiActions/verifyActions/isElementPresent");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
class LoginPage {
    /**
     * Objects from Verify Identity page
     */
    constructor() {
        /**
         * To Enter UserName
         */
        this.enterUserName = (UsernameVal) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtUsername, UsernameVal);
        });
        /**
         * To enter Password
         */
        this.enterPassword = (PasswordVal) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtPassword, PasswordVal);
        });
        /**
         * To click on Login Button
         */
        this.clickOnLogin = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.btnLogin);
            yield clickElement_1.clickElement(this.btnLogin);
        });
        /**
         * To click on Login and Remember me Button
         */
        this.clickOnLoginRem = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.btnLoginRem);
            yield clickElement_1.clickElement(this.btnLoginRem);
            yield waitActions_1.staticWait(5000);
        });
        /**
         * To click on forgot password link
         */
        this.clickOnForgotPassword = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.lnkForgotPassword);
        });
        /**
         * To verify login page title
         */
        this.verifyLoginPageTitle = (headerMessage) => __awaiter(this, void 0, void 0, function* () {
            yield checkTitle_1.checkTitle(headerMessage);
            yield waitActions_1.staticWait(2000);
        });
        /**
         * To verify page title
         */
        this.verifyPageTitle = (headerMessage) => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.logoutBtn);
            yield checkTitleContains_1.checkTitleContains(headerMessage);
        });
        /**
         * To enter security answer
         */
        this.enterSecurityAnswer = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.securityQuestion);
            yield this.securityQuestion.getText().then((txtMsg) => __awaiter(this, void 0, void 0, function* () {
                if (txtMsg.startsWith("Question: How do you spell")) {
                    yield this.txtSecurityAnswer.sendKeys(securityQuestions_1.securityQuestions["How do you spell \"password\"?"]);
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
         * To login to application
         */
        this.loginToApplication = (UsernameVal, PasswordVal) => __awaiter(this, void 0, void 0, function* () {
            yield this.enterUserName(UsernameVal);
            yield this.enterPassword(PasswordVal);
            yield this.clickOnLogin();
        });
        /**
         *  To click on logout button
         */
        this.clickOnLogOut = () => __awaiter(this, void 0, void 0, function* () {
            yield this.logoutBtn.getLocation().then(function () {
                return protractor_1.browser.executeScript('window.scrollTo(0,0)');
            });
            yield waitActions_1.staticWait(2000);
            yield clickElement_1.clickElement(this.logoutBtn);
            yield waitActions_1.staticWait(2000);
            yield waitActions_1.waitForObject(this.txtUsername);
        });
        /**
         * To verify  text
         */
        this.verifyText = (headerMessage) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsText_1.checkContainsText(this.headerMsg, headerMessage);
        });
        /**
         * To enter invalid otp
         */
        this.enterMultipleInvalidOTP = (OTP) => __awaiter(this, void 0, void 0, function* () {
            for (var i = 1; i <= 3; i++) {
                yield setInputField_1.enterText(this.txtOTP, OTP);
                yield this.clickOnLogin();
                yield waitActions_1.staticWait(5000);
                yield clearInputField_1.clearInputField(this.txtOTP);
            }
        });
        /**
         * To verify OTP field
         */
        this.verifyOTPField = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.txtOTP);
            yield isElementPresent_1.isElementPresent(this.txtOTP);
        });
        /**
         * To enter invalid security answer
         */
        this.enterMultipleInvalidAns = (ANS) => __awaiter(this, void 0, void 0, function* () {
            for (var i = 1; i <= 3; i++) {
                yield setInputField_1.enterText(this.txtSecurityAnswer, ANS);
                yield this.clickOnContinue();
                yield waitActions_1.staticWait(3000);
            }
        });
        /**
         * To verify security answer field
         */
        this.verifySecurityAnswerField = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.txtSecurityAnswer);
            yield isElementPresent_1.isElementPresent(this.txtSecurityAnswer);
        });
        /**
         * To verify error message
         */
        this.verifyErrorMessage = (errorMessage) => __awaiter(this, void 0, void 0, function* () {
            yield checkContainsText_1.checkContainsText(this.errMsg, errorMessage);
        });
        /**
         * To enter invalid OTP
         */
        this.enterInvalidOTP = (OTP) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtOTP, OTP);
            yield waitActions_1.waitForObject(this.btnLogin);
            yield this.clickOnLogin();
        });
        /**
         * To enter invalid Security answer
         */
        this.enterInvalidANS = (ANS) => __awaiter(this, void 0, void 0, function* () {
            yield setInputField_1.enterText(this.txtSecurityAnswer, ANS);
            yield waitActions_1.waitForObject(this.btnLogin);
            yield this.clickOnLogin();
        });
        /**
         * To click on DataVision logo
         */
        this.clickOnDataVisionLogo = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.dataVisionLogo);
            yield clickElement_1.clickElement(this.dataVisionLogo);
        });
        /**
         * To click on Continue button
         */
        this.clickOnContinue = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.continueButton);
        });
        this.txtUsername = protractor_1.element(protractor_1.by.id('username'));
        this.txtPassword = protractor_1.element(protractor_1.by.id('password'));
        this.dataVisionLogo = protractor_1.element(protractor_1.by.css("img.submasthead-dvlogo"));
        this.btnLogin = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Log In')]"));
        this.btnLoginRem = protractor_1.element(protractor_1.by.xpath("//button[@type='button']"));
        this.lnkForgotPassword = protractor_1.element(protractor_1.by.linkText("Forgot Password?"));
        this.continueButton = protractor_1.element(protractor_1.by.css(".btn[type='submit']"));
        this.securityQuestion = protractor_1.element(protractor_1.by.css("label[for='security-answer']"));
        this.txtSecurityAnswer = protractor_1.element(protractor_1.by.css("#security-answer"));
        this.logoutBtn = protractor_1.element(protractor_1.by.css("a[ng-reflect-router-link='/logout']"));
        this.headerMsg = protractor_1.element(protractor_1.by.css("div.ng-star-inserted:nth-child(1) > h1:nth-child(1)"));
        this.txtOTP = protractor_1.element(protractor_1.by.xpath("//input[@id='code'] | //input[@id='otp-code']"));
        this.txtEmail = protractor_1.element(protractor_1.by.css("input#security-email"));
        this.errMsg = protractor_1.element(protractor_1.by.xpath("//div[@class='toast-message']"));
        this.errMsg = protractor_1.element(protractor_1.by.xpath("//dt")).element(protractor_1.by.xpath("//a[@routerlink='users']"));
    }
}
exports.LoginPage = LoginPage;
