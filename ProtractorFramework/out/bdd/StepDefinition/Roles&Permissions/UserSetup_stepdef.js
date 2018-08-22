"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntitlementPage_1 = require("../../Pages/Roles&Permissions/EntitlementPage");
const LoginPage_1 = require("../../Pages/Login/LoginPage");
const UserSetupPage_1 = require("../../Pages/Roles&Permissions/UserSetupPage");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const { BeforeAll, Before, After, Status, defineSupportCode, setDefaultTimeout } = require("cucumber");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let status;
let entitlementPage = new EntitlementPage_1.EntitlementPage();
let loginPage = new LoginPage_1.LoginPage();
let userSetuppage = new UserSetupPage_1.UserSetupPage();
When(/^User log in with "([^"]*)?" and "([^"]*)?" and navigates to Dashboard Page$/, (userName, password) => __awaiter(this, void 0, void 0, function* () {
    return yield loginPage.txtUsername.isDisplayed().then((isDisplayed) => __awaiter(this, void 0, void 0, function* () {
        yield loginPage.loginToApplication(userName, password);
        yield waitActions_1.waitForObject(loginPage.logoutBtn);
        yield loginPage.verifyLoginPageTitle("Dashboard – dataVISION");
        return true;
    }), (isDisplayed) => __awaiter(this, void 0, void 0, function* () {
        yield loginPage.clickOnDataVisionLogo();
        yield loginPage.verifyLoginPageTitle("Dashboard – dataVISION");
        return false;
    }));
}));
