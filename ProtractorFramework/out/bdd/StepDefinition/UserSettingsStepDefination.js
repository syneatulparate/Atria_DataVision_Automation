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
const { BeforeAll, Before, After, Status, defineSupportCode, setDefaultTimeout } = require("cucumber");
const EntitlementPage_1 = require("../Pages/EntitlementPage");
const DashBoardPage_1 = require("../Pages/DashBoardPage");
const LoginPage_1 = require("../Pages/LoginPage");
const waitActions_1 = require("../../uiActions/waitActions/waitActions");
const UserSettingsPage_1 = require("../Pages/UserSettingsPage");
const UserSetupPage_1 = require("../Pages/UserSetupPage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let status;
let entitlementPage = new EntitlementPage_1.EntitlementPage();
let loginPage = new LoginPage_1.LoginPage();
let dasboardPage = new DashBoardPage_1.DashBoardPage();
let userSettings = new UserSettingsPage_1.UserSettingsPage();
let userSetuppage = new UserSetupPage_1.UserSetupPage();
Then(/^User expects that "([^"]*)?" is displayed$/, (expectedScreen) => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield userSettings.verifyPageHeading(expectedScreen)).
        to.equal(true, 'User settings heading not displayed');
    expect(yield userSetuppage.verifyHeaderElement(expectedScreen)).
        to.equal(true, 'User settings heading not displayed');
}));
