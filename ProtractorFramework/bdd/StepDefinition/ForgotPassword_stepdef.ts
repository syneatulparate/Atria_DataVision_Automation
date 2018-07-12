import { browser, protractor } from "protractor";
import { clickElement } from "../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../uiActions/verifyActions/checkContainsText";
import { checkContainsTextInElementValue } from "../../uiActions/verifyActions/checkContainsTextInElementValue"
import { isVisible } from "../../uiActions/verifyActions/isVisible"
import{staticWait} from "../../uiActions/waitActions/waitActions"
import { ForgotPasswordPage } from "../Pages/ForgotPasswordPage";
import { LoginPage } from "../Pages/LoginPage";


const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
let loginPage: LoginPage = new LoginPage();
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
        /^User expect that "([^"]*)?" is present$/, async (ErrorMsg) => {
            await forgotPasswordPage.verifyErrorMessage(ErrorMsg);
        });
Then(
        /^User enters "([^"]*)?"$/, async (emailAddress) => {
            await forgotPasswordPage.enterInvalidEmail(emailAddress);
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

When(/^User enters invalid OTP "([^"]*)?" 3 times$/, async (OTP)=> {
    await forgotPasswordPage.enterMultipleInvalidOTP(OTP);
  });

  When(/^User enters a valid securityAnswer$/, async ()=> {
    await forgotPasswordPage.enterSecurityAnswer();
  });  
  
  When(/^User enters a invalid email "([^"]*)?" in email textfield and clicks on continue button$/, async (email)=> {
    await forgotPasswordPage.enterInvalidEmail(email);
    await forgotPasswordPage.clickOnContinue();
  });  

  When(/^User click on the forgot password link and navigates to Forgot password Page$/, async () => {
    
    return await loginPage.txtUsername.isDisplayed()
    .then(
        async (isDisplayed) => {
           await loginPage.clickOnForgotPassword()
           await staticWait(3000)
           await loginPage.verifyLoginPageTitle("Log In – dataVISION")
            return true;
        },
        async (isDisplayed)=> {
           await loginPage.clickOnDataVisionLogo();  
            await staticWait(3000)
           return false;
        });   
       
});
