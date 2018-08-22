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
const ToolsPage_1 = require("../../Pages/Tools/ToolsPage");
const moveToElement_1 = require("../../../uiActions/mouseActions/moveToElement");
const HomeDashboardPage_1 = require("../../Pages/HomeDashboard/HomeDashboardPage");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let dashboard = new HomeDashboardPage_1.HomeDashboardPage();
let tools = new ToolsPage_1.ToolsPage();
When(/^User click on "([^"]*)?" link$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.clickOnLink(welcomemsg);
}));
Then(/^User navigates to SendMyDocs page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifySendmyDoc();
}));
Then(/^User navigates to MPV App Usage page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyMPVAppUsage();
}));
Then(/^User navigates to Albridge Wealth Reporting page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyAlbridgeWealthReporting();
}));
Then(/^User navigates to VA Search Engine Tool page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyVASearchEngineTool();
}));
Then(/^User navigates to Pershing Dashboard page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyPershingDashboard();
}));
Then(/^User navigates to fundVISION page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyfundVISION();
}));
Then(/^User navigates to MuniCenter page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyMuniCenter();
}));
Then(/^User navigates to Cam Portal page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyCamPortal();
}));
Then(/^User navigates to Administration page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyAdministration();
}));
Then(/^User navigates to Active BuildMyProfile™ Forms page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyActiveBuildMyProfile();
}));
Then(/^User navigates to Blotter page$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield tools.verifyBlotter();
}));
Then(/^User hovers mouse on Tools icon and verify Tools panel display on screen$/, (welcomemsg) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield moveToElement_1.moveToElement(tools.toolsicon);
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink("Tools")).to.equal(true, "Resources Link is displayed");
}));
