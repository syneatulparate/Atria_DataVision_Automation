import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;

const search: loginPage_OR = new loginPage_OR();

const checkTitleContains = async(expectedTitle) => {
 

   var EC = protractor.ExpectedConditions;
   // Waits for the title to contain 'foo'.
   await expect(browser.wait(EC.titleContains(expectedTitle), 5000));

  // await expect(browser.getTitle()).to.eventually.equal(expectedTitle);
  
};

export {checkTitleContains}	