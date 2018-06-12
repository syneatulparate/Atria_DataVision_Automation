import { browser, protractor, $ } from "protractor";

import {checkIfElementExists} from "../verifyActions/checkIfElementExists";

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const openWebsite = async(type, page) => {
    
    

    await browser.get(page);

};

export {openWebsite}