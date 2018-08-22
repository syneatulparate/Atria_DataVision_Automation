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
const ContactsTilePage_1 = require("../../Pages/Contacts/ContactsTilePage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let contactsTile = new ContactsTilePage_1.ContactsTilePage();
When(/^User hovers mouse on message Icon for "([^"]*)?" on Contacts tile$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield contactsTile.moveToMessageIcon(userName);
}));
When(/^User hovers mouse on phone Icon for "([^"]*)?" on Contacts tile$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield contactsTile.moveToPhoneIcon(userName);
}));
When(/^User hovers mouse on comments Icon for "([^"]*)?" on Contacts tile$/, (userName) => __awaiter(this, void 0, void 0, function* () {
    yield contactsTile.moveToCommentIcon(userName);
}));
Then(/^User expect that "([^"]*)?" primary email of the user is displayed on Contacts tile$/, (email) => __awaiter(this, void 0, void 0, function* () {
    expect(yield contactsTile.verifyPrimaryEmail(email)).to.equal(true, "Primary Email is not displayed");
}));
Then(/^User expect that "([^"]*)?" number of the user is displayed on Contacts tile$/, (phoneNumber) => __awaiter(this, void 0, void 0, function* () {
    expect(yield contactsTile.verifyPhoneNumber(phoneNumber)).to.equal(true, "Phone number is not displayed");
}));
Then(/^User expect that number of "([^"]*)?" the user is displayed on Contacts tile$/, (comments) => __awaiter(this, void 0, void 0, function* () {
    expect(yield contactsTile.verifyPhoneNumber(comments)).to.equal(true, "Phone number is not displayed");
}));
When(/^User selects "([^"]*)?" from the dropdown on Contacts tile$/, (viewOption) => __awaiter(this, void 0, void 0, function* () {
    yield contactsTile.selectViewCategory(viewOption);
}));
When(/^User clicks on Go to Contacts link$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsTile.clickOnGoToContact();
}));
Then(/^User expect "([^"]*)?" contact screen is displayed on Contacts tile$/, (contactScreen) => __awaiter(this, void 0, void 0, function* () { }));
When(/^User clicks on the expand icon on Contacts tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsTile.clickOnExpandIconContacts();
}));
Then(/^User expect that contraction button is displayed on Contacts tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsTile.verifyContractionButton();
}));
When(/^User clicks on contraction button on Contacts tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield contactsTile.clickOnContractIconContacts();
}));
// Then(/^User expects that tile is closed and dashboard is displayed$/, async()=>{
// })
// When(/^User clicks outside of tile$/, async () => {
// })
// When(/^User taps on Esc button on keyboard$/, async () => {
//     await contactsTile.tapEscButton()
// })
