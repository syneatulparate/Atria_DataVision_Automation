import { browser, by } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));



const selectFromDropDown = async(value, type, element) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    console.log("Element = " + element);

    /**
     * The method to call on the browser object
     * @type {String}
     */
    //const method = (action === 'click') ? 'click' : 'doubleClick';

   
    //checkIfElementExists(elem);
    //await ($(search[element])).click()

    await (browser.element.all(by.cssContainingText('option',value)).click());
    
    
};

export {selectFromDropDown}