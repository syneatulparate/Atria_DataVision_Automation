import { element, by, ElementFinder, $, browser } from "protractor";
import { enterText } from "../../../uiActions/keyboardActions/setInputField";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import {checkTitle} from "../../../uiActions/verifyActions/checkTitle";
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText";
import { isVisible } from "../../../uiActions/verifyActions/isVisible";

import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent";
import { securityQuestions } from "../../../testData/securityQuestions";
import { clearInputField } from "../../../uiActions/keyboardActions/clearInputField";
import { waitForObject ,staticWait} from "../../../uiActions/waitActions/waitActions";
import { EntitlementPage } from "../Roles&Permissions/EntitlementPage";
let entitlementPage: EntitlementPage = new EntitlementPage();
export class ForgotPasswordPage {

    public txtUsername : ElementFinder;
    public continueButton : ElementFinder;
    public forgotPasswordLink : ElementFinder;
    public errMsg :  ElementFinder;
    public emailTextField : ElementFinder; 
    
 /**
     * Objects from Verify Identity page
     */
    public securityQuestion : ElementFinder;
    public txtSecurityAnswer : ElementFinder;
    public securityImg :  ElementFinder;
    public txtOTP : ElementFinder;
    public msgCloseButton : ElementFinder;
    constructor(){

     /**
     * Objects from forogot password page   
     */
       
        console.log("Inside constructor")
        this.txtUsername = element(by.id('username'));
        this.continueButton = element(by.css(".btn[type='submit']"));
        this.errMsg = element(by.xpath("//div[@class='toast-message']"));
        this.msgCloseButton = element(by.xpath("//div[@class='octicon octicon-x']"));
        //div[@class='octicon octicon-x']
        this.emailTextField=element(by.css("#security-email[type='text']"));
        this.securityQuestion = element(by.css("label[for='security-answer']"));
        this.txtSecurityAnswer = element(by.css("#security-answer[type='text']"));
        this.txtOTP = element(by.id('opt-text'));
        }
        enterUserName = async (UsernameVal) => {
            await console.log("Inside enter username");
            await enterText(this.txtUsername,UsernameVal);
        }
        clickOnContinue = async () => {
            await console.log("Click on continue");
            await clickElement(this.continueButton);
        }

        clickOnForgotPassword = async () => {
            await console.log("Click on login");
            await clickElement(this.forgotPasswordLink);
        }

        verifyLoginPageTitle = async(headerMessage) =>{
            await console.log("inside verify login page title " + headerMessage);
            await checkTitle(headerMessage)
        }

        verifyErrorMessage = async(errorMessage) =>{

            //await checkContainsText(this.errMsg,errorMessage)
            let flag: any
            flag = false;
            // let temp:Promise<boolean>;        
            await waitForObject(this.errMsg);
           
                await this.errMsg.getText().then(async (text) => {
                    await console.log(text);
                    if (await text.toUpperCase().includes(errorMessage.toUpperCase())) {
                        flag = true;
                    } else {
                        flag = false;
                    }
                    await console.log("value of flag 1" + flag)
                });
    
            
    
            await console.log("value of flag 2" + flag)
    
            return flag;
        }
        verifyEmailField = async() =>{
            let linkPresent: Promise<boolean>;
            await waitForObject(this.emailTextField)
            linkPresent= entitlementPage.verifyElement(this.emailTextField)
            
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;
        }
        verifyOTPField = async() =>{

            await staticWait(3000)
            await waitForObject(this.txtOTP)
            await isElementPresent(this.txtOTP)
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
        enterInvalidSecurityAnswer = async (invalidAnswer) => {
            await enterText(this.txtSecurityAnswer,invalidAnswer);
        }
        enterInvalidEmail = async (invalidEmail) => {
            await enterText(this.emailTextField,invalidEmail);
        }

        enterOTP = async (OTP) => {
            await enterText(this.txtOTP,OTP);
        }

        clickOnMsgCloseButton = async () => {
            await waitForObject(this.msgCloseButton);
            await clickElement(this.msgCloseButton);
        }

        enterMultipleInvalidOTP = async (OTP) => {
          for(var i = 1; i <= 3;i++ ){
              console.log(i);
            await enterText(this.txtOTP,OTP);
            await this.clickOnContinue();
            await clearInputField(this.txtOTP);
            //await this.clickOnMsgCloseButton();
          }  
        }
        }