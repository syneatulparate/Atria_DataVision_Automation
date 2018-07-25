import { browser, protractor, $ } from "protractor";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;

const checkTitle = async(expectedTitle) => {
 
   browser.waitForAngular(); 
   await expect(browser.getTitle()).to.eventually.equal(expectedTitle);
  
};

export {checkTitle}