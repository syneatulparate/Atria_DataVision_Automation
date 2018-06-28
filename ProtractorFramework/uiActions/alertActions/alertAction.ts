import { browser, protractor, $ } from "protractor";
import { config } from "../../config/config"

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const alertAccept = async () => {
    browser.sleep(5000);
    await browser.switchTo().alert().accept();

};

export { alertAccept }

const alertDismiss = async () => {
    browser.sleep(5000);
    await browser.switchTo().alert().dismiss();

};

export { alertDismiss }