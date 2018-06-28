import { browser, protractor } from "protractor";
import { openWebsite } from "../../uiActions/BrowserActions/openWebsite";

import { checkTitleContains } from "../../uiActions/verifyActions/checkTitleContains";
import { isElementPresent } from "../../uiActions/verifyActions/isElementPresent";
import { checkTitle } from "../../uiActions/verifyActions/checkTitle";
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue";

//import { selectAuthMethodFromDropDown } from "../../uiActions/userDefined/businessActions";
import { LoginPage } from "../Pages/LoginPage";
import { waitForObject } from "../../uiActions/waitActions/waitActions";


const { Given } = require("cucumber");
const { When, Then } = require("cucumber");


let loginPage: LoginPage = new LoginPage();


Given(
    /^User is on Login page$/,
    openWebsite
);

When(
    /^User enters valid "([^"]*)?" and "([^"]*)?" and click login button$/, async (username, password) => {
        //console.log("Inside when clause --" + username + " ===" + password);
        await loginPage.loginToApplication(username, password);
    });

//---------------------------------------------------------------Hardik
When(/^User click on the forgot password link and verifies the title "([^"]*)?" is displayed$/, async (headerMessage) => {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.clickOnForgotPassword();
    await loginPage.verifyLoginPageTitle(headerMessage);
});

Then(/^User expects that title contains the text "([^"]*)?"$/, async (headerMessage) => {
    await waitForObject(loginPage.logoutBtn);
    await loginPage.verifyLoginPageTitle(headerMessage);
});

When(/^User enter securityAnswer to the securityAnswer input field$/, async () => {
    console.log("inside security when method");
    await loginPage.enterSecurityAnswer();
});

Then(/^User logout from the account$/, async () => {
        await loginPage.clickOnLogOut();
    });
//---------------------------------------------------------------Hardik


When(/^User click on the logout button and verifies the title "([^"]*)?" is Present$/, async (headerMessage) => {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.clickOnLogOut();
    await loginPage.verifyLoginPageTitle(headerMessage);
});

Then(/^User expect that element contains the text "([^"]*)?"$/, async (headerMessage) => {

    await loginPage.verifyText(headerMessage);
});
When(/^User enter securityAnswer to the securityAnswer input field and click on Loginandrememberme button$/, async () => {
    await loginPage.enterSecurityAnswer();
    await waitForObject(loginPage.btnLoginRem)
    await loginPage.clickOnLoginRem();
});

Then(/^User expects that title  contains the text "([^"]*)?"$/, async (headerMessage) => {
    await waitForObject(loginPage.logoutBtn);
    await loginPage.verifyPageTitle(headerMessage);
});

When(/^User enters invalid Otp "([^"]*)?" 4 times$/, async (OTP) => {
    await loginPage.enterMultipleInvalidOTP(OTP);
});

Then(/^User expect that the OTP field is Present$/, async () => {
    await loginPage.verifyOTPField();
});
When(/^User enters invalid Ans "([^"]*)?" 4 times$/, async (ANS) => {
    await loginPage.enterMultipleInvalidAns(ANS);
});
Then(/^User expect that the SecAns field is displayed$/, async () => {
    await loginPage.verifySecAnsField();
});

When(/^User enter invalid otp "([^"]*)?" and click on Login button$/, async (ANS) => {
    await loginPage.enterInvalidOTP(ANS);
});
When(/^User enter invalid ans "([^"]*)?" and click on Login button$/, async (ANS) => {
    await loginPage.enterInvalidANS(ANS);
});

