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
const clickElement_1 = require("./clickElement");
const waitActions_1 = require("../waitActions/waitActions");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const selectCheckBox = (element) => __awaiter(this, void 0, void 0, function* () {
    yield element.isDisplayed().then((isDisplayed) => __awaiter(this, void 0, void 0, function* () {
        yield element.isSelected().then((isSelected) => __awaiter(this, void 0, void 0, function* () {
            if (isSelected == false) {
                yield clickElement_1.clickElement(element);
                console.log("Checkbox selected");
            }
            else {
                console.log("Checkbox is already selected");
            }
        }), function (error) {
            console.log("Object not found");
        });
    }), function (error) {
        console.log("Object is not displayed");
    });
});
exports.selectCheckBox = selectCheckBox;
const deSelectCheckBox = (element) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.waitForObject(element);
    yield element.isDisplayed().then((isDisplayed) => __awaiter(this, void 0, void 0, function* () {
        yield element.isSelected().then((isSelected) => __awaiter(this, void 0, void 0, function* () {
            if (isSelected == true) {
                yield clickElement_1.clickElement(element);
                console.log("Checkbox deselected");
            }
            else {
                console.log("Checkbox is already deselected");
            }
        }), function (error) {
            console.log("Object not found");
        });
    }), function (error) {
        console.log("Object is not displayed");
    });
});
exports.deSelectCheckBox = deSelectCheckBox;
