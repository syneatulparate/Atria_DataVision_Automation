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
const HomeDashboardPage_1 = require("../../Pages/HomeDashboard/HomeDashboardPage");
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
const moveToElement_1 = require("../../../uiActions/mouseActions/moveToElement");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const protractor_1 = require("protractor");
const EscapeKeyPress_1 = require("../../../uiActions/keyboardActions/EscapeKeyPress");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let dashboard = new HomeDashboardPage_1.HomeDashboardPage();
When(/^User is on Dashboard page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink("Dashboard")).to.equal(true, "Dashboard Link is displayed");
}));
Then(/^User expects that "([^"]*)?" link is displayed on Dashboard Page$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + "Link is displayed");
}));
When(/^User hovers mouse on "([^"]*)?" icon and verify "([^"]*)?" panel display on screen$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(panel)).to.equal(true, panel + "Link is displayed");
}));
When(/^User hovers mouse on "([^"]*)?" icon and verify Resource panel display on screen$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(panel)).to.equal(true, panel + "Link is displayed");
}));
When(/^User hovers mouse on "([^"]*)?" icon and verify Reporting panel display on screen$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(panel)).to.equal(true, panel + "Link is displayed");
}));
When(/^User hovers mouse on "([^"]*)?" icon and verify Tools panel display on screen$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(panel)).to.equal(true, panel + "Link is displayed");
}));
When(/^User hovers mouse on "([^"]*)?" icon and verify Contacts panel display on screen$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(panel)).to.equal(true, panel + "Link is displayed");
}));
When(/^User hovers mouse on "([^"]*)?" icon and verify Dashboard panel display on screen$/, (panel) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(panel)).to.equal(true, panel + "Link is displayed");
}));
Then(/^User expects that "([^"]*)?" link is displayed on Reporting panel$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + "Link is displayed");
}));
Then(/^User expects that "([^"]*)?" link is displayed on Resources panel$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + "Link is displayed");
}));
Then(/^User expects that "([^"]*)?" link is displayed on Tools panel$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + "Link is displayed");
}));
Then(/^User expects that "([^"]*)?" link is displayed on Contacts panel$/, (LinkName) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink(LinkName)).to.equal(true, LinkName + "Link is displayed");
}));
When(/^User click on Add New button and Verify Manage Your Dashboard Tiles page is present$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield dashboard.clickAddnewTileLink();
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink("Manage Tiles")).to.equal(true, "Manage Tiles is displayed");
}));
When(/^User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield dashboard.clickManagetiles();
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink("Manage Tiles")).to.equal(true, "Manage Tiles Link is displayed");
}));
Then(/^Verify Add New Tiles section count$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
When(/^User click on Cancel Button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnCancelButton();
}));
When(/^User click on Save Button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnSaveButton();
}));
When(/^User click on Close icon$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnCloseIcon();
}));
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is not added to dashboard$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield dashboard.pagedown();
    yield expect(yield dashboard.verifyDashboardTiles(Tilename)).to.equal(false, Tilename + "Link is displayed");
}));
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is added to dashboard$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(5000);
    yield expect(yield dashboard.verifyDashboardTiles(Tilename)).to.equal(true, Tilename + "Link is displayed");
}));
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is not removed from dashboard$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles(Tilename)).to.equal(true, Tilename + "Link is displayed");
}));
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is removed from dashboard$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles(Tilename)).to.equal(false, Tilename + "Link is displayed");
}));
Then(/^User can drag and drop "([^"]*)?" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield dashboard.selectElement(Tilename);
}));
Then(/^User can drag and drop "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield dashboard.dashboardToAddNewTiles(Tilename);
}));
When(/^User click on remove link of "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield dashboard.Removetile(Tilename);
}));
When(/^User Click on contract icon$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnContractIcon();
}));
When(/^User enters escape key$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(protractor_1.element(protractor_1.by.xpath("/html/body/table/thead/tr[2]/td/button")));
    yield EscapeKeyPress_1.PressEscape();
}));
When(/^User click on expand icon on a "([^"]*)?" tile$/, (Tilename) => __awaiter(this, void 0, void 0, function* () {
    yield moveToElement_1.moveToElement(Tilename);
    yield dashboard.clickOnExpandIcon();
}));
Then(/^Verify "([^"]*)?" tile close the expanded  view and expand icon is displayed on screen$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.expandicon);
}));
Then(/^Verify "([^"]*)?" tile get expanded and contract icon is displayed on screen$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.expandicon);
}));
When(/^User click on RightCarrot icon$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.RightCarroticon);
}));
Then(/^User should displayed new tiles and leftCarrot icon displayed on screen$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.LeftCarroticon);
}));
Then(/^verify RightCarrot icon displayed on Manage Your Dashboard Tiles panel$/, () => __awaiter(this, void 0, void 0, function* () {
    yield clickElement_1.clickElement(this.RightCarroticon);
}));
Then(/^Verify Add New Tiles section count greater than 4 tiles$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.verifyAddtilesCount();
}));
When(/^User click on Close icon and user Naviagets to Dashboard page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnCloseIcon();
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles("CONTACTS")).to.equal(true, "CONTACTS tile is displayed");
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles("UPCOMING BIRTHDAY")).to.equal(true, "UPCOMING BIRTHDAYS tile is displayed");
}));
Then(/^User click on Cancel Button and user Naviagets to Dashboard page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnCancelButton();
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles("CONTACTS")).to.equal(true, "CONTACTS tile is displayed");
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles("UPCOMING BIRTHDAY")).to.equal(true, "UPCOMING BIRTHDAYS tile is displayed");
}));
When(/^User click on Save Button and user Naviagets to Dashboard page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnSaveButton();
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles("CONTACTS")).to.equal(true, "CONTACTS tile is displayed");
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles("UPCOMING BIRTHDAY")).to.equal(true, "UPCOMING BIRTHDAYS tile is displayed");
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles("CONTACTS TO REVIEW")).to.equal(true, "CONTACTS TO REVIEW tile is displayed");
}));
Then(/^User click on ResetAll button and Verify change in Dashboard section on manage Tiles$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.clickOnResetAllButton();
    yield waitActions_1.staticWait(3000);
}));
When(/^User hovers mouse on "([^"]*)?" icon and verify "([^"]*)?" page display on screen$/, () => __awaiter(this, void 0, void 0, function* () {
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
Then(/^User move to "([^"]*)?" tile, hovers on information icon and verify "([^"]*)?"$/, (Tilename, information) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.MovetoTileElement(Tilename, information);
    // await expect(await dashboard.verifyElement(Tilename)).to.equal(true, Tilename + 'Link is displayed')
}));
Then(/^User change "([^"]*)?" tile width and verify width of tile size "([^"]*)?" column$/, (Tilename, information) => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.ClickChangeColumnwidth(Tilename, information);
    yield dashboard.clickOnSaveButton();
    yield dashboard.VerifyChangeColumnwidth(Tilename, information);
    // await expect(
    //   await dashboard.VerifyChangeColumnwidth(Tilename, information)
    // ).to.equal(true, "passed");
    // await expect(await dashboard.VerifyChangeColumnwidth(Tilename, information)).to.equal(true, Tilename + 'Link is displayed')
}));
When(/^User verify "([^"]*)?" , "([^"]*)?" and "([^"]*)?" Dashboard page is present$/, (firstname, lastname, designation) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyDashboardTiles("profileimage")).to.equal(true, "profile image is displayed");
    yield dashboard.verifyDetails(dashboard.designationele, designation);
}));
Then(/^User verify "([^"]*)?"$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield dashboard.verifyDetails(dashboard.welcomemsg, welcomemsg);
}));
