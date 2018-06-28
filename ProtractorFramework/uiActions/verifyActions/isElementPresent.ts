import { browser, protractor, $ } from "protractor";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const isElementPresent = async(element) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isElementPresent = await browser.isElementPresent(element);
         
    if (isElementPresent) {

        expect(isElementPresent).to.equal(true, `Expected element "${element}" to be visible`);
        console.log("from true part");
    } else {
        expect(isElementPresent).to.equal(false, `Expected element "${element}" not to be visible`);
        console.log("from false part");
    }
};

export {isElementPresent}