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
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
const checkContainsText_1 = require("../../../uiActions/verifyActions/checkContainsText");
const isElementPresent_1 = require("../../../uiActions/verifyActions/isElementPresent");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const selenium_webdriver_1 = require("selenium-webdriver");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class HomeDashboardPage {
    constructor() {
        this.verifyElement = (elemnt) => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(elemnt).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.verifyAddtilesCount = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield (function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.VerifyInformaion = (Tilename) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Inside information varification");
            yield checkContainsText_1.checkContainsText(this.informationicon, Tilename);
        });
        this.clickManagetiles = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.managetilesLink);
        });
        this.clickOnSaveButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.savebButton);
        });
        this.clickOnCancelButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.cancelbButton);
        });
        this.clickOnCloseIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.CloseIcon);
        });
        this.clickOnRemoveButton = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.RemoveButton);
        });
        this.clickOnContractIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.ContractIcon);
        });
        this.clickOnExpandIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.ExpandIcon);
        });
        this.clickOnRightCarrotIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.rightcarroticon);
        });
        this.clickOnLeftCarrotIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.leftcarroticon);
        });
        this.PressEscape = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(selenium_webdriver_1.Key.ESCAPE);
        });
        this.verifyAddNewTilesCount = () => __awaiter(this, void 0, void 0, function* () {
            let elem;
            if (elem.getText() > 4) {
                yield expect(yield this.verifyLink(this.rightcarroticon)).to.equal(true, this.rightcarroticon + 'Link is displayed');
                yield this.clickOnRightCarrotIcon();
                yield expect(yield this.verifyLink(this.leftcarroticon)).to.equal(true, this.leftcarroticon + 'Link is displayed');
                yield this.clickOnLeftCarrotIcon();
            }
            if (elem.getText() > 1) {
                //drag and drop operation
            }
        });
        console.log("Inside constructor");
        this.informationicon = protractor_1.element(protractor_1.by.id(''));
        this.ReportingElem = protractor_1.element(protractor_1.by.id(''));
        this.ScheduledElem = protractor_1.element(protractor_1.by.id(''));
        this.DirectoryElem = protractor_1.element(protractor_1.by.id(''));
        this.RepositoryElem = protractor_1.element(protractor_1.by.id(''));
        this.ActivereportsElem = protractor_1.element(protractor_1.by.id(''));
        this.QuickAccessElem = protractor_1.element(protractor_1.by.id(''));
        this.ResourcesElem = protractor_1.element(protractor_1.by.id(''));
        this.DepartmentStaffDirectoryElem = protractor_1.element(protractor_1.by.id(''));
        this.SendMyScansElem = protractor_1.element(protractor_1.by.id(''));
        this.UpdatesElem = protractor_1.element(protractor_1.by.id(''));
        this.DOLCornerElem = protractor_1.element(protractor_1.by.id(''));
        this.ProductMarketingElem = protractor_1.element(protractor_1.by.id(''));
        this.MarketCommentaryElem = protractor_1.element(protractor_1.by.id(''));
        this.ProductDevelopmentCenterElem = protractor_1.element(protractor_1.by.id(''));
        this.TrainingCenterElem = protractor_1.element(protractor_1.by.id(''));
        this.ComplianceElem = protractor_1.element(protractor_1.by.id(''));
        this.OperationsElem = protractor_1.element(protractor_1.by.id(''));
        this.BondsMLCDsElem = protractor_1.element(protractor_1.by.id(''));
        this.FINRARegisLicensingElem = protractor_1.element(protractor_1.by.id(''));
        this.HelpElem = protractor_1.element(protractor_1.by.id(''));
        this.ReferenceElem = protractor_1.element(protractor_1.by.id(''));
        this.ToolsElem = protractor_1.element(protractor_1.by.id(''));
        this.SendMyDocsElem = protractor_1.element(protractor_1.by.id(''));
        this.MPVAppUsageElem = protractor_1.element(protractor_1.by.id(''));
        this.AlbridgeWealthReportingElem = protractor_1.element(protractor_1.by.id(''));
        this.VASearchEngineToolElem = protractor_1.element(protractor_1.by.id(''));
        this.PershingdashboardElem = protractor_1.element(protractor_1.by.id(''));
        this.fundVISIONElem = protractor_1.element(protractor_1.by.id(''));
        this.CAMPortalElem = protractor_1.element(protractor_1.by.id(''));
        this.MuniCenterElem = protractor_1.element(protractor_1.by.id(''));
        this.AdministrationElem = protractor_1.element(protractor_1.by.id(''));
        this.ContactsElem = protractor_1.element(protractor_1.by.id(''));
        this.ActiveContactsElem = protractor_1.element(protractor_1.by.id(''));
        this.MYOWNEDElem = protractor_1.element(protractor_1.by.id(''));
        this.RECENTLYVIEWEDElem = protractor_1.element(protractor_1.by.id(''));
        this.MOSTVIEWEDElem = protractor_1.element(protractor_1.by.id(''));
        this.CreateaNewContactElem = protractor_1.element(protractor_1.by.id(''));
        this.ItemstoReviewelem = protractor_1.element(protractor_1.by.id(''));
        this.AnnouncementsEventsElem = protractor_1.element(protractor_1.by.id(''));
        this.managetilesLink = protractor_1.element(protractor_1.by.css(""));
        this.savebButton = protractor_1.element(protractor_1.by.css(""));
        this.cancelbButton = protractor_1.element(protractor_1.by.css(""));
        this.ContractIcon = protractor_1.element(protractor_1.by.css(""));
        this.ExpandIcon = protractor_1.element(protractor_1.by.css(""));
        this.CloseIcon = protractor_1.element(protractor_1.by.css(""));
        this.leftcarroticon = protractor_1.element(protractor_1.by.css(""));
        this.rightcarroticon = protractor_1.element(protractor_1.by.css(""));
        this.RemoveButton = protractor_1.element(protractor_1.by.css(""));
    }
    verifyLink(linkName) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case 'Reporting':
                    linkPresent = this.verifyElement(this.ReportingElem);
                    break;
                case 'Scheduled':
                    linkPresent = this.verifyElement(this.ScheduledElem);
                    break;
                case 'Directory':
                    linkPresent = this.verifyElement(this.DirectoryElem);
                    break;
                case 'Repository':
                    linkPresent = this.verifyElement(this.RepositoryElem);
                    break;
                case 'Active reports':
                    linkPresent = this.verifyElement(this.ActivereportsElem);
                    break;
                case 'Quick Access':
                    linkPresent = this.verifyElement(this.QuickAccessElem);
                    break;
                case 'Resources':
                    linkPresent = this.verifyElement(this.ResourcesElem);
                    break;
                case 'Department & Staff Directory':
                    linkPresent = this.verifyElement(this.DepartmentStaffDirectoryElem);
                    break;
                case 'Send My Scans':
                    linkPresent = this.verifyElement(this.SendMyScansElem);
                    break;
                case 'Updates':
                    linkPresent = this.verifyElement(this.UpdatesElem);
                    break;
                case 'DOL Corner':
                    linkPresent = this.verifyElement(this.DOLCornerElem);
                    break;
                case 'Product Marketing':
                    linkPresent = this.verifyElement(this.ProductMarketingElem);
                    break;
                case 'Market Commentary':
                    linkPresent = this.verifyElement(this.MarketCommentaryElem);
                    break;
                case 'Product Development Center':
                    linkPresent = this.verifyElement(this.ProductDevelopmentCenterElem);
                    break;
                case 'Training Center':
                    linkPresent = this.verifyElement(this.TrainingCenterElem);
                    break;
                case 'Compliance':
                    linkPresent = this.verifyElement(this.ComplianceElem);
                    break;
                case 'Operations':
                    linkPresent = this.verifyElement(this.OperationsElem);
                    break;
                case 'Bonds & MLCDs':
                    linkPresent = this.verifyElement(this.BondsMLCDsElem);
                    break;
                case 'FINRA Registration & Licensing':
                    linkPresent = this.verifyElement(this.FINRARegisLicensingElem);
                    break;
                case 'Help':
                    linkPresent = this.verifyElement(this.HelpElem);
                    break;
                case 'Reference':
                    linkPresent = this.verifyElement(this.ReferenceElem);
                    break;
                case 'Tools':
                    linkPresent = this.verifyElement(this.ToolsElem);
                    break;
                case 'SendMyDocs':
                    linkPresent = this.verifyElement(this.SendMyDocsElem);
                    break;
                case 'MPV App Usage':
                    linkPresent = this.verifyElement(this.MPVAppUsageElem);
                    break;
                case 'Albridge Wealth Reporting':
                    linkPresent = this.verifyElement(this.AlbridgeWealthReportingElem);
                    break;
                case 'VA Search Engine Tool':
                    linkPresent = this.verifyElement(this.VASearchEngineToolElem);
                    break;
                case 'Pershing dashboard':
                    linkPresent = this.verifyElement(this.PershingdashboardElem);
                    break;
                case 'fundVISION':
                    linkPresent = this.verifyElement(this.fundVISIONElem);
                    break;
                case 'CAM Portal':
                    linkPresent = this.verifyElement(this.CAMPortalElem);
                    break;
                case 'MuniCenter':
                    linkPresent = this.verifyElement(this.MuniCenterElem);
                    break;
                case 'Administration':
                    linkPresent = this.verifyElement(this.AdministrationElem);
                    break;
                case 'Contacts':
                    linkPresent = this.verifyElement(this.ContactsElem);
                    break;
                case 'Active Contacts':
                    linkPresent = this.verifyElement(this.ActiveContactsElem);
                    break;
                case 'MY OWNED':
                    linkPresent = this.verifyElement(this.MYOWNEDElem);
                    break;
                case 'RECENTLY VIEWED':
                    linkPresent = this.verifyElement(this.RECENTLYVIEWEDElem);
                    break;
                case 'MOST VIEWED':
                    linkPresent = this.verifyElement(this.MOSTVIEWEDElem);
                    break;
                case 'Create a New Contact':
                    linkPresent = this.verifyElement(this.CreateaNewContactElem);
                    break;
                case 'Items to Review':
                    linkPresent = this.verifyElement(this.ItemstoReviewelem);
                    break;
                case 'Announcements & Events':
                    linkPresent = this.verifyElement(this.AnnouncementsEventsElem);
                    break;
                case 'RightCarrot':
                    linkPresent = this.verifyElement(this.rightcarroticon);
                    break;
                case 'LeftCarrot':
                    linkPresent = this.verifyElement(this.leftcarroticon);
                    break;
                case 'Expandicon':
                    linkPresent = this.verifyElement(this.ExpandIcon);
                    break;
                case 'ContractIcon':
                    linkPresent = this.verifyElement(this.ContractIcon);
                    break;
            }
            yield linkPresent.then(function (text) { console.log(text); });
            return linkPresent;
        });
    }
}
exports.HomeDashboardPage = HomeDashboardPage;
