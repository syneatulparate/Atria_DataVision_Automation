import { browser, protractor, by, element, ExpectedConditions } from "protractor";
const { BeforeAll, Before, After, Status, defineSupportCode, setDefaultTimeout } = require("cucumber");
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue"
import { isVisible } from "../../uiActions/verifyActions/isVisible"

import { ForgotPasswordPage } from "../Pages/ForgotPasswordPage";

import { EntitlementPage } from "../Pages/EntitlementPage";
import { DashBoardPage } from "../Pages/DashBoardPage";
import { alertAccept, alertDismiss } from "../../uiActions/alertActions/alertAction";
import { LoginPage } from "../Pages/LoginPage";
import { waitForObject, staticWait } from "../../uiActions/waitActions/waitActions";
import { isElementPresent } from "../../uiActions/verifyActions/isElementPresent";
import { moveToElement } from "../../uiActions/mouseActions/moveToElement";
import { stat, statSync } from "fs";
import { error } from "util";
import { fail } from "assert";
import { Reporter } from "../../support/reporter";
import { UserSettingsPage } from "../Pages/UserSettingsPage";
import{UserSetupPage} from "../Pages/UserSetupPage";


const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let status;
let entitlementPage: EntitlementPage = new EntitlementPage();
let loginPage: LoginPage = new LoginPage();
let dasboardPage: DashBoardPage = new DashBoardPage();
let userSettings: UserSettingsPage = new UserSettingsPage();
let userSetuppage: UserSetupPage = new UserSetupPage();

Then(/^User expects that "([^"]*)?" is displayed$/, async (expectedScreen) => {
    await staticWait(3000)
    expect(await userSettings.verifyPageHeading(expectedScreen)).
        to.equal(true, 'User settings heading not displayed')
    expect(await userSetuppage.verifyHeaderElement(expectedScreen)).
        to.equal(true, 'User settings heading not displayed')
});

