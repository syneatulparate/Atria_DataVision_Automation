import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();

const checkElementToBeClickable = async(element) => {

var EC = protractor.ExpectedConditions;


await expect(browser.wait(EC.elementToBeClickable($(search[element])), 5000));

};

export {checkElementToBeClickable}