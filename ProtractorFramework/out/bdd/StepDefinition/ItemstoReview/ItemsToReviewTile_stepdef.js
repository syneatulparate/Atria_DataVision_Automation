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
const ItemsToReviewPage_1 = require("../../Pages/ItemstoReview/ItemsToReviewPage");
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const HomeDashboardPage_1 = require("../../Pages/HomeDashboard/HomeDashboardPage");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let itemstoreview = new ItemsToReviewPage_1.ItemsToReviewPage();
let dashboard = new HomeDashboardPage_1.HomeDashboardPage();
When(/User contact has a "([^"]*)?" issue triggered$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User verify "([^"]*)?", "([^"]*)?" , "([^"]*)?" and "([^"]*)?" of triggered issue$/, (title, type, contact, uploaddate) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
When(/User click on plus icon of "([^"]*)?" issue$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User verify "([^"]*)?" comment section of "([^"]*)?" issue$/, (comment, panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to DI-11 QR page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to DI-15 QR page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to TC-11 QR page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to TW-11 QR page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
When(/User Click on outside of expanded view of tiles$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield clickElement_1.clickElement(dashboard.footerele);
}));
When(/Expanded view of items to Review tile gets close and user navigates to dashboard page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
When(/User clicks on contract button on items to Review tile$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
