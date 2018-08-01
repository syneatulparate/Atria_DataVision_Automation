import { browser, protractor, $, ElementFinder } from "protractor";

import { checkIfElementExists } from "../verifyActions/checkIfElementExists";
import { EntitlementPage } from "../../bdd/Pages/Roles&Permissions/EntitlementPage";
import { ActionSequence } from "selenium-webdriver";

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let destX : any;
let destY : any;

//let EP : EntitlementPage = new EntitlementPage();


const getElemLocation = async(elem) =>{
    // await elem.getLocation().then(async(srclocation)=>{
    //     destX = srclocation.x;
    //     destY = srclocation.y;        
    //     await browser.actions().mouseMove(destX,destY).mouseUp().perform;

    // })
    await browser.actions().mouseMove(elem).mouseUp().perform;
}
export{ getElemLocation }
const dragElement = async (source:ElementFinder, destination:ElementFinder) => {
   await browser.actions().dragAndDrop(source,destination).mouseUp().perform();
    // await browser.actions().mouseMove(source).perform();
    // await browser.sleep(5000)
    // browser.actions().mouseDown(source).mouseDown(source).perform();
    // await browser.sleep(5000)
    // browser.actions().mouseMove(destination).perform()
    // browser.actions().mouseUp(destination).perform();
    await browser.sleep(5000)
};

export { dragElement }
