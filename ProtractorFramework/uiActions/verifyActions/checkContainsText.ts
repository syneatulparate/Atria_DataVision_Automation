import { browser, protractor, $, ElementFinder } from "protractor";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;



const checkContainsText = async(element, expectedText) => {

await browser.waitForAngular();
var EC = protractor.ExpectedConditions;

// Waits for the element with id 'abc' to contain the text 'foo'.
await browser.wait(EC.textToBePresentInElement(element, expectedText), 30000);

};

export {checkContainsText} 