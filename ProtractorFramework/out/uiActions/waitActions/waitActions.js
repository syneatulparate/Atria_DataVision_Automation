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
const waitForObject = (element) => __awaiter(this, void 0, void 0, function* () {
    return protractor_1.browser.wait(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        return yield element.isDisplayed().then(function (isDisplayed) {
            console.log("object displayed --> " + isDisplayed + " " + element);
            return isDisplayed;
        }, function () {
            console.log("Object not found --> " + element);
            return false;
        });
    }), 30 * 1000);
});
exports.waitForObject = waitForObject;
const staticWait = (TimeValue) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(TimeValue);
});
exports.staticWait = staticWait;
