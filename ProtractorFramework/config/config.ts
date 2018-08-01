import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";


const jsonReports = process.cwd() + "/reports/json";


export enum Env {
    QA = "http://172.20.235.129:3000",
    Dev = "http://172.20.235.113:3000",
    UAT = "http://www.globalsqa.com/demo-site/draganddrop/",
}

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: Env.UAT,
    // baseUrl: Env.Dev,

    capabilities: {
        browserName: "chrome",
        //browserName : "MicrosoftEdge",
        //browserName: "firefox",
        //   browserName:"internet explore",
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

    specs: [
        "../../bdd/Features/*/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../bdd/StepDefinition/*/*.ts", "../../support/*.ts"],
        strict: true,
        tags: "@AT216_Ent_040_01",

    },


    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
