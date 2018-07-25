import { browser, protractor, $ } from "protractor";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const checkElementToBeClickable = async(element) => {

var EC = protractor.ExpectedConditions;


await expect(browser.wait(EC.elementToBeClickable(element), 5000));

};

export {checkElementToBeClickable}