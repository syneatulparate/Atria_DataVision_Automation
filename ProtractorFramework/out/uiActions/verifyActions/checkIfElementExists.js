"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_OR_1 = require("../../bdd/objectRepository/loginPage_OR");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new loginPage_OR_1.loginPage_OR();
exports.checkIfElementExists = (element, falsCase, exactly) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const nrOfElements = protractor_1.browser.elements(protractor_1.$(search[element])).value;
    if (falsCase === true) {
        expect(nrOfElements).to.have.lengthOf(0, `Element with selector "${element}" should not exist on the page`);
    }
    else if (exactly) {
        expect(nrOfElements).to.have.lengthOf(exactly, `Element with selector "${element}" should exist exactly ` +
            `${exactly} time(s)`);
    }
    else {
        expect(nrOfElements).to.have.length.of.at.least(1, `Element with selector "${element}" should exist on the page`);
    }
};
