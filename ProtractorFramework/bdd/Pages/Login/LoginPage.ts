import { element, by, ElementFinder, $, browser } from "protractor";
import { enterText } from "../../../uiActions/keyboardActions/setInputField";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import {checkTitle} from "../../../uiActions/verifyActions/checkTitle"
import { securityQuestions } from "../../../testData/securityQuestions";
import { clearInputField } from "../../../uiActions/keyboardActions/clearInputField";

import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText";
import { isVisible } from "../../../uiActions/verifyActions/isVisible";
import { checkTitleContains } from "../../../uiActions/verifyActions/checkTitleContains";
import{isElementPresent} from "../../../uiActions/verifyActions/isElementPresent";
import { staticWait, waitForObject } from "../../../uiActions/waitActions/waitActions";


export class LoginPage{
    /**
     * Objects from Login Page
     */
    public txtUsername : ElementFinder;
    public txtPassword : ElementFinder;
    public btnLogin : ElementFinder;
    public  btnLoginRem:ElementFinder;
    public lnkForgotPassword : ElementFinder;
    public logoutBtn : ElementFinder;
    public continueButton : ElementFinder;
    /**
     * Objects from Verify Identity page
     */
    public securityQuestion : ElementFinder;
    public txtSecurityAnswer : ElementFinder;
    public txtOTP : ElementFinder;
   
    public headerMsg:ElementFinder;
    public txtEmail:ElementFinder;
    public errMsg:ElementFinder;
    public dataVisionLogo:ElementFinder;

    constructor(){
        console.log("Inside constructor")
        this.txtUsername = element(by.id('username'));
        this.txtPassword = element(by.id('password'));
        this.dataVisionLogo= element(by.css("img.submasthead-dvlogo"));
        this.btnLogin = element(by.xpath("//button[contains(text(),'Log In')]"));
        this.btnLoginRem = element(by.xpath("//button[@type='button']"));
        this.lnkForgotPassword = element(by.linkText("Forgot Password?"))
        this.continueButton = element(by.css(".btn[type='submit']"));
        this.securityQuestion = element(by.css("label[for='security-answer']"));
        this.txtSecurityAnswer = element(by.css("#security-answer"));
        this.logoutBtn = element(by.css("a[ng-reflect-router-link='/logout']"));
        this.headerMsg = element(by.css("div.ng-star-inserted:nth-child(1) > h1:nth-child(1)"));
        this.txtOTP = element(by.xpath("//input[@id='code'] | //input[@id='otp-code']"));
        this.txtEmail= element(by.css("input#security-email"));
        this.errMsg = element(by.xpath("//div[@class='toast-message']"));
        this.errMsg=element(by.xpath("//dt")).element(by.xpath("//a[@routerlink='users']"));
        
    }

    enterUserName = async (UsernameVal) => {
        await console.log("Inside enter username");
        await enterText(this.txtUsername,UsernameVal);
    }

    enterPassword = async (PasswordVal) => {
        await console.log("Inside enter password");
        await enterText(this.txtPassword,PasswordVal);
    
    }

    clickOnLogin = async () => {
        await console.log("Click on login");
        await waitForObject(this.btnLogin);
        await clickElement(this.btnLogin);
    }
    clickOnLoginRem = async () => {
        await console.log("Click on loginRem");
        await waitForObject(this.btnLoginRem)
        await clickElement(this.btnLoginRem);
        await staticWait(5000)
    }

    clickOnForgotPassword = async () => {
        await console.log("Click on forgot password link");
        await clickElement(this.lnkForgotPassword);        
    }

    verifyLoginPageTitle = async(headerMessage) =>{
        await console.log("inside verify login page title " + headerMessage);
        await checkTitle(headerMessage)
        await staticWait(2000)
    }

    verifyPageTitle = async(headerMessage) =>{
        await console.log("inside verify login page title " + headerMessage);
       await waitForObject(this.logoutBtn)
        await checkTitleContains(headerMessage)
    }

    enterSecurityAnswer = async () => {
        await waitForObject(this.securityQuestion);
        await console.log("Inside Business Actions");
        await this.securityQuestion.getText().then(
            async(txtMsg) => {
                console.log("text message ===>" + txtMsg);
                if(txtMsg.startsWith("Question: How do you spell")){
                    console.log("Question: Inside sercurityAns -->" + txtMsg + "element -->" + element );
                    await this.txtSecurityAnswer.sendKeys(securityQuestions["How do you spell \"password\"?"]);
                }else if(txtMsg.trim() === "Question: What is 2+2?"){
                    console.log("Inside sercurityAns -->" + txtMsg);
                    await this.txtSecurityAnswer.sendKeys(securityQuestions["What is 2+2?"]);
                }else if(txtMsg.trim() === "Question: 1+1=?"){                   
                    console.log("Inside securityans -->" + txtMsg);
                    await this.txtSecurityAnswer.sendKeys(securityQuestions["1+1?"]);
                }
            });
    
        }
    
    loginToApplication = async (UsernameVal,PasswordVal) => {
        console.log("Inside login to application = " + UsernameVal + "----" + PasswordVal);
         await this.enterUserName(UsernameVal);
            await this.enterPassword(PasswordVal);
               await this.clickOnLogin(); 
                      
    }

    clickOnLogOut = async () => {
        await console.log("Click on logout button");
        await this.logoutBtn.getLocation().then(function(loaction){return browser.executeScript('window.scrollTo(0,0)')})
        await staticWait(2000)
        await clickElement(this.logoutBtn) 
        await staticWait(2000)
        await waitForObject(this.txtUsername)
    }

    verifyText = async(headerMessage) =>{
        await console.log("inside verify login page title " + headerMessage);
        await checkContainsText(this.headerMsg, headerMessage)
    }

    enterMultipleInvalidOTP = async (OTP) => {
        for(var i = 1; i <= 3;i++ ){
            console.log(i);
          await enterText(this.txtOTP,OTP);
          await this.clickOnLogin();
          await staticWait(5000)
          await clearInputField(this.txtOTP);
        }  
      }
    
    verifyOTPField = async() =>{
        await waitForObject(this.txtOTP)
        await isElementPresent(this.txtOTP)
    }

    enterMultipleInvalidAns = async (ANS) => {
        for(var i = 1; i <= 3;i++ ){
            console.log(i);
          await enterText(this.txtSecurityAnswer,ANS);
          await this.clickOnContinue();
          await staticWait(3000)
        }  
      }

      verifySecAnsField = async() =>{
        await waitForObject(this.txtSecurityAnswer)
        await isElementPresent(this.txtSecurityAnswer)
    }  
    verifyErrorMessage = async(errorMessage) =>{
        await checkContainsText(this.errMsg,errorMessage)
    }
    
    enterInvalidOTP = async (OTP) => {
          await enterText(this.txtOTP,OTP);
          await waitForObject(this.btnLogin)
          await this.clickOnLogin();
         
      }
      enterInvalidANS = async (ANS) => {
        await enterText(this.txtSecurityAnswer,ANS);
        await waitForObject(this.btnLogin)
        await this.clickOnLogin();
       
    }
    clickOnDataVisionLogo = async () => {
        await console.log("Click on logout button");
        await waitForObject(this.dataVisionLogo)
        await clickElement(this.dataVisionLogo) 
    }
    clickOnContinue = async () => {
        await console.log("Click on continue");
        await clickElement(this.continueButton);
    }
}


