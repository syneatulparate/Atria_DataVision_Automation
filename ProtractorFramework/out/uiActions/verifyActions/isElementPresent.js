"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai").use(require("chai-as-promised"));
//clearconst isElementPresent = async (element) => {
//     /**
//      * Visible state of the give element
//      * @type {String}
//      */
//     let isElementPresent = await browser.isElementPresent(element);
//    // let elementPresent = false;
//   //  console.log("from true part!!!!!!!!!!!!!!");    
//     if (isElementPresent) {
//         expect(isElementPresent).to.equal(true, `Expected element "${element}" to be visible`);
//         console.log("from true part");
//          isElementPresent=true;
//          console.log(isElementPresent+"=is element present")
//     } else {
//         expect(isElementPresent).to.equal(false, `Expected element "${element}" not to be visible`);
//         console.log("from false part");
//          isElementPresent=false;
//     }
const isElementPresent = (elem) => __awaiter(this, void 0, void 0, function* () {
    /**
    * Visible state of the give element
    * @type {String}
    */
    return yield elem.isDisplayed()
        .then(function (isDisplayed) {
        console.log("Elemenet is present on the page");
        return isDisplayed;
    }, function () {
        console.log("Element not present on the page");
        return false;
    });
});
exports.isElementPresent = isElementPresent;
