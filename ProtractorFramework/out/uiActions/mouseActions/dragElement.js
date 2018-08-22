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
const html_dnd_1 = require("html-dnd");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const getElemLocation = (elem) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser
        .actions()
        .mouseMove(elem)
        .mouseUp().perform;
});
exports.getElemLocation = getElemLocation;
const dragElement = (source, destination) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser
        .actions()
        .dragAndDrop(source, destination)
        .mouseUp()
        .perform();
    yield protractor_1.browser.sleep(5000);
});
exports.dragElement = dragElement;
const dragAndDropElement = (source, destination) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.driver.executeScript(html_dnd_1.code, source.getWebElement(), destination.getWebElement());
    yield protractor_1.browser.sleep(5000);
});
exports.dragAndDropElement = dragAndDropElement;
