import { browser, protractor } from "protractor";
import { openWebsite } from "../../uiActions/BrowserActions/openWebsite";

import { checkTitleContains } from "../../uiActions/verifyActions/checkTitleContains";
import { isElementPresent } from "../../uiActions/verifyActions/isElementPresent";
import { checkTitle } from "../../uiActions/verifyActions/checkTitle";
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue";

import { DashBoardPage } from "../Pages/DashBoardPage";
import { LoginPage } from "../Pages/LoginPage";
import { staticWait } from "../../uiActions/waitActions/waitActions";
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let dasboardPage: DashBoardPage = new DashBoardPage();
let loginPage: LoginPage = new LoginPage();
When(
    /^User navigates to Roles and Permissions page$/, async () => {
        await dasboardPage.VerifyRolesAndPermission();
    });

Then(
    /^User expects that Admin link is displyed on dashboard$/, async () => {
       
        await staticWait(3000);
        expect(await dasboardPage.verifyAdminLink())
            .to.equal(true, "Admin link is displayed")
            await loginPage.clickOnLogOut();
    });

Then(
    /^User expects that Admin link is not displyed$/, async () => {
        await staticWait(3000);
        expect(await dasboardPage.verifyAdminLink())
            .to.equal(false, "Admin link is not displayed")
            await loginPage.clickOnLogOut();
    });    