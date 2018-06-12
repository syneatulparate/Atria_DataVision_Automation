import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const search: loginPage_OR = new loginPage_OR();

const checkContainsText = async(element, expectedText) => {
//div.toast-message
//var txtMsg:string;
//  var erroMsgText =  $(search[element]).getText().then(function(txtMsg){
//     console.log("Message text = " + txtMsg);
//     return txtMsg;
// })



//console.log("Expected text - " + erroMsgText + "----" + expectedText );

//await expect(txtMsg).to.equal(expectedText);

await browser.waitForAngular();
var EC = protractor.ExpectedConditions;

// Waits for the element with id 'abc' to contain the text 'foo'.
await browser.wait(EC.textToBePresentInElement($(search[element]), expectedText), 10000);

};

export {checkContainsText} 