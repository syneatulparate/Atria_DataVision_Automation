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
const UpComingBirthdaysTilePage_1 = require("../../Pages/BirthDays/UpComingBirthdaysTilePage");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let upComingBirthdays = new UpComingBirthdaysTilePage_1.UpComingBirthdaysTilePage();
When(/^User hovers mouse on email Icon for user on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(5000);
    yield upComingBirthdays.moveToMessageIcon();
}));
When(/^User hovers mouse on phone Icon for user on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.moveToPhoneIcon();
}));
When(/^User hovers mouse on comments Icon for user on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.moveToCommentIcon();
}));
Then(/^User expect that primary email of the user is displayed on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    expect(yield upComingBirthdays.verifyPrimaryEmail()).to.equal(true, "Primary Email is not displayed");
}));
Then(/^User expect that contact number of the user is displayed on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    expect(yield upComingBirthdays.verifyPhoneNumber()).to.equal(true, "Phone number is not displayed");
}));
Then(/^User expect that number of "([^"]*)?" the user is displayed on upcoming bithdays tile$/, (comments) => __awaiter(this, void 0, void 0, function* () {
    expect(yield upComingBirthdays.verifyPhoneNumber()).to.equal(true, "Phone number is not displayed");
}));
When(/^User selects "([^"]*)?" from the dropdown$/, (viewOption) => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.selectViewBirthdays(viewOption);
}));
When(/^User clicks on the expand icon on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.clickOnExpandIconContacts();
}));
Then(/^User expect that contraction button is displayed on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.verifyContractionButton();
}));
When(/^User clicks on contraction button on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.clickOnContractIconContacts();
}));
Then(/^User expects that tile is closed and dashboard is displayed$/, () => __awaiter(this, void 0, void 0, function* () { }));
When(/^User clicks outside of tile$/, () => __awaiter(this, void 0, void 0, function* () { }));
When(/^User taps on Esc button on keyboard$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.tapEscButton();
}));
When(/^User selects My Owned on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.clickOnMyOwned();
}));
Then(/^User expect that system displays contacts for "([^"]*)?" on upcoming birthday tile$/, (viewCategory) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield upComingBirthdays.verifyContactNames(viewCategory)).to.equal(true, "User names not displayed");
}));
When(/^User selects All Contacts on upcoming bithdays tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.clickOnAllContacts();
}));
Then(/^User expect that system displays all Public, Protected and Private contacts within the user's workgroup$/, () => __awaiter(this, void 0, void 0, function* () { }));
When(/^User clicks on View birthdays by dropdown$/, () => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.clickOnDropDownIcon();
}));
Then(/^User expects that Today,Next Week and Next Two Week options are displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield upComingBirthdays.verifyDropDownMenu()).to.equal(true, "Date range Drop down menu is not displayed as expected.");
}));
Then(/^User expects that Expand icon and contact directory link are displayed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield upComingBirthdays.verifyExpandIconAndContactsLink()).to.equal(true, "Expand icon and go to contacts directory link is not displayed");
}));
When(/^User selects "([^"]*)?" from the view by dropdown$/, (viewOption) => __awaiter(this, void 0, void 0, function* () {
    yield upComingBirthdays.selectViewBirthdays(viewOption);
}));
When(/^User hovers mouse on history event Icon for user on upcoming birthdays tile$/, () => __awaiter(this, void 0, void 0, function* () { }));
Then(/^User expects that history notes popup box is displayed on upcoming birthdays tile$/, () => __awaiter(this, void 0, void 0, function* () { }));
