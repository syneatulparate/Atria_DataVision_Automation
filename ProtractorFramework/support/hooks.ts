const {
  BeforeAll,
  Before,
  After,
  Status,
  defineSupportCode,
  setDefaultTimeout
} = require("cucumber");

import * as fs from "fs";
import { browser } from "protractor";

import { config } from "../config/config";
setDefaultTimeout(30 * 10000);
BeforeAll({ timeout: 10 * 10000 }, async () => {
  await browser.get(config.baseUrl);
});

After(async function(scenario) {
  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  } else {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  }
});
