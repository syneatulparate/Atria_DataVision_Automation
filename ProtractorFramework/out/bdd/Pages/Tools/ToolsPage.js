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
const protractor_1 = require("protractor");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class ToolsPage {
    constructor() {
        this.verifySendmyDoc = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyMPVAppUsage = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyAlbridgeWealthReporting = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyVASearchEngineTool = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyPershingDashboard = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyfundVISION = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyMuniCenter = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyCamPortal = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyAdministration = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyActiveBuildMyProfile = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyBlotter = () => __awaiter(this, void 0, void 0, function* () { });
        this.verifyTools = () => __awaiter(this, void 0, void 0, function* () { });
        this.toolsicon = protractor_1.element(protractor_1.by.css(" ul > li:nth-child(6) > img"));
        this.ToolsElem = protractor_1.element(protractor_1.by.xpath("//*[text()='Tools']"));
        this.SendMyDocsElem = protractor_1.element(protractor_1.by.id(""));
        this.MPVAppUsageElem = protractor_1.element(protractor_1.by.id(""));
        this.AlbridgeWealthReportingElem = protractor_1.element(protractor_1.by.id(""));
        this.VASearchEngineToolElem = protractor_1.element(protractor_1.by.id(""));
        this.PershingdashboardElem = protractor_1.element(protractor_1.by.id(""));
        this.fundVISIONElem = protractor_1.element(protractor_1.by.id(""));
        this.CAMPortalElem = protractor_1.element(protractor_1.by.id(""));
        this.MuniCenterElem = protractor_1.element(protractor_1.by.id(""));
        this.AdministrationElem = protractor_1.element(protractor_1.by.id(""));
    }
    /**
     * To click on Link
     */
    clickOnLink(linkName) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (linkName) {
                case "Tools":
                    waitActions_1.staticWait(3000);
                    clickElement_1.clickElement(this.ToolsElem);
                    break;
                case "SendMyDocs":
                    clickElement_1.clickElement(this.SendMyDocsElem);
                    break;
                case "MPV App Usage":
                    clickElement_1.clickElement(this.MPVAppUsageElem);
                    break;
                case "Albridge Wealth Reporting":
                    clickElement_1.clickElement(this.AlbridgeWealthReportingElem);
                    break;
                case "VA Search Engine Tool":
                    clickElement_1.clickElement(this.VASearchEngineToolElem);
                    break;
                case "Pershing dashboard":
                    clickElement_1.clickElement(this.PershingdashboardElem);
                    break;
                case "fundVISION":
                    clickElement_1.clickElement(this.fundVISIONElem);
                    break;
                case "CAM Portal":
                    clickElement_1.clickElement(this.CAMPortalElem);
                    break;
                case "MuniCenter":
                    clickElement_1.clickElement(this.MuniCenterElem);
                    break;
                case "Administration":
                    clickElement_1.clickElement(this.AdministrationElem);
                    break;
            }
        });
    }
}
exports.ToolsPage = ToolsPage;
