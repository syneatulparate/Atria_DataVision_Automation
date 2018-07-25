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
const expect = chai.expect;
const checkTitleContains = (expectedTitle) => __awaiter(this, void 0, void 0, function* () {
    var EC = protractor_1.protractor.ExpectedConditions;
    // Waits for the title to contain 'foo'.
    yield expect(protractor_1.browser.wait(EC.titleContains(expectedTitle), 5000));
    // await expect(browser.getTitle()).to.eventually.equal(expectedTitle);
});
exports.checkTitleContains = checkTitleContains;
