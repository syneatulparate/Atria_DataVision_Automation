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
const moveToElement_1 = require("../../../uiActions/mouseActions/moveToElement");
const isElementPresent_1 = require("../../../uiActions/verifyActions/isElementPresent");
const ptor_1 = require("protractor/built/ptor");
class UpComingBirthdaysTilePage {
    constructor() {
        /**
         * To hover mouse on message icon
         */
        this.moveToMessageIcon = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.messageIcon);
        });
        /**
         * To hover mouse on phone icon
         */
        this.moveToPhoneIcon = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.phoneIcon);
        });
        /**
         * To hover mouse on comment icon
         */
        this.moveToCommentIcon = (userName) => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.commentIcon);
        });
        /**
        * To select "Today" or "Next Week" or "Next Two Week" birthday from the view by drop down list
        */
        this.selectViewBirthdays = (viewOption) => __awaiter(this, void 0, void 0, function* () {
            yield this.viewByDropDown.isDisplayed().then(() => __awaiter(this, void 0, void 0, function* () {
                if (yield viewOption.toUpperCase().includes(("Today").toUpperCase())) {
                    yield clickElement_1.clickElement(this.viewByDropDown);
                    yield clickElement_1.clickElement(this.today);
                }
                else if (yield viewOption.toUpperCase().includes(("Next Week").toUpperCase())) {
                    yield clickElement_1.clickElement(this.viewByDropDown);
                    yield clickElement_1.clickElement(this.nextWeek);
                }
                else {
                    yield clickElement_1.clickElement(this.viewByDropDown);
                    yield clickElement_1.clickElement(this.nextTwoWeek);
                }
            }));
        });
        /**
        * To verify "Last View" screen after clicking on go to comtacts link
        */
        this.verifyLastViewedScreen = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.recentContactScreen).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        /**
        * To verify "Most Viewed" screen after clicking on go to comtacts link
        */
        this.verifyMostViewedScreen = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.mostContactScreen).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        /**
        * To verify "Most Viewed" screen after clicking on go to comtacts link
        */
        this.verifyByInvestmentScreen = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.byInvestmentScreen).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        /**
         * To click on the expand icon for contacts tile
         */
        this.clickOnExpandIconContacts = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.expandIcon);
            yield clickElement_1.clickElement(this.expandIcon);
        });
        /**
         * To click on the expand icon for contacts tile
         */
        this.clickOnContractIconContacts = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.contractIcon);
            yield clickElement_1.clickElement(this.contractIcon);
        });
        /**
       * To verify contraction button
       */
        this.verifyContractionButton = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.contractIcon).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        /**
            * To tap on Esc button on keyboard
            */
        this.tapEscButton = () => __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ESCAPE).perform();
        });
        /**
        * To click on the go to contact link for upcoming birthdays tile
        */
        this.clickOnGoToContactDirectory = () => __awaiter(this, void 0, void 0, function* () {
        });
        /**
        * To verify view by drop down on birthdays tile
        */
        this.verifyViewByOptions = () => __awaiter(this, void 0, void 0, function* () {
        });
        this.messageIcon = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.phoneIcon = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.commentIcon = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.primaryEmail = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.phoneNumber = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.comments = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.lastViewed = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.mostViewed = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.byInvestment = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.viewByDropDown = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.recentContactScreen = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.mostContactScreen = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.byInvestmentScreen = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.expandIcon = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.contractIcon = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.goToContactsLink = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.today = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.nextWeek = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.nextTwoWeek = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
    }
    /**
     * Verify Primary email
     */
    verifyPrimaryEmail(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            let email;
            yield this.primaryEmail.getText().then((email) => __awaiter(this, void 0, void 0, function* () {
                yield console.log(email);
                if (yield email.toUpperCase().includes(userEmail.toUpperCase())) {
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
     * Verify Phone number
     */
    verifyPhoneNumber(userPhoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            let phoneNumber;
            yield this.phoneNumber.getText().then((phoneNumber) => __awaiter(this, void 0, void 0, function* () {
                yield console.log(phoneNumber);
                if (yield phoneNumber.toUpperCase().includes(userPhoneNumber.toUpperCase())) {
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
    * Verify Phone number
    */
    verifyComments(userComments) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            let comments;
            yield this.comments.getText().then((comments) => __awaiter(this, void 0, void 0, function* () {
                yield console.log(comments);
                if (yield comments.toUpperCase().includes(userComments.toUpperCase())) {
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
exports.UpComingBirthdaysTilePage = UpComingBirthdaysTilePage;
