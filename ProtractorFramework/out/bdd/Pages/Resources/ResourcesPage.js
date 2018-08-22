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
class ResourcesPage {
    constructor() {
        this.resourcesicon = protractor_1.element(protractor_1.by.css(" ul > li:nth-child(5) > img"));
        this.ResourcesElem = protractor_1.element(protractor_1.by.xpath("//*[text()='Resources']"));
        this.DepartmentStaffDirectoryElem = protractor_1.element(protractor_1.by.id(""));
        this.SendMyScansElem = protractor_1.element(protractor_1.by.id(""));
        this.UpdatesElem = protractor_1.element(protractor_1.by.id(""));
        this.DOLCornerElem = protractor_1.element(protractor_1.by.id(""));
        this.ProductMarketingElem = protractor_1.element(protractor_1.by.id(""));
        this.MarketCommentaryElem = protractor_1.element(protractor_1.by.id(""));
        this.ProductDevelopmentCenterElem = protractor_1.element(protractor_1.by.id(""));
        this.TrainingCenterElem = protractor_1.element(protractor_1.by.id(""));
        this.ComplianceElem = protractor_1.element(protractor_1.by.id(""));
        this.OperationsElem = protractor_1.element(protractor_1.by.id(""));
        this.BondsMLCDsElem = protractor_1.element(protractor_1.by.id(""));
        this.FINRARegisLicensingElem = protractor_1.element(protractor_1.by.id(""));
        this.HelpElem = protractor_1.element(protractor_1.by.id(""));
        this.ReferenceElem = protractor_1.element(protractor_1.by.id(""));
    }
    /**
     * To click on Link
     */
    clickOnLink(linkName) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (linkName) {
                case "Resources":
                    waitActions_1.staticWait(3000);
                    clickElement_1.clickElement(this.ResourcesElem);
                    break;
                case "Department & Staff Directory":
                    clickElement_1.clickElement(this.DepartmentStaffDirectoryElem);
                    break;
                case "Send My Scans":
                    clickElement_1.clickElement(this.SendMyScansElem);
                    break;
                case "Updates":
                    clickElement_1.clickElement(this.UpdatesElem);
                    break;
                case "DOL Corner":
                    clickElement_1.clickElement(this.DOLCornerElem);
                    break;
                case "Product Marketing":
                    clickElement_1.clickElement(this.ProductMarketingElem);
                    break;
                case "Market Commentary":
                    clickElement_1.clickElement(this.MarketCommentaryElem);
                    break;
                case "Product Development Center":
                    clickElement_1.clickElement(this.ProductDevelopmentCenterElem);
                    break;
                case "Training Center":
                    clickElement_1.clickElement(this.TrainingCenterElem);
                    break;
                case "Compliance":
                    clickElement_1.clickElement(this.ComplianceElem);
                    break;
                case "Operations":
                    clickElement_1.clickElement(this.OperationsElem);
                    break;
                case "Bonds & MLCDs":
                    clickElement_1.clickElement(this.BondsMLCDsElem);
                    break;
                case "FINRA Registration & Licensing":
                    clickElement_1.clickElement(this.FINRARegisLicensingElem);
                    break;
                case "Help":
                    clickElement_1.clickElement(this.HelpElem);
                    break;
                case "Reference":
                    clickElement_1.clickElement(this.ReferenceElem);
                    break;
            }
        });
    }
}
exports.ResourcesPage = ResourcesPage;
