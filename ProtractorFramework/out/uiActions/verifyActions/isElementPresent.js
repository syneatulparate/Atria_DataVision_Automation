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
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const isElementPresent = (element) => __awaiter(this, void 0, void 0, function* () {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isElementPresent = yield protractor_1.browser.isElementPresent(element);
    if (isElementPresent) {
        expect(isElementPresent).to.equal(true, `Expected element "${element}" to be visible`);
        console.log("from true part");
    }
    else {
        expect(isElementPresent).to.equal(false, `Expected element "${element}" not to be visible`);
        console.log("from false part");
    }
});
exports.isElementPresent = isElementPresent;
