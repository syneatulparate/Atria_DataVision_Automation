import { browser, protractor, by, element, ExpectedConditions } from "protractor"
const { BeforeAll, Before, After, Status, defineSupportCode, setDefaultTimeout } = require("cucumber")
import { stat, statSync } from "fs"
import { error } from "util"
import { EntitlementPage } from "../../Pages/Roles&Permissions/EntitlementPage"
import { LoginPage } from "../../Pages/Login/LoginPage"
import { DashBoardPage } from "../../Pages/Login/DashBoardPage"
import { UserSettingsPage } from "../../Pages/Roles&Permissions/UserSettingsPage"
import { UserSetupPage } from "../../Pages/Roles&Permissions/UserSetupPage"
import { staticWait } from "../../../uiActions/waitActions/waitActions"

const { Given } = require("cucumber")
const { When, Then } = require("cucumber")
const chai = require("chai").use(require("chai-as-promised"))
const expect = chai.expect
let status
let entitlementPage: EntitlementPage = new EntitlementPage()
let loginPage: LoginPage = new LoginPage()
let dasboardPage: DashBoardPage = new DashBoardPage()
let userSettings: UserSettingsPage = new UserSettingsPage()
let userSetuppage: UserSetupPage = new UserSetupPage()

Then(/^User expects that "([^"]*)?" is displayed$/, async (expectedScreen) => {
    await staticWait(3000)
    expect(await userSettings.verifyPageHeading(expectedScreen)).to.equal(true, 'User settings heading not displayed')
    await staticWait(3000)
    expect(await userSetuppage.verifyHeaderElement(expectedScreen)).to.equal(true, 'User settings heading not displayed')
})

