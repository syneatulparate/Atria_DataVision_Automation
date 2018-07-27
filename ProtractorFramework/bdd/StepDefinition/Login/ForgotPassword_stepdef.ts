import { browser, protractor } from "protractor";
import { LoginPage } from "../../Pages/Login/LoginPage";
import { ForgotPasswordPage } from "../../Pages/Login/ForgotPasswordPage";
import { staticWait } from "../../../uiActions/waitActions/waitActions";

const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
let loginPage: LoginPage = new LoginPage();
let forgotPasswordPage: ForgotPasswordPage = new ForgotPasswordPage();
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

When(
    /^User enters "([^"]*)?" into the Username field and click on the continue button$/, async (username) => {
    
        await forgotPasswordPage.enterUserName(username);
        await forgotPasswordPage.clickOnContinue();
    });

Then(
    /^User expect that "([^"]*)?" is displayed$/, async (ErrorMsg) => {
  
        expect(await forgotPasswordPage.verifyErrorMessage(ErrorMsg)).to.equal(true, 'error message is not displayed');
    });
Then(
        /^User expect that "([^"]*)?" is present$/, async (ErrorMsg) => {
            await forgotPasswordPage.verifyErrorMessage(ErrorMsg);
        });
      //  verifylockErrorMessage
Then(
        /^User enters "([^"]*)?"$/, async (emailAddress) => {
            await forgotPasswordPage.enterInvalidEmail(emailAddress);
    });
       
Then(
    /^User expect that email field is displayed$/, async () => {
        //await forgotPasswordPage.verifyEmailField();
        await staticWait(3000)
        expect(await forgotPasswordPage.verifyEmailField()).to.equal(true, 'email file is not present');
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
            return await loginPage.logoutBtn.isDisplayed()
    .then(
        async (isDisplayed) => {
           await loginPage.clickOnLogOut()
           await staticWait(3000)
           await loginPage.verifyLoginPageTitle("Log In – dataVISION")
           await loginPage.clickOnForgotPassword()
            return true;
        },
        async (isDisplayed)=> {
           await loginPage.clickOnDataVisionLogo();  
            await staticWait(3000)
           return false;
        });   
        });   
       
});
