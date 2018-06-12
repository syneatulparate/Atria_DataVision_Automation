import { browser, protractor,$ } from "protractor";
import { openWebsite } from "../../../uiActions/BrowserActions/openWebsite";

import { checkTitleContains } from "../../../uiActions/verifyActions/checkTitleContains";
import { setInputField } from "../../../uiActions/keyboardActions/setInputField";
import { checkTitle } from "../../../uiActions/verifyActions/checkTitle";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../../uiActions/verifyActions/checkContainsTextInElementValue";
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent";

import { enterSecurityAnswer } from "../../../uiActions/userDefined/businessActions";

const { Given } = require("cucumber");
const { When, Then } = require("cucumber");

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given(
    /^User go to DV3 (url|site) "([^"]*)?"$/,
    openWebsite
);

When(
    /^User expect that the title is "([^"]*)?"$/,
    checkTitle
);


When(
    /^User (type|enter|add|set|insert|put) "([^"]*)?" to the (inputfield|textbox) "([^"]*)?"$/,
    setInputField
);

Then(
    /^User expect that the title contains value "([^"]*)?"$/,
    checkTitleContains
);

When(
    /^User (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
);

When(
    /^User enter securityAnswer to the (inputfield|textbox) "([^"]*)?"$/,
    enterSecurityAnswer
);

Then(
    /^User expect that element "([^"]*)?" contains the text "([^"]*)?"$/,
    // checkContainsTextInElementValue
    checkContainsText
);
// Then(
//     /^User expect that the the (link|button|element) "([^"]*)?" (is not|is) disabled$/,
//     isVisible
// );

Then(
    /^User expect that the element "([^"]*)?" (is not|is) Present$/,
    isElementPresent
);