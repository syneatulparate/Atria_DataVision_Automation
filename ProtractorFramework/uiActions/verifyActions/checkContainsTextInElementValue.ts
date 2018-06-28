import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();

const checkContainsTextInElementValue = async(element, expectedText) => {

var EC = protractor.ExpectedConditions;

console.log("Inside the check function");
browser.waitForAngular();
var eText = $(element).getText().then(function(code){
    console.log("Value of the text in element = " + code);
});

console.log("Text inside the element" +eText);
// Waits for the element with id 'abc' to contain the text 'foo'.
await browser.wait(EC.textToBePresentInElementValue($(element), expectedText), 5000);

};

export {checkContainsTextInElementValue}