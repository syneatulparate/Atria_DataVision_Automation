import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
import {} from "../../"

const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://172.20.235.129:3000/",
    //baseUrl: "http://newtours.demoaut.com/",


    capabilities: {
        browserName: "chrome",
       // browserName: "internet explorer",
        
        //maxInstances:2
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
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
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
        Reporter.createHTMLReport();
    },
};
