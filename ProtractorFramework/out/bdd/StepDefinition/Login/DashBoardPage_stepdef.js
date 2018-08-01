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
const DashBoardPage_1 = require("../../Pages/Login/DashBoardPage");
const LoginPage_1 = require("../../Pages/Login/LoginPage");
const waitActions_1 = require("../../../uiActions/waitActions/waitActions");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let dasboardPage = new DashBoardPage_1.DashBoardPage();
let loginPage = new LoginPage_1.LoginPage();
When(/^User navigates to Roles and Permissions page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dasboardPage.VerifyRolesAndPermission();
}));
Then(/^User expects that Admin link is displyed on dashboard$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield dasboardPage.verifyAdminLink()).to.equal(true, "Admin link is displayed");
    yield loginPage.clickOnLogOut();
}));
Then(/^User expects that Admin link is not displyed$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield dasboardPage.verifyAdminLink()).to.equal(false, "Admin link is not displayed");
    yield loginPage.clickOnLogOut();
}));
Then(/^User verify "([^"]*)?" , "([^"]*)?" and "([^"]*)?" Dashboard page is present$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield dasboardPage.verifyAdminLink()).to.equal(false, "Admin link is not displayed");
    yield loginPage.clickOnLogOut();
}));
Then(/^User verify "([^"]*)?"$/, () => __awaiter(this, void 0, void 0, function* () {
    yield waitActions_1.staticWait(3000);
    expect(yield dasboardPage.verifyAdminLink()).to.equal(false, "Admin link is not displayed");
    yield loginPage.clickOnLogOut();
}));
