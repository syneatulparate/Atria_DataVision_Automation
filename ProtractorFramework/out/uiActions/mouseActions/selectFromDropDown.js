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
const protractor_1 = require("protractor");
const chai = require("chai").use(require("chai-as-promised"));
const selectFromDropDown = (value, type, element) => __awaiter(this, void 0, void 0, function* () {
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
    yield protractor_1.browser.element.all(protractor_1.by.cssContainingText("option", value)).click();
});
exports.selectFromDropDown = selectFromDropDown;
