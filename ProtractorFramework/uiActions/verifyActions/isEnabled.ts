import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();

const isEnabled = async(element, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isEnabled = await ($(search[element])).isEnabled();

    if (falseCase) {
        expect(isEnabled).to.not
            .equal(true, `Expected element "${element}" not to be Enabled`);
    } else {
        expect(isEnabled).to
            .equal(true, `Expected element "${element}" to be Enabled`);
    }
};

export {isEnabled}