import { browser, protractor } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const checkTitleContains = async(expectedTitle) => {
 

   var EC = protractor.ExpectedConditions;
   // Waits for the title to contain 'foo'.
   await expect(browser.wait(EC.titleContains(expectedTitle), 5000));

  // await expect(browser.getTitle()).to.eventually.equal(expectedTitle);
  
};

export {checkTitleContains}	