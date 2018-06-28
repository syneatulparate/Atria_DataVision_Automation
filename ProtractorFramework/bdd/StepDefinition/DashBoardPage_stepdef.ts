import { browser, protractor } from "protractor";
import { openWebsite } from "../../uiActions/BrowserActions/openWebsite";

import { checkTitleContains } from "../../uiActions/verifyActions/checkTitleContains";
import { isElementPresent } from "../../uiActions/verifyActions/isElementPresent";
import { checkTitle } from "../../uiActions/verifyActions/checkTitle";
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue";

import { DashBoardPage } from "../Pages/DashBoardPage";
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let dasboardPage: DashBoardPage = new DashBoardPage();

When(
    /^User navigates to Roles and Permissions page$/, async () => {
        await dasboardPage.VerifyRolesAndPermission();
    });

Then(
    /^User expects that Admin link is displyed on dashboard$/, async () => {
        expect(await dasboardPage.verifyAdminLink())
            .to.equal(true, "Admin link is displayed")
    });

Then(
    /^User expects that Admin link is not displyed$/, async () => {
        expect(await dasboardPage.verifyAdminLink())
            .to.equal(false, "Admin link is not displayed")
    });    