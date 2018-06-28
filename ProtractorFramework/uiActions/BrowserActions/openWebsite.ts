import { browser, protractor, $ } from "protractor";
import { config } from "../../config/config"
import {checkIfElementExists} from "../verifyActions/checkIfElementExists";

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const openWebsite = async() => {
    
    

    await browser.get(config.baseUrl);

};

export {openWebsite}