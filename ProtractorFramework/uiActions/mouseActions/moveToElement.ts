import { browser, protractor, $, ElementFinder } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();

const moveToElement = async(elem : ElementFinder) => {
     
    await browser.actions().
    mouseMove(elem).
    perform();
};

export {moveToElement}