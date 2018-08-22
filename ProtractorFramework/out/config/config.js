"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
var Env;
(function (Env) {
    Env["QA"] = "http://172.20.235.129:3000";
    Env["Dev"] = "http://172.20.235.113:3000";
    Env["UAT"] = "http://www.way2automation.com/angularjs-protractor/webtables/";
})(Env = exports.Env || (exports.Env = {}));
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: Env.UAT,
    //baseUrl: Env.Dev,
    workspaceFolderPath: __dirname.replace("config", ""),
    capabilities: {
        browserName: "chrome"
        //browserName : "MicrosoftEdge",
        //browserName: "firefox",
        //browserName:"internet explore",
        //browserName:"Safari",
    },
    /* multiCapabilities: [
   
           {
               browserName : "chrome",
           }, {
               browserName : "firefox"
           },
   
       ],*/
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../../bdd/Features/*/*.feature"],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser
            .manage()
            .window()
            .maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../bdd/StepDefinition/*/*.ts", "../../support/*.ts"],
        strict: true,
        tags: "@test12"
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    }
};
