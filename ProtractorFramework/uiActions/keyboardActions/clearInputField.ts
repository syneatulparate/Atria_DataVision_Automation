import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();
const clearInputField = async(element) => {
     /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
     
    await $(search[element]).clear();
   // browser.setValue( element, value )
   // browser[command](element, checkValue);
};

export {clearInputField}