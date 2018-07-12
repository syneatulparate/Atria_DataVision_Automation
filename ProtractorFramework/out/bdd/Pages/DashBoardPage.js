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
const protractor_1 = require("protractor");
const clickElement_1 = require("../../uiActions/mouseActions/clickElement");
const isElementPresent_1 = require("../../uiActions/verifyActions/isElementPresent");
const waitActions_1 = require("../../uiActions/waitActions/waitActions");
class DashBoardPage {
    constructor() {
        this.clickOnAdminButton = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Admin");
            yield waitActions_1.waitForObject(this.adminButton);
            yield clickElement_1.clickElement(this.adminButton);
        });
        this.clickOnRolesAndPermissionLink = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("Roles and Permission link");
            yield clickElement_1.clickElement(this.rolesAndPermissionLink);
        });
        this.VerifyRolesAndPermission = () => __awaiter(this, void 0, void 0, function* () {
            yield console.log("verify ");
            yield this.clickOnAdminButton();
            yield waitActions_1.waitForObject(this.rolesAndPermissionLink);
            yield this.clickOnRolesAndPermissionLink();
            yield waitActions_1.waitForObject(this.headerMsg);
        });
        this.verifyAdminLink = () => __awaiter(this, void 0, void 0, function* () {
            let flag;
            return yield isElementPresent_1.isElementPresent(this.adminButton).then(function (flag) {
                console.log("value of the flag = " + flag);
                return flag;
            });
        });
        this.adminButton = protractor_1.element(protractor_1.by.css("a[routerlink='admin']"));
        this.rolesAndPermissionLink = protractor_1.element(protractor_1.by.css("a[routerlink='roles']"));
        this.headerMsg = protractor_1.element(protractor_1.by.css("h1"));
    }
}
exports.DashBoardPage = DashBoardPage;
