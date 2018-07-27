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
let destX;
let destY;
//let EP : EntitlementPage = new EntitlementPage();
const getElemLocation = (elem) => __awaiter(this, void 0, void 0, function* () {
    // await elem.getLocation().then(async(srclocation)=>{
    //     destX = srclocation.x;
    //     destY = srclocation.y;        
    //     await browser.actions().mouseMove(destX,destY).mouseUp().perform;
    // })
    yield protractor_1.browser.actions().mouseMove(elem).mouseUp().perform;
});
exports.getElemLocation = getElemLocation;
const dragElement = (source, destination) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.actions().dragAndDrop(source, destination).mouseUp().perform();
    // await browser.actions().mouseMove(source).perform();
    // await browser.sleep(5000)
    // browser.actions().mouseDown(source).mouseDown(source).perform();
    // await browser.sleep(5000)
    // browser.actions().mouseMove(destination).perform()
    // browser.actions().mouseUp(destination).perform();
    yield protractor_1.browser.sleep(5000);
});
exports.dragElement = dragElement;
