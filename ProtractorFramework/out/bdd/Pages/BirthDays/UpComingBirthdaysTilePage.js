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
const readJson_1 = require("../../../uiActions/userDefined/readJson");
class UpComingBirthdaysTilePage {
    constructor() {
        /**
         * To hover mouse on message icon
         */
        this.moveToMessageIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.messageIcon);
        });
        /**
         * To hover mouse on phone icon
         */
        this.moveToPhoneIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.phoneIcon);
        });
        /**
         * To hover mouse on comment icon
         */
        this.moveToCommentIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield moveToElement_1.moveToElement(this.commentIcon);
        });
        /**
        * To select "Today" or "Next Week" or "Next Two Week" birthday from the view by drop down list
        */
        this.selectViewBirthdays = (viewOption) => __awaiter(this, void 0, void 0, function* () {
            yield this.dateRangeDropDown.isDisplayed().then(() => __awaiter(this, void 0, void 0, function* () {
                if (yield viewOption.toUpperCase().includes(("Today").toUpperCase())) {
                    yield clickElement_1.clickElement(this.dateRangeDropDown);
                    yield clickElement_1.clickElement(this.today);
                }
                else if (yield viewOption.toUpperCase().includes(("Next Week").toUpperCase())) {
                    yield clickElement_1.clickElement(this.dateRangeDropDown);
                    yield clickElement_1.clickElement(this.nextWeek);
                }
                else {
                    yield clickElement_1.clickElement(this.dateRangeDropDown);
                    yield clickElement_1.clickElement(this.nextTwoWeek);
                }
            }));
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
         * Click on date range drop down icon
         */
        this.clickOnDropDownIcon = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.dateRangeDropDown);
            yield clickElement_1.clickElement(this.dateRangeDropDown);
        });
        /**
         * Verify the dropdown menu option of date range
         */
        this.verifyDropDownMenu = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return (yield isElementPresent_1.isElementPresent(this.today))
                && (yield isElementPresent_1.isElementPresent(this.nextWeek))
                && (yield isElementPresent_1.isElementPresent(this.nextTwoWeek)
                    .then(function (flag) {
                    return flag;
                }));
        });
        /**
         * Verify the expand icon and contact directory link
         */
        this.verifyExpandIconAndContactsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return (yield isElementPresent_1.isElementPresent(this.expandIcon))
                && (yield isElementPresent_1.isElementPresent(this.goToContactsLink)
                    .then(function (flag) {
                    return flag;
                }));
        });
        /**
         * To click on my owned button
         */
        this.clickOnMyOwned = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.myOwned);
            yield clickElement_1.clickElement(this.myOwned);
            // await getAttribute(this.myOwned, "class").then(async (value) => {
            //     if (value == "selected-button") {
            //         await console.log("All ready selected")
            //     } else {
            //         await clickElement(this.myOwned)
            //     }
            // })
        });
        /**
         * To click on all contacts button
         */
        this.clickOnAllContacts = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.allContacts);
            yield clickElement_1.clickElement(this.allContacts);
            // await getAttribute(this.allContacts, "class").then(async (value) => {
            //     if (value == "selected-button") {
            //         await console.log("All ready selected")
            //     } else {
            //         await clickElement(this.allContacts)
            //     }
            // })
        });
        this.messageIcon = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='tile-email-icon'][1]"));
        this.messageToolTip = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='tile-email-icon'][1]//ancestor::span"));
        this.phoneIcon = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='tile-phone-icon'][1]"));
        this.phoneToolTip = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='tile-phone-icon'][1]//ancestor::span"));
        this.commentIcon = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::i[@class='comment-icon'][1]"));
        this.primaryEmail = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.phoneNumber = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.comments = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.expandIcon = protractor_1.element(protractor_1.by.css("dv-birthday img.expand-icon"));
        this.contractIcon = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.goToContactsLink = protractor_1.element(protractor_1.by.xpath("//span[text()='Go to Contact Directory']"));
        this.today = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::li[text()='Today']"));
        this.nextWeek = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::li[text()='Next Week']"));
        this.nextTwoWeek = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::li[text()='Next Two Week']"));
        this.contactName = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::div[@class='title']//h4"));
        this.temp = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::div[@class='text-left']//h6"));
        this.dateRangeDropDown = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::dv-octicon"));
        this.myOwned = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::button[text()='My Owned'][1]"));
        this.allContacts = protractor_1.element(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::button[text()='All Contacts'][1]"));
        this.testDataPath = "./userDetails.json";
    }
    /**
     * Verify Contact Name
     */
    verifyContactName(contactName) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            yield this.contactName.getText().then((contact) => __awaiter(this, void 0, void 0, function* () {
                yield console.log("contact name is :" + contact);
                if (yield contact.toLowerCase().includes(contactName.toLowerCase())) {
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
     * Verify Primary email
     */
    verifyPrimaryEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            let email;
            yield this.messageToolTip.getAttribute("dv-tooltip").then((emailID) => __awaiter(this, void 0, void 0, function* () {
                yield this.contactName.getText().then((contact) => __awaiter(this, void 0, void 0, function* () {
                    let contactEmailDetails = "$.." + contact.replace(" ", "") + ".email";
                    yield readJson_1.readJson(this.testDataPath, contactEmailDetails).then((userEmail) => __awaiter(this, void 0, void 0, function* () {
                        if (yield emailID.toLowerCase().includes(userEmail)) {
                            flag = true;
                        }
                        else {
                            flag = false;
                        }
                    }));
                }));
            }));
            return flag;
        });
    }
    /**
     * Verify Phone number
     */
    verifyPhoneNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            flag = false;
            let phoneNumber;
            yield this.phoneToolTip.getAttribute("dv-tooltip").then((contactNumber) => __awaiter(this, void 0, void 0, function* () {
                yield this.contactName.getText().then((contact) => __awaiter(this, void 0, void 0, function* () {
                    let contactPhoneDetails = "$.." + contact.replace(" ", "") + ".phone_number";
                    yield readJson_1.readJson(this.testDataPath, contactPhoneDetails).then((userPhoneNumber) => __awaiter(this, void 0, void 0, function* () {
                        if (yield contactNumber.includes(userPhoneNumber)) {
                            flag = true;
                        }
                        else {
                            flag = false;
                        }
                    }));
                }));
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
    verifyContactNames(viewCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            let contactNameList = protractor_1.element.all(protractor_1.by.xpath("//h6[text()='Upcoming Birthday']//following::div[@class='text-left']//h6"));
            yield waitActions_1.staticWait(3000);
            yield contactNameList.each((element, index) => __awaiter(this, void 0, void 0, function* () {
                yield element.getText().then((contactName) => __awaiter(this, void 0, void 0, function* () {
                    let categoryDetails = "$.." + contactName.replace(" ", "") + ".user_category";
                    yield readJson_1.readJson(this.testDataPath, categoryDetails).then((userCategory) => __awaiter(this, void 0, void 0, function* () {
                        if (yield userCategory.includes(viewCategory)) {
                            flag = true;
                        }
                        else {
                            flag = false;
                        }
                    }));
                }));
            }));
            return flag;
        });
    }
}
exports.UpComingBirthdaysTilePage = UpComingBirthdaysTilePage;
