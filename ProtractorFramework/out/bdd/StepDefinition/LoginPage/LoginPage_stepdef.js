"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openWebsite_1 = require("../../../uiActions/BrowserActions/openWebsite");
const checkTitleContains_1 = require("../../../uiActions/verifyActions/checkTitleContains");
const setInputField_1 = require("../../../uiActions/keyboardActions/setInputField");
const checkTitle_1 = require("../../../uiActions/verifyActions/checkTitle");
const clickElement_1 = require("../../../uiActions/mouseActions/clickElement");
const checkContainsText_1 = require("../../../uiActions/verifyActions/checkContainsText");
const isElementPresent_1 = require("../../../uiActions/verifyActions/isElementPresent");
const businessActions_1 = require("../../../uiActions/userDefined/businessActions");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
Given(/^User go to DV3 (url|site) "([^"]*)?"$/, openWebsite_1.openWebsite);
When(/^User expect that the title is "([^"]*)?"$/, checkTitle_1.checkTitle);
When(/^User (type|enter|add|set|insert|put) "([^"]*)?" to the (inputfield|textbox) "([^"]*)?"$/, setInputField_1.setInputField);
Then(/^User expect that the title contains value "([^"]*)?"$/, checkTitleContains_1.checkTitleContains);
When(/^User (click|doubleclick) on the (link|button|element) "([^"]*)?"$/, clickElement_1.clickElement);
When(/^User enter securityAnswer to the (inputfield|textbox) "([^"]*)?"$/, businessActions_1.enterSecurityAnswer);
Then(/^User expect that element "([^"]*)?" contains the text "([^"]*)?"$/, 
// checkContainsTextInElementValue
checkContainsText_1.checkContainsText);
// Then(
//     /^User expect that the the (link|button|element) "([^"]*)?" (is not|is) disabled$/,
//     isVisible
// );
Then(/^User expect that the element "([^"]*)?" (is not|is) Present$/, isElementPresent_1.isElementPresent);
