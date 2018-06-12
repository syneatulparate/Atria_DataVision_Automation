import { browser, protractor, $ } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();

const clickElement = async(action, type, element) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    console.log("Element = " + element);
    const elem = (type === 'link') ? `=${element}` : element;

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click') ? 'click' : 'doubleClick';

   
    //checkIfElementExists(elem);
    await ($(search[element])).click();
    browser.manage().timeouts().implicitlyWait(2000);
    
};

export {clickElement}