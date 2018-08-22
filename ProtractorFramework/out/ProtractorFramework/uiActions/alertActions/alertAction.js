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
const alertAccept = () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.sleep(5000);
    yield protractor_1.browser.switchTo().alert().accept();
});
exports.alertAccept = alertAccept;
const alertDismiss = () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.sleep(5000);
    yield protractor_1.browser.switchTo().alert().dismiss();
});
exports.alertDismiss = alertDismiss;
