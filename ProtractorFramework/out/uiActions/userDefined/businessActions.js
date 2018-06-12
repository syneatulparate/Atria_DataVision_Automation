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
const loginPage_OR_1 = require("../../bdd/objectRepository/loginPage_OR");
const securityQuestions_1 = require("../../testData/securityQuestions");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new loginPage_OR_1.loginPage_OR();
const enterSecurityAnswer = (type, element) => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.wait(function () {
        protractor_1.browser.sleep(2000);
        return protractor_1.$(search[element]).isDisplayed()
            .then(function (isDisplayed) {
            console.log("object displayed --> " + isDisplayed + " " + element);
            var today = new Date();
            return isDisplayed;
        }, function (error) {
            console.log("Object not found --> " + element);
            return false;
        });
    }, 40 * 1000);
    yield protractor_1.$("label[for='security-answer']").getText().then(//label[for='security-answer']   ---- .flexcol-2.p
    function (txtMsg) {
        console.log("text message ===>" + txtMsg);
        if (txtMsg.startsWith("Question: How do you spell")) {
            console.log("Question: Inside sercurityAns -->" + txtMsg + "element -->" + element);
            protractor_1.$(search[element]).sendKeys(securityQuestions_1.securityQuestions["How do you spell \"password\"?"]);
        }
        else if (txtMsg.trim() === "Question: What is 2+2?") {
            console.log("Inside sercurityAns -->" + txtMsg);
            protractor_1.$(search[element]).sendKeys(securityQuestions_1.securityQuestions["What is 2+2?"]);
        }
    });
});
exports.enterSecurityAnswer = enterSecurityAnswer;
