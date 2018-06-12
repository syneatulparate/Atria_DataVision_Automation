"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: "http://172.20.235.129:3000/",
    //baseUrl: "http://newtours.demoaut.com/",
    capabilities: {
        // browserName: "chrome",
        // browserName: "internet explorer",
        browserName: "firefox",
    },
    /* multiCapabilities: [
 
         {
             browserName : "chrome",
         }, {
             browserName : "firefox"
         },{
             browserName : "internet explorer"
         }
 
     ],*/
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../../bdd/Features/*/*.feature",
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
        //browser.manage().timeouts().implicitlyWait(2000);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../bdd/StepDefinition/*/*.ts", "../../support/*.ts"],
        strict: true,
        tags: "@UVL>1Day2FAConfigModernInvalidOTP",
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
