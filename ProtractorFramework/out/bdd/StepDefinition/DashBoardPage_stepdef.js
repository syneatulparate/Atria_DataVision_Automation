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
const DashBoardPage_1 = require("../Pages/DashBoardPage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
let dasboardPage = new DashBoardPage_1.DashBoardPage();
When(/^User navigates to Roles and Permissions page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield dasboardPage.VerifyRolesAndPermission();
}));
