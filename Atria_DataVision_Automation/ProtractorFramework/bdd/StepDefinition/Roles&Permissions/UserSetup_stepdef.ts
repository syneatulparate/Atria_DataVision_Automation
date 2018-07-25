import { browser, protractor, by, element, ExpectedConditions } from "protractor";
import { EntitlementPage } from "../../Pages/Roles&Permissions/EntitlementPage";
import { LoginPage } from "../../Pages/Login/LoginPage";
import { UserSetupPage } from "../../Pages/Roles&Permissions/UserSetupPage";
import { waitForObject } from "../../../uiActions/waitActions/waitActions";
const { BeforeAll, Before, After, Status, defineSupportCode, setDefaultTimeout } = require("cucumber");

const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let status;
let entitlementPage: EntitlementPage = new EntitlementPage();
let loginPage: LoginPage = new LoginPage();
let userSetuppage: UserSetupPage = new UserSetupPage();


When(/^User log in with "([^"]*)?" and "([^"]*)?" and navigates to Dashboard Page$/, async (userName, password) => {
         
    return await loginPage.txtUsername.isDisplayed()
        .then(
            async (isDisplayed) => {
                await loginPage.loginToApplication(userName, password)
                await waitForObject(loginPage.logoutBtn)
                await loginPage.verifyLoginPageTitle("Dashboard – dataVISION")
               
                return true;
            },
            async (isDisplayed) => {
                await loginPage.clickOnDataVisionLogo();
                await loginPage.verifyLoginPageTitle("Dashboard – dataVISION")
                return false;
            });

});


 