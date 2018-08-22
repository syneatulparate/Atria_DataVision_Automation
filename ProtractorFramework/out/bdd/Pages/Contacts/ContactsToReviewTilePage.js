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
const getAttribute_1 = require("../../../uiActions/verifyActions/getAttribute");
const readJson_1 = require("../../../uiActions/userDefined/readJson");
class ContactsToReviewTilePage {
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
         * To select "Last View" or "Most Viewed" contact from the drop down list
         */
        this.selectViewCategory = (viewOption) => __awaiter(this, void 0, void 0, function* () {
            yield this.contactViewDropDown.isDisplayed().then(() => __awaiter(this, void 0, void 0, function* () {
                if (yield viewOption.toUpperCase().includes("Last Viewed".toUpperCase())) {
                    yield clickElement_1.clickElement(this.contactViewDropDown);
                    yield clickElement_1.clickElement(this.lastViewed);
                }
                else if (yield viewOption.toUpperCase().includes("Most Viewed".toUpperCase())) {
                    yield clickElement_1.clickElement(this.contactViewDropDown);
                    yield clickElement_1.clickElement(this.mostViewed);
                }
                else {
                    yield clickElement_1.clickElement(this.contactViewDropDown);
                    yield clickElement_1.clickElement(this.byInvestment);
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
            protractor_1.browser
                .actions()
                .sendKeys(ptor_1.protractor.Key.ESCAPE)
                .perform();
        });
        /**
         * To click on the go to contact link for contacts tile
         */
        this.clickOnGoToContact = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.contractIcon);
            yield clickElement_1.clickElement(this.contractIcon);
        });
        /**
         * To click on my owned button
         */
        this.clickOnMyOwned = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.myOwned);
            yield getAttribute_1.getAttribute(this.myOwned, "class").then((value) => __awaiter(this, void 0, void 0, function* () {
                if (value == "selected-button") {
                    yield console.log("All ready selected");
                }
                else {
                    yield clickElement_1.clickElement(this.myOwned);
                }
            }));
        });
        /**
         * To click on all contacts button
         */
        this.clickOnAllContacts = () => __awaiter(this, void 0, void 0, function* () {
            yield waitActions_1.waitForObject(this.allContacts);
            yield getAttribute_1.getAttribute(this.allContacts, "class").then((value) => __awaiter(this, void 0, void 0, function* () {
                if (value == "selected-button") {
                    yield console.log("All ready selected");
                }
                else {
                    yield clickElement_1.clickElement(this.myOwned);
                }
            }));
        });
        /**
         * Verify the expand icon and contact directory link
         */
        this.verifyExpandIconAndContactsLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return ((yield isElementPresent_1.isElementPresent(this.expandIcon)) &&
                (yield isElementPresent_1.isElementPresent(this.goToContactsLink).then(function (flag) {
                    return flag;
                })));
        });
        this.messageIcon = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::i[@class='tile-email-icon'][1]"));
        this.messageToolTip = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::i[@class='tile-email-icon'][1]//ancestor::span"));
        this.phoneIcon = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::i[@class='tile-phone-icon'][1]"));
        this.phoneToolTip = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::i[@class='tile-phone-icon'][1]//ancestor::span"));
        this.commentIcon = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.primaryEmail = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.phoneNumber = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.comments = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.recentContactScreen = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.mostContactScreen = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.byInvestmentScreen = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.expandIcon = protractor_1.element(protractor_1.by.css("dv-review-contact img.expand-icon"));
        this.contractIcon = protractor_1.element(protractor_1.by.css("a[routerlink='']"));
        this.goToContactsLink = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::span[text()='Go to Contacts']"));
        this.myOwned = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::button[text()='My Owned'][1]"));
        this.allContacts = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::button[text()='All Contacts'][1]"));
        this.upComingReview = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::h6[text()='Upcoming Review Date']"));
        this.contactName = protractor_1.element(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::div[@class='fl content'][1]//h4"));
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
            yield this.phoneToolTip
                .getAttribute("dv-tooltip")
                .then((contactNumber) => __awaiter(this, void 0, void 0, function* () {
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
    verifyContactNames(viewCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            let contactNameList = protractor_1.element.all(protractor_1.by.xpath("//h6[text()='Contacts to review']//following::div[@class='fl content']//h4"));
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
exports.ContactsToReviewTilePage = ContactsToReviewTilePage;
