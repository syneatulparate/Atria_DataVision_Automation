import { browser, protractor, $, ExpectedConditions } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: loginPage_OR = new loginPage_OR();

const setInputField = async (method, value, type, element) => {
    /**
    * The command to perform on the browser object (addValue or setValue)
    * @type {String}
    */

    //console.log("Inside setInputFiled = " + value + " element = " + $(search[element]).isDisplayed());

    browser.manage().timeouts().implicitlyWait(0);
    browser.wait(function () {
        browser.sleep(2000);
        return $(search[element]).isDisplayed()
            .then(
                function (isDisplayed) {
                    console.log("object displayed --> "+ element);
                    var today = new Date();
   
                    return isDisplayed;
                },
                function (error) {
                    console.log("Object not found --> " + element );
                    
                    return false
                });
    }, 40 * 1000);

    // var EC = ExpectedConditions.visibilityOf($(search[element]))
    // browser.driver.wait(EC,15000);
    // console.log("Waited for 15 seconds for the element");
    await $(search[element]).sendKeys(value);
    // browser.manage().timeouts().implicitlyWait(2000);
    // browser.setValue( element, value )
    // browser[command](element, checkValue);
};

export { setInputField }




