const { BeforeAll,Before, After, Status,defineSupportCode,setDefaultTimeout } = require("cucumber");


import * as fs from "fs";
import { browser } from "protractor";

import { config } from "../config/config";

setDefaultTimeout (30 * 1000);
BeforeAll({timeout: 10 * 10000}, async () => {
    
    await browser.get(config.baseUrl);

});

/*defineSupportCode(function({registerHandler}) {
    registerHandler('AfterFeatures', function (features, callback) {
  
      var reporter = require('cucumber-html-reporter');
  
      var bootstrapOptions = {
            theme: 'bootstrap',
            jsonFile: 'reports/cucumber.json',
            output: 'reports/bootstrap-report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                      'App Version': '1.0.0',
                      'Test Environment': 'STAGING',
                      'Browser': 'Chrome',
                      'Platform': 'MacOS',
                      'Parallel': 'Features'
                  }
          };
  
          reporter.generate(bootstrapOptions);
  
          callback();
    });

})*/

After(async function(scenario) {
    
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }else{
        const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
})





