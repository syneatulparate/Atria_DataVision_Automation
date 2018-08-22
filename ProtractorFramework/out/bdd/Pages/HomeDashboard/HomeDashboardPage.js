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
const moveToElement_1 = require("../../../uiActions/mouseActions/moveToElement");
const dragElement_1 = require("../../../uiActions/mouseActions/dragElement");
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
            return yield function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            };
        });
        /**
         * To click on Information Icon
         */
        this.VerifyInformaion = (Tilename) => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Inside information varification");
            yield checkContainsText_1.checkContainsText(this.informationicon, Tilename);
        });
        /**
         * To click on Manage Tiles Link
         */
        this.clickManagetiles = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.managetilesLink);
        });
        /**
         * To click on Addnew Tiles Link
         */
        this.clickAddnewTileLink = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.addnew);
        });
        /**
         * To click on Save Button
         */
        this.clickOnSaveButton = () => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.savebButton);
            yield clickElement_1.clickElement(this.savebButton);
        });
        /**
         * To click on ResetAll Button
         */
        this.clickOnResetAllButton = () => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.resetallbtn);
            yield clickElement_1.clickElement(this.resetallbtn);
        });
        /**
         * To click on Cancel Button
         */
        this.clickOnCancelButton = () => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.cancelbButton);
            yield clickElement_1.clickElement(this.cancelbButton);
        });
        /**
         * To click on Close Icon
         */
        this.clickOnCloseIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.CloseIcon);
            yield clickElement_1.clickElement(this.CloseIcon);
        });
        /**
         * To click on Contract Icon
         */
        this.clickOnContractIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.ContractIcon);
        });
        /**
         * To click on expand Icon
         */
        this.clickOnExpandIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.ExpandIcon);
        });
        /**
         * To click on right carrot Icon
         */
        this.clickOnRightCarrotIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.rightcarroticon);
        });
        /**
         * To click on Left carrot Icon
         */
        this.clickOnLeftCarrotIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield clickElement_1.clickElement(this.leftcarroticon);
        });
        this.verifyAddNewTilesCount = () => __awaiter(this, void 0, void 0, function* () {
            let elem = protractor_1.element(protractor_1.by.xpath("//div[@id='allowableTilesContainer']//tbody//td[@class='ng-star-inserted']"));
            yield elem.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                if (yield text.includes("4")) {
                    yield expect(yield this.verifyLink(this.rightcarroticon)).to.equal(true, this.rightcarroticon + "Link is displayed");
                    yield this.clickOnRightCarrotIcon();
                    yield expect(yield this.verifyLink(this.leftcarroticon)).to.equal(true, this.leftcarroticon + "Link is displayed");
                    yield this.clickOnLeftCarrotIcon();
                }
                else if (yield text.includes("1")) {
                }
                else {
                }
            }));
        });
        /**
         * Select element and perform drag and drop operation
         */
        this.selectElement = (linkName) => __awaiter(this, void 0, void 0, function* () {
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case "UPCOMING BIRTHDAYS":
                    this.source = protractor_1.element(protractor_1.by.css("#upcomingBirthdays"));
                    yield moveToElement_1.moveToElement(this.source);
                    yield dragElement_1.dragAndDropElement(this.source, this.destination);
                    break;
                case "CONTACTS":
                    this.source = protractor_1.element(protractor_1.by.css("#contacts"));
                    yield dragElement_1.dragAndDropElement(this.source, this.destination);
                    break;
                case "CONTACTS TO REVIEW":
                    this.source = protractor_1.element(protractor_1.by.css("#contactsToReview"));
                    yield dragElement_1.dragAndDropElement(this.source, this.destination);
                    break;
            }
        });
        this.dashboardToAddNewTiles = (linkName) => __awaiter(this, void 0, void 0, function* () {
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case "UPCOMING BIRTHDAYS":
                    this.source = protractor_1.element(protractor_1.by.css("#upcomingBirthdays"));
                    yield moveToElement_1.moveToElement(this.source);
                    this.destination = protractor_1.element(protractor_1.by.css("div.allowableContainer td.noshadow"));
                    yield dragElement_1.dragAndDropElement(this.source, this.destination);
                    break;
                case "CONTACTS":
                    this.source = protractor_1.element(protractor_1.by.css("#contacts"));
                    this.destination = protractor_1.element(protractor_1.by.css("div.allowableContainer td.noshadow"));
                    yield dragElement_1.dragAndDropElement(this.source, this.destination);
                    break;
                case "CONTACTS TO REVIEW":
                    this.source = protractor_1.element(protractor_1.by.css("#contactsToReview"));
                    this.destination = protractor_1.element(protractor_1.by.css("div.allowableContainer td.noshadow"));
                    yield dragElement_1.dragAndDropElement(this.source, this.destination);
                    break;
            }
        });
        this.Removetile = (linkName) => __awaiter(this, void 0, void 0, function* () {
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case "UPCOMING BIRTHDAYS":
                    this.RemoveButton = protractor_1.element(protractor_1.by.css("#upcomingBirthdays div#crossDiv"));
                    yield clickElement_1.clickElement(this.RemoveButton);
                    break;
                case "CONTACTS":
                    this.RemoveButton = protractor_1.element(protractor_1.by.css("#contacts div#crossDiv"));
                    yield clickElement_1.clickElement(this.RemoveButton);
                    break;
                case "CONTACTS TO REVIEW":
                    this.RemoveButton = protractor_1.element(protractor_1.by.css("#contactsToReview  div#crossDiv"));
                    yield clickElement_1.clickElement(this.RemoveButton);
                    break;
            }
        });
        this.MovetoTileElement = (linkName, information) => __awaiter(this, void 0, void 0, function* () {
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case "UPCOMING BIRTHDAYS":
                    this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='upcomingBirthdays']//img//ancestor::i"));
                    yield moveToElement_1.moveToElement(this.informationicon);
                    yield waitActions_1.staticWait(3000);
                    yield this.verifyInformation(this.informationicon, information);
                    break;
                case "CONTACTS":
                    this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='contacts']//img//ancestor::i"));
                    yield moveToElement_1.moveToElement(this.informationicon);
                    yield waitActions_1.staticWait(3000);
                    yield this.verifyInformation(this.informationicon, information);
                    break;
                case "CONTACTS TO REVIEW":
                    this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='contactsToReview']//img//ancestor::i"));
                    yield moveToElement_1.moveToElement(this.informationicon);
                    yield waitActions_1.staticWait(3000);
                    yield this.verifyInformation(this.informationicon, information);
                    break;
            }
        });
        this.pagedown = () => __awaiter(this, void 0, void 0, function* () {
            yield this.footerele.getLocation().then(function () {
                return protractor_1.browser.executeScript("window.scrollBy(0,500)");
            });
        });
        /**
         * To verify change in tile width on dashboard
         */
        this.VerifyChangeColumnwidth = (linkName, Columnwidth) => __awaiter(this, void 0, void 0, function* () {
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case "Items to Review ":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-review-items"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-review-items"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-review-items"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "Announcements & Events":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-annoucement"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-annoucement"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-annoucement"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "Updates":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-updates"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-updates"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-updates"));
                        yield waitActions_1.staticWait(3000);
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "CONTACTS TO REVIEW":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-review-contact"));
                        yield waitActions_1.staticWait(3000);
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-review-contact"));
                        yield waitActions_1.staticWait(3000);
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-review-contact"));
                        yield waitActions_1.staticWait(3000);
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "CONTACTS":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-contacts"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-contacts"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-contacts"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "UPCOMING BIRTHDAYS":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-birthday"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-birthday"));
                        yield waitActions_1.staticWait(3000);
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-birthday"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "Contacts by Investment":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-investmant-contact"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-investmant-contact"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-investmant-contact"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "Reporting":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-report"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-report"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "GDC Totals":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-gdc-total"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
                case "Monthly GDC Details":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//dv-montholy-gdc-detail"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield waitActions_1.staticWait(3000);
                        yield expect(yield this.verifyTileWidth(this.informationicon, Columnwidth)).to.equal(true, "Tile size is " + Columnwidth);
                        break;
                    }
            }
        });
        /**
         * To change change the tile width
         */
        this.ClickChangeColumnwidth = (linkName, Columnwidth) => __awaiter(this, void 0, void 0, function* () {
            waitActions_1.staticWait(2000);
            switch (linkName) {
                case "Items to Review ":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='itemsToReview']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='itemsToReview']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                    else {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='itemsToReview']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                case "Announcements & Events":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='Announcements']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='Announcements']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                    else {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='Announcements']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                case "Updates":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='updates']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='updates']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                    else {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='updates']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                case "CONTACTS TO REVIEW":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='contactsToReview']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='contactsToReview']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                    else {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='contactsToReview']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                case "CONTACTS":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='contacts']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='contacts']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                    else {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='contacts']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                case "UPCOMING BIRTHDAYS":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='upcomingBirthdays']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='upcomingBirthdays']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                    else {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='upcomingBirthdays']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                case "Contacts by Investment":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='contactByInvestment']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='contactsbyInvestment']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                    else {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='contactsbyInvestment']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                case "Reporting":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='reporting']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                    else if (Columnwidth === "2") {
                        this.tilewidthele = protractor_1.element(protractor_1.by.xpath("//div[@id='reporting']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.tilewidthele);
                        yield clickElement_1.clickElement(this.tilewidthele);
                        break;
                    }
                case "GDC Totals":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='gdcTotals']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
                case "Monthly GDC Details":
                    if (Columnwidth === "1") {
                        this.informationicon = protractor_1.element(protractor_1.by.xpath("//div[@id='monthlyGdcDetails']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"));
                        yield moveToElement_1.moveToElement(this.informationicon);
                        yield clickElement_1.clickElement(this.informationicon);
                        break;
                    }
            }
        });
        this.footerele = protractor_1.element(protractor_1.by.css("dv-layout-footer"));
        this.logoicon = protractor_1.element(protractor_1.by.css("img.masthead-logo"));
        this.resourcesicon = protractor_1.element(protractor_1.by.css(" ul > li:nth-child(2) > img"));
        this.contacticon = protractor_1.element(protractor_1.by.css(" ul > li:nth-child(3) > img"));
        this.reporticon = protractor_1.element(protractor_1.by.css(" ul > li:nth-child(4) > img"));
        this.toolsicon = protractor_1.element(protractor_1.by.css(" ul > li:nth-child(6) > img"));
        this.dashboardicon = protractor_1.element(protractor_1.by.css(" ul > li:nth-child(1) > img"));
        this.informationicon = protractor_1.element(protractor_1.by.css(".tooltip"));
        this.ReportingElem = protractor_1.element(protractor_1.by.xpath("//*[text()='Reports']"));
        this.ScheduledElem = protractor_1.element(protractor_1.by.id(""));
        this.DirectoryElem = protractor_1.element(protractor_1.by.id(""));
        this.RepositoryElem = protractor_1.element(protractor_1.by.id(""));
        this.ActivereportsElem = protractor_1.element(protractor_1.by.id(""));
        this.QuickAccessElem = protractor_1.element(protractor_1.by.id(""));
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
        this.ContactsElem = protractor_1.element(protractor_1.by.xpath("//*[text()='Contacts']"));
        this.ActiveContactsElem = protractor_1.element(protractor_1.by.id(""));
        this.MYOWNEDElem = protractor_1.element(protractor_1.by.id(""));
        this.RECENTLYVIEWEDElem = protractor_1.element(protractor_1.by.id(""));
        this.MOSTVIEWEDElem = protractor_1.element(protractor_1.by.id(""));
        this.CreateaNewContactElem = protractor_1.element(protractor_1.by.id(""));
        this.ItemstoReviewelem = protractor_1.element(protractor_1.by.id(""));
        this.AnnouncementsEventsElem = protractor_1.element(protractor_1.by.id(""));
        this.managetilesLink = protractor_1.element(protractor_1.by.css("div.fr.managetiles a h6"));
        this.savebButton = protractor_1.element(protractor_1.by.css("div.divCenter > button:nth-child(3)"));
        this.cancelbButton = protractor_1.element(protractor_1.by.css("button.btn.btn-secondary"));
        this.ContractIcon = protractor_1.element(protractor_1.by.css(""));
        this.ExpandIcon = protractor_1.element(protractor_1.by.css(""));
        this.CloseIcon = protractor_1.element(protractor_1.by.css("div.tilemagmnt-title span a.hyper-link"));
        this.leftcarroticon = protractor_1.element(protractor_1.by.css(""));
        this.rightcarroticon = protractor_1.element(protractor_1.by.css(""));
        this.logoutlink = protractor_1.element(protractor_1.by.xpath("//strong[text()='Logout']"));
        this.addnew = protractor_1.element(protractor_1.by.css("div.flexcol-4.tiles.ng-star-inserted a"));
        this.resetallbtn = protractor_1.element(protractor_1.by.css("a.resetbtn"));
        this.getelement = protractor_1.element(protractor_1.by.xpath("//*[text()='MANAGE YOUR DASHBOARD TILES']"));
        this.destination = protractor_1.element(protractor_1.by.css("#configureTile_4"));
        this.contactstile = protractor_1.element(protractor_1.by.xpath("//*[text()='CONTACTS']"));
        this.upcomingbdaytile = protractor_1.element(protractor_1.by.xpath("//*[text()='UPCOMING BIRTHDAY']"));
        this.contacttoreviewtile = protractor_1.element(protractor_1.by.xpath("//*[text()='CONTACTS TO REVIEW']"));
        this.designationele = protractor_1.element(protractor_1.by.css("div.header-profile-summary h6"));
        this.nameEle = protractor_1.element(protractor_1.by.css("div.header-profile-summary h5"));
        this.profileimage = protractor_1.element(protractor_1.by.css("div.header-profileimg img"));
        this.welcomemsg = protractor_1.element(protractor_1.by.css("div.fl.maintitle h1"));
    }
    /**
     *
     * @param linkName
     * To verify link
     */
    verifyLink(linkName) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case "Reporting":
                    moveToElement_1.moveToElement(this.reporticon);
                    waitActions_1.staticWait(3000);
                    linkPresent = this.verifyElement(this.ReportingElem);
                    break;
                case "Scheduled":
                    linkPresent = this.verifyElement(this.ScheduledElem);
                    break;
                case "Directory":
                    linkPresent = this.verifyElement(this.DirectoryElem);
                    break;
                case "Repository":
                    linkPresent = this.verifyElement(this.RepositoryElem);
                    break;
                case "Active reports":
                    linkPresent = this.verifyElement(this.ActivereportsElem);
                    break;
                case "Quick Access":
                    linkPresent = this.verifyElement(this.QuickAccessElem);
                    break;
                case "Resources":
                    moveToElement_1.moveToElement(this.resourcesicon);
                    waitActions_1.staticWait(3000);
                    linkPresent = this.verifyElement(this.ResourcesElem);
                    break;
                case "Department & Staff Directory":
                    linkPresent = this.verifyElement(this.DepartmentStaffDirectoryElem);
                    break;
                case "Send My Scans":
                    linkPresent = this.verifyElement(this.SendMyScansElem);
                    break;
                case "Updates":
                    linkPresent = this.verifyElement(this.UpdatesElem);
                    break;
                case "DOL Corner":
                    linkPresent = this.verifyElement(this.DOLCornerElem);
                    break;
                case "Product Marketing":
                    linkPresent = this.verifyElement(this.ProductMarketingElem);
                    break;
                case "Market Commentary":
                    linkPresent = this.verifyElement(this.MarketCommentaryElem);
                    break;
                case "Product Development Center":
                    linkPresent = this.verifyElement(this.ProductDevelopmentCenterElem);
                    break;
                case "Training Center":
                    linkPresent = this.verifyElement(this.TrainingCenterElem);
                    break;
                case "Compliance":
                    linkPresent = this.verifyElement(this.ComplianceElem);
                    break;
                case "Operations":
                    linkPresent = this.verifyElement(this.OperationsElem);
                    break;
                case "Bonds & MLCDs":
                    linkPresent = this.verifyElement(this.BondsMLCDsElem);
                    break;
                case "FINRA Registration & Licensing":
                    linkPresent = this.verifyElement(this.FINRARegisLicensingElem);
                    break;
                case "Help":
                    linkPresent = this.verifyElement(this.HelpElem);
                    break;
                case "Reference":
                    linkPresent = this.verifyElement(this.ReferenceElem);
                    break;
                case "Tools":
                    moveToElement_1.moveToElement(this.toolsicon);
                    waitActions_1.staticWait(3000);
                    linkPresent = this.verifyElement(this.ToolsElem);
                    break;
                case "SendMyDocs":
                    linkPresent = this.verifyElement(this.SendMyDocsElem);
                    break;
                case "MPV App Usage":
                    linkPresent = this.verifyElement(this.MPVAppUsageElem);
                    break;
                case "Albridge Wealth Reporting":
                    linkPresent = this.verifyElement(this.AlbridgeWealthReportingElem);
                    break;
                case "VA Search Engine Tool":
                    linkPresent = this.verifyElement(this.VASearchEngineToolElem);
                    break;
                case "Pershing dashboard":
                    linkPresent = this.verifyElement(this.PershingdashboardElem);
                    break;
                case "fundVISION":
                    linkPresent = this.verifyElement(this.fundVISIONElem);
                    break;
                case "CAM Portal":
                    linkPresent = this.verifyElement(this.CAMPortalElem);
                    break;
                case "MuniCenter":
                    linkPresent = this.verifyElement(this.MuniCenterElem);
                    break;
                case "Administration":
                    linkPresent = this.verifyElement(this.AdministrationElem);
                    break;
                case "Contacts":
                    moveToElement_1.moveToElement(this.contacticon);
                    clickElement_1.clickElement(this.contacticon);
                    waitActions_1.staticWait(3000);
                    linkPresent = this.verifyElement(this.ContactsElem);
                    break;
                case "Active Contacts":
                    linkPresent = this.verifyElement(this.ActiveContactsElem);
                    break;
                case "MY OWNED":
                    linkPresent = this.verifyElement(this.MYOWNEDElem);
                    break;
                case "RECENTLY VIEWED":
                    linkPresent = this.verifyElement(this.RECENTLYVIEWEDElem);
                    break;
                case "MOST VIEWED":
                    linkPresent = this.verifyElement(this.MOSTVIEWEDElem);
                    break;
                case "Create a New Contact":
                    linkPresent = this.verifyElement(this.CreateaNewContactElem);
                    break;
                case "Items to Review":
                    linkPresent = this.verifyElement(this.ItemstoReviewelem);
                    break;
                case "Announcements & Events":
                    linkPresent = this.verifyElement(this.AnnouncementsEventsElem);
                    break;
                case "RightCarrot":
                    linkPresent = this.verifyElement(this.rightcarroticon);
                    break;
                case "LeftCarrot":
                    linkPresent = this.verifyElement(this.leftcarroticon);
                    break;
                case "Expandicon":
                    linkPresent = this.verifyElement(this.ExpandIcon);
                    break;
                case "ContractIcon":
                    linkPresent = this.verifyElement(this.ContractIcon);
                    break;
                case "Manage Tiles":
                    linkPresent = this.verifyElement(this.getelement);
                    break;
            }
            yield linkPresent.then(function (text) {
                console.log(text);
            });
            return linkPresent;
        });
    }
    verifyDashboardTiles(linkName) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkPresent;
            waitActions_1.staticWait(5000);
            switch (linkName) {
                case "Reporting":
                    linkPresent = this.verifyElement(this.ReportingElem);
                    break;
                case "CONTACTS":
                    linkPresent = this.verifyElement(this.contactstile);
                    break;
                case "Tools":
                    linkPresent = this.verifyElement(this.ToolsElem);
                    break;
                case "UPCOMING BIRTHDAY":
                    linkPresent = this.verifyElement(this.upcomingbdaytile);
                    break;
                case "CONTACTS TO REVIEW":
                    linkPresent = this.verifyElement(this.contacttoreviewtile);
                    break;
                case "profileimage":
                    linkPresent = this.verifyElement(this.profileimage);
                    break;
            }
            yield linkPresent.then(function (text) {
                console.log(text);
            });
            return linkPresent;
        });
    }
    /**
     * Verify Information
     */
    verifyInformation(tileelement, information) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield tileelement.getText().then((informations) => __awaiter(this, void 0, void 0, function* () {
                if (yield informations.toUpperCase().includes(information.toUpperCase())) {
                    flag = true;
                }
                else {
                    flag = false;
                }
            }));
            return flag;
        });
    }
    /**
     * Verify Details
     */
    verifyDetails(informationicon, detailinfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield informationicon.getText().then((informations) => __awaiter(this, void 0, void 0, function* () {
                if (yield informations.toUpperCase().includes(detailinfo.toUpperCase())) {
                    flag = true;
                }
                else {
                    flag = false;
                }
            }));
            return flag;
        });
    }
    verifyTileWidth(informationicon, TileWidth) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield informationicon
                .getAttribute("ng-reflect-column-size")
                .then((informations) => __awaiter(this, void 0, void 0, function* () {
                yield console.log(informations);
                if (yield informations.toUpperCase().includes(TileWidth.toUpperCase())) {
                    flag = true;
                }
                else {
                    flag = false;
                }
            }));
            return flag;
        });
    }
}
exports.HomeDashboardPage = HomeDashboardPage;
