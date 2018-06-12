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
const checkContainsText = (element, expectedText) => __awaiter(this, void 0, void 0, function* () {
    //div.toast-message
    //var txtMsg:string;
    //  var erroMsgText =  $(search[element]).getText().then(function(txtMsg){
    //     console.log("Message text = " + txtMsg);
    //     return txtMsg;
    // })
    //console.log("Expected text - " + erroMsgText + "----" + expectedText );
    //await expect(txtMsg).to.equal(expectedText);
    yield protractor_1.browser.waitForAngular();
    var EC = protractor_1.protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to contain the text 'foo'.
    yield protractor_1.browser.wait(EC.textToBePresentInElement(protractor_1.$(search[element]), expectedText), 10000);
});
exports.checkContainsText = checkContainsText;
