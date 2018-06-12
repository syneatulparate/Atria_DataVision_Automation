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
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new loginPage_OR_1.loginPage_OR();
const setInputField = (method, value, type, element) => __awaiter(this, void 0, void 0, function* () {
    /**
    * The command to perform on the browser object (addValue or setValue)
    * @type {String}
    */
    //console.log("Inside setInputFiled = " + value + " element = " + $(search[element]).isDisplayed());
    protractor_1.browser.manage().timeouts().implicitlyWait(0);
    protractor_1.browser.wait(function () {
        protractor_1.browser.sleep(2000);
        return protractor_1.$(search[element]).isDisplayed()
            .then(function (isDisplayed) {
            console.log("object displayed --> " + element);
            var today = new Date();
            return isDisplayed;
        }, function (error) {
            console.log("Object not found --> " + element);
            return false;
        });
    }, 40 * 1000);
    // var EC = ExpectedConditions.visibilityOf($(search[element]))
    // browser.driver.wait(EC,15000);
    // console.log("Waited for 15 seconds for the element");
    yield protractor_1.$(search[element]).sendKeys(value);
    // browser.manage().timeouts().implicitlyWait(2000);
    // browser.setValue( element, value )
    // browser[command](element, checkValue);
});
exports.setInputField = setInputField;
