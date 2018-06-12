import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();

const isSelected = async(element, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isSelected = await $(element).isSelected();

    if (falseCase) {
        expect(isSelected).to.not
            .equal(true, `Expected element "${element}" not to be Selected`);
    } else {
        expect(isSelected).to
            .equal(true, `Expected element "${element}" to be Selected`);
    }
};

export {isSelected}