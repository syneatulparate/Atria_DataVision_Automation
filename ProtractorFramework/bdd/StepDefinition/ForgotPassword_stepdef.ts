import { browser, protractor } from "protractor";
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue"
import { isVisible } from "../../uiActions/verifyActions/isVisible"

import { ForgotPasswordPage } from "../Pages/ForgotPasswordPage";


const { Given } = require("cucumber");
const { When, Then } = require("cucumber");

let forgotPasswordPage: ForgotPasswordPage = new ForgotPasswordPage();
// When  User enters "<username>" into the Username field

When(
    /^User enters "([^"]*)?" into the Username field and click on the continue button$/, async (username) => {
        //console.log("Inside when clause --" + username + " ===" + password);
        await forgotPasswordPage.enterUserName(username);
        await forgotPasswordPage.clickOnContinue();
    });

Then(
    /^User expect that "([^"]*)?" is displayed$/, async (ErrorMsg) => {
        await forgotPasswordPage.verifyErrorMessage(ErrorMsg);
    });

Then(
    /^User expect that email field is displayed$/, async () => {
        await forgotPasswordPage.verifyEmailField();
    });

When(/^User set "([^"]*)?" to the answer field and "([^"]*)?" into email field and clicks on continue button$/, async (securityAnswer, emailAddress) => {
    await forgotPasswordPage.enterInvalidSecurityAnswer(securityAnswer);
    await forgotPasswordPage.enterInvalidEmail(emailAddress);
    await forgotPasswordPage.clickOnContinue();
});

Then(/^User expect that the OTP field is displayed$/, async () => {
    await forgotPasswordPage.verifyOTPField();
});

When(/^User enters "([^"]*)?" into the OTP field and clicks on continue button$/, async (OTP)=> {
    await forgotPasswordPage.enterOTP(OTP);
    await forgotPasswordPage.clickOnContinue();
  });

When(/^User enters invalid OTP "([^"]*)?" 4 times$/, async (OTP)=> {
    await forgotPasswordPage.enterMultipleInvalidOTP(OTP);
  });

  When(/^User enters a valid securityAnswer$/, async ()=> {
    await forgotPasswordPage.enterSecurityAnswer();
  });  
  
  When(/^User enters a invalid email "([^"]*)?" in email textfield and clicks on continue button$/, async (email)=> {
    await forgotPasswordPage.enterInvalidEmail(email);
    await forgotPasswordPage.clickOnContinue();
  });  

