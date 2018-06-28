"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const setInputField_1 = require("../../../uiActions/keyboardActions/setInputField");
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
class LoginPage {
    constructor() {
        this.enterUserName = function (UsernameVal) {
            setInputField_1.enterText(this.txtUsername, UsernameVal);
        };
        this.enterPassword = function (PasswordVal) {
            setInputField_1.enterText(this.txtPassword, PasswordVal);
        };
        this.clickOnLogin = function () {
            clickElement_1.clickElement(this.btnLogin);
        };
        this.loginToApplication = function (UsernameVal, PasswordVal) {
            this.enterUserName(UsernameVal);
            this.enterPassword(PasswordVal);
            this.clickOnLogin();
        };
        console.log("Inside constructor");
        this.txtUsername = protractor_1.element(protractor_1.by.id('username'));
        this.txtPassword = protractor_1.element(protractor_1.by.id('password'));
        this.btnLogin = protractor_1.element(protractor_1.by.css(".btn[type='submit']"));
    }
}
exports.LoginPage = LoginPage;
