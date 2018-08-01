import { element, by, ElementFinder, $, browser } from "protractor"
import { enterText } from "../../../uiActions/keyboardActions/setInputField"
import { clickElement } from "../../../uiActions/mouseActions/clickElement"
import { checkTitle } from "../../../uiActions/verifyActions/checkTitle"
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText"
import { isVisible } from "../../../uiActions/verifyActions/isVisible"

import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent"
import { securityQuestions } from "../../../testData/securityQuestions"
import { clearInputField } from "../../../uiActions/keyboardActions/clearInputField"
import { waitForObject } from "../../../uiActions/waitActions/waitActions"

export class DashBoardPage {
    public adminButton: ElementFinder
    public rolesAndPermissionLink: ElementFinder
    public headerMsg: ElementFinder

    constructor() {
        this.adminButton = element(by.css("a[routerlink='admin']"))
        this.rolesAndPermissionLink = element(by.css("a[routerlink='roles']"))
        this.headerMsg = element(by.css("h1"))
    }

    /**
     * To Click on admin button
     */
    clickOnAdminButton = async () => {
        await waitForObject(this.adminButton)
        await clickElement(this.adminButton)
    }

    /**
     * To Click on Roles and Permission link
     */
    clickOnRolesAndPermissionLink = async () => {
        await console.log("Roles and Permission link")
        await clickElement(this.rolesAndPermissionLink)
    }

    /**
     * To Verify Roles and Permission link
     */
    VerifyRolesAndPermission = async () => {
        await this.clickOnAdminButton()
        await waitForObject(this.rolesAndPermissionLink)
        await this.clickOnRolesAndPermissionLink()
        await waitForObject(this.headerMsg)
    }

    /**
     * To Verify admin link
     */
    verifyAdminLink = async () => {
        let flag: any
        return await isElementPresent(this.adminButton).then(function (flag) {
            return flag
        })
    }
}