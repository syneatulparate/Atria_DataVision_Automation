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
const ResourcesPage_1 = require("../../Pages/Resources/ResourcesPage");
const ToolsPage_1 = require("../../Pages/Tools/ToolsPage");
const HomeDashboardPage_1 = require("../../Pages/HomeDashboard/HomeDashboardPage");
const moveToElement_1 = require("../../../uiActions/mouseActions/moveToElement");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let dashboard = new HomeDashboardPage_1.HomeDashboardPage();
let resources = new ResourcesPage_1.ResourcesPage();
let tools = new ToolsPage_1.ToolsPage();
When(/^User click on "([^"]*)?" link$/, (linkname) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield resources.clickOnLink(linkname);
}));
Then(/^User navigates to Department & Staff Directory page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Updates page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to DOL Corner page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Product Marketing page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Program Development Center page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Market Commentary page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Training Center page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Compliance page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Operations page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Bonds page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to FINRA Registration & Licensing page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User navigates to Reference page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
}));
Then(/^User hovers mouse on Resource icon and verify Resource panel display on screen$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    yield moveToElement_1.moveToElement(resources.resourcesicon);
    yield waitActions_1.staticWait(3000);
    yield expect(yield dashboard.verifyLink("Resources")).to.equal(true, "Resources Link is displayed");
}));
