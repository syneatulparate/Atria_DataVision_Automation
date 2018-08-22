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
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const ContactsToReviewTilePage_1 = require("../../Pages/Contacts/ContactsToReviewTilePage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let contactsToReview = new ContactsToReviewTilePage_1.ContactsToReviewTilePage();
When(/^User hovers mouse on message Icon for user on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(5000);
    yield contactsToReview.moveToMessageIcon();
}));
When(/^User hovers mouse on phone Icon for user on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsToReview.moveToPhoneIcon();
}));
When(/^User hovers mouse on comments Icon for user on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsToReview.moveToCommentIcon();
}));
Then(/^User expect that primary email of the user is displayed on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    expect(yield contactsToReview.verifyPrimaryEmail()).to.equal(true, "Primary Email is not displayed");
}));
Then(/^User expect that contact number of the user is displayed on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    expect(yield contactsToReview.verifyPhoneNumber()).to.equal(true, "Phone number is not displayed");
}));
Then(/^User expect that number of "([^"]*)?" the user is displayed on contacts to review tile$/, (comments) => __awaiter(this, void 0, void 0, function* () {
    expect(yield contactsToReview.verifyPhoneNumber()).to.equal(true, "Phone number is not displayed");
}));
When(/^User clicks on the expand icon on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsToReview.clickOnExpandIconContacts();
}));
Then(/^User expect that contraction button is displayed on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsToReview.verifyContractionButton();
}));
When(/^User clicks on contraction button on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsToReview.clickOnContractIconContacts();
}));
Then(/^User expects that tile is closed and dashboard is displayed$/, () => __awaiter(this, void 0, void 0, function* () { }));
When(/^User clicks outside of tile$/, () => __awaiter(this, void 0, void 0, function* () { }));
When(/^User taps on Esc button on keyboard$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsToReview.tapEscButton();
}));
When(/^User selects My Owned on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsToReview.clickOnMyOwned();
}));
Then(/^User expect that system displays contacts for "([^"]*)?" on contacts to review tile$/, (viewCategory) => __awaiter(this, void 0, void 0, function* () {
    expect(yield contactsToReview.verifyContactNames(viewCategory)).to.equal(true, "User names not displayed");
}));
When(/^User selects All Contacts on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsToReview.clickOnAllContacts();
}));
Then(/^User expect that system displays all Public, Protected and Private contacts within the user's workgroup$/, () => __awaiter(this, void 0, void 0, function* () { }));
Then(/^User expects that Expand icon and contact directory link are displayed on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield contactsToReview.verifyExpandIconAndContactsLink()).to.equal(true, "Expand icon and go to contacts directory link is not displayed");
}));
When(/^User hovers mouse on history event Icon for user on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () { }));
Then(/^User expects that history notes popup box is displayed on contacts to review tile$/, () => __awaiter(this, void 0, void 0, function* () { }));
