import { browser, protractor, $, ExpectedConditions } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";
import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const enterText = async (element, value) =>{
    /**
    * The command to perform on the browser object (addValue or setValue)
    * @type {String}
    */

    await browser.manage().timeouts().implicitlyWait(0);
    await browser.wait(function () {
        browser.sleep(2000);
        return element.isDisplayed()
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

    await element.sendKeys(value);

};

export { enterText }




