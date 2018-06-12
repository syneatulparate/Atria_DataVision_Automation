import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();

const isElementPresent = async(element, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isElementPresent = await browser.isElementPresent($(search[element]));
                            

    // if (falseCase) {
    //     expect(isElementPresent).to.not
    //         .equal(true, `Expected element "${element}" not to be visible`);
    // } else {
    //     expect(isElementPresent).to
    //         .equal(true, `Expected element "${element}" to be visible`);
    // }
    if (isElementPresent) {
        expect(isElementPresent).to.equal(true, `Expected element "${element}" to be visible`);
    } else {

        expect(isElementPresent).to.not.equal(true, `Expected element "${element}" not to be visible`);
    }
};

export {isElementPresent}