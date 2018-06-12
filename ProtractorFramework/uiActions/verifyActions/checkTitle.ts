import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;

const search: loginPage_OR = new loginPage_OR();

const checkTitle = async(expectedTitle) => {
 
   browser.waitForAngular(); 
   await expect(browser.getTitle()).to.eventually.equal(expectedTitle);
  
};

export {checkTitle}