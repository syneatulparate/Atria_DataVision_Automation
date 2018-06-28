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
const clickElement = (element) => __awaiter(this, void 0, void 0, function* () {
    /**
     * Element to perform the action on
     * @type {String}
     */
    var EC = protractor_1.protractor.ExpectedConditions;
    yield protractor_1.browser.wait(EC.presenceOf(element), 10000, "Element is not loaded");
    yield (element.isDisplayed()
        .then(function () {
        element.click();
    }));
});
exports.clickElement = clickElement;
