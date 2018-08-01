import { browser, protractor } from "protractor"
import { LoginPage } from "../../Pages/Login/LoginPage"
import { openWebsite } from "../../../uiActions/BrowserActions/openWebsite"
import { waitForObject, staticWait } from "../../../uiActions/waitActions/waitActions"

const { Given } = require("cucumber")
const { When, Then } = require("cucumber")

let loginPage: LoginPage = new LoginPage()

Given(/^User is on Login page$/,
    openWebsite
)

When(/^User enters valid "([^"]*)?" and "([^"]*)?" and click login button$/, async (username, password) => {
    await loginPage.loginToApplication(username, password)
})

When(/^User click on the forgot password link and verifies the title "([^"]*)?" is displayed$/, async (headerMessage) => {
    await loginPage.clickOnForgotPassword()
    await loginPage.verifyLoginPageTitle(headerMessage)
})

Then(/^User expects that title contains the text "([^"]*)?"$/, async (headerMessage) => {
    await waitForObject(loginPage.logoutBtn)
    await loginPage.verifyLoginPageTitle(headerMessage)
})

When(/^User enter securityAnswer to the securityAnswer input field$/, async () => {
    await loginPage.enterSecurityAnswer()
})

Then(/^User logout from the account$/, async () => {
    await loginPage.clickOnLogOut()
    await staticWait(3000)
    await waitForObject(loginPage.txtUsername)
})

When(/^User click on the logout button and verifies the title "([^"]*)?" is Present$/, async (headerMessage) => {
    await loginPage.clickOnLogOut()
    await loginPage.verifyLoginPageTitle(headerMessage)
})

Then(/^User expect that element contains the text "([^"]*)?"$/, async (headerMessage) => {
    await loginPage.verifyText(headerMessage)
})

When(/^User enter securityAnswer to the securityAnswer input field and click on Loginandrememberme button$/, async () => {
    await loginPage.enterSecurityAnswer()
    await waitForObject(loginPage.btnLoginRem)
    await loginPage.clickOnLoginRem()
})

Then(/^User expects that title  contains the text "([^"]*)?"$/, async (headerMessage) => {
    await waitForObject(loginPage.logoutBtn)
    await loginPage.verifyPageTitle(headerMessage)
})

When(/^User enters invalid Otp "([^"]*)?" 3 times$/, async (OTP) => {
    await loginPage.enterMultipleInvalidOTP(OTP)
})

Then(/^User expect that the OTP field is Present$/, async () => {
    await loginPage.verifyOTPField()
})

When(/^User enters invalid SecurityAnswer "([^"]*)?" 3 times$/, async (ANS) => {
    await loginPage.enterMultipleInvalidAns(ANS)
})

Then(/^User expect that the SecurityAnswer field is displayed$/, async () => {
    await loginPage.verifySecurityAnswerField()
})

When(/^User enter invalid otp "([^"]*)?" and click on Login button$/, async (ANS) => {
    await loginPage.enterInvalidOTP(ANS)
})

When(/^User enter invalid SecurityAnswer "([^"]*)?" and click on Login button$/, async (ANS) => {
    await loginPage.enterInvalidANS(ANS)
})