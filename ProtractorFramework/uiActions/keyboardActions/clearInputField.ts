import { browser, protractor, $, ElementFinder } from "protractor";

import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const clearInputField = async(elem : ElementFinder) => {
     /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
     
    await elem.clear();

};

export {clearInputField}