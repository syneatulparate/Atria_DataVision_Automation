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
const DashboardPage_1 = require("../../Pages/Dashboard/DashboardPage");
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
const moveToElement_1 = require("../../../uiActions/mouseActions/moveToElement");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const checkTitleContains_1 = require("../../../uiActions/verifyActions/checkTitleContains");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let dashboard = new DashboardPage_1.DashboardPage();
When(/^User hovers mouse on "([^"]*)?" icon and verify "([^"]*)?" panel display on screen$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(panel);
    yield expect(yield dashboard.verifyLink(panel)).to.equal(true, panel + 'Link is displayed');
}));
Then(/^User expects that "([^"]*)?" link is displayed on Reporting panel$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + 'Link is displayed');
}));
Then(/^User expects that "([^"]*)?" link is displayed on Resources panel$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + 'Link is displayed');
}));
Then(/^User expects that "([^"]*)?" link is displayed on Tools panel$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + 'Link is displayed');
}));
Then(/^User expects that "([^"]*)?" link is displayed on Contacts panel$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + 'Link is displayed');
}));
When(/^User click on "([^"]*)?" button and Verify Manage Your Dashboard Tiles page is present$/, (managetiles) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickManagetiles();
    yield checkTitleContains_1.checkTitleContains(managetiles);
    // await dashboard.verifyLink("test")
}));
Then(/^Verify Add New Tiles section count$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
When(/^User click on Cancel Button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.cancelbutton);
}));
When(/^User click on Save Button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.savebutton);
}));
When(/^User click on Close icon$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.Closeicon);
}));
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is not added to dashboard$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is added to dashboard$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is not removed from dashboard$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is removed from dashboard$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
Then(/^User can drag and drop "([^"]*)?" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
Then(/^User can drag and drop "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
When(/^User can drag and drop "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
When(/^User click on remove link of "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
When(/^User Click on contract icon$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnContractIcon();
}));
When(/^User enters escape key$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.PressEscape();
}));
When(/^User click on expand icon on a "([^"]*)?" tile$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield moveToElement_1.moveToElement(Tilename);
    yield dashboard.clickOnExpandIcon();
}));
Then(/^Verify "([^"]*)?" tile close the expanded  view and expand icon is displayed on screen$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.expandicon);
}));
Then(/^Verify "([^"]*)?" tile get expanded and contract icon is displayed on screen$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.expandicon);
}));
When(/^User click on RightCarrot icon$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.RightCarroticon);
}));
Then(/^User should displayed new tiles and leftCarrot icon displayed on screen$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.LeftCarroticon);
}));
Then(/^verify RightCarrot icon displayed on Manage Your Dashboard Tiles panel$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.RightCarroticon);
}));
Then(/^Verify Add New Tiles section count greater than 4 tiles$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
When(/^User click on Close icon and user Naviagets to Dashboard page$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
When(/^User click on Cancel Button and user Naviagets to Dashboard page$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
When(/^User click on Save Button and user Naviagets to Dashboard page$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
Then(/^USer click on ResetAll button and Verify change in Dashboard section on manage Tiles$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
When(/^User hovers mouse on "([^"]*)?" icon and verify "([^"]*)?" page display on screen$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
Then(/^User expects that Items to Review tiles is displayed on Dashboard panel$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
Then(/^User expects that Announcements & Events tiles is displayed on Dashboard panel$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
Then(/^User expects that Contacts tiles is displayed on Dashboard panel$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyLink(Tilename);
}));
Then(/^User move to "([^"]*)?" tile and	mouse hovers on information icon$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield moveToElement_1.moveToElement(Tilename);
    yield moveToElement_1.moveToElement(this.informationicon);
}));
When(/^Verify "([^"]*)?"$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.VerifyInformaion(Tilename);
}));
