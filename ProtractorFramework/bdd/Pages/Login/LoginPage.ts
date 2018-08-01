import { element, by, ElementFinder, browser } from "protractor"
import { enterText } from "../../../uiActions/keyboardActions/setInputField"
import { clickElement } from "../../../uiActions/mouseActions/clickElement"
import { checkTitle } from "../../../uiActions/verifyActions/checkTitle"
import { securityQuestions } from "../../../testData/securityQuestions"
import { clearInputField } from "../../../uiActions/keyboardActions/clearInputField"
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText"
import { checkTitleContains } from "../../../uiActions/verifyActions/checkTitleContains"
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent"
import { staticWait, waitForObject } from "../../../uiActions/waitActions/waitActions"

export class LoginPage {
    /**
     * Objects from Login Page
     */
    public txtUsername: ElementFinder
    public txtPassword: ElementFinder
    public btnLogin: ElementFinder
    public btnLoginRem: ElementFinder
    public lnkForgotPassword: ElementFinder
    public logoutBtn: ElementFinder
    public continueButton: ElementFinder
    public securityQuestion: ElementFinder
    public txtSecurityAnswer: ElementFinder
    public txtOTP: ElementFinder
    public headerMsg: ElementFinder
    public txtEmail: ElementFinder
    public errMsg: ElementFinder
    public dataVisionLogo: ElementFinder

    /**
     * Objects from Verify Identity page
     */
    constructor() {
        this.txtUsername = element(by.id('username'))
        this.txtPassword = element(by.id('password'))
        this.dataVisionLogo = element(by.css("img.submasthead-dvlogo"))
        this.btnLogin = element(by.xpath("//button[contains(text(),'Log In')]"))
        this.btnLoginRem = element(by.xpath("//button[@type='button']"))
        this.lnkForgotPassword = element(by.linkText("Forgot Password?"))
        this.continueButton = element(by.css(".btn[type='submit']"))
        this.securityQuestion = element(by.css("label[for='security-answer']"))
        this.txtSecurityAnswer = element(by.css("#security-answer"))
        this.logoutBtn = element(by.css("a[ng-reflect-router-link='/logout']"))
        this.headerMsg = element(by.css("div.ng-star-inserted:nth-child(1) > h1:nth-child(1)"))
        this.txtOTP = element(by.xpath("//input[@id='code'] | //input[@id='otp-code']"))
        this.txtEmail = element(by.css("input#security-email"))
        this.errMsg = element(by.xpath("//div[@class='toast-message']"))
        this.errMsg = element(by.xpath("//dt")).element(by.xpath("//a[@routerlink='users']"))
    }
    /**
     * To Enter UserName
     */
    enterUserName = async (UsernameVal) => {
        await enterText(this.txtUsername, UsernameVal)
    }

    /**
     * To enter Password
     */
    enterPassword = async (PasswordVal) => {
        await enterText(this.txtPassword, PasswordVal)
    }

    /**
     * To click on Login Button
     */
    clickOnLogin = async () => {
        await waitForObject(this.btnLogin)
        await clickElement(this.btnLogin)
    }

    /**
     * To click on Login and Remember me Button
     */
    clickOnLoginRem = async () => {
        await waitForObject(this.btnLoginRem)
        await clickElement(this.btnLoginRem)
        await staticWait(5000)
    }

    /**
     * To click on forgot password link
     */
    clickOnForgotPassword = async () => {
        await clickElement(this.lnkForgotPassword)
    }

    /**
     * To verify login page title
     */
    verifyLoginPageTitle = async (headerMessage) => {
        await checkTitle(headerMessage)
        await staticWait(2000)
    }

    /**
     * To verify page title
     */
    verifyPageTitle = async (headerMessage) => {
        await waitForObject(this.logoutBtn)
        await checkTitleContains(headerMessage)
    }

    /**
     * To enter security answer
     */
    enterSecurityAnswer = async () => {
        await waitForObject(this.securityQuestion)
        await this.securityQuestion.getText().then(
            async (txtMsg) => {
                if (txtMsg.startsWith("Question: How do you spell")) {
                    await this.txtSecurityAnswer.sendKeys(securityQuestions["How do you spell \"password\"?"])
                } else if (txtMsg.trim() === "Question: What is 2+2?") {
                    await this.txtSecurityAnswer.sendKeys(securityQuestions["What is 2+2?"])
                } else if (txtMsg.trim() === "Question: 1+1=?") {
                    await this.txtSecurityAnswer.sendKeys(securityQuestions["1+1?"])
                }
            })
    }

    /**
     * To login to application
     */
    loginToApplication = async (UsernameVal, PasswordVal) => {
        await this.enterUserName(UsernameVal)
        await this.enterPassword(PasswordVal)
        await this.clickOnLogin()
    }

    /**
     *  To click on logout button
     */
    clickOnLogOut = async () => {
        await this.logoutBtn.getLocation().then(function () {
            return browser.executeScript('window.scrollTo(0,0)')
        })
        await staticWait(2000)
        await clickElement(this.logoutBtn)
        await staticWait(2000)
        await waitForObject(this.txtUsername)
    }

    /**
     * To verify  text
     */
    verifyText = async (headerMessage) => {
        await checkContainsText(this.headerMsg, headerMessage)
    }

    /**
     * To enter invalid otp
     */
    enterMultipleInvalidOTP = async (OTP) => {
        for (var i = 1; i <= 3; i++) {
            await enterText(this.txtOTP, OTP)
            await this.clickOnLogin()
            await staticWait(5000)
            await clearInputField(this.txtOTP)
        }
    }

    /**
     * To verify OTP field
     */
    verifyOTPField = async () => {
        await waitForObject(this.txtOTP)
        await isElementPresent(this.txtOTP)
    }

    /**
     * To enter invalid security answer
     */
    enterMultipleInvalidAns = async (ANS) => {
        for (var i = 1; i <= 3; i++) {
            await enterText(this.txtSecurityAnswer, ANS)
            await this.clickOnContinue()
            await staticWait(3000)
        }
    }

    /**
     * To verify security answer field
     */
    verifySecurityAnswerField = async () => {
        await waitForObject(this.txtSecurityAnswer)
        await isElementPresent(this.txtSecurityAnswer)
    }

    /**
     * To verify error message
     */
    verifyErrorMessage = async (errorMessage) => {
        await checkContainsText(this.errMsg, errorMessage)
    }

    /**
     * To enter invalid OTP
     */
    enterInvalidOTP = async (OTP) => {
        await enterText(this.txtOTP, OTP)
        await waitForObject(this.btnLogin)
        await this.clickOnLogin()
    }

    /**
     * To enter invalid Security answer
     */
    enterInvalidANS = async (ANS) => {
        await enterText(this.txtSecurityAnswer, ANS)
        await waitForObject(this.btnLogin)
        await this.clickOnLogin()
    }

    /**
     * To click on DataVision logo
     */
    clickOnDataVisionLogo = async () => {
        await waitForObject(this.dataVisionLogo)
        await clickElement(this.dataVisionLogo)
    }

    /**
     * To click on Continue button
     */
    clickOnContinue = async () => {
        await clickElement(this.continueButton)
    }
}


